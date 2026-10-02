import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w04: Module = {
  "id": "b2-04",
  "level": "b2",
  "week": 4,
  "kind": "core",
  "title": "Decisiones que habrían cambiado todo",
  "subtitle": "Explorar alternativas sin convertirlas en reproches.",
  "stop": {
    "place": "Paraná",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.condicionales-irreales",
    "b2.gram.condicional-compuesto",
    "b2.voc.decisiones-consecuencias",
    "b2.pron.reproche",
    "b2.fun.lamentar-reprochar",
    "b2.spk.historia-alternativa"
  ],
  "reviewObjectives": [
    "b2.gram.sustantivas-sistema",
    "b2.gram.decir-doble-valor",
    "b2.voc.trabajo-equipo",
    "b2.pron.influencia-mitigada",
    "b2.fun.pedir-exigir",
    "b2.read.correo-equipo",
    "b2.gram.subjuntivo-compuestos",
    "b2.voc.logros-fracasos",
    "b2.pron.compuestos-largos",
    "b2.fun.valorar-hechos",
    "b2.wri.carta-felicitacion"
  ],
  "prerequisites": [
    "b2-03"
  ],
  "goal": {
    "canDo": "Puedo explorar alternativas sin convertirlas en reproches con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: separar una omisión comprobada de escenarios imaginarios.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: explorar alternativas sin convertirlas en reproches. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Explorar alternativas sin convertirlas en reproches",
        "body": [
          "Para imaginar un pasado distinto, combina si hubiera ocurrido con habría cambiado. La condición no se cumplió y la consecuencia se presenta como hipotética. También se admite hubiera en la consecuencia en muchos contextos. Para una condición presente irreal usa si tuviera, tendría; evita si tendría en este patrón."
        ],
        "examples": [
          {
            "es": "Si hubiéramos reservado, habríamos conseguido sitio.",
            "note": "Consecuencia irreal pasada."
          },
          {
            "es": "Si hubiera aceptado aquel empleo, ahora viviría en otra ciudad.",
            "note": "Condición pasada y resultado presente."
          },
          {
            "es": "Si yo tuviera más tiempo hoy, revisaría el presupuesto.",
            "note": "Condición irreal presente."
          }
        ],
        "mistakes": [
          {
            "wrong": "Si tendría más recursos, ampliaría el almacén.",
            "right": "Si tuviera más recursos, ampliaría el almacén.",
            "why": "La condición irreal con si lleva imperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Las condicionales mixtas conectan tiempos diferentes: si hubiéramos invertido entonces, ahora tendríamos recursos. Habrías podido puede expresar una alternativa o un reproche según contexto y prosodia. Para negociar una reparación, separa el análisis de lo ocurrido de la atribución de culpa y reconoce la información disponible entonces."
        ],
        "examples": [
          {
            "es": "Si hubiéramos reservado, habríamos conseguido sitio.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Si yo tuviera más tiempo hoy, revisaría el presupuesto.",
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
        "prompt": "Completa estas decisiones lingüísticas de decisiones que habrían cambiado todo; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Si hubiéramos reservado, ___ conseguido sitio.",
            "answers": [
              [
                "habríamos"
              ]
            ],
            "why": "Consecuencia irreal pasada."
          },
          {
            "q": "Si hubiera aceptado aquel empleo, ahora ___ en otra ciudad.",
            "answers": [
              [
                "viviría"
              ]
            ],
            "why": "Condición pasada y resultado presente."
          },
          {
            "q": "Si yo ___ más tiempo hoy, revisaría el presupuesto.",
            "answers": [
              [
                "tuviera"
              ]
            ],
            "why": "Condición irreal presente."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «No alquilamos el almacén y no tuvimos espacio.» Imagina el pasado contrario con si.",
            "model": "Si hubiéramos alquilado el almacén, habríamos tenido espacio.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No invertimos entonces y ahora faltan recursos.» Construye una condicional mixta con tener.",
            "model": "Si hubiéramos invertido entonces, ahora tendríamos recursos.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Podías haber respondido a Julia, pero no lo hiciste.» Expresa el reproche con condicional compuesto.",
            "model": "Habrías podido responder a Julia.",
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
        "title": "Explorar alternativas sin convertirlas en reproches",
        "items": [
          {
            "es": "asumir un riesgo",
            "note": "aceptar una posible pérdida"
          },
          {
            "es": "sopesar alternativas",
            "note": "comparar opciones"
          },
          {
            "es": "tener en cuenta",
            "note": "considerar un factor"
          },
          {
            "es": "perder una oportunidad",
            "note": "no aprovechar una posibilidad"
          },
          {
            "es": "hacer balance",
            "note": "evaluar resultados"
          },
          {
            "es": "atribuir una culpa",
            "note": "señalar responsabilidad"
          },
          {
            "es": "contar con información",
            "note": "disponer de datos"
          },
          {
            "es": "reparar un daño",
            "note": "compensar un perjuicio"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para explorar alternativas sin convertirlas en reproches con su significado.",
        "pairs": [
          {
            "left": "asumir un riesgo",
            "right": "aceptar una posible pérdida"
          },
          {
            "left": "sopesar alternativas",
            "right": "comparar opciones"
          },
          {
            "left": "tener en cuenta",
            "right": "considerar un factor"
          },
          {
            "left": "perder una oportunidad",
            "right": "no aprovechar una posibilidad"
          },
          {
            "left": "hacer balance",
            "right": "evaluar resultados"
          },
          {
            "left": "atribuir una culpa",
            "right": "señalar responsabilidad"
          },
          {
            "left": "contar con información",
            "right": "disponer de datos"
          },
          {
            "left": "reparar un daño",
            "right": "compensar un perjuicio"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Compara habrías podido preguntar como hipótesis y como reproche; conserva las palabras y modifica foco y curva final con tu docente.",
    "explanation": [
      "Compara habrías podido preguntar como hipótesis y como reproche; conserva las palabras y modifica foco y curva final con tu docente.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Si hubiéramos reservado, habríamos conseguido sitio."
      },
      {
        "es": "Si hubiera aceptado aquel empleo, ahora viviría en otra ciudad."
      },
      {
        "es": "Si yo tuviera más tiempo hoy, revisaría el presupuesto."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de decisiones que habrían cambiado todo, ¿qué fragmento se oye?",
          "options": [
            "habíamos",
            "hubiéramos",
            "habríamos"
          ],
          "answer": 2,
          "why": "Consecuencia irreal pasada.",
          "audio": "Si hubiéramos reservado, habríamos conseguido sitio.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de decisiones que habrían cambiado todo, ¿qué fragmento se oye?",
          "options": [
            "viviré",
            "viviría",
            "vivía"
          ],
          "answer": 1,
          "why": "Condición pasada y resultado presente.",
          "audio": "Si hubiera aceptado aquel empleo, ahora viviría en otra ciudad.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Si hubiéramos reservado, habríamos conseguido sitio.",
        "tip": "Compara habrías podido preguntar como hipótesis y como reproche; conserva las palabras y modifica foco y curva final con tu docente.",
        "voice": "es-ES-f"
      },
      {
        "text": "Si hubiera aceptado aquel empleo, ahora viviría en otra ciudad.",
        "tip": "Compara habrías podido preguntar como hipótesis y como reproche; conserva las palabras y modifica foco y curva final con tu docente.",
        "voice": "es-ES-f"
      },
      {
        "text": "Si yo tuviera más tiempo hoy, revisaría el presupuesto.",
        "tip": "Compara habrías podido preguntar como hipótesis y como reproche; conserva las palabras y modifica foco y curva final con tu docente.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Decisiones que habrían cambiado todo",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Moderador",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Julia",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Diego",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Vamos a separar dos asuntos: qué habría ocurrido con otro almacén y qué podemos corregir ahora. Julia, tú defendías alquilar el local. ¿Qué ventaja crees que habríamos tenido y qué coste estás dispuesta a reconocer?"
      },
      {
        "speaker": "s2",
        "text": "Habríamos evitado trasladar cajas todos los días. Si lo hubiéramos alquilado, ahora trabajaríamos con menos tensión. Admito que el contrato era largo, pero habríamos podido negociar. Lo que me molesta es que nadie respondiera a mi propuesta de compartir el espacio."
      },
      {
        "speaker": "s3",
        "text": "Tienes razón en eso. Deberíamos haberte contestado. Sin embargo, no sabemos si el propietario habría aceptado un contrato distinto. En aquel momento solo teníamos pedidos para tres meses. Si hubiéramos comprometido todos los ahorros, quizá no habríamos podido contratar a las dos personas nuevas."
      },
      {
        "speaker": "s1",
        "text": "Entonces hay una falta concreta de respuesta y una hipótesis económica que sigue abierta. Julia, ¿te serviría que el acta recogiera ambas cosas? Así no damos por demostrado un resultado que no podemos comprobar, pero tampoco borramos tu reclamación."
      },
      {
        "speaker": "s2",
        "text": "Sí. No necesito que todos admitan que mi opción era perfecta. Necesito que las propuestas se estudien. Si hoy tuviera que votar otra vez con los mismos datos, quizá elegiría lo mismo, pero pediría una revisión al cabo de tres meses."
      },
      {
        "speaker": "s3",
        "text": "Acordemos eso para la próxima inversión. Y sobre el presente, puedo contactar con dos cooperativas que tienen espacio libre. No resolverá todo de inmediato, aunque nos permitirá comparar una alternativa real con la situación actual."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Paraná?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Decisiones que habrían cambiado todo?",
              "options": [
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas.",
                "Separar una omisión comprobada de escenarios imaginarios"
              ],
              "answer": 2,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Decisiones que habrían cambiado todo»?",
              "options": [
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio."
              ],
              "answer": 1,
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
          "prompt": "Localiza una intervención concreta en «Decisiones que habrían cambiado todo».",
          "items": [
            {
              "q": "¿Qué reconoce Diego?",
              "options": [
                "Que sobraban todos los ahorros.",
                "Que debieron responder a la propuesta.",
                "Que el propietario aceptó negociar."
              ],
              "answer": 1,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Decisiones que habrían cambiado todo»?",
              "options": [
                "Vamos a separar dos asuntos: qué habría ocurrido con otro almacén y qué podemos corregir ahora.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión."
              ],
              "answer": 0,
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
              "prompt": "En «Decisiones que habrían cambiado todo», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Acordemos eso para la próxima inversión. Y sobre el presente, puedo contactar con dos cooperativas que tienen espacio libre. No resolverá todo de inmediato, aunque nos permitirá comparar una alternativa real con la situación actual.",
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
    "title": "Decisiones que habrían cambiado todo: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "La cooperativa de reparto decidió comprar tres vehículos pequeños en lugar de alquilar un local. Un año después, la demanda había crecido y el equipo necesitaba un lugar donde guardar los pedidos. En la asamblea, alguien resumió el problema con una frase rotunda: «Si hubiéramos alquilado el almacén, ahora no estaríamos improvisando». La afirmación era plausible, pero omitía que el contrato ofrecido entonces exigía una permanencia de cinco años y una garantía que la cooperativa apenas podía reunir.",
      "La tesorera reconstruyó la decisión utilizando los datos disponibles en aquel momento. Si hubieran firmado, habrían dispuesto de más espacio, pero también habrían reducido el dinero destinado a contratar personal. No era posible saber si los nuevos clientes habrían llegado igual sin esa contratación. Comparar lo que ocurrió con una alternativa imaginaria resulta útil para aprender, siempre que no tratemos esa alternativa como una historia que conocemos con certeza. El resultado de una decisión no demuestra por sí solo que el razonamiento fuera malo.",
      "Eso no significaba que nadie tuviera que rendir cuentas. El equipo había descartado una propuesta de alquiler compartido sin estudiar sus condiciones. Una repartidora recordó que había pedido información y no había recibido respuesta. «Habrían podido contestarme», dijo. Su intervención no reclamaba que el pasado cambiara; exigía que se reconociera una omisión concreta. La presidencia aceptó esa responsabilidad y propuso un procedimiento para que ninguna alternativa presentada por una persona socia quedara sin una respuesta documentada.",
      "La asamblea terminó con dos acuerdos: buscar un almacén compartido durante seis meses y revisar las decisiones importantes mediante escenarios, no mediante culpables imaginarios. Si hoy dispusieran de recursos ilimitados, podrían elegir cualquier solución; como no los tienen, necesitan explicar qué sacrifican con cada opción. La historia alternativa dejó de funcionar como reproche general y se convirtió en una herramienta para tomar la siguiente decisión con mejores preguntas."
    ],
    "glossary": [
      {
        "es": "asumir un riesgo",
        "note": "aceptar una posible pérdida"
      },
      {
        "es": "sopesar alternativas",
        "note": "comparar opciones"
      },
      {
        "es": "tener en cuenta",
        "note": "considerar un factor"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué critica el artículo?",
            "options": [
              "Analizar los costes económicos.",
              "Buscar un espacio compartido.",
              "Juzgar una decisión pasada como si se conocieran todas sus alternativas."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué combina ahora trabajaríamos?",
            "options": [
              "Una obligación legal futura.",
              "Una condición pasada y una consecuencia presente.",
              "Dos hechos comprobados del pasado."
            ],
            "answer": 1,
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
            "prompt": "En «Decisiones que habrían cambiado todo», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Si hubiéramos estudiado el alquiler compartido, hoy contaríamos con una comparación más sólida. No podemos afirmar que esa opción hubiera resultado más barata, porque desconocemos las condiciones que habría aceptado el propietario. Sí sabemos que una propuesta quedó sin respuesta. Considero necesario reconocer esa omisión y establecer un plazo para contestar futuras iniciativas. El objetivo del balance debería ser mejorar el procedimiento, además de valorar el resultado.",
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
          "quote": "La cooperativa de reparto decidió comprar tres vehículos pequeños en lugar de alquilar un local.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "La historia alternativa dejó de funcionar como reproche general y se convirtió en una herramienta para tomar la siguiente decisión con mejores preguntas.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Vuelve al correo de coordinación: imagina qué habría ocurrido con otra distribución y formula el reproche como petición concreta.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Paraná y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Decisiones que habrían cambiado todo»,",
              "Si",
              "hubiéramos",
              "reservado,",
              "habríamos",
              "conseguido",
              "sitio."
            ],
            "why": "Consecuencia irreal pasada."
          },
          {
            "words": [
              "En",
              "«Decisiones que habrían cambiado todo»,",
              "Si",
              "yo",
              "tuviera",
              "más",
              "tiempo",
              "hoy,",
              "revisaría",
              "el",
              "presupuesto."
            ],
            "why": "Condición irreal presente."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de decisiones que habrían cambiado todo; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Si tendría más recursos, ampliaría el almacén.",
            "answers": [
              "Si tuviera más recursos, ampliaría el almacén."
            ],
            "why": "La condición irreal con si lleva imperfecto de subjuntivo."
          },
          {
            "sentence": "Si habríamos firmado, pagaríamos más ahora.",
            "answers": [
              "Si hubiéramos firmado, pagaríamos más ahora."
            ],
            "why": "La condición irreal pasada exige pluscuamperfecto de subjuntivo."
          },
          {
            "sentence": "Habríamos pudido negociar otro plazo.",
            "answers": [
              "Habríamos podido negociar otro plazo."
            ],
            "why": "Participio de poder: podido."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre explorar alternativas sin convertirlas en reproches con una postura y una razón; adapta el destinatario.",
            "model": "Si hubiéramos estudiado el alquiler compartido, hoy contaríamos con una comparación más sólida.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Decisiones que habrían cambiado todo» sin debilitarla, y responde con una condición verificable.",
            "model": "Si hubiéramos estudiado el alquiler compartido, hoy contaríamos con una comparación más sólida. No podemos afirmar que esa opción hubiera resultado más barata, porque desconocemos las condiciones que habría aceptado el propietario. Sí sabemos que una propuesta quedó sin respuesta. Considero necesario reconocer esa omisión y establecer un plazo para contestar futuras iniciativas. El objetivo del balance debería ser mejorar el procedimiento, además de valorar el resultado.",
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
            "prompt": "Recupera la semana 1 sin abrir su explicación y aplica sus recursos a «Decisiones que habrían cambiado todo»: Subjuntivo en oraciones sustantivas; Decir, insistir, recordar: informar o pedir; Trabajo en equipo y liderazgo; Entonación de peticiones indirectas; Pedir, exigir y negociar tareas; Leer un correo de coordinación. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación. Puedo distinguir me dice que viene (información) de me dice que venga (orden). Puedo hablar de delegar, coordinar, exigir, plazos y responsabilidades. Puedo pedir algo de forma indirecta sin sonar autoritario. Puedo transmitir peticiones y negociar responsabilidades en un equipo. Puedo distinguir información, peticiones y obligaciones en un correo de trabajo.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 3 sin abrir su explicación y aplica sus recursos a «Decisiones que habrían cambiado todo»: Perfecto y pluscuamperfecto de subjuntivo; Logros, fracasos y aprendizajes; Ritmo en formas compuestas largas; Valorar hechos pasados; Carta de felicitación o pésame. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo valorar hechos terminados: me alegra que hayas llegado, me sorprendió que no hubiera llamado. Puedo hablar de esfuerzo, constancia, frustración, superar y lograr. Puedo decir hubiera estado o habría podido sin cortar el grupo verbal. Puedo valorar algo que ha pasado o había pasado y reaccionar con matices. Puedo escribir un mensaje formal o cercano que valora un hecho.",
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
    "task": "Redacta un balance de una decisión colectiva. Formula una alternativa pasada, una consecuencia presente y un límite de tu razonamiento. Reconoce una omisión concreta y propone una reparación.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Para imaginar un pasado distinto, combina si hubiera ocurrido con habría cambiado. La condición no se cumplió y la consecuencia se presenta como hipotética. También se admite hubiera en la consecuencia en muchos contextos. Para una condición presente irreal usa si tuviera, tendría; evita si tendría en este patrón.",
      "Las condicionales mixtas conectan tiempos diferentes: si hubiéramos invertido entonces, ahora tendríamos recursos. Habrías podido puede expresar una alternativa o un reproche según contexto y prosodia. Para negociar una reparación, separa el análisis de lo ocurrido de la atribución de culpa y reconoce la información disponible entonces.",
      "Vuelve al correo de coordinación: imagina qué habría ocurrido con otra distribución y formula el reproche como petición concreta."
    ],
    "model": [
      "La compra de vehículos permitió ampliar el reparto, pero dejó pendiente la necesidad de un almacén. Al evaluar aquella decisión, conviene separar dos preguntas: si elegimos la mejor opción disponible y si estudiamos adecuadamente las alternativas. El crecimiento posterior de la demanda no responde por sí solo a ninguna de las dos.",
      "Si hubiéramos alquilado el local entonces, ahora trabajaríamos con más espacio. Sin embargo, habríamos comprometido buena parte de los ahorros y quizá no habríamos podido contratar personal. No sabemos si los nuevos clientes habrían llegado en esas condiciones. Por eso, sería injusto comparar la situación real, con todas sus dificultades, con una alternativa imaginaria a la que atribuimos únicamente ventajas.",
      "Sí hay una omisión comprobable: la propuesta de alquiler compartido quedó sin respuesta. Habríamos podido pedir sus condiciones y conservarlas para una revisión posterior. Reconocer esa falta no exige afirmar que la propuesta era perfecta. Recomiendo que la presidencia responda ahora a Julia, explique por qué no se estudió su iniciativa y asuma el compromiso de documentar futuras decisiones.",
      "Para resolver el problema actual, propongo comparar dos espacios compartidos durante las próximas semanas y fijar un límite de gasto. Cada opción debería incluir duración, transporte y tareas de mantenimiento. Si ninguna resulta viable, tendremos que revisar el alcance del reparto antes de aceptar más pedidos. El balance será útil si mejora nuestra próxima decisión; si solo sirve para repartir culpas con información que nadie tenía entonces, repetiremos el conflicto sin aprender de él."
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
        "prompt": "Presenta el caso de «Decisiones que habrían cambiado todo» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Si hubiéramos estudiado el alquiler compartido, hoy contaríamos con una comparación más sólida. No podemos afirmar que esa opción hubiera resultado más barata, porque desconocemos las condiciones que habría aceptado el propietario. Sí sabemos que una propuesta quedó sin respuesta. Considero necesario reconocer esa omisión y establecer un plazo para contestar futuras iniciativas. El objetivo del balance debería ser mejorar el procedimiento, además de valorar el resultado.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de explorar alternativas sin convertirlas en reproches. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Decisiones que habrían cambiado todo» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Paraná; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre explorar alternativas sin convertirlas en reproches; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Decisiones que habrían cambiado todo», ¿qué resume mejor el propósito?",
        "options": [
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas.",
          "Separar una omisión comprobada de escenarios imaginarios"
        ],
        "answer": 2,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Habríamos evitado trasladar cajas todos los días. Si lo hubiéramos alquilado, ahora trabajaríamos con menos tensión. Admito que el contrato era largo, pero habríamos podido negociar. Lo que me molesta es que nadie respondiera a mi propuesta de compartir el espacio.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Julia en «Decisiones que habrían cambiado todo», ¿qué intervención reconoces?",
        "options": [
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Habríamos evitado trasladar cajas todos los días"
        ],
        "answer": 2,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Si hubieran comparado presupuestos, ahora ___ menos gastos.",
        "answers": [
          [
            "tendrían"
          ]
        ],
        "why": "Contrafactual mixta."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «No recibimos el aviso y por eso no cancelamos el pedido.» Formula el pasado alternativo con si.",
        "model": "Si hubiéramos recibido el aviso, habríamos cancelado el pedido.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Si habrían escuchado a Julia, conocerían otra opción.",
        "answers": [
          "Si hubieran escuchado a Julia, conocerían otra opción."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Decisiones que habrían cambiado todo».",
        "model": "Si hubiéramos estudiado el alquiler compartido, hoy contaríamos con una comparación más sólida. No podemos afirmar que esa opción hubiera resultado más barata, porque desconocemos las condiciones que habría aceptado el propietario. Sí sabemos que una propuesta quedó sin respuesta. Considero necesario reconocer esa omisión y establecer un plazo para contestar futuras iniciativas. El objetivo del balance debería ser mejorar el procedimiento, además de valorar el resultado.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre explorar alternativas sin convertirlas en reproches; concede una razón y conserva tu argumento.",
        "model": "Si hubiéramos estudiado el alquiler compartido, hoy contaríamos con una comparación más sólida. No podemos afirmar que esa opción hubiera resultado más barata, porque desconocemos las condiciones que habría aceptado el propietario. Sí sabemos que una propuesta quedó sin respuesta. Considero necesario reconocer esa omisión y establecer un plazo para contestar futuras iniciativas. El objetivo del balance debería ser mejorar el procedimiento, además de valorar el resultado.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 4 a un mensaje cercano y a un informe formal.",
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
      "Puedo explorar alternativas sin convertirlas en reproches.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Vuelve al correo de coordinación: imagina qué habría ocurrido con otra distribución y formula el reproche como petición concreta.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
