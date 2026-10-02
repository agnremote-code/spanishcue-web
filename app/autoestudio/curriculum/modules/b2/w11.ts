import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w11: Module = {
  "id": "b2-11",
  "level": "b2",
  "week": 11,
  "kind": "core",
  "title": "Una ciudad que se pueda habitar",
  "subtitle": "Defender una propuesta con argumentos y límites.",
  "stop": {
    "place": "Bahía Blanca",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.disc.argumentacion",
    "b2.disc.posicionamiento",
    "b2.voc.ciudad-sostenible",
    "b2.pron.exposicion-oral",
    "b2.wri.ensayo-argumentativo",
    "b2.spk.exposicion"
  ],
  "reviewObjectives": [
    "b2.gram.condicionales-conectores",
    "b2.gram.consecutivas",
    "b2.voc.acuerdos-contratos",
    "b2.pron.foco-solo-si",
    "b2.fun.negociar-condiciones",
    "b2.spk.negociacion",
    "b2.gram.estilo-indirecto-avanzado",
    "b2.voc.verbos-lengua",
    "b2.pron.cita-ironia",
    "b2.fun.resumir-declaraciones",
    "b2.lis.rueda-prensa",
    "b2.rev.checkpoint-2",
    "b2.wri.informe-breve"
  ],
  "prerequisites": [
    "b2-10"
  ],
  "goal": {
    "canDo": "Puedo defender una propuesta con argumentos y límites con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: comparar propuestas urbanas con datos limitados.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: defender una propuesta con argumentos y límites. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Defender una propuesta con argumentos y límites",
        "body": [
          "Una argumentación desarrolla tesis, razones, ejemplos o datos, objeción y conclusión. Por consiguiente expresa una consecuencia; en cambio contrapone; ahora bien introduce una reserva; en definitiva cierra una síntesis. Un conector no demuestra la relación: comprueba que el razonamiento la sostenga."
        ],
        "examples": [
          {
            "es": "No está tan claro que ampliar la avenida reduzca el tráfico.",
            "note": "Se cuestiona la afirmación."
          },
          {
            "es": "Es indudable que el barrio tiene más habitantes.",
            "note": "Afirmación de certeza."
          },
          {
            "es": "Hay más buses; por consiguiente, aumenta la capacidad del servicio.",
            "note": "Consecuencia explícita."
          }
        ],
        "mistakes": [
          {
            "wrong": "No está claro que la avenida necesita más coches.",
            "right": "No está claro que la avenida necesite más coches.",
            "why": "La afirmación cuestionada selecciona subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "El grado de certeza modifica el modo: es indudable que existe, no está tan claro que exista. Cabe pensar que introduce una inferencia prudente con indicativo. Distingue correlación y causalidad, identifica de dónde proceden los datos y explica qué cambiaría tu postura: una tesis matizada puede ser firme sin presentarse como irrefutable."
        ],
        "examples": [
          {
            "es": "No está tan claro que ampliar la avenida reduzca el tráfico.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Hay más buses; por consiguiente, aumenta la capacidad del servicio.",
            "note": "Reformula sin cambiar participantes ni tiempo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Elige formas por su función y por el momento desde el que se habla.",
    "exercises": [
      {
        "id": "g-contexto",
        "type": "gap",
        "prompt": "Completa estas decisiones lingüísticas de una ciudad que se pueda habitar; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "No está tan claro que ampliar la avenida ___ el tráfico.",
            "answers": [
              [
                "reduzca"
              ]
            ],
            "why": "Se cuestiona la afirmación."
          },
          {
            "q": "Es indudable que el barrio ___ más habitantes.",
            "answers": [
              [
                "tiene"
              ]
            ],
            "why": "Afirmación de certeza."
          },
          {
            "q": "Hay más buses; por ___, aumenta la capacidad del servicio.",
            "answers": [
              [
                "consiguiente"
              ]
            ],
            "why": "Consecuencia explícita."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Quizá ampliar la vía no reduzca el tráfico.» Cuestiona expresamente la conclusión con no está tan claro que.",
            "model": "No está tan claro que ampliar la vía reduzca el tráfico.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La medida tiene costes. Aun así, la defiendo como prueba.» Usa una concesión afirmada.",
            "model": "Aunque la medida tiene costes, la defiendo como prueba.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La encuesta es limitada. Por eso, debemos ampliar la observación.» Sustituye por eso por un conector formal equivalente.",
            "model": "La encuesta es limitada; por consiguiente, debemos ampliar la observación.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende combinaciones en contexto y comprueba qué matiz aportan al caso.",
    "groups": [
      {
        "title": "Defender una propuesta con argumentos y límites",
        "items": [
          {
            "es": "redistribuir el espacio",
            "note": "cambiar el reparto de una superficie"
          },
          {
            "es": "reducir desplazamientos",
            "note": "disminuir viajes necesarios"
          },
          {
            "es": "priorizar peatones",
            "note": "dar preferencia a quien camina"
          },
          {
            "es": "contener los alquileres",
            "note": "limitar su aumento"
          },
          {
            "es": "mejorar la conectividad",
            "note": "facilitar conexiones entre lugares"
          },
          {
            "es": "sostener una tesis",
            "note": "defender una idea central"
          },
          {
            "es": "rebatir una objeción",
            "note": "responder a una crítica"
          },
          {
            "es": "ponderar efectos",
            "note": "comparar consecuencias distintas"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para defender una propuesta con argumentos y límites con su significado.",
        "pairs": [
          {
            "left": "redistribuir el espacio",
            "right": "cambiar el reparto de una superficie"
          },
          {
            "left": "reducir desplazamientos",
            "right": "disminuir viajes necesarios"
          },
          {
            "left": "priorizar peatones",
            "right": "dar preferencia a quien camina"
          },
          {
            "left": "contener los alquileres",
            "right": "limitar su aumento"
          },
          {
            "left": "mejorar la conectividad",
            "right": "facilitar conexiones entre lugares"
          },
          {
            "left": "sostener una tesis",
            "right": "defender una idea central"
          },
          {
            "left": "rebatir una objeción",
            "right": "responder a una crítica"
          },
          {
            "left": "ponderar efectos",
            "right": "comparar consecuencias distintas"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Organiza una exposición con pausas antes de la tesis, la objeción y la conclusión; usa énfasis selectivo, sin subir el volumen continuamente.",
    "explanation": [
      "Organiza una exposición con pausas antes de la tesis, la objeción y la conclusión; usa énfasis selectivo, sin subir el volumen continuamente.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "No está tan claro que ampliar la avenida reduzca el tráfico."
      },
      {
        "es": "Es indudable que el barrio tiene más habitantes."
      },
      {
        "es": "Hay más buses; por consiguiente, aumenta la capacidad del servicio."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de una ciudad que se pueda habitar, ¿qué fragmento se oye?",
          "options": [
            "redujo",
            "reduzca",
            "reduce"
          ],
          "answer": 1,
          "why": "Se cuestiona la afirmación.",
          "audio": "No está tan claro que ampliar la avenida reduzca el tráfico.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de una ciudad que se pueda habitar, ¿qué fragmento se oye?",
          "options": [
            "tiene",
            "tenga",
            "tenía"
          ],
          "answer": 0,
          "why": "Afirmación de certeza.",
          "audio": "Es indudable que el barrio tiene más habitantes.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "No está tan claro que ampliar la avenida reduzca el tráfico.",
        "tip": "Organiza una exposición con pausas antes de la tesis, la objeción y la conclusión; usa énfasis selectivo, sin subir el volumen continuamente.",
        "voice": "es-ES-f"
      },
      {
        "text": "Es indudable que el barrio tiene más habitantes.",
        "tip": "Organiza una exposición con pausas antes de la tesis, la objeción y la conclusión; usa énfasis selectivo, sin subir el volumen continuamente.",
        "voice": "es-ES-f"
      },
      {
        "text": "Hay más buses; por consiguiente, aumenta la capacidad del servicio.",
        "tip": "Organiza una exposición con pausas antes de la tesis, la objeción y la conclusión; usa énfasis selectivo, sin subir el volumen continuamente.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Una ciudad que se pueda habitar",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Moderadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Comerciante",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Urbanista",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Tenemos tres propuestas para la avenida: mantenerla como está, reservar un carril para autobuses o cerrar el tráfico los fines de semana. Cada participante debe explicar qué problema resuelve su opción y qué dificultad reconoce, sin limitarse a defender su interés inmediato."
      },
      {
        "speaker": "s2",
        "text": "Prefiero empezar por los fines de semana. Me preocupa la carga de mercancías y no está tan claro que un carril permanente mejore las ventas. Aun así, reconozco que las aceras actuales resultan estrechas y que muchas personas evitan caminar por aquí."
      },
      {
        "speaker": "s3",
        "text": "Yo defiendo el carril permanente con una prueba de seis meses. El autobús pierde tiempo precisamente cuando más gente viaja. Si solo cambiamos los fines de semana, no comprobaremos ese efecto. Ahora bien, habría que reservar zonas de carga y medir el acceso desde otros barrios."
      },
      {
        "speaker": "s1",
        "text": "Disponemos de una encuesta ficticia de cien respuestas: cuarenta personas llegan andando, treinta en autobús, veinte en coche y diez de otra forma. Se recogió en la avenida un sábado. ¿Hasta dónde podemos utilizar estos datos para decidir sobre los días laborables?"
      },
      {
        "speaker": "s2",
        "text": "Sirven para formular preguntas, no para describir toda la semana. Quizá el sábado vengan más familias caminando. Pediría repetir la observación en varios horarios y hablar con negocios que reciben paquetes grandes. No quiero convertir una impresión mía en una regla general."
      },
      {
        "speaker": "s3",
        "text": "Coincido. Podemos mantener mi propuesta como hipótesis de trabajo y acordar indicadores antes de probarla. Lo decisivo es que la evaluación no cambie de criterio según nos gusten o no los resultados. Si falla una conexión, habrá que corregirla, no ocultarla."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Bahía Blanca?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Una ciudad que se pueda habitar?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Comparar propuestas urbanas con datos limitados",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Una ciudad que se pueda habitar»?",
              "options": [
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior."
              ],
              "answer": 0,
              "why": "Identifica un turno que responda al anterior."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota quién sostiene cada afirmación.",
        "exercise": {
          "id": "l-detalle",
          "type": "choice",
          "prompt": "Localiza una intervención concreta en «Una ciudad que se pueda habitar».",
          "items": [
            {
              "q": "¿Qué limita la encuesta del audio?",
              "options": [
                "Se recogió un sábado en un único lugar.",
                "Tiene respuestas exclusivamente de conductores.",
                "No permite formular ninguna pregunta."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Una ciudad que se pueda habitar»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Tenemos tres propuestas para la avenida: mantenerla como está, reservar un carril para autobuses o cerrar el tráfico los fines de semana."
              ],
              "answer": 2,
              "why": "Vuelve al inicio y comprueba la formulación exacta."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Distingue lo dicho de lo inferido; consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "l-inferencia",
          "type": "open",
          "prompt": "Interpreta postura, reserva y efecto sobre la otra persona.",
          "items": [
            {
              "prompt": "En «Una ciudad que se pueda habitar», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Coincido. Podemos mantener mi propuesta como hipótesis de trabajo y acordar indicadores antes de probarla. Lo decisivo es que la evaluación no cambie de criterio según nos gusten o no los resultados. Si falla una conexión, habrá que corregirla, no ocultarla.",
              "checklist": [
                "Atribuyo la intervención a su hablante.",
                "Distingo palabras explícitas e inferencia.",
                "Conservo una condición o un límite de la conversación."
              ]
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Una ciudad que se pueda habitar: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Convertir una avenida en un corredor con más autobuses y menos aparcamiento ha dividido al barrio. El comercio teme perder clientes; las asociaciones peatonales esperan ganar espacio; quienes viven lejos preguntan cómo llegarán si no mejora la frecuencia del transporte. La discusión suele reducirse a elegir entre coches y personas, una fórmula eficaz para un cartel, pero insuficiente para diseñar una política. Dentro de cada grupo hay necesidades distintas, y una misma persona puede caminar, conducir y utilizar el autobús en días diferentes.",
      "Mi propuesta es reservar un carril para el transporte colectivo y ampliar las aceras mediante una prueba de seis meses. La medida debería acompañarse de zonas de carga con horarios claros y de una evaluación del acceso desde los barrios periféricos. Es indudable que el espacio es limitado; no está tan claro que conservar todas las plazas actuales sea la forma más equitativa de repartirlo. Un vehículo estacionado durante ocho horas ocupa un recurso público que otras personas solo necesitan unos minutos para desplazarse.",
      "La objeción comercial merece atención. Algunos negocios dependen de entregas frecuentes o de clientes con movilidad reducida. Ahora bien, de ahí no se deduce que cualquier reducción de aparcamiento disminuya necesariamente las ventas. Habría que comparar datos anteriores y posteriores, distinguir tipos de comercio y observar si cambian los horarios de compra. Una encuesta voluntaria en redes puede aportar experiencias, pero no representa por sí sola a todas las personas usuarias de la avenida.",
      "La prueba debería poder modificarse. Si aumenta de forma sostenida el tiempo de acceso desde la periferia, habría que reforzar las conexiones antes de ampliar el proyecto. Si las ventas bajan, sería necesario estudiar causas y no atribuir todo cambio al carril. En definitiva, defender una ciudad más habitable exige algo más que una intención compartida: requiere criterios públicos para valorar resultados y disposición a corregir una decisión sin convertir cada ajuste en una derrota política."
    ],
    "glossary": [
      {
        "es": "redistribuir el espacio",
        "note": "cambiar el reparto de una superficie"
      },
      {
        "es": "reducir desplazamientos",
        "note": "disminuir viajes necesarios"
      },
      {
        "es": "priorizar peatones",
        "note": "dar preferencia a quien camina"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué distingue la tesis del artículo?",
            "options": [
              "Equipara encuesta voluntaria y población completa.",
              "Defiende una prueba con criterios de revisión explícitos.",
              "Niega cualquier perjuicio posible."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué significa ahora bien en el argumento?",
            "options": [
              "Introduce una reserva que limita la conclusión anterior.",
              "Añade una fecha exacta.",
              "Cierra definitivamente la discusión."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          }
        ]
      },
      {
        "id": "r-evidencia",
        "type": "open",
        "prompt": "Apoya tu lectura con evidencia y distingue la postura de la fuente de la tuya.",
        "items": [
          {
            "prompt": "En «Una ciudad que se pueda habitar», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Propongo reservar un carril para autobuses durante seis meses. La medida permitiría evaluar si aumenta la capacidad de desplazamiento sin ampliar la avenida. Reconozco que algunos comercios necesitan acceso para cargas; por ello, el ensayo debería incluir zonas y horarios específicos. No está tan claro que conservar cada plaza de aparcamiento beneficie al conjunto del barrio. En definitiva, apoyaría la prueba siempre que se publiquen sus resultados y se corrijan las dificultades de conexión que aparezcan.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la forma lingüística limita o precisa el mensaje.",
      "items": [
        {
          "quote": "Convertir una avenida en un corredor con más autobuses y menos aparcamiento ha dividido al barrio.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "En definitiva, defender una ciudad más habitable exige algo más que una intención compartida: requiere criterios públicos para valorar resultados y disposición a corregir una decisión sin convertir cada ajuste en una derrota política.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Defiende una medida de movilidad usando la concesión de la semana 6 y el alcance de las pruebas de la noticia de la 9.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Bahía Blanca y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Una ciudad que se pueda habitar»,",
              "No",
              "está",
              "tan",
              "claro",
              "que",
              "ampliar",
              "la",
              "avenida",
              "reduzca",
              "el",
              "tráfico."
            ],
            "why": "Se cuestiona la afirmación."
          },
          {
            "words": [
              "En",
              "«Una ciudad que se pueda habitar»,",
              "Hay",
              "más",
              "buses;",
              "por",
              "consiguiente,",
              "aumenta",
              "la",
              "capacidad",
              "del",
              "servicio."
            ],
            "why": "Consecuencia explícita."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de una ciudad que se pueda habitar; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "No está claro que la avenida necesita más coches.",
            "answers": [
              "No está claro que la avenida necesite más coches."
            ],
            "why": "La afirmación cuestionada selecciona subjuntivo."
          },
          {
            "sentence": "Es indudable que la avenida tenga poco espacio.",
            "answers": [
              "Es indudable que la avenida tiene poco espacio."
            ],
            "why": "La afirmación de certeza selecciona indicativo."
          },
          {
            "sentence": "Por consiguiente de, debemos ampliar la muestra.",
            "answers": [
              "Por consiguiente, debemos ampliar la muestra."
            ],
            "why": "El conector no lleva de."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre defender una propuesta con argumentos y límites con una postura y una razón; adapta el destinatario.",
            "model": "Propongo reservar un carril para autobuses durante seis meses.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Una ciudad que se pueda habitar» sin debilitarla, y responde con una condición verificable.",
            "model": "Propongo reservar un carril para autobuses durante seis meses. La medida permitiría evaluar si aumenta la capacidad de desplazamiento sin ampliar la avenida. Reconozco que algunos comercios necesitan acceso para cargas; por ello, el ensayo debería incluir zonas y horarios específicos. No está tan claro que conservar cada plaza de aparcamiento beneficie al conjunto del barrio. En definitiva, apoyaría la prueba siempre que se publiquen sus resultados y se corrijan las dificultades de conexión que aparezcan.",
            "checklist": [
              "La objeción conserva su sentido.",
              "Mi respuesta no promete lo que no controlo."
            ]
          }
        ]
      },
      {
        "id": "x-recuperacion",
        "type": "open",
        "prompt": "Recuperación espaciada: selecciona y produce los recursos señalados sin mirar sus explicaciones. En el checkpoint distribúyelos entre informe y ensayo oral.",
        "items": [
          {
            "prompt": "Recupera la semana 8 sin abrir su explicación y aplica sus recursos a «Una ciudad que se pueda habitar»: Conectores condicionales; Oraciones consecutivas; Acuerdos, contratos y condiciones; Foco en la condición; Negociar condiciones; Negociación breve. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar siempre que, con tal de que, a no ser que, en caso de que y salvo que. Puedo expresar consecuencia con tan… que, tanto que, de modo que y así que. Puedo negociar cláusulas, plazos, garantías y penalizaciones. Puedo poner el foco en la condición: SOLO si firmamos hoy. Puedo proponer, aceptar con condiciones y rechazar una propuesta. Puedo negociar un acuerdo de alquiler o de trabajo con condiciones claras.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 10 sin abrir su explicación y aplica sus recursos a «Una ciudad que se pueda habitar»: Estilo indirecto avanzado; Verbos para citar; Citar con ironía; Resumir declaraciones; Escuchar una rueda de prensa; Checkpoint 2: conceder, describir e informar; Informe breve. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo transmitir enunciados con todos los cambios temporales y verbos como asegurar, negar, admitir, sugerir y advertir. Puedo elegir entre afirmar, reconocer, insinuar, desmentir, reprochar y prometer. Puedo reconocer cuándo alguien cita con ironía o distancia. Puedo resumir lo que dijeron varias personas y marcar mi distancia. Puedo identificar promesas, negaciones y evasivas. Puedo conceder y objetar, describir con precisión, negociar condiciones e informar con distancia. Puedo escribir un informe breve que presenta datos, declaraciones y una recomendación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un ensayo de opinión para un periódico local sobre una prueba de movilidad. Desarrolla una tesis, dos argumentos, un contraargumento atendido y criterios para revisar tu propuesta.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Una argumentación desarrolla tesis, razones, ejemplos o datos, objeción y conclusión. Por consiguiente expresa una consecuencia; en cambio contrapone; ahora bien introduce una reserva; en definitiva cierra una síntesis. Un conector no demuestra la relación: comprueba que el razonamiento la sostenga.",
      "El grado de certeza modifica el modo: es indudable que existe, no está tan claro que exista. Cabe pensar que introduce una inferencia prudente con indicativo. Distingue correlación y causalidad, identifica de dónde proceden los datos y explica qué cambiaría tu postura: una tesis matizada puede ser firme sin presentarse como irrefutable.",
      "Defiende una medida de movilidad usando la concesión de la semana 6 y el alcance de las pruebas de la noticia de la 9."
    ],
    "model": [
      "Propongo reservar un carril para autobuses durante seis meses y ampliar provisionalmente las aceras. La avenida dispone de un espacio limitado y necesita facilitar desplazamientos, además de estacionamientos. No está tan claro que conservar cada plaza actual sea la forma más equitativa de atender a quienes trabajan, compran o viven en la zona.",
      "La primera razón es la capacidad del transporte colectivo. Si los autobuses pierden menos tiempo en las horas de mayor demanda, pueden ofrecer una conexión más fiable sin ampliar la avenida. La segunda es el acceso peatonal: unas aceras más amplias facilitarían pasar, detenerse y llegar a los comercios. Ambas ventajas deben medirse, porque una intención razonable no garantiza un resultado favorable en todos los horarios.",
      "La objeción comercial merece una respuesta concreta. Algunos negocios dependen de entregas voluminosas y de clientes con movilidad reducida. Por ello, la prueba debería incluir zonas de carga y accesos específicos. Ahora bien, de esa necesidad no se deduce que toda reducción de aparcamiento provoque necesariamente una caída de ventas. Habría que observar distintos tipos de comercio y comparar periodos equivalentes.",
      "La encuesta realizada un sábado sirve para formular preguntas, pero no representa automáticamente los días laborables. Propongo ampliar la observación antes del cambio y publicar indicadores de tiempo de viaje, accesibilidad y actividad comercial. Si empeoran las conexiones con la periferia, deberán reforzarse antes de extender la medida. Defiendo una prueba revisable: modificarla a partir de resultados sería una señal de responsabilidad, no una derrota del proyecto."
    ],
    "checklist": [
      "Respondo al propósito y al destinatario concreto.",
      "Organizo párrafos con relaciones claras, no conectores decorativos.",
      "Distingo datos, opiniones, hipótesis y compromisos.",
      "Integro una perspectiva distinta sin deformarla.",
      "Reviso concordancia, modo, tiempos y léxico.",
      "Explico una mejora entre borrador y versión final."
    ],
    "words": [
      220,
      280
    ]
  },
  "speaking": {
    "intro": "Prepara notas breves, no un texto para leer. Puedes grabarte localmente; la aplicación no califica automáticamente pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición con evidencia",
        "prompt": "Presenta el caso de «Una ciudad que se pueda habitar» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Propongo reservar un carril para autobuses durante seis meses. La medida permitiría evaluar si aumenta la capacidad de desplazamiento sin ampliar la avenida. Reconozco que algunos comercios necesitan acceso para cargas; por ello, el ensayo debería incluir zonas y horarios específicos. No está tan claro que conservar cada plaza de aparcamiento beneficie al conjunto del barrio. En definitiva, apoyaría la prueba siempre que se publiquen sus resultados y se corrijan las dificultades de conexión que aparezcan.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de defender una propuesta con argumentos y límites. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
        "prep": [
          "Prepara una objeción probable y una pregunta de aclaración.",
          "Incorpora una pregunta inesperada: ¿qué evidencia haría cambiar tu conclusión?",
          "Al terminar, reformula en un minuto el resultado para una persona nueva."
        ],
        "seconds": 240,
        "selfCheck": [
          "Respondo a la objeción real.",
          "Pido y cedo el turno.",
          "Adapto una explicación sin inventar consenso."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te acompaña al siguiente paso: convierte tu trabajo independiente en una conversación con consecuencias claras.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu entrega de «Una ciudad que se pueda habitar» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Bahía Blanca; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre defender una propuesta con argumentos y límites; identifica una condición que todavía necesita confirmación.",
        "phrases": [
          "Lo aceptaría siempre que…",
          "Queda pendiente comprobar…"
        ]
      }
    ],
    "bring": "Lleva borrador y versión revisada, cinco palabras clave para hablar y una duda de comprensión o prosodia."
  },
  "quiz": {
    "items": [
      {
        "q": "En la evaluación final de «Una ciudad que se pueda habitar», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Comparar propuestas urbanas con datos limitados",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Prefiero empezar por los fines de semana. Me preocupa la carga de mercancías y no está tan claro que un carril permanente mejore las ventas. Aun así, reconozco que las aceras actuales resultan estrechas y que muchas personas evitan caminar por aquí.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Comerciante en «Una ciudad que se pueda habitar», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Prefiero empezar por los fines de semana",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "No parece evidente que el cambio ___ a todos.",
        "answers": [
          [
            "beneficie"
          ]
        ],
        "why": "Se cuestiona el alcance del beneficio."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «La muestra solo recoge sábados, así que debemos observar otros días.» Reformula con por consiguiente.",
        "model": "La muestra solo recoge sábados; por consiguiente, debemos observar otros días.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Es seguro que el espacio sea limitado.",
        "answers": [
          "Es seguro que el espacio es limitado."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Una ciudad que se pueda habitar».",
        "model": "Propongo reservar un carril para autobuses durante seis meses. La medida permitiría evaluar si aumenta la capacidad de desplazamiento sin ampliar la avenida. Reconozco que algunos comercios necesitan acceso para cargas; por ello, el ensayo debería incluir zonas y horarios específicos. No está tan claro que conservar cada plaza de aparcamiento beneficie al conjunto del barrio. En definitiva, apoyaría la prueba siempre que se publiquen sus resultados y se corrijan las dificultades de conexión que aparezcan.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre defender una propuesta con argumentos y límites; concede una razón y conserva tu argumento.",
        "model": "Propongo reservar un carril para autobuses durante seis meses. La medida permitiría evaluar si aumenta la capacidad de desplazamiento sin ampliar la avenida. Reconozco que algunos comercios necesitan acceso para cargas; por ello, el ensayo debería incluir zonas y horarios específicos. No está tan claro que conservar cada plaza de aparcamiento beneficie al conjunto del barrio. En definitiva, apoyaría la prueba siempre que se publiquen sus resultados y se corrijan las dificultades de conexión que aparezcan.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 11 a un mensaje cercano y a un informe formal.",
        "model": "Cambiaría el tratamiento y algunas fórmulas, pero conservaría las fuentes, los límites y las condiciones acordadas.",
        "checklist": [
          "Cambio recursos de registro.",
          "No cambio el contenido del compromiso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo defender una propuesta con argumentos y límites.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Defiende una medida de movilidad usando la concesión de la semana 6 y el alcance de las pruebas de la noticia de la 9.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
