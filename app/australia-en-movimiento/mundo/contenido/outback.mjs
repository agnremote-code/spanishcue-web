// El Outback · Uluru with an Anangu guide, the Royal Flying Doctor Service in Alice Springs,
// the Mindil Beach night market in Darwin, a crocodile ranger in Kakadu and the School of the
// Air. Five places, four levels each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'outback',
  spots: [
    // ------------------------------------------------------------ Uluru
    {
      id: 'uluru',
      name: { es: 'Uluru al atardecer', en: 'Uluru at sunset' },
      who: { name: 'Leroy', role: { es: 'guía anangu', en: 'Anangu guide' } },
      levels: {
        A0: {
          scene: { es: 'La tierra es roja. Hay una roca enorme en el desierto. Se llama Uluru. Leroy es guía. Tiene un sombrero y una camisa azul.', en: 'The earth is red. There is a huge rock in the desert. It is called Uluru. Leroy is a guide. He has a hat and a blue shirt.' },
          opener: { es: '¡Hola! Soy Leroy. Esta roca es muy importante para mi pueblo. ¿Caminamos?', en: 'Hello! I am Leroy. This rock is very important for my people. Shall we walk?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Camino alrededor de la roca.', en: 'I walk around the rock.' }, then: { es: 'Son diez kilómetros. Ves agua, pinturas antiguas y pájaros.', en: 'It is ten kilometres. You see water, old paintings and birds.' } },
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'Leroy dice: «Aquí sí. Allí no, es un lugar sagrado».', en: 'Leroy says: “Here, yes. Over there, no, it is a sacred place.”' } },
              { say: { es: 'Escucho una historia.', en: 'I listen to a story.' }, then: { es: 'Leroy cuenta la historia de una serpiente gigante. Escuchas en silencio.', en: 'Leroy tells the story of a giant snake. You listen in silence.' } },
            ],
          },
          twist: { es: 'Un turista quiere subir a la roca. Leroy dice: «No, por favor». ¿Qué le dices al turista?', en: 'A tourist wants to climb the rock. Leroy says: “No, please.” What do you say to the tourist?' },
          questions: [
            { q: { es: '¿Te gusta el desierto?', en: 'Do you like the desert?' }, help: { es: 'Sí, mucho. / No, hace calor.', en: 'Yes, a lot. / No, it is hot.' }, follow: [{ es: '¿Conoces uno?', en: 'Do you know one?' }, { es: '¿Cuál?', en: 'Which one?' }] },
            { q: { es: '¿Caminas mucho?', en: 'Do you walk a lot?' }, help: { es: 'Sí, todos los días. / No, poco.', en: 'Yes, every day. / No, a little.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Hay un lugar especial en tu país?', en: 'Is there a special place in your country?' }, help: { es: 'Sí, se llama… / No sé.', en: 'Yes, it is called… / I don’t know.' }, follow: [{ es: '¿Cómo es?', en: 'What is it like?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿Te gustan las historias antiguas?', en: 'Do you like old stories?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Quién te cuenta historias?', en: 'Who tells you stories?' }, { es: '¿Sabes una?', en: 'Do you know one?' }] },
          ],
          words: [{ es: 'la roca', en: 'the rock' }, { es: 'el desierto', en: 'the desert' }, { es: 'rojo', en: 'red' }, { es: 'sagrado', en: 'sacred' }, { es: 'la serpiente', en: 'the snake' }],
        },
        A1: {
          scene: { es: 'Son las seis de la tarde. Los autobuses de turistas llegan al mirador para ver el atardecer. La roca cambia de color: naranja, rojo, morado. Leroy trabaja como guía desde hace diez años. Su abuela le enseñó las historias de este lugar.', en: 'It is six in the evening. Tourist buses arrive at the viewpoint to watch the sunset. The rock changes colour: orange, red, purple. Leroy has worked as a guide for ten years. His grandmother taught him the stories of this place.' },
          opener: { es: 'Mi pueblo, los anangu, vive aquí desde hace más de treinta mil años. Para nosotros Uluru no es una montaña bonita: es como una biblioteca. Cada piedra y cada cueva tiene una historia. Desde 2019 nadie puede subir a la roca. Algunos turistas se enfadan. ¿Tú qué piensas?', en: 'My people, the Anangu, have lived here for more than thirty thousand years. For us Uluru isn’t a pretty mountain: it’s like a library. Every stone and every cave has a story. Since 2019 nobody can climb the rock. Some tourists get angry. What do you think?' },
          decide: {
            ask: { es: 'Un turista dice: «Pagué mucho dinero para venir y quiero subir». ¿Qué le respondes?', en: 'A tourist says: “I paid a lot of money to come and I want to climb.” What do you reply?' },
            options: [
              { say: { es: 'Le explico que es un lugar sagrado.', en: 'I explain that it is a sacred place.' }, then: { es: 'El turista escucha. Al final dice: «No lo sabía. Gracias».', en: 'The tourist listens. In the end he says: “I didn’t know. Thank you.”' } },
              { say: { es: 'Le recomiendo la caminata alrededor.', en: 'I recommend the walk around it.' }, then: { es: 'Al día siguiente vuelve feliz: «¡Es mejor que subir!».', en: 'The next day he comes back happy: “It’s better than climbing!”' } },
              { say: { es: 'Le digo que pregunte a Leroy.', en: 'I tell him to ask Leroy.' }, then: { es: 'Leroy le cuenta la historia de la roca. El turista saca la libreta y escribe.', en: 'Leroy tells him the story of the rock. The tourist takes out a notebook and writes.' } },
            ],
          },
          twist: { es: 'Una empresa quiere construir un hotel de lujo con vista a la roca. Daría trabajo a muchas personas del pueblo. ¿Es buena idea?', en: 'A company wants to build a luxury hotel with a view of the rock. It would give work to many local people. Is it a good idea?' },
          questions: [
            { q: { es: '¿Quién te enseñó las historias de tu familia?', en: 'Who taught you your family’s stories?' }, help: { es: 'Mi abuela / mi padre…', en: 'My grandmother / my father…' }, follow: [{ es: '¿Recuerdas una?', en: 'Do you remember one?' }, { es: '¿La cuentas a otros?', en: 'Do you tell it to others?' }] },
            { q: { es: '¿Viste un atardecer muy bonito?', en: 'Have you seen a very beautiful sunset?' }, help: { es: 'Sí, en… / No recuerdo.', en: 'Yes, in… / I don’t remember.' }, follow: [{ es: '¿Con quién estabas?', en: 'Who were you with?' }, { es: '¿Sacaste fotos?', en: 'Did you take photos?' }] },
            { q: { es: '¿Respetas las reglas cuando viajas?', en: 'Do you follow the rules when you travel?' }, help: { es: 'Sí, siempre. / Casi siempre.', en: 'Yes, always. / Almost always.' }, follow: [{ es: '¿Alguna regla te pareció rara?', en: 'Did any rule seem strange to you?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Qué lugar de tu país tiene muchos turistas?', en: 'Which place in your country has a lot of tourists?' }, help: { es: 'Hay muchos turistas en…', en: 'There are many tourists in…' }, follow: [{ es: '¿Es bueno para la gente de allí?', en: 'Is it good for the people there?' }, { es: '¿Vas tú?', en: 'Do you go?' }] },
          ],
          words: [{ es: 'el atardecer', en: 'the sunset' }, { es: 'el mirador', en: 'the viewpoint' }, { es: 'la cueva', en: 'the cave' }, { es: 'subir', en: 'to climb' }, { es: 'el pueblo', en: 'the people / community' }],
        },
        A2: {
          scene: { es: 'Esta mañana un guardaparques encontró una piedra en el buzón del centro cultural. Venía con una carta de una mujer alemana: «Me llevé esta piedra de Uluru hace veinte años. Desde entonces tengo mala suerte. Por favor, devuélvanla». Cada año llegan cientos de cartas así. Leroy tiene que decidir qué hacer con ellas.', en: 'This morning a ranger found a stone in the cultural centre’s mailbox. It came with a letter from a German woman: “I took this stone from Uluru twenty years ago. Since then I have had bad luck. Please return it.” Hundreds of letters like this arrive every year. Leroy has to decide what to do with them.' },
          opener: { es: 'Las llamamos «piedras arrepentidas». La gente cree que la roca la castiga, pero nosotros nunca dijimos eso. Lo que sí decimos es que las cosas tienen su lugar. Algunas cartas son muy tristes: hablan de enfermedades, de divorcios. Mi abuela decía que había que leerlas todas. Mi jefe dice que no tenemos tiempo. ¿Qué harías tú con tantas cartas?', en: 'We call them “sorry rocks”. People believe the rock punishes them, but we never said that. What we do say is that things have their place. Some letters are very sad: they talk about illnesses, divorces. My grandmother said we had to read them all. My boss says we don’t have time. What would you do with so many letters?' },
          decide: {
            ask: { es: '¿Qué propones?', en: 'What do you propose?' },
            options: [
              { say: { es: 'Hacer una exposición con las cartas.', en: 'Make an exhibition with the letters.' }, then: { es: 'La exposición es un éxito. Muchos visitantes deciden no llevarse nada.', en: 'The exhibition is a success. Many visitors decide not to take anything.' } },
              { say: { es: 'Devolver las piedras sin leer las cartas.', en: 'Return the stones without reading the letters.' }, then: { es: 'Leroy lleva las piedras al desierto en silencio. Dice que así está bien.', en: 'Leroy takes the stones to the desert in silence. He says that is fine.' } },
              { say: { es: 'Contestar algunas cartas.', en: 'Answer some of the letters.' }, then: { es: 'La mujer alemana responde emocionada. Promete volver a Uluru para conocer a Leroy.', en: 'The German woman replies, moved. She promises to come back to Uluru to meet Leroy.' } },
            ],
          },
          twist: { es: 'Una tienda de recuerdos vende «arena auténtica de Uluru» en botellitas. Dicen que es arena de otro lugar, pero los turistas no lo saben. ¿Es un problema?', en: 'A souvenir shop sells “authentic Uluru sand” in little bottles. They say it’s sand from another place, but the tourists don’t know. Is it a problem?' },
          questions: [
            { q: { es: '¿Te llevaste algo de un lugar que visitaste?', en: 'Have you taken something from a place you visited?' }, help: { es: 'Sí, una piedra / una concha… / No, nunca.', en: 'Yes, a stone / a shell… / No, never.' }, follow: [{ es: '¿Todavía lo tienes?', en: 'Do you still have it?' }, { es: '¿Lo devolverías?', en: 'Would you return it?' }] },
            { q: { es: '¿Crees en la mala suerte?', en: 'Do you believe in bad luck?' }, help: { es: 'Sí, un poco. / No, para nada.', en: 'Yes, a little. / No, not at all.' }, follow: [{ es: '¿Tienes algún amuleto?', en: 'Do you have a lucky charm?' }, { es: '¿Qué te da mala suerte?', en: 'What brings you bad luck?' }] },
            { q: { es: '¿Escribiste una carta para pedir perdón?', en: 'Have you written a letter to say sorry?' }, help: { es: 'Sí, a… / No, prefiero hablar.', en: 'Yes, to… / No, I prefer to talk.' }, follow: [{ es: '¿Te contestaron?', en: 'Did they reply?' }, { es: '¿Fue fácil?', en: 'Was it easy?' }] },
            { q: { es: '¿Compras recuerdos cuando viajas?', en: 'Do you buy souvenirs when you travel?' }, help: { es: 'Sí, siempre compro… / No, no me gustan.', en: 'Yes, I always buy… / No, I don’t like them.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Dónde está ahora?', en: 'Where is it now?' }] },
          ],
          words: [{ es: 'el buzón', en: 'the mailbox' }, { es: 'arrepentido', en: 'sorry / regretful' }, { es: 'castigar', en: 'to punish' }, { es: 'devolver', en: 'to return' }, { es: 'el recuerdo', en: 'the souvenir' }],
        },
        B1: {
          scene: { es: 'El parque nacional de Uluru-Kata Tjuta pertenece legalmente a los anangu desde 1985, pero lo administran junto con el gobierno. Ahora el consejo debe votar una propuesta: limitar la entrada a mil visitantes por día y cobrar el triple. Leroy forma parte del consejo y el voto está empatado.', en: 'Uluru-Kata Tjuta National Park has legally belonged to the Anangu since 1985, but they manage it jointly with the government. Now the board must vote on a proposal: limit entry to a thousand visitors a day and charge three times as much. Leroy sits on the board and the vote is tied.' },
          opener: { es: 'El turismo nos dio trabajo, escuelas, una clínica. Antes los jóvenes se iban a la ciudad; ahora algunos vuelven para ser guías. Pero también trajo basura, ruido y gente que no escucha. Si limitamos la entrada, protegemos la roca y la cultura, pero perdemos ingresos y solo vendrán los ricos. Si no la limitamos, en diez años esto será un parque de atracciones. Mi voto decide. ¿Cómo se equilibra la protección de un lugar con el derecho de todos a conocerlo?', en: 'Tourism gave us jobs, schools, a clinic. Young people used to leave for the city; now some come back to be guides. But it also brought rubbish, noise and people who don’t listen. If we limit entry, we protect the rock and the culture, but we lose income and only the rich will come. If we don’t, in ten years this will be a theme park. My vote decides. How do you balance protecting a place with everyone’s right to see it?' },
          decide: {
            ask: { es: '¿Qué le recomiendas votar a Leroy?', en: 'How do you advise Leroy to vote?' },
            options: [
              { say: { es: 'A favor del límite, con entradas baratas para estudiantes.', en: 'For the limit, with cheap tickets for students.' }, then: { es: 'La propuesta pasa con ese cambio. Los hoteles protestan, pero las escuelas aplauden.', en: 'The proposal passes with that change. The hotels protest, but the schools applaud.' } },
              { say: { es: 'En contra: mejor educar a los visitantes que excluirlos.', en: 'Against: better to educate visitors than to exclude them.' }, then: { es: 'Se crea un curso obligatorio de veinte minutos antes de entrar. Las quejas bajan a la mitad.', en: 'A compulsory twenty-minute course before entry is created. Complaints fall by half.' } },
              { say: { es: 'Pedir una consulta a toda la comunidad antes de votar.', en: 'Ask for a consultation with the whole community before voting.' }, then: { es: 'La consulta tarda meses, pero la decisión final tiene el apoyo de casi todos.', en: 'The consultation takes months, but the final decision has almost everyone’s support.' } },
            ],
          },
          twist: { es: 'Una plataforma de streaming ofrece mucho dinero por filmar una serie en Uluru, incluyendo ceremonias privadas. Ese dinero pagaría la clínica durante veinte años. ¿Hay cosas que no deberían venderse?', en: 'A streaming platform offers a lot of money to film a series at Uluru, including private ceremonies. That money would fund the clinic for twenty years. Are there things that shouldn’t be sold?' },
          questions: [
            { q: { es: '¿Limitarías la entrada a algún lugar muy visitado de tu país?', en: 'Would you limit entry to a very visited place in your country?' }, help: { es: 'Sí, limitaría… porque… / No, porque…', en: 'Yes, I would limit… because… / No, because…' }, follow: [{ es: '¿Cómo lo harías?', en: 'How would you do it?' }, { es: '¿Quién saldría perdiendo?', en: 'Who would lose out?' }] },
            { q: { es: '¿El turismo mejoró o empeoró algún lugar que conoces?', en: 'Has tourism improved or worsened a place you know?' }, help: { es: 'Lo mejoró porque… / Lo empeoró porque…', en: 'It improved it because… / It made it worse because…' }, follow: [{ es: '¿Qué cambió más?', en: 'What changed most?' }, { es: '¿Qué opinan los vecinos?', en: 'What do the locals think?' }] },
            { q: { es: '¿Hay tradiciones de tu cultura que no deberían mostrarse a los turistas?', en: 'Are there traditions in your culture that shouldn’t be shown to tourists?' }, help: { es: 'Creo que… debería ser privado porque…', en: 'I think… should be private because…' }, follow: [{ es: '¿Quién debería decidirlo?', en: 'Who should decide?' }, { es: '¿Viste alguna convertida en espectáculo?', en: 'Have you seen one turned into a show?' }] },
            { q: { es: '¿Alguna vez tu opinión decidió algo importante?', en: 'Has your opinion ever decided something important?' }, help: { es: 'Sí, cuando… / No, pero me gustaría…', en: 'Yes, when… / No, but I’d like to…' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Volverías a decidir lo mismo?', en: 'Would you decide the same again?' }] },
          ],
          words: [{ es: 'pertenecer', en: 'to belong' }, { es: 'empatado', en: 'tied' }, { es: 'los ingresos', en: 'income' }, { es: 'equilibrar', en: 'to balance' }, { es: 'la consulta', en: 'the consultation' }],
        },
      },
    },
    // ------------------------------------------------------------ the flying doctor
    {
      id: 'doctora',
      name: { es: 'Los médicos voladores', en: 'The flying doctors' },
      who: { name: 'Hannah', role: { es: 'médica del aire', en: 'flying doctor' } },
      levels: {
        A0: {
          scene: { es: 'Es un aeropuerto pequeño en Alice Springs. Hay un avión blanco con una cruz roja. Hannah es médica. Tiene un uniforme azul y una mochila.', en: 'It is a small airport in Alice Springs. There is a white plane with a red cross. Hannah is a doctor. She has a blue uniform and a backpack.' },
          opener: { es: '¡Hola! Soy Hannah. Soy médica, pero trabajo en un avión. ¿Vienes conmigo?', en: 'Hello! I am Hannah. I am a doctor, but I work on a plane. Are you coming with me?' },
          decide: {
            ask: { es: '¿Qué llevas al avión?', en: 'What do you take to the plane?' },
            options: [
              { say: { es: 'Agua.', en: 'Water.' }, then: { es: 'Muy bien. En el desierto el agua es lo más importante.', en: 'Very good. In the desert water is the most important thing.' } },
              { say: { es: 'La mochila de Hannah.', en: 'Hannah’s backpack.' }, then: { es: 'Pesa mucho. Tiene medicinas y vendas.', en: 'It is very heavy. It has medicines and bandages.' } },
              { say: { es: 'Un sombrero.', en: 'A hat.' }, then: { es: 'Hannah ríe: «¡Bien! Allí hace cuarenta grados».', en: 'Hannah laughs: “Good! It is forty degrees there.”' } },
            ],
          },
          twist: { es: 'Suena el teléfono. Un niño está enfermo en una granja muy lejos. ¿Vamos ahora?', en: 'The phone rings. A child is sick on a farm very far away. Shall we go now?' },
          questions: [
            { q: { es: '¿Te gustan los aviones?', en: 'Do you like planes?' }, help: { es: 'Sí, mucho. / No, tengo miedo.', en: 'Yes, a lot. / No, I am scared.' }, follow: [{ es: '¿Viajas en avión?', en: 'Do you travel by plane?' }, { es: '¿Adónde?', en: 'Where to?' }] },
            { q: { es: '¿Hay un hospital cerca de tu casa?', en: 'Is there a hospital near your house?' }, help: { es: 'Sí, muy cerca. / No, está lejos.', en: 'Yes, very close. / No, it is far.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Es grande?', en: 'Is it big?' }] },
            { q: { es: '¿Tu familia tiene un médico?', en: 'Does your family have a doctor?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, he/she is called… / No.' }, follow: [{ es: '¿Es simpático?', en: 'Is he/she nice?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like the heat?' }, help: { es: 'Sí, me encanta. / No, prefiero el frío.', en: 'Yes, I love it. / No, I prefer the cold.' }, follow: [{ es: '¿Qué haces cuando hace calor?', en: 'What do you do when it is hot?' }, { es: '¿Y en verano?', en: 'And in summer?' }] },
          ],
          words: [{ es: 'el avión', en: 'the plane' }, { es: 'la médica', en: 'the (female) doctor' }, { es: 'la medicina', en: 'the medicine' }, { es: 'la granja', en: 'the farm' }, { es: 'enfermo', en: 'sick' }],
        },
        A1: {
          scene: { es: 'El avión vuela sobre un desierto rojo sin carreteras. Hannah revisa el equipo: oxígeno, medicinas, una camilla. Va a una estación ganadera a quinientos kilómetros. Allí viven seis personas y diez mil vacas. El hospital más cercano está a seis horas en coche.', en: 'The plane flies over a red desert with no roads. Hannah checks the equipment: oxygen, medicines, a stretcher. She is going to a cattle station five hundred kilometres away. Six people and ten thousand cows live there. The nearest hospital is six hours away by car.' },
          opener: { es: 'Este servicio empezó en 1928 con un solo avión de madera. Hoy tenemos más de setenta aviones. Atendemos a gente que vive muy, muy lejos de todo. A veces aterrizamos en una pista de tierra, otras veces en una carretera. Lo más difícil no es volar: es hacer de médico de familia por radio. ¿Podrías vivir tan lejos de un hospital?', en: 'This service started in 1928 with a single wooden plane. Today we have more than seventy planes. We look after people who live very, very far from everything. Sometimes we land on a dirt strip, other times on a road. The hardest thing isn’t flying: it’s being a family doctor over the radio. Could you live so far from a hospital?' },
          decide: {
            ask: { es: 'El piloto dice que hay una tormenta de arena en el camino. ¿Qué hacen?', en: 'The pilot says there is a sandstorm on the way. What do they do?' },
            options: [
              { say: { es: 'Esperar una hora en el aeropuerto.', en: 'Wait an hour at the airport.' }, then: { es: 'La tormenta pasa. Llegan tarde, pero el paciente está estable.', en: 'The storm passes. They arrive late, but the patient is stable.' } },
              { say: { es: 'Volar por otra ruta, más larga.', en: 'Fly another, longer route.' }, then: { es: 'Gastan más combustible, pero llegan a tiempo.', en: 'They use more fuel, but they arrive in time.' } },
              { say: { es: 'Ayudar al paciente por radio mientras esperan.', en: 'Help the patient by radio while they wait.' }, then: { es: 'La madre sigue las instrucciones de Hannah. El niño mejora un poco.', en: 'The mother follows Hannah’s instructions. The child gets a little better.' } },
            ],
          },
          twist: { es: 'En la estación, la familia invita a Hannah a cenar y a dormir. Pero hay otra llamada urgente. ¿Qué hace?', en: 'At the station, the family invites Hannah to dinner and to stay the night. But there is another urgent call. What does she do?' },
          questions: [
            { q: { es: '¿Cuánto tardas en llegar al hospital desde tu casa?', en: 'How long does it take you to get to the hospital from home?' }, help: { es: 'Tardo… minutos.', en: 'It takes me… minutes.' }, follow: [{ es: '¿Cómo vas?', en: 'How do you get there?' }, { es: '¿Es mucho o poco?', en: 'Is that a lot or a little?' }] },
            { q: { es: '¿Viviste en un lugar muy aislado?', en: 'Have you lived in a very isolated place?' }, help: { es: 'Sí, en… / No, siempre en la ciudad.', en: 'Yes, in… / No, always in the city.' }, follow: [{ es: '¿Te gustaba?', en: 'Did you like it?' }, { es: '¿Qué extrañabas?', en: 'What did you miss?' }] },
            { q: { es: '¿Hablaste con un médico por teléfono o por internet?', en: 'Have you spoken to a doctor by phone or online?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Funcionó bien?', en: 'Did it work well?' }, { es: '¿Lo prefieres?', en: 'Do you prefer it?' }] },
            { q: { es: '¿Qué trabajo es muy importante y no se valora?', en: 'Which job is very important but not valued?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Conoces a alguien que lo hace?', en: 'Do you know someone who does it?' }, { es: '¿Lo harías tú?', en: 'Would you do it?' }] },
          ],
          words: [{ es: 'la camilla', en: 'the stretcher' }, { es: 'la estación ganadera', en: 'the cattle station' }, { es: 'aterrizar', en: 'to land' }, { es: 'la pista', en: 'the airstrip' }, { es: 'la tormenta de arena', en: 'the sandstorm' }],
        },
        A2: {
          scene: { es: 'Son las tres de la madrugada. Hannah atiende una llamada de una comunidad aborigen a ochocientos kilómetros: una mujer embarazada tiene dolores fuertes. Solo hay un avión disponible. Al mismo tiempo, un camionero tuvo un accidente en la autopista y tiene una pierna rota. Hannah tiene que decidir a quién va primero.', en: 'It is three in the morning. Hannah takes a call from an Aboriginal community eight hundred kilometres away: a pregnant woman is in severe pain. There is only one plane available. At the same time, a truck driver has had an accident on the highway and has a broken leg. Hannah has to decide who to go to first.' },
          opener: { es: 'Esta es la parte que nadie te enseña en la universidad. Los dos me necesitan. La mujer está más lejos y puede ser grave, para ella y para el niño que espera. El camionero está más cerca, pero está solo en la carretera, de noche, y pierde sangre. Una enfermera lo llama cada diez minutos. ¿Tú a quién atenderías primero?', en: 'This is the part nobody teaches you at university. They both need me. The woman is further away and it could be serious, for her and for the baby she’s expecting. The truck driver is closer, but he’s alone on the road, at night, and losing blood. A nurse is calling him every ten minutes. Who would you see first?' },
          decide: {
            ask: { es: '¿Qué decides?', en: 'What do you decide?' },
            options: [
              { say: { es: 'Ir primero con la mujer embarazada.', en: 'Go to the pregnant woman first.' }, then: { es: 'Llegan a tiempo. Una ambulancia de un pueblo cercano rescata al camionero.', en: 'They arrive in time. An ambulance from a nearby town rescues the truck driver.' } },
              { say: { es: 'Ir primero al camionero, que está más cerca.', en: 'Go first to the truck driver, who is closer.' }, then: { es: 'Lo rescatan rápido. La mujer espera dos horas más, pero todo sale bien.', en: 'They rescue him quickly. The woman waits two more hours, but everything turns out well.' } },
              { say: { es: 'Pedir un segundo avión a otra base.', en: 'Request a second plane from another base.' }, then: { es: 'Llega desde Darwin, pero tarda tres horas. Hannah tiene que elegir igual.', en: 'It comes from Darwin, but it takes three hours. Hannah has to choose anyway.' } },
            ],
          },
          twist: { es: 'El gobierno quiere cerrar dos bases para ahorrar dinero y usar más consultas por video. ¿Es suficiente un médico por pantalla en el desierto?', en: 'The government wants to close two bases to save money and use more video consultations. Is a doctor on a screen enough in the desert?' },
          questions: [
            { q: { es: '¿Tuviste que elegir entre dos cosas urgentes?', en: 'Have you had to choose between two urgent things?' }, help: { es: 'Sí, una vez… / No, por suerte.', en: 'Yes, once… / No, luckily.' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Fue la decisión correcta?', en: 'Was it the right decision?' }] },
            { q: { es: '¿Llamaste alguna vez a una ambulancia?', en: 'Have you ever called an ambulance?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, for… / No, never.' }, follow: [{ es: '¿Cuánto tardó?', en: 'How long did it take?' }, { es: '¿Estabas nervioso?', en: 'Were you nervous?' }] },
            { q: { es: '¿La salud debería ser gratis para todos?', en: 'Should healthcare be free for everyone?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }, { es: '¿Funciona bien?', en: 'Does it work well?' }] },
            { q: { es: '¿Trabajarías de noche?', en: 'Would you work at night?' }, help: { es: 'Sí, no me molesta. / No, necesito dormir.', en: 'Yes, I don’t mind. / No, I need to sleep.' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué es lo peor?', en: 'What is the worst part?' }] },
          ],
          words: [{ es: 'la madrugada', en: 'the early hours' }, { es: 'embarazada', en: 'pregnant' }, { es: 'el camionero', en: 'the truck driver' }, { es: 'disponible', en: 'available' }, { es: 'rescatar', en: 'to rescue' }],
        },
        B1: {
          scene: { es: 'En el Territorio del Norte, la esperanza de vida de las personas aborígenes es casi diez años menor que la del resto del país. El servicio de médicos voladores salva vidas cada día, pero muchos dicen que solo apaga incendios. Hannah tiene que presentar un informe al gobierno: ¿más aviones o clínicas permanentes en las comunidades?', en: 'In the Northern Territory, life expectancy for Aboriginal people is almost ten years lower than for the rest of the country. The flying doctor service saves lives every day, but many say it only puts out fires. Hannah has to present a report to the government: more planes or permanent clinics in the communities?' },
          opener: { es: 'Un avión llega cuando ya hay una emergencia. Una clínica con una enfermera fija podría evitar esa emergencia meses antes: controlar la diabetes, vacunar a los niños, hablar con la gente en su idioma. Pero las clínicas necesitan personal que quiera vivir allí años, y eso es lo más difícil de conseguir. Si pido clínicas y no encuentran personal, tendremos edificios vacíos y menos aviones. ¿Hay que invertir en lo urgente o en lo importante?', en: 'A plane arrives when there’s already an emergency. A clinic with a permanent nurse could prevent that emergency months earlier: managing diabetes, vaccinating children, speaking to people in their language. But clinics need staff who want to live there for years, and that’s the hardest thing to find. If I ask for clinics and they can’t find staff, we’ll have empty buildings and fewer planes. Should you invest in what’s urgent or in what’s important?' },
          decide: {
            ask: { es: '¿Qué debería pedir Hannah en su informe?', en: 'What should Hannah ask for in her report?' },
            options: [
              { say: { es: 'Formar a personas de las comunidades como enfermeras.', en: 'Train people from the communities as nurses.' }, then: { es: 'Tarda cinco años, pero las primeras enfermeras locales se quedan a trabajar en su pueblo.', en: 'It takes five years, but the first local nurses stay to work in their own town.' } },
              { say: { es: 'Más aviones ahora y clínicas después.', en: 'More planes now and clinics later.' }, then: { es: 'Las emergencias se atienden más rápido, pero las cifras de salud no cambian.', en: 'Emergencies are handled faster, but the health figures don’t change.' } },
              { say: { es: 'Pagar mucho más a quien acepte vivir en la comunidad.', en: 'Pay much more to whoever agrees to live in the community.' }, then: { es: 'Llegan médicos, pero muchos se van al año. Los pacientes cambian de médico constantemente.', en: 'Doctors come, but many leave after a year. Patients keep changing doctor.' } },
            ],
          },
          twist: { es: 'Un periodista quiere acompañar a Hannah y publicar fotos de los pacientes para conseguir donaciones. Las donaciones serían enormes, pero algunas familias no quieren aparecer. ¿Dónde está el límite?', en: 'A journalist wants to go with Hannah and publish photos of patients to raise donations. The donations would be huge, but some families don’t want to appear. Where is the line?' },
          questions: [
            { q: { es: '¿En tu país la salud es igual en la ciudad y en el campo?', en: 'In your country, is healthcare the same in the city and the countryside?' }, help: { es: 'No, en el campo… / Sí, más o menos.', en: 'No, in the countryside… / Yes, more or less.' }, follow: [{ es: '¿Por qué crees que pasa?', en: 'Why do you think that happens?' }, { es: '¿Cómo se podría mejorar?', en: 'How could it be improved?' }] },
            { q: { es: '¿Es mejor prevenir o curar? Da un ejemplo de tu vida.', en: 'Is it better to prevent or to cure? Give an example from your life.' }, help: { es: 'Yo prevengo… / Siempre espero hasta que…', en: 'I prevent… / I always wait until…' }, follow: [{ es: '¿Te costó caro esperar alguna vez?', en: 'Has waiting ever cost you dearly?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Aceptarías un trabajo muy bien pagado en un lugar aislado?', en: 'Would you accept a very well-paid job in an isolated place?' }, help: { es: 'Sí, durante… / No, porque…', en: 'Yes, for… / No, because…' }, follow: [{ es: '¿Qué te haría quedarte?', en: 'What would make you stay?' }, { es: '¿Qué te haría irte?', en: 'What would make you leave?' }] },
            { q: { es: '¿Está bien usar el dolor ajeno para recaudar dinero para una buena causa?', en: 'Is it OK to use other people’s pain to raise money for a good cause?' }, help: { es: 'Creo que sí, si… / No, porque…', en: 'I think so, if… / No, because…' }, follow: [{ es: '¿Viste alguna campaña así?', en: 'Have you seen a campaign like that?' }, { es: '¿Donaste?', en: 'Did you donate?' }] },
          ],
          words: [{ es: 'la esperanza de vida', en: 'life expectancy' }, { es: 'apagar incendios', en: 'to put out fires' }, { es: 'el informe', en: 'the report' }, { es: 'invertir', en: 'to invest' }, { es: 'la donación', en: 'the donation' }],
        },
      },
    },
    // ------------------------------------------------------------ Mindil Beach market
    {
      id: 'darwin',
      name: { es: 'El mercado nocturno de Darwin', en: 'The Darwin night market' },
      who: { name: 'Thanh', role: { es: 'cocinera del mercado', en: 'market cook' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche en la playa. Hay muchos puestos de comida y luces de colores. Thanh cocina en una olla grande. Tiene un delantal rojo y el pelo recogido.', en: 'It is night on the beach. There are lots of food stalls and coloured lights. Thanh cooks in a big pot. She has a red apron and her hair tied up.' },
          opener: { es: '¡Hola! Soy Thanh. Mi familia es de Vietnam. ¿Tienes hambre?', en: 'Hello! I am Thanh. My family is from Vietnam. Are you hungry?' },
          decide: {
            ask: { es: '¿Qué comes?', en: 'What do you eat?' },
            options: [
              { say: { es: 'Una sopa de fideos.', en: 'A noodle soup.' }, then: { es: 'Está caliente y rica. Thanh pone hierbas frescas.', en: 'It is hot and tasty. Thanh adds fresh herbs.' } },
              { say: { es: 'Un pescado.', en: 'A fish.' }, then: { es: 'Es un pescado del mar de aquí. ¡Muy fresco!', en: 'It is a fish from the sea here. Very fresh!' } },
              { say: { es: 'Una fruta.', en: 'A fruit.' }, then: { es: 'Es un mango enorme. ¡Muy dulce!', en: 'It is a huge mango. Very sweet!' } },
            ],
          },
          twist: { es: 'El sol baja sobre el mar. Toda la gente aplaude. ¿Aplaudes tú también?', en: 'The sun goes down over the sea. Everyone claps. Do you clap too?' },
          questions: [
            { q: { es: '¿Te gusta la comida picante?', en: 'Do you like spicy food?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Qué comida picante comes?', en: 'What spicy food do you eat?' }, { es: '¿Cocinas?', en: 'Do you cook?' }] },
            { q: { es: '¿Hay mercados en tu ciudad?', en: 'Are there markets in your city?' }, help: { es: 'Sí, hay uno… / No.', en: 'Yes, there is one… / No.' }, follow: [{ es: '¿Qué compras allí?', en: 'What do you buy there?' }, { es: '¿Qué día vas?', en: 'Which day do you go?' }] },
            { q: { es: '¿Te gusta la playa de noche?', en: 'Do you like the beach at night?' }, help: { es: 'Sí, es bonita. / No, prefiero el día.', en: 'Yes, it is beautiful. / No, I prefer the day.' }, follow: [{ es: '¿Con quién vas?', en: 'Who do you go with?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
            { q: { es: '¿Cuál es tu comida favorita?', en: 'What is your favourite food?' }, help: { es: 'Mi comida favorita es…', en: 'My favourite food is…' }, follow: [{ es: '¿Quién la cocina?', en: 'Who cooks it?' }, { es: '¿Es de tu país?', en: 'Is it from your country?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'los fideos', en: 'the noodles' }, { es: 'la olla', en: 'the pot' }, { es: 'picante', en: 'spicy' }, { es: 'aplaudir', en: 'to clap' }],
        },
        A1: {
          scene: { es: 'Es jueves. Miles de personas llegan al mercado de la playa de Mindil con sillas y mantas. Hay comida de Indonesia, Grecia, Tailandia, Sri Lanka y Brasil. Thanh vende sopa vietnamita desde hace doce años. Su madre abrió el puesto cuando llegó a Australia.', en: 'It is Thursday. Thousands of people arrive at the Mindil Beach market with chairs and blankets. There is food from Indonesia, Greece, Thailand, Sri Lanka and Brazil. Thanh has sold Vietnamese soup for twelve years. Her mother opened the stall when she arrived in Australia.' },
          opener: { es: 'Darwin está más cerca de Indonesia que de Sídney. Por eso aquí hay gente de todas partes. Mi madre llegó en barco en 1979, sin nada. Cocinaba sopa para otros vietnamitas en su cocina. Ahora la gente hace cola media hora por nuestra sopa. La receta es secreta, por supuesto. ¿En tu familia hay una receta especial?', en: 'Darwin is closer to Indonesia than to Sydney. That’s why there are people from everywhere here. My mother arrived by boat in 1979, with nothing. She cooked soup for other Vietnamese people in her kitchen. Now people queue for half an hour for our soup. The recipe is secret, of course. Is there a special recipe in your family?' },
          decide: {
            ask: { es: 'Un cliente pide la receta. ¿Qué le dice Thanh?', en: 'A customer asks for the recipe. What does Thanh tell him?' },
            options: [
              { say: { es: '«Es un secreto de mi madre».', en: '“It’s my mother’s secret.”' }, then: { es: 'El cliente ríe y pide otra sopa.', en: 'The customer laughs and orders another soup.' } },
              { say: { es: '«Te digo un ingrediente».', en: '“I’ll tell you one ingredient.”' }, then: { es: 'Thanh le dice: «anís estrellado». El cliente lo escribe en el móvil.', en: 'Thanh tells him: “star anise”. The customer writes it on his phone.' } },
              { say: { es: '«Ven el domingo a cocinar conmigo».', en: '“Come on Sunday and cook with me.”' }, then: { es: 'El domingo el cliente corta cebollas durante tres horas. ¡Y llora mucho!', en: 'On Sunday the customer chops onions for three hours. And cries a lot!' } },
            ],
          },
          twist: { es: 'Empieza a llover muy fuerte. Es la temporada de lluvias. ¿Cierra Thanh el puesto o sigue vendiendo?', en: 'It starts raining very hard. It is the wet season. Does Thanh close the stall or keep selling?' },
          questions: [
            { q: { es: '¿Tu familia tiene una receta especial?', en: 'Does your family have a special recipe?' }, help: { es: 'Sí, mi abuela hace… / No.', en: 'Yes, my grandmother makes… / No.' }, follow: [{ es: '¿Sabes hacerla?', en: 'Can you make it?' }, { es: '¿Cuándo la comen?', en: 'When do you eat it?' }] },
            { q: { es: '¿Hiciste cola mucho tiempo para comer algo?', en: 'Have you queued for a long time to eat something?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Qué comida de otro país te gusta?', en: 'What food from another country do you like?' }, help: { es: 'Me gusta la comida…', en: 'I like… food.' }, follow: [{ es: '¿Dónde la comes?', en: 'Where do you eat it?' }, { es: '¿La cocinas?', en: 'Do you cook it?' }] },
            { q: { es: '¿Hay gente de muchos países en tu ciudad?', en: 'Are there people from many countries in your city?' }, help: { es: 'Sí, hay gente de… / No mucho.', en: 'Yes, there are people from… / Not many.' }, follow: [{ es: '¿Tienes amigos de otros países?', en: 'Do you have friends from other countries?' }, { es: '¿De dónde?', en: 'Where from?' }] },
          ],
          words: [{ es: 'la manta', en: 'the blanket' }, { es: 'la receta', en: 'the recipe' }, { es: 'hacer cola', en: 'to queue' }, { es: 'el anís estrellado', en: 'star anise' }, { es: 'la temporada de lluvias', en: 'the wet season' }],
        },
        A2: {
          scene: { es: 'El ayuntamiento cambió las reglas del mercado: a partir del año que viene, los puestos se van a asignar por sorteo cada temporada. Algunos puestos tienen treinta años en el mismo lugar. Thanh tiene el número 14, al lado del mar, donde su madre empezó. Si pierde en el sorteo, puede terminar al fondo, cerca del aparcamiento.', en: 'The council has changed the market rules: from next year, stalls will be allocated by lottery every season. Some stalls have been in the same place for thirty years. Thanh has number 14, by the sea, where her mother started. If she loses the lottery, she could end up at the back, near the car park.' },
          opener: { es: 'El ayuntamiento dice que es más justo: hay ciento veinte familias en lista de espera, muchas recién llegadas de África o de las islas del Pacífico. Tienen razón, pero este lugar es la historia de mi madre. La gente nos busca aquí. Una señora sudanesa que está en la lista me pidió consejos para empezar. No sé si ayudarla o verla como competencia. ¿Qué harías tú?', en: 'The council says it’s fairer: there are a hundred and twenty families on the waiting list, many recently arrived from Africa or the Pacific islands. They’re right, but this spot is my mother’s story. People look for us here. A Sudanese woman on the list asked me for advice on getting started. I don’t know whether to help her or see her as competition. What would you do?' },
          decide: {
            ask: { es: '¿Qué hace Thanh con la señora sudanesa?', en: 'What does Thanh do about the Sudanese woman?' },
            options: [
              { say: { es: 'La ayuda con todo lo que sabe.', en: 'She helps her with everything she knows.' }, then: { es: 'La señora gana un puesto. Ahora se recomiendan clientes la una a la otra.', en: 'The woman wins a stall. Now they send customers to each other.' } },
              { say: { es: 'Le propone compartir el puesto 14.', en: 'She offers to share stall 14.' }, then: { es: 'El puesto vende sopa y pan sudanés. Es el más original del mercado.', en: 'The stall sells soup and Sudanese bread. It is the most original in the market.' } },
              { say: { es: 'Le da consejos básicos, pero se concentra en su negocio.', en: 'She gives basic advice but focuses on her own business.' }, then: { es: 'Las dos siguen su camino. Se saludan cada jueves, con cierta distancia.', en: 'They both go their own way. They greet each other every Thursday, a little distantly.' } },
            ],
          },
          twist: { es: 'Una cadena de comida rápida ofrece mucho dinero al ayuntamiento por tener un puesto fijo en el mercado. ¿Debería aceptar?', en: 'A fast-food chain offers the council a lot of money for a permanent stall at the market. Should it accept?' },
          questions: [
            { q: { es: '¿Un sorteo es una forma justa de repartir algo?', en: 'Is a lottery a fair way to share something out?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Ganaste algún sorteo?', en: 'Have you won a draw?' }, { es: '¿Qué se sortea en tu país?', en: 'What is decided by lottery in your country?' }] },
            { q: { es: '¿Ayudarías a alguien que puede ser tu competencia?', en: 'Would you help someone who could be your competition?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Te pasó en el trabajo?', en: 'Has it happened to you at work?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Hay un lugar importante para la historia de tu familia?', en: 'Is there a place that matters in your family’s history?' }, help: { es: 'Sí, la casa de… / el pueblo de…', en: 'Yes, the house of… / the village of…' }, follow: [{ es: '¿Todavía existe?', en: 'Does it still exist?' }, { es: '¿Vas a veces?', en: 'Do you go sometimes?' }] },
            { q: { es: '¿Prefieres un mercado tradicional o un supermercado?', en: 'Do you prefer a traditional market or a supermarket?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué compras en cada uno?', en: 'What do you buy in each?' }, { es: '¿Cuál es más barato?', en: 'Which is cheaper?' }] },
          ],
          words: [{ es: 'el sorteo', en: 'the lottery / draw' }, { es: 'asignar', en: 'to allocate' }, { es: 'la lista de espera', en: 'the waiting list' }, { es: 'el aparcamiento', en: 'the car park' }, { es: 'la competencia', en: 'the competition' }],
        },
        B1: {
          scene: { es: 'Un programa de televisión famoso quiere grabar un episodio en el puesto de Thanh. El presentador, un chef blanco muy conocido, quiere «mejorar» la sopa de su madre con ingredientes modernos y llamarla «fusión del norte». El episodio duplicaría las ventas, pero Thanh siente que su cocina no necesita que nadie la mejore.', en: 'A famous TV programme wants to film an episode at Thanh’s stall. The presenter, a well-known white chef, wants to “improve” her mother’s soup with modern ingredients and call it “northern fusion”. The episode would double sales, but Thanh feels her cooking doesn’t need anyone to improve it.' },
          opener: { es: 'Durante años nos dijeron que nuestra comida olía raro. Mis compañeros de colegio se burlaban de mi almuerzo. Ahora la misma comida está de moda y aparece en restaurantes caros, con otro nombre y el triple de precio. No me opongo a que la cocina cambie: mi madre cambió la receta cuando no encontraba ciertas hierbas aquí. Lo que me molesta es quién cuenta la historia y quién gana dinero. ¿Dónde termina el intercambio cultural y empieza la apropiación?', en: 'For years we were told our food smelled strange. My schoolmates made fun of my lunch. Now the same food is fashionable and appears in expensive restaurants, under another name and at three times the price. I’m not against cooking changing: my mother changed the recipe when she couldn’t find certain herbs here. What bothers me is who tells the story and who makes the money. Where does cultural exchange end and appropriation begin?' },
          decide: {
            ask: { es: '¿Qué le contesta Thanh al programa?', en: 'What does Thanh reply to the programme?' },
            options: [
              { say: { es: 'Acepta, pero solo si ella cuenta la historia de su madre.', en: 'She accepts, but only if she tells her mother’s story.' }, then: { es: 'El episodio es el más visto de la temporada. El chef aprende a hacer la sopa original.', en: 'The episode is the most watched of the season. The chef learns to make the original soup.' } },
              { say: { es: 'Rechaza la oferta.', en: 'She turns down the offer.' }, then: { es: 'El programa graba en otro puesto. Thanh no gana fama, pero duerme tranquila.', en: 'The programme films at another stall. Thanh doesn’t become famous, but she sleeps easy.' } },
              { say: { es: 'Propone hacer su propio video en internet.', en: 'She suggests making her own online video.' }, then: { es: 'Su sobrina graba a Thanh y a su madre cocinando. El video tiene dos millones de visitas.', en: 'Her niece films Thanh and her mother cooking. The video gets two million views.' } },
            ],
          },
          twist: { es: 'Años después, la sobrina de Thanh quiere abrir un restaurante elegante con la sopa a cuarenta dólares. Thanh piensa que la sopa de su madre es comida del pueblo y debe ser barata. ¿Quién tiene razón?', en: 'Years later, Thanh’s niece wants to open an upmarket restaurant with the soup at forty dollars. Thanh thinks her mother’s soup is food for ordinary people and should be cheap. Who is right?' },
          questions: [
            { q: { es: '¿Algo de tu cultura se puso de moda en otro país?', en: 'Has something from your culture become fashionable in another country?' }, help: { es: 'Sí, por ejemplo… / No que yo sepa.', en: 'Yes, for example… / Not that I know of.' }, follow: [{ es: '¿Te gusta cómo lo hacen?', en: 'Do you like how they do it?' }, { es: '¿Qué cambiaron?', en: 'What did they change?' }] },
            { q: { es: '¿Alguna vez te dio vergüenza algo de tu familia que hoy valoras?', en: 'Has something about your family ever embarrassed you that you now value?' }, help: { es: 'Sí, de niño me daba vergüenza… y ahora…', en: 'Yes, as a child I was embarrassed by… and now…' }, follow: [{ es: '¿Qué te hizo cambiar?', en: 'What made you change?' }, { es: '¿Se lo dijiste a tu familia?', en: 'Did you tell your family?' }] },
            { q: { es: '¿Una receta tradicional debe mantenerse igual o puede evolucionar?', en: 'Should a traditional recipe stay the same or can it evolve?' }, help: { es: 'Creo que debe… porque…', en: 'I think it should… because…' }, follow: [{ es: '¿Qué plato de tu país cambió?', en: 'Which dish from your country has changed?' }, { es: '¿Para mejor o para peor?', en: 'For better or worse?' }] },
            { q: { es: '¿Es justo cobrar mucho más por la comida «de la abuela» en un restaurante elegante?', en: 'Is it fair to charge much more for “grandma’s food” in a fancy restaurant?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Pagarías ese precio?', en: 'Would you pay that price?' }, { es: '¿Qué estás pagando en realidad?', en: 'What are you really paying for?' }] },
          ],
          words: [{ es: 'burlarse', en: 'to make fun of' }, { es: 'estar de moda', en: 'to be fashionable' }, { es: 'oponerse', en: 'to be against' }, { es: 'la apropiación', en: 'appropriation' }, { es: 'el intercambio', en: 'the exchange' }],
        },
      },
    },
    // ------------------------------------------------------------ Kakadu crocodiles
    {
      id: 'kakadu',
      name: { es: 'Los cocodrilos de Kakadu', en: 'The crocodiles of Kakadu' },
      who: { name: 'Kirra', role: { es: 'guardaparques', en: 'park ranger' } },
      levels: {
        A0: {
          scene: { es: 'Es un río verde y tranquilo. Hay un barco pequeño. En el agua hay un cocodrilo enorme. Kirra es guardaparques. Tiene una gorra y unos prismáticos.', en: 'It is a green, calm river. There is a small boat. In the water there is a huge crocodile. Kirra is a ranger. She has a cap and binoculars.' },
          opener: { es: '¡Hola! Soy Kirra. ¡Cuidado! No pongas la mano en el agua. ¿Ves el cocodrilo?', en: 'Hello! I am Kirra. Careful! Don’t put your hand in the water. Can you see the crocodile?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'El cocodrilo abre la boca. ¡Tiene muchos dientes!', en: 'The crocodile opens its mouth. It has lots of teeth!' } },
              { say: { es: 'Me quedo en el centro del barco.', en: 'I stay in the middle of the boat.' }, then: { es: 'Kirra dice: «Muy bien. Así es más seguro».', en: 'Kirra says: “Very good. It is safer like that.”' } },
              { say: { es: 'Miro con los prismáticos.', en: 'I look through the binoculars.' }, then: { es: 'Ves un pájaro azul en un árbol. ¡Qué bonito!', en: 'You see a blue bird in a tree. How pretty!' } },
            ],
          },
          twist: { es: 'Un niño quiere nadar en el río. Hace mucho calor. ¿Qué le dices?', en: 'A child wants to swim in the river. It is very hot. What do you say to him?' },
          questions: [
            { q: { es: '¿Te dan miedo los animales grandes?', en: 'Are you scared of big animals?' }, help: { es: 'Sí, mucho. / No, me gustan.', en: 'Yes, very. / No, I like them.' }, follow: [{ es: '¿Cuál te da más miedo?', en: 'Which scares you most?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Nadas en ríos o en el mar?', en: 'Do you swim in rivers or in the sea?' }, help: { es: 'En el mar. / En la piscina. / No nado.', en: 'In the sea. / In the pool. / I don’t swim.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Viste un cocodrilo alguna vez?', en: 'Have you ever seen a crocodile?' }, help: { es: 'Sí, en el zoo. / No, nunca.', en: 'Yes, at the zoo. / No, never.' }, follow: [{ es: '¿Era grande?', en: 'Was it big?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, mucho. / No, me mareo.', en: 'Yes, a lot. / No, I get seasick.' }, follow: [{ es: '¿Viajas en barco?', en: 'Do you travel by boat?' }, { es: '¿Adónde?', en: 'Where to?' }] },
          ],
          words: [{ es: 'el río', en: 'the river' }, { es: 'el cocodrilo', en: 'the crocodile' }, { es: 'los dientes', en: 'the teeth' }, { es: 'los prismáticos', en: 'the binoculars' }, { es: '¡Cuidado!', en: 'Careful!' }],
        },
        A1: {
          scene: { es: 'Kakadu es un parque nacional enorme, más grande que algunos países. Tiene ríos, cascadas, pinturas en las rocas de miles de años y diez mil cocodrilos. Kirra trabaja aquí desde hace ocho años. Hoy revisa los carteles de peligro cerca de un lago donde los turistas a veces se bañan.', en: 'Kakadu is a huge national park, bigger than some countries. It has rivers, waterfalls, thousands-of-years-old rock paintings and ten thousand crocodiles. Kirra has worked here for eight years. Today she is checking the danger signs near a lake where tourists sometimes swim.' },
          opener: { es: 'El cocodrilo de agua salada es el reptil más grande del mundo. Puede medir seis metros y quedarse quieto bajo el agua una hora. Los turistas no lo ven y piensan que el lago está vacío. Cada año pongo carteles nuevos, y cada año alguien se baña igual. ¿Por qué crees que la gente no hace caso a los carteles?', en: 'The saltwater crocodile is the largest reptile in the world. It can be six metres long and stay still under water for an hour. Tourists don’t see it and think the lake is empty. Every year I put up new signs, and every year someone swims anyway. Why do you think people ignore signs?' },
          decide: {
            ask: { es: '¿Cómo puede Kirra convencer a los turistas?', en: 'How can Kirra convince the tourists?' },
            options: [
              { say: { es: 'Poner una foto de un cocodrilo enorme en el cartel.', en: 'Put a photo of a huge crocodile on the sign.' }, then: { es: 'Muchos turistas sacan una foto del cartel… y no se bañan.', en: 'Lots of tourists take a photo of the sign… and don’t swim.' } },
              { say: { es: 'Hablar con los turistas en el aparcamiento.', en: 'Talk to the tourists in the car park.' }, then: { es: 'Funciona, pero Kirra no puede estar allí todo el día.', en: 'It works, but Kirra can’t be there all day.' } },
              { say: { es: 'Poner una multa muy alta.', en: 'Set a very high fine.' }, then: { es: 'La gente se baña menos, pero se queja mucho en internet.', en: 'People swim less, but they complain a lot online.' } },
            ],
          },
          twist: { es: 'Un turista dice: «Yo nadé aquí ayer y no pasó nada». ¿Qué le responde Kirra?', en: 'A tourist says: “I swam here yesterday and nothing happened.” What does Kirra reply?' },
          questions: [
            { q: { es: '¿Haces caso a los carteles de peligro?', en: 'Do you pay attention to danger signs?' }, help: { es: 'Sí, siempre. / A veces no.', en: 'Yes, always. / Sometimes not.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Alguna vez tuviste un problema?', en: 'Have you ever had a problem?' }] },
            { q: { es: '¿Qué animal peligroso hay en tu país?', en: 'What dangerous animal is there in your country?' }, help: { es: 'Hay… / No hay animales peligrosos.', en: 'There are… / There are no dangerous animals.' }, follow: [{ es: '¿Viste uno?', en: 'Have you seen one?' }, { es: '¿Qué hay que hacer si ves uno?', en: 'What should you do if you see one?' }] },
            { q: { es: '¿Trabajarías en un parque nacional?', en: 'Would you work in a national park?' }, help: { es: 'Sí, me encantaría. / No, prefiero la ciudad.', en: 'Yes, I’d love to. / No, I prefer the city.' }, follow: [{ es: '¿Qué harías?', en: 'What would you do?' }, { es: '¿Qué es lo más difícil?', en: 'What is the hardest part?' }] },
            { q: { es: '¿Hiciste algo peligroso de joven?', en: 'Did you do something dangerous when you were young?' }, help: { es: 'Sí, una vez… / No, era muy tranquilo.', en: 'Yes, once… / No, I was very calm.' }, follow: [{ es: '¿Lo harías otra vez?', en: 'Would you do it again?' }, { es: '¿Lo saben tus padres?', en: 'Do your parents know?' }] },
          ],
          words: [{ es: 'la cascada', en: 'the waterfall' }, { es: 'el cartel', en: 'the sign' }, { es: 'el peligro', en: 'the danger' }, { es: 'bañarse', en: 'to swim / bathe' }, { es: 'la multa', en: 'the fine' }],
        },
        A2: {
          scene: { es: 'Un cocodrilo de cinco metros apareció en el muelle de un pueblo cerca del parque. Lleva tres días allí y la gente tiene miedo de pescar. El alcalde quiere que lo maten. Los guardaparques prefieren capturarlo y llevarlo lejos, pero los cocodrilos muchas veces vuelven: uno recorrió cuatrocientos kilómetros para volver a su río.', en: 'A five-metre crocodile has appeared at the jetty of a town near the park. It has been there for three days and people are afraid to fish. The mayor wants it killed. The rangers prefer to capture it and take it far away, but crocodiles often come back: one travelled four hundred kilometres to return to its river.' },
          opener: { es: 'Los ancianos de mi pueblo dicen que este cocodrilo vive en el río desde hace más de cincuenta años. Para ellos tiene nombre y forma parte de la familia del río. Hasta los setenta, los cazadores casi los hicieron desaparecer. Ahora están protegidos y hay muchos más, y la gente tiene que volver a aprender a vivir con ellos. Pero si ataca a un niño, nadie me va a perdonar. ¿Qué hacemos?', en: 'The elders of my community say this crocodile has lived in the river for more than fifty years. For them it has a name and is part of the river’s family. Until the seventies, hunters almost wiped them out. Now they’re protected and there are many more, and people have to learn again how to live with them. But if it attacks a child, nobody will forgive me. What do we do?' },
          decide: {
            ask: { es: '¿Qué decides?', en: 'What do you decide?' },
            options: [
              { say: { es: 'Capturarlo y llevarlo a una granja de cocodrilos.', en: 'Capture it and take it to a crocodile farm.' }, then: { es: 'El pueblo está tranquilo. Los ancianos están tristes, pero entienden.', en: 'The town is calm. The elders are sad, but they understand.' } },
              { say: { es: 'Dejarlo y cerrar el muelle unas semanas.', en: 'Leave it and close the jetty for a few weeks.' }, then: { es: 'Al mes el cocodrilo se va solo. Los pescadores pierden dinero.', en: 'After a month the crocodile leaves on its own. The fishermen lose money.' } },
              { say: { es: 'Hacer lo que dice el alcalde.', en: 'Do what the mayor says.' }, then: { es: 'El problema se termina, pero en el pueblo hay mucha discusión durante meses.', en: 'The problem ends, but there is a lot of arguing in town for months.' } },
            ],
          },
          twist: { es: 'Una empresa ofrece pagar por cazar cocodrilos grandes como deporte. El dinero iría a las comunidades aborígenes del parque. ¿Qué opinas?', en: 'A company offers to pay to hunt big crocodiles as a sport. The money would go to the park’s Aboriginal communities. What do you think?' },
          questions: [
            { q: { es: '¿Los animales salvajes deberían vivir cerca de las personas?', en: 'Should wild animals live near people?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Hay animales salvajes en tu ciudad?', en: 'Are there wild animals in your city?' }, { es: '¿Causan problemas?', en: 'Do they cause problems?' }] },
            { q: { es: '¿Alguna vez un animal te dio un susto?', en: 'Has an animal ever given you a fright?' }, help: { es: 'Sí, un perro / una araña… / No.', en: 'Yes, a dog / a spider… / No.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Todavía te da miedo?', en: 'Does it still scare you?' }] },
            { q: { es: '¿Tu familia o tu pueblo tiene una historia sobre un animal?', en: 'Does your family or town have a story about an animal?' }, help: { es: 'Sí, dicen que… / No que yo sepa.', en: 'Yes, they say that… / Not that I know of.' }, follow: [{ es: '¿Crees que es verdad?', en: 'Do you think it’s true?' }, { es: '¿Quién la cuenta?', en: 'Who tells it?' }] },
            { q: { es: '¿Está bien cazar animales?', en: 'Is it OK to hunt animals?' }, help: { es: 'Depende de… / No, nunca.', en: 'It depends on… / No, never.' }, follow: [{ es: '¿Se caza en tu país?', en: 'Do people hunt in your country?' }, { es: '¿Qué animales?', en: 'Which animals?' }] },
          ],
          words: [{ es: 'el muelle', en: 'the jetty' }, { es: 'capturar', en: 'to capture' }, { es: 'los ancianos', en: 'the elders' }, { es: 'el cazador', en: 'the hunter' }, { es: 'protegido', en: 'protected' }],
        },
        B1: {
          scene: { es: 'Bajo la tierra de Kakadu hay uranio. Durante décadas funcionó aquí una mina, dentro del parque, en tierras del pueblo mirarr. Ahora la mina cerró y la empresa tiene que limpiar y devolver la tierra a su estado natural. Kirra forma parte de un comité que debe decidir si la limpieza es suficiente para devolver la zona al parque.', en: 'There is uranium under Kakadu’s soil. For decades a mine operated here, inside the park, on Mirarr land. Now the mine has closed and the company has to clean up and return the land to its natural state. Kirra sits on a committee that must decide whether the clean-up is good enough to return the area to the park.' },
          opener: { es: 'La mina dio trabajo y dinero, y también dividió a las familias: unos querían el dinero, otros decían que la tierra estaba enferma. La empresa dice que la limpieza está terminada y que el agua es segura. Nuestros análisis muestran niveles bajos, pero no cero. Los ancianos dicen que no hay prisa: «La tierra esperó miles de años; puede esperar diez más». La empresa quiere irse este año. ¿Cuándo se puede decir que un daño está reparado?', en: 'The mine brought jobs and money, and it also divided families: some wanted the money, others said the land was sick. The company says the clean-up is finished and the water is safe. Our tests show low levels, but not zero. The elders say there’s no hurry: “The land waited thousands of years; it can wait ten more.” The company wants to leave this year. When can you say damage has been repaired?' },
          decide: {
            ask: { es: '¿Qué debería votar Kirra?', en: 'How should Kirra vote?' },
            options: [
              { say: { es: 'Exigir diez años más de controles pagados por la empresa.', en: 'Demand ten more years of monitoring paid for by the company.' }, then: { es: 'La empresa protesta, pero acepta para evitar un juicio largo.', en: 'The company protests, but agrees to avoid a long court case.' } },
              { say: { es: 'Aceptar la limpieza y abrir la zona al turismo.', en: 'Accept the clean-up and open the area to tourism.' }, then: { es: 'Llegan visitantes y dinero. Algunos ancianos no vuelven a pisar esa zona.', en: 'Visitors and money arrive. Some elders never set foot in that area again.' } },
              { say: { es: 'Dejar que decidan solo los mirarr, dueños de la tierra.', en: 'Let the Mirarr, the owners of the land, decide alone.' }, then: { es: 'Los mirarr deciden esperar y crean su propio programa de vigilancia con jóvenes de la comunidad.', en: 'The Mirarr decide to wait and set up their own monitoring programme with young people from the community.' } },
            ],
          },
          twist: { es: 'Otra empresa descubre más uranio cerca y ofrece muchísimo dinero por explorar. Australia necesita energía sin carbón. ¿Proteger un parque está por encima de la lucha contra el cambio climático?', en: 'Another company finds more uranium nearby and offers a huge amount of money to explore. Australia needs energy without coal. Does protecting a park come before fighting climate change?' },
          questions: [
            { q: { es: '¿Conoces un lugar que se dañó por una industria?', en: 'Do you know a place that was damaged by an industry?' }, help: { es: 'Sí, en… una fábrica / una mina…', en: 'Yes, in… a factory / a mine…' }, follow: [{ es: '¿Se reparó?', en: 'Was it repaired?' }, { es: '¿Quién pagó?', en: 'Who paid?' }] },
            { q: { es: '¿El trabajo y el dinero justifican dañar la naturaleza?', en: 'Do jobs and money justify damaging nature?' }, help: { es: 'A veces sí, cuando… / Nunca, porque…', en: 'Sometimes yes, when… / Never, because…' }, follow: [{ es: '¿Qué harías si fuera tu pueblo?', en: 'What would you do if it were your town?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Estás a favor de la energía nuclear?', en: 'Are you in favour of nuclear energy?' }, help: { es: 'Sí, porque… / No, porque… / No estoy seguro.', en: 'Yes, because… / No, because… / I’m not sure.' }, follow: [{ es: '¿Hay centrales en tu país?', en: 'Are there power stations in your country?' }, { es: '¿Vivirías cerca de una?', en: 'Would you live near one?' }] },
            { q: { es: '¿Te cuesta tener paciencia cuando todos quieren una solución rápida?', en: 'Do you find it hard to be patient when everyone wants a quick solution?' }, help: { es: 'Sí, me cuesta porque… / No, prefiero esperar.', en: 'Yes, I find it hard because… / No, I prefer to wait.' }, follow: [{ es: '¿Cuándo valió la pena esperar?', en: 'When was waiting worth it?' }, { es: '¿Y cuándo no?', en: 'And when wasn’t it?' }] },
          ],
          words: [{ es: 'el uranio', en: 'uranium' }, { es: 'la mina', en: 'the mine' }, { es: 'el daño', en: 'the damage' }, { es: 'la vigilancia', en: 'monitoring' }, { es: 'el juicio', en: 'the court case' }],
        },
      },
    },
    // ------------------------------------------------------------ School of the Air
    {
      id: 'escuela',
      name: { es: 'La Escuela del Aire', en: 'The School of the Air' },
      who: { name: 'Megan', role: { es: 'maestra a distancia', en: 'distance teacher' } },
      levels: {
        A0: {
          scene: { es: 'Es un aula pequeña con una cámara y una pantalla grande. En la pantalla hay ocho niños. Cada niño está en su casa, en el desierto. Megan es maestra. Tiene gafas y un jersey verde.', en: 'It is a small classroom with a camera and a big screen. On the screen there are eight children. Each child is at home, in the desert. Megan is a teacher. She has glasses and a green jumper.' },
          opener: { es: '¡Buenos días! Soy Megan. Mis alumnos viven muy lejos. ¿Saludas a la clase?', en: 'Good morning! I am Megan. My students live very far away. Will you say hello to the class?' },
          decide: {
            ask: { es: '¿Qué dices a los niños?', en: 'What do you say to the children?' },
            options: [
              { say: { es: '¡Hola, niños!', en: 'Hello, children!' }, then: { es: 'Los ocho niños dicen «¡Hola!» al mismo tiempo. ¡Qué ruido!', en: 'The eight children say “Hello!” at the same time. What a noise!' } },
              { say: { es: '¿Cómo están?', en: 'How are you?' }, then: { es: 'Una niña dice: «¡Bien! Tengo un canguro en el jardín».', en: 'A girl says: “Good! I have a kangaroo in the garden.”' } },
              { say: { es: '¿Dónde viven?', en: 'Where do you live?' }, then: { es: 'Un niño muestra su casa por la cámara. Hay vacas y tierra roja.', en: 'A boy shows his house on the camera. There are cows and red earth.' } },
            ],
          },
          twist: { es: 'La conexión se corta. Un niño no se ve. ¿Qué hace Megan?', en: 'The connection cuts out. One child disappears from the screen. What does Megan do?' },
          questions: [
            { q: { es: '¿Te gustaba la escuela?', en: 'Did you like school?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál era tu asignatura favorita?', en: 'What was your favourite subject?' }, { es: '¿Y tu maestra?', en: 'And your teacher?' }] },
            { q: { es: '¿Estudias por internet?', en: 'Do you study online?' }, help: { es: 'Sí, ahora. / No, nunca.', en: 'Yes, now. / No, never.' }, follow: [{ es: '¿Qué estudias?', en: 'What do you study?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Vives lejos de tu escuela o trabajo?', en: 'Do you live far from your school or work?' }, help: { es: 'Sí, muy lejos. / No, cerca.', en: 'Yes, very far. / No, close.' }, follow: [{ es: '¿Cómo vas?', en: 'How do you get there?' }, { es: '¿Cuánto tardas?', en: 'How long does it take?' }] },
            { q: { es: '¿Tienes una cámara en tu ordenador?', en: 'Do you have a camera on your computer?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿La usas mucho?', en: 'Do you use it a lot?' }, { es: '¿Para qué?', en: 'What for?' }] },
          ],
          words: [{ es: 'el aula', en: 'the classroom' }, { es: 'la pantalla', en: 'the screen' }, { es: 'la maestra', en: 'the (female) teacher' }, { es: 'el alumno', en: 'the student' }, { es: 'lejos', en: 'far' }],
        },
        A1: {
          scene: { es: 'La Escuela del Aire de Alice Springs empezó en 1951. Antes las clases eran por radio; ahora son por internet satelital. Los alumnos viven en granjas y comunidades a cientos de kilómetros. Cada niño estudia en casa con un adulto que lo ayuda: casi siempre la madre, a veces una institutriz. Megan da clase a niños de seis años.', en: 'The Alice Springs School of the Air started in 1951. Classes used to be by radio; now they are by satellite internet. The students live on farms and in communities hundreds of kilometres away. Each child studies at home with an adult who helps: almost always the mother, sometimes a governess. Megan teaches six-year-olds.' },
          opener: { es: 'Mis alumnos nunca llegan tarde por el tráfico… pero a veces llegan tarde porque hay que mover las vacas o porque llovió y se cortó la luz. Una vez al año todos vienen a Alice Springs una semana. Para muchos es la primera vez que ven a sus compañeros en persona. Se abrazan como viejos amigos. ¿Te imaginas ir a la escuela así?', en: 'My students are never late because of traffic… but sometimes they’re late because the cows need moving or because it rained and the power went off. Once a year they all come to Alice Springs for a week. For many it’s the first time they see their classmates in person. They hug like old friends. Can you imagine going to school like that?' },
          decide: {
            ask: { es: 'Es la semana en Alice Springs. ¿Qué actividad organiza Megan?', en: 'It is the week in Alice Springs. What activity does Megan organise?' },
            options: [
              { say: { es: 'Una visita a la piscina.', en: 'A visit to the swimming pool.' }, then: { es: 'Algunos niños nunca vieron una piscina. ¡No quieren salir del agua!', en: 'Some children have never seen a pool. They don’t want to get out of the water!' } },
              { say: { es: 'Una obra de teatro.', en: 'A play.' }, then: { es: 'Los padres lloran de emoción. Graban todo con el móvil.', en: 'The parents cry with emotion. They film everything on their phones.' } },
              { say: { es: 'Una tarde en el cine.', en: 'An afternoon at the cinema.' }, then: { es: 'Para tres niños es su primera película en una pantalla gigante.', en: 'For three children it is their first film on a giant screen.' } },
            ],
          },
          twist: { es: 'Un alumno dice por la cámara: «Mi mamá está cansada y no puede ayudarme hoy». ¿Qué hace Megan?', en: 'A student says on camera: “My mum is tired and can’t help me today.” What does Megan do?' },
          questions: [
            { q: { es: '¿Cómo ibas a la escuela de niño?', en: 'How did you get to school as a child?' }, help: { es: 'Iba a pie / en autobús / en coche…', en: 'I walked / went by bus / by car…' }, follow: [{ es: '¿Con quién ibas?', en: 'Who did you go with?' }, { es: '¿Cuánto tardabas?', en: 'How long did it take?' }] },
            { q: { es: '¿Quién te ayudaba con los deberes?', en: 'Who helped you with your homework?' }, help: { es: 'Mi madre / mi hermano / nadie…', en: 'My mother / my brother / nobody…' }, follow: [{ es: '¿En qué asignatura?', en: 'In which subject?' }, { es: '¿Te ayudaba bien?', en: 'Did they help you well?' }] },
            { q: { es: '¿Tienes amigos que conoces solo por internet?', en: 'Do you have friends you only know online?' }, help: { es: 'Sí, de… / No, ninguno.', en: 'Yes, from… / No, none.' }, follow: [{ es: '¿Los conociste en persona?', en: 'Have you met them in person?' }, { es: '¿Cómo fue?', en: 'How was it?' }] },
            { q: { es: '¿Prefieres clases en persona o por internet?', en: 'Do you prefer classes in person or online?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué es lo mejor de cada una?', en: 'What’s the best thing about each?' }, { es: '¿Y lo peor?', en: 'And the worst?' }] },
          ],
          words: [{ es: 'satelital', en: 'satellite (adj.)' }, { es: 'la institutriz', en: 'the governess' }, { es: 'los compañeros', en: 'the classmates' }, { es: 'abrazarse', en: 'to hug' }, { es: 'los deberes', en: 'homework' }],
        },
        A2: {
          scene: { es: 'Lily, una alumna de ocho años, vive en una estación ganadera a setecientos kilómetros. Es la más inteligente de la clase, pero desde hace un mes no habla en las clases y no entrega los deberes. Su madre, que es su tutora en casa, trabaja con las vacas todo el día porque se fue el capataz. Megan habla con la madre por videollamada.', en: 'Lily, an eight-year-old student, lives on a cattle station seven hundred kilometres away. She is the brightest in the class, but for a month she hasn’t spoken in lessons or handed in homework. Her mother, who is her home tutor, works with the cows all day because the station manager left. Megan talks to the mother by video call.' },
          opener: { es: 'La madre de Lily está agotada. Me dijo: «No puedo ser madre, maestra y vaquera a la vez. Algo tengo que dejar». Está pensando en mandar a Lily a un internado en Adelaida, a dos mil kilómetros. Allí tendría profesores y compañeros, pero solo vería a su familia en vacaciones. Lily me dijo en secreto que no quiere irse. ¿Qué le aconsejo a la madre?', en: 'Lily’s mother is exhausted. She told me: “I can’t be a mother, a teacher and a stockwoman at the same time. Something has to give.” She’s thinking of sending Lily to a boarding school in Adelaide, two thousand kilometres away. There she’d have teachers and classmates, but she’d only see her family in the holidays. Lily told me secretly she doesn’t want to go. What should I advise the mother?' },
          decide: {
            ask: { es: '¿Qué propones?', en: 'What do you propose?' },
            options: [
              { say: { es: 'Buscar una institutriz joven que viva en la estación.', en: 'Find a young governess to live on the station.' }, then: { es: 'Llega una estudiante de Irlanda por un año. Lily vuelve a hablar en clase.', en: 'A student from Ireland comes for a year. Lily starts speaking in class again.' } },
              { say: { es: 'Probar el internado un semestre.', en: 'Try the boarding school for a semester.' }, then: { es: 'Las primeras semanas Lily llora mucho. Después hace una amiga y se queda.', en: 'In the first weeks Lily cries a lot. Then she makes a friend and stays.' } },
              { say: { es: 'Darle más clases individuales con Megan.', en: 'Give her more one-to-one lessons with Megan.' }, then: { es: 'Megan trabaja más horas. Lily mejora, pero Megan está muy cansada.', en: 'Megan works longer hours. Lily improves, but Megan is very tired.' } },
            ],
          },
          twist: { es: 'Lily le pide a Megan que no le cuente a su madre lo que dijo en secreto. ¿Debería Megan guardar el secreto?', en: 'Lily asks Megan not to tell her mother what she said in secret. Should Megan keep the secret?' },
          questions: [
            { q: { es: '¿Vivirías lejos de tu familia para estudiar?', en: 'Would you live far from your family to study?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿A qué edad?', en: 'At what age?' }] },
            { q: { es: '¿Un maestro te ayudó en un momento difícil?', en: 'Did a teacher help you at a difficult time?' }, help: { es: 'Sí, mi maestra de… / No que recuerde.', en: 'Yes, my… teacher / Not that I remember.' }, follow: [{ es: '¿Qué hizo?', en: 'What did they do?' }, { es: '¿Se lo agradeciste?', en: 'Did you thank them?' }] },
            { q: { es: '¿Los padres deberían enseñar a sus hijos en casa?', en: 'Should parents teach their children at home?' }, help: { es: 'Sí, porque… / Mejor no, porque…', en: 'Yes, because… / Better not, because…' }, follow: [{ es: '¿Es común en tu país?', en: 'Is it common in your country?' }, { es: '¿Conoces a alguien?', en: 'Do you know anyone?' }] },
            { q: { es: '¿Alguna vez tuviste demasiados trabajos a la vez?', en: 'Have you ever had too many jobs at once?' }, help: { es: 'Sí, cuando… / No, por suerte.', en: 'Yes, when… / No, luckily.' }, follow: [{ es: '¿Qué dejaste?', en: 'What did you give up?' }, { es: '¿Cómo lo resolviste?', en: 'How did you solve it?' }] },
          ],
          words: [{ es: 'agotado', en: 'exhausted' }, { es: 'el capataz', en: 'the station manager' }, { es: 'el internado', en: 'the boarding school' }, { es: 'la videollamada', en: 'the video call' }, { es: 'entregar', en: 'to hand in' }],
        },
        B1: {
          scene: { es: 'El ministerio de educación propone un cambio: reemplazar parte de las clases en vivo de la Escuela del Aire por lecciones grabadas y ejercicios con inteligencia artificial. Sería más barato y los alumnos podrían estudiar a cualquier hora. Megan tiene que dar su opinión en una reunión con el ministro la semana que viene.', en: 'The education department is proposing a change: replacing part of the School of the Air’s live lessons with recorded lessons and AI exercises. It would be cheaper and students could study at any time. Megan has to give her opinion at a meeting with the minister next week.' },
          opener: { es: 'No soy enemiga de la tecnología: sin ella mi escuela no existiría. Y es verdad que un programa puede corregir sumas mejor que yo a las once de la noche. Pero para muchos de mis alumnos, la clase en vivo es el único momento del día en que hablan con alguien que no es de su familia. Una pantalla que responde no es lo mismo que una persona que te conoce. Pero tampoco quiero defender mi puesto disfrazándolo de pedagogía. ¿Qué no puede reemplazar una máquina en la educación?', en: 'I’m not an enemy of technology: without it my school wouldn’t exist. And it’s true that a program can mark sums better than I can at eleven at night. But for many of my students, the live class is the only moment of the day when they talk to someone outside their family. A screen that answers isn’t the same as a person who knows you. But I don’t want to defend my job by dressing it up as pedagogy either. What can a machine not replace in education?' },
          decide: {
            ask: { es: '¿Qué propone Megan en la reunión?', en: 'What does Megan propose at the meeting?' },
            options: [
              { say: { es: 'Usar la tecnología para los ejercicios y mantener todas las clases en vivo.', en: 'Use technology for exercises and keep all the live lessons.' }, then: { es: 'El ministro acepta un plan piloto. Las madres agradecen tener menos trabajo de corrección.', en: 'The minister agrees to a pilot. The mothers are grateful to have less marking to do.' } },
              { say: { es: 'Aceptar el cambio a cambio de más semanas presenciales.', en: 'Accept the change in exchange for more in-person weeks.' }, then: { es: 'Los niños se ven tres veces al año en vez de una. La conexión entre ellos mejora mucho.', en: 'The children meet three times a year instead of once. The bond between them grows much stronger.' } },
              { say: { es: 'Rechazar el cambio y pedir que las familias voten.', en: 'Reject the change and ask the families to vote.' }, then: { es: 'Las familias votan: el setenta por ciento quiere más maestros, no más pantallas.', en: 'The families vote: seventy per cent want more teachers, not more screens.' } },
            ],
          },
          twist: { es: 'En la reunión, el ministro muestra datos: los alumnos que usaron el programa de prueba sacaron mejores notas en matemáticas. Pero sus maestros dicen que están más tristes y hablan menos. ¿Qué pesa más?', en: 'At the meeting, the minister shows data: students who used the trial program got better maths marks. But their teachers say they are sadder and talk less. What matters more?' },
          questions: [
            { q: { es: '¿Qué aprendiste de un profesor que nunca te podría haber enseñado una máquina?', en: 'What did you learn from a teacher that a machine could never have taught you?' }, help: { es: 'Un profesor me enseñó a…', en: 'A teacher taught me to…' }, follow: [{ es: '¿Todavía lo usas?', en: 'Do you still use it?' }, { es: '¿Se lo dijiste alguna vez?', en: 'Did you ever tell them?' }] },
            { q: { es: '¿Usas la inteligencia artificial para aprender?', en: 'Do you use artificial intelligence to learn?' }, help: { es: 'Sí, para… / No, porque…', en: 'Yes, for… / No, because…' }, follow: [{ es: '¿Te ayuda de verdad?', en: 'Does it really help you?' }, { es: '¿Qué le falta?', en: 'What does it lack?' }] },
            { q: { es: '¿Las notas son la mejor forma de medir si un alumno aprende?', en: 'Are marks the best way to measure whether a student is learning?' }, help: { es: 'No del todo, porque… / Sí, porque…', en: 'Not entirely, because… / Yes, because…' }, follow: [{ es: '¿Cómo lo medirías tú?', en: 'How would you measure it?' }, { es: '¿Tus notas reflejaban lo que sabías?', en: 'Did your marks reflect what you knew?' }] },
            { q: { es: '¿Defendiste alguna vez algo que también te convenía a ti?', en: 'Have you ever defended something that also benefited you?' }, help: { es: 'Sí, cuando… y sé que…', en: 'Yes, when… and I know that…' }, follow: [{ es: '¿Te sentiste honesto?', en: 'Did you feel honest?' }, { es: '¿Cómo lo explicaste?', en: 'How did you explain it?' }] },
          ],
          words: [{ es: 'reemplazar', en: 'to replace' }, { es: 'grabado', en: 'recorded' }, { es: 'corregir', en: 'to mark / correct' }, { es: 'disfrazar', en: 'to dress up / disguise' }, { es: 'presencial', en: 'in person' }],
        },
      },
    },
  ],
};
