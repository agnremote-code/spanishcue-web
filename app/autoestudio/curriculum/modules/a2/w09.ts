import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w09: Module = {
  "id": "a2-09",
  "level": "a2",
  "week": 9,
  "kind": "core",
  "title": "Una receta que sí se entiende",
  "subtitle": "Seguir instrucciones de cocina y explicarlas a otra persona adaptando el trato.",
  "stop": {
    "place": "Suchitoto",
    "country": "El Salvador"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.imperativo-afirmativo",
    "a2.gram.imperativo-pronombres",
    "a2.voc.cocina-recetas",
    "a2.pron.entonacion-imperativo",
    "a2.fun.instrucciones",
    "a2.lis.receta"
  ],
  "reviewObjectives": [
    "a2.gram.comparativos",
    "a2.gram.superlativos",
    "a2.voc.ciudades-campo",
    "a2.pron.foco-contraste",
    "a2.fun.comparar-elegir",
    "a2.read.articulo-ciudades",
    "a2.voc.vivienda-servicios"
  ],
  "prerequisites": [
    "a2-08"
  ],
  "goal": {
    "canDo": "Puedo seguir instrucciones de cocina y explicarlas a otra persona adaptando el trato.",
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
        "heading": "Una receta que sí se entiende · formas que necesitas",
        "body": [
          "Para instrucciones afirmativas con tú usa corta, come, abre; hay formas irregulares como haz, pon, ten, ven, di, sal, sé y ve. Usted usa corte, coma, abra; ustedes corten, coman, abran. Vosotros: cortad, comed, abrid. En variedades con vos puedes oír cortá, comé, abrí. Elige una forma coherente con tu interlocutor."
        ],
        "support": [
          "Attach pronouns to affirmative commands. Keep the same form of address throughout instructions and check the stress when pronouns are added."
        ],
        "examples": [
          {
            "es": "Corta los tomates y ponlos en un plato."
          },
          {
            "es": "Lave las verduras y añada un poco de sal."
          }
        ],
        "mistakes": [
          {
            "wrong": "Lo corta, por favor. (instrucción con tú)",
            "right": "Córtalo, por favor.",
            "why": "En el imperativo afirmativo el pronombre va detrás del verbo."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "El pronombre se une al imperativo afirmativo: corta el tomate → córtalo; dé el plato → déselo. En una receta, empieza por materiales y cantidades; después ordena los pasos con primero, luego y al final. Por favor y un tono amable ayudan en una petición. No confundas una instrucción con una prohibición: aquí practicamos solo afirmativas."
        ],
        "examples": [
          {
            "es": "Mezclad los ingredientes y probad la salsa."
          },
          {
            "es": "Cortá el pan; después ponelo en la mesa."
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
            "q": "___ el tomate en trozos. (cortar, tú)",
            "answers": [
              [
                "Corta"
              ]
            ]
          },
          {
            "q": "___ las manos antes de cocinar. (lavarse, usted)",
            "answers": [
              [
                "Lávese"
              ]
            ]
          },
          {
            "q": "___ la salsa, por favor. (probar, ustedes)",
            "answers": [
              [
                "Prueben"
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
            "source": "Pon la cuchara en la mesa.",
            "instruction": "Sustituye la cuchara por la y únelo al imperativo afirmativo; conserva en la mesa.",
            "answers": [
              "Ponla en la mesa."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Mezcla los ingredientes.",
            "instruction": "Cambia solo el imperativo a usted, sin escribir el pronombre usted; conserva los ingredientes.",
            "answers": [
              "Mezcle los ingredientes."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Corta el pan.",
            "instruction": "Cambia solo el imperativo a vos, sin escribir el pronombre vos; conserva el pan.",
            "answers": [
              "Cortá el pan."
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
            "es": "lavar las verduras",
            "en": "wash vegetables"
          },
          {
            "es": "cortar en trozos",
            "en": "cut into pieces"
          },
          {
            "es": "añadir una cucharada",
            "en": "add a tablespoon"
          },
          {
            "es": "mezclar bien",
            "en": "mix well"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "calentar a fuego lento",
            "en": "heat gently"
          },
          {
            "es": "probar la salsa",
            "en": "taste the sauce"
          },
          {
            "es": "repartir en platos",
            "en": "divide between plates"
          },
          {
            "es": "dejar enfriar",
            "en": "leave to cool"
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
            "left": "lavar las verduras",
            "right": "wash vegetables"
          },
          {
            "left": "cortar en trozos",
            "right": "cut into pieces"
          },
          {
            "left": "añadir una cucharada",
            "right": "add a tablespoon"
          },
          {
            "left": "mezclar bien",
            "right": "mix well"
          },
          {
            "left": "calentar a fuego lento",
            "right": "heat gently"
          },
          {
            "left": "probar la salsa",
            "right": "taste the sauce"
          },
          {
            "left": "repartir en platos",
            "right": "divide between plates"
          },
          {
            "left": "dejar enfriar",
            "right": "leave to cool"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Instrucciones firmes y amables",
    "explanation": [
      "Una instrucción útil deja tiempo para actuar. Divide la secuencia en pasos y baja suavemente al terminar cada uno. Añade por favor cuando pides una acción personal. La voz sintética sirve para practicar palabras y orden; comprueba la intención y el tono con una persona."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Lave el tomate y córtelo.",
          "q": "¿A quién se dirige esta forma?",
          "options": [
            "A usted",
            "A tú"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Corta el pan, por favor.",
          "q": "¿Qué palabras suavizan la petición?",
          "options": [
            "Por favor",
            "El pan"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Primero lava las verduras.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Pásame la cuchara, por favor.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Después mézclalo todo con cuidado.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "El orden cambia el resultado",
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
        "text": "Vamos a preparar una crema de verduras. Ya he lavado las zanahorias y las patatas. ¿Las corto ahora? Nunca he usado esta olla y prefiero que me expliques los pasos despacio."
      },
      {
        "speaker": "b",
        "text": "Sí. Primero córtalas en trozos parecidos. Pon un poco de aceite en la olla y añade la cebolla. Cocina la cebolla unos minutos. Después incorpora las otras verduras y el agua."
      },
      {
        "speaker": "a",
        "text": "Espera: ¿pongo el agua antes de las patatas o después? He preparado un litro, pero no sé si hace falta todo. Y todavía no he añadido sal."
      },
      {
        "speaker": "b",
        "text": "Después de las patatas. Añade agua hasta cubrir las verduras; quizá no necesitas el litro entero. Pon poca sal y prueba al final. Cuando estén blandas, apaga el fuego y deja enfriar un poco antes de triturar."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «El orden cambia el resultado» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué pide la primera persona?",
              "options": [
                "Instrucciones claras para una receta",
                "Una reserva en un restaurante",
                "El precio de una olla"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Instrucciones claras para una receta»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué necesita quien aprende la receta?",
              "options": [
                "El orden y las cantidades",
                "Una lista de restaurantes",
                "Una explicación del precio de la olla"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: El orden y las cantidades."
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
          "prompt": "Localiza dos datos concretos en «El orden cambia el resultado».",
          "items": [
            {
              "q": "¿Qué se cocina primero?",
              "options": [
                "Las patatas en agua",
                "La crema terminada",
                "La cebolla"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «La cebolla»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Cuánta agua se añade?",
              "options": [
                "Solo una cucharada",
                "Hasta cubrir las verduras",
                "Siempre dos litros"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Hasta cubrir las verduras»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «El orden cambia el resultado».",
          "items": [
            {
              "q": "¿Qué hace la pregunta antes o después?",
              "options": [
                "Pide otro ingrediente",
                "Comprueba el orden",
                "Rechaza la receta"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Comprueba el orden»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué significa prueba al final en esta receta?",
              "options": [
                "Prueba todos los ingredientes antes de lavar",
                "Prueba la olla sin agua",
                "Comprueba el sabor cuando esté preparada"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Comprueba el sabor cuando esté preparada."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Ensalada para una mesa compartida",
    "genre": "Receta y nota de organización",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Para cuatro personas necesitas dos tazas de arroz ya cocido, un tomate grande, medio pepino, una zanahoria, dos cucharadas de aceite y el zumo de un limón. Esta receta se prepara con el arroz frío. Antes de empezar, comprueba que tienes un recipiente grande, un cuchillo y cuatro platos. Si cocinas para otras personas, pregunta primero si pueden comer todos los ingredientes.",
      "Primero lava el tomate, el pepino y la zanahoria. Corta el tomate y el pepino en trozos pequeños. Ralla la zanahoria. Pon el arroz en el recipiente y añade las verduras. Después mezcla el aceite con el limón en un vaso y échalo sobre la ensalada. Remueve todo con una cuchara. Al final prueba una pequeña cantidad y añade sal si hace falta. Reparte la ensalada en los platos.",
      "Para la comida del centro, lleva la ensalada en un recipiente cerrado. Escribe los ingredientes en una tarjeta y colócala junto al plato. Así cada persona puede elegir con información."
    ],
    "glossary": [
      {
        "es": "lavar las verduras",
        "en": "wash vegetables"
      },
      {
        "es": "cortar en trozos",
        "en": "cut into pieces"
      },
      {
        "es": "añadir una cucharada",
        "en": "add a tablespoon"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Ensalada para una mesa compartida» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Cómo debe estar el arroz?",
            "options": [
              "Cocido y frío",
              "Crudo",
              "Muy caliente"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Cocido y frío»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Para qué sirve la tarjeta?",
            "options": [
              "Para cobrar la comida",
              "Para reservar una mesa",
              "Para informar de los ingredientes"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Para informar de los ingredientes»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Ensalada para una mesa compartida» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Seguir instrucciones de cocina y explicarlas a otra persona adaptando el trato. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Para cuatro personas necesitas dos tazas de arroz ya cocido, un tomate grande, medio pepino, una zanahoria, dos cucharadas de aceite y el zumo de un limón.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Primero lava el tomate, el pepino y la zanahoria.",
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
              "Corta",
              "los",
              "tomates",
              "y",
              "ponlos",
              "en",
              "un",
              "plato."
            ]
          },
          {
            "words": [
              "Mezclad",
              "los",
              "ingredientes",
              "y",
              "probad",
              "la",
              "salsa."
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
              "Añade todo ahora, aunque no siga la receta.",
              "Da igual el orden de todos los pasos.",
              "Primero cocina la cebolla; el agua va después de las patatas."
            ],
            "answer": 2,
            "why": "Comprueba el contexto y los datos de la escena: Primero cocina la cebolla; el agua va después de las patatas..",
            "context": "Quien cocina pone el agua antes de cocinar la cebolla.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "El profesor interpreta a una persona que confunde dos pasos. Corrige con amabilidad, repite solo la parte necesaria y comprueba que la entendió.",
            "q": "En esta interacción de «Una receta que sí se entiende», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Una receta que sí se entiende», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Para preparar estas tostadas necesitas cuatro rebanadas de pan, dos tomates y un poco de aceite.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: El profesor interpreta a una persona que confunde dos pasos. Corrige con amabilidad, repite solo la parte necesaria y comprueba que la entendió.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
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
            "prompt": "Reto de recuperación en la semana 9: Compara dos viviendas inventadas: A cuesta 350 con agua y está a cinco minutos del trabajo; B cuesta 300 sin gastos y está a media hora. Usa más/menos que, tan como, tanto como, mejor/peor, mayor/menor y un superlativo. Describe clima o entorno y destaca con la voz el dato decisivo. Di qué información falta para calcular el coste completo.",
            "model": "A es más cara al principio, pero está mejor comunicada. B es mayor y parece tranquilísima. No sabemos si tiene tantos gastos como A. Prefiero A por la distancia; necesito confirmar la electricidad.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 7→9: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: A es más cara al principio, pero está mejor comunicada. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Escribe una receta para el tablón de una cocina compartida: ingredientes, cantidades, seis pasos y una nota para quien tiene una restricción alimentaria. Mantén tú o usted en todas las instrucciones.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Corta los tomates y ponlos en un plato.",
      "Lave las verduras y añada un poco de sal.",
      "Mezclad los ingredientes y probad la salsa.",
      "Cortá el pan; después ponelo en la mesa."
    ],
    "model": [
      "Para preparar estas tostadas necesitas cuatro rebanadas de pan, dos tomates y un poco de aceite. Primero lava los tomates. Después córtalos en trozos pequeños y ponlos en un recipiente. Añade una cucharada de aceite y mezcla bien. Tuesta el pan y coloca el tomate encima. Reparte las tostadas en un plato grande. Sírvelas al momento. Antes de compartirlas, pregunta si alguien necesita otro tipo de pan y escribe los ingredientes en una tarjeta. Si alguien no puede comer tomate, prepara una tostada distinta y mantenla en otro plato."
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
        "prompt": "Explica una receta sin leer. Tu oyente debe poder preparar materiales y seguir al menos cinco pasos.",
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
        "prompt": "El profesor interpreta a una persona que confunde dos pasos. Corrige con amabilidad, repite solo la parte necesaria y comprueba que la entendió.",
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
        "task": "Explica una receta sin leer. Tu oyente debe poder preparar materiales y seguir al menos cinco pasos."
      },
      {
        "move": "Negocia",
        "task": "El profesor interpreta a una persona que confunde dos pasos. Corrige con amabilidad, repite solo la parte necesaria y comprueba que la entendió."
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
        "q": "___ la puerta, por favor. (abrir, usted)",
        "answers": [
          [
            "Abra"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "___ los platos aquí. (poner, tú)",
        "answers": [
          [
            "Pon"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Da me el vaso, por favor.",
        "answers": [
          "Dame el vaso, por favor."
        ],
        "why": "El pronombre se une al imperativo afirmativo: dame."
      },
      {
        "type": "order",
        "words": [
          "Después",
          "añada",
          "el",
          "agua",
          "poco",
          "a",
          "poco."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué instrucción permite comprobar la cantidad?",
        "options": [
          "Añade toda el agua siempre",
          "Añade agua hasta cubrir las verduras"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué se hace después de cortar?",
        "options": [
          "Guardarlo en una bolsa",
          "Ponerlo en un plato",
          "Añadir agua"
        ],
        "answer": 1,
        "why": "Comprueba el contexto y los datos de la escena: Ponerlo en un plato.",
        "type": "listen",
        "audio": "Córtalo en trozos y ponlo en el plato."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 9: Explica una receta sin leer. Tu oyente debe poder preparar materiales y seguir al menos cinco pasos.",
        "model": "Para preparar estas tostadas necesitas cuatro rebanadas de pan, dos tomates y un poco de aceite. Primero lava los tomates. Después córtalos en trozos pequeños y ponlos en un recipiente. Añade una cucharada de aceite y mezcla bien. Tuesta el pan y coloca el tomate encima. Reparte las tostadas en un plato grande. Sírvelas al momento. Antes de compartirlas, pregunta si alguien necesita otro tipo de pan y escribe los ingredientes en una tarjeta. Si alguien no puede comer tomate, prepara una tostada distinta y mantenla en otro plato.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 9: El profesor interpreta a una persona que confunde dos pasos. Corrige con amabilidad, repite solo la parte necesaria y comprueba que la entendió. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Seguir instrucciones de cocina y explicarlas a otra persona adaptando el trato.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Una receta que sí se entiende» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
