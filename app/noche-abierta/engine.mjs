// Noche Abierta · B1 · Conversación · Modo Play.
// A Saturday night in one neighbourhood. The city is the menu: the learner
// chooses where to go, each place opens a different kind of everyday problem,
// one city-wide change forces a new plan, and the night closes with an oral
// recap built from the learner's own route. No scores: the teacher judges
// speaking; the state only records where the learner went and what they chose.
//
// Register: learner-facing text uses voseo (rioplatense) consistently, with
// broadly understood vocabulary and no slang that blocks comprehension.

export const LESSON_ID = 223;
export const MIN_ENCOUNTERS_FOR_EVENT = 4;

export const ROUTE_PLAN = [
  { id: "llegada", title: "Llegada", minutes: 4, note: "Bajar del colectivo, activar el tema y elegir el primer lugar." },
  { id: "exploracion", title: "Explorar el barrio", minutes: 24, note: "Cuatro o cinco encuentros de 4 a 6 minutos. No hace falta visitar todo." },
  { id: "evento", title: "Algo cambia", minutes: 8, note: "Un imprevisto en toda la ciudad obliga a revisar el plan." },
  { id: "cierre", title: "Resumen de la noche", minutes: 9, note: "Relato oral del recorrido e hipótesis final." },
];

export const ARRIVAL = {
  kicker: "SÁBADO · 20:40",
  title: "Noche abierta",
  premise: "Bajás del colectivo en un barrio que no conocés bien. Tenés la noche libre, algunos amigos dando vueltas y ningún plan fijo. Caminá, entrá donde quieras y resolvé lo que vaya pasando.",
  warmup: [
    "¿Qué te gusta hacer un sábado a la noche? ¿Salís o te quedás en casa?",
    "¿Preferís planear la noche o improvisar? Contá un ejemplo.",
    "¿Cuál fue la última vez que una salida terminó muy distinta de lo que pensabas?",
  ],
  teacher: "Dos o tres minutos de charla libre. No corrijas todavía: anotá qué tiempos verbales usa para contar.",
};

