import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w07: Module = {
  "id": "c2-07",
  "level": "c2",
  "week": 7,
  "kind": "core",
  "title": "Descomprimir una idea",
  "subtitle": "Sintaxis compleja, nominalización y jerarquía informativa",
  "stop": {
    "place": "Quito",
    "country": "Ecuador"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.read.prosa-densa",
    "c2.gram.sintaxis-compleja",
    "c2.voc.conectores-cultos",
    "c2.pron.lectura-densa",
    "c2.wri.abstract"
  ],
  "reviewObjectives": [
    "c2.disc.cambio-registro",
    "c2.voc.lenguaje-juridico",
    "c2.gram.futuro-subjuntivo-juridico",
    "c2.pron.registro-voz",
    "c2.wri.traduccion-registro",
    "c2.disc.recursos-retoricos",
    "c2.voc.lexico-persuasivo",
    "c2.pron.oratoria",
    "c2.lis.discurso-politico",
    "c2.spk.discurso-breve"
  ],
  "prerequisites": [
    "c2-06"
  ],
  "goal": {
    "canDo": "Puedo descomprimir prosa metodológica sin convertir correlación en causalidad ni cautela en inutilidad.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica sintaxis compleja, nominalización y jerarquía informativa a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Sintaxis compleja, nominalización y jerarquía informativa",
        "body": [
          "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados.",
          "En este caso, El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado.",
          "Empero marca contraste en un registro formal o literario y no resulta necesario cuando pero cumple la función. A la sazón sitúa un hecho en el tiempo del relato, no introduce una consecuencia. Así las cosas comenta la situación para avanzar una decisión. No en vano ofrece una justificación. Prueba: «A la sazón no había catálogo; así las cosas, cada consulta exigía una búsqueda manual». La precisión exige distinguir función y efecto de registro."
        ],
        "examples": [
          {
            "es": "La mejora observada no permite atribuir el cambio al programa."
          },
          {
            "es": "Aunque la muestra sea pequeña, el contraste aporta información."
          },
          {
            "es": "La evaluación de la aplicación exige identificar quién aplicó cada medida."
          }
        ],
        "mistakes": [
          {
            "wrong": "Los datos permiten de concluir que hubo más consultas.",
            "right": "Los datos permiten concluir que hubo más consultas.",
            "why": "Permitir seguido de infinitivo no lleva la preposición de."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "Una cautela metodológica no equivale a una recomendación de retirar el servicio. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: Respondieron sesenta de las doscientas personas invitadas. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "El nuevo horario explica por sí solo todo el aumento.",
            "note": "Lectura excesiva que el dossier no respalda."
          }
        ],
        "tip": "La mascota te invita a conservar una duda productiva: llévala a clase junto con una prueba, no con una impresión aislada."
      }
    ]
  },
  "grammar": {
    "intro": "Relaciona forma y efecto comunicativo en el expediente; la explicación importa tanto como la respuesta.",
    "exercises": [
      {
        "id": "c2-07-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Descomprimir una idea.",
        "items": [
          {
            "q": "En el caso de Descomprimir una idea, ¿qué formulación preserva el alcance?",
            "options": [
              "Aunque la muestra sea pequeña, el contraste aporta información.",
              "La falta de causalidad probada demuestra que el programa no sirve."
            ],
            "answer": 0,
            "why": "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Descomprimir una idea?",
            "options": [
              "Una cautela metodológica no equivale a una recomendación de retirar el servicio.",
              "El nuevo horario explica por sí solo todo el aumento."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-07-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Descomprimir una idea.",
        "items": [
          {
            "q": "El aumento no demuestra ___ sí solo una causa.",
            "answers": [
              [
                "por"
              ]
            ],
            "why": "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados."
          },
          {
            "q": "La evaluación depende ___ cómo se definan las consultas.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados."
          },
          {
            "q": "Con ___, la muestra aporta información descriptiva.",
            "answers": [
              [
                "todo"
              ]
            ],
            "why": "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Descomprimir una idea",
        "items": [
          {
            "es": "atribución causal",
            "note": "explicación de un efecto por una causa"
          },
          {
            "es": "sesgo de selección",
            "note": "diferencia producida por cómo se elige la muestra"
          },
          {
            "es": "correlación",
            "note": "variación conjunta sin causalidad demostrada"
          },
          {
            "es": "alcance explicativo",
            "note": "lo que una conclusión permite explicar"
          },
          {
            "es": "variable de confusión",
            "note": "factor alternativo que altera la interpretación"
          },
          {
            "es": "robustez",
            "note": "estabilidad ante cambios razonables del análisis"
          },
          {
            "es": "no en vano",
            "note": "justificación de lo recién afirmado"
          },
          {
            "es": "con todo",
            "note": "reserva que limita la conclusión anterior"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-07-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Descomprimir una idea.",
        "pairs": [
          {
            "left": "atribución causal",
            "right": "explicación de un efecto por una causa"
          },
          {
            "left": "sesgo de selección",
            "right": "diferencia producida por cómo se elige la muestra"
          },
          {
            "left": "correlación",
            "right": "variación conjunta sin causalidad demostrada"
          },
          {
            "left": "alcance explicativo",
            "right": "lo que una conclusión permite explicar"
          },
          {
            "left": "variable de confusión",
            "right": "factor alternativo que altera la interpretación"
          },
          {
            "left": "robustez",
            "right": "estabilidad ante cambios razonables del análisis"
          },
          {
            "left": "no en vano",
            "right": "justificación de lo recién afirmado"
          },
          {
            "left": "con todo",
            "right": "reserva que limita la conclusión anterior"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Lectura oral de una subordinación densa",
    "explanation": [
      "Localiza el verbo principal antes de leer. Reduce la velocidad en un inciso técnico y recupera después la curva principal; no acumules pausas que separen un nombre de su complemento.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto."
      },
      {
        "es": "Aumentaron las consultas porque el horario lo explica todo."
      }
    ],
    "perceive": {
      "id": "c2-07-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Descomprimir una idea».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Descomprimir una idea. ¿Qué contenido permite recuperar?",
          "options": [
            "Aumentaron las consultas porque el horario lo explica todo.",
            "Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Descomprimir una idea. ¿Qué formulación aparece?",
          "options": [
            "Aumentaron las consultas porque el horario lo explica todo.",
            "Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Aumentaron las consultas porque el horario lo explica todo.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Aumentaron las consultas porque el horario lo explica todo.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Descomprimir una idea",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Eva",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Andrés",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "En el borrador del resumen puse que el nuevo horario había duplicado las consultas. Después vi que el informe hablaba del total y que incluía accesos digitales. Tendré que cambiar la frase. No basta añadir probablemente, porque el problema no es solo el grado de seguridad: también es qué fenómeno estoy atribuyendo a qué intervención."
      },
      {
        "speaker": "b",
        "text": "Exacto. El catálogo nuevo y la exposición ocurrieron a la vez. Podemos afirmar que el uso registrado aumentó después de varios cambios, y especificar cuáles. Si queremos hablar de la satisfacción, debemos explicar que respondieron sesenta personas de las doscientas invitadas. No sabemos si quienes no respondieron estaban más o menos satisfechos."
      },
      {
        "speaker": "a",
        "text": "Para la asociación vecinal usaría la imagen de abrir una puerta y mover los libros. Para el resumen académico mantendría sesgo de selección y atribución causal, pero explicaría su papel. Me preocupa que tantos límites hagan parecer que el estudio no sirve. Sirve para describir y para mejorar la siguiente evaluación, aunque no resuelva por sí solo la decisión presupuestaria."
      },
      {
        "speaker": "b",
        "text": "Esa distinción debería ir en el cierre. Tampoco presentemos otro semestre de observación como garantía de que entonces sabremos todo. Aportará una comparación más útil, sobre todo si se separan las modalidades. En la presentación oral dejaría una pausa después de aumentaron las consultas y antes de eso no demuestra una causa única. La pausa ayuda a conservar las dos proposiciones; no debe hacer que la segunda suene como una rectificación que borra la primera. Separar ambas ideas exige también no perder la primera al explicar la segunda."
      },
      {
        "speaker": "a",
        "text": "La revisión de pares añade que también cambió la unidad de registro: antes una solicitud podía reunir varias reproducciones y ahora cada descarga cuenta como acceso. Tendré que separar aumento de actividad y cambio de medición. No quiero amontonar reservas sin jerarquía. Para la decisión sobre horarios priorizaré la serie de visitas presenciales, siempre que sea comparable entre periodos."
      },
      {
        "speaker": "b",
        "text": "Y explica que comparable no significa idéntica en todos sus detalles. Necesitamos saber qué diferencias afectan a la pregunta concreta. Una exposición puede reservar el procedimiento técnico para un anexo y conservar en el cuerpo la consecuencia interpretativa. Si el resumen permite entender qué decisión se apoya en qué medida, habrá descomprimido el informe sin fingir que la complejidad desapareció por completo. Para el cierre, conservaré esta distinción: El informe describe un aumento sin demostrar que el horario sea su causa exclusiva."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-07-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Descomprimir una idea",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Descomprimir una idea?",
              "options": [
                "El nuevo horario explica por sí solo todo el aumento.",
                "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Descomprimir una idea?",
              "options": [
                "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.",
                "La falta de causalidad probada demuestra que el programa no sirve."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota afirmación, condición y fuente. No copies frases todavía.",
        "exercise": {
          "id": "c2-07-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Descomprimir una idea",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Descomprimir una idea?",
              "options": [
                "Respondieron sesenta de las doscientas personas invitadas.",
                "Respondieron todas las personas invitadas."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Descomprimir una idea?",
              "options": [
                "Respondieron sesenta de las doscientas personas invitadas.",
                "La falta de causalidad probada demuestra que el programa no sirve."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Localiza una reformulación y explica qué inferencia repara. Consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "c2-07-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Descomprimir una idea",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Descomprimir una idea?",
              "options": [
                "Una cautela metodológica no equivale a una recomendación de retirar el servicio.",
                "La falta de causalidad probada demuestra que el programa no sirve."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Descomprimir una idea?",
              "options": [
                "Una cautela metodológica no equivale a una recomendación de retirar el servicio.",
                "La falta de causalidad probada demuestra que el programa no sirve."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Descomprimir una idea · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "La evaluación de la ampliación de los horarios del archivo municipal concluye que aumentaron las consultas durante el primer semestre. La formulación parece transparente hasta que se pregunta qué se contó como consulta. El informe agrupa visitas presenciales, solicitudes de reproducción y accesos al catálogo digital. Que el total crezca no implica que cada modalidad lo haga, ni que el incremento pueda atribuirse a la ampliación horaria. La unidad de medida es parte del argumento, aunque figure en una nota metodológica.",
      "Los autores comparan el semestre posterior a la reforma con el anterior. Durante ese mismo periodo se digitalizó una colección muy solicitada y se organizó una exposición que enlazaba al catálogo. El documento reconoce ambas circunstancias y evita atribuir causalidad exclusiva al horario. El resumen de prensa, en cambio, afirma que abrir dos tardes más duplicó el uso del archivo. La simplificación elimina justo la cautela que permitía interpretar el resultado sin convertir una coincidencia temporal en una explicación suficiente.",
      "El párrafo más difícil del informe dice que «la estabilización de la demanda, condicionada por la desigual incorporación de las series documentales al sistema de consulta, impide la extrapolación lineal del crecimiento observado». Descomprimirlo exige identificar tres relaciones. La incorporación de documentos fue desigual; esa desigualdad afecta a la demanda; por ello, no cabe proyectar el ritmo inicial como si fuera constante. No se afirma que la demanda haya dejado de crecer, aunque una lectura apresurada de estabilización podría sugerirlo.",
      "La bibliotecaria encargada de divulgar los resultados propuso una analogía: abrir una puerta y trasladar libros a una sala visible al mismo tiempo dificulta saber cuánto explica cada cambio. La analogía hacía accesible el problema, pero no debía sustituir los datos ni insinuar que ambas intervenciones tenían idéntico peso. Una explicación lograda conserva una zona de resistencia: permite entender por qué no sabemos todavía algo, en lugar de ofrecer una certeza más agradable que la evidencia.",
      "Apéndice metodológico. De doscientas personas invitadas a responder una encuesta, contestaron sesenta, mayoritariamente usuarias frecuentes del catálogo digital. El porcentaje de satisfacción corresponde a esas respuestas, no a todas las personas invitadas ni a la población de la ciudad. El equipo recomienda comparar otro semestre y separar tipos de consulta. No propone retirar la ampliación horaria mientras tanto. Distinguir insuficiencia para probar una causa de prueba de ineficacia es decisivo: la incertidumbre metodológica no autoriza por sí sola ninguna de esas dos conclusiones políticas. La bibliotecaria anotó en el margen una última precaución: explicar un límite no obliga a recitar toda la metodología, pero sí a conservar el límite que modifica la decisión.",
      "Revisión de pares. Una investigadora observó que separar consultas digitales y presenciales tampoco bastaría si las categorías cambiaban entre semestres. Antes de digitalizar, una persona podía pedir varias reproducciones mediante una sola solicitud; después, cada descarga quedaba registrada como acceso. Comparar totales sin explicar esa modificación podía confundir un cambio en el uso con un cambio en la manera de contar. El equipo aceptó reconstruir una serie compatible allí donde fuera posible y marcar los tramos que no admitían comparación directa.",
      "Esta reserva añadía complejidad al resumen, pero no obligaba a enumerar todos los problemas con idéntico peso. Para una decisión sobre horarios, la comparabilidad de visitas presenciales resultaba especialmente pertinente. Para una decisión sobre el catálogo, importaba distinguir consultas, descargas y personas usuarias sin identificarlas innecesariamente. El mismo informe podía sostener varias preguntas, siempre que no se supusiera que una cifra agregada respondía a todas. La bibliotecaria reformuló el cierre: disponemos de señales de mayor actividad y necesitamos medidas compatibles para valorar qué cambió. Esa frase conserva información positiva y una limitación metodológica sin convertir ninguna de las dos en el comentario secundario de la otra. La densidad no se resuelve eliminando relaciones, sino haciendo visibles las que organizan la interpretación."
    ],
    "tasks": [
      {
        "id": "c2-07-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Descomprimir una idea.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Descomprimir una idea»?",
            "options": [
              "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.",
              "El nuevo horario explica por sí solo todo el aumento."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Descomprimir una idea»?",
            "options": [
              "Respondieron sesenta de las doscientas personas invitadas.",
              "Respondieron todas las personas invitadas."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-07-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Descomprimir una idea con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.» con «El nuevo horario explica por sí solo todo el aumento.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. Respondieron sesenta de las doscientas personas invitadas.",
            "checklist": [
              "Distingo cita e interpretación.",
              "Incluyo una lectura rival y un límite."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo las formas del expediente distribuyen certeza, responsabilidad y voz.",
      "items": [
        {
          "quote": "La evaluación de la ampliación de los horarios del archivo municipal concluye que aumentaron las consultas durante el primer semestre.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Apéndice metodológico.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-07-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Descomprimir una idea.",
        "items": [
          {
            "words": [
              "La",
              "muestra",
              "no",
              "representa",
              "a",
              "toda",
              "la",
              "ciudad."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "Separar",
              "modalidades",
              "permite",
              "interpretar",
              "el",
              "aumento."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-07-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Descomprimir una idea».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "El nuevo horario explica por sí solo todo el aumento.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "Respondieron sesenta de las doscientas personas invitadas.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "Respondieron todas las personas invitadas.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-07-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Descomprimir una idea.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Descomprimir una idea». Conserva la tesis y una reserva.",
            "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Descomprimir una idea» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "Respondieron sesenta de las doscientas personas invitadas. El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-07-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.cambio-registro. Recupera la semana 3, «Lo que la cláusula permite». Material de contraste: El reglamento de la residencia artística ocupaba nueve páginas. La mayoría de las personas admitidas había leído sobre todo una frase: «La estancia podrá prorrogarse hasta treinta días, siempre que exista disponibilidad, sin perjuicio de la revisión de las condiciones económicas». En el grupo de participantes, la frase se convirtió en «tenemos un mes más por el mismo precio». Nadie había mentido de manera deliberada. Al circular, la posibilidad pasó a ser certeza y la reserva económica desapareció por parecer un detalle secundario. Formulación de trabajo: Si alguien incumple el plazo, deberá justificar el retraso.\n\nRecupera «Alternancia de registros» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.lenguaje-juridico. Recupera la semana 3, «Lo que la cláusula permite». Unidades disponibles: sin perjuicio de (sin eliminar otra facultad); a tenor de (según el contenido de una disposición); subsanar (corregir un defecto documental); de pleno derecho (por efecto directo de la norma invocada); incumpliere (incumple, en una condición de estilo jurídico); prórroga (ampliación de un plazo); fehaciente (que permite acreditar un hecho); facultad (posibilidad de actuación reconocida). Pasaje: El reglamento de la residencia artística ocupaba nueve páginas. La mayoría de las personas admitidas había leído sobre todo una frase: «La estancia podrá prorrogarse hasta treinta días, siempre que exista disponibilidad, sin perjuicio de la revisión de las condiciones económicas». En el grupo de participantes, la frase se convirtió en «tenemos un mes más por el mismo precio». Nadie había mentido de manera deliberada. Al circular, la posibilidad pasó a ser certeza y la reserva económica desapareció por parecer un detalle secundario.\n\nRecupera «Lenguaje jurídico-administrativo»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En este contraste, «sin perjuicio de» nombra sin eliminar otra facultad; «a tenor de», según el contenido de una disposición. La elección debe conservar esa diferencia. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.futuro-subjuntivo-juridico. Recupera la semana 3, «Lo que la cláusula permite». Contrastes suministrados: Quien incumpliere el plazo deberá justificar la demora. / Si alguien incumple el plazo, deberá justificar el retraso. / La revisión se efectuará sin perjuicio del derecho a reclamar.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Futuro de subjuntivo y fórmulas arcaizantes». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "En las cláusulas, sin perjuicio de preserva otra facultad; no significa a pesar de que todo quede anulado. Siempre que introduce condición y salvo que una excepción. El futuro de subjuntivo sobreviva en fórmulas como quien incumpliere no obliga a reproducirlo al explicar: si alguien incumple conserva la condición. Una versión clara debe mantener sujeto obligado, acción, plazo, excepción y consecuencia; simplificar no permite ampliar derechos. Aplicación al caso: La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.registro-voz. Recupera la semana 3, «Lo que la cláusula permite». Textos para ensayo oral: «La estancia puede ampliarse, siempre que haya plazas.» / «La estancia se amplía; hay plazas confirmadas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Registro y voz» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Separa facultad, condición y reserva con pausas breves. No relegues sin perjuicio de al final con menor volumen si esa reserva cambia la decisión del oyente. Un ensayo defendible conserva esta distinción del caso: Una mediación clara conserva condiciones y señala los vacíos sin inventar garantías. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.traduccion-registro. Recupera la semana 3, «Lo que la cláusula permite». Modelo parcial que puedes transformar: La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene.\n\nRecupera «Traducción intralingüística» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: Una mediación clara conserva condiciones y señala los vacíos sin inventar garantías. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.recursos-retoricos. Recupera la semana 6, «Convencer sin esconder el coste». Material de contraste: La propuesta de renovar la biblioteca se presentó bajo un lema difícil de rechazar: «Abrir puertas». Quienes preguntaron por el presupuesto quedaron, durante unos minutos, en el papel incómodo de quienes preferían cerrarlas. El discurso no había refutado sus objeciones; había elegido una imagen en la que resultaba ingrato formularlas. Esa eficacia explica tanto el valor de la retórica como la necesidad de examinarla. Ninguna decisión pública cabe entera en la oposición entre apertura y cierre. Formulación de trabajo: Es una inversión costosa; de ahí no se sigue que sea prescindible.\n\nRecupera «Recursos retóricos» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.lexico-persuasivo. Recupera la semana 6, «Convencer sin esconder el coste». Unidades disponibles: concesión táctica (reconocimiento limitado de una objeción); encuadre (perspectiva que organiza un problema); carga valorativa (evaluación asociada a una expresión); contrapartida (coste o compromiso a cambio de otro); eufemismo (expresión que suaviza un contenido); disfemismo (expresión que lo presenta de forma peyorativa); gradación (orden de intensidad creciente); apelación (llamada a una creencia o valor compartido). Pasaje: La propuesta de renovar la biblioteca se presentó bajo un lema difícil de rechazar: «Abrir puertas». Quienes preguntaron por el presupuesto quedaron, durante unos minutos, en el papel incómodo de quienes preferían cerrarlas. El discurso no había refutado sus objeciones; había elegido una imagen en la que resultaba ingrato formularlas. Esa eficacia explica tanto el valor de la retórica como la necesidad de examinarla. Ninguna decisión pública cabe entera en la oposición entre apertura y cierre.\n\nRecupera «Léxico persuasivo»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. En este contraste, «concesión táctica» nombra reconocimiento limitado de una objeción; «encuadre», perspectiva que organiza un problema. La elección debe conservar esa diferencia. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.oratoria. Recupera la semana 6, «Convencer sin esconder el coste». Textos para ensayo oral: «Queremos estudiar, encontrarnos y abrir oportunidades.» / «Queremos renovar; durante las obras faltarán puestos.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Oratoria» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Distribuye tres grupos paralelos con un foco distinto en cada uno. La concesión posterior necesita espacio propio: bajar demasiado el volumen podría ocultar el coste reconocido. Un ensayo defendible conserva esta distinción del caso: La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.lis.discurso-politico. Recupera la semana 6, «Convencer sin esconder el coste». Recuperación del contenido escuchado: vuelve al audio de esa semana sin abrir su transcripción. Como pista de contraste, conserva estas dos posiciones: La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. / Los horarios ampliados ya están financiados.\n\nToma notas de quién sostiene cada posición y de una reserva expresada. Después contrasta tus notas con la transcripción. No deduzcas rasgos regionales ni solapamientos que el audio sintético no acredita. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. La primera posición sintetiza el límite defendido; la segunda es la conclusión excesiva que el diálogo obliga a rechazar. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.discurso-breve. Recupera la semana 6, «Convencer sin esconder el coste». Situación para retomar: Pronuncia el discurso ante usuarios y personal. Recibe una objeción sobre los horarios, responde sin falso dilema y reformula el cierre como pregunta deliberativa. Objeción suministrada: Los horarios ampliados ya están financiados.\n\nRecupera «Discurso persuasivo». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Descomprimir una idea»: «Aunque la muestra sea pequeña, el contraste aporta información.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. En el nuevo contraste, «Aunque la muestra sea pequeña, el contraste aporta información.» debe interpretarse dentro de esta cuestión: Sintaxis compleja, nominalización y jerarquía informativa. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Redacta un dossier de 450–600 palabras: resumen académico de 150, explicación divulgativa de 200 y comentario de las diferencias. Conserva unidad de medida, selección de participantes y límites causales.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "La mejora observada no permite atribuir el cambio al programa.",
      "Aunque la muestra sea pequeña, el contraste aporta información.",
      "La evaluación de la aplicación exige identificar quién aplicó cada medida.",
      "atribución causal",
      "sesgo de selección",
      "correlación"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      450,
      600
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Expón los resultados primero al equipo investigador y después a una asociación vecinal. Responde a quien afirma que si no hay causalidad probada, el estudio no vale nada.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «El nuevo horario explica por sí solo todo el aumento.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Descomprimir una idea.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. Respondieron sesenta de las doscientas personas invitadas.",
        "selfCheck": [
          "La respuesta atiende la preocupación, no solo corrige la forma.",
          "La versión breve conserva el límite decisivo.",
          "Adapto el ritmo después de la interrupción."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te espera con una tarjeta de contraste: lleva tu dossier y una decisión lingüística que quieras poner a prueba con tu docente.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu decisión más discutible sobre Descomprimir una idea y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «Respondieron sesenta de las doscientas personas invitadas.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «La falta de causalidad probada demuestra que el programa no sirve.» y acuerda una formulación que ambos puedan defender.",
        "phrases": [
          "Reconozco ese punto; mi reserva es…",
          "Podemos dejar constancia de…"
        ]
      }
    ],
    "bring": "El dossier, una versión revisada, notas de escucha y una grabación local opcional; no se necesita subir audio."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Balance de Descomprimir una idea: ¿qué conclusión conserva el alcance?",
        "options": [
          "El nuevo horario explica por sí solo todo el aumento.",
          "El informe describe un aumento sin demostrar que el horario sea su causa exclusiva."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Descomprimir una idea, ¿qué afirmación debe rechazarse?",
        "options": [
          "Respondieron todas las personas invitadas.",
          "Respondieron sesenta de las doscientas personas invitadas."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Descomprimir una idea. ¿Qué interpretación mantiene?",
        "options": [
          "Una cautela metodológica no equivale a una recomendación de retirar el servicio.",
          "La falta de causalidad probada demuestra que el programa no sirve."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "Una cautela metodológica no equivale a una recomendación de retirar el servicio.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Descomprimir una idea», ¿qué unidad expresa «explicación de un efecto por una causa»? ___ .",
        "answers": [
          [
            "atribución causal"
          ]
        ],
        "hint": "explicación de un efecto por una causa",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «diferencia producida por cómo se elige la muestra» en este expediente usamos ___ .",
        "answers": [
          [
            "sesgo de selección"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "Los datos permiten de concluir que hubo más consultas.",
        "answers": [
          "Los datos permiten concluir que hubo más consultas."
        ],
        "why": "Permitir seguido de infinitivo no lleva la preposición de."
      },
      {
        "type": "transform",
        "source": "La digitalización de la colección por el archivo facilitó su consulta.",
        "instruction": "Sustituye la nominalización inicial por «El archivo digitalizó…» y enlaza con «y así».",
        "answers": [
          "El archivo digitalizó la colección y así facilitó su consulta."
        ],
        "why": "Reconstruir el agente: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Descomprimir una idea»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas.",
        "checklist": [
          "Conservo la reserva decisiva.",
          "Atribuyo una fuente y delimito mi inferencia.",
          "El destinatario puede identificar el siguiente paso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Interpreto sintaxis compleja, nominalización y jerarquía informativa en fuentes originales.",
      "Puedo explicar por qué «El nuevo horario explica por sí solo todo el aumento.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: Respondieron sesenta de las doscientas personas invitadas.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «El informe describe un aumento sin demostrar que el horario sea su causa exclusiva.» y registra qué cambiarías."
    ]
  }
};
