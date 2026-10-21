// Colorado · the Rockies above Denver. Five places, four levels each (A0, A1,
// A2, B1). Every level is written on its own: same place and people, different
// situations, decisions and questions. English is a natural translation.
export default {
  id: 'colorado',
  spots: [
    // ------------------------------------------------------------ the mountain town
    {
      id: 'pueblo',
      name: { es: 'El pueblo de montaña', en: 'The mountain town' },
      who: { name: 'Hank', role: { es: 'dueño de la ferretería', en: 'hardware store owner' } },
      levels: {
        A0: {
          scene: { es: 'Es un pueblo pequeño en la montaña. Hay nieve. Las casas son de madera. Hank tiene una tienda.', en: 'It is a small town in the mountains. There is snow. The houses are made of wood. Hank has a shop.' },
          opener: { es: '¡Hola! Soy Hank. Hace frío hoy. ¿Tienes guantes?', en: 'Hi! I am Hank. It is cold today. Do you have gloves?' },
          decide: {
            ask: { es: 'Hank vende gorros, guantes y bufandas. ¿Qué compras?', en: 'Hank sells hats, gloves and scarves. What do you buy?' },
            options: [
              { say: { es: 'Un gorro rojo, por favor.', en: 'A red hat, please.' }, then: { es: 'Hank dice: «¡Muy bonito! Son diez dólares».', en: 'Hank says: “Very nice! It is ten dollars.”' } },
              { say: { es: 'Unos guantes, por favor.', en: 'Some gloves, please.' }, then: { es: 'Los guantes son grandes y calientes. ¡Perfecto!', en: 'The gloves are big and warm. Perfect!' } },
              { say: { es: 'Una bufanda azul.', en: 'A blue scarf.' }, then: { es: 'Hank dice: «Es la última. ¡Qué suerte!».', en: 'Hank says: “It is the last one. How lucky!”' } },
            ],
          },
          twist: { es: '¡Un ciervo grande camina por la calle! Hank no está sorprendido. ¿Qué dices?', en: 'A big deer walks down the street! Hank is not surprised. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la nieve?', en: 'Do you like snow?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Hay nieve en tu ciudad?', en: 'Is there snow in your city?' }, { es: '¿Juegas en la nieve?', en: 'Do you play in the snow?' }] },
            { q: { es: '¿Vives en una ciudad o en un pueblo?', en: 'Do you live in a city or a town?' }, help: { es: 'Vivo en una ciudad. / Vivo en un pueblo.', en: 'I live in a city. / I live in a town.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Tienes frío ahora?', en: 'Are you cold now?' }, help: { es: 'Sí, tengo frío. / No, tengo calor.', en: 'Yes, I am cold. / No, I am hot.' }, follow: [{ es: '¿Qué ropa llevas?', en: 'What clothes are you wearing?' }, { es: '¿Te gusta el invierno?', en: 'Do you like winter?' }] },
            { q: { es: '¿Qué ropa usas en invierno?', en: 'What clothes do you wear in winter?' }, help: { es: 'Uso un abrigo, un gorro…', en: 'I wear a coat, a hat…' }, follow: [{ es: '¿De qué color es tu abrigo?', en: 'What color is your coat?' }, { es: '¿Usas guantes?', en: 'Do you wear gloves?' }] },
          ],
          words: [
            { es: 'la nieve', en: 'the snow' }, { es: 'el pueblo', en: 'the town' }, { es: 'el gorro', en: 'the hat, the beanie' },
            { es: 'los guantes', en: 'the gloves' }, { es: 'la bufanda', en: 'the scarf' }, { es: 'el ciervo', en: 'the deer' },
          ],
        },
        A1: {
          scene: { es: 'Un antiguo pueblo minero en las Montañas Rocosas, a tres mil metros de altura. La calle principal tiene edificios de madera de 1880, un salón del Viejo Oeste y la ferretería de Hank, que abrió su bisabuelo.', en: 'An old mining town in the Rocky Mountains, almost ten thousand feet up. Main Street has wooden buildings from 1880, an Old West saloon and Hank’s hardware store, which his great-grandfather opened.' },
          opener: { es: 'Mi bisabuelo vino aquí a buscar plata. No encontró mucha, pero abrió esta tienda y vendió palas a todos los que buscaban plata. ¡Él sí se hizo rico! ¿Tú conoces la historia de tu bisabuelo o tu bisabuela?', en: 'My great-grandfather came here looking for silver. He didn’t find much, but he opened this store and sold shovels to everyone looking for silver. He did get rich! Do you know your great-grandparents’ story?' },
          decide: {
            ask: { es: 'Estás un poco mareado: es la altura. Hank te ofrece tres remedios. ¿Cuál eliges?', en: 'You feel a bit dizzy: it’s the altitude. Hank offers you three remedies. Which do you choose?' },
            options: [
              { say: { es: 'Mucha agua.', en: 'Lots of water.' }, then: { es: 'Hank te da una botella grande: «Aquí arriba, siempre tienes sed aunque no lo sientas».', en: 'Hank gives you a big bottle: “Up here, you’re always thirsty even if you don’t feel it.”' } },
              { say: { es: 'Sentarme un rato.', en: 'Sitting down for a while.' }, then: { es: 'Te sientas junto a la estufa de leña. Hank te cuenta historias de fantasmas mineros.', en: 'You sit by the wood stove. Hank tells you stories about miners’ ghosts.' } },
              { say: { es: 'Un caramelo de jengibre.', en: 'A ginger candy.' }, then: { es: 'Es picante y raro, pero en diez minutos te sientes mejor.', en: 'It’s spicy and strange, but in ten minutes you feel better.' } },
            ],
          },
          twist: { es: 'Entra una mujer con un bebé y pregunta por una pala para nieve. Hank le dice que el pronóstico anuncia un metro de nieve esta noche. ¿Qué le preguntas a Hank?', en: 'A woman with a baby comes in and asks for a snow shovel. Hank tells her the forecast says three feet of snow tonight. What do you ask Hank?' },
          questions: [
            { q: { es: '¿Conoces la historia de tus bisabuelos?', en: 'Do you know the story of your great-grandparents?' }, help: { es: 'Sí, mi bisabuelo era… / No, no sé mucho.', en: 'Yes, my great-grandfather was… / No, I don’t know much.' }, follow: [{ es: '¿De dónde eran?', en: 'Where were they from?' }, { es: '¿Quién te lo contó?', en: 'Who told you?' }] },
            { q: { es: '¿Estuviste alguna vez en un lugar muy alto?', en: 'Have you ever been somewhere very high up?' }, help: { es: 'Sí, estuve en… / No, nunca.', en: 'Yes, I was in… / No, never.' }, follow: [{ es: '¿Te sentiste bien?', en: 'Did you feel OK?' }, { es: '¿Qué hiciste allí?', en: 'What did you do there?' }] },
            { q: { es: '¿Hay tiendas familiares en tu barrio?', en: 'Are there family-run shops in your neighborhood?' }, help: { es: 'Sí, hay una… / No, solo hay cadenas.', en: 'Yes, there is a… / No, there are only chains.' }, follow: [{ es: '¿Compras allí?', en: 'Do you shop there?' }, { es: '¿Conoces a los dueños?', en: 'Do you know the owners?' }] },
            { q: { es: '¿Qué haces cuando hay una tormenta?', en: 'What do you do when there’s a storm?' }, help: { es: 'Me quedo en casa y… / Salgo a mirar…', en: 'I stay home and… / I go out to look…' }, follow: [{ es: '¿Te dan miedo?', en: 'Are you afraid of them?' }, { es: '¿Cuál fue la peor?', en: 'Which was the worst?' }] },
          ],
          words: [
            { es: 'minero', en: 'mining, miner' }, { es: 'la plata', en: 'the silver' }, { es: 'la pala', en: 'the shovel' },
            { es: 'la ferretería', en: 'the hardware store' }, { es: 'mareado', en: 'dizzy' }, { es: 'el pronóstico', en: 'the forecast' },
          ],
        },
        A2: {
          scene: { es: 'Anoche cayó tanta nieve que la carretera al pueblo está cerrada. No hay electricidad desde hace doce horas. La ferretería de Hank tiene una estufa de leña y un generador, y poco a poco se llena de vecinos.', en: 'So much snow fell last night that the road to town is closed. There’s been no power for twelve hours. Hank’s hardware store has a wood stove and a generator, and little by little it fills up with neighbors.' },
          opener: { es: 'En el invierno de 1983 nos quedamos aislados nueve días. Mi padre abrió la tienda y repartió todo lo que teníamos: velas, leña, comida. Nadie pagó nada y nadie lo olvidó. Ahora me toca a mí. ¿Alguna vez viviste algo así con tus vecinos?', en: 'In the winter of 1983 we were cut off for nine days. My father opened the store and handed out everything we had: candles, firewood, food. Nobody paid a thing and nobody forgot. Now it’s my turn. Have you ever lived through something like that with your neighbors?' },
          decide: {
            ask: { es: 'Solo queda gasolina para que el generador funcione seis horas. Hank te pregunta qué hacer con ella.', en: 'There’s only enough gas to run the generator for six hours. Hank asks you what to do with it.' },
            options: [
              { say: { es: 'Usarla de noche, cuando hace más frío.', en: 'Use it at night, when it’s coldest.' }, then: { es: 'Durante el día, todos cortan leña juntos. Por la noche, la luz vuelve y alguien saca una guitarra.', en: 'During the day, everyone chops wood together. At night, the lights come back and someone pulls out a guitar.' } },
              { say: { es: 'Guardarla para una emergencia médica.', en: 'Save it for a medical emergency.' }, then: { es: 'Esa noche, un vecino mayor necesita su máquina de oxígeno. Gracias a ti, la gasolina está allí.', en: 'That night, an older neighbor needs his oxygen machine. Thanks to you, the gas is there.' } },
              { say: { es: 'Cargar los teléfonos de todos ahora.', en: 'Charge everyone’s phones now.' }, then: { es: 'Todos llaman a sus familias. Más tarde, la batería se acaba justo cuando oscurece.', en: 'Everyone calls their families. Later, the power runs out just as it gets dark.' } },
            ],
          },
          twist: { es: 'Llega un turista furioso: dice que su hotel no tiene calefacción y exige que Hank le venda el generador «a cualquier precio». ¿Qué le dirías tú?', en: 'A furious tourist shows up: he says his hotel has no heating and demands that Hank sell him the generator “at any price.” What would you say to him?' },
          questions: [
            { q: { es: '¿Alguna vez te quedaste sin luz o sin agua mucho tiempo?', en: 'Have you ever been without power or water for a long time?' }, help: { es: 'Sí, una vez… durante… / No, nunca me pasó.', en: 'Yes, once… for… / No, it’s never happened to me.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Qué fue lo más difícil?', en: 'What was the hardest part?' }] },
            { q: { es: '¿Conoces bien a tus vecinos?', en: 'Do you know your neighbors well?' }, help: { es: 'Sí, conozco a… / No mucho, porque…', en: 'Yes, I know… / Not much, because…' }, follow: [{ es: '¿Te ayudaron alguna vez?', en: 'Have they ever helped you?' }, { es: '¿Antes era diferente?', en: 'Was it different before?' }] },
            { q: { es: '¿Qué cosas guardarías en caso de emergencia?', en: 'What would you keep in case of an emergency?' }, help: { es: 'Guardaría… porque…', en: 'I would keep… because…' }, follow: [{ es: '¿Lo tienes en casa?', en: 'Do you have it at home?' }, { es: '¿Tu familia tiene un plan?', en: 'Does your family have a plan?' }] },
            { q: { es: '¿Qué hacía tu familia en invierno cuando eras pequeño?', en: 'What did your family do in winter when you were little?' }, help: { es: 'Cuando era pequeño/a, en invierno nosotros…', en: 'When I was little, in winter we…' }, follow: [{ es: '¿Lo extrañas?', en: 'Do you miss it?' }, { es: '¿Sigues haciéndolo?', en: 'Do you still do it?' }] },
          ],
          words: [
            { es: 'aislado', en: 'cut off, isolated' }, { es: 'la leña', en: 'the firewood' }, { es: 'el generador', en: 'the generator' },
            { es: 'la vela', en: 'the candle' }, { es: 'repartir', en: 'to hand out' }, { es: 'la calefacción', en: 'the heating' },
          ],
        },
        B1: {
          scene: { es: 'Una empresa quiere reabrir la vieja mina del pueblo para extraer un mineral que se usa en baterías de coches eléctricos. Traería doscientos empleos bien pagados, pero también camiones, ruido y riesgo para el río del que bebe el pueblo. Mañana hay votación.', en: 'A company wants to reopen the town’s old mine to extract a mineral used in electric car batteries. It would bring two hundred well-paid jobs, but also trucks, noise and risk to the river the town drinks from. The vote is tomorrow.' },
          opener: { es: 'Es irónico: la mina serviría para fabricar coches «verdes», pero aquí arriba nos ensuciaría el río. Mi nieta se fue a Denver porque aquí no hay trabajo; con la mina podría volver. Mi hija, en cambio, es bióloga y dice que el agua contaminada no se recupera en cien años. No sé qué votar. ¿Y tú?', en: 'It’s ironic: the mine would help build “green” cars, but up here it would dirty our river. My granddaughter moved to Denver because there are no jobs here; with the mine she could come back. My daughter, on the other hand, is a biologist and says polluted water doesn’t recover in a hundred years. I don’t know how to vote. What about you?' },
          decide: {
            ask: { es: 'Hank tiene que hablar primero en la reunión del pueblo. Te pide que le ayudes a decidir su postura.', en: 'Hank has to speak first at the town meeting. He asks you to help him decide his position.' },
            options: [
              { say: { es: 'A favor, con controles ambientales independientes.', en: 'In favor, with independent environmental checks.' }, then: { es: 'La empresa acepta pagar inspectores elegidos por el pueblo. Algunos vecinos desconfían: «¿Y quién controla a los inspectores?».', en: 'The company agrees to pay inspectors chosen by the town. Some neighbors are suspicious: “And who checks the inspectors?”' } },
              { say: { es: 'En contra: el agua es lo primero.', en: 'Against: water comes first.' }, then: { es: 'El discurso de Hank emociona a la sala. Pero al salir, un joven le dice: «Usted ya tiene su tienda. Yo no tengo nada».', en: 'Hank’s speech moves the room. But on the way out, a young man tells him: “You already have your store. I have nothing.”' } },
              { say: { es: 'Pedir más tiempo y un estudio serio.', en: 'Ask for more time and a serious study.' }, then: { es: 'La votación se aplaza seis meses. La empresa amenaza con irse a otro estado.', en: 'The vote is postponed six months. The company threatens to go to another state.' } },
            ],
          },
          twist: { es: 'Hank descubre que la empresa ya compró, en secreto, la mitad de los terrenos alrededor de la mina. Aunque el pueblo vote que no, podrían empezar a trabajar en terreno privado. ¿Cómo cambia esto la discusión?', en: 'Hank finds out the company has already secretly bought half the land around the mine. Even if the town votes no, they could start working on private land. How does this change the debate?' },
          questions: [
            { q: { es: '¿Se puede proteger el medio ambiente sin perjudicar a la gente que necesita trabajo?', en: 'Can you protect the environment without hurting people who need jobs?' }, help: { es: 'Creo que es posible si… / Me parece difícil, porque…', en: 'I think it’s possible if… / It seems hard to me, because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Quién debería pagar la transición?', en: 'Who should pay for the transition?' }] },
            { q: { es: '¿Es justo que un lugar sufra para que otros tengan tecnología «limpia»?', en: 'Is it fair for one place to suffer so others can have “clean” technology?' }, help: { es: 'No me parece justo que… / Es inevitable, aunque…', en: 'I don’t think it’s fair that… / It’s inevitable, although…' }, follow: [{ es: '¿Sabes de dónde vienen los materiales de tu teléfono?', en: 'Do you know where the materials in your phone come from?' }, { es: '¿Te importa?', en: 'Do you care?' }] },
            { q: { es: '¿Qué harías si tu familia estuviera dividida en una decisión así?', en: 'What would you do if your family were split on a decision like this?' }, help: { es: 'Si mi familia estuviera dividida, yo… / Intentaría…', en: 'If my family were split, I would… / I’d try to…' }, follow: [{ es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }, { es: '¿Quién suele tener la última palabra?', en: 'Who usually has the last word?' }] },
            { q: { es: '¿Los pueblos pequeños deberían cambiar para sobrevivir o mantenerse como son?', en: 'Should small towns change to survive or stay as they are?' }, help: { es: 'Creo que deberían… para que… / Prefiero que se mantengan, aunque…', en: 'I think they should… so that… / I’d rather they stayed the same, even though…' }, follow: [{ es: '¿Vivirías en un pueblo pequeño?', en: 'Would you live in a small town?' }, { es: '¿Qué le falta a tu ciudad?', en: 'What does your city lack?' }] },
          ],
          words: [
            { es: 'reabrir', en: 'to reopen' }, { es: 'extraer', en: 'to extract, to mine' }, { es: 'la votación', en: 'the vote' },
            { es: 'perjudicar', en: 'to harm, to hurt' }, { es: 'aplazar', en: 'to postpone' }, { es: 'desconfiar', en: 'to distrust' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the cozy café
    {
      id: 'cafe',
      name: { es: 'La cafetería acogedora', en: 'The cozy café' },
      who: { name: 'Sofía', role: { es: 'dueña de la cafetería', en: 'café owner' } },
      levels: {
        A0: {
          scene: { es: 'Es una cafetería pequeña. Hay una chimenea. Afuera hay nieve. Sofía hace chocolate caliente.', en: 'It is a small café. There is a fireplace. Outside there is snow. Sofía makes hot chocolate.' },
          opener: { es: '¡Hola! Soy Sofía. ¿Quieres algo caliente?', en: 'Hi! I am Sofía. Do you want something hot?' },
          decide: {
            ask: { es: 'Sofía tiene café, té y chocolate caliente. ¿Qué tomas?', en: 'Sofía has coffee, tea and hot chocolate. What do you have?' },
            options: [
              { say: { es: 'Un café, por favor.', en: 'A coffee, please.' }, then: { es: 'El café es muy bueno. Hay un corazón en la espuma.', en: 'The coffee is very good. There is a heart in the foam.' } },
              { say: { es: 'Un té, por favor.', en: 'A tea, please.' }, then: { es: 'Sofía dice: «Es té de montaña. ¡Muy rico!».', en: 'Sofía says: “It is mountain tea. Very good!”' } },
              { say: { es: 'Un chocolate caliente.', en: 'A hot chocolate.' }, then: { es: '¡Tiene nubes de azúcar encima! Es muy dulce.', en: 'It has marshmallows on top! It is very sweet.' } },
            ],
          },
          twist: { es: 'Un perro grande entra en la cafetería. Está lleno de nieve. ¿Qué dices?', en: 'A big dog comes into the café. It is covered in snow. What do you say?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, tomo café. / No, tomo té.', en: 'Yes, I drink coffee. / No, I drink tea.' }, follow: [{ es: '¿Con leche?', en: 'With milk?' }, { es: '¿Cuántos cafés al día?', en: 'How many coffees a day?' }] },
            { q: { es: '¿Te gusta el chocolate?', en: 'Do you like chocolate?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Chocolate negro o con leche?', en: 'Dark or milk chocolate?' }, { es: '¿Comes chocolate cada día?', en: 'Do you eat chocolate every day?' }] },
            { q: { es: '¿Vas a cafeterías?', en: 'Do you go to cafés?' }, help: { es: 'Sí, voy a… / No, tomo café en casa.', en: 'Yes, I go to… / No, I have coffee at home.' }, follow: [{ es: '¿Con quién vas?', en: 'Who do you go with?' }, { es: '¿Trabajas en cafeterías?', en: 'Do you work in cafés?' }] },
            { q: { es: '¿Tienes perro?', en: 'Do you have a dog?' }, help: { es: 'Sí, tengo un perro. / No, tengo un gato. / No tengo animales.', en: 'Yes, I have a dog. / No, I have a cat. / I don’t have pets.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is its name?' }, { es: '¿Es grande o pequeño?', en: 'Is it big or small?' }] },
          ],
          words: [
            { es: 'la cafetería', en: 'the café' }, { es: 'caliente', en: 'hot' }, { es: 'la chimenea', en: 'the fireplace' },
            { es: 'el té', en: 'the tea' }, { es: 'la espuma', en: 'the foam' }, { es: 'el perro', en: 'the dog' },
          ],
        },
        A1: {
          scene: { es: 'Una cafetería de madera en la calle principal, con sillones viejos, libros y una chimenea. Huele a canela. Sofía nació en Ciudad de México y vive en Colorado desde hace ocho años. Hoy hay esquiadores, estudiantes y un señor que lee el periódico.', en: 'A wooden café on Main Street, with old armchairs, books and a fireplace. It smells of cinnamon. Sofía was born in Mexico City and has lived in Colorado for eight years. Today there are skiers, students and a man reading the newspaper.' },
          opener: { es: 'Cuando llegué, no sabía qué era la nieve de verdad. El primer invierno lloré de frío. Ahora me encanta: todos entran aquí para calentarse y me cuentan su vida. ¿Cuál es tu bebida favorita para un día frío?', en: 'When I arrived, I didn’t know what real snow was. My first winter I cried from the cold. Now I love it: everyone comes in here to warm up and tells me about their life. What’s your favorite drink for a cold day?' },
          decide: {
            ask: { es: 'No hay mesas libres. Solo queda un sillón al lado del señor del periódico. ¿Qué haces?', en: 'There are no free tables. There’s only one armchair left next to the man with the newspaper. What do you do?' },
            options: [
              { say: { es: 'Le pregunto si puedo sentarme.', en: 'I ask him if I can sit down.' }, then: { es: 'El señor sonríe y te ofrece la mitad del periódico. Se llama Walter y era profesor de geografía.', en: 'The man smiles and offers you half of the newspaper. His name is Walter and he used to be a geography teacher.' } },
              { say: { es: 'Me siento en la barra con Sofía.', en: 'I sit at the counter with Sofía.' }, then: { es: 'Sofía te enseña a preparar un café de olla, con canela y piloncillo, como en México.', en: 'Sofía shows you how to make café de olla, with cinnamon and brown sugar, like in Mexico.' } },
              { say: { es: 'Pido el café para llevar.', en: 'I get my coffee to go.' }, then: { es: 'Sales a la calle nevada con tu café. Las montañas están rosadas con el sol de la tarde.', en: 'You step out into the snowy street with your coffee. The mountains are pink in the afternoon sun.' } },
            ],
          },
          twist: { es: 'Sofía te muestra una pared llena de fotos: son clientes que se conocieron en la cafetería y después se casaron. ¡Hay once parejas! ¿Qué le preguntas?', en: 'Sofía shows you a wall full of photos: they’re customers who met at the café and later got married. There are eleven couples! What do you ask her?' },
          questions: [
            { q: { es: '¿Cuál es tu bebida favorita para un día frío?', en: 'What’s your favorite drink for a cold day?' }, help: { es: 'Mi bebida favorita es… porque…', en: 'My favorite drink is… because…' }, follow: [{ es: '¿La preparas tú?', en: 'Do you make it yourself?' }, { es: '¿Y para un día de calor?', en: 'And for a hot day?' }] },
            { q: { es: '¿Hablas con desconocidos en lugares públicos?', en: 'Do you talk to strangers in public places?' }, help: { es: 'Sí, a veces… / No, normalmente no.', en: 'Yes, sometimes… / No, not usually.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Conociste a alguien interesante así?', en: 'Did you meet anyone interesting that way?' }] },
            { q: { es: '¿Cómo fue tu primer día en un lugar nuevo?', en: 'What was your first day in a new place like?' }, help: { es: 'Mi primer día en… fue… porque…', en: 'My first day in… was… because…' }, follow: [{ es: '¿Lloraste?', en: 'Did you cry?' }, { es: '¿Qué te sorprendió?', en: 'What surprised you?' }] },
            { q: { es: '¿Tienes un lugar favorito para leer o estar tranquilo?', en: 'Do you have a favorite place to read or relax?' }, help: { es: 'Sí, me gusta ir a… / En mi casa, en…', en: 'Yes, I like going to… / At home, in…' }, follow: [{ es: '¿Qué lees?', en: 'What do you read?' }, { es: '¿Vas solo?', en: 'Do you go alone?' }] },
          ],
          words: [
            { es: 'el sillón', en: 'the armchair' }, { es: 'la canela', en: 'the cinnamon' }, { es: 'calentarse', en: 'to warm up' },
            { es: 'la barra', en: 'the counter' }, { es: 'para llevar', en: 'to go' }, { es: 'casarse', en: 'to get married' },
          ],
        },
        A2: {
          scene: { es: 'El dueño del edificio le subió el alquiler a Sofía un sesenta por ciento: el pueblo está de moda y quiere alquilar el local a una marca de ropa de esquí. Sofía tiene tres meses para decidir qué hace.', en: 'The building owner raised Sofía’s rent by sixty percent: the town is trendy and he wants to rent the space to a ski clothing brand. Sofía has three months to decide what to do.' },
          opener: { es: 'Cuando abrí, este pueblo estaba medio vacío. Mis clientes eran mineros jubilados y algún estudiante. Ahora vienen millonarios de Texas a comprar casas que usan dos semanas al año. Ayer un cliente me dijo que la cafetería «le daba vida al pueblo». Ojalá eso pagara el alquiler. ¿Tú qué harías?', en: 'When I opened, this town was half empty. My customers were retired miners and the odd student. Now millionaires come from Texas to buy houses they use two weeks a year. Yesterday a customer told me the café “brought the town to life.” I wish that paid the rent. What would you do?' },
          decide: {
            ask: { es: 'Sofía tiene tres opciones. ¿Cuál le recomiendas?', en: 'Sofía has three options. Which do you recommend?' },
            options: [
              { say: { es: 'Subir los precios y quedarse.', en: 'Raise prices and stay.' }, then: { es: 'El café cuesta siete dólares. Los turistas pagan sin problema; los vecinos empiezan a venir menos.', en: 'A coffee costs seven dollars. Tourists pay without a problem; locals start coming less.' } },
              { say: { es: 'Mudarse a un local más pequeño y barato.', en: 'Move to a smaller, cheaper place.' }, then: { es: 'El nuevo local está lejos del centro, pero los clientes fieles la siguen. Pierde la chimenea, no el alma.', en: 'The new place is far from the center, but loyal customers follow her. She loses the fireplace, not the soul.' } },
              { say: { es: 'Pedir ayuda a la comunidad.', en: 'Ask the community for help.' }, then: { es: 'Los vecinos organizan una colecta. En dos semanas reúnen la mitad del dinero. Sofía llora, esta vez de alegría.', en: 'The neighbors organize a fundraiser. In two weeks they raise half the money. Sofía cries, this time from joy.' } },
            ],
          },
          twist: { es: 'La marca de ropa de esquí le ofrece a Sofía trabajar como gerente de la tienda nueva, con buen sueldo y seguro médico. Tendría que cerrar la cafetería para siempre. ¿Qué le dirías?', en: 'The ski clothing brand offers Sofía a job as manager of the new store, with good pay and health insurance. She’d have to close the café for good. What would you tell her?' },
          questions: [
            { q: { es: '¿Cómo era tu barrio cuando llegaste y cómo es ahora?', en: 'What was your neighborhood like when you arrived and what is it like now?' }, help: { es: 'Cuando llegué, había… Ahora hay…', en: 'When I arrived, there was… Now there is…' }, follow: [{ es: '¿Te gusta el cambio?', en: 'Do you like the change?' }, { es: '¿Los precios subieron?', en: 'Have prices gone up?' }] },
            { q: { es: '¿Alguna vez tuviste que dejar un lugar que te gustaba?', en: 'Have you ever had to leave a place you liked?' }, help: { es: 'Sí, tuve que dejar… porque… / No, por suerte…', en: 'Yes, I had to leave… because… / No, luckily…' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Volviste?', en: 'Did you go back?' }] },
            { q: { es: '¿Prefieres tener tu propio negocio o trabajar para una empresa?', en: 'Would you rather have your own business or work for a company?' }, help: { es: 'Prefiero… porque…', en: 'I’d rather… because…' }, follow: [{ es: '¿Qué negocio abrirías?', en: 'What business would you open?' }, { es: '¿Qué te da miedo?', en: 'What scares you?' }] },
            { q: { es: '¿Qué lugar de tu ciudad «le da vida» al barrio?', en: 'What place in your city “brings the neighborhood to life”?' }, help: { es: 'Para mí es… porque allí…', en: 'For me it’s… because there…' }, follow: [{ es: '¿Desde cuándo existe?', en: 'How long has it been there?' }, { es: '¿Qué pasaría si cerrara?', en: 'What would happen if it closed?' }] },
          ],
          words: [
            { es: 'el alquiler', en: 'the rent' }, { es: 'el local', en: 'the premises, the space' }, { es: 'jubilado', en: 'retired' },
            { es: 'fiel', en: 'loyal' }, { es: 'la colecta', en: 'the fundraiser, the collection' }, { es: 'el seguro médico', en: 'health insurance' },
          ],
        },
        B1: {
          scene: { es: 'El pueblo debate una nueva ley: limitar las casas de alquiler vacacional para que los trabajadores locales puedan vivir allí. Sofía no encuentra camareros porque nadie puede pagar un alquiler en el pueblo; algunos de sus empleados viven en furgonetas o conducen dos horas cada día.', en: 'The town is debating a new law: limiting vacation rentals so local workers can live there. Sofía can’t find staff because nobody can afford rent in town; some of her employees live in vans or drive two hours each day.' },
          opener: { es: 'Mi mejor barista dormía en su coche a quince grados bajo cero. Lo descubrí por casualidad. Al mismo tiempo, en mi calle hay seis casas vacías once meses al año. A los dueños de esas casas los entiendo: es su propiedad y el alquiler turístico paga sus deudas. Pero algo no funciona. ¿Dónde pondrías tú el límite?', en: 'My best barista was sleeping in his car at five degrees Fahrenheit. I found out by chance. Meanwhile, on my street there are six houses empty eleven months a year. I understand those owners: it’s their property and vacation rentals pay their debts. But something isn’t working. Where would you draw the line?' },
          decide: {
            ask: { es: 'Sofía va a hablar en la reunión municipal. Te pide ayuda para elegir qué propuesta apoyar.', en: 'Sofía is going to speak at the town meeting. She asks you to help her choose which proposal to back.' },
            options: [
              { say: { es: 'Un impuesto alto a las casas vacías.', en: 'A high tax on empty houses.' }, then: { es: 'Los propietarios protestan, pero el dinero serviría para construir viviendas para trabajadores. La sala se divide.', en: 'Owners protest, but the money would go toward building worker housing. The room splits.' } },
              { say: { es: 'Un número máximo de licencias turísticas.', en: 'A cap on vacation rental licenses.' }, then: { es: 'Una agente inmobiliaria advierte que bajarán los precios de las casas. Algunos jóvenes aplauden justamente por eso.', en: 'A real estate agent warns house prices will drop. Some young people clap precisely because of that.' } },
              { say: { es: 'Que las empresas ofrezcan vivienda a sus empleados.', en: 'Have businesses provide housing for their staff.' }, then: { es: 'Los hoteles grandes aceptan. Los negocios pequeños, como el de Sofía, dicen que no pueden permitírselo.', en: 'The big hotels agree. Small businesses, like Sofía’s, say they can’t afford it.' } },
            ],
          },
          twist: { es: 'En plena reunión, un vecino revela que Sofía alquila a turistas el pequeño apartamento encima de la cafetería. Todos la miran. Ella explica que sin ese ingreso ya habría cerrado. ¿Es hipócrita? ¿Qué le dirías?', en: 'In the middle of the meeting, a neighbor reveals that Sofía rents the small apartment above the café to tourists. Everyone looks at her. She explains that without that income she’d already have closed. Is she a hypocrite? What would you tell her?' },
          questions: [
            { q: { es: '¿Debería el gobierno limitar lo que una persona hace con su propia casa?', en: 'Should the government limit what a person does with their own house?' }, help: { es: 'Creo que debería… cuando… / No creo que deba, porque…', en: 'I think it should… when… / I don’t think it should, because…' }, follow: [{ es: '¿Dónde está el límite?', en: 'Where’s the limit?' }, { es: '¿Qué pasa en tu ciudad?', en: 'What’s happening in your city?' }] },
            { q: { es: '¿Es posible defender una causa y, a la vez, beneficiarse del problema?', en: 'Is it possible to defend a cause and, at the same time, benefit from the problem?' }, help: { es: 'Sí, pasa mucho cuando… / Me parece incoherente que…', en: 'Yes, it happens a lot when… / I think it’s inconsistent that…' }, follow: [{ es: '¿Te pasó a ti?', en: 'Has it happened to you?' }, { es: '¿Cómo lo justificarías?', en: 'How would you justify it?' }] },
            { q: { es: '¿Qué debería pasar con los pueblos que dependen del turismo pero donde ya no pueden vivir sus trabajadores?', en: 'What should happen in towns that depend on tourism but where their workers can no longer live?' }, help: { es: 'Habría que… para que… / Sería mejor que…', en: 'They’d need to… so that… / It would be better if…' }, follow: [{ es: '¿Conoces un caso real?', en: 'Do you know a real case?' }, { es: '¿Viajarías a un lugar así?', en: 'Would you travel to a place like that?' }] },
            { q: { es: '¿Vivirías en una furgoneta para trabajar en un lugar que te encanta?', en: 'Would you live in a van to work somewhere you love?' }, help: { es: 'Sí, lo haría si… / No, porque necesito…', en: 'Yes, I’d do it if… / No, because I need…' }, follow: [{ es: '¿Por cuánto tiempo?', en: 'For how long?' }, { es: '¿Qué echarías de menos?', en: 'What would you miss?' }] },
          ],
          words: [
            { es: 'el alquiler vacacional', en: 'the vacation rental' }, { es: 'la furgoneta', en: 'the van' }, { es: 'el impuesto', en: 'the tax' },
            { es: 'la licencia', en: 'the license, the permit' }, { es: 'la vivienda', en: 'housing' }, { es: 'hipócrita', en: 'hypocritical' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the lake
    {
      id: 'lago',
      name: { es: 'El lago', en: 'The lake' },
      who: { name: 'Abby', role: { es: 'guía de kayak', en: 'kayak guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un lago azul. Hay montañas alrededor. El agua está muy fría. Abby tiene kayaks.', en: 'It is a blue lake. There are mountains around it. The water is very cold. Abby has kayaks.' },
          opener: { es: '¡Hola! Soy Abby. ¿Vamos en kayak? ¡Es fácil!', en: 'Hi! I am Abby. Shall we go kayaking? It is easy!' },
          decide: {
            ask: { es: 'Abby tiene un kayak amarillo, uno verde y uno para dos personas. ¿Cuál quieres?', en: 'Abby has a yellow kayak, a green one and one for two people. Which one do you want?' },
            options: [
              { say: { es: 'El amarillo.', en: 'The yellow one.' }, then: { es: 'Remas solo. ¡Es muy bonito!', en: 'You paddle alone. It is very beautiful!' } },
              { say: { es: 'El verde.', en: 'The green one.' }, then: { es: 'El kayak verde es rápido. ¡Vas primero!', en: 'The green kayak is fast. You go first!' } },
              { say: { es: 'El de dos personas, con Abby.', en: 'The one for two people, with Abby.' }, then: { es: 'Abby rema contigo y canta una canción.', en: 'Abby paddles with you and sings a song.' } },
            ],
          },
          twist: { es: '¡Un alce bebe agua en el lago! Es enorme. ¿Qué dices?', en: 'A moose is drinking water in the lake! It is huge. What do you say?' },
          questions: [
            { q: { es: '¿Nadas en lagos?', en: 'Do you swim in lakes?' }, help: { es: 'Sí, nado. / No, el agua está fría.', en: 'Yes, I swim. / No, the water is cold.' }, follow: [{ es: '¿Hay lagos en tu país?', en: 'Are there lakes in your country?' }, { es: '¿Prefieres el mar?', en: 'Do you prefer the sea?' }] },
            { q: { es: '¿Te gusta el agua fría?', en: 'Do you like cold water?' }, help: { es: 'Sí, me gusta. / ¡No, no me gusta!', en: 'Yes, I like it. / No, I don’t like it!' }, follow: [{ es: '¿Te duchas con agua fría?', en: 'Do you shower with cold water?' }, { es: '¿Y caliente?', en: 'And hot?' }] },
            { q: { es: '¿Haces deporte en el agua?', en: 'Do you do water sports?' }, help: { es: 'Sí, hago… / No, no hago.', en: 'Yes, I do… / No, I don’t.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿En verano?', en: 'In summer?' }] },
            { q: { es: '¿Qué animales grandes conoces?', en: 'What big animals do you know?' }, help: { es: 'Conozco el elefante, el oso…', en: 'I know the elephant, the bear…' }, follow: [{ es: '¿Cuál te gusta más?', en: 'Which one do you like best?' }, { es: '¿Viste uno de verdad?', en: 'Have you seen a real one?' }] },
          ],
          words: [
            { es: 'el lago', en: 'the lake' }, { es: 'frío', en: 'cold' }, { es: 'el kayak', en: 'the kayak' },
            { es: 'remar', en: 'to paddle, to row' }, { es: 'el alce', en: 'the moose' }, { es: 'alrededor', en: 'around' },
          ],
        },
        A1: {
          scene: { es: 'Un lago de montaña a las ocho de la mañana. El agua refleja los picos nevados como un espejo. Abby alquila kayaks y tablas de remo en verano y da clases de pesca en hielo en invierno.', en: 'A mountain lake at eight in the morning. The water reflects the snowy peaks like a mirror. Abby rents kayaks and paddleboards in summer and teaches ice fishing in winter.' },
          opener: { es: 'Este lago se congela cuatro meses al año. En enero caminamos por encima, hacemos un agujero en el hielo y pescamos truchas. Mi padre me enseñó cuando tenía seis años. ¿Tú hiciste alguna actividad rara con tu familia?', en: 'This lake freezes four months a year. In January we walk on top of it, drill a hole in the ice and fish for trout. My dad taught me when I was six. Did you do any unusual activity with your family?' },
          decide: {
            ask: { es: 'El agua está a ocho grados. Abby te reta: «¿Te atreves a saltar?». ¿Qué haces?', en: 'The water is forty-six degrees. Abby dares you: “Do you dare to jump in?” What do you do?' },
            options: [
              { say: { es: '¡Salto!', en: 'I jump!' }, then: { es: 'El frío te corta la respiración. Sales gritando y riendo. Abby te da una toalla y un aplauso.', en: 'The cold takes your breath away. You get out screaming and laughing. Abby gives you a towel and a round of applause.' } },
              { say: { es: 'Solo meto los pies.', en: 'I just put my feet in.' }, then: { es: 'Diez segundos son suficientes. Tus pies están rojos como tomates.', en: 'Ten seconds is enough. Your feet are as red as tomatoes.' } },
              { say: { es: 'No, gracias. Prefiero mirar.', en: 'No, thanks. I prefer to watch.' }, then: { es: 'Abby salta sola. Cuando sale, dice que es el mejor café del mundo.', en: 'Abby jumps in by herself. When she gets out, she says it’s the best coffee in the world.' } },
            ],
          },
          twist: { es: 'Un águila baja de golpe y saca un pez del agua a cinco metros de ti. Abby no puede creer que no tenía la cámara. ¿Qué le dices?', en: 'An eagle swoops down and snatches a fish out of the water fifteen feet from you. Abby can’t believe she didn’t have her camera. What do you say to her?' },
          questions: [
            { q: { es: '¿Hiciste alguna actividad rara con tu familia?', en: 'Did you do any unusual activity with your family?' }, help: { es: 'Sí, de niño/a… / No, nada especial.', en: 'Yes, as a child… / No, nothing special.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Todavía lo haces?', en: 'Do you still do it?' }] },
            { q: { es: '¿Te gusta pescar?', en: 'Do you like fishing?' }, help: { es: 'Sí, me gusta. / No, me aburre. / Nunca pesqué.', en: 'Yes, I like it. / No, it bores me. / I’ve never fished.' }, follow: [{ es: '¿Comes lo que pescas?', en: 'Do you eat what you catch?' }, { es: '¿Tienes paciencia?', en: 'Are you patient?' }] },
            { q: { es: '¿Eres valiente con el agua fría?', en: 'Are you brave with cold water?' }, help: { es: 'Sí, me encanta. / ¡Para nada!', en: 'Yes, I love it. / Not at all!' }, follow: [{ es: '¿Cuál fue el agua más fría?', en: 'What was the coldest water?' }, { es: '¿Lo harías en invierno?', en: 'Would you do it in winter?' }] },
            { q: { es: '¿Prefieres el verano o el invierno?', en: 'Do you prefer summer or winter?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué haces en verano?', en: 'What do you do in summer?' }, { es: '¿Y en invierno?', en: 'And in winter?' }] },
          ],
          words: [
            { es: 'el reflejo', en: 'the reflection' }, { es: 'congelarse', en: 'to freeze' }, { es: 'el hielo', en: 'the ice' },
            { es: 'la trucha', en: 'the trout' }, { es: 'atreverse', en: 'to dare' }, { es: 'el águila', en: 'the eagle' },
          ],
        },
        A2: {
          scene: { es: 'Ayer Abby salvó a un niño que se cayó de una tabla de remo lejos de la orilla. Hoy un periódico local quiere entrevistarla y la llaman «heroína». Ella no quiere: dice que solo hizo su trabajo y que el lago necesita más socorristas.', en: 'Yesterday Abby saved a child who fell off a paddleboard far from shore. Today a local newspaper wants to interview her and they’re calling her a “hero.” She doesn’t want it: she says she just did her job and that the lake needs more lifeguards.' },
          opener: { es: 'El niño no llevaba chaleco salvavidas. Sus padres estaban haciendo fotos y no lo vieron caer. Cuando llegué, ya tenía los labios morados. Después me temblaron las manos durante una hora. ¿Alguna vez actuaste rápido en una emergencia?', en: 'The boy wasn’t wearing a life jacket. His parents were taking photos and didn’t see him fall. When I got there, his lips were already blue. Afterwards my hands shook for an hour. Have you ever acted fast in an emergency?' },
          decide: {
            ask: { es: 'El periodista insiste. Abby te pregunta: «¿Hago la entrevista o no?». ¿Qué le aconsejas?', en: 'The reporter insists. Abby asks you: “Should I do the interview or not?” What do you advise her?' },
            options: [
              { say: { es: 'Sí, y usa la entrevista para pedir más socorristas.', en: 'Yes, and use the interview to ask for more lifeguards.' }, then: { es: 'El artículo sale con el título «La guía que pide ayuda». Una semana después, el condado contrata a dos socorristas más.', en: 'The article runs under the headline “The guide who asks for help.” A week later, the county hires two more lifeguards.' } },
              { say: { es: 'No, si no te sientes cómoda.', en: 'No, if you don’t feel comfortable.' }, then: { es: 'Abby dice que no. El periódico publica la historia igual, con una foto borrosa de ella.', en: 'Abby says no. The newspaper runs the story anyway, with a blurry photo of her.' } },
              { say: { es: 'Sí, pero sin hablar mal de los padres.', en: 'Yes, but without criticizing the parents.' }, then: { es: 'Abby cuenta la historia con cuidado. Los padres le escriben una carta de agradecimiento.', en: 'Abby tells the story carefully. The parents write her a thank-you letter.' } },
            ],
          },
          twist: { es: 'Esa tarde llega el niño con sus padres y le regala a Abby un dibujo: ella aparece como una superheroína con remo. Abby se emociona. ¿Qué le dices?', en: 'That afternoon the boy arrives with his parents and gives Abby a drawing: she appears as a superhero with a paddle. Abby gets emotional. What do you say to her?' },
          questions: [
            { q: { es: '¿Alguna vez actuaste rápido en una emergencia?', en: 'Have you ever acted fast in an emergency?' }, help: { es: 'Sí, una vez… y yo… / No, pero vi…', en: 'Yes, once… and I… / No, but I saw…' }, follow: [{ es: '¿Tuviste miedo?', en: 'Were you scared?' }, { es: '¿Qué hiciste después?', en: 'What did you do afterwards?' }] },
            { q: { es: '¿Te gusta que te feliciten en público?', en: 'Do you like being praised in public?' }, help: { es: 'Sí, me gusta. / No, me da vergüenza.', en: 'Yes, I like it. / No, it embarrasses me.' }, follow: [{ es: '¿Cuándo te pasó?', en: 'When did it happen to you?' }, { es: '¿Cómo reaccionaste?', en: 'How did you react?' }] },
            { q: { es: '¿Los padres de hoy miran demasiado el teléfono?', en: 'Do parents today look at their phones too much?' }, help: { es: 'Creo que sí, porque… / No siempre, porque…', en: 'I think so, because… / Not always, because…' }, follow: [{ es: '¿Y tú?', en: 'And you?' }, { es: '¿Cómo era cuando eras niño?', en: 'What was it like when you were a child?' }] },
            { q: { es: '¿Quién es un héroe para ti?', en: 'Who is a hero to you?' }, help: { es: 'Para mí, un héroe es… / Mi héroe es…', en: 'For me, a hero is… / My hero is…' }, follow: [{ es: '¿Lo conoces en persona?', en: 'Do you know them personally?' }, { es: '¿Qué hizo?', en: 'What did they do?' }] },
          ],
          words: [
            { es: 'la orilla', en: 'the shore' }, { es: 'el chaleco salvavidas', en: 'the life jacket' }, { es: 'temblar', en: 'to shake, to tremble' },
            { es: 'la entrevista', en: 'the interview' }, { es: 'felicitar', en: 'to congratulate, to praise' }, { es: 'borroso', en: 'blurry' },
          ],
        },
        B1: {
          scene: { es: 'El terreno alrededor del lago pertenece a un rancho privado. Durante cincuenta años, el dueño dejaba pasar a todos. Su hijo, que heredó el rancho, quiere cerrar el acceso y cobrar cuarenta dólares por persona. El pueblo está indignado; él dice que los visitantes dejan basura y que el seguro le cuesta una fortuna.', en: 'The land around the lake belongs to a private ranch. For fifty years, the owner let everyone through. His son, who inherited the ranch, wants to close access and charge forty dollars a person. The town is outraged; he says visitors leave trash and that insurance costs him a fortune.' },
          opener: { es: 'Entiendo a los dos. Yo crecí bañándome aquí gratis; mi negocio depende de este lago. Pero también he recogido pañales, botellas y hasta un sofá de la orilla. Y si alguien se ahoga, lo demandan a él. ¿Un paisaje natural puede ser propiedad privada? ¿O debería ser de todos?', en: 'I understand both sides. I grew up swimming here for free; my business depends on this lake. But I’ve also picked up diapers, bottles and even a couch from the shore. And if someone drowns, they sue him. Can a natural landscape be private property? Or should it belong to everyone?' },
          decide: {
            ask: { es: 'El hijo del ranchero le propone a Abby un trato: ella gestiona la entrada y se queda con un porcentaje. Abby te pide opinión.', en: 'The rancher’s son offers Abby a deal: she manages the entrance and keeps a percentage. Abby asks your opinion.' },
            options: [
              { say: { es: 'Que acepte y ponga precios bajos para los vecinos.', en: 'To accept and set low prices for locals.' }, then: { es: 'Los vecinos pagan cinco dólares, los turistas cuarenta. Algunos amigos de Abby dejan de hablarle.', en: 'Locals pay five dollars, tourists forty. Some of Abby’s friends stop speaking to her.' } },
              { say: { es: 'Que rechace y se una a la protesta.', en: 'To refuse and join the protest.' }, then: { es: 'Abby se convierte en la cara de la protesta. Su negocio pierde clientes porque el acceso queda cerrado todo el verano.', en: 'Abby becomes the face of the protest. Her business loses customers because access stays closed all summer.' } },
              { say: { es: 'Que proponga que el condado compre el acceso.', en: 'To propose that the county buy the access.' }, then: { es: 'El condado estudia la idea. Necesitaría subir un pequeño impuesto a todos los vecinos. Se abre otro debate.', en: 'The county looks into the idea. It would need to raise a small tax on all residents. Another debate opens.' } },
            ],
          },
          twist: { es: 'Abby se entera de que el hijo del ranchero está enfermo y necesita dinero para un tratamiento caro. Por eso quiere cobrar la entrada. ¿Cambia esto tu opinión?', en: 'Abby learns that the rancher’s son is ill and needs money for an expensive treatment. That’s why he wants to charge for entry. Does this change your opinion?' },
          questions: [
            { q: { es: '¿Un lugar natural puede ser propiedad privada?', en: 'Can a natural place be private property?' }, help: { es: 'Creo que sí, siempre que… / No creo que deba, porque…', en: 'I think so, as long as… / I don’t think it should be, because…' }, follow: [{ es: '¿Cómo funciona en tu país?', en: 'How does it work in your country?' }, { es: '¿Hay playas privadas?', en: 'Are there private beaches?' }] },
            { q: { es: '¿Pagarías por entrar a un lago o una playa?', en: 'Would you pay to get into a lake or a beach?' }, help: { es: 'Pagaría si… / Nunca pagaría porque…', en: 'I’d pay if… / I’d never pay because…' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Y si el dinero sirviera para limpiarlo?', en: 'And if the money went to cleaning it?' }] },
            { q: { es: '¿Las circunstancias personales justifican una decisión impopular?', en: 'Do personal circumstances justify an unpopular decision?' }, help: { es: 'Depende de… / Entiendo que…, pero…', en: 'It depends on… / I understand that…, but…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Lo harías tú?', en: 'Would you do it?' }] },
            { q: { es: '¿Quién debería limpiar los espacios naturales: los visitantes, el gobierno o los dueños?', en: 'Who should clean natural spaces: visitors, the government or the owners?' }, help: { es: 'Creo que la responsabilidad es de… porque…', en: 'I think the responsibility lies with… because…' }, follow: [{ es: '¿Recoges basura que no es tuya?', en: 'Do you pick up trash that isn’t yours?' }, { es: '¿Qué multa pondrías?', en: 'What fine would you set?' }] },
          ],
          words: [
            { es: 'heredar', en: 'to inherit' }, { es: 'el acceso', en: 'the access' }, { es: 'indignado', en: 'outraged' },
            { es: 'demandar', en: 'to sue' }, { es: 'el trato', en: 'the deal' }, { es: 'ahogarse', en: 'to drown' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the ski resort
    {
      id: 'esqui',
      name: { es: 'La estación de esquí', en: 'The ski resort' },
      who: { name: 'Marco', role: { es: 'instructor de esquí', en: 'ski instructor' } },
      levels: {
        A0: {
          scene: { es: 'Es una montaña con mucha nieve. Hay gente que esquía. Marco es profesor de esquí. Hace mucho frío.', en: 'It is a mountain with lots of snow. There are people skiing. Marco is a ski teacher. It is very cold.' },
          opener: { es: '¡Hola! Soy Marco. ¿Esquías?', en: 'Hi! I am Marco. Do you ski?' },
          decide: {
            ask: { es: 'Marco dice: «¿Esquí, tabla de nieve o trineo?». ¿Qué eliges?', en: 'Marco says: “Skis, snowboard or sled?” What do you choose?' },
            options: [
              { say: { es: 'Esquí.', en: 'Skis.' }, then: { es: 'Te caes tres veces. ¡Pero te ríes mucho!', en: 'You fall three times. But you laugh a lot!' } },
              { say: { es: 'Tabla de nieve.', en: 'Snowboard.' }, then: { es: 'Es difícil. Marco te ayuda. ¡Bajas un poco!', en: 'It is hard. Marco helps you. You go down a little!' } },
              { say: { es: 'Trineo. Es más fácil.', en: 'Sled. It is easier.' }, then: { es: '¡El trineo es muy rápido! Gritas de alegría.', en: 'The sled is very fast! You shout with joy.' } },
            ],
          },
          twist: { es: 'Empieza a nevar mucho. No ves nada. Marco dice: «¡Vamos a la cabaña!». ¿Qué dices?', en: 'It starts to snow a lot. You can’t see anything. Marco says: “Let’s go to the cabin!” What do you say?' },
          questions: [
            { q: { es: '¿Esquías?', en: 'Do you ski?' }, help: { es: 'Sí, esquío. / No, no esquío.', en: 'Yes, I ski. / No, I don’t ski.' }, follow: [{ es: '¿Quieres aprender?', en: 'Do you want to learn?' }, { es: '¿Es caro en tu país?', en: 'Is it expensive in your country?' }] },
            { q: { es: '¿Te gusta el invierno?', en: 'Do you like winter?' }, help: { es: 'Sí, me gusta. / No, prefiero el verano.', en: 'Yes, I like it. / No, I prefer summer.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué haces en invierno?', en: 'What do you do in winter?' }] },
            { q: { es: '¿Te caes mucho?', en: 'Do you fall a lot?' }, help: { es: 'Sí, me caigo mucho. / No, casi nunca.', en: 'Yes, I fall a lot. / No, almost never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te ríes?', en: 'Do you laugh?' }] },
            { q: { es: '¿Bebes algo caliente en invierno?', en: 'Do you drink something hot in winter?' }, help: { es: 'Sí, bebo té / café / chocolate.', en: 'Yes, I drink tea / coffee / hot chocolate.' }, follow: [{ es: '¿Con azúcar?', en: 'With sugar?' }, { es: '¿Cuántas veces al día?', en: 'How many times a day?' }] },
          ],
          words: [
            { es: 'esquiar', en: 'to ski' }, { es: 'el trineo', en: 'the sled' }, { es: 'la tabla de nieve', en: 'the snowboard' },
            { es: 'caerse', en: 'to fall' }, { es: 'nevar', en: 'to snow' }, { es: 'la cabaña', en: 'the cabin' },
          ],
        },
        A1: {
          scene: { es: 'Una estación de esquí en las Rocosas. Hay telesillas, pistas verdes, azules y negras, y una cabaña donde venden sopa caliente. Marco es argentino y trabaja aquí todos los inviernos; en verano trabaja en Bariloche, donde es invierno.', en: 'A ski resort in the Rockies. There are chairlifts, green, blue and black runs, and a cabin that sells hot soup. Marco is Argentinian and works here every winter; in summer he works in Bariloche, where it’s winter.' },
          opener: { es: 'Vivo en un invierno eterno: seis meses aquí, seis meses en Argentina. Mi madre dice que estoy loco. Yo digo que soy feliz con frío. Hoy empiezas en la pista verde, ¿de acuerdo? ¿Tú qué estación del año prefieres?', en: 'I live in an endless winter: six months here, six months in Argentina. My mom says I’m crazy. I say I’m happy in the cold. Today you start on the green run, OK? Which season do you prefer?' },
          decide: {
            ask: { es: 'Después de dos horas, bajas la pista verde sin caerte. Marco te propone probar la azul. ¿Qué haces?', en: 'After two hours, you get down the green run without falling. Marco suggests trying the blue one. What do you do?' },
            options: [
              { say: { es: '¡Vamos a la azul!', en: 'Let’s go to the blue one!' }, then: { es: 'Te caes dos veces, pero llegas abajo. Marco te da un abrazo de oso.', en: 'You fall twice, but you make it down. Marco gives you a bear hug.' } },
              { say: { es: 'Una vez más en la verde.', en: 'One more time on the green.' }, then: { es: 'Esta vez bajas tan bien que un niño de cinco años te aplaude.', en: 'This time you get down so well that a five-year-old claps for you.' } },
              { say: { es: 'Mejor una sopa en la cabaña.', en: 'Better a soup in the cabin.' }, then: { es: 'La sopa de chile está deliciosa. Por la ventana ves a Marco bajar la pista negra como un pájaro.', en: 'The chili soup is delicious. Through the window you watch Marco fly down the black run like a bird.' } },
            ],
          },
          twist: { es: 'En la telesilla, la máquina se detiene. Quedas colgado a quince metros del suelo con Marco, que empieza a contar chistes argentinos. ¿Qué le preguntas?', en: 'On the chairlift, the machine stops. You’re left hanging fifty feet above the ground with Marco, who starts telling Argentinian jokes. What do you ask him?' },
          questions: [
            { q: { es: '¿Qué estación del año prefieres?', en: 'Which season do you prefer?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué haces en esa estación?', en: 'What do you do in that season?' }, { es: '¿Cuál no te gusta?', en: 'Which one don’t you like?' }] },
            { q: { es: '¿Trabajarías en dos países diferentes?', en: 'Would you work in two different countries?' }, help: { es: 'Sí, me gustaría… / No, prefiero…', en: 'Yes, I’d like to… / No, I prefer…' }, follow: [{ es: '¿En cuáles?', en: 'Which ones?' }, { es: '¿Qué dice tu familia?', en: 'What does your family say?' }] },
            { q: { es: '¿Qué dice tu madre de tu vida?', en: 'What does your mother say about your life?' }, help: { es: 'Mi madre dice que yo…', en: 'My mother says I…' }, follow: [{ es: '¿Tiene razón?', en: 'Is she right?' }, { es: '¿Hablas mucho con ella?', en: 'Do you talk to her a lot?' }] },
            { q: { es: '¿Te dan miedo las alturas?', en: 'Are you afraid of heights?' }, help: { es: 'Sí, mucho. / No, nada. / Un poco.', en: 'Yes, a lot. / No, not at all. / A little.' }, follow: [{ es: '¿Subiste a una telesilla?', en: 'Have you been on a chairlift?' }, { es: '¿Y a un avión pequeño?', en: 'And a small plane?' }] },
          ],
          words: [
            { es: 'la telesilla', en: 'the chairlift' }, { es: 'la pista', en: 'the ski run' }, { es: 'eterno', en: 'endless, eternal' },
            { es: 'bajar', en: 'to go down' }, { es: 'colgado', en: 'hanging' }, { es: 'el chiste', en: 'the joke' },
          ],
        },
        A2: {
          scene: { es: 'Un alumno de Marco, un empresario muy seguro de sí mismo, quiere bajar fuera de pista aunque hay riesgo de avalancha. Marco se negó y el cliente se quejó a la dirección. Hoy Marco tiene una reunión con su jefa.', en: 'One of Marco’s students, a very self-assured businessman, wants to ski off-piste even though there’s avalanche risk. Marco refused and the client complained to management. Today Marco has a meeting with his boss.' },
          opener: { es: 'Hace tres años perdí a un amigo en una avalancha, justo en esa zona. Él también decía: «No pasa nada, sé lo que hago». Por eso no cedo nunca. Pero este cliente paga dos mil dólares por semana y mi jefa no está contenta. ¿Tú cederías?', en: 'Three years ago I lost a friend in an avalanche, right in that area. He also used to say: “It’s fine, I know what I’m doing.” That’s why I never give in. But this client pays two thousand dollars a week and my boss isn’t happy. Would you give in?' },
          decide: {
            ask: { es: 'La jefa le da a Marco dos opciones: disculparse con el cliente o perderlo. ¿Qué le aconsejas?', en: 'The boss gives Marco two options: apologize to the client or lose him. What do you advise him?' },
            options: [
              { say: { es: 'Que no se disculpe: tenía razón.', en: 'Not to apologize: he was right.' }, then: { es: 'Marco mantiene su postura. El cliente se va con otro instructor. Dos días después, cierran esa zona por una avalancha.', en: 'Marco holds his ground. The client leaves with another instructor. Two days later, that area is closed due to an avalanche.' } },
              { say: { es: 'Que explique su historia al cliente.', en: 'To tell the client his story.' }, then: { es: 'El cliente escucha en silencio. Al final dice: «No lo sabía». Siguen esquiando juntos, en pista.', en: 'The client listens in silence. At the end he says: “I didn’t know.” They keep skiing together, on the runs.' } },
              { say: { es: 'Que se disculpe pero siga sin bajar fuera de pista.', en: 'To apologize but still not go off-piste.' }, then: { es: 'La jefa queda contenta y el cliente también, a medias. Marco se siente un poco falso.', en: 'The boss is satisfied and so is the client, half-way. Marco feels a bit fake.' } },
            ],
          },
          twist: { es: 'Esa tarde, el cliente vuelve con un regalo: un casco nuevo para Marco y una nota que dice «Gracias por decirme que no». ¿Qué crees que pasó?', en: 'That afternoon, the client comes back with a gift: a new helmet for Marco and a note that says “Thanks for telling me no.” What do you think happened?' },
          questions: [
            { q: { es: '¿Alguna vez tuviste que decir que no a un cliente o a un jefe?', en: 'Have you ever had to say no to a client or a boss?' }, help: { es: 'Sí, una vez… porque… / No, nunca me atreví…', en: 'Yes, once… because… / No, I never dared…' }, follow: [{ es: '¿Qué pasó después?', en: 'What happened afterwards?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Qué experiencia te hizo más prudente?', en: 'What experience made you more careful?' }, help: { es: 'Después de…, empecé a… / Cuando era más joven…', en: 'After…, I started to… / When I was younger…' }, follow: [{ es: '¿Cambiaste mucho?', en: 'Did you change a lot?' }, { es: '¿Se lo cuentas a otros?', en: 'Do you tell others about it?' }] },
            { q: { es: '¿El cliente siempre tiene razón?', en: 'Is the customer always right?' }, help: { es: 'No siempre, porque… / En general sí, pero…', en: 'Not always, because… / Generally yes, but…' }, follow: [{ es: '¿Trabajaste de cara al público?', en: 'Have you worked with the public?' }, { es: '¿Cuál fue el peor cliente?', en: 'Who was the worst customer?' }] },
            { q: { es: '¿Alguna vez alguien te dijo que no y después se lo agradeciste?', en: 'Has anyone ever told you no and you thanked them later?' }, help: { es: 'Sí, cuando… me dijo que no… / Al principio me enfadé, pero…', en: 'Yes, when… told me no… / At first I got angry, but…' }, follow: [{ es: '¿Se lo dijiste?', en: 'Did you tell them?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
          ],
          words: [
            { es: 'fuera de pista', en: 'off-piste' }, { es: 'la avalancha', en: 'the avalanche' }, { es: 'ceder', en: 'to give in' },
            { es: 'la jefa', en: 'the boss (woman)' }, { es: 'disculparse', en: 'to apologize' }, { es: 'el casco', en: 'the helmet' },
          ],
        },
        B1: {
          scene: { es: 'Cada invierno nieva menos y la temporada es más corta. La estación fabrica nieve artificial con millones de litros de agua del río, mientras los agricultores del valle sufren sequía. La empresa propone construir más cañones de nieve; un grupo de vecinos pide que la estación se adapte y ofrezca actividades de verano.', en: 'Each winter there’s less snow and the season is shorter. The resort makes artificial snow with millions of gallons of river water, while farmers in the valley suffer drought. The company proposes building more snow guns; a group of locals asks the resort to adapt and offer summer activities.' },
          opener: { es: 'Cuando empecé, la temporada duraba cinco meses. Este año duró tres y medio. En Bariloche pasa lo mismo. A veces pienso que enseño un deporte que mis nietos solo verán en videos. Pero si la estación cierra, cuatro mil personas se quedan sin trabajo. ¿Qué es más responsable: adaptarse o resistir?', en: 'When I started, the season lasted five months. This year it lasted three and a half. The same is happening in Bariloche. Sometimes I think I teach a sport my grandchildren will only see in videos. But if the resort closes, four thousand people lose their jobs. What’s more responsible: adapting or holding on?' },
          decide: {
            ask: { es: 'La empresa le pide a Marco que salga en un video promocionando los nuevos cañones de nieve. Le pagarían bien. ¿Qué le aconsejas?', en: 'The company asks Marco to appear in a video promoting the new snow guns. They’d pay him well. What do you advise him?' },
            options: [
              { say: { es: 'Que acepte: la estación necesita sobrevivir.', en: 'To accept: the resort needs to survive.' }, then: { es: 'El video funciona. Pero en el pueblo, los agricultores dejan de saludarlo.', en: 'The video works. But in town, the farmers stop saying hello to him.' } },
              { say: { es: 'Que se niegue y proponga alternativas de verano.', en: 'To refuse and propose summer alternatives.' }, then: { es: 'Marco presenta un plan de bicicleta de montaña y caminatas. La empresa lo escucha, pero no se compromete.', en: 'Marco presents a mountain biking and hiking plan. The company listens, but doesn’t commit.' } },
              { say: { es: 'Que acepte solo si la empresa limita el uso de agua.', en: 'To accept only if the company limits water use.' }, then: { es: 'La empresa acepta un límite para los meses más secos. Es poco, pero es algo. Marco graba el video con dudas.', en: 'The company agrees to a cap during the driest months. It’s not much, but it’s something. Marco films the video with doubts.' } },
            ],
          },
          twist: { es: 'Un estudio científico dice que, en treinta años, solo las estaciones más altas tendrán nieve natural. La de Marco no es una de ellas. ¿Merece la pena invertir en algo que tiene fecha de caducidad?', en: 'A scientific study says that in thirty years only the highest resorts will have natural snow. Marco’s isn’t one of them. Is it worth investing in something with an expiration date?' },
          questions: [
            { q: { es: '¿Has notado el cambio climático en tu ciudad o tu país?', en: 'Have you noticed climate change in your city or country?' }, help: { es: 'Sí, he notado que… / Antes…, pero ahora…', en: 'Yes, I’ve noticed that… / Before…, but now…' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
            { q: { es: '¿Qué es más responsable: adaptarse o intentar mantener las cosas como estaban?', en: 'What’s more responsible: adapting or trying to keep things as they were?' }, help: { es: 'Creo que es más responsable… porque… / Depende de…', en: 'I think it’s more responsible to… because… / It depends on…' }, follow: [{ es: '¿Qué tradición crees que desaparecerá?', en: 'What tradition do you think will disappear?' }, { es: '¿Te daría pena?', en: 'Would it make you sad?' }] },
            { q: { es: '¿Quién debería tener prioridad con el agua: el turismo o la agricultura?', en: 'Who should have priority for water: tourism or agriculture?' }, help: { es: 'Debería tener prioridad… ya que… / Es complicado, porque…', en: '… should have priority, since… / It’s complicated, because…' }, follow: [{ es: '¿Hay sequías donde vives?', en: 'Are there droughts where you live?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Aceptarías dinero para defender algo en lo que no crees del todo?', en: 'Would you accept money to defend something you don’t fully believe in?' }, help: { es: 'Lo aceptaría si… / No lo aceptaría porque…', en: 'I’d accept it if… / I wouldn’t accept it because…' }, follow: [{ es: '¿Hay excepciones?', en: 'Are there exceptions?' }, { es: '¿Te pasó alguna vez?', en: 'Has it ever happened to you?' }] },
          ],
          words: [
            { es: 'la nieve artificial', en: 'artificial snow' }, { es: 'la sequía', en: 'the drought' }, { es: 'el cañón de nieve', en: 'the snow gun' },
            { es: 'adaptarse', en: 'to adapt' }, { es: 'la temporada', en: 'the season' }, { es: 'la fecha de caducidad', en: 'the expiration date' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the nature trail
    {
      id: 'sendero',
      name: { es: 'El sendero natural', en: 'The nature trail' },
      who: { name: 'Ruth', role: { es: 'montañista jubilada', en: 'retired mountaineer' } },
      levels: {
        A0: {
          scene: { es: 'Es un camino en el bosque. Hay árboles altos y un río. Ruth camina con dos bastones. Tiene setenta años.', en: 'It is a path in the forest. There are tall trees and a river. Ruth walks with two poles. She is seventy years old.' },
          opener: { es: '¡Hola! Soy Ruth. Camino todos los días. ¿Caminas conmigo?', en: 'Hi! I am Ruth. I walk every day. Will you walk with me?' },
          decide: {
            ask: { es: 'Ruth pregunta: «¿Vamos al río, al lago o a la montaña?».', en: 'Ruth asks: “Shall we go to the river, the lake or the mountain?”' },
            options: [
              { say: { es: 'Al río.', en: 'To the river.' }, then: { es: 'El agua hace mucho ruido. Ves peces pequeños.', en: 'The water is very loud. You see small fish.' } },
              { say: { es: 'Al lago.', en: 'To the lake.' }, then: { es: 'El lago es azul y tranquilo. Ruth come una manzana.', en: 'The lake is blue and calm. Ruth eats an apple.' } },
              { say: { es: 'A la montaña.', en: 'To the mountain.' }, then: { es: '¡Es difícil! Pero arriba la vista es increíble.', en: 'It is hard! But at the top the view is incredible.' } },
            ],
          },
          twist: { es: 'Ruth ve un oso negro lejos, entre los árboles. Dice: «Tranquilo. Hablamos fuerte y caminamos despacio». ¿Qué dices?', en: 'Ruth sees a black bear far away, among the trees. She says: “Stay calm. We talk loudly and walk slowly.” What do you say?' },
          questions: [
            { q: { es: '¿Caminas todos los días?', en: 'Do you walk every day?' }, help: { es: 'Sí, camino todos los días. / No, a veces.', en: 'Yes, I walk every day. / No, sometimes.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'For how long?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Cuántos años tiene tu abuela o tu abuelo?', en: 'How old is your grandmother or grandfather?' }, help: { es: 'Mi abuela tiene… años.', en: 'My grandmother is… years old.' }, follow: [{ es: '¿Hace deporte?', en: 'Does she exercise?' }, { es: '¿Dónde vive?', en: 'Where does she live?' }] },
            { q: { es: '¿Te gustan los ríos?', en: 'Do you like rivers?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Hay un río en tu ciudad?', en: 'Is there a river in your city?' }, { es: '¿Nadas en ríos?', en: 'Do you swim in rivers?' }] },
            { q: { es: '¿Tienes miedo de los osos?', en: 'Are you afraid of bears?' }, help: { es: 'Sí, mucho. / No, me gustan.', en: 'Yes, very. / No, I like them.' }, follow: [{ es: '¿Hay osos en tu país?', en: 'Are there bears in your country?' }, { es: '¿Viste uno?', en: 'Have you seen one?' }] },
          ],
          words: [
            { es: 'el bosque', en: 'the forest' }, { es: 'el río', en: 'the river' }, { es: 'el bastón', en: 'the hiking pole' },
            { es: 'el oso', en: 'the bear' }, { es: 'despacio', en: 'slowly' }, { es: 'la vista', en: 'the view' },
          ],
        },
        A1: {
          scene: { es: 'Un sendero entre pinos y álamos que suben hasta un pico de más de cuatro mil metros. En Colorado hay cincuenta y ocho «catorcemiles», montañas de más de catorce mil pies. Ruth subió cuarenta y nueve.', en: 'A trail through pines and aspens climbing to a peak over fourteen thousand feet. Colorado has fifty-eight “fourteeners,” mountains over fourteen thousand feet. Ruth has climbed forty-nine.' },
          opener: { es: 'Empecé a los cincuenta años, después de mi divorcio. Mis hijos pensaban que era una crisis. ¡Fue la mejor crisis de mi vida! Me faltan nueve y quiero terminarlas antes de los ochenta. ¿Tú tienes una meta así?', en: 'I started at fifty, after my divorce. My kids thought it was a crisis. It was the best crisis of my life! I have nine left and I want to finish them before I turn eighty. Do you have a goal like that?' },
          decide: {
            ask: { es: 'Son las once y el cielo se pone gris. Ruth dice que en Colorado las tormentas llegan por la tarde. ¿Qué propones?', en: 'It’s eleven o’clock and the sky is turning gray. Ruth says that in Colorado storms come in the afternoon. What do you suggest?' },
            options: [
              { say: { es: 'Bajar ahora.', en: 'Go down now.' }, then: { es: 'Ruth asiente: «La montaña no se va a ir». A la una, un rayo cae en la cima.', en: 'Ruth nods: “The mountain isn’t going anywhere.” At one o’clock, lightning strikes the summit.' } },
              { say: { es: 'Subir rápido y bajar enseguida.', en: 'Go up fast and come right down.' }, then: { es: 'Llegan a la cima a las doce, hacen una foto y bajan corriendo bajo las primeras gotas.', en: 'You reach the top at noon, take a photo and run down under the first drops.' } },
              { say: { es: 'Que Ruth decida: ella tiene experiencia.', en: 'Let Ruth decide: she has experience.' }, then: { es: 'Ruth mira el cielo un minuto entero y decide bajar. Te explica cómo leer las nubes.', en: 'Ruth watches the sky for a whole minute and decides to go down. She explains how to read the clouds.' } },
            ],
          },
          twist: { es: 'Un joven baja corriendo en pantalones cortos, sin agua y sin chaqueta. Pregunta cuánto falta para la cima. Ruth te mira. ¿Qué le dices?', en: 'A young man comes running down in shorts, with no water and no jacket. He asks how far it is to the top. Ruth looks at you. What do you tell him?' },
          questions: [
            { q: { es: '¿Tienes una meta personal grande?', en: 'Do you have a big personal goal?' }, help: { es: 'Sí, quiero… antes de… / Todavía no.', en: 'Yes, I want to… before… / Not yet.' }, follow: [{ es: '¿Cuándo empezaste?', en: 'When did you start?' }, { es: '¿Qué te falta?', en: 'What do you have left?' }] },
            { q: { es: '¿Empezaste algo nuevo de adulto?', en: 'Did you start something new as an adult?' }, help: { es: 'Sí, empecé a… a los… años.', en: 'Yes, I started… at… years old.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué dijo tu familia?', en: 'What did your family say?' }] },
            { q: { es: '¿Miras el pronóstico del tiempo?', en: 'Do you check the weather forecast?' }, help: { es: 'Sí, siempre. / No, nunca. / A veces.', en: 'Yes, always. / No, never. / Sometimes.' }, follow: [{ es: '¿Con qué aplicación?', en: 'With which app?' }, { es: '¿Acierta?', en: 'Is it accurate?' }] },
            { q: { es: '¿Qué llevas cuando vas a la montaña?', en: 'What do you take when you go to the mountains?' }, help: { es: 'Llevo agua, una chaqueta…', en: 'I take water, a jacket…' }, follow: [{ es: '¿Olvidaste algo importante alguna vez?', en: 'Have you ever forgotten something important?' }, { es: '¿Llevas el teléfono?', en: 'Do you take your phone?' }] },
          ],
          words: [
            { es: 'el pino', en: 'the pine' }, { es: 'el pico', en: 'the peak' }, { es: 'la meta', en: 'the goal' },
            { es: 'la tormenta', en: 'the storm' }, { es: 'el rayo', en: 'the lightning' }, { es: 'la nube', en: 'the cloud' },
          ],
        },
        A2: {
          scene: { es: 'Ruth y tú encuentran en el sendero a un excursionista con el tobillo roto. No hay señal de teléfono. Ruth sabe primeros auxilios, pero no puede cargarlo. El refugio más cercano está a dos horas.', en: 'You and Ruth find a hiker with a broken ankle on the trail. There’s no phone signal. Ruth knows first aid, but she can’t carry him. The nearest hut is two hours away.' },
          opener: { es: 'En 1998 me pasó lo mismo a mí: me caí en el pico Longs y estuve seis horas sola esperando. Un desconocido bajó corriendo a buscar ayuda. Nunca supe su nombre. Desde entonces, siempre llevo una manta térmica y un silbato. ¿Alguna vez un desconocido te ayudó de verdad?', en: 'In 1998 the same thing happened to me: I fell on Longs Peak and spent six hours alone waiting. A stranger ran down to get help. I never learned his name. Since then, I always carry a space blanket and a whistle. Has a stranger ever really helped you?' },
          decide: {
            ask: { es: 'Alguien tiene que ir a buscar ayuda y alguien tiene que quedarse. ¿Qué propones?', en: 'Someone has to go for help and someone has to stay. What do you suggest?' },
            options: [
              { say: { es: 'Voy yo a buscar ayuda; Ruth se queda.', en: 'I’ll go for help; Ruth stays.' }, then: { es: 'Bajas casi corriendo. En una hora encuentras señal y llamas a rescate. El helicóptero llega antes que tú.', en: 'You go down almost running. In an hour you find signal and call rescue. The helicopter gets there before you.' } },
              { say: { es: 'Me quedo yo; Ruth conoce mejor el camino.', en: 'I’ll stay; Ruth knows the trail better.' }, then: { es: 'Pasas tres horas hablando con el excursionista. Te cuenta toda su vida. Cuando llega el rescate, ya son amigos.', en: 'You spend three hours talking with the hiker. He tells you his whole life story. By the time rescue arrives, you’re friends.' } },
              { say: { es: 'Usamos el silbato y esperamos juntos.', en: 'We use the whistle and wait together.' }, then: { es: 'Tres pitidos, una pausa, tres pitidos. Veinte minutos después aparece un grupo con radio.', en: 'Three blasts, a pause, three blasts. Twenty minutes later a group with a radio shows up.' } },
            ],
          },
          twist: { es: 'Cuando llega el rescate, el excursionista le dice a Ruth: «Mi padre me contó que una vez ayudó a una mujer en el pico Longs». Ruth se queda sin palabras. ¿Qué crees que siente?', en: 'When rescue arrives, the hiker tells Ruth: “My father told me he once helped a woman on Longs Peak.” Ruth is speechless. What do you think she feels?' },
          questions: [
            { q: { es: '¿Alguna vez un desconocido te ayudó de verdad?', en: 'Has a stranger ever really helped you?' }, help: { es: 'Sí, una vez… y una persona… / No que yo recuerde.', en: 'Yes, once… and someone… / Not that I remember.' }, follow: [{ es: '¿Le diste las gracias?', en: 'Did you thank them?' }, { es: '¿Lo volviste a ver?', en: 'Did you see them again?' }] },
            { q: { es: '¿Sabes primeros auxilios?', en: 'Do you know first aid?' }, help: { es: 'Sí, aprendí en… / No, pero me gustaría aprender.', en: 'Yes, I learned at… / No, but I’d like to learn.' }, follow: [{ es: '¿Los usaste alguna vez?', en: 'Have you ever used it?' }, { es: '¿Debería ser obligatorio?', en: 'Should it be mandatory?' }] },
            { q: { es: '¿Qué hacías cuando eras niño si te perdías?', en: 'What did you do as a child if you got lost?' }, help: { es: 'Cuando era niño/a, si me perdía…', en: 'When I was a child, if I got lost…' }, follow: [{ es: '¿Te perdiste alguna vez?', en: 'Did you ever get lost?' }, { es: '¿Quién te encontró?', en: 'Who found you?' }] },
            { q: { es: '¿Crees en las casualidades?', en: 'Do you believe in coincidences?' }, help: { es: 'Sí, creo que… / No, creo que todo pasa por algo.', en: 'Yes, I think… / No, I think everything happens for a reason.' }, follow: [{ es: '¿Te pasó alguna casualidad increíble?', en: 'Has an incredible coincidence happened to you?' }, { es: '¿Se la contaste a alguien?', en: 'Did you tell anyone?' }] },
          ],
          words: [
            { es: 'el tobillo', en: 'the ankle' }, { es: 'los primeros auxilios', en: 'first aid' }, { es: 'el refugio', en: 'the mountain hut' },
            { es: 'la manta térmica', en: 'the space blanket' }, { es: 'el silbato', en: 'the whistle' }, { es: 'la casualidad', en: 'the coincidence' },
          ],
        },
        B1: {
          scene: { es: 'Los «catorcemiles» están cada vez más llenos: en verano hay filas en la cima y los aparcamientos se llenan a las cinco de la mañana. El estado propone un sistema de permisos y una tasa para financiar los senderos. Ruth, que subió sola durante años, tiene sentimientos encontrados.', en: 'The “fourteeners” are getting more and more crowded: in summer there are lines at the summit and the parking lots fill up at five in the morning. The state proposes a permit system and a fee to fund the trails. Ruth, who climbed alone for years, has mixed feelings.' },
          opener: { es: 'Cuando empecé, en la cima solo encontraba marmotas. Ahora hay gente haciendo videos con drones y pidiendo pizza por teléfono. Me molesta, lo confieso. Pero ¿quién soy yo para decir que la montaña es solo para los que llegamos primero? Quizás alguno de esos jóvenes vive su propia «mejor crisis». ¿Tú pagarías un permiso para subir a una montaña?', en: 'When I started, the only things I found at the summit were marmots. Now there are people filming with drones and ordering pizza on their phones. It bothers me, I admit. But who am I to say the mountain is only for those of us who got here first? Maybe one of those young people is living their own “best crisis.” Would you pay for a permit to climb a mountain?' },
          decide: {
            ask: { es: 'Un periodista le pide a Ruth, como montañista conocida, su opinión sobre los permisos para un artículo. ¿Qué le aconsejas decir?', en: 'A reporter asks Ruth, as a well-known mountaineer, for her opinion on the permits for an article. What do you advise her to say?' },
            options: [
              { say: { es: 'Que está a favor: la montaña necesita protección.', en: 'That she’s in favor: the mountain needs protection.' }, then: { es: 'Muchos jóvenes la critican en redes: «Ella ya subió, ahora nos cierra la puerta».', en: 'Many young people criticize her online: “She already climbed, now she’s closing the door on us.”' } },
              { say: { es: 'Que está en contra: la montaña debe ser libre.', en: 'That she’s against it: the mountain should be free.' }, then: { es: 'Los grupos ecologistas se sorprenden. Un guardabosques le escribe con fotos de la erosión de los senderos.', en: 'Environmental groups are surprised. A ranger writes to her with photos of the trail erosion.' } },
              { say: { es: 'Que propone permisos gratuitos con sorteo.', en: 'That she proposes free permits by lottery.' }, then: { es: 'La idea gusta a muchos, pero el estado responde que sin la tasa no hay dinero para mantener los senderos.', en: 'Many people like the idea, but the state replies that without the fee there’s no money to maintain the trails.' } },
            ],
          },
          twist: { es: 'La nieta de Ruth, de diecinueve años, quiere subir los cincuenta y ocho catorcemiles en un solo verano y publicarlo en redes para conseguir patrocinadores. Ruth no sabe si sentirse orgullosa o preocupada. ¿Qué le dirías a la nieta?', en: 'Ruth’s nineteen-year-old granddaughter wants to climb all fifty-eight fourteeners in a single summer and post it online to get sponsors. Ruth doesn’t know whether to feel proud or worried. What would you tell the granddaughter?' },
          questions: [
            { q: { es: '¿Pagarías un permiso para subir a una montaña o entrar a un parque?', en: 'Would you pay for a permit to climb a mountain or enter a park?' }, help: { es: 'Sí, pagaría si el dinero… / No, porque la naturaleza debería…', en: 'Yes, I’d pay if the money… / No, because nature should…' }, follow: [{ es: '¿Cuánto sería justo?', en: 'How much would be fair?' }, { es: '¿Y los que no pueden pagar?', en: 'And those who can’t pay?' }] },
            { q: { es: '¿Las redes sociales están cambiando nuestra relación con la naturaleza?', en: 'Is social media changing our relationship with nature?' }, help: { es: 'Creo que sí: antes… y ahora… / En parte, aunque también…', en: 'I think so: before… and now… / Partly, although it also…' }, follow: [{ es: '¿Publicas fotos de tus viajes?', en: 'Do you post photos of your trips?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Es egoísta querer que un lugar siga siendo «secreto»?', en: 'Is it selfish to want a place to stay “secret”?' }, help: { es: 'Un poco, porque… / No, me parece comprensible que…', en: 'A bit, because… / No, I think it’s understandable that…' }, follow: [{ es: '¿Tienes un lugar secreto?', en: 'Do you have a secret place?' }, { es: '¿Lo compartirías?', en: 'Would you share it?' }] },
            { q: { es: '¿Qué le aconsejarías a alguien que quiere hacer algo arriesgado para hacerse famoso?', en: 'What would you advise someone who wants to do something risky to become famous?' }, help: { es: 'Le aconsejaría que… / Le diría que tuviera cuidado con…', en: 'I’d advise them to… / I’d tell them to be careful with…' }, follow: [{ es: '¿Lo harías tú a su edad?', en: 'Would you have done it at their age?' }, { es: '¿Qué es el éxito para ti?', en: 'What is success to you?' }] },
          ],
          words: [
            { es: 'el permiso', en: 'the permit' }, { es: 'la tasa', en: 'the fee' }, { es: 'la marmota', en: 'the marmot' },
            { es: 'la erosión', en: 'the erosion' }, { es: 'el patrocinador', en: 'the sponsor' }, { es: 'los sentimientos encontrados', en: 'mixed feelings' },
          ],
        },
      },
    },
  ],
};
