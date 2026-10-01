// Noche Abierta · C2 patch. See ../levels.mjs for the shape and merge rules.
//
// C2: the same night, but nobody says exactly what they mean. Every situation
// turns on irony, implicature, subtext, humour or a minimal difference of tone.
// The learner interprets, reformulates, answers in the right register and
// defuses with humour. No rare vocabulary for its own sake.

const GUARDIA = "Sos el guardia de noche del museo: irónico y de pocas palabras. Contás lo que sabés con dobles sentidos y solo aclarás algo si te hacen la pregunta exacta.";

const C2 = {
  arrival: {
    premise: "Bajás del colectivo en un barrio que no conocés bien. Hoy Vale cumple treinta y dijo «nada de festejos, en serio», así que hay una previa en su casa y una fiesta en una terraza. Nadie tiene un plan fijo y nadie dice del todo lo que piensa. Caminá, entrá donde quieras y escuchá también lo que no se dice.",
    warmup: [
      "Cuando alguien dice «no quiero festejo», ¿cómo te das cuenta de si lo dice en serio?",
      "Contá un plan improvisado que salió bien, primero como anécdota y después como si hubiera sido una tragedia.",
      "¿Cuál es la frase más ambigua que te dijeron en una salida? ¿Qué entendiste en el momento y qué entendiste después?",
    ],
    teacher: "Dos o tres minutos de charla libre. Escuchá si el alumno modula el tono (ironía, exageración, atenuación) y si interpreta tus repreguntas más allá de lo literal. Tirá una ironía tuya y mirá cómo reacciona.",
  },

  locations: {
    cafe: {
      focus: "Leer mensajes que dicen más (o menos) de lo que escriben",
      help: {
        starters: ["Literalmente dice…, pero…", "Lo que no dice es…", "Ese «…» suena a…", "Leído con buena fe, …", "Le contestaría en el mismo tono: …"],
        chunks: ["leer entre líneas", "mandar una indirecta", "clavar el visto", "hacerse el desentendido", "quedar en algo y no cumplir"],
        vocab: ["el audio", "el emoji", "los puntos suspensivos", "el grupo"],
      },
      activities: {
        "cafe-alla": {
          situation: "Quedaste con Nico en el café hace veinte minutos. Ya vas por el segundo cortado y la moza te pregunta, con mucha amabilidad, si vas a esperar «a alguien en particular».",
          thread: [
            { text: "Perdón, se me complicó todo. Ya salgo, en serio esta vez" },
            { text: "Igual si preferís nos vemos directamente allá, vos decidí, total yo me adapto" },
          ],
          ask: "«Vos decidí, total yo me adapto»: ¿es una concesión, un reproche o una forma de no comprometerse? Justificá tu lectura con palabras concretas del mensaje.",
          next: { text: "¿Ya estás viniendo? Los chicos ya subieron, eh. Nada, decía" },
          ask2: "«Nada, decía» después de «los chicos ya subieron»: ¿qué te reprocha Nico sin decirlo, si el que llegó tarde fue él? ¿Dónde está y qué pasó con el plan?",
          reply: "Grabale un audio de treinta segundos que marque el límite con humor: que se note que te molestó, sin que suene a escena de celos.",
          role: "Sos Nico: pasivo-agresivo sin darte cuenta. Si te señalan el tono, lo negás («¡No, posta, era un comentario!») y recién al final admitís que «allá» era la terraza de la fiesta.",
          teacher: ["¿Qué mensajes te cuestan más leer: los secos o los que tienen demasiados «jaja»?", "Reformulá «vos decidí, total yo me adapto» para que diga lo mismo sin el reproche. ¿Se puede?"],
        },
        "cafe-equivocado": {
          situation: "Estás en la barra y te llega un mensaje de Lu. Lo leés dos veces: no era para vos, y además dice bastante más de lo que Lu querría.",
          thread: [
            { text: "Martín, ya está todo. Vale sigue convencida de que nadie se acordó. Pobre, qué mala actriz voy a ser cuando me pregunte" },
          ],
          ask: "El mensaje no era para vos, pero te informa de más. ¿Qué da por sentado Lu y qué revela sin querer sobre ella misma?",
          next: { text: "Ah, todo bien, eh. Treinta años y ni un mensaje del grupo. Me encanta que sean tan respetuosos de mi privacidad" },
          ask2: "La ironía de Vale, ¿busca información, consuelo o pelea? Contestale en su mismo registro, sin mentir y sin arruinar la sorpresa.",
          reply: "Escribile a Lu dos versiones del aviso: una que la tranquilice y otra que la haga reír de su propio error. Elegí cuál mandás y explicá por qué.",
          role: "Primero sos Vale: ironía cada vez más fina para sacar información. Después sos Lu: contestás con autoironía para tapar la vergüenza.",
          teacher: ["¿Hay diferencia entre no decir la verdad y mentir? ¿Dónde ponés el límite?", "Si Vale hubiera escrito lo mismo sin ironía, ¿le contestarías igual?"],
        },
        "cafe-grupo": {
          situation: "Estás por pagar y el celular no para. En el grupo «Sábado» cada uno quiere otra cosa, pero nadie lo escribe de frente.",
          thread: [
            { text: "¿Y si en vez de la terraza vamos al bar de la esquina? Hay música en vivo. Digo, por proponer algo nuevo nomás" },
            { text: "Sí, re. Total la entrada de la terraza la pagué por deporte" },
            { text: "Lo que digan. Yo mañana trabajo temprano, pero no importa, eh" },
          ],
          ask: "Ninguno de los tres dice lo que quiere de forma directa. Traducí cada mensaje a lo que realmente quiere decir y señalá la palabra que carga el subtexto.",
          next: { text: "Ah, buenísimo. Avísenme dónde es mi cumple así voy" },
          ask2: "Vale contesta con una sola línea. ¿Cuánto hay de enojo y cuánto de humor? Escribí en el grupo algo que baje la tensión sin hacerte el distraído.",
          reply: "Mandá al grupo un plan concreto con una pizca de humor que reconozca lo absurdo de la discusión, sin dejar en ridículo a nadie.",
          role: "Hacé de cualquiera del grupo: defendé tu idea solo con indirectas. Si alguien nombra tu subtexto, reaccioná con un «¿yo? Nada que ver».",
          teacher: ["¿Cómo se lee un «ok» en tu grupo de amigos? ¿Y un «ok.» con punto?", "Decí el mensaje de Sergio en tres tonos: resignado, sarcástico y genuinamente indiferente."],
        },
      },
    },

    departamento: {
      focus: "Leer lo que una casa dice sin decirlo",
      help: {
        starters: ["Lo que me llama la atención es que…", "No es casual que…", "Si fuera así, no habría…", "Todo indica que…, salvo…", "Leído de otra manera, …"],
        chunks: ["dar a entender", "no es casual", "hacerse el distraído", "a buen entendedor, pocas palabras", "flotar en el aire"],
        vocab: ["la indirecta", "el sobreentendido", "el cartelito", "los vecinos", "la tregua"],
      },
      activities: {
        "depto-un-minuto": {
          situation: "Vale te abre, te dice «ponete cómodo, como si fuera tu casa… pero no tanto» y baja corriendo a buscar hielo. Tenés un minuto para mirar. Tocá cada lugar.",
          items: [
            { id: "entrada", label: "Junto a la puerta", detail: "Ocho pares de zapatos alineados y un cartelito escrito a mano: «Gracias por entender». Nadie explica qué hay que entender." },
            { id: "heladera", label: "La puerta de la heladera", detail: "Un papel con letra grande: «Vecinos: silencio desde medianoche. Sabemos que ustedes también pueden». El «también» está subrayado dos veces." },
            { id: "calendario", label: "El calendario de la cocina", detail: "En el día de hoy hay dos anotaciones con letras distintas: «Vale: ¡30!» y, más chiquito abajo, «Leo: examen. Por favor.»" },
            { id: "mesa", label: "La mesa del living", detail: "Algo tapado con un repasador. Asoman dos velas, un 3 y un 0, y una tarjeta: «Para la que dijo que no quería festejo»." },
            { id: "sillon", label: "El sillón y lo que hay encima", detail: "Una montaña de abrigos y un libro de viajes sin envolver, con una etiqueta de precio que alguien empezó a arrancar y abandonó a la mitad." },
          ],
          ask: "Cada detalle de la casa le habla a alguien distinto. ¿Quién le escribe a quién, en qué tono, y qué conflicto se adivina entre líneas?",
          reveal: "Vale vuelve con el hielo y te dice en voz baja: «Leo cree que vienen “unos poquitos”. Y técnicamente veinte son unos poquitos… comparado con un recital».",
          ask2: "Leo llega en diez minutos. Armá con Vale la frase exacta para darle la noticia: ¿humor, honestidad brutal o verdad dosificada? Probá dos versiones y elegí una.",
          role: "Sos Vale: minimizás todo con humor («no es para tanto») y te ofendés un poco si alguien nombra el problema sin rodeos.",
          teacher: ["¿Los carteles pasivo-agresivos funcionan o empeoran la convivencia?", "Si fueras Leo, ¿qué te ofendería más: la verdad dicha en seco o el chiste de los «unos poquitos»?"],
        },
        "depto-timbre": {
          situation: "Vale está en la ducha. Suena el portero eléctrico: «Hola, soy Tomi, vengo con Sergio. Tranqui, traigo algo para compensar». Vale nunca habló de ningún Tomi. Mirá antes de abrir.",
          items: [
            { id: "portero", label: "El portero eléctrico", detail: "Dos voces. Una se ríe demasiado fuerte; la otra dice «shh, que nos va a escuchar» y se ríe todavía más." },
            { id: "celular", label: "El celular de Vale, boca arriba", detail: "Un mensaje de Sergio, sin responder: «¿Puedo llevar a un amigo? Bah, amigo… ya vas a ver»." },
            { id: "lista", label: "La lista de invitados", detail: "Pegada en la heladera. Sergio está. Abajo, con otra birome y mucha fuerza, alguien escribió: «Nada de vecinos»." },
            { id: "ventana", label: "Desde la ventana", detail: "Abajo, en la vereda, uno de los dos sostiene una torta con las dos manos, como quien lleva una ofrenda." },
          ],
          ask: "«Algo para compensar», «bah, amigo», «nada de vecinos»: ¿qué historia cuentan juntas esas tres frases? Armá la hipótesis más precisa que puedas.",
          reveal: "Desde la ducha, Vale grita: «¡¿Tomi?! ¡Es el vecino de abajo, el de las quejas! Qué detalle traer torta, ¿no? Casi tan considerado como golpear el techo con la escoba».",
          ask2: "Ya les abriste y están subiendo. ¿Cómo recibís a Tomi para que entienda que es bienvenido, pero que nadie se olvidó de las quejas?",
          role: "Sos Tomi: encantador y autoirónico sobre tu fama de quejoso. Si te pinchan con humor, devolvés con humor; si te reciben con frialdad, te ponés solemne.",
          teacher: ["¿Un regalo puede ser una disculpa sin que nadie diga «perdón»?", "Reformulá la frase de Vale sobre la escoba para que Tomi la pueda escuchar sin ofenderse."],
        },
      },
    },

    restaurante: {
      focus: "Decidir cuando nadie dice lo que piensa",
      help: {
        starters: ["Lo dijiste en un tono que…", "No sé si lo decís en serio, pero…", "Si te entendí bien, …", "Digamos que…", "Sin ironía, te lo juro: …"],
        chunks: ["decirlo con la boca chica", "quedar como el amarrete", "hacerse el gracioso", "tirar una indirecta", "sin segundas intenciones"],
        vocab: ["la cuenta", "el mozo", "el tono", "el sobreentendido", "la propina"],
      },
      activities: {
        "resto-cuenta": {
          situation: "Son cinco en la mesa. Lu solo pidió una gaseosa porque ya había cenado. Martín propone dividir en partes iguales y Lu contesta: «Sí, sí, dividamos todo. Re justo». Nadie se ríe.",
          prompt: "Lu dijo que sí. ¿Qué escuchaste vos?",
          options: [
            {
              id: "iguales",
              label: "Tomás el «sí» de Lu al pie de la letra.",
              result: "Dividen en partes iguales. Lu paga con una sonrisa perfecta y dice «buenísimo, me encanta colaborar». Martín no registra nada; los demás, sí.",
              ask: "«Me encanta colaborar»: ¿es un cierre, un reproche o una invitación a corregir? ¿Le contestás algo o dejás que la frase quede flotando?",
            },
            {
              id: "cada-uno",
              label: "Proponés «cada uno lo suyo» como si fuera idea tuya.",
              result: "Nadie nombra a Lu, pero todos entienden por qué lo proponés. Martín dice «ah, ahora resulta que soy un tirano de la división» y se ríe a medias. Las entradas compartidas quedan en el aire.",
              ask: "Martín se ríe «a medias». ¿Qué parte es chiste y qué parte es queja? Contestale de manera que pueda salvar la cara.",
            },
            {
              id: "otra",
              label: "Nombrás el subtexto con humor.",
              result: "Decís: «Traduzco a Lu: “sí, sí” significa “ni en sueños”». Lu se ríe y asiente; Martín levanta las manos: «¡Yo qué sé, no hablo lufiano!». Se arma otra división.",
              ask: "Explicale a Martín, sin burlarte, qué señales tendría que haber notado en el «sí, sí» de Lu.",
            },
          ],
          close: "¿Cuándo conviene leer el subtexto en voz alta y cuándo es mejor hacer como que no lo escuchaste?",
          role: "Sos Lu: nunca decís «no» directamente; todo tu desacuerdo está en el tono, las repeticiones y los «re». Si alguien lo nombra, lo negás con una sonrisa.",
          teacher: ["Decí «Sí, sí, dividamos todo» de tres maneras: entusiasta, resignada e irónica. ¿Qué cambia en la voz?", "¿En tu lengua hay una fórmula que, según el tono, signifique lo contrario de lo que dice?"],
        },
        "resto-plato": {
          situation: "Lu es vegetariana y pidió ravioles de verdura. Llegan con salsa de carne. Lu mira el plato y dice, muy amable: «Ah, qué original la interpretación del chef».",
          prompt: "¿Qué hacés con el comentario de Lu?",
          options: [
            {
              id: "devolver",
              label: "Le traducís el comentario al mozo, sin ironía.",
              result: "Le explicás al mozo con toda claridad que el plato es para alguien vegetariana. Se disculpa y se lo lleva; tarda veinticinco minutos. Lu comenta que «al menos la espera es vegetariana».",
              ask: "Lu sigue con la ironía mientras espera. ¿La acompañás en el chiste o le ofrecés otra salida al malhumor? Mostralo con una frase.",
            },
            {
              id: "compartir",
              label: "Le seguís el juego y le pasás tu plato.",
              result: "Decís «Su ensalada, señora crítica» y le das la mitad. Lu se ríe. Pero cuando llega la cuenta, los ravioles con carne están cobrados como si alguien los hubiera disfrutado.",
              ask: "Reclamale al mozo por los ravioles cobrados. Podés usar un poco de ironía, pero que no suene a ataque: ¿dónde está el límite?",
            },
            {
              id: "nada",
              label: "Le decís al mozo «todo perfecto, gracias».",
              result: "El mozo se va contento. Lu aparta la carne con precisión quirúrgica y media hora después dice: «Qué rico todo. ¿Vamos a comer algo?».",
              ask: "«Qué rico todo. ¿Vamos a comer algo?»: explicá por qué esa frase es graciosa y qué reproche esconde para vos.",
            },
          ],
          close: "¿La ironía ayuda a reclamar o hace que el reclamo no se tome en serio? Pensá en un caso concreto.",
          role: "Sos el mozo: no captás la ironía a la primera. Si te hablan con dobles sentidos, contestás literalmente («No, el chef es el de siempre»).",
          teacher: ["¿Con quién no usarías nunca la ironía: un mozo, una jefa, un desconocido?", "Convertí el comentario de Lu en un reclamo formal y amable."],
        },
        "resto-al-lado": {
          situation: "En la mesa de al lado festejan un cumpleaños a los gritos. Martín, que quería contarles algo importante, dice: «No, tranqui, lo cuento otro día. O en otra vida».",
          prompt: "¿Atendés primero el ruido o lo que dijo Martín?",
          options: [
            {
              id: "mozo",
              label: "Le piden al mozo que intervenga.",
              result: "El mozo dice «es un cumpleaños, es un ratito» con la sonrisa de quien ya dijo eso cuatro veces esta noche. Media hora después, siguen igual.",
              ask: "El «ratito» ya lleva media hora. Volvé a pedirle al mozo que haga algo, con un tono que no sea ni sumiso ni agresivo.",
            },
            {
              id: "hablar",
              label: "Vas a hablar con la mesa de al lado.",
              result: "Les pedís «un poquito menos de entusiasmo» y la cumpleañera contesta: «¡Imposible, cumplo cuarenta y es mi último año de juventud!». Se ríen, bajan un poco y les mandan torta.",
              ask: "La cumpleañera te contestó con humor. Devolvele otra frase igual de simpática que, de paso, consiga lo que necesitás.",
            },
            {
              id: "sumarse",
              label: "Se suman al festejo de al lado.",
              result: "Juntan las mesas y cantan. Martín canta más fuerte que nadie, pero cuando termina te dice al oído: «Buenísimo. Justo lo que necesitaba».",
              ask: "«Justo lo que necesitaba»: ¿sincero o irónico? ¿Qué pistas te da el contexto, y cómo le abrís un espacio para hablar?",
            },
          ],
          close: "¿Cómo te das cuenta de que alguien dice «otro día» queriendo decir «ahora»?",
          role: "Hacé de la cumpleañera: exagerada y teatral, contestás todo con chistes, pero entendés perfectamente cuando alguien te pide algo en serio.",
          teacher: ["¿Qué frase usás vos para decir que algo te importa sin que se note demasiado?", "Martín dijo «o en otra vida». ¿Qué le dirías para que no se sienta expuesto delante de todos?"],
        },
      },
    },

    plaza: {
      hubPrompt: "En la plaza nadie dice del todo lo que piensa. Elegí con quién hablar y escuchá lo que queda entre líneas.",
      focus: "Conversar captando ironía, humor y lo que no se dice",
      help: {
        starters: ["Lo decís en chiste, pero…", "Me suena a que…", "No sé si me estás cargando, pero…", "Dicho en otras palabras, …", "Ojo, que no es lo mismo… que…"],
        chunks: ["tomarse algo con humor", "decirlo medio en broma", "tirar la piedra y esconder la mano", "hacerse el que no le importa", "de la boca para afuera"],
        vocab: ["el sarcasmo", "la autoironía", "el doble sentido", "el tono"],
      },
      activities: {
        pablo: {
          who: "Espera a un amigo y jura que está todo bien",
          says: "Cuarenta y cinco minutos. Pero no, todo bien, me encanta la plaza de noche. Seguro le pasó algo gravísimo, como encontrar algo mejor que hacer.",
          ask: "Pablo dice «todo bien» y en la misma frase dice lo contrario. ¿Le respondés a la frase o al enojo? Contestale de modo que se sienta entendido sin echarle leña al fuego.",
          followUps: [
            "El amigo de Pablo aparece y dice: «¿Llegué tarde? Ni me di cuenta». Pablo te mira. ¿Qué le soplás para que conteste con una ironía elegante y no con una pelea?",
            "Contá una espera tuya en tres versiones de una sola frase: como queja, como chiste y como anécdota.",
          ],
          role: "Sos Pablo: sarcástico, pero dolido. Si te toman el sarcasmo al pie de la letra, te enojás más; si alguien nota lo que hay detrás, te ablandás.",
        },
        ines: {
          who: "Se mudó al barrio y se ríe de su vida social",
          says: "Me mudé hace una semana. Por ahora mi vida social es excelente: el portero me saluda y el perro del quinto me ladra con mucho cariño.",
          ask: "Inés usa la autoironía para contar que está sola. ¿Le seguís el humor, le hablás en serio o hacés las dos cosas? Mostralo con lo que le decís.",
          followUps: [
            "Inés te pregunta: «¿Y vos? ¿Tenés amigos o también te ladran?». Contestale con humor sin quitarle peso a lo que ella siente.",
            "El humor sobre la soledad, ¿la achica o la esconde? Pensá en un ejemplo propio o ajeno.",
          ],
          role: "Sos Inés: usás el humor como escudo. Si alguien te ofrece un plan concreto con delicadeza, aceptás; si te tienen lástima, hacés otro chiste.",
        },
        pareja: {
          who: "Una pareja que discute a fuerza de ironías",
          says: "Ana: «Yo quiero ir a bailar, pero si Diego prefiere quedarse sentado mirando la pared, adelante». Diego: «No, no, vamos a bailar. Me fascina. Mirá cómo me fascina». Los dos te miran.",
          ask: "Ana y Diego te piden que arbitres, pero ninguno dice lo que quiere sin ironía. ¿Qué escuchás detrás de cada frase y cómo intervenís sin tomar partido?",
          followUps: [
            "Diego te dice por lo bajo: «Estoy muerto, pero si lo digo es como que pierdo». ¿Qué significa «perder» para él y cómo lo ayudás a decirlo sin perder?",
            "En pareja o entre amigos, ¿la ironía sirve para discutir sin pelear o es una pelea con otro disfraz?",
          ],
          role: "Hacé de Ana y de Diego: compiten en ironía. Bajan las armas solo si alguien nombra lo que quiere cada uno sin burlarse.",
        },
        ramiro: {
          who: "Perdió el último colectivo y se lo toma con humor negro",
          says: "Perdí el último colectivo por un minuto. Por un minuto. El chofer me vio, te juro que me vio, y aceleró con un cariño… Tengo el celular casi sin batería y un optimismo admirable.",
          ask: "Ramiro se ríe de su propia mala suerte. ¿Qué parte del humor es para no desesperarse? Proponele una solución con un tono que acompañe el suyo.",
          followUps: [
            "Le ofrecés una idea y Ramiro dice: «Genial, otra idea brillante». ¿Cómo distinguís si es sarcasmo o un agradecimiento cansado? ¿Qué le contestás en cada caso?",
            "Contá una noche en que no podías volver a tu casa, pero con el humor seco de Ramiro.",
          ],
          role: "Sos Ramiro: humor negro, rechazás la primera idea con sarcasmo. Aceptás una propuesta si te la hacen con la misma ironía.",
        },
        marta: {
          who: "Se jubiló hoy y se ríe del regalo",
          says: "¡Hoy me jubilé! Cuarenta años en la misma oficina. Me regalaron una lapicera. Una lapicera. Para que siga escribiendo, supongo.",
          ask: "Marta está feliz y a la vez se burla del regalo. ¿Qué te dice esa lapicera sobre sus cuarenta años? Respondele algo que tome en serio las dos emociones.",
          followUps: [
            "Marta pregunta: «¿Y vos qué vas a hacer cuando no tengas que trabajar más? Y no me digas “descansar”, que es una respuesta de lapicera». Contestale.",
            "¿Qué regalo o qué gesto de despedida sería lo contrario de una lapicera? Describilo.",
          ],
          role: "Sos Marta: lúcida, irónica y generosa con los consejos. Si alguien te da una respuesta genérica, la desarmás con una pregunta.",
        },
        kenji: {
          who: "Un turista que no entiende por qué se ríen",
          says: "Perdón, mi español es poco. Pregunté por un lugar «auténtico» y un señor me dijo: «Ah, sí, re auténtico el de la esquina». Y se rió. ¿Por qué se rió?",
          ask: "Kenji no captó la ironía del señor. Explicale qué quiso decir con «re auténtico», con palabras muy simples y sin usar ironía vos.",
          followUps: [
            "Kenji prueba: «Este barrio es re tranquilo», justo cuando pasa una ambulancia. ¿Lo dijo con ironía o por error? ¿Cómo se lo explicás sin hacerlo sentir mal?",
            "¿La ironía se puede traducir? Pensá en una frase irónica de tu lengua que no funcionaría en español.",
          ],
          role: "Sos Kenji: entendés las palabras pero no el tono. Pedís que te expliquen cada sonrisa y al final intentás usar la ironía, con resultados dudosos.",
        },
        sofia: {
          who: "Le cancelaron una cita y no se lo cree",
          says: "Me cancelaron una cita a último momento. Dijo que «le surgió algo». Qué casualidad que a la gente siempre le surja algo, ¿no? En fin. ¿Te venís a un bar de jazz acá a la vuelta?",
          ask: "La invitación de Sofía llega pegada a una queja. ¿Es una invitación de verdad, una forma de no quedarse sola o una revancha? Contestale de modo que tu respuesta funcione en los tres casos.",
          followUps: [
            "Si no vas, decíselo de tres maneras: con humor, con franqueza y con una excusa que ella pueda reconocer como excusa sin sentirse engañada.",
            "«Me surgió algo»: ¿es una mentira, una cortesía o un código que todos entienden?",
          ],
          role: "Sos Sofía: directa e irónica. Detectás las excusas al instante: si te dan una, la nombrás con humor; si te dicen que no con franqueza, lo respetás.",
        },
      },
    },

    bar: {
      hubPrompt: "En el bar todo se dice a medias: un tono, una sonrisa, una pausa. Acercate a una situación y resolvela.",
      focus: "Resolver conflictos midiendo el tono al milímetro",
      help: {
        starters: ["Sin ánimo de…, …", "No te lo tomes a mal, pero…", "Digamos que no es el mejor momento para…", "Te lo digo con cariño: …", "Hagamos de cuenta que no dije…"],
        chunks: ["bajar un cambio", "hacerse el ofendido", "no darse por aludido", "decirlo con una sonrisa", "salvar la situación"],
        vocab: ["la barra", "la fila", "la ronda", "la indirecta", "el malentendido"],
      },
      activities: {
        fuerte: {
          who: "Un hombre en la barra y tu amiga",
          situation: "Un hombre en la barra habla por teléfono a los gritos. Tu amiga, que no escucha nada de lo que le contás, le dice bien fuerte: «Qué interesante su llamada, ¿no? Ya sabemos todo de su cuñado».",
          task: "La ironía de tu amiga puede funcionar o empeorar todo. Intervení antes de que él conteste, con una frase que conserve el humor pero le saque el veneno.",
          pushback: "El hombre sonríe sin ganas: «Ah, perdón. No sabía que estaba en una biblioteca. ¿Le bajo también la respiración?».",
          task2: "Ahora el irónico es él. Contestale sin entrar en un duelo de sarcasmo y conseguí que baje la voz.",
          role: "Sos el hombre del teléfono: contestás ironía con ironía. Si alguien te habla con humor sin burlarse, te reís y cedés.",
        },
        quedarse: {
          who: "Leo, el grupo y una frase desafortunada",
          situation: "Leo, el compañero de departamento de Vale, quiere irse: mañana rinde un examen temprano. Lo anuncia así: «Bueno, me voy yendo, que algunos tenemos vida académica».",
          task: "La frase de Leo puede sonar a chiste o a reproche. Ayudalo a irse de manera que el grupo escuche el chiste y no el reproche.",
          pushback: "El grupo: «¡Ah, el señor académico! Andá, andá, que nosotros nos quedamos acá, en nuestra ignorancia».",
          task2: "El grupo le devolvió la ironía. Respondé por Leo, o ayudalo a responder, para que se vaya riéndose y no ofendido.",
          role: "Sos el grupo: insistís con ironía cariñosa. Si alguien te devuelve el humor con gracia, lo despedís con aplausos.",
        },
        billetera: {
          who: "Martín y su «patrón»",
          situation: "Llega la cuenta de la ronda. Martín se palpa los bolsillos y dice, muy serio: «Uy. Otra vez. Qué raro, ¿no? Debe ser un patrón». Es la segunda vez este mes.",
          task: "Martín se adelanta con autoironía. Decile que esta vez pagás vos, pero que el «patrón» no te causa tanta gracia, sin romper el clima.",
          pushback: "Martín deja de sonreír: «Era un chiste. Pero bueno, si lo querés convertir en un juicio…».",
          task2: "Martín usa la palabra «juicio» para correrse de lugar. Desactivá esa palabra sin echarte atrás en lo que dijiste.",
          role: "Sos Martín: te defendés con humor y, cuando no alcanza, con un poco de victimismo. Solo cedés si te hablan sin ironía y sin acusarte.",
        },
        fila: {
          who: "Dos chicas que «no vieron» la fila",
          situation: "Hace veinte minutos que esperás para pedir. Dos chicas se ponen delante tuyo. Una mira hacia atrás y dice: «Ay, ¿había fila? Qué organizados».",
          task: "Ella finge sorpresa. Explicale el problema sin acusarla de mentir, pero dejando claro que la ficción no te convence.",
          pushback: "La otra chica sonríe: «Es que nos guardaba el lugar un amigo… que justo se fue al baño». No hay ningún amigo.",
          task2: "Elegí: le seguís el juego al amigo imaginario con una ironía que las haga reír, o cortás la ficción con una frase seria y amable. Decila.",
          role: "Sos una de las chicas: caradura con encanto. Si te descubren con gracia, te reís y pedís disculpas; si te acusan, te hacés la ofendida.",
        },
        caro: {
          who: "Vale, Sergio y un chiste sobre la plata",
          situation: "Vale propone terminar la noche en un bar de cócteles carísimo. Sergio dice: «Sí, obvio, total la plata crece en los árboles». Todos se ríen. Vos tampoco querés gastar tanto.",
          task: "El chiste de Sergio ya puso el tema sobre la mesa. Aprovechalo para marcar tu límite sin que parezca que te sumás a una burla contra Vale.",
          pushback: "Vale, con una sonrisa: «Ah, perfecto. Entonces festejo mi cumpleaños sola, con mis árboles».",
          task2: "Vale responde con una ironía que también es una pequeña herida. Contestale de modo que se ría y entienda que tu límite no es contra ella.",
          role: "Sos Vale: ironía rápida, pero te importa de verdad que estén todos. Si alguien te propone otra cosa con cariño y humor, aceptás cambiar.",
        },
        cancelo: {
          who: "Un mensaje de Nico que se condena solo",
          situation: "Nico escribe: «Al final no voy a poder ir. Ya sé, ya sé, soy lo peor. Pueden odiarme». Es la tercera vez que cancela, y este plan lo habían armado juntos.",
          task: "Nico se condena antes de que digas nada. Llamalo y decile cómo te sentís sin caer en el «no, no sos lo peor» automático.",
          pushback: "Silencio. Después Nico dice, con otra voz: «No, en serio. Estoy pasando un momento medio complicado».",
          task2: "Debajo del «soy lo peor» había otra cosa. Cambiá de registro: ¿qué le decís ahora y qué le proponés?",
          role: "Sos Nico: al principio te escondés en una autoironía exagerada; si te escuchan de verdad, dejás de actuar y contás lo que te pasa.",
        },
        invitacion: {
          who: "Sergio, de traje, en la puerta",
          situation: "Sergio llega de traje y con un regalo envuelto en papel dorado. Todos están en zapatillas. Alguien murmura: «Uy, llegó el novio».",
          task: "Antes de que el comentario se vuelva el chiste de la noche, ayudá a Sergio con una frase que ponga el traje a su favor.",
          pushback: "Sergio, colorado: «Me dijeron “algo tranqui”. Pensé que “tranqui” era una forma elegante de decir “formal”».",
          task2: "Explicale qué quiere decir «algo tranqui» en este grupo, y dale otro ejemplo de frase en código que tampoco entendería.",
          role: "Sos Sergio: avergonzado, pero si te ayudan, empezás a hacer chistes sobre tu propio traje.",
        },
      },
    },

    auto: {
      focus: "Encadenar condiciones con precisión y matiz",
      help: {
        starters: ["De haberlo sabido, …", "Si llegara a…, …", "Salvo que…, …", "A menos que…, …", "En el caso improbable de que…"],
        chunks: ["por si las moscas", "en el mejor de los casos", "con suerte", "como quien no quiere la cosa", "a riesgo de…"],
        vocab: ["el capó", "las balizas", "la grúa", "el auxilio mecánico", "el bidón"],
      },
      grammar: {
        title: "Condiciones con matices",
        rows: [
          { form: "a menos que / salvo que + subjuntivo", example: "Vamos en taxi, a menos que aparezca el mecánico." },
          { form: "de + infinitivo compuesto", example: "De haber revisado el aceite, no estaríamos acá." },
          { form: "si + pluscuamperfecto de subjuntivo → condicional", example: "Si me hubieras avisado, ahora no estaríamos empujando." },
          { form: "como + subjuntivo (advertencia)", example: "Como vuelva a llover, me voy caminando." },
        ],
      },
      activities: {
        "auto-aeropuerto": {
          situation: "La calle está casi vacía. Carla tiene el capó abierto y sale un poco de humo. Su vuelo sale muy temprano. Mira el motor y dice: «Perfecto. Justo hoy. Cómo amo este auto».",
          ask: "Carla se descarga con ironía. Primero, ¿qué le decís para calmarla sin quitarle importancia al problema? Después, armá dos planes con «a menos que» o «salvo que».",
          conditions: [
            { text: "Empieza a llover fuerte. Carla mira el cielo: «Ah, bueno, gracias».", ask: "Si la lluvia no para, ¿cuál de tus planes se cae? Contestale también a la ironía de Carla con un poco de humor." },
            { text: "El celular de Carla tiene 4 % de batería. «Igual que mi paciencia», dice.", ask: "De haber sabido lo de la batería, ¿qué habrían hecho distinto? ¿Y qué hacen ahora, antes de que llegue a cero?" },
            { text: "Un hombre frena y se ofrece a llevarla. Sonríe demasiado. Nadie lo conoce.", ask: "«Sonríe demasiado»: ¿es un dato o un prejuicio? Si fueras Carla, ¿aceptarías, y con qué condiciones?" },
            { text: "El taller de la esquina cierra en diez minutos. El mecánico ya está bajando la persiana.", ask: "Convencé al mecánico en dos frases. ¿Qué tono elegís para que «ya cerramos» no sea la última palabra?" },
          ],
          close: "Contá cómo terminó la noche de Carla en dos versiones: una seria y otra con su humor de catástrofe. Usá por lo menos dos condiciones con matiz.",
          role: "Sos Carla: ironía de catástrofe («¡qué suerte la mía!») y cambios de idea rápidos. Si alguien te calma sin tratarte como a una nena, le hacés caso.",
        },
        "auto-nafta": {
          situation: "Un señor empuja su auto hasta la vereda. Se quedó sin nafta a tres cuadras de la estación de servicio. Se llama Julio y dice: «No pasa nada, es mi forma de hacer ejercicio». Está tranquilo. Demasiado tranquilo.",
          ask: "¿La calma de Julio es real, es pose o es su manera de no pedir ayuda? Ofrecele una mano de forma que pueda aceptarla sin quedar mal.",
          conditions: [
            { text: "La estación de servicio cierra en veinte minutos. Julio: «Ah, sobra tiempo».", ask: "A menos que se apuren, no llegan. ¿Cómo apurás a alguien que se toma todo con calma sin sonar irrespetuoso?" },
            { text: "Julio tiene un bidón vacío en el baúl. «Yo lo llevaría, pero mi espalda tiene otra opinión».", ask: "Si vas vos a buscar la nafta, ¿cómo le pedís a Julio que cuide el auto sin que sienta que lo dejás de lado?" },
            { text: "Julio te cuenta que va a la fiesta de Vale. Es su papá. «No le digas que me quedé sin nafta, que me lo recuerda diez años».", ask: "Julio te pide complicidad. ¿Se lo contás a Vale, se lo ocultás o encontrás una versión que no sea ni una cosa ni la otra?" },
          ],
          close: "Si te hubiera pasado a vos, ¿con qué frase habrías pedido ayuda sin pedirla del todo?",
          role: "Sos Julio: charlatán e irónico sobre tu edad y tu auto. Nunca pedís ayuda directamente: la insinuás con anécdotas.",
        },
      },
    },

    museo: {
      hubPrompt: "Hoy el museo abre de noche. Cada cartel cuenta una versión de la historia; vos vas a notar lo que calla. Elegí una pieza.",
      focus: "Narrar el pasado leyendo lo que el relato oficial no dice",
      help: {
        starters: ["El cartel dice…, pero no dice…", "Habrá sido…", "Puede que ya hubiera…", "Vista de otra manera, la historia…", "Lo que nadie habrá querido contar es…"],
        chunks: ["a esa altura", "a fin de cuentas", "por lo visto", "vaya uno a saber", "sin que nadie se enterara"],
        vocab: ["la vitrina", "el cartel", "la versión oficial", "el eufemismo", "el epílogo"],
      },
      grammar: {
        title: "Narrar con matices",
        rows: [
          { form: "Imperfecto y pretérito: la escena y el quiebre", example: "Todos miraban la tele cuando, sin hacer ruido, él agarró la valija." },
          { form: "Pluscuamperfecto: lo que ya se sabía", example: "Para entonces, ella ya había decidido no esperar más." },
          { form: "Futuro y condicional de conjetura", example: "Habrá sido un error. / Serían las tres cuando sonó." },
        ],
      },
      activities: {
        foto: {
          plaque: "Encontrada en una valija abandonada en una estación de tren. Cinco personas en una playa, sonriendo «como se sonreía antes», según el cartel. Una se tapa la cara con un sombrero.",
          ask: "El cartel dice «como se sonreía antes». ¿Nostalgia, ironía del curador o una pista? Contá qué estaba pasando cuando sacaron la foto.",
          detail: "Atrás, en lápiz: «El último verano antes de todo». Con otra letra, alguien agregó: «Antes de todo, sí. Qué manera elegante de decirlo».",
          ask2: "Dos personas escribieron atrás de la foto y la segunda le contesta a la primera. ¿Qué pasó después de ese verano y quién se burla de quién?",
          role: GUARDIA,
        },
        telefono: {
          plaque: "Estuvo en una esquina de este barrio. Según los vecinos, una noche sonó durante una hora y «nadie lo escuchó». Cuarenta vecinos, nadie.",
          ask: "«Nadie lo escuchó», dicen cuarenta vecinos. ¿Qué te hace pensar ese «nadie»? Imaginá la noche y a quién le convenía no escuchar.",
          detail: "A la mañana siguiente, una mujer atendió por fin. Escuchó una sola frase, dijo «ya era hora» y se fue llorando.",
          ask2: "«Ya era hora»: ¿alivio, reproche o despedida? ¿Qué frase escuchó y qué hizo después?",
          role: GUARDIA,
        },
        boleto: {
          plaque: "Buenos Aires – Mendoza, 14 de julio de 1987. Ese tren nunca salió de la estación. El informe oficial habla de «inconvenientes técnicos menores».",
          ask: "«Inconvenientes técnicos menores» para un tren que nunca salió: ¿qué esconde un eufemismo así? Contá qué habrá pasado esa noche en la estación.",
          detail: "El boleto tiene un nombre escrito a mano, una mancha de café y, en una esquina, dos palabras: «Menos mal».",
          ask2: "¿Por qué alguien escribiría «menos mal» en el boleto de un tren que no salió? ¿Qué hizo esa noche en vez de viajar?",
          role: GUARDIA,
        },
        carta: {
          plaque: "Una mujer la encontró veinte años después de que fue escrita, detrás de un mueble, el día que se mudaba. Según su familia, «se rió un buen rato».",
          ask: "¿De qué se puede reír alguien al encontrar una carta veinte años tarde? Imaginá qué había pasado antes: quién la escribió y por qué nunca llegó.",
          detail: "La carta decía: «Si me esperás, vuelvo en marzo». No decía de qué año.",
          ask2: "«No decía de qué año»: contá la historia de modo que ese detalle sea, a la vez, lo más triste y lo más gracioso.",
          role: GUARDIA,
        },
        valija: {
          plaque: "Llegó a la oficina de objetos perdidos del puerto. Nadie la reclamó nunca, «por suerte», según anotó a mano un empleado en la ficha.",
          ask: "¿Por qué un empleado escribiría «por suerte» en la ficha de una valija perdida? ¿Qué sabía él que el cartel no cuenta?",
          detail: "Adentro había un vestido de novia, un mapa de Italia y un pasaje de barco sin usar. El vestido estaba doblado con mucho cuidado; el mapa, hecho un bollo.",
          ask2: "Un objeto cuidado y otro arrugado: contá la historia completa a partir de ese contraste.",
          role: GUARDIA,
        },
        televisor: {
          plaque: "En este televisor, medio barrio vio a los astronautas llegar a la Luna. La familia de la casa la recuerda como «la noche en que todos miramos para arriba».",
          ask: "«Todos miramos para arriba»: ¿literal, metáfora o reproche? ¿Cómo era esa noche en la casa y quién no miraba la pantalla?",
          detail: "Mientras todos miraban la Luna, el hijo mayor se fue de la casa sin avisar. Dejó la puerta abierta «para que entrara la Luna», dice hoy la familia.",
          ask2: "Contá adónde fue y por qué eligió ese momento. La frase de la puerta abierta, ¿es de él o la inventó la familia después?",
          role: GUARDIA,
        },
        bicicleta: {
          plaque: "Un cartero la usó treinta años en este barrio. Su legajo dice: «Puntual, prolijo, sin novedades». El último día de trabajo no volvió al correo.",
          ask: "«Sin novedades» en treinta años: ¿elogio, aburrimiento o un silencio que esconde algo? ¿Cómo era un día del cartero y qué pasó el último?",
          detail: "Esa tarde, el cartero entregó su última carta. Estaba dirigida a él, y el remitente era el correo.",
          ask2: "Una carta del correo a su propio cartero, el último día: ¿homenaje, ironía burocrática o despedida? Contá qué decía y qué hizo él.",
          role: GUARDIA,
        },
        habitacion: {
          plaque: "Así estaba el cuarto de una estudiante: una máquina de escribir, una planta, el póster de un recital. La cama, sin deshacer. El cartel dice que era «una chica tranquila».",
          ask: "«Una chica tranquila»: ¿qué tipo de persona describe esa frase y qué tipo de persona se le escapa? Describí un día suyo.",
          detail: "En la máquina quedó una hoja con una sola línea: «Hoy decidí irme». Abajo, tachado: «Ojalá alguien lo note».",
          ask2: "La segunda frase está tachada. ¿Por qué la escribió y por qué la tachó? ¿Adónde se fue, y volvió alguna vez?",
          role: GUARDIA,
        },
        caja: {
          plaque: "Apareció una mañana en la puerta del museo con una nota: «Esto tiene que estar acá. No pregunten». Nadie preguntó, claro.",
          ask: "«Nadie preguntó, claro»: ¿qué dice ese «claro» sobre el museo y sobre quien escribió el cartel? Inventá la historia de la caja.",
          detail: "Cuando la arreglaron, tocaba la misma canción que suena todas las noches en el bar de enfrente. El dueño del bar dice que «es pura coincidencia».",
          ask2: "El dueño del bar habla de coincidencia. ¿Le creés? Contá qué había pasado antes, de modo que su frase suene a mentira piadosa.",
          role: GUARDIA,
        },
      },
    },

    taxi: {
      focus: "Comparar opciones cuando la ironía también es un dato",
      help: {
        starters: ["En teoría es más rápido, pero…", "Sale lo mismo, si no contamos…", "Si le creo al conductor, …", "Me quedo con…, aunque…", "Lo barato, ya se sabe, …"],
        chunks: ["lo barato sale caro", "el camino más corto, en teoría", "con todo el tránsito del mundo", "calcular a ojo", "jugar a la ruleta"],
        vocab: ["el desvío", "la tarifa", "el taxímetro", "el atajo", "el espejo retrovisor"],
      },
      activities: {
        "taxi-cortado": {
          situation: "Vas en taxi a la terraza de Vale. A dos cuadras, la policía corta la calle por un recital. El conductor te mira por el espejo: «Bueno, usted manda. Yo solo conozco la ciudad hace treinta años».",
          prompt: "El conductor te dejó la decisión con ironía. Compará las tres opciones (tiempo, plata y comodidad) y elegí, sabiendo que él tiene opinión.",
          options: [
            {
              id: "caminar",
              label: "Bajarte y cruzar a pie",
              result: "Te bajás y cruzás el recital. En primera fila, Nico. Te ve y grita: «¡Viniste a mi fiesta! Ah, no, perdón, la fiesta es la de Vale». Y te hace señas para que te quedes.",
              ask: "Nico te tienta con un chiste que también es una pequeña culpa. ¿Qué le contestás, y qué le escribís a Vale para que no se entere por otro lado?",
            },
            {
              id: "rodear",
              label: "Rodear por el puerto, como «sugiere» él",
              result: "El conductor toma el puerto «porque usted quiso». Llegás cómodo, pagás el doble y te perdés el brindis. Vale te recibe: «Ah, llegaste. Qué puntualidad tan… tuya».",
              ask: "«Qué puntualidad tan tuya»: ¿cariño o reproche? Contestale a Vale de modo que el viaje parezca una aventura y no una excusa.",
            },
            {
              id: "esperar",
              label: "Esperar a que liberen la calle",
              result: "Esperan. El conductor apaga el motor: «Total, apuro no hay, ¿no?». Pone la radio y te cuenta que durante veinte años fue músico. «Bueno, músico… tocaba».",
              ask: "«Bueno, músico… tocaba»: ¿qué hay en esa corrección? Preguntale por su vida de músico de manera que pueda contar lo que no dice.",
            },
          ],
          close: "Cuando alguien te dice «usted manda» con ironía, ¿de verdad te deja decidir? ¿Cómo le respondés?",
          role: "Sos el conductor: decís «usted manda», pero opinás de todo con ironía. Si el pasajero te pide tu opinión en serio, la das con gusto.",
        },
        "taxi-mayor": {
          situation: "Le dijiste «a la calle Mayor». Diez minutos después te das cuenta de que el taxi va a la Plaza Mayor, al otro lado de la ciudad. El conductor: «Mayor hay una sola, ¿no? Bah, eso creía yo».",
          prompt: "Compará rápido, que el taxímetro no entiende de matices.",
          options: [
            {
              id: "seguir",
              label: "Seguir hasta la plaza y ver qué pasa",
              result: "Llegás a la Plaza Mayor: hay un mercado nocturno lleno de gente. El conductor, mientras te cobra el viaje completo, dice: «¿Ve? Al final le hice un favor».",
              ask: "Mandale un audio a Vale contando dónde terminaste. Contá el error de modo que la haga reír, sin quedar como alguien que no sabe dar una dirección.",
            },
            {
              id: "volver",
              label: "Pedirle que pegue la vuelta",
              result: "El conductor da la vuelta y dice: «Sin problema. El error fue suyo, pero sin problema». Lo repite tres veces en el camino.",
              ask: "«Sin problema», tres veces: negociá el precio sabiendo que para él sí hay un problema. ¿Cómo lo nombrás sin pelear?",
            },
            {
              id: "bajar",
              label: "Bajarte y buscar otro auto",
              result: "Te bajás en una esquina que no conocés. La aplicación dice «buscando conductores cerca» y lleva cinco minutos buscando. La llovizna se vuelve lluvia.",
              ask: "Entrás a un kiosco empapado. Pedí ayuda con un poco de humor sobre tu situación, sin perder claridad sobre adónde vas.",
            },
          ],
          close: "¿De quién fue el malentendido? Contalo dos veces: una echándole la culpa al conductor y otra, con elegancia, a vos.",
          role: "Sos el conductor: no aceptás el error y lo repetís con frases amables que no lo son. Cedés si te hacen reír.",
        },
      },
    },

    tienda: {
      focus: "Describir con precisión y jugar con el doble sentido",
      help: {
        starters: ["No es exactamente…, sino…", "Se parece a…, pero sin…", "Pensá en…, pero al revés", "Digamos que es lo que usarías si…", "Casi, pero no: …"],
        chunks: ["ni más ni menos que", "dicho mal y pronto", "para salir del paso", "lo que en mi país sería…", "ni muy muy ni tan tan"],
        vocab: ["el estante", "el mostrador", "el empleado", "el vuelto", "la patita"],
      },
      activities: {
        "tienda-enchufe": {
          situation: "Tu cargador es de otro país y no entra en ningún toma de la pared. Te queda 3 % de batería. El empleado mira el aparato y dice: «Ah, qué tecnología».",
          need: "un adaptador de enchufe, de los que cambian la forma de las patitas",
          banned: ["adaptador", "enchufe", "cargador", "toma"],
          task: "Explicale al empleado qué necesitás sin las palabras prohibidas, con una precisión que no deje lugar a malentendidos.",
          wrong: "El empleado vuelve, triunfal, con un alargue de cuatro tomas: «Para que conecte cuatro celulares de otro país».",
          task2: "Su respuesta, ¿es un malentendido o una burla? Decidí qué es y contestá en consecuencia: aclarás la diferencia o le seguís el chiste.",
          close: "¿Cuál fue la descripción más precisa que hiciste hoy? ¿Qué palabra te faltó y cómo la rodeaste?",
          role: "Sos el empleado: entendés todo al revés, y no siempre se sabe si es a propósito. Si te descubren, lo admitís con humor.",
        },
        "tienda-hielo": {
          situation: "Vale te pidió hielo para la previa, pero las bolsas se rompen y el hielo se derrite. El empleado, sin levantar la vista: «¿Problemas con el hielo? Un clásico».",
          need: "una conservadora, una heladerita portátil para la previa",
          banned: ["conservadora", "heladera", "frío", "térmica"],
          task: "Describí lo que buscás de manera que el empleado no lo pueda confundir con nada: forma, material, función y también lo que NO es.",
          wrong: "El empleado te ofrece un balde de plástico y un diario viejo: «Tecnología de punta. Lo usaba mi abuela».",
          task2: "¿Es una broma, una solución real o las dos cosas? Contestale de manera que quede claro qué parte de su idea aceptás.",
          close: "Describí un objeto de tu casa con tanta precisión que alguien lo pueda dibujar sin haberlo visto.",
          role: "Sos el empleado: humor seco y soluciones caseras para todo. Si te piden algo con mucha precisión, de golpe aparece lo que buscaban.",
        },
        "tienda-regalo": {
          situation: "No tenés nada para Vale. En el almacén hay un estante con cosas raras: velas, juegos de cartas, un destapador con forma de pez. El empleado comenta: «Para último momento, tenemos de todo».",
          need: "algo que a Vale le guste de verdad: ama viajar y el café",
          banned: ["regalo", "viaje", "café", "cumpleaños"],
          task: "Describí a Vale sin esas palabras, de manera que el empleado entienda cómo es ella y no solo qué le gusta.",
          wrong: "El empleado te muestra el destapador con forma de pez: «Este dice “pensé en vos”, pero sin exagerar».",
          task2: "El empleado le atribuye un mensaje al destapador. ¿Qué diría en realidad ese objeto sobre vos? Convencelo de que no… o convencete de que sí.",
          close: "¿Qué es lo más raro que te regalaron? ¿Qué dijiste al abrirlo y qué pensaste de verdad?",
          role: "Sos el empleado: le atribuís significados profundos a cada objeto del estante. El destapador con forma de pez es tu obra maestra.",
        },
      },
    },

    terraza: {
      focus: "Llegar a un acuerdo cuando cada uno habla en código",
      help: {
        starters: ["Si entiendo bien lo que no estás diciendo, …", "Para que nadie tenga que fingir, …", "No lo digo por nadie en particular, pero…", "Propongo algo que nadie va a amar, pero…", "Hagamos de cuenta que…"],
        chunks: ["quedar bien con todos", "decir que sí queriendo decir que no", "patear para adelante", "dejar las cosas claras", "sin dejar a nadie en evidencia"],
        vocab: ["la madrugada", "la retirada", "el silencio incómodo", "la indirecta"],
      },
      activities: {
        "terraza-cierre": {
          situation: "En la terraza cada uno quiere terminar la noche de otra manera, pero nadie lo dice de frente.",
          people: [
            { wants: "Quedarse en la terraza (aunque dice «hagan lo que quieran»)", reason: "Organizó todo, y su «hagan lo que quieran» suena a examen." },
            { wants: "Ir a bailar (lo propone en chiste, tres veces)", reason: "Hace meses que no sale y no quiere parecer desesperado." },
            { wants: "Volver a casa (aunque dice «yo me quedo un ratito»)", reason: "Mañana trabaja temprano y no quiere ser la que corta la noche." },
            { wants: "Comer algo (solo pregunta «¿nadie tiene hambre?»)", reason: "Casi no cenó y prefiere que la idea parezca de otro." },
          ],
          ask: "Ninguno dijo lo que quiere. Armá un plan que funcione para al menos tres, y presentalo de modo que nadie tenga que admitir en público lo que no dijo.",
          change: "Lu dice: «Me quedo una hora más… si alguien, digamos, casualmente, me acompaña a un taxi después».",
          ask2: "«Digamos, casualmente»: Lu pide algo sin pedirlo. ¿Cambia tu plan? Presentalo otra vez y convencé a quien quedó afuera, en su mismo código.",
          role: "Hacé de cualquiera de los cuatro: nunca decís lo que querés directamente. Solo cambiás de postura si alguien lee bien tu indirecta sin dejarte en evidencia.",
        },
        "terraza-foto": {
          situation: "Todos posan con la ciudad de fondo y la foto sale perfecta. Vale quiere subirla ya. Sergio dice: «Sí, subila, total mi jefa seguro no usa internet».",
          people: [
            { wants: "Subirla ya («¡salimos divinos!»)", reason: "Es su cumpleaños y se tomó al pie de la letra la frase de Sergio." },
            { wants: "No aparecer, pero sin decirlo", reason: "Hoy le dijo a su jefa que estaba enfermo y le da vergüenza admitirlo." },
            { wants: "Sacar otra foto sin Sergio, como quien no quiere la cosa", reason: "Captó la ironía y quiere ayudarlo sin exponerlo." },
          ],
          ask: "Vale se tomó literalmente la frase de Sergio. ¿Cómo hacés para que entienda la ironía sin dejarlo en evidencia delante de todos?",
          change: "Vale descubre que la jefa de Sergio la sigue en las redes. Lo mira y dice: «Ah. Bueno. Parece que usa internet».",
          ask2: "Ahora la ironía la hace Vale. ¿Se ríe con Sergio o de Sergio? ¿Qué decís para que la escena termine en risa y no en incomodidad?",
          role: "Sos Sergio: escondés el problema detrás de ironías. Si alguien te cubre con elegancia, se lo agradecés con otro chiste.",
        },
      },
    },
  },

  events: {
    lluvia: {
      text: "Se larga a llover fuerte. Alguien escribe en el grupo: «Bueno, por lo menos no hace calor». La plaza y la terraza se vacían, y no pasa ningún taxi libre.",
      prompts: [
        "Recorré los lugares donde estuviste: ¿cuáles siguen en pie con lluvia? Contalo con el mismo humor resignado del mensaje del grupo.",
        "Proponé un plan nuevo de manera que nadie sienta que su plan anterior «fracasó».",
        "Un amigo llega empapado y pregunta «¿Me perdí algo?». Contale la noche en dos versiones: una seria de treinta segundos y otra irónica.",
      ],
      teacher: "A mitad del plan, cambiá un dato con ironía («el bar cierra a la una, qué novedad») y escuchá si el alumno capta el tono antes de contestar.",
    },
    transporte: {
      text: "Una falla corta el subte y el último colectivo pasa lleno, sin parar. Lu, que tiene que volver a su casa, dice: «Genial. Me encanta caminar de noche».",
      prompts: [
        "Lu ironiza. ¿Qué hay debajo: miedo, cansancio, enojo? Compará dos opciones para que vuelva y presentáselas según lo que leíste.",
        "Elegí una decisión de antes que ahora se ve distinta. ¿Cómo la contarías para que no suene a «yo ya sabía»?",
        "Organizá al grupo para que nadie vuelva solo, sin que Lu se sienta un problema.",
      ],
      teacher: "Hacé de Lu: ironía de cansancio. Rechazá la primera propuesta con un «sí, genial» que quiere decir que no, y fijate si el alumno lo detecta.",
    },
    celular: {
      text: "Nico no encuentra su celular. «Tranquilos, seguro está en un lugar lógico», dice, y se ríe solo. Estuvo en los mismos lugares que vos esta noche.",
      prompts: [
        "Reconstruí el recorrido con el tono de un detective que se toma el caso demasiado en serio.",
        "¿Dónde puede estar? Graduá la certeza de cada hipótesis con precisión: «seguro que», «capaz que», «no me extrañaría que», «ni loco».",
        "Proponé un plan de búsqueda que no arruine la noche y presentáselo a Nico sin hacerlo sentir culpable.",
      ],
      teacher: "El celular aparece en el último lugar que nombre el alumno, con un mensaje ambiguo («¿Ya lo sabés?») que hay que interpretar antes de seguir.",
    },
  },

  final: {
    prompts: [
      "Contá tu recorrido de la noche en una sola frase, y después en una versión irónica.",
      "¿Qué frase escuchaste esta noche que quería decir otra cosa? ¿Cómo te diste cuenta?",
      "¿Qué decisión cambiaste cuando la ciudad cambió? Contalo para alguien que estuvo y para alguien que no estuvo.",
      "Describí a una persona de la noche solo por cómo habla, no por cómo es.",
      "¿Qué momento resolviste con humor y cuál habría necesitado otro tono?",
    ],
    hypothetical: "Si la noche empezara de nuevo, ¿qué frase dirías con otro tono, y qué cambiaría eso?",
    help: {
      starters: ["Dicho en una frase, …", "Lo que en realidad quería decir era…", "En serio, …; en broma, …", "Me di cuenta por el tono, no por las palabras: …", "Si hubiera leído mejor…, …"],
      chunks: ["en el fondo", "dicho sea de paso", "a fin de cuentas", "entre líneas", "para ser justos"],
    },
    criteria: [
      { id: "conectores", label: "Relato con registro", detail: "Cuenta la noche con conectores y cambia de registro (serio, irónico, neutro) cuando quiere." },
      { id: "razones", label: "Lectura del subtexto", detail: "Explica qué querían decir los demás más allá de sus palabras y en qué se basa." },
      { id: "repreguntas", label: "Respuesta al tono", detail: "Responde a ironías y dobles sentidos sin tomarlos al pie de la letra ni sobreinterpretarlos." },
      { id: "claridad", label: "Precisión", detail: "Elige la palabra y el tono exactos; se notan las diferencias de matiz." },
    ],
  },
};

export default C2;
