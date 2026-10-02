import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w10: Module = {
  "id": "a2-10",
  "level": "a2",
  "week": 10,
  "kind": "checkpoint",
  "title": "Checkpoint: una salida para el barrio",
  "subtitle": "Combinar un relato, una comparación, un préstamo y unas instrucciones para organizar una salida.",
  "stop": {
    "place": "San Salvador",
    "country": "El Salvador"
  },
  "minutes": 140,
  "newObjectives": [
    "a2.rev.checkpoint-2",
    "a2.read.blog-viaje"
  ],
  "reviewObjectives": [
    "a2.gram.indefinido-imperfecto",
    "a2.disc.secuenciar",
    "a2.voc.anecdotas",
    "a2.pron.grupos-fonicos",
    "a2.fun.anecdota",
    "a2.spk.anecdota",
    "a2.gram.comparativos",
    "a2.gram.superlativos",
    "a2.voc.ciudades-campo",
    "a2.pron.foco-contraste",
    "a2.fun.comparar-elegir",
    "a2.read.articulo-ciudades",
    "a2.voc.vivienda-servicios",
    "a2.gram.oi-pronombres",
    "a2.gram.se-lo",
    "a2.voc.regalos-prestamos",
    "a2.pron.cliticos-acento",
    "a2.fun.favores",
    "a2.wri.mensaje-favor",
    "a2.gram.imperativo-afirmativo",
    "a2.gram.imperativo-pronombres",
    "a2.voc.cocina-recetas",
    "a2.pron.entonacion-imperativo",
    "a2.fun.instrucciones",
    "a2.lis.receta"
  ],
  "prerequisites": [
    "a2-09"
  ],
  "goal": {
    "canDo": "Puedo combinar un relato, una comparación, un préstamo y unas instrucciones para organizar una salida.",
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
        "heading": "Checkpoint: una salida para el barrio · formas que necesitas",
        "body": [
          "Una salida compartida reúne varias funciones: contar qué ocurrió en la visita anterior, comparar dos destinos, pedir material y explicar el plan. Recupera imperfecto para la escena e indefinido para el incidente; comparativos para elegir; pronombres para evitar repetir objetos; imperativos para los pasos."
        ],
        "support": [
          "Combine what happened, what you prefer and what people must do. A useful group plan makes responsibilities and return dates explicit."
        ],
        "examples": [
          {
            "es": "La última vez llovía y perdimos el autobús."
          },
          {
            "es": "El parque cuesta menos que el museo, pero está más lejos."
          }
        ],
        "mistakes": [
          {
            "wrong": "El parque tiene tanto mesas como el museo.",
            "right": "El parque tiene tantas mesas como el museo.",
            "why": "Tantas concuerda con mesas, un nombre femenino plural."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Antes de escribir o hablar, separa información confirmada y decisiones pendientes. El destino más barato puede no ser el mejor para un grupo con necesidades diferentes. Justifica la elección con datos, acuerda quién lleva cada objeto y repite el horario final. Si faltan datos, formula preguntas en lugar de inventarlos."
        ],
        "examples": [
          {
            "es": "¿Nos prestas el altavoz? Te lo devolvemos al volver."
          },
          {
            "es": "Primero recoge el mapa y después espera junto a la fuente."
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
            "q": "La última vez nosotros ___ tarde. (comer)",
            "answers": [
              [
                "comimos"
              ]
            ]
          },
          {
            "q": "El museo es más caro ___ el parque.",
            "answers": [
              [
                "que"
              ]
            ]
          },
          {
            "q": "La nevera es de Ana: ___ la devolvemos el domingo.",
            "answers": [
              [
                "se"
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
            "source": "Lleva los mapas al centro.",
            "instruction": "Sustituye los mapas por los y únelo al imperativo afirmativo; conserva al centro.",
            "answers": [
              "Llévalos al centro."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "El parque tiene veinte mesas. El museo tiene diez.",
            "instruction": "Empieza con El parque tiene y compara usando más mesas que el museo; no repitas las cifras.",
            "answers": [
              "El parque tiene más mesas que el museo."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Llovía. Llegamos al lago.",
            "instruction": "Mantén Llovía al principio y añade cuando seguido de la segunda oración.",
            "answers": [
              "Llovía cuando llegamos al lago."
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
            "es": "el punto de encuentro",
            "en": "meeting point"
          },
          {
            "es": "una entrada de grupo",
            "en": "group ticket"
          },
          {
            "es": "confirmar la asistencia",
            "en": "confirm attendance"
          },
          {
            "es": "llevar material compartido",
            "en": "bring shared equipment"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "prever una alternativa",
            "en": "prepare an alternative"
          },
          {
            "es": "repartir las tareas",
            "en": "share out tasks"
          },
          {
            "es": "comprobar el horario",
            "en": "check the schedule"
          },
          {
            "es": "regresar juntos",
            "en": "return together"
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
            "left": "el punto de encuentro",
            "right": "meeting point"
          },
          {
            "left": "una entrada de grupo",
            "right": "group ticket"
          },
          {
            "left": "confirmar la asistencia",
            "right": "confirm attendance"
          },
          {
            "left": "llevar material compartido",
            "right": "bring shared equipment"
          },
          {
            "left": "prever una alternativa",
            "right": "prepare an alternative"
          },
          {
            "left": "repartir las tareas",
            "right": "share out tasks"
          },
          {
            "left": "comprobar el horario",
            "right": "check the schedule"
          },
          {
            "left": "regresar juntos",
            "right": "return together"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Que el grupo retenga el plan",
    "explanation": [
      "En una explicación larga, destaca el lugar, la hora y la acción de cada persona. Haz una pausa después de cada decisión. Al corregir un dato, repite el dato completo: delante de la biblioteca, no dentro. Después pide al oyente que resuma el plan."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "La recojo el jueves, no el viernes.",
          "q": "¿Qué día es el definitivo?",
          "options": [
            "Jueves",
            "Viernes"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Quedamos delante de la biblioteca.",
          "q": "¿Dónde se reúnen?",
          "options": [
            "Fuera de la biblioteca",
            "Dentro del museo"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Quedamos delante de la biblioteca / a las nueve.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Te la devolvemos el domingo / por la mañana.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Primero confirma tu asistencia / después prepara la mochila.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Tres decisiones por teléfono",
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
        "text": "He leído las propuestas. Prefiero el museo porque el sábado anuncian lluvia. Es más caro que el parque, pero tiene una sala donde podemos comer. ¿Cuántas personas han confirmado?"
      },
      {
        "speaker": "b",
        "text": "Diez. Todavía faltan dos. La última vez algunas personas llegaron tarde porque no entendieron el punto de encuentro. Esta vez vamos a quedar delante de la biblioteca, no en la parada."
      },
      {
        "speaker": "a",
        "text": "Perfecto. Tengo una nevera pequeña. Se la puedo prestar al grupo. ¿Quién la recoge? Yo entro a trabajar pronto el viernes y no puedo llevarla al centro."
      },
      {
        "speaker": "b",
        "text": "La recojo yo el jueves por la tarde. Te la devolvemos el domingo. Para el sábado, prepara solo tu botella y una chaqueta. Primero nos reunimos a las nueve y después caminamos juntos a la parada."
      },
      {
        "speaker": "a",
        "text": "¿Y qué hacemos con las dos personas que todavía no han confirmado? Si compramos diez entradas y después vienen doce, quizá no podamos entrar todos juntos. Prefiero comprobarlo antes de pagar."
      },
      {
        "speaker": "b",
        "text": "Les llamo esta tarde. Primero confirmaré el número y después compraré las entradas. También voy a preguntar si hay sitio para sentarse durante la visita. Mi padre camina bien, pero se cansa cuando pasa mucho tiempo de pie."
      },
      {
        "speaker": "a",
        "text": "Bien. Entonces no publico todavía el precio final. Esperamos tu mensaje y después enviamos una sola versión del plan para que nadie confunda los horarios."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Tres decisiones por teléfono» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué hacen en la llamada?",
              "options": [
                "Cuentan solo una visita pasada",
                "Compran un autobús",
                "Concretan una salida de grupo"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Concretan una salida de grupo»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué función cumple la segunda persona?",
              "options": [
                "Describir solo el tiempo de ayer",
                "Vender una nevera al grupo",
                "Confirmar participantes y organizar detalles"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Confirmar participantes y organizar detalles."
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
          "prompt": "Localiza dos datos concretos en «Tres decisiones por teléfono».",
          "items": [
            {
              "q": "¿Dónde van a reunirse?",
              "options": [
                "En la parada",
                "Delante de la biblioteca",
                "Dentro del museo"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Delante de la biblioteca»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Cuándo recogen la nevera?",
              "options": [
                "El jueves por la tarde",
                "El viernes por la mañana",
                "El domingo"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «El jueves por la tarde»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Tres decisiones por teléfono».",
          "items": [
            {
              "q": "¿Qué justifica elegir el museo?",
              "options": [
                "Tiene una sala cubierta",
                "Es gratuito",
                "Está más lejos"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Tiene una sala cubierta»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En se la puedo prestar al grupo, la designa…",
              "options": [
                "La salida",
                "La nevera",
                "La biblioteca"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: La nevera."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Lo que aprendimos de la primera salida",
    "genre": "Blog y propuestas para un grupo",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "En nuestra primera salida al lago todo parecía fácil. El día estaba nublado y llevábamos comida para doce personas. Cuando llegamos, descubrimos que las mesas estaban mojadas. Buscamos un sitio cubierto y encontramos uno, pero estaba lejos de la parada. Al final comimos tarde y dos personas perdieron el autobús de regreso. Lo pasamos bien, aunque aprendimos que un plan necesita más detalles.",
      "Para este sábado proponemos dos opciones. El museo cuesta seis euros por persona y tiene una sala para comer. Está a veinte minutos en autobús. El parque es gratuito y tiene más espacio, pero no hay zona cubierta. El viaje dura cuarenta minutos. Ambos lugares abren a las diez.",
      "Antes del jueves, escribe qué opción prefieres y por qué. Si puedes prestar una manta o una nevera pequeña, avísanos. El viernes enviaremos el plan definitivo. Lee el horario, guarda el teléfono del responsable y lleva agua. La comida y el material se repartirán entre varias personas.",
      "La biblioteca nos deja usar su tablón para informar a quienes no están en el grupo del teléfono. Escribe allí solo la hora, el punto de encuentro y el nombre de la actividad. No publiques números personales. El responsable llevará una lista de participantes y preguntará por las necesidades de transporte. Si alguien no puede pagar la entrada al museo, puede hablar con él en privado: el grupo tiene dos entradas reservadas para ayudar."
    ],
    "glossary": [
      {
        "es": "el punto de encuentro",
        "en": "meeting point"
      },
      {
        "es": "una entrada de grupo",
        "en": "group ticket"
      },
      {
        "es": "confirmar la asistencia",
        "en": "confirm attendance"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Lo que aprendimos de la primera salida» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué problema hubo en la salida anterior?",
            "options": [
              "El lago estaba cerrado",
              "No llevaron comida",
              "Las mesas estaban mojadas"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Las mesas estaban mojadas»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué opción protege mejor de la lluvia?",
            "options": [
              "Las dos por igual",
              "El museo",
              "El parque"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «El museo»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Lo que aprendimos de la primera salida» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Combinar un relato, una comparación, un préstamo y unas instrucciones para organizar una salida. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "En nuestra primera salida al lago todo parecía fácil.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Para este sábado proponemos dos opciones.",
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
              "La",
              "última",
              "vez",
              "llovía",
              "y",
              "perdimos",
              "el",
              "autobús."
            ]
          },
          {
            "words": [
              "¿Nos",
              "prestas",
              "el",
              "altavoz?",
              "Te",
              "lo",
              "devolvemos",
              "al",
              "volver."
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
              "La nevera es de Ana y tiene ruedas.",
              "Quedamos delante, a las nueve; después iremos a la parada.",
              "El museo tiene una sala grande."
            ],
            "answer": 1,
            "why": "Comprueba el contexto y los datos de la escena: Quedamos delante, a las nueve; después iremos a la parada..",
            "context": "Una persona cree que la reunión es dentro de la biblioteca.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Negocia con quien prefiere el parque por el precio. Reconoce su razón, ofrece una alternativa y confirma quién recoge y devuelve el material.",
            "q": "En esta interacción de «Checkpoint: una salida para el barrio», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Checkpoint: una salida para el barrio», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, grupo.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Negocia con quien prefiere el parque por el precio. Reconoce su razón, ofrece una alternativa y confirma quién recoge y devuelve el material.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-06",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 6. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 10: Cuenta en un minuto una anécdota nueva con perder, olvidar o romper. Prepara el contexto en imperfecto y tres hechos en indefinido; usa primero, de repente y al final. Divide el relato en grupos fónicos. El oyente reacciona y pregunta ¿qué pasó después?; responde sin leer.",
            "model": "Esperaba en una tienda y llevaba un paraguas. Primero pagué. De repente empezó a llover y descubrí que el paraguas estaba en casa. Al final una vecina me acompañó hasta el autobús.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 6→10: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Esperaba en una tienda y llevaba un paraguas. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-07",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 7. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 10: Compara dos viviendas inventadas: A cuesta 350 con agua y está a cinco minutos del trabajo; B cuesta 300 sin gastos y está a media hora. Usa más/menos que, tan como, tanto como, mejor/peor, mayor/menor y un superlativo. Describe clima o entorno y destaca con la voz el dato decisivo. Di qué información falta para calcular el coste completo.",
            "model": "A es más cara al principio, pero está mejor comunicada. B es mayor y parece tranquilísima. No sabemos si tiene tantos gastos como A. Prefiero A por la distancia; necesito confirmar la electricidad.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 7→10: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: A es más cara al principio, pero está mejor comunicada. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-08",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 8. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 10: Pide una cámara prestada para otra actividad y escribe un mensaje de agradecimiento. Acuerda quién la recibe, cuándo se recoge y cuándo se devuelve. Usa le/les, se la y te lo; explica un referente ambiguo. Pronuncia dámelo y explícaselo sin cambiar el acento y ofrece una solución si el dueño la necesita antes.",
            "model": "Le pido la cámara a mi prima. Ella se la presta a mi compañero y él me la trae. Te lo agradezco mucho; te la devolvemos el lunes. Si mi compañero no entiende el botón, explícaselo.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 8→10: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Le pido la cámara a mi prima. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-09",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 9. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 10: Explica una receta distinta en seis pasos, con cantidades, herramientas y dos pronombres unidos al imperativo. Da una instrucción en tú, usted, vosotros, ustedes y vos. Tu pareja altera el orden de dos pasos: escucha y corrige amablemente. Pide que repita la cantidad antes de continuar.",
            "model": "Primero lava las frutas y córtalas. Mezcla el yogur y añádelo. Tú prueba la mezcla; usted pruébela; vosotros probadla; ustedes pruébenla; vos probala. ¿Puedes repetir cuántas cucharadas, por favor?",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 9→10: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Primero lava las frutas y córtalas. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Redacta el mensaje definitivo para una salida. Resume el problema anterior, compara las opciones, elige con dos razones y da instrucciones. Incluye un préstamo y su devolución.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "La última vez llovía y perdimos el autobús.",
      "El parque cuesta menos que el museo, pero está más lejos.",
      "¿Nos prestas el altavoz? Te lo devolvemos al volver.",
      "Primero recoge el mapa y después espera junto a la fuente."
    ],
    "model": [
      "Hola, grupo. La última vez llovía y comimos demasiado tarde. Este sábado vamos al museo porque tiene una sala cubierta y está más cerca que el parque. Cuesta seis euros por persona. Quedamos a las nueve delante de la biblioteca. Primero comprobaremos que estamos todos y después iremos a la parada. Ana nos presta la nevera y se la devolveremos el domingo. Lleva agua y una chaqueta. Confirma antes del jueves si vienes. Si no entiendes algún dato, pregunta en el grupo. Todavía tenemos que repartir la comida entre los participantes. Escribe qué puedes llevar para evitar que todos traigamos lo mismo."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      100,
      140
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Presenta tu propuesta al grupo: un problema aprendido, dos opciones, una elección y tres instrucciones.",
        "prep": [
          "Elige tres datos y ordénalos.",
          "Prepara una frase inicial y un cierre que invite a responder."
        ],
        "seconds": 120,
        "selfCheck": [
          "Se entiende la situación y el orden de las ideas.",
          "Mantengo claras las palabras clave y reformulo si hace falta."
        ]
      },
      {
        "title": "Interacción con un cambio",
        "prompt": "Negocia con quien prefiere el parque por el precio. Reconoce su razón, ofrece una alternativa y confirma quién recoge y devuelve el material.",
        "prep": [
          "Prepara una pregunta de seguimiento.",
          "Imagina una respuesta inesperada y una alternativa."
        ],
        "seconds": 120,
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
        "task": "Presenta tu propuesta al grupo: un problema aprendido, dos opciones, una elección y tres instrucciones."
      },
      {
        "move": "Negocia",
        "task": "Negocia con quien prefiere el parque por el precio. Reconoce su razón, ofrece una alternativa y confirma quién recoge y devuelve el material."
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
        "q": "Antes el grupo ___ cerca del lago. (comer, hábito)",
        "answers": [
          [
            "comía"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "___ los horarios antes de salir. (comprobar, tú)",
        "answers": [
          [
            "Comprueba"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "La sala es más mejor para la lluvia.",
        "answers": [
          "La sala es mejor para la lluvia."
        ],
        "why": "Mejor ya expresa la comparación, sin más."
      },
      {
        "type": "order",
        "words": [
          "Se",
          "la",
          "devolveremos",
          "después",
          "de",
          "la",
          "salida."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué dato sigue pendiente en el blog?",
        "options": [
          "La elección definitiva",
          "La hora de apertura"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué acción debe hacerse primero?",
        "options": [
          "Recoger el material",
          "Esperar al grupo",
          "Devolver el material"
        ],
        "answer": 0,
        "why": "Comprueba el contexto y los datos de la escena: Recoger el material.",
        "type": "listen",
        "audio": "Primero recoge el material y después espera al grupo."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 10: Presenta tu propuesta al grupo: un problema aprendido, dos opciones, una elección y tres instrucciones.",
        "model": "Hola, grupo. La última vez llovía y comimos demasiado tarde. Este sábado vamos al museo porque tiene una sala cubierta y está más cerca que el parque. Cuesta seis euros por persona. Quedamos a las nueve delante de la biblioteca. Primero comprobaremos que estamos todos y después iremos a la parada. Ana nos presta la nevera y se la devolveremos el domingo. Lleva agua y una chaqueta. Confirma antes del jueves si vienes. Si no entiendes algún dato, pregunta en el grupo. Todavía tenemos que repartir la comida entre los participantes. Escribe qué puedes llevar para evitar que todos traigamos lo mismo.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 10: Negocia con quien prefiere el parque por el precio. Reconoce su razón, ofrece una alternativa y confirma quién recoge y devuelve el material. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Combinar un relato, una comparación, un préstamo y unas instrucciones para organizar una salida.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Checkpoint: una salida para el barrio» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
