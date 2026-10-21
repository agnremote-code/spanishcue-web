// Gales · the rugby stadium in Cardiff, the Snowdon mountain railway, a Welsh-language
// school, a sheep farm and the village with the longest name. Five places, four levels
// each (A0, A1, A2, B1). Every level is written on its own: same place and people,
// different situations.
export default {
  id: 'gales',
  spots: [
    // ------------------------------------------------------------ the rugby stadium
    {
      id: 'rugby',
      name: { es: 'El estadio de rugby de Cardiff', en: 'The Cardiff rugby stadium' },
      who: { name: 'Rhys', role: { es: 'jugador de rugby', en: 'rugby player' } },
      levels: {
        A0: {
          scene: { es: 'Es un estadio enorme en Cardiff, la capital de Gales. La gente lleva camisetas rojas. Hay un dragón rojo en las banderas. Rhys juega al rugby.', en: 'It is a huge stadium in Cardiff, the capital of Wales. People wear red shirts. There is a red dragon on the flags. Rhys plays rugby.' },
          opener: { es: '¡Hola! Soy Rhys. Juego al rugby. Hoy hay partido. ¡Gales contra Inglaterra! ¿Vienes?', en: 'Hello! I am Rhys. I play rugby. Today there is a match. Wales against England! Are you coming?' },
          decide: {
            ask: { es: 'Rhys te da tres cosas. ¿Qué eliges?', en: 'Rhys gives you three things. What do you choose?' },
            options: [
              { say: { es: 'Una camiseta roja.', en: 'A red shirt.' }, then: { es: 'Rhys dice: «¡Ahora eres galés!»', en: 'Rhys says: “Now you are Welsh!”' } },
              { say: { es: 'Un sombrero con un dragón.', en: 'A hat with a dragon.' }, then: { es: 'Rhys se ríe: «¡Qué bonito!»', en: 'Rhys laughs: “How lovely!”' } },
              { say: { es: 'Una bandera.', en: 'A flag.' }, then: { es: 'Rhys dice: «¡Muévela mucho!»', en: 'Rhys says: “Wave it a lot!”' } },
            ],
          },
          twist: { es: 'Antes del partido, todo el estadio canta. ¡Setenta mil personas! Es en galés. ¿Qué haces?', en: 'Before the match, the whole stadium sings. Seventy thousand people! It is in Welsh. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta el deporte?', en: 'Do you like sport?' }, help: { es: 'Sí, mucho. / No, no mucho.', en: 'Yes, a lot. / No, not much.' }, follow: [{ es: '¿Qué deporte?', en: 'Which sport?' }, { es: '¿Lo ves o lo haces?', en: 'Do you watch it or play it?' }] },
            { q: { es: '¿Has ido a un estadio?', en: 'Have you been to a stadium?' }, help: { es: 'Sí, una vez. / No, nunca.', en: 'Yes, once. / No, never.' }, follow: [{ es: '¿Qué viste?', en: 'What did you see?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cuál es el color de tu país?', en: 'What is your country’s colour?' }, help: { es: 'Es el… / Son el… y el…', en: 'It’s… / They are… and…' }, follow: [{ es: '¿Tienes una camiseta?', en: 'Do you have a shirt?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gustan los dragones?', en: 'Do you like dragons?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Y en las películas?', en: 'And in films?' }, { es: '¿Qué animal te gusta?', en: 'Which animal do you like?' }] },
          ],
          words: [{ es: 'el estadio', en: 'the stadium' }, { es: 'el partido', en: 'the match' }, { es: 'la bandera', en: 'the flag' }, { es: 'el dragón', en: 'the dragon' }, { es: 'la camiseta', en: 'the shirt' }],
        },
        A1: {
          scene: { es: 'Es un domingo por la mañana en un pueblo de Gales. Rhys entrena a un equipo de niños de diez años. Llueve mucho y el campo está lleno de barro. Los niños están felices. Los padres, no tanto.', en: 'It is a Sunday morning in a Welsh village. Rhys coaches a team of ten-year-olds. It is pouring with rain and the pitch is full of mud. The children are happy. The parents, not so much.' },
          opener: { es: 'En Gales el rugby es casi una religión. Cada pueblo tiene su equipo. Yo empecé a jugar a los seis años, aquí mismo, en este barro. Los domingos ayudo a los pequeños. Aquí no importa ganar: importa el respeto. ¿Tú hacías deporte de niño?', en: 'In Wales rugby is almost a religion. Every village has its team. I started playing at six, right here, in this mud. On Sundays I help the little ones. Here winning doesn’t matter: respect does. Did you do sport as a child?' },
          decide: {
            ask: { es: 'Rhys te pide ayuda con el entrenamiento. ¿Qué haces?', en: 'Rhys asks you to help with the training. What do you do?' },
            options: [
              { say: { es: 'Juego con los niños.', en: 'I play with the children.' }, then: { es: 'Terminas lleno de barro. Los niños se ríen de ti, y tú también.', en: 'You end up covered in mud. The children laugh at you, and so do you.' } },
              { say: { es: 'Preparo té caliente para los padres.', en: 'I make hot tea for the parents.' }, then: { es: 'Los padres te dan las gracias. Una madre te cuenta la historia del club.', en: 'The parents thank you. A mother tells you the history of the club.' } },
              { say: { es: 'Hago fotos para la página del club.', en: 'I take photos for the club’s page.' }, then: { es: 'Una foto de un niño que salta en el barro es la favorita de todos.', en: 'A photo of a boy jumping in the mud is everyone’s favourite.' } },
            ],
          },
          twist: { es: 'Una niña se cae y llora. Dice que no quiere jugar más porque los chicos son más grandes. ¿Qué le dices?', en: 'A girl falls over and cries. She says she doesn’t want to play any more because the boys are bigger. What do you tell her?' },
          questions: [
            { q: { es: '¿Qué deporte hacías de niño?', en: 'What sport did you do as a child?' }, help: { es: 'Hacía… / No hacía deporte.', en: 'I did… / I didn’t do sport.' }, follow: [{ es: '¿Eras bueno?', en: 'Were you good?' }, { es: '¿Sigues haciéndolo?', en: 'Do you still do it?' }] },
            { q: { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }, help: { es: 'Sí, me relaja. / No, me pone triste.', en: 'Yes, it relaxes me. / No, it makes me sad.' }, follow: [{ es: '¿Qué haces cuando llueve?', en: 'What do you do when it rains?' }, { es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }] },
            { q: { es: '¿Hay un deporte muy importante en tu país?', en: 'Is there a very important sport in your country?' }, help: { es: 'Sí, el… / No, hay muchos.', en: 'Yes,… / No, there are lots.' }, follow: [{ es: '¿Por qué es tan popular?', en: 'Why is it so popular?' }, { es: '¿Lo juegan las chicas?', en: 'Do girls play it?' }] },
            { q: { es: '¿Te gusta ganar?', en: 'Do you like winning?' }, help: { es: 'Sí, mucho. / Me da igual.', en: 'Yes, a lot. / I don’t mind.' }, follow: [{ es: '¿Y perder?', en: 'And losing?' }, { es: '¿Eres competitivo?', en: 'Are you competitive?' }] },
          ],
          words: [{ es: 'el barro', en: 'mud' }, { es: 'entrenar', en: 'to coach / train' }, { es: 'el campo', en: 'the pitch' }, { es: 'caerse', en: 'to fall over' }, { es: 'el respeto', en: 'respect' }],
        },
        A2: {
          scene: { es: 'Rhys juega en la selección de Gales desde hace seis años. Hace dos semanas tuvo un golpe fuerte en la cabeza durante un partido. El médico dice que debería descansar dos meses, pero dentro de tres semanas es la final y el entrenador lo necesita.', en: 'Rhys has played for the Welsh national team for six years. Two weeks ago he took a hard blow to the head during a match. The doctor says he should rest for two months, but in three weeks it’s the final and the coach needs him.' },
          opener: { es: 'Me siento bien, de verdad. A veces me duele la cabeza y olvido cosas pequeñas, pero nada más. Llevo toda la vida soñando con esta final. Mi padre jugó en el mismo equipo y nunca ganó una. Mi mujer dice que estoy loco. ¿Tú has hecho algo arriesgado por un sueño?', en: 'I feel fine, honestly. Sometimes my head hurts and I forget little things, but nothing more. I’ve dreamed of this final all my life. My father played for the same team and never won one. My wife says I’m mad. Have you ever done something risky for a dream?' },
          decide: {
            ask: { es: 'Rhys tiene que decidir hoy si juega la final. ¿Qué le aconsejas?', en: 'Rhys has to decide today whether to play the final. What do you advise him?' },
            options: [
              { say: { es: 'Que no juegue. La salud es lo primero.', en: 'Don’t play. Health comes first.' }, then: { es: 'Gales gana sin él. Rhys lo celebra con el equipo desde el banquillo.', en: 'Wales win without him. Rhys celebrates with the team from the bench.' } },
              { say: { es: 'Que pida otra opinión médica.', en: 'Get a second medical opinion.' }, then: { es: 'El segundo médico dice lo mismo, pero le permite jugar diez minutos al final.', en: 'The second doctor says the same, but lets him play the last ten minutes.' } },
              { say: { es: 'Que juegue, si de verdad se encuentra bien.', en: 'Play, if he really feels fine.' }, then: { es: 'Rhys juega muy bien. Pero esa noche tiene un dolor de cabeza terrible.', en: 'Rhys plays very well. But that night he has a terrible headache.' } },
            ],
          },
          twist: { es: 'El hijo de Rhys, de ocho años, le pregunta: «Papá, ¿por qué no te acuerdas de mi cumpleaños?». ¿Qué debería responder Rhys?', en: 'Rhys’s eight-year-old son asks him: “Dad, why don’t you remember my birthday?” What should Rhys answer?' },
          questions: [
            { q: { es: '¿Has hecho algo arriesgado por algo importante para ti?', en: 'Have you done something risky for something important to you?' }, help: { es: 'Sí, cuando… / No, soy muy prudente.', en: 'Yes, when… / No, I’m very careful.' }, follow: [{ es: '¿Salió bien?', en: 'Did it go well?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Vas al médico cuando te duele algo?', en: 'Do you go to the doctor when something hurts?' }, help: { es: 'Sí, enseguida. / No, espero a ver si pasa.', en: 'Yes, straight away. / No, I wait to see if it goes away.' }, follow: [{ es: '¿Haces caso al médico?', en: 'Do you listen to the doctor?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Has hecho algo para cumplir el sueño de tus padres?', en: 'Have you done something to fulfil your parents’ dream?' }, help: { es: 'Sí, estudié… porque… / No, siempre he decidido yo.', en: 'Yes, I studied… because… / No, I’ve always decided.' }, follow: [{ es: '¿Fue buena idea?', en: 'Was it a good idea?' }, { es: '¿Estaban contentos?', en: 'Were they happy?' }] },
            { q: { es: '¿El deporte profesional es peligroso?', en: 'Is professional sport dangerous?' }, help: { es: 'Sí, sobre todo el… / No tanto, si…', en: 'Yes, especially… / Not that much, if…' }, follow: [{ es: '¿Dejarías a tu hijo jugar al rugby?', en: 'Would you let your child play rugby?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'la selección', en: 'the national team' }, { es: 'el golpe', en: 'the blow' }, { es: 'arriesgado', en: 'risky' }, { es: 'el banquillo', en: 'the bench' }, { es: 'olvidar', en: 'to forget' }],
        },
        B1: {
          scene: { es: 'Un estudio científico muestra que muchos exjugadores de rugby sufren problemas de memoria y demencia antes de los cincuenta años, por los golpes en la cabeza. Algunos proponen cambiar las reglas para reducir el contacto. Rhys, ahora retirado, tiene que hablar en una conferencia sobre el futuro del rugby.', en: 'A scientific study shows that many former rugby players suffer memory problems and dementia before fifty, because of blows to the head. Some propose changing the rules to reduce contact. Rhys, now retired, has to speak at a conference about the future of rugby.' },
          opener: { es: 'El rugby me lo ha dado todo: amigos, una profesión, el orgullo de mi pueblo. Pero ahora, con cuarenta años, a veces no recuerdo dónde he aparcado el coche. Si quitamos el contacto, ¿sigue siendo rugby? Y si no lo quitamos, ¿con qué derecho llevamos a nuestros hijos a jugar?', en: 'Rugby has given me everything: friends, a career, my village’s pride. But now, at forty, sometimes I can’t remember where I parked the car. If we take away the contact, is it still rugby? And if we don’t, what right do we have to take our children to play?' },
          decide: {
            ask: { es: 'En la conferencia, Rhys tiene que proponer una medida. ¿Cuál debería defender?', en: 'At the conference, Rhys has to propose a measure. Which should he defend?' },
            options: [
              { say: { es: 'Prohibir el contacto hasta los dieciséis años.', en: 'Ban contact until age sixteen.' }, then: { es: 'Muchos clubes protestan, pero las madres de los niños lo apoyan en masa.', en: 'Many clubs protest, but the children’s mothers back it en masse.' } },
              { say: { es: 'Mantener las reglas, pero con controles médicos obligatorios.', en: 'Keep the rules, but with compulsory medical checks.' }, then: { es: 'Los controles detectan problemas en varios jugadores jóvenes que no sabían nada.', en: 'The checks detect problems in several young players who knew nothing about it.' } },
              { say: { es: 'Crear un fondo para ayudar a los exjugadores enfermos.', en: 'Create a fund to help former players who are ill.' }, then: { es: 'Los jugadores actuales donan parte de su sueldo. Rhys se emociona al anunciarlo.', en: 'Current players donate part of their salary. Rhys is moved when he announces it.' } },
            ],
          },
          twist: { es: 'Después de la conferencia, un excompañero de equipo, muy enfadado, le dice a Rhys que está «matando el rugby galés» y que es un traidor. ¿Cómo debería responder?', en: 'After the conference, a former teammate, very angry, tells Rhys he is “killing Welsh rugby” and that he’s a traitor. How should he respond?' },
          questions: [
            { q: { es: '¿Debería cambiar un deporte tradicional si es peligroso?', en: 'Should a traditional sport change if it’s dangerous?' }, help: { es: 'Sí, aunque pierda… / No, porque los jugadores eligen…', en: 'Yes, even if it loses… / No, because players choose…' }, follow: [{ es: '¿Y el boxeo?', en: 'And boxing?' }, { es: '¿Y los toros?', en: 'And bullfighting?' }] },
            { q: { es: '¿Has criticado algo que amas?', en: 'Have you criticised something you love?' }, help: { es: 'Sí, por ejemplo… / Me cuesta, porque…', en: 'Yes, for example… / I find it hard, because…' }, follow: [{ es: '¿Cómo reaccionaron los demás?', en: 'How did others react?' }, { es: '¿Cambió algo?', en: 'Did anything change?' }] },
            { q: { es: '¿Los adultos deben poder elegir riesgos para su propio cuerpo?', en: 'Should adults be able to choose risks for their own bodies?' }, help: { es: 'Sí, siempre que… / No del todo, porque…', en: 'Yes, as long as… / Not completely, because…' }, follow: [{ es: '¿Y si el sistema de salud lo paga?', en: 'And if the health system pays for it?' }, { es: '¿Dónde pondrías el límite?', en: 'Where would you draw the line?' }] },
            { q: { es: '¿Ser leal es apoyar siempre al grupo?', en: 'Is being loyal always supporting the group?' }, help: { es: 'No, a veces ser leal es… / Sí, porque…', en: 'No, sometimes being loyal means… / Yes, because…' }, follow: [{ es: '¿Te han llamado traidor?', en: 'Have you been called a traitor?' }, { es: '¿Has sentido presión de grupo?', en: 'Have you felt group pressure?' }] },
          ],
          words: [{ es: 'la demencia', en: 'dementia' }, { es: 'retirado', en: 'retired' }, { es: 'el contacto', en: 'contact' }, { es: 'el traidor', en: 'the traitor' }, { es: 'el excompañero', en: 'the former teammate' }],
        },
      },
    },
    // ------------------------------------------------------------ Snowdon
    {
      id: 'snowdon',
      name: { es: 'El tren de la montaña Snowdon', en: 'The Snowdon mountain railway' },
      who: { name: 'Gwen', role: { es: 'maquinista del tren', en: 'train driver' } },
      levels: {
        A0: {
          scene: { es: 'Es un tren pequeño y viejo. Sube a la montaña más alta de Gales: Snowdon. Hay ovejas en las rocas. Gwen conduce el tren.', en: 'It is a small, old train. It climbs the highest mountain in Wales: Snowdon. There are sheep on the rocks. Gwen drives the train.' },
          opener: { es: '¡Hola! Soy Gwen. Conduzco este tren. Tiene más de cien años. Subimos una hora. ¿Estás listo?', en: 'Hello! I am Gwen. I drive this train. It is more than a hundred years old. We go up for an hour. Are you ready?' },
          decide: {
            ask: { es: '¿Dónde te sientas?', en: 'Where do you sit?' },
            options: [
              { say: { es: 'Delante, con Gwen.', en: 'At the front, with Gwen.' }, then: { es: 'Gwen dice: «Mira las montañas. ¡Qué bonito!»', en: 'Gwen says: “Look at the mountains. How pretty!”' } },
              { say: { es: 'Al lado de la ventana.', en: 'Next to the window.' }, then: { es: 'Ves un lago azul y muchas ovejas.', en: 'You see a blue lake and lots of sheep.' } },
              { say: { es: 'Atrás, con los niños.', en: 'At the back, with the children.' }, then: { es: 'Los niños cantan una canción en galés.', en: 'The children sing a song in Welsh.' } },
            ],
          },
          twist: { es: 'Arriba hay mucha niebla. ¡No ves nada! Gwen dice: «Es normal en Gales». ¿Qué dices?', en: 'At the top there is lots of fog. You can’t see anything! Gwen says: “It is normal in Wales.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los trenes?', en: 'Do you like trains?' }, help: { es: 'Sí, mucho. / No, prefiero el coche.', en: 'Yes, a lot. / No, I prefer the car.' }, follow: [{ es: '¿Viajas en tren?', en: 'Do you travel by train?' }, { es: '¿Adónde?', en: 'Where to?' }] },
            { q: { es: '¿Dónde te sientas en el autobús?', en: 'Where do you sit on the bus?' }, help: { es: 'Delante. / Atrás. / En la ventana.', en: 'At the front. / At the back. / By the window.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Miras por la ventana?', en: 'Do you look out of the window?' }] },
            { q: { es: '¿Hay montañas en tu país?', en: 'Are there mountains in your country?' }, help: { es: 'Sí, muchas. / No, es plano.', en: 'Yes, many. / No, it’s flat.' }, follow: [{ es: '¿Vas a la montaña?', en: 'Do you go to the mountains?' }, { es: '¿Hay nieve?', en: 'Is there snow?' }] },
            { q: { es: '¿Sabes conducir?', en: 'Can you drive?' }, help: { es: 'Sí, sé conducir. / No, no sé.', en: 'Yes, I can. / No, I can’t.' }, follow: [{ es: '¿Tienes coche?', en: 'Do you have a car?' }, { es: '¿Te gusta conducir?', en: 'Do you like driving?' }] },
          ],
          words: [{ es: 'el tren', en: 'the train' }, { es: 'conducir', en: 'to drive' }, { es: 'subir', en: 'to go up' }, { es: 'la oveja', en: 'the sheep' }, { es: 'la ventana', en: 'the window' }],
        },
        A1: {
          scene: { es: 'Es verano. En la cima de Snowdon hay una cafetería y una fila larga de turistas. Muchos han subido en tren y otros a pie, durante cinco horas. Gwen descansa veinte minutos antes de bajar.', en: 'It is summer. At the top of Snowdon there is a café and a long queue of tourists. Many have come up by train and others on foot, for five hours. Gwen rests for twenty minutes before going down.' },
          opener: { es: 'Mi abuelo también conducía este tren. En galés, la montaña se llama «Yr Wyddfa». Muchos galeses prefieren ese nombre. Yo hablo galés en casa y en el trabajo hablo inglés con los turistas. ¿Tú hablas idiomas diferentes en casa y en el trabajo?', en: 'My grandfather also drove this train. In Welsh, the mountain is called “Yr Wyddfa”. Many Welsh people prefer that name. I speak Welsh at home and at work I speak English with the tourists. Do you speak different languages at home and at work?' },
          decide: {
            ask: { es: 'Tienes veinte minutos en la cima. ¿Qué haces?', en: 'You have twenty minutes at the top. What do you do?' },
            options: [
              { say: { es: 'Tomo un chocolate caliente en la cafetería.', en: 'I have a hot chocolate in the café.' }, then: { es: 'Es el café más alto de Gales. Mandas una foto a tu familia.', en: 'It’s the highest café in Wales. You send a photo to your family.' } },
              { say: { es: 'Hablo con los que han subido a pie.', en: 'I talk to the people who walked up.' }, then: { es: 'Una pareja de setenta años te cuenta que suben todos los años desde 1980.', en: 'A couple in their seventies tell you they have climbed it every year since 1980.' } },
              { say: { es: 'Le pido a Gwen que me enseñe palabras en galés.', en: 'I ask Gwen to teach me some Welsh words.' }, then: { es: 'Aprendes «diolch», que significa «gracias». Lo dices mal, pero Gwen está contenta.', en: 'You learn “diolch”, which means “thank you”. You say it badly, but Gwen is happy.' } },
            ],
          },
          twist: { es: 'Un chico que ha subido a pie está muy cansado y no puede bajar. El tren está lleno. ¿Qué haces?', en: 'A young man who walked up is very tired and can’t get down. The train is full. What do you do?' },
          questions: [
            { q: { es: '¿Hablas otro idioma en casa?', en: 'Do you speak another language at home?' }, help: { es: 'Sí, hablo… / No, solo…', en: 'Yes, I speak… / No, only…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Y en el trabajo?', en: 'And at work?' }] },
            { q: { es: '¿Has subido a una montaña a pie?', en: 'Have you climbed a mountain on foot?' }, help: { es: 'Sí, llegué hasta arriba del… / No, nunca.', en: 'Yes, I climbed… / No, never.' }, follow: [{ es: '¿Cuántas horas?', en: 'How many hours?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Qué trabajo hacía tu abuelo?', en: 'What job did your grandfather do?' }, help: { es: 'Era… / Trabajaba en…', en: 'He was a… / He worked in…' }, follow: [{ es: '¿Te contaba historias?', en: 'Did he tell you stories?' }, { es: '¿Te gustaría hacer lo mismo?', en: 'Would you like to do the same?' }] },
            { q: { es: '¿Cómo se dice «gracias» en tu idioma?', en: 'How do you say “thank you” in your language?' }, help: { es: 'Se dice…', en: 'You say…' }, follow: [{ es: '¿Sabes decirlo en otros idiomas?', en: 'Can you say it in other languages?' }, { es: '¿Cuántos?', en: 'How many?' }] },
          ],
          words: [{ es: 'la cima', en: 'the summit' }, { es: 'a pie', en: 'on foot' }, { es: 'bajar', en: 'to go down' }, { es: 'el idioma', en: 'the language' }, { es: 'cansado', en: 'tired' }],
        },
        A2: {
          scene: { es: 'Este año, el gobierno galés ha decidido usar oficialmente el nombre galés de la montaña, «Yr Wyddfa», en lugar de «Snowdon». En el tren de Gwen, dos turistas ingleses se quejan en voz alta: dicen que es una tontería y que nadie sabe pronunciarlo.', en: 'This year, the Welsh government decided to officially use the mountain’s Welsh name, “Yr Wyddfa”, instead of “Snowdon”. On Gwen’s train, two English tourists complain loudly: they say it’s nonsense and nobody can pronounce it.' },
          opener: { es: 'Durante siglos, en las escuelas de Gales castigaban a los niños por hablar galés. A mi abuela le colgaron un cartel de madera en el cuello por hablarlo en clase. Para nosotros, recuperar los nombres es recuperar algo que nos quitaron. ¿Hay nombres de lugares en tu país que han cambiado?', en: 'For centuries, in Welsh schools children were punished for speaking Welsh. My grandmother had a wooden sign hung round her neck for speaking it in class. For us, getting the names back is getting back something that was taken from us. Are there place names in your country that have changed?' },
          decide: {
            ask: { es: 'Los turistas siguen quejándose y otros pasajeros se sienten incómodos. ¿Qué debería hacer Gwen?', en: 'The tourists keep complaining and other passengers feel uncomfortable. What should Gwen do?' },
            options: [
              { say: { es: 'Contar por el micrófono la historia de su abuela.', en: 'Tell her grandmother’s story over the microphone.' }, then: { es: 'El tren se queda en silencio. Al bajar, uno de los turistas le pide perdón.', en: 'The train goes silent. When they get off, one of the tourists apologises.' } },
              { say: { es: 'Enseñar a todo el tren a pronunciar «Yr Wyddfa».', en: 'Teach the whole train to pronounce “Yr Wyddfa”.' }, then: { es: 'Todos lo intentan y se ríen. Los dos turistas acaban diciéndolo bastante bien.', en: 'Everyone tries and laughs. The two tourists end up saying it quite well.' } },
              { say: { es: 'No decir nada. Es su trabajo, no su lugar.', en: 'Say nothing. It’s her job, not her place.' }, then: { es: 'El viaje termina tranquilo, pero Gwen se va a casa con mal sabor de boca.', en: 'The trip ends calmly, but Gwen goes home with a bad taste in her mouth.' } },
            ],
          },
          twist: { es: 'El jefe de Gwen le dice que debe usar los dos nombres para no perder clientes ingleses. A Gwen no le parece bien. ¿Qué debería responderle?', en: 'Gwen’s boss tells her she must use both names so as not to lose English customers. Gwen doesn’t think that’s right. What should she answer?' },
          questions: [
            { q: { es: '¿Tus abuelos hablaban un idioma que tú no hablas?', en: 'Did your grandparents speak a language that you don’t?' }, help: { es: 'Sí, hablaban… / No, todos hablamos…', en: 'Yes, they spoke… / No, we all speak…' }, follow: [{ es: '¿Por qué no lo aprendiste?', en: 'Why didn’t you learn it?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Te castigaron alguna vez en el colegio?', en: 'Were you ever punished at school?' }, help: { es: 'Sí, por… / No, era muy bueno.', en: 'Yes, for… / No, I was very good.' }, follow: [{ es: '¿Era justo?', en: 'Was it fair?' }, { es: '¿Qué hacían los profesores?', en: 'What did the teachers do?' }] },
            { q: { es: '¿Hay lugares con dos nombres en tu país?', en: 'Are there places with two names in your country?' }, help: { es: 'Sí, por ejemplo… / No que yo sepa.', en: 'Yes, for example… / Not that I know of.' }, follow: [{ es: '¿Cuál usas tú?', en: 'Which one do you use?' }, { es: '¿Hay discusiones por eso?', en: 'Are there arguments about it?' }] },
            { q: { es: '¿Has defendido algo importante en tu trabajo?', en: 'Have you stood up for something important at work?' }, help: { es: 'Sí, una vez le dije a mi jefe que… / No, prefiero no discutir.', en: 'Yes, once I told my boss that… / No, I prefer not to argue.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
          ],
          words: [{ es: 'castigar', en: 'to punish' }, { es: 'pronunciar', en: 'to pronounce' }, { es: 'el pasajero', en: 'the passenger' }, { es: 'recuperar', en: 'to get back' }, { es: 'el cuello', en: 'the neck' }],
        },
        B1: {
          scene: { es: 'Snowdon recibe casi seiscientas mil visitas al año. Los caminos se están rompiendo, hay basura y colas de una hora para hacerse una foto en la cima. Algunos proponen limitar las visitas con reservas obligatorias y precios altos. Gwen forma parte del comité que tiene que decidir.', en: 'Snowdon gets almost six hundred thousand visits a year. The paths are eroding, there’s litter and hour-long queues to take a photo at the summit. Some propose limiting visits with compulsory bookings and high prices. Gwen is on the committee that has to decide.' },
          opener: { es: 'Yo quiero que todo el mundo pueda ver lo que yo veo cada día. Pero cuando la montaña está llena de gente haciendo fotos para sus redes, ya no es la misma montaña. Si ponemos precios altos, solo vendrán los ricos. Si no hacemos nada, la estropeamos. ¿La naturaleza debería ser gratis para todos, aunque eso la destruya?', en: 'I want everyone to be able to see what I see every day. But when the mountain is full of people taking photos for social media, it isn’t the same mountain any more. If we set high prices, only the rich will come. If we do nothing, we ruin it. Should nature be free for everyone, even if that destroys it?' },
          decide: {
            ask: { es: '¿Qué debería votar Gwen en el comité?', en: 'How should Gwen vote on the committee?' },
            options: [
              { say: { es: 'Reservas gratuitas con un número máximo de personas al día.', en: 'Free bookings with a daily maximum number of people.' }, then: { es: 'Las reservas se agotan en minutos. Los vecinos de la zona protestan porque no consiguen plaza.', en: 'Bookings sell out in minutes. Local residents protest because they can’t get a place.' } },
              { say: { es: 'Un precio para turistas y entrada gratis para los galeses.', en: 'A price for tourists and free entry for Welsh people.' }, then: { es: 'Con el dinero se arreglan los caminos. Algunos turistas dicen que es discriminación.', en: 'With the money the paths are repaired. Some tourists say it’s discrimination.' } },
              { say: { es: 'No limitar, pero educar: guías y normas claras.', en: 'Don’t limit, but educate: guides and clear rules.' }, then: { es: 'La basura baja un poco, pero las colas siguen. El problema no se resuelve del todo.', en: 'Litter drops a little, but the queues remain. The problem isn’t fully solved.' } },
            ],
          },
          twist: { es: 'Una famosa influencer ofrece mucho dinero para cerrar la cima un día y grabar un anuncio. Con ese dinero se podrían arreglar todos los caminos. ¿Debería aceptar el comité?', en: 'A famous influencer offers a lot of money to close the summit for a day and film an advert. With that money all the paths could be repaired. Should the committee accept?' },
          questions: [
            { q: { es: '¿Has visitado un lugar estropeado por el turismo?', en: 'Have you visited a place spoiled by tourism?' }, help: { es: 'Sí, … estaba lleno de… / No, pero he oído hablar de…', en: 'Yes, … was full of… / No, but I’ve heard of…' }, follow: [{ es: '¿Volverías?', en: 'Would you go back?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Es justo que los locales paguen menos que los turistas?', en: 'Is it fair for locals to pay less than tourists?' }, help: { es: 'Sí, porque ellos… / No, porque todos…', en: 'Yes, because they… / No, because everyone…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Has pagado más por ser turista?', en: 'Have you paid more for being a tourist?' }] },
            { q: { es: '¿Haces fotos para las redes cuando viajas?', en: 'Do you take photos for social media when you travel?' }, help: { es: 'Sí, bastantes. / Muy pocas, prefiero…', en: 'Yes, quite a few. / Very few, I prefer…' }, follow: [{ es: '¿Cambia tu forma de viajar?', en: 'Does it change how you travel?' }, { es: '¿Has esperado una cola por una foto?', en: 'Have you queued for a photo?' }] },
            { q: { es: '¿Aceptarías dinero de alguien que no te gusta para una buena causa?', en: 'Would you accept money from someone you dislike for a good cause?' }, help: { es: 'Sí, si el fin… / No, porque…', en: 'Yes, if the end… / No, because…' }, follow: [{ es: '¿Conoces un caso real?', en: 'Do you know a real case?' }, { es: '¿Dónde pondrías el límite?', en: 'Where would you draw the line?' }] },
          ],
          words: [{ es: 'estropear', en: 'to ruin' }, { es: 'la basura', en: 'litter' }, { es: 'agotarse', en: 'to sell out' }, { es: 'el comité', en: 'the committee' }, { es: 'el anuncio', en: 'the advert' }],
        },
      },
    },
    // ------------------------------------------------------------ the Welsh-language school
    {
      id: 'escuela',
      name: { es: 'La escuela en galés', en: 'The Welsh-language school' },
      who: { name: 'Siân', role: { es: 'maestra', en: 'primary teacher' } },
      levels: {
        A0: {
          scene: { es: 'Es una escuela pequeña en un pueblo. Los niños hablan galés. En la pared hay dibujos y palabras en galés y en inglés. Siân es maestra.', en: 'It is a small school in a village. The children speak Welsh. On the wall there are drawings and words in Welsh and English. Siân is a teacher.' },
          opener: { es: '¡Hola! Soy Siân. Aquí todo es en galés. «Bore da» es «buenos días». ¿Lo dices?', en: 'Hello! I am Siân. Here everything is in Welsh. “Bore da” is “good morning”. Can you say it?' },
          decide: {
            ask: { es: 'Siân te enseña una palabra. ¿Cuál quieres aprender?', en: 'Siân teaches you a word. Which one do you want to learn?' },
            options: [
              { say: { es: '«Gracias».', en: '“Thank you”.' }, then: { es: 'Siân dice: «Diolch». Los niños aplauden.', en: 'Siân says: “Diolch.” The children clap.' } },
              { say: { es: '«Te quiero».', en: '“I love you”.' }, then: { es: 'Siân dice: «Rwy’n dy garu di». ¡Es difícil!', en: 'Siân says: “Rwy’n dy garu di.” It is difficult!' } },
              { say: { es: '«Dragón».', en: '“Dragon”.' }, then: { es: 'Siân dice: «Draig». Un niño hace un dibujo de un dragón.', en: 'Siân says: “Draig.” A child draws a dragon.' } },
            ],
          },
          twist: { es: 'Un niño te da un dibujo. Eres tú, con un dragón. ¿Qué dices?', en: 'A child gives you a drawing. It is you, with a dragon. What do you say?' },
          questions: [
            { q: { es: '¿Cuántos idiomas hablas?', en: 'How many languages do you speak?' }, help: { es: 'Hablo uno. / Hablo dos: … y …', en: 'I speak one. / I speak two: … and …' }, follow: [{ es: '¿Cuál es el más difícil?', en: 'Which is the hardest?' }, { es: '¿Cuál te gusta más?', en: 'Which do you like most?' }] },
            { q: { es: '¿Cómo se llamaba tu escuela?', en: 'What was your school called?' }, help: { es: 'Se llamaba…', en: 'It was called…' }, follow: [{ es: '¿Era grande?', en: 'Was it big?' }, { es: '¿Te gustaba?', en: 'Did you like it?' }] },
            { q: { es: '¿Te gusta dibujar?', en: 'Do you like drawing?' }, help: { es: 'Sí, mucho. / No, dibujo muy mal.', en: 'Yes, a lot. / No, I draw very badly.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Tienes un dibujo favorito?', en: 'Do you have a favourite drawing?' }] },
            { q: { es: '¿Cómo dices «buenos días» en tu idioma?', en: 'How do you say “good morning” in your language?' }, help: { es: 'Digo…', en: 'I say…' }, follow: [{ es: '¿Y «buenas noches»?', en: 'And “good night”?' }, { es: '¿Y «adiós»?', en: 'And “goodbye”?' }] },
          ],
          words: [{ es: 'la maestra', en: 'the teacher' }, { es: 'el dibujo', en: 'the drawing' }, { es: 'la pared', en: 'the wall' }, { es: 'aprender', en: 'to learn' }, { es: 'el pueblo', en: 'the village' }],
        },
        A1: {
          scene: { es: 'Es lunes por la mañana. Llega a la clase de Siân una niña nueva, Amira. Su familia acaba de llegar de Pakistán. Amira habla urdu e inglés, pero ni una palabra de galés. Toda la clase la mira.', en: 'It is Monday morning. A new girl, Amira, arrives in Siân’s class. Her family has just arrived from Pakistan. Amira speaks Urdu and English, but not a word of Welsh. The whole class looks at her.' },
          opener: { es: 'En esta escuela todas las clases son en galés. Los niños aprenden inglés en casa, en la tele y en la calle. Cuando llega un niño que no habla galés, normalmente en tres meses ya lo entiende todo. Los niños son increíbles. ¿Tú has empezado alguna vez en un lugar donde no entendías el idioma?', en: 'In this school all lessons are in Welsh. The children learn English at home, on TV and in the street. When a child arrives who doesn’t speak Welsh, they normally understand everything within three months. Children are amazing. Have you ever started somewhere where you didn’t understand the language?' },
          decide: {
            ask: { es: 'Siân te pide ayuda con Amira el primer día. ¿Qué haces?', en: 'Siân asks you to help with Amira on the first day. What do you do?' },
            options: [
              { say: { es: 'Me siento con ella y le enseño palabras con dibujos.', en: 'I sit with her and teach her words with pictures.' }, then: { es: 'Al final del día, Amira sabe diez palabras en galés. Está muy orgullosa.', en: 'By the end of the day, Amira knows ten words in Welsh. She is very proud.' } },
              { say: { es: 'Le pido a otra niña que sea su amiga.', en: 'I ask another girl to be her friend.' }, then: { es: 'Las dos niñas juegan juntas en el recreo y se ríen mucho.', en: 'The two girls play together at break time and laugh a lot.' } },
              { say: { es: 'Le pido a Amira que enseñe palabras en urdu a la clase.', en: 'I ask Amira to teach the class some words in Urdu.' }, then: { es: 'Los niños están fascinados. Ahora todos saben decir «hola» en urdu.', en: 'The children are fascinated. Now they can all say “hello” in Urdu.' } },
            ],
          },
          twist: { es: 'A la hora de comer, Amira no come nada. La comida tiene cerdo y ella no lo come. ¿Qué haces?', en: 'At lunchtime, Amira doesn’t eat anything. The food has pork and she doesn’t eat it. What do you do?' },
          questions: [
            { q: { es: '¿Has estado en un lugar sin entender el idioma?', en: 'Have you been somewhere without understanding the language?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Cómo te comunicabas?', en: 'How did you communicate?' }, { es: '¿Fue difícil?', en: 'Was it difficult?' }] },
            { q: { es: '¿Quién era tu mejor amigo en la escuela?', en: 'Who was your best friend at school?' }, help: { es: 'Se llamaba… / No me acuerdo.', en: 'Their name was… / I don’t remember.' }, follow: [{ es: '¿Todavía hablan?', en: 'Do you still talk?' }, { es: '¿Qué hacían juntos?', en: 'What did you do together?' }] },
            { q: { es: '¿Hay comida que no comes?', en: 'Is there food you don’t eat?' }, help: { es: 'Sí, no como… / No, como de todo.', en: 'Yes, I don’t eat… / No, I eat everything.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Cuántos idiomas se hablan en tu país?', en: 'How many languages are spoken in your country?' }, help: { es: 'Se hablan… / Solo uno.', en: '… are spoken. / Only one.' }, follow: [{ es: '¿Hablas alguno más?', en: 'Do you speak any others?' }, { es: '¿Se estudian en la escuela?', en: 'Are they studied at school?' }] },
          ],
          words: [{ es: 'el recreo', en: 'break time' }, { es: 'el cerdo', en: 'pork' }, { es: 'acabar de llegar', en: 'to have just arrived' }, { es: 'orgulloso', en: 'proud' }, { es: 'entender', en: 'to understand' }],
        },
        A2: {
          scene: { es: 'Hace cincuenta años, solo una de cada cinco personas hablaba galés y el idioma estaba desapareciendo. Hoy hay más niños que lo hablan gracias a escuelas como la de Siân. Pero esta semana, unos padres ingleses que se han mudado al pueblo dicen que quieren una escuela en inglés para sus hijos.', en: 'Fifty years ago, only one in five people spoke Welsh and the language was disappearing. Today more children speak it thanks to schools like Siân’s. But this week, some English parents who have moved to the village say they want an English-medium school for their children.' },
          opener: { es: 'Entiendo a esos padres: tienen miedo de que sus hijos no entiendan nada. Pero si abrimos una escuela en inglés en un pueblo tan pequeño, la mitad de los niños dejará de hablar galés en una generación. Mi madre luchó toda su vida por este idioma. ¿Tú crees que un idioma pequeño merece ese esfuerzo?', en: 'I understand those parents: they’re afraid their children won’t understand anything. But if we open an English school in such a small village, half the children will stop speaking Welsh within a generation. My mother fought all her life for this language. Do you think a small language is worth that effort?' },
          decide: {
            ask: { es: 'Siân tiene una reunión con los padres ingleses. ¿Qué le aconsejas?', en: 'Siân has a meeting with the English parents. What do you advise her?' },
            options: [
              { say: { es: 'Invitarlos a ver una clase antes de decidir.', en: 'Invite them to watch a lesson before deciding.' }, then: { es: 'Los padres ven a sus hijos cantando en galés. Una madre decide aprender el idioma también.', en: 'The parents see their children singing in Welsh. One mother decides to learn the language too.' } },
              { say: { es: 'Ofrecer clases de galés gratis para los padres.', en: 'Offer free Welsh classes for the parents.' }, then: { es: 'Se apuntan doce padres. Ahora hacen los deberes con sus hijos.', en: 'Twelve parents sign up. Now they do the homework with their children.' } },
              { say: { es: 'Aceptar una clase bilingüe el primer año.', en: 'Accept a bilingual class for the first year.' }, then: { es: 'Funciona bien, pero otros padres galeses se quejan de que el galés pierde espacio.', en: 'It works well, but other Welsh parents complain that Welsh is losing ground.' } },
            ],
          },
          twist: { es: 'Un niño inglés de la clase le dice a Siân: «Mi padre dice que el galés no sirve para nada». Los demás niños se enfadan. ¿Qué debería hacer Siân?', en: 'An English boy in the class tells Siân: “My dad says Welsh is useless.” The other children get angry. What should Siân do?' },
          questions: [
            { q: { es: '¿Hay un idioma en peligro en tu país?', en: 'Is there an endangered language in your country?' }, help: { es: 'Sí, el… lo hablan pocas personas. / No que yo sepa.', en: 'Yes,… few people speak it. / Not that I know of.' }, follow: [{ es: '¿Se enseña en las escuelas?', en: 'Is it taught in schools?' }, { es: '¿Lo aprenderías?', en: 'Would you learn it?' }] },
            { q: { es: '¿En qué idioma estudiaste en la escuela?', en: 'Which language did you study in at school?' }, help: { es: 'En… / En dos idiomas: … y …', en: 'In… / In two languages: … and …' }, follow: [{ es: '¿Te habría gustado otro?', en: 'Would you have liked another?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Tus padres te ayudaban con los deberes?', en: 'Did your parents help you with homework?' }, help: { es: 'Sí, sobre todo mi… / No, hacía los deberes solo.', en: 'Yes, especially my… / No, I did my homework alone.' }, follow: [{ es: '¿Con qué asignatura?', en: 'With which subject?' }, { es: '¿Tú ayudas a alguien ahora?', en: 'Do you help anyone now?' }] },
            { q: { es: '¿Para qué sirve aprender un idioma que habla poca gente?', en: 'What’s the point of learning a language few people speak?' }, help: { es: 'Sirve para… / Creo que no sirve mucho, porque…', en: 'It helps you to… / I don’t think it helps much, because…' }, follow: [{ es: '¿Y el español?', en: 'And Spanish?' }, { es: '¿Por qué lo estudias tú?', en: 'Why are you studying it?' }] },
          ],
          words: [{ es: 'en peligro', en: 'endangered' }, { es: 'la generación', en: 'the generation' }, { es: 'apuntarse', en: 'to sign up' }, { es: 'los deberes', en: 'homework' }, { es: 'bilingüe', en: 'bilingual' }],
        },
        B1: {
          scene: { es: 'El gobierno galés quiere tener un millón de hablantes de galés en 2050. Para conseguirlo, propone que todas las escuelas de Gales enseñen en galés, también en las ciudades donde casi nadie lo habla. Siân ha sido invitada a un debate en la televisión junto a un empresario de Cardiff que está en contra.', en: 'The Welsh government wants a million Welsh speakers by 2050. To achieve it, it proposes that all schools in Wales teach in Welsh, including in cities where hardly anyone speaks it. Siân has been invited to a TV debate alongside a Cardiff businessman who is against it.' },
          opener: { es: 'El empresario dirá que el inglés abre puertas en todo el mundo y que el galés no. Y tiene parte de razón. Pero un idioma no es solo una herramienta: es una forma de ver el mundo, de hacer chistes, de cantar. Si dejamos que muera, se pierde para siempre. ¿Se debe obligar a la gente a aprender un idioma para salvarlo?', en: 'The businessman will say English opens doors all over the world and Welsh doesn’t. And he’s partly right. But a language isn’t just a tool: it’s a way of seeing the world, of joking, of singing. If we let it die, it’s lost forever. Should people be forced to learn a language to save it?' },
          decide: {
            ask: { es: 'En el debate, ¿qué argumento debería usar Siân primero?', en: 'In the debate, which argument should Siân use first?' },
            options: [
              { say: { es: 'Los niños bilingües aprenden mejor otros idiomas.', en: 'Bilingual children learn other languages better.' }, then: { es: 'El empresario no sabe qué responder a los datos. El público aplaude.', en: 'The businessman doesn’t know how to respond to the data. The audience applauds.' } },
              { say: { es: 'La historia de los niños castigados por hablar galés.', en: 'The story of the children punished for speaking Welsh.' }, then: { es: 'Muchos espectadores se emocionan. El empresario dice que el pasado no debe decidir el futuro.', en: 'Many viewers are moved. The businessman says the past shouldn’t decide the future.' } },
              { say: { es: 'Proponer libertad: que cada familia elija.', en: 'Propose freedom: let each family choose.' }, then: { es: 'El empresario está de acuerdo. Pero otros defensores del galés se sienten traicionados.', en: 'The businessman agrees. But other Welsh-language supporters feel betrayed.' } },
            ],
          },
          twist: { es: 'Al final del debate, el empresario revela que sus propios hijos van a una escuela en galés. ¿Cómo debería reaccionar Siân?', en: 'At the end of the debate, the businessman reveals that his own children attend a Welsh-medium school. How should Siân react?' },
          questions: [
            { q: { es: '¿Un idioma es solo una herramienta?', en: 'Is a language just a tool?' }, help: { es: 'No, también es… / Sí, en el fondo es…', en: 'No, it’s also… / Yes, deep down it’s…' }, follow: [{ es: '¿Qué palabra de tu idioma no se puede traducir?', en: 'Which word in your language can’t be translated?' }, { es: '¿Cambias de personalidad en otro idioma?', en: 'Do you change personality in another language?' }] },
            { q: { es: '¿El Estado debe obligar a estudiar algo por razones culturales?', en: 'Should the state require people to study something for cultural reasons?' }, help: { es: 'Sí, cuando… / No, la educación debería…', en: 'Yes, when… / No, education should…' }, follow: [{ es: '¿Qué te obligaron a estudiar a ti?', en: 'What were you made to study?' }, { es: '¿Te sirvió?', en: 'Was it useful?' }] },
            { q: { es: '¿Has defendido algo en público sabiendo que te iban a criticar?', en: 'Have you defended something in public knowing you’d be criticised?' }, help: { es: 'Sí, en… / No, me da miedo.', en: 'Yes, at… / No, it scares me.' }, follow: [{ es: '¿Cómo te preparaste?', en: 'How did you prepare?' }, { es: '¿Volverías a hacerlo?', en: 'Would you do it again?' }] },
            { q: { es: '¿Es incoherente criticar algo y luego elegirlo para tu familia?', en: 'Is it inconsistent to criticise something and then choose it for your family?' }, help: { es: 'Sí, porque… / No necesariamente, porque…', en: 'Yes, because… / Not necessarily, because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Lo has hecho tú?', en: 'Have you done it?' }] },
          ],
          words: [{ es: 'el hablante', en: 'the speaker' }, { es: 'la herramienta', en: 'the tool' }, { es: 'obligar', en: 'to force' }, { es: 'el empresario', en: 'the businessman' }, { es: 'traicionar', en: 'to betray' }],
        },
      },
    },
    // ------------------------------------------------------------ the sheep farm
    {
      id: 'ovejas',
      name: { es: 'La granja de ovejas', en: 'The sheep farm' },
      who: { name: 'Dafydd', role: { es: 'granjero', en: 'sheep farmer' } },
      levels: {
        A0: {
          scene: { es: 'Es una granja en las colinas verdes de Gales. Hay muchas ovejas blancas. Hay un perro negro y blanco. Dafydd es granjero.', en: 'It is a farm in the green hills of Wales. There are lots of white sheep. There is a black and white dog. Dafydd is a farmer.' },
          opener: { es: '¡Hola! Soy Dafydd. Tengo quinientas ovejas. Este es mi perro, Mot. Él trabaja conmigo. ¿Te gustan los animales?', en: 'Hello! I am Dafydd. I have five hundred sheep. This is my dog, Mot. He works with me. Do you like animals?' },
          decide: {
            ask: { es: 'Dafydd te da un trabajo. ¿Cuál eliges?', en: 'Dafydd gives you a job. Which one do you choose?' },
            options: [
              { say: { es: 'Dar leche a un cordero.', en: 'Give milk to a lamb.' }, then: { es: 'El cordero bebe muy rápido. ¡Es muy bonito!', en: 'The lamb drinks very fast. It is very cute!' } },
              { say: { es: 'Caminar con el perro.', en: 'Walk with the dog.' }, then: { es: 'Mot corre y junta a las ovejas. ¡Es muy listo!', en: 'Mot runs and gathers the sheep. He is very clever!' } },
              { say: { es: 'Contar las ovejas.', en: 'Count the sheep.' }, then: { es: 'Cuentas cien… y te duermes. Dafydd se ríe.', en: 'You count a hundred… and you fall asleep. Dafydd laughs.' } },
            ],
          },
          twist: { es: 'Una oveja se come tu sombrero. Dafydd se ríe mucho. ¿Qué dices?', en: 'A sheep eats your hat. Dafydd laughs a lot. What do you say?' },
          questions: [
            { q: { es: '¿Has estado en una granja?', en: 'Have you been to a farm?' }, help: { es: 'Sí, una vez. / No, nunca.', en: 'Yes, once. / No, never.' }, follow: [{ es: '¿Qué animales había?', en: 'What animals were there?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Te gustan los perros?', en: 'Do you like dogs?' }, help: { es: 'Sí, mucho. / Prefiero los gatos.', en: 'Yes, a lot. / I prefer cats.' }, follow: [{ es: '¿Tienes uno?', en: 'Do you have one?' }, { es: '¿Cómo se llama?', en: 'What is its name?' }] },
            { q: { es: '¿Comes cordero?', en: 'Do you eat lamb?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Cómo lo cocinas?', en: 'How do you cook it?' }] },
            { q: { es: '¿Vives en la ciudad o en el campo?', en: 'Do you live in the city or in the countryside?' }, help: { es: 'En la ciudad. / En el campo.', en: 'In the city. / In the countryside.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde quieres vivir?', en: 'Where do you want to live?' }] },
          ],
          words: [{ es: 'la granja', en: 'the farm' }, { es: 'el cordero', en: 'the lamb' }, { es: 'la colina', en: 'the hill' }, { es: 'contar', en: 'to count' }, { es: 'listo', en: 'clever' }],
        },
        A1: {
          scene: { es: 'Es primavera. En la granja de Dafydd nacen cien corderos en una semana. Él casi no duerme. Su hija Ffion, de veinte años, ha venido de la universidad para ayudar. Ella estudia en Londres.', en: 'It is spring. On Dafydd’s farm a hundred lambs are born in one week. He hardly sleeps. His daughter Ffion, who is twenty, has come from university to help. She studies in London.' },
          opener: { es: 'En primavera trabajo dieciocho horas al día. Por la noche me levanto cada dos horas para ver a las ovejas. Es duro, pero me encanta ver nacer a los corderos. Mi familia tiene esta granja desde hace trescientos años. ¿Tú qué trabajo no harías nunca?', en: 'In spring I work eighteen hours a day. At night I get up every two hours to check on the sheep. It’s hard, but I love seeing the lambs being born. My family has had this farm for three hundred years. What job would you never do?' },
          decide: {
            ask: { es: 'Son las tres de la mañana. Una oveja tiene problemas. Dafydd te despierta. ¿Qué haces?', en: 'It is three in the morning. A sheep is in trouble. Dafydd wakes you up. What do you do?' },
            options: [
              { say: { es: 'Me levanto y le ayudo.', en: 'I get up and help him.' }, then: { es: 'Nace un cordero pequeño. Dafydd dice que tú le pones el nombre.', en: 'A little lamb is born. Dafydd says you can name it.' } },
              { say: { es: 'Despierto a Ffion. Ella sabe más.', en: 'I wake Ffion. She knows more.' }, then: { es: 'Ffion lo hace todo muy rápido. Tú sujetas la linterna.', en: 'Ffion does it all very quickly. You hold the torch.' } },
              { say: { es: 'Preparo café para todos.', en: 'I make coffee for everyone.' }, then: { es: 'A las cuatro, los tres beben café en la cocina y hablan de la vida.', en: 'At four, the three of them drink coffee in the kitchen and talk about life.' } },
            ],
          },
          twist: { es: 'Por la mañana, Ffion te dice en secreto que no quiere ser granjera. Su padre no lo sabe. ¿Qué le dices?', en: 'In the morning, Ffion tells you secretly that she doesn’t want to be a farmer. Her father doesn’t know. What do you tell her?' },
          questions: [
            { q: { es: '¿Cuántas horas trabajas al día?', en: 'How many hours a day do you work?' }, help: { es: 'Trabajo unas… horas.', en: 'I work about… hours.' }, follow: [{ es: '¿Es mucho?', en: 'Is it a lot?' }, { es: '¿Trabajas los fines de semana?', en: 'Do you work at weekends?' }] },
            { q: { es: '¿Qué trabajo no harías nunca?', en: 'What job would you never do?' }, help: { es: 'Nunca sería… porque…', en: 'I would never be a… because…' }, follow: [{ es: '¿Y cuál te gustaría?', en: 'And which would you like?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Te despiertas por la noche?', en: 'Do you wake up at night?' }, help: { es: 'Sí, a veces. / No, duermo muy bien.', en: 'Yes, sometimes. / No, I sleep very well.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
            { q: { es: '¿Tu familia tiene una casa muy antigua?', en: 'Does your family have a very old house?' }, help: { es: 'Sí, de mis abuelos. / No, todas son nuevas.', en: 'Yes, my grandparents’. / No, they’re all new.' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Vas a menudo?', en: 'Do you go often?' }] },
          ],
          words: [{ es: 'nacer', en: 'to be born' }, { es: 'la primavera', en: 'spring' }, { es: 'despertar', en: 'to wake up' }, { es: 'la linterna', en: 'the torch' }, { es: 'el granjero', en: 'the farmer' }],
        },
        A2: {
          scene: { es: 'Ffion ha terminado la universidad y le ha dicho a su padre que quiere quedarse a trabajar en Londres. Dafydd tiene sesenta años y no puede llevar la granja solo. Un vecino rico le ha ofrecido comprarla para hacer casas de vacaciones.', en: 'Ffion has finished university and has told her father she wants to stay and work in London. Dafydd is sixty and can’t run the farm alone. A rich neighbour has offered to buy it to build holiday homes.' },
          opener: { es: 'Ffion es inteligente y tiene derecho a hacer su vida. No quiero que vuelva solo por obligación. Pero si vendo la granja, trescientos años de historia se acaban conmigo. Y en este pueblo ya hay más casas de vacaciones que familias. ¿Tú has sentido presión para seguir el camino de tu familia?', en: 'Ffion is clever and has the right to live her own life. I don’t want her to come back just out of duty. But if I sell the farm, three hundred years of history end with me. And in this village there are already more holiday homes than families. Have you ever felt pressure to follow your family’s path?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Dafydd?', en: 'What do you advise Dafydd?' },
            options: [
              { say: { es: 'Contratar a un joven del pueblo y enseñarle.', en: 'Hire a young person from the village and train them.' }, then: { es: 'Contrata a un chico de diecinueve años. Es muy trabajador y le encantan las ovejas.', en: 'He hires a nineteen-year-old lad. He is very hard-working and loves the sheep.' } },
              { say: { es: 'Vender y disfrutar de la jubilación.', en: 'Sell and enjoy retirement.' }, then: { es: 'Dafydd vende. Tiene tiempo libre, pero cada mañana se despierta a las cinco y no sabe qué hacer.', en: 'Dafydd sells. He has free time, but every morning he wakes up at five and doesn’t know what to do.' } },
              { say: { es: 'Convertir parte de la granja en alojamiento rural para turistas.', en: 'Turn part of the farm into rural accommodation for tourists.' }, then: { es: 'Los turistas ayudan con los corderos y pagan por ello. La granja gana dinero de nuevo.', en: 'The tourists help with the lambs and pay for it. The farm makes money again.' } },
            ],
          },
          twist: { es: 'Ffion llama: dice que ha perdido su trabajo en Londres y que quizás vuelve. Pero no por la granja: porque no sabe qué hacer. ¿Qué debería decirle Dafydd?', en: 'Ffion calls: she says she has lost her job in London and may come back. But not for the farm: because she doesn’t know what to do. What should Dafydd tell her?' },
          questions: [
            { q: { es: '¿Has sentido presión de tu familia para elegir algo?', en: 'Have you felt family pressure to choose something?' }, help: { es: 'Sí, querían que… / No, siempre me dejaron elegir.', en: 'Yes, they wanted me to… / No, they always let me choose.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cómo reaccionaron?', en: 'How did they react?' }] },
            { q: { es: '¿Hay muchas casas de vacaciones en tu zona?', en: 'Are there lots of holiday homes in your area?' }, help: { es: 'Sí, sobre todo en… / No, casi ninguna.', en: 'Yes, especially in… / No, hardly any.' }, follow: [{ es: '¿Es un problema?', en: 'Is it a problem?' }, { es: '¿Quién las compra?', en: 'Who buys them?' }] },
            { q: { es: '¿Has vuelto a casa de tus padres después de vivir fuera?', en: 'Have you moved back in with your parents after living away?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Cuánto tiempo?', en: 'For how long?' }] },
            { q: { es: '¿Qué harías tú con trescientos años de historia familiar?', en: 'What would you do with three hundred years of family history?' }, help: { es: 'Intentaría… / Lo vendería, porque…', en: 'I would try to… / I would sell it, because…' }, follow: [{ es: '¿Sabes la historia de tu familia?', en: 'Do you know your family’s history?' }, { es: '¿Hasta dónde?', en: 'How far back?' }] },
          ],
          words: [{ es: 'la jubilación', en: 'retirement' }, { es: 'la obligación', en: 'duty' }, { es: 'contratar', en: 'to hire' }, { es: 'el alojamiento rural', en: 'rural accommodation' }, { es: 'trabajador', en: 'hard-working' }],
        },
        B1: {
          scene: { es: 'El gobierno galés ha cambiado las ayudas para los granjeros: ahora, para recibir dinero, tienen que plantar árboles en el diez por ciento de su tierra para luchar contra el cambio climático. Dafydd y miles de granjeros han ido a Cardiff a protestar con sus tractores. Dicen que perderán tierra para las ovejas.', en: 'The Welsh government has changed farming subsidies: now, to receive money, farmers have to plant trees on ten per cent of their land to fight climate change. Dafydd and thousands of farmers have gone to Cardiff to protest with their tractors. They say they’ll lose land for sheep.' },
          opener: { es: 'Nadie quiere más el campo que un granjero. Yo he plantado árboles toda mi vida. Pero que me lo impongan desde una oficina en Cardiff, gente que nunca ha ayudado a nacer a un cordero… eso me duele. ¿Deben pagar los granjeros el coste del cambio climático, cuando los que más contaminan viven en las ciudades?', en: 'Nobody loves the countryside more than a farmer. I’ve planted trees all my life. But having it imposed on me from an office in Cardiff, by people who have never helped deliver a lamb… that hurts. Should farmers bear the cost of climate change, when the biggest polluters live in cities?' },
          decide: {
            ask: { es: 'Un periodista entrevista a Dafydd en la protesta. ¿Qué debería pedir?', en: 'A journalist interviews Dafydd at the protest. What should he ask for?' },
            options: [
              { say: { es: 'Que los granjeros decidan dónde plantar y qué árboles.', en: 'That farmers decide where to plant and which trees.' }, then: { es: 'El gobierno acepta flexibilizar la norma. Dafydd planta en las zonas que no usan las ovejas.', en: 'The government agrees to make the rule more flexible. Dafydd plants in the areas the sheep don’t use.' } },
              { say: { es: 'Que las ciudades también tengan obligaciones verdes.', en: 'That cities also have green obligations.' }, then: { es: 'El debate se hace nacional. Cardiff anuncia un plan para plantar árboles en sus calles.', en: 'The debate goes national. Cardiff announces a plan to plant trees in its streets.' } },
              { say: { es: 'Más dinero por cada árbol plantado.', en: 'More money for every tree planted.' }, then: { es: 'El gobierno sube las ayudas. Algunos critican que los granjeros «cobran por lo que deberían hacer gratis».', en: 'The government raises subsidies. Some criticise farmers for “getting paid for what they should do for free”.' } },
            ],
          },
          twist: { es: 'En la protesta, un grupo de jóvenes ecologistas grita a los granjeros que «destruyen el planeta». Ffion, la hija de Dafydd, está entre los ecologistas. ¿Qué debería hacer Dafydd?', en: 'At the protest, a group of young environmentalists shout at the farmers that they are “destroying the planet”. Ffion, Dafydd’s daughter, is among the environmentalists. What should Dafydd do?' },
          questions: [
            { q: { es: '¿Quién debería pagar más por el cambio climático?', en: 'Who should pay more for climate change?' }, help: { es: 'Creo que… porque… / Todos por igual, porque…', en: 'I think… because… / Everyone equally, because…' }, follow: [{ es: '¿Y tú qué haces?', en: 'And what do you do?' }, { es: '¿Es suficiente?', en: 'Is it enough?' }] },
            { q: { es: '¿Las leyes se hacen pensando en la gente del campo?', en: 'Are laws made with country people in mind?' }, help: { es: 'No mucho, porque… / Sí, en mi país…', en: 'Not much, because… / Yes, in my country…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Has estado en desacuerdo con tus padres sobre algo político?', en: 'Have you disagreed with your parents about something political?' }, help: { es: 'Sí, sobre… / No, pensamos igual.', en: 'Yes, about… / No, we think alike.' }, follow: [{ es: '¿Cómo lo hablaron?', en: 'How did you talk about it?' }, { es: '¿Alguien cambió de opinión?', en: 'Did anyone change their mind?' }] },
            { q: { es: '¿Las protestas sirven para cambiar las cosas?', en: 'Do protests help change things?' }, help: { es: 'Sí, cuando… / Pocas veces, porque…', en: 'Yes, when… / Rarely, because…' }, follow: [{ es: '¿Has ido a una?', en: 'Have you been to one?' }, { es: '¿Cuál recuerdas?', en: 'Which one do you remember?' }] },
          ],
          words: [{ es: 'la ayuda', en: 'the subsidy' }, { es: 'imponer', en: 'to impose' }, { es: 'contaminar', en: 'to pollute' }, { es: 'el tractor', en: 'the tractor' }, { es: 'flexibilizar', en: 'to make more flexible' }],
        },
      },
    },
    // ------------------------------------------------------------ the longest name
    {
      id: 'llanfair',
      name: { es: 'El pueblo del nombre más largo', en: 'The village with the longest name' },
      who: { name: 'Megan', role: { es: 'jefa de estación', en: 'station manager' } },
      levels: {
        A0: {
          scene: { es: 'Es una estación de tren pequeña. El cartel es enorme. El nombre del pueblo tiene cincuenta y ocho letras. Megan trabaja aquí.', en: 'It is a small train station. The sign is huge. The village’s name has fifty-eight letters. Megan works here.' },
          opener: { es: '¡Hola! Soy Megan. Este pueblo tiene el nombre más largo de Europa. ¿Lo quieres leer?', en: 'Hello! I am Megan. This village has the longest name in Europe. Do you want to read it?' },
          decide: {
            ask: { es: '¿Qué haces con el cartel?', en: 'What do you do with the sign?' },
            options: [
              { say: { es: 'Hago una foto.', en: 'I take a photo.' }, then: { es: 'No entra en la foto. ¡Es muy largo!', en: 'It doesn’t fit in the photo. It is very long!' } },
              { say: { es: 'Intento leerlo.', en: 'I try to read it.' }, then: { es: 'Megan aplaude. «¡Muy bien! Bueno… casi».', en: 'Megan claps. “Very good! Well… almost.”' } },
              { say: { es: 'Pido a Megan que lo lea.', en: 'I ask Megan to read it.' }, then: { es: 'Megan lo dice muy rápido. ¡Parece una canción!', en: 'Megan says it very fast. It sounds like a song!' } },
            ],
          },
          twist: { es: 'Megan te da un billete de tren con el nombre del pueblo. Es muy largo. ¿Qué dices?', en: 'Megan gives you a train ticket with the village’s name on it. It is very long. What do you say?' },
          questions: [
            { q: { es: '¿Cuántas letras tiene tu nombre?', en: 'How many letters does your name have?' }, help: { es: 'Tiene… letras.', en: 'It has… letters.' }, follow: [{ es: '¿Te gusta tu nombre?', en: 'Do you like your name?' }, { es: '¿Quién lo eligió?', en: 'Who chose it?' }] },
            { q: { es: '¿Cómo se llama tu pueblo o ciudad?', en: 'What is your town or city called?' }, help: { es: 'Se llama…', en: 'It’s called…' }, follow: [{ es: '¿Es un nombre largo?', en: 'Is it a long name?' }, { es: '¿Qué significa?', en: 'What does it mean?' }] },
            { q: { es: '¿Viajas mucho en tren?', en: 'Do you travel by train a lot?' }, help: { es: 'Sí, mucho. / No, casi nunca.', en: 'Yes, a lot. / No, hardly ever.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Te gustan las palabras largas?', en: 'Do you like long words?' }, help: { es: 'Sí, son divertidas. / No, son difíciles.', en: 'Yes, they’re fun. / No, they’re difficult.' }, follow: [{ es: '¿Sabes una palabra larga en español?', en: 'Do you know a long word in Spanish?' }, { es: '¿Y en tu idioma?', en: 'And in your language?' }] },
          ],
          words: [{ es: 'la estación', en: 'the station' }, { es: 'el cartel', en: 'the sign' }, { es: 'la letra', en: 'the letter' }, { es: 'largo', en: 'long' }, { es: 'leer', en: 'to read' }],
        },
        A1: {
          scene: { es: 'Es sábado. Llega un autobús con cincuenta turistas. Todos quieren hacer una foto con el cartel de la estación. El pueblo es muy pequeño: tiene tres mil habitantes, una tienda, una iglesia y un café.', en: 'It is Saturday. A coach arrives with fifty tourists. They all want to take a photo with the station sign. The village is very small: it has three thousand inhabitants, a shop, a church and a café.' },
          opener: { es: 'Hace ciento cincuenta años, un zapatero del pueblo inventó este nombre tan largo para atraer turistas. ¡Y funcionó! Significa «la iglesia de Santa María en el valle del avellano blanco, cerca del remolino rápido…» y sigue. ¿Tu ciudad tiene algún truco para atraer turistas?', en: 'A hundred and fifty years ago, a local shoemaker invented this very long name to attract tourists. And it worked! It means “St Mary’s church in the hollow of the white hazel near the rapid whirlpool…” and it goes on. Does your town have any trick to attract tourists?' },
          decide: {
            ask: { es: 'Megan te pide ayuda con los turistas. ¿Qué haces?', en: 'Megan asks you to help with the tourists. What do you do?' },
            options: [
              { say: { es: 'Hago fotos a los grupos con el cartel.', en: 'I take photos of the groups with the sign.' }, then: { es: 'Haces doscientas fotos en una hora. Te duele el dedo.', en: 'You take two hundred photos in an hour. Your finger hurts.' } },
              { say: { es: 'Enseño a decir el nombre en voz alta.', en: 'I teach them to say the name out loud.' }, then: { es: 'Cincuenta turistas gritan el nombre a la vez. Los vecinos se asoman a las ventanas.', en: 'Fifty tourists shout the name at once. The neighbours look out of their windows.' } },
              { say: { es: 'Les recomiendo el café del pueblo.', en: 'I recommend the village café to them.' }, then: { es: 'El café vende todos sus pasteles en media hora. El dueño te invita a uno.', en: 'The café sells all its cakes in half an hour. The owner offers you one.' } },
            ],
          },
          twist: { es: 'Un turista se sube a las vías del tren para hacer una foto mejor. Viene un tren. ¿Qué haces?', en: 'A tourist climbs onto the railway tracks to get a better photo. A train is coming. What do you do?' },
          questions: [
            { q: { es: '¿Tu ciudad tiene algo raro o único?', en: 'Does your town have something strange or unique?' }, help: { es: 'Sí, tiene… / No, es normal.', en: 'Yes, it has… / No, it’s normal.' }, follow: [{ es: '¿Vienen turistas por eso?', en: 'Do tourists come for it?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Haces fotos en los lugares famosos?', en: 'Do you take photos at famous places?' }, help: { es: 'Sí, siempre. / No, prefiero mirar.', en: 'Yes, always. / No, I prefer to look.' }, follow: [{ es: '¿Cuál es tu mejor foto?', en: 'What is your best photo?' }, { es: '¿Dónde la hiciste?', en: 'Where did you take it?' }] },
            { q: { es: '¿Vives en un lugar grande o pequeño?', en: 'Do you live in a big or small place?' }, help: { es: 'Grande, tiene… habitantes. / Pequeño.', en: 'Big, it has… inhabitants. / Small.' }, follow: [{ es: '¿Cuántas tiendas hay?', en: 'How many shops are there?' }, { es: '¿Conoces a tus vecinos?', en: 'Do you know your neighbours?' }] },
            { q: { es: '¿Sabes qué significa el nombre de tu ciudad?', en: 'Do you know what your town’s name means?' }, help: { es: 'Sí, significa… / No, no lo sé.', en: 'Yes, it means… / No, I don’t know.' }, follow: [{ es: '¿De qué idioma viene?', en: 'What language does it come from?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
          ],
          words: [{ es: 'el zapatero', en: 'the shoemaker' }, { es: 'atraer', en: 'to attract' }, { es: 'el truco', en: 'the trick' }, { es: 'asomarse', en: 'to look out' }, { es: 'las vías', en: 'the tracks' }],
        },
        A2: {
          scene: { es: 'Megan trabaja en la estación desde hace veinte años. La empresa de trenes quiere cerrarla porque solo la usan diez vecinos al día; los turistas vienen en autobús, hacen la foto y se van. Sin la estación, los mayores del pueblo no podrán ir al hospital de la ciudad.', en: 'Megan has worked at the station for twenty years. The train company wants to close it because only ten locals use it a day; tourists come by coach, take the photo and leave. Without the station, the village’s older residents won’t be able to get to the hospital in town.' },
          opener: { es: 'Es irónico: somos famosos en todo el mundo y, a la vez, nos estamos quedando sin servicios. Cerraron el banco hace cinco años y el médico hace dos. Ahora la estación. Mi madre tiene ochenta años y no conduce. ¿En tu país los pueblos pequeños pierden servicios?', en: 'It’s ironic: we’re famous all over the world and, at the same time, we’re losing our services. The bank closed five years ago and the doctor two years ago. Now the station. My mother is eighty and doesn’t drive. In your country, are small villages losing services?' },
          decide: {
            ask: { es: 'Megan quiere salvar la estación. ¿Qué le aconsejas?', en: 'Megan wants to save the station. What do you advise her?' },
            options: [
              { say: { es: 'Vender billetes de recuerdo con el nombre largo.', en: 'Sell souvenir tickets with the long name.' }, then: { es: 'Se venden miles en internet. Con el dinero, la estación sigue abierta un año más.', en: 'Thousands sell online. With the money, the station stays open another year.' } },
              { say: { es: 'Pedir a los autobuses de turistas que paren en la estación.', en: 'Ask the tourist coaches to stop at the station.' }, then: { es: 'Los turistas compran un billete de una parada para la foto. El número de pasajeros se triplica.', en: 'The tourists buy a one-stop ticket for the photo. Passenger numbers triple.' } },
              { say: { es: 'Recoger firmas de todo el mundo en internet.', en: 'Collect signatures from around the world online.' }, then: { es: 'Firman cien mil personas de cuarenta países. La empresa no se atreve a cerrar.', en: 'A hundred thousand people from forty countries sign. The company doesn’t dare close it.' } },
            ],
          },
          twist: { es: 'Una empresa de Hollywood quiere comprar el derecho a usar el nombre del pueblo en una película de fantasía. Algunos vecinos dicen que el nombre no se vende. ¿Qué piensas?', en: 'A Hollywood company wants to buy the right to use the village’s name in a fantasy film. Some locals say the name isn’t for sale. What do you think?' },
          questions: [
            { q: { es: '¿Ha cerrado algún servicio importante cerca de ti?', en: 'Has an important service near you closed?' }, help: { es: 'Sí, cerró el… / No, todavía tenemos…', en: 'Yes, the… closed. / No, we still have…' }, follow: [{ es: '¿Qué hace la gente ahora?', en: 'What do people do now?' }, { es: '¿Quién lo nota más?', en: 'Who notices it most?' }] },
            { q: { es: '¿Has firmado alguna vez para salvar algo?', en: 'Have you ever signed something to save something?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, for… / No, never.' }, follow: [{ es: '¿Funcionó?', en: 'Did it work?' }, { es: '¿Firmarías por esta estación?', en: 'Would you sign for this station?' }] },
            { q: { es: '¿Cómo van tus abuelos al médico?', en: 'How do your grandparents get to the doctor?' }, help: { es: 'En coche con… / En autobús. / Viene el médico a casa.', en: 'By car with… / By bus. / The doctor comes home.' }, follow: [{ es: '¿Está lejos?', en: 'Is it far?' }, { es: '¿Quién les ayuda?', en: 'Who helps them?' }] },
            { q: { es: '¿El turismo ayuda a los pueblos pequeños?', en: 'Does tourism help small villages?' }, help: { es: 'Sí, porque trae… / No siempre, porque…', en: 'Yes, because it brings… / Not always, because…' }, follow: [{ es: '¿Conoces un pueblo así?', en: 'Do you know a village like that?' }, { es: '¿Qué necesitaría?', en: 'What would it need?' }] },
          ],
          words: [{ es: 'irónico', en: 'ironic' }, { es: 'los servicios', en: 'services' }, { es: 'la firma', en: 'the signature' }, { es: 'atreverse', en: 'to dare' }, { es: 'triplicarse', en: 'to triple' }],
        },
        B1: {
          scene: { es: 'Una agencia de publicidad propone cambiar el nombre del pueblo por uno todavía más largo, de cien letras, para conseguir un récord mundial y salir en todas las noticias. Prometen turismo y dinero. Megan, que es también concejala, tiene que votar. Los mayores dicen que el nombre es historia; los jóvenes, que el nombre ya era un invento comercial.', en: 'An advertising agency proposes changing the village’s name to an even longer one, of a hundred letters, to set a world record and make all the news. They promise tourism and money. Megan, who is also a councillor, has to vote. The elders say the name is history; the young people, that the name was already a commercial invention.' },
          opener: { es: 'Los jóvenes tienen razón en una cosa: el nombre largo lo inventó un zapatero para vender. Pero ciento cincuenta años después, se ha convertido en algo nuestro. ¿Cuándo un invento comercial se convierte en tradición? ¿Y tenemos derecho a cambiarlo otra vez por dinero?', en: 'The young people are right about one thing: the long name was invented by a shoemaker to sell. But a hundred and fifty years later, it has become something of ours. When does a commercial invention become a tradition? And do we have the right to change it again for money?' },
          decide: {
            ask: { es: '¿Qué debería votar Megan?', en: 'How should Megan vote?' },
            options: [
              { say: { es: 'En contra: el nombre ya es parte de la identidad del pueblo.', en: 'Against: the name is already part of the village’s identity.' }, then: { es: 'El cambio no se aprueba. La agencia lo prueba en otro pueblo de Gales, que consigue el récord.', en: 'The change isn’t approved. The agency tries it in another Welsh village, which gets the record.' } },
              { say: { es: 'A favor, si el dinero se usa para salvar la estación y el médico.', en: 'In favour, if the money is used to save the station and the doctor.' }, then: { es: 'El pueblo sale en noticias de todo el mundo. Vuelve el médico dos días a la semana.', en: 'The village makes news all over the world. The doctor comes back two days a week.' } },
              { say: { es: 'Pedir un referéndum a todos los vecinos.', en: 'Call a referendum of all residents.' }, then: { es: 'Gana el «no» por once votos. Los jóvenes se sienten ignorados.', en: '“No” wins by eleven votes. The young people feel ignored.' } },
            ],
          },
          twist: { es: 'Megan descubre que la agencia de publicidad es de su propio hermano. Nadie más lo sabe. ¿Debería decirlo antes de votar?', en: 'Megan discovers that the advertising agency belongs to her own brother. Nobody else knows. Should she say so before voting?' },
          questions: [
            { q: { es: '¿Qué tradición de tu país empezó como algo comercial?', en: 'Which tradition in your country started as something commercial?' }, help: { es: 'Por ejemplo… empezó como… / Creo que…', en: 'For example… started as… / I think…' }, follow: [{ es: '¿Te importa su origen?', en: 'Does its origin matter to you?' }, { es: '¿La celebras?', en: 'Do you celebrate it?' }] },
            { q: { es: '¿Cambiarías el nombre de tu ciudad por dinero?', en: 'Would you change your town’s name for money?' }, help: { es: 'Nunca, porque… / Quizás, si…', en: 'Never, because… / Maybe, if…' }, follow: [{ es: '¿Y el nombre de un estadio?', en: 'And a stadium’s name?' }, { es: '¿Dónde está la diferencia?', en: 'Where’s the difference?' }] },
            { q: { es: '¿Cuándo hay que declarar un conflicto de intereses?', en: 'When should you declare a conflict of interest?' }, help: { es: 'Siempre que… / Cuando la decisión…', en: 'Whenever… / When the decision…' }, follow: [{ es: '¿Has estado en una situación así?', en: 'Have you been in a situation like that?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Los mayores o los jóvenes deberían decidir el futuro de un pueblo?', en: 'Should the elders or the young decide a village’s future?' }, help: { es: 'Los jóvenes, porque van a… / Todos, pero…', en: 'The young, because they’re going to… / Everyone, but…' }, follow: [{ es: '¿Y en tu familia quién decide?', en: 'And in your family who decides?' }, { es: '¿Es justo?', en: 'Is it fair?' }] },
          ],
          words: [{ es: 'la agencia de publicidad', en: 'the advertising agency' }, { es: 'el récord', en: 'the record' }, { es: 'la concejala', en: 'the councillor' }, { es: 'el conflicto de intereses', en: 'conflict of interest' }, { es: 'el referéndum', en: 'the referendum' }],
        },
      },
    },
  ],
};
