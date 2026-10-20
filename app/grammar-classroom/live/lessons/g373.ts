import type { LiveLesson } from '../types';

/**
 * Lesson 373 · A2 · Preposiciones de movimiento y ubicación (course unit G073).
 * One scene runs through the class: a Saturday bike route. Elena Soto, a guide,
 * takes a small group from the old train station to lago Azul (35 km), towards
 * the north along the river path, through two tunnels, with a stop in the
 * village of San Miguel, where Gabriel waits with the support van. Raúl Méndez
 * is new in the group; Irene is another cyclist. In the voice message Elena
 * (Mexican voice, ustedes) tells the group about a change of route.
 * Builds on G027 (a, de, en), G028 (al, del), G029 (cerca de, lejos de, aquí,
 * allí) and G013 (hay / estar). New content: movement with desde, hasta, hacia
 * and por (route: «paso por el túnel»), the pairs de… a / desde… hasta, en +
 * transport and a pie, and location phrases (delante de, detrás de, enfrente
 * de, al lado de, encima de / sobre, debajo de, dentro de, fuera de, entre…
 * y…). Anchor: Voy hacia el norte; paso por el túnel. Contrasts: a (destination
 * reached) / hacia (direction) / hasta (end point); delante de / enfrente de.
 * Mistakes: *llegar en San Miguel, *pasar para el túnel, *detrás la cafetería.
 * Variation note: entrar en (frequent in Spain) / entrar a (frequent in the
 * Americas). Por as cause and para belong to class 074. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 373,
  level: 'A2',
  title: 'Preposiciones de movimiento y ubicación',
  subtitle: 'Explicar una ruta (desde dónde, hacia dónde, por dónde, hasta dónde) y decir con precisión dónde está cada cosa.',
  legend: [
    { tone: 'teal', label: 'ORIGEN · de, desde (from)' },
    { tone: 'blue', label: 'DESTINO · a, hacia, hasta (to, towards, as far as)' },
    { tone: 'violet', label: 'CAMINO Y MEDIO · por (through, along) · en tren, a pie' },
    { tone: 'orange', label: 'UBICACIÓN · en, entre, delante de, detrás de… (where it is)' },
  ],
  optionNotes: {
    para: '«Para» no dice por dónde pasas. Para el camino (through, along, via) usa **por**: «pasamos por el túnel». Por y para: clase 074.',
    detrás: 'Delante de un lugar, «detrás» necesita **de**: «detrás de la cafetería», «detrás del bar».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una ruta en bicicleta', coach: '¿Por dónde vamos? Which way do we go?',
      steps: [
        { title: 'Sábado en bici · Saturday by bike', blocks: [
          { kind: 'lead', text: 'Elena Soto es guía de rutas en bicicleta. Este sábado su grupo sale **desde** la estación vieja y va **hasta** el lago Azul. Primero van **hacia** el norte y pasan **por** dos túneles. Raúl Méndez es nuevo en el grupo y tiene muchas preguntas: ¿por dónde vamos?, ¿dónde paramos?, ¿dónde está la camioneta? Hoy aprendes las preposiciones para moverte y para situar las cosas.', en: 'Elena Soto leads bike tours. This Saturday her group leaves from the old station and goes as far as lago Azul. First they go towards the north and pass through two tunnels. Raúl Méndez is new in the group and has lots of questions: which way do we go? where do we stop? where is the van? Today you learn the prepositions for moving and for placing things.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Elena y tu alumno repite. Después tu alumno dice qué frase habla de un movimiento y qué frase habla de un lugar fijo.', self: 'Lee las tres frases en voz alta. ¿Cuáles hablan de un movimiento? ¿Cuál habla de un lugar fijo? (Which ones are about movement? Which one is about a fixed place?)' } },
          { kind: 'compare', title: 'Tres frases de Elena · Three sentences from Elena', columns: [
            { tone: 'blue', label: 'HACIA · la dirección', sentence: 'Vamos [[hacia|blue]] el norte.', idea: 'Movimiento: la dirección del camino.', en: 'We are going towards the north.' },
            { tone: 'violet', label: 'POR · el camino', sentence: 'Pasamos [[por|violet]] el túnel.', idea: 'Movimiento: el lugar que atraviesas.', en: 'We go through the tunnel.' },
            { tone: 'orange', label: 'ENFRENTE DE · el lugar', sentence: 'El grupo está [[enfrente de|orange]] la estación.', idea: 'Sin movimiento: dónde está algo.', en: 'The group is opposite the station.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Vamos hacia el norte»: ¿qué dice «hacia»?', options: ['El lugar donde estamos.', 'El final exacto de la ruta.', 'La dirección del movimiento.'], answer: 2, why: '«Hacia» indica la dirección: towards.', en: '“Vamos hacia el norte”: what does “hacia” say?' },
            { prompt: '«Pasamos por el túnel» significa…', options: ['We go through the tunnel.', 'We are in front of the tunnel.', 'We go to the tunnel.'], answer: 0, why: '«Pasar por» un lugar: entras por un lado y sales por el otro (through).', en: '“Pasamos por el túnel” means…' },
            { prompt: '¿Qué frase habla de un lugar fijo, sin movimiento?', options: ['Salimos desde la estación.', 'La fuente está al lado de la estación.', 'Vamos hasta el lago.'], answer: 1, why: 'Estar + expresión de lugar: dónde está algo. No hay movimiento.', en: 'Which sentence is about a fixed place, with no movement?' },
          ] },
        ] },
        { title: 'Moverse · Moving', mascot: '/brand/mascot/walking.webp', coach: 'Desde aquí hasta allí. From here to there.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DESTINO · A · HACIA · HASTA', question: '¿Adónde vas? ¿Hacia dónde? ¿Hasta dónde?', en: 'Where are you going? In which direction? How far?', formula: ['ir / llegar + a (al) + lugar', 'ir / caminar + hacia + dirección', 'ir / seguir + hasta + el final'],
            meaning: 'Ya conoces **a** para el destino (clase 027): «Llegamos **a** San Miguel». **Hacia** solo dice la dirección: no dice si llegas. **Hasta** marca el final del recorrido: vas a ese punto y allí paras.',
            examples: [
              { es: 'A las once llegamos [[al|blue]] pueblo.', en: 'At eleven we arrive in the village.' },
              { es: 'Después vamos [[hacia|blue]] el norte, por el río.', en: 'Then we go towards the north, along the river.' },
              { es: 'Seguimos [[hasta|blue]] el lago y allí comemos.', en: 'We keep going as far as the lake and we eat there.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'ORIGEN Y CAMINO · DE · DESDE · POR', question: '¿De dónde sales? ¿Por dónde pasas?', en: 'Where do you leave from? Which way do you go?', formula: ['salir / venir + de / desde + lugar', 'pasar / ir + por + lugar', 'de… a / desde… hasta'],
            meaning: '**De** y **desde** marcan el punto de salida; **desde** insiste en el punto de inicio y va muy bien con **hasta**. **Por** dice el camino: el lugar que atraviesas o recorres (through, along, via).',
            examples: [
              { es: 'Salimos [[desde|teal]] la estación vieja [[hasta|blue]] el lago.', en: 'We set off from the old station to the lake.' },
              { es: '[[Del|teal]] pueblo [[al|blue]] lago hay quince kilómetros.', en: 'From the village to the lake it is fifteen kilometres.' },
              { es: 'Vamos [[por|violet]] el camino del río y pasamos [[por|violet]] dos túneles.', en: 'We go along the river path and through two tunnels.' },
            ],
            note: 'Las dos parejas son normales: **de… a** (del pueblo al lago) y **desde… hasta** (desde la estación hasta el lago). Recuerda: de + el = **del**, a + el = **al** (clase 028).' },
          { kind: 'table', title: 'Seis preguntas, seis respuestas · Six questions, six answers', head: ['Pregunta', 'Preposición', 'Ejemplo'], rows: [
            ['¿Adónde? (where to?)', '**a**', 'Vamos [[al|blue]] lago.'],
            ['¿Hacia dónde? (which direction?)', '**hacia**', 'Vamos [[hacia|blue]] el norte.'],
            ['¿Hasta dónde? (how far?)', '**hasta**', 'Seguimos [[hasta|blue]] el puente.'],
            ['¿De dónde? ¿Desde dónde? (where from?)', '**de · desde**', 'Salimos [[de|teal]] la estación.'],
            ['¿Por dónde? (which way?)', '**por**', 'Pasamos [[por|violet]] el túnel.'],
            ['¿Cómo vas? (how do you travel?)', '**en** + transporte · **a pie**', 'Volvemos [[en tren|violet]]. Vamos [[a pie|violet]].'],
          ], note: 'Transporte con **en**: en bici, en tren, en metro, en autobús. La excepción frecuente: **a pie** (on foot).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El camino termina en el puente. Seguimos ___ el puente y allí paramos.', options: ['hasta', 'hacia', 'por'], answer: 0, why: 'El puente es el final del recorrido: hasta.', en: 'The path ends at the bridge. We keep going as far as the bridge and stop there.' },
            { prompt: 'Para llegar al lago, pasamos ___ San Miguel.', options: ['en', 'a', 'por'], answer: 2, why: 'San Miguel está en el camino: lo atravesamos. Pasar por.', en: 'To get to the lake, we go through San Miguel.' },
            { prompt: 'Raúl viene a la estación ___ metro.', options: ['a', 'en', 'por'], answer: 1, why: 'Transporte: en metro, en bici, en tren.', en: 'Raúl comes to the station by metro.' },
          ] },
        ] },
        { title: '¿Dónde está? · Where is it?', mascot: '/brand/mascot/studying.webp', coach: 'Delante, detrás, entre. In front, behind, between.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'UBICACIÓN · ESTAR + LUGAR', question: '¿Dónde está exactamente?', en: 'Where exactly is it?', formula: ['estar + en + lugar', 'estar + delante de / detrás de / al lado de… + lugar', 'estar + entre + A + y + B'],
            meaning: 'Con **en** dices el lugar general (in, on, at). Para ser más preciso, usas una expresión de lugar. Casi todas terminan en **de**: delante **de**, detrás **de**, encima **de**. **Entre** va solo: entre A y B.',
            examples: [
              { es: 'Las luces están [[en|orange]] la mochila.', en: 'The lights are in the backpack.' },
              { es: 'La camioneta está [[detrás de|orange]] la cafetería.', en: 'The van is behind the café.' },
              { es: 'Comemos [[entre|orange]] la playa y el puente.', en: 'We eat between the beach and the bridge.' },
            ] },
          { kind: 'table', title: 'Expresiones de lugar · Place expressions', head: ['Expresión', 'English', 'Ejemplo de la ruta'], rows: [
            ['**delante de** · **detrás de**', 'in front of · behind', 'La bici está delante de la fuente.'],
            ['**encima de** (= **sobre**) · **debajo de**', 'on top of, on · under', 'El casco está encima de la mesa. Comemos debajo de los árboles.'],
            ['**dentro de** · **fuera de**', 'inside · outside', 'Dentro del túnel no hay luz.'],
            ['**al lado de** · **enfrente de**', 'next to · opposite', 'La fuente está al lado de la estación.'],
            ['**cerca de** · **lejos de**', 'near · far from', 'El lago está lejos de la ciudad.'],
            ['**a la derecha de** · **a la izquierda de**', 'to the right of · to the left of', 'La cafetería está a la derecha de la iglesia.'],
            ['**entre** … **y** …', 'between … and …', 'El pueblo está entre el río y la montaña.'],
          ], note: 'Con el artículo «el»: detrás **del** bar, al lado **del** puente (de + el = del).' },
          { kind: 'tip', icon: '💡', title: 'Delante de o enfrente de · In front of or opposite', text: '**Delante de** la estación: muy cerca de la puerta, en el mismo lado de la calle. **Enfrente de** la estación: al otro lado de la calle o de la plaza, cara a cara. Elena dice: «El grupo está enfrente de la estación», porque los ciclistas esperan al otro lado de la calle.', en: '“Delante de la estación”: right by the door, on the same side of the street. “Enfrente de la estación”: on the other side of the street or the square, facing it. Elena says “El grupo está enfrente de la estación” because the cyclists wait on the other side of the street.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No ves la camioneta desde la calle: está ___ la cafetería.', options: ['detrás de', 'encima de', 'delante de'], answer: 0, why: 'Si no la ves desde la calle, está en la parte de atrás: detrás de.', en: 'You can’t see the van from the street: it is behind the café.' },
            { prompt: 'La fuente está ___ la estación y la iglesia.', options: ['al lado', 'entre', 'en'], answer: 1, why: 'Dos lugares, uno a cada lado: entre A y B.', en: 'The fountain is between the station and the church.' },
            { prompt: 'Las luces están ___ de la mochila.', options: ['dentro', 'en', 'entre'], answer: 0, why: 'Dentro de = inside. «En de» y «entre de» no existen.', en: 'The lights are inside the backpack.' },
          ] },
        ] },
        { title: 'A, hacia, hasta · Three ways to go', mascot: '/brand/mascot/standing.webp', coach: '¿Llegas o no llegas? Do you get there or not?', blocks: [
          { kind: 'compare', title: 'Tres frases con el lago · Three sentences with the lake', columns: [
            { tone: 'blue', label: 'A · el destino', sentence: 'Vamos [[al|blue]] lago.', idea: 'El lago es el destino: queremos llegar allí.', en: 'We are going to the lake.' },
            { tone: 'blue', label: 'HACIA · la dirección', sentence: 'Vamos [[hacia|blue]] el lago.', idea: 'Vamos en esa dirección. No dice si llegamos.', en: 'We are heading towards the lake.' },
            { tone: 'blue', label: 'HASTA · el final', sentence: 'Vamos [[hasta|blue]] el lago.', idea: 'El lago es el final: no vamos más lejos.', en: 'We go as far as the lake.' },
          ] },
          { kind: 'decide', title: '¿Qué preposición? · Which preposition?', steps: [
            { q: '¿Hay movimiento? (ir, salir, llegar, pasar, seguir, caminar…)', yes: 'next', no: 'Es un lugar fijo: **en** o una expresión de lugar (delante de, entre…).' },
            { q: '¿Hablas del punto de salida?', yes: 'Usa **de** o **desde**: «Salimos desde la estación».', no: 'next' },
            { q: '¿Hablas del lugar que atraviesas o recorres?', yes: 'Usa **por**: «Pasamos por el túnel».', no: 'next' },
            { q: '¿Es el final del recorrido, donde paras?', yes: 'Usa **hasta**: «Seguimos hasta el lago».', no: '¿Solo la dirección? **hacia**. ¿El destino? **a**: «Llegamos a San Miguel».' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Entrar en, entrar a · Two correct options', text: 'Con **llegar** el destino lleva **a**: «Llegamos **a** San Miguel» (no «en San Miguel»). Con **entrar** hay variación: «Entramos **en** el túnel» es frecuente en España; «Entramos **al** túnel» es frecuente en América. Las dos formas son correctas.', en: 'With “llegar”, the destination takes “a”: “Llegamos a San Miguel” (not “en San Miguel”). With “entrar” there is variation: “Entramos en el túnel” is common in Spain; “Entramos al túnel” is common in Latin America. Both are correct.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hay mucha niebla. No sabemos si llegamos, pero vamos ___ el pueblo.', options: ['hacia', 'en', 'hasta'], answer: 0, why: 'Solo sabemos la dirección, no si llegamos: hacia.', en: 'It is very foggy. We don’t know if we will get there, but we are heading towards the village.' },
            { prompt: 'Este tren no va al centro: solo va ___ la estación Norte. Allí termina.', options: ['hasta', 'hacia', 'por'], answer: 0, why: 'La estación Norte es el final del recorrido: hasta.', en: 'This train doesn’t go to the centre: it only goes as far as Norte station. It ends there.' },
            { prompt: 'Elena y el grupo llegan ___ lago a la una.', options: ['en el', 'al', 'por el'], answer: 1, why: 'Llegar + a: el destino. a + el = al.', en: 'Elena and the group arrive at the lake at one o’clock.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Una palabra pequeña cambia todo. One small word changes everything.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué preposición falla y por qué. Después aparece la corrección.', self: 'Lee cada frase y busca la preposición que falla. Toca para ver la corrección. (Find the wrong preposition.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Llegamos en San Miguel a las once.', right: 'Llegamos a San Miguel a las once.', why: 'Llegar + destino: **a**. «En» es para el lugar donde estás. (arrive in/at → llegar a)' },
            { wrong: 'Pasamos para dos túneles muy oscuros.', right: 'Pasamos por dos túneles muy oscuros.', why: 'El lugar que atraviesas lleva **por** (through). «Para» no dice el camino.' },
            { wrong: 'La camioneta está detrás la cafetería.', right: 'La camioneta está detrás de la cafetería.', why: 'Las expresiones de lugar necesitan **de** delante del lugar: detrás de, delante de, encima de.' },
            { wrong: 'Estamos a la estación, ¿dónde estás?', right: 'Estamos en la estación, ¿dónde estás?', why: 'Estar + lugar, sin movimiento: **en**. «A» es para el destino.' },
            { wrong: 'Raúl viene a la ruta a bicicleta.', right: 'Raúl viene a la ruta en bicicleta.', why: 'Transporte con **en**: en bicicleta, en tren. La excepción es «a pie».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Irene llega ___ la estación a las nueve menos cuarto.', options: ['en', 'a', 'por'], answer: 1, why: 'Llegar + destino: a.', en: 'Irene arrives at the station at a quarter to nine.' },
            { prompt: 'El casco está ___ de la mesa.', options: ['entre', 'encima', 'sobre'], answer: 1, why: 'Encima de = on top of. «Sobre» va sin «de»: sobre la mesa.', en: 'The helmet is on the table.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe el camino de su casa a la parada de autobús o de metro más cercana con tres frases: «Salgo de…», «Paso por…», «La parada está enfrente de / al lado de…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Antes de salir', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En el punto de encuentro · At the meeting point', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Raúl. Después tu alumno toca cada palabra marcada y dice si es movimiento o lugar.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿movimiento o lugar? (Movement or place?)' } },
          { kind: 'explore', title: 'La ruta del lago', setting: 'Sábado, nueve menos cuarto, delante de la estación vieja. Raúl, el ciclista nuevo, habla con Elena, la guía. Se tutean. (Saturday, a quarter to nine. Raúl, the new cyclist, talks to Elena, the guide.)', lines: [
            { who: 'Raúl', text: 'Hola, ¿eres Elena? Soy Raúl, el nuevo. ¿Salimos [[desde|teal]] aquí?', en: 'Hi, are you Elena? I’m Raúl, the new one. Do we set off from here?' },
            { who: 'Elena', text: '¡Hola, Raúl! Sí, a las nueve. El grupo está ahí, [[enfrente de|orange]] la estación, [[al lado de|orange]] la fuente.', en: 'Hi, Raúl! Yes, at nine. The group is over there, opposite the station, next to the fountain.' },
            { who: 'Raúl', text: '¿Y adónde vamos exactamente?', en: 'And where exactly are we going?' },
            { who: 'Elena', text: 'Vamos [[hasta|blue]] el lago Azul: son treinta y cinco kilómetros. Primero vamos [[hacia|blue]] el norte, [[por|violet]] el camino del río.', en: 'We go as far as lago Azul: it’s thirty-five kilometres. First we head north, along the river path.' },
            { who: 'Raúl', text: '¿Es difícil?', en: 'Is it hard?' },
            { who: 'Elena', text: 'No, es casi plano. Pero pasamos [[por|violet]] dos túneles y [[dentro de|orange]] los túneles no hay luz. ¿Tienes luces?', en: 'No, it’s almost flat. But we go through two tunnels and inside the tunnels there is no light. Do you have lights?' },
            { who: 'Raúl', text: 'Sí, están [[en|orange]] la mochila. ¿Hay alguna parada?', en: 'Yes, they’re in my backpack. Is there a stop?' },
            { who: 'Elena', text: 'Sí. A las once llegamos [[a|blue]] San Miguel, un pueblo pequeño. Gabriel nos espera allí con la camioneta, [[detrás de|orange]] la cafetería.', en: 'Yes. At eleven we arrive in San Miguel, a small village. Gabriel waits for us there with the van, behind the café.' },
            { who: 'Raúl', text: '¿Y dónde comemos?', en: 'And where do we eat?' },
            { who: 'Elena', text: 'En el lago, [[debajo de|orange]] los árboles, [[entre|orange]] la playa y el puente. Y a las cinco volvemos [[en tren|violet]].', en: 'At the lake, under the trees, between the beach and the bridge. And at five we come back by train.' },
            { who: 'Raúl', text: '¡Perfecto! Entonces voy a dejar la bici con el grupo.', en: 'Perfect! Then I’ll leave my bike with the group.' },
            { who: 'Elena', text: 'Sí, déjala [[delante de|orange]] la fuente: primero hacemos una foto de grupo.', en: 'Yes, leave it in front of the fountain: first we take a group photo.' },
          ], notes: {
            'desde': '**Desde** + lugar: el punto de salida. Aquí también es correcto «¿Salimos de aquí?».',
            'enfrente de': 'Al otro lado de la calle, cara a cara con la estación (opposite). No es «delante de».',
            'al lado de': 'Next to. Muy frecuente. Con «el»: al lado **del** puente.',
            'hasta': 'El final del recorrido: el lago. Allí termina la ruta (as far as).',
            'hacia': 'La dirección (towards). Es la frase ancla de la clase: «Vamos hacia el norte».',
            'por': '**Por** + lugar: el camino que recorres (along) o el lugar que atraviesas (through): por el camino del río, por dos túneles.',
            'dentro de': 'Inside. Lo contrario es **fuera de** (outside).',
            'en': 'Estar + **en**: el lugar general donde está algo, sin movimiento (in).',
            'a': 'Llegar + **a** + destino. Nunca «llegar en San Miguel».',
            'detrás de': 'Behind. La camioneta está en la parte de atrás de la cafetería: desde la calle no se ve.',
            'debajo de': 'Under. Lo contrario es **encima de** o **sobre**.',
            'entre': '**Entre** A **y** B: un lugar en el medio. Va sin «de».',
            'en tren': '**En** + transporte: en tren, en bici, en autobús. Pero: **a pie**.',
            'delante de': 'In front of: en el mismo lado que la fuente, muy cerca.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde espera el grupo?', options: ['Detrás de la cafetería.', 'Dentro de la estación.', 'Enfrente de la estación, al lado de la fuente.'], answer: 2, why: '«El grupo está ahí, enfrente de la estación, al lado de la fuente».', en: 'Where is the group waiting?' },
            { prompt: '¿Por qué necesita luces Raúl?', options: ['Porque vuelven de noche.', 'Porque pasan por dos túneles sin luz.', 'Porque salen muy temprano.'], answer: 1, why: '«Pasamos por dos túneles y dentro de los túneles no hay luz».', en: 'Why does Raúl need lights?' },
            { prompt: '¿Cómo vuelven a casa?', options: ['En bici.', 'En la camioneta de Gabriel.', 'En tren.'], answer: 2, why: '«A las cinco volvemos en tren».', en: 'How do they get back home?' },
          ] },
        ] },
        { title: '¿Qué dice cada preposición? · What does each one say?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La ruta de Elena · Elena’s route', categories: [
            { id: 'origen', label: 'ORIGEN · de, desde', tone: 'teal' },
            { id: 'destino', label: 'DESTINO · a, hacia, hasta', tone: 'blue' },
            { id: 'camino', label: 'CAMINO · por', tone: 'violet' },
            { id: 'lugar', label: 'UBICACIÓN · lugar fijo', tone: 'orange' },
          ], items: [
            { text: 'Salimos desde la estación vieja.', answer: 'origen', why: 'El punto de salida: desde.' },
            { text: 'Vamos por el camino del río.', answer: 'camino', why: 'El camino que recorren: por.' },
            { text: 'La camioneta está detrás de la cafetería.', answer: 'lugar', why: 'Estar + expresión de lugar: no hay movimiento.' },
            { text: 'A las once llegamos a San Miguel.', answer: 'destino', why: 'Llegar a: el destino de la primera parte.' },
            { text: 'Comemos debajo de los árboles.', answer: 'lugar', why: 'Dónde comen: un lugar fijo.' },
            { text: 'Seguimos hasta el lago.', answer: 'destino', why: 'El final del recorrido: hasta.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Por dónde pasa la ruta? ¿Dónde está la camioneta?». Tu alumno responde de memoria, con una frase de movimiento y una de lugar.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Movimiento o lugar. Movement or place.',
      steps: [
        { title: 'En la ruta · On the route', blocks: [
          { kind: 'choice', items: [
            { context: 'Irene se presenta. (Irene introduces herself.)', prompt: 'Vengo ___ Valdeluz, un pueblo a diez kilómetros.', options: ['de', 'en', 'por'], answer: 0, why: 'Venir + origen: de (o desde).', en: 'I come from Valdeluz, a village ten kilometres away.' },
            { context: 'Irene explica cómo viene. (How she comes.)', prompt: 'Hoy vengo ___ bicicleta, pero normalmente vengo en autobús.', options: ['con', 'en', 'a'], answer: 1, why: 'Transporte: en bicicleta, en autobús.', en: 'Today I’m coming by bike, but I usually come by bus.' },
            { context: 'Elena mira el mapa. (Elena looks at the map.)', prompt: 'El camino del río va ___ el norte.', options: ['hacia', 'en', 'de'], answer: 0, why: 'La dirección del camino: hacia el norte.', en: 'The river path goes towards the north.' },
            { context: 'En San Miguel. (In San Miguel.)', prompt: 'Desde la calle no ves la camioneta: está ___ la cafetería.', options: ['enfrente de', 'detrás de', 'delante de'], answer: 1, why: 'Si no la ves desde la calle, está en la parte de atrás: detrás de.', en: 'You can’t see the van from the street: it is behind the café.' },
            { context: 'Gabriel conduce. (Gabriel drives.)', prompt: 'Gabriel pasa ___ el centro del pueblo para llegar a la plaza.', options: ['para', 'por', 'en'], answer: 1, why: 'El centro es el lugar que atraviesa: pasar por.', en: 'Gabriel drives through the village centre to get to the square.' },
            { context: 'La hora de la parada. (Stop time.)', prompt: 'Los ciclistas llegan ___ San Miguel a las once.', options: ['en', 'a', 'por'], answer: 1, why: 'Llegar + destino: a.', en: 'The cyclists arrive in San Miguel at eleven.' },
          ] },
        ] },
        { title: '¿Hacia, hasta o por? · Towards, as far as or through?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Elige la preposición del hueco · Choose the preposition for the gap', categories: [
            { id: 'hacia', label: 'HACIA · la dirección', tone: 'blue' },
            { id: 'hasta', label: 'HASTA · el final', tone: 'neutral' },
            { id: 'por', label: 'POR · el camino', tone: 'violet' },
          ], items: [
            { text: 'Mira, las nubes vienen ___ nosotros.', answer: 'hacia', why: 'Las nubes se mueven en nuestra dirección: hacia.' },
            { text: 'Desde aquí ___ la iglesia hay dos kilómetros.', answer: 'hasta', why: 'Desde… hasta: el punto de inicio y el final.' },
            { text: 'Volvemos a casa ___ la playa: es más bonito.', answer: 'por', why: 'La playa es el camino que eligen (via): por.' },
            { text: 'El camino llega ___ el lago y allí termina.', answer: 'hasta', why: 'El lago es el final del camino: hasta.' },
            { text: 'Pasamos ___ el centro del pueblo.', answer: 'por', why: 'Atraviesan el centro: pasar por.' },
            { text: 'Caminamos ___ el río, pero no llegamos: era muy tarde.', answer: 'hacia', why: 'No llegaron al río: solo la dirección, hacia.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Llegamos en el lago a la una.', ok: false, options: ['Llegamos del lago a la una.', 'Llegamos al lago a la una.', 'Llegamos por el lago a la una.'], answer: 1, why: 'Llegar + destino: a. Con «el»: al lago.' },
            { sentence: 'La fuente está enfrente de la estación.', ok: true, why: 'Correcta: enfrente de + lugar (opposite).' },
            { sentence: 'Pasamos para un puente muy viejo.', ok: false, options: ['Pasamos por un puente muy viejo.', 'Pasamos a un puente muy viejo.', 'Pasamos en un puente muy viejo.'], answer: 0, why: 'El lugar que atraviesas lleva por: pasar por un puente.' },
            { sentence: 'Las luces están dentro la mochila.', ok: false, options: ['Las luces están dentro en la mochila.', 'Las luces están dentro a la mochila.', 'Las luces están dentro de la mochila.'], answer: 2, why: 'Dentro necesita de delante del lugar: dentro de la mochila.' },
            { sentence: 'Irene va al trabajo a pie, pero hoy va en bici.', ok: true, why: 'Correcta: a pie (la excepción) y en bici (transporte con en).' },
          ] },
        ] },
        { title: '¿Dónde estás? · Where are you?', blocks: [
          { kind: 'chat-fill', title: 'Irene llama a Gabriel · Irene calls Gabriel', lines: [
            { who: 'Irene', text: 'Gabriel, ya estoy ___ San Miguel, pero no veo la camioneta.', options: ['en', 'por', 'a'], answer: 0, why: 'Estar + lugar, sin movimiento: en San Miguel.' },
            { who: 'Gabriel', text: 'Estoy ___ la cafetería, en la calle de atrás.', options: ['delante de', 'encima de', 'detrás de'], answer: 2, why: '«En la calle de atrás»: detrás de la cafetería.' },
            { who: 'Irene', text: 'De acuerdo. Ahora estoy ___ la iglesia, en la plaza.', options: ['delante de', 'hasta', 'detrás'], answer: 0, why: 'Un lugar fijo con expresión completa: delante de. «Hasta» es movimiento y «detrás» necesita «de».' },
            { who: 'Gabriel', text: 'Muy bien. Pasa ___ la calle Mayor y gira a la derecha.', options: ['en', 'por', 'para'], answer: 1, why: 'La calle es el camino que recorres: pasa por.' },
            { who: 'Gabriel', text: 'Sigue ___ el final de la calle: la camioneta está allí.', options: ['de', 'hasta', 'hacia'], answer: 1, why: 'Vas al final de la calle y paras allí: hasta.' },
            { who: 'Irene', text: '¡Ya te veo! Ahora voy.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Salimos', 'desde', 'la', 'estación', 'hasta', 'el', 'lago'], accept: ['Salimos desde la estación hasta el lago'], en: 'We set off from the station to the lake.' },
            { tiles: ['La', 'camioneta', 'está', 'al', 'lado', 'de', 'la', 'iglesia'], accept: ['La camioneta está al lado de la iglesia'], en: 'The van is next to the church.' },
            { tiles: ['Pasamos', 'por', 'dos', 'túneles', 'oscuros'], accept: ['Pasamos por dos túneles oscuros'], en: 'We go through two dark tunnels.' },
            { tiles: ['La', 'fuente', 'está', 'entre', 'la', 'iglesia', 'y', 'el', 'bar'], accept: ['La fuente está entre la iglesia y el bar', 'La fuente está entre el bar y la iglesia'], en: 'The fountain is between the church and the bar.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la frase · Change the sentence', items: [
            { prompt: 'Estoy en el lago.', instruction: 'Ahora no estás allí: es tu destino. Empieza con «Voy».', accept: ['Voy al lago', 'Voy hacia el lago', 'Voy hasta el lago'] },
            { prompt: 'Salimos de la estación. Llegamos al lago.', instruction: 'Une las dos frases con «desde… hasta». Empieza con «Vamos».', accept: ['Vamos desde la estación hasta el lago'] },
            { prompt: 'La camioneta está delante de la cafetería.', instruction: 'Gabriel la mueve a la parte de atrás (to the back). Cambia la expresión de lugar.', accept: ['La camioneta está detrás de la cafetería'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dibuja (o imagina) su calle y dice dónde están tres cosas con delante de, al lado de, enfrente de o entre. Tú haces preguntas: «¿Y la farmacia?».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un cambio de ruta', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El audio de Elena · Elena’s voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué cambia?). Segunda escucha: tu alumno dibuja la ruta en un papel mientras escucha (salida, pueblo, lago). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Si quieres, dibuja la ruta en un papel: salida, pueblo, lago. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'El audio de Elena', channel: 'MENSAJE DE VOZ · GRUPO «RUTAS DEL SÁBADO»', src: '/audio/grammar-live/373.mp3',
            before: 'Es viernes por la noche. Elena manda un audio al grupo: hay un cambio para mañana. ¿Qué crees que cambia: la hora, el camino, el lugar de la parada…? (Elena sends the group a voice message. What do you think changes?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Mañana van por otro camino y la parada cambia de lugar.', 'Mañana salen desde otra estación.', 'La ruta de mañana se cancela por el tiempo.'], answer: 0, why: '«El camino del río está cerrado, así que […] vamos por la carretera vieja». Y la camioneta espera delante de la iglesia.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Dónde es el punto de encuentro?', options: ['Enfrente de la estación, al lado de la fuente.', 'Delante de la iglesia.', 'Dentro de la estación.'], answer: 0, why: '«El punto de encuentro es el mismo: enfrente de la estación, al lado de la fuente».', en: 'Where is the meeting point?' },
              { prompt: '¿Por dónde pasan mañana?', options: ['Por la playa.', 'Por el centro de San Miguel.', 'Por dos túneles.'], answer: 1, why: '«Pasamos por el centro de San Miguel».', en: 'Which way do they go tomorrow?' },
              { prompt: '¿Dónde espera Gabriel con la camioneta?', options: ['Al lado de la fuente.', 'Delante de la iglesia.', 'Detrás de la cafetería.'], answer: 1, why: '«Gabriel nos espera delante de la iglesia, no detrás de la cafetería».', en: 'Where does Gabriel wait with the van?' },
              { prompt: '¿Cómo vuelven del lago?', options: ['En tren.', 'En bici, por la carretera.', 'En la camioneta.'], answer: 0, why: '«A las cinco volvemos en tren, como siempre».', en: 'How do they get back from the lake?' },
            ],
            transcript: 'Hola a todos, soy Elena. Les cuento un cambio para mañana. El camino del río está cerrado, así que no vamos por los túneles: vamos [[por|violet]] la carretera vieja. Salimos [[desde|teal]] la estación a las nueve, y el punto de encuentro es el mismo: [[enfrente de|orange]] la estación, al lado de la fuente. Primero vamos [[hacia|blue]] el norte y pasamos [[por|violet]] el centro de San Miguel. Ojo: Gabriel nos espera con la camioneta [[delante de|orange]] la iglesia, no detrás de la cafetería. Después seguimos [[hasta|blue]] el lago y comemos allí, [[debajo de|orange]] los árboles. A las cinco volvemos [[en tren|violet]], como siempre. Lleven agua y una chaqueta, porque en el lago hace frío. ¡Hasta mañana!',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Raúl y responde al audio con tres frases: confirma la hora, repite dónde es la parada y pregunta una cosa sobre la ruta («¿Pasamos por…?», «¿Dónde está…?»).', self: 'Responde a Elena en voz alta como Raúl: confirma la hora, repite dónde espera Gabriel y haz una pregunta sobre la ruta. (Answer as Raúl: confirm, repeat the stop, ask a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus rutas, tus lugares', coach: '¿Por dónde vas? ¿Dónde está? Which way? Where is it?',
      steps: [
        { title: 'Explica tu ruta · Explain your route', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con lugares reales: su barrio, su camino al trabajo, un viaje. Tú repites su frase con la preposición correcta y sigues con la repregunta.', self: 'Responde en voz alta con lugares reales: tu calle, tu camino de cada día, un viaje. Si quieres, escribe tus respuestas. (Answer aloud with real places.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo vas de tu casa a tu trabajo o a clase? · How do you get from home to work or class?', followUps: ['¿Por dónde pasas? (Which way do you go?)', '¿Vas en metro, en bici o a pie? (By metro, bike or on foot?)'], phrases: ['Salgo [[de|teal]] casa y voy [[en|violet]] …', 'Paso [[por|violet]] …', 'Camino [[hasta|blue]] …'], hint: 'Origen con de o desde, camino con por, final con hasta, transporte con en (o a pie).', example: 'Salgo de casa a las ocho. Voy a pie hasta la parada, paso por el parque y después voy en metro hasta el centro.', next: 'Ahora, tu calle.', teacher: 'Cuenta tú también tu camino: «Yo salgo de… y paso por…». Así tu alumno oye otra vez el modelo.' },
            { q: '¿Qué hay en tu calle? ¿Dónde está cada cosa? · What is on your street? Where is each thing?', followUps: ['¿Qué hay enfrente de tu casa? (What is opposite your home?)', '¿Hay una tienda cerca de tu casa? (Is there a shop near your home?)'], phrases: ['[[Enfrente de|orange]] mi casa hay…', 'La farmacia está [[al lado de|orange]] …', 'La parada está [[entre|orange]] … y …'], hint: 'Hay + algo nuevo; está + algo que ya conoces. Y la expresión de lugar con de.', example: 'Enfrente de mi casa hay un parque. La farmacia está al lado del banco y la parada de autobús está entre la panadería y el bar.', next: 'Ahora, un visitante.' },
            { q: 'Un visitante está en la puerta de tu edificio y quiere ir a un lugar famoso de tu ciudad. ¿Qué le dices? · A visitor wants to go to a famous place in your city. What do you tell them?', followUps: ['¿Está lejos o cerca? (Far or near?)', '¿Puede ir a pie? (Can they walk?)'], phrases: ['Ve [[hacia|blue]] …', 'Pasa [[por|violet]] … y sigue [[hasta|blue]] …', 'Está [[a la derecha de|orange]] …'], hint: 'Usa el imperativo (clase 058): ve, pasa, sigue, gira. Y las preposiciones del camino.', example: 'Ve hacia el río y pasa por el puente viejo. Sigue hasta la plaza: el museo está a la derecha de la catedral.', next: 'Ahora, un viaje.' },
            { q: 'Cuenta un viaje o una excursión que hiciste. ¿De dónde a dónde fuiste? · Tell about a trip you took. From where to where did you go?', followUps: ['¿Por dónde pasaste? (Which places did you go through?)', '¿Cómo fuiste? (How did you travel?)'], phrases: ['Fui [[desde|teal]] … [[hasta|blue]] …', 'Pasé [[por|violet]] …', 'Fui [[en|violet]] coche / [[en tren|violet]].'], hint: 'Ya conoces el indefinido: fui, pasé, llegué. Ahora añade el camino.', example: 'El verano pasado fui desde Lima hasta Cusco en autobús. Pasé por muchos pueblos pequeños y llegué a Cusco por la noche.', next: 'Ahora, tu ruta ideal.' },
            { q: 'Eres guía como Elena. Prepara una ruta corta para tu grupo: salida, camino, parada y final. · You are a guide. Plan a short route.', followUps: ['¿Dónde está el punto de encuentro? (Where is the meeting point?)', '¿Dónde comen? (Where do you eat?)'], phrases: ['El punto de encuentro está [[delante de|orange]] …', 'Vamos [[hacia|blue]] … y pasamos [[por|violet]] …', 'Comemos [[debajo de|orange]] / [[al lado de|orange]] …'], hint: 'Un lugar fijo (está + expresión de lugar) y tres movimientos (desde, por, hasta).', example: 'El punto de encuentro está delante del ayuntamiento. Salimos a las diez, vamos hacia el castillo y pasamos por el mercado. Comemos al lado del río y seguimos hasta el mirador.', teacher: 'Tú eres un participante nuevo y haces preguntas como Raúl: «¿Hay alguna parada?», «¿Dónde está la camioneta?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Por dónde pasas?», «¿Qué hay enfrente de tu casa?») y tú respondes con tu ruta y tu calle.', self: 'Ahora haz tú las preguntas en voz alta («¿Por dónde pasas?», «¿Dónde está…?») y responde como Elena. (Now ask the questions and answer as Elena.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Cómo llegar y por dónde ir', coach: 'Un lugar claro, un camino claro. A clear place, a clear path.',
      steps: [
        { title: 'Un mensaje para una amiga · A message to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada preposición: ¿movimiento o lugar? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada preposición: ¿movimiento o lugar? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La próxima ruta · The next route', situation: 'Eres Raúl (o tú, con tu propia ruta). Tu amiga Sofía quiere venir a la próxima ruta del sábado. Escríbele un mensaje: dónde es el punto de encuentro, cómo es la ruta y dónde paran. (You are Raúl, or yourself with your own route. Your friend Sofía wants to join next Saturday’s route. Write her a message: where to meet, what the route is like, where you stop.)', task: [
            'Saluda y di la hora de salida. (Say hello and give the start time.)',
            'Explica dónde es el punto de encuentro con dos expresiones de lugar (enfrente de, al lado de…). (Say where to meet, with two place expressions.)',
            'Describe la ruta con desde, hasta, hacia o por (al menos tres). (Describe the route with at least three of these.)',
            'Di dónde paran o comen y cómo vuelven (en tren, a pie…). (Say where you stop or eat and how you get back.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['¡Hola, Sofía!', 'El sábado salimos a las…', 'El punto de encuentro está enfrente de…', 'La ruta va desde… hasta…', 'Primero vamos hacia… y pasamos por…', 'Comemos debajo de… / al lado de…', 'Volvemos en…', '¡Nos vemos!'],
            words: ['desde', 'hasta', 'hacia', 'por', 'enfrente de', 'al lado de', 'delante de', 'detrás de', 'debajo de', 'entre', 'en tren', 'a pie'],
            model: '¡Hola, Sofía! El sábado salimos a las nueve. El punto de encuentro está [[enfrente de|orange]] la estación vieja, [[al lado de|orange]] la fuente. Si vienes [[en metro|violet]], bajas en la parada Centro y caminas [[hasta|blue]] la plaza: la estación está a la derecha. La ruta va [[desde|teal]] la estación [[hasta|blue]] el lago Azul. Primero vamos [[hacia|blue]] el norte [[por|violet]] el camino del río y pasamos [[por|violet]] dos túneles, así que trae luces. En San Miguel paramos: la camioneta de apoyo está [[detrás de|orange]] la cafetería. Comemos en el lago, [[debajo de|orange]] los árboles, y volvemos [[en tren|violet]]. ¡Nos vemos! Raúl',
            minWords: 60,
            checks: [
              { label: 'Movimiento: desde, hasta, hacia o por (movement)', pattern: '(?<!\\p{L})(?:desde|hasta|hacia|por)(?!\\p{L})', tip: 'Explica el camino: «La ruta va desde la estación hasta el lago», «Pasamos por el puente».' },
              { label: 'Un lugar fijo: enfrente de, al lado de, entre… (a place expression)', pattern: '(?<!\\p{L})(?:(?:delante|detrás|detras|enfrente|encima|debajo|dentro|fuera|cerca|lejos|al\\s+lado)\\s+del?|entre)(?!\\p{L})', tip: 'Di dónde está algo: «El punto de encuentro está enfrente de la estación».' },
              { label: 'Transporte: en tren, en bici… o a pie (how you travel)', pattern: '(?<!\\p{L})(?:en\\s+(?:tren|bici|bicicleta|metro|autobús|autobus|coche|carro|taxi)|a\\s+pie)(?!\\p{L})', tip: 'Di cómo vuelven o cómo llega Sofía: «Volvemos en tren», «Vamos a pie».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:delante|detrás|detras|encima|debajo|enfrente|dentro|fuera)\\s+(?:el|la|los|las)(?!\\p{L})', why: 'Las expresiones de lugar necesitan **de**: «detrás **de** la cafetería», «delante **del** bar».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'ORIGEN', formula: 'salir / venir + de · desde', example: 'Salimos desde la estación vieja.', caption: 'el punto de salida; desde va muy bien con hasta', en: 'the starting point; desde pairs well with hasta' },
            { tone: 'blue', label: 'DESTINO', formula: 'a (destino) · hacia (dirección) · hasta (final)', example: 'Llegamos a San Miguel. Vamos hacia el norte. Seguimos hasta el lago.', caption: '¿llegas, solo vas en esa dirección o paras allí?', en: 'do you arrive, just head that way, or stop there?' },
            { tone: 'violet', label: 'CAMINO Y MEDIO', formula: 'pasar / ir + por · en tren, en bici · a pie', example: 'Pasamos por dos túneles y volvemos en tren.', caption: 'el lugar que atraviesas o recorres; cómo viajas', en: 'the place you go through or along; how you travel' },
            { tone: 'orange', label: 'UBICACIÓN', formula: 'estar + en · delante de · detrás de · enfrente de · entre… y…', example: 'La camioneta está detrás de la cafetería.', caption: 'un lugar fijo, sin movimiento', en: 'a fixed place, no movement' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero mira el verbo: ¿hay **movimiento** o es un **lugar fijo**? Con movimiento eliges el punto: **desde** (salida), **por** (camino), **hacia** (dirección), **hasta** (final), **a** (destino). Sin movimiento: **en** o una expresión con **de** (detrás **de**, enfrente **de**). Y no lo olvides: «llegar **a**», «pasar **por**».', en: 'First look at the verb: is there movement, or is it a fixed place? With movement you choose the point: desde (start), por (path), hacia (direction), hasta (end), a (destination). Without movement: en, or a phrase with de (detrás de, enfrente de). And don’t forget: “llegar a”, “pasar por”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El banco está ___ la farmacia y la panadería.', options: ['hasta', 'entre', 'por'], answer: 1, why: 'Un lugar en el medio de dos: entre A y B.', en: 'The bank is between the chemist’s and the bakery.' },
            { prompt: 'Para ir al centro, pasas ___ el puente nuevo.', options: ['hasta', 'a', 'por'], answer: 2, why: 'El puente es el camino que atraviesas: pasar por.', en: 'To get to the centre, you go over the new bridge.' },
            { prompt: 'Caminamos ___ la playa, pero no llegamos: empezó a llover.', options: ['en', 'hacia', 'hasta'], answer: 1, why: 'No llegaron: solo la dirección, hacia. «Hasta» dice que llegas al final.', en: 'We walked towards the beach, but we didn’t get there: it started to rain.' },
            { prompt: 'Las llaves no están en la mesa: están ___ la mesa, en el suelo.', options: ['dentro de', 'encima de', 'debajo de'], answer: 2, why: 'En el suelo, bajo la mesa: debajo de.', en: 'The keys are not on the table: they are under the table, on the floor.' },
            { prompt: 'Mañana mi hermana llega ___ Bogotá en avión.', options: ['a', 'en', 'por'], answer: 0, why: 'Llegar + destino: a. En avión es el transporte.', en: 'Tomorrow my sister arrives in Bogotá by plane.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, a pie por la ciudad.', blocks: [
          { kind: 'lead', text: 'Un mes después, Raúl organiza una ruta a pie por el casco antiguo de su ciudad para unos amigos. Ayúdale a escribir las instrucciones: une las frases.', en: 'A month later, Raúl organises a walking route through the old town of his city for some friends. Help him write the instructions: join the sentences.' },
          { kind: 'rewrite', title: 'La ruta a pie · The walking route', items: [
            { prompt: 'Salimos de la plaza. Llegamos al castillo.', instruction: 'Une las frases con «desde… hasta». Empieza con «Caminamos».', accept: ['Caminamos desde la plaza hasta el castillo'] },
            { prompt: 'El museo está a un lado. El parque está al otro lado. La cafetería está en el medio.', instruction: 'Di dónde está la cafetería en una frase con «entre».', accept: ['La cafetería está entre el museo y el parque', 'La cafetería está entre el parque y el museo'] },
            { prompt: 'Vamos al mirador (viewpoint). El camino pasa por el puente antiguo.', instruction: 'Une las frases en una: destino con «al» y camino con «por». Empieza con «Vamos».', accept: ['Vamos al mirador por el puente antiguo', 'Vamos por el puente antiguo al mirador'] },
          ] },
        ] },
        { title: 'Ampliación · Más formas de moverse (optional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'table', title: 'Cuatro expresiones más · Four more expressions', head: ['Expresión', 'English', 'Ejemplo'], rows: [
            ['**a lo largo de**', 'along (the whole length)', 'Hay árboles a lo largo del río.'],
            ['**a través de**', 'through, across', 'El camino pasa a través del bosque.'],
            ['**alrededor de**', 'around', 'Hay un camino alrededor del lago.'],
            ['**hacia** + hora', 'at about (time)', 'Llegamos hacia las dos.'],
          ], note: '**Por** también puede decir «cerca de, en esa zona»: «La camioneta está por aquí» (it’s somewhere around here). Y **desde… hasta** sirve también para el tiempo: «desde las nueve hasta las cinco».' },
          { kind: 'choice', title: 'Elige la expresión · Choose the expression', items: [
            { prompt: 'Damos una vuelta en bici ___ lago: son seis kilómetros.', options: ['alrededor del', 'dentro del', 'debajo del'], answer: 0, why: 'Una vuelta completa, en círculo: alrededor del lago.', en: 'We ride a lap around the lake: it’s six kilometres.' },
            { prompt: 'Hay bancos para descansar ___ río.', options: ['hasta el', 'a lo largo del', 'hacia el'], answer: 1, why: 'En toda la orilla, de un extremo al otro: a lo largo del río.', en: 'There are benches to rest all along the river.' },
            { prompt: 'No sé la hora exacta: llegamos ___ las dos.', options: ['hasta', 'hacia', 'desde'], answer: 1, why: '«Hacia» + hora = more or less at that time.', en: 'I don’t know the exact time: we’ll arrive at about two.' },
            { prompt: 'El sendero cruza el parque: va ___ los jardines.', options: ['a través de', 'encima de', 'enfrente de'], answer: 0, why: 'Entra por un lado y sale por el otro: a través de (= por).', en: 'The trail crosses the park: it goes through the gardens.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno describe un paseo real con dos de estas expresiones: «Paseo a lo largo de…», «Doy una vuelta alrededor de…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 074 · Por y para: motivo y destino inicial', text: 'Hoy usaste **por** para el camino: «Pasamos **por** el túnel». En la clase 074 conoces más usos de **por** y lo comparas con **para**: «Trabajo **para** Ana», «Cambio el turno **por** ti». Es el paso natural: ya sabes por dónde vas; ahora aprendes a decir por qué y para quién.', en: 'Today you used “por” for the path: “Pasamos por el túnel”. In class 074 you meet more uses of “por” and compare it with “para”: “Trabajo para Ana”, “Cambio el turno por ti”. It is the natural next step: you already know which way you go; now you learn to say why and for whom.', href: '/gramatica/por-y-para-motivo-y-destino', label: 'Ir a la clase 074' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por dónde pasas para venir a clase? ¿Qué hay enfrente de tu casa?». Respuesta esperada: una frase de movimiento (por, hasta, desde) y una de lugar (enfrente de, al lado de). Tarea: escribir el mensaje de Escribir con una ruta real.' },
        ] },
      ],
    },
  ],
};
