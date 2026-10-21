// Hawái · Honolulu. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own: same place and people, different
// situations, decisions and questions. English is a natural translation.
export default {
  id: 'hawai',
  spots: [
    // ------------------------------------------------------------ the surf beach
    {
      id: 'surf',
      name: { es: 'La playa de surf', en: 'The surf beach' },
      who: { name: 'Keoni', role: { es: 'instructor de surf', en: 'surf instructor' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa. Hay olas grandes. Keoni tiene una tabla de surf. Hace sol y calor.', en: 'It is a beach. There are big waves. Keoni has a surfboard. It is sunny and hot.' },
          opener: { es: '¡Aloha! Soy Keoni. Soy profesor de surf. ¿Nadas bien?', en: 'Aloha! I am Keoni. I am a surf teacher. Do you swim well?' },
          decide: {
            ask: { es: 'Keoni tiene tres tablas: una grande, una pequeña y una roja. ¿Cuál quieres?', en: 'Keoni has three boards: a big one, a small one and a red one. Which one do you want?' },
            options: [
              { say: { es: 'La grande, por favor.', en: 'The big one, please.' }, then: { es: 'Keoni dice: «¡Muy bien! Es fácil para empezar».', en: 'Keoni says: “Very good! It is easy to start.”' } },
              { say: { es: 'La pequeña.', en: 'The small one.' }, then: { es: 'Keoni ríe: «¡Es difícil! Pero vamos».', en: 'Keoni laughs: “It is hard! But let’s go.”' } },
              { say: { es: 'La roja. Es bonita.', en: 'The red one. It is pretty.' }, then: { es: 'Keoni dice: «Es mi tabla favorita».', en: 'Keoni says: “It is my favorite board.”' } },
            ],
          },
          twist: { es: '¡Una tortuga grande sale del agua! Está en la arena, muy cerca. ¿Qué dices?', en: 'A big turtle comes out of the water! It is on the sand, very close. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la playa?', en: 'Do you like the beach?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Playa o piscina?', en: 'Beach or pool?' }, { es: '¿Vas mucho a la playa?', en: 'Do you go to the beach a lot?' }] },
            { q: { es: '¿Nadas?', en: 'Do you swim?' }, help: { es: 'Sí, nado. / No, no nado. / Un poco.', en: 'Yes, I swim. / No, I don’t swim. / A little.' }, follow: [{ es: '¿Nadas en el mar?', en: 'Do you swim in the sea?' }, { es: '¿Nadas bien?', en: 'Do you swim well?' }] },
            { q: { es: '¿Haces deporte?', en: 'Do you play sports?' }, help: { es: 'Sí, hago… / No, no hago deporte.', en: 'Yes, I do… / No, I don’t do sports.' }, follow: [{ es: '¿Qué deporte?', en: 'What sport?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like hot weather?' }, help: { es: 'Sí, me gusta el calor. / No, prefiero el frío.', en: 'Yes, I like the heat. / No, I prefer the cold.' }, follow: [{ es: '¿Hace calor en tu ciudad?', en: 'Is it hot in your city?' }, { es: '¿Usas protector solar?', en: 'Do you use sunscreen?' }] },
          ],
          words: [
            { es: 'la ola', en: 'the wave' }, { es: 'la tabla de surf', en: 'the surfboard' }, { es: 'nadar', en: 'to swim' },
            { es: 'la arena', en: 'the sand' }, { es: 'la tortuga', en: 'the turtle' }, { es: 'el sol', en: 'the sun' },
          ],
        },
        A1: {
          scene: { es: 'Waikiki, a las siete de la mañana. El agua está tranquila y transparente. Keoni da clases de surf desde hace diez años. Hoy tiene un grupo de cuatro turistas y tú eres uno de ellos.', en: 'Waikiki, at seven in the morning. The water is calm and clear. Keoni has been giving surf lessons for ten years. Today he has a group of four tourists and you are one of them.' },
          opener: { es: 'Primero practicamos en la arena: te acuestas en la tabla, remas con los brazos y luego te levantas rápido. Mi abuelo me enseñó así cuando tenía cinco años. ¿Tú aprendiste algo de tu abuelo o tu abuela?', en: 'First we practice on the sand: you lie on the board, paddle with your arms and then stand up fast. My grandfather taught me like this when I was five. Did you learn something from your grandfather or grandmother?' },
          decide: {
            ask: { es: 'Llevas veinte minutos en el agua y no puedes levantarte. Estás cansado. ¿Qué haces?', en: 'You’ve been in the water for twenty minutes and you can’t stand up. You’re tired. What do you do?' },
            options: [
              { say: { es: 'Lo intento una vez más.', en: 'I try one more time.' }, then: { es: '¡Te levantas tres segundos! Keoni grita «¡Eso es!» y todo el grupo aplaude.', en: 'You stand up for three seconds! Keoni shouts “That’s it!” and the whole group claps.' } },
              { say: { es: 'Descanso un rato en la arena.', en: 'I rest for a while on the sand.' }, then: { es: 'Keoni te trae agua de coco y te explica el error: miras los pies, no el horizonte.', en: 'Keoni brings you coconut water and explains your mistake: you look at your feet, not at the horizon.' } },
              { say: { es: 'Le pido a Keoni que me empuje.', en: 'I ask Keoni to push me.' }, then: { es: 'Keoni empuja la tabla en el momento justo y por fin agarras una ola pequeña.', en: 'Keoni pushes the board at just the right moment and you finally catch a small wave.' } },
            ],
          },
          twist: { es: 'De repente, Keoni señala el agua: hay una tortuga verde nadando a tu lado. Dice que está prohibido tocarla. ¿Qué haces y qué le preguntas?', en: 'Suddenly, Keoni points at the water: there is a green turtle swimming next to you. He says it is forbidden to touch it. What do you do and what do you ask him?' },
          questions: [
            { q: { es: '¿Aprendiste a nadar de niño?', en: 'Did you learn to swim as a child?' }, help: { es: 'Sí, aprendí a los… años. / No, aprendí de adulto.', en: 'Yes, I learned at… / No, I learned as an adult.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Tenías miedo?', en: 'Were you scared?' }] },
            { q: { es: '¿Qué deporte nuevo quieres probar?', en: 'What new sport do you want to try?' }, help: { es: 'Quiero probar… porque…', en: 'I want to try… because…' }, follow: [{ es: '¿Es caro?', en: 'Is it expensive?' }, { es: '¿Es peligroso?', en: 'Is it dangerous?' }] },
            { q: { es: '¿A qué hora te levantas normalmente?', en: 'What time do you usually get up?' }, help: { es: 'Me levanto a las…', en: 'I get up at…' }, follow: [{ es: '¿Y el fin de semana?', en: 'And on weekends?' }, { es: '¿Te gusta madrugar?', en: 'Do you like getting up early?' }] },
            { q: { es: '¿Qué haces cuando algo es muy difícil?', en: 'What do you do when something is very hard?' }, help: { es: 'Normalmente lo intento otra vez / pido ayuda / descanso.', en: 'I usually try again / ask for help / take a break.' }, follow: [{ es: '¿Eres paciente?', en: 'Are you patient?' }, { es: '¿Te enojas?', en: 'Do you get angry?' }] },
          ],
          words: [
            { es: 'remar', en: 'to paddle' }, { es: 'levantarse', en: 'to stand up, to get up' }, { es: 'el horizonte', en: 'the horizon' },
            { es: 'tranquilo', en: 'calm' }, { es: 'intentar', en: 'to try' }, { es: 'prohibido', en: 'forbidden' },
          ],
        },
        A2: {
          scene: { es: 'Es invierno en la costa norte de Oahu y las olas miden seis metros. Keoni fue campeón local hace años, pero una lesión en la espalda lo obligó a dejar las competiciones. Hoy mira el campeonato desde la arena.', en: 'It’s winter on Oahu’s North Shore and the waves are twenty feet tall. Keoni was a local champion years ago, but a back injury forced him to quit competing. Today he’s watching the championship from the sand.' },
          opener: { es: 'La última vez que competí aquí me caí de una ola enorme y me rompí dos vértebras. Estuve tres meses sin poder caminar bien. Al principio estaba furioso; después empecé a enseñar y descubrí que me gustaba más. ¿Alguna vez algo malo te llevó a algo bueno?', en: 'The last time I competed here I fell off a huge wave and broke two vertebrae. I couldn’t walk properly for three months. At first I was furious; then I started teaching and discovered I liked it more. Has something bad ever led you to something good?' },
          decide: {
            ask: { es: 'Un joven surfista, alumno de Keoni, quiere entrar al agua aunque los socorristas dicen que es demasiado peligroso para él. Keoni te pregunta qué harías tú.', en: 'A young surfer, one of Keoni’s students, wants to go in even though the lifeguards say it’s too dangerous for him. Keoni asks what you would do.' },
            options: [
              { say: { es: 'Le diría que espere al año que viene.', en: 'I’d tell him to wait until next year.' }, then: { es: 'El chico se enfada, pero se queda. Una hora después, una ola rompe la tabla de otro surfista en dos.', en: 'The boy gets angry, but he stays. An hour later, a wave snaps another surfer’s board in two.' } },
              { say: { es: 'Lo dejaría decidir: ya es mayor.', en: 'I’d let him decide: he’s old enough.' }, then: { es: 'Keoni duda. Al final llama a los padres del chico, que deciden por él.', en: 'Keoni hesitates. In the end he calls the boy’s parents, who decide for him.' } },
              { say: { es: 'Le propondría practicar en olas más pequeñas hoy.', en: 'I’d suggest he practice on smaller waves today.' }, then: { es: 'El chico acepta a regañadientes y pasa la tarde en una playa cercana. Vuelve sonriendo.', en: 'The boy reluctantly agrees and spends the afternoon at a nearby beach. He comes back smiling.' } },
            ],
          },
          twist: { es: 'Suena una sirena: un surfista desapareció bajo una ola. Todos miran el mar en silencio durante diez segundos eternos… hasta que aparece, riendo. ¿Qué sentiste? ¿Qué le dices a Keoni?', en: 'A siren sounds: a surfer disappeared under a wave. Everyone stares at the sea in silence for ten endless seconds… until he pops up, laughing. How did you feel? What do you say to Keoni?' },
          questions: [
            { q: { es: '¿Alguna vez tuviste que dejar algo que te encantaba?', en: 'Have you ever had to give up something you loved?' }, help: { es: 'Sí, cuando… tuve que dejar… porque…', en: 'Yes, when… I had to give up… because…' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Lo retomaste después?', en: 'Did you take it up again later?' }] },
            { q: { es: '¿Cuál fue el momento más peligroso de tu vida?', en: 'What was the most dangerous moment of your life?' }, help: { es: 'Fue cuando… Yo estaba… y de repente…', en: 'It was when… I was… and suddenly…' }, follow: [{ es: '¿Tuviste miedo?', en: 'Were you scared?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Te gusta más competir o enseñar?', en: 'Do you prefer competing or teaching?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Ganaste algún premio?', en: 'Did you ever win a prize?' }, { es: '¿Quién fue tu mejor profesor?', en: 'Who was your best teacher?' }] },
            { q: { es: '¿Qué riesgos te parecen razonables?', en: 'What risks seem reasonable to you?' }, help: { es: 'Me parece razonable… pero no…', en: 'I think… is reasonable, but not…' }, follow: [{ es: '¿Eres prudente o atrevido?', en: 'Are you cautious or daring?' }, { es: '¿Tu familia piensa igual?', en: 'Does your family think the same?' }] },
          ],
          words: [
            { es: 'la lesión', en: 'the injury' }, { es: 'el socorrista', en: 'the lifeguard' }, { es: 'el campeonato', en: 'the championship' },
            { es: 'romperse', en: 'to break (a bone)' }, { es: 'a regañadientes', en: 'reluctantly' }, { es: 'peligroso', en: 'dangerous' },
          ],
        },
        B1: {
          scene: { es: 'Una marca internacional quiere filmar un anuncio en la playa de Keoni y le ofrece mucho dinero por participar. Pero para grabar tendrían que cerrar la playa a los vecinos durante una semana, justo en las vacaciones escolares.', en: 'An international brand wants to film an ad on Keoni’s beach and offers him a lot of money to take part. But to shoot it they would have to close the beach to locals for a week, right during school vacation.' },
          opener: { es: 'Con ese dinero podría abrir mi propia escuela de surf y dar clases gratis a los chicos del barrio. Pero mi tía dice que estaría vendiendo la playa, que esta arena no es mía. No sé si tiene razón o si es demasiado romántica. ¿Tú qué piensas?', en: 'With that money I could open my own surf school and give free lessons to the kids in the neighborhood. But my aunt says I’d be selling the beach, that this sand isn’t mine. I don’t know if she’s right or just too romantic. What do you think?' },
          decide: {
            ask: { es: 'Keoni tiene que responder mañana. Te pide un consejo sincero.', en: 'Keoni has to answer tomorrow. He asks you for honest advice.' },
            options: [
              { say: { es: 'Acepta, pero exige que la playa no se cierre del todo.', en: 'Accept, but insist the beach isn’t fully closed.' }, then: { es: 'La marca acepta cerrar solo de seis a nueve de la mañana. Keoni firma, aliviado.', en: 'The brand agrees to close only from six to nine in the morning. Keoni signs, relieved.' } },
              { say: { es: 'Rechaza: hay cosas que no se venden.', en: 'Turn it down: some things aren’t for sale.' }, then: { es: 'Keoni rechaza la oferta. Una semana después, otro surfista acepta y el anuncio se graba igual.', en: 'Keoni turns the offer down. A week later, another surfer accepts and the ad gets shot anyway.' } },
              { say: { es: 'Pregunta primero a los vecinos.', en: 'Ask the neighbors first.' }, then: { es: 'Keoni organiza una reunión. Las opiniones están divididas, pero todos agradecen que pregunte.', en: 'Keoni holds a meeting. Opinions are split, but everyone appreciates being asked.' } },
            ],
          },
          twist: { es: 'Keoni descubre que el anuncio es de una crema solar que contiene sustancias que dañan el coral. Ahora la decisión ya no es solo sobre la playa. ¿Cambia tu consejo?', en: 'Keoni finds out the ad is for a sunscreen that contains substances that damage coral. Now the decision isn’t only about the beach. Does your advice change?' },
          questions: [
            { q: { es: '¿Crees que un lugar público puede «venderse» sin dejar de ser de todos?', en: 'Do you think a public place can be “sold” without ceasing to belong to everyone?' }, help: { es: 'Creo que sí, siempre que… / No creo que se pueda, porque…', en: 'I think so, as long as… / I don’t think it can, because…' }, follow: [{ es: '¿Pasa algo parecido en tu ciudad?', en: 'Does something similar happen in your city?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Harías publicidad de algo en lo que no crees si te pagaran muy bien?', en: 'Would you advertise something you don’t believe in if they paid you very well?' }, help: { es: 'Si me pagaran…, quizás… / Nunca lo haría, porque…', en: 'If they paid me…, maybe… / I’d never do it, because…' }, follow: [{ es: '¿Hay un precio para todo?', en: 'Is there a price for everything?' }, { es: '¿Y si fuera para ayudar a otros?', en: 'And if it were to help others?' }] },
            { q: { es: '¿Qué es más importante: una oportunidad personal o la opinión de tu comunidad?', en: 'What matters more: a personal opportunity or your community’s opinion?' }, help: { es: 'Depende de… Para mí es más importante… aunque…', en: 'It depends on… For me… matters more, although…' }, follow: [{ es: '¿Alguna vez elegiste contra la opinión de tu familia?', en: 'Have you ever chosen against your family’s opinion?' }, { es: '¿Te arrepentiste?', en: 'Did you regret it?' }] },
            { q: { es: '¿Cambias tus hábitos de consumo por razones ambientales?', en: 'Do you change your shopping habits for environmental reasons?' }, help: { es: 'Sí, por ejemplo… / No mucho, porque…', en: 'Yes, for example… / Not much, because…' }, follow: [{ es: '¿Es fácil saber qué productos dañan el medio ambiente?', en: 'Is it easy to know which products harm the environment?' }, { es: '¿Debería prohibirlos el gobierno?', en: 'Should the government ban them?' }] },
          ],
          words: [
            { es: 'el anuncio', en: 'the ad, the commercial' }, { es: 'grabar', en: 'to film, to record' }, { es: 'exigir', en: 'to demand' },
            { es: 'rechazar', en: 'to turn down' }, { es: 'el coral', en: 'the coral' }, { es: 'dañar', en: 'to damage' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the local market
    {
      id: 'mercado',
      name: { es: 'El mercado local', en: 'The local market' },
      who: { name: 'Malia', role: { es: 'vendedora de frutas', en: 'fruit seller' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado. Hay frutas de muchos colores. Malia vende piñas y mangos. Hay flores también.', en: 'It is a market. There is fruit of many colors. Malia sells pineapples and mangoes. There are flowers too.' },
          opener: { es: '¡Hola! Soy Malia. ¿Quieres fruta? Es muy dulce.', en: 'Hi! I am Malia. Do you want fruit? It is very sweet.' },
          decide: {
            ask: { es: 'Malia tiene piña, mango y papaya. ¿Qué compras?', en: 'Malia has pineapple, mango and papaya. What do you buy?' },
            options: [
              { say: { es: 'Una piña, por favor.', en: 'A pineapple, please.' }, then: { es: 'Malia corta la piña. ¡Está muy rica!', en: 'Malia cuts the pineapple. It is delicious!' } },
              { say: { es: 'Dos mangos, por favor.', en: 'Two mangoes, please.' }, then: { es: 'Malia dice: «Son cuatro dólares». Tú pagas.', en: 'Malia says: “That is four dollars.” You pay.' } },
              { say: { es: '¿Qué es la papaya?', en: 'What is papaya?' }, then: { es: 'Malia te da un poco. Es naranja por dentro.', en: 'Malia gives you a little. It is orange inside.' } },
            ],
          },
          twist: { es: 'Malia te da un collar de flores. Es un regalo. ¿Qué dices?', en: 'Malia gives you a flower necklace. It is a gift. What do you say?' },
          questions: [
            { q: { es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, help: { es: 'Me gusta la manzana / el mango / la piña…', en: 'I like apples / mangoes / pineapple…' }, follow: [{ es: '¿Comes fruta cada día?', en: 'Do you eat fruit every day?' }, { es: '¿Qué fruta no te gusta?', en: 'What fruit don’t you like?' }] },
            { q: { es: '¿Vas al mercado?', en: 'Do you go to the market?' }, help: { es: 'Sí, voy al mercado. / No, voy al supermercado.', en: 'Yes, I go to the market. / No, I go to the supermarket.' }, follow: [{ es: '¿Cuándo vas?', en: 'When do you go?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Qué color te gusta?', en: 'What color do you like?' }, { es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }] },
            { q: { es: '¿Cocinas con fruta?', en: 'Do you cook with fruit?' }, help: { es: 'Sí, hago… / No, como la fruta sola.', en: 'Yes, I make… / No, I eat fruit on its own.' }, follow: [{ es: '¿Haces jugo?', en: 'Do you make juice?' }, { es: '¿Haces pasteles?', en: 'Do you bake cakes?' }] },
          ],
          words: [
            { es: 'la piña', en: 'the pineapple' }, { es: 'el mango', en: 'the mango' }, { es: 'dulce', en: 'sweet' },
            { es: 'la flor', en: 'the flower' }, { es: 'el collar', en: 'the necklace' }, { es: 'el regalo', en: 'the gift' },
          ],
        },
        A1: {
          scene: { es: 'Un mercado de agricultores en Honolulu, un sábado por la mañana. Hay puestos de frutas tropicales, café de Kona, flores para hacer collares y música de ukelele. Malia vende la fruta de la granja de su familia.', en: 'A farmers’ market in Honolulu on a Saturday morning. There are stands with tropical fruit, Kona coffee, flowers for making leis and ukulele music. Malia sells fruit from her family’s farm.' },
          opener: { es: 'Mi familia tiene una granja pequeña en la isla. Nos levantamos a las cuatro para recoger la fruta. Todo lo que ves aquí estaba en el árbol ayer. ¿En tu país hay mercados como este?', en: 'My family has a small farm on the island. We get up at four to pick the fruit. Everything you see here was on the tree yesterday. Are there markets like this in your country?' },
          decide: {
            ask: { es: 'Malia te ofrece probar una fruta muy rara: el rambután, rojo y con pelos. ¿Qué haces?', en: 'Malia offers you a taste of a very strange fruit: rambutan, red and hairy. What do you do?' },
            options: [
              { say: { es: '¡Sí! Me encanta probar cosas nuevas.', en: 'Yes! I love trying new things.' }, then: { es: 'Es dulce y suave por dentro, como una uva grande. Malia se ríe de tu cara.', en: 'It’s sweet and soft inside, like a big grape. Malia laughs at your face.' } },
              { say: { es: 'Primero quiero ver cómo se come.', en: 'First I want to see how you eat it.' }, then: { es: 'Malia abre una con las uñas y te muestra la parte blanca. Parece fácil.', en: 'Malia opens one with her nails and shows you the white part. It looks easy.' } },
              { say: { es: 'No, gracias. Prefiero el mango.', en: 'No, thanks. I prefer mango.' }, then: { es: 'Malia te corta un mango en forma de flor. ¡Es casi una obra de arte!', en: 'Malia cuts a mango into the shape of a flower. It’s almost a work of art!' } },
            ],
          },
          twist: { es: 'Empieza a llover muy fuerte, pero solo cinco minutos. Nadie se mueve: todos siguen comprando. Malia dice: «Aquí la lluvia es como un saludo». ¿Qué le preguntas?', en: 'It starts raining very hard, but only for five minutes. Nobody moves: everyone keeps shopping. Malia says: “Here the rain is like a greeting.” What do you ask her?' },
          questions: [
            { q: { es: '¿Dónde compras la comida normalmente?', en: 'Where do you usually buy your food?' }, help: { es: 'Normalmente compro en… porque…', en: 'I usually shop at… because…' }, follow: [{ es: '¿Cuántas veces por semana?', en: 'How many times a week?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Cuál es la fruta típica de tu país?', en: 'What is a typical fruit from your country?' }, help: { es: 'En mi país es típico/a…', en: 'In my country… is typical.' }, follow: [{ es: '¿Cómo se come?', en: 'How do you eat it?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Probaste alguna comida rara en un viaje?', en: 'Did you try any strange food on a trip?' }, help: { es: 'Sí, en… probé… / No, nunca.', en: 'Yes, in… I tried… / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿La comerías otra vez?', en: 'Would you eat it again?' }] },
            { q: { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué haces cuando llueve?', en: 'What do you do when it rains?' }, { es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }] },
          ],
          words: [
            { es: 'el puesto', en: 'the stand, the stall' }, { es: 'la granja', en: 'the farm' }, { es: 'recoger', en: 'to pick, to gather' },
            { es: 'probar', en: 'to taste, to try' }, { es: 'la uva', en: 'the grape' }, { es: 'la lluvia', en: 'the rain' },
          ],
        },
        A2: {
          scene: { es: 'Malia está preocupada: este mes vendió la mitad que el año pasado. Enfrente abrió un supermercado enorme que vende fruta importada mucho más barata. Además, una plaga atacó los árboles de papaya de su familia.', en: 'Malia is worried: this month she sold half as much as last year. A huge supermarket opened across the street that sells imported fruit much cheaper. On top of that, a pest attacked her family’s papaya trees.' },
          opener: { es: 'Cuando era niña, aquí todos se conocían. Mi abuela vendía en este mismo puesto y la gente venía a hablar, no solo a comprar. La semana pasada una señora me preguntó por qué mi mango cuesta el doble. ¿Tú pagarías más por algo local?', en: 'When I was a girl, everyone here knew each other. My grandmother sold at this very stall and people came to talk, not just to shop. Last week a lady asked me why my mango costs twice as much. Would you pay more for something local?' },
          decide: {
            ask: { es: 'Malia piensa en tres ideas para salvar su puesto. ¿Cuál le recomiendas?', en: 'Malia is thinking of three ideas to save her stall. Which one do you recommend?' },
            options: [
              { say: { es: 'Vender por internet a otras islas.', en: 'Sell online to other islands.' }, then: { es: 'Malia crea una página sencilla. Al mes tiene clientes en Maui que piden cajas de fruta.', en: 'Malia makes a simple website. Within a month she has customers on Maui ordering boxes of fruit.' } },
              { say: { es: 'Dar clases de cómo hacer collares de flores.', en: 'Teach people how to make flower leis.' }, then: { es: 'Los turistas hacen fila para las clases. Malia gana más con los collares que con la fruta.', en: 'Tourists line up for the classes. Malia earns more from the leis than from the fruit.' } },
              { say: { es: 'Unirse con otros granjeros y bajar los precios.', en: 'Join other farmers and lower prices.' }, then: { es: 'Cinco familias se juntan. Ganan menos por fruta, pero venden mucho más.', en: 'Five families team up. They earn less per piece of fruit, but sell a lot more.' } },
            ],
          },
          twist: { es: 'El gerente del supermercado se acerca al puesto y le propone a Malia vender su fruta en la tienda… con la etiqueta del supermercado, no con su nombre. ¿Qué le aconsejas?', en: 'The supermarket manager comes up to the stall and offers Malia to sell her fruit in the store… with the supermarket’s label, not her name. What do you advise her?' },
          questions: [
            { q: { es: '¿Cómo era el lugar donde comprabas de niño?', en: 'What was the place where you shopped as a child like?' }, help: { es: 'Cuando era niño/a, compraba en… Era… y había…', en: 'When I was a child, I shopped at… It was… and there was…' }, follow: [{ es: '¿Todavía existe?', en: 'Does it still exist?' }, { es: '¿Lo extrañas?', en: 'Do you miss it?' }] },
            { q: { es: '¿Pagarías más por un producto local?', en: 'Would you pay more for a local product?' }, help: { es: 'Sí, pagaría más si… / No, porque…', en: 'Yes, I would pay more if… / No, because…' }, follow: [{ es: '¿Cuánto más?', en: 'How much more?' }, { es: '¿Qué productos compras locales?', en: 'Which products do you buy local?' }] },
            { q: { es: '¿Alguna vez un negocio de tu barrio cerró?', en: 'Has a business in your neighborhood ever closed?' }, help: { es: 'Sí, cerró… porque… / No, que yo sepa.', en: 'Yes,… closed because… / Not that I know of.' }, follow: [{ es: '¿Qué abrieron en su lugar?', en: 'What opened in its place?' }, { es: '¿Te dio pena?', en: 'Were you sad about it?' }] },
            { q: { es: '¿Qué aprendiste de tus abuelos?', en: 'What did you learn from your grandparents?' }, help: { es: 'Aprendí a… / Me enseñaron que…', en: 'I learned to… / They taught me that…' }, follow: [{ es: '¿Todavía lo haces?', en: 'Do you still do it?' }, { es: '¿Se lo enseñarías a tus hijos?', en: 'Would you teach it to your children?' }] },
          ],
          words: [
            { es: 'la plaga', en: 'the pest, the blight' }, { es: 'importado', en: 'imported' }, { es: 'barato', en: 'cheap' },
            { es: 'el gerente', en: 'the manager' }, { es: 'la etiqueta', en: 'the label' }, { es: 'aconsejar', en: 'to advise' },
          ],
        },
        B1: {
          scene: { es: 'Hawái importa cerca del noventa por ciento de lo que come, aunque tiene tierra fértil y sol todo el año. Malia forma parte de un grupo que pide al gobierno que obligue a los hoteles a comprar al menos un tercio de su comida a granjas locales.', en: 'Hawaii imports about ninety percent of what it eats, even though it has fertile land and sun all year round. Malia is part of a group asking the government to require hotels to buy at least a third of their food from local farms.' },
          opener: { es: 'Si mañana dejaran de llegar los barcos, la isla tendría comida para una semana. Una semana. Y mientras tanto, los hoteles sirven piña traída de otro continente. A mí me parece absurdo, pero los hoteleros dicen que si los obligan, subirán los precios y vendrán menos turistas. ¿De qué lado estarías?', en: 'If the ships stopped arriving tomorrow, the island would have food for a week. One week. Meanwhile, hotels serve pineapple shipped in from another continent. It seems absurd to me, but the hotel owners say that if they’re forced, prices will go up and fewer tourists will come. Which side would you be on?' },
          decide: {
            ask: { es: 'Malia tiene que hablar mañana en una audiencia pública. Te pide ayuda para elegir el argumento principal.', en: 'Malia has to speak at a public hearing tomorrow. She asks you to help her choose her main argument.' },
            options: [
              { say: { es: 'La seguridad: depender de los barcos es un riesgo.', en: 'Security: depending on ships is a risk.' }, then: { es: 'Malia cuenta lo que pasó durante una huelga portuaria. Varios políticos toman notas.', en: 'Malia describes what happened during a port strike. Several politicians take notes.' } },
              { say: { es: 'La economía: el dinero se quedaría en la isla.', en: 'The economy: the money would stay on the island.' }, then: { es: 'Un hotelero reconoce que nunca lo había pensado así, aunque sigue en contra.', en: 'A hotel owner admits he’d never thought of it that way, although he’s still against it.' } },
              { say: { es: 'La identidad: la comida local es parte de la cultura.', en: 'Identity: local food is part of the culture.' }, then: { es: 'Una anciana se levanta y aplaude. El tono de la audiencia cambia por completo.', en: 'An old woman stands up and applauds. The tone of the hearing changes completely.' } },
            ],
          },
          twist: { es: 'Un periodista le pregunta a Malia si su grupo no está defendiendo, en realidad, sus propios negocios. Es una pregunta incómoda… y en parte justa. ¿Cómo le ayudarías a responder?', en: 'A reporter asks Malia if her group isn’t really defending its own businesses. It’s an uncomfortable question… and partly fair. How would you help her answer?' },
          questions: [
            { q: { es: '¿Crees que el gobierno debería obligar a las empresas a comprar productos locales?', en: 'Do you think the government should force companies to buy local products?' }, help: { es: 'Creo que debería… porque… / No creo que deba…, sino que…', en: 'I think it should… because… / I don’t think it should…, rather…' }, follow: [{ es: '¿Funcionaría en tu país?', en: 'Would it work in your country?' }, { es: '¿Quién pagaría la diferencia?', en: 'Who would pay the difference?' }] },
            { q: { es: '¿Qué pasaría en tu ciudad si dejaran de llegar productos de fuera?', en: 'What would happen in your city if goods from outside stopped arriving?' }, help: { es: 'Si dejaran de llegar…, faltaría… y la gente…', en: 'If… stopped arriving, there would be a shortage of… and people would…' }, follow: [{ es: '¿Cuánto tiempo aguantarías tú?', en: 'How long would you last?' }, { es: '¿Qué echarías más de menos?', en: 'What would you miss most?' }] },
            { q: { es: '¿Es justo defender una causa que también te beneficia?', en: 'Is it fair to defend a cause that also benefits you?' }, help: { es: 'Me parece justo siempre que… / Es problemático porque…', en: 'I think it’s fair as long as… / It’s problematic because…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Importa la intención?', en: 'Does the intention matter?' }] },
            { q: { es: '¿Qué parte de tu cultura está ligada a la comida?', en: 'What part of your culture is tied to food?' }, help: { es: 'En mi cultura, comer… significa… / Cuando nos reunimos…', en: 'In my culture, eating… means… / When we get together…' }, follow: [{ es: '¿Se está perdiendo?', en: 'Is it being lost?' }, { es: '¿Los jóvenes la mantienen?', en: 'Do young people keep it alive?' }] },
          ],
          words: [
            { es: 'la tierra fértil', en: 'fertile land' }, { es: 'la audiencia pública', en: 'the public hearing' }, { es: 'obligar', en: 'to force, to require' },
            { es: 'la huelga', en: 'the strike' }, { es: 'depender de', en: 'to depend on' }, { es: 'el abastecimiento', en: 'the supply' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the volcanic lookout
    {
      id: 'crater',
      name: { es: 'El mirador volcánico', en: 'The volcanic lookout' },
      who: { name: 'Noelani', role: { es: 'guardaparques', en: 'park ranger' } },
      levels: {
        A0: {
          scene: { es: 'Es la cima de un volcán. El volcán está dormido. Hay viento. Ves el mar y la ciudad. Noelani trabaja aquí.', en: 'It is the top of a volcano. The volcano is asleep. It is windy. You see the sea and the city. Noelani works here.' },
          opener: { es: '¡Hola! Soy Noelani. Este volcán es muy viejo. ¿Estás cansado?', en: 'Hi! I am Noelani. This volcano is very old. Are you tired?' },
          decide: {
            ask: { es: 'Noelani tiene agua, un mapa y una gorra. ¿Qué pides?', en: 'Noelani has water, a map and a cap. What do you ask for?' },
            options: [
              { say: { es: 'Agua, por favor. Tengo sed.', en: 'Water, please. I am thirsty.' }, then: { es: 'Noelani te da agua fría. ¡Gracias!', en: 'Noelani gives you cold water. Thank you!' } },
              { say: { es: 'El mapa, por favor.', en: 'The map, please.' }, then: { es: 'Noelani dice: «Aquí estamos. Allí está la playa».', en: 'Noelani says: “We are here. The beach is over there.”' } },
              { say: { es: 'Una foto, por favor.', en: 'A photo, please.' }, then: { es: 'Noelani hace una foto. ¡Es muy bonita!', en: 'Noelani takes a photo. It is very nice!' } },
            ],
          },
          twist: { es: '¡Ves ballenas en el mar! Son grandes y saltan. ¿Qué dices?', en: 'You see whales in the sea! They are big and they jump. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las montañas?', en: 'Do you like mountains?' }, help: { es: 'Sí, me gustan. / No, prefiero la playa.', en: 'Yes, I like them. / No, I prefer the beach.' }, follow: [{ es: '¿Hay montañas en tu país?', en: 'Are there mountains in your country?' }, { es: '¿Subes montañas?', en: 'Do you climb mountains?' }] },
            { q: { es: '¿Caminas mucho?', en: 'Do you walk a lot?' }, help: { es: 'Sí, camino mucho. / No, camino poco.', en: 'Yes, I walk a lot. / No, I walk a little.' }, follow: [{ es: '¿Cuántos minutos?', en: 'How many minutes?' }, { es: '¿Dónde caminas?', en: 'Where do you walk?' }] },
            { q: { es: '¿Haces fotos?', en: 'Do you take photos?' }, help: { es: 'Sí, hago muchas fotos. / No, no hago fotos.', en: 'Yes, I take lots of photos. / No, I don’t take photos.' }, follow: [{ es: '¿Con el teléfono?', en: 'With your phone?' }, { es: '¿De qué?', en: 'Of what?' }] },
            { q: { es: '¿Te gustan los animales?', en: 'Do you like animals?' }, help: { es: 'Sí, me gustan los… / No mucho.', en: 'Yes, I like… / Not much.' }, follow: [{ es: '¿Tienes un animal en casa?', en: 'Do you have a pet?' }, { es: '¿Qué animal es tu favorito?', en: 'What is your favorite animal?' }] },
          ],
          words: [
            { es: 'el volcán', en: 'the volcano' }, { es: 'la cima', en: 'the top, the summit' }, { es: 'el viento', en: 'the wind' },
            { es: 'el mapa', en: 'the map' }, { es: 'la ballena', en: 'the whale' }, { es: 'saltar', en: 'to jump' },
          ],
        },
        A1: {
          scene: { es: 'El cráter Diamond Head, al lado de Waikiki. El camino a la cima tiene escaleras, un túnel oscuro y un viejo búnker militar. Noelani explica la historia del lugar a los visitantes que llegan sin aire.', en: 'Diamond Head crater, next to Waikiki. The trail to the top has stairs, a dark tunnel and an old military bunker. Noelani explains the history of the place to visitors who arrive out of breath.' },
          opener: { es: 'Los antiguos hawaianos llamaban a este volcán Lēʻahi. El nombre en inglés viene de unos marineros que vieron piedras brillantes y pensaron que eran diamantes. ¡Eran solo cristales! ¿Tú alguna vez creíste que algo era valioso y no lo era?', en: 'The ancient Hawaiians called this volcano Lēʻahi. The English name comes from some sailors who saw shiny stones and thought they were diamonds. They were just crystals! Did you ever believe something was valuable and it wasn’t?' },
          decide: {
            ask: { es: 'Un turista quiere salir del camino para hacer una foto en el borde del cráter. Noelani está ocupada. ¿Qué haces?', en: 'A tourist wants to leave the trail to take a photo at the edge of the crater. Noelani is busy. What do you do?' },
            options: [
              { say: { es: 'Le digo que es peligroso.', en: 'I tell him it’s dangerous.' }, then: { es: 'El turista te mira, piensa un momento y vuelve al camino. Noelani te da las gracias.', en: 'The tourist looks at you, thinks for a moment and goes back to the trail. Noelani thanks you.' } },
              { say: { es: 'Llamo a Noelani.', en: 'I call Noelani.' }, then: { es: 'Noelani llega rápido y le explica que hay plantas protegidas. El turista se disculpa.', en: 'Noelani arrives quickly and explains that there are protected plants. The tourist apologizes.' } },
              { say: { es: 'No digo nada. No es mi problema.', en: 'I say nothing. It’s not my problem.' }, then: { es: 'El turista resbala un poco, se asusta y vuelve solo. Por suerte, no pasa nada.', en: 'The tourist slips a little, gets scared and comes back on his own. Luckily, nothing happens.' } },
            ],
          },
          twist: { es: 'Desde la cima, Noelani te muestra un barco a lo lejos y dice: «En invierno, las ballenas jorobadas vienen desde Alaska. Viajan cinco mil kilómetros». ¿Qué le preguntas?', en: 'From the top, Noelani shows you a boat in the distance and says: “In winter, humpback whales come from Alaska. They travel five thousand kilometers.” What do you ask her?' },
          questions: [
            { q: { es: '¿Subiste alguna vez a un volcán o una montaña alta?', en: 'Have you ever climbed a volcano or a high mountain?' }, help: { es: 'Sí, subí… / No, nunca subí…', en: 'Yes, I climbed… / No, I’ve never climbed…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué viste desde arriba?', en: 'What did you see from the top?' }] },
            { q: { es: '¿Te dan miedo los lugares oscuros, como un túnel?', en: 'Are you scared of dark places, like a tunnel?' }, help: { es: 'Sí, un poco. / No, no me dan miedo.', en: 'Yes, a little. / No, they don’t scare me.' }, follow: [{ es: '¿Y las alturas?', en: 'And heights?' }, { es: '¿Qué te da miedo?', en: 'What scares you?' }] },
            { q: { es: '¿Qué lugar histórico de tu país recomiendas?', en: 'What historic place in your country do you recommend?' }, help: { es: 'Recomiendo… porque…', en: 'I recommend… because…' }, follow: [{ es: '¿Lo visitaste?', en: 'Did you visit it?' }, { es: '¿Hay muchos turistas?', en: 'Are there a lot of tourists?' }] },
            { q: { es: '¿Respetas siempre las reglas en la naturaleza?', en: 'Do you always follow the rules in nature?' }, help: { es: 'Casi siempre. / A veces no…', en: 'Almost always. / Sometimes I don’t…' }, follow: [{ es: '¿Recoges tu basura?', en: 'Do you pick up your trash?' }, { es: '¿Sales del camino?', en: 'Do you leave the trail?' }] },
          ],
          words: [
            { es: 'el cráter', en: 'the crater' }, { es: 'la escalera', en: 'the stairs' }, { es: 'el túnel', en: 'the tunnel' },
            { es: 'el borde', en: 'the edge' }, { es: 'resbalar', en: 'to slip' }, { es: 'la ballena jorobada', en: 'the humpback whale' },
          ],
        },
        A2: {
          scene: { es: 'Noelani acaba de cerrar el camino porque un grupo de jóvenes pintó grafitis en las rocas del cráter. Los visitantes que hicieron la reserva están enfadados porque no pueden subir. Noelani tiene que explicar la situación.', en: 'Noelani has just closed the trail because a group of young people painted graffiti on the crater’s rocks. Visitors who booked are angry because they can’t go up. Noelani has to explain the situation.' },
          opener: { es: 'Estas rocas tienen cientos de miles de años. Anoche alguien escribió su nombre con pintura roja. Lo encontré esta mañana y me puse a llorar, de verdad. ¿Alguna vez viste a alguien destruir algo que para ti era importante?', en: 'These rocks are hundreds of thousands of years old. Last night someone wrote their name in red paint. I found it this morning and I started crying, really. Have you ever seen someone destroy something that was important to you?' },
          decide: {
            ask: { es: 'Un visitante muy enfadado exige que le devuelvan el dinero de la reserva. Noelani te mira, como pidiendo ayuda. ¿Qué haces?', en: 'A very angry visitor demands a refund for his booking. Noelani looks at you, as if asking for help. What do you do?' },
            options: [
              { say: { es: 'Le explico al visitante lo que pasó.', en: 'I explain to the visitor what happened.' }, then: { es: 'El hombre se calma al ver las fotos de las rocas. Dice que volverá otro día.', en: 'The man calms down when he sees the photos of the rocks. He says he’ll come back another day.' } },
              { say: { es: 'Me ofrezco a ayudar a limpiar.', en: 'I offer to help clean.' }, then: { es: 'Otros tres visitantes se suman. Noelani no lo puede creer.', en: 'Three other visitors join in. Noelani can’t believe it.' } },
              { say: { es: 'Me voy: no es asunto mío.', en: 'I leave: it’s none of my business.' }, then: { es: 'Mientras te vas, oyes al hombre gritar más fuerte. Noelani se queda sola con él.', en: 'As you leave, you hear the man shouting louder. Noelani is left alone with him.' } },
            ],
          },
          twist: { es: 'Llega un mensaje: la policía encontró a los jóvenes del grafiti. Uno de ellos es el sobrino de Noelani. ¿Qué crees que debería hacer ella?', en: 'A message arrives: the police found the graffiti kids. One of them is Noelani’s nephew. What do you think she should do?' },
          questions: [
            { q: { es: '¿Alguna vez tuviste que dar una mala noticia a alguien enfadado?', en: 'Have you ever had to give bad news to someone angry?' }, help: { es: 'Sí, una vez tuve que… / No, por suerte nunca…', en: 'Yes, once I had to… / No, luckily never…' }, follow: [{ es: '¿Cómo reaccionó?', en: 'How did they react?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué opinas de los grafitis en la ciudad?', en: 'What do you think of graffiti in the city?' }, help: { es: 'Me parecen arte cuando… / Me molestan porque…', en: 'I think they’re art when… / They bother me because…' }, follow: [{ es: '¿Y en la naturaleza?', en: 'And in nature?' }, { es: '¿Hay un límite?', en: 'Is there a limit?' }] },
            { q: { es: '¿Qué hiciste la última vez que viste algo injusto?', en: 'What did you do the last time you saw something unfair?' }, help: { es: 'Vi que… y decidí… / No hice nada porque…', en: 'I saw that… and I decided… / I didn’t do anything because…' }, follow: [{ es: '¿Lo harías igual hoy?', en: 'Would you do the same today?' }, { es: '¿Alguien te ayudó?', en: 'Did anyone help you?' }] },
            { q: { es: '¿Cómo era tu relación con las reglas cuando eras adolescente?', en: 'What was your relationship with rules like when you were a teenager?' }, help: { es: 'Cuando era adolescente, yo era… y a veces…', en: 'When I was a teenager, I was… and sometimes…' }, follow: [{ es: '¿Te castigaban?', en: 'Did you get punished?' }, { es: '¿Cambiaste mucho?', en: 'Did you change a lot?' }] },
          ],
          words: [
            { es: 'el grafiti', en: 'the graffiti' }, { es: 'la reserva', en: 'the booking' }, { es: 'devolver el dinero', en: 'to give a refund' },
            { es: 'calmarse', en: 'to calm down' }, { es: 'el sobrino', en: 'the nephew' }, { es: 'sumarse', en: 'to join in' },
          ],
        },
        B1: {
          scene: { es: 'Para proteger el cráter, el parque decidió limitar las visitas a tres mil personas al día con reserva obligatoria, y los turistas pagan más que los residentes. Algunos visitantes lo consideran discriminatorio; muchos vecinos dicen que por fin pueden volver a subir.', en: 'To protect the crater, the park decided to cap visits at three thousand people a day with mandatory booking, and tourists pay more than residents. Some visitors call it discriminatory; many locals say they can finally go up again.' },
          opener: { es: 'Antes del límite, subían hasta seis mil personas al día. Las escaleras se estaban rompiendo y no había espacio ni para respirar. Ahora es más tranquilo, pero cada día alguien me grita que esto es un lugar público y que no tengo derecho a cerrarlo. ¿Un lugar natural debería tener límite de visitantes?', en: 'Before the cap, up to six thousand people came up a day. The stairs were breaking and there wasn’t even room to breathe. Now it’s calmer, but every day someone shouts at me that this is a public place and I have no right to close it. Should a natural site have a visitor limit?' },
          decide: {
            ask: { es: 'El parque está pensando en un cambio para el año que viene. Noelani te pregunta cuál te parece más justo.', en: 'The park is considering a change for next year. Noelani asks which seems fairest to you.' },
            options: [
              { say: { es: 'Un sorteo diario: todos tienen la misma oportunidad.', en: 'A daily lottery: everyone gets the same chance.' }, then: { es: 'Noelani asiente: «Sería justo, pero los turistas que vienen solo tres días se quedarían sin ver nada».', en: 'Noelani nods: “It would be fair, but tourists who come for just three days could end up seeing nothing.”' } },
              { say: { es: 'Precios más altos para que vengan menos personas.', en: 'Higher prices so fewer people come.' }, then: { es: 'Noelani frunce el ceño: «Entonces solo subirían los ricos. ¿Es eso proteger la naturaleza?».', en: 'Noelani frowns: “Then only rich people would go up. Is that protecting nature?”' } },
              { say: { es: 'Días reservados solo para los residentes.', en: 'Days set aside just for residents.' }, then: { es: 'Noelani sonríe: «Los vecinos lo pedían hace años. Las agencias de turismo, en cambio, pondrán el grito en el cielo».', en: 'Noelani smiles: “Locals have been asking for that for years. Tour agencies, on the other hand, will hit the roof.”' } },
            ],
          },
          twist: { es: 'Noelani te confiesa que su sueldo se paga, en gran parte, con las entradas de los turistas. Si vienen menos, quizás el parque tenga que despedir a guardaparques. ¿Cambia eso tu opinión?', en: 'Noelani confesses that her salary is largely paid by tourists’ entry fees. If fewer come, the park may have to lay off rangers. Does that change your opinion?' },
          questions: [
            { q: { es: '¿Te parece justo que los turistas paguen más que los residentes?', en: 'Do you think it’s fair for tourists to pay more than residents?' }, help: { es: 'Me parece justo porque… / No me parece justo que…', en: 'I think it’s fair because… / I don’t think it’s fair that…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does that happen in your country?' }, { es: '¿Lo aceptarías como turista?', en: 'Would you accept it as a tourist?' }] },
            { q: { es: '¿Qué lugar de tu país está sufriendo por exceso de visitantes?', en: 'What place in your country is suffering from too many visitors?' }, help: { es: 'Creo que… está sufriendo porque… / Hace años era… y ahora…', en: 'I think… is suffering because… / Years ago it was… and now…' }, follow: [{ es: '¿Qué solución propondrías?', en: 'What solution would you propose?' }, { es: '¿Quién se beneficia?', en: 'Who benefits?' }] },
            { q: { es: 'Si pudieras decidir, ¿qué lugar natural cerrarías al público durante un tiempo?', en: 'If you could decide, what natural place would you close to the public for a while?' }, help: { es: 'Cerraría… durante… para que…', en: 'I’d close… for… so that…' }, follow: [{ es: '¿Cómo reaccionaría la gente?', en: 'How would people react?' }, { es: '¿Y los negocios cercanos?', en: 'And the businesses nearby?' }] },
            { q: { es: '¿Es posible amar un lugar y, al mismo tiempo, contribuir a su deterioro?', en: 'Is it possible to love a place and, at the same time, contribute to its decline?' }, help: { es: 'Sí, creo que pasa cuando… / Es una contradicción, aunque…', en: 'Yes, I think it happens when… / It’s a contradiction, although…' }, follow: [{ es: '¿Te pasó a ti?', en: 'Has it happened to you?' }, { es: '¿Viajarías menos por esa razón?', en: 'Would you travel less for that reason?' }] },
          ],
          words: [
            { es: 'el límite', en: 'the cap, the limit' }, { es: 'la reserva obligatoria', en: 'mandatory booking' }, { es: 'discriminatorio', en: 'discriminatory' },
            { es: 'el sorteo', en: 'the lottery, the draw' }, { es: 'despedir', en: 'to lay off, to fire' }, { es: 'el deterioro', en: 'the decline, the wear' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the tropical trail
    {
      id: 'sendero',
      name: { es: 'El sendero tropical', en: 'The tropical trail' },
      who: { name: 'Kai', role: { es: 'guía de senderismo', en: 'hiking guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un bosque tropical. Hay plantas grandes y una cascada. Kai es guía. Hay barro en el camino.', en: 'It is a tropical forest. There are big plants and a waterfall. Kai is a guide. There is mud on the path.' },
          opener: { es: '¡Hola! Soy Kai. Vamos a la cascada. ¿Tienes zapatos buenos?', en: 'Hi! I am Kai. We are going to the waterfall. Do you have good shoes?' },
          decide: {
            ask: { es: 'Hay dos caminos: uno corto con barro y uno largo sin barro. ¿Cuál quieres?', en: 'There are two paths: a short one with mud and a long one without mud. Which one do you want?' },
            options: [
              { say: { es: 'El corto, con barro.', en: 'The short one, with mud.' }, then: { es: '¡Tus zapatos están marrones! Kai ríe.', en: 'Your shoes are brown! Kai laughs.' } },
              { say: { es: 'El largo, sin barro.', en: 'The long one, without mud.' }, then: { es: 'Caminas una hora. Ves pájaros de colores.', en: 'You walk for an hour. You see colorful birds.' } },
              { say: { es: 'No sé. ¿Y tú?', en: 'I don’t know. And you?' }, then: { es: 'Kai dice: «¡El corto! Es más divertido».', en: 'Kai says: “The short one! It is more fun.”' } },
            ],
          },
          twist: { es: '¡Empieza a llover! Kai saca una hoja enorme. Es un paraguas natural. ¿Qué dices?', en: 'It starts to rain! Kai takes out a huge leaf. It is a natural umbrella. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta caminar en la naturaleza?', en: 'Do you like walking in nature?' }, help: { es: 'Sí, me gusta. / No, prefiero la ciudad.', en: 'Yes, I like it. / No, I prefer the city.' }, follow: [{ es: '¿Con quién caminas?', en: 'Who do you walk with?' }, { es: '¿Los fines de semana?', en: 'On weekends?' }] },
            { q: { es: '¿Hay bosques en tu país?', en: 'Are there forests in your country?' }, help: { es: 'Sí, hay muchos. / No, hay pocos.', en: 'Yes, there are lots. / No, there are few.' }, follow: [{ es: '¿Son grandes?', en: 'Are they big?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Tienes paraguas?', en: 'Do you have an umbrella?' }, { es: '¿Llueve mucho en tu ciudad?', en: 'Does it rain a lot in your city?' }] },
            { q: { es: '¿Te gustan los pájaros?', en: 'Do you like birds?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Qué color es tu favorito?', en: 'What is your favorite color?' }, { es: '¿Hay pájaros en tu casa?', en: 'Are there birds at your house?' }] },
          ],
          words: [
            { es: 'el bosque', en: 'the forest' }, { es: 'la cascada', en: 'the waterfall' }, { es: 'el barro', en: 'the mud' },
            { es: 'el camino', en: 'the path' }, { es: 'el pájaro', en: 'the bird' }, { es: 'la hoja', en: 'the leaf' },
          ],
        },
        A1: {
          scene: { es: 'El sendero de Mānoa, en un valle verde detrás de Honolulu. Los árboles son altísimos, hay bambú que suena con el viento y, al final, una cascada de cincuenta metros. Kai lleva a un grupo pequeño.', en: 'The Mānoa trail, in a green valley behind Honolulu. The trees are very tall, there’s bamboo that creaks in the wind and, at the end, a 150-foot waterfall. Kai is leading a small group.' },
          opener: { es: 'Aquí llueve casi todos los días, por eso todo es tan verde. Muchas de estas plantas no son de Hawái: llegaron en barcos y ahora ocupan el lugar de las nativas. ¿En tu ciudad hay plantas o animales que vienen de otros lugares?', en: 'It rains here almost every day, that’s why everything is so green. Many of these plants aren’t from Hawaii: they arrived on ships and now take the place of native ones. Are there plants or animals in your city that come from other places?' },
          decide: {
            ask: { es: 'Una chica del grupo se cae en el barro y se hace daño en el tobillo. Faltan veinte minutos para la cascada. ¿Qué propones?', en: 'A girl in the group falls in the mud and hurts her ankle. The waterfall is twenty minutes away. What do you suggest?' },
            options: [
              { say: { es: 'Volvemos todos juntos.', en: 'We all go back together.' }, then: { es: 'El grupo vuelve despacio. La chica te lo agradece; los demás, un poco menos.', en: 'The group heads back slowly. The girl thanks you; the others, a bit less.' } },
              { say: { es: 'Me quedo con ella y los demás siguen.', en: 'I stay with her and the others keep going.' }, then: { es: 'Mientras esperan, ella te cuenta que es bióloga. Aprendes los nombres de diez plantas.', en: 'While you wait, she tells you she’s a biologist. You learn the names of ten plants.' } },
              { say: { es: 'Kai decide: él es el guía.', en: 'Kai decides: he’s the guide.' }, then: { es: 'Kai le venda el tobillo con una camiseta y la ayuda a caminar. Llegan todos a la cascada.', en: 'Kai wraps her ankle with a T-shirt and helps her walk. Everyone makes it to the waterfall.' } },
            ],
          },
          twist: { es: 'En la cascada, Kai se pone serio: «No se bañen hoy. Llovió arriba en la montaña y el agua puede subir de golpe». Dos turistas no le hacen caso. ¿Qué haces?', en: 'At the waterfall, Kai gets serious: “Don’t swim today. It rained up on the mountain and the water can rise all at once.” Two tourists ignore him. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta hacer senderismo?', en: 'Do you like hiking?' }, help: { es: 'Sí, hago senderismo… / No, porque…', en: 'Yes, I go hiking… / No, because…' }, follow: [{ es: '¿Cuál fue tu mejor caminata?', en: 'What was your best hike?' }, { es: '¿Vas solo o acompañado?', en: 'Do you go alone or with others?' }] },
            { q: { es: '¿Alguna vez te hiciste daño en un viaje?', en: 'Did you ever get hurt on a trip?' }, help: { es: 'Sí, una vez me hice daño en… / No, nunca.', en: 'Yes, once I hurt my… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Qué llevas siempre en la mochila?', en: 'What do you always carry in your backpack?' }, help: { es: 'Siempre llevo…', en: 'I always carry…' }, follow: [{ es: '¿Llevas comida?', en: 'Do you carry food?' }, { es: '¿Algo extraño?', en: 'Anything strange?' }] },
            { q: { es: '¿Escuchas siempre a los guías y expertos?', en: 'Do you always listen to guides and experts?' }, help: { es: 'Casi siempre. / Depende de…', en: 'Almost always. / It depends on…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Alguna vez te equivocaste por no escuchar?', en: 'Were you ever wrong for not listening?' }] },
          ],
          words: [
            { es: 'el valle', en: 'the valley' }, { es: 'el bambú', en: 'the bamboo' }, { es: 'nativo', en: 'native' },
            { es: 'el tobillo', en: 'the ankle' }, { es: 'hacerse daño', en: 'to get hurt' }, { es: 'bañarse', en: 'to swim, to bathe' },
          ],
        },
        A2: {
          scene: { es: 'Kai antes trabajaba en una oficina de seguros en California. Hace cuatro años lo dejó todo y volvió a Oahu, la isla de su madre, para trabajar como guía. Hoy un cliente le pregunta si no se arrepiente de ganar tan poco.', en: 'Kai used to work in an insurance office in California. Four years ago he gave it all up and came back to Oahu, his mother’s island, to work as a guide. Today a client asks him if he doesn’t regret earning so little.' },
          opener: { es: 'En la oficina ganaba el triple, pero me dolía la cabeza todos los días. Una mañana me di cuenta de que no había visto el sol en toda la semana. Esa misma tarde compré el billete. ¿Tú alguna vez tomaste una decisión importante en un solo día?', en: 'At the office I earned three times as much, but I had a headache every day. One morning I realized I hadn’t seen the sun all week. That same afternoon I bought the ticket. Have you ever made a big decision in a single day?' },
          decide: {
            ask: { es: 'Una agencia grande le ofrece a Kai un contrato fijo: buen sueldo, pero grupos de cuarenta turistas y siempre el mismo camino. ¿Qué le aconsejas?', en: 'A big agency offers Kai a permanent contract: good pay, but groups of forty tourists and always the same trail. What do you advise him?' },
            options: [
              { say: { es: 'Que acepte: la estabilidad es importante.', en: 'To accept: stability matters.' }, then: { es: 'Kai firma. Tres meses después ya puede pagar el alquiler sin miedo, pero extraña los grupos pequeños.', en: 'Kai signs. Three months later he can pay the rent without worrying, but he misses the small groups.' } },
              { say: { es: 'Que diga que no: dejó la oficina por algo.', en: 'To say no: he left the office for a reason.' }, then: { es: 'Kai sigue solo. Algunos meses son difíciles, pero sus clientes escriben reseñas maravillosas.', en: 'Kai stays independent. Some months are hard, but his clients write wonderful reviews.' } },
              { say: { es: 'Que negocie grupos más pequeños.', en: 'To negotiate smaller groups.' }, then: { es: 'La agencia acepta grupos de quince. Kai gana un poco menos, pero disfruta su trabajo.', en: 'The agency agrees to groups of fifteen. Kai earns a bit less, but enjoys his work.' } },
            ],
          },
          twist: { es: 'Kai recibe una llamada de su antiguo jefe en California: le ofrece volver con un sueldo todavía más alto y trabajo desde casa. Kai se queda callado. ¿Qué le dices?', en: 'Kai gets a call from his old boss in California: he offers him his job back with an even higher salary and remote work. Kai goes quiet. What do you tell him?' },
          questions: [
            { q: { es: '¿Alguna vez dejaste un trabajo o un estudio? ¿Por qué?', en: 'Have you ever quit a job or a course of study? Why?' }, help: { es: 'Sí, dejé… porque… / No, nunca dejé…', en: 'Yes, I quit… because… / No, I’ve never quit…' }, follow: [{ es: '¿Fue difícil decidirlo?', en: 'Was it hard to decide?' }, { es: '¿Qué dijo tu familia?', en: 'What did your family say?' }] },
            { q: { es: '¿Prefieres un trabajo estable o un trabajo que te apasione?', en: 'Do you prefer a stable job or one you’re passionate about?' }, help: { es: 'Prefiero… porque… / Creo que se puede tener las dos cosas si…', en: 'I prefer… because… / I think you can have both if…' }, follow: [{ es: '¿Cómo es tu trabajo ideal?', en: 'What’s your ideal job like?' }, { es: '¿Lo tienes ahora?', en: 'Do you have it now?' }] },
            { q: { es: '¿Volverías a vivir al lugar de origen de tu familia?', en: 'Would you move back to where your family comes from?' }, help: { es: 'Sí, volvería porque… / No, porque…', en: 'Yes, I’d go back because… / No, because…' }, follow: [{ es: '¿Qué extrañas de allí?', en: 'What do you miss from there?' }, { es: '¿Y qué no extrañas?', en: 'And what don’t you miss?' }] },
            { q: { es: '¿Cuándo fue la última vez que te diste cuenta de algo importante?', en: 'When was the last time you realized something important?' }, help: { es: 'Me di cuenta de que… cuando…', en: 'I realized that… when…' }, follow: [{ es: '¿Cambiaste algo después?', en: 'Did you change anything afterwards?' }, { es: '¿Se lo contaste a alguien?', en: 'Did you tell anyone?' }] },
          ],
          words: [
            { es: 'el seguro', en: 'the insurance' }, { es: 'arrepentirse', en: 'to regret' }, { es: 'darse cuenta', en: 'to realize' },
            { es: 'el contrato fijo', en: 'the permanent contract' }, { es: 'negociar', en: 'to negotiate' }, { es: 'la reseña', en: 'the review' },
          ],
        },
        B1: {
          scene: { es: 'Un sendero muy famoso en redes sociales está en terreno privado y prohibido; aun así, miles de turistas lo recorren cada año para hacerse una foto en la cima. Los rescates cuestan mucho dinero. Algunos clientes le piden a Kai que los lleve «por el camino secreto».', en: 'A trail that’s very famous on social media is on private, off-limits land; even so, thousands of tourists hike it every year to take a photo at the top. Rescues cost a lot of money. Some clients ask Kai to take them “by the secret route.”' },
          opener: { es: 'Me ofrecen hasta quinientos dólares por llevarlos. Les explico que es ilegal, que la tierra es sagrada para muchas familias y que el año pasado hubo tres rescates en helicóptero. Algunos me responden que lo harán igual, con o sin guía. Entonces me pregunto: ¿no sería más seguro que fueran conmigo?', en: 'They offer me up to five hundred dollars to take them. I explain that it’s illegal, that the land is sacred to many families and that last year there were three helicopter rescues. Some reply that they’ll do it anyway, with or without a guide. So I wonder: wouldn’t it be safer if they went with me?' },
          decide: {
            ask: { es: 'Un cliente insiste y le ofrece a Kai el doble. ¿Qué le dirías tú a Kai?', en: 'A client insists and offers Kai double. What would you tell Kai?' },
            options: [
              { say: { es: 'Que no: si lo hace, se vuelve parte del problema.', en: 'No: if he does it, he becomes part of the problem.' }, then: { es: 'Kai rechaza el dinero. El cliente se va solo esa tarde. Kai pasa la noche mirando el teléfono, nervioso.', en: 'Kai turns down the money. The client goes alone that afternoon. Kai spends the night checking his phone, anxious.' } },
              { say: { es: 'Que proponga otra caminata igual de impresionante y legal.', en: 'To suggest another hike that’s just as impressive and legal.' }, then: { es: 'El cliente acepta a regañadientes… y vuelve encantado. Publica fotos que nadie había visto.', en: 'The client reluctantly agrees… and comes back delighted. He posts photos nobody had ever seen.' } },
              { say: { es: 'Que hable con los dueños del terreno.', en: 'To talk to the landowners.' }, then: { es: 'La familia propietaria le cuenta a Kai que estudian abrir visitas guiadas con permiso. Le ofrecen ser uno de los guías.', en: 'The owning family tells Kai they’re considering opening permitted guided visits. They offer him a spot as one of the guides.' } },
            ],
          },
          twist: { es: 'Esa noche, Kai ve en las noticias que rescataron a un excursionista en ese mismo sendero. Está herido, pero vivo. Es el cliente que le ofreció el dinero. ¿Qué siente Kai? ¿Tiene alguna responsabilidad?', en: 'That night, Kai sees on the news that a hiker was rescued on that very trail. He’s hurt, but alive. It’s the client who offered him the money. How does Kai feel? Does he bear any responsibility?' },
          questions: [
            { q: { es: '¿Las redes sociales están cambiando la forma de viajar? ¿Para bien o para mal?', en: 'Is social media changing the way we travel? For better or worse?' }, help: { es: 'Creo que han cambiado… porque… / Por un lado…, por otro…', en: 'I think it has changed… because… / On the one hand…, on the other…' }, follow: [{ es: '¿Elegiste algún destino por una foto?', en: 'Have you chosen a destination because of a photo?' }, { es: '¿Viajas para vivir algo o para mostrarlo?', en: 'Do you travel to experience something or to show it?' }] },
            { q: { es: '¿Quién debería pagar un rescate: el gobierno o la persona rescatada?', en: 'Who should pay for a rescue: the government or the person rescued?' }, help: { es: 'Debería pagar… porque… / Depende de si…', en: '… should pay because… / It depends on whether…' }, follow: [{ es: '¿Y si la persona no sabía el riesgo?', en: 'And if the person didn’t know the risk?' }, { es: '¿Cómo funciona en tu país?', en: 'How does it work in your country?' }] },
            { q: { es: '¿Es mejor reducir el daño de algo que va a pasar igual, o negarse a participar?', en: 'Is it better to reduce the harm of something that will happen anyway, or to refuse to take part?' }, help: { es: 'Me parece mejor… aunque… / Si participas, en cierto modo…', en: 'I think it’s better to… although… / If you take part, in a way…' }, follow: [{ es: '¿Puedes pensar en otro ejemplo?', en: 'Can you think of another example?' }, { es: '¿Qué harías tú en el lugar de Kai?', en: 'What would you do in Kai’s place?' }] },
            { q: { es: '¿Qué lugares deberían ser solo para las comunidades que los consideran sagrados?', en: 'Which places should be only for the communities that consider them sacred?' }, help: { es: 'Creo que… deberían… siempre que… / No estoy seguro de que…', en: 'I think… should… as long as… / I’m not sure that…' }, follow: [{ es: '¿Hay lugares así en tu país?', en: 'Are there places like that in your country?' }, { es: '¿Los visitaste?', en: 'Have you visited them?' }] },
          ],
          words: [
            { es: 'el terreno privado', en: 'private land' }, { es: 'el rescate', en: 'the rescue' }, { es: 'sagrado', en: 'sacred' },
            { es: 'el excursionista', en: 'the hiker' }, { es: 'herido', en: 'injured' }, { es: 'reducir el daño', en: 'to reduce harm' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the oceanfront restaurant
    {
      id: 'restaurante',
      name: { es: 'El restaurante junto al océano', en: 'The oceanfront restaurant' },
      who: { name: 'Leilani', role: { es: 'dueña del restaurante', en: 'restaurant owner' } },
      levels: {
        A0: {
          scene: { es: 'Es un restaurante al lado del mar. Hay antorchas y música. Leilani es la dueña. Es de noche.', en: 'It is a restaurant by the sea. There are torches and music. Leilani is the owner. It is night.' },
          opener: { es: '¡Aloha! Bienvenido. Soy Leilani. ¿Mesa para uno?', en: 'Aloha! Welcome. I am Leilani. A table for one?' },
          decide: {
            ask: { es: 'Leilani dice: «Hay pescado, pollo y arroz. ¿Qué comes?».', en: 'Leilani says: “There is fish, chicken and rice. What do you eat?”' },
            options: [
              { say: { es: 'Pescado, por favor.', en: 'Fish, please.' }, then: { es: 'El pescado es fresco. Es del mar de hoy.', en: 'The fish is fresh. It is from today’s sea.' } },
              { say: { es: 'Pollo con arroz.', en: 'Chicken with rice.' }, then: { es: 'Leilani dice: «¡Es mi plato favorito!».', en: 'Leilani says: “It is my favorite dish!”' } },
              { say: { es: 'No sé. ¿Qué recomiendas?', en: 'I don’t know. What do you recommend?' }, then: { es: 'Leilani trae un plato con pescado crudo y arroz: ¡el poke!', en: 'Leilani brings a dish with raw fish and rice: poke!' } },
            ],
          },
          twist: { es: 'Hay música y baile. Una bailarina dice: «¡Ven a bailar!». ¿Qué dices?', en: 'There is music and dancing. A dancer says: “Come and dance!” What do you say?' },
          questions: [
            { q: { es: '¿Comes pescado?', en: 'Do you eat fish?' }, help: { es: 'Sí, como pescado. / No, no como pescado.', en: 'Yes, I eat fish. / No, I don’t eat fish.' }, follow: [{ es: '¿Comes pescado crudo?', en: 'Do you eat raw fish?' }, { es: '¿Cocinas pescado?', en: 'Do you cook fish?' }] },
            { q: { es: '¿Vas a restaurantes?', en: 'Do you go to restaurants?' }, help: { es: 'Sí, a veces. / No, como en casa.', en: 'Yes, sometimes. / No, I eat at home.' }, follow: [{ es: '¿Con quién vas?', en: 'Who do you go with?' }, { es: '¿Cuál es tu restaurante favorito?', en: 'What is your favorite restaurant?' }] },
            { q: { es: '¿Te gusta bailar?', en: 'Do you like dancing?' }, help: { es: 'Sí, me gusta. / No, no bailo.', en: 'Yes, I like it. / No, I don’t dance.' }, follow: [{ es: '¿Qué baile?', en: 'What dance?' }, { es: '¿Bailas en fiestas?', en: 'Do you dance at parties?' }] },
            { q: { es: '¿Cenas tarde o temprano?', en: 'Do you have dinner late or early?' }, help: { es: 'Ceno a las…', en: 'I have dinner at…' }, follow: [{ es: '¿Qué cenas normalmente?', en: 'What do you usually have for dinner?' }, { es: '¿Cenas con tu familia?', en: 'Do you have dinner with your family?' }] },
          ],
          words: [
            { es: 'el restaurante', en: 'the restaurant' }, { es: 'la dueña', en: 'the owner' }, { es: 'el pescado', en: 'the fish' },
            { es: 'el arroz', en: 'the rice' }, { es: 'crudo', en: 'raw' }, { es: 'la antorcha', en: 'the torch' },
          ],
        },
        A1: {
          scene: { es: 'Un restaurante familiar en la playa, con mesas sobre la arena y antorchas. Leilani lo abrió con su marido hace quince años. Cada noche, a la puesta del sol, alguien toca una caracola para anunciar el final del día.', en: 'A family restaurant on the beach, with tables on the sand and torches. Leilani opened it with her husband fifteen years ago. Every evening at sunset, someone blows a conch shell to mark the end of the day.' },
          opener: { es: 'Mi madre cocinaba estos platos para la familia; yo solo los traje aquí. El poke de hoy es de atún que pescó mi primo esta mañana. ¿Cuál es el plato de tu familia que más te gusta?', en: 'My mother cooked these dishes for the family; I just brought them here. Today’s poke is made with tuna my cousin caught this morning. What’s your favorite family dish?' },
          decide: {
            ask: { es: 'Es tu última noche en Hawái. Leilani te ofrece una mesa en la arena o una mesa en la terraza, con mejor vista. ¿Cuál eliges?', en: 'It’s your last night in Hawaii. Leilani offers you a table on the sand or one on the terrace, with a better view. Which do you choose?' },
            options: [
              { say: { es: 'En la arena, sin zapatos.', en: 'On the sand, barefoot.' }, then: { es: 'Sientes la arena todavía caliente. Un cangrejo pequeño pasa debajo de tu mesa.', en: 'You feel the sand, still warm. A little crab walks under your table.' } },
              { say: { es: 'En la terraza, para ver la puesta de sol.', en: 'On the terrace, to watch the sunset.' }, then: { es: 'El cielo se pone naranja y rosa. Todo el restaurante se queda en silencio un momento.', en: 'The sky turns orange and pink. The whole restaurant goes quiet for a moment.' } },
              { say: { es: 'Donde se siente Leilani.', en: 'Wherever Leilani sits.' }, then: { es: 'Leilani se ríe y se sienta contigo cinco minutos. Te cuenta cómo conoció a su marido.', en: 'Leilani laughs and sits with you for five minutes. She tells you how she met her husband.' } },
            ],
          },
          twist: { es: 'Suena la caracola. Leilani te pide que la toques tú esta noche. Nunca lo hiciste. ¿Qué haces?', en: 'The conch shell sounds. Leilani asks you to blow it tonight. You’ve never done it. What do you do?' },
          questions: [
            { q: { es: '¿Cuál es el plato de tu familia que más te gusta?', en: 'What’s your favorite family dish?' }, help: { es: 'Me encanta… Lo cocina mi…', en: 'I love… My… cooks it.' }, follow: [{ es: '¿Sabes cocinarlo?', en: 'Do you know how to cook it?' }, { es: '¿Cuándo lo comes?', en: 'When do you eat it?' }] },
            { q: { es: '¿Qué haces en la última noche de un viaje?', en: 'What do you do on the last night of a trip?' }, help: { es: 'Normalmente… / La última vez…', en: 'Usually… / The last time…' }, follow: [{ es: '¿Te pones triste?', en: 'Do you get sad?' }, { es: '¿Compras regalos?', en: 'Do you buy gifts?' }] },
            { q: { es: '¿Trabajarías con tu pareja o tu familia?', en: 'Would you work with your partner or your family?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Con quién sí?', en: 'With whom, yes?' }, { es: '¿Con quién nunca?', en: 'With whom, never?' }] },
            { q: { es: '¿Prefieres ver el amanecer o la puesta de sol?', en: 'Do you prefer watching the sunrise or the sunset?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Dónde viste el mejor?', en: 'Where did you see the best one?' }, { es: '¿Con quién?', en: 'Who with?' }] },
          ],
          words: [
            { es: 'la puesta de sol', en: 'the sunset' }, { es: 'la caracola', en: 'the conch shell' }, { es: 'el atún', en: 'the tuna' },
            { es: 'la terraza', en: 'the terrace' }, { es: 'el cangrejo', en: 'the crab' }, { es: 'pescar', en: 'to fish, to catch' },
          ],
        },
        A2: {
          scene: { es: 'Esta noche el restaurante está lleno: un crucero llegó al puerto con tres mil pasajeros. Leilani contrató a dos camareros extra, pero uno no vino. Hay mesas esperando, un cliente se quejó de la sopa y la cocina está saturada.', en: 'Tonight the restaurant is packed: a cruise ship arrived in port with three thousand passengers. Leilani hired two extra waiters, but one didn’t show up. Tables are waiting, a customer complained about the soup and the kitchen is swamped.' },
          opener: { es: 'Cuando abrimos, venían sobre todo vecinos. Mi marido tocaba el ukelele y la gente se quedaba hasta tarde contando historias. Ahora los días de crucero ganamos en una noche lo que antes ganábamos en una semana… pero ya casi no veo a los vecinos. ¿Tú qué prefieres como cliente: un lugar tranquilo o un lugar con mucha vida?', en: 'When we opened, it was mostly locals. My husband played the ukulele and people stayed late telling stories. Now, on cruise days, we make in one night what we used to make in a week… but I hardly see the locals anymore. What do you prefer as a customer: a quiet place or a lively one?' },
          decide: {
            ask: { es: 'Leilani está desbordada. Te pregunta, medio en broma: «¿Sabes llevar platos?». ¿Qué haces?', en: 'Leilani is overwhelmed. She asks you, half joking: “Can you carry plates?” What do you do?' },
            options: [
              { say: { es: '¡Claro! Trabajé de camarero hace años.', en: 'Sure! I worked as a waiter years ago.' }, then: { es: 'Durante una hora llevas platos de poke. Al final, Leilani te invita a cenar y te da una camiseta del restaurante.', en: 'For an hour you carry plates of poke. At the end, Leilani treats you to dinner and gives you a restaurant T-shirt.' } },
              { say: { es: 'No sé llevar platos, pero puedo lavar vasos.', en: 'I can’t carry plates, but I can wash glasses.' }, then: { es: 'Terminas en la cocina, mojado y riendo con el cocinero, que te enseña tres palabras en hawaiano.', en: 'You end up in the kitchen, soaked and laughing with the cook, who teaches you three words in Hawaiian.' } },
              { say: { es: 'Mejor no: voy a romper algo.', en: 'Better not: I’ll break something.' }, then: { es: 'Leilani se ríe. Entonces le ayudas de otra forma: explicas el menú en español a una familia de turistas mexicanos.', en: 'Leilani laughs. So you help in another way: you explain the menu in Spanish to a family of Mexican tourists.' } },
            ],
          },
          twist: { es: 'Un cliente del crucero se queja en voz alta: dice que el restaurante «no es auténtico» porque no hay bailarinas de hula. Leilani respira hondo. ¿Qué le dirías tú a ese cliente?', en: 'A cruise passenger complains loudly: he says the restaurant “isn’t authentic” because there are no hula dancers. Leilani takes a deep breath. What would you say to that customer?' },
          questions: [
            { q: { es: '¿Trabajaste alguna vez en un restaurante o en una tienda?', en: 'Have you ever worked in a restaurant or a shop?' }, help: { es: 'Sí, trabajé en… cuando… / No, nunca trabajé…', en: 'Yes, I worked at… when… / No, I’ve never worked…' }, follow: [{ es: '¿Qué fue lo más difícil?', en: 'What was the hardest part?' }, { es: '¿Tuviste algún cliente difícil?', en: 'Did you have any difficult customers?' }] },
            { q: { es: '¿Cómo era tu barrio hace diez años? ¿Cambió mucho?', en: 'What was your neighborhood like ten years ago? Has it changed a lot?' }, help: { es: 'Hace diez años había… y ahora hay… / Antes la gente… y ahora…', en: 'Ten years ago there was… and now there is… / Before, people… and now…' }, follow: [{ es: '¿Para mejor o para peor?', en: 'For better or worse?' }, { es: '¿Qué extrañas?', en: 'What do you miss?' }] },
            { q: { es: '¿Qué significa para ti que un lugar sea «auténtico»?', en: 'What does it mean to you for a place to be “authentic”?' }, help: { es: 'Para mí, un lugar es auténtico cuando…', en: 'For me, a place is authentic when…' }, follow: [{ es: '¿Buscas lugares auténticos cuando viajas?', en: 'Do you look for authentic places when you travel?' }, { es: '¿Cómo los encuentras?', en: 'How do you find them?' }] },
            { q: { es: '¿Alguna vez ayudaste a un desconocido en un momento difícil?', en: 'Have you ever helped a stranger in a difficult moment?' }, help: { es: 'Sí, una vez… / No, pero una vez alguien me ayudó a mí…', en: 'Yes, once… / No, but once someone helped me…' }, follow: [{ es: '¿Qué pasó después?', en: 'What happened afterwards?' }, { es: '¿Volviste a verlo?', en: 'Did you see them again?' }] },
          ],
          words: [
            { es: 'el crucero', en: 'the cruise ship' }, { es: 'quejarse', en: 'to complain' }, { es: 'desbordado', en: 'overwhelmed' },
            { es: 'el camarero', en: 'the waiter' }, { es: 'auténtico', en: 'authentic' }, { es: 'respirar hondo', en: 'to take a deep breath' },
          ],
        },
        B1: {
          scene: { es: 'Los efectos del turismo en Hawái: el turismo da trabajo a uno de cada cinco residentes, pero los precios de la vivienda se dispararon y muchas familias hawaianas se fueron a vivir al continente. Una cadena hotelera quiere comprar el restaurante de Leilani para construir un resort. Ofrece una cifra que resolvería la vida de su familia.', en: 'The effects of tourism in Hawaii: tourism employs one in five residents, but housing prices have soared and many Hawaiian families have moved to the mainland. A hotel chain wants to buy Leilani’s restaurant to build a resort. They’re offering a sum that would set her family up for life.' },
          opener: { es: 'Mi hija trabaja en un hotel y gana bien; sin el turismo, no tendría ese empleo. Pero mi hermano tuvo que irse a Las Vegas porque aquí no podía pagar un alquiler. Los dos tienen razón. Si vendo, el restaurante desaparece; si no vendo, quizás compren el terreno de al lado y nos rodeen igual. ¿Tú qué harías?', en: 'My daughter works at a hotel and earns well; without tourism, she wouldn’t have that job. But my brother had to move to Las Vegas because he couldn’t afford rent here. They’re both right. If I sell, the restaurant disappears; if I don’t, maybe they’ll buy the lot next door and surround us anyway. What would you do?' },
          decide: {
            ask: { es: 'La cadena espera la respuesta el viernes. Leilani te pide tu opinión sincera, como alguien que viene de fuera.', en: 'The chain expects an answer on Friday. Leilani asks for your honest opinion, as someone from outside.' },
            options: [
              { say: { es: 'Vender, pero con condiciones para el barrio.', en: 'Sell, but with conditions for the neighborhood.' }, then: { es: 'Leilani exige empleo para sus trabajadores y un espacio para la comida local en el resort. La cadena acepta la mitad.', en: 'Leilani demands jobs for her staff and space for local food in the resort. The chain agrees to half.' } },
              { say: { es: 'No vender: el restaurante es parte de la comunidad.', en: 'Don’t sell: the restaurant is part of the community.' }, then: { es: 'Leilani rechaza la oferta. Los vecinos organizan una cena para apoyarla y el restaurante se llena de caras conocidas.', en: 'Leilani turns the offer down. The neighbors throw a dinner to support her and the restaurant fills with familiar faces.' } },
              { say: { es: 'Esperar y buscar otros compradores locales.', en: 'Wait and look for other local buyers.' }, then: { es: 'Una cooperativa de pescadores se interesa, aunque solo puede pagar un tercio. Leilani tiene mucho que pensar.', en: 'A fishermen’s cooperative is interested, although it can only pay a third. Leilani has a lot to think about.' } },
            ],
          },
          twist: { es: 'Leilani te hace una pregunta incómoda: «Tú también eres turista. Tu hotel, tu vuelo, tu cena de esta noche… ¿también eres parte del problema?». ¿Qué le respondes?', en: 'Leilani asks you an uncomfortable question: “You’re a tourist too. Your hotel, your flight, your dinner tonight… are you part of the problem as well?” What do you answer?' },
          questions: [
            { q: { es: '¿Cuáles son los efectos positivos y negativos del turismo en un lugar como Hawái?', en: 'What are the positive and negative effects of tourism in a place like Hawaii?' }, help: { es: 'Por un lado, el turismo… Por otro lado, provoca que… / Lo positivo es…, pero lo negativo…', en: 'On the one hand, tourism… On the other hand, it causes… / The good side is…, but the bad side…' }, follow: [{ es: '¿Pasa lo mismo en tu país?', en: 'Does the same happen in your country?' }, { es: '¿Qué pesa más?', en: 'Which weighs more?' }] },
            { q: { es: '¿Qué harías tú en el lugar de Leilani? ¿Por qué?', en: 'What would you do in Leilani’s place? Why?' }, help: { es: 'Si yo fuera Leilani,… porque… / En su lugar, no vendería a menos que…', en: 'If I were Leilani,… because… / In her place, I wouldn’t sell unless…' }, follow: [{ es: '¿Y si tuvieras deudas?', en: 'And if you had debts?' }, { es: '¿Qué le dirías a su hija?', en: 'What would you tell her daughter?' }] },
            { q: { es: '¿Se puede viajar de forma responsable? ¿Cómo?', en: 'Can you travel responsibly? How?' }, help: { es: 'Creo que sí, si… / Es difícil, porque aunque…', en: 'I think so, if… / It’s hard, because even though…' }, follow: [{ es: '¿Tú lo haces?', en: 'Do you do it?' }, { es: '¿Qué cambiarías en tu próximo viaje?', en: 'What would you change on your next trip?' }] },
            { q: { es: '¿Deberían los gobiernos limitar los alquileres turísticos o los cruceros?', en: 'Should governments limit vacation rentals or cruise ships?' }, help: { es: 'Deberían… para que… / No creo que deban, ya que…', en: 'They should… so that… / I don’t think they should, since…' }, follow: [{ es: '¿Quién perdería?', en: 'Who would lose out?' }, { es: '¿Qué pasó en tu ciudad?', en: 'What happened in your city?' }] },
          ],
          words: [
            { es: 'dispararse (los precios)', en: 'to soar (prices)' }, { es: 'la cadena hotelera', en: 'the hotel chain' }, { es: 'la vivienda', en: 'housing' },
            { es: 'rodear', en: 'to surround' }, { es: 'la cooperativa', en: 'the cooperative' }, { es: 'el alquiler turístico', en: 'the vacation rental' },
          ],
        },
      },
    },
  ],
};
