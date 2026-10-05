// Authoritative two-moment curriculum. Three choice difficulty bands and six
// independently authored personal prompts per interaction; no fictional continuations.
const rows = {
  "cafe-alla": {
    "title": "Un café para llevar",
    "choices": [
      [
        "Estás en el café. Quieres un café para llevar. La camarera pregunta: «¿Aquí o para llevar?».",
        "¿Qué le respondes?",
        [
          "Para llevar, por favor.",
          "Para tomar aquí, gracias.",
          "Una mesa para dos, por favor."
        ]
      ],
      [
        "Pides un café antes de tomar el autobús. La camarera pregunta si lo sirve en taza. Necesitas llevártelo.",
        "¿Cómo aclaras tu pedido?",
        [
          "Me lo llevo; ¿puede ser en un vaso con tapa?",
          "En taza está bien; me siento junto a la ventana.",
          "¿Me traes la carta? Voy a quedarme a comer."
        ]
      ],
      [
        "Pides un café para llevar y te lo sirven en taza. Quieres corregir el malentendido sin atribuir culpas.",
        "¿Qué respuesta expresa mejor tu intención?",
        [
          "Quizá no me expliqué bien: lo quería para llevar. ¿Podrían cambiármelo?",
          "Lo pedí para llevar. ¿Por qué me lo han servido en taza?",
          "No importa, lo tomo aquí; ya pediré otro para llevar."
        ]
      ]
    ],
    "personal": [
      "¿Qué tomas en una cafetería? ¿Con quién vas?",
      "¿Cuándo vas a una cafetería y qué sueles pedir?",
      "¿Tienes una cafetería favorita? Cuenta cómo la conociste y por qué vuelves.",
      "¿Qué tipo de cafeterías te gustan y qué hace que quieras volver a un lugar?",
      "¿Cómo influye en tu elección de una cafetería el equilibrio entre ambiente, precio y trato? Compáralo con tus prioridades de antes.",
      "¿Qué convierte para ti una cafetería en un lugar propio? Explora cómo se mezclan costumbre, pertenencia y consumo en tu experiencia."
    ]
  },
  "cafe-equivocado": {
    "title": "Tu pedido",
    "choices": [
      [
        "Estás en el café. Pides té y recibes café.",
        "¿Qué dices para pedir tu té?",
        [
          "Perdona, he pedido té.",
          "Gracias, este café está bien.",
          "¿Cuánto cuesta otro café?"
        ]
      ],
      [
        "En el café te traen una bebida que no pediste. Quieres que la cambien y todavía no la has probado.",
        "¿Cómo explicas el problema?",
        [
          "Disculpa, había pedido un té. ¿Me lo puedes cambiar?",
          "Creo que prefiero otra bebida, pero me tomaré esta primero.",
          "¿Podrías traerme también algo para comer?"
        ]
      ],
      [
        "La camarera afirma que anotó café, pero tú recuerdas haber pedido té. Quieres resolver la discrepancia sin discutir sobre quién tiene razón.",
        "¿Qué formulación eliges?",
        [
          "Parece que hubo una confusión. ¿Sería posible cambiarlo por té?",
          "Lo que recuerdo haber pedido es té; ¿podemos revisar primero quién tomó la comanda?",
          "Déjalo así; prefiero no pedir un cambio aunque no sea mi bebida."
        ]
      ]
    ],
    "personal": [
      "¿Te gusta el té o el café? ¿Lo tomas con leche?",
      "¿Qué bebida preparas en casa y cómo la preparas?",
      "¿Alguna vez te sirvieron algo distinto de lo que pediste? Cuenta qué hiciste.",
      "¿Cómo reaccionas cuando un servicio no cumple tus expectativas? Cuenta una experiencia.",
      "¿En qué casos reclamas y en cuáles dejas pasar un error de servicio? Explica qué influye en tu decisión.",
      "¿Cómo distingues, en tu experiencia como cliente, entre exigir un trato justo y exigir demasiado? Describe una ocasión en que ese límite no estuvo claro."
    ]
  },
  "cafe-grupo": {
    "title": "Una mesa para conversar",
    "choices": [
      [
        "Entras al café con dos amigos. Necesitan tres sillas.",
        "¿Qué pides?",
        [
          "Una mesa para tres, por favor.",
          "Una mesa para dos, por favor.",
          "Un café para llevar, por favor."
        ]
      ],
      [
        "Buscas una mesa para conversar con tus amigos, lejos del altavoz. La camarera ofrece una mesa junto a él.",
        "¿Qué le dices?",
        [
          "¿Hay alguna mesa más tranquila? Queremos conversar.",
          "Esa mesa está bien; nos gusta estar cerca de la música.",
          "Preferimos pedir todo para llevar y marcharnos."
        ]
      ],
      [
        "El café está lleno y solo queda una mesa compartida. Quieres consultar si puedes sentarte sin dar por hecho que hay sitio.",
        "¿Cómo te diriges a quienes están allí?",
        [
          "Disculpen, ¿les importaría que nos sentáramos aquí, si estas sillas están libres?",
          "¿Nos guardan estas sillas mientras pedimos? Doy por hecho que están libres.",
          "¿Cuánto les falta para irse? Nos gustaría tener la mesa para nosotros."
        ]
      ]
    ],
    "personal": [
      "¿Dónde te gusta hablar con tus amigos? ¿En casa o en un café?",
      "¿Con qué frecuencia te reúnes con tus amigos y qué hacen juntos?",
      "¿Cómo organizas una salida con amigos cuando cada uno quiere algo diferente?",
      "¿Prefieres reunirte con pocas personas o con grupos grandes? Explica qué cambia para ti.",
      "¿Cómo han cambiado tus maneras de mantener las amistades y qué papel tienen los encuentros presenciales?",
      "¿En qué medida tus espacios habituales de encuentro condicionan las conversaciones que tienes? Contrasta situaciones de tu propia vida."
    ]
  },
  "depto-un-minuto": {
    "title": "De visita en casa",
    "choices": [
      [
        "Estás de visita en un departamento. Quieres agua.",
        "¿Qué le preguntas a tu anfitrión?",
        [
          "¿Puedo tomar un vaso de agua?",
          "¿Quieres venir a mi casa?",
          "¿Dónde está tu abrigo?"
        ]
      ],
      [
        "Estás en casa de una amiga y tienes frío. Quieres cerrar la ventana, pero antes prefieres consultarlo.",
        "¿Qué dices?",
        [
          "¿Te importa si cierro un poco la ventana?",
          "Voy a cerrar todo; aquí hace demasiado frío.",
          "¿Quieres que abra más la ventana?"
        ]
      ],
      [
        "En casa de unos conocidos necesitas atender una llamada privada. Quieres pedir un espacio sin invadir su intimidad.",
        "¿Qué propuesta haces?",
        [
          "¿Hay algún lugar donde pueda atender una llamada sin molestar?",
          "Voy a usar su dormitorio un momento para hablar; espero que no les moleste.",
          "Atenderé aquí y les pediré que no hagan ruido durante la llamada."
        ]
      ]
    ],
    "personal": [
      "¿Qué lugar de tu casa te gusta más? ¿Qué hay allí?",
      "¿Cómo es tu casa y dónde pasas más tiempo?",
      "¿Qué haces para sentirte cómodo cuando llegas a una casa nueva?",
      "¿Qué necesitas para sentirte en casa y qué cosas puedes dejar de lado?",
      "¿Cómo negocias el espacio y la privacidad cuando convives con otras personas? Puedes hablar de experiencias o preferencias.",
      "¿Hasta qué punto tu idea de hogar depende de un lugar, de las personas o de tus rutinas? Explica alguna tensión entre esos elementos."
    ]
  },
  "depto-timbre": {
    "title": "En la puerta",
    "choices": [
      [
        "Llegas al departamento de una amiga. Hablas por el interfono.",
        "¿Cómo te presentas?",
        [
          "Hola, soy tu amigo. Estoy en la entrada.",
          "Hola, ya estoy dentro de tu casa.",
          "Hola, nos vemos mañana en el café."
        ]
      ],
      [
        "Llegas a una reunión, pero no sabes qué piso es. Tu amiga contesta al interfono.",
        "¿Qué información le pides?",
        [
          "¿En qué piso estás y cuál es la puerta?",
          "¿A qué hora llegué?",
          "¿Quién vive en el edificio de al lado?"
        ]
      ],
      [
        "Llegas antes de la hora acordada a casa de un conocido. Quieres reconocerlo y ofrecer una alternativa sin presionarlo.",
        "¿Qué le dices por el interfono?",
        [
          "He llegado antes de tiempo. Si aún no te viene bien, puedo dar una vuelta.",
          "Sé que llego pronto; ¿puedes dejar lo que estás haciendo y abrirme?",
          "Estoy en la puerta. Subiré ahora y espero dentro a que estés listo."
        ]
      ]
    ],
    "personal": [
      "¿Recibes amigos en tu casa? ¿Qué hacen juntos?",
      "¿Qué preparas cuando alguien viene a visitarte?",
      "¿Prefieres visitar a tus amigos o invitarlos a casa? Explica por qué.",
      "¿Qué costumbres de tus invitados te hacen sentir cómodo o incómodo?",
      "¿Cómo manejas las visitas inesperadas y qué límites te parece razonable establecer en tu casa?",
      "¿Cómo se relacionan para ti la hospitalidad y el derecho a disponer de tu tiempo? Reflexiona sobre alguna experiencia de recibir visitas."
    ]
  },
  "resto-cuenta": {
    "title": "La cuenta compartida",
    "ids": [
      "cada-uno",
      "iguales",
      "otra"
    ],
    "choices": [
      [
        "Comes con amigos. Quieres pagar solo tu comida.",
        "¿Qué propones?",
        [
          "Cada uno paga lo suyo.",
          "Pagamos todos lo mismo.",
          "Yo invito a todos."
        ]
      ],
      [
        "En una cena compartida has consumido mucho menos que los demás. Quieres proponer un reparto por consumo sin reproches.",
        "¿Qué dices?",
        [
          "¿Les parece que cada uno pague lo que pidió?",
          "Dividamos entre todos, aunque pedimos cosas distintas.",
          "Hoy pago yo la cuenta completa."
        ]
      ],
      [
        "Al llegar la cuenta proponen dividirla por igual. Prefieres pagar según el consumo, pero no quieres presentar tu preferencia como una obligación.",
        "¿Cómo la planteas?",
        [
          "A mí me vendría mejor pagar lo que he consumido. ¿Cómo lo ven ustedes?",
          "Me parece que debemos pagar según lo consumido; es la única opción razonable.",
          "Podemos dividir por igual; ya compensaremos la diferencia en otra ocasión."
        ]
      ]
    ],
    "personal": [
      "¿Qué comida pides en un restaurante? ¿Qué bebes?",
      "¿Con quién comes fuera y qué restaurantes te gustan?",
      "¿Cómo suelen pagar la cuenta tú y tus amigos? Explica qué prefieres.",
      "¿Qué te parece más justo al repartir los gastos de una salida? ¿Depende del grupo?",
      "¿Cómo influyen las diferencias de ingresos en los planes que haces con otras personas?",
      "¿Cómo negocias la generosidad, la reciprocidad y los límites económicos en tus relaciones? Apóyate en situaciones que conozcas."
    ]
  },
  "resto-plato": {
    "title": "Consultar un ingrediente",
    "choices": [
      [
        "En el restaurante quieres una sopa sin carne.",
        "¿Qué preguntas antes de pedir?",
        [
          "¿Esta sopa tiene carne?",
          "¿Esta sopa está caliente?",
          "¿Cuánto cuesta el pan?"
        ]
      ],
      [
        "No comes carne y la descripción de un plato no aclara los ingredientes.",
        "¿Qué pregunta te permite decidir si lo pides?",
        [
          "¿Lleva carne o caldo de carne?",
          "¿Es el plato más popular de la carta?",
          "¿Lo sirven en un plato grande?"
        ]
      ],
      [
        "El camarero describe un plato como «ligero». Quieres saber si encaja con tu alimentación, sin asumir que ligero significa vegetariano.",
        "¿Cómo precisas la consulta?",
        [
          "Cuando dice ligero, ¿se refiere a la preparación? ¿Qué ingredientes lleva exactamente?",
          "¿Es ligero porque lleva pocas calorías? Con eso me basta para decidir.",
          "¿Me confirma que es vegetariano? He entendido eso al oír que es ligero."
        ]
      ]
    ],
    "personal": [
      "¿Qué comida te gusta mucho? ¿Qué comida no te gusta?",
      "¿Qué sueles comer durante la semana y qué comes en ocasiones especiales?",
      "¿Has cambiado alguna costumbre alimentaria? Cuenta qué cambió y por qué.",
      "¿Qué pesa más cuando eliges qué comer: sabor, precio, salud o comodidad? Explica cómo decides.",
      "¿Cómo concilias tus preferencias alimentarias con las costumbres de las personas con quienes comes?",
      "¿Qué contradicciones encuentras entre tus ideales sobre la alimentación y tus decisiones cotidianas? Explica cómo convives con ellas."
    ]
  },
  "resto-al-lado": {
    "title": "Una mesa más tranquila",
    "choices": [
      [
        "En el restaurante hay mucho ruido. Quieres otra mesa.",
        "¿Qué pides al camarero?",
        [
          "¿Podemos cambiar de mesa?",
          "¿Podemos pedir más comida?",
          "¿Podemos pagar con tarjeta?"
        ]
      ],
      [
        "La mesa junto al altavoz te impide conversar. Quieres pedir un cambio sin culpar a otros clientes.",
        "¿Cómo lo pides?",
        [
          "¿Podríamos sentarnos más lejos del altavoz? Nos cuesta oírnos.",
          "Los otros clientes deben terminar su conversación.",
          "¿Pueden subir un poco más la música?"
        ]
      ],
      [
        "El restaurante está casi lleno. Necesitas un sitio más tranquilo, pero reconoces que quizá no puedan cambiarte de mesa.",
        "¿Qué petición haces?",
        [
          "Si queda alguna mesa más tranquila, agradeceríamos cambiarnos; entendemos que quizá no sea posible.",
          "Necesitamos otra mesa; avísenos cuando la tengan preparada.",
          "Nos quedamos aquí y les pedimos que bajen la música para todo el local."
        ]
      ]
    ],
    "personal": [
      "¿Te gusta comer en lugares tranquilos o con música? ¿Con quién vas?",
      "¿Cómo es un restaurante que te gusta? Describe el lugar.",
      "¿Qué experiencia en un restaurante recuerdas especialmente y por qué?",
      "¿Qué hace que una comida fuera de casa valga lo que cuesta para ti?",
      "¿En qué medida el ambiente modifica tu percepción de una comida? Compara dos experiencias.",
      "¿Cómo se construye para ti una experiencia gastronómica memorable más allá de la comida? Examina el papel de tus expectativas y de la compañía."
    ]
  },
  "pablo": {
    "choices": [
      [
        "En la plaza, Pablo te saluda y te pregunta tu nombre.",
        "¿Cómo respondes?",
        [
          "Hola, me llamo Alex. ¿Y tú?",
          "Hasta mañana, Pablo.",
          "Sí, la plaza está cerca."
        ]
      ],
      [
        "Pablo te cuenta que lleva mucho tiempo esperando a un amigo. Quieres mostrar comprensión.",
        "¿Qué le dices?",
        [
          "Qué fastidio esperar sin noticias. ¿Te ha respondido?",
          "Entonces seguro que tu amigo ya está aquí.",
          "Mejor hablemos de otra cosa; no me interesa."
        ]
      ],
      [
        "Pablo interpreta el retraso de su amigo como falta de interés. Quieres reconocer su malestar sin confirmar una intención que desconoces.",
        "¿Qué respuesta eliges?",
        [
          "Entiendo que te moleste, aunque no sabemos todavía por qué se ha retrasado.",
          "Si no te ha avisado, yo diría que no está dando prioridad a este encuentro.",
          "Yo no le daría importancia; esperaría sin darle más vueltas."
        ]
      ]
    ],
    "personal": [
      "¿A qué hora ves a tus amigos? ¿Llegas temprano o tarde?",
      "¿Qué haces cuando tienes que esperar a alguien?",
      "¿Qué importancia tiene la puntualidad para ti? Cuenta una experiencia.",
      "¿Cuánto estás dispuesto a esperar a alguien y de qué depende tu límite?",
      "¿Cómo interpretas la impuntualidad según la relación y el contexto? Explica si has cambiado de opinión.",
      "¿Cómo distingues entre una expectativa personal y una obligación compartida cuando acuerdas horarios con otras personas?"
    ]
  },
  "ines": {
    "choices": [
      [
        "Inés te dice: «Soy nueva en el barrio». Quieres saludarla.",
        "¿Qué le dices?",
        [
          "¡Bienvenida! Me llamo Alex.",
          "¡Buen viaje de vuelta!",
          "La cuenta, por favor."
        ]
      ],
      [
        "Inés acaba de mudarse y te pregunta dónde puede conocer gente. Conoces una actividad abierta del barrio.",
        "¿Qué le recomiendas?",
        [
          "Hay un taller en el centro cultural; puedes ir aunque no conozcas a nadie.",
          "Lo mejor es esperar en casa hasta conocer vecinos.",
          "Te recomiendo un hotel para pasar esta noche."
        ]
      ],
      [
        "Inés quiere conocer gente, pero no disfruta de reuniones multitudinarias. Quieres sugerir algo sin imponerle tu forma de socializar.",
        "¿Qué propuesta encaja?",
        [
          "Quizá un grupo pequeño de alguna actividad que te guste te resulte más cómodo.",
          "Podrías venir a una fiesta conmigo; aunque sea multitudinaria, te acostumbrarás.",
          "Quizá lo mejor sea hablar solo con tus compañeros de trabajo por ahora."
        ]
      ]
    ],
    "personal": [
      "¿Cómo es tu barrio? ¿Qué lugares te gustan?",
      "¿Conoces a tus vecinos? ¿Dónde hablas con ellos?",
      "¿Te has mudado alguna vez? Cuenta cómo fue adaptarte, o cómo imaginas una mudanza.",
      "¿Qué te ayuda a crear una vida social cuando llegas a un lugar nuevo?",
      "¿Qué diferencias encuentras entre tener contactos y sentir que perteneces a una comunidad? Relaciónalo contigo.",
      "¿Cómo negocias el deseo de integrarte con el de conservar tus propias costumbres cuando cambias de entorno?"
    ]
  },
  "pareja": {
    "choices": [
      [
        "Ana y Diego te invitan a salir. Tú quieres comer primero.",
        "¿Qué propones?",
        [
          "¿Comemos algo primero?",
          "¿Vamos a bailar sin cenar?",
          "¿Volvemos a casa ahora?"
        ]
      ],
      [
        "Ana propone bailar y Diego cenar. Tú quieres hacer ambas cosas, empezando por cenar.",
        "¿Qué plan eliges proponer?",
        [
          "Podemos cenar y después ir a bailar.",
          "Vamos directamente a bailar y dejamos la cena.",
          "Mejor cenamos y terminamos la noche ahí."
        ]
      ],
      [
        "Ana y Diego quieren planes distintos y te piden que decidas por todos. Prefieres facilitar un acuerdo sin asumir ese papel.",
        "¿Cómo respondes?",
        [
          "Podemos ver qué prioriza cada uno y buscar un punto de encuentro.",
          "Yo elegiría cenar; si les parece, tomamos mi preferencia como decisión final.",
          "Podemos alternar: esta vez decide Ana y en la próxima salida decide Diego."
        ]
      ]
    ],
    "personal": [
      "¿Te gusta bailar? ¿Qué música te gusta?",
      "¿Qué haces normalmente los fines de semana?",
      "¿Cómo eliges un plan cuando sales con alguien que tiene gustos diferentes?",
      "¿Prefieres ceder, negociar o hacer planes separados cuando no hay acuerdo? Explica con ejemplos.",
      "¿Cómo distingues en tus relaciones entre una concesión saludable y renunciar demasiado a tus preferencias?",
      "¿Qué lugar ocupa el desacuerdo en tus relaciones cercanas? Explora cuándo enriquece los planes compartidos y cuándo los desgasta."
    ]
  },
  "ramiro": {
    "choices": [
      [
        "Ramiro te pregunta cómo llegar a la estación. Tú sabes que está a la derecha.",
        "¿Qué le dices?",
        [
          "La estación está a la derecha.",
          "La estación está a la izquierda.",
          "La estación está cerrada."
        ]
      ],
      [
        "Ramiro te pide ayuda con el autobús nocturno. No sabes el horario y quieres comprobarlo.",
        "¿Qué propones?",
        [
          "Podemos consultar el horario en la parada.",
          "Seguro que pasa cada cinco minutos; no hace falta mirarlo.",
          "El último autobús ya salió, aunque no lo he comprobado."
        ]
      ],
      [
        "Ramiro te pregunta si queda transporte público. Tienes información de ayer, pero no sabes si hoy hay cambios.",
        "¿Cómo lo orientas sin dar certeza falsa?",
        [
          "Ayer había servicio nocturno; convendría comprobar si hoy mantiene el horario.",
          "Hasta donde recuerdo, puedes contar con el servicio nocturno de ayer.",
          "Mejor descartemos el autobús; no he visto el horario actualizado."
        ]
      ]
    ],
    "personal": [
      "¿Cómo vas al trabajo o a clase? ¿Caminas o tomas un autobús?",
      "¿Cómo vuelves a casa cuando sales por la noche?",
      "¿Alguna vez te perdiste o perdiste un transporte? Cuenta qué hiciste.",
      "¿Cómo decides entre comodidad, costo y seguridad al moverte de noche?",
      "¿Qué limitaciones de movilidad afectan más a tu vida cotidiana y cómo te adaptas a ellas?",
      "¿De qué formas tu autonomía depende del transporte disponible donde vives? Contrasta tu experiencia con la vida que preferirías llevar."
    ]
  },
  "marta": {
    "choices": [
      [
        "Marta te dice: «¡Hoy es mi cumpleaños!».",
        "¿Qué le respondes?",
        [
          "¡Feliz cumpleaños!",
          "¡Buen viaje!",
          "¡Que te mejores!"
        ]
      ],
      [
        "Marta te cuenta con alegría que acaba de jubilarse. Quieres felicitarla y seguir conversando.",
        "¿Qué dices?",
        [
          "¡Enhorabuena! ¿Tienes algún plan para esta nueva etapa?",
          "Lo siento mucho; seguro que estás muy triste.",
          "Entonces ya no tienes nada interesante que hacer."
        ]
      ],
      [
        "Marta celebra su jubilación, pero también expresa cierta incertidumbre. Quieres responder a ambos sentimientos.",
        "¿Qué respuesta eliges?",
        [
          "Parece una etapa ilusionante y a la vez un cambio grande. ¿Cómo la estás viviendo?",
          "¡Por fin libre! Seguro que la incertidumbre se te pasa en cuanto organices un viaje.",
          "Debe de ser difícil dejar tantos años atrás; supongo que predomina la tristeza."
        ]
      ]
    ],
    "personal": [
      "¿Cómo celebras tu cumpleaños? ¿Con quién estás?",
      "¿Qué fechas celebras con tu familia o tus amigos?",
      "¿Qué logro personal te dio mucha alegría y cómo lo celebraste?",
      "¿Qué cambio de etapa ha sido importante para ti y cómo lo viviste?",
      "¿Cómo han cambiado tus ideas sobre el éxito y las cosas que merecen celebrarse?",
      "¿Qué relación encuentras entre tus logros visibles y tu sensación íntima de haber avanzado? Explica alguna discrepancia."
    ]
  },
  "kenji": {
    "choices": [
      [
        "Kenji te dice: «No entiendo. ¿Puedes repetir?».",
        "¿Qué haces para ayudarlo?",
        [
          "Repito despacio.",
          "Hablo más rápido.",
          "Cambio de tema."
        ]
      ],
      [
        "Kenji te pide una recomendación para comer y dice que prefiere un sitio tranquilo. Conoces uno cerca.",
        "¿Qué le recomiendas?",
        [
          "Hay un restaurante pequeño en la esquina; suele ser tranquilo.",
          "El bar de conciertos tiene música muy alta.",
          "La discoteca abre tarde y está siempre llena."
        ]
      ],
      [
        "Kenji busca un lugar «auténtico». Quieres aclarar qué busca antes de recomendarle algo según tus propios criterios.",
        "¿Qué le preguntas?",
        [
          "¿Qué te gustaría encontrar: comida local, trato cercano o un lugar poco concurrido?",
          "Te llevaré al restaurante de siempre; para mí eso es lo auténtico.",
          "Busquemos un sitio sin visitantes; así evitamos cualquier duda sobre su autenticidad."
        ]
      ]
    ],
    "personal": [
      "¿Qué lugares de tu ciudad te gustan? ¿Qué puedes hacer allí?",
      "¿Qué te gusta visitar cuando viajas a otra ciudad?",
      "¿Qué lugar recomendarías a alguien que visita tu ciudad por primera vez y por qué?",
      "¿Qué buscas cuando viajas: conocer gente, descansar, visitar lugares o probar cosas nuevas?",
      "¿Cómo influyen las recomendaciones y las redes sociales en tu forma de conocer un destino?",
      "¿Qué significa para ti tener una experiencia auténtica al viajar y qué contradicciones encuentras en esa búsqueda?"
    ]
  },
  "sofia": {
    "choices": [
      [
        "Sofía te invita a escuchar música. Tú quieres ir.",
        "¿Cómo aceptas?",
        [
          "Sí, gracias. Me gustaría ir.",
          "No, gracias. Hoy no puedo.",
          "Tal vez otro día, hoy no."
        ]
      ],
      [
        "Sofía te invita a un concierto, pero mañana madrugas. Quieres rechazar la invitación con amabilidad.",
        "¿Qué le dices?",
        [
          "Gracias por invitarme. Hoy no puedo, pero me gustaría otro día.",
          "Sí, claro; me quedo hasta el final aunque no pueda.",
          "No me vuelvas a invitar a ningún concierto."
        ]
      ],
      [
        "Sofía te invita a un plan que te interesa, pero todavía no puedes confirmar. Quieres evitar que una respuesta amable se interprete como compromiso.",
        "¿Qué respuesta eliges?",
        [
          "Me interesa, pero no puedo confirmarlo aún. Te aviso esta tarde y no cuentes conmigo hasta entonces.",
          "En principio cuenta conmigo; si surge algo, ya te avisaré.",
          "Suena bien, a ver si puedo acercarme. Ve guardándome un sitio."
        ]
      ]
    ],
    "personal": [
      "¿Qué música escuchas? ¿Dónde la escuchas?",
      "¿Te gustan los planes de último momento? ¿Qué sueles hacer?",
      "¿Cuándo aceptaste una invitación inesperada y cómo te fue?",
      "¿Te resulta fácil empezar una conversación con alguien que no conoces? ¿En qué situaciones?",
      "¿Cómo decides cuándo abrirte a una experiencia imprevista y cuándo proteger tu tiempo?",
      "¿Qué papel han tenido los encuentros casuales en tu vida y cómo valoras ahora oportunidades que antes habrías rechazado?"
    ]
  },
  "fuerte": {
    "choices": [
      [
        "Estás en el bar y no oyes a tu amiga. La música está muy alta.",
        "¿Qué le propones?",
        [
          "¿Vamos a una mesa más tranquila?",
          "¿Nos sentamos junto al altavoz?",
          "¿Pedimos la música más alta?"
        ]
      ],
      [
        "Una persona a tu lado habla muy fuerte. Quieres pedirle que baje la voz sin insultarla.",
        "¿Qué dices?",
        [
          "Disculpa, ¿podrías hablar un poco más bajo? Nos cuesta escucharnos.",
          "Deja de hablar; este bar es solo para nosotros.",
          "¿Puedes hablar más fuerte para que te oigamos todos?"
        ]
      ],
      [
        "En un bar alguien habla a gritos por teléfono. Quieres hacer una petición concreta y proporcional.",
        "¿Cómo te diriges a esa persona?",
        [
          "Perdona, ¿podrías bajar un poco la voz mientras hablas? Aquí se oye bastante.",
          "¿Te importaría terminar la llamada? Preferimos que no se use el teléfono aquí.",
          "¿Podrías salir a hablar? Creo que es lo mínimo que deberías hacer."
        ]
      ]
    ],
    "personal": [
      "¿Te gustan los bares con música? ¿Qué música prefieres?",
      "¿Dónde te gusta salir por la noche y con quién?",
      "¿Qué hace que para ti un bar tenga buen ambiente?",
      "¿Cómo afecta el ruido a tus ganas de quedarte en un lugar? Cuenta alguna experiencia.",
      "¿Qué haces cuando tu idea de un ambiente agradable choca con la de las personas que te acompañan?",
      "¿Cómo delimitas el derecho a disfrutar de un espacio compartido y el derecho a no ser molestado? Relaciónalo con experiencias tuyas."
    ]
  },
  "quedarse": {
    "choices": [
      [
        "Estás en el bar. Tienes sueño y quieres irte.",
        "¿Qué les dices a tus amigos?",
        [
          "Me voy a casa. Tengo sueño.",
          "Me quedo una hora más.",
          "Vamos a pedir otra bebida."
        ]
      ],
      [
        "Tus amigos insisten en que te quedes, pero mañana tienes que levantarte temprano.",
        "¿Cómo mantienes tu decisión con amabilidad?",
        [
          "Me lo he pasado bien, pero necesito irme. Nos vemos otro día.",
          "Bueno, me quedo hasta el cierre aunque no quiera.",
          "Quizá me vaya, aunque en realidad ya lo he decidido."
        ]
      ],
      [
        "El grupo interpreta tu salida como falta de interés. Quieres reafirmar tu límite sin entrar en una justificación interminable.",
        "¿Qué respuesta eliges?",
        [
          "He disfrutado de la noche; irme ahora responde a lo que necesito, no a falta de ganas de verlos.",
          "Tengo que irme, aunque puedo quedarme si de verdad les parece importante.",
          "Me voy porque mañana tengo muchas cosas; puedo explicarles todo mi horario si hace falta."
        ]
      ]
    ],
    "personal": [
      "¿A qué hora te acuestas? ¿Te gusta levantarte temprano?",
      "¿Qué haces para descansar después de un día de trabajo o estudio?",
      "¿Cómo organizas tu descanso cuando tienes muchos planes?",
      "¿Te cuesta decir que no cuando tus amigos insisten? Explica cómo lo manejas.",
      "¿Cómo reconoces tus límites de energía y cómo los comunicas sin sentir que debes justificarlos?",
      "¿Cómo ha cambiado tu relación con el tiempo libre y con la presión de aprovecharlo? Describe qué significa para ti descansar de verdad."
    ]
  },
  "billetera": {
    "choices": [
      [
        "Estás en el bar. No tienes efectivo, pero tienes tarjeta.",
        "¿Qué preguntas para pagar?",
        [
          "¿Puedo pagar con tarjeta?",
          "¿Puedo reservar para mañana?",
          "¿Puedo cambiar de mesa?"
        ]
      ],
      [
        "Un amigo olvidó la billetera. Puedes pagar su bebida si te devuelve el dinero mañana.",
        "¿Qué le propones?",
        [
          "Puedo pagar tu parte y mañana me la devuelves.",
          "Te invito; no hace falta que me lo devuelvas.",
          "No puedo ayudarte a pagar hoy."
        ]
      ],
      [
        "Un amigo te pide dinero otra vez. Esta vez no quieres prestarle, pero sí ayudarlo a buscar otra forma de pago.",
        "¿Qué respuesta expresa ese límite?",
        [
          "Hoy no voy a prestarte dinero; si quieres, vemos si puedes pagar con el móvil.",
          "Te lo presto esta vez, pero tendremos que hablar de cómo evitar que se repita.",
          "No puedo prestarte ahora; pregunta a otra persona del grupo."
        ]
      ]
    ],
    "personal": [
      "¿Pagas con efectivo o con tarjeta? ¿Qué prefieres?",
      "¿Qué llevas siempre cuando sales de casa?",
      "¿Alguna vez olvidaste algo importante al salir? Cuenta cómo lo resolviste.",
      "¿Qué acuerdos te parecen necesarios cuando prestas dinero a alguien cercano?",
      "¿Cómo influyen el dinero y la reciprocidad en tus amistades? Explica qué límites prefieres.",
      "¿Cómo distingues entre ayudar a alguien y asumir una responsabilidad que no te corresponde? Puedes partir de una experiencia cotidiana."
    ]
  },
  "fila": {
    "choices": [
      [
        "Esperas en la barra. Alguien pregunta si estás en la fila.",
        "¿Qué respondes?",
        [
          "Sí, estoy esperando mi turno.",
          "No, ya he pedido.",
          "No, estoy buscando la salida."
        ]
      ],
      [
        "Llevas esperando para pedir y alguien se pone delante de ti. Quieres señalarlo con calma.",
        "¿Qué le dices?",
        [
          "Disculpa, yo estaba esperando antes. La fila empieza allí.",
          "Adelante, no estoy esperando para pedir.",
          "Como te has puesto delante, voy a empujarte."
        ]
      ],
      [
        "Alguien se adelanta en una fila poco clara. Quieres defender tu turno sin atribuir mala fe.",
        "¿Qué formulación eliges?",
        [
          "Quizá no se veía la fila; yo estaba esperando antes.",
          "Disculpa, te has saltado la fila y deberías haberte fijado antes.",
          "Puedes pasar esta vez; procuraré estar más atento en adelante."
        ]
      ]
    ],
    "personal": [
      "¿Dónde esperas mucho: en tiendas, en bancos o en estaciones?",
      "¿Qué haces mientras esperas en una fila?",
      "¿Qué situaciones cotidianas ponen a prueba tu paciencia y por qué?",
      "¿Cómo reaccionas cuando alguien no respeta una norma de convivencia?",
      "¿Cuándo te parece adecuado intervenir en un conflicto cotidiano y cuándo prefieres no hacerlo?",
      "¿Qué pesa más en tu reacción ante una falta de respeto: el daño, la intención o la repetición? Contrasta casos de tu experiencia."
    ]
  },
  "caro": {
    "choices": [
      [
        "Tus amigos proponen otro bar. Es muy caro para ti.",
        "¿Qué propones?",
        [
          "¿Vamos a un lugar más barato?",
          "¿Pedimos la bebida más cara?",
          "Yo pago todo esta noche."
        ]
      ],
      [
        "El grupo quiere ir a un bar que supera tu presupuesto. Quieres ofrecer una alternativa sin criticar sus gustos.",
        "¿Qué dices?",
        [
          "Se me sale del presupuesto. ¿Les parece buscar algo más económico?",
          "Ese lugar es para gente que no sabe gastar.",
          "Está perfecto para mí; pidan lo que quieran."
        ]
      ],
      [
        "Te proponen un plan caro y no quieres revelar detalles de tus finanzas. Quieres expresar tu límite con claridad.",
        "¿Qué respuesta eliges?",
        [
          "Esta vez prefiero gastar menos. Puedo proponer otro lugar si les viene bien.",
          "No sé si podré; quizá el precio no sea tan alto como parece.",
          "Ahora mismo mis gastos no me lo permiten; les cuento en detalle para que lo entiendan."
        ]
      ]
    ],
    "personal": [
      "¿Qué haces para divertirte sin gastar mucho dinero?",
      "¿En qué te gusta gastar cuando sales con amigos?",
      "¿Qué plan económico te salió especialmente bien? Cuenta cómo fue.",
      "¿Cómo decides cuánto gastar en ocio y qué gastos te parecen realmente valiosos?",
      "¿Cómo manejas las diferencias de presupuesto al organizar planes con otras personas?",
      "¿Cómo ha cambiado tu idea de una vida agradable en relación con el dinero que cuesta? Explora algún deseo que hayas revisado."
    ]
  },
  "cancelo": {
    "choices": [
      [
        "Estás en el bar. Un amigo dice que hoy no puede venir. Quieres verlo mañana.",
        "¿Qué le escribes?",
        [
          "¿Nos vemos mañana?",
          "Te espero aquí hoy.",
          "Nos vemos el año pasado."
        ]
      ],
      [
        "Un amigo cancela a última hora por segunda vez. Quieres explicar cómo te afecta y proponer que avise antes.",
        "¿Qué mensaje envías?",
        [
          "Me complica que canceles tan tarde. ¿Puedes avisarme antes la próxima vez?",
          "No pasa nada nunca; cancela cuando quieras.",
          "Ya sé que lo haces para arruinarme el día."
        ]
      ],
      [
        "Un amigo suele cancelar planes. No conoces sus motivos, pero quieres hablar del efecto que tiene en ti sin acusarlo.",
        "¿Cómo abres la conversación?",
        [
          "Cuando cancelamos a última hora me cuesta reorganizarme. Quisiera que acordáramos cómo avisarnos.",
          "Me gustaría saber primero tus motivos para decidir si tengo derecho a molestarme.",
          "Últimamente siento que mis planes te importan menos que los tuyos."
        ]
      ]
    ],
    "personal": [
      "¿Haces planes con tus amigos por teléfono o por mensajes?",
      "¿Qué haces cuando un plan se cancela?",
      "¿Recuerdas un cambio de planes que terminó siendo positivo? Cuéntalo.",
      "¿Qué necesitas de tus amigos para sentir que puedes contar con ellos?",
      "¿Cómo comunicas una decepción sin convertirla en un juicio sobre la otra persona?",
      "¿Cómo decides cuándo aceptar una limitación ajena y cuándo revisar lo que esperas de una relación?"
    ]
  },
  "invitacion": {
    "choices": [
      [
        "Sergio llega al bar y te saluda. Hay una silla libre a tu lado.",
        "¿Cómo lo invitas a sentarse?",
        [
          "Hola, siéntate aquí.",
          "Adiós, hasta mañana.",
          "La mesa está completa."
        ]
      ],
      [
        "Sergio llega muy arreglado y dice que se siente fuera de lugar. Quieres hacerlo sentir bienvenido.",
        "¿Qué le dices?",
        [
          "No te preocupes por la ropa; nos alegra que hayas venido.",
          "Sí, todos van a fijarse en tu ropa toda la noche.",
          "Mejor vuelve a casa y solo regresa si te cambias."
        ]
      ],
      [
        "Sergio bromea sobre estar demasiado arreglado. Quieres quitar importancia a la diferencia sin invalidar su incomodidad.",
        "¿Cómo respondes?",
        [
          "Entiendo la sensación, pero aquí no hay un código de ropa; me alegra verte.",
          "No pienses más en eso; no tiene sentido sentirse incómodo por la ropa.",
          "Podemos ir a otro lugar donde tu ropa encaje mejor con la de los demás."
        ]
      ]
    ],
    "personal": [
      "¿Qué ropa te gusta para salir? ¿Qué colores usas?",
      "¿Cómo eliges la ropa para una fiesta?",
      "¿Alguna vez te vestiste de manera diferente al resto? Cuenta cómo te sentiste.",
      "¿Cuánto influye tu ropa en cómo te sientes cuando conoces gente nueva?",
      "¿Cómo equilibras tu estilo personal con las expectativas de distintos ambientes?",
      "¿En qué situaciones sientes que la apariencia te permite expresarte y en cuáles te obliga a representar un papel?"
    ]
  },
  "auto-aeropuerto": {
    "title": "El auto no arranca",
    "choices": [
      [
        "Tu auto no arranca. Necesitas ir al aeropuerto ahora.",
        "¿Qué puedes pedir para viajar?",
        [
          "Un taxi al aeropuerto.",
          "Una mesa en el restaurante.",
          "Una entrada para el museo."
        ]
      ],
      [
        "Tu auto no arranca y tienes que ir al aeropuerto. Hay un taxi disponible; el taller abre mañana.",
        "¿Qué eliges para llegar hoy?",
        [
          "Pido el taxi y dejo la revisión del auto para mañana.",
          "Espero hasta mañana a que abra el taller.",
          "Reservo una revisión para la semana que viene y no busco transporte."
        ]
      ],
      [
        "El auto no arranca antes de tu vuelo. Una persona ofrece repararlo, pero no puede estimar cuánto tardará. Quieres priorizar llegar al aeropuerto.",
        "¿Qué decisión comunicas?",
        [
          "Agradezco la ayuda, pero voy a buscar otro transporte; la reparación puede esperar.",
          "Esperaré unos minutos más; prefiero aprovechar la ayuda aunque no tengamos una estimación.",
          "Intentemos repararlo primero y decidamos después cómo llegar al aeropuerto."
        ]
      ]
    ],
    "personal": [
      "¿Qué transporte usas para viajar? ¿Te gusta viajar en auto?",
      "¿Qué preparas antes de hacer un viaje?",
      "¿Tuviste algún problema de transporte en un viaje? Cuenta cómo lo resolviste.",
      "¿Cómo reaccionas cuando un imprevisto pone en riesgo un plan importante?",
      "¿Cómo decides qué parte de un plan conservar y cuál abandonar cuando cambian las circunstancias?",
      "¿Qué has aprendido sobre tu forma de decidir bajo presión? Contrasta una reacción que repetirías con otra que hoy revisarías."
    ]
  },
  "auto-gasolina": {
    "title": "Buscar una gasolinera",
    "choices": [
      [
        "Tu auto necesita gasolina. Una persona del barrio se acerca.",
        "¿Qué le preguntas?",
        [
          "¿Dónde hay una gasolinera?",
          "¿Dónde puedo comprar pan?",
          "¿Dónde está el museo?"
        ]
      ],
      [
        "Te queda poca gasolina y no conoces el barrio. Quieres saber si la gasolinera cercana está abierta.",
        "¿Qué preguntas?",
        [
          "¿Sabe si la gasolinera de aquí sigue abierta?",
          "¿Cuántas gasolineras había antes en el barrio?",
          "¿De qué color es el cartel de la gasolinera?"
        ]
      ],
      [
        "Alguien te indica una gasolinera, pero aclara que hace tiempo que no pasa por allí. Quieres confirmar la información antes de desviarte.",
        "¿Qué respuesta eliges?",
        [
          "Gracias. Voy a comprobar si sigue abierta antes de ir.",
          "Gracias, iré directamente; si antes abría a esta hora, probablemente siga igual.",
          "Mejor busco otra desde cero, porque esa información ya no es reciente."
        ]
      ]
    ],
    "personal": [
      "¿Te gusta caminar o ir en auto? ¿Adónde vas normalmente?",
      "¿Usas mapas en el teléfono cuando no conoces un lugar?",
      "¿Cómo te orientas en una ciudad nueva? Cuenta algún ejemplo.",
      "¿Prefieres pedir indicaciones o buscar por tu cuenta? Explica de qué depende.",
      "¿Cómo valoras la confianza que depositas en indicaciones de desconocidos y en herramientas digitales?",
      "¿En qué situaciones la tecnología aumenta tu autonomía y en cuáles sientes que te vuelve dependiente? Parte de cómo te orientas o te desplazas."
    ]
  },
  "foto": {
    "title": "La foto de la playa",
    "choices": [
      [
        "Miras una foto antigua en el museo. Quieres saber el año.",
        "¿Qué preguntas a la guía?",
        [
          "¿De qué año es esta foto?",
          "¿Cuánto cuesta la entrada?",
          "¿Dónde está la salida?"
        ]
      ],
      [
        "Ves una fotografía de una playa que ha cambiado mucho. Quieres comparar ese lugar con su aspecto actual.",
        "¿Qué le preguntas a la guía?",
        [
          "¿Hay alguna imagen actual de esta misma playa?",
          "¿Puedo comprar una foto de otra ciudad?",
          "¿A qué hora cierra la tienda del museo?"
        ]
      ],
      [
        "La guía dice que una foto «retrata la vida de toda una época». Quieres matizar esa afirmación preguntando por su contexto.",
        "¿Qué pregunta eliges?",
        [
          "¿Sabemos quién la tomó y qué parte de esa vida quedó fuera del encuadre?",
          "¿La ropa de estas personas refleja lo que llevaba todo el mundo en ese momento?",
          "¿Podría describirnos la vida de la época a partir de lo que aparece en la imagen?"
        ]
      ]
    ],
    "personal": [
      "¿Te gusta hacer fotos? ¿Qué fotografías?",
      "¿Guardas fotos de tus vacaciones? ¿Dónde las guardas?",
      "¿Qué foto tuya te trae un recuerdo especial y por qué?",
      "¿Prefieres fotografiar mucho o vivir el momento sin sacar fotos? Explica cómo decides.",
      "¿Cómo cambia tu recuerdo de una experiencia al volver a mirar sus fotografías?",
      "¿Qué relación hay entre lo que recuerdas y las imágenes que has elegido conservar? Explora también lo que queda fuera de tu archivo personal."
    ]
  },
  "telefono": {
    "title": "El teléfono público",
    "choices": [
      [
        "Ves un teléfono antiguo en el museo. Quieres saber cómo funciona.",
        "¿Qué preguntas?",
        [
          "¿Cómo funciona este teléfono?",
          "¿Dónde está mi teléfono?",
          "¿Cuánto cuesta un café?"
        ]
      ],
      [
        "Una guía explica que ese teléfono funcionaba con monedas. Quieres comprobar si has entendido.",
        "¿Qué le dices?",
        [
          "Entonces había que introducir monedas antes de llamar, ¿verdad?",
          "Entonces se usaba una aplicación para pagar, ¿no?",
          "Entonces todas las llamadas eran gratuitas, ¿cierto?"
        ]
      ],
      [
        "La guía afirma que antes «se hablaba más». Quieres distinguir duración, frecuencia y calidad de las conversaciones.",
        "¿Cómo pides precisión?",
        [
          "¿Se refiere a que se hablaba más tiempo o a que las conversaciones tenían otro carácter?",
          "¿Cree que aquellas conversaciones eran mejores porque había menos distracciones?",
          "¿Había más teléfonos públicos por habitante que móviles en la actualidad?"
        ]
      ]
    ],
    "personal": [
      "¿Con quién hablas por teléfono? ¿Hablas todos los días?",
      "¿Prefieres llamar o enviar mensajes? ¿Cuándo usas cada opción?",
      "¿Cómo mantienes el contacto con personas que viven lejos?",
      "¿Qué conversaciones prefieres tener en persona y cuáles por mensaje? Explica por qué.",
      "¿Cómo ha cambiado tu manera de estar disponible para los demás desde que usas un teléfono móvil?",
      "¿Cómo negocias la tensión entre conexión constante y presencia real en tus relaciones? Describe hábitos que hayas cambiado o quieras cambiar."
    ]
  },
  "boleto": {
    "title": "Un boleto de tren",
    "choices": [
      [
        "Ves un boleto antiguo en el museo. Quieres saber el destino del tren.",
        "¿Qué preguntas?",
        [
          "¿Adónde iba este tren?",
          "¿Quién pintó este cuadro?",
          "¿Dónde está la cafetería?"
        ]
      ],
      [
        "El boleto expuesto muestra dos ciudades. No sabes cuál era el destino.",
        "¿Qué pregunta aclara tu duda?",
        [
          "¿Cuál era la ciudad de salida y cuál la de llegada?",
          "¿Cuántas salas tiene el museo?",
          "¿A quién le gustaba viajar en avión?"
        ]
      ],
      [
        "El museo presenta un boleto sin usar, pero no explica por qué no se utilizó. Quieres distinguir lo documentado de una suposición.",
        "¿Qué le preguntas a la guía?",
        [
          "¿Se conoce el motivo por el que no se usó o es una hipótesis de la exposición?",
          "¿Qué razones explican que su dueño decidiera cancelar el viaje?",
          "¿Cómo afectó a su vida la decisión de no utilizar el boleto?"
        ]
      ]
    ],
    "personal": [
      "¿Adónde quieres viajar? ¿Con quién?",
      "¿Te gusta viajar en tren, en avión o en autobús? ¿Por qué?",
      "¿Qué viaje recuerdas con más cariño y qué pasó en él?",
      "¿Hay algún viaje que hayas pospuesto? Explica qué necesitarías para hacerlo.",
      "¿Cómo han cambiado tus motivos para viajar a lo largo de tu vida?",
      "¿Qué viajes que no llegaste a hacer han influido en tu manera de imaginar el futuro? Puedes hablar también de destinos que dejaron de interesarte."
    ]
  },
  "carta": {
    "title": "Una carta antigua",
    "choices": [
      [
        "Ves una carta en el museo. La letra es muy pequeña.",
        "¿Qué pides para leerla?",
        [
          "¿Hay una copia con letra más grande?",
          "¿Puedo llevarme la carta a casa?",
          "¿Puedo escribir encima de la carta?"
        ]
      ],
      [
        "Quieres leer una carta expuesta, pero está dentro de una vitrina.",
        "¿Qué le pides al personal?",
        [
          "¿Tienen una transcripción que pueda leer?",
          "¿Puedo abrir la vitrina sin permiso?",
          "¿Me prestan un bolígrafo para corregir la carta?"
        ]
      ],
      [
        "La exposición muestra una carta privada. Quieres conocer los criterios usados para hacerla pública.",
        "¿Cómo formulas tu consulta?",
        [
          "¿Se sabe si hubo autorización para exhibirla y cómo se decidió qué partes mostrar?",
          "¿La antigüedad de la carta fue el criterio principal para incluirla?",
          "¿Qué reacción esperan provocar en quienes lean estos detalles personales?"
        ]
      ]
    ],
    "personal": [
      "¿A quién escribes mensajes? ¿Qué le cuentas?",
      "¿Te gusta recibir mensajes largos o cortos? ¿Por qué?",
      "¿Guardas alguna carta o mensaje especial? Explica qué significa para ti, sin compartir nada privado.",
      "¿Qué puedes expresar mejor por escrito que en una conversación?",
      "¿Cómo decides qué aspectos de tu vida compartir por escrito y con quién?",
      "¿Cómo cambia para ti el significado de un mensaje al releerlo años después? Reflexiona sobre la distancia entre la intención original y tu lectura actual."
    ]
  },
  "valija": {
    "title": "La maleta de viaje",
    "choices": [
      [
        "Ves una maleta antigua en el museo. Quieres saber de qué material es.",
        "¿Qué preguntas?",
        [
          "¿Es de cuero o de tela?",
          "¿Es de mañana o de noche?",
          "¿Es de ida o de vuelta?"
        ]
      ],
      [
        "La guía habla de una maleta usada en viajes largos. Quieres saber qué llevaba la gente.",
        "¿Qué le preguntas?",
        [
          "¿Qué objetos solían llevar en una maleta como esta?",
          "¿Dónde puedo dejar mi abrigo hoy?",
          "¿Qué ruta de autobús llega al museo?"
        ]
      ],
      [
        "Una maleta se presenta como símbolo de una migración. Quieres conocer su historia concreta sin reducirla a un símbolo.",
        "¿Qué pregunta eliges?",
        [
          "¿Qué sabemos de la persona que la usó y de las circunstancias de su viaje?",
          "¿Qué representa esta maleta para el conjunto de las personas que emigraron?",
          "¿Qué características materiales permiten identificarla como equipaje de migración?"
        ]
      ]
    ],
    "personal": [
      "¿Qué llevas en tu maleta? Nombra tres cosas importantes para ti.",
      "¿Preparas la maleta con tiempo o el último día?",
      "¿Qué objeto llevas siempre cuando viajas y por qué?",
      "¿Prefieres viajar con poco equipaje o llevar cosas por si acaso? Cuenta cómo te ha funcionado.",
      "¿Qué te cuesta dejar atrás cuando cambias de lugar y qué descubres que no necesitabas?",
      "¿Qué objetos vinculas con tu identidad y cuáles podrías perder sin sentir que pierdes parte de ti? Relaciónalo con viajes, mudanzas o cambios personales."
    ]
  },
  "televisor": {
    "title": "El televisor antiguo",
    "choices": [
      [
        "Ves un televisor antiguo en el museo. Quieres saber si funciona.",
        "¿Qué preguntas?",
        [
          "¿Este televisor funciona?",
          "¿Este televisor es una radio?",
          "¿Este televisor tiene ruedas?"
        ]
      ],
      [
        "En la sala se proyecta una emisión histórica. Quieres saber si es la grabación original.",
        "¿Qué preguntas a la guía?",
        [
          "¿Es la emisión original o una recreación?",
          "¿Se puede cambiar a un canal actual?",
          "¿Dónde venden televisores nuevos?"
        ]
      ],
      [
        "El museo muestra un acontecimiento mediante una emisión televisiva. Quieres saber si había otras versiones del mismo hecho.",
        "¿Qué consulta haces?",
        [
          "¿La exposición incluye otras coberturas para comparar cómo se contó el acontecimiento?",
          "¿Qué hace especialmente representativa esta emisión frente a las que no se conservan?",
          "¿Cómo sabemos que la grabación se conserva íntegra, sin cortes posteriores?"
        ]
      ]
    ],
    "personal": [
      "¿Qué programas o videos te gusta ver? ¿Cuándo los ves?",
      "¿Ves películas solo o con otras personas? ¿Qué prefieres?",
      "¿Qué programa o película recuerdas de tu infancia y por qué?",
      "¿Cómo eliges qué ver cuando tienes muchas opciones disponibles?",
      "¿Cómo han cambiado tus hábitos de información y entretenimiento con las plataformas digitales?",
      "¿Qué parte de tus gustos audiovisuales consideras propia y qué parte moldeada por recomendaciones, hábitos o conversaciones ajenas?"
    ]
  },
  "bicicleta": {
    "title": "La bicicleta del cartero",
    "choices": [
      [
        "Ves una bicicleta de cartero. No conoces la palabra «cartero».",
        "¿Qué preguntas?",
        [
          "¿Qué significa cartero?",
          "¿Cuánto cuesta alquilarla?",
          "¿Dónde puedo comprar un sello?"
        ]
      ],
      [
        "La bicicleta expuesta perteneció a un cartero. Quieres saber cómo organizaba su trabajo.",
        "¿Qué le preguntas a la guía?",
        [
          "¿Cómo repartía las cartas y qué ruta hacía?",
          "¿Puedo usar esta bicicleta para salir del museo?",
          "¿Dónde están las bicicletas de alquiler?"
        ]
      ],
      [
        "La guía describe el oficio de cartero como algo «ya superado». Quieres preguntar por lo que cambió y lo que aún permanece.",
        "¿Qué pregunta eliges?",
        [
          "¿Qué funciones desaparecieron y cuáles siguen siendo necesarias, aunque se hagan de otra manera?",
          "¿En qué momento dejó de ser rentable repartir las cartas en bicicleta?",
          "¿Qué ventajas tiene el mensaje digital frente al correo postal tradicional?"
        ]
      ]
    ],
    "personal": [
      "¿Sabes andar en bicicleta? ¿Dónde te gusta pasear?",
      "¿Qué medio de transporte usabas cuando eras niño?",
      "¿Qué actividad aprendiste de pequeño y todavía disfrutas?",
      "¿Qué trabajos de tu entorno han cambiado mucho con la tecnología? ¿Cómo te afecta?",
      "¿Qué habilidades de tu trabajo o de tu vida cotidiana crees que seguirán siendo valiosas aunque cambie la tecnología?",
      "¿Cómo decides qué aprendizajes conservar y cuáles dejar atrás cuando cambia la forma de hacer las cosas? Usa ejemplos de tu experiencia."
    ]
  },
  "habitacion": {
    "title": "Una habitación de otra época",
    "choices": [
      [
        "Ves una habitación antigua en el museo. Hay un objeto que no conoces.",
        "¿Qué preguntas a la guía?",
        [
          "¿Para qué sirve ese objeto?",
          "¿A qué hora empieza la visita?",
          "¿Dónde puedo comprar agua?"
        ]
      ],
      [
        "La habitación del museo tiene muebles y aparatos de otra época. Quieres saber si pertenecieron a una persona real.",
        "¿Qué preguntas?",
        [
          "¿Es una habitación original o la han reconstruido?",
          "¿Puedo reservarla para dormir esta noche?",
          "¿Cuánto cuesta comprar todos los muebles?"
        ]
      ],
      [
        "La guía presenta una habitación como «típica» de una década. Quieres saber a qué contexto social se refiere.",
        "¿Qué pregunta haces?",
        [
          "¿Típica de qué tipo de hogar y de qué entorno?",
          "¿Qué objetos se eligieron para que reconozcamos inmediatamente la década?",
          "¿Cuál de estos muebles fue el más popular entre quienes vivieron entonces?"
        ]
      ]
    ],
    "personal": [
      "¿Cómo es tu habitación? ¿Qué hay cerca de tu cama?",
      "¿Qué cosas tienes en tu habitación y cuál te gusta más?",
      "¿Cómo era tu habitación cuando eras niño? Describe lo que recuerdas.",
      "¿Qué cambiarías de tu espacio personal para sentirte más cómodo?",
      "¿Qué revela tu espacio personal sobre tus prioridades y qué no se puede deducir de él?",
      "¿Cómo se relacionan los espacios que has habitado con las distintas versiones de ti mismo? Reflexiona sobre continuidades y cambios."
    ]
  },
  "caja": {
    "title": "La caja de música",
    "choices": [
      [
        "Ves una caja de música cerrada. Quieres escucharla.",
        "¿Qué preguntas al personal?",
        [
          "¿Podemos escuchar la música?",
          "¿Podemos apagar la luz?",
          "¿Podemos comprar entradas?"
        ]
      ],
      [
        "Hay una caja de música en una vitrina. Quieres oír su sonido sin tocar la pieza.",
        "¿Qué pides?",
        [
          "¿Tienen una grabación de cómo suena?",
          "¿Puedo abrir la vitrina y darle cuerda yo?",
          "¿Puedo llevármela para probarla en casa?"
        ]
      ],
      [
        "La música de una pieza restaurada se reproduce en la sala. Quieres saber cuánto conserva del sonido original.",
        "¿Qué pregunta eliges?",
        [
          "¿La restauración modificó el mecanismo o el sonido que escuchamos?",
          "¿Cuánto tiempo llevó conseguir que la caja volviera a funcionar?",
          "¿La melodía que suena ahora era popular cuando se fabricó la caja?"
        ]
      ]
    ],
    "personal": [
      "¿Qué canción te gusta mucho? ¿Cuándo la escuchas?",
      "¿Qué música escuchas cuando estás contento o cuando quieres descansar?",
      "¿Qué canción te recuerda una persona o una etapa de tu vida?",
      "¿Cómo han cambiado tus gustos musicales y qué canciones siguen siendo importantes para ti?",
      "¿Cómo influye tu estado de ánimo en la forma de escuchar una canción que ya conoces?",
      "¿Qué tiene la música que hace que ciertos recuerdos vuelvan con tanta intensidad? Explóralo desde tu experiencia, sin necesidad de una explicación técnica."
    ]
  },
  "taxi-cortado": {
    "title": "Elegir el trayecto",
    "ids": [
      "caminar",
      "rodear",
      "esperar"
    ],
    "choices": [
      [
        "Estás en un taxi. La calle está cerrada. Puedes caminar a la plaza, ir en taxi a la terraza o esperar.",
        "¿Qué eliges?",
        [
          "Camino hasta la plaza.",
          "Voy en taxi hasta la terraza.",
          "Espero aquí en el taxi."
        ]
      ],
      [
        "En tu viaje en taxi hay una calle cortada. Puedes bajar y caminar a la plaza, tomar un desvío hasta la terraza o esperar a que abran.",
        "¿Qué le indicas al conductor?",
        [
          "Bajo aquí y camino hasta la plaza.",
          "Tome el desvío hasta la terraza, por favor.",
          "Prefiero esperar aquí a que se pueda pasar."
        ]
      ],
      [
        "La ruta del taxi está cortada. El desvío a la terraza cuesta más; caminar a la plaza exige bajar aquí; no se sabe cuánto durará la espera.",
        "¿Qué decisión comunicas teniendo en cuenta esas condiciones?",
        [
          "Prefiero bajar y caminar a la plaza; no necesito llegar hasta la terraza.",
          "Acepto el costo del desvío; lléveme hasta la terraza.",
          "Me quedo esperando aquí, aunque no haya un tiempo confirmado."
        ]
      ]
    ],
    "personal": [
      "¿Prefieres caminar o tomar un taxi? ¿Adónde vas en taxi?",
      "¿Cuándo usas taxi y cuándo transporte público?",
      "¿Cómo te mueves cuando visitas una ciudad nueva? Explica qué te resulta práctico.",
      "Cuando viajas a una ciudad nueva, ¿prefieres usar taxi, transporte público o caminar? ¿Por qué?",
      "¿Cómo equilibras tiempo, dinero, comodidad e impacto ambiental en tus desplazamientos?",
      "¿Qué revela tu manera de desplazarte sobre cómo valoras tu tiempo y tu autonomía? Explica contradicciones entre tus preferencias y tus decisiones reales."
    ]
  },
  "taxi-mayor": {
    "title": "Confirmar el destino",
    "ids": [
      "seguir",
      "volver",
      "bajar"
    ],
    "choices": [
      [
        "El taxi va hacia la plaza. Puedes seguir, volver a la parada de taxis o bajar junto a la tienda.",
        "¿Qué le dices al conductor?",
        [
          "Siga hasta la plaza, por favor.",
          "Volvamos a la parada de taxis.",
          "Bajo junto a la tienda."
        ]
      ],
      [
        "Hay dos calles con el mismo nombre. El taxi va hacia la plaza, pero puedes pedir volver a la parada o bajar junto a la tienda para revisar la dirección.",
        "¿Qué decides hacer?",
        [
          "Seguimos hasta la plaza; ese destino me sirve.",
          "Volvamos a la parada y revisamos allí la dirección.",
          "Déjeme junto a la tienda; revisaré la dirección a pie."
        ]
      ],
      [
        "Descubres una ambigüedad en la dirección durante el viaje. El conductor ofrece seguir hasta la plaza, regresar a la parada o detenerse junto a la tienda.",
        "¿Cómo comunicas una decisión inequívoca?",
        [
          "Mantengamos el trayecto hasta la plaza; confirmo ese destino.",
          "Regresemos a la parada original antes de continuar.",
          "Deténgase junto a la tienda; terminaré el trayecto allí."
        ]
      ]
    ],
    "personal": [
      "¿Qué lugares están cerca de tu casa? ¿Cómo llegas a ellos?",
      "¿Te resulta fácil encontrar direcciones? ¿Qué haces cuando no encuentras un lugar?",
      "¿Alguna vez hubo una confusión con una dirección o una reserva? Cuenta qué pasó.",
      "¿Cómo compruebas que otra persona entendió lo que necesitas cuando viajas?",
      "¿Cómo reaccionas cuando un malentendido tiene un costo de tiempo o dinero para ti?",
      "¿Qué responsabilidad asumes al comunicar algo que para ti parece evidente? Reflexiona sobre un malentendido y sobre lo que hoy harías distinto."
    ]
  },
  "tienda-enchufe": {
    "title": "Un adaptador para el cargador",
    "choices": [
      [
        "Estás en la tienda. Tu cargador no entra en el enchufe.",
        "¿Qué pides?",
        [
          "Un adaptador para este cargador.",
          "Una funda para el teléfono.",
          "Unos auriculares para escuchar música."
        ]
      ],
      [
        "Necesitas un adaptador, pero no sabes qué modelo sirve. Llevas tu cargador contigo.",
        "¿Qué le dices al dependiente?",
        [
          "¿Podemos comprobar qué adaptador sirve para este cargador?",
          "Deme cualquiera; todos los modelos son iguales.",
          "Busco una batería, no una pieza para el enchufe."
        ]
      ],
      [
        "Te ofrecen un adaptador que parece encajar. Quieres confirmar la compatibilidad sin dar por hecho que la forma basta.",
        "¿Qué pregunta haces?",
        [
          "¿Podemos revisar si es compatible con este cargador y con la toma que voy a usar?",
          "¿Podemos probar que encaje físicamente y decidir solo con esa comprobación?",
          "¿Cuál recomienda la mayoría de sus clientes para viajar?"
        ]
      ]
    ],
    "personal": [
      "¿Qué aparatos usas todos los días? ¿Para qué los usas?",
      "¿Qué llevas para cargar tus aparatos cuando viajas?",
      "¿Qué problema práctico tuviste alguna vez durante un viaje y cómo lo resolviste?",
      "¿Qué haces cuando necesitas comprar algo cuyo nombre no sabes en otro idioma?",
      "¿Cómo decides cuándo pedir ayuda y cuándo intentar resolver por tu cuenta un problema técnico cotidiano?",
      "¿Cómo ha cambiado tu relación con los objetos que ya no sabes reparar o entender por completo? Explica qué autonomía quieres conservar."
    ]
  },
  "tienda-hielo": {
    "title": "Transportar el hielo",
    "choices": [
      [
        "Compras hielo en la tienda. Quieres llevarlo frío a casa.",
        "¿Qué recipiente eliges?",
        [
          "Una bolsa térmica.",
          "Una bolsa de papel abierta.",
          "Una caja de cartón sin tapa."
        ]
      ],
      [
        "Tienes que llevar hielo durante media hora. Quieres reducir la posibilidad de que se derrita.",
        "¿Qué le pides al dependiente?",
        [
          "Un recipiente térmico con tapa.",
          "Un recipiente abierto, fácil de llevar en la mano.",
          "Una bolsa de papel para transportarlo con otras compras."
        ]
      ],
      [
        "Te ofrecen un recipiente barato y otro térmico más caro para transportar hielo. Quieres comparar su utilidad antes de decidir.",
        "¿Qué pregunta te ayuda?",
        [
          "¿Cuánto tiempo conserva el frío cada uno en condiciones normales?",
          "¿Cuántos litros caben en cada uno? Quiero decidir según su capacidad.",
          "¿Qué garantía de fabricación tiene el más caro?"
        ]
      ]
    ],
    "personal": [
      "¿Qué compras en una tienda cerca de tu casa?",
      "¿Qué compras cuando organizas una reunión en casa?",
      "¿Cómo preparas una reunión para que no falte lo necesario?",
      "¿Prefieres planificar las compras o resolver lo que falta a último momento? Cuenta qué te funciona.",
      "¿Cómo decides si vale la pena pagar más por un producto reutilizable o de mejor calidad?",
      "¿Qué contradicciones encuentras entre consumir menos, ahorrar y resolver necesidades inmediatas? Habla de decisiones concretas tuyas."
    ]
  },
  "tienda-regalo": {
    "title": "Elegir un regalo",
    "choices": [
      [
        "Estás en una tienda. Buscas un regalo para una amiga que toma té.",
        "¿Qué eliges?",
        [
          "Una taza para el té.",
          "Un cargador para el auto.",
          "Un mapa de carreteras."
        ]
      ],
      [
        "Buscas un regalo pequeño para alguien que disfruta del café. Quieres conocer opciones dentro de tu presupuesto.",
        "¿Qué le dices al dependiente?",
        [
          "Busco algo relacionado con el café por menos de veinte euros.",
          "Enséñeme lo más caro, no importa para quién sea.",
          "Necesito cualquier cosa para reparar una bicicleta."
        ]
      ],
      [
        "El dependiente recomienda un regalo por su popularidad, pero tú buscas algo que encaje con una persona concreta.",
        "¿Cómo reorientas la consulta?",
        [
          "Más que lo más vendido, busco algo útil para alguien que disfruta preparando café.",
          "¿Cuál de los regalos de esta sección se vende más para cumpleaños?",
          "¿Puede recomendarme algo de esa marca, aunque no esté relacionado con el café?"
        ]
      ]
    ],
    "personal": [
      "¿Qué regalo te gusta recibir? ¿Qué regalos compras?",
      "¿A quién le haces regalos y en qué ocasiones?",
      "¿Qué regalo recuerdas especialmente y por qué fue importante?",
      "¿Qué hace especial un regalo para ti: su utilidad, la sorpresa o lo que significa?",
      "¿Cómo decides qué regalar cuando quieres expresar cercanía sin gastar demasiado?",
      "¿Qué obligaciones y afectos se mezclan para ti en la costumbre de regalar? Examina alguna ocasión en que un regalo significó algo inesperado."
    ]
  },
  "terraza-cierre": {
    "title": "El plan de la noche",
    "choices": [
      [
        "Estás en la terraza con amigos. Quieres seguir hablando aquí.",
        "¿Qué propones?",
        [
          "¿Nos quedamos aquí un poco más?",
          "¿Nos vamos ahora a casa?",
          "¿Vamos a bailar a otro lugar?"
        ]
      ],
      [
        "En la terraza algunos quieren salir a bailar y tú prefieres quedarte conversando. Quieres proponer que cada uno elija sin enfadarse.",
        "¿Qué dices?",
        [
          "Podemos hacer planes distintos y vernos mañana.",
          "Si alguien se va a bailar, significa que no le importamos.",
          "Todos tienen que quedarse porque es lo que yo prefiero."
        ]
      ],
      [
        "El grupo espera una decisión unánime sobre cómo seguir la noche. Quieres plantear que el acuerdo puede incluir separarse.",
        "¿Cómo lo propones?",
        [
          "Quizá no necesitemos hacer todos lo mismo para terminar bien la noche.",
          "Podemos votar y comprometernos todos a seguir lo que elija la mayoría.",
          "Propongo que hoy decidamos nosotros y la próxima vez quienes quieren otra cosa."
        ]
      ]
    ],
    "personal": [
      "¿Qué te gusta hacer por la noche? ¿Sales o te quedas en casa?",
      "¿Cómo es una noche ideal para ti?",
      "¿Qué salida reciente disfrutaste y qué la hizo especial?",
      "¿Prefieres terminar un buen plan a tiempo o seguir mientras haya ganas? Explica tu experiencia.",
      "¿Cómo ha cambiado tu idea de pasarlo bien con los años? Compara lo que buscabas antes con lo que valoras ahora.",
      "¿Cómo reconoces que una experiencia ha sido satisfactoria sin medirla por cuánto duró o cuántas cosas hiciste?"
    ]
  },
  "terraza-foto": {
    "title": "Una foto compartida",
    "choices": [
      [
        "Estás en la terraza. Quieres hacer una foto con tus amigos.",
        "¿Qué preguntas antes?",
        [
          "¿Quieren salir en una foto?",
          "¿Quieren pedir más comida?",
          "¿Quieren bajar por las escaleras?"
        ]
      ],
      [
        "Has hecho una foto del grupo y quieres publicarla. No sabes si todos están de acuerdo.",
        "¿Qué les preguntas?",
        [
          "¿Les parece bien que publique esta foto?",
          "¿Por qué no la han publicado ustedes antes que yo?",
          "¿Quién quiere que la publique sin consultar a los demás?"
        ]
      ],
      [
        "Una persona acepta salir en la foto, pero no ha hablado de publicarla. Quieres distinguir ambos permisos.",
        "¿Qué haces antes de compartirla?",
        [
          "Le pregunto expresamente si le parece bien que la publique.",
          "Le aviso de que voy a publicarla para que pueda decirme si hay algún problema.",
          "La comparto solo con conocidos; entiendo que posar incluye ese uso limitado."
        ]
      ]
    ],
    "personal": [
      "¿Te gusta salir en fotos? ¿Con quién tienes fotos?",
      "¿Compartes fotos con amigos o en redes sociales? ¿Qué fotos eliges?",
      "¿Qué cosas de tu vida te gusta compartir en internet y cuáles prefieres guardar?",
      "¿Cómo decides qué publicar y quién puede verlo? Explica tus criterios.",
      "¿Cómo han cambiado tus límites de privacidad en las redes sociales y qué experiencias influyeron?",
      "¿Qué distancia hay entre la vida que muestras y la que vives? Reflexiona sobre lo que esa selección protege, expresa u oculta para ti."
    ]
  }
};

