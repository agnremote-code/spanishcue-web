// Java · sunrise at Borobudur, a batik workshop, a gamelan rehearsal, a night food stall in
// Yogyakarta and the traffic of Jakarta. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own.
export default {
  id: 'java',
  spots: [
    // ------------------------------------------------------------ Borobudur
    {
      id: 'borobudur',
      name: { es: 'Borobudur al amanecer', en: 'Borobudur at sunrise' },
      who: { name: 'Ayu', role: { es: 'guía del templo', en: 'temple guide' } },
      levels: {
        A0: {
          scene: { es: 'Son las cinco de la mañana. Hay un templo enorme de piedra. Hay niebla y volcanes. Ayu es guía. Tiene una linterna.', en: 'It is five in the morning. There is a huge stone temple. There is fog and volcanoes. Ayu is a guide. She has a torch.' },
          opener: { es: '¡Buenos días! Esto es Borobudur. Es muy viejo. ¿Te gusta?', en: 'Good morning! This is Borobudur. It is very old. Do you like it?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Subo al templo.', en: 'I climb the temple.' }, then: { es: 'Hay muchas escaleras. ¡Uf! Arriba hay estatuas.', en: 'There are many stairs. Phew! At the top there are statues.' } },
              { say: { es: 'Miro el sol.', en: 'I look at the sun.' }, then: { es: 'El sol sale detrás del volcán. Es naranja.', en: 'The sun rises behind the volcano. It is orange.' } },
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'Ayu sonríe en la foto. ¡Qué bonito!', en: 'Ayu smiles in the photo. How beautiful!' } },
            ],
          },
          twist: { es: 'Un niño toca una estatua. Ayu dice: «¡No, por favor!». ¿Por qué?', en: 'A child touches a statue. Ayu says: “No, please!” Why?' },
          questions: [
            { q: { es: '¿Te levantas temprano?', en: 'Do you get up early?' }, help: { es: 'Sí, a las… / No, tarde.', en: 'Yes, at… / No, late.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y el domingo?', en: 'And on Sunday?' }] },
            { q: { es: '¿Te gustan los templos?', en: 'Do you like temples?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Hay templos en tu ciudad?', en: 'Are there temples in your city?' }, { es: '¿Cuál?', en: 'Which one?' }] },
            { q: { es: '¿Hay volcanes en tu país?', en: 'Are there volcanoes in your country?' }, help: { es: 'Sí, hay… / No, no hay.', en: 'Yes, there are… / No, there aren’t.' }, follow: [{ es: '¿Son grandes?', en: 'Are they big?' }, { es: '¿Quieres ver uno?', en: 'Do you want to see one?' }] },
            { q: { es: '¿Sacas muchas fotos?', en: 'Do you take a lot of photos?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, a lot. / No, a few.' }, follow: [{ es: '¿Con el teléfono?', en: 'With your phone?' }, { es: '¿De qué?', en: 'Of what?' }] },
          ],
          words: [{ es: 'el templo', en: 'the temple' }, { es: 'la piedra', en: 'the stone' }, { es: 'la niebla', en: 'the fog' }, { es: 'el volcán', en: 'the volcano' }, { es: 'la escalera', en: 'the stairs' }],
        },
        A1: {
          scene: { es: 'Borobudur es el templo budista más grande del mundo. Tiene más de mil años y casi quinientas estatuas de Buda. Durante siglos estuvo cubierto por la ceniza de los volcanes y por la selva. Hoy llegan miles de visitantes cada día. Ayu trabaja aquí desde hace diez años. Le gusta empezar la visita antes del amanecer, cuando todavía hay silencio.', en: 'Borobudur is the largest Buddhist temple in the world. It is more than a thousand years old and has almost five hundred Buddha statues. For centuries it was covered by volcanic ash and jungle. Today thousands of visitors arrive every day. Ayu has worked here for ten years. She likes to start the tour before sunrise, when it is still quiet.' },
          opener: { es: 'Yo soy musulmana, como la mayoría de la gente en Java, pero este templo budista también es mío. Es parte de nuestra historia. Mis abuelos subían aquí con sus amigos los domingos. Ahora hay reglas: solo pueden subir unas mil personas por día y hay que llevar sandalias especiales. ¿En tu ciudad hay un lugar viejo que todos quieren visitar?', en: 'I’m Muslim, like most people in Java, but this Buddhist temple is mine too. It’s part of our history. My grandparents used to climb up here with their friends on Sundays. Now there are rules: only about a thousand people can go up each day and you have to wear special sandals. In your city is there an old place everyone wants to visit?' },
          decide: {
            ask: { es: '¿Cómo visitas el templo?', en: 'How do you visit the temple?' },
            options: [
              { say: { es: 'Camino alrededor, piso por piso.', en: 'I walk around, level by level.' }, then: { es: 'Las paredes cuentan la vida de Buda en dibujos de piedra. Es como un libro gigante.', en: 'The walls tell the life of Buddha in stone pictures. It’s like a giant book.' } },
              { say: { es: 'Me siento en silencio arriba.', en: 'I sit in silence at the top.' }, then: { es: 'Escuchas pájaros y un gallo lejano. Ayu se sienta a tu lado y no habla.', en: 'You hear birds and a distant rooster. Ayu sits next to you and doesn’t speak.' } },
              { say: { es: 'Le hago muchas preguntas a Ayu.', en: 'I ask Ayu lots of questions.' }, then: { es: 'Ayu responde todo con paciencia. Sabe la historia de cada estatua.', en: 'Ayu answers everything patiently. She knows the story of every statue.' } },
            ],
          },
          twist: { es: 'Una turista quiere subir sin las sandalias especiales. Dice: «Pagué la entrada». ¿Qué hace Ayu?', en: 'A tourist wants to go up without the special sandals. She says: “I paid for the ticket.” What does Ayu do?' },
          questions: [
            { q: { es: '¿Qué lugar viejo visitaste?', en: 'Which old place have you visited?' }, help: { es: 'Visité… en…', en: 'I visited… in…' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Había mucha gente?', en: 'Were there many people?' }] },
            { q: { es: '¿Te gusta el silencio?', en: 'Do you like silence?' }, help: { es: 'Sí, mucho. / No, prefiero la música.', en: 'Yes, a lot. / No, I prefer music.' }, follow: [{ es: '¿Dónde encuentras silencio?', en: 'Where do you find silence?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Hay reglas para visitar algún lugar en tu país?', en: 'Are there rules for visiting a place in your country?' }, help: { es: 'Sí, en… no puedes… / No sé.', en: 'Yes, in… you can’t… / I don’t know.' }, follow: [{ es: '¿Te parecen bien?', en: 'Do you think they’re fair?' }, { es: '¿La gente las respeta?', en: 'Do people respect them?' }] },
            { q: { es: '¿Qué hacías los domingos de niño?', en: 'What did you do on Sundays as a child?' }, help: { es: 'Los domingos yo…', en: 'On Sundays I…' }, follow: [{ es: '¿Con tu familia?', en: 'With your family?' }, { es: '¿Lo extrañas?', en: 'Do you miss it?' }] },
          ],
          words: [{ es: 'budista', en: 'Buddhist' }, { es: 'la ceniza', en: 'the ash' }, { es: 'la selva', en: 'the jungle' }, { es: 'el amanecer', en: 'sunrise' }, { es: 'la regla', en: 'the rule' }],
        },
        A2: {
          scene: { es: 'Las piedras de Borobudur se gastan con los pies de los turistas. Por eso, hace unos años, el gobierno limitó las visitas a la parte de arriba. Además, quiere subir el precio de la entrada para los extranjeros a casi cien dólares. Los vendedores del pueblo de al lado tienen miedo: si vienen menos turistas, venden menos camisetas, menos agua y menos recuerdos. Ayu está en medio: quiere proteger el templo, pero sus vecinos viven de los visitantes.', en: 'Borobudur’s stones are being worn down by tourists’ feet. So, a few years ago, the government limited visits to the upper part. It also wants to raise the entry price for foreigners to almost a hundred dollars. The vendors in the next village are afraid: if fewer tourists come, they sell fewer T-shirts, less water and fewer souvenirs. Ayu is in the middle: she wants to protect the temple, but her neighbours live off the visitors.' },
          opener: { es: 'Mi tía vende sombreros en la entrada desde hace treinta años. Ayer me dijo: «Si suben el precio, ¿quién va a venir?». Pero yo veo las piedras todos los días y están más gastadas que cuando empecé. Antes la gente se sentaba en las estatuas para la foto. Una vez vi a un hombre que quería llevarse una piedra pequeña. Si no lo cuidamos, en cien años no habrá nada que ver. ¿Qué es más importante?', en: 'My aunt has been selling hats at the entrance for thirty years. Yesterday she told me: “If they raise the price, who’s going to come?” But I see the stones every day and they’re more worn than when I started. People used to sit on the statues for photos. Once I saw a man who wanted to take a small stone home. If we don’t look after it, in a hundred years there’ll be nothing to see. What matters more?' },
          decide: {
            ask: { es: '¿Qué propones?', en: 'What do you propose?' },
            options: [
              { say: { es: 'Precio alto, pero parte del dinero para el pueblo.', en: 'A high price, but part of the money for the village.' }, then: { es: 'El pueblo recibe ayuda para abrir talleres y cafés. Vienen menos turistas, pero se quedan más tiempo.', en: 'The village gets help to open workshops and cafés. Fewer tourists come, but they stay longer.' } },
              { say: { es: 'Precio normal y solo ver el templo desde abajo.', en: 'Normal price and only see the temple from below.' }, then: { es: 'Muchos turistas se quejan en internet: «Viajé hasta aquí para no subir».', en: 'Many tourists complain online: “I travelled all this way and couldn’t go up.”' } },
              { say: { es: 'Una copia del templo al lado, para las fotos.', en: 'A copy of the temple next to it, for photos.' }, then: { es: 'La idea causa risas y enojo. Ayu dice: «Una copia no tiene alma».', en: 'The idea causes laughter and anger. Ayu says: “A copy has no soul.”' } },
            ],
          },
          twist: { es: 'Un monje budista de Tailandia llega para rezar. No tiene dinero para la entrada cara. ¿Debe pagar como un turista?', en: 'A Buddhist monk from Thailand arrives to pray. He doesn’t have money for the expensive ticket. Should he pay like a tourist?' },
          questions: [
            { q: { es: '¿Está bien que los extranjeros paguen más?', en: 'Is it fair for foreigners to pay more?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Y los estudiantes?', en: 'And students?' }] },
            { q: { es: '¿Un lugar que te gustaba cambió por el turismo?', en: 'Has a place you liked changed because of tourism?' }, help: { es: 'Sí, antes… y ahora… / No.', en: 'Yes, before… and now… / No.' }, follow: [{ es: '¿Qué extrañas?', en: 'What do you miss?' }, { es: '¿Qué mejoró?', en: 'What got better?' }] },
            { q: { es: '¿Compras recuerdos cuando viajas?', en: 'Do you buy souvenirs when you travel?' }, help: { es: 'Sí, siempre compro… / No, nunca.', en: 'Yes, I always buy… / No, never.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Dónde está ahora?', en: 'Where is it now?' }] },
            { q: { es: '¿Qué harías con alguien que quiere llevarse una piedra?', en: 'What would you do with someone who wants to take a stone?' }, help: { es: 'Le diría que… / Llamaría a…', en: 'I would tell them… / I would call…' }, follow: [{ es: '¿Es grave?', en: 'Is it serious?' }, { es: '¿Alguna vez te llevaste algo?', en: 'Have you ever taken something?' }] },
          ],
          words: [{ es: 'gastarse', en: 'to wear down' }, { es: 'limitar', en: 'to limit' }, { es: 'el recuerdo', en: 'the souvenir' }, { es: 'el vendedor', en: 'the vendor' }, { es: 'cuidar', en: 'to look after' }],
        },
        B1: {
          scene: { es: 'En 1814 un gobernador británico oyó hablar de un templo enterrado en la selva de Java. Cientos de trabajadores locales lo descubrieron poco a poco. Después, durante el dominio holandés, muchas estatuas y cabezas de Buda se llevaron a Europa: algunas siguen en museos de Ámsterdam y Leiden, y otras terminaron en colecciones privadas. Ahora Indonesia pide que vuelvan. Ayu va a hablar en un programa de radio sobre la devolución de las piezas.', en: 'In 1814 a British governor heard about a temple buried in the Javanese jungle. Hundreds of local workers uncovered it bit by bit. Later, under Dutch rule, many statues and Buddha heads were taken to Europe: some are still in museums in Amsterdam and Leiden, and others ended up in private collections. Now Indonesia is asking for them to come back. Ayu is going to speak on a radio programme about returning the pieces.' },
          opener: { es: 'Cuando hago la visita, siempre llego a una estatua sin cabeza y los turistas preguntan qué pasó. Les digo la verdad: está en Europa, o en la casa de alguien que la compró. Los museos dicen que allí está mejor cuidada y que la ve más gente. Puede ser. Pero un Buda sin su templo es solo una piedra bonita. Y un templo lleno de estatuas sin cabeza cuenta otra historia, la de quién tenía el poder. ¿A quién pertenece una obra de arte: al lugar donde nació o al lugar donde está ahora?', en: 'When I give the tour, I always reach a headless statue and tourists ask what happened. I tell them the truth: it’s in Europe, or in the house of someone who bought it. Museums say it’s better looked after there and more people see it. Maybe. But a Buddha without its temple is just a pretty stone. And a temple full of headless statues tells another story: who had the power. Who does a work of art belong to: the place it was born or the place where it is now?' },
          decide: {
            ask: { es: '¿Qué defiende Ayu en la radio?', en: 'What does Ayu argue on the radio?' },
            options: [
              { say: { es: 'Devolver todas las piezas, sin condiciones.', en: 'Return all the pieces, with no conditions.' }, then: { es: 'Muchos oyentes llaman para apoyarla. Un museo europeo responde que Indonesia no tiene espacio para guardarlas.', en: 'Many listeners call in to support her. A European museum replies that Indonesia has no space to keep them.' } },
              { say: { es: 'Compartir: piezas que viajan entre los dos países.', en: 'Share: pieces that travel between the two countries.' }, then: { es: 'La idea gusta a los museos. Algunos oyentes dicen que es pedir permiso para usar lo propio.', en: 'Museums like the idea. Some listeners say it’s asking permission to use what’s yours.' } },
              { say: { es: 'Primero, un museo digno junto al templo.', en: 'First, a proper museum next to the temple.' }, then: { es: 'El ministro promete el museo en la radio. Ayu sabe que las promesas en la radio no siempre se cumplen.', en: 'The minister promises the museum on air. Ayu knows radio promises aren’t always kept.' } },
            ],
          },
          twist: { es: 'Un oyente dice que su abuelo holandés tenía una cabeza de Buda en el salón y que él quiere devolverla, pero tiene miedo de tener problemas legales. ¿Qué le dice Ayu?', en: 'A listener says his Dutch grandfather had a Buddha head in the living room and he wants to return it, but he’s afraid of legal trouble. What does Ayu tell him?' },
          questions: [
            { q: { es: '¿Los museos deberían devolver piezas a sus países de origen?', en: 'Should museums return pieces to their countries of origin?' }, help: { es: 'Creo que sí/no, porque… Depende de…', en: 'I think so/not, because… It depends on…' }, follow: [{ es: '¿Conoces algún caso?', en: 'Do you know a case?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Tu país tiene piezas de otros países en sus museos?', en: 'Does your country have pieces from other countries in its museums?' }, help: { es: 'Sí, en el museo de… hay… / No lo sé.', en: 'Yes, in the… museum there are… / I don’t know.' }, follow: [{ es: '¿Cómo llegaron?', en: 'How did they get there?' }, { es: '¿Se habla del tema?', en: 'Is it discussed?' }] },
            { q: { es: '¿Qué historia cuenta un objeto que falta?', en: 'What story does a missing object tell?' }, help: { es: 'Cuenta que… / Nos recuerda…', en: 'It tells that… / It reminds us…' }, follow: [{ es: '¿Hay algo que falta en tu ciudad?', en: 'Is something missing in your city?' }, { es: '¿Volverá algún día?', en: 'Will it come back one day?' }] },
            { q: { es: '¿Es mejor ver arte original o una buena copia?', en: 'Is it better to see original art or a good copy?' }, help: { es: 'Prefiero… porque… Para mí, el original…', en: 'I prefer… because… For me, the original…' }, follow: [{ es: '¿Notarías la diferencia?', en: 'Would you notice the difference?' }, { es: '¿Pagarías más por el original?', en: 'Would you pay more for the original?' }] },
          ],
          words: [{ es: 'enterrado', en: 'buried' }, { es: 'el dominio', en: 'rule' }, { es: 'la devolución', en: 'the return' }, { es: 'pertenecer', en: 'to belong' }, { es: 'el oyente', en: 'the listener' }],
        },
      },
    },
    // ------------------------------------------------------------ batik workshop
    {
      id: 'batik',
      name: { es: 'El taller de batik', en: 'The batik workshop' },
      who: { name: 'Sri', role: { es: 'artesana del batik', en: 'batik artisan' } },
      levels: {
        A0: {
          scene: { es: 'Es un taller pequeño. Hay telas de colores. Hay cera caliente. Sri pinta con una herramienta pequeña. Huele a cera.', en: 'It is a small workshop. There are colourful fabrics. There is hot wax. Sri paints with a small tool. It smells of wax.' },
          opener: { es: '¡Hola! Esto es batik. Es una tela de Java. ¿Te gusta este color?', en: 'Hello! This is batik. It is a fabric from Java. Do you like this colour?' },
          decide: {
            ask: { es: '¿Qué color eliges?', en: 'Which colour do you choose?' },
            options: [
              { say: { es: 'Azul.', en: 'Blue.' }, then: { es: 'Sri pone la tela en agua azul. ¡Qué bonito!', en: 'Sri puts the fabric in blue water. How pretty!' } },
              { say: { es: 'Marrón.', en: 'Brown.' }, then: { es: 'Sri dice: «Es el color de Yogyakarta». Está contenta.', en: 'Sri says: “It is the colour of Yogyakarta.” She is happy.' } },
              { say: { es: 'Rojo.', en: 'Red.' }, then: { es: 'El rojo es fuerte. Sri dice: «¡Es para una fiesta!».', en: 'Red is strong. Sri says: “It is for a party!”' } },
            ],
          },
          twist: { es: 'Una gota de cera cae en tu mano. ¡Está caliente! ¿Qué dices?', en: 'A drop of wax falls on your hand. It is hot! What do you say?' },
          questions: [
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu casa?', en: 'And your house?' }] },
            { q: { es: '¿Te gusta pintar?', en: 'Do you like painting?' }, help: { es: 'Sí. / No, no mucho.', en: 'Yes. / No, not much.' }, follow: [{ es: '¿Qué pintas?', en: 'What do you paint?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Qué ropa llevas hoy?', en: 'What are you wearing today?' }, help: { es: 'Llevo una camisa… y un pantalón…', en: 'I am wearing a… shirt and… trousers.' }, follow: [{ es: '¿De qué color?', en: 'What colour?' }, { es: '¿Es nueva?', en: 'Is it new?' }] },
            { q: { es: '¿Haces cosas con las manos?', en: 'Do you make things with your hands?' }, help: { es: 'Sí, hago… / No.', en: 'Yes, I make… / No.' }, follow: [{ es: '¿Es fácil?', en: 'Is it easy?' }, { es: '¿Quién te enseña?', en: 'Who teaches you?' }] },
          ],
          words: [{ es: 'la tela', en: 'the fabric' }, { es: 'la cera', en: 'the wax' }, { es: 'caliente', en: 'hot' }, { es: 'el color', en: 'the colour' }, { es: 'pintar', en: 'to paint' }],
        },
        A1: {
          scene: { es: 'El batik se hace con cera y tinte. Primero, Sri dibuja con cera caliente sobre una tela blanca. Después mete la tela en el tinte: donde hay cera, el color no entra. Luego quita la cera con agua hirviendo y repite con otro color. Un batik hecho a mano puede tardar un mes. En el taller trabajan cinco mujeres del barrio. Escuchan la radio y hablan mientras trabajan.', en: 'Batik is made with wax and dye. First, Sri draws with hot wax on white fabric. Then she dips the fabric in the dye: where there is wax, the colour doesn’t get in. Then she removes the wax with boiling water and repeats with another colour. A handmade batik can take a month. Five women from the neighbourhood work in the workshop. They listen to the radio and talk while they work.' },
          opener: { es: 'Mi madre me enseñó cuando tenía ocho años. Cada dibujo tiene un significado: este, con olas, es para la buena suerte; este otro, con líneas cruzadas, antes solo lo podía usar la familia del sultán. Los viernes, en Indonesia, mucha gente va a trabajar con camisa de batik, hasta en los bancos. ¿En tu país hay una ropa tradicional?', en: 'My mother taught me when I was eight. Every pattern has a meaning: this one, with waves, is for good luck; this other one, with crossed lines, used to be only for the sultan’s family. On Fridays, in Indonesia, lots of people go to work in a batik shirt, even in banks. In your country is there traditional clothing?' },
          decide: {
            ask: { es: '¿Qué haces en el taller?', en: 'What do you do in the workshop?' },
            options: [
              { say: { es: 'Intento dibujar con cera.', en: 'I try to draw with wax.' }, then: { es: 'La cera sale de golpe y hace una mancha. Sri dice: «Así empecé yo».', en: 'The wax comes out all at once and makes a stain. Sri says: “That’s how I started.”' } },
              { say: { es: 'Elijo un dibujo para una camisa.', en: 'I choose a pattern for a shirt.' }, then: { es: 'Eliges las olas. Sri dice que estará lista en tres semanas.', en: 'You choose the waves. Sri says it will be ready in three weeks.' } },
              { say: { es: 'Pregunto cuánto cuesta.', en: 'I ask how much it costs.' }, then: { es: 'Un batik a mano cuesta diez veces más que uno de fábrica. Sri explica por qué.', en: 'A handmade batik costs ten times more than a factory one. Sri explains why.' } },
            ],
          },
          twist: { es: 'Un turista muestra una camisa de «batik» que compró en el mercado por tres dólares. Sri la mira y se ríe. ¿Por qué?', en: 'A tourist shows a “batik” shirt he bought at the market for three dollars. Sri looks at it and laughs. Why?' },
          questions: [
            { q: { es: '¿Hay una ropa tradicional en tu país?', en: 'Is there traditional clothing in your country?' }, help: { es: 'Sí, el/la… / No mucho.', en: 'Yes, the… / Not really.' }, follow: [{ es: '¿Cuándo se usa?', en: 'When is it worn?' }, { es: '¿Tú la usas?', en: 'Do you wear it?' }] },
            { q: { es: '¿Quién te enseñó algo importante de niño?', en: 'Who taught you something important as a child?' }, help: { es: 'Mi… me enseñó a…', en: 'My… taught me to…' }, follow: [{ es: '¿Todavía lo haces?', en: 'Do you still do it?' }, { es: '¿Se lo enseñas a otros?', en: 'Do you teach it to others?' }] },
            { q: { es: '¿Prefieres cosas hechas a mano o de fábrica?', en: 'Do you prefer handmade or factory-made things?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Tienes algo hecho a mano?', en: 'Do you have something handmade?' }, { es: '¿Quién lo hizo?', en: 'Who made it?' }] },
            { q: { es: '¿Escuchas la radio cuando trabajas?', en: 'Do you listen to the radio while you work?' }, help: { es: 'Sí, escucho… / No, prefiero el silencio.', en: 'Yes, I listen to… / No, I prefer silence.' }, follow: [{ es: '¿Qué programa?', en: 'Which programme?' }, { es: '¿Y música?', en: 'And music?' }] },
          ],
          words: [{ es: 'el tinte', en: 'the dye' }, { es: 'hirviendo', en: 'boiling' }, { es: 'el dibujo', en: 'the pattern' }, { es: 'hecho a mano', en: 'handmade' }, { es: 'la mancha', en: 'the stain' }],
        },
        A2: {
          scene: { es: 'Una gran tienda de ropa de Europa le ofrece a Sri un contrato: quiere dos mil pañuelos de batik en tres meses. Es más trabajo del que el taller hace en un año. Sri tendría que contratar a muchas mujeres nuevas, comprar tinte químico, más rápido que el natural, y quizá usar sellos de metal en vez de dibujar cada pieza a mano. La tienda pagaría bien, pero quiere poner su propia marca en los pañuelos, no el nombre del taller.', en: 'A big European clothing chain offers Sri a contract: it wants two thousand batik scarves in three months. That’s more work than the workshop does in a year. Sri would have to hire many new women, buy chemical dye, which is faster than natural dye, and maybe use metal stamps instead of drawing each piece by hand. The chain would pay well, but it wants to put its own brand on the scarves, not the workshop’s name.' },
          opener: { es: 'Con ese dinero podría arreglar el techo, que deja pasar el agua, y pagar mejor a las mujeres. Ratih, la más joven, quiere ir a la universidad. Pero si uso sellos y tinte químico, ¿sigue siendo nuestro batik? Mi madre diría que no. Y si la tienda pone su nombre, nadie sabrá que lo hicimos aquí, en Yogyakarta. El año que viene pueden encontrar un taller más barato en otro lugar y nos quedamos sin nada. ¿Tú qué harías?', en: 'With that money I could fix the roof, which lets the water in, and pay the women better. Ratih, the youngest, wants to go to university. But if I use stamps and chemical dye, is it still our batik? My mother would say no. And if the chain puts its name on it, nobody will know we made it here, in Yogyakarta. Next year they might find a cheaper workshop somewhere else and we’re left with nothing. What would you do?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Sri?', en: 'What do you advise Sri?' },
            options: [
              { say: { es: 'Aceptar, pero con el nombre del taller en la etiqueta.', en: 'Accept, but with the workshop’s name on the label.' }, then: { es: 'La tienda acepta poner «Hecho en Yogyakarta», pero no el nombre de Sri. Es un paso.', en: 'The chain agrees to put “Made in Yogyakarta”, but not Sri’s name. It’s a step.' } },
              { say: { es: 'Aceptar menos pañuelos, todos a mano.', en: 'Accept fewer scarves, all by hand.' }, then: { es: 'La tienda pide quinientos, más caros. Los venden como edición especial y se terminan en una semana.', en: 'The chain orders five hundred, at a higher price. They sell them as a special edition and they sell out in a week.' } },
              { say: { es: 'Decir que no y vender por internet.', en: 'Say no and sell online.' }, then: { es: 'Ratih abre una cuenta en redes sociales. Los primeros meses venden poco, pero los clientes vuelven.', en: 'Ratih opens a social media account. The first months they sell little, but customers come back.' } },
            ],
          },
          twist: { es: 'Las mujeres del taller votan. Tres quieren el contrato grande; dos tienen miedo de trabajar diez horas por día. ¿Qué hace Sri?', en: 'The women in the workshop vote. Three want the big contract; two are afraid of working ten hours a day. What does Sri do?' },
          questions: [
            { q: { es: '¿Pagarías más por algo hecho a mano?', en: 'Would you pay more for something handmade?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Cuánto más?', en: 'How much more?' }, { es: '¿Por ejemplo?', en: 'For example?' }] },
            { q: { es: '¿Es importante saber dónde se hizo tu ropa?', en: 'Is it important to know where your clothes were made?' }, help: { es: 'Sí, porque… / No me importa mucho.', en: 'Yes, because… / I don’t really care.' }, follow: [{ es: '¿Miras la etiqueta?', en: 'Do you look at the label?' }, { es: '¿Qué dice la de tu camiseta?', en: 'What does your T-shirt label say?' }] },
            { q: { es: '¿Cambiarías una tradición para ganar más dinero?', en: 'Would you change a tradition to earn more money?' }, help: { es: 'Quizá, si… / Nunca, porque…', en: 'Maybe, if… / Never, because…' }, follow: [{ es: '¿Qué tradición?', en: 'Which tradition?' }, { es: '¿Qué diría tu familia?', en: 'What would your family say?' }] },
            { q: { es: '¿Trabajarías diez horas por día para un buen proyecto?', en: 'Would you work ten hours a day for a good project?' }, help: { es: 'Sí, durante… / No, porque…', en: 'Yes, for… / No, because…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
          ],
          words: [{ es: 'el contrato', en: 'the contract' }, { es: 'contratar', en: 'to hire' }, { es: 'el sello', en: 'the stamp' }, { es: 'la marca', en: 'the brand' }, { es: 'la etiqueta', en: 'the label' }],
        },
        B1: {
          scene: { es: 'En 2009 la UNESCO declaró el batik indonesio Patrimonio Cultural Inmaterial. Desde entonces, el 2 de octubre es el Día Nacional del Batik. Sin embargo, Malasia también tiene una larga tradición de batik, y cada vez que una marca o una película lo llama «malasio», hay peleas en las redes. Mientras tanto, la mayoría del «batik» barato que se vende hoy está impreso en fábricas, a veces fuera de Indonesia. Sri participa en un debate en la universidad sobre quién es dueño de una tradición.', en: 'In 2009 UNESCO declared Indonesian batik Intangible Cultural Heritage. Since then, 2 October has been National Batik Day. However, Malaysia also has a long batik tradition, and every time a brand or a film calls it “Malaysian”, there are fights on social media. Meanwhile, most of the cheap “batik” sold today is printed in factories, sometimes outside Indonesia. Sri takes part in a university debate about who owns a tradition.' },
          opener: { es: 'Los jóvenes se enojan en internet porque alguien en Malasia dice que el batik es suyo. Yo los entiendo, pero creo que el problema real está en otro lado. Si cualquier fábrica puede imprimir un dibujo y venderlo como batik, el nombre ya no protege a nadie. A mí no me roba Malasia: me roba una camisa impresa que cuesta tres dólares y que nadie sabe distinguir de la mía. Las tradiciones viajan, siempre lo hicieron. ¿Una tradición puede tener dueño, o lo que hay que proteger es la forma de hacerla?', en: 'Young people get angry online because someone in Malaysia says batik is theirs. I understand them, but I think the real problem is elsewhere. If any factory can print a pattern and sell it as batik, the name no longer protects anyone. Malaysia isn’t stealing from me: a printed shirt that costs three dollars and that nobody can tell apart from mine is. Traditions travel, they always have. Can a tradition have an owner, or is it the way it’s made that needs protecting?' },
          decide: {
            ask: { es: '¿Qué propone Sri en el debate?', en: 'What does Sri propose in the debate?' },
            options: [
              { say: { es: 'Un sello oficial solo para el batik hecho a mano.', en: 'An official mark only for handmade batik.' }, then: { es: 'Ya existe uno, pero casi nadie lo conoce. Los estudiantes proponen una campaña para explicarlo.', en: 'One already exists, but hardly anyone knows it. The students propose a campaign to explain it.' } },
              { say: { es: 'Llamar «tela impresa» a lo que no es batik.', en: 'Call anything that isn’t batik “printed fabric”.' }, then: { es: 'Un fabricante en el público protesta: dice que su empresa da trabajo a miles de personas.', en: 'A manufacturer in the audience protests: he says his company employs thousands of people.' } },
              { say: { es: 'Celebrar el batik con Malasia, no contra Malasia.', en: 'Celebrate batik with Malaysia, not against it.' }, then: { es: 'Algunos aplauden y otros silban. Una estudiante malasia se acerca después para agradecerle.', en: 'Some applaud and others whistle. A Malaysian student comes up afterwards to thank her.' } },
            ],
          },
          twist: { es: 'Un diseñador famoso de Nueva York presenta en París una colección «inspirada en Java» con dibujos de batik. No menciona a ningún taller. ¿Es homenaje o apropiación?', en: 'A famous New York designer presents a collection “inspired by Java” with batik patterns in Paris. He doesn’t mention any workshop. Is it homage or appropriation?' },
          questions: [
            { q: { es: '¿Una tradición puede pertenecer a un solo país?', en: 'Can a tradition belong to just one country?' }, help: { es: 'Creo que… porque… En cambio…', en: 'I think… because… On the other hand…' }, follow: [{ es: '¿Hay alguna pelea así en tu región?', en: 'Is there a fight like that in your region?' }, { es: '¿Por qué importa tanto?', en: 'Why does it matter so much?' }] },
            { q: { es: '¿Dónde está el límite entre inspiración y copia?', en: 'Where is the line between inspiration and copying?' }, help: { es: 'Para mí, es copia cuando… / Es inspiración si…', en: 'For me, it’s copying when… / It’s inspiration if…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Debería haber leyes?', en: 'Should there be laws?' }] },
            { q: { es: '¿Sabes distinguir algo artesanal de algo industrial?', en: 'Can you tell a craft product from an industrial one?' }, help: { es: 'Sí, me fijo en… / No, la verdad.', en: 'Yes, I look at… / Not really.' }, follow: [{ es: '¿Te engañaron alguna vez?', en: 'Have you ever been fooled?' }, { es: '¿Importa?', en: 'Does it matter?' }] },
            { q: { es: '¿Qué tradición de tu país te gustaría proteger?', en: 'Which tradition from your country would you like to protect?' }, help: { es: 'Me gustaría proteger… porque…', en: 'I’d like to protect… because…' }, follow: [{ es: '¿Está en peligro?', en: 'Is it in danger?' }, { es: '¿Quién la mantiene viva?', en: 'Who keeps it alive?' }] },
          ],
          words: [{ es: 'inmaterial', en: 'intangible' }, { es: 'impreso', en: 'printed' }, { es: 'distinguir', en: 'to tell apart' }, { es: 'el dueño', en: 'the owner' }, { es: 'la apropiación', en: 'appropriation' }],
        },
      },
    },
    // ------------------------------------------------------------ gamelan
    {
      id: 'gamelan',
      name: { es: 'El ensayo de gamelán', en: 'The gamelan rehearsal' },
      who: { name: 'Bambang', role: { es: 'músico de gamelán', en: 'gamelan musician' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche. En una sala abierta hay muchos instrumentos dorados. Hay gongs grandes. Bambang toca un tambor. Hay música lenta.', en: 'It is night. In an open hall there are many golden instruments. There are big gongs. Bambang plays a drum. There is slow music.' },
          opener: { es: '¡Hola! Esto es gamelán. Es música de Java. ¿Tocas un instrumento?', en: 'Hello! This is gamelan. It is music from Java. Do you play an instrument?' },
          decide: {
            ask: { es: '¿Qué tocas?', en: 'What do you play?' },
            options: [
              { say: { es: 'El gong grande.', en: 'The big gong.' }, then: { es: '¡GONNNG! El sonido es largo y profundo. Todos sonríen.', en: 'GONNNG! The sound is long and deep. Everyone smiles.' } },
              { say: { es: 'El tambor.', en: 'The drum.' }, then: { es: 'Bambang dice: «¡Rápido! ¡Lento!». Tú sigues el ritmo.', en: 'Bambang says: “Fast! Slow!” You follow the rhythm.' } },
              { say: { es: 'Nada. Escucho.', en: 'Nothing. I listen.' }, then: { es: 'Cierras los ojos. La música es como agua.', en: 'You close your eyes. The music is like water.' } },
            ],
          },
          twist: { es: 'Bambang dice: «¡No pases por encima de los instrumentos!». ¿Por qué?', en: 'Bambang says: “Don’t step over the instruments!” Why?' },
          questions: [
            { q: { es: '¿Tocas un instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco el/la… / No.', en: 'Yes, I play the… / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Quieres aprender uno?', en: 'Do you want to learn one?' }] },
            { q: { es: '¿Qué música te gusta?', en: 'What music do you like?' }, help: { es: 'Me gusta el/la…', en: 'I like…' }, follow: [{ es: '¿Un cantante favorito?', en: 'A favourite singer?' }, { es: '¿Bailas?', en: 'Do you dance?' }] },
            { q: { es: '¿Prefieres música rápida o lenta?', en: 'Do you prefer fast or slow music?' }, help: { es: 'Prefiero la música…', en: 'I prefer… music.' }, follow: [{ es: '¿Para qué momento?', en: 'For what moment?' }, { es: '¿Y para dormir?', en: 'And to sleep?' }] },
            { q: { es: '¿Cantas?', en: 'Do you sing?' }, help: { es: 'Sí, en la ducha. / No, nunca.', en: 'Yes, in the shower. / No, never.' }, follow: [{ es: '¿Qué canción?', en: 'Which song?' }, { es: '¿Con amigos?', en: 'With friends?' }] },
          ],
          words: [{ es: 'el instrumento', en: 'the instrument' }, { es: 'el tambor', en: 'the drum' }, { es: 'tocar', en: 'to play' }, { es: 'el ritmo', en: 'the rhythm' }, { es: 'lento', en: 'slow' }],
        },
        A1: {
          scene: { es: 'Un gamelán es una orquesta de veinte o treinta instrumentos, casi todos de bronce. No hay una estrella: todos tocan partes pequeñas que juntas forman la música. Bambang ensaya dos veces por semana con vecinos del barrio: hay un taxista, una profesora, dos estudiantes y un señor de ochenta años. El sábado tocan en una boda.', en: 'A gamelan is an orchestra of twenty or thirty instruments, almost all bronze. There’s no star: everyone plays small parts that together make the music. Bambang rehearses twice a week with neighbours: there’s a taxi driver, a teacher, two students and an eighty-year-old man. On Saturday they play at a wedding.' },
          opener: { es: 'En el gamelán, si uno toca muy fuerte, la música se rompe. Tienes que escuchar a los demás todo el tiempo. Por eso digo que es una escuela para vivir juntos. Además, los instrumentos tienen nombre y alma. Antes de tocar, nos quitamos los zapatos, y nunca pasamos por encima de ellos. ¿Tú tocas o cantas con otras personas?', en: 'In gamelan, if one person plays too loud, the music breaks. You have to listen to the others all the time. That’s why I say it’s a school for living together. Also, the instruments have names and souls. Before playing, we take our shoes off, and we never step over them. Do you play or sing with other people?' },
          decide: {
            ask: { es: '¿Cómo participas en el ensayo?', en: 'How do you take part in the rehearsal?' },
            options: [
              { say: { es: 'Toco una parte fácil.', en: 'I play an easy part.' }, then: { es: 'Solo tienes que tocar una nota cada cuatro golpes. Es más difícil de lo que parece.', en: 'You just have to play one note every four beats. It’s harder than it looks.' } },
              { say: { es: 'Le preparo té al grupo.', en: 'I make tea for the group.' }, then: { es: 'El señor de ochenta años te da las gracias y te cuenta que toca desde 1960.', en: 'The eighty-year-old man thanks you and tells you he’s been playing since 1960.' } },
              { say: { es: 'Grabo el ensayo con el teléfono.', en: 'I record the rehearsal on my phone.' }, then: { es: 'Bambang lo escucha y dice: «El taxista va otra vez demasiado rápido».', en: 'Bambang listens and says: “The taxi driver is going too fast again.”' } },
            ],
          },
          twist: { es: 'El hombre del gong grande se enferma y no puede venir el sábado. Bambang te mira a ti. ¿Aceptas?', en: 'The man on the big gong falls ill and can’t come on Saturday. Bambang looks at you. Do you accept?' },
          questions: [
            { q: { es: '¿Haces algo en grupo con tus vecinos?', en: 'Do you do anything in a group with your neighbours?' }, help: { es: 'Sí, hacemos… / No, no conozco a mis vecinos.', en: 'Yes, we do… / No, I don’t know my neighbours.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Qué música se toca en las bodas de tu país?', en: 'What music is played at weddings in your country?' }, help: { es: 'Normalmente se toca…', en: 'Usually they play…' }, follow: [{ es: '¿Hay baile?', en: 'Is there dancing?' }, { es: '¿Qué canción no puede faltar?', en: 'Which song is a must?' }] },
            { q: { es: '¿Sabes escuchar a los demás?', en: 'Are you good at listening to others?' }, help: { es: 'Sí, bastante. / Me cuesta un poco.', en: 'Yes, quite. / I find it a bit hard.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Quién te escucha a ti?', en: 'Who listens to you?' }] },
            { q: { es: '¿Te quitas los zapatos en casa?', en: 'Do you take your shoes off at home?' }, help: { es: 'Sí, siempre. / No.', en: 'Yes, always. / No.' }, follow: [{ es: '¿Y en casa de otros?', en: 'And at other people’s homes?' }, { es: '¿Es normal en tu país?', en: 'Is it normal in your country?' }] },
          ],
          words: [{ es: 'la orquesta', en: 'the orchestra' }, { es: 'el bronce', en: 'bronze' }, { es: 'ensayar', en: 'to rehearse' }, { es: 'la boda', en: 'the wedding' }, { es: 'el golpe', en: 'the beat' }],
        },
        A2: {
          scene: { es: 'Los jóvenes del barrio prefieren el pop coreano y la música electrónica. En las bodas, cada vez más familias contratan a un DJ en lugar de un gamelán, porque es más barato y «más moderno». El grupo de Bambang solo tiene tres miembros menores de treinta años. Entonces Dimas, un estudiante de diecinueve, propone algo: mezclar el gamelán con música electrónica y subir videos a internet.', en: 'Young people in the neighbourhood prefer K-pop and electronic music. At weddings, more and more families hire a DJ instead of a gamelan, because it’s cheaper and “more modern”. Bambang’s group has only three members under thirty. Then Dimas, a nineteen-year-old student, proposes something: mixing gamelan with electronic music and posting videos online.' },
          opener: { es: 'Cuando Dimas me lo dijo, me enojé. Pensé: el gamelán no es una fiesta de discoteca. Pero después escuché lo que hizo en su computadora y… no estaba mal. Tenía nuestro gong, nuestro ritmo, con un bajo por debajo. Mi maestro me diría que es una falta de respeto. Pero mi maestro también decía que la música que no cambia, muere. Ahora no sé qué pensar. ¿Las tradiciones deben cambiar para sobrevivir?', en: 'When Dimas told me, I got angry. I thought: gamelan isn’t a nightclub party. But then I listened to what he’d made on his computer and… it wasn’t bad. It had our gong, our rhythm, with a bass underneath. My teacher would tell me it’s disrespectful. But my teacher also used to say that music that doesn’t change dies. Now I don’t know what to think. Do traditions have to change to survive?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Bambang?', en: 'What do you advise Bambang?' },
            options: [
              { say: { es: 'Probar la mezcla, pero también tocar lo clásico.', en: 'Try the mix, but keep playing the classics too.' }, then: { es: 'Hacen dos conciertos: uno clásico y uno electrónico. Al segundo vienen jóvenes que nunca habían visto un gamelán.', en: 'They do two concerts: one classical and one electronic. Young people who had never seen a gamelan come to the second.' } },
              { say: { es: 'No mezclar. Enseñar gamelán en las escuelas.', en: 'Don’t mix. Teach gamelan in schools.' }, then: { es: 'Una escuela acepta. Los niños se aburren al principio, pero dos se quedan en el grupo.', en: 'One school agrees. The children are bored at first, but two stay in the group.' } },
              { say: { es: 'Dejar que Dimas haga su propio grupo.', en: 'Let Dimas start his own group.' }, then: { es: 'Dimas se va con dos jóvenes. Su video tiene un millón de vistas. Bambang lo mira en secreto.', en: 'Dimas leaves with two young people. His video gets a million views. Bambang watches it in secret.' } },
            ],
          },
          twist: { es: 'Una familia quiere gamelán en su boda, pero solo media hora, «y después el DJ». ¿Acepta Bambang?', en: 'A family wants gamelan at their wedding, but only half an hour, “and then the DJ”. Does Bambang accept?' },
          questions: [
            { q: { es: '¿Las tradiciones deben cambiar para sobrevivir?', en: 'Do traditions have to change to survive?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Un ejemplo de tu país?', en: 'An example from your country?' }, { es: '¿Qué se pierde?', en: 'What is lost?' }] },
            { q: { es: '¿Qué música escuchaban tus abuelos?', en: 'What music did your grandparents listen to?' }, help: { es: 'Escuchaban… / No lo sé.', en: 'They listened to… / I don’t know.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿La escuchas a veces?', en: 'Do you listen to it sometimes?' }] },
            { q: { es: '¿Te enojaste alguna vez con una idea nueva y después cambiaste de opinión?', en: 'Have you ever got angry at a new idea and then changed your mind?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Por qué cambiaste?', en: 'Why did you change?' }] },
            { q: { es: '¿Prefieres música en vivo o un DJ en una fiesta?', en: 'Do you prefer live music or a DJ at a party?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Y en una boda?', en: 'And at a wedding?' }, { es: '¿Cuánto pagarías?', en: 'How much would you pay?' }] },
          ],
          words: [{ es: 'contratar', en: 'to hire' }, { es: 'mezclar', en: 'to mix' }, { es: 'subir videos', en: 'to post videos' }, { es: 'la falta de respeto', en: 'disrespect' }, { es: 'sobrevivir', en: 'to survive' }],
        },
        B1: {
          scene: { es: 'En Java, el gamelán acompaña el «wayang kulit», el teatro de sombras: un solo narrador mueve figuras de cuero detrás de una tela blanca durante toda la noche, desde las nueve hasta el amanecer. Las historias vienen de antiguas epopeyas de la India, adaptadas con humor local y críticas al gobierno. Bambang toca para el narrador más famoso de la ciudad, que acaba de recibir una advertencia: una de sus figuras se parece demasiado a un político importante.', en: 'In Java, gamelan accompanies “wayang kulit”, shadow puppet theatre: a single narrator moves leather figures behind a white screen all night long, from nine until dawn. The stories come from ancient Indian epics, adapted with local humour and criticism of the government. Bambang plays for the most famous narrator in the city, who has just received a warning: one of his figures looks too much like an important politician.' },
          opener: { es: 'El wayang siempre fue así: los payasos dicen lo que la gente piensa y no se atreve a decir. Durante la dictadura, muchos narradores tenían que tener cuidado, pero igual encontraban la forma: una broma, un gesto, un nombre cambiado. El público entendía todo. Ahora alguien con poder dice que la figura del rey gordo «falta el respeto a las instituciones». El narrador quiere seguir. Yo tengo familia y no quiero problemas. Pero si dejamos de hacer reír al público a costa de los poderosos, ¿qué queda del wayang? ¿Hasta dónde debe llegar el humor político?', en: 'Wayang has always been like this: the clowns say what people think and don’t dare to say. During the dictatorship, many narrators had to be careful, but they still found a way: a joke, a gesture, a changed name. The audience understood everything. Now someone powerful says the figure of the fat king “disrespects institutions”. The narrator wants to carry on. I have a family and I don’t want trouble. But if we stop making the audience laugh at the powerful, what’s left of wayang? How far should political humour go?' },
          decide: {
            ask: { es: '¿Qué hace el grupo?', en: 'What does the group do?' },
            options: [
              { say: { es: 'Mantener la figura, sin cambios.', en: 'Keep the figure, unchanged.' }, then: { es: 'La función se llena. Al día siguiente, la policía pide «hablar» con el narrador. No hay arresto, pero sí miedo.', en: 'The show sells out. The next day, the police ask to “talk” with the narrator. No arrest, but there is fear.' } },
              { say: { es: 'Cambiar la figura, pero no el chiste.', en: 'Change the figure, but not the joke.' }, then: { es: 'El rey gordo ahora es un perro gordo. El público ríe todavía más: todos entienden.', en: 'The fat king is now a fat dog. The audience laughs even harder: everyone gets it.' } },
              { say: { es: 'Contar una historia clásica, sin política.', en: 'Tell a classic story, with no politics.' }, then: { es: 'La función es preciosa y tranquila. Un señor mayor dice al salir: «Esto ya no es wayang».', en: 'The show is beautiful and calm. An older man says on the way out: “This isn’t wayang any more.”' } },
            ],
          },
          twist: { es: 'Un canal de televisión quiere transmitir la función en directo, pero solo una versión de dos horas, «sin la parte política, que es aburrida». ¿Acepta el narrador?', en: 'A TV channel wants to broadcast the show live, but only a two-hour version, “without the political part, which is boring”. Does the narrator accept?' },
          questions: [
            { q: { es: '¿Hay límites para el humor sobre los políticos?', en: 'Are there limits to humour about politicians?' }, help: { es: 'Creo que… siempre que… / No debería haber límites porque…', en: 'I think… as long as… / There shouldn’t be limits because…' }, follow: [{ es: '¿Y sobre la religión?', en: 'And about religion?' }, { es: '¿Quién decide?', en: 'Who decides?' }] },
            { q: { es: '¿En tu país hay humoristas que critican al gobierno?', en: 'In your country are there comedians who criticise the government?' }, help: { es: 'Sí, por ejemplo… / Antes sí, ahora…', en: 'Yes, for example… / There used to be, now…' }, follow: [{ es: '¿Tienen problemas?', en: 'Do they get into trouble?' }, { es: '¿Te hacen reír?', en: 'Do they make you laugh?' }] },
            { q: { es: '¿Arriesgarías tu trabajo por decir lo que piensas?', en: 'Would you risk your job to say what you think?' }, help: { es: 'Depende de… / Sí, si se trata de…', en: 'It depends on… / Yes, if it’s about…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Conoces a alguien que lo hizo?', en: 'Do you know someone who did?' }] },
            { q: { es: '¿Por qué el humor puede ser más fuerte que un discurso serio?', en: 'Why can humour be stronger than a serious speech?' }, help: { es: 'Porque la gente… / Porque permite…', en: 'Because people… / Because it allows…' }, follow: [{ es: '¿Un chiste que recuerdas?', en: 'A joke you remember?' }, { es: '¿Funciona en todos los idiomas?', en: 'Does it work in every language?' }] },
          ],
          words: [{ es: 'la sombra', en: 'the shadow' }, { es: 'el narrador', en: 'the narrator' }, { es: 'la advertencia', en: 'the warning' }, { es: 'atreverse', en: 'to dare' }, { es: 'transmitir', en: 'to broadcast' }],
        },
      },
    },
    // ------------------------------------------------------------ night food stall
    {
      id: 'angkringan',
      name: { es: 'El puesto de comida nocturno', en: 'The night food stall' },
      who: { name: 'Joko', role: { es: 'dueño de un puesto de comida', en: 'food stall owner' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche en Yogyakarta. Hay un carrito con luces. Hay arroz, huevos y café. La gente se sienta en el suelo, en una alfombra. Joko sirve el café.', en: 'It is night in Yogyakarta. There is a cart with lights. There is rice, eggs and coffee. People sit on the floor, on a mat. Joko serves the coffee.' },
          opener: { es: '¡Buenas noches! Siéntate. ¿Tienes hambre?', en: 'Good evening! Sit down. Are you hungry?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'Arroz, por favor.', en: 'Rice, please.' }, then: { es: 'Es un paquete pequeño en una hoja de banana. ¡Es barato!', en: 'It is a small parcel in a banana leaf. It is cheap!' } },
              { say: { es: 'Un café.', en: 'A coffee.' }, then: { es: 'Joko pone una brasa en el café. ¡Hace fsss!', en: 'Joko puts a hot coal in the coffee. It goes fsss!' } },
              { say: { es: 'Un huevo.', en: 'An egg.' }, then: { es: 'Es un huevo pequeño de codorniz. ¡Qué rico!', en: 'It is a small quail egg. How tasty!' } },
            ],
          },
          twist: { es: 'Un gato se sienta a tu lado. Quiere tu comida. ¿Qué haces?', en: 'A cat sits next to you. It wants your food. What do you do?' },
          questions: [
            { q: { es: '¿Comes en la calle?', en: 'Do you eat on the street?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿Es barato?', en: 'Is it cheap?' }] },
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, con leche. / No, té.', en: 'Yes, with milk. / No, tea.' }, follow: [{ es: '¿Cuántos por día?', en: 'How many a day?' }, { es: '¿Y de noche?', en: 'And at night?' }] },
            { q: { es: '¿Cenas tarde?', en: 'Do you have dinner late?' }, help: { es: 'Sí, a las… / No, temprano.', en: 'Yes, at… / No, early.' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Te gustan los gatos?', en: 'Do you like cats?' }, help: { es: 'Sí, mucho. / No, prefiero los perros.', en: 'Yes, a lot. / No, I prefer dogs.' }, follow: [{ es: '¿Tienes uno?', en: 'Do you have one?' }, { es: '¿Cómo se llama?', en: 'What is its name?' }] },
          ],
          words: [{ es: 'el carrito', en: 'the cart' }, { es: 'el suelo', en: 'the floor' }, { es: 'el huevo', en: 'the egg' }, { es: 'barato', en: 'cheap' }, { es: 'la noche', en: 'the night' }],
        },
        A1: {
          scene: { es: 'Las «angkringan» son puestos de comida en carritos que abren de noche en Yogyakarta. Venden paquetes pequeños de arroz, pinchos, tofu frito y café muy dulce. Todo es barato, y la gente se queda horas hablando: estudiantes, taxistas, profesores, músicos. Joko abre su carrito a las seis de la tarde y lo cierra a las tres de la mañana. De día duerme.', en: '“Angkringan” are food stalls on carts that open at night in Yogyakarta. They sell small packets of rice, skewers, fried tofu and very sweet coffee. Everything is cheap, and people stay for hours talking: students, taxi drivers, teachers, musicians. Joko opens his cart at six in the evening and closes it at three in the morning. He sleeps during the day.' },
          opener: { es: 'Aquí se sienta el estudiante al lado del profesor, y el taxista al lado del médico. Nadie pregunta cuánto ganas. Yo escucho todas las historias: amores, exámenes, peleas, política. A veces pienso que sé más de la ciudad que el alcalde. Mi café con brasa es famoso: pongo un carbón caliente dentro del vaso. Dicen que es bueno para el estómago. ¿Dónde se encuentra la gente en tu ciudad?', en: 'Here the student sits next to the teacher, and the taxi driver next to the doctor. Nobody asks how much you earn. I hear all the stories: love, exams, fights, politics. Sometimes I think I know more about the city than the mayor. My coal coffee is famous: I put a hot piece of charcoal in the glass. They say it’s good for the stomach. Where do people meet in your city?' },
          decide: {
            ask: { es: '¿Con quién hablas?', en: 'Who do you talk to?' },
            options: [
              { say: { es: 'Con unos estudiantes.', en: 'With some students.' }, then: { es: 'Mañana tienen un examen, pero siguen aquí. Te preguntan palabras en tu idioma.', en: 'They have an exam tomorrow, but they’re still here. They ask you words in your language.' } },
              { say: { es: 'Con un taxista.', en: 'With a taxi driver.' }, then: { es: 'Te cuenta que trabaja doce horas. Te recomienda un lugar secreto para ver el volcán.', en: 'He tells you he works twelve hours. He recommends a secret spot to see the volcano.' } },
              { say: { es: 'Con Joko.', en: 'With Joko.' }, then: { es: 'Joko te enseña a hacer el café con brasa. Te quemas un poco el dedo.', en: 'Joko teaches you to make the coal coffee. You burn your finger a little.' } },
            ],
          },
          twist: { es: 'Empieza a llover fuerte. Todos se meten debajo de una lona pequeña. ¿Qué pasa?', en: 'It starts raining hard. Everyone squeezes under a small tarp. What happens?' },
          questions: [
            { q: { es: '¿Dónde se encuentra la gente en tu ciudad?', en: 'Where do people meet in your city?' }, help: { es: 'En el/la… / En los bares.', en: 'In the… / In bars.' }, follow: [{ es: '¿Tú vas?', en: 'Do you go?' }, { es: '¿Hasta qué hora?', en: 'Until what time?' }] },
            { q: { es: '¿Hablas con desconocidos?', en: 'Do you talk to strangers?' }, help: { es: 'Sí, a veces. / No, me da vergüenza.', en: 'Yes, sometimes. / No, I’m shy.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Una buena conversación?', en: 'A good conversation?' }] },
            { q: { es: '¿Trabajarías de noche?', en: 'Would you work at night?' }, help: { es: 'Sí. / No, necesito dormir de noche.', en: 'Yes. / No, I need to sleep at night.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Conoces a alguien que lo hace?', en: 'Do you know someone who does?' }] },
            { q: { es: '¿Cuál es tu comida barata favorita?', en: 'What is your favourite cheap food?' }, help: { es: 'Mi comida barata favorita es…', en: 'My favourite cheap food is…' }, follow: [{ es: '¿Dónde la compras?', en: 'Where do you buy it?' }, { es: '¿Cuánto cuesta?', en: 'How much is it?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'el pincho', en: 'the skewer' }, { es: 'frito', en: 'fried' }, { es: 'la brasa', en: 'the hot coal' }, { es: 'el desconocido', en: 'the stranger' }],
        },
        A2: {
          scene: { es: 'La alcaldía quiere «ordenar» el centro de Yogyakarta para los turistas. El plan es sacar los carritos de la calle principal y llevarlos a un patio de comidas cerrado, con mesas, baños y aire acondicionado. Cada puesto tendría que pagar un alquiler mensual. Joko lleva veinte años en la misma esquina. Sus clientes lo buscan ahí.', en: 'The city council wants to “tidy up” central Yogyakarta for tourists. The plan is to take the carts off the main street and move them into an enclosed food court, with tables, toilets and air conditioning. Each stall would have to pay a monthly rent. Joko has been on the same corner for twenty years. His customers look for him there.' },
          opener: { es: 'Dicen que en el patio de comidas estaremos mejor: con techo, con baños. Puede ser. Pero el alquiler es casi lo que gano en una semana. Y la angkringan no es solo la comida: es la calle, la noche, el ruido de las motos, sentarse en el suelo. En un lugar cerrado con aire acondicionado, la gente come y se va. Además, si yo me voy de esta esquina, ¿quién va a vigilar la calle de noche? ¿Tú qué piensas?', en: 'They say we’ll be better off in the food court: with a roof, with toilets. Maybe. But the rent is almost what I earn in a week. And the angkringan isn’t just the food: it’s the street, the night, the noise of the motorbikes, sitting on the ground. In an enclosed air-conditioned place, people eat and leave. Besides, if I leave this corner, who’s going to keep an eye on the street at night? What do you think?' },
          decide: {
            ask: { es: '¿Qué hace Joko?', en: 'What does Joko do?' },
            options: [
              { say: { es: 'Se muda al patio de comidas.', en: 'He moves to the food court.' }, then: { es: 'Tiene más clientes turistas, pero sus clientes de siempre dejan de venir. Echa de menos la esquina.', en: 'He has more tourist customers, but his regulars stop coming. He misses the corner.' } },
              { say: { es: 'Se organiza con los otros vendedores para protestar.', en: 'He organises with the other vendors to protest.' }, then: { es: 'Juntan tres mil firmas. La alcaldía acepta dejar algunos carritos en la calle, con horario.', en: 'They collect three thousand signatures. The council agrees to leave some carts on the street, with set hours.' } },
              { say: { es: 'Se queda en la esquina y paga las multas.', en: 'He stays on the corner and pays the fines.' }, then: { es: 'Los clientes hacen una colecta para pagar la primera multa. La segunda es más cara.', en: 'Customers take up a collection to pay the first fine. The second is more expensive.' } },
            ],
          },
          twist: { es: 'Una turista escribe una reseña: «La angkringan de Joko es lo mejor de Yogyakarta». La reseña se hace viral. ¿Ayuda o complica?', en: 'A tourist writes a review: “Joko’s angkringan is the best thing in Yogyakarta.” The review goes viral. Does it help or complicate things?' },
          questions: [
            { q: { es: '¿Prefieres comer en la calle o en un restaurante?', en: 'Do you prefer eating on the street or in a restaurant?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Y cuando viajas?', en: 'And when you travel?' }, { es: '¿Qué es más limpio?', en: 'Which is cleaner?' }] },
            { q: { es: '¿Tu ciudad cambió algún lugar para los turistas?', en: 'Has your city changed a place for tourists?' }, help: { es: 'Sí, el/la… antes era… / No.', en: 'Yes, the… used to be… / No.' }, follow: [{ es: '¿Te gusta el cambio?', en: 'Do you like the change?' }, { es: '¿Quién ganó?', en: 'Who benefited?' }] },
            { q: { es: '¿Firmaste alguna vez para una causa?', en: 'Have you ever signed for a cause?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, for… / No, never.' }, follow: [{ es: '¿Sirvió?', en: 'Did it work?' }, { es: '¿Por qué firmaste?', en: 'Why did you sign?' }] },
            { q: { es: '¿Hay un vendedor que conoces desde hace años?', en: 'Is there a vendor you’ve known for years?' }, help: { es: 'Sí, el señor/la señora del… / No.', en: 'Yes, the man/woman at the… / No.' }, follow: [{ es: '¿Qué vende?', en: 'What do they sell?' }, { es: '¿Qué pasaría si se va?', en: 'What would happen if they left?' }] },
          ],
          words: [{ es: 'ordenar', en: 'to tidy up' }, { es: 'el alquiler', en: 'the rent' }, { es: 'la multa', en: 'the fine' }, { es: 'vigilar', en: 'to keep an eye on' }, { es: 'la reseña', en: 'the review' }],
        },
        B1: {
          scene: { es: 'En Indonesia, más de la mitad de los trabajadores están en la economía informal: vendedores ambulantes, conductores de moto, empleadas domésticas. No tienen contrato, ni jubilación, ni seguro médico. Una nueva aplicación de pedidos promete «formalizar» a los vendedores como Joko: pagos por teléfono, impuestos automáticos y un seguro básico. A cambio, se queda con el veinte por ciento de cada venta. Un grupo de economistas visita la angkringan para entrevistar a Joko.', en: 'In Indonesia, more than half of workers are in the informal economy: street vendors, motorbike drivers, domestic workers. They have no contract, no pension, no health insurance. A new ordering app promises to “formalise” vendors like Joko: phone payments, automatic taxes and basic insurance. In return, it takes twenty per cent of every sale. A group of economists visits the angkringan to interview Joko.' },
          opener: { es: 'Los economistas me dicen que soy «informal», como si fuera un problema. Yo pago a mis proveedores, ayudo a mi sobrino con la escuela y alimento a medio barrio por muy poco dinero. Nunca tuve un jefe ni un contrato, es verdad. Tampoco tengo jubilación, y eso me preocupa: tengo cincuenta y cuatro años y mis rodillas ya no son las de antes. La aplicación me daría un seguro, pero el veinte por ciento es casi toda mi ganancia. ¿Ser «formal» es una protección o solo otra forma de que alguien se quede con una parte?', en: 'The economists tell me I’m “informal”, as if it were a problem. I pay my suppliers, I help my nephew with school and I feed half the neighbourhood for very little money. I’ve never had a boss or a contract, it’s true. I don’t have a pension either, and that worries me: I’m fifty-four and my knees aren’t what they used to be. The app would give me insurance, but twenty per cent is almost all my profit. Is being “formal” protection or just another way for someone to take a cut?' },
          decide: {
            ask: { es: '¿Qué le responde Joko a la aplicación?', en: 'What does Joko tell the app?' },
            options: [
              { say: { es: 'Acepta, para tener el seguro.', en: 'He accepts, to get the insurance.' }, then: { es: 'Sube los precios un poco. Algunos estudiantes ya no pueden pagar y dejan de venir.', en: 'He raises prices a little. Some students can no longer afford it and stop coming.' } },
              { say: { es: 'Se niega y crea una cooperativa con otros vendedores.', en: 'He refuses and sets up a cooperative with other vendors.' }, then: { es: 'Treinta carritos ponen un poco cada mes en un fondo común para emergencias. Es pequeño, pero es suyo.', en: 'Thirty carts put a little each month into a shared emergency fund. It’s small, but it’s theirs.' } },
              { say: { es: 'Acepta solo para los pedidos a domicilio.', en: 'He accepts only for home deliveries.' }, then: { es: 'La comida de la calle sigue igual. Los pedidos por teléfono suben, pero la comisión le duele.', en: 'Street food stays the same. Phone orders go up, but the commission hurts.' } },
            ],
          },
          twist: { es: 'Uno de los economistas, joven, pide un café con brasa y confiesa: su padre tenía un carrito igual y nunca pudo jubilarse. ¿Cambia eso la entrevista?', en: 'One of the economists, a young one, orders a coal coffee and confesses: his father had a cart just like this and could never retire. Does that change the interview?' },
          questions: [
            { q: { es: '¿Es mejor trabajar con contrato o por tu cuenta?', en: 'Is it better to work with a contract or for yourself?' }, help: { es: 'Con contrato tienes…, pero por tu cuenta…', en: 'With a contract you have…, but on your own…' }, follow: [{ es: '¿Qué prefieres tú?', en: 'What do you prefer?' }, { es: '¿Y tus padres?', en: 'And your parents?' }] },
            { q: { es: '¿Las aplicaciones ayudan o explotan a los trabajadores?', en: 'Do apps help or exploit workers?' }, help: { es: 'Ayudan cuando… / Explotan porque…', en: 'They help when… / They exploit because…' }, follow: [{ es: '¿Usas alguna?', en: 'Do you use any?' }, { es: '¿Sabes cuánto se quedan?', en: 'Do you know how much they take?' }] },
            { q: { es: '¿Te preocupa tu jubilación?', en: 'Do you worry about your retirement?' }, help: { es: 'Sí, mucho, porque… / Todavía no lo pienso.', en: 'Yes, a lot, because… / I don’t think about it yet.' }, follow: [{ es: '¿Ahorras?', en: 'Do you save?' }, { es: '¿Quién debería pagarla?', en: 'Who should pay for it?' }] },
            { q: { es: '¿La economía informal es un problema o una solución?', en: 'Is the informal economy a problem or a solution?' }, help: { es: 'Es un problema porque… pero también…', en: 'It’s a problem because… but also…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What’s it like in your country?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
          ],
          words: [{ es: 'informal', en: 'informal' }, { es: 'la jubilación', en: 'the pension' }, { es: 'el seguro', en: 'the insurance' }, { es: 'la comisión', en: 'the commission' }, { es: 'la cooperativa', en: 'the cooperative' }],
        },
      },
    },
    // ------------------------------------------------------------ Jakarta
    {
      id: 'yakarta',
      name: { es: 'El tráfico de Yakarta', en: 'Jakarta traffic' },
      who: { name: 'Rina', role: { es: 'conductora de mototaxi', en: 'motorbike taxi driver' } },
      levels: {
        A0: {
          scene: { es: 'Es Yakarta, la capital. Hay muchos coches y muchas motos. Hay edificios altos. Hace calor. Rina tiene una moto y un casco verde.', en: 'It is Jakarta, the capital. There are many cars and many motorbikes. There are tall buildings. It is hot. Rina has a motorbike and a green helmet.' },
          opener: { es: '¡Hola! Soy Rina. ¿Adónde vas? Sube a la moto.', en: 'Hello! I am Rina. Where are you going? Get on the bike.' },
          decide: {
            ask: { es: '¿Adónde vas?', en: 'Where are you going?' },
            options: [
              { say: { es: 'Al centro comercial.', en: 'To the shopping centre.' }, then: { es: 'Es enorme. Tiene aire acondicionado. ¡Qué fresco!', en: 'It is huge. It has air conditioning. How cool!' } },
              { say: { es: 'Al mar.', en: 'To the sea.' }, then: { es: 'Hay un puerto con barcos de colores.', en: 'There is a port with colourful boats.' } },
              { say: { es: 'Al museo.', en: 'To the museum.' }, then: { es: 'Es una casa vieja y blanca. Hay una plaza grande.', en: 'It is an old white house. There is a big square.' } },
            ],
          },
          twist: { es: 'Hay mucho tráfico. Nadie se mueve. Rina dice: «¡Agárrate!». ¿Qué pasa?', en: 'There is a lot of traffic. Nobody moves. Rina says: “Hold on!” What happens?' },
          questions: [
            { q: { es: '¿Cómo vas al trabajo o a clase?', en: 'How do you get to work or class?' }, help: { es: 'Voy en… / Voy a pie.', en: 'I go by… / I walk.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Hay tráfico?', en: 'Is there traffic?' }] },
            { q: { es: '¿Te gustan las motos?', en: 'Do you like motorbikes?' }, help: { es: 'Sí. / No, me dan miedo.', en: 'Yes. / No, they scare me.' }, follow: [{ es: '¿Tienes una?', en: 'Do you have one?' }, { es: '¿Y bicicleta?', en: 'And a bike?' }] },
            { q: { es: '¿Tu ciudad es grande?', en: 'Is your city big?' }, help: { es: 'Sí, muy grande. / No, es pequeña.', en: 'Yes, very big. / No, it is small.' }, follow: [{ es: '¿Cuántas personas?', en: 'How many people?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like the heat?' }, help: { es: 'Sí, mucho. / No, prefiero el frío.', en: 'Yes, a lot. / No, I prefer the cold.' }, follow: [{ es: '¿Qué haces cuando hace calor?', en: 'What do you do when it’s hot?' }, { es: '¿Y en invierno?', en: 'And in winter?' }] },
          ],
          words: [{ es: 'la moto', en: 'the motorbike' }, { es: 'el casco', en: 'the helmet' }, { es: 'el tráfico', en: 'traffic' }, { es: 'la capital', en: 'the capital' }, { es: 'el calor', en: 'heat' }],
        },
        A1: {
          scene: { es: 'En Yakarta y sus alrededores viven más de treinta millones de personas. El tráfico es uno de los peores del mundo: un viaje de diez kilómetros puede durar dos horas. Por eso mucha gente usa mototaxis, que se piden con una aplicación del teléfono. Rina es mototaxista desde hace tres años. Antes trabajaba en una oficina, pero ahora gana más y elige sus horarios.', en: 'More than thirty million people live in Jakarta and the surrounding area. The traffic is among the worst in the world: a ten-kilometre trip can take two hours. That’s why many people use motorbike taxis, ordered with a phone app. Rina has been a motorbike taxi driver for three years. She used to work in an office, but now she earns more and chooses her hours.' },
          opener: { es: 'Al principio muchos pasajeros se sorprendían: «¿Una mujer?». Ahora hay muchas, sobre todo porque algunas pasajeras prefieren una conductora. Conozco la ciudad como mi casa: los atajos, los callejones, dónde comer barato. Lo peor es la lluvia: en diez minutos la calle se convierte en un río. Lo mejor es la libertad. ¿Cómo te mueves tú por tu ciudad?', en: 'At first many passengers were surprised: “A woman?” Now there are lots of us, especially because some women passengers prefer a female driver. I know the city like my own home: the shortcuts, the alleys, where to eat cheaply. The worst is the rain: in ten minutes the street becomes a river. The best is the freedom. How do you get around your city?' },
          decide: {
            ask: { es: '¿Qué le pides a Rina?', en: 'What do you ask Rina?' },
            options: [
              { say: { es: 'Ir por el camino más rápido.', en: 'To take the fastest route.' }, then: { es: 'Rina entra en un callejón tan estrecho que tocas las paredes. Llegan en quince minutos.', en: 'Rina goes into an alley so narrow you touch the walls. You arrive in fifteen minutes.' } },
              { say: { es: 'Ir despacio, tengo miedo.', en: 'To go slowly, I’m scared.' }, then: { es: 'Rina se ríe y va más despacio. Te enseña los mejores puestos de comida del camino.', en: 'Rina laughs and slows down. She shows you the best food stalls on the way.' } },
              { say: { es: 'Parar a comer algo.', en: 'To stop to eat something.' }, then: { es: 'Paran en un puesto de «nasi goreng». Rina conoce al cocinero desde hace años.', en: 'You stop at a “nasi goreng” stall. Rina has known the cook for years.' } },
            ],
          },
          twist: { es: 'Empieza a llover muy fuerte. Rina saca dos capas de plástico. La calle ya tiene agua hasta las rodillas. ¿Seguimos?', en: 'It starts raining very hard. Rina takes out two plastic ponchos. The street already has knee-deep water. Do we keep going?' },
          questions: [
            { q: { es: '¿Cómo te mueves por tu ciudad?', en: 'How do you get around your city?' }, help: { es: 'Normalmente voy en…', en: 'I usually go by…' }, follow: [{ es: '¿Cuánto cuesta?', en: 'How much does it cost?' }, { es: '¿Es rápido?', en: 'Is it fast?' }] },
            { q: { es: '¿Usas aplicaciones para viajar?', en: 'Do you use apps to get around?' }, help: { es: 'Sí, uso… / No, nunca.', en: 'Yes, I use… / No, never.' }, follow: [{ es: '¿Para qué?', en: 'For what?' }, { es: '¿Confías en ellas?', en: 'Do you trust them?' }] },
            { q: { es: '¿Conoces un atajo en tu ciudad?', en: 'Do you know a shortcut in your city?' }, help: { es: 'Sí, por la calle… / No.', en: 'Yes, along… street. / No.' }, follow: [{ es: '¿Quién te lo enseñó?', en: 'Who showed you?' }, { es: '¿Es seguro?', en: 'Is it safe?' }] },
            { q: { es: '¿Qué es más importante: ganar más o tener libertad?', en: 'What matters more: earning more or having freedom?' }, help: { es: 'Para mí es más importante…', en: 'For me, … is more important.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Siempre pensaste así?', en: 'Have you always thought so?' }] },
          ],
          words: [{ es: 'los alrededores', en: 'the surrounding area' }, { es: 'el pasajero', en: 'the passenger' }, { es: 'el atajo', en: 'the shortcut' }, { es: 'el callejón', en: 'the alley' }, { es: 'la libertad', en: 'freedom' }],
        },
        A2: {
          scene: { es: 'La aplicación cambió las reglas otra vez: ahora paga menos por viaje y da premios solo a los conductores que hacen más de veinte viajes por día. Rina necesita trabajar trece horas para ganar lo mismo que antes ganaba en ocho. Los conductores organizan una protesta frente a la oficina de la empresa. Rina tiene dudas: si no trabaja hoy, no cobra, y tiene que pagar la moto.', en: 'The app has changed the rules again: now it pays less per trip and gives bonuses only to drivers who do more than twenty trips a day. Rina needs to work thirteen hours to earn what she used to earn in eight. The drivers organise a protest in front of the company’s office. Rina has doubts: if she doesn’t work today, she doesn’t get paid, and she has to pay off the bike.' },
          opener: { es: 'La empresa dice que somos «socios», no empleados. Pero un socio decide algo, ¿no? Nosotros no decidimos nada: un día cambian el precio y te enteras por un mensaje en el teléfono. Si me quejo, el algoritmo me da menos viajes. Mi hermano dice que vaya a la protesta, que si no luchamos ahora, va a ser peor. Mi madre dice que no me meta en problemas. ¿Tú irías a la protesta?', en: 'The company says we’re “partners”, not employees. But a partner decides something, right? We don’t decide anything: one day they change the price and you find out from a message on your phone. If I complain, the algorithm gives me fewer trips. My brother says I should go to the protest, that if we don’t fight now, it’ll get worse. My mother says not to get into trouble. Would you go to the protest?' },
          decide: {
            ask: { es: '¿Qué hace Rina?', en: 'What does Rina do?' },
            options: [
              { say: { es: 'Va a la protesta.', en: 'She goes to the protest.' }, then: { es: 'Hay miles de motos verdes en la calle. Sale en la televisión. Al día siguiente, recibe menos viajes.', en: 'There are thousands of green bikes on the street. She’s on TV. The next day, she gets fewer trips.' } },
              { say: { es: 'Trabaja, pero firma la petición.', en: 'She works, but signs the petition.' }, then: { es: 'Gana el dinero del día. Se siente un poco culpable cuando ve las fotos de la protesta.', en: 'She earns the day’s money. She feels a bit guilty when she sees photos of the protest.' } },
              { say: { es: 'Empieza a trabajar para otra aplicación.', en: 'She starts working for another app.' }, then: { es: 'La nueva paga mejor el primer mes. Tres meses después, cambia las reglas también.', en: 'The new one pays better the first month. Three months later, it changes the rules too.' } },
            ],
          },
          twist: { es: 'Un pasajero le da una propina enorme y le dice: «Soy gerente de la aplicación. No le digas a nadie». ¿Qué hace Rina?', en: 'A passenger gives her a huge tip and says: “I’m a manager at the app. Don’t tell anyone.” What does Rina do?' },
          questions: [
            { q: { es: '¿Irías a una protesta por tu trabajo?', en: 'Would you go to a protest about your work?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Fuiste alguna vez?', en: 'Have you ever been?' }, { es: '¿Sirven las protestas?', en: 'Do protests work?' }] },
            { q: { es: '¿Das propina?', en: 'Do you tip?' }, help: { es: 'Sí, siempre. / Depende del servicio.', en: 'Yes, always. / It depends on the service.' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Es normal en tu país?', en: 'Is it normal in your country?' }] },
            { q: { es: '¿Cuántas horas por día es razonable trabajar?', en: 'How many hours a day is reasonable to work?' }, help: { es: 'Creo que… horas.', en: 'I think… hours.' }, follow: [{ es: '¿Cuántas trabajas tú?', en: 'How many do you work?' }, { es: '¿Y tus padres?', en: 'And your parents?' }] },
            { q: { es: '¿Escuchas más a tu familia o a tus amigos?', en: 'Do you listen more to your family or your friends?' }, help: { es: 'Escucho más a… porque…', en: 'I listen more to… because…' }, follow: [{ es: '¿En qué temas?', en: 'On which topics?' }, { es: '¿Te equivocaste alguna vez?', en: 'Were you ever wrong?' }] },
          ],
          words: [{ es: 'el socio', en: 'the partner' }, { es: 'el algoritmo', en: 'the algorithm' }, { es: 'la protesta', en: 'the protest' }, { es: 'cobrar', en: 'to get paid' }, { es: 'la propina', en: 'the tip' }],
        },
        B1: {
          scene: { es: 'Yakarta se hunde: en algunos barrios del norte, el suelo baja más de diez centímetros por año, porque se saca demasiada agua del subsuelo. Partes de la ciudad ya están por debajo del nivel del mar. Por eso el gobierno decidió construir una nueva capital, Nusantara, en la isla de Borneo, a más de mil kilómetros. Los ministerios se mudarán poco a poco. Rina vive en el norte de Yakarta, donde el agua del mar ya entra en algunas casas.', en: 'Jakarta is sinking: in some northern neighbourhoods, the ground drops more than ten centimetres a year, because too much water is pumped from underground. Parts of the city are already below sea level. That’s why the government decided to build a new capital, Nusantara, on the island of Borneo, more than a thousand kilometres away. Ministries will move gradually. Rina lives in north Jakarta, where seawater already gets into some houses.' },
          opener: { es: 'Los ministros se van a Borneo, a una ciudad nueva con árboles y edificios inteligentes. ¿Y nosotros? Treinta millones de personas nos quedamos aquí, con el mar en la puerta. En mi calle levantamos el suelo de las casas cada pocos años, y cada vez el agua llega otra vez. Mi vecina ya se fue a vivir con su hija. Dicen que la nueva capital servirá para que el país crezca de forma más justa, no todo en Java. Puede ser. Pero también parece que los que tienen poder se escapan del problema que ayudaron a crear. ¿Qué haría falta para salvar una ciudad?', en: 'The ministers are going to Borneo, to a new city with trees and smart buildings. And us? Thirty million of us are staying here, with the sea at the door. On my street we raise the floors of our houses every few years, and each time the water comes back. My neighbour already went to live with her daughter. They say the new capital will help the country grow more fairly, not everything in Java. Maybe. But it also looks like those in power are escaping a problem they helped create. What would it take to save a city?' },
          decide: {
            ask: { es: '¿Qué decide Rina?', en: 'What does Rina decide?' },
            options: [
              { say: { es: 'Quedarse y unirse al grupo del barrio.', en: 'Stay and join the neighbourhood group.' }, then: { es: 'El grupo pide agua de red para todos, para que nadie saque agua del subsuelo. Es lento, pero el suelo baja menos.', en: 'The group asks for mains water for everyone, so nobody pumps groundwater. It’s slow, but the ground sinks less.' } },
              { say: { es: 'Mudarse a Nusantara para trabajar allí.', en: 'Move to Nusantara to work there.' }, then: { es: 'Hay pocos pasajeros y mucho polvo de obra. La ciudad todavía está medio vacía.', en: 'There are few passengers and a lot of construction dust. The city is still half empty.' } },
              { say: { es: 'Mudarse al sur de Yakarta, más alto.', en: 'Move to south Jakarta, which is higher.' }, then: { es: 'El alquiler es el doble. Rina hace más horas en la moto para pagarlo.', en: 'Rent is double. Rina works more hours on the bike to pay for it.' } },
            ],
          },
          twist: { es: 'Un periodista extranjero le pide a Rina una foto «dramática» con el agua hasta las rodillas, delante de su casa. Ella no quiere ser solo una víctima en las noticias. ¿Qué le dice?', en: 'A foreign journalist asks Rina for a “dramatic” photo with water up to her knees, in front of her house. She doesn’t want to be just a victim in the news. What does she tell him?' },
          questions: [
            { q: { es: '¿Está bien mover una capital para escapar de un problema?', en: 'Is it right to move a capital to escape a problem?' }, help: { es: 'Tiene sentido si… / No, porque así…', en: 'It makes sense if… / No, because that way…' }, follow: [{ es: '¿Conoces otros casos?', en: 'Do you know other cases?' }, { es: '¿Quién paga?', en: 'Who pays?' }] },
            { q: { es: '¿Tu ciudad tiene un problema ambiental grave?', en: 'Does your city have a serious environmental problem?' }, help: { es: 'Sí, el/la… / No mucho, pero…', en: 'Yes, the… / Not really, but…' }, follow: [{ es: '¿Quién es responsable?', en: 'Who is responsible?' }, { es: '¿Qué se hace?', en: 'What is being done?' }] },
            { q: { es: '¿Te irías de tu ciudad si estuviera en peligro?', en: 'Would you leave your city if it were in danger?' }, help: { es: 'Me iría si… / Me quedaría porque…', en: 'I’d leave if… / I’d stay because…' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Qué extrañarías?', en: 'What would you miss?' }] },
            { q: { es: '¿Cómo deberían contar las noticias estas historias?', en: 'How should the news tell these stories?' }, help: { es: 'Deberían mostrar… en vez de…', en: 'They should show… instead of…' }, follow: [{ es: '¿Un ejemplo bueno?', en: 'A good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
          ],
          words: [{ es: 'hundirse', en: 'to sink' }, { es: 'el subsuelo', en: 'underground' }, { es: 'el nivel del mar', en: 'sea level' }, { es: 'el ministerio', en: 'the ministry' }, { es: 'la víctima', en: 'the victim' }],
        },
      },
    },
  ],
};