// Each location opens a different mechanic. Where each one sits in the city is
// described by scene.mjs (the map fallback) and world3d.mjs (the 3D street).
export const LOCATIONS = [
  {
    id: "cafe",
    name: "Café Martina",
    short: "Café",
    kind: "message",
    help: {
      starters: ["Me parece que…", "Prefiero… porque…", "Lo mejor sería…", "Si no llega en diez minutos, …"],
      chunks: ["llegar tarde", "avisar con tiempo", "guardar una mesa", "cambiar de plan", "mientras tanto"],
      vocab: ["la barra", "la mesa de afuera", "el camarero", "la cuenta"],
    },
    variants: [
      {
        id: "cafe-mensaje-raro",
        title: "Un mensaje confuso",
        situation: "Quedaste con Nico a las nueve en el café. Son las nueve y veinte y te llega esto:",
        cue: { from: "Nico", time: "21:20", text: "Perdón, se complicó todo. Llego en un rato o nos vemos directamente allá, como quieras." },
        reactions: [
          { id: "esperar", label: "Lo espero acá", followUp: "Explicale al camarero que esperás a alguien y cuánto tiempo pensás quedarte." },
          { id: "llamar", label: "Lo llamo para entender", followUp: "Llamá a Nico (lo hace el profe). Averiguá qué pasó y qué quiere decir «allá»." },
          { id: "irme", label: "Me voy a otro lugar", followUp: "Mandale un audio a Nico: adónde vas, por qué y cómo te encuentra." },
        ],
        prompts: [
          "¿Qué entendiste del mensaje? ¿Qué partes no están claras?",
          "Contá una vez que alguien te dejó esperando. ¿Qué hiciste?",
        ],
        twist: "Nico pensaba que habían quedado en la terraza, no en el café. «Allá» era la terraza.",
        role: "Sos Nico: estás apurado, contestás con frases cortas y cambiás un detalle cada vez que te preguntan.",
        followUps: ["¿Cuánto tiempo esperás normalmente a un amigo?", "¿Qué te molesta más: que lleguen tarde o que no avisen?"],
      },
      {
        id: "cafe-ultima-mesa",
        title: "La última mesa",
        situation: "El café está lleno. Queda una sola mesa libre y una pareja también la quiere. El camarero se acerca:",
        cue: { from: "Camarero", time: "21:05", text: "Esa mesa está reservada desde las diez. Si se van antes, la pueden usar." },
        reactions: [
          { id: "aceptar", label: "Acepto la condición", followUp: "Avisale a tus amigos la condición y proponé a qué hora irse." },
          { id: "compartir", label: "Propongo compartirla", followUp: "Hablá con la pareja (el profe) y negociá cómo compartir la mesa." },
          { id: "alternativa", label: "Pido otra opción", followUp: "Preguntale al camarero qué alternativas hay y compará las opciones." },
        ],
        prompts: [
          "¿Qué harías si fueras la pareja? ¿Aceptarías compartir?",
          "¿Te resulta fácil pedirle algo a un desconocido? ¿Por qué?",
        ],
        twist: "La reserva de las diez está a nombre de… Nico, tu amigo. Nadie te lo había dicho.",
        role: "Sos el camarero: amable pero con muy poco tiempo. Contestás mientras hacés otras cosas.",
        followUps: ["¿Qué hacés si la pareja no quiere compartir?", "¿Cómo se reserva en tu ciudad un sábado?"],
      },
      {
        id: "cafe-mensaje-equivocado",
        title: "Un mensaje que no era para vos",
        situation: "Estás tomando algo y te llega un mensaje de Vale. Claramente no era para vos:",
        cue: { from: "Vale", time: "21:12", text: "No le digas nada a nadie, pero la fiesta de hoy es sorpresa para Nico. Él cree que es una cena tranquila." },
        reactions: [
          { id: "avisar-vale", label: "Le aviso a Vale", followUp: "Escribile a Vale (el profe): explicale qué recibiste y qué vas a hacer." },
          { id: "callarme", label: "No digo nada", followUp: "Nico te llama y te pregunta qué hay esta noche. Respondé sin mentir del todo." },
          { id: "ayudar", label: "Me ofrezco a ayudar", followUp: "Ofrecele a Vale una ayuda concreta y explicá cómo lo harías." },
        ],
        prompts: [
          "¿Es correcto guardar un secreto así? ¿En qué casos no?",
          "Contá la mejor (o la peor) sorpresa que te hicieron.",
        ],
        twist: "Nico ya lo sabe desde ayer, pero hace como que no.",
        role: "Sos Vale: te da vergüenza el error y hablás rápido.",
        followUps: ["¿Sos bueno guardando secretos?", "¿Qué harías si Nico te pregunta directamente?"],
      },
    ],
  },
  {
    id: "departamento",
    name: "Departamento de Vale",
    short: "Depto. de Vale",
    kind: "inspect",
    help: {
      starters: ["Por lo que veo, …", "Seguramente…", "En mi casa normalmente…", "¿Te parece bien si…?"],
      chunks: ["sacarse los zapatos", "traer algo", "no hacer ruido", "sentirse como en casa", "estar invitado"],
      vocab: ["la heladera", "el sillón", "el timbre", "los vecinos", "la previa"],
    },
    variants: [
      {
        id: "depto-previa",
        title: "La previa",
        situation: "Vale te abrió y bajó a buscar hielo. Tenés un minuto para mirar el departamento.",
        cue: {
          items: [
            { id: "zapatos", label: "La entrada", detail: "Hay muchos pares de zapatos alineados junto a la puerta." },
            { id: "nota", label: "La heladera", detail: "Un papel dice: «Vecinos: silencio desde las doce»." },
            { id: "torta", label: "La mesa", detail: "Una torta tapada con un repasador. Asoma una vela con forma de 30." },
            { id: "abrigos", label: "El sillón", detail: "Una montaña de abrigos. Alguien dejó un regalo sin envolver." },
          ],
        },
        reactions: [
          { id: "zapatos", label: "Me saco los zapatos", followUp: "Vale vuelve. Explicale qué viste y por qué hiciste eso." },
          { id: "ayudar", label: "Me ofrezco a ayudar", followUp: "Proponele a Vale dos cosas concretas que podés hacer antes de que llegue la gente." },
          { id: "preguntar", label: "Pregunto por la torta", followUp: "Preguntale a Vale por la torta sin arruinar una posible sorpresa." },
        ],
        prompts: [
          "¿Qué te dicen esos objetos sobre la casa y sobre la noche?",
          "¿Qué se hace en tu cultura al llegar a una casa ajena? ¿Qué no se hace nunca?",
        ],
        twist: "Suena el timbre: es el primo de Vale con dos amigos que nadie invitó.",
        role: "Sos Vale: estás un poco nerviosa y querés que todo salga perfecto.",
        followUps: ["¿Qué llevás cuando te invitan a una casa?", "¿Te gustan las fiestas en casa o afuera?"],
      },
      {
        id: "depto-invitado",
        title: "Un invitado sorpresa",
        situation: "Vale está en la ducha y suena el timbre. Por el portero eléctrico se escucha: «Hola, soy Tomi, vengo con Sergio». Vale nunca habló de ningún Tomi.",
        cue: {
          items: [
            { id: "portero", label: "El portero", detail: "Se oyen dos voces y risas. Parecen de buen humor." },
            { id: "celular", label: "El celular de Vale", detail: "Tiene un mensaje de Sergio: «¿Puedo llevar a un amigo?». Sin respuesta." },
            { id: "lista", label: "La lista", detail: "En la heladera hay una lista de invitados. Sergio sí está; Tomi, no." },
          ],
        },
        reactions: [
          { id: "abrir", label: "Les abro", followUp: "Recibilos y explicales la situación mientras Vale sale de la ducha." },
          { id: "esperar", label: "Les pido que esperen", followUp: "Explicales por el portero por qué tienen que esperar un momento." },
          { id: "avisar", label: "Le aviso a Vale", followUp: "Contale a Vale, a través de la puerta del baño, quién llegó y qué viste." },
        ],
        prompts: [
          "¿Está bien llevar a alguien sin avisar? ¿Depende de qué?",
          "Contá una fiesta donde apareció alguien inesperado.",
        ],
        twist: "Tomi resulta ser el vecino de abajo, el que siempre se queja del ruido.",
        role: "Sos Tomi: simpático, un poco atrevido, convencido de que estás invitado.",
        followUps: ["¿Qué le decís a Tomi si Vale no lo quiere adentro?", "¿Cómo se resuelve esto sin ofender a nadie?"],
      },
      {
        id: "depto-companero",
        title: "El compañero de piso",
        situation: "Llegás temprano. Abre Leo, el compañero de piso de Vale, en pijama. No sabe nada de ninguna fiesta.",
        cue: {
          items: [
            { id: "pijama", label: "Leo", detail: "Tiene una taza de té en la mano y cara de sueño." },
            { id: "calendario", label: "El calendario", detail: "Hoy dice: «Leo: examen mañana 8 h»." },
            { id: "bolsas", label: "La cocina", detail: "Bolsas del súper con bebidas y comida para veinte personas." },
          ],
        },
        reactions: [
          { id: "explicar", label: "Le explico lo de la fiesta", followUp: "Contale a Leo lo que sabés de la fiesta, con cuidado." },
          { id: "negociar", label: "Busco una solución", followUp: "Proponé una solución que funcione para Leo y para Vale." },
          { id: "llamar-vale", label: "Llamo a Vale", followUp: "Llamá a Vale (el profe) y contale lo que está pasando." },
        ],
        prompts: [
          "¿Qué reglas debería haber en una casa compartida?",
          "¿Viviste con alguien alguna vez? ¿Qué fue lo más difícil?",
        ],
        twist: "Leo acepta, pero pone una condición: nadie entra a su habitación y a las doce se baja la música.",
        role: "Sos Leo: tranquilo pero firme; no querés discutir, querés dormir.",
        followUps: ["¿Quién tiene más razón, Leo o Vale?", "¿Qué harías vos en el lugar de Leo?"],
      },
    ],
  },
  {
    id: "esquina",
    name: "La esquina del farol",
    short: "Esquina",
    kind: "recognize",
    help: {
      starters: ["Me suena tu cara…", "¿Nos conocemos de…?", "Perdón, creo que me confundís con…", "Ahora me acuerdo: …"],
      chunks: ["me suena", "no me acuerdo de", "hace mucho que no…", "¡qué casualidad!", "tener buena memoria"],
      vocab: ["la bici", "la mochila", "el farol", "el cruce"],
    },
    variants: [
      {
        id: "esquina-me-suena",
        title: "¿De dónde te conozco?",
        situation: "Bajo el farol, una mujer de unos treinta años, pelo corto y mochila de ciclista, te saluda con mucha alegría: «¡No lo puedo creer! ¿Qué hacés por acá?».",
        cue: { clues: ["Sabe tu nombre.", "Te pregunta por «el perro».", "Dice que la última vez fue «en la playa»."] },
        reactions: [
          { id: "trabajo", label: "Es de mi antiguo trabajo", followUp: "Seguí la charla como si la conocieras del trabajo. Hacé preguntas para confirmarlo." },
          { id: "viaje", label: "La conocí en un viaje", followUp: "Contale qué recordás del viaje y fijate si coincide con lo que ella dice." },
          { id: "confusion", label: "Me confunde con alguien", followUp: "Explicale con amabilidad que te confunde y ayudala a encontrar a quién busca." },
        ],
        prompts: [
          "Describí a la persona como si se la contaras a un amigo después.",
          "¿Te pasó alguna vez no reconocer a alguien? ¿Qué hiciste?",
        ],
        twist: "El profe decide la verdad: es la hermana de un excompañero y se vieron una sola vez, hace cinco años.",
        role: "Sos la mujer: muy segura de que se conocen; das detalles que a veces no coinciden.",
        followUps: ["¿Sos bueno recordando caras o nombres?", "¿Qué decís cuando no te acordás del nombre de alguien?"],
      },
      {
        id: "esquina-turista",
        title: "Alguien perdido",
        situation: "Un hombre mayor con un mapa de papel te para: «Disculpe, busco una plaza con una fuente… y un restaurante con toldo rojo. Mi hija me espera ahí».",
        cue: { clues: ["El mapa es de otro barrio.", "Su celular no tiene batería.", "Dice que la hija se llama Lu."] },
        reactions: [
          { id: "explicar", label: "Le explico el camino", followUp: "Explicale el camino con referencias que se vean desde la esquina." },
          { id: "acompanar", label: "Lo acompaño", followUp: "Mientras caminan, hacele preguntas para conocerlo un poco." },
          { id: "llamar", label: "Llamo a su hija", followUp: "Llamá a Lu (el profe) y explicale dónde está su papá." },
        ],
        prompts: [
          "Explicá el camino a la plaza sin señalar: solo con palabras.",
          "¿Alguna vez te perdiste en una ciudad? ¿Cómo te orientaste?",
        ],
        twist: "Lu es tu amiga Lu, la del restaurante. El hombre es su papá y viene a la cena.",
        role: "Sos el señor: educado, un poco sordo, repetís mal los nombres de las calles.",
        followUps: ["¿Preferís pedir indicaciones o usar el mapa del celular?", "¿Qué hacés si alguien te da mal una dirección?"],
      },
    ],
  },
  {
    id: "taxi",
    name: "Taxi en la avenida",
    short: "Taxi",
    kind: "route",
    help: {
      starters: ["Perdón, me parece que hubo un error…", "Yo le dije que…", "¿Cuánto tardamos si…?", "Prefiero… aunque…"],
      chunks: ["dar la vuelta", "tomar otro camino", "estar cortado", "cobrar de más", "no es culpa de nadie"],
      vocab: ["el semáforo", "el desvío", "la tarifa", "la esquina", "el conductor"],
    },
    variants: [
      {
        id: "taxi-destino",
        title: "Destino equivocado",
        situation: "Subiste y dijiste «a la calle Mayor». Después de cinco minutos te das cuenta: el conductor va a la Plaza Mayor, al otro lado de la ciudad.",
        cue: {
          routes: [
            { id: "seguir", label: "Seguir hasta la plaza", time: "15 min", note: "Después hay que caminar veinte minutos." },
            { id: "volver", label: "Pedir que dé la vuelta", time: "12 min", note: "La avenida tiene mucho tráfico." },
            { id: "bajar", label: "Bajar y pedir otro auto", time: "¿?", note: "Empieza a lloviznar." },
          ],
        },
        reactions: [
          { id: "seguir", label: "Seguimos", followUp: "Explicale al conductor por qué preferís seguir y qué vas a hacer después." },
          { id: "volver", label: "Que dé la vuelta", followUp: "Explicale el error con claridad: calle, número y qué hay cerca." },
          { id: "bajar", label: "Me bajo acá", followUp: "Negociá cuánto pagás por el viaje hasta acá." },
        ],
        prompts: [
          "¿De quién fue el error? Explicá tu punto de vista.",
          "Contá un viaje en taxi o en auto que salió mal.",
        ],
        twist: "El conductor dice que el precio es el mismo porque «vos dijiste Mayor y nada más».",
        role: "Sos el conductor: charlatán, seguro de que conocés la ciudad mejor que nadie.",
        followUps: ["¿Qué hacés si no estás de acuerdo con el precio?", "¿Preferís taxi, aplicación o transporte público de noche?"],
      },
      {
        id: "taxi-cortado",
        title: "Calle cortada",
        situation: "Vas camino a la casa de Vale. A dos cuadras, la policía corta la calle por un recital al aire libre.",
        cue: {
          routes: [
            { id: "caminar", label: "Bajar y caminar", time: "10 min", note: "Hay que atravesar el recital." },
            { id: "rodear", label: "Rodear por el puerto", time: "18 min", note: "El taxímetro sigue corriendo." },
            { id: "esperar", label: "Esperar a que abran", time: "¿30 min?", note: "Nadie sabe cuándo terminan." },
          ],
        },
        reactions: [
          { id: "caminar", label: "Camino", followUp: "Avisale a Vale que llegás caminando y describile qué ves en el camino." },
          { id: "rodear", label: "Rodeamos", followUp: "Explicale al conductor por qué preferís rodear aunque cueste más." },
          { id: "esperar", label: "Esperamos", followUp: "Charlá con el conductor mientras esperan: preguntale por el barrio." },
        ],
        prompts: [
          "Compará las tres opciones: tiempo, dinero y comodidad.",
          "¿Qué te molesta más cuando viajás por la ciudad?",
        ],
        twist: "El recital es de la banda favorita de Nico. Él te escribe: «¿dónde estás? ¡vení!».",
        role: "Sos el conductor: tranquilo, te gusta hablar de música y del barrio.",
        followUps: ["¿Cambiarías el plan por un recital sorpresa?", "¿Qué hacés cuando algo te obliga a cambiar el camino?"],
      },
    ],
  },
  {
    id: "restaurante",
    name: "Restaurante El Toldo",
    short: "Restaurante",
    kind: "proposals",
    help: {
      starters: ["¿Y si…?", "Propongo que…", "Me parece justo porque…", "Estoy de acuerdo, pero…"],
      chunks: ["pedir para compartir", "dividir la cuenta", "cada uno lo suyo", "llegar a un acuerdo", "no me convence"],
      vocab: ["la entrada", "el plato principal", "la propina", "la reserva", "la carta"],
    },
    variants: [
      {
        id: "restaurante-cambio",
        title: "Cambio de plan en la mesa",
        situation: "Reservaron para cuatro. Apenas se sientan, cada uno quiere algo distinto:",
        cue: {
          people: [
            { name: "Martín", wants: "Pedir todo para compartir, como siempre." },
            { name: "Lu", wants: "Pedir cada uno lo suyo: es vegetariana." },
            { name: "Sergio", wants: "Comer rápido: a las once tiene un recital." },
          ],
        },
        reactions: [
          { id: "compartir-parcial", label: "Entradas para compartir y cada uno su plato", followUp: "Presentá tu propuesta a la mesa y respondé a quien no esté de acuerdo." },
          { id: "consumo", label: "Cada uno paga lo que come", followUp: "Explicá por qué te parece más justo y cómo se hace la cuenta." },
          { id: "rapido", label: "Pedimos rápido por Sergio", followUp: "Proponé qué pedir para que Sergio llegue a tiempo y todos coman bien." },
        ],
        prompts: [
          "Convencé a la mesa: explicá tu propuesta y por qué es justa.",
          "¿Dividir en partes iguales o cada uno lo suyo? Compará las dos opciones.",
        ],
        twist: "Llega la cuenta: hay un cargo por «servicio de mesa» que nadie vio en la carta.",
        role: "Sos Martín: insistís en compartir; cedés solo si te dan una buena razón.",
        followUps: ["¿Cómo se divide la cuenta en tu país?", "¿Qué hacés si alguien pidió mucho más que vos?"],
      },
      {
        id: "restaurante-reserva",
        title: "La reserva que no aparece",
        situation: "Llegan cuatro personas con hambre. En el restaurante no encuentran la reserva.",
        cue: {
          people: [
            { name: "Encargada", wants: "Ofrece una mesa en la barra dentro de 40 minutos." },
            { name: "Lu", wants: "Jura que reservó por teléfono ayer." },
            { name: "Martín", wants: "Quiere irse a comer pizza a la vuelta." },
          ],
        },
        reactions: [
          { id: "esperar", label: "Esperamos la mesa", followUp: "Negociá con la encargada: pedí algo a cambio de la espera." },
          { id: "reclamar", label: "Busco la reserva", followUp: "Explicale a la encargada cuándo y cómo se hizo la reserva. Hacé preguntas." },
          { id: "pizza", label: "Vamos a la pizzería", followUp: "Convencé a Lu, que quiere quedarse, de ir a la pizzería." },
        ],
        prompts: [
          "Contá qué pasó con la reserva como si se lo explicaras a alguien que acaba de llegar.",
          "¿Qué es más importante en una salida: el lugar o la gente?",
        ],
        twist: "La reserva existe: está a nombre de «Lucía Pérez» y la encargada buscó «Lu».",
        role: "Sos la encargada: educada, con la sala llena y poca paciencia.",
        followUps: ["¿Reclamás cuando un servicio falla?", "¿Qué habrías hecho distinto para evitar el problema?"],
      },
    ],
  },
  {
    id: "plaza",
    name: "Plaza de la Fuente",
    short: "Plaza",
    kind: "versions",
    help: {
      starters: ["Según él, …", "Ella dice que…, pero…", "Lo que no entiendo es…", "Primero…, después…, al final…"],
      chunks: ["chocar contra", "ir muy rápido", "cruzarse de golpe", "tener la culpa", "pedir disculpas"],
      vocab: ["el testigo", "la bici", "el puesto", "la vereda", "el perro"],
    },
    variants: [
      {
        id: "plaza-bici",
        title: "Dos versiones",
        situation: "Hay un pequeño lío en la plaza: una bici chocó contra el puesto de un vendedor de flores. Dos personas te lo cuentan distinto.",
        cue: {
          versions: [
            { who: "El vendedor", text: "El chico venía rapidísimo, mirando el celular, y se llevó puesta mi mesa. Mirá cómo quedaron las flores." },
            { who: "El ciclista", text: "Se cruzó un perro de golpe y frené como pude. La mesa estaba en el medio del camino, no en la vereda." },
          ],
        },
        reactions: [
          { id: "vendedor", label: "Le creo más al vendedor", followUp: "Explicá qué detalle te hace pensar eso y qué debería hacer el ciclista." },
          { id: "ciclista", label: "Le creo más al ciclista", followUp: "Explicá qué detalle te hace pensar eso y qué debería hacer el vendedor." },
          { id: "falta-info", label: "Me falta información", followUp: "Hacé tres preguntas a los dos para entender qué pasó." },
        ],
        prompts: [
          "Contá lo que pasó como testigo, en orden y con detalles.",
          "¿Cómo lo resolverías para que los dos queden conformes?",
        ],
        twist: "Aparece la dueña del perro con una tercera versión: el perro se escapó porque el ciclista le tocó el timbre.",
        role: "Hacé de vendedor o de ciclista: defendé tu versión y agregá un detalle nuevo cada vez.",
        followUps: ["¿Viste alguna vez un accidente en la calle?", "¿Es fácil ser un buen testigo? ¿Por qué?"],
      },
      {
        id: "plaza-campera",
        title: "La campera perdida",
        situation: "Lu y Martín están en un banco de la plaza. Lu perdió la campera y cada uno recuerda la tarde de otra manera.",
        cue: {
          versions: [
            { who: "Lu", text: "La tenía puesta en el café. Después me la saqué en el colectivo porque hacía calor, estoy segura." },
            { who: "Martín", text: "No, en el colectivo ya no la tenía. Te la sacaste en el restaurante y la colgaste en la silla." },
          ],
        },
        reactions: [
          { id: "lu", label: "Tiene razón Lu", followUp: "Explicale a Martín por qué pensás eso y proponé qué hacer." },
          { id: "martin", label: "Tiene razón Martín", followUp: "Explicale a Lu por qué pensás eso y proponé adónde volver." },
          { id: "ninguno", label: "Ninguno de los dos", followUp: "Proponé otra versión posible y cómo comprobarla." },
        ],
        prompts: [
          "Reconstruí la tarde de Lu en orden, con los datos que tenés.",
          "¿Qué perdiste alguna vez que te costó mucho encontrar?",
        ],
        twist: "El restaurante llama: tienen una campera… pero es de hombre.",
        role: "Sos Lu o Martín: estás seguro de tu versión y te cuesta aceptar la otra.",
        followUps: ["¿Qué hacés cuando dos amigos discuten delante tuyo?", "¿Sos de perder cosas?"],
      },
    ],
  },
  {
    id: "tienda",
    name: "Almacén 24 horas",
    short: "Tienda 24 h",
    kind: "shelf",
    help: {
      starters: ["Necesito algo que…", "Lo más importante para mí es…", "No me sirve porque…", "Me lo llevo aunque…"],
      chunks: ["no queda", "¿tiene algo parecido?", "me sirve igual", "salir caro", "por las dudas"],
      vocab: ["el cargador", "el enchufe", "la caja", "el estante", "el vuelto"],
    },
    variants: [
      {
        id: "tienda-cargador",
        title: "Tres por ciento de batería",
        situation: "Te queda un 3 % de batería y todos tus amigos se comunican por el celular. El cargador que necesitás no está.",
        cue: {
          items: [
            { id: "bateria", label: "Batería portátil", pro: "Funciona con tu cable", con: "Cara y viene descargada" },
            { id: "cable", label: "Cable universal", pro: "Barato", con: "Necesitás un enchufe" },
            { id: "favor", label: "Pedir cargar acá veinte minutos", pro: "Gratis", con: "Te quedás en la tienda" },
          ],
        },
        reactions: [
          { id: "bateria", label: "La batería", followUp: "Explicale al empleado qué necesitás y preguntá cuánto tarda en cargar." },
          { id: "cable", label: "El cable", followUp: "Explicá dónde vas a encontrar un enchufe esta noche." },
          { id: "favor", label: "Pido el favor", followUp: "Pedile el favor al empleado y ofrecé algo a cambio." },
        ],
        prompts: [
          "¿Qué es lo más importante para vos esta noche: tiempo, dinero o estar conectado? ¿Por qué?",
          "¿Podrías pasar una noche entera sin celular? ¿Qué pasaría?",
        ],
        twist: "El empleado saca de un cajón un cargador que alguien olvidó hace meses: «Si te sirve, te lo presto».",
        role: "Sos el empleado: aburrido en el turno noche, pero te encanta charlar.",
        followUps: ["¿Qué nunca te falta cuando salís?", "¿Qué hacés si te quedás sin batería en otra ciudad?"],
      },
      {
        id: "tienda-regalo",
        title: "No llegar con las manos vacías",
        situation: "Vas a la casa de Vale y no querés llegar sin nada. Tenés poco dinero y la tienda tiene poco surtido.",
        cue: {
          items: [
            { id: "flores", label: "Flores algo marchitas", pro: "Es un detalle lindo", con: "No se ven muy frescas" },
            { id: "postre", label: "Un postre helado", pro: "A todos les gusta", con: "Se derrite en el camino" },
            { id: "bebida", label: "Bebidas y hielo", pro: "Siempre sirve", con: "Pesa mucho" },
          ],
        },
        reactions: [
          { id: "flores", label: "Las flores", followUp: "Preparate para explicarle a Vale por qué elegiste flores." },
          { id: "postre", label: "El postre", followUp: "Pedile al empleado una solución para que el postre llegue bien." },
          { id: "bebida", label: "Bebidas y hielo", followUp: "Llamá a Vale (el profe) y preguntá qué hace falta." },
        ],
        prompts: [
          "Compará las tres opciones: ¿cuál es la más útil y cuál la más amable?",
          "¿Qué regalo recibiste que no te sirvió para nada? ¿Qué dijiste?",
        ],
        twist: "Vale te escribe: «No traigas nada dulce, ya hay torta. Lo que falta es hielo».",
        role: "Sos el empleado: das tu opinión sobre todo aunque nadie te la pida.",
        followUps: ["¿Qué se lleva a una casa en tu país?", "¿Te importa más el regalo o el gesto?"],
      },
    ],
  },
  {
    id: "terraza",
    name: "La terraza de las luces",
    short: "Terraza",
    kind: "vote",
    help: {
      starters: ["Entiendo que…, pero…", "Lo que propongo es…", "Así, por lo menos…", "Si nos separamos, …"],
      chunks: ["ponerse de acuerdo", "ceder un poco", "la mayoría", "dejar para otro día", "a mí me da igual"],
      vocab: ["el boliche / la discoteca", "el último colectivo", "la madrugada", "la despedida"],
    },
    variants: [
      {
        id: "terraza-final",
        title: "¿Cómo sigue la noche?",
        situation: "Son casi las doce. En la terraza, cada uno quiere terminar la noche de otra manera:",
        cue: {
          people: [
            { name: "Vale", wants: "Quedarse en la terraza", reason: "Es su cumpleaños y organizó todo." },
            { name: "Nico", wants: "Ir a bailar", reason: "Hace meses que no sale." },
            { name: "Lu", wants: "Volver a casa", reason: "Mañana trabaja temprano." },
            { name: "Martín", wants: "Ir a comer algo", reason: "No cenó bien." },
          ],
        },
        reactions: [
          { id: "mezcla", label: "Propongo un plan mixto", followUp: "Armá un plan que combine dos deseos y presentalo al grupo." },
          { id: "vale", label: "Nos quedamos por Vale", followUp: "Convencé a Nico y a Martín de quedarse. ¿Qué les ofrecés?" },
          { id: "separarse", label: "Que cada uno haga lo suyo", followUp: "Explicá por qué separarse no es un problema y cómo se despiden." },
        ],
        prompts: [
          "¿Qué pierde y qué gana cada uno con tu propuesta?",
          "Si no hay acuerdo, ¿está bien que el grupo se separe? ¿Por qué?",
        ],
        twist: "Lu dice que se queda si alguien la acompaña después a tomar un taxi.",
        role: "Hacé de cualquiera de los cuatro. Cambiá de opinión solo con buenos argumentos.",
        followUps: ["¿Cómo terminan normalmente tus salidas?", "¿Sos de los que se van primero o últimos?"],
      },
      {
        id: "terraza-foto",
        title: "La foto del grupo",
        situation: "Todos posan para una foto con la ciudad de fondo. Vale quiere subirla ya; Sergio no quiere aparecer.",
        cue: {
          people: [
            { name: "Vale", wants: "Subir la foto ahora", reason: "Es su cumpleaños y quedó perfecta." },
            { name: "Sergio", wants: "No aparecer", reason: "Dijo en el trabajo que estaba enfermo." },
            { name: "Nico", wants: "Sacar otra sin Sergio", reason: "No le parece para tanto." },
          ],
        },
        reactions: [
          { id: "otra", label: "Sacamos otra", followUp: "Organizá la nueva foto: quién sale, dónde y cómo." },
          { id: "esperar", label: "Que la suba mañana", followUp: "Proponele a Vale esperar y explicale por qué." },
          { id: "recortar", label: "Que la recorte", followUp: "Explicale a Sergio cómo quedaría y fijate si acepta." },
        ],
        prompts: [
          "¿Hay que pedir permiso para subir una foto donde salen otros?",
          "Contá una foto tuya que alguien subió sin preguntarte.",
        ],
        twist: "La jefa de Sergio sigue a Vale en las redes.",
        role: "Sos Sergio: nervioso, no querés contar toda la verdad.",
        followUps: ["¿Qué fotos no subirías nunca?", "¿Mentiste alguna vez para faltar al trabajo?"],
      },
    ],
  },
  {
    id: "auto",
    name: "El auto con el capó abierto",
    short: "Auto roto",
    kind: "roadside",
    help: {
      starters: ["¿Qué te pasó?", "Si querés, puedo…", "Lo mejor sería…", "Yo en tu lugar…"],
      chunks: ["no arranca", "quedarse sin nafta", "llamar a una grúa", "dar una mano", "por las dudas"],
      vocab: ["el capó", "las balizas", "la grúa", "el motor", "la estación de servicio"],
    },
    variants: [
      {
        id: "auto-no-arranca",
        title: "El auto que no arranca",
        situation: "En la avenida hay un auto con el capó abierto y las balizas prendidas. Al lado, una mujer mira el motor y el celular al mismo tiempo.",
        cue: { speaker: "Carla", text: "No sé qué pasó. Venía bien y de repente empezó a salir humo. Tengo que estar en el aeropuerto en una hora.", clues: ["Sale un poco de humo del motor.", "El celular de Carla tiene poca batería.", "No pasa ningún taxi libre."] },
        reactions: [
          { id: "ayudar", label: "Me ofrezco a ayudar", followUp: "Preguntale qué pasó exactamente y proponé una solución concreta." },
          { id: "llamar", label: "Llamo a alguien", followUp: "Llamá a una grúa o a un mecánico (lo hace el profe) y explicá dónde están y qué pasa." },
          { id: "seguir", label: "Sigo mi camino", followUp: "Explicale con amabilidad por qué no podés quedarte y qué le recomendás hacer." },
        ],
        prompts: [
          "¿Qué harías si el auto fuera tuyo? Explicá tus opciones.",
          "Contá una vez que se te rompió algo en el peor momento.",
        ],
        twist: "La grúa tarda dos horas. Carla te pregunta si la podés llevar vos al aeropuerto.",
        role: "Sos Carla: nerviosa y apurada; cambiás de idea rápido y hacés muchas preguntas.",
        followUps: ["¿Ayudarías a un desconocido de noche? ¿Por qué?", "¿Qué es lo primero que hacés cuando algo se rompe?"],
      },
      {
        id: "auto-sin-nafta",
        title: "Sin nafta",
        situation: "Un señor empuja su auto hacia la vereda. Se quedó sin nafta a dos cuadras de la estación de servicio.",
        cue: { speaker: "Don Julio", text: "Me confié. Pensé que llegaba. ¿Me das una mano?", clues: ["La estación de servicio cierra a las once.", "El señor tiene el celular sin batería.", "Hay un bidón vacío en el baúl."] },
        reactions: [
          { id: "empujar", label: "Lo ayudo a empujar", followUp: "Organizá cómo lo hacen: quién empuja, quién maneja y adónde lo llevan." },
          { id: "bidon", label: "Voy a buscar nafta", followUp: "Explicale tu plan: adónde vas, cuánto tardás y qué necesitás de él." },
          { id: "telefono", label: "Le presto el celular", followUp: "Ayudalo a llamar a alguien: explicá la situación como si fueras él." },
        ],
        prompts: [
          "¿Es un descuido normal quedarse sin nafta? ¿Te pasó algo parecido?",
          "Contá una vez que alguien te ayudó en la calle.",
        ],
        twist: "Don Julio es el papá de Vale y va a la fiesta de esta noche.",
        role: "Sos Don Julio: tranquilo y charlatán; te encanta contar anécdotas.",
        followUps: ["¿Pedís ayuda fácilmente?", "¿Qué hacés si alguien te pide plata para nafta?"],
      },
    ],
  },
];