const levelIndex = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
export function pedagogyFor(activity, level) {
  const row = rows[activity.id];
  const index = levelIndex[level];
  if (!row || index === undefined) throw new Error(`Missing pedagogy: ${activity.id}/${level}`);
  const [situation, prompt, labels] = row.choices[Math.floor(index / 2)];
  const options = labels.map((label, i) => ({ id: row.ids?.[i] ?? `option-${i + 1}`, label }));
  // Rotate display positions, retaining stable ids (especially taxi outcomes).
  const offset = [...activity.id].reduce((sum, char) => sum + char.charCodeAt(0), index) % options.length;
  return {
    id: activity.id, title: row.title ?? activity.title,
    ...(activity.who ? { who: activity.who } : {}),
    ...(activity.object ? { object: activity.object, year: activity.year } : {}),
    lessonLevel: level, situation, prompt,
    options: [...options.slice(offset), ...options.slice(0, offset)],
    close: row.personal[index],
    role: 'Escucha la elección del estudiante. Después, escucha su respuesta personal.',
    teacher: ['Primero pide que elija una opción adecuada al objetivo de la situación.', 'En la segunda pregunta, conversa sobre su vida real. No continúes la historia ni pidas que invente experiencias.'],
  };
}
export const PEDAGOGY_IDS = Object.freeze(Object.keys(rows));

