// Gotemburgo · the Liseberg amusement park, a car factory, the giant cinnamon buns of
// Haga, a city tram and a summer music festival. Five places, four levels each (A0,
// A1, A2, B1). Every level is written on its own: same place and people, different
// situations.
export default {
  id: 'gotemburgo',
  spots: [
    // ------------------------------------------------------------ the amusement park
    {
      id: 'liseberg',
      name: { es: 'El parque de atracciones Liseberg', en: 'Liseberg amusement park' },
      who: { name: 'Oskar', role: { es: 'operador de atracciones', en: 'ride operator' } },
      levels: {
        A0: {
          scene: { es: 'Es un parque de atracciones. Hay una montaña rusa muy alta, luces y música. Oskar trabaja en la montaña rusa.', en: 'It is an amusement park. There is a very tall roller coaster, lights and music. Oskar works on the roller coaster.' },
          opener: { es: '¡Hola! Soy Oskar. Esta montaña rusa es muy rápida. ¿Subes?', en: 'Hello! I am Oskar. This roller coaster is very fast. Are you getting on?' },
          decide: {
            ask: { es: 'Hay tres atracciones. ¿Cuál eliges?', en: 'There are three rides. Which do you choose?' },
            options: [
              { say: { es: 'La montaña rusa.', en: 'The roller coaster.' }, then: { es: 'Oskar dice: «¡Muy bien! Va a noventa kilómetros por hora».', en: 'Oskar says: “Very good! It goes ninety kilometres an hour.”' } },
              { say: { es: 'La noria.', en: 'The Ferris wheel.' }, then: { es: 'Oskar dice: «Es tranquila. Desde arriba ves toda la ciudad».', en: 'Oskar says: “It is calm. From the top you see the whole city.”' } },
              { say: { es: 'Los coches de choque.', en: 'The bumper cars.' }, then: { es: 'Oskar dice: «¡Cuidado! Los niños conducen muy mal».', en: 'Oskar says: “Careful! The kids drive very badly.”' } },
            ],
          },
          twist: { es: 'La montaña rusa para arriba, a cincuenta metros. ¿Qué dices?', en: 'The roller coaster stops at the top, fifty metres up. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los parques de atracciones?', en: 'Do you like amusement parks?' }, help: { es: 'Sí, mucho. / No, me dan miedo.', en: 'Yes, a lot. / No, they scare me.' }, follow: [{ es: '¿Cuál es tu atracción favorita?', en: 'What is your favourite ride?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Te dan miedo las alturas?', en: 'Are you scared of heights?' }, help: { es: 'Sí, un poco. / No, nada.', en: 'Yes, a little. / No, not at all.' }, follow: [{ es: '¿Subes a edificios altos?', en: 'Do you go up tall buildings?' }, { es: '¿Y en avión?', en: 'And on planes?' }] },
            { q: { es: '¿Te gusta la velocidad?', en: 'Do you like speed?' }, help: { es: 'Sí, me encanta. / No, prefiero ir despacio.', en: 'Yes, I love it. / No, I prefer going slowly.' }, follow: [{ es: '¿Conduces?', en: 'Do you drive?' }, { es: '¿Rápido o despacio?', en: 'Fast or slow?' }] },
            { q: { es: '¿Comes algo dulce en las fiestas?', en: 'Do you eat something sweet at fairs?' }, help: { es: 'Sí, algodón de azúcar. / No, nada.', en: 'Yes, candyfloss. / No, nothing.' }, follow: [{ es: '¿Qué más comes?', en: 'What else do you eat?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
          ],
          words: [{ es: 'la montaña rusa', en: 'the roller coaster' }, { es: 'la noria', en: 'the Ferris wheel' }, { es: 'los coches de choque', en: 'bumper cars' }, { es: 'rápido', en: 'fast' }, { es: 'arriba', en: 'up, at the top' }],
        },
        A1: {
          scene: { es: 'Es diciembre y el parque está decorado para Navidad: hay mercadillo, renos, chocolate caliente y cinco millones de luces. Oskar trabaja en la pista de patinaje sobre hielo.', en: 'It is December and the park is decorated for Christmas: there is a market, reindeer, hot chocolate and five million lights. Oskar works at the ice-skating rink.' },
          opener: { es: 'En verano trabajo en la montaña rusa y en invierno en la pista de hielo. Me gusta más el invierno, porque la gente está más tranquila. Muchos turistas no saben patinar y se caen cada dos metros. ¿Tú sabes patinar?', en: 'In summer I work on the roller coaster and in winter at the ice rink. I prefer winter, because people are calmer. Lots of tourists can’t skate and fall over every two metres. Can you skate?' },
          decide: {
            ask: { es: 'Oskar te ofrece unos patines gratis. ¿Qué haces?', en: 'Oskar offers you some free skates. What do you do?' },
            options: [
              { say: { es: 'Los acepto y patino con cuidado.', en: 'I accept and skate carefully.' }, then: { es: 'Te caes tres veces, pero al final das una vuelta entera sola o solo.', en: 'You fall three times, but in the end you go a whole lap on your own.' } },
              { say: { es: 'Le pido a Oskar una clase.', en: 'I ask Oskar for a lesson.' }, then: { es: 'Oskar te enseña a frenar. Dice que tienes talento.', en: 'Oskar teaches you how to stop. He says you have talent.' } },
              { say: { es: 'Prefiero mirar con un chocolate caliente.', en: 'I prefer to watch with a hot chocolate.' }, then: { es: 'Desde fuera ves caerse a mucha gente. Te ríes, pero en secreto.', en: 'From outside you watch lots of people fall. You laugh, but secretly.' } },
            ],
          },
          twist: { es: 'Un niño pequeño se cae y llora. Sus padres no están cerca. ¿Qué haces?', en: 'A small boy falls and cries. His parents aren’t nearby. What do you do?' },
          questions: [
            { q: { es: '¿Qué haces en Navidad?', en: 'What do you do at Christmas?' }, help: { es: 'Normalmente ceno con… / No celebro la Navidad.', en: 'I usually have dinner with… / I don’t celebrate Christmas.' }, follow: [{ es: '¿Hay luces en tu ciudad?', en: 'Are there lights in your city?' }, { es: '¿Qué comes?', en: 'What do you eat?' }] },
            { q: { es: '¿Sabes patinar o esquiar?', en: 'Can you skate or ski?' }, help: { es: 'Sí, sé… / No, nunca he probado.', en: 'Yes, I can… / No, I have never tried.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gustaría aprender?', en: 'Would you like to learn?' }] },
            { q: { es: '¿Prefieres el verano o el invierno?', en: 'Do you prefer summer or winter?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué haces en esa estación?', en: 'What do you do in that season?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Has trabajado en dos sitios diferentes en un año?', en: 'Have you worked in two different places in one year?' }, help: { es: 'Sí, en… y en… / No.', en: 'Yes, in… and in… / No.' }, follow: [{ es: '¿Cuál te gustaba más?', en: 'Which did you like more?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'la pista de hielo', en: 'the ice rink' }, { es: 'patinar', en: 'to skate' }, { es: 'los patines', en: 'skates' }, { es: 'frenar', en: 'to stop, brake' }, { es: 'el mercadillo', en: 'the street market' }],
        },
        A2: {
          scene: { es: 'El parque quiere construir una nueva montaña rusa, la más alta de Escandinavia. Para hacerlo, tiene que cortar parte de un bosque que hay al lado. Los vecinos se oponen. Oskar, que vive en el barrio, trabaja en el parque desde los dieciséis años.', en: 'The park wants to build a new roller coaster, the tallest in Scandinavia. To do it, it has to cut down part of a neighbouring forest. Local residents are against it. Oskar, who lives in the area, has worked at the park since he was sixteen.' },
          opener: { es: 'Mis vecinos me preguntan de qué lado estoy. Yo quiero la nueva montaña rusa, porque traerá trabajo. Pero en ese bosque paseaba con mi abuelo cuando era pequeño. Es raro querer dos cosas que no pueden existir juntas. ¿Te ha pasado algo así?', en: 'My neighbours ask me whose side I’m on. I want the new roller coaster, because it will bring jobs. But I used to walk in that forest with my grandfather as a child. It’s strange to want two things that can’t exist together. Has something like that happened to you?' },
          decide: {
            ask: { es: 'El parque pide a Oskar que hable en la reunión de vecinos. ¿Qué le aconsejas?', en: 'The park asks Oskar to speak at the residents’ meeting. What do you advise him?' },
            options: [
              { say: { es: 'Que hable a favor del parque.', en: 'Speak in favour of the park.' }, then: { es: 'Algunos vecinos lo critican. Otros le dan las gracias por ser sincero.', en: 'Some residents criticise him. Others thank him for being honest.' } },
              { say: { es: 'Que diga que no quiere hablar.', en: 'Say he doesn’t want to speak.' }, then: { es: 'Su jefe no está contento, pero lo respeta.', en: 'His boss isn’t happy, but respects him.' } },
              { say: { es: 'Que proponga construirla en otro lugar del parque.', en: 'Suggest building it somewhere else in the park.' }, then: { es: 'Los ingenieros estudian la idea. Es más cara, pero salva el bosque.', en: 'The engineers study the idea. It’s more expensive, but it saves the forest.' } },
            ],
          },
          twist: { es: 'Alguien publica una foto de Oskar con el uniforme del parque y escribe: «Traidor del barrio». ¿Qué hace Oskar?', en: 'Someone posts a photo of Oskar in the park uniform and writes: “Traitor to the neighbourhood.” What does Oskar do?' },
          questions: [
            { q: { es: '¿Has querido dos cosas que no podías tener a la vez?', en: 'Have you wanted two things you couldn’t have at the same time?' }, help: { es: 'Sí, por ejemplo… / No, normalmente sé lo que quiero.', en: 'Yes, for example… / No, I usually know what I want.' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Hay un bosque o un parque importante para ti?', en: 'Is there a forest or park that is important to you?' }, help: { es: 'Sí, el… porque…', en: 'Yes, the… because…' }, follow: [{ es: '¿Qué hacías allí?', en: 'What did you do there?' }, { es: '¿Sigue igual?', en: 'Is it still the same?' }] },
            { q: { es: '¿Has hablado alguna vez en una reunión de vecinos?', en: 'Have you ever spoken at a residents’ meeting?' }, help: { es: 'Sí, sobre… / No, nunca voy.', en: 'Yes, about… / No, I never go.' }, follow: [{ es: '¿De qué se habla?', en: 'What do people talk about?' }, { es: '¿Sirve para algo?', en: 'Is it any use?' }] },
            { q: { es: '¿Qué es más importante: el trabajo o la naturaleza?', en: 'What is more important: jobs or nature?' }, help: { es: 'Creo que… pero…', en: 'I think… but…' }, follow: [{ es: '¿Se puede tener las dos cosas?', en: 'Can you have both?' }, { es: '¿Cómo?', en: 'How?' }] },
          ],
          words: [{ es: 'oponerse', en: 'to be against' }, { es: 'el bosque', en: 'the forest' }, { es: 'sincero', en: 'honest' }, { es: 'el traidor', en: 'the traitor' }, { es: 'a favor de', en: 'in favour of' }],
        },
        B1: {
          scene: { es: 'Durante una tormenta de verano, la montaña rusa se para con veinte personas arriba. Oskar tiene que decidir rápido si bajarlas por la escalera de emergencia, que es peligrosa con lluvia, o esperar a los bomberos, que tardarán al menos cuarenta minutos.', en: 'During a summer storm, the roller coaster stops with twenty people at the top. Oskar has to decide quickly whether to bring them down the emergency stairs, which are dangerous in the rain, or wait for the fire brigade, who will take at least forty minutes.' },
          opener: { es: 'En los cursos de seguridad todo parece fácil. Pero ahora hay niños llorando a cincuenta metros, padres gritando y un viento muy fuerte. El manual dice que esperemos, pero un padre me pide que los baje ya. La responsabilidad es mía. ¿Qué pesa más: las normas o lo que ves con tus ojos?', en: 'On safety courses everything seems easy. But now there are children crying fifty metres up, parents shouting and a very strong wind. The manual says to wait, but a father is begging me to get them down now. The responsibility is mine. What weighs more: the rules or what you see with your own eyes?' },
          decide: {
            ask: { es: 'Oskar tiene que decidir en dos minutos. ¿Qué debería hacer?', en: 'Oskar has to decide in two minutes. What should he do?' },
            options: [
              { say: { es: 'Seguir el manual y esperar a los bomberos.', en: 'Follow the manual and wait for the fire brigade.' }, then: { es: 'Los bomberos llegan en treinta y cinco minutos. Todos bajan bien, mojados y asustados.', en: 'The firefighters arrive in thirty-five minutes. Everyone gets down safely, wet and scared.' } },
              { say: { es: 'Subir él solo para tranquilizar a la gente mientras esperan.', en: 'Climb up alone to calm people down while they wait.' }, then: { es: 'Su presencia calma a los niños. Su jefe dice que fue un riesgo innecesario.', en: 'His presence calms the children. His boss says it was an unnecessary risk.' } },
              { say: { es: 'Bajar primero a los niños por la escalera, con ayuda.', en: 'Bring the children down the stairs first, with help.' }, then: { es: 'Sale bien, pero un padre resbala y se rompe un brazo. Hay una investigación.', en: 'It goes well, but a father slips and breaks an arm. There is an investigation.' } },
            ],
          },
          twist: { es: 'Al día siguiente, un vídeo del rescate se hace viral. Unos dicen que Oskar es un héroe; otros, que fue un irresponsable. El parque quiere que salga en la televisión. ¿Debería ir?', en: 'The next day, a video of the rescue goes viral. Some say Oskar is a hero; others that he was irresponsible. The park wants him to go on TV. Should he go?' },
          questions: [
            { q: { es: '¿Alguna vez has tenido que decidir algo importante muy rápido?', en: 'Have you ever had to decide something important very quickly?' }, help: { es: 'Sí, una vez… / No, por suerte.', en: 'Yes, once… / No, luckily.' }, follow: [{ es: '¿Qué decidiste?', en: 'What did you decide?' }, { es: '¿Estuvo bien?', en: 'Was it right?' }] },
            { q: { es: '¿Las normas se deben seguir siempre?', en: 'Should rules always be followed?' }, help: { es: 'Casi siempre, pero… / No, a veces hay que…', en: 'Almost always, but… / No, sometimes you have to…' }, follow: [{ es: '¿Cuándo no?', en: 'When not?' }, { es: '¿Quién decide?', en: 'Who decides?' }] },
            { q: { es: '¿Te sientes seguro en las atracciones?', en: 'Do you feel safe on rides?' }, help: { es: 'Sí, porque hay controles. / No del todo.', en: 'Yes, because there are checks. / Not entirely.' }, follow: [{ es: '¿Hay alguna que no subirías nunca?', en: 'Is there one you would never go on?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Qué opinas de los vídeos virales sobre accidentes?', en: 'What do you think about viral videos of accidents?' }, help: { es: 'Me parecen… porque…', en: 'I think they are… because…' }, follow: [{ es: '¿Los compartes?', en: 'Do you share them?' }, { es: '¿Son justos con las personas?', en: 'Are they fair to the people?' }] },
          ],
          words: [{ es: 'la tormenta', en: 'the storm' }, { es: 'los bomberos', en: 'the fire brigade' }, { es: 'el manual', en: 'the manual' }, { es: 'resbalar', en: 'to slip' }, { es: 'irresponsable', en: 'irresponsible' }],
        },
      },
    },
    // ------------------------------------------------------------ the car factory
    {
      id: 'volvo',
      name: { es: 'La fábrica de coches', en: 'The car factory' },
      who: { name: 'Sara', role: { es: 'ingeniera', en: 'engineer' } },
      levels: {
        A0: {
          scene: { es: 'Es una fábrica muy grande. Hay robots y coches nuevos. Sara es ingeniera.', en: 'It is a very big factory. There are robots and new cars. Sara is an engineer.' },
          opener: { es: '¡Hola! Soy Sara. Aquí hacemos coches. Cada día hacemos mil coches. ¿Quieres ver?', en: 'Hello! I am Sara. We make cars here. Every day we make a thousand cars. Do you want to see?' },
          decide: {
            ask: { es: 'Sara te enseña tres cosas. ¿Qué miras primero?', en: 'Sara shows you three things. What do you look at first?' },
            options: [
              { say: { es: 'Los robots.', en: 'The robots.' }, then: { es: 'Sara dice: «Los robots pintan los coches. ¡Muy rápido!»', en: 'Sara says: “The robots paint the cars. Very fast!”' } },
              { say: { es: 'Un coche eléctrico.', en: 'An electric car.' }, then: { es: 'Sara dice: «No hace ruido. ¡Escucha!»', en: 'Sara says: “It makes no noise. Listen!”' } },
              { say: { es: 'Los trabajadores.', en: 'The workers.' }, then: { es: 'Sara dice: «Somos seis mil personas aquí».', en: 'Sara says: “There are six thousand of us here.”' } },
            ],
          },
          twist: { es: 'Sara te da un casco. «Aquí, siempre casco». ¿Qué dices?', en: 'Sara gives you a helmet. “Here, always a helmet.” What do you say?' },
          questions: [
            { q: { es: '¿Tienes coche?', en: 'Do you have a car?' }, help: { es: 'Sí, tengo uno. / No, no tengo.', en: 'Yes, I have one. / No, I don’t.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Es eléctrico?', en: 'Is it electric?' }] },
            { q: { es: '¿Cómo vas al trabajo o a clase?', en: 'How do you get to work or class?' }, help: { es: 'Voy en coche / en autobús / a pie.', en: 'I go by car / by bus / on foot.' }, follow: [{ es: '¿Cuánto tardas?', en: 'How long does it take?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gustan los robots?', en: 'Do you like robots?' }, help: { es: 'Sí, son interesantes. / No, me dan miedo.', en: 'Yes, they are interesting. / No, they scare me.' }, follow: [{ es: '¿Tienes un robot en casa?', en: 'Do you have a robot at home?' }, { es: '¿Para qué?', en: 'What for?' }] },
            { q: { es: '¿Hay fábricas en tu ciudad?', en: 'Are there factories in your city?' }, help: { es: 'Sí, de… / No, no hay.', en: 'Yes, of… / No, there aren’t.' }, follow: [{ es: '¿Qué hacen?', en: 'What do they make?' }, { es: '¿Trabaja mucha gente allí?', en: 'Do many people work there?' }] },
          ],
          words: [{ es: 'la fábrica', en: 'the factory' }, { es: 'el robot', en: 'the robot' }, { es: 'eléctrico', en: 'electric' }, { es: 'el casco', en: 'the helmet' }, { es: 'el ruido', en: 'noise' }],
        },
        A1: {
          scene: { es: 'Sara trabaja en el departamento de seguridad. Hoy hacen pruebas de choque: un coche nuevo choca contra una pared con muñecos dentro. Hay un grupo de estudiantes de ingeniería de visita.', en: 'Sara works in the safety department. Today they are doing crash tests: a new car crashes into a wall with dummies inside. There is a group of engineering students visiting.' },
          opener: { es: 'Mi trabajo es romper coches. Suena divertido, ¿verdad? Cada prueba cuesta mucho dinero, pero salva vidas. Los muñecos tienen sensores en todo el cuerpo. Después de cada choque estudiamos los datos durante días. ¿Tú conduces con cuidado?', en: 'My job is breaking cars. Sounds fun, doesn’t it? Each test costs a lot of money, but it saves lives. The dummies have sensors all over their bodies. After each crash we study the data for days. Do you drive carefully?' },
          decide: {
            ask: { es: 'Sara te deja elegir la prueba de hoy. ¿Cuál eliges?', en: 'Sara lets you choose today’s test. Which do you choose?' },
            options: [
              { say: { es: 'Un choque de frente a cincuenta kilómetros por hora.', en: 'A head-on crash at fifty kilometres an hour.' }, then: { es: 'El coche se rompe por delante, pero los muñecos están bien.', en: 'The front of the car is crushed, but the dummies are fine.' } },
              { say: { es: 'Un choque contra un alce de metal.', en: 'A crash into a metal elk.' }, then: { es: 'Sara dice: «En Suecia es una prueba muy importante. Hay muchos alces».', en: 'Sara says: “In Sweden it’s a very important test. There are lots of elk.”' } },
              { say: { es: 'Un choque lateral, por la puerta.', en: 'A side crash, into the door.' }, then: { es: 'Es la prueba más difícil. Los estudiantes aplauden cuando termina.', en: 'It’s the hardest test. The students applaud when it ends.' } },
            ],
          },
          twist: { es: 'Uno de los muñecos sale volando del coche. Algo ha fallado. Sara está muy seria. ¿Qué le dices?', en: 'One of the dummies flies out of the car. Something has gone wrong. Sara looks very serious. What do you say to her?' },
          questions: [
            { q: { es: '¿Conduces? ¿Desde cuándo?', en: 'Do you drive? Since when?' }, help: { es: 'Sí, desde los… años. / No, no conduzco.', en: 'Yes, since I was… / No, I don’t drive.' }, follow: [{ es: '¿Te gusta conducir?', en: 'Do you like driving?' }, { es: '¿Has tenido un accidente?', en: 'Have you had an accident?' }] },
            { q: { es: '¿Hay animales en las carreteras de tu país?', en: 'Are there animals on the roads in your country?' }, help: { es: 'Sí, vacas / perros… / No, casi nunca.', en: 'Yes, cows / dogs… / No, almost never.' }, follow: [{ es: '¿Es peligroso?', en: 'Is it dangerous?' }, { es: '¿Qué haces si ves uno?', en: 'What do you do if you see one?' }] },
            { q: { es: '¿Te gustaría trabajar con máquinas?', en: 'Would you like to work with machines?' }, help: { es: 'Sí, porque… / No, prefiero trabajar con personas.', en: 'Yes, because… / No, I prefer working with people.' }, follow: [{ es: '¿Qué trabajo te gusta?', en: 'Which job do you like?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Llevas siempre el cinturón en el coche?', en: 'Do you always wear a seat belt in the car?' }, help: { es: 'Sí, siempre. / No, a veces no.', en: 'Yes, always. / No, sometimes not.' }, follow: [{ es: '¿Y detrás?', en: 'And in the back?' }, { es: '¿Es obligatorio en tu país?', en: 'Is it compulsory in your country?' }] },
          ],
          words: [{ es: 'la prueba', en: 'the test' }, { es: 'chocar', en: 'to crash' }, { es: 'el muñeco', en: 'the dummy' }, { es: 'el alce', en: 'the elk / moose' }, { es: 'el cinturón', en: 'the seat belt' }],
        },
        A2: {
          scene: { es: 'Sara es una de las pocas mujeres en su equipo de ingenieros. Hace unos años descubrió que los muñecos de las pruebas tenían el cuerpo de un hombre medio, y por eso los coches eran menos seguros para las mujeres. Ahora su equipo ha creado el primer muñeco con cuerpo de mujer.', en: 'Sara is one of the few women on her engineering team. A few years ago she discovered that the test dummies had the body of an average man, which is why cars were less safe for women. Now her team has created the first dummy with a woman’s body.' },
          opener: { es: 'Durante cincuenta años nadie pensó en esto. No era mala intención: simplemente los ingenieros eran casi todos hombres y probaban los coches con cuerpos como los suyos. Cuando lo dije en una reunión, algunos se rieron. ¿Tú has visto algo que nadie más veía?', en: 'For fifty years nobody thought about this. It wasn’t bad intent: the engineers were simply almost all men and tested cars with bodies like theirs. When I said it in a meeting, some people laughed. Have you ever noticed something nobody else could see?' },
          decide: {
            ask: { es: 'Una revista quiere entrevistar a Sara, pero la empresa prefiere que no hable. ¿Qué le aconsejas?', en: 'A magazine wants to interview Sara, but the company would prefer her not to speak. What do you advise her?' },
            options: [
              { say: { es: 'Que hable. Es importante para todas las mujeres.', en: 'Speak. It’s important for all women.' }, then: { es: 'La entrevista se lee en todo el mundo. La empresa al final está orgullosa.', en: 'The interview is read all over the world. In the end the company is proud.' } },
              { say: { es: 'Que pida permiso a la empresa y prepare la entrevista con ellos.', en: 'Ask the company’s permission and prepare the interview with them.' }, then: { es: 'La entrevista es más corta, pero Sara no tiene problemas en el trabajo.', en: 'The interview is shorter, but Sara has no trouble at work.' } },
              { say: { es: 'Que no hable y publique sus datos en una revista científica.', en: 'Don’t speak, and publish her data in a scientific journal.' }, then: { es: 'Otros ingenieros leen el artículo. Tres empresas cambian sus pruebas.', en: 'Other engineers read the article. Three companies change their tests.' } },
            ],
          },
          twist: { es: 'Un compañero le dice a Sara en voz baja: «Ahora todos piensan que te ascendieron por ser mujer». ¿Qué debería responder ella?', en: 'A colleague quietly tells Sara: “Now everyone thinks you got promoted for being a woman.” How should she respond?' },
          questions: [
            { q: { es: '¿Hay profesiones de hombres y de mujeres en tu país?', en: 'Are there men’s and women’s jobs in your country?' }, help: { es: 'Todavía hay… / Cada vez menos, porque…', en: 'There are still… / Fewer and fewer, because…' }, follow: [{ es: '¿Cuáles?', en: 'Which ones?' }, { es: '¿Está cambiando?', en: 'Is it changing?' }] },
            { q: { es: '¿Has dicho algo en una reunión y nadie te escuchó?', en: 'Have you said something in a meeting and nobody listened?' }, help: { es: 'Sí, una vez… / No, me escuchan.', en: 'Yes, once… / No, they listen to me.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué objeto de uso diario no está bien diseñado para ti?', en: 'Which everyday object is not well designed for you?' }, help: { es: 'Por ejemplo… porque…', en: 'For example… because…' }, follow: [{ es: '¿Cómo lo cambiarías?', en: 'How would you change it?' }, { es: '¿A quién se lo dirías?', en: 'Who would you tell?' }] },
            { q: { es: '¿Te gustaría salir en una revista?', en: 'Would you like to be in a magazine?' }, help: { es: 'Sí, para hablar de… / No, prefiero la vida privada.', en: 'Yes, to talk about… / No, I prefer a private life.' }, follow: [{ es: '¿Qué contarías?', en: 'What would you talk about?' }, { es: '¿Qué foto pondrías?', en: 'What photo would you use?' }] },
          ],
          words: [{ es: 'medio', en: 'average' }, { es: 'la intención', en: 'the intention' }, { es: 'la entrevista', en: 'the interview' }, { es: 'el permiso', en: 'permission' }, { es: 'ascender', en: 'to promote' }],
        },
        B1: {
          scene: { es: 'La empresa anuncia que en diez años la fábrica tendrá el doble de robots y la mitad de trabajadores. Sara forma parte del equipo que diseña esa nueva fábrica. Su hermano trabaja en la línea de montaje desde hace veinte años.', en: 'The company announces that in ten years the factory will have twice as many robots and half as many workers. Sara is part of the team designing that new factory. Her brother has worked on the assembly line for twenty years.' },
          opener: { es: 'Mi trabajo es hacer la fábrica más eficiente. Mi hermano dice que yo estoy diseñando su despido. Tiene razón y no la tiene: si no lo hacemos, otra empresa lo hará y perderemos todos los puestos, no solo la mitad. ¿Es posible defender el progreso cuando le hace daño a tu familia?', en: 'My job is to make the factory more efficient. My brother says I’m designing his dismissal. He’s both right and wrong: if we don’t do it, another company will and we’ll lose all the jobs, not just half. Is it possible to defend progress when it hurts your family?' },
          decide: {
            ask: { es: 'Sara puede proponer algo antes de que se cierre el proyecto. ¿Qué debería proponer?', en: 'Sara can propose something before the project is finalised. What should she propose?' },
            options: [
              { say: { es: 'Formar a los trabajadores para que reparen y programen los robots.', en: 'Train the workers to repair and programme the robots.' }, then: { es: 'La empresa acepta formar a la mitad. Su hermano está entre los primeros.', en: 'The company agrees to train half of them. Her brother is among the first.' } },
              { say: { es: 'Reducir las horas de todos en lugar de despedir a nadie.', en: 'Cut everyone’s hours instead of firing anyone.' }, then: { es: 'Los sindicatos la apoyan. La dirección dice que es demasiado caro.', en: 'The unions support her. Management says it’s too expensive.' } },
              { say: { es: 'No proponer nada y dejar el proyecto.', en: 'Propose nothing and leave the project.' }, then: { es: 'Otro ingeniero ocupa su lugar. El plan sigue igual.', en: 'Another engineer takes her place. The plan stays the same.' } },
            ],
          },
          twist: { es: 'Su hermano le pide que le diga en secreto si su puesto va a desaparecer. Sara lo sabe, pero es información confidencial. ¿Qué debería hacer?', en: 'Her brother asks her to tell him secretly whether his job is going to disappear. Sara knows, but it’s confidential information. What should she do?' },
          questions: [
            { q: { es: '¿Los robots van a quitar muchos trabajos?', en: 'Will robots take away many jobs?' }, help: { es: 'Creo que sí, sobre todo… / No, crearán otros…', en: 'I think so, especially… / No, they will create others…' }, follow: [{ es: '¿Tu trabajo está en peligro?', en: 'Is your job at risk?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
            { q: { es: '¿Contarías un secreto de tu trabajo a un familiar?', en: 'Would you tell a work secret to a relative?' }, help: { es: 'Depende del secreto. / Nunca, porque…', en: 'It depends on the secret. / Never, because…' }, follow: [{ es: '¿Y si le afectara directamente?', en: 'And if it affected them directly?' }, { es: '¿Has estado en esa situación?', en: 'Have you been in that situation?' }] },
            { q: { es: '¿Quién debería pagar la formación de los trabajadores?', en: 'Who should pay for workers’ training?' }, help: { es: 'La empresa, porque… / El Estado, porque…', en: 'The company, because… / The state, because…' }, follow: [{ es: '¿Has hecho algún curso de tu trabajo?', en: 'Have you taken a course for work?' }, { es: '¿Te sirvió?', en: 'Was it useful?' }] },
            { q: { es: '¿Trabajar menos horas sería bueno para todos?', en: 'Would working fewer hours be good for everyone?' }, help: { es: 'Sí, porque… / No, porque se ganaría menos.', en: 'Yes, because… / No, because people would earn less.' }, follow: [{ es: '¿Cuántas horas trabajas ahora?', en: 'How many hours do you work now?' }, { es: '¿Qué harías con más tiempo?', en: 'What would you do with more time?' }] },
          ],
          words: [{ es: 'la línea de montaje', en: 'the assembly line' }, { es: 'eficiente', en: 'efficient' }, { es: 'el despido', en: 'the dismissal' }, { es: 'el sindicato', en: 'the trade union' }, { es: 'confidencial', en: 'confidential' }],
        },
      },
    },
    // ------------------------------------------------------------ the Haga bakery
    {
      id: 'haga',
      name: { es: 'La panadería de Haga', en: 'The bakery in Haga' },
      who: { name: 'Maja', role: { es: 'panadera', en: 'baker' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle antigua con casas de madera. Hay una panadería con bollos de canela enormes. Maja es la panadera.', en: 'It is an old street with wooden houses. There is a bakery with huge cinnamon buns. Maja is the baker.' },
          opener: { es: '¡Hola! Soy Maja. Mis bollos de canela son gigantes. ¡Mira! ¿Quieres uno?', en: 'Hello! I am Maja. My cinnamon buns are giant. Look! Do you want one?' },
          decide: {
            ask: { es: 'Maja tiene tres bollos. ¿Cuál quieres?', en: 'Maja has three buns. Which do you want?' },
            options: [
              { say: { es: 'El bollo gigante de canela.', en: 'The giant cinnamon bun.' }, then: { es: 'Maja dice: «¡Es para cuatro personas!»', en: 'Maja says: “It is for four people!”' } },
              { say: { es: 'Un bollo de cardamomo.', en: 'A cardamom bun.' }, then: { es: 'Maja dice: «Es muy sueco. ¡Me encanta!»', en: 'Maja says: “It is very Swedish. I love it!”' } },
              { say: { es: 'Un bollo pequeño, por favor.', en: 'A small bun, please.' }, then: { es: 'Maja dice: «¿Pequeño? Aquí no hay nada pequeño».', en: 'Maja says: “Small? Nothing here is small.”' } },
            ],
          },
          twist: { es: 'El bollo es muy grande. No puedes comerlo todo. ¿Qué dices?', en: 'The bun is very big. You can’t eat it all. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el pan dulce?', en: 'Do you like sweet bread?' }, help: { es: 'Sí, mucho. / No, prefiero el pan normal.', en: 'Yes, a lot. / No, I prefer normal bread.' }, follow: [{ es: '¿Cuál?', en: 'Which?' }, { es: '¿Cuándo lo comes?', en: 'When do you eat it?' }] },
            { q: { es: '¿Hay una panadería cerca de tu casa?', en: 'Is there a bakery near your home?' }, help: { es: 'Sí, hay una. / No, no hay.', en: 'Yes, there is one. / No, there isn’t.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Es buena?', en: 'Is it good?' }] },
            { q: { es: '¿Cocinas pan o pasteles?', en: 'Do you bake bread or cakes?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué haces?', en: 'What do you make?' }, { es: '¿Para quién?', en: 'For whom?' }] },
            { q: { es: '¿Tu casa es nueva o antigua?', en: 'Is your home new or old?' }, help: { es: 'Es nueva. / Es antigua.', en: 'It is new. / It is old.' }, follow: [{ es: '¿Es de madera?', en: 'Is it made of wood?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
          ],
          words: [{ es: 'la panadería', en: 'the bakery' }, { es: 'el bollo', en: 'the bun' }, { es: 'gigante', en: 'giant' }, { es: 'el cardamomo', en: 'cardamom' }, { es: 'la madera', en: 'wood' }],
        },
        A1: {
          scene: { es: 'Son las cuatro de la mañana. La calle está vacía y nieva. Maja ya está en la panadería preparando la masa. A las siete abre la tienda y siempre hay fila de gente con frío.', en: 'It is four in the morning. The street is empty and it’s snowing. Maja is already in the bakery preparing the dough. At seven she opens the shop and there is always a queue of cold people.' },
          opener: { es: 'Me levanto a las tres y media todos los días, menos los domingos. Mis amigos piensan que estoy loca. Pero me encanta el silencio de la mañana y el olor del pan. Cuando abro, ya he trabajado tres horas. ¿Tú eres de mañana o de noche?', en: 'I get up at half past three every day except Sundays. My friends think I’m crazy. But I love the morning silence and the smell of bread. When I open, I’ve already worked three hours. Are you a morning person or a night person?' },
          decide: {
            ask: { es: 'Maja te invita a ayudar una mañana. ¿Qué haces?', en: 'Maja invites you to help one morning. What do you do?' },
            options: [
              { say: { es: 'Hago la masa con ella.', en: 'I make the dough with her.' }, then: { es: 'Tienes harina hasta en el pelo. Maja dice que tus bollos son «interesantes».', en: 'You have flour even in your hair. Maja says your buns are “interesting”.' } },
              { say: { es: 'Atiendo a los clientes a las siete.', en: 'I serve the customers at seven.' }, then: { es: 'Los clientes te sonríen. Un señor te regala un bollo de su propia bolsa.', en: 'The customers smile at you. A man gives you a bun from his own bag.' } },
              { say: { es: 'Limpio la tienda y preparo el café.', en: 'I clean the shop and make the coffee.' }, then: { es: 'Maja dice que nunca ha tomado un café tan bueno a las cinco de la mañana.', en: 'Maja says she has never had such a good coffee at five in the morning.' } },
            ],
          },
          twist: { es: 'Se va la luz y el horno se apaga. Faltan dos horas para abrir. ¿Qué haces?', en: 'The power goes off and the oven stops. There are two hours until opening. What do you do?' },
          questions: [
            { q: { es: '¿Eres de mañana o de noche?', en: 'Are you a morning or a night person?' }, help: { es: 'Soy de mañana / de noche, porque…', en: 'I’m a morning / night person, because…' }, follow: [{ es: '¿A qué hora te levantas?', en: 'What time do you get up?' }, { es: '¿Y a qué hora te acuestas?', en: 'And what time do you go to bed?' }] },
            { q: { es: '¿Qué olor te gusta mucho?', en: 'Which smell do you really like?' }, help: { es: 'Me gusta el olor de…', en: 'I like the smell of…' }, follow: [{ es: '¿Te recuerda algo?', en: 'Does it remind you of something?' }, { es: '¿Y qué olor no te gusta?', en: 'And which smell don’t you like?' }] },
            { q: { es: '¿Qué desayunas normalmente?', en: 'What do you usually have for breakfast?' }, help: { es: 'Desayuno…', en: 'I have… for breakfast.' }, follow: [{ es: '¿Y los fines de semana?', en: 'And at weekends?' }, { es: '¿Desayunas en casa?', en: 'Do you have breakfast at home?' }] },
            { q: { es: '¿Trabajarías muy temprano todos los días?', en: 'Would you work very early every day?' }, help: { es: 'Sí, no me importa. / No, imposible.', en: 'Yes, I don’t mind. / No, impossible.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué horario prefieres?', en: 'Which schedule do you prefer?' }] },
          ],
          words: [{ es: 'la masa', en: 'the dough' }, { es: 'la harina', en: 'flour' }, { es: 'el horno', en: 'the oven' }, { es: 'el olor', en: 'the smell' }, { es: 'nevar', en: 'to snow' }],
        },
        A2: {
          scene: { es: 'Una cadena de cafeterías quiere comprar la receta de los bollos gigantes de Maja para venderlos en todo el país. Le ofrecen mucho dinero. La receta es de su abuela, que abrió la panadería en 1962.', en: 'A café chain wants to buy the recipe for Maja’s giant buns to sell them all over the country. They are offering her a lot of money. The recipe belonged to her grandmother, who opened the bakery in 1962.' },
          opener: { es: 'Mi abuela hacía los bollos gigantes para los trabajadores del puerto, que tenían mucha hambre y poco dinero. Ahora los turistas hacen cola para hacerse fotos con ellos. Si vendo la receta, podré pagar todas mis deudas. Pero ya no serán de aquí. ¿Tú qué harías?', en: 'My grandmother made the giant buns for the dock workers, who were very hungry and had little money. Now tourists queue up to take photos with them. If I sell the recipe, I can pay off all my debts. But they won’t be from here anymore. What would you do?' },
          decide: {
            ask: { es: 'Maja tiene que contestar esta semana. ¿Qué le aconsejas?', en: 'Maja has to answer this week. What do you advise her?' },
            options: [
              { say: { es: 'Que venda la receta y use el dinero para mejorar la panadería.', en: 'Sell the recipe and use the money to improve the bakery.' }, then: { es: 'Los bollos de la cadena no son igual de buenos. La gente sigue viniendo a Haga.', en: 'The chain’s buns aren’t as good. People keep coming to Haga.' } },
              { say: { es: 'Que no la venda nunca.', en: 'Never sell it.' }, then: { es: 'Maja sigue con sus deudas, pero duerme tranquila.', en: 'Maja still has her debts, but sleeps peacefully.' } },
              { say: { es: 'Que pida una parte de cada bollo vendido.', en: 'Ask for a share of every bun sold.' }, then: { es: 'La cadena acepta. Cada mes, Maja recibe un dinero que no esperaba.', en: 'The chain agrees. Every month, Maja receives money she didn’t expect.' } },
            ],
          },
          twist: { es: 'La tía de Maja dice que la receta también es suya, porque la abuela era su madre. Quiere la mitad del dinero. ¿Qué hace Maja?', en: 'Maja’s aunt says the recipe is hers too, because the grandmother was her mother. She wants half the money. What does Maja do?' },
          questions: [
            { q: { es: '¿Venderías algo de tu familia por mucho dinero?', en: 'Would you sell something from your family for a lot of money?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Qué cosa no venderías nunca?', en: 'What would you never sell?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Hay una comida típica de tu ciudad que se vende en todo el país?', en: 'Is there a typical food from your city sold all over the country?' }, help: { es: 'Sí, el / la… / No, que yo sepa.', en: 'Yes, the… / Not that I know of.' }, follow: [{ es: '¿Es igual de buena fuera?', en: 'Is it as good elsewhere?' }, { es: '¿Dónde se come mejor?', en: 'Where is it best?' }] },
            { q: { es: '¿Tu familia ha discutido por dinero alguna vez?', en: 'Has your family ever argued about money?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Cómo se resolvió?', en: 'How was it resolved?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Haces cola para comprar algo famoso?', en: 'Do you queue to buy something famous?' }, help: { es: 'Sí, una vez hice cola para… / No, nunca.', en: 'Yes, once I queued for… / No, never.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Valió la pena?', en: 'Was it worth it?' }] },
          ],
          words: [{ es: 'la cadena', en: 'the chain (of shops)' }, { es: 'la receta', en: 'the recipe' }, { es: 'la deuda', en: 'the debt' }, { es: 'hacer cola', en: 'to queue' }, { es: 'el puerto', en: 'the harbour, docks' }],
        },
        B1: {
          scene: { es: 'Haga se ha puesto de moda. Los alquileres de las tiendas se han triplicado y las tiendas de siempre cierran una tras otra para dejar paso a marcas de ropa y cafeterías de diseño. El dueño del local de Maja le anuncia que va a doblar el alquiler.', en: 'Haga has become trendy. Shop rents have tripled and long-standing shops are closing one after another to make way for fashion brands and designer cafés. The owner of Maja’s premises tells her he is going to double the rent.' },
          opener: { es: 'Mis clientes de siempre son jubilados y estudiantes. No puedo vender un bollo al doble de precio. Lo irónico es que el barrio está de moda en parte por mi panadería: sale en todas las guías turísticas. Ahora ese éxito me echa. ¿Es inevitable que un barrio bonito acabe siendo solo para turistas?', en: 'My regular customers are pensioners and students. I can’t sell a bun at double the price. The irony is that the neighbourhood is trendy partly because of my bakery: it’s in every guidebook. Now that success is pushing me out. Is it inevitable that a pretty neighbourhood ends up only for tourists?' },
          decide: {
            ask: { es: 'Maja tiene tres opciones. ¿Cuál debería elegir?', en: 'Maja has three options. Which should she choose?' },
            options: [
              { say: { es: 'Mudarse a un barrio más barato y llevarse a sus clientes.', en: 'Move to a cheaper neighbourhood and take her customers with her.' }, then: { es: 'Algunos clientes la siguen. Los turistas tardan un año en encontrarla.', en: 'Some customers follow her. Tourists take a year to find her.' } },
              { say: { es: 'Subir los precios y vender sobre todo a turistas.', en: 'Raise prices and sell mostly to tourists.' }, then: { es: 'Gana más dinero, pero ya no reconoce a sus clientes.', en: 'She earns more money, but no longer recognises her customers.' } },
              { say: { es: 'Organizar a las tiendas del barrio para pedir alquileres limitados.', en: 'Organise local shops to demand capped rents.' }, then: { es: 'Veinte tiendas se unen. El ayuntamiento promete estudiar una ley.', en: 'Twenty shops join. The council promises to look into a law.' } },
            ],
          },
          twist: { es: 'Una marca de lujo le ofrece pagar todo el alquiler si pone su logo en las bolsas de la panadería. ¿Debería aceptar?', en: 'A luxury brand offers to pay all her rent if she puts its logo on the bakery bags. Should she accept?' },
          questions: [
            { q: { es: '¿Hay un barrio en tu ciudad que ha cambiado por el turismo?', en: 'Is there a neighbourhood in your city that tourism has changed?' }, help: { es: 'Sí, el barrio de… antes era… y ahora…', en: 'Yes, the… area used to be… and now…' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Vas todavía?', en: 'Do you still go?' }] },
            { q: { es: '¿Los gobiernos deberían limitar los alquileres?', en: 'Should governments cap rents?' }, help: { es: 'Sí, porque… / No, porque el mercado…', en: 'Yes, because… / No, because the market…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Aceptarías publicidad en tu negocio para sobrevivir?', en: 'Would you accept advertising in your business to survive?' }, help: { es: 'Sí, si la marca… / No, porque perdería…', en: 'Yes, if the brand… / No, because I would lose…' }, follow: [{ es: '¿Qué marca nunca aceptarías?', en: 'Which brand would you never accept?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Puede el éxito ser un problema?', en: 'Can success be a problem?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'de moda', en: 'trendy' }, { es: 'triplicarse', en: 'to triple' }, { es: 'el local', en: 'the premises' }, { es: 'echar', en: 'to push out, kick out' }, { es: 'inevitable', en: 'inevitable' }],
        },
      },
    },
    // ------------------------------------------------------------ the tram
    {
      id: 'tranvia',
      name: { es: 'El tranvía de Gotemburgo', en: 'The Gothenburg tram' },
      who: { name: 'Ahmed', role: { es: 'conductor de tranvía', en: 'tram driver' } },
      levels: {
        A0: {
          scene: { es: 'Es un tranvía azul y blanco. Va por el centro de la ciudad. Ahmed es el conductor.', en: 'It is a blue and white tram. It goes through the city centre. Ahmed is the driver.' },
          opener: { es: '¡Hola! Soy Ahmed. Este tranvía va al puerto. ¿Adónde vas?', en: 'Hello! I am Ahmed. This tram goes to the harbour. Where are you going?' },
          decide: {
            ask: { es: 'Hay tres paradas. ¿Dónde bajas?', en: 'There are three stops. Where do you get off?' },
            options: [
              { say: { es: 'En el puerto.', en: 'At the harbour.' }, then: { es: 'Ahmed dice: «Es la última parada. ¡Hay barcos grandes!»', en: 'Ahmed says: “It is the last stop. There are big ships!”' } },
              { say: { es: 'En el parque de atracciones.', en: 'At the amusement park.' }, then: { es: 'Ahmed dice: «Son tres paradas. ¡Que te diviertas!»', en: 'Ahmed says: “It is three stops. Have fun!”' } },
              { say: { es: 'En el centro.', en: 'In the centre.' }, then: { es: 'Ahmed dice: «La próxima parada. ¡Prepárate!»', en: 'Ahmed says: “The next stop. Get ready!”' } },
            ],
          },
          twist: { es: 'No tienes billete. Ahmed dice: «Aquí se paga con el móvil». ¿Qué dices?', en: 'You don’t have a ticket. Ahmed says: “Here you pay with your phone.” What do you say?' },
          questions: [
            { q: { es: '¿Hay tranvía en tu ciudad?', en: 'Is there a tram in your city?' }, help: { es: 'Sí, hay. / No, no hay.', en: 'Yes, there is. / No, there isn’t.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Lo usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Usas el transporte público?', en: 'Do you use public transport?' }, help: { es: 'Sí, el autobús. / No, uso el coche.', en: 'Yes, the bus. / No, I use the car.' }, follow: [{ es: '¿Cuánto cuesta?', en: 'How much does it cost?' }, { es: '¿Es rápido?', en: 'Is it fast?' }] },
            { q: { es: '¿Cómo pagas el billete?', en: 'How do you pay for your ticket?' }, help: { es: 'Con el móvil / con tarjeta / con dinero.', en: 'With my phone / with a card / with cash.' }, follow: [{ es: '¿Es fácil?', en: 'Is it easy?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Te gusta el centro de tu ciudad?', en: 'Do you like your city centre?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué hay?', en: 'What is there?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
          ],
          words: [{ es: 'el tranvía', en: 'the tram' }, { es: 'el conductor', en: 'the driver' }, { es: 'la parada', en: 'the stop' }, { es: 'bajar', en: 'to get off' }, { es: 'el billete', en: 'the ticket' }],
        },
        A1: {
          scene: { es: 'Es lunes por la mañana y el tranvía va lleno. Hay estudiantes, trabajadores con prisa y una señora con un perro muy grande. Ahmed conduce el tranvía desde hace ocho años. Antes era profesor de matemáticas en Siria.', en: 'It is Monday morning and the tram is full. There are students, workers in a hurry and a lady with a very big dog. Ahmed has been driving the tram for eight years. Before, he was a maths teacher in Syria.' },
          opener: { es: 'Cuando llegué a Suecia no hablaba sueco. Estudié el idioma dos años y luego hice el curso de conductor. Me gusta este trabajo: veo toda la ciudad y conozco a mucha gente. Algunos pasajeros me saludan cada mañana. ¿Tú hablas con desconocidos en el transporte?', en: 'When I arrived in Sweden I didn’t speak Swedish. I studied the language for two years and then did the driver’s course. I like this job: I see the whole city and meet a lot of people. Some passengers greet me every morning. Do you talk to strangers on public transport?' },
          decide: {
            ask: { es: 'El perro grande de la señora se sienta en un asiento. Un pasajero se queja. ¿Qué haces?', en: 'The lady’s big dog sits on a seat. A passenger complains. What do you do?' },
            options: [
              { say: { es: 'Le pido a la señora que baje al perro del asiento.', en: 'I ask the lady to get the dog off the seat.' }, then: { es: 'La señora se disculpa. El perro se tumba en el suelo y se duerme.', en: 'The lady apologises. The dog lies down on the floor and falls asleep.' } },
              { say: { es: 'Le ofrezco mi asiento al pasajero que se queja.', en: 'I offer my seat to the passenger who is complaining.' }, then: { es: 'El pasajero se sorprende y deja de quejarse.', en: 'The passenger is surprised and stops complaining.' } },
              { say: { es: 'No digo nada. No es mi problema.', en: 'I say nothing. It’s not my problem.' }, then: { es: 'La discusión sube de tono. Ahmed tiene que parar el tranvía.', en: 'The argument gets heated. Ahmed has to stop the tram.' } },
            ],
          },
          twist: { es: 'Una turista se ha equivocado de tranvía y está muy nerviosa: tiene un tren en veinte minutos. ¿Qué haces?', en: 'A tourist has taken the wrong tram and is very nervous: she has a train in twenty minutes. What do you do?' },
          questions: [
            { q: { es: '¿Hablas con desconocidos en el autobús o el metro?', en: 'Do you talk to strangers on the bus or metro?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿De qué hablas?', en: 'What do you talk about?' }, { es: '¿Es normal en tu país?', en: 'Is it normal in your country?' }] },
            { q: { es: '¿Has trabajado en algo muy diferente a tu profesión?', en: 'Have you worked in something very different from your profession?' }, help: { es: 'Sí, trabajé de… / No, siempre en lo mismo.', en: 'Yes, I worked as… / No, always the same thing.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Cuánto tiempo tardas en aprender algo nuevo?', en: 'How long does it take you to learn something new?' }, help: { es: 'Depende, pero normalmente…', en: 'It depends, but usually…' }, follow: [{ es: '¿Qué has aprendido este año?', en: 'What have you learned this year?' }, { es: '¿Qué quieres aprender?', en: 'What do you want to learn?' }] },
            { q: { es: '¿Te has equivocado de autobús o de tren?', en: 'Have you ever taken the wrong bus or train?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Dónde acabaste?', en: 'Where did you end up?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'el pasajero', en: 'the passenger' }, { es: 'el desconocido', en: 'the stranger' }, { es: 'quejarse', en: 'to complain' }, { es: 'el asiento', en: 'the seat' }, { es: 'equivocarse', en: 'to get something wrong' }],
        },
        A2: {
          scene: { es: 'Ahmed ha tenido un problema con un pasajero borracho que le ha insultado por ser extranjero. No es la primera vez. Sus compañeros le dicen que lo denuncie, pero Ahmed piensa que no servirá para nada. Hoy tiene una reunión con su jefa.', en: 'Ahmed has had trouble with a drunk passenger who insulted him for being a foreigner. It’s not the first time. His colleagues tell him to report it, but Ahmed thinks it won’t do any good. Today he has a meeting with his boss.' },
          opener: { es: 'Llevo ocho años aquí. Pago impuestos, hablo sueco, mis hijos han nacido en Gotemburgo. Y aún así, una vez al mes alguien me dice que me vaya a mi país. Casi todos los pasajeros son amables, pero esa persona de cada mes pesa más que las otras mil. ¿Por qué recordamos más lo malo?', en: 'I’ve been here eight years. I pay taxes, I speak Swedish, my children were born in Gothenburg. And still, once a month someone tells me to go back to my country. Almost all passengers are kind, but that one person a month weighs more than the other thousand. Why do we remember the bad things more?' },
          decide: {
            ask: { es: 'La jefa le pregunta a Ahmed qué quiere hacer. ¿Qué le aconsejas?', en: 'His boss asks Ahmed what he wants to do. What do you advise him?' },
            options: [
              { say: { es: 'Que lo denuncie, aunque crea que no sirve.', en: 'Report it, even if he thinks it won’t help.' }, then: { es: 'La policía identifica al pasajero gracias a las cámaras. Le ponen una multa.', en: 'The police identify the passenger thanks to the cameras. He gets a fine.' } },
              { say: { es: 'Que pida un curso para los conductores sobre cómo actuar.', en: 'Ask for a course for drivers on how to handle it.' }, then: { es: 'La empresa organiza el curso. Ahmed es uno de los profesores.', en: 'The company organises the course. Ahmed is one of the teachers.' } },
              { say: { es: 'Que hable con sus compañeros y se apoyen entre ellos.', en: 'Talk to his colleagues so they support each other.' }, then: { es: 'Crean un grupo de mensajes. Ahora nadie se siente solo después de un mal día.', en: 'They create a message group. Now nobody feels alone after a bad day.' } },
            ],
          },
          twist: { es: 'Una semana después, el mismo pasajero sube al tranvía de Ahmed. Esta vez está sobrio y parece avergonzado. ¿Qué hace Ahmed?', en: 'A week later, the same passenger gets on Ahmed’s tram. This time he is sober and looks embarrassed. What does Ahmed do?' },
          questions: [
            { q: { es: '¿Por qué crees que recordamos más lo malo?', en: 'Why do you think we remember bad things more?' }, help: { es: 'Creo que porque…', en: 'I think it’s because…' }, follow: [{ es: '¿Te pasa a ti?', en: 'Does it happen to you?' }, { es: '¿Cómo lo evitas?', en: 'How do you avoid it?' }] },
            { q: { es: '¿Has visto alguna vez a alguien insultar a otra persona en la calle?', en: 'Have you ever seen someone insult another person in the street?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Qué harías ahora?', en: 'What would you do now?' }] },
            { q: { es: '¿Conoces a alguien que ha empezado de cero en otro país?', en: 'Do you know someone who started from scratch in another country?' }, help: { es: 'Sí, mi… se fue a… y…', en: 'Yes, my… went to… and…' }, follow: [{ es: '¿Qué fue lo más difícil?', en: 'What was the hardest part?' }, { es: '¿Está contento ahora?', en: 'Are they happy now?' }] },
            { q: { es: '¿Denunciarías algo aunque pienses que no va a servir?', en: 'Would you report something even if you think it won’t help?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Lo has hecho?', en: 'Have you done it?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'borracho', en: 'drunk' }, { es: 'insultar', en: 'to insult' }, { es: 'denunciar', en: 'to report (to the police)' }, { es: 'sobrio', en: 'sober' }, { es: 'apoyarse', en: 'to support each other' }],
        },
        B1: {
          scene: { es: 'Gotemburgo quiere probar tranvías sin conductor dentro de cinco años. La empresa pide a Ahmed que forme parte del equipo de pruebas, porque es uno de los conductores con más experiencia. Si el proyecto sale bien, su trabajo podría desaparecer.', en: 'Gothenburg wants to test driverless trams within five years. The company asks Ahmed to join the test team, because he’s one of the most experienced drivers. If the project succeeds, his job could disappear.' },
          opener: { es: 'Me piden que enseñe a una máquina a hacer mi trabajo. Lo curioso es que la máquina no saludará a la señora del perro ni ayudará al turista perdido. Un conductor no solo conduce: también cuida. Pero quizá sea más seguro, y eso también importa. ¿Qué perdemos cuando una máquina sustituye a una persona?', en: 'They’re asking me to teach a machine to do my job. The funny thing is that the machine won’t greet the lady with the dog or help the lost tourist. A driver doesn’t just drive: he also looks after people. But maybe it’ll be safer, and that matters too. What do we lose when a machine replaces a person?' },
          decide: {
            ask: { es: 'Ahmed tiene que contestar a la empresa. ¿Qué debería hacer?', en: 'Ahmed has to answer the company. What should he do?' },
            options: [
              { say: { es: 'Aceptar, para que el sistema tenga en cuenta lo que hace un conductor de verdad.', en: 'Accept, so the system takes into account what a real driver does.' }, then: { es: 'Ahmed consigue que cada tranvía lleve un «asistente» humano a bordo.', en: 'Ahmed manages to get a human “assistant” on board every tram.' } },
              { say: { es: 'Rechazar la oferta y seguir conduciendo.', en: 'Turn down the offer and keep driving.' }, then: { es: 'Otro conductor acepta. Ahmed sigue en su ruta, pero piensa en el futuro.', en: 'Another driver accepts. Ahmed stays on his route, but thinks about the future.' } },
              { say: { es: 'Aceptar y empezar a estudiar programación por la noche.', en: 'Accept and start studying programming at night.' }, then: { es: 'Dos años después, Ahmed trabaja en el centro de control de los tranvías.', en: 'Two years later, Ahmed works in the tram control centre.' } },
            ],
          },
          twist: { es: 'En la primera prueba, el tranvía sin conductor frena de golpe por una bolsa de plástico y un pasajero se hace daño. Los periodistas preguntan a Ahmed su opinión. ¿Qué debería decir?', en: 'In the first test, the driverless tram brakes sharply because of a plastic bag and a passenger gets hurt. Journalists ask Ahmed for his opinion. What should he say?' },
          questions: [
            { q: { es: '¿Subirías a un tranvía o un coche sin conductor?', en: 'Would you ride in a tram or car without a driver?' }, help: { es: 'Sí, porque… / No, porque no confío en…', en: 'Yes, because… / No, because I don’t trust…' }, follow: [{ es: '¿Y tus padres?', en: 'And your parents?' }, { es: '¿Qué tendría que pasar para que confiaras?', en: 'What would have to happen for you to trust it?' }] },
            { q: { es: '¿Qué trabajos no podrá hacer nunca una máquina?', en: 'Which jobs will a machine never be able to do?' }, help: { es: 'Creo que… porque necesitan…', en: 'I think… because they need…' }, follow: [{ es: '¿Y el tuyo?', en: 'And yours?' }, { es: '¿Estás seguro?', en: 'Are you sure?' }] },
            { q: { es: '¿Ayudarías a crear algo que podría quitarte el trabajo?', en: 'Would you help create something that could take your job?' }, help: { es: 'Sí, si… / No, nunca, porque…', en: 'Yes, if… / No, never, because…' }, follow: [{ es: '¿Qué pedirías a cambio?', en: 'What would you ask for in return?' }, { es: '¿Conoces casos?', en: 'Do you know any cases?' }] },
            { q: { es: '¿Es más importante la seguridad o el contacto humano?', en: 'Is safety or human contact more important?' }, help: { es: 'Para mí… porque…', en: 'For me… because…' }, follow: [{ es: '¿En qué situaciones?', en: 'In which situations?' }, { es: '¿Se pueden tener los dos?', en: 'Can you have both?' }] },
          ],
          words: [{ es: 'sin conductor', en: 'driverless' }, { es: 'sustituir', en: 'to replace' }, { es: 'cuidar', en: 'to look after' }, { es: 'frenar de golpe', en: 'to brake sharply' }, { es: 'a bordo', en: 'on board' }],
        },
      },
    },
    // ------------------------------------------------------------ the music festival
    {
      id: 'festival',
      name: { es: 'El festival de música', en: 'The music festival' },
      who: { name: 'Alex', role: { es: 'técnica de sonido', en: 'sound engineer' } },
      levels: {
        A0: {
          scene: { es: 'Es un festival en un parque grande. Hay tres escenarios, mucha gente y mucha música. Alex trabaja en el sonido.', en: 'It is a festival in a big park. There are three stages, lots of people and lots of music. Alex works on the sound.' },
          opener: { es: '¡Hola! Soy Alex. Trabajo con el sonido. ¿Qué música te gusta?', en: 'Hello! I am Alex. I work with the sound. What music do you like?' },
          decide: {
            ask: { es: 'Hay tres conciertos. ¿Cuál quieres ver?', en: 'There are three concerts. Which do you want to see?' },
            options: [
              { say: { es: 'El concierto de pop.', en: 'The pop concert.' }, then: { es: 'Alex dice: «Es una cantante sueca muy famosa».', en: 'Alex says: “She is a very famous Swedish singer.”' } },
              { say: { es: 'El concierto de rock.', en: 'The rock concert.' }, then: { es: 'Alex dice: «¡Es muy fuerte! Toma estos tapones».', en: 'Alex says: “It is very loud! Take these earplugs.”' } },
              { say: { es: 'El concierto de música electrónica.', en: 'The electronic music concert.' }, then: { es: 'Alex dice: «Empieza a las doce de la noche».', en: 'Alex says: “It starts at midnight.”' } },
            ],
          },
          twist: { es: 'Empieza a llover mucho. La gente corre. ¿Qué dices?', en: 'It starts raining heavily. People run. What do you say?' },
          questions: [
            { q: { es: '¿Qué música te gusta?', en: 'What music do you like?' }, help: { es: 'Me gusta el pop / el rock / la salsa…', en: 'I like pop / rock / salsa…' }, follow: [{ es: '¿Qué cantante?', en: 'Which singer?' }, { es: '¿Cuándo escuchas música?', en: 'When do you listen to music?' }] },
            { q: { es: '¿Vas a conciertos?', en: 'Do you go to concerts?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Son caros?', en: 'Are they expensive?' }] },
            { q: { es: '¿Tocas un instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco la guitarra. / No.', en: 'Yes, I play the guitar. / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Te gusta la lluvia?', en: 'Do you like the rain?' }, help: { es: 'Sí, me gusta. / No, nada.', en: 'Yes, I like it. / No, not at all.' }, follow: [{ es: '¿Qué haces cuando llueve?', en: 'What do you do when it rains?' }, { es: '¿Llueve mucho en tu ciudad?', en: 'Does it rain a lot in your city?' }] },
          ],
          words: [{ es: 'el festival', en: 'the festival' }, { es: 'el escenario', en: 'the stage' }, { es: 'la cantante', en: 'the singer' }, { es: 'los tapones', en: 'earplugs' }, { es: 'fuerte', en: 'loud' }],
        },
        A1: {
          scene: { es: 'Es el primer día del festival. Faltan dos horas para el primer concierto y Alex prueba los micrófonos y los altavoces. Hay cuarenta mil entradas vendidas. Todo el festival es vegetariano: no venden carne en ningún puesto.', en: 'It is the first day of the festival. There are two hours until the first concert and Alex is testing the microphones and speakers. Forty thousand tickets have been sold. The whole festival is vegetarian: no stall sells meat.' },
          opener: { es: 'Mi trabajo empieza tres días antes del festival y termina dos días después. Durante los conciertos casi no veo a los artistas: miro pantallas y botones. Pero cuando el público canta todo junto, se me pone la piel de gallina. ¿Cuál es el mejor concierto de tu vida?', en: 'My work starts three days before the festival and ends two days after. During the concerts I hardly see the artists: I look at screens and buttons. But when the crowd sings together, I get goosebumps. What is the best concert of your life?' },
          decide: {
            ask: { es: 'Un micrófono no funciona y el cantante sale en diez minutos. Alex te pide ayuda. ¿Qué haces?', en: 'A microphone isn’t working and the singer goes on in ten minutes. Alex asks you for help. What do you do?' },
            options: [
              { say: { es: 'Corro a buscar otro micrófono al camión.', en: 'I run to get another microphone from the truck.' }, then: { es: 'Llegas con treinta segundos de margen. Alex te abraza.', en: 'You arrive with thirty seconds to spare. Alex hugs you.' } },
              { say: { es: 'Reviso los cables con Alex.', en: 'I check the cables with Alex.' }, then: { es: 'Encuentras un cable suelto. El micrófono funciona perfectamente.', en: 'You find a loose cable. The microphone works perfectly.' } },
              { say: { es: 'Voy a hablar con el cantante para ganar tiempo.', en: 'I go and talk to the singer to buy time.' }, then: { es: 'El cantante es muy simpático y te invita a ver el concierto desde el escenario.', en: 'The singer is very friendly and invites you to watch the concert from the stage.' } },
            ],
          },
          twist: { es: 'Un fan consigue subir al escenario durante el concierto. Los de seguridad no lo ven. ¿Qué haces?', en: 'A fan manages to get on stage during the concert. Security doesn’t see him. What do you do?' },
          questions: [
            { q: { es: '¿Cuál es el mejor concierto de tu vida?', en: 'What is the best concert of your life?' }, help: { es: 'El concierto de… en…', en: 'The… concert in…' }, follow: [{ es: '¿Con quién fuiste?', en: 'Who did you go with?' }, { es: '¿Qué canción recuerdas?', en: 'Which song do you remember?' }] },
            { q: { es: '¿Comerías solo comida vegetariana durante tres días?', en: 'Would you eat only vegetarian food for three days?' }, help: { es: 'Sí, sin problema. / Me costaría.', en: 'Yes, no problem. / It would be hard.' }, follow: [{ es: '¿Qué comerías?', en: 'What would you eat?' }, { es: '¿Eres vegetariano?', en: 'Are you vegetarian?' }] },
            { q: { es: '¿Te gustaría trabajar en un festival?', en: 'Would you like to work at a festival?' }, help: { es: 'Sí, de… / No, prefiero ir de público.', en: 'Yes, as a… / No, I prefer going as a fan.' }, follow: [{ es: '¿En qué trabajo?', en: 'In which job?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Qué te pone la piel de gallina?', en: 'What gives you goosebumps?' }, help: { es: 'Me pone la piel de gallina…', en: '… gives me goosebumps.' }, follow: [{ es: '¿Cuándo te pasó la última vez?', en: 'When did it last happen?' }, { es: '¿Con qué canción?', en: 'With which song?' }] },
          ],
          words: [{ es: 'el micrófono', en: 'the microphone' }, { es: 'el altavoz', en: 'the speaker' }, { es: 'la entrada', en: 'the ticket' }, { es: 'el cable', en: 'the cable' }, { es: 'la piel de gallina', en: 'goosebumps' }],
        },
        A2: {
          scene: { es: 'Alex lleva quince años trabajando en festivales y ha empezado a oír un pitido constante en un oído. El médico le dice que si sigue con el mismo ritmo, puede perder parte de la audición. La música es toda su vida.', en: 'Alex has been working at festivals for fifteen years and has started to hear a constant ringing in one ear. The doctor tells her that if she keeps up the same pace, she may lose part of her hearing. Music is her whole life.' },
          opener: { es: 'Cuando empecé, nadie usaba tapones. Era cosa de «débiles». Ahora entiendo que el oído no se recupera. Si dejo esto, no sé hacer otra cosa. Si sigo, quizá un día no pueda oír la música que tanto quiero. ¿Tú cuidas tu salud cuando haces lo que te gusta?', en: 'When I started, nobody wore earplugs. That was for “wimps”. Now I understand that hearing doesn’t recover. If I give this up, I don’t know how to do anything else. If I carry on, maybe one day I won’t be able to hear the music I love so much. Do you look after your health when doing what you love?' },
          decide: {
            ask: { es: 'Alex tiene que decidir antes de la próxima temporada. ¿Qué le aconsejas?', en: 'Alex has to decide before next season. What do you advise her?' },
            options: [
              { say: { es: 'Que trabaje solo en conciertos pequeños y con protección.', en: 'Work only at small concerts, with protection.' }, then: { es: 'Gana menos dinero, pero el pitido no empeora.', en: 'She earns less money, but the ringing doesn’t get worse.' } },
              { say: { es: 'Que se dedique a enseñar en una escuela de sonido.', en: 'Teach at a sound engineering school.' }, then: { es: 'Sus alumnos la adoran. Lo primero que les enseña es a cuidarse los oídos.', en: 'Her students adore her. The first thing she teaches them is to look after their ears.' } },
              { say: { es: 'Que siga igual un año más y luego decida.', en: 'Carry on as before for one more year and then decide.' }, then: { es: 'Al final del año, el médico le dice que ha perdido un diez por ciento. Alex lo deja.', en: 'At the end of the year, the doctor says she has lost ten percent. Alex quits.' } },
            ],
          },
          twist: { es: 'Un artista muy famoso pide a Alex que haga el sonido de su gira mundial. Es el sueño de su vida. ¿Qué hace?', en: 'A very famous artist asks Alex to do the sound for their world tour. It’s her lifelong dream. What does she do?' },
          questions: [
            { q: { es: '¿Usas tapones en los conciertos?', en: 'Do you wear earplugs at concerts?' }, help: { es: 'Sí, siempre. / No, nunca, porque…', en: 'Yes, always. / No, never, because…' }, follow: [{ es: '¿Escuchas música muy alta con auriculares?', en: 'Do you listen to very loud music on headphones?' }, { es: '¿Cuántas horas al día?', en: 'How many hours a day?' }] },
            { q: { es: '¿Has dejado algo que te gustaba por tu salud?', en: 'Have you given up something you liked for your health?' }, help: { es: 'Sí, dejé de… / No, todavía no.', en: 'Yes, I stopped… / No, not yet.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Lo echas de menos?', en: 'Do you miss it?' }] },
            { q: { es: '¿Qué harías si no pudieras hacer tu trabajo?', en: 'What would you do if you couldn’t do your job?' }, help: { es: 'Creo que trabajaría de…', en: 'I think I would work as…' }, follow: [{ es: '¿Necesitarías estudiar?', en: 'Would you need to study?' }, { es: '¿Te gustaría?', en: 'Would you like it?' }] },
            { q: { es: '¿Cuál es el sueño de tu vida?', en: 'What is your lifelong dream?' }, help: { es: 'Mi sueño es…', en: 'My dream is…' }, follow: [{ es: '¿Qué te falta para cumplirlo?', en: 'What do you need to achieve it?' }, { es: '¿Lo vas a intentar?', en: 'Are you going to try?' }] },
          ],
          words: [{ es: 'el pitido', en: 'the ringing, beep' }, { es: 'la audición', en: 'hearing' }, { es: 'recuperarse', en: 'to recover' }, { es: 'la gira', en: 'the tour' }, { es: 'empeorar', en: 'to get worse' }],
        },
        B1: {
          scene: { es: 'El festival quiere ser el más sostenible de Europa: sin carne, sin plásticos y con energía solar. Pero el artista principal de este año viaja en avión privado y exige una lista de lujos enorme. Los organizadores piden a Alex, que conoce bien al artista, que hable con él.', en: 'The festival wants to be the most sustainable in Europe: no meat, no plastic and solar power. But this year’s headliner travels by private jet and demands a huge list of luxuries. The organisers ask Alex, who knows the artist well, to talk to him.' },
          opener: { es: 'Es incómodo. Le pedimos al público que venga en bici y que recicle cada vaso, y la estrella llega en avión privado. Pero sin él vendemos la mitad de entradas, y sin entradas no hay festival sostenible ni de ningún tipo. ¿Se puede ser coherente en un mundo así?', en: 'It’s awkward. We ask the audience to come by bike and recycle every cup, and the star arrives by private jet. But without him we sell half as many tickets, and without tickets there’s no sustainable festival or any festival at all. Can you be consistent in a world like this?' },
          decide: {
            ask: { es: 'Alex habla con el artista. ¿Qué debería pedirle?', en: 'Alex talks to the artist. What should she ask him?' },
            options: [
              { say: { es: 'Que viaje en tren, como gesto público.', en: 'To travel by train, as a public gesture.' }, then: { es: 'El artista acepta y lo publica en sus redes. El viaje en tren se hace famoso.', en: 'The artist agrees and posts it on social media. The train journey becomes famous.' } },
              { say: { es: 'Que pague una compensación por la contaminación de su avión.', en: 'To pay compensation for his jet’s pollution.' }, then: { es: 'Paga, pero los periodistas dicen que es «comprar una conciencia limpia».', en: 'He pays, but journalists say it’s “buying a clean conscience”.' } },
              { say: { es: 'Nada: el festival debería elegir a otro artista el año que viene.', en: 'Nothing: the festival should pick another artist next year.' }, then: { es: 'Este año todo sigue igual. El año siguiente, el cartel solo tiene artistas que viajan en tren.', en: 'This year nothing changes. The following year, the line-up only has artists who travel by train.' } },
            ],
          },
          twist: { es: 'Un periodista descubre la lista de lujos del artista y la publica: incluye fresas importadas en avión desde otro continente. El festival es criticado por hipócrita. ¿Qué debería hacer Alex?', en: 'A journalist discovers the artist’s list of luxuries and publishes it: it includes strawberries flown in from another continent. The festival is criticised as hypocritical. What should Alex do?' },
          questions: [
            { q: { es: '¿Los famosos deberían dar ejemplo?', en: 'Should celebrities set an example?' }, help: { es: 'Sí, porque mucha gente… / No, cada uno…', en: 'Yes, because many people… / No, everyone…' }, follow: [{ es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
            { q: { es: '¿Eres coherente con lo que piensas sobre el medio ambiente?', en: 'Are you consistent with what you think about the environment?' }, help: { es: 'En parte. Por ejemplo… pero…', en: 'Partly. For example… but…' }, follow: [{ es: '¿Qué te cuesta más?', en: 'What do you find hardest?' }, { es: '¿Qué podrías cambiar?', en: 'What could you change?' }] },
            { q: { es: '¿Pagar una compensación sirve de algo?', en: 'Does paying compensation achieve anything?' }, help: { es: 'Sí, si el dinero… / No, porque…', en: 'Yes, if the money… / No, because…' }, follow: [{ es: '¿Lo has hecho alguna vez?', en: 'Have you ever done it?' }, { es: '¿Lo harías?', en: 'Would you?' }] },
            { q: { es: '¿Irías a un festival en el que no se vende carne ni plástico?', en: 'Would you go to a festival that sells no meat or plastic?' }, help: { es: 'Sí, me parece… / Me daría igual, porque…', en: 'Yes, I think it’s… / I wouldn’t care, because…' }, follow: [{ es: '¿Qué echarías de menos?', en: 'What would you miss?' }, { es: '¿Qué te gustaría encontrar?', en: 'What would you like to find?' }] },
          ],
          words: [{ es: 'sostenible', en: 'sustainable' }, { es: 'exigir', en: 'to demand' }, { es: 'coherente', en: 'consistent' }, { es: 'la compensación', en: 'compensation' }, { es: 'el cartel', en: 'the line-up' }],
        },
      },
    },
  ],
};