// One city-wide change after several encounters. `affects` names locations
// whose earlier decisions are revisited in the event prompts.
export const CITY_EVENTS = [
  {
    id: "lluvia",
    title: "Se larga a llover",
    text: "Empieza a llover fuerte. La plaza y la terraza se vacían y no pasa ningún taxi libre.",
    affects: ["plaza", "terraza", "taxi", "auto"],
    prompts: [
      "Mirá los lugares donde estuviste. ¿Cuáles siguen siendo una buena opción y cuáles no? ¿Por qué?",
      "Proponé un plan nuevo para el grupo y explicá qué cambia respecto del anterior.",
      "Un amigo llega empapado y no sabe nada. Contale qué pasó esta noche hasta ahora.",
    ],
    teacher: "Cambiá un dato a mitad del plan: «el café cierra a las once».",
  },
  {
    id: "transporte",
    title: "Se corta el transporte",
    text: "Una avería corta el metro y el último colectivo pasa lleno sin parar. Lu tiene que volver a casa.",
    affects: ["taxi", "terraza", "departamento"],
    prompts: [
      "¿Qué opciones tiene Lu para volver? Compará al menos dos.",
      "Recordá una decisión que tomaste antes esta noche. ¿La cambiarías ahora? ¿Por qué?",
      "Proponé cómo se organiza el grupo para que nadie vuelva solo.",
    ],
    teacher: "Hacé de Lu: estás cansada y un poco preocupada; rechazá la primera propuesta.",
  },
  {
    id: "celular",
    title: "Nico perdió el celular",
    text: "Nico no encuentra su celular. Estuvo en los mismos lugares que vos esta noche.",
    affects: [],
    prompts: [
      "Reconstruí el recorrido: ¿dónde estuvieron y qué pasó en cada lugar?",
      "¿Dónde puede estar? Hacé hipótesis: «Capaz que lo dejó en…», «Seguro que…», «No creo que…».",
      "Proponé un plan para buscarlo sin arruinar el resto de la noche.",
    ],
    teacher: "Aparece el celular en el último lugar que el alumno nombre… con un mensaje nuevo que cambia el plan.",
  },
];

