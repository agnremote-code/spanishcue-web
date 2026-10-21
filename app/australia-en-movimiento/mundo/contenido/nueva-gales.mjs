// Nueva Gales del Sur · the Sydney Opera House, Bondi beach, the Manly ferry, the fish
// market and the Blue Mountains. Five places, four levels each (A0, A1, A2, B1). Every
// level is written on its own: same place and people, different situations.
export default {
  id: 'nueva-gales',
  spots: [
    // ------------------------------------------------------------ the Opera House
    {
      id: 'opera',
      name: { es: 'La Ópera de Sídney', en: 'The Sydney Opera House' },
      who: { name: 'Chloe', role: { es: 'acomodadora de la Ópera', en: 'Opera House usher' } },
      levels: {
        A0: {
          scene: { es: 'Es un edificio blanco al lado del mar. El techo parece velas de barco. Chloe trabaja en la puerta. Tiene un uniforme negro.', en: 'It is a white building by the sea. The roof looks like boat sails. Chloe works at the door. She has a black uniform.' },
          opener: { es: '¡Hola! Soy Chloe. Bienvenido a la Ópera. Hoy hay un concierto. ¿Tienes entrada?', en: 'Hello! I am Chloe. Welcome to the Opera House. Today there is a concert. Do you have a ticket?' },
          decide: {
            ask: { es: 'Chloe mira tu entrada. ¿Qué haces?', en: 'Chloe looks at your ticket. What do you do?' },
            options: [
              { say: { es: 'Le doy la entrada.', en: 'I give her the ticket.' }, then: { es: 'Chloe dice: «Fila doce, asiento cinco. ¡Disfruta!».', en: 'Chloe says: “Row twelve, seat five. Enjoy!”' } },
              { say: { es: 'No tengo entrada.', en: 'I don’t have a ticket.' }, then: { es: 'Chloe sonríe: «Hay entradas baratas a las cinco».', en: 'Chloe smiles: “There are cheap tickets at five.”' } },
              { say: { es: 'Saco una foto del techo.', en: 'I take a photo of the roof.' }, then: { es: 'La foto es muy bonita. El sol brilla en el techo.', en: 'The photo is very nice. The sun shines on the roof.' } },
            ],
          },
          twist: { es: 'Empieza la música. Tu teléfono suena. ¿Qué haces?', en: 'The music starts. Your phone rings. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta la música clásica?', en: 'Do you like classical music?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué música te gusta?', en: 'What music do you like?' }, { es: '¿Vas a conciertos?', en: 'Do you go to concerts?' }] },
            { q: { es: '¿Qué edificio famoso conoces?', en: 'Which famous building do you know?' }, help: { es: 'Conozco… / La torre de…', en: 'I know… / The tower of…' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Es bonito?', en: 'Is it beautiful?' }] },
            { q: { es: '¿Apagas el teléfono en el cine?', en: 'Do you turn off your phone at the cinema?' }, help: { es: 'Sí, siempre. / No, nunca.', en: 'Yes, always. / No, never.' }, follow: [{ es: '¿Te molesta el ruido?', en: 'Does noise bother you?' }, { es: '¿Vas mucho al cine?', en: 'Do you go to the cinema a lot?' }] },
            { q: { es: '¿Qué ropa llevas a un concierto?', en: 'What clothes do you wear to a concert?' }, help: { es: 'Llevo vaqueros / un vestido…', en: 'I wear jeans / a dress…' }, follow: [{ es: '¿Y a una fiesta?', en: 'And to a party?' }, { es: '¿Te gusta la ropa elegante?', en: 'Do you like smart clothes?' }] },
          ],
          words: [{ es: 'la entrada', en: 'the ticket' }, { es: 'el techo', en: 'the roof' }, { es: 'el asiento', en: 'the seat' }, { es: 'la fila', en: 'the row' }, { es: 'la vela', en: 'the sail' }],
        },
        A1: {
          scene: { es: 'Es sábado por la mañana. En las escaleras de la Ópera hay turistas, estudiantes y una boda. Chloe empieza su turno a las diez. Estudia canto y trabaja aquí para pagar sus clases.', en: 'It is Saturday morning. On the Opera House steps there are tourists, students and a wedding. Chloe starts her shift at ten. She studies singing and works here to pay for her lessons.' },
          opener: { es: 'Este edificio tardó catorce años en construirse. El arquitecto era danés y nunca lo vio terminado. Yo canto desde los ocho años y mi sueño es cantar dentro, no solo trabajar en la puerta. Mientras tanto, veo todos los espectáculos gratis desde el fondo. ¿Tú tienes un sueño así?', en: 'This building took fourteen years to build. The architect was Danish and never saw it finished. I have sung since I was eight and my dream is to sing inside, not just work at the door. Meanwhile, I see every show for free from the back. Do you have a dream like that?' },
          decide: {
            ask: { es: 'Una pareja de la boda te pide una foto con la Ópera detrás. ¿Qué haces?', en: 'A couple from the wedding asks you for a photo with the Opera House behind. What do you do?' },
            options: [
              { say: { es: 'Saco muchas fotos desde abajo.', en: 'I take lots of photos from below.' }, then: { es: 'La pareja mira las fotos y está encantada.', en: 'The couple looks at the photos and is delighted.' } },
              { say: { es: 'Le pido ayuda a Chloe: ella conoce el mejor lugar.', en: 'I ask Chloe for help: she knows the best spot.' }, then: { es: 'Chloe los lleva a una esquina secreta con el puente detrás.', en: 'Chloe takes them to a secret corner with the bridge behind.' } },
              { say: { es: 'Saco un vídeo y Chloe canta.', en: 'I film a video and Chloe sings.' }, then: { es: 'Chloe canta dos frases. La novia llora y todos aplauden.', en: 'Chloe sings two lines. The bride cries and everyone claps.' } },
            ],
          },
          twist: { es: 'El jefe de Chloe la ve cantar. Dice que no está permitido durante el trabajo. ¿Qué dices tú?', en: 'Chloe’s boss sees her singing. He says it is not allowed at work. What do you say?' },
          questions: [
            { q: { es: '¿Tienes un sueño desde niño?', en: 'Have you had a dream since you were a child?' }, help: { es: 'Sí, quiero… / Ya no.', en: 'Yes, I want to… / Not any more.' }, follow: [{ es: '¿Qué haces para conseguirlo?', en: 'What do you do to achieve it?' }, { es: '¿Quién te ayuda?', en: 'Who helps you?' }] },
            { q: { es: '¿Trabajas para pagar algo?', en: 'Do you work to pay for something?' }, help: { es: 'Sí, para pagar mis estudios / mi casa…', en: 'Yes, to pay for my studies / my house…' }, follow: [{ es: '¿Te gusta tu trabajo?', en: 'Do you like your job?' }, { es: '¿Cuántas horas trabajas?', en: 'How many hours do you work?' }] },
            { q: { es: '¿Cantas o tocas un instrumento?', en: 'Do you sing or play an instrument?' }, help: { es: 'Sí, toco… / No, nada.', en: 'Yes, I play… / No, nothing.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Para quién?', en: 'For whom?' }] },
            { q: { es: '¿Fuiste a una boda bonita?', en: 'Have you been to a nice wedding?' }, help: { es: 'Sí, la boda de mi… / No, nunca.', en: 'Yes, my…’s wedding / No, never.' }, follow: [{ es: '¿Dónde fue?', en: 'Where was it?' }, { es: '¿Qué comieron?', en: 'What did you eat?' }] },
          ],
          words: [{ es: 'el turno', en: 'the shift' }, { es: 'el arquitecto', en: 'the architect' }, { es: 'el sueño', en: 'the dream' }, { es: 'el espectáculo', en: 'the show' }, { es: 'la boda', en: 'the wedding' }],
        },
        A2: {
          scene: { es: 'Es la noche de estreno de una ópera nueva. Faltan veinte minutos y la cantante principal está enferma. La suplente no llega: está atrapada en un atasco en el puente. El director busca desesperado a alguien que conozca el papel. Chloe lo conoce de memoria.', en: 'It is opening night of a new opera. Twenty minutes to go and the lead singer is ill. The understudy isn’t arriving: she is stuck in a traffic jam on the bridge. The director is desperately looking for someone who knows the part. Chloe knows it by heart.' },
          opener: { es: 'Llevo meses escuchando los ensayos desde la puerta. Me sé todas las canciones. Pero nunca canté delante de dos mil personas, solo en mi habitación y en clases. Si lo digo, quizás me dejan cantar. Si sale mal, quizás pierdo el trabajo. ¿Tú qué harías?', en: 'I have been listening to the rehearsals from the door for months. I know all the songs. But I have never sung in front of two thousand people, only in my room and in lessons. If I say so, maybe they will let me sing. If it goes wrong, maybe I lose my job. What would you do?' },
          decide: {
            ask: { es: '¿Qué le dices a Chloe?', en: 'What do you tell Chloe?' },
            options: [
              { say: { es: 'Que hable con el director ahora mismo.', en: 'To talk to the director right now.' }, then: { es: 'El director la escucha cantar un minuto y dice: «Vístete. Sales en quince minutos».', en: 'The director listens to her sing for a minute and says: “Get dressed. You go on in fifteen minutes.”' } },
              { say: { es: 'Que espere: quizás la suplente llega a tiempo.', en: 'To wait: maybe the understudy arrives in time.' }, then: { es: 'La suplente llega corriendo, sin maquillaje. Chloe se queda en la puerta.', en: 'The understudy arrives running, without make-up. Chloe stays at the door.' } },
              { say: { es: 'Que llame a su profesora de canto primero.', en: 'To call her singing teacher first.' }, then: { es: 'La profesora grita por teléfono: «¡Ve! ¡Esta es tu oportunidad!».', en: 'The teacher shouts down the phone: “Go! This is your chance!”' } },
            ],
          },
          twist: { es: 'Chloe canta y el público la aplaude de pie. Al día siguiente, la cantante principal se enfada porque un periódico dice que Chloe es mejor. ¿Cómo debería reaccionar Chloe?', en: 'Chloe sings and the audience gives her a standing ovation. The next day, the lead singer is angry because a newspaper says Chloe is better. How should Chloe react?' },
          questions: [
            { q: { es: '¿Hiciste algo importante sin estar preparado?', en: 'Have you done something important without being ready?' }, help: { es: 'Sí, una vez tuve que… / No, siempre me preparo.', en: 'Yes, once I had to… / No, I always prepare.' }, follow: [{ es: '¿Cómo salió?', en: 'How did it go?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Te dan miedo los escenarios?', en: 'Are you scared of stages?' }, help: { es: 'Sí, me pongo muy nervioso. / No, me encanta.', en: 'Yes, I get very nervous. / No, I love it.' }, follow: [{ es: '¿Qué haces para calmarte?', en: 'What do you do to calm down?' }, { es: '¿Hablaste en público alguna vez?', en: 'Have you ever spoken in public?' }] },
            { q: { es: '¿Aprovechaste alguna vez una oportunidad inesperada?', en: 'Have you ever taken an unexpected opportunity?' }, help: { es: 'Sí, cuando… / No, la dejé pasar.', en: 'Yes, when… / No, I let it go.' }, follow: [{ es: '¿Qué cambió?', en: 'What changed?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Cómo reaccionas cuando alguien está celoso de ti?', en: 'How do you react when someone is jealous of you?' }, help: { es: 'Hablo con esa persona / no le hago caso…', en: 'I talk to that person / I ignore it…' }, follow: [{ es: '¿Te pasó en el trabajo?', en: 'Has it happened to you at work?' }, { es: '¿Y tú estuviste celoso?', en: 'And have you been jealous?' }] },
          ],
          words: [{ es: 'el estreno', en: 'the opening night' }, { es: 'la suplente', en: 'the understudy' }, { es: 'el atasco', en: 'the traffic jam' }, { es: 'el ensayo', en: 'the rehearsal' }, { es: 'de memoria', en: 'by heart' }],
        },
        B1: {
          scene: { es: 'La Ópera celebra un aniversario y el gobierno quiere proyectar cada noche, sobre las velas blancas, anuncios de empresas para pagar la renovación. Algunos dicen que es el edificio más famoso del país y no un cartel publicitario. Chloe, ahora cantante del coro, participa en un debate con estudiantes de arquitectura.', en: 'The Opera House is celebrating an anniversary and the government wants to project company adverts onto the white sails every night to pay for the renovation. Some say it is the country’s most famous building, not a billboard. Chloe, now a chorus singer, takes part in a debate with architecture students.' },
          opener: { es: 'Hace unos años proyectaron aquí un anuncio de carreras de caballos y hubo protestas enormes. Por un lado, la renovación cuesta muchísimo y no quiero que suban las entradas, porque entonces solo vienen los ricos. Por otro, si alquilamos el símbolo del país, ¿qué no se puede alquilar? ¿Dónde pondrías tú el límite?', en: 'A few years ago they projected a horse-racing advert here and there were huge protests. On the one hand, the renovation costs a fortune and I don’t want ticket prices to go up, because then only the rich come. On the other, if we rent out the country’s symbol, what can’t be rented out? Where would you draw the line?' },
          decide: {
            ask: { es: '¿Qué postura defiendes en el debate?', en: 'What position do you defend in the debate?' },
            options: [
              { say: { es: 'Nada de anuncios: que pague el Estado, es patrimonio de todos.', en: 'No adverts at all: the state should pay, it belongs to everyone.' }, then: { es: 'Muchos estudiantes aplauden, pero alguien pregunta qué servicio público se recortaría.', en: 'Many students clap, but someone asks which public service would be cut.' } },
              { say: { es: 'Anuncios solo de cultura y causas sociales, nunca de empresas.', en: 'Only adverts for culture and social causes, never companies.' }, then: { es: 'La idea gusta, pero nadie sabe quién decidiría qué es «cultura».', en: 'People like the idea, but nobody knows who would decide what “culture” is.' } },
              { say: { es: 'Aceptar anuncios una noche al mes y usar el dinero en entradas baratas.', en: 'Accept adverts one night a month and use the money for cheap tickets.' }, then: { es: 'Es la propuesta más votada. Los arquitectos, en cambio, la rechazan casi todos.', en: 'It is the most-voted proposal. The architects, however, almost all reject it.' } },
            ],
          },
          twist: { es: 'Una empresa ofrece pagar toda la renovación si el edificio lleva su nombre durante diez años: «Ópera de Sídney, presentada por…». ¿Cambia eso tu postura?', en: 'A company offers to pay for the whole renovation if the building carries its name for ten years: “Sydney Opera House, presented by…”. Does that change your position?' },
          questions: [
            { q: { es: '¿Hay algo que nunca debería tener publicidad?', en: 'Is there anything that should never carry advertising?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Hay un ejemplo en tu ciudad?', en: 'Is there an example in your city?' }, { es: '¿Te molesta?', en: 'Does it bother you?' }] },
            { q: { es: '¿La cultura debería ser gratis o barata?', en: 'Should culture be free or cheap?' }, help: { es: 'Sí, porque… / No, porque los artistas…', en: 'Yes, because… / No, because artists…' }, follow: [{ es: '¿Cuánto pagas por una entrada?', en: 'How much do you pay for a ticket?' }, { es: '¿Te parece justo?', en: 'Do you think it’s fair?' }] },
            { q: { es: '¿Qué edificio es el símbolo de tu país?', en: 'Which building is your country’s symbol?' }, help: { es: 'El símbolo es…', en: 'The symbol is…' }, follow: [{ es: '¿Qué harías si lo usaran para anuncios?', en: 'What would you do if it were used for adverts?' }, { es: '¿Lo visitaste?', en: 'Have you visited it?' }] },
            { q: { es: '¿Aceptarías que un lugar público lleve el nombre de una empresa?', en: 'Would you accept a public place carrying a company’s name?' }, help: { es: 'Si sirve para… / Nunca, porque…', en: 'If it serves to… / Never, because…' }, follow: [{ es: '¿Conoces un estadio o una estación así?', en: 'Do you know a stadium or station like that?' }, { es: '¿La gente usa ese nombre?', en: 'Do people use that name?' }] },
          ],
          words: [{ es: 'proyectar', en: 'to project' }, { es: 'el cartel publicitario', en: 'the billboard' }, { es: 'recortar', en: 'to cut' }, { es: 'el coro', en: 'the chorus / choir' }, { es: 'poner el límite', en: 'to draw the line' }],
        },
      },
    },
    // ------------------------------------------------------------ Bondi beach
    {
      id: 'bondi',
      name: { es: 'La playa de Bondi', en: 'Bondi beach' },
      who: { name: 'Jack', role: { es: 'socorrista', en: 'lifeguard' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa grande. El agua es azul. Hay dos banderas rojas y amarillas. Jack es socorrista. Tiene una tabla y gafas de sol.', en: 'It is a big beach. The water is blue. There are two red and yellow flags. Jack is a lifeguard. He has a board and sunglasses.' },
          opener: { es: '¡Hola! Soy Jack. Nada entre las dos banderas, por favor. Ahí es seguro. ¿Tienes crema de sol?', en: 'Hello! I am Jack. Swim between the two flags, please. It is safe there. Do you have sunscreen?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Me pongo crema.', en: 'I put on sunscreen.' }, then: { es: 'Jack dice: «¡Muy bien! El sol aquí es muy fuerte».', en: 'Jack says: “Very good! The sun here is very strong.”' } },
              { say: { es: 'Nado entre las banderas.', en: 'I swim between the flags.' }, then: { es: 'El agua está fresca. Ves peces pequeños.', en: 'The water is cool. You see small fish.' } },
              { say: { es: 'Duermo en la arena.', en: 'I sleep on the sand.' }, then: { es: 'Te despiertas muy rojo. ¡Ay!', en: 'You wake up very red. Ouch!' } },
            ],
          },
          twist: { es: 'Jack ve a un niño fuera de las banderas. Corre al agua. ¿Qué haces tú?', en: 'Jack sees a child outside the flags. He runs into the water. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta la playa?', en: 'Do you like the beach?' }, help: { es: 'Sí, mucho. / No, prefiero la piscina.', en: 'Yes, a lot. / No, I prefer the pool.' }, follow: [{ es: '¿Qué playa conoces?', en: 'Which beach do you know?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Usas crema de sol?', en: 'Do you use sunscreen?' }, help: { es: 'Sí, siempre. / No, nunca.', en: 'Yes, always. / No, never.' }, follow: [{ es: '¿Te quemas?', en: 'Do you get sunburnt?' }, { es: '¿Usas gorra?', en: 'Do you wear a cap?' }] },
            { q: { es: '¿Nadas bien?', en: 'Do you swim well?' }, help: { es: 'Sí, muy bien. / Un poco.', en: 'Yes, very well. / A little.' }, follow: [{ es: '¿En el mar o en la piscina?', en: 'In the sea or in the pool?' }, { es: '¿Quién te enseñó?', en: 'Who taught you?' }] },
            { q: { es: '¿Qué llevas a la playa?', en: 'What do you take to the beach?' }, help: { es: 'Llevo una toalla, agua…', en: 'I take a towel, water…' }, follow: [{ es: '¿Llevas comida?', en: 'Do you take food?' }, { es: '¿Y un libro?', en: 'And a book?' }] },
          ],
          words: [{ es: 'el socorrista', en: 'the lifeguard' }, { es: 'la bandera', en: 'the flag' }, { es: 'la crema de sol', en: 'sunscreen' }, { es: 'seguro', en: 'safe' }, { es: 'la arena', en: 'the sand' }],
        },
        A1: {
          scene: { es: 'Son las seis de la mañana. Un grupo de personas mayores nada en una piscina de agua de mar al lado de las rocas. Jack prepara la torre de socorristas. Hay muchos surfistas y un fotógrafo.', en: 'It is six in the morning. A group of older people are swimming in a seawater pool next to the rocks. Jack is setting up the lifeguard tower. There are lots of surfers and a photographer.' },
          opener: { es: 'Trabajo aquí desde hace ocho años. En verano rescatamos a veinte personas en un solo día, casi todas turistas. El peligro no son los tiburones: son las corrientes. El agua parece tranquila, pero te lleva hacia dentro. ¿Tú sabes qué hacer en una corriente?', en: 'I have worked here for eight years. In summer we rescue twenty people in a single day, almost all of them tourists. The danger isn’t the sharks: it’s the rip currents. The water looks calm, but it pulls you out. Do you know what to do in a rip current?' },
          decide: {
            ask: { es: 'Jack te explica qué hacer en una corriente. ¿Qué crees que es correcto?', en: 'Jack explains what to do in a rip current. What do you think is right?' },
            options: [
              { say: { es: 'Nadar fuerte hacia la playa.', en: 'Swim hard towards the beach.' }, then: { es: 'Jack dice: «No. Así te cansas y es más peligroso».', en: 'Jack says: “No. That way you get tired and it’s more dangerous.”' } },
              { say: { es: 'Flotar, levantar la mano y esperar.', en: 'Float, raise your hand and wait.' }, then: { es: '«¡Exacto! Flotas, levantas la mano y vamos a buscarte».', en: '“Exactly! You float, raise your hand and we come and get you.”' } },
              { say: { es: 'Nadar hacia un lado, paralelo a la playa.', en: 'Swim to the side, parallel to the beach.' }, then: { es: '«También está bien, si nadas bien. Pero primero, calma».', en: '“That’s fine too, if you swim well. But first, stay calm.”' } },
            ],
          },
          twist: { es: 'Un turista quiere nadar fuera de las banderas porque hay menos gente. Jack está ocupado. ¿Qué le dices al turista?', en: 'A tourist wants to swim outside the flags because there are fewer people. Jack is busy. What do you tell the tourist?' },
          questions: [
            { q: { es: '¿Viste un rescate alguna vez?', en: 'Have you ever seen a rescue?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Ayudaste?', en: 'Did you help?' }] },
            { q: { es: '¿Qué animal del mar te da miedo?', en: 'Which sea animal scares you?' }, help: { es: 'Me dan miedo los tiburones / las medusas…', en: 'Sharks / jellyfish scare me…' }, follow: [{ es: '¿Viste uno?', en: 'Have you seen one?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Te levantas temprano para hacer deporte?', en: 'Do you get up early to exercise?' }, help: { es: 'Sí, a las… / No, prefiero la tarde.', en: 'Yes, at… / No, I prefer the afternoon.' }, follow: [{ es: '¿Qué deporte?', en: 'Which sport?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Haces caso a las reglas en la playa?', en: 'Do you follow the rules at the beach?' }, help: { es: 'Sí, siempre. / Casi siempre.', en: 'Yes, always. / Almost always.' }, follow: [{ es: '¿Qué regla no te gusta?', en: 'Which rule don’t you like?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'rescatar', en: 'to rescue' }, { es: 'la corriente', en: 'the rip current' }, { es: 'el tiburón', en: 'the shark' }, { es: 'flotar', en: 'to float' }, { es: 'la torre', en: 'the tower' }],
        },
        A2: {
          scene: { es: 'Es un día de mucho calor y la playa está llena: unas cuarenta mil personas. Un programa de televisión graba a los socorristas para una serie famosa. Una cámara sigue a Jack todo el día. Él odia salir en la tele.', en: 'It is a very hot day and the beach is packed: about forty thousand people. A TV programme is filming the lifeguards for a famous series. A camera follows Jack all day. He hates being on TV.' },
          opener: { es: 'La serie es buena para la playa: la gente aprende las reglas. Pero yo no soy actor. Ayer rescaté a una chica y, en vez de preguntarle cómo estaba, el cámara le puso el micrófono en la cara. Ella lloraba. Desde entonces, cada vez que veo la cámara me pongo nervioso. ¿A ti te gustaría salir en la tele?', en: 'The series is good for the beach: people learn the rules. But I am not an actor. Yesterday I rescued a girl and, instead of asking her how she was, the cameraman put the microphone in her face. She was crying. Since then, every time I see the camera I get nervous. Would you like to be on TV?' },
          decide: {
            ask: { es: 'El productor quiere grabar a Jack en un rescate hoy. ¿Qué le aconsejas a Jack?', en: 'The producer wants to film Jack in a rescue today. What do you advise Jack?' },
            options: [
              { say: { es: 'Que hable con el productor y ponga reglas claras.', en: 'To talk to the producer and set clear rules.' }, then: { es: 'El productor acepta no grabar caras sin permiso. Jack trabaja más tranquilo.', en: 'The producer agrees not to film faces without permission. Jack works more calmly.' } },
              { say: { es: 'Que pida no salir más en la serie.', en: 'To ask not to appear in the series any more.' }, then: { es: 'Lo cambian a otra torre. Sus compañeros dicen que es una pena: el público lo adora.', en: 'They move him to another tower. His colleagues say it’s a shame: the public loves him.' } },
              { say: { es: 'Que ignore la cámara y haga su trabajo.', en: 'To ignore the camera and do his job.' }, then: { es: 'Funciona hasta que un turista lo reconoce y le pide una foto en pleno rescate.', en: 'It works until a tourist recognises him and asks for a photo in the middle of a rescue.' } },
            ],
          },
          twist: { es: 'La chica rescatada escribe a la serie: quiere que borren su imagen. El productor dice que ya firmó un papel en la playa, mojada y asustada. ¿Es justo?', en: 'The rescued girl writes to the series: she wants her image deleted. The producer says she already signed a form on the beach, wet and scared. Is it fair?' },
          questions: [
            { q: { es: '¿Te gustaría salir en la tele?', en: 'Would you like to be on TV?' }, help: { es: 'Sí, en un programa de… / No, nunca.', en: 'Yes, on a… show / No, never.' }, follow: [{ es: '¿Saliste alguna vez?', en: 'Have you ever been on it?' }, { es: '¿Qué programa ves?', en: 'What programme do you watch?' }] },
            { q: { es: '¿Firmaste algo sin leerlo?', en: 'Have you signed something without reading it?' }, help: { es: 'Sí, muchas veces en internet… / No, siempre leo.', en: 'Yes, many times online… / No, I always read.' }, follow: [{ es: '¿Tuviste problemas?', en: 'Did you have problems?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué haces en un lugar con demasiada gente?', en: 'What do you do in a place with too many people?' }, help: { es: 'Me voy / me pongo nervioso / me da igual…', en: 'I leave / I get nervous / I don’t mind…' }, follow: [{ es: '¿Cuál fue el lugar más lleno donde estuviste?', en: 'What was the most crowded place you have been?' }, { es: '¿Por qué fuiste?', en: 'Why did you go?' }] },
            { q: { es: '¿Los programas de realidad ayudan o molestan?', en: 'Do reality shows help or bother?' }, help: { es: 'A veces enseñan… pero también…', en: 'Sometimes they teach… but also…' }, follow: [{ es: '¿Cuál conoces?', en: 'Which one do you know?' }, { es: '¿Participarías?', en: 'Would you take part?' }] },
          ],
          words: [{ es: 'grabar', en: 'to film' }, { es: 'el productor', en: 'the producer' }, { es: 'el permiso', en: 'permission' }, { es: 'borrar', en: 'to delete' }, { es: 'asustado', en: 'scared' }],
        },
        B1: {
          scene: { es: 'Después de varios ataques de tiburones en la costa este, el gobierno quiere volver a instalar redes en las playas. Las redes protegen a los bañistas, pero también matan delfines, tortugas y ballenas pequeñas. Jack, ahora jefe de socorristas, tiene que dar su opinión en un comité.', en: 'After several shark attacks on the east coast, the government wants to reinstall nets on the beaches. The nets protect swimmers, but they also kill dolphins, turtles and small whales. Jack, now head lifeguard, has to give his opinion to a committee.' },
          opener: { es: 'Los datos dicen que los ataques son rarísimos: muere más gente por ahogarse en una corriente en un mes que por tiburones en diez años. Pero el miedo no lee estadísticas. Si no ponemos redes y hay un ataque, la culpa es nuestra. Si las ponemos, cada semana sacamos animales muertos que nadie quería matar. ¿Cómo se decide cuando el miedo pesa más que los datos?', en: 'The data says attacks are extremely rare: more people drown in rip currents in one month than die from sharks in ten years. But fear doesn’t read statistics. If we don’t put nets in and there is an attack, it’s our fault. If we do, every week we pull out dead animals nobody wanted to kill. How do you decide when fear weighs more than data?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Jack para el comité?', en: 'What do you recommend Jack tells the committee?' },
            options: [
              { say: { es: 'Rechazar las redes y usar drones y alarmas.', en: 'Reject the nets and use drones and alarms.' }, then: { es: 'El comité aprueba una prueba de un año. Algunos vecinos dicen que es un experimento con sus hijos.', en: 'The committee approves a one-year trial. Some residents say it’s an experiment with their children.' } },
              { say: { es: 'Aceptar las redes solo en verano y en las playas más llenas.', en: 'Accept the nets only in summer and on the busiest beaches.' }, then: { es: 'Mueren menos animales, pero los ecologistas siguen en contra.', en: 'Fewer animals die, but environmentalists are still against it.' } },
              { say: { es: 'Invertir el dinero en enseñar a nadar y en más socorristas.', en: 'Invest the money in swimming lessons and more lifeguards.' }, then: { es: 'Es lo más eficaz según los datos, pero los políticos dicen que «no se ve» en la tele.', en: 'It is the most effective according to the data, but politicians say it “doesn’t show” on TV.' } },
            ],
          },
          twist: { es: 'El día antes del comité, un surfista amigo de Jack es mordido por un tiburón. Sobrevive, pero pierde una pierna. Su familia pide redes. ¿Debería Jack cambiar de opinión?', en: 'The day before the committee, a surfer friend of Jack’s is bitten by a shark. He survives, but loses a leg. His family is calling for nets. Should Jack change his mind?' },
          questions: [
            { q: { es: '¿Tienes miedos que sabes que no son lógicos?', en: 'Do you have fears you know aren’t logical?' }, help: { es: 'Sí, me da miedo… aunque sé que…', en: 'Yes, I’m scared of… even though I know…' }, follow: [{ es: '¿De dónde viene ese miedo?', en: 'Where does that fear come from?' }, { es: '¿Intentaste superarlo?', en: 'Have you tried to overcome it?' }] },
            { q: { es: '¿Los políticos deciden por datos o por emociones?', en: 'Do politicians decide by data or by emotion?' }, help: { es: 'Muchas veces por… porque…', en: 'Often by… because…' }, follow: [{ es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }, { es: '¿Debería ser distinto?', en: 'Should it be different?' }] },
            { q: { es: '¿Proteger a las personas justifica dañar a los animales?', en: 'Does protecting people justify harming animals?' }, help: { es: 'Depende de… / No, porque hay otras maneras…', en: 'It depends on… / No, because there are other ways…' }, follow: [{ es: '¿Dónde está tu límite?', en: 'Where is your limit?' }, { es: '¿Y en tu ciudad?', en: 'And in your city?' }] },
            { q: { es: '¿Una experiencia personal puede cambiar una opinión basada en datos?', en: 'Can a personal experience change an opinion based on data?' }, help: { es: 'Sí, porque… / Debería no, pero…', en: 'Yes, because… / It shouldn’t, but…' }, follow: [{ es: '¿Te pasó a ti?', en: 'Has it happened to you?' }, { es: '¿Qué cambiaste?', en: 'What did you change?' }] },
          ],
          words: [{ es: 'la red', en: 'the net' }, { es: 'el bañista', en: 'the swimmer' }, { es: 'ahogarse', en: 'to drown' }, { es: 'la estadística', en: 'the statistic' }, { es: 'morder', en: 'to bite' }],
        },
      },
    },
    // ------------------------------------------------------------ the Manly ferry
    {
      id: 'ferry',
      name: { es: 'El ferry de Manly', en: 'The Manly ferry' },
      who: { name: 'Ahmed', role: { es: 'marinero del ferry', en: 'ferry deckhand' } },
      levels: {
        A0: {
          scene: { es: 'Es un barco verde y amarillo. Cruza el puerto de Sídney. Se ven la Ópera y un puente muy grande. Ahmed trabaja en el barco.', en: 'It is a green and yellow boat. It crosses Sydney harbour. You can see the Opera House and a very big bridge. Ahmed works on the boat.' },
          opener: { es: '¡Hola! Soy Ahmed. El viaje a Manly es de treinta minutos. Siéntate fuera: ¡las vistas son preciosas!', en: 'Hello! I am Ahmed. The trip to Manly is thirty minutes. Sit outside: the views are beautiful!' },
          decide: {
            ask: { es: '¿Dónde te sientas?', en: 'Where do you sit?' },
            options: [
              { say: { es: 'Fuera, al sol.', en: 'Outside, in the sun.' }, then: { es: 'Ves la Ópera y el puente. ¡Qué bonito!', en: 'You see the Opera House and the bridge. How beautiful!' } },
              { say: { es: 'Dentro, con un café.', en: 'Inside, with a coffee.' }, then: { es: 'El café está caliente. Ves el mar por la ventana.', en: 'The coffee is hot. You see the sea through the window.' } },
              { say: { es: 'Adelante, en la punta del barco.', en: 'At the front, at the tip of the boat.' }, then: { es: 'Hay olas. ¡Te mojas un poco!', en: 'There are waves. You get a bit wet!' } },
            ],
          },
          twist: { es: 'Ahmed dice: «¡Mira! ¡Delfines!». ¿Qué haces?', en: 'Ahmed says: “Look! Dolphins!” What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, mucho. / No, me mareo.', en: 'Yes, a lot. / No, I get seasick.' }, follow: [{ es: '¿Viajaste en barco?', en: 'Have you travelled by boat?' }, { es: '¿Adónde?', en: 'Where to?' }] },
            { q: { es: '¿Cómo vas al trabajo?', en: 'How do you go to work?' }, help: { es: 'Voy en autobús / en coche / a pie…', en: 'I go by bus / by car / on foot…' }, follow: [{ es: '¿Cuánto tiempo tardas?', en: 'How long does it take?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Hay un puente famoso en tu ciudad?', en: 'Is there a famous bridge in your city?' }, help: { es: 'Sí, el puente… / No.', en: 'Yes, the… bridge / No.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Cruzas el puente?', en: 'Do you cross the bridge?' }] },
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, todos los días. / No, tomo té.', en: 'Yes, every day. / No, I drink tea.' }, follow: [{ es: '¿Cuántos?', en: 'How many?' }, { es: '¿Con leche?', en: 'With milk?' }] },
          ],
          words: [{ es: 'el barco', en: 'the boat' }, { es: 'el puente', en: 'the bridge' }, { es: 'cruzar', en: 'to cross' }, { es: 'mojarse', en: 'to get wet' }, { es: 'el delfín', en: 'the dolphin' }],
        },
        A1: {
          scene: { es: 'Es lunes a las ocho. El ferry va lleno de gente que va a trabajar: trajes, mochilas, perros, bicicletas. Ahmed ata el barco al muelle con una cuerda gruesa. Llegó a Australia desde Egipto hace diez años.', en: 'It is Monday at eight. The ferry is full of people going to work: suits, backpacks, dogs, bikes. Ahmed ties the boat to the wharf with a thick rope. He came to Australia from Egypt ten years ago.' },
          opener: { es: 'En Alejandría mi padre tenía un barco de pesca. Aquí no conocía a nadie y trabajé lavando platos un año. Un día vi un anuncio: buscaban marineros para el ferry. Ahora cruzo el puerto más bonito del mundo diez veces al día. ¿Cómo vas tú al trabajo o a clase?', en: 'In Alexandria my father had a fishing boat. Here I didn’t know anyone and I worked washing dishes for a year. One day I saw an advert: they were looking for deckhands for the ferry. Now I cross the most beautiful harbour in the world ten times a day. How do you get to work or class?' },
          decide: {
            ask: { es: 'Un pasajero dejó una mochila en el asiento y bajó. ¿Qué haces?', en: 'A passenger left a backpack on the seat and got off. What do you do?' },
            options: [
              { say: { es: 'Se la doy a Ahmed.', en: 'I give it to Ahmed.' }, then: { es: 'Ahmed llama por radio. El pasajero vuelve corriendo en el siguiente ferry.', en: 'Ahmed calls on the radio. The passenger comes back running on the next ferry.' } },
              { say: { es: 'Busco un nombre dentro.', en: 'I look for a name inside.' }, then: { es: 'Encuentras una tarjeta de un hospital. Ahmed llama al hospital.', en: 'You find a card from a hospital. Ahmed calls the hospital.' } },
              { say: { es: 'Corro detrás del pasajero.', en: 'I run after the passenger.' }, then: { es: 'El barco ya sale. ¡Casi te quedas en el muelle!', en: 'The boat is already leaving. You almost stay on the wharf!' } },
            ],
          },
          twist: { es: 'Ahmed dice que la ciudad quiere cambiar los ferrys viejos por barcos rápidos sin espacio fuera. ¿Qué piensas?', en: 'Ahmed says the city wants to replace the old ferries with fast boats with no outside space. What do you think?' },
          questions: [
            { q: { es: '¿Cómo vas al trabajo o a clase?', en: 'How do you get to work or class?' }, help: { es: 'Voy en… y tardo…', en: 'I go by… and it takes…' }, follow: [{ es: '¿Qué haces en el viaje?', en: 'What do you do on the way?' }, { es: '¿Cambiarías algo?', en: 'Would you change anything?' }] },
            { q: { es: '¿Cuál fue tu primer trabajo?', en: 'What was your first job?' }, help: { es: 'Mi primer trabajo fue…', en: 'My first job was…' }, follow: [{ es: '¿Te gustaba?', en: 'Did you like it?' }, { es: '¿Cuánto tiempo trabajaste?', en: 'How long did you work there?' }] },
            { q: { es: '¿Perdiste algo en un transporte?', en: 'Have you lost something on public transport?' }, help: { es: 'Sí, una vez me dejé el… / No, nunca.', en: 'Yes, once I left my… / No, never.' }, follow: [{ es: '¿Lo encontraste?', en: 'Did you find it?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Conoces a alguien que empezó de cero en otro país?', en: 'Do you know someone who started from scratch in another country?' }, help: { es: 'Sí, mi… / No.', en: 'Yes, my… / No.' }, follow: [{ es: '¿Cómo le fue?', en: 'How did it go for them?' }, { es: '¿Qué fue lo más difícil?', en: 'What was hardest?' }] },
          ],
          words: [{ es: 'el muelle', en: 'the wharf' }, { es: 'la cuerda', en: 'the rope' }, { es: 'el marinero', en: 'the deckhand / sailor' }, { es: 'el pasajero', en: 'the passenger' }, { es: 'atar', en: 'to tie' }],
        },
        A2: {
          scene: { es: 'Es la noche de Fin de Año. El puerto está lleno de barcos y a medianoche empiezan los fuegos artificiales sobre el puente. El ferry de Ahmed hace el último viaje con cuatrocientas personas. Una señora mayor se siente mal justo cuando empiezan los fuegos.', en: 'It is New Year’s Eve. The harbour is full of boats and at midnight the fireworks begin over the bridge. Ahmed’s ferry is making its last trip with four hundred people. An elderly lady feels unwell just as the fireworks start.' },
          opener: { es: 'Es mi décimo Fin de Año en el barco. Nunca vi los fuegos tranquilo: siempre hay algo. El año pasado un hombre se cayó al agua por sacar una foto. Este año prometí a mi hija que la llamaría a medianoche. Y ahora esta señora está muy pálida. ¿Qué hacemos primero?', en: 'It is my tenth New Year’s Eve on the boat. I have never watched the fireworks in peace: there is always something. Last year a man fell into the water taking a photo. This year I promised my daughter I would call her at midnight. And now this lady is very pale. What do we do first?' },
          decide: {
            ask: { es: '¿Cómo ayudas?', en: 'How do you help?' },
            options: [
              { say: { es: 'Llevo a la señora dentro, donde hay menos ruido.', en: 'I take the lady inside, where it’s less noisy.' }, then: { es: 'Dentro respira mejor. Dice que el ruido la asustó.', en: 'Inside she breathes better. She says the noise scared her.' } },
              { say: { es: 'Busco a un médico entre los pasajeros.', en: 'I look for a doctor among the passengers.' }, then: { es: 'Una enfermera de vacaciones se ofrece. Toma el pulso y dice que no es grave.', en: 'A nurse on holiday offers to help. She takes her pulse and says it isn’t serious.' } },
              { say: { es: 'Le pido a Ahmed que llame a la ambulancia del muelle.', en: 'I ask Ahmed to call the ambulance at the wharf.' }, then: { es: 'La ambulancia espera en Manly. La señora llega bien y les da las gracias a todos.', en: 'The ambulance waits at Manly. The lady arrives fine and thanks everyone.' } },
            ],
          },
          twist: { es: 'Todo termina bien, pero Ahmed no llamó a su hija a medianoche. Ella está triste. ¿Qué debería decirle?', en: 'Everything ends well, but Ahmed didn’t call his daughter at midnight. She is sad. What should he tell her?' },
          questions: [
            { q: { es: '¿Cómo celebraste el último Fin de Año?', en: 'How did you celebrate last New Year’s Eve?' }, help: { es: 'Lo pasé en… con…', en: 'I spent it in… with…' }, follow: [{ es: '¿Hubo fuegos artificiales?', en: 'Were there fireworks?' }, { es: '¿Qué comiste?', en: 'What did you eat?' }] },
            { q: { es: '¿Trabajaste en un día de fiesta?', en: 'Have you worked on a public holiday?' }, help: { es: 'Sí, en Navidad… / No, nunca.', en: 'Yes, at Christmas… / No, never.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Te pagaron más?', en: 'Were you paid more?' }] },
            { q: { es: '¿Rompiste una promesa sin querer?', en: 'Have you broken a promise without meaning to?' }, help: { es: 'Sí, prometí… pero…', en: 'Yes, I promised… but…' }, follow: [{ es: '¿Qué hiciste después?', en: 'What did you do afterwards?' }, { es: '¿Te perdonaron?', en: 'Were you forgiven?' }] },
            { q: { es: '¿Te gustan los fuegos artificiales?', en: 'Do you like fireworks?' }, help: { es: 'Sí, son preciosos. / No, hacen mucho ruido.', en: 'Yes, they’re beautiful. / No, they’re too loud.' }, follow: [{ es: '¿Y a los animales?', en: 'And for animals?' }, { es: '¿Deberían prohibirse?', en: 'Should they be banned?' }] },
          ],
          words: [{ es: 'Fin de Año', en: 'New Year’s Eve' }, { es: 'los fuegos artificiales', en: 'fireworks' }, { es: 'pálido', en: 'pale' }, { es: 'la enfermera', en: 'the nurse' }, { es: 'el pulso', en: 'the pulse' }],
        },
        B1: {
          scene: { es: 'La empresa de ferrys pasa a manos privadas. El nuevo dueño quiere reducir tripulación, cobrar más a los turistas que a los vecinos y eliminar los viajes de noche, que pierden dinero. Ahmed, como representante de los trabajadores, tiene que negociar. Muchos vecinos de Manly dependen del ferry de noche para volver del trabajo en hospitales y restaurantes.', en: 'The ferry company is being privatised. The new owner wants to cut crew, charge tourists more than locals and scrap the night services, which lose money. Ahmed, as the workers’ representative, has to negotiate. Many Manly residents depend on the night ferry to get home from work in hospitals and restaurants.' },
          opener: { es: 'El dueño tiene razón en una cosa: el barco de las once de la noche va casi vacío. Pero en ese barco va la enfermera que salió de su turno, el cocinero que cerró el restaurante. Para ellos no hay otro camino: el autobús tarda una hora y media. Un servicio público no se mide solo por los pasajeros que lleva. ¿O sí?', en: 'The owner is right about one thing: the eleven o’clock boat is almost empty. But on that boat is the nurse who has just finished her shift, the cook who has closed the restaurant. For them there is no other way: the bus takes an hour and a half. A public service isn’t measured only by the passengers it carries. Or is it?' },
          decide: {
            ask: { es: '¿Qué propuesta debería llevar Ahmed a la negociación?', en: 'What proposal should Ahmed take to the negotiation?' },
            options: [
              { say: { es: 'Aceptar precios más altos para turistas si se mantienen los viajes de noche.', en: 'Accept higher prices for tourists if the night services stay.' }, then: { es: 'El dueño acepta. Algunas agencias de turismo se quejan de discriminación.', en: 'The owner agrees. Some tourist agencies complain of discrimination.' } },
              { say: { es: 'Pedir al gobierno que pague los viajes de noche como servicio esencial.', en: 'Ask the government to fund the night services as essential.' }, then: { es: 'El gobierno acepta pagar dos años. Después, nadie sabe.', en: 'The government agrees to pay for two years. After that, nobody knows.' } },
              { say: { es: 'Proponer barcos más pequeños y baratos para la noche.', en: 'Propose smaller, cheaper boats for the night.' }, then: { es: 'Es una buena solución técnica, pero se necesitan dos marineros menos. Los compañeros de Ahmed se enfadan.', en: 'It is a good technical solution, but it needs two fewer deckhands. Ahmed’s colleagues are angry.' } },
            ],
          },
          twist: { es: 'El dueño le ofrece a Ahmed, en privado, un puesto de jefe con el doble de sueldo si acepta el plan original. ¿Qué debería hacer con esa oferta?', en: 'The owner privately offers Ahmed a manager’s job at double the pay if he accepts the original plan. What should he do with that offer?' },
          questions: [
            { q: { es: '¿Un servicio público debe dar beneficios?', en: 'Should a public service make a profit?' }, help: { es: 'No, porque… / Sí, al menos debe…', en: 'No, because… / Yes, at least it should…' }, follow: [{ es: '¿Qué servicio de tu ciudad funciona mal?', en: 'Which service in your city works badly?' }, { es: '¿Quién debería pagarlo?', en: 'Who should pay for it?' }] },
            { q: { es: '¿Es justo que los turistas paguen más que los vecinos?', en: 'Is it fair for tourists to pay more than locals?' }, help: { es: 'Sí, porque los vecinos ya pagan impuestos… / No, porque…', en: 'Yes, because locals already pay taxes… / No, because…' }, follow: [{ es: '¿Pagaste más alguna vez por ser turista?', en: 'Have you ever paid more for being a tourist?' }, { es: '¿Te molestó?', en: 'Did it bother you?' }] },
            { q: { es: '¿Qué harías con una oferta personal a cambio de traicionar al grupo?', en: 'What would you do with a personal offer in exchange for betraying the group?' }, help: { es: 'La rechazaría y lo contaría… / La pensaría porque…', en: 'I would refuse and tell… / I would think about it because…' }, follow: [{ es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Quién trabaja de noche en tu ciudad y cómo vuelve a casa?', en: 'Who works at night in your city and how do they get home?' }, help: { es: 'Las enfermeras, los cocineros… vuelven en…', en: 'Nurses, cooks… go home by…' }, follow: [{ es: '¿Es seguro?', en: 'Is it safe?' }, { es: '¿Qué mejorarías?', en: 'What would you improve?' }] },
          ],
          words: [{ es: 'la tripulación', en: 'the crew' }, { es: 'el representante', en: 'the representative' }, { es: 'esencial', en: 'essential' }, { es: 'el beneficio', en: 'the profit' }, { es: 'traicionar', en: 'to betray' }],
        },
      },
    },
    // ------------------------------------------------------------ the fish market
    {
      id: 'pescado',
      name: { es: 'El mercado de pescado de Sídney', en: 'The Sydney Fish Market' },
      who: { name: 'Mei', role: { es: 'subastadora de pescado', en: 'fish auctioneer' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado grande al lado del agua. Hay gambas, ostras y pescados de muchos colores. Mei trabaja aquí. Tiene botas blancas.', en: 'It is a big market by the water. There are prawns, oysters and fish of many colours. Mei works here. She has white boots.' },
          opener: { es: '¡Hola! Soy Mei. Aquí hay pescado fresco del mar de Australia. ¿Qué quieres comer?', en: 'Hello! I am Mei. Here there is fresh fish from the Australian sea. What do you want to eat?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'Gambas grandes.', en: 'Big prawns.' }, then: { es: 'Las gambas son rosas y muy grandes. ¡Qué ricas!', en: 'The prawns are pink and very big. How tasty!' } },
              { say: { es: 'Pescado con patatas fritas.', en: 'Fish and chips.' }, then: { es: 'Comes fuera. Una gaviota mira tus patatas.', en: 'You eat outside. A seagull watches your chips.' } },
              { say: { es: 'Sushi.', en: 'Sushi.' }, then: { es: 'Mei dice: «Mi madre hace el sushi. ¡Es el mejor!».', en: 'Mei says: “My mother makes the sushi. It’s the best!”' } },
            ],
          },
          twist: { es: 'Una gaviota grande roba una gamba de tu plato. ¿Qué haces?', en: 'A big seagull steals a prawn from your plate. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta el marisco?', en: 'Do you like seafood?' }, help: { es: 'Sí, mucho. / No, no me gusta.', en: 'Yes, a lot. / No, I don’t like it.' }, follow: [{ es: '¿Qué marisco?', en: 'Which seafood?' }, { es: '¿Dónde lo comes?', en: 'Where do you eat it?' }] },
            { q: { es: '¿Comes sushi?', en: 'Do you eat sushi?' }, help: { es: 'Sí, me encanta. / No, nunca.', en: 'Yes, I love it. / No, never.' }, follow: [{ es: '¿Con palillos?', en: 'With chopsticks?' }, { es: '¿Cuál te gusta?', en: 'Which do you like?' }] },
            { q: { es: '¿Comes fuera o en casa?', en: 'Do you eat out or at home?' }, help: { es: 'Normalmente en casa. / Fuera, a veces.', en: 'Usually at home. / Out, sometimes.' }, follow: [{ es: '¿Dónde comes fuera?', en: 'Where do you eat out?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Hay muchas gaviotas donde vives?', en: 'Are there many seagulls where you live?' }, help: { es: 'Sí, muchas. / No, ninguna.', en: 'Yes, many. / No, none.' }, follow: [{ es: '¿Qué pájaros hay?', en: 'What birds are there?' }, { es: '¿Te gustan?', en: 'Do you like them?' }] },
          ],
          words: [{ es: 'las gambas', en: 'prawns' }, { es: 'el marisco', en: 'seafood' }, { es: 'fresco', en: 'fresh' }, { es: 'las botas', en: 'the boots' }, { es: 'robar', en: 'to steal' }],
        },
        A1: {
          scene: { es: 'Son las cinco y media de la mañana. En una sala fría, cientos de cajas de pescado esperan la subasta. Los compradores miran una pantalla grande: el precio baja cada segundo y el primero que aprieta el botón se lleva la caja. Mei controla la subasta.', en: 'It is half past five in the morning. In a cold room, hundreds of boxes of fish wait for the auction. The buyers watch a big screen: the price drops every second and the first to press the button gets the box. Mei runs the auction.' },
          opener: { es: 'Es una subasta al revés: el precio empieza alto y baja. Si esperas, pagas menos, pero otro puede comprar antes. Los cocineros de los mejores restaurantes vienen cada mañana. Mis padres vinieron de China y vendían pescado en la calle. Ahora yo controlo esta pantalla. ¿Tú esperas o compras rápido?', en: 'It is a reverse auction: the price starts high and goes down. If you wait, you pay less, but someone else may buy first. Chefs from the best restaurants come every morning. My parents came from China and sold fish in the street. Now I run this screen. Do you wait or buy fast?' },
          decide: {
            ask: { es: 'Mei te deja comprar una caja de salmón. El precio baja. ¿Cuándo aprietas?', en: 'Mei lets you buy a box of salmon. The price is dropping. When do you press?' },
            options: [
              { say: { es: 'Ahora, aunque es caro.', en: 'Now, even though it’s expensive.' }, then: { es: 'Compras la caja. Un cocinero te mira enfadado: él la quería.', en: 'You buy the box. A chef looks at you angrily: he wanted it.' } },
              { say: { es: 'Espero un poco más.', en: 'I wait a bit longer.' }, then: { es: 'Otra persona aprieta antes. Pierdes la caja.', en: 'Someone else presses first. You lose the box.' } },
              { say: { es: 'Le pido consejo a Mei.', en: 'I ask Mei for advice.' }, then: { es: 'Mei dice: «Ahora». Compras a buen precio. ¡Perfecto!', en: 'Mei says: “Now.” You buy at a good price. Perfect!' } },
            ],
          },
          twist: { es: 'Un comprador dice que el pescado de una caja no es fresco. Mei lo mira y no está segura. ¿Qué debería hacer?', en: 'A buyer says the fish in one box isn’t fresh. Mei looks and isn’t sure. What should she do?' },
          questions: [
            { q: { es: '¿Esperas las rebajas o compras enseguida?', en: 'Do you wait for the sales or buy straight away?' }, help: { es: 'Espero las rebajas. / Compro enseguida.', en: 'I wait for the sales. / I buy straight away.' }, follow: [{ es: '¿Qué compraste en rebajas?', en: 'What did you buy in the sales?' }, { es: '¿Perdiste algo por esperar?', en: 'Did you lose something by waiting?' }] },
            { q: { es: '¿Qué hacían tus padres o abuelos de jóvenes?', en: 'What did your parents or grandparents do when they were young?' }, help: { es: 'Mi padre trabajaba en… / Mi abuela vendía…', en: 'My father worked in… / My grandmother sold…' }, follow: [{ es: '¿Era duro?', en: 'Was it hard?' }, { es: '¿Y tú qué haces?', en: 'And what do you do?' }] },
            { q: { es: '¿Viste una subasta alguna vez?', en: 'Have you ever seen an auction?' }, help: { es: 'Sí, en la tele / en internet… / No.', en: 'Yes, on TV / online… / No.' }, follow: [{ es: '¿Qué vendían?', en: 'What were they selling?' }, { es: '¿Compraste algo?', en: 'Did you buy anything?' }] },
            { q: { es: '¿Cómo sabes si el pescado es fresco?', en: 'How do you know if fish is fresh?' }, help: { es: 'Miro los ojos / huelo…', en: 'I look at the eyes / I smell…' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Compras pescado?', en: 'Do you buy fish?' }] },
          ],
          words: [{ es: 'la subasta', en: 'the auction' }, { es: 'el comprador', en: 'the buyer' }, { es: 'apretar', en: 'to press' }, { es: 'al revés', en: 'in reverse' }, { es: 'la pantalla', en: 'the screen' }],
        },
        A2: {
          scene: { es: 'Es Viernes Santo, el día de más trabajo del año en el mercado: miles de personas compran pescado para la fiesta. La fila llega hasta la calle. A las diez se rompe la máquina de hielo y hace treinta y cinco grados. Mei tiene que decidir rápido.', en: 'It is Good Friday, the busiest day of the year at the market: thousands of people buy fish for the holiday. The queue stretches into the street. At ten the ice machine breaks and it is thirty-five degrees. Mei has to decide fast.' },
          opener: { es: 'Sin hielo, el pescado aguanta unas dos horas con este calor. El técnico tarda tres. Podemos bajar los precios y venderlo todo rápido, pero perdemos dinero. O podemos cerrar una parte del mercado. Cuando era niña, ayudaba a mi madre en un día así y me acuerdo de que ella nunca perdía la calma. ¿Tú qué harías?', en: 'Without ice, the fish lasts about two hours in this heat. The technician will take three. We can lower prices and sell everything fast, but we lose money. Or we can close part of the market. When I was a girl I helped my mother on a day like this and I remember she never lost her cool. What would you do?' },
          decide: {
            ask: { es: '¿Qué le propones a Mei?', en: 'What do you suggest to Mei?' },
            options: [
              { say: { es: 'Bajar los precios a la mitad y anunciarlo por megáfono.', en: 'Halve the prices and announce it over the megaphone.' }, then: { es: 'La fila se vuelve una locura, pero en una hora y media no queda nada.', en: 'The queue goes crazy, but in an hour and a half nothing is left.' } },
              { say: { es: 'Pedir hielo a los restaurantes y bares del barrio.', en: 'Ask the neighbourhood restaurants and bars for ice.' }, then: { es: 'Llegan bolsas de hielo de todas partes. Mei les regala pescado a cambio.', en: 'Bags of ice arrive from everywhere. Mei gives them fish in return.' } },
              { say: { es: 'Cerrar la zona sin hielo y concentrar todo en la parte fría.', en: 'Close the area without ice and move everything to the cold section.' }, then: { es: 'Hay menos pescado a la venta. Algunos clientes se van enfadados.', en: 'There is less fish for sale. Some customers leave angry.' } },
            ],
          },
          twist: { es: 'Al final del día sobran cien kilos de pescado que mañana no se pueden vender. ¿Qué debería hacer Mei con ellos?', en: 'At the end of the day there are a hundred kilos of fish left that can’t be sold tomorrow. What should Mei do with it?' },
          questions: [
            { q: { es: '¿Qué se come en tu país en las fiestas importantes?', en: 'What do people eat in your country on important holidays?' }, help: { es: 'En Navidad comemos… / En Semana Santa…', en: 'At Christmas we eat… / At Easter…' }, follow: [{ es: '¿Quién cocina?', en: 'Who cooks?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Trabajaste con mucho calor alguna vez?', en: 'Have you ever worked in great heat?' }, help: { es: 'Sí, en verano… / No, por suerte.', en: 'Yes, in summer… / No, luckily.' }, follow: [{ es: '¿Cómo lo soportaste?', en: 'How did you cope?' }, { es: '¿Qué bebías?', en: 'What did you drink?' }] },
            { q: { es: '¿Quién te enseñó a mantener la calma?', en: 'Who taught you to stay calm?' }, help: { es: 'Mi madre / mi entrenador… / Nadie, todavía no sé.', en: 'My mother / my coach… / Nobody, I still can’t.' }, follow: [{ es: '¿Qué hacía?', en: 'What did they do?' }, { es: '¿Lo haces tú también?', en: 'Do you do it too?' }] },
            { q: { es: '¿Qué haces con la comida que sobra?', en: 'What do you do with leftover food?' }, help: { es: 'La guardo / la regalo / la tiro…', en: 'I keep it / give it away / throw it out…' }, follow: [{ es: '¿Tiras mucha comida?', en: 'Do you throw away a lot of food?' }, { es: '¿Cómo podrías tirar menos?', en: 'How could you throw away less?' }] },
          ],
          words: [{ es: 'el hielo', en: 'the ice' }, { es: 'aguantar', en: 'to last / hold out' }, { es: 'el técnico', en: 'the technician' }, { es: 'el megáfono', en: 'the megaphone' }, { es: 'sobrar', en: 'to be left over' }],
        },
        B1: {
          scene: { es: 'Un estudio científico demuestra que una especie de pescado muy popular, la que más se vende en el mercado, está en peligro por la pesca excesiva. Los científicos piden dejar de venderla durante cinco años. Muchos pescadores pequeños viven casi solo de esa especie. Mei forma parte del comité que decide la política del mercado.', en: 'A scientific study shows that a very popular fish species, the best-selling one at the market, is in danger from overfishing. Scientists are asking for it not to be sold for five years. Many small fishermen live almost entirely from that species. Mei is on the committee that decides market policy.' },
          opener: { es: 'Si el mercado deja de venderla, los pescadores la venderán por otros canales, más baratos y sin control. Si seguimos, contribuimos a que desaparezca. Ya pasó con otras especies en otros países y nunca se recuperaron. Mis padres vivieron de la pesca y entiendo el miedo de esas familias. ¿Una institución debe dar ejemplo aunque no cambie el resultado?', en: 'If the market stops selling it, the fishermen will sell it through other channels, cheaper and without control. If we carry on, we help it disappear. It has already happened with other species in other countries and they never recovered. My parents lived from fishing and I understand those families’ fear. Should an institution set an example even if it doesn’t change the outcome?' },
          decide: {
            ask: { es: '¿Qué debería votar Mei?', en: 'How should Mei vote?' },
            options: [
              { say: { es: 'Prohibir la venta y crear un fondo para los pescadores afectados.', en: 'Ban sales and create a fund for the affected fishermen.' }, then: { es: 'El fondo tarda meses en llegar. Algunos pescadores venden sus barcos.', en: 'The fund takes months to arrive. Some fishermen sell their boats.' } },
              { say: { es: 'Vender solo pescado de tamaño grande y con límite diario.', en: 'Sell only large fish with a daily limit.' }, then: { es: 'Los pescadores aceptan. Los científicos dicen que no es suficiente.', en: 'The fishermen accept. The scientists say it isn’t enough.' } },
              { say: { es: 'Esperar a que el gobierno decida y no actuar solos.', en: 'Wait for the government to decide and not act alone.' }, then: { es: 'El gobierno tarda dos años. Mientras tanto, la especie sigue bajando.', en: 'The government takes two years. Meanwhile, the species keeps declining.' } },
            ],
          },
          twist: { es: 'Un restaurante famoso que compra esa especie amenaza con dejar de comprar en el mercado si se prohíbe. Representa el diez por ciento de las ventas. ¿Cambia eso el voto?', en: 'A famous restaurant that buys that species threatens to stop buying at the market if it is banned. It represents ten percent of sales. Does that change the vote?' },
          questions: [
            { q: { es: '¿Debe una institución dar ejemplo aunque no cambie el resultado?', en: 'Should an institution set an example even if it doesn’t change the outcome?' }, help: { es: 'Sí, porque los ejemplos… / No, si solo…', en: 'Yes, because examples… / No, if it only…' }, follow: [{ es: '¿Conoces un caso?', en: 'Do you know a case?' }, { es: '¿Funcionó?', en: 'Did it work?' }] },
            { q: { es: '¿Dejarías de comer algo para proteger una especie?', en: 'Would you stop eating something to protect a species?' }, help: { es: 'Sí, ya dejé de comer… / Me costaría porque…', en: 'Yes, I already stopped eating… / It would be hard because…' }, follow: [{ es: '¿Qué te costaría más?', en: 'What would be hardest?' }, { es: '¿Lo harías por cinco años?', en: 'Would you do it for five years?' }] },
            { q: { es: '¿Quién debería pagar el coste de proteger la naturaleza?', en: 'Who should pay the cost of protecting nature?' }, help: { es: 'El gobierno / los consumidores / las empresas, porque…', en: 'The government / consumers / companies, because…' }, follow: [{ es: '¿Pagarías más por pescado sostenible?', en: 'Would you pay more for sustainable fish?' }, { es: '¿Cuánto más?', en: 'How much more?' }] },
            { q: { es: '¿Qué pesa más: la ciencia o el miedo de las familias?', en: 'What weighs more: science or families’ fear?' }, help: { es: 'Creo que… pero hay que…', en: 'I think… but we must…' }, follow: [{ es: '¿Cómo se explica la ciencia a quien tiene miedo?', en: 'How do you explain science to someone who is afraid?' }, { es: '¿Te pasó?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'la especie', en: 'the species' }, { es: 'la pesca excesiva', en: 'overfishing' }, { es: 'el canal', en: 'the channel' }, { es: 'el fondo', en: 'the fund' }, { es: 'sostenible', en: 'sustainable' }],
        },
      },
    },
    // ------------------------------------------------------------ the Blue Mountains
    {
      id: 'montanas',
      name: { es: 'Las Montañas Azules', en: 'The Blue Mountains' },
      who: { name: 'Daniel', role: { es: 'guarda forestal', en: 'park ranger' } },
      levels: {
        A0: {
          scene: { es: 'Hay montañas y muchos árboles. Las montañas parecen azules. Hay tres rocas altas: las Tres Hermanas. Daniel es guarda del parque. Tiene un sombrero grande.', en: 'There are mountains and lots of trees. The mountains look blue. There are three tall rocks: the Three Sisters. Daniel is a park ranger. He has a big hat.' },
          opener: { es: '¡Hola! Soy Daniel. Las montañas son azules por los árboles: los eucaliptos. ¿Caminamos un poco?', en: 'Hello! I am Daniel. The mountains are blue because of the trees: the eucalyptus. Shall we walk a little?' },
          decide: {
            ask: { es: '¿Qué camino eliges?', en: 'Which path do you choose?' },
            options: [
              { say: { es: 'El camino corto.', en: 'The short path.' }, then: { es: 'Caminas veinte minutos. Ves las Tres Hermanas.', en: 'You walk twenty minutes. You see the Three Sisters.' } },
              { say: { es: 'El camino largo, a la cascada.', en: 'The long path, to the waterfall.' }, then: { es: 'Caminas dos horas. La cascada es enorme.', en: 'You walk two hours. The waterfall is huge.' } },
              { say: { es: 'El tren de montaña.', en: 'The mountain railway.' }, then: { es: '¡El tren baja muy rápido! Gritas un poco.', en: 'The train goes down very fast! You scream a little.' } },
            ],
          },
          twist: { es: 'Daniel dice: «¡Silencio! Arriba hay un koala». ¿Qué haces?', en: 'Daniel says: “Quiet! There’s a koala up there.” What do you do?' },
          questions: [
            { q: { es: '¿Te gusta caminar en la montaña?', en: 'Do you like walking in the mountains?' }, help: { es: 'Sí, mucho. / No, me canso.', en: 'Yes, a lot. / No, I get tired.' }, follow: [{ es: '¿Qué montaña conoces?', en: 'Which mountain do you know?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Viste un koala?', en: 'Have you seen a koala?' }, help: { es: 'Sí, en un zoo. / No, nunca.', en: 'Yes, at a zoo. / No, never.' }, follow: [{ es: '¿Qué animal australiano conoces?', en: 'Which Australian animal do you know?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Prefieres caminos cortos o largos?', en: 'Do you prefer short or long paths?' }, help: { es: 'Prefiero cortos. / Prefiero largos.', en: 'I prefer short ones. / I prefer long ones.' }, follow: [{ es: '¿Cuánto caminas al día?', en: 'How much do you walk a day?' }, { es: '¿Usas una aplicación?', en: 'Do you use an app?' }] },
            { q: { es: '¿Tienes hermanas o hermanos?', en: 'Do you have sisters or brothers?' }, help: { es: 'Sí, tengo… / No, soy hijo único.', en: 'Yes, I have… / No, I’m an only child.' }, follow: [{ es: '¿Cómo se llaman?', en: 'What are their names?' }, { es: '¿Dónde viven?', en: 'Where do they live?' }] },
          ],
          words: [{ es: 'la montaña', en: 'the mountain' }, { es: 'el eucalipto', en: 'the eucalyptus' }, { es: 'la cascada', en: 'the waterfall' }, { es: 'el camino', en: 'the path' }, { es: 'el koala', en: 'the koala' }],
        },
        A1: {
          scene: { es: 'Daniel lleva un grupo por un sendero entre helechos gigantes. Hace calor y huele a eucalipto. Al lado del camino hay árboles negros y quemados, y entre ellos salen hojas verdes nuevas.', en: 'Daniel is leading a group along a trail among giant ferns. It is hot and smells of eucalyptus. Beside the path there are black, burnt trees, and new green leaves are growing among them.' },
          opener: { es: 'Hace unos años un incendio enorme quemó gran parte de estas montañas. Yo trabajé tres semanas casi sin dormir. Pensamos que el bosque estaba muerto. Pero mira: el eucalipto necesita el fuego para abrir sus semillas. La naturaleza aquí es más fuerte que nosotros. ¿Viste un incendio de cerca?', en: 'A few years ago a huge fire burned a large part of these mountains. I worked for three weeks almost without sleeping. We thought the forest was dead. But look: the eucalyptus needs fire to open its seeds. Nature here is stronger than we are. Have you seen a fire up close?' },
          decide: {
            ask: { es: 'Un turista quiere salir del sendero para una foto mejor. ¿Qué le dices?', en: 'A tourist wants to leave the trail for a better photo. What do you tell him?' },
            options: [
              { say: { es: 'Que no: el suelo es frágil.', en: 'No: the ground is fragile.' }, then: { es: 'Daniel te da las gracias. «Las plantas nuevas son muy pequeñas», explica.', en: 'Daniel thanks you. “The new plants are very small,” he explains.' } },
              { say: { es: 'Que le pregunte a Daniel.', en: 'To ask Daniel.' }, then: { es: 'Daniel lo lleva a un mirador. La foto es mejor desde allí.', en: 'Daniel takes him to a viewpoint. The photo is better from there.' } },
              { say: { es: 'Nada, no es mi problema.', en: 'Nothing, it’s not my problem.' }, then: { es: 'El turista resbala y se ensucia todo. Daniel suspira.', en: 'The tourist slips and gets all dirty. Daniel sighs.' } },
            ],
          },
          twist: { es: 'Hace mucho calor y hay viento. Daniel recibe un mensaje: peligro de incendio alto, hay que cerrar el parque. Los turistas protestan. ¿Qué haces?', en: 'It is very hot and windy. Daniel gets a message: high fire danger, the park must close. The tourists protest. What do you do?' },
          questions: [
            { q: { es: '¿Viste un incendio de cerca?', en: 'Have you seen a fire up close?' }, help: { es: 'Sí, en… / No, solo en la tele.', en: 'Yes, in… / No, only on TV.' }, follow: [{ es: '¿Tuviste miedo?', en: 'Were you scared?' }, { es: '¿Qué pasó después?', en: 'What happened afterwards?' }] },
            { q: { es: '¿Qué olor te gusta de la naturaleza?', en: 'What smell from nature do you like?' }, help: { es: 'Me gusta el olor a lluvia / a pino…', en: 'I like the smell of rain / pine…' }, follow: [{ es: '¿Dónde lo hueles?', en: 'Where do you smell it?' }, { es: '¿Te recuerda algo?', en: 'Does it remind you of something?' }] },
            { q: { es: '¿Respetas siempre los senderos?', en: 'Do you always stay on the trails?' }, help: { es: 'Sí, siempre. / Casi siempre.', en: 'Yes, always. / Almost always.' }, follow: [{ es: '¿Saliste alguna vez?', en: 'Have you ever left one?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Trabajaste muchos días seguidos sin descansar?', en: 'Have you worked many days in a row without rest?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'el sendero', en: 'the trail' }, { es: 'el incendio', en: 'the bushfire' }, { es: 'quemado', en: 'burnt' }, { es: 'la semilla', en: 'the seed' }, { es: 'el helecho', en: 'the fern' }],
        },
        A2: {
          scene: { es: 'Es de noche en el parque. Daniel recibe una llamada: dos jóvenes de Brasil se perdieron en un cañón. Tienen poca batería en el móvil y no saben dónde están. Hace frío y empieza a llover. Daniel sale con un compañero y te pide que lo ayudes con la radio.', en: 'It is night in the park. Daniel gets a call: two young people from Brazil are lost in a canyon. They have little battery on their phone and don’t know where they are. It is cold and starting to rain. Daniel goes out with a colleague and asks you to help him with the radio.' },
          opener: { es: 'Cada año se pierden decenas de personas aquí. Casi siempre es lo mismo: salen tarde, sin agua, sin mapa, confiando en el móvil. Hace dos años encontramos a un chico después de tres días. Estaba bien, pero muy asustado. Lo importante ahora es que no se muevan. ¿Qué les decimos por teléfono?', en: 'Every year dozens of people get lost here. It’s almost always the same: they set off late, without water, without a map, trusting their phone. Two years ago we found a boy after three days. He was fine, but very scared. The important thing now is that they don’t move. What do we tell them on the phone?' },
          decide: {
            ask: { es: '¿Qué les dices a los jóvenes perdidos?', en: 'What do you tell the lost young people?' },
            options: [
              { say: { es: 'Que se queden quietos y apaguen el móvil para guardar batería.', en: 'To stay still and turn off the phone to save battery.' }, then: { es: 'Encienden el móvil cada media hora. Daniel los encuentra a las tres de la mañana.', en: 'They turn on the phone every half hour. Daniel finds them at three in the morning.' } },
              { say: { es: 'Que manden su ubicación y usen la linterna del móvil.', en: 'To send their location and use the phone torch.' }, then: { es: 'La ubicación llega justo antes de que se apague el móvil. Ya saben dónde buscar.', en: 'The location arrives just before the phone dies. Now they know where to look.' } },
              { say: { es: 'Que griten cada diez minutos.', en: 'To shout every ten minutes.' }, then: { es: 'Con la lluvia es difícil oír, pero al final un grito llega hasta el equipo.', en: 'With the rain it’s hard to hear, but in the end a shout reaches the team.' } },
            ],
          },
          twist: { es: 'Encuentran a los jóvenes. Uno de ellos sube un vídeo a internet riéndose de la aventura. Miles de personas comentan. Daniel está molesto. ¿Tiene razón?', en: 'They find the young people. One of them posts a video online laughing about the adventure. Thousands of people comment. Daniel is annoyed. Is he right?' },
          questions: [
            { q: { es: '¿Te perdiste alguna vez?', en: 'Have you ever got lost?' }, help: { es: 'Sí, en una ciudad / en el campo… / No, nunca.', en: 'Yes, in a city / in the countryside… / No, never.' }, follow: [{ es: '¿Cómo encontraste el camino?', en: 'How did you find your way?' }, { es: '¿Tuviste miedo?', en: 'Were you scared?' }] },
            { q: { es: '¿Confías mucho en el móvil para orientarte?', en: 'Do you rely a lot on your phone to find your way?' }, help: { es: 'Sí, siempre uso… / No, prefiero un mapa.', en: 'Yes, I always use… / No, I prefer a map.' }, follow: [{ es: '¿Y si no hay señal?', en: 'And if there’s no signal?' }, { es: '¿Sabes leer un mapa?', en: 'Can you read a map?' }] },
            { q: { es: '¿Qué llevas siempre a una excursión?', en: 'What do you always take on a hike?' }, help: { es: 'Llevo agua, comida, una chaqueta…', en: 'I take water, food, a jacket…' }, follow: [{ es: '¿Qué olvidaste alguna vez?', en: 'What have you forgotten before?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Está bien reírse de un error que pudo ser grave?', en: 'Is it OK to laugh about a mistake that could have been serious?' }, help: { es: 'Sí, después… / No, porque otros…', en: 'Yes, afterwards… / No, because others…' }, follow: [{ es: '¿Te reíste de un error tuyo?', en: 'Have you laughed at a mistake of yours?' }, { es: '¿Aprendiste algo?', en: 'Did you learn something?' }] },
          ],
          words: [{ es: 'el cañón', en: 'the canyon' }, { es: 'perderse', en: 'to get lost' }, { es: 'la batería', en: 'the battery' }, { es: 'la ubicación', en: 'the location' }, { es: 'la linterna', en: 'the torch' }],
        },
        B1: {
          scene: { es: 'Después de los grandes incendios, el gobierno propone quemas controladas cada invierno en todo el parque: pequeños fuegos para eliminar la vegetación seca. Los ancianos aborígenes de la zona dicen que sus pueblos hicieron quemas así durante miles de años, pero de otra manera: más pequeñas, más frecuentes, leyendo el terreno. Daniel trabaja con ellos y con los técnicos del gobierno.', en: 'After the great fires, the government is proposing controlled burns every winter throughout the park: small fires to remove dry vegetation. The local Aboriginal elders say their peoples carried out burns like this for thousands of years, but differently: smaller, more frequent, reading the land. Daniel works with them and with the government technicians.' },
          opener: { es: 'Los técnicos tienen modelos de ordenador y presupuestos. Los ancianos tienen un conocimiento que pasó de generación en generación y que durante doscientos años nadie quiso escuchar. A veces dicen lo mismo con palabras distintas; a veces no. Mi trabajo es que se escuchen. Lo difícil es decidir quién tiene la última palabra cuando no están de acuerdo. ¿Cómo lo resolverías tú?', en: 'The technicians have computer models and budgets. The elders have knowledge passed down from generation to generation that for two hundred years nobody wanted to listen to. Sometimes they say the same thing in different words; sometimes not. My job is to make them listen to each other. The hard part is deciding who has the last word when they disagree. How would you resolve it?' },
          decide: {
            ask: { es: '¿Qué propones para el plan de quemas?', en: 'What do you propose for the burn plan?' },
            options: [
              { say: { es: 'Que los ancianos dirijan las quemas en una parte del parque, como prueba.', en: 'That the elders lead the burns in part of the park, as a trial.' }, then: { es: 'Después de dos años, esa zona resiste mucho mejor un incendio. Otros parques piden copiar el modelo.', en: 'After two years, that area resists a fire much better. Other parks ask to copy the model.' } },
              { say: { es: 'Un comité mixto donde cada decisión necesite el acuerdo de los dos grupos.', en: 'A joint committee where every decision needs both groups’ agreement.' }, then: { es: 'Es más lento, pero las decisiones son más sólidas y nadie se siente ignorado.', en: 'It is slower, but the decisions are more solid and nobody feels ignored.' } },
              { say: { es: 'Seguir el plan técnico y pagar a los ancianos como asesores.', en: 'Follow the technical plan and pay the elders as advisers.' }, then: { es: 'Los ancianos rechazan el papel: dicen que no quieren ser un adorno del plan.', en: 'The elders reject the role: they say they don’t want to be decoration for the plan.' } },
            ],
          },
          twist: { es: 'Una quema controlada se escapa por un cambio de viento y destruye dos casas. Los vecinos culpan al nuevo sistema. ¿Hay que abandonarlo o corregirlo?', en: 'A controlled burn escapes because of a wind change and destroys two houses. The residents blame the new system. Should it be abandoned or corrected?' },
          questions: [
            { q: { es: '¿Qué conocimiento tradicional de tu país debería escucharse más?', en: 'What traditional knowledge from your country should be listened to more?' }, help: { es: 'Creo que el conocimiento de… sobre…', en: 'I think the knowledge of… about…' }, follow: [{ es: '¿Por qué no se escucha?', en: 'Why isn’t it listened to?' }, { es: '¿Quién lo guarda?', en: 'Who keeps it?' }] },
            { q: { es: '¿Quién debería tener la última palabra: los técnicos o la experiencia local?', en: 'Who should have the last word: technicians or local experience?' }, help: { es: 'Depende de… / Los dos, porque…', en: 'It depends on… / Both, because…' }, follow: [{ es: '¿Conoces un caso donde se equivocaron los expertos?', en: 'Do you know a case where the experts were wrong?' }, { es: '¿Y la gente local?', en: 'And local people?' }] },
            { q: { es: '¿Un error justifica abandonar una idea nueva?', en: 'Does one mistake justify abandoning a new idea?' }, help: { es: 'No, porque toda idea nueva… / Sí, si el error…', en: 'No, because every new idea… / Yes, if the mistake…' }, follow: [{ es: '¿Abandonaste un proyecto por un error?', en: 'Have you abandoned a project because of a mistake?' }, { es: '¿Volverías a intentarlo?', en: 'Would you try again?' }] },
            { q: { es: '¿Cómo se repara una injusticia de hace siglos?', en: 'How do you repair an injustice from centuries ago?' }, help: { es: 'Escuchando… / Devolviendo… / Reconociendo…', en: 'By listening… / Giving back… / Recognising…' }, follow: [{ es: '¿Hay algo así en tu país?', en: 'Is there something like that in your country?' }, { es: '¿Se habla de ello?', en: 'Is it talked about?' }] },
          ],
          words: [{ es: 'la quema controlada', en: 'the controlled burn' }, { es: 'el anciano', en: 'the elder' }, { es: 'el presupuesto', en: 'the budget' }, { es: 'el asesor', en: 'the adviser' }, { es: 'el terreno', en: 'the land / terrain' }],
        },
      },
    },
  ],
};
