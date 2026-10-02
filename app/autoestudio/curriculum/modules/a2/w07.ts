import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w07: Module = {
  "id": "a2-07",
  "level": "a2",
  "week": 7,
  "kind": "core",
  "title": "¿En qué barrio vivir?",
  "subtitle": "Comparar viviendas y barrios y elegir según necesidades y presupuesto.",
  "stop": {
    "place": "Ciudad de Guatemala",
    "country": "Guatemala"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.comparativos",
    "a2.gram.superlativos",
    "a2.voc.ciudades-campo",
    "a2.pron.foco-contraste",
    "a2.fun.comparar-elegir",
    "a2.read.articulo-ciudades",
    "a2.voc.vivienda-servicios"
  ],
  "reviewObjectives": [
    "a2.rev.checkpoint-1",
    "a2.lis.podcast-recuerdos"
  ],
  "prerequisites": [
    "a2-06"
  ],
  "goal": {
    "canDo": "Puedo comparar viviendas y barrios y elegir según necesidades y presupuesto.",
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
        "heading": "¿En qué barrio vivir? · formas que necesitas",
        "body": [
          "Compara cualidades con más o menos + adjetivo + que y tan + adjetivo + como. Para cantidades, tanto concuerda: tantas tiendas como, tanto ruido como. Para acciones: trabajo tanto como tú. Mejor, peor, mayor y menor suelen aparecer sin más cuando son comparativos."
        ],
        "support": [
          "Tan compares qualities; tanto agrees with the quantity being compared. Better and worse already express comparison, so do not add más."
        ],
        "examples": [
          {
            "es": "Este piso es menos caro que el del centro."
          },
          {
            "es": "Hay tantas tiendas como en mi barrio."
          }
        ],
        "mistakes": [
          {
            "wrong": "El autobús es más mejor aquí.",
            "right": "El autobús es mejor aquí.",
            "why": "Mejor ya expresa comparación."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "El más tranquilo de los barrios es un superlativo relativo: necesita un grupo de comparación. Tranquilísimo intensifica una cualidad sin comparar. En anuncios distingue hechos (precio, metros, transporte) y valoraciones (precioso, comodísimo). Tu elección debe relacionar un dato con una necesidad; no basta con decir que algo es mejor.",
          "Para comparar ciudad y campo, piensa también en el clima y los servicios: una zona rural puede ser más tranquila, pero tener menos transporte; en la costa suele hacer más calor que en las montañas. Evita presentar una preferencia personal como una regla para todas las personas."
        ],
        "examples": [
          {
            "es": "Es la casa más luminosa de las tres."
          },
          {
            "es": "El dormitorio es pequeñísimo, pero el transporte es mejor."
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
            "q": "Este piso tiene ___ luz como el otro. (igual cantidad)",
            "answers": [
              [
                "tanta"
              ]
            ]
          },
          {
            "q": "La cocina es más grande ___ la mía.",
            "answers": [
              [
                "que"
              ]
            ]
          },
          {
            "q": "Es la habitación más tranquila ___ la casa.",
            "answers": [
              [
                "de"
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
            "source": "La casa A cuesta 400. La casa B cuesta 500.",
            "instruction": "Empieza con La casa A es y usa menos cara que para compararla con la casa B; no repitas las cifras.",
            "answers": [
              "La casa A es menos cara que la casa B."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Los dos barrios tienen diez tiendas.",
            "instruction": "Empieza con Un barrio tiene y usa tantas tiendas como el otro; no repitas la cifra.",
            "answers": [
              "Un barrio tiene tantas tiendas como el otro."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "La habitación es muy pequeña.",
            "instruction": "Sustituye muy pequeña por una sola palabra con el sufijo -ísima; conserva el resto.",
            "answers": [
              "La habitación es pequeñísima."
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
            "es": "el alquiler mensual",
            "en": "monthly rent"
          },
          {
            "es": "los gastos incluidos",
            "en": "bills included"
          },
          {
            "es": "una zona peatonal",
            "en": "a pedestrian area"
          },
          {
            "es": "estar bien comunicado",
            "en": "have good transport links"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "un piso luminoso",
            "en": "a bright flat"
          },
          {
            "es": "el ruido del tráfico",
            "en": "traffic noise"
          },
          {
            "es": "un dormitorio exterior",
            "en": "an outward-facing bedroom"
          },
          {
            "es": "compartir los gastos",
            "en": "share expenses"
          }
        ]
      },
      {
        "title": "El entorno y el clima",
        "items": [
          {
            "es": "un barrio urbano",
            "en": "an urban neighbourhood"
          },
          {
            "es": "una zona rural",
            "en": "a rural area"
          },
          {
            "es": "un clima húmedo",
            "en": "a humid climate"
          },
          {
            "es": "hace más frío que en la costa",
            "en": "it is colder than on the coast"
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
            "left": "el alquiler mensual",
            "right": "monthly rent"
          },
          {
            "left": "los gastos incluidos",
            "right": "bills included"
          },
          {
            "left": "una zona peatonal",
            "right": "a pedestrian area"
          },
          {
            "left": "estar bien comunicado",
            "right": "have good transport links"
          },
          {
            "left": "un piso luminoso",
            "right": "a bright flat"
          },
          {
            "left": "el ruido del tráfico",
            "right": "traffic noise"
          },
          {
            "left": "un dormitorio exterior",
            "right": "an outward-facing bedroom"
          },
          {
            "left": "compartir los gastos",
            "right": "share expenses"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Destacar el dato que cambia la elección",
    "explanation": [
      "La palabra destacada ayuda a corregir un dato: más barata puede contrastar con más grande. Escucha la frase completa y localiza qué cambia. Al hablar, alarga ligeramente la sílaba tónica del dato importante, sin elevar todo el volumen."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Es menos caro, pero está más lejos.",
          "q": "¿Qué ventaja menciona primero?",
          "options": [
            "El precio",
            "La distancia"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Tiene más luz, no más espacio.",
          "q": "¿Qué cualidad se compara positivamente?",
          "options": [
            "La luminosidad",
            "El tamaño"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Es más BARATA, pero no es más grande.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "La parada está más CERCA.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Tiene TANTAS ventanas como la otra.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Una visita al piso",
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
        "text": "La habitación tiene buena luz. Es más pequeña que la que vi ayer, pero la ventana es más grande. ¿Hay tanto ruido por la noche como durante el día?"
      },
      {
        "speaker": "b",
        "text": "No. La calle es bastante tranquila después de las ocho. La cocina es la zona más ruidosa de la casa porque todos cenamos a la misma hora. Compartimos los gastos de electricidad."
      },
      {
        "speaker": "a",
        "text": "Trabajo desde casa dos días por semana. Necesito internet y un lugar para estudiar. ¿La conexión es buena? En mi piso anterior era peor por la tarde."
      },
      {
        "speaker": "b",
        "text": "Funciona bien. Puedes probarla ahora. El escritorio es pequeño, pero hay una mesa mayor en el salón. Esta habitación cuesta treinta euros menos que la del balcón. Si quieres, vemos las dos antes de decidir."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Una visita al piso» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué está haciendo la primera persona?",
              "options": [
                "Vendiendo un escritorio",
                "Buscando una biblioteca",
                "Comparando una habitación para alquilar"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Comparando una habitación para alquilar»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué prioridad expresa quien visita el piso?",
              "options": [
                "Tener el balcón más grande",
                "Compartir piso solo los fines de semana",
                "Poder trabajar y estudiar allí"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Poder trabajar y estudiar allí."
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
          "prompt": "Localiza dos datos concretos en «Una visita al piso».",
          "items": [
            {
              "q": "¿Qué zona tiene más ruido al cenar?",
              "options": [
                "La calle",
                "La cocina",
                "El balcón"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «La cocina»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué puede probar durante la visita?",
              "options": [
                "La conexión a internet",
                "El autobús",
                "La calefacción de otro piso"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La conexión a internet»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Una visita al piso».",
          "items": [
            {
              "q": "Treinta euros menos indica…",
              "options": [
                "Una diferencia de precio",
                "El precio total",
                "Los gastos de internet"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Una diferencia de precio»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué comparación favorece la habitación que visitan?",
              "options": [
                "No tiene gastos compartidos",
                "La ventana es más grande",
                "Es la habitación de mayor tamaño"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: La ventana es más grande."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Dos habitaciones, dos formas de vivir",
    "genre": "Anuncios y comentario de una visitante",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Habitación A: 340 euros al mes, agua incluida. Piso compartido con dos personas en el centro. La habitación tiene una ventana a una calle peatonal. La cocina es pequeña, pero está equipada. Hay una biblioteca a cinco minutos andando y varios autobuses cerca. No hay ascensor. La habitación está en la cuarta planta.",
      "Habitación B: 290 euros al mes, más agua y electricidad. Casa compartida con cuatro personas junto al parque. La habitación es más grande y tiene un escritorio. Hay jardín, pero la parada de autobús está a quince minutos. El último autobús del centro sale a las diez de la noche.",
      "Nota de Irene después de las visitas: trabajo hasta las nueve y media y estudio los sábados. La casa B es tranquilísima y más barata al principio, pero los gastos no están incluidos. La habitación A es menor, aunque la biblioteca y el transporte son mejores para mí. Antes de decidir, voy a preguntar cuánto pagan normalmente de electricidad en la casa B."
    ],
    "glossary": [
      {
        "es": "el alquiler mensual",
        "en": "monthly rent"
      },
      {
        "es": "los gastos incluidos",
        "en": "bills included"
      },
      {
        "es": "una zona peatonal",
        "en": "a pedestrian area"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Dos habitaciones, dos formas de vivir» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué ventaja tiene A para Irene?",
            "options": [
              "Un jardín grande",
              "Menos escaleras",
              "Transporte y biblioteca cercanos"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Transporte y biblioteca cercanos»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué precio total todavía no conoce?",
            "options": [
              "El de una biblioteca",
              "El de B con los gastos",
              "El alquiler de A"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «El de B con los gastos»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Dos habitaciones, dos formas de vivir» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Comparar viviendas y barrios y elegir según necesidades y presupuesto. Explica qué frase lo demuestra y qué pregunta harías después.",
            "model": "Primero selecciono la información que necesita mi interlocutor. Después explico el dato con mis palabras y señalo dónde aparece; si falta información, la pregunto sin inventarla.",
            "checklist": [
              "Seleccionas información que aparece en el texto.",
              "Separas un dato confirmado de una pregunta o una opinión."
            ]
          }
        ]
      },
      {
        "id": "reading-housing-classify",
        "type": "classify",
        "prompt": "Compara los anuncios sin confundir precio base y coste total. Clasifica los datos que identifican cada habitación.",
        "categories": [
          "Habitación A",
          "Habitación B"
        ],
        "items": [
          {
            "text": "Agua incluida en el alquiler de 340 euros.",
            "cat": 0
          },
          {
            "text": "Jardín y cuatro personas con quienes compartir.",
            "cat": 1
          },
          {
            "text": "Cuarta planta sin ascensor.",
            "cat": 0
          },
          {
            "text": "La parada queda a quince minutos.",
            "cat": 1
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Vuelve al texto: interpreta estas dos frases y relaciona sus formas con el propósito del mensaje.",
      "items": [
        {
          "quote": "Habitación A: 340 euros al mes, agua incluida.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Habitación B: 290 euros al mes, más agua y electricidad.",
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
              "Este",
              "piso",
              "es",
              "menos",
              "caro",
              "que",
              "el",
              "del",
              "centro."
            ]
          },
          {
            "words": [
              "Es",
              "la",
              "casa",
              "más",
              "luminosa",
              "de",
              "las",
              "tres."
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
              "¿Qué color tiene el jardín?",
              "¿Cuánto pagan normalmente de agua y electricidad?",
              "La elijo sin conocer ningún gasto."
            ],
            "answer": 1,
            "why": "Comprueba el contexto y los datos de la escena: ¿Cuánto pagan normalmente de agua y electricidad?.",
            "context": "B parece barata, pero no incluye los gastos.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Negocia la elección con tu compañero: él prefiere espacio y tú transporte. Pregunta por su prioridad y busca una condición aceptable para ambos.",
            "q": "En esta interacción de «¿En qué barrio vivir?», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «¿En qué barrio vivir?», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, Celia.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Negocia la elección con tu compañero: él prefiere espacio y tú transporte. Pregunta por su prioridad y busca una condición aceptable para ambos.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-05",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 5. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 7: Crea una nueva cartela para un objeto familiar. Cuenta cómo lo has encontrado, un hecho con fecha y una costumbre de su dueño. Tu pareja lee la cartela en voz alta y tú identificas qué era habitual y qué ocurrió una sola vez. Corrige después un tiempo que no encaje.",
            "model": "Esta semana he encontrado una taza. Mi tío la compró en 1998. Antes la usaba todos los domingos cuando desayunaba con sus vecinos.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 5→7: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Esta semana he encontrado una taza. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Escribe a una futura compañera de piso. Compara los dos anuncios, explica tu elección provisional y formula dos preguntas antes de reservar. No inventes gastos que los anuncios no indican.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Este piso es menos caro que el del centro.",
      "Hay tantas tiendas como en mi barrio.",
      "Es la casa más luminosa de las tres.",
      "El dormitorio es pequeñísimo, pero el transporte es mejor."
    ],
    "model": [
      "Hola, Celia. He visitado las dos habitaciones. La del centro es más pequeña que la del parque, pero está mejor comunicada. Cuesta cincuenta euros más, aunque incluye el agua. Creo que es más cómoda para nuestro horario porque volvemos tarde del trabajo. Todavía quiero preguntar si la electricidad está incluida y si podemos usar la mesa del salón para estudiar. La casa del parque tiene más espacio, pero el último autobús sale demasiado pronto. También podemos preguntar a las personas que viven allí cómo es el ruido por la noche."
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
        "prompt": "Recomienda una de las habitaciones a una persona que trabaja por la noche y otra a quien necesita jardín. Justifica cada recomendación con dos datos.",
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
        "prompt": "Negocia la elección con tu compañero: él prefiere espacio y tú transporte. Pregunta por su prioridad y busca una condición aceptable para ambos.",
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
        "task": "Recomienda una de las habitaciones a una persona que trabaja por la noche y otra a quien necesita jardín. Justifica cada recomendación con dos datos."
      },
      {
        "move": "Negocia",
        "task": "Negocia la elección con tu compañero: él prefiere espacio y tú transporte. Pregunta por su prioridad y busca una condición aceptable para ambos."
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
        "q": "La habitación azul es tan luminosa ___ la verde.",
        "answers": [
          [
            "como"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Esta casa tiene ___ ventanas como la tuya. (igual número)",
        "answers": [
          [
            "tantas"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Este barrio es más peor que el otro.",
        "answers": [
          "Este barrio es peor que el otro."
        ],
        "why": "Peor ya es comparativo; no necesita más."
      },
      {
        "type": "order",
        "words": [
          "Es",
          "el",
          "piso",
          "más",
          "barato",
          "del",
          "edificio."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué dato necesitas para comparar el coste completo?",
        "options": [
          "El color del escritorio",
          "Los gastos de electricidad"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué inconveniente tiene la habitación de arriba?",
        "options": [
          "Cuesta más",
          "Es menor",
          "No tiene ventanas"
        ],
        "answer": 0,
        "why": "Comprueba el contexto y los datos de la escena: Cuesta más.",
        "type": "listen",
        "audio": "La habitación de arriba es mayor, pero cuesta más."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 7: Recomienda una de las habitaciones a una persona que trabaja por la noche y otra a quien necesita jardín. Justifica cada recomendación con dos datos.",
        "model": "Hola, Celia. He visitado las dos habitaciones. La del centro es más pequeña que la del parque, pero está mejor comunicada. Cuesta cincuenta euros más, aunque incluye el agua. Creo que es más cómoda para nuestro horario porque volvemos tarde del trabajo. Todavía quiero preguntar si la electricidad está incluida y si podemos usar la mesa del salón para estudiar. La casa del parque tiene más espacio, pero el último autobús sale demasiado pronto. También podemos preguntar a las personas que viven allí cómo es el ruido por la noche.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 7: Negocia la elección con tu compañero: él prefiere espacio y tú transporte. Pregunta por su prioridad y busca una condición aceptable para ambos. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Comparar viviendas y barrios y elegir según necesidades y presupuesto.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «¿En qué barrio vivir?» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