export const FINAL = {
  title: "Resumen de la noche",
  prompts: [
    "¿Adónde fuiste y en qué orden?",
    "¿Qué pasó en el lugar que más recordás?",
    "¿Qué decisión cambiaste cuando la ciudad cambió?",
    "Describí a una persona o una situación de esta noche.",
    "¿Qué harías distinto la próxima vez?",
  ],
  hypothetical: "Si la noche empezara de nuevo, ¿qué cambiarías?",
  help: {
    starters: ["Primero fui a…", "Después…", "Al final…", "Lo que más me sorprendió fue…", "Si pudiera volver, …"],
    chunks: ["al principio", "de repente", "por eso", "al final", "la próxima vez"],
  },
  criteria: [
    { id: "conectores", label: "Relato conectado", detail: "Ordena los hechos con conectores (primero, después, entonces, al final)." },
    { id: "razones", label: "Razones", detail: "Explica por qué tomó sus decisiones." },
    { id: "repreguntas", label: "Repreguntas", detail: "Responde a preguntas nuevas sin guion." },
    { id: "claridad", label: "Comprensible", detail: "Se le entiende sin esfuerzo, aunque tenga errores." },
  ],
};

// Moves any teacher can make in any place, beside each variant's own twist.
export const TEACHER_MOVES = [
  { id: "contradecir", label: "Llevar la contraria", line: "«Yo no lo haría así. ¿Por qué te parece la mejor opción?»" },
  { id: "repreguntar", label: "Repreguntar", line: "«¿Y si pasara lo contrario? ¿Qué harías?»" },
  { id: "cambiar-dato", label: "Cambiar un dato", line: "Cambiá la hora, el lugar o una persona y pedí que adapte el plan." },
];

