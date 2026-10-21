// Andalucía · a flamenco tablao in Seville, the Alhambra in Granada, an olive
// mill in Jaén, a horse carriage at the Plaza de España and the Cádiz carnival.
// Five places, four levels each (A0, A1, A2, B1), every level written on its own.
export default {
  id: 'andalucia',
  spots: [
    // ------------------------------------------------------------ the flamenco tablao
    {
      id: 'flamenco',
      name: { es: 'El tablao flamenco', en: 'The flamenco club' },
      who: { name: 'Rocío', role: { es: 'bailaora', en: 'flamenco dancer' } },
      levels: {
        A0: {
          scene: { es: 'Es un bar pequeño en Sevilla. Hay música de guitarra. Rocío baila flamenco. Lleva un vestido rojo.', en: 'It is a small bar in Seville. There is guitar music. Rocío dances flamenco. She is wearing a red dress.' },
          opener: { es: '¡Hola! Soy Rocío. ¿Te gusta el flamenco?', en: 'Hi! I am Rocío. Do you like flamenco?' },
          decide: {
            ask: { es: 'Rocío te invita a participar. ¿Qué haces?', en: 'Rocío invites you to join in. What do you do?' },
            options: [
              { say: { es: 'Bailo con ella.', en: 'I dance with her.' }, then: { es: 'Rocío dice: «¡Muy bien! Arriba los brazos».', en: 'Rocío says: “Very good! Arms up.”' } },
              { say: { es: 'Aplaudo con la música.', en: 'I clap with the music.' }, then: { es: 'Rocío dice: «¡Eso son las palmas! Muy bien».', en: 'Rocío says: “That is “palmas”! Very good.”' } },
              { say: { es: 'Solo miro.', en: 'I just watch.' }, then: { es: 'Rocío dice: «Vale. Pero grita «¡olé!» al final».', en: 'Rocío says: “OK. But shout “olé!” at the end.”' } },
            ],
          },
          twist: { es: 'Rocío te da un abanico. «Es un regalo». ¿Qué dices?', en: 'Rocío gives you a fan. “It is a present.” What do you say?' },
          questions: [
            { q: { es: '¿Te gusta bailar?', en: 'Do you like dancing?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Qué bailas?', en: 'What do you dance?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Tocas la guitarra?', en: 'Do you play the guitar?' }, help: { es: 'Sí, un poco. / No.', en: 'Yes, a little. / No.' }, follow: [{ es: '¿Qué instrumento te gusta?', en: 'Which instrument do you like?' }, { es: '¿Quién toca en tu familia?', en: 'Who plays in your family?' }] },
            { q: { es: '¿Cuál es tu música favorita?', en: 'What is your favourite music?' }, help: { es: 'Me gusta el pop / el rock / la salsa…', en: 'I like pop / rock / salsa…' }, follow: [{ es: '¿Quién es tu cantante favorito?', en: 'Who is your favourite singer?' }, { es: '¿Vas a conciertos?', en: 'Do you go to concerts?' }] },
            { q: { es: '¿Te gusta el color rojo?', en: 'Do you like the colour red?' }, help: { es: 'Sí, me gusta. / Prefiero el azul…', en: 'Yes, I like it. / I prefer blue…' }, follow: [{ es: '¿Tienes ropa roja?', en: 'Do you have red clothes?' }, { es: '¿Qué color llevas hoy?', en: 'What colour are you wearing today?' }] },
          ],
          words: [{ es: 'bailar', en: 'to dance' }, { es: 'la guitarra', en: 'the guitar' }, { es: 'las palmas', en: 'rhythmic clapping' }, { es: 'el abanico', en: 'the fan' }, { es: '¡Olé!', en: 'Bravo! (flamenco cheer)' }],
        },
        A1: {
          scene: { es: 'El tablao está en el barrio de Triana, en Sevilla. Cada noche hay un espectáculo con un guitarrista, un cantaor y Rocío, que baila desde los cinco años. Después del espectáculo, Rocío da una clase corta para turistas.', en: 'The tablao is in the Triana neighbourhood of Seville. Every night there is a show with a guitarist, a singer and Rocío, who has danced since she was five. After the show, Rocío gives a short class for tourists.' },
          opener: { es: 'El flamenco no se aprende en un día, pero en una hora puedes aprender las palmas y un poco de taconeo. Lo más importante no son los pies: es la cara. Tienes que sentir la música. ¿Te atreves?', en: 'You can’t learn flamenco in a day, but in an hour you can learn the clapping and a little heel-stamping. The most important thing isn’t the feet: it’s the face. You have to feel the music. Do you dare?' },
          decide: {
            ask: { es: 'En la clase, Rocío te pregunta qué quieres aprender. ¿Qué eliges?', en: 'In the class, Rocío asks what you want to learn. What do you choose?' },
            options: [
              { say: { es: 'El taconeo con los pies.', en: 'The heel-stamping with my feet.' }, then: { es: 'Haces mucho ruido y poco ritmo. Rocío dice que es normal: «Al principio todos parecen caballos».', en: 'You make lots of noise and little rhythm. Rocío says it’s normal: “At first everyone sounds like horses.”' } },
              { say: { es: 'Mover los brazos y las manos.', en: 'Moving my arms and hands.' }, then: { es: 'Rocío te enseña a mover las manos como si cogieras una manzana de un árbol.', en: 'Rocío teaches you to move your hands as if picking an apple from a tree.' } },
              { say: { es: 'Las palmas para acompañar.', en: 'The clapping to accompany.' }, then: { es: 'Después de veinte minutos, el guitarrista te deja acompañarlo en una canción.', en: 'After twenty minutes, the guitarist lets you accompany him in a song.' } },
            ],
          },
          twist: { es: 'Al final, el cantaor te pide que subas al escenario delante de todos. ¿Qué haces?', en: 'At the end, the singer asks you to get on stage in front of everyone. What do you do?' },
          questions: [
            { q: { es: '¿Qué hacías cuando tenías cinco años?', en: 'What did you do when you were five?' }, help: { es: 'Cuando tenía cinco años, me gustaba…', en: 'When I was five, I liked…' }, follow: [{ es: '¿Lo haces ahora?', en: 'Do you do it now?' }, { es: '¿Quién te lo enseñó?', en: 'Who taught you?' }] },
            { q: { es: '¿Te atreves a hacer cosas delante de mucha gente?', en: 'Do you dare do things in front of many people?' }, help: { es: 'Sí, no me da vergüenza. / No, me pongo nervioso.', en: 'Yes, I’m not shy. / No, I get nervous.' }, follow: [{ es: '¿Cuándo lo hiciste?', en: 'When did you do it?' }, { es: '¿Cómo fue?', en: 'How was it?' }] },
            { q: { es: '¿Qué música tradicional hay en tu país?', en: 'What traditional music is there in your country?' }, help: { es: 'En mi país hay…', en: 'In my country there is…' }, follow: [{ es: '¿La escuchas?', en: 'Do you listen to it?' }, { es: '¿Se baila?', en: 'Do people dance to it?' }] },
            { q: { es: '¿Has tomado una clase de algo nuevo este año?', en: 'Have you taken a class in something new this year?' }, help: { es: 'Sí, de… / No, pero quiero aprender…', en: 'Yes, in… / No, but I want to learn…' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Vas a seguir?', en: 'Are you going to continue?' }] },
          ],
          words: [{ es: 'el tablao', en: 'the flamenco venue' }, { es: 'el cantaor', en: 'the flamenco singer' }, { es: 'el taconeo', en: 'heel-stamping' }, { es: 'atreverse', en: 'to dare' }, { es: 'el escenario', en: 'the stage' }],
        },
        A2: {
          scene: { es: 'Rocío tiene una lesión en la rodilla. El médico le dice que si sigue bailando seis noches a la semana, en dos años no podrá bailar más. Pero el tablao es su único trabajo y tiene una hija pequeña.', en: 'Rocío has a knee injury. The doctor tells her that if she keeps dancing six nights a week, in two years she won’t be able to dance any more. But the tablao is her only job and she has a little daughter.' },
          opener: { es: 'Bailo desde que tenía cinco años. Mi madre bailaba, mi abuela bailaba. No sé hacer otra cosa. Esta noche he bailado con la rodilla vendada y nadie se ha dado cuenta, pero yo he llorado en el camerino. ¿Tú has tenido que dejar algo que amabas?', en: 'I have danced since I was five. My mother danced, my grandmother danced. I don’t know how to do anything else. Tonight I danced with my knee bandaged and nobody noticed, but I cried in the dressing room. Have you ever had to give up something you loved?' },
          decide: {
            ask: { es: 'Rocío pide tu consejo. ¿Qué le dices?', en: 'Rocío asks for your advice. What do you tell her?' },
            options: [
              { say: { es: 'Que baile menos noches y dé más clases.', en: 'Dance fewer nights and give more classes.' }, then: { es: 'Rocío abre una pequeña escuela. Gana menos, pero su rodilla mejora y descubre que le encanta enseñar.', en: 'Rocío opens a small school. She earns less, but her knee improves and she discovers she loves teaching.' } },
              { say: { es: 'Que se opere ahora, aunque pierda unos meses.', en: 'Have surgery now, even if she loses a few months.' }, then: { es: 'Los compañeros del tablao organizan una noche especial para ayudarla con el dinero.', en: 'Her tablao colleagues organise a special night to help her with money.' } },
              { say: { es: 'Que hable con el dueño del tablao.', en: 'Talk to the tablao owner.' }, then: { es: 'El dueño le ofrece ser la directora artística. Ya no baila cada noche, pero decide todo el espectáculo.', en: 'The owner offers her the artistic director job. She no longer dances every night, but she decides the whole show.' } },
            ],
          },
          twist: { es: 'Esa noche, la hija de Rocío, de seis años, se sube al escenario por sorpresa y baila los primeros pasos que su madre le enseñó.', en: 'That night, Rocío’s six-year-old daughter jumps on stage by surprise and dances the first steps her mother taught her.' },
          questions: [
            { q: { es: '¿Has tenido que dejar algo que amabas?', en: 'Have you had to give up something you loved?' }, help: { es: 'Sí, tuve que dejar… porque… / No, todavía no.', en: 'Yes, I had to give up… because… / No, not yet.' }, follow: [{ es: '¿Lo echas de menos?', en: 'Do you miss it?' }, { es: '¿Podrías volver?', en: 'Could you go back to it?' }] },
            { q: { es: '¿Alguien de tu familia tiene el mismo oficio que sus padres?', en: 'Does anyone in your family have the same trade as their parents?' }, help: { es: 'Sí, mi… es… como su padre. / No, nadie.', en: 'Yes, my… is a… like his father. / No, nobody.' }, follow: [{ es: '¿Por qué crees que pasa?', en: 'Why do you think that happens?' }, { es: '¿Y tú?', en: 'And you?' }] },
            { q: { es: '¿Has trabajado alguna vez con dolor?', en: 'Have you ever worked while in pain?' }, help: { es: 'Sí, una vez… / No, me quedo en casa.', en: 'Yes, once… / No, I stay at home.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Te gustaría enseñar lo que sabes?', en: 'Would you like to teach what you know?' }, help: { es: 'Sí, me gustaría enseñar… / No, no tengo paciencia.', en: 'Yes, I would like to teach… / No, I’m not patient.' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Cómo lo harías?', en: 'How would you do it?' }] },
          ],
          words: [{ es: 'la lesión', en: 'the injury' }, { es: 'la rodilla', en: 'the knee' }, { es: 'vendado', en: 'bandaged' }, { es: 'el camerino', en: 'the dressing room' }, { es: 'operarse', en: 'to have surgery' }],
        },
        B1: {
          scene: { es: 'Una cantante pop internacional, que no es andaluza ni gitana, gana un premio por un disco que mezcla flamenco con música electrónica. Algunos artistas flamencos la acusan de apropiarse de su cultura; otros dicen que el flamenco siempre ha sido mestizo. Un periodista pide la opinión de Rocío.', en: 'An international pop singer, who is neither Andalusian nor Roma, wins an award for an album mixing flamenco with electronic music. Some flamenco artists accuse her of appropriating their culture; others say flamenco has always been a mix. A journalist asks for Rocío’s opinion.' },
          opener: { es: 'Es complicado. Mi abuela, que era gitana, decía que el flamenco nació del dolor de gente pobre y perseguida. Ver a una estrella millonaria ganando premios con él me da rabia. Pero también es verdad que gracias a ella, chicas de Japón y México vienen a aprender aquí. ¿Dónde termina el homenaje y empieza el robo?', en: 'It is complicated. My grandmother, who was Roma, used to say flamenco was born from the pain of poor, persecuted people. Seeing a millionaire star win awards with it makes me angry. But it is also true that thanks to her, girls from Japan and Mexico come here to learn. Where does homage end and theft begin?' },
          decide: {
            ask: { es: '¿Qué le aconsejas decir a Rocío en la entrevista?', en: 'What do you advise Rocío to say in the interview?' },
            options: [
              { say: { es: 'Que critique a la cantante por no reconocer de dónde viene el flamenco.', en: 'Criticise the singer for not acknowledging where flamenco comes from.' }, then: { es: 'La entrevista genera un gran debate. La cantante responde invitando a artistas gitanos a su próximo disco.', en: 'The interview sparks a big debate. The singer responds by inviting Roma artists onto her next album.' } },
              { say: { es: 'Que diga que la cultura no tiene dueño, pero que hay que respetarla.', en: 'Say culture has no owner, but must be respected.' }, then: { es: 'Muchos jóvenes artistas la apoyan. Algunos mayores la critican por ser demasiado blanda.', en: 'Many young artists support her. Some older ones criticise her for being too soft.' } },
              { say: { es: 'Que invite a la cantante al tablao a bailar con ella.', en: 'Invite the singer to the tablao to dance with her.' }, then: { es: 'Para sorpresa de todos, la cantante acepta. Esa noche el tablao está lleno de cámaras.', en: 'To everyone’s surprise, the singer accepts. That night the tablao is full of cameras.' } },
            ],
          },
          twist: { es: 'Rocío descubre que una de las canciones del disco premiado usa, sin permiso, una grabación de su abuela de los años setenta.', en: 'Rocío discovers that one of the songs on the award-winning album uses, without permission, a recording of her grandmother from the seventies.' },
          questions: [
            { q: { es: '¿Dónde termina el homenaje y empieza la apropiación?', en: 'Where does homage end and appropriation begin?' }, help: { es: 'Para mí, la diferencia está en…', en: 'For me, the difference lies in…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Quién debería decidirlo?', en: 'Who should decide?' }] },
            { q: { es: '¿Una cultura puede tener dueño?', en: 'Can a culture have an owner?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Y una receta?', en: 'And a recipe?' }, { es: '¿Y un idioma?', en: 'And a language?' }] },
            { q: { es: '¿Qué música de tu país ha cambiado al mezclarse con otras?', en: 'What music from your country has changed by mixing with others?' }, help: { es: 'Por ejemplo, … se mezcló con…', en: 'For example, … mixed with…' }, follow: [{ es: '¿Te gusta el resultado?', en: 'Do you like the result?' }, { es: '¿Los mayores la aceptan?', en: 'Do older people accept it?' }] },
            { q: { es: '¿Qué harías si alguien usara algo de tu familia sin permiso?', en: 'What would you do if someone used something of your family’s without permission?' }, help: { es: 'Primero… y después…', en: 'First… and then…' }, follow: [{ es: '¿Pedirías dinero?', en: 'Would you ask for money?' }, { es: '¿O reconocimiento?', en: 'Or recognition?' }] },
          ],
          words: [{ es: 'gitano', en: 'Roma (Spanish Gitano)' }, { es: 'apropiarse', en: 'to appropriate' }, { es: 'mestizo', en: 'mixed' }, { es: 'perseguido', en: 'persecuted' }, { es: 'el homenaje', en: 'the homage / tribute' }],
        },
      },
    },
    // ------------------------------------------------------------ the Alhambra
    {
      id: 'alhambra',
      name: { es: 'La Alhambra de Granada', en: 'The Alhambra in Granada' },
      who: { name: 'Antonio', role: { es: 'jardinero', en: 'gardener' } },
      levels: {
        A0: {
          scene: { es: 'Es un palacio antiguo en una montaña. Hay jardines, fuentes y flores. Antonio es jardinero. Cuida las rosas.', en: 'It is an ancient palace on a hill. There are gardens, fountains and flowers. Antonio is a gardener. He looks after the roses.' },
          opener: { es: 'Buenos días. Soy Antonio. ¿Te gustan las flores?', en: 'Good morning. I am Antonio. Do you like flowers?' },
          decide: {
            ask: { es: '¿Qué quieres ver?', en: 'What do you want to see?' },
            options: [
              { say: { es: 'Las fuentes.', en: 'The fountains.' }, then: { es: 'Antonio dice: «El agua viene de la montaña. Escucha».', en: 'Antonio says: “The water comes from the mountain. Listen.”' } },
              { say: { es: 'Las rosas.', en: 'The roses.' }, then: { es: 'Antonio dice: «Tengo rosas rojas, blancas y amarillas».', en: 'Antonio says: “I have red, white and yellow roses.”' } },
              { say: { es: 'El palacio.', en: 'The palace.' }, then: { es: 'Antonio dice: «Mira las paredes. ¡Hay letras árabes!»', en: 'Antonio says: “Look at the walls. There are Arabic letters!”' } },
            ],
          },
          twist: { es: 'Antonio te da una naranja del árbol. «Es amarga. ¡No se come!». ¿Qué dices?', en: 'Antonio gives you an orange from the tree. “It is bitter. You don’t eat it!” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí, me gustan las… / No mucho.', en: 'Yes, I like… / Not much.' }, follow: [{ es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }, { es: '¿Cuál es tu flor favorita?', en: 'What is your favourite flower?' }] },
            { q: { es: '¿Hay un palacio en tu país?', en: 'Is there a palace in your country?' }, help: { es: 'Sí, hay uno en… / No sé.', en: 'Yes, there is one in… / I don’t know.' }, follow: [{ es: '¿Cómo es?', en: 'What is it like?' }, { es: '¿Lo visitaste?', en: 'Have you visited it?' }] },
            { q: { es: '¿Te gusta el sonido del agua?', en: 'Do you like the sound of water?' }, help: { es: 'Sí, me relaja. / No mucho.', en: 'Yes, it relaxes me. / Not much.' }, follow: [{ es: '¿Dónde lo escuchas?', en: 'Where do you hear it?' }, { es: '¿Y la lluvia?', en: 'And rain?' }] },
            { q: { es: '¿Comes naranjas?', en: 'Do you eat oranges?' }, help: { es: 'Sí, mucho. / No, prefiero…', en: 'Yes, a lot. / No, I prefer…' }, follow: [{ es: '¿Haces zumo?', en: 'Do you make juice?' }, { es: '¿Cuándo?', en: 'When?' }] },
          ],
          words: [{ es: 'el palacio', en: 'the palace' }, { es: 'el jardín', en: 'the garden' }, { es: 'la fuente', en: 'the fountain' }, { es: 'la rosa', en: 'the rose' }, { es: 'amargo', en: 'bitter' }],
        },
        A1: {
          scene: { es: 'La Alhambra fue el palacio de los reyes nazaríes, los últimos reyes musulmanes de la península. Hoy recibe miles de visitantes al día. Antonio cuida los jardines del Generalife desde hace treinta años y conoce cada árbol.', en: 'The Alhambra was the palace of the Nasrid kings, the last Muslim kings of the peninsula. Today it receives thousands of visitors a day. Antonio has looked after the Generalife gardens for thirty years and knows every tree.' },
          opener: { es: 'Los que construyeron esto pensaban que el paraíso era un jardín con agua. Por eso hay agua en todas partes. Mi trabajo es mantener vivo un paraíso de setecientos años, con turistas que pisan las flores para sacar fotos. ¿Tú qué cuidas en tu vida?', en: 'Those who built this believed paradise was a garden with water. That is why there is water everywhere. My job is keeping a seven-hundred-year-old paradise alive, with tourists who step on the flowers to take photos. What do you look after in your life?' },
          decide: {
            ask: { es: 'No tienes entrada para el palacio: están agotadas. ¿Qué haces?', en: 'You don’t have a ticket for the palace: they are sold out. What do you do?' },
            options: [
              { say: { es: 'Subo al mirador de San Nicolás para verla desde fuera.', en: 'I go up to the San Nicolás viewpoint to see it from outside.' }, then: { es: 'Ves la Alhambra roja al atardecer con la sierra nevada detrás. Un gitano toca la guitarra.', en: 'You see the Alhambra glowing red at sunset with the snowy mountains behind. A Roma man plays guitar.' } },
              { say: { es: 'Le pregunto a Antonio si hay entradas para mañana.', en: 'I ask Antonio if there are tickets for tomorrow.' }, then: { es: 'Antonio te explica que hay que comprarlas con meses de antelación. Te recomienda la visita nocturna.', en: 'Antonio explains you have to buy them months in advance. He recommends the night visit.' } },
              { say: { es: 'Paseo por el barrio del Albaicín.', en: 'I walk around the Albaicín neighbourhood.' }, then: { es: 'Te pierdes entre casas blancas y teterías. Pruebas un té con menta.', en: 'You get lost among white houses and tea rooms. You try a mint tea.' } },
            ],
          },
          twist: { es: 'Un turista arranca una rosa del jardín para su novia. Antonio lo ve. ¿Qué haces tú?', en: 'A tourist pulls a rose from the garden for his girlfriend. Antonio sees it. What do you do?' },
          questions: [
            { q: { es: '¿Cómo te imaginas el paraíso?', en: 'How do you imagine paradise?' }, help: { es: 'Para mí, el paraíso es…', en: 'For me, paradise is…' }, follow: [{ es: '¿Hay agua?', en: 'Is there water?' }, { es: '¿Con quién estás?', en: 'Who are you with?' }] },
            { q: { es: '¿Compras entradas con mucha antelación?', en: 'Do you buy tickets well in advance?' }, help: { es: 'Sí, siempre planifico. / No, improviso.', en: 'Yes, I always plan. / No, I improvise.' }, follow: [{ es: '¿Te has quedado sin entrada?', en: 'Have you ever missed out on a ticket?' }, { es: '¿Para qué?', en: 'For what?' }] },
            { q: { es: '¿Qué cuidas en tu vida?', en: 'What do you look after in your life?' }, help: { es: 'Cuido a mi… / mis plantas / mi casa…', en: 'I look after my… / my plants / my home…' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Es difícil?', en: 'Is it hard?' }] },
            { q: { es: '¿Has visto un atardecer especial?', en: 'Have you seen a special sunset?' }, help: { es: 'Sí, en… / No que recuerde.', en: 'Yes, in… / Not that I remember.' }, follow: [{ es: '¿Con quién estabas?', en: 'Who were you with?' }, { es: '¿Sacaste fotos?', en: 'Did you take photos?' }] },
          ],
          words: [{ es: 'el paraíso', en: 'paradise' }, { es: 'pisar', en: 'to step on' }, { es: 'agotado', en: 'sold out' }, { es: 'con antelación', en: 'in advance' }, { es: 'arrancar', en: 'to pull out / tear off' }],
        },
        A2: {
          scene: { es: 'Es un verano de sequía. Por primera vez en siglos, las fuentes de la Alhambra pueden quedarse sin agua. La dirección pide a Antonio que elija qué jardines regar y cuáles dejar secar.', en: 'It is a summer of drought. For the first time in centuries, the Alhambra’s fountains may run dry. The management asks Antonio to choose which gardens to water and which to let dry out.' },
          opener: { es: 'Mi padre y mi abuelo también fueron jardineros aquí. Ninguno de ellos vio esto. Hay unos cipreses que plantó mi abuelo en 1940. Si los riego, se secan los rosales del patio principal, los que todos los turistas fotografían. ¿Tú qué salvarías?', en: 'My father and grandfather were gardeners here too. None of them saw this. There are some cypresses my grandfather planted in 1940. If I water them, the rose beds in the main courtyard dry out, the ones every tourist photographs. What would you save?' },
          decide: {
            ask: { es: 'Antonio tiene que presentar su plan mañana. ¿Qué le aconsejas?', en: 'Antonio has to present his plan tomorrow. What do you advise?' },
            options: [
              { say: { es: 'Salvar los árboles viejos: las flores vuelven a crecer.', en: 'Save the old trees: flowers grow back.' }, then: { es: 'El patio queda feo un verano, pero los cipreses sobreviven. Al año siguiente, los rosales vuelven.', en: 'The courtyard looks bad for one summer, but the cypresses survive. The next year the roses come back.' } },
              { say: { es: 'Cerrar las fuentes decorativas para ahorrar agua para todo.', en: 'Shut the decorative fountains to save water for everything.' }, then: { es: 'Los turistas se quejan del silencio, pero todos los jardines sobreviven.', en: 'Tourists complain about the silence, but all the gardens survive.' } },
              { say: { es: 'Usar el agua de las duchas y fregaderos del personal.', en: 'Use water from staff showers and sinks.' }, then: { es: 'Es poco, pero el gesto inspira a los vecinos del Albaicín, que traen cubos de agua.', en: 'It isn’t much, but the gesture inspires Albaicín residents, who bring buckets of water.' } },
            ],
          },
          twist: { es: 'Limpiando un canal seco, Antonio encuentra una tubería árabe del siglo XIV que nadie conocía y que todavía funciona.', en: 'Cleaning a dry channel, Antonio finds a 14th-century Arab pipe nobody knew about, which still works.' },
          questions: [
            { q: { es: '¿Hay problemas de agua en tu región?', en: 'Are there water problems in your region?' }, help: { es: 'Sí, en verano… / No, llueve mucho.', en: 'Yes, in summer… / No, it rains a lot.' }, follow: [{ es: '¿Qué hace la gente?', en: 'What do people do?' }, { es: '¿Ahorras agua?', en: 'Do you save water?' }] },
            { q: { es: '¿Qué salvarías primero en tu casa en una emergencia?', en: 'What would you save first at home in an emergency?' }, help: { es: 'Salvaría… porque…', en: 'I would save… because…' }, follow: [{ es: '¿Es caro?', en: 'Is it expensive?' }, { es: '¿Qué valor tiene para ti?', en: 'What value does it have for you?' }] },
            { q: { es: '¿Hay algo que plantó o construyó alguien de tu familia?', en: 'Is there something someone in your family planted or built?' }, help: { es: 'Sí, mi abuelo plantó / construyó… / No.', en: 'Yes, my grandfather planted / built… / No.' }, follow: [{ es: '¿Todavía existe?', en: 'Does it still exist?' }, { es: '¿Lo visitas?', en: 'Do you visit it?' }] },
            { q: { es: '¿Notas cambios en el clima de tu ciudad?', en: 'Do you notice changes in your city’s climate?' }, help: { es: 'Sí, antes… y ahora… / No mucho.', en: 'Yes, before… and now… / Not much.' }, follow: [{ es: '¿Te preocupa?', en: 'Does it worry you?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
          ],
          words: [{ es: 'la sequía', en: 'the drought' }, { es: 'regar', en: 'to water (plants)' }, { es: 'el ciprés', en: 'the cypress' }, { es: 'secarse', en: 'to dry out' }, { es: 'la tubería', en: 'the pipe' }],
        },
        B1: {
          scene: { es: 'Un grupo de descendientes de familias moriscas, expulsadas de España hace cuatrocientos años, pide poder rezar en una sala de la Alhambra un día al año. Parte de la ciudad lo ve como un gesto de reconciliación; otra parte, como un precedente peligroso en un monumento que es patrimonio de todos.', en: 'A group of descendants of Morisco families, expelled from Spain four hundred years ago, asks to be allowed to pray in a room of the Alhambra one day a year. Part of the city sees it as a gesture of reconciliation; another part as a dangerous precedent in a monument that belongs to everyone.' },
          opener: { es: 'Llevo treinta años cuidando un lugar construido por gente que rezaba aquí y que fue obligada a irse. A veces, por la mañana temprano, imagino cómo sonaba. No soy religioso, pero entiendo lo que piden. También entiendo a los que dicen que si abres la puerta a uno, otros pedirán lo mismo. ¿A quién pertenece la memoria de un lugar?', en: 'I have spent thirty years caring for a place built by people who prayed here and were forced to leave. Sometimes, early in the morning, I imagine how it sounded. I am not religious, but I understand what they are asking. I also understand those who say that if you open the door to one group, others will ask for the same. Who does the memory of a place belong to?' },
          decide: {
            ask: { es: 'El patronato pide opiniones a los trabajadores. ¿Qué le recomiendas a Antonio?', en: 'The board asks the staff for their opinions. What do you recommend to Antonio?' },
            options: [
              { say: { es: 'Apoyar un acto cultural abierto a todos, no un rezo.', en: 'Support a cultural event open to all, not a prayer.' }, then: { es: 'Se organiza una noche de música andalusí. Vienen familias de Marruecos y de Granada.', en: 'An evening of Andalusi music is organised. Families from Morocco and Granada come.' } },
              { say: { es: 'Apoyar la petición: es un gesto de justicia histórica.', en: 'Support the request: it is a gesture of historical justice.' }, then: { es: 'El debate llega al Parlamento. La decisión se aplaza, pero el tema ya no es tabú.', en: 'The debate reaches Parliament. The decision is postponed, but the subject is no longer taboo.' } },
              { say: { es: 'No opinar: es una decisión política, no de jardineros.', en: 'Not give an opinion: it is a political decision, not one for gardeners.' }, then: { es: 'Antonio calla, pero esa noche escribe una carta a su hija explicando lo que piensa de verdad.', en: 'Antonio says nothing, but that night he writes a letter to his daughter explaining what he really thinks.' } },
            ],
          },
          twist: { es: 'Uno de los descendientes le enseña a Antonio la llave antigua de una casa del Albaicín que su familia ha guardado durante cuatro siglos.', en: 'One of the descendants shows Antonio the old key to a house in the Albaicín that his family has kept for four centuries.' },
          questions: [
            { q: { es: '¿A quién pertenece la memoria de un lugar?', en: 'Who does the memory of a place belong to?' }, help: { es: 'Creo que pertenece a…', en: 'I think it belongs to…' }, follow: [{ es: '¿Y en tu país?', en: 'And in your country?' }, { es: '¿Hay lugares con memorias en conflicto?', en: 'Are there places with conflicting memories?' }] },
            { q: { es: '¿Los países deben pedir perdón por su historia?', en: 'Should countries apologise for their history?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Sirve de algo?', en: 'Does it help?' }, { es: '¿Conoces un caso?', en: 'Do you know a case?' }] },
            { q: { es: '¿Qué objeto antiguo guarda tu familia?', en: 'What old object does your family keep?' }, help: { es: 'Mi familia guarda…', en: 'My family keeps…' }, follow: [{ es: '¿Qué historia tiene?', en: 'What is its story?' }, { es: '¿Quién lo tendrá después?', en: 'Who will have it next?' }] },
            { q: { es: '¿Un monumento debe ser solo un museo o puede tener otros usos?', en: 'Should a monument be only a museum or can it have other uses?' }, help: { es: 'Me parece que…', en: 'I think that…' }, follow: [{ es: '¿Qué usos aceptarías?', en: 'What uses would you accept?' }, { es: '¿Cuáles no?', en: 'Which not?' }] },
          ],
          words: [{ es: 'morisco', en: 'Morisco (converted Muslim)' }, { es: 'expulsar', en: 'to expel' }, { es: 'rezar', en: 'to pray' }, { es: 'el patrimonio', en: 'heritage' }, { es: 'aplazar', en: 'to postpone' }],
        },
      },
    },
    // ------------------------------------------------------------ the olive mill
    {
      id: 'olivar',
      name: { es: 'El olivar de Jaén', en: 'The olive grove in Jaén' },
      who: { name: 'Don Rafael', role: { es: 'olivarero', en: 'olive farmer' } },
      levels: {
        A0: {
          scene: { es: 'Hay muchos árboles verdes en el campo. Son olivos. Don Rafael tiene aceitunas y hace aceite.', en: 'There are many green trees in the countryside. They are olive trees. Don Rafael has olives and makes oil.' },
          opener: { es: 'Hola. Soy Rafael. ¿Quieres probar mi aceite?', en: 'Hello. I am Rafael. Do you want to try my oil?' },
          decide: {
            ask: { es: 'Rafael te da pan. ¿Cómo lo comes?', en: 'Rafael gives you bread. How do you eat it?' },
            options: [
              { say: { es: 'Con aceite y sal.', en: 'With oil and salt.' }, then: { es: 'Rafael dice: «¡Así se come aquí! Muy bien».', en: 'Rafael says: “That’s how we eat it here! Very good.”' } },
              { say: { es: 'Con aceitunas.', en: 'With olives.' }, then: { es: 'Rafael dice: «Son verdes. Un poco amargas».', en: 'Rafael says: “They are green. A little bitter.”' } },
              { say: { es: 'Solo pan, gracias.', en: 'Just bread, thanks.' }, then: { es: 'Rafael dice: «¿Sin aceite? ¡No puede ser!»', en: 'Rafael says: “Without oil? It can’t be!”' } },
            ],
          },
          twist: { es: 'Rafael te da una botella de aceite. «Para tu casa». ¿Qué dices?', en: 'Rafael gives you a bottle of oil. “For your home.” What do you say?' },
          questions: [
            { q: { es: '¿Usas aceite de oliva?', en: 'Do you use olive oil?' }, help: { es: 'Sí, siempre. / No, uso otro.', en: 'Yes, always. / No, I use another one.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Es caro en tu país?', en: 'Is it expensive in your country?' }] },
            { q: { es: '¿Te gustan las aceitunas?', en: 'Do you like olives?' }, help: { es: 'Sí, las verdes / las negras. / No.', en: 'Yes, green / black ones. / No.' }, follow: [{ es: '¿Cuándo las comes?', en: 'When do you eat them?' }, { es: '¿Con qué?', en: 'With what?' }] },
            { q: { es: '¿Vives en el campo o en la ciudad?', en: 'Do you live in the countryside or in the city?' }, help: { es: 'Vivo en el campo / en la ciudad.', en: 'I live in the countryside / in the city.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué prefieres?', en: 'Which do you prefer?' }] },
            { q: { es: '¿Qué comes con pan?', en: 'What do you eat with bread?' }, help: { es: 'Como pan con queso / mantequilla…', en: 'I eat bread with cheese / butter…' }, follow: [{ es: '¿Por la mañana?', en: 'In the morning?' }, { es: '¿Haces pan?', en: 'Do you make bread?' }] },
          ],
          words: [{ es: 'el olivo', en: 'the olive tree' }, { es: 'la aceituna', en: 'the olive' }, { es: 'el aceite', en: 'oil' }, { es: 'el campo', en: 'the countryside' }, { es: 'la botella', en: 'the bottle' }],
        },
        A1: {
          scene: { es: 'Jaén es la provincia con más olivos del mundo: hay más de sesenta millones. En invierno es la temporada de la cosecha. Don Rafael y su familia recogen aceitunas desde que sale el sol hasta que se pone.', en: 'Jaén is the province with the most olive trees in the world: there are over sixty million. Winter is harvest season. Don Rafael and his family pick olives from sunrise to sunset.' },
          opener: { es: 'Mira estos olivos: algunos tienen más de trescientos años. Mi bisabuelo ya recogía aceitunas de estos mismos árboles. Antes lo hacíamos todo a mano; ahora tenemos máquinas que mueven el árbol. ¿Quieres ayudarnos una mañana?', en: 'Look at these olive trees: some are more than three hundred years old. My great-grandfather already picked olives from these same trees. We used to do everything by hand; now we have machines that shake the tree. Do you want to help us for a morning?' },
          decide: {
            ask: { es: 'Ayudas en la cosecha. ¿Qué trabajo eliges?', en: 'You help with the harvest. Which job do you choose?' },
            options: [
              { say: { es: 'Varear: golpear las ramas con un palo.', en: 'Beating the branches with a pole.' }, then: { es: 'Es muy cansado. Después de una hora te duelen los brazos, pero caen muchas aceitunas.', en: 'It is very tiring. After an hour your arms hurt, but lots of olives fall.' } },
              { say: { es: 'Recoger las aceitunas del suelo.', en: 'Picking up olives from the ground.' }, then: { es: 'Trabajas con la abuela de la familia. Te cuenta historias de cuando era joven.', en: 'You work with the family’s grandmother. She tells you stories from when she was young.' } },
              { say: { es: 'Llevar las aceitunas a la almazara.', en: 'Take the olives to the oil mill.' }, then: { es: 'Ves cómo las aceitunas se convierten en aceite verde en pocas horas.', en: 'You see how the olives turn into green oil in a few hours.' } },
            ],
          },
          twist: { es: 'A mediodía, la familia come junta en el campo: migas, chorizo y vino. Te ofrecen tu primera migas. ¿Qué dices?', en: 'At midday, the family eats together in the field: migas, chorizo and wine. They offer you your first migas. What do you say?' },
          questions: [
            { q: { es: '¿Has trabajado en el campo alguna vez?', en: 'Have you ever worked in the countryside?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Qué produce tu región?', en: 'What does your region produce?' }, help: { es: 'Mi región produce…', en: 'My region produces…' }, follow: [{ es: '¿Es famosa por eso?', en: 'Is it famous for it?' }, { es: '¿Lo compras?', en: 'Do you buy it?' }] },
            { q: { es: '¿Hay algún árbol muy viejo cerca de tu casa?', en: 'Is there a very old tree near your home?' }, help: { es: 'Sí, hay uno en… / No que yo sepa.', en: 'Yes, there is one in… / Not that I know of.' }, follow: [{ es: '¿Cuántos años tiene?', en: 'How old is it?' }, { es: '¿Tiene una historia?', en: 'Does it have a story?' }] },
            { q: { es: '¿Comes con tu familia los fines de semana?', en: 'Do you eat with your family at weekends?' }, help: { es: 'Sí, los domingos… / No, cada uno come solo.', en: 'Yes, on Sundays… / No, everyone eats alone.' }, follow: [{ es: '¿Qué comen?', en: 'What do you eat?' }, { es: '¿Quién cocina?', en: 'Who cooks?' }] },
          ],
          words: [{ es: 'la cosecha', en: 'the harvest' }, { es: 'recoger', en: 'to pick / gather' }, { es: 'la rama', en: 'the branch' }, { es: 'la almazara', en: 'the olive-oil mill' }, { es: 'las migas', en: 'migas (fried breadcrumbs dish)' }],
        },
        A2: {
          scene: { es: 'Este año el precio del aceite está altísimo por la sequía, pero el precio que le pagan a Don Rafael por sus aceitunas es muy bajo. Los intermediarios ganan casi todo. Una gran empresa le ofrece comprar todo su olivar.', en: 'This year the price of oil is very high because of the drought, but the price Don Rafael is paid for his olives is very low. The middlemen earn almost everything. A big company offers to buy his whole olive grove.' },
          opener: { es: 'Tengo sesenta y dos años y mis hijos viven en Madrid y en Alemania. Ninguno quiere el campo. Si vendo, tendré una jubilación tranquila. Si no vendo, los olivos de mi bisabuelo se quedarán sin nadie cuando yo no pueda. Me da pena, pero también me da miedo. ¿Tú qué harías?', en: 'I am sixty-two and my children live in Madrid and Germany. None of them wants the land. If I sell, I will have a peaceful retirement. If I don’t, my great-grandfather’s olive trees will be left with nobody when I can no longer work them. It makes me sad, but it also scares me. What would you do?' },
          decide: {
            ask: { es: 'Don Rafael tiene un mes para decidir. ¿Qué le aconsejas?', en: 'Don Rafael has a month to decide. What do you advise?' },
            options: [
              { say: { es: 'Unirse con otros olivareros en una cooperativa y vender directamente.', en: 'Join other farmers in a cooperative and sell directly.' }, then: { es: 'Venden su aceite por internet con la foto de los olivos viejos. Ganan el doble.', en: 'They sell their oil online with a photo of the old trees. They earn twice as much.' } },
              { say: { es: 'Vender, pero quedarse con los árboles más antiguos.', en: 'Sell, but keep the oldest trees.' }, then: { es: 'La empresa acepta. Don Rafael conserva veinte olivos centenarios para la familia.', en: 'The company agrees. Don Rafael keeps twenty century-old trees for the family.' } },
              { say: { es: 'Llamar a sus hijos antes de decidir.', en: 'Call his children before deciding.' }, then: { es: 'Su nieta, de diecinueve años, le dice que quiere estudiar agronomía y quedarse con el olivar.', en: 'His nineteen-year-old granddaughter tells him she wants to study agronomy and take over the grove.' } },
            ],
          },
          twist: { es: 'En la empresa que quiere comprar, Don Rafael reconoce al director: es un chico del pueblo que trabajaba en su cosecha hace treinta años.', en: 'At the company that wants to buy, Don Rafael recognises the director: a boy from the village who worked in his harvest thirty years ago.' },
          questions: [
            { q: { es: '¿Los jóvenes de tu país se van del campo?', en: 'Do young people in your country leave the countryside?' }, help: { es: 'Sí, muchos se van a… / No tanto.', en: 'Yes, many go to… / Not so much.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Volverías tú?', en: 'Would you go back?' }] },
            { q: { es: '¿Sabes cuánto gana el que produce lo que comes?', en: 'Do you know how much the producer of what you eat earns?' }, help: { es: 'Creo que poco / mucho… / No tengo ni idea.', en: 'I think little / a lot… / I have no idea.' }, follow: [{ es: '¿Te preocupa?', en: 'Does it worry you?' }, { es: '¿Compras directo al productor?', en: 'Do you buy directly from producers?' }] },
            { q: { es: '¿Venderías algo heredado de tu familia?', en: 'Would you sell something inherited from your family?' }, help: { es: 'Sí, si… / No, nunca, porque…', en: 'Yes, if… / No, never, because…' }, follow: [{ es: '¿Qué tienes heredado?', en: 'What have you inherited?' }, { es: '¿Lo usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Qué te da miedo del futuro?', en: 'What scares you about the future?' }, help: { es: 'Me da miedo… / No tengo miedo, porque…', en: '… scares me / I’m not scared, because…' }, follow: [{ es: '¿Qué haces para no pensar en eso?', en: 'What do you do to not think about it?' }, { es: '¿Y qué te ilusiona?', en: 'And what excites you?' }] },
          ],
          words: [{ es: 'el intermediario', en: 'the middleman' }, { es: 'la jubilación', en: 'the retirement / pension' }, { es: 'la cooperativa', en: 'the cooperative' }, { es: 'centenario', en: 'century-old' }, { es: 'heredar', en: 'to inherit' }],
        },
        B1: {
          scene: { es: 'Una empresa de energía quiere instalar una enorme planta solar en Jaén. Para hacerlo, propone arrancar cien mil olivos, algunos centenarios. Pagaría muy bien a los propietarios y crearía empleo, en una provincia con mucho paro. Los ecologistas están divididos: la energía solar es limpia, pero los olivos también absorben CO₂.', en: 'An energy company wants to install a huge solar plant in Jaén. To do so, it proposes uprooting a hundred thousand olive trees, some of them centuries old. It would pay owners very well and create jobs in a province with high unemployment. Environmentalists are divided: solar energy is clean, but olive trees also absorb CO₂.' },
          opener: { es: 'Mis vecinos están vendiendo uno tras otro. Con lo que les pagan, cobran más que en diez años de cosechas. ¿Cómo voy a reprocharles nada? Pero cuando veo las fotos del proyecto, solo hay paneles grises donde antes había un mar verde. Dicen que es el futuro. A mí me parece que estamos cambiando un paisaje de mil años por veinte años de electricidad. ¿Tengo razón o soy un viejo nostálgico?', en: 'My neighbours are selling one after another. What they are paid is more than ten years of harvests. How can I blame them? But when I see the project’s photos, there are only grey panels where there used to be a green sea. They say it is the future. To me it looks like we are swapping a thousand-year-old landscape for twenty years of electricity. Am I right or am I a nostalgic old man?' },
          decide: {
            ask: { es: 'Hay una consulta popular en el pueblo. ¿Qué le recomiendas votar a Don Rafael?', en: 'There is a local referendum in the village. How do you recommend Don Rafael vote?' },
            options: [
              { say: { es: 'A favor, pero solo en terrenos ya abandonados.', en: 'In favour, but only on land already abandoned.' }, then: { es: 'La empresa reduce el proyecto a la mitad. Se salvan los olivos centenarios.', en: 'The company halves the project. The century-old trees are saved.' } },
              { say: { es: 'En contra: el olivar es la identidad de la provincia.', en: 'Against: the olive grove is the province’s identity.' }, then: { es: 'Gana el «no». La empresa se va a otra región. Algunos vecinos no le hablan a Rafael en meses.', en: '“No” wins. The company goes to another region. Some neighbours don’t speak to Rafael for months.' } },
              { say: { es: 'A favor, si parte del dinero se invierte en el pueblo.', en: 'In favour, if part of the money is invested in the village.' }, then: { es: 'Con el dinero abren una escuela de oficios. Por primera vez en años, algunos jóvenes se quedan.', en: 'With the money they open a vocational school. For the first time in years, some young people stay.' } },
            ],
          },
          twist: { es: 'La nieta de Don Rafael, que estudia ingeniería, le enseña un proyecto en el que los paneles solares se colocan entre los olivos sin arrancar ninguno.', en: 'Don Rafael’s granddaughter, who studies engineering, shows him a project in which solar panels are placed between the olive trees without uprooting any.' },
          questions: [
            { q: { es: '¿Sacrificarías un paisaje por energía limpia?', en: 'Would you sacrifice a landscape for clean energy?' }, help: { es: 'Depende de… / Sí, porque… / No, porque…', en: 'It depends on… / Yes, because… / No, because…' }, follow: [{ es: '¿Y si fuera tu pueblo?', en: 'And if it were your town?' }, { es: '¿Qué alternativa hay?', en: 'What alternative is there?' }] },
            { q: { es: '¿Es justo culpar a quien vende su tierra por necesidad?', en: 'Is it fair to blame someone who sells their land out of need?' }, help: { es: 'Creo que no, porque… / Entiendo que…', en: 'I don’t think so, because… / I understand that…' }, follow: [{ es: '¿Qué harías en su lugar?', en: 'What would you do in their place?' }, { es: '¿Quién debería ayudar?', en: 'Who should help?' }] },
            { q: { es: '¿Eres nostálgico?', en: 'Are you nostalgic?' }, help: { es: 'Sí, echo de menos… / No, prefiero mirar al futuro.', en: 'Yes, I miss… / No, I prefer to look to the future.' }, follow: [{ es: '¿De qué época?', en: 'Of which time?' }, { es: '¿Es bueno o malo?', en: 'Is it good or bad?' }] },
            { q: { es: '¿Qué proyecto ha cambiado el paisaje de tu región?', en: 'What project has changed your region’s landscape?' }, help: { es: 'En mi región construyeron…', en: 'In my region they built…' }, follow: [{ es: '¿Estás a favor?', en: 'Are you in favour?' }, { es: '¿Qué dijo la gente?', en: 'What did people say?' }] },
          ],
          words: [{ es: 'la planta solar', en: 'the solar plant' }, { es: 'arrancar', en: 'to uproot' }, { es: 'el paro', en: 'unemployment (Spain)' }, { es: 'reprochar', en: 'to blame / reproach' }, { es: 'el paisaje', en: 'the landscape' }],
        },
      },
    },
    // ------------------------------------------------------------ the horse carriage in Seville
    {
      id: 'coche',
      name: { es: 'El coche de caballos', en: 'The horse carriage' },
      who: { name: 'Curro', role: { es: 'cochero', en: 'carriage driver' } },
      levels: {
        A0: {
          scene: { es: 'Es una plaza muy grande y bonita en Sevilla. Hay un coche con un caballo blanco. Curro es el cochero.', en: 'It is a very big and beautiful square in Seville. There is a carriage with a white horse. Curro is the driver.' },
          opener: { es: '¡Buenas! Soy Curro. Este es mi caballo, Lucero. ¿Subes?', en: 'Hi! I am Curro. This is my horse, Lucero. Are you getting in?' },
          decide: {
            ask: { es: '¿Adónde quieres ir?', en: 'Where do you want to go?' },
            options: [
              { say: { es: 'A la catedral.', en: 'To the cathedral.' }, then: { es: 'Curro dice: «Tiene una torre muy alta: la Giralda».', en: 'Curro says: “It has a very tall tower: the Giralda.”' } },
              { say: { es: 'Al río.', en: 'To the river.' }, then: { es: 'Curro dice: «Es el Guadalquivir. ¡Hay barcos!»', en: 'Curro says: “It is the Guadalquivir. There are boats!”' } },
              { say: { es: 'Al parque.', en: 'To the park.' }, then: { es: 'Curro dice: «Hay muchas palomas y flores».', en: 'Curro says: “There are many pigeons and flowers.”' } },
            ],
          },
          twist: { es: 'Lucero, el caballo, quiere una zanahoria. Curro te da una. ¿Qué haces?', en: 'Lucero, the horse, wants a carrot. Curro gives you one. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los caballos?', en: 'Do you like horses?' }, help: { es: 'Sí, mucho. / Me dan miedo.', en: 'Yes, a lot. / They scare me.' }, follow: [{ es: '¿Montaste alguna vez?', en: 'Have you ever ridden one?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Cómo vas al trabajo o a clase?', en: 'How do you go to work or class?' }, help: { es: 'Voy en coche / autobús / bici / a pie.', en: 'I go by car / bus / bike / on foot.' }, follow: [{ es: '¿Cuánto tardas?', en: 'How long does it take?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Hace calor en tu ciudad?', en: 'Is it hot in your city?' }, help: { es: 'Sí, mucho. / No, hace frío.', en: 'Yes, very. / No, it is cold.' }, follow: [{ es: '¿En qué mes?', en: 'In which month?' }, { es: '¿Qué haces con calor?', en: 'What do you do when it is hot?' }] },
            { q: { es: '¿Hay una plaza bonita en tu ciudad?', en: 'Is there a beautiful square in your city?' }, help: { es: 'Sí, la plaza de… / No.', en: 'Yes, … square. / No.' }, follow: [{ es: '¿Qué hay allí?', en: 'What is there?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
          ],
          words: [{ es: 'el caballo', en: 'the horse' }, { es: 'el coche de caballos', en: 'the horse carriage' }, { es: 'la plaza', en: 'the square' }, { es: 'el río', en: 'the river' }, { es: 'la zanahoria', en: 'the carrot' }],
        },
        A1: {
          scene: { es: 'La plaza de España de Sevilla es enorme, con canales, puentes y bancos de azulejos con las provincias de España. Curro lleva a turistas en su coche de caballos desde hace veinte años. Conoce todos los rincones de la ciudad.', en: 'Seville’s Plaza de España is huge, with canals, bridges and tiled benches showing the provinces of Spain. Curro has taken tourists around in his horse carriage for twenty years. He knows every corner of the city.' },
          opener: { es: 'Cada banco de azulejos es una provincia. Los turistas españoles siempre buscan el suyo para hacerse una foto. Y los extranjeros me preguntan si salen en alguna película. ¡Pues sí: aquí se rodó una de La guerra de las galaxias! ¿Tú qué película famosa has visto en un lugar real?', en: 'Each tiled bench is a province. Spanish tourists always look for theirs to take a photo. And foreigners ask me if it appears in any film. Well, yes: a Star Wars film was shot here! Which famous film have you seen in a real place?' },
          decide: {
            ask: { es: 'Curro te ofrece tres paseos. ¿Cuál eliges?', en: 'Curro offers you three rides. Which do you choose?' },
            options: [
              { say: { es: 'El paseo corto por el parque, veinte minutos.', en: 'The short ride through the park, twenty minutes.' }, then: { es: 'Ves patos, fuentes y una boda que se hace fotos en el puente.', en: 'You see ducks, fountains and a wedding party taking photos on the bridge.' } },
              { say: { es: 'El paseo largo por el centro, una hora.', en: 'The long ride through the centre, one hour.' }, then: { es: 'Curro te cuenta la historia de cada calle y te enseña dónde se come el mejor pescaíto frito.', en: 'Curro tells you the history of every street and shows you where to eat the best fried fish.' } },
              { say: { es: 'No subo: prefiero ir andando con Curro al lado.', en: 'I don’t get in: I prefer walking with Curro alongside.' }, then: { es: 'Curro se ríe: «Eres el primero en veinte años». Lucero también parece contento.', en: 'Curro laughs: “You are the first in twenty years.” Lucero also seems happy.' } },
            ],
          },
          twist: { es: 'Una pareja de novios pide subir al coche para hacerse fotos. Ya estás tú dentro. ¿Qué haces?', en: 'A bride and groom ask to get in the carriage for photos. You are already inside. What do you do?' },
          questions: [
            { q: { es: '¿Has visitado un lugar que salía en una película?', en: 'Have you visited a place that appeared in a film?' }, help: { es: 'Sí, fui a… que sale en… / No, nunca.', en: 'Yes, I went to… which appears in… / No, never.' }, follow: [{ es: '¿Era como en la película?', en: 'Was it like in the film?' }, { es: '¿Cuál te gustaría visitar?', en: 'Which would you like to visit?' }] },
            { q: { es: '¿Conoces bien tu ciudad?', en: 'Do you know your city well?' }, help: { es: 'Sí, conozco cada calle. / No mucho.', en: 'Yes, I know every street. / Not much.' }, follow: [{ es: '¿Cuál es tu rincón favorito?', en: 'What is your favourite corner?' }, { es: '¿Qué le enseñarías a un turista?', en: 'What would you show a tourist?' }] },
            { q: { es: '¿Has ido a una boda?', en: 'Have you been to a wedding?' }, help: { es: 'Sí, a la de mi… / No, nunca.', en: 'Yes, my…’s. / No, never.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Qué comieron?', en: 'What did you eat?' }] },
            { q: { es: '¿Prefieres visitar una ciudad andando o en transporte?', en: 'Do you prefer visiting a city on foot or by transport?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Has hecho un tour en bici?', en: 'Have you done a bike tour?' }, { es: '¿Y en autobús turístico?', en: 'And on a tourist bus?' }] },
          ],
          words: [{ es: 'el azulejo', en: 'the decorative tile' }, { es: 'el puente', en: 'the bridge' }, { es: 'el rincón', en: 'the corner / spot' }, { es: 'rodar (una película)', en: 'to shoot (a film)' }, { es: 'el pescaíto frito', en: 'fried fish (Andalusia)' }],
        },
        A2: {
          scene: { es: 'Es julio y hace cuarenta y cuatro grados a la sombra. Un grupo de turistas quiere un paseo de una hora al mediodía. Lucero está cansado y bebe mucha agua. Una ley nueva prohíbe trabajar con caballos con más de cuarenta grados, pero el termómetro de la plaza está roto.', en: 'It is July and forty-four degrees in the shade. A group of tourists wants a one-hour ride at midday. Lucero is tired and drinking a lot of water. A new law bans working with horses above forty degrees, but the thermometer in the square is broken.' },
          opener: { es: 'Este paseo es el dinero del día. Mis compañeros ya están trabajando porque dicen que no se sabe cuántos grados hace. Pero yo miro a Lucero y sé que hace demasiado calor. Llevamos doce años juntos. Si se pone malo, no me lo perdonaré. ¿Tú qué harías?', en: 'This ride is the day’s money. My colleagues are already working because they say nobody knows how hot it is. But I look at Lucero and I know it is too hot. We have been together twelve years. If he gets sick, I’ll never forgive myself. What would you do?' },
          decide: {
            ask: { es: 'Los turistas esperan. ¿Qué le aconsejas a Curro?', en: 'The tourists are waiting. What do you advise Curro?' },
            options: [
              { say: { es: 'Que les diga que vuelvan a las ocho de la tarde.', en: 'Tell them to come back at eight in the evening.' }, then: { es: 'Los turistas aceptan. Al atardecer, el paseo es más bonito y Lucero va contento.', en: 'The tourists agree. At sunset the ride is more beautiful and Lucero is happy.' } },
              { say: { es: 'Que haga un paseo corto, solo por la sombra.', en: 'Do a short ride, only in the shade.' }, then: { es: 'Hacen quince minutos por el parque. Gana menos dinero, pero los turistas dejan buena propina.', en: 'They do fifteen minutes in the park. He earns less, but the tourists leave a good tip.' } },
              { say: { es: 'Que no trabaje hoy y avise a sus compañeros.', en: 'Not work today and warn his colleagues.' }, then: { es: 'Algunos compañeros se enfadan, pero dos de ellos también llevan a sus caballos a la sombra.', en: 'Some colleagues get angry, but two of them also take their horses into the shade.' } },
            ],
          },
          twist: { es: 'Un inspector municipal aparece con un termómetro nuevo: marca cuarenta y cinco grados. Todos los cocheros que trabajan reciben una multa.', en: 'A city inspector shows up with a new thermometer: it reads forty-five degrees. All the drivers who are working get a fine.' },
          questions: [
            { q: { es: '¿Tienes o has tenido un animal?', en: 'Do you have or have you had a pet?' }, help: { es: 'Sí, tengo / tenía un… / No, nunca.', en: 'Yes, I have / had a… / No, never.' }, follow: [{ es: '¿Cómo se llamaba?', en: 'What was its name?' }, { es: '¿Cuántos años vivió?', en: 'How long did it live?' }] },
            { q: { es: '¿Qué haces cuando hace mucho calor?', en: 'What do you do when it is very hot?' }, help: { es: 'Me quedo en casa / Voy a la piscina…', en: 'I stay at home / I go to the pool…' }, follow: [{ es: '¿Duermes la siesta?', en: 'Do you take a nap?' }, { es: '¿Tienes aire acondicionado?', en: 'Do you have air conditioning?' }] },
            { q: { es: '¿Has perdido dinero por hacer lo correcto?', en: 'Have you lost money by doing the right thing?' }, help: { es: 'Sí, una vez… / No que recuerde.', en: 'Yes, once… / Not that I remember.' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Qué piensas de los animales que trabajan para el turismo?', en: 'What do you think of animals working in tourism?' }, help: { es: 'Me parece bien si… / No me gusta porque…', en: 'I think it is fine if… / I don’t like it because…' }, follow: [{ es: '¿Has subido a un caballo o camello?', en: 'Have you ridden a horse or camel?' }, { es: '¿Lo harías ahora?', en: 'Would you do it now?' }] },
          ],
          words: [{ es: 'a la sombra', en: 'in the shade' }, { es: 'el termómetro', en: 'the thermometer' }, { es: 'ponerse malo', en: 'to get sick' }, { es: 'la multa', en: 'the fine' }, { es: 'avisar', en: 'to warn' }],
        },
        B1: {
          scene: { es: 'Un partido político propone sustituir los coches de caballos por coches eléctricos con la misma forma, como han hecho otras ciudades. Las asociaciones de animales lo celebran. Los cocheros, como Curro, dicen que se perderá una tradición de siglos y un oficio que pasa de padres a hijos.', en: 'A political party proposes replacing horse carriages with electric carriages of the same shape, as other cities have done. Animal-rights groups celebrate. Drivers like Curro say a centuries-old tradition and a trade passed from fathers to sons will be lost.' },
          opener: { es: 'Mi padre fue cochero, y mi abuelo. Yo cuido a Lucero mejor que muchos cuidan a sus perros: veterinario cada mes, herraduras nuevas, descanso en verano. Pero entiendo que a algunos les duela ver un caballo entre el tráfico. Lo que no acepto es que lo decidan personas que nunca han tocado un caballo. ¿Una tradición tiene derecho a existir si hace sufrir, aunque sea poco, a un animal?', en: 'My father was a carriage driver, and so was my grandfather. I look after Lucero better than many people look after their dogs: the vet every month, new horseshoes, rest in summer. But I understand it hurts some people to see a horse in traffic. What I don’t accept is that it is decided by people who have never touched a horse. Does a tradition have the right to exist if it makes an animal suffer, even a little?' },
          decide: {
            ask: { es: 'Curro puede participar en un debate público. ¿Qué propuesta le recomiendas?', en: 'Curro can take part in a public debate. What proposal do you recommend?' },
            options: [
              { say: { es: 'Mantener los caballos con controles veterinarios públicos y estrictos.', en: 'Keep the horses with strict public veterinary checks.' }, then: { es: 'Se aprueba un reglamento nuevo. Algunos cocheros lo cumplen; otros dejan el oficio.', en: 'A new regulation is approved. Some drivers comply; others leave the trade.' } },
              { say: { es: 'Aceptar coches eléctricos, pero con ayudas para los cocheros.', en: 'Accept electric carriages, but with support for the drivers.' }, then: { es: 'Curro conduce un coche eléctrico. Visita a Lucero, ya jubilado, en una finca cada domingo.', en: 'Curro drives an electric carriage. He visits Lucero, now retired, on a farm every Sunday.' } },
              { say: { es: 'Limitar los caballos a la plaza y al parque, sin tráfico.', en: 'Limit horses to the square and park, away from traffic.' }, then: { es: 'Es una solución intermedia. Los turistas siguen subiendo, y los caballos ya no respiran humo.', en: 'It is a compromise. Tourists keep riding, and the horses no longer breathe exhaust fumes.' } },
            ],
          },
          twist: { es: 'En el debate, Curro descubre que la portavoz del partido que quiere prohibir los coches de caballos aprendió a montar con su padre, de niña.', en: 'At the debate, Curro discovers that the spokeswoman of the party that wants to ban horse carriages learned to ride with his father as a child.' },
          questions: [
            { q: { es: '¿Una tradición justifica el sufrimiento de un animal?', en: 'Does a tradition justify an animal’s suffering?' }, help: { es: 'Creo que no, porque… / Depende de…', en: 'I don’t think so, because… / It depends on…' }, follow: [{ es: '¿Qué tradición conoces así?', en: 'What tradition like that do you know?' }, { es: '¿Debería cambiar?', en: 'Should it change?' }] },
            { q: { es: '¿Quién debería decidir sobre un oficio: los que lo hacen o la sociedad?', en: 'Who should decide about a trade: those who do it or society?' }, help: { es: 'Me parece que… porque…', en: 'I think that… because…' }, follow: [{ es: '¿Y si no se ponen de acuerdo?', en: 'And if they don’t agree?' }, { es: '¿Conoces un caso?', en: 'Do you know a case?' }] },
            { q: { es: '¿Qué oficio de tu país está desapareciendo?', en: 'Which trade in your country is disappearing?' }, help: { es: 'Está desapareciendo el oficio de…', en: 'The trade of… is disappearing.' }, follow: [{ es: '¿Es una pena?', en: 'Is it a shame?' }, { es: '¿Qué lo sustituye?', en: 'What replaces it?' }] },
            { q: { es: '¿Has cambiado de opinión sobre los animales con los años?', en: 'Have you changed your mind about animals over the years?' }, help: { es: 'Sí, antes pensaba… / No, siempre he pensado…', en: 'Yes, I used to think… / No, I’ve always thought…' }, follow: [{ es: '¿Qué te hizo cambiar?', en: 'What made you change?' }, { es: '¿Comes carne?', en: 'Do you eat meat?' }] },
          ],
          words: [{ es: 'sustituir', en: 'to replace' }, { es: 'la herradura', en: 'the horseshoe' }, { es: 'sufrir', en: 'to suffer' }, { es: 'el reglamento', en: 'the regulation' }, { es: 'la finca', en: 'the farm / estate' }],
        },
      },
    },
    // ------------------------------------------------------------ the Cádiz carnival
    {
      id: 'carnaval',
      name: { es: 'El carnaval de Cádiz', en: 'The Cádiz carnival' },
      who: { name: 'Reyes', role: { es: 'chirigotera', en: 'carnival singer' } },
      levels: {
        A0: {
          scene: { es: 'Es carnaval en Cádiz. La gente lleva disfraces de colores. Hay grupos que cantan en la calle. Reyes canta en un grupo.', en: 'It is carnival in Cádiz. People wear colourful costumes. There are groups singing in the street. Reyes sings in a group.' },
          opener: { es: '¡Hola! Soy Reyes. ¿Dónde está tu disfraz?', en: 'Hi! I am Reyes. Where is your costume?' },
          decide: {
            ask: { es: 'Reyes tiene tres disfraces. ¿Cuál te pones?', en: 'Reyes has three costumes. Which do you put on?' },
            options: [
              { say: { es: 'El de pirata.', en: 'The pirate.' }, then: { es: 'Reyes dice: «¡Qué bien te queda! Ahora di: ¡Arrr!»', en: 'Reyes says: “It suits you! Now say: Arrr!”' } },
              { say: { es: 'El de payaso.', en: 'The clown.' }, then: { es: 'Reyes dice: «¡Qué gracioso! Tienes la nariz roja».', en: 'Reyes says: “How funny! You have a red nose.”' } },
              { say: { es: 'El de pescado.', en: 'The fish.' }, then: { es: 'Reyes dice: «¡Perfecto! Cádiz es una ciudad de mar».', en: 'Reyes says: “Perfect! Cádiz is a seaside city.”' } },
            ],
          },
          twist: { es: 'El grupo canta una canción muy graciosa. Todos se ríen. Tú no entiendes. ¿Qué haces?', en: 'The group sings a very funny song. Everyone laughs. You don’t understand. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los disfraces?', en: 'Do you like costumes?' }, help: { es: 'Sí, mucho. / No, me da vergüenza.', en: 'Yes, a lot. / No, I am embarrassed.' }, follow: [{ es: '¿Cuál fue tu mejor disfraz?', en: 'What was your best costume?' }, { es: '¿Cuándo te disfrazas?', en: 'When do you dress up?' }] },
            { q: { es: '¿Te gusta cantar?', en: 'Do you like singing?' }, help: { es: 'Sí, en la ducha. / No, canto muy mal.', en: 'Yes, in the shower. / No, I sing very badly.' }, follow: [{ es: '¿Qué cantas?', en: 'What do you sing?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Hay carnaval en tu país?', en: 'Is there carnival in your country?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Cómo es?', en: 'What is it like?' }, { es: '¿Vas?', en: 'Do you go?' }] },
            { q: { es: '¿Qué te hace reír?', en: 'What makes you laugh?' }, help: { es: 'Me hacen reír los chistes / mis amigos…', en: 'Jokes / my friends make me laugh…' }, follow: [{ es: '¿Sabes un chiste?', en: 'Do you know a joke?' }, { es: '¿Ríes mucho?', en: 'Do you laugh a lot?' }] },
          ],
          words: [{ es: 'el carnaval', en: 'carnival' }, { es: 'el disfraz', en: 'the costume' }, { es: 'cantar', en: 'to sing' }, { es: 'gracioso', en: 'funny' }, { es: 'el payaso', en: 'the clown' }],
        },
        A1: {
          scene: { es: 'El carnaval de Cádiz es famoso por sus chirigotas: grupos que cantan canciones de humor sobre la política y la vida diaria. Reyes y sus amigas preparan las canciones durante todo el año. Este febrero cantan en las calles del barrio de la Viña.', en: 'The Cádiz carnival is famous for its chirigotas: groups that sing funny songs about politics and daily life. Reyes and her friends prepare their songs all year. This February they are singing in the streets of the Viña neighbourhood.' },
          opener: { es: 'En Cádiz, el carnaval es serio: escribimos letras durante meses. Aquí nos reímos de todo, sobre todo de nosotros mismos. Este año nuestra chirigota va de un grupo de abuelas que quieren ser influencers. ¿De qué te reirías tú en una canción?', en: 'In Cádiz, carnival is serious: we write lyrics for months. Here we laugh at everything, especially ourselves. This year our chirigota is about a group of grandmothers who want to be influencers. What would you make fun of in a song?' },
          decide: {
            ask: { es: 'Reyes necesita una idea para una estrofa nueva. ¿Qué propones?', en: 'Reyes needs an idea for a new verse. What do you suggest?' },
            options: [
              { say: { es: 'Una canción sobre el precio de los pisos.', en: 'A song about the price of flats.' }, then: { es: 'El público aplaude mucho: a todos les pasa. Una señora llora de risa.', en: 'The audience applauds loudly: it happens to everyone. A woman cries with laughter.' } },
              { say: { es: 'Una canción sobre los turistas que no entienden nada.', en: 'A song about tourists who don’t understand anything.' }, then: { es: 'Reyes te mira y se ríe: «¿Como tú?». Te sacan a cantar el estribillo.', en: 'Reyes looks at you and laughs: “Like you?” They get you to sing the chorus.' } },
              { say: { es: 'Una canción sobre el tiempo de Cádiz.', en: 'A song about Cádiz weather.' }, then: { es: 'Escriben una estrofa sobre el viento de levante que lo vuela todo. Es un éxito.', en: 'They write a verse about the easterly wind that blows everything away. It is a hit.' } },
            ],
          },
          twist: { es: 'Un político del ayuntamiento está entre el público justo cuando cantan sobre él. ¿Qué pasa?', en: 'A city councillor is in the audience just when they sing about him. What happens?' },
          questions: [
            { q: { es: '¿Te ríes de ti mismo?', en: 'Do you laugh at yourself?' }, help: { es: 'Sí, mucho. / No, me cuesta.', en: 'Yes, a lot. / No, I find it hard.' }, follow: [{ es: '¿Por ejemplo?', en: 'For example?' }, { es: '¿Es importante?', en: 'Is it important?' }] },
            { q: { es: '¿Qué fiesta preparas durante mucho tiempo?', en: 'What celebration do you prepare for a long time?' }, help: { es: 'Preparo… desde…', en: 'I prepare… from…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
            { q: { es: '¿De qué tema harías una canción de humor?', en: 'What topic would you make a funny song about?' }, help: { es: 'Haría una canción sobre…', en: 'I would make a song about…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Quién se enfadaría?', en: 'Who would get angry?' }] },
            { q: { es: '¿Cómo es el tiempo en tu ciudad en febrero?', en: 'What is the weather like in your city in February?' }, help: { es: 'En febrero hace…', en: 'In February it is…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
          ],
          words: [{ es: 'la chirigota', en: 'a comic carnival singing group' }, { es: 'la letra', en: 'the lyrics' }, { es: 'la estrofa', en: 'the verse' }, { es: 'el estribillo', en: 'the chorus' }, { es: 'reírse de', en: 'to laugh at' }],
        },
        A2: {
          scene: { es: 'La chirigota de Reyes llega a la final del concurso del Gran Teatro Falla, el más importante del carnaval. Pero una de sus canciones se burla de un futbolista del Cádiz, y la afición del equipo está muy enfadada. Les piden que la quiten.', en: 'Reyes’s chirigota reaches the final of the Gran Teatro Falla competition, the most important of the carnival. But one of their songs makes fun of a Cádiz football player, and the team’s fans are very angry. They are asked to drop it.' },
          opener: { es: 'La canción no es cruel: se ríe de que falló un penalti decisivo, como nos reímos de todo el mundo. Pero el jugador lo está pasando mal y algunos aficionados nos han escrito mensajes muy feos. Si la quitamos, parece que tenemos miedo. Si la cantamos, quizás le hacemos daño a alguien. ¿Tú qué harías?', en: 'The song isn’t cruel: it laughs about him missing a decisive penalty, the way we laugh at everyone. But the player is having a hard time and some fans have sent us very nasty messages. If we drop it, it looks like we’re scared. If we sing it, maybe we’ll hurt someone. What would you do?' },
          decide: {
            ask: { es: 'Faltan dos días para la final. ¿Qué le aconsejas a Reyes?', en: 'Two days to go until the final. What do you advise Reyes?' },
            options: [
              { say: { es: 'Que hablen con el futbolista antes de decidir.', en: 'Talk to the player before deciding.' }, then: { es: 'El futbolista se ríe y les pide salir en el escenario a cantar la última frase. El teatro se viene abajo.', en: 'The player laughs and asks to come on stage to sing the last line. The theatre goes wild.' } },
              { say: { es: 'Que cambien la canción por otra sobre los aficionados enfadados.', en: 'Swap the song for one about the angry fans.' }, then: { es: 'La nueva canción es aún más graciosa. Hasta los aficionados aplauden.', en: 'The new song is even funnier. Even the fans applaud.' } },
              { say: { es: 'Que la canten tal cual: el carnaval es libre.', en: 'Sing it as it is: carnival is free.' }, then: { es: 'Hay pitos y aplausos a la vez. No ganan, pero todo el mundo habla de ellas.', en: 'There is booing and applause at the same time. They don’t win, but everyone talks about them.' } },
            ],
          },
          twist: { es: 'Después de la final, la madre del futbolista se acerca a Reyes y le pide la letra de la canción para enmarcarla.', en: 'After the final, the football player’s mother comes up to Reyes and asks for the song’s lyrics to frame them.' },
          questions: [
            { q: { es: '¿Hay límites para el humor?', en: 'Are there limits to humour?' }, help: { es: 'Creo que sí, por ejemplo… / No, porque…', en: 'I think so, for example… / No, because…' }, follow: [{ es: '¿Quién los pone?', en: 'Who sets them?' }, { es: '¿Te ha ofendido un chiste?', en: 'Has a joke ever offended you?' }] },
            { q: { es: '¿Te has reído alguna vez de alguien y luego te has arrepentido?', en: 'Have you ever laughed at someone and then regretted it?' }, help: { es: 'Sí, una vez… / No que recuerde.', en: 'Yes, once… / Not that I remember.' }, follow: [{ es: '¿Le pediste perdón?', en: 'Did you apologise?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Cómo reaccionas cuando alguien se ríe de ti?', en: 'How do you react when someone laughs at you?' }, help: { es: 'Me río también / Me molesta…', en: 'I laugh too / It bothers me…' }, follow: [{ es: '¿Depende de quién sea?', en: 'Does it depend on who it is?' }, { es: '¿Y en internet?', en: 'And online?' }] },
            { q: { es: '¿Has recibido mensajes desagradables en internet?', en: 'Have you received nasty messages online?' }, help: { es: 'Sí, una vez… / No, por suerte.', en: 'Yes, once… / No, luckily.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Qué aconsejas?', en: 'What do you advise?' }] },
          ],
          words: [{ es: 'burlarse de', en: 'to make fun of' }, { es: 'el penalti', en: 'the penalty (football)' }, { es: 'la afición', en: 'the fans' }, { es: 'los pitos', en: 'booing / whistles' }, { es: 'enmarcar', en: 'to frame' }],
        },
        B1: {
          scene: { es: 'Una televisión nacional quiere retransmitir el carnaval de Cádiz en directo, con publicidad y un jurado de famosos. Ofrece mucho dinero a las agrupaciones. Muchos carnavaleros temen que el carnaval se convierta en un concurso de televisión y pierda su crítica política, que siempre ha sido libre y popular.', en: 'A national TV channel wants to broadcast the Cádiz carnival live, with advertising and a celebrity jury. It offers the groups a lot of money. Many carnival performers fear it will turn into a TV contest and lose its political satire, which has always been free and popular.' },
          opener: { es: 'El carnaval de Cádiz sobrevivió a una dictadura que lo prohibió. Durante años se cantaba a escondidas, en las casas. Por eso para nosotros no es solo una fiesta: es la voz del pueblo. Con la tele, mis compañeras podrían ganar en un mes lo que no ganan en un año. Pero me pregunto si nos atreveremos a reírnos de un patrocinador. ¿Se puede ser crítico cuando alguien te paga?', en: 'The Cádiz carnival survived a dictatorship that banned it. For years people sang in secret, in their homes. That’s why for us it is not just a celebration: it is the people’s voice. With TV, my friends could earn in a month what they don’t earn in a year. But I wonder whether we will dare make fun of a sponsor. Can you be critical when someone is paying you?' },
          decide: {
            ask: { es: 'Las agrupaciones votan si aceptan la oferta. ¿Qué le recomiendas a Reyes?', en: 'The groups vote on whether to accept the offer. What do you recommend to Reyes?' },
            options: [
              { say: { es: 'Aceptar, pero con un contrato que garantice libertad total en las letras.', en: 'Accept, but with a contract guaranteeing total freedom in the lyrics.' }, then: { es: 'La televisión firma. En la segunda semana, una chirigota se ríe del canal en directo. Nadie la censura.', en: 'The channel signs. In the second week, a chirigota mocks the channel live. Nobody censors it.' } },
              { say: { es: 'Rechazar y retransmitir ellos mismos por internet.', en: 'Reject it and stream it themselves online.' }, then: { es: 'Ganan poco dinero, pero miles de gaditanos en el extranjero lo ven desde su casa.', en: 'They earn little money, but thousands of people from Cádiz abroad watch from home.' } },
              { say: { es: 'Aceptar solo el concurso del teatro y dejar la calle libre.', en: 'Accept only the theatre competition and keep the street free.' }, then: { es: 'El teatro se vuelve más comercial, pero la calle recupera el espíritu de siempre.', en: 'The theatre becomes more commercial, but the street regains its old spirit.' } },
            ],
          },
          twist: { es: 'La empresa patrocinadora principal resulta ser la misma inmobiliaria de la que Reyes se burlaba en su canción sobre el precio de los pisos.', en: 'The main sponsoring company turns out to be the same real-estate firm Reyes mocked in her song about the price of flats.' },
          questions: [
            { q: { es: '¿Se puede ser crítico cuando alguien te paga?', en: 'Can you be critical when someone is paying you?' }, help: { es: 'Creo que sí, si… / Es difícil, porque…', en: 'I think so, if… / It is hard, because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Y en el periodismo?', en: 'And in journalism?' }] },
            { q: { es: '¿El humor puede cambiar la política?', en: 'Can humour change politics?' }, help: { es: 'Sí, porque… / No, solo…', en: 'Yes, because… / No, it only…' }, follow: [{ es: '¿Qué humorista de tu país hace crítica?', en: 'Which comedian in your country is critical?' }, { es: '¿Ha tenido problemas?', en: 'Have they had problems?' }] },
            { q: { es: '¿Una fiesta popular pierde algo al hacerse famosa?', en: 'Does a popular festival lose something when it becomes famous?' }, help: { es: 'Pierde… pero gana…', en: 'It loses… but gains…' }, follow: [{ es: '¿Qué fiesta conoces así?', en: 'Which festival do you know like that?' }, { es: '¿Irías igual?', en: 'Would you still go?' }] },
            { q: { es: '¿Qué tradición de tu país sobrevivió a una prohibición?', en: 'Which tradition in your country survived a ban?' }, help: { es: 'En mi país…', en: 'In my country…' }, follow: [{ es: '¿Cómo sobrevivió?', en: 'How did it survive?' }, { es: '¿Qué significa hoy?', en: 'What does it mean today?' }] },
          ],
          words: [{ es: 'retransmitir', en: 'to broadcast' }, { es: 'la agrupación', en: 'the group / troupe' }, { es: 'a escondidas', en: 'in secret' }, { es: 'el patrocinador', en: 'the sponsor' }, { es: 'la inmobiliaria', en: 'the real-estate company' }],
        },
      },
    },
  ],
};
