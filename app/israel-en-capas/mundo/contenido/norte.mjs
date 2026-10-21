// El Norte · the Bahá’í gardens in Haifa, a hummus kitchen in Akko, a kibbutz, a fisherman
// on the Sea of Galilee and a Druze village on Mount Carmel. Five places, four levels each
// (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'norte',
  spots: [
    // ------------------------------------------------------------ the Haifa gardens
    {
      id: 'jardines',
      name: { es: 'Los jardines de Haifa', en: 'The Haifa gardens' },
      who: { name: 'Leila', role: { es: 'jardinera', en: 'gardener' } },
      levels: {
        A0: {
          scene: { es: 'Es un jardín enorme en una montaña. Hay escaleras, flores y fuentes. Abajo está el mar. Leila es jardinera. Tiene tijeras y un sombrero.', en: 'It is a huge garden on a mountain. There are stairs, flowers and fountains. Below is the sea. Leila is a gardener. She has scissors and a hat.' },
          opener: { es: 'Hola. Bienvenido al jardín. ¡Hay mil escalones! ¿Subes o bajas?', en: 'Hello. Welcome to the garden. There are a thousand steps! Are you going up or down?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Bajo.', en: 'I go down.' }, then: { es: 'Es fácil. Ves el mar y el puerto. ¡Qué bonito!', en: 'It is easy. You see the sea and the port. How beautiful!' } },
              { say: { es: 'Subo.', en: 'I go up.' }, then: { es: 'Es difícil. Arriba descansas y bebes agua.', en: 'It is hard. At the top you rest and drink water.' } },
              { say: { es: 'Me siento.', en: 'I sit down.' }, then: { es: 'Te sientas cerca de una fuente. Se oye el agua.', en: 'You sit near a fountain. You hear the water.' } },
            ],
          },
          twist: { es: 'Leila dice: «No se pisa la hierba». Tu pie está en la hierba. ¿Qué haces?', en: 'Leila says: “Don’t step on the grass.” Your foot is on the grass. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Cuál es tu flor favorita?', en: 'What is your favourite flower?' }, { es: '¿De qué color?', en: 'What colour?' }] },
            { q: { es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }, help: { es: 'Sí, tengo… / No.', en: 'Yes, I have… / No.' }, follow: [{ es: '¿Cuántas?', en: 'How many?' }, { es: '¿Les das agua?', en: 'Do you water them?' }] },
            { q: { es: '¿Hay un parque cerca de tu casa?', en: 'Is there a park near your home?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Vas mucho?', en: 'Do you go often?' }, { es: '¿Qué haces allí?', en: 'What do you do there?' }] },
            { q: { es: '¿Te gusta caminar?', en: 'Do you like walking?' }, help: { es: 'Sí, mucho. / No, prefiero el coche.', en: 'Yes, a lot. / No, I prefer the car.' }, follow: [{ es: '¿Dónde caminas?', en: 'Where do you walk?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'el jardín', en: 'the garden' }, { es: 'los escalones', en: 'the steps' }, { es: 'la fuente', en: 'the fountain' }, { es: 'la hierba', en: 'the grass' }, { es: 'subir', en: 'to go up' }],
        },
        A1: {
          scene: { es: 'Los jardines de Haifa bajan por el monte Carmelo en diecinueve terrazas, desde la cima hasta el centro de la ciudad. Pertenecen a la fe bahaí, una religión que habla de la unidad de todas las personas. Los jardineros vienen de muchos países y son voluntarios. Todo está perfecto: ni una hoja en el suelo. Leila corta las plantas con mucho cuidado.', en: 'The Haifa gardens run down Mount Carmel in nineteen terraces, from the top to the city centre. They belong to the Bahá’í faith, a religion that speaks of the unity of all people. The gardeners come from many countries and are volunteers. Everything is perfect: not a single leaf on the ground. Leila trims the plants very carefully.' },
          opener: { es: 'Soy de Brasil y estoy aquí como voluntaria durante un año. Trabajo seis horas al día, siempre al aire libre. Me levanto muy temprano, porque a mediodía hace demasiado calor. Lo más difícil no es el trabajo: es la perfección. Cada planta tiene su forma exacta. Mira, ¿quieres cortar esta rama? Despacio, ¿eh?', en: 'I’m from Brazil and I’m here as a volunteer for a year. I work six hours a day, always outdoors. I get up very early, because at midday it’s too hot. The hardest part isn’t the work: it’s the perfection. Every plant has its exact shape. Look, do you want to cut this branch? Slowly, OK?' },
          decide: {
            ask: { es: '¿Cómo cortas la rama?', en: 'How do you cut the branch?' },
            options: [
              { say: { es: 'Muy despacio, con cuidado.', en: 'Very slowly, carefully.' }, then: { es: 'Tardas cinco minutos, pero queda perfecta. Leila aplaude en silencio.', en: 'It takes you five minutes, but it looks perfect. Leila claps silently.' } },
              { say: { es: 'Rápido, de un corte.', en: 'Fast, in one cut.' }, then: { es: 'Cortas demasiado. Leila dice: «Tranquilo, crecerá otra vez».', en: 'You cut too much. Leila says: “Don’t worry, it will grow again.”' } },
              { say: { es: 'Prefiero mirar.', en: 'I’d rather watch.' }, then: { es: 'Leila te enseña cómo se recogen las hojas, una por una.', en: 'Leila shows you how the leaves are picked up, one by one.' } },
            ],
          },
          twist: { es: 'Un turista tira una botella al suelo. Leila la recoge sin decir nada. ¿Tú dices algo?', en: 'A tourist throws a bottle on the ground. Leila picks it up without saying anything. Do you say something?' },
          questions: [
            { q: { es: '¿Hiciste alguna vez un voluntariado?', en: 'Have you ever volunteered?' }, help: { es: 'Sí, en… / No, pero me gustaría.', en: 'Yes, at… / No, but I’d like to.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Qué hacías?', en: 'What did you do?' }] },
            { q: { es: '¿Eres perfeccionista?', en: 'Are you a perfectionist?' }, help: { es: 'Sí, con… / No, nada.', en: 'Yes, with… / No, not at all.' }, follow: [{ es: '¿En qué cosas?', en: 'With what things?' }, { es: '¿Es bueno o malo?', en: 'Is it good or bad?' }] },
            { q: { es: '¿Te gustaría trabajar al aire libre?', en: 'Would you like to work outdoors?' }, help: { es: 'Sí, porque… / No, prefiero una oficina.', en: 'Yes, because… / No, I prefer an office.' }, follow: [{ es: '¿Qué trabajo?', en: 'Which job?' }, { es: '¿Y en invierno?', en: 'And in winter?' }] },
            { q: { es: '¿Qué haces cuando alguien tira basura a la calle?', en: 'What do you do when someone throws litter in the street?' }, help: { es: 'Le digo… / No digo nada.', en: 'I tell them… / I say nothing.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Te pasó?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'la terraza', en: 'the terrace' }, { es: 'el voluntario', en: 'the volunteer' }, { es: 'la rama', en: 'the branch' }, { es: 'cortar', en: 'to cut' }, { es: 'al aire libre', en: 'outdoors' }],
        },
        A2: {
          scene: { es: 'Es verano y hay sequía. El ayuntamiento de Haifa pide a todos que reduzcan el uso de agua. Los jardines usan un sistema de riego muy moderno, gota a gota, pero aun así gastan mucha agua. Algunos vecinos dicen que es injusto que ellos no puedan regar sus plantas y los jardines sigan verdes. Leila tiene que explicar la situación a un grupo de vecinos que vino a protestar.', en: 'It’s summer and there’s a drought. Haifa council asks everyone to cut water use. The gardens use a very modern drip irrigation system, but they still use a lot of water. Some residents say it’s unfair that they can’t water their plants while the gardens stay green. Leila has to explain the situation to a group of residents who came to protest.' },
          opener: { es: 'Yo los entiendo. Mi vecina tiene un limonero en el balcón y se le está secando. Pero los jardines reciben más de un millón de visitantes al año, dan trabajo a mucha gente y usan agua reciclada en parte. Si los dejamos secar, la ciudad pierde uno de sus símbolos. Si seguimos igual, los vecinos se sienten tratados como de segunda. No sé qué decirles. ¿Tú qué les dirías?', en: 'I understand them. My neighbour has a lemon tree on her balcony and it’s drying out. But the gardens get more than a million visitors a year, provide work for many people and partly use recycled water. If we let them dry out, the city loses one of its symbols. If we carry on the same, the residents feel treated as second-class. I don’t know what to tell them. What would you tell them?' },
          decide: {
            ask: { es: '¿Qué propone Leila?', en: 'What does Leila propose?' },
            options: [
              { say: { es: 'Dejar secar las terrazas menos visitadas.', en: 'Let the least-visited terraces dry out.' }, then: { es: 'Algunas terrazas se ponen amarillas. Los vecinos ven que el jardín también hace un esfuerzo.', en: 'Some terraces turn yellow. The residents see the garden is making an effort too.' } },
              { say: { es: 'Regalar agua reciclada a los vecinos.', en: 'Give recycled water to the residents.' }, then: { es: 'Los vecinos vienen con cubos. El limonero de la vecina se salva.', en: 'Residents come with buckets. The neighbour’s lemon tree is saved.' } },
              { say: { es: 'Explicar los números con datos claros.', en: 'Explain the numbers with clear data.' }, then: { es: 'Algunos vecinos se convencen; otros dicen que los números no riegan sus plantas.', en: 'Some residents are convinced; others say numbers don’t water their plants.' } },
            ],
          },
          twist: { es: 'Un vecino propone cobrar la entrada a los jardines, que hoy es gratis, para pagar más agua para el barrio. ¿Es buena idea?', en: 'A resident proposes charging entry to the gardens, which are free today, to pay for more water for the neighbourhood. Is it a good idea?' },
          questions: [
            { q: { es: '¿Hay problemas de agua en tu país?', en: 'Are there water problems in your country?' }, help: { es: 'Sí, en verano… / No, llueve mucho.', en: 'Yes, in summer… / No, it rains a lot.' }, follow: [{ es: '¿Qué hace la gente?', en: 'What do people do?' }, { es: '¿Y tú?', en: 'And you?' }] },
            { q: { es: '¿Es justo que algunos lugares tengan privilegios en una crisis?', en: 'Is it fair for some places to have privileges in a crisis?' }, help: { es: 'Depende de… / No, porque…', en: 'It depends on… / No, because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Qué símbolo de tu ciudad protegerías siempre?', en: 'Which symbol of your city would you always protect?' }, help: { es: 'Protegería… porque…', en: 'I’d protect… because…' }, follow: [{ es: '¿Cuesta mucho mantenerlo?', en: 'Does it cost a lot to maintain?' }, { es: '¿Quién paga?', en: 'Who pays?' }] },
            { q: { es: '¿Te convencen más los datos o las historias personales?', en: 'Are you convinced more by data or by personal stories?' }, help: { es: 'Me convencen más… porque…', en: '… convince me more because…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y a tu familia?', en: 'And your family?' }] },
          ],
          words: [{ es: 'la sequía', en: 'drought' }, { es: 'el riego', en: 'irrigation' }, { es: 'regar', en: 'to water' }, { es: 'secarse', en: 'to dry out' }, { es: 'el cubo', en: 'the bucket' }],
        },
        B1: {
          scene: { es: 'Haifa es conocida en Israel como una ciudad donde judíos y árabes conviven con relativa normalidad: comparten barrios, hospitales, universidades y autobuses. Los jardines, de una religión minoritaria, están en el centro de todo y reciben a visitantes de cualquier origen. Leila termina su año de voluntariado. Antes de irse, la invitan a hablar en una escuela de secundaria sobre «convivir con quien piensa distinto». Hay alumnos judíos y árabes en la clase.', en: 'Haifa is known in Israel as a city where Jews and Arabs live together with relative normality: they share neighbourhoods, hospitals, universities and buses. The gardens, belonging to a minority religion, are at the centre of it all and welcome visitors of any background. Leila is finishing her year of volunteering. Before she leaves, she’s invited to speak at a secondary school about “living with people who think differently”. There are Jewish and Arab students in the class.' },
          opener: { es: 'Me da miedo hablar de esto. Yo soy extranjera; estoy aquí un año y me voy. Ellos viven aquí toda su vida, con historias familiares muy duras que yo no conozco. ¿Qué puedo enseñarles yo? Pero también pienso que a veces alguien de fuera ve cosas que los de dentro ya no ven: por ejemplo, que en este jardín nadie pregunta de dónde eres antes de darte agua. ¿Puede una persona de fuera aportar algo a una conversación tan difícil, o es mejor que escuche?', en: 'I’m scared to talk about this. I’m a foreigner; I’m here for a year and then I leave. They live here all their lives, with very hard family histories I don’t know. What can I teach them? But I also think that sometimes someone from outside sees things insiders no longer see: for example, that in this garden nobody asks where you’re from before giving you water. Can an outsider contribute something to such a difficult conversation, or is it better to listen?' },
          decide: {
            ask: { es: '¿Cómo empieza Leila la charla?', en: 'How does Leila start the talk?' },
            options: [
              { say: { es: 'Preguntando antes de hablar.', en: 'By asking before speaking.' }, then: { es: 'Pide a cada alumno que cuente un lugar donde se siente en casa. Las respuestas se parecen más de lo que esperaban.', en: 'She asks each student to describe a place where they feel at home. The answers are more alike than they expected.' } },
              { say: { es: 'Contando su propia historia en Brasil.', en: 'By telling her own story in Brazil.' }, then: { es: 'Habla de las diferencias en su país. Los alumnos hacen muchas preguntas sobre Brasil y se relajan.', en: 'She talks about differences in her country. The students ask many questions about Brazil and relax.' } },
              { say: { es: 'Llevando a la clase al jardín.', en: 'By taking the class to the garden.' }, then: { es: 'Trabajan juntos dos horas cortando plantas. Casi no hablan, pero al final se ríen juntos.', en: 'They work together for two hours trimming plants. They barely talk, but at the end they laugh together.' } },
            ],
          },
          twist: { es: 'Un alumno levanta la mano y dice: «Es fácil hablar de convivencia cuando te vas en un mes». La clase se queda en silencio. ¿Qué debería responder Leila?', en: 'A student raises his hand and says: “It’s easy to talk about coexistence when you leave in a month.” The class goes silent. What should Leila answer?' },
          questions: [
            { q: { es: '¿Una persona de fuera puede entender un conflicto local?', en: 'Can an outsider understand a local conflict?' }, help: { es: 'En parte, porque… / Es difícil, porque…', en: 'Partly, because… / It’s hard, because…' }, follow: [{ es: '¿Qué ventaja tiene?', en: 'What advantage do they have?' }, { es: '¿Qué le falta?', en: 'What do they lack?' }] },
            { q: { es: '¿Dónde conviven en tu ciudad personas muy distintas?', en: 'Where do very different people live together in your city?' }, help: { es: 'En… por ejemplo, en el hospital, en la escuela…', en: 'In… for example, at hospital, at school…' }, follow: [{ es: '¿Funciona bien?', en: 'Does it work well?' }, { es: '¿Por qué ahí sí?', en: 'Why there?' }] },
            { q: { es: '¿Hacer algo juntos acerca más que hablar?', en: 'Does doing something together bring people closer than talking?' }, help: { es: 'Creo que sí, porque… / Hacen falta las dos cosas…', en: 'I think so, because… / Both are needed…' }, follow: [{ es: '¿Una experiencia tuya?', en: 'An experience of yours?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cuándo es mejor escuchar que opinar?', en: 'When is it better to listen than to give an opinion?' }, help: { es: 'Cuando… / Si no conozco bien…', en: 'When… / If I don’t know well…' }, follow: [{ es: '¿Te cuesta escuchar?', en: 'Do you find it hard to listen?' }, { es: '¿Te pasó hace poco?', en: 'Has it happened recently?' }] },
          ],
          words: [{ es: 'convivir', en: 'to live together' }, { es: 'minoritario', en: 'minority (adj.)' }, { es: 'aportar', en: 'to contribute' }, { es: 'extranjero', en: 'foreigner' }, { es: 'la convivencia', en: 'coexistence' }],
        },
      },
    },
    // ------------------------------------------------------------ hummus in Akko
    {
      id: 'akko',
      name: { es: 'El hummus de Akko', en: 'Hummus in Akko' },
      who: { name: 'Ahmad', role: { es: 'cocinero de hummus', en: 'hummus cook' } },
      levels: {
        A0: {
          scene: { es: 'Es una ciudad vieja con murallas junto al mar. En una calle pequeña hay un restaurante con seis mesas. Ahmad cocina hummus. Hay pan, aceite y cebolla.', en: 'It is an old walled city by the sea. On a small street there is a restaurant with six tables. Ahmad cooks hummus. There is bread, oil and onion.' },
          opener: { es: '¡Hola! Siéntate. ¿Hummus? ¡Es el mejor de Akko!', en: 'Hello! Sit down. Hummus? It is the best in Akko!' },
          decide: {
            ask: { es: '¿Cómo comes el hummus?', en: 'How do you eat the hummus?' },
            options: [
              { say: { es: 'Con pan.', en: 'With bread.' }, then: { es: 'Ahmad dice: «¡Así! Con la mano y el pan».', en: 'Ahmad says: “Like that! With your hand and the bread.”' } },
              { say: { es: 'Con cuchara.', en: 'With a spoon.' }, then: { es: 'Ahmad ríe: «¿Cuchara? ¡No! Usa el pan».', en: 'Ahmad laughs: “A spoon? No! Use the bread.”' } },
              { say: { es: 'Con cebolla.', en: 'With onion.' }, then: { es: 'Muerdes la cebolla cruda. ¡Es fuerte! Ahmad sonríe.', en: 'You bite the raw onion. It is strong! Ahmad smiles.' } },
            ],
          },
          twist: { es: 'Son las dos de la tarde. Ahmad dice: «Se terminó el hummus». ¿Llegas tarde mañana?', en: 'It is two in the afternoon. Ahmad says: “The hummus is finished.” Will you come late tomorrow?' },
          questions: [
            { q: { es: '¿Comes hummus?', en: 'Do you eat hummus?' }, help: { es: 'Sí. / No, nunca.', en: 'Yes. / No, never.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Con qué?', en: 'With what?' }] },
            { q: { es: '¿Comes con las manos?', en: 'Do you eat with your hands?' }, help: { es: 'Sí, a veces. / No.', en: 'Yes, sometimes. / No.' }, follow: [{ es: '¿Qué comida?', en: 'Which food?' }, { es: '¿En casa o fuera?', en: 'At home or out?' }] },
            { q: { es: '¿Te gusta la cebolla?', en: 'Do you like onion?' }, help: { es: 'Sí. / No, nada.', en: 'Yes. / No, not at all.' }, follow: [{ es: '¿Cruda o cocinada?', en: 'Raw or cooked?' }, { es: '¿Con qué?', en: 'With what?' }] },
            { q: { es: '¿Desayunas mucho o poco?', en: 'Do you eat a big or small breakfast?' }, help: { es: 'Mucho. / Poco. / Nada.', en: 'A lot. / A little. / Nothing.' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿A qué hora?', en: 'At what time?' }] },
          ],
          words: [{ es: 'el hummus', en: 'hummus' }, { es: 'el pan', en: 'bread' }, { es: 'el aceite', en: 'oil' }, { es: 'la cebolla', en: 'onion' }, { es: 'la cuchara', en: 'the spoon' }],
        },
        A1: {
          scene: { es: 'Akko es una de las ciudades más antiguas del mundo. Tiene murallas de los cruzados, un puerto de pescadores y un mercado árabe. En Israel el hummus no es una salsa: es un plato principal, sobre todo para desayunar. Los buenos lugares abren a las seis de la mañana y cierran cuando se termina el hummus, normalmente antes de las dos.', en: 'Akko is one of the oldest cities in the world. It has crusader walls, a fishing port and an Arab market. In Israel hummus isn’t a dip: it’s a main dish, especially for breakfast. The good places open at six in the morning and close when the hummus runs out, usually before two.' },
          opener: { es: 'Me levanto a las cuatro para cocinar los garbanzos. Mi receta es de mi abuelo: garbanzos, tahina, limón, ajo y sal. Nada más. El secreto es el tiempo y las manos. Muchos turistas me preguntan si vendo hummus para llevar en botes de plástico. No: el hummus se come aquí, caliente, en el plato. ¿Quieres ver la cocina?', en: 'I get up at four to cook the chickpeas. My recipe is my grandfather’s: chickpeas, tahini, lemon, garlic and salt. Nothing else. The secret is time and hands. Many tourists ask if I sell takeaway hummus in plastic tubs. No: hummus is eaten here, warm, on the plate. Do you want to see the kitchen?' },
          decide: {
            ask: { es: '¿Qué haces en la cocina?', en: 'What do you do in the kitchen?' },
            options: [
              { say: { es: 'Pruebo la tahina sola.', en: 'I taste the tahini on its own.' }, then: { es: 'Es espesa y un poco amarga. Ahmad dice: «Sola no. Con limón».', en: 'It’s thick and a bit bitter. Ahmad says: “Not alone. With lemon.”' } },
              { say: { es: 'Pregunto cuántos garbanzos usa.', en: 'I ask how many chickpeas he uses.' }, then: { es: '«Veinte kilos al día», dice. «Los sábados, treinta».', en: '“Twenty kilos a day,” he says. “On Saturdays, thirty.”' } },
              { say: { es: 'Ayudo a mezclar.', en: 'I help mix.' }, then: { es: 'Mezclas diez minutos. Te duele el brazo. Ahmad lo hace todos los días.', en: 'You mix for ten minutes. Your arm hurts. Ahmad does it every day.' } },
            ],
          },
          twist: { es: 'Un cliente pide hummus con aguacate y pollo. Ahmad lo mira serio. ¿Qué crees que dice?', en: 'A customer asks for hummus with avocado and chicken. Ahmad looks at him seriously. What do you think he says?' },
          questions: [
            { q: { es: '¿Qué desayunan en tu país?', en: 'What do people have for breakfast in your country?' }, help: { es: 'Normalmente desayunamos…', en: 'Usually we have…' }, follow: [{ es: '¿Es dulce o salado?', en: 'Sweet or savoury?' }, { es: '¿Tú también?', en: 'You too?' }] },
            { q: { es: '¿Tu familia tiene una receta secreta?', en: 'Does your family have a secret recipe?' }, help: { es: 'Sí, mi… hace… / No.', en: 'Yes, my… makes… / No.' }, follow: [{ es: '¿Sabes hacerla?', en: 'Can you make it?' }, { es: '¿Es de verdad secreta?', en: 'Is it really secret?' }] },
            { q: { es: '¿Te levantas muy temprano para algo?', en: 'Do you get up very early for something?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, to… / No, never.' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gusta cambiar las recetas tradicionales?', en: 'Do you like changing traditional recipes?' }, help: { es: 'Sí, me gusta probar… / No, prefiero…', en: 'Yes, I like trying… / No, I prefer…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Salió bien?', en: 'Did it turn out well?' }] },
          ],
          words: [{ es: 'los garbanzos', en: 'chickpeas' }, { es: 'el ajo', en: 'garlic' }, { es: 'mezclar', en: 'to mix' }, { es: 'para llevar', en: 'to take away' }, { es: 'espeso', en: 'thick' }],
        },
        A2: {
          scene: { es: 'Una famosa guía de restaurantes pone el local de Ahmad en su lista de «los mejores del mundo». Al día siguiente hay una cola de dos horas en la calle. Los vecinos de siempre, pescadores y trabajadores del puerto, ya no consiguen mesa para desayunar. Una empresa le ofrece abrir un restaurante grande en Tel Aviv con su nombre.', en: 'A famous restaurant guide puts Ahmad’s place on its list of “the best in the world”. The next day there’s a two-hour queue in the street. The regular locals, fishermen and port workers, can no longer get a table for breakfast. A company offers him to open a big restaurant in Tel Aviv with his name.' },
          opener: { es: 'Estoy contento, claro. Pero esta mañana Abu Salim, que desayuna aquí desde hace cuarenta años, se fue sin comer. Me dio vergüenza. Los turistas pagan bien y sacan fotos, pero los pescadores son mi familia. Y lo de Tel Aviv… mi hijo dice que es la oportunidad de nuestra vida. Yo no sé si quiero cocinar para quinientas personas. ¿Qué harías tú?', en: 'I’m happy, of course. But this morning Abu Salim, who has had breakfast here for forty years, left without eating. I felt ashamed. Tourists pay well and take photos, but the fishermen are my family. And the Tel Aviv thing… my son says it’s the opportunity of our lives. I don’t know if I want to cook for five hundred people. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Ahmad?', en: 'What does Ahmad decide?' },
            options: [
              { say: { es: 'Reservar dos mesas cada mañana para los vecinos.', en: 'Reserve two tables every morning for locals.' }, then: { es: 'Abu Salim vuelve. Los turistas esperan un poco más, pero entienden.', en: 'Abu Salim comes back. Tourists wait a little longer, but they understand.' } },
              { say: { es: 'Abrir en Tel Aviv con su hijo.', en: 'Open in Tel Aviv with his son.' }, then: { es: 'El hijo lleva el restaurante grande. Ahmad se queda en Akko y va los martes a probar el hummus.', en: 'The son runs the big restaurant. Ahmad stays in Akko and goes on Tuesdays to taste the hummus.' } },
              { say: { es: 'Abrir más temprano, a las cinco, solo para los pescadores.', en: 'Open earlier, at five, just for the fishermen.' }, then: { es: 'La «hora de los pescadores» se hace famosa también. Ahora los turistas quieren venir a las cinco.', en: 'The “fishermen’s hour” becomes famous too. Now tourists want to come at five.' } },
            ],
          },
          twist: { es: 'Un turista publica una mala crítica: «Cerraron a la una. Muy poco profesional». ¿Debería Ahmad abrir más horas?', en: 'A tourist posts a bad review: “They closed at one. Very unprofessional.” Should Ahmad open longer hours?' },
          questions: [
            { q: { es: '¿Hiciste alguna vez una cola larga para comer?', en: 'Have you ever queued a long time to eat?' }, help: { es: 'Sí, en… esperé… / No, nunca.', en: 'Yes, in… I waited… / No, never.' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Confías en las listas de «los mejores restaurantes»?', en: 'Do you trust “best restaurant” lists?' }, help: { es: 'Sí, porque… / No, prefiero…', en: 'Yes, because… / No, I prefer…' }, follow: [{ es: '¿Cómo eliges dónde comer?', en: 'How do you choose where to eat?' }, { es: '¿Lees reseñas?', en: 'Do you read reviews?' }] },
            { q: { es: '¿El éxito puede estropear algo bueno?', en: 'Can success spoil something good?' }, help: { es: 'Sí, por ejemplo… / No, si…', en: 'Yes, for example… / No, if…' }, follow: [{ es: '¿Viste un caso?', en: 'Have you seen a case?' }, { es: '¿Qué cambió?', en: 'What changed?' }] },
            { q: { es: '¿Trabajarías con tu familia?', en: 'Would you work with your family?' }, help: { es: 'Sí, con mi… / No, nunca, porque…', en: 'Yes, with my… / No, never, because…' }, follow: [{ es: '¿Quién mandaría?', en: 'Who would be the boss?' }, { es: '¿Qué sería difícil?', en: 'What would be hard?' }] },
          ],
          words: [{ es: 'la cola', en: 'the queue' }, { es: 'la crítica', en: 'the review' }, { es: 'reservar', en: 'to reserve' }, { es: 'el pescador', en: 'the fisherman' }, { es: 'dar vergüenza', en: 'to feel ashamed' }],
        },
        B1: {
          scene: { es: 'En Akko viven familias judías y árabes desde hace generaciones. La ciudad vieja es mayoritariamente árabe, con muchos edificios antiguos en mal estado y alquileres que empiezan a subir porque llegan hoteles boutique y galerías. El ayuntamiento propone un gran plan turístico para la ciudad vieja: restaurar fachadas, abrir hoteles y prohibir algunos puestos callejeros que «dan mala imagen». Ahmad es invitado a la presentación del plan como «representante de la cocina tradicional».', en: 'Jewish and Arab families have lived in Akko for generations. The old city is mostly Arab, with many old buildings in poor condition and rents starting to rise as boutique hotels and galleries arrive. The council proposes a big tourism plan for the old city: restore façades, open hotels and ban some street stalls that “give a bad image”. Ahmad is invited to the plan’s presentation as “representative of traditional cuisine”.' },
          opener: { es: 'Me usan como decoración: el cocinero árabe simpático en la foto del folleto. Pero nadie me preguntó qué pienso. Mi primo tiene un puesto de pan en la calle desde hace treinta años, y está en la lista de los que «dan mala imagen». Al mismo tiempo, las casas se caen, y sin dinero nadie las va a arreglar. El turismo puede salvar la ciudad vieja o vaciarla de su gente. ¿Cómo se moderniza un lugar sin borrar a quienes viven en él?', en: 'They’re using me as decoration: the friendly Arab cook in the brochure photo. But nobody asked me what I think. My cousin has had a bread stall in the street for thirty years, and he’s on the list of those who “give a bad image”. At the same time, the houses are falling down, and without money nobody will fix them. Tourism can save the old city or empty it of its people. How do you modernise a place without erasing those who live there?' },
          decide: {
            ask: { es: '¿Qué dice Ahmad en la presentación?', en: 'What does Ahmad say at the presentation?' },
            options: [
              { say: { es: 'Que apoya el plan si los vecinos participan en las decisiones.', en: 'That he supports the plan if residents take part in decisions.' }, then: { es: 'Crean un comité con seis vecinos. Las reuniones son largas y difíciles, pero el puesto del primo se queda.', en: 'They create a committee with six residents. Meetings are long and hard, but the cousin’s stall stays.' } },
              { say: { es: 'Que se niega a aparecer en el folleto.', en: 'That he refuses to appear in the brochure.' }, then: { es: 'Su decisión sale en la prensa. El ayuntamiento cambia la palabra «mala imagen» por «puestos a renovar».', en: 'His decision appears in the press. The council changes “bad image” to “stalls to be renewed”.' } },
              { say: { es: 'Que el plan debe incluir ayudas para arreglar casas de familias del barrio.', en: 'That the plan must include grants to fix local families’ houses.' }, then: { es: 'Se aprueba un fondo pequeño. Treinta familias arreglan el techo antes del invierno.', en: 'A small fund is approved. Thirty families fix their roofs before winter.' } },
            ],
          },
          twist: { es: 'Un inversor le ofrece a Ahmad comprar su local por una cifra enorme para convertirlo en un hotel de lujo. Con ese dinero podría pagar la universidad de sus cuatro hijos. Su primo le dice: «Si vendes tú, vendemos todos». ¿Qué responsabilidad tiene una persona con su barrio?', en: 'An investor offers Ahmad a huge sum for his premises to turn them into a luxury hotel. With that money he could pay for his four children’s university. His cousin says: “If you sell, we all sell.” What responsibility does a person have to their neighbourhood?' },
          questions: [
            { q: { es: '¿Te sentiste alguna vez usado como «decoración» en algún lugar?', en: 'Have you ever felt used as “decoration” somewhere?' }, help: { es: 'Sí, cuando… / No, pero conozco a alguien…', en: 'Yes, when… / No, but I know someone…' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Qué harías hoy?', en: 'What would you do today?' }] },
            { q: { es: '¿Quién decide qué «da mala imagen» en una ciudad?', en: 'Who decides what “gives a bad image” in a city?' }, help: { es: 'Normalmente… pero debería…', en: 'Usually… but it should be…' }, follow: [{ es: '¿Un ejemplo de tu ciudad?', en: 'An example from your city?' }, { es: '¿Estás de acuerdo?', en: 'Do you agree?' }] },
            { q: { es: '¿El turismo salva o destruye los barrios antiguos?', en: 'Does tourism save or destroy old neighbourhoods?' }, help: { es: 'Las dos cosas, porque… / Sobre todo…', en: 'Both, because… / Mainly…' }, follow: [{ es: '¿Qué condiciones pondrías?', en: 'What conditions would you set?' }, { es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }] },
            { q: { es: '¿Venderías tu casa aunque eso afectara a tus vecinos?', en: 'Would you sell your house even if it affected your neighbours?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Hablarías antes con ellos?', en: 'Would you talk to them first?' }, { es: '¿Por cuánto?', en: 'For how much?' }] },
          ],
          words: [{ es: 'la fachada', en: 'the façade' }, { es: 'el folleto', en: 'the brochure' }, { es: 'borrar', en: 'to erase' }, { es: 'el puesto callejero', en: 'the street stall' }, { es: 'el inversor', en: 'the investor' }],
        },
      },
    },
    // ------------------------------------------------------------ the kibbutz
    {
      id: 'kibutz',
      name: { es: 'Un kibutz', en: 'A kibbutz' },
      who: { name: 'Ruti', role: { es: 'veterana del kibutz', en: 'kibbutz veteran' } },
      levels: {
        A0: {
          scene: { es: 'Es un pueblo pequeño con casas iguales, campos y vacas. Hay un comedor grande para todos. Ruti tiene ochenta años. Vive aquí desde niña.', en: 'It is a small village with identical houses, fields and cows. There is a big dining hall for everyone. Ruti is eighty. She has lived here since she was a girl.' },
          opener: { es: '¡Hola! Esto es un kibutz. Aquí comemos todos juntos. ¿Tienes hambre?', en: 'Hello! This is a kibbutz. Here we all eat together. Are you hungry?' },
          decide: {
            ask: { es: '¿Qué comes?', en: 'What do you eat?' },
            options: [
              { say: { es: 'Ensalada y huevo.', en: 'Salad and egg.' }, then: { es: 'La ensalada es del campo del kibutz. ¡Muy fresca!', en: 'The salad is from the kibbutz field. Very fresh!' } },
              { say: { es: 'Queso y pan.', en: 'Cheese and bread.' }, then: { es: 'Ruti dice: «El queso es de nuestras vacas».', en: 'Ruti says: “The cheese is from our cows.”' } },
              { say: { es: 'Solo un café.', en: 'Just a coffee.' }, then: { es: 'Ruti te da un café y una galleta. «Come algo, ¿eh?».', en: 'Ruti gives you a coffee and a biscuit. “Eat something, OK?”' } },
            ],
          },
          twist: { es: 'Hay doscientas personas en el comedor. Todos te saludan. ¿Saludas tú también?', en: 'There are two hundred people in the dining hall. Everyone says hello. Do you say hello too?' },
          questions: [
            { q: { es: '¿Comes solo o con otras personas?', en: 'Do you eat alone or with other people?' }, help: { es: 'Solo/a. / Con mi familia.', en: 'Alone. / With my family.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Vives en un pueblo o en una ciudad?', en: 'Do you live in a village or a city?' }, help: { es: 'En un pueblo. / En una ciudad.', en: 'In a village. / In a city.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gustan los animales de granja?', en: 'Do you like farm animals?' }, help: { es: 'Sí, las vacas… / No mucho.', en: 'Yes, cows… / Not much.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Viste una vaca de cerca?', en: 'Have you seen a cow up close?' }] },
            { q: { es: '¿Conoces a tus vecinos?', en: 'Do you know your neighbours?' }, help: { es: 'Sí, a todos. / No, a nadie.', en: 'Yes, all of them. / No, nobody.' }, follow: [{ es: '¿Cómo son?', en: 'What are they like?' }, { es: '¿Hablas con ellos?', en: 'Do you talk to them?' }] },
          ],
          words: [{ es: 'el comedor', en: 'the dining hall' }, { es: 'el campo', en: 'the field' }, { es: 'la vaca', en: 'the cow' }, { es: 'juntos', en: 'together' }, { es: 'saludar', en: 'to say hello' }],
        },
        A1: {
          scene: { es: 'Los kibutz son comunidades que nacieron hace más de cien años. Al principio todo era de todos: las casas, el dinero, la ropa y hasta la educación de los niños. Los niños dormían en una «casa de los niños», no con sus padres. Ruti creció así. Hoy el kibutz es distinto, pero el comedor sigue abierto y muchos vecinos comen juntos.', en: 'Kibbutzim are communities that started more than a hundred years ago. At first everything belonged to everyone: houses, money, clothes and even the children’s education. Children slept in a “children’s house”, not with their parents. Ruti grew up like that. Today the kibbutz is different, but the dining hall is still open and many residents eat together.' },
          opener: { es: 'Cuando era niña, yo no tenía nada mío. Ni ropa: la ropa limpia llegaba los viernes y te ponías lo que había. Dormía con otros niños y veía a mis padres por la tarde, dos horas cada día. Algunos amigos lo recuerdan con tristeza. Yo, con cariño: tenía veinte hermanos. ¿Tú podrías vivir sin nada tuyo?', en: 'When I was a girl, I had nothing of my own. Not even clothes: clean clothes arrived on Fridays and you wore whatever there was. I slept with other children and saw my parents in the afternoon, two hours each day. Some friends remember it with sadness. I remember it fondly: I had twenty siblings. Could you live without anything of your own?' },
          decide: {
            ask: { es: '¿Qué le preguntas a Ruti?', en: 'What do you ask Ruti?' },
            options: [
              { say: { es: '¿Echaba de menos a sus padres?', en: 'Did she miss her parents?' }, then: { es: 'Ruti piensa: «Por la noche, a veces. Pero no lo decía a nadie».', en: 'Ruti thinks: “At night, sometimes. But I didn’t tell anyone.”' } },
              { say: { es: '¿Qué trabajo hacía?', en: 'What work did she do?' }, then: { es: '«Ordeñaba vacas a las cuatro de la mañana durante cuarenta años», dice orgullosa.', en: '“I milked cows at four in the morning for forty years,” she says proudly.' } },
              { say: { es: '¿Sus hijos viven aquí?', en: 'Do her children live here?' }, then: { es: '«Uno sí, dos se fueron a la ciudad. Mi nieta acaba de volver», sonríe.', en: '“One does, two went to the city. My granddaughter has just come back,” she smiles.' } },
            ],
          },
          twist: { es: 'Ruti te muestra una foto de 1960: cien personas bailando en el comedor. «¿Ves a la niña con trenzas? Soy yo». ¿Qué le dices?', en: 'Ruti shows you a 1960 photo: a hundred people dancing in the dining hall. “See the girl with braids? That’s me.” What do you say to her?' },
          questions: [
            { q: { es: '¿Qué cosa tuya es muy importante para ti?', en: 'What thing of yours is very important to you?' }, help: { es: 'Mi… porque…', en: 'My… because…' }, follow: [{ es: '¿Desde cuándo la tienes?', en: 'How long have you had it?' }, { es: '¿La prestarías?', en: 'Would you lend it?' }] },
            { q: { es: '¿Compartes cosas con tus amigos o vecinos?', en: 'Do you share things with friends or neighbours?' }, help: { es: 'Sí, compartimos… / No mucho.', en: 'Yes, we share… / Not much.' }, follow: [{ es: '¿Qué no compartes nunca?', en: 'What do you never share?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Cómo fue tu infancia?', en: 'What was your childhood like?' }, help: { es: 'Fue… vivía en…', en: 'It was… I lived in…' }, follow: [{ es: '¿Con quién jugabas?', en: 'Who did you play with?' }, { es: '¿Qué recuerdas más?', en: 'What do you remember most?' }] },
            { q: { es: '¿Tienes muchos hermanos o primos?', en: 'Do you have many siblings or cousins?' }, help: { es: 'Tengo… / Soy hijo/a único/a.', en: 'I have… / I’m an only child.' }, follow: [{ es: '¿Se ven mucho?', en: 'Do you see each other often?' }, { es: '¿Te llevas bien con ellos?', en: 'Do you get on well with them?' }] },
          ],
          words: [{ es: 'la comunidad', en: 'the community' }, { es: 'crecer', en: 'to grow up' }, { es: 'ordeñar', en: 'to milk' }, { es: 'las trenzas', en: 'braids' }, { es: 'con cariño', en: 'fondly' }],
        },
        A2: {
          scene: { es: 'El kibutz de Ruti tiene problemas económicos. En una asamblea se vota si se «privatiza»: cada familia cobraría su propio sueldo, pagaría su casa y ya no se compartiría todo. Los jóvenes votan a favor; muchos mayores, en contra. Ruti tiene un voto, como todos. La votación es mañana por la noche.', en: 'Ruti’s kibbutz has financial problems. At an assembly they’re voting on whether to “privatise”: each family would earn its own salary, pay for its house and no longer share everything. Young people vote for it; many older people, against. Ruti has one vote, like everyone. The vote is tomorrow night.' },
          opener: { es: 'Mi nieto es ingeniero y gana diez veces más que el chico que cuida las vacas, pero en el kibutz los dos reciben lo mismo. Él dice que eso no es justo. Yo digo que es exactamente lo justo: el trabajo de las vacas también es necesario. Pero si no cambiamos, los jóvenes se van y el kibutz se muere. Y si cambiamos, ¿qué nos queda de especial? ¿Tú cómo votarías?', en: 'My grandson is an engineer and earns ten times more than the young man who looks after the cows, but in the kibbutz both get the same. He says that isn’t fair. I say it’s exactly what’s fair: the work with the cows is necessary too. But if we don’t change, the young people leave and the kibbutz dies. And if we change, what’s left that’s special? How would you vote?' },
          decide: {
            ask: { es: '¿Qué vota Ruti?', en: 'How does Ruti vote?' },
            options: [
              { say: { es: 'A favor, con una red de ayuda para los mayores.', en: 'In favour, with a support net for the elderly.' }, then: { es: 'Se aprueba. Los mayores reciben una pensión del kibutz y el comedor sigue abierto.', en: 'It’s approved. Older people get a kibbutz pension and the dining hall stays open.' } },
              { say: { es: 'En contra.', en: 'Against.' }, then: { es: 'Gana el sí por tres votos. Ruti está triste, pero acepta el resultado.', en: 'The yes side wins by three votes. Ruti is sad, but accepts the result.' } },
              { say: { es: 'Pide un año más antes de votar.', en: 'She asks for one more year before voting.' }, then: { es: 'La asamblea acepta. En un año, algunos jóvenes se van y otros proponen ideas nuevas.', en: 'The assembly agrees. In a year, some young people leave and others propose new ideas.' } },
            ],
          },
          twist: { es: 'El nieto de Ruti le dice: «Abuela, si votas que no, me voy a Tel Aviv». ¿Debe influir eso en su voto?', en: 'Ruti’s grandson tells her: “Grandma, if you vote no, I’m going to Tel Aviv.” Should that influence her vote?' },
          questions: [
            { q: { es: '¿Todos los trabajos deberían pagar lo mismo?', en: 'Should all jobs pay the same?' }, help: { es: 'No, porque… / Sí, porque todos…', en: 'No, because… / Yes, because everyone…' }, follow: [{ es: '¿Qué trabajo está mal pagado?', en: 'Which job is badly paid?' }, { es: '¿Y cuál demasiado bien?', en: 'And which too well?' }] },
            { q: { es: '¿Vivirías en una comunidad donde todo se comparte?', en: 'Would you live in a community where everything is shared?' }, help: { es: 'Sí, si… / No, porque necesito…', en: 'Yes, if… / No, because I need…' }, follow: [{ es: '¿Qué sería lo mejor?', en: 'What would be the best part?' }, { es: '¿Y lo peor?', en: 'And the worst?' }] },
            { q: { es: '¿Participas en votaciones de tu edificio, escuela o trabajo?', en: 'Do you take part in votes in your building, school or work?' }, help: { es: 'Sí, siempre. / No, nunca voy.', en: 'Yes, always. / No, I never go.' }, follow: [{ es: '¿Sobre qué votan?', en: 'What do you vote on?' }, { es: '¿Hay discusiones?', en: 'Are there arguments?' }] },
            { q: { es: '¿Tu familia influye en tus decisiones importantes?', en: 'Does your family influence your important decisions?' }, help: { es: 'Mucho. / Un poco. / Nada.', en: 'A lot. / A little. / Not at all.' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Te parece bien?', en: 'Do you think that’s right?' }] },
          ],
          words: [{ es: 'la asamblea', en: 'the assembly' }, { es: 'privatizar', en: 'to privatise' }, { es: 'el sueldo', en: 'the salary' }, { es: 'a favor / en contra', en: 'for / against' }, { es: 'la pensión', en: 'the pension' }],
        },
        B1: {
          scene: { es: 'Hoy quedan en Israel unos doscientos setenta kibutz. La mayoría se privatizó y funciona casi como un pueblo normal, aunque mantiene algunas cosas en común: la escuela, la piscina, la ayuda a los mayores. Algunos se convirtieron en empresas muy exitosas de tecnología o de riego. Y en los últimos años, muchos jóvenes de las ciudades buscan volver a vivir en comunidad, cansados del individualismo. La nieta de Ruti, de veintiocho años, volvió al kibutz con un grupo de amigos.', en: 'Today there are about two hundred and seventy kibbutzim in Israel. Most have privatised and work almost like a normal village, though they keep some things in common: the school, the pool, help for the elderly. Some became very successful technology or irrigation companies. And in recent years, many young people from the cities want to go back to living in community, tired of individualism. Ruti’s twenty-eight-year-old granddaughter has come back to the kibbutz with a group of friends.' },
          opener: { es: 'Es curioso. Mi generación construyó el kibutz con un ideal enorme y muy estricto. La generación de mis hijos se cansó y se fue. Y ahora mis nietos vuelven, pero quieren una comunidad a la carta: compartir el huerto y las cenas, pero no el sueldo; ayudarse entre vecinos, pero con su propia casa y su intimidad. Yo no sé si eso es un kibutz o un club. Pero a lo mejor ese era el error: pedir todo o nada. ¿Puede existir una comunidad de verdad si cada uno elige qué comparte?', en: 'It’s curious. My generation built the kibbutz with a huge, very strict ideal. My children’s generation got tired and left. And now my grandchildren are coming back, but they want an à la carte community: share the vegetable garden and dinners, but not salaries; help each other as neighbours, but with their own house and privacy. I don’t know if that’s a kibbutz or a club. But maybe that was the mistake: asking for all or nothing. Can a real community exist if everyone chooses what they share?' },
          decide: {
            ask: { es: '¿Qué le aconseja Ruti a su nieta?', en: 'What does Ruti advise her granddaughter?' },
            options: [
              { say: { es: 'Empezar compartiendo poco y crecer despacio.', en: 'Start by sharing little and grow slowly.' }, then: { es: 'El grupo comparte cenas, coches y el cuidado de los niños. Después de tres años, deciden compartir también una cuenta para emergencias.', en: 'The group shares dinners, cars and childcare. After three years, they decide to also share an emergency fund.' } },
              { say: { es: 'Poner reglas claras desde el principio.', en: 'Set clear rules from the start.' }, then: { es: 'Escriben un documento de veinte páginas. Dos amigos se van antes de firmarlo; los demás duran.', en: 'They write a twenty-page document. Two friends leave before signing it; the rest stay the course.' } },
              { say: { es: 'Mezclarse con los mayores del kibutz.', en: 'Mix with the kibbutz elders.' }, then: { es: 'Los jóvenes cocinan para los mayores los viernes; los mayores enseñan a cultivar. Ruti vuelve a bailar en el comedor.', en: 'The young people cook for the elders on Fridays; the elders teach them to grow food. Ruti dances in the dining hall again.' } },
            ],
          },
          twist: { es: 'Uno de los amigos de la nieta pierde su trabajo y no puede pagar su parte de los gastos comunes. Algunos dicen que el grupo debe pagar por él; otros, que si no hay reglas el proyecto se rompe. ¿Qué es una comunidad cuando alguien no puede aportar?', en: 'One of the granddaughter’s friends loses his job and can’t pay his share of common expenses. Some say the group should pay for him; others, that without rules the project breaks. What is a community when someone can’t contribute?' },
          questions: [
            { q: { es: '¿Qué estarías dispuesto a compartir con tus vecinos?', en: 'What would you be willing to share with your neighbours?' }, help: { es: 'Compartiría… pero nunca…', en: 'I’d share… but never…' }, follow: [{ es: '¿Ya lo haces?', en: 'Do you already?' }, { es: '¿Qué te frena?', en: 'What holds you back?' }] },
            { q: { es: '¿Vivimos en una época demasiado individualista?', en: 'Do we live in an overly individualistic time?' }, help: { es: 'Creo que sí, porque… / No tanto, porque…', en: 'I think so, because… / Not that much, because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Es malo?', en: 'Is it bad?' }] },
            { q: { es: '¿Es mejor un ideal estricto o uno flexible?', en: 'Is a strict ideal better or a flexible one?' }, help: { es: 'Un ideal… porque…', en: 'A… ideal because…' }, follow: [{ es: '¿En qué aspecto de tu vida?', en: 'In what area of your life?' }, { es: '¿Cambiaste de idea con los años?', en: 'Have you changed your mind over the years?' }] },
            { q: { es: '¿Qué debe hacer un grupo cuando un miembro no puede aportar?', en: 'What should a group do when a member can’t contribute?' }, help: { es: 'Creo que debería… durante…', en: 'I think it should… for…' }, follow: [{ es: '¿Hasta cuándo?', en: 'For how long?' }, { es: '¿Te pasó en un grupo?', en: 'Has it happened in a group of yours?' }] },
          ],
          words: [{ es: 'el ideal', en: 'the ideal' }, { es: 'a la carta', en: 'à la carte' }, { es: 'la intimidad', en: 'privacy' }, { es: 'el huerto', en: 'the vegetable garden' }, { es: 'los gastos comunes', en: 'shared expenses' }],
        },
      },
    },
    // ------------------------------------------------------------ the Sea of Galilee
    {
      id: 'galilea',
      name: { es: 'El lago de Galilea', en: 'The Sea of Galilee' },
      who: { name: 'Moshe', role: { es: 'pescador', en: 'fisherman' } },
      levels: {
        A0: {
          scene: { es: 'Es un lago grande y azul. Hay montañas alrededor. Moshe es pescador. Tiene un barco pequeño y una red. Es temprano.', en: 'It is a big blue lake. There are mountains around it. Moshe is a fisherman. He has a small boat and a net. It is early.' },
          opener: { es: 'Buenos días. ¿Vienes en el barco? Vamos a pescar.', en: 'Good morning. Are you coming on the boat? We are going fishing.' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, voy.', en: 'Yes, I am coming.' }, then: { es: 'El barco se mueve. Moshe tira la red al agua.', en: 'The boat moves. Moshe throws the net into the water.' } },
              { say: { es: 'No, tengo miedo.', en: 'No, I am scared.' }, then: { es: 'Moshe ríe: «Tranquilo. El lago está calmado hoy».', en: 'Moshe laughs: “Relax. The lake is calm today.”' } },
              { say: { es: 'Miro desde el muelle.', en: 'I watch from the jetty.' }, then: { es: 'Ves el sol sobre el agua. Es muy bonito.', en: 'You see the sun over the water. It is very beautiful.' } },
            ],
          },
          twist: { es: 'Moshe saca un pez grande. «Es pez de San Pedro». ¿Lo tocas?', en: 'Moshe pulls out a big fish. “It is a St Peter’s fish.” Do you touch it?' },
          questions: [
            { q: { es: '¿Comes pescado?', en: 'Do you eat fish?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí. / No, me mareo.', en: 'Yes. / No, I get seasick.' }, follow: [{ es: '¿Viajaste en barco?', en: 'Have you travelled by boat?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Hay un lago en tu país?', en: 'Is there a lake in your country?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, it is called… / No.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Se puede nadar?', en: 'Can you swim?' }] },
            { q: { es: '¿Te levantas temprano?', en: 'Do you get up early?' }, help: { es: 'Sí, a las… / No.', en: 'Yes, at… / No.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Y el domingo?', en: 'And on Sunday?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'el pescador', en: 'the fisherman' }, { es: 'la red', en: 'the net' }, { es: 'el pez', en: 'the fish (alive)' }, { es: 'pescar', en: 'to fish' }],
        },
        A1: {
          scene: { es: 'El lago de Galilea es el lago de agua dulce más bajo del mundo: está a más de doscientos metros bajo el nivel del mar. Durante muchos años fue la principal fuente de agua de Israel. Moshe pesca aquí desde hace treinta años, como su padre. Hoy quedan muy pocos pescadores. El pez más famoso es la tilapia, que los turistas llaman «pez de San Pedro».', en: 'The Sea of Galilee is the lowest freshwater lake in the world: it is more than two hundred metres below sea level. For many years it was Israel’s main source of water. Moshe has fished here for thirty years, like his father. Today very few fishermen are left. The most famous fish is tilapia, which tourists call “St Peter’s fish”.' },
          opener: { es: 'Antes éramos cincuenta barcos. Hoy somos menos de diez. Hay menos peces y el gobierno prohíbe pescar algunos meses para que se recuperen. Mis hijos no quieren este trabajo: dicen que es muy duro y paga poco. Tienen razón. Pero cuando sale el sol sobre el lago y estoy solo en el barco, no lo cambiaría por nada. ¿Tú qué trabajo no cambiarías por nada?', en: 'We used to be fifty boats. Today we’re fewer than ten. There are fewer fish and the government bans fishing some months so they can recover. My children don’t want this job: they say it’s very hard and pays little. They’re right. But when the sun rises over the lake and I’m alone in the boat, I wouldn’t trade it for anything. What job wouldn’t you trade for anything?' },
          decide: {
            ask: { es: '¿Cómo ayudas a Moshe?', en: 'How do you help Moshe?' },
            options: [
              { say: { es: 'Tiro de la red con él.', en: 'I pull the net with him.' }, then: { es: 'Pesa mucho. Salen doce peces. Moshe dice: «Hoy es buen día».', en: 'It’s heavy. Twelve fish come out. Moshe says: “Today’s a good day.”' } },
              { say: { es: 'Llevo el barco.', en: 'I steer the boat.' }, then: { es: 'Vas en círculos un rato. Moshe se ríe y te corrige con paciencia.', en: 'You go in circles for a while. Moshe laughs and corrects you patiently.' } },
              { say: { es: 'Saco fotos del amanecer.', en: 'I take photos of the sunrise.' }, then: { es: 'Las fotos son preciosas. Moshe pide una para su mujer.', en: 'The photos are beautiful. Moshe asks for one for his wife.' } },
            ],
          },
          twist: { es: 'Empieza a soplar un viento muy fuerte de las montañas. Las olas crecen. Moshe dice: «Volvemos ya». ¿Estás tranquilo o nervioso?', en: 'A very strong wind starts blowing from the mountains. The waves grow. Moshe says: “We’re going back now.” Are you calm or nervous?' },
          questions: [
            { q: { es: '¿Qué trabajo no cambiarías por nada?', en: 'What job wouldn’t you trade for anything?' }, help: { es: 'Mi trabajo de… / Me gustaría ser…', en: 'My job as… / I’d like to be…' }, follow: [{ es: '¿Qué es lo mejor?', en: 'What’s the best part?' }, { es: '¿Y lo peor?', en: 'And the worst?' }] },
            { q: { es: '¿Hiciste el mismo trabajo que tus padres?', en: 'Have you done the same job as your parents?' }, help: { es: 'Sí, como mi… / No, ellos eran…', en: 'Yes, like my… / No, they were…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué opinan ellos?', en: 'What do they think?' }] },
            { q: { es: '¿Hay trabajos que están desapareciendo en tu país?', en: 'Are there jobs disappearing in your country?' }, help: { es: 'Sí, por ejemplo… / No sé.', en: 'Yes, for example… / I don’t know.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Es triste?', en: 'Is it sad?' }] },
            { q: { es: '¿Viste un amanecer especial?', en: 'Have you seen a special sunrise?' }, help: { es: 'Sí, en… / No, duermo mucho.', en: 'Yes, in… / No, I sleep a lot.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Por qué estabas despierto/a?', en: 'Why were you awake?' }] },
          ],
          words: [{ es: 'el agua dulce', en: 'fresh water' }, { es: 'recuperarse', en: 'to recover' }, { es: 'el amanecer', en: 'sunrise' }, { es: 'la ola', en: 'the wave' }, { es: 'soplar', en: 'to blow' }],
        },
        A2: {
          scene: { es: 'Hace unos años el lago bajó tanto que aparecieron islas de piedra que nadie había visto. Hoy el nivel se recupera, en parte porque Israel produce mucha agua potable del mar. Pero el gobierno quiere bombear agua del mar ya potable al lago para mantenerlo lleno. Los pescadores no saben qué efecto tendrá en los peces. Un científico le pide a Moshe ayuda para tomar muestras.', en: 'A few years ago the lake dropped so low that stone islands nobody had seen appeared. Today the level is recovering, partly because Israel produces a lot of drinking water from the sea. But the government wants to pump desalinated seawater into the lake to keep it full. The fishermen don’t know what effect it will have on the fish. A scientist asks Moshe for help taking samples.' },
          opener: { es: 'El científico me paga bien por llevar su equipo en mi barco una vez a la semana. Pero algunos pescadores dicen que, si los resultados son malos, nos van a prohibir pescar más meses. Si me niego, el estudio se hace igual, con otro barco. Si ayudo, al menos sé qué pasa. Mi mujer dice que es mejor saber. Mi hermano dice que no me meta. ¿Qué harías tú?', en: 'The scientist pays me well to carry his equipment on my boat once a week. But some fishermen say that if the results are bad, they’ll ban us from fishing for more months. If I refuse, the study goes ahead anyway, with another boat. If I help, at least I know what’s happening. My wife says it’s better to know. My brother says I shouldn’t get involved. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Moshe?', en: 'What does Moshe decide?' },
            options: [
              { say: { es: 'Ayudar y contar todo a los otros pescadores.', en: 'Help and tell the other fishermen everything.' }, then: { es: 'Los pescadores confían más en el estudio porque uno de ellos participa.', en: 'The fishermen trust the study more because one of them takes part.' } },
              { say: { es: 'No ayudar.', en: 'Not help.' }, then: { es: 'El científico trabaja con un barco de turistas. Moshe se entera de los resultados por el periódico.', en: 'The scientist works with a tourist boat. Moshe learns the results from the newspaper.' } },
              { say: { es: 'Ayudar a cambio de que los pescadores puedan opinar.', en: 'Help in exchange for fishermen having a say.' }, then: { es: 'El científico acepta. Una reunión al mes con los pescadores se convierte en costumbre.', en: 'The scientist agrees. A monthly meeting with the fishermen becomes a habit.' } },
            ],
          },
          twist: { es: 'Los primeros resultados son buenos para el agua, pero muestran que hay demasiada pesca de un tipo de pez. Los otros pescadores piensan que Moshe los traicionó. ¿Qué les dice?', en: 'The first results are good for the water, but show there’s too much fishing of one kind of fish. The other fishermen think Moshe betrayed them. What does he tell them?' },
          questions: [
            { q: { es: '¿Prefieres saber una verdad difícil o no saberla?', en: 'Do you prefer knowing a hard truth or not knowing it?' }, help: { es: 'Prefiero saber porque… / A veces es mejor no…', en: 'I prefer to know because… / Sometimes it’s better not…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Cambiaste de opinión?', en: 'Have you changed your mind?' }] },
            { q: { es: '¿Confías en los científicos?', en: 'Do you trust scientists?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Y en los políticos?', en: 'And politicians?' }, { es: '¿Por qué la diferencia?', en: 'Why the difference?' }] },
            { q: { es: '¿Te sentiste alguna vez entre tu grupo y lo que creías correcto?', en: 'Have you ever felt torn between your group and what you thought was right?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Te arrepentiste?', en: 'Did you regret it?' }] },
            { q: { es: '¿Qué harías para proteger un lago o un río de tu país?', en: 'What would you do to protect a lake or river in your country?' }, help: { es: 'Haría… / Prohibiría…', en: 'I would… / I would ban…' }, follow: [{ es: '¿Quién pagaría?', en: 'Who would pay?' }, { es: '¿La gente aceptaría?', en: 'Would people accept it?' }] },
          ],
          words: [{ es: 'el nivel', en: 'the level' }, { es: 'el agua potable', en: 'drinking water' }, { es: 'bombear', en: 'to pump' }, { es: 'la muestra', en: 'the sample' }, { es: 'traicionar', en: 'to betray' }],
        },
        B1: {
          scene: { es: 'Israel es hoy uno de los países que más agua recicla del mundo: casi el noventa por ciento de las aguas residuales se trata y se usa para regar los campos. Además, gran parte del agua potable sale de plantas desalinizadoras junto al mar. Eso convirtió un país con escasez de agua en un país que exporta tecnología de agua. Pero las desalinizadoras usan mucha energía y devuelven agua muy salada al mar. Moshe, con sesenta años, participa en un documental sobre «el futuro del agua».', en: 'Israel today is one of the countries that recycles the most water in the world: almost ninety per cent of wastewater is treated and used to irrigate fields. In addition, much of the drinking water comes from desalination plants by the sea. That turned a water-scarce country into one that exports water technology. But desalination plants use a lot of energy and return very salty water to the sea. Moshe, now sixty, is taking part in a documentary about “the future of water”.' },
          opener: { es: 'Cuando era niño, mi padre medía el nivel del lago con una marca en una piedra, y todo el país miraba esa marca en las noticias como si fuera la bolsa. El lago era nuestra vida. Hoy la tecnología nos salvó: podemos sacar agua del mar casi sin límite. Pero tengo miedo de que, como ya no la necesitamos tanto, dejemos de cuidar el lago. Cuando algo deja de ser escaso, ¿lo valoramos menos? ¿La tecnología nos hace más responsables o más descuidados?', en: 'When I was a boy, my father measured the lake level with a mark on a stone, and the whole country watched that mark on the news as if it were the stock market. The lake was our life. Today technology has saved us: we can take water from the sea almost without limit. But I’m afraid that, since we don’t need it so much any more, we’ll stop caring for the lake. When something stops being scarce, do we value it less? Does technology make us more responsible or more careless?' },
          decide: {
            ask: { es: '¿Qué mensaje deja Moshe en el documental?', en: 'What message does Moshe leave in the documentary?' },
            options: [
              { say: { es: '«La tecnología es un regalo, pero el lago no es un depósito».', en: '“Technology is a gift, but the lake is not a tank.”' }, then: { es: 'La frase se hace famosa y aparece en carteles de una campaña para proteger el lago.', en: 'The phrase becomes famous and appears on posters for a campaign to protect the lake.' } },
              { say: { es: '«Que los jóvenes vengan a pescar un día».', en: '“Let young people come and fish for a day.”' }, then: { es: 'Varias escuelas organizan salidas al lago. Un chico de quince años pide trabajar con Moshe en verano.', en: 'Several schools organise trips to the lake. A fifteen-year-old asks to work with Moshe in summer.' } },
              { say: { es: 'No dice nada: muestra la piedra con la marca de su padre.', en: 'He says nothing: he shows the stone with his father’s mark.' }, then: { es: 'La imagen final del documental es la piedra bajo el agua. Muchos espectadores dicen que fue lo que más los emocionó.', en: 'The documentary’s final image is the stone underwater. Many viewers say it was what moved them most.' } },
            ],
          },
          twist: { es: 'Un país vecino con mucha sed de agua le pide a Israel comprar agua desalinizada. Algunos dicen que es una oportunidad de cooperación; otros, que el agua no debería ser un negocio. ¿Es el agua un recurso como cualquier otro?', en: 'A neighbouring country very short of water asks to buy desalinated water from Israel. Some say it’s an opportunity for cooperation; others, that water shouldn’t be a business. Is water a resource like any other?' },
          questions: [
            { q: { es: '¿Valoramos menos las cosas cuando dejan de ser escasas?', en: 'Do we value things less when they stop being scarce?' }, help: { es: 'Creo que sí, por ejemplo… / No siempre, porque…', en: 'I think so, for example… / Not always, because…' }, follow: [{ es: '¿Te pasa a ti?', en: 'Does it happen to you?' }, { es: '¿Con qué?', en: 'With what?' }] },
            { q: { es: '¿La tecnología resolverá los problemas del clima o los esconderá?', en: 'Will technology solve climate problems or hide them?' }, help: { es: 'Creo que ayudará, pero… / Me temo que…', en: 'I think it will help, but… / I’m afraid that…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Qué más hace falta?', en: 'What else is needed?' }] },
            { q: { es: '¿El agua debería poder venderse entre países?', en: 'Should water be sold between countries?' }, help: { es: 'Sí, si… / No, porque es un derecho…', en: 'Yes, if… / No, because it’s a right…' }, follow: [{ es: '¿Y el agua embotellada?', en: 'And bottled water?' }, { es: '¿Quién debería controlarla?', en: 'Who should control it?' }] },
            { q: { es: '¿Qué objeto de tu familia contaría la historia de tu país?', en: 'Which family object would tell the story of your country?' }, help: { es: 'Un/una… de mi… porque…', en: 'A… of my… because…' }, follow: [{ es: '¿Dónde está hoy?', en: 'Where is it today?' }, { es: '¿Quién lo guarda?', en: 'Who keeps it?' }] },
          ],
          words: [{ es: 'las aguas residuales', en: 'wastewater' }, { es: 'la desalinizadora', en: 'the desalination plant' }, { es: 'escaso', en: 'scarce' }, { es: 'descuidado', en: 'careless' }, { es: 'el depósito', en: 'the tank' }],
        },
      },
    },
    // ------------------------------------------------------------ a Druze village
    {
      id: 'drusa',
      name: { es: 'Una aldea drusa del Carmelo', en: 'A Druze village on Mount Carmel' },
      who: { name: 'Wafa', role: { es: 'anfitriona drusa', en: 'Druze host' } },
      levels: {
        A0: {
          scene: { es: 'Es un pueblo en la montaña. Hay casas de piedra y una calle con tiendas. Wafa tiene una casa grande. En la mesa hay muchos platos pequeños. Hay pan muy fino.', en: 'It is a village in the mountains. There are stone houses and a street with shops. Wafa has a big house. On the table there are many small dishes. There is very thin bread.' },
          opener: { es: '¡Bienvenido! Siéntate, siéntate. ¡Come! Aquí todo es casero.', en: 'Welcome! Sit down, sit down. Eat! Everything here is homemade.' },
          decide: {
            ask: { es: '¿Qué pruebas?', en: 'What do you try?' },
            options: [
              { say: { es: 'El pan fino.', en: 'The thin bread.' }, then: { es: 'Wafa hace el pan en una cúpula de metal caliente. ¡Es enorme y muy fino!', en: 'Wafa makes the bread on a hot metal dome. It is huge and very thin!' } },
              { say: { es: 'Las hojas de parra.', en: 'The vine leaves.' }, then: { es: 'Tienen arroz dentro. Wafa dice: «Mi madre me enseñó».', en: 'They have rice inside. Wafa says: “My mother taught me.”' } },
              { say: { es: 'Todo un poco.', en: 'A bit of everything.' }, then: { es: 'Wafa te sirve más y más. «¡Come, come!». Estás muy lleno.', en: 'Wafa serves you more and more. “Eat, eat!” You are very full.' } },
            ],
          },
          twist: { es: 'Ya no puedes comer más. Wafa trae otro plato. ¿Qué dices?', en: 'You can’t eat any more. Wafa brings another dish. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la comida casera?', en: 'Do you like homemade food?' }, help: { es: 'Sí, mucho. / Sí, pero no cocino.', en: 'Yes, a lot. / Yes, but I don’t cook.' }, follow: [{ es: '¿Quién cocina en tu casa?', en: 'Who cooks at home?' }, { es: '¿Cuál es tu plato favorito?', en: 'What is your favourite dish?' }] },
            { q: { es: '¿Comes mucho o poco?', en: 'Do you eat a lot or a little?' }, help: { es: 'Mucho. / Poco.', en: 'A lot. / A little.' }, follow: [{ es: '¿En casa de tu abuela?', en: 'At your grandmother’s?' }, { es: '¿Por la noche?', en: 'At night?' }] },
            { q: { es: '¿Invitas a comer a tus amigos?', en: 'Do you invite friends to eat?' }, help: { es: 'Sí, a veces. / No mucho.', en: 'Yes, sometimes. / Not much.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Cuántas personas?', en: 'How many people?' }] },
            { q: { es: '¿Qué pan comes?', en: 'Which bread do you eat?' }, help: { es: 'Pan blanco / integral / tortillas…', en: 'White / wholemeal bread / tortillas…' }, follow: [{ es: '¿Lo haces tú?', en: 'Do you make it?' }, { es: '¿Dónde lo compras?', en: 'Where do you buy it?' }] },
          ],
          words: [{ es: 'casero', en: 'homemade' }, { es: 'fino', en: 'thin' }, { es: 'las hojas de parra', en: 'vine leaves' }, { es: 'lleno', en: 'full' }, { es: 'servir', en: 'to serve' }],
        },
        A1: {
          scene: { es: 'Los drusos son una comunidad de unas ciento cincuenta mil personas en Israel, con una religión propia y muy reservada. Viven sobre todo en pueblos del norte, en las montañas. Hablan árabe y muchos también hebreo. Son famosos por su hospitalidad. Wafa abre su casa a grupos de turistas para comer y conocer su cultura.', en: 'The Druze are a community of about a hundred and fifty thousand people in Israel, with their own very private religion. They live mainly in northern mountain villages. They speak Arabic and many also speak Hebrew. They are famous for their hospitality. Wafa opens her home to tourist groups to eat and learn about her culture.' },
          opener: { es: 'Muchos turistas me preguntan por nuestra religión. Yo les explico lo que puedo, pero hay cosas que solo conocen los religiosos de la comunidad, y eso se respeta. Prefiero hablar de lo que se ve: la comida, la familia, nuestras fiestas, el pañuelo blanco de las mujeres mayores. Aquí un invitado es sagrado. Si llegas a mi puerta, comes. ¿En tu cultura cómo se recibe a un invitado?', en: 'Many tourists ask me about our religion. I explain what I can, but some things are only known to the religious members of the community, and that’s respected. I prefer to talk about what can be seen: the food, the family, our festivals, the older women’s white headscarf. Here a guest is sacred. If you come to my door, you eat. In your culture, how is a guest received?' },
          decide: {
            ask: { es: '¿Qué le preguntas a Wafa?', en: 'What do you ask Wafa?' },
            options: [
              { say: { es: '¿Qué significa el pañuelo blanco?', en: 'What does the white headscarf mean?' }, then: { es: '«Es de las mujeres religiosas. Significa sencillez y pureza», explica.', en: '“It’s worn by religious women. It means simplicity and purity,” she explains.' } },
              { say: { es: '¿Me enseña a hacer el pan?', en: 'Will you teach me to make the bread?' }, then: { es: 'Tu primer pan se rompe. El segundo, también. El tercero sale casi bien.', en: 'Your first bread tears. The second too. The third comes out almost right.' } },
              { say: { es: '¿Cuál es su fiesta favorita?', en: 'What is your favourite festival?' }, then: { es: 'Wafa te muestra fotos de una boda: quinientas personas y tres días de comida.', en: 'Wafa shows you wedding photos: five hundred people and three days of food.' } },
            ],
          },
          twist: { es: 'Un turista del grupo insiste en preguntar por los secretos de la religión. Wafa sonríe pero no responde. ¿Le dices algo al turista?', en: 'A tourist in the group keeps asking about the religion’s secrets. Wafa smiles but doesn’t answer. Do you say something to the tourist?' },
          questions: [
            { q: { es: '¿Cómo se recibe a un invitado en tu cultura?', en: 'How is a guest received in your culture?' }, help: { es: 'Le ofrecemos… / Le decimos…', en: 'We offer them… / We tell them…' }, follow: [{ es: '¿Hay reglas?', en: 'Are there rules?' }, { es: '¿Qué no se hace nunca?', en: 'What is never done?' }] },
            { q: { es: '¿Hay temas que prefieres no hablar con desconocidos?', en: 'Are there subjects you prefer not to talk about with strangers?' }, help: { es: 'Sí, por ejemplo… / No, hablo de todo.', en: 'Yes, for example… / No, I talk about everything.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y con amigos?', en: 'And with friends?' }] },
            { q: { es: '¿Hablas más de un idioma en tu vida diaria?', en: 'Do you speak more than one language in your daily life?' }, help: { es: 'Sí, hablo… en casa y… fuera. / No.', en: 'Yes, I speak… at home and… outside. / No.' }, follow: [{ es: '¿Cuál prefieres?', en: 'Which do you prefer?' }, { es: '¿Los mezclas?', en: 'Do you mix them?' }] },
            { q: { es: '¿Cuál fue la fiesta más grande a la que fuiste?', en: 'What was the biggest party you have been to?' }, help: { es: 'Fue una boda / un cumpleaños…', en: 'It was a wedding / a birthday…' }, follow: [{ es: '¿Cuántas personas?', en: 'How many people?' }, { es: '¿Qué comieron?', en: 'What did you eat?' }] },
          ],
          words: [{ es: 'la hospitalidad', en: 'hospitality' }, { es: 'el invitado', en: 'the guest' }, { es: 'reservado', en: 'private / reserved' }, { es: 'el pañuelo', en: 'the headscarf' }, { es: 'la sencillez', en: 'simplicity' }],
        },
        A2: {
          scene: { es: 'El negocio de comidas de Wafa tiene mucho éxito en internet. Una plataforma de viajes le propone recibir grupos todos los días, con un menú fijo y un horario de una hora y media. Le pagarían bien. Pero Wafa siempre cocinó según la temporada, sin prisa, y su suegra, que vive con ella, dice que la casa no es un restaurante.', en: 'Wafa’s meal business is very successful online. A travel platform proposes she host groups every day, with a set menu and a ninety-minute schedule. They’d pay her well. But Wafa has always cooked according to the season, without hurrying, and her mother-in-law, who lives with her, says the house isn’t a restaurant.' },
          opener: { es: 'Con ese dinero, mi hija podría estudiar medicina en Haifa sin préstamos. Pero la hospitalidad no se cronometra. Si a la hora y media tengo que decir «adiós, el siguiente grupo», ¿qué queda de nuestra costumbre? Mi suegra está enfadada; dice que estoy vendiendo nuestra tradición. Yo pienso que la estoy compartiendo… pero ya no sé. ¿Tú qué harías?', en: 'With that money, my daughter could study medicine in Haifa without loans. But hospitality can’t be timed. If after an hour and a half I have to say “goodbye, next group”, what’s left of our custom? My mother-in-law is angry; she says I’m selling our tradition. I think I’m sharing it… but I’m not sure any more. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Wafa?', en: 'What does Wafa decide?' },
            options: [
              { say: { es: 'Aceptar, pero solo tres días a la semana.', en: 'Accept, but only three days a week.' }, then: { es: 'La plataforma acepta a regañadientes. La suegra cocina con ella los otros días, para la familia.', en: 'The platform reluctantly agrees. The mother-in-law cooks with her on the other days, for the family.' } },
              { say: { es: 'No aceptar y seguir como siempre.', en: 'Decline and carry on as always.' }, then: { es: 'Gana menos, pero los turistas que llegan se quedan cuatro horas y vuelven años después.', en: 'She earns less, but the tourists who come stay four hours and come back years later.' } },
              { say: { es: 'Aceptar y contratar a mujeres del pueblo.', en: 'Accept and hire women from the village.' }, then: { es: 'Cinco vecinas trabajan con ella. El negocio se convierte en una pequeña cooperativa.', en: 'Five neighbours work with her. The business becomes a small cooperative.' } },
            ],
          },
          twist: { es: 'Un turista deja una crítica: «Comida increíble, pero la señora nos obligaba a comer más. Incómodo». ¿Debe Wafa cambiar su forma de ser?', en: 'A tourist leaves a review: “Incredible food, but the lady forced us to eat more. Uncomfortable.” Should Wafa change her ways?' },
          questions: [
            { q: { es: '¿Hay costumbres que se pierden cuando se vuelven un negocio?', en: 'Are there customs that get lost when they become a business?' }, help: { es: 'Sí, por ejemplo… / No siempre, porque…', en: 'Yes, for example… / Not always, because…' }, follow: [{ es: '¿Un caso de tu país?', en: 'A case from your country?' }, { es: '¿Se puede evitar?', en: 'Can it be avoided?' }] },
            { q: { es: '¿Cuánto tiempo debería durar una comida con invitados?', en: 'How long should a meal with guests last?' }, help: { es: 'Unas… horas, porque…', en: 'About… hours, because…' }, follow: [{ es: '¿En tu familia?', en: 'In your family?' }, { es: '¿Te parece mucho?', en: 'Does that seem long?' }] },
            { q: { es: '¿Vivirías con tu suegra o tus suegros?', en: 'Would you live with your in-laws?' }, help: { es: 'Sí, si… / Nunca, porque…', en: 'Yes, if… / Never, because…' }, follow: [{ es: '¿Es normal en tu país?', en: 'Is it normal in your country?' }, { es: '¿Qué sería lo difícil?', en: 'What would be hard?' }] },
            { q: { es: '¿Te incomoda que te sirvan más cuando ya estás lleno?', en: 'Does it bother you when they serve you more when you are already full?' }, help: { es: 'Sí, un poco… / No, me encanta.', en: 'Yes, a bit… / No, I love it.' }, follow: [{ es: '¿Cómo dices que no?', en: 'How do you say no?' }, { es: '¿Tu familia lo hace?', en: 'Does your family do it?' }] },
          ],
          words: [{ es: 'la temporada', en: 'the season' }, { es: 'la suegra', en: 'the mother-in-law' }, { es: 'cronometrar', en: 'to time' }, { es: 'el préstamo', en: 'the loan' }, { es: 'la cooperativa', en: 'the cooperative' }],
        },
        B1: {
          scene: { es: 'La comunidad drusa mantiene una identidad muy fuerte: tradicionalmente, la religión no acepta conversiones y se espera que los drusos se casen entre ellos. Al mismo tiempo, los jóvenes estudian en universidades de todo el país, trabajan en ciudades grandes y se enamoran de personas de otras comunidades. El hijo mayor de Wafa, de veintiséis años, médico en Tel Aviv, le cuenta que está enamorado de una compañera que no es drusa y que quiere casarse con ella.', en: 'The Druze community maintains a very strong identity: traditionally, the religion doesn’t accept conversions and Druze are expected to marry within the community. At the same time, young people study at universities across the country, work in big cities and fall in love with people from other communities. Wafa’s eldest son, twenty-six, a doctor in Tel Aviv, tells her he’s in love with a colleague who isn’t Druze and wants to marry her.' },
          opener: { es: 'Mi hijo es lo mejor que tengo. Lo crié para que fuera libre, estudiara y eligiera su camino. Y lo hizo. Pero si se casa fuera de la comunidad, una parte de la familia va a dejar de hablarle, y sus hijos no serán drusos. Siento que estoy entre dos lealtades: a mi hijo y a mi gente, que sobrevivió siglos justamente porque se mantuvo unida. ¿Hasta dónde una comunidad tiene derecho a proteger su identidad, y dónde empieza la libertad de cada persona?', en: 'My son is the best thing I have. I raised him to be free, to study and choose his path. And he did. But if he marries outside the community, part of the family will stop speaking to him, and his children won’t be Druze. I feel torn between two loyalties: to my son and to my people, who survived for centuries precisely by staying united. How far does a community have the right to protect its identity, and where does each person’s freedom begin?' },
          decide: {
            ask: { es: '¿Qué le dice Wafa a su hijo?', en: 'What does Wafa tell her son?' },
            options: [
              { say: { es: '«Cásate. Yo estaré a tu lado».', en: '“Marry her. I’ll stand by you.”' }, then: { es: 'Algunos familiares se alejan. Pero en la boda, la suegra de Wafa aparece al final, sin avisar, con una bandeja de dulces.', en: 'Some relatives distance themselves. But at the wedding, Wafa’s mother-in-law turns up at the end, unannounced, with a tray of sweets.' } },
              { say: { es: '«Piénsalo un año más».', en: '“Think about it for another year.”' }, then: { es: 'El hijo acepta, pero se aleja un poco de su madre. El año pasa lento para los dos.', en: 'The son agrees, but grows a bit distant from his mother. The year passes slowly for both.' } },
              { say: { es: '«Tráela a casa a comer».', en: '“Bring her home to eat.”' }, then: { es: 'La novia aprende a hacer el pan fino. La familia sigue dividida, pero ya no es una desconocida.', en: 'The girlfriend learns to make the thin bread. The family is still divided, but she’s no longer a stranger.' } },
            ],
          },
          twist: { es: 'El líder religioso del pueblo visita a Wafa y le recuerda que su ejemplo es importante para otras familias. Su hija pequeña, de dieciséis años, escucha todo desde la cocina. ¿Qué mensaje recibe ella, decida lo que decida su madre?', en: 'The village’s religious leader visits Wafa and reminds her that her example matters to other families. Her younger daughter, sixteen, hears everything from the kitchen. What message does she receive, whatever her mother decides?' },
          questions: [
            { q: { es: '¿Tiene una comunidad derecho a pedir a sus miembros que se casen dentro de ella?', en: 'Does a community have the right to ask its members to marry within it?' }, help: { es: 'Puede pedirlo, pero… / No, porque…', en: 'It can ask, but… / No, because…' }, follow: [{ es: '¿Y si es para no desaparecer?', en: 'And if it’s to avoid disappearing?' }, { es: '¿Conoces otros casos?', en: 'Do you know other cases?' }] },
            { q: { es: '¿Sentiste alguna vez dos lealtades opuestas?', en: 'Have you ever felt two opposing loyalties?' }, help: { es: 'Sí, entre… y… / No, por suerte.', en: 'Yes, between… and… / No, luckily.' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Los padres deben aceptar todas las decisiones de sus hijos adultos?', en: 'Should parents accept all their adult children’s decisions?' }, help: { es: 'Aceptar, sí; estar de acuerdo, no siempre…', en: 'Accept, yes; agree, not always…' }, follow: [{ es: '¿Dónde está el límite?', en: 'Where is the limit?' }, { es: '¿Tus padres lo hicieron?', en: 'Did your parents?' }] },
            { q: { es: '¿Qué parte de tu identidad no cambiarías por amor?', en: 'What part of your identity wouldn’t you change for love?' }, help: { es: 'No cambiaría… porque…', en: 'I wouldn’t change… because…' }, follow: [{ es: '¿Y tu pareja?', en: 'And your partner?' }, { es: '¿Hay algo que sí cambiarías?', en: 'Is there something you would change?' }] },
          ],
          words: [{ es: 'la lealtad', en: 'loyalty' }, { es: 'la identidad', en: 'identity' }, { es: 'criar', en: 'to raise' }, { es: 'sobrevivir', en: 'to survive' }, { es: 'alejarse', en: 'to grow distant' }],
        },
      },
    },
  ],
};