export function locationById(id) {
  return LOCATIONS.find((location) => location.id === id) ?? null;
}

export function initialState() {
  return { phase: "llegada", position: null, visitOrder: [], encounters: {}, event: null, final: { criteria: {} } };
}

export function startExploring(state) {
  return { ...state, phase: "ciudad" };
}

export function openLocation(state, id) {
  const location = locationById(id);
  if (!location || state.phase === "cierre") return state;
  const existing = state.encounters[id];
  const encounter = existing ?? { variant: 0, reaction: null, step: 0, inspected: [], done: false };
  return {
    ...state,
    phase: "encuentro",
    position: id,
    visitOrder: state.visitOrder.includes(id) ? state.visitOrder : [...state.visitOrder, id],
    encounters: { ...state.encounters, [id]: encounter },
  };
}

// Teacher changes the situation: the new variant starts clean.
export function setVariant(state, id, variant) {
  const location = locationById(id);
  const encounter = state.encounters[id];
  if (!location || !encounter) return state;
  const index = ((variant % location.variants.length) + location.variants.length) % location.variants.length;
  return { ...state, encounters: { ...state.encounters, [id]: { ...encounter, variant: index, reaction: null, step: 0, inspected: [] } } };
}

export function inspectItem(state, id, itemId) {
  const encounter = state.encounters[id];
  if (!encounter || encounter.inspected.includes(itemId)) return state;
  return { ...state, encounters: { ...state.encounters, [id]: { ...encounter, inspected: [...encounter.inspected, itemId] } } };
}

