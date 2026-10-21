// California · Los Ángeles. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own: same place and people, different
// situations, decisions and questions. English is a natural translation.
export default {
  id: 'california',
  spots: [
    // ------------------------------------------------------------ Venice Beach
    {
      id: 'venice',
      name: { es: 'Venice Beach', en: 'Venice Beach' },
      who: { name: 'Lupita', role: { es: 'profesora de patinaje', en: 'roller-skating teacher' } },
      levels: {
        A0: {
          scene: { es: 'Es Venice Beach. Hay sol, palmeras y mucha gente. Lupita patina. Tiene patines rosas.', en: 'It is Venice Beach. There is sun, palm trees and lots of people. Lupita skates. She has pink skates.' },
          opener: { es: '¡Hola! Soy Lupita. Enseño a patinar. ¿Tú patinas?', en: 'Hi! I am Lupita. I teach skating. Do you skate?' },
          decide: {
            ask: { es: 'Lupita te da unos patines. ¿Qué haces?', en: 'Lupita gives you some skates. What do you do?' },
            options: [
              { say: { es: 'Me pongo los patines.', en: 'I put on the skates.' }, then: { es: 'Das tres pasos… ¡y te caes! Lupita ríe y te ayuda.', en: 'You take three steps… and you fall! Lupita laughs and helps you.' } },
              { say: { es: 'No, gracias. Miro.', en: 'No, thanks. I watch.' }, then: { es: 'Lupita baila con los patines. ¡Qué bien patina!', en: 'Lupita dances on her skates. She skates so well!' } },
              { say: { es: 'Prefiero la bicicleta.', en: 'I prefer the bike.' }, then: { es: 'Lupita dice: «Allí alquilan bicicletas». Señala una tienda.', en: 'Lupita says: “They rent bikes over there.” She points to a shop.' } },
            ],
          },
          twist: { es: '¡Un hombre con una serpiente grande pasa al lado! ¿Qué dices?', en: 'A man with a big snake walks by! What do you say?' },
          questions: [
            { q: { es: '¿Sabes patinar?', en: 'Can you skate?' }, help: { es: 'Sí, sé patinar. / No, no sé. / Un poco.', en: 'Yes, I can skate. / No, I can’t. / A little.' }, follow: [{ es: '¿Sabes nadar?', en: 'Can you swim?' }, { es: '¿Sabes montar en bicicleta?', en: 'Can you ride a bike?' }] },
            { q: { es: '¿Haces deporte?', en: 'Do you do sports?' }, help: { es: 'Sí, juego al fútbol. / Corro. / No, no hago deporte.', en: 'Yes, I play soccer. / I run. / No, I don’t do sports.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Hace calor en tu ciudad?', en: 'Is it hot in your city?' }, help: { es: 'Sí, hace mucho calor. / No, hace frío.', en: 'Yes, it is very hot. / No, it is cold.' }, follow: [{ es: '¿Hay sol hoy?', en: 'Is it sunny today?' }, { es: '¿Prefieres el calor o el frío?', en: 'Do you prefer heat or cold?' }] },
            { q: { es: '¿Tienes miedo de los animales grandes?', en: 'Are you afraid of big animals?' }, help: { es: 'Sí, tengo miedo. / No, me gustan.', en: 'Yes, I am afraid. / No, I like them.' }, follow: [{ es: '¿Y las serpientes?', en: 'And snakes?' }, { es: '¿Qué animal tienes en casa?', en: 'What animal do you have at home?' }] },
          ],
          words: [
            { es: 'patinar', en: 'to skate' }, { es: 'los patines', en: 'the skates' }, { es: 'la palmera', en: 'the palm tree' },
            { es: 'caerse', en: 'to fall down' }, { es: 'la bicicleta', en: 'the bike' }, { es: 'la serpiente', en: 'the snake' },
          ],
        },
        A1: {
          scene: { es: 'El paseo de Venice Beach un domingo. Hay músicos, artistas, gente que hace pesas al aire libre y patinadores que bailan. Lupita da clases de patinaje aquí todos los fines de semana.', en: 'The Venice Beach boardwalk on a Sunday. There are musicians, artists, people lifting weights outdoors and skaters who dance. Lupita teaches skating here every weekend.' },
          opener: { es: 'Mis padres son de Guadalajara, pero yo nací aquí, en Los Ángeles. Aprendí a patinar a los cuarenta años, ¡imagínate! Nunca es tarde. ¿Qué quieres aprender tú?', en: 'My parents are from Guadalajara, but I was born here, in Los Angeles. I learned to skate at forty, imagine that! It’s never too late. What do you want to learn?' },
          decide: {
            ask: { es: 'Lupita te ofrece una clase gratis ahora mismo. Hace mucho calor. ¿Qué respondes?', en: 'Lupita offers you a free class right now. It’s very hot. What do you answer?' },
            options: [
              { say: { es: '¡Sí! Pero con casco y rodilleras.', en: 'Yes! But with a helmet and knee pads.' }, then: { es: 'Lupita aplaude: «Así me gusta. Primero, la seguridad».', en: 'Lupita claps: “That’s what I like. Safety first.”' } },
              { say: { es: 'Mejor mañana por la mañana, con menos calor.', en: 'Better tomorrow morning, when it’s cooler.' }, then: { es: '«Perfecto. A las ocho no hay nadie y el mar está precioso».', en: '“Perfect. At eight there’s nobody here and the sea is beautiful.”' } },
              { say: { es: 'Prefiero mirar a los patinadores que bailan.', en: 'I’d rather watch the skaters dancing.' }, then: { es: 'Lupita pone música y baila para ti. La gente forma un círculo.', en: 'Lupita puts on music and dances for you. People form a circle.' } },
            ],
          },
          twist: { es: 'Un chico te ofrece «una foto con una estrella de cine» por diez dólares. La «estrella» lleva una peluca muy rara.', en: 'A guy offers you “a photo with a movie star” for ten dollars. The “star” is wearing a very strange wig.' },
          questions: [
            { q: { es: 'Lupita aprendió a patinar a los cuarenta. ¿Qué quieres aprender tú este año?', en: 'Lupita learned to skate at forty. What do you want to learn this year?' }, help: { es: 'Este año quiero aprender a… porque…', en: 'This year I want to learn to… because…' }, follow: [{ es: '¿Dónde puedes aprenderlo?', en: 'Where can you learn it?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Qué haces normalmente los domingos?', en: 'What do you usually do on Sundays?' }, help: { es: 'Los domingos normalmente… y después…', en: 'On Sundays I usually… and then…' }, follow: [{ es: '¿Sales o te quedas en casa?', en: 'Do you go out or stay home?' }, { es: '¿Comes con tu familia?', en: 'Do you eat with your family?' }] },
            { q: { es: '¿Prefieres hacer deporte solo o en grupo?', en: 'Do you prefer doing sports alone or in a group?' }, help: { es: 'Prefiero… porque es más… / me gusta…', en: 'I prefer… because it’s more… / I like…' }, follow: [{ es: '¿Qué deporte miras en la televisión?', en: 'What sport do you watch on TV?' }, { es: '¿Vas al gimnasio?', en: 'Do you go to the gym?' }] },
            { q: { es: '¿Hay lugares con artistas en la calle en tu ciudad? ¿Cómo son?', en: 'Are there places with street artists in your city? What are they like?' }, help: { es: 'Sí, en… hay… / No, en mi ciudad no hay…', en: 'Yes, in… there are… / No, in my city there aren’t…' }, follow: [{ es: '¿Das dinero a los artistas?', en: 'Do you give money to the artists?' }, { es: '¿Te sacas fotos con ellos?', en: 'Do you take photos with them?' }] },
          ],
          words: [
            { es: 'el paseo', en: 'the boardwalk, the promenade' }, { es: 'el casco', en: 'the helmet' }, { es: 'las rodilleras', en: 'the knee pads' },
            { es: 'hacer pesas', en: 'to lift weights' }, { es: 'nacer', en: 'to be born' }, { es: 'la peluca', en: 'the wig' },
          ],
        },
        A2: {
          scene: { es: 'Lupita está sentada en un banco con una bolsa de hielo en el tobillo. Se cayó dando una clase. Sus alumnos se fueron y ella mira el mar, preocupada: sin clases no gana dinero.', en: 'Lupita is sitting on a bench with an ice pack on her ankle. She fell while teaching a class. Her students left and she looks at the sea, worried: without classes she doesn’t earn money.' },
          opener: { es: 'Veinte años sin caerme y hoy, delante de todos, ¡pum! Lo peor no es el dolor, es la vergüenza. ¿A ti te pasó algo así alguna vez, delante de mucha gente?', en: 'Twenty years without falling and today, in front of everyone, boom! The worst part isn’t the pain, it’s the embarrassment. Has something like that ever happened to you, in front of a lot of people?' },
          decide: {
            ask: { es: 'Lupita tiene una clase con diez niños dentro de una hora. ¿Qué le dices?', en: 'Lupita has a class with ten children in an hour. What do you tell her?' },
            options: [
              { say: { es: 'Que cancele y vaya al médico ahora.', en: 'To cancel and go to the doctor now.' }, then: { es: 'Lupita suspira y escribe a los padres. Una madre contesta: «¡Que te mejores! Los niños te hicieron un dibujo».', en: 'Lupita sighs and texts the parents. One mother replies: “Get well soon! The kids made you a drawing.”' } },
              { say: { es: 'Que dé la clase sentada, explicando con la voz.', en: 'To teach the class sitting down, explaining with her voice.' }, then: { es: 'Lupita duda: «¿Y si un niño se cae y no puedo ayudarlo?».', en: 'Lupita hesitates: “And what if a kid falls and I can’t help him?”' } },
              { say: { es: 'Que le pida ayuda a otra patinadora.', en: 'To ask another skater for help.' }, then: { es: 'Llama a su amiga Dee, que llega en diez minutos con su música y su energía.', en: 'She calls her friend Dee, who arrives in ten minutes with her music and her energy.' } },
            ],
          },
          twist: { es: 'Un hombre se acerca: grabó la caída y el vídeo ya tiene miles de visitas. Quiere saber si Lupita quiere aparecer en un programa de televisión.', en: 'A man comes over: he filmed the fall and the video already has thousands of views. He wants to know if Lupita wants to appear on a TV show.' },
          questions: [
            { q: { es: '¿Te pasó algo vergonzoso delante de mucha gente? ¿Cómo reaccionaste?', en: 'Has something embarrassing happened to you in front of a lot of people? How did you react?' }, help: { es: 'Una vez, en…, me… Todos… y yo…', en: 'Once, at…, I… Everyone… and I…' }, follow: [{ es: '¿Hoy te ríes de eso?', en: 'Do you laugh about it today?' }, { es: '¿Alguien te ayudó?', en: 'Did anyone help you?' }] },
            { q: { es: '¿Tuviste alguna vez una lesión? ¿Cómo pasó y cuánto tardaste en recuperarte?', en: 'Have you ever had an injury? How did it happen and how long did it take you to recover?' }, help: { es: 'Me rompí / me torcí… cuando… Tardé… en…', en: 'I broke / I twisted… when… It took me… to…' }, follow: [{ es: '¿Qué fue lo más difícil?', en: 'What was the hardest part?' }, { es: '¿Volviste a hacer esa actividad?', en: 'Did you go back to that activity?' }] },
            { q: { es: 'Compara un trabajo con horario fijo y un trabajo como el de Lupita.', en: 'Compare a job with fixed hours and a job like Lupita’s.' }, help: { es: 'Un trabajo fijo es más… pero el de Lupita es más… Lo malo es que…', en: 'A fixed job is more… but Lupita’s is more… The bad thing is that…' }, follow: [{ es: '¿Cuál prefieres tú?', en: 'Which do you prefer?' }, { es: '¿Qué pasa si te enfermas en cada uno?', en: 'What happens if you get sick in each one?' }] },
            { q: { es: '¿Viste alguna vez un vídeo viral de alguien que se cae? ¿Qué te pareció?', en: 'Have you ever seen a viral video of someone falling? What did you think of it?' }, help: { es: 'Sí, vi uno en el que… Me pareció… porque…', en: 'Yes, I saw one where… I thought it was… because…' }, follow: [{ es: '¿Te reíste?', en: 'Did you laugh?' }, { es: '¿Te gustaría ser viral? ¿Por qué?', en: 'Would you like to go viral? Why?' }] },
          ],
          words: [
            { es: 'el tobillo', en: 'the ankle' }, { es: 'la vergüenza', en: 'embarrassment' }, { es: 'la caída', en: 'the fall' },
            { es: 'torcerse', en: 'to twist, to sprain' }, { es: 'recuperarse', en: 'to recover' }, { es: 'las visitas', en: 'the views (online)' },
          ],
        },
        B1: {
          scene: { es: 'Cada vez más creadores de contenido graban en el paseo. Algunos filman a la gente sin pedir permiso, incluso a niños o a personas sin hogar. Lupita y otros trabajadores del paseo quieren pedirle al ayuntamiento una norma.', en: 'More and more content creators film on the boardwalk. Some film people without asking permission, even children or people experiencing homelessness. Lupita and other boardwalk workers want to ask the city for a rule.' },
          opener: { es: 'Yo vivo de que la gente me vea, eso es verdad. Pero no es lo mismo actuar en un lugar público que ser el decorado del vídeo de otro. ¿Dónde está el límite entre lo público y lo privado en la calle?', en: 'I make a living from people seeing me, that’s true. But performing in a public place isn’t the same as being the backdrop of someone else’s video. Where is the line between public and private on the street?' },
          decide: {
            ask: { es: 'Tienes que ayudar a redactar la propuesta. ¿Qué norma propones?', en: 'You have to help draft the proposal. Which rule do you propose?' },
            options: [
              { say: { es: 'Pedir permiso antes de grabar a cualquier persona reconocible.', en: 'Ask permission before filming any recognizable person.' }, then: { es: 'Un creador protesta: «Entonces nadie podría grabar nada en una calle llena de gente».', en: 'A creator protests: “Then nobody could film anything on a crowded street.”' } },
              { say: { es: 'Libertad para grabar, pero prohibido monetizar vídeos con menores o personas vulnerables.', en: 'Freedom to film, but no monetizing videos with minors or vulnerable people.' }, then: { es: 'Lupita asiente. Un abogado del público pregunta quién decide quién es «vulnerable».', en: 'Lupita nods. A lawyer in the audience asks who decides who is “vulnerable.”' } },
              { say: { es: 'Zonas señalizadas: aquí se graba, aquí no.', en: 'Marked zones: filming allowed here, not there.' }, then: { es: 'Los artistas callejeros se miran: todos quieren estar en la zona con cámaras.', en: 'The street performers look at each other: they all want to be in the zone with cameras.' } },
            ],
          },
          twist: { es: 'En plena reunión, alguien enseña un vídeo de Lupita bailando que tiene millones de visitas. Ella nunca dio permiso, pero gracias a ese vídeo sus clases están llenas.', en: 'In the middle of the meeting, someone shows a video of Lupita dancing that has millions of views. She never gave permission, but thanks to that video her classes are full.' },
          questions: [
            { q: { es: '¿Debería ser obligatorio pedir permiso para grabar a alguien en un espacio público? ¿Por qué?', en: 'Should it be mandatory to ask permission to film someone in a public space? Why?' }, help: { es: 'Creo que sí / no, porque… Sin embargo, habría que distinguir entre…', en: 'I think so / not, because… However, you’d have to distinguish between…' }, follow: [{ es: '¿Y en el caso de un accidente o una injusticia?', en: 'And in the case of an accident or an injustice?' }, { es: '¿Qué dice la ley en tu país?', en: 'What does the law say in your country?' }] },
            { q: { es: '¿Es incoherente Lupita si se queja de los vídeos pero se beneficia de uno? ¿Cómo lo resolverías?', en: 'Is Lupita inconsistent if she complains about videos but benefits from one? How would you resolve it?' }, help: { es: 'No me parece incoherente porque… / Sí, un poco, ya que…', en: 'I don’t think it’s inconsistent because… / Yes, a bit, since…' }, follow: [{ es: '¿Se puede estar en contra de algo que te ayuda?', en: 'Can you be against something that helps you?' }, { es: '¿Qué harías tú con ese vídeo?', en: 'What would you do with that video?' }] },
            { q: { es: 'Si alguien te grabara sin permiso y el vídeo se hiciera viral, ¿qué harías?', en: 'If someone filmed you without permission and the video went viral, what would you do?' }, help: { es: 'Si me pasara, primero… y luego… Dependería de si…', en: 'If it happened to me, first I would… and then… It would depend on whether…' }, follow: [{ es: '¿Pedirías dinero?', en: 'Would you ask for money?' }, { es: '¿Y si el vídeo te hiciera quedar mal?', en: 'And if the video made you look bad?' }] },
            { q: { es: '¿Las redes sociales mejoran o empeoran la vida en los espacios públicos?', en: 'Do social media make life in public spaces better or worse?' }, help: { es: 'Por un lado… Por otro… En mi opinión, en general…', en: 'On the one hand… On the other… In my opinion, overall…' }, follow: [{ es: '¿Hay lugares que se estropearon por ser famosos en redes?', en: 'Are there places that were ruined by becoming famous on social media?' }, { es: '¿Grabas tú en lugares públicos?', en: 'Do you film in public places?' }] },
          ],
          words: [
            { es: 'el creador de contenido', en: 'the content creator' }, { es: 'el decorado', en: 'the backdrop, the set' }, { es: 'redactar', en: 'to draft, to write up' },
            { es: 'un menor', en: 'a minor' }, { es: 'beneficiarse de', en: 'to benefit from' }, { es: 'quedar mal', en: 'to look bad' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the food truck
    {
      id: 'food-truck',
      name: { es: 'El food truck', en: 'The food truck' },
      who: { name: 'Don Rigo', role: { es: 'dueño de un camión de tacos', en: 'taco truck owner' } },
      levels: {
        A0: {
          scene: { es: 'Es un camión de comida. Don Rigo vende tacos. Huele muy bien. Hay una fila de gente.', en: 'It is a food truck. Don Rigo sells tacos. It smells very good. There is a line of people.' },
          opener: { es: '¡Buenas! ¿Tienes hambre? Hay tacos de carne, de pollo y de verduras.', en: 'Hello! Are you hungry? There are beef, chicken and vegetable tacos.' },
          decide: {
            ask: { es: '¿Qué tacos pides?', en: 'Which tacos do you order?' },
            options: [
              { say: { es: 'Dos tacos de pollo, por favor.', en: 'Two chicken tacos, please.' }, then: { es: 'Don Rigo dice: «¡Muy buena elección!».', en: 'Don Rigo says: “Very good choice!”' } },
              { say: { es: 'Tacos de verduras, por favor.', en: 'Vegetable tacos, please.' }, then: { es: 'Los tacos son verdes, rojos y amarillos. ¡Qué bonitos!', en: 'The tacos are green, red and yellow. How pretty!' } },
              { say: { es: 'Uno de cada uno.', en: 'One of each.' }, then: { es: '¡Tres tacos! Don Rigo ríe: «¡Tienes mucha hambre!».', en: 'Three tacos! Don Rigo laughs: “You are very hungry!”' } },
            ],
          },
          twist: { es: '¡La salsa es muy picante! Tienes la cara roja. ¿Qué dices?', en: 'The salsa is very spicy! Your face is red. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la comida picante?', en: 'Do you like spicy food?' }, help: { es: 'Sí, me gusta mucho. / No, no me gusta. / Un poco.', en: 'Yes, I like it a lot. / No, I don’t like it. / A little.' }, follow: [{ es: '¿Comes chile?', en: 'Do you eat chili?' }, { es: '¿Bebes agua o leche con el picante?', en: 'Do you drink water or milk with spicy food?' }] },
            { q: { es: '¿Qué comes en la calle?', en: 'What do you eat in the street?' }, help: { es: 'Como… / No como en la calle.', en: 'I eat… / I don’t eat in the street.' }, follow: [{ es: '¿Es barato?', en: 'Is it cheap?' }, { es: '¿Comes de pie o sentado?', en: 'Do you eat standing up or sitting down?' }] },
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí, como carne. / No, soy vegetariano. / No, soy vegetariana.', en: 'Yes, I eat meat. / No, I am vegetarian.' }, follow: [{ es: '¿Comes pescado?', en: 'Do you eat fish?' }, { es: '¿Qué verduras te gustan?', en: 'What vegetables do you like?' }] },
            { q: { es: '¿A qué hora comes?', en: 'What time do you eat lunch?' }, help: { es: 'Como a la una. / Como a las tres.', en: 'I eat at one. / I eat at three.' }, follow: [{ es: '¿Comes en casa o fuera?', en: 'Do you eat at home or out?' }, { es: '¿Cocinas tú?', en: 'Do you cook?' }] },
          ],
          words: [
            { es: 'el camión', en: 'the truck' }, { es: 'la fila', en: 'the line' }, { es: 'el pollo', en: 'the chicken' },
            { es: 'las verduras', en: 'the vegetables' }, { es: 'picante', en: 'spicy' }, { es: 'tener hambre', en: 'to be hungry' },
          ],
        },
        A1: {
          scene: { es: 'Mediodía en una calle del Este de Los Ángeles. El camión de Don Rigo está siempre en la misma esquina. Él cocina, su hija Ana cobra y la radio toca rancheras.', en: 'Noon on a street in East Los Angeles. Don Rigo’s truck is always on the same corner. He cooks, his daughter Ana takes the money and the radio plays rancheras.' },
          opener: { es: 'Llevo veinte años en esta esquina. Los clientes son como mi familia: sé qué pide cada uno. Tú eres nuevo, ¿verdad? ¿Qué te traigo?', en: 'I’ve been on this corner for twenty years. The customers are like my family: I know what each one orders. You’re new, right? What can I get you?' },
          decide: {
            ask: { es: 'Don Rigo te pregunta: «¿Con todo?». No sabes qué es «todo». ¿Qué respondes?', en: 'Don Rigo asks you: “With everything?” You don’t know what “everything” is. What do you answer?' },
            options: [
              { say: { es: 'Sí, con todo. ¡Me arriesgo!', en: 'Yes, with everything. I’ll take the risk!' }, then: { es: 'Cebolla, cilantro, salsa verde y limón. Está buenísimo… y pica bastante.', en: 'Onion, cilantro, green salsa and lime. It’s delicious… and pretty spicy.' } },
              { say: { es: 'Perdón, ¿qué es «todo»?', en: 'Sorry, what’s “everything”?' }, then: { es: 'Ana te explica con paciencia y te da a probar cada salsa con una cuchara.', en: 'Ana patiently explains and lets you taste each salsa with a spoon.' } },
              { say: { es: 'Sin salsa, por favor. No como picante.', en: 'No salsa, please. I don’t eat spicy food.' }, then: { es: 'Don Rigo pone cara triste, pero sonríe: «La próxima vez, un poquito».', en: 'Don Rigo makes a sad face, but smiles: “Next time, just a little.”' } },
            ],
          },
          twist: { es: 'Se apaga el motor del camión y la plancha se enfría. Hay quince personas en la fila. Don Rigo te mira: «¿Sabes algo de motores?».', en: 'The truck’s engine dies and the griddle goes cold. There are fifteen people in line. Don Rigo looks at you: “Do you know anything about engines?”' },
          questions: [
            { q: { es: '¿Tienes un lugar donde te conocen y saben qué vas a pedir?', en: 'Do you have a place where they know you and what you’re going to order?' }, help: { es: 'Sí, en… siempre pido… / No, cambio mucho de lugar.', en: 'Yes, at… I always order… / No, I change places a lot.' }, follow: [{ es: '¿Desde cuándo vas?', en: 'Since when have you been going?' }, { es: '¿Por qué te gusta?', en: 'Why do you like it?' }] },
            { q: { es: '¿Qué comida típica de tu país recomiendas a un turista?', en: 'Which typical food from your country do you recommend to a tourist?' }, help: { es: 'Recomiendo… Es… y lleva…', en: 'I recommend… It’s… and it has…' }, follow: [{ es: '¿Sabes prepararla?', en: 'Do you know how to make it?' }, { es: '¿Cuándo se come?', en: 'When is it eaten?' }] },
            { q: { es: 'Don Rigo trabaja con su hija. ¿Te gustaría trabajar con tu familia?', en: 'Don Rigo works with his daughter. Would you like to work with your family?' }, help: { es: 'Sí, me gustaría porque… / No, prefiero no, porque…', en: 'Yes, I’d like to because… / No, I’d rather not, because…' }, follow: [{ es: '¿Con quién de tu familia trabajarías?', en: 'Who in your family would you work with?' }, { es: '¿Quién sería el jefe?', en: 'Who would be the boss?' }] },
            { q: { es: '¿Qué música escuchas cuando cocinas o trabajas?', en: 'What music do you listen to when you cook or work?' }, help: { es: 'Escucho… / No escucho música, prefiero el silencio.', en: 'I listen to… / I don’t listen to music, I prefer silence.' }, follow: [{ es: '¿Cantas?', en: 'Do you sing?' }, { es: '¿Qué canción te pone de buen humor?', en: 'What song puts you in a good mood?' }] },
          ],
          words: [
            { es: 'la esquina', en: 'the corner' }, { es: 'cobrar', en: 'to charge, to take the money' }, { es: 'con todo', en: 'with everything' },
            { es: 'la cebolla', en: 'the onion' }, { es: 'la plancha', en: 'the griddle' }, { es: 'el motor', en: 'the engine' },
          ],
        },
        A2: {
          scene: { es: 'Hoy hay inspección sanitaria. Una inspectora revisa el camión con una lista. Don Rigo está nervioso: en veinte años nunca tuvo un problema, pero esta mañana se rompió la nevera.', en: 'Today there’s a health inspection. An inspector goes through the truck with a checklist. Don Rigo is nervous: in twenty years he never had a problem, but this morning the fridge broke.' },
          opener: { es: 'Cuando empecé, cocinaba en mi casa y vendía tacos en una mesita, sin permiso. Una vez la policía me quitó todo. Lloré esa noche, pero al día siguiente volví. ¿Tú empezaste alguna vez algo desde cero?', en: 'When I started, I cooked at home and sold tacos on a little table, without a permit. Once the police took everything from me. I cried that night, but the next day I came back. Have you ever started something from scratch?' },
          decide: {
            ask: { es: 'La inspectora pregunta por la temperatura de la carne. Don Rigo te mira. ¿Qué le aconsejas?', en: 'The inspector asks about the temperature of the meat. Don Rigo looks at you. What do you advise him?' },
            options: [
              { say: { es: 'Decir la verdad sobre la nevera y tirar la carne.', en: 'Tell the truth about the fridge and throw away the meat.' }, then: { es: 'La inspectora lo apunta, pero le agradece la honestidad. Hoy solo venderá tacos de verduras.', en: 'The inspector writes it down, but thanks him for his honesty. Today he’ll only sell vegetable tacos.' } },
              { say: { es: 'Mostrar el hielo que compró por la mañana.', en: 'Show the ice he bought in the morning.' }, then: { es: 'La inspectora mide la temperatura: está justo en el límite. Le da una advertencia.', en: 'The inspector measures the temperature: it’s right at the limit. She gives him a warning.' } },
              { say: { es: 'Cerrar hoy y arreglar la nevera.', en: 'Close today and fix the fridge.' }, then: { es: 'Los clientes protestan, pero Ana pone un cartel: «Mañana, tacos gratis para los primeros diez».', en: 'The customers complain, but Ana puts up a sign: “Tomorrow, free tacos for the first ten.”' } },
            ],
          },
          twist: { es: 'La inspectora termina, guarda la lista y pregunta, con una sonrisa: «¿Me pone tres de pastor para llevar? Mi madre es de Puebla».', en: 'The inspector finishes, puts away her checklist and asks, smiling: “Can I get three al pastor to go? My mother is from Puebla.”' },
          questions: [
            { q: { es: '¿Empezaste alguna vez algo desde cero? ¿Qué fue lo más difícil al principio?', en: 'Have you ever started something from scratch? What was the hardest part at first?' }, help: { es: 'Sí, cuando empecé a… Al principio… Después…', en: 'Yes, when I started to… At first… Later…' }, follow: [{ es: '¿Quién te ayudó?', en: 'Who helped you?' }, { es: '¿Pensaste en rendirte?', en: 'Did you think about giving up?' }] },
            { q: { es: '¿Cuál fue la mejor comida que probaste en la calle? ¿Dónde fue?', en: 'What’s the best street food you’ve ever tried? Where was it?' }, help: { es: 'La mejor fue… en… Era… y tenía…', en: 'The best was… in… It was… and it had…' }, follow: [{ es: '¿Cuánto costó?', en: 'How much did it cost?' }, { es: '¿Volviste?', en: 'Did you go back?' }] },
            { q: { es: '¿Alguna vez dijiste la verdad aunque te perjudicaba? ¿Qué pasó?', en: 'Have you ever told the truth even though it hurt you? What happened?' }, help: { es: 'Una vez… y aunque podía mentir, dije que… Al final…', en: 'Once… and even though I could lie, I said that… In the end…' }, follow: [{ es: '¿Te arrepientes?', en: 'Do you regret it?' }, { es: '¿Cuándo es mejor no decir toda la verdad?', en: 'When is it better not to tell the whole truth?' }] },
            { q: { es: 'Compara comer en un camión de comida y en un restaurante.', en: 'Compare eating at a food truck and at a restaurant.' }, help: { es: 'En un camión es más… pero en un restaurante… Yo prefiero…', en: 'At a truck it’s more… but at a restaurant… I prefer…' }, follow: [{ es: '¿Dónde comiste la última vez fuera de casa?', en: 'Where did you last eat out?' }, { es: '¿Hay camiones de comida en tu ciudad?', en: 'Are there food trucks in your city?' }] },
          ],
          words: [
            { es: 'la inspección sanitaria', en: 'the health inspection' }, { es: 'la nevera', en: 'the fridge' }, { es: 'el permiso', en: 'the permit' },
            { es: 'desde cero', en: 'from scratch' }, { es: 'para llevar', en: 'to go, takeout' }, { es: 'rendirse', en: 'to give up' },
          ],
        },
        B1: {
          scene: { es: 'Ana quiere cambiar el menú: tacos veganos, pedidos por aplicación y un segundo camión en una zona de oficinas. Don Rigo dice que la receta de su madre no se toca. Esta noche discuten en la cocina del camión.', en: 'Ana wants to change the menu: vegan tacos, app orders and a second truck in an office district. Don Rigo says his mother’s recipe is not to be touched. Tonight they’re arguing in the truck’s kitchen.' },
          opener: { es: 'Mi hija estudió negocios y tiene buenas ideas, no digo que no. Pero si todo cambia, ¿qué queda de nosotros? La gente viene por el sabor de siempre. ¿Se puede crecer sin perder lo que te hace especial?', en: 'My daughter studied business and she has good ideas, I’m not saying she doesn’t. But if everything changes, what’s left of us? People come for the same old flavor. Can you grow without losing what makes you special?' },
          decide: {
            ask: { es: 'Los dos te piden que decidas el primer cambio. ¿Cuál eliges?', en: 'They both ask you to decide on the first change. Which one do you choose?' },
            options: [
              { say: { es: 'Añadir un taco vegano, pero mantener intacta la receta original.', en: 'Add a vegan taco, but keep the original recipe intact.' }, then: { es: 'Don Rigo gruñe… y pregunta qué lleva un taco vegano «que valga la pena».', en: 'Don Rigo grumbles… and asks what goes into a vegan taco “that’s worth it.”' } },
              { say: { es: 'Probar la aplicación tres meses y medir si llegan clientes nuevos.', en: 'Try the app for three months and measure whether new customers come.' }, then: { es: 'Ana ya tiene una hoja de cálculo preparada. Su padre la mira con una mezcla de orgullo y miedo.', en: 'Ana already has a spreadsheet ready. Her father looks at her with a mix of pride and fear.' } },
              { say: { es: 'Ningún cambio hasta que Ana aprenda todas las recetas de su abuela.', en: 'No changes until Ana learns all her grandmother’s recipes.' }, then: { es: 'Ana se cruza de brazos: «Las sé desde los doce años, papá».', en: 'Ana crosses her arms: “I’ve known them since I was twelve, Dad.”' } },
            ],
          },
          twist: { es: 'Llega un cliente de toda la vida con una noticia: van a construir una estación de tren en esa esquina y el camión tendrá que moverse en seis meses, quieran o no.', en: 'A lifelong customer arrives with news: they’re going to build a train station on that corner and the truck will have to move in six months, like it or not.' },
          questions: [
            { q: { es: '¿Se puede crecer sin perder la esencia? Da un ejemplo de una empresa, un lugar o una persona.', en: 'Can you grow without losing your essence? Give an example of a company, a place or a person.' }, help: { es: 'Creo que sí / no. Por ejemplo,… empezó… y ahora…', en: 'I think so / not. For example,… started… and now…' }, follow: [{ es: '¿Qué tienen en común los que lo consiguen?', en: 'What do those who succeed have in common?' }, { es: '¿Te gustó más algo antes de hacerse famoso?', en: 'Did you like something better before it became famous?' }] },
            { q: { es: 'En un negocio familiar, ¿quién debería tener la última palabra: la generación que lo creó o la que lo va a continuar?', en: 'In a family business, who should have the final say: the generation that created it or the one that will carry it on?' }, help: { es: 'A mi modo de ver… porque… Lo ideal sería que…', en: 'The way I see it… because… Ideally…' }, follow: [{ es: '¿Conoces un negocio familiar que cambió de manos?', en: 'Do you know a family business that changed hands?' }, { es: '¿Trabajarías para tus padres?', en: 'Would you work for your parents?' }] },
            { q: { es: 'Si tuvieras que mover tu vida o tu trabajo por algo que no puedes controlar, ¿cómo lo afrontarías?', en: 'If you had to move your life or your work because of something you can’t control, how would you face it?' }, help: { es: 'Primero intentaría… Después… Creo que lo más difícil sería…', en: 'First I’d try to… Then… I think the hardest part would be…' }, follow: [{ es: '¿Te ha pasado algo parecido?', en: 'Has something similar happened to you?' }, { es: '¿Es mejor resistirse o adaptarse?', en: 'Is it better to resist or adapt?' }] },
            { q: { es: '¿Las recetas tradicionales deberían cambiar con los tiempos (veganas, sin gluten…) o es mejor respetarlas como son?', en: 'Should traditional recipes change with the times (vegan, gluten-free…) or is it better to respect them as they are?' }, help: { es: 'Depende de… Por un lado,… pero por otro,…', en: 'It depends on… On the one hand,… but on the other,…' }, follow: [{ es: '¿Qué plato de tu país nadie debería cambiar?', en: 'Which dish from your country should nobody change?' }, { es: '¿Probaste alguna versión moderna de un plato clásico?', en: 'Have you tried a modern version of a classic dish?' }] },
          ],
          words: [
            { es: 'el negocio familiar', en: 'the family business' }, { es: 'la receta', en: 'the recipe' }, { es: 'el pedido', en: 'the order' },
            { es: 'gruñir', en: 'to grumble' }, { es: 'la hoja de cálculo', en: 'the spreadsheet' }, { es: 'afrontar', en: 'to face, to deal with' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the creative studio
    {
      id: 'estudio',
      name: { es: 'El estudio creativo', en: 'The creative studio' },
      who: { name: 'Ellie', role: { es: 'animadora', en: 'animator' } },
      levels: {
        A0: {
          scene: { es: 'Es un estudio de dibujo. Hay ordenadores, papeles y colores. Ellie dibuja personajes para películas.', en: 'It is a drawing studio. There are computers, papers and colors. Ellie draws characters for movies.' },
          opener: { es: '¡Hola! Soy Ellie. Dibujo personajes. Mira: es un gato azul. ¿Dibujas tú?', en: 'Hi! I am Ellie. I draw characters. Look: it is a blue cat. Do you draw?' },
          decide: {
            ask: { es: 'Ellie dice: «¿De qué color es el gato?». ¿Qué dices?', en: 'Ellie says: “What color is the cat?” What do you say?' },
            options: [
              { say: { es: 'Es verde.', en: 'It is green.' }, then: { es: 'Ellie pinta el gato de verde. ¡Es muy divertido!', en: 'Ellie paints the cat green. It is very funny!' } },
              { say: { es: 'Es negro y blanco.', en: 'It is black and white.' }, then: { es: 'Ellie dice: «¡Elegante!».', en: 'Ellie says: “Elegant!”' } },
              { say: { es: 'Es de muchos colores.', en: 'It is many colors.' }, then: { es: 'Ahora el gato es un arcoíris. Ellie aplaude.', en: 'Now the cat is a rainbow. Ellie claps.' } },
            ],
          },
          twist: { es: '¡El ordenador se apaga! El dibujo no está. ¿Qué dices?', en: 'The computer turns off! The drawing is gone. What do you say?' },
          questions: [
            { q: { es: '¿Dibujas bien?', en: 'Do you draw well?' }, help: { es: 'Sí, dibujo bien. / No, dibujo mal. / Un poco.', en: 'Yes, I draw well. / No, I draw badly. / A little.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Con lápiz o con ordenador?', en: 'With a pencil or a computer?' }] },
            { q: { es: '¿Cuál es tu película favorita?', en: 'What is your favorite movie?' }, help: { es: 'Mi película favorita es…', en: 'My favorite movie is…' }, follow: [{ es: '¿Es de dibujos animados?', en: 'Is it animated?' }, { es: '¿Ves películas en casa o en el cine?', en: 'Do you watch movies at home or at the movie theater?' }] },
            { q: { es: '¿Usas el ordenador cada día?', en: 'Do you use the computer every day?' }, help: { es: 'Sí, uso el ordenador cada día. / No, uso el teléfono.', en: 'Yes, I use the computer every day. / No, I use my phone.' }, follow: [{ es: '¿Cuántas horas?', en: 'How many hours?' }, { es: '¿Para trabajar o para jugar?', en: 'For work or for fun?' }] },
            { q: { es: '¿Qué animal dibujas?', en: 'What animal do you draw?' }, help: { es: 'Dibujo un perro / un pájaro / un pez.', en: 'I draw a dog / a bird / a fish.' }, follow: [{ es: '¿Es grande o pequeño?', en: 'Is it big or small?' }, { es: '¿Cómo se llama?', en: 'What is its name?' }] },
          ],
          words: [
            { es: 'dibujar', en: 'to draw' }, { es: 'el personaje', en: 'the character' }, { es: 'el ordenador', en: 'the computer' },
            { es: 'la película', en: 'the movie' }, { es: 'el color', en: 'the color' }, { es: 'apagarse', en: 'to turn off' },
          ],
        },
        A1: {
          scene: { es: 'Un estudio de animación en Burbank, cerca de los grandes estudios de cine. Hay pizarras llenas de bocetos, muñecos de plastilina y café frío en todas las mesas. Ellie trabaja en una serie para niños.', en: 'An animation studio in Burbank, near the big film studios. There are whiteboards full of sketches, clay figures and cold coffee on every desk. Ellie is working on a children’s series.' },
          opener: { es: 'Hoy tenemos un problema: el personaje principal no tiene nombre. Es una tortuga que quiere ser bombera. ¿Cómo la llamarías tú?', en: 'We have a problem today: the main character has no name. She’s a turtle who wants to be a firefighter. What would you call her?' },
          decide: {
            ask: { es: 'Ellie necesita decidir el color de la tortuga antes de las cinco. ¿Qué propones?', en: 'Ellie needs to decide the turtle’s color before five. What do you suggest?' },
            options: [
              { say: { es: 'Verde clásica, como las tortugas de verdad.', en: 'Classic green, like real turtles.' }, then: { es: '«Seguro y fácil», dice Ellie. «Pero no destaca mucho…».', en: '“Safe and easy,” says Ellie. “But it doesn’t stand out much…”' } },
              { say: { es: 'Roja, como un camión de bomberos.', en: 'Red, like a fire truck.' }, then: { es: 'Ellie la pinta en un minuto. Todo el equipo dice «¡oooh!».', en: 'Ellie paints her in a minute. The whole team says “ooooh!”' } },
              { say: { es: 'Que los niños voten.', en: 'Let the kids vote.' }, then: { es: 'Ellie llama a su sobrina por videollamada. La niña grita: «¡Morada con estrellas!».', en: 'Ellie video-calls her niece. The girl shouts: “Purple with stars!”' } },
            ],
          },
          twist: { es: 'Entra la directora con una noticia: el canal quiere que la tortuga hable también en español. Ellie te mira: «¿Tú la doblarías?».', en: 'The director walks in with news: the channel wants the turtle to speak Spanish too. Ellie looks at you: “Would you voice her?”' },
          questions: [
            { q: { es: '¿Cómo llamarías a una tortuga que quiere ser bombera? ¿Por qué?', en: 'What would you call a turtle who wants to be a firefighter? Why?' }, help: { es: 'La llamaría… porque es…', en: 'I’d call her… because she’s…' }, follow: [{ es: '¿Qué otro animal sería un buen bombero?', en: 'What other animal would make a good firefighter?' }, { es: '¿Qué querías ser de pequeño?', en: 'What did you want to be as a child?' }] },
            { q: { es: '¿Qué dibujos animados veías de niño o de niña?', en: 'What cartoons did you watch as a child?' }, help: { es: 'Veía… Me gustaba porque…', en: 'I used to watch… I liked it because…' }, follow: [{ es: '¿Quién era tu personaje favorito?', en: 'Who was your favorite character?' }, { es: '¿Los ves todavía?', en: 'Do you still watch them?' }] },
            { q: { es: '¿Trabajas mejor por la mañana o por la noche? ¿Y con café?', en: 'Do you work better in the morning or at night? And with coffee?' }, help: { es: 'Trabajo mejor por… porque… Tomo… cafés al día.', en: 'I work better in the… because… I drink… coffees a day.' }, follow: [{ es: '¿Cómo es tu mesa de trabajo?', en: 'What’s your desk like?' }, { es: '¿Trabajas con música?', en: 'Do you work with music?' }] },
            { q: { es: '¿Es importante para ti tener un trabajo creativo?', en: 'Is having a creative job important to you?' }, help: { es: 'Sí, porque… / No mucho, para mí es más importante…', en: 'Yes, because… / Not much, for me it’s more important…' }, follow: [{ es: '¿Qué haces de creativo en tu tiempo libre?', en: 'What creative things do you do in your free time?' }, { es: '¿Conoces a alguien con un trabajo creativo?', en: 'Do you know someone with a creative job?' }] },
          ],
          words: [
            { es: 'el estudio de animación', en: 'the animation studio' }, { es: 'el boceto', en: 'the sketch' }, { es: 'la plastilina', en: 'modeling clay' },
            { es: 'la bombera', en: 'the firefighter (woman)' }, { es: 'destacar', en: 'to stand out' }, { es: 'doblar (una voz)', en: 'to dub, to voice' },
          ],
        },
        A2: {
          scene: { es: 'Son las once de la noche. Ellie sigue en el estudio. Mañana a las nueve presentan el primer capítulo a un canal importante y falta terminar la última escena. El resto del equipo ya se fue.', en: 'It’s eleven at night. Ellie is still at the studio. Tomorrow at nine they present the first episode to a big channel and the last scene still isn’t finished. The rest of the team has already left.' },
          opener: { es: 'Llevo catorce horas aquí. Cuando era estudiante, una noche sin dormir era una aventura. Ahora me duele la espalda solo de pensarlo. ¿Tú alguna vez trabajaste o estudiaste toda una noche?', en: 'I’ve been here fourteen hours. When I was a student, a sleepless night was an adventure. Now my back hurts just thinking about it. Have you ever worked or studied all night?' },
          decide: {
            ask: { es: 'A Ellie le quedan tres horas de trabajo. ¿Qué le aconsejas?', en: 'Ellie has three hours of work left. What do you advise her?' },
            options: [
              { say: { es: 'Que duerma cuatro horas y termine a las cinco de la mañana.', en: 'To sleep four hours and finish at five in the morning.' }, then: { es: 'Ellie pone tres alarmas. «Si no me despierto, la culpa es tuya», dice riendo.', en: 'Ellie sets three alarms. “If I don’t wake up, it’s your fault,” she says, laughing.' } },
              { say: { es: 'Que presente la escena sin terminar y lo explique.', en: 'To present the scene unfinished and explain.' }, then: { es: 'Ellie lo piensa: «En mi primer trabajo hice eso y salió bien… creo».', en: 'Ellie thinks about it: “At my first job I did that and it went well… I think.”' } },
              { say: { es: 'Que llame a un compañero para ayudarla.', en: 'To call a coworker to help her.' }, then: { es: 'Marcus contesta medio dormido, pero en veinte minutos está allí con dos cafés.', en: 'Marcus answers half asleep, but in twenty minutes he’s there with two coffees.' } },
            ],
          },
          twist: { es: 'El ordenador se reinicia para actualizarse. Ellie no guardó los últimos cuarenta minutos de trabajo.', en: 'The computer restarts to update. Ellie didn’t save the last forty minutes of work.' },
          questions: [
            { q: { es: '¿Trabajaste o estudiaste alguna vez toda una noche? ¿Valió la pena?', en: 'Have you ever worked or studied all night? Was it worth it?' }, help: { es: 'Sí, una vez antes de… Estuve despierto hasta… y al día siguiente…', en: 'Yes, once before… I stayed up until… and the next day…' }, follow: [{ es: '¿Qué tomaste para no dormirte?', en: 'What did you have to stay awake?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
            { q: { es: '¿Perdiste alguna vez un trabajo importante en el ordenador? ¿Qué hiciste?', en: 'Have you ever lost important work on the computer? What did you do?' }, help: { es: 'Sí, una vez se me borró… y tuve que…', en: 'Yes, once my… got deleted and I had to…' }, follow: [{ es: '¿Ahora haces copias de seguridad?', en: 'Do you make backups now?' }, { es: '¿Cómo reaccionaste?', en: 'How did you react?' }] },
            { q: { es: 'Compara cómo trabajabas cuando eras más joven y cómo trabajas ahora.', en: 'Compare how you used to work when you were younger and how you work now.' }, help: { es: 'Antes… pero ahora… Ahora soy más… y menos…', en: 'Before I used to… but now… Now I’m more… and less…' }, follow: [{ es: '¿Qué hábito bueno tienes ahora?', en: 'What good habit do you have now?' }, { es: '¿Qué echas de menos de antes?', en: 'What do you miss from before?' }] },
            { q: { es: '¿Pides ayuda fácilmente cuando no llegas a tiempo, o prefieres hacerlo todo solo?', en: 'Do you ask for help easily when you’re running late, or do you prefer to do everything yourself?' }, help: { es: 'Normalmente… porque… La última vez que pedí ayuda…', en: 'Usually I… because… The last time I asked for help…' }, follow: [{ es: '¿A quién llamas en una emergencia?', en: 'Who do you call in an emergency?' }, { es: '¿Te cuesta delegar?', en: 'Do you find it hard to delegate?' }] },
          ],
          words: [
            { es: 'el capítulo', en: 'the episode' }, { es: 'la escena', en: 'the scene' }, { es: 'la espalda', en: 'the back' },
            { es: 'guardar (un archivo)', en: 'to save (a file)' }, { es: 'la copia de seguridad', en: 'the backup' }, { es: 'valer la pena', en: 'to be worth it' },
          ],
        },
        B1: {
          scene: { es: 'El estudio está en crisis: una empresa ofrece hacer los fondos de la serie con inteligencia artificial en una semana y a una fracción del precio. Ellie dirige el equipo de fondos: seis personas.', en: 'The studio is in crisis: a company offers to make the series’ backgrounds with artificial intelligence in a week and for a fraction of the price. Ellie leads the background team: six people.' },
          opener: { es: 'No soy enemiga de la tecnología: llevo quince años dibujando con ordenador. Pero esas máquinas aprendieron mirando el trabajo de artistas que nunca dieron permiso. Y mi equipo tiene hipotecas. ¿Dónde pondrías tú el límite?', en: 'I’m not an enemy of technology: I’ve been drawing on a computer for fifteen years. But those machines learned by looking at the work of artists who never gave permission. And my team has mortgages. Where would you draw the line?' },
          decide: {
            ask: { es: 'La directora te pide una opinión de fuera antes de decidir. ¿Qué recomiendas?', en: 'The director asks you for an outside opinion before deciding. What do you recommend?' },
            options: [
              { say: { es: 'Usar la herramienta, pero solo como borrador, y que el equipo haga la versión final.', en: 'Use the tool, but only as a draft, and have the team make the final version.' }, then: { es: 'Ellie lo considera. Un compañero pregunta: «¿Y cuánto tardarán en decir que el borrador ya es suficiente?».', en: 'Ellie considers it. A colleague asks: “And how long until they say the draft is good enough?”' } },
              { say: { es: 'No usarla y anunciarlo como valor de la serie: «hecha a mano».', en: 'Don’t use it and promote that as a value of the series: “handmade.”' }, then: { es: 'La directora sonríe: «Bonito… ¿y quién paga la diferencia?».', en: 'The director smiles: “Lovely… and who pays the difference?”' } },
              { say: { es: 'Usarla solo si la empresa demuestra que pagó a los artistas con cuyas obras entrenó.', en: 'Use it only if the company proves it paid the artists whose work it trained on.' }, then: { es: 'La empresa no contesta a esa pregunta. Ese silencio dice mucho.', en: 'The company doesn’t answer that question. That silence says a lot.' } },
            ],
          },
          twist: { es: 'Uno de los miembros más jóvenes del equipo confiesa que ya usa esas herramientas en casa para practicar y que sin ellas no habría conseguido este trabajo.', en: 'One of the youngest members of the team confesses he already uses those tools at home to practice, and that without them he wouldn’t have gotten this job.' },
          questions: [
            { q: { es: '¿Qué trabajos creativos crees que la inteligencia artificial puede hacer bien, y cuáles no debería hacer?', en: 'Which creative jobs do you think artificial intelligence can do well, and which shouldn’t it do?' }, help: { es: 'Creo que puede… pero no debería… porque…', en: 'I think it can… but it shouldn’t… because…' }, follow: [{ es: '¿Notarías la diferencia en una película?', en: 'Would you notice the difference in a movie?' }, { es: '¿Pagarías más por algo hecho a mano?', en: 'Would you pay more for something handmade?' }] },
            { q: { es: 'Si tu trabajo pudiera hacerlo una máquina más barata, ¿qué argumentos usarías para defenderlo?', en: 'If a cheaper machine could do your job, what arguments would you use to defend it?' }, help: { es: 'Argumentaría que… Además, una máquina no puede…', en: 'I’d argue that… Besides, a machine can’t…' }, follow: [{ es: '¿Aprenderías a usar esa máquina?', en: 'Would you learn to use that machine?' }, { es: '¿Qué parte de tu trabajo te gustaría automatizar?', en: 'Which part of your job would you like to automate?' }] },
            { q: { es: '¿Es justo que una herramienta aprenda del trabajo de artistas sin pagarles? ¿Cómo debería regularse?', en: 'Is it fair for a tool to learn from artists’ work without paying them? How should it be regulated?' }, help: { es: 'Me parece… Debería haber una ley que… para que…', en: 'I think it’s… There should be a law that… so that…' }, follow: [{ es: '¿Es diferente de un estudiante que copia a un maestro?', en: 'Is it different from a student who copies a master?' }, { es: '¿Quién es el autor de una imagen hecha con IA?', en: 'Who is the author of an image made with AI?' }] },
            { q: { es: '¿Qué le dirías al compañero joven? ¿Tiene razón en algo?', en: 'What would you say to the young colleague? Is he right about anything?' }, help: { es: 'Le diría que… Tiene razón en que…, pero…', en: 'I’d tell him that… He’s right that…, but…' }, follow: [{ es: '¿Las nuevas generaciones ven la tecnología de otra manera?', en: 'Do new generations see technology differently?' }, { es: '¿Usas tú herramientas así? ¿Para qué?', en: 'Do you use tools like that? What for?' }] },
          ],
          words: [
            { es: 'los fondos', en: 'the backgrounds' }, { es: 'la hipoteca', en: 'the mortgage' }, { es: 'el borrador', en: 'the draft' },
            { es: 'hecho a mano', en: 'handmade' }, { es: 'entrenar (un modelo)', en: 'to train (a model)' }, { es: 'regular', en: 'to regulate' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the residential street
    {
      id: 'barrio',
      name: { es: 'La calle residencial', en: 'The residential street' },
      who: { name: 'Don Ernesto', role: { es: 'vecino jubilado', en: 'retired neighbor' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con casas bajas. Hay jardines y coches. Don Ernesto riega sus plantas. Es mayor y amable.', en: 'It is a street with low houses. There are gardens and cars. Don Ernesto waters his plants. He is old and kind.' },
          opener: { es: '¡Buenos días! Soy Ernesto. Esta es mi casa. ¿Dónde vives tú?', en: 'Good morning! I am Ernesto. This is my house. Where do you live?' },
          decide: {
            ask: { es: 'Don Ernesto tiene muchos limones. ¿Qué dices?', en: 'Don Ernesto has a lot of lemons. What do you say?' },
            options: [
              { say: { es: '¿Me da un limón, por favor?', en: 'Can I have a lemon, please?' }, then: { es: 'Te da cinco limones. «¡Para limonada!».', en: 'He gives you five lemons. “For lemonade!”' } },
              { say: { es: '¡Qué árbol tan bonito!', en: 'What a pretty tree!' }, then: { es: 'Don Ernesto sonríe: «Tiene cuarenta años».', en: 'Don Ernesto smiles: “It is forty years old.”' } },
              { say: { es: 'No me gustan los limones.', en: 'I don’t like lemons.' }, then: { es: 'Don Ernesto ríe: «¿Y las naranjas?».', en: 'Don Ernesto laughs: “And oranges?”' } },
            ],
          },
          twist: { es: '¡El agua sale muy fuerte y te moja! ¿Qué dices?', en: 'The water comes out very strong and gets you wet! What do you say?' },
          questions: [
            { q: { es: '¿Vives en una casa o en un apartamento?', en: 'Do you live in a house or an apartment?' }, help: { es: 'Vivo en una casa. / Vivo en un apartamento.', en: 'I live in a house. / I live in an apartment.' }, follow: [{ es: '¿Es grande o pequeño?', en: 'Is it big or small?' }, { es: '¿Tiene jardín?', en: 'Does it have a garden?' }] },
            { q: { es: '¿Tienes plantas o árboles?', en: 'Do you have plants or trees?' }, help: { es: 'Tengo… plantas. / No tengo.', en: 'I have… plants. / I don’t have any.' }, follow: [{ es: '¿Riegas tus plantas?', en: 'Do you water your plants?' }, { es: '¿Cuál es tu flor favorita?', en: 'What is your favorite flower?' }] },
            { q: { es: '¿Conoces a tus vecinos?', en: 'Do you know your neighbors?' }, help: { es: 'Sí, conozco a… / No, no los conozco.', en: 'Yes, I know… / No, I don’t know them.' }, follow: [{ es: '¿Son simpáticos?', en: 'Are they nice?' }, { es: '¿Hablas con ellos?', en: 'Do you talk to them?' }] },
            { q: { es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, help: { es: 'Me gustan las naranjas / las manzanas…', en: 'I like oranges / apples…' }, follow: [{ es: '¿Bebes zumo?', en: 'Do you drink juice?' }, { es: '¿Comes fruta cada día?', en: 'Do you eat fruit every day?' }] },
          ],
          words: [
            { es: 'la casa', en: 'the house' }, { es: 'el jardín', en: 'the garden, the yard' }, { es: 'regar', en: 'to water' },
            { es: 'el limón', en: 'the lemon' }, { es: 'el vecino', en: 'the neighbor' }, { es: 'mojar', en: 'to get wet' },
          ],
        },
        A1: {
          scene: { es: 'Una calle tranquila del Valle de San Fernando. Casas de una planta, buzones en la acera y montañas secas al fondo. Don Ernesto vive aquí desde 1979. Hoy está pintando su valla de blanco.', en: 'A quiet street in the San Fernando Valley. One-story houses, mailboxes on the sidewalk and dry mountains in the background. Don Ernesto has lived here since 1979. Today he’s painting his fence white.' },
          opener: { es: 'Antes conocía a todos los vecinos. Ahora cambian cada dos años y casi no hablamos. Por eso saludo a todo el mundo. ¿Tú hablas con tus vecinos?', en: 'I used to know all the neighbors. Now they change every two years and we hardly talk. That’s why I say hello to everyone. Do you talk to your neighbors?' },
          decide: {
            ask: { es: 'Don Ernesto te ofrece una brocha: «¿Me ayudas diez minutos?». ¿Qué haces?', en: 'Don Ernesto offers you a brush: “Will you help me for ten minutes?” What do you do?' },
            options: [
              { say: { es: 'Sí, claro. ¿Dónde empiezo?', en: 'Sure. Where do I start?' }, then: { es: 'Pintas un trozo de valla. Don Ernesto te cuenta la historia de cada casa de la calle.', en: 'You paint a piece of the fence. Don Ernesto tells you the story of every house on the street.' } },
              { say: { es: 'Lo siento, voy con prisa.', en: 'Sorry, I’m in a hurry.' }, then: { es: '«No pasa nada. Aquí estaré mañana… y pasado», dice con una sonrisa.', en: '“No problem. I’ll be here tomorrow… and the day after,” he says with a smile.' } },
              { say: { es: 'Le ofrezco una limonada a cambio de una historia.', en: 'I offer him a lemonade in exchange for a story.' }, then: { es: 'Se sientan en el porche. Él cuenta cómo llegó de Sonora con veinte años.', en: 'You sit on the porch. He tells you how he arrived from Sonora at twenty.' } },
            ],
          },
          twist: { es: 'La vecina de enfrente sale corriendo: su gato subió al techo y no puede bajar. Don Ernesto ya está buscando la escalera.', en: 'The neighbor across the street runs out: her cat climbed onto the roof and can’t get down. Don Ernesto is already looking for the ladder.' },
          questions: [
            { q: { es: '¿Cuánto tiempo llevas viviendo en tu casa? ¿Te gusta tu calle?', en: 'How long have you been living in your home? Do you like your street?' }, help: { es: 'Vivo allí desde… Me gusta porque… / No me gusta porque…', en: 'I’ve lived there since… I like it because… / I don’t like it because…' }, follow: [{ es: '¿Qué hay cerca?', en: 'What is nearby?' }, { es: '¿Es tranquila o ruidosa?', en: 'Is it quiet or noisy?' }] },
            { q: { es: '¿Ayudas a tus vecinos? ¿Ellos te ayudan a ti?', en: 'Do you help your neighbors? Do they help you?' }, help: { es: 'Sí, a veces les ayudo con… / No mucho, porque…', en: 'Yes, sometimes I help them with… / Not much, because…' }, follow: [{ es: '¿Les pides cosas: sal, herramientas…?', en: 'Do you borrow things from them: salt, tools…?' }, { es: '¿Tienes la llave de un vecino?', en: 'Do you have a neighbor’s key?' }] },
            { q: { es: '¿Prefieres vivir en el centro o en un barrio tranquilo?', en: 'Do you prefer living downtown or in a quiet neighborhood?' }, help: { es: 'Prefiero… porque… pero…', en: 'I prefer… because… but…' }, follow: [{ es: '¿Necesitas coche donde vives?', en: 'Do you need a car where you live?' }, { es: '¿Dónde vas a vivir en diez años?', en: 'Where are you going to live in ten years?' }] },
            { q: { es: '¿Qué tareas de casa te gustan y cuáles no?', en: 'Which household chores do you like and which don’t you?' }, help: { es: 'Me gusta… pero no me gusta nada…', en: 'I like… but I don’t like… at all' }, follow: [{ es: '¿Sabes pintar una pared?', en: 'Can you paint a wall?' }, { es: '¿Quién hace más tareas en tu casa?', en: 'Who does the most chores in your home?' }] },
          ],
          words: [
            { es: 'la valla', en: 'the fence' }, { es: 'el buzón', en: 'the mailbox' }, { es: 'la acera', en: 'the sidewalk' },
            { es: 'la brocha', en: 'the paintbrush' }, { es: 'el porche', en: 'the porch' }, { es: 'la escalera (de mano)', en: 'the ladder' },
          ],
        },
        A2: {
          scene: { es: 'Hay sequía en California y la ciudad limita el riego de los jardines a dos días por semana. El césped de Don Ernesto, que siempre fue el más verde de la calle, se está poniendo amarillo.', en: 'There’s a drought in California and the city is limiting garden watering to two days a week. Don Ernesto’s lawn, which was always the greenest on the street, is turning yellow.' },
          opener: { es: 'Mi esposa plantó este césped el año que nos casamos. Ella murió hace tres años y cada mañana lo riego pensando en ella. Ahora me dicen que no puedo. Entiendo la ley… pero me cuesta. ¿Te tocó alguna vez cambiar una costumbre que querías mucho?', en: 'My wife planted this lawn the year we got married. She died three years ago and every morning I water it thinking of her. Now they tell me I can’t. I understand the law… but it’s hard for me. Have you ever had to change a habit you really loved?' },
          decide: {
            ask: { es: 'Don Ernesto pide tu consejo. ¿Qué le propones?', en: 'Don Ernesto asks for your advice. What do you suggest?' },
            options: [
              { say: { es: 'Cambiar el césped por plantas del desierto, y dedicarle a su esposa un rincón especial.', en: 'Replace the lawn with desert plants, and dedicate a special corner to his wife.' }, then: { es: 'Se queda callado. Después dice: «A ella le gustaban las flores de cactus… nunca lo pensé».', en: 'He goes quiet. Then he says: “She liked cactus flowers… I never thought of that.”' } },
              { say: { es: 'Recoger el agua de la ducha en cubos para regar.', en: 'Collect shower water in buckets for watering.' }, then: { es: 'Don Ernesto ríe: «Mi esposa hacía eso en Sonora, cuando éramos pobres».', en: 'Don Ernesto laughs: “My wife used to do that in Sonora, when we were poor.”' } },
              { say: { es: 'Dejar el césped amarillo: también es bonito a su manera.', en: 'Leave the lawn yellow: it’s beautiful in its own way too.' }, then: { es: '«Amarillo como el pelo de ella de joven», dice, y casi sonríe.', en: '“Yellow like her hair when she was young,” he says, and almost smiles.' } },
            ],
          },
          twist: { es: 'Un vecino nuevo riega su jardín todos los días a escondidas, de noche. Don Ernesto lo vio ayer. No sabe si decírselo, denunciarlo o callarse.', en: 'A new neighbor waters his yard every day in secret, at night. Don Ernesto saw him yesterday. He doesn’t know whether to say something, report him or keep quiet.' },
          questions: [
            { q: { es: '¿Tuviste que cambiar alguna vez una costumbre que querías mucho? ¿Por qué?', en: 'Have you ever had to change a habit you really loved? Why?' }, help: { es: 'Sí, antes siempre… pero tuve que dejarlo porque…', en: 'Yes, I always used to… but I had to stop because…' }, follow: [{ es: '¿La echas de menos?', en: 'Do you miss it?' }, { es: '¿La cambiaste por otra?', en: 'Did you replace it with another one?' }] },
            { q: { es: '¿Hubo alguna vez problemas de agua, calor o frío extremo donde vivías? ¿Qué hacía la gente?', en: 'Were there ever water problems, extreme heat or cold where you lived? What did people do?' }, help: { es: 'Sí, en… hubo… La gente… y nosotros…', en: 'Yes, in… there was… People… and we…' }, follow: [{ es: '¿Cambió algo después?', en: 'Did anything change afterward?' }, { es: '¿Tienes cuidado con el agua en casa?', en: 'Are you careful with water at home?' }] },
            { q: { es: '¿Qué harías tú con el vecino que riega a escondidas?', en: 'What would you do about the neighbor who waters in secret?' }, help: { es: 'Yo hablaría con él / no diría nada / lo denunciaría porque…', en: 'I’d talk to him / I wouldn’t say anything / I’d report him because…' }, follow: [{ es: '¿Denunciaste alguna vez a alguien?', en: 'Have you ever reported someone?' }, { es: '¿Es diferente si es una persona mayor o un vecino rico?', en: 'Is it different if it’s an older person or a rich neighbor?' }] },
            { q: { es: 'Compara un barrio donde todos se conocen con uno donde nadie se conoce.', en: 'Compare a neighborhood where everyone knows each other with one where nobody does.' }, help: { es: 'Donde todos se conocen hay más… pero también… En cambio…', en: 'Where everyone knows each other there’s more… but also… On the other hand…' }, follow: [{ es: '¿En cuál creciste tú?', en: 'Which one did you grow up in?' }, { es: '¿Cuál prefieres ahora?', en: 'Which do you prefer now?' }] },
          ],
          words: [
            { es: 'la sequía', en: 'the drought' }, { es: 'el riego', en: 'watering, irrigation' }, { es: 'el césped', en: 'the lawn' },
            { es: 'a escondidas', en: 'in secret' }, { es: 'denunciar', en: 'to report (to the authorities)' }, { es: 'la costumbre', en: 'the habit, the custom' },
          ],
        },
        B1: {
          scene: { es: 'Una inmobiliaria le ofrece a Don Ernesto más de un millón de dólares por su casa: quieren demolerla y construir cuatro apartamentos. Los vecinos están divididos: unos quieren que la calle siga igual, otros dicen que la ciudad necesita viviendas.', en: 'A real estate company offers Don Ernesto more than a million dollars for his house: they want to tear it down and build four apartments. The neighbors are divided: some want the street to stay the same, others say the city needs housing.' },
          opener: { es: 'Mis nietos no pueden pagar un alquiler aquí. Si vendo, con ese dinero los ayudo a todos. Pero mis hijos crecieron en esta casa, y la calle cambiaría para siempre. ¿Qué pesa más: la memoria o el futuro?', en: 'My grandchildren can’t afford rent here. If I sell, I can help all of them with that money. But my children grew up in this house, and the street would change forever. What weighs more: memory or the future?' },
          decide: {
            ask: { es: 'Hay una reunión de vecinos. Don Ernesto te pide que hables en su nombre. ¿Qué defiendes?', en: 'There’s a neighborhood meeting. Don Ernesto asks you to speak on his behalf. What do you argue for?' },
            options: [
              { say: { es: 'Que venda: cuatro familias podrán vivir donde ahora vive una persona.', en: 'That he should sell: four families will be able to live where one person lives now.' }, then: { es: 'Una vecina joven aplaude. Un señor protesta: «¡Y mañana serán cuarenta!».', en: 'A young neighbor applauds. A man protests: “And tomorrow it’ll be forty!”' } },
              { say: { es: 'Que no venda a la inmobiliaria, sino que construya él una pequeña casa en el jardín para sus nietos.', en: 'That he shouldn’t sell to the company, but build a small house in the yard for his grandchildren himself.' }, then: { es: 'Don Ernesto se queda pensando. «Eso se puede hacer aquí, ¿verdad?». Alguien dice que sí, con permisos.', en: 'Don Ernesto thinks about it. “That can be done here, right?” Someone says yes, with permits.' } },
              { say: { es: 'Que espere: la decisión no debería tomarse por presión.', en: 'That he should wait: the decision shouldn’t be made under pressure.' }, then: { es: 'El representante de la inmobiliaria avisa que la oferta solo dura hasta el viernes.', en: 'The company’s representative warns that the offer only lasts until Friday.' } },
            ],
          },
          twist: { es: 'Su nieta mayor llama por teléfono durante la reunión. Dice que no quiere que su abuelo venda por ella: «Prefiero tener la casa del abuelo que tener dinero».', en: 'His eldest granddaughter calls during the meeting. She says she doesn’t want her grandfather to sell for her: “I’d rather have Grandpa’s house than have money.”' },
          questions: [
            { q: { es: 'Si fueras Don Ernesto, ¿venderías? ¿Qué pesaría más en tu decisión?', en: 'If you were Don Ernesto, would you sell? What would weigh most in your decision?' }, help: { es: 'Si yo fuera él, … porque… Aunque me dolería…', en: 'If I were him, I would… because… Although it would hurt to…' }, follow: [{ es: '¿Hay algo que nunca venderías?', en: 'Is there anything you would never sell?' }, { es: '¿Le harías caso a la nieta?', en: 'Would you listen to the granddaughter?' }] },
            { q: { es: '¿Tienen derecho los vecinos a decidir qué se construye en su calle? ¿Hasta qué punto?', en: 'Do neighbors have the right to decide what gets built on their street? To what extent?' }, help: { es: 'Creo que tienen derecho a opinar, pero… porque la ciudad…', en: 'I think they have the right to give their opinion, but… because the city…' }, follow: [{ es: '¿Qué pasa en tu ciudad con la vivienda?', en: 'What’s happening with housing in your city?' }, { es: '¿Quién debería poder vivir en el centro?', en: 'Who should be able to live downtown?' }] },
            { q: { es: '¿Qué es más importante conservar en una ciudad: los edificios, la gente que vive en ellos o el estilo de vida?', en: 'What’s more important to preserve in a city: the buildings, the people who live in them or the way of life?' }, help: { es: 'Para mí lo más importante es… porque… Sin eso,…', en: 'For me the most important thing is… because… Without that,…' }, follow: [{ es: '¿Qué lugar de tu infancia ya no existe?', en: 'Which place from your childhood no longer exists?' }, { es: '¿Lo echas de menos?', en: 'Do you miss it?' }] },
            { q: { es: '¿Los abuelos deberían ayudar económicamente a los nietos, o cada generación debería arreglárselas sola?', en: 'Should grandparents help their grandchildren financially, or should each generation manage on its own?' }, help: { es: 'Depende de… En mi familia… Me parece justo que…', en: 'It depends on… In my family… I think it’s fair that…' }, follow: [{ es: '¿Cómo es esto en tu cultura?', en: 'What is this like in your culture?' }, { es: '¿Aceptarías dinero de tus abuelos?', en: 'Would you accept money from your grandparents?' }] },
          ],
          words: [
            { es: 'la inmobiliaria', en: 'the real estate company' }, { es: 'demoler', en: 'to tear down, to demolish' }, { es: 'la vivienda', en: 'housing' },
            { es: 'pesar más', en: 'to weigh more, to matter more' }, { es: 'la oferta', en: 'the offer' }, { es: 'arreglárselas', en: 'to manage, to get by' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the lookout
    {
      id: 'mirador',
      name: { es: 'El mirador', en: 'The lookout' },
      who: { name: 'Tess', role: { es: 'voluntaria del observatorio', en: 'observatory volunteer' } },
      levels: {
        A0: {
          scene: { es: 'Es un mirador alto. Ves toda la ciudad. Hay un telescopio. Tess mira las estrellas.', en: 'It is a high lookout. You see the whole city. There is a telescope. Tess looks at the stars.' },
          opener: { es: '¡Hola! Soy Tess. Mira: es la Luna. ¿Quieres mirar?', en: 'Hi! I am Tess. Look: it is the Moon. Do you want to look?' },
          decide: {
            ask: { es: 'Hay un telescopio. ¿Qué miras?', en: 'There is a telescope. What do you look at?' },
            options: [
              { say: { es: 'Miro la Luna.', en: 'I look at the Moon.' }, then: { es: '¡La Luna es grande y blanca!', en: 'The Moon is big and white!' } },
              { say: { es: 'Miro la ciudad.', en: 'I look at the city.' }, then: { es: 'Ves muchas luces y coches pequeños.', en: 'You see lots of lights and small cars.' } },
              { say: { es: 'Miro el letrero de Hollywood.', en: 'I look at the Hollywood sign.' }, then: { es: 'Las letras son blancas y muy grandes.', en: 'The letters are white and very big.' } },
            ],
          },
          twist: { es: '¡Una estrella fugaz! Tess dice: «¡Pide un deseo!». ¿Qué dices?', en: 'A shooting star! Tess says: “Make a wish!” What do you say?' },
          questions: [
            { q: { es: '¿Ves las estrellas desde tu casa?', en: 'Can you see the stars from your home?' }, help: { es: 'Sí, veo muchas. / No, hay mucha luz.', en: 'Yes, I see many. / No, there is a lot of light.' }, follow: [{ es: '¿Vives en el centro o en el campo?', en: 'Do you live downtown or in the countryside?' }, { es: '¿Te gusta la noche?', en: 'Do you like the night?' }] },
            { q: { es: '¿Prefieres el día o la noche?', en: 'Do you prefer the day or the night?' }, help: { es: 'Prefiero el día. / Prefiero la noche.', en: 'I prefer the day. / I prefer the night.' }, follow: [{ es: '¿A qué hora duermes?', en: 'What time do you go to sleep?' }, { es: '¿Sales de noche?', en: 'Do you go out at night?' }] },
            { q: { es: '¿Te gustan los lugares altos?', en: 'Do you like high places?' }, help: { es: 'Sí, me gustan. / No, tengo miedo.', en: 'Yes, I like them. / No, I am scared.' }, follow: [{ es: '¿Subes montañas?', en: 'Do you climb mountains?' }, { es: '¿Vives en un piso alto?', en: 'Do you live on a high floor?' }] },
            { q: { es: '¿Cuál es tu deseo?', en: 'What is your wish?' }, help: { es: 'Mi deseo es… / Quiero…', en: 'My wish is… / I want…' }, follow: [{ es: '¿Es un viaje?', en: 'Is it a trip?' }, { es: '¿Es para ti o para tu familia?', en: 'Is it for you or for your family?' }] },
          ],
          words: [
            { es: 'el mirador', en: 'the lookout' }, { es: 'la estrella', en: 'the star' }, { es: 'la Luna', en: 'the Moon' },
            { es: 'el telescopio', en: 'the telescope' }, { es: 'el letrero', en: 'the sign' }, { es: 'el deseo', en: 'the wish' },
          ],
        },
        A1: {
          scene: { es: 'Atardecer en el mirador del Observatorio Griffith. A un lado, el letrero de Hollywood; al otro, toda la ciudad hasta el mar. Tess es voluntaria: los fines de semana enseña el cielo a los visitantes con un telescopio.', en: 'Sunset at the Griffith Observatory lookout. On one side, the Hollywood sign; on the other, the whole city all the way to the sea. Tess is a volunteer: on weekends she shows visitors the sky through a telescope.' },
          opener: { es: 'De lunes a viernes soy enfermera. Los sábados vengo aquí a mirar estrellas con la gente. Es mi forma de recordar que somos muy pequeños. ¿Qué haces tú para desconectar?', en: 'Monday to Friday I’m a nurse. On Saturdays I come here to look at the stars with people. It’s my way of remembering that we’re very small. What do you do to unwind?' },
          decide: {
            ask: { es: 'Hay una fila larga para el telescopio y una niña llora porque no puede esperar más. ¿Qué haces?', en: 'There’s a long line for the telescope and a little girl is crying because she can’t wait any longer. What do you do?' },
            options: [
              { say: { es: 'Le doy mi lugar en la fila.', en: 'I give her my place in line.' }, then: { es: 'La niña mira Saturno y grita: «¡Tiene un anillo!». Todos sonríen.', en: 'The girl looks at Saturn and shouts: “It has a ring!” Everyone smiles.' } },
              { say: { es: 'Le explico qué va a ver para que espere con ilusión.', en: 'I explain what she’s going to see so she waits excitedly.' }, then: { es: 'Le hablas de Saturno y sus anillos. Deja de llorar y te hace diez preguntas.', en: 'You tell her about Saturn and its rings. She stops crying and asks you ten questions.' } },
              { say: { es: 'No hago nada: no es mi problema.', en: 'I do nothing: it’s not my problem.' }, then: { es: 'Tess se acerca a la niña y le enseña la Luna con unos binoculares.', en: 'Tess goes over to the girl and shows her the Moon with some binoculars.' } },
            ],
          },
          twist: { es: 'De repente se apagan todas las luces del parque por un problema eléctrico. Por primera vez se ven muchísimas estrellas. La gente aplaude.', en: 'Suddenly all the lights in the park go out because of an electrical problem. For the first time you can see tons of stars. People applaud.' },
          questions: [
            { q: { es: 'Tess es enfermera y voluntaria. ¿Qué haces tú para desconectar del trabajo o de los estudios?', en: 'Tess is a nurse and a volunteer. What do you do to unwind from work or studies?' }, help: { es: 'Para desconectar, yo… Me ayuda porque…', en: 'To unwind, I… It helps me because…' }, follow: [{ es: '¿Cuánto tiempo libre tienes a la semana?', en: 'How much free time do you have a week?' }, { es: '¿Haces voluntariado?', en: 'Do you volunteer?' }] },
            { q: { es: '¿Cuál es el lugar más bonito para ver la puesta de sol en tu ciudad?', en: 'What’s the most beautiful place to watch the sunset in your city?' }, help: { es: 'El lugar más bonito es… Desde allí se ve…', en: 'The most beautiful place is… From there you can see…' }, follow: [{ es: '¿Vas solo o acompañado?', en: 'Do you go alone or with someone?' }, { es: '¿Sacas fotos?', en: 'Do you take photos?' }] },
            { q: { es: '¿Te interesa el espacio? ¿Qué te gustaría saber?', en: 'Are you interested in space? What would you like to know?' }, help: { es: 'Sí, me interesa… Me gustaría saber si… / No mucho.', en: 'Yes, I’m interested in… I’d like to know whether… / Not much.' }, follow: [{ es: '¿Viajarías al espacio?', en: 'Would you travel to space?' }, { es: '¿Viste un eclipse alguna vez?', en: 'Have you ever seen an eclipse?' }] },
            { q: { es: '¿Es fácil para ti esperar en una fila? ¿Qué haces mientras esperas?', en: 'Is it easy for you to wait in line? What do you do while you wait?' }, help: { es: 'Sí / No, porque… Mientras espero, normalmente…', en: 'Yes / No, because… While I wait, I usually…' }, follow: [{ es: '¿Para qué esperarías una hora?', en: 'What would you wait an hour for?' }, { es: '¿Hablas con la gente en las filas?', en: 'Do you talk to people in lines?' }] },
          ],
          words: [
            { es: 'la puesta de sol', en: 'the sunset' }, { es: 'la enfermera', en: 'the nurse' }, { es: 'el voluntario, la voluntaria', en: 'the volunteer' },
            { es: 'desconectar', en: 'to unwind, to switch off' }, { es: 'el anillo', en: 'the ring' }, { es: 'apagarse', en: 'to go out (lights)' },
          ],
        },
        A2: {
          scene: { es: 'Tess está en el mirador con un chico de diecinueve años que acaba de llegar de Ohio. Vino a Los Ángeles a ser actor con trescientos dólares en el bolsillo. Hoy fue a su primera audición… y no salió bien.', en: 'Tess is at the lookout with a nineteen-year-old who just arrived from Ohio. He came to Los Angeles to become an actor with three hundred dollars in his pocket. Today he went to his first audition… and it didn’t go well.' },
          opener: { es: 'Cada semana conozco a alguien como él. Muchos se vuelven a casa en un año. Algunos se quedan y encuentran otra cosa que les gusta más. Yo también llegué aquí con otro sueño. ¿Tú alguna vez te fuiste lejos detrás de un sueño?', en: 'Every week I meet someone like him. Many go back home within a year. Some stay and find something else they like better. I also came here with a different dream. Have you ever gone far away chasing a dream?' },
          decide: {
            ask: { es: 'El chico te pregunta qué haría Tess en su lugar. Tess te deja contestar a ti. ¿Qué le dices?', en: 'The young man asks what Tess would do in his place. Tess lets you answer. What do you tell him?' },
            options: [
              { say: { es: 'Que se dé un plazo: un año, y después decida.', en: 'To give himself a deadline: one year, and then decide.' }, then: { es: 'El chico lo apunta en el móvil: «Un año. Hasta el próximo octubre».', en: 'He writes it down on his phone: “One year. Until next October.”' } },
              { say: { es: 'Que busque un trabajo estable y haga audiciones los fines de semana.', en: 'To find a stable job and do auditions on weekends.' }, then: { es: 'Tess asiente: «Así lo hacen casi todos los que conozco».', en: 'Tess nods: “That’s how almost everyone I know does it.”' } },
              { say: { es: 'Que llame a su familia esta noche y les cuente cómo está.', en: 'To call his family tonight and tell them how he is.' }, then: { es: 'El chico baja la mirada: no habla con su padre desde que se fue.', en: 'He looks down: he hasn’t spoken to his father since he left.' } },
            ],
          },
          twist: { es: 'Tess confiesa que ella también vino a ser actriz hace quince años. Ahora es enfermera y dice que nunca fue tan feliz. El chico no sabe si eso le da esperanza o miedo.', en: 'Tess confesses that she also came here to be an actress fifteen years ago. Now she’s a nurse and says she’s never been happier. The young man doesn’t know whether that gives him hope or scares him.' },
          questions: [
            { q: { es: '¿Te fuiste alguna vez lejos detrás de un sueño, o conoces a alguien que lo hizo? ¿Qué pasó?', en: 'Have you ever gone far away chasing a dream, or do you know someone who did? What happened?' }, help: { es: 'Sí, cuando… me fui a… / Un amigo mío se fue a… y…', en: 'Yes, when… I went to… / A friend of mine went to… and…' }, follow: [{ es: '¿Fue como esperaba?', en: 'Was it as expected?' }, { es: '¿Qué aprendió?', en: 'What did they learn?' }] },
            { q: { es: '¿Qué querías ser de pequeño o pequeña? ¿Cambió tu sueño?', en: 'What did you want to be as a child? Did your dream change?' }, help: { es: 'Quería ser… porque… Ahora…', en: 'I wanted to be… because… Now…' }, follow: [{ es: '¿Quién te influyó?', en: 'Who influenced you?' }, { es: '¿Estás contento con el cambio?', en: 'Are you happy with the change?' }] },
            { q: { es: 'Compara a alguien que sigue un sueño difícil con alguien que elige un camino seguro.', en: 'Compare someone who follows a difficult dream with someone who chooses a safe path.' }, help: { es: 'El primero es más… pero el segundo… Lo bueno de… es que…', en: 'The first is more… but the second… The good thing about… is that…' }, follow: [{ es: '¿Cuál eres tú?', en: 'Which one are you?' }, { es: '¿Cuál es más feliz, en tu opinión?', en: 'Which one is happier, in your opinion?' }] },
            { q: { es: '¿Tuviste alguna vez una entrevista o una prueba que salió mal? ¿Qué aprendiste?', en: 'Have you ever had an interview or a test that went badly? What did you learn?' }, help: { es: 'Una vez tuve… y me puse tan nervioso que… Aprendí que…', en: 'Once I had… and I got so nervous that… I learned that…' }, follow: [{ es: '¿Lo intentaste otra vez?', en: 'Did you try again?' }, { es: '¿Cómo te preparas ahora?', en: 'How do you prepare now?' }] },
          ],
          words: [
            { es: 'la audición', en: 'the audition' }, { es: 'el sueño', en: 'the dream' }, { es: 'el plazo', en: 'the deadline, the time limit' },
            { es: 'volverse (a casa)', en: 'to go back (home)' }, { es: 'bajar la mirada', en: 'to look down' }, { es: 'la esperanza', en: 'hope' },
          ],
        },
        B1: {
          scene: { es: 'El observatorio propone apagar o reducir las luces de los barrios cercanos una noche al mes para que se vean las estrellas. Algunos vecinos temen por su seguridad; los comercios, por sus ventas. Tess presenta la idea en una charla pública.', en: 'The observatory proposes turning off or dimming the lights of nearby neighborhoods one night a month so the stars can be seen. Some residents fear for their safety; shops, for their sales. Tess is presenting the idea at a public talk.' },
          opener: { es: 'La mayoría de los niños de esta ciudad nunca vio la Vía Láctea. Nunca. Para mí eso es una pérdida enorme. Pero entiendo a quien tiene miedo de caminar a oscuras. ¿Cómo convences a alguien de que una noche oscura también es un derecho?', en: 'Most of the children in this city have never seen the Milky Way. Never. To me that’s a huge loss. But I understand people who are afraid of walking in the dark. How do you convince someone that a dark night is also a right?' },
          decide: {
            ask: { es: 'En la charla, una mujer dice que su calle ya es peligrosa con luz. Tess te pasa el micrófono. ¿Qué respondes?', en: 'At the talk, a woman says her street is already dangerous with the lights on. Tess passes you the microphone. What do you answer?' },
            options: [
              { say: { es: 'Que las luces no se apaguen: que se cambien por luces que iluminen solo hacia abajo.', en: 'That the lights shouldn’t be turned off: they should be replaced with lights that only shine downward.' }, then: { es: 'La mujer lo piensa. Un técnico confirma que así se reduce mucho la contaminación lumínica.', en: 'The woman thinks about it. A technician confirms that this greatly reduces light pollution.' } },
              { say: { es: 'Que se haga solo en los parques, no en las calles donde vive la gente.', en: 'That it should only be done in parks, not on the streets where people live.' }, then: { es: 'Tess asiente, aunque murmura que con eso «solo se verán diez estrellas más».', en: 'Tess nods, though she mutters that this way “you’ll only see ten more stars.”' } },
              { say: { es: 'Que primero se pruebe una noche, con más patrullas, y luego se vote.', en: 'That they try it for one night first, with more patrols, and then vote.' }, then: { es: 'Un comerciante pregunta quién pagará esas patrullas extra. Silencio en la sala.', en: 'A shop owner asks who will pay for those extra patrols. Silence in the room.' } },
            ],
          },
          twist: { es: 'Un hombre mayor se levanta y cuenta que vio la Vía Láctea desde este mismo mirador en 1965. «Ustedes se lo perdieron», dice a los jóvenes. Nadie sabe si reír o ponerse triste.', en: 'An older man stands up and says he saw the Milky Way from this very lookout in 1965. “You all missed it,” he tells the young people. Nobody knows whether to laugh or feel sad.' },
          questions: [
            { q: { es: '¿Es la oscuridad de la noche algo que vale la pena proteger? ¿Por qué?', en: 'Is the darkness of night something worth protecting? Why?' }, help: { es: 'Creo que sí / no, porque… Además,… aunque…', en: 'I think so / not, because… Besides,… although…' }, follow: [{ es: '¿Cuándo fue la última vez que viste un cielo realmente oscuro?', en: 'When was the last time you saw a really dark sky?' }, { es: '¿Afecta la luz artificial a los animales?', en: 'Does artificial light affect animals?' }] },
            { q: { es: '¿Cómo equilibrarías la seguridad y la calidad de vida en una ciudad? Da un ejemplo concreto.', en: 'How would you balance safety and quality of life in a city? Give a concrete example.' }, help: { es: 'Por ejemplo,… Así se conseguiría… sin perder…', en: 'For example,… That way you’d achieve… without losing…' }, follow: [{ es: '¿Te sientes seguro de noche en tu ciudad?', en: 'Do you feel safe at night in your city?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Qué cosas que tus abuelos vivían con normalidad crees que ya no conocerán tus nietos?', en: 'What things that your grandparents experienced as normal do you think your grandchildren will never know?' }, help: { es: 'Mis abuelos… En cambio, mis nietos probablemente no…', en: 'My grandparents… My grandchildren, on the other hand, probably won’t…' }, follow: [{ es: '¿Es una pérdida o simplemente un cambio?', en: 'Is it a loss or simply a change?' }, { es: '¿Qué te gustaría que conservaran?', en: 'What would you like them to keep?' }] },
            { q: { es: 'Si pudieras convencer a toda tu ciudad de hacer un pequeño sacrificio por algo bello, ¿qué propondrías?', en: 'If you could convince your whole city to make a small sacrifice for something beautiful, what would you propose?' }, help: { es: 'Propondría que… porque… Sé que algunos dirían que…', en: 'I’d propose that… because… I know some would say that…' }, follow: [{ es: '¿Lo aceptaría la gente?', en: 'Would people accept it?' }, { es: '¿Tú qué estarías dispuesto a sacrificar?', en: 'What would you be willing to sacrifice?' }] },
          ],
          words: [
            { es: 'la contaminación lumínica', en: 'light pollution' }, { es: 'la Vía Láctea', en: 'the Milky Way' }, { es: 'a oscuras', en: 'in the dark' },
            { es: 'iluminar', en: 'to light up' }, { es: 'la patrulla', en: 'the patrol' }, { es: 'perderse algo', en: 'to miss out on something' },
          ],
        },
      },
    },
  ],
};
