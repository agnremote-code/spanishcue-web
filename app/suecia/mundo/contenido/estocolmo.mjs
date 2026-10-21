// Estocolmo · a fika café, the Vasa ship museum, a ferry to the archipelago, the
// Östermalm food hall and the City Hall where the Nobel banquet is held. Five places,
// four levels each (A0, A1, A2, B1). Every level is written on its own: same place
// and people, different situations.
export default {
  id: 'estocolmo',
  spots: [
    // ------------------------------------------------------------ the fika café
    {
      id: 'fika',
      name: { es: 'El café de la fika', en: 'The fika café' },
      who: { name: 'Astrid', role: { es: 'camarera', en: 'café worker' } },
      levels: {
        A0: {
          scene: { es: 'Es un café pequeño y caliente. Fuera hace frío. Hay bollos de canela y café. Astrid trabaja aquí.', en: 'It is a small, warm café. Outside it is cold. There are cinnamon buns and coffee. Astrid works here.' },
          opener: { es: '¡Hola! Soy Astrid. En Suecia, a las tres, hacemos «fika»: café y algo dulce. ¿Quieres?', en: 'Hello! I am Astrid. In Sweden, at three o’clock, we have “fika”: coffee and something sweet. Do you want some?' },
          decide: {
            ask: { es: 'Astrid tiene tres cosas. ¿Qué pides?', en: 'Astrid has three things. What do you order?' },
            options: [
              { say: { es: 'Un café y un bollo de canela.', en: 'A coffee and a cinnamon bun.' }, then: { es: 'Astrid dice: «¡La fika clásica!»', en: 'Astrid says: “The classic fika!”' } },
              { say: { es: 'Un té y una galleta.', en: 'A tea and a biscuit.' }, then: { es: 'Astrid dice: «Muy bien. La galleta es de jengibre».', en: 'Astrid says: “Very good. The biscuit is ginger.”' } },
              { say: { es: 'Un chocolate caliente, por favor.', en: 'A hot chocolate, please.' }, then: { es: 'Astrid dice: «¡Perfecto para el frío!»', en: 'Astrid says: “Perfect for the cold!”' } },
            ],
          },
          twist: { es: 'Astrid te da otro café. «¡Es gratis! En Suecia, el segundo café es gratis». ¿Qué dices?', en: 'Astrid gives you another coffee. “It’s free! In Sweden, the second coffee is free.” What do you say?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, mucho. / No, tomo té.', en: 'Yes, a lot. / No, I drink tea.' }, follow: [{ es: '¿Cuántos al día?', en: 'How many a day?' }, { es: '¿Con leche?', en: 'With milk?' }] },
            { q: { es: '¿Te gusta la canela?', en: 'Do you like cinnamon?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Con qué la comes?', en: 'What do you eat it with?' }, { es: '¿Y el chocolate?', en: 'And chocolate?' }] },
            { q: { es: '¿A qué hora comes algo dulce?', en: 'At what time do you eat something sweet?' }, help: { es: 'Por la tarde. / Después de comer.', en: 'In the afternoon. / After lunch.' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Hace frío en tu ciudad?', en: 'Is it cold in your city?' }, help: { es: 'Sí, en invierno. / No, hace calor.', en: 'Yes, in winter. / No, it is hot.' }, follow: [{ es: '¿Te gusta el frío?', en: 'Do you like the cold?' }, { es: '¿Qué ropa usas?', en: 'What clothes do you wear?' }] },
          ],
          words: [{ es: 'el bollo', en: 'the bun' }, { es: 'la canela', en: 'cinnamon' }, { es: 'dulce', en: 'sweet' }, { es: 'gratis', en: 'free' }, { es: 'la galleta', en: 'the biscuit' }],
        },
        A1: {
          scene: { es: 'Es un martes de diciembre. A las tres de la tarde ya es de noche. Hay velas en todas las mesas. Muchos trabajadores de una oficina cercana vienen juntos a hacer la fika.', en: 'It is a Tuesday in December. At three in the afternoon it is already dark. There are candles on every table. Lots of workers from a nearby office come together for fika.' },
          opener: { es: 'En invierno tenemos solo seis horas de luz. Por eso nos gustan tanto las velas y la fika: es un momento para parar y hablar. En muchas oficinas la fika es obligatoria. ¿En tu trabajo hay una pausa así?', en: 'In winter we only have six hours of daylight. That’s why we love candles and fika so much: it’s a moment to stop and talk. In many offices fika is compulsory. Is there a break like that at your work?' },
          decide: {
            ask: { es: 'Un grupo de oficina te invita a su mesa. Nadie habla de trabajo. ¿De qué hablas tú?', en: 'An office group invites you to their table. Nobody talks about work. What do you talk about?' },
            options: [
              { say: { es: 'Del tiempo y de la oscuridad.', en: 'About the weather and the darkness.' }, then: { es: 'Todos se ríen. «Es el tema favorito de los suecos», dice una chica.', en: 'Everyone laughs. “It’s the Swedes’ favourite topic,” says a girl.' } },
              { say: { es: 'De la comida típica de mi país.', en: 'About typical food from my country.' }, then: { es: 'Te hacen muchas preguntas. Un señor quiere la receta.', en: 'They ask you lots of questions. A man wants the recipe.' } },
              { say: { es: 'De sus vacaciones de verano.', en: 'About their summer holidays.' }, then: { es: 'Todos tienen cinco semanas de vacaciones. Te parece increíble.', en: 'They all have five weeks of holiday. You find it incredible.' } },
            ],
          },
          twist: { es: 'Astrid trae una tarta con velas. Es el cumpleaños de un chico del grupo, pero él es muy tímido y no quiere cantar. ¿Qué haces?', en: 'Astrid brings a cake with candles. It is the birthday of a boy in the group, but he is very shy and doesn’t want any singing. What do you do?' },
          questions: [
            { q: { es: '¿Haces pausas en el trabajo o en las clases?', en: 'Do you take breaks at work or in class?' }, help: { es: 'Sí, a las… / No, casi nunca.', en: 'Yes, at… / No, almost never.' }, follow: [{ es: '¿Qué haces en la pausa?', en: 'What do you do on your break?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cuántas horas de luz hay en tu ciudad en invierno?', en: 'How many hours of daylight are there in your city in winter?' }, help: { es: 'Hay unas… horas.', en: 'There are about… hours.' }, follow: [{ es: '¿A qué hora es de noche?', en: 'What time does it get dark?' }, { es: '¿Te afecta?', en: 'Does it affect you?' }] },
            { q: { es: '¿Usas velas en casa?', en: 'Do you use candles at home?' }, help: { es: 'Sí, en la cena. / No, nunca.', en: 'Yes, at dinner. / No, never.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Cuántas semanas de vacaciones tienes?', en: 'How many weeks of holiday do you have?' }, help: { es: 'Tengo… semanas.', en: 'I have… weeks.' }, follow: [{ es: '¿Es suficiente?', en: 'Is it enough?' }, { es: '¿Adónde vas?', en: 'Where do you go?' }] },
          ],
          words: [{ es: 'la vela', en: 'the candle' }, { es: 'la pausa', en: 'the break' }, { es: 'obligatorio', en: 'compulsory' }, { es: 'la oscuridad', en: 'darkness' }, { es: 'tímido', en: 'shy' }],
        },
        A2: {
          scene: { es: 'Astrid tiene veintiocho años y un título de arquitecta, pero trabaja en el café porque no encuentra trabajo de lo suyo. Sus padres le dicen que se vaya a Noruega, donde pagan mejor. Hoy un cliente habitual, un arquitecto famoso, le pregunta por qué está tan triste.', en: 'Astrid is twenty-eight and has an architecture degree, but works at the café because she can’t find a job in her field. Her parents tell her to move to Norway, where they pay better. Today a regular customer, a famous architect, asks her why she looks so sad.' },
          opener: { es: 'Llevo dos años aquí. Me gusta el café y mis compañeros, pero cada vez que paso por una obra pienso: «Yo podría diseñar eso». He enviado más de cien solicitudes. ¿Tú has trabajado alguna vez en algo que no era lo tuyo?', en: 'I’ve been here two years. I like the café and my colleagues, but every time I pass a building site I think: “I could design that.” I’ve sent more than a hundred applications. Have you ever worked in something that wasn’t your field?' },
          decide: {
            ask: { es: 'El arquitecto le ofrece unas prácticas sin sueldo durante tres meses. ¿Qué le aconsejas a Astrid?', en: 'The architect offers her an unpaid internship for three months. What do you advise Astrid?' },
            options: [
              { say: { es: 'Que acepte y trabaje en el café los fines de semana.', en: 'Accept and work at the café at weekends.' }, then: { es: 'Astrid está muy cansada, pero al tercer mes le ofrecen un contrato.', en: 'Astrid is very tired, but in the third month they offer her a contract.' } },
              { say: { es: 'Que no acepte. El trabajo se paga.', en: 'Don’t accept. Work should be paid.' }, then: { es: 'El arquitecto se sorprende, pero le ofrece un sueldo pequeño. Astrid acepta.', en: 'The architect is surprised, but offers her a small salary. Astrid accepts.' } },
              { say: { es: 'Que se vaya a Noruega, como dicen sus padres.', en: 'Move to Norway, as her parents say.' }, then: { es: 'En Oslo encuentra trabajo en un mes. Pero echa de menos la fika con sus compañeros.', en: 'In Oslo she finds a job within a month. But she misses fika with her colleagues.' } },
            ],
          },
          twist: { es: 'El jefe del café se entera de todo y se enfada: dice que Astrid no puede atender a los clientes y buscar trabajo a la vez. ¿Qué debería decir ella?', en: 'The café manager finds out about everything and gets angry: he says Astrid can’t serve customers and look for jobs at the same time. What should she say?' },
          questions: [
            { q: { es: '¿Trabajas en lo que has estudiado?', en: 'Do you work in what you studied?' }, help: { es: 'Sí, estudié… y trabajo de… / No, estudié… pero trabajo en…', en: 'Yes, I studied… and work as… / No, I studied… but I work in…' }, follow: [{ es: '¿Te gustaría cambiar?', en: 'Would you like to change?' }, { es: '¿Volverías a estudiar lo mismo?', en: 'Would you study the same again?' }] },
            { q: { es: '¿Te irías a otro país por un trabajo mejor pagado?', en: 'Would you move to another country for a better-paid job?' }, help: { es: 'Sí, me iría a… / No, porque…', en: 'Yes, I would go to… / No, because…' }, follow: [{ es: '¿Qué echarías de menos?', en: 'What would you miss?' }, { es: '¿Por cuánto tiempo?', en: 'For how long?' }] },
            { q: { es: '¿Has hecho prácticas alguna vez?', en: 'Have you ever done an internship?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, at… / No, never.' }, follow: [{ es: '¿Te pagaban?', en: 'Were you paid?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué haces cuando estás triste por el trabajo?', en: 'What do you do when you are sad about work?' }, help: { es: 'Hablo con… / Salgo a…', en: 'I talk to… / I go out to…' }, follow: [{ es: '¿Te ayuda?', en: 'Does it help?' }, { es: '¿Quién te da buenos consejos?', en: 'Who gives you good advice?' }] },
          ],
          words: [{ es: 'el título', en: 'the degree' }, { es: 'la solicitud', en: 'the application' }, { es: 'las prácticas', en: 'the internship' }, { es: 'el sueldo', en: 'the salary' }, { es: 'la obra', en: 'the building site' }],
        },
        B1: {
          scene: { es: 'El ayuntamiento quiere que las cafeterías del centro dejen de aceptar dinero en efectivo, porque en Suecia casi nadie lo usa. Pero muchos clientes mayores del café de Astrid solo pagan con monedas. Astrid tiene que explicar la nueva norma a una señora de noventa años que viene todos los días.', en: 'The city council wants cafés in the centre to stop accepting cash, because in Sweden almost nobody uses it. But many elderly customers at Astrid’s café only pay with coins. Astrid has to explain the new rule to a ninety-year-old lady who comes every day.' },
          opener: { es: 'Para mí es cómodo pagar con el móvil. Pero la señora Berg no tiene móvil, no se fía de las tarjetas y viene aquí sobre todo para hablar con alguien. Si no puede pagar, quizá deja de venir. ¿Un país moderno debería esperar a los que van más despacio?', en: 'For me it’s convenient to pay with my phone. But Mrs Berg has no mobile, doesn’t trust cards and comes here mainly to talk to someone. If she can’t pay, maybe she’ll stop coming. Should a modern country wait for those who go more slowly?' },
          decide: {
            ask: { es: 'Astrid tiene que decidir qué hace con la señora Berg. ¿Qué debería hacer?', en: 'Astrid has to decide what to do about Mrs Berg. What should she do?' },
            options: [
              { say: { es: 'Seguir aceptando sus monedas en secreto.', en: 'Keep accepting her coins in secret.' }, then: { es: 'Funciona unas semanas, hasta que un inspector lo ve. El jefe paga una multa pequeña.', en: 'It works for a few weeks, until an inspector sees it. The manager pays a small fine.' } },
              { say: { es: 'Enseñarle a pagar con una tarjeta, paso a paso.', en: 'Teach her to pay with a card, step by step.' }, then: { es: 'La señora Berg tarda un mes en aprender. Ahora ayuda a sus amigas a hacer lo mismo.', en: 'Mrs Berg takes a month to learn. Now she helps her friends do the same.' } },
              { say: { es: 'Escribir al ayuntamiento para pedir una excepción para mayores.', en: 'Write to the council to ask for an exception for older people.' }, then: { es: 'Otros cafés firman la carta. El periódico local publica la historia.', en: 'Other cafés sign the letter. The local newspaper publishes the story.' } },
            ],
          },
          twist: { es: 'Un cliente joven escucha la conversación y dice en voz alta que «los mayores tienen que adaptarse o quedarse en casa». La señora Berg lo oye. ¿Cómo debería reaccionar Astrid?', en: 'A young customer overhears the conversation and says out loud that “old people have to adapt or stay at home.” Mrs Berg hears it. How should Astrid react?' },
          questions: [
            { q: { es: '¿Todavía usas dinero en efectivo?', en: 'Do you still use cash?' }, help: { es: 'Sí, para… / Casi nunca, porque…', en: 'Yes, for… / Hardly ever, because…' }, follow: [{ es: '¿Desaparecerá en tu país?', en: 'Will it disappear in your country?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
            { q: { es: '¿Las personas mayores de tu familia usan internet?', en: 'Do the older people in your family use the internet?' }, help: { es: 'Mi abuela usa… pero no sabe…', en: 'My grandmother uses… but doesn’t know how to…' }, follow: [{ es: '¿Quién les ayuda?', en: 'Who helps them?' }, { es: '¿Qué les cuesta más?', en: 'What do they find hardest?' }] },
            { q: { es: '¿Hay que adaptarse siempre a la tecnología nueva?', en: 'Do we always have to adapt to new technology?' }, help: { es: 'Creo que sí, pero… / No necesariamente, porque…', en: 'I think so, but… / Not necessarily, because…' }, follow: [{ es: '¿Qué tecnología te ha costado más?', en: 'Which technology has been hardest for you?' }, { es: '¿Y cuál te ha cambiado la vida?', en: 'And which has changed your life?' }] },
            { q: { es: '¿Has saltado alguna norma para ayudar a alguien?', en: 'Have you ever broken a rule to help someone?' }, help: { es: 'Sí, una vez… / No, prefiero no hacerlo.', en: 'Yes, once… / No, I prefer not to.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'el efectivo', en: 'cash' }, { es: 'fiarse de', en: 'to trust' }, { es: 'la norma', en: 'the rule' }, { es: 'la multa', en: 'the fine' }, { es: 'adaptarse', en: 'to adapt' }],
        },
      },
    },
    // ------------------------------------------------------------ the Vasa museum
    {
      id: 'vasa',
      name: { es: 'El Museo Vasa', en: 'The Vasa Museum' },
      who: { name: 'Lars', role: { es: 'guía del museo', en: 'museum guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un museo grande y oscuro. Dentro hay un barco de madera enorme y muy viejo. Lars es el guía.', en: 'It is a big, dark museum. Inside there is a huge, very old wooden ship. Lars is the guide.' },
          opener: { es: '¡Hola! Soy Lars. Este barco se llama Vasa. Tiene casi cuatrocientos años. ¿Te gusta?', en: 'Hello! I am Lars. This ship is called Vasa. It is almost four hundred years old. Do you like it?' },
          decide: {
            ask: { es: 'Lars te enseña tres cosas. ¿Qué quieres ver?', en: 'Lars shows you three things. What do you want to see?' },
            options: [
              { say: { es: 'Los cañones del barco.', en: 'The ship’s cannons.' }, then: { es: 'Lars dice: «Hay sesenta y cuatro cañones. ¡Muchos!»', en: 'Lars says: “There are sixty-four cannons. A lot!”' } },
              { say: { es: 'Las figuras de madera.', en: 'The wooden figures.' }, then: { es: 'Lars dice: «Mira: leones, reyes y monstruos».', en: 'Lars says: “Look: lions, kings and monsters.”' } },
              { say: { es: 'La ropa de los marineros.', en: 'The sailors’ clothes.' }, then: { es: 'Lars dice: «Esta ropa está en el barco desde 1628».', en: 'Lars says: “These clothes have been on the ship since 1628.”' } },
            ],
          },
          twist: { es: 'Lars dice: «El barco navega solo veinte minutos… ¡y se hunde!» ¿Qué dices?', en: 'Lars says: “The ship sails for only twenty minutes… and sinks!” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, mucho. / No, me mareo.', en: 'Yes, a lot. / No, I get seasick.' }, follow: [{ es: '¿Viajas en barco?', en: 'Do you travel by boat?' }, { es: '¿Adónde?', en: 'Where to?' }] },
            { q: { es: '¿Te gusta la historia?', en: 'Do you like history?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Qué época?', en: 'Which period?' }, { es: '¿Lees libros de historia?', en: 'Do you read history books?' }] },
            { q: { es: '¿Hay un museo cerca de tu casa?', en: 'Is there a museum near your home?' }, help: { es: 'Sí, hay uno. / No, no hay.', en: 'Yes, there is one. / No, there isn’t.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Vas?', en: 'Do you go?' }] },
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, sé nadar. / No, no sé.', en: 'Yes, I can. / No, I can’t.' }, follow: [{ es: '¿Dónde nadas?', en: 'Where do you swim?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
          ],
          words: [{ es: 'el barco', en: 'the ship / boat' }, { es: 'la madera', en: 'wood' }, { es: 'el cañón', en: 'the cannon' }, { es: 'el marinero', en: 'the sailor' }, { es: 'hundirse', en: 'to sink' }],
        },
        A1: {
          scene: { es: 'Es verano y el museo está lleno de turistas. Lars hace visitas en sueco, inglés y español. Hoy tiene un grupo de veinte estudiantes de secundaria que no escuchan nada.', en: 'It is summer and the museum is full of tourists. Lars gives tours in Swedish, English and Spanish. Today he has a group of twenty secondary-school students who aren’t listening at all.' },
          opener: { es: 'El Vasa era el barco más bonito de su época. El rey quería impresionar a todo el mundo. Pero tenía demasiado peso arriba y se hundió en el puerto, delante de toda la ciudad. ¿Tú has hecho algo para impresionar y ha salido mal?', en: 'The Vasa was the most beautiful ship of its time. The king wanted to impress everyone. But it had too much weight on top and sank in the harbour, in front of the whole city. Have you ever done something to impress people and it went wrong?' },
          decide: {
            ask: { es: 'Los estudiantes miran el móvil. Lars te pide una idea. ¿Qué propones?', en: 'The students are looking at their phones. Lars asks you for an idea. What do you suggest?' },
            options: [
              { say: { es: 'Un concurso: el primero que encuentra un león de madera gana.', en: 'A contest: the first to find a wooden lion wins.' }, then: { es: 'Todos guardan el móvil y corren por el museo. Lars está feliz.', en: 'Everyone puts their phone away and runs around the museum. Lars is happy.' } },
              { say: { es: 'Contar la historia de un marinero muerto.', en: 'Tell the story of a dead sailor.' }, then: { es: 'Los estudiantes escuchan en silencio. Una chica tiene miedo.', en: 'The students listen in silence. One girl is scared.' } },
              { say: { es: 'Hacer fotos para sus redes sociales.', en: 'Take photos for their social media.' }, then: { es: 'Hacen cien fotos. Por lo menos, ahora miran el barco.', en: 'They take a hundred photos. At least now they look at the ship.' } },
            ],
          },
          twist: { es: 'Un niño de otro grupo se pierde en el museo. Su madre solo habla español y está muy nerviosa. ¿Qué haces?', en: 'A boy from another group gets lost in the museum. His mother only speaks Spanish and is very nervous. What do you do?' },
          questions: [
            { q: { es: '¿Qué hacías en las excursiones del colegio?', en: 'What did you do on school trips?' }, help: { es: 'Hablaba con mis amigos / escuchaba…', en: 'I talked with my friends / listened…' }, follow: [{ es: '¿Adónde ibais?', en: 'Where did you go?' }, { es: '¿Cuál te gustó más?', en: 'Which did you like most?' }] },
            { q: { es: '¿Cuántos idiomas hablas?', en: 'How many languages do you speak?' }, help: { es: 'Hablo… idiomas.', en: 'I speak… languages.' }, follow: [{ es: '¿Cuál quieres aprender?', en: 'Which do you want to learn?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Usas mucho el móvil?', en: 'Do you use your phone a lot?' }, help: { es: 'Sí, unas… horas al día. / No mucho.', en: 'Yes, about… hours a day. / Not much.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Te gustaría usarlo menos?', en: 'Would you like to use it less?' }] },
            { q: { es: '¿Te gusta hacer visitas guiadas?', en: 'Do you like guided tours?' }, help: { es: 'Sí, aprendo mucho. / No, prefiero ir solo.', en: 'Yes, I learn a lot. / No, I prefer going alone.' }, follow: [{ es: '¿Cuál es la última?', en: 'Which was the last one?' }, { es: '¿Era buena?', en: 'Was it good?' }] },
          ],
          words: [{ es: 'el rey', en: 'the king' }, { es: 'impresionar', en: 'to impress' }, { es: 'el peso', en: 'the weight' }, { es: 'el puerto', en: 'the harbour' }, { es: 'perderse', en: 'to get lost' }],
        },
        A2: {
          scene: { es: 'El Vasa estuvo bajo el agua del puerto 333 años. En 1956 un investigador aficionado, Anders Franzén, lo encontró después de buscarlo durante años. Hoy Lars recibe a una nieta de Franzén, que quiere saber cómo era su abuelo.', en: 'The Vasa lay under the harbour water for 333 years. In 1956 an amateur researcher, Anders Franzén, found it after searching for years. Today Lars welcomes one of Franzén’s granddaughters, who wants to know what her grandfather was like.' },
          opener: { es: 'Franzén no era un científico famoso. Era un hombre que no se rendía. Todos le decían que el barco estaba destruido, y él siguió buscando con un pequeño barco y un aparato hecho por él. ¿Tú has seguido buscando algo cuando todos te decían que pararas?', en: 'Franzén wasn’t a famous scientist. He was a man who didn’t give up. Everyone told him the ship was destroyed, and he kept searching with a little boat and a device he made himself. Have you ever kept looking for something when everyone told you to stop?' },
          decide: {
            ask: { es: 'La nieta tiene cartas de su abuelo que nadie ha leído. Quiere dárselas al museo. ¿Qué le aconsejas?', en: 'The granddaughter has letters from her grandfather that nobody has read. She wants to give them to the museum. What do you advise her?' },
            options: [
              { say: { es: 'Que las dé al museo para que todos las vean.', en: 'Give them to the museum so everyone can see them.' }, then: { es: 'El museo hace una pequeña exposición. Ella llora el día de la inauguración.', en: 'The museum puts on a small exhibition. She cries on opening day.' } },
              { say: { es: 'Que las lea ella primero, en casa.', en: 'Read them herself first, at home.' }, then: { es: 'En una carta descubre que su abuelo casi abandona en 1955. Esa carta se la queda.', en: 'In one letter she discovers her grandfather almost gave up in 1955. She keeps that letter.' } },
              { say: { es: 'Que escriba un libro con ellas.', en: 'Write a book with them.' }, then: { es: 'Tarda dos años. El libro se vende en la tienda del museo.', en: 'It takes her two years. The book is sold in the museum shop.' } },
            ],
          },
          twist: { es: 'Un periodista dice que Franzén no fue el primero en encontrar el barco: un pescador lo había visto antes. La nieta se enfada. ¿Qué le dice Lars?', en: 'A journalist says Franzén wasn’t the first to find the ship: a fisherman had seen it before. The granddaughter gets angry. What does Lars tell her?' },
          questions: [
            { q: { es: '¿Qué sabes de tus abuelos de jóvenes?', en: 'What do you know about your grandparents when they were young?' }, help: { es: 'Mi abuelo era… y vivía en…', en: 'My grandfather was… and lived in…' }, follow: [{ es: '¿Quién te lo contó?', en: 'Who told you?' }, { es: '¿Te gustaría saber más?', en: 'Would you like to know more?' }] },
            { q: { es: '¿Has encontrado algo importante por casualidad?', en: 'Have you ever found something important by chance?' }, help: { es: 'Sí, una vez encontré… / No, nunca.', en: 'Yes, once I found… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué hiciste con ello?', en: 'What did you do with it?' }] },
            { q: { es: '¿Guardas cartas o mensajes antiguos?', en: 'Do you keep old letters or messages?' }, help: { es: 'Sí, guardo… / No, borro todo.', en: 'Yes, I keep… / No, I delete everything.' }, follow: [{ es: '¿De quién?', en: 'From whom?' }, { es: '¿Los lees a veces?', en: 'Do you read them sometimes?' }] },
            { q: { es: '¿Eres una persona que no se rinde?', en: 'Are you someone who doesn’t give up?' }, help: { es: 'Sí, por ejemplo… / A veces me rindo cuando…', en: 'Yes, for example… / Sometimes I give up when…' }, follow: [{ es: '¿Cuándo es bueno rendirse?', en: 'When is it good to give up?' }, { es: '¿Y cuándo no?', en: 'And when isn’t it?' }] },
          ],
          words: [{ es: 'el investigador', en: 'the researcher' }, { es: 'aficionado', en: 'amateur' }, { es: 'rendirse', en: 'to give up' }, { es: 'la exposición', en: 'the exhibition' }, { es: 'por casualidad', en: 'by chance' }],
        },
        B1: {
          scene: { es: 'El Vasa se está deformando muy despacio: la madera se mueve unos milímetros cada año. Los expertos discuten si hay que cerrar el museo durante años para salvarlo o seguir abierto, porque recibe más de un millón de visitantes y da trabajo a mucha gente, incluido Lars.', en: 'The Vasa is very slowly warping: the wood moves a few millimetres every year. Experts are debating whether to close the museum for years to save it or stay open, because it gets over a million visitors and employs a lot of people, including Lars.' },
          opener: { es: 'Yo quiero que mis nietos puedan ver este barco. Pero si cierran, pierdo mi trabajo, y no soy el único. Los científicos dicen que cada visitante trae humedad y calor. Es como si el barco necesitara estar solo para sobrevivir. ¿Qué es más importante: conservar o compartir?', en: 'I want my grandchildren to be able to see this ship. But if they close, I lose my job, and I’m not the only one. Scientists say every visitor brings humidity and heat. It’s as if the ship needed to be alone to survive. What’s more important: preserving or sharing?' },
          decide: {
            ask: { es: 'Lars está en el comité que decide. ¿Qué debería votar?', en: 'Lars is on the committee that decides. How should he vote?' },
            options: [
              { say: { es: 'Cerrar el museo hasta que el barco esté a salvo.', en: 'Close the museum until the ship is safe.' }, then: { es: 'El museo cierra tres años. Lars trabaja en un proyecto de realidad virtual del barco.', en: 'The museum closes for three years. Lars works on a virtual reality project about the ship.' } },
              { say: { es: 'Seguir abierto, pero con menos visitantes al día.', en: 'Stay open, but with fewer visitors per day.' }, then: { es: 'Las entradas se agotan con meses de antelación. El precio sube mucho.', en: 'Tickets sell out months in advance. The price goes up a lot.' } },
              { say: { es: 'Abrir solo una parte y dejar trabajar a los científicos.', en: 'Open only part of it and let the scientists work.' }, then: { es: 'Los visitantes ven a los científicos trabajando. Se convierte en la parte más popular.', en: 'Visitors watch the scientists at work. It becomes the most popular part.' } },
            ],
          },
          twist: { es: 'Un político propone construir una copia exacta del Vasa para los turistas y guardar el original en secreto. Muchos lo apoyan. ¿Qué opina Lars?', en: 'A politician proposes building an exact copy of the Vasa for tourists and keeping the original hidden. Many support the idea. What does Lars think?' },
          questions: [
            { q: { es: '¿Visitarías una copia de un monumento famoso?', en: 'Would you visit a copy of a famous monument?' }, help: { es: 'Sí, si… / No, porque lo importante es…', en: 'Yes, if… / No, because what matters is…' }, follow: [{ es: '¿Conoces algún caso?', en: 'Do you know any example?' }, { es: '¿Qué se pierde con una copia?', en: 'What is lost with a copy?' }] },
            { q: { es: '¿Hay algún lugar de tu país en peligro por el turismo?', en: 'Is there a place in your country endangered by tourism?' }, help: { es: 'Sí, por ejemplo… / No que yo sepa.', en: 'Yes, for example… / Not that I know of.' }, follow: [{ es: '¿Qué se debería hacer?', en: 'What should be done?' }, { es: '¿Lo has visitado?', en: 'Have you visited it?' }] },
            { q: { es: '¿Votarías algo que te perjudica a ti pero es bueno para todos?', en: 'Would you vote for something that harms you but is good for everyone?' }, help: { es: 'Creo que sí, si… / Me costaría mucho, porque…', en: 'I think so, if… / It would be very hard, because…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Lo has hecho alguna vez?', en: 'Have you ever done it?' }] },
            { q: { es: '¿La tecnología puede sustituir una visita real?', en: 'Can technology replace a real visit?' }, help: { es: 'En parte, porque… / No, nunca, porque…', en: 'Partly, because… / No, never, because…' }, follow: [{ es: '¿Has probado la realidad virtual?', en: 'Have you tried virtual reality?' }, { es: '¿Qué te pareció?', en: 'What did you think?' }] },
          ],
          words: [{ es: 'deformarse', en: 'to warp' }, { es: 'la humedad', en: 'humidity' }, { es: 'conservar', en: 'to preserve' }, { es: 'el comité', en: 'the committee' }, { es: 'agotarse', en: 'to sell out' }],
        },
      },
    },
    // ------------------------------------------------------------ the archipelago ferry
    {
      id: 'ferry',
      name: { es: 'El ferry al archipiélago', en: 'The ferry to the archipelago' },
      who: { name: 'Johan', role: { es: 'capitán del ferry', en: 'ferry captain' } },
      levels: {
        A0: {
          scene: { es: 'Es un barco blanco en el puerto. Va a las islas. Hay mucha agua y muchas islas pequeñas. Johan es el capitán.', en: 'It is a white boat in the harbour. It goes to the islands. There is a lot of water and many small islands. Johan is the captain.' },
          opener: { es: '¡Hola! Soy Johan, el capitán. Hay treinta mil islas aquí. ¿Adónde vas?', en: 'Hello! I am Johan, the captain. There are thirty thousand islands here. Where are you going?' },
          decide: {
            ask: { es: 'Hay tres islas. ¿Cuál eliges?', en: 'There are three islands. Which do you choose?' },
            options: [
              { say: { es: 'Una isla con playa.', en: 'An island with a beach.' }, then: { es: 'Johan dice: «El agua está fría. ¡Muy fría!»', en: 'Johan says: “The water is cold. Very cold!”' } },
              { say: { es: 'Una isla con una casa roja.', en: 'An island with a red house.' }, then: { es: 'Johan dice: «Es mi casa de verano. ¡Ja, ja!»', en: 'Johan says: “It’s my summer house. Ha ha!”' } },
              { say: { es: 'Una isla con un restaurante.', en: 'An island with a restaurant.' }, then: { es: 'Johan dice: «Tienen pescado muy bueno».', en: 'Johan says: “They have very good fish.”' } },
            ],
          },
          twist: { es: 'Hay mucho viento. El barco se mueve mucho. ¿Qué dices?', en: 'It is very windy. The boat moves a lot. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el mar?', en: 'Do you like the sea?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Vas a la playa?', en: 'Do you go to the beach?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Hay islas en tu país?', en: 'Are there islands in your country?' }, help: { es: 'Sí, muchas. / No, no hay.', en: 'Yes, many. / No, there aren’t.' }, follow: [{ es: '¿Cómo se llaman?', en: 'What are they called?' }, { es: '¿Son bonitas?', en: 'Are they beautiful?' }] },
            { q: { es: '¿Te gusta el verano?', en: 'Do you like summer?' }, help: { es: 'Sí, me encanta. / No, prefiero el invierno.', en: 'Yes, I love it. / No, I prefer winter.' }, follow: [{ es: '¿Qué haces en verano?', en: 'What do you do in summer?' }, { es: '¿Viajas?', en: 'Do you travel?' }] },
            { q: { es: '¿De qué color es tu casa?', en: 'What colour is your house?' }, help: { es: 'Es blanca / roja / amarilla.', en: 'It is white / red / yellow.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Tiene jardín?', en: 'Does it have a garden?' }] },
          ],
          words: [{ es: 'la isla', en: 'the island' }, { es: 'el capitán', en: 'the captain' }, { es: 'el viento', en: 'the wind' }, { es: 'frío', en: 'cold' }, { es: 'el pescado', en: 'fish (as food)' }],
        },
        A1: {
          scene: { es: 'Es el viernes antes de Midsommar, la fiesta más importante del verano sueco. El ferry está lleno: familias con flores, cajas de cerveza, comida y hasta un perro con una corona de flores.', en: 'It is the Friday before Midsummer, the most important summer festival in Sweden. The ferry is full: families with flowers, crates of beer, food and even a dog wearing a flower crown.' },
          opener: { es: 'En Midsommar todo el mundo se va a las islas. Bailamos alrededor de un palo con flores, comemos arenque y fresas, y cantamos canciones de ranas. Sí, de ranas. ¿Tú qué haces en la fiesta más importante de tu país?', en: 'At Midsummer everyone heads to the islands. We dance around a pole with flowers, eat herring and strawberries, and sing songs about frogs. Yes, frogs. What do you do on your country’s most important holiday?' },
          decide: {
            ask: { es: 'Una familia te invita a su fiesta en la isla. ¿Qué haces?', en: 'A family invites you to their party on the island. What do you do?' },
            options: [
              { say: { es: 'Acepto y llevo un postre de mi país.', en: 'I accept and bring a dessert from my country.' }, then: { es: 'Tu postre se acaba en cinco minutos. La abuela pide la receta.', en: 'Your dessert is gone in five minutes. The grandmother asks for the recipe.' } },
              { say: { es: 'Acepto, pero solo un par de horas.', en: 'I accept, but only for a couple of hours.' }, then: { es: 'A las once de la noche todavía hay luz. Te quedas hasta las tres.', en: 'At eleven at night it is still light. You stay until three.' } },
              { say: { es: 'Le doy las gracias, pero prefiero explorar sola o solo.', en: 'I thank them, but I prefer to explore on my own.' }, then: { es: 'Caminas por la isla. Desde lejos oyes las canciones de las ranas.', en: 'You walk around the island. From far away you hear the frog songs.' } },
            ],
          },
          twist: { es: 'El perro de la corona de flores salta al agua. Su dueño no sabe nadar. ¿Qué haces?', en: 'The dog with the flower crown jumps into the water. Its owner can’t swim. What do you do?' },
          questions: [
            { q: { es: '¿Cuál es la fiesta más importante de tu país?', en: 'What is the most important holiday in your country?' }, help: { es: 'Es… y se celebra en…', en: 'It is… and it is celebrated in…' }, follow: [{ es: '¿Qué se come?', en: 'What do people eat?' }, { es: '¿Con quién la celebras?', en: 'Who do you celebrate it with?' }] },
            { q: { es: '¿Sabes alguna canción tradicional?', en: 'Do you know a traditional song?' }, help: { es: 'Sí, una que se llama… / No, ninguna.', en: 'Yes, one called… / No, none.' }, follow: [{ es: '¿Quién te la enseñó?', en: 'Who taught it to you?' }, { es: '¿Puedes cantar un poco?', en: 'Can you sing a little?' }] },
            { q: { es: '¿Te gusta bailar?', en: 'Do you like dancing?' }, help: { es: 'Sí, mucho. / No, me da vergüenza.', en: 'Yes, a lot. / No, I’m embarrassed.' }, follow: [{ es: '¿Qué baile?', en: 'Which dance?' }, { es: '¿Dónde bailas?', en: 'Where do you dance?' }] },
            { q: { es: '¿Hasta qué hora hay luz en verano en tu ciudad?', en: 'Until what time is it light in summer in your city?' }, help: { es: 'Hasta las… más o menos.', en: 'Until about…' }, follow: [{ es: '¿Y en invierno?', en: 'And in winter?' }, { es: '¿Qué prefieres?', en: 'Which do you prefer?' }] },
          ],
          words: [{ es: 'la corona', en: 'the crown' }, { es: 'el arenque', en: 'herring' }, { es: 'la rana', en: 'the frog' }, { es: 'el palo', en: 'the pole' }, { es: 'el postre', en: 'the dessert' }],
        },
        A2: {
          scene: { es: 'Johan lleva treinta años llevando gente a las islas. En invierno, cuando el mar se congela, el ferry es la única forma de llevar comida y medicinas a los pocos vecinos que viven allí todo el año. La compañía quiere quitar la ruta de invierno porque no da dinero.', en: 'Johan has spent thirty years taking people to the islands. In winter, when the sea freezes, the ferry is the only way to bring food and medicine to the few residents who live there all year. The company wants to cut the winter route because it doesn’t make money.' },
          opener: { es: 'En verano llevo a miles de turistas. En invierno llevo a doce personas: una maestra, dos pescadores, una familia con niños y algunos jubilados. Para la compañía son números. Para mí son vecinos. ¿Tú conoces lugares que se quedan vacíos en invierno?', en: 'In summer I carry thousands of tourists. In winter I carry twelve people: a teacher, two fishermen, a family with children and some pensioners. For the company they’re numbers. For me they’re neighbours. Do you know places that empty out in winter?' },
          decide: {
            ask: { es: 'Johan tiene una reunión con la compañía mañana. ¿Qué le aconsejas?', en: 'Johan has a meeting with the company tomorrow. What do you advise him?' },
            options: [
              { say: { es: 'Que pida ayuda al ayuntamiento para pagar la ruta.', en: 'Ask the council for help to pay for the route.' }, then: { es: 'El ayuntamiento paga la mitad. La ruta sigue, pero solo tres días por semana.', en: 'The council pays half. The route continues, but only three days a week.' } },
              { say: { es: 'Que proponga subir un poco el precio en verano.', en: 'Suggest raising summer prices a little.' }, then: { es: 'Los turistas casi no lo notan. Con ese dinero se paga el invierno.', en: 'Tourists hardly notice. That money pays for the winter.' } },
              { say: { es: 'Que compre un barco pequeño y haga la ruta él mismo.', en: 'Buy a small boat and run the route himself.' }, then: { es: 'Los vecinos lo ayudan a comprarlo. Johan trabaja más, pero es su propio jefe.', en: 'The residents help him buy it. Johan works more, but he’s his own boss.' } },
            ],
          },
          twist: { es: 'Una noche de enero, la maestra de la isla llama a Johan: su hijo tiene fiebre muy alta y no hay médico. El mar tiene hielo. ¿Qué hace Johan?', en: 'One January night, the island teacher calls Johan: her son has a very high fever and there is no doctor. The sea has ice on it. What does Johan do?' },
          questions: [
            { q: { es: '¿Vivirías en una isla pequeña todo el año?', en: 'Would you live on a small island all year round?' }, help: { es: 'Sí, porque… / No, porque echaría de menos…', en: 'Yes, because… / No, because I would miss…' }, follow: [{ es: '¿Qué necesitarías?', en: 'What would you need?' }, { es: '¿Qué harías en invierno?', en: 'What would you do in winter?' }] },
            { q: { es: '¿El transporte público llega bien a todos los lugares de tu país?', en: 'Does public transport reach all places in your country well?' }, help: { es: 'En las ciudades sí, pero en el campo…', en: 'In cities yes, but in the countryside…' }, follow: [{ es: '¿Quién debería pagarlo?', en: 'Who should pay for it?' }, { es: '¿Tú lo usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Conoces a alguien que trabaje en lo mismo desde hace muchos años?', en: 'Do you know someone who has done the same job for many years?' }, help: { es: 'Sí, mi… lleva… años como…', en: 'Yes, my… has been a… for… years.' }, follow: [{ es: '¿Le gusta todavía?', en: 'Do they still like it?' }, { es: '¿Tú harías lo mismo?', en: 'Would you do the same?' }] },
            { q: { es: '¿Hay lugares que cambian mucho entre verano e invierno donde vives?', en: 'Are there places that change a lot between summer and winter where you live?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Cuándo te gusta más?', en: 'When do you like it most?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'congelarse', en: 'to freeze' }, { es: 'la ruta', en: 'the route' }, { es: 'el jubilado', en: 'the pensioner' }, { es: 'la fiebre', en: 'fever' }, { es: 'el hielo', en: 'ice' }],
        },
        B1: {
          scene: { es: 'Muchas casas de las islas se venden ahora a gente rica de la ciudad que solo viene tres semanas al año. Los precios han subido tanto que los hijos de los pescadores no pueden comprar una casa. La escuela de la isla de Johan va a cerrar si no llegan familias nuevas.', en: 'Many island houses are now sold to wealthy city people who only come three weeks a year. Prices have risen so much that fishermen’s children can’t buy a house. The school on Johan’s island will close unless new families arrive.' },
          opener: { es: 'Mi hija quiere volver a la isla con sus hijos, pero una casa cuesta lo mismo que un piso en el centro de Estocolmo. Al mismo tiempo, el dinero de los veraneantes da trabajo en verano. No quiero que la isla sea un museo bonito y vacío diez meses al año. ¿Cómo se mantiene vivo un pueblo?', en: 'My daughter wants to return to the island with her children, but a house costs as much as a flat in central Stockholm. At the same time, the summer people’s money creates jobs in summer. I don’t want the island to be a pretty, empty museum ten months a year. How do you keep a village alive?' },
          decide: {
            ask: { es: 'Los vecinos votan una propuesta. ¿Cuál debería apoyar Johan?', en: 'The residents are voting on a proposal. Which should Johan support?' },
            options: [
              { say: { es: 'Que las casas nuevas solo se vendan a gente que viva allí todo el año.', en: 'That new houses are only sold to people who live there all year.' }, then: { es: 'La norma es polémica. Algunos propietarios amenazan con ir a juicio.', en: 'The rule is controversial. Some owners threaten to take it to court.' } },
              { say: { es: 'Que se pague un impuesto alto por las casas vacías en invierno.', en: 'That a high tax is paid on houses left empty in winter.' }, then: { es: 'Con ese dinero se construyen cuatro casas para familias jóvenes.', en: 'With that money four houses are built for young families.' } },
              { say: { es: 'Que se ofrezca internet rápido para atraer a gente que trabaja a distancia.', en: 'That fast internet is offered to attract people who work remotely.' }, then: { es: 'Llegan tres familias en un año. La escuela se salva, por ahora.', en: 'Three families arrive in a year. The school is saved, for now.' } },
            ],
          },
          twist: { es: 'Un empresario rico que tiene una casa en la isla le ofrece a Johan pagar la escuela entera, con una condición: que se ponga su nombre. ¿Debería aceptar?', en: 'A wealthy businessman who owns a house on the island offers to pay for the whole school, on one condition: that it is named after him. Should Johan accept?' },
          questions: [
            { q: { es: '¿Hay pueblos que se están quedando vacíos en tu país?', en: 'Are there villages emptying out in your country?' }, help: { es: 'Sí, sobre todo en… porque…', en: 'Yes, especially in… because…' }, follow: [{ es: '¿Qué se podría hacer?', en: 'What could be done?' }, { es: '¿Vivirías en uno?', en: 'Would you live in one?' }] },
            { q: { es: '¿Las segundas residencias son un problema?', en: 'Are second homes a problem?' }, help: { es: 'Pueden serlo cuando… / No, porque traen…', en: 'They can be when… / No, because they bring…' }, follow: [{ es: '¿Tienes o te gustaría tener una?', en: 'Do you have one or would you like one?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Trabajar a distancia puede salvar a los pueblos?', en: 'Can remote work save villages?' }, help: { es: 'En parte, porque… / No, porque faltan…', en: 'Partly, because… / No, because there is a lack of…' }, follow: [{ es: '¿Tú puedes trabajar a distancia?', en: 'Can you work remotely?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Aceptarías dinero de alguien con una condición que no te gusta?', en: 'Would you accept money from someone with a condition you don’t like?' }, help: { es: 'Depende de la condición. / No, nunca, porque…', en: 'It depends on the condition. / No, never, because…' }, follow: [{ es: '¿Dónde está el límite?', en: 'Where is the limit?' }, { es: '¿Te ha pasado?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'el veraneante', en: 'the summer visitor' }, { es: 'la segunda residencia', en: 'the second home' }, { es: 'el impuesto', en: 'the tax' }, { es: 'polémico', en: 'controversial' }, { es: 'a distancia', en: 'remotely' }],
        },
      },
    },
    // ------------------------------------------------------------ the Östermalm food hall
    {
      id: 'mercado',
      name: { es: 'El mercado de Östermalm', en: 'The Östermalm food hall' },
      who: { name: 'Ingrid', role: { es: 'pescadera', en: 'fishmonger' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado antiguo y bonito. Hay pescado, carne, queso y pan. Ingrid vende pescado.', en: 'It is an old, beautiful market. There is fish, meat, cheese and bread. Ingrid sells fish.' },
          opener: { es: '¡Hola! Soy Ingrid. Tengo salmón, arenque y gambas. ¿Qué quieres?', en: 'Hello! I am Ingrid. I have salmon, herring and prawns. What do you want?' },
          decide: {
            ask: { es: 'Ingrid tiene tres pescados. ¿Qué compras?', en: 'Ingrid has three kinds of fish. What do you buy?' },
            options: [
              { say: { es: 'Salmón, por favor.', en: 'Salmon, please.' }, then: { es: 'Ingrid dice: «Es de Noruega. ¡Muy fresco!»', en: 'Ingrid says: “It is from Norway. Very fresh!”' } },
              { say: { es: 'Arenque, por favor.', en: 'Herring, please.' }, then: { es: 'Ingrid dice: «¡Muy sueco! Con patatas está muy rico».', en: 'Ingrid says: “Very Swedish! With potatoes it is delicious.”' } },
              { say: { es: 'Gambas, por favor.', en: 'Prawns, please.' }, then: { es: 'Ingrid dice: «Cien gramos son cinco euros… perdón, cincuenta coronas».', en: 'Ingrid says: “A hundred grams is five euros… sorry, fifty kronor.”' } },
            ],
          },
          twist: { es: 'Ingrid te da a probar un pescado que huele muy fuerte. ¿Qué dices?', en: 'Ingrid gives you a taste of a fish that smells very strong. What do you say?' },
          questions: [
            { q: { es: '¿Comes pescado?', en: 'Do you eat fish?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué pescado?', en: 'Which fish?' }, { es: '¿Cómo lo cocinas?', en: 'How do you cook it?' }] },
            { q: { es: '¿Vas al mercado?', en: 'Do you go to the market?' }, help: { es: 'Sí, los sábados. / No, voy al supermercado.', en: 'Yes, on Saturdays. / No, I go to the supermarket.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Te gusta el queso?', en: 'Do you like cheese?' }, help: { es: 'Sí, mucho. / No, no me gusta.', en: 'Yes, a lot. / No, I don’t like it.' }, follow: [{ es: '¿Qué queso?', en: 'Which cheese?' }, { es: '¿Con pan?', en: 'With bread?' }] },
            { q: { es: '¿Cuál es tu comida favorita?', en: 'What is your favourite food?' }, help: { es: 'Mi comida favorita es…', en: 'My favourite food is…' }, follow: [{ es: '¿La cocinas tú?', en: 'Do you cook it yourself?' }, { es: '¿Cuándo la comes?', en: 'When do you eat it?' }] },
          ],
          words: [{ es: 'el salmón', en: 'salmon' }, { es: 'las gambas', en: 'prawns' }, { es: 'fresco', en: 'fresh' }, { es: 'oler', en: 'to smell' }, { es: 'la corona', en: 'the krona (Swedish money)' }],
        },
        A1: {
          scene: { es: 'Es sábado por la mañana. El mercado está lleno de gente elegante del barrio y de turistas que hacen fotos a todo. Ingrid prepara bandejas de pescado para una fiesta y no tiene tiempo para nada.', en: 'It is Saturday morning. The market is full of smart local people and tourists photographing everything. Ingrid is preparing fish platters for a party and has no time for anything.' },
          opener: { es: 'Este puesto era de mi padre. Abro a las ocho y cierro a las seis. Los sábados vendo el doble. Lo malo es que muchos turistas hacen fotos y no compran nada. ¿Tú haces fotos de la comida?', en: 'This stall belonged to my father. I open at eight and close at six. On Saturdays I sell twice as much. The bad thing is that lots of tourists take photos and don’t buy anything. Do you take photos of food?' },
          decide: {
            ask: { es: 'Ingrid está sola y hay una fila larga. Te pide ayuda. ¿Qué haces?', en: 'Ingrid is alone and there is a long queue. She asks you for help. What do you do?' },
            options: [
              { say: { es: 'Me pongo un delantal y la ayudo a envolver el pescado.', en: 'I put on an apron and help her wrap the fish.' }, then: { es: 'Al final de la mañana hueles a pescado, pero Ingrid te regala un salmón.', en: 'By the end of the morning you smell of fish, but Ingrid gives you a salmon.' } },
              { say: { es: 'Organizo la fila y doy números a los clientes.', en: 'I organise the queue and give customers numbers.' }, then: { es: 'Todo es más rápido. Un señor dice que deberías trabajar en el mercado.', en: 'Everything goes faster. A man says you should work at the market.' } },
              { say: { es: 'Le digo que no puedo, pero le traigo un café.', en: 'I tell her I can’t, but I bring her a coffee.' }, then: { es: 'Ingrid sonríe por primera vez en toda la mañana.', en: 'Ingrid smiles for the first time all morning.' } },
            ],
          },
          twist: { es: 'Un cliente dice que el salmón de ayer estaba malo y quiere su dinero. Ingrid cree que miente. ¿Qué haces?', en: 'A customer says yesterday’s salmon was bad and wants his money back. Ingrid thinks he’s lying. What do you do?' },
          questions: [
            { q: { es: '¿Haces fotos de la comida?', en: 'Do you take photos of food?' }, help: { es: 'Sí, siempre. / No, nunca.', en: 'Yes, always. / No, never.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Las compartes?', en: 'Do you share them?' }] },
            { q: { es: '¿Tu familia tiene un negocio?', en: 'Does your family have a business?' }, help: { es: 'Sí, una tienda de… / No.', en: 'Yes, a… shop. / No.' }, follow: [{ es: '¿Trabajas allí?', en: 'Do you work there?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿A qué hora empiezas a trabajar o a estudiar?', en: 'What time do you start work or school?' }, help: { es: 'Empiezo a las…', en: 'I start at…' }, follow: [{ es: '¿Y a qué hora terminas?', en: 'And what time do you finish?' }, { es: '¿Es un buen horario?', en: 'Is it a good schedule?' }] },
            { q: { es: '¿Te gusta esperar en una fila?', en: 'Do you like waiting in a queue?' }, help: { es: 'No, me pone nervioso. / No me importa.', en: 'No, it makes me nervous. / I don’t mind.' }, follow: [{ es: '¿Qué haces mientras esperas?', en: 'What do you do while you wait?' }, { es: '¿Dónde hay filas largas?', en: 'Where are there long queues?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'la bandeja', en: 'the platter / tray' }, { es: 'el delantal', en: 'the apron' }, { es: 'envolver', en: 'to wrap' }, { es: 'mentir', en: 'to lie' }],
        },
        A2: {
          scene: { es: 'El mercado ha cerrado tres años por obras y acaba de abrir de nuevo, más moderno y más caro. El alquiler del puesto de Ingrid ha subido mucho. Al lado ahora hay un restaurante de sushi muy famoso que vende salmón al triple de precio.', en: 'The market has been closed for three years for renovations and has just reopened, more modern and more expensive. The rent for Ingrid’s stall has gone up a lot. Next door there is now a very famous sushi restaurant selling salmon at triple the price.' },
          opener: { es: 'Mi padre vendía pescado aquí cuando el mercado era para la gente del barrio. Ahora viene gente de todo el mundo, y eso está bien, pero mis clientes de siempre dicen que todo es demasiado caro. Yo no sé si subir los precios o perder dinero. ¿Tú qué harías?', en: 'My father sold fish here when the market was for local people. Now people come from all over the world, and that’s fine, but my regular customers say everything is too expensive. I don’t know whether to raise prices or lose money. What would you do?' },
          decide: {
            ask: { es: 'El restaurante de sushi le ofrece comprarle todo el pescado a Ingrid, pero solo si deja de vender a otros clientes. ¿Qué le aconsejas?', en: 'The sushi restaurant offers to buy all of Ingrid’s fish, but only if she stops selling to other customers. What do you advise her?' },
            options: [
              { say: { es: 'Que acepte. Es dinero seguro.', en: 'Accept. It’s guaranteed money.' }, then: { es: 'Ingrid gana más, pero sus clientes de siempre dejan de saludarla.', en: 'Ingrid earns more, but her regular customers stop saying hello to her.' } },
              { say: { es: 'Que no acepte y siga como siempre.', en: 'Don’t accept and carry on as usual.' }, then: { es: 'El primer año es difícil. Luego, un periódico escribe sobre «la última pescadera de verdad».', en: 'The first year is hard. Then a newspaper writes about “the last real fishmonger”.' } },
              { say: { es: 'Que acepte vender una parte, no todo.', en: 'Agree to sell part of it, not all.' }, then: { es: 'El restaurante acepta. Ingrid pone un cartel: «Este salmón también está en el sushi de al lado».', en: 'The restaurant agrees. Ingrid puts up a sign: “This salmon is also in the sushi next door.”' } },
            ],
          },
          twist: { es: 'Un influencer graba un vídeo en el puesto de Ingrid diciendo que su pescado es «el peor de Estocolmo». El vídeo tiene medio millón de visitas. ¿Qué hace Ingrid?', en: 'An influencer films a video at Ingrid’s stall saying her fish is “the worst in Stockholm”. The video gets half a million views. What does Ingrid do?' },
          questions: [
            { q: { es: '¿Hay un mercado tradicional en tu ciudad?', en: 'Is there a traditional market in your city?' }, help: { es: 'Sí, se llama… y vende… / No, ya no.', en: 'Yes, it’s called… and sells… / No, not anymore.' }, follow: [{ es: '¿Ha cambiado mucho?', en: 'Has it changed a lot?' }, { es: '¿Vas a menudo?', en: 'Do you go often?' }] },
            { q: { es: '¿Pagarías más por comprar en una tienda pequeña?', en: 'Would you pay more to buy in a small shop?' }, help: { es: 'Sí, porque… / No, prefiero el precio más bajo.', en: 'Yes, because… / No, I prefer the lowest price.' }, follow: [{ es: '¿Qué tienda pequeña te gusta?', en: 'Which small shop do you like?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Confías en las opiniones de internet?', en: 'Do you trust online reviews?' }, help: { es: 'A veces, si… / No mucho, porque…', en: 'Sometimes, if… / Not much, because…' }, follow: [{ es: '¿Escribes opiniones?', en: 'Do you write reviews?' }, { es: '¿Has escrito una mala?', en: 'Have you written a bad one?' }] },
            { q: { es: '¿Qué harías si alguien habla mal de ti en internet?', en: 'What would you do if someone spoke badly about you online?' }, help: { es: 'Respondería… / No haría nada, porque…', en: 'I would reply… / I wouldn’t do anything, because…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Y a alguien que conoces?', en: 'And to someone you know?' }] },
          ],
          words: [{ es: 'las obras', en: 'renovation works' }, { es: 'el alquiler', en: 'the rent' }, { es: 'el triple', en: 'triple' }, { es: 'el cartel', en: 'the sign' }, { es: 'la visita', en: 'the view (online)' }],
        },
        B1: {
          scene: { es: 'Los científicos avisan de que el bacalao del mar Báltico casi ha desaparecido por la pesca excesiva. El gobierno prohíbe pescarlo durante cinco años. Muchos clientes piden bacalao a Ingrid todos los días y no entienden por qué ya no lo tiene. Algunos vendedores lo traen de fuera sin decir de dónde viene.', en: 'Scientists warn that Baltic Sea cod has almost disappeared because of overfishing. The government bans catching it for five years. Many customers ask Ingrid for cod every day and don’t understand why she no longer has it. Some sellers bring it from abroad without saying where it comes from.' },
          opener: { es: 'Mi abuelo pescaba bacalao en el Báltico. Ahora mis nietos quizá no lo vean nunca. Yo apoyo la prohibición, pero cada día pierdo clientes. Lo más difícil es explicar a la gente que el mar no es una tienda infinita. ¿Cómo se convence a alguien de que deje de comprar algo que le gusta?', en: 'My grandfather fished cod in the Baltic. Now my grandchildren may never see it. I support the ban, but I lose customers every day. The hardest thing is explaining to people that the sea isn’t an infinite shop. How do you convince someone to stop buying something they like?' },
          decide: {
            ask: { es: 'Ingrid quiere hacer algo para informar a sus clientes. ¿Qué debería hacer?', en: 'Ingrid wants to do something to inform her customers. What should she do?' },
            options: [
              { say: { es: 'Poner un gran cartel con la historia del bacalao del Báltico.', en: 'Put up a big sign telling the story of Baltic cod.' }, then: { es: 'Mucha gente lo lee y hace preguntas. Algunos se van a otro puesto.', en: 'Lots of people read it and ask questions. Some go to another stall.' } },
              { say: { es: 'Ofrecer recetas tradicionales con otros pescados más abundantes.', en: 'Offer traditional recipes using other, more plentiful fish.' }, then: { es: 'Las recetas de arenque se hacen populares. Un chef famoso las copia.', en: 'The herring recipes become popular. A famous chef copies them.' } },
              { say: { es: 'Denunciar a los vendedores que no dicen de dónde viene su pescado.', en: 'Report the sellers who don’t say where their fish comes from.' }, then: { es: 'Hay inspecciones en todo el mercado. Algunos vecinos de puesto dejan de hablarle.', en: 'There are inspections across the whole market. Some neighbouring stallholders stop speaking to her.' } },
            ],
          },
          twist: { es: 'Un pescador viejo, amigo de su abuelo, le ofrece a Ingrid bacalao del Báltico pescado ilegalmente. Necesita el dinero para pagar su casa. ¿Qué debería responder ella?', en: 'An old fisherman, a friend of her grandfather’s, offers Ingrid Baltic cod caught illegally. He needs the money to pay for his house. How should she answer?' },
          questions: [
            { q: { es: '¿Has dejado de comprar algo por motivos ecológicos?', en: 'Have you stopped buying something for environmental reasons?' }, help: { es: 'Sí, ya no compro… porque… / No, todavía no.', en: 'Yes, I no longer buy… because… / No, not yet.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it difficult?' }, { es: '¿Lo echas de menos?', en: 'Do you miss it?' }] },
            { q: { es: '¿Sabes de dónde viene el pescado que comes?', en: 'Do you know where the fish you eat comes from?' }, help: { es: 'Sí, normalmente de… / No, nunca lo miro.', en: 'Yes, usually from… / No, I never check.' }, follow: [{ es: '¿Te importa?', en: 'Does it matter to you?' }, { es: '¿Las etiquetas son claras?', en: 'Are labels clear?' }] },
            { q: { es: '¿Las prohibiciones funcionan para proteger la naturaleza?', en: 'Do bans work to protect nature?' }, help: { es: 'Funcionan si… / No, porque la gente…', en: 'They work if… / No, because people…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué alternativa hay?', en: 'What alternative is there?' }] },
            { q: { es: '¿Ayudarías a un amigo aunque fuera ilegal?', en: 'Would you help a friend even if it were illegal?' }, help: { es: 'Depende de… / No, porque…', en: 'It depends on… / No, because…' }, follow: [{ es: '¿Y si fuera un familiar?', en: 'And if it were a relative?' }, { es: '¿Dónde está tu límite?', en: 'Where is your limit?' }] },
          ],
          words: [{ es: 'el bacalao', en: 'cod' }, { es: 'la pesca excesiva', en: 'overfishing' }, { es: 'la prohibición', en: 'the ban' }, { es: 'abundante', en: 'plentiful' }, { es: 'ilegalmente', en: 'illegally' }],
        },
      },
    },
    // ------------------------------------------------------------ the City Hall
    {
      id: 'nobel',
      name: { es: 'El Ayuntamiento y la cena del Nobel', en: 'City Hall and the Nobel dinner' },
      who: { name: 'Karin', role: { es: 'organizadora de eventos', en: 'event organiser' } },
      levels: {
        A0: {
          scene: { es: 'Es un edificio grande de ladrillo rojo, al lado del agua. Tiene una torre alta. Dentro hay un salón dorado. Karin trabaja aquí.', en: 'It is a big red-brick building next to the water. It has a tall tower. Inside there is a golden hall. Karin works here.' },
          opener: { es: '¡Hola! Soy Karin. Aquí es la cena de los premios Nobel. ¡Pasa!', en: 'Hello! I am Karin. The Nobel Prize dinner is held here. Come in!' },
          decide: {
            ask: { es: 'Karin te enseña tres salas. ¿Cuál quieres ver?', en: 'Karin shows you three rooms. Which one do you want to see?' },
            options: [
              { say: { es: 'El salón dorado.', en: 'The golden hall.' }, then: { es: 'Karin dice: «Tiene dieciocho millones de piezas de oro y cristal».', en: 'Karin says: “It has eighteen million pieces of gold and glass.”' } },
              { say: { es: 'El salón azul, el de la cena.', en: 'The blue hall, where the dinner is.' }, then: { es: 'Karin dice: «¡Es rojo! Pero se llama azul. ¡Ja, ja!»', en: 'Karin says: “It is red! But it’s called blue. Ha ha!”' } },
              { say: { es: 'La torre.', en: 'The tower.' }, then: { es: 'Karin dice: «Tiene trescientos sesenta y cinco escalones».', en: 'Karin says: “It has three hundred and sixty-five steps.”' } },
            ],
          },
          twist: { es: 'Karin dice: «En la cena del Nobel hay mil trescientas personas». ¿Qué dices?', en: 'Karin says: “At the Nobel dinner there are one thousand three hundred people.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las fiestas grandes?', en: 'Do you like big parties?' }, help: { es: 'Sí, mucho. / No, prefiero fiestas pequeñas.', en: 'Yes, a lot. / No, I prefer small parties.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Cuál es la última?', en: 'Which was the last one?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu casa?', en: 'And your home?' }] },
            { q: { es: '¿Subes escaleras o usas el ascensor?', en: 'Do you take the stairs or the lift?' }, help: { es: 'Subo escaleras. / Uso el ascensor.', en: 'I take the stairs. / I use the lift.' }, follow: [{ es: '¿En tu casa?', en: 'At home?' }, { es: '¿En tu trabajo?', en: 'At work?' }] },
            { q: { es: '¿Conoces a una persona famosa?', en: 'Do you know a famous person?' }, help: { es: 'Sí, conozco a… / No, a nadie.', en: 'Yes, I know… / No, nobody.' }, follow: [{ es: '¿Quién?', en: 'Who?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'el ladrillo', en: 'brick' }, { es: 'dorado', en: 'golden' }, { es: 'el premio', en: 'the prize' }, { es: 'la torre', en: 'the tower' }, { es: 'el escalón', en: 'the step' }],
        },
        A1: {
          scene: { es: 'Faltan tres días para la cena del Nobel. Karin coordina a doscientos camareros, cuarenta cocineros y un montón de flores que llegan desde Italia. Todo tiene que ser perfecto: cada plato debe llegar a la mesa a la vez.', en: 'There are three days to go until the Nobel dinner. Karin is coordinating two hundred waiters, forty cooks and a huge amount of flowers arriving from Italy. Everything has to be perfect: every plate must reach the table at the same time.' },
          opener: { es: 'Los camareros practican durante semanas. Bajan las escaleras con las bandejas al mismo tiempo, como un baile. El menú es secreto hasta el último momento. ¿Tú has organizado alguna vez una fiesta grande?', en: 'The waiters practise for weeks. They come down the stairs with the trays at the same time, like a dance. The menu is secret until the last moment. Have you ever organised a big party?' },
          decide: {
            ask: { es: 'Karin te deja elegir una cosa de la cena. ¿Qué eliges?', en: 'Karin lets you choose one thing for the dinner. What do you choose?' },
            options: [
              { say: { es: 'El postre.', en: 'The dessert.' }, then: { es: 'Eliges un helado con fuego. Los cocineros te miran muy preocupados.', en: 'You choose an ice cream on fire. The cooks look at you very worried.' } },
              { say: { es: 'La música.', en: 'The music.' }, then: { es: 'Eliges música latina. Karin dice: «Interesante… quizá después de la cena».', en: 'You choose Latin music. Karin says: “Interesting… maybe after dinner.”' } },
              { say: { es: 'Las flores de las mesas.', en: 'The table flowers.' }, then: { es: 'Eliges flores amarillas y azules, los colores de Suecia. Todos aplauden.', en: 'You choose yellow and blue flowers, Sweden’s colours. Everyone applauds.' } },
            ],
          },
          twist: { es: 'Un camarero se cae en el ensayo con una bandeja de cincuenta copas. Está muy avergonzado. ¿Qué le dices?', en: 'A waiter falls during the rehearsal with a tray of fifty glasses. He is very embarrassed. What do you tell him?' },
          questions: [
            { q: { es: '¿Has organizado una fiesta grande?', en: 'Have you organised a big party?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, for… / No, never.' }, follow: [{ es: '¿Cuántas personas había?', en: 'How many people were there?' }, { es: '¿Qué fue lo más difícil?', en: 'What was the hardest part?' }] },
            { q: { es: '¿Qué comida eliges para una cena especial?', en: 'What food do you choose for a special dinner?' }, help: { es: 'Elijo… porque…', en: 'I choose… because…' }, follow: [{ es: '¿Y de postre?', en: 'And for dessert?' }, { es: '¿Y para beber?', en: 'And to drink?' }] },
            { q: { es: '¿Te pones nervioso antes de un evento importante?', en: 'Do you get nervous before an important event?' }, help: { es: 'Sí, mucho. / No, estoy tranquilo.', en: 'Yes, a lot. / No, I’m calm.' }, follow: [{ es: '¿Qué haces para relajarte?', en: 'What do you do to relax?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Qué ropa llevas en una fiesta elegante?', en: 'What do you wear to a formal party?' }, help: { es: 'Llevo un vestido / un traje…', en: 'I wear a dress / a suit…' }, follow: [{ es: '¿Te gusta vestirte elegante?', en: 'Do you like dressing up?' }, { es: '¿Cuándo es la última vez?', en: 'When was the last time?' }] },
          ],
          words: [{ es: 'coordinar', en: 'to coordinate' }, { es: 'la bandeja', en: 'the tray' }, { es: 'a la vez', en: 'at the same time' }, { es: 'el ensayo', en: 'the rehearsal' }, { es: 'avergonzado', en: 'embarrassed' }],
        },
        A2: {
          scene: { es: 'Es la noche de la cena del Nobel. Hay reyes, científicos, escritores y cámaras de televisión de todo el mundo. Diez minutos antes de empezar, Karin descubre que la ganadora del premio de Literatura no ha llegado. Nadie sabe dónde está.', en: 'It is the night of the Nobel dinner. There are royals, scientists, writers and TV cameras from all over the world. Ten minutes before it starts, Karin discovers that the winner of the Literature prize hasn’t arrived. Nobody knows where she is.' },
          opener: { es: 'Llevo doce años organizando esta cena y nunca ha pasado algo así. El rey está sentado, las cámaras están encendidas y hay una silla vacía en la mesa principal. Su teléfono no contesta. ¿Tú cómo reaccionas cuando algo sale mal en el peor momento?', en: 'I’ve been organising this dinner for twelve years and nothing like this has ever happened. The king is seated, the cameras are on and there is an empty chair at the main table. Her phone doesn’t answer. How do you react when something goes wrong at the worst moment?' },
          decide: {
            ask: { es: 'Karin tiene que decidir en un minuto. ¿Qué le aconsejas?', en: 'Karin has to decide in one minute. What do you advise her?' },
            options: [
              { say: { es: 'Empezar la cena a la hora y no decir nada.', en: 'Start the dinner on time and say nothing.' }, then: { es: 'A los veinte minutos llega la escritora: se ha perdido por el centro. Entra sonriendo y nadie dice nada.', en: 'Twenty minutes later the writer arrives: she got lost in the centre. She walks in smiling and nobody says a thing.' } },
              { say: { es: 'Retrasar la cena quince minutos.', en: 'Delay the dinner by fifteen minutes.' }, then: { es: 'Los periodistas lo notan. Al día siguiente, todos los periódicos hablan del «misterio del Nobel».', en: 'The journalists notice. The next day, every newspaper talks about the “Nobel mystery”.' } },
              { say: { es: 'Mandar a alguien a buscarla al hotel.', en: 'Send someone to look for her at the hotel.' }, then: { es: 'La encuentran dormida. Se había echado una siesta «de cinco minutos».', en: 'They find her asleep. She had lain down for a “five-minute” nap.' } },
            ],
          },
          twist: { es: 'Cuando por fin llega, la escritora dice que no quiere dar su discurso: le da miedo hablar en público. ¿Qué le dice Karin?', en: 'When she finally arrives, the writer says she doesn’t want to give her speech: she’s scared of public speaking. What does Karin tell her?' },
          questions: [
            { q: { es: '¿Has llegado tarde a algo importante?', en: 'Have you been late for something important?' }, help: { es: 'Sí, una vez llegué tarde a… / No, nunca.', en: 'Yes, once I was late for… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Qué dijiste?', en: 'What did you say?' }] },
            { q: { es: '¿Te da miedo hablar en público?', en: 'Are you scared of public speaking?' }, help: { es: 'Sí, mucho. / Un poco, pero…', en: 'Yes, very. / A little, but…' }, follow: [{ es: '¿Cuándo has tenido que hacerlo?', en: 'When have you had to do it?' }, { es: '¿Qué consejo darías?', en: 'What advice would you give?' }] },
            { q: { es: '¿Qué premio te gustaría ganar?', en: 'What prize would you like to win?' }, help: { es: 'Me gustaría ganar… porque…', en: 'I would like to win… because…' }, follow: [{ es: '¿Qué dirías en tu discurso?', en: 'What would you say in your speech?' }, { es: '¿A quién darías las gracias?', en: 'Who would you thank?' }] },
            { q: { es: '¿Eres bueno resolviendo problemas de último momento?', en: 'Are you good at solving last-minute problems?' }, help: { es: 'Sí, me quedo tranquilo. / No, me pongo muy nervioso.', en: 'Yes, I stay calm. / No, I get very nervous.' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Cómo lo resolviste?', en: 'How did you solve it?' }] },
          ],
          words: [{ es: 'la ganadora', en: 'the winner' }, { es: 'retrasar', en: 'to delay' }, { es: 'la silla vacía', en: 'the empty chair' }, { es: 'el discurso', en: 'the speech' }, { es: 'echarse una siesta', en: 'to take a nap' }],
        },
        B1: {
          scene: { es: 'Un grupo de activistas critica la cena del Nobel: dice que gastar millones en una cena de lujo no tiene sentido cuando muchos científicos jóvenes no tienen dinero para investigar. Una televisión invita a Karin a un debate con una de esas activistas, que además es investigadora.', en: 'A group of activists criticises the Nobel dinner: they say spending millions on a luxury dinner makes no sense when many young scientists have no money for research. A TV channel invites Karin to a debate with one of those activists, who is also a researcher.' },
          opener: { es: 'Entiendo la crítica. Pero esta cena es la única noche del año en que el mundo entero mira a la ciencia y a la literatura como si fueran estrellas de cine. Sin la fiesta, ¿quién hablaría de una química o de un poeta? A veces el brillo sirve para algo. ¿Tú qué piensas?', en: 'I understand the criticism. But this dinner is the only night of the year when the whole world looks at science and literature as if they were film stars. Without the party, who would talk about a chemist or a poet? Sometimes glamour serves a purpose. What do you think?' },
          decide: {
            ask: { es: 'En el debate, Karin puede hacer una propuesta. ¿Cuál debería hacer?', en: 'In the debate, Karin can make one proposal. Which should she make?' },
            options: [
              { say: { es: 'Reducir la cena y dar el dinero ahorrado a becas.', en: 'Scale down the dinner and give the money saved to grants.' }, then: { es: 'La activista la apoya. La Fundación Nobel dice que lo estudiará.', en: 'The activist supports her. The Nobel Foundation says it will consider it.' } },
              { say: { es: 'Invitar a la cena a cien científicos jóvenes cada año.', en: 'Invite a hundred young scientists to the dinner every year.' }, then: { es: 'La idea gusta mucho. Las redes se llenan de jóvenes que sueñan con ir.', en: 'People love the idea. Social media fills with young people dreaming of going.' } },
              { say: { es: 'Defender la cena tal como es.', en: 'Defend the dinner exactly as it is.' }, then: { es: 'Karin habla muy bien, pero el público de la televisión vota por la activista.', en: 'Karin speaks very well, but the TV audience votes for the activist.' } },
            ],
          },
          twist: { es: 'Al final del debate, la activista confiesa que su sueño secreto es ir algún día a esa cena. ¿Cómo debería responder Karin?', en: 'At the end of the debate, the activist confesses that her secret dream is to go to that dinner one day. How should Karin respond?' },
          questions: [
            { q: { es: '¿Los premios importantes ayudan a la ciencia y a la cultura?', en: 'Do major prizes help science and culture?' }, help: { es: 'Sí, porque dan visibilidad… / No mucho, porque…', en: 'Yes, because they give visibility… / Not much, because…' }, follow: [{ es: '¿Qué premio conoces de tu país?', en: 'Which prize from your country do you know?' }, { es: '¿Es justo?', en: 'Is it fair?' }] },
            { q: { es: '¿Está bien gastar mucho dinero en una celebración?', en: 'Is it right to spend a lot of money on a celebration?' }, help: { es: 'Depende de… / Para mí, sí / no, porque…', en: 'It depends on… / For me, yes / no, because…' }, follow: [{ es: '¿Lo has hecho?', en: 'Have you done it?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Debatirías en la televisión con alguien que te critica?', en: 'Would you debate on TV with someone who criticises you?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Cómo te prepararías?', en: 'How would you prepare?' }, { es: '¿Qué te daría miedo?', en: 'What would scare you?' }] },
            { q: { es: '¿Qué científico o escritor de tu país merecería un Nobel?', en: 'Which scientist or writer from your country would deserve a Nobel?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Qué ha hecho?', en: 'What have they done?' }, { es: '¿Es conocido fuera de tu país?', en: 'Are they known outside your country?' }] },
          ],
          words: [{ es: 'investigar', en: 'to do research' }, { es: 'la beca', en: 'the grant / scholarship' }, { es: 'el brillo', en: 'glamour, shine' }, { es: 'ahorrar', en: 'to save (money)' }, { es: 'confesar', en: 'to confess' }],
        },
      },
    },
  ],
};
