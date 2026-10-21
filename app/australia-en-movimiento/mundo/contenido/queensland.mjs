// Queensland · the Great Barrier Reef, the Daintree rainforest, a koala sanctuary, a
// 4x4 trip on K'gari and a mango farm. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own.
export default {
  id: 'queensland',
  spots: [
    // ------------------------------------------------------------ the Great Barrier Reef
    {
      id: 'arrecife',
      name: { es: 'La Gran Barrera de Coral', en: 'The Great Barrier Reef' },
      who: { name: 'Olivia', role: { es: 'bióloga marina', en: 'marine biologist' } },
      levels: {
        A0: {
          scene: { es: 'Es un barco en el mar. El agua es azul y transparente. Abajo hay corales de colores y peces. Olivia es bióloga. Tiene gafas de buceo.', en: 'It is a boat at sea. The water is blue and clear. Below there are colourful corals and fish. Olivia is a biologist. She has diving goggles.' },
          opener: { es: '¡Hola! Soy Olivia. Abajo está la Gran Barrera de Coral. Es enorme. ¿Nadamos?', en: 'Hello! I am Olivia. Below is the Great Barrier Reef. It is huge. Shall we swim?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Nado con gafas y tubo.', en: 'I swim with goggles and a snorkel.' }, then: { es: 'Ves un pez naranja y blanco. ¡Es como en la película!', en: 'You see an orange and white fish. It’s like in the film!' } },
              { say: { es: 'Miro desde el barco.', en: 'I look from the boat.' }, then: { es: 'El barco tiene el suelo de cristal. Ves los corales sin mojarte.', en: 'The boat has a glass floor. You see the corals without getting wet.' } },
              { say: { es: 'Buceo con Olivia.', en: 'I dive with Olivia.' }, then: { es: 'Bajas cinco metros. Una tortuga pasa a tu lado.', en: 'You go down five metres. A turtle swims past you.' } },
            ],
          },
          twist: { es: 'Olivia dice: «No toques el coral, por favor». Tu mano está muy cerca. ¿Qué haces?', en: 'Olivia says: “Don’t touch the coral, please.” Your hand is very close. What do you do?' },
          questions: [
            { q: { es: '¿Sabes bucear?', en: 'Can you dive?' }, help: { es: 'Sí, un poco. / No, nunca.', en: 'Yes, a little. / No, never.' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Qué pez conoces?', en: 'Which fish do you know?' }, help: { es: 'Conozco el… / la…', en: 'I know the…' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Lo comes?', en: 'Do you eat it?' }] },
            { q: { es: '¿Viste una tortuga?', en: 'Have you seen a turtle?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Era grande?', en: 'Was it big?' }, { es: '¿Dónde vivía?', en: 'Where did it live?' }] },
            { q: { es: '¿Te gusta el agua transparente?', en: 'Do you like clear water?' }, help: { es: 'Sí, me encanta. / Me da igual.', en: 'Yes, I love it. / I don’t mind.' }, follow: [{ es: '¿Dónde hay agua así?', en: 'Where is water like that?' }, { es: '¿Fuiste?', en: 'Have you been?' }] },
          ],
          words: [{ es: 'el coral', en: 'the coral' }, { es: 'el pez', en: 'the fish' }, { es: 'bucear', en: 'to dive' }, { es: 'la tortuga', en: 'the turtle' }, { es: 'transparente', en: 'clear' }],
        },
        A1: {
          scene: { es: 'Olivia trabaja en una pequeña isla con un laboratorio. Cada mañana sale en barco a medir la temperatura del agua y a sacar fotos de los corales. Algunos corales están blancos, como huesos.', en: 'Olivia works on a small island with a laboratory. Every morning she goes out by boat to measure the water temperature and take photos of the corals. Some corals are white, like bones.' },
          opener: { es: 'Los corales blancos están enfermos: el agua está demasiado caliente y pierden su color. Si el agua se enfría, a veces se recuperan. Si no, mueren. Estudio esto desde hace diez años y a veces lloro debajo del agua, con la máscara puesta. Pero también veo corales nuevos que crecen. ¿Te preocupa el cambio climático?', en: 'The white corals are sick: the water is too hot and they lose their colour. If the water cools down, sometimes they recover. If not, they die. I have studied this for ten years and sometimes I cry underwater, with my mask on. But I also see new corals growing. Does climate change worry you?' },
          decide: {
            ask: { es: 'Olivia necesita ayuda en el barco. ¿Qué haces?', en: 'Olivia needs help on the boat. What do you do?' },
            options: [
              { say: { es: 'Anoto la temperatura del agua.', en: 'I write down the water temperature.' }, then: { es: 'El agua está a veintinueve grados. Olivia dice: «Demasiado caliente».', en: 'The water is at twenty-nine degrees. Olivia says: “Too hot.”' } },
              { say: { es: 'Saco fotos de los corales.', en: 'I take photos of the corals.' }, then: { es: 'En tus fotos hay un coral pequeño y rosa. Olivia sonríe: «Es nuevo».', en: 'In your photos there is a small pink coral. Olivia smiles: “It’s new.”' } },
              { say: { es: 'Limpio el plástico del agua.', en: 'I clean the plastic out of the water.' }, then: { es: 'Encuentras una bolsa y una botella. Olivia te da las gracias.', en: 'You find a bag and a bottle. Olivia thanks you.' } },
            ],
          },
          twist: { es: 'Un turista pregunta si es mejor no venir al arrecife para protegerlo. ¿Qué le dices?', en: 'A tourist asks if it’s better not to come to the reef to protect it. What do you tell him?' },
          questions: [
            { q: { es: '¿Te preocupa el cambio climático?', en: 'Does climate change worry you?' }, help: { es: 'Sí, mucho. / Un poco. / No mucho.', en: 'Yes, a lot. / A little. / Not much.' }, follow: [{ es: '¿Qué cambia en tu país?', en: 'What is changing in your country?' }, { es: '¿Qué haces tú?', en: 'What do you do?' }] },
            { q: { es: '¿Qué trabajo te gustaría hacer al aire libre?', en: 'What job would you like to do outdoors?' }, help: { es: 'Me gustaría ser…', en: 'I would like to be…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Es difícil?', en: 'Is it hard?' }] },
            { q: { es: '¿Lloraste por algo de la naturaleza?', en: 'Have you cried about something in nature?' }, help: { es: 'Sí, cuando vi… / No, nunca.', en: 'Yes, when I saw… / No, never.' }, follow: [{ es: '¿Qué viste?', en: 'What did you see?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Usas mucho plástico?', en: 'Do you use a lot of plastic?' }, help: { es: 'Sí, bastante. / Intento usar poco.', en: 'Yes, quite a lot. / I try to use little.' }, follow: [{ es: '¿Qué podrías cambiar?', en: 'What could you change?' }, { es: '¿Reciclas?', en: 'Do you recycle?' }] },
          ],
          words: [{ es: 'medir', en: 'to measure' }, { es: 'el hueso', en: 'the bone' }, { es: 'recuperarse', en: 'to recover' }, { es: 'el arrecife', en: 'the reef' }, { es: 'el cambio climático', en: 'climate change' }],
        },
        A2: {
          scene: { es: 'Olivia y un grupo de voluntarios plantan corales nuevos en el fondo del mar, uno por uno, como un jardín. Cada coral tarda años en crecer. Hoy llega un grupo de estudiantes de secundaria para ayudar. Uno de ellos no sabe nadar bien, pero no quiere decirlo delante de sus amigos.', en: 'Olivia and a group of volunteers are planting new corals on the seabed, one by one, like a garden. Each coral takes years to grow. Today a group of secondary school students is coming to help. One of them can’t swim well, but doesn’t want to say so in front of his friends.' },
          opener: { es: 'Plantamos unos mil corales al mes. Parece mucho, pero el arrecife es más grande que Italia. Es como regar el desierto con una taza. Aun así, cada coral que sobrevive es un hogar para cientos de peces. A los estudiantes les encanta, pero me preocupa ese chico: lo vi muy nervioso en el barco. ¿Cómo lo ayudo sin que se sienta humillado?', en: 'We plant about a thousand corals a month. It sounds like a lot, but the reef is bigger than Italy. It’s like watering the desert with a cup. Even so, every coral that survives is a home for hundreds of fish. The students love it, but I’m worried about that boy: I saw him very nervous on the boat. How do I help him without him feeling humiliated?' },
          decide: {
            ask: { es: '¿Qué le propones a Olivia?', en: 'What do you suggest to Olivia?' },
            options: [
              { say: { es: 'Darle una tarea importante en el barco: controlar el equipo.', en: 'Give him an important job on the boat: checking the equipment.' }, then: { es: 'El chico se toma su trabajo muy en serio. Al final, se mete al agua solo, con chaleco.', en: 'The boy takes his job very seriously. In the end, he gets into the water by himself, with a life jacket.' } },
              { say: { es: 'Hablar con él en privado.', en: 'Talk to him privately.' }, then: { es: 'Él confiesa que tuvo un susto de pequeño. Olivia nada a su lado todo el tiempo.', en: 'He confesses he had a fright as a child. Olivia swims beside him the whole time.' } },
              { say: { es: 'Hacer que todos usen chaleco, sin excepciones.', en: 'Make everyone wear a life jacket, no exceptions.' }, then: { es: 'Los estudiantes protestan, pero el chico respira tranquilo. Nadie nota nada.', en: 'The students protest, but the boy breathes easy. Nobody notices anything.' } },
            ],
          },
          twist: { es: 'Al final del día, un estudiante pregunta: «Si el agua sigue calentándose, ¿para qué plantamos corales?». Todos miran a Olivia. ¿Qué respondería ella?', en: 'At the end of the day, a student asks: “If the water keeps getting hotter, why are we planting corals?” Everyone looks at Olivia. What would she answer?' },
          questions: [
            { q: { es: '¿Hiciste voluntariado alguna vez?', en: 'Have you ever volunteered?' }, help: { es: 'Sí, en… / No, pero me gustaría.', en: 'Yes, at… / No, but I would like to.' }, follow: [{ es: '¿Qué hacías?', en: 'What did you do?' }, { es: '¿Lo recomiendas?', en: 'Do you recommend it?' }] },
            { q: { es: '¿Escondiste algo que no sabías hacer?', en: 'Have you hidden something you couldn’t do?' }, help: { es: 'Sí, una vez no dije que… / No, siempre lo digo.', en: 'Yes, once I didn’t say that… / No, I always say it.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Vale la pena hacer algo pequeño contra un problema enorme?', en: 'Is it worth doing something small against a huge problem?' }, help: { es: 'Sí, porque… / A veces pienso que no, porque…', en: 'Yes, because… / Sometimes I think not, because…' }, follow: [{ es: '¿Qué haces tú?', en: 'What do you do?' }, { es: '¿Te sientes útil?', en: 'Do you feel useful?' }] },
            { q: { es: '¿Tienes plantas o un jardín?', en: 'Do you have plants or a garden?' }, help: { es: 'Sí, tengo… / No, se me mueren.', en: 'Yes, I have… / No, they die on me.' }, follow: [{ es: '¿Quién las cuida?', en: 'Who looks after them?' }, { es: '¿Cuál es tu favorita?', en: 'Which is your favourite?' }] },
          ],
          words: [{ es: 'plantar', en: 'to plant' }, { es: 'el fondo del mar', en: 'the seabed' }, { es: 'el voluntario', en: 'the volunteer' }, { es: 'humillado', en: 'humiliated' }, { es: 'regar', en: 'to water' }],
        },
        B1: {
          scene: { es: 'Unos científicos proponen algo polémico: criar en laboratorio corales modificados que resisten el calor y plantarlos en el arrecife. Podría salvar parte de la Gran Barrera, pero nadie sabe qué efectos tendría a largo plazo en el resto del ecosistema. Olivia forma parte del comité que debe aprobar o rechazar la primera prueba a gran escala.', en: 'Some scientists are proposing something controversial: breeding heat-resistant modified corals in the lab and planting them on the reef. It could save part of the Great Barrier Reef, but nobody knows what long-term effects it would have on the rest of the ecosystem. Olivia is on the committee that must approve or reject the first large-scale trial.' },
          opener: { es: 'Durante años dije que la única solución era reducir las emisiones. Sigo pensándolo. Pero las emisiones no bajan lo suficiente y el arrecife no puede esperar. Si aprobamos la prueba, estamos jugando a ser dioses con un ecosistema que no entendemos del todo. Si no la aprobamos, quizás vemos morir el arrecife sin hacer nada. ¿Es peor arriesgarse o no hacer nada?', en: 'For years I said the only solution was to cut emissions. I still think so. But emissions aren’t falling enough and the reef can’t wait. If we approve the trial, we’re playing God with an ecosystem we don’t fully understand. If we don’t, maybe we watch the reef die without doing anything. Is it worse to take the risk or to do nothing?' },
          decide: {
            ask: { es: '¿Qué debería votar Olivia?', en: 'How should Olivia vote?' },
            options: [
              { say: { es: 'Aprobar la prueba en una zona pequeña y controlada.', en: 'Approve the trial in a small, controlled area.' }, then: { es: 'Los primeros resultados son buenos, pero los críticos dicen que es demasiado pronto para celebrar.', en: 'The first results are good, but critics say it’s too early to celebrate.' } },
              { say: { es: 'Rechazarla y exigir al gobierno metas de emisiones más duras.', en: 'Reject it and demand tougher emissions targets from the government.' }, then: { es: 'El gobierno promete metas nuevas. Olivia no está segura de que las cumpla.', en: 'The government promises new targets. Olivia isn’t sure it will meet them.' } },
              { say: { es: 'Pedir que decidan también los pueblos indígenas del mar, dueños tradicionales de la zona.', en: 'Ask that the sea’s Indigenous peoples, the area’s traditional owners, also decide.' }, then: { es: 'Los dueños tradicionales piden tiempo para consultar a sus comunidades. El proceso es más lento, pero más legítimo.', en: 'The traditional owners ask for time to consult their communities. The process is slower, but more legitimate.' } },
            ],
          },
          twist: { es: 'La empresa que financia la investigación quiere patentar los corales modificados. Si funcionan, podría vender la tecnología a otros países. ¿Debe alguien ser dueño de un coral?', en: 'The company funding the research wants to patent the modified corals. If they work, it could sell the technology to other countries. Should anyone own a coral?' },
          questions: [
            { q: { es: '¿Es peor arriesgarse o no hacer nada?', en: 'Is it worse to take a risk or do nothing?' }, help: { es: 'Creo que es peor… porque…', en: 'I think it’s worse to… because…' }, follow: [{ es: '¿Te pasó en tu vida?', en: 'Has it happened in your life?' }, { es: '¿Qué elegiste?', en: 'What did you choose?' }] },
            { q: { es: '¿La tecnología puede resolver los problemas que creó?', en: 'Can technology solve the problems it created?' }, help: { es: 'En parte, por ejemplo… / No, porque…', en: 'Partly, for example… / No, because…' }, follow: [{ es: '¿Confías en la ciencia?', en: 'Do you trust science?' }, { es: '¿En qué temas más?', en: 'On which topics most?' }] },
            { q: { es: '¿Quién debería decidir sobre un lugar natural?', en: 'Who should decide about a natural place?' }, help: { es: 'Los científicos / el gobierno / la gente local, porque…', en: 'Scientists / the government / local people, because…' }, follow: [{ es: '¿Y si no están de acuerdo?', en: 'And if they disagree?' }, { es: '¿Quién tiene la última palabra?', en: 'Who has the last word?' }] },
            { q: { es: '¿Se puede ser dueño de algo vivo?', en: 'Can you own something alive?' }, help: { es: 'No, porque… / En algunos casos sí, como…', en: 'No, because… / In some cases yes, like…' }, follow: [{ es: '¿Qué piensas de las semillas patentadas?', en: 'What do you think of patented seeds?' }, { es: '¿Y de las medicinas?', en: 'And of medicines?' }] },
          ],
          words: [{ es: 'modificado', en: 'modified' }, { es: 'las emisiones', en: 'emissions' }, { es: 'a largo plazo', en: 'long-term' }, { es: 'patentar', en: 'to patent' }, { es: 'el dueño tradicional', en: 'the traditional owner' }],
        },
      },
    },
    // ------------------------------------------------------------ the Daintree rainforest
    {
      id: 'daintree',
      name: { es: 'La selva de Daintree', en: 'The Daintree rainforest' },
      who: { name: 'Jarrah', role: { es: 'guía kuku yalanji', en: 'Kuku Yalanji guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una selva muy verde y muy vieja. Hay árboles enormes, un río y mucha humedad. Jarrah es guía. Es del pueblo kuku yalanji.', en: 'It is a very green and very old rainforest. There are huge trees, a river and lots of humidity. Jarrah is a guide. He is from the Kuku Yalanji people.' },
          opener: { es: 'Hola. Soy Jarrah. Esta selva tiene ciento ochenta millones de años. Es la casa de mi pueblo. Camina despacio, por favor.', en: 'Hello. I am Jarrah. This rainforest is a hundred and eighty million years old. It is my people’s home. Walk slowly, please.' },
          decide: {
            ask: { es: 'Jarrah te enseña tres cosas. ¿Qué miras?', en: 'Jarrah shows you three things. What do you look at?' },
            options: [
              { say: { es: 'Un árbol enorme.', en: 'A huge tree.' }, then: { es: 'El árbol tiene raíces como paredes. ¡Es más alto que una casa!', en: 'The tree has roots like walls. It’s taller than a house!' } },
              { say: { es: 'Un pájaro grande.', en: 'A big bird.' }, then: { es: 'Es un casuario. Es azul y negro. Jarrah dice: «No te acerques».', en: 'It is a cassowary. It is blue and black. Jarrah says: “Don’t go near it.”' } },
              { say: { es: 'Una planta pequeña.', en: 'A small plant.' }, then: { es: 'Jarrah dice: «Esta planta es medicina para el dolor de cabeza».', en: 'Jarrah says: “This plant is medicine for headaches.”' } },
            ],
          },
          twist: { es: 'Empieza a llover muy fuerte. Jarrah sonríe: «Es normal». ¿Qué haces?', en: 'It starts to rain very hard. Jarrah smiles: “It’s normal.” What do you do?' },
          questions: [
            { q: { es: '¿Te gusta la selva?', en: 'Do you like the rainforest?' }, help: { es: 'Sí, mucho. / No, hace mucho calor.', en: 'Yes, a lot. / No, it’s too hot.' }, follow: [{ es: '¿Fuiste a una?', en: 'Have you been to one?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Conoces plantas medicinales?', en: 'Do you know medicinal plants?' }, help: { es: 'Sí, la manzanilla… / No.', en: 'Yes, camomile… / No.' }, follow: [{ es: '¿Para qué sirve?', en: 'What is it for?' }, { es: '¿Quién te enseñó?', en: 'Who taught you?' }] },
            { q: { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }, help: { es: 'Sí, me relaja. / No, me pone triste.', en: 'Yes, it relaxes me. / No, it makes me sad.' }, follow: [{ es: '¿Qué haces cuando llueve?', en: 'What do you do when it rains?' }, { es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }] },
            { q: { es: '¿Caminas rápido o despacio?', en: 'Do you walk fast or slowly?' }, help: { es: 'Camino rápido. / Camino despacio.', en: 'I walk fast. / I walk slowly.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y en vacaciones?', en: 'And on holiday?' }] },
          ],
          words: [{ es: 'la selva', en: 'the rainforest' }, { es: 'el árbol', en: 'the tree' }, { es: 'la raíz', en: 'the root' }, { es: 'la medicina', en: 'the medicine' }, { es: 'despacio', en: 'slowly' }],
        },
        A1: {
          scene: { es: 'Jarrah lleva al grupo a un río de agua clara. Explica que hay lugares sagrados donde los turistas no pueden entrar. En un árbol hay pinturas antiguas. Una turista quiere bañarse en una poza que está marcada con un cartel: «Lugar sagrado. No entrar».', en: 'Jarrah takes the group to a clear river. He explains that there are sacred places where tourists cannot go. On a tree there are ancient paintings. A tourist wants to swim in a pool marked with a sign: “Sacred site. Do not enter.”' },
          opener: { es: 'Mi abuela me enseñó el nombre de cada planta y cada animal en nuestra lengua. Muchas de esas palabras casi nadie las sabe ya. Por eso hago este trabajo: quiero que la gente entienda que esta selva no está vacía, tiene dueños y tiene historias. ¿Tu familia tiene palabras o costumbres que se están perdiendo?', en: 'My grandmother taught me the name of every plant and every animal in our language. Hardly anyone knows many of those words now. That’s why I do this work: I want people to understand that this forest isn’t empty, it has owners and it has stories. Does your family have words or customs that are being lost?' },
          decide: {
            ask: { es: 'La turista va a entrar en la poza sagrada. ¿Qué haces?', en: 'The tourist is about to go into the sacred pool. What do you do?' },
            options: [
              { say: { es: 'Le explico el cartel con respeto.', en: 'I explain the sign to her respectfully.' }, then: { es: 'La turista no lo había visto. Pide perdón a Jarrah.', en: 'The tourist hadn’t seen it. She apologises to Jarrah.' } },
              { say: { es: 'Llamo a Jarrah.', en: 'I call Jarrah.' }, then: { es: 'Jarrah le explica la historia del lugar. Ella escucha con mucha atención.', en: 'Jarrah tells her the story of the place. She listens very carefully.' } },
              { say: { es: 'Le propongo otra poza donde sí se puede nadar.', en: 'I suggest another pool where swimming is allowed.' }, then: { es: 'La otra poza es igual de bonita. Todos se bañan allí.', en: 'The other pool is just as beautiful. Everyone swims there.' } },
            ],
          },
          twist: { es: 'Un turista pregunta a Jarrah: «¿Pero tú vives en la selva o en una casa normal?». Jarrah se ríe. ¿Qué piensas de la pregunta?', en: 'A tourist asks Jarrah: “But do you live in the forest or in a normal house?” Jarrah laughs. What do you think of the question?' },
          questions: [
            { q: { es: '¿Tu familia tiene palabras o costumbres que se pierden?', en: 'Does your family have words or customs that are being lost?' }, help: { es: 'Sí, mi abuela decía… / No que yo sepa.', en: 'Yes, my grandmother used to say… / Not that I know of.' }, follow: [{ es: '¿Las usas tú?', en: 'Do you use them?' }, { es: '¿Las enseñarías?', en: 'Would you teach them?' }] },
            { q: { es: '¿Hay lugares sagrados en tu país?', en: 'Are there sacred places in your country?' }, help: { es: 'Sí, por ejemplo… / No sé.', en: 'Yes, for example… / I don’t know.' }, follow: [{ es: '¿Se pueden visitar?', en: 'Can they be visited?' }, { es: '¿Los visitaste?', en: 'Have you visited them?' }] },
            { q: { es: '¿Qué te enseñaron tus abuelos?', en: 'What did your grandparents teach you?' }, help: { es: 'Me enseñaron a…', en: 'They taught me to…' }, follow: [{ es: '¿Lo haces todavía?', en: 'Do you still do it?' }, { es: '¿Se lo enseñas a alguien?', en: 'Do you teach it to anyone?' }] },
            { q: { es: '¿Hiciste una pregunta tonta a alguien de otra cultura?', en: 'Have you asked someone from another culture a silly question?' }, help: { es: 'Sí, una vez pregunté… / Creo que no.', en: 'Yes, once I asked… / I don’t think so.' }, follow: [{ es: '¿Cómo reaccionó?', en: 'How did they react?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
          ],
          words: [{ es: 'sagrado', en: 'sacred' }, { es: 'la poza', en: 'the pool (in a river)' }, { es: 'la costumbre', en: 'the custom' }, { es: 'el dueño', en: 'the owner' }, { es: 'perderse', en: 'to be lost' }],
        },
        A2: {
          scene: { es: 'Hace pocos años, el gobierno devolvió oficialmente la selva de Daintree a sus dueños tradicionales, los kuku yalanji. Ahora ellos la gestionan junto con el gobierno. Jarrah organiza una visita para un grupo de jóvenes de la ciudad que nunca vieron la selva. Uno de ellos dice que es aburrida y saca el móvil todo el tiempo.', en: 'A few years ago, the government officially returned the Daintree rainforest to its traditional owners, the Kuku Yalanji. Now they manage it together with the government. Jarrah organises a visit for a group of city teenagers who have never seen the rainforest. One of them says it’s boring and gets his phone out all the time.' },
          opener: { es: 'El día que nos devolvieron la selva, mi tío lloró como un niño. Esperó cuarenta años. Ahora tenemos la responsabilidad de cuidarla y de enseñarla. Pero si un chico de diecisiete años piensa que es aburrida, algo estoy haciendo mal. Yo a su edad también prefería la ciudad. ¿Cómo le hablarías tú?', en: 'The day they gave us back the forest, my uncle cried like a child. He had waited forty years. Now we have the responsibility to look after it and teach about it. But if a seventeen-year-old thinks it’s boring, I’m doing something wrong. At his age I preferred the city too. How would you talk to him?' },
          decide: {
            ask: { es: '¿Qué le propones a Jarrah?', en: 'What do you suggest to Jarrah?' },
            options: [
              { say: { es: 'Darle una tarea con el móvil: grabar sonidos de animales.', en: 'Give him a task with his phone: recording animal sounds.' }, then: { es: 'El chico graba un casuario. Al final del día tiene cuarenta grabaciones y no para de hablar.', en: 'The boy records a cassowary. By the end of the day he has forty recordings and can’t stop talking.' } },
              { say: { es: 'Contarle una historia de miedo de la selva.', en: 'Tell him a scary story about the forest.' }, then: { es: 'Jarrah cuenta una leyenda antigua. El chico guarda el móvil y no se separa del grupo.', en: 'Jarrah tells an old legend. The boy puts his phone away and stays close to the group.' } },
              { say: { es: 'Dejarlo en paz: no a todos les tiene que gustar.', en: 'Leave him alone: not everyone has to like it.' }, then: { es: 'El chico sigue con el móvil. Meses después, escribe a Jarrah para volver.', en: 'The boy keeps using his phone. Months later, he writes to Jarrah to come back.' } },
            ],
          },
          twist: { es: 'El chico descubre que su bisabuela era kuku yalanji y él no lo sabía: su familia nunca habló del tema. ¿Qué debería hacer con esa información?', en: 'The boy discovers that his great-grandmother was Kuku Yalanji and he didn’t know: his family never talked about it. What should he do with that information?' },
          questions: [
            { q: { es: '¿Algo que te parecía aburrido de joven ahora te gusta?', en: 'Is there something you found boring when young that you like now?' }, help: { es: 'Sí, antes… y ahora…', en: 'Yes, before… and now…' }, follow: [{ es: '¿Qué cambió?', en: 'What changed?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Usas mucho el móvil en la naturaleza?', en: 'Do you use your phone a lot in nature?' }, help: { es: 'Sí, para fotos… / No, lo apago.', en: 'Yes, for photos… / No, I turn it off.' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Podrías pasar un día sin él?', en: 'Could you spend a day without it?' }] },
            { q: { es: '¿Hay algo de tu familia que nadie cuenta?', en: 'Is there something about your family that nobody talks about?' }, help: { es: 'Creo que sí, por ejemplo… / No que yo sepa.', en: 'I think so, for example… / Not that I know of.' }, follow: [{ es: '¿Te gustaría saberlo?', en: 'Would you like to know?' }, { es: '¿A quién preguntarías?', en: 'Who would you ask?' }] },
            { q: { es: '¿Esperaste mucho tiempo por algo importante?', en: 'Have you waited a long time for something important?' }, help: { es: 'Sí, esperé… años para…', en: 'Yes, I waited… years for…' }, follow: [{ es: '¿Llegó?', en: 'Did it come?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
          ],
          words: [{ es: 'devolver', en: 'to give back' }, { es: 'gestionar', en: 'to manage' }, { es: 'la responsabilidad', en: 'the responsibility' }, { es: 'la leyenda', en: 'the legend' }, { es: 'la grabación', en: 'the recording' }],
        },
        B1: {
          scene: { es: 'Una empresa quiere construir un hotel ecológico de lujo dentro de la selva: cabañas en los árboles, sin coches, con energía solar. Promete empleos para los jóvenes kuku yalanji y un porcentaje de los beneficios para la comunidad. Algunos ancianos dicen que es una oportunidad; otros, que es vender la tierra que tanto costó recuperar. Jarrah tiene que votar en el consejo de la comunidad.', en: 'A company wants to build a luxury eco-hotel inside the rainforest: treehouse cabins, no cars, solar power. It promises jobs for young Kuku Yalanji people and a percentage of the profits for the community. Some elders say it’s an opportunity; others, that it means selling the land that was so hard to win back. Jarrah has to vote in the community council.' },
          opener: { es: 'Muchos de nuestros jóvenes se van a Cairns o a Brisbane porque aquí no hay trabajo. Si se van, ¿quién va a cuidar la selva y hablar nuestra lengua? Un hotel podría darles trabajo aquí. Pero un hotel de lujo también trae lo que no queremos: gente que paga mucho y cree que todo está a su servicio. ¿Se puede usar el turismo para proteger una cultura sin convertirla en espectáculo?', en: 'Many of our young people leave for Cairns or Brisbane because there is no work here. If they go, who will look after the forest and speak our language? A hotel could give them work here. But a luxury hotel also brings what we don’t want: people who pay a lot and think everything is at their service. Can you use tourism to protect a culture without turning it into a show?' },
          decide: {
            ask: { es: '¿Qué debería votar Jarrah?', en: 'How should Jarrah vote?' },
            options: [
              { say: { es: 'Sí, pero con la comunidad como dueña mayoritaria del hotel.', en: 'Yes, but with the community as majority owner of the hotel.' }, then: { es: 'La empresa duda, pero acepta el cincuenta y uno por ciento. Las negociaciones duran un año.', en: 'The company hesitates, but accepts fifty-one percent. Negotiations last a year.' } },
              { say: { es: 'No, y crear un turismo propio, pequeño, dirigido por la comunidad.', en: 'No, and create their own small tourism, run by the community.' }, then: { es: 'Empiezan con pocas visitas guiadas. Crecen despacio, pero cada decisión es suya.', en: 'They start with a few guided tours. They grow slowly, but every decision is theirs.' } },
              { say: { es: 'Pedir que voten también los jóvenes que se fueron.', en: 'Ask for the young people who left to vote too.' }, then: { es: 'Muchos jóvenes votan desde la ciudad. El resultado sorprende a los ancianos.', en: 'Many young people vote from the city. The result surprises the elders.' } },
            ],
          },
          twist: { es: 'Una periodista descubre que la empresa del hotel tiene minas en otras tierras indígenas, con problemas ambientales graves. La empresa dice que «este proyecto es diferente». ¿Se puede confiar?', en: 'A journalist discovers that the hotel company has mines on other Indigenous lands, with serious environmental problems. The company says “this project is different”. Can it be trusted?' },
          questions: [
            { q: { es: '¿El turismo puede proteger una cultura?', en: 'Can tourism protect a culture?' }, help: { es: 'Sí, si… / Muchas veces la convierte en…', en: 'Yes, if… / It often turns it into…' }, follow: [{ es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Los jóvenes de tu país se van de los pueblos?', en: 'Do young people in your country leave the villages?' }, help: { es: 'Sí, se van a… porque…', en: 'Yes, they go to… because…' }, follow: [{ es: '¿Qué se pierde?', en: 'What is lost?' }, { es: '¿Volverían?', en: 'Would they come back?' }] },
            { q: { es: '¿Se puede confiar en una empresa por un proyecto aunque tenga un mal historial?', en: 'Can you trust a company on one project even if it has a bad track record?' }, help: { es: 'Solo con garantías… / No, porque…', en: 'Only with guarantees… / No, because…' }, follow: [{ es: '¿Qué garantías pedirías?', en: 'What guarantees would you ask for?' }, { es: '¿Quién las controlaría?', en: 'Who would check them?' }] },
            { q: { es: '¿Quién debería votar sobre el futuro de un lugar: los que viven allí o también los que se fueron?', en: 'Who should vote on a place’s future: those who live there or also those who left?' }, help: { es: 'Los que viven allí, porque… / Todos, porque…', en: 'Those who live there, because… / Everyone, because…' }, follow: [{ es: '¿Votas en tu ciudad de origen?', en: 'Do you vote in your hometown?' }, { es: '¿Te parece justo?', en: 'Do you think it’s fair?' }] },
          ],
          words: [{ es: 'la cabaña', en: 'the cabin' }, { es: 'el consejo', en: 'the council' }, { es: 'mayoritario', en: 'majority' }, { es: 'la mina', en: 'the mine' }, { es: 'el historial', en: 'the track record' }],
        },
      },
    },
    // ------------------------------------------------------------ the koala sanctuary
    {
      id: 'koalas',
      name: { es: 'El santuario de koalas', en: 'The koala sanctuary' },
      who: { name: 'Emma', role: { es: 'cuidadora de koalas', en: 'koala keeper' } },
      levels: {
        A0: {
          scene: { es: 'Es un parque con árboles de eucalipto. En los árboles hay koalas. Duermen mucho. Hay canguros en la hierba. Emma cuida a los animales.', en: 'It is a park with eucalyptus trees. In the trees there are koalas. They sleep a lot. There are kangaroos on the grass. Emma looks after the animals.' },
          opener: { es: '¡Hola! Soy Emma. Los koalas duermen veinte horas al día. ¡Más que tú! ¿Quieres ver a los canguros?', en: 'Hello! I am Emma. Koalas sleep twenty hours a day. More than you! Do you want to see the kangaroos?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Doy de comer a los canguros.', en: 'I feed the kangaroos.' }, then: { es: 'Un canguro come de tu mano. ¡Es suave!', en: 'A kangaroo eats from your hand. It’s soft!' } },
              { say: { es: 'Miro a los koalas.', en: 'I look at the koalas.' }, then: { es: 'Un koala abre un ojo, te mira y duerme otra vez.', en: 'A koala opens one eye, looks at you and goes back to sleep.' } },
              { say: { es: 'Busco una cría de canguro.', en: 'I look for a baby kangaroo.' }, then: { es: '¡Hay uno en la bolsa de su mamá! Solo se ve la cabeza.', en: 'There’s one in its mum’s pouch! You can only see its head.' } },
            ],
          },
          twist: { es: 'Un canguro grande salta hacia ti. ¿Qué haces?', en: 'A big kangaroo jumps towards you. What do you do?' },
          questions: [
            { q: { es: '¿Cuántas horas duermes?', en: 'How many hours do you sleep?' }, help: { es: 'Duermo… horas.', en: 'I sleep… hours.' }, follow: [{ es: '¿Es suficiente?', en: 'Is it enough?' }, { es: '¿Duermes la siesta?', en: 'Do you take a nap?' }] },
            { q: { es: '¿Qué animal australiano te gusta?', en: 'Which Australian animal do you like?' }, help: { es: 'Me gusta el koala / el canguro…', en: 'I like the koala / the kangaroo…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Lo viste?', en: 'Have you seen it?' }] },
            { q: { es: '¿Vas al zoo?', en: 'Do you go to the zoo?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Te gustan los zoos?', en: 'Do you like zoos?' }, { es: '¿Qué animal te gusta ver?', en: 'Which animal do you like to see?' }] },
            { q: { es: '¿Saltas bien?', en: 'Can you jump well?' }, help: { es: 'Sí, muy bien. / No mucho.', en: 'Yes, very well. / Not much.' }, follow: [{ es: '¿Hacías deporte de niño?', en: 'Did you do sport as a child?' }, { es: '¿Cuál?', en: 'Which one?' }] },
          ],
          words: [{ es: 'el koala', en: 'the koala' }, { es: 'el canguro', en: 'the kangaroo' }, { es: 'saltar', en: 'to jump' }, { es: 'la bolsa', en: 'the pouch' }, { es: 'cuidar', en: 'to look after' }],
        },
        A1: {
          scene: { es: 'Emma trabaja en el hospital del santuario. Hoy llegó un koala pequeño cuya madre murió atropellada por un coche. Tiene ocho meses y pesa menos de un kilo. Emma lo alimenta con un biberón cada cuatro horas, también de noche.', en: 'Emma works at the sanctuary hospital. Today a small koala arrived whose mother was killed by a car. He is eight months old and weighs less than a kilo. Emma feeds him with a bottle every four hours, at night too.' },
          opener: { es: 'Los koalas huérfanos necesitan a alguien todo el tiempo. Este pequeño duerme en una mochila, pegado a mí, como si yo fuera su mamá. Mis amigos dicen que estoy loca: no salgo, no duermo, siempre huelo a eucalipto. Pero cuando un koala vuelve al bosque, es la mejor sensación del mundo. ¿Tú cuidaste a un animal o a una persona día y noche?', en: 'Orphaned koalas need someone all the time. This little one sleeps in a backpack, close to me, as if I were his mum. My friends say I’m crazy: I don’t go out, I don’t sleep, I always smell of eucalyptus. But when a koala goes back to the forest, it’s the best feeling in the world. Have you looked after an animal or a person day and night?' },
          decide: {
            ask: { es: 'Emma tiene que ponerle nombre al koala. ¿Qué propones?', en: 'Emma has to name the koala. What do you suggest?' },
            options: [
              { say: { es: 'Un nombre australiano.', en: 'An Australian name.' }, then: { es: 'Emma elige «Bluey». Todos los niños del santuario lo aprueban.', en: 'Emma chooses “Bluey”. All the children at the sanctuary approve.' } },
              { say: { es: 'Mi nombre.', en: 'My name.' }, then: { es: 'Emma ríe y dice que sí. Ahora tienes un koala con tu nombre en Australia.', en: 'Emma laughs and says yes. Now you have a koala with your name in Australia.' } },
              { say: { es: 'Un nombre de comida.', en: 'A food name.' }, then: { es: 'Lo llaman «Galleta». Cuando se despierta, todos gritan: «¡Galleta!».', en: 'They call him “Biscuit”. When he wakes up, everyone shouts: “Biscuit!”' } },
            ],
          },
          twist: { es: 'Un turista quiere pagar mucho dinero para sacarse una foto con la cría de koala en brazos. Al santuario le hace falta dinero. ¿Debería aceptar Emma?', en: 'A tourist wants to pay a lot of money to take a photo holding the baby koala. The sanctuary needs money. Should Emma accept?' },
          questions: [
            { q: { es: '¿Cuidaste a alguien día y noche?', en: 'Have you looked after someone day and night?' }, help: { es: 'Sí, a mi hijo / a mi abuela / a mi perro…', en: 'Yes, my baby / my grandmother / my dog…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Qué nombre le pondrías a una mascota?', en: 'What name would you give a pet?' }, help: { es: 'Le pondría…', en: 'I would call it…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tuviste mascotas?', en: 'Have you had pets?' }] },
            { q: { es: '¿Tus amigos piensan que estás loco por algo?', en: 'Do your friends think you’re crazy about something?' }, help: { es: 'Sí, por… / No, creo que no.', en: 'Yes, about… / No, I don’t think so.' }, follow: [{ es: '¿Tienen razón?', en: 'Are they right?' }, { es: '¿Te importa?', en: 'Do you mind?' }] },
            { q: { es: '¿Está bien tocar animales salvajes para una foto?', en: 'Is it OK to touch wild animals for a photo?' }, help: { es: 'No, porque… / A veces, si…', en: 'No, because… / Sometimes, if…' }, follow: [{ es: '¿Lo hiciste?', en: 'Have you done it?' }, { es: '¿Lo harías ahora?', en: 'Would you do it now?' }] },
          ],
          words: [{ es: 'huérfano', en: 'orphaned' }, { es: 'atropellar', en: 'to run over' }, { es: 'el biberón', en: 'the bottle (baby)' }, { es: 'pesar', en: 'to weigh' }, { es: 'en brazos', en: 'in your arms' }],
        },
        A2: {
          scene: { es: 'Es el día en que Galleta, el koala que Emma crió durante un año, vuelve al bosque. Emma lo lleva en una caja a un bosque protegido a dos horas del santuario. Le pusieron un collar con GPS. Emma lleva un año sin vacaciones y está emocionada y triste a la vez.', en: 'It is the day Biscuit, the koala Emma raised for a year, goes back to the forest. Emma takes him in a box to a protected forest two hours from the sanctuary. They have put a GPS collar on him. Emma hasn’t had a holiday in a year and is excited and sad at the same time.' },
          opener: { es: 'Cuando llegó cabía en mi mano. Ahora pesa seis kilos y ya no quiere biberón. Sé que tiene que irse: es un animal salvaje, no una mascota. Pero el año pasado, otro koala que solté murió a las dos semanas atacado por un perro. Pasé días sin dormir. ¿Y si a Galleta le pasa lo mismo?', en: 'When he arrived he fitted in my hand. Now he weighs six kilos and doesn’t want the bottle any more. I know he has to go: he’s a wild animal, not a pet. But last year, another koala I released died two weeks later, attacked by a dog. I couldn’t sleep for days. What if the same thing happens to Biscuit?' },
          decide: {
            ask: { es: '¿Qué le dices a Emma?', en: 'What do you tell Emma?' },
            options: [
              { say: { es: 'Que lo suelte: es lo mejor para él.', en: 'To release him: it’s the best thing for him.' }, then: { es: 'Galleta sube al árbol más alto sin mirar atrás. Emma llora y se ríe a la vez.', en: 'Biscuit climbs the tallest tree without looking back. Emma cries and laughs at the same time.' } },
              { say: { es: 'Que lo suelte, pero que lo siga con el GPS cada día.', en: 'To release him, but follow him with the GPS every day.' }, then: { es: 'Durante un mes, Emma mira la aplicación diez veces al día. Galleta está bien.', en: 'For a month, Emma checks the app ten times a day. Biscuit is fine.' } },
              { say: { es: 'Que espere un mes más, hasta que sea más grande.', en: 'To wait one more month, until he is bigger.' }, then: { es: 'El veterinario dice que no: si espera más, Galleta se acostumbra demasiado a las personas.', en: 'The vet says no: if she waits longer, Biscuit gets too used to people.' } },
            ],
          },
          twist: { es: 'Tres semanas después, el GPS muestra a Galleta en el jardín de una casa. Los dueños tienen dos perros grandes. ¿Qué debería hacer Emma?', en: 'Three weeks later, the GPS shows Biscuit in a house’s garden. The owners have two big dogs. What should Emma do?' },
          questions: [
            { q: { es: '¿Te despediste de algo o de alguien que querías mucho?', en: 'Have you said goodbye to something or someone you loved a lot?' }, help: { es: 'Sí, cuando… / Todavía no.', en: 'Yes, when… / Not yet.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Volviste a verlo?', en: 'Did you see them again?' }] },
            { q: { es: '¿Te cuesta dejar ir las cosas?', en: 'Do you find it hard to let things go?' }, help: { es: 'Sí, mucho. / No, soy práctico.', en: 'Yes, very. / No, I’m practical.' }, follow: [{ es: '¿Qué te costó más?', en: 'What was hardest?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Cuánto tiempo hace que no tienes vacaciones?', en: 'How long has it been since you had a holiday?' }, help: { es: 'Hace… meses / años.', en: 'It has been… months / years.' }, follow: [{ es: '¿Adónde irías?', en: 'Where would you go?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Los perros deberían ir sueltos en las zonas con animales salvajes?', en: 'Should dogs be off the lead in areas with wild animals?' }, help: { es: 'No, porque… / Sí, si están entrenados.', en: 'No, because… / Yes, if they’re trained.' }, follow: [{ es: '¿Tienes perro?', en: 'Do you have a dog?' }, { es: '¿Lo llevas suelto?', en: 'Do you let it off the lead?' }] },
          ],
          words: [{ es: 'criar', en: 'to raise' }, { es: 'soltar', en: 'to release' }, { es: 'el collar', en: 'the collar' }, { es: 'salvaje', en: 'wild' }, { es: 'despedirse', en: 'to say goodbye' }],
        },
        B1: {
          scene: { es: 'El gobierno de Queensland quiere aprobar una gran urbanización de casas nuevas en un bosque donde viven unos cien koalas. La ciudad necesita viviendas: los alquileres subieron un cuarenta por ciento y mucha gente joven no puede pagar. La empresa promete un «corredor verde» para los koalas. Emma y otros cuidadores dicen que los koalas no sobreviven en corredores pequeños.', en: 'The Queensland government wants to approve a large new housing development in a forest where about a hundred koalas live. The city needs housing: rents have gone up forty percent and many young people can’t afford them. The company promises a “green corridor” for the koalas. Emma and other carers say koalas don’t survive in small corridors.' },
          opener: { es: 'Yo misma pago un alquiler que me come la mitad del sueldo. Entiendo a la gente que necesita casa: mi hermano vive con mis padres a los treinta y dos. Pero cada vez que se corta un bosque, me llegan koalas heridos, desorientados, atropellados. Siempre hay una razón para construir y nunca hay una razón suficiente para no hacerlo. ¿Hay que elegir entre personas y animales?', en: 'I pay rent that eats up half my salary. I understand people who need a home: my brother lives with my parents at thirty-two. But every time a forest is cut down, I get koalas that are injured, disoriented, run over. There’s always a reason to build and never a good enough reason not to. Do we have to choose between people and animals?' },
          decide: {
            ask: { es: '¿Qué debería defender Emma en la audiencia pública?', en: 'What should Emma argue for at the public hearing?' },
            options: [
              { say: { es: 'Construir en zonas ya urbanizadas, más alto, y dejar el bosque.', en: 'Build in already developed areas, higher, and leave the forest.' }, then: { es: 'La idea gusta a muchos, pero los vecinos de esas zonas no quieren edificios altos.', en: 'Many like the idea, but residents of those areas don’t want tall buildings.' } },
              { say: { es: 'Aceptar la urbanización con un corredor mucho más grande y controles independientes.', en: 'Accept the development with a much bigger corridor and independent checks.' }, then: { es: 'La empresa acepta la mitad de lo pedido. Los cuidadores no están satisfechos.', en: 'The company accepts half of what was asked. The carers aren’t satisfied.' } },
              { say: { es: 'Rechazarla y proponer comprar el bosque como parque público.', en: 'Reject it and propose buying the forest as a public park.' }, then: { es: 'Hace falta mucho dinero. Una campaña ciudadana reúne un tercio en tres meses.', en: 'It takes a lot of money. A citizens’ campaign raises a third in three months.' } },
            ],
          },
          twist: { es: 'Un estudio muestra que la urbanización tendría casas a precio accesible para dos mil familias. Una de esas familias habla en la audiencia: una madre sola con tres hijos que vive en el coche. ¿Cambia eso tu postura?', en: 'A study shows the development would have affordable homes for two thousand families. One of those families speaks at the hearing: a single mother with three children who lives in her car. Does that change your position?' },
          questions: [
            { q: { es: '¿Hay que elegir entre personas y animales?', en: 'Do we have to choose between people and animals?' }, help: { es: 'No siempre, porque… / A veces sí, y entonces…', en: 'Not always, because… / Sometimes yes, and then…' }, follow: [{ es: '¿Conoces un caso en tu país?', en: 'Do you know a case in your country?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
            { q: { es: '¿Es fácil encontrar vivienda donde vives?', en: 'Is it easy to find housing where you live?' }, help: { es: 'No, los alquileres… / Sí, bastante.', en: 'No, rents… / Yes, fairly.' }, follow: [{ es: '¿Qué solución propones?', en: 'What solution do you propose?' }, { es: '¿Quién debería pagarla?', en: 'Who should pay for it?' }] },
            { q: { es: '¿Vivirías en un edificio alto para salvar un bosque?', en: 'Would you live in a tall building to save a forest?' }, help: { es: 'Sí, sin problema. / Prefiero una casa porque…', en: 'Yes, no problem. / I prefer a house because…' }, follow: [{ es: '¿Dónde vives ahora?', en: 'Where do you live now?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Una historia personal debería cambiar una decisión pública?', en: 'Should a personal story change a public decision?' }, help: { es: 'Sí, porque las personas… / No, hay que mirar los datos…', en: 'Yes, because people… / No, you have to look at the data…' }, follow: [{ es: '¿Te convenció alguna vez una historia?', en: 'Has a story ever convinced you?' }, { es: '¿Sobre qué?', en: 'About what?' }] },
          ],
          words: [{ es: 'la urbanización', en: 'the housing development' }, { es: 'el corredor', en: 'the corridor' }, { es: 'desorientado', en: 'disoriented' }, { es: 'la audiencia pública', en: 'the public hearing' }, { es: 'accesible', en: 'affordable' }],
        },
      },
    },
    // ------------------------------------------------------------ K'gari
    {
      id: 'kgari',
      name: { es: 'La isla de arena K’gari', en: 'K’gari sand island' },
      who: { name: 'Mick', role: { es: 'conductor de 4x4', en: '4x4 driver' } },
      levels: {
        A0: {
          scene: { es: 'Es una isla de arena. No hay carreteras: la playa es la carretera. Mick conduce un coche grande. Hay lagos azules y dingos, perros salvajes.', en: 'It is a sand island. There are no roads: the beach is the road. Mick drives a big car. There are blue lakes and dingoes, wild dogs.' },
          opener: { es: '¡Hola! Soy Mick. Aquí conducimos por la playa. ¡Agárrate fuerte! ¿Estás listo?', en: 'Hello! I am Mick. Here we drive on the beach. Hold on tight! Are you ready?' },
          decide: {
            ask: { es: 'Mick para el coche. ¿Adónde vamos?', en: 'Mick stops the car. Where are we going?' },
            options: [
              { say: { es: 'Al lago azul.', en: 'To the blue lake.' }, then: { es: 'El agua es dulce y muy clara. Nadas un rato.', en: 'The water is fresh and very clear. You swim for a while.' } },
              { say: { es: 'Al barco viejo de la playa.', en: 'To the old shipwreck on the beach.' }, then: { es: 'Es un barco de hace cien años. Está oxidado y es enorme.', en: 'It is a hundred-year-old ship. It is rusty and huge.' } },
              { say: { es: 'A ver dingos.', en: 'To see dingoes.' }, then: { es: 'Ves un dingo lejos. Mick dice: «No te acerques».', en: 'You see a dingo far away. Mick says: “Don’t go near.”' } },
            ],
          },
          twist: { es: 'El coche se queda en la arena. ¡No se mueve! ¿Qué haces?', en: 'The car gets stuck in the sand. It won’t move! What do you do?' },
          questions: [
            { q: { es: '¿Te gustan las islas?', en: 'Do you like islands?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué isla conoces?', en: 'Which island do you know?' }, { es: '¿Cómo es?', en: 'What is it like?' }] },
            { q: { es: '¿Te gustan los coches grandes?', en: 'Do you like big cars?' }, help: { es: 'Sí. / No, prefiero pequeños.', en: 'Yes. / No, I prefer small ones.' }, follow: [{ es: '¿Qué coche tienes?', en: 'What car do you have?' }, { es: '¿Conduces?', en: 'Do you drive?' }] },
            { q: { es: '¿Nadas en lagos?', en: 'Do you swim in lakes?' }, help: { es: 'Sí, en verano. / No, en el mar.', en: 'Yes, in summer. / No, in the sea.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿El agua está fría?', en: 'Is the water cold?' }] },
            { q: { es: '¿Te dan miedo los perros?', en: 'Are you scared of dogs?' }, help: { es: 'Sí, un poco. / No, me encantan.', en: 'Yes, a bit. / No, I love them.' }, follow: [{ es: '¿Tienes perro?', en: 'Do you have a dog?' }, { es: '¿Cómo se llama?', en: 'What’s its name?' }] },
          ],
          words: [{ es: 'la isla', en: 'the island' }, { es: 'la arena', en: 'the sand' }, { es: 'el lago', en: 'the lake' }, { es: 'agarrarse', en: 'to hold on' }, { es: 'oxidado', en: 'rusty' }],
        },
        A1: {
          scene: { es: 'K’gari es la isla de arena más grande del mundo. Antes se llamaba Fraser, pero recuperó su nombre original, que en la lengua butchulla significa «paraíso». Mick prepara la cena en un campamento con vallas eléctricas para que no entren los dingos.', en: 'K’gari is the largest sand island in the world. It used to be called Fraser, but it got back its original name, which in the Butchulla language means “paradise”. Mick is making dinner at a campsite with electric fences so the dingoes can’t get in.' },
          opener: { es: 'Los dingos no son perros de casa. Son salvajes. El problema es que algunos turistas les dan comida y ellos pierden el miedo. Después se acercan a los niños. Hace unos años hubo ataques graves. Por eso la regla es simple: nunca, nunca dar comida. ¿En tu país hay animales salvajes peligrosos?', en: 'Dingoes aren’t pet dogs. They are wild. The problem is that some tourists feed them and they lose their fear. Then they come close to the children. A few years ago there were serious attacks. That’s why the rule is simple: never, ever give them food. Are there dangerous wild animals in your country?' },
          decide: {
            ask: { es: 'Un dingo se acerca a la valla del campamento. ¿Qué haces?', en: 'A dingo comes up to the campsite fence. What do you do?' },
            options: [
              { say: { es: 'Me quedo dentro y lo miro.', en: 'I stay inside and watch it.' }, then: { es: 'El dingo da una vuelta y se va al bosque.', en: 'The dingo walks around and goes into the forest.' } },
              { say: { es: 'Guardo toda la comida en el coche.', en: 'I put all the food in the car.' }, then: { es: 'Mick dice: «Perfecto. Sin olor, sin dingos».', en: 'Mick says: “Perfect. No smell, no dingoes.”' } },
              { say: { es: 'Saco una foto con flash.', en: 'I take a flash photo.' }, then: { es: 'El dingo se asusta y corre. Mick te mira serio.', en: 'The dingo gets scared and runs. Mick gives you a serious look.' } },
            ],
          },
          twist: { es: 'Un turista dice que vio a otro grupo dando salchichas a un dingo. Mick tiene que decidir si llamar a los guardas del parque. ¿Qué le aconsejas?', en: 'A tourist says he saw another group giving sausages to a dingo. Mick has to decide whether to call the park rangers. What do you advise him?' },
          questions: [
            { q: { es: '¿Hay animales salvajes peligrosos en tu país?', en: 'Are there dangerous wild animals in your country?' }, help: { es: 'Sí, hay… / No, no muchos.', en: 'Yes, there are… / No, not many.' }, follow: [{ es: '¿Viste uno?', en: 'Have you seen one?' }, { es: '¿Qué hay que hacer?', en: 'What should you do?' }] },
            { q: { es: '¿Acampaste alguna vez?', en: 'Have you ever been camping?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Qué cocinaste?', en: 'What did you cook?' }] },
            { q: { es: '¿Conoces un lugar que cambió de nombre?', en: 'Do you know a place that changed its name?' }, help: { es: 'Sí, … antes se llamaba… / No.', en: 'Yes, … used to be called… / No.' }, follow: [{ es: '¿Por qué cambió?', en: 'Why did it change?' }, { es: '¿La gente usa el nombre nuevo?', en: 'Do people use the new name?' }] },
            { q: { es: '¿Denunciarías a alguien que rompe una regla así?', en: 'Would you report someone breaking a rule like that?' }, help: { es: 'Sí, porque… / Primero hablaría con ellos.', en: 'Yes, because… / First I would talk to them.' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'el campamento', en: 'the campsite' }, { es: 'la valla eléctrica', en: 'the electric fence' }, { es: 'el dingo', en: 'the dingo' }, { es: 'el paraíso', en: 'paradise' }, { es: 'acercarse', en: 'to come close' }],
        },
        A2: {
          scene: { es: 'Es el último día del viaje. La marea sube más rápido de lo previsto y la playa, que es la carretera, se está estrechando. Hay que llegar al ferry en una hora. Delante, otro coche de turistas está atascado en la arena, con dos niños pequeños dentro. Si Mick se para a ayudar, quizás pierden el ferry.', en: 'It is the last day of the trip. The tide is coming in faster than expected and the beach, which is the road, is getting narrower. They have to reach the ferry within an hour. Ahead, another tourist car is stuck in the sand, with two small children inside. If Mick stops to help, they might miss the ferry.' },
          opener: { es: 'En esta isla todos nos ayudamos: hoy por ti, mañana por mí. Pero si perdemos el ferry, el grupo pasa otra noche aquí, y dos de mis pasajeros tienen un vuelo mañana temprano. La marea no espera a nadie. Y si dejamos a esa familia, quizás el agua llega al coche antes que la ayuda. ¿Qué harías?', en: 'On this island we all help each other: today you, tomorrow me. But if we miss the ferry, the group spends another night here, and two of my passengers have an early flight tomorrow. The tide waits for nobody. And if we leave that family, maybe the water reaches the car before help does. What would you do?' },
          decide: {
            ask: { es: '¿Qué le dices a Mick?', en: 'What do you tell Mick?' },
            options: [
              { say: { es: 'Que pare y ayude a la familia.', en: 'To stop and help the family.' }, then: { es: 'Sacan el coche en veinte minutos. Llegan al ferry justo cuando cierra la rampa.', en: 'They get the car out in twenty minutes. They reach the ferry just as the ramp closes.' } },
              { say: { es: 'Que llame por radio a los guardas y siga.', en: 'To radio the rangers and carry on.' }, then: { es: 'Los guardas llegan a tiempo. Pero la madre los mira pasar sin parar y llora.', en: 'The rangers arrive in time. But the mother watches them pass without stopping and cries.' } },
              { say: { es: 'Que suba a los niños y a la madre a nuestro coche.', en: 'To put the children and mother in our car.' }, then: { es: 'El coche va apretado, pero todos llegan. El padre espera a los guardas con su coche.', en: 'The car is cramped, but everyone makes it. The father waits for the rangers with his car.' } },
            ],
          },
          twist: { es: 'En el ferry, los dos pasajeros con vuelo se quejan: dicen que pagaron un tour, no un rescate. Uno quiere su dinero. ¿Qué le responderías?', en: 'On the ferry, the two passengers with a flight complain: they say they paid for a tour, not a rescue. One wants his money back. What would you answer him?' },
          questions: [
            { q: { es: '¿Ayudaste a un desconocido aunque te costó algo?', en: 'Have you helped a stranger even though it cost you something?' }, help: { es: 'Sí, una vez… / No que recuerde.', en: 'Yes, once… / Not that I remember.' }, follow: [{ es: '¿Qué te costó?', en: 'What did it cost you?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Perdiste un tren, un avión o un barco?', en: 'Have you missed a train, plane or boat?' }, help: { es: 'Sí, se me escapó… porque… / No, nunca.', en: 'Yes, I missed… because… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cuánto te costó?', en: 'How much did it cost you?' }] },
            { q: { es: '¿Crees en «hoy por ti, mañana por mí»?', en: 'Do you believe in “today you, tomorrow me”?' }, help: { es: 'Sí, porque… / No siempre funciona…', en: 'Yes, because… / It doesn’t always work…' }, follow: [{ es: '¿Alguien te devolvió un favor?', en: 'Has anyone returned a favour?' }, { es: '¿Cuál?', en: 'What was it?' }] },
            { q: { es: '¿Te quejas cuando un plan cambia por una buena razón?', en: 'Do you complain when a plan changes for a good reason?' }, help: { es: 'No, lo entiendo. / A veces, si…', en: 'No, I understand. / Sometimes, if…' }, follow: [{ es: '¿Qué te molesta más?', en: 'What bothers you most?' }, { es: '¿Cómo reaccionas?', en: 'How do you react?' }] },
          ],
          words: [{ es: 'la marea', en: 'the tide' }, { es: 'estrecharse', en: 'to narrow' }, { es: 'atascado', en: 'stuck' }, { es: 'la rampa', en: 'the ramp' }, { es: 'apretado', en: 'cramped' }],
        },
        B1: {
          scene: { es: 'Después de varios ataques de dingos a niños, algunos políticos piden reducir el número de dingos en K’gari. El pueblo butchulla, dueño tradicional de la isla, considera al dingo un animal sagrado, parte de su familia. Los científicos dicen que el problema son los humanos, no los dingos. Mick, que trabaja con turistas cada día, es invitado a un programa de radio.', en: 'After several dingo attacks on children, some politicians are calling for the number of dingoes on K’gari to be reduced. The Butchulla people, the island’s traditional owners, consider the dingo a sacred animal, part of their family. Scientists say the problem is humans, not dingoes. Mick, who works with tourists every day, is invited onto a radio programme.' },
          opener: { es: 'Llevo veinte años aquí y veo siempre lo mismo: turistas que no leen los carteles, que dan comida, que dejan a los niños solos en la playa. Los dingos aprenden rápido. Si matamos dingos, castigamos al animal por el error de las personas. Pero si un niño muere, ¿quién le explica a esa familia que respetamos al dingo? ¿Hasta dónde se puede limitar la libertad de los turistas?', en: 'I have been here twenty years and I always see the same thing: tourists who don’t read the signs, who give food, who leave the children alone on the beach. Dingoes learn fast. If we kill dingoes, we punish the animal for people’s mistakes. But if a child dies, who explains to that family that we respect the dingo? How far can tourists’ freedom be limited?' },
          decide: {
            ask: { es: '¿Qué debería defender Mick en la radio?', en: 'What should Mick argue for on the radio?' },
            options: [
              { say: { es: 'Multas muy altas y expulsión de la isla para quien dé comida.', en: 'Very high fines and expulsion from the island for anyone who feeds them.' }, then: { es: 'Las multas funcionan: los incidentes bajan a la mitad en un año.', en: 'The fines work: incidents fall by half in a year.' } },
              { say: { es: 'Que solo se pueda visitar la isla con guías autorizados.', en: 'That the island can only be visited with authorised guides.' }, then: { es: 'Los turistas independientes protestan. Las empresas de guías, como la de Mick, ganan más.', en: 'Independent tourists protest. Guide companies, like Mick’s, earn more.' } },
              { say: { es: 'Que el pueblo butchulla tenga la última palabra sobre los dingos.', en: 'That the Butchulla people have the last word on the dingoes.' }, then: { es: 'Los butchulla proponen zonas sin turistas para los dingos. Algunos políticos dicen que no es su decisión.', en: 'The Butchulla propose tourist-free zones for the dingoes. Some politicians say it isn’t their decision.' } },
            ],
          },
          twist: { es: 'Un oyente llama a la radio: es el padre de un niño atacado el año pasado. Dice que los guías como Mick ganan dinero con la isla y que no son neutrales. ¿Tiene razón en algo?', en: 'A listener calls the radio: he is the father of a child attacked last year. He says guides like Mick make money from the island and aren’t neutral. Is he right about anything?' },
          questions: [
            { q: { es: '¿Es justo castigar a un animal por el error de las personas?', en: 'Is it fair to punish an animal for people’s mistakes?' }, help: { es: 'No, porque… / A veces es necesario si…', en: 'No, because… / Sometimes it’s necessary if…' }, follow: [{ es: '¿Conoces un caso?', en: 'Do you know a case?' }, { es: '¿Qué se decidió?', en: 'What was decided?' }] },
            { q: { es: '¿Hasta dónde se puede limitar la libertad de los turistas?', en: 'How far can tourists’ freedom be limited?' }, help: { es: 'Se puede limitar cuando… / No se debería porque…', en: 'It can be limited when… / It shouldn’t be because…' }, follow: [{ es: '¿Aceptarías visitar un lugar solo con guía?', en: 'Would you accept visiting a place only with a guide?' }, { es: '¿Pagarías más?', en: 'Would you pay more?' }] },
            { q: { es: '¿Puede alguien que gana dinero con algo opinar de forma neutral?', en: 'Can someone who makes money from something give a neutral opinion?' }, help: { es: 'Es difícil, porque… / Sí, si es honesto…', en: 'It’s hard, because… / Yes, if they’re honest…' }, follow: [{ es: '¿En quién confías para informarte?', en: 'Who do you trust to inform you?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Qué animal es especial en la cultura de tu país?', en: 'Which animal is special in your country’s culture?' }, help: { es: 'El… es especial porque…', en: 'The… is special because…' }, follow: [{ es: '¿Se protege?', en: 'Is it protected?' }, { es: '¿Lo viste en libertad?', en: 'Have you seen it in the wild?' }] },
          ],
          words: [{ es: 'el oyente', en: 'the listener' }, { es: 'castigar', en: 'to punish' }, { es: 'la multa', en: 'the fine' }, { es: 'la expulsión', en: 'expulsion' }, { es: 'neutral', en: 'neutral' }],
        },
      },
    },
    // ------------------------------------------------------------ the mango farm
    {
      id: 'mangos',
      name: { es: 'La granja de mangos', en: 'The mango farm' },
      who: { name: 'Rosa', role: { es: 'agricultora de mangos', en: 'mango farmer' } },
      levels: {
        A0: {
          scene: { es: 'Es una granja grande con árboles de mango. Hace mucho calor. Hay trabajadores de muchos países. Rosa es la dueña. Tiene un sombrero de paja.', en: 'It is a big farm with mango trees. It is very hot. There are workers from many countries. Rosa is the owner. She has a straw hat.' },
          opener: { es: '¡Hola! Soy Rosa. Esta es mi granja. Los mangos están listos. ¿Quieres probar uno?', en: 'Hello! I am Rosa. This is my farm. The mangoes are ready. Do you want to try one?' },
          decide: {
            ask: { es: 'Rosa te da un mango. ¿Qué haces?', en: 'Rosa gives you a mango. What do you do?' },
            options: [
              { say: { es: 'Lo como enseguida.', en: 'I eat it straight away.' }, then: { es: 'Es muy dulce. ¡Tienes la cara llena de mango!', en: 'It is very sweet. Your face is covered in mango!' } },
              { say: { es: 'Ayudo a recoger mangos.', en: 'I help pick mangoes.' }, then: { es: 'Recoges veinte mangos. Rosa dice: «¡Buen trabajo!».', en: 'You pick twenty mangoes. Rosa says: “Good work!”' } },
              { say: { es: 'Lo guardo para después.', en: 'I keep it for later.' }, then: { es: 'Rosa ríe: «Hay miles. Come uno ahora».', en: 'Rosa laughs: “There are thousands. Eat one now.”' } },
            ],
          },
          twist: { es: 'Un trabajador de Vanuatu canta mientras trabaja. Todos cantan con él. ¿Cantas tú?', en: 'A worker from Vanuatu sings while he works. Everyone sings with him. Do you sing?' },
          questions: [
            { q: { es: '¿Te gusta el mango?', en: 'Do you like mango?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué fruta te gusta más?', en: 'Which fruit do you like most?' }, { es: '¿Comes fruta cada día?', en: 'Do you eat fruit every day?' }] },
            { q: { es: '¿Te gusta el calor?', en: 'Do you like the heat?' }, help: { es: 'Sí, me encanta. / No, prefiero el frío.', en: 'Yes, I love it. / No, I prefer the cold.' }, follow: [{ es: '¿Hace calor donde vives?', en: 'Is it hot where you live?' }, { es: '¿Cuántos grados?', en: 'How many degrees?' }] },
            { q: { es: '¿Trabajaste en el campo?', en: 'Have you worked in the countryside?' }, help: { es: 'Sí, una vez. / No, nunca.', en: 'Yes, once. / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Cantas cuando trabajas?', en: 'Do you sing when you work?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué canción?', en: 'Which song?' }, { es: '¿Escuchas música?', en: 'Do you listen to music?' }] },
          ],
          words: [{ es: 'la granja', en: 'the farm' }, { es: 'el mango', en: 'the mango' }, { es: 'recoger', en: 'to pick' }, { es: 'dulce', en: 'sweet' }, { es: 'el sombrero de paja', en: 'the straw hat' }],
        },
        A1: {
          scene: { es: 'Son las cinco de la mañana. Los trabajadores empiezan temprano para evitar el calor. Hay mochileros de Europa, trabajadores de las islas del Pacífico y un estudiante de Argentina. Rosa llegó a Australia desde Chile cuando tenía veinte años y empezó recogiendo fruta en esta misma granja.', en: 'It is five in the morning. The workers start early to avoid the heat. There are backpackers from Europe, workers from the Pacific Islands and a student from Argentina. Rosa came to Australia from Chile when she was twenty and started out picking fruit on this very farm.' },
          opener: { es: 'Trabajé aquí ocho años como recolectora. Después el dueño se jubiló y me ofreció comprar la granja poco a poco. Ahora soy la jefa de las personas que hacen lo que yo hacía. Intento ser la jefa que yo quería tener: pago bien, doy agua fría y nadie trabaja a mediodía. ¿Tú cómo sería el jefe ideal?', en: 'I worked here for eight years as a picker. Then the owner retired and offered to let me buy the farm little by little. Now I’m the boss of the people who do what I used to do. I try to be the boss I wanted to have: I pay well, I give out cold water and nobody works at midday. What would your ideal boss be like?' },
          decide: {
            ask: { es: 'Un mochilero joven trabaja muy lento y se queja mucho. ¿Qué le aconsejas a Rosa?', en: 'A young backpacker works very slowly and complains a lot. What do you advise Rosa?' },
            options: [
              { say: { es: 'Hablar con él a solas.', en: 'Talk to him alone.' }, then: { es: 'Él confiesa que nunca trabajó con las manos. Rosa le enseña un truco y mejora.', en: 'He confesses he has never worked with his hands. Rosa teaches him a trick and he improves.' } },
              { say: { es: 'Ponerlo a trabajar con el grupo más rápido.', en: 'Put him with the fastest group.' }, then: { es: 'Los compañeros lo animan. Al final de la semana es de los más rápidos.', en: 'His teammates encourage him. By the end of the week he’s one of the fastest.' } },
              { say: { es: 'Darle otra tarea: empaquetar en la sombra.', en: 'Give him another job: packing in the shade.' }, then: { es: 'Es muy bueno empaquetando. Ya no se queja.', en: 'He’s very good at packing. He doesn’t complain any more.' } },
            ],
          },
          twist: { es: 'Rosa descubre que otra granja de la zona paga la mitad a sus trabajadores y no les da agua. ¿Debería denunciarla?', en: 'Rosa discovers that another farm in the area pays its workers half and doesn’t give them water. Should she report it?' },
          questions: [
            { q: { es: '¿Cómo sería tu jefe ideal?', en: 'What would your ideal boss be like?' }, help: { es: 'Sería… y no…', en: 'They would be… and not…' }, follow: [{ es: '¿Tuviste uno así?', en: 'Have you had one like that?' }, { es: '¿Y uno muy malo?', en: 'And a very bad one?' }] },
            { q: { es: '¿Trabajaste en algo muy físico?', en: 'Have you done very physical work?' }, help: { es: 'Sí, en… / No, siempre en oficina.', en: 'Yes, in… / No, always in an office.' }, follow: [{ es: '¿Fue duro?', en: 'Was it hard?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Te gustaría trabajar un año en otro país?', en: 'Would you like to work a year in another country?' }, help: { es: 'Sí, en… / No, prefiero quedarme.', en: 'Yes, in… / No, I prefer to stay.' }, follow: [{ es: '¿Qué trabajo harías?', en: 'What job would you do?' }, { es: '¿Por qué allí?', en: 'Why there?' }] },
            { q: { es: '¿Empezaste desde abajo en algo?', en: 'Have you started from the bottom in something?' }, help: { es: 'Sí, empecé como… / No.', en: 'Yes, I started as… / No.' }, follow: [{ es: '¿Dónde estás ahora?', en: 'Where are you now?' }, { es: '¿Cuánto tiempo tardaste?', en: 'How long did it take?' }] },
          ],
          words: [{ es: 'el mochilero', en: 'the backpacker' }, { es: 'el recolector', en: 'the picker' }, { es: 'jubilarse', en: 'to retire' }, { es: 'empaquetar', en: 'to pack' }, { es: 'la sombra', en: 'the shade' }],
        },
        A2: {
          scene: { es: 'Un ciclón tropical se acerca a la costa de Queensland. Llegará en dos días. Faltan tres semanas para recoger la mayor parte de los mangos. Si el ciclón golpea la granja, puede destruir la cosecha de todo el año. Rosa tiene treinta trabajadores y tiene que decidir qué hacer con ellos y con los mangos.', en: 'A tropical cyclone is approaching the Queensland coast. It will arrive in two days. There are three weeks to go before most of the mangoes are picked. If the cyclone hits the farm, it could destroy the whole year’s harvest. Rosa has thirty workers and has to decide what to do with them and with the mangoes.' },
          opener: { es: 'Hace cinco años un ciclón destruyó la mitad de la granja. Tardamos dos años en recuperarnos. Esta vez podemos recoger los mangos verdes ahora y venderlos baratos a fábricas de zumo, o esperar y rezar. Además, muchos trabajadores están lejos de sus familias y tienen miedo. Algunos nunca vieron un ciclón. ¿Qué harías tú primero?', en: 'Five years ago a cyclone destroyed half the farm. It took us two years to recover. This time we can pick the green mangoes now and sell them cheaply to juice factories, or wait and pray. Also, many workers are far from their families and are scared. Some have never seen a cyclone. What would you do first?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Rosa?', en: 'What do you advise Rosa?' },
            options: [
              { say: { es: 'Recoger todos los mangos verdes que se pueda y venderlos.', en: 'Pick as many green mangoes as possible and sell them.' }, then: { es: 'Trabajan dos días sin parar. Ganan menos, pero salvan algo de la cosecha.', en: 'They work two days non-stop. They earn less, but save some of the harvest.' } },
              { say: { es: 'Proteger primero a los trabajadores y llevarlos a un lugar seguro.', en: 'Protect the workers first and take them somewhere safe.' }, then: { es: 'Todos duermen en el gimnasio del pueblo. El ciclón pasa. La granja sufre, pero nadie se hace daño.', en: 'Everyone sleeps in the town gym. The cyclone passes. The farm suffers, but nobody gets hurt.' } },
              { say: { es: 'Esperar: quizás el ciclón cambia de dirección.', en: 'Wait: maybe the cyclone changes direction.' }, then: { es: 'El ciclón gira en el último momento. Rosa tiene suerte esta vez, pero no duerme en dos noches.', en: 'The cyclone turns at the last moment. Rosa is lucky this time, but doesn’t sleep for two nights.' } },
            ],
          },
          twist: { es: 'Después del ciclón, el seguro dice que no cubre los daños porque Rosa no recogió la fruta a tiempo. ¿Qué debería hacer?', en: 'After the cyclone, the insurance company says it won’t cover the damage because Rosa didn’t pick the fruit in time. What should she do?' },
          questions: [
            { q: { es: '¿Viviste un fenómeno natural fuerte?', en: 'Have you experienced a strong natural event?' }, help: { es: 'Sí, un terremoto / un huracán… / No.', en: 'Yes, an earthquake / a hurricane… / No.' }, follow: [{ es: '¿Dónde estabas?', en: 'Where were you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué salvarías primero en una emergencia?', en: 'What would you save first in an emergency?' }, help: { es: 'Salvaría a… y después…', en: 'I would save… and then…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes un plan?', en: 'Do you have a plan?' }] },
            { q: { es: '¿Tuviste problemas con un seguro?', en: 'Have you had problems with an insurance company?' }, help: { es: 'Sí, no me pagaron… / No, nunca.', en: 'Yes, they didn’t pay me… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Lo resolviste?', en: 'Did you resolve it?' }] },
            { q: { es: '¿Te sentiste lejos de tu familia en un mal momento?', en: 'Have you felt far from your family at a bad time?' }, help: { es: 'Sí, cuando… / No, siempre estuve cerca.', en: 'Yes, when… / No, I was always close.' }, follow: [{ es: '¿Quién te ayudó?', en: 'Who helped you?' }, { es: '¿Cómo te comunicabas?', en: 'How did you keep in touch?' }] },
          ],
          words: [{ es: 'el ciclón', en: 'the cyclone' }, { es: 'la cosecha', en: 'the harvest' }, { es: 'el seguro', en: 'the insurance' }, { es: 'cubrir', en: 'to cover' }, { es: 'rezar', en: 'to pray' }],
        },
        B1: {
          scene: { es: 'Una empresa ofrece a Rosa máquinas que recogen mangos automáticamente. Con ellas necesitaría solo cinco trabajadores en vez de treinta, y sus costes bajarían mucho. Las granjas grandes ya las usan y venden más barato. Muchos de sus trabajadores vienen cada año desde las islas del Pacífico y mandan el dinero a sus familias: para ellos este trabajo es fundamental.', en: 'A company offers Rosa machines that pick mangoes automatically. With them she would need only five workers instead of thirty, and her costs would fall a lot. The big farms already use them and sell more cheaply. Many of her workers come every year from the Pacific Islands and send money to their families: for them this job is essential.' },
          opener: { es: 'Yo fui una de esas trabajadoras. Mandaba la mitad de mi sueldo a Chile para que mi hermana pudiera estudiar. Si compro las máquinas, mi granja sobrevive. Si no las compro, quizás en cinco años no puedo competir y cierro, y entonces se quedan sin trabajo los treinta. Es como elegir entre perder a veinticinco ahora o a treinta después. ¿Hay otra salida?', en: 'I was one of those workers. I sent half my salary to Chile so my sister could study. If I buy the machines, my farm survives. If I don’t, maybe in five years I can’t compete and I close, and then all thirty lose their jobs. It’s like choosing between losing twenty-five now or thirty later. Is there another way out?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Rosa?', en: 'What do you recommend to Rosa?' },
            options: [
              { say: { es: 'Comprar las máquinas poco a poco y formar a los trabajadores para usarlas y repararlas.', en: 'Buy the machines gradually and train the workers to use and repair them.' }, then: { es: 'Diez trabajadores aprenden un oficio nuevo y mejor pagado. Los demás buscan otras granjas.', en: 'Ten workers learn a new, better-paid trade. The others look for other farms.' } },
              { say: { es: 'No comprarlas y vender sus mangos como «recogidos a mano y con salario justo».', en: 'Not buy them and sell her mangoes as “hand-picked with fair pay”.' }, then: { es: 'Algunos supermercados aceptan pagar más. No es suficiente para todos, pero ayuda.', en: 'Some supermarkets agree to pay more. It isn’t enough for everyone, but it helps.' } },
              { say: { es: 'Unirse con otras granjas pequeñas para compartir máquinas y trabajadores.', en: 'Join other small farms to share machines and workers.' }, then: { es: 'Crean una cooperativa. Es complicado, pero mantienen a veinte trabajadores entre todas.', en: 'They create a cooperative. It’s complicated, but together they keep twenty workers.' } },
            ],
          },
          twist: { es: 'Uno de los trabajadores más antiguos, de Samoa, le dice a Rosa que prefiere que compre las máquinas: no quiere que su hijo tenga que hacer este trabajo tan duro. ¿Cambia eso la decisión?', en: 'One of the longest-serving workers, from Samoa, tells Rosa he would rather she bought the machines: he doesn’t want his son to have to do such hard work. Does that change the decision?' },
          questions: [
            { q: { es: '¿Las máquinas quitan trabajo o crean trabajos nuevos?', en: 'Do machines take jobs away or create new ones?' }, help: { es: 'Las dos cosas, porque… / Sobre todo quitan…', en: 'Both, because… / Mostly they take away…' }, follow: [{ es: '¿Qué trabajo desapareció en tu país?', en: 'Which job disappeared in your country?' }, { es: '¿Qué apareció?', en: 'What appeared?' }] },
            { q: { es: '¿Pagarías más por un producto hecho con salario justo?', en: 'Would you pay more for a product made with fair pay?' }, help: { es: 'Sí, si… / Me gustaría, pero…', en: 'Yes, if… / I would like to, but…' }, follow: [{ es: '¿Lo haces ahora?', en: 'Do you do it now?' }, { es: '¿Con qué productos?', en: 'With which products?' }] },
            { q: { es: '¿Alguien de tu familia mandó dinero a otros desde lejos?', en: 'Has anyone in your family sent money to others from far away?' }, help: { es: 'Sí, mi… mandaba dinero desde… / No.', en: 'Yes, my… used to send money from… / No.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Cómo cambió la vida de la familia?', en: 'How did it change the family’s life?' }] },
            { q: { es: '¿Querrías que tus hijos hicieran tu mismo trabajo?', en: 'Would you want your children to do the same job as you?' }, help: { es: 'Sí, porque… / No, prefiero que…', en: 'Yes, because… / No, I would rather they…' }, follow: [{ es: '¿Tus padres querían eso para ti?', en: 'Did your parents want that for you?' }, { es: '¿Lo hiciste?', en: 'Did you do it?' }] },
          ],
          words: [{ es: 'automáticamente', en: 'automatically' }, { es: 'competir', en: 'to compete' }, { es: 'el oficio', en: 'the trade' }, { es: 'el salario justo', en: 'fair pay' }, { es: 'fundamental', en: 'essential' }],
        },
      },
    },
  ],
};
