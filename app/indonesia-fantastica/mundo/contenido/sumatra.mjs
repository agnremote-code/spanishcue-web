// Sumatra · the orangutans of Bukit Lawang, Lake Toba, a Padang kitchen, a Gayo coffee farm
// and an oil palm plantation. Five places, four levels each (A0, A1, A2, B1). Every level is
// written on its own.
export default {
  id: 'sumatra',
  spots: [
    // ------------------------------------------------------------ orangutans
    {
      id: 'orangutanes',
      name: { es: 'La selva de los orangutanes', en: 'The orangutan jungle' },
      who: { name: 'Rahmat', role: { es: 'guardabosques', en: 'forest ranger' } },
      levels: {
        A0: {
          scene: { es: 'Es la selva. Hay árboles muy altos. Hay un río. Arriba hay un orangután con su cría en brazos. Rahmat es guardabosques. Tiene botas.', en: 'It is the jungle. There are very tall trees. There is a river. Up high there is an orangutan with her baby in her arms. Rahmat is a ranger. He has boots.' },
          opener: { es: '¡Hola! ¡Mira arriba! Es un orangután. ¡Silencio, por favor!', en: 'Hello! Look up! It is an orangutan. Quiet, please!' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Miro en silencio.', en: 'I watch in silence.' }, then: { es: 'El orangután come una fruta. Te mira. ¡Qué ojos!', en: 'The orangutan eats a fruit. It looks at you. What eyes!' } },
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'Sin flash, por favor. ¡Es una foto preciosa!', en: 'No flash, please. It is a beautiful photo!' } },
              { say: { es: 'Camino un poco más.', en: 'I walk a bit more.' }, then: { es: 'Hay barro. Hay mosquitos. ¡Hace mucho calor!', en: 'There is mud. There are mosquitoes. It is very hot!' } },
            ],
          },
          twist: { es: 'Un turista quiere dar una banana al orangután. Rahmat dice: «¡No!». ¿Por qué?', en: 'A tourist wants to give the orangutan a banana. Rahmat says: “No!” Why?' },
          questions: [
            { q: { es: '¿Te gustan los animales?', en: 'Do you like animals?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Hay selva en tu país?', en: 'Is there jungle in your country?' }, help: { es: 'Sí. / No, hay…', en: 'Yes. / No, there is…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Quieres ir?', en: 'Do you want to go?' }] },
            { q: { es: '¿Te gusta caminar en la naturaleza?', en: 'Do you like walking in nature?' }, help: { es: 'Sí, los fines de semana. / No.', en: 'Yes, at weekends. / No.' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Adónde?', en: 'Where?' }] },
            { q: { es: '¿Tienes miedo de algún animal?', en: 'Are you afraid of any animal?' }, help: { es: 'Sí, de las arañas. / No.', en: 'Yes, of spiders. / No.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y de los insectos?', en: 'And insects?' }] },
          ],
          words: [{ es: 'la selva', en: 'the jungle' }, { es: 'el árbol', en: 'the tree' }, { es: 'el río', en: 'the river' }, { es: 'arriba', en: 'up high' }, { es: 'el silencio', en: 'silence' }],
        },
        A1: {
          scene: { es: 'En Bukit Lawang, en el norte de Sumatra, hay un parque nacional donde viven orangutanes salvajes. «Orang utan» significa «persona del bosque» en indonesio. Los orangutanes pasan casi toda la vida en los árboles, comen frutas y hacen una cama nueva de hojas cada noche. Rahmat nació en el pueblo y trabaja en el parque desde los veinte años. Conoce a cada orangután por su nombre.', en: 'In Bukit Lawang, in northern Sumatra, there is a national park where wild orangutans live. “Orang utan” means “person of the forest” in Indonesian. Orangutans spend almost their whole lives in the trees, eat fruit and make a new bed of leaves every night. Rahmat was born in the village and has worked in the park since he was twenty. He knows every orangutan by name.' },
          opener: { es: 'Esa de ahí es Mina. Tiene cuarenta años y es famosa porque a veces se enoja con los turistas. Una vez le quitó la mochila a un hombre y no se la devolvió. Su cría tiene dos años y va a quedarse con ella hasta los siete u ocho. Los orangutanes aprenden todo de su madre: qué fruta comer, cómo hacer la cama. ¿Qué aprendiste tú de tu madre o de tu padre?', en: 'That one over there is Mina. She’s forty and famous because sometimes she gets angry with tourists. Once she took a man’s backpack and didn’t give it back. Her baby is two and will stay with her until seven or eight. Orangutans learn everything from their mother: which fruit to eat, how to make the bed. What did you learn from your mother or father?' },
          decide: {
            ask: { es: '¿Cómo sigues la excursión?', en: 'How do you continue the trek?' },
            options: [
              { say: { es: 'Sigo a Rahmat a la parte alta.', en: 'I follow Rahmat to the upper part.' }, then: { es: 'Es difícil y resbaladiza. Arriba ves un grupo de gibones que cantan.', en: 'It’s hard and slippery. At the top you see a group of gibbons singing.' } },
              { say: { es: 'Vuelvo al pueblo en una rueda por el río.', en: 'I go back to the village on a tube down the river.' }, then: { es: 'Bajas por el río sobre una rueda grande de camión. Es rápido y muy divertido.', en: 'You go down the river on a big truck tyre. It’s fast and great fun.' } },
              { say: { es: 'Me quedo a dormir en la selva.', en: 'I stay and sleep in the jungle.' }, then: { es: 'De noche hay ruidos por todas partes. No duermes mucho, pero ves luciérnagas.', en: 'At night there are noises everywhere. You don’t sleep much, but you see fireflies.' } },
            ],
          },
          twist: { es: 'Mina baja del árbol y camina hacia tu grupo. Mira tu mochila. ¿Qué haces?', en: 'Mina comes down from the tree and walks towards your group. She looks at your backpack. What do you do?' },
          questions: [
            { q: { es: '¿Qué aprendiste de tu madre o de tu padre?', en: 'What did you learn from your mother or father?' }, help: { es: 'Mi madre/padre me enseñó a…', en: 'My mother/father taught me to…' }, follow: [{ es: '¿Todavía lo haces?', en: 'Do you still do it?' }, { es: '¿Se lo enseñarías a tus hijos?', en: 'Would you teach it to your children?' }] },
            { q: { es: '¿Viste animales salvajes alguna vez?', en: 'Have you ever seen wild animals?' }, help: { es: 'Sí, vi… en… / No, solo en el zoo.', en: 'Yes, I saw… in… / No, only at the zoo.' }, follow: [{ es: '¿Te dio miedo?', en: 'Were you scared?' }, { es: '¿Sacaste fotos?', en: 'Did you take photos?' }] },
            { q: { es: '¿Dormirías en la selva?', en: 'Would you sleep in the jungle?' }, help: { es: 'Sí, ¡qué aventura! / No, gracias.', en: 'Yes, what an adventure! / No, thanks.' }, follow: [{ es: '¿Qué llevarías?', en: 'What would you take?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Los zoológicos son buenos o malos?', en: 'Are zoos good or bad?' }, help: { es: 'Creo que son… porque…', en: 'I think they’re… because…' }, follow: [{ es: '¿Hay uno en tu ciudad?', en: 'Is there one in your city?' }, { es: '¿Vas?', en: 'Do you go?' }] },
          ],
          words: [{ es: 'salvaje', en: 'wild' }, { es: 'el bosque', en: 'the forest' }, { es: 'la hoja', en: 'the leaf' }, { es: 'resbaladizo', en: 'slippery' }, { es: 'la luciérnaga', en: 'the firefly' }],
        },
        A2: {
          scene: { es: 'Antes, en Bukit Lawang, los guías daban comida a los orangutanes para que los turistas pudieran verlos de cerca. Ahora está prohibido, porque los animales se acostumbraban a las personas y se enfermaban con sus virus. Pero sin comida, los orangutanes casi no bajan, y muchos turistas se van sin verlos. Algunos guías, que ganan muy poco, todavía llevan fruta escondida en la mochila. Rahmat sabe quiénes son.', en: 'In the past, in Bukit Lawang, guides fed the orangutans so tourists could see them up close. Now it’s banned, because the animals got used to people and caught their viruses. But without food, the orangutans hardly come down, and many tourists leave without seeing them. Some guides, who earn very little, still carry fruit hidden in their backpacks. Rahmat knows who they are.' },
          opener: { es: 'Uno de ellos es mi primo. Tiene tres hijos y cobra por turista contento. Si el turista no ve un orangután, no deja propina y escribe una mala reseña. Yo entiendo eso. Pero el año pasado una cría de orangután murió de una enfermedad que tienen los humanos. Si lo denuncio, mi primo pierde el trabajo y mi tía no me habla nunca más. Si no lo denuncio, los animales siguen en peligro. ¿Qué harías en mi lugar?', en: 'One of them is my cousin. He has three kids and gets paid per happy tourist. If the tourist doesn’t see an orangutan, they don’t tip and write a bad review. I understand that. But last year a baby orangutan died of a disease humans carry. If I report him, my cousin loses his job and my aunt never speaks to me again. If I don’t, the animals stay in danger. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué hace Rahmat?', en: 'What does Rahmat do?' },
            options: [
              { say: { es: 'Habla primero con su primo, a solas.', en: 'He talks to his cousin first, alone.' }, then: { es: 'El primo se enoja, pero promete parar. Dos semanas después, Rahmat ve fruta en su mochila otra vez.', en: 'His cousin gets angry, but promises to stop. Two weeks later, Rahmat sees fruit in his backpack again.' } },
              { say: { es: 'Lo denuncia al parque.', en: 'He reports him to the park.' }, then: { es: 'El primo pierde la licencia por seis meses. La familia está dividida en la boda de una prima.', en: 'His cousin loses his licence for six months. The family is divided at a cousin’s wedding.' } },
              { say: { es: 'Propone que los guías cobren un sueldo fijo.', en: 'He proposes guides get a fixed salary.' }, then: { es: 'La asociación de guías lo discute durante meses. Algunos lo apoyan, otros tienen miedo de ganar menos.', en: 'The guides’ association discusses it for months. Some support it, others fear earning less.' } },
            ],
          },
          twist: { es: 'Una turista enojada dice: «Pagué cien dólares y no vi ningún orangután. Quiero mi dinero». ¿Qué le responde Rahmat?', en: 'An angry tourist says: “I paid a hundred dollars and didn’t see a single orangutan. I want my money back.” What does Rahmat answer?' },
          questions: [
            { q: { es: '¿Denunciarías a alguien de tu familia?', en: 'Would you report someone in your family?' }, help: { es: 'Depende de… / Nunca, porque…', en: 'It depends on… / Never, because…' }, follow: [{ es: '¿Y a un amigo?', en: 'And a friend?' }, { es: '¿Hay algo que no perdonarías?', en: 'Is there anything you wouldn’t forgive?' }] },
            { q: { es: '¿Está bien pagar para ver animales?', en: 'Is it OK to pay to see animals?' }, help: { es: 'Sí, si el dinero… / No, porque…', en: 'Yes, if the money… / No, because…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Adónde fue el dinero?', en: 'Where did the money go?' }] },
            { q: { es: '¿Las reseñas en internet son justas?', en: 'Are online reviews fair?' }, help: { es: 'A veces, pero… / Sí, porque…', en: 'Sometimes, but… / Yes, because…' }, follow: [{ es: '¿Escribes reseñas?', en: 'Do you write reviews?' }, { es: '¿Una mala experiencia?', en: 'A bad experience?' }] },
            { q: { es: '¿Qué es mejor: un sueldo fijo o cobrar según los resultados?', en: 'What is better: a fixed salary or pay by results?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cómo cobras tú?', en: 'How are you paid?' }, { es: '¿Para qué trabajos sirve cada uno?', en: 'Which jobs suit each one?' }] },
          ],
          words: [{ es: 'acostumbrarse', en: 'to get used to' }, { es: 'enfermarse', en: 'to get ill' }, { es: 'esconder', en: 'to hide' }, { es: 'denunciar', en: 'to report' }, { es: 'la licencia', en: 'the licence' }],
        },
        B1: {
          scene: { es: 'Quedan menos de catorce mil orangutanes de Sumatra en libertad. La mayor amenaza no son los turistas, sino la pérdida de bosque: cada año desaparecen miles de hectáreas de selva para plantar palma aceitera, la que se usa en el chocolate, el champú y las galletas de medio mundo. Rahmat participa en un centro que rescata orangutanes huérfanos y los prepara para volver a la selva. Hoy recibe a un grupo de periodistas europeos.', en: 'Fewer than fourteen thousand Sumatran orangutans remain in the wild. The biggest threat isn’t tourists but forest loss: every year thousands of hectares of jungle disappear to plant oil palm, which is used in the chocolate, shampoo and biscuits of half the world. Rahmat works with a centre that rescues orphaned orangutans and prepares them to return to the jungle. Today he welcomes a group of European journalists.' },
          opener: { es: 'Este pequeño se llama Budi. Lo encontraron solo en una plantación; a su madre la mataron porque comía los frutos de la palma. Va a pasar siete años aprendiendo a trepar y a buscar comida, con nosotros como madres de mentira. Sus lectores pueden ayudar, claro. Pero me molesta un poco cuando los europeos vienen a decirnos que no cortemos la selva, después de cortar todos sus bosques hace siglos para hacerse ricos. Y ustedes compran el aceite. ¿Quién tiene la responsabilidad de salvar una selva: el país que la tiene o el mundo que la consume?', en: 'This little one is called Budi. They found him alone on a plantation; his mother was killed because she was eating the palm fruit. He’ll spend seven years learning to climb and find food, with us as pretend mothers. Your readers can help, of course. But it bothers me a little when Europeans come to tell us not to cut down the jungle, after cutting down all their forests centuries ago to get rich. And you buy the oil. Who is responsible for saving a jungle: the country that has it or the world that consumes it?' },
          decide: {
            ask: { es: '¿Qué mensaje quiere Rahmat en el artículo?', en: 'What message does Rahmat want in the article?' },
            options: [
              { say: { es: 'Que los lectores dejen de comprar aceite de palma.', en: 'That readers stop buying palm oil.' }, then: { es: 'Una periodista le explica que otros aceites necesitan todavía más tierra. Rahmat se queda pensando.', en: 'A journalist explains that other oils need even more land. Rahmat is left thinking.' } },
              { say: { es: 'Que paguen más por un aceite controlado.', en: 'That they pay more for a monitored oil.' }, then: { es: 'El artículo explica los sellos de aceite responsable y también sus trampas. Es honesto, pero complicado.', en: 'The article explains responsible-oil labels and their loopholes too. It’s honest, but complicated.' } },
              { say: { es: 'Que el mundo pague a Indonesia por no cortar.', en: 'That the world pays Indonesia not to cut down.' }, then: { es: 'La idea aparece en el título. Muchos lectores escriben: «¿Y cómo sabemos que el dinero llega?».', en: 'The idea makes the headline. Many readers write: “And how do we know the money gets there?”' } },
            ],
          },
          twist: { es: 'Uno de los periodistas quiere una foto abrazando a Budi «para la portada». Rahmat sabe que el contacto con humanos es malo para su vuelta a la selva. Pero la portada traería donaciones. ¿Qué decide?', en: 'One of the journalists wants a photo hugging Budi “for the cover”. Rahmat knows human contact is bad for his return to the jungle. But the cover would bring donations. What does he decide?' },
          questions: [
            { q: { es: '¿Quién debe pagar para proteger la naturaleza de un país?', en: 'Who should pay to protect a country’s nature?' }, help: { es: 'Creo que… porque… Sin embargo…', en: 'I think… because… However…' }, follow: [{ es: '¿Es justo?', en: 'Is it fair?' }, { es: '¿Cómo se controla?', en: 'How is it monitored?' }] },
            { q: { es: '¿Sabes qué productos de tu casa tienen aceite de palma?', en: 'Do you know which products at home contain palm oil?' }, help: { es: 'Creo que el/la… / No tengo idea.', en: 'I think the… / No idea.' }, follow: [{ es: '¿Miras las etiquetas?', en: 'Do you read labels?' }, { es: '¿Cambiarías algo?', en: 'Would you change anything?' }] },
            { q: { es: '¿Está bien usar imágenes tiernas para pedir dinero?', en: 'Is it OK to use cute images to ask for money?' }, help: { es: 'Funciona, pero… / No, porque…', en: 'It works, but… / No, because…' }, follow: [{ es: '¿Donas a alguna causa?', en: 'Do you donate to any cause?' }, { es: '¿Por qué esa?', en: 'Why that one?' }] },
            { q: { es: '¿Los países ricos tienen derecho a dar lecciones ambientales?', en: 'Do rich countries have the right to lecture others on the environment?' }, help: { es: 'Tienen derecho si… / No, porque ellos…', en: 'They have the right if… / No, because they…' }, follow: [{ es: '¿Y tu país?', en: 'And your country?' }, { es: '¿Qué debería hacer primero?', en: 'What should it do first?' }] },
          ],
          words: [{ es: 'la amenaza', en: 'the threat' }, { es: 'la palma aceitera', en: 'oil palm' }, { es: 'huérfano', en: 'orphaned' }, { es: 'trepar', en: 'to climb' }, { es: 'consumir', en: 'to consume' }],
        },
      },
    },
    // ------------------------------------------------------------ Lake Toba
    {
      id: 'toba',
      name: { es: 'El lago Toba', en: 'Lake Toba' },
      who: { name: 'Sinta', role: { es: 'dueña de una casa de huéspedes batak', en: 'Batak guesthouse owner' } },
      levels: {
        A0: {
          scene: { es: 'Hay un lago enorme y azul. En el centro hay una isla. Hay casas de madera con techos altos y curvos. Sinta tiene una casa de huéspedes. Canta.', en: 'There is a huge blue lake. In the middle there is an island. There are wooden houses with tall, curved roofs. Sinta has a guesthouse. She sings.' },
          opener: { es: '¡Horas! Es «hola» en batak. Bienvenido a mi casa. ¿Quieres un café?', en: '“Horas!” It means “hello” in Batak. Welcome to my house. Would you like a coffee?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Nado en el lago.', en: 'I swim in the lake.' }, then: { es: 'El agua está fresca y limpia. ¡Qué bien!', en: 'The water is cool and clean. How nice!' } },
              { say: { es: 'Entro en la casa.', en: 'I go into the house.' }, then: { es: 'La puerta es pequeña. ¡Cuidado con la cabeza!', en: 'The door is small. Mind your head!' } },
              { say: { es: 'Canto con Sinta.', en: 'I sing with Sinta.' }, then: { es: 'Sinta toca la guitarra. Sus hijos cantan también.', en: 'Sinta plays the guitar. Her children sing too.' } },
            ],
          },
          twist: { es: 'El techo de la casa es como un barco. ¿Por qué?', en: 'The roof of the house is like a boat. Why?' },
          questions: [
            { q: { es: '¿Te gusta nadar?', en: 'Do you like swimming?' }, help: { es: 'Sí, mucho. / No, no sé nadar.', en: 'Yes, a lot. / No, I can’t swim.' }, follow: [{ es: '¿En el mar o en la piscina?', en: 'In the sea or in the pool?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Cómo es tu casa?', en: 'What is your house like?' }, help: { es: 'Mi casa es grande/pequeña…', en: 'My house is big/small…' }, follow: [{ es: '¿Tiene jardín?', en: 'Does it have a garden?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Hay un lago cerca de tu ciudad?', en: 'Is there a lake near your city?' }, help: { es: 'Sí, el lago… / No.', en: 'Yes, Lake… / No.' }, follow: [{ es: '¿Vas?', en: 'Do you go?' }, { es: '¿Es bonito?', en: 'Is it pretty?' }] },
            { q: { es: '¿Te gusta cantar?', en: 'Do you like singing?' }, help: { es: 'Sí. / No, canto muy mal.', en: 'Yes. / No, I sing very badly.' }, follow: [{ es: '¿Qué canciones?', en: 'Which songs?' }, { es: '¿Con quién?', en: 'Who with?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'la isla', en: 'the island' }, { es: 'la madera', en: 'wood' }, { es: 'el techo', en: 'the roof' }, { es: 'nadar', en: 'to swim' }],
        },
        A1: {
          scene: { es: 'El lago Toba está dentro del cráter de un supervolcán que explotó hace setenta y cuatro mil años. Es el lago volcánico más grande del mundo, y en el centro tiene una isla del tamaño de Singapur: Samosir. Aquí viven los batak, un pueblo con su propio idioma, su música y sus casas de techos curvos. La mayoría de los batak son cristianos, y los domingos las iglesias se llenan de cantos.', en: 'Lake Toba lies inside the crater of a supervolcano that erupted seventy-four thousand years ago. It is the largest volcanic lake in the world, and in the middle there is an island the size of Singapore: Samosir. The Batak live here, a people with their own language, music and curved-roof houses. Most Batak are Christian, and on Sundays the churches fill with singing.' },
          opener: { es: 'Dicen que los batak cantamos antes de hablar. En cualquier fiesta, alguien saca una guitarra y empezamos. Esta casa la construyó mi bisabuelo sin un solo clavo. Abajo, antes, dormían los cerdos y los búfalos; ahora es el comedor de los huéspedes. Arriba, en el techo, hay dibujos que protegen la casa. ¿Hay algo en tu casa que te recuerda a tu familia?', en: 'They say Batak people sing before they talk. At any party, someone gets out a guitar and off we go. My great-grandfather built this house without a single nail. Downstairs, the pigs and buffaloes used to sleep; now it’s the guests’ dining room. Up in the roof there are drawings that protect the house. Is there something in your home that reminds you of your family?' },
          decide: {
            ask: { es: '¿Qué haces el domingo?', en: 'What do you do on Sunday?' },
            options: [
              { say: { es: 'Voy a la iglesia con Sinta.', en: 'I go to church with Sinta.' }, then: { es: 'El coro canta en cuatro voces. No entiendes las palabras, pero se te pone la piel de gallina.', en: 'The choir sings in four parts. You don’t understand the words, but you get goosebumps.' } },
              { say: { es: 'Alquilo una moto y doy la vuelta a la isla.', en: 'I rent a motorbike and go round the island.' }, then: { es: 'Ves tumbas de piedra con forma de casa batak, búfalos en el agua y niños que saludan.', en: 'You see stone tombs shaped like Batak houses, buffaloes in the water and children waving.' } },
              { say: { es: 'Me quedo en el lago leyendo.', en: 'I stay by the lake reading.' }, then: { es: 'Sinta te trae pescado del lago, asado con especias. Es lo mejor del viaje.', en: 'Sinta brings you lake fish, grilled with spices. It’s the best part of the trip.' } },
            ],
          },
          twist: { es: 'Sinta te invita a una boda batak mañana. Hay mil invitados. Te dice que tienes que llevar dinero en un sobre. ¿Cuánto pones?', en: 'Sinta invites you to a Batak wedding tomorrow. There are a thousand guests. She tells you to bring money in an envelope. How much do you put in?' },
          questions: [
            { q: { es: '¿Hay algo en tu casa que te recuerda a tu familia?', en: 'Is there something in your home that reminds you of your family?' }, help: { es: 'Sí, tengo el/la… de mi…', en: 'Yes, I have my…’s…' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Tiene una historia?', en: 'Does it have a story?' }] },
            { q: { es: '¿Cuánta gente va a las bodas en tu país?', en: 'How many people go to weddings in your country?' }, help: { es: 'Normalmente unas… personas.', en: 'Usually about… people.' }, follow: [{ es: '¿Qué se regala?', en: 'What do people give?' }, { es: '¿Cuál fue tu última boda?', en: 'What was the last wedding you went to?' }] },
            { q: { es: '¿Cantas en algún grupo o coro?', en: 'Do you sing in a group or choir?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Qué canciones?', en: 'Which songs?' }] },
            { q: { es: '¿Sabes quién construyó tu casa?', en: 'Do you know who built your house?' }, help: { es: 'Sí, fue… / No tengo idea.', en: 'Yes, it was… / No idea.' }, follow: [{ es: '¿Cuántos años tiene?', en: 'How old is it?' }, { es: '¿Te gustaría construir una?', en: 'Would you like to build one?' }] },
          ],
          words: [{ es: 'el cráter', en: 'the crater' }, { es: 'el clavo', en: 'the nail' }, { es: 'el búfalo', en: 'the buffalo' }, { es: 'el coro', en: 'the choir' }, { es: 'el sobre', en: 'the envelope' }],
        },
        A2: {
          scene: { es: 'El gobierno eligió el lago Toba como uno de los «nuevos Balis»: quiere traer un millón de turistas extranjeros por año. Ya hay un aeropuerto más grande, carreteras nuevas y planes para hoteles de lujo en tierras que, según las familias batak, pertenecen a sus clanes desde hace siglos. Además, las jaulas de peces de las empresas grandes están ensuciando el agua del lago. Sinta recibe la visita de un inversor de Yakarta.', en: 'The government chose Lake Toba as one of the “new Balis”: it wants to bring in a million foreign tourists a year. There is already a bigger airport, new roads and plans for luxury hotels on land that, according to Batak families, has belonged to their clans for centuries. Also, big companies’ fish cages are polluting the lake water. Sinta gets a visit from an investor from Jakarta.' },
          opener: { es: 'El señor quiere comprar la tierra de mi familia para un hotel de cinco estrellas. Dice que me dará trabajo como gerente. Mi hermano en Medan dice que acepte, que somos pobres y que es una oportunidad. Pero la tierra no es solo mía: es del clan, y en ella están las tumbas de mis abuelos. Si vendo, tengo que pedir permiso a cuarenta primos. Y no sé si quiero que mi isla sea otro Bali, con tráfico y discotecas. ¿Tú qué harías?', en: 'The gentleman wants to buy my family’s land for a five-star hotel. He says he’ll give me a job as manager. My brother in Medan says I should accept, that we’re poor and it’s an opportunity. But the land isn’t only mine: it belongs to the clan, and my grandparents’ tombs are on it. If I sell, I have to ask forty cousins for permission. And I don’t know if I want my island to be another Bali, with traffic and nightclubs. What would you do?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Sinta?', en: 'What do you advise Sinta?' },
            options: [
              { say: { es: 'No vender, pero alquilar una parte por veinte años.', en: 'Not sell, but lease part of it for twenty years.' }, then: { es: 'El inversor acepta a regañadientes. Las tumbas se quedan; el hotel se construye al lado.', en: 'The investor reluctantly agrees. The tombs stay; the hotel is built next to them.' } },
              { say: { es: 'Reunir al clan y votar.', en: 'Gather the clan and vote.' }, then: { es: 'La reunión dura dos días, con mucha comida y muchos gritos. Gana el «no» por poco.', en: 'The meeting lasts two days, with lots of food and lots of shouting. “No” wins narrowly.' } },
              { say: { es: 'Vender y comprar tierra en otro lugar.', en: 'Sell and buy land somewhere else.' }, then: { es: 'Sinta tiene dinero, pero sus tías dejan de hablarle. Las tumbas se trasladan en una ceremonia triste.', en: 'Sinta has money, but her aunts stop speaking to her. The tombs are moved in a sad ceremony.' } },
            ],
          },
          twist: { es: 'El inversor le dice a Sinta, en voz baja, que si no vende, el gobierno puede declarar la tierra «de interés público». ¿Es una amenaza?', en: 'The investor tells Sinta, quietly, that if she doesn’t sell, the government could declare the land “of public interest”. Is it a threat?' },
          questions: [
            { q: { es: '¿Quieres que tu ciudad tenga más turistas?', en: 'Do you want your city to have more tourists?' }, help: { es: 'Sí, porque… / No, ya hay demasiados.', en: 'Yes, because… / No, there are too many already.' }, follow: [{ es: '¿Qué ganaría?', en: 'What would it gain?' }, { es: '¿Qué perdería?', en: 'What would it lose?' }] },
            { q: { es: '¿Tu familia toma decisiones juntos?', en: 'Does your family make decisions together?' }, help: { es: 'Sí, por ejemplo… / No, cada uno…', en: 'Yes, for example… / No, everyone…' }, follow: [{ es: '¿Quién tiene la última palabra?', en: 'Who has the last word?' }, { es: '¿Hay peleas?', en: 'Are there fights?' }] },
            { q: { es: '¿Trasladarías las tumbas de tu familia?', en: 'Would you move your family’s graves?' }, help: { es: 'Sí, si… / Nunca, porque…', en: 'Yes, if… / Never, because…' }, follow: [{ es: '¿Visitas el cementerio?', en: 'Do you visit the cemetery?' }, { es: '¿Es importante para ti?', en: 'Is it important to you?' }] },
            { q: { es: '¿Trabajarías en un hotel de lujo?', en: 'Would you work in a luxury hotel?' }, help: { es: 'Sí, de… / No, porque…', en: 'Yes, as a… / No, because…' }, follow: [{ es: '¿Te alojaste en uno?', en: 'Have you stayed in one?' }, { es: '¿Qué te pareció?', en: 'What did you think?' }] },
          ],
          words: [{ es: 'el inversor', en: 'the investor' }, { es: 'el clan', en: 'the clan' }, { es: 'la tumba', en: 'the grave' }, { es: 'la jaula', en: 'the cage' }, { es: 'ensuciar', en: 'to pollute' }],
        },
        B1: {
          scene: { es: 'La supererupción de Toba fue la mayor de los últimos dos millones de años. Algunos científicos creen que el invierno volcánico que provocó casi hizo desaparecer a la especie humana: según esa teoría, quedaron solo unos miles de personas en todo el planeta. Otros científicos dicen que no fue para tanto. Sinta organiza visitas para estudiantes y le gusta empezar con una pregunta incómoda delante del lago.', en: 'The Toba super-eruption was the biggest in the last two million years. Some scientists believe the volcanic winter it caused almost wiped out the human species: according to that theory, only a few thousand people were left on the whole planet. Other scientists say it wasn’t that bad. Sinta runs visits for students and likes to start with an awkward question in front of the lake.' },
          opener: { es: 'Este lago tan tranquilo es la cicatriz de una catástrofe que casi nos borra del mapa. Los volcanes de Indonesia siguen activos: aquí convivimos con el peligro todos los días, y aun así la gente vuelve a plantar en la ceniza porque es la tierra más fértil. Mis abuelos decían que la montaña da y quita. Me pregunto si los humanos aprendimos algo de aquella vez. Hoy no es un volcán, somos nosotros los que cambiamos el clima. ¿Somos capaces de reaccionar a una amenaza que llega despacio, o solo reaccionamos cuando ya explotó?', en: 'This calm lake is the scar of a catastrophe that nearly wiped us off the map. Indonesia’s volcanoes are still active: here we live alongside danger every day, and yet people go back to planting in the ash because it’s the most fertile soil. My grandparents used to say the mountain gives and takes. I wonder whether humans learned anything from that time. Today it isn’t a volcano, we’re the ones changing the climate. Can we react to a threat that comes slowly, or do we only react once it has already exploded?' },
          decide: {
            ask: { es: '¿Cómo sigue la clase de Sinta?', en: 'How does Sinta’s class continue?' },
            options: [
              { say: { es: 'Un debate: ¿seguiría viviendo cerca de un volcán?', en: 'A debate: would you keep living near a volcano?' }, then: { es: 'La mitad dice que no. Un chico de un pueblo cerca del Sinabung dice que no tiene otra opción.', en: 'Half say no. A boy from a village near Mount Sinabung says he has no other choice.' } },
              { say: { es: 'Una caminata por la ceniza vieja.', en: 'A walk through the old ash.' }, then: { es: 'Los estudiantes tocan capas de ceniza de miles de años. Alguien encuentra un trozo de piedra pómez que flota.', en: 'The students touch layers of ash thousands of years old. Someone finds a piece of pumice that floats.' } },
              { say: { es: 'Escribir una carta a los humanos de dentro de mil años.', en: 'Write a letter to humans a thousand years from now.' }, then: { es: 'Las cartas son tristes, graciosas y extrañas. Sinta las guarda en una caja debajo de la casa.', en: 'The letters are sad, funny and strange. Sinta keeps them in a box under the house.' } },
            ],
          },
          twist: { es: 'Esa noche hay un pequeño terremoto. Los vasos tiemblan en la mesa. Los estudiantes se asustan; Sinta sigue cenando tranquila. ¿Es valentía o costumbre?', en: 'That night there is a small earthquake. The glasses shake on the table. The students get scared; Sinta keeps eating calmly. Is it courage or habit?' },
          questions: [
            { q: { es: '¿Por qué nos cuesta reaccionar ante peligros lentos?', en: 'Why do we find it hard to react to slow dangers?' }, help: { es: 'Porque no lo vemos… / Porque preferimos…', en: 'Because we don’t see it… / Because we prefer…' }, follow: [{ es: '¿Un ejemplo personal?', en: 'A personal example?' }, { es: '¿Qué ayudaría?', en: 'What would help?' }] },
            { q: { es: '¿Vivirías en un lugar peligroso si fuera muy bonito?', en: 'Would you live somewhere dangerous if it were very beautiful?' }, help: { es: 'Sí, siempre que… / No, nunca, porque…', en: 'Yes, as long as… / No, never, because…' }, follow: [{ es: '¿Qué riesgos hay donde vives?', en: 'What risks are there where you live?' }, { es: '¿Piensas en ellos?', en: 'Do you think about them?' }] },
            { q: { es: '¿Qué le dirías a alguien que vivirá dentro de mil años?', en: 'What would you tell someone living a thousand years from now?' }, help: { es: 'Le diría que… / Le pediría perdón por…', en: 'I’d tell them that… / I’d apologise for…' }, follow: [{ es: '¿Crees que seguiremos aquí?', en: 'Do you think we’ll still be here?' }, { es: '¿Cómo será el mundo?', en: 'What will the world be like?' }] },
            { q: { es: '¿Las teorías científicas que asustan ayudan o paralizan?', en: 'Do frightening scientific theories help or paralyse?' }, help: { es: 'Ayudan si… / Paralizan cuando…', en: 'They help if… / They paralyse when…' }, follow: [{ es: '¿A ti qué te pasa?', en: 'What happens to you?' }, { es: '¿Cómo deberían contarse?', en: 'How should they be told?' }] },
          ],
          words: [{ es: 'la erupción', en: 'the eruption' }, { es: 'la especie', en: 'the species' }, { es: 'la cicatriz', en: 'the scar' }, { es: 'fértil', en: 'fertile' }, { es: 'el terremoto', en: 'the earthquake' }],
        },
      },
    },
    // ------------------------------------------------------------ Padang kitchen
    {
      id: 'padang',
      name: { es: 'La cocina de Padang', en: 'The Padang kitchen' },
      who: { name: 'Mardiah', role: { es: 'cocinera de un restaurante de Padang', en: 'Padang restaurant cook' } },
      levels: {
        A0: {
          scene: { es: 'Es un restaurante. En la ventana hay muchos platos, uno encima de otro. Hay carne, pescado, huevos y verduras. Todo es picante. Mardiah es la cocinera.', en: 'It is a restaurant. In the window there are many dishes, one on top of the other. There is meat, fish, eggs and vegetables. Everything is spicy. Mardiah is the cook.' },
          opener: { es: '¡Bienvenido! Siéntate. ¿Te gusta la comida picante?', en: 'Welcome! Sit down. Do you like spicy food?' },
          decide: {
            ask: { es: '¿Qué comes?', en: 'What do you eat?' },
            options: [
              { say: { es: 'La carne.', en: 'The meat.' }, then: { es: 'Es «rendang». Es blanda y muy rica. ¡Pica un poco!', en: 'It is “rendang”. It is tender and very tasty. It is a bit spicy!' } },
              { say: { es: 'El pescado.', en: 'The fish.' }, then: { es: 'El pescado tiene salsa amarilla. ¡Qué bien huele!', en: 'The fish has yellow sauce. It smells so good!' } },
              { say: { es: 'Las verduras.', en: 'The vegetables.' }, then: { es: 'Son hojas verdes con coco. Son suaves.', en: 'They are green leaves with coconut. They are mild.' } },
            ],
          },
          twist: { es: 'La gente come con la mano derecha, sin cubiertos. ¿Tú también?', en: 'People eat with their right hand, without cutlery. You too?' },
          questions: [
            { q: { es: '¿Te gusta la comida picante?', en: 'Do you like spicy food?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Qué comida?', en: 'What food?' }, { es: '¿Bebes agua o leche?', en: 'Do you drink water or milk?' }] },
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí. / No, soy vegetariano/a.', en: 'Yes. / No, I am vegetarian.' }, follow: [{ es: '¿Cuál prefieres?', en: 'Which do you prefer?' }, { es: '¿Y pescado?', en: 'And fish?' }] },
            { q: { es: '¿Comes con la mano a veces?', en: 'Do you eat with your hands sometimes?' }, help: { es: 'Sí, la pizza. / No.', en: 'Yes, pizza. / No.' }, follow: [{ es: '¿Qué más?', en: 'What else?' }, { es: '¿Es fácil?', en: 'Is it easy?' }] },
            { q: { es: '¿Quién cocina en tu casa?', en: 'Who cooks at home?' }, help: { es: 'Cocino yo. / Mi…', en: 'I cook. / My…' }, follow: [{ es: '¿Qué cocina?', en: 'What do they cook?' }, { es: '¿Es rico?', en: 'Is it tasty?' }] },
          ],
          words: [{ es: 'picante', en: 'spicy' }, { es: 'la carne', en: 'meat' }, { es: 'el pescado', en: 'fish' }, { es: 'el coco', en: 'coconut' }, { es: 'la mano', en: 'the hand' }],
        },
        A1: {
          scene: { es: 'En los restaurantes de Padang no se pide del menú: el camarero trae veinte platos pequeños a la mesa y tú pagas solo lo que comes. El plato más famoso es el «rendang»: carne cocinada durante ocho horas con leche de coco, chile, jengibre y muchas especias. Mardiah es del pueblo minangkabau, de Sumatra Occidental. Aprendió a cocinar con su abuela y ahora tiene un restaurante en Medan.', en: 'In Padang restaurants you don’t order from a menu: the waiter brings twenty small dishes to the table and you pay only for what you eat. The most famous dish is “rendang”: meat cooked for eight hours with coconut milk, chilli, ginger and lots of spices. Mardiah is from the Minangkabau people, in West Sumatra. She learned to cook with her grandmother and now has a restaurant in Medan.' },
          opener: { es: 'En mi pueblo, las casas y las tierras son de las mujeres. Pasan de madre a hija. Los hombres, cuando son jóvenes, se van a otras ciudades a buscar trabajo y muchos abren restaurantes. ¡Por eso hay restaurantes de Padang en toda Indonesia! El rendang dura semanas sin nevera, por eso los viajeros lo llevaban en los barcos. ¿Hay una comida de tu país que se lleva cuando viajas?', en: 'In my village, houses and land belong to women. They pass from mother to daughter. Young men go off to other cities to look for work, and many open restaurants. That’s why there are Padang restaurants all over Indonesia! Rendang keeps for weeks without a fridge, so travellers used to take it on boats. Is there a food from your country that people take when they travel?' },
          decide: {
            ask: { es: '¿Qué haces en la cocina?', en: 'What do you do in the kitchen?' },
            options: [
              { say: { es: 'Muevo el rendang con la cuchara grande.', en: 'I stir the rendang with the big spoon.' }, then: { es: 'Después de una hora te duele el brazo. Mardiah dice: «Faltan siete».', en: 'After an hour your arm hurts. Mardiah says: “Seven to go.”' } },
              { say: { es: 'Pelo el ajo y el jengibre.', en: 'I peel the garlic and ginger.' }, then: { es: 'Tus manos huelen a especias durante dos días. No te importa.', en: 'Your hands smell of spices for two days. You don’t mind.' } },
              { say: { es: 'Pruebo todas las salsas.', en: 'I taste all the sauces.' }, then: { es: 'La salsa verde es tan picante que lloras. Mardiah te da arroz.', en: 'The green sauce is so spicy you cry. Mardiah gives you rice.' } },
            ],
          },
          twist: { es: 'Un cliente come solo de tres platos, pero toca con la cuchara otros dos. Mardiah dice que debe pagarlos. ¿Es justo?', en: 'A customer eats from only three dishes, but touches two others with his spoon. Mardiah says he has to pay for them. Is that fair?' },
          questions: [
            { q: { es: '¿Hay una comida de tu país que se lleva de viaje?', en: 'Is there a food from your country people take when they travel?' }, help: { es: 'Sí, el/la… / No.', en: 'Yes,… / No.' }, follow: [{ es: '¿Dura mucho?', en: 'Does it keep long?' }, { es: '¿Tú la llevas?', en: 'Do you take it?' }] },
            { q: { es: '¿Quién te enseñó a cocinar?', en: 'Who taught you to cook?' }, help: { es: 'Mi… / Nadie, solo/a.', en: 'My… / Nobody, on my own.' }, follow: [{ es: '¿Qué plato?', en: 'Which dish?' }, { es: '¿Lo cocinas todavía?', en: 'Do you still cook it?' }] },
            { q: { es: '¿Cocinarías algo durante ocho horas?', en: 'Would you cook something for eight hours?' }, help: { es: 'Sí, para una fiesta. / No, ¡qué horror!', en: 'Yes, for a party. / No, no way!' }, follow: [{ es: '¿Cuál es tu receta más larga?', en: 'What is your longest recipe?' }, { es: '¿Para quién?', en: 'For whom?' }] },
            { q: { es: '¿En tu familia, quién hereda la casa?', en: 'In your family, who inherits the house?' }, help: { es: 'Normalmente… / No sé.', en: 'Usually… / I don’t know.' }, follow: [{ es: '¿Es justo?', en: 'Is it fair?' }, { es: '¿Cómo te gustaría?', en: 'How would you like it to be?' }] },
          ],
          words: [{ es: 'la especia', en: 'the spice' }, { es: 'el jengibre', en: 'ginger' }, { es: 'pelar', en: 'to peel' }, { es: 'probar', en: 'to taste' }, { es: 'la nevera', en: 'the fridge' }],
        },
        A2: {
          scene: { es: 'Un restaurante de Yakarta empezó a vender rendang de cerdo. Para los minangkabau, que son musulmanes, eso es casi un insulto: el cerdo está prohibido en su religión y el rendang es parte de su identidad. Hubo una gran polémica en las redes y el restaurante cerró. Ahora un cocinero famoso de Australia quiere hacer un «rendang vegano» en su programa de televisión, y le pide a Mardiah que lo ayude.', en: 'A restaurant in Jakarta started selling pork rendang. For the Minangkabau, who are Muslim, that’s almost an insult: pork is forbidden in their religion and rendang is part of their identity. There was a big controversy on social media and the restaurant closed. Now a famous Australian chef wants to make a “vegan rendang” on his TV show, and he asks Mardiah to help him.' },
          opener: { es: 'El rendang de cerdo no lo voy a defender, eso no. Pero ¿el vegano? Mi hija es vegetariana y me dice que lo haga. Si el rendang solo se puede hacer con carne de vaca, ¿qué pasa con el rendang de pollo, el de huevo, el de hojas de yuca? En mi pueblo hay veinte versiones. Por otro lado, el cocinero va a ganar mucho dinero con nuestra receta y quizá ni diga de dónde viene. ¿Lo ayudo o no?', en: 'I’m not going to defend pork rendang, no way. But vegan? My daughter is vegetarian and she tells me to do it. If rendang can only be made with beef, what about chicken rendang, egg rendang, cassava-leaf rendang? In my village there are twenty versions. On the other hand, the chef is going to make a lot of money with our recipe and might not even say where it comes from. Do I help him or not?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Mardiah?', en: 'What do you advise Mardiah?' },
            options: [
              { say: { es: 'Ayudar, si sale en el programa con su nombre.', en: 'Help, if she appears on the show with her name.' }, then: { es: 'Mardiah sale en la televisión australiana. Su restaurante tiene una cola de turistas al mes siguiente.', en: 'Mardiah appears on Australian TV. Her restaurant has a queue of tourists the following month.' } },
              { say: { es: 'No ayudar. Que lo haga solo.', en: 'Don’t help. Let him do it alone.' }, then: { es: 'El rendang vegano del programa es dulce y seco. Los indonesios se ríen en las redes.', en: 'The show’s vegan rendang is sweet and dry. Indonesians laugh on social media.' } },
              { say: { es: 'Enseñarle una versión tradicional sin carne.', en: 'Teach him a traditional meatless version.' }, then: { es: 'Le enseña el rendang de yaca de su abuela. El cocinero dice que es lo mejor que probó en su vida.', en: 'She teaches him her grandmother’s jackfruit rendang. The chef says it’s the best thing he’s ever tasted.' } },
            ],
          },
          twist: { es: 'Un programa británico dice que el rendang de un concurso «no estaba crujiente». Toda Indonesia se enoja: el rendang nunca es crujiente. ¿Por qué molesta tanto que un extranjero opine mal de tu comida?', en: 'A British show says the rendang in a contest “wasn’t crispy”. All of Indonesia gets angry: rendang is never crispy. Why does it bother people so much when a foreigner criticises their food?' },
          questions: [
            { q: { es: '¿Te molesta cuando cambian una receta de tu país?', en: 'Does it bother you when they change a recipe from your country?' }, help: { es: 'Sí, por ejemplo… / No, me parece bien.', en: 'Yes, for example… / No, I think it’s fine.' }, follow: [{ es: '¿Cuál es el peor ejemplo?', en: 'What is the worst example?' }, { es: '¿Y uno bueno?', en: 'And a good one?' }] },
            { q: { es: '¿La comida es parte de tu identidad?', en: 'Is food part of your identity?' }, help: { es: 'Sí, porque… / No mucho.', en: 'Yes, because… / Not much.' }, follow: [{ es: '¿Qué plato te representa?', en: 'Which dish represents you?' }, { es: '¿Lo extrañas cuando viajas?', en: 'Do you miss it when you travel?' }] },
            { q: { es: '¿Probarías la versión vegana de tu plato favorito?', en: 'Would you try the vegan version of your favourite dish?' }, help: { es: 'Sí, por curiosidad. / No, nunca.', en: 'Yes, out of curiosity. / No, never.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Funcionaría?', en: 'Would it work?' }] },
            { q: { es: '¿Debería un cocinero decir de dónde viene su receta?', en: 'Should a chef say where their recipe comes from?' }, help: { es: 'Sí, siempre. / Depende de…', en: 'Yes, always. / It depends on…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y en casa?', en: 'And at home?' }] },
          ],
          words: [{ es: 'el cerdo', en: 'pork' }, { es: 'la polémica', en: 'the controversy' }, { es: 'la receta', en: 'the recipe' }, { es: 'la yuca', en: 'cassava' }, { es: 'crujiente', en: 'crispy' }],
        },
        B1: {
          scene: { es: 'Los minangkabau son una de las sociedades matrilineales más grandes del mundo: el apellido, la casa y la tierra se heredan por la línea de la madre. Al mismo tiempo, son musulmanes muy practicantes, y el islam tiene sus propias reglas sobre la herencia, que favorecen a los hijos varones. Durante siglos, las dos tradiciones convivieron con acuerdos y tensiones. Mardiah tiene dos hijos y una hija, y su madre acaba de morir. La familia se reúne para decidir qué pasa con la casa del pueblo.', en: 'The Minangkabau are one of the largest matrilineal societies in the world: the family name, the house and the land are inherited through the mother’s line. At the same time, they are very devout Muslims, and Islam has its own inheritance rules, which favour sons. For centuries, the two traditions have coexisted with agreements and tensions. Mardiah has two sons and a daughter, and her mother has just died. The family gathers to decide what happens to the village house.' },
          opener: { es: 'Según la costumbre, la casa pasa a mí y después a mi hija. Mis hermanos lo saben desde niños y nunca se quejaron. Pero ahora mi hermano menor, que vive en Malasia y va mucho a la mezquita, dice que según la ley islámica él tiene derecho a una parte. No es un mal hombre: tiene deudas. Mi hija, que estudia derecho, dice que la costumbre protege a las mujeres en un país donde casi nada las protege. Y yo pienso en mi madre, que mantuvo esta casa sola. ¿Qué debe pesar más cuando una costumbre y una religión dicen cosas distintas?', en: 'According to custom, the house passes to me and then to my daughter. My brothers have known it since they were children and never complained. But now my younger brother, who lives in Malaysia and goes to the mosque a lot, says that under Islamic law he’s entitled to a share. He isn’t a bad man: he has debts. My daughter, who studies law, says custom protects women in a country where almost nothing protects them. And I think of my mother, who kept this house going on her own. What should carry more weight when a custom and a religion say different things?' },
          decide: {
            ask: { es: '¿Qué propone Mardiah a la familia?', en: 'What does Mardiah propose to the family?' },
            options: [
              { say: { es: 'La casa sigue la costumbre; el dinero, la ley islámica.', en: 'The house follows custom; the money, Islamic law.' }, then: { es: 'Es el acuerdo que muchas familias minangkabau usan desde hace siglos. El hermano acepta, aunque no está contento.', en: 'It’s the arrangement many Minangkabau families have used for centuries. Her brother accepts, though he isn’t happy.' } },
              { say: { es: 'Ayudar al hermano con sus deudas, sin tocar la casa.', en: 'Help her brother with his debts, without touching the house.' }, then: { es: 'Los primos ponen dinero entre todos. El hermano llora en la reunión y nadie lo esperaba.', en: 'The cousins chip in together. Her brother cries at the meeting, and nobody expected it.' } },
              { say: { es: 'Preguntar al jefe del clan y aceptar lo que diga.', en: 'Ask the clan head and accept what he says.' }, then: { es: 'El jefe del clan habla durante una hora y no decide nada. Dice que vuelvan en tres meses.', en: 'The clan head talks for an hour and decides nothing. He tells them to come back in three months.' } },
            ],
          },
          twist: { es: 'La hija de Mardiah anuncia que no quiere la casa: va a vivir en Yakarta y no piensa volver al pueblo. ¿Qué pasa con una tradición cuando la heredera no la quiere?', en: 'Mardiah’s daughter announces she doesn’t want the house: she’s going to live in Jakarta and has no plans to return to the village. What happens to a tradition when the heir doesn’t want it?' },
          questions: [
            { q: { es: '¿Qué debe pesar más: la costumbre, la religión o la ley del Estado?', en: 'What should carry more weight: custom, religion or state law?' }, help: { es: 'Creo que… porque… Aunque…', en: 'I think… because… Although…' }, follow: [{ es: '¿Hay conflictos así en tu país?', en: 'Are there conflicts like this in your country?' }, { es: '¿Quién gana normalmente?', en: 'Who usually wins?' }] },
            { q: { es: '¿Las herencias unen o separan a las familias?', en: 'Do inheritances bring families together or split them?' }, help: { es: 'Muchas veces separan porque… / Pueden unir si…', en: 'They often split them because… / They can unite if…' }, follow: [{ es: '¿Conoces algún caso?', en: 'Do you know a case?' }, { es: '¿Cómo se evita?', en: 'How can it be avoided?' }] },
            { q: { es: '¿Hijos e hijas deberían heredar lo mismo siempre?', en: 'Should sons and daughters always inherit the same?' }, help: { es: 'Sí, porque… / No siempre, por ejemplo si…', en: 'Yes, because… / Not always, for example if…' }, follow: [{ es: '¿Qué dice la ley en tu país?', en: 'What does the law say in your country?' }, { es: '¿Estás de acuerdo?', en: 'Do you agree?' }] },
            { q: { es: '¿Una tradición tiene sentido si los jóvenes no la quieren?', en: 'Does a tradition make sense if young people don’t want it?' }, help: { es: 'Sí, porque… / No, porque las tradiciones…', en: 'Yes, because… / No, because traditions…' }, follow: [{ es: '¿Qué tradición dejarías tú?', en: 'Which tradition would you drop?' }, { es: '¿Cuál mantendrías?', en: 'Which would you keep?' }] },
          ],
          words: [{ es: 'matrilineal', en: 'matrilineal' }, { es: 'heredar', en: 'to inherit' }, { es: 'la herencia', en: 'the inheritance' }, { es: 'la deuda', en: 'the debt' }, { es: 'el heredero', en: 'the heir' }],
        },
      },
    },
    // ------------------------------------------------------------ Gayo coffee
    {
      id: 'cafe-gayo',
      name: { es: 'El cafetal de Gayo', en: 'The Gayo coffee farm' },
      who: { name: 'Fitri', role: { es: 'cultivadora de café', en: 'coffee grower' } },
      levels: {
        A0: {
          scene: { es: 'Estamos en las montañas. Hace fresco. Hay plantas de café con frutos rojos. Fitri tiene una cesta. Hay niebla.', en: 'We are in the mountains. It is cool. There are coffee plants with red berries. Fitri has a basket. There is fog.' },
          opener: { es: '¡Hola! Esto es café. Los frutos rojos son el café. ¿Tomas café?', en: 'Hello! This is coffee. The red berries are the coffee. Do you drink coffee?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Recojo frutos rojos.', en: 'I pick red berries.' }, then: { es: 'Solo los rojos, no los verdes. ¡Muy bien!', en: 'Only the red ones, not the green ones. Very good!' } },
              { say: { es: 'Pruebo un fruto.', en: 'I taste a berry.' }, then: { es: '¡Es dulce! No es amargo como el café.', en: 'It is sweet! It is not bitter like coffee.' } },
              { say: { es: 'Tomo un café con Fitri.', en: 'I have a coffee with Fitri.' }, then: { es: 'El café es muy fuerte. Fitri pone mucho azúcar.', en: 'The coffee is very strong. Fitri puts in a lot of sugar.' } },
            ],
          },
          twist: { es: 'Empieza a llover. Fitri dice: «¡Rápido, el café al techo!». ¿Por qué?', en: 'It starts to rain. Fitri says: “Quick, the coffee under the roof!” Why?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, mucho. / No, té.', en: 'Yes, a lot. / No, tea.' }, follow: [{ es: '¿Con azúcar?', en: 'With sugar?' }, { es: '¿A qué hora?', en: 'At what time?' }] },
            { q: { es: '¿Te gusta la montaña?', en: 'Do you like the mountains?' }, help: { es: 'Sí. / No, prefiero el mar.', en: 'Yes. / No, I prefer the sea.' }, follow: [{ es: '¿Vas a la montaña?', en: 'Do you go to the mountains?' }, { es: '¿En invierno o en verano?', en: 'In winter or summer?' }] },
            { q: { es: '¿Te gusta lo dulce o lo amargo?', en: 'Do you like sweet or bitter things?' }, help: { es: 'Me gusta lo…', en: 'I like… things.' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Y el chocolate?', en: 'And chocolate?' }] },
            { q: { es: '¿Dónde tomas café?', en: 'Where do you drink coffee?' }, help: { es: 'En casa. / En un bar.', en: 'At home. / In a café.' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Cuánto cuesta?', en: 'How much is it?' }] },
          ],
          words: [{ es: 'el café', en: 'coffee' }, { es: 'el fruto', en: 'the berry' }, { es: 'rojo', en: 'red' }, { es: 'recoger', en: 'to pick' }, { es: 'amargo', en: 'bitter' }],
        },
        A1: {
          scene: { es: 'Las tierras altas de Gayo, en Aceh, en el norte de Sumatra, producen uno de los cafés más apreciados del mundo. Las plantas crecen a más de mil metros, a la sombra de otros árboles. Casi todo el trabajo se hace a mano: recoger, lavar, secar al sol y seleccionar los granos uno por uno. Fitri tiene una pequeña finca y forma parte de una cooperativa de mujeres que vende café a tostadores de Estados Unidos y Europa.', en: 'The Gayo highlands, in Aceh, in northern Sumatra, produce one of the most prized coffees in the world. The plants grow at over a thousand metres, in the shade of other trees. Almost all the work is done by hand: picking, washing, drying in the sun and sorting the beans one by one. Fitri has a small farm and belongs to a women’s cooperative that sells coffee to roasters in the United States and Europe.' },
          opener: { es: 'Antes vendíamos el café a un intermediario que pagaba muy poco y lo mezclaba con café de cualquier lugar. Ahora, con la cooperativa, el comprador sabe que este café es de mi finca, de mis manos. En la bolsa, en Nueva York, ponen mi foto. Es raro verse en una bolsa de café. Yo prefiero el café con mucho azúcar, a la manera de aquí, aunque los compradores dicen que así no se notan los sabores. ¿Cómo tomas tú el café?', en: 'We used to sell the coffee to a middleman who paid very little and mixed it with coffee from anywhere. Now, with the cooperative, the buyer knows this coffee is from my farm, from my hands. On the bag, in New York, they put my photo. It’s strange to see yourself on a coffee bag. I prefer my coffee with lots of sugar, the way people have it here, although the buyers say that way you can’t taste the flavours. How do you take your coffee?' },
          decide: {
            ask: { es: '¿Qué haces en la finca?', en: 'What do you do on the farm?' },
            options: [
              { say: { es: 'Seco los granos al sol.', en: 'I dry the beans in the sun.' }, then: { es: 'Tienes que darlos vuelta cada hora con un rastrillo. Al final del día, te duelen los hombros.', en: 'You have to turn them every hour with a rake. By the end of the day, your shoulders hurt.' } },
              { say: { es: 'Selecciono los granos malos.', en: 'I sort out the bad beans.' }, then: { es: 'Las mujeres de la cooperativa lo hacen tres veces más rápido que tú y cantan al mismo tiempo.', en: 'The women in the cooperative do it three times faster than you and sing at the same time.' } },
              { say: { es: 'Hago una cata con Fitri.', en: 'I do a tasting with Fitri.' }, then: { es: 'Sorbes el café con ruido, como los expertos. Fitri se ríe: «Pareces un comprador».', en: 'You slurp the coffee noisily, like the experts. Fitri laughs: “You look like a buyer.”' } },
            ],
          },
          twist: { es: 'Fitri te muestra el precio de una taza de su café en Nueva York: ocho dólares. Ella recibe unos pocos centavos por esa taza. ¿Qué piensas?', en: 'Fitri shows you the price of a cup of her coffee in New York: eight dollars. She gets a few cents for that cup. What do you think?' },
          questions: [
            { q: { es: '¿Cómo tomas el café?', en: 'How do you take your coffee?' }, help: { es: 'Solo, con leche, con azúcar…', en: 'Black, with milk, with sugar…' }, follow: [{ es: '¿Siempre igual?', en: 'Always the same?' }, { es: '¿Cuánto pagas por un café?', en: 'How much do you pay for a coffee?' }] },
            { q: { es: '¿Sabes de dónde viene tu café?', en: 'Do you know where your coffee comes from?' }, help: { es: 'Sí, de… / No tengo idea.', en: 'Yes, from… / No idea.' }, follow: [{ es: '¿Lo miras en la bolsa?', en: 'Do you check the bag?' }, { es: '¿Importa?', en: 'Does it matter?' }] },
            { q: { es: '¿Trabajaste alguna vez en una cooperativa o un grupo?', en: 'Have you ever worked in a cooperative or group?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Lo recomiendas?', en: 'Would you recommend it?' }] },
            { q: { es: '¿Te gustaría ver tu foto en un producto?', en: 'Would you like to see your photo on a product?' }, help: { es: 'Sí, ¡qué divertido! / No, qué vergüenza.', en: 'Yes, how fun! / No, how embarrassing.' }, follow: [{ es: '¿En qué producto?', en: 'On what product?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'las tierras altas', en: 'the highlands' }, { es: 'el grano', en: 'the bean' }, { es: 'el intermediario', en: 'the middleman' }, { es: 'la finca', en: 'the farm' }, { es: 'la cata', en: 'the tasting' }],
        },
        A2: {
          scene: { es: 'Este año el clima está raro: llueve cuando debería hacer sol y hace calor cuando debería hacer fresco. Las flores del café caen antes de tiempo y aparece una plaga que come los granos por dentro. La cosecha de la cooperativa es la mitad de lo normal. El comprador de Nueva York quiere la misma cantidad que el año pasado, y dice que, si no la recibe, va a comprar café de Colombia.', en: 'The weather is strange this year: it rains when it should be sunny and it’s hot when it should be cool. The coffee flowers fall too early and a pest appears that eats the beans from the inside. The cooperative’s harvest is half the usual size. The New York buyer wants the same amount as last year, and says that if he doesn’t get it, he’ll buy coffee from Colombia.' },
          opener: { es: 'Algunas mujeres de la cooperativa quieren comprar café de otras fincas, de peor calidad, y mezclarlo para llegar a la cantidad. Nadie se daría cuenta, dicen. Yo creo que sí: el comprador lo prueba todo. Y si nos descubre, perdemos la confianza que ganamos en diez años. Pero si no mandamos nada, perdemos el cliente, y muchas familias dependen de ese dinero. Mi vecina tiene un hijo enfermo. ¿Qué hago?', en: 'Some women in the cooperative want to buy coffee from other farms, of lower quality, and blend it in to reach the amount. Nobody would notice, they say. I think they would: the buyer tastes everything. And if he finds out, we lose the trust we’ve built over ten years. But if we send nothing, we lose the client, and many families depend on that money. My neighbour has a sick son. What do I do?' },
          decide: {
            ask: { es: '¿Qué hace la cooperativa?', en: 'What does the cooperative do?' },
            options: [
              { say: { es: 'Mandar la mitad y explicar la verdad.', en: 'Send half and explain the truth.' }, then: { es: 'El comprador está molesto, pero publica la historia de la cosecha en su web. Algunos clientes pagan más para ayudar.', en: 'The buyer is annoyed, but posts the harvest story on his website. Some customers pay more to help.' } },
              { say: { es: 'Mezclar con café de otras fincas.', en: 'Blend in coffee from other farms.' }, then: { es: 'El comprador nota la diferencia en la primera taza. Pide explicaciones y baja el precio a la mitad.', en: 'The buyer notices the difference in the first cup. He asks for an explanation and halves the price.' } },
              { say: { es: 'Buscar más compradores pequeños.', en: 'Look for more small buyers.' }, then: { es: 'Encuentran tres tostadores en Japón y Corea. Pagan menos, pero el riesgo está repartido.', en: 'They find three roasters in Japan and Korea. They pay less, but the risk is spread out.' } },
            ],
          },
          twist: { es: 'La vecina con el hijo enfermo ya mezcló su café en secreto. Fitri lo descubre. ¿Lo dice a la cooperativa?', en: 'The neighbour with the sick son has already blended her coffee in secret. Fitri finds out. Does she tell the cooperative?' },
          questions: [
            { q: { es: '¿Es mejor decir la verdad aunque pierdas dinero?', en: 'Is it better to tell the truth even if you lose money?' }, help: { es: 'Sí, siempre, porque… / Depende de…', en: 'Yes, always, because… / It depends on…' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Notas el cambio de clima donde vives?', en: 'Do you notice the climate changing where you live?' }, help: { es: 'Sí, ahora… / No mucho.', en: 'Yes, now… / Not much.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Afecta tu vida?', en: 'Does it affect your life?' }] },
            { q: { es: '¿Pagarías más por un café de una cooperativa?', en: 'Would you pay more for coffee from a cooperative?' }, help: { es: 'Sí, hasta… / No, el café es café.', en: 'Yes, up to… / No, coffee is coffee.' }, follow: [{ es: '¿Y por otros productos?', en: 'And for other products?' }, { es: '¿Confías en las etiquetas?', en: 'Do you trust labels?' }] },
            { q: { es: '¿Contarías el secreto de una vecina?', en: 'Would you tell a neighbour’s secret?' }, help: { es: 'No, nunca. / Sí, si…', en: 'No, never. / Yes, if…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y si te perjudica a ti?', en: 'And if it hurts you?' }] },
          ],
          words: [{ es: 'la cosecha', en: 'the harvest' }, { es: 'la plaga', en: 'the pest' }, { es: 'mezclar', en: 'to blend' }, { es: 'la confianza', en: 'trust' }, { es: 'darse cuenta', en: 'to notice' }],
        },
        B1: {
          scene: { es: 'Aceh vivió treinta años de conflicto armado entre la guerrilla y el ejército indonesio, y en 2004 el tsunami mató a más de cien mil personas en la provincia. Después del desastre llegó la paz, y con ella, ayuda internacional. Muchas viudas de la guerra y del tsunami empezaron a cultivar café en cooperativas. Fitri perdió a su marido en el conflicto. Hoy una empresa de cafeterías quiere usar su historia en una campaña publicitaria mundial.', en: 'Aceh lived through thirty years of armed conflict between the guerrillas and the Indonesian army, and in 2004 the tsunami killed more than a hundred thousand people in the province. After the disaster came peace, and with it, international aid. Many widows of the war and the tsunami started growing coffee in cooperatives. Fitri lost her husband in the conflict. Today a coffee-shop chain wants to use her story in a worldwide advertising campaign.' },
          opener: { es: 'Me ofrecen mucho dinero por mi foto y mi historia: «De la guerra al café». Sería bueno para la cooperativa, claro. Pero no me gusta cómo lo cuentan. En el borrador del anuncio, yo soy una pobre viuda salvada por los clientes que compran café. Nadie habla de que nosotras organizamos todo, que aprendimos a negociar con compradores, que pagamos la escuela de nuestros hijos con nuestro trabajo. No quiero ser una víctima que vende. ¿Cuándo contar tu dolor te ayuda, y cuándo te convierte en un producto?', en: 'They’re offering me a lot of money for my photo and my story: “From war to coffee”. It would be good for the cooperative, of course. But I don’t like how they tell it. In the ad draft, I’m a poor widow saved by the customers who buy coffee. Nobody mentions that we organised everything, that we learned to negotiate with buyers, that we pay for our children’s school with our work. I don’t want to be a victim who sells. When does telling your pain help you, and when does it turn you into a product?' },
          decide: {
            ask: { es: '¿Qué responde Fitri a la empresa?', en: 'What does Fitri tell the company?' },
            options: [
              { say: { es: 'Acepta, si ella escribe el texto.', en: 'She accepts, if she writes the text.' }, then: { es: 'La empresa duda, pero acepta. El anuncio final dice: «Lo organizamos nosotras». Funciona mejor de lo esperado.', en: 'The company hesitates, but agrees. The final ad says: “We organised it ourselves.” It works better than expected.' } },
              { say: { es: 'Rechaza el anuncio.', en: 'She turns down the ad.' }, then: { es: 'La empresa elige otra cooperativa de otro país con una historia «más triste». Fitri no se arrepiente.', en: 'The company picks another cooperative from another country with a “sadder” story. Fitri has no regrets.' } },
              { say: { es: 'Propone que salgan todas las mujeres, no solo ella.', en: 'She proposes all the women appear, not just her.' }, then: { es: 'La foto de grupo es menos dramática y más alegre. La empresa la usa solo en Indonesia.', en: 'The group photo is less dramatic and happier. The company uses it only in Indonesia.' } },
            ],
          },
          twist: { es: 'Una de las mujeres de la cooperativa dice que el dinero del anuncio pagaría una nueva máquina de secado. Fitri está pensando en su dignidad; ella está pensando en la lluvia. ¿Quién tiene razón?', en: 'One of the women in the cooperative says the ad money would pay for a new drying machine. Fitri is thinking about her dignity; she is thinking about the rain. Who is right?' },
          questions: [
            { q: { es: '¿Está bien que las marcas usen historias tristes para vender?', en: 'Is it OK for brands to use sad stories to sell?' }, help: { es: 'Está bien si… / No, porque…', en: 'It’s OK if… / No, because…' }, follow: [{ es: '¿Recuerdas un anuncio así?', en: 'Do you remember an ad like that?' }, { es: '¿Te convenció?', en: 'Did it convince you?' }] },
            { q: { es: '¿Cómo se debería contar la historia de una víctima?', en: 'How should a victim’s story be told?' }, help: { es: 'Debería mostrar… y no solo…', en: 'It should show… and not just…' }, follow: [{ es: '¿Quién debería contarla?', en: 'Who should tell it?' }, { es: '¿Con qué palabras?', en: 'In what words?' }] },
            { q: { es: '¿Qué es más importante: la dignidad o una necesidad urgente?', en: 'What matters more: dignity or an urgent need?' }, help: { es: 'Depende de… / Para mí, la…', en: 'It depends on… / For me,…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Cambiarías de opinión?', en: 'Would you change your mind?' }] },
            { q: { es: '¿Cómo cambia una comunidad después de una tragedia?', en: 'How does a community change after a tragedy?' }, help: { es: 'A veces se une… / Otras veces…', en: 'Sometimes it comes together… / Other times…' }, follow: [{ es: '¿Conoces un caso cercano?', en: 'Do you know a case close to you?' }, { es: '¿Qué ayudó?', en: 'What helped?' }] },
          ],
          words: [{ es: 'la guerrilla', en: 'the guerrillas' }, { es: 'la viuda', en: 'the widow' }, { es: 'el borrador', en: 'the draft' }, { es: 'negociar', en: 'to negotiate' }, { es: 'la dignidad', en: 'dignity' }],
        },
      },
    },
    // ------------------------------------------------------------ oil palm plantation
    {
      id: 'palma',
      name: { es: 'La plantación de palma', en: 'The oil palm plantation' },
      who: { name: 'Hendra', role: { es: 'trabajador de la plantación', en: 'plantation worker' } },
      levels: {
        A0: {
          scene: { es: 'Hay palmeras en filas, muchas, muchas palmeras. No hay otros árboles. Hace mucho calor. Hendra tiene un palo largo con un cuchillo. Hay un camión.', en: 'There are palm trees in rows, many, many palm trees. There are no other trees. It is very hot. Hendra has a long pole with a knife. There is a truck.' },
          opener: { es: '¡Hola! Esto es palma de aceite. Mira, la fruta es naranja. ¿Quieres ver?', en: 'Hello! This is oil palm. Look, the fruit is orange. Do you want to see?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Miro cómo corta la fruta.', en: 'I watch him cut the fruit.' }, then: { es: '¡Pum! La fruta cae. Es muy pesada.', en: 'Thump! The fruit falls. It is very heavy.' } },
              { say: { es: 'Subo al camión.', en: 'I get on the truck.' }, then: { es: 'El camión va a la fábrica. Hay mucho polvo.', en: 'The truck goes to the factory. There is a lot of dust.' } },
              { say: { es: 'Bebo agua.', en: 'I drink water.' }, then: { es: 'Hendra también bebe. Hace mucho calor.', en: 'Hendra drinks too. It is very hot.' } },
            ],
          },
          twist: { es: 'No hay pájaros. No hay monos. ¿Dónde están los animales?', en: 'There are no birds. There are no monkeys. Where are the animals?' },
          questions: [
            { q: { es: '¿Trabajas al aire libre?', en: 'Do you work outdoors?' }, help: { es: 'Sí. / No, en una oficina.', en: 'Yes. / No, in an office.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Cuántas horas?', en: 'How many hours?' }] },
            { q: { es: '¿Comes chocolate?', en: 'Do you eat chocolate?' }, help: { es: 'Sí, mucho. / No.', en: 'Yes, a lot. / No.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like the heat?' }, help: { es: 'Sí. / No, prefiero el frío.', en: 'Yes. / No, I prefer the cold.' }, follow: [{ es: '¿Qué haces cuando hace calor?', en: 'What do you do when it’s hot?' }, { es: '¿Bebes mucha agua?', en: 'Do you drink a lot of water?' }] },
            { q: { es: '¿Hay muchos árboles en tu ciudad?', en: 'Are there many trees in your city?' }, help: { es: 'Sí, muchos. / No, pocos.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Hay pájaros?', en: 'Are there birds?' }] },
          ],
          words: [{ es: 'la palmera', en: 'the palm tree' }, { es: 'la fila', en: 'the row' }, { es: 'pesado', en: 'heavy' }, { es: 'el camión', en: 'the truck' }, { es: 'la fábrica', en: 'the factory' }],
        },
        A1: {
          scene: { es: 'Indonesia es el mayor productor de aceite de palma del mundo. Este aceite está en la mitad de los productos del supermercado: galletas, champú, jabón, pizza congelada, pintalabios. Hendra trabaja en una plantación grande en Sumatra. Empieza a las seis de la mañana y corta racimos de fruta de veinte o treinta kilos. Le pagan por kilo, no por hora.', en: 'Indonesia is the world’s largest producer of palm oil. This oil is in half the products in the supermarket: biscuits, shampoo, soap, frozen pizza, lipstick. Hendra works on a large plantation in Sumatra. He starts at six in the morning and cuts fruit bunches of twenty or thirty kilos. He’s paid by the kilo, not by the hour.' },
          opener: { es: 'Mi padre también trabajaba aquí. Antes, toda esta zona era selva. Mi abuelo cazaba y pescaba en el río, que ahora tiene un color raro. Yo no conozco la selva: crecí entre palmeras. Este trabajo es duro, pero hay escuela para mis hijos y un pequeño hospital. Sin la plantación, aquí no habría nada. Mi hijo mayor dice que quiere ser ingeniero, no cortador. ¿Qué trabajaban tus abuelos?', en: 'My father worked here too. Before, this whole area was jungle. My grandfather hunted and fished in the river, which is a strange colour now. I don’t know the jungle: I grew up among palm trees. This work is hard, but there’s a school for my kids and a small hospital. Without the plantation, there’d be nothing here. My eldest son says he wants to be an engineer, not a cutter. What did your grandparents do for work?' },
          decide: {
            ask: { es: '¿Cómo ayudas a Hendra?', en: 'How do you help Hendra?' },
            options: [
              { say: { es: 'Recojo las frutas sueltas del suelo.', en: 'I pick up the loose fruit from the ground.' }, then: { es: 'Son pequeñas y se pierden entre las hojas. La esposa de Hendra hace este trabajo todos los días.', en: 'They’re small and get lost among the leaves. Hendra’s wife does this job every day.' } },
              { say: { es: 'Intento cortar un racimo.', en: 'I try to cut a bunch.' }, then: { es: 'El palo pesa mucho y el cuchillo no llega. Hendra lo hace en diez segundos.', en: 'The pole is very heavy and the knife doesn’t reach. Hendra does it in ten seconds.' } },
              { say: { es: 'Llevo agua a los trabajadores.', en: 'I take water to the workers.' }, then: { es: 'Te dan las gracias en cinco idiomas: vienen de distintas islas de Indonesia.', en: 'They thank you in five languages: they come from different Indonesian islands.' } },
            ],
          },
          twist: { es: 'Miras la etiqueta de tus galletas. Dice «aceite vegetal», no «aceite de palma». ¿Por qué?', en: 'You look at the label on your biscuits. It says “vegetable oil”, not “palm oil”. Why?' },
          questions: [
            { q: { es: '¿Qué trabajaban tus abuelos?', en: 'What did your grandparents do for work?' }, help: { es: 'Mi abuelo era… y mi abuela…', en: 'My grandfather was… and my grandmother…' }, follow: [{ es: '¿Trabajas en lo mismo?', en: 'Do you do the same?' }, { es: '¿Te contaban historias del trabajo?', en: 'Did they tell you work stories?' }] },
            { q: { es: '¿Lees las etiquetas en el supermercado?', en: 'Do you read labels at the supermarket?' }, help: { es: 'Sí, siempre. / No, nunca.', en: 'Yes, always. / No, never.' }, follow: [{ es: '¿Qué buscas?', en: 'What do you look for?' }, { es: '¿Entiendes todo?', en: 'Do you understand everything?' }] },
            { q: { es: '¿Prefieres cobrar por hora o por resultado?', en: 'Do you prefer being paid by the hour or by results?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cómo cobras ahora?', en: 'How are you paid now?' }, { es: '¿Es justo?', en: 'Is it fair?' }] },
            { q: { es: '¿Cómo era tu ciudad antes?', en: 'What was your city like before?' }, help: { es: 'Antes había… y ahora hay…', en: 'Before there was… and now there is…' }, follow: [{ es: '¿Qué extrañas?', en: 'What do you miss?' }, { es: '¿Qué mejoró?', en: 'What got better?' }] },
          ],
          words: [{ es: 'el productor', en: 'the producer' }, { es: 'el racimo', en: 'the bunch' }, { es: 'cazar', en: 'to hunt' }, { es: 'el cortador', en: 'the cutter' }, { es: 'suelto', en: 'loose' }],
        },
        A2: {
          scene: { es: 'En la temporada seca, algunas empresas y agricultores queman la selva para plantar más palma, porque es la forma más barata de limpiar la tierra. El humo llega hasta Singapur y Malasia. En el pueblo de Hendra las escuelas cierran por el humo y los niños tosen por las noches. El jefe de Hendra le pide que no hable con los periodistas que vinieron a investigar quién empezó el fuego.', en: 'In the dry season, some companies and farmers burn the jungle to plant more palm, because it’s the cheapest way to clear the land. The smoke reaches Singapore and Malaysia. In Hendra’s village the schools close because of the smoke and the children cough at night. Hendra’s boss asks him not to talk to the journalists who have come to investigate who started the fire.' },
          opener: { es: 'Yo vi quién encendió el fuego. No fue un campesino pobre, como dice la empresa: fueron hombres en una camioneta de la propia empresa. Si hablo con los periodistas, me echan, y mi familia vive en una casa de la plantación. Nos quedaríamos sin trabajo y sin techo el mismo día. Pero mi hija pequeña tiene asma y esta semana estuvo dos noches en el hospital. ¿Hablarías tú?', en: 'I saw who started the fire. It wasn’t a poor farmer, as the company says: it was men in one of the company’s own pickups. If I talk to the journalists, they’ll fire me, and my family lives in a plantation house. We’d lose our job and our roof on the same day. But my little daughter has asthma and this week she spent two nights in hospital. Would you talk?' },
          decide: {
            ask: { es: '¿Qué hace Hendra?', en: 'What does Hendra do?' },
            options: [
              { say: { es: 'Habla con los periodistas, sin nombre.', en: 'He talks to the journalists, anonymously.' }, then: { es: 'El artículo sale sin su nombre. La empresa interroga a todos los trabajadores. Hendra no duerme durante semanas.', en: 'The article comes out without his name. The company questions all the workers. Hendra doesn’t sleep for weeks.' } },
              { say: { es: 'Se calla y busca otro trabajo.', en: 'He stays quiet and looks for another job.' }, then: { es: 'Encuentra trabajo en una ciudad, en una fábrica. Gana menos y la familia vive en un cuarto.', en: 'He finds work in a city, in a factory. He earns less and the family lives in one room.' } },
              { say: { es: 'Lo cuenta al sindicato.', en: 'He tells the union.' }, then: { es: 'El sindicato presenta una denuncia con varios testigos. Así es más difícil echar a uno solo.', en: 'The union files a complaint with several witnesses. That way it’s harder to fire just one person.' } },
            ],
          },
          twist: { es: 'Un periodista le ofrece dinero a Hendra por una foto de la camioneta. ¿Es ético aceptar dinero por una información así?', en: 'A journalist offers Hendra money for a photo of the pickup. Is it ethical to accept money for information like that?' },
          questions: [
            { q: { es: '¿Hablarías si arriesgaras tu trabajo?', en: 'Would you speak up if you risked your job?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Conoces a alguien que lo hizo?', en: 'Do you know someone who did?' }, { es: '¿Qué le pasó?', en: 'What happened to them?' }] },
            { q: { es: '¿El humo o la contaminación te afectan?', en: 'Do smoke or pollution affect you?' }, help: { es: 'Sí, en… / No mucho.', en: 'Yes, in… / Not much.' }, follow: [{ es: '¿Qué haces?', en: 'What do you do?' }, { es: '¿Quién es responsable?', en: 'Who is responsible?' }] },
            { q: { es: '¿Los sindicatos son útiles hoy?', en: 'Are unions useful today?' }, help: { es: 'Sí, porque… / No tanto, porque…', en: 'Yes, because… / Not so much, because…' }, follow: [{ es: '¿Estás en uno?', en: 'Are you in one?' }, { es: '¿Cómo son en tu país?', en: 'What are they like in your country?' }] },
            { q: { es: '¿Vivirías en una casa de tu empresa?', en: 'Would you live in a house owned by your company?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Qué ventajas tiene?', en: 'What are the advantages?' }, { es: '¿Y los riesgos?', en: 'And the risks?' }] },
          ],
          words: [{ es: 'quemar', en: 'to burn' }, { es: 'el humo', en: 'smoke' }, { es: 'toser', en: 'to cough' }, { es: 'echar', en: 'to fire' }, { es: 'el testigo', en: 'the witness' }],
        },
        B1: {
          scene: { es: 'La Unión Europea aprobó una ley que prohíbe importar aceite de palma producido en tierras deforestadas después de 2020. Indonesia dice que la ley es injusta y proteccionista: favorece a los aceites europeos, como el de girasol y el de colza, y castiga sobre todo a los pequeños agricultores, que no tienen los papeles ni la tecnología para demostrar de dónde viene su fruta. Hendra ahora tiene su propia parcela pequeña y está en una reunión de pequeños productores con un representante europeo.', en: 'The European Union passed a law banning imports of palm oil produced on land deforested after 2020. Indonesia says the law is unfair and protectionist: it favours European oils, such as sunflower and rapeseed, and hits small farmers hardest, since they don’t have the paperwork or the technology to prove where their fruit comes from. Hendra now has his own small plot and is at a meeting of smallholders with a European representative.' },
          opener: { es: 'Las grandes empresas tienen abogados, satélites y certificados. Yo tengo dos hectáreas, un teléfono viejo y un papel del pueblo que dice que esta tierra es mía. Mi parcela era plantación de palma desde antes que yo naciera, no corté ningún árbol. Pero para vender a Europa tengo que demostrarlo con coordenadas GPS y un sistema que no entiendo. Si no puedo, le vendo a un intermediario que paga menos, y él vende a países que no preguntan nada. Al final, la selva no se salva y el pobre gana menos. ¿Una ley puede ser justa en su objetivo e injusta en sus efectos?', en: 'The big companies have lawyers, satellites and certificates. I have two hectares, an old phone and a paper from the village saying this land is mine. My plot was a palm plantation before I was born, I didn’t cut down a single tree. But to sell to Europe I have to prove it with GPS coordinates and a system I don’t understand. If I can’t, I sell to a middleman who pays less, and he sells to countries that don’t ask any questions. In the end, the jungle isn’t saved and the poor man earns less. Can a law be fair in its aim and unfair in its effects?' },
          decide: {
            ask: { es: '¿Qué pide Hendra al representante europeo?', en: 'What does Hendra ask the European representative?' },
            options: [
              { say: { es: 'Ayuda técnica gratis para los pequeños productores.', en: 'Free technical help for smallholders.' }, then: { es: 'El representante promete un programa piloto en tres provincias. Hendra pregunta cuándo. Nadie sabe.', en: 'The representative promises a pilot programme in three provinces. Hendra asks when. Nobody knows.' } },
              { say: { es: 'Más tiempo antes de aplicar la ley.', en: 'More time before the law applies.' }, then: { es: 'Europa ya retrasó la ley una vez. Los ecologistas protestan: cada año de retraso son más hectáreas perdidas.', en: 'Europe has already delayed the law once. Environmentalists protest: every year of delay means more hectares lost.' } },
              { say: { es: 'Que Europa también controle sus propias importaciones de soja y carne.', en: 'That Europe also checks its own soy and beef imports.' }, then: { es: 'El representante responde que la ley ya incluye la soja y la carne. Hendra no lo sabía; cambia el tono de la reunión.', en: 'The representative replies that the law already includes soy and beef. Hendra didn’t know; it changes the tone of the meeting.' } },
            ],
          },
          twist: { es: 'Al final de la reunión, una joven ecologista indonesia toma la palabra: dice que Hendra tiene razón, pero que la ley europea es la única presión real que funcionó en veinte años. ¿Pueden los dos tener razón?', en: 'At the end of the meeting, a young Indonesian environmentalist speaks up: she says Hendra is right, but that the European law is the only real pressure that has worked in twenty years. Can both be right?' },
          questions: [
            { q: { es: '¿Una ley puede ser justa en su objetivo e injusta en sus efectos?', en: 'Can a law be fair in its aim and unfair in its effects?' }, help: { es: 'Sí, por ejemplo… / Si los efectos…, entonces…', en: 'Yes, for example… / If the effects…, then…' }, follow: [{ es: '¿Un ejemplo en tu país?', en: 'An example in your country?' }, { es: '¿Cómo se corrige?', en: 'How is it fixed?' }] },
            { q: { es: '¿Los países ricos deberían poner reglas a lo que importan?', en: 'Should rich countries set rules on what they import?' }, help: { es: 'Sí, porque… / Solo si también…', en: 'Yes, because… / Only if they also…' }, follow: [{ es: '¿Quién paga el costo?', en: 'Who pays the cost?' }, { es: '¿Y los consumidores?', en: 'And consumers?' }] },
            { q: { es: '¿Quién debería ayudar a los pequeños productores?', en: 'Who should help small producers?' }, help: { es: 'Creo que el gobierno… / Las empresas…', en: 'I think the government… / Companies…' }, follow: [{ es: '¿Cómo?', en: 'How?' }, { es: '¿Hay pequeños productores donde vives?', en: 'Are there small producers where you live?' }] },
            { q: { es: '¿Es más importante proteger la naturaleza o la economía local?', en: 'Is it more important to protect nature or the local economy?' }, help: { es: 'No se puede separar porque… / Primero…', en: 'You can’t separate them because… / First…' }, follow: [{ es: '¿Hay un caso cerca de ti?', en: 'Is there a case near you?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'deforestado', en: 'deforested' }, { es: 'proteccionista', en: 'protectionist' }, { es: 'la parcela', en: 'the plot' }, { es: 'demostrar', en: 'to prove' }, { es: 'el retraso', en: 'the delay' }],
        },
      },
    },
  ],
};