export function chooseReaction(state, id, reactionId) {
  const location = locationById(id);
  const encounter = state.encounters[id];
  if (!location || !encounter) return state;
  const valid = location.variants[encounter.variant].reactions.some((reaction) => reaction.id === reactionId);
  if (!valid) return state;
  return { ...state, encounters: { ...state.encounters, [id]: { ...encounter, reaction: reactionId, step: Math.max(encounter.step, 1) } } };
}

// Steps: 0 situation + first reaction, 1 follow-up, 2 new information (the
// twist) and a chance to change the answer, 3..n extra prompts.
export const TWIST_STEP = 2;
export const TWIST_QUESTION = "¿Cambia tu respuesta? ¿Qué hacés ahora?";
export function stepCount(location, variant) {
  return 3 + location.variants[variant].prompts.length;
}

export function nextStep(state, id) {
  const location = locationById(id);
  const encounter = state.encounters[id];
  if (!location || !encounter || encounter.reaction === null) return state;
  const last = stepCount(location, encounter.variant) - 1;
  return { ...state, encounters: { ...state.encounters, [id]: { ...encounter, step: Math.min(last, encounter.step + 1) } } };
}

// Leaving a place: it counts as a completed encounter once a reaction was chosen
// and at least one follow-up was spoken about. Leaving early keeps the visit.
// After the fourth completed encounter the city changes on the way out.
export function leaveLocation(state, id) {
  const encounter = state.encounters[id];
  if (!encounter) return state;
  const done = encounter.done || (encounter.reaction !== null && encounter.step >= 1);
  const phase = state.event && !state.event.resolved ? "evento" : "ciudad";
  const next = { ...state, phase, encounters: { ...state.encounters, [id]: { ...encounter, done } } };
  return eventReady(next) ? triggerEvent(next, suggestedEvent(next)) : next;
}

