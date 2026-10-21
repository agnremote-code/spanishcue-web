// Victoria · a Melbourne laneway café, the city tram, the Great Ocean Road, the penguin
// parade on Phillip Island and Australian football at the MCG. Five places, four levels
// each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'victoria',
  spots: [
    // ------------------------------------------------------------ the laneway café
    {
      id: 'cafe',
      name: { es: 'El café del callejón', en: 'The laneway café' },
      who: { name: 'Luca', role: { es: 'barista', en: 'barista' } },
      levels: {
        A0: {
          scene: { es: 'Es un callejón estrecho. Las paredes tienen grafitis de colores. Hay un café pequeño. Luca hace café. Tiene un delantal marrón.', en: 'It is a narrow laneway. The walls have colourful graffiti. There is a small café. Luca makes coffee. He has a brown apron.' },
          opener: { es: '¡Hola! Soy Luca. Aquí el café es muy importante. ¿Qué tomas?', en: 'Hello! I am Luca. Here coffee is very important. What will you have?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'Un café con leche.', en: 'A coffee with milk.' }, then: { es: 'Luca dibuja un corazón en la leche. ¡Qué bonito!', en: 'Luca draws a heart in the milk. How lovely!' } },
              { say: { es: 'Un café solo.', en: 'A black coffee.' }, then: { es: 'Es fuerte y pequeño. Luca dice: «¡Perfecto!».', en: 'It is strong and small. Luca says: “Perfect!”' } },
              { say: { es: 'Un chocolate caliente.', en: 'A hot chocolate.' }, then: { es: 'Luca ríe: «¿Chocolate? Bueno… ¡con nubes!».', en: 'Luca laughs: “Chocolate? OK… with marshmallows!”' } },
            ],
          },
          twist: { es: 'Un artista pinta un grafiti nuevo en la pared. Te pregunta: «¿Te gusta?». ¿Qué dices?', en: 'An artist is painting new graffiti on the wall. He asks you: “Do you like it?” What do you say?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, mucho. / No, tomo té.', en: 'Yes, a lot. / No, I drink tea.' }, follow: [{ es: '¿Cuántos al día?', en: 'How many a day?' }, { es: '¿Con leche?', en: 'With milk?' }] },
            { q: { es: '¿Te gustan los grafitis?', en: 'Do you like graffiti?' }, help: { es: 'Sí, son arte. / No, no me gustan.', en: 'Yes, they are art. / No, I don’t like them.' }, follow: [{ es: '¿Hay grafitis en tu ciudad?', en: 'Is there graffiti in your city?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Tienes un café favorito?', en: 'Do you have a favourite café?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, it’s called… / No.' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Qué pides?', en: 'What do you order?' }] },
            { q: { es: '¿Dibujas?', en: 'Do you draw?' }, help: { es: 'Sí, un poco. / No, dibujo mal.', en: 'Yes, a little. / No, I draw badly.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
          ],
          words: [{ es: 'el callejón', en: 'the laneway' }, { es: 'el grafiti', en: 'the graffiti' }, { es: 'el delantal', en: 'the apron' }, { es: 'el café solo', en: 'black coffee' }, { es: 'la pared', en: 'the wall' }],
        },
        A1: {
          scene: { es: 'Son las siete de la mañana y hay una fila de oficinistas en el callejón. Luca hace un café cada veinte segundos. Melbourne es famosa por su café: dicen que hay más cafés que bancos. Luca llegó desde Italia hace seis años.', en: 'It is seven in the morning and there is a queue of office workers in the laneway. Luca makes a coffee every twenty seconds. Melbourne is famous for its coffee: they say there are more cafés than banks. Luca came from Italy six years ago.' },
          opener: { es: 'En Italia tomamos el café de pie, en un minuto. Aquí la gente pide cosas muy complicadas: con leche de avena, medio descafeinado, muy caliente, en un vaso de cristal. Al principio me volvía loco. Ahora me encanta: cada cliente es un pequeño desafío. ¿Cómo tomas tú el café?', en: 'In Italy we drink coffee standing up, in a minute. Here people order very complicated things: with oat milk, half decaf, extra hot, in a glass. At first it drove me crazy. Now I love it: every customer is a little challenge. How do you take your coffee?' },
          decide: {
            ask: { es: 'Un cliente pide un café muy complicado y la fila es larga. ¿Qué le aconsejas a Luca?', en: 'A customer orders a very complicated coffee and the queue is long. What do you advise Luca?' },
            options: [
              { say: { es: 'Hacerlo con paciencia.', en: 'Make it patiently.' }, then: { es: 'El cliente está feliz y deja una propina grande.', en: 'The customer is happy and leaves a big tip.' } },
              { say: { es: 'Pedirle que espere al final.', en: 'Ask him to wait until the end.' }, then: { es: 'El cliente se enfada un poco, pero la fila avanza rápido.', en: 'The customer gets a bit annoyed, but the queue moves fast.' } },
              { say: { es: 'Recomendarle un café simple y bueno.', en: 'Recommend a simple, good coffee.' }, then: { es: 'El cliente lo prueba y dice: «¡Es el mejor café de mi vida!».', en: 'The customer tries it and says: “It’s the best coffee of my life!”' } },
            ],
          },
          twist: { es: 'Una cadena de cafés grande quiere abrir una tienda en el callejón. Sus cafés son más baratos. ¿Qué piensas?', en: 'A big coffee chain wants to open a shop in the laneway. Its coffees are cheaper. What do you think?' },
          questions: [
            { q: { es: '¿Cómo tomas el café o el té?', en: 'How do you take your coffee or tea?' }, help: { es: 'Con leche, sin azúcar… / Solo.', en: 'With milk, no sugar… / Black.' }, follow: [{ es: '¿Desde cuándo lo tomas así?', en: 'Since when have you taken it like that?' }, { es: '¿Dónde lo tomas?', en: 'Where do you have it?' }] },
            { q: { es: '¿Prefieres cafés pequeños o cadenas grandes?', en: 'Do you prefer small cafés or big chains?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Qué te volvía loco al principio en un trabajo o una ciudad nueva?', en: 'What drove you crazy at first in a new job or city?' }, help: { es: 'Me volvía loco…', en: '… drove me crazy.' }, follow: [{ es: '¿Y ahora?', en: 'And now?' }, { es: '¿Te acostumbraste?', en: 'Did you get used to it?' }] },
            { q: { es: '¿Dejas propina?', en: 'Do you leave tips?' }, help: { es: 'Sí, siempre. / A veces. / No, en mi país no se usa.', en: 'Yes, always. / Sometimes. / No, it’s not usual in my country.' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'el oficinista', en: 'the office worker' }, { es: 'descafeinado', en: 'decaf' }, { es: 'la leche de avena', en: 'oat milk' }, { es: 'el desafío', en: 'the challenge' }, { es: 'la cadena', en: 'the chain' }],
        },
        A2: {
          scene: { es: 'El ayuntamiento borró por error un grafiti famoso del callejón: un retrato enorme de una cantante australiana. El artista que lo pintó hace quince años murió el año pasado. Los vecinos están furiosos y llenan el café de Luca para organizar una protesta.', en: 'The city council deleted a famous piece of graffiti in the laneway by mistake: a huge portrait of an Australian singer. The artist who painted it fifteen years ago died last year. The residents are furious and fill Luca’s café to organise a protest.' },
          opener: { es: 'Esa pared era parte de mi café. Los turistas venían a sacarse fotos y después pedían un café. Ahora es una pared gris. El ayuntamiento dice que fue un error de una empresa de limpieza y que lo siente. La hija del artista tiene fotos y bocetos de su padre. ¿Qué crees que deberíamos hacer?', en: 'That wall was part of my café. Tourists came to take photos and then ordered a coffee. Now it’s a grey wall. The council says it was a cleaning company’s mistake and that it’s sorry. The artist’s daughter has photos and sketches of her father’s. What do you think we should do?' },
          decide: {
            ask: { es: '¿Qué propones?', en: 'What do you propose?' },
            options: [
              { say: { es: 'Pedir a la hija que lo vuelva a pintar con los bocetos.', en: 'Ask the daughter to paint it again from the sketches.' }, then: { es: 'La hija acepta, pero dice que no será igual. Pinta algo nuevo, con su padre dentro del retrato.', en: 'The daughter agrees, but says it won’t be the same. She paints something new, with her father inside the portrait.' } },
              { say: { es: 'Dejar la pared gris como recuerdo del error.', en: 'Leave the wall grey as a reminder of the mistake.' }, then: { es: 'Alguien escribe en la pared: «Aquí había arte». La foto se hace viral.', en: 'Someone writes on the wall: “There used to be art here.” The photo goes viral.' } },
              { say: { es: 'Invitar a jóvenes artistas a pintar la pared juntos.', en: 'Invite young artists to paint the wall together.' }, then: { es: 'Un sábado, veinte artistas pintan juntos. El café vende trescientos cafés.', en: 'One Saturday, twenty artists paint together. The café sells three hundred coffees.' } },
            ],
          },
          twist: { es: 'El ayuntamiento ofrece dinero a Luca por las pérdidas, pero solo si firma que no va a protestar más. ¿Debería aceptarlo?', en: 'The council offers Luca money for his losses, but only if he signs that he won’t protest any more. Should he accept?' },
          questions: [
            { q: { es: '¿El grafiti es arte o es vandalismo?', en: 'Is graffiti art or vandalism?' }, help: { es: 'Depende de… / Para mí es…', en: 'It depends on… / For me it is…' }, follow: [{ es: '¿Hay uno famoso en tu ciudad?', en: 'Is there a famous one in your city?' }, { es: '¿Quién lo pintó?', en: 'Who painted it?' }] },
            { q: { es: '¿Desapareció algún lugar especial de tu barrio?', en: 'Has a special place disappeared from your neighbourhood?' }, help: { es: 'Sí, cerraron… / Sí, derribaron…', en: 'Yes, they closed… / Yes, they demolished…' }, follow: [{ es: '¿Qué hay ahora?', en: 'What is there now?' }, { es: '¿Lo extrañas?', en: 'Do you miss it?' }] },
            { q: { es: '¿Participaste en una protesta?', en: 'Have you taken part in a protest?' }, help: { es: 'Sí, por… / No, nunca.', en: 'Yes, about… / No, never.' }, follow: [{ es: '¿Sirvió?', en: 'Did it work?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Aceptarías dinero a cambio de no quejarte?', en: 'Would you accept money in exchange for not complaining?' }, help: { es: 'Depende de cuánto… / No, porque…', en: 'It depends how much… / No, because…' }, follow: [{ es: '¿Te ofrecieron algo así?', en: 'Have you been offered something like that?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'el retrato', en: 'the portrait' }, { es: 'el boceto', en: 'the sketch' }, { es: 'la protesta', en: 'the protest' }, { es: 'las pérdidas', en: 'the losses' }, { es: 'borrar', en: 'to remove / erase' }],
        },
        B1: {
          scene: { es: 'Los alquileres del centro de Melbourne subieron tanto que la mitad de los cafés pequeños del callejón cerraron en dos años. El dueño del local de Luca quiere duplicarle el alquiler o vendérselo a una cadena internacional. Luca tiene que decidir si se endeuda para comprar el local, se muda a un barrio más barato o cierra.', en: 'Rents in central Melbourne have risen so much that half the small cafés in the laneway have closed in two years. Luca’s landlord wants to double his rent or sell the premises to an international chain. Luca has to decide whether to go into debt to buy the premises, move to a cheaper neighbourhood or close.' },
          opener: { es: 'Lo que hace especial a esta ciudad son lugares como este: pequeños, con personalidad, donde el barista sabe tu nombre. Pero esa personalidad es justamente lo que sube los precios: las cadenas vienen porque la zona es «interesante». Es una trampa. Si compro el local, voy a estar veinte años pagando un préstamo. Si me voy, el callejón será igual que cualquier centro comercial. ¿Se puede proteger el carácter de un barrio sin congelar los precios?', en: 'What makes this city special are places like this: small, with personality, where the barista knows your name. But that personality is exactly what pushes prices up: the chains come because the area is “interesting”. It’s a trap. If I buy the premises, I’ll be paying off a loan for twenty years. If I leave, the laneway will be like any shopping centre. Can you protect a neighbourhood’s character without freezing prices?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Luca?', en: 'What do you recommend to Luca?' },
            options: [
              { say: { es: 'Comprar el local con otros comerciantes del callejón, como cooperativa.', en: 'Buy the premises with other laneway traders, as a cooperative.' }, then: { es: 'Tres comercios se unen. Es complicado ponerse de acuerdo, pero nadie los puede echar.', en: 'Three businesses join. It’s complicated to agree, but nobody can kick them out.' } },
              { say: { es: 'Mudarse a un barrio más barato y empezar de nuevo.', en: 'Move to a cheaper neighbourhood and start again.' }, then: { es: 'Sus clientes fieles lo siguen. Dos años después, ese barrio también empieza a subir.', en: 'His loyal customers follow him. Two years later, that neighbourhood also starts to go up.' } },
              { say: { es: 'Pedir al ayuntamiento protección para los comercios históricos.', en: 'Ask the council for protection for heritage businesses.' }, then: { es: 'El ayuntamiento crea una lista de comercios protegidos. El café de Luca entra por poco.', en: 'The council creates a list of protected businesses. Luca’s café only just gets in.' } },
            ],
          },
          twist: { es: 'La cadena internacional le ofrece a Luca quedarse como gerente del nuevo café, con buen sueldo y sin riesgos. Podría seguir viendo a sus clientes cada mañana. ¿Es una buena salida o una rendición?', en: 'The international chain offers Luca the job of manager of the new café, with a good salary and no risk. He could keep seeing his customers every morning. Is it a good way out or a surrender?' },
          questions: [
            { q: { es: '¿Qué hace especial a un barrio para ti?', en: 'What makes a neighbourhood special for you?' }, help: { es: 'Para mí son… porque…', en: 'For me it’s… because…' }, follow: [{ es: '¿Tu barrio lo tiene?', en: 'Does your neighbourhood have it?' }, { es: '¿Está cambiando?', en: 'Is it changing?' }] },
            { q: { es: '¿Te endeudarías durante veinte años por un sueño?', en: 'Would you go into debt for twenty years for a dream?' }, help: { es: 'Sí, si el sueño… / No, prefiero…', en: 'Yes, if the dream… / No, I prefer…' }, follow: [{ es: '¿Qué sueño sería?', en: 'What dream would it be?' }, { es: '¿Quién te apoyaría?', en: 'Who would support you?' }] },
            { q: { es: '¿Es posible proteger un barrio sin congelar los precios?', en: 'Is it possible to protect a neighbourhood without freezing prices?' }, help: { es: 'Creo que sí, si… / Es muy difícil porque…', en: 'I think so, if… / It’s very hard because…' }, follow: [{ es: '¿Qué medida propondrías?', en: 'What measure would you propose?' }, { es: '¿Quién la pagaría?', en: 'Who would pay for it?' }] },
            { q: { es: '¿Trabajarías para una empresa que representa lo contrario de tus ideas?', en: 'Would you work for a company that represents the opposite of your ideas?' }, help: { es: 'Si necesito el dinero… / Nunca, porque…', en: 'If I needed the money… / Never, because…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
          ],
          words: [{ es: 'el local', en: 'the premises' }, { es: 'endeudarse', en: 'to go into debt' }, { es: 'el préstamo', en: 'the loan' }, { es: 'el gerente', en: 'the manager' }, { es: 'la rendición', en: 'the surrender' }],
        },
      },
    },
    // ------------------------------------------------------------ the tram
    {
      id: 'tranvia',
      name: { es: 'El tranvía de Melbourne', en: 'The Melbourne tram' },
      who: { name: 'Priya', role: { es: 'conductora de tranvía', en: 'tram driver' } },
      levels: {
        A0: {
          scene: { es: 'Es un tranvía antiguo, rojo y verde. Va por el centro de la ciudad. Es gratis. Priya es la conductora.', en: 'It is an old red and green tram. It goes through the city centre. It is free. Priya is the driver.' },
          opener: { es: '¡Hola! Soy Priya. Este tranvía es gratis. ¡Sube! ¿Adónde vas?', en: 'Hello! I am Priya. This tram is free. Get on! Where are you going?' },
          decide: {
            ask: { es: '¿Adónde vas?', en: 'Where are you going?' },
            options: [
              { say: { es: 'Al mercado.', en: 'To the market.' }, then: { es: 'Priya dice: «Tres paradas. Te aviso».', en: 'Priya says: “Three stops. I’ll tell you.”' } },
              { say: { es: 'Al río.', en: 'To the river.' }, then: { es: 'Bajas al lado del río. Hay gente en bicicleta.', en: 'You get off by the river. There are people on bikes.' } },
              { say: { es: 'No sé. Doy una vuelta.', en: 'I don’t know. I’m going round.' }, then: { es: 'Das una vuelta entera a la ciudad. Ves edificios antiguos y modernos.', en: 'You go all the way round the city. You see old and modern buildings.' } },
            ],
          },
          twist: { es: 'Sube una señora con muchas bolsas. No hay asientos. ¿Qué haces?', en: 'A lady gets on with lots of bags. There are no seats. What do you do?' },
          questions: [
            { q: { es: '¿Hay tranvía en tu ciudad?', en: 'Is there a tram in your city?' }, help: { es: 'Sí, hay. / No, no hay.', en: 'Yes, there is. / No, there isn’t.' }, follow: [{ es: '¿Lo usas?', en: 'Do you use it?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Das tu asiento a otras personas?', en: 'Do you give your seat to other people?' }, help: { es: 'Sí, siempre. / A veces.', en: 'Yes, always. / Sometimes.' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Te dieron el asiento a ti?', en: 'Has anyone given you their seat?' }] },
            { q: { es: '¿Te gustan los edificios antiguos?', en: 'Do you like old buildings?' }, help: { es: 'Sí, mucho. / Prefiero los modernos.', en: 'Yes, a lot. / I prefer modern ones.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Dónde está?', en: 'Where is it?' }] },
            { q: { es: '¿Usas bicicleta?', en: 'Do you use a bike?' }, help: { es: 'Sí, todos los días. / No.', en: 'Yes, every day. / No.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Es seguro?', en: 'Is it safe?' }] },
          ],
          words: [{ es: 'el tranvía', en: 'the tram' }, { es: 'la parada', en: 'the stop' }, { es: 'gratis', en: 'free' }, { es: 'subir', en: 'to get on' }, { es: 'bajar', en: 'to get off' }],
        },
        A1: {
          scene: { es: 'Melbourne tiene la red de tranvías más grande del mundo. Priya conduce la línea que cruza la ciudad de norte a sur. Hay estudiantes, abuelos, turistas y un chico con una tabla de surf. En una esquina hay un coche mal aparcado en las vías.', en: 'Melbourne has the largest tram network in the world. Priya drives the line that crosses the city from north to south. There are students, grandparents, tourists and a boy with a surfboard. On a corner there is a car badly parked on the tracks.' },
          opener: { es: 'Llegué de la India con veinte años para estudiar informática. Trabajé en una oficina cinco años y era muy infeliz: todo el día delante de una pantalla. Un día vi un anuncio: «Buscamos conductoras». Mi familia pensó que estaba loca. Ahora veo la ciudad entera cada día. ¿Cambiarías tu trabajo por uno muy diferente?', en: 'I came from India at twenty to study computing. I worked in an office for five years and was very unhappy: all day in front of a screen. One day I saw an advert: “Women drivers wanted.” My family thought I was crazy. Now I see the whole city every day. Would you swap your job for a very different one?' },
          decide: {
            ask: { es: 'El coche bloquea las vías. ¿Qué debería hacer Priya?', en: 'The car is blocking the tracks. What should Priya do?' },
            options: [
              { say: { es: 'Tocar la campana muy fuerte.', en: 'Ring the bell very loudly.' }, then: { es: 'El dueño sale corriendo de una tienda con un café en la mano. Mueve el coche.', en: 'The owner runs out of a shop with a coffee in his hand. He moves the car.' } },
              { say: { es: 'Llamar a la grúa.', en: 'Call the tow truck.' }, then: { es: 'La grúa tarda veinte minutos. Los pasajeros se quejan.', en: 'The tow truck takes twenty minutes. The passengers complain.' } },
              { say: { es: 'Pedir ayuda a los pasajeros para empujarlo.', en: 'Ask the passengers to help push it.' }, then: { es: 'Seis pasajeros empujan el coche. Todos aplauden cuando el tranvía sale.', en: 'Six passengers push the car. Everyone claps when the tram moves on.' } },
            ],
          },
          twist: { es: 'Un pasajero le dice a Priya que «las mujeres no deberían conducir tranvías». ¿Qué le responderías?', en: 'A passenger tells Priya that “women shouldn’t drive trams”. What would you answer?' },
          questions: [
            { q: { es: '¿Cambiarías tu trabajo por uno muy diferente?', en: 'Would you swap your job for a very different one?' }, help: { es: 'Sí, me gustaría ser… / No, me gusta lo que hago.', en: 'Yes, I would like to be… / No, I like what I do.' }, follow: [{ es: '¿Qué te detiene?', en: 'What stops you?' }, { es: '¿Qué diría tu familia?', en: 'What would your family say?' }] },
            { q: { es: '¿Tu familia pensó alguna vez que estabas loco?', en: 'Has your family ever thought you were crazy?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Tenían razón?', en: 'Were they right?' }, { es: '¿Qué pasó después?', en: 'What happened afterwards?' }] },
            { q: { es: '¿Pasas mucho tiempo delante de una pantalla?', en: 'Do you spend a lot of time in front of a screen?' }, help: { es: 'Sí, unas… horas al día.', en: 'Yes, about… hours a day.' }, follow: [{ es: '¿Te gustaría pasar menos?', en: 'Would you like to spend less?' }, { es: '¿Qué harías en su lugar?', en: 'What would you do instead?' }] },
            { q: { es: '¿Hay trabajos «de hombres» y «de mujeres» en tu país?', en: 'Are there “men’s” and “women’s” jobs in your country?' }, help: { es: 'Todavía hay… / Ya no tanto porque…', en: 'There are still… / Not so much any more because…' }, follow: [{ es: '¿Cuál te sorprende?', en: 'Which surprises you?' }, { es: '¿Está cambiando?', en: 'Is it changing?' }] },
          ],
          words: [{ es: 'la red', en: 'the network' }, { es: 'las vías', en: 'the tracks' }, { es: 'la campana', en: 'the bell' }, { es: 'la grúa', en: 'the tow truck' }, { es: 'empujar', en: 'to push' }],
        },
        A2: {
          scene: { es: 'Es viernes por la noche. Una tormenta de verano inunda las calles en diez minutos. El tranvía de Priya se queda parado en medio de un cruce con el agua hasta las ruedas. Hay cuarenta pasajeros dentro, entre ellos una mujer embarazada y un grupo de aficionados al fútbol que cantan.', en: 'It is Friday night. A summer storm floods the streets in ten minutes. Priya’s tram is stuck in the middle of a junction with water up to the wheels. There are forty passengers inside, including a pregnant woman and a group of football fans who are singing.' },
          opener: { es: 'En diez años nunca vi tanta agua. El centro de control dice que esperemos dentro, que es más seguro que bajar. Los aficionados quieren abrir las puertas e irse caminando. La señora embarazada está tranquila, pero me pidió que no la deje sola. Necesito que la gente se calme. ¿Qué harías tú?', en: 'In ten years I have never seen so much water. Control says we should wait inside, that it’s safer than getting off. The fans want to open the doors and walk away. The pregnant lady is calm, but she asked me not to leave her alone. I need people to calm down. What would you do?' },
          decide: {
            ask: { es: '¿Cómo ayudas a Priya?', en: 'How do you help Priya?' },
            options: [
              { say: { es: 'Hablo con los aficionados y les explico el peligro.', en: 'I talk to the fans and explain the danger.' }, then: { es: 'Al principio se ríen, pero cuando ven una bicicleta pasar flotando, se sientan.', en: 'At first they laugh, but when they see a bike float past, they sit down.' } },
              { say: { es: 'Me siento con la señora embarazada.', en: 'I sit with the pregnant lady.' }, then: { es: 'Hablan de nombres de bebés. Ella se ríe y el tiempo pasa más rápido.', en: 'You talk about baby names. She laughs and time passes faster.' } },
              { say: { es: 'Propongo cantar todos juntos.', en: 'I suggest everyone sings together.' }, then: { es: 'Los aficionados enseñan su canción a todo el tranvía. Hasta Priya canta.', en: 'The fans teach their song to the whole tram. Even Priya sings.' } },
            ],
          },
          twist: { es: 'Una hora después llegan los bomberos. Uno de los aficionados grabó todo y su vídeo muestra a Priya como una heroína. Ella dice que solo hizo su trabajo. ¿Debería salir en las noticias?', en: 'An hour later the firefighters arrive. One of the fans filmed everything and his video shows Priya as a heroine. She says she only did her job. Should she appear on the news?' },
          questions: [
            { q: { es: '¿Viviste una tormenta fuerte?', en: 'Have you experienced a strong storm?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Dónde estabas?', en: 'Where were you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Cómo calmas a otras personas?', en: 'How do you calm other people down?' }, help: { es: 'Hablo despacio / hago bromas…', en: 'I speak slowly / I make jokes…' }, follow: [{ es: '¿Funciona?', en: 'Does it work?' }, { es: '¿Y a ti quién te calma?', en: 'And who calms you down?' }] },
            { q: { es: '¿Te quedaste atrapado en un transporte?', en: 'Have you been stuck on public transport?' }, help: { es: 'Sí, en el metro / en un ascensor… / No.', en: 'Yes, on the metro / in a lift… / No.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Con quién hablaste?', en: 'Who did you talk to?' }] },
            { q: { es: '¿Conoces a alguien que fue un héroe sin querer?', en: 'Do you know someone who was a hero without meaning to be?' }, help: { es: 'Sí, mi… una vez… / He leído que…', en: 'Yes, my… once… / I read that…' }, follow: [{ es: '¿Qué hizo?', en: 'What did they do?' }, { es: '¿Le gustó la fama?', en: 'Did they like the fame?' }] },
          ],
          words: [{ es: 'inundar', en: 'to flood' }, { es: 'el cruce', en: 'the junction' }, { es: 'embarazada', en: 'pregnant' }, { es: 'el aficionado', en: 'the fan' }, { es: 'el bombero', en: 'the firefighter' }],
        },
        B1: {
          scene: { es: 'Melbourne debate si el tranvía del centro debe seguir siendo gratis. Es caro para la ciudad, pero ayuda a turistas y a personas con pocos recursos. Una propuesta quiere cobrar a todos y usar el dinero para llevar líneas nuevas a los barrios del oeste, donde no llega el tranvía y la gente pasa dos horas al día en autobús. Priya vive en el oeste.', en: 'Melbourne is debating whether the city-centre tram should remain free. It is expensive for the city, but helps tourists and people on low incomes. One proposal wants to charge everyone and use the money to take new lines to the western suburbs, where the tram doesn’t reach and people spend two hours a day on the bus. Priya lives in the west.' },
          opener: { es: 'Es curioso: el tranvía gratis está en el centro, donde vive la gente con más dinero y donde hay más opciones. Mis vecinos del oeste pagan el autobús y tardan el doble. Pero también veo cada día a personas sin hogar que usan el tranvía gratis para calentarse en invierno. Si lo quitamos, ¿adónde van? Lo justo para unos parece injusto para otros. ¿Cómo lo decidirías?', en: 'It’s funny: the free tram is in the centre, where the richest people live and where there are more options. My neighbours in the west pay for the bus and take twice as long. But I also see homeless people every day who use the free tram to keep warm in winter. If we take it away, where do they go? What’s fair for some seems unfair for others. How would you decide?' },
          decide: {
            ask: { es: '¿Qué propuesta apoyas?', en: 'Which proposal do you support?' },
            options: [
              { say: { es: 'Cobrar en el centro y llevar el tranvía al oeste.', en: 'Charge in the centre and take the tram to the west.' }, then: { es: 'Las obras empiezan en tres años. Los comerciantes del centro dicen que venden menos.', en: 'Works start in three years. City-centre shopkeepers say they sell less.' } },
              { say: { es: 'Mantenerlo gratis y pedir dinero al gobierno para el oeste.', en: 'Keep it free and ask the government for money for the west.' }, then: { es: 'El gobierno promete ayudar «en el futuro». El oeste sigue esperando.', en: 'The government promises to help “in the future”. The west keeps waiting.' } },
              { say: { es: 'Transporte gratis para personas con pocos recursos en toda la ciudad, y pago para los demás.', en: 'Free transport for low-income people across the city, and paid for everyone else.' }, then: { es: 'Es más justo, pero crear el sistema de tarjetas es lento y caro.', en: 'It is fairer, but setting up the card system is slow and expensive.' } },
            ],
          },
          twist: { es: 'Un estudio revela que el tranvía gratis redujo el tráfico de coches en el centro un veinte por ciento. Si se cobra, el tráfico y la contaminación volverían. ¿Cambia eso tu opinión?', en: 'A study reveals that the free tram reduced car traffic in the centre by twenty percent. If it is charged for, traffic and pollution would come back. Does that change your opinion?' },
          questions: [
            { q: { es: '¿El transporte público debería ser gratis?', en: 'Should public transport be free?' }, help: { es: 'Sí, porque… / No, porque alguien tiene que pagar…', en: 'Yes, because… / No, because someone has to pay…' }, follow: [{ es: '¿Cuánto pagas tú al mes?', en: 'How much do you pay a month?' }, { es: '¿Es justo?', en: 'Is it fair?' }] },
            { q: { es: '¿Los barrios ricos tienen mejores servicios en tu ciudad?', en: 'Do rich neighbourhoods have better services in your city?' }, help: { es: 'Sí, por ejemplo… / No mucho, porque…', en: 'Yes, for example… / Not much, because…' }, follow: [{ es: '¿Qué falta en tu barrio?', en: 'What is missing in your neighbourhood?' }, { es: '¿Quién debería arreglarlo?', en: 'Who should fix it?' }] },
            { q: { es: '¿Algo justo para unos puede ser injusto para otros?', en: 'Can something fair for some be unfair for others?' }, help: { es: 'Sí, por ejemplo… / Pocas veces, porque…', en: 'Yes, for example… / Rarely, because…' }, follow: [{ es: '¿Te pasó a ti?', en: 'Has it happened to you?' }, { es: '¿Cómo lo resolviste?', en: 'How did you resolve it?' }] },
            { q: { es: '¿Qué harías para reducir el tráfico en tu ciudad?', en: 'What would you do to reduce traffic in your city?' }, help: { es: 'Haría… / Prohibiría… / Construiría…', en: 'I would… / I would ban… / I would build…' }, follow: [{ es: '¿La gente lo aceptaría?', en: 'Would people accept it?' }, { es: '¿Tú dejarías el coche?', en: 'Would you give up the car?' }] },
          ],
          words: [{ es: 'los recursos', en: 'income / resources' }, { es: 'la persona sin hogar', en: 'the homeless person' }, { es: 'las obras', en: 'the works' }, { es: 'la contaminación', en: 'pollution' }, { es: 'el barrio', en: 'the suburb / neighbourhood' }],
        },
      },
    },
    // ------------------------------------------------------------ the Great Ocean Road
    {
      id: 'ruta',
      name: { es: 'La Gran Ruta Oceánica', en: 'The Great Ocean Road' },
      who: { name: 'Kylie', role: { es: 'guía de la ruta', en: 'road trip guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una carretera al lado del mar. Hay rocas altas en el agua: los Doce Apóstoles. Kylie es guía. Tiene una furgoneta blanca.', en: 'It is a road by the sea. There are tall rocks in the water: the Twelve Apostles. Kylie is a guide. She has a white van.' },
          opener: { es: '¡Hola! Soy Kylie. Mira las rocas: se llaman los Doce Apóstoles. Pero solo hay ocho. ¿Por qué?', en: 'Hello! I am Kylie. Look at the rocks: they are called the Twelve Apostles. But there are only eight. Why?' },
          decide: {
            ask: { es: '¿Qué respondes?', en: 'What do you answer?' },
            options: [
              { say: { es: 'El mar las rompe.', en: 'The sea breaks them.' }, then: { es: 'Kylie dice: «¡Sí! El mar es muy fuerte».', en: 'Kylie says: “Yes! The sea is very strong.”' } },
              { say: { es: 'No sé.', en: 'I don’t know.' }, then: { es: 'Kylie explica: «El mar y el viento las rompen».', en: 'Kylie explains: “The sea and the wind break them.”' } },
              { say: { es: 'Cuatro están escondidas.', en: 'Four are hidden.' }, then: { es: 'Kylie ríe: «¡Buena idea! Pero no».', en: 'Kylie laughs: “Good idea! But no.”' } },
            ],
          },
          twist: { es: 'Hay un helicóptero para ver las rocas desde arriba. Cuesta ciento cincuenta dólares. ¿Subes?', en: 'There is a helicopter to see the rocks from above. It costs a hundred and fifty dollars. Do you go up?' },
          questions: [
            { q: { es: '¿Te gustan los viajes en coche?', en: 'Do you like car trips?' }, help: { es: 'Sí, mucho. / No, me aburro.', en: 'Yes, a lot. / No, I get bored.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Subiste a un helicóptero?', en: 'Have you been in a helicopter?' }, help: { es: 'Sí, una vez. / No, nunca.', en: 'Yes, once. / No, never.' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Tienes miedo?', en: 'Are you scared?' }] },
            { q: { es: '¿Qué ves desde tu ventana?', en: 'What do you see from your window?' }, help: { es: 'Veo una calle / árboles…', en: 'I see a street / trees…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué te gustaría ver?', en: 'What would you like to see?' }] },
            { q: { es: '¿Cuántas personas hay en tu familia?', en: 'How many people are there in your family?' }, help: { es: 'Somos… personas.', en: 'There are… of us.' }, follow: [{ es: '¿Quiénes son?', en: 'Who are they?' }, { es: '¿Viven juntos?', en: 'Do you live together?' }] },
          ],
          words: [{ es: 'la carretera', en: 'the road' }, { es: 'la roca', en: 'the rock' }, { es: 'romper', en: 'to break' }, { es: 'la furgoneta', en: 'the van' }, { es: 'el helicóptero', en: 'the helicopter' }],
        },
        A1: {
          scene: { es: 'La carretera tiene doscientos cuarenta kilómetros. La construyeron soldados que volvieron de la Primera Guerra Mundial, con picos y palas. Kylie para en un bosque donde viven koalas. Hay un cartel: «No den de comer a los animales».', en: 'The road is two hundred and forty kilometres long. It was built by soldiers who came back from the First World War, with picks and shovels. Kylie stops in a forest where koalas live. There is a sign: “Do not feed the animals.”' },
          opener: { es: 'Mi bisabuelo trabajó en esta carretera. Volvió de la guerra muy triste y este trabajo le dio un motivo para seguir. Me contaba que dormían en tiendas y trabajaban bajo la lluvia. Por eso, para mí, esta carretera no es solo bonita: es un monumento. ¿Hay un lugar así en tu país, con una historia detrás?', en: 'My great-grandfather worked on this road. He came back from the war very sad and this job gave him a reason to keep going. He used to tell us they slept in tents and worked in the rain. That’s why, for me, this road isn’t just beautiful: it’s a monument. Is there a place like that in your country, with a story behind it?' },
          decide: {
            ask: { es: 'Un turista le da pan a un koala. ¿Qué haces?', en: 'A tourist gives bread to a koala. What do you do?' },
            options: [
              { say: { es: 'Le explico que el pan es malo para el koala.', en: 'I explain that bread is bad for the koala.' }, then: { es: 'El turista no sabía. Pide perdón y guarda el pan.', en: 'The tourist didn’t know. He apologises and puts the bread away.' } },
              { say: { es: 'Llamo a Kylie.', en: 'I call Kylie.' }, then: { es: 'Kylie explica que los koalas solo comen hojas de eucalipto.', en: 'Kylie explains that koalas only eat eucalyptus leaves.' } },
              { say: { es: 'Saco una foto del cartel y se la enseño.', en: 'I take a photo of the sign and show it to him.' }, then: { es: 'El turista lee el cartel y se pone rojo.', en: 'The tourist reads the sign and goes red.' } },
            ],
          },
          twist: { es: 'Kylie dice que muchos turistas conducen por la izquierda mal y hay accidentes. Propone que los turistas solo viajen con guía. ¿Estás de acuerdo?', en: 'Kylie says many tourists drive badly on the left and there are accidents. She suggests tourists should only travel with a guide. Do you agree?' },
          questions: [
            { q: { es: '¿Hay un lugar en tu país con una historia detrás?', en: 'Is there a place in your country with a story behind it?' }, help: { es: 'Sí, el… porque…', en: 'Yes, the… because…' }, follow: [{ es: '¿Lo visitaste?', en: 'Have you visited it?' }, { es: '¿Quién te contó la historia?', en: 'Who told you the story?' }] },
            { q: { es: '¿Qué te contaban tus abuelos de su vida?', en: 'What did your grandparents tell you about their lives?' }, help: { es: 'Mi abuelo me contaba que…', en: 'My grandfather used to tell me that…' }, follow: [{ es: '¿Era difícil?', en: 'Was it hard?' }, { es: '¿Te gustaba escucharlo?', en: 'Did you like listening?' }] },
            { q: { es: '¿Conduces?', en: 'Do you drive?' }, help: { es: 'Sí, desde los… / No, no sé.', en: 'Yes, since I was… / No, I can’t.' }, follow: [{ es: '¿Condujiste por la izquierda?', en: 'Have you driven on the left?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Das de comer a los animales?', en: 'Do you feed animals?' }, help: { es: 'Sí, a los pájaros… / No, nunca.', en: 'Yes, the birds… / No, never.' }, follow: [{ es: '¿Es bueno para ellos?', en: 'Is it good for them?' }, { es: '¿Qué animal te gusta más?', en: 'Which animal do you like most?' }] },
          ],
          words: [{ es: 'el soldado', en: 'the soldier' }, { es: 'la guerra', en: 'the war' }, { es: 'la pala', en: 'the shovel' }, { es: 'el monumento', en: 'the monument' }, { es: 'dar de comer', en: 'to feed' }],
        },
        A2: {
          scene: { es: 'Kylie lleva un grupo de diez personas en un viaje de dos días. A mitad del camino, un incendio cierra la carretera por delante. El grupo tiene que pasar la noche en un pueblo pequeño. Solo hay un hotel con cuatro habitaciones libres. Algunos turistas pagaron un paquete de lujo y exigen lo que les prometieron.', en: 'Kylie is taking a group of ten on a two-day trip. Halfway, a bushfire closes the road ahead. The group has to spend the night in a small town. There is only one hotel with four free rooms. Some tourists paid for a luxury package and demand what they were promised.' },
          opener: { es: 'Llevo doce años haciendo esta ruta y es la segunda vez que pasa algo así. La primera vez dormimos en el gimnasio de una escuela y fue la mejor noche de mi vida: un abuelo del pueblo tocó la guitarra hasta las tres. Pero esta vez hay una pareja que dice que va a escribir malas críticas en todas partes. ¿Cómo repartimos las habitaciones?', en: 'I have been doing this route for twelve years and it’s the second time something like this has happened. The first time we slept in a school gym and it was the best night of my life: an old man from the town played guitar until three. But this time there is a couple saying they’ll write bad reviews everywhere. How do we share out the rooms?' },
          decide: {
            ask: { es: '¿Qué le propones a Kylie?', en: 'What do you suggest to Kylie?' },
            options: [
              { say: { es: 'Dar las habitaciones a los mayores y a la familia con niños.', en: 'Give the rooms to the older people and the family with children.' }, then: { es: 'La pareja se queja, pero los demás están de acuerdo. Los jóvenes duermen en el salón.', en: 'The couple complains, but the others agree. The young ones sleep in the lounge.' } },
              { say: { es: 'Sortear las habitaciones.', en: 'Draw lots for the rooms.' }, then: { es: 'La pareja gana una habitación. Se calma y hasta invita a todos a una cerveza.', en: 'The couple wins a room. They calm down and even buy everyone a beer.' } },
              { say: { es: 'Preguntar a los vecinos del pueblo si pueden alojar a alguien.', en: 'Ask the townspeople whether they can put anyone up.' }, then: { es: 'Tres familias ofrecen camas. Los turistas desayunan con ellas y aprenden mucho.', en: 'Three families offer beds. The tourists have breakfast with them and learn a lot.' } },
            ],
          },
          twist: { es: 'A la mañana siguiente la carretera sigue cerrada. La pareja exige que la empresa les pague un helicóptero para llegar a Melbourne. ¿Qué debería hacer Kylie?', en: 'The next morning the road is still closed. The couple demands that the company pay for a helicopter to get them to Melbourne. What should Kylie do?' },
          questions: [
            { q: { es: '¿Tuviste un viaje que salió mal?', en: 'Have you had a trip that went wrong?' }, help: { es: 'Sí, una vez… / No, por suerte.', en: 'Yes, once… / No, luckily.' }, follow: [{ es: '¿Cómo lo resolviste?', en: 'How did you solve it?' }, { es: '¿Es un buen recuerdo ahora?', en: 'Is it a good memory now?' }] },
            { q: { es: '¿Escribiste una mala crítica alguna vez?', en: 'Have you ever written a bad review?' }, help: { es: 'Sí, de un hotel… / No, nunca.', en: 'Yes, of a hotel… / No, never.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Te respondieron?', en: 'Did they reply?' }] },
            { q: { es: '¿Dormiste en un lugar raro?', en: 'Have you slept in a strange place?' }, help: { es: 'Sí, en un aeropuerto / en un coche… / No.', en: 'Yes, at an airport / in a car… / No.' }, follow: [{ es: '¿Cómo dormiste?', en: 'How did you sleep?' }, { es: '¿Con quién estabas?', en: 'Who were you with?' }] },
            { q: { es: '¿Cómo se reparte algo cuando no hay para todos?', en: 'How do you share something when there isn’t enough for everyone?' }, help: { es: 'Primero los que más lo necesitan / por sorteo…', en: 'First those who need it most / by lottery…' }, follow: [{ es: '¿Te tocó perder alguna vez?', en: 'Have you ever lost out?' }, { es: '¿Te pareció justo?', en: 'Did it seem fair?' }] },
          ],
          words: [{ es: 'el paquete', en: 'the package' }, { es: 'repartir', en: 'to share out' }, { es: 'sortear', en: 'to draw lots' }, { es: 'alojar', en: 'to put up / host' }, { es: 'exigir', en: 'to demand' }],
        },
        B1: {
          scene: { es: 'El mar está erosionando la costa más rápido de lo previsto y una parte de la Gran Ruta Oceánica corre peligro de caerse al agua en diez años. El gobierno puede gastar millones en muros de protección o mover la carretera hacia el interior, lejos de las vistas. Los pueblos de la costa viven del turismo que trae la carretera. Kylie participa en una consulta pública.', en: 'The sea is eroding the coast faster than expected and part of the Great Ocean Road is in danger of falling into the water within ten years. The government can spend millions on sea walls or move the road inland, away from the views. The coastal towns live off the tourism the road brings. Kylie takes part in a public consultation.' },
          opener: { es: 'Los científicos dicen que los muros solo retrasan el problema y que, a veces, empeoran la erosión en otras playas. Mover la carretera es más honesto, pero los turistas vienen por las vistas, no para conducir entre granjas. Si la carretera se va, muchos pueblos se mueren. Y hay algo más: esta carretera es un monumento a los soldados. ¿Se puede mover un monumento?', en: 'Scientists say the walls only delay the problem and sometimes make erosion worse on other beaches. Moving the road is more honest, but tourists come for the views, not to drive between farms. If the road goes, many towns will die. And there’s something else: this road is a memorial to the soldiers. Can you move a memorial?' },
          decide: {
            ask: { es: '¿Qué defiendes en la consulta?', en: 'What do you argue for in the consultation?' },
            options: [
              { say: { es: 'Construir muros en los tramos más importantes y aceptar perder otros.', en: 'Build walls on the most important stretches and accept losing others.' }, then: { es: 'Es caro y parcial, pero salva los miradores más famosos durante veinte años.', en: 'It’s expensive and partial, but saves the most famous viewpoints for twenty years.' } },
              { say: { es: 'Mover la carretera y crear senderos a pie hasta la costa.', en: 'Move the road and create walking trails to the coast.' }, then: { es: 'Llega otro tipo de turismo: más lento, más largo, menos coches. Algunos pueblos se adaptan; otros no.', en: 'A different kind of tourism arrives: slower, longer, fewer cars. Some towns adapt; others don’t.' } },
              { say: { es: 'Dejar que la naturaleza decida y usar el dinero en los pueblos.', en: 'Let nature decide and spend the money on the towns.' }, then: { es: 'Los pueblos reciben ayudas para nuevos negocios, pero muchos vecinos sienten que los abandonan.', en: 'The towns receive grants for new businesses, but many residents feel abandoned.' } },
            ],
          },
          twist: { es: 'Una asociación de veteranos de guerra exige que la carretera original no se toque nunca, cueste lo que cueste. Su presidente tiene noventa y cinco años y es el último hijo vivo de uno de los constructores. ¿Cuánto debe pesar su opinión?', en: 'A war veterans’ association demands the original road never be touched, whatever the cost. Its president is ninety-five and is the last living son of one of the builders. How much should his opinion weigh?' },
          questions: [
            { q: { es: '¿Se debe luchar contra la naturaleza o adaptarse?', en: 'Should we fight nature or adapt?' }, help: { es: 'Creo que hay que… porque…', en: 'I think we should… because…' }, follow: [{ es: '¿Hay un ejemplo en tu país?', en: 'Is there an example in your country?' }, { es: '¿Qué se decidió?', en: 'What was decided?' }] },
            { q: { es: '¿Un monumento puede cambiar de lugar sin perder su sentido?', en: 'Can a memorial change place without losing its meaning?' }, help: { es: 'Sí, si… / No, porque el lugar…', en: 'Yes, if… / No, because the place…' }, follow: [{ es: '¿Conoces un monumento que se movió?', en: 'Do you know a memorial that was moved?' }, { es: '¿La gente lo aceptó?', en: 'Did people accept it?' }] },
            { q: { es: '¿Qué pasaría con tu ciudad si perdiera su principal atracción?', en: 'What would happen to your city if it lost its main attraction?' }, help: { es: 'Creo que… / Muchos perderían…', en: 'I think… / Many would lose…' }, follow: [{ es: '¿Qué otra cosa podría atraer gente?', en: 'What else could attract people?' }, { es: '¿Vivirías allí igual?', en: 'Would you still live there?' }] },
            { q: { es: '¿La opinión de las personas mayores debe pesar más en temas de historia?', en: 'Should older people’s opinions weigh more on historical matters?' }, help: { es: 'Sí, porque vivieron… / No más que la de los jóvenes, porque…', en: 'Yes, because they lived… / No more than young people’s, because…' }, follow: [{ es: '¿Escuchas a los mayores de tu familia?', en: 'Do you listen to the older people in your family?' }, { es: '¿Sobre qué temas?', en: 'On which topics?' }] },
          ],
          words: [{ es: 'erosionar', en: 'to erode' }, { es: 'el muro de protección', en: 'the sea wall' }, { es: 'el tramo', en: 'the stretch' }, { es: 'la consulta pública', en: 'the public consultation' }, { es: 'el veterano', en: 'the veteran' }],
        },
      },
    },
    // ------------------------------------------------------------ the penguin parade
    {
      id: 'pinguinos',
      name: { es: 'El desfile de los pingüinos', en: 'The penguin parade' },
      who: { name: 'Tom', role: { es: 'guardabosques de la isla', en: 'island ranger' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche en una playa. Hay mucha gente sentada en silencio. Del mar salen pingüinos muy pequeños. Caminan a sus casas. Tom es guardabosques.', en: 'It is night on a beach. There are lots of people sitting in silence. Very small penguins come out of the sea. They walk to their homes. Tom is a ranger.' },
          opener: { es: 'Hola, soy Tom. Shhh… silencio, por favor. Los pingüinos llegan ahora. Son los más pequeños del mundo. ¡Mira!', en: 'Hello, I am Tom. Shhh… quiet, please. The penguins are arriving now. They are the smallest in the world. Look!' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Miro en silencio.', en: 'I watch in silence.' }, then: { es: 'Un pingüino pasa muy cerca de ti. ¡Qué pequeño!', en: 'A penguin walks very close to you. How small!' } },
              { say: { es: 'Cuento los pingüinos.', en: 'I count the penguins.' }, then: { es: 'Cuentas cuarenta y siete. Tom dice: «Hoy son muchos».', en: 'You count forty-seven. Tom says: “There are lots today.”' } },
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'Tom dice: «Sin fotos, por favor. La luz les hace daño».', en: 'Tom says: “No photos, please. The light hurts them.”' } },
            ],
          },
          twist: { es: 'Un niño a tu lado llora. Quiere tocar un pingüino. ¿Qué le dices?', en: 'A child next to you is crying. He wants to touch a penguin. What do you say to him?' },
          questions: [
            { q: { es: '¿Viste pingüinos alguna vez?', en: 'Have you ever seen penguins?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gustaron?', en: 'Did you like them?' }] },
            { q: { es: '¿Qué animal pequeño te gusta?', en: 'Which small animal do you like?' }, help: { es: 'Me gusta el…', en: 'I like the…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes uno?', en: 'Do you have one?' }] },
            { q: { es: '¿Puedes estar en silencio mucho tiempo?', en: 'Can you stay silent for a long time?' }, help: { es: 'Sí, fácil. / No, es difícil.', en: 'Yes, easily. / No, it’s hard.' }, follow: [{ es: '¿Dónde estás en silencio?', en: 'Where are you silent?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Sales de noche?', en: 'Do you go out at night?' }, help: { es: 'Sí, los fines de semana. / No mucho.', en: 'Yes, at weekends. / Not much.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'el pingüino', en: 'the penguin' }, { es: 'el silencio', en: 'silence' }, { es: 'pequeño', en: 'small' }, { es: 'contar', en: 'to count' }, { es: 'hacer daño', en: 'to hurt' }],
        },
        A1: {
          scene: { es: 'Antes de que oscurezca, Tom te muestra la isla. Hay casitas de madera para los pingüinos y carteles que dicen «Cuidado: pingüinos cruzando». Hace veinte años aquí había un pueblo con casas y calles. El gobierno compró todas las casas para devolver la tierra a los pingüinos.', en: 'Before it gets dark, Tom shows you the island. There are little wooden houses for the penguins and signs saying “Careful: penguins crossing.” Twenty years ago there was a village here with houses and streets. The government bought all the houses to give the land back to the penguins.' },
          opener: { es: 'Mis abuelos vivían en ese pueblo. Cuando el gobierno compró las casas, muchos vecinos lloraron. Mi abuela no quería irse. Pero los pingüinos estaban desapareciendo: los coches, los perros, las luces. Hoy hay el doble de pingüinos que entonces. Mi abuela, antes de morir, dijo que valió la pena. ¿Tú dejarías tu casa por los animales?', en: 'My grandparents lived in that village. When the government bought the houses, many neighbours cried. My grandmother didn’t want to leave. But the penguins were disappearing: the cars, the dogs, the lights. Today there are twice as many penguins as then. My grandmother, before she died, said it was worth it. Would you leave your home for the animals?' },
          decide: {
            ask: { es: 'Tom necesita ayuda para revisar las casitas de los pingüinos. ¿Qué haces?', en: 'Tom needs help checking the penguins’ little houses. What do you do?' },
            options: [
              { say: { es: 'Ayudo a limpiar las casitas.', en: 'I help clean the little houses.' }, then: { es: 'En una casita hay dos huevos. Tom anota todo en un cuaderno.', en: 'In one little house there are two eggs. Tom writes everything down in a notebook.' } },
              { say: { es: 'Cuento los nidos.', en: 'I count the nests.' }, then: { es: 'Cuentas veintitrés nidos. Tom dice: «Tres más que el año pasado».', en: 'You count twenty-three nests. Tom says: “Three more than last year.”' } },
              { say: { es: 'Le pregunto por su abuela.', en: 'I ask him about his grandmother.' }, then: { es: 'Tom te enseña dónde estaba su casa. Ahora hay un nido justo en la puerta.', en: 'Tom shows you where her house was. Now there is a nest right at the door.' } },
            ],
          },
          twist: { es: 'Un zorro mató a diez pingüinos la semana pasada. Tom dice que hay que controlar a los zorros. ¿Qué piensas?', en: 'A fox killed ten penguins last week. Tom says the foxes must be controlled. What do you think?' },
          questions: [
            { q: { es: '¿Dejarías tu casa por los animales?', en: 'Would you leave your home for the animals?' }, help: { es: 'Sí, si… / No, nunca.', en: 'Yes, if… / No, never.' }, follow: [{ es: '¿Qué te costaría más?', en: 'What would be hardest?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Tus abuelos vivían en otro lugar?', en: 'Did your grandparents live somewhere else?' }, help: { es: 'Sí, vivían en… / No, aquí.', en: 'Yes, they lived in… / No, here.' }, follow: [{ es: '¿Cómo era?', en: 'What was it like?' }, { es: '¿Existe todavía?', en: 'Does it still exist?' }] },
            { q: { es: '¿Hay animales en peligro en tu país?', en: 'Are there endangered animals in your country?' }, help: { es: 'Sí, el… / No sé.', en: 'Yes, the… / I don’t know.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué se hace?', en: 'What is being done?' }] },
            { q: { es: '¿Algo difícil valió la pena en tu vida?', en: 'Was something hard worth it in your life?' }, help: { es: 'Sí, cuando… / Todavía no sé.', en: 'Yes, when… / I don’t know yet.' }, follow: [{ es: '¿Qué aprendiste?', en: 'What did you learn?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'oscurecer', en: 'to get dark' }, { es: 'el nido', en: 'the nest' }, { es: 'el huevo', en: 'the egg' }, { es: 'el zorro', en: 'the fox' }, { es: 'valer la pena', en: 'to be worth it' }],
        },
        A2: {
          scene: { es: 'Es una noche de tormenta y solo hay veinte visitantes. Tom encuentra un pingüino herido en la carretera: un coche lo golpeó. El centro veterinario está a cuarenta minutos y Tom no puede dejar a los visitantes solos. Te pide ayuda.', en: 'It is a stormy night and there are only twenty visitors. Tom finds an injured penguin on the road: a car hit it. The vet centre is forty minutes away and Tom can’t leave the visitors alone. He asks you for help.' },
          opener: { es: 'El límite de velocidad aquí es de cuarenta, pero mucha gente no lo respeta, sobre todo de noche. Cada año perdemos decenas de pingüinos así. Este está vivo, pero tiene un ala rota. Si lo llevas al centro veterinario, quizás se salva. Yo me quedo con el grupo. ¿Puedes conducir con lluvia?', en: 'The speed limit here is forty, but many people don’t respect it, especially at night. Every year we lose dozens of penguins like this. This one is alive, but it has a broken wing. If you take it to the vet centre, maybe it will survive. I’ll stay with the group. Can you drive in the rain?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Llevo el pingüino al centro veterinario.', en: 'I take the penguin to the vet centre.' }, then: { es: 'Conduces despacio con el pingüino en una caja. La veterinaria dice que llegaste a tiempo.', en: 'You drive slowly with the penguin in a box. The vet says you arrived in time.' } },
              { say: { es: 'Me quedo con el grupo y Tom lleva el pingüino.', en: 'I stay with the group and Tom takes the penguin.' }, then: { es: 'Explicas a los visitantes lo que sabes. Una niña te hace cien preguntas.', en: 'You explain what you know to the visitors. A little girl asks you a hundred questions.' } },
              { say: { es: 'Llamo a la veterinaria para que venga.', en: 'I call the vet to come.' }, then: { es: 'La veterinaria viene en su coche. Tarda, pero el pingüino aguanta.', en: 'The vet comes in her car. It takes a while, but the penguin holds on.' } },
            ],
          },
          twist: { es: 'Una semana después, el pingüino se recupera. Tom quiere ponerle tu nombre. Además, propone cerrar la carretera de noche. Los vecinos que trabajan tarde se quejan. ¿Qué opinas?', en: 'A week later, the penguin recovers. Tom wants to name it after you. He also proposes closing the road at night. Residents who work late complain. What do you think?' },
          questions: [
            { q: { es: '¿Ayudaste alguna vez a un animal herido?', en: 'Have you ever helped an injured animal?' }, help: { es: 'Sí, un pájaro / un perro… / No, nunca.', en: 'Yes, a bird / a dog… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Se recuperó?', en: 'Did it recover?' }] },
            { q: { es: '¿Respetas los límites de velocidad?', en: 'Do you respect speed limits?' }, help: { es: 'Siempre. / Casi siempre.', en: 'Always. / Almost always.' }, follow: [{ es: '¿Te multaron alguna vez?', en: 'Have you ever been fined?' }, { es: '¿Por qué la gente no los respeta?', en: 'Why don’t people respect them?' }] },
            { q: { es: '¿Conduciste con mucha lluvia o nieve?', en: 'Have you driven in heavy rain or snow?' }, help: { es: 'Sí, una vez… / No, no conduzco.', en: 'Yes, once… / No, I don’t drive.' }, follow: [{ es: '¿Tuviste miedo?', en: 'Were you scared?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Cerrarías una carretera por los animales?', en: 'Would you close a road for the animals?' }, help: { es: 'Sí, de noche… / No, porque la gente necesita…', en: 'Yes, at night… / No, because people need…' }, follow: [{ es: '¿Hay un caso así cerca de ti?', en: 'Is there a case like that near you?' }, { es: '¿Qué solución propones?', en: 'What solution do you propose?' }] },
          ],
          words: [{ es: 'herido', en: 'injured' }, { es: 'el ala', en: 'the wing' }, { es: 'el límite de velocidad', en: 'the speed limit' }, { es: 'recuperarse', en: 'to recover' }, { es: 'aguantar', en: 'to hold on' }],
        },
        B1: {
          scene: { es: 'El desfile de los pingüinos atrae a casi un millón de visitantes al año y financia la protección de la isla. Pero los nuevos estudios muestran que el ruido y las luces de las gradas estresan a los pingüinos. Un grupo de científicos propone limitar las entradas a la mitad y subir los precios. Otros proponen sustituir la visita real por una experiencia de realidad virtual. Tom tiene que elegir qué apoyar.', en: 'The penguin parade attracts almost a million visitors a year and funds the island’s protection. But new studies show that the noise and lights from the stands stress the penguins. A group of scientists proposes halving entries and raising prices. Others propose replacing the real visit with a virtual reality experience. Tom has to choose what to support.' },
          opener: { es: 'Es una paradoja: los turistas pagan la protección de los pingüinos, pero también los molestan. Si subimos los precios, solo vendrán los ricos y perderemos a las familias y a los colegios, que son los que después defienden la naturaleza. Si ponemos realidad virtual, quizás nadie venga. Yo me enamoré de la naturaleza a los siete años, sentado aquí, con mi abuela. Ninguna pantalla me habría dado eso. ¿Cómo equilibrarías las dos cosas?', en: 'It’s a paradox: tourists pay for the penguins’ protection, but they also disturb them. If we raise prices, only the rich will come and we’ll lose families and schools, who are the ones who later defend nature. If we use virtual reality, maybe nobody will come. I fell in love with nature at seven, sitting here with my grandmother. No screen would have given me that. How would you balance the two?' },
          decide: {
            ask: { es: '¿Qué propuesta debería apoyar Tom?', en: 'Which proposal should Tom support?' },
            options: [
              { say: { es: 'Menos entradas, más caras, pero gratis para colegios y familias con pocos recursos.', en: 'Fewer, dearer tickets, but free for schools and low-income families.' }, then: { es: 'El plan funciona, pero el sistema de reservas es complicado y hay quejas de fraude.', en: 'The plan works, but the booking system is complicated and there are complaints of fraud.' } },
              { say: { es: 'Mantener las entradas y cambiar las luces y las gradas.', en: 'Keep the entries and change the lights and stands.' }, then: { es: 'Las obras cuestan mucho, pero los estudios muestran menos estrés en dos años.', en: 'The works are expensive, but studies show less stress within two years.' } },
              { say: { es: 'Combinar: visita real pocos días y realidad virtual el resto.', en: 'Combine: real visits a few days and virtual reality the rest.' }, then: { es: 'La experiencia virtual sorprende a muchos, pero las visitas totales bajan un tercio.', en: 'The virtual experience surprises many, but total visits drop by a third.' } },
            ],
          },
          twist: { es: 'Una empresa de turismo ofrece pagar toda la protección de la isla durante diez años a cambio de la exclusiva de las visitas nocturnas para sus clientes. ¿Es una solución o un problema nuevo?', en: 'A tourism company offers to pay for all the island’s protection for ten years in exchange for exclusive night visits for its customers. Is it a solution or a new problem?' },
          questions: [
            { q: { es: '¿La realidad virtual puede sustituir a la experiencia real?', en: 'Can virtual reality replace real experience?' }, help: { es: 'En algunos casos sí, por ejemplo… / Nunca del todo, porque…', en: 'In some cases yes, for example… / Never completely, because…' }, follow: [{ es: '¿Probaste la realidad virtual?', en: 'Have you tried virtual reality?' }, { es: '¿Qué sentiste?', en: 'What did you feel?' }] },
            { q: { es: '¿Cuándo te enamoraste de algo que todavía te gusta?', en: 'When did you fall in love with something you still like?' }, help: { es: 'A los… años, cuando…', en: 'At… years old, when…' }, follow: [{ es: '¿Quién estaba contigo?', en: 'Who was with you?' }, { es: '¿Lo compartes con alguien hoy?', en: 'Do you share it with someone today?' }] },
            { q: { es: '¿Es justo que la naturaleza sea más cara para protegerla?', en: 'Is it fair for nature to be more expensive in order to protect it?' }, help: { es: 'Sí, si… / No, porque entonces solo…', en: 'Yes, if… / No, because then only…' }, follow: [{ es: '¿Pagarías más por un parque natural?', en: 'Would you pay more for a nature park?' }, { es: '¿Cuánto?', en: 'How much?' }] },
            { q: { es: '¿Una empresa privada debería controlar un espacio natural?', en: 'Should a private company control a natural area?' }, help: { es: 'Solo si… / No, porque lo natural es de todos.', en: 'Only if… / No, because nature belongs to everyone.' }, follow: [{ es: '¿Hay casos en tu país?', en: 'Are there cases in your country?' }, { es: '¿Funcionan?', en: 'Do they work?' }] },
          ],
          words: [{ es: 'la grada', en: 'the stand' }, { es: 'estresar', en: 'to stress' }, { es: 'la paradoja', en: 'the paradox' }, { es: 'equilibrar', en: 'to balance' }, { es: 'la exclusiva', en: 'the exclusive rights' }],
        },
      },
    },
    // ------------------------------------------------------------ Australian football
    {
      id: 'futbol',
      name: { es: 'El fútbol australiano en el MCG', en: 'Australian football at the MCG' },
      who: { name: 'Sam', role: { es: 'jugadora de fútbol australiano', en: 'Australian rules footballer' } },
      levels: {
        A0: {
          scene: { es: 'Es un estadio enorme. Hay cien mil personas. El balón no es redondo: es ovalado. Sam juega en un equipo. Tiene una camiseta azul y blanca.', en: 'It is a huge stadium. There are a hundred thousand people. The ball isn’t round: it’s oval. Sam plays in a team. She has a blue and white shirt.' },
          opener: { es: '¡Hola! Soy Sam. Esto es fútbol australiano. Se puede usar la mano y el pie. ¿Quieres probar?', en: 'Hello! I am Sam. This is Australian football. You can use your hands and feet. Do you want to try?' },
          decide: {
            ask: { es: 'Sam te da el balón. ¿Qué haces?', en: 'Sam gives you the ball. What do you do?' },
            options: [
              { say: { es: 'Le doy una patada.', en: 'I kick it.' }, then: { es: 'El balón vuela muy alto. Sam aplaude.', en: 'The ball flies very high. Sam claps.' } },
              { say: { es: 'Lo tiro con la mano.', en: 'I throw it with my hand.' }, then: { es: 'Sam dice: «¡No! Con la mano se golpea, no se tira».', en: 'Sam says: “No! With the hand you punch it, you don’t throw it.”' } },
              { say: { es: 'Corro con el balón.', en: 'I run with the ball.' }, then: { es: 'Corres mucho. ¡Sam te persigue!', en: 'You run a lot. Sam chases you!' } },
            ],
          },
          twist: { es: 'El público grita tu nombre. ¡Estás en la pantalla grande! ¿Qué haces?', en: 'The crowd shouts your name. You’re on the big screen! What do you do?' },
          questions: [
            { q: { es: '¿Te gusta el fútbol?', en: 'Do you like football?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué equipo?', en: 'Which team?' }, { es: '¿Juegas?', en: 'Do you play?' }] },
            { q: { es: '¿Fuiste a un estadio?', en: 'Have you been to a stadium?' }, help: { es: 'Sí, a… / No, nunca.', en: 'Yes, to… / No, never.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Qué deporte haces?', en: 'What sport do you do?' }, help: { es: 'Hago… / Ninguno.', en: 'I do… / None.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu equipo?', en: 'And your team?' }] },
          ],
          words: [{ es: 'el estadio', en: 'the stadium' }, { es: 'el balón', en: 'the ball' }, { es: 'ovalado', en: 'oval' }, { es: 'la patada', en: 'the kick' }, { es: 'el equipo', en: 'the team' }],
        },
        A1: {
          scene: { es: 'Es un entrenamiento en un campo de barrio. Sam entrena con su equipo de mujeres tres noches por semana, después de trabajar. Es enfermera. La liga femenina profesional existe desde hace pocos años y los sueldos son mucho más bajos que los de los hombres.', en: 'It is training on a local pitch. Sam trains with her women’s team three nights a week, after work. She is a nurse. The professional women’s league has only existed for a few years and the salaries are much lower than the men’s.' },
          opener: { es: 'De niña jugaba con mis hermanos en el patio, pero en la escuela no había equipo de chicas. Me decían que era un deporte de chicos. Ahora juego en la liga profesional, pero sigo trabajando de enfermera porque con el fútbol no puedo pagar el alquiler. Algunas noches llego al entrenamiento después de un turno de doce horas. ¿Haces algo que te encanta aunque no te paguen?', en: 'As a girl I played with my brothers in the yard, but at school there was no girls’ team. They told me it was a boys’ sport. Now I play in the professional league, but I still work as a nurse because I can’t pay the rent with football. Some nights I get to training after a twelve-hour shift. Do you do something you love even though you’re not paid for it?' },
          decide: {
            ask: { es: 'Una niña de diez años mira el entrenamiento desde la valla. ¿Qué le propones a Sam?', en: 'A ten-year-old girl is watching training from the fence. What do you suggest to Sam?' },
            options: [
              { say: { es: 'Invitarla a entrenar un rato.', en: 'Invite her to train for a while.' }, then: { es: 'La niña corre, se cae, se ríe. Al final pregunta si puede volver el jueves.', en: 'The girl runs, falls, laughs. At the end she asks if she can come back on Thursday.' } },
              { say: { es: 'Regalarle un balón firmado.', en: 'Give her a signed ball.' }, then: { es: 'La niña abraza el balón como un tesoro.', en: 'The girl hugs the ball like a treasure.' } },
              { say: { es: 'Hablar con sus padres sobre un equipo infantil.', en: 'Talk to her parents about a children’s team.' }, then: { es: 'Los padres no sabían que existían equipos de niñas. La apuntan esa semana.', en: 'Her parents didn’t know there were girls’ teams. They sign her up that week.' } },
            ],
          },
          twist: { es: 'Un periodista pregunta a Sam si las mujeres deberían ganar lo mismo que los hombres, aunque van menos espectadores. ¿Qué le respondes tú?', en: 'A journalist asks Sam whether women should earn the same as men, even though fewer spectators come. What would you answer?' },
          questions: [
            { q: { es: '¿Haces algo que te encanta aunque no te paguen?', en: 'Do you do something you love even though you’re not paid for it?' }, help: { es: 'Sí, me encanta… / No, no tengo tiempo.', en: 'Yes, I love… / No, I don’t have time.' }, follow: [{ es: '¿Cuántas horas le dedicas?', en: 'How many hours do you spend on it?' }, { es: '¿Te gustaría vivir de eso?', en: 'Would you like to make a living from it?' }] },
            { q: { es: '¿Te dijeron alguna vez que algo «no era para ti»?', en: 'Have you ever been told something “wasn’t for you”?' }, help: { es: 'Sí, me dijeron que… / No, nunca.', en: 'Yes, they told me that… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Tenían razón?', en: 'Were they right?' }] },
            { q: { es: '¿A qué jugabas de niño?', en: 'What did you play as a child?' }, help: { es: 'Jugaba a… con…', en: 'I played… with…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Lo juegas todavía?', en: 'Do you still play it?' }] },
            { q: { es: '¿Ves deportes de mujeres?', en: 'Do you watch women’s sports?' }, help: { es: 'Sí, veo… / No mucho, porque…', en: 'Yes, I watch… / Not much, because…' }, follow: [{ es: '¿Qué deportista admiras?', en: 'Which athlete do you admire?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'el entrenamiento', en: 'the training' }, { es: 'la liga', en: 'the league' }, { es: 'el sueldo', en: 'the salary' }, { es: 'la valla', en: 'the fence' }, { es: 'apuntar', en: 'to sign up' }],
        },
        A2: {
          scene: { es: 'Es la gran final. El equipo de Sam juega en el MCG por primera vez. En el último minuto, Sam tiene la oportunidad de marcar el gol de la victoria desde muy lejos. Su compañera Jess está más cerca, sin nadie que la marque, pero lleva toda la temporada fallando.', en: 'It is the grand final. Sam’s team is playing at the MCG for the first time. In the last minute, Sam has the chance to kick the winning goal from very far away. Her teammate Jess is closer, unmarked, but she has been missing all season.' },
          opener: { es: 'Llevo toda mi vida soñando con este momento. Si tiro yo y fallo, todos dirán que fui egoísta. Si le paso el balón a Jess y ella falla, dirán que no tuve valor. Jess es mi mejor amiga desde los doce años. Y me está mirando. Tengo tres segundos. ¿Qué hago?', en: 'I have dreamt of this moment all my life. If I shoot and miss, everyone will say I was selfish. If I pass to Jess and she misses, they’ll say I had no courage. Jess has been my best friend since we were twelve. And she’s looking at me. I have three seconds. What do I do?' },
          decide: {
            ask: { es: '¿Qué le gritas a Sam?', en: 'What do you shout to Sam?' },
            options: [
              { say: { es: '«¡Tira tú!».', en: '“Shoot!”' }, then: { es: 'El balón vuela… y entra. El estadio explota. Sam corre a abrazar a Jess.', en: 'The ball flies… and goes in. The stadium explodes. Sam runs to hug Jess.' } },
              { say: { es: '«¡Pásala a Jess!».', en: '“Pass to Jess!”' }, then: { es: 'Jess marca. Llora en el suelo. Sam dice: «Siempre supe que podías».', en: 'Jess scores. She cries on the ground. Sam says: “I always knew you could.”' } },
              { say: { es: '«¡Haz lo que sientas!».', en: '“Do what you feel!”' }, then: { es: 'Sam duda un segundo, tira y el balón pega en el poste. Pierden por un punto.', en: 'Sam hesitates a second, shoots and the ball hits the post. They lose by one point.' } },
            ],
          },
          twist: { es: 'Después del partido, un comentarista de televisión critica a Sam con palabras machistas. Millones de personas lo vieron. ¿Cómo debería responder Sam?', en: 'After the match, a TV commentator criticises Sam with sexist words. Millions of people saw it. How should Sam respond?' },
          questions: [
            { q: { es: '¿Tomaste una decisión importante en pocos segundos?', en: 'Have you made an important decision in a few seconds?' }, help: { es: 'Sí, una vez… / No, siempre pienso mucho.', en: 'Yes, once… / No, I always think a lot.' }, follow: [{ es: '¿Fue la correcta?', en: 'Was it the right one?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Confías más en ti o en tu equipo?', en: 'Do you trust yourself more or your team?' }, help: { es: 'Confío más en… porque…', en: 'I trust… more because…' }, follow: [{ es: '¿Siempre fue así?', en: 'Was it always like that?' }, { es: '¿Te decepcionaron alguna vez?', en: 'Have you ever been let down?' }] },
            { q: { es: '¿Cuál fue el momento deportivo más emocionante que viste?', en: 'What was the most exciting sporting moment you have seen?' }, help: { es: 'Fue cuando… ganó…', en: 'It was when… won…' }, follow: [{ es: '¿Dónde lo viste?', en: 'Where did you watch it?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cómo respondes a una crítica injusta en público?', en: 'How do you respond to unfair public criticism?' }, help: { es: 'Respondo con calma / no respondo / hablo en privado…', en: 'I respond calmly / I don’t respond / I talk privately…' }, follow: [{ es: '¿Te pasó?', en: 'Has it happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'la final', en: 'the final' }, { es: 'marcar', en: 'to score / mark' }, { es: 'fallar', en: 'to miss' }, { es: 'egoísta', en: 'selfish' }, { es: 'el poste', en: 'the post' }],
        },
        B1: {
          scene: { es: 'Varios exjugadores de fútbol australiano sufren enfermedades cerebrales por los golpes en la cabeza. Un estudio sugiere que las jugadoras tienen todavía más riesgo de lesiones. La liga propone reglas nuevas que cambian mucho el juego: menos contacto, más pausas, cascos obligatorios. Muchos aficionados dicen que así ya no es el mismo deporte. Sam forma parte del sindicato de jugadoras.', en: 'Several former Australian rules players suffer brain diseases from blows to the head. A study suggests that women players are at even greater risk of injury. The league is proposing new rules that change the game a lot: less contact, more breaks, compulsory helmets. Many fans say it won’t be the same sport. Sam is part of the players’ union.' },
          opener: { es: 'Este deporte me lo dio todo, pero no quiero que en veinte años mis compañeras no recuerden el nombre de sus hijos. Al mismo tiempo, el contacto es parte de lo que hace especial el juego: el valor, el riesgo. Si lo convertimos en otra cosa, quizás pierda público y la liga femenina, que es frágil, desaparezca. ¿Cuánto riesgo es aceptable en un deporte que alguien elige libremente?', en: 'This sport gave me everything, but I don’t want my teammates to be unable to remember their children’s names in twenty years. At the same time, contact is part of what makes the game special: the courage, the risk. If we turn it into something else, it might lose its audience and the women’s league, which is fragile, could disappear. How much risk is acceptable in a sport someone chooses freely?' },
          decide: {
            ask: { es: '¿Qué postura debería defender Sam en el sindicato?', en: 'What position should Sam defend in the union?' },
            options: [
              { say: { es: 'Aceptar todas las reglas nuevas: la salud es lo primero.', en: 'Accept all the new rules: health comes first.' }, then: { es: 'Las lesiones bajan mucho. Algunos patrocinadores se van, pero llegan familias nuevas al estadio.', en: 'Injuries drop sharply. Some sponsors leave, but new families come to the stadium.' } },
              { say: { es: 'Aceptar solo algunas reglas y pedir más investigación.', en: 'Accept only some rules and ask for more research.' }, then: { es: 'Es un compromiso. Los médicos dicen que no es suficiente; los aficionados, que es demasiado.', en: 'It’s a compromise. Doctors say it isn’t enough; fans say it’s too much.' } },
              { say: { es: 'Que cada jugadora decida, con información clara y un seguro especial.', en: 'Let each player decide, with clear information and special insurance.' }, then: { es: 'Muchas jugadoras jóvenes eligen el riesgo. Las veteranas, no. El vestuario se divide.', en: 'Many young players choose the risk. The veterans don’t. The dressing room splits.' } },
            ],
          },
          twist: { es: 'Jess, la mejor amiga de Sam, sufre su tercera conmoción cerebral en un año. Los médicos le recomiendan retirarse, pero ella quiere jugar una última temporada. ¿Qué debería decirle Sam?', en: 'Jess, Sam’s best friend, suffers her third concussion in a year. Doctors recommend she retire, but she wants to play one last season. What should Sam tell her?' },
          questions: [
            { q: { es: '¿Cuánto riesgo es aceptable en un deporte?', en: 'How much risk is acceptable in a sport?' }, help: { es: 'Creo que… siempre que…', en: 'I think… as long as…' }, follow: [{ es: '¿Practicaste un deporte peligroso?', en: 'Have you done a dangerous sport?' }, { es: '¿Te lesionaste?', en: 'Did you get injured?' }] },
            { q: { es: '¿Debe una institución proteger a las personas de sus propias decisiones?', en: 'Should an institution protect people from their own decisions?' }, help: { es: 'Sí, cuando… / No, cada uno debe…', en: 'Yes, when… / No, everyone should…' }, follow: [{ es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }, { es: '¿Estás de acuerdo?', en: 'Do you agree?' }] },
            { q: { es: '¿Cambiar las reglas de una tradición la destruye o la salva?', en: 'Does changing the rules of a tradition destroy it or save it?' }, help: { es: 'Depende de… / A veces la salva porque…', en: 'It depends on… / Sometimes it saves it because…' }, follow: [{ es: '¿Hay un deporte o una fiesta que cambió en tu país?', en: 'Is there a sport or festival that changed in your country?' }, { es: '¿Para bien o para mal?', en: 'For better or worse?' }] },
            { q: { es: '¿Qué le dirías a un amigo que quiere arriesgar su salud por un sueño?', en: 'What would you tell a friend who wants to risk their health for a dream?' }, help: { es: 'Le diría que… pero que…', en: 'I would tell them… but…' }, follow: [{ es: '¿Respetarías su decisión?', en: 'Would you respect their decision?' }, { es: '¿Y si fuera tu hijo?', en: 'And if it were your child?' }] },
          ],
          words: [{ es: 'la lesión', en: 'the injury' }, { es: 'el casco', en: 'the helmet' }, { es: 'el sindicato', en: 'the union' }, { es: 'la conmoción cerebral', en: 'the concussion' }, { es: 'retirarse', en: 'to retire' }],
        },
      },
    },
  ],
};
