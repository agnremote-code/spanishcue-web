// El Gran Meridiano · Marketing: el casino visto desde el departamento de marketing, nivel A2 con términos técnicos y una decisión por escena
const scenes = {
  portero: {
    "title": "La llegada del cliente",
    "line": "Es tu primera noche como directora de marketing del Gran Meridiano. En la puerta te espera Rocco, el portero, con su uniforme burdeos. «Directora, tenemos un problema: los viernes el aparcacoches tarda dieciocho minutos. Y nadie saluda por su nombre a los clientes de alto valor, o sea, a los que más juegan. En la encuesta de satisfacción, la llegada es la queja número uno. ¿Qué hacemos primero?»",
    "options": [
      {
        "say": "Primero quiero ver los datos del CRM, el sistema con la información de cada cliente. Así sé si los que esperan son clientes de alto valor.",
        "reply": "Rocco sonríe. «Buena idea. La mitad de los que se quejan vienen ocho veces al año. Si uno de esos se va enfadado, se va al casino de enfrente.»"
      },
      {
        "say": "Vamos a conectar el CRM con la puerta. Cuando llega un cliente de alto valor, tu teléfono te avisa y tú lo saludas por su nombre.",
        "reply": "«¡Por fin!», dice Rocco. «Hace treinta años lo hacía con mi memoria. Un saludo con nombre no cuesta nada y el cliente se siente en casa.»"
      },
      {
        "say": "Es mejor contratar dos aparcacoches más los viernes. Cuesta un poco de presupuesto, pero la espera baja a cinco minutos.",
        "reply": "Rocco hace cuentas con los dedos. «Dos sueldos más... Finanzas va a protestar. Pero un cliente contento vuelve, y uno enfadado no vuelve nunca.»"
      }
    ],
    "end": "Rocco empuja la puerta giratoria. «Bienvenida al Meridiano, directora. La recepción está a la derecha.»",
    "talk": [
      "En tu trabajo, ¿cuál es la primera impresión que recibe un cliente nuevo? ¿Es buena?",
      "¿Usas algún CRM o una lista para recordar a tus clientes? ¿Qué información guardas?",
      "¿Alguna vez te han juzgado por tu ropa o tu aspecto? ¿Qué pasó?",
      "¿Te gusta que en una tienda o un hotel te llamen por tu nombre? ¿Por qué?",
      "¿Qué es más importante para ti en un lugar nuevo: un servicio rápido o un servicio amable?"
    ],
    "words": [
      "cliente de alto valor",
      "encuesta de satisfacción",
      "CRM",
      "presupuesto"
    ]
  },
  recepcion: {
    "title": "Suites gratis, sábado lleno",
    "line": "En la recepción, Marisol escribe muy rápido en el ordenador. «Directora, este sábado la tasa de ocupación, o sea, el porcentaje de habitaciones llenas, es del noventa y cuatro por ciento. Pero marketing ha regalado doce suites como comp, una cortesía para los jugadores. Cada suite vale seiscientos dólares y tengo clientes que quieren pagar. ¿Mantengo los comps?»",
    "options": [
      {
        "say": "Antes de decidir, mira cuántos de esos doce juegan de verdad. Si un cliente no juega, no necesita un comp.",
        "reply": "Marisol mira la pantalla. «Siete juegan todos los meses. Pero uno no juega desde hace cuatro meses y sigue recibiendo suite. ¡Qué morro!»"
      },
      {
        "say": "Vamos a cambiar los comps al martes con una cena gratis. El sábado vendemos las suites y subimos el ADR, el precio medio por habitación.",
        "reply": "«Mover a un cliente VIP al martes...», dice Marisol. «Algunos se van a enfadar, pero el sábado gano siete mil dólares más. Me gusta.»"
      },
      {
        "say": "Mantenlos todos. Un cliente de alto valor es más importante que una noche de hotel.",
        "reply": "Marisol levanta una ceja. «Vale, pero mira el RevPAR, lo que gana cada habitación del hotel. Este sábado va a ser más bajo que el del casino de enfrente.»"
      }
    ],
    "end": "Marisol te da una tarjeta con tu nombre. «Tu oficina está en el piso tres. Pero antes camina por el casino: empieza por las tragamonedas.»",
    "talk": [
      "¿Tu empresa regala algo a sus mejores clientes? ¿Qué regala y por qué?",
      "¿Cómo sabes si un regalo a un cliente es una buena inversión o solo un gasto?",
      "¿Prefieres un hotel barato y lleno o uno caro y tranquilo? ¿Por qué?",
      "¿Alguna vez has recibido algo gratis y después has gastado más dinero? ¿Qué pasó?",
      "¿Es fácil para ti decir que no a un cliente o a un amigo? ¿Por qué?"
    ],
    "words": [
      "tasa de ocupación",
      "comp",
      "ADR",
      "RevPAR"
    ]
  },
  tragamonedas: {
    "title": "Doña Pilar y sus amigas",
    "line": "El pasillo de las tragamonedas suena como una feria. Doña Pilar, setenta años, juega con un vaso de fichas en la mano. «Así que tú eres la nueva. Mira, niña: vengo veintidós veces al año y traigo a mis cinco amigas. Gasto poco, pero soy fiel. Ahora dicen que van a quitar estas máquinas viejas. ¿Me vas a echar?»",
    "options": [
      {
        "say": "Nadie te va a echar. Tu valor de vida del cliente, o sea, todo lo que gastas aquí en muchos años, es alto. Y además traes a cinco amigas.",
        "reply": "Doña Pilar sonríe por fin. «¡Alguien que sabe sumar! Si me voy yo, se van todas detrás. Y cenamos aquí cada semana.»"
      },
      {
        "say": "Te voy a dar un nivel del programa de fidelización para grupos. Si vienes con tus amigas, todas ganan puntos.",
        "reply": "«¿Puntos para las chicas?», pregunta Doña Pilar. «Entonces el martes vengo con ocho, no con cinco. Prepara el café.»"
      },
      {
        "say": "Lo siento, Doña Pilar: estas máquinas tienen un hold muy bajo, es decir, la casa gana muy poco con ellas. Te vamos a mover a otra fila.",
        "reply": "Doña Pilar se ríe y tose. «Sincera, al menos. Cambia la máquina si quieres, niña, pero no me cambies el rincón.»"
      }
    ],
    "end": "Doña Pilar te da una ficha para la suerte. «Toma. Y no te olvides de las viejas: nosotras pagamos la luz de este casino.»",
    "talk": [
      "¿Tienes clientes pequeños pero muy fieles? ¿Qué haces por ellos?",
      "¿Qué programa de fidelización usas tú como cliente? ¿Funciona contigo?",
      "¿Es mejor tener muchos clientes pequeños o pocos clientes grandes? ¿Por qué?",
      "¿Tú crees en la suerte? ¿Tienes algún objeto o ritual de la suerte?",
      "¿Vas siempre a los mismos lugares, como el mismo bar o la misma tienda? ¿Por qué?"
    ],
    "words": [
      "valor de vida del cliente",
      "programa de fidelización",
      "nivel del programa",
      "hold"
    ]
  },
  ruleta: {
    "title": "Mesas vacías un martes",
    "line": "La bola gira en la ruleta, pero la mesa está casi vacía. Nico, el crupier, te habla en voz baja. «Directora, los martes la apuesta mínima es de veinticinco dólares y tengo tres mesas sin gente. Operaciones quiere bajarla a diez. Pero Finanzas dice que el drop, o sea, el dinero que la gente cambia por fichas, va a bajar. ¿Tú qué piensas?»",
    "options": [
      {
        "say": "Vamos a bajar el mínimo a diez dólares solo los martes. Es una prueba de cuatro semanas y miramos el drop cada lunes.",
        "reply": "Nico asiente. «Una prueba con fecha. Me gusta. Si las mesas se llenan, la casa gana más con diez jugadores que con ninguno.»"
      },
      {
        "say": "Es mejor no bajar el precio. Prefiero una campaña para los martes con free play, es decir, créditos gratis para jugar.",
        "reply": "Nico se encoge de hombros. «El free play atrae gente, directora, pero también a los que juegan solo con lo gratis y se van.»"
      },
      {
        "say": "Primero hay que hacer segmentación: separar a los clientes por grupos. Quiero saber quién juega los martes y quién solo los sábados.",
        "reply": "«Segmentación...», repite Nico. «Te digo una cosa: los martes vienen los locales. Los sábados, los turistas. Son dos casinos distintos.»"
      }
    ],
    "end": "Un hombre con un puro pone fichas de mil dólares en el rojo. Nico te guiña un ojo. «Ese sí es un cliente de alto valor. Y nadie del marketing lo ha llamado este año.»",
    "talk": [
      "¿Has bajado alguna vez el precio de un producto o servicio? ¿Funcionó?",
      "¿Cómo haces la segmentación de tus clientes en tu trabajo?",
      "¿Qué haces tú cuando un día de la semana hay poco trabajo?",
      "Si tienes que apostar dinero, ¿prefieres apostar poco muchas veces o mucho una sola vez? ¿Por qué?",
      "¿Te gustan los lugares llenos de gente o prefieres los lugares tranquilos?"
    ],
    "words": [
      "drop",
      "free play",
      "segmentación",
      "campaña"
    ]
  },
  blackjack: {
    "title": "La regla del seis a cinco",
    "line": "En la mesa de blackjack, Sam Ortega juega tranquilo. Dos guardias de seguridad lo miran desde una columna. Sam te habla sin mirarte. «Directora, Finanzas quiere pagar el blackjack seis a cinco, no tres a dos. Así sube el hold, lo que gana la casa, casi un punto y medio. Pero los jugadores lo vemos el primer día. ¿Lo vas a permitir?»",
    "options": [
      {
        "say": "Solo en las mesas de mínimo bajo. En las mesas de clientes de alto valor vamos a pagar tres a dos. Es mejor no perder a los buenos jugadores.",
        "reply": "Sam levanta una ceja. «Una regla para ricos y otra para pobres. No es bonito, pero es inteligente. Los grandes jugadores sí se quedan.»"
      },
      {
        "say": "No. Prefiero hacer una campaña con el mensaje «aquí pagamos tres a dos». Es una oferta clara para los jugadores serios.",
        "reply": "Sam sonríe un poco. «Eso es marketing de verdad. En internet los jugadores hablan de eso todo el día. Vas a tener la mesa llena.»"
      },
      {
        "say": "Sí, pero primero quiero calcular el win/loss, o sea, cuánto gana o pierde cada cliente. Si perdemos clientes, la ganancia extra no sirve.",
        "reply": "«Calcula rápido», dice Sam. «Yo traigo a veinte jugadores al mes. Si me voy, me los llevo a todos.»"
      }
    ],
    "end": "Uno de los guardias se acerca. Sam se levanta despacio y deja una propina al crupier. «Nos vemos, directora. Si cambian la regla, mi grupo se va al casino de enfrente.»",
    "talk": [
      "¿Tu empresa ha cambiado alguna vez una regla o un precio y los clientes se han enfadado?",
      "¿Cómo mides si un cliente te da dinero o te hace perder dinero?",
      "¿Es justo tener reglas diferentes para clientes ricos y clientes normales? ¿Por qué?",
      "¿Has notado alguna vez un pequeño cambio en un producto que usas, como el tamaño o el precio?",
      "¿Confías más en una empresa que es clara con sus reglas? ¿Por qué?"
    ],
    "words": [
      "hold",
      "win/loss",
      "oferta",
      "cliente de alto valor"
    ]
  },
  dados: {
    "title": "La despedida de Kike",
    "line": "En la mesa de dados, doce hombres con camisetas iguales gritan con cada tirada. Kike, el novio, lleva una corona de plástico. «¡La nueva directora! Mis amigos y yo hemos gastado mucho en el bar, en la discoteca y en el bufé. En los dados apostamos poco, pero somos doce. ¿Nos vas a dar algo por venir en grupo?»",
    "options": [
      {
        "say": "Te voy a hacer un paquete de despedida: hotel, cena, discoteca y cien dólares de crédito promocional para jugar, todo con un precio cerrado.",
        "reply": "Kike levanta los brazos. «¡Un paquete! El año que viene se casa mi primo y venimos otra vez. ¡Directora, eres la mejor!»"
      },
      {
        "say": "Vamos a calcular tu coste por adquisición: lo que pagamos para traer a un cliente nuevo. Si ustedes traen más grupos, les damos descuento.",
        "reply": "«¿Coste por qué?», pregunta Kike, confundido. «Bueno, no entiendo nada, pero mis amigos tienen veinte despedidas este año. Llámame.»"
      },
      {
        "say": "Hoy no hay regalo. Pero mañana os mando una encuesta de satisfacción y con vuestras respuestas preparo una oferta para grupos.",
        "reply": "Kike se ríe. «¿Una encuesta? Mañana no me acuerdo ni de mi nombre, directora. Pero vale, mándala.»"
      }
    ],
    "end": "Kike te pone los dados en la mano. «Tira tú, para la suerte.» Sale un siete y la mesa entera grita tu nombre.",
    "talk": [
      "¿Tu empresa vende paquetes o descuentos para grupos? ¿Funcionan?",
      "¿Cuánto te cuesta conseguir un cliente nuevo? ¿Lo sabes?",
      "¿Has ido a una despedida de soltero o soltera? ¿Cómo fue?",
      "¿Gastas más dinero cuando estás con amigos? ¿Por qué crees que pasa?",
      "¿Qué prefieres para celebrar algo importante: una fiesta grande o una cena pequeña?"
    ],
    "words": [
      "paquete",
      "crédito promocional",
      "coste por adquisición",
      "oferta para grupos"
    ]
  },
  caja: {
    "title": "Clientes invisibles",
    "line": "Detrás del cristal de la caja, Dolores cuenta billetes. No sonríe. «Directora, te doy un dato: el treinta y cinco por ciento del juego en las mesas es sin tarjeta del programa de fidelización. Gente que cambia diez mil dólares aquí y no está en el CRM. No sabemos quiénes son ni cómo traerlos otra vez. ¿Qué hacemos?»",
    "options": [
      {
        "say": "Vamos a dar la tarjeta en la caja. Si un cliente cambia más de mil dólares, recibe la tarjeta y un regalo de bienvenida en ese momento.",
        "reply": "Dolores asiente. «En la caja todos esperan dos minutos. Es el momento perfecto. En un mes tenemos mil clientes nuevos en el CRM.»"
      },
      {
        "say": "Los crupieres van a recibir un pequeño bono por cada cliente nuevo en el programa. Así todos ayudan a captar datos.",
        "reply": "«Con dinero, los crupieres se mueven rápido», dice Dolores. «Pero cuidado: van a meter a su abuela en el programa.»"
      },
      {
        "say": "Es mejor saber primero cuánto cuesta el programa. Si regalamos puntos a todos, tenemos que ver el ROI, el retorno de la inversión.",
        "reply": "Dolores casi sonríe. «Por fin alguien habla de números. El año pasado nadie supo decirme el ROI del programa.»"
      }
    ],
    "end": "Un hombre pone un maletín debajo del cristal. Dolores lo abre sin mirarlo. «Otro cliente invisible, directora. Este cambia veinte mil y no sabemos ni su nombre.»",
    "talk": [
      "¿Conoces bien a tus clientes? ¿Qué datos tienes de ellos?",
      "¿Cómo calculas el retorno de la inversión de una promoción en tu trabajo?",
      "¿Te importa dar tus datos personales a una tienda para recibir puntos? ¿Por qué?",
      "¿Pagas más en efectivo o con tarjeta? ¿Por qué?",
      "¿Qué haces con el dinero que te sobra a final de mes?"
    ],
    "words": [
      "programa de fidelización",
      "CRM",
      "ROI",
      "captar datos"
    ]
  },
  bar: {
    "title": "Bebidas por cuenta de la casa",
    "line": "En el bar central, Chet toca el piano. Leo, el barman, te pone un martini delante. «Invita la casa, como siempre. Pero la casa invita demasiado: el año pasado las bebidas gratis costaron dos millones de dólares. La mitad fue para gente que apuesta cinco dólares. Don Aurelio dice que sin bebidas gratis el casino se queda vacío. ¿Tú qué crees?»",
    "options": [
      {
        "say": "Vamos a dar bebidas gratis según el nivel del programa. Los clientes de alto valor beben gratis; los demás pagan, pero con descuento.",
        "reply": "Leo se ríe. «Los de cinco dólares van a protestar. Pero si ahorramos un millón, Don Aurelio se olvida de las protestas.»"
      },
      {
        "say": "Primero quiero ver la ganancia teórica de cada cliente, o sea, lo que la casa debe ganar con su juego. El comp nunca puede ser más grande.",
        "reply": "«Ganancia teórica...», repite Leo. «Entonces el señor que pide champán y juega una ficha de cinco ya no bebe champán.»"
      },
      {
        "say": "Las bebidas gratis se quedan. Son parte de la experiencia y el margen del juego es más importante que el coste de un vaso.",
        "reply": "Leo encoge los hombros. «Como quieras. Pero este martini cuesta cuatro dólares y el señor de la esquina juega dos.»"
      }
    ],
    "end": "Chet deja de tocar. «Directora, los jueves esto está vacío. Con una cantante y velas lo lleno. Piénsalo.» Leo levanta el vaso: «Salud, y bienvenida.»",
    "talk": [
      "¿Tu empresa regala algo pequeño a los clientes, como café o una bebida? ¿Ayuda a vender?",
      "¿Qué margen tiene tu producto o servicio más importante? ¿Es alto o bajo?",
      "¿Te gustan los bares con música en vivo? ¿Qué música prefieres?",
      "Cuando algo es gratis, ¿consumes más? ¿Por qué crees que pasa?",
      "¿Qué bebida pides cuando celebras algo?"
    ],
    "words": [
      "ganancia teórica",
      "comp",
      "margen",
      "nivel del programa"
    ]
  },
  apuestas: {
    "title": "El coste de un clic",
    "line": "En la sala de apuestas hay pantallas con fútbol, caballos y boxeo. Ramiro, nervioso, tiene un boleto en la mano. «Directora, yo llegué por un anuncio en el teléfono: doscientos dólares de bono de bienvenida. Desde entonces me he gastado tres mil.» El jefe digital te enseña la tableta: cada cliente nuevo cuesta cuatrocientos cincuenta dólares en publicidad y solo el veintidós por ciento sigue activo después de un mes. ¿Qué haces?",
    "options": [
      {
        "say": "El problema es el churn, o sea, los clientes que se van. Vamos a gastar menos en anuncios y más en una campaña para los que ya tenemos.",
        "reply": "El jefe digital frunce la boca. «Menos clientes nuevos este trimestre... Pero si el churn baja diez puntos, ganamos más.» Ramiro aplaude."
      },
      {
        "say": "Quiero ver la tasa de conversión de cada anuncio: cuántas personas hacen clic y cuántas depositan dinero. Los anuncios malos se cortan hoy.",
        "reply": "El jefe digital mira la tableta. «Tres anuncios tienen una conversión del uno por ciento. Los cortamos y ahorramos cuarenta mil al mes.»"
      },
      {
        "say": "Ramiro, tú gastas mucho y muy rápido. Vamos a poner límites de depósito: es parte del juego responsable.",
        "reply": "Ramiro te mira sorprendido. «¿Un casino que me dice que juegue menos? Es la primera vez. Gracias... creo.»"
      }
    ],
    "end": "En la pantalla grande, el caballo de Ramiro llega último. Él rompe el boleto y se ríe. «Bueno, directora, por lo menos hoy he aprendido qué es el churn.»",
    "talk": [
      "¿Tu empresa hace publicidad en internet? ¿Sabes cuánto cuesta cada cliente nuevo?",
      "¿Qué es más fácil en tu trabajo: conseguir clientes nuevos o mantener a los clientes que ya tienes?",
      "¿Alguna vez has comprado algo por un anuncio en el teléfono? ¿Fue una buena compra?",
      "¿Has apostado alguna vez en un partido de fútbol o una carrera? ¿Ganaste o perdiste?",
      "¿Qué haces cuando sientes que gastas demasiado dinero?"
    ],
    "words": [
      "churn",
      "tasa de conversión",
      "bono de bienvenida",
      "juego responsable"
    ]
  },
  poker: {
    "title": "El torneo que pierde dinero",
    "line": "En el Salón Esmeralda hay cuatrocientos jugadores en cuarenta mesas. El Holandés, con gafas oscuras, te invita a sentarte. «Directora, este torneo promete un premio de cien mil dólares. Pero los jugadores solo han pagado ochenta y dos mil. La casa pone dieciocho mil. Y los jugadores de póker no tocan las tragamonedas. ¿Para qué sirve esto?»",
    "options": [
      {
        "say": "El torneo es la parte de arriba del embudo: trae gente nueva. Vamos a medir si después vuelven al hotel, al bufé o a las mesas.",
        "reply": "El Holandés se quita las gafas. «Un embudo, dice. Vale. Pero si solo vuelven al póker, tu embudo tiene un agujero.»"
      },
      {
        "say": "Es mejor bajar la garantía a ochenta mil. Así el torneo no pierde dinero y el KPI principal, el beneficio, sale positivo.",
        "reply": "«Con ochenta mil vienen menos jugadores», dice El Holandés. «Los grandes premios atraen a la gente. Sin premio grande, no hay fiesta.»"
      },
      {
        "say": "Vamos a dar un paquete a los jugadores: habitación con descuento y comida. Si se quedan en el hotel, la ocupación sube.",
        "reply": "El Holandés asiente. «Los jugadores de póker duermen poco, pero duermen. Y comen mucho a las cuatro de la mañana.»"
      }
    ],
    "end": "El Holandés reparte dos cartas imaginarias. «Un secreto, directora: en el póker no gana el que tiene las mejores cartas, sino el que sabe cuándo retirarse.»",
    "talk": [
      "¿Tu empresa hace eventos o promociones que pierden dinero pero traen clientes?",
      "¿Qué KPI miras tú cada semana en tu trabajo?",
      "¿Cuándo es mejor parar un proyecto que no funciona?",
      "¿Te gustan los juegos de cartas? ¿Con quién juegas?",
      "¿Sabes mentir bien, como en el póker, o se te nota todo en la cara?"
    ],
    "words": [
      "embudo",
      "KPI",
      "paquete",
      "tasa de ocupación"
    ]
  },
  bufe: {
    "title": "Langostas que cuestan caro",
    "line": "En el bufé hay torres de mariscos y una fuente de chocolate. Tere, la chef, te lleva a un rincón. «Ay, directora, escucha: el bufé pierde nueve dólares por cliente. El sesenta por ciento de las comidas son comps del casino, y la mitad van a gente que casi no juega. Dicen que Don Aurelio lo quiere cerrar. ¿Es verdad?»",
    "options": [
      {
        "say": "No lo vamos a cerrar. Pero los comps del bufé van a depender de la ganancia teórica de cada cliente. Si no juega, paga.",
        "reply": "Tere se pone la mano en el corazón. «¡Gracias! Y si los que no juegan pagan, el bufé pierde la mitad. Eso lo puedo arreglar yo.»"
      },
      {
        "say": "Vamos a subir el precio dos dólares y hacer un upgrade: una mesa de langosta solo para los niveles altos del programa.",
        "reply": "«Langosta para los VIP y pollo para los demás», dice Tere. «Me parece bien, pero el pollo va a estar buenísimo, eso te lo prometo.»"
      },
      {
        "say": "Es mejor hacer una encuesta de satisfacción. Quiero saber si la gente viene al casino por el bufé o si el bufé es solo un extra.",
        "reply": "Tere se ríe. «Yo te lo digo gratis: las señoras de las tragamonedas vienen por mi pastel de chocolate. Pero haz la encuesta, para Finanzas.»"
      }
    ],
    "end": "Tere te da un plato con una langosta. «Come, que estás muy flaca. Y no le digas nada a Finanzas: esta va por mi cuenta.»",
    "talk": [
      "¿Hay algún producto en tu empresa que pierde dinero pero es importante? ¿Por qué lo mantienen?",
      "¿Ofreces upgrades a tus clientes? ¿Los compran?",
      "¿Te gustan los bufés libres? ¿Comes más de lo normal?",
      "¿Cuál es tu comida favorita para una ocasión especial?",
      "¿Prefieres pagar un poco más por comer mejor o comer mucho por poco dinero?"
    ],
    "words": [
      "comp",
      "ganancia teórica",
      "upgrade",
      "encuesta de satisfacción"
    ]
  },
  teatro: {
    "title": "El rival tiene una estrella",
    "line": "En el camerino hay plumas, espejos y olor a laca. El Gran Faustino camina nervioso con su capa. Estrella, la bailarina, se arregla las pestañas. «¡Directora, una catástrofe!», dice Faustino. «El casino de enfrente trae a una cantante famosa este sábado, solo para los miembros de su programa. Contratarla cuesta trescientos mil dólares. ¿Traemos nosotros a otra estrella?»",
    "options": [
      {
        "say": "No. Con trescientos mil dólares el ROI es muy bajo. Es mejor hacer una noche especial con vuestro espectáculo y cena para los clientes dormidos, los que no vienen desde hace meses.",
        "reply": "Faustino se emociona. «¡Una noche para nosotros!» Estrella sonríe: «Y a esos clientes dormidos los despertamos con plumas.»"
      },
      {
        "say": "Sí, pero las entradas solo son para clientes con un nivel alto del programa de fidelización. Así el concierto también es una herramienta de fidelización.",
        "reply": "Estrella levanta una ceja. «Una estrella para cien personas... Es caro, directora, pero esos cien van a hablar de nosotros todo el año.»"
      },
      {
        "say": "Primero vamos a ver los datos: ¿cuántos clientes del espectáculo juegan después en el casino? Si nadie juega, el teatro necesita otra estrategia.",
        "reply": "Estrella se gira. «Te lo digo yo: el público del teatro son parejas y turistas. Cenan y se van a dormir. Hay que invitarlos a jugar sin que se sientan cazados.»"
      }
    ],
    "end": "Suena la música del primer acto. Faustino se pone la capa. «¡Al escenario! Directora, guárdanos un sitio en tu presupuesto.»",
    "talk": [
      "¿Qué hace tu empresa cuando la competencia lanza algo grande?",
      "¿Cómo reactivas a un cliente dormido, uno que no compra desde hace meses?",
      "¿Te gustan los espectáculos en vivo, como el teatro o los conciertos? ¿Cuál fue el último?",
      "¿Pagarías mucho dinero por ver a tu artista favorito? ¿Cuánto?",
      "¿Te pones nervioso o nerviosa cuando hablas delante de mucha gente?"
    ],
    "words": [
      "ROI",
      "cliente dormido",
      "reactivación",
      "programa de fidelización"
    ]
  },
  capilla: {
    "title": "Bodas exprés en redes",
    "line": "La capilla «Amor Exprés» brilla con luces rosas. Un Elvis con gafas doradas casa a una pareja que se conoció hace tres horas. Entre dos canciones, te habla. «Nena, aquí hacemos mil doscientas bodas al año. Todas las parejas suben fotos a las redes con nuestro logo y las ven millones de personas. Pero ninguna pareja vuelve al casino. ¿Esto es marketing o solo diversión?»",
    "options": [
      {
        "say": "Es marketing, pero falta el segundo paso. Vamos a pedir el correo de cada pareja y mandarles una oferta para su aniversario.",
        "reply": "Elvis se baja las gafas. «¿Una oferta de aniversario? Nena, muchas parejas no llegan al primer aniversario. Pero las que llegan, vuelven felices.»"
      },
      {
        "say": "Vamos a vender un paquete de boda: capilla, suite, cena y cincuenta dólares de free play. Así la pareja también conoce el casino.",
        "reply": "«¡Boda, cama y ruleta!», canta Elvis. «Me encanta. Y si pierden en la ruleta, por lo menos ya están casados.»"
      },
      {
        "say": "Quiero medir esto bien: cuántas personas ven las fotos, cuántas visitan nuestra web y cuántas reservan. Sin estos datos, no sabemos si funciona.",
        "reply": "Elvis suspira. «Tú hablas de números en una boda, nena. Qué romántica.» La novia se ríe y tira el ramo."
      }
    ],
    "end": "La novia te mira con ilusión. «¿Quieres ser nuestra testigo?» Elvis te da el libro de firmas. «Firma, nena. Es la mejor publicidad de la noche.»",
    "talk": [
      "¿Tu empresa usa las redes sociales? ¿Qué publicaciones funcionan mejor?",
      "¿Qué haces para que un cliente nuevo vuelva una segunda vez?",
      "¿Te casarías después de conocer a alguien solo tres horas? ¿Por qué?",
      "¿Qué piensas de las bodas grandes y caras? ¿Valen la pena?",
      "¿Subes fotos de tus momentos importantes a las redes o prefieres guardarlos para ti?"
    ],
    "words": [
      "paquete",
      "free play",
      "oferta",
      "redes sociales"
    ]
  },
  discoteca: {
    "title": "Jóvenes que no juegan",
    "line": "Luces violetas, un DJ y mucha gente bailando. Junto a la mesa VIP, Bruno, un hombre enorme de traje gris, te corta el paso con mucha educación. «Directora, el informe dice que ahora vienen un veintiún por ciento más de jóvenes. Pero beben, bailan y se van sin tocar una mesa. Pagamos treinta mil dólares al mes a los promotores. El jefe quiere saber si vale la pena.»",
    "options": [
      {
        "say": "Vamos a pagar a los promotores solo por resultados: dinero por cada joven que entra en el programa de fidelización y juega.",
        "reply": "Bruno asiente despacio. «Pago por resultados. A los promotores no les va a gustar, pero al jefe sí. Y al jefe es mejor no enfadarlo.»"
      },
      {
        "say": "Es una inversión a largo plazo. Estos jóvenes hoy no juegan, pero su valor de vida del cliente en diez años puede ser muy alto.",
        "reply": "«A largo plazo...», dice Bruno. «El jefe piensa a corto plazo, directora. Pero se lo voy a decir con tus palabras.»"
      },
      {
        "say": "Prefiero cortar la mitad del presupuesto de los promotores y usar ese dinero en el Piso VIP. Allí el retorno es mucho más alto.",
        "reply": "Bruno sonríe por primera vez. «Eso le va a gustar arriba. Las ballenas, los que apuestan miles, son la prioridad del jefe.»"
      }
    ],
    "end": "Bruno se inclina y baja la voz. «Te esperan en el Piso VIP, directora. El ascensor está al fondo. No llegues tarde.»",
    "talk": [
      "¿Cómo atrae tu empresa a los clientes jóvenes? ¿Es diferente de los clientes mayores?",
      "¿Pagas a alguien por resultados en tu trabajo, por ejemplo con comisiones? ¿Funciona?",
      "¿Ibas a discotecas cuando eras más joven? ¿Todavía vas?",
      "¿Qué es más importante para ti: ganar dinero hoy o invertir para el futuro?",
      "¿Te gusta bailar? ¿Qué música te hace bailar?"
    ],
    "words": [
      "pago por resultados",
      "valor de vida del cliente",
      "presupuesto",
      "ballena"
    ]
  },
  vip: {
    "title": "Demasiados clientes VIP",
    "line": "Llegas al Piso VIP. Tano, el guardaespaldas, está delante de una puerta negra. «Directora, aquí solo entran los clientes del nivel más alto del programa de fidelización. Pero hay un problema: el cuarenta por ciento de los miembros ya está en ese nivel. Si todos son VIP, nadie es especial. ¿Qué hacemos?»",
    "options": [
      {
        "say": "Vamos a cambiar las reglas del nivel del programa: más puntos para subir. Y quien baje tiene seis meses para recuperar su nivel.",
        "reply": "Tano piensa un momento. «Bien. Así nadie se enfada el primer día. Pero prepárate: la Condesa va a preguntar por sus puntos.»"
      },
      {
        "say": "Es mejor crear un nivel nuevo, solo por invitación, por encima de todos. No quitamos nada a nadie: añadimos algo exclusivo.",
        "reply": "«Un nivel secreto», dice Tano, y sonríe por primera vez. «A los ricos les encanta lo que no pueden comprar.»"
      },
      {
        "say": "Primero quiero ver los datos del CRM: ¿qué hace volver a cada nivel? Si el nivel máximo no cambia nada, el problema son los beneficios.",
        "reply": "«Datos, datos…», dice Tano. «Mi jefe anterior solo miraba los relojes de los clientes. Te va a ir mejor que a él.»"
      }
    ],
    "end": "Tano abre la puerta. Al fondo, en un salón dorado, una mujer de vestido negro juega al bacará con muchas fichas.",
    "talk": [
      "¿Tienes una tarjeta de un programa de fidelización? ¿La usas de verdad?",
      "En tu trabajo, ¿hay clientes más importantes que otros? ¿Cómo los tratas?",
      "¿Qué es mejor para un negocio: pocos clientes muy buenos o muchos clientes normales?",
      "¿Te gusta sentirte especial cuando compras algo? ¿Dónde te pasa?",
      "¿Alguna vez has pagado más solo por entrar en un sitio exclusivo?"
    ],
    "words": [
      "programa de fidelización",
      "nivel del programa",
      "CRM",
      "beneficios"
    ]
  },
  bacara: {
    "title": "La Condesa quiere más",
    "line": "En el salón de bacará, la Condesa pone medio millón en la mesa sin mirar. «Querida, quiero dos cosas: una línea de crédito de dos millones y el veinte por ciento de mis pérdidas de vuelta. Mi ganancia teórica, la theoretical win, es de ciento ochenta mil dólares por viaje. El casino de enfrente me lo da todo. ¿Y tú?»",
    "options": [
      {
        "say": "Un veinte por ciento es demasiado para nuestro margen. Te ofrezco el crédito con un diez por ciento y un upgrade: la mejor suite del hotel.",
        "reply": "La Condesa levanta una ceja. «Una suite… Ya tengo tres casas, querida. Pero me gusta que sabes hacer cuentas.»"
      },
      {
        "say": "Primero tengo que revisar tu historial de pagos con Finanzas. Dos millones de crédito es mucho riesgo, aunque seas una cliente de alto valor.",
        "reply": "«Qué aburrido», dice ella. «Pero honesto. Los aburridos y honestos duran más en este negocio.»"
      },
      {
        "say": "Allí te dan dinero. Aquí te damos lo que ellos no tienen: mesa privada, tu crupier favorito y discreción total. Eso es un comp que no se compra.",
        "reply": "La Condesa sonríe y mueve las fichas. «Mi crupier favorito… Eres peligrosa, directora. Me quedo esta noche.»"
      }
    ],
    "end": "La Condesa te da una copa de champán y señala la sala de puros. «Allí está Don Carmine. Él no cree en los datos, solo en las personas.»",
    "talk": [
      "¿Qué es una cliente de alto valor en tu sector? ¿Cómo la reconoces?",
      "¿Es buena idea devolver dinero a un cliente que pierde? ¿Por qué?",
      "En tu trabajo, ¿qué regalos o cortesías das a los buenos clientes?",
      "¿Le prestarías dinero a un amigo rico? ¿Y a un amigo pobre?",
      "¿Cambias de tienda o de banco si otro te ofrece algo mejor?"
    ],
    "words": [
      "cliente de alto valor",
      "ganancia teórica",
      "margen",
      "comp"
    ]
  },
  puros: {
    "title": "Datos contra intuición",
    "line": "La sala de puros está llena de humo. Don Carmine, el jefe de la vieja guardia, juega a las cartas con cuatro amigos. «Así que tú eres la de los datos. Yo conozco a mis clientes por su apretón de manos. Tu CRM no sabe si un hombre está triste. ¿Para qué te necesito?»",
    "options": [
      {
        "say": "Para llegar a más gente. Tú conoces a doscientos clientes; con la segmentación del CRM yo puedo conocer a doscientos mil.",
        "reply": "Don Carmine suelta humo. «Doscientos mil… Ninguno de ellos me va a invitar a su boda, muchacha.»"
      },
      {
        "say": "Tienes razón: los datos no ven la tristeza. Por eso quiero que tus hosts escriban sus notas en el CRM. Tu experiencia y mis números juntos valen más.",
        "reply": "«Hmm. Mis chicos escribiendo en un ordenador…», dice. «Bueno. Si no se pierde el respeto, probamos.»"
      },
      {
        "say": "Con respeto, Don Carmine: los datos dicen que tres de tus clientes favoritos son clientes dormidos. No vienen desde hace seis meses.",
        "reply": "Don Carmine deja las cartas. Nadie habla. «¿Seis meses?», pregunta al final. «Llama a Ignacio. Ahora.»"
      }
    ],
    "end": "Don Carmine se levanta y te da la mano. «Ve a ver a Ignacio, el anfitrión. Él conoce a todos los clientes importantes.»",
    "talk": [
      "En tu trabajo, ¿confías más en los datos o en tu intuición?",
      "¿Tu empresa usa un CRM? ¿Es útil o es solo trabajo extra?",
      "¿Cómo recuperas a un cliente dormido que ya no viene?",
      "¿Alguna vez tu intuición se ha equivocado con una persona?",
      "¿Qué aprendes de las personas mayores en tu trabajo?"
    ],
    "words": [
      "CRM",
      "segmentación",
      "host",
      "cliente dormido"
    ]
  },
  anfitrion: {
    "title": "¿Funcionó la campaña?",
    "line": "Ignacio, el anfitrión VIP, abre una carpeta. «Directora, la última campaña: enviamos cincuenta mil mensajes y novecientos clientes usaron la oferta. Ingresos: ciento noventa mil dólares. Costo: ciento cuarenta mil. Don Aurelio dice que es un éxito. ¿Tú qué dices?»",
    "options": [
      {
        "say": "Todavía no sé. Tengo que calcular el ROI, o sea, el retorno de la inversión, con el margen real. Y saber cuántos iban a venir sin la oferta.",
        "reply": "Ignacio cierra la carpeta. «Don Aurelio odia la palabra todavía. Pero tienes razón.»"
      },
      {
        "say": "Es un éxito pequeño. La tasa de conversión es baja: menos del dos por ciento. Hay que mirar el embudo y ver dónde perdemos a la gente.",
        "reply": "«¿El embudo?», pregunta Ignacio. «Ah, como el del vino. Entra mucho arriba y sale poco abajo. Entendido.»"
      },
      {
        "say": "La próxima vez enviamos menos mensajes, pero con mejor segmentación. Menos ruido, más clientes que de verdad vienen.",
        "reply": "«Menos mensajes», repite Ignacio, feliz. «Por fin. Mis clientes ya me llaman el spam con corbata.»"
      }
    ],
    "end": "Ignacio señala una foto antigua donde está un Don Aurelio joven. «Marco, su hijo, te espera en la terraza. Y no está de buen humor.»",
    "talk": [
      "¿Cómo sabes en tu trabajo si una campaña funciona?",
      "¿Qué KPI miras tú cada semana? ¿Y tu jefe?",
      "¿Cuántos correos de publicidad recibes al día? ¿Abres alguno?",
      "¿Es fácil decirle a tu jefe que algo no ha sido un éxito?",
      "¿Qué oferta te ha convencido a ti de comprar algo?"
    ],
    "words": [
      "campaña",
      "ROI",
      "tasa de conversión",
      "embudo"
    ]
  },
  terraza: {
    "title": "El competidor ataca",
    "line": "Desde la terraza se ve todo el Strip. Marco, el hijo del dueño, bebe whisky. «Dos malas noticias. Uno: el casino de enfrente ofrece habitaciones a mitad de precio a nuestros clientes. Dos: tu equipo envió una oferta por error a veinte mil personas. Ya hay trescientos canjes. ¿Qué haces primero?»",
    "options": [
      {
        "say": "Primero el error, porque es nuestro. Paramos los envíos, guardamos la lista y reunimos a CRM, Finanzas y Legal hoy mismo.",
        "reply": "Marco levanta el vaso. «Rápida. A mi padre le gusta la gente que no se esconde.»"
      },
      {
        "say": "Respetamos los trescientos canjes. Es un error caro, pero cancelar una oferta es peor para la marca. Luego miramos por qué falló la segmentación.",
        "reply": "«Caro, sí», dice Marco. «Treinta mil dólares, más o menos. Pero en las redes nadie va a hablar mal de nosotros.»"
      },
      {
        "say": "Las dos cosas a la vez, con equipos distintos. Atención al Cliente se ocupa de los canjes y yo del competidor. En una hora tienes un informe.",
        "reply": "Marco mira el reloj. «Una hora. Empiezo a contar, directora.»"
      }
    ],
    "end": "Marco señala una puerta al final del pasillo. «Mi padre te espera en su oficina. Y viene a recortar el presupuesto.»",
    "talk": [
      "¿Qué haces cuando tu competencia baja los precios?",
      "¿Has cometido un error grande en el trabajo? ¿Qué pasó después?",
      "¿Es mejor bajar precios o dar más valor? ¿Por qué?",
      "¿Te gusta trabajar con presión o prefieres la calma?",
      "¿Perdonas fácilmente a una empresa que se equivoca contigo?"
    ],
    "words": [
      "oferta",
      "canje",
      "segmentación",
      "competidor"
    ]
  },
  oficina: {
    "title": "El dueño quiere recortar",
    "line": "En su oficina, Don Aurelio fuma un puro detrás de un escritorio enorme. «Directora, el próximo trimestre corto un quince por ciento del presupuesto de marketing. Los clientes premium vienen menos, el churn sube, o sea, perdemos más clientes, y el hotel tiene una tasa de ocupación del noventa por ciento. Tienes un minuto. ¿Cuáles son tus tres prioridades?»",
    "options": [
      {
        "say": "Uno: recuperar a los clientes premium con su host, no con más ofertas. Dos: vender más paquetes de hotel y restaurante. Tres: medir el ROI de cada campaña.",
        "reply": "Don Aurelio asiente despacio. «Claro y corto. Me gusta. Hace años que nadie me habla así.»"
      },
      {
        "say": "Uno: reactivación de los clientes dormidos. Dos: ofertas entre semana, cuando el casino está vacío. Tres: subir el RevPAR del hotel, el ingreso por habitación disponible.",
        "reply": "«RevPAR…», dice Don Aurelio. «Mi contable usa esa palabra. Tú eres la primera que la explica bien.»"
      },
      {
        "say": "Uno: proteger a los clientes de alto valor, porque ahí está el margen. Dos: convertir a los jóvenes en clientes del hotel. Tres: dejar de copiar al competidor.",
        "reply": "Don Aurelio golpea la mesa con una sonrisa. «¡Por fin alguien que no quiere copiar a los de enfrente!»"
      }
    ],
    "end": "Don Aurelio guarda la carpeta en la caja fuerte. Tu primera noche termina, pero tu verdadero trabajo empieza mañana.",
    "talk": [
      "Si te cortan el presupuesto un quince por ciento, ¿qué quitas primero?",
      "¿Cuáles son las tres prioridades de tu trabajo este año?",
      "¿Cómo explicas una idea difícil a un jefe con poco tiempo?",
      "¿Qué haces cuando tienes menos dinero del que necesitas?",
      "¿Prefieres un jefe que habla mucho o uno que habla poco?"
    ],
    "words": [
      "presupuesto",
      "churn",
      "tasa de ocupación",
      "RevPAR"
    ]
  },
  borracho: {
    "title": "El vaquero y el vídeo",
    "line": "Dos guardias sacan a Billy, un turista de Texas muy borracho, de la mesa de dados. Billy te agarra del brazo. «¡Diles que eres mi esposa!» Entonces llega el jefe de seguridad con el teléfono. «Directora, alguien ha grabado todo y el vídeo ya tiene treinta mil visitas. Es malo para nuestra reputación. ¿Qué hacemos?»",
    "options": [
      {
        "say": "Primero, Billy: agua, una sala tranquila y un taxi pagado por la casa. Eso es juego responsable. Luego publicamos un mensaje corto y amable sobre cómo cuidamos a los clientes.",
        "reply": "El jefe de seguridad asiente. «Un casino que cuida a un borracho… Eso queda mejor que un casino que lo empuja.»"
      },
      {
        "say": "Quiero saber quién le sirvió tantas copas. Si el bar le sirvió así, es un problema legal y de reputación. Hay que formar al personal.",
        "reply": "«El camarero dice que Billy le daba cien dólares de propina por copa», explica el guardia. «Formación, entonces. Mucha.»"
      },
      {
        "say": "No respondemos en las redes esta noche. Mañana miramos los comentarios. Si la gente está enfadada, pedimos perdón; si se ríe, nos reímos con ellos.",
        "reply": "El guardia mira el teléfono. «La gente se ríe. Hay uno que dice: quiero ir a ese casino.» Billy grita: «¡Soy famoso!»"
      }
    ],
    "end": "Un taxi se lleva a Billy, que te saluda con el sombrero. Desde los tragamonedas llegan sirenas y luces: alguien ha ganado algo grande.",
    "talk": [
      "¿Qué hace tu empresa cuando alguien habla mal de ella en las redes?",
      "¿Qué significa para ti el juego responsable?",
      "¿Es más importante vender mucho o tener buena reputación?",
      "¿Has visto alguna vez a alguien muy borracho en público? ¿Qué hiciste?",
      "¿Grabas con el móvil cuando pasa algo raro en la calle?"
    ],
    "words": [
      "juego responsable",
      "reputación",
      "redes sociales",
      "formación del personal"
    ]
  },
  jackpot: {
    "title": "La abuela del jackpot",
    "line": "Yolanda, una abuela de Ohio, acaba de ganar un jackpot de ochocientos cuarenta y siete mil dólares. Todo el pasillo aplaude. Damián, de Comunicación, llega con un cheque gigante. «Directora, esto es publicidad gratis. Si publicamos su cara, su nombre y la cifra, mañana tenemos el casino lleno. ¿Publicamos?»",
    "options": [
      {
        "say": "Solo con su permiso de imagen firmado. Sin permiso, no hay foto. Es la ley y es lo correcto.",
        "reply": "Yolanda firma con una sonrisa. «¡Claro que sí! Que mis vecinas se mueran de envidia.» Damián casi llora de alegría."
      },
      {
        "say": "Publicamos la cifra y la foto del cheque, pero sin su nombre. Así la campaña funciona y ella está segura.",
        "reply": "«Una abuela misteriosa», dice Damián. «Me gusta. El misterio también vende.»"
      },
      {
        "say": "Esta noche no publicamos nada. Primero que hable con un asesor por los impuestos. Mañana preguntamos si quiere salir en la publicidad.",
        "reply": "Damián suspira. «Mañana… Bueno. Pero si dice que sí, quiero el cheque gigante en todas las fotos.»"
      }
    ],
    "end": "Yolanda te regala una ficha «para la suerte». Al fondo, cerca del blackjack, seguridad acaba de esposar a alguien.",
    "talk": [
      "¿Usarías la foto de un cliente feliz en tu publicidad? ¿Con qué condiciones?",
      "¿Qué tipo de publicidad te parece más creíble?",
      "¿Qué piensas de los anuncios con ganadores de premios?",
      "Si ganas mucho dinero, ¿se lo cuentas a tu familia?",
      "¿Crees en la suerte o crees que la suerte se trabaja?"
    ],
    "words": [
      "permiso de imagen",
      "publicidad",
      "jackpot",
      "campaña"
    ]
  },
  tramposo: {
    "title": "Seguridad o experiencia",
    "line": "Seguridad acaba de esposar a Gus, un hombre con peluca y unas gafas con una cámara secreta. Grababa las cartas. Hilda, la jefa de sala, se acerca. «Directora, Seguridad quiere más cámaras y vigilar a todos los que ganan cinco manos seguidas. Pero los buenos clientes ya dicen que se sienten sospechosos. Y bajó la nota en la encuesta de satisfacción. ¿Qué hacemos?»",
    "options": [
      {
        "say": "Más cámaras, sí, pero invisibles. Vigilamos las mesas, no a las personas. El cliente no tiene que sentir nada.",
        "reply": "Hilda asiente. «Cámaras pequeñas. Lo de Gus era una cámara pequeña también… Qué ironía.»"
      },
      {
        "say": "Ganar cinco manos no es un delito. Si tratamos mal a un ganador, el NPS baja, o sea, los clientes no nos recomiendan. Seguridad solo actúa con pruebas.",
        "reply": "«El NPS bajó de cuarenta a treinta y dos este mes», dice Hilda. «Se lo voy a decir a Seguridad con tus palabras.»"
      },
      {
        "say": "Preguntamos a los clientes de alto valor qué les molesta. Una encuesta corta, de tres preguntas, esta semana.",
        "reply": "«Tres preguntas», dice Hilda. «Ni una más. Los ricos no tienen paciencia.»"
      }
    ],
    "end": "Se llevan a Gus por una puerta lateral y te guiña un ojo. Junto a la ruleta, un hombre con traje caro está sentado en el suelo.",
    "talk": [
      "¿Has hecho alguna encuesta de satisfacción? ¿Tus clientes la contestan?",
      "¿Recomiendas a tus amigos los sitios donde compras? ¿Cuáles?",
      "En tu negocio, ¿cómo equilibras la seguridad y la comodidad del cliente?",
      "¿Alguna vez te has sentido sospechoso en una tienda?",
      "¿Hacer trampas es siempre malo o a veces se entiende?"
    ],
    "words": [
      "encuesta de satisfacción",
      "NPS",
      "experiencia del cliente",
      "cliente de alto valor"
    ]
  },
  perdedor: {
    "title": "La oferta automática",
    "line": "Junto a la ruleta, Andrés está en el suelo. Lo ha perdido todo, también el dinero de la boda de su hija. Paco, el gerente, te enseña una tableta. «Directora, es cliente de nivel oro. Ha perdido ochenta mil dólares en tres horas. Mañana el sistema le envía una oferta de reactivación: quinientos dólares en free play, o sea, juego gratis. ¿La dejamos salir?»",
    "options": [
      {
        "say": "No. Paramos esa oferta ahora mismo. Una persona en crisis no es un objetivo de marketing. Esto es juego responsable.",
        "reply": "Paco borra la oferta. «Hecho. Y, sinceramente, me alegro. Ese mensaje me daba vergüenza.»"
      },
      {
        "say": "Cambiamos la regla del CRM: si alguien pierde mucho en poco tiempo, el sistema no le envía ofertas durante treinta días.",
        "reply": "«Una regla nueva», dice Paco. «Va a afectar a unos doscientos clientes al mes. Pero es lo correcto.»"
      },
      {
        "say": "En vez de free play, le enviamos información de ayuda y el teléfono de un programa de juego responsable. Sin presión.",
        "reply": "Paco mira a Andrés. «Le voy a dar el número en persona. Un mensaje automático no es suficiente para esto.»"
      }
    ],
    "end": "Un empleado acompaña a Andrés a la salida. Desde el Bulevar llegan música y gritos de una despedida de soltera.",
    "talk": [
      "¿Hay ofertas o publicidad que te parecen poco éticas? ¿Cuáles?",
      "En tu trabajo, ¿hay clientes a los que no debes venderles más?",
      "¿Las máquinas y los algoritmos deben decidir a quién enviamos ofertas?",
      "¿Alguna vez has gastado más dinero del que querías? ¿Qué pasó?",
      "¿Cómo ayudas a un amigo que tiene problemas con el dinero?"
    ],
    "words": [
      "free play",
      "reactivación",
      "juego responsable",
      "CRM"
    ]
  },
  despedida: {
    "title": "El paquete fue un desastre",
    "line": "Frente al club hay una despedida de soltera: diez amigas, globos y champán. Vane, la organizadora, te enseña el teléfono. «Directora, pagamos el paquete de despedida del casino: dos mil dólares por persona. La limusina llegó tarde, el bufé estaba cerrado y en el club nos querían echar. ¿Qué nos vas a dar?»",
    "options": [
      {
        "say": "Les devuelvo una parte del paquete en crédito promocional: quinientos dólares por persona para su próxima visita.",
        "reply": "Vane hace cuentas. «Cinco mil en total… Vale. Pero la próxima vez la limusina llega puntual.» Cinthia, la novia, grita: «¡Volvemos!»"
      },
      {
        "say": "Esta noche les damos un upgrade: la zona VIP del club con champán gratis. Y mañana hablamos del dinero.",
        "reply": "Las amigas gritan de alegría. Vane sonríe por fin. «Bueno, ahora sí parece una despedida de verdad.»"
      },
      {
        "say": "Pido perdón y voy a revisar el paquete entero. Si el servicio no cumple, no se vende. Les envío una encuesta mañana y les devuelvo el dinero de lo que falló.",
        "reply": "Vane se cruza de brazos. «Una encuesta… Bueno, pero voy a escribir mucho, eh.»"
      }
    ],
    "end": "Cinthia, la novia, te pone su banda rosa «por si acaso». Dentro de la sala de apuestas se oyen gritos: alguien se pelea por un partido.",
    "talk": [
      "¿Tu empresa vende paquetes? ¿Qué incluyen?",
      "¿Qué es mejor después de un error: devolver dinero o dar un regalo?",
      "¿Te has quejado alguna vez en un hotel o restaurante? ¿Qué te dieron?",
      "¿Cómo fue la mejor fiesta de tu vida?",
      "¿Es buena idea casarse si tienes dudas?"
    ],
    "words": [
      "paquete",
      "crédito promocional",
      "upgrade",
      "encuesta de satisfacción"
    ]
  },
  pelea: {
    "title": "Peleas en las apuestas",
    "line": "En la sala de apuestas deportivas, Toño y otro aficionado se empujan por un gol anulado. Germán, el supervisor, llega sudando. «Directora, es la tercera pelea del mes. Los sábados de fútbol la sala está llena, pero el gasto por cliente es bajo: solo cerveza barata. Y un cliente premium se fue diciendo que esto parece un bar de carretera. ¿Qué hacemos?»",
    "options": [
      {
        "say": "Cambiamos el público objetivo: menos cerveza barata y más paquetes para grupos, con mesa reservada y comida. Menos gente, pero más gasto por cliente.",
        "reply": "Germán respira. «Menos gente… Mis piernas te lo agradecen, directora.»"
      },
      {
        "say": "Creamos una zona premium separada para los clientes de alto valor. Así no pierden la experiencia y el resto puede gritar tranquilo.",
        "reply": "«Una zona premium con cristal», dice Germán. «Que griten todo lo que quieran. Desde dentro no se oye nada.»"
      },
      {
        "say": "Primero, seguridad: dos personas más los sábados. Después miramos el KPI de ingresos por cliente y decidimos.",
        "reply": "Germán asiente. «Dos personas más cuestan menos que perder a otro cliente premium. Gracias.»"
      }
    ],
    "end": "Toño te da la mitad de su boleto roto como recuerdo. Desde la capilla llegan los gritos de una mujer.",
    "talk": [
      "¿Quién es el público objetivo de tu empresa?",
      "¿Es mejor tener muchos clientes que gastan poco o pocos que gastan mucho?",
      "¿Qué KPI usarías para medir el éxito de un bar?",
      "¿Te gusta ver el fútbol en un bar lleno de gente? ¿Por qué?",
      "¿Te enfadas fácilmente cuando pierdes?"
    ],
    "words": [
      "público objetivo",
      "gasto por cliente",
      "KPI",
      "zona premium"
    ]
  },
  gritona: {
    "title": "Una reseña de una estrella",
    "line": "En la puerta de la capilla, Marta grita a su marido, que duerme borracho en un banco veinte minutos después de la boda. Elvis sale con el teléfono. «Directora, nena, problema. La señora ha escrito una reseña de una estrella: Elvis me casó con un borracho. Tiene diez mil seguidores y ya hay doscientos me gusta. ¿Qué hacemos?»",
    "options": [
      {
        "say": "Respondemos a la reseña hoy, con educación y sin discutir. Pedimos perdón por la mala experiencia y la invitamos a hablar en privado.",
        "reply": "Elvis escribe con dos dedos. «Con educación… Vale. Pero sin decir que su marido ronca como un tren.»"
      },
      {
        "say": "Le ofrecemos una noche en el hotel con desayuno incluido. Es una cortesía, no un soborno: no le pedimos cambiar la reseña.",
        "reply": "Marta deja de gritar. «¿Una habitación para mí sola?» Mira al marido. «Acepto.»"
      },
      {
        "say": "Una reseña no es una crisis. Pedimos a los clientes contentos de esta semana que escriban su opinión. Así la nota media sube.",
        "reply": "Elvis sonríe. «Esta semana casé a cuarenta parejas felices. Bueno, treinta y nueve. Voy a escribirles.»"
      }
    ],
    "end": "El marido se despierta y pregunta: «¿Ya nos hemos casado?». Arriba, en el Piso VIP, alguien enciende un habano con un billete de cien dólares.",
    "talk": [
      "¿Lees las reseñas antes de comprar o de ir a un restaurante?",
      "¿Cómo responde tu empresa a una mala reseña?",
      "¿Has escrito alguna vez una reseña muy mala? ¿Por qué?",
      "¿Te casarías en Las Vegas con una persona que conoces poco?",
      "¿Qué es más difícil: perdonar a otra persona o perdonarte a ti mismo?"
    ],
    "words": [
      "reseña",
      "reputación online",
      "cortesía",
      "experiencia del cliente"
    ]
  },
  habano: {
    "title": "Las reglas del millonario",
    "line": "Sergio Valdés, un multimillonario, enciende un habano con un billete de cien dólares. «Te voy a ser sincero, directora. Pierdo dos millones al año aquí. Mi valor de vida como cliente es enorme. Quiero fumar donde quiero, entrar con mis guardaespaldas armados y no pagar nada a mis amigas. Si me pones límites, me voy al casino de enfrente. ¿Me los vas a poner?»",
    "options": [
      {
        "say": "Sí, algunos. Las armas, no: eso es seguridad para todos. Pero te damos un salón privado donde puedes fumar y tus invitadas tienen comps.",
        "reply": "Sergio sopla humo. «Un salón privado… Está bien. Mis chicos dejan las armas en el coche.»"
      },
      {
        "say": "Tu valor de vida es grande, pero las reglas son iguales para todos. Si un cliente VIP rompe las reglas, otros clientes VIP se van. Y ellos también pierden dinero aquí.",
        "reply": "Sergio se ríe fuerte. «Me gusta. Nadie me habla así. Me quedo, solo para ver qué más dices.»"
      },
      {
        "say": "Habla con tu host y hacemos un acuerdo por escrito: qué está incluido y qué no. Sin sorpresas para ti ni para nosotros.",
        "reply": "«Un contrato», dice Sergio. «Como un abogado. Bien, mándamelo. Lo firmo con este habano.»"
      }
    ],
    "end": "Sergio te regala una moneda de oro. Al fondo del pasillo, un hombre joven grita que va a jugarse su yate en una sola mano.",
    "talk": [
      "¿Qué es el valor de vida del cliente? ¿Lo calculas en tu trabajo?",
      "¿Un cliente muy rico puede tener reglas diferentes? ¿Por qué?",
      "¿Has perdido un cliente por decir que no? ¿Fue buena decisión?",
      "¿Qué harías tú con mucho dinero?",
      "¿El dinero cambia a las personas? ¿Cómo?"
    ],
    "words": [
      "valor de vida del cliente",
      "comp",
      "host",
      "cliente VIP"
    ]
  },
  yate: {
    "title": "El hijo de un buen cliente",
    "line": "En una mesa privada, Julián, un heredero de treinta años, ha perdido todo su crédito de la noche. Ahora quiere jugarse su yate en una sola mano. La señora Benítez, jefa de crédito, te habla al oído. «Directora, su padre es uno de nuestros cinco clientes con más valor de vida. Si decimos que no al hijo, el padre puede enfadarse. Si decimos que sí y pierde, quizá no paga y perdemos a los dos. ¿Qué decides?»",
    "options": [
      {
        "say": "No damos más crédito esta noche. Julián juega con rabia, y eso no es juego responsable. Mañana llamo yo al padre, con respeto.",
        "reply": "La señora Benítez asiente. «Llamar al padre antes que él… Buena idea. Así la noticia la da la casa, no el hijo enfadado.»"
      },
      {
        "say": "Le ofrecemos otra cosa: una cena en el restaurante y una suite esta noche, cortesía de la casa. Retenemos al cliente sin aumentar el riesgo.",
        "reply": "Julián mira la carta del restaurante. «¿Langosta?» Se le pasa la rabia un poco. «Vale. Pero mañana vuelvo a jugar.»"
      },
      {
        "say": "Miramos al cliente como una familia, no como dos personas. El valor está en el padre: no ponemos en riesgo esa relación por una mano.",
        "reply": "«Exacto», dice la señora Benítez. «El padre deja aquí tres millones al año. El hijo, de momento, solo deja problemas.»"
      }
    ],
    "end": "Julián se guarda la llave del yate en el bolsillo. Desde el pasillo se oye un flash, un grito y unos guardaespaldas corriendo.",
    "talk": [
      "¿Tu empresa tiene clientes que son familias o grupos? ¿Cómo los tratas?",
      "¿Cómo dices que no a un cliente importante sin perderlo?",
      "¿Qué riesgo es aceptable en tu trabajo y qué riesgo no?",
      "¿Has hecho algo solo para impresionar a tus padres?",
      "¿Los hijos de familias ricas tienen la vida más fácil o más difícil?"
    ],
    "words": [
      "valor de vida del cliente",
      "retención",
      "riesgo de crédito",
      "juego responsable"
    ]
  },
  senador: {
    "title": "Crisis con la prensa",
    "line": "En el Piso VIP, un fotógrafo pilla al senador Robles con una mujer que no es su esposa. Los guardaespaldas del senador le quitan la cámara. Lucía, de Comunicación, te llama. «Directora, el fotógrafo va a denunciar al casino y un periodista pregunta si el senador estaba aquí. Es una crisis de reputación. ¿Qué respondemos a la prensa?»",
    "options": [
      {
        "say": "Primero, devolvemos la cámara al fotógrafo ahora mismo. Después decimos a la prensa: protegemos la privacidad de todos nuestros clientes y no hablamos de ninguno.",
        "reply": "Lucía respira. «Eso es lo que dicen todos los hoteles buenos. Corto, claro y legal. Lo escribo ya.»"
      },
      {
        "say": "No decimos nada esta noche. Preparamos un comunicado con Legal y lo enviamos mañana a primera hora, con la versión oficial.",
        "reply": "«Sin comentarios hasta mañana», dice Lucía. «El periodista se va a enfadar. Pero mejor eso que un error.»"
      },
      {
        "say": "Decimos la verdad sobre lo nuestro: un problema de seguridad con una cámara, ya resuelto. Sobre el senador, nada. No mentimos por ningún cliente.",
        "reply": "Lucía se queda callada un momento. «Valiente. Don Aurelio va a gritar. Pero creo que el público lo va a respetar.»"
      }
    ],
    "end": "El senador se va llamando a su abogado. El fotógrafo te da su tarjeta: «Si un día quieres contar algo, llámame.»",
    "talk": [
      "¿Tu empresa tiene un plan para una crisis de reputación?",
      "¿Qué es más importante: la privacidad del cliente o la verdad?",
      "¿Hablarías con un periodista sobre tu trabajo? ¿Por qué?",
      "¿Mentirías por un cliente muy importante?",
      "¿Confías en lo que dicen los políticos? ¿Por qué?"
    ],
    "words": [
      "crisis de reputación",
      "prensa",
      "comunicado",
      "privacidad del cliente"
    ]
  },
};

export default scenes;
