import type { Module } from "../../types";

export const b1w01: Module = {
  "id": "b1-01",
  "level": "b1",
  "week": 1,
  "kind": "core",
  "title": "El tren que ya había salido",
  "subtitle": "Reconstruir un imprevisto y explicar sus antecedentes.",
  "stop": {
    "place": "Zaragoza",
    "country": "España"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.pluscuamperfecto",
    "b1.disc.marcadores-relato",
    "b1.voc.viajes-imprevistos",
    "b1.pron.entonacion-narrativa",
    "b1.fun.narrar-viaje",
    "b1.lis.anecdota-radio"
  ],
  "reviewObjectives": [
    "a2.gram.indefinido-imperfecto",
    "a2.disc.secuenciar"
  ],
  "prerequisites": [
    "a2-20"
  ],
  "goal": {
    "canDo": "Puedo reconstruir un imprevisto y explicar sus antecedentes.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Reconstruir un imprevisto y explicar sus antecedentes.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "El pluscuamperfecto combina había, habías, había, habíamos, habíais, habían con un participio invariable. Sitúa un hecho antes de otro pasado: no indica simplemente que algo ocurrió hace mucho. El imperfecto presenta el ambiente y el indefinido hace avanzar los acontecimientos."
        ],
        "examples": [
          {
            "es": "Cuando llegué, el tren ya había salido."
          },
          {
            "es": "Habíamos comprado los billetes el martes."
          },
          {
            "es": "Mientras buscaba el andén, sonó el teléfono."
          }
        ],
        "mistakes": [
          {
            "wrong": "Cuando llegué, el tren había saliendo.",
            "right": "Cuando llegué, el tren había salido.",
            "why": "Después de había va el participio, no el gerundio."
          }
        ]
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "Un relato puede empezar por su resultado y regresar a los antecedentes. Ayuda al oyente con cuando, mientras, en aquel momento, al cabo de un rato y finalmente. Haz una pausa antes de revelar la solución; cierra con una consecuencia, no con una lista de acciones."
        ],
        "examples": [
          {
            "es": "Al cabo de un rato encontramos otro servicio."
          },
          {
            "es": "En cuanto abrió la oficina, pedimos ayuda."
          },
          {
            "es": "Finalmente llegamos a tiempo para cenar."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-01-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «El tren que ya había salido» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "Cuando fui a pagar, descubrí que ___ la cartera en casa.",
            "answers": [
              [
                "había dejado"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Mientras nosotros ___ el mapa, empezó a llover.",
            "answers": [
              [
                "mirábamos"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "El autobús ___ a las ocho y todos subimos.",
            "answers": [
              [
                "llegó"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          }
        ],
        "bank": [
          "había dejado",
          "mirábamos",
          "llegó"
        ]
      },
      {
        "id": "b1-01-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "Cuando llegué, el tren había saliendo.",
            "answers": [
              "Cuando llegué, el tren había salido."
            ],
            "why": "Después de había va el participio, no el gerundio."
          },
          {
            "sentence": "Habíamos comprados dos billetes.",
            "answers": [
              "Habíamos comprado dos billetes."
            ],
            "why": "El participio con haber es invariable."
          },
          {
            "sentence": "Mientras esperábamos, de repente sonaba el móvil.",
            "answers": [
              "Mientras esperábamos, de repente sonó el móvil."
            ],
            "why": "Aquí una llamada puntual interrumpe el fondo."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "El tren que ya había salido · acciones y recursos",
        "items": [
          {
            "es": "perder una conexión",
            "note": "no llegar a tiempo al siguiente transporte"
          },
          {
            "es": "cambiar de andén",
            "note": "ir a otra zona de salida"
          },
          {
            "es": "hacer una gestión",
            "note": "resolver un asunto práctico"
          },
          {
            "es": "guardar el justificante",
            "note": "conservar la prueba de un pago"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "quedarse sin batería",
            "note": "no poder usar el móvil"
          },
          {
            "es": "pedir un reembolso",
            "note": "solicitar que devuelvan el dinero"
          },
          {
            "es": "al cabo de un rato",
            "note": "después de cierto tiempo"
          },
          {
            "es": "salir del paso",
            "note": "resolver una dificultad inmediata"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-01-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «El tren que ya había salido» con su significado en este contexto.",
        "pairs": [
          {
            "left": "perder una conexión",
            "right": "no llegar a tiempo al siguiente transporte"
          },
          {
            "left": "cambiar de andén",
            "right": "ir a otra zona de salida"
          },
          {
            "left": "hacer una gestión",
            "right": "resolver un asunto práctico"
          },
          {
            "left": "guardar el justificante",
            "right": "conservar la prueba de un pago"
          },
          {
            "left": "quedarse sin batería",
            "right": "no poder usar el móvil"
          },
          {
            "left": "pedir un reembolso",
            "right": "solicitar que devuelvan el dinero"
          },
          {
            "left": "al cabo de un rato",
            "right": "después de cierto tiempo"
          },
          {
            "left": "salir del paso",
            "right": "resolver una dificultad inmediata"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas que ordenan un relato",
    "explanation": [
      "Ordena el relato en grupos de sentido. Deja una pausa antes del imprevisto y termina el resultado con cierre claro; no se exige una melodía única.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "Cuando llegué, el tren ya había salido."
      },
      {
        "es": "Habíamos comprado los billetes el martes."
      },
      {
        "es": "Mientras buscaba el andén, sonó el teléfono."
      }
    ],
    "perceive": {
      "id": "b1-01-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «El tren que ya había salido»?",
          "options": [
            "Las dos acciones se presentan como simultáneas",
            "La llegada ocurre después de la salida"
          ],
          "answer": 1,
          "audio": "Cuando llegué, el tren ya había salido.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «El tren que ya había salido»?",
          "options": [
            "Hay fondo y una interrupción",
            "Solo hay una lista sin relación"
          ],
          "answer": 0,
          "audio": "Mientras buscaba el andén, sonó el teléfono.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "Cuando llegué, el tren ya había salido.",
        "tip": "Ordena el relato en grupos de sentido. Deja una pausa antes del imprevisto y termina el resultado con cierre claro; no se exige una melodía única.",
        "voice": "es-ES-f"
      },
      {
        "text": "Habíamos comprado los billetes el martes.",
        "tip": "Ordena el relato en grupos de sentido. Deja una pausa antes del imprevisto y termina el resultado con cierre claro; no se exige una melodía única.",
        "voice": "es-ES-f"
      },
      {
        "text": "Mientras buscaba el andén, sonó el teléfono.",
        "tip": "Ordena el relato en grupos de sentido. Deja una pausa antes del imprevisto y termina el resultado con cierre claro; no se exige una melodía única.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "El tren que ya había salido · voces en conversación",
    "context": "Dos amigos comentan un error de transporte y cómo se resolvió. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Andrés",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Marta",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "No vas a creer cómo terminó mi excursión del sábado. A las siete estaba en la estación con el grupo y pensaba que lo tenía todo preparado. Había comprado el billete y había cargado el teléfono. Lo único que no había hecho era mirar el número del autobús."
      },
      {
        "speaker": "b",
        "text": "¿Te subiste a otro? A mí me pasó algo parecido el año pasado. Vi a unos viajeros con mochilas y los seguí sin preguntar adónde iban. ¿Cuándo te diste cuenta del error?"
      },
      {
        "speaker": "a",
        "text": "Cuando salimos a la carretera. El conductor anunció una parada en un pueblo que no estaba en nuestro recorrido. Mientras buscaba el billete en la mochila, mi compañera me llamó: todos seguían esperándome en la estación."
      },
      {
        "speaker": "b",
        "text": "¡Vaya susto! ¿Pudiste bajar enseguida o tuviste que llegar hasta el pueblo? Espero que no te quedaras allí toda la mañana sin poder avisar al grupo."
      },
      {
        "speaker": "a",
        "text": "Por suerte, paramos diez minutos después. El conductor del siguiente servicio me dejó volver con el mismo billete. Al cabo de media hora estaba otra vez con mis amigos. No habíamos perdido la excursión porque el autobús correcto también llevaba retraso."
      },
      {
        "speaker": "b",
        "text": "Entonces salió bien, aunque por casualidad. Yo habría preguntado al conductor antes de subir. La próxima vez podrías comprobar el destino además del número; a veces cambian los vehículos, pero la ruta sigue siendo la misma."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-01-audio-0",
          "type": "choice",
          "prompt": "El tren que ya había salido: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Qué cuenta el viajero?",
              "options": [
                "Una confusión de autobuses que pudo resolver",
                "Una excursión cancelada definitivamente"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué actitud muestra la otra persona ante el error?",
              "options": [
                "Burla y rechazo",
                "Empatía y una sugerencia práctica"
              ],
              "answer": 1,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Vuelve a escuchar y anota el dato que cambia la decisión.",
        "exercise": {
          "id": "b1-01-audio-1",
          "type": "choice",
          "prompt": "El tren que ya había salido: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Por qué el grupo pudo salir junto?",
              "options": [
                "El conductor esperó tres horas",
                "El autobús correcto también se retrasó"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Cuándo descubre el destino incorrecto?",
              "options": [
                "Al oír al conductor en carretera",
                "Antes de salir de casa"
              ],
              "answer": 0,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
        "exercise": {
          "id": "b1-01-audio-2",
          "type": "choice",
          "prompt": "El tren que ya había salido: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Qué función tiene «no había hecho»?",
              "options": [
                "Presentar un antecedente del error",
                "Describir una intención futura"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué aporta «mientras buscaba»?",
              "options": [
                "El final definitivo de la excursión",
                "Una acción de fondo interrumpida por la llamada"
              ],
              "answer": 1,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El tren que ya había salido · otra perspectiva",
    "genre": "Relato personal",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "Llegué a la boda de mi hermana con una mochila prestada y una historia que nadie esperaba. Había preparado el viaje con una semana de antelación: compré un billete temprano y guardé el traje en una maleta pequeña. La noche anterior miré el horario, pero no abrí el aviso que la compañía había enviado por correo. Pensé que era publicidad y seguí haciendo la cena.",
      "Al llegar a la estación, el panel indicaba que mi tren salía de otra terminal. Una empleada me explicó que habían cambiado la salida por unas obras. Mientras me señalaba el camino, oí el anuncio de la última llamada. Corrí hasta el andén, pero las puertas ya estaban cerradas. No perdí el tren por llegar tarde a la estación; lo perdí porque no había comprobado el cambio.",
      "En la oficina me ofrecieron una plaza tres horas después. Un viajero que había escuchado la conversación propuso compartir un taxi hasta la estación siguiente. Antes de aceptar, comprobamos que el tren paraba allí. Conseguimos alcanzarlo, aunque mi maleta se quedó junto al mostrador. Mi hermana me prestó ropa y, finalmente, pude acompañarla. Desde entonces leo los avisos completos y dejo de confiar únicamente en el horario que recuerdo."
    ],
    "tasks": [
      {
        "id": "b1-01-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «El tren que ya había salido», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Qué provocó que el narrador perdiera el tren?",
            "options": [
              "Comprar el billete demasiado tarde",
              "No leer el aviso del cambio"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Qué hicieron antes de compartir el taxi?",
            "options": [
              "Reservar otra boda",
              "Comprobar una parada"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-01-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «El tren que ya había salido».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «El tren que ya había salido», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "Llegué a la boda de mi hermana con una mochila prestada y una historia que nadie esperaba.",
            "checklist": [
              "Distingo información e interpretación.",
              "Adapto el resumen a alguien sin contexto."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Busca dos expresiones del texto y explica cómo ayudan a seguir la información.",
      "items": [
        {
          "quote": "Llegué a la boda de mi hermana con una mochila prestada y una historia que nadie esperaba.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "Desde entonces leo los avisos completos y dejo de confiar únicamente en el horario que recuerdo.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-01-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «El tren que ya había salido» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Al",
              "cabo",
              "de",
              "un",
              "rato",
              "encontramos",
              "otro",
              "servicio."
            ]
          },
          {
            "words": [
              "En",
              "cuanto",
              "abrió",
              "la",
              "oficina,",
              "pedimos",
              "ayuda."
            ]
          }
        ]
      },
      {
        "id": "b1-01-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «El tren que ya había salido».",
        "categories": [
          "Antecedente",
          "Hecho principal"
        ],
        "items": [
          {
            "text": "Habíamos revisado el horario.",
            "cat": 0
          },
          {
            "text": "El tren ya había salido.",
            "cat": 0
          },
          {
            "text": "Entré en la oficina.",
            "cat": 1
          },
          {
            "text": "La empleada ofreció otra ruta.",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-01-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "El tren que ya había salido: escribe una apertura de 35–45 palabras para la tarea «Escribe al amigo que te esperaba una narración de 140–170 palabras sobre un desplazamiento complicado: antecedentes, problema, ayuda recibida y aprendizaje.» sin copiar el modelo.",
            "model": "Hola, Leo: llegué bastante tarde, pero al final todo salió bien.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "El tren que ya había salido: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "Subí sin correr y avisé a mis compañeros. Aprendí que conviene comprobar los avisos antes de salir. ¿Te ha pasado algo parecido?",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-01-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "Antes del viaje a Zaragoza, reconstruye una salida cotidiana de A2: describe el fondo en imperfecto y dos hechos en indefinido; ordénalos con primero, después y al final.",
            "model": "Esperaba en la parada cuando llegó el autobús. Primero comprobé el destino y después subí.",
            "checklist": [
              "Diferencio fondo y hechos.",
              "Ordeno las acciones con conectores."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «El tren que ya había salido», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: Cuando llegué, el tren ya había salido.",
            "checklist": [
              "Comparo dos formulaciones concretas.",
              "Explico el cambio de intención o referencia."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe al amigo que te esperaba una narración de 140–170 palabras sobre un desplazamiento complicado: antecedentes, problema, ayuda recibida y aprendizaje.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "Cuando llegué, el tren ya había salido.",
      "Habíamos comprado los billetes el martes.",
      "Mientras buscaba el andén, sonó el teléfono.",
      "Al cabo de un rato encontramos otro servicio."
    ],
    "model": [
      "Hola, Leo: llegué bastante tarde, pero al final todo salió bien. Había reservado una bicicleta para ir a la estación y pensé que sería fácil recogerla.",
      "Además, había prometido llevar unos documentos para la reunión y no quería que los demás tuvieran que esperar. Por eso, en cuanto supe que iba con retraso, les mandé una fotografía de las páginas que necesitaban para empezar.",
      "Sin embargo, cuando llegué al punto de alquiler, estaba cerrado. La empresa había cambiado el horario y yo no había leído el mensaje. Mientras buscaba otra opción, una vecina me explicó dónde paraba el autobús. Por suerte, llevaba dinero suelto porque la máquina no aceptaba mi tarjeta. Llegué diez minutos después de la salida prevista, aunque el tren todavía estaba en el andén. Subí sin correr y avisé a mis compañeros. Aprendí que conviene comprobar los avisos antes de salir. ¿Te ha pasado algo parecido?"
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié."
    ],
    "words": [
      140,
      170
    ]
  },
  "speaking": {
    "intro": "Prepara ideas, no un guion completo. Puedes grabarte localmente; el curso no puntúa tu pronunciación ni sube tu audio.",
    "tasks": [
      {
        "title": "Intervención organizada",
        "prompt": "Cuenta durante dos minutos cómo confundiste una reserva. Tu interlocutor interrumpe para preguntar qué habías confirmado antes; responde, aclara la secuencia y vuelve al relato.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «El tren que ya había salido», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
        "prep": [
          "Reserva una pregunta abierta.",
          "Piensa una alternativa que puedas aceptar."
        ],
        "seconds": 120,
        "selfCheck": [
          "Escucho antes de responder.",
          "Adapto mi respuesta a la información nueva."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu texto revisado y una intervención breve: tu profe continuará la situación con un cambio que no conoces.",
    "cards": [
      {
        "move": "Presenta",
        "task": "Cuenta durante dos minutos cómo confundiste una reserva. Tu interlocutor interrumpe para preguntar qué habías confirmado antes; responde, aclara la secuencia y vuelve al relato."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «El tren que ya había salido» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «El tren que ya había salido» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Qué hicieron antes de compartir el taxi? Relaciona tu respuesta con «El tren que ya había salido».",
        "options": [
          "Reservar otra boda",
          "Comprobar una parada"
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «El tren que ya había salido»: ¿qué formulación se oye?",
        "options": [
          "Finalmente llegamos a tiempo para cenar.",
          "Mientras buscaba el andén, sonó el teléfono."
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "Finalmente llegamos a tiempo para cenar.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «El tren que ya había salido». Cuando fui a pagar, descubrí que ___ la cartera en casa.",
        "answers": [
          [
            "había dejado"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «El tren que ya había salido». Texto de partida: Primero Ana perdió el billete. Después llegó a la estación. Consigna: Empieza con Cuando Ana llegó y expresa el antecedente. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "Cuando Ana llegó a la estación, había perdido el billete.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "Había guardados los justificantes antes del viaje.",
        "answers": [
          "Había guardado los justificantes antes del viaje."
        ],
        "why": "El participio con haber no concuerda."
      },
      {
        "type": "order",
        "words": [
          "Finalmente",
          "llegamos",
          "a",
          "tiempo",
          "para",
          "cenar."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «El tren que ya había salido»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «El tren que ya había salido»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Reconstruir un imprevisto y explicar sus antecedentes.",
      "Puedo producir y revisar un texto conectado para esta situación.",
      "Puedo explicar mi propuesta, pedir aclaración y responder a una objeción."
    ],
    "review": [
      "Mañana recupera tres expresiones sin mirar y úsalas en otro contexto.",
      "Dentro de una semana vuelve a contar el caso con un dato cambiado y compara tu nueva respuesta.",
      "Revisa con tu profe los criterios de recuperación; un cuestionario no evalúa por sí solo tu nivel oral."
    ]
  }
};
