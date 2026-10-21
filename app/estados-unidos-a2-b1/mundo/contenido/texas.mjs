// Texas · Austin. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own: same place and people, different
// situations, decisions and questions. English is a natural translation.
export default {
  id: 'texas',
  spots: [
    // ------------------------------------------------------------ the BBQ joint
    {
      id: 'barbacoa',
      name: { es: 'El restaurante de barbacoa', en: 'The BBQ restaurant' },
      who: { name: 'Lorena', role: { es: 'maestra parrillera', en: 'pitmaster' } },
      levels: {
        A0: {
          scene: { es: 'Es un restaurante de barbacoa. Hay humo y mesas largas. Lorena cocina carne. Huele muy bien.', en: 'It is a barbecue restaurant. There is smoke and long tables. Lorena cooks meat. It smells very good.' },
          opener: { es: '¡Hola! Soy Lorena. Cocino carne doce horas. ¿Tienes hambre?', en: 'Hi! I am Lorena. I cook meat for twelve hours. Are you hungry?' },
          decide: {
            ask: { es: 'Lorena tiene carne, salchichas y maíz. ¿Qué comes?', en: 'Lorena has meat, sausages and corn. What do you eat?' },
            options: [
              { say: { es: 'Carne, por favor.', en: 'Meat, please.' }, then: { es: 'Lorena corta la carne. ¡Es muy suave!', en: 'Lorena cuts the meat. It is very tender!' } },
              { say: { es: 'Maíz y pan, por favor.', en: 'Corn and bread, please.' }, then: { es: 'Lorena dice: «¡Muy bien! El maíz es dulce».', en: 'Lorena says: “Very good! The corn is sweet.”' } },
              { say: { es: 'Un poco de todo.', en: 'A little of everything.' }, then: { es: '¡El plato es enorme! Lorena ríe.', en: 'The plate is huge! Lorena laughs.' } },
            ],
          },
          twist: { es: 'Hay una fila muy larga. ¡Dos horas! ¿Qué dices?', en: 'There is a very long line. Two hours! What do you say?' },
          questions: [
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí, como carne. / No, no como carne.', en: 'Yes, I eat meat. / No, I don’t eat meat.' }, follow: [{ es: '¿Pollo o cerdo?', en: 'Chicken or pork?' }, { es: '¿Comes pescado?', en: 'Do you eat fish?' }] },
            { q: { es: '¿Cocinas en casa?', en: 'Do you cook at home?' }, help: { es: 'Sí, cocino. / No, no cocino. / Un poco.', en: 'Yes, I cook. / No, I don’t cook. / A little.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Cocinas bien?', en: 'Do you cook well?' }] },
            { q: { es: '¿Esperas en una fila para comer?', en: 'Do you wait in line to eat?' }, help: { es: 'Sí, espero. / No, no espero.', en: 'Yes, I wait. / No, I don’t wait.' }, follow: [{ es: '¿Cuántos minutos?', en: 'How many minutes?' }, { es: '¿Con amigos?', en: 'With friends?' }] },
            { q: { es: '¿Te gusta comer con las manos?', en: 'Do you like eating with your hands?' }, help: { es: 'Sí, me gusta. / No, prefiero el tenedor.', en: 'Yes, I like it. / No, I prefer a fork.' }, follow: [{ es: '¿Qué comes con las manos?', en: 'What do you eat with your hands?' }, { es: '¿Usas muchas servilletas?', en: 'Do you use lots of napkins?' }] },
          ],
          words: [
            { es: 'la carne', en: 'the meat' }, { es: 'el humo', en: 'the smoke' }, { es: 'la salchicha', en: 'the sausage' },
            { es: 'el maíz', en: 'the corn' }, { es: 'el plato', en: 'the plate' }, { es: 'cocinar', en: 'to cook' },
          ],
        },
        A1: {
          scene: { es: 'Un restaurante de barbacoa en el este de Austin. Mesas largas de madera, papel marrón en vez de platos y un ahumador enorme detrás. Lorena se levantó a las tres de la mañana para encender el fuego.', en: 'A barbecue restaurant in East Austin. Long wooden tables, brown paper instead of plates and a huge smoker out back. Lorena got up at three in the morning to light the fire.' },
          opener: { es: 'Aquí la estrella es el brisket, la pechuga de res. La cocino lentamente, con humo de roble, unas doce horas. Mi abuelo me enseñó. ¿Tú tienes una receta de familia?', en: 'Here the star is the brisket, beef brisket. I cook it slowly, with oak smoke, for about twelve hours. My grandfather taught me. Do you have a family recipe?' },
          decide: {
            ask: { es: 'Llegas a las dos de la tarde y Lorena dice: «Queda brisket para cinco personas». Hay seis delante de ti. ¿Qué haces?', en: 'You arrive at two in the afternoon and Lorena says: “There’s brisket left for five people.” There are six ahead of you. What do you do?' },
            options: [
              { say: { es: 'Espero por si alguien cambia de idea.', en: 'I wait in case someone changes their mind.' }, then: { es: '¡Una señora pide pollo! Te toca el último trozo de brisket.', en: 'A lady orders chicken! You get the last piece of brisket.' } },
              { say: { es: 'Pido otra cosa: costillas y frijoles.', en: 'I order something else: ribs and beans.' }, then: { es: 'Lorena te guiña un ojo: «Buena decisión. Las costillas hoy están increíbles».', en: 'Lorena winks: “Good choice. The ribs are amazing today.”' } },
              { say: { es: 'Me voy y vuelvo mañana más temprano.', en: 'I leave and come back earlier tomorrow.' }, then: { es: '«Llega a las diez», dice Lorena. «Y trae una silla: la fila es larga».', en: '“Come at ten,” says Lorena. “And bring a chair: the line is long.”' } },
            ],
          },
          twist: { es: 'Un turista pide salsa de tomate para el brisket. Todo el restaurante se queda en silencio. Lorena respira hondo.', en: 'A tourist asks for ketchup for the brisket. The whole restaurant goes silent. Lorena takes a deep breath.' },
          questions: [
            { q: { es: '¿Tienes una receta de familia? ¿Quién la cocina?', en: 'Do you have a family recipe? Who cooks it?' }, help: { es: 'Sí, mi… cocina… Lleva… / No, en mi familia…', en: 'Yes, my… cooks… It has… / No, in my family…' }, follow: [{ es: '¿Cuándo la comen?', en: 'When do you eat it?' }, { es: '¿Sabes prepararla?', en: 'Do you know how to make it?' }] },
            { q: { es: '¿A qué hora te levantas normalmente? ¿Y el fin de semana?', en: 'What time do you usually get up? And on the weekend?' }, help: { es: 'Normalmente me levanto a las… El fin de semana…', en: 'Usually I get up at… On the weekend…' }, follow: [{ es: '¿Te levantarías a las tres para cocinar?', en: 'Would you get up at three to cook?' }, { es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }] },
            { q: { es: '¿Cuál es la comida más famosa de tu región?', en: 'What’s the most famous food from your region?' }, help: { es: 'La comida más famosa es… Se hace con…', en: 'The most famous food is… It’s made with…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde se come mejor?', en: 'Where is the best place to eat it?' }] },
            { q: { es: '¿Prefieres comer en mesas grandes con desconocidos o en mesas pequeñas?', en: 'Do you prefer eating at big tables with strangers or at small tables?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Hablas con la gente de la mesa?', en: 'Do you talk to the people at the table?' }, { es: '¿Con quién comes normalmente?', en: 'Who do you usually eat with?' }] },
          ],
          words: [
            { es: 'el ahumador', en: 'the smoker' }, { es: 'la pechuga de res', en: 'beef brisket' }, { es: 'el roble', en: 'oak' },
            { es: 'las costillas', en: 'the ribs' }, { es: 'los frijoles', en: 'the beans' }, { es: 'la salsa de tomate', en: 'ketchup' },
          ],
        },
        A2: {
          scene: { es: 'Un crítico gastronómico muy famoso viene hoy al restaurante, pero nadie sabe quién es. Lorena está nerviosa: hace dos años un mal comentario casi la obliga a cerrar.', en: 'A very famous food critic is coming to the restaurant today, but nobody knows who it is. Lorena is nervous: two years ago a bad review almost forced her to close.' },
          opener: { es: 'Aquella vez el fuego se apagó a medianoche y no me di cuenta. La carne quedó dura. Él escribió que mi brisket «parecía un zapato». Lloré tres días. ¿A ti alguna vez te criticaron en público?', en: 'That time the fire went out at midnight and I didn’t notice. The meat came out tough. He wrote that my brisket “looked like a shoe.” I cried for three days. Have you ever been criticized in public?' },
          decide: {
            ask: { es: 'Hay tres clientes sospechosos en la fila. Lorena quiere tratar al crítico de forma especial. ¿Qué le aconsejas?', en: 'There are three suspicious customers in line. Lorena wants to treat the critic specially. What do you advise her?' },
            options: [
              { say: { es: 'Tratar a todos igual: si la comida es buena, se notará.', en: 'Treat everyone the same: if the food is good, it’ll show.' }, then: { es: 'Lorena asiente y sirve como siempre. Le tiemblan un poco las manos.', en: 'Lorena nods and serves as usual. Her hands shake a little.' } },
              { say: { es: 'Dar a los tres el mejor trozo, por si acaso.', en: 'Give all three the best piece, just in case.' }, then: { es: 'Uno de ellos resulta ser un vecino que viene todos los días. Está feliz.', en: 'One of them turns out to be a neighbor who comes every day. He’s delighted.' } },
              { say: { es: 'Preguntarles directamente si son críticos.', en: 'Ask them directly if they’re critics.' }, then: { es: 'Los tres dicen que no. Uno se pone rojo como un tomate.', en: 'All three say no. One of them turns red as a tomato.' } },
            ],
          },
          twist: { es: 'El hombre que se puso rojo se acerca al final: no es crítico, es el nieto del primer jefe de Lorena, y trae una foto de ella con dieciocho años junto al ahumador.', en: 'The man who turned red comes over at the end: he’s not a critic, he’s the grandson of Lorena’s first boss, and he brings a photo of her at eighteen next to the smoker.' },
          questions: [
            { q: { es: '¿Te criticaron alguna vez en público? ¿Cómo reaccionaste?', en: 'Have you ever been criticized in public? How did you react?' }, help: { es: 'Una vez, en…, alguien dijo que… Yo me sentí… y después…', en: 'Once, at…, someone said that… I felt… and then…' }, follow: [{ es: '¿Tenía razón?', en: 'Were they right?' }, { es: '¿Cambiaste algo después?', en: 'Did you change anything afterward?' }] },
            { q: { es: '¿Lees las opiniones en internet antes de ir a un restaurante? ¿Escribiste alguna?', en: 'Do you read online reviews before going to a restaurant? Have you written any?' }, help: { es: 'Sí, siempre leo… / Una vez escribí una opinión porque…', en: 'Yes, I always read… / Once I wrote a review because…' }, follow: [{ es: '¿Confías en ellas?', en: 'Do you trust them?' }, { es: '¿Qué te hace escribir una mala opinión?', en: 'What makes you write a bad review?' }] },
            { q: { es: '¿Cuál fue la mejor comida de tu vida? ¿Dónde y con quién estabas?', en: 'What was the best meal of your life? Where were you and who were you with?' }, help: { es: 'Fue en… Estaba con… y comimos…', en: 'It was in… I was with… and we ate…' }, follow: [{ es: '¿Era cara?', en: 'Was it expensive?' }, { es: '¿Por qué la recuerdas tanto?', en: 'Why do you remember it so much?' }] },
            { q: { es: 'Compara cocinar para tu familia y cocinar para desconocidos.', en: 'Compare cooking for your family and cooking for strangers.' }, help: { es: 'Para mi familia es más… pero para desconocidos…', en: 'For my family it’s more… but for strangers…' }, follow: [{ es: '¿Para quién cocinaste la última vez?', en: 'Who did you last cook for?' }, { es: '¿Te pones nervioso cuando cocinas para otros?', en: 'Do you get nervous when you cook for others?' }] },
          ],
          words: [
            { es: 'el crítico gastronómico', en: 'the food critic' }, { es: 'apagarse (el fuego)', en: 'to go out (fire)' }, { es: 'duro', en: 'tough, hard' },
            { es: 'sospechoso', en: 'suspicious' }, { es: 'la opinión', en: 'the review, the opinion' }, { es: 'temblar', en: 'to shake, to tremble' },
          ],
        },
        B1: {
          scene: { es: 'Una asociación ecologista pide a los restaurantes de barbacoa que reduzcan el humo y ofrezcan opciones sin carne. Algunos clientes amenazan con no volver si Lorena «se vuelve vegetariana». Su hija, que estudia ciencias ambientales, está de acuerdo con la asociación.', en: 'An environmental group is asking barbecue restaurants to cut down on smoke and offer meat-free options. Some customers threaten not to come back if Lorena “goes vegetarian.” Her daughter, who studies environmental science, agrees with the group.' },
          opener: { es: 'La barbacoa es la historia de Texas: vaqueros, inmigrantes alemanes y checos, familias mexicanas, afroamericanas… Pero mi hija me enseña datos que no puedo ignorar. ¿Una tradición se defiende o se transforma?', en: 'Barbecue is the history of Texas: cowboys, German and Czech immigrants, Mexican families, African American families… But my daughter shows me data I can’t ignore. Do you defend a tradition or transform it?' },
          decide: {
            ask: { es: 'Lorena tiene que contestar a la asociación esta semana. ¿Qué le recomiendas?', en: 'Lorena has to reply to the group this week. What do you recommend?' },
            options: [
              { say: { es: 'Añadir platos de verduras ahumadas y explicar por qué en el menú.', en: 'Add smoked vegetable dishes and explain why on the menu.' }, then: { es: 'Su hija la abraza. Un cliente habitual comenta: «Mientras no toques el brisket…».', en: 'Her daughter hugs her. A regular comments: “As long as you don’t touch the brisket…”' } },
              { say: { es: 'Invertir en un ahumador que contamine menos, sin cambiar el menú.', en: 'Invest in a smoker that pollutes less, without changing the menu.' }, then: { es: 'Es caro: tendría que subir los precios un quince por ciento.', en: 'It’s expensive: she’d have to raise prices by fifteen percent.' } },
              { say: { es: 'No cambiar nada: la gente viene precisamente por la tradición.', en: 'Change nothing: people come precisely for the tradition.' }, then: { es: 'La hija no le habla en toda la cena. Lorena come en silencio.', en: 'Her daughter doesn’t talk to her for the whole dinner. Lorena eats in silence.' } },
            ],
          },
          twist: { es: 'Un periodista publica que el restaurante vegetariano de moda de la ciudad usa ingredientes traídos en avión desde otro continente. De repente, el debate cambia de dirección.', en: 'A journalist reports that the city’s trendy vegetarian restaurant uses ingredients flown in from another continent. Suddenly the debate changes direction.' },
          questions: [
            { q: { es: '¿Una tradición culinaria debe protegerse tal como es o adaptarse a los problemas actuales?', en: 'Should a culinary tradition be protected as it is or adapt to today’s problems?' }, help: { es: 'Yo creo que… porque… Sin embargo, también es cierto que…', en: 'I think that… because… However, it’s also true that…' }, follow: [{ es: '¿Qué tradición de tu país ha cambiado?', en: 'Which tradition from your country has changed?' }, { es: '¿Fue para mejor?', en: 'Was it for the better?' }] },
            { q: { es: '¿Es más responsable comer menos carne o comer productos locales? ¿Por qué?', en: 'Is it more responsible to eat less meat or to eat local products? Why?' }, help: { es: 'Depende de… Por ejemplo,… Por eso diría que…', en: 'It depends on… For example,… That’s why I’d say…' }, follow: [{ es: '¿Cambiaste tu forma de comer en los últimos años?', en: 'Have you changed the way you eat in recent years?' }, { es: '¿Pagarías más por comida más sostenible?', en: 'Would you pay more for more sustainable food?' }] },
            { q: { es: 'Si tus hijos te pidieran cambiar algo que tu familia hace desde hace generaciones, ¿cómo reaccionarías?', en: 'If your children asked you to change something your family has done for generations, how would you react?' }, help: { es: 'Primero los escucharía… Si tuvieran razón,… Pero si…', en: 'First I’d listen to them… If they were right,… But if…' }, follow: [{ es: '¿Discutiste alguna vez con tus padres por algo así?', en: 'Have you ever argued with your parents about something like that?' }, { es: '¿Quién suele ceder en tu familia?', en: 'Who usually gives in in your family?' }] },
            { q: { es: '¿Los datos deberían pesar más que las emociones en decisiones como esta?', en: 'Should data weigh more than emotions in decisions like this?' }, help: { es: 'En mi opinión,… porque… Aunque las emociones…', en: 'In my opinion,… because… Although emotions…' }, follow: [{ es: '¿Tomaste alguna decisión importante solo con el corazón?', en: 'Have you ever made an important decision with your heart alone?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
          ],
          words: [
            { es: 'la asociación ecologista', en: 'the environmental group' }, { es: 'amenazar', en: 'to threaten' }, { es: 'transformar', en: 'to transform' },
            { es: 'invertir', en: 'to invest' }, { es: 'contaminar', en: 'to pollute' }, { es: 'ceder', en: 'to give in' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the live music bar
    {
      id: 'musica',
      name: { es: 'El bar con música en vivo', en: 'The live music bar' },
      who: { name: 'Jesse', role: { es: 'cantautor', en: 'singer-songwriter' } },
      levels: {
        A0: {
          scene: { es: 'Es un bar pequeño. Hay luces de colores. Jesse canta y toca la guitarra. La gente baila.', en: 'It is a small bar. There are colored lights. Jesse sings and plays the guitar. People dance.' },
          opener: { es: '¡Hola! Soy Jesse. Canto canciones de amor. ¿Bailas?', en: 'Hi! I am Jesse. I sing love songs. Do you dance?' },
          decide: {
            ask: { es: 'Jesse dice: «¿Qué canción canto?». ¿Qué dices?', en: 'Jesse says: “What song do I sing?” What do you say?' },
            options: [
              { say: { es: 'Una canción alegre.', en: 'A happy song.' }, then: { es: '¡Todos bailan! Tú también.', en: 'Everyone dances! You too.' } },
              { say: { es: 'Una canción triste.', en: 'A sad song.' }, then: { es: 'Una señora llora un poco. La canción es muy bonita.', en: 'A lady cries a little. The song is very beautiful.' } },
              { say: { es: 'Una canción en español.', en: 'A song in Spanish.' }, then: { es: 'Jesse canta «Cielito lindo». ¡Todos cantan!', en: 'Jesse sings “Cielito lindo.” Everyone sings!' } },
            ],
          },
          twist: { es: 'Jesse dice: «¡Ven! ¡Canta conmigo!». ¿Qué dices?', en: 'Jesse says: “Come! Sing with me!” What do you say?' },
          questions: [
            { q: { es: '¿Cantas bien?', en: 'Do you sing well?' }, help: { es: 'Sí, canto bien. / No, canto mal. / Un poco.', en: 'Yes, I sing well. / No, I sing badly. / A little.' }, follow: [{ es: '¿Cantas en la ducha?', en: 'Do you sing in the shower?' }, { es: '¿Cantas en el coche?', en: 'Do you sing in the car?' }] },
            { q: { es: '¿Bailas mucho?', en: 'Do you dance a lot?' }, help: { es: 'Sí, bailo mucho. / No, no bailo.', en: 'Yes, I dance a lot. / No, I don’t dance.' }, follow: [{ es: '¿Dónde bailas?', en: 'Where do you dance?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Qué música escuchas?', en: 'What music do you listen to?' }, help: { es: 'Escucho pop / rock / música latina…', en: 'I listen to pop / rock / Latin music…' }, follow: [{ es: '¿Quién es tu cantante favorito?', en: 'Who is your favorite singer?' }, { es: '¿Escuchas música cada día?', en: 'Do you listen to music every day?' }] },
            { q: { es: '¿Vas a conciertos?', en: 'Do you go to concerts?' }, help: { es: 'Sí, voy a conciertos. / No, no voy.', en: 'Yes, I go to concerts. / No, I don’t go.' }, follow: [{ es: '¿Son caros?', en: 'Are they expensive?' }, { es: '¿Grandes o pequeños?', en: 'Big or small?' }] },
          ],
          words: [
            { es: 'el bar', en: 'the bar' }, { es: 'cantar', en: 'to sing' }, { es: 'la guitarra', en: 'the guitar' },
            { es: 'bailar', en: 'to dance' }, { es: 'la canción', en: 'the song' }, { es: 'alegre', en: 'happy, cheerful' },
          ],
        },
        A1: {
          scene: { es: 'Un bar de música en vivo en el centro de Austin, que se llama a sí misma «la capital mundial de la música en vivo». Jesse toca country y canciones en español los martes. Hoy hay solo doce personas.', en: 'A live music bar in downtown Austin, which calls itself “the live music capital of the world.” Jesse plays country and songs in Spanish on Tuesdays. Today there are only twelve people.' },
          opener: { es: 'Mi madre es de Monterrey y mi padre es de aquí, de Texas. Por eso canto en los dos idiomas. Escribo las canciones en la cocina, de noche. ¿Tú tienes un lugar favorito para pensar?', en: 'My mom is from Monterrey and my dad is from here, from Texas. That’s why I sing in both languages. I write my songs in the kitchen, at night. Do you have a favorite place to think?' },
          decide: {
            ask: { es: 'Jesse quiere probar una canción nueva, pero tiene miedo. Te pregunta: «¿La canto?». ¿Qué respondes?', en: 'Jesse wants to try a new song, but he’s scared. He asks you: “Should I sing it?” What do you answer?' },
            options: [
              { say: { es: '¡Sí! Hoy hay poca gente: es el día perfecto.', en: 'Yes! There aren’t many people today: it’s the perfect day.' }, then: { es: 'Jesse canta. Al final, una pareja le pide la canción otra vez.', en: 'Jesse sings. At the end, a couple asks him for the song again.' } },
              { say: { es: 'Mejor al final, cuando la gente esté más relajada.', en: 'Better at the end, when people are more relaxed.' }, then: { es: 'Jesse espera… y al final se olvida de una parte de la letra. Todos aplauden igual.', en: 'Jesse waits… and at the end he forgets part of the lyrics. Everyone claps anyway.' } },
              { say: { es: 'Cántamela primero solo a mí.', en: 'Sing it to me first.' }, then: { es: 'Jesse la canta en voz baja, solo para ti. Es una canción sobre su abuela.', en: 'Jesse sings it quietly, just for you. It’s a song about his grandmother.' } },
            ],
          },
          twist: { es: 'Se va la luz en todo el bar. Silencio. Jesse sigue tocando sin micrófono y la gente enciende las linternas del móvil.', en: 'The power goes out in the whole bar. Silence. Jesse keeps playing without a microphone and people turn on their phone flashlights.' },
          questions: [
            { q: { es: '¿Tienes un lugar favorito para pensar o crear?', en: 'Do you have a favorite place to think or create?' }, help: { es: 'Sí, mi lugar favorito es… porque…', en: 'Yes, my favorite place is… because…' }, follow: [{ es: '¿Vas allí solo?', en: 'Do you go there alone?' }, { es: '¿A qué hora?', en: 'At what time?' }] },
            { q: { es: 'Jesse canta en dos idiomas. ¿Qué idiomas hablan en tu familia?', en: 'Jesse sings in two languages. What languages does your family speak?' }, help: { es: 'En mi familia hablamos… Mi… habla también…', en: 'In my family we speak… My… also speaks…' }, follow: [{ es: '¿Qué idioma quieres aprender después del español?', en: 'What language do you want to learn after Spanish?' }, { es: '¿Escuchas música en español?', en: 'Do you listen to music in Spanish?' }] },
            { q: { es: '¿Prefieres los conciertos grandes o los bares pequeños con música en vivo?', en: 'Do you prefer big concerts or small bars with live music?' }, help: { es: 'Prefiero… porque… En un concierto grande…', en: 'I prefer… because… At a big concert…' }, follow: [{ es: '¿Cuál fue tu último concierto?', en: 'What was your last concert?' }, { es: '¿Con quién fuiste?', en: 'Who did you go with?' }] },
            { q: { es: '¿Qué haces cuando tienes miedo de hacer algo nuevo?', en: 'What do you do when you’re afraid of doing something new?' }, help: { es: 'Cuando tengo miedo, normalmente… / pido ayuda a…', en: 'When I’m scared, I usually… / I ask… for help' }, follow: [{ es: '¿Qué cosa nueva vas a hacer este año?', en: 'What new thing are you going to do this year?' }, { es: '¿Eres valiente?', en: 'Are you brave?' }] },
          ],
          words: [
            { es: 'la música en vivo', en: 'live music' }, { es: 'el cantautor', en: 'the singer-songwriter' }, { es: 'la letra', en: 'the lyrics' },
            { es: 'probar', en: 'to try, to try out' }, { es: 'en voz baja', en: 'quietly' }, { es: 'la linterna', en: 'the flashlight' },
          ],
        },
        A2: {
          scene: { es: 'Después del concierto, Jesse cuenta las propinas: cuarenta y tres dólares. Un productor de Nashville le dejó su tarjeta y le ofrece grabar un disco… pero solo en inglés y solo country, «que es lo que se vende».', en: 'After the show, Jesse counts his tips: forty-three dollars. A producer from Nashville left him his card and offers to record an album… but only in English and only country, “because that’s what sells.”' },
          opener: { es: 'Hace diez años toqué en una boda y nadie me escuchaba: todos miraban el móvil. Esa noche casi dejé la música. Al día siguiente escribí mi mejor canción. ¿Tú alguna vez estuviste a punto de abandonar algo y al final seguiste?', en: 'Ten years ago I played at a wedding and nobody listened to me: everyone was looking at their phones. That night I almost quit music. The next day I wrote my best song. Have you ever been about to give up on something and kept going in the end?' },
          decide: {
            ask: { es: 'Jesse tiene que contestar al productor mañana. ¿Qué le aconsejas?', en: 'Jesse has to answer the producer tomorrow. What do you advise him?' },
            options: [
              { say: { es: 'Que acepte: después, cuando sea famoso, podrá cantar en español.', en: 'To accept: later, when he’s famous, he can sing in Spanish.' }, then: { es: 'Jesse duda: «¿Y si después ya no me dejan?».', en: 'Jesse hesitates: “And what if they won’t let me later?”' } },
              { say: { es: 'Que negocie: diez canciones en inglés y dos en español.', en: 'To negotiate: ten songs in English and two in Spanish.' }, then: { es: 'Jesse escribe un mensaje. El productor contesta: «Una. Y al final del disco».', en: 'Jesse writes a message. The producer replies: “One. And at the end of the album.”' } },
              { say: { es: 'Que diga que no y grabe el disco él mismo.', en: 'To say no and record the album himself.' }, then: { es: 'La dueña del bar le ofrece el escenario un lunes para grabar en vivo, gratis.', en: 'The bar owner offers him the stage on a Monday to record live, for free.' } },
            ],
          },
          twist: { es: 'Su madre lo llama desde Monterrey: escuchó su canción en una radio local de allí. Alguien la subió a internet y está sonando sin que él lo supiera.', en: 'His mother calls him from Monterrey: she heard his song on a local radio station there. Someone posted it online and it’s being played without him knowing.' },
          questions: [
            { q: { es: '¿Estuviste alguna vez a punto de abandonar algo y al final seguiste? ¿Qué te hizo seguir?', en: 'Have you ever been about to give up on something and kept going in the end? What made you keep going?' }, help: { es: 'Sí, cuando estaba… pensé en dejarlo, pero… y al final…', en: 'Yes, when I was… I thought about quitting, but… and in the end…' }, follow: [{ es: '¿Te alegras de haber seguido?', en: 'Are you glad you kept going?' }, { es: '¿Qué abandonaste y no te arrepientes?', en: 'What did you give up and don’t regret?' }] },
            { q: { es: '¿Cuál fue el mejor concierto o la mejor actuación que viste? ¿Qué pasó?', en: 'What was the best concert or performance you’ve ever seen? What happened?' }, help: { es: 'Fue… en… El cantante… y la gente…', en: 'It was… in… The singer… and the people…' }, follow: [{ es: '¿Con quién fuiste?', en: 'Who did you go with?' }, { es: '¿Guardas algún recuerdo: una entrada, una foto?', en: 'Do you keep any souvenir: a ticket, a photo?' }] },
            { q: { es: 'Compara un trabajo que te gusta pero da poco dinero con uno que no te gusta pero paga bien.', en: 'Compare a job you like but that pays little with one you don’t like but that pays well.' }, help: { es: 'El primero es más… pero el segundo… Yo elegiría…', en: 'The first is more… but the second… I would choose…' }, follow: [{ es: '¿Tuviste alguna vez que elegir así?', en: 'Have you ever had to choose like that?' }, { es: '¿Qué te dijeron tus padres?', en: 'What did your parents tell you?' }] },
            { q: { es: '¿Escuchaste alguna vez una canción que te cambió el día? ¿Cuál?', en: 'Have you ever heard a song that changed your day? Which one?' }, help: { es: 'Sí, un día estaba… y escuché… Me sentí…', en: 'Yes, one day I was… and I heard… I felt…' }, follow: [{ es: '¿Por qué crees que te afectó tanto?', en: 'Why do you think it affected you so much?' }, { es: '¿Se la recomendaste a alguien?', en: 'Did you recommend it to anyone?' }] },
          ],
          words: [
            { es: 'la propina', en: 'the tip' }, { es: 'grabar un disco', en: 'to record an album' }, { es: 'el productor', en: 'the producer' },
            { es: 'abandonar', en: 'to give up, to quit' }, { es: 'negociar', en: 'to negotiate' }, { es: 'el escenario', en: 'the stage' },
          ],
        },
        B1: {
          scene: { es: 'El edificio del bar se vende y lo van a convertir en un hotel de lujo. Jesse organiza un concierto de despedida. Al mismo tiempo, el ayuntamiento ofrece ayudas a los músicos, pero solo para quienes demuestren que viven de la música.', en: 'The bar’s building is being sold and will be turned into a luxury hotel. Jesse is organizing a farewell concert. At the same time, the city offers grants to musicians, but only to those who prove they make a living from music.' },
          opener: { es: 'La ciudad usa la música como eslogan para atraer turistas y empresas, pero los músicos ya no podemos pagar un alquiler aquí. Es una contradicción. ¿Qué debería hacer una ciudad cuando lo que la hizo especial empieza a desaparecer?', en: 'The city uses music as a slogan to attract tourists and companies, but we musicians can no longer afford rent here. It’s a contradiction. What should a city do when the thing that made it special starts to disappear?' },
          decide: {
            ask: { es: 'Jesse va a hablar en el concierto de despedida y te pide ayuda con el mensaje. ¿Qué propones decir?', en: 'Jesse is going to speak at the farewell concert and asks you for help with the message. What do you suggest he say?' },
            options: [
              { say: { es: 'Pedir que el hotel dedique un escenario a músicos locales.', en: 'Ask the hotel to dedicate a stage to local musicians.' }, then: { es: 'El representante del hotel, que estaba en el público, dice que «lo estudiarán». Nadie le cree.', en: 'The hotel’s representative, who was in the audience, says they’ll “look into it.” Nobody believes him.' } },
              { say: { es: 'Proponer que los músicos compren juntos un local, como cooperativa.', en: 'Propose that musicians buy a venue together, as a cooperative.' }, then: { es: 'Veinte personas se apuntan esa misma noche. Hacen falta doscientas.', en: 'Twenty people sign up that very night. Two hundred are needed.' } },
              { say: { es: 'Criticar las ayudas: la música no se mide por cuánto dinero da.', en: 'Criticize the grants: music isn’t measured by how much money it makes.' }, then: { es: 'Aplausos fuertes. Un concejal en primera fila toma notas con cara seria.', en: 'Loud applause. A city council member in the front row takes notes with a serious face.' } },
            ],
          },
          twist: { es: 'Al terminar, una inversora se acerca a Jesse: le ofrece financiar un nuevo bar… si él acepta ponerle su nombre y ser la cara del negocio. Jesse odia la idea de ser una «marca».', en: 'When it’s over, an investor approaches Jesse: she offers to fund a new bar… if he agrees to put his name on it and be the face of the business. Jesse hates the idea of being a “brand.”' },
          questions: [
            { q: { es: '¿Qué debería hacer una ciudad cuando lo que la hizo especial está desapareciendo?', en: 'What should a city do when the thing that made it special is disappearing?' }, help: { es: 'Yo creo que debería… Por ejemplo,… Así se evitaría que…', en: 'I think it should… For example,… That would prevent…' }, follow: [{ es: '¿Pasa algo así en tu ciudad?', en: 'Is something like this happening in your city?' }, { es: '¿Quién tiene la culpa?', en: 'Who is to blame?' }] },
            { q: { es: '¿Es justo que las ayudas públicas para artistas dependan de cuánto ganan?', en: 'Is it fair for public grants for artists to depend on how much they earn?' }, help: { es: 'Por un lado, tiene sentido porque… Por otro lado,…', en: 'On the one hand, it makes sense because… On the other hand,…' }, follow: [{ es: '¿Qué criterio usarías tú?', en: 'What criterion would you use?' }, { es: '¿El arte debería ser un trabajo como cualquier otro?', en: 'Should art be a job like any other?' }] },
            { q: { es: 'Si estuvieras en el lugar de Jesse, ¿aceptarías ser la «marca» del nuevo bar?', en: 'If you were in Jesse’s place, would you agree to be the “brand” of the new bar?' }, help: { es: 'Si fuera él, … porque… aunque me molestaría…', en: 'If I were him, I would… because… although it would bother me…' }, follow: [{ es: '¿Qué condiciones pondrías?', en: 'What conditions would you set?' }, { es: '¿Conoces a alguien que se convirtió en una marca?', en: 'Do you know someone who became a brand?' }] },
            { q: { es: '¿Se puede vivir del arte sin traicionarse a uno mismo?', en: 'Can you make a living from art without betraying yourself?' }, help: { es: 'Creo que sí / no, siempre que… El problema es que…', en: 'I think so / not, as long as… The problem is that…' }, follow: [{ es: '¿Qué artista admiras por su coherencia?', en: 'Which artist do you admire for their integrity?' }, { es: '¿Y en tu trabajo, haces concesiones?', en: 'And in your work, do you make compromises?' }] },
          ],
          words: [
            { es: 'la despedida', en: 'the farewell' }, { es: 'las ayudas', en: 'grants, subsidies' }, { es: 'el eslogan', en: 'the slogan' },
            { es: 'la cooperativa', en: 'the cooperative' }, { es: 'el concejal', en: 'the city council member' }, { es: 'la inversora', en: 'the investor' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the local fair
    {
      id: 'feria',
      name: { es: 'La feria local', en: 'The local fair' },
      who: { name: 'Tyler', role: { es: 'estudiante que cría una cabra', en: 'student raising a goat' } },
      levels: {
        A0: {
          scene: { es: 'Es una feria. Hay una noria, comida y animales. Tyler tiene una cabra. La cabra es blanca.', en: 'It is a fair. There is a Ferris wheel, food and animals. Tyler has a goat. The goat is white.' },
          opener: { es: '¡Hola! Soy Tyler. Tengo dieciséis años. Ella es Daisy, mi cabra. ¿Te gustan los animales?', en: 'Hi! I am Tyler. I am sixteen. This is Daisy, my goat. Do you like animals?' },
          decide: {
            ask: { es: 'Tyler dice: «¿Quieres darle comida a Daisy?». ¿Qué haces?', en: 'Tyler says: “Do you want to feed Daisy?” What do you do?' },
            options: [
              { say: { es: 'Sí, le doy comida.', en: 'Yes, I feed her.' }, then: { es: 'Daisy come de tu mano. ¡Es muy suave!', en: 'Daisy eats from your hand. She is very soft!' } },
              { say: { es: 'No, tengo miedo.', en: 'No, I am scared.' }, then: { es: 'Tyler dice: «Tranquilo. Daisy es buena».', en: 'Tyler says: “Don’t worry. Daisy is good.”' } },
              { say: { es: 'Le hago una foto.', en: 'I take a photo of her.' }, then: { es: 'Daisy mira la cámara. ¡Foto perfecta!', en: 'Daisy looks at the camera. Perfect photo!' } },
            ],
          },
          twist: { es: '¡Daisy come tu mapa! ¿Qué dices?', en: 'Daisy eats your map! What do you say?' },
          questions: [
            { q: { es: '¿Vas a ferias?', en: 'Do you go to fairs?' }, help: { es: 'Sí, voy a ferias. / No, no voy.', en: 'Yes, I go to fairs. / No, I don’t go.' }, follow: [{ es: '¿Subes a la noria?', en: 'Do you ride the Ferris wheel?' }, { es: '¿Qué comes en una feria?', en: 'What do you eat at a fair?' }] },
            { q: { es: '¿Qué animal te gusta más?', en: 'Which animal do you like most?' }, help: { es: 'Me gusta más el caballo / la vaca / la cabra…', en: 'I like the horse / the cow / the goat… most' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tocas los animales?', en: 'Do you touch animals?' }] },
            { q: { es: '¿Vives en la ciudad o en el campo?', en: 'Do you live in the city or in the countryside?' }, help: { es: 'Vivo en la ciudad. / Vivo en el campo.', en: 'I live in the city. / I live in the countryside.' }, follow: [{ es: '¿Hay animales cerca?', en: 'Are there animals nearby?' }, { es: '¿Prefieres la ciudad o el campo?', en: 'Do you prefer the city or the countryside?' }] },
            { q: { es: '¿Cuántos años tienes?', en: 'How old are you?' }, help: { es: 'Tengo… años.', en: 'I am… years old.' }, follow: [{ es: '¿Cuándo es tu cumpleaños?', en: 'When is your birthday?' }, { es: '¿Tienes hermanos?', en: 'Do you have brothers or sisters?' }] },
          ],
          words: [
            { es: 'la feria', en: 'the fair' }, { es: 'la noria', en: 'the Ferris wheel' }, { es: 'la cabra', en: 'the goat' },
            { es: 'el animal', en: 'the animal' }, { es: 'suave', en: 'soft' }, { es: 'el campo', en: 'the countryside' },
          ],
        },
        A1: {
          scene: { es: 'La feria del condado, a las afueras de Austin. Hay rodeo, una noria, puestos de comida frita y un pabellón con animales. Tyler cuida a Daisy desde que nació. Mañana compite en el concurso de cabras.', en: 'The county fair, on the outskirts of Austin. There’s a rodeo, a Ferris wheel, fried food stands and a barn with animals. Tyler has looked after Daisy since she was born. Tomorrow he competes in the goat show.' },
          opener: { es: 'Me levanto todos los días a las seis para darle de comer y limpiarla. Mis amigos juegan videojuegos; yo cepillo una cabra. ¡Pero me encanta! ¿Tú tienes una responsabilidad así?', en: 'I get up every day at six to feed her and clean her. My friends play video games; I brush a goat. But I love it! Do you have a responsibility like that?' },
          decide: {
            ask: { es: 'Tyler tiene que preparar a Daisy para el concurso. Te pide ayuda. ¿Qué haces?', en: 'Tyler has to get Daisy ready for the show. He asks you for help. What do you do?' },
            options: [
              { say: { es: 'La cepillo con mucho cuidado.', en: 'I brush her very carefully.' }, then: { es: 'Daisy cierra los ojos. Le gusta mucho.', en: 'Daisy closes her eyes. She likes it a lot.' } },
              { say: { es: 'Le pongo un lazo rojo.', en: 'I put a red ribbon on her.' }, then: { es: 'Tyler ríe: «¡No se permiten lazos! Pero está muy guapa».', en: 'Tyler laughs: “Ribbons aren’t allowed! But she looks very pretty.”' } },
              { say: { es: 'Voy a comprar comida frita para los dos.', en: 'I go buy fried food for both of us.' }, then: { es: 'Vuelves con mantequilla frita. Tyler dice que es «muy de Texas».', en: 'You come back with fried butter. Tyler says it’s “very Texas.”' } },
            ],
          },
          twist: { es: 'Daisy se escapa del pabellón y corre hacia la noria. Tyler grita y todos los niños corren detrás de ella.', en: 'Daisy escapes from the barn and runs toward the Ferris wheel. Tyler shouts and all the kids run after her.' },
          questions: [
            { q: { es: '¿Tienes una responsabilidad diaria, como cuidar a un animal o a una persona?', en: 'Do you have a daily responsibility, like looking after an animal or a person?' }, help: { es: 'Sí, cada día tengo que… / No, pero…', en: 'Yes, every day I have to… / No, but…' }, follow: [{ es: '¿Te gusta o es difícil?', en: 'Do you like it or is it hard?' }, { es: '¿Quién te ayuda?', en: 'Who helps you?' }] },
            { q: { es: '¿Qué hacías a los dieciséis años en tu tiempo libre?', en: 'What did you do in your free time at sixteen?' }, help: { es: 'A los dieciséis… / Ahora tengo… años y…', en: 'At sixteen I… / Now I’m… and I…' }, follow: [{ es: '¿Y ahora?', en: 'And now?' }, { es: '¿Qué te gustaría hacer ahora que no hacías antes?', en: 'What would you like to do now that you didn’t before?' }] },
            { q: { es: '¿Participaste en un concurso? ¿De qué?', en: 'Have you taken part in a competition? What kind?' }, help: { es: 'Sí, participé en un concurso de… / No, nunca.', en: 'Yes, I took part in a… competition / No, never.' }, follow: [{ es: '¿Ganaste?', en: 'Did you win?' }, { es: '¿Estabas nervioso?', en: 'Were you nervous?' }] },
            { q: { es: '¿Qué comida rara probaste o quieres probar?', en: 'What strange food have you tried or do you want to try?' }, help: { es: 'Probé… / Quiero probar… porque…', en: 'I tried… / I want to try… because…' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Qué comida no vas a probar nunca?', en: 'What food are you never going to try?' }] },
          ],
          words: [
            { es: 'el condado', en: 'the county' }, { es: 'el pabellón', en: 'the barn, the pavilion' }, { es: 'el concurso', en: 'the show, the competition' },
            { es: 'cepillar', en: 'to brush' }, { es: 'el lazo', en: 'the ribbon' }, { es: 'escaparse', en: 'to escape, to run away' },
          ],
        },
        A2: {
          scene: { es: 'Daisy ganó el segundo premio. Tyler está feliz, pero hay un problema: en este tipo de concurso juvenil, después de la exhibición, los animales se venden en una subasta. Tyler sabía las reglas desde el principio, pero no pensaba que se iba a encariñar tanto.', en: 'Daisy won second prize. Tyler is happy, but there’s a problem: in this kind of youth show, after the exhibition, the animals are sold at auction. Tyler knew the rules from the start, but he didn’t think he’d get so attached.' },
          opener: { es: 'Con el dinero de la subasta pensaba pagar parte de la universidad. Ese era el plan. Pero anoche dormí en el pabellón, al lado de ella. ¿Tú alguna vez cambiaste de planes porque te encariñaste con algo o con alguien?', en: 'With the auction money I was planning to pay for part of college. That was the plan. But last night I slept in the barn, next to her. Have you ever changed plans because you got attached to something or someone?' },
          decide: {
            ask: { es: 'Faltan dos horas para la subasta. ¿Qué le aconsejas a Tyler?', en: 'There are two hours left before the auction. What do you advise Tyler?' },
            options: [
              { say: { es: 'Que cumpla el plan: sabía las reglas y la universidad es importante.', en: 'To stick to the plan: he knew the rules and college is important.' }, then: { es: 'Tyler asiente con los ojos rojos. «Lo sé. Solo necesitaba que alguien me lo dijera».', en: 'Tyler nods, his eyes red. “I know. I just needed someone to tell me.”' } },
              { say: { es: 'Que hable con sus padres y busque otra forma de pagar.', en: 'To talk to his parents and find another way to pay.' }, then: { es: 'Su madre dice que pueden intentarlo, pero tendrá que trabajar los fines de semana.', en: 'His mother says they can try, but he’ll have to work on weekends.' } },
              { say: { es: 'Que pregunte si un vecino puede comprarla para tenerla en su granja.', en: 'To ask whether a neighbor could buy her to keep on their farm.' }, then: { es: 'Una señora mayor con una pequeña granja dice que lo pensará. Tyler cruza los dedos.', en: 'An older woman with a small farm says she’ll think about it. Tyler crosses his fingers.' } },
            ],
          },
          twist: { es: 'Su hermana pequeña aparece con una hucha: rompió la hucha y trae treinta y siete dólares para «comprar a Daisy».', en: 'His little sister shows up with a piggy bank: she broke it open and brings thirty-seven dollars to “buy Daisy.”' },
          questions: [
            { q: { es: '¿Cambiaste alguna vez de planes porque te encariñaste con algo o con alguien?', en: 'Have you ever changed plans because you got attached to something or someone?' }, help: { es: 'Sí, una vez iba a… pero conocí a… / me encariñé con…', en: 'Yes, once I was going to… but I met… / I got attached to…' }, follow: [{ es: '¿Fue buena decisión?', en: 'Was it a good decision?' }, { es: '¿Qué dijo la gente?', en: 'What did people say?' }] },
            { q: { es: '¿Cómo pagaste o vas a pagar tus estudios?', en: 'How did you pay, or how will you pay, for your studies?' }, help: { es: 'Mis padres… / Trabajé en… / Tuve una beca…', en: 'My parents… / I worked at… / I had a scholarship…' }, follow: [{ es: '¿Es caro estudiar en tu país?', en: 'Is it expensive to study in your country?' }, { es: '¿Trabajaste mientras estudiabas?', en: 'Did you work while you studied?' }] },
            { q: { es: '¿Qué hacía tu familia para ganar un poco de dinero extra cuando eras pequeño?', en: 'What did your family do to earn a bit of extra money when you were little?' }, help: { es: 'Mi madre / mi padre… A veces nosotros…', en: 'My mom / my dad… Sometimes we…' }, follow: [{ es: '¿Ayudabas tú?', en: 'Did you help?' }, { es: '¿Qué hiciste con tu primer sueldo?', en: 'What did you do with your first paycheck?' }] },
            { q: { es: 'Compara crecer en el campo y crecer en una ciudad. ¿Qué se aprende en cada lugar?', en: 'Compare growing up in the countryside and growing up in a city. What do you learn in each place?' }, help: { es: 'En el campo se aprende… En cambio, en la ciudad…', en: 'In the countryside you learn… In the city, on the other hand…' }, follow: [{ es: '¿Dónde creciste tú?', en: 'Where did you grow up?' }, { es: '¿Dónde quieres que crezcan tus hijos?', en: 'Where do you want your children to grow up?' }] },
          ],
          words: [
            { es: 'el premio', en: 'the prize' }, { es: 'la subasta', en: 'the auction' }, { es: 'encariñarse con', en: 'to get attached to' },
            { es: 'la beca', en: 'the scholarship' }, { es: 'la granja', en: 'the farm' }, { es: 'la hucha', en: 'the piggy bank' },
          ],
        },
        B1: {
          scene: { es: 'En la feria hay una pequeña protesta: un grupo defiende que los programas juveniles de ganadería enseñan a los niños a ver a los animales como objetos. Los padres de los participantes responden que enseñan responsabilidad y de dónde viene la comida. Tyler está en medio.', en: 'There’s a small protest at the fair: a group argues that youth livestock programs teach children to see animals as objects. The participants’ parents respond that they teach responsibility and where food comes from. Tyler is caught in the middle.' },
          opener: { es: 'Los dos tienen parte de razón, y eso es lo que más me cuesta. Aprendí muchísimo con Daisy. Pero también aprendí a no ponerle nombre a la próxima. ¿Eso es madurar o es endurecerse?', en: 'Both sides are partly right, and that’s what I find hardest. I learned so much with Daisy. But I also learned not to name the next one. Is that growing up or becoming hardened?' },
          decide: {
            ask: { es: 'Un periodista local le pregunta a Tyler si recomendaría el programa a otros chicos. Tyler te mira antes de contestar. ¿Qué le sugieres?', en: 'A local journalist asks Tyler whether he’d recommend the program to other kids. Tyler looks at you before answering. What do you suggest?' },
            options: [
              { say: { es: 'Que diga que sí, pero que hay que preparar emocionalmente a los chicos.', en: 'To say yes, but that kids need to be prepared emotionally.' }, then: { es: 'El periodista apunta la frase. Un padre en la protesta asiente sin querer.', en: 'The journalist writes the sentence down. A father at the protest nods without meaning to.' } },
              { say: { es: 'Que hable solo de su experiencia, sin dar recomendaciones.', en: 'To speak only about his experience, without making recommendations.' }, then: { es: 'Tyler cuenta la noche en el pabellón. Al terminar, nadie de los dos grupos dice nada.', en: 'Tyler tells the story of the night in the barn. When he finishes, nobody from either group says anything.' } },
              { say: { es: 'Que proponga una alternativa: programas con animales que no se venden.', en: 'To propose an alternative: programs with animals that aren’t sold.' }, then: { es: 'Los organizadores dicen que sin subasta no hay dinero para los premios. El debate se enciende.', en: 'The organizers say that without the auction there’s no money for the prizes. The debate heats up.' } },
            ],
          },
          twist: { es: 'La señora que compró a Daisy en la subasta aparece en la protesta. Cuenta que la compró para que viviera en su granja, y que Tyler puede visitarla cuando quiera. Los manifestantes no saben si aplaudir.', en: 'The woman who bought Daisy at the auction shows up at the protest. She says she bought her so she could live on her farm, and that Tyler can visit her whenever he wants. The protesters don’t know whether to applaud.' },
          questions: [
            { q: { es: '¿Es educativo que los niños críen animales que después se venderán? ¿Por qué?', en: 'Is it educational for children to raise animals that will later be sold? Why?' }, help: { es: 'Creo que sí / no, porque… Lo que sí es importante es…', en: 'I think so / not, because… What really matters is…' }, follow: [{ es: '¿Lo permitirías a tus hijos?', en: 'Would you allow your children to do it?' }, { es: '¿Qué aprendiste tú de los animales de niño?', en: 'What did you learn from animals as a child?' }] },
            { q: { es: 'Tyler pregunta si dejar de poner nombre a los animales es madurar o endurecerse. ¿Tú qué le responderías?', en: 'Tyler asks whether no longer naming the animals is growing up or becoming hardened. What would you answer him?' }, help: { es: 'Yo le diría que… porque madurar significa… mientras que endurecerse…', en: 'I’d tell him that… because growing up means… whereas becoming hardened…' }, follow: [{ es: '¿Te endureciste tú con algo?', en: 'Have you become hardened about something?' }, { es: '¿Es siempre malo?', en: 'Is it always bad?' }] },
            { q: { es: '¿Sabemos demasiado poco de dónde viene lo que comemos? ¿Debería enseñarse en la escuela?', en: 'Do we know too little about where our food comes from? Should it be taught at school?' }, help: { es: 'Me parece que… Si se enseñara en la escuela,…', en: 'It seems to me that… If it were taught at school,…' }, follow: [{ es: '¿Visitaste alguna vez una granja?', en: 'Have you ever visited a farm?' }, { es: '¿Cambiaría tu forma de comer?', en: 'Would it change the way you eat?' }] },
            { q: { es: 'Cuando dos grupos tienen parte de razón, ¿cómo se llega a un acuerdo? Pon un ejemplo de tu vida.', en: 'When two groups are both partly right, how do you reach an agreement? Give an example from your life.' }, help: { es: 'Primero hay que… Por ejemplo, una vez en… y al final…', en: 'First you have to… For example, once at… and in the end…' }, follow: [{ es: '¿Te gusta hacer de mediador?', en: 'Do you like being the mediator?' }, { es: '¿Qué conflicto no tiene solución?', en: 'Which conflict has no solution?' }] },
          ],
          words: [
            { es: 'la ganadería', en: 'livestock farming' }, { es: 'el manifestante', en: 'the protester' }, { es: 'madurar', en: 'to grow up, to mature' },
            { es: 'endurecerse', en: 'to become hardened' }, { es: 'criar', en: 'to raise (animals, children)' }, { es: 'encenderse (un debate)', en: 'to heat up (a debate)' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the highway gas station
    {
      id: 'gasolinera',
      name: { es: 'La gasolinera de la ruta', en: 'The highway gas station' },
      who: { name: 'Earl', role: { es: 'cajero de la gasolinera', en: 'gas station cashier' } },
      levels: {
        A0: {
          scene: { es: 'Es una gasolinera en la carretera. Hay coches y camiones. Earl trabaja en la tienda. Es mayor y lleva gorra.', en: 'It is a gas station on the highway. There are cars and trucks. Earl works in the shop. He is older and wears a cap.' },
          opener: { es: '¡Hola! Soy Earl. ¿Gasolina? ¿Agua? ¿Café?', en: 'Hi! I am Earl. Gas? Water? Coffee?' },
          decide: {
            ask: { es: 'Hace mucho calor. ¿Qué compras?', en: 'It is very hot. What do you buy?' },
            options: [
              { say: { es: 'Agua fría, por favor.', en: 'Cold water, please.' }, then: { es: 'Earl te da una botella grande. «Un dólar».', en: 'Earl gives you a big bottle. “One dollar.”' } },
              { say: { es: 'Un helado, por favor.', en: 'An ice cream, please.' }, then: { es: 'El helado es de chocolate. ¡Rico!', en: 'The ice cream is chocolate. Tasty!' } },
              { say: { es: 'Un café, por favor.', en: 'A coffee, please.' }, then: { es: 'Earl dice: «¿Café con este calor? ¡Eres valiente!».', en: 'Earl says: “Coffee in this heat? You are brave!”' } },
            ],
          },
          twist: { es: '¡Tu coche no arranca! ¿Qué dices?', en: 'Your car doesn’t start! What do you say?' },
          questions: [
            { q: { es: '¿Tienes coche?', en: 'Do you have a car?' }, help: { es: 'Sí, tengo coche. / No, no tengo.', en: 'Yes, I have a car. / No, I don’t.' }, follow: [{ es: '¿De qué color es?', en: 'What color is it?' }, { es: '¿Conduces mucho?', en: 'Do you drive a lot?' }] },
            { q: { es: '¿Te gustan los viajes largos en coche?', en: 'Do you like long car trips?' }, help: { es: 'Sí, me gustan. / No, prefiero el avión.', en: 'Yes, I like them. / No, I prefer the plane.' }, follow: [{ es: '¿Escuchas música en el coche?', en: 'Do you listen to music in the car?' }, { es: '¿Duermes en el coche?', en: 'Do you sleep in the car?' }] },
            { q: { es: '¿Qué compras en una gasolinera?', en: 'What do you buy at a gas station?' }, help: { es: 'Compro agua / café / chocolate…', en: 'I buy water / coffee / chocolate…' }, follow: [{ es: '¿Es caro?', en: 'Is it expensive?' }, { es: '¿Usas el baño?', en: 'Do you use the bathroom?' }] },
            { q: { es: '¿Hace calor o frío hoy?', en: 'Is it hot or cold today?' }, help: { es: 'Hoy hace calor. / Hoy hace frío.', en: 'Today it is hot. / Today it is cold.' }, follow: [{ es: '¿Llueve?', en: 'Is it raining?' }, { es: '¿Qué tiempo te gusta?', en: 'What weather do you like?' }] },
          ],
          words: [
            { es: 'la gasolinera', en: 'the gas station' }, { es: 'la carretera', en: 'the highway, the road' }, { es: 'la gasolina', en: 'gas, gasoline' },
            { es: 'el camión', en: 'the truck' }, { es: 'la gorra', en: 'the cap' }, { es: 'arrancar', en: 'to start (a car)' },
          ],
        },
        A1: {
          scene: { es: 'Una gasolinera en una carretera recta y larga, entre Austin y San Antonio. Hay campos secos, un molino de viento y camiones enormes. Earl trabaja aquí desde hace treinta años y conoce a todos los camioneros.', en: 'A gas station on a long, straight highway between Austin and San Antonio. There are dry fields, a windmill and huge trucks. Earl has worked here for thirty years and knows all the truck drivers.' },
          opener: { es: 'En Texas todo está lejos. La gente conduce una hora para ir al supermercado y no le parece raro. ¿En tu país también hay distancias tan grandes?', en: 'In Texas everything is far away. People drive an hour to go to the supermarket and don’t think it’s strange. Are there such big distances in your country too?' },
          decide: {
            ask: { es: 'Tu móvil no tiene batería y no sabes el camino a San Antonio. ¿Qué haces?', en: 'Your phone is dead and you don’t know the way to San Antonio. What do you do?' },
            options: [
              { say: { es: 'Le pido a Earl un mapa de papel.', en: 'I ask Earl for a paper map.' }, then: { es: 'Earl saca un mapa viejo y dibuja la ruta con un bolígrafo rojo. «Así viajábamos antes».', en: 'Earl takes out an old map and draws the route with a red pen. “That’s how we used to travel.”' } },
              { say: { es: 'Pregunto si puedo cargar el móvil.', en: 'I ask if I can charge my phone.' }, then: { es: 'Earl te señala un enchufe detrás de la caja. «Veinte minutos y un café, ¿te parece?».', en: 'Earl points to an outlet behind the register. “Twenty minutes and a coffee, sound good?”' } },
              { say: { es: 'Le pregunto a un camionero.', en: 'I ask a truck driver.' }, then: { es: 'La camionera se ríe: «¿San Antonio? Sígueme, voy para allá».', en: 'The truck driver laughs: “San Antonio? Follow me, I’m headed there.”' } },
            ],
          },
          twist: { es: 'Empieza a soplar un viento muy fuerte y el cielo se pone naranja. Earl cierra la puerta: «Tormenta de polvo. Nadie sale hasta que pase».', en: 'A very strong wind starts blowing and the sky turns orange. Earl closes the door: “Dust storm. Nobody leaves until it passes.”' },
          questions: [
            { q: { es: '¿Cuánto tiempo tardas en llegar al supermercado, al trabajo o a clase?', en: 'How long does it take you to get to the supermarket, to work or to class?' }, help: { es: 'Tardo… minutos en… Voy en…', en: 'It takes me… minutes to get to… I go by…' }, follow: [{ es: '¿Te parece mucho?', en: 'Does it seem like a lot to you?' }, { es: '¿Qué haces durante el viaje?', en: 'What do you do during the trip?' }] },
            { q: { es: '¿Cuál fue tu viaje más largo en coche, autobús o tren?', en: 'What was your longest trip by car, bus or train?' }, help: { es: 'Mi viaje más largo fue de… a… Duró… horas.', en: 'My longest trip was from… to… It lasted… hours.' }, follow: [{ es: '¿Con quién viajaste?', en: 'Who did you travel with?' }, { es: '¿Paraste en algún lugar interesante?', en: 'Did you stop anywhere interesting?' }] },
            { q: { es: 'Earl trabaja en el mismo lugar desde hace treinta años. ¿Te gustaría eso?', en: 'Earl has worked in the same place for thirty years. Would you like that?' }, help: { es: 'Sí, me gustaría porque… / No, prefiero cambiar porque…', en: 'Yes, I’d like that because… / No, I prefer to change because…' }, follow: [{ es: '¿Cuántos trabajos tuviste?', en: 'How many jobs have you had?' }, { es: '¿Cuál fue el mejor?', en: 'Which one was the best?' }] },
            { q: { es: '¿Usas mapas de papel o solo el móvil?', en: 'Do you use paper maps or only your phone?' }, help: { es: 'Uso… porque… Nunca uso…', en: 'I use… because… I never use…' }, follow: [{ es: '¿Te perdiste alguna vez sin móvil?', en: 'Have you ever gotten lost without your phone?' }, { es: '¿Tienes buen sentido de la orientación?', en: 'Do you have a good sense of direction?' }] },
          ],
          words: [
            { es: 'recto', en: 'straight' }, { es: 'el molino de viento', en: 'the windmill' }, { es: 'el camionero, la camionera', en: 'the truck driver' },
            { es: 'cargar (el móvil)', en: 'to charge (your phone)' }, { es: 'el enchufe', en: 'the outlet' }, { es: 'la tormenta de polvo', en: 'the dust storm' },
          ],
        },
        A2: {
          scene: { es: 'Son las dos de la mañana. Llueve muchísimo y la carretera está cortada por una inundación. En la gasolinera hay quince personas atrapadas: camioneros, una familia con un bebé, dos estudiantes y una pareja que iba a su propia boda.', en: 'It’s two in the morning. It’s pouring and the highway is closed because of a flood. There are fifteen people stuck at the gas station: truckers, a family with a baby, two students and a couple on their way to their own wedding.' },
          opener: { es: 'En treinta años vi de todo aquí: un parto, una pelea, una propuesta de matrimonio… Las noches como esta, la gente se cuenta cosas que no le cuenta a nadie. ¿Tú alguna vez te quedaste atrapado en algún lugar?', en: 'In thirty years I’ve seen everything here: a birth, a fight, a marriage proposal… On nights like this, people tell each other things they don’t tell anyone. Have you ever been stuck somewhere?' },
          decide: {
            ask: { es: 'Earl tiene comida para todos solo hasta mañana. ¿Qué propones?', en: 'Earl only has food for everyone until tomorrow. What do you suggest?' },
            options: [
              { say: { es: 'Repartir la comida en partes iguales, primero para el bebé.', en: 'Share the food out equally, the baby first.' }, then: { es: 'Todos están de acuerdo. Un camionero pone sobre la mesa unas galletas que guardaba en el camión.', en: 'Everyone agrees. A trucker puts some cookies he had in his truck on the table.' } },
              { say: { es: 'Organizar una cena con lo que cada uno tiene en el coche.', en: 'Organize a dinner with what everyone has in their car.' }, then: { es: 'Aparecen tamales, fruta, pan dulce… y una tarta de boda.', en: 'Tamales, fruit, sweet bread show up… and a wedding cake.' } },
              { say: { es: 'Llamar a emergencias para pedir comida.', en: 'Call emergency services to ask for food.' }, then: { es: 'Contestan que tienen casos más urgentes, pero que intentarán llegar por la mañana.', en: 'They answer that they have more urgent cases, but they’ll try to get there in the morning.' } },
            ],
          },
          twist: { es: 'La pareja que iba a casarse decide hacerlo allí mismo, en la gasolinera. Uno de los camioneros dice que puede casarlos legalmente: es ministro religioso los fines de semana.', en: 'The couple who were going to get married decide to do it right there, at the gas station. One of the truckers says he can legally marry them: he’s a minister on weekends.' },
          questions: [
            { q: { es: '¿Te quedaste atrapado alguna vez en algún lugar por el tiempo, una huelga o un accidente? ¿Qué pasó?', en: 'Have you ever been stuck somewhere because of the weather, a strike or an accident? What happened?' }, help: { es: 'Sí, una vez en… no podíamos salir porque… Al final…', en: 'Yes, once in… we couldn’t leave because… In the end…' }, follow: [{ es: '¿Conociste a alguien interesante?', en: 'Did you meet anyone interesting?' }, { es: '¿Cómo pasaste el tiempo?', en: 'How did you pass the time?' }] },
            { q: { es: '¿Le contaste alguna vez algo personal a un desconocido? ¿Por qué crees que fue más fácil?', en: 'Have you ever told a stranger something personal? Why do you think it was easier?' }, help: { es: 'Sí, una vez en un… le conté a… Creo que fue más fácil porque…', en: 'Yes, once on a… I told… I think it was easier because…' }, follow: [{ es: '¿Lo volviste a ver?', en: 'Did you ever see them again?' }, { es: '¿A quién le cuentas tus secretos?', en: 'Who do you tell your secrets to?' }] },
            { q: { es: '¿Cuál fue la boda o la fiesta más original a la que fuiste?', en: 'What was the most original wedding or party you’ve been to?' }, help: { es: 'Fue en… Lo más original fue que…', en: 'It was in… The most original thing was that…' }, follow: [{ es: '¿Qué comieron?', en: 'What did you eat?' }, { es: '¿Cómo sería tu boda o tu fiesta ideal?', en: 'What would your ideal wedding or party be like?' }] },
            { q: { es: 'Compara cómo reacciona la gente en una crisis en tu país y lo que pasa en esta gasolinera.', en: 'Compare how people react in a crisis in your country with what happens at this gas station.' }, help: { es: 'En mi país la gente suele… En cambio aquí…', en: 'In my country people tend to… Here, on the other hand…' }, follow: [{ es: '¿Recuerdas una crisis donde la gente se ayudó?', en: 'Do you remember a crisis where people helped each other?' }, { es: '¿Y una donde no?', en: 'And one where they didn’t?' }] },
          ],
          words: [
            { es: 'la inundación', en: 'the flood' }, { es: 'cortado (una carretera)', en: 'closed (a road)' }, { es: 'atrapado', en: 'stuck, trapped' },
            { es: 'repartir', en: 'to share out, to hand out' }, { es: 'el parto', en: 'childbirth' }, { es: 'la propuesta de matrimonio', en: 'the marriage proposal' },
          ],
        },
        B1: {
          scene: { es: 'Una empresa quiere convertir la gasolinera de Earl en una estación de carga para coches eléctricos con cafetería moderna. Earl tiene sesenta y cuatro años. Su hijo trabaja en la industria del petróleo, como muchas familias de la zona.', en: 'A company wants to turn Earl’s gas station into a charging station for electric cars with a modern café. Earl is sixty-four. His son works in the oil industry, like many families in the area.' },
          opener: { es: 'Aquí el petróleo pagó escuelas, carreteras y la casa de mi hijo. Ahora todos hablan de coches eléctricos, pero el autobús más cercano pasa a cuarenta kilómetros. Sin coche, aquí no vives. ¿El cambio es igual de fácil para todos?', en: 'Around here oil paid for schools, roads and my son’s house. Now everyone talks about electric cars, but the nearest bus stops forty kilometers away. Without a car, you can’t live here. Is change equally easy for everyone?' },
          decide: {
            ask: { es: 'Earl tiene que decidir antes de fin de mes. Te pide tu opinión sincera. ¿Qué le dices?', en: 'Earl has to decide before the end of the month. He asks for your honest opinion. What do you tell him?' },
            options: [
              { say: { es: 'Que acepte y negocie quedarse como encargado del nuevo lugar.', en: 'To accept and negotiate staying on as manager of the new place.' }, then: { es: 'Earl sonríe: «¿Yo, vendiendo cafés con leche de avena?». Pero apunta la idea.', en: 'Earl smiles: “Me, selling oat milk lattes?” But he writes the idea down.' } },
              { say: { es: 'Que mantenga las dos cosas: gasolina y cargadores, durante una transición.', en: 'To keep both: gas and chargers, during a transition.' }, then: { es: 'La empresa dice que no le interesa. Un banco local, en cambio, quiere hablar con él.', en: 'The company says it’s not interested. A local bank, however, wants to talk to him.' } },
              { say: { es: 'Que no venda: es su vida y la comunidad lo necesita.', en: 'Not to sell: it’s his life and the community needs him.' }, then: { es: 'Su hijo lo llama: «Papá, el futuro va a llegar igual. Mejor que te pague a ti».', en: 'His son calls: “Dad, the future’s coming either way. Better it pays you.”' } },
            ],
          },
          twist: { es: 'Una de las camioneras habituales confiesa que su empresa ya le compró un camión eléctrico. Le encanta, pero tiene que planear cada viaje porque no hay cargadores en la ruta. «Aquí sería perfecto», dice.', en: 'One of the regular truck drivers confesses that her company already bought her an electric truck. She loves it, but she has to plan every trip because there are no chargers on the route. “This would be perfect,” she says.' },
          questions: [
            { q: { es: '¿Es justo pedir a todas las regiones el mismo ritmo de cambio hacia energías limpias?', en: 'Is it fair to ask every region to change to clean energy at the same pace?' }, help: { es: 'No me parece justo porque… / Creo que sí, ya que… Habría que tener en cuenta…', en: 'I don’t think it’s fair because… / I think so, since… You’d have to take into account…' }, follow: [{ es: '¿Qué región de tu país lo tendría más difícil?', en: 'Which region of your country would find it hardest?' }, { es: '¿Quién debería pagar la transición?', en: 'Who should pay for the transition?' }] },
            { q: { es: 'Si vivieras en un lugar sin transporte público, ¿cómo cambiaría tu vida diaria?', en: 'If you lived in a place without public transport, how would your daily life change?' }, help: { es: 'Si viviera allí, tendría que… y no podría…', en: 'If I lived there, I’d have to… and I couldn’t…' }, follow: [{ es: '¿Podrías vivir sin coche donde vives ahora?', en: 'Could you live without a car where you live now?' }, { es: '¿Qué transporte usarías?', en: 'What transport would you use?' }] },
            { q: { es: '¿Qué le dirías a una persona de sesenta y cuatro años a la que le piden reinventarse?', en: 'What would you say to a sixty-four-year-old who is being asked to reinvent themselves?' }, help: { es: 'Le diría que… porque a esa edad… pero también…', en: 'I’d tell them that… because at that age… but also…' }, follow: [{ es: '¿Conoces a alguien que cambió de trabajo después de los cincuenta?', en: 'Do you know anyone who changed jobs after fifty?' }, { es: '¿Te imaginas cambiando de profesión?', en: 'Can you imagine yourself changing professions?' }] },
            { q: { es: '¿Los cambios grandes los deberían decidir los gobiernos, las empresas o las comunidades?', en: 'Should big changes be decided by governments, companies or communities?' }, help: { es: 'Para mí, deberían decidirlos… porque… aunque…', en: 'For me, they should be decided by… because… although…' }, follow: [{ es: '¿Participas en decisiones de tu barrio?', en: 'Do you take part in decisions in your neighborhood?' }, { es: '¿Confías más en una empresa o en un gobierno?', en: 'Do you trust a company or a government more?' }] },
          ],
          words: [
            { es: 'la estación de carga', en: 'the charging station' }, { es: 'el petróleo', en: 'oil, petroleum' }, { es: 'el encargado', en: 'the manager' },
            { es: 'la transición', en: 'the transition' }, { es: 'reinventarse', en: 'to reinvent oneself' }, { es: 'el ritmo', en: 'the pace' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the shopping street
    {
      id: 'congress',
      name: { es: 'La calle comercial', en: 'The shopping street' },
      who: { name: 'Diego', role: { es: 'vendedor de botas', en: 'boot seller' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con tiendas. Hay botas, sombreros y murales. Diego vende botas. Su amiga Amber está con él.', en: 'It is a street with shops. There are boots, hats and murals. Diego sells boots. His friend Amber is with him.' },
          opener: { es: '¡Hola! Soy Diego. Vendo botas de vaquero. ¿Qué número usas?', en: 'Hi! I am Diego. I sell cowboy boots. What size do you wear?' },
          decide: {
            ask: { es: 'Hay botas marrones y botas rojas. ¿Cuáles quieres?', en: 'There are brown boots and red boots. Which ones do you want?' },
            options: [
              { say: { es: 'Las botas marrones.', en: 'The brown boots.' }, then: { es: 'Diego dice: «¡Clásicas! Muy bonitas».', en: 'Diego says: “Classic! Very pretty.”' } },
              { say: { es: 'Las botas rojas.', en: 'The red boots.' }, then: { es: 'Amber dice: «¡Wow! ¡Son fantásticas!».', en: 'Amber says: “Wow! They are fantastic!”' } },
              { say: { es: 'Un sombrero, no botas.', en: 'A hat, not boots.' }, then: { es: 'Diego te da un sombrero grande. ¡Es enorme!', en: 'Diego gives you a big hat. It is huge!' } },
            ],
          },
          twist: { es: 'Las botas son muy caras: ¡trescientos dólares! ¿Qué dices?', en: 'The boots are very expensive: three hundred dollars! What do you say?' },
          questions: [
            { q: { es: '¿Qué número de zapato usas?', en: 'What shoe size do you wear?' }, help: { es: 'Uso el número…', en: 'I wear size…' }, follow: [{ es: '¿Tienes botas?', en: 'Do you have boots?' }, { es: '¿Cuántos pares de zapatos tienes?', en: 'How many pairs of shoes do you have?' }] },
            { q: { es: '¿Llevas sombrero o gorra?', en: 'Do you wear a hat or a cap?' }, help: { es: 'Sí, llevo… / No, no llevo.', en: 'Yes, I wear… / No, I don’t.' }, follow: [{ es: '¿De qué color?', en: 'What color?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Vives en una ciudad grande o pequeña?', en: 'Do you live in a big or small city?' }, help: { es: 'Vivo en una ciudad grande. / Vivo en un pueblo.', en: 'I live in a big city. / I live in a town.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Hay muchas tiendas?', en: 'Are there many shops?' }] },
            { q: { es: '¿Compras ropa cara o barata?', en: 'Do you buy expensive or cheap clothes?' }, help: { es: 'Compro ropa barata. / A veces compro ropa cara.', en: 'I buy cheap clothes. / Sometimes I buy expensive clothes.' }, follow: [{ es: '¿Dónde compras?', en: 'Where do you buy?' }, { es: '¿Qué compras más?', en: 'What do you buy most?' }] },
          ],
          words: [
            { es: 'las botas', en: 'the boots' }, { es: 'el sombrero', en: 'the hat' }, { es: 'el vaquero', en: 'the cowboy' },
            { es: 'el número (de zapato)', en: 'the (shoe) size' }, { es: 'caro', en: 'expensive' }, { es: 'barato', en: 'cheap' },
          ],
        },
        A1: {
          scene: { es: 'South Congress, una calle famosa de Austin con tiendas de botas, ropa vintage, food trucks y murales. Desde aquí se ve el Capitolio de Texas. Diego trabaja en una tienda de botas; su amiga Amber, de Houston, lo visita.', en: 'South Congress, a famous street in Austin with boot shops, vintage clothes, food trucks and murals. From here you can see the Texas Capitol. Diego works in a boot shop; his friend Amber, from Houston, is visiting him.' },
          opener: { es: 'Amber dice que Houston es mejor porque es más grande. Yo digo que Austin es mejor porque es más tranquila. Siempre discutimos lo mismo. ¿Tú qué prefieres: una ciudad grande o una más pequeña?', en: 'Amber says Houston is better because it’s bigger. I say Austin is better because it’s calmer. We always argue about the same thing. What do you prefer: a big city or a smaller one?' },
          decide: {
            ask: { es: 'Diego y Amber te piden que decidas dónde comen hoy. ¿Qué eliges?', en: 'Diego and Amber ask you to decide where they eat today. What do you choose?' },
            options: [
              { say: { es: 'Un food truck de tacos en la calle.', en: 'A taco food truck on the street.' }, then: { es: 'Diego levanta los brazos: «¡Gané!». Amber protesta, pero come tres tacos.', en: 'Diego raises his arms: “I win!” Amber complains, but eats three tacos.' } },
              { say: { es: 'Un restaurante elegante con terraza.', en: 'A fancy restaurant with a terrace.' }, then: { es: 'Amber sonríe: «Esto parece Houston». Diego mira el precio y traga saliva.', en: 'Amber smiles: “This feels like Houston.” Diego looks at the price and gulps.' } },
              { say: { es: 'Un picnic delante del Capitolio.', en: 'A picnic in front of the Capitol.' }, then: { es: 'Los tres comen en la hierba. Por fin, nadie discute.', en: 'The three of you eat on the grass. Finally, nobody argues.' } },
            ],
          },
          twist: { es: 'Un señor mayor que escucha la discusión dice: «Yo nací aquí cuando Austin era un pueblo. Los dos están equivocados». Se sienta con ustedes.', en: 'An older man listening to the argument says: “I was born here when Austin was a small town. You’re both wrong.” He sits down with you.' },
          questions: [
            { q: { es: '¿Prefieres una ciudad grande o una más pequeña? ¿Por qué?', en: 'Do you prefer a big city or a smaller one? Why?' }, help: { es: 'Prefiero… porque hay más… y menos…', en: 'I prefer… because there’s more… and less…' }, follow: [{ es: '¿Cuál es la ciudad más grande que visitaste?', en: 'What’s the biggest city you’ve visited?' }, { es: '¿Y la más pequeña?', en: 'And the smallest?' }] },
            { q: { es: '¿Discutes a menudo con un amigo sobre el mismo tema? ¿Cuál?', en: 'Do you often argue with a friend about the same topic? Which one?' }, help: { es: 'Sí, con mi amigo… siempre discutimos sobre… / No, casi nunca.', en: 'Yes, with my friend… we always argue about… / No, almost never.' }, follow: [{ es: '¿Quién gana normalmente?', en: 'Who usually wins?' }, { es: '¿Es una discusión divertida o seria?', en: 'Is it a fun or serious argument?' }] },
            { q: { es: '¿Qué hay de especial en tu calle favorita de tu ciudad?', en: 'What’s special about your favorite street in your city?' }, help: { es: 'Mi calle favorita es… porque tiene…', en: 'My favorite street is… because it has…' }, follow: [{ es: '¿Qué haces allí?', en: 'What do you do there?' }, { es: '¿Es cara?', en: 'Is it expensive?' }] },
            { q: { es: '¿Qué comprarías como recuerdo de Texas?', en: 'What would you buy as a souvenir from Texas?' }, help: { es: 'Compraría… para… porque…', en: 'I’d buy… for… because…' }, follow: [{ es: '¿Compras recuerdos cuando viajas?', en: 'Do you buy souvenirs when you travel?' }, { es: '¿Cuál es tu mejor recuerdo de un viaje?', en: 'What’s your best souvenir from a trip?' }] },
          ],
          words: [
            { es: 'el Capitolio', en: 'the Capitol' }, { es: 'discutir', en: 'to argue' }, { es: 'tranquilo', en: 'calm, quiet' },
            { es: 'la terraza', en: 'the terrace, the patio' }, { es: 'tragar saliva', en: 'to gulp' }, { es: 'equivocado', en: 'wrong' },
          ],
        },
        A2: {
          scene: { es: 'Diego le enseña a Amber fotos de South Congress de hace veinte años: casas bajas, tiendas pequeñas, motel con letrero de neón. Hoy hay hoteles de diseño y pantalones de doscientos dólares. Amber dice que eso es progreso; Diego no está tan seguro.', en: 'Diego shows Amber photos of South Congress from twenty years ago: low houses, small shops, a motel with a neon sign. Today there are design hotels and two-hundred-dollar pants. Amber says that’s progress; Diego isn’t so sure.' },
          opener: { es: 'Cuando era niño, mi abuelo tenía una tienda de discos aquí. La cerró cuando subieron el alquiler. Ahora en ese local venden velas de cuarenta dólares. ¿Tu barrio cambió mucho desde que eras pequeño?', en: 'When I was a kid, my grandfather had a record store here. He closed it when the rent went up. Now that space sells forty-dollar candles. Has your neighborhood changed a lot since you were little?' },
          decide: {
            ask: { es: 'Amber dice: «Pero tú también te beneficias: vendes más botas que nunca». Diego se queda callado. ¿Qué dices tú?', en: 'Amber says: “But you benefit too: you sell more boots than ever.” Diego goes quiet. What do you say?' },
            options: [
              { say: { es: 'Que Amber tiene razón: el cambio también trae trabajo.', en: 'That Amber is right: change also brings jobs.' }, then: { es: 'Diego asiente despacio: «Sí… pero mi abuelo no puede ni tomar un café aquí».', en: 'Diego nods slowly: “Yes… but my grandfather can’t even afford a coffee here.”' } },
              { say: { es: 'Que se puede ganar dinero y echar de menos el pasado al mismo tiempo.', en: 'That you can make money and miss the past at the same time.' }, then: { es: 'Los dos se ríen. «Por fin alguien neutral», dice Amber.', en: 'They both laugh. “Finally someone neutral,” says Amber.' } },
              { say: { es: 'Que la culpa no es de la gente que llega, sino de los precios.', en: 'That it’s not the newcomers’ fault, but the prices’.' }, then: { es: 'Amber, que se mudó a Houston desde un pueblo, dice: «Gracias. Yo también fui la nueva».', en: 'Amber, who moved to Houston from a small town, says: “Thanks. I was the new one too.”' } },
            ],
          },
          twist: { es: 'Pasan delante del antiguo local del abuelo. En el escaparate de la tienda de velas hay una foto enmarcada de la tienda de discos y un cartel: «Aquí empezó la música de esta calle».', en: 'They walk past the grandfather’s old shop. In the candle shop’s window there’s a framed photo of the record store and a sign: “This is where the music of this street began.”' },
          questions: [
            { q: { es: '¿Tu barrio cambió mucho desde que eras pequeño? ¿Qué echas de menos?', en: 'Has your neighborhood changed a lot since you were little? What do you miss?' }, help: { es: 'Sí, antes había… y ahora hay… Echo de menos…', en: 'Yes, there used to be… and now there’s… I miss…' }, follow: [{ es: '¿Qué cambio te parece positivo?', en: 'Which change seems positive to you?' }, { es: '¿Quién vive allí ahora?', en: 'Who lives there now?' }] },
            { q: { es: '¿Tu familia tuvo alguna vez un negocio? ¿Qué pasó con él?', en: 'Did your family ever have a business? What happened to it?' }, help: { es: 'Sí, mi… tenía un… Lo cerró / lo vendió porque…', en: 'Yes, my… had a… They closed it / sold it because…' }, follow: [{ es: '¿Trabajaste allí?', en: 'Did you work there?' }, { es: '¿Te gustaría tener un negocio?', en: 'Would you like to have a business?' }] },
            { q: { es: 'Compara una ciudad que crece rápido y una que casi no cambia.', en: 'Compare a city that grows fast and one that hardly changes.' }, help: { es: 'Una ciudad que crece es más… pero… En cambio, una que no cambia…', en: 'A growing city is more… but… On the other hand, one that doesn’t change…' }, follow: [{ es: '¿Dónde hay más oportunidades?', en: 'Where are there more opportunities?' }, { es: '¿Dónde se vive mejor?', en: 'Where is the quality of life better?' }] },
            { q: { es: '¿Fuiste alguna vez «el nuevo» o «la nueva» en un lugar? ¿Cómo te recibieron?', en: 'Have you ever been “the new one” somewhere? How were you welcomed?' }, help: { es: 'Sí, cuando llegué a… la gente… y yo me sentí…', en: 'Yes, when I arrived in… people… and I felt…' }, follow: [{ es: '¿Quién te ayudó a adaptarte?', en: 'Who helped you adapt?' }, { es: '¿Cómo recibes tú a la gente nueva?', en: 'How do you welcome new people?' }] },
          ],
          words: [
            { es: 'la tienda de discos', en: 'the record store' }, { es: 'el alquiler', en: 'the rent' }, { es: 'el escaparate', en: 'the shop window' },
            { es: 'echar de menos', en: 'to miss' }, { es: 'mudarse', en: 'to move (home)' }, { es: 'enmarcado', en: 'framed' },
          ],
        },
        B1: {
          scene: { es: 'Una gran empresa tecnológica anuncia que trasladará su sede a Austin con miles de empleos. Amber, que trabaja en tecnología, está entusiasmada y quiere mudarse. Diego teme que los precios suban aún más y tenga que irse de la ciudad donde nació.', en: 'A big tech company announces it will move its headquarters to Austin, with thousands of jobs. Amber, who works in tech, is thrilled and wants to move. Diego fears prices will rise even more and he’ll have to leave the city where he was born.' },
          opener: { es: 'Amber y yo llevamos quince años siendo amigos y es la primera vez que una discusión sobre ciudades se vuelve personal. Ella ve oportunidades; yo veo a mi familia mudándose a cuarenta kilómetros. ¿Las ciudades que crecen deberían poner límites?', en: 'Amber and I have been friends for fifteen years and this is the first time an argument about cities has gotten personal. She sees opportunities; I see my family moving forty kilometers away. Should growing cities set limits?' },
          decide: {
            ask: { es: 'Amber te pregunta delante de Diego: «Si te ofrecieran un buen trabajo aquí, ¿vendrías aunque eso suba los alquileres?». ¿Qué respondes?', en: 'Amber asks you in front of Diego: “If you were offered a good job here, would you come even if it pushed rents up?” What do you answer?' },
            options: [
              { say: { es: 'Sí: nadie debería renunciar a una oportunidad por culpa de algo que no controla.', en: 'Yes: nobody should give up an opportunity because of something they can’t control.' }, then: { es: 'Amber te choca la mano. Diego mira hacia otro lado.', en: 'Amber high-fives you. Diego looks away.' } },
              { say: { es: 'Sí, pero me implicaría en el barrio y apoyaría las tiendas locales.', en: 'Yes, but I’d get involved in the neighborhood and support local shops.' }, then: { es: 'Diego suspira: «Eso dicen todos al llegar… algunos lo cumplen».', en: 'Diego sighs: “Everyone says that when they arrive… some actually do it.”' } },
              { say: { es: 'No lo sé: depende de si la ciudad protege a quienes ya viven aquí.', en: 'I don’t know: it depends on whether the city protects the people who already live here.' }, then: { es: 'Los dos se quedan pensando. Por primera vez, la conversación baja el tono.', en: 'They both think about it. For the first time, the conversation calms down.' } },
            ],
          },
          twist: { es: 'Amber recibe un mensaje: la empresa le ofrece el puesto, pero en el mismo edificio donde estaba el apartamento de la abuela de Diego antes de que lo demolieran. Ella no sabe si contárselo.', en: 'Amber gets a message: the company is offering her the job, but in the same building where Diego’s grandmother’s apartment was before it was torn down. She doesn’t know whether to tell him.' },
          questions: [
            { q: { es: '¿Deberían las ciudades limitar su crecimiento? ¿Cómo se haría de forma justa?', en: 'Should cities limit their growth? How could that be done fairly?' }, help: { es: 'Creo que sí / no, porque… Una forma justa sería…', en: 'I think so / not, because… A fair way would be…' }, follow: [{ es: '¿Qué ciudad conoces que creció demasiado?', en: 'What city do you know that grew too much?' }, { es: '¿Qué pasaría si se limitara?', en: 'What would happen if it were limited?' }] },
            { q: { es: 'Si te ofrecieran el trabajo de tus sueños en una ciudad que no puede absorber más gente, ¿lo aceptarías?', en: 'If you were offered your dream job in a city that can’t absorb more people, would you take it?' }, help: { es: 'Probablemente lo aceptaría / no lo aceptaría porque… aunque…', en: 'I’d probably take it / not take it because… although…' }, follow: [{ es: '¿Te sentirías responsable de algo?', en: 'Would you feel responsible for anything?' }, { es: '¿Qué harías para integrarte?', en: 'What would you do to fit in?' }] },
            { q: { es: '¿Es posible ser amigos de verdad con alguien que piensa muy diferente sobre un tema importante?', en: 'Is it possible to be real friends with someone who thinks very differently about an important topic?' }, help: { es: 'Creo que sí, siempre que… / Es difícil cuando…', en: 'I think so, as long as… / It’s hard when…' }, follow: [{ es: '¿Tienes un amigo así?', en: 'Do you have a friend like that?' }, { es: '¿De qué temas evitas hablar con él o con ella?', en: 'Which topics do you avoid with them?' }] },
            { q: { es: '¿Debería Amber contarle a Diego lo del edificio? ¿Qué harías tú en su lugar?', en: 'Should Amber tell Diego about the building? What would you do in her place?' }, help: { es: 'Si yo fuera Amber, se lo contaría / no se lo contaría porque…', en: 'If I were Amber, I’d tell him / I wouldn’t tell him because…' }, follow: [{ es: '¿Ocultarlo sería mentir?', en: 'Would hiding it be lying?' }, { es: '¿Cómo se lo dirías?', en: 'How would you tell him?' }] },
          ],
          words: [
            { es: 'la sede', en: 'the headquarters' }, { es: 'trasladar', en: 'to move, to relocate' }, { es: 'entusiasmado', en: 'thrilled, excited' },
            { es: 'renunciar a', en: 'to give up' }, { es: 'implicarse', en: 'to get involved' }, { es: 'absorber', en: 'to absorb' },
          ],
        },
      },
    },
  ],
};
