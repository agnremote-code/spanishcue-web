// Nueva York · Manhattan. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own: same place and people, different
// situations, decisions and questions. English is a natural translation.
export default {
  id: 'nueva-york',
  spots: [
    // ------------------------------------------------------------ the subway
    {
      id: 'metro',
      name: { es: 'La estación de metro', en: 'The subway station' },
      who: { name: 'Héctor', role: { es: 'músico del metro', en: 'subway musician' } },
      levels: {
        A0: {
          scene: { es: 'Es una estación de metro. Hay mucha gente. Héctor toca el saxofón. La música es bonita.', en: 'It is a subway station. There are many people. Héctor plays the saxophone. The music is beautiful.' },
          opener: { es: '¡Hola! Soy Héctor. Soy músico. Toco aquí todos los días. ¿Te gusta la música?', en: 'Hi! I am Héctor. I am a musician. I play here every day. Do you like music?' },
          decide: {
            ask: { es: 'Héctor toca una canción. ¿Qué haces?', en: 'Héctor plays a song. What do you do?' },
            options: [
              { say: { es: 'Escucho y doy un dólar.', en: 'I listen and give a dollar.' }, then: { es: 'Héctor dice: «¡Gracias!». Toca otra canción para ti.', en: 'Héctor says: “Thank you!” He plays another song for you.' } },
              { say: { es: 'Bailo un poco.', en: 'I dance a little.' }, then: { es: 'Dos niños bailan contigo. La gente aplaude.', en: 'Two children dance with you. People clap.' } },
              { say: { es: 'Corro al tren.', en: 'I run to the train.' }, then: { es: 'Las puertas cierran. ¡Uf! Estás dentro.', en: 'The doors close. Phew! You are inside.' } },
            ],
          },
          twist: { es: '¡Hay una rata en el andén! Es pequeña y rápida. ¿Qué dices?', en: 'There is a rat on the platform! It is small and fast. What do you say?' },
          questions: [
            { q: { es: '¿Hay metro en tu ciudad?', en: 'Is there a subway in your city?' }, help: { es: 'Sí, hay metro. / No, no hay metro. Hay autobús.', en: 'Yes, there is a subway. / No, there is no subway. There is a bus.' }, follow: [{ es: '¿Es grande o pequeño?', en: 'Is it big or small?' }, { es: '¿Es caro o barato?', en: 'Is it expensive or cheap?' }] },
            { q: { es: '¿Cómo vas al trabajo o a clase?', en: 'How do you go to work or to class?' }, help: { es: 'Voy en metro. / Voy en coche. / Voy a pie.', en: 'I go by subway. / I go by car. / I go on foot.' }, follow: [{ es: '¿Cuántos minutos?', en: 'How many minutes?' }, { es: '¿Vas solo o con amigos?', en: 'Do you go alone or with friends?' }] },
            { q: { es: '¿Tocas un instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco la guitarra. / No, no toco. Canto un poco.', en: 'Yes, I play the guitar. / No, I don’t play. I sing a little.' }, follow: [{ es: '¿Qué instrumento es bonito para ti?', en: 'Which instrument is beautiful for you?' }, { es: '¿Cantas en la ducha?', en: 'Do you sing in the shower?' }] },
            { q: { es: '¿Prefieres el silencio o la música en la calle?', en: 'Do you prefer silence or music in the street?' }, help: { es: 'Prefiero el silencio. / Prefiero la música.', en: 'I prefer silence. / I prefer music.' }, follow: [{ es: '¿Usas auriculares?', en: 'Do you use headphones?' }, { es: '¿Qué música escuchas?', en: 'What music do you listen to?' }] },
          ],
          words: [
            { es: 'el metro', en: 'the subway' }, { es: 'el tren', en: 'the train' }, { es: 'la estación', en: 'the station' },
            { es: 'el músico', en: 'the musician' }, { es: 'tocar', en: 'to play (music)' }, { es: 'la rata', en: 'the rat' },
          ],
        },
        A1: {
          scene: { es: 'Estación de Union Square, ocho de la mañana. Héctor toca jazz al lado de las escaleras. La gente pasa rápido, con café en la mano.', en: 'Union Square station, eight in the morning. Héctor plays jazz next to the stairs. People walk by fast, coffee in hand.' },
          opener: { es: 'Buenos días. Soy de la República Dominicana, pero vivo en el Bronx. Toco aquí por las mañanas y estudio por las tardes. ¿Tú adónde vas?', en: 'Good morning. I’m from the Dominican Republic, but I live in the Bronx. I play here in the mornings and study in the afternoons. Where are you going?' },
          decide: {
            ask: { es: 'Quieres ir al Museo Metropolitano, pero hay muchas líneas de colores. Héctor está ocupado tocando. ¿Qué haces?', en: 'You want to go to the Metropolitan Museum, but there are lots of colored lines. Héctor is busy playing. What do you do?' },
            options: [
              { say: { es: 'Espero el final de la canción y le pregunto a Héctor.', en: 'I wait for the end of the song and ask Héctor.' }, then: { es: 'Héctor sonríe: «Línea verde, hacia el norte. Bajas en la calle 86».', en: 'Héctor smiles: “Green line, uptown. Get off at 86th Street.”' } },
              { say: { es: 'Miro el mapa en mi teléfono.', en: 'I look at the map on my phone.' }, then: { es: 'No hay señal en el andén. El mapa no carga.', en: 'There’s no signal on the platform. The map doesn’t load.' } },
              { say: { es: 'Subo al primer tren y pregunto dentro.', en: 'I get on the first train and ask inside.' }, then: { es: 'Una señora te dice: «¡Este va a Brooklyn, cariño!». Vas en la dirección contraria.', en: 'A lady tells you: “This one goes to Brooklyn, honey!” You are going the wrong way.' } },
            ],
          },
          twist: { es: 'El tren se para entre dos estaciones. Una voz habla por el altavoz, pero no se entiende nada. Todos se miran. ¿Qué dices a la persona de al lado?', en: 'The train stops between two stations. A voice speaks over the loudspeaker, but you can’t understand anything. Everyone looks at each other. What do you say to the person next to you?' },
          questions: [
            { q: { es: '¿Qué haces normalmente en el transporte público: lees, escuchas música, miras a la gente?', en: 'What do you usually do on public transport: read, listen to music, watch people?' }, help: { es: 'Normalmente escucho… / Leo… / Miro…', en: 'Usually I listen to… / I read… / I watch…' }, follow: [{ es: '¿Cuánto tiempo pasas cada día en el transporte?', en: 'How much time do you spend on transport every day?' }, { es: '¿Hablas con desconocidos en el tren?', en: 'Do you talk to strangers on the train?' }] },
            { q: { es: 'Héctor trabaja y estudia. ¿Qué haces tú por las mañanas y por las tardes?', en: 'Héctor works and studies. What do you do in the mornings and in the afternoons?' }, help: { es: 'Por la mañana… y por la tarde… Los fines de semana…', en: 'In the morning… and in the afternoon… On weekends…' }, follow: [{ es: '¿Eres una persona de mañana o de noche?', en: 'Are you a morning person or a night person?' }, { es: '¿A qué hora te levantas?', en: 'What time do you get up?' }] },
            { q: { es: '¿Das dinero a los músicos de la calle? ¿Por qué?', en: 'Do you give money to street musicians? Why?' }, help: { es: 'Sí, a veces, porque… / No, normalmente no, porque…', en: 'Yes, sometimes, because… / No, usually not, because…' }, follow: [{ es: '¿Qué música te hace parar?', en: 'What music makes you stop?' }, { es: '¿Hay músicos en la calle en tu ciudad?', en: 'Are there street musicians in your city?' }] },
            { q: { es: 'Vas a pasar un día en Nueva York. ¿Qué vas a visitar?', en: 'You’re going to spend a day in New York. What are you going to visit?' }, help: { es: 'Voy a ir a… Quiero ver… porque…', en: 'I’m going to go to… I want to see… because…' }, follow: [{ es: '¿Prefieres museos o parques?', en: 'Do you prefer museums or parks?' }, { es: '¿Qué comida quieres probar?', en: 'What food do you want to try?' }] },
          ],
          words: [
            { es: 'el andén', en: 'the platform' }, { es: 'la línea', en: 'the line' }, { es: 'bajar (del tren)', en: 'to get off (the train)' },
            { es: 'hacia el norte', en: 'uptown, northbound' }, { es: 'el altavoz', en: 'the loudspeaker' }, { es: 'la señal', en: 'the (phone) signal' },
          ],
        },
        A2: {
          scene: { es: 'Héctor guarda el saxofón. Hoy ganó poco: llovió toda la mañana y la gente pasó corriendo. Pero un hombre le dejó una tarjeta: es productor de un club de jazz.', en: 'Héctor puts away his saxophone. He earned little today: it rained all morning and people rushed past. But a man left him a card: he’s a producer at a jazz club.' },
          opener: { es: 'Llevo seis años tocando en el metro. Una vez una mujer lloró escuchando una canción de mi abuelo. Nunca la olvidé. ¿A ti alguna vez te emocionó una canción en un lugar inesperado?', en: 'I’ve been playing in the subway for six years. Once a woman cried listening to one of my grandfather’s songs. I never forgot her. Has a song ever moved you in an unexpected place?' },
          decide: {
            ask: { es: 'Héctor tiene miedo de llamar al productor. «¿Y si toco mal?». ¿Qué le aconsejas?', en: 'Héctor is afraid to call the producer. “What if I play badly?” What do you advise him?' },
            options: [
              { say: { es: 'Que llame hoy mismo, antes de pensarlo demasiado.', en: 'To call today, before he overthinks it.' }, then: { es: 'Llama delante de ti. Le dan una prueba el viernes. Héctor te abraza.', en: 'He calls in front of you. They give him an audition on Friday. Héctor hugs you.' } },
              { say: { es: 'Que practique una semana y después llame.', en: 'To practice for a week and then call.' }, then: { es: 'Héctor asiente, pero dice: «En una semana quizás ya no se acuerda de mí».', en: 'Héctor nods, but says: “In a week maybe he won’t remember me.”' } },
              { say: { es: 'Que investigue primero el club en internet.', en: 'To look the club up online first.' }, then: { es: 'Buscan juntos. El club es famoso: tocaron allí músicos que Héctor admira.', en: 'You search together. The club is famous: musicians Héctor admires played there.' } },
            ],
          },
          twist: { es: 'Un turista graba a Héctor sin pedir permiso y dice que lo va a subir a sus redes. Héctor no sabe si enfadarse o alegrarse.', en: 'A tourist films Héctor without asking and says he’ll post it on social media. Héctor doesn’t know whether to get angry or be happy.' },
          questions: [
            { q: { es: '¿Te emocionó alguna vez una canción en un lugar inesperado? ¿Dónde estabas?', en: 'Has a song ever moved you in an unexpected place? Where were you?' }, help: { es: 'Una vez estaba en… y de repente sonó… Me acordé de…', en: 'Once I was in… and suddenly … came on. It reminded me of…' }, follow: [{ es: '¿Qué canción te recuerda a tu infancia?', en: 'What song reminds you of your childhood?' }, { es: '¿Con quién la escuchabas?', en: 'Who did you listen to it with?' }] },
            { q: { es: '¿Tuviste alguna vez una oportunidad importante y casi no la aprovechaste por miedo?', en: 'Have you ever had an important opportunity and almost missed it out of fear?' }, help: { es: 'Sí, cuando… Tenía miedo de… pero al final…', en: 'Yes, when… I was afraid of… but in the end…' }, follow: [{ es: '¿Quién te animó?', en: 'Who encouraged you?' }, { es: '¿Qué harías diferente hoy?', en: 'What would you do differently today?' }] },
            { q: { es: 'Compara el transporte de tu ciudad con el metro de Nueva York.', en: 'Compare the transport in your city with the New York subway.' }, help: { es: 'En mi ciudad el transporte es más… que… pero menos…', en: 'In my city transport is more… than… but less…' }, follow: [{ es: '¿Qué funciona mejor allí?', en: 'What works better there?' }, { es: '¿Qué copiarías de aquí?', en: 'What would you copy from here?' }] },
            { q: { es: '¿Te molesta que te graben o te saquen fotos en la calle? ¿Te pasó alguna vez?', en: 'Does it bother you when people film you or take photos of you in the street? Has it happened to you?' }, help: { es: 'Me molesta un poco cuando… Una vez alguien…', en: 'It bothers me a bit when… Once someone…' }, follow: [{ es: '¿Pides permiso antes de sacar una foto a alguien?', en: 'Do you ask permission before taking someone’s photo?' }, { es: '¿Qué fotos nunca subirías a internet?', en: 'What photos would you never post online?' }] },
          ],
          words: [
            { es: 'ganar dinero', en: 'to earn money' }, { es: 'la tarjeta', en: 'the business card' }, { es: 'la prueba', en: 'the audition, the tryout' },
            { es: 'emocionar', en: 'to move (emotionally)' }, { es: 'grabar', en: 'to film, to record' }, { es: 'aprovechar', en: 'to take advantage of' },
          ],
        },
        B1: {
          scene: { es: 'La ciudad debate si el metro debería ser gratis. Hay carteles a favor y en contra en todas las estaciones. Héctor toca justo debajo de uno que dice: «¿Quién paga lo gratis?».', en: 'The city is debating whether the subway should be free. There are posters for and against in every station. Héctor is playing right under one that says: “Who pays for free?”' },
          opener: { es: 'Mira, yo veo cada día a gente que salta el torniquete. Algunos no tienen ni para comer. Otros simplemente no quieren pagar. ¿Cómo distingues a uno del otro? ¿Debería ser gratis para todos?', en: 'Look, every day I see people jumping the turnstile. Some can’t even afford to eat. Others just don’t want to pay. How do you tell one from the other? Should it be free for everyone?' },
          decide: {
            ask: { es: 'Una periodista se acerca y les pregunta a Héctor y a ti para un reportaje: «En una frase: ¿metro gratis, sí o no?». ¿Qué respondes?', en: 'A journalist comes over and asks you and Héctor for a report: “In one sentence: free subway, yes or no?” What do you answer?' },
            options: [
              { say: { es: 'Sí, porque el transporte es un derecho, como las calles o la luz pública.', en: 'Yes, because transport is a right, like streets or street lighting.' }, then: { es: 'La periodista insiste: «¿Y aceptaría pagar más impuestos por ello?».', en: 'The journalist presses: “And would you accept paying higher taxes for it?”' } },
              { say: { es: 'Gratis solo para quien lo necesite: estudiantes, mayores, personas con pocos ingresos.', en: 'Free only for those who need it: students, older people, people on low incomes.' }, then: { es: 'Héctor añade: «¿Y quién decide quién lo necesita? Eso también cuesta dinero».', en: 'Héctor adds: “And who decides who needs it? That costs money too.”' } },
              { say: { es: 'No: prefiero pagar y que funcione mejor, con más trenes y más limpios.', en: 'No: I’d rather pay and have it work better, with more trains and cleaner ones.' }, then: { es: 'Una mujer que escucha se ríe: «Yo pago desde hace treinta años y sigue igual».', en: 'A woman listening laughs: “I’ve been paying for thirty years and it’s still the same.”' } },
            ],
          },
          twist: { es: 'La periodista le pregunta a Héctor si él paga el metro. Héctor se queda callado un segundo. Todos los ojos están en él.', en: 'The journalist asks Héctor whether he pays for the subway. Héctor goes quiet for a second. All eyes are on him.' },
          questions: [
            { q: { es: 'Si el transporte público fuera gratis en tu ciudad, ¿cambiaría tu forma de moverte? ¿Y la de los demás?', en: 'If public transport were free in your city, would it change how you get around? And how others do?' }, help: { es: 'Si fuera gratis, yo… En cambio, mucha gente…', en: 'If it were free, I would… On the other hand, a lot of people would…' }, follow: [{ es: '¿Dejarías el coche?', en: 'Would you give up your car?' }, { es: '¿Habría más problemas de seguridad o de limpieza?', en: 'Would there be more safety or cleanliness problems?' }] },
            { q: { es: '¿Qué servicios deberían ser gratis para todos y cuáles no?', en: 'Which services should be free for everyone and which shouldn’t?' }, help: { es: 'Para mí, … debería ser gratis porque… pero… no, ya que…', en: 'For me, … should be free because… but … shouldn’t, since…' }, follow: [{ es: '¿Lo gratis se valora menos?', en: 'Do people value free things less?' }, { es: '¿Qué pagas tú que te parece injusto pagar?', en: 'What do you pay for that you think is unfair to pay for?' }] },
            { q: { es: '¿Es justo castigar igual a quien no paga por necesidad y a quien no paga por costumbre?', en: 'Is it fair to punish someone who doesn’t pay out of need the same as someone who doesn’t pay out of habit?' }, help: { es: 'Entiendo que… pero creo que… La ley debería…', en: 'I understand that… but I think that… The law should…' }, follow: [{ es: '¿Cómo lo resolverías tú?', en: 'How would you solve it?' }, { es: '¿Alguna vez te saltaste una norma pequeña por necesidad?', en: 'Have you ever broken a small rule out of need?' }] },
            { q: { es: 'Héctor se queda callado. ¿Qué crees que pasa por su cabeza? ¿Qué harías en su lugar?', en: 'Héctor goes quiet. What do you think is going through his head? What would you do in his place?' }, help: { es: 'Supongo que piensa que… Yo en su lugar diría…', en: 'I suppose he’s thinking that… In his place I would say…' }, follow: [{ es: '¿Hay que decir siempre la verdad a un periodista?', en: 'Should you always tell a journalist the truth?' }, { es: '¿Alguna vez te arrepentiste de algo que dijiste en público?', en: 'Have you ever regretted something you said in public?' }] },
          ],
          words: [
            { es: 'el torniquete', en: 'the turnstile' }, { es: 'saltarse (una norma)', en: 'to break, to skip (a rule)' }, { es: 'los ingresos', en: 'income' },
            { es: 'un derecho', en: 'a right' }, { es: 'el reportaje', en: 'the news report' }, { es: 'quedarse callado', en: 'to go quiet' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the neighborhood café
    {
      id: 'cafe',
      name: { es: 'La cafetería de barrio', en: 'The neighborhood café' },
      who: { name: 'Nora', role: { es: 'clienta de todas las mañanas', en: 'regular morning customer' } },
      levels: {
        A0: {
          scene: { es: 'Es una cafetería pequeña. Hay pan y café. Nora toma un café. Tiene una maleta.', en: 'It is a small café. There is bread and coffee. Nora drinks a coffee. She has a suitcase.' },
          opener: { es: '¡Hola! Soy Nora. Hoy voy al aeropuerto. ¡Voy a viajar! ¿Tú viajas mucho?', en: 'Hi! I am Nora. Today I go to the airport. I am going to travel! Do you travel a lot?' },
          decide: {
            ask: { es: 'Nora pregunta: «¿Qué pido?». ¿Qué dices?', en: 'Nora asks: “What do I order?” What do you say?' },
            options: [
              { say: { es: 'Un café con leche.', en: 'A coffee with milk.' }, then: { es: 'Nora dice: «¡Mmm, rico!».', en: 'Nora says: “Mmm, tasty!”' } },
              { say: { es: 'Un té y un bagel.', en: 'A tea and a bagel.' }, then: { es: 'El bagel es enorme. Nora ríe.', en: 'The bagel is huge. Nora laughs.' } },
              { say: { es: 'Agua, por favor.', en: 'Water, please.' }, then: { es: 'El camarero trae agua con hielo. Es gratis.', en: 'The waiter brings water with ice. It is free.' } },
            ],
          },
          twist: { es: '¡Nora no tiene su pasaporte! Está en casa. ¿Qué dices?', en: 'Nora doesn’t have her passport! It is at home. What do you say?' },
          questions: [
            { q: { es: '¿Tomas café o té por la mañana?', en: 'Do you drink coffee or tea in the morning?' }, help: { es: 'Tomo café. / Tomo té. / No tomo nada.', en: 'I drink coffee. / I drink tea. / I don’t drink anything.' }, follow: [{ es: '¿Con leche o sin leche?', en: 'With milk or without milk?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
            { q: { es: '¿Tienes pasaporte?', en: 'Do you have a passport?' }, help: { es: 'Sí, tengo pasaporte. / No, no tengo.', en: 'Yes, I have a passport. / No, I don’t.' }, follow: [{ es: '¿De qué color es?', en: 'What color is it?' }, { es: '¿Dónde está ahora?', en: 'Where is it now?' }] },
            { q: { es: '¿Prefieres viajar en avión o en tren?', en: 'Do you prefer to travel by plane or by train?' }, help: { es: 'Prefiero el avión. / Prefiero el tren.', en: 'I prefer the plane. / I prefer the train.' }, follow: [{ es: '¿Duermes en el avión?', en: 'Do you sleep on the plane?' }, { es: '¿Ventana o pasillo?', en: 'Window or aisle?' }] },
            { q: { es: '¿Qué país quieres visitar?', en: 'Which country do you want to visit?' }, help: { es: 'Quiero visitar… Es bonito.', en: 'I want to visit… It is beautiful.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿En verano o en invierno?', en: 'In summer or in winter?' }] },
          ],
          words: [
            { es: 'la cafetería', en: 'the café' }, { es: 'la maleta', en: 'the suitcase' }, { es: 'el aeropuerto', en: 'the airport' },
            { es: 'viajar', en: 'to travel' }, { es: 'pedir', en: 'to order, to ask for' }, { es: 'el pasaporte', en: 'the passport' },
          ],
        },
        A1: {
          scene: { es: 'Una cafetería del Upper West Side. Huele a pan recién hecho. Nora viene aquí todas las mañanas antes de ir a su oficina en el centro. Hoy está muy contenta.', en: 'A café on the Upper West Side. It smells of freshly baked bread. Nora comes here every morning before going to her office downtown. Today she is very happy.' },
          opener: { es: '¡Tengo un secreto! El mes que viene dejo mi trabajo. Voy a viajar seis meses por Sudamérica. Mi jefe todavía no lo sabe. ¿Qué te parece?', en: 'I have a secret! Next month I’m leaving my job. I’m going to travel around South America for six months. My boss doesn’t know yet. What do you think?' },
          decide: {
            ask: { es: 'Nora necesita tu ayuda: «¿Cuándo se lo digo a mi jefe?».', en: 'Nora needs your help: “When do I tell my boss?”' },
            options: [
              { say: { es: 'Hoy, con calma y con una sonrisa.', en: 'Today, calmly and with a smile.' }, then: { es: 'Nora respira hondo: «Vale, hoy. Después del café».', en: 'Nora takes a deep breath: “Okay, today. After my coffee.”' } },
              { say: { es: 'Después de comprar el billete de avión.', en: 'After buying the plane ticket.' }, then: { es: 'Nora saca el teléfono: «Hay un vuelo barato a Lima… ¡ahora mismo!».', en: 'Nora takes out her phone: “There’s a cheap flight to Lima… right now!”' } },
              { say: { es: 'El último día. Es más fácil.', en: 'On the last day. It’s easier.' }, then: { es: 'Nora duda: «Mmm… mi jefe es simpático. No es justo».', en: 'Nora hesitates: “Hmm… my boss is nice. It’s not fair.”' } },
            ],
          },
          twist: { es: 'Se abre la puerta. ¡Entra el jefe de Nora! Pide un café y la ve. «¡Nora! ¿Qué haces aquí tan temprano?».', en: 'The door opens. Nora’s boss walks in! He orders a coffee and sees her. “Nora! What are you doing here so early?”' },
          questions: [
            { q: { es: '¿Tienes una cafetería o un lugar favorito para empezar el día?', en: 'Do you have a favorite café or place to start the day?' }, help: { es: 'Sí, voy a… Me gusta porque… / No, desayuno en casa.', en: 'Yes, I go to… I like it because… / No, I have breakfast at home.' }, follow: [{ es: '¿Qué pides siempre?', en: 'What do you always order?' }, { es: '¿Conoces a la gente que trabaja allí?', en: 'Do you know the people who work there?' }] },
            { q: { es: 'Nora va a viajar seis meses. ¿Adónde vas a ir tú en tu próximo viaje?', en: 'Nora is going to travel for six months. Where are you going on your next trip?' }, help: { es: 'Voy a ir a… con… porque quiero…', en: 'I’m going to go to… with… because I want to…' }, follow: [{ es: '¿Cuántos días vas a estar?', en: 'How many days are you going to stay?' }, { es: '¿Qué vas a llevar en la maleta?', en: 'What are you going to pack?' }] },
            { q: { es: '¿Qué es más importante para ti en un trabajo: el dinero, el tiempo libre o los compañeros?', en: 'What’s most important to you in a job: money, free time or coworkers?' }, help: { es: 'Para mí, lo más importante es… porque…', en: 'For me, the most important thing is… because…' }, follow: [{ es: '¿Cómo es tu jefe o tu profesor?', en: 'What is your boss or your teacher like?' }, { es: '¿Trabajas los fines de semana?', en: 'Do you work on weekends?' }] },
            { q: { es: '¿Prefieres viajar solo o con otras personas? ¿Por qué?', en: 'Do you prefer traveling alone or with other people? Why?' }, help: { es: 'Prefiero viajar… porque… Pero a veces…', en: 'I prefer traveling… because… But sometimes…' }, follow: [{ es: '¿Con quién viajas normalmente?', en: 'Who do you usually travel with?' }, { es: '¿Qué te gusta hacer en un viaje?', en: 'What do you like to do on a trip?' }] },
          ],
          words: [
            { es: 'dejar el trabajo', en: 'to quit one’s job' }, { es: 'el jefe, la jefa', en: 'the boss' }, { es: 'el mes que viene', en: 'next month' },
            { es: 'el billete de avión', en: 'the plane ticket' }, { es: 'temprano', en: 'early' }, { es: 'recién hecho', en: 'freshly made' },
          ],
        },
        A2: {
          scene: { es: 'Nora ya no trabaja en la oficina. Ayer fue su último día. Hoy está en la cafetería con una mochila enorme, un mapa y una lista de cosas por hacer.', en: 'Nora no longer works at the office. Yesterday was her last day. Today she’s in the café with a huge backpack, a map and a to-do list.' },
          opener: { es: 'Ayer les dije adiós a todos. Mi compañera lloró, mi jefe me regaló una brújula y yo casi cambié de idea. ¿Tú dejaste alguna vez algo seguro por algo nuevo?', en: 'Yesterday I said goodbye to everyone. My coworker cried, my boss gave me a compass and I almost changed my mind. Have you ever left something safe for something new?' },
          decide: {
            ask: { es: 'Nora tiene que elegir la primera parada del viaje y no puede decidir. ¿Qué le recomiendas?', en: 'Nora has to choose the first stop of the trip and can’t decide. What do you recommend?' },
            options: [
              { say: { es: 'Empezar por la ciudad más grande para acostumbrarse poco a poco.', en: 'Start with the biggest city to get used to it little by little.' }, then: { es: 'Nora apunta: «Ciudad de México primero». Ya está más tranquila.', en: 'Nora writes it down: “Mexico City first.” She’s already calmer.' } },
              { say: { es: 'Empezar por la naturaleza, lejos del ruido de Nueva York.', en: 'Start with nature, far from the noise of New York.' }, then: { es: '«¡La Patagonia!», dice Nora. Después mira su ropa: «Necesito un abrigo de verdad».', en: '“Patagonia!” says Nora. Then she looks at her clothes: “I need a real coat.”' } },
              { say: { es: 'Empezar donde vive alguien que conoce, por si acaso.', en: 'Start where someone she knows lives, just in case.' }, then: { es: 'Nora se acuerda de una prima en Bogotá a la que no ve desde hace diez años.', en: 'Nora remembers a cousin in Bogotá she hasn’t seen in ten years.' } },
            ],
          },
          twist: { es: 'El teléfono de Nora vibra. Es un mensaje de su antiguo jefe: «Te ofrecemos un aumento si vuelves». Nora te lo enseña sin decir nada.', en: 'Nora’s phone buzzes. It’s a message from her former boss: “We’re offering you a raise if you come back.” Nora shows it to you without a word.' },
          questions: [
            { q: { es: '¿Dejaste alguna vez algo seguro por algo nuevo? ¿Cómo te fue?', en: 'Have you ever left something safe for something new? How did it go?' }, help: { es: 'Sí, cuando… Al principio… pero después…', en: 'Yes, when… At first… but later…' }, follow: [{ es: '¿Qué dijo tu familia?', en: 'What did your family say?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Cuál fue el viaje más largo que hiciste? ¿Qué llevabas en la maleta?', en: 'What was the longest trip you ever took? What did you have in your suitcase?' }, help: { es: 'El viaje más largo fue a… Duró… Llevaba…', en: 'The longest trip was to… It lasted… I had…' }, follow: [{ es: '¿Qué te sobró y qué te faltó?', en: 'What did you have too much of and what was missing?' }, { es: '¿Te sentiste solo o sola en algún momento?', en: 'Did you feel lonely at any point?' }] },
            { q: { es: 'Compara cómo te despides tú de la gente con cómo lo hace Nora.', en: 'Compare how you say goodbye to people with how Nora does it.' }, help: { es: 'Yo soy más… que Nora. Cuando me voy, normalmente…', en: 'I’m more… than Nora. When I leave, I usually…' }, follow: [{ es: '¿Lloras en las despedidas?', en: 'Do you cry at goodbyes?' }, { es: '¿Cuál fue la despedida más difícil de tu vida?', en: 'What was the hardest goodbye of your life?' }] },
            { q: { es: '¿Qué regalo recibiste en una despedida o un cambio importante?', en: 'What gift did you get at a farewell or an important change?' }, help: { es: 'Cuando… me regalaron… Todavía lo tengo / Ya no lo tengo.', en: 'When… they gave me… I still have it / I don’t have it anymore.' }, follow: [{ es: '¿Por qué crees que eligieron ese regalo?', en: 'Why do you think they chose that gift?' }, { es: '¿Qué le regalarías tú a Nora?', en: 'What would you give Nora?' }] },
          ],
          words: [
            { es: 'el último día', en: 'the last day' }, { es: 'la mochila', en: 'the backpack' }, { es: 'la brújula', en: 'the compass' },
            { es: 'cambiar de idea', en: 'to change one’s mind' }, { es: 'un aumento', en: 'a raise' }, { es: 'por si acaso', en: 'just in case' },
          ],
        },
        B1: {
          scene: { es: 'Es domingo. Nora está en la cafetería con sus padres. Ellos acaban de enterarse de que dejó un trabajo fijo en una empresa importante para viajar un año. Nadie toca el café.', en: 'It’s Sunday. Nora is in the café with her parents. They’ve just found out that she quit a permanent job at a big company to travel for a year. Nobody touches their coffee.' },
          opener: { es: 'Mi madre dice que estoy tirando mi carrera a la basura. Mi padre no dice nada, que es peor. Yo tengo treinta y un años y algo de dinero ahorrado. Si no lo hago ahora, ¿cuándo? ¿Tú qué piensas?', en: 'My mother says I’m throwing my career in the trash. My father says nothing, which is worse. I’m thirty-one and I have some money saved. If I don’t do it now, when? What do you think?' },
          decide: {
            ask: { es: 'La madre de Nora te mira: «Tú que eres de fuera, dinos la verdad: ¿esto es valiente o irresponsable?».', en: 'Nora’s mother looks at you: “You’re an outsider, tell us the truth: is this brave or irresponsible?”' },
            options: [
              { say: { es: 'Valiente: el trabajo se puede recuperar, el tiempo no.', en: 'Brave: you can get a job back, but not time.' }, then: { es: 'La madre se cruza de brazos: «Eso lo dice quien no ha pagado nunca un alquiler en Manhattan».', en: 'The mother crosses her arms: “Says someone who’s never paid rent in Manhattan.”' } },
              { say: { es: 'Depende de si Nora tiene un plan para cuando vuelva.', en: 'It depends on whether Nora has a plan for when she comes back.' }, then: { es: 'El padre habla por primera vez: «Eso. ¿Cuál es el plan, hija?».', en: 'The father speaks for the first time: “That’s it. What’s the plan, sweetheart?”' } },
              { say: { es: 'Las dos cosas, y no pasa nada: a veces hay que equivocarse.', en: 'Both, and that’s okay: sometimes you have to make mistakes.' }, then: { es: 'Nora sonríe por primera vez en toda la mañana. Su madre, no.', en: 'Nora smiles for the first time all morning. Her mother doesn’t.' } },
            ],
          },
          twist: { es: 'El padre de Nora confiesa que a los veinticinco años rechazó un viaje así por miedo y que todavía se arrepiente. Su mujer lo mira sorprendida: nunca se lo había contado.', en: 'Nora’s father confesses that at twenty-five he turned down a trip like this out of fear and still regrets it. His wife looks at him, surprised: he had never told her.' },
          questions: [
            { q: { es: '¿Dejarías un trabajo estable para viajar un año? ¿Qué condiciones necesitarías?', en: 'Would you leave a stable job to travel for a year? What conditions would you need?' }, help: { es: 'Lo haría solo si… / No lo haría porque… A menos que…', en: 'I would only do it if… / I wouldn’t do it because… Unless…' }, follow: [{ es: '¿Cuánto dinero ahorrado te parecería suficiente?', en: 'How much savings would seem like enough to you?' }, { es: '¿Qué edad es la mejor para algo así?', en: 'What age is best for something like this?' }] },
            { q: { es: '¿Hasta qué punto deberían opinar los padres sobre las decisiones de un hijo adulto?', en: 'To what extent should parents have a say in the decisions of an adult child?' }, help: { es: 'Creo que pueden dar su opinión, pero… Lo que no me parece bien es que…', en: 'I think they can give their opinion, but… What I don’t think is right is…' }, follow: [{ es: '¿Les pides consejo a tus padres antes de una decisión grande?', en: 'Do you ask your parents for advice before a big decision?' }, { es: '¿Cambia esto según la cultura?', en: 'Does this change depending on the culture?' }] },
            { q: { es: '¿Qué es peor: arrepentirse de algo que hiciste o de algo que no hiciste?', en: 'What’s worse: regretting something you did or something you didn’t do?' }, help: { es: 'Para mí es peor… porque… Por ejemplo, yo…', en: 'For me it’s worse… because… For example, I…' }, follow: [{ es: '¿Tienes algún «¿y si…?» en tu vida?', en: 'Do you have any “what if…?” in your life?' }, { es: '¿Qué le dirías al padre de Nora?', en: 'What would you say to Nora’s father?' }] },
            { q: { es: 'Imagina que vuelves de un año de viaje. ¿Qué crees que les preocupa más a las empresas cuando ven ese año en tu currículum?', en: 'Imagine you come back from a year of travel. What do you think worries companies most when they see that year on your résumé?' }, help: { es: 'Supongo que pensarían que… Yo lo explicaría diciendo que…', en: 'I suppose they’d think that… I’d explain it by saying that…' }, follow: [{ es: '¿Qué aprende una persona viajando que no aprende en una oficina?', en: 'What does a person learn traveling that they don’t learn in an office?' }, { es: '¿Contratarías tú a alguien así?', en: 'Would you hire someone like that?' }] },
          ],
          words: [
            { es: 'un trabajo fijo', en: 'a permanent job' }, { es: 'enterarse de', en: 'to find out about' }, { es: 'ahorrar', en: 'to save (money)' },
            { es: 'arrepentirse', en: 'to regret' }, { es: 'rechazar', en: 'to turn down' }, { es: 'el currículum', en: 'the résumé' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the park
    {
      id: 'parque',
      name: { es: 'El parque', en: 'The park' },
      who: { name: 'Jaylen', role: { es: 'paseador de perros', en: 'dog walker' } },
      levels: {
        A0: {
          scene: { es: 'Es Central Park. Hay árboles y un lago. Jaylen camina con seis perros. Los perros son grandes y pequeños.', en: 'It is Central Park. There are trees and a lake. Jaylen walks with six dogs. The dogs are big and small.' },
          opener: { es: '¡Hola! Soy Jaylen. Paseo perros. ¡Hoy tengo seis! ¿Tienes perro?', en: 'Hi! I am Jaylen. I walk dogs. Today I have six! Do you have a dog?' },
          decide: {
            ask: { es: 'Un perro pequeño quiere jugar contigo. ¿Qué haces?', en: 'A small dog wants to play with you. What do you do?' },
            options: [
              { say: { es: 'Juego con el perro.', en: 'I play with the dog.' }, then: { es: 'El perro salta y te da un beso. ¡Ja, ja!', en: 'The dog jumps and gives you a kiss. Ha ha!' } },
              { say: { es: 'Tiro una pelota.', en: 'I throw a ball.' }, then: { es: '¡Los seis perros corren a la pelota!', en: 'All six dogs run to the ball!' } },
              { say: { es: 'No, gracias. Tengo miedo.', en: 'No, thanks. I am scared.' }, then: { es: 'Jaylen dice: «Tranquilo, es bueno». El perro se sienta.', en: 'Jaylen says: “Don’t worry, he is good.” The dog sits down.' } },
            ],
          },
          twist: { es: '¡Una ardilla! Los perros corren detrás de la ardilla. Jaylen cae al suelo. ¿Qué dices?', en: 'A squirrel! The dogs run after the squirrel. Jaylen falls on the ground. What do you say?' },
          questions: [
            { q: { es: '¿Prefieres perros o gatos?', en: 'Do you prefer dogs or cats?' }, help: { es: 'Prefiero los perros. / Prefiero los gatos. / No me gustan.', en: 'I prefer dogs. / I prefer cats. / I don’t like them.' }, follow: [{ es: '¿Tienes un animal en casa?', en: 'Do you have a pet at home?' }, { es: '¿Cómo se llama?', en: 'What is its name?' }] },
            { q: { es: '¿Hay un parque cerca de tu casa?', en: 'Is there a park near your home?' }, help: { es: 'Sí, hay un parque grande. / No, no hay.', en: 'Yes, there is a big park. / No, there isn’t.' }, follow: [{ es: '¿Vas al parque?', en: 'Do you go to the park?' }, { es: '¿Qué haces allí: caminas, corres, lees?', en: 'What do you do there: walk, run, read?' }] },
            { q: { es: '¿Caminas mucho cada día?', en: 'Do you walk a lot every day?' }, help: { es: 'Sí, camino mucho. / No, camino poco.', en: 'Yes, I walk a lot. / No, I walk a little.' }, follow: [{ es: '¿Caminas por la mañana o por la tarde?', en: 'Do you walk in the morning or in the afternoon?' }, { es: '¿Con quién caminas?', en: 'Who do you walk with?' }] },
            { q: { es: '¿Qué animal es tu favorito?', en: 'What is your favorite animal?' }, help: { es: 'Mi animal favorito es el… / la…', en: 'My favorite animal is the…' }, follow: [{ es: '¿Es grande o pequeño?', en: 'Is it big or small?' }, { es: '¿De qué color es?', en: 'What color is it?' }] },
          ],
          words: [
            { es: 'el parque', en: 'the park' }, { es: 'el perro', en: 'the dog' }, { es: 'el árbol', en: 'the tree' },
            { es: 'pasear', en: 'to walk (a dog), to stroll' }, { es: 'la pelota', en: 'the ball' }, { es: 'la ardilla', en: 'the squirrel' },
          ],
        },
        A1: {
          scene: { es: 'Central Park, un sábado de otoño. Las hojas de los árboles son rojas y naranjas. Jaylen pasea los perros de sus clientes: cada perro tiene un nombre y un carácter diferente.', en: 'Central Park, an autumn Saturday. The leaves on the trees are red and orange. Jaylen walks his clients’ dogs: each dog has a different name and personality.' },
          opener: { es: 'Este es Bruno, es muy tranquilo. Esta es Lola, es un poco loca. Y este es Max: come todo lo que encuentra. Trabajo con perros porque prefiero los animales a las oficinas. ¿Y tú, en qué trabajas?', en: 'This is Bruno, he’s very calm. This is Lola, she’s a bit crazy. And this is Max: he eats everything he finds. I work with dogs because I prefer animals to offices. And you, what do you do?' },
          decide: {
            ask: { es: 'Jaylen tiene que atender una llamada de un cliente. Te pregunta: «¿Puedes sujetar a dos perros un minuto?». ¿Qué respondes?', en: 'Jaylen has to take a call from a client. He asks you: “Can you hold two dogs for a minute?” What do you answer?' },
            options: [
              { say: { es: 'Sí, dame a Bruno y a Lola.', en: 'Yes, give me Bruno and Lola.' }, then: { es: 'Bruno se sienta. Lola tira fuerte hacia el lago. ¡Agárrala bien!', en: 'Bruno sits down. Lola pulls hard toward the lake. Hold on tight!' } },
              { say: { es: 'Sí, pero dame a los más tranquilos.', en: 'Yes, but give me the calmest ones.' }, then: { es: 'Jaylen te da a Bruno y a un perro viejo que se duerme en tus pies.', en: 'Jaylen gives you Bruno and an old dog that falls asleep on your feet.' } },
              { say: { es: 'Mejor no. No sé mucho de perros.', en: 'Better not. I don’t know much about dogs.' }, then: { es: 'Jaylen ríe: «Entonces habla con el cliente tú, y yo sujeto a los perros».', en: 'Jaylen laughs: “Then you talk to the client, and I’ll hold the dogs.”' } },
            ],
          },
          twist: { es: 'Max tiene algo en la boca. ¡Es un sándwich! Un señor en un banco grita: «¡Ese perro se comió mi almuerzo!».', en: 'Max has something in his mouth. It’s a sandwich! A man on a bench shouts: “That dog ate my lunch!”' },
          questions: [
            { q: { es: 'Jaylen prefiere los animales a las oficinas. ¿Y tú? ¿Dónde te gusta trabajar o estudiar?', en: 'Jaylen prefers animals to offices. What about you? Where do you like to work or study?' }, help: { es: 'Me gusta trabajar en… porque… No me gusta…', en: 'I like to work in… because… I don’t like…' }, follow: [{ es: '¿Trabajas con otras personas o solo?', en: 'Do you work with other people or alone?' }, { es: '¿Qué trabajo no quieres hacer nunca?', en: 'What job do you never want to do?' }] },
            { q: { es: 'Describe a un animal que conoces: ¿cómo se llama y cómo es su carácter?', en: 'Describe an animal you know: what’s its name and what’s its personality like?' }, help: { es: 'Se llama… Es muy… y un poco… Le gusta…', en: 'Its name is… It’s very… and a bit… It likes…' }, follow: [{ es: '¿Es de tu familia o de un amigo?', en: 'Is it your family’s or a friend’s?' }, { es: '¿Qué hace cuando está contento?', en: 'What does it do when it’s happy?' }] },
            { q: { es: '¿Qué estación del año prefieres para pasear? ¿Por qué?', en: 'Which season do you prefer for walks? Why?' }, help: { es: 'Prefiero el otoño / la primavera porque…', en: 'I prefer autumn / spring because…' }, follow: [{ es: '¿Cómo es el otoño en tu país?', en: 'What is autumn like in your country?' }, { es: '¿Qué ropa llevas en esa estación?', en: 'What clothes do you wear in that season?' }] },
            { q: { es: '¿Qué haces normalmente un sábado por la mañana?', en: 'What do you usually do on a Saturday morning?' }, help: { es: 'Normalmente me levanto a las… y después…', en: 'I usually get up at… and then…' }, follow: [{ es: '¿Y este sábado?', en: 'And this Saturday?' }, { es: '¿Prefieres un sábado tranquilo o con planes?', en: 'Do you prefer a quiet Saturday or one with plans?' }] },
          ],
          words: [
            { es: 'el paseador de perros', en: 'the dog walker' }, { es: 'el cliente', en: 'the client' }, { es: 'el carácter', en: 'the personality' },
            { es: 'sujetar', en: 'to hold' }, { es: 'tirar (de la correa)', en: 'to pull (on the leash)' }, { es: 'las hojas', en: 'the leaves' },
          ],
        },
        A2: {
          scene: { es: 'Jaylen está pálido. Llegó al parque con seis perros y ahora cuenta solo cinco. Falta Pimienta, una perrita blanca que pertenece a una señora muy mayor del barrio.', en: 'Jaylen is pale. He arrived at the park with six dogs and now he only counts five. Pimienta is missing, a little white dog that belongs to a very old lady from the neighborhood.' },
          opener: { es: 'Hace diez minutos estaba aquí, te lo juro. Me distraje mirando el teléfono y desapareció. ¿Tú perdiste alguna vez algo, o a alguien, por un descuido?', en: 'Ten minutes ago she was right here, I swear. I got distracted looking at my phone and she vanished. Have you ever lost something, or someone, through carelessness?' },
          decide: {
            ask: { es: 'Hay que actuar rápido. ¿Qué propones?', en: 'You need to act fast. What do you suggest?' },
            options: [
              { say: { es: 'Nos separamos: yo busco por el lago y tú por los caminos del norte.', en: 'We split up: I search by the lake and you take the paths to the north.' }, then: { es: 'Junto al lago, unos niños te dicen que vieron «un perro blanco persiguiendo patos».', en: 'By the lake, some kids tell you they saw “a white dog chasing ducks.”' } },
              { say: { es: 'Llamar ya a la dueña para decirle la verdad.', en: 'Call the owner right now to tell her the truth.' }, then: { es: 'La señora no contesta. Jaylen deja un mensaje con la voz temblando.', en: 'The lady doesn’t answer. Jaylen leaves a message with a trembling voice.' } },
              { say: { es: 'Publicar una foto de Pimienta en un grupo de vecinos en internet.', en: 'Post a photo of Pimienta in an online neighborhood group.' }, then: { es: 'En dos minutos hay veinte comentarios. Uno dice: «¡La tengo yo, está en mi cafetería!».', en: 'In two minutes there are twenty comments. One says: “I have her, she’s in my café!”' } },
            ],
          },
          twist: { es: 'Encuentran a Pimienta. Pero ahora Jaylen duda: ¿le cuenta a la señora lo que pasó o no le dice nada? «Si se lo digo, a lo mejor pierdo a mi mejor clienta».', en: 'They find Pimienta. But now Jaylen hesitates: does he tell the lady what happened or say nothing? “If I tell her, I might lose my best client.”' },
          questions: [
            { q: { es: '¿Perdiste alguna vez algo importante por un descuido? ¿Cómo lo encontraste?', en: 'Have you ever lost something important through carelessness? How did you find it?' }, help: { es: 'Una vez perdí… porque estaba… Al final lo encontré en… / Nunca lo encontré.', en: 'Once I lost… because I was… In the end I found it in… / I never found it.' }, follow: [{ es: '¿Quién te ayudó a buscar?', en: 'Who helped you look?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Tuviste un animal de pequeño? ¿Cómo era y qué hacíais juntos?', en: 'Did you have a pet as a child? What was it like and what did you do together?' }, help: { es: 'Sí, tenía un… Era… Siempre…', en: 'Yes, I had a… It was… We always…' }, follow: [{ es: '¿Quién lo cuidaba más?', en: 'Who took care of it the most?' }, { es: '¿Qué recuerdo tienes de él?', en: 'What memory do you have of it?' }] },
            { q: { es: '¿Qué harías tú: contarle la verdad a la señora o no? ¿Por qué?', en: 'What would you do: tell the lady the truth or not? Why?' }, help: { es: 'Yo se lo contaría porque… / No se lo diría porque…', en: 'I would tell her because… / I wouldn’t tell her because…' }, follow: [{ es: '¿Alguna vez ocultaste un error en el trabajo?', en: 'Have you ever hidden a mistake at work?' }, { es: '¿Qué es peor, el error o ocultarlo?', en: 'What’s worse, the mistake or hiding it?' }] },
            { q: { es: 'Compara un parque grande de tu ciudad con Central Park.', en: 'Compare a big park in your city with Central Park.' }, help: { es: 'En mi ciudad hay… Es más… que… y tiene menos…', en: 'In my city there’s… It’s more… than… and it has fewer…' }, follow: [{ es: '¿Es seguro de noche?', en: 'Is it safe at night?' }, { es: '¿Qué actividades se hacen allí?', en: 'What activities do people do there?' }] },
          ],
          words: [
            { es: 'faltar', en: 'to be missing' }, { es: 'distraerse', en: 'to get distracted' }, { es: 'un descuido', en: 'a careless slip' },
            { es: 'la dueña', en: 'the owner' }, { es: 'perseguir', en: 'to chase' }, { es: 'ocultar', en: 'to hide' },
          ],
        },
        B1: {
          scene: { es: 'En el parque hay un debate improvisado. Un grupo de vecinos quiere prohibir los perros sueltos por la mañana, incluso en las horas en que ahora está permitido. Jaylen vive de esos paseos.', en: 'There’s an impromptu debate in the park. A group of residents wants to ban off-leash dogs in the morning, even during the hours when it’s currently allowed. Jaylen makes his living from those walks.' },
          opener: { es: 'Entiendo a los que tienen miedo, de verdad. A una señora la tiró un perro el mes pasado. Pero si prohíben las horas sin correa, la mitad de mis clientes me deja. ¿Cómo se equilibran los derechos de unos y otros en un espacio de todos?', en: 'I understand people who are scared, I really do. A dog knocked a lady over last month. But if they ban the off-leash hours, half my clients will leave me. How do you balance everyone’s rights in a space that belongs to all?' },
          decide: {
            ask: { es: 'Te piden una propuesta para votar esta tarde. ¿Cuál presentas?', en: 'They ask you for a proposal to vote on this afternoon. Which one do you present?' },
            options: [
              { say: { es: 'Zonas separadas: un área cerrada para perros sueltos y el resto, con correa.', en: 'Separate zones: a fenced area for off-leash dogs and leashes everywhere else.' }, then: { es: 'Muchos asienten. Un señor pregunta quién pagará la valla y su mantenimiento.', en: 'Many nod. A man asks who will pay for the fence and its upkeep.' } },
              { say: { es: 'Mantener las horas, pero con una licencia y un curso obligatorio para los dueños.', en: 'Keep the hours, but with a license and a mandatory course for owners.' }, then: { es: 'Jaylen duda: «A mí me parece bien, pero muchos dueños mayores no harán un curso».', en: 'Jaylen hesitates: “I’m fine with it, but a lot of older owners won’t take a course.”' } },
              { say: { es: 'Prohibirlo todo un mes y después decidir con datos.', en: 'Ban it all for a month and then decide based on data.' }, then: { es: 'Los que tienen miedo aplauden. Los dueños de perros protestan: «¡Un mes es una eternidad para un perro!».', en: 'The people who are scared applaud. Dog owners protest: “A month is an eternity for a dog!”' } },
            ],
          },
          twist: { es: 'Llega la señora a la que tiró el perro. Para sorpresa de todos, dice que no quiere prohibiciones: quiere que el dueño de ese perro le pida perdón, cosa que nunca hizo.', en: 'The lady who was knocked over arrives. To everyone’s surprise, she says she doesn’t want bans: she wants the owner of that dog to apologize to her, which he never did.' },
          questions: [
            { q: { es: '¿Cómo se deberían repartir los espacios públicos entre grupos con necesidades diferentes: niños, mayores, deportistas, dueños de perros?', en: 'How should public spaces be shared between groups with different needs: children, older people, athletes, dog owners?' }, help: { es: 'Yo propondría que… porque… Lo difícil es que…', en: 'I would propose that… because… The hard part is that…' }, follow: [{ es: '¿Qué grupo crees que tiene menos voz?', en: 'Which group do you think has the least voice?' }, { es: '¿Hay algún conflicto así en tu barrio?', en: 'Is there a conflict like this in your neighborhood?' }] },
            { q: { es: '¿Crees que una norma nueva soluciona los problemas, o que el problema suele ser la falta de respeto?', en: 'Do you think a new rule solves problems, or is the problem usually a lack of respect?' }, help: { es: 'Por un lado, las normas… Por otro lado, si la gente no…', en: 'On the one hand, rules… On the other hand, if people don’t…' }, follow: [{ es: '¿Qué norma de tu ciudad nadie cumple?', en: 'What rule in your city does nobody follow?' }, { es: '¿Las multas cambian el comportamiento?', en: 'Do fines change behavior?' }] },
            { q: { es: '¿Por qué crees que para la señora es más importante una disculpa que una prohibición?', en: 'Why do you think an apology matters more to the lady than a ban?' }, help: { es: 'Quizás porque… Para mí, una disculpa sirve para…', en: 'Maybe because… For me, an apology serves to…' }, follow: [{ es: '¿Te costó alguna vez pedir perdón?', en: 'Has it ever been hard for you to apologize?' }, { es: '¿Alguien te debe una disculpa?', en: 'Does someone owe you an apology?' }] },
            { q: { es: 'Si tu trabajo dependiera de una votación de tus vecinos, ¿qué argumentos usarías para defenderlo?', en: 'If your job depended on a vote by your neighbors, what arguments would you use to defend it?' }, help: { es: 'Les diría que mi trabajo… y que sin él…', en: 'I would tell them that my job… and that without it…' }, follow: [{ es: '¿Es tu trabajo útil para la comunidad?', en: 'Is your job useful to the community?' }, { es: '¿Qué trabajos se valoran poco aunque son necesarios?', en: 'Which jobs are undervalued even though they’re necessary?' }] },
          ],
          words: [
            { es: 'suelto', en: 'off-leash, loose' }, { es: 'la correa', en: 'the leash' }, { es: 'prohibir', en: 'to ban' },
            { es: 'la valla', en: 'the fence' }, { es: 'pedir perdón', en: 'to apologize' }, { es: 'equilibrar', en: 'to balance' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the shopping street
    {
      id: 'avenida',
      name: { es: 'La calle comercial', en: 'The shopping street' },
      who: { name: 'Valeria', role: { es: 'vendedora de ropa de segunda mano', en: 'vintage clothing seller' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con muchas tiendas. Valeria tiene una tienda de ropa. Hay chaquetas, vestidos y sombreros.', en: 'It is a street with many shops. Valeria has a clothing shop. There are jackets, dresses and hats.' },
          opener: { es: '¡Hola! Soy Valeria. Esta ropa es vieja, pero es bonita. ¿Qué buscas?', en: 'Hi! I am Valeria. These clothes are old, but they are pretty. What are you looking for?' },
          decide: {
            ask: { es: 'Hay una chaqueta roja y una chaqueta azul. ¿Cuál compras?', en: 'There is a red jacket and a blue jacket. Which one do you buy?' },
            options: [
              { say: { es: 'La chaqueta roja.', en: 'The red jacket.' }, then: { es: 'Valeria dice: «¡Perfecta para ti!».', en: 'Valeria says: “Perfect for you!”' } },
              { say: { es: 'La chaqueta azul.', en: 'The blue jacket.' }, then: { es: 'Es un poco grande. Valeria trae otra.', en: 'It is a little big. Valeria brings another one.' } },
              { say: { es: 'Las dos chaquetas.', en: 'Both jackets.' }, then: { es: 'Valeria ríe: «¡Hoy hay descuento!».', en: 'Valeria laughs: “Today there is a discount!”' } },
            ],
          },
          twist: { es: '¡En el bolsillo de la chaqueta hay una carta vieja! ¿Qué dices?', en: 'In the jacket pocket there is an old letter! What do you say?' },
          questions: [
            { q: { es: '¿Qué ropa llevas hoy?', en: 'What clothes are you wearing today?' }, help: { es: 'Llevo una camiseta y unos pantalones.', en: 'I am wearing a T-shirt and pants.' }, follow: [{ es: '¿De qué color es tu camiseta?', en: 'What color is your T-shirt?' }, { es: '¿Llevas zapatos o zapatillas?', en: 'Are you wearing shoes or sneakers?' }] },
            { q: { es: '¿Cuál es tu color favorito para la ropa?', en: 'What is your favorite color for clothes?' }, help: { es: 'Mi color favorito es el negro / el azul…', en: 'My favorite color is black / blue…' }, follow: [{ es: '¿Qué color no llevas nunca?', en: 'What color do you never wear?' }, { es: '¿Te gusta la ropa de colores?', en: 'Do you like colorful clothes?' }] },
            { q: { es: '¿Compras ropa en tiendas o por internet?', en: 'Do you buy clothes in shops or online?' }, help: { es: 'Compro en tiendas. / Compro por internet.', en: 'I buy in shops. / I buy online.' }, follow: [{ es: '¿Compras mucho o poco?', en: 'Do you buy a lot or a little?' }, { es: '¿Con quién vas de compras?', en: 'Who do you go shopping with?' }] },
            { q: { es: '¿Tienes ropa vieja favorita?', en: 'Do you have favorite old clothes?' }, help: { es: 'Sí, tengo una camiseta vieja. Es muy cómoda.', en: 'Yes, I have an old T-shirt. It is very comfortable.' }, follow: [{ es: '¿Cuántos años tiene?', en: 'How old is it?' }, { es: '¿Es de tu familia?', en: 'Is it from your family?' }] },
          ],
          words: [
            { es: 'la tienda', en: 'the shop' }, { es: 'la ropa', en: 'the clothes' }, { es: 'la chaqueta', en: 'the jacket' },
            { es: 'comprar', en: 'to buy' }, { es: 'el bolsillo', en: 'the pocket' }, { es: 'el descuento', en: 'the discount' },
          ],
        },
        A1: {
          scene: { es: 'Una calle de tiendas en el Soho. Edificios antiguos con escaleras de incendios negras. Valeria vende ropa de segunda mano: todo es único y nada cuesta más de cuarenta dólares.', en: 'A shopping street in SoHo. Old buildings with black fire escapes. Valeria sells secondhand clothes: everything is one of a kind and nothing costs more than forty dollars.' },
          opener: { es: 'Bienvenido. Aquí cada prenda tiene una historia. Este abrigo, por ejemplo, es de los años setenta. ¿Tú qué estilo tienes? ¿Clásico, deportivo, moderno?', en: 'Welcome. Here every piece has a story. This coat, for example, is from the seventies. What’s your style? Classic, sporty, modern?' },
          decide: {
            ask: { es: 'Tienes una cena elegante esta noche y solo treinta dólares. ¿Qué eliges?', en: 'You have a fancy dinner tonight and only thirty dollars. What do you choose?' },
            options: [
              { say: { es: 'Una camisa blanca clásica. Siempre funciona.', en: 'A classic white shirt. It always works.' }, then: { es: 'Valeria aprueba: «Simple y elegante. Te sobran cinco dólares».', en: 'Valeria approves: “Simple and elegant. You have five dollars left.”' } },
              { say: { es: 'Una chaqueta de terciopelo verde. ¡Quiero ser diferente!', en: 'A green velvet jacket. I want to be different!' }, then: { es: '«Valiente», dice Valeria. «Todos van a preguntar dónde la compraste».', en: '“Brave,” says Valeria. “Everyone’s going to ask where you bought it.”' } },
              { say: { es: 'Nada. Voy con mi ropa de hoy.', en: 'Nothing. I’ll go in what I’m wearing today.' }, then: { es: 'Valeria te mira de arriba abajo: «Mmm… ¿estás seguro?».', en: 'Valeria looks you up and down: “Hmm… are you sure?”' } },
            ],
          },
          twist: { es: 'Una clienta encuentra en un abrigo una foto antigua con un nombre y una fecha: «Brooklyn, 1975». Valeria dice que quiere buscar a la familia.', en: 'A customer finds an old photo in a coat with a name and a date: “Brooklyn, 1975.” Valeria says she wants to look for the family.' },
          questions: [
            { q: { es: '¿Cómo es tu estilo? Descríbelo en tres palabras.', en: 'What’s your style like? Describe it in three words.' }, help: { es: 'Mi estilo es… Normalmente llevo…', en: 'My style is… I usually wear…' }, follow: [{ es: '¿Tu estilo cambia en el trabajo y en casa?', en: 'Does your style change at work and at home?' }, { es: '¿Quién tiene un estilo que te gusta?', en: 'Who has a style you like?' }] },
            { q: { es: '¿Compras ropa de segunda mano? ¿Por qué sí o por qué no?', en: 'Do you buy secondhand clothes? Why or why not?' }, help: { es: 'Sí, porque es más barata y… / No, porque prefiero…', en: 'Yes, because it’s cheaper and… / No, because I prefer…' }, follow: [{ es: '¿Hay tiendas así en tu ciudad?', en: 'Are there shops like this in your city?' }, { es: '¿Qué haces con la ropa que no usas?', en: 'What do you do with the clothes you don’t wear?' }] },
            { q: { es: '¿Qué te pones para una ocasión especial?', en: 'What do you wear for a special occasion?' }, help: { es: 'Para una boda o una cena, me pongo…', en: 'For a wedding or a dinner, I wear…' }, follow: [{ es: '¿Te gusta arreglarte?', en: 'Do you like dressing up?' }, { es: '¿Cuál fue la última ocasión especial?', en: 'What was the last special occasion?' }] },
            { q: { es: '¿Cuánto dinero gastas normalmente en ropa al mes?', en: 'How much money do you usually spend on clothes a month?' }, help: { es: 'Gasto más o menos… / Casi nada, porque…', en: 'I spend about… / Almost nothing, because…' }, follow: [{ es: '¿En qué gastas más dinero?', en: 'What do you spend the most money on?' }, { es: '¿Compras en las rebajas?', en: 'Do you buy during sales?' }] },
          ],
          words: [
            { es: 'de segunda mano', en: 'secondhand' }, { es: 'la prenda', en: 'the item of clothing' }, { es: 'el abrigo', en: 'the coat' },
            { es: 'la escalera de incendios', en: 'the fire escape' }, { es: 'el terciopelo', en: 'velvet' }, { es: 'ponerse (ropa)', en: 'to put on, to wear' },
          ],
        },
        A2: {
          scene: { es: 'Valeria está enfadada. Una influencer entró a su tienda, se probó diez prendas, sacó cien fotos, no compró nada y ahora sube los vídeos diciendo «mi tienda secreta del Soho».', en: 'Valeria is angry. An influencer came into her shop, tried on ten items, took a hundred photos, bought nothing and is now posting videos calling it “my secret SoHo shop.”' },
          opener: { es: 'Lo peor es que desde ayer vienen veinte chicas por hora a sacarse fotos y casi nadie compra. Antes mi tienda era tranquila. ¿Tú alguna vez descubriste un lugar especial y después se llenó de gente?', en: 'The worst part is that since yesterday twenty girls an hour come to take photos and almost nobody buys. My shop used to be quiet. Have you ever discovered a special place and then it got crowded?' },
          decide: {
            ask: { es: 'Valeria quiere poner un cartel en la puerta. ¿Qué le sugieres que escriba?', en: 'Valeria wants to put a sign on the door. What do you suggest she write?' },
            options: [
              { say: { es: '«Fotos gratis con cualquier compra».', en: '“Free photos with any purchase.”' }, then: { es: 'Funciona: la gente compra calcetines de dos dólares para poder hacer fotos. Valeria no sabe si reír o llorar.', en: 'It works: people buy two-dollar socks so they can take photos. Valeria doesn’t know whether to laugh or cry.' } },
              { say: { es: '«Prohibido hacer fotos».', en: '“No photos allowed.”' }, then: { es: 'Algunos se van ofendidos. Una señora entra y dice: «¡Por fin una tienda normal!».', en: 'Some leave offended. A lady comes in and says: “Finally, a normal shop!”' } },
              { say: { es: '«Una foto, una historia»: cada prenda con la historia de su dueño anterior.', en: '“One photo, one story”: each item with the story of its previous owner.' }, then: { es: 'A Valeria le brillan los ojos. «Eso sí que no lo tiene nadie».', en: 'Valeria’s eyes light up. “Now that’s something nobody else has.”' } },
            ],
          },
          twist: { es: 'Entra la influencer otra vez. Esta vez viene con su madre, que reconoce en la tienda el abrigo que ella misma vendió hace veinte años.', en: 'The influencer walks in again. This time she comes with her mother, who recognizes in the shop the coat she herself sold twenty years ago.' },
          questions: [
            { q: { es: '¿Descubriste alguna vez un lugar especial que después se llenó de gente? ¿Qué pasó?', en: 'Have you ever discovered a special place that later got crowded? What happened?' }, help: { es: 'Había un… que me encantaba. Pero un día… y ahora…', en: 'There was a… that I loved. But one day… and now…' }, follow: [{ es: '¿Todavía vas?', en: 'Do you still go?' }, { es: '¿Le hablaste a alguien de ese lugar?', en: 'Did you tell anyone about that place?' }] },
            { q: { es: '¿Cuál es la prenda más antigua que tienes? ¿De dónde viene?', en: 'What’s the oldest item of clothing you own? Where does it come from?' }, help: { es: 'Tengo un/una… que era de… Lo compré / Me lo regalaron…', en: 'I have a… that belonged to… I bought it / I was given it…' }, follow: [{ es: '¿Por qué no la tiras?', en: 'Why don’t you throw it away?' }, { es: '¿Se la dejarías a alguien?', en: 'Would you lend it to someone?' }] },
            { q: { es: 'Compara comprar en una tienda pequeña y en una tienda grande o por internet.', en: 'Compare shopping in a small shop and in a big store or online.' }, help: { es: 'En una tienda pequeña… En cambio, en internet… Yo prefiero…', en: 'In a small shop… Online, on the other hand… I prefer…' }, follow: [{ es: '¿Dónde te atienden mejor?', en: 'Where do they serve you better?' }, { es: '¿Devolviste algo alguna vez? ¿Fue fácil?', en: 'Have you ever returned something? Was it easy?' }] },
            { q: { es: '¿Qué opinas de las personas que sacan fotos en todas partes para las redes?', en: 'What do you think of people who take photos everywhere for social media?' }, help: { es: 'Me parece que… porque… Aunque yo también a veces…', en: 'I think that… because… Although I also sometimes…' }, follow: [{ es: '¿Sigues a algún influencer?', en: 'Do you follow any influencers?' }, { es: '¿Compraste algo por una recomendación en redes?', en: 'Have you ever bought something because of a social media recommendation?' }] },
          ],
          words: [
            { es: 'probarse', en: 'to try on' }, { es: 'subir (a las redes)', en: 'to post (on social media)' }, { es: 'llenarse de gente', en: 'to get crowded' },
            { es: 'el cartel', en: 'the sign' }, { es: 'los calcetines', en: 'the socks' }, { es: 'reconocer', en: 'to recognize' },
          ],
        },
        B1: {
          scene: { es: 'Una gran cadena de moda rápida quiere alquilar el local de al lado y le ofrece a Valeria comprar su tienda por una cantidad que nunca ganaría vendiendo ropa usada. Le dan una semana para contestar.', en: 'A big fast-fashion chain wants to rent the space next door and offers to buy Valeria’s shop for an amount she would never earn selling used clothes. They give her a week to answer.' },
          opener: { es: 'Con ese dinero podría pagar la universidad de mi hija. Pero esta tienda existe para que la gente compre menos y mejor, y ellos venden camisetas de tres dólares que duran un mes. ¿Vender sería traicionar lo que defiendo, o ser realista?', en: 'With that money I could pay for my daughter’s college. But this shop exists so people buy less and better, and they sell three-dollar T-shirts that last a month. Would selling be betraying what I stand for, or being realistic?' },
          decide: {
            ask: { es: 'Valeria te pide que la ayudes a escribir la respuesta a la empresa. ¿Qué le recomiendas?', en: 'Valeria asks you to help her write the reply to the company. What do you recommend?' },
            options: [
              { say: { es: 'Que venda: sus principios no pagan la universidad.', en: 'To sell: her principles won’t pay for college.' }, then: { es: 'Valeria escribe «acepto» y lo borra tres veces. «¿Y si mi hija me lo reprocha algún día?».', en: 'Valeria types “I accept” and deletes it three times. “What if my daughter holds it against me someday?”' } },
              { say: { es: 'Que no venda, pero que negocie con la cadena una colaboración de reciclaje.', en: 'Not to sell, but to negotiate a recycling partnership with the chain.' }, then: { es: 'La empresa contesta rápido: les interesa «por su imagen». Valeria desconfía.', en: 'The company replies quickly: they’re interested “for their image.” Valeria is suspicious.' } },
              { say: { es: 'Que pida más tiempo y pregunte a sus clientes habituales.', en: 'To ask for more time and ask her regular customers.' }, then: { es: 'Esa tarde, veinte clientes firman una carta pidiéndole que no venda. Ninguno ofrece dinero.', en: 'That afternoon, twenty customers sign a letter asking her not to sell. None of them offers money.' } },
            ],
          },
          twist: { es: 'La hija de Valeria, que tiene diecisiete años, llega de la escuela con una bolsa de la cadena de moda rápida. No sabe nada de la oferta.', en: 'Valeria’s seventeen-year-old daughter comes home from school with a bag from the fast-fashion chain. She knows nothing about the offer.' },
          questions: [
            { q: { es: 'Si estuvieras en el lugar de Valeria, ¿venderías? ¿Qué pesaría más en tu decisión?', en: 'If you were in Valeria’s place, would you sell? What would weigh most in your decision?' }, help: { es: 'Si yo fuera ella, … porque lo que más me importa es… Sin embargo…', en: 'If I were her, I would… because what matters most to me is… However…' }, follow: [{ es: '¿Hay un precio por el que vendieras algo que amas?', en: 'Is there a price at which you’d sell something you love?' }, { es: '¿Le preguntarías a la hija?', en: 'Would you ask her daughter?' }] },
            { q: { es: '¿Es posible consumir de forma responsable con un sueldo bajo? ¿O es un lujo de quien puede pagarlo?', en: 'Is it possible to consume responsibly on a low salary? Or is it a luxury for those who can afford it?' }, help: { es: 'Creo que en parte sí, porque… pero también es verdad que…', en: 'I think partly yes, because… but it’s also true that…' }, follow: [{ es: '¿Qué haces tú para comprar mejor?', en: 'What do you do to shop better?' }, { es: '¿Quién tiene más responsabilidad: las empresas o los consumidores?', en: 'Who is more responsible: companies or consumers?' }] },
            { q: { es: '¿Qué le dirías a la hija de Valeria si vieras su bolsa? ¿Le dirías algo?', en: 'What would you say to Valeria’s daughter if you saw her bag? Would you say anything?' }, help: { es: 'Yo no le diría nada porque… / Le preguntaría… sin juzgarla.', en: 'I wouldn’t say anything because… / I’d ask her… without judging her.' }, follow: [{ es: '¿Cuándo es incoherente una persona y cuándo es simplemente humana?', en: 'When is a person inconsistent and when are they simply human?' }, { es: '¿En qué eres tú incoherente?', en: 'In what ways are you inconsistent?' }] },
            { q: { es: '¿Qué pierde una calle cuando las tiendas pequeñas son sustituidas por cadenas grandes?', en: 'What does a street lose when small shops are replaced by big chains?' }, help: { es: 'Pierde… y la gente deja de… Aunque también gana…', en: 'It loses… and people stop… Although it also gains…' }, follow: [{ es: '¿Ha pasado eso en tu barrio?', en: 'Has that happened in your neighborhood?' }, { es: '¿Debería el ayuntamiento proteger el comercio pequeño?', en: 'Should the city protect small businesses?' }] },
          ],
          words: [
            { es: 'la moda rápida', en: 'fast fashion' }, { es: 'el local', en: 'the commercial space' }, { es: 'traicionar', en: 'to betray' },
            { es: 'reprochar', en: 'to reproach, to hold against' }, { es: 'desconfiar', en: 'to be suspicious, to distrust' }, { es: 'el sueldo', en: 'the salary' },
          ],
        },
      },
    },
    // ------------------------------------------------------------ the rooftop
    {
      id: 'azotea',
      name: { es: 'La azotea', en: 'The rooftop' },
      who: { name: 'Mei', role: { es: 'apicultora urbana', en: 'urban beekeeper' } },
      levels: {
        A0: {
          scene: { es: 'Es una azotea. Hay flores, plantas y cajas de abejas. Mei es apicultora. Ve la ciudad desde arriba.', en: 'It is a rooftop. There are flowers, plants and beehives. Mei is a beekeeper. She sees the city from above.' },
          opener: { es: '¡Hola! Soy Mei. Aquí hay abejas. Hacen miel. ¿Te gusta la miel?', en: 'Hi! I am Mei. There are bees here. They make honey. Do you like honey?' },
          decide: {
            ask: { es: 'Mei abre una caja de abejas. ¿Qué haces?', en: 'Mei opens a beehive. What do you do?' },
            options: [
              { say: { es: 'Miro de cerca.', en: 'I look closely.' }, then: { es: 'Mei te da un sombrero especial. ¡Ves miles de abejas!', en: 'Mei gives you a special hat. You see thousands of bees!' } },
              { say: { es: 'Miro de lejos.', en: 'I look from far away.' }, then: { es: 'Mei dice: «Está bien. Las abejas son tranquilas».', en: 'Mei says: “That’s fine. The bees are calm.”' } },
              { say: { es: 'Pruebo la miel.', en: 'I taste the honey.' }, then: { es: '¡La miel es dulce y rica! Sabe a flores.', en: 'The honey is sweet and tasty! It tastes like flowers.' } },
            ],
          },
          twist: { es: '¡Una abeja está en tu nariz! No se mueve. ¿Qué dices?', en: 'A bee is on your nose! It doesn’t move. What do you say?' },
          questions: [
            { q: { es: '¿Comes miel?', en: 'Do you eat honey?' }, help: { es: 'Sí, como miel con pan. / No, no como miel.', en: 'Yes, I eat honey with bread. / No, I don’t eat honey.' }, follow: [{ es: '¿Con té o con yogur?', en: 'With tea or with yogurt?' }, { es: '¿Te gusta lo dulce?', en: 'Do you like sweet things?' }] },
            { q: { es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }, help: { es: 'Sí, tengo tres plantas. / No, no tengo.', en: 'Yes, I have three plants. / No, I don’t.' }, follow: [{ es: '¿Dónde están?', en: 'Where are they?' }, { es: '¿Tienes flores?', en: 'Do you have flowers?' }] },
            { q: { es: '¿Tienes miedo de los insectos?', en: 'Are you afraid of insects?' }, help: { es: 'Sí, un poco. / No, no tengo miedo.', en: 'Yes, a little. / No, I am not afraid.' }, follow: [{ es: '¿Qué insecto no te gusta?', en: 'Which insect do you not like?' }, { es: '¿Hay muchos insectos en tu casa?', en: 'Are there many insects in your home?' }] },
            { q: { es: '¿Vives en una casa o en un apartamento?', en: 'Do you live in a house or an apartment?' }, help: { es: 'Vivo en un apartamento. Está en el piso…', en: 'I live in an apartment. It is on floor…' }, follow: [{ es: '¿Tiene azotea o balcón?', en: 'Does it have a rooftop or a balcony?' }, { es: '¿Ves la calle desde tu ventana?', en: 'Do you see the street from your window?' }] },
          ],
          words: [
            { es: 'la azotea', en: 'the rooftop' }, { es: 'la abeja', en: 'the bee' }, { es: 'la miel', en: 'the honey' },
            { es: 'la flor', en: 'the flower' }, { es: 'arriba', en: 'up, above' }, { es: 'dulce', en: 'sweet' },
          ],
        },
        A1: {
          scene: { es: 'Atardecer en una azotea de Manhattan. Se ven los rascacielos y el río. Entre tomates y lavanda hay cuatro colmenas. Mei las cuida dos veces por semana.', en: 'Sunset on a Manhattan rooftop. You can see the skyscrapers and the river. Among the tomatoes and lavender there are four beehives. Mei looks after them twice a week.' },
          opener: { es: 'Mucha gente no lo sabe, pero en Nueva York hay abejas en muchas azoteas. Yo trabajo en un banco de lunes a viernes, y los sábados vengo aquí. Es mi forma de descansar. ¿Cómo descansas tú?', en: 'A lot of people don’t know it, but in New York there are bees on many rooftops. I work at a bank Monday to Friday, and on Saturdays I come here. It’s how I relax. How do you relax?' },
          decide: {
            ask: { es: 'Mei te ofrece un frasco de miel de regalo. Solo tiene dos. ¿Qué haces?', en: 'Mei offers you a jar of honey as a gift. She only has two. What do you do?' },
            options: [
              { say: { es: 'Lo acepto y le doy las gracias.', en: 'I accept it and thank her.' }, then: { es: 'Mei sonríe: «Es miel de la calle 57. Sabe a tilos y a ciudad».', en: 'Mei smiles: “It’s 57th Street honey. It tastes of linden trees and city.”' } },
              { say: { es: 'Le digo que no, que es para su familia.', en: 'I say no, it’s for her family.' }, then: { es: 'Mei insiste. Al final comparten una cucharada cada uno, mirando el río.', en: 'Mei insists. In the end you each share a spoonful, looking at the river.' } },
              { say: { es: 'Le ofrezco comprarlo.', en: 'I offer to buy it.' }, then: { es: '«No, no la vendo», dice Mei. «Pero puedes venir el sábado a ayudarme».', en: '“No, I don’t sell it,” says Mei. “But you can come on Saturday and help me.”' } },
            ],
          },
          twist: { es: 'Se oye una música muy fuerte. En la azotea de al lado empieza una fiesta. Los invitados los saludan y los invitan a pasar.', en: 'You hear very loud music. A party starts on the next rooftop. The guests wave at you and invite you over.' },
          questions: [
            { q: { es: 'Mei descansa con sus abejas. ¿Qué haces tú para descansar después de una semana difícil?', en: 'Mei relaxes with her bees. What do you do to relax after a hard week?' }, help: { es: 'Para descansar, yo… Me ayuda porque…', en: 'To relax, I… It helps me because…' }, follow: [{ es: '¿Lo haces solo o con alguien?', en: 'Do you do it alone or with someone?' }, { es: '¿Cuánto tiempo necesitas?', en: 'How much time do you need?' }] },
            { q: { es: '¿Tienes un pasatiempo muy diferente de tu trabajo o tus estudios?', en: 'Do you have a hobby very different from your work or studies?' }, help: { es: 'Sí, me gusta… aunque trabajo en… / No, mi trabajo es mi pasatiempo.', en: 'Yes, I like… although I work in… / No, my work is my hobby.' }, follow: [{ es: '¿Cuándo empezaste?', en: 'When did you start?' }, { es: '¿Qué pasatiempo quieres probar?', en: 'What hobby do you want to try?' }] },
            { q: { es: '¿Prefieres ver una ciudad desde arriba o caminar por sus calles? ¿Por qué?', en: 'Do you prefer seeing a city from above or walking through its streets? Why?' }, help: { es: 'Prefiero… porque… Desde arriba se ve… / En la calle…', en: 'I prefer… because… From above you see… / In the street…' }, follow: [{ es: '¿Cuál es el lugar más alto al que subiste?', en: 'What’s the highest place you’ve been up to?' }, { es: '¿Tienes miedo a las alturas?', en: 'Are you afraid of heights?' }] },
            { q: { es: '¿Qué vas a hacer este fin de semana?', en: 'What are you going to do this weekend?' }, help: { es: 'El sábado voy a… y el domingo…', en: 'On Saturday I’m going to… and on Sunday…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Vas a descansar o vas a estar ocupado?', en: 'Are you going to rest or be busy?' }] },
          ],
          words: [
            { es: 'la colmena', en: 'the beehive' }, { es: 'el rascacielos', en: 'the skyscraper' }, { es: 'el atardecer', en: 'the sunset' },
            { es: 'cuidar', en: 'to look after' }, { es: 'el frasco', en: 'the jar' }, { es: 'el pasatiempo', en: 'the hobby' },
          ],
        },
        A2: {
          scene: { es: 'Mei enseña la azotea a un grupo de estudiantes. Cuenta que hace cinco años el edificio estaba a punto de convertir este espacio en un aparcamiento de bicicletas. Ella convenció a los vecinos de hacer un huerto.', en: 'Mei is showing the rooftop to a group of students. She explains that five years ago the building was about to turn this space into bike parking. She convinced the neighbors to make a garden.' },
          opener: { es: 'Al principio nadie me hizo caso. Tuve que hacer pasteles con miel para cada vecino y llamar a cada puerta. ¿Tú alguna vez convenciste a un grupo de algo difícil? ¿Cómo lo hiciste?', en: 'At first nobody listened to me. I had to make honey cakes for every neighbor and knock on every door. Have you ever convinced a group of something difficult? How did you do it?' },
          decide: {
            ask: { es: 'Un estudiante pregunta si puede tocar una colmena sin protección. Mei te mira: «¿Tú qué dices?».', en: 'A student asks whether he can touch a hive without protection. Mei looks at you: “What do you say?”' },
            options: [
              { say: { es: 'Que no: primero el traje, luego la curiosidad.', en: 'No: first the suit, then the curiosity.' }, then: { es: 'El estudiante se pone el traje y le queda enorme. Todos se ríen.', en: 'The student puts on the suit and it’s huge on him. Everyone laughs.' } },
              { say: { es: 'Que sí, pero despacio y con Mei a su lado.', en: 'Yes, but slowly and with Mei next to him.' }, then: { es: 'Mei lo guía. Una abeja camina por su mano y él no respira hasta que se va.', en: 'Mei guides him. A bee walks across his hand and he doesn’t breathe until it leaves.' } },
              { say: { es: 'Que antes nos explique por qué quiere hacerlo.', en: 'That first he tell us why he wants to do it.' }, then: { es: 'El chico confiesa que es alérgico a las picaduras… y que quería «superar el miedo».', en: 'The boy confesses he’s allergic to stings… and that he wanted to “overcome his fear.”' } },
            ],
          },
          twist: { es: 'Mei abre una colmena y está casi vacía: las abejas se fueron. Se queda en silencio. Los estudiantes no saben qué decir.', en: 'Mei opens a hive and it’s almost empty: the bees have left. She falls silent. The students don’t know what to say.' },
          questions: [
            { q: { es: '¿Convenciste alguna vez a un grupo de algo difícil? ¿Qué hiciste?', en: 'Have you ever convinced a group of something difficult? What did you do?' }, help: { es: 'Una vez quería que… Primero… luego… y al final…', en: 'Once I wanted… First… then… and in the end…' }, follow: [{ es: '¿Quién estaba más en contra?', en: 'Who was most against it?' }, { es: '¿Valió la pena?', en: 'Was it worth it?' }] },
            { q: { es: '¿Tuviste alguna vez un huerto o plantas que cuidabas? ¿Cómo te fue?', en: 'Have you ever had a garden or plants you looked after? How did it go?' }, help: { es: 'Sí, cuando… tenía… Al principio… pero luego…', en: 'Yes, when… I had… At first… but then…' }, follow: [{ es: '¿Qué crecía mejor?', en: 'What grew best?' }, { es: '¿Se te murió alguna planta? ¿Por qué?', en: 'Did any plant die on you? Why?' }] },
            { q: { es: 'Compara un barrio con espacios verdes y otro sin ellos. ¿Dónde preferirías vivir?', en: 'Compare a neighborhood with green spaces and one without. Where would you rather live?' }, help: { es: 'Un barrio con… es más… En cambio, uno sin…', en: 'A neighborhood with… is more… On the other hand, one without…' }, follow: [{ es: '¿Cómo es tu barrio?', en: 'What’s your neighborhood like?' }, { es: '¿Qué espacio cambiarías?', en: 'Which space would you change?' }] },
            { q: { es: 'Mei se queda en silencio cuando ve la colmena vacía. ¿Qué le dirías tú?', en: 'Mei falls silent when she sees the empty hive. What would you say to her?' }, help: { es: 'Le diría que… y le preguntaría si…', en: 'I’d tell her that… and I’d ask her whether…' }, follow: [{ es: '¿Cómo consuelas a alguien?', en: 'How do you comfort someone?' }, { es: '¿Prefieres que te consuelen con palabras o en silencio?', en: 'Do you prefer to be comforted with words or in silence?' }] },
          ],
          words: [
            { es: 'el huerto', en: 'the vegetable garden' }, { es: 'convencer', en: 'to convince' }, { es: 'el traje', en: 'the suit' },
            { es: 'la picadura', en: 'the sting' }, { es: 'ser alérgico a', en: 'to be allergic to' }, { es: 'vacío', en: 'empty' },
          ],
        },
        B1: {
          scene: { es: 'El dueño del edificio quiere convertir la azotea en un bar exclusivo con piscina. El dinero del alquiler bajaría las cuotas de todos los vecinos. La votación es mañana y Mei necesita la mitad más uno.', en: 'The building’s owner wants to turn the rooftop into an exclusive bar with a pool. The rent money would lower the fees for all the residents. The vote is tomorrow and Mei needs half plus one.' },
          opener: { es: 'Sé que hay vecinos que lo pasan mal para pagar y que el bar les ayudaría. Yo no quiero que nadie pague por mi afición. Pero aquí vienen niños, mayores y abejas, y un bar sería solo para quien pueda pagar veinte dólares por un cóctel. ¿Cómo defenderías algo que no da dinero?', en: 'I know there are neighbors who struggle to pay and the bar would help them. I don’t want anyone to pay for my hobby. But kids, older people and bees come here, and a bar would only be for people who can pay twenty dollars for a cocktail. How would you defend something that doesn’t make money?' },
          decide: {
            ask: { es: 'Mei te deja dos minutos en la reunión de vecinos. ¿Con qué argumento empiezas?', en: 'Mei gives you two minutes at the residents’ meeting. Which argument do you start with?' },
            options: [
              { say: { es: 'Con números: el huerto ahorra calor en verano y reduce las facturas de los pisos de arriba.', en: 'With numbers: the garden keeps the building cooler in summer and lowers the bills on the top floors.' }, then: { es: 'Un vecino del último piso asiente despacio. El dueño pide ver «esos estudios».', en: 'A neighbor from the top floor nods slowly. The owner asks to see “those studies.”' } },
              { say: { es: 'Con historias: los niños que aprendieron aquí de dónde viene la comida.', en: 'With stories: the kids who learned here where food comes from.' }, then: { es: 'Una madre se levanta y cuenta que su hijo ahora come verduras. Hay risas y aplausos.', en: 'A mother stands up and says her son now eats vegetables. There’s laughter and applause.' } },
              { say: { es: 'Con un compromiso: medio bar, medio huerto.', en: 'With a compromise: half bar, half garden.' }, then: { es: 'Mei te mira preocupada: las abejas y la música alta no combinan bien.', en: 'Mei looks at you, worried: bees and loud music don’t mix well.' } },
            ],
          },
          twist: { es: 'Una vecina que siempre apoyó a Mei anuncia que votará por el bar: perdió su trabajo y no puede pagar la cuota. Mei se acerca a ella después y le dice que la entiende.', en: 'A neighbor who always supported Mei announces she’ll vote for the bar: she lost her job and can’t pay the fee. Mei goes up to her afterward and tells her she understands.' },
          questions: [
            { q: { es: '¿Cómo defenderías un espacio que no da dinero pero mejora la vida de la gente?', en: 'How would you defend a space that doesn’t make money but improves people’s lives?' }, help: { es: 'Yo argumentaría que… Además… Sería un error pensar que…', en: 'I would argue that… Besides… It would be a mistake to think that…' }, follow: [{ es: '¿Qué espacio así existe en tu ciudad?', en: 'What space like that exists in your city?' }, { es: '¿Quién debería pagarlo?', en: 'Who should pay for it?' }] },
            { q: { es: 'Si fueras la vecina que perdió su trabajo, ¿votarías por el bar? ¿Te sentirías culpable?', en: 'If you were the neighbor who lost her job, would you vote for the bar? Would you feel guilty?' }, help: { es: 'Probablemente votaría… porque… Aunque me sentiría…', en: 'I would probably vote… because… Although I would feel…' }, follow: [{ es: '¿Las decisiones económicas pueden ser egoístas?', en: 'Can economic decisions be selfish?' }, { es: '¿Votaste alguna vez en contra de lo que pensabas?', en: 'Have you ever voted against what you believed?' }] },
            { q: { es: '¿Funciona bien la regla de «la mitad más uno» para decidir sobre un espacio compartido?', en: 'Does the “half plus one” rule work well for deciding on a shared space?' }, help: { es: 'Por un lado es justo porque… pero por otro, la otra mitad…', en: 'On the one hand it’s fair because… but on the other, the other half…' }, follow: [{ es: '¿Qué alternativa propones?', en: 'What alternative do you propose?' }, { es: '¿Cómo se toman las decisiones en tu familia o en tu trabajo?', en: 'How are decisions made in your family or at your job?' }] },
            { q: { es: '¿Qué te parece la reacción de Mei con su vecina? ¿Es fácil separar la amistad de un desacuerdo así?', en: 'What do you think of Mei’s reaction to her neighbor? Is it easy to separate friendship from a disagreement like this?' }, help: { es: 'Me parece… porque… A mí me costaría…', en: 'I think it’s… because… I’d find it hard to…' }, follow: [{ es: '¿Perdiste alguna amistad por una discusión?', en: 'Have you ever lost a friendship over an argument?' }, { es: '¿Cuándo es mejor no discutir?', en: 'When is it better not to argue?' }] },
          ],
          words: [
            { es: 'la cuota', en: 'the fee' }, { es: 'la votación', en: 'the vote' }, { es: 'la afición', en: 'the hobby, the passion' },
            { es: 'pasarlo mal', en: 'to struggle, to have a hard time' }, { es: 'un compromiso', en: 'a compromise' }, { es: 'la factura', en: 'the bill' },
          ],
        },
      },
    },
  ],
};
