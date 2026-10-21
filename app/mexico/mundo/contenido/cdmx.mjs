// Ciudad de México · the centre and Xochimilco. Five places, four levels each
// (A0, A1, A2, B1). Every level is written on its own: same place and people,
// different situations, decisions and questions. English is a natural translation.
export default {
  id: 'cdmx',
  spots: [
    // ------------------------------------------------------------ the market
    {
      id: 'mercado',
      name: { es: 'El mercado', en: 'The market' },
      who: { name: 'Doña Rosa', role: { es: 'vendedora de frutas', en: 'fruit seller' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado grande. Hay frutas de muchos colores. Doña Rosa vende mangos, papayas y limones.', en: 'It is a big market. There is fruit of many colours. Doña Rosa sells mangoes, papayas and limes.' },
          opener: { es: '¡Buenos días! Soy Rosa. ¿Qué fruta quieres?', en: 'Good morning! I am Rosa. What fruit do you want?' },
          decide: {
            ask: { es: 'Doña Rosa tiene mango, papaya y sandía. ¿Qué compras?', en: 'Doña Rosa has mango, papaya and watermelon. What do you buy?' },
            options: [
              { say: { es: 'Un mango, por favor.', en: 'A mango, please.' }, then: { es: 'Rosa dice: «Muy bien. Es muy dulce».', en: 'Rosa says: “Very good. It is very sweet.”' } },
              { say: { es: 'Una papaya grande.', en: 'A big papaya.' }, then: { es: 'Rosa dice: «Es pesada. ¿Tienes una bolsa?»', en: 'Rosa says: “It is heavy. Do you have a bag?”' } },
              { say: { es: 'Sandía, por favor.', en: 'Watermelon, please.' }, then: { es: 'Rosa ríe: «¿Una sandía entera? ¡Es enorme!»', en: 'Rosa laughs: “A whole watermelon? It is huge!”' } },
            ],
          },
          twist: { es: 'Rosa te da un mango con chile y limón. Es gratis. ¡Pica un poco! ¿Qué dices?', en: 'Rosa gives you a mango with chilli and lime. It is free. It is a bit spicy! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la fruta?', en: 'Do you like fruit?' }, help: { es: 'Sí, me gusta. / No mucho.', en: 'Yes, I like it. / Not much.' }, follow: [{ es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, { es: '¿Comes fruta todos los días?', en: 'Do you eat fruit every day?' }] },
            { q: { es: '¿Hay un mercado en tu ciudad?', en: 'Is there a market in your city?' }, help: { es: 'Sí, hay un mercado. / No, no hay.', en: 'Yes, there is a market. / No, there isn’t.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Vas al mercado?', en: 'Do you go to the market?' }] },
            { q: { es: '¿Te gusta la comida picante?', en: 'Do you like spicy food?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Un poco o mucho?', en: 'A little or a lot?' }, { es: '¿Comes chile?', en: 'Do you eat chilli?' }] },
            { q: { es: '¿Qué color te gusta?', en: 'What colour do you like?' }, help: { es: 'Me gusta el rojo / el verde / el amarillo.', en: 'I like red / green / yellow.' }, follow: [{ es: '¿De qué color es el mango?', en: 'What colour is the mango?' }, { es: '¿De qué color es tu casa?', en: 'What colour is your house?' }] },
          ],
          words: [{ es: 'el mercado', en: 'the market' }, { es: 'la fruta', en: 'fruit' }, { es: 'dulce', en: 'sweet' }, { es: 'picante', en: 'spicy' }, { es: 'gratis', en: 'free' }],
        },
        A1: {
          scene: { es: 'Son las diez de la mañana en el mercado de la Merced. Hay mucha gente, música y olor a tortillas. Doña Rosa ordena sus frutas.', en: 'It is ten in the morning at La Merced market. There are lots of people, music and the smell of tortillas. Doña Rosa arranges her fruit.' },
          opener: { es: '¡Pásale, pásale! ¿Es tu primera vez en un mercado mexicano? Aquí todo es fresco.', en: 'Come in, come in! Is it your first time at a Mexican market? Everything here is fresh.' },
          decide: {
            ask: { es: 'Quieres preparar un desayuno para tus amigos. Tienes 100 pesos. ¿Qué compras?', en: 'You want to make breakfast for your friends. You have 100 pesos. What do you buy?' },
            options: [
              { say: { es: 'Frutas para hacer una ensalada.', en: 'Fruit to make a salad.' }, then: { es: 'Rosa te prepara una bolsa con mango, papaya y piña. Sobran veinte pesos.', en: 'Rosa makes you a bag with mango, papaya and pineapple. You have twenty pesos left.' } },
              { say: { es: 'Tortillas, aguacates y tomates.', en: 'Tortillas, avocados and tomatoes.' }, then: { es: 'Rosa dice: «¡Vas a hacer guacamole! Los aguacates están en el puesto de mi hermano».', en: 'Rosa says: “You are going to make guacamole! The avocados are at my brother’s stall.”' } },
              { say: { es: 'Pan dulce y café.', en: 'Sweet bread and coffee.' }, then: { es: 'Rosa señala la panadería de enfrente: «Las conchas de ahí son las mejores».', en: 'Rosa points to the bakery opposite: “The conchas there are the best.”' } },
            ],
          },
          twist: { es: 'Un niño pequeño llora: no encuentra a su mamá. Rosa lo sienta en su puesto y te pide ayuda para buscarla.', en: 'A little boy is crying: he can’t find his mum. Rosa sits him at her stall and asks you to help look for her.' },
          questions: [
            { q: { es: '¿Dónde compras la comida normalmente?', en: 'Where do you usually buy food?' }, help: { es: 'Compro en el supermercado / en un mercado / por internet.', en: 'I buy at the supermarket / at a market / online.' }, follow: [{ es: '¿Por qué allí?', en: 'Why there?' }, { es: '¿Cuántas veces por semana?', en: 'How many times a week?' }] },
            { q: { es: '¿Qué desayunas normalmente?', en: 'What do you usually have for breakfast?' }, help: { es: 'Normalmente desayuno… / No desayuno.', en: 'I usually have… / I don’t have breakfast.' }, follow: [{ es: '¿Y los domingos?', en: 'And on Sundays?' }, { es: '¿Desayunas solo o con alguien?', en: 'Do you have breakfast alone or with someone?' }] },
            { q: { es: '¿Te gusta cocinar para otras personas?', en: 'Do you like cooking for other people?' }, help: { es: 'Sí, me encanta cocinar… / No, prefiero…', en: 'Yes, I love cooking… / No, I prefer…' }, follow: [{ es: '¿Qué plato cocinas bien?', en: 'What dish do you cook well?' }, { es: '¿Para quién cocinas?', en: 'Who do you cook for?' }] },
            { q: { es: '¿Qué haces si un niño está perdido?', en: 'What do you do if a child is lost?' }, help: { es: 'Primero… / Busco a… / Llamo a…', en: 'First… / I look for… / I call…' }, follow: [{ es: '¿Qué le preguntas al niño?', en: 'What do you ask the child?' }, { es: '¿Te perdiste alguna vez de niño?', en: 'Did you ever get lost as a child?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'fresco', en: 'fresh' }, { es: 'el aguacate', en: 'the avocado' }, { es: 'sobrar', en: 'to be left over' }, { es: 'perdido', en: 'lost' }],
        },
        A2: {
          scene: { es: 'Doña Rosa trabaja en este mercado desde hace cuarenta años. Hoy está preocupada: abrieron un supermercado enorme a dos calles y el sábado vinieron pocos clientes.', en: 'Doña Rosa has worked at this market for forty years. Today she is worried: a huge supermarket opened two streets away and few customers came on Saturday.' },
          opener: { es: 'Mi mamá vendía aquí y mi abuela también. Antes había filas en mi puesto. Ayer vendí la mitad. ¿Tú dónde compras?', en: 'My mum sold here and my grandmother too. There used to be queues at my stall. Yesterday I sold half as much. Where do you shop?' },
          decide: {
            ask: { es: 'Rosa quiere atraer clientes nuevos. ¿Qué le recomiendas?', en: 'Rosa wants to attract new customers. What do you recommend?' },
            options: [
              { say: { es: 'Vender fruta preparada para llevar, en vasos.', en: 'Sell prepared fruit to go, in cups.' }, then: { es: 'Rosa lo prueba ese mismo día. A la hora de comer, los oficinistas hacen fila.', en: 'Rosa tries it that same day. At lunchtime, office workers queue up.' } },
              { say: { es: 'Abrir una cuenta en redes sociales con fotos del puesto.', en: 'Open a social media account with photos of the stall.' }, then: { es: 'Su nieta le saca fotos. Rosa no entiende nada, pero la primera foto tiene trescientos «me gusta».', en: 'Her granddaughter takes photos. Rosa doesn’t understand any of it, but the first photo gets three hundred likes.' } },
              { say: { es: 'Bajar los precios.', en: 'Lower the prices.' }, then: { es: 'Rosa duda: «Si bajo más, no gano nada. El supermercado siempre puede bajar más que yo».', en: 'Rosa hesitates: “If I lower them more, I earn nothing. The supermarket can always go lower than me.”' } },
            ],
          },
          twist: { es: 'Llega un señor del supermercado: ofrece a Rosa un trabajo con sueldo fijo en la sección de frutas. Ella se queda callada.', en: 'A man from the supermarket arrives: he offers Rosa a job with a fixed salary in the fruit section. She goes quiet.' },
          questions: [
            { q: { es: '¿Cómo era tu barrio cuando eras niño? ¿Qué tiendas había?', en: 'What was your neighbourhood like when you were a child? What shops were there?' }, help: { es: 'Había una tienda de… / Antes la gente compraba…', en: 'There was a … shop / People used to buy…' }, follow: [{ es: '¿Todavía existe?', en: 'Does it still exist?' }, { es: '¿Qué cambió más?', en: 'What changed the most?' }] },
            { q: { es: '¿Qué compraste la última vez en una tienda pequeña?', en: 'What did you buy last time at a small shop?' }, help: { es: 'La última vez compré… porque…', en: 'Last time I bought… because…' }, follow: [{ es: '¿Conocías al vendedor?', en: 'Did you know the seller?' }, { es: '¿Fue más caro?', en: 'Was it more expensive?' }] },
            { q: { es: '¿Tu familia tenía un negocio o un oficio especial?', en: 'Did your family have a business or a special trade?' }, help: { es: 'Mi abuelo era… / Nadie tenía negocio, pero…', en: 'My grandfather was… / Nobody had a business, but…' }, follow: [{ es: '¿Te gustaría continuarlo?', en: 'Would you like to continue it?' }, { es: '¿Qué aprendiste de ese trabajo?', en: 'What did you learn from that work?' }] },
            { q: { es: '¿Qué crees que Rosa debe responder al señor del supermercado?', en: 'What do you think Rosa should answer the supermarket man?' }, help: { es: 'Creo que debe… porque… / Yo en su lugar…', en: 'I think she should… because… / In her place I…' }, follow: [{ es: '¿Qué pierde si acepta?', en: 'What does she lose if she accepts?' }, { es: '¿Qué gana?', en: 'What does she gain?' }] },
          ],
          words: [{ es: 'desde hace', en: 'for (time)' }, { es: 'la fila', en: 'the queue' }, { es: 'el sueldo fijo', en: 'fixed salary' }, { es: 'atraer', en: 'to attract' }, { es: 'el oficio', en: 'trade, craft' }],
        },
        B1: {
          scene: { es: 'Doña Rosa habla con una periodista sobre el futuro de los mercados tradicionales. La ciudad quiere «modernizar» la Merced: techos nuevos, menos puestos y más locales de comida para turistas.', en: 'Doña Rosa talks with a journalist about the future of traditional markets. The city wants to “modernise” La Merced: new roofs, fewer stalls and more food places for tourists.' },
          opener: { es: 'Nadie dice que no haga falta arreglar el techo. Lo que me preocupa es que, si lo convierten en un lugar bonito para turistas, la gente del barrio ya no pueda pagarlo. ¿Para quién es el mercado, entonces?', en: 'Nobody says the roof doesn’t need fixing. What worries me is that if they turn it into a pretty place for tourists, people from the neighbourhood won’t be able to afford it. Who is the market for, then?' },
          decide: {
            ask: { es: 'La periodista te pregunta qué propuesta apoyarías. ¿Qué dices?', en: 'The journalist asks which proposal you would support. What do you say?' },
            options: [
              { say: { es: 'Renovar el mercado, pero con un límite al precio de los alquileres.', en: 'Renovate the market, but with a cap on rents.' }, then: { es: 'Rosa asiente: «Eso sí. Que mejore, pero que no nos echen».', en: 'Rosa nods: “That, yes. Let it improve, but don’t throw us out.”' } },
              { say: { es: 'Dejarlo como está: su encanto es justamente que no es perfecto.', en: 'Leave it as it is: its charm is precisely that it isn’t perfect.' }, then: { es: 'La periodista objeta que el techo tiene goteras y que el año pasado hubo un incendio.', en: 'The journalist objects that the roof leaks and there was a fire last year.' } },
              { say: { es: 'Que los vendedores decidan en una votación.', en: 'Let the sellers decide in a vote.' }, then: { es: 'Rosa sonríe: «Somos tres mil. Ni para la fiesta del santo nos ponemos de acuerdo».', en: 'Rosa smiles: “There are three thousand of us. We can’t even agree on the saint’s day party.”' } },
            ],
          },
          twist: { es: 'La periodista confiesa que el proyecto lo financia una empresa que también construye hoteles en el centro. Rosa la mira en silencio.', en: 'The journalist admits that the project is funded by a company that also builds hotels downtown. Rosa looks at her in silence.' },
          questions: [
            { q: { es: '¿Crees que el turismo ayuda o perjudica a los barrios tradicionales?', en: 'Do you think tourism helps or harms traditional neighbourhoods?' }, help: { es: 'Por un lado… por otro lado… / Depende de…', en: 'On one hand… on the other… / It depends on…' }, follow: [{ es: '¿Conoces algún ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué harías para equilibrarlo?', en: 'What would you do to balance it?' }] },
            { q: { es: '¿Qué lugar de tu ciudad cambió tanto que ya no lo reconoces?', en: 'What place in your city changed so much that you no longer recognise it?' }, help: { es: 'Antes era… y ahora se ha convertido en…', en: 'It used to be… and now it has become…' }, follow: [{ es: '¿El cambio fue para mejor?', en: 'Was the change for the better?' }, { es: '¿Quién se benefició?', en: 'Who benefited?' }] },
            { q: { es: 'Si fueras alcalde, ¿qué harías con un mercado antiguo y en mal estado?', en: 'If you were mayor, what would you do with an old, run-down market?' }, help: { es: 'Si fuera alcalde, primero… / Les preguntaría a…', en: 'If I were mayor, first… / I would ask…' }, follow: [{ es: '¿Quién pagaría?', en: 'Who would pay?' }, { es: '¿Cuánto tiempo darías a los vendedores?', en: 'How much time would you give the sellers?' }] },
            { q: { es: '¿Prefieres lo auténtico aunque sea incómodo, o lo moderno aunque sea igual en todas partes?', en: 'Do you prefer the authentic even if uncomfortable, or the modern even if it’s the same everywhere?' }, help: { es: 'Prefiero… porque… / No creo que haya que elegir…', en: 'I prefer… because… / I don’t think you have to choose…' }, follow: [{ es: '¿Y cuando viajas?', en: 'And when you travel?' }, { es: '¿Pagarías más por lo auténtico?', en: 'Would you pay more for the authentic?' }] },
          ],
          words: [{ es: 'hacer falta', en: 'to be needed' }, { es: 'echar', en: 'to throw out' }, { es: 'la gotera', en: 'leak (roof)' }, { es: 'financiar', en: 'to fund' }, { es: 'perjudicar', en: 'to harm' }],
        },
      },
    },
    // ------------------------------------------------------------ the subway
    {
      id: 'metro',
      name: { es: 'El metro', en: 'The subway' },
      who: { name: 'Iván', role: { es: 'estudiante de arquitectura', en: 'architecture student' } },
      levels: {
        A0: {
          scene: { es: 'Es la estación de metro Zócalo. Hay mucha gente. Iván tiene un mapa del metro.', en: 'It is Zócalo subway station. There are lots of people. Iván has a subway map.' },
          opener: { es: 'Hola, soy Iván. ¿Adónde vas?', en: 'Hi, I am Iván. Where are you going?' },
          decide: {
            ask: { es: 'Iván dice: «La línea azul, la rosa o la verde». ¿Qué línea tomas?', en: 'Iván says: “The blue line, the pink line or the green line.” Which line do you take?' },
            options: [
              { say: { es: 'La línea azul.', en: 'The blue line.' }, then: { es: 'Iván dice: «Bien. Es rápida. Cinco estaciones».', en: 'Iván says: “Good. It is fast. Five stations.”' } },
              { say: { es: 'La línea rosa.', en: 'The pink line.' }, then: { es: 'Iván dice: «Uy, está llena. Mucha gente».', en: 'Iván says: “Oh, it is full. Lots of people.”' } },
              { say: { es: 'La verde, por favor.', en: 'The green one, please.' }, then: { es: 'Iván dice: «Es mi línea. ¡Vamos juntos!»', en: 'Iván says: “It is my line. Let’s go together!”' } },
            ],
          },
          twist: { es: 'Un músico entra al vagón con una guitarra. Canta muy fuerte. Todos miran. ¿Qué haces?', en: 'A musician gets into the carriage with a guitar. He sings very loudly. Everyone looks. What do you do?' },
          questions: [
            { q: { es: '¿Tomas el metro?', en: 'Do you take the subway?' }, help: { es: 'Sí, tomo el metro. / No, tomo el autobús.', en: 'Yes, I take the subway. / No, I take the bus.' }, follow: [{ es: '¿Todos los días?', en: 'Every day?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Cómo vas al trabajo o a la escuela?', en: 'How do you go to work or school?' }, help: { es: 'Voy en metro / en coche / a pie.', en: 'I go by subway / by car / on foot.' }, follow: [{ es: '¿Cuántos minutos?', en: 'How many minutes?' }, { es: '¿Vas solo?', en: 'Do you go alone?' }] },
            { q: { es: '¿Te gusta la música en la calle?', en: 'Do you like music in the street?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t.' }, follow: [{ es: '¿Das dinero a los músicos?', en: 'Do you give money to musicians?' }, { es: '¿Qué música te gusta?', en: 'What music do you like?' }] },
            { q: { es: '¿Hay mucha gente en tu ciudad?', en: 'Are there lots of people in your city?' }, help: { es: 'Sí, hay mucha gente. / No, hay poca gente.', en: 'Yes, there are lots of people. / No, there are few people.' }, follow: [{ es: '¿Tu ciudad es grande?', en: 'Is your city big?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
          ],
          words: [{ es: 'la estación', en: 'the station' }, { es: 'la línea', en: 'the line' }, { es: 'lleno', en: 'full' }, { es: 'el vagón', en: 'the carriage' }, { es: 'rápido', en: 'fast' }],
        },
        A1: {
          scene: { es: 'Son las ocho de la mañana: hora pico. Iván estudia en la universidad y viaja en metro todos los días. Hoy el andén está lleno y el tren no llega.', en: 'It is eight in the morning: rush hour. Iván studies at the university and travels by subway every day. Today the platform is full and the train isn’t coming.' },
          opener: { es: 'Siempre es así a esta hora. Hay vagones solo para mujeres y niños, ¿sabías? Oye, ¿tú adónde vas?', en: 'It is always like this at this time. There are carriages only for women and children, did you know? Hey, where are you going?' },
          decide: {
            ask: { es: 'Llega un tren lleno. Tienes una cita en veinte minutos. ¿Qué haces?', en: 'A full train arrives. You have an appointment in twenty minutes. What do you do?' },
            options: [
              { say: { es: 'Entro como puedo.', en: 'I squeeze in however I can.' }, then: { es: 'Entras con Iván. No puedes mover los brazos, pero llegas a tiempo.', en: 'You get in with Iván. You can’t move your arms, but you arrive on time.' } },
              { say: { es: 'Espero el próximo tren.', en: 'I wait for the next train.' }, then: { es: 'El próximo llega en cuatro minutos y tiene asientos libres. Iván se ríe: «Paciencia, amigo».', en: 'The next one comes in four minutes and has free seats. Iván laughs: “Patience, friend.”' } },
              { say: { es: 'Salgo y tomo un taxi.', en: 'I go out and take a taxi.' }, then: { es: 'Iván te advierte: «A esta hora el tráfico es terrible. El metro es más rápido».', en: 'Iván warns you: “At this time the traffic is terrible. The subway is faster.”' } },
            ],
          },
          twist: { es: 'Dentro del vagón, un vendedor ofrece chicles, pilas y… ¡un curso de inglés en un CD! Iván compra uno.', en: 'Inside the carriage, a vendor sells gum, batteries and… an English course on a CD! Iván buys one.' },
          questions: [
            { q: { es: '¿A qué hora sales de casa normalmente?', en: 'What time do you usually leave home?' }, help: { es: 'Normalmente salgo a las…', en: 'I usually leave at…' }, follow: [{ es: '¿Llegas tarde a veces?', en: 'Are you late sometimes?' }, { es: '¿Qué haces en el camino?', en: 'What do you do on the way?' }] },
            { q: { es: '¿Qué transporte usas más?', en: 'What transport do you use most?' }, help: { es: 'Uso más… porque es…', en: 'I use … most because it is…' }, follow: [{ es: '¿Cuánto cuesta?', en: 'How much does it cost?' }, { es: '¿Qué no te gusta de él?', en: 'What don’t you like about it?' }] },
            { q: { es: '¿Qué haces cuando esperas?', en: 'What do you do when you wait?' }, help: { es: 'Leo / escucho música / miro el móvil…', en: 'I read / listen to music / look at my phone…' }, follow: [{ es: '¿Eres paciente?', en: 'Are you patient?' }, { es: '¿Qué te pone nervioso?', en: 'What makes you nervous?' }] },
            { q: { es: '¿Compras cosas en la calle o en el transporte?', en: 'Do you buy things on the street or on public transport?' }, help: { es: 'Sí, a veces compro… / No, nunca.', en: 'Yes, sometimes I buy… / No, never.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Hay vendedores en el metro de tu ciudad?', en: 'Are there vendors on the subway in your city?' }] },
          ],
          words: [{ es: 'la hora pico', en: 'rush hour' }, { es: 'el andén', en: 'the platform' }, { es: 'la cita', en: 'appointment' }, { es: 'el asiento', en: 'the seat' }, { es: 'advertir', en: 'to warn' }],
        },
        A2: {
          scene: { es: 'El metro se detuvo entre dos estaciones hace diez minutos. Hace calor y nadie sabe qué pasa. Iván iba a un examen importante.', en: 'The subway stopped between two stations ten minutes ago. It is hot and nobody knows what is happening. Iván was going to an important exam.' },
          opener: { es: 'No lo puedo creer. Estudié toda la noche para este examen y ahora estoy aquí, encerrado. El profesor no acepta excusas. ¿Qué harías tú?', en: 'I can’t believe it. I studied all night for this exam and now I’m here, stuck. The teacher doesn’t accept excuses. What would you do?' },
          decide: {
            ask: { es: 'Iván quiere avisar al profesor, pero casi no hay señal. ¿Qué le sugieres?', en: 'Iván wants to let the teacher know, but there is hardly any signal. What do you suggest?' },
            options: [
              { say: { es: 'Mandar un mensaje a un compañero de clase.', en: 'Send a message to a classmate.' }, then: { es: 'El mensaje sale. Diez minutos después, el compañero responde: «El profe dice que te espera».', en: 'The message goes through. Ten minutes later, the classmate replies: “The teacher says he’ll wait for you.”' } },
              { say: { es: 'Sacar una foto del metro parado como prueba.', en: 'Take a photo of the stopped train as proof.' }, then: { es: 'Iván saca la foto. Una señora le dice: «Pídele un comprobante al policía de la estación».', en: 'Iván takes the photo. A woman tells him: “Ask the station police officer for a certificate.”' } },
              { say: { es: 'Relajarse y repasar los apuntes.', en: 'Relax and go over the notes.' }, then: { es: 'Iván saca sus apuntes y tú le haces preguntas. Por lo menos aprovecha el tiempo.', en: 'Iván takes out his notes and you quiz him. At least he uses the time.' } },
            ],
          },
          twist: { es: 'Por los altavoces anuncian que el tren no puede seguir: todos tienen que bajar y caminar por el túnel, con luces, hasta la próxima estación.', en: 'The loudspeakers announce that the train can’t continue: everyone has to get off and walk through the tunnel, with lights, to the next station.' },
          questions: [
            { q: { es: '¿Alguna vez llegaste tarde a algo muy importante? ¿Qué pasó?', en: 'Have you ever been late for something very important? What happened?' }, help: { es: 'Una vez llegué tarde a… porque… Al final…', en: 'Once I was late for… because… In the end…' }, follow: [{ es: '¿Cómo reaccionaste?', en: 'How did you react?' }, { es: '¿Qué haces ahora para evitarlo?', en: 'What do you do now to avoid it?' }] },
            { q: { es: '¿Cómo te preparabas para los exámenes cuando estudiabas?', en: 'How did you prepare for exams when you were studying?' }, help: { es: 'Normalmente estudiaba… / Siempre dejaba todo para el final.', en: 'I usually studied… / I always left everything until the end.' }, follow: [{ es: '¿Estudiabas solo o en grupo?', en: 'Did you study alone or in a group?' }, { es: '¿Qué examen recuerdas más?', en: 'Which exam do you remember most?' }] },
            { q: { es: '¿Qué haces cuando algo sale mal y no puedes hacer nada?', en: 'What do you do when something goes wrong and you can’t do anything?' }, help: { es: 'Intento… / Me pongo nervioso y… / Respiro y…', en: 'I try to… / I get nervous and… / I breathe and…' }, follow: [{ es: '¿Siempre fuiste así?', en: 'Have you always been like that?' }, { es: '¿Quién te ayuda a calmarte?', en: 'Who helps you calm down?' }] },
            { q: { es: '¿Qué te parece el transporte público de tu ciudad?', en: 'What do you think of the public transport in your city?' }, help: { es: 'Me parece… porque… / Antes era mejor / peor…', en: 'I think it is… because… / It used to be better / worse…' }, follow: [{ es: '¿Qué cambiarías?', en: 'What would you change?' }, { es: '¿Funcionaba mejor cuando eras niño?', en: 'Did it work better when you were a child?' }] },
          ],
          words: [{ es: 'detenerse', en: 'to stop' }, { es: 'encerrado', en: 'stuck, shut in' }, { es: 'avisar', en: 'to let know' }, { es: 'el comprobante', en: 'proof, receipt' }, { es: 'los apuntes', en: 'notes' }],
        },
        B1: {
          scene: { es: 'Iván está haciendo un proyecto de arquitectura sobre el metro de la Ciudad de México: cinco millones de viajes al día y uno de los billetes más baratos del mundo. Te pide tu opinión de viajero.', en: 'Iván is doing an architecture project about the Mexico City subway: five million trips a day and one of the cheapest fares in the world. He asks for your opinion as a traveller.' },
          opener: { es: 'El billete cuesta cinco pesos y el gobierno pone la diferencia. Hay quien dice que habría que subirlo para mejorar el servicio. Yo no estoy tan seguro: para mucha gente, cinco pesos más al día es mucho. ¿Tú qué opinas?', en: 'The ticket costs five pesos and the government covers the difference. Some say it should go up to improve the service. I’m not so sure: for many people, five more pesos a day is a lot. What do you think?' },
          decide: {
            ask: { es: 'Iván tiene que proponer una sola mejora para su proyecto. ¿Cuál defiendes?', en: 'Iván has to propose a single improvement for his project. Which one do you argue for?' },
            options: [
              { say: { es: 'Más trenes en hora pico, aunque el billete suba un poco.', en: 'More trains at rush hour, even if the fare goes up a little.' }, then: { es: 'Iván anota: «Subirlo solo para quien gana más». Le parece justo, pero difícil de controlar.', en: 'Iván notes: “Raise it only for those who earn more.” He thinks it’s fair but hard to enforce.' } },
              { say: { es: 'Estaciones más seguras e iluminadas para las mujeres.', en: 'Safer, better-lit stations for women.' }, then: { es: 'Iván asiente: su hermana dejó de usar una línea por la noche. «Esto es lo primero», dice.', en: 'Iván nods: his sister stopped using one line at night. “This comes first,” he says.' } },
              { say: { es: 'Un carril de bicicletas conectado a cada estación.', en: 'A bike lane connected to every station.' }, then: { es: 'Iván duda: «Con este tráfico, ¿quién se atreve a ir en bici?». Pero lo anota.', en: 'Iván hesitates: “With this traffic, who dares to cycle?” But he writes it down.' } },
            ],
          },
          twist: { es: 'El profesor de Iván le advierte que su proyecto es «demasiado político» y que debería centrarse en el diseño. Iván no sabe si cambiarlo.', en: 'Iván’s professor warns him that his project is “too political” and that he should focus on design. Iván doesn’t know whether to change it.' },
          questions: [
            { q: { es: '¿El transporte público debería ser gratis? ¿Por qué?', en: 'Should public transport be free? Why?' }, help: { es: 'Sí, porque… / No, porque alguien tiene que pagarlo… / Solo para…', en: 'Yes, because… / No, because someone has to pay… / Only for…' }, follow: [{ es: '¿Quién debería pagarlo entonces?', en: 'Who should pay then?' }, { es: '¿Conoces alguna ciudad donde sea gratis?', en: 'Do you know a city where it’s free?' }] },
            { q: { es: '¿Qué harías si tu ciudad tuviera que elegir entre más carreteras o más transporte público?', en: 'What would you do if your city had to choose between more roads or more public transport?' }, help: { es: 'Si tuviera que elegir, apostaría por… porque…', en: 'If I had to choose, I would go for… because…' }, follow: [{ es: '¿Quién se quejaría?', en: 'Who would complain?' }, { es: '¿Cómo los convencerías?', en: 'How would you convince them?' }] },
            { q: { es: '¿Te sientes seguro en el transporte público de noche? ¿Qué lo haría más seguro?', en: 'Do you feel safe on public transport at night? What would make it safer?' }, help: { es: 'Me siento… / Haría falta… / Lo que más ayudaría es…', en: 'I feel… / What’s needed is… / What would help most is…' }, follow: [{ es: '¿Es igual para todos?', en: 'Is it the same for everyone?' }, { es: '¿Qué hace la gente para protegerse?', en: 'What do people do to protect themselves?' }] },
            { q: { es: '¿Debería Iván cambiar su proyecto para agradar al profesor?', en: 'Should Iván change his project to please his professor?' }, help: { es: 'Yo en su lugar… / Depende de si… / Lo importante es…', en: 'In his place I would… / It depends on whether… / The important thing is…' }, follow: [{ es: '¿Alguna vez defendiste una idea contra un jefe o un profesor?', en: 'Have you ever defended an idea against a boss or a teacher?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
          ],
          words: [{ es: 'el billete', en: 'the ticket' }, { es: 'poner la diferencia', en: 'to cover the difference' }, { es: 'atreverse', en: 'to dare' }, { es: 'el carril', en: 'the lane' }, { es: 'agradar', en: 'to please' }],
        },
      },
    },
    // ------------------------------------------------------------ the café in Roma
    {
      id: 'cafe',
      name: { es: 'El café de la Roma', en: 'The café in Roma' },
      who: { name: 'Mateo', role: { es: 'barista', en: 'barista' } },
      levels: {
        A0: {
          scene: { es: 'Es un café pequeño en la colonia Roma. Hay mesas en la calle. Mateo hace café.', en: 'It is a small café in the Roma neighbourhood. There are tables on the street. Mateo makes coffee.' },
          opener: { es: '¡Hola! Soy Mateo. ¿Café o chocolate?', en: 'Hi! I am Mateo. Coffee or chocolate?' },
          decide: {
            ask: { es: 'Hay café de olla, chocolate caliente y agua de jamaica. ¿Qué tomas?', en: 'There is pot coffee, hot chocolate and hibiscus water. What do you have?' },
            options: [
              { say: { es: 'Un café de olla, por favor.', en: 'A pot coffee, please.' }, then: { es: 'Mateo dice: «Tiene canela. Es muy rico».', en: 'Mateo says: “It has cinnamon. It is very tasty.”' } },
              { say: { es: 'Un chocolate caliente.', en: 'A hot chocolate.' }, then: { es: 'Mateo dice: «¿Con pan dulce? Es perfecto».', en: 'Mateo says: “With sweet bread? It is perfect.”' } },
              { say: { es: 'Agua de jamaica, por favor.', en: 'Hibiscus water, please.' }, then: { es: 'Mateo dice: «Es roja y fría. ¡Muy buena!»', en: 'Mateo says: “It is red and cold. Very good!”' } },
            ],
          },
          twist: { es: 'Un perro grande se sienta en tu mesa. ¡Es el perro de Mateo! Se llama Taco. ¿Qué dices?', en: 'A big dog sits at your table. It is Mateo’s dog! His name is Taco. What do you say?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, tomo café. / No, tomo té.', en: 'Yes, I drink coffee. / No, I drink tea.' }, follow: [{ es: '¿Con leche?', en: 'With milk?' }, { es: '¿Cuántos cafés al día?', en: 'How many coffees a day?' }] },
            { q: { es: '¿Te gustan los perros?', en: 'Do you like dogs?' }, help: { es: 'Sí, me gustan. / Prefiero los gatos.', en: 'Yes, I like them. / I prefer cats.' }, follow: [{ es: '¿Tienes un perro?', en: 'Do you have a dog?' }, { es: '¿Cómo se llama?', en: 'What is its name?' }] },
            { q: { es: '¿Hay cafés en tu calle?', en: 'Are there cafés on your street?' }, help: { es: 'Sí, hay uno. / No, no hay.', en: 'Yes, there is one. / No, there aren’t.' }, follow: [{ es: '¿Vas mucho?', en: 'Do you go often?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Te gusta el chocolate?', en: 'Do you like chocolate?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Frío o caliente?', en: 'Cold or hot?' }, { es: '¿Blanco o negro?', en: 'White or dark?' }] },
          ],
          words: [{ es: 'el café', en: 'coffee / café' }, { es: 'la mesa', en: 'the table' }, { es: 'caliente', en: 'hot' }, { es: 'frío', en: 'cold' }, { es: 'la canela', en: 'cinnamon' }],
        },
        A1: {
          scene: { es: 'Es sábado por la tarde. El café de Mateo está lleno de gente con computadoras. Mateo es de Veracruz y vive en la capital desde hace dos años.', en: 'It is Saturday afternoon. Mateo’s café is full of people with laptops. Mateo is from Veracruz and has lived in the capital for two years.' },
          opener: { es: 'Este café es de Veracruz, de la finca de mi tío. ¿Lo pruebas? Y dime, ¿tú trabajas o estudias?', en: 'This coffee is from Veracruz, from my uncle’s farm. Will you try it? And tell me, do you work or study?' },
          decide: {
            ask: { es: 'No hay mesas libres. Una chica con una computadora ocupa una mesa para cuatro. ¿Qué haces?', en: 'There are no free tables. A girl with a laptop is taking up a table for four. What do you do?' },
            options: [
              { say: { es: 'Le pregunto si puedo compartir su mesa.', en: 'I ask if I can share her table.' }, then: { es: 'La chica dice que sí, encantada. Se llama Fer y es diseñadora.', en: 'The girl says yes, happily. Her name is Fer and she is a designer.' } },
              { say: { es: 'Pido el café para llevar.', en: 'I order the coffee to go.' }, then: { es: 'Mateo te da un vaso con tu nombre… mal escrito. Se ríen los dos.', en: 'Mateo gives you a cup with your name… spelt wrong. You both laugh.' } },
              { say: { es: 'Me siento en la barra con Mateo.', en: 'I sit at the counter with Mateo.' }, then: { es: 'Mateo te enseña a preparar un café con una cafetera de cristal.', en: 'Mateo shows you how to make coffee with a glass coffee maker.' } },
            ],
          },
          twist: { es: 'De repente se va la luz en toda la calle. Las computadoras se apagan. Mateo enciende velas y dice: «¡Ahora sí, a platicar!»', en: 'Suddenly the power goes out on the whole street. The laptops switch off. Mateo lights candles and says: “Now, time to chat!”' },
          questions: [
            { q: { es: '¿Dónde prefieres trabajar o estudiar?', en: 'Where do you prefer to work or study?' }, help: { es: 'Prefiero trabajar en casa / en un café / en una biblioteca.', en: 'I prefer working at home / in a café / in a library.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Con música o en silencio?', en: 'With music or in silence?' }] },
            { q: { es: '¿De dónde es tu familia?', en: 'Where is your family from?' }, help: { es: 'Mi familia es de… / Mis padres son de…', en: 'My family is from… / My parents are from…' }, follow: [{ es: '¿Vives cerca de ellos?', en: 'Do you live near them?' }, { es: '¿Qué comida típica hay allí?', en: 'What typical food is there?' }] },
            { q: { es: '¿Qué haces cuando no hay internet?', en: 'What do you do when there is no internet?' }, help: { es: 'Leo / salgo a caminar / hablo con…', en: 'I read / go for a walk / talk with…' }, follow: [{ es: '¿Te gusta o te molesta?', en: 'Do you like it or does it bother you?' }, { es: '¿Cuántas horas usas el móvil?', en: 'How many hours do you use your phone?' }] },
            { q: { es: '¿Hablas con desconocidos en un café?', en: 'Do you talk to strangers in a café?' }, help: { es: 'Sí, a veces… / No, normalmente no.', en: 'Yes, sometimes… / No, usually not.' }, follow: [{ es: '¿Por qué no?', en: 'Why not?' }, { es: '¿Dónde conoces gente nueva?', en: 'Where do you meet new people?' }] },
          ],
          words: [{ es: 'la finca', en: 'farm, estate' }, { es: 'compartir', en: 'to share' }, { es: 'para llevar', en: 'to go' }, { es: 'la barra', en: 'the counter' }, { es: 'platicar', en: 'to chat (Mexico)' }],
        },
        A2: {
          scene: { es: 'Mateo te cuenta su historia: hace dos años dejó su trabajo en un banco de Veracruz para abrir este café. Hoy el dueño del local le dijo que el alquiler sube un cuarenta por ciento.', en: 'Mateo tells you his story: two years ago he left his bank job in Veracruz to open this café. Today the owner of the premises told him the rent is going up forty percent.' },
          opener: { es: 'Cuando llegué, la Roma era tranquila. Ahora hay cafés de especialidad en cada esquina y los precios están por las nubes. Mis papás quieren que vuelva al banco. ¿Tú volverías?', en: 'When I arrived, Roma was quiet. Now there are speciality cafés on every corner and prices are sky-high. My parents want me to go back to the bank. Would you go back?' },
          decide: {
            ask: { es: 'Mateo tiene tres opciones. ¿Cuál le recomiendas?', en: 'Mateo has three options. Which do you recommend?' },
            options: [
              { say: { es: 'Mudar el café a un barrio más barato.', en: 'Move the café to a cheaper neighbourhood.' }, then: { es: 'Mateo piensa en su clientela fiel. «¿Me seguirán hasta allá?», pregunta.', en: 'Mateo thinks about his loyal customers. “Will they follow me all the way there?” he asks.' } },
              { say: { es: 'Subir los precios y aguantar.', en: 'Raise prices and hold on.' }, then: { es: 'Mateo hace cuentas en una servilleta: un café a sesenta pesos. Hace una mueca.', en: 'Mateo does the maths on a napkin: a coffee at sixty pesos. He grimaces.' } },
              { say: { es: 'Volver a Veracruz y vender el café de su tío por internet.', en: 'Go back to Veracruz and sell his uncle’s coffee online.' }, then: { es: 'A Mateo le brillan los ojos: «Extraño el mar… y a mi tío».', en: 'Mateo’s eyes light up: “I miss the sea… and my uncle.”' } },
            ],
          },
          twist: { es: 'Fer, la diseñadora de la mesa del fondo, se acerca: escuchó todo y quiere invertir en el café a cambio de una parte del negocio.', en: 'Fer, the designer at the back table, comes over: she heard everything and wants to invest in the café in exchange for part of the business.' },
          questions: [
            { q: { es: '¿Alguna vez dejaste algo seguro para probar algo nuevo?', en: 'Have you ever left something safe to try something new?' }, help: { es: 'Sí, una vez dejé… / No, nunca me atreví…', en: 'Yes, once I left… / No, I never dared…' }, follow: [{ es: '¿Cómo salió?', en: 'How did it turn out?' }, { es: '¿Qué dijo tu familia?', en: 'What did your family say?' }] },
            { q: { es: '¿Cómo era tu barrio hace diez años?', en: 'What was your neighbourhood like ten years ago?' }, help: { es: 'Hace diez años había… y ahora…', en: 'Ten years ago there was… and now…' }, follow: [{ es: '¿Subieron los precios?', en: 'Did prices go up?' }, { es: '¿Llegó gente nueva?', en: 'Did new people arrive?' }] },
            { q: { es: '¿Qué extrañabas cuando vivías lejos de casa?', en: 'What did you miss when you lived away from home?' }, help: { es: 'Extrañaba… / Nunca viví lejos, pero…', en: 'I missed… / I never lived away, but…' }, follow: [{ es: '¿La comida?', en: 'The food?' }, { es: '¿A quién?', en: 'Who?' }] },
            { q: { es: '¿Aceptarías un socio para salvar tu negocio?', en: 'Would you accept a partner to save your business?' }, help: { es: 'Sí, si… / No, porque perdería…', en: 'Yes, if… / No, because I would lose…' }, follow: [{ es: '¿Con un amigo o con un desconocido?', en: 'With a friend or a stranger?' }, { es: '¿Qué condiciones pondrías?', en: 'What conditions would you set?' }] },
          ],
          words: [{ es: 'el local', en: 'business premises' }, { es: 'por las nubes', en: 'sky-high' }, { es: 'aguantar', en: 'to hold on' }, { es: 'extrañar', en: 'to miss' }, { es: 'invertir', en: 'to invest' }],
        },
        B1: {
          scene: { es: 'En el café hay una charla sobre la gentrificación de la Roma: muchos extranjeros que trabajan a distancia llegaron después de la pandemia y pagan alquileres en dólares. Mateo te pasa el micrófono.', en: 'There is a talk at the café about the gentrification of Roma: many foreigners who work remotely arrived after the pandemic and pay rent in dollars. Mateo passes you the microphone.' },
          opener: { es: 'Yo también llegué de fuera, así que no puedo decirle a nadie que se vaya. Pero mi vecina, que nació en esta calle, tuvo que mudarse a las afueras. ¿Dónde está el límite entre recibir a gente nueva y expulsar a los de siempre?', en: 'I came from outside too, so I can’t tell anyone to leave. But my neighbour, who was born on this street, had to move to the outskirts. Where is the line between welcoming new people and pushing out the old ones?' },
          decide: {
            ask: { es: 'El público espera tu opinión. ¿Qué defiendes?', en: 'The audience is waiting for your opinion. What do you argue?' },
            options: [
              { say: { es: 'Limitar los alquileres temporales para turistas.', en: 'Limit short-term rentals for tourists.' }, then: { es: 'Un dueño de departamentos protesta: «¡Con eso pago mi hipoteca!». El debate se calienta.', en: 'An apartment owner protests: “That’s how I pay my mortgage!” The debate heats up.' } },
              { say: { es: 'Que los recién llegados aprendan español y consuman en negocios locales.', en: 'Newcomers should learn Spanish and spend in local businesses.' }, then: { es: 'Una estadounidense del público asiente: «Yo vine a aprender, no a vivir en una burbuja».', en: 'An American woman in the audience nods: “I came to learn, not to live in a bubble.”' } },
              { say: { es: 'Que el gobierno construya vivienda pública en el barrio.', en: 'The government should build public housing in the neighbourhood.' }, then: { es: 'Aplauden, pero alguien grita: «¿Con qué dinero?». Mateo se ríe nervioso.', en: 'They applaud, but someone shouts: “With what money?” Mateo laughs nervously.' } },
            ],
          },
          twist: { es: 'Al final de la charla, Mateo confiesa que el nuevo socio del café es un fondo extranjero. Algunos clientes se van molestos.', en: 'At the end of the talk, Mateo admits the café’s new partner is a foreign fund. Some customers leave annoyed.' },
          questions: [
            { q: { es: '¿Has visto un barrio transformarse por el turismo o los recién llegados? ¿Qué ganó y qué perdió?', en: 'Have you seen a neighbourhood transformed by tourism or newcomers? What did it gain and lose?' }, help: { es: 'Ganó… pero perdió… / Al principio… y luego…', en: 'It gained… but lost… / At first… and then…' }, follow: [{ es: '¿Quién decidió esos cambios?', en: 'Who decided those changes?' }, { es: '¿Se podría haber evitado?', en: 'Could it have been avoided?' }] },
            { q: { es: 'Si te mudaras a otro país, ¿qué harías para no ser «un extranjero en una burbuja»?', en: 'If you moved to another country, what would you do not to be “a foreigner in a bubble”?' }, help: { es: 'Intentaría… / Me apuntaría a… / Evitaría…', en: 'I would try to… / I would sign up for… / I would avoid…' }, follow: [{ es: '¿Es fácil hacer amigos locales?', en: 'Is it easy to make local friends?' }, { es: '¿Qué te costaría más?', en: 'What would be hardest for you?' }] },
            { q: { es: '¿Es justo pagar el alquiler en otra moneda en un país con salarios más bajos?', en: 'Is it fair to pay rent in another currency in a country with lower salaries?' }, help: { es: 'No me parece justo que… / Entiendo que… pero…', en: 'I don’t think it’s fair that… / I understand that… but…' }, follow: [{ es: '¿Qué harías si fueras el dueño?', en: 'What would you do if you were the owner?' }, { es: '¿Y si fueras el inquilino?', en: 'And if you were the tenant?' }] },
            { q: { es: '¿Hizo bien Mateo en aceptar dinero de un fondo extranjero para salvar su café?', en: 'Did Mateo do the right thing accepting money from a foreign fund to save his café?' }, help: { es: 'Creo que hizo bien / mal porque… / Yo habría…', en: 'I think he did right / wrong because… / I would have…' }, follow: [{ es: '¿Qué le dirías a los clientes molestos?', en: 'What would you say to the annoyed customers?' }, { es: '¿Tiene alternativa un negocio pequeño?', en: 'Does a small business have an alternative?' }] },
          ],
          words: [{ es: 'trabajar a distancia', en: 'to work remotely' }, { es: 'las afueras', en: 'the outskirts' }, { es: 'expulsar', en: 'to push out' }, { es: 'la hipoteca', en: 'mortgage' }, { es: 'el inquilino', en: 'tenant' }],
        },
      },
    },
    // ------------------------------------------------------------ the museum
    {
      id: 'museo',
      name: { es: 'El museo', en: 'The museum' },
      who: { name: 'Lucía', role: { es: 'guía del museo', en: 'museum guide' } },
      levels: {
        A0: {
          scene: { es: 'Es el Museo de Antropología. Es muy grande. Lucía es guía. Tiene un mapa del museo.', en: 'It is the Museum of Anthropology. It is very big. Lucía is a guide. She has a museum map.' },
          opener: { es: 'Bienvenido. Soy Lucía. Hay mayas, aztecas y olmecas. ¿Qué quieres ver?', en: 'Welcome. I am Lucía. There are Maya, Aztecs and Olmecs. What do you want to see?' },
          decide: {
            ask: { es: 'Lucía dice: «Sala azteca, sala maya o el jardín». ¿Adónde vas?', en: 'Lucía says: “Aztec room, Maya room or the garden.” Where do you go?' },
            options: [
              { say: { es: 'A la sala azteca.', en: 'To the Aztec room.' }, then: { es: 'Lucía dice: «Allí está la Piedra del Sol. ¡Es enorme!»', en: 'Lucía says: “The Sun Stone is there. It is huge!”' } },
              { say: { es: 'A la sala maya.', en: 'To the Maya room.' }, then: { es: 'Lucía dice: «Hay una tumba de un rey. Es muy bonita».', en: 'Lucía says: “There is a king’s tomb. It is very beautiful.”' } },
              { say: { es: 'Al jardín, por favor.', en: 'To the garden, please.' }, then: { es: 'Lucía dice: «Hay una casa maya. Y hay sol».', en: 'Lucía says: “There is a Maya house. And it is sunny.”' } },
            ],
          },
          twist: { es: 'Una escuela entera entra al museo: ¡cien niños! Hacen mucho ruido. Lucía sonríe. ¿Qué haces?', en: 'A whole school comes into the museum: a hundred children! They make a lot of noise. Lucía smiles. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Qué museo te gusta?', en: 'Which museum do you like?' }, { es: '¿Vas con amigos?', en: 'Do you go with friends?' }] },
            { q: { es: '¿Hay un museo en tu ciudad?', en: 'Is there a museum in your city?' }, help: { es: 'Sí, hay un museo de… / No, no hay.', en: 'Yes, there is a … museum. / No, there isn’t.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Es gratis?', en: 'Is it free?' }] },
            { q: { es: '¿Te gusta la historia?', en: 'Do you like history?' }, help: { es: 'Sí, me gusta mucho. / No, prefiero…', en: 'Yes, I like it a lot. / No, I prefer…' }, follow: [{ es: '¿Qué historia?', en: 'What history?' }, { es: '¿Lees libros de historia?', en: 'Do you read history books?' }] },
            { q: { es: '¿Te gustan los niños?', en: 'Do you like children?' }, help: { es: 'Sí, me gustan. / A veces.', en: 'Yes, I like them. / Sometimes.' }, follow: [{ es: '¿Tienes hijos o sobrinos?', en: 'Do you have children or nephews?' }, { es: '¿Cuántos?', en: 'How many?' }] },
          ],
          words: [{ es: 'el museo', en: 'the museum' }, { es: 'la sala', en: 'the room, hall' }, { es: 'la guía', en: 'the guide' }, { es: 'la piedra', en: 'the stone' }, { es: 'enorme', en: 'huge' }],
        },
        A1: {
          scene: { es: 'Lucía hace visitas guiadas en español y en inglés. Hoy tu grupo tiene diez personas de cinco países. Están delante de la Piedra del Sol.', en: 'Lucía gives guided tours in Spanish and English. Today your group has ten people from five countries. They are in front of the Sun Stone.' },
          opener: { es: 'Esta piedra pesa veinticuatro toneladas. Muchos creen que es un calendario. ¿En tu país hay piedras o monumentos antiguos?', en: 'This stone weighs twenty-four tonnes. Many people think it is a calendar. Are there ancient stones or monuments in your country?' },
          decide: {
            ask: { es: 'La visita dura dos horas, pero tú solo tienes una. ¿Qué haces?', en: 'The tour lasts two hours, but you only have one. What do you do?' },
            options: [
              { say: { es: 'Le pregunto a Lucía qué es lo más importante.', en: 'I ask Lucía what the most important thing is.' }, then: { es: 'Lucía te dibuja una ruta corta en el mapa: aztecas, mayas y la salida.', en: 'Lucía draws you a short route on the map: Aztecs, Maya and the exit.' } },
              { say: { es: 'Me quedo toda la visita y llego tarde a la comida.', en: 'I stay for the whole tour and I’m late for lunch.' }, then: { es: 'Lucía te recomienda un restaurante cerca: «Diles que vas de mi parte».', en: 'Lucía recommends a restaurant nearby: “Tell them I sent you.”' } },
              { say: { es: 'Compro la audioguía y vuelvo otro día.', en: 'I buy the audio guide and come back another day.' }, then: { es: 'Lucía te da un descuento: el boleto vale para el domingo, que es gratis para mexicanos.', en: 'Lucía gives you a discount: the ticket is valid for Sunday, which is free for Mexicans.' } },
            ],
          },
          twist: { es: 'Un turista toca la piedra para una foto. Suena una alarma muy fuerte y llega un guardia corriendo.', en: 'A tourist touches the stone for a photo. A very loud alarm goes off and a guard comes running.' },
          questions: [
            { q: { es: '¿Prefieres las visitas guiadas o ir solo?', en: 'Do you prefer guided tours or going alone?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Usas audioguías?', en: 'Do you use audio guides?' }, { es: '¿Lees los carteles?', en: 'Do you read the signs?' }] },
            { q: { es: '¿Qué monumento famoso hay en tu país?', en: 'What famous monument is there in your country?' }, help: { es: 'En mi país está… Es de…', en: 'In my country there is… It is from…' }, follow: [{ es: '¿Lo visitaste?', en: 'Did you visit it?' }, { es: '¿Hay muchos turistas?', en: 'Are there many tourists?' }] },
            { q: { es: '¿Cuántos idiomas hablas?', en: 'How many languages do you speak?' }, help: { es: 'Hablo… y un poco de…', en: 'I speak… and a little…' }, follow: [{ es: '¿Cuál es el más difícil?', en: 'Which is the hardest?' }, { es: '¿Qué idioma quieres aprender?', en: 'What language do you want to learn?' }] },
            { q: { es: '¿Sacas muchas fotos cuando viajas?', en: 'Do you take a lot of photos when you travel?' }, help: { es: 'Sí, saco muchas. / No, prefiero mirar.', en: 'Yes, I take a lot. / No, I prefer to look.' }, follow: [{ es: '¿Las miras después?', en: 'Do you look at them later?' }, { es: '¿Qué fotos sacas?', en: 'What photos do you take?' }] },
          ],
          words: [{ es: 'la visita guiada', en: 'guided tour' }, { es: 'pesar', en: 'to weigh' }, { es: 'antiguo', en: 'ancient, old' }, { es: 'el boleto', en: 'the ticket' }, { es: 'el guardia', en: 'the guard' }],
        },
        A2: {
          scene: { es: 'Después de la visita, Lucía te cuenta que estudió historia porque su abuela hablaba náhuatl, la lengua de los aztecas. Ella nunca lo aprendió de niña y ahora lo estudia en clases nocturnas.', en: 'After the tour, Lucía tells you she studied history because her grandmother spoke Nahuatl, the language of the Aztecs. She never learned it as a child and now studies it in evening classes.' },
          opener: { es: 'Mi abuela no quería que habláramos náhuatl. Decía que en la escuela se burlaban de ella. Cuando murió, entendí lo que perdimos. ¿Tu familia hablaba otra lengua?', en: 'My grandmother didn’t want us to speak Nahuatl. She said they made fun of her at school. When she died, I understood what we had lost. Did your family speak another language?' },
          decide: {
            ask: { es: 'Lucía quiere hacer algo para que no se pierda la lengua. ¿Qué le propones?', en: 'Lucía wants to do something so the language isn’t lost. What do you suggest?' },
            options: [
              { say: { es: 'Hacer visitas del museo en náhuatl.', en: 'Give museum tours in Nahuatl.' }, then: { es: 'Lucía se ríe: «¡Todavía no lo hablo tan bien!». Pero le gusta la idea para dentro de un año.', en: 'Lucía laughs: “I don’t speak it that well yet!” But she likes the idea for a year from now.' } },
              { say: { es: 'Grabar a las personas mayores que todavía lo hablan.', en: 'Record the older people who still speak it.' }, then: { es: 'Lucía recuerda a una vecina de su abuela, de noventa años. Decide visitarla el domingo.', en: 'Lucía remembers a neighbour of her grandmother’s, ninety years old. She decides to visit her on Sunday.' } },
              { say: { es: 'Enseñar palabras en redes sociales.', en: 'Teach words on social media.' }, then: { es: 'Lucía publica «xocolatl», el origen de «chocolate». En una hora tiene mil reacciones.', en: 'Lucía posts “xocolatl”, the origin of “chocolate”. In an hour she has a thousand reactions.' } },
            ],
          },
          twist: { es: 'Un señor mayor que limpia la sala se acerca y saluda a Lucía en náhuatl. Ella entiende solo la mitad, pero se emociona.', en: 'An older man who cleans the room comes over and greets Lucía in Nahuatl. She understands only half, but she is moved.' },
          questions: [
            { q: { es: '¿Tus abuelos hablaban otra lengua o un dialecto? ¿Lo aprendiste?', en: 'Did your grandparents speak another language or a dialect? Did you learn it?' }, help: { es: 'Mis abuelos hablaban… / Yo solo sé algunas palabras…', en: 'My grandparents spoke… / I only know a few words…' }, follow: [{ es: '¿Por qué no se transmitió?', en: 'Why wasn’t it passed on?' }, { es: '¿Te gustaría aprenderlo?', en: 'Would you like to learn it?' }] },
            { q: { es: '¿Qué palabras de otras lenguas usas en tu idioma?', en: 'What words from other languages do you use in your language?' }, help: { es: 'Usamos… que viene de…', en: 'We use… which comes from…' }, follow: [{ es: '¿Sabías que «tomate» y «chocolate» vienen del náhuatl?', en: 'Did you know “tomato” and “chocolate” come from Nahuatl?' }, { es: '¿Qué otra conoces?', en: 'What other one do you know?' }] },
            { q: { es: '¿Qué asignatura te gustaba más en la escuela? ¿Por qué?', en: 'What subject did you like most at school? Why?' }, help: { es: 'Me gustaba… porque el profesor… / porque era…', en: 'I liked… because the teacher… / because it was…' }, follow: [{ es: '¿Y la que menos?', en: 'And the least?' }, { es: '¿Influyó en tu trabajo?', en: 'Did it influence your job?' }] },
            { q: { es: '¿Alguna vez te avergonzaste de algo de tu origen y después te sentiste orgulloso?', en: 'Were you ever ashamed of something about your background and later proud of it?' }, help: { es: 'De niño me daba vergüenza… pero ahora…', en: 'As a child I was embarrassed about… but now…' }, follow: [{ es: '¿Qué cambió?', en: 'What changed?' }, { es: '¿Lo hablas con tu familia?', en: 'Do you talk about it with your family?' }] },
          ],
          words: [{ es: 'la lengua', en: 'language' }, { es: 'burlarse de', en: 'to make fun of' }, { es: 'grabar', en: 'to record' }, { es: 'emocionarse', en: 'to be moved' }, { es: 'la vergüenza', en: 'shame, embarrassment' }],
        },
        B1: {
          scene: { es: 'El museo prepara una exposición polémica: un gobierno extranjero quiere devolver a México piezas aztecas que tiene en sus museos, pero pide a cambio un préstamo de piezas mexicanas para una gira. Lucía tiene que explicarlo al público.', en: 'The museum is preparing a controversial exhibition: a foreign government wants to return Aztec pieces it holds in its museums, but asks in exchange for a loan of Mexican pieces for a tour. Lucía has to explain it to the public.' },
          opener: { es: 'Hay quien dice que esas piezas salieron de México robadas y que devolverlas no debería tener condiciones. Otros dicen que, gracias a esos museos, el mundo conoce nuestra historia. Yo tengo el corazón dividido. ¿Y tú?', en: 'Some say those pieces left Mexico stolen and returning them shouldn’t have conditions. Others say that thanks to those museums the world knows our history. My heart is divided. And you?' },
          decide: {
            ask: { es: 'Lucía organiza una votación entre los visitantes. ¿Qué votas?', en: 'Lucía organises a vote among the visitors. How do you vote?' },
            options: [
              { say: { es: 'Que devuelvan todo, sin condiciones.', en: 'Return everything, no conditions.' }, then: { es: 'Gana por poco. Un visitante europeo dice que entonces vaciarían la mitad de los museos de su país.', en: 'It wins narrowly. A European visitor says that would empty half the museums in his country.' } },
              { say: { es: 'Aceptar el intercambio: es mejor que nada.', en: 'Accept the exchange: it’s better than nothing.' }, then: { es: 'Lucía apunta que las piezas mexicanas viajarían un año y que hay riesgo de daños.', en: 'Lucía points out the Mexican pieces would travel for a year and there is a risk of damage.' } },
              { say: { es: 'Crear copias digitales para todos y dejar los originales donde están.', en: 'Create digital copies for everyone and leave the originals where they are.' }, then: { es: 'Una estudiante protesta: «Una foto 3D no es lo mismo que tener tu historia en casa».', en: 'A student protests: “A 3D photo is not the same as having your history at home.”' } },
            ],
          },
          twist: { es: 'Llega la noticia de que una de las piezas «aztecas» del extranjero es en realidad una falsificación del siglo XIX.', en: 'News arrives that one of the “Aztec” pieces abroad is actually a 19th-century fake.' },
          questions: [
            { q: { es: '¿Los museos deberían devolver las piezas que llegaron de otros países en épocas coloniales?', en: 'Should museums return pieces that came from other countries in colonial times?' }, help: { es: 'Sí, siempre que… / No necesariamente, porque… / Depende de cómo…', en: 'Yes, as long as… / Not necessarily, because… / It depends on how…' }, follow: [{ es: '¿Quién debería decidirlo?', en: 'Who should decide it?' }, { es: '¿Hay algún caso famoso que conozcas?', en: 'Is there a famous case you know?' }] },
            { q: { es: '¿Para qué sirven los museos hoy, cuando todo se puede ver en internet?', en: 'What are museums for today, when everything can be seen online?' }, help: { es: 'Sirven para… / Nada sustituye… / Quizás deberían…', en: 'They are for… / Nothing replaces… / Maybe they should…' }, follow: [{ es: '¿Cuál fue la última vez que fuiste a uno?', en: 'When was the last time you went to one?' }, { es: '¿Qué te haría ir más?', en: 'What would make you go more?' }] },
            { q: { es: 'Si pudieras recuperar un objeto perdido de tu familia, ¿cuál sería y por qué?', en: 'If you could recover a lost object from your family, what would it be and why?' }, help: { es: 'Me encantaría recuperar… porque representa…', en: 'I would love to recover… because it represents…' }, follow: [{ es: '¿Cómo se perdió?', en: 'How was it lost?' }, { es: '¿Quién lo tendría ahora?', en: 'Who would have it now?' }] },
            { q: { es: '¿Importa que una pieza sea original si nadie nota la diferencia?', en: 'Does it matter whether a piece is original if nobody notices the difference?' }, help: { es: 'Sí importa, porque… / En el fondo no, ya que…', en: 'Yes it matters, because… / Deep down no, since…' }, follow: [{ es: '¿Pagarías por ver una copia?', en: 'Would you pay to see a copy?' }, { es: '¿Y una obra de arte hecha por una máquina?', en: 'And a work of art made by a machine?' }] },
          ],
          words: [{ es: 'polémico', en: 'controversial' }, { es: 'devolver', en: 'to return (something)' }, { es: 'el préstamo', en: 'loan' }, { es: 'la falsificación', en: 'fake, forgery' }, { es: 'sustituir', en: 'to replace' }],
        },
      },
    },
    // ------------------------------------------------------------ the Xochimilco boat
    {
      id: 'trajinera',
      name: { es: 'La trajinera de Xochimilco', en: 'The Xochimilco boat' },
      who: { name: 'Don Chuy', role: { es: 'remero de trajinera', en: 'trajinera boatman' } },
      levels: {
        A0: {
          scene: { es: 'Es Xochimilco. Hay canales y barcos de colores: las trajineras. Don Chuy tiene una trajinera roja y verde.', en: 'It is Xochimilco. There are canals and colourful boats: the trajineras. Don Chuy has a red and green trajinera.' },
          opener: { es: '¡Buenas tardes! Soy Chuy. ¿Subes a mi trajinera?', en: 'Good afternoon! I am Chuy. Will you get on my trajinera?' },
          decide: {
            ask: { es: 'El paseo es de una hora o de dos horas. ¿Cuál quieres?', en: 'The ride is one hour or two hours. Which do you want?' },
            options: [
              { say: { es: 'Una hora, por favor.', en: 'One hour, please.' }, then: { es: 'Don Chuy dice: «Muy bien. Vamos a ver flores».', en: 'Don Chuy says: “Very good. We are going to see flowers.”' } },
              { say: { es: 'Dos horas.', en: 'Two hours.' }, then: { es: 'Don Chuy dice: «¡Perfecto! Vamos a la isla de las muñecas».', en: 'Don Chuy says: “Perfect! We go to the island of the dolls.”' } },
              { say: { es: '¿Cuánto cuesta?', en: 'How much is it?' }, then: { es: 'Don Chuy dice: «Quinientos pesos la hora. Es para diez personas».', en: 'Don Chuy says: “Five hundred pesos an hour. It is for ten people.”' } },
            ],
          },
          twist: { es: 'Llega otra trajinera con mariachis. ¡Tocan música muy fuerte! ¿Bailas?', en: 'Another trajinera arrives with mariachis. They play very loud music! Do you dance?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, me gustan. / No, me mareo.', en: 'Yes, I like them. / No, I get seasick.' }, follow: [{ es: '¿Hay barcos en tu ciudad?', en: 'Are there boats in your city?' }, { es: '¿Nadas bien?', en: 'Do you swim well?' }] },
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí, me gustan las rosas / los girasoles…', en: 'Yes, I like roses / sunflowers…' }, follow: [{ es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }, { es: '¿Qué color te gusta?', en: 'What colour do you like?' }] },
            { q: { es: '¿Bailas?', en: 'Do you dance?' }, help: { es: 'Sí, bailo. / No, no bailo.', en: 'Yes, I dance. / No, I don’t dance.' }, follow: [{ es: '¿Dónde bailas?', en: 'Where do you dance?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cuántas personas hay en tu familia?', en: 'How many people are there in your family?' }, help: { es: 'En mi familia hay… personas.', en: 'There are … people in my family.' }, follow: [{ es: '¿Viajan juntos?', en: 'Do you travel together?' }, { es: '¿Quién es el más divertido?', en: 'Who is the funniest?' }] },
          ],
          words: [{ es: 'el canal', en: 'the canal' }, { es: 'el barco', en: 'the boat' }, { es: 'subir', en: 'to get on' }, { es: 'la isla', en: 'the island' }, { es: 'la muñeca', en: 'the doll' }],
        },
        A1: {
          scene: { es: 'Don Chuy rema por los canales desde hace treinta años. Su trajinera se llama «Lupita», como su esposa. Hoy llevas a tu cumpleaños a seis amigos.', en: 'Don Chuy has rowed the canals for thirty years. His trajinera is called “Lupita”, like his wife. Today you are bringing six friends for your birthday.' },
          opener: { es: '¡Feliz cumpleaños! Aquí todo se puede comprar desde la trajinera: elotes, flores, música… ¿Qué quieres para festejar?', en: 'Happy birthday! Here you can buy everything from the boat: corn, flowers, music… What do you want to celebrate?' },
          decide: {
            ask: { es: 'Tienes dinero para una sola cosa. ¿Qué eliges?', en: 'You have money for only one thing. What do you choose?' },
            options: [
              { say: { es: 'Una canción de mariachi.', en: 'A mariachi song.' }, then: { es: 'Los mariachis suben a la trajinera y te cantan «Las mañanitas». Tus amigos graban todo.', en: 'The mariachis get on the boat and sing you “Las mañanitas”. Your friends record everything.' } },
              { say: { es: 'Elotes y quesadillas para todos.', en: 'Corn and quesadillas for everyone.' }, then: { es: 'Una señora en una canoa cocina en un comal. Don Chuy pide la suya con mucho chile.', en: 'A woman in a canoe cooks on a griddle. Don Chuy orders his with lots of chilli.' } },
              { say: { es: 'Una corona de flores para mi cabeza.', en: 'A flower crown for my head.' }, then: { es: 'Te ves muy bien. Don Chuy dice que pareces Frida Kahlo.', en: 'You look great. Don Chuy says you look like Frida Kahlo.' } },
            ],
          },
          twist: { es: 'Una amiga se levanta para sacar una foto y la trajinera se mueve mucho. ¡Su teléfono cae al agua!', en: 'A friend stands up to take a photo and the boat rocks a lot. Her phone falls in the water!' },
          questions: [
            { q: { es: '¿Cómo celebras tu cumpleaños normalmente?', en: 'How do you usually celebrate your birthday?' }, help: { es: 'Normalmente hago una fiesta / ceno con…', en: 'I usually have a party / have dinner with…' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿Te gustan las sorpresas?', en: 'Do you like surprises?' }] },
            { q: { es: '¿Qué canción se canta en los cumpleaños de tu país?', en: 'What song is sung on birthdays in your country?' }, help: { es: 'En mi país cantamos…', en: 'In my country we sing…' }, follow: [{ es: '¿La cantas bien?', en: 'Do you sing it well?' }, { es: '¿Hay pastel?', en: 'Is there cake?' }] },
            { q: { es: '¿Qué comida de la calle te gusta?', en: 'What street food do you like?' }, help: { es: 'Me gustan los… / las…', en: 'I like…' }, follow: [{ es: '¿Dónde la compras?', en: 'Where do you buy it?' }, { es: '¿Es barata?', en: 'Is it cheap?' }] },
            { q: { es: '¿Qué haces si pierdes el teléfono?', en: 'What do you do if you lose your phone?' }, help: { es: 'Primero llamo… / Busco… / Compro otro…', en: 'First I call… / I look… / I buy another…' }, follow: [{ es: '¿Tienes copia de tus fotos?', en: 'Do you have a backup of your photos?' }, { es: '¿Puedes vivir sin teléfono?', en: 'Can you live without a phone?' }] },
          ],
          words: [{ es: 'remar', en: 'to row' }, { es: 'festejar', en: 'to celebrate' }, { es: 'el elote', en: 'corn on the cob' }, { es: 'la corona', en: 'crown' }, { es: 'caer', en: 'to fall' }],
        },
        A2: {
          scene: { es: 'Don Chuy te cuenta que, cuando era niño, el agua de los canales era limpia y su papá cultivaba verduras en las chinampas, unas islas hechas a mano. Hoy casi todas están abandonadas.', en: 'Don Chuy tells you that when he was a child, the canal water was clean and his father grew vegetables on the chinampas, islands made by hand. Today almost all are abandoned.' },
          opener: { es: 'Mi papá se levantaba a las cuatro para llevar lechugas al mercado en canoa. Ahora los jóvenes prefieren pasear turistas: se gana más. Yo también lo hice. ¿Tú qué habrías hecho?', en: 'My dad got up at four to take lettuces to market by canoe. Now young people prefer to take tourists around: it pays more. I did it too. What would you have done?' },
          decide: {
            ask: { es: 'El nieto de Don Chuy quiere recuperar la chinampa de la familia. Le falta dinero. ¿Qué le aconsejas?', en: 'Don Chuy’s grandson wants to restore the family chinampa. He needs money. What do you advise?' },
            options: [
              { say: { es: 'Vender verduras orgánicas a restaurantes caros.', en: 'Sell organic vegetables to expensive restaurants.' }, then: { es: 'Don Chuy dice que un chef famoso ya compra a dos chinampas vecinas. Hay esperanza.', en: 'Don Chuy says a famous chef already buys from two neighbouring chinampas. There is hope.' } },
              { say: { es: 'Hacer visitas para turistas en la chinampa.', en: 'Run tourist visits on the chinampa.' }, then: { es: 'Don Chuy se ríe: «Siempre los turistas… Pero sí, así se paga».', en: 'Don Chuy laughs: “Always the tourists… But yes, that’s how it gets paid for.”' } },
              { say: { es: 'Pedir ayuda a la universidad.', en: 'Ask the university for help.' }, then: { es: 'Resulta que unos biólogos buscan chinampas para estudiar el ajolote. ¡Podría funcionar!', en: 'It turns out some biologists are looking for chinampas to study the axolotl. It could work!' } },
            ],
          },
          twist: { es: 'Don Chuy para la trajinera y señala el agua: un ajolote, un animal que casi ya no existe en estado salvaje. Nadie habla.', en: 'Don Chuy stops the boat and points at the water: an axolotl, an animal that hardly exists in the wild any more. Nobody speaks.' },
          questions: [
            { q: { es: '¿Qué hacían tus padres o abuelos cuando eran jóvenes?', en: 'What did your parents or grandparents do when they were young?' }, help: { es: 'Mi abuelo trabajaba en… / Mi madre vivía en…', en: 'My grandfather worked in… / My mother lived in…' }, follow: [{ es: '¿Era un trabajo duro?', en: 'Was it hard work?' }, { es: '¿Te contaban historias de esa época?', en: 'Did they tell you stories from that time?' }] },
            { q: { es: '¿Alguna vez cultivaste algo: verduras, flores, un árbol?', en: 'Have you ever grown something: vegetables, flowers, a tree?' }, help: { es: 'Sí, una vez planté… / No, nunca, pero…', en: 'Yes, once I planted… / No, never, but…' }, follow: [{ es: '¿Creció bien?', en: 'Did it grow well?' }, { es: '¿Te gustaría tener un huerto?', en: 'Would you like to have a vegetable garden?' }] },
            { q: { es: '¿Qué lugar natural de tu país estaba mejor antes?', en: 'What natural place in your country was better before?' }, help: { es: 'Antes… era limpio / había muchos… / ahora…', en: 'Before… was clean / there were many… / now…' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Alguien intenta recuperarlo?', en: 'Is anyone trying to restore it?' }] },
            { q: { es: '¿Qué es más importante para ti en un trabajo: el dinero o la tradición familiar?', en: 'What is more important to you in a job: money or family tradition?' }, help: { es: 'Para mí es más importante… porque…', en: 'For me… is more important because…' }, follow: [{ es: '¿Tu familia piensa igual?', en: 'Does your family think the same?' }, { es: '¿Qué tradición te gustaría continuar?', en: 'What tradition would you like to continue?' }] },
          ],
          words: [{ es: 'cultivar', en: 'to grow (crops)' }, { es: 'la chinampa', en: 'floating garden' }, { es: 'abandonado', en: 'abandoned' }, { es: 'recuperar', en: 'to restore, recover' }, { es: 'el ajolote', en: 'axolotl' }],
        },
        B1: {
          scene: { es: 'Es domingo y Xochimilco está lleno. Muchas trajineras llevan música altísima y alcohol. Los vecinos se quejan del ruido y de la basura en los canales. El ayuntamiento propone prohibir el alcohol en las trajineras.', en: 'It is Sunday and Xochimilco is packed. Many boats carry very loud music and alcohol. Residents complain about the noise and the rubbish in the canals. The council proposes banning alcohol on the boats.' },
          opener: { es: 'Si prohíben la cerveza, la mitad de los clientes no viene. Pero si seguimos así, en diez años no quedan ni canales ni ajolotes. Yo vivo de esto, pero mis nietos también van a vivir aquí. ¿Qué harías en mi lugar?', en: 'If they ban beer, half the customers won’t come. But if we carry on like this, in ten years there won’t be canals or axolotls left. I make a living from this, but my grandchildren will live here too. What would you do in my place?' },
          decide: {
            ask: { es: 'Los remeros votan esta tarde. Don Chuy te pide tu opinión antes de votar. ¿Qué le dices?', en: 'The boatmen vote this afternoon. Don Chuy asks your opinion before voting. What do you tell him?' },
            options: [
              { say: { es: 'Que vote a favor de la prohibición: el futuro es más importante.', en: 'Vote for the ban: the future matters more.' }, then: { es: 'Don Chuy suspira: «Fácil decirlo cuando uno no tiene que pagar la renta este mes».', en: 'Don Chuy sighs: “Easy to say when you don’t have to pay the rent this month.”' } },
              { say: { es: 'Que proponga horarios: fiesta en algunos canales, tranquilidad en otros.', en: 'Propose schedules: party on some canals, quiet on others.' }, then: { es: 'A Don Chuy le parece sensato. «Habría que vigilarlo, eso sí», dice.', en: 'Don Chuy thinks it’s sensible. “Someone would have to enforce it, mind you,” he says.' } },
              { say: { es: 'Que cobren una tasa a los turistas para limpiar los canales.', en: 'Charge tourists a fee to clean the canals.' }, then: { es: 'Don Chuy duda: «¿Y quién garantiza que ese dinero llegue al agua y no a otro bolsillo?»', en: 'Don Chuy doubts: “And who guarantees that money reaches the water and not someone’s pocket?”' } },
            ],
          },
          twist: { es: 'Mientras discuten, una trajinera vecina choca contra la de Don Chuy. Los pasajeros, borrachos, ni se disculpan. Don Chuy aprieta los dientes.', en: 'While they argue, a nearby boat crashes into Don Chuy’s. The drunk passengers don’t even apologise. Don Chuy clenches his teeth.' },
          questions: [
            { q: { es: '¿Prohibir funciona, o la gente siempre encuentra la manera de saltarse las reglas?', en: 'Does banning work, or do people always find a way to break the rules?' }, help: { es: 'Creo que prohibir… / Funciona solo si… / Es más eficaz…', en: 'I think banning… / It only works if… / It is more effective to…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Qué alternativa propones?', en: 'What alternative do you suggest?' }] },
            { q: { es: '¿Cómo se puede convivir el turismo de fiesta con la vida de los vecinos?', en: 'How can party tourism coexist with residents’ lives?' }, help: { es: 'Habría que… / Lo ideal sería que… / Si los turistas…', en: 'It would be necessary to… / Ideally… / If tourists…' }, follow: [{ es: '¿Pasa algo parecido en tu ciudad?', en: 'Does something similar happen in your city?' }, { es: '¿De qué lado estarías tú?', en: 'Which side would you be on?' }] },
            { q: { es: '¿Has sido alguna vez el turista molesto sin darte cuenta?', en: 'Have you ever been the annoying tourist without realising?' }, help: { es: 'Quizás cuando… / Me di cuenta cuando… / Nunca, porque…', en: 'Maybe when… / I realised when… / Never, because…' }, follow: [{ es: '¿Cómo reaccionó la gente?', en: 'How did people react?' }, { es: '¿Qué harías distinto hoy?', en: 'What would you do differently today?' }] },
            { q: { es: 'Si tu trabajo dañara un lugar que amas, ¿lo dejarías?', en: 'If your job damaged a place you love, would you quit?' }, help: { es: 'Lo dejaría si… / No podría, porque… / Intentaría cambiarlo desde dentro…', en: 'I would quit if… / I couldn’t, because… / I would try to change it from inside…' }, follow: [{ es: '¿Hay trabajos que nunca harías?', en: 'Are there jobs you would never do?' }, { es: '¿Qué pesa más: el sueldo o la conciencia?', en: 'What weighs more: salary or conscience?' }] },
          ],
          words: [{ es: 'quejarse', en: 'to complain' }, { es: 'prohibir', en: 'to ban' }, { es: 'la tasa', en: 'fee, tax' }, { es: 'sensato', en: 'sensible' }, { es: 'saltarse las reglas', en: 'to break the rules' }],
        },
      },
    },
  ],
};