// The teacher may close an encounter that was handled in conversation.
export function markDone(state, id) {
  const encounter = state.encounters[id];
  if (!encounter) return state;
  return { ...state, encounters: { ...state.encounters, [id]: { ...encounter, done: true } } };
}

export function completedIds(state) {
  return state.visitOrder.filter((id) => state.encounters[id]?.done);
}

export function eventReady(state) {
  return !state.event && completedIds(state).length >= MIN_ENCOUNTERS_FOR_EVENT;
}

// The change that best connects to where the learner actually went: the event
// touching most completed places; with no overlap, the lost phone (which asks
// for the whole route) fits any evening.
export function suggestedEvent(state) {
  const done = completedIds(state);
  let best = "celular";
  let bestScore = 0;
  for (const event of CITY_EVENTS) {
    const score = event.affects.filter((id) => done.includes(id)).length;
    if (score > bestScore) {
      best = event.id;
      bestScore = score;
    }
  }
  return best;
}

// The teacher may trigger the change earlier; it never fires twice.
export function triggerEvent(state, eventId) {
  if (state.event || state.phase === "cierre") return state;
  const event = CITY_EVENTS.find((item) => item.id === eventId);
  if (!event) return state;
  return { ...state, phase: "evento", event: { id: event.id, resolved: false } };
}

