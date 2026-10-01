// Noche Abierta · A1 patch. See ../levels.mjs for the shape and merge rules.
//
// A1: basic survival. Short, concrete situations in the present; the learner
// answers with one or two short sentences (quiero, necesito, podemos, hay,
// está, prefiero). The museum describes what is there, with a modelled
// «era / fue» at most; the broken car offers simple choices, no «si» clauses.

const GUARD = "Sos el guardia del museo: hablás despacio y con frases cortas. Ayudás con preguntas simples: «¿Qué hay? ¿De qué color es? ¿Es viejo o nuevo?».";

const A1 = {
  arrival: {
    premise: "Bajás del colectivo en un barrio nuevo. Hoy Vale cumple treinta años. Hay una previa en su casa y una fiesta en una terraza, pero no hay un plan fijo. Caminá, mirá y elegí un lugar.",
    warmup: [
      "¿Cuándo es tu cumpleaños?",
      "¿Qué hacés los sábados a la noche?",
      "¿Qué te gusta hacer en una fiesta: bailar, comer, hablar?",
    ],
    teacher: "Dos minutos de preguntas simples. Aceptá respuestas de una palabra y ampliá vos: «¿Bailar? ¡Qué bueno! ¿Con quién?». Anotá qué verbos usa en presente.",
  },

  locations: {
    cafe: {
      focus: "Leer mensajes cortos y contestar",
      help: {
        starters: ["Nico está en…", "Estoy en…", "Quiero…", "Necesito saber…", "Voy a…"],
        chunks: ["llego tarde", "estoy en el café", "¿dónde estás?", "nos vemos en…", "en diez minutos"],
        vocab: ["el mensaje", "el audio", "la dirección", "el grupo"],
      },
      activities: {
        "cafe-alla": {
          situation: "Estás en el café. Esperás a Nico hace veinte minutos.",
          thread: [
            { text: "Perdón, llego tarde" },
            { text: "Nos vemos allá, ¿sí?" },
          ],
          ask: "¿Qué dice Nico? ¿Viene al café o no?",
          next: { text: "¿Dónde estás? Estamos en la terraza de Vale" },
          ask2: "¿Dónde está Nico ahora? ¿Y vos adónde vas?",
          reply: "Mandale un audio corto a Nico: dónde estás y adónde vas ahora.",
          role: "Sos Nico: hablás con frases muy cortas y despacio. Al final decís claro: «Estoy en la terraza».",
          teacher: ["¿Llegás tarde o temprano a los planes?", "¿Cuántos minutos esperás a un amigo?"],
        },
        "cafe-equivocado": {
          situation: "Estás en el café. Llega un mensaje de Lu, pero no es para vos: es para Martín.",
          thread: [
            { text: "Martín, ¿qué le compramos a Vale? Hoy es su cumpleaños y no tengo nada" },
          ],
          ask: "¿Para quién es el mensaje? ¿Qué necesita Lu?",
          next: { text: "Hola, ¿qué hacés? ¿Dónde están los chicos? Están todos raros" },
          ask2: "Vale no sabe nada de la sorpresa. ¿Qué le contestás?",
          reply: "Escribile a Lu: el mensaje llegó a vos, no a Martín. Una o dos frases.",
          role: "Primero sos Vale: hacés preguntas simples («¿Dónde estás? ¿Con quién?»). Después sos Lu: decís «¡Perdón!» y te reís.",
          teacher: ["¿Qué le regalás a una amiga para su cumpleaños?", "¿Mandás muchos mensajes por día?"],
        },
        "cafe-grupo": {
          situation: "Estás por pagar el café. En el grupo «Sábado» hay tres mensajes nuevos.",
          thread: [
            { text: "Hay música en el bar de la esquina. ¿Vamos?" },
            { text: "No, yo tengo entrada para la terraza" },
            { text: "Para mí, un lugar cerca. Mañana trabajo" },
          ],
          ask: "¿Qué quiere Lu? ¿Qué quiere Martín? ¿Y Sergio?",
          next: { text: "Chicos… la fiesta de mi cumpleaños es en la terraza" },
          ask2: "Vale está triste. ¿Qué escribís en el grupo?",
          reply: "Escribí el plan en el grupo: el lugar y con quién vas.",
          role: "Hacé de Lu, de Martín o de Sergio. Decí qué querés con frases cortas: «Quiero…», «Prefiero…».",
          teacher: ["¿Tenés un grupo de amigos en el celular?", "¿Preferís un bar o una fiesta en una casa?"],
        },
      },
    },

    departamento: {
      focus: "Mirar y decir qué hay",
      help: {
        starters: ["Hay…", "Está en…", "Es de…", "Vale tiene…", "Leo necesita…"],
        chunks: ["al lado de", "en la mesa", "hay muchos", "no hay", "esta noche"],
        vocab: ["la heladera", "el sillón", "los zapatos", "la torta", "las velas"],
      },
      activities: {
        "depto-un-minuto": {
          situation: "Vale te abre la puerta y sale a comprar hielo. Estás solo un minuto. Tocá cada lugar y mirá.",
          items: [
            { id: "entrada", label: "La puerta", detail: "Hay ocho pares de zapatos al lado de la puerta." },
            { id: "heladera", label: "La puerta de la heladera", detail: "Hay un papel: «Vecinos: silencio a las doce. Gracias»." },
            { id: "calendario", label: "El calendario de la cocina", detail: "Hoy dice: «Leo: examen a las ocho»." },
            { id: "mesa", label: "La mesa grande", detail: "Hay una torta debajo de un repasador. Tiene dos velas: un 3 y un 0." },
            { id: "sillon", label: "El sillón del living", detail: "Hay muchos abrigos y un libro de viajes. El libro es nuevo y tiene el precio." },
          ],
          ask: "¿Qué hay en la casa? ¿Qué pasa hoy?",
          reveal: "Vale vuelve con el hielo: «Leo vive conmigo. No sabe que hoy vienen veinte personas. Y mañana tiene un examen».",
          ask2: "Leo llega en diez minutos. ¿Qué necesita Leo? ¿Qué podés hacer vos?",
          role: "Sos Vale: estás nerviosa. Hablás despacio y con frases cortas: «Necesito…», «¿Podés…?».",
          teacher: ["¿Te sacás los zapatos en una casa?", "¿Vivís solo o con otras personas?"],
        },
        "depto-timbre": {
          situation: "Vale está en la ducha. Suena el timbre: «Hola, soy Tomi, vengo con Sergio». Vos no conocés a Tomi.",
          items: [
            { id: "portero", label: "La voz del portero", detail: "Hay dos voces. Están contentos y se ríen." },
            { id: "celular", label: "El teléfono de Vale", detail: "Hay un mensaje de Sergio: «¿Puedo ir con un amigo?». Vale no contesta." },
            { id: "lista", label: "La lista de la heladera", detail: "En la heladera hay una lista de invitados. Sergio está. Tomi no está." },
            { id: "ventana", label: "La ventana del living", detail: "Abajo, en la calle, un chico tiene una torta en la mano." },
          ],
          ask: "¿Quién es Tomi? ¿Qué tiene en la mano?",
          reveal: "Vale grita desde la ducha: «¡¿Tomi?! ¡Es el vecino de abajo! Siempre dice que hay mucho ruido».",
          ask2: "Tomi y Sergio están en la puerta. ¿Qué les decís?",
          role: "Sos Tomi: simpático y contento. Decís «Hola, soy el vecino. Tengo una torta». La torta es para ser amigos.",
          teacher: ["¿Conocés a tus vecinos?", "¿Vas a una fiesta con un amigo sin invitación?"],
        },
      },
    },

    restaurante: {
      focus: "Pedir, elegir y pagar",
      help: {
        starters: ["Quiero…", "Prefiero…", "Podemos…", "Necesito…", "¿Cuánto es…?"],
        chunks: ["la cuenta, por favor", "pagar juntos", "pagar separados", "sin carne", "para compartir"],
        vocab: ["la cuenta", "el mozo", "la ensalada", "los ravioles", "la propina"],
      },
      activities: {
        "resto-cuenta": {
          situation: "Son cinco en la mesa y llega la cuenta. Lu solo tomó una gaseosa.",
          prompt: "Llegó la cuenta. ¿Pagamos juntos o separados?",
          options: [
            {
              id: "iguales",
              label: "Juntos: todos pagan lo mismo.",
              result: "Todos pagan lo mismo. Lu paga mucho por una gaseosa. Ahora Lu está seria y no habla.",
              ask: "Lu no está contenta. ¿Qué le decís?",
            },
            {
              id: "cada-uno",
              label: "Separados: cada uno paga lo suyo.",
              result: "El mozo trae cinco cuentas. Pero el vino y las dos entradas son para todos, y nadie sabe quién paga eso.",
              ask: "Hay un vino y dos entradas para compartir. ¿Quién paga?",
            },
            {
              id: "otra",
              label: "Lu paga su gaseosa y los otros pagan la comida.",
              result: "Lu paga su gaseosa. Los otros cuatro pagan la comida juntos. Lu está contenta, pero Martín dice: «Es difícil».",
              ask: "Martín no entiende el plan. Explicáselo con números simples.",
            },
          ],
          close: "¿Cómo pagás con tus amigos: juntos o separados?",
          role: "Sos Martín: querés pagar todos lo mismo. Hablás simple: «Es fácil. Todos pagamos lo mismo».",
          teacher: ["¿Cuánto cuesta una cena en tu ciudad?", "¿Dejás propina en un restaurante?"],
        },
        "resto-plato": {
          situation: "Lu no come carne. Pide ravioles de verdura, pero llegan con salsa de carne.",
          prompt: "¿Qué hacen con el plato?",
          options: [
            {
              id: "devolver",
              label: "Llaman al mozo.",
              result: "El mozo dice «perdón» y se lleva el plato. Lu tiene que esperar veinticinco minutos.",
              ask: "Lu espera. ¿Ustedes comen o esperan?",
            },
            {
              id: "compartir",
              label: "Le das a Lu tu ensalada.",
              result: "Lu come la mitad de tu ensalada. Pero en la cuenta están los ravioles con carne.",
              ask: "Hablá con el mozo. ¿Qué le pedís?",
            },
            {
              id: "nada",
              label: "Lu come los ravioles sin la carne.",
              result: "Lu come muy poco. Después dice: «Tengo hambre. ¿Vamos a comer a otro lado?».",
              ask: "Lu tiene hambre. ¿Adónde van? ¿Qué quieren comer?",
            },
          ],
          close: "¿Qué te gusta comer cuando salís? ¿Qué no comés?",
          role: "Sos el mozo: amable pero rápido. Primero decís: «El plato está bien».",
          teacher: ["¿Comés carne?", "¿Cuál es tu comida favorita?"],
        },
        "resto-al-lado": {
          situation: "En la mesa de al lado hay un cumpleaños. Cantan y gritan. Ustedes no escuchan nada.",
          prompt: "Hay mucho ruido. ¿Qué hacen?",
          options: [
            {
              id: "mozo",
              label: "Hablan con el mozo.",
              result: "El mozo dice: «Es un cumpleaños, es un ratito». Pero media hora después, el ruido sigue igual.",
              ask: "El ruido sigue. ¿Cambian de mesa o se van?",
            },
            {
              id: "hablar",
              label: "Vas vos a la otra mesa.",
              result: "La chica del cumpleaños dice «perdón» y cantan más bajo. Después te dan torta y te invitan a su mesa.",
              ask: "Estás en la otra mesa. Presentate: tu nombre, de dónde sos y qué hacen ustedes hoy.",
            },
            {
              id: "sumarse",
              label: "Cantan con ellos.",
              result: "Cantan el feliz cumpleaños y juntan las mesas. Es divertido, pero Martín quiere contar algo y no puede.",
              ask: "Martín quiere hablar. ¿Qué le decís al grupo?",
            },
          ],
          close: "¿Te gustan los restaurantes con música y mucha gente o los lugares tranquilos?",
          role: "Sos la chica del cumpleaños: simpática y contenta. Invitás a todos: «¡Vengan, hay torta!».",
          teacher: ["¿Dónde festejás tu cumpleaños?", "¿Te gusta cantar?"],
        },
      },
    },

    plaza: {
      hubPrompt: "En la plaza hay personas para hablar. Elegí una.",
      focus: "Hablar con personas: preguntas y respuestas cortas",
      help: {
        starters: ["Me llamo…", "Soy de…", "Vivo en…", "Me gusta…", "¿Y vos?"],
        chunks: ["mucho gusto", "¿de dónde sos?", "¿qué hacés acá?", "tengo ganas de…", "¡qué bueno!"],
        vocab: ["el banco", "la fuente", "el colectivo", "el barrio"],
      },
      activities: {
        pablo: {
          says: "Espero a un amigo. Hace cuarenta y cinco minutos. No contesta los mensajes.",
          ask: "Pablo espera a un amigo. ¿Qué hace: espera o se va?",
          followUps: [
            "El amigo de Pablo llega. ¿Qué le dice Pablo?",
            "¿Vos llegás tarde a veces?",
          ],
          role: "Sos Pablo: estás cansado de esperar. Hablás despacio y preguntás: «¿Vos qué hacés?».",
        },
        ines: {
          says: "Hola. Soy nueva en el barrio. No conozco a nadie.",
          ask: "Inés es nueva acá. ¿Adónde puede ir para conocer gente?",
          followUps: [
            "¿Dónde vivís vos? ¿Cómo es tu barrio?",
            "¿Qué hay cerca de tu casa?",
          ],
          role: "Sos Inés: tímida y simpática. Hacés preguntas simples: «¿Hay un gimnasio cerca?», «¿Dónde hay un café?».",
        },
        pareja: {
          says: "Ana: «Quiero bailar». Diego: «Yo quiero comer». Los dos te miran.",
          ask: "Ana quiere bailar y Diego quiere comer. ¿Qué les proponés?",
          followUps: [
            "Diego te dice: «Estoy cansado». ¿Qué le decís?",
            "¿Qué te gusta más: bailar o comer con amigos?",
          ],
          role: "Hacé de Ana y de Diego. Cada uno dice qué quiere: «Quiero…», «No quiero…».",
        },
        ramiro: {
          says: "No hay más colectivos. Vivo lejos. El taxi es caro y tengo poca batería.",
          ask: "¿Qué puede hacer Ramiro: tomar un taxi, esperar o dormir en la casa de un amigo?",
          followUps: [
            "¿Cómo volvés a tu casa de noche?",
            "¿Cuánto cuesta un taxi en tu ciudad?",
          ],
          role: "Sos Ramiro: cansado y gracioso. Decís «no» a la primera idea: «No, el taxi es muy caro».",
        },
        marta: {
          says: "¡Hoy es mi último día de trabajo! Cuarenta años en la misma oficina. Estoy muy contenta.",
          ask: "Marta está contenta. ¿Qué le decís?",
          followUps: [
            "Marta te pregunta: «¿Y vos, dónde trabajás?». Contestale.",
            "¿Qué te gusta de tu trabajo o de tus estudios?",
          ],
          role: "Sos Marta: feliz y muy conversadora. Hacés muchas preguntas: «¿Trabajás? ¿Estudiás?».",
        },
        kenji: {
          says: "Perdón, hablo poco español. Quiero comer en un lugar del barrio, sin turistas.",
          ask: "Kenji quiere comer. ¿Adónde va? Explicale con palabras simples.",
          followUps: [
            "Kenji no entiende. Decíselo otra vez, más despacio.",
            "¿Qué comida típica hay en tu ciudad?",
          ],
          role: "Sos Kenji: entendés poco. Repetís palabras («¿Derecho? ¿Dos cuadras?») y pedís: «Más despacio, por favor».",
        },
        sofia: {
          says: "Hola. Estoy sola esta noche. ¿Querés ir a un bar de jazz? Está acá cerca.",
          ask: "Sofía te invita a un bar de jazz. ¿Vas o no vas?",
          followUps: [
            "¿Te gusta el jazz? ¿Qué música te gusta?",
            "¿Salís solo a veces? ¿Adónde vas?",
          ],
          role: "Sos Sofía: simpática y directa. Si te dicen que no, decís: «¡Está bien, chau!».",
        },
      },
    },

    bar: {
      hubPrompt: "En el bar hay varios problemas. Elegí uno.",
      focus: "Pedir algo con amabilidad y decir que no",
      help: {
        starters: ["Perdón, ¿podés…?", "Por favor, …", "No, gracias.", "Prefiero…", "Está bien, pero…"],
        chunks: ["más bajo, por favor", "no puedo", "hoy pago yo", "la próxima vez", "no pasa nada"],
        vocab: ["la barra", "la fila", "la billetera", "la cuenta", "el teléfono"],
      },
      activities: {
        fuerte: {
          situation: "Un hombre habla por teléfono muy fuerte. Tu amiga no escucha nada.",
          task: "Pedile al hombre que hable más bajo. Decí «por favor».",
          pushback: "«¿Por qué? ¡Es un bar!».",
          task2: "El hombre no quiere. Hablale otra vez con calma y proponé una idea simple.",
          role: "Sos el hombre del teléfono: primero decís «no», pero si te hablan bien, decís «Bueno, perdón».",
        },
        quedarse: {
          situation: "Leo quiere ir a su casa: mañana tiene un examen. El grupo dice: «¡Una más!».",
          task: "Ayudá a Leo. Decile al grupo que Leo necesita ir a casa.",
          pushback: "«¡No! ¡Siempre te vas temprano! Una más y vamos con vos al taxi».",
          task2: "Proponé un plan para Leo y para el grupo. Usá «podemos…».",
          role: "Sos el grupo: insistís con humor («¡Una más!»), pero si te dan una razón clara, aceptás.",
        },
        billetera: {
          situation: "Llega la cuenta. Martín no tiene la billetera: está en su casa. Es la segunda vez este mes.",
          task: "Decile a Martín: hoy pagás vos, pero la próxima paga él.",
          pushback: "Martín: «¡Es un error! No es a propósito».",
          task2: "Martín está mal. Decile algo amable, pero claro.",
          role: "Sos Martín: tenés vergüenza y decís «¡Perdón, perdón!». Al final prometés pagar la próxima.",
        },
        fila: {
          situation: "Esperás en la fila hace veinte minutos. Dos chicas llegan y se ponen adelante.",
          task: "Deciles con calma que hay una fila.",
          pushback: "Una sonríe: «Perdón, nuestro amigo está adelante». Pero no hay ningún amigo.",
          task2: "¿Las dejás pasar o no? Deciles qué preferís, con respeto.",
          role: "Sos una de las chicas: simpática, pero caradura. Si te hablan bien, decís: «Perdón, tenés razón».",
        },
        caro: {
          situation: "Vale quiere ir a un bar de cócteles muy caro. Todos dicen que sí. Vos no tenés mucha plata.",
          task: "Decile al grupo que es caro para vos.",
          pushback: "Vale: «¡Dale, es mi cumple! Yo pago el primer cóctel».",
          task2: "Contestale a Vale con «Sí, pero…» o «Prefiero…». Que suene amable.",
          role: "Sos Vale: estás contenta e insistís un poco: «¡Dale, vamos!». Pero no querés problemas.",
        },
        cancelo: {
          situation: "Nico escribe: «Perdón, no puedo ir». Es la tercera vez.",
          task: "Llamá a Nico y decile cómo estás: triste, enojado o cansado.",
          pushback: "Nico: «Perdón. No estoy bien. Tengo problemas».",
          task2: "Nico está mal. ¿Qué le decís ahora? Proponé algo simple.",
          role: "Sos Nico: primero decís «no puedo, perdón». Si te preguntan con cariño, decís: «Estoy triste».",
        },
        invitacion: {
          situation: "Sergio llega al bar con traje y un regalo. Todos tienen zapatillas y jeans.",
          task: "Explicale a Sergio que la fiesta es informal y que no hay problema.",
          pushback: "Sergio: «¡Ay, qué vergüenza! Me dijeron “algo tranqui”».",
          task2: "Decile algo lindo de su ropa o de su regalo.",
          role: "Sos Sergio: tenés vergüenza, pero si te dicen algo lindo, te reís.",
        },
      },
    },

    auto: {
      focus: "Elegir qué hacer cuando algo cambia",
      help: {
        starters: ["Llamamos a…", "Podemos…", "Prefiero…", "Necesitamos…", "Primero…"],
        chunks: ["no funciona", "llamar a un taxi", "llamar a un amigo", "no tiene batería", "ayudar a alguien"],
        vocab: ["el auto", "el taxi", "el celular", "el taller", "la estación de servicio"],
      },
      grammar: {
        title: "Querer, poder, necesitar",
        rows: [
          { form: "querer + infinitivo", example: "Carla quiere llegar al aeropuerto." },
          { form: "poder + infinitivo", example: "Podemos llamar a un taxi." },
          { form: "necesitar + cosa / + infinitivo", example: "Necesito un mecánico. Necesitamos esperar." },
          { form: "presente: llamar, esperar, caminar", example: "Yo llamo, vos esperás, nosotros caminamos." },
        ],
      },
      activities: {
        "auto-aeropuerto": {
          situation: "Carla está en la calle. Su auto no funciona y sale humo. Mañana muy temprano tiene un vuelo.",
          ask: "El auto no funciona. ¿Llamás a un taxi o a un amigo?",
          conditions: [
            { text: "Empieza a llover mucho.", ask: "Llueve. ¿Esperan en el auto o caminan?" },
            { text: "El celular de Carla: 4 % de batería.", ask: "Carla tiene poca batería. ¿A quién llama primero?" },
            { text: "Un hombre para su auto y quiere llevar a Carla. Nadie lo conoce.", ask: "¿Carla va con el hombre? ¿Sí o no?" },
            { text: "El taller de la esquina cierra en diez minutos. Adentro hay un mecánico.", ask: "El taller cierra pronto. ¿Qué le decís al mecánico?" },
          ],
          close: "¿Qué hace Carla al final? Decilo en dos frases.",
          role: "Sos Carla: nerviosa. Hablás simple y preguntás mucho: «¿Qué hago? ¿Llamo a un taxi?».",
        },
        "auto-nafta": {
          situation: "Un señor empuja su auto: no tiene nafta. Se llama Julio y está muy tranquilo.",
          ask: "Julio no tiene nafta. ¿Lo ayudás? ¿Qué hacen?",
          conditions: [
            { text: "La estación de nafta cierra en veinte minutos.", ask: "La estación está a tres cuadras. ¿Caminan rápido o buscan un taxi?" },
            { text: "Julio tiene un bidón, pero le duele la espalda.", ask: "A Julio le duele la espalda. ¿Quién busca la nafta?" },
            { text: "Julio va a la fiesta de Vale. ¡Es su papá!", ask: "Julio es el papá de Vale. ¿Llamás a Vale ahora?" },
          ],
          close: "¿Tenés auto? ¿Quién te ayuda cuando tenés un problema?",
          role: "Sos Julio: tranquilo y charlatán. Contás cosas de tu vida en el peor momento.",
        },
      },
    },

    museo: {
      hubPrompt: "Hoy el museo abre de noche. Elegí una pieza y mirala bien.",
      focus: "Describir una cosa y a las personas, con un poco de «era» y «fue»",
      help: {
        starters: ["En la foto hay…", "Es un / una…", "La persona es…", "Está…", "Fue en…"],
        chunks: ["es viejo", "es de", "está triste", "está contento", "hay una persona"],
        vocab: ["la vitrina", "la pieza", "el cartel", "la valija", "la foto"],
      },
      grammar: {
        title: "Para describir",
        rows: [
          { form: "hay + cosa", example: "Hay cinco personas en la playa." },
          { form: "está / están + lugar o estado", example: "La valija está en el puerto. Las personas están contentas." },
          { form: "Un poco de pasado: fue / era", example: "Fue en 1998. Era verano." },
        ],
      },
      activities: {
        foto: {
          plaque: "Una foto en blanco y negro. Hay cinco personas en una playa. Una persona tiene un sombrero en la cara.",
          ask: "¿Qué hay en la foto? ¿Cómo son las personas?",
          detail: "Atrás de la foto dice: «El último verano».",
          ask2: "La foto es de 1998. ¿Cómo era ese día? Empezá así: «Era verano, había sol…».",
          role: GUARD,
        },
        telefono: {
          plaque: "Un teléfono público. Estaba en una esquina de este barrio.",
          ask: "¿Cómo es el teléfono? ¿De qué color es? ¿Es grande o chico?",
          detail: "Una noche, el teléfono sonó una hora. Nadie atendió.",
          ask2: "¿Quién llama? Inventá a la persona: nombre, edad y ciudad.",
          role: GUARD,
        },
        boleto: {
          plaque: "Un boleto de tren: Buenos Aires – Mendoza, 14 de julio, 23:40. El tren no salió.",
          ask: "¿Qué dice el boleto? ¿De dónde a dónde es el viaje?",
          detail: "En el boleto hay un nombre y una mancha de café.",
          ask2: "¿Cómo es el pasajero? ¿Qué quiere hacer en Mendoza?",
          role: GUARD,
        },
        carta: {
          plaque: "Una carta cerrada. Una mujer la encontró detrás de un mueble, veinte años después.",
          ask: "¿Qué hay en la vitrina? ¿Cómo es la carta?",
          detail: "La carta dice: «Si me esperás, vuelvo en marzo».",
          ask2: "¿Quién escribe la carta? ¿Para quién es?",
          role: GUARD,
        },
        valija: {
          plaque: "Una valija de cuero. Está en la oficina de objetos perdidos del puerto. Nadie la busca.",
          ask: "¿Cómo es la valija? ¿Es nueva o vieja?",
          detail: "Adentro hay un vestido de novia, un mapa de Italia y un pasaje de barco.",
          ask2: "¿De quién es la valija? Describí a la persona.",
          role: GUARD,
        },
        televisor: {
          plaque: "Un televisor viejo. En 1969, una familia de este barrio vio acá la llegada a la Luna.",
          ask: "Imaginá la sala esa noche: ¿quiénes están? ¿Qué hacen?",
          detail: "Esa noche, el hijo mayor se fue de la casa sin decir nada.",
          ask2: "¿Adónde va el hijo? ¿Qué lleva?",
          role: GUARD,
        },
        bicicleta: {
          plaque: "Una bicicleta roja. Es de un cartero. Trabajó treinta años en este barrio.",
          ask: "¿Cómo es la bicicleta? ¿Qué hace un cartero?",
          detail: "El último día, el cartero recibió una carta. Era para él.",
          ask2: "¿Qué dice la carta? ¿Cómo está el cartero: contento o triste?",
          role: GUARD,
        },
        habitacion: {
          plaque: "La habitación de una estudiante en 1985. Hay una máquina de escribir, una planta y un póster de un recital.",
          ask: "¿Qué hay en la habitación? ¿Cómo es la estudiante?",
          detail: "En la máquina de escribir hay una hoja: «Hoy decidí irme».",
          ask2: "¿Qué le gusta a la estudiante? ¿Adónde quiere ir?",
          role: GUARD,
        },
        caja: {
          plaque: "Una caja de música rota. Una mañana estaba en la puerta del museo, con una nota: «Esto tiene que estar acá».",
          ask: "¿Cómo es la caja? ¿Es linda? ¿Es vieja?",
          detail: "La caja toca una canción. Es la canción del bar de enfrente.",
          ask2: "¿Quién es la persona de la caja? ¿Va al bar de enfrente?",
          role: GUARD,
        },
      },
    },

    taxi: {
      focus: "Comparar con más y menos, y elegir",
      help: {
        starters: ["Prefiero…", "Es más rápido, pero…", "Es más barato…", "Quiero…", "Necesito llegar…"],
        chunks: ["más rápido", "más barato", "más caro", "a pie", "diez minutos"],
        vocab: ["el taxi", "el conductor", "la calle", "el precio", "el semáforo"],
      },
      activities: {
        "taxi-cortado": {
          situation: "Vas en taxi a la terraza de Vale. La calle está cortada: hay un recital. El conductor pregunta: «¿Qué hacemos?».",
          prompt: "Mirá las tres opciones. ¿Cuál es más rápida? ¿Cuál es más barata? ¿Qué elegís?",
          options: [
            {
              id: "caminar",
              label: "Caminar",
              result: "Caminás por el recital. Hay música y mucha gente. ¡Nico está ahí! Quiere bailar con vos.",
              ask: "Nico dice: «¡Quedate!». ¿Te quedás o vas a la terraza?",
            },
            {
              id: "rodear",
              label: "Ir por el puerto",
              result: "El taxi va por el puerto. Es cómodo, pero pagás el doble y llegás tarde al brindis.",
              ask: "Vale pregunta: «¿Por qué llegás tarde?». Contestale.",
            },
            {
              id: "esperar",
              label: "Esperar en el taxi",
              result: "Esperan en el taxi. El conductor pone la radio y te cuenta que es músico.",
              ask: "Preguntale al conductor por su música: qué toca y dónde.",
            },
          ],
          close: "¿Qué es importante para vos de noche: rápido, barato o seguro?",
          role: "Sos el conductor: simpático y hablás mucho. Usás números: «Son diez minutos», «Es el doble».",
        },
        "taxi-mayor": {
          situation: "Decís «a la calle Mayor», pero el taxi va a la Plaza Mayor, muy lejos.",
          prompt: "El taxi va a otro lugar. ¿Qué opción es más rápida y más barata?",
          options: [
            {
              id: "seguir",
              label: "Seguir a la plaza",
              result: "Llegás a la Plaza Mayor. Hay mucha gente y un mercado de noche. Es muy lindo.",
              ask: "Mandale un audio a Vale: dónde estás y qué hay en la plaza.",
            },
            {
              id: "volver",
              label: "Volver a la calle Mayor",
              result: "El taxi vuelve, pero el conductor dice: «El error es tuyo. Pagás todo el viaje».",
              ask: "Decile al conductor qué dijiste vos y cuánto querés pagar.",
            },
            {
              id: "bajar",
              label: "Bajar y buscar otro taxi",
              result: "Bajás en una calle que no conocés. No hay taxis y empieza a llover.",
              ask: "Entrás a un kiosco. Preguntá dónde está la calle Mayor y cómo llegás.",
            },
          ],
          close: "¿Usás taxi en tu ciudad? ¿Es caro o barato?",
          role: "Sos el conductor: decís «Mayor hay una sola». Hablás claro y despacio.",
        },
      },
    },

    tienda: {
      focus: "Decir qué necesitás cuando no sabés la palabra",
      help: {
        starters: ["Necesito una cosa para…", "Es de plástico…", "Es grande / chico…", "Es como…", "No sé la palabra, pero…"],
        chunks: ["es para", "es como", "así de grande", "de plástico", "de metal"],
        vocab: ["el estante", "la caja", "el empleado", "el precio", "la bolsa"],
      },
      activities: {
        "tienda-enchufe": {
          situation: "Tu cargador es de otro país y no entra en la pared. Tenés 3 % de batería.",
          need: "un adaptador para el enchufe",
          banned: ["adaptador", "enchufe"],
          task: "Decile al empleado qué necesitás. No digas las palabras prohibidas.",
          wrong: "El empleado trae un alargue con cuatro tomas: «¿Esto?».",
          task2: "No es eso. Decile cómo es la cosa que necesitás: «Es más chico…», «Es para…».",
          close: "¿Qué cosa necesitás siempre cuando viajás?",
          role: "Sos el empleado: estás aburrido y entendés mal. Traés cosas equivocadas y preguntás: «¿Esto?».",
        },
        "tienda-hielo": {
          situation: "Vale necesita hielo para la previa. Pero las bolsas se rompen y el hielo se derrite.",
          need: "una conservadora, una caja para tener el hielo frío",
          banned: ["conservadora", "heladerita"],
          task: "Decí cómo es lo que buscás: grande o chico, de qué es y para qué es.",
          wrong: "El empleado trae un balde de plástico y un diario viejo: «Con esto está bien».",
          task2: "¿Querés el balde? Decile al empleado si lo comprás o no.",
          close: "¿Qué hay en tu heladera ahora?",
          role: "Sos el empleado: simpático y con ideas raras para todo.",
        },
        "tienda-regalo": {
          situation: "Hoy es el cumpleaños de Vale y no tenés regalo. En el almacén hay velas, cartas y un destapador con forma de pez.",
          need: "algo lindo para Vale: le gustan los viajes y el café",
          banned: ["regalo", "café"],
          task: "Decí cómo es Vale y qué le gusta. No digas las palabras prohibidas.",
          wrong: "El empleado trae el destapador con forma de pez: «¡Este es muy bueno!».",
          task2: "¿Comprás el destapador o no? Decile al empleado qué preferís.",
          close: "¿Qué te gusta recibir para tu cumpleaños?",
          role: "Sos el empleado: te encanta el destapador con forma de pez y decís: «¡Es perfecto!».",
        },
      },
    },

    terraza: {
      focus: "Decir qué quiere cada uno y elegir un plan",
      help: {
        starters: ["Vale quiere…", "Lu necesita…", "Podemos…", "Primero…, después…", "¿Les parece bien?"],
        chunks: ["estar de acuerdo", "todos juntos", "una hora más", "ir a casa", "me da igual"],
        vocab: ["la terraza", "el taxi", "la foto", "la noche"],
      },
      activities: {
        "terraza-cierre": {
          situation: "Están en la terraza. Cada uno quiere hacer otra cosa.",
          people: [
            { wants: "Quedarse acá", reason: "Es su cumpleaños." },
            { wants: "Bailar", reason: "Hace mucho que no baila." },
            { wants: "Ir a casa", reason: "Mañana tiene trabajo temprano." },
            { wants: "Comer algo", reason: "Tiene hambre." },
          ],
          ask: "¿Qué hacen? Proponé un plan para tres personas o más.",
          change: "Lu dice: «Me quedo una hora más, pero después necesito un taxi y alguien conmigo».",
          ask2: "Lu se queda una hora. ¿Cómo es el plan ahora? Decilo otra vez.",
          role: "Hacé de Vale, de Nico, de Lu o de Martín. Decí qué querés con una frase y aceptá un plan claro.",
        },
        "terraza-foto": {
          situation: "Hay una foto del grupo con la ciudad atrás. Vale quiere subirla a las redes. Sergio no quiere estar en la foto.",
          people: [
            { wants: "Subir la foto", reason: "La foto es linda y es su cumpleaños." },
            { wants: "No estar en la foto", reason: "Hoy no fue a trabajar: le dijo a su jefa que estaba enfermo." },
            { wants: "Sacar otra foto sin Sergio", reason: "Es fácil y rápido." },
          ],
          ask: "¿Qué hacen con la foto: la suben, no la suben o sacan otra?",
          change: "La jefa de Sergio sigue a Vale en las redes.",
          ask2: "Ahora, ¿qué foto sube Vale?",
          role: "Sos Sergio: estás nervioso. Decís «¡No, por favor!», pero no explicás mucho.",
        },
      },
    },
  },

  events: {
    lluvia: {
      text: "Llueve mucho. No hay gente en la plaza ni en la terraza. No hay taxis libres.",
      prompts: [
        "¿Qué lugares están bien con lluvia? ¿Cuáles no?",
        "¿Adónde van ahora? Proponé un lugar.",
        "Un amigo llega mojado. Decile dónde estás y con quién.",
      ],
      teacher: "Cambiá un dato simple: «El bar cierra pronto». Pedí una frase nueva con «podemos…».",
    },
    transporte: {
      text: "No hay subte. El último colectivo pasa lleno. Lu necesita volver a su casa.",
      prompts: [
        "¿Cómo vuelve Lu: en taxi, a pie o con un amigo?",
        "¿Cambiás tu plan? ¿Qué hacés ahora?",
        "¿Quién va con Lu?",
      ],
      teacher: "Hacé de Lu: estás cansada. Decí «no» a la primera idea («Es caro», «Es lejos»).",
    },
    celular: {
      text: "Nico no tiene su celular. Fue a los mismos lugares que vos.",
      prompts: [
        "¿En qué lugares estás esta noche? Decí los nombres.",
        "¿Dónde está el celular: en el bar, en el taxi o en la plaza?",
        "¿Qué hacen ahora: buscan el celular o siguen la fiesta?",
      ],
      teacher: "El celular está en el último lugar que dice el alumno. Tiene un mensaje nuevo: «¿Dónde están?».",
    },
  },

  final: {
    prompts: [
      "¿Qué lugares visitaste? Decí dos o tres.",
      "¿Qué lugar te gusta más?",
      "Con la lluvia, ¿qué cambia?",
      "¿Quién es una persona de esta noche? ¿Cómo es?",
      "¿Qué querés hacer la próxima vez?",
    ],
    hypothetical: "Mañana es otra noche. ¿Adónde querés ir?",
    help: {
      starters: ["Fui a…", "Me gusta…", "Hay…", "Es…", "La próxima vez quiero…"],
      chunks: ["primero", "después", "también", "pero", "la próxima vez"],
    },
    criteria: [
      { id: "conectores", label: "Frases unidas", detail: "Une ideas simples con «y», «pero» y «después»." },
      { id: "razones", label: "Gustos y deseos", detail: "Dice qué le gusta, qué quiere y qué prefiere." },
      { id: "repreguntas", label: "Responde", detail: "Contesta preguntas cortas nuevas con una o dos frases." },
      { id: "claridad", label: "Se entiende", detail: "Se le entiende con frases cortas, aunque tenga errores." },
    ],
  },
};

export default A1;
