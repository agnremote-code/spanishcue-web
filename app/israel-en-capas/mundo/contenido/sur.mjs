// El Sur · floating in the Dead Sea, sunrise on Masada, the stars over the Ramon crater, a
// Bedouin tent in the Negev and the coral reef of Eilat. Five places, four levels each
// (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'sur',
  spots: [
    // ------------------------------------------------------------ the Dead Sea
    {
      id: 'mar-muerto',
      name: { es: 'Flotar en el mar Muerto', en: 'Floating in the Dead Sea' },
      who: { name: 'Olga', role: { es: 'socorrista', en: 'lifeguard' } },
      levels: {
        A0: {
          scene: { es: 'Hace mucho calor. El agua es azul y muy tranquila. En la playa hay barro negro. La gente flota y lee el periódico en el agua. Olga es socorrista.', en: 'It is very hot. The water is blue and very calm. On the beach there is black mud. People float and read the newspaper in the water. Olga is a lifeguard.' },
          opener: { es: '¡Hola! Aquí no nadas: flotas. ¡Pero no abras los ojos en el agua!', en: 'Hello! Here you don’t swim: you float. But don’t open your eyes in the water!' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Entro y floto.', en: 'I go in and float.' }, then: { es: '¡Flotas sin moverte! Es muy raro y divertido.', en: 'You float without moving! It is very strange and fun.' } },
              { say: { es: 'Me pongo barro.', en: 'I put mud on.' }, then: { es: 'Estás negro de pies a cabeza. Olga ríe y saca una foto.', en: 'You are black from head to toe. Olga laughs and takes a photo.' } },
              { say: { es: 'Me quedo en la sombra.', en: 'I stay in the shade.' }, then: { es: 'Olga te da agua fresca. «Bebe mucho aquí», dice.', en: 'Olga gives you cool water. “Drink a lot here,” she says.' } },
            ],
          },
          twist: { es: 'Te entra agua en la boca. ¡Es muy salada! ¿Qué haces?', en: 'Water gets in your mouth. It is very salty! What do you do?' },
          questions: [
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí. / No, no sé.', en: 'Yes. / No, I can’t.' }, follow: [{ es: '¿Dónde nadas?', en: 'Where do you swim?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like the heat?' }, help: { es: 'Sí, mucho. / No, prefiero el frío.', en: 'Yes, a lot. / No, I prefer the cold.' }, follow: [{ es: '¿Hace calor en tu ciudad?', en: 'Is it hot in your city?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Bebes mucha agua?', en: 'Do you drink a lot of water?' }, help: { es: 'Sí, dos litros. / No mucho.', en: 'Yes, two litres. / Not much.' }, follow: [{ es: '¿Y café?', en: 'And coffee?' }, { es: '¿Y en verano?', en: 'And in summer?' }] },
            { q: { es: '¿Te gusta leer en la playa?', en: 'Do you like reading on the beach?' }, help: { es: 'Sí. / No, prefiero dormir.', en: 'Yes. / No, I prefer sleeping.' }, follow: [{ es: '¿Qué lees?', en: 'What do you read?' }, { es: '¿Con música?', en: 'With music?' }] },
          ],
          words: [{ es: 'flotar', en: 'to float' }, { es: 'el barro', en: 'mud' }, { es: 'salado', en: 'salty' }, { es: 'la sombra', en: 'the shade' }, { es: 'la socorrista', en: 'the lifeguard' }],
        },
        A1: {
          scene: { es: 'El mar Muerto es el punto más bajo de la Tierra: está a más de cuatrocientos treinta metros bajo el nivel del mar. Su agua tiene diez veces más sal que el océano, por eso no hay peces y las personas flotan. Mucha gente viene por su barro y su sal, que son buenos para la piel. Olga trabaja en un balneario. Llegó de Ucrania hace veinte años.', en: 'The Dead Sea is the lowest point on Earth: it is more than four hundred and thirty metres below sea level. Its water has ten times more salt than the ocean, so there are no fish and people float. Many people come for its mud and salt, which are good for the skin. Olga works at a spa. She came from Ukraine twenty years ago.' },
          opener: { es: 'Mi trabajo es raro: aquí nadie se ahoga como en el mar normal, pero hay otros peligros. Si te entra agua en los ojos, duele mucho. Si te quedas boca abajo, puedes tragar agua salada y es peligroso. Y el sol quema muy rápido. Lo más importante: no estés más de veinte minutos en el agua. ¿Tú sueles hacer caso a los socorristas?', en: 'My job is strange: here nobody drowns like in the normal sea, but there are other dangers. If water gets in your eyes, it hurts a lot. If you end up face down, you can swallow salty water and it’s dangerous. And the sun burns very fast. Most important: don’t stay in the water more than twenty minutes. Do you usually listen to lifeguards?' },
          decide: {
            ask: { es: '¿Qué haces primero?', en: 'What do you do first?' },
            options: [
              { say: { es: 'Me pongo crema y entro despacio.', en: 'I put on sun cream and go in slowly.' }, then: { es: 'Olga dice: «Perfecto, eres un buen alumno». Flotas tranquilo quince minutos.', en: 'Olga says: “Perfect, you’re a good student.” You float calmly for fifteen minutes.' } },
              { say: { es: 'Corro y salto al agua.', en: 'I run and jump into the water.' }, then: { es: 'Te salpica agua en la cara. Olga corre con una botella de agua dulce para lavarte los ojos.', en: 'Water splashes your face. Olga runs with a bottle of fresh water to rinse your eyes.' } },
              { say: { es: 'Pregunto por el barro.', en: 'I ask about the mud.' }, then: { es: '«Te lo pones, esperas a que se seque y te duchas», explica Olga.', en: '“You put it on, wait for it to dry and shower off,” Olga explains.' } },
            ],
          },
          twist: { es: 'Un turista lleva cuarenta minutos en el agua y no quiere salir. Dice que está muy bien. ¿Qué le dice Olga?', en: 'A tourist has been in the water forty minutes and doesn’t want to come out. He says he feels great. What does Olga tell him?' },
          questions: [
            { q: { es: '¿Haces caso a las reglas de seguridad?', en: 'Do you follow safety rules?' }, help: { es: 'Sí, siempre. / A veces no…', en: 'Yes, always. / Sometimes not…' }, follow: [{ es: '¿Cuál no respetas?', en: 'Which one don’t you follow?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Cuidas tu piel?', en: 'Do you look after your skin?' }, help: { es: 'Sí, uso… / No mucho.', en: 'Yes, I use… / Not much.' }, follow: [{ es: '¿Usas crema de sol?', en: 'Do you use sun cream?' }, { es: '¿Todos los días?', en: 'Every day?' }] },
            { q: { es: '¿Viviste en otro país?', en: 'Have you lived in another country?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Hay un lugar natural raro en tu país?', en: 'Is there an unusual natural place in your country?' }, help: { es: 'Sí, se llama… y es…', en: 'Yes, it’s called… and it’s…' }, follow: [{ es: '¿Fuiste?', en: 'Have you been?' }, { es: '¿Qué tiene de especial?', en: 'What’s special about it?' }] },
          ],
          words: [{ es: 'el nivel del mar', en: 'sea level' }, { es: 'ahogarse', en: 'to drown' }, { es: 'tragar', en: 'to swallow' }, { es: 'quemar', en: 'to burn' }, { es: 'el balneario', en: 'the spa' }],
        },
        A2: {
          scene: { es: 'El mar Muerto baja más de un metro cada año, porque se usa el agua del río Jordán antes de que llegue y las fábricas sacan minerales. Al bajar el agua, se abren agujeros enormes en el suelo, de repente. Ya se cerraron playas, una carretera y un hotel. La playa del balneario de Olga está ahora a un kilómetro del edificio: antes estaba en la puerta.', en: 'The Dead Sea drops more than a metre every year, because the Jordan River’s water is used before it arrives and factories extract minerals. As the water drops, huge holes open in the ground, suddenly. Beaches, a road and a hotel have already closed. The beach at Olga’s spa is now a kilometre from the building: it used to be at the door.' },
          opener: { es: 'Cuando llegué, salía del edificio y en diez pasos estaba en el agua. Hoy los clientes van en un pequeño tren. El dueño quiere construir un nuevo edificio más cerca del agua, pero en diez años el mar estará lejos otra vez, y además hay riesgo de agujeros. Algunos compañeros dicen que el balneario va a cerrar. Yo tengo cincuenta y cinco años. ¿Qué harías en mi lugar?', en: 'When I arrived, I walked out of the building and in ten steps I was in the water. Today customers go on a little train. The owner wants to build a new building closer to the water, but in ten years the sea will be far away again, and there’s also the risk of sinkholes. Some colleagues say the spa will close. I’m fifty-five. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué hace Olga?', en: 'What does Olga do?' },
            options: [
              { say: { es: 'Buscar trabajo en un hotel de Eilat.', en: 'Look for work at a hotel in Eilat.' }, then: { es: 'Encuentra trabajo en la piscina de un hotel. Gana más, pero echa de menos el silencio del mar Muerto.', en: 'She finds work at a hotel pool. She earns more, but misses the silence of the Dead Sea.' } },
              { say: { es: 'Quedarse y aprender a dar masajes con barro.', en: 'Stay and learn to give mud massages.' }, then: { es: 'Sus masajes se hacen famosos. Aunque el mar se aleja, los clientes siguen viniendo.', en: 'Her massages become famous. Even as the sea moves away, customers keep coming.' } },
              { say: { es: 'Unirse a una campaña para salvar el mar.', en: 'Join a campaign to save the sea.' }, then: { es: 'Habla en la televisión. Su frase «el mar se va de mi puerta» se repite en las noticias.', en: 'She speaks on television. Her line “the sea is leaving my doorstep” is repeated on the news.' } },
            ],
          },
          twist: { es: 'Una mañana se abre un agujero de cinco metros cerca del camino del tren. Nadie se hace daño, pero el dueño quiere seguir como si nada. ¿Qué debería decir Olga?', en: 'One morning a five-metre hole opens near the train path. Nobody is hurt, but the owner wants to carry on as if nothing happened. What should Olga say?' },
          questions: [
            { q: { es: '¿Viste cómo cambiaba un lugar natural con los años?', en: 'Have you seen a natural place change over the years?' }, help: { es: 'Sí, el/la… antes era… y ahora…', en: 'Yes, the… used to be… and now…' }, follow: [{ es: '¿Por qué cambió?', en: 'Why did it change?' }, { es: '¿Te da pena?', en: 'Does it make you sad?' }] },
            { q: { es: '¿Cambiarías de trabajo a los cincuenta años?', en: 'Would you change jobs at fifty?' }, help: { es: 'Sí, si… / Es difícil porque…', en: 'Yes, if… / It’s hard because…' }, follow: [{ es: '¿Conoces a alguien que lo hizo?', en: 'Do you know someone who did?' }, { es: '¿Cómo le fue?', en: 'How did it go?' }] },
            { q: { es: '¿Quién debería pagar para salvar un lugar natural?', en: 'Who should pay to save a natural place?' }, help: { es: 'El gobierno / las empresas / los turistas…', en: 'The government / companies / tourists…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Pagarías tú?', en: 'Would you pay?' }] },
            { q: { es: '¿Qué haces cuando tu jefe no ve un problema?', en: 'What do you do when your boss doesn’t see a problem?' }, help: { es: 'Le digo… / Escribo… / Me callo…', en: 'I tell them… / I write… / I keep quiet…' }, follow: [{ es: '¿Te pasó?', en: 'Has it happened to you?' }, { es: '¿Qué pasó después?', en: 'What happened after?' }] },
          ],
          words: [{ es: 'el agujero', en: 'the hole / sinkhole' }, { es: 'de repente', en: 'suddenly' }, { es: 'alejarse', en: 'to move away' }, { es: 'el masaje', en: 'the massage' }, { es: 'la campaña', en: 'the campaign' }],
        },
        B1: {
          scene: { es: 'Hace años que se discute un gran proyecto: un canal o una tubería que traería agua del mar Rojo al mar Muerto, a casi doscientos kilómetros, para frenar su desaparición. Israel, Jordania y los palestinos comparten la orilla del mar Muerto y tendrían que ponerse de acuerdo. El proyecto costaría miles de millones, y los científicos no saben qué pasaría al mezclar dos aguas tan distintas: algunos dicen que el mar Muerto podría ponerse rojo por las algas. Olga participa en un debate público en el balneario.', en: 'A huge project has been discussed for years: a canal or pipeline bringing water from the Red Sea to the Dead Sea, nearly two hundred kilometres, to stop it disappearing. Israel, Jordan and the Palestinians share the Dead Sea shore and would have to agree. The project would cost billions, and scientists don’t know what would happen when mixing two such different waters: some say the Dead Sea could turn red from algae. Olga takes part in a public debate at the spa.' },
          opener: { es: 'Me gusta la idea de que tres vecinos que no siempre se entienden trabajen juntos por un mar. Pero me da miedo jugar con la naturaleza a lo grande: ¿y si lo arreglamos y lo rompemos de otra forma? Otros dicen que la solución es más simple: dejar que el río Jordán vuelva a llegar con agua, usar menos para la agricultura y controlar a las fábricas. Pero eso exige que todos renuncien a algo, y eso es lo más difícil. ¿Es mejor una gran solución técnica arriesgada o muchos pequeños sacrificios?', en: 'I like the idea of three neighbours who don’t always understand each other working together for a sea. But I’m afraid of playing with nature on a big scale: what if we fix it and break it another way? Others say the solution is simpler: let the Jordan River reach it with water again, use less for agriculture and control the factories. But that requires everyone to give something up, and that’s the hardest part. Is a big risky technical solution better, or many small sacrifices?' },
          decide: {
            ask: { es: '¿Qué defiende Olga en el debate?', en: 'What does Olga argue in the debate?' },
            options: [
              { say: { es: 'Probar primero con una tubería pequeña de prueba.', en: 'Test first with a small trial pipeline.' }, then: { es: 'La propuesta gusta a los científicos. Los políticos dicen que es demasiado lenta.', en: 'Scientists like the proposal. Politicians say it’s too slow.' } },
              { say: { es: 'Devolver agua al río Jordán antes que nada.', en: 'Return water to the Jordan River before anything else.' }, then: { es: 'Los agricultores protestan: dicen que sin esa agua pierden sus cosechas.', en: 'Farmers protest: they say without that water they’ll lose their harvests.' } },
              { say: { es: 'Aceptar que el mar se haga más pequeño, y adaptarse.', en: 'Accept that the sea gets smaller, and adapt.' }, then: { es: 'Mucha gente se enfada. Una anciana le dice: «Es como aceptar que se muera un familiar».', en: 'Many people get angry. An old woman tells her: “It’s like accepting a relative’s death.”' } },
            ],
          },
          twist: { es: 'Una empresa ofrece pagar todo el proyecto a cambio de los derechos para explotar los minerales del mar durante cincuenta años. Resolvería el problema del dinero, pero el mar quedaría en manos privadas. ¿Aceptarías?', en: 'A company offers to pay for the whole project in exchange for the rights to exploit the sea’s minerals for fifty years. It would solve the money problem, but the sea would be in private hands. Would you accept?' },
          questions: [
            { q: { es: '¿Confías en las grandes soluciones tecnológicas para la naturaleza?', en: 'Do you trust big technological fixes for nature?' }, help: { es: 'Sí, cuando… / Me dan miedo porque…', en: 'Yes, when… / They scare me because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Funcionó?', en: 'Did it work?' }] },
            { q: { es: '¿A qué renunciarías tú para proteger el medio ambiente?', en: 'What would you give up to protect the environment?' }, help: { es: 'Renunciaría a… pero no a…', en: 'I’d give up… but not…' }, follow: [{ es: '¿Ya lo haces?', en: 'Do you already?' }, { es: '¿Qué te cuesta más?', en: 'What’s hardest for you?' }] },
            { q: { es: '¿Pueden los problemas de la naturaleza unir a países que no se llevan bien?', en: 'Can nature’s problems unite countries that don’t get on?' }, help: { es: 'Creo que sí, porque… / Es difícil porque…', en: 'I think so, because… / It’s hard because…' }, follow: [{ es: '¿Un ejemplo real?', en: 'A real example?' }, { es: '¿Qué hace falta?', en: 'What’s needed?' }] },
            { q: { es: '¿Un recurso natural puede ser privado?', en: 'Can a natural resource be private?' }, help: { es: 'En algunos casos… / Nunca, porque…', en: 'In some cases… / Never, because…' }, follow: [{ es: '¿Y el agua?', en: 'And water?' }, { es: '¿Qué pasa en tu país?', en: 'What happens in your country?' }] },
          ],
          words: [{ es: 'la tubería', en: 'the pipeline' }, { es: 'renunciar', en: 'to give up' }, { es: 'las algas', en: 'algae' }, { es: 'la cosecha', en: 'the harvest' }, { es: 'explotar', en: 'to exploit' }],
        },
      },
    },
    // ------------------------------------------------------------ Masada
    {
      id: 'masada',
      name: { es: 'El amanecer en Masada', en: 'Sunrise on Masada' },
      who: { name: 'Itai', role: { es: 'guía', en: 'guide' } },
      levels: {
        A0: {
          scene: { es: 'Son las cuatro y media de la mañana. Está oscuro. Hay un camino largo por una montaña. Itai es guía. Tiene una linterna.', en: 'It is half past four in the morning. It is dark. There is a long path up a mountain. Itai is a guide. He has a torch.' },
          opener: { es: 'Buenos días. Vamos arriba. Una hora caminando. ¿Estás listo?', en: 'Good morning. We are going up. One hour walking. Are you ready?' },
          decide: {
            ask: { es: '¿Cómo subes?', en: 'How do you go up?' },
            options: [
              { say: { es: 'Caminando.', en: 'Walking.' }, then: { es: 'Es difícil. Arriba ves el sol. ¡Es precioso!', en: 'It is hard. At the top you see the sun. It is beautiful!' } },
              { say: { es: 'En el teleférico.', en: 'By cable car.' }, then: { es: 'Es rápido. Pero el teleférico abre a las ocho…', en: 'It is fast. But the cable car opens at eight…' } },
              { say: { es: 'Despacio, con agua.', en: 'Slowly, with water.' }, then: { es: 'Itai dice: «¡Bien! Despacio y con agua».', en: 'Itai says: “Good! Slowly and with water.”' } },
            ],
          },
          twist: { es: 'Arriba, el sol sale detrás de las montañas. Todos están en silencio. ¿Sacas una foto o miras?', en: 'At the top, the sun rises behind the mountains. Everyone is silent. Do you take a photo or watch?' },
          questions: [
            { q: { es: '¿Te levantas temprano?', en: 'Do you get up early?' }, help: { es: 'Sí. / No, nunca.', en: 'Yes. / No, never.' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Para qué?', en: 'What for?' }] },
            { q: { es: '¿Te gusta caminar en la montaña?', en: 'Do you like walking in the mountains?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Viste un amanecer?', en: 'Have you seen a sunrise?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Fue bonito?', en: 'Was it beautiful?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Prefieres el teleférico o caminar?', en: 'Do you prefer the cable car or walking?' }, help: { es: 'Prefiero…', en: 'I prefer…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes miedo a la altura?', en: 'Are you afraid of heights?' }] },
          ],
          words: [{ es: 'el camino', en: 'the path' }, { es: 'la linterna', en: 'the torch' }, { es: 'el teleférico', en: 'the cable car' }, { es: 'subir', en: 'to go up' }, { es: 'el amanecer', en: 'sunrise' }],
        },
        A1: {
          scene: { es: 'Masada es una fortaleza en lo alto de una montaña, junto al desierto y al mar Muerto. La construyó el rey Herodes hace más de dos mil años, con palacios, baños y depósitos de agua. Los turistas suben por el «camino de la serpiente», con muchas curvas, antes del amanecer, porque después hace demasiado calor. Itai lleva un grupo de estudiantes.', en: 'Masada is a fortress on top of a mountain, next to the desert and the Dead Sea. King Herod built it more than two thousand years ago, with palaces, baths and water tanks. Tourists climb the “snake path”, with lots of bends, before sunrise, because afterwards it’s too hot. Itai is leading a group of students.' },
          opener: { es: 'Imaginen: aquí arriba, en pleno desierto, Herodes tenía piscinas, baños calientes y frescos y comida para años. ¿Cómo subían el agua? Con cisternas enormes que guardaban la lluvia de pocos días al año. Era un genio de la ingeniería… y un rey muy cruel. ¿Qué es más importante para ti en un líder: que sea inteligente o que sea bueno?', en: 'Imagine: up here, in the middle of the desert, Herod had pools, hot and cool baths and food for years. How did they bring up water? With huge cisterns that stored the rain of a few days a year. He was an engineering genius… and a very cruel king. What matters more to you in a leader: being clever or being good?' },
          decide: {
            ask: { es: '¿Qué quieres ver primero?', en: 'What do you want to see first?' },
            options: [
              { say: { es: 'El palacio del norte.', en: 'The northern palace.' }, then: { es: 'Está colgado en el borde de la montaña. La vista es increíble y da un poco de vértigo.', en: 'It hangs on the edge of the mountain. The view is incredible and a bit dizzying.' } },
              { say: { es: 'Las cisternas de agua.', en: 'The water cisterns.' }, then: { es: 'Bajas a una cisterna enorme. Hace fresco y hay eco. Gritas tu nombre.', en: 'You go down into a huge cistern. It’s cool and there’s an echo. You shout your name.' } },
              { say: { es: 'Los baños romanos.', en: 'The Roman baths.' }, then: { es: 'Todavía se ven los colores de las paredes. Itai explica cómo calentaban el agua.', en: 'You can still see the colours on the walls. Itai explains how they heated the water.' } },
            ],
          },
          twist: { es: 'Una estudiante se siente mal por el calor. Faltan dos horas para el teleférico. ¿Qué hacen?', en: 'A student feels ill from the heat. There are two hours until the cable car. What do you do?' },
          questions: [
            { q: { es: '¿Qué es más importante en un líder: ser inteligente o ser bueno?', en: 'What is more important in a leader: being clever or being good?' }, help: { es: 'Para mí,… porque…', en: 'For me,… because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Se puede ser las dos cosas?', en: 'Can you be both?' }] },
            { q: { es: '¿Hay ruinas antiguas en tu país?', en: 'Are there ancient ruins in your country?' }, help: { es: 'Sí, por ejemplo… / No muchas.', en: 'Yes, for example… / Not many.' }, follow: [{ es: '¿Las visitaste?', en: 'Have you visited them?' }, { es: '¿Qué te gustó?', en: 'What did you like?' }] },
            { q: { es: '¿Qué haces cuando hace mucho calor?', en: 'What do you do when it’s very hot?' }, help: { es: 'Me quedo en… / Bebo… / Voy a…', en: 'I stay in… / I drink… / I go to…' }, follow: [{ es: '¿Tienes aire acondicionado?', en: 'Do you have air conditioning?' }, { es: '¿Duermes bien?', en: 'Do you sleep well?' }] },
            { q: { es: '¿Te gusta la historia?', en: 'Do you like history?' }, help: { es: 'Sí, sobre todo… / No mucho.', en: 'Yes, especially… / Not much.' }, follow: [{ es: '¿Qué época?', en: 'Which period?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'la fortaleza', en: 'the fortress' }, { es: 'la cisterna', en: 'the cistern' }, { es: 'la curva', en: 'the bend' }, { es: 'el vértigo', en: 'vertigo' }, { es: 'cruel', en: 'cruel' }],
        },
        A2: {
          scene: { es: 'Según el historiador Josefo, hace casi dos mil años casi mil rebeldes judíos se refugiaron en Masada y resistieron a los romanos durante meses. Cuando los romanos estaban a punto de entrar, los rebeldes eligieron morir antes que ser esclavos. La historia se convirtió en un símbolo nacional. Pero algunos historiadores dudan de que fuera exactamente así. Un estudiante del grupo le pregunta a Itai: «¿Y si es una leyenda?».', en: 'According to the historian Josephus, nearly two thousand years ago almost a thousand Jewish rebels took refuge on Masada and held out against the Romans for months. When the Romans were about to break in, the rebels chose death rather than slavery. The story became a national symbol. But some historians doubt it happened exactly like that. A student in the group asks Itai: “What if it’s a legend?”' },
          opener: { es: 'Es una buena pregunta. Solo tenemos un texto que lo cuenta, escrito por alguien que trabajaba para los romanos. Los arqueólogos encontraron restos, pero menos de los esperados. Como guía, ¿cuento la historia heroica que la gente espera oír o explico las dudas? Si explico las dudas, algunos se van decepcionados. Si no las explico, siento que miento un poco. ¿Tú qué harías?', en: 'It’s a good question. We only have one text that tells it, written by someone who worked for the Romans. Archaeologists found remains, but fewer than expected. As a guide, do I tell the heroic story people expect to hear or explain the doubts? If I explain the doubts, some leave disappointed. If I don’t, I feel I’m lying a bit. What would you do?' },
          decide: {
            ask: { es: '¿Cómo cuenta Itai la historia?', en: 'How does Itai tell the story?' },
            options: [
              { say: { es: 'Contar la historia y después las dudas.', en: 'Tell the story and then the doubts.' }, then: { es: 'Los estudiantes discuten media hora. Uno dice que ahora la historia le parece más interesante.', en: 'The students argue for half an hour. One says the story now seems more interesting to him.' } },
              { say: { es: 'Contar solo la versión clásica.', en: 'Tell only the classic version.' }, then: { es: 'Todos se emocionan. Pero el estudiante que preguntó se queda con una cara rara.', en: 'Everyone is moved. But the student who asked looks puzzled.' } },
              { say: { es: 'Preguntar al grupo qué creen.', en: 'Ask the group what they believe.' }, then: { es: 'Hacen una votación. Mitad y mitad. Itai sonríe: «Como los historiadores».', en: 'They take a vote. Half and half. Itai smiles: “Just like the historians.”' } },
            ],
          },
          twist: { es: 'El profesor del grupo le pide a Itai, en privado, que no hable de dudas: «Son jóvenes, necesitan héroes». ¿Le hace caso?', en: 'The group’s teacher asks Itai, privately, not to talk about doubts: “They’re young, they need heroes.” Does he listen to him?' },
          questions: [
            { q: { es: '¿Hay una historia heroica de tu país que quizás no fue exactamente así?', en: 'Is there a heroic story from your country that maybe didn’t happen exactly like that?' }, help: { es: 'Sí, la historia de… / No sé.', en: 'Yes, the story of… / I don’t know.' }, follow: [{ es: '¿Qué se cuenta en la escuela?', en: 'What is taught at school?' }, { es: '¿Qué crees tú?', en: 'What do you believe?' }] },
            { q: { es: '¿Los jóvenes necesitan héroes?', en: 'Do young people need heroes?' }, help: { es: 'Sí, porque… / No, necesitan…', en: 'Yes, because… / No, they need…' }, follow: [{ es: '¿Quién era tu héroe?', en: 'Who was your hero?' }, { es: '¿Lo sigue siendo?', en: 'Is he/she still?' }] },
            { q: { es: '¿Prefieres una historia bonita o una historia exacta?', en: 'Do you prefer a beautiful story or an accurate one?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿En las películas?', en: 'In films?' }, { es: '¿Y en las noticias?', en: 'And in the news?' }] },
            { q: { es: '¿Alguna vez te dio miedo decepcionar a alguien con la verdad?', en: 'Have you ever been afraid of disappointing someone with the truth?' }, help: { es: 'Sí, cuando… / No.', en: 'Yes, when… / No.' }, follow: [{ es: '¿Lo dijiste?', en: 'Did you say it?' }, { es: '¿Cómo reaccionó?', en: 'How did they react?' }] },
          ],
          words: [{ es: 'el rebelde', en: 'the rebel' }, { es: 'resistir', en: 'to hold out' }, { es: 'la leyenda', en: 'the legend' }, { es: 'decepcionado', en: 'disappointed' }, { es: 'el arqueólogo', en: 'the archaeologist' }],
        },
        B1: {
          scene: { es: 'Durante décadas, los soldados israelíes terminaban su formación con una ceremonia en lo alto de Masada y juraban: «Masada no volverá a caer». Hoy el sitio es Patrimonio de la Humanidad y recibe casi un millón de visitantes al año. Algunos lo ven como un lugar de orgullo; otros, como un ejemplo de que los mitos nacionales pueden empujar a decisiones extremas. Itai prepara una visita para un grupo internacional de profesores de historia, de diez países distintos.', en: 'For decades, Israeli soldiers finished their training with a ceremony at the top of Masada and swore: “Masada shall not fall again.” Today the site is a World Heritage Site and receives nearly a million visitors a year. Some see it as a place of pride; others, as an example of how national myths can push people towards extreme decisions. Itai is preparing a visit for an international group of history teachers from ten different countries.' },
          opener: { es: 'Todos los países tienen su Masada: una batalla perdida que se recuerda como victoria moral, un grupo que prefirió morir antes que rendirse. Esas historias unen a la gente, pero también pueden enseñar que la única salida digna es la muerte, o que el mundo está siempre contra nosotros. Yo quiero que los profesores se vayan pensando, no solo emocionados. ¿Qué papel deberían tener los mitos nacionales en la educación de un país?', en: 'Every country has its Masada: a lost battle remembered as a moral victory, a group that preferred death to surrender. Those stories unite people, but they can also teach that the only dignified way out is death, or that the world is always against us. I want the teachers to leave thinking, not just moved. What role should national myths play in a country’s education?' },
          decide: {
            ask: { es: '¿Cómo organiza Itai la visita?', en: 'How does Itai organise the visit?' },
            options: [
              { say: { es: 'Pedir a cada profesor que cuente «la Masada» de su país.', en: 'Ask each teacher to tell their country’s “Masada”.' }, then: { es: 'Aparecen historias de México, Polonia, Serbia, Japón… Todos descubren lo parecidas que son.', en: 'Stories emerge from Mexico, Poland, Serbia, Japan… Everyone discovers how similar they are.' } },
              { say: { es: 'Leer juntos el texto antiguo y buscar sus contradicciones.', en: 'Read the ancient text together and look for its contradictions.' }, then: { es: 'Encuentran cinco detalles que no cuadran. Un profesor dice que lo hará con sus alumnos.', en: 'They find five details that don’t add up. One teacher says he’ll do it with his students.' } },
              { say: { es: 'Subir en silencio y hablar solo al final.', en: 'Climb in silence and talk only at the end.' }, then: { es: 'El amanecer en silencio emociona a todos. La conversación después es más honesta de lo esperado.', en: 'The silent sunrise moves everyone. The conversation afterwards is more honest than expected.' } },
            ],
          },
          twist: { es: 'Una profesora le dice a Itai: «Usted puede cuestionar este mito porque su país es fuerte. Para un pueblo pequeño y amenazado, un mito así puede ser lo único que le queda». ¿Tiene razón?', en: 'A teacher tells Itai: “You can question this myth because your country is strong. For a small, threatened people, a myth like this may be the only thing it has left.” Is she right?' },
          questions: [
            { q: { es: '¿Cuál es «la Masada» de tu país, la historia que todos aprenden con emoción?', en: 'What is your country’s “Masada”, the story everyone learns with emotion?' }, help: { es: 'En mi país es la historia de…', en: 'In my country it’s the story of…' }, follow: [{ es: '¿Qué enseña?', en: 'What does it teach?' }, { es: '¿Te sigue emocionando?', en: 'Does it still move you?' }] },
            { q: { es: '¿Los mitos nacionales unen o dividen?', en: 'Do national myths unite or divide?' }, help: { es: 'Unen cuando… y dividen cuando…', en: 'They unite when… and divide when…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Se pueden cambiar?', en: 'Can they be changed?' }] },
            { q: { es: '¿Se deberían enseñar los mitos en la escuela tal como son o con sus dudas?', en: 'Should myths be taught at school as they are or with their doubts?' }, help: { es: 'Creo que… a partir de cierta edad…', en: 'I think… from a certain age…' }, follow: [{ es: '¿Cómo te los enseñaron a ti?', en: 'How were they taught to you?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Rendirse puede ser a veces lo más valiente?', en: 'Can surrendering sometimes be the bravest thing?' }, help: { es: 'Sí, cuando… / No, porque…', en: 'Yes, when… / No, because…' }, follow: [{ es: '¿En la vida diaria?', en: 'In daily life?' }, { es: '¿Te pasó?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'jurar', en: 'to swear' }, { es: 'rendirse', en: 'to surrender' }, { es: 'el mito', en: 'the myth' }, { es: 'digno', en: 'dignified' }, { es: 'amenazado', en: 'threatened' }],
        },
      },
    },
    // ------------------------------------------------------------ the Ramon crater
    {
      id: 'ramon',
      name: { es: 'Las estrellas del cráter Ramón', en: 'The stars of the Ramon crater' },
      who: { name: 'Noam', role: { es: 'astrónomo', en: 'astronomer' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche en el desierto. No hay luces. Hay un cráter enorme. En el cielo hay miles de estrellas. Noam es astrónomo. Tiene un telescopio.', en: 'It is night in the desert. There are no lights. There is a huge crater. In the sky there are thousands of stars. Noam is an astronomer. He has a telescope.' },
          opener: { es: 'Hola. ¡Mira arriba! ¿Ves la Luna? ¿Quieres mirar por el telescopio?', en: 'Hello. Look up! Can you see the Moon? Do you want to look through the telescope?' },
          decide: {
            ask: { es: '¿Qué miras?', en: 'What do you look at?' },
            options: [
              { say: { es: 'La Luna.', en: 'The Moon.' }, then: { es: 'Ves montañas y agujeros en la Luna. ¡Increíble!', en: 'You see mountains and holes on the Moon. Incredible!' } },
              { say: { es: 'Un planeta.', en: 'A planet.' }, then: { es: 'Es Saturno. ¡Ves sus anillos! Noam sonríe.', en: 'It is Saturn. You see its rings! Noam smiles.' } },
              { say: { es: 'Las estrellas, sin telescopio.', en: 'The stars, without a telescope.' }, then: { es: 'Te tumbas en el suelo. Ves una estrella fugaz.', en: 'You lie on the ground. You see a shooting star.' } },
            ],
          },
          twist: { es: 'Hace mucho frío de noche en el desierto. Noam tiene té caliente. ¿Quieres?', en: 'It is very cold at night in the desert. Noam has hot tea. Do you want some?' },
          questions: [
            { q: { es: '¿Ves estrellas desde tu casa?', en: 'Can you see stars from your home?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde ves más?', en: 'Where do you see more?' }] },
            { q: { es: '¿Te gusta la noche?', en: 'Do you like the night?' }, help: { es: 'Sí. / No, prefiero el día.', en: 'Yes. / No, I prefer the day.' }, follow: [{ es: '¿Qué haces de noche?', en: 'What do you do at night?' }, { es: '¿Duermes tarde?', en: 'Do you sleep late?' }] },
            { q: { es: '¿Viste una estrella fugaz?', en: 'Have you seen a shooting star?' }, help: { es: 'Sí. / No, nunca.', en: 'Yes. / No, never.' }, follow: [{ es: '¿Pediste un deseo?', en: 'Did you make a wish?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Te gusta el desierto?', en: 'Do you like the desert?' }, help: { es: 'Sí. / No, prefiero el mar.', en: 'Yes. / No, I prefer the sea.' }, follow: [{ es: '¿Fuiste a un desierto?', en: 'Have you been to a desert?' }, { es: '¿Cuál?', en: 'Which one?' }] },
          ],
          words: [{ es: 'la estrella', en: 'the star' }, { es: 'el telescopio', en: 'the telescope' }, { es: 'la Luna', en: 'the Moon' }, { es: 'el cielo', en: 'the sky' }, { es: 'el desierto', en: 'the desert' }],
        },
        A1: {
          scene: { es: 'El cráter Ramón, en el desierto del Néguev, mide cuarenta kilómetros de largo. No lo hizo un meteorito: lo hizo la erosión durante millones de años. El pueblo de Mitzpe Ramón, al lado, tiene muy poca luz artificial por la noche, por eso es uno de los mejores lugares del mundo para mirar las estrellas. Noam organiza noches de astronomía para turistas.', en: 'The Ramon crater, in the Negev desert, is forty kilometres long. A meteorite didn’t make it: erosion did, over millions of years. The town of Mitzpe Ramon, next to it, has very little artificial light at night, which is why it’s one of the best places in the world for stargazing. Noam runs astronomy nights for tourists.' },
          opener: { es: 'Mucha gente de ciudad nunca vio la Vía Láctea. Llegan aquí, apagan el teléfono, esperan veinte minutos a que sus ojos se acostumbren y… lloran. De verdad. Algunos dicen que se sienten muy pequeños; a mí me pasa lo contrario: me siento parte de algo enorme. Esa franja blanca es nuestra galaxia, vista desde dentro. ¿Tú cómo te sientes cuando miras el cielo?', en: 'Many city people have never seen the Milky Way. They come here, switch off their phones, wait twenty minutes for their eyes to adjust and… they cry. Really. Some say they feel very small; for me it’s the opposite: I feel part of something enormous. That white band is our galaxy, seen from inside. How do you feel when you look at the sky?' },
          decide: {
            ask: { es: '¿Qué le preguntas a Noam?', en: 'What do you ask Noam?' },
            options: [
              { say: { es: '¿Cuántas estrellas hay?', en: 'How many stars are there?' }, then: { es: '«Desde aquí ves unas tres mil. En la galaxia hay cientos de miles de millones», dice.', en: '“From here you see about three thousand. In the galaxy there are hundreds of billions,” he says.' } },
              { say: { es: '¿Hay vida en otros planetas?', en: 'Is there life on other planets?' }, then: { es: 'Noam piensa un rato: «No lo sabemos. Pero sería raro estar solos».', en: 'Noam thinks for a while: “We don’t know. But it would be strange to be alone.”' } },
              { say: { es: '¿Cómo se llama esa estrella tan brillante?', en: 'What’s that very bright star called?' }, then: { es: '«No es una estrella, es Venus», ríe Noam.', en: '“It’s not a star, it’s Venus,” Noam laughs.' } },
            ],
          },
          twist: { es: 'Llega un coche con las luces encendidas y música alta. Todos los ojos pierden la oscuridad. ¿Qué haces?', en: 'A car arrives with its lights on and loud music. Everyone’s eyes lose the darkness. What do you do?' },
          questions: [
            { q: { es: '¿Cómo te sientes cuando miras el cielo de noche?', en: 'How do you feel when you look at the night sky?' }, help: { es: 'Me siento… porque…', en: 'I feel… because…' }, follow: [{ es: '¿Lo haces a menudo?', en: 'Do you do it often?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Crees que hay vida en otros planetas?', en: 'Do you think there is life on other planets?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Cómo sería?', en: 'What would it be like?' }, { es: '¿Te daría miedo?', en: 'Would it scare you?' }] },
            { q: { es: '¿Podrías apagar el teléfono una noche entera?', en: 'Could you turn off your phone for a whole night?' }, help: { es: 'Sí, fácil. / Me costaría.', en: 'Yes, easily. / It would be hard.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }] },
            { q: { es: '¿Hay mucha luz de noche en tu ciudad?', en: 'Is there a lot of light at night in your city?' }, help: { es: 'Sí, mucha. / No, poca.', en: 'Yes, a lot. / No, little.' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Dormirías mejor sin luz?', en: 'Would you sleep better without light?' }] },
          ],
          words: [{ es: 'el cráter', en: 'the crater' }, { es: 'la Vía Láctea', en: 'the Milky Way' }, { es: 'la galaxia', en: 'the galaxy' }, { es: 'acostumbrarse', en: 'to adjust / get used to' }, { es: 'brillante', en: 'bright' }],
        },
        A2: {
          scene: { es: 'Una empresa quiere construir un gran hotel de lujo en el borde del cráter, con piscina iluminada, restaurante y un mirador con luces de colores. Traería trabajo y turistas a un pueblo pequeño donde muchos jóvenes no encuentran empleo. Pero la luz artificial podría arruinar la oscuridad del cielo. Noam vive de los turistas y también de la oscuridad.', en: 'A company wants to build a big luxury hotel on the edge of the crater, with a lit pool, a restaurant and a viewpoint with coloured lights. It would bring jobs and tourists to a small town where many young people can’t find work. But artificial light could ruin the darkness of the sky. Noam lives off the tourists and also off the darkness.' },
          opener: { es: 'Mi sobrino no tiene trabajo y se quiere ir a Tel Aviv. Con el hotel, podría quedarse. El alcalde dice que sí, que es la oportunidad del pueblo. Pero si ponen luces, mis noches de estrellas se terminan, y los turistas que vienen por el cielo ya no vendrán. Algunos dicen que se puede hacer un hotel con luces especiales, rojas y bajas. ¿Se puede tener las dos cosas? ¿Qué harías tú?', en: 'My nephew has no job and wants to go to Tel Aviv. With the hotel, he could stay. The mayor says yes, it’s the town’s opportunity. But if they put up lights, my stargazing nights are over, and the tourists who come for the sky won’t come any more. Some say you can build a hotel with special lights, red and low. Can you have both? What would you do?' },
          decide: {
            ask: { es: '¿Qué propone Noam en el ayuntamiento?', en: 'What does Noam propose at the council?' },
            options: [
              { say: { es: 'Sí al hotel, con reglas estrictas de luz.', en: 'Yes to the hotel, with strict lighting rules.' }, then: { es: 'El hotel acepta luces rojas y apagadas a las diez. Hasta lo anuncia como «hotel de estrellas».', en: 'The hotel accepts red lights switched off at ten. It even advertises itself as a “star hotel”.' } },
              { say: { es: 'No al hotel: el cielo es el tesoro del pueblo.', en: 'No to the hotel: the sky is the town’s treasure.' }, then: { es: 'Gana el no. El sobrino de Noam se va a Tel Aviv. Noam se siente culpable.', en: 'The no side wins. Noam’s nephew goes to Tel Aviv. Noam feels guilty.' } },
              { say: { es: 'Un hotel pequeño, en el pueblo, no en el borde.', en: 'A small hotel, in town, not on the edge.' }, then: { es: 'La empresa dice que no es rentable. Un grupo de vecinos abre una pequeña casa de huéspedes.', en: 'The company says it isn’t profitable. A group of residents opens a small guesthouse.' } },
            ],
          },
          twist: { es: 'La empresa ofrece a Noam ser el «astrónomo oficial» del hotel, con un buen sueldo. Si acepta, sus críticas pierden fuerza. ¿Acepta?', en: 'The company offers Noam the job of the hotel’s “official astronomer”, with a good salary. If he accepts, his criticism loses force. Does he accept?' },
          questions: [
            { q: { es: '¿Qué es más importante para un pueblo pequeño: el trabajo o la naturaleza?', en: 'What is more important for a small town: jobs or nature?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Hay un caso así en tu país?', en: 'Is there a case like that in your country?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿La contaminación de luz te parece un problema real?', en: 'Does light pollution seem like a real problem to you?' }, help: { es: 'Sí, porque… / No mucho, porque…', en: 'Yes, because… / Not really, because…' }, follow: [{ es: '¿Lo pensaste antes?', en: 'Had you thought about it before?' }, { es: '¿Qué se puede hacer?', en: 'What can be done?' }] },
            { q: { es: '¿Aceptarías un trabajo de alguien a quien criticas?', en: 'Would you accept a job from someone you criticise?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Podrías seguir criticando?', en: 'Could you keep criticising?' }, { es: '¿Te pasó?', en: 'Has it happened to you?' }] },
            { q: { es: '¿Dormiste alguna vez en un lugar sin luz eléctrica?', en: 'Have you ever slept somewhere without electric light?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'artificial', en: 'artificial' }, { es: 'arruinar', en: 'to ruin' }, { es: 'el alcalde', en: 'the mayor' }, { es: 'rentable', en: 'profitable' }, { es: 'la casa de huéspedes', en: 'the guesthouse' }],
        },
        B1: {
          scene: { es: 'Según algunos estudios, más del ochenta por ciento de la población mundial vive bajo un cielo contaminado por la luz, y un tercio de la humanidad ya no puede ver la Vía Láctea desde su casa. Además, miles de satélites nuevos cruzan el cielo y aparecen en las fotos de los astrónomos como rayas blancas. Noam da una charla en una escuela de Mitzpe Ramón con un título provocador: «¿Tenemos derecho a la oscuridad?».', en: 'According to some studies, more than eighty per cent of the world’s population lives under a light-polluted sky, and a third of humanity can no longer see the Milky Way from home. On top of that, thousands of new satellites cross the sky and appear in astronomers’ photos as white streaks. Noam gives a talk at a Mitzpe Ramon school with a provocative title: “Do we have a right to darkness?”' },
          opener: { es: 'Durante toda la historia humana, todas las culturas miraron el mismo cielo y le pusieron nombres, dioses y leyendas. Hoy, en una generación, la mayoría de los niños del mundo no lo conocen. Nadie lo decidió: simplemente pasó, poco a poco, con cada farola y cada pantalla. Y los satélites que dan internet a pueblos aislados también nos roban estrellas. ¿Es el cielo nocturno un patrimonio común que hay que proteger, como un bosque o un monumento, o es un lujo comparado con otras necesidades?', en: 'Throughout human history, every culture looked at the same sky and gave it names, gods and legends. Today, in one generation, most of the world’s children don’t know it. Nobody decided it: it just happened, little by little, with every streetlight and every screen. And the satellites that give internet to isolated villages also steal our stars. Is the night sky a common heritage that must be protected, like a forest or a monument, or is it a luxury compared with other needs?' },
          decide: {
            ask: { es: '¿Qué propone Noam a los alumnos?', en: 'What does Noam propose to the students?' },
            options: [
              { say: { es: 'Una «noche sin luz» en todo el pueblo, una vez al año.', en: 'A “night without light” in the whole town, once a year.' }, then: { es: 'El pueblo apaga todo durante una hora. Los vecinos salen a la calle a mirar arriba. Algunos se conocen por primera vez.', en: 'The town turns everything off for an hour. Residents go out to look up. Some meet each other for the first time.' } },
              { say: { es: 'Escribir una carta a las empresas de satélites.', en: 'Write a letter to the satellite companies.' }, then: { es: 'Una empresa responde con una carta amable y genérica. Los alumnos aprenden que cambiar el mundo es lento.', en: 'One company replies with a polite, generic letter. The students learn that changing the world is slow.' } },
              { say: { es: 'Que cada alumno cuente una leyenda de las estrellas de su familia.', en: 'For each student to tell a family legend about the stars.' }, then: { es: 'Aparecen historias beduinas, rusas, etíopes y marroquíes. El cielo es el mismo; las historias, muy distintas.', en: 'Bedouin, Russian, Ethiopian and Moroccan stories emerge. The sky is the same; the stories, very different.' } },
            ],
          },
          twist: { es: 'Una alumna beduina dice que en su aldea no tienen ni farolas ni internet, y que preferiría tener luz e internet antes que estrellas. Otros compañeros se quedan callados. ¿Qué le responde Noam?', en: 'A Bedouin student says that in her village they have neither streetlights nor internet, and she’d rather have light and internet than stars. Other classmates go quiet. What does Noam answer her?' },
          questions: [
            { q: { es: '¿El cielo oscuro es un derecho o un lujo?', en: 'Is a dark sky a right or a luxury?' }, help: { es: 'Creo que es… porque… Sin embargo…', en: 'I think it’s… because… However…' }, follow: [{ es: '¿Quién debería protegerlo?', en: 'Who should protect it?' }, { es: '¿Cómo?', en: 'How?' }] },
            { q: { es: '¿Qué cosas perdimos sin darnos cuenta, poco a poco?', en: 'What have we lost without noticing, little by little?' }, help: { es: 'Creo que perdimos… por ejemplo…', en: 'I think we’ve lost… for example…' }, follow: [{ es: '¿Se puede recuperar?', en: 'Can it be recovered?' }, { es: '¿Te importa?', en: 'Do you care?' }] },
            { q: { es: '¿Es justo pedir a otros que renuncien a algo que nosotros ya tenemos?', en: 'Is it fair to ask others to give up something we already have?' }, help: { es: 'No, porque… / Depende de…', en: 'No, because… / It depends on…' }, follow: [{ es: '¿Un ejemplo con el clima?', en: 'An example with climate?' }, { es: '¿Qué sería justo?', en: 'What would be fair?' }] },
            { q: { es: '¿Conoces alguna leyenda sobre las estrellas?', en: 'Do you know any legend about the stars?' }, help: { es: 'Sí, en mi país se cuenta que…', en: 'Yes, in my country they say that…' }, follow: [{ es: '¿Quién te la contó?', en: 'Who told it to you?' }, { es: '¿La contarías a tus hijos?', en: 'Would you tell it to your children?' }] },
          ],
          words: [{ es: 'la contaminación lumínica', en: 'light pollution' }, { es: 'el satélite', en: 'the satellite' }, { es: 'la raya', en: 'the streak' }, { es: 'la farola', en: 'the streetlight' }, { es: 'aislado', en: 'isolated' }],
        },
      },
    },
    // ------------------------------------------------------------ a Bedouin tent
    {
      id: 'beduina',
      name: { es: 'Una tienda beduina en el Néguev', en: 'A Bedouin tent in the Negev' },
      who: { name: 'Salma', role: { es: 'anfitriona beduina', en: 'Bedouin host' } },
      levels: {
        A0: {
          scene: { es: 'Es una tienda grande y negra en el desierto. Dentro hay alfombras y cojines. Hay un fuego pequeño. Salma prepara café en una cafetera de metal.', en: 'It is a big black tent in the desert. Inside there are rugs and cushions. There is a small fire. Salma makes coffee in a metal coffee pot.' },
          opener: { es: 'Bienvenido. Siéntate en los cojines. ¿Café o té?', en: 'Welcome. Sit on the cushions. Coffee or tea?' },
          decide: {
            ask: { es: '¿Qué tomas?', en: 'What do you have?' },
            options: [
              { say: { es: 'Café, por favor.', en: 'Coffee, please.' }, then: { es: 'Es un café amargo con cardamomo. La taza es muy pequeña.', en: 'It is a bitter coffee with cardamom. The cup is very small.' } },
              { say: { es: 'Té, por favor.', en: 'Tea, please.' }, then: { es: 'Es té dulce con salvia. ¡Muy rico!', en: 'It is sweet tea with sage. Very tasty!' } },
              { say: { es: 'Los dos.', en: 'Both.' }, then: { es: 'Salma ríe: «Primero café, después té. Así es aquí».', en: 'Salma laughs: “First coffee, then tea. That’s how it is here.”' } },
            ],
          },
          twist: { es: 'Afuera hay un camello. Salma dice: «¿Quieres subir?». ¿Subes?', en: 'Outside there is a camel. Salma says: “Do you want to get on?” Do you get on?' },
          questions: [
            { q: { es: '¿Tomas café o té?', en: 'Do you drink coffee or tea?' }, help: { es: 'Café. / Té. / Los dos.', en: 'Coffee. / Tea. / Both.' }, follow: [{ es: '¿Cuántas tazas?', en: 'How many cups?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
            { q: { es: '¿Te sientas en el suelo en tu casa?', en: 'Do you sit on the floor at home?' }, help: { es: 'Sí, a veces. / No, en sillas.', en: 'Yes, sometimes. / No, on chairs.' }, follow: [{ es: '¿Es cómodo?', en: 'Is it comfortable?' }, { es: '¿Y para comer?', en: 'And to eat?' }] },
            { q: { es: '¿Viste un camello?', en: 'Have you seen a camel?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Subiste?', en: 'Did you ride it?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Te gusta acampar?', en: 'Do you like camping?' }, help: { es: 'Sí. / No, prefiero un hotel.', en: 'Yes. / No, I prefer a hotel.' }, follow: [{ es: '¿Dónde acampas?', en: 'Where do you camp?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'la tienda', en: 'the tent' }, { es: 'la alfombra', en: 'the rug' }, { es: 'el cojín', en: 'the cushion' }, { es: 'el cardamomo', en: 'cardamom' }, { es: 'el camello', en: 'the camel' }],
        },
        A1: {
          scene: { es: 'Los beduinos eran pueblos nómadas del desierto: vivían con sus cabras y camellos y se movían según el agua y la estación. Hoy en Israel viven unos trescientos mil beduinos, casi todos en el Néguev, y la mayoría ya no es nómada: viven en pueblos y ciudades. Salma recibe a visitantes en una tienda tradicional para enseñarles las costumbres de su abuela.', en: 'The Bedouin were nomadic desert peoples: they lived with their goats and camels and moved according to water and the season. Today about three hundred thousand Bedouin live in Israel, almost all in the Negev, and most are no longer nomadic: they live in villages and towns. Salma welcomes visitors in a traditional tent to show them her grandmother’s customs.' },
          opener: { es: 'El café es un idioma. La primera taza es para el invitado, la segunda por el placer, la tercera por la espada, que significa protección. Si no quieres más, mueves la taza así, a un lado y al otro. Mi abuela vivía en una tienda como esta; yo vivo en una casa con wifi en Rahat, y estudio enfermería. ¿En tu familia hay costumbres que ya no se usan?', en: 'Coffee is a language. The first cup is for the guest, the second for pleasure, the third for the sword, which means protection. If you don’t want more, you shake the cup like this, side to side. My grandmother lived in a tent like this one; I live in a house with wifi in Rahat, and I study nursing. In your family are there customs that are no longer used?' },
          decide: {
            ask: { es: '¿Qué haces con la taza?', en: 'What do you do with the cup?' },
            options: [
              { say: { es: 'Tomo las tres tazas.', en: 'I drink all three cups.' }, then: { es: 'Salma sonríe: «Ahora estás protegido en esta tienda».', en: 'Salma smiles: “Now you’re protected in this tent.”' } },
              { say: { es: 'Muevo la taza después de una.', en: 'I shake the cup after one.' }, then: { es: 'Salma aplaude: «¡Aprendes rápido!».', en: 'Salma claps: “You learn fast!”' } },
              { say: { es: 'Pido azúcar.', en: 'I ask for sugar.' }, then: { es: 'Salma ríe: «Este café no lleva azúcar. Pero el té, sí, mucho».', en: 'Salma laughs: “This coffee doesn’t take sugar. But the tea does, lots.”' } },
            ],
          },
          twist: { es: 'Salma saca su teléfono y te muestra fotos de su abuela con camellos y de ella misma en el hospital. ¿Qué le preguntas?', en: 'Salma takes out her phone and shows you photos of her grandmother with camels and of herself at the hospital. What do you ask her?' },
          questions: [
            { q: { es: '¿Qué costumbre de tus abuelos ya no se usa?', en: 'Which of your grandparents’ customs is no longer used?' }, help: { es: 'Mis abuelos… y ahora…', en: 'My grandparents… and now…' }, follow: [{ es: '¿Te da pena?', en: 'Does it make you sad?' }, { es: '¿La recuperarías?', en: 'Would you bring it back?' }] },
            { q: { es: '¿Cómo dices «no, gracias» sin palabras en tu cultura?', en: 'How do you say “no, thanks” without words in your culture?' }, help: { es: 'Hacemos así… / Ponemos…', en: 'We do this… / We put…' }, follow: [{ es: '¿Es educado?', en: 'Is it polite?' }, { es: '¿Hay gestos raros?', en: 'Are there strange gestures?' }] },
            { q: { es: '¿Tu vida es muy distinta a la de tus abuelos?', en: 'Is your life very different from your grandparents’?' }, help: { es: 'Sí, ellos… y yo… / No tanto.', en: 'Yes, they… and I… / Not that much.' }, follow: [{ es: '¿Qué es lo más distinto?', en: 'What’s most different?' }, { es: '¿Qué es igual?', en: 'What’s the same?' }] },
            { q: { es: '¿Qué estudias o qué te gustaría estudiar?', en: 'What do you study or would you like to study?' }, help: { es: 'Estudio… / Me gustaría estudiar…', en: 'I study… / I’d like to study…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'nómada', en: 'nomadic' }, { es: 'la estación', en: 'the season' }, { es: 'la espada', en: 'the sword' }, { es: 'la enfermería', en: 'nursing' }, { es: 'el gesto', en: 'the gesture' }],
        },
        A2: {
          scene: { es: 'Salma termina la carrera de enfermería con las mejores notas de su clase. Le ofrecen trabajo en un gran hospital de Tel Aviv, con buen sueldo. Pero su familia espera que trabaje en la clínica de su ciudad, donde faltan enfermeras que hablen árabe, y que se case pronto. Su padre está orgulloso de ella, pero también preocupado.', en: 'Salma finishes her nursing degree with the best marks in her class. She’s offered a job at a big hospital in Tel Aviv, with a good salary. But her family expects her to work at the clinic in her town, where there’s a shortage of Arabic-speaking nurses, and to get married soon. Her father is proud of her, but also worried.' },
          opener: { es: 'Soy la primera mujer de mi familia que fue a la universidad. Mi abuela no sabía leer. En Tel Aviv aprendería mucho, conocería a otra gente, tendría mi propia vida. Pero en mi ciudad, las mujeres mayores prefieren hablar con una enfermera que entiende su idioma y sus costumbres. Me necesitan. ¿Es egoísta irme? ¿O es egoísta que me pidan quedarme?', en: 'I’m the first woman in my family who went to university. My grandmother couldn’t read. In Tel Aviv I’d learn a lot, meet other people, have my own life. But in my town, older women prefer to talk to a nurse who understands their language and customs. They need me. Is it selfish to leave? Or is it selfish to ask me to stay?' },
          decide: {
            ask: { es: '¿Qué decide Salma?', en: 'What does Salma decide?' },
            options: [
              { say: { es: 'Ir a Tel Aviv dos años y después volver.', en: 'Go to Tel Aviv for two years and then return.' }, then: { es: 'Aprende mucho en urgencias. Cuando vuelve, abre un pequeño programa de salud para mujeres.', en: 'She learns a lot in A&E. When she returns, she opens a small health programme for women.' } },
              { say: { es: 'Quedarse en la clínica de su ciudad.', en: 'Stay at the clinic in her town.' }, then: { es: 'Las pacientes la adoran. A veces Salma se pregunta cómo habría sido la otra vida.', en: 'The patients adore her. Sometimes Salma wonders what the other life would have been like.' } },
              { say: { es: 'Irse y no volver.', en: 'Leave and not come back.' }, then: { es: 'Su padre tarda un año en aceptarlo. Ahora presume de su hija con todos los vecinos.', en: 'Her father takes a year to accept it. Now he shows off about his daughter to all the neighbours.' } },
            ],
          },
          twist: { es: 'La hermana menor de Salma, de quince años, le dice: «Si tú te quedas, yo nunca voy a poder irme». ¿Cambia eso la decisión?', en: 'Salma’s fifteen-year-old younger sister tells her: “If you stay, I’ll never be able to leave.” Does that change the decision?' },
          questions: [
            { q: { es: '¿Eres la primera persona de tu familia en hacer algo?', en: 'Are you the first person in your family to do something?' }, help: { es: 'Sí, fui el/la primero/a en… / No.', en: 'Yes, I was the first to… / No.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué dijo tu familia?', en: 'What did your family say?' }] },
            { q: { es: '¿Irse de tu pueblo para trabajar es egoísta?', en: 'Is leaving your town to work selfish?' }, help: { es: 'No, porque… / A veces, si…', en: 'No, because… / Sometimes, if…' }, follow: [{ es: '¿Tú te fuiste?', en: 'Did you leave?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Qué espera tu familia de ti?', en: 'What does your family expect of you?' }, help: { es: 'Esperan que… / No esperan nada especial.', en: 'They expect me to… / They don’t expect anything special.' }, follow: [{ es: '¿Estás de acuerdo?', en: 'Do you agree?' }, { es: '¿Lo hablas con ellos?', en: 'Do you talk about it with them?' }] },
            { q: { es: '¿Prefieres un médico o enfermero que hable tu idioma?', en: 'Do you prefer a doctor or nurse who speaks your language?' }, help: { es: 'Sí, porque… / No me importa.', en: 'Yes, because… / I don’t mind.' }, follow: [{ es: '¿Te pasó en otro país?', en: 'Has it happened to you abroad?' }, { es: '¿Cómo te arreglaste?', en: 'How did you manage?' }] },
          ],
          words: [{ es: 'la carrera', en: 'the degree' }, { es: 'las notas', en: 'marks / grades' }, { es: 'egoísta', en: 'selfish' }, { es: 'la clínica', en: 'the clinic' }, { es: 'presumir', en: 'to show off' }],
        },
        B1: {
          scene: { es: 'Muchas aldeas beduinas del Néguev no están reconocidas oficialmente por el Estado: no tienen conexión a la red eléctrica, agua corriente ni carreteras asfaltadas, aunque las familias viven allí desde hace generaciones. El gobierno propone trasladar a sus habitantes a ciudades planificadas, con servicios modernos. Muchas familias se niegan: dicen que es su tierra y que en las ciudades pierden su forma de vida. El tema es complejo y doloroso. Salma, ya enfermera, trabaja en una clínica móvil que visita estas aldeas.', en: 'Many Bedouin villages in the Negev are not officially recognised by the state: they have no connection to the electricity grid, running water or paved roads, though families have lived there for generations. The government proposes moving their inhabitants to planned towns with modern services. Many families refuse: they say it’s their land and that in towns they lose their way of life. The issue is complex and painful. Salma, now a nurse, works at a mobile clinic that visits these villages.' },
          opener: { es: 'Cada semana veo a niños con asma por el humo de los generadores y a ancianos que no pueden guardar la insulina en una nevera. Como enfermera, quiero que tengan electricidad y agua mañana mismo. Pero como beduina, entiendo a mi tía cuando dice que en la ciudad sus hijos no tendrán dónde tener cabras, que perderán su historia. A veces siento que tengo que elegir entre la salud de la gente y su dignidad. ¿Se puede ofrecer progreso sin pedir a cambio que la gente deje de ser quien es?', en: 'Every week I see children with asthma from generator fumes and elderly people who can’t keep insulin in a fridge. As a nurse, I want them to have electricity and water tomorrow. But as a Bedouin, I understand my aunt when she says that in the town her children won’t have anywhere to keep goats, that they’ll lose their history. Sometimes I feel I have to choose between people’s health and their dignity. Can you offer progress without asking people in return to stop being who they are?' },
          decide: {
            ask: { es: '¿Qué hace Salma desde su lugar?', en: 'What does Salma do from where she stands?' },
            options: [
              { say: { es: 'Conseguir paneles solares para guardar medicinas.', en: 'Get solar panels to store medicine.' }, then: { es: 'Con una ONG, instala neveras solares en diez aldeas. No resuelve todo, pero salva la insulina.', en: 'With an NGO, she installs solar fridges in ten villages. It doesn’t solve everything, but it saves the insulin.' } },
              { say: { es: 'Contar lo que ve en un periódico nacional.', en: 'Tell what she sees in a national newspaper.' }, then: { es: 'Su artículo provoca debate. Recibe cartas de apoyo y algunas críticas muy duras.', en: 'Her article sparks debate. She receives letters of support and some very harsh criticism.' } },
              { say: { es: 'Formar a jóvenes de las aldeas como agentes de salud.', en: 'Train young villagers as health workers.' }, then: { es: 'Doce jóvenes, muchos de ellos chicas, aprenden primeros auxilios. Una quiere estudiar medicina.', en: 'Twelve young people, many of them girls, learn first aid. One wants to study medicine.' } },
            ],
          },
          twist: { es: 'Un periodista extranjero quiere grabar a los niños enfermos de la aldea para un reportaje internacional. Podría traer ayuda, pero las familias se sienten expuestas. Salma tiene que decidir si lo acompaña. ¿Qué es más importante: la visibilidad o la intimidad?', en: 'A foreign journalist wants to film the sick children of the village for an international report. It could bring help, but the families feel exposed. Salma has to decide whether to accompany him. What matters more: visibility or privacy?' },
          questions: [
            { q: { es: '¿Se puede modernizar una forma de vida sin destruirla?', en: 'Can a way of life be modernised without destroying it?' }, help: { es: 'Creo que sí, si… / Es muy difícil porque…', en: 'I think so, if… / It’s very hard because…' }, follow: [{ es: '¿Un ejemplo de tu país?', en: 'An example from your country?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Qué es más importante: la salud o la tradición?', en: 'What is more important: health or tradition?' }, help: { es: 'Normalmente… pero…', en: 'Usually… but…' }, follow: [{ es: '¿Siempre?', en: 'Always?' }, { es: '¿Y si la tradición es la tierra?', en: 'And if the tradition is the land?' }] },
            { q: { es: '¿Mostrar el sufrimiento ayuda o humilla?', en: 'Does showing suffering help or humiliate?' }, help: { es: 'Ayuda cuando… y humilla cuando…', en: 'It helps when… and humiliates when…' }, follow: [{ es: '¿Recuerdas un reportaje así?', en: 'Do you remember a report like that?' }, { es: '¿Qué sentiste?', en: 'What did you feel?' }] },
            { q: { es: '¿Qué puedes hacer tú desde tu trabajo o tus estudios ante un problema grande?', en: 'What can you do from your job or studies about a big problem?' }, help: { es: 'Puedo… aunque no resuelva todo…', en: 'I can… even if it doesn’t solve everything…' }, follow: [{ es: '¿Ya lo haces?', en: 'Do you already?' }, { es: '¿Qué te frena?', en: 'What holds you back?' }] },
          ],
          words: [{ es: 'reconocido', en: 'recognised' }, { es: 'trasladar', en: 'to move / relocate' }, { es: 'la red eléctrica', en: 'the electricity grid' }, { es: 'la dignidad', en: 'dignity' }, { es: 'expuesto', en: 'exposed' }],
        },
      },
    },
    // ------------------------------------------------------------ the Eilat reef
    {
      id: 'eilat',
      name: { es: 'El arrecife de Eilat', en: 'The Eilat reef' },
      who: { name: 'Gal', role: { es: 'bióloga marina', en: 'marine biologist' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa en el mar Rojo. El agua es clara y caliente. Debajo hay corales de colores y peces. Gal es bióloga marina. Tiene gafas de bucear.', en: 'It is a beach on the Red Sea. The water is clear and warm. Underneath there are colourful corals and fish. Gal is a marine biologist. She has diving goggles.' },
          opener: { es: '¡Hola! ¿Quieres ver los peces? Ponte las gafas.', en: 'Hello! Do you want to see the fish? Put on the goggles.' },
          decide: {
            ask: { es: '¿Qué ves?', en: 'What do you see?' },
            options: [
              { say: { es: 'Un pez naranja.', en: 'An orange fish.' }, then: { es: 'Es un pez payaso. Vive en una planta que se mueve.', en: 'It is a clownfish. It lives in a plant that moves.' } },
              { say: { es: 'Un coral rosa.', en: 'A pink coral.' }, then: { es: 'Gal dice: «¡No lo toques! Está vivo».', en: 'Gal says: “Don’t touch it! It is alive.”' } },
              { say: { es: 'Una tortuga.', en: 'A turtle.' }, then: { es: '¡Una tortuga grande nada a tu lado! Es muy tranquila.', en: 'A big turtle swims next to you! It is very calm.' } },
            ],
          },
          twist: { es: 'Un pez te mira muy cerca. ¿Te mueves o te quedas quieto?', en: 'A fish looks at you very closely. Do you move or stay still?' },
          questions: [
            { q: { es: '¿Te gusta el mar?', en: 'Do you like the sea?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué mar?', en: 'Which sea?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿Buceaste alguna vez?', en: 'Have you ever dived?' }, help: { es: 'Sí. / No, nunca.', en: 'Yes. / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Cuál es tu animal del mar favorito?', en: 'What is your favourite sea animal?' }, help: { es: 'El delfín / la tortuga…', en: 'The dolphin / the turtle…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Lo viste de verdad?', en: 'Have you seen one for real?' }] },
            { q: { es: '¿Tienes peces en casa?', en: 'Do you have fish at home?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Cuántos?', en: 'How many?' }, { es: '¿Cómo se llaman?', en: 'What are their names?' }] },
          ],
          words: [{ es: 'el coral', en: 'the coral' }, { es: 'el pez payaso', en: 'the clownfish' }, { es: 'la tortuga', en: 'the turtle' }, { es: 'bucear', en: 'to dive' }, { es: 'las gafas', en: 'the goggles' }],
        },
        A1: {
          scene: { es: 'Eilat es la ciudad más al sur de Israel, en el mar Rojo, entre Egipto y Jordania. Desde la playa se ven las montañas de los dos países. Tiene un arrecife de coral muy cerca de la costa: con solo entrar al agua ya ves peces de colores. Gal trabaja en un centro de investigación marina y estudia por qué estos corales resisten el calor mejor que otros.', en: 'Eilat is Israel’s southernmost city, on the Red Sea, between Egypt and Jordan. From the beach you can see the mountains of both countries. It has a coral reef very close to the shore: just by stepping into the water you see colourful fish. Gal works at a marine research centre and studies why these corals resist heat better than others.' },
          opener: { es: 'En muchos lugares del mundo los corales se ponen blancos y mueren porque el mar está más caliente. Aquí, por ahora, resisten. Creemos que sus antepasados llegaron desde el sur, por aguas muy calientes, y por eso son más fuertes. Si entendemos su secreto, podemos ayudar a otros arrecifes. Pero el turismo también los daña: cremas, pies, barcos. ¿Tú qué cuidarías primero?', en: 'In many places around the world corals turn white and die because the sea is warmer. Here, for now, they’re holding on. We believe their ancestors came from the south, through very warm waters, and that’s why they’re stronger. If we understand their secret, we can help other reefs. But tourism also damages them: sun cream, feet, boats. What would you look after first?' },
          decide: {
            ask: { es: '¿Cómo ayudas a Gal hoy?', en: 'How do you help Gal today?' },
            options: [
              { say: { es: 'Cuento los peces con ella.', en: 'I count the fish with her.' }, then: { es: 'Cuentas treinta y siete peces de nueve especies. Gal apunta todo en una tabla bajo el agua.', en: 'You count thirty-seven fish of nine species. Gal writes it all down on an underwater board.' } },
              { say: { es: 'Explico las reglas a los turistas.', en: 'I explain the rules to tourists.' }, then: { es: 'Un niño te pregunta por qué no puede llevarse un coral. Le explicas que está vivo.', en: 'A child asks you why he can’t take a coral home. You explain that it’s alive.' } },
              { say: { es: 'Recojo basura de la playa.', en: 'I pick up litter from the beach.' }, then: { es: 'En una hora llenas una bolsa: tapas, plásticos y una chancla.', en: 'In an hour you fill a bag: bottle caps, plastics and a flip-flop.' } },
            ],
          },
          twist: { es: 'Un turista se para de pie sobre el coral para descansar. ¿Qué le dices?', en: 'A tourist stands on the coral to rest. What do you say to him?' },
          questions: [
            { q: { es: '¿Usas crema de sol en el mar?', en: 'Do you use sun cream in the sea?' }, help: { es: 'Sí, siempre. / No mucho.', en: 'Yes, always. / Not much.' }, follow: [{ es: '¿Sabías que daña los corales?', en: 'Did you know it harms corals?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
            { q: { es: '¿Desde tu país se ven otros países?', en: 'Can you see other countries from your country?' }, help: { es: 'Sí, desde… se ve… / No.', en: 'Yes, from… you can see… / No.' }, follow: [{ es: '¿Fuiste?', en: 'Have you been?' }, { es: '¿Es muy distinto?', en: 'Is it very different?' }] },
            { q: { es: '¿Recogiste basura en la playa o en un parque?', en: 'Have you picked up litter on a beach or in a park?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué encontraste?', en: 'What did you find?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Te gustaría trabajar en el mar?', en: 'Would you like to work at sea?' }, help: { es: 'Sí, como… / No, me mareo.', en: 'Yes, as a… / No, I get seasick.' }, follow: [{ es: '¿Qué trabajo?', en: 'Which job?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'el arrecife', en: 'the reef' }, { es: 'resistir', en: 'to resist' }, { es: 'el antepasado', en: 'the ancestor' }, { es: 'la especie', en: 'the species' }, { es: 'la chancla', en: 'the flip-flop' }],
        },
        A2: {
          scene: { es: 'Eilat quiere crecer: el ayuntamiento propone un puerto nuevo para cruceros gigantes y más hoteles en la costa. Llegarían miles de turistas y habría mucho trabajo. Pero los científicos dicen que los barcos grandes levantan arena y contaminación que pueden matar el arrecife. Gal tiene que presentar un informe al ayuntamiento la semana que viene.', en: 'Eilat wants to grow: the council proposes a new port for giant cruise ships and more hotels on the coast. Thousands of tourists would come and there would be lots of work. But scientists say big ships stir up sand and pollution that could kill the reef. Gal has to present a report to the council next week.' },
          opener: { es: 'Mi informe dice la verdad: el riesgo para el arrecife es alto. Pero mi marido trabaja en un hotel y el puerto le daría un ascenso. Mis vecinos dicen que los científicos siempre estamos en contra de todo. Y es verdad que Eilat necesita trabajo: muchos jóvenes se van. Si el arrecife muere, también se van los buceadores, que son una parte enorme del turismo. ¿Cómo convenzo al ayuntamiento?', en: 'My report tells the truth: the risk to the reef is high. But my husband works at a hotel and the port would get him a promotion. My neighbours say scientists are always against everything. And it’s true that Eilat needs jobs: many young people leave. If the reef dies, the divers leave too, and they’re a huge part of tourism. How do I convince the council?' },
          decide: {
            ask: { es: '¿Cómo presenta Gal el informe?', en: 'How does Gal present the report?' },
            options: [
              { say: { es: 'Con números: cuánto dinero trae el buceo.', en: 'With numbers: how much money diving brings.' }, then: { es: 'Los concejales se sorprenden: el buceo deja más dinero de lo que pensaban.', en: 'The councillors are surprised: diving brings in more money than they thought.' } },
              { say: { es: 'Llevando a los concejales a bucear.', en: 'Taking the councillors diving.' }, then: { es: 'Dos concejales nunca habían visto el arrecife. Salen del agua callados.', en: 'Two councillors had never seen the reef. They come out of the water silent.' } },
              { say: { es: 'Proponiendo el puerto en otro lugar, lejos del coral.', en: 'Proposing the port somewhere else, far from the coral.' }, then: { es: 'Es más caro, pero algunos concejales aceptan estudiarlo.', en: 'It’s more expensive, but some councillors agree to study it.' } },
            ],
          },
          twist: { es: 'Su jefe le pide a Gal «suavizar» un poco las conclusiones del informe, porque el centro recibe dinero del ayuntamiento. ¿Lo hace?', en: 'Her boss asks Gal to “soften” the report’s conclusions a bit, because the centre receives money from the council. Does she do it?' },
          questions: [
            { q: { es: '¿Los cruceros son buenos o malos para una ciudad?', en: 'Are cruise ships good or bad for a city?' }, help: { es: 'Son buenos porque… pero…', en: 'They’re good because… but…' }, follow: [{ es: '¿Viajaste en crucero?', en: 'Have you been on a cruise?' }, { es: '¿Lo harías?', en: 'Would you?' }] },
            { q: { es: '¿Cambiarías un informe o un trabajo porque te lo pide tu jefe?', en: 'Would you change a report or a piece of work because your boss asks?' }, help: { es: 'Depende de… / Nunca, si…', en: 'It depends on… / Never, if…' }, follow: [{ es: '¿Te pasó?', en: 'Has it happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Convencen más los números o las experiencias?', en: 'Do numbers or experiences convince more?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Y a ti?', en: 'And you?' }, { es: '¿Un ejemplo?', en: 'An example?' }] },
            { q: { es: '¿Es posible crecer sin dañar la naturaleza?', en: 'Is it possible to grow without harming nature?' }, help: { es: 'Sí, si… / Es difícil porque…', en: 'Yes, if… / It’s hard because…' }, follow: [{ es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
          ],
          words: [{ es: 'el crucero', en: 'the cruise ship' }, { es: 'el ascenso', en: 'the promotion' }, { es: 'el concejal', en: 'the councillor' }, { es: 'suavizar', en: 'to soften' }, { es: 'el buceador', en: 'the diver' }],
        },
        B1: {
          scene: { es: 'El golfo de Eilat es pequeño y lo comparten cuatro países: Israel, Egipto, Jordania y Arabia Saudí. Los corales no conocen fronteras: si uno de los países contamina, el arrecife de todos sufre. Por eso, científicos de varios de estos países, a veces en momentos políticos muy difíciles, comparten datos sobre la temperatura del agua y la salud del coral. Gal participa en un congreso internacional en Áqaba, en Jordania, a quince minutos de su casa pero en otro mundo.', en: 'The Gulf of Eilat is small and shared by four countries: Israel, Egypt, Jordan and Saudi Arabia. Corals know no borders: if one country pollutes, everyone’s reef suffers. That’s why scientists from several of these countries, sometimes at very difficult political moments, share data on water temperature and coral health. Gal is taking part in an international conference in Aqaba, in Jordan, fifteen minutes from her home but in another world.' },
          opener: { es: 'Cuando hablamos de corales, nos entendemos perfectamente. Compartimos los mismos miedos y las mismas esperanzas. Pero en el café, cuando alguien menciona la política, todos miran el plato. Algunos colegas dicen que la ciencia debe quedarse fuera de la política; otros, que es imposible, que callar también es tomar posición. Yo creo que esta pequeña colaboración vale mucho, justamente porque es frágil. ¿Puede la ciencia construir puentes donde la política no puede, o es ingenuo pensarlo?', en: 'When we talk about corals, we understand each other perfectly. We share the same fears and the same hopes. But over coffee, when someone mentions politics, everyone looks at their plate. Some colleagues say science should stay out of politics; others, that it’s impossible, that keeping quiet is also taking a position. I think this small collaboration is worth a lot, precisely because it’s fragile. Can science build bridges where politics can’t, or is it naive to think so?' },
          decide: {
            ask: { es: '¿Qué propone Gal al final del congreso?', en: 'What does Gal propose at the end of the conference?' },
            options: [
              { say: { es: 'Un sistema común de alarma para el calor del agua.', en: 'A shared early-warning system for water heat.' }, then: { es: 'Se aprueba. Los datos de los cuatro países llegan a la misma pantalla cada mañana.', en: 'It’s approved. Data from all four countries reaches the same screen every morning.' } },
              { say: { es: 'Un intercambio de estudiantes de biología marina.', en: 'A marine biology student exchange.' }, then: { es: 'El primer año solo participan seis estudiantes. Una de ellas escribe después: «Ahora tengo amigos al otro lado del agua».', en: 'In the first year only six students take part. One of them later writes: “Now I have friends across the water.”' } },
              { say: { es: 'Publicar los resultados con las firmas de todos.', en: 'Publish the results with everyone’s signatures.' }, then: { es: 'Algunos científicos no pueden firmar por presiones en sus países. El artículo sale igual, con menos nombres.', en: 'Some scientists can’t sign because of pressure at home. The article comes out anyway, with fewer names.' } },
            ],
          },
          twist: { es: 'Un colega le dice a Gal en privado: «Me gustaría invitarte a mi universidad, pero si lo hago podría tener problemas». ¿Qué le responde ella? ¿Debe la amistad científica arriesgar la seguridad de alguien?', en: 'A colleague tells Gal privately: “I’d like to invite you to my university, but if I do I could get into trouble.” What does she answer? Should scientific friendship put someone’s safety at risk?' },
          questions: [
            { q: { es: '¿La ciencia puede quedarse fuera de la política?', en: 'Can science stay out of politics?' }, help: { es: 'Creo que no, porque… / En parte, si…', en: 'I don’t think so, because… / Partly, if…' }, follow: [{ es: '¿Un ejemplo reciente?', en: 'A recent example?' }, { es: '¿Debería?', en: 'Should it?' }] },
            { q: { es: '¿Callar es también tomar posición?', en: 'Is keeping quiet also taking a position?' }, help: { es: 'Sí, porque… / No siempre, porque…', en: 'Yes, because… / Not always, because…' }, follow: [{ es: '¿Cuándo callas tú?', en: 'When do you keep quiet?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Qué problemas no conocen fronteras?', en: 'Which problems know no borders?' }, help: { es: 'Por ejemplo, el clima, las enfermedades…', en: 'For example, climate, diseases…' }, follow: [{ es: '¿Los países colaboran bien?', en: 'Do countries cooperate well?' }, { es: '¿Qué falta?', en: 'What’s missing?' }] },
            { q: { es: '¿Tienes amigos de países con los que el tuyo tiene conflictos?', en: 'Do you have friends from countries yours has conflicts with?' }, help: { es: 'Sí, de… / No, pero me gustaría…', en: 'Yes, from… / No, but I’d like to…' }, follow: [{ es: '¿De qué hablan?', en: 'What do you talk about?' }, { es: '¿Evitan algunos temas?', en: 'Do you avoid some subjects?' }] },
          ],
          words: [{ es: 'el golfo', en: 'the gulf' }, { es: 'la frontera', en: 'the border' }, { es: 'el congreso', en: 'the conference' }, { es: 'frágil', en: 'fragile' }, { es: 'tomar posición', en: 'to take a position' }],
        },
      },
    },
  ],
};
