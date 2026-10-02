import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w06: Module = {
  "id": "a2-06",
  "level": "a2",
  "week": 6,
  "kind": "core",
  "title": "La mochila equivocada",
  "subtitle": "Contar un imprevisto con contexto, hechos y una solución fácil de seguir.",
  "stop": {
    "place": "Antigua",
    "country": "Guatemala"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.indefinido-imperfecto",
    "a2.disc.secuenciar",
    "a2.voc.anecdotas",
    "a2.pron.grupos-fonicos",
    "a2.fun.anecdota",
    "a2.spk.anecdota"
  ],
  "reviewObjectives": [
    "a2.gram.imperfecto",
    "a2.gram.soler",
    "a2.voc.infancia",
    "a2.pron.s-aspirada",
    "a2.fun.comparar-antes",
    "a2.wri.recuerdo"
  ],
  "prerequisites": [
    "a2-05"
  ],
  "goal": {
    "canDo": "Puedo contar un imprevisto con contexto, hechos y una solución fácil de seguir.",
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
        "heading": "La mochila equivocada · formas que necesitas",
        "body": [
          "El imperfecto prepara la escena: hacía calor, esperábamos, la estación estaba llena. El indefinido presenta lo que ocurrió: llegó el autobús, perdí la mochila, una mujer me ayudó. Una misma historia necesita ambos. No decidas solo por la duración: trabajó allí veinte años puede presentar una etapa terminada."
        ],
        "support": [
          "The imperfect sets the scene; the preterite moves the story forward. A long event can still be presented as completed."
        ],
        "examples": [
          {
            "es": "Esperábamos en la estación cuando llegó otro autobús."
          },
          {
            "es": "Hacía calor y yo llevaba una mochila azul."
          }
        ],
        "mistakes": [
          {
            "wrong": "Mientras esperaba, perdía la mochila una vez.",
            "right": "Mientras esperaba, perdí la mochila.",
            "why": "La pérdida se presenta como un hecho concreto dentro de una escena."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Primero y después ordenan; mientras introduce dos acciones simultáneas o un fondo; de repente destaca una sorpresa; al final anuncia el resultado. Una reacción breve muestra interés: ¡qué susto!, ¿y qué pasó después? Para reparar una historia poco clara, repite quién hizo la acción y dónde ocurrió."
        ],
        "examples": [
          {
            "es": "De repente, una mujer gritó mi nombre."
          },
          {
            "es": "Al final encontramos mi bolsa debajo del asiento."
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
            "q": "Cuando salí, ___ mucho. (llover, contexto)",
            "answers": [
              [
                "llovía"
              ]
            ]
          },
          {
            "q": "De repente la puerta se ___. (cerrar)",
            "answers": [
              [
                "cerró"
              ]
            ]
          },
          {
            "q": "Mientras esperaba, mi vecina ___ la copia. (encontrar)",
            "answers": [
              [
                "encontró"
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
            "source": "La estación estaba llena. Perdí el billete.",
            "instruction": "Mantén primero la descripción La estación estaba llena y enlaza después el hecho con cuando. No añadas otras palabras.",
            "answers": [
              "La estación estaba llena cuando perdí el billete."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Busqué en la mochila. Encontré la llave.",
            "instruction": "Empieza con Primero busqué y une la segunda acción mediante y después; conserva los complementos.",
            "answers": [
              "Primero busqué en la mochila y después encontré la llave."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Yo esperaba a mi amiga. Ella llegó.",
            "instruction": "Empieza con Mientras y conserva las dos acciones y sus pronombres en el mismo orden. Usa una coma entre las partes.",
            "answers": [
              "Mientras yo esperaba a mi amiga, ella llegó."
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
            "es": "perder una mochila",
            "en": "lose a backpack"
          },
          {
            "es": "olvidar un documento",
            "en": "forget a document"
          },
          {
            "es": "confundirse de puerta",
            "en": "go to the wrong gate"
          },
          {
            "es": "encontrarse con alguien",
            "en": "run into someone"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "darse cuenta",
            "en": "realise"
          },
          {
            "es": "romperse una rueda",
            "en": "have a wheel break"
          },
          {
            "es": "pedir ayuda",
            "en": "ask for help"
          },
          {
            "es": "llevarse un susto",
            "en": "get a fright"
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
            "left": "perder una mochila",
            "right": "lose a backpack"
          },
          {
            "left": "olvidar un documento",
            "right": "forget a document"
          },
          {
            "left": "confundirse de puerta",
            "right": "go to the wrong gate"
          },
          {
            "left": "encontrarse con alguien",
            "right": "run into someone"
          },
          {
            "left": "darse cuenta",
            "right": "realise"
          },
          {
            "left": "romperse una rueda",
            "right": "have a wheel break"
          },
          {
            "left": "pedir ayuda",
            "right": "ask for help"
          },
          {
            "left": "llevarse un susto",
            "right": "get a fright"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas que ordenan una historia",
    "explanation": [
      "No pares después de cada palabra. Agrupa el contexto, el acontecimiento y el resultado en unidades de sentido. Una pausa breve después de de repente prepara al oyente, pero no separes el auxiliar de su verbo ni un artículo de su nombre."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Primero busqué la llave. Después llamé a Ana.",
          "q": "¿Qué ocurrió primero?",
          "options": [
            "Buscar la llave",
            "Llamar a Ana"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Mientras esperaba, empezó a llover.",
          "q": "¿Qué acción ya estaba en curso?",
          "options": [
            "Esperar",
            "Empezar a llover"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Hacía mucho calor / y esperábamos en la plaza.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "De repente / llegó un autobús vacío.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Al final / todo quedó en una anécdota.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "La llave estaba dentro",
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
        "text": "Ayer me pasó algo bastante tonto. Salí de casa para bajar la basura. Llevaba una bolsa en cada mano y la puerta se cerró detrás de mí. La llave estaba dentro."
      },
      {
        "speaker": "b",
        "text": "¡Qué problema! ¿Tenías el teléfono? Yo siempre lo llevo, pero a veces dejo las llaves sobre la mesa. ¿Pudiste llamar a alguien de tu familia?"
      },
      {
        "speaker": "a",
        "text": "No tenía nada. Primero llamé a la puerta de mi vecina. Ella estaba cocinando y me prestó su móvil. Llamé a mi hermano, pero trabajaba lejos y no podía venir."
      },
      {
        "speaker": "b",
        "text": "¿Y cómo entraste? Espera, creo que tu vecina tenía otra llave, ¿no? Una vez me dijiste que se la diste cuando saliste de viaje."
      },
      {
        "speaker": "a",
        "text": "Exacto. Mientras hablábamos, ella lo recordó. Buscó en un cajón y encontró la llave. Al final solo esperé diez minutos. Hoy he preparado una copia para llevar en la mochila."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «La llave estaba dentro» y reconoce la intención.",
          "items": [
            {
              "q": "¿Cuál fue el problema?",
              "options": [
                "La persona se quedó fuera de casa",
                "Se perdió la basura",
                "El hermano olvidó el teléfono"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La persona se quedó fuera de casa»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué tipo de relato escucha la segunda persona?",
              "options": [
                "Un problema cotidiano resuelto",
                "Una descripción de todas las habitaciones",
                "Unas instrucciones para fabricar una llave"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Un problema cotidiano resuelto."
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
          "prompt": "Localiza dos datos concretos en «La llave estaba dentro».",
          "items": [
            {
              "q": "¿Qué hacía la vecina?",
              "options": [
                "Trabajaba lejos",
                "Buscaba un autobús",
                "Cocinaba"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Cocinaba»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Quién tenía una copia?",
              "options": [
                "El hermano en su oficina",
                "La vecina",
                "El conductor"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «La vecina»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «La llave estaba dentro».",
          "items": [
            {
              "q": "Mientras hablábamos introduce…",
              "options": [
                "Un plan de mañana",
                "El contexto en que recordó la llave",
                "El resultado final"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El contexto en que recordó la llave»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué expresión muestra que la solución llegó?",
              "options": [
                "Primero llamé a la puerta",
                "No tenía nada",
                "Al final solo esperé diez minutos"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Al final solo esperé diez minutos."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "No era mi bolsa",
    "genre": "Anécdota de viaje",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "El autobús estaba lleno y llovía mucho. Yo viajaba a casa de una amiga y llevaba una bolsa gris con un regalo. Cuando llegamos a la parada, una familia bajó antes que yo. Tenían muchas maletas y el conductor les ayudó. Después bajé, recogí mi bolsa y caminé hasta una cafetería para esperar a mi amiga.",
      "Mientras esperaba, abrí la bolsa para buscar el regalo. Dentro había unos zapatos enormes y un abrigo. No era mi bolsa. Primero llamé a la empresa de autobuses, pero nadie contestó. Después volví a la parada. Allí estaba un hombre con otra bolsa gris. Parecía preocupado y miraba su teléfono. Le pregunté si buscaba unos zapatos. Él se rio y me mostró mi regalo. Al final cambiamos las bolsas y tomamos un café. Desde ese día pongo una cinta de color en mi equipaje."
    ],
    "glossary": [
      {
        "es": "perder una mochila",
        "en": "lose a backpack"
      },
      {
        "es": "olvidar un documento",
        "en": "forget a document"
      },
      {
        "es": "confundirse de puerta",
        "en": "go to the wrong gate"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «No era mi bolsa» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Cuándo descubrió el error el narrador?",
            "options": [
              "Al abrir la bolsa en la cafetería",
              "Antes de bajar del autobús",
              "Al llegar a casa de su amiga"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Al abrir la bolsa en la cafetería»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué hizo después de llamar a la empresa?",
            "options": [
              "Compró zapatos",
              "Esperó a la familia",
              "Volvió a la parada"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Volvió a la parada»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «No era mi bolsa» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Contar un imprevisto con contexto, hechos y una solución fácil de seguir. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "El autobús estaba lleno y llovía mucho.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Mientras esperaba, abrí la bolsa para buscar el regalo.",
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
              "Esperábamos",
              "en",
              "la",
              "estación",
              "cuando",
              "llegó",
              "otro",
              "autobús."
            ]
          },
          {
            "words": [
              "De",
              "repente,",
              "una",
              "mujer",
              "gritó",
              "mi",
              "nombre."
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
              "Estaba lloviendo y hacía frío.",
              "Sí, al final y primero y después.",
              "El hombre que esperaba en la parada tenía mi bolsa."
            ],
            "answer": 2,
            "why": "Comprueba el contexto y los datos de la escena: El hombre que esperaba en la parada tenía mi bolsa..",
            "context": "El oyente no sabe quién encontró la bolsa.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Tu compañero interrumpe con ¿quién estaba allí? y ¿qué pasó después? Responde sin reiniciar toda la historia y termina con la solución.",
            "q": "En esta interacción de «La mochila equivocada», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «La mochila equivocada», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "El martes llovía y yo esperaba el autobús para ir a clase.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Tu compañero interrumpe con ¿quién estaba allí? y ¿qué pasó después? Responde sin reiniciar toda la historia y termina con la solución.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-04",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 4. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 6: Describe un colegio de antes y compáralo con uno actual. Usa era, iba, veía, solía y suelo; incluye juegos, habitación o patio y dos costumbres. Escribe un recuerdo de cuatro frases. Al oír una palabra poco clara, confirma singular o plural por el contexto y pide repetición; explica por qué un audio sintético no prueba una s regional.",
            "model": "Mi colegio era pequeño. Iba andando y veía a mis amigos en la plaza. Solíamos jugar en el patio. Ahora suelo leer en una biblioteca. ¿Has dicho los patios o el patio?",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 4→6: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Mi colegio era pequeño. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Cuenta un pequeño imprevisto a una persona que no estaba allí. Da el contexto, explica tres acciones y termina con la solución. Puedes inventar el problema.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Esperábamos en la estación cuando llegó otro autobús.",
      "Hacía calor y yo llevaba una mochila azul.",
      "De repente, una mujer gritó mi nombre.",
      "Al final encontramos mi bolsa debajo del asiento."
    ],
    "model": [
      "El martes llovía y yo esperaba el autobús para ir a clase. Llevaba una carpeta con mis apuntes. Cuando llegó el autobús, subí muy rápido y dejé la carpeta en el banco. Me di cuenta dos paradas después. Primero llamé a una compañera que vivía cerca. Ella fue a la parada y encontró la carpeta debajo de un periódico. Al final llegué tarde a clase, pero recuperé todos mis apuntes. Ahora siempre compruebo el banco antes de subir. Fue un problema pequeño, pero aprendí a salir con menos prisa."
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
        "prompt": "Cuenta en un minuto un imprevisto. Amplía después treinta segundos con el contexto y una reacción de otra persona.",
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
        "prompt": "Tu compañero interrumpe con ¿quién estaba allí? y ¿qué pasó después? Responde sin reiniciar toda la historia y termina con la solución.",
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
        "task": "Cuenta en un minuto un imprevisto. Amplía después treinta segundos con el contexto y una reacción de otra persona."
      },
      {
        "move": "Negocia",
        "task": "Tu compañero interrumpe con ¿quién estaba allí? y ¿qué pasó después? Responde sin reiniciar toda la historia y termina con la solución."
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
        "q": "Mientras yo ___, sonó el teléfono. (dormir)",
        "answers": [
          [
            "dormía"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Al final Ana ___ la dirección. (encontrar)",
        "answers": [
          [
            "encontró"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "De repente, el conductor abría la puerta y bajé.",
        "answers": [
          "De repente, el conductor abrió la puerta y bajé."
        ],
        "why": "De repente presenta aquí el hecho que hace avanzar la historia: abrió."
      },
      {
        "type": "order",
        "words": [
          "La",
          "calle",
          "estaba",
          "vacía",
          "cuando",
          "llegamos."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué expresión presenta el resultado?",
        "options": [
          "Al final",
          "Mientras tanto"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Dónde estaban cuando empezó a llover?",
        "options": [
          "En una tienda",
          "Bajo un árbol",
          "Dentro de un autobús"
        ],
        "answer": 1,
        "why": "Comprueba el contexto y los datos de la escena: Bajo un árbol.",
        "type": "listen",
        "audio": "Esperábamos bajo un árbol cuando empezó la tormenta."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 6: Cuenta en un minuto un imprevisto. Amplía después treinta segundos con el contexto y una reacción de otra persona.",
        "model": "El martes llovía y yo esperaba el autobús para ir a clase. Llevaba una carpeta con mis apuntes. Cuando llegó el autobús, subí muy rápido y dejé la carpeta en el banco. Me di cuenta dos paradas después. Primero llamé a una compañera que vivía cerca. Ella fue a la parada y encontró la carpeta debajo de un periódico. Al final llegué tarde a clase, pero recuperé todos mis apuntes. Ahora siempre compruebo el banco antes de subir. Fue un problema pequeño, pero aprendí a salir con menos prisa.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 6: Tu compañero interrumpe con ¿quién estaba allí? y ¿qué pasó después? Responde sin reiniciar toda la historia y termina con la solución. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Contar un imprevisto con contexto, hechos y una solución fácil de seguir.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «La mochila equivocada» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
