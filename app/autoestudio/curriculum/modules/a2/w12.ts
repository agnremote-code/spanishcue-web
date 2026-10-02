import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w12: Module = {
  "id": "a2-12",
  "level": "a2",
  "week": 12,
  "kind": "core",
  "title": "Planes con un plan B",
  "subtitle": "Distinguir planes, predicciones y promesas y preparar una alternativa posible.",
  "stop": {
    "place": "Tegucigalpa",
    "country": "Honduras"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.futuro-simple",
    "a2.gram.si-presente",
    "a2.voc.tecnologia-futuro",
    "a2.pron.vocales-atonas",
    "a2.fun.predecir-prometer",
    "a2.read.horoscopo-predicciones"
  ],
  "reviewObjectives": [
    "a2.rev.checkpoint-2",
    "a2.read.blog-viaje"
  ],
  "prerequisites": [
    "a2-11"
  ],
  "goal": {
    "canDo": "Puedo distinguir planes, predicciones y promesas y preparar una alternativa posible.",
    "steps": [
      "Prepara la misión y recupera lo que ya sabes.",
      "Escucha primero; localiza después los datos de la lectura.",
      "Ensaya, escribe, revisa y lleva una intervención a clase."
    ]
  },
  "theory": {
    "intro": "Trabaja las formas como herramientas para resolver esta misión. Las escenas y los textos son originales y ficticios.",
    "parts": [
      {
        "heading": "Planes con un plan B · formas que necesitas",
        "body": [
          "Ir a + infinitivo presenta una intención o un plan: voy a reservar. El futuro simple puede expresar una predicción o promesa: llegaré, tendremos. Se añade -é, -ás, -á, -emos, -éis, -án al infinitivo. Raíces frecuentes: tendr-, podr-, har-, dir-, saldr-, vendr-. Practica estas formas dentro de planes cercanos, sin buscar reglas abstractas sobre todos los usos."
        ],
        "support": [
          "A plan, a prediction and a promise are different messages. In a real condition, use present after si even when the result refers to the future."
        ],
        "examples": [
          {
            "es": "Voy a reservar la sala esta tarde."
          },
          {
            "es": "Mañana tendremos la confirmación del centro."
          }
        ],
        "mistakes": [
          {
            "wrong": "Si lloverá, iremos al museo.",
            "right": "Si llueve, iremos al museo.",
            "why": "La condición real con si lleva presente; la consecuencia puede llevar futuro."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Una condición real usa si + presente: si llueve, iremos al museo; si tengo tiempo, te llamaré. No uses futuro después de si en este patrón. Separa lo que está decidido de lo que imaginas. En un mensaje útil, ofrece una hora de confirmación y explica qué cambiará si falta un recurso."
        ],
        "examples": [
          {
            "es": "Si falla internet, usaremos las copias en papel."
          },
          {
            "es": "Te enviaré el horario antes de las seis."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "grammar-gap",
        "type": "gap",
        "prompt": "Completa según la forma y el contexto indicados.",
        "items": [
          {
            "q": "Mañana nosotros ___ una prueba. (hacer, futuro)",
            "answers": [
              [
                "haremos"
              ]
            ]
          },
          {
            "q": "Si ___, entraremos en la biblioteca. (llover)",
            "answers": [
              [
                "llueve"
              ]
            ]
          },
          {
            "q": "Te ___ el documento esta tarde. (enviar, futuro)",
            "answers": [
              [
                "enviaré"
              ]
            ]
          }
        ]
      },
      {
        "id": "grammar-transform",
        "type": "transform",
        "prompt": "Reformulación controlada: respeta las palabras y el orden indicados. En las tareas abiertas posteriores puedes elegir otras formulaciones.",
        "items": [
          {
            "source": "Voy a llamar a Ana.",
            "instruction": "Sustituye Voy a llamar por el futuro simple en primera persona singular; conserva a Ana al final, sin añadir sujeto.",
            "answers": [
              "Llamaré a Ana."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Tengo tiempo. Te ayudo.",
            "instruction": "Pon Si al principio de la primera oración y expresa te ayudo en futuro. Conserva el orden de las dos partes.",
            "answers": [
              "Si tengo tiempo, te ayudaré."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Podemos compartir el ordenador.",
            "instruction": "Pon Mañana al principio y cambia podemos al futuro simple; conserva compartir el ordenador, sin añadir sujeto.",
            "answers": [
              "Mañana podremos compartir el ordenador."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión como un bloque y úsala después con un dato propio.",
    "groups": [
      {
        "title": "Acciones y relaciones",
        "items": [
          {
            "es": "confirmar una reserva",
            "en": "confirm a booking"
          },
          {
            "es": "una conexión estable",
            "en": "a stable connection"
          },
          {
            "es": "guardar una copia",
            "en": "save a copy"
          },
          {
            "es": "cargar la batería",
            "en": "charge the battery"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "hacer una videollamada",
            "en": "make a video call"
          },
          {
            "es": "un dispositivo compartido",
            "en": "a shared device"
          },
          {
            "es": "preparar una alternativa",
            "en": "prepare a backup option"
          },
          {
            "es": "cumplir una promesa",
            "en": "keep a promise"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "vocabulary-match",
        "type": "match",
        "prompt": "Relaciona cada expresión con su significado; después úsala oralmente en una situación nueva.",
        "pairs": [
          {
            "left": "confirmar una reserva",
            "right": "confirm a booking"
          },
          {
            "left": "una conexión estable",
            "right": "a stable connection"
          },
          {
            "left": "guardar una copia",
            "right": "save a copy"
          },
          {
            "left": "cargar la batería",
            "right": "charge the battery"
          },
          {
            "left": "hacer una videollamada",
            "right": "make a video call"
          },
          {
            "left": "un dispositivo compartido",
            "right": "a shared device"
          },
          {
            "left": "preparar una alternativa",
            "right": "prepare a backup option"
          },
          {
            "left": "cumplir una promesa",
            "right": "keep a promise"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Vocales claras en palabras largas",
    "explanation": [
      "Comunicación, universidad y dispositivo tienen varias sílabas sin acento. No las conviertas todas en una vocal débil. Separa una vez las sílabas, vuelve a unirlas y conserva el acento principal. La claridad de las vocales ayuda a entender datos nuevos por teléfono."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "La universidad enviará un mensaje.",
          "q": "¿Qué institución oyes?",
          "options": [
            "Universidad",
            "Urbanización"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Necesitamos la confirmación.",
          "q": "¿Qué palabra termina en -ción?",
          "options": [
            "Confirmación",
            "Confianza"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "La comunicación será más fácil.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Compartiremos un dispositivo.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "La universidad enviará la confirmación.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "La presentación del viernes",
    "context": "Escena original de comunicación cotidiana. Escucha antes de abrir la transcripción. La reproducción disponible puede usar síntesis del navegador; no acredita una variedad regional ni una grabación humana.",
    "speakers": [
      {
        "id": "a",
        "name": "Persona A",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Persona B",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "El viernes voy a presentar el proyecto desde casa. Ya he probado la cámara y funciona. Creo que la reunión durará media hora, pero quizá haya muchas preguntas al final."
      },
      {
        "speaker": "b",
        "text": "Yo te ayudaré con las preguntas. ¿Has preparado una copia de las imágenes? Si tu conexión falla, podré compartirlas desde mi ordenador. Tendré todo abierto antes de empezar."
      },
      {
        "speaker": "a",
        "text": "Gracias. Te las enviaré esta tarde. Si el archivo es demasiado grande, lo dividiré en dos partes. También voy a escribir un resumen para las personas que no puedan conectarse."
      },
      {
        "speaker": "b",
        "text": "Perfecto. El jueves haremos una prueba de diez minutos. Si puedes, llámame a las seis. Después comprobaremos el sonido. Seguro que habrá algún pequeño problema, pero tendremos tiempo para resolverlo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «La presentación del viernes» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué preparan?",
              "options": [
                "Una presentación en línea",
                "Una compra de ordenadores",
                "Una clase de cocina"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Una presentación en línea»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué relación muestran las personas?",
              "options": [
                "Colaboran para preparar una reunión",
                "Compiten por vender una cámara",
                "Reclaman una reparación de internet"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Colaboran para preparar una reunión."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Segunda escucha: anota los datos necesarios; después comprueba tus respuestas.",
        "exercise": {
          "id": "listen-detail",
          "type": "choice",
          "prompt": "Localiza dos datos concretos en «La presentación del viernes».",
          "items": [
            {
              "q": "¿Cuándo enviará las imágenes?",
              "options": [
                "El viernes después de la reunión",
                "El próximo mes",
                "Esta tarde"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Esta tarde»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Cuál es el plan si falla la conexión?",
              "options": [
                "No habrá preguntas",
                "El compañero compartirá las imágenes",
                "Terminarán el proyecto"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El compañero compartirá las imágenes»; comprueba la frase completa antes de volver a responder."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Tercera escucha: atiende a las formas y a cómo se comprueba la información. La transcripción es opcional después de escuchar.",
        "exercise": {
          "id": "listen-notice",
          "type": "choice",
          "prompt": "Interpreta las palabras clave de «La presentación del viernes».",
          "items": [
            {
              "q": "Creo que durará expresa…",
              "options": [
                "Una instrucción",
                "Una predicción",
                "Un hecho ya ocurrido"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Una predicción»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En te las enviaré, las sustituye a…",
              "options": [
                "Las preguntas",
                "Las personas",
                "Las imágenes"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Las imágenes."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El taller del próximo mes",
    "genre": "Mensaje de planificación",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "El centro del barrio va a organizar un taller para aprender a usar el teléfono en gestiones cotidianas. La primera sesión será el sábado 12 a las diez. Vamos a practicar cómo pedir una cita y cómo guardar un documento. No es necesario tener un teléfono nuevo. Quien no tenga uno podrá compartir un dispositivo del centro con otra persona.",
      "La coordinadora cree que vendrán unas quince personas, aunque todavía no hay una lista definitiva. Si vienen más de veinte, abriremos un segundo grupo por la tarde. El viernes anterior enviaremos un mensaje con la confirmación del horario. Prometemos responder a todas las preguntas durante la semana.",
      "Lleva tu cargador y un cuaderno. Si la conexión falla, usaremos ejemplos impresos y practicaremos los pasos sin enviar datos reales. Al final cada participante elegirá una gestión que quiera hacer en casa. La siguiente sesión empezará con las dudas que aparezcan durante la práctica."
    ],
    "glossary": [
      {
        "es": "confirmar una reserva",
        "en": "confirm a booking"
      },
      {
        "es": "una conexión estable",
        "en": "a stable connection"
      },
      {
        "es": "guardar una copia",
        "en": "save a copy"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «El taller del próximo mes» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué es una predicción de la coordinadora?",
            "options": [
              "Que vendrán unas quince personas",
              "Que la sesión empieza a las diez",
              "Que hay que llevar un cuaderno"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Que vendrán unas quince personas»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué pasará si falla internet?",
            "options": [
              "Cancelarán todas las sesiones",
              "Pedirán teléfonos nuevos",
              "Usarán ejemplos impresos"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Usarán ejemplos impresos»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «El taller del próximo mes» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Distinguir planes, predicciones y promesas y preparar una alternativa posible. Explica qué frase lo demuestra y qué pregunta harías después.",
            "model": "Primero selecciono la información que necesita mi interlocutor. Después explico el dato con mis palabras y señalo dónde aparece; si falta información, la pregunto sin inventarla.",
            "checklist": [
              "Seleccionas información que aparece en el texto.",
              "Separas un dato confirmado de una pregunta o una opinión."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Vuelve al texto: interpreta estas dos frases y relaciona sus formas con el propósito del mensaje.",
      "items": [
        {
          "quote": "El centro del barrio va a organizar un taller para aprender a usar el teléfono en gestiones cotidianas.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "La coordinadora cree que vendrán unas quince personas, aunque todavía no hay una lista definitiva.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        }
      ]
    }
  },
  "practice": {
    "intro": "La práctica combina reconstrucción, decisiones y producción breve. Haz la recuperación antes de volver a los apuntes. Para un reto con pareja, usa el modelo y las condiciones escritas como apoyo. Si estudias a solas, interpreta los dos papeles y graba primero las preguntas; después responde sin leer el modelo. Las voces sintéticas no verifican acentos regionales ni matices expresivos.",
    "exercises": [
      {
        "id": "transfer-order",
        "type": "order",
        "prompt": "Reconstruye estas intervenciones de la misión; después explica cuándo las usarías.",
        "items": [
          {
            "words": [
              "Voy",
              "a",
              "reservar",
              "la",
              "sala",
              "esta",
              "tarde."
            ]
          },
          {
            "words": [
              "Si",
              "falla",
              "internet,",
              "usaremos",
              "las",
              "copias",
              "en",
              "papel."
            ]
          }
        ]
      },
      {
        "id": "transfer-context",
        "type": "context",
        "prompt": "Elige una respuesta que haga avanzar la gestión, no solo una frase correcta.",
        "items": [
          {
            "options": [
              "Seguro que nunca habrá ningún problema.",
              "Si fallará internet, no preguntamos nada.",
              "Si falla internet, compartiremos las imágenes desde otro ordenador."
            ],
            "answer": 2,
            "why": "Comprueba el contexto y los datos de la escena: Si falla internet, compartiremos las imágenes desde otro ordenador..",
            "context": "No está garantizada la conexión durante la reunión.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Negocia dos alternativas: falla internet y una persona llega tarde. Usa si + presente y confirma quién hará cada cosa.",
            "q": "En esta interacción de «Planes con un plan B», ¿cómo compruebas que puedes continuar?",
            "options": [
              "Resumir el acuerdo o la información y pedir confirmación.",
              "Dar por supuesto que la otra persona ha entendido todos los detalles."
            ],
            "answer": 0,
            "why": "Confirmar evita que una diferencia de interpretación quede sin resolver."
          }
        ]
      },
      {
        "id": "guided-production",
        "type": "open",
        "prompt": "Ensaya dos partes breves antes de producir tu texto completo.",
        "items": [
          {
            "prompt": "Para «Planes con un plan B», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, equipo.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Negocia dos alternativas: falla internet y una persona llega tarde. Usa si + presente y confirma quién hará cada cosa.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-10",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 10. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 12: Organiza una segunda salida con lluvia posible. Cuenta un problema de una salida anterior, compara dos lugares y pide un objeto prestado. Escribe tres instrucciones y explica quién devuelve el material. Tu compañero resume la historia y distingue descripción de hechos.",
            "model": "Antes salíamos sin mirar el tiempo. Una vez llovió y cambiamos el recorrido. La biblioteca es más cercana que el parque. Nos prestan una caja y se la devolveremos mañana. Primero confirma el horario.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 10→12: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Antes salíamos sin mirar el tiempo. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Envía un plan para una actividad en línea: qué vas a hacer, una predicción, una promesa y dos condiciones con alternativas. Deja claro cuándo se confirma el horario.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Voy a reservar la sala esta tarde.",
      "Mañana tendremos la confirmación del centro.",
      "Si falla internet, usaremos las copias en papel.",
      "Te enviaré el horario antes de las seis."
    ],
    "model": [
      "Hola, equipo. El viernes voy a presentar las fotografías del proyecto. Creo que necesitaremos cuarenta minutos porque hay bastante material. Os enviaré el enlace mañana antes de comer. Si alguien no puede conectarse, prepararé un resumen escrito. Si falla mi conexión, Elena compartirá las imágenes desde su ordenador. El jueves confirmaremos la hora exacta. Por favor, probad la cámara antes de la reunión y enviadme cualquier pregunta importante. Si necesitáis más tiempo para preparar una respuesta, podemos dejar las preguntas abiertas hasta el lunes siguiente."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      80,
      120
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Explica un plan para aprender algo con tecnología. Distingue dos decisiones tomadas de una predicción y formula una promesa realista.",
        "prep": [
          "Elige tres datos y ordénalos.",
          "Prepara una frase inicial y un cierre que invite a responder."
        ],
        "seconds": 90,
        "selfCheck": [
          "Se entiende la situación y el orden de las ideas.",
          "Mantengo claras las palabras clave y reformulo si hace falta."
        ]
      },
      {
        "title": "Interacción con un cambio",
        "prompt": "Negocia dos alternativas: falla internet y una persona llega tarde. Usa si + presente y confirma quién hará cada cosa.",
        "prep": [
          "Prepara una pregunta de seguimiento.",
          "Imagina una respuesta inesperada y una alternativa."
        ],
        "seconds": 90,
        "selfCheck": [
          "Escucho y respondo a la necesidad del otro.",
          "Confirmo un dato o acuerdo y cedo el turno."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La clase continúa el trabajo: lleva tu versión revisada y una duda concreta, no una lista de respuestas.",
    "cards": [
      {
        "move": "Presenta",
        "task": "Explica un plan para aprender algo con tecnología. Distingue dos decisiones tomadas de una predicción y formula una promesa realista."
      },
      {
        "move": "Negocia",
        "task": "Negocia dos alternativas: falla internet y una persona llega tarde. Usa si + presente y confirma quién hará cada cosa."
      },
      {
        "move": "Reformula",
        "task": "Pide al profesor que cambie un dato de la situación. Adapta tu respuesta sin leer el modelo y comprueba que el mensaje sigue siendo claro."
      },
      {
        "move": "Comprueba",
        "task": "El profesor resume lo que entendió. Corrige una diferencia de información y repite una frase cuyo sonido o ritmo quieras mejorar."
      }
    ],
    "bring": "Tu borrador revisado, tres palabras clave para hablar y una pregunta sobre la misión."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Mañana ella ___ la respuesta. (tener, futuro)",
        "answers": [
          [
            "tendrá"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Si ___ tiempo, visitaré el centro. (tener, yo)",
        "answers": [
          [
            "tengo"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Si vendrás temprano, empezaremos juntos.",
        "answers": [
          "Si vienes temprano, empezaremos juntos."
        ],
        "why": "Después de si, esta condición real usa presente: vienes."
      },
      {
        "type": "order",
        "words": [
          "Te",
          "llamaré",
          "después",
          "de",
          "la",
          "reunión."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué frase presenta un plan decidido?",
        "options": [
          "Voy a reservar hoy",
          "Creo que habrá mucha gente"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué proponen si falta un ordenador?",
        "options": [
          "Comprar uno sin preguntar",
          "Compartir el suyo",
          "Cancelar la reunión"
        ],
        "answer": 1,
        "why": "Comprueba el contexto y los datos de la escena: Compartir el suyo.",
        "type": "listen",
        "audio": "Si falta un ordenador, compartiremos el mío."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 12: Explica un plan para aprender algo con tecnología. Distingue dos decisiones tomadas de una predicción y formula una promesa realista.",
        "model": "Hola, equipo. El viernes voy a presentar las fotografías del proyecto. Creo que necesitaremos cuarenta minutos porque hay bastante material. Os enviaré el enlace mañana antes de comer. Si alguien no puede conectarse, prepararé un resumen escrito. Si falla mi conexión, Elena compartirá las imágenes desde su ordenador. El jueves confirmaremos la hora exacta. Por favor, probad la cámara antes de la reunión y enviadme cualquier pregunta importante. Si necesitáis más tiempo para preparar una respuesta, podemos dejar las preguntas abiertas hasta el lunes siguiente.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 12: Negocia dos alternativas: falla internet y una persona llega tarde. Usa si + presente y confirma quién hará cada cosa. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Distinguir planes, predicciones y promesas y preparar una alternativa posible.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Planes con un plan B» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
