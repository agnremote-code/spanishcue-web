import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w04: Module = {
  "id": "a2-04",
  "level": "a2",
  "week": 4,
  "kind": "core",
  "title": "Antes, en nuestra calle",
  "subtitle": "Describir hábitos de infancia y comparar una vivienda de antes con la actual.",
  "stop": {
    "place": "León",
    "country": "Nicaragua"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.imperfecto",
    "a2.gram.soler",
    "a2.voc.infancia",
    "a2.pron.s-aspirada",
    "a2.fun.comparar-antes",
    "a2.wri.recuerdo"
  ],
  "reviewObjectives": [
    "a2.gram.indefinido-regular",
    "a2.gram.marcadores-pasado",
    "a2.voc.fin-de-semana",
    "a2.pron.acento-tiempos",
    "a2.fun.contar-ayer",
    "a2.lis.relato-breve",
    "a2.gram.indefinido-ortografia"
  ],
  "prerequisites": [
    "a2-03"
  ],
  "goal": {
    "canDo": "Puedo describir hábitos de infancia y comparar una vivienda de antes con la actual.",
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
        "heading": "Antes, en nuestra calle · formas que necesitas",
        "body": [
          "El imperfecto presenta hábitos y descripciones del pasado: jugaba, comía, vivía. Para -ar: -aba, -abas, -aba, -ábamos, -abais, -aban. Para -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían. Tres formas frecuentes irregulares son era, iba y veía. No importa aquí el inicio o final de la costumbre."
        ],
        "support": [
          "The imperfect describes what life was like and what people used to do. Solía is followed by an infinitive, not a second conjugated verb."
        ],
        "examples": [
          {
            "es": "Antes vivíamos en una casa con patio."
          },
          {
            "es": "Solíamos jugar en la calle después del colegio."
          }
        ],
        "mistakes": [
          {
            "wrong": "Antes yo solía jugaba aquí.",
            "right": "Antes yo solía jugar aquí.",
            "why": "Después de solía se usa infinitivo, no otra forma conjugada."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Antes y de pequeño sitúan el recuerdo. Solía + infinitivo presenta un hábito pasado; suelo + infinitivo habla de uno actual. Para comparar, organiza un párrafo de antes y otro de ahora. En diferentes variedades puede debilitarse la s final: usa las otras palabras y pide repetición. La síntesis de esta lección no demuestra una variedad regional."
        ],
        "examples": [
          {
            "es": "Mi escuela era pequeña y yo iba andando."
          },
          {
            "es": "Ahora suelo leer en una biblioteca más grande."
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
            "q": "De pequeña yo ___ muchos cuentos. (leer)",
            "answers": [
              [
                "leía"
              ]
            ]
          },
          {
            "q": "Nosotros ___ al colegio juntos. (ir)",
            "answers": [
              [
                "íbamos"
              ]
            ]
          },
          {
            "q": "Antes la calle ___ tranquila. (ser)",
            "answers": [
              [
                "era"
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
            "source": "Ahora suelo pasear por el patio.",
            "instruction": "Sustituye Ahora por Antes y suelo por solía; conserva el resto.",
            "answers": [
              "Antes solía pasear por el patio."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Ellos viven cerca del colegio.",
            "instruction": "Pon Antes al principio, cambia viven al imperfecto y conserva cerca del colegio. Puedes mantener ellos o dejarlo implícito.",
            "answers": [
              "Antes vivían cerca del colegio.",
              "Antes ellos vivían cerca del colegio."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Yo veía a mi abuela los domingos.",
            "instruction": "Sustituye Yo por Nosotros y ajusta el verbo; conserva el resto en el mismo orden.",
            "answers": [
              "Nosotros veíamos a mi abuela los domingos."
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
            "es": "un patio compartido",
            "en": "a shared courtyard"
          },
          {
            "es": "jugar al escondite",
            "en": "play hide-and-seek"
          },
          {
            "es": "ir al colegio andando",
            "en": "walk to school"
          },
          {
            "es": "hacer los deberes",
            "en": "do homework"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "compartir habitación",
            "en": "share a bedroom"
          },
          {
            "es": "tener vecinos cerca",
            "en": "have neighbours nearby"
          },
          {
            "es": "una calle tranquila",
            "en": "a quiet street"
          },
          {
            "es": "recordar la infancia",
            "en": "remember childhood"
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
            "left": "un patio compartido",
            "right": "a shared courtyard"
          },
          {
            "left": "jugar al escondite",
            "right": "play hide-and-seek"
          },
          {
            "left": "ir al colegio andando",
            "right": "walk to school"
          },
          {
            "left": "hacer los deberes",
            "right": "do homework"
          },
          {
            "left": "compartir habitación",
            "right": "share a bedroom"
          },
          {
            "left": "tener vecinos cerca",
            "right": "have neighbours nearby"
          },
          {
            "left": "una calle tranquila",
            "right": "a quiet street"
          },
          {
            "left": "recordar la infancia",
            "right": "remember childhood"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Finales de palabra y petición de repetición",
    "explanation": [
      "La s final puede sonar de maneras distintas en el mundo hispánico. No imites una transcripción inventada como si fuera un acento verificado. En este audio sintético identifica primero singular y plural por toda la frase; con tu profesor escucha después ejemplos reales y pide confirmación cuando lo necesites."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Las calles eran tranquilas.",
          "q": "¿Habla de una o de varias calles?",
          "options": [
            "Varias",
            "Una"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "La casa tenía un patio.",
          "q": "¿Cuántas casas menciona?",
          "options": [
            "Una",
            "Varias"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Los patios eran grandes.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "¿Has dicho la casa o las casas?",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "¿Puedes repetir más despacio, por favor?",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Dos patios diferentes",
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
        "text": "¿Cómo era tu colegio? El mío tenía un patio pequeño y compartíamos el espacio con los alumnos mayores. Solíamos jugar con una pelota de tela porque las otras estaban prohibidas."
      },
      {
        "speaker": "b",
        "text": "El mío estaba cerca de un mercado. Íbamos andando y comprábamos fruta a la salida. Tenía una biblioteca, pero solo abría dos días a la semana. Yo solía llevarme cuentos de animales."
      },
      {
        "speaker": "a",
        "text": "Nosotros no teníamos biblioteca. La profesora traía una caja de libros y cada viernes elegíamos uno. En casa mi hermana me lo leía porque yo todavía leía muy despacio."
      },
      {
        "speaker": "b",
        "text": "Ahora mi hija tiene una biblioteca enorme en su escuela. Suele elegir historias de viajes. Algunas cosas han cambiado, pero seguimos leyendo juntos por la noche. Eso me recuerda las tardes de mi infancia."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Dos patios diferentes» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué comparan las personas?",
              "options": [
                "Dos mercados actuales",
                "El precio de los libros",
                "Sus colegios y hábitos de lectura"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Sus colegios y hábitos de lectura»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué tema une pasado y presente?",
              "options": [
                "La compra de un colegio",
                "La construcción de un mercado",
                "La lectura compartida"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: La lectura compartida."
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
          "prompt": "Localiza dos datos concretos en «Dos patios diferentes».",
          "items": [
            {
              "q": "¿Cuándo elegían un libro de la caja?",
              "options": [
                "Los lunes",
                "Los viernes",
                "Todos los días"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Los viernes»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué hacía la hermana?",
              "options": [
                "Leía el libro en voz alta",
                "Vendía libros",
                "Abría la biblioteca"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Leía el libro en voz alta»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Dos patios diferentes».",
          "items": [
            {
              "q": "Solíamos jugar expresa…",
              "options": [
                "Una costumbre pasada",
                "Una decisión de mañana",
                "Un único partido"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Una costumbre pasada»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué forma cambia el foco al presente?",
              "options": [
                "Solíamos jugar",
                "Ahora mi hija tiene",
                "Teníamos biblioteca"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Ahora mi hija tiene."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La foto de la casa amarilla",
    "genre": "Recuerdo personal",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "En esta foto tengo ocho años y estoy delante de la casa de mi abuela. La puerta era amarilla y había un árbol enorme junto a la ventana. Mi hermana y yo solíamos pasar allí las vacaciones. Dormíamos en la misma habitación y nos levantábamos temprano porque los pájaros hacían mucho ruido. Después del desayuno ayudábamos a mi abuela en el patio. Ella cultivaba tomates y nos dejaba recoger los que estaban rojos.",
      "Por las tardes jugábamos al escondite con los niños de la calle. No teníamos ordenador, pero siempre encontrábamos algo que hacer. Cuando llovía, dibujábamos en la cocina. Ahora la casa pertenece a otra familia y el árbol ya no está. La calle tiene más coches y menos niños. Yo vivo en un piso pequeño y suelo comprar los tomates en el mercado. Sin embargo, cada verano preparo una ensalada como la que hacía mi abuela."
    ],
    "glossary": [
      {
        "es": "un patio compartido",
        "en": "a shared courtyard"
      },
      {
        "es": "jugar al escondite",
        "en": "play hide-and-seek"
      },
      {
        "es": "ir al colegio andando",
        "en": "walk to school"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «La foto de la casa amarilla» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Por qué se levantaban temprano?",
            "options": [
              "Para coger un autobús",
              "Porque tenían clase",
              "Por el ruido de los pájaros"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Por el ruido de los pájaros»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué mantiene ahora la narradora?",
            "options": [
              "El árbol de la casa",
              "Una receta familiar",
              "La habitación compartida"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Una receta familiar»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «La foto de la casa amarilla» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Describir hábitos de infancia y comparar una vivienda de antes con la actual. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "En esta foto tengo ocho años y estoy delante de la casa de mi abuela.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Por las tardes jugábamos al escondite con los niños de la calle.",
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
              "Antes",
              "vivíamos",
              "en",
              "una",
              "casa",
              "con",
              "patio."
            ]
          },
          {
            "words": [
              "Mi",
              "escuela",
              "era",
              "pequeña",
              "y",
              "yo",
              "iba",
              "andando."
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
              "Ahora solía leer mañana.",
              "Antes solía dibujar en el patio; ahora suelo leer en casa.",
              "Ayer solía dibujar una sola vez."
            ],
            "answer": 1,
            "why": "Comprueba el contexto y los datos de la escena: Antes solía dibujar en el patio; ahora suelo leer en casa..",
            "context": "Quieres distinguir un hábito de infancia de tu vida actual.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Tu compañero no entiende si hablas de una casa o de varias. Reformula y confirma el dato. Luego pregúntale por un juego de su infancia.",
            "q": "En esta interacción de «Antes, en nuestra calle», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Antes, en nuestra calle», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "De pequeña pasaba las tardes en la tienda de mi tía.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Tu compañero no entiende si hablas de una casa o de varias. Reformula y confirma el dato. Luego pregúntale por un juego de su infancia.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-02",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 2. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 4: Sin mirar la semana 2, relata otro domingo con desayunar, caminar, comer, recibir y salir. Incluye ayer o hace dos días y ordena cuatro hechos. Compara hablo/habló en voz alta. Tu compañero escucha y reconstruye el orden; explica por qué esta mañana puede combinarse con tiempos distintos según la variedad y el contexto. Añade tres acciones con buscar, llegar y empezar en primera persona del pasado.",
            "model": "Hace dos días desayuné temprano, caminé hasta el puerto, comí con una amiga y recibí una llamada. Después salí hacia casa. Hoy hablo del viaje; ayer habló mi amiga. Busqué la dirección, llegué temprano y empecé la visita.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 2→4: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Hace dos días desayuné temprano, caminé hasta el puerto, comí con una amiga y recibí una llamada. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Describe un lugar de tu infancia para una persona que nunca lo conoció. Cuenta dos costumbres y compáralo con un lugar de tu vida actual.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Antes vivíamos en una casa con patio.",
      "Solíamos jugar en la calle después del colegio.",
      "Mi escuela era pequeña y yo iba andando.",
      "Ahora suelo leer en una biblioteca más grande."
    ],
    "model": [
      "De pequeña pasaba las tardes en la tienda de mi tía. Era estrecha y tenía una ventana grande. Mi tía vendía cuadernos y yo solía ordenar los lápices por colores. Cuando no había clientes, dibujábamos juntas. Ahora estudio en una biblioteca moderna, con mesas grandes y mucha luz. Suelo llevar mis propios lápices. La biblioteca es más cómoda, pero todavía recuerdo el olor de los cuadernos nuevos de aquella tienda."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      60,
      100
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Describe tu antigua casa o una casa inventada: habitaciones, personas y dos hábitos. Después compara un detalle con tu vivienda actual.",
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
        "prompt": "Tu compañero no entiende si hablas de una casa o de varias. Reformula y confirma el dato. Luego pregúntale por un juego de su infancia.",
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
        "task": "Describe tu antigua casa o una casa inventada: habitaciones, personas y dos hábitos. Después compara un detalle con tu vivienda actual."
      },
      {
        "move": "Negocia",
        "task": "Tu compañero no entiende si hablas de una casa o de varias. Reformula y confirma el dato. Luego pregúntale por un juego de su infancia."
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
        "q": "Antes ustedes ___ cerca del río. (vivir)",
        "answers": [
          [
            "vivían"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Mi abuelo ___ al mercado cada día. (ir)",
        "answers": [
          [
            "iba"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "De niña solía leía cuentos.",
        "answers": [
          "De niña solía leer cuentos."
        ],
        "why": "Solía se combina con infinitivo: leer."
      },
      {
        "type": "order",
        "words": [
          "La",
          "cocina",
          "era",
          "pequeña",
          "y",
          "luminosa."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué frase presenta un hábito actual?",
        "options": [
          "Suelo caminar por el parque",
          "Solía caminar por el parque"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Con qué frecuencia veían a los vecinos?",
        "options": [
          "Todas las tardes",
          "Una sola tarde",
          "Solo por la mañana"
        ],
        "answer": 0,
        "why": "Comprueba el contexto y los datos de la escena: Todas las tardes.",
        "type": "listen",
        "audio": "Antes veíamos a nuestros vecinos todas las tardes."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 4: Describe tu antigua casa o una casa inventada: habitaciones, personas y dos hábitos. Después compara un detalle con tu vivienda actual.",
        "model": "De pequeña pasaba las tardes en la tienda de mi tía. Era estrecha y tenía una ventana grande. Mi tía vendía cuadernos y yo solía ordenar los lápices por colores. Cuando no había clientes, dibujábamos juntas. Ahora estudio en una biblioteca moderna, con mesas grandes y mucha luz. Suelo llevar mis propios lápices. La biblioteca es más cómoda, pero todavía recuerdo el olor de los cuadernos nuevos de aquella tienda.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 4: Tu compañero no entiende si hablas de una casa o de varias. Reformula y confirma el dato. Luego pregúntale por un juego de su infancia. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Describir hábitos de infancia y comparar una vivienda de antes con la actual.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Antes, en nuestra calle» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
