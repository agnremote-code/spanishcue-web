// Córdoba · the university city, its grills, parks and hills. Five places,
// four levels each (A0, A1, A2, B1). Every level is written on its own: same
// place and people, different situations, decisions and questions.
export default {
  id: 'cordoba',
  spots: [
    // ------------------------------------------------------------ the university
    {
      id: 'universidad',
      name: { es: 'La universidad', en: 'The university' },
      who: { name: 'Agustina', role: { es: 'estudiante de medicina', en: 'medical student' } },
      levels: {
        A0: {
          scene: { es: 'Es una universidad muy vieja. Hay un patio con árboles. Agustina es estudiante. Tiene muchos libros.', en: 'It is a very old university. There is a courtyard with trees. Agustina is a student. She has lots of books.' },
          opener: { es: '¡Hola! Soy Agustina. Estudio medicina. ¿Y tú?', en: 'Hi! I am Agustina. I study medicine. And you?' },
          decide: {
            ask: { es: 'Agustina te pregunta: ¿qué estudias o qué haces?', en: 'Agustina asks you: what do you study or what do you do?' },
            options: [
              { say: { es: 'Estudio español.', en: 'I study Spanish.' }, then: { es: 'Agustina dice: «¡Muy bien! Hablas bien».', en: 'Agustina says: “Very good! You speak well.”' } },
              { say: { es: 'Trabajo en una oficina.', en: 'I work in an office.' }, then: { es: 'Agustina dice: «¿Te gusta tu trabajo?»', en: 'Agustina says: “Do you like your job?”' } },
              { say: { es: 'Soy profesor.', en: 'I am a teacher.' }, then: { es: 'Agustina dice: «¡Qué bueno! ¿Qué enseñas?»', en: 'Agustina says: “Great! What do you teach?”' } },
            ],
          },
          twist: { es: 'Los libros de Agustina se caen al suelo. ¡Son muchos! ¿Qué haces?', en: 'Agustina’s books fall on the floor. There are lots! What do you do?' },
          questions: [
            { q: { es: '¿Estudias o trabajas?', en: 'Do you study or work?' }, help: { es: 'Estudio… / Trabajo en…', en: 'I study… / I work in…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Te gusta leer?', en: 'Do you like reading?' }, help: { es: 'Sí, me gusta. / No mucho.', en: 'Yes, I like it. / Not much.' }, follow: [{ es: '¿Qué lees?', en: 'What do you read?' }, { es: '¿Cuándo lees?', en: 'When do you read?' }] },
            { q: { es: '¿Hay una universidad en tu ciudad?', en: 'Is there a university in your city?' }, help: { es: 'Sí, hay una. / Sí, hay muchas. / No.', en: 'Yes, there is one. / Yes, there are many. / No.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Es vieja?', en: 'Is it old?' }] },
            { q: { es: '¿Tienes muchos libros?', en: 'Do you have many books?' }, help: { es: 'Sí, muchos. / No, pocos.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿Dónde están?', en: 'Where are they?' }, { es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }] },
          ],
          words: [{ es: 'la universidad', en: 'the university' }, { es: 'estudiar', en: 'to study' }, { es: 'el libro', en: 'the book' }, { es: 'el patio', en: 'the courtyard' }, { es: 'el suelo', en: 'the floor' }],
        },
        A1: {
          scene: { es: 'La Universidad de Córdoba es una de las más antiguas de América: tiene más de cuatrocientos años. Por eso Córdoba se llama «La Docta». Agustina vive en una residencia con estudiantes de todo el país.', en: 'The University of Córdoba is one of the oldest in the Americas: it is more than four hundred years old. That’s why Córdoba is called “La Docta” (the learned one). Agustina lives in a residence with students from all over the country.' },
          opener: { es: 'Llegué de un pueblo de Catamarca hace dos años. Aquí la universidad pública es gratis, ¿sabías? Por eso viene tanta gente de otras provincias y de otros países.', en: 'I came from a town in Catamarca two years ago. The public university here is free, did you know? That’s why so many people come from other provinces and other countries.' },
          decide: {
            ask: { es: 'Agustina tiene un examen mañana, pero sus compañeros la invitan a una fiesta. ¿Qué le dices?', en: 'Agustina has an exam tomorrow, but her classmates invite her to a party. What do you tell her?' },
            options: [
              { say: { es: 'Que se quede a estudiar.', en: 'That she should stay and study.' }, then: { es: 'Agustina estudia hasta las dos. Al día siguiente, saca un nueve.', en: 'Agustina studies until two. The next day, she gets a nine.' } },
              { say: { es: 'Que vaya una hora y vuelva.', en: 'That she should go for an hour and come back.' }, then: { es: 'Una hora se convierte en cuatro. Llega al examen con mucho sueño.', en: 'One hour turns into four. She arrives at the exam very sleepy.' } },
              { say: { es: 'Que invite a los compañeros a estudiar juntos.', en: 'That she should invite her classmates to study together.' }, then: { es: 'Vienen tres. Estudian, comen pizza y al final todos aprueban.', en: 'Three come. They study, eat pizza and in the end they all pass.' } },
            ],
          },
          twist: { es: 'Una compañera de Brasil le pregunta a Agustina por qué en Córdoba la gente habla «cantando». Agustina no se había dado cuenta de que tiene acento.', en: 'A classmate from Brazil asks Agustina why people in Córdoba speak in a “sing-song” way. Agustina hadn’t realised she has an accent.' },
          questions: [
            { q: { es: '¿La universidad es gratis en tu país?', en: 'Is university free in your country?' }, help: { es: 'Sí, la pública es gratis. / No, es muy cara.', en: 'Yes, the public one is free. / No, it’s very expensive.' }, follow: [{ es: '¿Cuánto cuesta?', en: 'How much does it cost?' }, { es: '¿Qué te parece?', en: 'What do you think about it?' }] },
            { q: { es: '¿Cómo estudias para un examen?', en: 'How do you study for an exam?' }, help: { es: 'Estudio solo / en grupo / la noche anterior…', en: 'I study alone / in a group / the night before…' }, follow: [{ es: '¿Te pones nervioso?', en: 'Do you get nervous?' }, { es: '¿Cuál fue tu examen más difícil?', en: 'What was your hardest exam?' }] },
            { q: { es: '¿Viviste alguna vez con otros estudiantes?', en: 'Have you ever lived with other students?' }, help: { es: 'Sí, estuve en una residencia con… / No, siempre con mi familia.', en: 'Yes, I lived with… / No, always with my family.' }, follow: [{ es: '¿Era divertido?', en: 'Was it fun?' }, { es: '¿Quién limpiaba?', en: 'Who cleaned?' }] },
            { q: { es: '¿Conoces palabras que solo se dicen en una región?', en: 'Do you know words only used in one region?' }, help: { es: 'Sí, en… se dice… / No conozco.', en: 'Yes, in… they say… / I don’t know any.' }, follow: [{ es: '¿Qué significa?', en: 'What does it mean?' }, { es: '¿La usas?', en: 'Do you use it?' }] },
          ],
          words: [{ es: 'antiguo', en: 'ancient, old' }, { es: 'la residencia', en: 'the residence' }, { es: 'gratis', en: 'free' }, { es: 'aprobar', en: 'to pass (an exam)' }, { es: 'la provincia', en: 'the province' }],
        },
        A2: {
          scene: { es: 'Agustina es la primera persona de su familia que va a la universidad. Su papá es camionero y su mamá limpia casas. Cada mes le mandan una parte de su sueldo para que pueda estudiar. Hoy recibió una oferta de trabajo que le pagaría bien, pero tendría que dejar la carrera.', en: 'Agustina is the first person in her family to go to university. Her dad is a lorry driver and her mum cleans houses. Every month they send her part of their wages so she can study. Today she got a job offer that would pay well, but she’d have to drop out.' },
          opener: { es: 'Me faltan cuatro años para recibirme. Si acepto este trabajo, mi familia ya no tendría que mandarme plata, y hasta podría ayudarlos. Pero mi papá me dijo una vez: «Yo manejo para que tú no tengas que manejar». ¿Qué harías tú?', en: 'I have four years left to graduate. If I take this job, my family wouldn’t have to send me money any more, and I could even help them. But my dad once told me: “I drive so you won’t have to.” What would you do?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Agustina?', en: 'What do you advise Agustina?' },
            options: [
              { say: { es: 'Que siga estudiando: es el sueño de toda la familia.', en: 'Keep studying: it’s the whole family’s dream.' }, then: { es: 'Agustina llama a su papá. Él solo dice: «Ni lo pienses». Ella llora, pero sonríe.', en: 'Agustina calls her dad. He just says: “Don’t even think about it.” She cries, but smiles.' } },
              { say: { es: 'Que busque una beca y un trabajo de pocas horas.', en: 'Look for a scholarship and a part-time job.' }, then: { es: 'La universidad tiene becas que ella no conocía. Consigue una y trabaja los sábados.', en: 'The university has scholarships she didn’t know about. She gets one and works on Saturdays.' } },
              { say: { es: 'Que acepte el trabajo y estudie más tarde.', en: 'Take the job and study later.' }, then: { es: 'Agustina duda: «¿Y si después ya no vuelvo?»', en: 'Agustina hesitates: “And what if I never go back?”' } },
            ],
          },
          twist: { es: 'Su mejor amiga, que dejó la carrera hace dos años, le cuenta que gana más que cualquier médico joven.', en: 'Her best friend, who dropped out two years ago, tells her she earns more than any young doctor.' },
          questions: [
            { q: { es: '¿Alguien de tu familia hizo un sacrificio por ti?', en: 'Did someone in your family make a sacrifice for you?' }, help: { es: 'Sí, mi… trabajaba… para que yo…', en: 'Yes, my… worked… so that I…' }, follow: [{ es: '¿Se lo agradeciste?', en: 'Did you thank them?' }, { es: '¿Cómo te sentías?', en: 'How did you feel?' }] },
            { q: { es: '¿Trabajabas cuando estudiabas?', en: 'Did you work when you were studying?' }, help: { es: 'Sí, trabajaba en… / No, solo estudiaba.', en: 'Yes, I worked at… / No, I only studied.' }, follow: [{ es: '¿Cuántas horas?', en: 'How many hours?' }, { es: '¿Era difícil?', en: 'Was it hard?' }] },
            { q: { es: '¿Qué es más importante: un título o la experiencia?', en: 'What is more important: a degree or experience?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Depende de la profesión?', en: 'Does it depend on the profession?' }, { es: '¿Qué piensan en tu país?', en: 'What do people think in your country?' }] },
            { q: { es: '¿Dejaste alguna vez algo a la mitad?', en: 'Have you ever left something half-finished?' }, help: { es: 'Sí, dejé… porque… / No, siempre termino.', en: 'Yes, I left… because… / No, I always finish.' }, follow: [{ es: '¿Te arrepientes?', en: 'Do you regret it?' }, { es: '¿Lo retomarías?', en: 'Would you take it up again?' }] },
          ],
          words: [{ es: 'recibirse', en: 'to graduate (Argentina)' }, { es: 'el camionero', en: 'the lorry driver' }, { es: 'la carrera', en: 'the degree course' }, { es: 'la beca', en: 'the scholarship' }, { es: 'arrepentirse', en: 'to regret' }],
        },
        B1: {
          scene: { es: 'El gobierno propone cobrar la universidad pública a los estudiantes extranjeros. Dicen que el país no puede pagar la educación de personas que después se van. En la facultad de Agustina hay estudiantes de Perú, Bolivia, Brasil y Colombia, y el debate divide a todos.', en: 'The government proposes charging foreign students for public university. They say the country can’t pay for the education of people who later leave. In Agustina’s faculty there are students from Peru, Bolivia, Brazil and Colombia, and the debate divides everyone.' },
          opener: { es: 'Mi compañero de laboratorio es boliviano. Es el mejor de la clase y quiere quedarse a trabajar en un hospital del interior, donde faltan médicos. Si le cobran, se tiene que volver. Pero también entiendo que los hospitales no tienen presupuesto. No es una pregunta fácil, ¿no?', en: 'My lab partner is Bolivian. He’s the best in the class and wants to stay and work in a hospital in the provinces, where doctors are lacking. If they charge him, he has to go back. But I also understand that hospitals don’t have a budget. It’s not an easy question, is it?' },
          decide: {
            ask: { es: 'Hay una asamblea de estudiantes. ¿Qué posición defenderías?', en: 'There is a student assembly. What position would you defend?' },
            options: [
              { say: { es: 'Que sea gratis para quien se comprometa a trabajar unos años en el país.', en: 'Free for those who commit to working some years in the country.' }, then: { es: 'La idea gusta a muchos. Otros dicen que es obligar a la gente a quedarse.', en: 'Many like the idea. Others say it forces people to stay.' } },
              { say: { es: 'Que siga siendo gratis para todos: la educación es un derecho.', en: 'Keep it free for everyone: education is a right.' }, then: { es: 'Recibe un gran aplauso. Un profesor pregunta, en voz baja, quién paga los sueldos.', en: 'It gets a big round of applause. A professor quietly asks who pays the salaries.' } },
              { say: { es: 'Que paguen solo los extranjeros que no viven en el país.', en: 'Only foreigners who don’t live in the country should pay.' }, then: { es: 'Se abre otro debate: ¿cómo se demuestra que alguien «vive» aquí?', en: 'Another debate opens: how do you prove someone “lives” here?' } },
            ],
          },
          twist: { es: 'Un estudiante argentino confiesa que piensa irse a trabajar a España apenas se reciba. Se hace un silencio incómodo.', en: 'An Argentine student confesses he plans to go and work in Spain as soon as he graduates. There’s an awkward silence.' },
          questions: [
            { q: { es: '¿La educación universitaria debería ser gratuita?', en: 'Should university education be free?' }, help: { es: 'Creo que debería ser gratuita porque… / No necesariamente, ya que…', en: 'I think it should be free because… / Not necessarily, since…' }, follow: [{ es: '¿Para todos?', en: 'For everyone?' }, { es: '¿Quién la pagaría?', en: 'Who would pay for it?' }] },
            { q: { es: '¿Es justo pedirle a alguien que se quede en el país que pagó su educación?', en: 'Is it fair to ask someone to stay in the country that paid for their education?' }, help: { es: 'Me parece justo si… / Me parece injusto porque…', en: 'I think it’s fair if… / I think it’s unfair because…' }, follow: [{ es: '¿Y si no hay trabajo?', en: 'And if there’s no work?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Qué pasa en un país cuando muchos profesionales jóvenes se van?', en: 'What happens in a country when many young professionals leave?' }, help: { es: 'Se pierde… / A la larga…', en: '… is lost / In the long run…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Qué se podría hacer?', en: 'What could be done?' }] },
            { q: { es: '¿Qué le dirías al estudiante que se quiere ir a España?', en: 'What would you say to the student who wants to go to Spain?' }, help: { es: 'Le diría que… / Lo entiendo, pero…', en: 'I would tell him… / I understand, but…' }, follow: [{ es: '¿Tiene alguna obligación?', en: 'Does he have any obligation?' }, { es: '¿Tú te irías?', en: 'Would you go?' }] },
          ],
          words: [{ es: 'la facultad', en: 'the faculty' }, { es: 'el presupuesto', en: 'the budget' }, { es: 'comprometerse', en: 'to commit' }, { es: 'el derecho', en: 'the right' }, { es: 'apenas', en: 'as soon as' }],
        },
      },
    },
    // ------------------------------------------------------------ the grill
    {
      id: 'parrilla',
      name: { es: 'La parrilla', en: 'The steakhouse' },
      who: { name: 'Don Héctor', role: { es: 'parrillero', en: 'grill master' } },
      levels: {
        A0: {
          scene: { es: 'Es un restaurante con una parrilla grande. Hay carne y humo. Don Héctor cocina la carne.', en: 'It is a restaurant with a big grill. There is meat and smoke. Don Héctor cooks the meat.' },
          opener: { es: '¡Buenas! Soy Héctor. ¿Tienes hambre?', en: 'Hello! I am Héctor. Are you hungry?' },
          decide: {
            ask: { es: 'Hay carne, pollo y verduras. ¿Qué comes?', en: 'There is meat, chicken and vegetables. What do you eat?' },
            options: [
              { say: { es: 'Carne, por favor.', en: 'Meat, please.' }, then: { es: 'Héctor dice: «¿Bien cocida o jugosa?»', en: 'Héctor says: “Well done or rare?”' } },
              { say: { es: 'Pollo.', en: 'Chicken.' }, then: { es: 'Héctor dice: «Muy bien. Con papas fritas».', en: 'Héctor says: “Very good. With chips.”' } },
              { say: { es: 'Verduras. No como carne.', en: 'Vegetables. I don’t eat meat.' }, then: { es: 'Héctor dice: «¡No hay problema! Pimientos y berenjenas».', en: 'Héctor says: “No problem! Peppers and aubergines.”' } },
            ],
          },
          twist: { es: 'Hay mucho humo. ¡Tus ojos lloran! Héctor ríe. ¿Qué dices?', en: 'There is a lot of smoke. Your eyes are watering! Héctor laughs. What do you say?' },
          questions: [
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí, como carne. / No, soy vegetariano.', en: 'Yes, I eat meat. / No, I am vegetarian.' }, follow: [{ es: '¿Qué carne te gusta?', en: 'What meat do you like?' }, { es: '¿Cuántas veces a la semana?', en: 'How many times a week?' }] },
            { q: { es: '¿Cocinas a la parrilla?', en: 'Do you cook on a grill?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Te gustan las verduras?', en: 'Do you like vegetables?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Cuál te gusta más?', en: 'Which do you like most?' }, { es: '¿Cuál no te gusta?', en: 'Which don’t you like?' }] },
            { q: { es: '¿Comes con tu familia los domingos?', en: 'Do you eat with your family on Sundays?' }, help: { es: 'Sí, siempre. / A veces. / No.', en: 'Yes, always. / Sometimes. / No.' }, follow: [{ es: '¿Qué comen?', en: 'What do you eat?' }, { es: '¿Quién cocina?', en: 'Who cooks?' }] },
          ],
          words: [{ es: 'la carne', en: 'meat' }, { es: 'la parrilla', en: 'the grill' }, { es: 'el humo', en: 'smoke' }, { es: 'el pollo', en: 'chicken' }, { es: 'las verduras', en: 'vegetables' }],
        },
        A1: {
          scene: { es: 'Es domingo al mediodía en una parrilla de barrio en Córdoba. Las familias llegan temprano. Don Héctor prende el fuego con leña a las diez de la mañana para que las brasas estén listas a la una.', en: 'It is Sunday noon at a neighbourhood steakhouse in Córdoba. Families arrive early. Don Héctor lights the fire with firewood at ten in the morning so the embers are ready at one.' },
          opener: { es: 'El asado no se apura. Primero el chorizo y la morcilla, después la carne. Y siempre se aplaude al asador al final. ¿En tu país también se aplaude al que cocina?', en: 'You don’t rush an asado. First the chorizo and the black pudding, then the meat. And you always applaud the grill master at the end. In your country do people applaud the cook too?' },
          decide: {
            ask: { es: 'Héctor te deja ayudar. ¿Qué haces?', en: 'Héctor lets you help. What do you do?' },
            options: [
              { say: { es: 'Corto el pan y preparo la ensalada.', en: 'I cut the bread and make the salad.' }, then: { es: 'Héctor te enseña a hacer chimichurri: perejil, ajo, orégano y aceite.', en: 'Héctor teaches you to make chimichurri: parsley, garlic, oregano and oil.' } },
              { say: { es: 'Le pido que me enseñe a hacer el fuego.', en: 'I ask him to teach me to make the fire.' }, then: { es: 'Tardas media hora. Héctor dice que el fuego es «como una persona: hay que tenerle paciencia».', en: 'It takes you half an hour. Héctor says fire is “like a person: you have to be patient with it.”' } },
              { say: { es: 'Me siento con la familia y converso.', en: 'I sit with the family and chat.' }, then: { es: 'La abuela te pregunta si tienes novio o novia. Todos esperan la respuesta.', en: 'Grandma asks if you have a boyfriend or girlfriend. Everyone waits for the answer.' } },
            ],
          },
          twist: { es: 'Empieza a llover fuerte. Héctor tapa la parrilla con una chapa y sigue cocinando bajo la lluvia.', en: 'It starts raining hard. Héctor covers the grill with a metal sheet and carries on cooking in the rain.' },
          questions: [
            { q: { es: '¿Qué se come los domingos en tu familia?', en: 'What does your family eat on Sundays?' }, help: { es: 'Normalmente comemos…', en: 'We usually eat…' }, follow: [{ es: '¿Quién cocina?', en: 'Who cooks?' }, { es: '¿A qué hora?', en: 'At what time?' }] },
            { q: { es: '¿Sabes cocinar algo especial?', en: 'Can you cook something special?' }, help: { es: 'Sí, sé hacer… / No, solo…', en: 'Yes, I can make… / No, only…' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Para quién cocinas?', en: 'Who do you cook for?' }] },
            { q: { es: '¿Te gustan las comidas largas con mucha gente?', en: 'Do you like long meals with lots of people?' }, help: { es: 'Sí, me encantan. / No, me cansan.', en: 'Yes, I love them. / No, they tire me out.' }, follow: [{ es: '¿Cuánto dura una comida así?', en: 'How long does a meal like that last?' }, { es: '¿De qué se habla?', en: 'What do people talk about?' }] },
            { q: { es: '¿Qué haces si llueve en un plan al aire libre?', en: 'What do you do if it rains during an outdoor plan?' }, help: { es: 'Seguimos igual. / Nos vamos adentro.', en: 'We carry on. / We go inside.' }, follow: [{ es: '¿Te pasó?', en: 'Has it happened to you?' }, { es: '¿Fue divertido?', en: 'Was it fun?' }] },
          ],
          words: [{ es: 'el asado', en: 'Argentine barbecue' }, { es: 'la leña', en: 'firewood' }, { es: 'las brasas', en: 'embers' }, { es: 'el asador', en: 'the grill master' }, { es: 'tapar', en: 'to cover' }],
        },
        A2: {
          scene: { es: 'Don Héctor abrió su parrilla hace treinta años con dos mesas en el garaje de su casa. Hoy tiene veinte mesas y sus hijos trabajan con él. Pero el precio de la carne subió tanto que muchos clientes de siempre ya no pueden venir.', en: 'Don Héctor opened his steakhouse thirty years ago with two tables in his garage. Today he has twenty tables and his children work with him. But the price of meat has gone up so much that many regulars can’t come any more.' },
          opener: { es: 'Cuando yo era chico, el asado era la comida del pobre. Ahora un kilo de carne cuesta lo mismo que una camisa. Mi vecino, que venía todos los domingos, ahora viene una vez al mes y pide solo chorizo. Me da vergüenza cobrarle.', en: 'When I was a kid, asado was the poor man’s food. Now a kilo of meat costs the same as a shirt. My neighbour, who used to come every Sunday, now comes once a month and orders only chorizo. I’m embarrassed to charge him.' },
          decide: {
            ask: { es: 'Héctor quiere que sus clientes de siempre sigan viniendo. ¿Qué le sugieres?', en: 'Héctor wants his regular customers to keep coming. What do you suggest?' },
            options: [
              { say: { es: 'Un «menú del barrio» más barato los miércoles.', en: 'A cheaper “neighbourhood menu” on Wednesdays.' }, then: { es: 'El primer miércoles la parrilla se llena. El vecino trae a toda su familia.', en: 'The first Wednesday the steakhouse fills up. The neighbour brings his whole family.' } },
              { say: { es: 'Agregar platos con menos carne: pastas, empanadas, verduras.', en: 'Add dishes with less meat: pasta, empanadas, vegetables.' }, then: { es: 'Su hija hace empanadas como las de su abuela. Se venden más que el vacío.', en: 'His daughter makes empanadas like her grandmother’s. They sell more than the flank steak.' } },
              { say: { es: 'Subir los precios para turistas y bajarlos para vecinos.', en: 'Raise prices for tourists and lower them for locals.' }, then: { es: 'Su hijo no está de acuerdo: «¿Y cómo sabemos quién es vecino?»', en: 'His son disagrees: “And how do we know who’s a local?”' } },
            ],
          },
          twist: { es: 'Llega un crítico gastronómico famoso y pide «el mejor corte de la casa». Héctor le sirve lo mismo que a todos.', en: 'A famous food critic arrives and asks for “the best cut in the house”. Héctor serves him the same as everyone.' },
          questions: [
            { q: { es: '¿Qué comida era barata cuando eras chico y ahora es cara?', en: 'What food was cheap when you were a kid and is now expensive?' }, help: { es: 'Antes… era barato y ahora…', en: 'Before… was cheap and now…' }, follow: [{ es: '¿La sigues comprando?', en: 'Do you still buy it?' }, { es: '¿Por qué subió?', en: 'Why did it go up?' }] },
            { q: { es: '¿Tienes un restaurante «de siempre»?', en: 'Do you have a regular restaurant?' }, help: { es: 'Sí, siempre voy a… / No, cambio mucho.', en: 'Yes, I always go to… / No, I change a lot.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Qué pides?', en: 'What do you order?' }] },
            { q: { es: '¿Cambiaste tu forma de comer por los precios?', en: 'Have you changed how you eat because of prices?' }, help: { es: 'Sí, ahora como menos… / No mucho.', en: 'Yes, now I eat less… / Not much.' }, follow: [{ es: '¿Qué dejaste de comprar?', en: 'What did you stop buying?' }, { es: '¿Qué compras más?', en: 'What do you buy more?' }] },
            { q: { es: '¿Héctor hizo bien en servirle lo mismo al crítico?', en: 'Did Héctor do right serving the critic the same?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué harías tú?', en: 'What would you do?' }, { es: '¿Confías en las críticas?', en: 'Do you trust reviews?' }] },
          ],
          words: [{ es: 'el garaje', en: 'the garage' }, { es: 'cobrar', en: 'to charge' }, { es: 'la empanada', en: 'the empanada (pasty)' }, { es: 'el vacío', en: 'flank steak' }, { es: 'el corte', en: 'the cut (of meat)' }],
        },
        B1: {
          scene: { es: 'Un grupo de jóvenes cordobeses abre al lado de la parrilla de Héctor un restaurante vegano. Ponen carteles sobre el impacto ambiental de la ganadería. Algunos clientes de Héctor se ofenden; otros, en secreto, van a probar.', en: 'A group of young people from Córdoba open a vegan restaurant next to Héctor’s steakhouse. They put up posters about the environmental impact of cattle farming. Some of Héctor’s customers are offended; others secretly go to try it.' },
          opener: { es: 'Yo no tengo nada contra los veganos, eh. Mi nieta es vegetariana y la quiero igual. Lo que me molesta es que me miren como si fuera un criminal por hacer lo que hizo mi abuelo. El asado no es solo carne: es la familia alrededor del fuego. ¿Eso también hay que cambiarlo?', en: 'I have nothing against vegans, you know. My granddaughter is vegetarian and I love her just the same. What bothers me is being looked at like a criminal for doing what my grandfather did. Asado isn’t just meat: it’s the family around the fire. Does that have to change too?' },
          decide: {
            ask: { es: 'La dueña del restaurante vegano le propone a Héctor hacer algo juntos. ¿Qué le recomiendas?', en: 'The vegan restaurant’s owner proposes doing something together with Héctor. What do you recommend?' },
            options: [
              { say: { es: 'Un «asado mixto» un domingo al mes, con carne y opciones vegetales.', en: 'A “mixed asado” one Sunday a month, with meat and plant-based options.' }, then: { es: 'El primer domingo hay tensión. Al tercero, la abuela pide la receta de las berenjenas.', en: 'The first Sunday is tense. By the third, grandma asks for the aubergine recipe.' } },
              { say: { es: 'Que cada uno siga con lo suyo y se respeten.', en: 'Each should stick to their own thing and respect each other.' }, then: { es: 'Los dos negocios funcionan. Pero los carteles siguen ahí y Héctor los mira cada mañana.', en: 'Both businesses do well. But the posters are still there and Héctor looks at them every morning.' } },
              { say: { es: 'Que Héctor les pida quitar los carteles.', en: 'Héctor should ask them to remove the posters.' }, then: { es: 'Los jóvenes se niegan: «Es información, no un ataque». Se arma una discusión en la vereda.', en: 'The young people refuse: “It’s information, not an attack.” An argument breaks out on the pavement.' } },
            ],
          },
          twist: { es: 'La nieta de Héctor empieza a trabajar en el restaurante vegano sin decírselo a su abuelo.', en: 'Héctor’s granddaughter starts working at the vegan restaurant without telling her grandfather.' },
          questions: [
            { q: { es: '¿Se puede cambiar una tradición culinaria por razones ambientales?', en: 'Can a culinary tradition be changed for environmental reasons?' }, help: { es: 'Creo que sí, poco a poco, si… / Es difícil, porque…', en: 'I think so, little by little, if… / It’s hard, because…' }, follow: [{ es: '¿Qué tradición de tu país podría cambiar?', en: 'What tradition in your country could change?' }, { es: '¿Quién debería empezar?', en: 'Who should start?' }] },
            { q: { es: '¿Es lo mismo informar que juzgar?', en: 'Is informing the same as judging?' }, help: { es: 'No, porque informar es… y juzgar es… / A veces se parecen…', en: 'No, because informing is… and judging is… / Sometimes they’re similar…' }, follow: [{ es: '¿Los carteles juzgan?', en: 'Do the posters judge?' }, { es: '¿Cómo lo dirías tú?', en: 'How would you say it?' }] },
            { q: { es: '¿Cambiaste algún hábito de consumo por convicción?', en: 'Have you changed any consumption habit out of conviction?' }, help: { es: 'Sí, dejé de… porque… / Todavía no, pero…', en: 'Yes, I stopped… because… / Not yet, but…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Tu familia lo entendió?', en: 'Did your family understand?' }] },
            { q: { es: '¿Cómo debería reaccionar Héctor cuando se entere de lo de su nieta?', en: 'How should Héctor react when he finds out about his granddaughter?' }, help: { es: 'Debería… / Sería mejor que…', en: 'He should… / It would be better if…' }, follow: [{ es: '¿Ella hizo mal en no decírselo?', en: 'Was she wrong not to tell him?' }, { es: '¿Qué le dirías tú a ella?', en: 'What would you tell her?' }] },
          ],
          words: [{ es: 'la ganadería', en: 'cattle farming' }, { es: 'ofenderse', en: 'to be offended' }, { es: 'la vereda', en: 'the pavement (Argentina)' }, { es: 'la convicción', en: 'conviction' }, { es: 'enterarse', en: 'to find out' }],
        },
      },
    },
    // ------------------------------------------------------------ Parque Sarmiento
    {
      id: 'parque',
      name: { es: 'El Parque Sarmiento', en: 'Sarmiento Park' },
      who: { name: 'Julieta', role: { es: 'paseadora de perros', en: 'dog walker' } },
      levels: {
        A0: {
          scene: { es: 'Es un parque grande. Hay un lago y muchos árboles. Julieta camina con seis perros.', en: 'It is a big park. There is a lake and many trees. Julieta walks with six dogs.' },
          opener: { es: '¡Hola! Soy Julieta. ¡Tengo seis perros!', en: 'Hi! I am Julieta. I have six dogs!' },
          decide: {
            ask: { es: 'Un perro quiere jugar contigo. ¿Qué haces?', en: 'A dog wants to play with you. What do you do?' },
            options: [
              { say: { es: 'Juego con el perro.', en: 'I play with the dog.' }, then: { es: 'El perro está muy feliz. ¡Salta mucho!', en: 'The dog is very happy. It jumps a lot!' } },
              { say: { es: 'Tiro una pelota.', en: 'I throw a ball.' }, then: { es: '¡Los seis perros corren a la pelota!', en: 'All six dogs run to the ball!' } },
              { say: { es: 'No, tengo miedo.', en: 'No, I am scared.' }, then: { es: 'Julieta dice: «Está bien. Es bueno, pero lo entiendo».', en: 'Julieta says: “That’s OK. It is friendly, but I understand.”' } },
            ],
          },
          twist: { es: 'Un perro corre al lago. ¡Está en el agua! ¿Qué dices?', en: 'A dog runs into the lake. It is in the water! What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los perros?', en: 'Do you like dogs?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Tienes perro?', en: 'Do you have a dog?' }, { es: '¿Perros o gatos?', en: 'Dogs or cats?' }] },
            { q: { es: '¿Vas al parque?', en: 'Do you go to the park?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué haces allí?', en: 'What do you do there?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Caminas mucho?', en: 'Do you walk a lot?' }, help: { es: 'Sí, camino mucho. / No, poco.', en: 'Yes, I walk a lot. / No, a little.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Dónde caminas?', en: 'Where do you walk?' }] },
            { q: { es: '¿Hay un parque cerca de tu casa?', en: 'Is there a park near your house?' }, help: { es: 'Sí, hay uno. / No, no hay.', en: 'Yes, there is one. / No, there isn’t.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Tiene lago?', en: 'Does it have a lake?' }] },
          ],
          words: [{ es: 'el parque', en: 'the park' }, { es: 'el perro', en: 'the dog' }, { es: 'la pelota', en: 'the ball' }, { es: 'el lago', en: 'the lake' }, { es: 'correr', en: 'to run' }],
        },
        A1: {
          scene: { es: 'Es sábado por la mañana en el Parque Sarmiento. Hay gente que corre, familias que toman mate en el pasto y chicos que andan en bicicleta. Julieta pasea perros para ganar plata mientras estudia veterinaria.', en: 'It is Saturday morning in Sarmiento Park. There are people running, families drinking mate on the grass and kids riding bikes. Julieta walks dogs to earn money while she studies veterinary science.' },
          opener: { es: 'Cada perro tiene su personalidad. Este es Toto: se cree el jefe. Esta es Luna: tiene miedo de las palomas. ¿Quieres llevar uno? El más tranquilo es Firulais.', en: 'Every dog has its personality. This is Toto: he thinks he’s the boss. This is Luna: she’s scared of pigeons. Do you want to take one? The calmest is Firulais.' },
          decide: {
            ask: { es: 'Una familia te invita a tomar mate con ellos. ¿Qué haces?', en: 'A family invites you to drink mate with them. What do you do?' },
            options: [
              { say: { es: 'Acepto y pruebo el mate.', en: 'I accept and try the mate.' }, then: { es: 'Es amargo y caliente. Te dicen: «No digas gracias hasta que no quieras más».', en: 'It’s bitter and hot. They tell you: “Don’t say thank you until you don’t want any more.”' } },
              { say: { es: 'Acepto, pero pido mate con azúcar.', en: 'I accept, but ask for mate with sugar.' }, then: { es: 'El abuelo dice que eso no es mate. La nieta le dice que se calle y te sirve uno dulce.', en: 'The grandpa says that isn’t mate. The granddaughter tells him to hush and serves you a sweet one.' } },
              { say: { es: 'Digo que no, gracias, y sigo caminando.', en: 'I say no thanks and keep walking.' }, then: { es: 'La familia te saluda con la mano. Julieta te explica que es muy normal compartir el mate con desconocidos.', en: 'The family waves. Julieta explains it’s very normal to share mate with strangers.' } },
            ],
          },
          twist: { es: 'Luna ve una paloma, se asusta y sale corriendo con la correa. Julieta tiene cinco perros más en las manos.', en: 'Luna sees a pigeon, gets scared and runs off with her lead. Julieta has five more dogs in her hands.' },
          questions: [
            { q: { es: '¿Qué haces los sábados por la mañana?', en: 'What do you do on Saturday mornings?' }, help: { es: 'Los sábados… / Duermo hasta tarde.', en: 'On Saturdays… / I sleep late.' }, follow: [{ es: '¿Haces deporte?', en: 'Do you do sport?' }, { es: '¿Sales de casa?', en: 'Do you go out?' }] },
            { q: { es: '¿Probaste el mate alguna vez?', en: 'Have you ever tried mate?' }, help: { es: 'Sí, lo probé en… / No, nunca.', en: 'Yes, I tried it in… / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Qué bebida se comparte en tu país?', en: 'What drink is shared in your country?' }] },
            { q: { es: '¿Tienes un animal? ¿Cómo es su personalidad?', en: 'Do you have a pet? What is its personality like?' }, help: { es: 'Sí, tengo… Es muy… / No, pero…', en: 'Yes, I have… It is very… / No, but…' }, follow: [{ es: '¿De qué tiene miedo?', en: 'What is it scared of?' }, { es: '¿Qué hace cuando llegas?', en: 'What does it do when you get home?' }] },
            { q: { es: '¿Qué trabajo hacías o harías para ganar dinero mientras estudias?', en: 'What job did you do, or would you do, to earn money while studying?' }, help: { es: 'Trabajaba de… / Trabajaría de…', en: 'I worked as… / I would work as…' }, follow: [{ es: '¿Te gustaba?', en: 'Did you like it?' }, { es: '¿Cuánto ganabas?', en: 'How much did you earn?' }] },
          ],
          words: [{ es: 'el mate', en: 'mate (herbal drink)' }, { es: 'el pasto', en: 'the grass (Argentina)' }, { es: 'la paloma', en: 'the pigeon' }, { es: 'la correa', en: 'the lead, leash' }, { es: 'amargo', en: 'bitter' }],
        },
        A2: {
          scene: { es: 'Julieta empezó a pasear perros durante la pandemia, cuando perdió su trabajo en un bar. Ahora tiene veinte clientes y un grupo de mensajes con todos los dueños. Conoce los secretos de medio barrio por lo que le cuentan mientras recoge a los perros.', en: 'Julieta started walking dogs during the pandemic, when she lost her job in a bar. Now she has twenty clients and a group chat with all the owners. She knows half the neighbourhood’s secrets from what they tell her while she picks up the dogs.' },
          opener: { es: 'La gente le habla al perro, pero en realidad me habla a mí. Una señora me contó que se separaba antes que a su hermana. Un señor me pidió que no le dijera a su esposa que el perro come pizza. Soy paseadora, psicóloga y espía.', en: 'People talk to the dog, but really they’re talking to me. A lady told me she was separating before she told her sister. A man asked me not to tell his wife the dog eats pizza. I’m a dog walker, psychologist and spy.' },
          decide: {
            ask: { es: 'Un cliente le ofrece a Julieta el doble si pasea a su perro de madrugada, antes de que la familia se despierte. ¿Qué le aconsejas?', en: 'A client offers Julieta double to walk his dog before dawn, before his family wakes up. What do you advise?' },
            options: [
              { say: { es: 'Que pregunte por qué antes de aceptar.', en: 'Ask why before accepting.' }, then: { es: 'El señor confiesa que su esposa no quiere al perro y él lo esconde en el garaje. Julieta no sabe si reír o llorar.', en: 'The man confesses his wife doesn’t like the dog and he hides it in the garage. Julieta doesn’t know whether to laugh or cry.' } },
              { say: { es: 'Que acepte: es dinero fácil.', en: 'Accept: it’s easy money.' }, then: { es: 'Funciona dos semanas, hasta que la esposa se despierta temprano y la ve en la puerta.', en: 'It works for two weeks, until the wife wakes up early and sees her at the door.' } },
              { say: { es: 'Que diga que no: madrugar tanto no vale la pena.', en: 'Say no: getting up that early isn’t worth it.' }, then: { es: 'El señor busca otra paseadora. Julieta duerme tranquila.', en: 'The man finds another dog walker. Julieta sleeps soundly.' } },
            ],
          },
          twist: { es: 'Dos clientes de Julieta, que no se conocían, se enamoran mientras sus perros juegan en el parque.', en: 'Two of Julieta’s clients, who didn’t know each other, fall in love while their dogs play in the park.' },
          questions: [
            { q: { es: '¿Cambiaste de trabajo por una crisis?', en: 'Have you changed jobs because of a crisis?' }, help: { es: 'Sí, cuando… empecé a… / No, pero conozco a alguien que…', en: 'Yes, when… I started… / No, but I know someone who…' }, follow: [{ es: '¿Fue para mejor?', en: 'Was it for the better?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿La gente te cuenta secretos con facilidad?', en: 'Do people tell you secrets easily?' }, help: { es: 'Sí, porque… / No, no sé por qué.', en: 'Yes, because… / No, I don’t know why.' }, follow: [{ es: '¿Sabes guardarlos?', en: 'Can you keep them?' }, { es: '¿Contaste alguno sin querer?', en: 'Have you told one by accident?' }] },
            { q: { es: '¿Conociste a alguien importante por casualidad?', en: 'Have you met someone important by chance?' }, help: { es: 'Sí, conocí a… en… / No, pero…', en: 'Yes, I met… in… / No, but…' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Siguen en contacto?', en: 'Are you still in touch?' }] },
            { q: { es: '¿Qué harías tú con el señor que esconde al perro?', en: 'What would you do with the man who hides the dog?' }, help: { es: 'Yo le diría que… / No me metería porque…', en: 'I would tell him that… / I wouldn’t get involved because…' }, follow: [{ es: '¿Es asunto de Julieta?', en: 'Is it Julieta’s business?' }, { es: '¿Qué pasaría con el perro?', en: 'What would happen to the dog?' }] },
          ],
          words: [{ es: 'separarse', en: 'to separate' }, { es: 'el espía', en: 'the spy' }, { es: 'de madrugada', en: 'before dawn' }, { es: 'madrugar', en: 'to get up early' }, { es: 'enamorarse', en: 'to fall in love' }],
        },
        B1: {
          scene: { es: 'La municipalidad quiere prohibir los perros sueltos en el Parque Sarmiento después de que un perro mordiera a un niño. Los dueños de perros organizan una protesta; los padres del barrio, otra. Julieta queda en medio: vive de los perros, pero el niño mordido es el hijo de una amiga.', en: 'The city council wants to ban dogs off the lead in Sarmiento Park after a dog bit a child. Dog owners organise one protest; neighbourhood parents, another. Julieta is in the middle: she lives off dogs, but the bitten child is a friend’s son.' },
          opener: { es: 'Los dos tienen razón y los dos exageran. Un perro necesita correr libre, y un nene necesita jugar sin miedo. El problema no son los perros sueltos: son los dueños que no saben controlarlos. Pero eso es más difícil de prohibir, ¿no?', en: 'Both sides are right and both exaggerate. A dog needs to run free, and a kid needs to play without fear. The problem isn’t loose dogs: it’s owners who can’t control them. But that’s harder to ban, isn’t it?' },
          decide: {
            ask: { es: 'La municipalidad pide propuestas a los vecinos. ¿Cuál apoyarías?', en: 'The council asks residents for proposals. Which would you support?' },
            options: [
              { say: { es: 'Zonas cercadas para perros sueltos y el resto del parque con correa.', en: 'Fenced areas for loose dogs and the rest of the park on the lead.' }, then: { es: 'Es la propuesta más votada. Ahora discuten de qué tamaño deben ser las zonas.', en: 'It’s the most voted proposal. Now they argue about how big the areas should be.' } },
              { say: { es: 'Un curso obligatorio para dueños de perros grandes.', en: 'A compulsory course for owners of large dogs.' }, then: { es: 'Muchos dueños protestan: «¿Ahora necesito un título para tener perro?»', en: 'Many owners protest: “Now I need a qualification to have a dog?”' } },
              { say: { es: 'Horarios: perros sueltos temprano y tarde, niños durante el día.', en: 'Timetables: loose dogs early and late, children during the day.' }, then: { es: 'Parece lógico, hasta que alguien pregunta quién va a controlar los horarios.', en: 'It seems logical, until someone asks who will enforce the timetables.' } },
            ],
          },
          twist: { es: 'Se descubre que el perro que mordió al niño era de un concejal que apoya la prohibición.', en: 'It turns out the dog that bit the child belonged to a councillor who supports the ban.' },
          questions: [
            { q: { es: '¿Cómo se equilibra la libertad de unos con la seguridad de otros en un espacio público?', en: 'How do you balance some people’s freedom with others’ safety in a public space?' }, help: { es: 'Creo que hay que… / Lo ideal sería…', en: 'I think we need to… / The ideal would be…' }, follow: [{ es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Prohibir es la mejor solución a un problema de convivencia?', en: 'Is banning the best solution to a problem of living together?' }, help: { es: 'A veces sí, cuando… / No, porque prohibir…', en: 'Sometimes yes, when… / No, because banning…' }, follow: [{ es: '¿Qué alternativas hay?', en: 'What alternatives are there?' }, { es: '¿Qué prohibición te parece absurda?', en: 'What ban seems absurd to you?' }] },
            { q: { es: '¿Cambia el debate saber quién era el dueño del perro?', en: 'Does knowing who the dog’s owner was change the debate?' }, help: { es: 'Sí, porque demuestra que… / No, el problema sigue siendo…', en: 'Yes, because it shows that… / No, the problem is still…' }, follow: [{ es: '¿Debería renunciar el concejal?', en: 'Should the councillor resign?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Estuviste alguna vez entre dos personas que querías y que no estaban de acuerdo?', en: 'Have you ever been between two people you cared about who disagreed?' }, help: { es: 'Sí, una vez… / Intenté… pero…', en: 'Yes, once… / I tried… but…' }, follow: [{ es: '¿Tomaste partido?', en: 'Did you take sides?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
          ],
          words: [{ es: 'suelto', en: 'loose, off the lead' }, { es: 'morder', en: 'to bite' }, { es: 'cercado', en: 'fenced' }, { es: 'el concejal', en: 'the councillor' }, { es: 'la convivencia', en: 'living together' }],
        },
      },
    },
    // ------------------------------------------------------------ the Sierras
    {
      id: 'sierras',
      name: { es: 'El mirador de las Sierras', en: 'The hills lookout' },
      who: { name: 'Facundo', role: { es: 'guía de montaña', en: 'mountain guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una montaña verde. Hay un río abajo y cóndores en el cielo. Facundo es guía.', en: 'It is a green mountain. There is a river below and condors in the sky. Facundo is a guide.' },
          opener: { es: 'Hola. Soy Facundo. ¡Mira arriba! Es un cóndor.', en: 'Hello. I am Facundo. Look up! It is a condor.' },
          decide: {
            ask: { es: 'Facundo pregunta: ¿qué hacemos ahora?', en: 'Facundo asks: what do we do now?' },
            options: [
              { say: { es: 'Caminamos más arriba.', en: 'We walk higher.' }, then: { es: 'Facundo dice: «Bien. Es una hora más. ¿Tienes agua?»', en: 'Facundo says: “Good. It is one more hour. Do you have water?”' } },
              { say: { es: 'Comemos aquí.', en: 'We eat here.' }, then: { es: 'Facundo saca pan, queso y salame. ¡Qué rico!', en: 'Facundo takes out bread, cheese and salami. How tasty!' } },
              { say: { es: 'Bajamos al río.', en: 'We go down to the river.' }, then: { es: 'Facundo dice: «El agua está muy fría, pero es muy limpia».', en: 'Facundo says: “The water is very cold, but it is very clean.”' } },
            ],
          },
          twist: { es: 'Llueve un poco. Hay un arcoíris. ¿Qué dices?', en: 'It rains a little. There is a rainbow. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta caminar en la montaña?', en: 'Do you like walking in the mountains?' }, help: { es: 'Sí, me encanta. / No, me canso.', en: 'Yes, I love it. / No, I get tired.' }, follow: [{ es: '¿Con quién vas?', en: 'Who do you go with?' }, { es: '¿Cuántas horas caminas?', en: 'How many hours do you walk?' }] },
            { q: { es: '¿Hay montañas en tu país?', en: 'Are there mountains in your country?' }, help: { es: 'Sí, hay muchas. / No, es plano.', en: 'Yes, there are many. / No, it is flat.' }, follow: [{ es: '¿Son altas?', en: 'Are they high?' }, { es: '¿Tienen nieve?', en: 'Do they have snow?' }] },
            { q: { es: '¿Qué animal grande te gusta?', en: 'What big animal do you like?' }, help: { es: 'Me gusta el / la…', en: 'I like the…' }, follow: [{ es: '¿Lo viste en la naturaleza?', en: 'Have you seen it in nature?' }, { es: '¿Dónde vive?', en: 'Where does it live?' }] },
            { q: { es: '¿Qué llevas en tu mochila?', en: 'What do you carry in your backpack?' }, help: { es: 'Llevo agua, comida y…', en: 'I carry water, food and…' }, follow: [{ es: '¿Es pesada?', en: 'Is it heavy?' }, { es: '¿Qué no olvidas nunca?', en: 'What do you never forget?' }] },
          ],
          words: [{ es: 'la montaña', en: 'the mountain' }, { es: 'el cóndor', en: 'the condor' }, { es: 'el guía', en: 'the guide' }, { es: 'arriba / abajo', en: 'up / down' }, { es: 'el arcoíris', en: 'the rainbow' }],
        },
        A1: {
          scene: { es: 'Las Sierras de Córdoba están a una hora de la ciudad. Hay ríos, pueblos pequeños y caminos para hacer senderismo. Facundo lleva grupos al Cerro Champaquí, la montaña más alta de la provincia.', en: 'The Córdoba Hills are an hour from the city. There are rivers, small villages and paths for hiking. Facundo takes groups up Cerro Champaquí, the highest mountain in the province.' },
          opener: { es: 'Para subir al Champaquí necesitamos dos días. Dormimos en un refugio a mitad de camino. Lo más importante: buenas zapatillas, agua y no separarse del grupo. ¿Estás listo?', en: 'To climb Champaquí we need two days. We sleep in a refuge halfway. The most important thing: good shoes, water and don’t leave the group. Are you ready?' },
          decide: {
            ask: { es: 'A mitad de camino estás muy cansado. ¿Qué haces?', en: 'Halfway you are very tired. What do you do?' },
            options: [
              { say: { es: 'Sigo despacio, al final del grupo.', en: 'I carry on slowly, at the back of the group.' }, then: { es: 'Facundo camina contigo y te cuenta leyendas de la sierra. El tiempo pasa rápido.', en: 'Facundo walks with you and tells you legends of the hills. Time passes quickly.' } },
              { say: { es: 'Pido descansar diez minutos.', en: 'I ask to rest for ten minutes.' }, then: { es: 'Todo el grupo se sienta. Facundo reparte chocolate. Nadie se queja.', en: 'The whole group sits down. Facundo hands out chocolate. Nobody complains.' } },
              { say: { es: 'Me quedo en el refugio y no subo a la cima.', en: 'I stay at the refuge and don’t go to the top.' }, then: { es: 'Desde el refugio ves el atardecer más lindo de tu vida. No te arrepientes.', en: 'From the refuge you see the most beautiful sunset of your life. You don’t regret it.' } },
            ],
          },
          twist: { es: 'Por la noche, en el refugio, se corta la luz. Solo hay velas y el cielo lleno de estrellas.', en: 'At night, in the refuge, the power goes out. There are only candles and a sky full of stars.' },
          questions: [
            { q: { es: '¿Hiciste alguna vez senderismo?', en: 'Have you ever been hiking?' }, help: { es: 'Sí, fui a… / No, nunca.', en: 'Yes, I went to… / No, never.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Llegaste arriba?', en: 'Did you reach the top?' }] },
            { q: { es: '¿Qué haces cuando estás muy cansado?', en: 'What do you do when you are very tired?' }, help: { es: 'Descanso. / Sigo igual. / Me enojo.', en: 'I rest. / I carry on. / I get angry.' }, follow: [{ es: '¿Cuándo te cansas más?', en: 'When do you get most tired?' }, { es: '¿Duermes bien?', en: 'Do you sleep well?' }] },
            { q: { es: '¿Dormiste alguna vez en un refugio o en una carpa?', en: 'Have you ever slept in a refuge or a tent?' }, help: { es: 'Sí, pasé la noche en… / No, prefiero un hotel.', en: 'Yes, I slept in… / No, I prefer a hotel.' }, follow: [{ es: '¿Hacía frío?', en: 'Was it cold?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Conoces alguna leyenda de montaña?', en: 'Do you know any mountain legend?' }, help: { es: 'Sí, dicen que… / No, ninguna.', en: 'Yes, they say that… / No, none.' }, follow: [{ es: '¿Quién te la contó?', en: 'Who told you?' }, { es: '¿Te la crees?', en: 'Do you believe it?' }] },
          ],
          words: [{ es: 'el senderismo', en: 'hiking' }, { es: 'el refugio', en: 'the mountain refuge' }, { es: 'la cima', en: 'the summit' }, { es: 'el atardecer', en: 'the sunset' }, { es: 'cortarse la luz', en: 'the power going out' }],
        },
        A2: {
          scene: { es: 'Facundo trabajaba en un banco en Buenos Aires. Un verano vino de vacaciones a las sierras y se perdió durante un día entero. Un pastor lo encontró y lo llevó a su casa. Seis meses después, Facundo renunció al banco y se mudó a un pueblo de la sierra.', en: 'Facundo used to work at a bank in Buenos Aires. One summer he came on holiday to the hills and got lost for a whole day. A shepherd found him and took him home. Six months later, Facundo quit the bank and moved to a village in the hills.' },
          opener: { es: 'Ese día, perdido, me di cuenta de que no sabía hacer nada útil: ni encontrar agua, ni hacer fuego, ni leer las nubes. El pastor sabía todo eso y no tenía ni teléfono. Me enseñó durante dos años. ¿Quién te enseñó a ti algo que no se aprende en la escuela?', en: 'That day, lost, I realised I couldn’t do anything useful: not find water, nor make a fire, nor read the clouds. The shepherd knew all that and didn’t even have a phone. He taught me for two years. Who taught you something you don’t learn at school?' },
          decide: {
            ask: { es: 'Un turista se separó del grupo y no contesta el teléfono. ¿Qué hace Facundo?', en: 'A tourist has left the group and isn’t answering the phone. What does Facundo do?' },
            options: [
              { say: { es: 'Deja al grupo con su ayudante y sale a buscarlo.', en: 'He leaves the group with his assistant and goes to look for him.' }, then: { es: 'Lo encuentra en una hora, sentado en una piedra, sacando fotos de un cóndor como si nada.', en: 'He finds him within an hour, sitting on a rock, photographing a condor as if nothing had happened.' } },
              { say: { es: 'Llama a los bomberos voluntarios del pueblo.', en: 'He calls the village volunteer firefighters.' }, then: { es: 'Llegan en veinte minutos. Uno de ellos es el pastor que encontró a Facundo hace años.', en: 'They arrive in twenty minutes. One of them is the shepherd who found Facundo years ago.' } },
              { say: { es: 'Espera media hora: seguro vuelve solo.', en: 'He waits half an hour: surely he’ll come back on his own.' }, then: { es: 'Pasa la media hora y empieza a bajar la niebla. Facundo se arrepiente de haber esperado.', en: 'Half an hour passes and the fog starts to come down. Facundo regrets waiting.' } },
            ],
          },
          twist: { es: 'El turista perdido resulta ser un gerente del banco donde trabajaba Facundo.', en: 'The lost tourist turns out to be a manager from the bank where Facundo used to work.' },
          questions: [
            { q: { es: '¿Te perdiste alguna vez?', en: 'Have you ever got lost?' }, help: { es: 'Sí, una vez en… / No, siempre uso el mapa.', en: 'Yes, once in… / No, I always use the map.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Quién te enseñó algo que no se aprende en la escuela?', en: 'Who taught you something you don’t learn at school?' }, help: { es: 'Mi… me enseñó a… cuando…', en: 'My… taught me to… when…' }, follow: [{ es: '¿Lo usas todavía?', en: 'Do you still use it?' }, { es: '¿Se lo enseñaste a alguien?', en: 'Have you taught it to anyone?' }] },
            { q: { es: '¿Cambiarías tu vida en la ciudad por una vida en el campo?', en: 'Would you swap city life for country life?' }, help: { es: 'Sí, porque… / No, extrañaría…', en: 'Yes, because… / No, I’d miss…' }, follow: [{ es: '¿Qué harías allí?', en: 'What would you do there?' }, { es: '¿Conoces a alguien que lo hizo?', en: 'Do you know someone who did it?' }] },
            { q: { es: '¿Qué habilidades prácticas te gustaría aprender?', en: 'What practical skills would you like to learn?' }, help: { es: 'Me gustaría aprender a… porque…', en: 'I’d like to learn to… because…' }, follow: [{ es: '¿Dónde podrías aprenderlo?', en: 'Where could you learn it?' }, { es: '¿Por qué no lo aprendiste todavía?', en: 'Why haven’t you learned it yet?' }] },
          ],
          words: [{ es: 'perderse', en: 'to get lost' }, { es: 'el pastor', en: 'the shepherd' }, { es: 'renunciar', en: 'to quit' }, { es: 'la niebla', en: 'fog' }, { es: 'los bomberos voluntarios', en: 'volunteer firefighters' }],
        },
        B1: {
          scene: { es: 'Cada verano hay incendios en las Sierras de Córdoba. Este año se quemaron cincuenta mil hectáreas. Algunos dicen que los incendios son intencionales, para poder construir barrios privados donde antes había monte. Facundo es bombero voluntario y está agotado.', en: 'Every summer there are fires in the Córdoba Hills. This year fifty thousand hectares burned. Some say the fires are deliberate, so private estates can be built where there used to be scrubland. Facundo is a volunteer firefighter and is exhausted.' },
          opener: { es: 'Pasé tres noches sin dormir apagando el fuego con una pala y una mochila de agua. Y al mes siguiente, en el mismo lugar, aparecieron carteles: «Próximamente, barrio cerrado con vista a las sierras». ¿Casualidad? Puede ser. Pero ya van muchas casualidades.', en: 'I spent three nights without sleep putting out the fire with a shovel and a water backpack. And the next month, in the same place, signs appeared: “Coming soon, gated community with hill views.” Coincidence? Maybe. But there have been a lot of coincidences.' },
          decide: {
            ask: { es: 'Facundo quiere hacer algo más que apagar fuegos. ¿Qué le recomiendas?', en: 'Facundo wants to do more than put out fires. What do you recommend?' },
            options: [
              { say: { es: 'Impulsar una ley que prohíba construir en zonas quemadas durante treinta años.', en: 'Push for a law banning building on burned land for thirty years.' }, then: { es: 'Juntan cien mil firmas. Una ley parecida ya existe, pero nadie la hace cumplir.', en: 'They collect a hundred thousand signatures. A similar law already exists, but nobody enforces it.' } },
              { say: { es: 'Organizar a los vecinos para reforestar con plantas nativas.', en: 'Organise residents to reforest with native plants.' }, then: { es: 'Plantan cinco mil árboles en un año. Facundo dice que es poco, pero que el monte empieza a volver.', en: 'They plant five thousand trees in a year. Facundo says it’s not much, but the scrubland is starting to come back.' } },
              { say: { es: 'Investigar quién compra las tierras quemadas y hacerlo público.', en: 'Investigate who buys the burned land and make it public.' }, then: { es: 'Un periodista lo ayuda. A las dos semanas, Facundo recibe una amenaza anónima.', en: 'A journalist helps him. Two weeks later, Facundo receives an anonymous threat.' } },
            ],
          },
          twist: { es: 'Uno de los compradores de tierras quemadas es el padre de un bombero voluntario del cuartel de Facundo.', en: 'One of the buyers of burned land is the father of a volunteer firefighter at Facundo’s station.' },
          questions: [
            { q: { es: '¿Qué se puede hacer cuando una ley existe pero no se cumple?', en: 'What can be done when a law exists but isn’t enforced?' }, help: { es: 'Habría que… / La ciudadanía puede…', en: 'We’d need to… / Citizens can…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Con qué leyes?', en: 'With which laws?' }] },
            { q: { es: '¿Vale la pena arriesgarse para denunciar algo injusto?', en: 'Is it worth taking risks to expose something unfair?' }, help: { es: 'Depende del riesgo… / Creo que sí, porque si nadie…', en: 'It depends on the risk… / I think so, because if nobody…' }, follow: [{ es: '¿Tú lo harías?', en: 'Would you do it?' }, { es: '¿Dónde está tu límite?', en: 'Where is your limit?' }] },
            { q: { es: '¿Vivirías en un barrio construido sobre una zona quemada si no lo supieras?', en: 'Would you live in an estate built on burned land if you didn’t know?' }, help: { es: 'Si no lo supiera… pero si me enterara…', en: 'If I didn’t know… but if I found out…' }, follow: [{ es: '¿Te mudarías?', en: 'Would you move out?' }, { es: '¿Quién es responsable?', en: 'Who is responsible?' }] },
            { q: { es: '¿Cómo debería actuar Facundo con su compañero bombero?', en: 'How should Facundo act with his firefighter colleague?' }, help: { es: 'Debería hablar con él antes de… / No debería mezclar…', en: 'He should talk to him before… / He shouldn’t mix…' }, follow: [{ es: '¿El hijo es culpable de lo que hace el padre?', en: 'Is the son guilty of what the father does?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'el incendio', en: 'the wildfire' }, { es: 'intencional', en: 'deliberate' }, { es: 'el barrio cerrado', en: 'gated community' }, { es: 'agotado', en: 'exhausted' }, { es: 'la amenaza', en: 'the threat' }],
        },
      },
    },
    // ------------------------------------------------------------ the bus terminal
    {
      id: 'terminal',
      name: { es: 'La terminal de ómnibus', en: 'The bus terminal' },
      who: { name: 'Doña Norma', role: { es: 'vendedora de alfajores', en: 'alfajor seller' } },
      levels: {
        A0: {
          scene: { es: 'Es una terminal de ómnibus. Hay muchos buses y mucha gente con maletas. Doña Norma vende alfajores.', en: 'It is a bus terminal. There are many buses and many people with suitcases. Doña Norma sells alfajores.' },
          opener: { es: '¡Hola, querido! Soy Norma. ¿Quieres un alfajor?', en: 'Hello, dear! I am Norma. Do you want an alfajor?' },
          decide: {
            ask: { es: 'Hay alfajores de chocolate, de fruta y de coco. ¿Cuál quieres?', en: 'There are chocolate, fruit and coconut alfajores. Which one do you want?' },
            options: [
              { say: { es: 'De chocolate.', en: 'Chocolate.' }, then: { es: 'Norma dice: «¡El más rico! Tiene dulce de leche adentro».', en: 'Norma says: “The tastiest! It has dulce de leche inside.”' } },
              { say: { es: 'De fruta.', en: 'Fruit.' }, then: { es: 'Norma dice: «Es el alfajor de Córdoba. ¡Muy típico!»', en: 'Norma says: “It is the Córdoba alfajor. Very typical!”' } },
              { say: { es: 'Uno de cada uno.', en: 'One of each.' }, then: { es: 'Norma ríe: «¡Tres alfajores! Para el viaje».', en: 'Norma laughs: “Three alfajores! For the trip.”' } },
            ],
          },
          twist: { es: 'Tu bus sale ahora. ¡No tienes cambio! Norma dice: «Paga mañana». ¿Qué dices?', en: 'Your bus is leaving now. You have no change! Norma says: “Pay tomorrow.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los dulces?', en: 'Do you like sweets?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál te gusta?', en: 'Which do you like?' }, { es: '¿Comes dulces todos los días?', en: 'Do you eat sweets every day?' }] },
            { q: { es: '¿Viajas en bus?', en: 'Do you travel by bus?' }, help: { es: 'Sí, a veces. / No, en coche.', en: 'Yes, sometimes. / No, by car.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Es cómodo?', en: 'Is it comfortable?' }] },
            { q: { es: '¿Qué comes en un viaje?', en: 'What do you eat on a trip?' }, help: { es: 'Como… / No como nada.', en: 'I eat… / I eat nothing.' }, follow: [{ es: '¿Llevas comida de casa?', en: 'Do you take food from home?' }, { es: '¿Compras en la estación?', en: 'Do you buy at the station?' }] },
            { q: { es: '¿Tienes una maleta grande?', en: 'Do you have a big suitcase?' }, help: { es: 'Sí, es grande. / No, es pequeña.', en: 'Yes, it is big. / No, it is small.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Qué llevas?', en: 'What do you carry?' }] },
          ],
          words: [{ es: 'la terminal', en: 'the terminal' }, { es: 'el ómnibus', en: 'the coach (Argentina)' }, { es: 'el alfajor', en: 'alfajor (filled biscuit)' }, { es: 'la maleta', en: 'the suitcase' }, { es: 'el cambio', en: 'change (money)' }],
        },
        A1: {
          scene: { es: 'La terminal de Córdoba es una de las más grandes del país. De aquí salen buses a todas las provincias. Doña Norma vende alfajores caseros en un carrito desde hace quince años. Conoce a todos los choferes.', en: 'Córdoba’s terminal is one of the biggest in the country. Coaches leave from here to every province. Doña Norma has sold homemade alfajores from a cart for fifteen years. She knows all the drivers.' },
          opener: { es: 'En Argentina viajamos mucho en ómnibus porque los aviones son caros y el país es enorme. A Salta son catorce horas. A Buenos Aires, diez. Siempre conviene llevar un alfajor, por si acaso.', en: 'In Argentina we travel a lot by coach because planes are expensive and the country is huge. To Salta it’s fourteen hours. To Buenos Aires, ten. It’s always worth taking an alfajor, just in case.' },
          decide: {
            ask: { es: 'Tienes que elegir un asiento para un viaje de doce horas. ¿Cuál eliges?', en: 'You have to choose a seat for a twelve-hour trip. Which do you choose?' },
            options: [
              { say: { es: 'Cama, para dormir bien aunque sea más caro.', en: 'A bed seat, to sleep well even if it’s more expensive.' }, then: { es: 'El asiento se reclina casi del todo. Te dan una manta y un café a la mañana.', en: 'The seat reclines almost fully. They give you a blanket and a coffee in the morning.' } },
              { say: { es: 'Semicama, que es más barato.', en: 'A semi-bed, which is cheaper.' }, then: { es: 'Duermes a ratos. Tu vecino de asiento ronca toda la noche.', en: 'You sleep on and off. Your seat neighbour snores all night.' } },
              { say: { es: 'Arriba, adelante, para ver el paisaje.', en: 'Upstairs, at the front, to see the scenery.' }, then: { es: 'Al amanecer ves las montañas desde el primer piso del bus. Vale la pena.', en: 'At dawn you see the mountains from the top deck of the coach. It’s worth it.' } },
            ],
          },
          twist: { es: 'Anuncian que tu bus tiene tres horas de atraso. Norma te ofrece un mate y una silla al lado de su carrito.', en: 'They announce your coach is three hours late. Norma offers you a mate and a chair next to her cart.' },
          questions: [
            { q: { es: '¿Cuál fue tu viaje más largo?', en: 'What was your longest trip?' }, help: { es: 'Mi viaje más largo fue a… Duró…', en: 'My longest trip was to… It lasted…' }, follow: [{ es: '¿En qué viajaste?', en: 'What did you travel in?' }, { es: '¿Qué hiciste durante el viaje?', en: 'What did you do during the trip?' }] },
            { q: { es: '¿Puedes dormir en un bus o un avión?', en: 'Can you sleep on a coach or plane?' }, help: { es: 'Sí, duermo bien. / No, nunca puedo.', en: 'Yes, I sleep well. / No, I never can.' }, follow: [{ es: '¿Qué necesitas para dormir?', en: 'What do you need to sleep?' }, { es: '¿Te molesta el ruido?', en: 'Does noise bother you?' }] },
            { q: { es: '¿Prefieres viajar barato o cómodo?', en: 'Do you prefer travelling cheap or comfortably?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Siempre fue así?', en: 'Has it always been like that?' }, { es: '¿Cuánto pagarías por más comodidad?', en: 'How much would you pay for more comfort?' }] },
            { q: { es: '¿Qué haces cuando un transporte llega tarde?', en: 'What do you do when transport is late?' }, help: { es: 'Espero y leo. / Me enojo. / Hablo con la gente.', en: 'I wait and read. / I get angry. / I talk to people.' }, follow: [{ es: '¿Cuánto esperaste como máximo?', en: 'What’s the longest you’ve waited?' }, { es: '¿Conociste a alguien así?', en: 'Have you met someone that way?' }] },
          ],
          words: [{ es: 'casero', en: 'homemade' }, { es: 'el carrito', en: 'the cart' }, { es: 'el chofer', en: 'the driver' }, { es: 'reclinarse', en: 'to recline' }, { es: 'el atraso', en: 'the delay' }],
        },
        A2: {
          scene: { es: 'Doña Norma empezó a vender alfajores cuando quedó viuda con tres hijos chicos. Los preparaba de noche y los vendía de día en la terminal. Hoy sus hijos son grandes y le piden que deje de trabajar, pero ella dice que la terminal es su segunda casa.', en: 'Doña Norma started selling alfajores when she was widowed with three young children. She made them at night and sold them by day at the terminal. Today her children are grown up and ask her to stop working, but she says the terminal is her second home.' },
          opener: { es: 'Aquí vi de todo: novios que se despedían llorando, soldados que volvían, abuelas que viajaban por primera vez. Una vez una chica perdió el último bus y durmió en mi casa. Hoy es médica y me manda una postal cada Navidad. ¿Quién te ayudó a ti cuando más lo necesitabas?', en: 'I’ve seen everything here: couples saying goodbye in tears, soldiers coming back, grandmothers travelling for the first time. Once a girl missed the last coach and slept at my house. Today she’s a doctor and sends me a postcard every Christmas. Who helped you when you needed it most?' },
          decide: {
            ask: { es: 'Los hijos de Norma quieren que se jubile. ¿Qué le aconsejas?', en: 'Norma’s children want her to retire. What do you advise?' },
            options: [
              { say: { es: 'Que trabaje menos días, pero que no deje la terminal.', en: 'Work fewer days, but don’t leave the terminal.' }, then: { es: 'Norma acepta trabajar solo los fines de semana. Los choferes la extrañan entre semana.', en: 'Norma agrees to work only weekends. The drivers miss her during the week.' } },
              { say: { es: 'Que enseñe a alguien joven su receta y su puesto.', en: 'Teach someone young her recipe and her stall.' }, then: { es: 'Elige a un chico que vende diarios en la terminal. Él aprende rápido, pero sus alfajores todavía no son iguales.', en: 'She chooses a boy who sells newspapers at the terminal. He learns fast, but his alfajores aren’t the same yet.' } },
              { say: { es: 'Que haga caso a sus hijos y descanse.', en: 'Listen to her children and rest.' }, then: { es: 'Norma se queda en casa dos semanas. A la tercera, aparece en la terminal «solo para saludar».', en: 'Norma stays home for two weeks. In the third, she turns up at the terminal “just to say hello”.' } },
            ],
          },
          twist: { es: 'La chica que durmió en su casa aparece en la terminal, ahora con su propia hija, y le pide a Norma que sea la madrina.', en: 'The girl who slept at her house turns up at the terminal, now with her own daughter, and asks Norma to be the godmother.' },
          questions: [
            { q: { es: '¿Quién te ayudó cuando más lo necesitabas?', en: 'Who helped you when you needed it most?' }, help: { es: 'Cuando yo… me ayudó…', en: 'When I… … helped me.' }, follow: [{ es: '¿Se lo agradeciste?', en: 'Did you thank them?' }, { es: '¿Siguen en contacto?', en: 'Are you still in touch?' }] },
            { q: { es: '¿Tienes un lugar que sea como tu «segunda casa»?', en: 'Do you have a place that’s like your “second home”?' }, help: { es: 'Sí, es… porque… / No, solo mi casa.', en: 'Yes, it’s… because… / No, only my home.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Qué haces allí?', en: 'What do you do there?' }] },
            { q: { es: '¿Tus padres o abuelos siguen trabajando aunque podrían descansar?', en: 'Do your parents or grandparents keep working even though they could rest?' }, help: { es: 'Sí, mi… sigue… porque… / No, ya se jubilaron.', en: 'Yes, my… keeps… because… / No, they’ve retired.' }, follow: [{ es: '¿Te parece bien?', en: 'Do you think that’s good?' }, { es: '¿Tú qué harás?', en: 'What will you do?' }] },
            { q: { es: '¿Qué despedida recuerdas especialmente?', en: 'What goodbye do you especially remember?' }, help: { es: 'Recuerdo cuando… se fue a… / Cuando yo me fui…', en: 'I remember when… left for… / When I left…' }, follow: [{ es: '¿Lloraste?', en: 'Did you cry?' }, { es: '¿Volvieron a verse?', en: 'Did you see each other again?' }] },
          ],
          words: [{ es: 'quedar viuda', en: 'to be widowed' }, { es: 'despedirse', en: 'to say goodbye' }, { es: 'hacer caso', en: 'to listen to, obey' }, { es: 'la madrina', en: 'the godmother' }, { es: 'extrañar', en: 'to miss' }],
        },
        B1: {
          scene: { es: 'La terminal va a ser renovada y concesionada a una empresa privada. Los vendedores ambulantes como Doña Norma no están en los planos: en su lugar habrá locales de cadenas de comida. La empresa les ofrece alquilar un local, pero cuesta diez veces lo que ganan en un mes.', en: 'The terminal is going to be renovated and handed to a private company. Street vendors like Doña Norma aren’t in the plans: instead there will be fast food chain outlets. The company offers to rent them a unit, but it costs ten times what they earn in a month.' },
          opener: { es: 'Dicen que la terminal va a quedar moderna, limpia, segura. Me parece bien. Pero los viajeros no vienen a la terminal por las cadenas: vienen porque tienen que viajar. Y lo que recuerdan después no es el local de hamburguesas, es la señora que les dio un mate cuando el bus se atrasó.', en: 'They say the terminal will be modern, clean, safe. That’s fine by me. But travellers don’t come to the terminal for the chains: they come because they have to travel. And what they remember later isn’t the burger outlet, it’s the lady who gave them a mate when the coach was late.' },
          decide: {
            ask: { es: 'Los vendedores se reúnen para decidir qué hacer. ¿Qué propones?', en: 'The vendors meet to decide what to do. What do you propose?' },
            options: [
              { say: { es: 'Formar una cooperativa y alquilar un local entre todos.', en: 'Form a cooperative and rent one unit together.' }, then: { es: 'Doce vendedores se juntan. El local se llama «Sabores de la Terminal» y tiene fila desde el primer día.', en: 'Twelve vendors join together. The unit is called “Flavours of the Terminal” and has a queue from day one.' } },
              { say: { es: 'Juntar firmas de viajeros para exigir un espacio gratuito.', en: 'Collect travellers’ signatures to demand a free space.' }, then: { es: 'En una semana juntan veinte mil firmas. La empresa acepta tres puestos, pero solo para los más antiguos.', en: 'In a week they collect twenty thousand signatures. The company accepts three stalls, but only for the longest-serving.' } },
              { say: { es: 'Aceptar que se termina una época y buscar otro lugar.', en: 'Accept that an era is ending and look for another place.' }, then: { es: 'Norma empieza a vender por encargo desde su casa. Los choferes pasan a buscar los alfajores antes de cada viaje.', en: 'Norma starts selling to order from home. The drivers pick up alfajores before each trip.' } },
            ],
          },
          twist: { es: 'Una de las cadenas que va a abrir en la terminal le ofrece a Norma comprarle la receta y poner su cara en el envoltorio.', en: 'One of the chains opening in the terminal offers to buy Norma’s recipe and put her face on the wrapper.' },
          questions: [
            { q: { es: '¿Qué se gana y qué se pierde cuando un espacio público se privatiza?', en: 'What is gained and what is lost when a public space is privatised?' }, help: { es: 'Se gana… pero se pierde… / Depende de cómo…', en: 'You gain… but you lose… / It depends how…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Fue para mejor?', en: 'Was it for the better?' }] },
            { q: { es: '¿Los vendedores ambulantes deberían tener un lugar garantizado?', en: 'Should street vendors have a guaranteed place?' }, help: { es: 'Creo que sí, porque… / No necesariamente, porque…', en: 'I think so, because… / Not necessarily, because…' }, follow: [{ es: '¿Cómo funciona en tu país?', en: 'How does it work in your country?' }, { es: '¿Les compras?', en: 'Do you buy from them?' }] },
            { q: { es: '¿Qué recuerdas de un viaje: el lugar o las personas?', en: 'What do you remember of a trip: the place or the people?' }, help: { es: 'Normalmente recuerdo… porque…', en: 'Usually I remember… because…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Alguien te cambió un viaje?', en: 'Did someone change a trip for you?' }] },
            { q: { es: '¿Debería Norma vender su receta y su imagen a la cadena?', en: 'Should Norma sell her recipe and image to the chain?' }, help: { es: 'Yo creo que debería… porque… / En su lugar, yo…', en: 'I think she should… because… / In her place, I…' }, follow: [{ es: '¿Qué pensarían los otros vendedores?', en: 'What would the other vendors think?' }, { es: '¿Qué pondrías en el contrato?', en: 'What would you put in the contract?' }] },
          ],
          words: [{ es: 'concesionar', en: 'to award a concession' }, { es: 'el vendedor ambulante', en: 'the street vendor' }, { es: 'los planos', en: 'the plans (building)' }, { es: 'por encargo', en: 'to order' }, { es: 'el envoltorio', en: 'the wrapper' }],
        },
      },
    },
  ],
};
