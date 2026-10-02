import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w18: Module = {
  "id": "a2-18",
  "level": "a2",
  "week": 18,
  "kind": "core",
  "title": "Busco algo que dejé en el tren",
  "subtitle": "Describir un objeto sin conocer su nombre y localizar información en avisos de objetos perdidos.",
  "stop": {
    "place": "Heredia",
    "country": "Costa Rica"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.indefinidos",
    "a2.gram.relativo-que",
    "a2.voc.objetos-perdidos",
    "a2.pron.diptongos-verbales",
    "a2.fun.describir-objeto",
    "a2.read.objetos-perdidos",
    "a2.gram.posesivos-tonicos"
  ],
  "reviewObjectives": [
    "a2.disc.conectores-causa-consecuencia",
    "a2.gram.antes-despues-inf",
    "a2.voc.estudio-trabajo",
    "a2.pron.conectores-entonacion",
    "a2.fun.explicar-decisiones",
    "a2.wri.historia-conectada"
  ],
  "prerequisites": [
    "a2-17"
  ],
  "goal": {
    "canDo": "Puedo describir un objeto sin conocer su nombre y localizar información en avisos de objetos perdidos.",
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
        "heading": "Busco algo que dejé en el tren · formas que necesitas",
        "body": [
          "Algo y nada se refieren a cosas; alguien y nadie, a personas. Con el indefinido después del verbo se necesita no: no veo nada, no viene nadie. Antes del verbo, el indefinido negativo basta: nadie viene. Algún y ningún van delante de un nombre masculino singular; alguna y ninguna ante femenino."
        ],
        "support": [
          "Use no when a negative word comes after the verb: no viene nadie. Describe an unknown object with its material, shape and function."
        ],
        "examples": [
          {
            "es": "No he encontrado nada debajo del asiento."
          },
          {
            "es": "¿Alguien ha visto una bolsa que tiene una cinta roja?"
          }
        ],
        "mistakes": [
          {
            "wrong": "No tengo ninguno recibo.",
            "right": "No tengo ningún recibo.",
            "why": "Delante de un nombre masculino singular usamos ningún."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Que añade información sobre una persona o cosa: una bolsa que tiene dos bolsillos. Donde sitúa un lugar: la sala donde esperamos. Si no sabes una palabra, explica forma, material y uso: es una cosa de metal que sirve para abrir botellas. En objetos perdidos, no publiques datos privados innecesarios; aporta un detalle que permita reconocer el objeto."
        ],
        "examples": [
          {
            "es": "No tengo ningún recibo, pero tengo alguna foto."
          },
          {
            "es": "Busco la oficina donde guardan los objetos perdidos."
          }
        ]
      },
      {
        "heading": "¿Es tuyo o mío?",
        "body": [
          "Los posesivos tónicos concuerdan con lo que se posee: el cuaderno es mío; la funda es mía; las llaves son mías. Con artículo pueden sustituir al nombre: el mío, la tuya, los suyos. Suyo puede referirse a él, ella, usted, ellos o ustedes; añade de Elena o de él si hace falta aclarar."
        ],
        "examples": [
          {
            "es": "Esta caja es mía; la tuya está en recepción."
          },
          {
            "es": "El abrigo es suyo, de Elena; el mío tiene otro color."
          }
        ],
        "mistakes": [
          {
            "wrong": "La mochila es mío.",
            "right": "La mochila es mía.",
            "why": "Mía concuerda con mochila, no con la persona propietaria."
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
            "q": "No he visto ___ en la sala. (persona)",
            "answers": [
              [
                "nadie"
              ]
            ]
          },
          {
            "q": "Busco una caja ___ tiene una tapa roja.",
            "answers": [
              [
                "que"
              ]
            ]
          },
          {
            "q": "¿Hay ___ recibo en la bolsa? (masculino singular)",
            "answers": [
              [
                "algún"
              ]
            ]
          },
          {
            "q": "La funda me pertenece: es ___.",
            "answers": [
              [
                "mía"
              ]
            ]
          },
          {
            "q": "Estos libros te pertenecen: son ___.",
            "answers": [
              [
                "tuyos"
              ]
            ]
          },
          {
            "q": "Es mi cuaderno: es el ___.",
            "answers": [
              [
                "mío"
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
            "source": "Nadie respondió al mensaje.",
            "instruction": "Empieza con No respondió y coloca nadie después del verbo; conserva al mensaje al final.",
            "answers": [
              "No respondió nadie al mensaje."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Busco una oficina. En esa oficina guardan las llaves.",
            "instruction": "Conserva Busco una oficina y sustituye En esa oficina por donde. Mantén guardan las llaves al final.",
            "answers": [
              "Busco una oficina donde guardan las llaves."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Es un objeto. Sirve para cortar papel.",
            "instruction": "Conserva Es un objeto y une la segunda oración con que, sin añadir otras palabras.",
            "answers": [
              "Es un objeto que sirve para cortar papel."
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
            "es": "un bolsillo interior",
            "en": "an inside pocket"
          },
          {
            "es": "una cremallera rota",
            "en": "a broken zip"
          },
          {
            "es": "una funda de tela",
            "en": "a fabric case"
          },
          {
            "es": "un objeto de metal",
            "en": "a metal object"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "tener forma redonda",
            "en": "have a round shape"
          },
          {
            "es": "servir para guardar",
            "en": "be used for storing"
          },
          {
            "es": "la oficina de objetos perdidos",
            "en": "lost property office"
          },
          {
            "es": "aportar un detalle",
            "en": "provide a detail"
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
            "left": "un bolsillo interior",
            "right": "an inside pocket"
          },
          {
            "left": "una cremallera rota",
            "right": "a broken zip"
          },
          {
            "left": "una funda de tela",
            "right": "a fabric case"
          },
          {
            "left": "un objeto de metal",
            "right": "a metal object"
          },
          {
            "left": "tener forma redonda",
            "right": "have a round shape"
          },
          {
            "left": "servir para guardar",
            "right": "be used for storing"
          },
          {
            "left": "la oficina de objetos perdidos",
            "right": "lost property office"
          },
          {
            "left": "aportar un detalle",
            "right": "provide a detail"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "El acento cambia; el diptongo también",
    "explanation": [
      "En puedo y quiero, la sílaba tónica contiene un diptongo; en podemos y queremos el acento pasa a otra sílaba y no aparece ese diptongo. Alterna las personas dentro de una frase. No generalices el cambio a todas las formas sin escuchar el modelo."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Podemos buscar en recepción.",
          "q": "¿Qué forma oyes?",
          "options": [
            "podemos",
            "puedemos"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Quiero recuperar mi cuaderno.",
          "q": "¿Qué forma lleva diptongo?",
          "options": [
            "quiero",
            "queremos"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Yo puedo describirlo; nosotros podemos buscarlo.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Yo quiero una funda; nosotros queremos dos.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "¿Puedes repetir dónde podemos preguntar?",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "No sé cómo se llama",
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
        "text": "Buenas tardes. Quería preguntar si alguien ha encontrado una cosa que dejé en la sala de reuniones. No sé cómo se llama en español. Es pequeña, de plástico negro, y sirve para conectar el ordenador a una pantalla."
      },
      {
        "speaker": "b",
        "text": "¿Tiene un cable corto y dos conexiones diferentes? Esta mañana alguien dejó un objeto así en recepción. No hay ningún nombre escrito. ¿Recuerda algún detalle para reconocerlo?"
      },
      {
        "speaker": "a",
        "text": "Sí. Tiene una pegatina verde en un lado y una esquina un poco rota. Lo usé en la sala donde hicimos la presentación. Al salir guardé el ordenador, pero no vi nada sobre la mesa."
      },
      {
        "speaker": "b",
        "text": "Este tiene una pegatina amarilla, no verde, y no está roto. Puede venir a mirarlo, pero quizá no sea el suyo. Voy a preguntar también a la persona que limpió la sala."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «No sé cómo se llama» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué estrategia usa quien llama?",
              "options": [
                "Describe material y función",
                "Deletrea una palabra conocida",
                "Pide comprar un cable"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Describe material y función»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Por qué no se puede confirmar que sea su objeto?",
              "options": [
                "Dos detalles no coinciden",
                "No conoce el nombre del objeto",
                "Recepción no guarda objetos pequeños"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Dos detalles no coinciden."
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
          "prompt": "Localiza dos datos concretos en «No sé cómo se llama».",
          "items": [
            {
              "q": "¿Qué detalle no coincide?",
              "options": [
                "El uso general",
                "El tamaño aproximado",
                "El color de la pegatina"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «El color de la pegatina»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué hará recepción?",
              "options": [
                "Enviará un ordenador nuevo",
                "Preguntará a quien limpió la sala",
                "Tirará el objeto"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Preguntará a quien limpió la sala»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «No sé cómo se llama».",
          "items": [
            {
              "q": "No hay ningún nombre significa…",
              "options": [
                "Nadie sabe hablar español",
                "El objeto no tiene nombre escrito",
                "Hay muchos nombres"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El objeto no tiene nombre escrito»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué expresa quizá no sea el suyo, sin necesitar producir esa forma?",
              "options": [
                "Confirmación de que es suyo",
                "Una orden para recogerlo",
                "Duda sobre la identificación"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Duda sobre la identificación."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Objetos encontrados esta semana",
    "genre": "Tablón de objetos perdidos",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Aviso A. Se ha encontrado una bolsa de tela azul en el tren de las ocho. Tiene dos asas cortas y un bolsillo exterior. Dentro hay una botella vacía y una libreta sin nombre. La persona que la ha perdido puede preguntar en la oficina de la estación. Debe describir el dibujo de la portada de la libreta.",
      "Aviso B. Hay un estuche pequeño de cuero marrón en la recepción del centro deportivo. Dentro no hay documentos ni dinero. Contiene un objeto de metal que sirve para abrir botellas y dos llaves. Nadie ha preguntado todavía por él. Para recogerlo, indica un detalle de las llaves.",
      "Mensaje de Alba. He perdido una bolsa azul donde guardo mis cosas del curso. No llevaba botella, pero sí un cuaderno con una flor en la portada y una caja para las gafas. Creo que la dejé en el tren de las nueve. No encuentro ninguna foto de la bolsa. Antes de ir a la oficina, voy a preguntar si han encontrado algún otro objeto parecido."
    ],
    "glossary": [
      {
        "es": "un bolsillo interior",
        "en": "an inside pocket"
      },
      {
        "es": "una cremallera rota",
        "en": "a broken zip"
      },
      {
        "es": "una funda de tela",
        "en": "a fabric case"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Objetos encontrados esta semana» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué dato no coincide entre Alba y el aviso A?",
            "options": [
              "El contenido y la hora del tren",
              "El color azul",
              "El tipo general de bolsa"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «El contenido y la hora del tren»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué debe describir quien reclama el estuche?",
            "options": [
              "Su cuenta bancaria",
              "El nombre de la botella",
              "Un detalle de las llaves"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Un detalle de las llaves»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Objetos encontrados esta semana» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Describir un objeto sin conocer su nombre y localizar información en avisos de objetos perdidos. Explica qué frase lo demuestra y qué pregunta harías después.",
            "model": "Primero selecciono la información que necesita mi interlocutor. Después explico el dato con mis palabras y señalo dónde aparece; si falta información, la pregunto sin inventarla.",
            "checklist": [
              "Seleccionas información que aparece en el texto.",
              "Separas un dato confirmado de una pregunta o una opinión."
            ]
          }
        ]
      },
      {
        "id": "reading-lost-classify",
        "type": "classify",
        "prompt": "Relaciona cada detalle con el aviso correcto antes de reclamar un objeto.",
        "categories": [
          "Aviso A",
          "Aviso B"
        ],
        "items": [
          {
            "text": "Bolsa azul con un bolsillo exterior.",
            "cat": 0
          },
          {
            "text": "Estuche marrón sin documentos ni dinero.",
            "cat": 1
          },
          {
            "text": "Hay que describir una portada.",
            "cat": 0
          },
          {
            "text": "Hay que reconocer un detalle de las llaves.",
            "cat": 1
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Vuelve al texto: interpreta estas dos frases y relaciona sus formas con el propósito del mensaje.",
      "items": [
        {
          "quote": "Aviso A.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Aviso B.",
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
              "No",
              "he",
              "encontrado",
              "nada",
              "debajo",
              "del",
              "asiento."
            ]
          },
          {
            "words": [
              "No",
              "tengo",
              "ningún",
              "recibo,",
              "pero",
              "tengo",
              "alguna",
              "foto."
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
              "Me lo llevo aunque no coincida.",
              "No sé el nombre, así que no puedo describirlo.",
              "Quizá no sea el mío; ¿han encontrado algún otro parecido?"
            ],
            "answer": 2,
            "why": "Comprueba el contexto y los datos de la escena: Quizá no sea el mío; ¿han encontrado algún otro parecido?.",
            "context": "El objeto de recepción tiene una pegatina diferente.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "En objetos perdidos te ofrecen algo parecido, pero no idéntico. Explica dos diferencias, evita aceptar un objeto ajeno y pregunta por otra búsqueda.",
            "q": "En esta interacción de «Busco algo que dejé en el tren», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Busco algo que dejé en el tren», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "He perdido una funda de tela verde en la biblioteca, probablemente el martes por la tarde.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: En objetos perdidos te ofrecen algo parecido, pero no idéntico. Explica dos diferencias, evita aceptar un objeto ajeno y pregunta por otra búsqueda.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-16",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 16. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 18: Escribe y cuenta una decisión nueva de estudio o trabajo. Da causas con porque y como, consecuencias con por eso y así que, y pasos con antes de, después de, al + infinitivo y cuando + pasado. Incluye una entrevista o prácticas y marca con pausas las relaciones entre ideas.",
            "model": "Como quería cambiar de empleo, preparé una entrevista. Antes de enviar el formulario, lo revisé. Después de hablar con la encargada, acepté las prácticas. Cuando llegué, saludé al equipo. Aprendí mucho; por eso seguí allí.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 16→18: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Como quería cambiar de empleo, preparé una entrevista. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Publica un aviso de objeto perdido con lugar y momento aproximados, forma, material, dos detalles y función. Evita datos personales; indica una recepción ficticia para contactar.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "No he encontrado nada debajo del asiento.",
      "¿Alguien ha visto una bolsa que tiene una cinta roja?",
      "No tengo ningún recibo, pero tengo alguna foto.",
      "Busco la oficina donde guardan los objetos perdidos."
    ],
    "model": [
      "He perdido una funda de tela verde en la biblioteca, probablemente el martes por la tarde. Es rectangular y tiene una cremallera negra. Dentro hay unas gafas y un papel que tiene un dibujo de un árbol. No hay ningún documento personal. Creo que la dejé en la mesa donde leí una revista. Si alguien la ha encontrado, puede dejarla en recepción. Para reconocerla, puedo describir un detalle del dibujo. Muchas gracias por la ayuda. No necesito publicar mi dirección ni mi teléfono para encontrarla: preguntaré cada tarde en recepción. Si hay dos fundas parecidas, comprobaré los detalles antes de llevarme una."
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
        "prompt": "Describe sin nombrarlo un objeto cotidiano por material, forma, partes y uso. Tu compañero debe identificarlo y hacer dos preguntas.",
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
        "prompt": "En objetos perdidos te ofrecen algo parecido, pero no idéntico. Explica dos diferencias, evita aceptar un objeto ajeno y pregunta por otra búsqueda.",
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
        "task": "Describe sin nombrarlo un objeto cotidiano por material, forma, partes y uso. Tu compañero debe identificarlo y hacer dos preguntas."
      },
      {
        "move": "Negocia",
        "task": "En objetos perdidos te ofrecen algo parecido, pero no idéntico. Explica dos diferencias, evita aceptar un objeto ajeno y pregunta por otra búsqueda."
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
        "q": "No había ___ sobre la mesa. (cosa)",
        "answers": [
          [
            "nada"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Es la sala ___ hacemos las reuniones.",
        "answers": [
          [
            "donde"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "No veo alguien en recepción.",
        "answers": [
          "No veo a nadie en recepción."
        ],
        "why": "La negación de persona después del verbo usa no… a nadie."
      },
      {
        "type": "order",
        "words": [
          "Busco",
          "una",
          "bolsa",
          "que",
          "tiene",
          "una",
          "cinta",
          "azul."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué descripción ayuda a reconocer un objeto?",
        "options": [
          "Tiene una pegatina verde y una esquina rota",
          "Es una cosa bonita"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué se sabe de la caja?",
        "options": [
          "La ha recogido su dueño",
          "Todavía no la han encontrado",
          "Ya está en recepción"
        ],
        "answer": 1,
        "why": "Comprueba el contexto y los datos de la escena: Todavía no la han encontrado.",
        "type": "listen",
        "audio": "Nadie ha encontrado la caja que dejé ayer."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 18: Describe sin nombrarlo un objeto cotidiano por material, forma, partes y uso. Tu compañero debe identificarlo y hacer dos preguntas.",
        "model": "He perdido una funda de tela verde en la biblioteca, probablemente el martes por la tarde. Es rectangular y tiene una cremallera negra. Dentro hay unas gafas y un papel que tiene un dibujo de un árbol. No hay ningún documento personal. Creo que la dejé en la mesa donde leí una revista. Si alguien la ha encontrado, puede dejarla en recepción. Para reconocerla, puedo describir un detalle del dibujo. Muchas gracias por la ayuda. No necesito publicar mi dirección ni mi teléfono para encontrarla: preguntaré cada tarde en recepción. Si hay dos fundas parecidas, comprobaré los detalles antes de llevarme una.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 18: En objetos perdidos te ofrecen algo parecido, pero no idéntico. Explica dos diferencias, evita aceptar un objeto ajeno y pregunta por otra búsqueda. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Describir un objeto sin conocer su nombre y localizar información en avisos de objetos perdidos.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Busco algo que dejé en el tren» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
