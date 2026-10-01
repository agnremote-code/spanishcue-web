// Noche Abierta · B2 patch. See ../levels.mjs for the shape and merge rules.
//
// B2: argumentar con matices. Same night, same places, same mechanics; the
// learner weighs pros and cons, negotiates politely, disagrees without
// breaking things, and makes hypotheses (si + imperfecto de subjuntivo,
// «de haber sabido…», «habrá sido», «puede que haya…»).

const B2 = {
  arrival: {
    premise: "Bajás del colectivo en un barrio que conocés poco. Vale cumple treinta y, como suele pasar, hay más planes que certezas: una previa en su departamento, una fiesta en una terraza y un grupo que no termina de ponerse de acuerdo. Vas a tener que opinar, negociar y, a veces, decir que no sin quedar mal.",
    warmup: [
      "¿Qué es mejor para un cumpleaños importante: una fiesta organizada al detalle o algo improvisado? Defendé una postura con dos argumentos.",
      "Contá una salida que se torció y explicá qué habrías hecho distinto si hubieras sabido cómo iba a terminar.",
      "¿Hasta qué punto estás dispuesto a ceder para que un grupo de amigos esté contento? ¿Dónde ponés el límite?",
    ],
    teacher: "Tres o cuatro minutos de charla. No corrijas todavía: escuchá si aparecen conectores para argumentar (sin embargo, en cambio, por eso) y si intenta usar el condicional o el subjuntivo para las hipótesis.",
  },

  locations: {
    cafe: {
      focus: "Interpretar lo que un mensaje no dice y responder con tacto",
      help: {
        starters: ["Por cómo lo escribe, da la impresión de que…", "No me extrañaría que…", "Lo que no termina de quedar claro es si…", "Yo le contestaría algo como…", "Para no sonar enojado, le diría que…"],
        chunks: ["dar por sentado", "dejar en visto", "sacar conclusiones apuradas", "quedar como un mentiroso", "a último momento", "bajar el tono"],
        vocab: ["el malentendido", "la indirecta", "el audio", "el mensaje reenviado", "el chat grupal"],
      },
      activities: {
        "cafe-alla": {
          situation: "Quedaste con Nico en el café hace veinte minutos. Ya vas por el segundo cortado y empezás a sospechar que el plan cambió sin que nadie te avisara.",
          thread: [
            { text: "Perdón, perdón, se me complicó todo, después te explico" },
            { text: "Llego en un rato o nos vemos directamente allá, lo que te quede mejor" },
          ],
          ask: "El mensaje parece flexible, pero deja todo en el aire. ¿Qué datos faltan y qué supone Nico que vos ya sabés?",
          next: { text: "¿Ya estás viniendo? Los chicos subieron hace un rato y Vale pregunta por vos" },
          ask2: "Ahora queda claro que «allá» era otro lugar. ¿Qué habías interpretado antes y en qué te equivocaste? ¿De quién fue el malentendido?",
          reply: "Grabale un audio a Nico: hacele notar el malentendido sin que suene a reproche y decile qué vas a hacer ahora.",
          role: "Sos Nico: apurado y convencido de que fuiste clarísimo. Si te reprochan algo, te defendés («pero si te dije allá»); solo cedés si te lo plantean con tacto.",
          teacher: ["¿Qué es más grave: que alguien llegue tarde o que dé por sentado que entendiste algo que nunca dijo?", "Si te hubiera pasado con alguien que no conocés bien, ¿le habrías contestado igual?"],
        },
        "cafe-equivocado": {
          situation: "Estás en la barra y te llega un mensaje de Lu. Al segundo renglón te das cuenta de que no era para vos, y de que dice algo que no deberías saber.",
          thread: [
            { text: "Martín, ¿al final le compraste algo a Vale? Yo no tengo idea qué regalarle y ella está convencida de que nadie se acordó" },
          ],
          ask: "Tenés tres caminos: avisarle a Lu, reenviárselo a Martín o hacer como si nada. ¿Qué ventajas y qué riesgos tiene cada uno?",
          next: { text: "Che, ¿vos sabés si los chicos traman algo? Están todos rarísimos y nadie me dice nada" },
          ask2: "Vale te pregunta directamente. ¿Cómo le responderías sin mentirle descaradamente y sin arruinar la sorpresa? ¿Hay mentiras aceptables?",
          reply: "Escribile a Lu: contale que el mensaje te llegó a vos, qué le dijiste a Vale y qué te parece que deberían hacer ahora.",
          role: "Primero sos Vale: sospechás y apretás con preguntas cada vez más directas. Después sos Lu: te da vergüenza el error y le pedís que no diga nada.",
          teacher: ["¿Mentirías para proteger una sorpresa? ¿Dónde está el límite?", "Si alguien leyera un mensaje tuyo que no era para él, ¿qué esperarías que hiciera?"],
        },
        "cafe-grupo": {
          situation: "Estás por pagar y el celular no para de vibrar. En el grupo «Sábado» cada uno tira para su lado y nadie parece escuchar a los demás.",
          thread: [
            { text: "¿Y si en vez de la terraza vamos al bar de la esquina? Hay música en vivo y es gratis" },
            { text: "Yo ya pagué la entrada de la terraza, eh. No la pienso tirar" },
            { text: "Me da igual adónde, pero que no sea lejos. Mañana entro a trabajar temprano" },
          ],
          ask: "Analizá las tres posturas: ¿qué tiene de razonable cada una y qué problema les genera a los demás?",
          next: { text: "Chicos… la terraza es mi cumple. ¿En serio están discutiendo esto?" },
          ask2: "El mensaje de Vale cambia el tono del grupo. ¿Qué escribirías para bajar la tensión sin dejar mal a Lu, que solo hizo una propuesta?",
          reply: "Mandá al grupo una propuesta concreta que contemple lo que quiere cada uno y explicá por qué sería la mejor salida.",
          role: "Hacé de cualquiera del grupo: defendé tu postura con argumentos y no aflojes hasta que te ofrezcan algo a cambio.",
          teacher: ["¿Es mejor discutir los planes por el grupo o en persona? ¿Por qué?", "¿Alguna vez cambiaste un plan para evitar un conflicto y después te arrepentiste?"],
        },
      },
    },

    departamento: {
      focus: "Deducir a partir de pistas y argumentar una hipótesis",
      help: {
        starters: ["Todo indica que…", "No creo que… porque…", "A juzgar por…, diría que…", "Puede que…, aunque…", "Lo que me hace pensar eso es…"],
        chunks: ["sacar conclusiones", "atar cabos", "no hay que descartar que…", "dar por hecho", "a lo mejor me equivoco, pero…"],
        vocab: ["la pista", "el indicio", "el compañero de departamento", "la lista de invitados", "el portero eléctrico"],
      },
      activities: {
        "depto-un-minuto": {
          situation: "Vale te abre, te dice «ponete cómodo» y baja corriendo a buscar hielo. Tenés un minuto para mirar con atención. Tocá cada lugar.",
          items: [
            { id: "entrada", label: "Junto a la puerta", detail: "Ocho pares de zapatos alineados. Quien vive acá parece tomarse el orden muy en serio." },
            { id: "heladera", label: "La puerta de la heladera", detail: "Un cartel con letra firme: «Vecinos: después de medianoche, silencio. Gracias». Parece pegado hace poco." },
            { id: "calendario", label: "El calendario de la cocina", detail: "En el día de hoy alguien anotó: «Leo: examen mañana temprano». Está subrayado dos veces." },
            { id: "mesa", label: "La mesa del living", detail: "Hay algo escondido debajo de un repasador. Asoman dos velas: un 3 y un 0." },
            { id: "sillon", label: "El sillón del living", detail: "Una montaña de abrigos y un libro de viajes sin envolver, todavía con la etiqueta del precio." },
          ],
          ask: "Con lo que viste, ¿qué conclusiones sacás? Distinguí entre lo que es seguro, lo que es probable y lo que es pura suposición.",
          reveal: "Vale vuelve con el hielo y te dice en voz baja: «Leo, mi compañero de departamento, no sabe que hoy vienen veinte personas. Mañana rinde y no me animé a decírselo».",
          ask2: "Leo llega en diez minutos. ¿Qué le aconsejarías a Vale: decirle la verdad, cambiar la previa o las dos cosas? Argumentá y anticipá cómo podría reaccionar Leo.",
          role: "Sos Vale: nerviosa y a la defensiva. Al principio justificás no haberle dicho nada a Leo; aceptás un consejo solo si te dan buenas razones.",
          teacher: ["En una casa compartida, ¿quién debería tener la última palabra: el que paga más, el que vive ahí hace más tiempo o nadie?", "Si hubieras sido Leo, ¿cómo te habría gustado enterarte?"],
        },
        "depto-timbre": {
          situation: "Vale está en la ducha. Suena el portero eléctrico: «Hola, soy Tomi, vengo con Sergio». Vale nunca nombró a ningún Tomi. Antes de abrir, mirá a tu alrededor.",
          items: [
            { id: "portero", label: "El portero eléctrico", detail: "Se oyen dos voces y risas. Nadie suena nervioso." },
            { id: "celular", label: "El celular de Vale, sobre la mesa", detail: "Un mensaje de Sergio sin responder: «¿Te molesta si llevo a un amigo?»." },
            { id: "lista", label: "La lista de invitados", detail: "Pegada en la heladera. Sergio está anotado; Tomi no figura por ningún lado." },
            { id: "ventana", label: "La ventana del living", detail: "Abajo, en la vereda, uno de los dos sostiene una torta con mucho cuidado." },
          ],
          ask: "¿Quién podría ser Tomi y por qué traería una torta? Proponé dos hipótesis y decí cuál te parece más probable y por qué.",
          reveal: "Desde la ducha, Vale grita: «¡¿Tomi?! ¡Es el vecino de abajo, el que siempre se queja del ruido! ¿Qué hace con Sergio?»",
          ask2: "Ya les abriste y están subiendo. ¿Cómo los recibirías para que Tomi no se sienta rechazado y Vale no se enoje con vos?",
          role: "Sos Tomi: simpático, algo atrevido y convencido de que te invitaron. Traés la torta para hacer las paces, pero no lo decís enseguida.",
          teacher: ["¿Es de mala educación llevar a alguien sin avisar o depende del contexto?", "Si un vecino que siempre se queja apareciera en tu fiesta, ¿lo dejarías quedarse?"],
        },
      },
    },

    restaurante: {
      focus: "Evaluar consecuencias y negociar con cortesía",
      help: {
        starters: ["Entiendo tu punto, pero…", "¿No sería más justo que…?", "Lo que yo plantearía es…", "No es por ser pesado, pero…", "Si lo hiciéramos así, …"],
        chunks: ["dividir la cuenta", "pagar de más", "generar un momento incómodo", "a fin de cuentas", "por más que…", "lo que corresponde"],
        vocab: ["la cuenta", "el mozo", "el reclamo", "el plato compartido", "la propina"],
      },
      activities: {
        "resto-cuenta": {
          situation: "Son cinco en la mesa. Lu solo pidió una gaseosa porque ya había cenado, y Martín se tomó casi toda la botella de vino. Cuando llega la cuenta, Martín propone: «Partes iguales, así no perdemos tiempo».",
          prompt: "No querés pagar de más ni que Lu pague de más, pero tampoco querés crear una situación incómoda en pleno cumpleaños. ¿Qué camino elegís?",
          options: [
            {
              id: "iguales",
              label: "Aceptás dividir en partes iguales para no generar tensión.",
              result: "Nadie discute, pero Lu termina pagando lo mismo que los demás por una gaseosa. No dice nada, aunque durante el resto de la cena casi no habla.",
              ask: "Lu está molesta y no lo dice. ¿Valió la pena evitar la discusión? ¿Cómo podrías arreglarlo ahora sin dejar mal a Martín?",
            },
            {
              id: "cada-uno",
              label: "Sugerís, con tacto, que cada uno pague lo suyo.",
              result: "El mozo trae la cuenta separada, pero las entradas y el vino eran para compartir y nadie se pone de acuerdo sobre quién comió qué. Martín dice: «¿Ves? Te dije que era más fácil».",
              ask: "Martín tiene algo de razón. Reconocé lo que tiene de razonable su postura y proponé un criterio claro para repartir lo compartido.",
            },
            {
              id: "otra",
              label: "Planteás una alternativa intermedia.",
              result: "Proponés que los que cenaron dividan la comida y que cada uno pague su bebida. Lu sonríe aliviada, pero Martín, que tomó casi todo el vino, protesta: «Es mucha matemática para un sábado».",
              ask: "Martín se resiste porque, en el fondo, le toca pagar más. ¿Cómo lo convencerías sin que se sienta acusado?",
            },
          ],
          close: "¿Hay situaciones en las que conviene pagar de más para no discutir? ¿Cambiaría tu respuesta si fuera una cena de trabajo en vez de un cumpleaños?",
          role: "Sos Martín: defendés las partes iguales porque «siempre se hizo así» y te molesta que insinúen que sos tacaño. Cedés si te plantean una alternativa sin acusarte.",
          teacher: ["¿Qué dice de un grupo la forma en que divide la cuenta?", "Si alguien siempre pide lo más caro, ¿se lo dirías o lo dejarías pasar?"],
        },
        "resto-plato": {
          situation: "Lu es vegetariana y pidió ravioles de verdura. Le traen los ravioles… con salsa de carne. El mozo desapareció, la cocina está desbordada y Lu dice, con poca convicción, que no pasa nada.",
          prompt: "Lu no quiere molestar, pero es evidente que no puede comer eso. ¿Cómo manejan la situación?",
          options: [
            {
              id: "devolver",
              label: "Insistís en llamar al mozo y devolver el plato.",
              result: "El mozo se disculpa y se lleva el plato, pero avisa que el nuevo va a tardar veinticinco minutos. Los demás ya tienen la comida servida y se les enfría.",
              ask: "¿Esperan a Lu o empiezan a comer? Proponé una salida y anticipá qué podría objetar el resto de la mesa.",
            },
            {
              id: "compartir",
              label: "Le ofrecés compartir tu plato para no demorar a nadie.",
              result: "Lu acepta la mitad de tu ensalada y la noche sigue. Pero cuando llega la cuenta, los ravioles con carne aparecen cobrados como si nada.",
              ask: "Hablá con el mozo: explicale lo que pasó y pedile que saque ese plato de la cuenta, con firmeza pero sin perder la cortesía.",
            },
            {
              id: "nada",
              label: "Respetás la decisión de Lu y no decís nada.",
              result: "Lu aparta la carne y come lo poco que puede. Media hora después confiesa que se muere de hambre y propone ir a comer a otro lado, justo cuando todos están cómodos.",
              ask: "¿Hiciste bien en respetar su decisión o tendrías que haber insistido? ¿Por qué a veces no reclamamos aunque tengamos razón?",
            },
          ],
          close: "¿En qué casos te parece legítimo reclamar en un restaurante y en cuáles te parece exagerado? Contá un ejemplo propio.",
          role: "Sos el mozo: amable pero desbordado. Primero sostenés que «el plato salió como se pidió»; solo admitís el error si te lo explican con calma y precisión.",
          teacher: ["¿Reclamarías por otra persona aunque ella te pidiera que no lo hicieras?", "Si el error fuera del restaurante, ¿dejarías propina igual? ¿Por qué?"],
        },
        "resto-al-lado": {
          situation: "En la mesa de al lado festejan un cumpleaños: cantan, gritan y golpean la mesa. Martín había dicho que esta noche tenía algo importante para contarles, y en la de ustedes ya nadie se escucha.",
          prompt: "Querés recuperar la charla sin arruinarle el festejo a nadie. ¿Qué estrategia elegís?",
          options: [
            {
              id: "mozo",
              label: "Le piden al mozo que intervenga.",
              result: "El mozo se encoge de hombros: «Es un cumpleaños, es un ratito». Media hora después, el «ratito» sigue y el volumen subió.",
              ask: "La intervención no funcionó. ¿Insistirías, cambiarían de mesa o se irían? Compará las ventajas y los costos de cada opción.",
            },
            {
              id: "hablar",
              label: "Vas vos a hablar con la otra mesa.",
              result: "La cumpleañera se disculpa y baja un poco el volumen. Al rato les mandan una porción de torta y los invitan a brindar con ellos.",
              ask: "Acercate a brindar con ellos un minuto. Presentate y explicá con amabilidad por qué no pueden quedarse mucho.",
            },
            {
              id: "sumarse",
              label: "Deciden sumarse al festejo.",
              result: "Cantan el feliz cumpleaños, juntan las mesas y la cena se vuelve una fiesta. Pero Martín, que quería contarles algo importante, se queda callado en una punta.",
              ask: "Martín te dice al oído: «Necesitaba contarles algo y ya no se puede». ¿Cómo lo ayudarías a recuperar el momento sin cortar la fiesta?",
            },
          ],
          close: "¿Qué valorás más en una salida: el ambiente o poder conversar tranquilo? ¿Te parece que eso cambia con la edad?",
          role: "Hacé de la cumpleañera de la mesa de al lado: simpática, algo pasada de copas, y no entendés que a alguien le moleste un festejo.",
          teacher: ["En un lugar público, ¿quién tiene más derecho: el que festeja o el que quiere tranquilidad?", "¿Te animarías a pedirle a otra mesa que baje la voz? ¿Con qué palabras?"],
        },
      },
    },

    plaza: {
      hubPrompt: "En la plaza hay gente con ganas de charlar, y cada uno tiene su opinión. Elegí con quién hablar.",
      focus: "Opinar, aconsejar y defender una postura en una conversación abierta",
      help: {
        starters: ["Yo que vos…", "Depende mucho de si…", "Por un lado…, pero por otro…", "Si estuviera en tu lugar, …", "No estoy tan seguro de que…"],
        chunks: ["dejar plantado a alguien", "tener derecho a…", "darle el beneficio de la duda", "ponerse en el lugar del otro", "con el tiempo"],
        vocab: ["el banco", "la fuente", "el último colectivo", "el vecindario"],
      },
      activities: {
        pablo: {
          who: "Espera a un amigo que no aparece",
          says: "Hace cuarenta y cinco minutos que lo espero. No contesta, no avisa, nada. Una parte de mí quiere irse y otra tiene miedo de que le haya pasado algo.",
          ask: "Pablo duda entre irse o seguir esperando. ¿Qué le aconsejarías? Tené en cuenta las dos posibilidades: que su amigo sea un desconsiderado o que realmente le haya pasado algo.",
          followUps: [
            "Al final el amigo aparece como si nada y dice que «se le pasó la hora». Si fueras Pablo, ¿se lo dejarías pasar o le plantearías algo?",
            "¿La impuntualidad es una cuestión cultural o una falta de respeto? Defendé tu postura.",
          ],
          role: "Sos Pablo: al principio comprensivo, después cada vez más ofendido. Llevale la contraria al alumno para que tenga que argumentar.",
        },
        ines: {
          who: "Se mudó al barrio hace una semana",
          says: "Hace una semana que me mudé y no conozco a nadie. Salí a dar una vuelta porque, si me quedaba en casa, iba a terminar llamando a mi mamá.",
          ask: "¿Qué estrategias le recomendarías a Inés para armarse una vida social en un barrio nuevo? Explicá cuáles funcionan mejor y por qué.",
          followUps: [
            "Inés te dice que le da vergüenza hablar con desconocidos. ¿Cómo la convencerías de animarse sin presionarla?",
            "¿Qué ventajas y qué desventajas tiene empezar de cero en un lugar donde nadie te conoce?",
          ],
          role: "Sos Inés: tímida y algo escéptica. Ante cada consejo planteás una objeción («sí, pero…») para que el alumno matice.",
        },
        pareja: {
          who: "Una pareja que no se pone de acuerdo",
          says: "Ana: «Yo quiero ir a bailar, hace meses que no salimos». Diego: «Y yo quiero comer algo tranquilo». Los dos te miran: «A ver, vos que sos neutral, ¿quién tiene razón?».",
          ask: "Ana y Diego te piden que hagas de árbitro. ¿Aceptarías ese papel? Y si lo aceptás, ¿cómo lo harías sin que ninguno se sienta perdedor?",
          followUps: [
            "Diego te confiesa en voz baja: «En realidad estoy agotado, pero no quiero que piense que no tengo ganas de estar con ella». ¿Qué le aconsejarías?",
            "En una pareja o entre amigos, ¿es sano que siempre decida la misma persona? ¿Qué consecuencias puede tener?",
          ],
          role: "Hacé de Ana y de Diego: cada uno intenta ganarse al alumno y critica con humor la propuesta del otro.",
        },
        ramiro: {
          who: "Perdió el último colectivo",
          says: "Perdí el último colectivo por un minuto. Vivo lejísimos, el taxi me sale una fortuna y tengo el celular casi muerto. Una noche perfecta.",
          ask: "Ramiro puede pagar un taxi carísimo, esperar el primer colectivo de la mañana o pedirle a alguien que lo aloje. Evaluá los pros y los contras de cada opción y recomendale una.",
          followUps: [
            "Si hubieras estado en su lugar la semana pasada, ¿qué habrías hecho? ¿Te pasó algo parecido alguna vez?",
            "¿Le ofrecerías tu sillón a alguien que conociste hace diez minutos? ¿Qué tendría que pasar para que lo hicieras?",
          ],
          role: "Sos Ramiro: cansado, con humor negro, y le encontrás un problema a cada propuesta antes de aceptar una.",
        },
        marta: {
          who: "Hoy tiene algo para festejar",
          says: "¡Hoy me jubilé! Cuarenta años en la misma oficina. Mis compañeros ya se fueron a dormir, pero yo no tengo ningunas ganas de volver a casa.",
          ask: "Marta pasó cuarenta años en el mismo trabajo. ¿Qué se gana y qué se pierde con una carrera así, comparada con cambiar de trabajo cada pocos años?",
          followUps: [
            "Marta te pregunta: «Si pudieras dejar de trabajar mañana, ¿a qué te dedicarías?». Contestale con detalle.",
            "¿Te parece que las generaciones jóvenes tienen otra relación con el trabajo? ¿Es mejor o peor?",
          ],
          role: "Sos Marta: feliz, conversadora y con opiniones fuertes sobre «los jóvenes de hoy». Discutí con cariño.",
        },
        kenji: {
          who: "Un turista un poco perdido",
          says: "Perdón, hablo poco español. Busco un lugar «auténtico», sin turistas. Pero todos me mandan al mismo restaurante… lleno de turistas.",
          ask: "Kenji quiere algo «auténtico». Recomendale un lugar y justificá tu elección, pero adaptá tu español para que te entienda: frases cortas y claras.",
          followUps: [
            "¿Tiene sentido buscar lo «auténtico» cuando viajás, o es una idea un poco romántica? Argumentá.",
            "¿Qué le pasa a un barrio cuando se llena de turistas? Mencioná consecuencias positivas y negativas.",
          ],
          role: "Sos Kenji: entendés la mitad, pedís que te lo expliquen con otras palabras y repetís para confirmar. Obligá al alumno a reformular.",
        },
        sofia: {
          who: "Sentada sola con un café",
          says: "Me cancelaron una cita a último momento, pero igual salí: no me iba a quedar encerrada. ¿Te venís a un bar de jazz acá a la vuelta? Dicen que es buenísimo.",
          ask: "Sofía te invita a seguir la noche con ella, pero a vos te esperan en el cumple de Vale. ¿Cómo rechazarías la invitación sin sonar cortante, o cómo la combinarías con tu plan?",
          followUps: [
            "Salir sin compañía, ¿es una muestra de independencia o de soledad? Defendé una postura.",
            "¿Qué te cuesta más: decir que sí a un plan improvisado o decir que no sin quedar mal? ¿A qué creés que se debe?",
          ],
          role: "Sos Sofía: segura, divertida y directa. Si te dicen que no, no insistís, pero pedís una razón.",
        },
      },
    },

    bar: {
      hubPrompt: "En el bar pasan varias cosas a la vez y todas piden tacto. Acercate a una situación y resolvela.",
      focus: "Plantear un desacuerdo, negociar y poner límites sin romper la relación",
      help: {
        starters: ["Te entiendo, pero te pediría que…", "¿Te molestaría…?", "No lo tomes a mal, pero…", "¿Qué te parece si lo dejamos en…?", "Preferiría no…, si no te molesta."],
        chunks: ["poner un límite", "no lo digo para ofenderte", "llegar a un término medio", "quedar mal", "no es para tanto", "echarse atrás"],
        vocab: ["la barra", "la fila", "la ronda", "la excusa", "el malentendido"],
      },
      activities: {
        fuerte: {
          who: "Un hombre en la barra",
          situation: "Un hombre en la barra habla por teléfono a los gritos. Ya va por la tercera llamada y tu amiga no logra oír nada de lo que le contás.",
          task: "Pedile que baje la voz. Usá una fórmula cortés (un condicional o «¿te molestaría…?»), pero que quede claro lo que querés.",
          pushback: "«¿Y a vos qué te importa? Es un bar, no una biblioteca. Si te molesta, cambiate de lugar».",
          task2: "Reconocé lo que tiene de razonable su respuesta, pero sostené tu pedido y proponele un término medio.",
          role: "Sos el hombre del teléfono: te ofendés enseguida, pero si te hablan con respeto y sin sermones, terminás cediendo.",
        },
        quedarse: {
          who: "Leo y el grupo",
          situation: "Leo, el compañero de departamento de Vale, quiere irse ya: mañana a primera hora rinde un examen. El grupo insiste en que se quede «una más».",
          task: "Ayudá a Leo a irse sin que el grupo se ofenda ni lo haga sentir un aburrido.",
          pushback: "El grupo no afloja: «¡Siempre te vas temprano! Si te quedás una más, después te acompañamos todos al taxi».",
          task2: "Proponé una solución intermedia que deje conformes a Leo y al grupo, y explicá por qué les conviene a todos.",
          role: "Sos el grupo: insistís con humor y algo de presión. Aceptás una buena razón, pero no la primera excusa.",
        },
        billetera: {
          who: "Martín",
          situation: "Llega la cuenta de la ronda. Martín busca la billetera y pone cara de pánico: se la olvidó en casa. Es la segunda vez este mes, y la vez anterior tampoco te devolvió la plata.",
          task: "Decile que esta vez pagás vos, pero dejá claro que te molesta que se repita, sin humillarlo delante del grupo.",
          pushback: "Martín se pone a la defensiva: «Fue un error, che. ¿Me estás queriendo decir que lo hago a propósito?».",
          task2: "Bajá la tensión sin echarte atrás: explicá cómo te sentís, separando a la persona del hecho, y decí qué esperás la próxima vez.",
          role: "Sos Martín: te da vergüenza y por eso atacás. Si te hablan sin acusarte, reconocés el problema.",
        },
        fila: {
          who: "Dos chicas en la barra",
          situation: "Hace veinte minutos que esperás para pedir. Dos chicas llegan y se ponen delante tuyo con total naturalidad.",
          task: "Señalales el problema con cortesía, pero sin que parezca que te da lo mismo.",
          pushback: "Una de ellas sonríe: «Ay, perdón, un amigo nos estaba guardando el lugar». No hay ningún amigo a la vista.",
          task2: "No les creés. Decidí si las dejás pasar o no y comunicáselo con ironía suave o con firmeza, pero sin pelear.",
          role: "Sos una de las chicas: simpática y bastante caradura. Si te desenmascaran con buen humor, terminás pidiendo disculpas.",
        },
        caro: {
          who: "Vale y el grupo",
          situation: "Vale propone terminar la noche en un bar de cócteles carísimo. Todos dicen que sí con entusiasmo. Vos este mes no podés gastar tanto.",
          task: "Planteáselo al grupo de manera que no parezca que estás arruinando el plan ni que te dé vergüenza hablar de plata.",
          pushback: "Vale insiste: «Dale, no seas así, es mi cumple y un día es un día. Yo invito la primera ronda».",
          task2: "Respondele a Vale: aceptás con un límite claro o proponés una alternativa. Agradecé el gesto sin quedar en deuda.",
          role: "Sos Vale: entusiasmada e insistente. No te das cuenta de que no todos pueden gastar lo mismo, pero no querés que nadie la pase mal.",
        },
        cancelo: {
          who: "Una llamada de Nico",
          situation: "Nico te escribe: «Perdón, al final no voy a poder ir». Es la tercera vez que cancela a último momento, y este plan lo habían armado entre los dos.",
          task: "Llamalo y decile cómo te sentís, hablando de lo que te pasa a vos en vez de acusarlo.",
          pushback: "Nico se queda en silencio y después dice: «Es que estoy pasando por un momento complicado y no tenía ganas de contarlo».",
          task2: "La conversación cambió por completo. Ajustá el tono: ¿cómo le mostrás que te importa sin negar lo que sentías hace un minuto?",
          role: "Sos Nico: primero das excusas vagas; si te preguntan con cariño, contás la verdad. Si te atacan, cortás la conversación.",
        },
        invitacion: {
          who: "Sergio, en la puerta",
          situation: "Sergio llega al bar de traje y con un regalo envuelto en papel dorado. Creía que era una cena formal. Todos están en zapatillas y alguien ya se rió.",
          task: "Explicale el malentendido a Sergio y hacé que se sienta cómodo, sin restarle importancia a lo que siente.",
          pushback: "Sergio, colorado: «Me dijeron “algo tranqui por el cumple”. ¿Cómo iba a saber? Si me hubieran avisado bien, no venía así».",
          task2: "Contale un malentendido parecido que te haya pasado a vos y qué habrías hecho distinto, para que pueda reírse de la situación.",
          role: "Sos Sergio: avergonzado y un poco resentido con quien te avisó mal. Te reís de vos mismo si te ayudan con humor.",
        },
      },
    },

    auto: {
      focus: "Plantear hipótesis con «si» y evaluar qué pasaría en cada caso",
      help: {
        starters: ["Si no consiguiéramos…, …", "En caso de que…, …", "Siempre y cuando…", "De haber sabido que…, …", "Si fuera vos, …"],
        chunks: ["en el peor de los casos", "a menos que…", "correr el riesgo", "llamar a una grúa", "no arranca", "dar una mano"],
        vocab: ["el capó", "las balizas", "la grúa", "el auxilio mecánico", "el bidón"],
      },
      grammar: {
        title: "Hipótesis con «si» y otras condiciones",
        rows: [
          { form: "si + presente → presente / futuro (algo probable)", example: "Si no arranca, vamos a llamar a una grúa." },
          { form: "si + imperfecto de subjuntivo → condicional (poco probable o imaginario)", example: "Si consiguiéramos un mecánico, Carla llegaría a tiempo al vuelo." },
          { form: "en caso de que / a menos que + subjuntivo", example: "En caso de que llueva, esperamos en el taller. A menos que pase un taxi, nos quedamos." },
          { form: "de haber + participio → condicional compuesto (lo que no fue)", example: "De haber sabido que no tenía batería, habría cargado el celular." },
        ],
      },
      activities: {
        "auto-aeropuerto": {
          situation: "La calle está casi vacía. Carla tiene el capó abierto y sale un poco de humo. Su vuelo sale muy temprano y en pocas horas tiene que estar en el aeropuerto. Te mira como si vos supieras de autos.",
          ask: "Si no consiguieran un mecánico esta noche, ¿qué alternativas tendría Carla? Compará por lo menos dos y decí cuál sería más sensata.",
          conditions: [
            { text: "Empieza a llover fuerte y la calle se llena de agua.", ask: "Si siguiera lloviendo así una hora más, ¿cuál de tus planes dejaría de tener sentido y cuál ganaría fuerza?" },
            { text: "El celular de Carla tiene 4 % de batería y el tuyo, poco más.", ask: "En caso de que los dos celulares se apagaran, ¿cómo se organizarían? ¿Qué harían antes de que eso pase?" },
            { text: "Un hombre frena con su auto y se ofrece a llevarla al aeropuerto. Nadie lo conoce.", ask: "Si fueras Carla, ¿aceptarías? Sopesá el riesgo y el beneficio, y decí bajo qué condiciones dirías que sí." },
            { text: "El taller de la esquina cierra en diez minutos y el mecánico ya está bajando la persiana.", ask: "Tenés unos segundos para convencer al mecánico de que se quede. ¿Qué argumentos usarías para que no te diga que no?" },
          ],
          close: "Contá cómo terminó la noche de Carla y qué habría pasado si hubieran tomado otra decisión. Incluí por lo menos una frase con «de haber sabido…».",
          role: "Sos Carla: nerviosa y apurada. Ante cada propuesta planteás un «¿y si…?» que la complica; solo aceptás planes que tengan un plan B.",
        },
        "auto-nafta": {
          situation: "Un señor empuja su auto hasta la vereda: se quedó sin nafta a tres cuadras de la estación de servicio. Se llama Julio y está tranquilo. Sospechosamente tranquilo.",
          ask: "Si lo ayudaras, ¿cómo se repartirían las tareas? Y si no pudieras quedarte, ¿qué le aconsejarías antes de irte?",
          conditions: [
            { text: "Julio mira el reloj: la estación de servicio cierra en veinte minutos.", ask: "A menos que se apuren, se quedan sin nafta hasta mañana. ¿Qué plan B propondrías por si no llegaran a tiempo?" },
            { text: "Julio tiene un bidón vacío en el baúl, pero le duele la espalda y no puede llevar peso.", ask: "Si fueras vos a buscar la nafta, ¿qué tendría que hacer Julio mientras tanto y qué riesgos habría?" },
            { text: "Julio te cuenta que va a la fiesta de Vale. Es su papá, y ella no sabe que viene.", ask: "Si llegaran tarde, ¿le avisarías a Vale y arruinarías la sorpresa, o te arriesgarías a que se preocupe? Argumentá." },
          ],
          close: "Si esto te hubiera pasado a vos, ¿qué habrías hecho de otra manera? ¿Y qué harías si te pasara mañana?",
          role: "Sos Julio: charlatán y tranquilo. Contás anécdotas en el peor momento y relativizás todo («peores cosas me pasaron»).",
        },
      },
    },

    museo: {
      hubPrompt: "Esta noche el museo abre hasta tarde. Cada pieza guarda una historia incompleta: te toca reconstruirla y arriesgar hipótesis. Elegí una.",
      focus: "Narrar en pasado con todos sus tiempos y especular sobre lo que pudo haber pasado",
      help: {
        starters: ["Por lo visto, …", "Habrá sido…", "Puede que… haya…", "Para entonces ya…", "Lo más probable es que…", "Nunca se supo si…"],
        chunks: ["para entonces", "a raíz de", "por lo visto", "habrá sido", "puede que haya", "nunca llegó a…"],
        vocab: ["la vitrina", "la pieza", "el testimonio", "el dorso", "el andén"],
      },
      grammar: {
        title: "Contar el pasado y especular sobre él",
        rows: [
          { form: "Imperfecto, pretérito y pluscuamperfecto: contexto, hechos y lo anterior", example: "Llovía cuando llegó la carta; ella ya se había ido." },
          { form: "Futuro compuesto: suponer sobre el pasado", example: "Se habrá asustado. Habrá sido alguien del barrio." },
          { form: "Puede que / es posible que + subjuntivo (perfecto o imperfecto)", example: "Puede que haya perdido el tren. Es posible que nadie quisiera atender." },
        ],
      },
      activities: {
        foto: {
          plaque: "Apareció en una valija abandonada en una estación de tren. Cinco personas en una playa; una de ellas se tapa la cara con un sombrero, como si no quisiera salir.",
          ask: "¿Qué estaría pasando cuando sacaron la foto? ¿Por qué se tapará la cara esa persona? Combiná lo que se ve con lo que suponés.",
          detail: "En el dorso, alguien escribió en lápiz: «El último verano antes de todo».",
          ask2: "¿Qué habrá pasado después de ese verano? Contá la historia completa, marcando qué es seguro y qué es suposición.",
          role: "Sos el guardia de noche del museo: tenés tus propias teorías sobre cada pieza. Discutí las hipótesis del alumno y pedile que las justifique.",
        },
        telefono: {
          plaque: "Estuvo casi treinta años en una esquina de este barrio. Según los vecinos, una noche sonó sin parar durante una hora y nadie se acercó a atender.",
          ask: "¿Por qué nadie habrá atendido? Proponé al menos dos explicaciones y decí cuál te convence más.",
          detail: "A la mañana siguiente, una mujer por fin atendió. Escuchó una sola frase, colgó y se fue llorando.",
          ask2: "¿Qué frase pudo haber escuchado? Contá qué había pasado antes de esa llamada y qué hizo ella después.",
          role: "Sos el guardia de noche: decís que estabas de turno en esa época. Das detalles contradictorios y dejás que el alumno decida qué creer.",
        },
        boleto: {
          plaque: "Buenos Aires – Mendoza, 14 de julio, 23:40. Según los registros, ese tren nunca salió de la estación.",
          ask: "¿Qué pudo haber pasado ese día para que el tren no saliera? Reconstruí los hechos con hipótesis razonables.",
          detail: "El boleto tiene un nombre escrito a mano y una mancha de café en una esquina.",
          ask2: "¿Quién sería ese pasajero y qué hizo esa noche en lugar de viajar? ¿Le habrá cambiado la vida no haber viajado?",
          role: "Sos el guardia de noche: conocés a la familia del pasajero y das pistas solo cuando el alumno formula buenas preguntas.",
        },
        carta: {
          plaque: "Una mujer la encontró detrás de un mueble el día que se mudaba, veinte años después de que alguien la escribiera.",
          ask: "¿Qué habría pasado antes? ¿Quién la escribió, para quién y por qué nunca llegó a destino?",
          detail: "La mujer la abrió. Decía solamente: «Si me esperás, vuelvo en marzo».",
          ask2: "¿Qué habrá sentido la mujer al leerla veinte años tarde? ¿Qué habría cambiado si la hubiera leído a tiempo?",
          role: "Sos el guardia de noche: sos un romántico y sostenés que la historia terminó bien. Si el alumno piensa otra cosa, que lo argumente.",
        },
        valija: {
          plaque: "Llegó a la oficina de objetos perdidos del puerto. Nunca nadie la reclamó.",
          ask: "¿Qué le habrá pasado al dueño para que no volviera a buscarla? Considerá más de una posibilidad.",
          detail: "Adentro había un vestido de novia, un mapa de Italia con una ruta marcada y un pasaje de barco que nadie usó.",
          ask2: "A partir de esos tres objetos, contá la historia completa: qué planeaba el dueño, qué salió mal y qué hizo después.",
          role: "Sos el guardia de noche: aportás un dato nuevo cada vez que el alumno cierra una hipótesis, para que tenga que reformularla.",
        },
        televisor: {
          plaque: "En este televisor, medio barrio vio a los astronautas llegar a la Luna. La familia que vivía en la casa recuerda esa noche por otra razón.",
          ask: "¿Cómo sería esa noche en la casa? Describí el ambiente, quiénes estaban y qué hacían mientras miraban la transmisión.",
          detail: "Mientras todos tenían los ojos clavados en la Luna, el hijo mayor se fue de la casa sin avisar y no volvió esa noche.",
          ask2: "¿Por qué habrá elegido justo ese momento? Contá adónde fue y cómo reaccionó la familia cuando se dio cuenta.",
          role: "Sos el guardia de noche: sos de esa generación y la recordás con nostalgia. Pedile al alumno que compare esa época con la actual.",
        },
        bicicleta: {
          plaque: "Un cartero la usó durante treinta años para recorrer este barrio. El último día de trabajo no volvió al correo.",
          ask: "¿Cómo sería la rutina del cartero durante esos treinta años? ¿Qué pudo haber pasado el último día?",
          detail: "Esa tarde, el cartero entregó su última carta. Estaba dirigida a él mismo.",
          ask2: "¿Quién le habrá escrito y qué decía la carta? Contá qué hizo después de leerla.",
          role: "Sos el guardia de noche: conociste al cartero de chico. Recordás detalles, pero te equivocás en algunos y el alumno tiene que notarlo.",
        },
        habitacion: {
          plaque: "Así quedó el cuarto de una estudiante: una máquina de escribir, una planta, el póster de un recital y la cama sin deshacer.",
          ask: "A partir de los objetos, ¿cómo sería la vida de esta estudiante? ¿Qué te hace pensar eso?",
          detail: "En la máquina de escribir quedó una hoja con una sola línea, escrita con fuerza: «Hoy decidí irme».",
          ask2: "¿Qué la habrá llevado a tomar esa decisión? Contá adónde se fue y si volvió alguna vez, aclarando qué es seguro y qué es especulación.",
          role: "Sos el guardia de noche: tenés una teoría distinta de la del alumno y la defendés con convicción hasta que te convenza.",
        },
        caja: {
          plaque: "Apareció una mañana en la puerta del museo, envuelta en un pañuelo y con una nota: «Esto tiene que estar acá». Nadie vio quién la dejó.",
          ask: "¿Quién la habrá dejado y por qué en un museo y no en otro lugar? Armá una hipótesis convincente.",
          detail: "Cuando la arreglaron, descubrieron que la melodía era la misma que suena todas las noches en el bar de enfrente.",
          ask2: "¿Qué relación puede haber entre la caja y el bar? Reconstruí lo que había pasado antes de que la dejaran en la puerta.",
          role: "Sos el guardia de noche: sospechás del dueño del bar de enfrente y querés que el alumno te dé la razón o te convenza de lo contrario.",
        },
      },
    },

    taxi: {
      focus: "Comparar opciones con datos, sopesar ventajas y desventajas y justificar la elección",
      help: {
        starters: ["Si bien es más rápido, …", "La ventaja es que…; la desventaja, que…", "Sale bastante más caro que…, pero…", "Me inclino por… porque…", "En cambio, si…"],
        chunks: ["valer la pena", "a cambio de", "no compensa", "llegar a tiempo", "tomar otro camino", "salir más a cuenta"],
        vocab: ["el desvío", "la tarifa", "el taxímetro", "el corte de calle", "el conductor"],
      },
      activities: {
        "taxi-cortado": {
          situation: "Vas en taxi a la terraza de Vale. A dos cuadras, la policía corta la calle por un recital al aire libre. El conductor te mira por el espejo: «Vos decidís, ¿qué hacemos?».",
          prompt: "Compará las tres opciones en tiempo, costo y comodidad. ¿Cuál te conviene más y qué estás dispuesto a sacrificar?",
          options: [
            {
              id: "caminar",
              label: "Bajarte y seguir a pie",
              result: "Te bajás y cruzás el recital entre la gente. En primera fila está Nico, que te ve y te hace señas para que te quedes un rato.",
              ask: "Nico insiste en que te quedes y Vale te espera. ¿Cómo le dirías que no a uno de los dos sin que se sienta menospreciado?",
            },
            {
              id: "rodear",
              label: "Dar la vuelta por el puerto",
              result: "El conductor toma el camino del puerto. Llegás cómodo y seco, pero pagás el doble y te perdés el brindis de Vale.",
              ask: "Vale te reprocha que llegaste tarde al brindis. Justificá tu decisión y explicá qué habrías hecho de haber sabido cuánto iba a tardar.",
            },
            {
              id: "esperar",
              label: "Esperar a que liberen la calle",
              result: "Esperan. El conductor apaga el motor, pone la radio y te cuenta que durante veinte años fue músico y que un día lo dejó todo.",
              ask: "Preguntale al conductor por qué dejó la música. ¿Te parece que se arrepiente? Formulá tus preguntas con tacto.",
            },
          ],
          close: "Cuando viajás de noche, ¿qué pesa más: el tiempo, la plata o la seguridad? ¿En qué casos cambiarías ese orden?",
          role: "Sos el conductor: charlatán y convencido de que conocés la ciudad mejor que nadie. Cuestionás la elección del alumno para que la defienda.",
        },
        "taxi-mayor": {
          situation: "Le dijiste «a la calle Mayor». Diez minutos después te das cuenta de que el taxi va a la Plaza Mayor, en la otra punta de la ciudad, y el taxímetro no para.",
          prompt: "Analizá rápido las tres alternativas y elegí la que te parezca menos mala. ¿Qué criterio priorizás?",
          options: [
            {
              id: "seguir",
              label: "Seguir hasta la Plaza Mayor",
              result: "Llegás a la Plaza Mayor. Está repleta: hay un mercado nocturno que no conocías y, por un momento, te olvidás de la fiesta.",
              ask: "Mandale un audio a Vale: contale dónde terminaste y convencela de que valió la pena, aunque vayas a llegar tarde.",
            },
            {
              id: "volver",
              label: "Pedirle que vuelva atrás",
              result: "El conductor da la vuelta, pero sostiene que el error fue tuyo y que vas a tener que pagar todo el recorrido.",
              ask: "Negociá con el conductor: explicá qué dijiste, por qué pudo haber entendido otra cosa y qué te parecería un arreglo justo.",
            },
            {
              id: "bajar",
              label: "Bajarte y buscar otro auto",
              result: "Te bajás en una esquina que no conocés. La aplicación no encuentra autos disponibles y la llovizna se convierte en lluvia.",
              ask: "Entrás a un kiosco. Pedile ayuda al kiosquero con cortesía, explicando tu situación y adónde necesitás llegar.",
            },
          ],
          close: "¿Quién tuvo la culpa del malentendido? Si hubieras dado más detalles al subir, ¿se habría evitado?",
          role: "Sos el conductor: decís que «Mayor hay una sola» y te cuesta reconocer el error. Cedés un poco si el alumno negocia con argumentos.",
        },
      },
    },

    tienda: {
      focus: "Describir con precisión lo que necesitás cuando te falta la palabra exacta",
      help: {
        starters: ["Busco algo que sirva para…", "Sería parecido a…, solo que…", "No es exactamente…, sino…", "Tendría que ser de…", "Lo que necesito es algo que…"],
        chunks: ["que sirva para", "no es eso exactamente", "más bien", "algo por el estilo", "del tamaño de", "que se pueda llevar"],
        vocab: ["el estante", "la góndola", "el empleado", "el tomacorriente", "el vuelto"],
      },
      activities: {
        "tienda-enchufe": {
          situation: "Tu cargador es de otro país y no entra en ningún toma de la pared. Te queda 3 % de batería y necesitás algo cuyo nombre no te sale.",
          need: "un adaptador de enchufe para aparatos de otro país",
          banned: ["adaptador", "enchufe", "cargador", "conectar"],
          task: "Explicale al empleado qué necesitás sin usar las palabras prohibidas. Describí la función con la mayor precisión posible.",
          wrong: "El empleado vuelve, muy seguro, con un alargue de cuatro tomas: «¿Esto es lo que buscás?».",
          task2: "No es eso. Explicale en qué se diferencia de lo que buscás y qué característica tendría que tener sí o sí.",
          close: "Cuando no encontrás una palabra en otro idioma, ¿qué estrategia te funciona mejor: describir, comparar o dar ejemplos? ¿Por qué?",
          role: "Sos el empleado: aburrido en el turno noche, interpretás todo al pie de la letra y pedís precisiones hasta que la descripción sea exacta.",
        },
        "tienda-hielo": {
          situation: "Vale te pidió hielo para la previa, pero las bolsas se rompen y el hielo se derrite antes de llegar. Necesitás algo para transportarlo y no te sale el nombre.",
          need: "una conservadora o heladerita portátil",
          banned: ["conservadora", "heladera", "frío", "térmica"],
          task: "Describí lo que buscás: forma, tamaño, material y para qué sirve. Compará con objetos que el empleado conozca.",
          wrong: "El empleado te ofrece un balde de plástico y un diario viejo: «Con esto se arreglan todos, creeme».",
          task2: "Evaluá la propuesta: ¿qué ventajas y qué inconvenientes tiene? Decidí si la aceptás y explicá cómo la usarías.",
          close: "Pensá en un objeto de tu casa que no sabrías nombrar en español. Describilo con tanta precisión que alguien pueda adivinarlo.",
          role: "Sos el empleado: opinás de todo y tenés soluciones caseras para cualquier problema. Defendé tu balde con argumentos.",
        },
        "tienda-regalo": {
          situation: "Es el cumpleaños de Vale y todavía no tenés regalo. En el almacén hay un estante con cosas raras: velas, juegos de cartas, un destapador con forma de pez.",
          need: "algo que le guste a Vale, fanática de los viajes y del café",
          banned: ["regalo", "viaje", "café", "cumpleaños"],
          task: "Describile a Vale al empleado sin decir esas palabras, para que te recomiende algo adecuado. Hablá de su personalidad y de sus gustos.",
          wrong: "El empleado te muestra, orgulloso, el destapador con forma de pez: «Este se lleva muchísimo, no falla nunca».",
          task2: "Argumentá por qué no es para Vale… o convencete de que, pensándolo bien, podría funcionar.",
          close: "¿Qué es más importante en un regalo: que sea útil, que sea original o que demuestre que conocés a la persona? Defendé tu postura.",
          role: "Sos el empleado: el destapador con forma de pez es tu orgullo y lo defendés con argumentos cada vez más creativos.",
        },
      },
    },

    terraza: {
      focus: "Negociar en grupo, hacer concesiones y llegar a un acuerdo razonado",
      help: {
        starters: ["Entiendo que…, pero no podemos…", "¿Y si buscamos un punto intermedio?", "Siempre que…, yo estaría dispuesto a…", "Lo que les propongo es…", "No me convence del todo, pero…"],
        chunks: ["hacer una concesión", "ceder en algo", "llegar a un término medio", "dejarlo para otro día", "que nadie quede afuera"],
        vocab: ["el boliche", "la madrugada", "la propuesta", "la condición", "la despedida"],
      },
      activities: {
        "terraza-cierre": {
          situation: "En la terraza, cada uno quiere terminar la noche a su manera y nadie parece dispuesto a ceder.",
          people: [
            { wants: "Quedarse en la terraza hasta el final", reason: "Es su cumpleaños, organizó todo y le dolería que el grupo se dispersara." },
            { wants: "Ir a bailar a un boliche", reason: "Hace meses que no sale y siente que esta es su noche." },
            { wants: "Volver a su casa pronto", reason: "Mañana trabaja temprano y ya está cansada." },
            { wants: "Ir a comer algo antes de seguir", reason: "Casi no cenó y dice que con hambre no rinde." },
          ],
          ask: "Armá un plan que deje conformes por lo menos a tres de los cuatro. Anticipá las objeciones de cada uno y respondelas.",
          change: "Lu dice que se quedaría una hora más siempre que alguien la acompañe después a tomar un taxi.",
          ask2: "Con esta nueva condición, ¿tu plan cambia? Volvé a presentarlo y convencé al que quedó afuera ofreciéndole algo a cambio.",
          role: "Hacé de cualquiera de los cuatro: defendé tu postura, pedí concesiones y aceptá un acuerdo solo si te dan algo a cambio.",
        },
        "terraza-foto": {
          situation: "Todos posan con la ciudad de fondo y la foto sale perfecta. Vale quiere subirla ya mismo, pero Sergio se pone tenso y dice que prefiere no aparecer.",
          people: [
            { wants: "Subirla en este momento", reason: "Es su cumpleaños, salieron todos lindos y no entiende el problema." },
            { wants: "Que no la publiquen con él", reason: "Hoy faltó al trabajo: le dijo a su jefa que estaba enfermo." },
            { wants: "Sacar otra foto sin Sergio", reason: "Le parece una exageración, pero no quiere peleas." },
          ],
          ask: "¿Qué hacen con la foto? Proponé una solución que respete a todos y explicá por qué sería la más justa.",
          change: "Para colmo, Vale se da cuenta de que la jefa de Sergio la sigue en las redes.",
          ask2: "¿Esto cambia algo? ¿Habría que pedir permiso siempre antes de publicar una foto en la que salen otros, o sería exagerado?",
          role: "Sos Sergio: nervioso y reticente a contar la verdad. Si te presionan, la contás, pero pedís discreción.",
        },
      },
    },
  },

  events: {
    lluvia: {
      text: "Se larga una lluvia fuerte. La plaza y la terraza se vacían en minutos y no pasa ni un taxi libre. Los planes que parecían firmes, de repente, ya no lo son.",
      prompts: [
        "Repasá los lugares donde estuviste: ¿cuáles seguirían siendo una buena opción con lluvia y cuáles no? Justificá.",
        "Proponé un plan nuevo para el grupo y explicá qué ventajas tiene frente al anterior y qué se pierde.",
        "Un amigo llega empapado sin saber nada. Contale lo que pasó esta noche hasta ahora y qué decisiones tomaron.",
      ],
      teacher: "Mientras el alumno presenta su plan, cambiá un dato («el bar cierra en una hora») y pedile que lo reformule con «en caso de que…» o con «si» + imperfecto de subjuntivo.",
    },
    transporte: {
      text: "Una falla deja sin servicio el subte y el último colectivo pasa lleno, sin parar. Lu necesita volver a su casa y empieza a preocuparse.",
      prompts: [
        "Compará las opciones que tiene Lu para volver: ¿qué ventajas y qué riesgos tiene cada una?",
        "Pensá en una decisión que tomaste antes esta noche. De haber sabido que esto iba a pasar, ¿la habrías tomado igual?",
        "¿Cómo podría organizarse el grupo para que nadie vuelva solo? Negociá con quienes todavía no se quieren ir.",
      ],
      teacher: "Hacé de Lu: cansada, preocupada y algo orgullosa. Rechazá la primera propuesta y aceptá solo una que no te haga sentir una carga.",
    },
    celular: {
      text: "Nico no encuentra su celular. Pasó por los mismos lugares que vos esta noche y está cada vez más nervioso.",
      prompts: [
        "Reconstruí el recorrido de la noche: dónde estuvieron, en qué orden y qué pasó en cada lugar.",
        "¿Dónde puede haber quedado? Formulá hipótesis graduadas: «lo habrá dejado en…», «puede que se le haya caído en…», «dudo que…».",
        "Proponé un plan para buscarlo sin arruinar el resto de la noche y convencé a Nico de que lo acepte.",
      ],
      teacher: "El celular aparece en el último lugar que nombre el alumno, con un mensaje nuevo que cambia el plan. Pedile que reaccione y reorganice la noche.",
    },
  },

  final: {
    prompts: [
      "Contá la noche de principio a fin: dónde estuviste y en qué orden, conectando los hechos.",
      "Elegí el momento más difícil de la noche y explicá cómo lo resolviste y por qué.",
      "¿Qué decisión revisaste cuando la ciudad cambió? ¿Fue un acierto?",
      "Describí a alguien que conociste esta noche y lo que te dejó esa conversación.",
      "Si tuvieras que darle un consejo a alguien que va a vivir esta misma noche, ¿cuál sería?",
    ],
    hypothetical: "Si la noche empezara de nuevo y supieras lo que sabés ahora, ¿qué harías distinto? ¿Qué habría pasado si hubieras elegido otro camino?",
    help: {
      starters: ["Al principio…, pero después…", "Mientras…, de repente…", "Lo que más me costó fue…", "De haber sabido que…, …", "Si pudiera volver atrás, …"],
      chunks: ["a raíz de eso", "sin embargo", "por lo tanto", "al fin y al cabo", "en cambio", "de todos modos"],
    },
    criteria: [
      { id: "conectores", label: "Relato bien articulado", detail: "Combina los tiempos del pasado y usa conectores variados (sin embargo, a raíz de, por lo tanto) para ordenar y relacionar los hechos." },
      { id: "razones", label: "Argumentación", detail: "Justifica sus decisiones, evalúa ventajas y desventajas y reconoce otros puntos de vista." },
      { id: "repreguntas", label: "Hipótesis y flexibilidad", detail: "Responde a preguntas nuevas, plantea hipótesis con «si» + subjuntivo y reformula cuando no lo entienden." },
      { id: "claridad", label: "Fluidez y cortesía", detail: "Habla con fluidez razonable, elige fórmulas corteses según la situación y se le entiende sin esfuerzo." },
    ],
  },
};

export default B2;
