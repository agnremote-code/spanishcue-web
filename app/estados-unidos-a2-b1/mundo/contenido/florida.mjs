// Florida · Miami Beach. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own: same place and people, different
// situations, decisions and questions. English is a natural translation.
export default {
  id: 'florida',
  spots: [
    // ------------------------------------------------------------ the beach
    {
      id: 'playa',
      name: { es: 'La playa y el salvavidas', en: 'The beach and the lifeguard' },
      who: { name: 'Marisol', role: { es: 'salvavidas', en: 'lifeguard' } },
      levels: {
        A0: {
          scene: { es: 'Es la playa. Hay sol. Hay una torre de color rosa. Marisol es salvavidas.', en: 'It is the beach. It is sunny. There is a pink tower. Marisol is a lifeguard.' },
          opener: { es: '¡Hola! Soy Marisol. Hoy hay olas grandes. ¿Nadas?', en: 'Hi! I am Marisol. There are big waves today. Do you swim?' },
          decide: {
            ask: { es: 'La bandera es roja. ¿Qué haces?', en: 'The flag is red. What do you do?' },
            options: [
              { say: { es: 'No nado. Leo un libro.', en: 'I don’t swim. I read a book.' }, then: { es: 'Marisol dice: «¡Muy bien!». Tú lees en la arena.', en: 'Marisol says: “Very good!” You read on the sand.' } },
              { say: { es: 'Nado un poco, cerca.', en: 'I swim a little, close by.' }, then: { es: 'Marisol toca el silbato: «¡No, no! ¡Hoy no!».', en: 'Marisol blows the whistle: “No, no! Not today!”' } },
              { say: { es: 'Camino por la playa.', en: 'I walk along the beach.' }, then: { es: 'Caminas y ves conchas y pájaros.', en: 'You walk and see shells and birds.' } },
            ],
          },
          twist: { es: '¡Un pájaro grande come tu sándwich! Es un pelícano. ¿Qué dices?', en: 'A big bird eats your sandwich! It is a pelican. What do you say?' },
          questions: [
            { q: { es: '¿Nadas bien?', en: 'Do you swim well?' }, help: { es: 'Sí, nado bien. / No, no nado. / Un poco.', en: 'Yes, I swim well. / No, I don’t swim. / A little.' }, follow: [{ es: '¿Nadas en el mar o en la piscina?', en: 'Do you swim in the sea or in the pool?' }, { es: '¿El agua fría o caliente?', en: 'Cold water or warm water?' }] },
            { q: { es: '¿Prefieres el sol o la sombra?', en: 'Do you prefer the sun or the shade?' }, help: { es: 'Prefiero la sombra. Me gusta el sol un poco.', en: 'I prefer the shade. I like the sun a little.' }, follow: [{ es: '¿Usas sombrero?', en: 'Do you wear a hat?' }, { es: '¿Tienes gafas de sol?', en: 'Do you have sunglasses?' }] },
            { q: { es: '¿Qué llevas a la playa?', en: 'What do you take to the beach?' }, help: { es: 'Llevo agua, una toalla y un libro.', en: 'I take water, a towel and a book.' }, follow: [{ es: '¿Llevas comida? ¿Qué comida?', en: 'Do you take food? What food?' }, { es: '¿Llevas el teléfono?', en: 'Do you take your phone?' }] },
            { q: { es: '¿Con quién vas a la playa?', en: 'Who do you go to the beach with?' }, help: { es: 'Voy con mi familia. / Voy solo. / Voy sola.', en: 'I go with my family. / I go alone.' }, follow: [{ es: '¿Hay playa en tu país?', en: 'Is there a beach in your country?' }, { es: '¿Vas en verano o en invierno?', en: 'Do you go in summer or in winter?' }] },
          ],
          words: [
            { es: 'la playa', en: 'the beach' }, { es: 'el mar', en: 'the sea' }, { es: 'la ola', en: 'the wave' },
            { es: 'la arena', en: 'the sand' }, { es: 'la bandera', en: 'the flag' }, { es: 'nadar', en: 'to swim' },
          ],
        },
        A1: {
          scene: { es: 'Miami Beach, tres de la tarde. Marisol mira el mar desde su torre rosa. Hay una bandera amarilla: el mar está un poco peligroso.', en: 'Miami Beach, three in the afternoon. Marisol watches the sea from her pink tower. There is a yellow flag: the sea is a little dangerous.' },
          opener: { es: 'Hola, ¿qué tal? Trabajo aquí todos los días de ocho a seis. ¿Vienes a nadar o a tomar el sol?', en: 'Hi, how are you? I work here every day from eight to six. Are you here to swim or to sunbathe?' },
          decide: {
            ask: { es: 'Marisol necesita ir al baño cinco minutos. Te pide: «¿Miras el mar por mí?». ¿Qué respondes?', en: 'Marisol needs to go to the bathroom for five minutes. She asks you: “Can you watch the sea for me?” What do you answer?' },
            options: [
              { say: { es: 'Sí, claro. Miro el mar con atención.', en: 'Yes, of course. I’ll watch the sea carefully.' }, then: { es: 'Te da sus binoculares. Ves a un niño muy lejos… y a su padre a su lado. Todo bien.', en: 'She gives you her binoculars. You see a child far out… and his father next to him. All good.' } },
              { say: { es: 'Lo siento, no sé nadar bien.', en: 'Sorry, I can’t swim well.' }, then: { es: 'Marisol llama por radio a un compañero. «No pasa nada, gracias por decirlo».', en: 'Marisol calls a colleague on the radio. “No problem, thanks for saying so.”' } },
              { say: { es: '¿Y si pasa algo? ¡Qué miedo!', en: 'And if something happens? How scary!' }, then: { es: 'Marisol ríe: «Solo tienes que tocar este silbato. Muy fuerte».', en: 'Marisol laughs: “You just have to blow this whistle. Really loud.”' } },
            ],
          },
          twist: { es: 'De repente el cielo se pone negro. En Miami, en verano, muchas tardes llueve fuerte una hora. Todos corren con sus toallas. ¿Y tú?', en: 'Suddenly the sky turns black. In Miami, in summer, it often rains hard for an hour in the afternoon. Everyone runs with their towels. What about you?' },
          questions: [
            { q: { es: '¿Qué haces normalmente en tus vacaciones de verano?', en: 'What do you usually do on your summer vacation?' }, help: { es: 'Normalmente voy a… con… Me gusta… porque…', en: 'Usually I go to… with… I like… because…' }, follow: [{ es: '¿Prefieres vacaciones tranquilas o con muchas actividades?', en: 'Do you prefer quiet vacations or ones with lots of activities?' }, { es: '¿Cuántos días necesitas para descansar de verdad?', en: 'How many days do you need to really rest?' }] },
            { q: { es: 'Marisol trabaja de ocho a seis al aire libre. ¿Te gusta trabajar fuera o dentro?', en: 'Marisol works outdoors from eight to six. Do you like working outside or inside?' }, help: { es: 'Prefiero trabajar dentro porque… / Me gusta estar fuera porque…', en: 'I prefer working inside because… / I like being outside because…' }, follow: [{ es: '¿Dónde trabajas o estudias ahora?', en: 'Where do you work or study now?' }, { es: '¿Qué ves por tu ventana?', en: 'What do you see from your window?' }] },
            { q: { es: '¿Qué haces cuando llueve y tienes un plan al aire libre?', en: 'What do you do when it rains and you have an outdoor plan?' }, help: { es: 'Cuando llueve, voy a… / me quedo en casa y…', en: 'When it rains, I go to… / I stay home and…' }, follow: [{ es: '¿Te gusta la lluvia?', en: 'Do you like the rain?' }, { es: '¿Qué tiempo hace hoy en tu ciudad?', en: 'What is the weather like in your city today?' }] },
            { q: { es: '¿Cuál es tu playa, lago o río favorito? ¿Cómo es?', en: 'What is your favorite beach, lake or river? What is it like?' }, help: { es: 'Mi lugar favorito es… Es… y tiene…', en: 'My favorite place is… It is… and it has…' }, follow: [{ es: '¿Con quién vas allí?', en: 'Who do you go there with?' }, { es: '¿Qué comes allí?', en: 'What do you eat there?' }] },
          ],
          words: [
            { es: 'el salvavidas', en: 'the lifeguard' }, { es: 'la torre', en: 'the tower' }, { es: 'peligroso', en: 'dangerous' },
            { es: 'tomar el sol', en: 'to sunbathe' }, { es: 'el silbato', en: 'the whistle' }, { es: 'la tormenta', en: 'the storm' },
          ],
        },
        A2: {
          scene: { es: 'Al lado de la torre de Marisol hay un letrero con banderas: verde, amarilla, roja y morada. La morada significa «animales peligrosos en el agua». Hoy hay dos: la amarilla y, debajo, la morada.', en: 'Next to Marisol’s tower there is a sign with flags: green, yellow, red and purple. Purple means “dangerous animals in the water.” Today there are two: the yellow one and, below it, the purple one.' },
          opener: { es: 'Hoy hay medusas. Ayer un turista no me hizo caso, entró al agua y salió gritando. Por suerte no fue grave. ¿Tú alguna vez ignoraste una advertencia?', en: 'There are jellyfish today. Yesterday a tourist ignored me, went into the water and came out screaming. Luckily it wasn’t serious. Have you ever ignored a warning?' },
          decide: {
            ask: { es: 'Un grupo de turistas quiere entrar al agua igual: «Pagamos mucho por este viaje». Marisol te mira. ¿Qué les dices tú?', en: 'A group of tourists wants to go in anyway: “We paid a lot for this trip.” Marisol looks at you. What do you tell them?' },
            options: [
              { say: { es: 'Les explico lo que me pasó a mí una vez con una medusa.', en: 'I tell them what happened to me once with a jellyfish.' }, then: { es: 'Te escuchan con cara de horror y deciden ir a la piscina del hotel.', en: 'They listen with horrified faces and decide to go to the hotel pool.' } },
              { say: { es: 'Les recomiendo otra actividad: alquilar bicicletas por la costa.', en: 'I suggest another activity: renting bikes along the coast.' }, then: { es: 'Les gusta la idea. Uno pregunta si tú vienes también.', en: 'They like the idea. One of them asks if you’re coming too.' } },
              { say: { es: 'No digo nada: son adultos y es su decisión.', en: 'I say nothing: they’re adults and it’s their decision.' }, then: { es: 'Marisol suspira: «Aquí la decisión es mía», y toca el silbato.', en: 'Marisol sighs: “Here, the decision is mine,” and blows her whistle.' } },
            ],
          },
          twist: { es: 'Un niño llega llorando: perdió a sus padres entre tantas sombrillas. Solo recuerda que la sombrilla de su familia «es de rayas». ¡Todas son de rayas!', en: 'A boy arrives crying: he lost his parents among all the umbrellas. He only remembers that his family’s umbrella “is striped.” They are all striped!' },
          questions: [
            { q: { es: '¿Alguna vez ignoraste una advertencia o una regla? ¿Qué pasó?', en: 'Have you ever ignored a warning or a rule? What happened?' }, help: { es: 'Una vez… y aunque decía…, yo… Al final…', en: 'Once… and even though it said…, I… In the end…' }, follow: [{ es: '¿Lo harías otra vez?', en: 'Would you do it again?' }, { es: '¿Quién te ayudó o quién se enojó?', en: 'Who helped you or who got angry?' }] },
            { q: { es: '¿Te perdiste alguna vez de niño o de niña? Cuéntalo.', en: 'Did you ever get lost as a child? Tell the story.' }, help: { es: 'Cuando tenía… años, estaba en… y de repente…', en: 'When I was… years old, I was at… and suddenly…' }, follow: [{ es: '¿Cómo te sentiste cuando te encontraron?', en: 'How did you feel when they found you?' }, { es: '¿Tus padres eran estrictos o tranquilos?', en: 'Were your parents strict or relaxed?' }] },
            { q: { es: 'Compara un día de playa en tu país con lo que ves aquí.', en: 'Compare a beach day in your country with what you see here.' }, help: { es: 'En mi país la gente… En cambio aquí… Lo más diferente es…', en: 'In my country people… Here, on the other hand… The most different thing is…' }, follow: [{ es: '¿Qué es más caro allí: comer, aparcar, alquilar una sombrilla?', en: 'What’s more expensive there: eating, parking, renting an umbrella?' }, { es: '¿Qué traerías de allí a esta playa?', en: 'What would you bring from there to this beach?' }] },
            { q: { es: '¿Te gustaría el trabajo de Marisol? Explica lo bueno y lo malo.', en: 'Would you like Marisol’s job? Explain the good and the bad.' }, help: { es: 'Lo bueno es que… Lo malo es que… Creo que yo…', en: 'The good thing is that… The bad thing is that… I think I…' }, follow: [{ es: '¿Qué trabajo con mucha responsabilidad conoces?', en: 'What job with a lot of responsibility do you know?' }, { es: '¿Trabajas mejor con presión o sin presión?', en: 'Do you work better under pressure or without it?' }] },
          ],
          words: [
            { es: 'la medusa', en: 'the jellyfish' }, { es: 'la advertencia', en: 'the warning' }, { es: 'hacer caso', en: 'to pay attention, to obey' },
            { es: 'la sombrilla', en: 'the beach umbrella' }, { es: 'de rayas', en: 'striped' }, { es: 'por suerte', en: 'luckily' },
          ],
        },
        B1: {
          scene: { es: 'Marisol lleva once años en esta torre. Esta mañana sacó a dos personas de una corriente. Ahora la ciudad quiere reducir el número de salvavidas para ahorrar dinero.', en: 'Marisol has been in this tower for eleven years. This morning she pulled two people out of a rip current. Now the city wants to cut the number of lifeguards to save money.' },
          opener: { es: 'Dicen que con cámaras y drones pueden vigilar la playa con menos gente. Puede que tengan razón, no sé… pero un dron no te agarra la mano. ¿Tú qué opinas?', en: 'They say that with cameras and drones they can watch the beach with fewer people. Maybe they’re right, I don’t know… but a drone doesn’t grab your hand. What do you think?' },
          decide: {
            ask: { es: 'Hay una reunión de vecinos esta noche. Marisol te pide que hables tú porque «una persona de fuera convence más». ¿Qué propones?', en: 'There is a neighborhood meeting tonight. Marisol asks you to speak because “someone from outside is more convincing.” What do you propose?' },
            options: [
              { say: { es: 'Mantener a todos los salvavidas y pagar con un impuesto pequeño a los hoteles.', en: 'Keep all the lifeguards and pay for it with a small tax on hotels.' }, then: { es: 'Los vecinos aplauden. El representante de los hoteles pide la palabra, muy serio.', en: 'The neighbors applaud. The hotels’ representative asks to speak, very serious.' } },
              { say: { es: 'Probar los drones un año, pero sin despedir a nadie.', en: 'Try the drones for a year, but without firing anyone.' }, then: { es: 'Marisol te mira dudando: «¿Y quién paga los dos sistemas a la vez?».', en: 'Marisol looks at you, unsure: “And who pays for both systems at once?”' } },
              { say: { es: 'Que los salvavidas aprendan a manejar los drones.', en: 'The lifeguards should learn to fly the drones.' }, then: { es: 'Silencio. Después alguien dice: «Eso no se le había ocurrido a nadie».', en: 'Silence. Then someone says: “Nobody had thought of that.”' } },
            ],
          },
          twist: { es: 'En plena reunión, alguien enseña un video viral: un dron salvó a un surfista en Australia. Ahora la mitad de la sala cambia de opinión. ¿Cómo respondes?', en: 'In the middle of the meeting, someone shows a viral video: a drone saved a surfer in Australia. Now half the room changes its mind. How do you respond?' },
          questions: [
            { q: { es: '¿Qué trabajos no debería hacer nunca una máquina, aunque pudiera hacerlos más barato?', en: 'Which jobs should a machine never do, even if it could do them more cheaply?' }, help: { es: 'Para mí, … porque hace falta… Una máquina puede…, pero no puede…', en: 'For me, … because it takes… A machine can…, but it can’t…' }, follow: [{ es: '¿Confiarías en un robot para cuidar a un familiar?', en: 'Would you trust a robot to look after a relative?' }, { es: '¿Tu trabajo podría hacerlo una máquina dentro de diez años?', en: 'Could a machine do your job in ten years?' }] },
            { q: { es: 'Si estuvieras en esa reunión, ¿quién debería pagar la seguridad de una playa turística: los vecinos, los turistas o los hoteles?', en: 'If you were at that meeting, who should pay for the safety of a tourist beach: residents, tourists or hotels?' }, help: { es: 'Yo diría que… porque… Aunque entiendo que…', en: 'I’d say that… because… Although I understand that…' }, follow: [{ es: '¿Pagarías más por tus vacaciones si fuera para algo así?', en: 'Would you pay more for your vacation if it were for something like this?' }, { es: '¿Existe un impuesto turístico en tu ciudad? ¿Te parece justo?', en: 'Is there a tourist tax in your city? Do you think it’s fair?' }] },
            { q: { es: 'Cuéntame una situación en la que alguien te ayudó en un momento de peligro o de mucho estrés.', en: 'Tell me about a time someone helped you in a moment of danger or a lot of stress.' }, help: { es: 'Recuerdo una vez que… Yo estaba… y entonces apareció…', en: 'I remember a time when… I was… and then … showed up' }, follow: [{ es: '¿Pudiste agradecérselo?', en: 'Were you able to thank them?' }, { es: '¿Cambió esa experiencia algo en tu forma de actuar?', en: 'Did that experience change anything about how you act?' }] },
            { q: { es: '¿Los avisos de peligro funcionan, o la gente solo aprende cuando le pasa algo?', en: 'Do danger warnings work, or do people only learn when something happens to them?' }, help: { es: 'Depende de… Por ejemplo,… Por eso creo que…', en: 'It depends on… For example,… That’s why I think…' }, follow: [{ es: '¿Qué aviso ignoras tú casi siempre?', en: 'Which warning do you almost always ignore?' }, { es: '¿Qué aviso pondrías en tu casa o en tu trabajo?', en: 'What warning would you put up at home or at work?' }] },
          ],
          words: [
            { es: 'la corriente', en: 'the rip current' }, { es: 'vigilar', en: 'to watch over, to monitor' }, { es: 'ahorrar', en: 'to save (money)' },
            { es: 'despedir a alguien', en: 'to fire someone' }, { es: 'pedir la palabra', en: 'to ask to speak' }, { es: 'un impuesto', en: 'a tax' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the café window
    {
      id: 'cafeteria',
      name: { es: 'La cafetería frente al mar', en: 'The seafront café' },
      who: { name: 'Yoel', role: { es: 'dueño de la ventanita de café', en: 'owner of the coffee window' } },
      levels: {
        A0: {
          scene: { es: 'Es una cafetería pequeña. Tiene una ventana a la calle. Yoel hace café cubano. Es muy dulce.', en: 'It is a small café. It has a window onto the street. Yoel makes Cuban coffee. It is very sweet.' },
          opener: { es: '¡Buenos días! ¿Un café? ¿Grande o pequeño?', en: 'Good morning! A coffee? Big or small?' },
          decide: {
            ask: { es: 'Hay café, jugo de naranja y agua. ¿Qué pides?', en: 'There is coffee, orange juice and water. What do you order?' },
            options: [
              { say: { es: 'Un café pequeño, por favor.', en: 'A small coffee, please.' }, then: { es: 'Yoel sonríe: «¡Cuidado! Es muy fuerte».', en: 'Yoel smiles: “Careful! It is very strong.”' } },
              { say: { es: 'Un jugo de naranja, por favor.', en: 'An orange juice, please.' }, then: { es: 'El jugo es grande y frío. ¡Qué rico!', en: 'The juice is big and cold. Delicious!' } },
              { say: { es: 'Agua, por favor. Hace calor.', en: 'Water, please. It is hot.' }, then: { es: 'Yoel te da agua con hielo. Es gratis.', en: 'Yoel gives you water with ice. It is free.' } },
            ],
          },
          twist: { es: 'Yoel da seis vasos pequeños de café… ¡a ti! Es una «colada»: es para compartir. ¿Con quién compartes?', en: 'Yoel gives six small cups of coffee… to you! It is a “colada”: it is for sharing. Who do you share with?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, tomo café. / No, tomo té.', en: 'Yes, I drink coffee. / No, I drink tea.' }, follow: [{ es: '¿Con leche o sin leche?', en: 'With milk or without milk?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
            { q: { es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }, help: { es: 'Desayuno pan y café. / No desayuno.', en: 'I have bread and coffee. / I don’t have breakfast.' }, follow: [{ es: '¿Desayunas en casa?', en: 'Do you have breakfast at home?' }, { es: '¿A qué hora?', en: 'At what time?' }] },
            { q: { es: '¿Es dulce o salado tu desayuno?', en: 'Is your breakfast sweet or salty?' }, help: { es: 'Es dulce. Me gusta el chocolate.', en: 'It is sweet. I like chocolate.' }, follow: [{ es: '¿Te gustan las frutas?', en: 'Do you like fruit?' }, { es: '¿Qué fruta te gusta?', en: 'Which fruit do you like?' }] },
            { q: { es: '¿Hay una cafetería cerca de tu casa?', en: 'Is there a café near your house?' }, help: { es: 'Sí, hay una cafetería pequeña. / No, no hay.', en: 'Yes, there is a small café. / No, there isn’t.' }, follow: [{ es: '¿Es cara o barata?', en: 'Is it expensive or cheap?' }, { es: '¿Vas solo, sola o con amigos?', en: 'Do you go alone or with friends?' }] },
          ],
          words: [
            { es: 'el café', en: 'the coffee' }, { es: 'dulce', en: 'sweet' }, { es: 'fuerte', en: 'strong' },
            { es: 'el vaso', en: 'the cup, the glass' }, { es: 'compartir', en: 'to share' }, { es: 'por favor', en: 'please' },
          ],
        },
        A1: {
          scene: { es: 'En Miami muchas cafeterías tienen una «ventanita»: una ventana pequeña donde la gente pide café sin entrar. Yoel trabaja aquí desde las seis de la mañana.', en: 'In Miami many cafés have a “ventanita”: a small window where people order coffee without going in. Yoel has been working here since six in the morning.' },
          opener: { es: 'Mi café es el más fuerte de la calle, ¿eh? ¿Tú eres de mañana o de noche? Porque esto despierta a cualquiera.', en: 'My coffee is the strongest on the street, you know? Are you a morning person or a night person? Because this wakes anyone up.' },
          decide: {
            ask: { es: 'Yoel quiere poner un producto nuevo en el menú. Te pregunta qué pondrías tú.', en: 'Yoel wants to add a new product to the menu. He asks what you would add.' },
            options: [
              { say: { es: 'Un desayuno típico de mi país.', en: 'A typical breakfast from my country.' }, then: { es: 'Yoel saca un papel: «¿Cómo se hace? Explícamelo paso a paso».', en: 'Yoel takes out a piece of paper: “How do you make it? Explain it to me step by step.”' } },
              { say: { es: 'Algo saludable: frutas y yogur.', en: 'Something healthy: fruit and yogurt.' }, then: { es: '«¿Saludable? ¿En mi ventanita?», dice. Pero lo apunta.', en: '“Healthy? At my window?” he says. But he writes it down.' } },
              { say: { es: 'Café con hielo para el calor.', en: 'Iced coffee for the heat.' }, then: { es: 'A Yoel le encanta: «¡Café frío, pero cubano!».', en: 'Yoel loves it: “Cold coffee, but Cuban!”' } },
            ],
          },
          twist: { es: 'Llega una señora y pide «lo de siempre». Yoel no recuerda qué es «lo de siempre» y te mira pidiendo ayuda.', en: 'A woman arrives and asks for “the usual.” Yoel can’t remember what “the usual” is and looks at you for help.' },
          questions: [
            { q: { es: '¿Eres una persona de mañana o de noche? ¿Por qué?', en: 'Are you a morning person or a night person? Why?' }, help: { es: 'Soy de… porque… Por la mañana yo…', en: 'I’m a … person because… In the morning I…' }, follow: [{ es: '¿A qué hora te levantas los domingos?', en: 'What time do you get up on Sundays?' }, { es: '¿Qué haces primero cuando te despiertas?', en: 'What’s the first thing you do when you wake up?' }] },
            { q: { es: '¿Tienes una cafetería, bar o tienda donde dices «lo de siempre»?', en: 'Do you have a café, bar or shop where you say “the usual”?' }, help: { es: 'Sí, en… siempre pido… / No, siempre pido algo diferente.', en: 'Yes, at… I always order… / No, I always order something different.' }, follow: [{ es: '¿Conocen tu nombre allí?', en: 'Do they know your name there?' }, { es: '¿Te gusta probar cosas nuevas o prefieres lo conocido?', en: 'Do you like trying new things or do you prefer the familiar?' }] },
            { q: { es: '¿Qué bebes durante el día? Cuéntame tu día con bebidas.', en: 'What do you drink during the day? Tell me about your day in drinks.' }, help: { es: 'Por la mañana tomo… Al mediodía… Por la noche…', en: 'In the morning I drink… At noon… At night…' }, follow: [{ es: '¿Bebes suficiente agua?', en: 'Do you drink enough water?' }, { es: '¿Hay una bebida típica en tu país?', en: 'Is there a typical drink in your country?' }] },
            { q: { es: 'Yoel trabaja desde las seis de la mañana. ¿Te gustaría tener tu propio negocio? ¿Cuál?', en: 'Yoel works from six in the morning. Would you like to have your own business? Which one?' }, help: { es: 'Me gustaría tener… porque… / No, prefiero…', en: 'I’d like to have… because… / No, I prefer…' }, follow: [{ es: '¿Dónde estaría tu negocio?', en: 'Where would your business be?' }, { es: '¿Trabajarías solo o con tu familia?', en: 'Would you work alone or with your family?' }] },
          ],
          words: [
            { es: 'la ventanita', en: 'the little (service) window' }, { es: 'pedir', en: 'to order, to ask for' }, { es: 'lo de siempre', en: 'the usual' },
            { es: 'despertar', en: 'to wake up' }, { es: 'saludable', en: 'healthy' }, { es: 'el negocio', en: 'the business' },
          ],
        },
        A2: {
          scene: { es: 'Es la hora del cafecito de las tres. Obreros, oficinistas y vecinos se juntan en la ventanita, hablan de política y de béisbol, y se van en cinco minutos.', en: 'It’s three o’clock coffee time. Workers, office staff and neighbors gather at the window, talk about politics and baseball, and leave in five minutes.' },
          opener: { es: 'Mi abuelo abrió esta ventanita cuando llegó de Cuba. Antes aquí venían solo cubanos; ahora viene todo el mundo. ¿En tu ciudad hay un lugar así, donde se mezcla la gente?', en: 'My grandfather opened this window when he arrived from Cuba. Before, only Cubans came here; now everybody comes. Is there a place like this in your city, where people mix?' },
          decide: {
            ask: { es: 'Una empresa grande quiere comprar la ventanita y convertirla en una cadena moderna. Ofrecen mucho dinero. Yoel te pide tu opinión.', en: 'A big company wants to buy the window and turn it into a modern chain. They are offering a lot of money. Yoel asks for your opinion.' },
            options: [
              { say: { es: 'No vendas: este lugar es parte del barrio.', en: 'Don’t sell: this place is part of the neighborhood.' }, then: { es: '«Eso decía mi abuelo», responde Yoel, emocionado. Pero mira la factura de la luz.', en: '“That’s what my grandfather used to say,” Yoel answers, moved. But he looks at the electricity bill.' } },
              { say: { es: 'Vende, pero pide conservar el nombre y la receta.', en: 'Sell, but ask to keep the name and the recipe.' }, then: { es: 'A Yoel le parece inteligente, aunque duda que la empresa acepte.', en: 'Yoel thinks it’s clever, though he doubts the company will accept.' } },
              { say: { es: 'Vende y usa el dinero para algo nuevo.', en: 'Sell and use the money for something new.' }, then: { es: 'Yoel se queda callado. «¿Y qué hago yo todas las mañanas a las seis?».', en: 'Yoel goes quiet. “And what do I do every morning at six?”' } },
            ],
          },
          twist: { es: 'Dos clientes empiezan a discutir fuerte sobre béisbol. Yoel te da un vaso de café a ti y otro a cada uno: «Aquí con café se arregla todo».', en: 'Two customers start arguing loudly about baseball. Yoel gives a cup of coffee to you and one to each of them: “Here, coffee fixes everything.”' },
          questions: [
            { q: { es: '¿Hay en tu ciudad un lugar donde se juntan personas muy diferentes? Descríbelo.', en: 'Is there a place in your city where very different people get together? Describe it.' }, help: { es: 'Sí, en… se juntan… Allí la gente habla de… y…', en: 'Yes, at… … get together. There, people talk about… and…' }, follow: [{ es: '¿Por qué crees que funciona ese lugar?', en: 'Why do you think that place works?' }, { es: '¿Tú vas? ¿Con qué frecuencia?', en: 'Do you go? How often?' }] },
            { q: { es: '¿Algún negocio que te gustaba cerró o cambió mucho? ¿Qué pasó?', en: 'Did a business you liked close or change a lot? What happened?' }, help: { es: 'Antes había… Me gustaba porque… Pero un día…', en: 'There used to be… I liked it because… But one day…' }, follow: [{ es: '¿Qué hay ahora en su lugar?', en: 'What’s there now instead?' }, { es: '¿Lo extrañas?', en: 'Do you miss it?' }] },
            { q: { es: 'Compara las cadenas grandes de café con los cafés pequeños de barrio.', en: 'Compare big coffee chains with small neighborhood cafés.' }, help: { es: 'Las cadenas son más… pero los cafés pequeños tienen… Yo prefiero…', en: 'Chains are more… but small cafés have… I prefer…' }, follow: [{ es: '¿Dónde trabajarías tú: en una cadena o en un café pequeño?', en: 'Where would you work: in a chain or a small café?' }, { es: '¿Cuánto pagas normalmente por un café?', en: 'How much do you usually pay for a coffee?' }] },
            { q: { es: '¿Qué tema evitas cuando hablas con desconocidos? ¿Y de qué te gusta hablar?', en: 'What topic do you avoid when you talk with strangers? And what do you like to talk about?' }, help: { es: 'Normalmente evito hablar de… porque… Me gusta más hablar de…', en: 'I usually avoid talking about… because… I prefer to talk about…' }, follow: [{ es: '¿Alguna vez una conversación con un desconocido terminó mal?', en: 'Has a conversation with a stranger ever ended badly?' }, { es: '¿Y alguna terminó en amistad?', en: 'And has one ended in friendship?' }] },
          ],
          words: [
            { es: 'juntarse', en: 'to get together' }, { es: 'mezclarse', en: 'to mix' }, { es: 'la cadena', en: 'the chain (of shops)' },
            { es: 'la factura', en: 'the bill' }, { es: 'discutir', en: 'to argue' }, { es: 'arreglar', en: 'to fix, to sort out' },
          ],
        },
        B1: {
          scene: { es: 'Yoel quiere abrir una segunda ventanita en un barrio nuevo, lleno de oficinas y apartamentos caros. Su familia está dividida: unos dicen que es el futuro, otros que perderán su esencia.', en: 'Yoel wants to open a second window in a new neighborhood, full of offices and expensive apartments. His family is divided: some say it’s the future, others that they’ll lose their essence.' },
          opener: { es: 'Mi madre dice que si salimos del barrio dejaremos de ser nosotros. Mi hermano dice que si no crecemos, desaparecemos. Y yo aquí, en el medio, haciendo café. ¿Tú qué harías?', en: 'My mother says that if we leave the neighborhood we’ll stop being ourselves. My brother says that if we don’t grow, we’ll disappear. And here I am, in the middle, making coffee. What would you do?' },
          decide: {
            ask: { es: 'Yoel tiene que decidir hoy. Te pide que lo ayudes a elegir antes de que llegue su familia.', en: 'Yoel has to decide today. He asks you to help him choose before his family arrives.' },
            options: [
              { say: { es: 'Abre la segunda, pero con el mismo estilo y precios razonables.', en: 'Open the second one, but with the same style and reasonable prices.' }, then: { es: 'Yoel asiente, pero pregunta: «¿Y si el alquiler no me deja tener precios razonables?».', en: 'Yoel nods, but asks: “And what if the rent won’t let me keep prices reasonable?”' } },
              { say: { es: 'Quédate solo aquí y mejora lo que ya tienes.', en: 'Stay only here and improve what you already have.' }, then: { es: 'Su madre, que acaba de llegar, te da un abrazo sin decir nada.', en: 'His mother, who has just arrived, hugs you without saying a word.' } },
              { say: { es: 'Haz una prueba de seis meses con un carrito móvil en el barrio nuevo.', en: 'Run a six-month trial with a mobile cart in the new neighborhood.' }, then: { es: 'El hermano de Yoel se ríe: «¡Esa idea es mejor que las nuestras!».', en: 'Yoel’s brother laughs: “That idea is better than ours!”' } },
            ],
          },
          twist: { es: 'Llega un periodista: está escribiendo sobre «los últimos lugares auténticos de Miami». Si publica el artículo, vendrán cientos de turistas… y quizá los vecinos dejen de venir.', en: 'A journalist arrives: he’s writing about “Miami’s last authentic places.” If he publishes the article, hundreds of tourists will come… and maybe the neighbors will stop coming.' },
          questions: [
            { q: { es: '¿Crees que un negocio familiar puede crecer sin perder su identidad? Pon un ejemplo que conozcas.', en: 'Do you think a family business can grow without losing its identity? Give an example you know.' }, help: { es: 'Creo que sí/no, siempre que… Por ejemplo, … empezó como… y ahora…', en: 'I think so/not, as long as… For example, … started as… and now…' }, follow: [{ es: '¿Qué es lo primero que se pierde cuando un lugar crece?', en: 'What’s the first thing lost when a place grows?' }, { es: '¿Trabajarías con tu familia? ¿Por qué?', en: 'Would you work with your family? Why?' }] },
            { q: { es: 'Si un artículo pudiera hacer famoso tu lugar favorito, ¿lo permitirías?', en: 'If an article could make your favorite place famous, would you allow it?' }, help: { es: 'Si fuera mi lugar, yo… porque… Aunque también es verdad que…', en: 'If it were my place, I would… because… Although it’s also true that…' }, follow: [{ es: '¿Tienes algún lugar secreto que no compartes en redes?', en: 'Do you have a secret place you don’t share on social media?' }, { es: '¿Qué lugar se arruinó por ser demasiado famoso?', en: 'Which place was ruined by becoming too famous?' }] },
            { q: { es: '¿Qué significa para ti que un lugar sea «auténtico»? ¿Se puede fabricar la autenticidad?', en: 'What does it mean to you for a place to be “authentic”? Can authenticity be manufactured?' }, help: { es: 'Para mí, un lugar auténtico es… No es lo mismo… que…', en: 'For me, an authentic place is… … isn’t the same as…' }, follow: [{ es: '¿Te molesta cuando un lugar se decora para parecer antiguo?', en: 'Does it bother you when a place is decorated to look old?' }, { es: '¿Tu barrio es auténtico? ¿Por qué?', en: 'Is your neighborhood authentic? Why?' }] },
            { q: { es: 'En la familia de Yoel cada generación piensa distinto. ¿En qué temas no está de acuerdo tu generación con la de tus padres?', en: 'In Yoel’s family each generation thinks differently. On what topics does your generation disagree with your parents’?' }, help: { es: 'Mis padres piensan que…, mientras que nosotros… En el fondo, …', en: 'My parents think that…, while we… Deep down, …' }, follow: [{ es: '¿En qué te pareces más a ellos de lo que pensabas?', en: 'How are you more like them than you thought?' }, { es: '¿Quién cambió de opinión con los años, tú o ellos?', en: 'Who changed their mind over the years, you or them?' }] },
          ],
          words: [
            { es: 'la esencia', en: 'the essence' }, { es: 'crecer', en: 'to grow' }, { es: 'estar dividido', en: 'to be divided' },
            { es: 'el alquiler', en: 'the rent' }, { es: 'asentir', en: 'to nod' }, { es: 'arruinarse', en: 'to be ruined' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the hotel
    {
      id: 'hotel',
      name: { es: 'El hotel', en: 'The hotel' },
      who: { name: 'Lucía', role: { es: 'turista sin pasaporte', en: 'tourist without a passport' } },
      levels: {
        A0: {
          scene: { es: 'Es un hotel blanco y rosa. Lucía es turista. Está nerviosa. No tiene su pasaporte.', en: 'It is a white and pink hotel. Lucía is a tourist. She is nervous. She doesn’t have her passport.' },
          opener: { es: '¡Hola! ¡Ayuda, por favor! No tengo mi pasaporte. ¿Dónde está?', en: 'Hi! Help, please! I don’t have my passport. Where is it?' },
          decide: {
            ask: { es: '¿Dónde buscas el pasaporte?', en: 'Where do you look for the passport?' },
            options: [
              { say: { es: 'En la habitación.', en: 'In the room.' }, then: { es: 'Buscas en la cama y en la mesa. No está.', en: 'You look on the bed and on the table. It isn’t there.' } },
              { say: { es: 'En la mochila.', en: 'In the backpack.' }, then: { es: 'Hay una botella, unas gafas y… ¡no hay pasaporte!', en: 'There is a bottle, some glasses and… there is no passport!' } },
              { say: { es: 'En la recepción.', en: 'At the front desk.' }, then: { es: 'El recepcionista dice: «Un momento, por favor».', en: 'The receptionist says: “One moment, please.”' } },
            ],
          },
          twist: { es: '¡El pasaporte está en el bolsillo de Lucía! Lucía ríe mucho. ¿Qué le dices?', en: 'The passport is in Lucía’s pocket! Lucía laughs a lot. What do you say to her?' },
          questions: [
            { q: { es: '¿Tienes pasaporte?', en: 'Do you have a passport?' }, help: { es: 'Sí, tengo pasaporte. / No, no tengo.', en: 'Yes, I have a passport. / No, I don’t.' }, follow: [{ es: '¿Es nuevo o viejo?', en: 'Is it new or old?' }, { es: '¿De qué color es?', en: 'What color is it?' }] },
            { q: { es: '¿Pierdes cosas?', en: 'Do you lose things?' }, help: { es: 'Sí, pierdo las llaves. / No, nunca.', en: 'Yes, I lose my keys. / No, never.' }, follow: [{ es: '¿Pierdes el teléfono?', en: 'Do you lose your phone?' }, { es: '¿Dónde están tus llaves ahora?', en: 'Where are your keys now?' }] },
            { q: { es: '¿Te gustan los hoteles?', en: 'Do you like hotels?' }, help: { es: 'Sí, me gustan. / Prefiero una casa.', en: 'Yes, I like them. / I prefer a house.' }, follow: [{ es: '¿Hotel grande o pequeño?', en: 'Big hotel or small hotel?' }, { es: '¿Con piscina?', en: 'With a pool?' }] },
            { q: { es: '¿Qué hay en tu mochila o en tu bolso hoy?', en: 'What is in your backpack or bag today?' }, help: { es: 'Hay un teléfono, unas llaves y agua.', en: 'There is a phone, some keys and water.' }, follow: [{ es: '¿Es grande tu mochila?', en: 'Is your backpack big?' }, { es: '¿Hay un libro?', en: 'Is there a book?' }] },
          ],
          words: [
            { es: 'el pasaporte', en: 'the passport' }, { es: 'el hotel', en: 'the hotel' }, { es: 'la habitación', en: 'the room' },
            { es: 'la mochila', en: 'the backpack' }, { es: 'buscar', en: 'to look for' }, { es: 'nervioso, nerviosa', en: 'nervous' },
          ],
        },
        A1: {
          scene: { es: 'Recepción de un hotel art déco en Ocean Drive. Lucía viaja desde Valencia. Su vuelo de vuelta sale mañana a las diez y no encuentra su pasaporte.', en: 'The front desk of an art deco hotel on Ocean Drive. Lucía is traveling from Valencia. Her flight home leaves tomorrow at ten and she can’t find her passport.' },
          opener: { es: 'Ayer fui a la playa, después a un restaurante y después a bailar. ¡Y ahora no tengo pasaporte! ¿Qué hago? ¿Me ayudas a pensar?', en: 'Yesterday I went to the beach, then to a restaurant and then dancing. And now I don’t have my passport! What do I do? Will you help me think?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Lucía primero?', en: 'What do you recommend Lucía do first?' },
            options: [
              { say: { es: 'Llamar al restaurante de anoche.', en: 'Call last night’s restaurant.' }, then: { es: 'En el restaurante encuentran… una tarjeta de crédito. No es de Lucía.', en: 'At the restaurant they find… a credit card. It isn’t Lucía’s.' } },
              { say: { es: 'Llamar al consulado de España en Miami.', en: 'Call the Spanish consulate in Miami.' }, then: { es: 'El consulado puede hacer un documento de emergencia. Lucía necesita una foto.', en: 'The consulate can issue an emergency document. Lucía needs a photo.' } },
              { say: { es: 'Buscar otra vez en la habitación, con calma.', en: 'Look in the room again, calmly.' }, then: { es: 'Lucía busca debajo de la cama y encuentra… un calcetín y una moneda de 1990.', en: 'Lucía looks under the bed and finds… a sock and a coin from 1990.' } },
            ],
          },
          twist: { es: 'El recepcionista llega con un pasaporte: «¿Lucía García?». Lucía mira la foto: es otra Lucía García. ¡En el hotel hay dos!', en: 'The receptionist arrives with a passport: “Lucía García?” Lucía looks at the photo: it’s another Lucía García. There are two in the hotel!' },
          questions: [
            { q: { es: '¿Qué cosas llevas siempre cuando viajas?', en: 'What things do you always take when you travel?' }, help: { es: 'Siempre llevo… y nunca olvido…', en: 'I always take… and I never forget…' }, follow: [{ es: '¿Haces la maleta el día antes o el mismo día?', en: 'Do you pack the day before or the same day?' }, { es: '¿Viajas con mucha o con poca ropa?', en: 'Do you travel with a lot of clothes or a few?' }] },
            { q: { es: '¿Eres una persona organizada o un poco desordenada?', en: 'Are you an organized person or a bit messy?' }, help: { es: 'Soy bastante… Por ejemplo, mi habitación…', en: 'I’m quite… For example, my room…' }, follow: [{ es: '¿Usas listas o aplicaciones para organizarte?', en: 'Do you use lists or apps to get organized?' }, { es: '¿Qué es lo más desordenado de tu casa?', en: 'What’s the messiest thing in your home?' }] },
            { q: { es: '¿Qué haces cuando tienes un problema: hablas con alguien o lo piensas solo, sola?', en: 'What do you do when you have a problem: talk to someone or think about it alone?' }, help: { es: 'Normalmente hablo con… porque… / Prefiero pensar solo, sola.', en: 'I usually talk to… because… / I prefer to think alone.' }, follow: [{ es: '¿A quién llamas primero?', en: 'Who do you call first?' }, { es: '¿Te gusta ayudar a otros con sus problemas?', en: 'Do you like helping others with their problems?' }] },
            { q: { es: '¿Qué tipo de alojamiento prefieres: hotel, apartamento, camping o casa de amigos?', en: 'What kind of accommodation do you prefer: hotel, apartment, camping or friends’ house?' }, help: { es: 'Prefiero… porque es más… y puedo…', en: 'I prefer… because it’s more… and I can…' }, follow: [{ es: '¿Cuál fue el peor lugar donde dormiste?', en: 'What was the worst place you slept?' }, { es: '¿Qué necesita una habitación para ser perfecta?', en: 'What does a room need to be perfect?' }] },
          ],
          words: [
            { es: 'la recepción', en: 'the front desk' }, { es: 'el vuelo de vuelta', en: 'the return flight' }, { es: 'el consulado', en: 'the consulate' },
            { es: 'hacer la maleta', en: 'to pack (a suitcase)' }, { es: 'olvidar', en: 'to forget' }, { es: 'el alojamiento', en: 'the accommodation' },
          ],
        },
        A2: {
          scene: { es: 'Lucía está sentada en el sofá del vestíbulo con la cabeza entre las manos. Ya llamó a la policía y al consulado. El consulado abre mañana a las nueve; su vuelo sale a las diez.', en: 'Lucía is sitting on the lobby sofa with her head in her hands. She has already called the police and the consulate. The consulate opens tomorrow at nine; her flight leaves at ten.' },
          opener: { es: 'No me lo puedo creer. En diez años de viajes nunca perdí nada. Y ahora, el último día… Tú alguna vez tuviste un problema así de viaje, ¿no? Cuéntame que no soy la única.', en: 'I can’t believe it. In ten years of traveling I never lost anything. And now, on the last day… You’ve had a travel problem like this at some point, right? Tell me I’m not the only one.' },
          decide: {
            ask: { es: 'Hay dos opciones: perder el vuelo y esperar el documento, o pedir a la aerolínea un cambio que cuesta trescientos dólares. ¿Qué le aconsejas?', en: 'There are two options: miss the flight and wait for the document, or ask the airline for a change that costs three hundred dollars. What do you advise her?' },
            options: [
              { say: { es: 'Que cambie el vuelo: así va tranquila al consulado.', en: 'Change the flight: that way she can go to the consulate calmly.' }, then: { es: 'Lucía hace cuentas en el teléfono y suspira: «Adiós a mis compras».', en: 'Lucía does the math on her phone and sighs: “Goodbye to my shopping.”' } },
              { say: { es: 'Que vaya al consulado a las nueve en punto y corra al aeropuerto.', en: 'Go to the consulate at nine sharp and run to the airport.' }, then: { es: '«¿Y si hay cola?», pregunta Lucía. Nadie responde.', en: '“And what if there’s a line?” asks Lucía. Nobody answers.' } },
              { say: { es: 'Que se quede unos días más y lo vea como unas vacaciones extra.', en: 'Stay a few more days and see it as extra vacation.' }, then: { es: 'Lucía sonríe por primera vez: «Mi jefa me va a matar… pero me gusta la idea».', en: 'Lucía smiles for the first time: “My boss is going to kill me… but I like the idea.”' } },
            ],
          },
          twist: { es: 'Suena el teléfono del hotel: un conductor de taxi encontró un pasaporte español en el asiento de atrás. Pero quiere cincuenta dólares «por las molestias».', en: 'The hotel phone rings: a taxi driver found a Spanish passport on the back seat. But he wants fifty dollars “for the trouble.”' },
          questions: [
            { q: { es: 'Cuéntame el peor problema que tuviste en un viaje. ¿Cómo lo resolviste?', en: 'Tell me about the worst problem you had on a trip. How did you solve it?' }, help: { es: 'Una vez, cuando estaba en…, perdí / se canceló… Al final…', en: 'Once, when I was in…, I lost / … got cancelled… In the end…' }, follow: [{ es: '¿Ahora te ríes de eso o todavía te molesta?', en: 'Do you laugh about it now or does it still bother you?' }, { es: '¿Qué aprendiste para el próximo viaje?', en: 'What did you learn for the next trip?' }] },
            { q: { es: '¿Le darías los cincuenta dólares al taxista? ¿Es justo o es un abuso?', en: 'Would you give the taxi driver the fifty dollars? Is it fair or is it a rip-off?' }, help: { es: 'Yo le daría… porque… / Me parece un abuso porque…', en: 'I’d give him… because… / I think it’s a rip-off because…' }, follow: [{ es: '¿Alguna vez pagaste a alguien por devolverte algo?', en: 'Have you ever paid someone to return something to you?' }, { es: '¿Qué harías tú si encontraras un pasaporte?', en: 'What would you do if you found a passport?' }] },
            { q: { es: '¿Cómo reaccionas en una emergencia: con calma o con nervios? Pon un ejemplo.', en: 'How do you react in an emergency: calmly or nervously? Give an example.' }, help: { es: 'Normalmente me pongo… Por ejemplo, una vez…', en: 'I usually get… For example, once…' }, follow: [{ es: '¿Quién de tu familia es el más tranquilo en las crisis?', en: 'Who in your family is the calmest in a crisis?' }, { es: '¿Qué te ayuda a calmarte?', en: 'What helps you calm down?' }] },
            { q: { es: 'Compara viajar antes, sin teléfono inteligente, con viajar hoy. ¿Era más fácil o más difícil?', en: 'Compare traveling before, without a smartphone, with traveling today. Was it easier or harder?' }, help: { es: 'Antes la gente… y ahora… Para mí, lo mejor de hoy es…', en: 'Before, people… and now… For me, the best thing today is…' }, follow: [{ es: '¿Podrías viajar una semana sin teléfono?', en: 'Could you travel for a week without a phone?' }, { es: '¿Qué guardas en papel cuando viajas?', en: 'What do you keep on paper when you travel?' }] },
          ],
          words: [
            { es: 'el vestíbulo', en: 'the lobby' }, { es: 'la aerolínea', en: 'the airline' }, { es: 'hacer cuentas', en: 'to do the math' },
            { es: 'la cola', en: 'the line, the queue' }, { es: 'las molestias', en: 'the trouble, the inconvenience' }, { es: 'resolver', en: 'to solve' },
          ],
        },
        B1: {
          scene: { es: 'Lucía recuperó el pasaporte, pero ahora tiene otro dilema: en el taxi también había una cartera con mil dólares y una dirección. El taxista dice que «nadie se va a enterar» si se reparten el dinero.', en: 'Lucía got her passport back, but now she has another dilemma: in the taxi there was also a wallet with a thousand dollars and an address. The driver says that “nobody will find out” if they split the money.' },
          opener: { es: 'Yo sé lo que está bien. Pero también sé que este viaje me costó el sueldo de tres meses… Y él tiene tres hijos. Dime algo, porque estoy empezando a dudar.', en: 'I know what’s right. But I also know this trip cost me three months’ salary… And he has three kids. Say something, because I’m starting to doubt.' },
          decide: {
            ask: { es: 'El taxista espera la respuesta en la puerta del hotel. ¿Qué le aconsejas a Lucía?', en: 'The driver is waiting for an answer at the hotel door. What do you advise Lucía?' },
            options: [
              { say: { es: 'Devolver la cartera entera a la dirección, juntos.', en: 'Return the whole wallet to the address, together.' }, then: { es: 'El dueño, un señor mayor, no puede creerlo. Les ofrece una recompensa… que el taxista sí acepta.', en: 'The owner, an elderly man, can’t believe it. He offers them a reward… which the driver does accept.' } },
              { say: { es: 'Llevarla a la policía y no decidir ellos.', en: 'Take it to the police and not decide themselves.' }, then: { es: 'El taxista se ofende: «¿Crees que soy un ladrón?». La conversación se pone tensa.', en: 'The driver is offended: “Do you think I’m a thief?” The conversation gets tense.' } },
              { say: { es: 'Hablar con el taxista y entender por qué lo propone.', en: 'Talk to the driver and understand why he suggests it.' }, then: { es: 'Él cuenta que perdió su trabajo de ingeniero al llegar al país. Lucía lo escucha en silencio.', en: 'He explains that he lost his engineering job when he arrived in the country. Lucía listens in silence.' } },
            ],
          },
          twist: { es: 'Al abrir la cartera para buscar un teléfono aparece una nota: «Si encuentras esto, quédate el dinero y devuelve solo la foto. Es lo único que importa».', en: 'When they open the wallet to look for a phone number, a note appears: “If you find this, keep the money and return only the photo. It’s the only thing that matters.”' },
          questions: [
            { q: { es: '¿Hay situaciones en las que quedarse con algo que no es tuyo se puede justificar?', en: 'Are there situations in which keeping something that isn’t yours can be justified?' }, help: { es: 'En principio no, pero si… Por otro lado, …', en: 'In principle no, but if… On the other hand, …' }, follow: [{ es: '¿Cambia algo si la cantidad es pequeña?', en: 'Does anything change if the amount is small?' }, { es: '¿Y si nadie se entera nunca?', en: 'And if nobody ever finds out?' }] },
            { q: { es: 'Después de leer la nota, ¿qué harías con el dinero? ¿Por qué?', en: 'After reading the note, what would you do with the money? Why?' }, help: { es: 'Si yo fuera Lucía, … porque la nota… Aunque…', en: 'If I were Lucía, … because the note… Although…' }, follow: [{ es: '¿Qué crees que hay en esa foto?', en: 'What do you think is in that photo?' }, { es: '¿Tú tienes algún objeto sin valor que no venderías nunca?', en: 'Do you have any worthless object you would never sell?' }] },
            { q: { es: 'El taxista era ingeniero en su país. ¿Qué pierde una persona cuando emigra, además de su trabajo?', en: 'The driver was an engineer in his country. What does a person lose when they emigrate, besides their job?' }, help: { es: 'Pierde… y también… Pero a veces gana…', en: 'They lose… and also… But sometimes they gain…' }, follow: [{ es: '¿Conoces a alguien que empezó de cero en otro país?', en: 'Do you know anyone who started from scratch in another country?' }, { es: '¿En qué trabajo empezarías tú si emigraras mañana?', en: 'What job would you start in if you emigrated tomorrow?' }] },
            { q: { es: 'Cuéntame una vez en que alguien fue honesto contigo cuando no tenía por qué.', en: 'Tell me about a time someone was honest with you when they didn’t have to be.' }, help: { es: 'Me acuerdo de que una vez… y la persona podría haber…, pero…', en: 'I remember that once… and the person could have…, but…' }, follow: [{ es: '¿Cómo cambió eso tu opinión sobre esa persona?', en: 'How did that change your opinion of that person?' }, { es: '¿Crees que la honestidad se aprende en casa?', en: 'Do you think honesty is learned at home?' }] },
          ],
          words: [
            { es: 'la cartera', en: 'the wallet' }, { es: 'repartir', en: 'to split, to share out' }, { es: 'enterarse', en: 'to find out' },
            { es: 'la recompensa', en: 'the reward' }, { es: 'ofenderse', en: 'to take offense' }, { es: 'empezar de cero', en: 'to start from scratch' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the murals
    {
      id: 'murales',
      name: { es: 'La calle de los murales', en: 'The mural street' },
      who: { name: 'Darius', role: { es: 'muralista', en: 'muralist' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con muchos colores. Hay murales en las paredes. Darius pinta. Hay una pared blanca.', en: 'It is a street with lots of colors. There are murals on the walls. Darius is painting. There is a white wall.' },
          opener: { es: '¡Hola! Soy Darius. Pinto murales. ¿Qué color te gusta?', en: 'Hi! I am Darius. I paint murals. What color do you like?' },
          decide: {
            ask: { es: '¿Qué pinta Darius en la pared blanca?', en: 'What does Darius paint on the white wall?' },
            options: [
              { say: { es: 'Un gato grande.', en: 'A big cat.' }, then: { es: 'Darius pinta un gato naranja. ¡Es enorme!', en: 'Darius paints an orange cat. It is huge!' } },
              { say: { es: 'El mar y el sol.', en: 'The sea and the sun.' }, then: { es: 'La pared es azul y amarilla. ¡Qué bonita!', en: 'The wall is blue and yellow. How pretty!' } },
              { say: { es: 'Tu cara.', en: 'Your face.' }, then: { es: 'Darius ríe y dice: «¡No te muevas!».', en: 'Darius laughs and says: “Don’t move!”' } },
            ],
          },
          twist: { es: '¡Una gota de pintura cae en tu zapato! Ahora tu zapato es arte. ¿Te gusta?', en: 'A drop of paint falls on your shoe! Now your shoe is art. Do you like it?' },
          questions: [
            { q: { es: '¿Qué color te gusta?', en: 'What color do you like?' }, help: { es: 'Me gusta el azul. / Me gusta el verde.', en: 'I like blue. / I like green.' }, follow: [{ es: '¿Qué color no te gusta?', en: 'What color don’t you like?' }, { es: '¿De qué color es tu casa?', en: 'What color is your house?' }] },
            { q: { es: '¿Pintas o dibujas?', en: 'Do you paint or draw?' }, help: { es: 'Sí, dibujo un poco. / No, no pinto.', en: 'Yes, I draw a little. / No, I don’t paint.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Dibujas bien o mal?', en: 'Do you draw well or badly?' }] },
            { q: { es: '¿Hay murales en tu ciudad?', en: 'Are there murals in your city?' }, help: { es: 'Sí, hay muchos. / No, no hay.', en: 'Yes, there are many. / No, there aren’t.' }, follow: [{ es: '¿Son bonitos?', en: 'Are they pretty?' }, { es: '¿Dónde están?', en: 'Where are they?' }] },
            { q: { es: '¿Qué hay en tu habitación: fotos, cuadros o nada?', en: 'What is in your room: photos, paintings or nothing?' }, help: { es: 'Hay fotos de mi familia. / Hay un cuadro.', en: 'There are photos of my family. / There is a painting.' }, follow: [{ es: '¿De qué color son las paredes?', en: 'What color are the walls?' }, { es: '¿Es grande tu habitación?', en: 'Is your room big?' }] },
          ],
          words: [
            { es: 'el mural', en: 'the mural' }, { es: 'la pared', en: 'the wall' }, { es: 'pintar', en: 'to paint' },
            { es: 'el color', en: 'the color' }, { es: 'la pintura', en: 'the paint' }, { es: 'bonito, bonita', en: 'pretty' },
          ],
        },
        A1: {
          scene: { es: 'Wynwood, en Miami, al otro lado de la bahía. Antes eran almacenes; ahora las paredes están llenas de murales gigantes. Darius trabaja con un spray en cada mano.', en: 'Wynwood, in Miami, across the bay. These used to be warehouses; now the walls are full of giant murals. Darius works with a spray can in each hand.' },
          opener: { es: 'Este mural es sobre mi barrio. Me faltan tres personas para el dibujo. ¿Puedo pintarte a ti? Solo necesito saber cómo eres y qué te gusta hacer.', en: 'This mural is about my neighborhood. I need three more people for the picture. Can I paint you? I just need to know what you’re like and what you like doing.' },
          decide: {
            ask: { es: '¿Cómo quieres aparecer en el mural?', en: 'How do you want to appear in the mural?' },
            options: [
              { say: { es: 'Haciendo mi deporte favorito.', en: 'Doing my favorite sport.' }, then: { es: 'Darius te pide una pose. Toda la calle te mira.', en: 'Darius asks you for a pose. The whole street is watching you.' } },
              { say: { es: 'Con mi mascota.', en: 'With my pet.' }, then: { es: 'Darius pregunta: «¿Cómo se llama? ¿Es grande o pequeña?».', en: 'Darius asks: “What’s its name? Is it big or small?”' } },
              { say: { es: 'De espaldas, mirando el mar. Soy tímido, tímida.', en: 'From behind, looking at the sea. I’m shy.' }, then: { es: '«Me encanta. Misterioso», dice Darius.', en: '“I love it. Mysterious,” says Darius.' } },
            ],
          },
          twist: { es: 'Llega un grupo de turistas y empieza a hacerse fotos delante del mural… delante de Darius. Nadie le pregunta su nombre.', en: 'A group of tourists arrives and starts taking photos in front of the mural… in front of Darius. Nobody asks his name.' },
          questions: [
            { q: { es: '¿Cómo te describes en tres palabras?', en: 'How do you describe yourself in three words?' }, help: { es: 'Soy…, … y un poco…', en: 'I’m…, … and a bit…' }, follow: [{ es: '¿Tus amigos usan las mismas palabras?', en: 'Do your friends use the same words?' }, { es: '¿Qué palabra no te gusta para ti?', en: 'What word don’t you like for yourself?' }] },
            { q: { es: '¿Qué te gusta hacer en tu tiempo libre?', en: 'What do you like doing in your free time?' }, help: { es: 'En mi tiempo libre me gusta… y a veces…', en: 'In my free time I like… and sometimes…' }, follow: [{ es: '¿Lo haces solo, sola o con otras personas?', en: 'Do you do it alone or with other people?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Haces muchas fotos? ¿De qué?', en: 'Do you take a lot of photos? Of what?' }, help: { es: 'Hago fotos de… / No hago muchas fotos porque…', en: 'I take photos of… / I don’t take many photos because…' }, follow: [{ es: '¿Cuántas fotos tienes en el teléfono, más o menos?', en: 'How many photos do you have on your phone, more or less?' }, { es: '¿Te gusta salir en las fotos?', en: 'Do you like being in photos?' }] },
            { q: { es: 'Si pintas un mural sobre tu barrio, ¿qué pones?', en: 'If you paint a mural about your neighborhood, what do you put in it?' }, help: { es: 'Pongo… porque en mi barrio hay… y la gente…', en: 'I put… because in my neighborhood there is… and people…' }, follow: [{ es: '¿Qué color es tu barrio?', en: 'What color is your neighborhood?' }, { es: '¿Qué persona de tu barrio pintas?', en: 'Which person from your neighborhood do you paint?' }] },
          ],
          words: [
            { es: 'el almacén', en: 'the warehouse' }, { es: 'el barrio', en: 'the neighborhood' }, { es: 'tímido, tímida', en: 'shy' },
            { es: 'de espaldas', en: 'from behind' }, { es: 'hacerse una foto', en: 'to take a photo (of oneself)' }, { es: 'la mascota', en: 'the pet' },
          ],
        },
        A2: {
          scene: { es: 'Darius terminó su mural ayer. Hoy por la mañana alguien escribió su nombre encima con letras negras. Darius está sentado en la acera, mirando la pared.', en: 'Darius finished his mural yesterday. This morning someone wrote their name over it in black letters. Darius is sitting on the curb, looking at the wall.' },
          opener: { es: 'Tres semanas de trabajo. Y ahora mira. Lo gracioso es que yo empecé así, escribiendo mi nombre en paredes que no eran mías. ¿Tú qué piensas: esto es arte o es vandalismo?', en: 'Three weeks of work. And now look. The funny thing is I started out like this, writing my name on walls that weren’t mine. What do you think: is this art or vandalism?' },
          decide: {
            ask: { es: 'Darius sabe quién lo hizo: un chico del barrio de quince años. ¿Qué le recomiendas?', en: 'Darius knows who did it: a fifteen-year-old kid from the neighborhood. What do you recommend?' },
            options: [
              { say: { es: 'Denunciarlo: tiene que aprender que hay consecuencias.', en: 'Report him: he has to learn there are consequences.' }, then: { es: 'Darius duda. «A mí nadie me denunció… y por eso hoy pinto».', en: 'Darius hesitates. “Nobody reported me… and that’s why I paint today.”' } },
              { say: { es: 'Buscarlo y proponerle pintar juntos la próxima pared.', en: 'Find him and offer to paint the next wall together.' }, then: { es: 'Una semana después, el chico aparece con un cuaderno lleno de dibujos.', en: 'A week later, the kid shows up with a notebook full of drawings.' } },
              { say: { es: 'Integrar la firma en el mural, como parte de la historia.', en: 'Work the tag into the mural, as part of the story.' }, then: { es: 'Darius se ríe: «Eso sí que es arte contemporáneo».', en: 'Darius laughs: “Now that’s contemporary art.”' } },
            ],
          },
          twist: { es: 'Pasa el dueño del edificio: dice que le gusta más con la firma, porque «parece más auténtico». Darius no sabe si reír o llorar.', en: 'The building owner walks by: he says he likes it better with the tag, because “it looks more authentic.” Darius doesn’t know whether to laugh or cry.' },
          questions: [
            { q: { es: '¿Para ti, cuándo un grafiti es arte y cuándo es vandalismo?', en: 'For you, when is graffiti art and when is it vandalism?' }, help: { es: 'Me parece arte cuando… pero es vandalismo si…', en: 'It seems like art to me when… but it’s vandalism if…' }, follow: [{ es: '¿Hay grafitis cerca de tu casa? ¿Te gustan?', en: 'Is there graffiti near your home? Do you like it?' }, { es: '¿Pintarías la pared de tu casa con un mural?', en: 'Would you paint a mural on the wall of your house?' }] },
            { q: { es: 'Cuéntame algo que hiciste de adolescente y que hoy no harías.', en: 'Tell me something you did as a teenager that you wouldn’t do today.' }, help: { es: 'Cuando tenía… años, yo… Ahora no lo haría porque…', en: 'When I was… years old, I… I wouldn’t do it now because…' }, follow: [{ es: '¿Alguien te castigó por eso?', en: 'Did anyone punish you for it?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Es mejor castigar o dar una oportunidad? Piensa en un ejemplo real.', en: 'Is it better to punish or to give a chance? Think of a real example.' }, help: { es: 'Depende de la situación. Por ejemplo, cuando… creo que es mejor…', en: 'It depends on the situation. For example, when… I think it’s better to…' }, follow: [{ es: '¿Alguien te dio a ti una segunda oportunidad?', en: 'Did someone give you a second chance?' }, { es: '¿Tus padres eran más de castigar o de hablar?', en: 'Were your parents more into punishing or talking?' }] },
            { q: { es: 'Compara tu barrio de hace diez años con el de hoy. ¿Qué cambió?', en: 'Compare your neighborhood ten years ago with today. What changed?' }, help: { es: 'Antes había… y ahora hay… Lo que más me gusta / molesta es…', en: 'There used to be… and now there is… What I like / dislike most is…' }, follow: [{ es: '¿Cambió para mejor o para peor?', en: 'Did it change for better or worse?' }, { es: '¿Quién llegó y quién se fue?', en: 'Who arrived and who left?' }] },
          ],
          words: [
            { es: 'la acera', en: 'the sidewalk, the curb' }, { es: 'la firma', en: 'the tag, the signature' }, { es: 'el vandalismo', en: 'vandalism' },
            { es: 'denunciar', en: 'to report (to the police)' }, { es: 'castigar', en: 'to punish' }, { es: 'la oportunidad', en: 'the chance' },
          ],
        },
        B1: {
          scene: { es: 'Wynwood se hizo famoso por sus murales. Los alquileres subieron tanto que muchos artistas que lo hicieron famoso ya no pueden vivir aquí. A Darius le ofrecen pintar un anuncio enorme de una marca de ropa.', en: 'Wynwood became famous for its murals. Rents rose so much that many of the artists who made it famous can no longer live here. Darius is offered the chance to paint a huge ad for a clothing brand.' },
          opener: { es: 'Me pagan en un mes lo que gano en un año. Pero la pared es la del primer mural que pinté, cuando nadie venía a este barrio. Si digo que no, lo pintará otro. Si digo que sí… ¿sigo siendo el mismo artista?', en: 'They’d pay me in a month what I earn in a year. But the wall is the one where I painted my first mural, when nobody came to this neighborhood. If I say no, someone else will paint it. If I say yes… am I still the same artist?' },
          decide: {
            ask: { es: 'La marca necesita una respuesta mañana. ¿Qué le dices a Darius?', en: 'The brand needs an answer tomorrow. What do you tell Darius?' },
            options: [
              { say: { es: 'Acepta y usa el dinero para un taller gratuito para chicos del barrio.', en: 'Accept, and use the money for a free workshop for local kids.' }, then: { es: 'Darius lo piensa: «Así el anuncio paga lo que el barrio perdió». Le gusta.', en: 'Darius thinks about it: “That way the ad pays for what the neighborhood lost.” He likes it.' } },
              { say: { es: 'Rechaza: hay cosas que no se venden.', en: 'Turn it down: some things aren’t for sale.' }, then: { es: 'Esa noche publica la oferta y su respuesta en redes. Al día siguiente tiene diez propuestas nuevas.', en: 'That night he posts the offer and his answer online. The next day he has ten new proposals.' } },
              { say: { es: 'Negocia: que sea un mural de verdad, con el logo pequeño.', en: 'Negotiate: make it a real mural, with a small logo.' }, then: { es: 'La marca acepta… si el logo es «un poco más grande». La negociación sigue.', en: 'The brand agrees… if the logo is “a bit bigger.” The negotiation continues.' } },
            ],
          },
          twist: { es: 'Una vecina mayor se acerca y le dice: «Gracias a tus murales vendí mi casa por el triple. Pero ahora mis nietos no pueden vivir cerca de mí». Nadie sabe qué contestar.', en: 'An elderly neighbor comes over and tells him: “Thanks to your murals I sold my house for three times the price. But now my grandchildren can’t live near me.” Nobody knows what to say.' },
          questions: [
            { q: { es: '¿Un artista que trabaja para una marca deja de ser artista? Justifica tu respuesta.', en: 'Does an artist who works for a brand stop being an artist? Justify your answer.' }, help: { es: 'No creo que… porque… Sin embargo, si…, entonces…', en: 'I don’t think that… because… However, if…, then…' }, follow: [{ es: '¿Qué artista conoces que haya hecho publicidad?', en: 'Which artist do you know who has done advertising?' }, { es: '¿Tú pondrías tu talento al servicio de cualquier marca?', en: 'Would you put your talent at the service of any brand?' }] },
            { q: { es: 'El arte hizo famoso el barrio y eso expulsó a los vecinos. ¿Quién tiene la culpa, si alguien la tiene?', en: 'Art made the neighborhood famous and that pushed residents out. Who is to blame, if anyone?' }, help: { es: 'Yo no culparía a… sino a… Lo que habría que hacer es…', en: 'I wouldn’t blame… but rather… What should be done is…' }, follow: [{ es: '¿Pasa algo parecido en tu ciudad?', en: 'Is something similar happening in your city?' }, { es: '¿Qué medida pondrías tú si fueras alcalde o alcaldesa?', en: 'What measure would you take if you were mayor?' }] },
            { q: { es: '¿Alguna vez tuviste que elegir entre el dinero y algo que valorabas? ¿Qué elegiste?', en: 'Have you ever had to choose between money and something you valued? What did you choose?' }, help: { es: 'Hace unos años tuve que elegir entre… Al final elegí… y hoy pienso que…', en: 'A few years ago I had to choose between… In the end I chose… and today I think…' }, follow: [{ es: '¿Volverías a elegir lo mismo?', en: 'Would you make the same choice again?' }, { es: '¿Qué te dijo la gente cercana?', en: 'What did the people close to you say?' }] },
            { q: { es: 'Si pudieras dejar un mural para que lo vean dentro de cien años, ¿qué mensaje tendría?', en: 'If you could leave a mural to be seen a hundred years from now, what message would it have?' }, help: { es: 'Pintaría… para que la gente del futuro supiera que…', en: 'I would paint… so that the people of the future knew that…' }, follow: [{ es: '¿Dónde lo pondrías?', en: 'Where would you put it?' }, { es: '¿Qué crees que pensarán de nuestra época?', en: 'What do you think they’ll think of our era?' }] },
          ],
          words: [
            { es: 'el anuncio', en: 'the advertisement' }, { es: 'la marca', en: 'the brand' }, { es: 'rechazar', en: 'to turn down' },
            { es: 'negociar', en: 'to negotiate' }, { es: 'expulsar', en: 'to push out, to expel' }, { es: 'tener la culpa', en: 'to be to blame' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the boardwalk at night
    {
      id: 'paseo',
      name: { es: 'El paseo marítimo de noche', en: 'The boardwalk at night' },
      who: { name: 'Rosa', role: { es: 'vecina que pasea cada noche', en: 'local who walks every night' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche. Hay luces de colores y música. Rosa camina por el paseo. Es mayor y simpática.', en: 'It is night. There are colored lights and music. Rosa walks along the boardwalk. She is older and friendly.' },
          opener: { es: 'Buenas noches. Camino aquí todas las noches. ¿Caminas conmigo?', en: 'Good evening. I walk here every night. Will you walk with me?' },
          decide: {
            ask: { es: 'Rosa tiene hambre. ¿Qué comen?', en: 'Rosa is hungry. What do you eat?' },
            options: [
              { say: { es: 'Pizza.', en: 'Pizza.' }, then: { es: 'Rosa dice: «¡Qué rica! Pero es grande. ¡Compartimos!».', en: 'Rosa says: “Delicious! But it is big. Let’s share!”' } },
              { say: { es: 'Helado.', en: 'Ice cream.' }, then: { es: 'Rosa pide helado de mango. Tú, de chocolate.', en: 'Rosa orders mango ice cream. You, chocolate.' } },
              { say: { es: 'Nada. Solo agua.', en: 'Nothing. Just water.' }, then: { es: 'Rosa ríe: «¡Más para mí!».', en: 'Rosa laughs: “More for me!”' } },
            ],
          },
          twist: { es: '¡Se va la luz! Todo está oscuro. Solo hay luna. ¿Qué haces?', en: 'The power goes out! Everything is dark. There is only the moon. What do you do?' },
          questions: [
            { q: { es: '¿Caminas mucho?', en: 'Do you walk a lot?' }, help: { es: 'Sí, camino todos los días. / No, no mucho.', en: 'Yes, I walk every day. / No, not much.' }, follow: [{ es: '¿Caminas de día o de noche?', en: 'Do you walk during the day or at night?' }, { es: '¿Caminas solo, sola o con alguien?', en: 'Do you walk alone or with someone?' }] },
            { q: { es: '¿Te gusta la noche?', en: 'Do you like the night?' }, help: { es: 'Sí, me gusta la noche. / Prefiero el día.', en: 'Yes, I like the night. / I prefer the day.' }, follow: [{ es: '¿A qué hora duermes?', en: 'What time do you go to sleep?' }, { es: '¿Sales por la noche?', en: 'Do you go out at night?' }] },
            { q: { es: '¿Qué música te gusta?', en: 'What music do you like?' }, help: { es: 'Me gusta el pop. / Me gusta la salsa.', en: 'I like pop. / I like salsa.' }, follow: [{ es: '¿Bailas?', en: 'Do you dance?' }, { es: '¿Cantas en la ducha?', en: 'Do you sing in the shower?' }] },
            { q: { es: '¿Qué helado prefieres?', en: 'Which ice cream do you prefer?' }, help: { es: 'Prefiero el helado de chocolate. / De fresa.', en: 'I prefer chocolate ice cream. / Strawberry.' }, follow: [{ es: '¿Comes helado en invierno?', en: 'Do you eat ice cream in winter?' }, { es: '¿Cuántas bolas: una, dos o tres?', en: 'How many scoops: one, two or three?' }] },
          ],
          words: [
            { es: 'la noche', en: 'the night' }, { es: 'caminar', en: 'to walk' }, { es: 'la luz', en: 'the light' },
            { es: 'la luna', en: 'the moon' }, { es: 'el helado', en: 'the ice cream' }, { es: 'oscuro', en: 'dark' },
          ],
        },
        A1: {
          scene: { es: 'Ocean Drive, diez de la noche. Los hoteles tienen luces de neón de colores. Hay música, restaurantes con mesas en la calle y gente en patines. Rosa camina despacio.', en: 'Ocean Drive, ten at night. The hotels have colored neon lights. There’s music, restaurants with tables outside and people on roller skates. Rosa walks slowly.' },
          opener: { es: 'Vivo en Miami Beach desde hace veinte años. Antes vivía en Nueva York, ¡con mucho frío! Ahora camino aquí cada noche. ¿Y tú? ¿Dónde vives?', en: 'I’ve lived in Miami Beach for twenty years. Before, I lived in New York, with lots of cold! Now I walk here every night. And you? Where do you live?' },
          decide: {
            ask: { es: 'Un camarero los invita a sentarse: «¡Dos bebidas por el precio de una!». ¿Qué hacen?', en: 'A waiter invites you to sit down: “Two drinks for the price of one!” What do you do?' },
            options: [
              { say: { es: 'Nos sentamos: ¡es una buena oferta!', en: 'We sit down: it’s a good deal!' }, then: { es: 'Las bebidas son enormes… y muy caras. «Dos por el precio de tres», dice Rosa.', en: 'The drinks are huge… and very expensive. “Two for the price of three,” says Rosa.' } },
              { say: { es: 'No, gracias. Seguimos caminando.', en: 'No, thanks. We keep walking.' }, then: { es: 'Rosa aprueba: «Bien. Esas ofertas son para turistas».', en: 'Rosa approves: “Good. Those deals are for tourists.”' } },
              { say: { es: 'Preguntamos el precio primero.', en: 'We ask the price first.' }, then: { es: 'El camarero dice un número muy bajito. Rosa dice: «¿Perdón? ¿Cuánto?».', en: 'The waiter says a number very quietly. Rosa says: “Sorry? How much?”' } },
            ],
          },
          twist: { es: 'Pasa un grupo en patines con música muy alta. Uno se cae justo delante de ustedes… y se levanta bailando como si nada.', en: 'A group passes on roller skates with very loud music. One falls right in front of you… and gets up dancing as if nothing happened.' },
          questions: [
            { q: { es: '¿Dónde vives y desde cuándo?', en: 'Where do you live and since when?' }, help: { es: 'Vivo en… desde hace… años. Antes vivía en…', en: 'I live in… I’ve lived there for… years. Before, I lived in…' }, follow: [{ es: '¿Te gusta tu ciudad?', en: 'Do you like your city?' }, { es: '¿Qué hace la gente allí por la noche?', en: 'What do people do there at night?' }] },
            { q: { es: '¿Prefieres el frío o el calor? ¿Por qué?', en: 'Do you prefer cold or heat? Why?' }, help: { es: 'Prefiero… porque puedo… En invierno / verano yo…', en: 'I prefer… because I can… In winter / summer I…' }, follow: [{ es: '¿Qué ropa llevas en tu estación favorita?', en: 'What do you wear in your favorite season?' }, { es: '¿Qué tiempo hace en tu ciudad en enero?', en: 'What’s the weather like in your city in January?' }] },
            { q: { es: '¿Qué haces normalmente un sábado por la noche?', en: 'What do you usually do on a Saturday night?' }, help: { es: 'Los sábados por la noche normalmente… con…', en: 'On Saturday nights I usually… with…' }, follow: [{ es: '¿Y este sábado? ¿Qué vas a hacer?', en: 'And this Saturday? What are you going to do?' }, { es: '¿Te gusta bailar o prefieres hablar?', en: 'Do you like dancing or do you prefer talking?' }] },
            { q: { es: '¿Sabes patinar, ir en bici o hacer surf? ¿Qué quieres aprender?', en: 'Can you skate, ride a bike or surf? What do you want to learn?' }, help: { es: 'Sé… pero no sé… Quiero aprender a…', en: 'I can… but I can’t… I want to learn to…' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Te caes mucho?', en: 'Do you fall a lot?' }] },
          ],
          words: [
            { es: 'el paseo marítimo', en: 'the boardwalk, the seafront' }, { es: 'el neón', en: 'neon' }, { es: 'los patines', en: 'roller skates' },
            { es: 'la oferta', en: 'the deal, the offer' }, { es: 'el camarero', en: 'the waiter' }, { es: 'despacio', en: 'slowly' },
          ],
        },
        A2: {
          scene: { es: 'Rosa se sienta en un banco frente al mar. Cuenta que hace unos años un huracán inundó su calle y casi lo pierde todo. Sus hijos quieren que se mude con ellos a otro estado.', en: 'Rosa sits on a bench facing the sea. She explains that a few years ago a hurricane flooded her street and she almost lost everything. Her children want her to move in with them in another state.' },
          opener: { es: 'Mis hijos dicen que aquí es peligroso, que cada año hay más tormentas. Tienen razón, pero… aquí están mis amigas, mi café, mi mar. ¿Tú te irías de un lugar que quieres por seguridad?', en: 'My kids say it’s dangerous here, that every year there are more storms. They’re right, but… my friends are here, my café, my sea. Would you leave a place you love for safety?' },
          decide: {
            ask: { es: 'Rosa tiene que contestar a sus hijos esta semana. ¿Qué le aconsejas?', en: 'Rosa has to answer her children this week. What do you advise her?' },
            options: [
              { say: { es: 'Que se mude con sus hijos y venga a Miami de vacaciones.', en: 'Move in with her children and come to Miami on vacation.' }, then: { es: '«De visita a mi propia ciudad…», dice Rosa, mirando el mar.', en: '“Visiting my own city…,” says Rosa, looking at the sea.' } },
              { say: { es: 'Que se quede, pero que prepare un plan para los huracanes.', en: 'Stay, but prepare a plan for hurricanes.' }, then: { es: 'Rosa saca una libreta: ya tiene una lista de cosas para la próxima tormenta.', en: 'Rosa takes out a notebook: she already has a list of things for the next storm.' } },
              { say: { es: 'Que pase la temporada de huracanes con sus hijos y el resto del año aquí.', en: 'Spend hurricane season with her children and the rest of the year here.' }, then: { es: 'Rosa se ríe: «Como los pájaros. Me gusta».', en: 'Rosa laughs: “Like the birds. I like it.”' } },
            ],
          },
          twist: { es: 'Se va la luz en todo Ocean Drive. La música se para. De repente, la gente empieza a cantar en la oscuridad, y Rosa canta también.', en: 'The power goes out all along Ocean Drive. The music stops. Suddenly, people start singing in the dark, and Rosa sings too.' },
          questions: [
            { q: { es: '¿Alguna vez viviste una tormenta, un apagón o una situación de emergencia? ¿Qué hiciste?', en: 'Have you ever lived through a storm, a blackout or an emergency? What did you do?' }, help: { es: 'Sí, una vez hubo… Yo estaba en… y lo primero que hice fue…', en: 'Yes, once there was… I was at… and the first thing I did was…' }, follow: [{ es: '¿Cuánto tiempo duró?', en: 'How long did it last?' }, { es: '¿Qué es lo que más extrañaste?', en: 'What did you miss most?' }] },
            { q: { es: '¿Te irías de un lugar que quieres por seguridad o por dinero? Explica.', en: 'Would you leave a place you love for safety or for money? Explain.' }, help: { es: 'Me iría si… pero no me iría por… porque…', en: 'I would leave if… but I wouldn’t leave for… because…' }, follow: [{ es: '¿Ya te mudaste alguna vez por algo así?', en: 'Have you ever moved for something like that?' }, { es: '¿Qué no podrías dejar nunca?', en: 'What could you never leave behind?' }] },
            { q: { es: 'Compara la vida de tus abuelos a tu edad con tu vida. ¿Qué es más fácil hoy y qué era más fácil antes?', en: 'Compare your grandparents’ lives at your age with yours. What is easier today and what was easier before?' }, help: { es: 'Mis abuelos… En cambio, yo… Antes era más fácil… pero hoy…', en: 'My grandparents… I, on the other hand… Before it was easier to… but today…' }, follow: [{ es: '¿Qué te contaban tus abuelos de su juventud?', en: 'What did your grandparents tell you about their youth?' }, { es: '¿Vivirías como ellos una semana?', en: 'Would you live like them for a week?' }] },
            { q: { es: '¿Quién de tu familia se parece a Rosa? ¿Por qué?', en: 'Who in your family is like Rosa? Why?' }, help: { es: 'Mi… se parece a Rosa porque también…', en: 'My… is like Rosa because they also…' }, follow: [{ es: '¿Hablas mucho con esa persona?', en: 'Do you talk to that person a lot?' }, { es: '¿Qué aprendiste de esa persona?', en: 'What did you learn from that person?' }] },
          ],
          words: [
            { es: 'el huracán', en: 'the hurricane' }, { es: 'inundar', en: 'to flood' }, { es: 'mudarse', en: 'to move (house)' },
            { es: 'el apagón', en: 'the blackout' }, { es: 'la temporada', en: 'the season' }, { es: 'extrañar', en: 'to miss' },
          ],
        },
        B1: {
          scene: { es: 'Esta noche hay una protesta pacífica en el paseo: los vecinos piden menos fiestas y menos ruido. Del otro lado, trabajadores de bares y discotecas defienden sus empleos. Rosa está justo en el medio.', en: 'Tonight there’s a peaceful protest on the boardwalk: residents want fewer parties and less noise. On the other side, bar and club workers are defending their jobs. Rosa is right in the middle.' },
          opener: { es: 'Yo firmé la carta de los vecinos, pero mi nieto trabaja de camarero aquí. Si cierran antes, él gana menos. ¿Cómo se decide quién tiene derecho a una ciudad: los que viven en ella o los que viven de ella?', en: 'I signed the residents’ letter, but my grandson works as a waiter here. If they close earlier, he earns less. How do you decide who has a right to a city: those who live in it or those who make a living from it?' },
          decide: {
            ask: { es: 'Un periodista se acerca con un micrófono y les pide una opinión en directo. Rosa te pasa el micrófono a ti.', en: 'A reporter comes over with a microphone and asks for an opinion live on air. Rosa passes the microphone to you.' },
            options: [
              { say: { es: 'Propongo horarios distintos según la zona: fiesta en unas calles, descanso en otras.', en: 'I propose different hours by area: party on some streets, rest on others.' }, then: { es: 'Los dos grupos aplauden… y después discuten qué calles serán de fiesta.', en: 'Both groups applaud… and then argue about which streets will be the party ones.' } },
              { say: { es: 'Los vecinos llegaron primero: deben tener prioridad.', en: 'The residents were here first: they should have priority.' }, then: { es: 'Un camarero responde: «Yo también vivo aquí. Y pago alquiler gracias a la noche».', en: 'A waiter replies: “I live here too. And I pay rent thanks to the nightlife.”' } },
              { say: { es: 'La economía de la ciudad depende del turismo: hay que proteger los empleos.', en: 'The city’s economy depends on tourism: jobs need to be protected.' }, then: { es: 'Rosa te mira sorprendida, pero su nieto te levanta el pulgar desde lejos.', en: 'Rosa looks at you, surprised, but her grandson gives you a thumbs-up from afar.' } },
            ],
          },
          twist: { es: 'En medio de la protesta, empieza un desfile de boda: música, flores, cien invitados bailando. Por un momento, los dos grupos se ponen a bailar juntos.', en: 'In the middle of the protest, a wedding procession begins: music, flowers, a hundred guests dancing. For a moment, both groups start dancing together.' },
          questions: [
            { q: { es: '¿Quién debería decidir cómo se usa una ciudad turística: los vecinos, los trabajadores o los visitantes?', en: 'Who should decide how a tourist city is used: residents, workers or visitors?' }, help: { es: 'Yo creo que la decisión debería ser de… porque… Aun así, habría que escuchar a…', en: 'I think the decision should be up to… because… Even so, … should be heard' }, follow: [{ es: '¿Has visitado una ciudad donde se nota ese conflicto?', en: 'Have you visited a city where that conflict is noticeable?' }, { es: '¿Tú eres buen turista o mal turista?', en: 'Are you a good tourist or a bad tourist?' }] },
            { q: { es: 'Si tuvieras que hablar en directo por televisión ahora mismo, ¿cómo te sentirías? ¿Te pasó alguna vez algo parecido?', en: 'If you had to speak live on TV right now, how would you feel? Has anything similar ever happened to you?' }, help: { es: 'Me pondría… porque… Una vez tuve que hablar delante de…', en: 'I’d get… because… Once I had to speak in front of…' }, follow: [{ es: '¿Qué haces para hablar mejor en público?', en: 'What do you do to speak better in public?' }, { es: '¿Prefieres escribir o hablar para defender una idea?', en: 'Do you prefer writing or speaking to defend an idea?' }] },
            { q: { es: '¿Firmarías una carta contra algo que da trabajo a alguien de tu familia?', en: 'Would you sign a letter against something that gives work to someone in your family?' }, help: { es: 'Sería difícil, porque por un lado… y por otro… Creo que yo…', en: 'It would be hard, because on one hand… and on the other… I think I would…' }, follow: [{ es: '¿Cuál es el límite entre la opinión personal y la lealtad familiar?', en: 'Where is the line between personal opinion and family loyalty?' }, { es: '¿Discutiste alguna vez con tu familia por política?', en: 'Have you ever argued with your family about politics?' }] },
            { q: { es: '¿Qué ruido de tu ciudad odias y cuál echarías de menos si desapareciera?', en: 'Which noise in your city do you hate, and which would you miss if it disappeared?' }, help: { es: 'No soporto… En cambio, echaría de menos… porque me recuerda…', en: 'I can’t stand… On the other hand, I’d miss… because it reminds me of…' }, follow: [{ es: '¿Podrías vivir en un lugar en completo silencio?', en: 'Could you live somewhere in complete silence?' }, { es: '¿Cómo suena tu calle a las tres de la mañana?', en: 'What does your street sound like at three in the morning?' }] },
          ],
          words: [
            { es: 'la protesta', en: 'the protest' }, { es: 'el derecho', en: 'the right' }, { es: 'vivir de algo', en: 'to make a living from something' },
            { es: 'en directo', en: 'live (on air)' }, { es: 'la prioridad', en: 'priority' }, { es: 'echar de menos', en: 'to miss' },
          ],
        },
      },
    },
  ],
};
