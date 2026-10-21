// Quintana Roo · the Caribbean coast: hotels, beaches, cenotes, reefs and Tulum.
// Five places, four levels each (A0, A1, A2, B1). Every level is written on its
// own: same place and people, different situations, decisions and questions.
export default {
  id: 'quintana-roo',
  spots: [
    // ------------------------------------------------------------ the hotel reception
    {
      id: 'hotel',
      name: { es: 'La recepción del hotel', en: 'The hotel reception' },
      who: { name: 'Andrea', role: { es: 'recepcionista', en: 'receptionist' } },
      levels: {
        A0: {
          scene: { es: 'Es un hotel grande cerca del mar. Hay palmeras y una piscina. Andrea trabaja en la recepción.', en: 'It is a big hotel near the sea. There are palm trees and a pool. Andrea works at reception.' },
          opener: { es: '¡Bienvenido! Soy Andrea. ¿Tu nombre, por favor?', en: 'Welcome! I am Andrea. Your name, please?' },
          decide: {
            ask: { es: 'Andrea tiene tres habitaciones. ¿Cuál quieres?', en: 'Andrea has three rooms. Which one do you want?' },
            options: [
              { say: { es: 'Con vista al mar.', en: 'With a sea view.' }, then: { es: 'Andrea dice: «Muy bien. Es la habitación 305. ¡Es muy bonita!»', en: 'Andrea says: “Very good. It is room 305. It is very nice!”' } },
              { say: { es: 'Cerca de la piscina.', en: 'Near the pool.' }, then: { es: 'Andrea dice: «Es la 102. Hay un poco de ruido».', en: 'Andrea says: “It is 102. There is a little noise.”' } },
              { say: { es: 'La más barata.', en: 'The cheapest one.' }, then: { es: 'Andrea dice: «Es pequeña, pero tiene aire acondicionado».', en: 'Andrea says: “It is small, but it has air conditioning.”' } },
            ],
          },
          twist: { es: 'Andrea te da la llave. ¡Pero es la llave de otra habitación! ¿Qué dices?', en: 'Andrea gives you the key. But it is the key to another room! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la playa o la montaña?', en: 'Do you like the beach or the mountains?' }, help: { es: 'Me gusta la playa. / Me gusta la montaña.', en: 'I like the beach. / I like the mountains.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿Cómo es tu habitación?', en: 'What is your room like?' }, help: { es: 'Es grande / pequeña. Tiene…', en: 'It is big / small. It has…' }, follow: [{ es: '¿Tiene ventana?', en: 'Does it have a window?' }, { es: '¿De qué color es?', en: 'What colour is it?' }] },
            { q: { es: '¿Nadas en la piscina?', en: 'Do you swim in the pool?' }, help: { es: 'Sí, nado. / No, no nado.', en: 'Yes, I swim. / No, I don’t swim.' }, follow: [{ es: '¿Nadas bien?', en: 'Do you swim well?' }, { es: '¿Piscina o mar?', en: 'Pool or sea?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like hot weather?' }, help: { es: 'Sí, me gusta. / No, prefiero el frío.', en: 'Yes, I like it. / No, I prefer the cold.' }, follow: [{ es: '¿Hace calor en tu ciudad?', en: 'Is it hot in your city?' }, { es: '¿En qué mes?', en: 'In what month?' }] },
          ],
          words: [{ es: 'el hotel', en: 'the hotel' }, { es: 'la habitación', en: 'the room' }, { es: 'la llave', en: 'the key' }, { es: 'la piscina', en: 'the pool' }, { es: 'barato', en: 'cheap' }],
        },
        A1: {
          scene: { es: 'Llegas a un hotel en Playa del Carmen a las once de la noche, después de un vuelo largo. En la recepción hay una familia que discute y Andrea intenta ayudar a todos.', en: 'You arrive at a hotel in Playa del Carmen at eleven at night, after a long flight. At reception a family is arguing and Andrea is trying to help everyone.' },
          opener: { es: 'Buenas noches, disculpe la espera. ¿Tiene una reserva? Necesito su pasaporte, por favor.', en: 'Good evening, sorry for the wait. Do you have a reservation? I need your passport, please.' },
          decide: {
            ask: { es: 'Andrea no encuentra tu reserva en el sistema. ¿Qué haces?', en: 'Andrea can’t find your reservation in the system. What do you do?' },
            options: [
              { say: { es: 'Le muestro el correo de la reserva en el teléfono.', en: 'I show her the booking email on my phone.' }, then: { es: 'Andrea lo mira: la reserva es para mañana. Te ofrece una habitación pequeña por esta noche.', en: 'Andrea looks: the booking is for tomorrow. She offers you a small room for tonight.' } },
              { say: { es: 'Pido hablar con el gerente.', en: 'I ask to speak to the manager.' }, then: { es: 'El gerente ya se fue a casa. Andrea suspira y busca otra solución.', en: 'The manager has already gone home. Andrea sighs and looks for another solution.' } },
              { say: { es: 'Espero con calma y pido un vaso de agua.', en: 'I wait calmly and ask for a glass of water.' }, then: { es: 'Andrea te trae agua de coco. Diez minutos después, encuentra la reserva con otro apellido.', en: 'Andrea brings you coconut water. Ten minutes later, she finds the booking under another surname.' } },
            ],
          },
          twist: { es: 'La familia que discutía es de tu ciudad. El padre te reconoce: es tu vecino del tercer piso.', en: 'The arguing family is from your city. The father recognises you: he’s your neighbour from the third floor.' },
          questions: [
            { q: { es: '¿Qué llevas siempre en tu maleta?', en: 'What do you always take in your suitcase?' }, help: { es: 'Siempre llevo…', en: 'I always take…' }, follow: [{ es: '¿Llevas mucha ropa?', en: 'Do you take a lot of clothes?' }, { es: '¿Qué olvidas a veces?', en: 'What do you sometimes forget?' }] },
            { q: { es: '¿Prefieres hoteles grandes o pequeños?', en: 'Do you prefer big or small hotels?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué es importante en un hotel?', en: 'What is important in a hotel?' }, { es: '¿Desayunas en el hotel?', en: 'Do you have breakfast at the hotel?' }] },
            { q: { es: '¿Qué haces cuando un vuelo llega tarde?', en: 'What do you do when a flight arrives late?' }, help: { es: 'Me enojo. / Leo. / Duermo.', en: 'I get angry. / I read. / I sleep.' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it happened to you?' }, { es: '¿Cuántas horas esperaste?', en: 'How many hours did you wait?' }] },
            { q: { es: '¿Conoces a tus vecinos?', en: 'Do you know your neighbours?' }, help: { es: 'Sí, conozco a… / No, no conozco a nadie.', en: 'Yes, I know… / No, I don’t know anyone.' }, follow: [{ es: '¿Hablas con ellos?', en: 'Do you talk to them?' }, { es: '¿Son simpáticos?', en: 'Are they nice?' }] },
          ],
          words: [{ es: 'la reserva', en: 'the reservation' }, { es: 'el vuelo', en: 'the flight' }, { es: 'la espera', en: 'the wait' }, { es: 'el gerente', en: 'the manager' }, { es: 'el apellido', en: 'the surname' }],
        },
        A2: {
          scene: { es: 'Andrea es de Mérida y trabaja en el hotel desde hace seis años. Habla tres idiomas, pero gana poco. Esta noche un huésped le ofrece trabajo en su empresa en Canadá.', en: 'Andrea is from Mérida and has worked at the hotel for six years. She speaks three languages, but earns little. Tonight a guest offers her a job at his company in Canada.' },
          opener: { es: 'Aquí trabajo doce horas, seis días a la semana. Los turistas me dicen que vivo en el paraíso. Yo casi nunca voy a la playa. ¿Tú dejarías tu país por un trabajo mejor?', en: 'Here I work twelve hours, six days a week. Tourists tell me I live in paradise. I hardly ever go to the beach. Would you leave your country for a better job?' },
          decide: {
            ask: { es: 'Andrea te cuenta la oferta. ¿Qué le aconsejas?', en: 'Andrea tells you about the offer. What do you advise?' },
            options: [
              { say: { es: 'Que pida más información antes de decidir.', en: 'Ask for more information before deciding.' }, then: { es: 'Descubre que el trabajo es de recepcionista también, pero en un hotel de nieve. Se ríe.', en: 'She discovers the job is also as a receptionist, but in a ski hotel. She laughs.' } },
              { say: { es: 'Que acepte: es una gran oportunidad.', en: 'Accept: it’s a great opportunity.' }, then: { es: 'Andrea piensa en su mamá, que está sola en Mérida. No contesta todavía.', en: 'Andrea thinks of her mum, who is alone in Mérida. She doesn’t answer yet.' } },
              { say: { es: 'Que use la oferta para pedir más sueldo aquí.', en: 'Use the offer to ask for a higher salary here.' }, then: { es: 'El gerente le sube el sueldo un diez por ciento. No es mucho, pero es algo.', en: 'The manager raises her salary by ten percent. It isn’t much, but it’s something.' } },
            ],
          },
          twist: { es: 'El huésped que le ofreció trabajo se va del hotel sin pagar el bar.', en: 'The guest who offered her the job leaves the hotel without paying the bar bill.' },
          questions: [
            { q: { es: '¿Trabajaste alguna vez en un lugar turístico?', en: 'Have you ever worked in a tourist place?' }, help: { es: 'Sí, trabajé en… / No, pero…', en: 'Yes, I worked at… / No, but…' }, follow: [{ es: '¿Cómo eran los clientes?', en: 'What were the customers like?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué lugar bonito de tu ciudad casi nunca visitas?', en: 'What beautiful place in your city do you hardly ever visit?' }, help: { es: 'Casi nunca voy a… porque…', en: 'I hardly ever go to… because…' }, follow: [{ es: '¿Los turistas van mucho?', en: 'Do tourists go a lot?' }, { es: '¿Cuándo fuiste la última vez?', en: 'When did you last go?' }] },
            { q: { es: '¿Dejarías tu país por un trabajo?', en: 'Would you leave your country for a job?' }, help: { es: 'Sí, si… / No, porque mi familia…', en: 'Yes, if… / No, because my family…' }, follow: [{ es: '¿A qué país irías?', en: 'What country would you go to?' }, { es: '¿Qué extrañarías?', en: 'What would you miss?' }] },
            { q: { es: '¿Qué harías si un cliente se va sin pagar?', en: 'What would you do if a customer left without paying?' }, help: { es: 'Llamaría a… / Lo buscaría…', en: 'I would call… / I would look for him…' }, follow: [{ es: '¿Es culpa de Andrea?', en: 'Is it Andrea’s fault?' }, { es: '¿Te pasó algo así?', en: 'Has something like that happened to you?' }] },
          ],
          words: [{ es: 'el huésped', en: 'the guest' }, { es: 'el paraíso', en: 'paradise' }, { es: 'la oferta', en: 'the offer' }, { es: 'subir el sueldo', en: 'to raise the salary' }, { es: 'irse sin pagar', en: 'to leave without paying' }],
        },
        B1: {
          scene: { es: 'Una cadena hotelera quiere construir un resort de mil habitaciones en una playa donde desovan las tortugas. El hotel de Andrea pertenece a la misma cadena y le piden a todo el personal que firme una carta de apoyo al proyecto.', en: 'A hotel chain wants to build a thousand-room resort on a beach where turtles lay their eggs. Andrea’s hotel belongs to the same chain and all staff are asked to sign a letter supporting the project.' },
          opener: { es: 'El resort daría trabajo a dos mil personas, quizá a mi hermano. Pero yo crecí viendo nacer tortugas en esa playa. Si no firmo, me dicen que «no tengo espíritu de equipo». ¿Qué pesa más?', en: 'The resort would give work to two thousand people, maybe my brother. But I grew up watching turtles hatch on that beach. If I don’t sign, they say I “lack team spirit”. What weighs more?' },
          decide: {
            ask: { es: 'Andrea tiene que entregar la carta mañana. ¿Qué le aconsejas?', en: 'Andrea has to hand in the letter tomorrow. What do you advise?' },
            options: [
              { say: { es: 'No firmar y explicar sus razones por escrito.', en: 'Not sign and explain her reasons in writing.' }, then: { es: 'Recursos Humanos guarda la carta. Dos compañeros le preguntan en secreto cómo la escribió.', en: 'HR files the letter. Two colleagues secretly ask her how she wrote it.' } },
              { say: { es: 'Firmar para proteger su trabajo y apoyar a los ecologistas en privado.', en: 'Sign to protect her job and support the environmentalists privately.' }, then: { es: 'Andrea firma, pero esa noche dona parte de su sueldo a un grupo que protege tortugas.', en: 'Andrea signs, but that night donates part of her salary to a turtle protection group.' } },
              { say: { es: 'Proponer a la empresa construir lejos de la playa de las tortugas.', en: 'Propose the company builds away from the turtle beach.' }, then: { es: 'Su jefe dice que no es su trabajo dar ideas. Pero envía la propuesta a la dirección.', en: 'Her boss says it isn’t her job to give ideas. But he sends the proposal to management.' } },
            ],
          },
          twist: { es: 'Un periodista llama a Andrea: alguien filtró que la empresa ya había empezado a limpiar la playa sin permiso.', en: 'A journalist calls Andrea: someone has leaked that the company had already started clearing the beach without permission.' },
          questions: [
            { q: { es: '¿El empleo de muchas personas justifica dañar la naturaleza?', en: 'Does employment for many people justify harming nature?' }, help: { es: 'Depende de… / No creo que lo justifique, porque…', en: 'It depends on… / I don’t think it justifies it, because…' }, follow: [{ es: '¿Hay alternativas?', en: 'Are there alternatives?' }, { es: '¿Qué pasa en tu país?', en: 'What happens in your country?' }] },
            { q: { es: '¿Firmarías algo en lo que no crees para no perder tu trabajo?', en: 'Would you sign something you don’t believe in so as not to lose your job?' }, help: { es: 'Probablemente sí, si… / Nunca lo haría porque…', en: 'Probably yes, if… / I would never do it because…' }, follow: [{ es: '¿Te pasó algo parecido?', en: 'Has anything similar happened to you?' }, { es: '¿Dónde está tu límite?', en: 'Where is your limit?' }] },
            { q: { es: '¿Qué tipo de turismo te parece responsable?', en: 'What kind of tourism seems responsible to you?' }, help: { es: 'Me parece responsable cuando… / Por ejemplo…', en: 'It seems responsible to me when… / For example…' }, follow: [{ es: '¿Tú viajas así?', en: 'Do you travel like that?' }, { es: '¿Cuesta más?', en: 'Does it cost more?' }] },
            { q: { es: '¿Debería Andrea hablar con el periodista?', en: 'Should Andrea talk to the journalist?' }, help: { es: 'Yo creo que debería… aunque… / Sería arriesgado porque…', en: 'I think she should… even though… / It would be risky because…' }, follow: [{ es: '¿Qué podría perder?', en: 'What could she lose?' }, { es: '¿Lo harías de forma anónima?', en: 'Would you do it anonymously?' }] },
          ],
          words: [{ es: 'desovar', en: 'to lay eggs' }, { es: 'el personal', en: 'the staff' }, { es: 'el apoyo', en: 'support' }, { es: 'filtrar', en: 'to leak' }, { es: 'arriesgado', en: 'risky' }],
        },
      },
    },
    // ------------------------------------------------------------ the beach
    {
      id: 'playa',
      name: { es: 'La playa', en: 'The beach' },
      who: { name: 'Kevin', role: { es: 'socorrista', en: 'lifeguard' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa blanca. El mar es azul y verde. Kevin es socorrista. Tiene una silla alta.', en: 'It is a white beach. The sea is blue and green. Kevin is a lifeguard. He has a tall chair.' },
          opener: { es: '¡Hola! Soy Kevin. Hoy hay olas. ¡Cuidado!', en: 'Hi! I am Kevin. There are waves today. Careful!' },
          decide: {
            ask: { es: 'Hace mucho sol. ¿Qué haces?', en: 'It is very sunny. What do you do?' },
            options: [
              { say: { es: 'Nado en el mar.', en: 'I swim in the sea.' }, then: { es: 'Kevin dice: «Muy bien, pero cerca de la playa».', en: 'Kevin says: “Very good, but close to the beach.”' } },
              { say: { es: 'Me pongo crema.', en: 'I put on sun cream.' }, then: { es: 'Kevin dice: «¡Perfecto! El sol aquí es muy fuerte».', en: 'Kevin says: “Perfect! The sun here is very strong.”' } },
              { say: { es: 'Duermo en la arena.', en: 'I sleep on the sand.' }, then: { es: 'Kevin dice: «¡Con sombrero, por favor!»', en: 'Kevin says: “With a hat, please!”' } },
            ],
          },
          twist: { es: 'Una ola grande toma tu toalla. ¡La toalla está en el mar! ¿Qué haces?', en: 'A big wave takes your towel. The towel is in the sea! What do you do?' },
          questions: [
            { q: { es: '¿Te gusta el mar?', en: 'Do you like the sea?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Nadas en el mar?', en: 'Do you swim in the sea?' }, { es: '¿El agua está fría en tu país?', en: 'Is the water cold in your country?' }] },
            { q: { es: '¿Qué llevas a la playa?', en: 'What do you take to the beach?' }, help: { es: 'Llevo una toalla, agua y…', en: 'I take a towel, water and…' }, follow: [{ es: '¿Llevas comida?', en: 'Do you take food?' }, { es: '¿Llevas un libro?', en: 'Do you take a book?' }] },
            { q: { es: '¿Te gusta el sol?', en: 'Do you like the sun?' }, help: { es: 'Sí, me gusta. / No, prefiero la sombra.', en: 'Yes, I like it. / No, I prefer the shade.' }, follow: [{ es: '¿Usas crema?', en: 'Do you use sun cream?' }, { es: '¿Usas gafas de sol?', en: 'Do you wear sunglasses?' }] },
            { q: { es: '¿Con quién vas a la playa?', en: 'Who do you go to the beach with?' }, help: { es: 'Voy con mi familia / mis amigos / solo.', en: 'I go with my family / my friends / alone.' }, follow: [{ es: '¿Qué hacen allí?', en: 'What do you do there?' }, { es: '¿Juegan?', en: 'Do you play games?' }] },
          ],
          words: [{ es: 'la playa', en: 'the beach' }, { es: 'la ola', en: 'the wave' }, { es: 'la arena', en: 'the sand' }, { es: 'la toalla', en: 'the towel' }, { es: 'la crema', en: 'sun cream' }],
        },
        A1: {
          scene: { es: 'Es sábado en Tulum. La playa está llena de turistas. Hay una bandera roja: el mar está peligroso hoy. Kevin mira el agua con sus binoculares.', en: 'It is Saturday in Tulum. The beach is full of tourists. There is a red flag: the sea is dangerous today. Kevin watches the water with his binoculars.' },
          opener: { es: 'La bandera roja significa que no se puede nadar. Pero mucha gente no lee las señales. Por eso estoy aquí, con mi silbato.', en: 'The red flag means you can’t swim. But many people don’t read the signs. That’s why I’m here, with my whistle.' },
          decide: {
            ask: { es: 'Unos chicos quieren entrar al mar. Kevin está ocupado. ¿Qué haces?', en: 'Some young people want to go into the sea. Kevin is busy. What do you do?' },
            options: [
              { say: { es: 'Les explico qué significa la bandera roja.', en: 'I explain what the red flag means.' }, then: { es: 'Los chicos son de Alemania y no entendían. Te dan las gracias y juegan al fútbol en la arena.', en: 'The young people are from Germany and didn’t understand. They thank you and play football on the sand.' } },
              { say: { es: 'Llamo a Kevin.', en: 'I call Kevin.' }, then: { es: 'Kevin toca el silbato tres veces. Los chicos salen del agua corriendo.', en: 'Kevin blows the whistle three times. The young people come out of the water running.' } },
              { say: { es: 'No hago nada. No es mi problema.', en: 'I do nothing. It’s not my problem.' }, then: { es: 'Un minuto después, uno de los chicos no puede volver. Kevin corre al agua.', en: 'A minute later, one of the young people can’t get back. Kevin runs into the water.' } },
            ],
          },
          twist: { es: 'Llega mucha alga marrón a la playa. Huele mal y los turistas se van. Kevin suspira.', en: 'A lot of brown seaweed arrives on the beach. It smells bad and the tourists leave. Kevin sighs.' },
          questions: [
            { q: { es: '¿Respetas siempre las señales y las reglas?', en: 'Do you always respect signs and rules?' }, help: { es: 'Sí, siempre. / Casi siempre. / No siempre.', en: 'Yes, always. / Almost always. / Not always.' }, follow: [{ es: '¿Qué regla no respetas?', en: 'What rule don’t you respect?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Sabes nadar bien?', en: 'Can you swim well?' }, help: { es: 'Sí, nado bien. / Nado un poco. / No sé nadar.', en: 'Yes, I swim well. / I swim a little. / I can’t swim.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Dónde aprendiste?', en: 'Where did you learn?' }] },
            { q: { es: '¿Qué haces un sábado de verano?', en: 'What do you do on a summer Saturday?' }, help: { es: 'Normalmente voy a… / Me quedo…', en: 'Usually I go to… / I stay…' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Y en invierno?', en: 'And in winter?' }] },
            { q: { es: '¿Qué trabajo es muy importante pero poco conocido?', en: 'What job is very important but not well known?' }, help: { es: 'Creo que el trabajo de… es muy importante.', en: 'I think the job of… is very important.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Ganan bien?', en: 'Do they earn well?' }] },
          ],
          words: [{ es: 'la bandera', en: 'the flag' }, { es: 'peligroso', en: 'dangerous' }, { es: 'la señal', en: 'the sign' }, { es: 'el silbato', en: 'the whistle' }, { es: 'el alga', en: 'seaweed' }],
        },
        A2: {
          scene: { es: 'Kevin es socorrista desde hace diez años. Cuando empezó, la playa era casi salvaje. Ahora hay clubes de playa con música alta y camastros que ocupan casi toda la arena.', en: 'Kevin has been a lifeguard for ten years. When he started, the beach was almost wild. Now there are beach clubs with loud music and sun loungers that take up almost all the sand.' },
          opener: { es: 'Antes los pescadores dejaban sus lanchas aquí y los niños del pueblo jugaban toda la tarde. Ahora, si no pagas un club, no tienes dónde sentarte. Y eso que la playa en México es pública por ley. ¿Lo sabías?', en: 'Before, the fishermen left their boats here and the village kids played all afternoon. Now, if you don’t pay a club, you have nowhere to sit. Even though beaches in Mexico are public by law. Did you know?' },
          decide: {
            ask: { es: 'Un club de playa no deja pasar a una familia del pueblo. ¿Qué haces?', en: 'A beach club won’t let a local family through. What do you do?' },
            options: [
              { say: { es: 'Le pido a Kevin que explique la ley al guardia.', en: 'I ask Kevin to explain the law to the guard.' }, then: { es: 'El guardia dice que solo sigue órdenes, pero deja pasar a la familia.', en: 'The guard says he’s just following orders, but lets the family through.' } },
              { say: { es: 'Grabo un video y lo subo a redes.', en: 'I record a video and post it online.' }, then: { es: 'El video tiene diez mil visitas en una hora. El club pide disculpas en internet.', en: 'The video gets ten thousand views in an hour. The club apologises online.' } },
              { say: { es: 'Invito a la familia a sentarse conmigo en la arena pública.', en: 'I invite the family to sit with me on the public sand.' }, then: { es: 'Los niños te enseñan a buscar caracoles. Es la mejor tarde del viaje.', en: 'The kids teach you to look for shells. It’s the best afternoon of the trip.' } },
            ],
          },
          twist: { es: 'El dueño del club es el tío de Kevin. Lo llama por teléfono muy enojado.', en: 'The owner of the club is Kevin’s uncle. He phones him, very angry.' },
          questions: [
            { q: { es: '¿Cómo era tu lugar de vacaciones favorito de niño?', en: 'What was your favourite holiday place like as a child?' }, help: { es: 'Íbamos a… Era… Había…', en: 'We used to go to… It was… There was…' }, follow: [{ es: '¿Volviste?', en: 'Have you been back?' }, { es: '¿Cambió mucho?', en: 'Has it changed a lot?' }] },
            { q: { es: '¿Pagaste alguna vez por estar en una playa o un parque?', en: 'Have you ever paid to be on a beach or in a park?' }, help: { es: 'Sí, pagué… en… / No, nunca.', en: 'Yes, I paid… in… / No, never.' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Te pareció justo?', en: 'Did it seem fair?' }] },
            { q: { es: '¿Qué espacios públicos hay en tu ciudad?', en: 'What public spaces are there in your city?' }, help: { es: 'Hay parques, plazas… / No hay muchos.', en: 'There are parks, squares… / There aren’t many.' }, follow: [{ es: '¿Los usas?', en: 'Do you use them?' }, { es: '¿Están limpios?', en: 'Are they clean?' }] },
            { q: { es: '¿Qué le diría Kevin a su tío?', en: 'What would Kevin say to his uncle?' }, help: { es: 'Creo que le diría que… / Debería…', en: 'I think he’d tell him that… / He should…' }, follow: [{ es: '¿Es difícil discutir con la familia?', en: 'Is it hard to argue with family?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'salvaje', en: 'wild' }, { es: 'el camastro', en: 'the sun lounger' }, { es: 'por ley', en: 'by law' }, { es: 'el guardia', en: 'the guard' }, { es: 'el caracol', en: 'the shell, snail' }],
        },
        B1: {
          scene: { es: 'Cada verano llega más sargazo, un alga que cubre las playas del Caribe. Los científicos lo relacionan con el cambio climático y la contaminación. Los hoteles gastan millones en retirarlo y Kevin pasa más tiempo con una pala que en su silla.', en: 'Every summer more sargassum arrives, a seaweed that covers Caribbean beaches. Scientists link it to climate change and pollution. Hotels spend millions removing it and Kevin spends more time with a shovel than in his chair.' },
          opener: { es: 'Los turistas se quejan de que la playa no se parece a la foto. Tienen razón. Pero nadie se pregunta de dónde viene el sargazo. Limpiamos el síntoma, no la causa. ¿Hasta cuándo?', en: 'Tourists complain that the beach doesn’t look like the photo. They’re right. But nobody asks where the sargassum comes from. We clean the symptom, not the cause. Until when?' },
          decide: {
            ask: { es: 'El ayuntamiento pide ideas a los vecinos. ¿Qué propuesta apoyas?', en: 'The town council asks residents for ideas. Which proposal do you support?' },
            options: [
              { say: { es: 'Convertir el sargazo en material de construcción.', en: 'Turn the sargassum into building material.' }, then: { es: 'Un emprendedor local ya fabrica ladrillos con él. Lo invitan a presentar su proyecto.', en: 'A local entrepreneur already makes bricks with it. He is invited to present his project.' } },
              { say: { es: 'Avisar a los turistas antes de que reserven.', en: 'Warn tourists before they book.' }, then: { es: 'Los hoteleros se oponen con fuerza: «Nos van a cancelar todas las reservas».', en: 'Hotel owners strongly oppose it: “All our bookings will be cancelled.”' } },
              { say: { es: 'Cobrar un impuesto a los turistas para investigar el problema.', en: 'Charge tourists a tax to research the problem.' }, then: { es: 'La idea gusta, pero todos preguntan quién controlará ese dinero.', en: 'People like the idea, but everyone asks who will control the money.' } },
            ],
          },
          twist: { es: 'Un influencer filma la playa con sargazo y escribe: «Tulum es una estafa». El video tiene un millón de visitas.', en: 'An influencer films the beach with sargassum and writes: “Tulum is a scam.” The video gets a million views.' },
          questions: [
            { q: { es: '¿Es justo que los turistas paguen un impuesto ambiental?', en: 'Is it fair for tourists to pay an environmental tax?' }, help: { es: 'Me parece justo siempre que… / No, porque…', en: 'It seems fair as long as… / No, because…' }, follow: [{ es: '¿Cuánto pagarías tú?', en: 'How much would you pay?' }, { es: '¿Lo pagaste alguna vez?', en: 'Have you ever paid one?' }] },
            { q: { es: '¿Te sentiste engañado alguna vez porque un lugar no era como en las fotos?', en: 'Have you ever felt cheated because a place wasn’t like the photos?' }, help: { es: 'Sí, una vez reservé… y resultó que…', en: 'Yes, once I booked… and it turned out that…' }, follow: [{ es: '¿Te quejaste?', en: 'Did you complain?' }, { es: '¿Hiciste una reseña?', en: 'Did you write a review?' }] },
            { q: { es: '¿Qué responsabilidad tienen los influencers con los lugares que muestran?', en: 'What responsibility do influencers have toward the places they show?' }, help: { es: 'Creo que deberían… / No es su culpa que…', en: 'I think they should… / It’s not their fault that…' }, follow: [{ es: '¿Sigues a alguno de viajes?', en: 'Do you follow any travel influencers?' }, { es: '¿Confías en ellos?', en: 'Do you trust them?' }] },
            { q: { es: '¿Qué problema de tu región se trata solo en la superficie?', en: 'What problem in your region is only treated on the surface?' }, help: { es: 'Por ejemplo… se arregla… pero nadie…', en: 'For example… is fixed… but nobody…' }, follow: [{ es: '¿Cuál sería la causa?', en: 'What would the cause be?' }, { es: '¿Quién debería actuar?', en: 'Who should act?' }] },
          ],
          words: [{ es: 'el sargazo', en: 'sargassum' }, { es: 'retirar', en: 'to remove' }, { es: 'la pala', en: 'the shovel' }, { es: 'el síntoma', en: 'the symptom' }, { es: 'la estafa', en: 'the scam' }],
        },
      },
    },
    // ------------------------------------------------------------ the cenote
    {
      id: 'cenote',
      name: { es: 'El cenote', en: 'The cenote' },
      who: { name: 'Don Ramiro', role: { es: 'guía maya', en: 'Mayan guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una cueva con agua. El agua es azul y transparente. Don Ramiro es el guía. Hay una escalera.', en: 'It is a cave with water. The water is blue and clear. Don Ramiro is the guide. There is a ladder.' },
          opener: { es: 'Hola. Soy Ramiro. Esto es un cenote. El agua está fría.', en: 'Hello. I am Ramiro. This is a cenote. The water is cold.' },
          decide: {
            ask: { es: '¿Cómo entras al agua?', en: 'How do you get into the water?' },
            options: [
              { say: { es: 'Por la escalera, despacio.', en: 'By the ladder, slowly.' }, then: { es: 'Ramiro dice: «Muy bien. Con calma».', en: 'Ramiro says: “Very good. Calmly.”' } },
              { say: { es: '¡Salto!', en: 'I jump!' }, then: { es: 'Ramiro dice: «¡Uy! Muy valiente. ¿Está fría?»', en: 'Ramiro says: “Oops! Very brave. Is it cold?”' } },
              { say: { es: 'No entro. Miro.', en: 'I don’t go in. I watch.' }, then: { es: 'Ramiro dice: «Está bien. Mira los peces pequeños».', en: 'Ramiro says: “That’s fine. Look at the little fish.”' } },
            ],
          },
          twist: { es: 'Hay murciélagos en la cueva. ¡Vuelan cerca de ti! ¿Qué dices?', en: 'There are bats in the cave. They fly near you! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el agua fría?', en: 'Do you like cold water?' }, help: { es: 'Sí, me gusta. / No, prefiero el agua caliente.', en: 'Yes, I like it. / No, I prefer warm water.' }, follow: [{ es: '¿Te duchas con agua fría?', en: 'Do you shower with cold water?' }, { es: '¿Nadas en invierno?', en: 'Do you swim in winter?' }] },
            { q: { es: '¿Tienes miedo de algo?', en: 'Are you afraid of something?' }, help: { es: 'Sí, tengo miedo de… / No, de nada.', en: 'Yes, I am afraid of… / No, of nothing.' }, follow: [{ es: '¿De los animales?', en: 'Of animals?' }, { es: '¿De la oscuridad?', en: 'Of the dark?' }] },
            { q: { es: '¿Eres valiente?', en: 'Are you brave?' }, help: { es: 'Sí, un poco. / No mucho.', en: 'Yes, a little. / Not much.' }, follow: [{ es: '¿Saltas al agua?', en: 'Do you jump into water?' }, { es: '¿Quién es valiente en tu familia?', en: 'Who is brave in your family?' }] },
            { q: { es: '¿Te gustan las cuevas?', en: 'Do you like caves?' }, help: { es: 'Sí, me gustan. / No, no me gustan.', en: 'Yes, I like them. / No, I don’t like them.' }, follow: [{ es: '¿Hay cuevas en tu país?', en: 'Are there caves in your country?' }, { es: '¿Son oscuras?', en: 'Are they dark?' }] },
          ],
          words: [{ es: 'la cueva', en: 'the cave' }, { es: 'transparente', en: 'clear' }, { es: 'la escalera', en: 'the ladder' }, { es: 'saltar', en: 'to jump' }, { es: 'el murciélago', en: 'the bat' }],
        },
        A1: {
          scene: { es: 'El cenote está en la selva, a media hora de Valladolid. Hay raíces de árboles que bajan hasta el agua. Don Ramiro es maya y su familia cuida este cenote desde hace generaciones.', en: 'The cenote is in the jungle, half an hour from Valladolid. There are tree roots that reach down to the water. Don Ramiro is Mayan and his family has looked after this cenote for generations.' },
          opener: { es: 'Para los mayas, los cenotes eran la puerta al otro mundo. Por eso aquí no gritamos ni usamos crema en el cuerpo. ¿Te parece bien?', en: 'For the Maya, cenotes were the door to the other world. That’s why here we don’t shout or wear cream on our bodies. Is that OK with you?' },
          decide: {
            ask: { es: 'Antes de entrar, Ramiro te ofrece tres cosas. ¿Qué eliges?', en: 'Before going in, Ramiro offers you three things. What do you choose?' },
            options: [
              { say: { es: 'Una pequeña ceremonia maya.', en: 'A small Mayan ceremony.' }, then: { es: 'Ramiro quema un poco de copal y dice unas palabras en maya. Todo queda en silencio.', en: 'Ramiro burns a little copal and says some words in Maya. Everything goes quiet.' } },
              { say: { es: 'Un chaleco salvavidas.', en: 'A life jacket.' }, then: { es: '«Buena idea», dice Ramiro. «El cenote tiene cuarenta metros de profundidad».', en: '“Good idea,” says Ramiro. “The cenote is forty metres deep.”' } },
              { say: { es: 'Unas gafas para ver debajo del agua.', en: 'Goggles to see underwater.' }, then: { es: 'Ves peces negros pequeños y rocas como esculturas. Te olvidas del tiempo.', en: 'You see small black fish and rocks like sculptures. You lose track of time.' } },
            ],
          },
          twist: { es: 'Un grupo de turistas llega con música muy alta y un altavoz. Ramiro te mira.', en: 'A group of tourists arrives with very loud music and a speaker. Ramiro looks at you.' },
          questions: [
            { q: { es: '¿Hay un lugar especial o sagrado en tu país?', en: 'Is there a special or sacred place in your country?' }, help: { es: 'Sí, hay… / Para mucha gente…', en: 'Yes, there is… / For many people…' }, follow: [{ es: '¿Lo visitaste?', en: 'Have you visited it?' }, { es: '¿Qué reglas hay?', en: 'What rules are there?' }] },
            { q: { es: '¿Te gusta el silencio?', en: 'Do you like silence?' }, help: { es: 'Sí, me gusta mucho. / No, prefiero música.', en: 'Yes, I like it a lot. / No, I prefer music.' }, follow: [{ es: '¿Dónde encuentras silencio?', en: 'Where do you find silence?' }, { es: '¿Cuánto tiempo puedes estar sin hablar?', en: 'How long can you go without talking?' }] },
            { q: { es: '¿Qué haces si alguien hace mucho ruido en un lugar tranquilo?', en: 'What do you do if someone makes a lot of noise in a quiet place?' }, help: { es: 'Le digo que… / No digo nada. / Me voy.', en: 'I tell them that… / I say nothing. / I leave.' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it happened to you?' }, { es: '¿Dónde fue?', en: 'Where was it?' }] },
            { q: { es: '¿Tu familia cuida algo desde hace mucho tiempo?', en: 'Has your family looked after something for a long time?' }, help: { es: 'Sí, una casa / un jardín / un negocio… / No.', en: 'Yes, a house / a garden / a business… / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Quién lo cuida ahora?', en: 'Who looks after it now?' }] },
          ],
          words: [{ es: 'la selva', en: 'the jungle' }, { es: 'la raíz', en: 'the root' }, { es: 'sagrado', en: 'sacred' }, { es: 'el chaleco salvavidas', en: 'the life jacket' }, { es: 'el altavoz', en: 'the speaker' }],
        },
        A2: {
          scene: { es: 'Don Ramiro aprendió de su abuelo los nombres mayas de cada planta de la selva. Sus hijos estudian en Cancún y hablan más inglés que maya. Hoy uno de ellos vino a ayudar con los turistas.', en: 'Don Ramiro learned from his grandfather the Mayan names of every plant in the jungle. His children study in Cancún and speak more English than Maya. Today one of them came to help with the tourists.' },
          opener: { es: 'Mi hijo dice que el maya no sirve para conseguir trabajo. Puede ser. Pero cuando yo me vaya, ¿quién va a saber cómo se llama esa planta y para qué sirve? ¿En tu familia se perdió alguna palabra?', en: 'My son says Maya is no use for getting a job. Maybe. But when I’m gone, who will know what that plant is called and what it’s for? Has your family lost any words?' },
          decide: {
            ask: { es: 'Ramiro quiere que su hijo aprenda de él. ¿Qué le sugieres?', en: 'Ramiro wants his son to learn from him. What do you suggest?' },
            options: [
              { say: { es: 'Hacer juntos un tour en maya y en inglés.', en: 'Do a tour together in Maya and English.' }, then: { es: 'El hijo traduce y el padre explica. Los turistas dicen que es el mejor tour de su viaje.', en: 'The son translates and the father explains. The tourists say it’s the best tour of their trip.' } },
              { say: { es: 'Escribir un pequeño libro con las plantas y sus nombres.', en: 'Write a small book with the plants and their names.' }, then: { es: 'El hijo hace las fotos. El abuelo de Ramiro aparece en la primera página.', en: 'The son takes the photos. Ramiro’s grandfather appears on the first page.' } },
              { say: { es: 'Dejar que el hijo decida solo.', en: 'Let the son decide on his own.' }, then: { es: 'Ramiro acepta, triste. Pero esa noche el hijo le pregunta el nombre de una flor.', en: 'Ramiro accepts, sadly. But that night his son asks him the name of a flower.' } },
            ],
          },
          twist: { es: 'Una turista se pone enferma: tocó una planta que no debía. Ramiro sabe qué hoja la cura.', en: 'A tourist gets sick: she touched a plant she shouldn’t have. Ramiro knows which leaf cures her.' },
          questions: [
            { q: { es: '¿Qué te enseñaron tus abuelos?', en: 'What did your grandparents teach you?' }, help: { es: 'Mi abuela me enseñó a… / Mi abuelo siempre decía…', en: 'My grandmother taught me to… / My grandfather always said…' }, follow: [{ es: '¿Lo usas todavía?', en: 'Do you still use it?' }, { es: '¿Se lo enseñarías a alguien?', en: 'Would you teach it to someone?' }] },
            { q: { es: '¿Sabes los nombres de las plantas de tu región?', en: 'Do you know the names of the plants in your region?' }, help: { es: 'Sé algunos: … / No, casi ninguno.', en: 'I know some: … / No, almost none.' }, follow: [{ es: '¿Tienes una planta favorita?', en: 'Do you have a favourite plant?' }, { es: '¿Para qué sirve?', en: 'What is it used for?' }] },
            { q: { es: '¿Qué idioma hablaban en tu familia antes?', en: 'What language did your family speak before?' }, help: { es: 'Mis bisabuelos hablaban… / Siempre hablamos…', en: 'My great-grandparents spoke… / We have always spoken…' }, follow: [{ es: '¿Por qué se perdió?', en: 'Why was it lost?' }, { es: '¿Te gustaría recuperarlo?', en: 'Would you like to recover it?' }] },
            { q: { es: '¿Los jóvenes deben aprender las tradiciones aunque no les sirvan para trabajar?', en: 'Should young people learn traditions even if they’re no use for work?' }, help: { es: 'Creo que sí porque… / No, si no quieren…', en: 'I think so because… / No, if they don’t want to…' }, follow: [{ es: '¿Tú aprendiste alguna?', en: 'Did you learn one?' }, { es: '¿Cuál te parece más importante?', en: 'Which seems most important to you?' }] },
          ],
          words: [{ es: 'servir para', en: 'to be useful for' }, { es: 'conseguir', en: 'to get, obtain' }, { es: 'traducir', en: 'to translate' }, { es: 'ponerse enfermo', en: 'to get sick' }, { es: 'curar', en: 'to cure' }],
        },
        B1: {
          scene: { es: 'El gobierno construye un tren turístico por la selva de Yucatán. En una parte, las columnas del tren atraviesan cuevas subterráneas conectadas con los cenotes. Los biólogos temen que el agua se contamine; el gobierno promete desarrollo para la región.', en: 'The government is building a tourist train through the Yucatán jungle. In one section, the train’s columns go through underground caves connected to the cenotes. Biologists fear the water will be polluted; the government promises development for the region.' },
          opener: { es: 'Mis vecinos están divididos. Algunos ya tienen trabajo gracias al tren y por primera vez no tuvieron que irse a Cancún. Otros dicen que estamos vendiendo el agua de nuestros nietos. Los dos tienen parte de razón, y eso es lo que más duele.', en: 'My neighbours are divided. Some already have work thanks to the train and for the first time didn’t have to leave for Cancún. Others say we’re selling our grandchildren’s water. Both are partly right, and that’s what hurts most.' },
          decide: {
            ask: { es: 'Hay una asamblea en el pueblo y Ramiro tiene que votar. ¿Qué le aconsejas?', en: 'There is a village assembly and Ramiro has to vote. What do you advise?' },
            options: [
              { say: { es: 'Votar a favor, pero exigir controles del agua cada mes.', en: 'Vote in favour, but demand monthly water checks.' }, then: { es: 'La propuesta gana. Ahora falta saber quién hará los controles y quién los pagará.', en: 'The proposal wins. Now it remains to be seen who will carry out the checks and who will pay.' } },
              { say: { es: 'Votar en contra: el agua no se negocia.', en: 'Vote against: water is not negotiable.' }, then: { es: 'Su sobrino, que trabaja en el tren, deja de hablarle durante semanas.', en: 'His nephew, who works on the train, stops speaking to him for weeks.' } },
              { say: { es: 'Abstenerse y proponer una consulta con expertos independientes.', en: 'Abstain and propose a consultation with independent experts.' }, then: { es: 'Algunos dicen que es una forma de no comprometerse. Otros, que es lo más sensato.', en: 'Some say it’s a way of not committing. Others, that it’s the most sensible thing.' } },
            ],
          },
          twist: { es: 'Unos buzos descubren en la cueva restos de un esqueleto de hace diez mil años, a metros de una columna del tren.', en: 'Some divers discover in the cave the remains of a ten-thousand-year-old skeleton, metres from one of the train’s columns.' },
          questions: [
            { q: { es: '¿Cómo se equilibra el desarrollo económico con la protección del medio ambiente?', en: 'How do you balance economic development with environmental protection?' }, help: { es: 'Creo que habría que… / Lo importante es que…', en: 'I think we’d have to… / What matters is that…' }, follow: [{ es: '¿Quién debería tener la última palabra?', en: 'Who should have the final say?' }, { es: '¿Hay un ejemplo en tu país?', en: 'Is there an example in your country?' }] },
            { q: { es: '¿Viste alguna vez a una comunidad dividida por una decisión?', en: 'Have you ever seen a community divided by a decision?' }, help: { es: 'Sí, en mi ciudad cuando… / Recuerdo que…', en: 'Yes, in my city when… / I remember that…' }, follow: [{ es: '¿Cómo terminó?', en: 'How did it end?' }, { es: '¿Se reconciliaron?', en: 'Did they reconcile?' }] },
            { q: { es: '¿Qué pasaría si se encontraran restos arqueológicos en una gran obra de tu ciudad?', en: 'What would happen if archaeological remains were found in a big construction project in your city?' }, help: { es: 'Supongo que se pararía… / Probablemente…', en: 'I suppose it would stop… / Probably…' }, follow: [{ es: '¿Debería pararse la obra?', en: 'Should the work stop?' }, { es: '¿Por cuánto tiempo?', en: 'For how long?' }] },
            { q: { es: '¿Usarías ese tren como turista, sabiendo lo que sabes?', en: 'Would you use that train as a tourist, knowing what you know?' }, help: { es: 'Lo usaría porque… / No lo usaría, aunque…', en: 'I would use it because… / I wouldn’t, although…' }, follow: [{ es: '¿Qué otra opción tendrías?', en: 'What other option would you have?' }, { es: '¿El turista tiene responsabilidad?', en: 'Does the tourist bear responsibility?' }] },
          ],
          words: [{ es: 'subterráneo', en: 'underground' }, { es: 'atravesar', en: 'to go through' }, { es: 'el desarrollo', en: 'development' }, { es: 'abstenerse', en: 'to abstain' }, { es: 'sensato', en: 'sensible' }],
        },
      },
    },
    // ------------------------------------------------------------ the diving centre
    {
      id: 'buceo',
      name: { es: 'El centro de buceo', en: 'The diving centre' },
      who: { name: 'Sofía', role: { es: 'instructora de buceo', en: 'diving instructor' } },
      levels: {
        A0: {
          scene: { es: 'Es una tienda pequeña cerca del mar. Hay tanques, máscaras y aletas. Sofía es instructora.', en: 'It is a small shop near the sea. There are tanks, masks and flippers. Sofía is an instructor.' },
          opener: { es: '¡Hola! Soy Sofía. ¿Quieres ver peces?', en: 'Hi! I am Sofía. Do you want to see fish?' },
          decide: {
            ask: { es: 'Sofía tiene tres opciones. ¿Cuál quieres?', en: 'Sofía has three options. Which one do you want?' },
            options: [
              { say: { es: 'Bucear con tanque.', en: 'Dive with a tank.' }, then: { es: 'Sofía dice: «Primero, una clase en la piscina».', en: 'Sofía says: “First, a class in the pool.”' } },
              { say: { es: 'Nadar con máscara.', en: 'Swim with a mask.' }, then: { es: 'Sofía dice: «¡Fácil! Hay peces de colores cerca».', en: 'Sofía says: “Easy! There are colourful fish nearby.”' } },
              { say: { es: 'Ir en barco con fondo de cristal.', en: 'Go in a glass-bottom boat.' }, then: { es: 'Sofía dice: «Muy bien. ¡Sin mojarte!»', en: 'Sofía says: “Very good. Without getting wet!”' } },
            ],
          },
          twist: { es: 'Una tortuga grande nada cerca de ti. ¡Es enorme! ¿Qué haces?', en: 'A big turtle swims near you. It is huge! What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los peces?', en: 'Do you like fish?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Tienes peces en casa?', en: 'Do you have fish at home?' }, { es: '¿De qué color te gustan?', en: 'What colour do you like?' }] },
            { q: { es: '¿Te gusta el deporte?', en: 'Do you like sport?' }, help: { es: 'Sí, me gusta el… / No mucho.', en: 'Yes, I like… / Not much.' }, follow: [{ es: '¿Qué deporte haces?', en: 'What sport do you do?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Te gustan las tortugas?', en: 'Do you like turtles?' }, help: { es: 'Sí, me encantan. / Sí, son bonitas.', en: 'Yes, I love them. / Yes, they are nice.' }, follow: [{ es: '¿Qué animal del mar te gusta?', en: 'What sea animal do you like?' }, { es: '¿Qué animal del mar te da miedo?', en: 'What sea animal scares you?' }] },
            { q: { es: '¿Quieres aprender algo nuevo?', en: 'Do you want to learn something new?' }, help: { es: 'Sí, quiero aprender…', en: 'Yes, I want to learn…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Es difícil?', en: 'Is it difficult?' }] },
          ],
          words: [{ es: 'bucear', en: 'to dive' }, { es: 'la máscara', en: 'the mask' }, { es: 'las aletas', en: 'flippers' }, { es: 'el pez', en: 'the fish (alive)' }, { es: 'la tortuga', en: 'the turtle' }],
        },
        A1: {
          scene: { es: 'Estás en Cozumel, una isla famosa por su arrecife de coral. En el centro de buceo, Sofía prepara el equipo para un grupo de principiantes. Hay que firmar un formulario médico.', en: 'You are in Cozumel, an island famous for its coral reef. At the diving centre, Sofía prepares the equipment for a group of beginners. You have to sign a medical form.' },
          opener: { es: 'Antes de bajar, tres reglas: nunca toques el coral, nunca subas rápido y nunca bucees solo. ¿Alguna pregunta?', en: 'Before going down, three rules: never touch the coral, never come up fast and never dive alone. Any questions?' },
          decide: {
            ask: { es: 'En el formulario hay una pregunta: «¿Tienes problemas de oído?». A veces te duelen los oídos. ¿Qué haces?', en: 'On the form there is a question: “Do you have ear problems?” Sometimes your ears hurt. What do you do?' },
            options: [
              { say: { es: 'Le digo la verdad a Sofía.', en: 'I tell Sofía the truth.' }, then: { es: 'Sofía te enseña a igualar la presión. Bajas despacio y no te duele nada.', en: 'Sofía teaches you to equalise the pressure. You go down slowly and nothing hurts.' } },
              { say: { es: 'Escribo «no». Quiero bucear.', en: 'I write “no”. I want to dive.' }, then: { es: 'A cinco metros te duele mucho el oído. Tienes que subir y mirar desde el barco.', en: 'At five metres your ear really hurts. You have to come up and watch from the boat.' } },
              { say: { es: 'Prefiero hacer snorkel hoy.', en: 'I prefer to go snorkelling today.' }, then: { es: 'Desde la superficie ves una raya enorme. Los buzos no la vieron.', en: 'From the surface you see a huge ray. The divers didn’t see it.' } },
            ],
          },
          twist: { es: 'Un buzo del grupo toca el coral para una foto. Sofía se pone muy seria.', en: 'A diver in the group touches the coral for a photo. Sofía gets very serious.' },
          questions: [
            { q: { es: '¿Haces deportes de aventura?', en: 'Do you do adventure sports?' }, help: { es: 'Sí, hago… / No, prefiero…', en: 'Yes, I do… / No, I prefer…' }, follow: [{ es: '¿Cuál quieres probar?', en: 'Which do you want to try?' }, { es: '¿Cuál nunca vas a hacer?', en: 'Which will you never do?' }] },
            { q: { es: '¿Dices siempre la verdad al médico?', en: 'Do you always tell the doctor the truth?' }, help: { es: 'Sí, siempre. / Casi siempre…', en: 'Yes, always. / Almost always…' }, follow: [{ es: '¿Qué no le dices?', en: 'What don’t you tell them?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Respetas las reglas cuando viajas?', en: 'Do you respect the rules when you travel?' }, help: { es: 'Sí, siempre. / Depende…', en: 'Yes, always. / It depends…' }, follow: [{ es: '¿Qué regla te parece rara?', en: 'What rule seems strange to you?' }, { es: '¿Rompiste alguna regla en un viaje?', en: 'Have you broken a rule on a trip?' }] },
            { q: { es: '¿Qué animal te gustaría ver en el mar?', en: 'What animal would you like to see in the sea?' }, help: { es: 'Me gustaría ver…', en: 'I would like to see…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Lo viste en un acuario?', en: 'Have you seen it in an aquarium?' }] },
          ],
          words: [{ es: 'el arrecife', en: 'the reef' }, { es: 'el principiante', en: 'the beginner' }, { es: 'el equipo', en: 'the equipment' }, { es: 'el oído', en: 'the (inner) ear' }, { es: 'la raya', en: 'the ray' }],
        },
        A2: {
          scene: { es: 'Sofía era abogada en Monterrey. Hace ocho años vino de vacaciones a Cozumel, hizo un curso de buceo y nunca volvió a su oficina. Ahora enseña a bucear y es voluntaria en un proyecto para salvar el coral.', en: 'Sofía was a lawyer in Monterrey. Eight years ago she came on holiday to Cozumel, did a diving course and never went back to her office. Now she teaches diving and volunteers on a project to save the coral.' },
          opener: { es: 'Cuando llegué, el arrecife parecía un jardín de colores. Ahora hay zonas blancas, como un cementerio. El coral se enferma con el calor del agua. ¿Tú viste alguna vez un lugar desaparecer poco a poco?', en: 'When I arrived, the reef looked like a garden of colours. Now there are white areas, like a cemetery. Coral gets sick with warm water. Have you ever seen a place disappear little by little?' },
          decide: {
            ask: { es: 'Sofía te invita a ayudar en el proyecto un día. ¿Qué tarea eliges?', en: 'Sofía invites you to help with the project for a day. What task do you choose?' },
            options: [
              { say: { es: 'Plantar trozos de coral nuevo.', en: 'Plant pieces of new coral.' }, then: { es: 'Bajas con Sofía y colocas veinte trozos en una estructura de metal. Te dan un certificado con tu nombre.', en: 'You go down with Sofía and place twenty pieces on a metal frame. They give you a certificate with your name.' } },
              { say: { es: 'Limpiar plástico de la playa.', en: 'Clean plastic off the beach.' }, then: { es: 'En dos horas llenan diez bolsas. Encuentras un zapato de niño y una muñeca sin cabeza.', en: 'In two hours you fill ten bags. You find a child’s shoe and a headless doll.' } },
              { say: { es: 'Hablar con turistas sobre el coral.', en: 'Talk to tourists about the coral.' }, then: { es: 'Una familia escucha con atención. Otra te dice que «está de vacaciones». Sofía sonríe: «Así es todos los días».', en: 'One family listens carefully. Another tells you they’re “on holiday”. Sofía smiles: “That’s how it is every day.”' } },
            ],
          },
          twist: { es: 'Llega un crucero enorme al puerto. Sofía sabe que en unas horas habrá mil turistas en el arrecife.', en: 'A huge cruise ship arrives at the port. Sofía knows that in a few hours there will be a thousand tourists on the reef.' },
          questions: [
            { q: { es: '¿Cambiaste alguna vez de vida después de un viaje?', en: 'Have you ever changed your life after a trip?' }, help: { es: 'Sí, después de… tomé la decisión de… / No, pero…', en: 'Yes, after… I decided… / No, but…' }, follow: [{ es: '¿Qué te hizo cambiar?', en: 'What made you change?' }, { es: '¿Qué dijo tu familia?', en: 'What did your family say?' }] },
            { q: { es: '¿Hiciste alguna vez trabajo voluntario?', en: 'Have you ever done volunteer work?' }, help: { es: 'Sí, ayudé en… / No, pero me gustaría…', en: 'Yes, I helped at… / No, but I’d like to…' }, follow: [{ es: '¿Cuánto tiempo?', en: 'For how long?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué lugar natural de tu país cambió en los últimos años?', en: 'What natural place in your country has changed in recent years?' }, help: { es: 'Antes… y ahora… / Recuerdo que…', en: 'Before… and now… / I remember that…' }, follow: [{ es: '¿Por qué cambió?', en: 'Why did it change?' }, { es: '¿Se puede recuperar?', en: 'Can it be recovered?' }] },
            { q: { es: '¿Viajaste alguna vez en crucero?', en: 'Have you ever been on a cruise?' }, help: { es: 'Sí, fui a… / No, nunca. No me interesa…', en: 'Yes, I went to… / No, never. I’m not interested…' }, follow: [{ es: '¿Qué opinas de los cruceros?', en: 'What do you think of cruises?' }, { es: '¿Irías?', en: 'Would you go?' }] },
          ],
          words: [{ es: 'el voluntario', en: 'the volunteer' }, { es: 'salvar', en: 'to save' }, { es: 'poco a poco', en: 'little by little' }, { es: 'colocar', en: 'to place' }, { es: 'el crucero', en: 'the cruise ship' }],
        },
        B1: {
          scene: { es: 'El gobierno quiere construir un cuarto muelle para cruceros en Cozumel. Traería miles de turistas y empleos, pero las obras destruirían parte del arrecife. Sofía es invitada a hablar en una audiencia pública.', en: 'The government wants to build a fourth cruise pier in Cozumel. It would bring thousands of tourists and jobs, but the work would destroy part of the reef. Sofía is invited to speak at a public hearing.' },
          opener: { es: 'Lo irónico es que la gente viene a Cozumel por el arrecife. Si lo destruimos para recibir más turistas, dentro de veinte años no vendrá nadie. Es como cortar el árbol para vender la fruta.', en: 'The irony is that people come to Cozumel for the reef. If we destroy it to receive more tourists, in twenty years nobody will come. It’s like cutting down the tree to sell the fruit.' },
          decide: {
            ask: { es: 'Sofía tiene cinco minutos en la audiencia. ¿Qué argumento le recomiendas usar?', en: 'Sofía has five minutes at the hearing. Which argument do you recommend she use?' },
            options: [
              { say: { es: 'El económico: cuánto dinero deja el buceo comparado con los cruceros.', en: 'The economic one: how much money diving brings compared with cruises.' }, then: { es: 'Los números sorprenden a todos: un buzo gasta diez veces más que un pasajero de crucero.', en: 'The numbers surprise everyone: a diver spends ten times more than a cruise passenger.' } },
              { say: { es: 'El emocional: mostrar fotos del arrecife antes y después.', en: 'The emotional one: show before-and-after photos of the reef.' }, then: { es: 'La sala queda en silencio. Un funcionario aparta la mirada.', en: 'The room goes silent. An official looks away.' } },
              { say: { es: 'El legal: la zona está protegida por ley.', en: 'The legal one: the area is protected by law.' }, then: { es: 'Su experiencia como abogada sirve: encuentra un error en los permisos del proyecto.', en: 'Her experience as a lawyer helps: she finds an error in the project’s permits.' } },
            ],
          },
          twist: { es: 'Un taxista toma la palabra: sin cruceros, él y otros cien conductores no tienen trabajo. Muchos aplauden.', en: 'A taxi driver takes the floor: without cruises, he and a hundred other drivers have no work. Many applaud.' },
          questions: [
            { q: { es: '¿Qué tipo de turismo debería promover un lugar frágil?', en: 'What kind of tourism should a fragile place promote?' }, help: { es: 'Debería promover un turismo que… / Menos…, pero…', en: 'It should promote tourism that… / Less…, but…' }, follow: [{ es: '¿Quién quedaría fuera?', en: 'Who would be left out?' }, { es: '¿Sería más caro?', en: 'Would it be more expensive?' }] },
            { q: { es: '¿Qué argumento te convence más: el económico, el emocional o el legal?', en: 'Which argument convinces you most: economic, emotional or legal?' }, help: { es: 'A mí me convence más… porque…', en: 'I find … most convincing because…' }, follow: [{ es: '¿Y a la mayoría de la gente?', en: 'And most people?' }, { es: '¿Depende del tema?', en: 'Does it depend on the topic?' }] },
            { q: { es: '¿Cómo responderías al taxista?', en: 'How would you respond to the taxi driver?' }, help: { es: 'Le diría que entiendo…, pero… / Habría que buscar…', en: 'I would tell him I understand…, but… / We’d need to find…' }, follow: [{ es: '¿Tiene razón?', en: 'Is he right?' }, { es: '¿Qué alternativa le darías?', en: 'What alternative would you give him?' }] },
            { q: { es: '¿Se puede limitar el número de turistas sin que el lugar se vuelva solo para ricos?', en: 'Can the number of tourists be limited without the place becoming only for the rich?' }, help: { es: 'Se podría, por ejemplo, … / Me temo que…', en: 'It could be done, for example, … / I’m afraid that…' }, follow: [{ es: '¿Conoces algún lugar que lo haga?', en: 'Do you know a place that does?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
          ],
          words: [{ es: 'el muelle', en: 'the pier' }, { es: 'la audiencia pública', en: 'public hearing' }, { es: 'irónico', en: 'ironic' }, { es: 'el funcionario', en: 'the official' }, { es: 'frágil', en: 'fragile' }],
        },
      },
    },
    // ------------------------------------------------------------ the Tulum ruins
    {
      id: 'tulum',
      name: { es: 'Las ruinas de Tulum', en: 'The Tulum ruins' },
      who: { name: 'Profesor Canché', role: { es: 'arqueólogo', en: 'archaeologist' } },
      levels: {
        A0: {
          scene: { es: 'Es una ciudad maya muy vieja. Hay templos de piedra. Abajo está el mar. Hay iguanas en las piedras.', en: 'It is a very old Mayan city. There are stone temples. Below is the sea. There are iguanas on the stones.' },
          opener: { es: 'Hola. Soy el profesor Canché. Esta ciudad tiene ochocientos años.', en: 'Hello. I am Professor Canché. This city is eight hundred years old.' },
          decide: {
            ask: { es: '¿Qué quieres ver primero?', en: 'What do you want to see first?' },
            options: [
              { say: { es: 'El templo grande.', en: 'The big temple.' }, then: { es: 'Canché dice: «Se llama El Castillo. Mira el mar desde aquí».', en: 'Canché says: “It is called El Castillo. Look at the sea from here.”' } },
              { say: { es: 'Las iguanas.', en: 'The iguanas.' }, then: { es: 'Canché ríe: «Hay muchas. Toman el sol, como los turistas».', en: 'Canché laughs: “There are lots. They sunbathe, like the tourists.”' } },
              { say: { es: 'La playa.', en: 'The beach.' }, then: { es: 'Canché dice: «Es pequeña y muy bonita. Bajas por la escalera».', en: 'Canché says: “It is small and very beautiful. You go down the stairs.”' } },
            ],
          },
          twist: { es: 'Una iguana camina sobre tu pie. ¡No se mueve! ¿Qué dices?', en: 'An iguana walks onto your foot. It doesn’t move! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la historia?', en: 'Do you like history?' }, help: { es: 'Sí, me gusta. / No mucho.', en: 'Yes, I like it. / Not much.' }, follow: [{ es: '¿Qué historia te gusta?', en: 'What history do you like?' }, { es: '¿Lees libros de historia?', en: 'Do you read history books?' }] },
            { q: { es: '¿Hay lugares muy viejos en tu país?', en: 'Are there very old places in your country?' }, help: { es: 'Sí, hay… / No muchos.', en: 'Yes, there are… / Not many.' }, follow: [{ es: '¿Cuántos años tienen?', en: 'How old are they?' }, { es: '¿Los visitas?', en: 'Do you visit them?' }] },
            { q: { es: '¿Te gustan los animales pequeños?', en: 'Do you like small animals?' }, help: { es: 'Sí, me gustan. / No, me dan miedo.', en: 'Yes, I like them. / No, they scare me.' }, follow: [{ es: '¿Te gustan las iguanas?', en: 'Do you like iguanas?' }, { es: '¿Qué animal pequeño te gusta?', en: 'What small animal do you like?' }] },
            { q: { es: '¿Caminas mucho cuando viajas?', en: 'Do you walk a lot when you travel?' }, help: { es: 'Sí, camino mucho. / No, uso taxi.', en: 'Yes, I walk a lot. / No, I use taxis.' }, follow: [{ es: '¿Cuántas horas?', en: 'How many hours?' }, { es: '¿Llevas zapatos cómodos?', en: 'Do you wear comfortable shoes?' }] },
          ],
          words: [{ es: 'el templo', en: 'the temple' }, { es: 'la piedra', en: 'the stone' }, { es: 'viejo', en: 'old' }, { es: 'la iguana', en: 'the iguana' }, { es: 'abajo', en: 'below' }],
        },
        A1: {
          scene: { es: 'Son las ocho de la mañana. Las ruinas de Tulum abren y todavía hay poca gente. El profesor Canché trabaja aquí y hoy hace una visita especial para un grupo pequeño.', en: 'It is eight in the morning. The Tulum ruins open and there are still few people. Professor Canché works here and today gives a special tour to a small group.' },
          opener: { es: 'Tulum era un puerto comercial. Aquí llegaban canoas con sal, cacao y plumas de colores. El cacao era dinero, ¿lo sabías? Imagínate pagar con chocolate.', en: 'Tulum was a trading port. Canoes arrived here with salt, cacao and colourful feathers. Cacao was money, did you know? Imagine paying with chocolate.' },
          decide: {
            ask: { es: 'El profesor tiene un mapa antiguo. ¿Qué le preguntas?', en: 'The professor has an old map. What do you ask him?' },
            options: [
              { say: { es: '¿Cuántas personas vivían aquí?', en: 'How many people lived here?' }, then: { es: '«Unas mil quinientas», dice. «Y todas sabían nadar mejor que tú y que yo».', en: '“About fifteen hundred,” he says. “And they all swam better than you and me.”' } },
              { say: { es: '¿Por qué hay una muralla?', en: 'Why is there a wall?' }, then: { es: '«Para protegerse. Y para separar a los ricos de los pobres», responde.', en: '“For protection. And to separate the rich from the poor,” he answers.' } },
              { say: { es: '¿Qué comían los mayas?', en: 'What did the Maya eat?' }, then: { es: '«Maíz, frijol, chile, pescado… casi lo mismo que comemos hoy en Yucatán».', en: '“Corn, beans, chilli, fish… almost the same as we eat today in Yucatán.”' } },
            ],
          },
          twist: { es: 'Un turista sube a un templo donde está prohibido subir. El guardia empieza a gritar.', en: 'A tourist climbs a temple where climbing is forbidden. The guard starts shouting.' },
          questions: [
            { q: { es: '¿Prefieres visitar lugares temprano o tarde?', en: 'Do you prefer visiting places early or late?' }, help: { es: 'Prefiero ir temprano porque… / Tarde, porque…', en: 'I prefer to go early because… / Late, because…' }, follow: [{ es: '¿A qué hora te levantas en vacaciones?', en: 'What time do you get up on holiday?' }, { es: '¿Te gusta madrugar?', en: 'Do you like getting up early?' }] },
            { q: { es: '¿Qué usaban como dinero en tu país antes?', en: 'What was used as money in your country before?' }, help: { es: 'Creo que usaban… / No sé, pero…', en: 'I think they used… / I don’t know, but…' }, follow: [{ es: '¿Pagas en efectivo o con tarjeta?', en: 'Do you pay cash or by card?' }, { es: '¿Llevas dinero en el bolsillo?', en: 'Do you carry money in your pocket?' }] },
            { q: { es: '¿Haces preguntas cuando visitas un lugar?', en: 'Do you ask questions when you visit a place?' }, help: { es: 'Sí, muchas. / No, prefiero leer.', en: 'Yes, lots. / No, I prefer to read.' }, follow: [{ es: '¿Qué preguntas?', en: 'What do you ask?' }, { es: '¿Usas audioguía?', en: 'Do you use an audio guide?' }] },
            { q: { es: '¿Qué comes que comían también tus abuelos?', en: 'What do you eat that your grandparents also ate?' }, help: { es: 'Como… como ellos. / Ellos comían…', en: 'I eat… like them. / They used to eat…' }, follow: [{ es: '¿Qué comida nueva comes?', en: 'What new food do you eat?' }, { es: '¿Qué comida antigua no comes?', en: 'What old food don’t you eat?' }] },
          ],
          words: [{ es: 'el puerto', en: 'the port' }, { es: 'la canoa', en: 'the canoe' }, { es: 'la pluma', en: 'the feather' }, { es: 'la muralla', en: 'the city wall' }, { es: 'prohibido', en: 'forbidden' }],
        },
        A2: {
          scene: { es: 'El profesor Canché creció en un pueblo maya a veinte kilómetros de aquí. De niño vendía refrescos a los turistas en la entrada de las ruinas. Hoy es el arqueólogo que dirige las excavaciones.', en: 'Professor Canché grew up in a Mayan village twenty kilometres from here. As a child he sold soft drinks to tourists at the entrance of the ruins. Today he is the archaeologist who leads the excavations.' },
          opener: { es: 'Cuando era niño, los arqueólogos eran todos extranjeros. Hablaban de «los antiguos mayas» como si ya no existieran. Yo pensaba: pero si mi abuela es maya. ¿Alguna vez alguien habló de tu cultura sin conocerla?', en: 'When I was a child, the archaeologists were all foreigners. They talked about “the ancient Maya” as if they no longer existed. I used to think: but my grandmother is Maya. Has anyone ever talked about your culture without knowing it?' },
          decide: {
            ask: { es: 'Canché quiere que los niños del pueblo participen en las excavaciones. ¿Cómo lo harías?', en: 'Canché wants the village children to take part in the excavations. How would you do it?' },
            options: [
              { say: { es: 'Un taller de arqueología los sábados.', en: 'An archaeology workshop on Saturdays.' }, then: { es: 'Una niña encuentra un trozo de cerámica. No quiere soltarlo en todo el día.', en: 'A girl finds a piece of pottery. She won’t let go of it all day.' } },
              { say: { es: 'Que los niños hagan de guías para los turistas.', en: 'Have the children act as guides for tourists.' }, then: { es: 'Los turistas quedan encantados. Un niño explica la historia mejor que el folleto.', en: 'The tourists are delighted. One boy explains the history better than the leaflet.' } },
              { say: { es: 'Becas para estudiar arqueología en la universidad.', en: 'Scholarships to study archaeology at university.' }, then: { es: 'Canché busca dinero durante un año. Al final consigue tres becas.', en: 'Canché looks for money for a year. In the end he gets three scholarships.' } },
            ],
          },
          twist: { es: 'Un turista le ofrece dinero al profesor por «una piedra pequeña de recuerdo».', en: 'A tourist offers the professor money for “a little stone as a souvenir”.' },
          questions: [
            { q: { es: '¿Qué trabajo hacías de niño o de adolescente?', en: 'What job did you do as a child or teenager?' }, help: { es: 'Trabajaba en… / Ayudaba a mis padres con…', en: 'I worked at… / I helped my parents with…' }, follow: [{ es: '¿Cuánto ganabas?', en: 'How much did you earn?' }, { es: '¿Qué hacías con el dinero?', en: 'What did you do with the money?' }] },
            { q: { es: '¿Alguien habló mal de tu país o tu cultura sin conocerla?', en: 'Has someone spoken badly of your country or culture without knowing it?' }, help: { es: 'Sí, una vez alguien dijo que… / Muchas personas creen que…', en: 'Yes, once someone said that… / Many people think that…' }, follow: [{ es: '¿Qué contestaste?', en: 'What did you answer?' }, { es: '¿Qué estereotipo te molesta?', en: 'What stereotype bothers you?' }] },
            { q: { es: '¿Qué querías ser cuando eras niño?', en: 'What did you want to be when you were a child?' }, help: { es: 'Quería ser… porque…', en: 'I wanted to be… because…' }, follow: [{ es: '¿Lo conseguiste?', en: 'Did you achieve it?' }, { es: '¿Por qué cambiaste?', en: 'Why did you change?' }] },
            { q: { es: '¿Qué le dirías al turista de la piedra?', en: 'What would you say to the tourist with the stone?' }, help: { es: 'Le diría que… / Le explicaría que…', en: 'I would tell him that… / I would explain that…' }, follow: [{ es: '¿Por qué crees que lo pide?', en: 'Why do you think he asks?' }, { es: '¿Llevaste algo de un lugar sin permiso?', en: 'Have you taken something from a place without permission?' }] },
          ],
          words: [{ es: 'la excavación', en: 'the excavation' }, { es: 'dirigir', en: 'to lead' }, { es: 'la cerámica', en: 'pottery' }, { es: 'el folleto', en: 'the leaflet' }, { es: 'la beca', en: 'the scholarship' }],
        },
        B1: {
          scene: { es: 'Tulum recibe más de dos millones de visitantes al año. Las piedras se desgastan con tantos pies y la humedad. El instituto de arqueología propone cerrar las ruinas dos días por semana y limitar las entradas. Los hoteles de la zona protestan.', en: 'Tulum receives more than two million visitors a year. The stones are wearing away from so many feet and the humidity. The archaeology institute proposes closing the ruins two days a week and limiting tickets. The area’s hotels protest.' },
          opener: { es: 'Estas piedras aguantaron huracanes, guerras y ocho siglos. Lo que no van a aguantar es el turismo sin límite. Pero si cierro dos días, cien familias que venden artesanías no comen esos días. Ser arqueólogo hoy es también ser político, aunque no quieras.', en: 'These stones survived hurricanes, wars and eight centuries. What they won’t survive is unlimited tourism. But if I close for two days, a hundred families who sell crafts don’t eat on those days. Being an archaeologist today also means being a politician, even if you don’t want to be.' },
          decide: {
            ask: { es: 'El profesor tiene que presentar una propuesta final. ¿Qué medida recomiendas?', en: 'The professor has to present a final proposal. What measure do you recommend?' },
            options: [
              { say: { es: 'Entradas con hora fija y reserva en línea.', en: 'Timed tickets and online booking.' }, then: { es: 'Los visitantes se reparten mejor durante el día. Los vendedores notan menos diferencia de la esperada.', en: 'Visitors spread out better during the day. The sellers notice less of a difference than expected.' } },
              { say: { es: 'Un precio más alto para extranjeros y gratis para la gente local.', en: 'A higher price for foreigners and free for locals.' }, then: { es: 'Algunos turistas se quejan en internet. Las escuelas de la región organizan visitas por primera vez.', en: 'Some tourists complain online. Schools in the region organise visits for the first time.' } },
              { say: { es: 'Construir una réplica para el turismo masivo.', en: 'Build a replica for mass tourism.' }, then: { es: 'La idea divide a todos. Un turista pregunta: «¿Y para qué vengo, entonces?»', en: 'The idea divides everyone. A tourist asks: “Then why would I come?”' } },
            ],
          },
          twist: { es: 'Durante la excavación aparece una tumba intacta. Si se publica la noticia, llegarán aún más turistas.', en: 'During the excavation an intact tomb appears. If the news is published, even more tourists will come.' },
          questions: [
            { q: { es: '¿Debería limitarse el acceso a los lugares históricos más visitados?', en: 'Should access to the most visited historical sites be limited?' }, help: { es: 'Creo que sí, aunque… / No, porque el patrimonio es de todos…', en: 'I think so, although… / No, because heritage belongs to everyone…' }, follow: [{ es: '¿Cómo lo harías?', en: 'How would you do it?' }, { es: '¿Te pasó no poder entrar a un lugar?', en: 'Have you ever been unable to get into a place?' }] },
            { q: { es: '¿Es justo que los extranjeros paguen más que los locales?', en: 'Is it fair for foreigners to pay more than locals?' }, help: { es: 'Me parece justo porque… / No me parece justo porque…', en: 'I think it’s fair because… / I don’t think it’s fair because…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Cuánto más?', en: 'How much more?' }] },
            { q: { es: '¿Visitarías una réplica en lugar del original?', en: 'Would you visit a replica instead of the original?' }, help: { es: 'La visitaría si… / Nunca, porque…', en: 'I would visit it if… / Never, because…' }, follow: [{ es: '¿Qué se pierde?', en: 'What is lost?' }, { es: '¿Qué se gana?', en: 'What is gained?' }] },
            { q: { es: '¿Publicarías la noticia de la tumba ahora o esperarías?', en: 'Would you publish the news of the tomb now or wait?' }, help: { es: 'Esperaría hasta que… / La publicaría porque…', en: 'I would wait until… / I would publish it because…' }, follow: [{ es: '¿Quién tiene derecho a saberlo?', en: 'Who has the right to know?' }, { es: '¿Qué pasaría si se filtra?', en: 'What would happen if it leaked?' }] },
          ],
          words: [{ es: 'desgastarse', en: 'to wear away' }, { es: 'aguantar', en: 'to withstand' }, { es: 'sin límite', en: 'unlimited' }, { es: 'la réplica', en: 'the replica' }, { es: 'intacto', en: 'intact' }],
        },
      },
    },
  ],
};