const support = {
  cafe: ['Pedir y conversar en una cafetería', ['para llevar', 'una mesa libre', 'cambiar el pedido', 'tomar algo']],
  departamento: ['Visitas, hogar y convivencia', ['pasar a casa', 'recibir una visita', 'pedir permiso', 'estar cómodo']],
  restaurante: ['Comida, servicio y gastos compartidos', ['pedir la cuenta', 'los ingredientes', 'cambiar de mesa', 'pagar lo suyo']],
  plaza: ['Conocer personas y hablar de tu vida', ['conocer gente', 'hacer planes', 'pedir indicaciones', 'mantener el contacto']],
  bar: ['Planes, preferencias y límites personales', ['salir con amigos', 'bajar la voz', 'esperar el turno', 'decir que no']],
  auto: ['Transporte e imprevistos', ['buscar transporte', 'pedir ayuda', 'comprobar el horario', 'cambiar de plan']],
  museo: ['Objetos, recuerdos y experiencias personales', ['una foto antigua', 'un recuerdo especial', 'pedir información', 'conservar un objeto']],
  taxi: ['Elegir trayectos y hablar de tus viajes', ['tomar un desvío', 'confirmar el destino', 'bajar aquí', 'volver al punto de partida']],
  tienda: ['Compras, necesidades y regalos', ['comparar productos', 'comprobar que funciona', 'dentro del presupuesto', 'elegir un regalo']],
  terraza: ['Ocio, encuentros y privacidad', ['compartir una foto', 'pedir permiso', 'seguir conversando', 'hacer planes distintos']],
};
const starters = {
  A1: ['Me gusta…', 'Normalmente voy…', 'Prefiero…'],
  A2: ['Suelo…', 'Me gusta porque…', 'La última vez…'],
  B1: ['Una vez me pasó que…', 'Lo prefiero porque…', 'En mi experiencia…'],
  B2: ['Depende de…', 'Lo que más valoro es…', 'Antes prefería…, pero ahora…'],
  C1: ['En mi caso, influye…', 'Distingo entre… y…', 'He cambiado de opinión sobre…'],
  C2: ['Encuentro una tensión entre… y…', 'Al mirar atrás, matizaría…', 'Mi experiencia no siempre coincide con…'],
};
export function pedagogySupportFor(location, level) {
  const [focus, chunks] = support[location.id];
  return {
    focus, help: { starters: starters[level], chunks },
    ...(location.hub ? { hubPrompt: location.id === 'museo'
      ? 'Elige un objeto. Primero elige una respuesta; después habla de tu vida.'
      : 'Elige una persona. Primero elige una respuesta; después habla de tu vida.' } : {}),
  };
}
export const PEDAGOGY_MECHANICS = Object.fromEntries(
  ['mensajes', 'observar', 'decisiones', 'conversacion', 'social', 'condiciones', 'museo', 'comparar', 'describir', 'acuerdo']
    .map(type => [type, { mechanic: 'Elige y conversa', more: 'Otra interacción' }]),
);
export const PEDAGOGY_TEACHER_MOVES = [
  { id: 'eleccion', label: 'Primero', line: 'Pide que elija una opción según la situación. No añadas otro escenario.' },
  { id: 'personal', label: 'Después', line: 'Escucha su respuesta personal. Acepta experiencias, preferencias u opiniones reales; no exijas inventar recuerdos.' },
  { id: 'apoyo', label: 'Apoyo', line: 'Da tiempo para hablar y ofrece una expresión si la necesita. Ajusta tu ayuda al nivel.' },
];
