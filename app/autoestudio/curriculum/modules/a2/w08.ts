import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w08: Module = {
  "id": "a2-08",
  "level": "a2",
  "week": 8,
  "kind": "core",
  "title": "Te lo devuelvo mañana",
  "subtitle": "Pedir un favor, identificar quién recibe un objeto y acordar su devolución.",
  "stop": {
    "place": "Quetzaltenango",
    "country": "Guatemala"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.oi-pronombres",
    "a2.gram.se-lo",
    "a2.voc.regalos-prestamos",
    "a2.pron.cliticos-acento",
    "a2.fun.favores",
    "a2.wri.mensaje-favor"
  ],
  "reviewObjectives": [
    "a2.gram.indefinido-imperfecto",
    "a2.disc.secuenciar",
    "a2.voc.anecdotas",
    "a2.pron.grupos-fonicos",
    "a2.fun.anecdota",
    "a2.spk.anecdota"
  ],
  "prerequisites": [
    "a2-07"
  ],
  "goal": {
    "canDo": "Puedo pedir un favor, identificar quién recibe un objeto y acordar su devolución.",
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
        "heading": "Te lo devuelvo mañana · formas que necesitas",
        "body": [
          "El objeto directo responde qué: el libro → lo, la cámara → la, los billetes → los, las llaves → las. El indirecto indica a quién: me, te, le, nos, os, les. Se antepone al directo: me lo, te la, nos los. Le y les cambian a se delante de lo, la, los, las: se lo presto."
        ],
        "support": [
          "The receiver pronoun comes before the object pronoun. Le and les become se before lo, la, los or las."
        ],
        "examples": [
          {
            "es": "Le presto la cámara a Ana; se la presto hasta el viernes."
          },
          {
            "es": "¿Me dejas tu cargador? Te lo devuelvo mañana."
          }
        ],
        "mistakes": [
          {
            "wrong": "Le lo doy a Paula.",
            "right": "Se lo doy a Paula.",
            "why": "Le se convierte en se delante de lo."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Con verbo conjugado, los pronombres van delante: te lo devuelvo. Con infinitivo pueden ir unidos: voy a devolvértelo; también te lo voy a devolver. Dámelo y explícaselo son fórmulas útiles que estudiarás como instrucciones la semana siguiente. Si se es ambiguo, añade a Marta o a mis vecinos."
        ],
        "examples": [
          {
            "es": "Voy a enviárselo a mis padres."
          },
          {
            "es": "¿Puedes explicárselo? Ellos no entienden el mensaje."
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
            "q": "Le envío el paquete a Eva: ___ lo envío.",
            "answers": [
              [
                "se"
              ]
            ]
          },
          {
            "q": "¿Me prestas la bolsa? Sí, te ___ presto.",
            "answers": [
              [
                "la"
              ]
            ]
          },
          {
            "q": "Nos das las llaves: nos ___ das.",
            "answers": [
              [
                "las"
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
            "source": "Le doy el libro a Mario.",
            "instruction": "Sustituye el libro por lo, cambia le según corresponda y conserva a Mario al final.",
            "answers": [
              "Se lo doy a Mario."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Voy a devolver la cámara a ti.",
            "instruction": "Sustituye la cámara y a ti por los dos pronombres y colócalos antes de voy. No repitas los complementos.",
            "answers": [
              "Te la voy a devolver."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Envío los documentos a mis padres.",
            "instruction": "Sustituye los documentos y a mis padres por dos pronombres antes de envío. No repitas los complementos ni añadas sujeto.",
            "answers": [
              "Se los envío."
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
            "es": "pedir prestado",
            "en": "borrow"
          },
          {
            "es": "prestar una cámara",
            "en": "lend a camera"
          },
          {
            "es": "devolver a tiempo",
            "en": "return on time"
          },
          {
            "es": "hacer un favor",
            "en": "do a favour"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "dejar algo a alguien",
            "en": "lend something to someone"
          },
          {
            "es": "quedarse sin batería",
            "en": "run out of battery"
          },
          {
            "es": "enviar un paquete",
            "en": "send a parcel"
          },
          {
            "es": "agradecer la ayuda",
            "en": "thank someone for help"
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
            "left": "pedir prestado",
            "right": "borrow"
          },
          {
            "left": "prestar una cámara",
            "right": "lend a camera"
          },
          {
            "left": "devolver a tiempo",
            "right": "return on time"
          },
          {
            "left": "hacer un favor",
            "right": "do a favour"
          },
          {
            "left": "dejar algo a alguien",
            "right": "lend something to someone"
          },
          {
            "left": "quedarse sin batería",
            "right": "run out of battery"
          },
          {
            "left": "enviar un paquete",
            "right": "send a parcel"
          },
          {
            "left": "agradecer la ayuda",
            "right": "thank someone for help"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Unir pronombres conservando el acento",
    "explanation": [
      "Al añadir pronombres, conserva la sílaba fuerte del verbo: DA-me-lo, ex-PLÍ-ca-se-lo. Algunas palabras necesitan tilde para mantener ese acento por escrito. Pronuncia el grupo unido, pero deja claro cada pronombre: cambia quién recibe la ayuda o qué objeto se devuelve."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Te lo devuelvo el martes.",
          "q": "¿Qué combinación oyes?",
          "options": [
            "te lo",
            "se la"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Se las envío mañana.",
          "q": "¿El objeto es singular o plural?",
          "options": [
            "Plural femenino",
            "Singular masculino"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Dámelo cuando termines.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Explícaselo a tu hermana.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Voy a devolvértela el domingo.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Un favor con condiciones",
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
        "text": "Oye, ¿me prestas tu cámara para la excursión del sábado? La mía se ha roto y quiero hacer fotos para mi abuela. Ella no puede venir con nosotros."
      },
      {
        "speaker": "b",
        "text": "Sí, te la presto, pero la necesito el lunes por la mañana. Tengo una presentación y voy a llevarla al trabajo. ¿Puedes devolvérmela el domingo antes de cenar?"
      },
      {
        "speaker": "a",
        "text": "Claro. Te la llevo a casa a las seis. ¿Tienes una bolsa para guardarla? Voy a pedirle una a mi hermano si no tienes. No quiero llevarla suelta en la mochila."
      },
      {
        "speaker": "b",
        "text": "Tengo una. Te la doy con la cámara. El cargador está dentro. Si no sabes usar algún botón, mándame una foto y te lo explico. Y enséñale las fotos a tu abuela de mi parte."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Un favor con condiciones» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué acuerdan?",
              "options": [
                "Un viaje con la abuela",
                "El préstamo de una cámara",
                "La compra de un móvil"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El préstamo de una cámara»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Por qué se habla del lunes?",
              "options": [
                "La abuela llega el lunes",
                "La dueña necesitará la cámara para trabajar",
                "La excursión empieza ese día"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: La dueña necesitará la cámara para trabajar."
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
          "prompt": "Localiza dos datos concretos en «Un favor con condiciones».",
          "items": [
            {
              "q": "¿Cuándo devolverá la cámara?",
              "options": [
                "El domingo a las seis",
                "El lunes por la noche",
                "El sábado al salir"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «El domingo a las seis»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Dónde está el cargador?",
              "options": [
                "En el trabajo",
                "En casa del hermano",
                "Dentro de la bolsa"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Dentro de la bolsa»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Un favor con condiciones».",
          "items": [
            {
              "q": "En te la presto, la se refiere a…",
              "options": [
                "La excursión",
                "La abuela",
                "La cámara"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «La cámara»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En te la doy con la cámara, la se refiere a…",
              "options": [
                "La bolsa",
                "La excursión",
                "La presentación"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: La bolsa."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El proyector del centro",
    "genre": "Cadena de mensajes",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Nora: Hola, equipo. El sábado presentamos las fotos del barrio y mi proyector no funciona. ¿Alguien puede prestarme uno? Lo necesito solo de seis a ocho de la tarde. Puedo recogerlo el viernes y devolverlo el domingo por la mañana. Prometo llevarlo en una bolsa y cuidarlo bien.",
      "Beto: El centro tiene uno. Normalmente se lo prestamos a los grupos del barrio. Esta semana lo tiene Lucía, pero nos lo devuelve el jueves. Te lo puedo dejar el viernes a partir de las cinco. El cable está en una caja separada; recuérdame que te lo dé también.",
      "Nora: Muchas gracias. Mi compañero irá a buscarlo porque yo trabajo hasta tarde. Se llama Tomás. ¿Puedes dárselo a él? Le voy a explicar cómo llegar. El domingo te lo devolveré yo. Si prefieres, puedo dejarlo en recepción. Beto: Mejor en recepción, gracias. Allí registran las devoluciones y comprueban que estén los dos cables."
    ],
    "glossary": [
      {
        "es": "pedir prestado",
        "en": "borrow"
      },
      {
        "es": "prestar una cámara",
        "en": "lend a camera"
      },
      {
        "es": "devolver a tiempo",
        "en": "return on time"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «El proyector del centro» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Quién recogerá el proyector?",
            "options": [
              "Lucía",
              "Tomás",
              "Nora"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Tomás»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Por qué conviene devolverlo en recepción?",
            "options": [
              "Comprueban el material y registran la devolución",
              "Beto no conoce a Nora",
              "Abren solo el domingo"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Comprueban el material y registran la devolución»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «El proyector del centro» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Pedir un favor, identificar quién recibe un objeto y acordar su devolución. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Nora: Hola, equipo.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Beto: El centro tiene uno.",
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
              "Le",
              "presto",
              "la",
              "cámara",
              "a",
              "Ana;",
              "se",
              "la",
              "presto",
              "hasta",
              "el",
              "viernes."
            ]
          },
          {
            "words": [
              "Voy",
              "a",
              "enviárselo",
              "a",
              "mis",
              "padres."
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
              "Te la llevo el sábado por la noche; ¿te sirve?",
              "La usaré más días sin avisarte.",
              "Te la presto yo, aunque es tuya."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: Te la llevo el sábado por la noche; ¿te sirve?.",
            "context": "La dueña necesita la cámara antes de lo acordado.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Tu compañero necesita el objeto antes de lo previsto. Ofrece una solución, comprueba quién lo recoge y resume el acuerdo con dos pronombres.",
            "q": "En esta interacción de «Te lo devuelvo mañana», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Te lo devuelvo mañana», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, Leo.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Tu compañero necesita el objeto antes de lo previsto. Ofrece una solución, comprueba quién lo recoge y resume el acuerdo con dos pronombres.",
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
            "prompt": "Reto de recuperación en la semana 8: Cuenta en un minuto una anécdota nueva con perder, olvidar o romper. Prepara el contexto en imperfecto y tres hechos en indefinido; usa primero, de repente y al final. Divide el relato en grupos fónicos. El oyente reacciona y pregunta ¿qué pasó después?; responde sin leer.",
            "model": "Esperaba en una tienda y llevaba un paraguas. Primero pagué. De repente empezó a llover y descubrí que el paraguas estaba en casa. Al final una vecina me acompañó hasta el autobús.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 6→8: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Esperaba en una tienda y llevaba un paraguas. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Pide prestado un objeto para una actividad concreta. Explica por qué lo necesitas, cuándo lo recogerás, cómo lo cuidarás y cuándo lo devolverás. Agradece y permite que la otra persona diga que no.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Le presto la cámara a Ana; se la presto hasta el viernes.",
      "¿Me dejas tu cargador? Te lo devuelvo mañana.",
      "Voy a enviárselo a mis padres.",
      "¿Puedes explicárselo? Ellos no entienden el mensaje."
    ],
    "model": [
      "Hola, Leo. ¿Me puedes prestar tu altavoz para la reunión del domingo? El mío se ha roto y queremos escuchar unas entrevistas del barrio. Puedo recogerlo el sábado después de comer. Lo usaré dentro del centro y lo guardaré en su caja. Te lo devolveré el domingo a las ocho. Si lo necesitas ese día, no te preocupes: puedo pedir otro al centro. Muchas gracias por la ayuda. Si prefieres otra hora para la devolución, dímelo y organizamos el encuentro antes de tu trabajo."
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
        "prompt": "Pide un objeto prestado sin decir su nombre al principio: descríbelo y explica su uso. Después acuerda recogida y devolución.",
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
        "prompt": "Tu compañero necesita el objeto antes de lo previsto. Ofrece una solución, comprueba quién lo recoge y resume el acuerdo con dos pronombres.",
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
        "task": "Pide un objeto prestado sin decir su nombre al principio: descríbelo y explica su uso. Después acuerda recogida y devolución."
      },
      {
        "move": "Negocia",
        "task": "Tu compañero necesita el objeto antes de lo previsto. Ofrece una solución, comprueba quién lo recoge y resume el acuerdo con dos pronombres."
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
        "q": "Le entrego la llave a Luis: ___ la entrego.",
        "answers": [
          [
            "se"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Te devuelvo los libros: te ___ devuelvo.",
        "answers": [
          [
            "los"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Les los envío esta tarde.",
        "answers": [
          "Se los envío esta tarde."
        ],
        "why": "Le o les se convierte en se antes de lo, la, los o las."
      },
      {
        "type": "order",
        "words": [
          "Voy",
          "a",
          "devolvértelo",
          "el",
          "viernes."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué confirma mejor un préstamo?",
        "options": [
          "¿Te lo llevo el domingo a las seis?",
          "¿Te gustan las cámaras?"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Cuándo recibe Julia el objeto?",
        "options": [
          "Mañana",
          "El lunes",
          "Hoy"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: Hoy.",
        "type": "listen",
        "audio": "A Julia se la doy hoy; a ti te la doy mañana."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 8: Pide un objeto prestado sin decir su nombre al principio: descríbelo y explica su uso. Después acuerda recogida y devolución.",
        "model": "Hola, Leo. ¿Me puedes prestar tu altavoz para la reunión del domingo? El mío se ha roto y queremos escuchar unas entrevistas del barrio. Puedo recogerlo el sábado después de comer. Lo usaré dentro del centro y lo guardaré en su caja. Te lo devolveré el domingo a las ocho. Si lo necesitas ese día, no te preocupes: puedo pedir otro al centro. Muchas gracias por la ayuda. Si prefieres otra hora para la devolución, dímelo y organizamos el encuentro antes de tu trabajo.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 8: Tu compañero necesita el objeto antes de lo previsto. Ofrece una solución, comprueba quién lo recoge y resume el acuerdo con dos pronombres. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Pedir un favor, identificar quién recibe un objeto y acordar su devolución.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Te lo devuelvo mañana» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
