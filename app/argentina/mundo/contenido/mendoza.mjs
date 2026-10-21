// Mendoza · wine, vineyards, the central market, the Aconcagua and the river.
// Five places, four levels each (A0, A1, A2, B1). Every level is written on its
// own: same place and people, different situations, decisions and questions.
export default {
  id: 'mendoza',
  spots: [
    // ------------------------------------------------------------ the winery
    {
      id: 'bodega',
      name: { es: 'La bodega', en: 'The winery' },
      who: { name: 'Valentina', role: { es: 'enóloga', en: 'winemaker' } },
      levels: {
        A0: {
          scene: { es: 'Es una bodega. Hay barriles grandes de madera. Hace frío adentro. Valentina hace vino.', en: 'It is a winery. There are big wooden barrels. It is cold inside. Valentina makes wine.' },
          opener: { es: 'Hola, bienvenido. Soy Valentina. Aquí hacemos vino.', en: 'Hello, welcome. I am Valentina. We make wine here.' },
          decide: {
            ask: { es: 'Valentina tiene vino tinto, vino blanco y jugo de uva. ¿Qué pruebas?', en: 'Valentina has red wine, white wine and grape juice. What do you try?' },
            options: [
              { say: { es: 'Vino tinto.', en: 'Red wine.' }, then: { es: 'Valentina dice: «Es malbec. Es el vino de Mendoza».', en: 'Valentina says: “It is malbec. It is the wine of Mendoza.”' } },
              { say: { es: 'Vino blanco.', en: 'White wine.' }, then: { es: 'Valentina dice: «Es frío y fresco. ¿Te gusta?»', en: 'Valentina says: “It is cold and fresh. Do you like it?”' } },
              { say: { es: 'Jugo de uva. No tomo alcohol.', en: 'Grape juice. I don’t drink alcohol.' }, then: { es: 'Valentina dice: «¡Muy bien! Es de las mismas uvas».', en: 'Valentina says: “Very good! It is from the same grapes.”' } },
            ],
          },
          twist: { es: 'Un barril hace un ruido: ¡plop! Valentina ríe. «El vino está vivo». ¿Qué dices?', en: 'A barrel makes a noise: plop! Valentina laughs. “The wine is alive.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las uvas?', en: 'Do you like grapes?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Verdes o negras?', en: 'Green or black?' }, { es: '¿Qué fruta te gusta más?', en: 'What fruit do you like most?' }] },
            { q: { es: '¿Qué bebes con la cena?', en: 'What do you drink with dinner?' }, help: { es: 'Bebo agua / jugo / vino…', en: 'I drink water / juice / wine…' }, follow: [{ es: '¿Y en una fiesta?', en: 'And at a party?' }, { es: '¿Y en el desayuno?', en: 'And at breakfast?' }] },
            { q: { es: '¿Te gusta el frío?', en: 'Do you like the cold?' }, help: { es: 'Sí, me gusta. / No, prefiero el calor.', en: 'Yes, I like it. / No, I prefer the heat.' }, follow: [{ es: '¿Hace frío en tu ciudad?', en: 'Is it cold in your city?' }, { es: '¿En qué mes?', en: 'In which month?' }] },
            { q: { es: '¿Visitas fábricas o talleres?', en: 'Do you visit factories or workshops?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'la bodega', en: 'the winery' }, { es: 'el vino', en: 'wine' }, { es: 'la uva', en: 'the grape' }, { es: 'el barril', en: 'the barrel' }, { es: 'tinto', en: 'red (wine)' }],
        },
        A1: {
          scene: { es: 'Mendoza produce casi todo el vino de Argentina. La bodega de Valentina está al pie de la cordillera de los Andes. Desde la ventana se ven las montañas con nieve, aunque abajo hace calor.', en: 'Mendoza produces almost all of Argentina’s wine. Valentina’s winery is at the foot of the Andes. From the window you can see the snowy mountains, even though it’s hot down here.' },
          opener: { es: 'Aquí casi no llueve. El agua de las viñas viene de la nieve de la montaña, por canales que construyeron los pueblos originarios hace siglos. Sin esa agua, Mendoza sería un desierto. ¿Quieres ver los canales?', en: 'It hardly ever rains here. The water for the vineyards comes from the mountain snow, through channels built by the indigenous peoples centuries ago. Without that water, Mendoza would be a desert. Do you want to see the channels?' },
          decide: {
            ask: { es: 'Valentina te ofrece tres actividades. ¿Cuál eliges?', en: 'Valentina offers you three activities. Which do you choose?' },
            options: [
              { say: { es: 'Recorrer la bodega y ver cómo se hace el vino.', en: 'Tour the winery and see how wine is made.' }, then: { es: 'Bajas a una cava subterránea. Hay botellas de hace cincuenta años cubiertas de polvo.', en: 'You go down to an underground cellar. There are fifty-year-old bottles covered in dust.' } },
              { say: { es: 'Hacer una cata de tres vinos.', en: 'Do a tasting of three wines.' }, then: { es: 'Valentina te enseña a oler el vino: «Este huele a ciruela; este, a pimienta».', en: 'Valentina teaches you to smell wine: “This one smells of plum; this one, of pepper.”' } },
              { say: { es: 'Andar en bicicleta entre las viñas.', en: 'Cycle among the vines.' }, then: { es: 'Pedaleas dos horas entre viñas y olivos. Paras a comer en otra bodega.', en: 'You pedal for two hours among vines and olive trees. You stop to eat at another winery.' } },
            ],
          },
          twist: { es: 'Un turista pide hielo para su vino tinto. Valentina pone cara de horror, pero se lo trae.', en: 'A tourist asks for ice in his red wine. Valentina looks horrified, but brings it.' },
          questions: [
            { q: { es: '¿Qué se produce en tu región?', en: 'What is produced in your region?' }, help: { es: 'En mi región se produce…', en: 'In my region they produce…' }, follow: [{ es: '¿Lo probaste?', en: 'Have you tried it?' }, { es: '¿Es famoso?', en: 'Is it famous?' }] },
            { q: { es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }, help: { es: 'Sí, llueve mucho. / No, casi nunca.', en: 'Yes, it rains a lot. / No, almost never.' }, follow: [{ es: '¿En qué estación?', en: 'In what season?' }, { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }] },
            { q: { es: '¿Andas en bicicleta?', en: 'Do you ride a bike?' }, help: { es: 'Sí, todos los días. / A veces. / No.', en: 'Yes, every day. / Sometimes. / No.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Es seguro en tu ciudad?', en: 'Is it safe in your city?' }] },
            { q: { es: '¿Hay algo que la gente come o bebe «mal» según tú?', en: 'Is there something people eat or drink “wrong” in your opinion?' }, help: { es: 'Sí, la gente pone… en… / No, cada uno…', en: 'Yes, people put… in… / No, each to their own…' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Y tú haces algo raro?', en: 'And do you do anything strange?' }] },
          ],
          words: [{ es: 'la cordillera', en: 'the mountain range' }, { es: 'la viña', en: 'the vineyard' }, { es: 'el canal', en: 'the channel' }, { es: 'la cava', en: 'the cellar' }, { es: 'oler a', en: 'to smell of' }],
        },
        A2: {
          scene: { es: 'Valentina es hija y nieta de viñateros. Su abuelo llegó de Italia sin nada y plantó la primera viña con sus manos. Hoy Valentina es la primera mujer enóloga de la familia, y algunos trabajadores mayores todavía no la toman en serio.', en: 'Valentina is the daughter and granddaughter of vine growers. Her grandfather came from Italy with nothing and planted the first vineyard with his own hands. Today Valentina is the family’s first female winemaker, and some older workers still don’t take her seriously.' },
          opener: { es: 'Cuando empecé, Don Ricardo, el encargado, le preguntaba todo a mi hermano, aunque mi hermano es abogado y no sabe nada de vino. Tardé tres cosechas en que me mirara a mí. ¿Te pasó alguna vez que no te tomaran en serio?', en: 'When I started, Don Ricardo, the foreman, asked my brother everything, even though my brother is a lawyer and knows nothing about wine. It took me three harvests to get him to look at me. Has it ever happened to you that people didn’t take you seriously?' },
          decide: {
            ask: { es: 'Valentina quiere hacer un vino nuevo, más ligero, para gente joven. Su padre no está seguro. ¿Qué le aconsejas?', en: 'Valentina wants to make a new, lighter wine for young people. Her father isn’t sure. What do you advise?' },
            options: [
              { say: { es: 'Hacer pocas botellas como prueba.', en: 'Make a few bottles as a test.' }, then: { es: 'Hace quinientas botellas. Se agotan en un mes, la mayoría en la ciudad.', en: 'She makes five hundred bottles. They sell out in a month, mostly in the city.' } },
              { say: { es: 'Convencer primero a Don Ricardo.', en: 'Convince Don Ricardo first.' }, then: { es: 'Don Ricardo prueba el vino, lo piensa mucho y dice: «Raro. Pero rico». Es su mejor elogio.', en: 'Don Ricardo tries the wine, thinks hard and says: “Strange. But tasty.” It’s his highest praise.' } },
              { say: { es: 'Respetar la tradición familiar y no cambiar.', en: 'Respect the family tradition and not change.' }, then: { es: 'Valentina obedece, pero guarda la idea en un cuaderno.', en: 'Valentina obeys, but keeps the idea in a notebook.' } },
            ],
          },
          twist: { es: 'Una granizada destruye en diez minutos la mitad de las uvas de la temporada.', en: 'A hailstorm destroys half the season’s grapes in ten minutes.' },
          questions: [
            { q: { es: '¿Te pasó que no te tomaran en serio por tu edad o por ser mujer u hombre?', en: 'Have people not taken you seriously because of your age or gender?' }, help: { es: 'Sí, una vez… / No, pero vi que…', en: 'Yes, once… / No, but I saw that…' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cambió algo?', en: 'Did anything change?' }] },
            { q: { es: '¿De dónde llegaron tus abuelos o bisabuelos?', en: 'Where did your grandparents or great-grandparents come from?' }, help: { es: 'Llegaron de… / Siempre vivieron en…', en: 'They came from… / They always lived in…' }, follow: [{ es: '¿Por qué se fueron?', en: 'Why did they leave?' }, { es: '¿Qué trajeron?', en: 'What did they bring?' }] },
            { q: { es: '¿Cambiarías algo de una tradición familiar?', en: 'Would you change something in a family tradition?' }, help: { es: 'Sí, cambiaría… / No, me gusta como es.', en: 'Yes, I would change… / No, I like it as it is.' }, follow: [{ es: '¿Qué diría tu familia?', en: 'What would your family say?' }, { es: '¿Lo intentaste?', en: 'Have you tried?' }] },
            { q: { es: '¿Qué harías si perdieras la mitad de tu trabajo de un año?', en: 'What would you do if you lost half a year’s work?' }, help: { es: 'Me pondría… / Intentaría…', en: 'I would get… / I would try…' }, follow: [{ es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }, { es: '¿Quién te ayudaría?', en: 'Who would help you?' }] },
          ],
          words: [{ es: 'el viñatero', en: 'the vine grower' }, { es: 'el encargado', en: 'the foreman' }, { es: 'la cosecha', en: 'the harvest' }, { es: 'agotarse', en: 'to sell out' }, { es: 'la granizada', en: 'the hailstorm' }],
        },
        B1: {
          scene: { es: 'Con el cambio climático, cada año cae menos nieve en los Andes y llega menos agua a Mendoza. Una empresa extranjera quiere comprar la bodega de Valentina para producir vino a gran escala, con riego por goteo y tecnología. Su padre está cansado y quiere vender.', en: 'With climate change, less snow falls on the Andes every year and less water reaches Mendoza. A foreign company wants to buy Valentina’s winery to produce wine on a large scale, with drip irrigation and technology. Her father is tired and wants to sell.' },
          opener: { es: 'Ellos tienen la tecnología para ahorrar agua que nosotros no podemos pagar. Pero si vendemos, el vino de mi abuelo pasa a ser una marca más en un supermercado de Londres. Y los trabajadores que están aquí hace treinta años, ¿qué? Ojalá supiera qué es lo correcto.', en: 'They have the water-saving technology we can’t afford. But if we sell, my grandfather’s wine becomes just another brand in a London supermarket. And what about the workers who’ve been here for thirty years? I wish I knew what the right thing was.' },
          decide: {
            ask: { es: 'La familia vota el domingo. ¿Qué le recomiendas a Valentina?', en: 'The family votes on Sunday. What do you recommend to Valentina?' },
            options: [
              { say: { es: 'Vender, pero con condiciones: mantener a los trabajadores y el nombre.', en: 'Sell, but with conditions: keep the workers and the name.' }, then: { es: 'La empresa acepta a los trabajadores, pero no el nombre. Valentina tiene que decidir si eso es suficiente.', en: 'The company accepts the workers, but not the name. Valentina has to decide whether that’s enough.' } },
              { say: { es: 'No vender y buscar socios locales para modernizarse.', en: 'Don’t sell and find local partners to modernise.' }, then: { es: 'Tres bodegas vecinas se unen para comprar juntas un sistema de riego. Es lento, pero es suyo.', en: 'Three neighbouring wineries join to buy an irrigation system together. It’s slow, but it’s theirs.' } },
              { say: { es: 'Que Valentina compre la parte de su padre con un préstamo.', en: 'Valentina should buy her father’s share with a loan.' }, then: { es: 'El banco le da el préstamo con intereses altísimos. Su padre llora cuando ella firma.', en: 'The bank gives her the loan at very high interest. Her father cries when she signs.' } },
            ],
          },
          twist: { es: 'Don Ricardo, el encargado que nunca la tomaba en serio, ofrece todos sus ahorros para que la bodega no se venda.', en: 'Don Ricardo, the foreman who never took her seriously, offers all his savings so the winery won’t be sold.' },
          questions: [
            { q: { es: '¿Cómo afecta el cambio climático a tu región?', en: 'How does climate change affect your region?' }, help: { es: 'En mi región se nota que… / Cada año…', en: 'In my region you can tell that… / Every year…' }, follow: [{ es: '¿Qué se está haciendo?', en: 'What is being done?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Es mejor que un negocio familiar crezca con capital extranjero o que se quede pequeño?', en: 'Is it better for a family business to grow with foreign capital or stay small?' }, help: { es: 'Depende de… / Prefiero que… porque…', en: 'It depends on… / I prefer… because…' }, follow: [{ es: '¿Qué se pierde?', en: 'What is lost?' }, { es: '¿Qué se gana?', en: 'What is gained?' }] },
            { q: { es: '¿Qué harías con los trabajadores si tuvieras que vender tu empresa?', en: 'What would you do about the workers if you had to sell your company?' }, help: { es: 'Me aseguraría de que… / Intentaría…', en: 'I would make sure that… / I would try…' }, follow: [{ es: '¿Es responsabilidad del dueño?', en: 'Is it the owner’s responsibility?' }, { es: '¿Y del comprador?', en: 'And the buyer’s?' }] },
            { q: { es: '¿Qué te parece el gesto de Don Ricardo?', en: 'What do you think of Don Ricardo’s gesture?' }, help: { es: 'Me parece… porque… / Demuestra que…', en: 'I think it’s… because… / It shows that…' }, follow: [{ es: '¿Valentina debería aceptarlo?', en: 'Should Valentina accept it?' }, { es: '¿Por qué crees que lo hace?', en: 'Why do you think he does it?' }] },
          ],
          words: [{ es: 'a gran escala', en: 'on a large scale' }, { es: 'el riego por goteo', en: 'drip irrigation' }, { es: 'el socio', en: 'the partner (business)' }, { es: 'el préstamo', en: 'the loan' }, { es: 'los ahorros', en: 'savings' }],
        },
      },
    },
    // ------------------------------------------------------------ the vineyard
    {
      id: 'vinedo',
      name: { es: 'El viñedo en la vendimia', en: 'The vineyard at harvest time' },
      who: { name: 'Don Ricardo', role: { es: 'encargado del viñedo', en: 'vineyard foreman' } },
      levels: {
        A0: {
          scene: { es: 'Es un campo con muchas plantas de uva. Hay cajas y canastos. Don Ricardo corta uvas.', en: 'It is a field with lots of grape plants. There are boxes and baskets. Don Ricardo cuts grapes.' },
          opener: { es: 'Buen día. Soy Ricardo. Toma, una tijera. ¡A trabajar!', en: 'Good morning. I am Ricardo. Here, some scissors. Let’s work!' },
          decide: {
            ask: { es: 'Ricardo te da una tijera. ¿Qué haces?', en: 'Ricardo gives you scissors. What do you do?' },
            options: [
              { say: { es: 'Corto uvas.', en: 'I cut grapes.' }, then: { es: 'Ricardo dice: «Muy bien. Despacio, con cuidado».', en: 'Ricardo says: “Very good. Slowly, carefully.”' } },
              { say: { es: 'Como una uva.', en: 'I eat a grape.' }, then: { es: 'Ricardo ríe: «¡Una sí! Pero no cien».', en: 'Ricardo laughs: “One, yes! But not a hundred.”' } },
              { say: { es: 'Llevo una caja.', en: 'I carry a box.' }, then: { es: 'Ricardo dice: «¡Es pesada! Con dos manos».', en: 'Ricardo says: “It is heavy! With two hands.”' } },
            ],
          },
          twist: { es: 'Hay una abeja en las uvas. ¡Está cerca de tu mano! ¿Qué haces?', en: 'There is a bee on the grapes. It is near your hand! What do you do?' },
          questions: [
            { q: { es: '¿Trabajas en el campo?', en: 'Do you work in the countryside?' }, help: { es: 'Sí. / No, trabajo en la ciudad.', en: 'Yes. / No, I work in the city.' }, follow: [{ es: '¿Te gusta el campo?', en: 'Do you like the countryside?' }, { es: '¿Tienes plantas?', en: 'Do you have plants?' }] },
            { q: { es: '¿Te gusta el sol?', en: 'Do you like the sun?' }, help: { es: 'Sí, me gusta. / No, prefiero la sombra.', en: 'Yes, I like it. / No, I prefer the shade.' }, follow: [{ es: '¿Usas sombrero?', en: 'Do you wear a hat?' }, { es: '¿Usas crema?', en: 'Do you use sun cream?' }] },
            { q: { es: '¿Tienes miedo de las abejas?', en: 'Are you scared of bees?' }, help: { es: 'Sí, mucho. / No, no tengo miedo.', en: 'Yes, very. / No, I am not scared.' }, follow: [{ es: '¿Qué animal te da miedo?', en: 'What animal scares you?' }, { es: '¿Te gusta la miel?', en: 'Do you like honey?' }] },
            { q: { es: '¿Trabajas con las manos?', en: 'Do you work with your hands?' }, help: { es: 'Sí, mucho. / No, con la computadora.', en: 'Yes, a lot. / No, with the computer.' }, follow: [{ es: '¿Qué haces?', en: 'What do you do?' }, { es: '¿Te cansas?', en: 'Do you get tired?' }] },
          ],
          words: [{ es: 'el campo', en: 'the field' }, { es: 'la tijera', en: 'scissors' }, { es: 'la caja', en: 'the box' }, { es: 'la abeja', en: 'the bee' }, { es: 'cortar', en: 'to cut' }],
        },
        A1: {
          scene: { es: 'Es marzo, el mes de la vendimia en Mendoza. Los cosechadores trabajan desde muy temprano para no sufrir el calor. Cada uno llena gamelas, unas cajas de plástico, y recibe una ficha por cada una.', en: 'It is March, harvest month in Mendoza. The pickers work from very early to avoid the heat. Each one fills “gamelas”, plastic crates, and gets a token for each one.' },
          opener: { es: 'Yo cosecho desde los doce años. Un buen cosechador llena setenta gamelas por día. Al final de la vendimia hay una gran fiesta y eligen a la Reina de la Vendimia. ¿Te animas a llenar una gamela?', en: 'I’ve been picking since I was twelve. A good picker fills seventy crates a day. At the end of the harvest there’s a big festival and they choose the Harvest Queen. Are you up for filling a crate?' },
          decide: {
            ask: { es: 'Después de una hora, tu espalda duele. ¿Qué haces?', en: 'After an hour, your back hurts. What do you do?' },
            options: [
              { say: { es: 'Sigo hasta terminar la gamela.', en: 'I carry on until I finish the crate.' }, then: { es: 'Terminas en una hora y media. Ricardo te da una ficha: «La primera de tu vida».', en: 'You finish in an hour and a half. Ricardo gives you a token: “The first of your life.”' } },
              { say: { es: 'Pido trabajar en otra tarea.', en: 'I ask to work on another task.' }, then: { es: 'Te ponen a repartir agua a los cosechadores. Todos te quieren.', en: 'They put you on handing out water to the pickers. Everyone loves you.' } },
              { say: { es: 'Me siento a descansar a la sombra.', en: 'I sit down to rest in the shade.' }, then: { es: 'Un cosechador de setenta años pasa a tu lado con dos gamelas llenas. Te da vergüenza.', en: 'A seventy-year-old picker walks past you with two full crates. You feel embarrassed.' } },
            ],
          },
          twist: { es: 'A mediodía llegan nubes negras. Si graniza, se pierde la cosecha. Todos trabajan el doble de rápido.', en: 'At noon black clouds arrive. If it hails, the harvest is lost. Everyone works twice as fast.' },
          questions: [
            { q: { es: '¿Hiciste alguna vez un trabajo físico duro?', en: 'Have you ever done hard physical work?' }, help: { es: 'Sí, trabajé en… / No, nunca.', en: 'Yes, I worked at… / No, never.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿A qué hora empiezas a trabajar o estudiar?', en: 'What time do you start work or study?' }, help: { es: 'Empiezo a las…', en: 'I start at…' }, follow: [{ es: '¿Te gusta madrugar?', en: 'Do you like getting up early?' }, { es: '¿A qué hora terminas?', en: 'What time do you finish?' }] },
            { q: { es: '¿Hay fiestas de la cosecha en tu país?', en: 'Are there harvest festivals in your country?' }, help: { es: 'Sí, hay una fiesta de… / No que yo sepa.', en: 'Yes, there is a … festival. / Not that I know of.' }, follow: [{ es: '¿Qué se celebra?', en: 'What is celebrated?' }, { es: '¿Fuiste alguna vez?', en: 'Have you ever been?' }] },
            { q: { es: '¿Trabajas mejor bajo presión?', en: 'Do you work better under pressure?' }, help: { es: 'Sí, cuando hay poco tiempo… / No, me pongo nervioso.', en: 'Yes, when there’s little time… / No, I get nervous.' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Cómo te organizas?', en: 'How do you organise yourself?' }] },
          ],
          words: [{ es: 'la vendimia', en: 'the grape harvest' }, { es: 'el cosechador', en: 'the picker' }, { es: 'la ficha', en: 'the token' }, { es: 'la espalda', en: 'the back' }, { es: 'granizar', en: 'to hail' }],
        },
        A2: {
          scene: { es: 'Muchos cosechadores de la vendimia vienen cada año desde el norte del país o desde Bolivia. Viven tres meses en casas del viñedo y después se van a otra cosecha: aceitunas, limones, tabaco. Don Ricardo fue uno de ellos hasta que se quedó en Mendoza.', en: 'Many of the harvest pickers come every year from the north of the country or from Bolivia. They live for three months in houses on the vineyard and then move on to another harvest: olives, lemons, tobacco. Don Ricardo was one of them until he stayed in Mendoza.' },
          opener: { es: 'Durante diez años fui golondrina: tres meses aquí, tres en Tucumán, tres en Jujuy. Mis hijos crecieron casi sin mí. Cuando me ofrecieron quedarme como encargado, no lo pensé dos veces. ¿Tú podrías vivir siempre de un lado a otro?', en: 'For ten years I was a “swallow”: three months here, three in Tucumán, three in Jujuy. My children grew up almost without me. When they offered me a job as foreman, I didn’t think twice. Could you always live moving from place to place?' },
          decide: {
            ask: { es: 'Un cosechador joven quiere quedarse en Mendoza, pero no tiene papeles. Ricardo te pide consejo. ¿Qué le dices?', en: 'A young picker wants to stay in Mendoza, but has no papers. Ricardo asks your advice. What do you tell him?' },
            options: [
              { say: { es: 'Que lo ayude a hacer los trámites de residencia.', en: 'Help him with the residence paperwork.' }, then: { es: 'Tardan cuatro meses y miles de formularios. Al final, el chico consigue el documento.', en: 'It takes four months and thousands of forms. In the end, the young man gets his ID.' } },
              { say: { es: 'Que le dé trabajo en negro mientras tanto.', en: 'Give him work off the books in the meantime.' }, then: { es: 'Ricardo no quiere: «Así empezó mi primo y terminó sin jubilación».', en: 'Ricardo doesn’t want to: “That’s how my cousin started, and he ended up with no pension.”' } },
              { say: { es: 'Que le pregunte a Valentina, la dueña.', en: 'Ask Valentina, the owner.' }, then: { es: 'Valentina ofrece un contrato formal desde el día que llegue el documento.', en: 'Valentina offers a formal contract from the day the ID arrives.' } },
            ],
          },
          twist: { es: 'El chico resulta ser el sobrino de un compañero de Ricardo de sus años de golondrina.', en: 'The young man turns out to be the nephew of a colleague from Ricardo’s years as a migrant worker.' },
          questions: [
            { q: { es: '¿Te mudaste muchas veces en tu vida?', en: 'Have you moved many times in your life?' }, help: { es: 'Sí, me mudé a… / No, siempre en el mismo lugar.', en: 'Yes, I moved to… / No, always in the same place.' }, follow: [{ es: '¿Qué fue lo más difícil?', en: 'What was the hardest part?' }, { es: '¿Dónde te sentiste en casa?', en: 'Where did you feel at home?' }] },
            { q: { es: '¿Conoces a alguien que trabaja lejos de su familia?', en: 'Do you know someone who works far from their family?' }, help: { es: 'Sí, mi… trabaja en… / No conozco a nadie.', en: 'Yes, my… works in… / I don’t know anyone.' }, follow: [{ es: '¿Cómo se comunican?', en: 'How do they keep in touch?' }, { es: '¿Volverá?', en: 'Will they come back?' }] },
            { q: { es: '¿Qué trámite te costó mucho hacer?', en: 'What paperwork was very hard for you?' }, help: { es: 'Una vez tuve que… y tardé…', en: 'Once I had to… and it took me…' }, follow: [{ es: '¿Por qué fue difícil?', en: 'Why was it hard?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Por qué crees que algunos trabajos se hacen «en negro»?', en: 'Why do you think some jobs are done off the books?' }, help: { es: 'Porque los empleadores… / Porque los trabajadores…', en: 'Because employers… / Because workers…' }, follow: [{ es: '¿Quién pierde?', en: 'Who loses?' }, { es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }] },
          ],
          words: [{ es: 'la golondrina', en: 'swallow (migrant worker)' }, { es: 'la aceituna', en: 'the olive' }, { es: 'el trámite', en: 'paperwork' }, { es: 'en negro', en: 'off the books' }, { es: 'la jubilación', en: 'the pension' }],
        },
        B1: {
          scene: { es: 'Una empresa ofrece a la bodega máquinas cosechadoras que hacen en un día el trabajo de cincuenta personas. Son más baratas a largo plazo y no dependen de que lleguen trabajadores. Don Ricardo tiene que explicarles a los cosechadores lo que significa.', en: 'A company offers the winery harvesting machines that do in a day the work of fifty people. They are cheaper in the long run and don’t depend on workers arriving. Don Ricardo has to explain to the pickers what it means.' },
          opener: { es: 'La máquina no se cansa, no pide aumento y no se enferma. Pero tampoco elige el racimo bueno y deja el malo, como hace una mano con experiencia. Los grandes vinos todavía se cosechan a mano. ¿Será por mucho tiempo?', en: 'The machine doesn’t get tired, doesn’t ask for a raise and doesn’t get sick. But it also doesn’t pick the good bunch and leave the bad one, like an experienced hand does. Great wines are still harvested by hand. Will it stay that way for long?' },
          decide: {
            ask: { es: 'Valentina tiene que decidir y le pide su opinión a Ricardo. ¿Qué debería recomendar él?', en: 'Valentina has to decide and asks Ricardo’s opinion. What should he recommend?' },
            options: [
              { say: { es: 'Máquinas para el vino común y cosecha a mano para el vino especial.', en: 'Machines for everyday wine and hand-picking for the special wine.' }, then: { es: 'Se quedan veinte cosechadores de cincuenta. Ricardo tiene que elegir quiénes. Es el peor día de su vida.', en: 'Twenty pickers out of fifty stay. Ricardo has to choose who. It’s the worst day of his life.' } },
              { say: { es: 'No comprar máquinas y vender el vino como «cosechado a mano».', en: 'Don’t buy machines and sell the wine as “hand-picked”.' }, then: { es: 'Los compradores europeos pagan más por eso. Por ahora, las cuentas cierran.', en: 'European buyers pay more for that. For now, the numbers add up.' } },
              { say: { es: 'Comprar las máquinas y formar a los cosechadores para manejarlas.', en: 'Buy the machines and train the pickers to operate them.' }, then: { es: 'Cinco cosechadores aprenden. Los demás tienen que buscar otra cosecha.', en: 'Five pickers learn. The rest have to look for another harvest.' } },
            ],
          },
          twist: { es: 'Los cosechadores organizan una huelga justo el día que empieza la vendimia.', en: 'The pickers organise a strike on the very day the harvest begins.' },
          questions: [
            { q: { es: '¿Qué trabajos manuales crees que nunca podrán hacer las máquinas?', en: 'What manual jobs do you think machines will never be able to do?' }, help: { es: 'Creo que… porque requiere… / Hoy pienso que todo…', en: 'I think… because it requires… / Today I think everything…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y en veinte años?', en: 'And in twenty years?' }] },
            { q: { es: '¿Pagarías más por un producto hecho a mano?', en: 'Would you pay more for a handmade product?' }, help: { es: 'Sí, si… / Depende del producto…', en: 'Yes, if… / It depends on the product…' }, follow: [{ es: '¿Cuánto más?', en: 'How much more?' }, { es: '¿Qué productos?', en: 'Which products?' }] },
            { q: { es: '¿Es justa una huelga en el momento que más daño hace a la empresa?', en: 'Is a strike fair at the moment it hurts the company most?' }, help: { es: 'Sí, porque es la única forma de… / No, porque…', en: 'Yes, because it’s the only way to… / No, because…' }, follow: [{ es: '¿Tú harías huelga?', en: 'Would you strike?' }, { es: '¿Por qué causa?', en: 'For what cause?' }] },
            { q: { es: '¿Qué harías en el lugar de Ricardo si tuvieras que elegir quién se queda?', en: 'What would you do in Ricardo’s place if you had to choose who stays?' }, help: { es: 'Elegiría según… / Me negaría a…', en: 'I would choose according to… / I would refuse to…' }, follow: [{ es: '¿Qué criterio es justo?', en: 'What criterion is fair?' }, { es: '¿Se puede ser justo en algo así?', en: 'Can you be fair in something like that?' }] },
          ],
          words: [{ es: 'la cosechadora', en: 'the harvesting machine' }, { es: 'el racimo', en: 'the bunch (grapes)' }, { es: 'el aumento', en: 'the raise' }, { es: 'cerrar las cuentas', en: 'to break even' }, { es: 'la huelga', en: 'the strike' }],
        },
      },
    },
    // ------------------------------------------------------------ the central market
    {
      id: 'mercado',
      name: { es: 'El mercado central', en: 'The central market' },
      who: { name: 'Pilar', role: { es: 'verdulera', en: 'greengrocer' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado con frutas y verduras. Hay tomates, duraznos y aceitunas. Pilar vende verduras.', en: 'It is a market with fruit and vegetables. There are tomatoes, peaches and olives. Pilar sells vegetables.' },
          opener: { es: '¡Hola! Soy Pilar. Todo es fresco. ¿Qué quieres?', en: 'Hi! I am Pilar. Everything is fresh. What do you want?' },
          decide: {
            ask: { es: 'Pilar tiene duraznos, aceitunas y ajos. ¿Qué compras?', en: 'Pilar has peaches, olives and garlic. What do you buy?' },
            options: [
              { say: { es: 'Duraznos, por favor.', en: 'Peaches, please.' }, then: { es: 'Pilar dice: «Son dulces. ¿Un kilo?»', en: 'Pilar says: “They are sweet. A kilo?”' } },
              { say: { es: 'Aceitunas.', en: 'Olives.' }, then: { es: 'Pilar dice: «Verdes o negras. ¡Prueba una!»', en: 'Pilar says: “Green or black. Try one!”' } },
              { say: { es: 'Ajos.', en: 'Garlic.' }, then: { es: 'Pilar ríe: «Huelen mucho, pero son muy buenos».', en: 'Pilar laughs: “They smell strong, but they are very good.”' } },
            ],
          },
          twist: { es: 'Pilar te regala un durazno. Está muy maduro. ¡El jugo cae en tu camisa! ¿Qué dices?', en: 'Pilar gives you a peach. It is very ripe. The juice falls on your shirt! What do you say?' },
          questions: [
            { q: { es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, help: { es: 'Me gusta el / la…', en: 'I like…' }, follow: [{ es: '¿Comes fruta todos los días?', en: 'Do you eat fruit every day?' }, { es: '¿Qué fruta no te gusta?', en: 'What fruit don’t you like?' }] },
            { q: { es: '¿Dónde compras la comida?', en: 'Where do you buy food?' }, help: { es: 'En el supermercado / en el mercado.', en: 'At the supermarket / at the market.' }, follow: [{ es: '¿Qué día?', en: 'What day?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Te gustan las aceitunas?', en: 'Do you like olives?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Verdes o negras?', en: 'Green or black?' }, { es: '¿Con qué las comes?', en: 'What do you eat them with?' }] },
            { q: { es: '¿Cocinas con ajo?', en: 'Do you cook with garlic?' }, help: { es: 'Sí, siempre. / No, no me gusta.', en: 'Yes, always. / No, I don’t like it.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Cocinas bien?', en: 'Do you cook well?' }] },
          ],
          words: [{ es: 'el durazno', en: 'the peach (Argentina)' }, { es: 'la aceituna', en: 'the olive' }, { es: 'el ajo', en: 'garlic' }, { es: 'maduro', en: 'ripe' }, { es: 'el kilo', en: 'the kilo' }],
        },
        A1: {
          scene: { es: 'El mercado central de Mendoza tiene puestos de frutas, carnicerías, panaderías y pequeños restaurantes. Pilar vende verduras de su propia quinta, que está a veinte kilómetros de la ciudad.', en: 'Mendoza’s central market has fruit stalls, butchers, bakeries and small restaurants. Pilar sells vegetables from her own smallholding, twenty kilometres from the city.' },
          opener: { es: 'Me levanto a las cuatro, cosecho, cargo la camioneta y a las siete abro el puesto. Lo que vendo hoy, ayer estaba en la tierra. En el supermercado no pasa eso, ¿no?', en: 'I get up at four, harvest, load the van and at seven I open the stall. What I sell today was in the ground yesterday. That doesn’t happen at the supermarket, does it?' },
          decide: {
            ask: { es: 'Quieres cocinar algo típico de Mendoza. Pilar te da tres ideas. ¿Cuál eliges?', en: 'You want to cook something typical of Mendoza. Pilar gives you three ideas. Which do you choose?' },
            options: [
              { say: { es: 'Una ensalada de cebolla, pimiento y aceite de oliva.', en: 'A salad of onion, pepper and olive oil.' }, then: { es: 'Pilar elige los mejores pimientos y te regala un poco de albahaca.', en: 'Pilar picks the best peppers and gives you some basil for free.' } },
              { say: { es: 'Empanadas mendocinas.', en: 'Mendoza-style empanadas.' }, then: { es: 'Pilar te explica que llevan aceitunas y huevo. Su receta es de su abuela.', en: 'Pilar explains they contain olives and egg. Her recipe is her grandmother’s.' } },
              { say: { es: 'Una tortilla de papas.', en: 'A potato omelette.' }, then: { es: 'Pilar se ríe: «Eso es español». Pero te vende las papas igual.', en: 'Pilar laughs: “That’s Spanish.” But she sells you the potatoes anyway.' } },
            ],
          },
          twist: { es: 'Un cliente se queja de que los tomates de Pilar son «feos». Pilar le da uno a probar.', en: 'A customer complains that Pilar’s tomatoes are “ugly”. Pilar gives him one to taste.' },
          questions: [
            { q: { es: '¿A qué hora te levantas normalmente?', en: 'What time do you usually get up?' }, help: { es: 'Me levanto a las…', en: 'I get up at…' }, follow: [{ es: '¿Y los fines de semana?', en: 'And at weekends?' }, { es: '¿Te cuesta?', en: 'Is it hard for you?' }] },
            { q: { es: '¿Te importa de dónde viene tu comida?', en: 'Do you care where your food comes from?' }, help: { es: 'Sí, me importa porque… / No mucho.', en: 'Yes, I care because… / Not much.' }, follow: [{ es: '¿Lees las etiquetas?', en: 'Do you read labels?' }, { es: '¿Compras productos locales?', en: 'Do you buy local products?' }] },
            { q: { es: '¿Qué plato típico sabes cocinar?', en: 'What typical dish can you cook?' }, help: { es: 'Sé cocinar… / No sé cocinar nada típico.', en: 'I can cook… / I can’t cook anything typical.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Cuándo lo cocinas?', en: 'When do you cook it?' }] },
            { q: { es: '¿Prefieres frutas y verduras bonitas o con mucho sabor?', en: 'Do you prefer pretty fruit and veg or ones with lots of flavour?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Es fácil encontrarlas?', en: 'Are they easy to find?' }, { es: '¿Cuestan más?', en: 'Do they cost more?' }] },
          ],
          words: [{ es: 'la quinta', en: 'the smallholding (Argentina)' }, { es: 'cargar', en: 'to load' }, { es: 'la camioneta', en: 'the van' }, { es: 'la albahaca', en: 'basil' }, { es: 'las papas', en: 'potatoes (Latin America)' }],
        },
        A2: {
          scene: { es: 'Pilar heredó la quinta de sus padres, que llegaron de Bolivia hace cuarenta años. Gran parte de las verduras de Mendoza las cultivan familias bolivianas. Hoy Pilar habla con una periodista que hace un reportaje sobre ellas.', en: 'Pilar inherited the smallholding from her parents, who came from Bolivia forty years ago. Much of Mendoza’s vegetables are grown by Bolivian families. Today Pilar is talking to a journalist writing a report about them.' },
          opener: { es: 'Mis papás llegaron sin nada. Alquilaban un pedazo de tierra y trabajaban de sol a sol. En la escuela algunos chicos me llamaban «bolita». Hoy esos mismos chicos compran mis tomates. ¿Tú alguna vez te sentiste diferente en un lugar?', en: 'My parents arrived with nothing. They rented a piece of land and worked from sunrise to sunset. At school some kids called me “bolita”. Today those same kids buy my tomatoes. Have you ever felt different somewhere?' },
          decide: {
            ask: { es: 'La periodista quiere sacar una foto de Pilar para la portada. Pilar no está segura. ¿Qué le dices?', en: 'The journalist wants to take a photo of Pilar for the cover. Pilar isn’t sure. What do you tell her?' },
            options: [
              { say: { es: 'Que acepte: su historia puede ayudar a otras familias.', en: 'Accept: her story can help other families.' }, then: { es: 'La foto sale en la portada. Al día siguiente hay fila en su puesto, y muchos la felicitan.', en: 'The photo makes the cover. The next day there’s a queue at her stall, and many congratulate her.' } },
              { say: { es: 'Que pida salir con su familia, no sola.', en: 'Ask to appear with her family, not alone.' }, then: { es: 'Salen sus padres, sus hijos y ella entre las verduras. Su mamá llora al ver la foto.', en: 'Her parents, her children and she appear among the vegetables. Her mum cries when she sees the photo.' } },
              { say: { es: 'Que no salga si no quiere.', en: 'Don’t appear if she doesn’t want to.' }, then: { es: 'Pilar cuenta su historia, pero sin foto. Dice que prefiere que hablen sus tomates.', en: 'Pilar tells her story, but with no photo. She says she prefers her tomatoes to do the talking.' } },
            ],
          },
          twist: { es: 'Uno de los chicos que se burlaba de ella en la escuela es ahora el dueño del supermercado más grande de la ciudad. Quiere comprarle toda la producción.', en: 'One of the kids who used to tease her at school is now the owner of the biggest supermarket in the city. He wants to buy her entire crop.' },
          questions: [
            { q: { es: '¿Te sentiste alguna vez diferente o fuera de lugar?', en: 'Have you ever felt different or out of place?' }, help: { es: 'Sí, cuando… / No, pero vi a alguien que…', en: 'Yes, when… / No, but I saw someone who…' }, follow: [{ es: '¿Cómo reaccionaste?', en: 'How did you react?' }, { es: '¿Qué te ayudó?', en: 'What helped you?' }] },
            { q: { es: '¿Qué comunidades de inmigrantes hay en tu ciudad?', en: 'What immigrant communities are there in your city?' }, help: { es: 'Hay muchas personas de… / Trabajan en…', en: 'There are many people from… / They work in…' }, follow: [{ es: '¿Cómo se llevan con el resto?', en: 'How do they get on with everyone else?' }, { es: '¿Qué aportan?', en: 'What do they contribute?' }] },
            { q: { es: '¿Tus padres trabajaban mucho cuando eras chico?', en: 'Did your parents work a lot when you were a kid?' }, help: { es: 'Sí, trabajaban… / Mi mamá… y mi papá…', en: 'Yes, they worked… / My mum… and my dad…' }, follow: [{ es: '¿Los veías mucho?', en: 'Did you see them much?' }, { es: '¿Qué te enseñaron?', en: 'What did they teach you?' }] },
            { q: { es: '¿Pilar debería venderle al chico que se burlaba de ella?', en: 'Should Pilar sell to the boy who used to tease her?' }, help: { es: 'Creo que sí, porque… / Yo no le vendería porque…', en: 'I think so, because… / I wouldn’t sell to him because…' }, follow: [{ es: '¿El pasado importa en los negocios?', en: 'Does the past matter in business?' }, { es: '¿Qué le diría ella?', en: 'What would she tell him?' }] },
          ],
          words: [{ es: 'heredar', en: 'to inherit' }, { es: 'de sol a sol', en: 'from sunrise to sunset' }, { es: 'burlarse', en: 'to make fun of' }, { es: 'la portada', en: 'the front page' }, { es: 'la producción', en: 'the produce, output' }],
        },
        B1: {
          scene: { es: 'La ciudad crece y las quintas que rodean Mendoza se están convirtiendo en barrios privados. Una constructora le ofrece a Pilar una suma enorme por su tierra. Si vende, su familia tendría seguridad económica para siempre; si no, la quinta quedaría rodeada de casas y sin agua de riego.', en: 'The city is growing and the smallholdings around Mendoza are turning into gated communities. A builder offers Pilar a huge sum for her land. If she sells, her family would have financial security forever; if not, the smallholding would be surrounded by houses with no irrigation water.' },
          opener: { es: 'Mis vecinos ya vendieron. Ahora donde había lechugas hay piletas. Y la ciudad sigue necesitando comer, ¿no? Si todos vendemos, las verduras van a venir de quinientos kilómetros, más caras y menos frescas. Pero yo no puedo salvar sola el cinturón verde de Mendoza.', en: 'My neighbours have already sold. Now where there were lettuces there are swimming pools. And the city still needs to eat, doesn’t it? If we all sell, vegetables will come from five hundred kilometres away, more expensive and less fresh. But I can’t save Mendoza’s green belt on my own.' },
          decide: {
            ask: { es: 'Pilar tiene que contestar a la constructora. ¿Qué le recomiendas?', en: 'Pilar has to answer the builder. What do you recommend?' },
            options: [
              { say: { es: 'Unirse con otros quinteros y pedir una ley que proteja las tierras de cultivo.', en: 'Join other growers and ask for a law protecting farmland.' }, then: { es: 'Treinta familias firman. El municipio promete un debate. La constructora espera, paciente.', en: 'Thirty families sign. The council promises a debate. The builder waits, patiently.' } },
              { say: { es: 'Vender y comprar tierra más lejos, donde todavía se puede cultivar.', en: 'Sell and buy land further away, where farming is still possible.' }, then: { es: 'Con el dinero compra el doble de tierra a sesenta kilómetros. Pero ahora tarda dos horas en llegar al mercado.', en: 'With the money she buys twice as much land sixty kilometres away. But now it takes two hours to get to the market.' } },
              { say: { es: 'No vender y buscar otra fuente de agua.', en: 'Don’t sell and find another water source.' }, then: { es: 'Hace un pozo con un préstamo. El agua sale, pero la deuda también.', en: 'She digs a well with a loan. Water comes out, but so does debt.' } },
            ],
          },
          twist: { es: 'Su hijo mayor, que estudia arquitectura, le confiesa que hace sus prácticas en la misma constructora.', en: 'Her eldest son, who studies architecture, confesses he is doing his internship at the same builder.' },
          questions: [
            { q: { es: '¿Debería protegerse la tierra agrícola cerca de las ciudades?', en: 'Should farmland near cities be protected?' }, help: { es: 'Creo que sí, porque… / Depende de…', en: 'I think so, because… / It depends on…' }, follow: [{ es: '¿Cómo?', en: 'How?' }, { es: '¿Quién pagaría?', en: 'Who would pay?' }] },
            { q: { es: '¿Puede una sola persona resistir un cambio que viene de todos lados?', en: 'Can one person resist a change that’s coming from everywhere?' }, help: { es: 'Sola es difícil, pero… / Creo que sí, si…', en: 'Alone it’s hard, but… / I think so, if…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Vale la pena intentarlo?', en: 'Is it worth trying?' }] },
            { q: { es: '¿Qué harías con mucho dinero si tuvieras que dejar el lugar donde creciste?', en: 'What would you do with a lot of money if you had to leave the place where you grew up?' }, help: { es: 'Con ese dinero… / Pero extrañaría…', en: 'With that money… / But I would miss…' }, follow: [{ es: '¿El dinero compensa?', en: 'Does money compensate?' }, { es: '¿Volverías alguna vez?', en: 'Would you ever go back?' }] },
            { q: { es: '¿Cómo debería reaccionar Pilar ante lo de su hijo?', en: 'How should Pilar react to her son’s news?' }, help: { es: 'Debería entender que… / Tiene derecho a sentirse…', en: 'She should understand that… / She has the right to feel…' }, follow: [{ es: '¿El hijo hizo mal?', en: 'Did the son do wrong?' }, { es: '¿Qué harías tú en su lugar?', en: 'What would you do in his place?' }] },
          ],
          words: [{ es: 'la constructora', en: 'the building company' }, { es: 'la pileta', en: 'swimming pool (Argentina)' }, { es: 'el cinturón verde', en: 'the green belt' }, { es: 'el pozo', en: 'the well' }, { es: 'las prácticas', en: 'the internship' }],
        },
      },
    },
    // ------------------------------------------------------------ the mountain refuge
    {
      id: 'refugio',
      name: { es: 'El refugio del Aconcagua', en: 'The Aconcagua refuge' },
      who: { name: 'Nahuel', role: { es: 'andinista', en: 'mountaineer' } },
      levels: {
        A0: {
          scene: { es: 'Es una casa pequeña en la montaña. Hay nieve afuera. Adentro hay una estufa. Nahuel sube montañas.', en: 'It is a small house on the mountain. There is snow outside. Inside there is a stove. Nahuel climbs mountains.' },
          opener: { es: 'Hola. Soy Nahuel. ¡Hace mucho frío! ¿Quieres un té?', en: 'Hello. I am Nahuel. It is very cold! Do you want a tea?' },
          decide: {
            ask: { es: 'Nahuel tiene té, sopa y chocolate. ¿Qué tomas?', en: 'Nahuel has tea, soup and hot chocolate. What do you have?' },
            options: [
              { say: { es: 'Un té caliente.', en: 'A hot tea.' }, then: { es: 'Nahuel dice: «Toma. Para las manos frías».', en: 'Nahuel says: “Here. For cold hands.”' } },
              { say: { es: 'Sopa, por favor.', en: 'Soup, please.' }, then: { es: 'Nahuel dice: «Es sopa de verduras. ¡Muy buena!»', en: 'Nahuel says: “It is vegetable soup. Very good!”' } },
              { say: { es: 'Chocolate.', en: 'Hot chocolate.' }, then: { es: 'Nahuel ríe: «¡Es el favorito de todos!»', en: 'Nahuel laughs: “It is everyone’s favourite!”' } },
            ],
          },
          twist: { es: 'Afuera hay mucho viento. La puerta se abre sola. ¡Entra nieve! ¿Qué haces?', en: 'Outside it is very windy. The door opens by itself. Snow comes in! What do you do?' },
          questions: [
            { q: { es: '¿Te gusta la nieve?', en: 'Do you like snow?' }, help: { es: 'Sí, me encanta. / No, prefiero el sol.', en: 'Yes, I love it. / No, I prefer the sun.' }, follow: [{ es: '¿Nieva en tu ciudad?', en: 'Does it snow in your city?' }, { es: '¿Esquías?', en: 'Do you ski?' }] },
            { q: { es: '¿Qué tomas cuando hace frío?', en: 'What do you drink when it is cold?' }, help: { es: 'Tomo té / café / chocolate.', en: 'I drink tea / coffee / hot chocolate.' }, follow: [{ es: '¿Con azúcar?', en: 'With sugar?' }, { es: '¿Y cuando hace calor?', en: 'And when it is hot?' }] },
            { q: { es: '¿Subiste alguna vez una montaña alta?', en: 'Have you ever climbed a high mountain?' }, help: { es: 'Sí, una vez. / No, nunca.', en: 'Yes, once. / No, never.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Quieres subir una?', en: 'Do you want to climb one?' }] },
            { q: { es: '¿Tienes frío ahora?', en: 'Are you cold now?' }, help: { es: 'Sí, un poco. / No, tengo calor.', en: 'Yes, a little. / No, I am hot.' }, follow: [{ es: '¿Qué ropa llevas?', en: 'What clothes are you wearing?' }, { es: '¿Te gusta el invierno?', en: 'Do you like winter?' }] },
          ],
          words: [{ es: 'la nieve', en: 'snow' }, { es: 'la estufa', en: 'the stove, heater' }, { es: 'el frío', en: 'the cold' }, { es: 'la sopa', en: 'the soup' }, { es: 'el viento', en: 'the wind' }],
        },
        A1: {
          scene: { es: 'El Aconcagua es la montaña más alta de América: casi siete mil metros. Cada año llegan andinistas de todo el mundo. Nahuel trabaja en un refugio a cuatro mil trescientos metros. Arriba el aire tiene poco oxígeno y la gente se cansa muy rápido.', en: 'Aconcagua is the highest mountain in the Americas: almost seven thousand metres. Every year climbers come from all over the world. Nahuel works at a refuge at four thousand three hundred metres. Up here the air has little oxygen and people tire very quickly.' },
          opener: { es: 'Regla número uno: aquí se sube despacio. Si te duele la cabeza o no puedes dormir, me avisas. La montaña no se va a ir a ningún lado. ¿Cómo te sientes hoy?', en: 'Rule number one: you climb slowly here. If your head hurts or you can’t sleep, tell me. The mountain isn’t going anywhere. How do you feel today?' },
          decide: {
            ask: { es: 'Te duele un poco la cabeza. ¿Qué haces?', en: 'Your head hurts a little. What do you do?' },
            options: [
              { say: { es: 'Se lo digo a Nahuel.', en: 'I tell Nahuel.' }, then: { es: 'Nahuel te da agua y te pide descansar un día más. Al día siguiente te sientes mucho mejor.', en: 'Nahuel gives you water and asks you to rest one more day. The next day you feel much better.' } },
              { say: { es: 'No digo nada y sigo subiendo.', en: 'I say nothing and keep climbing.' }, then: { es: 'A los quinientos metros te mareas. Nahuel te baja al refugio. Está serio.', en: 'Five hundred metres on, you get dizzy. Nahuel takes you back down to the refuge. He looks serious.' } },
              { say: { es: 'Bebo mucha agua y duermo temprano.', en: 'I drink lots of water and sleep early.' }, then: { es: 'Nahuel aprueba: «Así se hace. La montaña premia a los pacientes».', en: 'Nahuel approves: “That’s how it’s done. The mountain rewards the patient.”' } },
            ],
          },
          twist: { es: 'Llega un andinista que dice que quiere subir hasta la cima en un solo día, sin aclimatarse. Nahuel intenta convencerlo de que no.', en: 'A climber arrives who says he wants to reach the summit in a single day, without acclimatising. Nahuel tries to talk him out of it.' },
          questions: [
            { q: { es: '¿Qué haces cuando te sientes mal?', en: 'What do you do when you feel unwell?' }, help: { es: 'Descanso. / Tomo algo. / Voy al médico.', en: 'I rest. / I take something. / I go to the doctor.' }, follow: [{ es: '¿Se lo dices a alguien?', en: 'Do you tell someone?' }, { es: '¿O sigues igual?', en: 'Or do you carry on?' }] },
            { q: { es: '¿Eres paciente o impaciente?', en: 'Are you patient or impatient?' }, help: { es: 'Soy paciente con… / Soy impaciente cuando…', en: 'I’m patient with… / I’m impatient when…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Quieres cambiar eso?', en: 'Do you want to change that?' }] },
            { q: { es: '¿Cuál es el lugar más alto donde estuviste?', en: 'What is the highest place you have been?' }, help: { es: 'Estuve en… a… metros.', en: 'I was at… at … metres.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Qué viste?', en: 'What did you see?' }] },
            { q: { es: '¿Escuchas los consejos de los expertos?', en: 'Do you listen to experts’ advice?' }, help: { es: 'Sí, siempre. / Depende de…', en: 'Yes, always. / It depends on…' }, follow: [{ es: '¿Cuándo no escuchaste?', en: 'When didn’t you listen?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'el andinista', en: 'the Andes climber' }, { es: 'el oxígeno', en: 'oxygen' }, { es: 'avisar', en: 'to let someone know' }, { es: 'marearse', en: 'to get dizzy' }, { es: 'aclimatarse', en: 'to acclimatise' }],
        },
        A2: {
          scene: { es: 'Nahuel es mapuche y creció en un pueblo al sur de Mendoza. Empezó como porteador: cargaba las mochilas de los turistas por veinte dólares al día. Hoy es guía certificado y ya llegó once veces a la cima del Aconcagua.', en: 'Nahuel is Mapuche and grew up in a village south of Mendoza. He started as a porter: he carried tourists’ backpacks for twenty dollars a day. Today he is a certified guide and has reached the summit of Aconcagua eleven times.' },
          opener: { es: 'Cuando era porteador, los turistas me sacaban fotos como si fuera parte del paisaje. Nadie me preguntaba el nombre. Ahora que soy guía, me piden consejo y me invitan a cenar. Soy la misma persona. ¿No es raro?', en: 'When I was a porter, tourists photographed me as if I were part of the scenery. Nobody asked my name. Now that I’m a guide, they ask my advice and invite me to dinner. I’m the same person. Isn’t that strange?' },
          decide: {
            ask: { es: 'Un grupo de turistas ricos quiere contratar porteadores que carguen todo, incluso una botella de champán para la cima. ¿Qué le aconsejas a Nahuel?', en: 'A group of wealthy tourists wants to hire porters to carry everything, even a bottle of champagne for the summit. What do you advise Nahuel?' },
            options: [
              { say: { es: 'Aceptar, pero exigir un buen sueldo para los porteadores.', en: 'Accept, but demand a good wage for the porters.' }, then: { es: 'Los turistas pagan el doble sin discutir. Los porteadores nunca habían ganado tanto.', en: 'The tourists pay double without arguing. The porters had never earned so much.' } },
              { say: { es: 'Decirles que cada uno lleve su propia mochila.', en: 'Tell them everyone carries their own backpack.' }, then: { es: 'Dos turistas se enojan y contratan a otra agencia. Los otros tres aceptan y aprenden mucho.', en: 'Two tourists get angry and hire another agency. The other three accept and learn a lot.' } },
              { say: { es: 'Aceptar todo menos el champán.', en: 'Accept everything except the champagne.' }, then: { es: 'Los turistas se ríen y llevan la botella ellos mismos. En la cima, comparten con los porteadores.', en: 'The tourists laugh and carry the bottle themselves. At the summit, they share it with the porters.' } },
            ],
          },
          twist: { es: 'Uno de los turistas ricos reconoce a Nahuel: hace diez años, él le cargó la mochila y le salvó la vida en una tormenta.', en: 'One of the rich tourists recognises Nahuel: ten years ago, he carried his backpack and saved his life in a storm.' },
          questions: [
            { q: { es: '¿Te trataron alguna vez de forma diferente por tu trabajo o tu aspecto?', en: 'Have you ever been treated differently because of your job or your appearance?' }, help: { es: 'Sí, cuando trabajaba de… / Cuando llevaba…', en: 'Yes, when I worked as… / When I wore…' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Dijiste algo?', en: 'Did you say something?' }] },
            { q: { es: '¿Qué trabajos son importantes pero «invisibles»?', en: 'What jobs are important but “invisible”?' }, help: { es: 'Por ejemplo… porque nadie…', en: 'For example… because nobody…' }, follow: [{ es: '¿Les das las gracias?', en: 'Do you thank them?' }, { es: '¿Ganan bien?', en: 'Do they earn well?' }] },
            { q: { es: '¿Empezaste alguna vez desde abajo en algo?', en: 'Have you ever started from the bottom in something?' }, help: { es: 'Sí, empecé como… y ahora… / No, pero…', en: 'Yes, I started as… and now… / No, but…' }, follow: [{ es: '¿Qué aprendiste?', en: 'What did you learn?' }, { es: '¿Cuánto tardaste?', en: 'How long did it take?' }] },
            { q: { es: '¿Qué le dirías al turista que Nahuel salvó?', en: 'What would you say to the tourist Nahuel saved?' }, help: { es: 'Le diría que… / Le preguntaría por qué…', en: 'I would tell him… / I would ask him why…' }, follow: [{ es: '¿Cómo debería agradecerle?', en: 'How should he thank him?' }, { es: '¿Nahuel lo recuerda?', en: 'Does Nahuel remember him?' }] },
          ],
          words: [{ es: 'el porteador', en: 'the porter' }, { es: 'certificado', en: 'certified' }, { es: 'cargar', en: 'to carry' }, { es: 'contratar', en: 'to hire' }, { es: 'la tormenta', en: 'the storm' }],
        },
        B1: {
          scene: { es: 'Cada temporada, el Aconcagua recibe más andinistas y genera más basura. Hay quienes proponen limitar el número de permisos y subir mucho el precio para proteger la montaña. Otros dicen que eso convertiría el Aconcagua en un lugar solo para millonarios extranjeros.', en: 'Every season, Aconcagua gets more climbers and generates more rubbish. Some propose limiting the number of permits and raising the price a lot to protect the mountain. Others say that would make Aconcagua a place only for foreign millionaires.' },
          opener: { es: 'Para mi gente, esta montaña es sagrada. Para el gobierno, es una fuente de dólares. Para los turistas, es una foto en la cima. Todos tienen algo de razón. Lo que me duele es bajar con bolsas de basura que dejaron otros. ¿A quién le pertenece una montaña?', en: 'For my people, this mountain is sacred. For the government, it’s a source of dollars. For tourists, it’s a photo at the summit. Everyone is partly right. What hurts me is coming down with bags of rubbish left by others. Who does a mountain belong to?' },
          decide: {
            ask: { es: 'Hay una consulta pública sobre el futuro del parque. ¿Qué propuesta apoyas?', en: 'There is a public consultation on the park’s future. Which proposal do you support?' },
            options: [
              { say: { es: 'Limitar permisos, pero con un cupo barato para argentinos y comunidades originarias.', en: 'Limit permits, but with a cheap quota for Argentines and indigenous communities.' }, then: { es: 'Es la propuesta más votada. Algunos turistas extranjeros la critican por discriminatoria.', en: 'It’s the most voted proposal. Some foreign tourists criticise it as discriminatory.' } },
              { say: { es: 'No limitar, pero obligar a cada andinista a bajar su basura con un depósito de dinero.', en: 'Don’t limit, but make each climber bring down their rubbish, with a cash deposit.' }, then: { es: 'La montaña queda más limpia. Pero el número de andinistas sigue creciendo.', en: 'The mountain gets cleaner. But the number of climbers keeps growing.' } },
              { say: { es: 'Cerrar la montaña un año entero para que se recupere.', en: 'Close the mountain for a whole year so it can recover.' }, then: { es: 'Los guías y porteadores se oponen: sería un año sin trabajo.', en: 'The guides and porters oppose it: it would be a year without work.' } },
            ],
          },
          twist: { es: 'Se descubre que los andinistas que más basura dejan son los de las expediciones más caras, que contratan a otros para que bajen sus cosas.', en: 'It turns out the climbers who leave the most rubbish are those on the most expensive expeditions, who hire others to bring their things down.' },
          questions: [
            { q: { es: '¿Subir mucho los precios es una buena forma de proteger un lugar natural?', en: 'Is raising prices a lot a good way to protect a natural site?' }, help: { es: 'Funciona, pero… / Me parece injusto porque…', en: 'It works, but… / I think it’s unfair because…' }, follow: [{ es: '¿Qué alternativa hay?', en: 'What alternative is there?' }, { es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }] },
            { q: { es: '¿Es justo cobrar distinto a locales y extranjeros?', en: 'Is it fair to charge locals and foreigners differently?' }, help: { es: 'Creo que sí, porque los locales… / No, porque…', en: 'I think so, because locals… / No, because…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Te tocó pagar más alguna vez?', en: 'Have you ever had to pay more?' }] },
            { q: { es: '¿Qué significa que un lugar sea sagrado para una comunidad?', en: 'What does it mean for a place to be sacred to a community?' }, help: { es: 'Significa que… / Para ellos representa…', en: 'It means that… / For them it represents…' }, follow: [{ es: '¿Debería eso limitar el turismo?', en: 'Should that limit tourism?' }, { es: '¿Hay lugares sagrados en tu país?', en: 'Are there sacred places in your country?' }] },
            { q: { es: '¿Tener dinero da derecho a no hacerse cargo de lo propio?', en: 'Does having money give you the right not to take care of your own stuff?' }, help: { es: 'No, porque… / Pagar a alguien no es lo mismo que…', en: 'No, because… / Paying someone isn’t the same as…' }, follow: [{ es: '¿Dónde lo ves en tu vida diaria?', en: 'Where do you see it in daily life?' }, { es: '¿Qué harías con esas expediciones?', en: 'What would you do about those expeditions?' }] },
          ],
          words: [{ es: 'la temporada', en: 'the season' }, { es: 'el permiso', en: 'the permit' }, { es: 'sagrado', en: 'sacred' }, { es: 'el cupo', en: 'the quota' }, { es: 'hacerse cargo', en: 'to take responsibility' }],
        },
      },
    },
    // ------------------------------------------------------------ rafting
    {
      id: 'rafting',
      name: { es: 'El rafting en el río Mendoza', en: 'Rafting on the Mendoza river' },
      who: { name: 'Tomi', role: { es: 'guía de rafting', en: 'rafting guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un río rápido entre montañas. Hay un bote de goma amarillo. Tomi es guía. Tiene un casco rojo.', en: 'It is a fast river between mountains. There is a yellow rubber boat. Tomi is a guide. He has a red helmet.' },
          opener: { es: '¡Hola! Soy Tomi. ¡Vamos al río! ¿Tienes miedo?', en: 'Hi! I am Tomi. Let’s go to the river! Are you scared?' },
          decide: {
            ask: { es: 'Tomi te da un casco y un chaleco. ¿Qué dices?', en: 'Tomi gives you a helmet and a life jacket. What do you say?' },
            options: [
              { say: { es: '¡Estoy listo!', en: 'I am ready!' }, then: { es: 'Tomi dice: «¡Muy bien! Rema fuerte».', en: 'Tomi says: “Very good! Paddle hard.”' } },
              { say: { es: 'Tengo un poco de miedo.', en: 'I am a little scared.' }, then: { es: 'Tomi dice: «Es normal. Yo estoy aquí».', en: 'Tomi says: “It is normal. I am here.”' } },
              { say: { es: 'El agua está fría, ¿no?', en: 'The water is cold, isn’t it?' }, then: { es: 'Tomi ríe: «¡Muy fría! Es agua de nieve».', en: 'Tomi laughs: “Very cold! It is snow water.”' } },
            ],
          },
          twist: { es: 'Una ola grande moja a todos. ¡Estás muy mojado! ¿Qué dices?', en: 'A big wave soaks everyone. You are very wet! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la aventura?', en: 'Do you like adventure?' }, help: { es: 'Sí, me encanta. / No, prefiero la calma.', en: 'Yes, I love it. / No, I prefer calm.' }, follow: [{ es: '¿Qué aventura hiciste?', en: 'What adventure have you done?' }, { es: '¿Qué quieres hacer?', en: 'What do you want to do?' }] },
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, sé nadar. / No, no sé.', en: 'Yes, I can swim. / No, I can’t.' }, follow: [{ es: '¿Nadas bien?', en: 'Do you swim well?' }, { es: '¿Dónde nadas?', en: 'Where do you swim?' }] },
            { q: { es: '¿Hay ríos en tu ciudad?', en: 'Are there rivers in your city?' }, help: { es: 'Sí, hay un río. / No, no hay.', en: 'Yes, there is a river. / No, there isn’t.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Está limpio?', en: 'Is it clean?' }] },
            { q: { es: '¿Qué te da miedo?', en: 'What scares you?' }, help: { es: 'Me da miedo… / No me da miedo nada.', en: '… scares me. / Nothing scares me.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'el río', en: 'the river' }, { es: 'el casco', en: 'the helmet' }, { es: 'remar', en: 'to paddle' }, { es: 'mojado', en: 'wet' }, { es: 'la ola', en: 'the wave' }],
        },
        A1: {
          scene: { es: 'En Potrerillos, a una hora de Mendoza, el río baja de la cordillera con mucha fuerza. Tomi lleva grupos de seis personas en un bote. Antes de salir, explica las órdenes: «adelante», «atrás», «¡al piso!».', en: 'In Potrerillos, an hour from Mendoza, the river comes down from the mountains with great force. Tomi takes groups of six in a raft. Before setting off, he explains the commands: “forward”, “back”, “get down!”.' },
          opener: { es: 'Si te caes al agua, no te asustes: el chaleco te mantiene arriba. Pones los pies adelante, como si estuvieras sentado en un sillón, y esperas que te busquemos. ¿Alguna pregunta antes de salir?', en: 'If you fall in the water, don’t panic: the life jacket keeps you up. Put your feet forward, as if you were sitting in an armchair, and wait for us to get you. Any questions before we go?' },
          decide: {
            ask: { es: 'Tomi pregunta quién quiere ir adelante, donde se moja más. ¿Qué haces?', en: 'Tomi asks who wants to sit at the front, where you get wettest. What do you do?' },
            options: [
              { say: { es: 'Levanto la mano: ¡yo voy adelante!', en: 'I raise my hand: I’ll go at the front!' }, then: { es: 'En el primer rápido recibes toda el agua en la cara. Todos se ríen, tú también.', en: 'On the first rapid you take all the water in your face. Everyone laughs, you too.' } },
              { say: { es: 'Prefiero ir atrás, cerca de Tomi.', en: 'I prefer to sit at the back, near Tomi.' }, then: { es: 'Tomi te enseña a usar el remo para girar el bote. Al final, te deja dirigir un tramo tranquilo.', en: 'Tomi teaches you to use the paddle to turn the raft. In the end, he lets you steer a calm stretch.' } },
              { say: { es: 'Me siento en el medio, por las dudas.', en: 'I sit in the middle, just in case.' }, then: { es: 'Es el lugar más seguro. Ves todo el paisaje y casi no te mojas.', en: 'It’s the safest spot. You see the whole landscape and hardly get wet.' } },
            ],
          },
          twist: { es: 'Una chica del grupo se cae al agua en un rápido. Tomi te grita: «¡Pásale el remo!».', en: 'A girl in the group falls into the water on a rapid. Tomi shouts at you: “Pass her the paddle!”' },
          questions: [
            { q: { es: '¿Prefieres ir adelante o atrás en una aventura?', en: 'Do you prefer being at the front or the back on an adventure?' }, help: { es: 'Prefiero adelante porque… / Prefiero atrás porque…', en: 'I prefer the front because… / I prefer the back because…' }, follow: [{ es: '¿Y en la vida?', en: 'And in life?' }, { es: '¿Te gusta dirigir?', en: 'Do you like leading?' }] },
            { q: { es: '¿Escuchas las instrucciones antes de hacer algo nuevo?', en: 'Do you listen to instructions before doing something new?' }, help: { es: 'Sí, siempre. / No, aprendo haciendo.', en: 'Yes, always. / No, I learn by doing.' }, follow: [{ es: '¿Te pasó algo por no escuchar?', en: 'Did something happen because you didn’t listen?' }, { es: '¿Lees los manuales?', en: 'Do you read manuals?' }] },
            { q: { es: '¿Ayudaste alguna vez a alguien en una emergencia?', en: 'Have you ever helped someone in an emergency?' }, help: { es: 'Sí, una vez… / No, pero sabría…', en: 'Yes, once… / No, but I would know how to…' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Tenías miedo?', en: 'Were you scared?' }] },
            { q: { es: '¿Qué deporte de agua te gustaría probar?', en: 'What water sport would you like to try?' }, help: { es: 'Me gustaría probar…', en: 'I would like to try…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'Who with?' }] },
          ],
          words: [{ es: 'el bote', en: 'the raft, boat' }, { es: 'el rápido', en: 'the rapid' }, { es: 'el remo', en: 'the paddle, oar' }, { es: 'el tramo', en: 'the stretch' }, { es: 'por las dudas', en: 'just in case (Argentina)' }],
        },
        A2: {
          scene: { es: 'Tomi creció en Mendoza y de chico quería ser futbolista. Una lesión en la rodilla terminó con ese sueño a los diecisiete años. Un amigo lo llevó al río para animarlo y desde entonces no salió del agua. Ahora tiene su propia empresa con tres botes.', en: 'Tomi grew up in Mendoza and as a boy wanted to be a footballer. A knee injury ended that dream at seventeen. A friend took him to the river to cheer him up, and he hasn’t left the water since. Now he has his own company with three rafts.' },
          opener: { es: 'Cuando me lesioné, pensé que se terminaba mi vida. Lloré meses. Y mira ahora: trabajo en el lugar más lindo del mundo. A veces lo peor que te pasa te lleva a lo mejor. ¿Te pasó algo así?', en: 'When I got injured, I thought my life was over. I cried for months. And look now: I work in the most beautiful place in the world. Sometimes the worst thing that happens to you leads you to the best. Has something like that happened to you?' },
          decide: {
            ask: { es: 'Un chico de dieciséis años, con la pierna enyesada, mira los botes desde la orilla. ¿Qué le sugieres a Tomi?', en: 'A sixteen-year-old boy with his leg in plaster watches the rafts from the bank. What do you suggest to Tomi?' },
            options: [
              { say: { es: 'Que hable con él y le cuente su historia.', en: 'Talk to him and tell him his story.' }, then: { es: 'El chico era jugador de un club y se lesionó el mes pasado. Escucha a Tomi sin decir nada, pero sonríe.', en: 'The boy played for a club and got injured last month. He listens to Tomi without saying anything, but smiles.' } },
              { say: { es: 'Que lo invite a ayudar en la base cuando se recupere.', en: 'Invite him to help at the base when he recovers.' }, then: { es: 'Dos meses después el chico aparece con muletas para «aprender a inflar botes».', en: 'Two months later the boy turns up on crutches to “learn how to inflate rafts”.' } },
              { say: { es: 'Que no se meta: no lo conoce.', en: 'Don’t get involved: he doesn’t know him.' }, then: { es: 'Tomi sigue trabajando, pero mira al chico toda la tarde.', en: 'Tomi keeps working, but watches the boy all afternoon.' } },
            ],
          },
          twist: { es: 'El chico resulta ser el hijo del amigo que llevó a Tomi al río por primera vez.', en: 'The boy turns out to be the son of the friend who took Tomi to the river for the first time.' },
          questions: [
            { q: { es: '¿Algo malo que te pasó terminó siendo bueno?', en: 'Did something bad that happened to you end up being good?' }, help: { es: 'Sí, cuando… al final… / No, todavía no.', en: 'Yes, when… in the end… / No, not yet.' }, follow: [{ es: '¿Cuánto tiempo tardaste en verlo?', en: 'How long did it take you to see it?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué querías ser de chico?', en: 'What did you want to be as a kid?' }, help: { es: 'Quería ser… porque…', en: 'I wanted to be… because…' }, follow: [{ es: '¿Por qué cambiaste?', en: 'Why did you change?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Tuviste alguna lesión o enfermedad que te cambió los planes?', en: 'Have you had an injury or illness that changed your plans?' }, help: { es: 'Sí, me rompí… / Estuve enfermo de…', en: 'Yes, I broke… / I was ill with…' }, follow: [{ es: '¿Quién te ayudó?', en: 'Who helped you?' }, { es: '¿Cómo pasabas los días?', en: 'How did you spend your days?' }] },
            { q: { es: '¿Quién te animó cuando estabas triste?', en: 'Who cheered you up when you were sad?' }, help: { es: 'Me animó mi… / Nadie, lo hice solo.', en: 'My… cheered me up. / Nobody, I did it alone.' }, follow: [{ es: '¿Qué hizo?', en: 'What did they do?' }, { es: '¿Se lo agradeciste?', en: 'Did you thank them?' }] },
          ],
          words: [{ es: 'la lesión', en: 'the injury' }, { es: 'la rodilla', en: 'the knee' }, { es: 'animar', en: 'to cheer up' }, { es: 'enyesado', en: 'in a plaster cast' }, { es: 'las muletas', en: 'crutches' }],
        },
        B1: {
          scene: { es: 'El gobierno de Mendoza planea construir una nueva represa en el río para dar agua y energía a la ciudad. El proyecto inundaría el tramo donde trabaja Tomi y otras diez empresas de turismo. Los agricultores, en cambio, lo apoyan: necesitan agua para las cosechas.', en: 'The Mendoza government plans to build a new dam on the river to supply water and energy to the city. The project would flood the stretch where Tomi and ten other tourism companies work. Farmers, on the other hand, support it: they need water for their crops.' },
          opener: { es: 'No soy tonto: sé que Mendoza necesita agua. Mis viejos son agricultores. Pero un río libre también vale algo, aunque no se pueda medir en litros. Si lo encerramos todo, ¿qué les vamos a mostrar a nuestros hijos? ¿Una foto?', en: 'I’m not stupid: I know Mendoza needs water. My parents are farmers. But a free river is worth something too, even if it can’t be measured in litres. If we lock everything in, what will we show our children? A photo?' },
          decide: {
            ask: { es: 'Tomi va a hablar en una audiencia pública. ¿Qué argumento le recomiendas usar?', en: 'Tomi is going to speak at a public hearing. Which argument do you recommend he use?' },
            options: [
              { say: { es: 'El económico: cuántos empleos genera el turismo de aventura.', en: 'The economic one: how many jobs adventure tourism creates.' }, then: { es: 'Los números sorprenden. Un funcionario pide los datos para estudiarlos.', en: 'The numbers surprise people. An official asks for the data to study it.' } },
              { say: { es: 'Una alternativa: modernizar el riego para ahorrar agua sin represa.', en: 'An alternative: modernise irrigation to save water without a dam.' }, then: { es: 'Su padre, agricultor, se levanta y lo apoya en público. Es la primera vez que lo hace.', en: 'His father, a farmer, stands up and supports him publicly. It’s the first time he’s done so.' } },
              { say: { es: 'El emocional: el río como parte de la identidad de Mendoza.', en: 'The emotional one: the river as part of Mendoza’s identity.' }, then: { es: 'Muchos aplauden. Un agricultor le contesta que la identidad no se come.', en: 'Many applaud. A farmer replies that you can’t eat identity.' } },
            ],
          },
          twist: { es: 'Una empresa de energía ofrece a Tomi trabajar como guía en el futuro lago de la represa, con un sueldo fijo mucho mejor.', en: 'An energy company offers Tomi a job as a guide on the future dam lake, with a much better fixed salary.' },
          questions: [
            { q: { es: '¿Cómo se decide entre necesidades que chocan, como agua para comer y naturaleza libre?', en: 'How do you decide between clashing needs, like water to eat and free nature?' }, help: { es: 'Habría que priorizar… / Lo ideal sería encontrar…', en: 'You’d have to prioritise… / The ideal would be to find…' }, follow: [{ es: '¿Quién debería decidir?', en: 'Who should decide?' }, { es: '¿Hay un caso así en tu país?', en: 'Is there a case like this in your country?' }] },
            { q: { es: '¿Algo que no se puede medir en dinero puede pesar en una decisión pública?', en: 'Can something that can’t be measured in money weigh in a public decision?' }, help: { es: 'Creo que debería, porque… / Es difícil, porque…', en: 'I think it should, because… / It’s hard, because…' }, follow: [{ es: '¿Cómo se defiende?', en: 'How is it defended?' }, { es: '¿Un ejemplo?', en: 'An example?' }] },
            { q: { es: '¿Aceptarías trabajar para la empresa que destruye lo que defendías?', en: 'Would you work for the company that destroys what you defended?' }, help: { es: 'Lo aceptaría si… / Nunca, porque…', en: 'I would accept if… / Never, because…' }, follow: [{ es: '¿Sería traicionarte?', en: 'Would it be betraying yourself?' }, { es: '¿Y si tuvieras hijos que mantener?', en: 'And if you had children to support?' }] },
            { q: { es: '¿Qué lugar natural te gustaría que conocieran tus nietos?', en: 'What natural place would you like your grandchildren to know?' }, help: { es: 'Me gustaría que conocieran… porque…', en: 'I would like them to know… because…' }, follow: [{ es: '¿Está en peligro?', en: 'Is it in danger?' }, { es: '¿Qué harías para protegerlo?', en: 'What would you do to protect it?' }] },
          ],
          words: [{ es: 'la represa', en: 'the dam' }, { es: 'inundar', en: 'to flood' }, { es: 'el agricultor', en: 'the farmer' }, { es: 'los viejos', en: 'one’s parents (Argentina, informal)' }, { es: 'chocar', en: 'to clash' }],
        },
      },
    },
  ],
};
