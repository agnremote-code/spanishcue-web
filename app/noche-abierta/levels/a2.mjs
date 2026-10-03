// Noche Abierta · A2 patch. See ../levels.mjs for the shape and merge rules.
//
// A2: everyday situations. The learner tells what happened (pretérito), makes
// plans (ir a + infinitivo), compares (más… que), gives simple reasons
// (porque, pero, entonces) and says what is needed (tener que, poder, deber).
// Answers of two to four sentences.
const A2 = {
  arrival: {
    premise: "Bajas del autobús en un barrio nuevo para ti. Hoy Vale cumple treinta años. Primero hay una previa en su casa y después una fiesta en una terraza, pero nadie sabe bien el plan. Camina, entra a los lugares y habla con la gente.",
    warmup: [
      "¿Qué hiciste en tu último cumpleaños? ¿Con quién lo festejaste?",
      "¿Qué vas a hacer este fin de semana? ¿Ya tienes un plan o no?",
      "¿Qué te gusta más: salir con muchos amigos o con pocos? ¿Por qué?",
    ],
    teacher: "Dos o tres minutos de charla. No corrijas todavía: escucha si usa el pretérito para contar (fui, comí, festejé) e «ir a + infinitivo» para los planes.",
  },

  locations: {
    cafe: {
      focus: "Leer mensajes cortos, entender qué pasó y contestar",
      help: {
        starters: ["Nico dice que…", "Creo que…", "No sé si…, pero…", "Le voy a escribir que…", "Perdón, es que…"],
        chunks: ["llegar tarde", "avisar antes", "cambiar el plan", "todavía no llegó", "nos vemos en…"],
        vocab: ["el mensaje", "el audio", "la ubicación", "el grupo", "la terraza"],
      },
      activities: {
        "cafe-alla": {
          situation: "Quedaste con Nico en el café hace veinte minutos. Ya pediste un cortado y Nico todavía no llegó.",
          thread: [
            { text: "Perdón, tuve un problema y salí tarde de casa" },
            { text: "Llego en un rato o nos vemos allá, como quieras" },
          ],
          ask: "¿Qué le pasó a Nico? ¿Va a venir al café o no? ¿Qué no está claro en el mensaje?",
          next: { text: "¿Ya vienes? Los chicos ya subieron a la terraza" },
          ask2: "Ahora Nico habla de «la terraza». ¿Dónde está él? ¿Qué cambió en el plan?",
          reply: "Grábale un audio corto a Nico: dónde estás, qué hiciste mientras esperabas y qué vas a hacer ahora.",
          role: "Eres Nico: apurado, con frases cortas. Si te preguntan «¿dónde es allá?», das una pista: «Arriba, donde es la fiesta».",
          teacher: ["¿Cuánto tiempo esperas a un amigo que llega tarde?", "¿Qué hiciste la última vez que alguien llegó muy tarde?"],
        },
        "cafe-equivocado": {
          situation: "Estás en la barra y te llega un mensaje de Lu. Lo lees dos veces: no era para ti, era para Martín.",
          thread: [
            { text: "Martín, ¿compraste algo para Vale? Yo no sé qué regalarle. Ella piensa que nadie se acordó" },
          ],
          ask: "¿Qué vas a hacer con este mensaje: le escribes a Lu, se lo mandas a Martín o no haces nada? ¿Por qué?",
          next: { text: "¿Tú sabes qué hacen los chicos? Hoy están todos muy raros" },
          ask2: "Vale te pregunta a ti. ¿Qué le contestas? No puedes contarle la sorpresa.",
          reply: "Escríbele a Lu: cuéntale que el mensaje te llegó a ti y qué le dijiste a Vale.",
          role: "Primero eres Vale: haces preguntas simples y directas («¿Qué pasa? ¿Hay una fiesta?»). Después eres Lu: te da vergüenza el error y pides perdón.",
          teacher: ["¿Alguna vez mandaste un mensaje a la persona equivocada? ¿Qué pasó?", "¿Te gustan las fiestas sorpresa? ¿Por qué?"],
        },
        "cafe-grupo": {
          situation: "Estás por pagar y el celular suena todo el tiempo. En el grupo «Sábado» cada uno quiere hacer otra cosa.",
          thread: [
            { text: "¿Y si vamos al bar de la esquina y no a la terraza? Hay música en vivo" },
            { text: "Yo ya pagué la entrada de la terraza" },
            { text: "Para mí cualquier lugar está bien, pero cerca. Mañana trabajo temprano" },
          ],
          ask: "¿Qué quiere hacer Lu, qué problema tiene Martín y qué necesita Sergio?",
          next: { text: "Chicos… la fiesta de la terraza es mi cumpleaños. ¿En serio?" },
          ask2: "Vale está triste. ¿Qué le escribes al grupo ahora?",
          reply: "Manda un mensaje al grupo con un plan: adónde van a ir, qué van a hacer primero y por qué es una buena idea para todos.",
          role: "Haz de una persona del grupo. Defiende tu idea con razones simples («porque…») y acepta un plan claro.",
          teacher: ["¿Quién organiza los planes en tu grupo de amigos?", "¿Qué haces cuando un amigo cambia el plan a último momento?"],
        },
      },
    },

    departamento: {
      focus: "Mirar, decir qué hay y adivinar qué va a pasar",
      help: {
        starters: ["Hay…", "Creo que…", "Me parece que va a…", "Tal vez…", "Porque…"],
        chunks: ["estar invitado", "hacer ruido", "sacarse los zapatos", "va a haber una fiesta", "tener un examen"],
        vocab: ["la heladera", "el sillón", "el portero eléctrico", "el vecino", "las velas"],
      },
      activities: {
        "depto-un-minuto": {
          situation: "Vale te abre la puerta y baja corriendo a comprar hielo. Estás un minuto solo en su casa. Toca cada lugar y mira.",
          items: [
            { id: "entrada", label: "Al lado de la puerta", detail: "Hay ocho pares de zapatos. Las personas de adentro están sin zapatos." },
            { id: "heladera", label: "La puerta de la heladera", detail: "Hay un papel con letras grandes: «Vecinos: silencio después de medianoche. Gracias»." },
            { id: "calendario", label: "El calendario de la cocina", detail: "En el día de mañana alguien escribió: «Leo: examen, temprano»." },
            { id: "mesa", label: "Lo que hay en la mesa", detail: "Hay algo debajo de un repasador. Se ven dos velas: un 3 y un 0." },
            { id: "sillon", label: "Arriba del sillón", detail: "Hay muchos abrigos y un libro de viajes sin papel de regalo. Todavía tiene el precio." },
          ],
          ask: "¿Qué viste en esta casa? ¿Qué crees que va a pasar esta noche? ¿Por qué?",
          reveal: "Vale vuelve con el hielo y te dice en voz baja: «Leo vive conmigo. No sabe que hoy vienen veinte personas. Y mañana tiene un examen».",
          ask2: "Leo llega en diez minutos. ¿Qué le van a decir? ¿Qué tienen que cambiar en la previa?",
          role: "Eres Vale: nerviosa, hablas rápido y das órdenes cortas («¡Guarda esto! ¡Baja la música!»).",
          teacher: ["¿Te sacas los zapatos cuando entras a una casa?", "¿Viviste alguna vez con otra persona? ¿Cómo fue?"],
        },
        "depto-timbre": {
          situation: "Vale está en la ducha. Suena el portero: «Hola, soy Tomi, vengo con Sergio». Vale nunca habló de Tomi. Mira antes de abrir.",
          items: [
            { id: "portero", label: "El portero eléctrico", detail: "Se escuchan dos voces. Están contentos y se ríen." },
            { id: "celular", label: "El celular de Vale, en la mesa", detail: "Hay un mensaje de Sergio sin respuesta: «¿Puedo ir con un amigo?»." },
            { id: "lista", label: "La lista de invitados", detail: "Está en la heladera. Sergio está en la lista. Tomi, no." },
            { id: "ventana", label: "Por la ventana", detail: "Abajo, en la vereda, uno de los dos tiene una torta en las manos." },
          ],
          ask: "¿Quién es Tomi, para ti? ¿Por qué trae una torta? Usa las pistas.",
          reveal: "Desde la ducha, Vale grita: «¿Tomi? ¡Es el vecino de abajo! ¡Siempre se queja del ruido!».",
          ask2: "Ya abriste la puerta de abajo y están subiendo. ¿Qué les vas a decir cuando lleguen?",
          role: "Eres Tomi: simpático y un poco atrevido. Explicas con frases simples por qué viniste: la torta es para hacer las paces.",
          teacher: ["¿Llevaste alguna vez a un amigo a una fiesta sin avisar?", "¿Cómo son tus vecinos? ¿Te llevas bien con ellos?"],
        },
      },
    },

    restaurante: {
      focus: "Elegir una opción, contar qué pasó y explicar por qué",
      help: {
        starters: ["Prefiero… porque…", "Es más justo…", "Podemos…", "Sí, pero…", "Entonces vamos a…"],
        chunks: ["dividir la cuenta", "pagar lo suyo", "compartir un plato", "dejar propina", "comer menos que…"],
        vocab: ["la cuenta", "el mozo", "la entrada", "el plato principal", "la bebida"],
      },
      activities: {
        "resto-cuenta": {
          situation: "Son cinco en la mesa. Lu no cenó: tomó solamente una gaseosa. Martín dice: «Dividimos todo en partes iguales, es más fácil».",
          prompt: "Lu comió mucho menos que los demás. ¿Cómo pueden dividir la cuenta?",
          options: [
            {
              id: "iguales",
              label: "Todos pagan lo mismo.",
              result: "Todos pagan lo mismo y Lu paga igual que los demás por una gaseosa. No dice nada, pero después está callada y seria.",
              ask: "Lu está seria. ¿Qué le dices? ¿Le devuelves una parte de la plata?",
            },
            {
              id: "cada-uno",
              label: "Cada uno paga lo que pidió.",
              result: "El mozo trae la cuenta separada. Pero las entradas y el vino eran para todos, y nadie sabe cuánto tiene que pagar.",
              ask: "¿Cómo pagan las entradas y el vino? Explica tu idea con números simples.",
            },
            {
              id: "otra",
              label: "Propones otra forma de pagar.",
              result: "Propones esto: los cuatro que cenaron pagan la comida y cada uno paga su bebida. Lu está contenta. Martín dice: «Uf, es mucha matemática».",
              ask: "Martín no quiere hacer cuentas. Dale dos razones para aceptar tu idea.",
            },
          ],
          close: "¿Qué forma de pagar te parece más justa? ¿Es igual si es una cena de cumpleaños?",
          role: "Eres Martín: quieres pagar en partes iguales porque «es más fácil». Aceptas otra idea si te dan una razón clara.",
          teacher: ["En tu país, ¿cómo pagan los amigos: todo junto o cada uno lo suyo?", "¿Qué pasó la última vez que saliste a comer con amigos?"],
        },
        "resto-plato": {
          situation: "Lu no come carne y pidió ravioles de verdura. Llegan los ravioles con salsa de carne. El mozo ya se fue y hay mucha gente.",
          prompt: "Hay un error con el plato de Lu. ¿Qué hacen?",
          options: [
            {
              id: "devolver",
              label: "Llaman al mozo y devuelven el plato.",
              result: "El mozo pide perdón y se lleva el plato. El plato nuevo tarda veinticinco minutos y los demás ya están comiendo.",
              ask: "¿Empiezan a comer o esperan a Lu? ¿Por qué?",
            },
            {
              id: "compartir",
              label: "Le das a Lu la mitad de tu plato.",
              result: "Lu come la mitad de tu ensalada. Pero cuando llega la cuenta, los ravioles con carne están en la cuenta igual.",
              ask: "Habla con el mozo: cuéntale qué pasó con el plato y pídele que no lo cobre.",
            },
            {
              id: "nada",
              label: "Lu dice «no importa» y saca la carne.",
              result: "Lu come un poco, pero no le gusta. Media hora después dice que tiene hambre y quiere ir a comer a otro lugar.",
              ask: "¿Lu tenía que llamar al mozo? ¿Por qué algunas personas no dicen nada cuando hay un problema?",
            },
          ],
          close: "¿Alguna vez te trajeron un plato equivocado? ¿Qué hiciste?",
          role: "Eres el mozo: amable, pero con mucho trabajo. Primero dices «el plato está bien»; después pides perdón.",
          teacher: ["¿Qué es peor para ti: comida fea o un mozo antipático?", "¿Dejas propina cuando algo salió mal? ¿Por qué?"],
        },
        "resto-al-lado": {
          situation: "En la mesa de al lado hay un cumpleaños. Cantan, gritan y golpean la mesa. Ustedes no pueden hablar.",
          prompt: "Hay mucho ruido. ¿Qué hacen primero?",
          options: [
            {
              id: "mozo",
              label: "Le piden ayuda al mozo.",
              result: "El mozo dice: «Es un cumpleaños, es un ratito». Pero pasa media hora y el ruido sigue igual.",
              ask: "Ya pasó media hora. ¿Hablan otra vez con el mozo, cambian de mesa o se van? ¿Por qué?",
            },
            {
              id: "hablar",
              label: "Vas a hablar con la otra mesa.",
              result: "La cumpleañera te pide perdón y cantan más bajo. Después les mandan una porción de torta y te invitan a su mesa.",
              ask: "Vas a su mesa un minuto. Preséntate y contales qué hacen ustedes esta noche.",
            },
            {
              id: "sumarse",
              label: "Se unen a la fiesta de al lado.",
              result: "Cantan el feliz cumpleaños y juntan las mesas. Es divertido, pero Martín quería contarles algo importante y ahora no puede.",
              ask: "Martín te dice: «Tengo que contarles algo». ¿Cuándo y dónde puede hablar? Propón un momento.",
            },
          ],
          close: "Cuando sales a comer, ¿qué es más importante para ti: la comida, el lugar o poder hablar? ¿Por qué?",
          role: "Eres la cumpleañera de la mesa de al lado: simpática y contenta. Haces preguntas simples: «¿De dónde eres? ¿Qué festejan?».",
          teacher: ["¿Te molesta el ruido cuando comes afuera?", "¿Dónde festejaste tu último cumpleaños?"],
        },
      },
    },

    plaza: {
      hubPrompt: "En la plaza hay gente que quiere charlar. Elige a una persona y habla con ella.",
      focus: "Charlar con gente nueva: contar, preguntar y dar consejos simples",
      help: {
        starters: ["Yo creo que tienes que…", "Puedes…", "Una vez yo…", "Es mejor… porque…", "¿Y tú?"],
        chunks: ["llegar tarde", "tener ganas de…", "conocer gente", "volver a casa", "festejar algo"],
        vocab: ["el banco", "la fuente", "el autobús", "la vereda", "el barrio"],
      },
      activities: {
        pablo: {
          says: "Espero a mi amigo hace cuarenta y cinco minutos. No contesta los mensajes. No sé qué hacer: ¿me voy o espero?",
          ask: "Tu amigo todavía no llegó y no contesta. ¿Lo esperas o te vas? ¿Por qué?",
          followUps: [
            "Al final llega el amigo de Pablo y dice «hola» como si nada. ¿Qué le tiene que decir Pablo?",
            "¿Tienes un amigo que siempre llega tarde? ¿Qué haces con él?",
          ],
          role: "Eres Pablo: al principio estás tranquilo, después cada vez más enojado. Preguntas: «¿Tú qué haces en mi lugar?».",
        },
        ines: {
          says: "Me mudé al barrio hace una semana. Todavía no conozco a nadie. Salí a caminar porque no quería estar sola en casa.",
          ask: "¿Qué puede hacer Inés para conocer gente en el barrio? Dale dos o tres ideas.",
          followUps: [
            "¿Te mudaste alguna vez? ¿Qué fue lo más difícil?",
            "¿Qué te gusta de tu barrio y qué no te gusta?",
          ],
          role: "Eres Inés: tímida. Agradeces los consejos y preguntas cosas concretas: «¿Dónde?», «¿Cuándo?».",
        },
        pareja: {
          says: "Ana: «Yo quiero ir a bailar». Diego: «Y yo quiero comer algo tranquilo». Los dos te miran: «¿Y tú? ¿Qué hacemos?».",
          ask: "Ana y Diego te preguntan a ti. ¿Qué plan les propones para esta noche?",
          followUps: [
            "Diego te dice en voz baja: «Estoy cansado, pero no se lo quiero decir a Ana». ¿Qué le aconsejas?",
            "Con tus amigos o con tu pareja, ¿quién decide los planes normalmente?",
          ],
          role: "Haz de Ana y de Diego: cada uno quiere tener razón y dice por qué su plan es mejor.",
        },
        ramiro: {
          says: "Perdí el último autobús por un minuto. Vivo lejos, el taxi es muy caro y tengo poca batería en el celular.",
          ask: "Ramiro puede tomar un taxi caro, esperar el primer autobús de la mañana o dormir en la casa de alguien. ¿Qué es mejor para él? ¿Por qué?",
          followUps: [
            "¿Alguna vez perdiste el último autobús o el último tren? ¿Cómo volviste a casa?",
            "¿Dejas dormir en tu casa a una persona que conoces hace poco? ¿Por qué?",
          ],
          role: "Eres Ramiro: cansado y con humor. Dices que no a la primera idea y explicas por qué.",
        },
        marta: {
          says: "¡Hoy me jubilé! Trabajé cuarenta años en la misma oficina. Mis compañeros ya se fueron a casa, pero yo no quiero volver todavía.",
          ask: "Marta trabajó cuarenta años en el mismo lugar. ¿Es mejor tener un solo trabajo o cambiar? ¿Por qué?",
          followUps: [
            "Marta te pregunta: «¿Y tú qué planes tienes para el futuro?». Contéstale.",
            "¿Qué fue lo último que festejaste? ¿Qué hiciste?",
          ],
          role: "Eres Marta: feliz y muy charlatana. Cuentas cosas de tu trabajo y das consejos.",
        },
        kenji: {
          says: "Perdón, hablo poco español. Quiero ir a un lugar «de verdad», sin turistas. Pero todos me mandan al mismo restaurante.",
          ask: "¿Adónde le recomiendas ir a Kenji? Explícale cómo llegar con palabras simples.",
          followUps: [
            "¿Qué hiciste en tu último viaje? ¿Fuiste a lugares turísticos o no?",
            "¿Qué lugar de tu ciudad le recomiendas a un turista? ¿Por qué?",
          ],
          role: "Eres Kenji: entiendes la mitad. Repites palabras («¿Derecho? ¿Dos cuadras?») y pides que hablen despacio.",
        },
        sofia: {
          says: "Me cancelaron una cita, pero igual salí. ¿Vienes conmigo a un bar de jazz? Está acá cerca y dicen que es muy bueno.",
          ask: "Sofía te invita a un bar de jazz. ¿Vas a ir con ella o no? ¿Por qué?",
          followUps: [
            "¿Sales solo a veces: al cine, a comer, de viaje? ¿Te gusta?",
            "¿Qué es más difícil para ti: decir que sí o decir que no a un plan?",
          ],
          role: "Eres Sofía: segura y simpática. Si te dicen que no, dices «¡No hay problema!» y no insistes.",
        },
      },
    },

    bar: {
      hubPrompt: "En el bar pasan muchas cosas. Elige un problema y resuélvelo.",
      focus: "Pedir algo, decir que no y explicar por qué, con respeto",
      help: {
        starters: ["Perdón, ¿puedes…?", "Te entiendo, pero…", "¿Por qué no…?", "No, gracias, porque…", "Mejor…"],
        chunks: ["hablar más bajo", "colarse en la fila", "pagar la ronda", "irse temprano", "no pasa nada"],
        vocab: ["la barra", "la fila", "la billetera", "la ronda", "el mozo"],
      },
      activities: {
        fuerte: {
          situation: "Un hombre en la barra habla por teléfono muy fuerte. Ya es la tercera llamada y tu amiga no te escucha.",
          task: "Pídele al hombre que hable más bajo. Sé amable.",
          pushback: "«¿Por qué? Esto es un bar, no una biblioteca».",
          task2: "No te enojes. Explícale por qué y propón una solución: hablar afuera, más bajo o un rato.",
          role: "Eres el hombre del teléfono: primero te enojas un poco, pero si te hablan bien, sales a hablar afuera.",
        },
        quedarse: {
          situation: "Leo, el compañero de departamento de Vale, quiere irse ya porque mañana tiene un examen temprano. El grupo le dice: «¡Una más!».",
          task: "Ayuda a Leo: dile al grupo por qué se tiene que ir.",
          pushback: "El grupo insiste: «¡Siempre te vas temprano! Una más y después te acompañamos al taxi».",
          task2: "Propón un plan bueno para Leo y también para el grupo.",
          role: "Eres el grupo: insistes con humor, pero aceptas si te dan una buena razón.",
        },
        billetera: {
          situation: "Llega la cuenta de la ronda. Martín busca la billetera y no la encuentra: la dejó en casa. Ya pasó lo mismo este mes.",
          task: "Dile a Martín que hoy pagas tú, pero que la próxima vez tiene que traer la billetera.",
          pushback: "Martín se enoja un poco: «Fue un error, che. ¿Piensas que lo hago a propósito?».",
          task2: "Explícale cómo te sientes y qué quieres para la próxima, sin pelear.",
          role: "Eres Martín: tienes vergüenza y por eso te defiendes.",
        },
        fila: {
          situation: "Esperas para pedir hace veinte minutos. Dos chicas llegan y se ponen delante tuyo.",
          task: "Deciles que tú estabas antes. Habla tranquilo.",
          pushback: "Una sonríe: «Perdón, un amigo nos guardó el lugar». Pero no hay ningún amigo.",
          task2: "No les crees. ¿Las dejas pasar o no? Deciles qué decidiste y por qué.",
          role: "Eres una de las chicas: simpática y un poco caradura. Si te hablan bien, pides perdón y vas al final de la fila.",
        },
        caro: {
          situation: "Vale quiere terminar la noche en un bar de cócteles muy caro. Todos dicen que sí, pero tú no quieres gastar tanto.",
          task: "Dile al grupo que es caro para ti, pero con buena onda.",
          pushback: "Vale insiste: «¡Vamos, es mi cumpleaños! Yo pago la primera».",
          task2: "Contéstale a Vale: vas, vas pero tomas poco, o propones otro lugar. Explica por qué.",
          role: "Eres Vale: contenta y un poco insistente, pero no quieres que nadie se sienta mal.",
        },
        cancelo: {
          situation: "Nico te escribe: «Perdón, al final no puedo ir». Ya canceló tres veces a último momento, y este plan lo armaron juntos.",
          task: "Llámalo y dile cómo te sientes. No lo ataques.",
          pushback: "Nico no dice nada un momento. Después dice: «Es que estoy pasando un mal momento y no quería contarlo».",
          task2: "Ahora sabes qué le pasa. ¿Qué le dices? ¿Le propones un plan diferente?",
          role: "Eres Nico: primero das excusas simples; si te preguntan con cariño, cuentas la verdad.",
        },
        invitacion: {
          situation: "Sergio llega al bar con traje y un regalo en papel dorado. Pensó que era una cena elegante. Todos están en zapatillas.",
          task: "Explícale a Sergio qué pasó y ayúdalo a estar cómodo.",
          pushback: "Sergio, colorado: «Me dijeron “algo tranquilo por el cumple”. ¿Cómo iba a saber?».",
          task2: "Cuéntale una vez que te vestiste mal para una fiesta o que entendiste mal un plan.",
          role: "Eres Sergio: tienes vergüenza, pero te ríes de ti mismo si te ayudan.",
        },
      },
    },

    auto: {
      focus: "Hacer planes con «si» y decir qué van a hacer primero",
      help: {
        starters: ["Si no arranca, …", "Si llueve, vamos a…", "Primero tenemos que…", "Podemos… o…", "Mejor… porque…"],
        chunks: ["no arranca", "llamar a una grúa", "pedir un taxi", "quedarse sin batería", "ayudar a alguien"],
        vocab: ["el capó", "la grúa", "el mecánico", "el taller", "la estación de servicio"],
      },
      grammar: {
        title: "«Si» + presente: planes para ahora",
        rows: [
          { form: "si + presente → presente", example: "Si el auto no arranca, pedimos un taxi." },
          { form: "si + presente → ir a + infinitivo", example: "Si llueve, vamos a esperar en el café." },
          { form: "si + presente → imperativo", example: "Si ves un taxi libre, llámalo." },
          { form: "si + presente → tener que / poder", example: "Si cierra el taller, tenemos que buscar otro." },
        ],
      },
      activities: {
        "auto-aeropuerto": {
          situation: "La calle está casi vacía. Carla tiene el capó abierto y sale humo. Mañana muy temprano tiene un vuelo y tiene que ir al aeropuerto.",
          ask: "El auto se rompió. ¿Qué van a hacer primero? ¿Y después?",
          conditions: [
            { text: "Empieza a llover mucho.", ask: "Si llueve así, ¿qué plan no funciona? ¿Qué hacen?" },
            { text: "Carla mira su celular: tiene 4 % de batería.", ask: "Si se queda sin batería, ¿cómo va a llamar? ¿Qué tiene que hacer ahora?" },
            { text: "Un hombre para su auto y dice que puede llevarla. Nadie lo conoce.", ask: "Si un desconocido te ofrece llevarte, ¿vas con él o no? ¿Por qué?" },
            { text: "El taller de la esquina está abierto, pero cierra en diez minutos.", ask: "Si vas corriendo al taller, ¿qué le dices al mecánico?" },
          ],
          close: "Cuenta cómo terminó la noche de Carla: qué hizo primero, qué pasó después y cómo llegó al aeropuerto.",
          role: "Eres Carla: nerviosa y apurada. Haces muchas preguntas cortas: «¿Y si no viene? ¿Y ahora?».",
        },
        "auto-gasolina": {
          situation: "Un señor empuja su auto hasta la vereda. No tiene más gasolina y la estación de servicio está a tres cuadras. Se llama Julio y está muy tranquilo.",
          ask: "¿Qué puedes hacer para ayudar a Julio? Si no puedes ayudarlo, ¿qué le recomiendas?",
          conditions: [
            { text: "Julio dice que la estación de servicio cierra en veinte minutos.", ask: "Si llegan tarde y la estación está cerrada, ¿qué otra cosa pueden hacer?" },
            { text: "En el baúl hay un bidón vacío, pero a Julio le duele la espalda.", ask: "Si tú vas a buscar la gasolina, ¿qué tiene que hacer Julio mientras tanto?" },
            { text: "Julio te cuenta algo: va a la fiesta de Vale porque es su papá.", ask: "Si llegan tarde a la fiesta, ¿qué le van a decir a Vale? ¿Le escribes ahora?" },
          ],
          close: "¿Alguna vez tuviste un problema con un auto o en un viaje? ¿Qué pasó y qué hiciste?",
          role: "Eres Julio: tranquilo y charlatán. Cuentas historias viejas en el peor momento («Una vez, hace muchos años…»).",
        },
      },
    },

    museo: {
      hubPrompt: "Hoy el museo abre de noche. Cada objeto tiene una historia. Elige uno y cuenta qué pasó.",
      focus: "Contar qué pasó (pretérito) y cómo era (imperfecto)",
      help: {
        starters: ["Ese día…", "Primero…, después…", "Era… / Había…", "Entonces…", "Al final…"],
        chunks: ["un día", "de repente", "después", "al día siguiente", "nunca más"],
        vocab: ["la vitrina", "el objeto", "el cartel", "la valija", "la estación"],
      },
      grammar: {
        title: "Para contar qué pasó",
        rows: [
          { form: "Pretérito: qué pasó", example: "Un día, el cartero llegó tarde y no habló con nadie." },
          { form: "Imperfecto: cómo era", example: "Era invierno, hacía frío y la estación estaba vacía." },
          { form: "Para ordenar: primero, después, entonces, al final", example: "Primero leyó la carta, después lloró y al final salió a la calle." },
        ],
      },
      activities: {
        foto: {
          plaque: "La encontraron en una valija en una estación de tren. Hay cinco personas en una playa. Una se tapa la cara con un sombrero.",
          ask: "¿Qué hay en la foto? ¿Cómo eran estas personas? ¿Quién es la persona del sombrero?",
          detail: "Atrás de la foto alguien escribió con lápiz: «El último verano antes de todo».",
          ask2: "¿Qué pasó después de ese verano? Cuenta tres cosas.",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        telefono: {
          plaque: "Estuvo en una esquina de este barrio. Los vecinos dicen que una noche sonó durante una hora y nadie contestó.",
          ask: "¿Quién llamó esa noche? ¿Por qué nadie contestó?",
          detail: "A la mañana siguiente, una mujer contestó. Escuchó una sola frase y se fue llorando.",
          ask2: "¿Qué frase escuchó la mujer? ¿Adónde fue después?",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        boleto: {
          plaque: "Un boleto de Buenos Aires a Mendoza, para la noche del 14 de julio. Ese tren nunca salió de la estación.",
          ask: "¿Por qué no salió el tren ese día? ¿Qué pasó en la estación?",
          detail: "En el boleto hay un nombre escrito a mano y una mancha de café.",
          ask2: "¿Quién era el pasajero? ¿Qué hizo esa noche, si no viajó?",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        carta: {
          plaque: "Una mujer la encontró detrás de un mueble el día de su mudanza. Alguien la escribió veinte años antes.",
          ask: "¿Quién escribió la carta y para quién? ¿Por qué nunca llegó?",
          detail: "La mujer abrió la carta. Decía: «Si me esperas, vuelvo en marzo».",
          ask2: "¿Qué hizo la mujer cuando leyó la carta, veinte años después?",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        valija: {
          plaque: "Llegó a la oficina de objetos perdidos del puerto. Nadie la buscó nunca.",
          ask: "¿De quién era la valija? ¿Por qué no volvió a buscarla?",
          detail: "Adentro encontraron un vestido de novia, un mapa de Italia y un pasaje de barco que nadie usó.",
          ask2: "Con esos tres objetos, cuenta qué le pasó a esta persona.",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        televisor: {
          plaque: "En este televisor, medio barrio vio a los astronautas llegar a la Luna. Pero la familia de la casa recuerda esa noche por otra cosa.",
          ask: "¿Cómo era esa noche en la casa? ¿Quiénes estaban? ¿Qué hacían?",
          detail: "Mientras todos miraban la Luna, el hijo mayor se fue de la casa sin decir nada.",
          ask2: "¿Adónde fue el hijo? ¿Por qué se fue esa noche?",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        bicicleta: {
          plaque: "Un cartero trabajó treinta años en este barrio con esta bicicleta. Su último día de trabajo no volvió al correo.",
          ask: "¿Cómo era un día normal del cartero? ¿Qué hacía?",
          detail: "Esa tarde, el cartero entregó su última carta. ¡Era para él!",
          ask2: "¿Qué decía la carta? ¿Qué hizo el cartero después?",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        habitacion: {
          plaque: "Así era el cuarto de una estudiante: una máquina de escribir, una planta, el póster de un recital. La cama está hecha.",
          ask: "¿Cómo era esta estudiante? ¿Qué hacía en un día normal?",
          detail: "En la máquina de escribir hay una hoja con una sola frase: «Hoy decidí irme».",
          ask2: "¿Adónde se fue la estudiante? ¿Volvió alguna vez?",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
        caja: {
          plaque: "Una mañana apareció en la puerta del museo con una nota: «Esto tiene que estar acá». Nadie sabe quién la dejó.",
          ask: "¿Quién dejó la caja en la puerta? ¿Por qué la trajo a un museo?",
          detail: "La arreglaron y tocó una canción: la misma canción que suena todas las noches en el bar de enfrente.",
          ask2: "¿Qué pasó entre la caja y el bar? Cuenta la historia.",
          role: "Eres el guardia de noche del museo. Cuentas un dato nuevo solo si te hacen una pregunta («¿Quién…? ¿Cuándo…? ¿Por qué…?»). Hablas despacio y en pasado.",
        },
      },
    },

    taxi: {
      focus: "Comparar opciones (más… que, menos… que) y elegir una",
      help: {
        starters: ["Es más rápido que…", "Es más barato, pero…", "Tarda menos que…", "Prefiero… porque…", "Entonces voy a…"],
        chunks: ["dar la vuelta", "ir por otra calle", "la calle está cortada", "salir más barato", "llegar a tiempo"],
        vocab: ["el semáforo", "la cuadra", "el precio", "el taxímetro", "el conductor"],
      },
      activities: {
        "taxi-cortado": {
          situation: "Vas en taxi a la terraza de Vale. A dos cuadras, la policía cortó la calle porque hay un recital. El conductor te pregunta: «¿Qué hacemos?».",
          prompt: "Mira las tres opciones. ¿Cuál es más rápida, cuál es más barata y cuál es más cómoda? Elige una.",
          options: [
            {
              id: "caminar",
              label: "Bajarte y caminar",
              result: "Te bajas y pasas por el recital. Hay mucha gente bailando y… ¡Nico está ahí! Te dice que te quedes con él.",
              ask: "Nico quiere que te quedes en el recital, pero Vale te espera. ¿Qué vas a hacer? Explícale a Nico.",
            },
            {
              id: "rodear",
              label: "Ir por el puerto",
              result: "El conductor va por el puerto. Llegas cómodo, pero pagas el doble y no llegas al brindis.",
              ask: "Vale te pregunta: «¿Por qué llegaste tarde?». Cuéntale qué pasó en el viaje.",
            },
            {
              id: "esperar",
              label: "Esperar en el taxi",
              result: "Esperan. El conductor apaga el motor, pone la radio y te cuenta su vida: fue músico durante veinte años.",
              ask: "Hazle tres preguntas al conductor sobre su vida de músico. ¿Por qué dejó la música?",
            },
          ],
          close: "Cuando viajas de noche, ¿qué es más importante para ti: llegar rápido, gastar poco o estar seguro? ¿Por qué?",
          role: "Eres el conductor: hablas mucho y dices que conoces la ciudad mejor que nadie. Comparas: «Por el puerto es más largo, pero…».",
        },
        "taxi-mayor": {
          situation: "Le dijiste «a la calle Mayor». Diez minutos después ves que el taxi va a la Plaza Mayor, en la otra punta de la ciudad.",
          prompt: "El taxímetro sigue. Compara rápido: ¿qué opción es mejor y por qué?",
          options: [
            {
              id: "seguir",
              label: "Ir hasta la plaza",
              result: "Llegas a la Plaza Mayor. Hay mucha gente porque hay un mercado de noche. No lo conocías.",
              ask: "Mándale un audio a Vale: dónde estás, qué ves y qué vas a hacer ahora.",
            },
            {
              id: "volver",
              label: "Pedirle que vuelva",
              result: "El conductor da la vuelta, pero dice que el error fue tuyo y que tienes que pagar todo el viaje.",
              ask: "El conductor quiere cobrarte todo. Explícale qué dijiste tú y qué entendió él.",
            },
            {
              id: "bajar",
              label: "Bajarte y pedir otro auto",
              result: "Te bajas en una esquina que no conoces. La aplicación no encuentra autos y empieza a llover más fuerte.",
              ask: "Entras a un kiosco. Di adónde quieres ir y pide ayuda.",
            },
          ],
          close: "¿Quién se equivocó: tú o el conductor? ¿Qué vas a hacer la próxima vez para no tener este problema?",
          role: "Eres el conductor: dices «Mayor hay una sola» y no aceptas el error fácilmente. Si te lo explican bien, cobras menos.",
        },
      },
    },

    tienda: {
      focus: "Explicar qué necesitas cuando no sabes cómo se llama",
      help: {
        starters: ["Es una cosa para…", "Es como…, pero…", "Es grande / chico / de plástico…", "Lo necesito porque…", "No sé cómo se dice, pero…"],
        chunks: ["sirve para", "es parecido a", "así de grande", "se enchufa", "se lleva en la mano"],
        vocab: ["el estante", "la caja", "el empleado", "el vuelto", "la bolsa"],
      },
      activities: {
        "tienda-enchufe": {
          situation: "Tu cargador es de otro país y no entra en la pared. Tienes 3 % de batería. Necesitas algo, pero no sabes cómo se llama.",
          need: "un adaptador para el enchufe",
          banned: ["adaptador", "enchufe"],
          task: "Explícale al empleado qué necesitas. No puedes decir las palabras prohibidas.",
          wrong: "El empleado te trae un alargue con cuatro tomas: «¿Es esto?».",
          task2: "No es eso. Dile qué es diferente y para qué lo necesitas.",
          close: "¿Alguna vez no supiste cómo se dice algo en otro idioma? ¿Qué hiciste?",
          role: "Eres el empleado: estás aburrido y entiendes todo mal. Haces preguntas simples: «¿Es grande? ¿Es de metal?».",
        },
        "tienda-hielo": {
          situation: "Vale te pidió hielo para la previa, pero las bolsas se rompen y el hielo se derrite. Necesitas algo para llevarlo.",
          need: "una conservadora (una heladerita para llevar)",
          banned: ["conservadora", "heladera"],
          task: "Describe lo que buscas: cómo es, qué tamaño tiene y para qué sirve.",
          wrong: "El empleado te da un balde de plástico y un diario viejo: «Con esto alcanza».",
          task2: "¿Es buena idea? Decide si lo compras y explica por qué.",
          close: "¿Qué cosa de tu casa no sabes decir en español? Descríbela y que alguien adivine qué es.",
          role: "Eres el empleado: opinas de todo y tienes una solución para cada problema.",
        },
        "tienda-regalo": {
          situation: "Es el cumpleaños de Vale y no tienes regalo. En el almacén hay un estante con cosas raras: velas, cartas, un destapador con forma de pez.",
          need: "algo para Vale, que ama viajar y tomar café",
          banned: ["regalo", "viaje", "viajar", "café"],
          task: "Cuéntale al empleado cómo es Vale y qué le gusta, sin decir esas palabras.",
          wrong: "El empleado te muestra el destapador con forma de pez: «Este se vende muchísimo».",
          task2: "¿El pez es buena idea para Vale? Explícale al empleado por qué sí o por qué no.",
          close: "¿Cuál fue el regalo más raro que te dieron? ¿Qué dijiste?",
          role: "Eres el empleado: el destapador con forma de pez es tu favorito y dices que es perfecto para todos.",
        },
      },
    },

    terraza: {
      focus: "Ponerse de acuerdo en grupo y decir por qué",
      help: {
        starters: ["Yo propongo…", "Podemos… y después…", "Es mejor… porque…", "¿Están de acuerdo con…?", "Si Lu se va, …"],
        chunks: ["estar de acuerdo", "ir todos juntos", "la mayoría", "otro día", "a mí me da igual"],
        vocab: ["el boliche", "el último autobús", "la madrugada", "el taxi"],
      },
      activities: {
        "terraza-cierre": {
          situation: "Están en la terraza y cada uno quiere terminar la noche de otra forma.",
          people: [
            { wants: "Seguir en la terraza", reason: "Es su cumpleaños y preparó la fiesta." },
            { wants: "Salir a bailar", reason: "No sale a bailar hace meses." },
            { wants: "Irse a su casa", reason: "Mañana tiene que trabajar temprano." },
            { wants: "Comer algo", reason: "No cenó casi nada." },
          ],
          ask: "Arma un plan para el grupo: ¿qué van a hacer y en qué orden? Tiene que estar bien para tres de los cuatro.",
          change: "Lu dice: «Me quedo una hora más si después alguien me acompaña al taxi».",
          ask2: "Lu cambió de idea. ¿Cambia tu plan? Explícalo otra vez y convence a la persona que no está contenta.",
          role: "Haz de cualquiera de los cuatro. Di qué quieres y por qué. Cambia de idea solo con una buena razón.",
        },
        "terraza-foto": {
          situation: "Todos posan con la ciudad atrás y la foto sale perfecta. Vale la quiere subir ya, pero Sergio no quiere estar en la foto.",
          people: [
            { wants: "Subir la foto ahora", reason: "Es su cumpleaños y todos salieron bien." },
            { wants: "No estar en la foto", reason: "Hoy no fue a trabajar: le dijo a su jefa que estaba enfermo." },
            { wants: "Sacar otra foto sin Sergio", reason: "Para él no es un problema grande." },
          ],
          ask: "¿Qué van a hacer con la foto? Propón algo bueno para los tres.",
          change: "Vale ve algo: la jefa de Sergio la sigue en las redes.",
          ask2: "Ahora, ¿qué tiene que hacer Vale? ¿Hay que preguntar antes de subir una foto con otras personas?",
          role: "Eres Sergio: estás nervioso y no quieres contar todo. Dices «es que… mi jefa…» y nada más.",
        },
      },
    },
  },

  events: {
    lluvia: {
      text: "Empieza a llover mucho. La gente se va de la plaza y de la terraza, y no hay taxis libres.",
      prompts: [
        "¿Qué lugares de esta noche son buenos con lluvia? ¿Cuáles no? ¿Por qué?",
        "¿Qué van a hacer ahora? Propón un plan nuevo para el grupo.",
        "Un amigo llega mojado y no sabe nada. Cuéntale qué pasó esta noche.",
      ],
      teacher: "Escucha si usa «ir a + infinitivo» para el plan y el pretérito para contar. A mitad del plan, cambia algo: «el bar cierra en media hora».",
    },
    transporte: {
      text: "Hay un problema en el metro y el último autobús pasa lleno y no para. Lu tiene que volver a su casa.",
      prompts: [
        "¿Cómo puede volver Lu? Compara dos opciones: ¿cuál es más barata y cuál es más segura?",
        "¿Qué decisión tomaste antes esta noche? ¿Ahora vas a hacer otra cosa? ¿Por qué?",
        "¿Cómo se organiza el grupo para que nadie vuelva solo?",
      ],
      teacher: "Haz de Lu: estás cansada y un poco preocupada. Di que no a la primera idea («No, porque…») y pide razones.",
    },
    celular: {
      text: "Nico no encuentra su celular. Esta noche estuvo en los mismos lugares que tú.",
      prompts: [
        "¿Adónde fueron esta noche? Cuenta qué pasó en cada lugar, en orden.",
        "¿Dónde está el celular, para ti? ¿Por qué piensas eso?",
        "¿Qué van a hacer para buscarlo? Propón un plan corto.",
      ],
      teacher: "El celular aparece en el último lugar que nombra el alumno, con un mensaje nuevo. Pídele que cuente qué pasó con «primero, después, al final».",
    },
  },

  final: {
    prompts: [
      "¿Adónde fuiste esta noche? ¿Qué lugar fue el primero y cuál fue el último?",
      "¿Qué pasó en el lugar que más te gustó?",
      "Cuando cambió algo en la ciudad, ¿qué hiciste?",
      "¿A quién conociste esta noche? ¿Cómo era?",
      "¿Qué vas a hacer distinto la próxima vez?",
    ],
    hypothetical: "Si mañana hay otra fiesta, ¿qué vas a hacer igual y qué vas a cambiar?",
    help: {
      starters: ["Primero fui a…", "Después…", "Ahí conocí a…", "Me gustó más… porque…", "La próxima vez voy a…"],
      chunks: ["al principio", "de repente", "por eso", "entonces", "al final"],
    },
    criteria: [
      { id: "conectores", label: "Cuenta en orden", detail: "Usa primero, después, entonces y al final para ordenar lo que pasó." },
      { id: "razones", label: "Da razones", detail: "Explica sus decisiones con «porque» o «por eso»." },
      { id: "repreguntas", label: "Contesta preguntas nuevas", detail: "Responde con dos o tres frases a una pregunta que no esperaba." },
      { id: "claridad", label: "Se entiende", detail: "Usa el pretérito para lo que pasó y se le entiende, aunque tenga errores." },
    ],
  },
};

export default A2;
