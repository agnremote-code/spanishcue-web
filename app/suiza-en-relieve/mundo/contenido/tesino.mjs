// Tesino · a café on the lake in Lugano, the Saturday market in Bellinzona, a stone grotto
// in the woods, the three castles of Bellinzona and the green river Verzasca. Five places,
// four levels each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'tesino',
  spots: [
    // ------------------------------------------------------------ the lakeside café
    {
      id: 'lugano',
      name: { es: 'El café del lago de Lugano', en: 'The café on Lake Lugano' },
      who: { name: 'Giulia', role: { es: 'camarera', en: 'waitress' } },
      levels: {
        A0: {
          scene: { es: 'Es un café al lado de un lago. Hay palmeras y montañas. Hace sol. Giulia es camarera. Tiene una camisa blanca y una bandeja.', en: 'It is a café next to a lake. There are palm trees and mountains. It is sunny. Giulia is a waitress. She has a white shirt and a tray.' },
          opener: { es: '¡Buongiorno! Soy Giulia. Aquí hablamos italiano, pero también español. ¿Qué tomas?', en: 'Buongiorno! I am Giulia. Here we speak Italian, but also Spanish. What will you have?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'Un helado.', en: 'An ice cream.' }, then: { es: 'Giulia trae un helado de limón. ¡Muy fresco!', en: 'Giulia brings a lemon ice cream. Very refreshing!' } },
              { say: { es: 'Un café.', en: 'A coffee.' }, then: { es: 'Es un café pequeño y fuerte, como en Italia.', en: 'It is a small, strong coffee, like in Italy.' } },
              { say: { es: 'Un zumo de naranja.', en: 'An orange juice.' }, then: { es: 'Giulia dice: «Las naranjas son de Sicilia».', en: 'Giulia says: “The oranges are from Sicily.”' } },
            ],
          },
          twist: { es: '¿Palmeras en Suiza? Giulia dice: «Sí, aquí hace calor». ¿Te sorprende?', en: 'Palm trees in Switzerland? Giulia says: “Yes, it is warm here.” Are you surprised?' },
          questions: [
            { q: { es: '¿Hablas italiano?', en: 'Do you speak Italian?' }, help: { es: 'Un poco. / No.', en: 'A little. / No.' }, follow: [{ es: '¿Sabes una palabra?', en: 'Do you know a word?' }, { es: '¿Te gusta el idioma?', en: 'Do you like the language?' }] },
            { q: { es: '¿Te gusta el helado?', en: 'Do you like ice cream?' }, help: { es: 'Sí, mucho. / No.', en: 'Yes, a lot. / No.' }, follow: [{ es: '¿De qué sabor?', en: 'What flavour?' }, { es: '¿Cuándo comes helado?', en: 'When do you eat ice cream?' }] },
            { q: { es: '¿Hay palmeras en tu ciudad?', en: 'Are there palm trees in your city?' }, help: { es: 'Sí, muchas. / No.', en: 'Yes, many. / No.' }, follow: [{ es: '¿Hace calor?', en: 'Is it hot?' }, { es: '¿Qué árboles hay?', en: 'What trees are there?' }] },
            { q: { es: '¿Vas a cafés?', en: 'Do you go to cafés?' }, help: { es: 'Sí, a veces. / No.', en: 'Yes, sometimes. / No.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Qué pides?', en: 'What do you order?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'la palmera', en: 'the palm tree' }, { es: 'la camarera', en: 'the waitress' }, { es: 'la bandeja', en: 'the tray' }, { es: 'el zumo', en: 'the juice' }],
        },
        A1: {
          scene: { es: 'El Tesino es la parte de Suiza donde se habla italiano. Está al sur de los Alpes y tiene un clima casi mediterráneo: hay palmeras, camelias y limoneros. Los suizos del norte vienen aquí de vacaciones para buscar el sol. Giulia trabaja en un café del paseo del lago desde hace cinco años.', en: 'Ticino is the part of Switzerland where Italian is spoken. It is south of the Alps and has an almost Mediterranean climate: there are palm trees, camellias and lemon trees. Swiss people from the north come here on holiday looking for sun. Giulia has worked in a café on the lakeside promenade for five years.' },
          opener: { es: 'Los clientes de Zúrich me hablan en alemán y yo les contesto en italiano. Al final hablamos en inglés o con las manos. Es divertido. Somos el mismo país, pero a veces parecemos tres. En el norte cenan a las seis; aquí, a las ocho o a las nueve, como en Italia. ¿A qué hora cenan en tu país?', en: 'Customers from Zurich speak to me in German and I answer in Italian. In the end we speak English or use our hands. It’s fun. We’re the same country, but sometimes we seem like three. In the north they have dinner at six; here, at eight or nine, like in Italy. What time do people have dinner in your country?' },
          decide: {
            ask: { es: 'Un cliente del norte pide la cena a las seis. La cocina abre a las siete. ¿Qué hace Giulia?', en: 'A customer from the north orders dinner at six. The kitchen opens at seven. What does Giulia do?' },
            options: [
              { say: { es: 'Le ofrece un aperitivo mientras espera.', en: 'She offers him an aperitif while he waits.' }, then: { es: 'Aceitunas, pan y queso. El cliente está feliz y ya no tiene tanta hambre.', en: 'Olives, bread and cheese. The customer is happy and isn’t so hungry any more.' } },
              { say: { es: 'Habla con el cocinero.', en: 'She talks to the cook.' }, then: { es: 'El cocinero hace una pasta rápida. Dice: «Solo esta vez».', en: 'The cook makes a quick pasta. He says: “Just this once.”' } },
              { say: { es: 'Le explica el horario del Tesino.', en: 'She explains Ticino’s timetable.' }, then: { es: 'El cliente ríe: «¡Estoy de vacaciones! Hoy ceno a la italiana».', en: 'The customer laughs: “I’m on holiday! Today I’ll eat Italian-style.”' } },
            ],
          },
          twist: { es: 'Una pareja deja una propina muy grande y una nota: «Para la camarera más simpática». ¿Giulia la comparte con sus compañeros?', en: 'A couple leaves a very big tip and a note: “For the friendliest waitress.” Does Giulia share it with her colleagues?' },
          questions: [
            { q: { es: '¿A qué hora cenas normalmente?', en: 'What time do you usually have dinner?' }, help: { es: 'Ceno a las…', en: 'I have dinner at…' }, follow: [{ es: '¿Y en vacaciones?', en: 'And on holiday?' }, { es: '¿Con quién cenas?', en: 'Who do you have dinner with?' }] },
            { q: { es: '¿En tu país hay regiones muy distintas?', en: 'Are there very different regions in your country?' }, help: { es: 'Sí, el norte es… y el sur es…', en: 'Yes, the north is… and the south is…' }, follow: [{ es: '¿De qué región eres?', en: 'Which region are you from?' }, { es: '¿Cuál te gusta más?', en: 'Which do you like most?' }] },
            { q: { es: '¿Hablaste con alguien solo con las manos?', en: 'Have you talked to someone using only your hands?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Funcionó?', en: 'Did it work?' }, { es: '¿Fue divertido?', en: 'Was it fun?' }] },
            { q: { es: '¿Adónde vas para buscar el sol?', en: 'Where do you go to find the sun?' }, help: { es: 'Voy a… / No me gusta el sol.', en: 'I go to… / I don’t like the sun.' }, follow: [{ es: '¿Con quién vas?', en: 'Who do you go with?' }, { es: '¿Qué haces allí?', en: 'What do you do there?' }] },
          ],
          words: [{ es: 'el clima', en: 'the climate' }, { es: 'el paseo', en: 'the promenade' }, { es: 'el limonero', en: 'the lemon tree' }, { es: 'el aperitivo', en: 'the aperitif / snack' }, { es: 'la propina', en: 'the tip' }],
        },
        A2: {
          scene: { es: 'Cada mañana, setenta mil trabajadores italianos cruzan la frontera para trabajar en el Tesino. Se llaman «frontalieri». Cobran sueldos suizos, más altos que en Italia, pero muchos suizos del Tesino dicen que les quitan el trabajo y bajan los sueldos. Giulia es italiana, de Como, y cruza la frontera cada día. Hoy un cliente hace un comentario desagradable.', en: 'Every morning, seventy thousand Italian workers cross the border to work in Ticino. They’re called “frontalieri”. They earn Swiss wages, higher than in Italy, but many Swiss in Ticino say they take their jobs and push wages down. Giulia is Italian, from Como, and crosses the border every day. Today a customer makes an unpleasant comment.' },
          opener: { es: 'El cliente me dijo: «Ustedes los italianos vienen aquí, ganan nuestro dinero y se lo llevan a casa». No es la primera vez. Yo pago impuestos aquí, trabajo diez horas, y mi jefe no encontró a ningún suizo que quisiera este trabajo. Pero también entiendo que hay suizos jóvenes sin empleo. Me molestó mucho, pero no dije nada. ¿Qué habrías hecho tú?', en: 'The customer told me: “You Italians come here, earn our money and take it home.” It’s not the first time. I pay taxes here, work ten hours, and my boss couldn’t find a single Swiss person who wanted this job. But I also understand there are young Swiss people without work. It really bothered me, but I said nothing. What would you have done?' },
          decide: {
            ask: { es: '¿Qué debería hacer Giulia la próxima vez?', en: 'What should Giulia do next time?' },
            options: [
              { say: { es: 'Responder con calma y explicar su situación.', en: 'Reply calmly and explain her situation.' }, then: { es: 'El cliente se sorprende. No cambia de opinión, pero deja de hacer comentarios.', en: 'The customer is surprised. He doesn’t change his mind, but he stops making comments.' } },
              { say: { es: 'Pedirle a su jefe que hable con el cliente.', en: 'Ask her boss to talk to the customer.' }, then: { es: 'El jefe le dice al cliente que en su café se respeta a todos. El cliente no vuelve.', en: 'The boss tells the customer that everyone is respected in his café. The customer doesn’t come back.' } },
              { say: { es: 'Ignorarlo y seguir trabajando.', en: 'Ignore him and carry on working.' }, then: { es: 'Es lo más fácil, pero Giulia se va a casa triste. Habla con otros frontalieri: a todos les pasa.', en: 'It’s the easiest, but Giulia goes home sad. She talks to other frontalieri: it happens to all of them.' } },
            ],
          },
          twist: { es: 'El Tesino vota una ley que da prioridad a los suizos para los trabajos nuevos. ¿Es protección o discriminación?', en: 'Ticino votes on a law giving Swiss people priority for new jobs. Is it protection or discrimination?' },
          questions: [
            { q: { es: '¿Conoces a alguien que cruza una frontera para trabajar?', en: 'Do you know someone who crosses a border to work?' }, help: { es: 'Sí, mi… / No.', en: 'Yes, my… / No.' }, follow: [{ es: '¿Por qué lo hace?', en: 'Why do they do it?' }, { es: '¿Es cansado?', en: 'Is it tiring?' }] },
            { q: { es: '¿Alguien te hizo un comentario injusto en el trabajo?', en: 'Has someone made an unfair comment to you at work?' }, help: { es: 'Sí, una vez… / No.', en: 'Yes, once… / No.' }, follow: [{ es: '¿Qué respondiste?', en: 'What did you reply?' }, { es: '¿Qué te gustaría haber dicho?', en: 'What would you like to have said?' }] },
            { q: { es: '¿Los trabajadores extranjeros ayudan o perjudican a un país?', en: 'Do foreign workers help or harm a country?' }, help: { es: 'Creo que ayudan porque… / Depende de…', en: 'I think they help because… / It depends on…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }, { es: '¿Hay debate?', en: 'Is there debate?' }] },
            { q: { es: '¿Es mejor responder o callarse ante un comentario ofensivo?', en: 'Is it better to respond or stay quiet when faced with an offensive comment?' }, help: { es: 'Depende… / Prefiero…', en: 'It depends… / I prefer…' }, follow: [{ es: '¿Qué haces normalmente?', en: 'What do you usually do?' }, { es: '¿Te arrepentiste alguna vez?', en: 'Have you ever regretted it?' }] },
          ],
          words: [{ es: 'la frontera', en: 'the border' }, { es: 'cobrar', en: 'to earn / be paid' }, { es: 'desagradable', en: 'unpleasant' }, { es: 'el empleo', en: 'employment' }, { es: 'la prioridad', en: 'priority' }],
        },
        B1: {
          scene: { es: 'Lugano quiere ser «la capital del bitcóin» de Europa: en muchas tiendas y cafés ya se puede pagar con criptomonedas. El ayuntamiento dice que atrae inversión y empresas tecnológicas. El dueño del café de Giulia está pensando aceptar bitcóin y pagar una parte de los sueldos en criptomonedas. Giulia no está segura.', en: 'Lugano wants to be Europe’s “bitcoin capital”: in many shops and cafés you can already pay with cryptocurrencies. The town hall says it attracts investment and tech companies. The owner of Giulia’s café is considering accepting bitcoin and paying part of salaries in cryptocurrency. Giulia isn’t sure.' },
          opener: { es: 'Mi jefe dice que es el futuro, que los jóvenes ya no usan efectivo y que el que no se adapta se queda atrás. Pero el bitcóin sube y baja como una montaña rusa: un mes vale el doble y al siguiente la mitad. Yo tengo que pagar el alquiler en euros, no en promesas. Y mi abuela, que viene al café todos los domingos, no sabe ni usar el móvil. ¿La tecnología nueva incluye a todos o deja a algunos atrás?', en: 'My boss says it’s the future, that young people don’t use cash any more and that whoever doesn’t adapt gets left behind. But bitcoin goes up and down like a roller coaster: one month it’s worth double and the next half. I have to pay my rent in euros, not in promises. And my grandmother, who comes to the café every Sunday, can’t even use a mobile phone. Does new technology include everyone or leave some behind?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Giulia?', en: 'What do you advise Giulia?' },
            options: [
              { say: { es: 'Aceptar que el café cobre en bitcóin, pero cobrar su sueldo en francos.', en: 'Accept the café taking bitcoin, but take her salary in francs.' }, then: { es: 'El jefe acepta. Pocos clientes pagan en bitcóin, pero el café sale en un artículo y vienen curiosos.', en: 'The boss agrees. Few customers pay in bitcoin, but the café appears in an article and curious people come.' } },
              { say: { es: 'Probar con un diez por ciento del sueldo en criptomonedas.', en: 'Try ten per cent of her salary in cryptocurrency.' }, then: { es: 'Los primeros meses gana dinero. Después pierde todo lo ganado y un poco más.', en: 'In the first months she makes money. Then she loses everything she gained and a little more.' } },
              { say: { es: 'Pedir que el café acepte siempre efectivo también.', en: 'Ask that the café always accept cash too.' }, then: { es: 'El jefe está de acuerdo. La abuela de Giulia sigue pagando su café con monedas, como siempre.', en: 'The boss agrees. Giulia’s grandmother keeps paying for her coffee with coins, as always.' } },
            ],
          },
          twist: { es: 'Algunos países quieren eliminar el dinero en efectivo para controlar mejor los impuestos y el crimen. ¿Debería existir siempre el derecho a pagar en efectivo?', en: 'Some countries want to get rid of cash to better control taxes and crime. Should the right to pay in cash always exist?' },
          questions: [
            { q: { es: '¿Usas criptomonedas o pagos digitales? ¿Confías en ellos?', en: 'Do you use cryptocurrencies or digital payments? Do you trust them?' }, help: { es: 'Uso… y confío porque… / No, porque…', en: 'I use… and I trust them because… / No, because…' }, follow: [{ es: '¿Perdiste dinero alguna vez?', en: 'Have you ever lost money?' }, { es: '¿Cómo?', en: 'How?' }] },
            { q: { es: '¿Quién se queda atrás con la tecnología en tu entorno?', en: 'Who gets left behind by technology around you?' }, help: { es: 'Mis abuelos / algunas personas que…', en: 'My grandparents / some people who…' }, follow: [{ es: '¿Los ayudas?', en: 'Do you help them?' }, { es: '¿Qué les cuesta más?', en: 'What do they find hardest?' }] },
            { q: { es: '¿Aceptarías parte de tu sueldo en algo que puede subir o bajar?', en: 'Would you take part of your salary in something that can go up or down?' }, help: { es: 'Sí, si… / No, porque necesito…', en: 'Yes, if… / No, because I need…' }, follow: [{ es: '¿Cuánto arriesgarías?', en: 'How much would you risk?' }, { es: '¿Inviertes tu dinero?', en: 'Do you invest your money?' }] },
            { q: { es: '¿Debería eliminarse el dinero en efectivo?', en: 'Should cash be abolished?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Llevas efectivo?', en: 'Do you carry cash?' }, { es: '¿Para qué lo usas?', en: 'What do you use it for?' }] },
          ],
          words: [{ es: 'la criptomoneda', en: 'the cryptocurrency' }, { es: 'adaptarse', en: 'to adapt' }, { es: 'la montaña rusa', en: 'the roller coaster' }, { es: 'quedarse atrás', en: 'to be left behind' }, { es: 'la moneda', en: 'the coin' }],
        },
      },
    },
    // ------------------------------------------------------------ the Bellinzona market
    {
      id: 'mercado',
      name: { es: 'El mercado de Bellinzona', en: 'The Bellinzona market' },
      who: { name: 'Franco', role: { es: 'vendedor de embutidos', en: 'cured-meat seller' } },
      levels: {
        A0: {
          scene: { es: 'Es sábado. Hay un mercado en la plaza. Hay frutas, flores y quesos. Franco vende salami. Tiene un bigote grande y un delantal rojo.', en: 'It is Saturday. There is a market in the square. There are fruits, flowers and cheeses. Franco sells salami. He has a big moustache and a red apron.' },
          opener: { es: '¡Hola! Soy Franco. Mi salami es el mejor del Tesino. ¿Pruebas?', en: 'Hello! I am Franco. My salami is the best in Ticino. Will you try some?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, pruebo.', en: 'Yes, I try some.' }, then: { es: '¡Está muy rico! Franco sonríe: «¿Ves?».', en: 'It is very tasty! Franco smiles: “See?”' } },
              { say: { es: 'No como carne.', en: 'I don’t eat meat.' }, then: { es: 'Franco dice: «¡No pasa nada! Prueba este queso».', en: 'Franco says: “No problem! Try this cheese.”' } },
              { say: { es: '¿Cuánto cuesta?', en: 'How much is it?' }, then: { es: 'Franco dice: «Diez francos. Para ti, ocho».', en: 'Franco says: “Ten francs. For you, eight.”' } },
            ],
          },
          twist: { es: 'Una señora compra todas las castañas del mercado. ¿Por qué?', en: 'A lady buys all the chestnuts at the market. Why?' },
          questions: [
            { q: { es: '¿Vas al mercado?', en: 'Do you go to the market?' }, help: { es: 'Sí, los sábados. / No.', en: 'Yes, on Saturdays. / No.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí. / No, soy vegetariano.', en: 'Yes. / No, I am vegetarian.' }, follow: [{ es: '¿Qué carne te gusta?', en: 'What meat do you like?' }, { es: '¿Y el pescado?', en: 'And fish?' }] },
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál es tu flor favorita?', en: 'What is your favourite flower?' }, { es: '¿Compras flores?', en: 'Do you buy flowers?' }] },
            { q: { es: '¿Qué haces los sábados?', en: 'What do you do on Saturdays?' }, help: { es: 'Los sábados…', en: 'On Saturdays…' }, follow: [{ es: '¿Te levantas temprano?', en: 'Do you get up early?' }, { es: '¿Sales por la noche?', en: 'Do you go out at night?' }] },
          ],
          words: [{ es: 'el mercado', en: 'the market' }, { es: 'la plaza', en: 'the square' }, { es: 'el bigote', en: 'the moustache' }, { es: 'las castañas', en: 'the chestnuts' }, { es: 'el salami', en: 'salami' }],
        },
        A1: {
          scene: { es: 'Cada sábado el centro de Bellinzona se llena de puestos. Los vendedores llegan de los valles con quesos de cabra, miel, embutidos, setas y castañas. En otoño el olor de las castañas asadas está por todas partes. Franco tiene su puesto en el mismo lugar desde hace treinta años, como su padre antes.', en: 'Every Saturday the centre of Bellinzona fills with stalls. Sellers come down from the valleys with goat’s cheese, honey, cured meats, mushrooms and chestnuts. In autumn the smell of roast chestnuts is everywhere. Franco has had his stall in the same place for thirty years, like his father before him.' },
          opener: { es: 'Antes, en los valles, la gente era muy pobre. Las castañas eran el pan de los pobres: se comían todos los días, de cien maneras. Muchos hombres se fueron a trabajar a América o a Londres. Mi abuelo fue a California y nunca volvió. Hoy las castañas son una especialidad y los turistas las pagan caras. ¡Qué ironía! ¿Qué comida humilde de tu país hoy es cara?', en: 'In the old days, people in the valleys were very poor. Chestnuts were the bread of the poor: they were eaten every day, in a hundred ways. Many men left to work in America or London. My grandfather went to California and never came back. Today chestnuts are a speciality and tourists pay a lot for them. What irony! What humble food from your country is expensive today?' },
          decide: {
            ask: { es: 'Un turista quiere pagar con tarjeta, pero Franco solo acepta efectivo. ¿Qué hace?', en: 'A tourist wants to pay by card, but Franco only takes cash. What does he do?' },
            options: [
              { say: { es: 'Le dice dónde hay un cajero.', en: 'He tells him where there’s a cashpoint.' }, then: { es: 'El turista vuelve en diez minutos. Franco le regala una castaña extra.', en: 'The tourist comes back in ten minutes. Franco gives him an extra chestnut.' } },
              { say: { es: 'Le deja pagar la próxima vez.', en: 'He lets him pay next time.' }, then: { es: 'El turista vuelve el sábado siguiente. «¡Los suizos confían en todo el mundo!», dice.', en: 'The tourist comes back the next Saturday. “The Swiss trust everyone!” he says.' } },
              { say: { es: 'Le pide pagar con el móvil a su hija.', en: 'He asks him to pay his daughter by phone.' }, then: { es: 'La hija de Franco tiene una aplicación. ¡Problema resuelto!', en: 'Franco’s daughter has an app. Problem solved!' } },
            ],
          },
          twist: { es: 'Llega un vendedor nuevo con salami industrial a mitad de precio. Se pone al lado de Franco. ¿Qué hace Franco?', en: 'A new seller arrives with factory salami at half price. He sets up next to Franco. What does Franco do?' },
          questions: [
            { q: { es: '¿Qué comida humilde de tu país es cara hoy?', en: 'What humble food from your country is expensive today?' }, help: { es: 'Antes… era barato y ahora…', en: '… used to be cheap and now…' }, follow: [{ es: '¿La comes?', en: 'Do you eat it?' }, { es: '¿Por qué crees que subió?', en: 'Why do you think it went up?' }] },
            { q: { es: '¿Alguien de tu familia emigró?', en: 'Did someone in your family emigrate?' }, help: { es: 'Sí, mi… se fue a… / No.', en: 'Yes, my… went to… / No.' }, follow: [{ es: '¿Volvió?', en: 'Did they come back?' }, { es: '¿Tienes contacto?', en: 'Are you in touch?' }] },
            { q: { es: '¿Te gustan las castañas?', en: 'Do you like chestnuts?' }, help: { es: 'Sí, asadas. / No las probé.', en: 'Yes, roasted. / I haven’t tried them.' }, follow: [{ es: '¿Hay castañas en tu país?', en: 'Are there chestnuts in your country?' }, { es: '¿Cuándo se comen?', en: 'When are they eaten?' }] },
            { q: { es: '¿Confías en la gente que no conoces?', en: 'Do you trust people you don’t know?' }, help: { es: 'Sí, normalmente. / No mucho.', en: 'Yes, usually. / Not much.' }, follow: [{ es: '¿Te fallaron alguna vez?', en: 'Have you ever been let down?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'los embutidos', en: 'cured meats' }, { es: 'las setas', en: 'mushrooms' }, { es: 'asado', en: 'roasted' }, { es: 'el cajero', en: 'the cashpoint' }],
        },
        A2: {
          scene: { es: 'El ayuntamiento quiere modernizar el mercado: puestos iguales, todos de madera clara, con toldos blancos, pagos con tarjeta obligatorios y un horario más corto. Dicen que es para atraer turistas y que el mercado parezca más ordenado. Los vendedores mayores están en contra: muchos no saben usar los terminales de pago y el puesto nuevo cuesta dos mil francos.', en: 'The town hall wants to modernise the market: identical stalls, all in light wood, with white awnings, compulsory card payments and shorter hours. They say it’s to attract tourists and make the market look tidier. The older sellers are against it: many don’t know how to use card terminals and the new stall costs two thousand francs.' },
          opener: { es: 'Un mercado no es un centro comercial. Mi puesto es viejo, sí, pero la gente lo reconoce desde lejos por el toldo rojo de mi padre. Si todos los puestos son iguales, ¿qué nos diferencia? Además, la señora de la miel tiene ochenta y dos años: no va a aprender a usar un terminal ahora. Pero mi hija dice que, si no cambiamos, los jóvenes no van a venir. ¿Quién tiene razón?', en: 'A market isn’t a shopping centre. My stall is old, yes, but people recognise it from far away by my father’s red awning. If every stall is the same, what makes us different? Besides, the honey lady is eighty-two: she’s not going to learn to use a terminal now. But my daughter says if we don’t change, young people won’t come. Who’s right?' },
          decide: {
            ask: { es: '¿Qué proponen los vendedores?', en: 'What do the sellers propose?' },
            options: [
              { say: { es: 'Aceptar los pagos con tarjeta, pero mantener cada puesto distinto.', en: 'Accept card payments, but keep each stall different.' }, then: { es: 'El ayuntamiento acepta. La hija de Franco enseña a los mayores a usar los terminales.', en: 'The town hall agrees. Franco’s daughter teaches the older sellers to use the terminals.' } },
              { say: { es: 'Pedir ayuda económica para los puestos nuevos.', en: 'Ask for financial help for the new stalls.' }, then: { es: 'El ayuntamiento paga la mitad. El mercado queda bonito, pero algunos dicen que perdió su alma.', en: 'The town hall pays half. The market looks nice, but some say it’s lost its soul.' } },
              { say: { es: 'Hacer una recogida de firmas contra el plan.', en: 'Collect signatures against the plan.' }, then: { es: 'Firman tres mil personas. El ayuntamiento retrasa el plan un año para hablarlo.', en: 'Three thousand people sign. The town hall delays the plan for a year to discuss it.' } },
            ],
          },
          twist: { es: 'Un joven quiere abrir un puesto de comida vegana en el mercado. Algunos vendedores dicen que no es «tradicional». ¿Qué opinas?', en: 'A young man wants to open a vegan food stall at the market. Some sellers say it isn’t “traditional”. What do you think?' },
          questions: [
            { q: { es: '¿Prefieres los lugares ordenados o los que tienen carácter?', en: 'Do you prefer tidy places or ones with character?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Y tu casa cómo es?', en: 'And what is your home like?' }] },
            { q: { es: '¿Ayudaste a una persona mayor con la tecnología?', en: 'Have you helped an older person with technology?' }, help: { es: 'Sí, a mi… con… / No.', en: 'Yes, my… with… / No.' }, follow: [{ es: '¿Fue fácil?', en: 'Was it easy?' }, { es: '¿Tuviste paciencia?', en: 'Were you patient?' }] },
            { q: { es: '¿Modernizar siempre es mejorar?', en: 'Is modernising always improving?' }, help: { es: 'No siempre, porque… / Sí, porque…', en: 'Not always, because… / Yes, because…' }, follow: [{ es: '¿Qué cambio te gustó?', en: 'Which change did you like?' }, { es: '¿Y cuál no?', en: 'And which didn’t you?' }] },
            { q: { es: '¿Firmarías contra un plan de tu ciudad?', en: 'Would you sign against a plan in your city?' }, help: { es: 'Sí, si… / No, prefiero…', en: 'Yes, if… / No, I prefer…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Sirvió?', en: 'Did it work?' }] },
          ],
          words: [{ es: 'modernizar', en: 'to modernise' }, { es: 'el toldo', en: 'the awning' }, { es: 'el terminal de pago', en: 'the card terminal' }, { es: 'reconocer', en: 'to recognise' }, { es: 'retrasar', en: 'to delay' }],
        },
        B1: {
          scene: { es: 'El valle de Franco se está vaciando. En su pueblo viven doscientas personas, la mitad mayores de setenta años. La escuela cerró hace cinco años. Los jóvenes se van a Lugano, a Zúrich o a Milán. Al mismo tiempo, gente rica del norte compra las casas viejas de piedra como segundas residencias y las usa dos semanas al año. Franco forma parte del consejo del pueblo.', en: 'Franco’s valley is emptying. Two hundred people live in his village, half of them over seventy. The school closed five years ago. Young people leave for Lugano, Zurich or Milan. At the same time, wealthy people from the north buy the old stone houses as second homes and use them two weeks a year. Franco sits on the village council.' },
          opener: { es: 'Las casas están arregladas, los jardines perfectos… y las ventanas cerradas once meses al año. El pueblo parece vivo en las fotos, pero está muerto. Los nuevos dueños pagan impuestos y arreglan las casas, eso es verdad. Sin ellos, muchas se habrían caído. Pero un pueblo no son casas: son personas que se saludan, una escuela, un bar abierto en invierno. Algunos proponen prohibir vender casas a quien no viva aquí todo el año. ¿Se puede obligar a alguien a vivir en un lugar o a no comprar allí?', en: 'The houses are done up, the gardens perfect… and the windows shut eleven months a year. The village looks alive in photos, but it’s dead. The new owners pay taxes and fix up the houses, that’s true. Without them, many would have collapsed. But a village isn’t houses: it’s people who greet each other, a school, a bar open in winter. Some propose banning sales of houses to anyone who doesn’t live here all year. Can you force someone to live somewhere, or not to buy there?' },
          decide: {
            ask: { es: '¿Qué apoya Franco en el consejo?', en: 'What does Franco support on the council?' },
            options: [
              { say: { es: 'Un impuesto alto para las segundas residencias, para ayudar a familias jóvenes.', en: 'A high tax on second homes, to help young families.' }, then: { es: 'Con el dinero, el pueblo ofrece casas baratas a tres familias jóvenes. La escuela podría reabrir.', en: 'With the money, the village offers cheap houses to three young families. The school might reopen.' } },
              { say: { es: 'Atraer teletrabajadores con internet rápido y un espacio de trabajo.', en: 'Attract remote workers with fast internet and a coworking space.' }, then: { es: 'Llegan diez personas de ciudad. Algunos se quedan; otros se van en el primer invierno.', en: 'Ten city people arrive. Some stay; others leave in the first winter.' } },
              { say: { es: 'Prohibir vender a quien no viva en el pueblo.', en: 'Ban sales to anyone who doesn’t live in the village.' }, then: { es: 'Los precios bajan, pero también el valor de las casas de los vecinos mayores, que querían venderlas.', en: 'Prices fall, but so does the value of the older residents’ houses, which they wanted to sell.' } },
            ],
          },
          twist: { es: 'Uno de los nuevos dueños dice: «Yo amo este pueblo, pero no puedo vivir aquí: mi trabajo está en Zúrich. ¿Es mejor que la casa se caiga?». ¿Qué le responderías?', en: 'One of the new owners says: “I love this village, but I can’t live here: my job is in Zurich. Is it better for the house to fall down?” What would you answer?' },
          questions: [
            { q: { es: '¿Hay pueblos que se vacían en tu país? ¿Por qué?', en: 'Are there villages emptying in your country? Why?' }, help: { es: 'Sí, en… porque… / No mucho.', en: 'Yes, in… because… / Not much.' }, follow: [{ es: '¿Qué se está haciendo?', en: 'What is being done?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Vivirías en un pueblo pequeño si pudieras trabajar desde allí?', en: 'Would you live in a small village if you could work from there?' }, help: { es: 'Sí, porque… / No, extrañaría…', en: 'Yes, because… / No, I’d miss…' }, follow: [{ es: '¿Cuál sería lo más difícil?', en: 'What would be hardest?' }, { es: '¿Y lo mejor?', en: 'And the best?' }] },
            { q: { es: '¿Las segundas residencias ayudan o perjudican a un lugar?', en: 'Do second homes help or harm a place?' }, help: { es: 'Ayudan porque… pero perjudican porque…', en: 'They help because… but they harm because…' }, follow: [{ es: '¿Tendrías una?', en: 'Would you have one?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Es justo limitar quién puede comprar una casa?', en: 'Is it fair to limit who can buy a house?' }, help: { es: 'Sí, cuando… / No, porque cada uno…', en: 'Yes, when… / No, because everyone…' }, follow: [{ es: '¿Hay leyes así en tu país?', en: 'Are there laws like that in your country?' }, { es: '¿Qué opinas?', en: 'What do you think?' }] },
          ],
          words: [{ es: 'vaciarse', en: 'to empty' }, { es: 'la segunda residencia', en: 'the second home' }, { es: 'el consejo', en: 'the council' }, { es: 'el teletrabajador', en: 'the remote worker' }, { es: 'el valor', en: 'the value' }],
        },
      },
    },
    // ------------------------------------------------------------ the grotto
    {
      id: 'grotto',
      name: { es: 'El grotto del bosque', en: 'The grotto in the woods' },
      who: { name: 'Lucia', role: { es: 'cocinera del grotto', en: 'grotto cook' } },
      levels: {
        A0: {
          scene: { es: 'Es un restaurante en el bosque. Las mesas son de piedra. Hay una chimenea con fuego. Lucia es cocinera. Tiene el pelo gris y un delantal de cuadros.', en: 'It is a restaurant in the woods. The tables are made of stone. There is a fireplace with a fire. Lucia is a cook. She has grey hair and a checked apron.' },
          opener: { es: '¡Hola! Soy Lucia. Hoy hay polenta. ¿Tienes hambre?', en: 'Hello! I am Lucia. Today there is polenta. Are you hungry?' },
          decide: {
            ask: { es: '¿Qué comes?', en: 'What do you eat?' },
            options: [
              { say: { es: 'Polenta con queso.', en: 'Polenta with cheese.' }, then: { es: 'Es amarilla, caliente y cremosa. ¡Muy rica!', en: 'It is yellow, hot and creamy. Very tasty!' } },
              { say: { es: 'Una sopa.', en: 'A soup.' }, then: { es: 'Es una sopa de verduras. Lucia pone pan.', en: 'It is a vegetable soup. Lucia adds bread.' } },
              { say: { es: 'Un postre.', en: 'A dessert.' }, then: { es: 'Lucia ríe: «¿Primero el postre? ¡Bueno!».', en: 'Lucia laughs: “Dessert first? OK!”' } },
            ],
          },
          twist: { es: 'No hay menú. Lucia dice: «Comes lo que cocino hoy». ¿Te gusta la idea?', en: 'There is no menu. Lucia says: “You eat what I cook today.” Do you like the idea?' },
          questions: [
            { q: { es: '¿Te gusta comer en el bosque?', en: 'Do you like eating in the woods?' }, help: { es: 'Sí. / No, prefiero la ciudad.', en: 'Yes. / No, I prefer the city.' }, follow: [{ es: '¿Haces pícnics?', en: 'Do you have picnics?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cocinas bien?', en: 'Do you cook well?' }, help: { es: 'Sí. / Un poco. / No.', en: 'Yes. / A little. / No.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Quién cocina en tu casa?', en: 'Who cooks at your home?' }] },
            { q: { es: '¿Hay chimenea en tu casa?', en: 'Is there a fireplace in your house?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Te gusta el fuego?', en: 'Do you like fire?' }, { es: '¿Hace frío en invierno?', en: 'Is it cold in winter?' }] },
            { q: { es: '¿Comes postre todos los días?', en: 'Do you eat dessert every day?' }, help: { es: 'Sí. / No, a veces.', en: 'Yes. / No, sometimes.' }, follow: [{ es: '¿Qué postre te gusta?', en: 'What dessert do you like?' }, { es: '¿Lo haces tú?', en: 'Do you make it?' }] },
          ],
          words: [{ es: 'el bosque', en: 'the woods / forest' }, { es: 'la piedra', en: 'stone' }, { es: 'la chimenea', en: 'the fireplace' }, { es: 'la cocinera', en: 'the (female) cook' }, { es: 'el postre', en: 'the dessert' }],
        },
        A1: {
          scene: { es: 'Los grotti son restaurantes muy simples del Tesino. Antes eran cuevas frías donde las familias guardaban el vino, el queso y los embutidos. Después empezaron a servir comida. Se come al aire libre, en mesas de granito, bajo los castaños. Lucia cocina en este grotto desde hace cuarenta años, siempre los mismos platos.', en: 'Grotti are very simple restaurants in Ticino. They used to be cool caves where families kept wine, cheese and cured meats. Later they started serving food. You eat outdoors, at granite tables, under the chestnut trees. Lucia has cooked in this grotto for forty years, always the same dishes.' },
          opener: { es: 'Mi polenta tarda una hora: hay que moverla sin parar con una cuchara de madera, en una olla de cobre, sobre el fuego. Los jóvenes me dicen que use la polenta rápida, de cinco minutos. ¡Nunca! Aquí no hay carta, no hay wifi y no hay prisa. El que quiere comer rápido, que vaya a la ciudad. ¿Tú tienes paciencia para esperar una buena comida?', en: 'My polenta takes an hour: you have to stir it non-stop with a wooden spoon, in a copper pot, over the fire. Young people tell me to use quick polenta, the five-minute kind. Never! Here there’s no menu, no wifi and no hurry. Anyone who wants to eat fast can go to the city. Do you have the patience to wait for a good meal?' },
          decide: {
            ask: { es: 'Un grupo de turistas pide la contraseña del wifi. ¿Qué hace Lucia?', en: 'A group of tourists asks for the wifi password. What does Lucia do?' },
            options: [
              { say: { es: 'Les dice: «No hay wifi. Hablen entre ustedes».', en: 'She tells them: “There’s no wifi. Talk to each other.”' }, then: { es: 'Al principio se quejan. Después hablan, ríen y se quedan tres horas.', en: 'At first they complain. Then they talk, laugh and stay three hours.' } },
              { say: { es: 'Les da una baraja de cartas.', en: 'She gives them a pack of cards.' }, then: { es: 'Juegan a un juego del Tesino. Un señor de la mesa de al lado les enseña.', en: 'They play a Ticino card game. A man at the next table teaches them.' } },
              { say: { es: 'Les cuenta la historia del grotto.', en: 'She tells them the history of the grotto.' }, then: { es: 'Los turistas escuchan con interés y no vuelven a mirar el móvil.', en: 'The tourists listen with interest and don’t look at their phones again.' } },
            ],
          },
          twist: { es: 'Un cliente pide polenta sin queso, sin sal y sin mantequilla porque está a dieta. ¿Qué responde Lucia?', en: 'A customer orders polenta without cheese, salt or butter because he’s on a diet. What does Lucia reply?' },
          questions: [
            { q: { es: '¿Qué plato de tu familia tarda mucho en hacerse?', en: 'Which dish in your family takes a long time to make?' }, help: { es: 'El/La… tarda… horas.', en: 'The… takes… hours.' }, follow: [{ es: '¿Quién lo hace?', en: 'Who makes it?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Podrías pasar un día sin internet?', en: 'Could you spend a day without internet?' }, help: { es: 'Sí, fácil. / Me costaría mucho.', en: 'Yes, easily. / It would be very hard.' }, follow: [{ es: '¿Lo hiciste?', en: 'Have you done it?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
            { q: { es: '¿Te gustan los restaurantes sin carta?', en: 'Do you like restaurants without a menu?' }, help: { es: 'Sí, porque… / No, prefiero elegir.', en: 'Yes, because… / No, I prefer to choose.' }, follow: [{ es: '¿Fuiste a uno?', en: 'Have you been to one?' }, { es: '¿Qué comiste?', en: 'What did you eat?' }] },
            { q: { es: '¿Juegas a las cartas?', en: 'Do you play cards?' }, help: { es: 'Sí, a… / No.', en: 'Yes,… / No.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Ganas mucho?', en: 'Do you win a lot?' }] },
          ],
          words: [{ es: 'la cueva', en: 'the cave' }, { es: 'el granito', en: 'granite' }, { es: 'la olla de cobre', en: 'the copper pot' }, { es: 'la contraseña', en: 'the password' }, { es: 'la baraja', en: 'the pack of cards' }],
        },
        A2: {
          scene: { es: 'El grotto de Lucia salió en una guía famosa y ahora vienen turistas de todo el mundo. Los fines de semana hay colas de una hora. Lucia está cansada: tiene setenta y un años, cocina sola y los vecinos ya no encuentran mesa en su grotto de siempre. Su sobrino le propone contratar a dos personas, abrir más días y poner reservas por internet.', en: 'Lucia’s grotto appeared in a famous guidebook and now tourists come from all over the world. At weekends there are hour-long queues. Lucia is tired: she’s seventy-one, cooks alone and the locals can no longer find a table in their usual grotto. Her nephew suggests hiring two people, opening more days and taking online bookings.' },
          opener: { es: 'Antes venían los vecinos, los cazadores, los abuelos con los nietos. Nos conocíamos todos. Ahora vienen personas muy amables, pero sacan fotos de la polenta y se van. El dinero está bien, no lo niego. Pero los vecinos me dicen que el grotto ya no es suyo. Y yo no quiero ser famosa: quiero cocinar en paz. ¿Qué harías tú en mi lugar?', en: 'Before, the locals came, the hunters, the grandparents with their grandchildren. We all knew each other. Now very nice people come, but they take photos of the polenta and leave. The money’s good, I don’t deny it. But the locals tell me the grotto isn’t theirs any more. And I don’t want to be famous: I want to cook in peace. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué decide Lucia?', en: 'What does Lucia decide?' },
            options: [
              { say: { es: 'Reservar dos mesas cada día solo para vecinos.', en: 'Keep two tables a day just for locals.' }, then: { es: 'Los vecinos vuelven. Algunos turistas se quejan, pero la mayoría entiende.', en: 'The locals come back. Some tourists complain, but most understand.' } },
              { say: { es: 'Aceptar la propuesta del sobrino.', en: 'Accept her nephew’s proposal.' }, then: { es: 'El grotto gana mucho dinero. Lucia cocina menos y descansa más, pero echa de menos el silencio.', en: 'The grotto makes a lot of money. Lucia cooks less and rests more, but misses the quiet.' } },
              { say: { es: 'Pedir a la guía que quite el grotto.', en: 'Ask the guidebook to remove the grotto.' }, then: { es: 'La guía acepta, pero el grotto ya está en las redes. Los turistas siguen viniendo.', en: 'The guidebook agrees, but the grotto is already all over social media. The tourists keep coming.' } },
            ],
          },
          twist: { es: 'Un chef famoso de Milán quiere comprar la receta de la polenta de Lucia para su restaurante. ¿Debería venderla?', en: 'A famous chef from Milan wants to buy Lucia’s polenta recipe for his restaurant. Should she sell it?' },
          questions: [
            { q: { es: '¿Un lugar que te gustaba cambió porque se hizo famoso?', en: 'Has a place you liked changed because it became famous?' }, help: { es: 'Sí, el/la… / No.', en: 'Yes, the… / No.' }, follow: [{ es: '¿Sigues yendo?', en: 'Do you still go?' }, { es: '¿Qué cambió?', en: 'What changed?' }] },
            { q: { es: '¿Sacas fotos de la comida?', en: 'Do you take photos of your food?' }, help: { es: 'Sí, siempre. / A veces. / Nunca.', en: 'Yes, always. / Sometimes. / Never.' }, follow: [{ es: '¿Las subes a las redes?', en: 'Do you post them online?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Te gustaría ser famoso?', en: 'Would you like to be famous?' }, help: { es: 'Sí, por… / No, porque…', en: 'Yes, for… / No, because…' }, follow: [{ es: '¿Qué sería lo peor?', en: 'What would be the worst part?' }, { es: '¿Y lo mejor?', en: 'And the best?' }] },
            { q: { es: '¿Los lugares deben ser primero para los vecinos o para los turistas?', en: 'Should places be for locals first or for tourists?' }, help: { es: 'Para los vecinos porque… / Para todos porque…', en: 'For locals because… / For everyone because…' }, follow: [{ es: '¿Pasa esto en tu ciudad?', en: 'Does this happen in your city?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'la guía', en: 'the guidebook' }, { es: 'la cola', en: 'the queue' }, { es: 'el sobrino', en: 'the nephew' }, { es: 'la reserva', en: 'the booking' }, { es: 'echar de menos', en: 'to miss' }],
        },
        B1: {
          scene: { es: 'Lucia quiere jubilarse, pero no tiene hijos y su sobrino vive en Zúrich. Tiene dos ofertas. Una empresa de restauración quiere comprar el grotto, modernizar la cocina y abrir una cadena de «grotti auténticos» en varias ciudades. Una joven pareja del valle quiere seguir con el grotto exactamente igual, pero solo puede pagar la mitad y en diez años.', en: 'Lucia wants to retire, but she has no children and her nephew lives in Zurich. She has two offers. A catering company wants to buy the grotto, modernise the kitchen and open a chain of “authentic grotti” in several cities. A young couple from the valley want to keep the grotto exactly as it is, but can only pay half, over ten years.' },
          opener: { es: 'Con el dinero de la empresa podría vivir tranquila el resto de mi vida y ayudar a mi sobrino. Pero sé lo que harán: polenta de cinco minutos, mesas de plástico que parecen de piedra, y la palabra «auténtico» en cada menú. La pareja joven es honesta y trabajadora, pero si les va mal, yo pierdo el dinero y el grotto. Mi médico dice que debería pensar en mí por una vez. ¿Qué vale más: la seguridad de una persona o la continuidad de una tradición?', en: 'With the company’s money I could live comfortably for the rest of my life and help my nephew. But I know what they’ll do: five-minute polenta, plastic tables that look like stone, and the word “authentic” on every menu. The young couple are honest and hard-working, but if things go badly for them, I lose the money and the grotto. My doctor says I should think of myself for once. What is worth more: one person’s security or the continuity of a tradition?' },
          decide: {
            ask: { es: '¿A quién le vende Lucia el grotto?', en: 'Who does Lucia sell the grotto to?' },
            options: [
              { say: { es: 'A la pareja joven, y se queda un año para enseñarles.', en: 'To the young couple, and she stays a year to teach them.' }, then: { es: 'El primer invierno es duro. Pero la polenta sale igual que la de Lucia y los vecinos vuelven.', en: 'The first winter is hard. But the polenta comes out just like Lucia’s and the locals come back.' } },
              { say: { es: 'A la empresa, pero sin permiso para usar su nombre.', en: 'To the company, but without permission to use her name.' }, then: { es: 'La empresa acepta pagar menos. Lucia vive tranquila, aunque evita pasar por el grotto.', en: 'The company agrees to pay less. Lucia lives comfortably, although she avoids passing the grotto.' } },
              { say: { es: 'A la pareja, con un préstamo del pueblo para pagar más rápido.', en: 'To the couple, with a loan from the village to pay faster.' }, then: { es: 'El pueblo entero participa. El grotto ahora es, de alguna manera, de todos.', en: 'The whole village takes part. The grotto now, in a way, belongs to everyone.' } },
            ],
          },
          twist: { es: 'Un antropólogo dice que las tradiciones «auténticas» siempre cambian, y que la polenta misma llegó de América hace solo cuatrocientos años. ¿Existe algo realmente tradicional?', en: 'An anthropologist says “authentic” traditions always change, and that polenta itself (made from maize) arrived from the Americas only four hundred years ago. Is anything really traditional?' },
          questions: [
            { q: { es: '¿Qué significa para ti que algo sea «auténtico»?', en: 'What does it mean to you for something to be “authentic”?' }, help: { es: 'Para mí es auténtico cuando…', en: 'For me it’s authentic when…' }, follow: [{ es: '¿Un ejemplo de algo falso?', en: 'An example of something fake?' }, { es: '¿Te molesta?', en: 'Does it bother you?' }] },
            { q: { es: '¿Venderías algo que amas al mejor postor o a quien lo cuidaría mejor?', en: 'Would you sell something you love to the highest bidder or to whoever would look after it best?' }, help: { es: 'Al que… porque…', en: 'To whoever… because…' }, follow: [{ es: '¿Te pasó con algo?', en: 'Has it happened to you with something?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Las tradiciones deben cambiar o mantenerse?', en: 'Should traditions change or stay the same?' }, help: { es: 'Deben cambiar porque… / Deben mantenerse porque…', en: 'They should change because… / They should stay because…' }, follow: [{ es: '¿Qué tradición de tu país cambió?', en: 'Which tradition in your country has changed?' }, { es: '¿Para bien?', en: 'For the better?' }] },
            { q: { es: '¿Pensar en uno mismo es egoísta?', en: 'Is thinking of yourself selfish?' }, help: { es: 'A veces no, porque… / Sí, cuando…', en: 'Sometimes not, because… / Yes, when…' }, follow: [{ es: '¿Lo haces poco o mucho?', en: 'Do you do it a little or a lot?' }, { es: '¿Quién te lo dice?', en: 'Who tells you?' }] },
          ],
          words: [{ es: 'jubilarse', en: 'to retire' }, { es: 'la restauración', en: 'catering' }, { es: 'la continuidad', en: 'continuity' }, { es: 'el préstamo', en: 'the loan' }, { es: 'el mejor postor', en: 'the highest bidder' }],
        },
      },
    },
    // ------------------------------------------------------------ the castles of Bellinzona
    {
      id: 'castillos',
      name: { es: 'Los castillos de Bellinzona', en: 'The castles of Bellinzona' },
      who: { name: 'Matteo', role: { es: 'guía del castillo', en: 'castle guide' } },
      levels: {
        A0: {
          scene: { es: 'Hay tres castillos en una montaña. Tienen torres altas y muros grises. Matteo es guía. Tiene una chaqueta verde y un libro.', en: 'There are three castles on a mountain. They have tall towers and grey walls. Matteo is a guide. He has a green jacket and a book.' },
          opener: { es: '¡Hola! Soy Matteo. Este castillo tiene ochocientos años. ¿Subimos a la torre?', en: 'Hello! I am Matteo. This castle is eight hundred years old. Shall we climb the tower?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, subo a la torre.', en: 'Yes, I climb the tower.' }, then: { es: 'Hay doscientos escalones. Arriba ves toda la ciudad.', en: 'There are two hundred steps. At the top you see the whole city.' } },
              { say: { es: 'No, camino por el muro.', en: 'No, I walk along the wall.' }, then: { es: 'El muro es muy largo. Hay mucho viento.', en: 'The wall is very long. It is very windy.' } },
              { say: { es: 'Miro el libro de Matteo.', en: 'I look at Matteo’s book.' }, then: { es: 'Hay dibujos de caballeros y caballos. ¡Qué bonito!', en: 'There are drawings of knights and horses. How lovely!' } },
            ],
          },
          twist: { es: 'Matteo dice: «Aquí hay un fantasma». ¿Crees en los fantasmas?', en: 'Matteo says: “There is a ghost here.” Do you believe in ghosts?' },
          questions: [
            { q: { es: '¿Te gustan los castillos?', en: 'Do you like castles?' }, help: { es: 'Sí, mucho. / No.', en: 'Yes, a lot. / No.' }, follow: [{ es: '¿Hay castillos en tu país?', en: 'Are there castles in your country?' }, { es: '¿Visitaste uno?', en: 'Have you visited one?' }] },
            { q: { es: '¿Subes escaleras o usas el ascensor?', en: 'Do you take the stairs or the lift?' }, help: { es: 'Escaleras. / Ascensor.', en: 'Stairs. / Lift.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿En tu casa hay ascensor?', en: 'Is there a lift in your building?' }] },
            { q: { es: '¿Te gusta la historia?', en: 'Do you like history?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Qué época?', en: 'Which period?' }, { es: '¿Lees libros de historia?', en: 'Do you read history books?' }] },
            { q: { es: '¿Crees en los fantasmas?', en: 'Do you believe in ghosts?' }, help: { es: 'Sí. / No. / Un poco.', en: 'Yes. / No. / A little.' }, follow: [{ es: '¿Tienes miedo?', en: 'Are you scared?' }, { es: '¿Sabes una historia?', en: 'Do you know a story?' }] },
          ],
          words: [{ es: 'el castillo', en: 'the castle' }, { es: 'la torre', en: 'the tower' }, { es: 'el muro', en: 'the wall' }, { es: 'el escalón', en: 'the step' }, { es: 'el fantasma', en: 'the ghost' }],
        },
        A1: {
          scene: { es: 'Los tres castillos de Bellinzona son patrimonio de la UNESCO. En la Edad Media, los duques de Milán los construyeron para controlar el paso entre Italia y el norte de Europa. Todos los ejércitos y comerciantes tenían que pasar por aquí. Matteo trabaja de guía los fines de semana; de lunes a viernes es profesor de historia.', en: 'The three castles of Bellinzona are a UNESCO World Heritage site. In the Middle Ages, the dukes of Milan built them to control the route between Italy and northern Europe. Every army and merchant had to pass through here. Matteo works as a guide at weekends; from Monday to Friday he’s a history teacher.' },
          opener: { es: 'Imagina: hace quinientos años no había túneles. Para ir de Milán a Zúrich había que cruzar los Alpes a pie o a caballo, y pasar por este valle. Quien tenía estos castillos cobraba a todos los que pasaban. Era como un peaje. Hoy los camiones pasan por el túnel y nadie mira los castillos. ¿Qué lugar histórico de tu país te gusta?', en: 'Imagine: five hundred years ago there were no tunnels. To go from Milan to Zurich you had to cross the Alps on foot or on horseback, and pass through this valley. Whoever held these castles charged everyone who passed. It was like a toll. Today the lorries go through the tunnel and nobody looks at the castles. Which historic place in your country do you like?' },
          decide: {
            ask: { es: 'Un grupo de escolares está aburrido. ¿Qué hace Matteo?', en: 'A group of schoolchildren is bored. What does Matteo do?' },
            options: [
              { say: { es: 'Organiza un juego de ataque al castillo.', en: 'He organises a castle-attack game.' }, then: { es: 'Los niños se dividen en dos ejércitos. Gritan, corren y aprenden mucho.', en: 'The children split into two armies. They shout, run and learn a lot.' } },
              { say: { es: 'Les cuenta la historia del fantasma.', en: 'He tells them the ghost story.' }, then: { es: 'Los niños escuchan en silencio. Una niña no quiere entrar en la torre.', en: 'The children listen in silence. One girl doesn’t want to go into the tower.' } },
              { say: { es: 'Les deja probarse un casco de soldado.', en: 'He lets them try on a soldier’s helmet.' }, then: { es: 'Pesa cuatro kilos. «¡Los soldados eran muy fuertes!», dice un niño.', en: 'It weighs four kilos. “Soldiers were very strong!” says a boy.' } },
            ],
          },
          twist: { es: 'Una pareja quiere casarse en el castillo el sábado, el día con más turistas. ¿Cierra Matteo el castillo para la boda?', en: 'A couple want to get married at the castle on Saturday, the busiest day for tourists. Does Matteo close the castle for the wedding?' },
          questions: [
            { q: { es: '¿Qué lugar histórico de tu país te gusta?', en: 'Which historic place in your country do you like?' }, help: { es: 'Me gusta… porque…', en: 'I like… because…' }, follow: [{ es: '¿Cuántos años tiene?', en: 'How old is it?' }, { es: '¿Hay muchos turistas?', en: 'Are there lots of tourists?' }] },
            { q: { es: '¿Te gustaba la historia en la escuela?', en: 'Did you like history at school?' }, help: { es: 'Sí, mucho. / No, era aburrida.', en: 'Yes, a lot. / No, it was boring.' }, follow: [{ es: '¿Cómo era tu profesor?', en: 'What was your teacher like?' }, { es: '¿Qué recuerdas?', en: 'What do you remember?' }] },
            { q: { es: '¿Pagas peajes cuando viajas en coche?', en: 'Do you pay tolls when you travel by car?' }, help: { es: 'Sí, muchos. / No, no hay.', en: 'Yes, lots. / No, there aren’t any.' }, follow: [{ es: '¿Son caros?', en: 'Are they expensive?' }, { es: '¿Te parecen justos?', en: 'Do you think they’re fair?' }] },
            { q: { es: '¿Dónde te gustaría casarte o celebrar una fiesta?', en: 'Where would you like to get married or celebrate a party?' }, help: { es: 'En un castillo / en la playa / en casa…', en: 'In a castle / on the beach / at home…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Cuántos invitados?', en: 'How many guests?' }] },
          ],
          words: [{ es: 'la Edad Media', en: 'the Middle Ages' }, { es: 'el duque', en: 'the duke' }, { es: 'el ejército', en: 'the army' }, { es: 'el peaje', en: 'the toll' }, { es: 'el casco', en: 'the helmet' }],
        },
        A2: {
          scene: { es: 'El castillo necesita reparaciones urgentes: una parte del muro se está cayendo. Cuesta tres millones de francos. Una empresa de videojuegos ofrece pagarlo todo si puede usar el castillo en su próximo juego de guerra y organizar allí un festival con miles de jugadores. Matteo debe presentar su opinión al consejo de la ciudad.', en: 'The castle needs urgent repairs: part of the wall is collapsing. It costs three million francs. A video-game company offers to pay for it all if it can use the castle in its next war game and hold a festival there with thousands of players. Matteo has to present his opinion to the city council.' },
          opener: { es: 'Como profesor, siempre digo que la historia no es un juego. Aquí murieron soldados reales. Pero tengo que admitir algo: mis alumnos saben más de castillos por los videojuegos que por mis clases. Si el juego muestra Bellinzona, miles de jóvenes van a querer visitarla. Y sin dinero, el muro se cae. Pero un festival de guerra en un lugar histórico… no sé. ¿Tú qué piensas?', en: 'As a teacher, I always say history isn’t a game. Real soldiers died here. But I have to admit something: my students know more about castles from video games than from my lessons. If the game shows Bellinzona, thousands of young people will want to visit. And without money, the wall falls down. But a war festival in a historic place… I don’t know. What do you think?' },
          decide: {
            ask: { es: '¿Qué recomienda Matteo?', en: 'What does Matteo recommend?' },
            options: [
              { say: { es: 'Aceptar el dinero, pero sin el festival.', en: 'Accept the money, but without the festival.' }, then: { es: 'La empresa acepta. El juego es un éxito y las visitas de jóvenes se duplican.', en: 'The company agrees. The game is a hit and young visitors double.' } },
              { say: { es: 'Aceptar todo, con una parte educativa en el festival.', en: 'Accept everything, with an educational part at the festival.' }, then: { es: 'Matteo da charlas de historia en el festival. Van más jóvenes que a todas sus clases del año.', en: 'Matteo gives history talks at the festival. More young people come than to all his classes that year.' } },
              { say: { es: 'Rechazar y buscar dinero público.', en: 'Turn it down and look for public money.' }, then: { es: 'El gobierno paga, pero tarda tres años. Mientras tanto, una parte del castillo está cerrada.', en: 'The government pays, but it takes three years. Meanwhile, part of the castle is closed.' } },
            ],
          },
          twist: { es: 'En el videojuego, el castillo es más grande, tiene dragones y la historia es inventada. ¿Importa que no sea fiel a la realidad?', en: 'In the video game, the castle is bigger, has dragons and the story is made up. Does it matter that it isn’t true to reality?' },
          questions: [
            { q: { es: '¿Aprendiste algo de historia con un videojuego, una serie o una película?', en: 'Have you learned some history from a video game, series or film?' }, help: { es: 'Sí, gracias a… sé mucho sobre… / No.', en: 'Yes, thanks to… I know a lot about… / No.' }, follow: [{ es: '¿Era fiel a la historia?', en: 'Was it true to history?' }, { es: '¿Te dio ganas de saber más?', en: 'Did it make you want to know more?' }] },
            { q: { es: '¿Las empresas privadas deben pagar el patrimonio?', en: 'Should private companies pay for heritage?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Qué pedirían a cambio?', en: 'What would they ask in return?' }, { es: '¿Hay ejemplos en tu país?', en: 'Are there examples in your country?' }] },
            { q: { es: '¿Juegas a videojuegos?', en: 'Do you play video games?' }, help: { es: 'Sí, juego a… / No.', en: 'Yes, I play… / No.' }, follow: [{ es: '¿Cuántas horas?', en: 'How many hours?' }, { es: '¿Aprendes algo?', en: 'Do you learn anything?' }] },
            { q: { es: '¿Es más importante que la gente visite un lugar o que el lugar esté protegido?', en: 'Is it more important for people to visit a place or for the place to be protected?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'la reparación', en: 'the repair' }, { es: 'urgente', en: 'urgent' }, { es: 'admitir', en: 'to admit' }, { es: 'la charla', en: 'the talk' }, { es: 'el patrimonio', en: 'heritage' }],
        },
        B1: {
          scene: { es: 'Durante siglos, el Tesino fue un territorio dominado por los cantones del norte, que hablaban alemán: no tenía voz propia. Hoy es un cantón suizo con todos los derechos, pero muchos tesinenses sienten que Berna no los escucha y que el italiano es la lengua olvidada de Suiza. Matteo prepara una exposición en el castillo sobre esta historia, y el gobierno cantonal le pide que la haga «menos política».', en: 'For centuries, Ticino was a territory ruled by the German-speaking cantons of the north: it had no voice of its own. Today it’s a Swiss canton with full rights, but many people in Ticino feel that Bern doesn’t listen to them and that Italian is Switzerland’s forgotten language. Matteo is preparing an exhibition at the castle about this history, and the cantonal government asks him to make it “less political”.' },
          opener: { es: 'No quiero hacer una exposición contra nadie. Pero la historia es la historia: durante trescientos años, otros decidieron por nosotros. Eso explica muchas cosas de hoy: la desconfianza, el humor, el orgullo. Si la hago «menos política», no explico nada; si la hago muy dura, algunos dirán que divido el país. Los turistas alemanes que vienen al castillo quizás no conocen esta parte. ¿Cómo se cuenta una historia incómoda sin herir ni callar?', en: 'I don’t want to make an exhibition against anyone. But history is history: for three hundred years, others decided for us. That explains a lot about today: the mistrust, the humour, the pride. If I make it “less political”, I explain nothing; if I make it very harsh, some will say I’m dividing the country. The German-speaking tourists who come to the castle may not know this part. How do you tell an uncomfortable story without hurting people or staying silent?' },
          decide: {
            ask: { es: '¿Cómo hace Matteo la exposición?', en: 'How does Matteo do the exhibition?' },
            options: [
              { say: { es: 'Con testimonios de personas de las dos partes, sin conclusión.', en: 'With testimonies from both sides, without a conclusion.' }, then: { es: 'Los visitantes discuten en la salida. Algunos dicen que es valiente; otros, que no se moja.', en: 'Visitors argue at the exit. Some say it’s brave; others that it sits on the fence.' } },
              { say: { es: 'Contando la historia tal cual, con documentos originales.', en: 'Telling the history as it was, with original documents.' }, then: { es: 'Un periódico de Zúrich critica la exposición. Pero las visitas se triplican.', en: 'A Zurich newspaper criticises the exhibition. But visits triple.' } },
              { say: { es: 'Invitando a historiadores de Zúrich a prepararla con él.', en: 'Inviting historians from Zurich to prepare it with him.' }, then: { es: 'Tardan más y discuten mucho, pero la exposición viaja después a Berna y a Zúrich.', en: 'It takes longer and they argue a lot, but the exhibition later travels to Bern and Zurich.' } },
            ],
          },
          twist: { es: 'Un alumno de Matteo le pregunta: «Profe, si la historia la escriben los que ganan, ¿cómo sabemos que su versión es verdad?». ¿Qué le respondería?', en: 'One of Matteo’s students asks him: “Sir, if history is written by the winners, how do we know your version is true?” What would he answer?' },
          questions: [
            { q: { es: '¿Hay una parte incómoda de la historia de tu país?', en: 'Is there an uncomfortable part of your country’s history?' }, help: { es: 'Sí, por ejemplo… / Muchas…', en: 'Yes, for example… / Many…' }, follow: [{ es: '¿Se enseña en las escuelas?', en: 'Is it taught in schools?' }, { es: '¿Cómo?', en: 'How?' }] },
            { q: { es: '¿Los museos deben ser neutrales?', en: 'Should museums be neutral?' }, help: { es: 'Sí, porque… / No, porque ser neutral también es…', en: 'Yes, because… / No, because being neutral is also…' }, follow: [{ es: '¿Viste una exposición polémica?', en: 'Have you seen a controversial exhibition?' }, { es: '¿Qué pensaste?', en: 'What did you think?' }] },
            { q: { es: '¿Te sentiste alguna vez parte de una minoría que nadie escucha?', en: 'Have you ever felt part of a minority nobody listens to?' }, help: { es: 'Sí, cuando… / No, pero…', en: 'Yes, when… / No, but…' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cambió algo?', en: 'Did anything change?' }] },
            { q: { es: '¿Cómo sabes si una versión de la historia es verdadera?', en: 'How do you know if a version of history is true?' }, help: { es: 'Comparo… / Busco…', en: 'I compare… / I look for…' }, follow: [{ es: '¿Cambiaste de opinión sobre algún hecho histórico?', en: 'Have you changed your mind about a historical event?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'dominado', en: 'ruled / dominated' }, { es: 'la desconfianza', en: 'mistrust' }, { es: 'el orgullo', en: 'pride' }, { es: 'incómodo', en: 'uncomfortable' }, { es: 'el testimonio', en: 'the testimony' }],
        },
      },
    },
    // ------------------------------------------------------------ the Verzasca river
    {
      id: 'verzasca',
      name: { es: 'El río Verzasca', en: 'The Verzasca river' },
      who: { name: 'Sara', role: { es: 'guía del valle', en: 'valley guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un río muy verde y transparente. Hay rocas blancas y un puente de piedra viejo. Sara es guía. Tiene una camiseta azul y unas sandalias.', en: 'It is a very green, clear river. There are white rocks and an old stone bridge. Sara is a guide. She has a blue T-shirt and sandals.' },
          opener: { es: '¡Hola! Soy Sara. ¡Mira el agua! Es verde como una esmeralda. ¿Te gusta?', en: 'Hello! I am Sara. Look at the water! It is green like an emerald. Do you like it?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Toco el agua.', en: 'I touch the water.' }, then: { es: '¡Está muy fría! Sara dice: «Viene de la montaña».', en: 'It is very cold! Sara says: “It comes from the mountain.”' } },
              { say: { es: 'Cruzo el puente.', en: 'I cross the bridge.' }, then: { es: 'El puente tiene dos arcos. Es muy antiguo y bonito.', en: 'The bridge has two arches. It is very old and beautiful.' } },
              { say: { es: 'Me siento en una roca.', en: 'I sit on a rock.' }, then: { es: 'La roca está caliente por el sol. ¡Qué bien!', en: 'The rock is warm from the sun. How nice!' } },
            ],
          },
          twist: { es: 'Un chico quiere saltar al río desde el puente. Sara dice: «¡No!». ¿Por qué?', en: 'A boy wants to jump into the river from the bridge. Sara says: “No!” Why?' },
          questions: [
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu casa?', en: 'And your house?' }] },
            { q: { es: '¿Te gusta el agua fría?', en: 'Do you like cold water?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Nadas en ríos?', en: 'Do you swim in rivers?' }, { es: '¿Y en el mar?', en: 'And in the sea?' }] },
            { q: { es: '¿Usas sandalias?', en: 'Do you wear sandals?' }, help: { es: 'Sí, en verano. / No.', en: 'Yes, in summer. / No.' }, follow: [{ es: '¿Qué zapatos te gustan?', en: 'What shoes do you like?' }, { es: '¿Cuántos tienes?', en: 'How many do you have?' }] },
            { q: { es: '¿Te gustan los puentes?', en: 'Do you like bridges?' }, help: { es: 'Sí. / No, me dan miedo.', en: 'Yes. / No, they scare me.' }, follow: [{ es: '¿Hay un puente famoso en tu ciudad?', en: 'Is there a famous bridge in your city?' }, { es: '¿Cómo se llama?', en: 'What is it called?' }] },
          ],
          words: [{ es: 'transparente', en: 'clear' }, { es: 'la roca', en: 'the rock' }, { es: 'el puente', en: 'the bridge' }, { es: 'la esmeralda', en: 'the emerald' }, { es: 'cruzar', en: 'to cross' }],
        },
        A1: {
          scene: { es: 'El valle de Verzasca es estrecho y salvaje. El río tiene un color verde increíble y el agua está a doce grados incluso en agosto. Hay casas de piedra con techos de piedra. Al principio del valle hay una presa enorme: allí se rodó el salto de una película de James Bond. Sara organiza paseos por el valle desde hace seis años.', en: 'The Verzasca valley is narrow and wild. The river is an incredible green colour and the water is twelve degrees even in August. There are stone houses with stone roofs. At the start of the valley there’s a huge dam: a James Bond film jump was shot there. Sara has been running walks in the valley for six years.' },
          opener: { es: 'Este río es precioso, pero también peligroso. Parece tranquilo, pero tiene corrientes fuertes debajo de la superficie. Cuando llueve en la montaña, el agua sube en minutos. Cada verano hay accidentes, casi siempre de turistas que no conocen el río. Yo siempre digo: mirar, sí; nadar, solo donde yo digo. ¿Haces caso a los guías cuando viajas?', en: 'This river is beautiful, but also dangerous. It looks calm, but it has strong currents under the surface. When it rains in the mountains, the water rises in minutes. Every summer there are accidents, almost always tourists who don’t know the river. I always say: look, yes; swim, only where I say. Do you listen to guides when you travel?' },
          decide: {
            ask: { es: 'Empieza a llover en la montaña. El grupo está en el río. ¿Qué hace Sara?', en: 'It starts raining in the mountains. The group is at the river. What does Sara do?' },
            options: [
              { say: { es: 'Saca a todos del agua inmediatamente.', en: 'She gets everyone out of the water immediately.' }, then: { es: 'Diez minutos después, el río sube un metro. Todos miran a Sara con respeto.', en: 'Ten minutes later, the river rises a metre. Everyone looks at Sara with respect.' } },
              { say: { es: 'Lleva al grupo a una casa de piedra.', en: 'She takes the group to a stone house.' }, then: { es: 'Esperan la lluvia con café y castañas. Es la mejor parte del día.', en: 'They wait out the rain with coffee and chestnuts. It’s the best part of the day.' } },
              { say: { es: 'Llama a la central de rescate para avisar.', en: 'She calls the rescue centre to warn them.' }, then: { es: 'La central avisa a otros grupos del valle. Nadie tiene problemas.', en: 'The centre warns other groups in the valley. Nobody has any problems.' } },
            ],
          },
          twist: { es: 'Un turista quiere hacer el salto de James Bond desde la presa: doscientos veinte metros. Cuesta doscientos francos. ¿Le recomiendas hacerlo?', en: 'A tourist wants to do the James Bond jump from the dam: two hundred and twenty metres. It costs two hundred francs. Do you recommend it?' },
          questions: [
            { q: { es: '¿Haces caso a los guías?', en: 'Do you listen to guides?' }, help: { es: 'Sí, siempre. / A veces no.', en: 'Yes, always. / Sometimes not.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tuviste un problema alguna vez?', en: 'Have you ever had a problem?' }] },
            { q: { es: '¿Harías un salto desde doscientos metros?', en: 'Would you do a jump from two hundred metres?' }, help: { es: '¡Sí! / ¡Nunca!', en: 'Yes! / Never!' }, follow: [{ es: '¿Qué es lo más loco que hiciste?', en: 'What is the craziest thing you’ve done?' }, { es: '¿Tuviste miedo?', en: 'Were you scared?' }] },
            { q: { es: '¿Viste una película grabada en un lugar que conoces?', en: 'Have you seen a film shot in a place you know?' }, help: { es: 'Sí, … se grabó en… / No.', en: 'Yes, … was shot in… / No.' }, follow: [{ es: '¿Lo reconociste?', en: 'Did you recognise it?' }, { es: '¿Fuiste por la película?', en: 'Did you go because of the film?' }] },
            { q: { es: '¿Prefieres los lugares salvajes o los lugares con gente?', en: 'Do you prefer wild places or places with people?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cuál es tu lugar favorito?', en: 'What is your favourite place?' }, { es: '¿Vas solo o acompañado?', en: 'Do you go alone or with someone?' }] },
          ],
          words: [{ es: 'estrecho', en: 'narrow' }, { es: 'salvaje', en: 'wild' }, { es: 'la presa', en: 'the dam' }, { es: 'rodar', en: 'to shoot (a film)' }, { es: 'el rescate', en: 'the rescue' }],
        },
        A2: {
          scene: { es: 'El verano pasado, un día de calor, llegaron al valle ocho mil personas en coche. La carretera, muy estrecha, se bloqueó durante horas. Una ambulancia no pudo pasar para llegar a un accidente en el río. Ahora los vecinos del valle exigen limitar los coches. El cantón propone cerrar la carretera a los turistas los fines de semana de verano y poner autobuses.', en: 'Last summer, on a hot day, eight thousand people drove into the valley. The very narrow road was blocked for hours. An ambulance couldn’t get through to an accident at the river. Now the valley residents are demanding a limit on cars. The canton proposes closing the road to tourists on summer weekends and running buses.' },
          opener: { es: 'En el valle viven ochocientas personas. Los fines de semana de verano somos diez veces más. Los turistas aparcan en los prados, dejan basura en las rocas, ponen música alta. Algunos vecinos ya no salen de casa los domingos. Pero los restaurantes y yo vivimos del turismo. Si cierran la carretera, ¿vendrá la misma gente en autobús? ¿Qué propones tú?', en: 'Eight hundred people live in the valley. On summer weekends there are ten times as many of us. Tourists park in the meadows, leave rubbish on the rocks, play loud music. Some locals don’t leave their houses on Sundays any more. But the restaurants and I live off tourism. If they close the road, will the same people come by bus? What do you suggest?' },
          decide: {
            ask: { es: '¿Qué apoya Sara?', en: 'What does Sara support?' },
            options: [
              { say: { es: 'Cerrar la carretera y poner autobuses gratis.', en: 'Close the road and run free buses.' }, then: { es: 'Vienen menos turistas, pero más tranquilos. Los restaurantes venden un poco menos.', en: 'Fewer tourists come, but calmer ones. The restaurants sell a little less.' } },
              { say: { es: 'Cobrar una entrada al valle los fines de semana.', en: 'Charge an entry fee to the valley at weekends.' }, then: { es: 'El dinero paga la limpieza y más socorristas, pero algunos dicen que la naturaleza no se vende.', en: 'The money pays for cleaning and more lifeguards, but some say nature isn’t for sale.' } },
              { say: { es: 'Limitar el aparcamiento con reservas por internet.', en: 'Limit parking with online bookings.' }, then: { es: 'Funciona bien con los jóvenes, pero los mayores sin internet no consiguen sitio.', en: 'It works well with young people, but older people without internet can’t get a place.' } },
            ],
          },
          twist: { es: 'Una influencer con dos millones de seguidores publica una foto del río con la frase «el secreto mejor guardado de Suiza». Al día siguiente llegan mil personas más. ¿Tienen responsabilidad los influencers?', en: 'An influencer with two million followers posts a photo of the river with the line “Switzerland’s best-kept secret”. The next day a thousand more people arrive. Do influencers have a responsibility?' },
          questions: [
            { q: { es: '¿Hay un lugar de naturaleza que se llena de gente en tu país?', en: 'Is there a natural place that gets packed with people in your country?' }, help: { es: 'Sí, … en verano / en Semana Santa…', en: 'Yes, … in summer / at Easter…' }, follow: [{ es: '¿Vas?', en: 'Do you go?' }, { es: '¿Qué harías para cambiarlo?', en: 'What would you do to change it?' }] },
            { q: { es: '¿Usarías el autobús en vez del coche para ir a la naturaleza?', en: 'Would you take the bus instead of the car to go to the countryside?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Cómo fue?', en: 'How was it?' }] },
            { q: { es: '¿Publicas fotos de lugares secretos?', en: 'Do you post photos of secret places?' }, help: { es: 'Sí, a veces. / No, me los guardo.', en: 'Yes, sometimes. / No, I keep them to myself.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes un lugar secreto?', en: 'Do you have a secret place?' }] },
            { q: { es: '¿Es justo cobrar por entrar en la naturaleza?', en: 'Is it fair to charge for entering nature?' }, help: { es: 'Sí, si el dinero… / No, porque…', en: 'Yes, if the money… / No, because…' }, follow: [{ es: '¿Pagaste alguna vez?', en: 'Have you ever paid?' }, { es: '¿Cuánto?', en: 'How much?' }] },
          ],
          words: [{ es: 'bloquearse', en: 'to get blocked' }, { es: 'exigir', en: 'to demand' }, { es: 'aparcar', en: 'to park' }, { es: 'el prado', en: 'the meadow' }, { es: 'el seguidor', en: 'the follower' }],
        },
        B1: {
          scene: { es: 'La presa de Verzasca produce electricidad limpia para miles de casas. Pero desde que se construyó, en los años sesenta, el río lleva mucha menos agua y algunos peces casi desaparecieron. Ahora la empresa eléctrica quiere hacer la presa más alta para producir más energía, como parte del plan de Suiza para dejar la energía nuclear. Sara se une a una asociación que quiere proteger el río.', en: 'The Verzasca dam produces clean electricity for thousands of homes. But since it was built, in the sixties, the river carries much less water and some fish have almost disappeared. Now the power company wants to make the dam higher to produce more energy, as part of Switzerland’s plan to phase out nuclear power. Sara joins an association that wants to protect the river.' },
          opener: { es: 'Es un dilema terrible. Yo quiero energía limpia: no quiero centrales nucleares ni carbón. Pero la energía «limpia» también tiene un precio, y aquí lo paga el río. Los ingenieros dicen que es un pequeño sacrificio por el clima. Los biólogos dicen que es el último río salvaje de la zona. Y los dos tienen razón. Cuando dos causas buenas se enfrentan, ¿cómo se decide cuál es más importante?', en: 'It’s a terrible dilemma. I want clean energy: I don’t want nuclear plants or coal. But “clean” energy also has a price, and here the river pays it. The engineers say it’s a small sacrifice for the climate. The biologists say it’s the last wild river in the area. And they’re both right. When two good causes clash, how do you decide which matters more?' },
          decide: {
            ask: { es: '¿Qué defiende la asociación de Sara?', en: 'What does Sara’s association argue for?' },
            options: [
              { say: { es: 'Aceptar la presa más alta, pero con más agua para el río.', en: 'Accept the higher dam, but with more water for the river.' }, then: { es: 'Se produce menos energía de lo previsto, pero el río recupera vida. Nadie está del todo contento.', en: 'Less energy is produced than planned, but the river comes back to life. Nobody is entirely happy.' } },
              { say: { es: 'Rechazar la presa y poner paneles solares en los tejados del valle.', en: 'Reject the dam and put solar panels on the valley’s roofs.' }, then: { es: 'Los vecinos aceptan, aunque algunos dicen que los paneles estropean las casas de piedra.', en: 'The locals agree, although some say the panels ruin the stone houses.' } },
              { say: { es: 'Pedir un estudio independiente de cinco años.', en: 'Ask for a five-year independent study.' }, then: { es: 'La empresa dice que el clima no puede esperar cinco años. El debate llega al parlamento.', en: 'The company says the climate can’t wait five years. The debate reaches parliament.' } },
            ],
          },
          twist: { es: 'Un ingeniero le dice a Sara: «Usted defiende el río, pero vive de traer turistas en coche. ¿No es un poco contradictorio?». ¿Qué le respondería?', en: 'An engineer tells Sara: “You defend the river, but you make a living bringing tourists by car. Isn’t that a bit contradictory?” What would she answer?' },
          questions: [
            { q: { es: '¿Qué tipo de energía prefieres para tu país?', en: 'What kind of energy do you prefer for your country?' }, help: { es: 'Prefiero… porque… aunque…', en: 'I prefer… because… although…' }, follow: [{ es: '¿Cuál se usa más ahora?', en: 'Which is used most now?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Viviste un conflicto entre dos cosas buenas?', en: 'Have you experienced a conflict between two good things?' }, help: { es: 'Sí, cuando tuve que elegir entre… y…', en: 'Yes, when I had to choose between… and…' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Se puede defender una causa aunque uno no sea perfecto?', en: 'Can you defend a cause even if you aren’t perfect?' }, help: { es: 'Sí, porque nadie… / No, porque…', en: 'Yes, because nobody… / No, because…' }, follow: [{ es: '¿Te criticaron por eso?', en: 'Have you been criticised for that?' }, { es: '¿Qué respondiste?', en: 'What did you reply?' }] },
            { q: { es: '¿Quién debería decidir sobre un río: los que viven allí o todo el país?', en: 'Who should decide about a river: those who live there or the whole country?' }, help: { es: 'Los que viven allí porque… / Todo el país porque…', en: 'Those who live there because… / The whole country because…' }, follow: [{ es: '¿Y si no están de acuerdo?', en: 'And if they don’t agree?' }, { es: '¿Un ejemplo de tu país?', en: 'An example from your country?' }] },
          ],
          words: [{ es: 'la central', en: 'the power plant' }, { es: 'el sacrificio', en: 'the sacrifice' }, { es: 'enfrentarse', en: 'to clash' }, { es: 'el panel solar', en: 'the solar panel' }, { es: 'contradictorio', en: 'contradictory' }],
        },
      },
    },
  ],
};
