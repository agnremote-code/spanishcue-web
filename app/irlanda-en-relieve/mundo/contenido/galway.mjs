// Galway y Connemara · the Aran Islands, the Cliffs of Moher, the arts festival in the
// streets of Galway, the bogs and ponies of Connemara and the oyster festival. Five
// places, four levels each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'galway',
  spots: [
    // ------------------------------------------------------------ the Aran Islands
    {
      id: 'aran',
      name: { es: 'Las islas de Aran', en: 'The Aran Islands' },
      who: { name: 'Máire', role: { es: 'tejedora de jerséis', en: 'sweater knitter' } },
      levels: {
        A0: {
          scene: { es: 'Es una isla pequeña. Hay piedras, muros y vacas. Hace viento. Máire está en su tienda con muchos jerséis blancos.', en: 'It is a small island. There are stones, walls and cows. It is windy. Máire is in her shop with many white sweaters.' },
          opener: { es: '¡Hola! Soy Máire. Hago jerséis de lana. Son muy calientes. ¿Tienes frío?', en: 'Hello! I am Máire. I make wool sweaters. They are very warm. Are you cold?' },
          decide: {
            ask: { es: 'Máire te muestra tres jerséis. ¿Cuál quieres?', en: 'Máire shows you three sweaters. Which one do you want?' },
            options: [
              { say: { es: 'El blanco, el clásico.', en: 'The white one, the classic.' }, then: { es: 'Máire dice: «Es el más famoso. Muy bonito».', en: 'Máire says: “It is the most famous. Very nice.”' } },
              { say: { es: 'El gris, para la ciudad.', en: 'The grey one, for the city.' }, then: { es: 'Te queda un poco grande. Máire ríe.', en: 'It is a bit big on you. Máire laughs.' } },
              { say: { es: 'Ninguno. Es caro.', en: 'None. It is expensive.' }, then: { es: 'Máire te da un gorro pequeño. «Es un regalo».', en: 'Máire gives you a small hat. “It is a gift.”' } },
            ],
          },
          twist: { es: 'Llueve mucho. El barco no sale hoy. Duermes en la isla. ¿Qué haces?', en: 'It rains a lot. The boat does not leave today. You sleep on the island. What do you do?' },
          questions: [
            { q: { es: '¿Tienes un jersey favorito?', en: 'Do you have a favourite sweater?' }, help: { es: 'Sí, es… / No.', en: 'Yes, it is… / No.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Quién te lo dio?', en: 'Who gave it to you?' }] },
            { q: { es: '¿Te gustan las islas?', en: 'Do you like islands?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué isla conoces?', en: 'Which island do you know?' }, { es: '¿Hay islas en tu país?', en: 'Are there islands in your country?' }] },
            { q: { es: '¿Tienes frío ahora?', en: 'Are you cold now?' }, help: { es: 'Sí, un poco. / No, tengo calor.', en: 'Yes, a little. / No, I am hot.' }, follow: [{ es: '¿Qué tiempo hace?', en: 'What is the weather like?' }, { es: '¿Te gusta el frío?', en: 'Do you like the cold?' }] },
            { q: { es: '¿Sabes tejer?', en: 'Can you knit?' }, help: { es: 'Sí, un poco. / No, no sé.', en: 'Yes, a little. / No, I can’t.' }, follow: [{ es: '¿Quién teje en tu familia?', en: 'Who knits in your family?' }, { es: '¿Quieres aprender?', en: 'Do you want to learn?' }] },
          ],
          words: [{ es: 'el jersey', en: 'the sweater' }, { es: 'la lana', en: 'the wool' }, { es: 'el viento', en: 'the wind' }, { es: 'el barco', en: 'the boat' }, { es: 'la piedra', en: 'the stone' }],
        },
        A1: {
          scene: { es: 'En Inis Mór viven unas ochocientas personas. Hay kilómetros de muros de piedra sin cemento. Máire teje desde niña. Cada familia tenía antes su propio dibujo en el jersey.', en: 'About eight hundred people live on Inis Mór. There are kilometres of stone walls without cement. Máire has knitted since she was a girl. Each family used to have its own pattern on the sweater.' },
          opener: { es: 'Mi madre tejía por las noches, al lado del fuego. Cada punto tiene un significado: este es la cuerda de los pescadores, este es el panal de las abejas. Un jersey grande me lleva tres semanas. ¿Tú haces algo con las manos?', en: 'My mother knitted at night, next to the fire. Each stitch has a meaning: this one is the fishermen’s rope, this one is the honeycomb. A big sweater takes me three weeks. Do you make anything with your hands?' },
          decide: {
            ask: { es: 'Un cliente quiere un jersey en dos días. ¿Qué le aconsejas a Máire?', en: 'A customer wants a sweater in two days. What do you advise Máire?' },
            options: [
              { say: { es: 'Que diga que no: es imposible.', en: 'To say no: it is impossible.' }, then: { es: 'El cliente compra uno de la tienda. Está contento igual.', en: 'The customer buys one from the shop. He is happy anyway.' } },
              { say: { es: 'Que pida más dinero y trabaje de noche.', en: 'To ask for more money and work at night.' }, then: { es: 'Máire termina, pero está muy cansada. «Nunca más», dice.', en: 'Máire finishes, but she is very tired. “Never again,” she says.' } },
              { say: { es: 'Que le enseñe a hacer uno él mismo.', en: 'To teach him to make one himself.' }, then: { es: 'El cliente se ríe y reserva una clase para el verano.', en: 'The customer laughs and books a class for the summer.' } },
            ],
          },
          twist: { es: 'Una tienda de Dublín vende jerséis «de Aran» hechos en una fábrica de Asia. Son mucho más baratos. ¿Qué opinas?', en: 'A Dublin shop sells “Aran” sweaters made in a factory in Asia. They are much cheaper. What do you think?' },
          questions: [
            { q: { es: '¿Qué cosa hecha a mano tienes en casa?', en: 'What handmade thing do you have at home?' }, help: { es: 'Tengo una manta / un plato…', en: 'I have a blanket / a plate…' }, follow: [{ es: '¿Quién la hizo?', en: 'Who made it?' }, { es: '¿La usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Qué hacían tus abuelos por las noches?', en: 'What did your grandparents do in the evenings?' }, help: { es: 'Mi abuela cosía / mi abuelo leía…', en: 'My grandmother sewed / my grandfather read…' }, follow: [{ es: '¿Había televisión?', en: 'Was there a TV?' }, { es: '¿Y tu familia ahora?', en: 'And your family now?' }] },
            { q: { es: '¿Pagas más por algo artesanal?', en: 'Do you pay more for something handmade?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué compraste así?', en: 'What did you buy like that?' }, { es: '¿Cuánto pagaste?', en: 'How much did you pay?' }] },
            { q: { es: '¿Podrías vivir en una isla pequeña?', en: 'Could you live on a small island?' }, help: { es: 'Sí, me gusta la calma. / No, me aburro.', en: 'Yes, I like the calm. / No, I get bored.' }, follow: [{ es: '¿Qué extrañarías?', en: 'What would you miss?' }, { es: '¿Qué llevarías?', en: 'What would you take?' }] },
          ],
          words: [{ es: 'tejer', en: 'to knit' }, { es: 'el punto', en: 'the stitch' }, { es: 'el muro', en: 'the wall' }, { es: 'a mano', en: 'by hand' }, { es: 'la fábrica', en: 'the factory' }],
        },
        A2: {
          scene: { es: 'Es invierno en Inis Mór. Los turistas ya se fueron y el último barco de la tarde se canceló por la tormenta. Máire está en el centro cultural con otras mujeres de la isla. Hablan irlandés entre ellas y te ofrecen té.', en: 'It is winter on Inis Mór. The tourists have gone and the last afternoon boat was cancelled because of the storm. Máire is in the community centre with other island women. They speak Irish among themselves and offer you tea.' },
          opener: { es: 'En verano la isla está llena: bicicletas, autobuses, gente sacando fotos de las vacas. En invierno quedamos nosotros. Yo hablé irlandés en casa toda la vida y el inglés me lo enseñaron en la escuela. Ahora mis nietos hablan inglés con el móvil y irlandés solo conmigo. ¿Qué idioma se habla en tu casa?', en: 'In summer the island is full: bikes, buses, people taking photos of the cows. In winter it is just us. I spoke Irish at home my whole life and learned English at school. Now my grandchildren speak English on their phones and Irish only with me. What language is spoken in your home?' },
          decide: {
            ask: { es: 'La escuela de la isla puede cerrar: solo quedan nueve niños. ¿Qué propones?', en: 'The island school may close: only nine children are left. What do you propose?' },
            options: [
              { say: { es: 'Atraer familias nuevas con casas baratas.', en: 'Attract new families with cheap houses.' }, then: { es: 'Llegan dos familias de Dublín, pero una se va después del primer invierno.', en: 'Two families arrive from Dublin, but one leaves after the first winter.' } },
              { say: { es: 'Unir la escuela con clases por internet.', en: 'Combine the school with online classes.' }, then: { es: 'Funciona para matemáticas, pero los niños extrañan tener compañeros.', en: 'It works for maths, but the children miss having classmates.' } },
              { say: { es: 'Recibir estudiantes de verano que aprenden irlandés.', en: 'Host summer students who learn Irish.' }, then: { es: 'La isla gana dinero y los niños hacen amigos de todo el país.', en: 'The island earns money and the children make friends from all over the country.' } },
            ],
          },
          twist: { es: 'Una empresa de cine quiere filmar una película en la isla durante tres meses. Pagan muy bien, pero cierran los caminos. Las vecinas no se ponen de acuerdo. ¿Qué votarías tú?', en: 'A film company wants to shoot a film on the island for three months. They pay very well, but they close the roads. The neighbours cannot agree. How would you vote?' },
          questions: [
            { q: { es: '¿Qué idiomas se hablaban en tu familia cuando eras pequeño?', en: 'What languages were spoken in your family when you were small?' }, help: { es: 'En casa hablábamos… y en la escuela…', en: 'At home we spoke… and at school…' }, follow: [{ es: '¿Alguien dejó de hablar uno?', en: 'Did anyone stop speaking one?' }, { es: '¿Lo lamentas?', en: 'Do you regret it?' }] },
            { q: { es: '¿Cómo cambia tu ciudad entre verano e invierno?', en: 'How does your city change between summer and winter?' }, help: { es: 'En verano hay más… y en invierno…', en: 'In summer there is more… and in winter…' }, follow: [{ es: '¿Qué estación prefieres?', en: 'Which season do you prefer?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Fuiste alguna vez a una escuela muy pequeña o muy grande?', en: 'Did you ever go to a very small or very big school?' }, help: { es: 'Mi escuela tenía… alumnos.', en: 'My school had… pupils.' }, follow: [{ es: '¿Qué tenía de bueno?', en: 'What was good about it?' }, { es: '¿Y de malo?', en: 'And what was bad?' }] },
            { q: { es: '¿El turismo ayuda o molesta en tu ciudad?', en: 'Does tourism help or bother your city?' }, help: { es: 'Ayuda porque… pero molesta cuando…', en: 'It helps because… but it bothers when…' }, follow: [{ es: '¿Hay un lugar demasiado lleno?', en: 'Is there a place that is too crowded?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'la tormenta', en: 'the storm' }, { es: 'cancelar', en: 'to cancel' }, { es: 'el vecino', en: 'the neighbour' }, { es: 'ponerse de acuerdo', en: 'to agree' }, { es: 'extrañar', en: 'to miss' }],
        },
        B1: {
          scene: { es: 'Máire acaba de recibir una carta: una marca de moda de París quiere usar el dibujo tradicional de su familia en una colección de lujo. Ofrecen una cantidad de dinero que ella no gana en cinco años. Su hija dice que acepte; su hermano dice que es vender la historia de la isla.', en: 'Máire has just received a letter: a Paris fashion brand wants to use her family’s traditional pattern in a luxury collection. They offer more money than she earns in five years. Her daughter says to accept; her brother says it would be selling the island’s history.' },
          opener: { es: 'Mi bisabuela inventó este dibujo. Dicen que los jerséis servían para reconocer a los pescadores ahogados, aunque los historiadores no están seguros de que sea verdad. Lo que sí sé es que nadie nos pidió permiso nunca: hay copias en todo el mundo. Ahora, por primera vez, alguien pregunta. ¿Debería alegrarme o desconfiar?', en: 'My great-grandmother invented this pattern. They say the sweaters were used to identify drowned fishermen, although historians are not sure it is true. What I do know is that nobody ever asked us for permission: there are copies all over the world. Now, for the first time, someone is asking. Should I be happy or suspicious?' },
          decide: {
            ask: { es: 'Máire te pide un consejo antes de responder. ¿Qué le recomiendas?', en: 'Máire asks you for advice before answering. What do you recommend?' },
            options: [
              { say: { es: 'Aceptar, pero exigir que el nombre de la isla aparezca en cada etiqueta.', en: 'Accept, but demand that the island’s name appears on every label.' }, then: { es: 'La marca acepta. Llegan periodistas a la isla y el hermano de Máire no le habla durante un mes.', en: 'The brand agrees. Journalists come to the island and Máire’s brother does not speak to her for a month.' } },
              { say: { es: 'Rechazar y registrar el dibujo como patrimonio de la isla.', en: 'Refuse and register the pattern as the island’s heritage.' }, then: { es: 'El trámite es lento y caro, pero la cooperativa de tejedoras lo paga entre todas.', en: 'The process is slow and expensive, but the knitters’ cooperative pays for it together.' } },
              { say: { es: 'Proponer una colaboración: que las tejedoras de la isla hagan una parte a mano.', en: 'Propose a collaboration: the island knitters make part of it by hand.' }, then: { es: 'La marca duda por el precio, pero al final encarga cien piezas. Seis mujeres jóvenes aprenden a tejer.', en: 'The brand hesitates over the price, but in the end orders a hundred pieces. Six young women learn to knit.' } },
            ],
          },
          twist: { es: 'Una semana después, Máire descubre que la marca ya había vendido jerséis con su dibujo el año pasado, sin decir nada. La carta no era una pregunta: era una forma de evitar un juicio. ¿Cambia eso tu consejo?', en: 'A week later, Máire discovers that the brand had already sold sweaters with her pattern last year, without saying anything. The letter was not a question: it was a way to avoid a lawsuit. Does that change your advice?' },
          questions: [
            { q: { es: '¿Quién debería ser dueño de un dibujo, una receta o una canción tradicional?', en: 'Who should own a traditional pattern, recipe or song?' }, help: { es: 'Creo que pertenece a… porque…', en: 'I think it belongs to… because…' }, follow: [{ es: '¿Conoces un caso de tu país?', en: 'Do you know a case from your country?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
            { q: { es: '¿Alguna vez alguien copió una idea tuya?', en: 'Has anyone ever copied an idea of yours?' }, help: { es: 'Sí, una vez en el trabajo… / Que yo sepa, no.', en: 'Yes, once at work… / Not that I know of.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Harías lo mismo hoy?', en: 'Would you do the same today?' }] },
            { q: { es: '¿Aceptarías mucho dinero aunque tu familia no estuviera de acuerdo?', en: 'Would you accept a lot of money even if your family disagreed?' }, help: { es: 'Depende de… / Nunca, porque…', en: 'It depends on… / Never, because…' }, follow: [{ es: '¿Quién tiene la última palabra en tu familia?', en: 'Who has the last word in your family?' }, { es: '¿Te parece justo?', en: 'Do you think it is fair?' }] },
            { q: { es: '¿Qué tradición de tu país corre peligro de desaparecer?', en: 'What tradition from your country is in danger of disappearing?' }, help: { es: 'Me preocupa que… porque los jóvenes…', en: 'I worry that… because young people…' }, follow: [{ es: '¿Se puede salvar?', en: 'Can it be saved?' }, { es: '¿Vale la pena?', en: 'Is it worth it?' }] },
          ],
          words: [{ es: 'el patrimonio', en: 'heritage' }, { es: 'desconfiar', en: 'to be suspicious' }, { es: 'exigir', en: 'to demand' }, { es: 'el juicio', en: 'the lawsuit' }, { es: 'la cooperativa', en: 'the cooperative' }],
        },
      },
    },
    // ------------------------------------------------------------ the Cliffs of Moher
    {
      id: 'moher',
      name: { es: 'Los acantilados de Moher', en: 'The Cliffs of Moher' },
      who: { name: 'Declan', role: { es: 'guía de los acantilados', en: 'cliffs guide' } },
      levels: {
        A0: {
          scene: { es: 'Los acantilados son muy altos. Abajo está el mar. Hay pájaros blancos y negros. Declan es guía. Tiene una chaqueta roja.', en: 'The cliffs are very high. Below is the sea. There are black and white birds. Declan is a guide. He has a red jacket.' },
          opener: { es: '¡Hola! Soy Declan. Los acantilados tienen doscientos metros. ¡Cuidado! No pases la línea, por favor.', en: 'Hello! I am Declan. The cliffs are two hundred metres high. Careful! Don’t cross the line, please.' },
          decide: {
            ask: { es: 'Declan te ofrece tres cosas. ¿Qué eliges?', en: 'Declan offers you three things. What do you choose?' },
            options: [
              { say: { es: 'Mirar los pájaros.', en: 'Look at the birds.' }, then: { es: 'Declan te da unos binoculares. «Son frailecillos», dice.', en: 'Declan gives you binoculars. “They are puffins,” he says.' } },
              { say: { es: 'Caminar por el sendero.', en: 'Walk along the path.' }, then: { es: 'Caminas una hora. El paisaje es increíble.', en: 'You walk for an hour. The landscape is incredible.' } },
              { say: { es: 'Sacar una foto.', en: 'Take a photo.' }, then: { es: 'El viento es fuerte. ¡Tu gorra vuela al mar!', en: 'The wind is strong. Your cap flies into the sea!' } },
            ],
          },
          twist: { es: 'Llega la niebla. No ves nada, solo blanco. Declan dice: «Espera aquí». ¿Qué haces?', en: 'The fog arrives. You see nothing, only white. Declan says: “Wait here.” What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los lugares altos?', en: 'Do you like high places?' }, help: { es: 'Sí, me encantan. / No, tengo miedo.', en: 'Yes, I love them. / No, I am scared.' }, follow: [{ es: '¿Qué lugar alto conoces?', en: 'Which high place do you know?' }, { es: '¿Subiste?', en: 'Did you go up?' }] },
            { q: { es: '¿Te gusta el mar?', en: 'Do you like the sea?' }, help: { es: 'Sí, mucho. / Prefiero la montaña.', en: 'Yes, a lot. / I prefer the mountains.' }, follow: [{ es: '¿Nadas?', en: 'Do you swim?' }, { es: '¿Vives cerca del mar?', en: 'Do you live near the sea?' }] },
            { q: { es: '¿Sacas muchas fotos?', en: 'Do you take many photos?' }, help: { es: 'Sí, con el móvil. / No, pocas.', en: 'Yes, with my phone. / No, few.' }, follow: [{ es: '¿De qué?', en: 'Of what?' }, { es: '¿Las miras después?', en: 'Do you look at them later?' }] },
            { q: { es: '¿Qué animal te gusta?', en: 'What animal do you like?' }, help: { es: 'Me gusta el… / la…', en: 'I like the…' }, follow: [{ es: '¿Tienes uno?', en: 'Do you have one?' }, { es: '¿Por qué te gusta?', en: 'Why do you like it?' }] },
          ],
          words: [{ es: 'el acantilado', en: 'the cliff' }, { es: 'alto', en: 'high' }, { es: 'el pájaro', en: 'the bird' }, { es: 'la niebla', en: 'the fog' }, { es: '¡cuidado!', en: 'careful!' }],
        },
        A1: {
          scene: { es: 'Son las siete de la mañana. Declan llega antes que los autobuses de turistas. En el camino hay un cartel: «Peligro. No pasar». Del otro lado del cartel, un chico se sienta en el borde para una foto.', en: 'It is seven in the morning. Declan arrives before the tourist buses. On the path there is a sign: “Danger. Do not pass.” On the other side of the sign, a boy sits on the edge for a photo.' },
          opener: { es: 'Trabajo aquí desde hace doce años. Cada día vienen más de dos mil personas. Casi todas son responsables, pero siempre hay alguien que quiere la foto perfecta. Yo prefiero las fotos aburridas y los turistas vivos. ¿Tú harías algo peligroso por una foto?', en: 'I have worked here for twelve years. More than two thousand people come every day. Almost all of them are responsible, but there is always someone who wants the perfect photo. I prefer boring photos and living tourists. Would you do something dangerous for a photo?' },
          decide: {
            ask: { es: 'El chico no escucha a Declan. ¿Qué haces tú?', en: 'The boy does not listen to Declan. What do you do?' },
            options: [
              { say: { es: 'Le hablo con calma y le pido que vuelva.', en: 'I talk to him calmly and ask him to come back.' }, then: { es: 'El chico vuelve. Tiene vergüenza, pero te da las gracias.', en: 'The boy comes back. He is embarrassed, but he thanks you.' } },
              { say: { es: 'Le ofrezco sacarle una foto mejor desde aquí.', en: 'I offer to take a better photo of him from here.' }, then: { es: 'La foto sale muy bien. Él la sube a internet con tu nombre.', en: 'The photo comes out very well. He posts it online with your name.' } },
              { say: { es: 'Llamo a otro guía.', en: 'I call another guide.' }, then: { es: 'Llegan dos guías y el chico se va enojado.', en: 'Two guides arrive and the boy leaves angry.' } },
            ],
          },
          twist: { es: 'El parque quiere poner una valla alta de metal en todo el borde. Es más seguro, pero las fotos ya no serán iguales. ¿Estás de acuerdo?', en: 'The park wants to put a high metal fence along the whole edge. It is safer, but the photos will not be the same. Do you agree?' },
          questions: [
            { q: { es: '¿Respetas siempre los carteles de peligro?', en: 'Do you always respect danger signs?' }, help: { es: 'Siempre. / Casi siempre, pero una vez…', en: 'Always. / Almost always, but once…' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Cuál es el paisaje más bonito que viste?', en: 'What is the most beautiful landscape you have seen?' }, help: { es: 'Vi… en…', en: 'I saw… in…' }, follow: [{ es: '¿Con quién fuiste?', en: 'Who did you go with?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿A qué hora te levantas cuando viajas?', en: 'What time do you get up when you travel?' }, help: { es: 'Me levanto temprano / tarde.', en: 'I get up early / late.' }, follow: [{ es: '¿Y en casa?', en: 'And at home?' }, { es: '¿Eres de mañana o de noche?', en: 'Are you a morning or a night person?' }] },
            { q: { es: '¿Qué trabajo al aire libre te gustaría?', en: 'What outdoor job would you like?' }, help: { es: 'Me gustaría ser…', en: 'I would like to be…' }, follow: [{ es: '¿Y con mal tiempo?', en: 'And in bad weather?' }, { es: '¿Qué es lo difícil?', en: 'What is the hard part?' }] },
          ],
          words: [{ es: 'el borde', en: 'the edge' }, { es: 'el peligro', en: 'the danger' }, { es: 'el cartel', en: 'the sign' }, { es: 'la valla', en: 'the fence' }, { es: 'tener vergüenza', en: 'to be embarrassed' }],
        },
        A2: {
          scene: { es: 'Es tarde y casi no queda gente. Declan te lleva a la torre O’Brien, una pequeña torre de piedra del siglo diecinueve. Desde arriba se ven las islas de Aran. Declan te cuenta que de joven quería irse a vivir a Canadá.', en: 'It is late and there is almost nobody left. Declan takes you to O’Brien’s Tower, a small nineteenth-century stone tower. From the top you can see the Aran Islands. Declan tells you that when he was young he wanted to move to Canada.' },
          opener: { es: 'A los veintidós años tenía el billete comprado para Toronto. Mis dos hermanos ya estaban allí. La noche antes del viaje mi padre se enfermó y me quedé. Al principio estaba furioso, pero después encontré este trabajo y ya no me fui. A veces pienso en la otra vida que no tuve. ¿A ti te pasó algo así?', en: 'At twenty-two I had the ticket to Toronto bought. My two brothers were already there. The night before the trip my father got ill and I stayed. At first I was furious, but then I found this job and I never left. Sometimes I think about the other life I didn’t have. Has something like that happened to you?' },
          decide: {
            ask: { es: 'Declan tiene una oferta de trabajo en Canadá ahora, a los cuarenta y tres años. ¿Qué le dices?', en: 'Declan has a job offer in Canada now, at forty-three. What do you tell him?' },
            options: [
              { say: { es: 'Que vaya: nunca es tarde.', en: 'To go: it is never too late.' }, then: { es: 'Declan se ríe, nervioso. «Mi madre me va a matar», dice, pero guarda el correo.', en: 'Declan laughs nervously. “My mother is going to kill me,” he says, but he keeps the email.' } },
              { say: { es: 'Que vaya primero un mes, de prueba.', en: 'To go for a month first, as a test.' }, then: { es: 'Le parece una buena idea. Pide vacaciones para el invierno.', en: 'He thinks it is a good idea. He asks for holidays in winter.' } },
              { say: { es: 'Que se quede: aquí es feliz.', en: 'To stay: he is happy here.' }, then: { es: 'Declan mira el mar un rato y dice: «Tienes razón. Creo».', en: 'Declan looks at the sea for a while and says: “You are right. I think.”' } },
            ],
          },
          twist: { es: 'Declan te confiesa que su hermano de Toronto vuelve a Irlanda: perdió el trabajo y se divorció. «Él quería mi vida y yo la suya», dice. ¿Qué piensas de eso?', en: 'Declan confesses that his brother in Toronto is coming back to Ireland: he lost his job and got divorced. “He wanted my life and I wanted his,” he says. What do you think about that?' },
          questions: [
            { q: { es: '¿Alguna vez cambiaste de planes por tu familia?', en: 'Have you ever changed plans because of your family?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Te arrepientes?', en: 'Do you regret it?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Tienes familia que vive en otro país?', en: 'Do you have family living in another country?' }, help: { es: 'Sí, mi tío vive en… / No.', en: 'Yes, my uncle lives in… / No.' }, follow: [{ es: '¿Por qué se fue?', en: 'Why did they leave?' }, { es: '¿Lo visitas?', en: 'Do you visit them?' }] },
            { q: { es: '¿A qué edad es tarde para empezar de nuevo?', en: 'At what age is it too late to start again?' }, help: { es: 'Creo que nunca / a los…', en: 'I think never / at…' }, follow: [{ es: '¿Conoces a alguien que empezó tarde?', en: 'Do you know someone who started late?' }, { es: '¿Le fue bien?', en: 'Did it go well?' }] },
            { q: { es: '¿Qué otra vida te imaginas a veces?', en: 'What other life do you sometimes imagine?' }, help: { es: 'A veces me imagino viviendo en… / trabajando de…', en: 'Sometimes I imagine myself living in… / working as…' }, follow: [{ es: '¿Qué te detiene?', en: 'What stops you?' }, { es: '¿Lo vas a intentar?', en: 'Are you going to try?' }] },
          ],
          words: [{ es: 'el billete', en: 'the ticket' }, { es: 'quedarse', en: 'to stay' }, { es: 'arrepentirse', en: 'to regret' }, { es: 'la oferta', en: 'the offer' }, { es: 'de prueba', en: 'as a trial' }],
        },
        B1: {
          scene: { es: 'El consejo del condado debate un proyecto: un centro de visitantes nuevo, con ascensor de cristal hasta la base de los acantilados y una cafetería colgada sobre el mar. Traería cientos de empleos. Los ecologistas dicen que destruiría las colonias de aves. Declan tiene que hablar mañana en la reunión.', en: 'The county council is debating a project: a new visitor centre with a glass lift down to the base of the cliffs and a café hanging over the sea. It would bring hundreds of jobs. Environmentalists say it would destroy the bird colonies. Declan has to speak at the meeting tomorrow.' },
          opener: { es: 'Me pidieron que hable como guía, no como vecino. El problema es que pienso cosas distintas según el día. El lunes veo a los jóvenes del pueblo que se van a Dublín porque no hay trabajo. El martes veo un frailecillo con su cría y pienso que el ascensor es una locura. Si tuvieras que escribir mi discurso, ¿por dónde empezarías?', en: 'They asked me to speak as a guide, not as a neighbour. The problem is that I think different things depending on the day. On Monday I see the village kids leaving for Dublin because there is no work. On Tuesday I see a puffin with its chick and I think the lift is madness. If you had to write my speech, where would you start?' },
          decide: {
            ask: { es: '¿Qué postura le recomiendas a Declan en la reunión?', en: 'What position do you recommend Declan takes at the meeting?' },
            options: [
              { say: { es: 'Apoyar el proyecto con condiciones estrictas para las aves.', en: 'Support the project with strict conditions for the birds.' }, then: { es: 'Los ecologistas lo acusan de traidor, pero el consejo incluye sus condiciones en el contrato.', en: 'The environmentalists call him a traitor, but the council includes his conditions in the contract.' } },
              { say: { es: 'Oponerse y proponer un turismo más pequeño y repartido por la costa.', en: 'Oppose it and propose smaller tourism spread along the coast.' }, then: { es: 'Los hoteleros se enfadan. Un periódico local publica su propuesta en la portada.', en: 'Hotel owners get angry. A local paper puts his proposal on the front page.' } },
              { say: { es: 'No tomar partido y pedir un estudio independiente.', en: 'Not take sides and ask for an independent study.' }, then: { es: 'El voto se retrasa un año. Nadie está contento, pero nadie lo odia.', en: 'The vote is delayed a year. Nobody is happy, but nobody hates him.' } },
            ],
          },
          twist: { es: 'Esa noche, Declan se entera de que la empresa constructora es de su primo. Si habla en contra, la familia no se lo va a perdonar; si habla a favor, todos dirán que lo hizo por su primo. ¿Debería hablar igual o retirarse?', en: 'That night, Declan finds out that the construction company belongs to his cousin. If he speaks against it, the family will not forgive him; if he speaks in favour, everyone will say he did it for his cousin. Should he speak anyway or withdraw?' },
          questions: [
            { q: { es: '¿Qué vale más para ti: empleos para la gente o proteger la naturaleza?', en: 'What matters more to you: jobs for people or protecting nature?' }, help: { es: 'Para mí… aunque entiendo que…', en: 'For me… although I understand that…' }, follow: [{ es: '¿Hay un caso así en tu país?', en: 'Is there a case like this in your country?' }, { es: '¿Qué se decidió?', en: 'What was decided?' }] },
            { q: { es: '¿Hablarías en público contra un proyecto de tu familia?', en: 'Would you speak publicly against a family project?' }, help: { es: 'Sí, si fuera necesario. / No, primero hablaría en privado.', en: 'Yes, if it were necessary. / No, I would talk privately first.' }, follow: [{ es: '¿Qué te costaría más?', en: 'What would be hardest for you?' }, { es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }] },
            { q: { es: '¿Cambias de opinión con facilidad?', en: 'Do you change your mind easily?' }, help: { es: 'Sí, si me dan buenos argumentos. / Casi nunca.', en: 'Yes, if I get good arguments. / Hardly ever.' }, follow: [{ es: '¿Sobre qué cambiaste de opinión?', en: 'What did you change your mind about?' }, { es: '¿Quién te convenció?', en: 'Who convinced you?' }] },
            { q: { es: '¿Los lugares naturales famosos deberían limitar las visitas?', en: 'Should famous natural places limit visits?' }, help: { es: 'Deberían… porque si no…', en: 'They should… because otherwise…' }, follow: [{ es: '¿Cómo lo harías?', en: 'How would you do it?' }, { es: '¿Pagarías más por entrar?', en: 'Would you pay more to get in?' }] },
          ],
          words: [{ es: 'el consejo', en: 'the council' }, { es: 'el discurso', en: 'the speech' }, { es: 'tomar partido', en: 'to take sides' }, { es: 'retirarse', en: 'to withdraw' }, { es: 'la cría', en: 'the chick / young' }],
        },
      },
    },
    // ------------------------------------------------------------ the arts festival
    {
      id: 'festival',
      name: { es: 'El festival en las calles de Galway', en: 'The festival in the streets of Galway' },
      who: { name: 'Niamh', role: { es: 'artista callejera', en: 'street performer' } },
      levels: {
        A0: {
          scene: { es: 'Es julio en Galway. La calle está llena de gente. Hay música, colores y globos. Niamh está pintada de plata. No se mueve: es una estatua.', en: 'It is July in Galway. The street is full of people. There is music, colours and balloons. Niamh is painted silver. She does not move: she is a statue.' },
          opener: { es: '… ¡Hola! ¡Te asusté! Soy Niamh. Soy una estatua viva. Pon una moneda y me muevo.', en: '… Hello! I scared you! I am Niamh. I am a living statue. Put in a coin and I move.' },
          decide: {
            ask: { es: 'Niamh espera. ¿Qué haces?', en: 'Niamh waits. What do you do?' },
            options: [
              { say: { es: 'Pongo una moneda.', en: 'I put in a coin.' }, then: { es: 'Niamh baila como un robot. La gente aplaude.', en: 'Niamh dances like a robot. People clap.' } },
              { say: { es: 'Saco una foto con ella.', en: 'I take a photo with her.' }, then: { es: 'Niamh te da la mano de plata. ¡Ahora tu mano es plateada!', en: 'Niamh shakes your hand with her silver hand. Now your hand is silver!' } },
              { say: { es: 'Me quedo quieto como ella.', en: 'I stay still like her.' }, then: { es: 'Ahora hay dos estatuas. Los niños se ríen mucho.', en: 'Now there are two statues. The children laugh a lot.' } },
            ],
          },
          twist: { es: 'Empieza a llover. ¡La pintura de Niamh se cae! ¿Qué haces?', en: 'It starts to rain. Niamh’s paint is coming off! What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los festivales?', en: 'Do you like festivals?' }, help: { es: 'Sí, mucho. / No, hay mucha gente.', en: 'Yes, a lot. / No, there are too many people.' }, follow: [{ es: '¿Qué festival conoces?', en: 'Which festival do you know?' }, { es: '¿Cuándo es?', en: 'When is it?' }] },
            { q: { es: '¿Das dinero a los artistas de la calle?', en: 'Do you give money to street artists?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿A cuáles?', en: 'Which ones?' }, { es: '¿Cuánto?', en: 'How much?' }] },
            { q: { es: '¿Puedes quedarte quieto mucho tiempo?', en: 'Can you stay still for a long time?' }, help: { es: 'Sí, puedo. / No, me muevo mucho.', en: 'Yes, I can. / No, I move a lot.' }, follow: [{ es: '¿Cuántos minutos?', en: 'How many minutes?' }, { es: '¿Probamos ahora?', en: 'Shall we try now?' }] },
            { q: { es: '¿Qué color te gusta?', en: 'What colour do you like?' }, help: { es: 'Me gusta el…', en: 'I like…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu casa?', en: 'And your home?' }] },
          ],
          words: [{ es: 'la estatua', en: 'the statue' }, { es: 'la moneda', en: 'the coin' }, { es: 'quieto', en: 'still' }, { es: 'la pintura', en: 'the paint' }, { es: 'el globo', en: 'the balloon' }],
        },
        A1: {
          scene: { es: 'Son las cinco de la mañana. Niamh se pinta delante del espejo de una furgoneta. Tarda una hora. Después va a la calle Shop, la más turística, para tener un buen lugar antes que los otros artistas.', en: 'It is five in the morning. Niamh paints herself in front of a van mirror. It takes her an hour. Then she goes to Shop Street, the most touristy one, to get a good spot before the other artists.' },
          opener: { es: 'Estudié teatro en la universidad, pero el teatro no paga el alquiler. En la calle gano más en un buen sábado que en un mes de teatro. Lo difícil no es estar quieta: es no rascarte cuando te pica la nariz. ¿Tú qué haces cuando te pica algo y no puedes rascarte?', en: 'I studied theatre at university, but theatre doesn’t pay the rent. On the street I earn more on a good Saturday than in a month of theatre. The hard part isn’t staying still: it’s not scratching when your nose itches. What do you do when something itches and you can’t scratch?' },
          decide: {
            ask: { es: 'Un músico con un tambor se pone justo al lado de Niamh. Hace mucho ruido. ¿Qué le aconsejas?', en: 'A musician with a drum sets up right next to Niamh. He makes a lot of noise. What do you advise her?' },
            options: [
              { say: { es: 'Hablar con él y repartir las horas.', en: 'Talk to him and share the hours.' }, then: { es: 'Él toca de diez a doce y ella de doce a dos. Funciona.', en: 'He plays from ten to twelve and she from twelve to two. It works.' } },
              { say: { es: 'Hacer un número juntos.', en: 'Do an act together.' }, then: { es: 'La estatua se mueve con el ritmo del tambor. ¡Ganan el doble!', en: 'The statue moves to the rhythm of the drum. They earn double!' } },
              { say: { es: 'Cambiar de calle.', en: 'Change street.' }, then: { es: 'En la otra calle hay menos gente. Niamh gana poco ese día.', en: 'On the other street there are fewer people. Niamh earns little that day.' } },
            ],
          },
          twist: { es: 'El ayuntamiento quiere que los artistas callejeros paguen un permiso de cien euros al año. ¿Te parece justo?', en: 'The city council wants street artists to pay a permit of a hundred euros a year. Do you think it is fair?' },
          questions: [
            { q: { es: '¿Qué estudiaste o qué quieres estudiar?', en: 'What did you study or what do you want to study?' }, help: { es: 'Estudié… / Quiero estudiar…', en: 'I studied… / I want to study…' }, follow: [{ es: '¿Trabajas en eso?', en: 'Do you work in that?' }, { es: '¿Por qué lo elegiste?', en: 'Why did you choose it?' }] },
            { q: { es: '¿A qué hora empiezas a trabajar?', en: 'What time do you start work?' }, help: { es: 'Empiezo a las…', en: 'I start at…' }, follow: [{ es: '¿Es temprano para ti?', en: 'Is that early for you?' }, { es: '¿Cómo llegas?', en: 'How do you get there?' }] },
            { q: { es: '¿Qué artista callejero recuerdas?', en: 'Which street artist do you remember?' }, help: { es: 'Recuerdo a un… en…', en: 'I remember a… in…' }, follow: [{ es: '¿Qué hacía?', en: 'What did they do?' }, { es: '¿Le diste dinero?', en: 'Did you give them money?' }] },
            { q: { es: '¿Prefieres un trabajo seguro o un trabajo que te gusta?', en: 'Do you prefer a secure job or a job you like?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Y tu trabajo ahora?', en: 'And your job now?' }, { es: '¿Se pueden tener las dos cosas?', en: 'Can you have both?' }] },
          ],
          words: [{ es: 'el espejo', en: 'the mirror' }, { es: 'el alquiler', en: 'the rent' }, { es: 'picar', en: 'to itch' }, { es: 'rascarse', en: 'to scratch' }, { es: 'el permiso', en: 'the permit' }],
        },
        A2: {
          scene: { es: 'Es el último día del festival. Niamh te invita a ver el gran desfile: muñecos gigantes, tambores y cientos de bailarines. Antes, en un café, te cuenta que el año pasado casi deja todo para trabajar en una oficina.', en: 'It is the last day of the festival. Niamh invites you to see the big parade: giant puppets, drums and hundreds of dancers. Before that, in a café, she tells you that last year she almost gave everything up to work in an office.' },
          opener: { es: 'El invierno pasado fue horrible. Llovió casi todos los días y ganaba muy poco. Mandé currículums a empresas y me llamaron de un banco. Fui a la entrevista con traje, ¡sin pintura plateada! Me ofrecieron el puesto. Esa noche no pude dormir. ¿Qué crees que hice?', en: 'Last winter was horrible. It rained almost every day and I earned very little. I sent CVs to companies and a bank called me. I went to the interview in a suit, without silver paint! They offered me the job. That night I couldn’t sleep. What do you think I did?' },
          decide: {
            ask: { es: 'Niamh te pide que adivines. ¿Qué dices?', en: 'Niamh asks you to guess. What do you say?' },
            options: [
              { say: { es: 'Que aceptó y trabajó unos meses.', en: 'That she accepted and worked a few months.' }, then: { es: '«¡Casi! Trabajé tres semanas. Lloraba en el baño todos los días», cuenta Niamh.', en: '“Almost! I worked three weeks. I cried in the bathroom every day,” Niamh says.' } },
              { say: { es: 'Que dijo que no al día siguiente.', en: 'That she said no the next day.' }, then: { es: '«No, fui más cobarde: no contesté nunca», dice, y se ríe.', en: '“No, I was more of a coward: I never answered,” she says, and laughs.' } },
              { say: { es: 'Que hizo las dos cosas.', en: 'That she did both.' }, then: { es: '«Eso hago ahora: banco en invierno, calle en verano. Y estoy contenta».', en: '“That’s what I do now: bank in winter, street in summer. And I’m happy.”' } },
            ],
          },
          twist: { es: 'En el desfile, un muñeco gigante se rompe y cae una cabeza enorme en medio de la calle. Los organizadores necesitan voluntarios para llevarla. Niamh te mira. ¿Ayudas?', en: 'In the parade, a giant puppet breaks and a huge head falls in the middle of the street. The organisers need volunteers to carry it. Niamh looks at you. Do you help?' },
          questions: [
            { q: { es: '¿Alguna vez dejaste un trabajo o un estudio?', en: 'Have you ever left a job or a course?' }, help: { es: 'Sí, dejé… porque… / No, nunca.', en: 'Yes, I left… because… / No, never.' }, follow: [{ es: '¿Cómo te sentiste después?', en: 'How did you feel afterwards?' }, { es: '¿Fue una buena decisión?', en: 'Was it a good decision?' }] },
            { q: { es: '¿Cómo fue tu entrevista de trabajo más rara?', en: 'What was your strangest job interview like?' }, help: { es: 'Me preguntaron… y yo dije…', en: 'They asked me… and I said…' }, follow: [{ es: '¿Te dieron el puesto?', en: 'Did you get the job?' }, { es: '¿Qué ropa llevabas?', en: 'What were you wearing?' }] },
            { q: { es: '¿Cómo era el invierno pasado para ti?', en: 'What was last winter like for you?' }, help: { es: 'Fue… porque…', en: 'It was… because…' }, follow: [{ es: '¿Qué hacías los fines de semana?', en: 'What did you do at weekends?' }, { es: '¿Esperas uno mejor?', en: 'Are you hoping for a better one?' }] },
            { q: { es: '¿Qué fiesta popular de tu país recomiendas?', en: 'Which popular festival from your country do you recommend?' }, help: { es: 'Recomiendo… porque hay…', en: 'I recommend… because there are…' }, follow: [{ es: '¿Fuiste?', en: 'Did you go?' }, { es: '¿Qué se come?', en: 'What do people eat?' }] },
          ],
          words: [{ es: 'el desfile', en: 'the parade' }, { es: 'el muñeco', en: 'the puppet' }, { es: 'la entrevista', en: 'the interview' }, { es: 'el puesto', en: 'the job / position' }, { es: 'el voluntario', en: 'the volunteer' }],
        },
        B1: {
          scene: { es: 'Un vídeo de Niamh se hizo viral: millones de personas vieron cómo sostuvo una pose durante una tormenta. Ahora una agencia le ofrece un contrato para hacer publicidad de una marca de bebidas energéticas, vestida de estatua. Sus compañeros de la calle piensan que se vendió antes de firmar nada.', en: 'A video of Niamh went viral: millions of people watched her hold a pose during a storm. Now an agency offers her a contract to advertise an energy drink brand, dressed as a statue. Her street colleagues think she has sold out before she has signed anything.' },
          opener: { es: 'Lo gracioso es que ese día estaba quieta porque tenía tanto frío que no podía moverme. Ahora todos quieren algo de mí. La agencia me paga en un mes lo que gano en dos años, pero tendría que decir frases escritas por otros y hacer lo que ellos digan. Mis amigos dicen que la calle es libre y que eso no tiene precio. ¿Tú qué harías con quince minutos de fama?', en: 'The funny thing is that I was still that day because I was so cold I couldn’t move. Now everyone wants something from me. The agency would pay me in a month what I earn in two years, but I would have to say lines I didn’t write and do what they say. My friends say the street is free and that is priceless. What would you do with fifteen minutes of fame?' },
          decide: {
            ask: { es: 'Niamh tiene que responder hoy. ¿Qué le aconsejas?', en: 'Niamh has to answer today. What do you advise her?' },
            options: [
              { say: { es: 'Firmar por un año y ahorrar todo para un proyecto propio.', en: 'Sign for one year and save everything for her own project.' }, then: { es: 'Niamh firma. Al final del año abre una pequeña escuela de teatro callejero.', en: 'Niamh signs. At the end of the year she opens a small street theatre school.' } },
              { say: { es: 'Negociar: aceptar solo si puede escribir sus propios números.', en: 'Negotiate: accept only if she can write her own acts.' }, then: { es: 'La agencia acepta la mitad de sus condiciones. El primer anuncio es sorprendentemente bueno.', en: 'The agency accepts half of her conditions. The first ad is surprisingly good.' } },
              { say: { es: 'Rechazar y usar la fama para llenar su gorra en la calle.', en: 'Refuse and use the fame to fill her hat on the street.' }, then: { es: 'Durante un mes gana mucho, pero después la gente se olvida del vídeo.', en: 'For a month she earns a lot, but then people forget the video.' } },
            ],
          },
          twist: { es: 'Niamh descubre que la bebida tiene tanta cafeína que está prohibida para menores en varios países, y que el anuncio está pensado para adolescentes. ¿Debería seguir adelante si ya firmó?', en: 'Niamh discovers that the drink has so much caffeine that it is banned for minors in several countries, and that the ad is aimed at teenagers. Should she go ahead if she has already signed?' },
          questions: [
            { q: { es: '¿Qué harías si un vídeo tuyo se hiciera viral mañana?', en: 'What would you do if a video of yours went viral tomorrow?' }, help: { es: 'Primero… y después intentaría…', en: 'First… and then I would try to…' }, follow: [{ es: '¿Qué vídeo te daría miedo que fuera viral?', en: 'Which video would you be afraid of going viral?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Es “venderse” aceptar dinero de una gran empresa?', en: 'Is it “selling out” to accept money from a big company?' }, help: { es: 'Depende de… / No, porque todos necesitamos…', en: 'It depends on… / No, because we all need…' }, follow: [{ es: '¿Dónde está tu límite?', en: 'Where is your limit?' }, { es: '¿Lo cruzaste alguna vez?', en: 'Have you ever crossed it?' }] },
            { q: { es: '¿Romperías un contrato por razones éticas?', en: 'Would you break a contract for ethical reasons?' }, help: { es: 'Sí, aunque tuviera que pagar… / No, un contrato es un contrato.', en: 'Yes, even if I had to pay… / No, a contract is a contract.' }, follow: [{ es: '¿Qué razón sería suficiente?', en: 'What reason would be enough?' }, { es: '¿Conoces un caso real?', en: 'Do you know a real case?' }] },
            { q: { es: '¿Qué vale más que el dinero en un trabajo?', en: 'What is worth more than money in a job?' }, help: { es: 'Para mí vale más… porque…', en: 'For me… is worth more because…' }, follow: [{ es: '¿Tu trabajo actual lo tiene?', en: 'Does your current job have it?' }, { es: '¿Lo tuvo alguno?', en: 'Did any job have it?' }] },
          ],
          words: [{ es: 'hacerse viral', en: 'to go viral' }, { es: 'la fama', en: 'fame' }, { es: 'venderse', en: 'to sell out' }, { es: 'negociar', en: 'to negotiate' }, { es: 'el anuncio', en: 'the advert' }],
        },
      },
    },
    // ------------------------------------------------------------ Connemara
    {
      id: 'connemara',
      name: { es: 'Los campos de Connemara', en: 'The fields of Connemara' },
      who: { name: 'Padraig', role: { es: 'criador de ponis', en: 'pony breeder' } },
      levels: {
        A0: {
          scene: { es: 'Es un campo verde y marrón. Hay lagos, montañas y ovejas. Padraig tiene seis ponis grises. Lleva botas de goma.', en: 'It is a green and brown field. There are lakes, mountains and sheep. Padraig has six grey ponies. He wears rubber boots.' },
          opener: { es: 'Buenos días. Soy Padraig. Estos son mis ponis. Son pequeños, pero muy fuertes. ¿Quieres tocar uno?', en: 'Good morning. I am Padraig. These are my ponies. They are small but very strong. Do you want to touch one?' },
          decide: {
            ask: { es: '¿Qué haces con el poni?', en: 'What do you do with the pony?' },
            options: [
              { say: { es: 'Le doy una manzana.', en: 'I give it an apple.' }, then: { es: 'El poni come la manzana y quiere otra.', en: 'The pony eats the apple and wants another.' } },
              { say: { es: 'Lo toco con cuidado.', en: 'I touch it carefully.' }, then: { es: 'El poni cierra los ojos. Está tranquilo.', en: 'The pony closes its eyes. It is calm.' } },
              { say: { es: 'Me subo al poni.', en: 'I get on the pony.' }, then: { es: 'Padraig dice: «¡Despacio!». Das una vuelta pequeña.', en: 'Padraig says: “Slowly!” You go for a short ride.' } },
            ],
          },
          twist: { es: 'Un poni pequeño se escapa por el campo. Padraig corre. ¿Qué haces?', en: 'A little pony escapes across the field. Padraig runs. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los caballos?', en: 'Do you like horses?' }, help: { es: 'Sí, mucho. / No, me dan miedo.', en: 'Yes, a lot. / No, they scare me.' }, follow: [{ es: '¿Montaste uno?', en: 'Have you ridden one?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Prefieres el campo o la ciudad?', en: 'Do you prefer the countryside or the city?' }, help: { es: 'Prefiero el campo / la ciudad.', en: 'I prefer the countryside / the city.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde vives?', en: 'Where do you live?' }] },
            { q: { es: '¿Tienes botas de lluvia?', en: 'Do you have rain boots?' }, help: { es: 'Sí, tengo. / No, no tengo.', en: 'Yes, I do. / No, I don’t.' }, follow: [{ es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }, { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }] },
            { q: { es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, help: { es: 'Me gusta la manzana / la pera…', en: 'I like apples / pears…' }, follow: [{ es: '¿Comes fruta todos los días?', en: 'Do you eat fruit every day?' }, { es: '¿Cuál no te gusta?', en: 'Which one don’t you like?' }] },
          ],
          words: [{ es: 'el poni', en: 'the pony' }, { es: 'la oveja', en: 'the sheep' }, { es: 'el lago', en: 'the lake' }, { es: 'las botas', en: 'the boots' }, { es: 'despacio', en: 'slowly' }],
        },
        A1: {
          scene: { es: 'Padraig corta turba en el campo, como hacía su abuelo. La turba es tierra negra que se seca al sol y se quema en la chimenea. Huele a humo y a tierra mojada. Al lado hay una casa pequeña con techo de paja.', en: 'Padraig is cutting turf in the field, as his grandfather did. Turf is black earth that dries in the sun and is burned in the fireplace. It smells of smoke and wet earth. Next to it there is a small house with a thatched roof.' },
          opener: { es: 'Corto la turba en mayo, la seco en junio y la llevo a casa en agosto. En invierno la quemo y la casa tiene un olor especial. Mi hija dice que es malo para el planeta y tiene razón, pero para mí es el olor de mi infancia. ¿Qué olor te recuerda a tu infancia?', en: 'I cut the turf in May, dry it in June and take it home in August. In winter I burn it and the house has a special smell. My daughter says it is bad for the planet and she is right, but for me it is the smell of my childhood. What smell reminds you of your childhood?' },
          decide: {
            ask: { es: 'Padraig te da una pala. ¿Qué haces?', en: 'Padraig gives you a spade. What do you do?' },
            options: [
              { say: { es: 'Corto turba con él.', en: 'I cut turf with him.' }, then: { es: 'Después de diez minutos te duele la espalda. Padraig se ríe.', en: 'After ten minutes your back hurts. Padraig laughs.' } },
              { say: { es: 'Prefiero sacar fotos del paisaje.', en: 'I prefer taking photos of the landscape.' }, then: { es: 'Sale el sol un momento y las montañas se ven doradas.', en: 'The sun comes out for a moment and the mountains look golden.' } },
              { say: { es: 'Le pregunto por la casa de paja.', en: 'I ask him about the thatched house.' }, then: { es: 'Es la casa de su abuela. Dentro hay una cocina antigua y fotos viejas.', en: 'It is his grandmother’s house. Inside there is an old stove and old photos.' } },
            ],
          },
          twist: { es: 'El gobierno quiere prohibir cortar turba para proteger los campos. ¿Qué piensas?', en: 'The government wants to ban turf cutting to protect the bogs. What do you think?' },
          questions: [
            { q: { es: '¿Qué olor te recuerda a tu infancia?', en: 'What smell reminds you of your childhood?' }, help: { es: 'El olor a… me recuerda a…', en: 'The smell of… reminds me of…' }, follow: [{ es: '¿Dónde lo hueles hoy?', en: 'Where do you smell it today?' }, { es: '¿Es un recuerdo bonito?', en: 'Is it a nice memory?' }] },
            { q: { es: '¿Cómo calientas tu casa en invierno?', en: 'How do you heat your home in winter?' }, help: { es: 'Con calefacción / con una estufa…', en: 'With central heating / with a stove…' }, follow: [{ es: '¿Es caro?', en: 'Is it expensive?' }, { es: '¿Tienes chimenea?', en: 'Do you have a fireplace?' }] },
            { q: { es: '¿Haces lo mismo que tus abuelos en algo?', en: 'Do you do anything the same as your grandparents?' }, help: { es: 'Sí, cocino como mi abuela / No, nada.', en: 'Yes, I cook like my grandmother / No, nothing.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Lo vas a enseñar tú?', en: 'Will you teach it?' }] },
            { q: { es: '¿Trabajaste alguna vez en el campo?', en: 'Have you ever worked in the countryside?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Fue duro?', en: 'Was it hard?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'la turba', en: 'the turf / peat' }, { es: 'la pala', en: 'the spade' }, { es: 'el humo', en: 'the smoke' }, { es: 'la paja', en: 'the straw / thatch' }, { es: 'el olor', en: 'the smell' }],
        },
        A2: {
          scene: { es: 'Es la feria de ponis de Clifden. Hay criadores de todo el país, jueces con sombrero y niños que pasean ponis de la cuerda. Padraig presenta a Ciara, su mejor yegua. Está nervioso: hace diez años que no gana un premio.', en: 'It is the Clifden pony show. There are breeders from all over the country, judges in hats and children leading ponies on ropes. Padraig is showing Ciara, his best mare. He is nervous: he has not won a prize for ten years.' },
          opener: { es: 'Mi padre ganó aquí siete veces. Yo gané una sola vez, en el año en que él murió, y le dediqué el premio. Desde entonces, nada. Mis vecinos dicen que los jueces prefieren a los criadores ricos. Yo no sé si es verdad o si es una excusa. ¿Tú participaste alguna vez en un concurso?', en: 'My father won here seven times. I won only once, the year he died, and I dedicated the prize to him. Since then, nothing. My neighbours say the judges prefer rich breeders. I don’t know if that is true or an excuse. Have you ever taken part in a competition?' },
          decide: {
            ask: { es: 'Ciara está nerviosa antes de entrar. ¿Qué le aconsejas a Padraig?', en: 'Ciara is nervous before going in. What do you advise Padraig?' },
            options: [
              { say: { es: 'Caminar con ella un rato lejos de la gente.', en: 'Walk with her for a while away from the people.' }, then: { es: 'Ciara se calma. Entra tranquila y camina muy bien.', en: 'Ciara calms down. She goes in calmly and walks very well.' } },
              { say: { es: 'Que la lleve su nieta, que la conoce desde pequeña.', en: 'Let his granddaughter take her, she has known her since she was little.' }, then: { es: 'La niña entra con Ciara y el público aplaude mucho.', en: 'The girl goes in with Ciara and the crowd applauds a lot.' } },
              { say: { es: 'No participar este año.', en: 'Not take part this year.' }, then: { es: 'Padraig dice que no. «Mi padre nunca se retiró», dice, y entra.', en: 'Padraig says no. “My father never pulled out,” he says, and goes in.' } },
            ],
          },
          twist: { es: 'Ciara queda en segundo lugar. Un comprador americano ofrece por ella el triple de lo normal. Padraig necesita el dinero para arreglar el techo. ¿La vende?', en: 'Ciara comes second. An American buyer offers three times the normal price for her. Padraig needs the money to fix the roof. Does he sell her?' },
          questions: [
            { q: { es: '¿Ganaste alguna vez un premio o un concurso?', en: 'Have you ever won a prize or a competition?' }, help: { es: 'Sí, gané… cuando… / No, nunca gané nada.', en: 'Yes, I won… when… / No, I never won anything.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Qué hiciste con el premio?', en: 'What did you do with the prize?' }] },
            { q: { es: '¿Te comparan con alguien de tu familia?', en: 'Do people compare you with someone in your family?' }, help: { es: 'Sí, con mi hermana… / No, por suerte.', en: 'Yes, with my sister… / No, luckily.' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿En qué son distintos?', en: 'How are you different?' }] },
            { q: { es: '¿Venderías algo muy querido por necesidad?', en: 'Would you sell something you love out of need?' }, help: { es: 'Si fuera necesario, sí. / Nunca vendería…', en: 'If necessary, yes. / I would never sell…' }, follow: [{ es: '¿Qué cosa no venderías nunca?', en: 'What would you never sell?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Te pones nervioso antes de algo importante?', en: 'Do you get nervous before something important?' }, help: { es: 'Sí, muchísimo. / No mucho.', en: 'Yes, very. / Not much.' }, follow: [{ es: '¿Qué haces para calmarte?', en: 'What do you do to calm down?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
          ],
          words: [{ es: 'la feria', en: 'the show / fair' }, { es: 'el juez', en: 'the judge' }, { es: 'la yegua', en: 'the mare' }, { es: 'el premio', en: 'the prize' }, { es: 'el comprador', en: 'the buyer' }],
        },
        B1: {
          scene: { es: 'Padraig tiene sesenta y ocho años y ninguno de sus hijos quiere seguir con la granja. Una pareja alemana quiere comprarla para hacer un hotel ecológico. Su vecino, en cambio, quiere comprarla barata para unirla a sus tierras y seguir criando animales. Padraig está sentado en la cocina con las dos ofertas sobre la mesa.', en: 'Padraig is sixty-eight and none of his children want to carry on the farm. A German couple wants to buy it to make an eco-hotel. His neighbour, on the other hand, wants to buy it cheaply to join it to his land and keep raising animals. Padraig is sitting in the kitchen with the two offers on the table.' },
          opener: { es: 'Esta tierra es de mi familia desde la época de la Gran Hambruna. Mi bisabuelo se quedó cuando medio pueblo se fue a América. Si la vendo a los alemanes, mis hijos tendrán dinero, pero la granja dejará de ser granja. Si se la vendo a mi vecino, seguirá habiendo ponis, pero mis hijos me van a reprochar que regalé su herencia. ¿Qué pesa más: la historia o el futuro de los que quedan?', en: 'This land has been in my family since the time of the Great Famine. My great-grandfather stayed when half the village left for America. If I sell it to the Germans, my children will have money, but the farm will stop being a farm. If I sell it to my neighbour, there will still be ponies, but my children will reproach me for giving away their inheritance. What weighs more: history or the future of those who remain?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Padraig?', en: 'What do you recommend to Padraig?' },
            options: [
              { say: { es: 'Vender al vecino y explicar a los hijos por qué.', en: 'Sell to the neighbour and explain to his children why.' }, then: { es: 'Dos hijos lo entienden; el tercero deja de llamarlo por un tiempo.', en: 'Two of his children understand; the third stops calling him for a while.' } },
              { say: { es: 'Vender a la pareja alemana con la condición de mantener los ponis.', en: 'Sell to the German couple on condition they keep the ponies.' }, then: { es: 'La pareja acepta y contrata a Padraig para cuidar los animales dos días por semana.', en: 'The couple accepts and hires Padraig to look after the animals two days a week.' } },
              { say: { es: 'No vender todavía y ofrecer la granja a jóvenes que quieran aprender.', en: 'Not sell yet and offer the farm to young people who want to learn.' }, then: { es: 'Llega una chica de Galway muy decidida. Padraig no sabe si confiar en ella.', en: 'A very determined girl from Galway arrives. Padraig doesn’t know whether to trust her.' } },
            ],
          },
          twist: { es: 'Su hija menor llama desde Australia: dice que tal vez vuelva en cinco años para quedarse con la granja, pero no está segura. ¿Debería Padraig esperar una promesa que quizás no se cumpla?', en: 'His youngest daughter calls from Australia: she says she might come back in five years to take over the farm, but she is not sure. Should Padraig wait for a promise that may not be kept?' },
          questions: [
            { q: { es: '¿Hay algo en tu familia que pase de generación en generación?', en: 'Is there something in your family passed from generation to generation?' }, help: { es: 'Sí, una casa / una receta / un negocio…', en: 'Yes, a house / a recipe / a business…' }, follow: [{ es: '¿Quién lo va a heredar?', en: 'Who will inherit it?' }, { es: '¿Lo quieres tú?', en: 'Do you want it?' }] },
            { q: { es: '¿Los hijos tienen la obligación de continuar el trabajo de los padres?', en: 'Do children have an obligation to continue their parents’ work?' }, help: { es: 'No, porque cada uno… / En parte, si…', en: 'No, because everyone… / Partly, if…' }, follow: [{ es: '¿Qué esperaban tus padres de ti?', en: 'What did your parents expect of you?' }, { es: '¿Lo hiciste?', en: 'Did you do it?' }] },
            { q: { es: '¿Esperarías cinco años por una promesa?', en: 'Would you wait five years for a promise?' }, help: { es: 'Depende de quién… / No, porque la vida…', en: 'It depends on who… / No, because life…' }, follow: [{ es: '¿Alguien te prometió algo que no cumplió?', en: 'Has anyone promised you something they didn’t keep?' }, { es: '¿Lo perdonaste?', en: 'Did you forgive them?' }] },
            { q: { es: '¿Qué pasa con los pueblos pequeños de tu país?', en: 'What is happening to the small villages in your country?' }, help: { es: 'Muchos se están quedando sin… porque…', en: 'Many are running out of… because…' }, follow: [{ es: '¿Hay soluciones?', en: 'Are there solutions?' }, { es: '¿Vivirías en uno?', en: 'Would you live in one?' }] },
          ],
          words: [{ es: 'la granja', en: 'the farm' }, { es: 'la herencia', en: 'the inheritance' }, { es: 'reprochar', en: 'to reproach' }, { es: 'la hambruna', en: 'the famine' }, { es: 'cumplir una promesa', en: 'to keep a promise' }],
        },
      },
    },
    // ------------------------------------------------------------ the oyster festival
    {
      id: 'ostras',
      name: { es: 'El festival de las ostras', en: 'The oyster festival' },
      who: { name: 'Eoin', role: { es: 'cultivador de ostras', en: 'oyster farmer' } },
      levels: {
        A0: {
          scene: { es: 'Es septiembre. Hay una carpa grande al lado del mar. Hay mesas, limones y pan negro. Eoin abre ostras con un cuchillo pequeño.', en: 'It is September. There is a big tent by the sea. There are tables, lemons and brown bread. Eoin opens oysters with a small knife.' },
          opener: { es: '¡Hola! Soy Eoin. Estas son ostras de Galway. Son del mar de aquí. ¿Comes ostras?', en: 'Hello! I am Eoin. These are Galway oysters. They are from the sea here. Do you eat oysters?' },
          decide: {
            ask: { es: 'Eoin te ofrece una ostra. ¿Qué haces?', en: 'Eoin offers you an oyster. What do you do?' },
            options: [
              { say: { es: 'La como con limón.', en: 'I eat it with lemon.' }, then: { es: '«¿Te gusta?», pregunta Eoin. Sabe a mar.', en: '“Do you like it?” Eoin asks. It tastes of the sea.' } },
              { say: { es: 'Prefiero el pan.', en: 'I prefer the bread.' }, then: { es: 'Eoin te da pan con mantequilla. Está muy rico.', en: 'Eoin gives you bread with butter. It is very tasty.' } },
              { say: { es: 'No, gracias. No me gustan.', en: 'No, thank you. I don’t like them.' }, then: { es: 'Eoin dice: «No pasa nada. ¿Una sopa de pescado?».', en: 'Eoin says: “No problem. A fish soup?”' } },
            ],
          },
          twist: { es: 'Hay un concurso: ¿quién abre más ostras en un minuto? Eoin te da un cuchillo. ¿Participas?', en: 'There is a contest: who can open the most oysters in one minute? Eoin gives you a knife. Do you take part?' },
          questions: [
            { q: { es: '¿Te gusta el pescado?', en: 'Do you like fish?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Cómo lo comes?', en: 'How do you eat it?' }] },
            { q: { es: '¿Comes comida nueva cuando viajas?', en: 'Do you eat new food when you travel?' }, help: { es: 'Sí, siempre. / No, prefiero lo normal.', en: 'Yes, always. / No, I prefer normal food.' }, follow: [{ es: '¿Qué comiste?', en: 'What did you eat?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Qué comida no te gusta?', en: 'What food don’t you like?' }, help: { es: 'No me gusta el… / la…', en: 'I don’t like…' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Lo probaste otra vez?', en: 'Did you try it again?' }] },
            { q: { es: '¿Cocinas en casa?', en: 'Do you cook at home?' }, help: { es: 'Sí, todos los días. / No, casi nunca.', en: 'Yes, every day. / No, hardly ever.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Para quién?', en: 'For whom?' }] },
          ],
          words: [{ es: 'la ostra', en: 'the oyster' }, { es: 'el limón', en: 'the lemon' }, { es: 'el cuchillo', en: 'the knife' }, { es: 'la carpa', en: 'the tent / marquee' }, { es: 'saber a', en: 'to taste of' }],
        },
        A1: {
          scene: { es: 'Es temprano y la marea está baja. Eoin camina por la arena con botas altas entre filas de bolsas negras. Dentro de las bolsas crecen las ostras. Tardan tres años en estar listas. Hace frío y el cielo es gris.', en: 'It is early and the tide is low. Eoin walks across the sand in tall boots between rows of black bags. The oysters grow inside the bags. They take three years to be ready. It is cold and the sky is grey.' },
          opener: { es: 'Trabajo con la marea, no con el reloj. Algunos días empiezo a las cuatro de la mañana y otros a las tres de la tarde. Mi novia dice que soy imposible para hacer planes. Lo mejor del trabajo es el silencio; lo peor, las manos heladas. ¿Tu trabajo tiene horarios fijos?', en: 'I work with the tide, not with the clock. Some days I start at four in the morning and others at three in the afternoon. My girlfriend says I am impossible to make plans with. The best thing about the job is the silence; the worst, frozen hands. Does your job have fixed hours?' },
          decide: {
            ask: { es: 'Eoin necesita ayuda para girar las bolsas. ¿Qué haces?', en: 'Eoin needs help turning the bags. What do you do?' },
            options: [
              { say: { es: 'Me pongo unas botas y ayudo.', en: 'I put on some boots and help.' }, then: { es: 'Trabajas una hora. Al final Eoin te regala una docena de ostras.', en: 'You work for an hour. At the end Eoin gives you a dozen oysters.' } },
              { say: { es: 'Le pregunto cómo crecen las ostras.', en: 'I ask him how oysters grow.' }, then: { es: 'Eoin te explica que una ostra limpia muchos litros de agua cada día.', en: 'Eoin explains that an oyster cleans many litres of water every day.' } },
              { say: { es: 'Me quedo en el coche con la calefacción.', en: 'I stay in the car with the heating on.' }, then: { es: 'Desde el coche ves a Eoin solo en la playa. Parece una pintura.', en: 'From the car you see Eoin alone on the beach. It looks like a painting.' } },
            ],
          },
          twist: { es: 'Un restaurante de Dublín quiere comprar todas las ostras de Eoin a buen precio. Pero entonces no tendría ostras para el festival del pueblo. ¿Qué le dices?', en: 'A Dublin restaurant wants to buy all of Eoin’s oysters at a good price. But then he would have no oysters for the village festival. What do you tell him?' },
          questions: [
            { q: { es: '¿Tu trabajo o tu estudio tiene horarios fijos?', en: 'Does your work or study have fixed hours?' }, help: { es: 'Sí, de… a… / No, cambia mucho.', en: 'Yes, from… to… / No, it changes a lot.' }, follow: [{ es: '¿Te gusta así?', en: 'Do you like it like that?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Qué es lo mejor y lo peor de tu trabajo?', en: 'What is the best and worst thing about your job?' }, help: { es: 'Lo mejor es… y lo peor es…', en: 'The best is… and the worst is…' }, follow: [{ es: '¿Siempre fue así?', en: 'Was it always like that?' }, { es: '¿Lo recomiendas?', en: 'Do you recommend it?' }] },
            { q: { es: '¿Te levantaste alguna vez muy temprano para algo especial?', en: 'Did you ever get up very early for something special?' }, help: { es: 'Sí, para ver… / para un viaje…', en: 'Yes, to see… / for a trip…' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Compras comida local o de supermercado?', en: 'Do you buy local food or supermarket food?' }, help: { es: 'Compro en el mercado / en el supermercado.', en: 'I shop at the market / at the supermarket.' }, follow: [{ es: '¿Es más caro?', en: 'Is it more expensive?' }, { es: '¿Notas la diferencia?', en: 'Do you notice the difference?' }] },
          ],
          words: [{ es: 'la marea', en: 'the tide' }, { es: 'la arena', en: 'the sand' }, { es: 'crecer', en: 'to grow' }, { es: 'helado', en: 'frozen' }, { es: 'la docena', en: 'the dozen' }],
        },
        A2: {
          scene: { es: 'Es la final del campeonato de abrir ostras. Eoin compite contra una chef francesa y un abuelo del pueblo que ganó cuatro veces. El público grita, hay periodistas y una banda toca música. Eoin practicó todo el año, pero esta mañana se cortó un dedo.', en: 'It is the final of the oyster-opening championship. Eoin is competing against a French chef and a village grandfather who has won four times. The crowd shouts, there are journalists and a band is playing. Eoin practised all year, but this morning he cut a finger.' },
          opener: { es: 'Llevo una venda y me duele cuando aprieto. Mi entrenador, que es mi tío, dice que no participe. Pero es la primera vez que llego a la final. Cuando era niño veía a ese abuelo ganar y quería ser como él. ¿Tú hiciste algo importante con dolor o enfermo?', en: 'I have a bandage on and it hurts when I squeeze. My coach, who is my uncle, says I shouldn’t compete. But it is the first time I have reached the final. When I was a boy I watched that grandfather win and I wanted to be like him. Have you ever done something important while in pain or ill?' },
          decide: {
            ask: { es: '¿Qué le dices a Eoin?', en: 'What do you tell Eoin?' },
            options: [
              { say: { es: 'Que participe, pero con calma, sin buscar el récord.', en: 'To compete, but calmly, without going for the record.' }, then: { es: 'Eoin queda tercero. El abuelo le da un abrazo y le dice que el año que viene es suyo.', en: 'Eoin comes third. The grandfather hugs him and tells him next year is his.' } },
              { say: { es: 'Que use la otra mano: lo practicó en secreto.', en: 'To use the other hand: he practised it in secret.' }, then: { es: 'Es más lento, pero no se equivoca. ¡Queda segundo!', en: 'He is slower, but makes no mistakes. He comes second!' } },
              { say: { es: 'Que no participe y vaya al médico.', en: 'Not to compete and go to the doctor.' }, then: { es: 'El médico le pone tres puntos. Eoin mira la final desde el público, triste.', en: 'The doctor gives him three stitches. Eoin watches the final from the crowd, sad.' } },
            ],
          },
          twist: { es: 'Después de la final, un periodista dice que la chef francesa usaba un cuchillo ilegal. El jurado no lo vio. Eoin tiene un vídeo que lo demuestra. ¿Lo muestra?', en: 'After the final, a journalist says the French chef used an illegal knife. The judges did not see it. Eoin has a video that proves it. Does he show it?' },
          questions: [
            { q: { es: '¿Hiciste algo importante estando enfermo o con dolor?', en: 'Did you do something important while ill or in pain?' }, help: { es: 'Sí, una vez fui a… con fiebre.', en: 'Yes, once I went to… with a fever.' }, follow: [{ es: '¿Cómo salió?', en: 'How did it go?' }, { es: '¿Fue una buena idea?', en: 'Was it a good idea?' }] },
            { q: { es: '¿A quién admirabas de niño?', en: 'Who did you admire as a child?' }, help: { es: 'Admiraba a… porque…', en: 'I admired… because…' }, follow: [{ es: '¿Lo admiras todavía?', en: 'Do you still admire them?' }, { es: '¿Lo conociste?', en: 'Did you meet them?' }] },
            { q: { es: '¿Denunciarías a alguien que hizo trampa?', en: 'Would you report someone who cheated?' }, help: { es: 'Sí, siempre. / Depende de…', en: 'Yes, always. / It depends on…' }, follow: [{ es: '¿Y si es tu amigo?', en: 'And if they are your friend?' }, { es: '¿Viste trampas alguna vez?', en: 'Have you ever seen cheating?' }] },
            { q: { es: '¿Practicaste mucho para algo?', en: 'Did you practise a lot for something?' }, help: { es: 'Sí, practiqué… durante…', en: 'Yes, I practised… for…' }, follow: [{ es: '¿Cuánto tiempo al día?', en: 'How much time a day?' }, { es: '¿Lo conseguiste?', en: 'Did you achieve it?' }] },
          ],
          words: [{ es: 'el campeonato', en: 'the championship' }, { es: 'la venda', en: 'the bandage' }, { es: 'cortarse', en: 'to cut oneself' }, { es: 'hacer trampa', en: 'to cheat' }, { es: 'el jurado', en: 'the judges / jury' }],
        },
        B1: {
          scene: { es: 'Un laboratorio encontró una bacteria en las aguas de la bahía después de las lluvias. No es seguro que afecte a las ostras de Eoin, pero las autoridades recomiendan no venderlas durante tres semanas, justo antes del festival. Si espera, pierde la temporada; si vende, arriesga la salud de la gente y su nombre.', en: 'A laboratory found a bacterium in the bay’s waters after the rains. It is not certain it affects Eoin’s oysters, but the authorities recommend not selling them for three weeks, just before the festival. If he waits, he loses the season; if he sells, he risks people’s health and his name.' },
          opener: { es: 'Es una recomendación, no una prohibición. Mis propios análisis salieron limpios, pero mis análisis los pagué yo, así que entiendo que alguien desconfíe. Otros dos productores van a vender igual. Si yo no vendo y ellos sí, me quedo sin clientes; si yo vendo y alguien se enferma, se acabó todo. ¿Cómo se decide cuando nadie sabe la verdad?', en: 'It is a recommendation, not a ban. My own tests came out clean, but I paid for my tests myself, so I understand if someone is suspicious. Two other producers are going to sell anyway. If I don’t sell and they do, I lose my customers; if I sell and someone gets sick, it’s all over. How do you decide when nobody knows the truth?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Eoin?', en: 'What do you advise Eoin?' },
            options: [
              { say: { es: 'No vender y explicarlo públicamente en el festival.', en: 'Not sell and explain it publicly at the festival.' }, then: { es: 'Pierde mucho dinero, pero un periódico lo presenta como ejemplo de productor responsable.', en: 'He loses a lot of money, but a newspaper presents him as an example of a responsible producer.' } },
              { say: { es: 'Pagar un análisis independiente urgente y decidir con ese resultado.', en: 'Pay for an urgent independent test and decide with that result.' }, then: { es: 'El análisis cuesta caro y tarda cinco días. Sale limpio. Vende tarde, pero tranquilo.', en: 'The test is expensive and takes five days. It comes out clean. He sells late, but with peace of mind.' } },
              { say: { es: 'Vender solo ostras cocinadas, que son más seguras.', en: 'Sell only cooked oysters, which are safer.' }, then: { es: 'Los puristas se quejan, pero la carpa se llena de gente curiosa.', en: 'The purists complain, but the tent fills with curious people.' } },
            ],
          },
          twist: { es: 'Uno de los productores que vendió igual tiene ahora clientes en el hospital. Las autoridades cierran toda la bahía, también para Eoin, durante seis meses. ¿Es justo que todos paguen por la decisión de uno?', en: 'One of the producers who sold anyway now has customers in hospital. The authorities close the whole bay, including for Eoin, for six months. Is it fair that everyone pays for one person’s decision?' },
          questions: [
            { q: { es: '¿Cómo tomas decisiones cuando no tienes toda la información?', en: 'How do you make decisions when you don’t have all the information?' }, help: { es: 'Normalmente… / Prefiero esperar hasta…', en: 'Usually… / I prefer to wait until…' }, follow: [{ es: '¿Te equivocaste alguna vez así?', en: 'Have you ever got it wrong that way?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Confías en las recomendaciones de las autoridades?', en: 'Do you trust the authorities’ recommendations?' }, help: { es: 'En general sí, aunque… / No mucho, porque…', en: 'Generally yes, although… / Not much, because…' }, follow: [{ es: '¿En qué tema confías más?', en: 'On which topic do you trust them most?' }, { es: '¿Y menos?', en: 'And least?' }] },
            { q: { es: '¿Es justo que todos paguen por el error de uno?', en: 'Is it fair that everyone pays for one person’s mistake?' }, help: { es: 'No, debería pagar solo… / A veces es necesario porque…', en: 'No, only… should pay / Sometimes it is necessary because…' }, follow: [{ es: '¿Te pasó en la escuela o en el trabajo?', en: 'Did it happen to you at school or work?' }, { es: '¿Cómo reaccionaste?', en: 'How did you react?' }] },
            { q: { es: '¿Perderías dinero para proteger tu reputación?', en: 'Would you lose money to protect your reputation?' }, help: { es: 'Sí, porque la reputación… / Depende de cuánto…', en: 'Yes, because reputation… / It depends how much…' }, follow: [{ es: '¿Qué empresa perdió su reputación?', en: 'Which company lost its reputation?' }, { es: '¿La recuperó?', en: 'Did it get it back?' }] },
          ],
          words: [{ es: 'la bahía', en: 'the bay' }, { es: 'la temporada', en: 'the season' }, { es: 'arriesgar', en: 'to risk' }, { es: 'el análisis', en: 'the test / analysis' }, { es: 'la reputación', en: 'the reputation' }],
        },
      },
    },
  ],
};
