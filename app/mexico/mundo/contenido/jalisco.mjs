// Jalisco · Guadalajara, Tequila and Lake Chapala. Five places, four levels each
// (A0, A1, A2, B1). Every level is written on its own: same place and people,
// different situations, decisions and questions. English is a natural translation.
export default {
  id: 'jalisco',
  spots: [
    // ------------------------------------------------------------ tortas ahogadas
    {
      id: 'tortas',
      name: { es: 'El puesto de tortas ahogadas', en: 'The drowned sandwich stand' },
      who: { name: 'Don Beto', role: { es: 'cocinero', en: 'cook' } },
      levels: {
        A0: {
          scene: { es: 'Es un puesto pequeño en la calle. Don Beto hace tortas. Las tortas tienen salsa roja.', en: 'It is a small stand on the street. Don Beto makes sandwiches. The sandwiches have red sauce.' },
          opener: { es: '¡Hola! Soy Beto. ¿Tienes hambre?', en: 'Hi! I am Beto. Are you hungry?' },
          decide: {
            ask: { es: 'La salsa puede ser normal o muy picante. ¿Cuál quieres?', en: 'The sauce can be normal or very spicy. Which one do you want?' },
            options: [
              { say: { es: 'Normal, por favor.', en: 'Normal, please.' }, then: { es: 'Beto dice: «Muy bien. Es rica y no pica mucho».', en: 'Beto says: “Very good. It is tasty and not very spicy.”' } },
              { say: { es: '¡Muy picante!', en: 'Very spicy!' }, then: { es: 'Beto ríe: «¿Seguro? Aquí tienes agua».', en: 'Beto laughs: “Are you sure? Here is some water.”' } },
              { say: { es: 'Sin salsa, por favor.', en: 'No sauce, please.' }, then: { es: 'Beto dice: «¿Sin salsa? ¡Entonces es una torta normal!»', en: 'Beto says: “No sauce? Then it is a normal sandwich!”' } },
            ],
          },
          twist: { es: 'La torta tiene mucha salsa. Tus manos están rojas. Beto te da una servilleta. ¿Qué dices?', en: 'The sandwich has a lot of sauce. Your hands are red. Beto gives you a napkin. What do you say?' },
          questions: [
            { q: { es: '¿Tienes hambre ahora?', en: 'Are you hungry now?' }, help: { es: 'Sí, tengo hambre. / No, no tengo hambre.', en: 'Yes, I am hungry. / No, I am not hungry.' }, follow: [{ es: '¿Qué quieres comer?', en: 'What do you want to eat?' }, { es: '¿A qué hora comes?', en: 'What time do you eat?' }] },
            { q: { es: '¿Comes en la calle?', en: 'Do you eat on the street?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿Es barato?', en: 'Is it cheap?' }] },
            { q: { es: '¿Te gusta el pan?', en: 'Do you like bread?' }, help: { es: 'Sí, me gusta mucho. / No mucho.', en: 'Yes, I like it a lot. / Not much.' }, follow: [{ es: '¿Comes pan en el desayuno?', en: 'Do you eat bread at breakfast?' }, { es: '¿Pan blanco o integral?', en: 'White or wholemeal bread?' }] },
            { q: { es: '¿Qué bebes con la comida?', en: 'What do you drink with food?' }, help: { es: 'Bebo agua / jugo / refresco.', en: 'I drink water / juice / soda.' }, follow: [{ es: '¿Bebes agua fría?', en: 'Do you drink cold water?' }, { es: '¿Te gusta el jugo de naranja?', en: 'Do you like orange juice?' }] },
          ],
          words: [{ es: 'la torta', en: 'the sandwich' }, { es: 'la salsa', en: 'the sauce' }, { es: 'tener hambre', en: 'to be hungry' }, { es: 'la servilleta', en: 'the napkin' }, { es: 'rico', en: 'tasty' }],
        },
        A1: {
          scene: { es: 'Es mediodía en el centro de Guadalajara. Hay una fila larga delante del puesto de Don Beto. Todos quieren una torta ahogada.', en: 'It is noon in the centre of Guadalajara. There is a long queue in front of Don Beto’s stand. Everybody wants a torta ahogada.' },
          opener: { es: '¡Bienvenido a Guadalajara! La torta ahogada es nuestro plato típico. El pan es duro por fuera y la salsa lo hace suave.', en: 'Welcome to Guadalajara! The torta ahogada is our typical dish. The bread is hard outside and the sauce makes it soft.' },
          decide: {
            ask: { es: 'La fila es muy larga y tienes clase en veinte minutos. ¿Qué haces?', en: 'The queue is very long and you have class in twenty minutes. What do you do?' },
            options: [
              { say: { es: 'Espero. La torta es más importante.', en: 'I wait. The sandwich is more important.' }, then: { es: 'Esperas quince minutos. La torta es deliciosa, pero llegas a clase corriendo.', en: 'You wait fifteen minutes. The sandwich is delicious, but you arrive at class running.' } },
              { say: { es: 'Pido una torta para llevar.', en: 'I order a sandwich to go.' }, then: { es: 'Beto la pone en una bolsa con mucha salsa. «¡Cuidado con tu mochila!»', en: 'Beto puts it in a bag with lots of sauce. “Careful with your backpack!”' } },
              { say: { es: 'Vuelvo mañana más temprano.', en: 'I come back tomorrow earlier.' }, then: { es: 'Beto dice: «A las nueve no hay fila. Te espero».', en: 'Beto says: “At nine there is no queue. I’ll be waiting for you.”' } },
            ],
          },
          twist: { es: 'Un turista pide la torta «sin picante y sin salsa». Beto te mira y no sabe qué decir.', en: 'A tourist orders the sandwich “not spicy and without sauce”. Beto looks at you and doesn’t know what to say.' },
          questions: [
            { q: { es: '¿Cuál es el plato típico de tu ciudad?', en: 'What is the typical dish of your city?' }, help: { es: 'El plato típico es… Tiene…', en: 'The typical dish is… It has…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde se come el mejor?', en: 'Where do you eat the best one?' }] },
            { q: { es: '¿Esperas en una fila larga para comer algo rico?', en: 'Do you wait in a long queue to eat something tasty?' }, help: { es: 'Sí, espero si… / No, no tengo paciencia.', en: 'Yes, I wait if… / No, I am not patient.' }, follow: [{ es: '¿Cuánto tiempo esperas como máximo?', en: 'How long do you wait at most?' }, { es: '¿Qué haces mientras esperas?', en: 'What do you do while you wait?' }] },
            { q: { es: '¿Comes rápido o despacio?', en: 'Do you eat fast or slowly?' }, help: { es: 'Como rápido porque… / Como despacio.', en: 'I eat fast because… / I eat slowly.' }, follow: [{ es: '¿Dónde comes al mediodía?', en: 'Where do you eat at noon?' }, { es: '¿Comes con otras personas?', en: 'Do you eat with other people?' }] },
            { q: { es: '¿Qué comida no te gusta nada?', en: 'What food do you not like at all?' }, help: { es: 'No me gusta nada… porque…', en: 'I don’t like … at all because…' }, follow: [{ es: '¿La comes si alguien la prepara para ti?', en: 'Do you eat it if someone makes it for you?' }, { es: '¿Desde cuándo no te gusta?', en: 'Since when don’t you like it?' }] },
          ],
          words: [{ es: 'la fila', en: 'the queue' }, { es: 'para llevar', en: 'to go' }, { es: 'duro', en: 'hard' }, { es: 'suave', en: 'soft' }, { es: 'el plato típico', en: 'the typical dish' }],
        },
        A2: {
          scene: { es: 'Don Beto prepara tortas desde los quince años. Su padre tenía el mismo puesto en la misma esquina. Hoy habla con su hijo, que estudia gastronomía y quiere cambiar la receta.', en: 'Don Beto has made sandwiches since he was fifteen. His father had the same stand on the same corner. Today he is talking with his son, who studies cooking and wants to change the recipe.' },
          opener: { es: 'Mi hijo dice que la salsa necesita «un toque moderno». Mi papá hacía esta salsa igual durante cincuenta años y nadie se quejó nunca. ¿Tú qué piensas?', en: 'My son says the sauce needs “a modern touch”. My dad made this sauce the same way for fifty years and nobody ever complained. What do you think?' },
          decide: {
            ask: { es: 'El hijo quiere ofrecer una torta vegetariana. Beto no está convencido. ¿Qué opinas?', en: 'The son wants to offer a vegetarian sandwich. Beto isn’t convinced. What is your opinion?' },
            options: [
              { say: { es: 'Probar una semana y ver si se vende.', en: 'Try it for a week and see if it sells.' }, then: { es: 'Beto acepta de mala gana. El viernes, la torta de frijoles se terminó antes que la de carnitas.', en: 'Beto agrees reluctantly. On Friday, the bean sandwich ran out before the carnitas one.' } },
              { say: { es: 'No cambiar nada: la tradición es lo que atrae a la gente.', en: 'Change nothing: tradition is what attracts people.' }, then: { es: 'El hijo se enoja: «Entonces, ¿para qué estudio?». Beto no contesta.', en: 'The son gets angry: “So why am I studying?” Beto doesn’t answer.' } },
              { say: { es: 'Tener las dos: la clásica y la nueva.', en: 'Have both: the classic and the new one.' }, then: { es: 'Los dos se dan la mano. Pero discuten media hora por el nombre de la nueva torta.', en: 'They shake hands. But they argue for half an hour about the name of the new sandwich.' } },
            ],
          },
          twist: { es: 'Un bloguero famoso de comida pasa por el puesto y graba un video. Beto se pone nervioso y se le cae la salsa.', en: 'A famous food blogger passes by the stand and records a video. Beto gets nervous and drops the sauce.' },
          questions: [
            { q: { es: '¿Qué receta de tu familia es especial?', en: 'What recipe from your family is special?' }, help: { es: 'Mi abuela preparaba… / En mi casa siempre comíamos…', en: 'My grandmother used to make… / At home we always ate…' }, follow: [{ es: '¿Sabes prepararla?', en: 'Do you know how to make it?' }, { es: '¿Quién te la enseñó?', en: 'Who taught it to you?' }] },
            { q: { es: '¿Probaste alguna vez una versión «moderna» de un plato clásico?', en: 'Have you ever tried a “modern” version of a classic dish?' }, help: { es: 'Sí, una vez probé… y me pareció…', en: 'Yes, once I tried… and I thought it was…' }, follow: [{ es: '¿Era mejor que la original?', en: 'Was it better than the original?' }, { es: '¿Dónde fue?', en: 'Where was it?' }] },
            { q: { es: '¿Tus padres y tú piensan igual sobre el trabajo?', en: 'Do your parents and you think the same about work?' }, help: { es: 'No, ellos creían que… y yo…', en: 'No, they believed that… and I…' }, follow: [{ es: '¿En qué no están de acuerdo?', en: 'What don’t you agree on?' }, { es: '¿Quién tenía razón?', en: 'Who was right?' }] },
            { q: { es: '¿Te pones nervioso cuando alguien te graba?', en: 'Do you get nervous when someone films you?' }, help: { es: 'Sí, me pongo… / No, me da igual.', en: 'Yes, I get… / No, I don’t mind.' }, follow: [{ es: '¿Subes videos a redes?', en: 'Do you post videos on social media?' }, { es: '¿Qué pasó la última vez?', en: 'What happened last time?' }] },
          ],
          words: [{ es: 'la receta', en: 'the recipe' }, { es: 'quejarse', en: 'to complain' }, { es: 'de mala gana', en: 'reluctantly' }, { es: 'terminarse', en: 'to run out' }, { es: 'grabar', en: 'to record' }],
        },
        B1: {
          scene: { es: 'Una cadena de restaurantes quiere comprar la receta de Don Beto para vender tortas ahogadas en todo el país. La oferta es muy buena, pero tendría que firmar que nunca más la vendería con su nombre.', en: 'A restaurant chain wants to buy Don Beto’s recipe to sell tortas ahogadas across the country. The offer is very good, but he would have to sign that he would never sell it under his name again.' },
          opener: { es: 'Con ese dinero podría pagarle la universidad a mi nieta y descansar por fin. Pero si firmo, mi papá dejaría de existir en esta esquina. ¿Se puede vender una herencia?', en: 'With that money I could pay for my granddaughter’s university and finally rest. But if I sign, my dad would stop existing on this corner. Can you sell an inheritance?' },
          decide: {
            ask: { es: 'Beto te pide un consejo antes de la reunión con los abogados. ¿Qué le dices?', en: 'Beto asks you for advice before the meeting with the lawyers. What do you tell him?' },
            options: [
              { say: { es: 'Que negocie: puede venderla, pero conservando el nombre de su padre.', en: 'That he should negotiate: he can sell it, but keep his father’s name.' }, then: { es: 'Los abogados piden una semana para pensarlo. Beto sonríe por primera vez en días.', en: 'The lawyers ask for a week to think about it. Beto smiles for the first time in days.' } },
              { say: { es: 'Que no venda: hay cosas que valen más que el dinero.', en: 'That he shouldn’t sell: some things are worth more than money.' }, then: { es: 'Beto asiente, pero su nieta, que escucha detrás, baja la cabeza.', en: 'Beto nods, but his granddaughter, listening behind, lowers her head.' } },
              { say: { es: 'Que acepte: ya trabajó lo suficiente y merece descansar.', en: 'That he should accept: he has worked enough and deserves to rest.' }, then: { es: 'Beto suspira: «Descansar… nunca supe hacer eso».', en: 'Beto sighs: “Rest… I never knew how to do that.”' } },
            ],
          },
          twist: { es: 'Su hijo revela que él ya habló con la cadena hace meses y que la oferta incluye un puesto de chef para él.', en: 'His son reveals that he already spoke with the chain months ago and the offer includes a chef job for him.' },
          questions: [
            { q: { es: '¿Crees que las recetas tradicionales deberían protegerse como el arte?', en: 'Do you think traditional recipes should be protected like art?' }, help: { es: 'Creo que sí, porque… / No creo que se pueda…', en: 'I think so, because… / I don’t think it’s possible to…' }, follow: [{ es: '¿Quién sería el dueño?', en: 'Who would be the owner?' }, { es: '¿Conoces algún caso?', en: 'Do you know a case?' }] },
            { q: { es: '¿Qué harías si te ofrecieran mucho dinero por algo que heredaste?', en: 'What would you do if you were offered a lot of money for something you inherited?' }, help: { es: 'Si me ofrecieran…, yo… / Dependería de…', en: 'If they offered me…, I would… / It would depend on…' }, follow: [{ es: '¿Lo hablarías con tu familia?', en: 'Would you talk about it with your family?' }, { es: '¿Hay algo que nunca venderías?', en: 'Is there anything you would never sell?' }] },
            { q: { es: '¿Las cadenas grandes mejoran la comida local o la hacen desaparecer?', en: 'Do big chains improve local food or make it disappear?' }, help: { es: 'Por un lado… pero, por otro… / Me parece que…', en: 'On one hand… but on the other… / It seems to me that…' }, follow: [{ es: '¿Qué pasó en tu ciudad?', en: 'What happened in your city?' }, { es: '¿Dónde comes tú normalmente?', en: 'Where do you normally eat?' }] },
            { q: { es: '¿Cómo reaccionarías si un familiar negociara a tus espaldas?', en: 'How would you react if a relative negotiated behind your back?' }, help: { es: 'Me sentiría… / Le diría que…', en: 'I would feel… / I would tell them that…' }, follow: [{ es: '¿Podrías perdonarlo?', en: 'Could you forgive them?' }, { es: '¿Tendría razón en algo?', en: 'Would they be right about anything?' }] },
          ],
          words: [{ es: 'la herencia', en: 'the inheritance' }, { es: 'firmar', en: 'to sign' }, { es: 'negociar', en: 'to negotiate' }, { es: 'la cadena', en: 'the chain' }, { es: 'a tus espaldas', en: 'behind your back' }],
        },
      },
    },
    // ------------------------------------------------------------ the distillery
    {
      id: 'tequila',
      name: { es: 'La destilería', en: 'The distillery' },
      who: { name: 'Ximena', role: { es: 'guía de la destilería', en: 'distillery guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un campo azul. Las plantas son agaves. Ximena trabaja aquí. Hay un edificio viejo y hay barriles.', en: 'It is a blue field. The plants are agaves. Ximena works here. There is an old building and there are barrels.' },
          opener: { es: '¡Hola! Soy Ximena. Mira, estas plantas son agaves.', en: 'Hi! I am Ximena. Look, these plants are agaves.' },
          decide: {
            ask: { es: 'Ximena tiene tres cosas para ver. ¿Qué quieres ver?', en: 'Ximena has three things to see. What do you want to see?' },
            options: [
              { say: { es: 'El campo de agaves.', en: 'The agave field.' }, then: { es: 'Ximena dice: «Son muy grandes. ¡Cuidado, pican!»', en: 'Ximena says: “They are very big. Careful, they are sharp!”' } },
              { say: { es: 'Los barriles.', en: 'The barrels.' }, then: { es: 'Ximena dice: «Los barriles son de madera. Huelen bien».', en: 'Ximena says: “The barrels are made of wood. They smell nice.”' } },
              { say: { es: 'La tienda.', en: 'The shop.' }, then: { es: 'Ximena dice: «Hay botellas, camisetas y dulces de agave».', en: 'Ximena says: “There are bottles, T-shirts and agave sweets.”' } },
            ],
          },
          twist: { es: 'Un burro come una planta. Ximena grita: «¡No, Pancho, no!». ¿Qué haces?', en: 'A donkey eats a plant. Ximena shouts: “No, Pancho, no!” What do you do?' },
          questions: [
            { q: { es: '¿Te gustan las plantas?', en: 'Do you like plants?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }, { es: '¿Cuántas?', en: 'How many?' }] },
            { q: { es: '¿Te gusta el campo o la ciudad?', en: 'Do you like the countryside or the city?' }, help: { es: 'Me gusta el campo. / Me gusta la ciudad.', en: 'I like the countryside. / I like the city.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Vives en el campo?', en: 'Do you live in the countryside?' }] },
            { q: { es: '¿Tienes animales?', en: 'Do you have animals?' }, help: { es: 'Sí, tengo un perro / un gato. / No, no tengo.', en: 'Yes, I have a dog / a cat. / No, I don’t.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is its name?' }, { es: '¿Te gustan los burros?', en: 'Do you like donkeys?' }] },
            { q: { es: '¿Compras recuerdos en los viajes?', en: 'Do you buy souvenirs on trips?' }, help: { es: 'Sí, compro… / No, no compro.', en: 'Yes, I buy… / No, I don’t.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Para quién?', en: 'Who for?' }] },
          ],
          words: [{ es: 'el campo', en: 'the field' }, { es: 'la planta', en: 'the plant' }, { es: 'el barril', en: 'the barrel' }, { es: 'la madera', en: 'wood' }, { es: 'el burro', en: 'the donkey' }],
        },
        A1: {
          scene: { es: 'Estás en el pueblo de Tequila, a una hora de Guadalajara. Hace calor. Ximena muestra a un grupo cómo se cortan los agaves con una herramienta especial.', en: 'You are in the town of Tequila, an hour from Guadalajara. It is hot. Ximena shows a group how agaves are cut with a special tool.' },
          opener: { es: 'Un agave necesita siete u ocho años para crecer. Por eso aquí trabajamos con mucha paciencia. ¿Quieres intentarlo?', en: 'An agave needs seven or eight years to grow. That’s why we work with a lot of patience here. Do you want to try?' },
          decide: {
            ask: { es: 'Ximena te ofrece la herramienta para cortar un agave. Es pesada. ¿Qué haces?', en: 'Ximena offers you the tool to cut an agave. It is heavy. What do you do?' },
            options: [
              { say: { es: 'Lo intento con cuidado.', en: 'I try it carefully.' }, then: { es: 'Después de diez minutos cortas una hoja. Todo el grupo aplaude.', en: 'After ten minutes you cut one leaf. The whole group applauds.' } },
              { say: { es: 'Prefiero mirar y sacar fotos.', en: 'I prefer to watch and take photos.' }, then: { es: 'Ximena dice: «Muy bien, pero luego me mandas las fotos».', en: 'Ximena says: “Fine, but then you send me the photos.”' } },
              { say: { es: 'Le pido a un trabajador que me enseñe.', en: 'I ask a worker to teach me.' }, then: { es: 'Don Lalo, de setenta años, lo hace en un minuto. Tú no puedes ni levantarla.', en: 'Don Lalo, seventy years old, does it in one minute. You can’t even lift it.' } },
            ],
          },
          twist: { es: 'Empieza a llover muy fuerte. El grupo corre al edificio, pero una señora mayor no puede caminar rápido.', en: 'It starts to rain very hard. The group runs to the building, but an older lady can’t walk fast.' },
          questions: [
            { q: { es: '¿Tienes paciencia o eres impaciente?', en: 'Are you patient or impatient?' }, help: { es: 'Soy paciente con… / Soy impaciente cuando…', en: 'I am patient with… / I am impatient when…' }, follow: [{ es: '¿Con quién pierdes la paciencia?', en: 'Who do you lose patience with?' }, { es: '¿Esperas bien en el médico?', en: 'Are you good at waiting at the doctor’s?' }] },
            { q: { es: '¿Qué trabajo físico sabes hacer?', en: 'What physical work do you know how to do?' }, help: { es: 'Sé… / No sé hacer nada de eso.', en: 'I know how to… / I don’t know how to do any of that.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Te gusta trabajar con las manos?', en: 'Do you like working with your hands?' }] },
            { q: { es: '¿Haces visitas guiadas cuando viajas?', en: 'Do you go on guided tours when you travel?' }, help: { es: 'Sí, porque… / No, prefiero ir solo.', en: 'Yes, because… / No, I prefer to go alone.' }, follow: [{ es: '¿Qué visita te gustó mucho?', en: 'What tour did you really like?' }, { es: '¿Cuánto cuesta normalmente?', en: 'How much does it usually cost?' }] },
            { q: { es: '¿Qué haces cuando llueve mucho?', en: 'What do you do when it rains a lot?' }, help: { es: 'Me quedo en casa y… / Salgo con paraguas.', en: 'I stay home and… / I go out with an umbrella.' }, follow: [{ es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }, { es: '¿Llueve mucho en tu ciudad?', en: 'Does it rain a lot in your city?' }] },
          ],
          words: [{ es: 'crecer', en: 'to grow' }, { es: 'la herramienta', en: 'the tool' }, { es: 'pesado', en: 'heavy' }, { es: 'la hoja', en: 'the leaf' }, { es: 'aplaudir', en: 'to applaud' }],
        },
        A2: {
          scene: { es: 'Ximena trabajaba en un banco en la Ciudad de México. Hace dos años dejó todo y volvió al pueblo de sus abuelos. Ahora es guía en la destilería familiar.', en: 'Ximena used to work at a bank in Mexico City. Two years ago she left everything and came back to her grandparents’ town. Now she is a guide at the family distillery.' },
          opener: { es: 'En el banco ganaba el doble, pero llegaba a casa a las diez de la noche y no veía el sol. Aquí gano menos, pero veo esto todos los días. ¿Tú cambiarías de vida así?', en: 'At the bank I earned twice as much, but I got home at ten at night and never saw the sun. Here I earn less, but I see this every day. Would you change your life like that?' },
          decide: {
            ask: { es: 'La destilería necesita más visitantes. Ximena te pide una idea. ¿Qué propones?', en: 'The distillery needs more visitors. Ximena asks you for an idea. What do you suggest?' },
            options: [
              { say: { es: 'Un tren turístico desde Guadalajara.', en: 'A tourist train from Guadalajara.' }, then: { es: 'Ximena ríe: «Ya existe. Lo que necesitamos es que pare aquí y no en la destilería grande».', en: 'Ximena laughs: “It already exists. What we need is for it to stop here and not at the big distillery.”' } },
              { say: { es: 'Clases de cocina con agave para familias.', en: 'Cooking classes with agave for families.' }, then: { es: 'A su abuela le encanta la idea. Esa misma tarde escribe tres recetas.', en: 'Her grandmother loves the idea. That same afternoon she writes three recipes.' } },
              { say: { es: 'Un festival de música en el campo.', en: 'A music festival in the field.' }, then: { es: 'Ximena duda: «¿Y quién limpia los agaves después?»', en: 'Ximena hesitates: “And who cleans the agaves afterwards?”' } },
            ],
          },
          twist: { es: 'Su exjefe del banco aparece en la visita con su familia. No la reconoce al principio.', en: 'Her ex-boss from the bank turns up on the tour with his family. He doesn’t recognise her at first.' },
          questions: [
            { q: { es: '¿Alguna vez dejaste algo importante para empezar de nuevo?', en: 'Have you ever left something important to start again?' }, help: { es: 'Sí, cuando… dejé… / No, nunca, pero…', en: 'Yes, when… I left… / No, never, but…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
            { q: { es: '¿Cómo era el pueblo o barrio de tus abuelos?', en: 'What was your grandparents’ town or neighbourhood like?' }, help: { es: 'Era… Había… La gente…', en: 'It was… There was… People…' }, follow: [{ es: '¿Ibas mucho?', en: 'Did you go often?' }, { es: '¿Cómo es ahora?', en: 'What is it like now?' }] },
            { q: { es: '¿Qué es más importante para ti: el sueldo o el tiempo libre?', en: 'What is more important for you: salary or free time?' }, help: { es: 'Para mí es más importante… porque…', en: 'For me … is more important because…' }, follow: [{ es: '¿Siempre pensaste igual?', en: 'Have you always thought the same?' }, { es: '¿Qué haces con tu tiempo libre?', en: 'What do you do with your free time?' }] },
            { q: { es: '¿Qué le dirías a un exjefe si lo encontraras de vacaciones?', en: 'What would you say to an ex-boss if you met them on holiday?' }, help: { es: 'Le diría… / Haría como que no lo veo.', en: 'I would say… / I would pretend not to see them.' }, follow: [{ es: '¿Tuviste un jefe muy bueno o muy malo?', en: 'Did you have a very good or very bad boss?' }, { es: '¿Qué aprendiste de él o ella?', en: 'What did you learn from them?' }] },
          ],
          words: [{ es: 'dejar', en: 'to leave, to quit' }, { es: 'ganar', en: 'to earn' }, { es: 'el doble', en: 'twice as much' }, { es: 'el exjefe', en: 'the ex-boss' }, { es: 'reconocer', en: 'to recognise' }],
        },
        B1: {
          scene: { es: 'La demanda mundial de tequila crece tanto que las grandes marcas plantan agave en cualquier terreno, incluso donde antes había bosque. Ximena prepara una charla para los turistas sobre el otro lado del éxito.', en: 'Global demand for tequila is growing so much that big brands plant agave on any land, even where there used to be forest. Ximena is preparing a talk for tourists about the other side of success.' },
          opener: { es: 'A la gente le encanta la historia bonita del tequila. Pero si sigue así, en diez años no quedará agua en algunos pueblos. ¿Debería contar eso en una visita turística, o arruinaría la experiencia?', en: 'People love the pretty story of tequila. But if it goes on like this, in ten years there will be no water left in some towns. Should I tell that on a tourist visit, or would it ruin the experience?' },
          decide: {
            ask: { es: 'Su tío, dueño de la destilería, no quiere que hable del tema. ¿Qué le aconsejas a Ximena?', en: 'Her uncle, the owner of the distillery, doesn’t want her to talk about it. What do you advise Ximena?' },
            options: [
              { say: { es: 'Contarlo, pero mostrando lo que hace bien su familia.', en: 'Tell it, but show what her family does well.' }, then: { es: 'El tío lo acepta cuando entiende que la sostenibilidad también vende.', en: 'The uncle accepts it when he understands that sustainability also sells.' } },
              { say: { es: 'No mezclar: la visita es para disfrutar.', en: 'Don’t mix them: the tour is for enjoying.' }, then: { es: 'Ximena guarda la charla en un cajón, pero esa noche no puede dormir.', en: 'Ximena puts the talk in a drawer, but that night she can’t sleep.' } },
              { say: { es: 'Hacer una visita especial, solo para quien quiera saber más.', en: 'Do a special tour, only for those who want to know more.' }, then: { es: 'La primera semana se apuntan dos personas. La tercera, cuarenta.', en: 'The first week two people sign up. The third, forty.' } },
            ],
          },
          twist: { es: 'Entre los turistas hay un ejecutivo de una de las grandes marcas. Al final de la charla levanta la mano.', en: 'Among the tourists there is an executive from one of the big brands. At the end of the talk he raises his hand.' },
          questions: [
            { q: { es: '¿Crees que los turistas quieren conocer los problemas de un lugar?', en: 'Do you think tourists want to know about a place’s problems?' }, help: { es: 'Creo que algunos sí, pero… / Depende de…', en: 'I think some do, but… / It depends on…' }, follow: [{ es: '¿Y tú, cuando viajas?', en: 'And you, when you travel?' }, { es: '¿Te cambió alguna vez la opinión un viaje?', en: 'Has a trip ever changed your opinion?' }] },
            { q: { es: '¿Qué producto famoso de tu país tiene un lado oscuro?', en: 'What famous product from your country has a dark side?' }, help: { es: 'Mucha gente no sabe que…', en: 'A lot of people don’t know that…' }, follow: [{ es: '¿Lo sigues comprando?', en: 'Do you keep buying it?' }, { es: '¿Qué se podría hacer?', en: 'What could be done?' }] },
            { q: { es: '¿Hasta qué punto un empleado debería obedecer a su familia en un negocio familiar?', en: 'To what extent should an employee obey their family in a family business?' }, help: { es: 'Hasta cierto punto… / Si fuera yo…', en: 'Up to a point… / If it were me…' }, follow: [{ es: '¿Trabajarías con tu familia?', en: 'Would you work with your family?' }, { es: '¿Qué reglas pondrías?', en: 'What rules would you set?' }] },
            { q: { es: '¿Qué crees que va a preguntar el ejecutivo?', en: 'What do you think the executive is going to ask?' }, help: { es: 'Supongo que preguntará… / A lo mejor quiere…', en: 'I suppose he’ll ask… / Maybe he wants…' }, follow: [{ es: '¿Qué le responderías tú?', en: 'What would you answer?' }, { es: '¿Sería una amenaza o una oportunidad?', en: 'Would it be a threat or an opportunity?' }] },
          ],
          words: [{ es: 'la demanda', en: 'the demand' }, { es: 'el terreno', en: 'the land, plot' }, { es: 'arruinar', en: 'to ruin' }, { es: 'la sostenibilidad', en: 'sustainability' }, { es: 'apuntarse', en: 'to sign up' }],
        },
      },
    },
    // ------------------------------------------------------------ the mariachi square
    {
      id: 'mariachis',
      name: { es: 'La plaza de los mariachis', en: 'The mariachi square' },
      who: { name: 'Gabriel', role: { es: 'mariachi', en: 'mariachi musician' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche. Hay una plaza con música. Gabriel tiene un sombrero grande y una guitarra.', en: 'It is night. There is a square with music. Gabriel has a big hat and a guitar.' },
          opener: { es: '¡Buenas noches! Soy Gabriel. ¿Te gusta la música?', en: 'Good evening! I am Gabriel. Do you like music?' },
          decide: {
            ask: { es: 'Gabriel puede tocar tres canciones. ¿Cuál quieres?', en: 'Gabriel can play three songs. Which one do you want?' },
            options: [
              { say: { es: 'Una canción alegre.', en: 'A happy song.' }, then: { es: 'Gabriel toca y la gente baila. ¡Qué divertido!', en: 'Gabriel plays and people dance. What fun!' } },
              { say: { es: 'Una canción triste.', en: 'A sad song.' }, then: { es: 'Gabriel canta despacio. Una señora llora un poco.', en: 'Gabriel sings slowly. A lady cries a little.' } },
              { say: { es: 'Una canción de amor.', en: 'A love song.' }, then: { es: 'Gabriel canta. Una pareja se besa en la plaza.', en: 'Gabriel sings. A couple kisses in the square.' } },
            ],
          },
          twist: { es: 'Gabriel te da su sombrero. ¡Es muy grande! Todos sacan fotos. ¿Qué haces?', en: 'Gabriel gives you his hat. It is very big! Everyone takes photos. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta cantar?', en: 'Do you like singing?' }, help: { es: 'Sí, me gusta. / No, no canto.', en: 'Yes, I like it. / No, I don’t sing.' }, follow: [{ es: '¿Cantas en la ducha?', en: 'Do you sing in the shower?' }, { es: '¿Cantas bien?', en: 'Do you sing well?' }] },
            { q: { es: '¿Tocas un instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco la guitarra / el piano. / No.', en: 'Yes, I play the guitar / the piano. / No.' }, follow: [{ es: '¿Qué instrumento te gusta?', en: 'What instrument do you like?' }, { es: '¿Quieres aprender?', en: 'Do you want to learn?' }] },
            { q: { es: '¿Te gusta bailar?', en: 'Do you like dancing?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Dónde bailas?', en: 'Where do you dance?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Usas sombrero?', en: 'Do you wear a hat?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿En verano o en invierno?', en: 'In summer or in winter?' }, { es: '¿De qué color?', en: 'What colour?' }] },
          ],
          words: [{ es: 'la noche', en: 'the night' }, { es: 'el sombrero', en: 'the hat' }, { es: 'la canción', en: 'the song' }, { es: 'alegre', en: 'happy' }, { es: 'triste', en: 'sad' }],
        },
        A1: {
          scene: { es: 'Estás en la plaza de los mariachis de Guadalajara. Hay muchos grupos con trajes negros y botones de plata. Las familias cenan y piden canciones.', en: 'You are in the mariachi square in Guadalajara. There are many groups in black suits with silver buttons. Families have dinner and request songs.' },
          opener: { es: '¡Bienvenido a la cuna del mariachi! Una canción cuesta cien pesos. ¿Es para alguien especial?', en: 'Welcome to the birthplace of mariachi! A song costs a hundred pesos. Is it for someone special?' },
          decide: {
            ask: { es: 'Hoy es el cumpleaños de tu amiga. ¿Qué le pides a Gabriel?', en: 'Today is your friend’s birthday. What do you ask Gabriel for?' },
            options: [
              { say: { es: '«Las mañanitas», la canción de cumpleaños.', en: '“Las mañanitas”, the birthday song.' }, then: { es: 'Todo el grupo canta para tu amiga. Ella se pone roja y ríe.', en: 'The whole group sings for your friend. She turns red and laughs.' } },
              { say: { es: 'Una canción muy famosa para cantar todos.', en: 'A very famous song so everyone can sing.' }, then: { es: 'Gabriel toca «Cielito lindo». Toda la plaza canta «¡Ay, ay, ay, ay!».', en: 'Gabriel plays “Cielito lindo”. The whole square sings “Ay, ay, ay, ay!”' } },
              { say: { es: 'Que mi amiga cante con ellos.', en: 'That my friend sings with them.' }, then: { es: 'Gabriel le da el micrófono. Tu amiga canta muy mal, pero todos aplauden.', en: 'Gabriel gives her the microphone. Your friend sings very badly, but everyone applauds.' } },
            ],
          },
          twist: { es: 'Otro grupo de mariachis empieza a tocar al lado, más fuerte. Gabriel se enoja un poco.', en: 'Another mariachi group starts playing right next to them, louder. Gabriel gets a bit angry.' },
          questions: [
            { q: { es: '¿Cómo celebras tu cumpleaños?', en: 'How do you celebrate your birthday?' }, help: { es: 'Normalmente… / Hago una fiesta con…', en: 'Usually… / I have a party with…' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿Te gusta ser el centro de atención?', en: 'Do you like being the centre of attention?' }] },
            { q: { es: '¿Qué canción cantas en los cumpleaños en tu país?', en: 'What song do you sing at birthdays in your country?' }, help: { es: 'Cantamos… / Es como…', en: 'We sing… / It’s like…' }, follow: [{ es: '¿Es en inglés o en otro idioma?', en: 'Is it in English or another language?' }, { es: '¿La cantas bien?', en: 'Do you sing it well?' }] },
            { q: { es: '¿Qué música escuchas normalmente?', en: 'What music do you usually listen to?' }, help: { es: 'Escucho… / Mi grupo favorito es…', en: 'I listen to… / My favourite band is…' }, follow: [{ es: '¿Dónde escuchas música?', en: 'Where do you listen to music?' }, { es: '¿Vas a conciertos?', en: 'Do you go to concerts?' }] },
            { q: { es: '¿Te molesta el ruido?', en: 'Does noise bother you?' }, help: { es: 'Sí, me molesta cuando… / No, no me importa.', en: 'Yes, it bothers me when… / No, I don’t mind.' }, follow: [{ es: '¿Tu calle es ruidosa?', en: 'Is your street noisy?' }, { es: '¿Qué ruido no soportas?', en: 'What noise can’t you stand?' }] },
          ],
          words: [{ es: 'el traje', en: 'the suit' }, { es: 'la plata', en: 'silver' }, { es: 'pedir una canción', en: 'to request a song' }, { es: 'el cumpleaños', en: 'the birthday' }, { es: 'enojarse', en: 'to get angry' }],
        },
        A2: {
          scene: { es: 'Gabriel toca en la plaza desde los doce años, como su papá y su abuelo. Pero esta noche hay pocas mesas ocupadas. Muchos turistas prefieren escuchar música con sus audífonos.', en: 'Gabriel has played in the square since he was twelve, like his dad and grandfather. But tonight few tables are taken. Many tourists prefer to listen to music on their headphones.' },
          opener: { es: 'Antes tocábamos hasta las tres de la mañana. Ahora, a las once ya nos vamos a casa. Mi hijo quiere ser programador. ¿Quién va a llevar el sombrero cuando yo no pueda?', en: 'We used to play until three in the morning. Now we go home at eleven. My son wants to be a programmer. Who is going to wear the hat when I can’t?' },
          decide: {
            ask: { es: 'Gabriel te pregunta qué debería hacer el grupo para tener más público. ¿Qué dices?', en: 'Gabriel asks you what the group should do to get a bigger audience. What do you say?' },
            options: [
              { say: { es: 'Tocar canciones pop en versión mariachi.', en: 'Play pop songs in mariachi style.' }, then: { es: 'Prueban con una canción de moda. Los jóvenes graban videos y piden otra.', en: 'They try a hit song. Young people record videos and ask for another.' } },
              { say: { es: 'Hacer clases para turistas antes del show.', en: 'Give classes for tourists before the show.' }, then: { es: 'La primera clase tiene tres alumnos. Uno de ellos es japonés y canta mejor que Gabriel.', en: 'The first class has three students. One of them is Japanese and sings better than Gabriel.' } },
              { say: { es: 'Seguir igual: lo auténtico siempre vuelve.', en: 'Stay the same: the authentic always comes back.' }, then: { es: 'Gabriel asiente, pero mira las mesas vacías.', en: 'Gabriel nods, but looks at the empty tables.' } },
            ],
          },
          twist: { es: 'El hijo de Gabriel llega con una laptop: hizo una página web para el grupo sin decirle nada.', en: 'Gabriel’s son arrives with a laptop: he made a website for the group without telling him.' },
          questions: [
            { q: { es: '¿Qué hacía tu familia los fines de semana cuando eras pequeño?', en: 'What did your family do at weekends when you were little?' }, help: { es: 'Los sábados íbamos… / Mi papá siempre…', en: 'On Saturdays we used to go… / My dad always…' }, follow: [{ es: '¿Lo extrañas?', en: 'Do you miss it?' }, { es: '¿Lo haces ahora con tu familia?', en: 'Do you do it now with your family?' }] },
            { q: { es: '¿Hay un oficio que está desapareciendo en tu país?', en: 'Is there a trade that is disappearing in your country?' }, help: { es: 'Sí, antes había muchos… y ahora…', en: 'Yes, there used to be many… and now…' }, follow: [{ es: '¿Por qué desaparece?', en: 'Why is it disappearing?' }, { es: '¿Es una pena?', en: 'Is it a shame?' }] },
            { q: { es: '¿Fuiste alguna vez a un concierto en la calle?', en: 'Have you ever been to a street concert?' }, help: { es: 'Sí, una vez vi… / No, pero…', en: 'Yes, once I saw… / No, but…' }, follow: [{ es: '¿Diste dinero?', en: 'Did you give money?' }, { es: '¿Cómo era la música?', en: 'What was the music like?' }] },
            { q: { es: '¿Los hijos deben seguir la tradición de sus padres?', en: 'Should children follow their parents’ tradition?' }, help: { es: 'Creo que no tienen que… pero…', en: 'I think they don’t have to… but…' }, follow: [{ es: '¿Tú seguiste alguna tradición familiar?', en: 'Did you follow a family tradition?' }, { es: '¿Qué pensaron tus padres?', en: 'What did your parents think?' }] },
          ],
          words: [{ es: 'ocupado', en: 'taken, busy' }, { es: 'los audífonos', en: 'headphones' }, { es: 'el público', en: 'the audience' }, { es: 'de moda', en: 'trendy' }, { es: 'extrañar', en: 'to miss' }],
        },
        B1: {
          scene: { es: 'Una plataforma de música propone a Gabriel grabar un disco con un DJ famoso: mariachi con música electrónica. Su padre, que fundó el grupo, dice que eso sería «traicionar a la plaza».', en: 'A music platform proposes that Gabriel record an album with a famous DJ: mariachi with electronic music. His father, who founded the group, says that would be “betraying the square”.' },
          opener: { es: 'Mi papá cree que, si el mariachi suena en las discotecas de Berlín, deja de ser nuestro. Yo creo que, si no suena en ningún lado, se muere. ¿Quién tiene razón?', en: 'My dad thinks that if mariachi plays in Berlin nightclubs, it stops being ours. I think that if it doesn’t play anywhere, it dies. Who is right?' },
          decide: {
            ask: { es: 'Gabriel tiene que contestar mañana. ¿Qué le aconsejas?', en: 'Gabriel has to answer tomorrow. What do you advise?' },
            options: [
              { say: { es: 'Que acepte, pero que el disco se presente primero en la plaza.', en: 'Accept, but present the album in the square first.' }, then: { es: 'Su padre no dice que sí, pero pregunta a qué hora sería la presentación.', en: 'His father doesn’t say yes, but asks what time the presentation would be.' } },
              { say: { es: 'Que no acepte: la plataforma se quedará con todo el dinero.', en: 'Don’t accept: the platform will keep all the money.' }, then: { es: 'Gabriel lee el contrato otra vez. Encuentra una cláusula que no había visto.', en: 'Gabriel reads the contract again. He finds a clause he hadn’t seen.' } },
              { say: { es: 'Que grabe dos discos: uno tradicional y uno electrónico.', en: 'Record two albums: a traditional one and an electronic one.' }, then: { es: 'El DJ acepta, si el tradicional también lleva su nombre. Nadie está contento del todo.', en: 'The DJ agrees, if the traditional one also carries his name. Nobody is fully happy.' } },
            ],
          },
          twist: { es: 'En internet aparece un video viral: el DJ ya usó, sin permiso, una grabación antigua del abuelo de Gabriel.', en: 'A viral video appears online: the DJ has already used, without permission, an old recording of Gabriel’s grandfather.' },
          questions: [
            { q: { es: '¿La música tradicional pierde su identidad si se mezcla con otros estilos?', en: 'Does traditional music lose its identity if it is mixed with other styles?' }, help: { es: 'No creo que la pierda, porque… / En parte sí…', en: 'I don’t think it loses it, because… / Partly yes…' }, follow: [{ es: '¿Conoces alguna mezcla que funcione bien?', en: 'Do you know a mix that works well?' }, { es: '¿Y una que no?', en: 'And one that doesn’t?' }] },
            { q: { es: '¿Qué significa para ti «traicionar» una tradición?', en: 'What does “betraying” a tradition mean to you?' }, help: { es: 'Para mí sería… / No se trata de…, sino de…', en: 'For me it would be… / It’s not about…, but about…' }, follow: [{ es: '¿Alguna vez sentiste que traicionabas algo?', en: 'Have you ever felt you were betraying something?' }, { es: '¿Quién decide qué es tradición?', en: 'Who decides what tradition is?' }] },
            { q: { es: '¿Qué harías si alguien usara la voz de tu abuelo sin permiso?', en: 'What would you do if someone used your grandfather’s voice without permission?' }, help: { es: 'Lo primero que haría… / Hablaría con…', en: 'The first thing I’d do… / I would talk to…' }, follow: [{ es: '¿Pedirías dinero o que lo quiten?', en: 'Would you ask for money or for it to be removed?' }, { es: '¿Y si a tu familia le gustara?', en: 'And if your family liked it?' }] },
            { q: { es: '¿Es más importante que una tradición se conserve igual o que siga viva aunque cambie?', en: 'Is it more important for a tradition to stay the same or to stay alive even if it changes?' }, help: { es: 'Prefiero que… aunque… / Lo ideal sería…', en: 'I prefer that… even if… / The ideal would be…' }, follow: [{ es: '¿Qué tradición de tu país cambió mucho?', en: 'What tradition in your country has changed a lot?' }, { es: '¿Para bien o para mal?', en: 'For better or worse?' }] },
          ],
          words: [{ es: 'grabar un disco', en: 'to record an album' }, { es: 'traicionar', en: 'to betray' }, { es: 'la cláusula', en: 'the clause' }, { es: 'sin permiso', en: 'without permission' }, { es: 'mezclar', en: 'to mix' }],
        },
      },
    },
    // ------------------------------------------------------------ the language school
    {
      id: 'escuela',
      name: { es: 'La escuela de idiomas', en: 'The language school' },
      who: { name: 'Profe Clara', role: { es: 'profesora de español', en: 'Spanish teacher' } },
      levels: {
        A0: {
          scene: { es: 'Es una escuela pequeña. Hay mesas, una pizarra y un mapa de México. Clara es la profesora.', en: 'It is a small school. There are tables, a board and a map of Mexico. Clara is the teacher.' },
          opener: { es: '¡Hola! Soy Clara. ¿Cómo te llamas?', en: 'Hi! I am Clara. What is your name?' },
          decide: {
            ask: { es: 'Clara pregunta: ¿dónde te sientas?', en: 'Clara asks: where do you sit?' },
            options: [
              { say: { es: 'Adelante, cerca de la pizarra.', en: 'At the front, near the board.' }, then: { es: 'Clara dice: «¡Muy bien! Ves todo».', en: 'Clara says: “Very good! You can see everything.”' } },
              { say: { es: 'Atrás, cerca de la ventana.', en: 'At the back, near the window.' }, then: { es: 'Clara dice: «Está bien, pero no mires la calle todo el tiempo».', en: 'Clara says: “That’s fine, but don’t look at the street all the time.”' } },
              { say: { es: 'Al lado de otro alumno.', en: 'Next to another student.' }, then: { es: 'El alumno dice: «Hola, soy Tom. Soy de Canadá».', en: 'The student says: “Hi, I’m Tom. I’m from Canada.”' } },
            ],
          },
          twist: { es: 'Clara dice: «Escribe tu nombre en la pizarra». Todos miran. ¿Qué haces?', en: 'Clara says: “Write your name on the board.” Everyone is watching. What do you do?' },
          questions: [
            { q: { es: '¿Cómo te llamas?', en: 'What is your name?' }, help: { es: 'Me llamo…', en: 'My name is…' }, follow: [{ es: '¿Cómo se escribe?', en: 'How do you spell it?' }, { es: '¿Tienes un apodo?', en: 'Do you have a nickname?' }] },
            { q: { es: '¿De dónde eres?', en: 'Where are you from?' }, help: { es: 'Soy de…', en: 'I am from…' }, follow: [{ es: '¿Dónde vives?', en: 'Where do you live?' }, { es: '¿Es una ciudad grande?', en: 'Is it a big city?' }] },
            { q: { es: '¿Qué idiomas hablas?', en: 'What languages do you speak?' }, help: { es: 'Hablo inglés y un poco de español.', en: 'I speak English and a little Spanish.' }, follow: [{ es: '¿Qué idioma es difícil?', en: 'What language is difficult?' }, { es: '¿Por qué estudias español?', en: 'Why do you study Spanish?' }] },
            { q: { es: '¿Te gusta estudiar?', en: 'Do you like studying?' }, help: { es: 'Sí, me gusta. / A veces.', en: 'Yes, I like it. / Sometimes.' }, follow: [{ es: '¿Dónde estudias?', en: 'Where do you study?' }, { es: '¿Estudias por la mañana o por la noche?', en: 'Do you study in the morning or at night?' }] },
          ],
          words: [{ es: 'la escuela', en: 'the school' }, { es: 'la pizarra', en: 'the board' }, { es: 'el alumno', en: 'the student' }, { es: 'escribir', en: 'to write' }, { es: 'el idioma', en: 'the language' }],
        },
        A1: {
          scene: { es: 'Es el primer día de clase en una escuela de español en Guadalajara. Hay alumnos de Corea, Brasil, Alemania y Estados Unidos. La profe Clara organiza un juego para conocerse.', en: 'It is the first day of class at a Spanish school in Guadalajara. There are students from Korea, Brazil, Germany and the United States. Teacher Clara organises a game to get to know each other.' },
          opener: { es: 'Bienvenidos. Aquí solo hablamos español, ¿de acuerdo? Si no saben una palabra, pueden usar las manos.', en: 'Welcome. Here we only speak Spanish, OK? If you don’t know a word, you can use your hands.' },
          decide: {
            ask: { es: 'El juego: cada alumno dice una cosa interesante de su vida. ¿Qué dices tú?', en: 'The game: each student says one interesting thing about their life. What do you say?' },
            options: [
              { say: { es: 'Mi trabajo, que es un poco raro.', en: 'My job, which is a bit unusual.' }, then: { es: 'Todos quieren saber más. Usas las manos para explicar y la clase ríe.', en: 'Everyone wants to know more. You use your hands to explain and the class laughs.' } },
              { say: { es: 'Un viaje muy especial.', en: 'A very special trip.' }, then: { es: 'La chica de Brasil fue al mismo lugar. Hablan todo el recreo.', en: 'The girl from Brazil went to the same place. You talk all through the break.' } },
              { say: { es: 'Mi animal, que es muy famoso en internet.', en: 'My pet, which is very famous online.' }, then: { es: 'Muestras una foto. El chico de Corea ya lo sigue en redes.', en: 'You show a photo. The boy from Korea already follows it online.' } },
            ],
          },
          twist: { es: 'El alumno alemán habla inglés todo el tiempo. Clara te mira: quiere que tú le expliques la regla.', en: 'The German student speaks English all the time. Clara looks at you: she wants you to explain the rule to him.' },
          questions: [
            { q: { es: '¿Por qué estudias español?', en: 'Why do you study Spanish?' }, help: { es: 'Estudio español porque… / Para…', en: 'I study Spanish because… / To…' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Qué te gusta del español?', en: 'What do you like about Spanish?' }] },
            { q: { es: '¿Qué es lo más difícil para ti?', en: 'What is the hardest thing for you?' }, help: { es: 'Lo más difícil es… / Los verbos…', en: 'The hardest thing is… / The verbs…' }, follow: [{ es: '¿Qué haces para mejorar?', en: 'What do you do to improve?' }, { es: '¿Y lo más fácil?', en: 'And the easiest?' }] },
            { q: { es: '¿Te gusta trabajar en grupo?', en: 'Do you like working in a group?' }, help: { es: 'Sí, porque… / Prefiero trabajar solo.', en: 'Yes, because… / I prefer to work alone.' }, follow: [{ es: '¿Hablas mucho en clase?', en: 'Do you talk a lot in class?' }, { es: '¿Eres tímido?', en: 'Are you shy?' }] },
            { q: { es: '¿Qué cosa interesante hay en tu vida?', en: 'What interesting thing is there in your life?' }, help: { es: 'Tengo… / Hago… / Vivo en…', en: 'I have… / I do… / I live in…' }, follow: [{ es: '¿Quién lo sabe?', en: 'Who knows about it?' }, { es: '¿Tienes una foto?', en: 'Do you have a photo?' }] },
          ],
          words: [{ es: 'el primer día', en: 'the first day' }, { es: 'conocerse', en: 'to get to know each other' }, { es: 'la palabra', en: 'the word' }, { es: 'el recreo', en: 'the break' }, { es: 'la regla', en: 'the rule' }],
        },
        A2: {
          scene: { es: 'Es la última semana del curso. La profe Clara propone una actividad final: cada alumno tiene que pasar una tarde con una familia de Guadalajara y luego contar la experiencia.', en: 'It is the last week of the course. Teacher Clara proposes a final activity: each student has to spend an afternoon with a family in Guadalajara and then tell the class about it.' },
          opener: { es: 'En clase aprendemos gramática, pero el idioma de verdad está en la cocina de una abuela. ¿Tú qué esperas de esa tarde?', en: 'In class we learn grammar, but the real language is in a grandmother’s kitchen. What do you expect from that afternoon?' },
          decide: {
            ask: { es: 'Clara te da tres familias para elegir. ¿Con cuál vas?', en: 'Clara gives you three families to choose from. Which one do you go with?' },
            options: [
              { say: { es: 'Con los Ramírez, que tienen una panadería.', en: 'With the Ramírez family, who have a bakery.' }, then: { es: 'Pasas la tarde haciendo pan. Vuelves cubierto de harina y con veinte palabras nuevas.', en: 'You spend the afternoon making bread. You come back covered in flour and with twenty new words.' } },
              { say: { es: 'Con una señora mayor que vive sola.', en: 'With an older lady who lives alone.' }, then: { es: 'Doña Elena te muestra fotos de los años sesenta y te cuenta toda su vida. No entiendes la mitad, pero no importa.', en: 'Doña Elena shows you photos from the sixties and tells you her whole life. You don’t understand half, but it doesn’t matter.' } },
              { say: { es: 'Con una familia con cinco niños.', en: 'With a family with five children.' }, then: { es: 'Los niños te corrigen cada palabra y te enseñan groserías. Clara no puede dejar de reír.', en: 'The kids correct every word and teach you rude words. Clara can’t stop laughing.' } },
            ],
          },
          twist: { es: 'En la presentación final, un compañero cuenta que la familia lo invitó a vivir con ellos el próximo año.', en: 'In the final presentation, a classmate says the family invited him to live with them next year.' },
          questions: [
            { q: { es: '¿Cómo aprendiste más: en clase o hablando con la gente?', en: 'How did you learn more: in class or talking to people?' }, help: { es: 'Creo que mejoré más cuando…', en: 'I think I learned more when…' }, follow: [{ es: '¿Qué palabra aprendiste en la calle?', en: 'What word did you learn on the street?' }, { es: '¿Tuviste un buen profesor?', en: 'Did you have a good teacher?' }] },
            { q: { es: '¿Alguna vez pasaste tiempo con una familia de otro país?', en: 'Have you ever spent time with a family from another country?' }, help: { es: 'Sí, una vez… / No, pero me gustaría…', en: 'Yes, once… / No, but I’d like to…' }, follow: [{ es: '¿Qué te sorprendió?', en: 'What surprised you?' }, { es: '¿Qué comieron?', en: 'What did you eat?' }] },
            { q: { es: '¿Qué hacías en el último día de clases en la escuela?', en: 'What did you do on the last day of school?' }, help: { es: 'Siempre hacíamos… / Mis compañeros y yo…', en: 'We always did… / My classmates and I…' }, follow: [{ es: '¿Te ponías triste?', en: 'Did you get sad?' }, { es: '¿Sigues en contacto con algún compañero?', en: 'Are you still in touch with any classmate?' }] },
            { q: { es: '¿Qué error divertido cometiste al hablar otro idioma?', en: 'What funny mistake have you made speaking another language?' }, help: { es: 'Una vez dije… en lugar de…', en: 'Once I said… instead of…' }, follow: [{ es: '¿Cómo reaccionó la gente?', en: 'How did people react?' }, { es: '¿Lo volviste a decir?', en: 'Did you say it again?' }] },
          ],
          words: [{ es: 'el curso', en: 'the course' }, { es: 'pasar una tarde', en: 'to spend an afternoon' }, { es: 'la harina', en: 'flour' }, { es: 'corregir', en: 'to correct' }, { es: 'la grosería', en: 'rude word' }],
        },
        B1: {
          scene: { es: 'La escuela de Clara está en peligro: muchos alumnos prefieren aprender con aplicaciones e inteligencia artificial. El director quiere reemplazar la mitad de las clases por un programa en línea.', en: 'Clara’s school is in danger: many students prefer to learn with apps and artificial intelligence. The director wants to replace half the classes with an online programme.' },
          opener: { es: 'Una aplicación te corrige el subjuntivo, de acuerdo. Pero no te enseña cuándo un mexicano dice «ahorita» y quiere decir «nunca». ¿Puede una máquina enseñar una cultura?', en: 'An app corrects your subjunctive, fine. But it doesn’t teach you when a Mexican says “ahorita” and means “never”. Can a machine teach a culture?' },
          decide: {
            ask: { es: 'Clara tiene que presentar una propuesta al director mañana. ¿Qué le sugieres?', en: 'Clara has to present a proposal to the director tomorrow. What do you suggest?' },
            options: [
              { say: { es: 'Un modelo mixto: gramática en línea y conversación con personas reales.', en: 'A mixed model: grammar online and conversation with real people.' }, then: { es: 'El director lo acepta, pero quiere que las clases en persona sean más caras.', en: 'The director accepts, but wants in-person classes to cost more.' } },
              { say: { es: 'Ofrecer lo que una aplicación no puede: salidas por la ciudad.', en: 'Offer what an app can’t: outings around the city.' }, then: { es: 'La primera salida es al mercado. Los alumnos aprenden más en dos horas que en una semana.', en: 'The first outing is to the market. The students learn more in two hours than in a week.' } },
              { say: { es: 'Renunciar y abrir su propia escuela.', en: 'Quit and open her own school.' }, then: { es: 'Clara se ríe, pero esa noche busca locales en alquiler.', en: 'Clara laughs, but that night she looks for premises to rent.' } },
            ],
          },
          twist: { es: 'Tres alumnos firman una carta al director diciendo que solo vienen a la escuela por Clara.', en: 'Three students sign a letter to the director saying they only come to the school because of Clara.' },
          questions: [
            { q: { es: '¿Crees que las aplicaciones pueden reemplazar a un buen profesor?', en: 'Do you think apps can replace a good teacher?' }, help: { es: 'Pueden ayudar con…, pero no… / Depende de…', en: 'They can help with…, but not… / It depends on…' }, follow: [{ es: '¿Qué aplicación usas?', en: 'What app do you use?' }, { es: '¿Qué no puede hacer?', en: 'What can’t it do?' }] },
            { q: { es: '¿Qué aprendiste de una cultura que no estaba en ningún libro?', en: 'What did you learn about a culture that wasn’t in any book?' }, help: { es: 'Me di cuenta de que… / Nadie me había dicho que…', en: 'I realised that… / Nobody had told me that…' }, follow: [{ es: '¿Cómo lo aprendiste?', en: 'How did you learn it?' }, { es: '¿Te causó algún problema?', en: 'Did it cause you any trouble?' }] },
            { q: { es: '¿Qué pasaría con los profesores si la mayoría estudiara con IA?', en: 'What would happen to teachers if most people studied with AI?' }, help: { es: 'Creo que tendrían que… / Probablemente…', en: 'I think they would have to… / Probably…' }, follow: [{ es: '¿Sería algo bueno o malo?', en: 'Would it be good or bad?' }, { es: '¿Qué trabajo cambiaría más?', en: 'Which job would change most?' }] },
            { q: { es: '¿Qué palabra o expresión de otro idioma no se puede traducir bien?', en: 'What word or expression from another language can’t be translated well?' }, help: { es: 'Por ejemplo… significa algo como…', en: 'For example… means something like…' }, follow: [{ es: '¿Cómo la explicarías?', en: 'How would you explain it?' }, { es: '¿Hay una así en tu idioma?', en: 'Is there one like that in your language?' }] },
          ],
          words: [{ es: 'en peligro', en: 'in danger' }, { es: 'reemplazar', en: 'to replace' }, { es: 'en línea', en: 'online' }, { es: 'renunciar', en: 'to resign' }, { es: 'el local', en: 'the premises' }],
        },
      },
    },
    // ------------------------------------------------------------ Lake Chapala
    {
      id: 'chapala',
      name: { es: 'El mirador del lago de Chapala', en: 'The Lake Chapala lookout' },
      who: { name: 'Don Aurelio', role: { es: 'pescador', en: 'fisherman' } },
      levels: {
        A0: {
          scene: { es: 'Es un lago muy grande. Hay barcos pequeños y pájaros blancos. Don Aurelio es pescador.', en: 'It is a very big lake. There are small boats and white birds. Don Aurelio is a fisherman.' },
          opener: { es: 'Buenas tardes. Soy Aurelio. Mira el lago. ¡Es bonito!', en: 'Good afternoon. I am Aurelio. Look at the lake. It is beautiful!' },
          decide: {
            ask: { es: 'Don Aurelio tiene un barco. ¿Qué quieres hacer?', en: 'Don Aurelio has a boat. What do you want to do?' },
            options: [
              { say: { es: 'Subir al barco.', en: 'Get on the boat.' }, then: { es: 'Aurelio dice: «¡Vamos! Siéntate aquí».', en: 'Aurelio says: “Let’s go! Sit here.”' } },
              { say: { es: 'Mirar los pájaros.', en: 'Look at the birds.' }, then: { es: 'Aurelio dice: «Son pelícanos. Vienen en invierno».', en: 'Aurelio says: “They are pelicans. They come in winter.”' } },
              { say: { es: 'Comer pescado.', en: 'Eat fish.' }, then: { es: 'Aurelio dice: «Mi esposa cocina pescado. ¡Es muy rico!»', en: 'Aurelio says: “My wife cooks fish. It is very tasty!”' } },
            ],
          },
          twist: { es: 'Un pelícano toma un pescado del barco. ¡Es rápido! Aurelio ríe. ¿Qué dices?', en: 'A pelican takes a fish from the boat. It is fast! Aurelio laughs. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el agua?', en: 'Do you like water?' }, help: { es: 'Sí, me gusta. / No mucho.', en: 'Yes, I like it. / Not much.' }, follow: [{ es: '¿Sabes nadar?', en: 'Can you swim?' }, { es: '¿Lago, río o mar?', en: 'Lake, river or sea?' }] },
            { q: { es: '¿Te gusta el pescado?', en: 'Do you like fish?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Comes pescado los viernes?', en: 'Do you eat fish on Fridays?' }, { es: '¿Cocinas pescado?', en: 'Do you cook fish?' }] },
            { q: { es: '¿Hay un lago en tu país?', en: 'Is there a lake in your country?' }, help: { es: 'Sí, hay un lago… / No, no hay.', en: 'Yes, there is a lake… / No, there isn’t.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Cómo se llama?', en: 'What is it called?' }] },
            { q: { es: '¿Qué animal te gusta?', en: 'What animal do you like?' }, help: { es: 'Me gusta el / la…', en: 'I like the…' }, follow: [{ es: '¿Te gustan los pájaros?', en: 'Do you like birds?' }, { es: '¿Qué animal no te gusta?', en: 'What animal don’t you like?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'el barco', en: 'the boat' }, { es: 'el pájaro', en: 'the bird' }, { es: 'el pescado', en: 'fish (food)' }, { es: 'el pescador', en: 'the fisherman' }],
        },
        A1: {
          scene: { es: 'El lago de Chapala es el más grande de México. En el malecón hay familias, vendedores de helados y muchos jubilados de Estados Unidos y Canadá que viven aquí.', en: 'Lake Chapala is the biggest in Mexico. On the promenade there are families, ice cream sellers and many retirees from the United States and Canada who live here.' },
          opener: { es: 'Yo pesco aquí desde niño. Ahora llevo turistas en mi lancha. Una vuelta de media hora cuesta doscientos pesos. ¿Te animas?', en: 'I have fished here since I was a child. Now I take tourists in my boat. A half-hour ride costs two hundred pesos. Are you up for it?' },
          decide: {
            ask: { es: 'Don Aurelio te propone tres paseos. ¿Cuál eliges?', en: 'Don Aurelio offers you three rides. Which do you choose?' },
            options: [
              { say: { es: 'Ir a la isla de los Alacranes.', en: 'Go to Scorpion Island.' }, then: { es: 'En la isla hay un restaurante pequeño y una leyenda de amor. Aurelio la cuenta muy despacio.', en: 'On the island there is a small restaurant and a love legend. Aurelio tells it very slowly.' } },
              { say: { es: 'Ver la puesta de sol desde el agua.', en: 'Watch the sunset from the water.' }, then: { es: 'El cielo se pone naranja y rosa. No hablan durante diez minutos.', en: 'The sky turns orange and pink. You don’t talk for ten minutes.' } },
              { say: { es: 'Aprender a pescar.', en: 'Learn to fish.' }, then: { es: 'Después de una hora, pescas un pez muy pequeño. Aurelio lo devuelve al agua.', en: 'After an hour, you catch a very small fish. Aurelio puts it back in the water.' } },
            ],
          },
          twist: { es: 'Una señora canadiense te pregunta en inglés dónde está el baño. Aurelio no habla inglés.', en: 'A Canadian lady asks you in English where the toilet is. Aurelio doesn’t speak English.' },
          questions: [
            { q: { es: '¿Dónde quieres vivir cuando seas mayor?', en: 'Where do you want to live when you are older?' }, help: { es: 'Quiero vivir en… porque…', en: 'I want to live in… because…' }, follow: [{ es: '¿Cerca del agua?', en: 'Near water?' }, { es: '¿En otro país?', en: 'In another country?' }] },
            { q: { es: '¿Te gustan los paseos en barco?', en: 'Do you like boat rides?' }, help: { es: 'Sí, me gustan. / No, me mareo.', en: 'Yes, I like them. / No, I get seasick.' }, follow: [{ es: '¿Dónde fue tu último paseo?', en: 'Where was your last ride?' }, { es: '¿Con quién fuiste?', en: 'Who did you go with?' }] },
            { q: { es: '¿Qué haces por la tarde normalmente?', en: 'What do you usually do in the afternoon?' }, help: { es: 'Por la tarde trabajo / paseo / descanso…', en: 'In the afternoon I work / go for a walk / rest…' }, follow: [{ es: '¿Ves la puesta de sol a veces?', en: 'Do you watch the sunset sometimes?' }, { es: '¿Y los domingos?', en: 'And on Sundays?' }] },
            { q: { es: '¿Conoces alguna leyenda de tu país?', en: 'Do you know any legend from your country?' }, help: { es: 'Sí, hay una leyenda de… / No conozco ninguna.', en: 'Yes, there is a legend about… / I don’t know any.' }, follow: [{ es: '¿Quién te la contó?', en: 'Who told it to you?' }, { es: '¿Da miedo?', en: 'Is it scary?' }] },
          ],
          words: [{ es: 'el malecón', en: 'the promenade' }, { es: 'el jubilado', en: 'the retiree' }, { es: 'la lancha', en: 'the small boat' }, { es: 'la puesta de sol', en: 'the sunset' }, { es: 'animarse', en: 'to be up for it' }],
        },
        A2: {
          scene: { es: 'Don Aurelio recuerda cómo era el lago hace cuarenta años: había más agua, más peces y casi ningún extranjero. Hoy los precios de las casas subieron tanto que sus hijos no pueden vivir en el pueblo.', en: 'Don Aurelio remembers what the lake was like forty years ago: there was more water, more fish and almost no foreigners. Today house prices have risen so much that his children can’t live in the town.' },
          opener: { es: 'Los gringos jubilados son buena gente, eh. Me dan trabajo con la lancha. Pero mi hija tuvo que irse a Guadalajara porque aquí una casa cuesta lo mismo que en Texas. ¿Cómo se arregla eso?', en: 'The American retirees are good people, you know. They give me work with the boat. But my daughter had to move to Guadalajara because here a house costs the same as in Texas. How do you fix that?' },
          decide: {
            ask: { es: 'Un jubilado estadounidense quiere comprar la casa de Aurelio. Paga muy bien. ¿Qué le dices a Aurelio?', en: 'An American retiree wants to buy Aurelio’s house. He pays very well. What do you tell Aurelio?' },
            options: [
              { say: { es: 'Que no venda: es la casa de su familia.', en: 'Don’t sell: it’s his family’s house.' }, then: { es: 'Aurelio asiente. Su esposa, en cambio, ya estaba pensando en una casa nueva cerca de su hija.', en: 'Aurelio nods. His wife, however, was already thinking about a new house near their daughter.' } },
              { say: { es: 'Que venda y se vaya cerca de su hija.', en: 'Sell and move near his daughter.' }, then: { es: 'Aurelio mira el lago mucho tiempo: «¿Y quién va a pescar aquí?»', en: 'Aurelio looks at the lake for a long time: “And who is going to fish here?”' } },
              { say: { es: 'Que alquile una parte de la casa.', en: 'Rent out part of the house.' }, then: { es: 'Aurelio no lo había pensado. El jubilado acepta alquilar el piso de arriba.', en: 'Aurelio hadn’t thought of it. The retiree agrees to rent the upstairs.' } },
            ],
          },
          twist: { es: 'El jubilado resulta ser un profesor de biología. Quiere ayudar a limpiar el lago, pero necesita un pescador que conozca cada rincón.', en: 'The retiree turns out to be a biology teacher. He wants to help clean the lake, but he needs a fisherman who knows every corner.' },
          questions: [
            { q: { es: '¿Cómo era tu ciudad hace veinte años?', en: 'What was your city like twenty years ago?' }, help: { es: 'Antes había… / La gente…', en: 'There used to be… / People…' }, follow: [{ es: '¿Qué cambió para mejor?', en: 'What changed for the better?' }, { es: '¿Y para peor?', en: 'And for the worse?' }] },
            { q: { es: '¿Hay muchos extranjeros donde vives?', en: 'Are there many foreigners where you live?' }, help: { es: 'Sí, hay muchos de… / No, casi no hay.', en: 'Yes, there are many from… / No, there are hardly any.' }, follow: [{ es: '¿Cómo se lleva la gente?', en: 'How do people get along?' }, { es: '¿Tienes amigos extranjeros?', en: 'Do you have foreign friends?' }] },
            { q: { es: '¿Te fuiste alguna vez de tu ciudad por trabajo o por estudios?', en: 'Have you ever left your city for work or study?' }, help: { es: 'Sí, me fui a… cuando… / No, siempre estuve en…', en: 'Yes, I moved to… when… / No, I’ve always lived…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué extrañabas?', en: 'What did you miss?' }] },
            { q: { es: '¿Venderías la casa de tu familia por mucho dinero?', en: 'Would you sell your family’s house for a lot of money?' }, help: { es: 'Sí, si… / No, nunca, porque…', en: 'Yes, if… / No, never, because…' }, follow: [{ es: '¿Qué recuerdos hay en esa casa?', en: 'What memories are in that house?' }, { es: '¿Qué harías con el dinero?', en: 'What would you do with the money?' }] },
          ],
          words: [{ es: 'recordar', en: 'to remember' }, { es: 'subir (los precios)', en: 'to rise (prices)' }, { es: 'alquilar', en: 'to rent' }, { es: 'el rincón', en: 'the corner, nook' }, { es: 'resultar ser', en: 'to turn out to be' }],
        },
        B1: {
          scene: { es: 'El lago de Chapala da agua a Guadalajara, pero cada año el nivel baja. El gobierno propone llevar todavía más agua a la ciudad. Los pescadores organizan una protesta en el malecón y Don Aurelio tiene que hablar.', en: 'Lake Chapala supplies water to Guadalajara, but every year the level drops. The government proposes taking even more water to the city. The fishermen organise a protest on the promenade and Don Aurelio has to speak.' },
          opener: { es: 'Yo entiendo que en Guadalajara la gente necesita agua para vivir. Pero si este lago se seca, no solo se mueren los peces: se muere un pueblo entero. ¿Quién decide qué vida vale más?', en: 'I understand that people in Guadalajara need water to live. But if this lake dries up, not only do the fish die: a whole town dies. Who decides which life is worth more?' },
          decide: {
            ask: { es: 'Aurelio te pide ayuda para el discurso. ¿Qué enfoque le recomiendas?', en: 'Aurelio asks you to help with the speech. What approach do you recommend?' },
            options: [
              { say: { es: 'Hablar con datos: cuánta agua se pierde en tuberías rotas en la ciudad.', en: 'Speak with data: how much water is lost in broken pipes in the city.' }, then: { es: 'Un periodista anota todo. Al día siguiente, la noticia sale en la portada.', en: 'A journalist writes everything down. The next day, the story is on the front page.' } },
              { say: { es: 'Contar su historia personal y la de su padre.', en: 'Tell his personal story and his father’s.' }, then: { es: 'Mucha gente se emociona. Un político se acerca a darle la mano, delante de las cámaras.', en: 'Many people are moved. A politician comes to shake his hand, in front of the cameras.' } },
              { say: { es: 'Proponer una solución en vez de solo protestar.', en: 'Propose a solution instead of just protesting.' }, then: { es: 'Aurelio presenta un plan para recoger agua de lluvia. Lo invitan a una reunión técnica.', en: 'Aurelio presents a plan to collect rainwater. He is invited to a technical meeting.' } },
            ],
          },
          twist: { es: 'En plena protesta, un joven de Guadalajara toma el micrófono: en su barrio no hay agua tres días por semana.', en: 'In the middle of the protest, a young man from Guadalajara takes the microphone: in his neighbourhood there is no water three days a week.' },
          questions: [
            { q: { es: '¿Cómo deberían repartirse los recursos naturales entre el campo y la ciudad?', en: 'How should natural resources be shared between the countryside and the city?' }, help: { es: 'Me parece que… / Lo justo sería…', en: 'It seems to me that… / The fair thing would be…' }, follow: [{ es: '¿Quién debería decidir?', en: 'Who should decide?' }, { es: '¿Hay un conflicto así en tu país?', en: 'Is there a conflict like this in your country?' }] },
            { q: { es: '¿Participaste alguna vez en una protesta?', en: 'Have you ever taken part in a protest?' }, help: { es: 'Sí, una vez… porque… / No, pero apoyaría…', en: 'Yes, once… because… / No, but I would support…' }, follow: [{ es: '¿Sirvió de algo?', en: 'Did it achieve anything?' }, { es: '¿Por qué causa protestarías?', en: 'What cause would you protest for?' }] },
            { q: { es: '¿Qué convence más: los datos o las historias personales?', en: 'What is more convincing: data or personal stories?' }, help: { es: 'A mí me convencen más… porque…', en: 'I find … more convincing because…' }, follow: [{ es: '¿Y a los políticos?', en: 'And politicians?' }, { es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }] },
            { q: { es: '¿Qué harías para ahorrar agua si fueras alcalde de una ciudad grande?', en: 'What would you do to save water if you were mayor of a big city?' }, help: { es: 'Si fuera alcalde, obligaría… / Invertiría en…', en: 'If I were mayor, I would require… / I would invest in…' }, follow: [{ es: '¿La gente lo aceptaría?', en: 'Would people accept it?' }, { es: '¿Tú qué haces para ahorrar agua?', en: 'What do you do to save water?' }] },
          ],
          words: [{ es: 'el nivel', en: 'the level' }, { es: 'secarse', en: 'to dry up' }, { es: 'el discurso', en: 'the speech' }, { es: 'la tubería', en: 'the pipe' }, { es: 'repartir', en: 'to share out' }],
        },
      },
    },
  ],
};
