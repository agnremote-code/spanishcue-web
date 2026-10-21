// Irlanda del Norte · the Giant's Causeway, Titanic Belfast, the Belfast murals,
// St George's Market and the Dark Hedges road from Game of Thrones. Five places, four
// levels each (A0, A1, A2, B1). Every level is written on its own: same place and
// people, different situations.
export default {
  id: 'irlanda-norte',
  spots: [
    // ------------------------------------------------------------ the Giant's Causeway
    {
      id: 'calzada',
      name: { es: 'La Calzada del Gigante', en: 'The Giant’s Causeway' },
      who: { name: 'Ciarán', role: { es: 'guía de la costa', en: 'coast guide' } },
      levels: {
        A0: {
          scene: { es: 'Es la costa. Hay miles de piedras negras con seis lados. Parecen escaleras al mar. Hace viento. Ciarán es guía.', en: 'It is the coast. There are thousands of black stones with six sides. They look like stairs into the sea. It is windy. Ciarán is a guide.' },
          opener: { es: '¡Hola! Soy Ciarán. Estas piedras son muy viejas. La leyenda dice que un gigante las puso aquí. ¿Te gusta?', en: 'Hello! I am Ciarán. These stones are very old. The legend says a giant put them here. Do you like it?' },
          decide: {
            ask: { es: '¿Qué haces en las piedras?', en: 'What do you do on the stones?' },
            options: [
              { say: { es: 'Subo a la piedra más alta.', en: 'I climb the highest stone.' }, then: { es: 'Ciarán dice: «¡Cuidado! Está mojada».', en: 'Ciarán says: “Careful! It is wet.”' } },
              { say: { es: 'Cuento los lados de una piedra.', en: 'I count the sides of a stone.' }, then: { es: 'Uno, dos, tres, cuatro, cinco, seis. ¡Seis lados!', en: 'One, two, three, four, five, six. Six sides!' } },
              { say: { es: 'Miro el mar.', en: 'I look at the sea.' }, then: { es: 'Allí está Escocia. ¡Se ve muy cerca!', en: 'Scotland is over there. It looks very close!' } },
            ],
          },
          twist: { es: 'Una ola grande te moja los pies. ¡El agua está muy fría! ¿Qué dices?', en: 'A big wave wets your feet. The water is very cold! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el mar?', en: 'Do you like the sea?' }, help: { es: 'Sí, mucho. / No, prefiero la montaña.', en: 'Yes, a lot. / No, I prefer the mountains.' }, follow: [{ es: '¿Nadas en el mar?', en: 'Do you swim in the sea?' }, { es: '¿Está cerca de tu casa?', en: 'Is it near your house?' }] },
            { q: { es: '¿Conoces una leyenda?', en: 'Do you know a legend?' }, help: { es: 'Sí, la leyenda de… / No, ninguna.', en: 'Yes, the legend of… / No, none.' }, follow: [{ es: '¿De qué país es?', en: 'Which country is it from?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Eres alto o bajo?', en: 'Are you tall or short?' }, help: { es: 'Soy alto. / Soy bajo. / Normal.', en: 'I’m tall. / I’m short. / Average.' }, follow: [{ es: '¿Y tu familia?', en: 'And your family?' }, { es: '¿Quién es el más alto?', en: 'Who is the tallest?' }] },
            { q: { es: '¿Te gusta el agua fría?', en: 'Do you like cold water?' }, help: { es: 'Sí, me gusta. / No, nada.', en: 'Yes, I like it. / No, not at all.' }, follow: [{ es: '¿Y la ducha?', en: 'And your shower?' }, { es: '¿Caliente o fría?', en: 'Hot or cold?' }] },
          ],
          words: [{ es: 'la piedra', en: 'the stone' }, { es: 'el gigante', en: 'the giant' }, { es: 'la ola', en: 'the wave' }, { es: 'la costa', en: 'the coast' }, { es: 'mojado', en: 'wet' }],
        },
        A1: {
          scene: { es: 'Ciarán cuenta la leyenda a un grupo de turistas. Un gigante irlandés, Finn, construyó un camino de piedras sobre el mar para luchar contra un gigante escocés. Los turistas escuchan, pero un niño dice: «Eso no es verdad. Son volcanes».', en: 'Ciarán tells the legend to a group of tourists. An Irish giant, Finn, built a stone path over the sea to fight a Scottish giant. The tourists listen, but a boy says: “That’s not true. They’re volcanoes.”' },
          opener: { es: 'El niño tiene razón: las piedras se formaron con lava de volcán hace sesenta millones de años. Pero la leyenda es más divertida, ¿no? En la historia, el gigante escocés es más grande, y Finn se esconde vestido de niño pequeño. ¿Tú prefieres las leyendas o la ciencia?', en: 'The boy is right: the stones formed from volcanic lava sixty million years ago. But the legend is more fun, isn’t it? In the story, the Scottish giant is bigger, and Finn hides dressed as a baby… Well, as a little child. Do you prefer legends or science?' },
          decide: {
            ask: { es: 'Ciarán te pregunta qué historia contar al grupo. ¿Qué dices?', en: 'Ciarán asks you which story to tell the group. What do you say?' },
            options: [
              { say: { es: 'La leyenda completa del gigante.', en: 'The full legend of the giant.' }, then: { es: 'Todos se ríen al final. El niño también.', en: 'Everyone laughs at the end. The boy too.' } },
              { say: { es: 'La explicación de los volcanes.', en: 'The explanation of the volcanoes.' }, then: { es: 'El niño ayuda a Ciarán a explicar. Sabe mucho de volcanes.', en: 'The boy helps Ciarán explain. He knows a lot about volcanoes.' } },
              { say: { es: 'Las dos: primero la leyenda y después la ciencia.', en: 'Both: first the legend and then the science.' }, then: { es: 'Los turistas votan. La leyenda gana por poco.', en: 'The tourists vote. The legend wins narrowly.' } },
            ],
          },
          twist: { es: 'Empieza a llover y todos corren al autobús. Pero una señora mayor no puede correr por las piedras. ¿Qué haces?', en: 'It starts to rain and everyone runs to the coach. But an elderly lady can’t run over the stones. What do you do?' },
          questions: [
            { q: { es: '¿Prefieres las leyendas o la ciencia?', en: 'Do you prefer legends or science?' }, help: { es: 'Las leyendas, porque… / La ciencia, porque…', en: 'Legends, because… / Science, because…' }, follow: [{ es: '¿Qué leyenda conoces?', en: 'Which legend do you know?' }, { es: '¿Te gustaban de niño?', en: 'Did you like them as a child?' }] },
            { q: { es: '¿Hay volcanes en tu país?', en: 'Are there volcanoes in your country?' }, help: { es: 'Sí, hay… / No, no hay.', en: 'Yes, there are… / No, there aren’t.' }, follow: [{ es: '¿Has visto uno?', en: 'Have you seen one?' }, { es: '¿Te dan miedo?', en: 'Do they scare you?' }] },
            { q: { es: '¿Los niños de tu familia hacen muchas preguntas?', en: 'Do the children in your family ask lots of questions?' }, help: { es: 'Sí, siempre preguntan… / No hay niños en mi familia.', en: 'Yes, they always ask… / There are no children in my family.' }, follow: [{ es: '¿Sabes responder?', en: 'Can you answer?' }, { es: '¿Qué preguntabas tú?', en: 'What did you use to ask?' }] },
            { q: { es: '¿Qué haces cuando llueve de vacaciones?', en: 'What do you do when it rains on holiday?' }, help: { es: 'Voy a un museo. / Me quedo en el hotel.', en: 'I go to a museum. / I stay in the hotel.' }, follow: [{ es: '¿Llevas paraguas?', en: 'Do you take an umbrella?' }, { es: '¿Te molesta?', en: 'Does it bother you?' }] },
          ],
          words: [{ es: 'la lava', en: 'lava' }, { es: 'esconderse', en: 'to hide' }, { es: 'construir', en: 'to build' }, { es: 'luchar', en: 'to fight' }, { es: 'el volcán', en: 'the volcano' }],
        },
        A2: {
          scene: { es: 'Ciarán es guía desde hace doce años. Antes trabajaba en una fábrica de Belfast, pero la fábrica cerró. Hoy, una chica le pregunta si es irlandés o británico. Es una pregunta difícil en Irlanda del Norte: hay gente que se siente irlandesa, otra británica, y otra las dos cosas.', en: 'Ciarán has been a guide for twelve years. Before, he worked in a factory in Belfast, but the factory closed. Today, a girl asks him whether he is Irish or British. It’s a difficult question in Northern Ireland: some people feel Irish, others British, and others both.' },
          opener: { es: 'Yo tengo dos pasaportes: uno irlandés y otro británico. Mi madre es católica y se siente irlandesa; mi padre es protestante y se siente británico. Cuando era niño, eso era un problema en el barrio. Hoy digo que soy «del norte». ¿Tú alguna vez has tenido que elegir entre dos identidades?', en: 'I have two passports: an Irish one and a British one. My mother is Catholic and feels Irish; my father is Protestant and feels British. When I was a child, that was a problem in the neighbourhood. Today I say I’m “from the North”. Have you ever had to choose between two identities?' },
          decide: {
            ask: { es: '¿Qué debería responder Ciarán a la chica?', en: 'What should Ciarán answer the girl?' },
            options: [
              { say: { es: 'Contar su historia familiar con sinceridad.', en: 'Tell his family story honestly.' }, then: { es: 'La chica le cuenta que su padre es marroquí y su madre francesa. Se entienden muy bien.', en: 'The girl tells him her father is Moroccan and her mother French. They understand each other very well.' } },
              { say: { es: 'Decir: «Soy guía. Hoy soy de la Calzada».', en: 'Say: “I’m a guide. Today I’m from the Causeway.”' }, then: { es: 'Todos se ríen. La chica entiende que es un tema delicado.', en: 'Everyone laughs. The girl understands it’s a sensitive subject.' } },
              { say: { es: 'Preguntarle a ella qué siente que es.', en: 'Ask her what she feels she is.' }, then: { es: 'La chica piensa mucho y dice: «No lo sé». Hablan durante todo el camino.', en: 'The girl thinks a lot and says: “I don’t know.” They talk the whole way.' } },
            ],
          },
          twist: { es: 'Un turista del grupo hace un comentario sobre religión que molesta a otra turista. Empiezan a discutir. ¿Qué debería hacer Ciarán?', en: 'A tourist in the group makes a comment about religion that upsets another tourist. They start arguing. What should Ciarán do?' },
          questions: [
            { q: { es: '¿Te sientes de un solo lugar o de varios?', en: 'Do you feel you’re from just one place or several?' }, help: { es: 'De uno: … / De varios: … y …', en: 'From one: … / From several: … and …' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Ha cambiado con los años?', en: 'Has it changed over the years?' }] },
            { q: { es: '¿Tus padres son de lugares diferentes?', en: 'Are your parents from different places?' }, help: { es: 'Sí, mi madre es de… y mi padre de… / No, los dos son de…', en: 'Yes, my mother is from… and my father from… / No, both are from…' }, follow: [{ es: '¿Fue un problema?', en: 'Was it a problem?' }, { es: '¿Qué tradiciones tienes de cada uno?', en: 'What traditions do you have from each?' }] },
            { q: { es: '¿Has cambiado de trabajo porque cerró tu empresa?', en: 'Have you changed jobs because your company closed?' }, help: { es: 'Sí, cuando cerró… empecé a… / No, nunca.', en: 'Yes, when… closed, I started to… / No, never.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Te gusta más el nuevo?', en: 'Do you like the new one more?' }] },
            { q: { es: '¿De qué temas no se habla en tu país con desconocidos?', en: 'Which topics aren’t discussed with strangers in your country?' }, help: { es: 'No se habla de… / Se habla de todo.', en: 'People don’t talk about… / People talk about everything.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y en tu familia?', en: 'And in your family?' }] },
          ],
          words: [{ es: 'el pasaporte', en: 'the passport' }, { es: 'la identidad', en: 'identity' }, { es: 'católico', en: 'Catholic' }, { es: 'protestante', en: 'Protestant' }, { es: 'delicado', en: 'sensitive' }],
        },
        B1: {
          scene: { es: 'Un grupo de inversores quiere construir un gran campo de golf de lujo junto a la Calzada del Gigante. Traería empleo a una zona con mucho paro, pero los ecologistas dicen que destruiría un paisaje protegido por la UNESCO. Ciarán ha sido invitado a hablar en la consulta pública.', en: 'A group of investors wants to build a big luxury golf course next to the Giant’s Causeway. It would bring jobs to an area with high unemployment, but environmentalists say it would destroy a landscape protected by UNESCO. Ciarán has been invited to speak at the public consultation.' },
          opener: { es: 'Cuando cerró mi fábrica, pasé dos años sin trabajo. Sé lo que es eso, y aquí hay muchos jóvenes en esa situación. Pero esta costa tiene sesenta millones de años; un campo de golf, unos cuantos años de beneficios. ¿Se puede poner precio a un paisaje? ¿Quién decide qué vale más: el empleo de hoy o la belleza de siempre?', en: 'When my factory closed, I spent two years out of work. I know what that’s like, and there are many young people here in that situation. But this coast is sixty million years old; a golf course, a few years of profits. Can you put a price on a landscape? Who decides what’s worth more: today’s jobs or timeless beauty?' },
          decide: {
            ask: { es: '¿Qué debería defender Ciarán en la consulta?', en: 'What should Ciarán argue for at the consultation?' },
            options: [
              { say: { es: 'Rechazar el campo de golf y proponer turismo sostenible.', en: 'Reject the golf course and propose sustainable tourism.' }, then: { es: 'El campo no se construye. Se crean rutas guiadas con jóvenes de la zona, pero son menos empleos.', en: 'The course isn’t built. Guided routes with local young people are created, but there are fewer jobs.' } },
              { say: { es: 'Aceptarlo con condiciones: lejos de la costa y con empleo local.', en: 'Accept it with conditions: away from the coast and with local jobs.' }, then: { es: 'Los inversores aceptan. El campo se construye más al interior. Los ecologistas no están contentos.', en: 'The investors agree. The course is built further inland. The environmentalists aren’t happy.' } },
              { say: { es: 'Pedir más estudios antes de decidir nada.', en: 'Ask for more studies before deciding anything.' }, then: { es: 'Los estudios tardan dos años. Los inversores se van a Escocia.', en: 'The studies take two years. The investors go to Scotland.' } },
            ],
          },
          twist: { es: 'Los inversores le ofrecen a Ciarán ser director de turismo del nuevo campo de golf, con un sueldo excelente. La oferta llega una semana antes de la consulta. ¿Qué debería hacer?', en: 'The investors offer Ciarán the job of tourism director at the new golf course, with an excellent salary. The offer arrives a week before the consultation. What should he do?' },
          questions: [
            { q: { es: '¿Se puede poner precio a un paisaje?', en: 'Can you put a price on a landscape?' }, help: { es: 'No, porque… / En cierto modo sí, porque…', en: 'No, because… / In a way yes, because…' }, follow: [{ es: '¿Qué paisaje de tu país protegerías siempre?', en: 'Which landscape in your country would you always protect?' }, { es: '¿Está protegido?', en: 'Is it protected?' }] },
            { q: { es: '¿Has estado sin trabajo alguna vez?', en: 'Have you ever been out of work?' }, help: { es: 'Sí, durante… y fue… / No, por suerte.', en: 'Yes, for… and it was… / No, luckily.' }, follow: [{ es: '¿Qué te ayudó?', en: 'What helped you?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Una oferta así es un soborno?', en: 'Is an offer like that a bribe?' }, help: { es: 'Sí, porque llega justo… / No necesariamente, si…', en: 'Yes, because it comes right… / Not necessarily, if…' }, follow: [{ es: '¿Qué harías tú?', en: 'What would you do?' }, { es: '¿Lo dirías en público?', en: 'Would you say it in public?' }] },
            { q: { es: '¿El turismo de lujo ayuda a la gente local?', en: 'Does luxury tourism help local people?' }, help: { es: 'Sí, crea… / Poco, porque el dinero…', en: 'Yes, it creates… / Little, because the money…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué tipo de turismo prefieres?', en: 'What kind of tourism do you prefer?' }] },
          ],
          words: [{ es: 'el inversor', en: 'the investor' }, { es: 'el paro', en: 'unemployment' }, { es: 'la consulta pública', en: 'the public consultation' }, { es: 'sostenible', en: 'sustainable' }, { es: 'el soborno', en: 'the bribe' }],
        },
      },
    },
    // ------------------------------------------------------------ Titanic Belfast
    {
      id: 'titanic',
      name: { es: 'El museo del Titanic', en: 'Titanic Belfast' },
      who: { name: 'Niamh', role: { es: 'guía del museo', en: 'museum guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un museo grande en Belfast. El edificio parece un barco. Aquí hicieron el Titanic. Niamh es guía.', en: 'It is a big museum in Belfast. The building looks like a ship. The Titanic was built here. Niamh is a guide.' },
          opener: { es: '¡Hola! Soy Niamh. El Titanic era un barco enorme. Lo hicieron aquí, en Belfast. ¿Conoces la historia?', en: 'Hello! I am Niamh. The Titanic was a huge ship. It was built here, in Belfast. Do you know the story?' },
          decide: {
            ask: { es: 'Niamh te enseña tres cosas. ¿Qué quieres ver?', en: 'Niamh shows you three things. What do you want to see?' },
            options: [
              { say: { es: 'Las habitaciones del barco.', en: 'The ship’s cabins.' }, then: { es: 'Niamh dice: «Las de primera clase son muy bonitas».', en: 'Niamh says: “The first-class ones are very beautiful.”' } },
              { say: { es: 'El agua fría.', en: 'The cold water.' }, then: { es: 'Tocas el agua. ¡Está helada!', en: 'You touch the water. It is freezing!' } },
              { say: { es: 'Las fotos de los pasajeros.', en: 'The photos of the passengers.' }, then: { es: 'Hay niños, músicos y familias. Niamh dice sus nombres.', en: 'There are children, musicians and families. Niamh says their names.' } },
            ],
          },
          twist: { es: 'Niamh te da un billete del Titanic con un nombre. Es de un pasajero real. ¿Qué dices?', en: 'Niamh gives you a Titanic ticket with a name on it. It belongs to a real passenger. What do you say?' },
          questions: [
            { q: { es: '¿Has visto la película del Titanic?', en: 'Have you seen the Titanic film?' }, help: { es: 'Sí, me gustó. / No, nunca.', en: 'Yes, I liked it. / No, never.' }, follow: [{ es: '¿Lloraste?', en: 'Did you cry?' }, { es: '¿Con quién la viste?', en: 'Who did you watch it with?' }] },
            { q: { es: '¿Te gustan los barcos grandes?', en: 'Do you like big ships?' }, help: { es: 'Sí, mucho. / No, me dan miedo.', en: 'Yes, a lot. / No, they scare me.' }, follow: [{ es: '¿Has viajado en uno?', en: 'Have you travelled on one?' }, { es: '¿Adónde?', en: 'Where to?' }] },
            { q: { es: '¿Te gustan los museos de historia?', en: 'Do you like history museums?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Vas a menudo?', en: 'Do you go often?' }] },
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, sé nadar. / No, no sé.', en: 'Yes, I can. / No, I can’t.' }, follow: [{ es: '¿Dónde aprendiste?', en: 'Where did you learn?' }, { es: '¿Nadas mucho?', en: 'Do you swim a lot?' }] },
          ],
          words: [{ es: 'el museo', en: 'the museum' }, { es: 'el pasajero', en: 'the passenger' }, { es: 'helado', en: 'freezing' }, { es: 'la primera clase', en: 'first class' }, { es: 'el edificio', en: 'the building' }],
        },
        A1: {
          scene: { es: 'Niamh hace la visita de las diez a un grupo de estudiantes. En una sala hay una lista con los nombres de los trabajadores que construyeron el Titanic. Eran quince mil. Muchos eran de familias pobres de Belfast.', en: 'Niamh does the ten o’clock tour for a group of students. In one room there is a list with the names of the workers who built the Titanic. There were fifteen thousand. Many were from poor Belfast families.' },
          opener: { es: 'Mi bisabuelo trabajó aquí, en el astillero. Tenía catorce años y trabajaba doce horas al día. Cuando el Titanic se hundió, en Belfast dijeron: «Cuando salió de aquí, estaba bien». La ciudad estaba muy orgullosa del barco. ¿En tu familia alguien trabajó en algo muy famoso?', en: 'My great-grandfather worked here, in the shipyard. He was fourteen and worked twelve hours a day. When the Titanic sank, people in Belfast said: “She was fine when she left here.” The city was very proud of the ship. Did anyone in your family work on something very famous?' },
          decide: {
            ask: { es: 'Los estudiantes pueden hacer una actividad. ¿Cuál eliges para ellos?', en: 'The students can do an activity. Which one do you choose for them?' },
            options: [
              { say: { es: 'Buscar un nombre en la lista de trabajadores.', en: 'Find a name on the list of workers.' }, then: { es: 'Una estudiante encuentra el apellido de su abuelo. Se pone muy contenta.', en: 'A student finds her grandfather’s surname. She is very happy.' } },
              { say: { es: 'Probar la vida en tercera clase.', en: 'Try out life in third class.' }, then: { es: 'Las camas son pequeñas y duras. Los estudiantes se quejan mucho.', en: 'The beds are small and hard. The students complain a lot.' } },
              { say: { es: 'Escribir una carta como un pasajero.', en: 'Write a letter as a passenger.' }, then: { es: 'Un chico escribe una carta muy triste. Niamh la pone en la pared.', en: 'A boy writes a very sad letter. Niamh puts it on the wall.' } },
            ],
          },
          twist: { es: 'Un estudiante pregunta: «¿Por qué no había botes para todos?». Niamh te mira para ver qué dices tú. ¿Qué respondes?', en: 'A student asks: “Why weren’t there lifeboats for everyone?” Niamh looks at you to see what you say. What do you answer?' },
          questions: [
            { q: { es: '¿A qué edad empezaste a trabajar?', en: 'At what age did you start working?' }, help: { es: 'A los… años. / Todavía no trabajo.', en: 'At… / I don’t work yet.' }, follow: [{ es: '¿Qué hacías?', en: 'What did you do?' }, { es: '¿Te pagaban bien?', en: 'Were you paid well?' }] },
            { q: { es: '¿Sabes algo de tus bisabuelos?', en: 'Do you know anything about your great-grandparents?' }, help: { es: 'Sí, mi bisabuelo era… / No, nada.', en: 'Yes, my great-grandfather was… / No, nothing.' }, follow: [{ es: '¿Dónde vivían?', en: 'Where did they live?' }, { es: '¿Tienes fotos?', en: 'Do you have photos?' }] },
            { q: { es: '¿De qué está orgullosa tu ciudad?', en: 'What is your city proud of?' }, help: { es: 'Está orgullosa de… / No sé.', en: 'It’s proud of… / I don’t know.' }, follow: [{ es: '¿Y tú?', en: 'And you?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Escribes cartas?', en: 'Do you write letters?' }, help: { es: 'Sí, a veces. / No, solo mensajes.', en: 'Yes, sometimes. / No, only messages.' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Guardas cartas viejas?', en: 'Do you keep old letters?' }] },
          ],
          words: [{ es: 'el astillero', en: 'the shipyard' }, { es: 'hundirse', en: 'to sink' }, { es: 'el bisabuelo', en: 'the great-grandfather' }, { es: 'el bote salvavidas', en: 'the lifeboat' }, { es: 'el apellido', en: 'the surname' }],
        },
        A2: {
          scene: { es: 'Una famosa empresa quiere construir una copia exacta del Titanic, el «Titanic II», para hacer cruceros de lujo por la misma ruta. Los billetes de primera clase costarán cien mil dólares. Niamh recibe la llamada de un periódico que le pregunta qué opina.', en: 'A famous company wants to build an exact copy of the Titanic, the “Titanic II”, to run luxury cruises on the same route. First-class tickets will cost a hundred thousand dollars. Niamh gets a call from a newspaper asking her opinion.' },
          opener: { es: 'Por un lado, me parece una idea fascinante: la gente podría vivir la historia. Por otro, murieron mil quinientas personas. ¿Es respetuoso hacer un crucero de lujo por el lugar donde murieron? Y además, en el Titanic de verdad, los pobres de tercera clase fueron los que más murieron. ¿Tú harías ese viaje?', en: 'On the one hand, I think it’s a fascinating idea: people could live the history. On the other, fifteen hundred people died. Is it respectful to run a luxury cruise over the place where they died? And besides, on the real Titanic, the poor in third class were the ones who died most. Would you take that trip?' },
          decide: {
            ask: { es: '¿Qué debería decirle Niamh al periódico?', en: 'What should Niamh tell the newspaper?' },
            options: [
              { say: { es: 'Que es una falta de respeto a las víctimas.', en: 'That it’s disrespectful to the victims.' }, then: { es: 'Muchos descendientes de pasajeros le escriben para darle las gracias.', en: 'Many descendants of passengers write to thank her.' } },
              { say: { es: 'Que puede ser bueno si se cuenta la historia completa.', en: 'That it could be good if the full story is told.' }, then: { es: 'La empresa la invita a diseñar la parte del barco dedicada a la historia.', en: 'The company invites her to design the part of the ship devoted to history.' } },
              { say: { es: 'Que el dinero debería ir a las familias de Belfast.', en: 'That the money should go to Belfast families.' }, then: { es: 'La idea se hace viral. La empresa promete un fondo para el barrio del astillero.', en: 'The idea goes viral. The company promises a fund for the shipyard neighbourhood.' } },
            ],
          },
          twist: { es: 'La empresa le ofrece a Niamh un billete gratis de primera clase para el primer viaje. ¿Debería ir?', en: 'The company offers Niamh a free first-class ticket for the first voyage. Should she go?' },
          questions: [
            { q: { es: '¿Harías un viaje en el Titanic II?', en: 'Would you go on a trip on Titanic II?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿En qué clase?', en: 'In which class?' }, { es: '¿Tendrías miedo?', en: 'Would you be scared?' }] },
            { q: { es: '¿Has visitado un lugar donde pasó algo trágico?', en: 'Have you visited a place where something tragic happened?' }, help: { es: 'Sí, fui a… / No, nunca.', en: 'Yes, I went to… / No, never.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿La gente hacía fotos?', en: 'Were people taking photos?' }] },
            { q: { es: '¿Has hecho un crucero?', en: 'Have you been on a cruise?' }, help: { es: 'Sí, por… / No, nunca.', en: 'Yes, around… / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Las películas cambian la forma de ver la historia?', en: 'Do films change the way we see history?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Qué película histórica te gusta?', en: 'Which historical film do you like?' }, { es: '¿Era real?', en: 'Was it accurate?' }] },
          ],
          words: [{ es: 'el crucero', en: 'the cruise' }, { es: 'la víctima', en: 'the victim' }, { es: 'respetuoso', en: 'respectful' }, { es: 'el descendiente', en: 'the descendant' }, { es: 'la ruta', en: 'the route' }],
        },
        B1: {
          scene: { es: 'Unos científicos han encontrado objetos personales en el fondo del mar, junto al Titanic: zapatos, cartas, un collar. Una empresa quiere sacarlos y venderlos en una subasta. Otros dicen que el barco es una tumba y debe dejarse en paz. El museo de Niamh debe decidir si acepta exponer algunos objetos.', en: 'Scientists have found personal belongings on the seabed next to the Titanic: shoes, letters, a necklace. A company wants to bring them up and sell them at auction. Others say the ship is a grave and should be left in peace. Niamh’s museum must decide whether to agree to display some of the items.' },
          opener: { es: 'Un zapato de niño en el fondo del mar es lo más triste que he visto nunca. Si lo traemos al museo, miles de personas entenderán la tragedia de verdad. Pero ¿quién nos da permiso? Ese niño no puede decidir. ¿Los objetos de una tragedia pertenecen a la historia o a las familias de las víctimas?', en: 'A child’s shoe on the seabed is the saddest thing I’ve ever seen. If we bring it to the museum, thousands of people will truly understand the tragedy. But who gives us permission? That child can’t decide. Do the belongings from a tragedy belong to history or to the victims’ families?' },
          decide: {
            ask: { es: '¿Qué debería recomendar Niamh al museo?', en: 'What should Niamh recommend to the museum?' },
            options: [
              { say: { es: 'Exponer los objetos, pero sin comprarlos en la subasta.', en: 'Display the items, but without buying them at auction.' }, then: { es: 'El museo negocia un préstamo. La subasta se cancela por la presión pública.', en: 'The museum negotiates a loan. The auction is cancelled due to public pressure.' } },
              { say: { es: 'No exponer nada: el barco es una tumba.', en: 'Display nothing: the ship is a grave.' }, then: { es: 'El museo publica un comunicado. Otros museos del mundo hacen lo mismo.', en: 'The museum issues a statement. Other museums around the world do the same.' } },
              { say: { es: 'Buscar a las familias y preguntarles.', en: 'Find the families and ask them.' }, then: { es: 'Tardan un año. Algunas familias dicen que sí; otras, que no. El museo respeta las dos respuestas.', en: 'It takes a year. Some families say yes; others, no. The museum respects both answers.' } },
            ],
          },
          twist: { es: 'Una mujer de Estados Unidos dice que el collar era de su bisabuela y quiere recuperarlo. La empresa dice que ahora es suyo porque lo sacó del mar. ¿Quién tiene razón?', en: 'A woman from the United States says the necklace belonged to her great-grandmother and wants it back. The company says it’s theirs now because they brought it up from the sea. Who is right?' },
          questions: [
            { q: { es: '¿Los museos deberían devolver objetos a sus países o familias de origen?', en: 'Should museums return objects to their countries or families of origin?' }, help: { es: 'Sí, porque… / Depende, porque…', en: 'Yes, because… / It depends, because…' }, follow: [{ es: '¿Conoces un caso famoso?', en: 'Do you know a famous case?' }, { es: '¿Qué opinas?', en: 'What do you think?' }] },
            { q: { es: '¿Hay objetos que nunca deberían venderse?', en: 'Are there objects that should never be sold?' }, help: { es: 'Sí, por ejemplo… / No, todo tiene un precio si…', en: 'Yes, for example… / No, everything has a price if…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes tú algo así?', en: 'Do you have something like that?' }] },
            { q: { es: '¿Cómo se debe recordar una tragedia?', en: 'How should a tragedy be remembered?' }, help: { es: 'Con un… para que… / En silencio, porque…', en: 'With a… so that… / In silence, because…' }, follow: [{ es: '¿Cómo se hace en tu país?', en: 'How is it done in your country?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Quién es dueño de lo que se encuentra en el mar?', en: 'Who owns what is found at sea?' }, help: { es: 'Quien lo encuentra, porque… / Los dueños originales, porque…', en: 'Whoever finds it, because… / The original owners, because…' }, follow: [{ es: '¿Y en la calle?', en: 'And in the street?' }, { es: '¿Has encontrado algo valioso?', en: 'Have you found something valuable?' }] },
          ],
          words: [{ es: 'el fondo del mar', en: 'the seabed' }, { es: 'la subasta', en: 'the auction' }, { es: 'la tumba', en: 'the grave' }, { es: 'el collar', en: 'the necklace' }, { es: 'el préstamo', en: 'the loan' }],
        },
      },
    },
    // ------------------------------------------------------------ the Belfast murals
    {
      id: 'murales',
      name: { es: 'Los murales de Belfast', en: 'The Belfast murals' },
      who: { name: 'Seamus', role: { es: 'taxista y guía', en: 'taxi driver and guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle de Belfast. Las paredes tienen pinturas enormes de muchos colores. Son murales. Seamus tiene un taxi negro.', en: 'It is a street in Belfast. The walls have huge paintings in many colours. They are murals. Seamus has a black taxi.' },
          opener: { es: '¡Hola! Soy Seamus. Soy taxista. Te enseño los murales de mi ciudad. ¿Subes al taxi?', en: 'Hello! I am Seamus. I am a taxi driver. I show you my city’s murals. Will you get in the taxi?' },
          decide: {
            ask: { es: 'Hay tres murales. ¿Cuál miras?', en: 'There are three murals. Which one do you look at?' },
            options: [
              { say: { es: 'El mural de la paz, con una paloma.', en: 'The peace mural, with a dove.' }, then: { es: 'Seamus dice: «Es mi favorito».', en: 'Seamus says: “It is my favourite.”' } },
              { say: { es: 'El mural de los niños.', en: 'The children’s mural.' }, then: { es: 'Los niños del barrio lo pintaron. ¡Es muy alegre!', en: 'The children from the area painted it. It is very cheerful!' } },
              { say: { es: 'El mural de un futbolista.', en: 'The mural of a footballer.' }, then: { es: 'Seamus dice: «Es George Best. ¡Un genio de Belfast!»', en: 'Seamus says: “It is George Best. A Belfast genius!”' } },
            ],
          },
          twist: { es: 'Seamus te da un rotulador. «Puedes escribir en esta pared», dice. ¿Qué escribes?', en: 'Seamus gives you a marker. “You can write on this wall,” he says. What do you write?' },
          questions: [
            { q: { es: '¿Te gusta pintar?', en: 'Do you like painting?' }, help: { es: 'Sí, mucho. / No, pinto mal.', en: 'Yes, a lot. / No, I paint badly.' }, follow: [{ es: '¿Qué pintas?', en: 'What do you paint?' }, { es: '¿Con qué colores?', en: 'With what colours?' }] },
            { q: { es: '¿Hay murales en tu ciudad?', en: 'Are there murals in your city?' }, help: { es: 'Sí, muchos. / No, pocos.', en: 'Yes, lots. / No, few.' }, follow: [{ es: '¿Te gustan?', en: 'Do you like them?' }, { es: '¿Dónde están?', en: 'Where are they?' }] },
            { q: { es: '¿Usas el taxi?', en: 'Do you use taxis?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Qué palabra escribirías en una pared?', en: 'What word would you write on a wall?' }, help: { es: 'Escribiría «…».', en: 'I would write “…”.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿En qué idioma?', en: 'In which language?' }] },
          ],
          words: [{ es: 'el mural', en: 'the mural' }, { es: 'la paz', en: 'peace' }, { es: 'la paloma', en: 'the dove' }, { es: 'el rotulador', en: 'the marker' }, { es: 'pintar', en: 'to paint' }],
        },
        A1: {
          scene: { es: 'Seamus lleva a una pareja de turistas por la ciudad. Paran delante de un muro muy alto que separa dos barrios. Se llama «muro de la paz». Por la noche, las puertas del muro todavía se cierran.', en: 'Seamus takes a couple of tourists around the city. They stop in front of a very tall wall that separates two neighbourhoods. It is called a “peace wall”. At night, the gates in the wall are still closed.' },
          opener: { es: 'Vivo en este barrio desde 1970. Durante treinta años hubo mucha violencia aquí: lo llamamos «los Problemas». Hoy hay paz, pero el muro sigue aquí. Los turistas escriben mensajes en él. ¿Hay un lugar en tu ciudad que divide a la gente?', en: 'I was born in this neighbourhood in 1970. For thirty years there was a lot of violence here: we call it “the Troubles”. Today there’s peace, but the wall is still here. Tourists write messages on it. Is there a place in your city that divides people?' },
          decide: {
            ask: { es: 'Los turistas escriben mensajes en el muro. ¿Qué escribes tú?', en: 'The tourists write messages on the wall. What do you write?' },
            options: [
              { say: { es: 'Un mensaje de paz en mi idioma.', en: 'A peace message in my language.' }, then: { es: 'Seamus te pide que se lo traduzcas. Le gusta mucho.', en: 'Seamus asks you to translate it for him. He likes it a lot.' } },
              { say: { es: 'Mi nombre y la fecha.', en: 'My name and the date.' }, then: { es: 'Al lado hay nombres de turistas de cien países.', en: 'Next to it there are names of tourists from a hundred countries.' } },
              { say: { es: 'Nada. Prefiero escuchar.', en: 'Nothing. I prefer to listen.' }, then: { es: 'Seamus te cuenta la historia de su hermano. Es muy triste.', en: 'Seamus tells you his brother’s story. It is very sad.' } },
            ],
          },
          twist: { es: 'Un niño del barrio pasa en bicicleta y les pregunta a los turistas si quieren comprar caramelos. Seamus se ríe: «Es mi nieto». ¿Qué haces?', en: 'A boy from the area rides by on a bike and asks the tourists if they want to buy sweets. Seamus laughs: “He’s my grandson.” What do you do?' },
          questions: [
            { q: { es: '¿En qué año naciste?', en: 'What year were you born?' }, help: { es: 'Nací en…', en: 'I was born in…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Vives allí todavía?', en: 'Do you still live there?' }] },
            { q: { es: '¿Hay barrios muy diferentes en tu ciudad?', en: 'Are there very different neighbourhoods in your city?' }, help: { es: 'Sí, el barrio… es… y el… es… / No mucho.', en: 'Yes, the… area is… and the… is… / Not much.' }, follow: [{ es: '¿Dónde vives tú?', en: 'Where do you live?' }, { es: '¿Vas a los otros barrios?', en: 'Do you go to the other areas?' }] },
            { q: { es: '¿Escribes en las paredes?', en: 'Do you write on walls?' }, help: { es: 'No, nunca. / Sí, de joven.', en: 'No, never. / Yes, when I was young.' }, follow: [{ es: '¿Es un problema en tu ciudad?', en: 'Is it a problem in your city?' }, { es: '¿Es arte?', en: 'Is it art?' }] },
            { q: { es: '¿Tienes nietos o sobrinos?', en: 'Do you have grandchildren or nephews and nieces?' }, help: { es: 'Sí, tengo… / No, todavía no.', en: 'Yes, I have… / No, not yet.' }, follow: [{ es: '¿Cuántos años tienen?', en: 'How old are they?' }, { es: '¿Qué hacen juntos?', en: 'What do you do together?' }] },
          ],
          words: [{ es: 'el muro', en: 'the wall' }, { es: 'separar', en: 'to separate' }, { es: 'la violencia', en: 'violence' }, { es: 'el barrio', en: 'the neighbourhood' }, { es: 'el nieto', en: 'the grandson' }],
        },
        A2: {
          scene: { es: 'El ayuntamiento propone quitar el muro de la paz del barrio de Seamus antes de 2030. Los jóvenes dicen que el muro es del pasado y que ya no lo necesitan. Pero muchos vecinos mayores tienen miedo: dicen que el muro les hace sentirse seguros.', en: 'The council proposes removing the peace wall in Seamus’s neighbourhood before 2030. Young people say the wall is from the past and they don’t need it any more. But many older residents are afraid: they say the wall makes them feel safe.' },
          opener: { es: 'Mi nieto tiene amigos de los dos lados del muro: juegan juntos al fútbol. Para él, el muro es solo una pared fea. Pero mi vecina, la señora O’Neill, perdió a su marido en 1976. Ella me ha dicho que no podrá dormir si quitan el muro. ¿Tú qué harías si tuvieras que decidir?', en: 'My grandson has friends on both sides of the wall: they play football together. For him, the wall is just an ugly wall. But my neighbour, Mrs O’Neill, lost her husband in 1976. She told me she won’t be able to sleep if they take the wall down. What would you do if you had to decide?' },
          decide: {
            ask: { es: 'Seamus tiene que hablar en la reunión del barrio. ¿Qué le aconsejas?', en: 'Seamus has to speak at the neighbourhood meeting. What do you advise him?' },
            options: [
              { say: { es: 'Apoyar a los jóvenes: hay que quitar el muro.', en: 'Back the young people: the wall has to go.' }, then: { es: 'Muchos jóvenes aplauden. La señora O’Neill se va de la reunión llorando.', en: 'Many young people applaud. Mrs O’Neill leaves the meeting in tears.' } },
              { say: { es: 'Proponer abrir primero una puerta durante el día.', en: 'Propose first opening a gate during the day.' }, then: { es: 'Durante un año, la puerta está abierta de día. No pasa nada malo. Los mayores se tranquilizan.', en: 'For a year, the gate is open during the day. Nothing bad happens. The older residents calm down.' } },
              { say: { es: 'Que los jóvenes y los mayores pinten juntos un mural nuevo en el muro.', en: 'Have young and old paint a new mural on the wall together.' }, then: { es: 'La señora O’Neill y el nieto de Seamus pintan juntos una paloma. Sale en el periódico.', en: 'Mrs O’Neill and Seamus’s grandson paint a dove together. It’s in the newspaper.' } },
            ],
          },
          twist: { es: 'Un turista le pide a Seamus que le lleve a ver «dónde estaban las bombas» para hacer fotos. A Seamus no le gusta. ¿Qué debería hacer?', en: 'A tourist asks Seamus to take him to see “where the bombs were” to take photos. Seamus doesn’t like it. What should he do?' },
          questions: [
            { q: { es: '¿Los jóvenes y los mayores de tu país ven la historia igual?', en: 'Do young and old in your country see history the same way?' }, help: { es: 'No, los jóvenes… mientras que los mayores… / Sí, bastante.', en: 'No, young people… while older people… / Yes, quite.' }, follow: [{ es: '¿Y en tu familia?', en: 'And in your family?' }, { es: '¿Hablan de eso?', en: 'Do you talk about it?' }] },
            { q: { es: '¿Qué te hace sentir seguro?', en: 'What makes you feel safe?' }, help: { es: 'Me siento seguro cuando… / En mi casa, con…', en: 'I feel safe when… / At home, with…' }, follow: [{ es: '¿Y en la calle?', en: 'And in the street?' }, { es: '¿Ha cambiado con los años?', en: 'Has it changed over the years?' }] },
            { q: { es: '¿Has hecho turismo en un lugar triste?', en: 'Have you been a tourist in a sad place?' }, help: { es: 'Sí, visité… / No, prefiero no hacerlo.', en: 'Yes, I visited… / No, I prefer not to.' }, follow: [{ es: '¿Por qué fuiste?', en: 'Why did you go?' }, { es: '¿Hiciste fotos?', en: 'Did you take photos?' }] },
            { q: { es: '¿Tienes amigos muy diferentes a ti?', en: 'Do you have friends very different from you?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not really.' }, follow: [{ es: '¿Cómo se conocieron?', en: 'How did you meet?' }, { es: '¿Discuten?', en: 'Do you argue?' }] },
          ],
          words: [{ es: 'quitar', en: 'to remove' }, { es: 'tener miedo', en: 'to be afraid' }, { es: 'seguro', en: 'safe' }, { es: 'tranquilizarse', en: 'to calm down' }, { es: 'la reunión', en: 'the meeting' }],
        },
        B1: {
          scene: { es: 'Una plataforma de series quiere rodar una serie de acción sobre «los Problemas» en las calles del barrio de Seamus, con explosiones y persecuciones. Pagarán bien a los vecinos y traerán turismo. Pero algunas familias de víctimas dicen que su dolor no es un espectáculo. Seamus es el portavoz del barrio.', en: 'A streaming platform wants to shoot an action series about “the Troubles” in the streets of Seamus’s neighbourhood, with explosions and chases. They’ll pay residents well and bring tourism. But some victims’ families say their pain isn’t a spectacle. Seamus is the neighbourhood spokesperson.' },
          opener: { es: 'Las series pueden hacer que el mundo entienda lo que pasó aquí: muchos jóvenes de otros países no saben nada. Pero si convierten nuestra historia en explosiones y héroes, la gente se quedará con una versión falsa. Mi hermano no era un personaje. ¿Quién tiene derecho a contar la historia de un dolor colectivo?', en: 'Series can make the world understand what happened here: many young people in other countries know nothing. But if they turn our history into explosions and heroes, people will be left with a false version. My brother wasn’t a character. Who has the right to tell the story of a collective pain?' },
          decide: {
            ask: { es: '¿Qué debería pedir Seamus a la plataforma?', en: 'What should Seamus ask the platform for?' },
            options: [
              { say: { es: 'Que contraten guionistas de Belfast de los dos lados.', en: 'That they hire Belfast scriptwriters from both sides.' }, then: { es: 'La plataforma acepta. La serie es menos espectacular, pero los críticos dicen que es honesta.', en: 'The platform agrees. The series is less spectacular, but critics say it’s honest.' } },
              { say: { es: 'Que no rueden en el barrio: hay heridas abiertas.', en: 'That they don’t film in the neighbourhood: there are open wounds.' }, then: { es: 'La serie se rueda en otra ciudad que se parece a Belfast. Los vecinos pierden el dinero.', en: 'The series is shot in another city that looks like Belfast. The residents lose the money.' } },
              { say: { es: 'Que paguen un centro de memoria para las víctimas.', en: 'That they pay for a memorial centre for the victims.' }, then: { es: 'La plataforma financia el centro. Algunos dicen que es «comprar el perdón».', en: 'The platform funds the centre. Some say it’s “buying forgiveness”.' } },
            ],
          },
          twist: { es: 'La plataforma quiere que Seamus haga de taxista en la serie, interpretando una versión de sí mismo durante los años de violencia. ¿Debería aceptar?', en: 'The platform wants Seamus to play a taxi driver in the series, acting a version of himself during the years of violence. Should he accept?' },
          questions: [
            { q: { es: '¿Qué serie o película sobre la historia de tu país te parece injusta?', en: 'Which series or film about your country’s history do you find unfair?' }, help: { es: '… porque muestra… / No conozco ninguna.', en: '… because it shows… / I don’t know any.' }, follow: [{ es: '¿Qué faltaba?', en: 'What was missing?' }, { es: '¿Cómo la harías tú?', en: 'How would you make it?' }] },
            { q: { es: '¿Se puede hacer entretenimiento con una tragedia real?', en: 'Can you make entertainment out of a real tragedy?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Cuánto tiempo debe pasar?', en: 'How much time must pass?' }, { es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }] },
            { q: { es: '¿Cómo se puede perdonar después de un conflicto?', en: 'How can people forgive after a conflict?' }, help: { es: 'Hablando de… / Creo que hace falta…', en: 'By talking about… / I think it takes…' }, follow: [{ es: '¿Se debe olvidar?', en: 'Should people forget?' }, { es: '¿Has perdonado algo difícil?', en: 'Have you forgiven something hard?' }] },
            { q: { es: '¿Quién debería contar la historia: los que la vivieron o los expertos?', en: 'Who should tell history: those who lived it or the experts?' }, help: { es: 'Los que la vivieron, porque… / Los dos, porque…', en: 'Those who lived it, because… / Both, because…' }, follow: [{ es: '¿Y si no están de acuerdo?', en: 'And if they disagree?' }, { es: '¿Tus abuelos te contaban su historia?', en: 'Did your grandparents tell you their story?' }] },
          ],
          words: [{ es: 'rodar', en: 'to film' }, { es: 'la persecución', en: 'the chase' }, { es: 'el portavoz', en: 'the spokesperson' }, { es: 'el guionista', en: 'the scriptwriter' }, { es: 'la herida', en: 'the wound' }],
        },
      },
    },
    // ------------------------------------------------------------ St George's Market
    {
      id: 'mercado',
      name: { es: 'El mercado de St George', en: 'St George’s Market' },
      who: { name: 'Róisín', role: { es: 'cocinera', en: 'cook' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado antiguo y cubierto en Belfast. Hay música en directo, pescado, pan y pasteles. Róisín cocina un desayuno muy grande.', en: 'It is an old covered market in Belfast. There is live music, fish, bread and cakes. Róisín cooks a very big breakfast.' },
          opener: { es: '¡Hola! Soy Róisín. Este es el desayuno del Ulster: huevos, salchichas y dos tipos de pan. ¿Tienes hambre?', en: 'Hello! I am Róisín. This is the Ulster fry: eggs, sausages and two kinds of bread. Are you hungry?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'El desayuno completo.', en: 'The full breakfast.' }, then: { es: 'Róisín dice: «¡Muy bien! Ahora no comes hasta la noche».', en: 'Róisín says: “Very good! Now you won’t eat until tonight.”' } },
              { say: { es: 'Solo el pan de patata.', en: 'Just the potato bread.' }, then: { es: 'Róisín dice: «Es mi favorito. Es de mi abuela».', en: 'Róisín says: “It is my favourite. It is my grandmother’s.”' } },
              { say: { es: 'Un té con un pastel.', en: 'A tea with a cake.' }, then: { es: 'Róisín dice: «Aquí el té es muy fuerte. ¡Cuidado!»', en: 'Róisín says: “Here the tea is very strong. Careful!”' } },
            ],
          },
          twist: { es: 'Un músico toca el violín al lado de tu mesa. Te mira y sonríe. ¿Qué haces?', en: 'A musician plays the fiddle next to your table. He looks at you and smiles. What do you do?' },
          questions: [
            { q: { es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }, help: { es: 'Desayuno café y… / No desayuno.', en: 'I have coffee and… / I don’t have breakfast.' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Y los domingos?', en: 'And on Sundays?' }] },
            { q: { es: '¿Te gustan los huevos?', en: 'Do you like eggs?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Cómo los prefieres?', en: 'How do you like them?' }, { es: '¿Sabes cocinarlos?', en: 'Can you cook them?' }] },
            { q: { es: '¿Vas a mercados?', en: 'Do you go to markets?' }, help: { es: 'Sí, los sábados. / No, voy al supermercado.', en: 'Yes, on Saturdays. / No, I go to the supermarket.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Te gusta el violín?', en: 'Do you like the violin?' }, help: { es: 'Sí, es bonito. / No mucho.', en: 'Yes, it’s beautiful. / Not much.' }, follow: [{ es: '¿Qué instrumento te gusta?', en: 'Which instrument do you like?' }, { es: '¿Tocas uno?', en: 'Do you play one?' }] },
          ],
          words: [{ es: 'el desayuno', en: 'breakfast' }, { es: 'el huevo', en: 'the egg' }, { es: 'la salchicha', en: 'the sausage' }, { es: 'el violín', en: 'the fiddle' }, { es: 'cubierto', en: 'covered' }],
        },
        A1: {
          scene: { es: 'Es sábado por la mañana y el mercado está lleno. Róisín tiene un puesto de comida desde hace cinco años. Hoy ha venido su madre a ayudarla, pero su madre critica todo: dice que pone poca sal y que sirve los platos muy despacio.', en: 'It is Saturday morning and the market is full. Róisín has had a food stall for five years. Today her mother has come to help her, but her mother criticises everything: she says Róisín uses too little salt and serves the plates too slowly.' },
          opener: { es: 'Mi madre tenía un restaurante en los años ochenta. Era una época muy difícil en Belfast, pero el restaurante siempre estaba lleno. Ella cree que sabe más que yo. Y quizás tiene razón… pero esta es mi cocina. ¿Tú trabajas bien con tu familia?', en: 'My mother had a restaurant in the eighties. It was a very hard time in Belfast, but the restaurant was always full. She thinks she knows more than me. And maybe she’s right… but this is my kitchen. Do you work well with your family?' },
          decide: {
            ask: { es: 'Róisín te pide un consejo. ¿Qué le dices?', en: 'Róisín asks you for advice. What do you tell her?' },
            options: [
              { say: { es: 'Que su madre cocine un plato especial hoy.', en: 'Let her mother cook a special dish today.' }, then: { es: 'El plato de la madre se vende muy rápido. Las dos están contentas.', en: 'Her mother’s dish sells out very fast. They’re both happy.' } },
              { say: { es: 'Que su madre atienda a los clientes y ella cocine.', en: 'Let her mother serve the customers while she cooks.' }, then: { es: 'La madre habla con todos. Los clientes la adoran.', en: 'Her mother chats with everyone. The customers adore her.' } },
              { say: { es: 'Que hablen al final del día, con calma.', en: 'Talk at the end of the day, calmly.' }, then: { es: 'Por la tarde toman un té. La madre dice: «Estoy orgullosa de ti».', en: 'In the afternoon they have a tea. Her mother says: “I’m proud of you.”' } },
            ],
          },
          twist: { es: 'Llega un cliente famoso: un actor de una serie muy popular. Quiere el desayuno completo, pero sin carne. ¿Qué haces?', en: 'A famous customer arrives: an actor from a very popular series. He wants the full breakfast, but without meat. What do you do?' },
          questions: [
            { q: { es: '¿Has trabajado con alguien de tu familia?', en: 'Have you worked with someone in your family?' }, help: { es: 'Sí, con mi… / No, nunca.', en: 'Yes, with my… / No, never.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Quién cocina mejor en tu familia?', en: 'Who cooks best in your family?' }, help: { es: 'Mi… cocina muy bien.', en: 'My… cooks very well.' }, follow: [{ es: '¿Cuál es su mejor plato?', en: 'What is their best dish?' }, { es: '¿Te ha enseñado?', en: 'Have they taught you?' }] },
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí, a veces. / No, soy vegetariano.', en: 'Yes, sometimes. / No, I’m vegetarian.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Has visto a una persona famosa?', en: 'Have you seen a famous person?' }, help: { es: 'Sí, vi a… en… / No, nunca.', en: 'Yes, I saw… in… / No, never.' }, follow: [{ es: '¿Hablaste con esa persona?', en: 'Did you talk to them?' }, { es: '¿Hiciste una foto?', en: 'Did you take a photo?' }] },
          ],
          words: [{ es: 'criticar', en: 'to criticise' }, { es: 'atender', en: 'to serve (customers)' }, { es: 'la época', en: 'the time / era' }, { es: 'vegetariano', en: 'vegetarian' }, { es: 'adorar', en: 'to adore' }],
        },
        A2: {
          scene: { es: 'Róisín ha ganado un premio: su pan de patata es el mejor de Irlanda del Norte. Ahora una cadena de supermercados quiere venderlo en todo el Reino Unido. Pero ella hace el pan a mano, con la receta de su abuela, y solo puede hacer doscientos al día.', en: 'Róisín has won a prize: her potato bread is the best in Northern Ireland. Now a supermarket chain wants to sell it all over the United Kingdom. But she makes the bread by hand, with her grandmother’s recipe, and can only make two hundred a day.' },
          opener: { es: 'Con el contrato del supermercado podría comprar una casa y pagar la universidad de mis hijos. Pero tendrían que hacer el pan en una fábrica, con máquinas. Ya no sería el pan de mi abuela. Y tendría que dejar el mercado, donde conozco a todos mis clientes. ¿Tú qué elegirías: crecer o quedarte pequeño?', en: 'With the supermarket contract I could buy a house and pay for my children’s university. But they’d have to make the bread in a factory, with machines. It wouldn’t be my grandmother’s bread any more. And I’d have to leave the market, where I know all my customers. What would you choose: grow or stay small?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Róisín?', en: 'What do you advise Róisín?' },
            options: [
              { say: { es: 'Firmar el contrato y vender la receta.', en: 'Sign the contract and sell the recipe.' }, then: { es: 'Gana mucho dinero. Pero cuando prueba el pan de la fábrica, no le gusta nada.', en: 'She makes a lot of money. But when she tastes the factory bread, she doesn’t like it at all.' } },
              { say: { es: 'Rechazar el contrato y seguir en el mercado.', en: 'Turn down the contract and stay at the market.' }, then: { es: 'Las colas en su puesto son más largas que nunca. Todos quieren el pan premiado.', en: 'The queues at her stall are longer than ever. Everyone wants the award-winning bread.' } },
              { say: { es: 'Abrir una pequeña panadería con dos empleados.', en: 'Open a small bakery with two employees.' }, then: { es: 'Contrata a dos chicas del barrio. Ahora hacen seiscientos panes al día, todos a mano.', en: 'She hires two girls from the area. Now they make six hundred loaves a day, all by hand.' } },
            ],
          },
          twist: { es: 'El hermano de Róisín dice que la receta también es suya, porque era de la abuela de los dos. Quiere la mitad del dinero si ella vende. ¿Tiene razón?', en: 'Róisín’s brother says the recipe is his too, because it was both their grandmother’s. He wants half the money if she sells. Is he right?' },
          questions: [
            { q: { es: '¿Has ganado un premio alguna vez?', en: 'Have you ever won a prize?' }, help: { es: 'Sí, gané… por… / No, nunca.', en: 'Yes, I won… for… / No, never.' }, follow: [{ es: '¿Qué hiciste con él?', en: 'What did you do with it?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Prefieres un negocio grande o pequeño?', en: 'Do you prefer a big or a small business?' }, help: { es: 'Pequeño, porque… / Grande, porque…', en: 'Small, because… / Big, because…' }, follow: [{ es: '¿Para trabajar o para comprar?', en: 'To work in or to buy from?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Tu familia tiene una receta secreta?', en: 'Does your family have a secret recipe?' }, help: { es: 'Sí, la… de mi… / No, ninguna.', en: 'Yes, my…’s… / No, none.' }, follow: [{ es: '¿Quién la sabe?', en: 'Who knows it?' }, { es: '¿La compartirías?', en: 'Would you share it?' }] },
            { q: { es: '¿Has discutido con un hermano por dinero?', en: 'Have you argued with a sibling about money?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Cómo lo resolvieron?', en: 'How did you sort it out?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
          ],
          words: [{ es: 'el premio', en: 'the prize' }, { es: 'premiado', en: 'award-winning' }, { es: 'rechazar', en: 'to turn down' }, { es: 'el empleado', en: 'the employee' }, { es: 'crecer', en: 'to grow' }],
        },
        B1: {
          scene: { es: 'Después del Brexit, Irlanda del Norte tiene reglas especiales: sigue algunas normas de la Unión Europea para no poner una frontera con la República de Irlanda. Para Róisín, eso significa más papeles y controles cuando compra ingredientes de Inglaterra. Algunos vecinos dicen que es una traición; otros, que es la única forma de mantener la paz.', en: 'After Brexit, Northern Ireland has special rules: it follows some European Union regulations so there is no border with the Republic of Ireland. For Róisín, that means more paperwork and checks when she buys ingredients from England. Some neighbours say it’s a betrayal; others, that it’s the only way to keep the peace.' },
          opener: { es: 'Yo solo quiero hacer pan. Pero ahora la harina de mi proveedor de Liverpool tarda dos semanas en llegar, y la de Dublín llega en un día. Mis clientes discuten en la cola sobre fronteras y banderas. Durante años aprendimos a no hablar de política en el mercado. ¿Una decisión económica puede reabrir heridas antiguas?', en: 'I just want to make bread. But now flour from my Liverpool supplier takes two weeks to arrive, and flour from Dublin arrives in a day. My customers argue in the queue about borders and flags. For years we learned not to talk politics at the market. Can an economic decision reopen old wounds?' },
          decide: {
            ask: { es: 'Róisín tiene que elegir proveedor. ¿Qué debería hacer?', en: 'Róisín has to choose a supplier. What should she do?' },
            options: [
              { say: { es: 'Comprar en Dublín: es más rápido y más barato.', en: 'Buy from Dublin: it’s faster and cheaper.' }, then: { es: 'Algunos clientes unionistas dejan de venir. Otros clientes nuevos llegan.', en: 'Some unionist customers stop coming. Other new customers arrive.' } },
              { say: { es: 'Seguir con Liverpool, aunque cueste más.', en: 'Stay with Liverpool, even though it costs more.' }, then: { es: 'Sube el precio del pan. Los clientes se quejan, pero la mayoría sigue viniendo.', en: 'The price of bread goes up. Customers complain, but most keep coming.' } },
              { say: { es: 'Buscar un proveedor local de Irlanda del Norte.', en: 'Find a local Northern Irish supplier.' }, then: { es: 'Encuentra un molino pequeño en el condado de Down. Su pan es todavía mejor.', en: 'She finds a small mill in County Down. Her bread is even better.' } },
            ],
          },
          twist: { es: 'Un cliente le pide a Róisín que ponga una bandera en su puesto «para que se sepa de qué lado está». Si no la pone, dice que no volverá. ¿Qué debería hacer?', en: 'A customer asks Róisín to put a flag on her stall “so people know which side she’s on”. If she doesn’t, he says he won’t come back. What should she do?' },
          questions: [
            { q: { es: '¿Una decisión política ha cambiado tu trabajo o tu vida diaria?', en: 'Has a political decision changed your work or daily life?' }, help: { es: 'Sí, cuando… tuve que… / No directamente.', en: 'Yes, when… I had to… / Not directly.' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Lo esperabas?', en: 'Did you expect it?' }] },
            { q: { es: '¿Un negocio debería mostrar sus ideas políticas?', en: 'Should a business show its political views?' }, help: { es: 'No, porque pierde clientes… / Sí, porque…', en: 'No, because it loses customers… / Yes, because…' }, follow: [{ es: '¿Conoces una marca que lo haga?', en: 'Do you know a brand that does?' }, { es: '¿Compras allí?', en: 'Do you shop there?' }] },
            { q: { es: '¿Qué significa una frontera para ti?', en: 'What does a border mean to you?' }, help: { es: 'Para mí, una frontera es… / Depende de…', en: 'For me, a border is… / It depends on…' }, follow: [{ es: '¿Has cruzado fronteras difíciles?', en: 'Have you crossed difficult borders?' }, { es: '¿Vives cerca de una?', en: 'Do you live near one?' }] },
            { q: { es: '¿Es posible ser neutral en un conflicto?', en: 'Is it possible to be neutral in a conflict?' }, help: { es: 'Sí, si… / No, porque no elegir también…', en: 'Yes, if… / No, because not choosing also…' }, follow: [{ es: '¿Lo has intentado?', en: 'Have you tried?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'la frontera', en: 'the border' }, { es: 'el proveedor', en: 'the supplier' }, { es: 'la harina', en: 'flour' }, { es: 'reabrir', en: 'to reopen' }, { es: 'el molino', en: 'the mill' }],
        },
      },
    },
    // ------------------------------------------------------------ the Dark Hedges
    {
      id: 'caminos',
      name: { es: 'El camino de los árboles oscuros', en: 'The Dark Hedges' },
      who: { name: 'Declan', role: { es: 'guía de rodajes', en: 'film-location guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un camino largo con árboles muy viejos. Las ramas forman un túnel. Es un poco oscuro y misterioso. Aquí grabaron una serie famosa. Declan es guía.', en: 'It is a long road with very old trees. The branches form a tunnel. It is a little dark and mysterious. A famous series was filmed here. Declan is a guide.' },
          opener: { es: '¡Hola! Soy Declan. Aquí grabaron «Juego de Tronos». Yo estuve en la serie: ¡era un soldado! ¿Te gusta la serie?', en: 'Hello! I am Declan. “Game of Thrones” was filmed here. I was in the series: I was a soldier! Do you like the series?' },
          decide: {
            ask: { es: 'Declan te da tres cosas. ¿Cuál eliges?', en: 'Declan gives you three things. Which one do you choose?' },
            options: [
              { say: { es: 'Una capa de soldado.', en: 'A soldier’s cloak.' }, then: { es: 'Declan dice: «¡Pareces un rey!»', en: 'Declan says: “You look like a king!”' } },
              { say: { es: 'Una espada de madera.', en: 'A wooden sword.' }, then: { es: 'Declan dice: «Cuidado, ¡no es de verdad!»', en: 'Declan says: “Careful, it isn’t real!”' } },
              { say: { es: 'Un mapa de la serie.', en: 'A map from the series.' }, then: { es: 'Declan dice: «Muchos lugares están en Irlanda del Norte».', en: 'Declan says: “Many places are in Northern Ireland.”' } },
            ],
          },
          twist: { es: 'Un perro grande y gris sale de los árboles. Parece un lobo. Declan dice: «Tranquilo, es mi perro». ¿Qué dices?', en: 'A big grey dog comes out of the trees. It looks like a wolf. Declan says: “Don’t worry, it is my dog.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las series de fantasía?', en: 'Do you like fantasy series?' }, help: { es: 'Sí, mucho. / No, prefiero las comedias.', en: 'Yes, a lot. / No, I prefer comedies.' }, follow: [{ es: '¿Cuál es tu favorita?', en: 'Which is your favourite?' }, { es: '¿Dónde la ves?', en: 'Where do you watch it?' }] },
            { q: { es: '¿Te gustan los árboles viejos?', en: 'Do you like old trees?' }, help: { es: 'Sí, son bonitos. / No me importan.', en: 'Yes, they’re beautiful. / I don’t care.' }, follow: [{ es: '¿Hay árboles cerca de tu casa?', en: 'Are there trees near your house?' }, { es: '¿Qué árbol te gusta?', en: 'Which tree do you like?' }] },
            { q: { es: '¿Quieres salir en una película?', en: 'Do you want to be in a film?' }, help: { es: 'Sí, me encantaría. / No, me da vergüenza.', en: 'Yes, I’d love to. / No, I’m too shy.' }, follow: [{ es: '¿Qué personaje?', en: 'Which character?' }, { es: '¿Bueno o malo?', en: 'Good or bad?' }] },
            { q: { es: '¿Te dan miedo los lugares oscuros?', en: 'Are you scared of dark places?' }, help: { es: 'Sí, un poco. / No, nada.', en: 'Yes, a little. / No, not at all.' }, follow: [{ es: '¿Y de niño?', en: 'And as a child?' }, { es: '¿Duermes con luz?', en: 'Do you sleep with a light on?' }] },
          ],
          words: [{ es: 'el árbol', en: 'the tree' }, { es: 'la rama', en: 'the branch' }, { es: 'la espada', en: 'the sword' }, { es: 'la capa', en: 'the cloak' }, { es: 'el soldado', en: 'the soldier' }],
        },
        A1: {
          scene: { es: 'Es el amanecer. Declan lleva a un grupo de fans al camino antes de que lleguen los autobuses. Hay niebla entre los árboles. Los fans se ponen capas y se hacen fotos. Todos hablan de sus personajes favoritos.', en: 'It is dawn. Declan takes a group of fans to the road before the coaches arrive. There is mist between the trees. The fans put on cloaks and take photos. They all talk about their favourite characters.' },
          opener: { es: 'Antes de la serie, yo trabajaba en una granja aquí cerca. Un día buscaban extras y me apunté. Estuve en tres temporadas: siempre de soldado y siempre moría. ¡Me mataron nueve veces! Ahora hago tours para fans de todo el mundo. ¿Te gustaría trabajar en una película?', en: 'Before the series, I worked on a farm near here. One day they were looking for extras and I signed up. I was in three seasons: always a soldier and I always died. They killed me nine times! Now I run tours for fans from all over the world. Would you like to work on a film?' },
          decide: {
            ask: { es: 'Los fans quieren hacer algo especial. ¿Qué propones?', en: 'The fans want to do something special. What do you suggest?' },
            options: [
              { say: { es: 'Que Declan cuente cómo «moría» en la serie.', en: 'Have Declan tell how he “died” in the series.' }, then: { es: 'Declan lo cuenta con gestos y caídas. Todos se ríen mucho.', en: 'Declan acts it out with gestures and falls. Everyone laughs a lot.' } },
              { say: { es: 'Hacer una foto de grupo con las espadas.', en: 'Take a group photo with the swords.' }, then: { es: 'La foto sale perfecta con la niebla detrás. Parece una escena de la serie.', en: 'The photo comes out perfectly with the mist behind. It looks like a scene from the series.' } },
              { say: { es: 'Caminar en silencio por el túnel de árboles.', en: 'Walk in silence through the tunnel of trees.' }, then: { es: 'Solo se oyen los pájaros. Una chica dice que es el mejor momento del viaje.', en: 'Only the birds can be heard. A girl says it’s the best moment of the trip.' } },
            ],
          },
          twist: { es: 'Una fan llora: su personaje favorito muere en la serie y todavía está triste. Los demás se ríen de ella. ¿Qué haces?', en: 'A fan cries: her favourite character dies in the series and she is still sad. The others laugh at her. What do you do?' },
          questions: [
            { q: { es: '¿Qué personaje de ficción te gusta?', en: 'Which fictional character do you like?' }, help: { es: 'Me gusta… porque es…', en: 'I like… because they are…' }, follow: [{ es: '¿De qué serie o libro es?', en: 'Which series or book is it from?' }, { es: '¿Te pareces a ese personaje?', en: 'Are you like them?' }] },
            { q: { es: '¿Te levantas temprano para ver algo bonito?', en: 'Do you get up early to see something beautiful?' }, help: { es: 'Sí, para ver… / No, me gusta dormir.', en: 'Yes, to see… / No, I like sleeping.' }, follow: [{ es: '¿Has visto un amanecer especial?', en: 'Have you seen a special sunrise?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Has llorado con una serie o una película?', en: 'Have you cried at a series or a film?' }, help: { es: 'Sí, con… / No, nunca.', en: 'Yes, at… / No, never.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Estabas solo?', en: 'Were you alone?' }] },
            { q: { es: '¿Has visitado un lugar por una serie o un libro?', en: 'Have you visited a place because of a series or a book?' }, help: { es: 'Sí, fui a… / No, nunca.', en: 'Yes, I went to… / No, never.' }, follow: [{ es: '¿Era como en la pantalla?', en: 'Was it like on screen?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
          ],
          words: [{ es: 'el amanecer', en: 'dawn' }, { es: 'el extra', en: 'the extra' }, { es: 'la temporada', en: 'the season' }, { es: 'el personaje', en: 'the character' }, { es: 'el túnel', en: 'the tunnel' }],
        },
        A2: {
          scene: { es: 'Los árboles del camino tienen más de doscientos cincuenta años. Desde que salieron en la serie, cada día pasan miles de turistas y cientos de coches. Varios árboles se han caído y los expertos dicen que los demás están enfermos. Ahora han prohibido los coches, pero los turistas siguen llegando a pie.', en: 'The trees on the road are more than two hundred and fifty years old. Since they appeared in the series, thousands of tourists and hundreds of cars pass every day. Several trees have fallen and experts say the rest are sick. Now cars have been banned, but tourists keep coming on foot.' },
          opener: { es: 'La serie le ha dado trabajo a mucha gente aquí, incluido yo. Pero ahora veo que la fama está matando los árboles. Algunos turistas se suben a las ramas para hacer fotos o graban sus nombres en los troncos. ¿Tú has visto un lugar que se ha estropeado por ser famoso?', en: 'The series has given work to many people here, including me. But now I see that fame is killing the trees. Some tourists climb the branches to take photos or carve their names into the trunks. Have you seen a place that has been ruined by becoming famous?' },
          decide: {
            ask: { es: 'Declan quiere proteger los árboles, pero vive de los turistas. ¿Qué le aconsejas?', en: 'Declan wants to protect the trees, but he lives off the tourists. What do you advise him?' },
            options: [
              { say: { es: 'Hacer tours más pequeños y más caros.', en: 'Run smaller, more expensive tours.' }, then: { es: 'Tiene menos clientes, pero gana lo mismo. Los árboles tienen menos gente cerca.', en: 'He has fewer customers, but earns the same. The trees have fewer people around them.' } },
              { say: { es: 'Llevar a los fans a otros lugares de la serie.', en: 'Take the fans to other places from the series.' }, then: { es: 'Descubre castillos y playas que casi nadie visita. Los fans están encantados.', en: 'He discovers castles and beaches that hardly anyone visits. The fans are delighted.' } },
              { say: { es: 'Pedir a cada turista un euro para cuidar los árboles.', en: 'Ask every tourist for a pound to look after the trees.' }, then: { es: 'En un año reúnen dinero para plantar árboles nuevos al lado de los viejos.', en: 'In a year they raise money to plant new trees beside the old ones.' } },
            ],
          },
          twist: { es: 'Un turista graba su nombre en un árbol delante de Declan. Cuando Declan le dice algo, el turista contesta: «He pagado el tour, puedo hacer lo que quiera». ¿Qué debería hacer Declan?', en: 'A tourist carves his name into a tree in front of Declan. When Declan says something, the tourist replies: “I paid for the tour, I can do what I want.” What should Declan do?' },
          questions: [
            { q: { es: '¿Has visto un lugar estropeado por la fama?', en: 'Have you seen a place ruined by fame?' }, help: { es: 'Sí, … antes era… y ahora… / No, que yo sepa.', en: 'Yes, … used to be… and now… / Not that I know of.' }, follow: [{ es: '¿Qué harías tú?', en: 'What would you do?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Qué haces cuando ves a alguien estropear algo público?', en: 'What do you do when you see someone damaging something public?' }, help: { es: 'Le digo algo. / No digo nada, porque…', en: 'I say something. / I don’t say anything, because…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Cómo reaccionó?', en: 'How did they react?' }] },
            { q: { es: '¿Pagarías por visitar un lugar natural?', en: 'Would you pay to visit a natural place?' }, help: { es: 'Sí, si el dinero… / No, la naturaleza debería…', en: 'Yes, if the money… / No, nature should…' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Lo has hecho?', en: 'Have you done it?' }] },
            { q: { es: '¿Una serie o película ha cambiado algún lugar de tu país?', en: 'Has a series or film changed a place in your country?' }, help: { es: 'Sí, después de… mucha gente fue a… / No, que yo sepa.', en: 'Yes, after… lots of people went to… / Not that I know of.' }, follow: [{ es: '¿Para bien?', en: 'For the better?' }, { es: '¿Lo has visitado?', en: 'Have you visited it?' }] },
          ],
          words: [{ es: 'el tronco', en: 'the trunk' }, { es: 'grabar', en: 'to carve' }, { es: 'la fama', en: 'fame' }, { es: 'prohibir', en: 'to ban' }, { es: 'reunir', en: 'to raise / collect' }],
        },
        B1: {
          scene: { es: 'Una empresa quiere construir un parque temático de «Juego de Tronos» al lado del camino, con hoteles, restaurantes y dragones mecánicos. Traería quinientos empleos a una zona rural donde los jóvenes se van. Los ecologistas dicen que sería el final del paisaje. Declan, que trabajó en la serie, es ahora presidente de la asociación de vecinos.', en: 'A company wants to build a “Game of Thrones” theme park next to the road, with hotels, restaurants and mechanical dragons. It would bring five hundred jobs to a rural area young people are leaving. Environmentalists say it would be the end of the landscape. Declan, who worked on the series, is now chair of the residents’ association.' },
          opener: { es: 'Mis hijos se fueron a trabajar a Londres porque aquí no había nada. Con este parque, quizás volverían. Pero la gente no viene aquí por los dragones de plástico: viene por la magia de un lugar real. Si lo convertimos en una atracción, ¿no estaremos matando justo lo que la gente busca? ¿Cuándo el éxito de un lugar empieza a destruirlo?', en: 'My children went to work in London because there was nothing here. With this park, maybe they’d come back. But people don’t come here for plastic dragons: they come for the magic of a real place. If we turn it into an attraction, won’t we be killing exactly what people are looking for? When does a place’s success start to destroy it?' },
          decide: {
            ask: { es: 'La asociación tiene que dar su opinión oficial. ¿Qué debería proponer Declan?', en: 'The association has to give its official opinion. What should Declan propose?' },
            options: [
              { say: { es: 'Apoyar el parque con condiciones estrictas de distancia y empleo local.', en: 'Back the park with strict conditions on distance and local jobs.' }, then: { es: 'El parque se construye a cinco kilómetros. Dos de los hijos de vecinos vuelven a trabajar allí.', en: 'The park is built five kilometres away. Two of the residents’ children come back to work there.' } },
              { say: { es: 'Rechazarlo y proponer un museo pequeño en un edificio viejo del pueblo.', en: 'Reject it and propose a small museum in an old building in the village.' }, then: { es: 'El museo es un éxito modesto. Crea veinte empleos, no quinientos.', en: 'The museum is a modest success. It creates twenty jobs, not five hundred.' } },
              { say: { es: 'Hacer una consulta a todos los vecinos, incluidos los que se fueron.', en: 'Hold a consultation of all residents, including those who left.' }, then: { es: 'Los que se fueron votan a favor; los que se quedaron, en contra. El pueblo está más dividido que nunca.', en: 'Those who left vote in favour; those who stayed, against. The village is more divided than ever.' } },
            ],
          },
          twist: { es: 'La empresa del parque ofrece a Declan un papel en su espectáculo: interpretar a su soldado de la serie todos los días, con un buen sueldo. Sus vecinos lo verían como un traidor. ¿Debería aceptar?', en: 'The park company offers Declan a role in its show: playing his soldier from the series every day, with a good salary. His neighbours would see him as a traitor. Should he accept?' },
          questions: [
            { q: { es: '¿Cuándo el éxito de un lugar empieza a destruirlo?', en: 'When does a place’s success start to destroy it?' }, help: { es: 'Cuando… / Creo que no tiene por qué, si…', en: 'When… / I don’t think it has to, if…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Se podría haber evitado?', en: 'Could it have been avoided?' }] },
            { q: { es: '¿Volverías a tu pueblo o ciudad de origen por un trabajo?', en: 'Would you go back to your home town for a job?' }, help: { es: 'Sí, si… / No, porque mi vida ahora…', en: 'Yes, if… / No, because my life now…' }, follow: [{ es: '¿Qué echas de menos?', en: 'What do you miss?' }, { es: '¿Qué no echas de menos?', en: 'What don’t you miss?' }] },
            { q: { es: '¿Los parques temáticos son cultura o negocio?', en: 'Are theme parks culture or business?' }, help: { es: 'Son negocio, pero… / Pueden ser cultura si…', en: 'They’re business, but… / They can be culture if…' }, follow: [{ es: '¿Has ido a alguno?', en: 'Have you been to one?' }, { es: '¿Qué te pareció?', en: 'What did you think?' }] },
            { q: { es: '¿Quién debería decidir el futuro de un pueblo: los que se quedan o todos los que nacieron allí?', en: 'Who should decide a village’s future: those who stay or everyone born there?' }, help: { es: 'Los que se quedan, porque… / Todos, porque…', en: 'Those who stay, because… / Everyone, because…' }, follow: [{ es: '¿Y en tu ciudad?', en: 'And in your city?' }, { es: '¿Votan los que viven fuera?', en: 'Do those living abroad vote?' }] },
          ],
          words: [{ es: 'el parque temático', en: 'the theme park' }, { es: 'la asociación de vecinos', en: 'the residents’ association' }, { es: 'la atracción', en: 'the attraction' }, { es: 'estricto', en: 'strict' }, { es: 'el espectáculo', en: 'the show' }],
        },
      },
    },
  ],
};