export function resolveEvent(state) {
  if (!state.event) return state;
  return { ...state, phase: "ciudad", event: { ...state.event, resolved: true } };
}

export function finalAvailable(state) {
  return Boolean(state.event?.resolved);
}

export function openFinal(state) {
  return finalAvailable(state) ? { ...state, phase: "cierre" } : state;
}

export function toggleCriterion(state, criterionId) {
  if (!FINAL.criteria.some((item) => item.id === criterionId)) return state;
  const criteria = { ...state.final.criteria, [criterionId]: !state.final.criteria[criterionId] };
  return { ...state, final: { ...state.final, criteria } };
}

// The night moves on 35 minutes with each completed encounter. A clock, not a timer.
export function nightClock(state) {
  const minutes = 20 * 60 + 40 + completedIds(state).length * 35 + (state.event ? 20 : 0);
  const hours = Math.floor(minutes / 60) % 24;
  return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

// The learner's actual evening, for the event and the final recap.
export function nightSummary(state) {
  return state.visitOrder.map((id) => {
    const location = locationById(id);
    const encounter = state.encounters[id];
    const variant = location.variants[encounter.variant];
    const reaction = variant.reactions.find((item) => item.id === encounter.reaction) ?? null;
    return { id, name: location.name, situation: variant.title, choice: reaction?.label ?? null, done: encounter.done };
  });
}

export function isValidState(value) {
  return Boolean(value && typeof value === "object" && typeof value.phase === "string" && Array.isArray(value.visitOrder)
    && value.encounters && typeof value.encounters === "object" && value.final && typeof value.final === "object"
    && value.visitOrder.every((id) => locationById(id) && value.encounters[id]));
}
