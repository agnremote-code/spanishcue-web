import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w19: Module = {
  "id": "b2-19",
  "level": "b2",
  "week": 19,
  "kind": "core",
  "title": "Una maleta, varias formas de contarlo",
  "subtitle": "Narrar con perspectiva y adaptarse a otras variedades.",
  "stop": {
    "place": "Montevideo",
    "country": "Uruguay"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.gram.tiempos-relato",
    "b2.voc.descripcion-literaria",
    "b2.pron.lectura-expresiva",
    "b2.read.cuento",
    "b2.wri.microrrelato",
    "b2.gram.voseo",
    "b2.gram.ustedes-vosotros",
    "b2.voc.lexico-regional",
    "b2.pron.sheismo-voseo",
    "b2.fun.adaptarse-variedad",
    "b2.lis.rioplatense"
  ],
  "reviewObjectives": [
    "b2.voc.colocaciones",
    "b2.voc.formacion-palabras",
    "b2.gram.nominalizacion",
    "b2.pron.acento-derivados",
    "b2.wri.reescritura-precisa",
    "b2.fun.definir",
    "b2.disc.marcadores-conversacionales",
    "b2.disc.reformuladores",
    "b2.voc.expresiones-coloquiales",
    "b2.pron.prosodia-marcadores",
    "b2.fun.gestionar-conversacion",
    "b2.spk.conversacion-natural"
  ],
  "prerequisites": [
    "b2-18"
  ],
  "goal": {
    "canDo": "Puedo narrar con perspectiva y adaptarse a otras variedades con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: explicar decisiones narrativas sin borrar la variación.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: narrar con perspectiva y adaptarse a otras variedades. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Narrar con perspectiva y adaptarse a otras variedades",
        "body": [
          "El imperfecto construye fondo y hábitos; el indefinido hace avanzar hechos; el pluscuamperfecto sitúa antecedentes. El presente histórico acerca una escena pasada si el cambio es coherente. El perfecto y el indefinido varían por región y contexto: hoy he llegado y hoy llegué pueden ser opciones normales sin cambiar la cronología básica."
        ],
        "examples": [
          {
            "es": "Cuando volvió a la estación, el tren ya había salido.",
            "note": "Anterioridad a otro pasado."
          },
          {
            "es": "Vos tenés la maleta junto a la puerta.",
            "note": "Voseo presente rioplatense."
          },
          {
            "es": "Imperativo de venir con vos: vení y mirá la etiqueta.",
            "note": "Acento final del imperativo voseante."
          }
        ],
        "mistakes": [
          {
            "wrong": "Vos tienes la misma maleta, dijo el personaje voseante.",
            "right": "Vos tenés la misma maleta, dijo el personaje voseante.",
            "why": "En el voseo rioplatense trabajado aquí se usa tenés; otras regiones tienen paradigmas distintos."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "El voseo rioplatense utiliza formas como vos tenés, vení y decime; ustedes y vosotros seleccionan conjugaciones distintas. Auto/coche/carro, departamento/piso y celular/móvil son variantes léxicas. La sílaba tónica del voseo puede practicarse con síntesis, pero el sheísmo requiere una muestra real verificada en clase: una etiqueta de voz no demuestra una variedad."
        ],
        "examples": [
          {
            "es": "Cuando volvió a la estación, el tren ya había salido.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Imperativo de venir con vos: vení y mirá la etiqueta.",
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
        "prompt": "Completa estas decisiones lingüísticas de una maleta, varias formas de contarlo; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Cuando volvió a la estación, el tren ya ___ salido.",
            "answers": [
              [
                "había"
              ]
            ],
            "why": "Anterioridad a otro pasado."
          },
          {
            "q": "Vos ___ la maleta junto a la puerta.",
            "answers": [
              [
                "tenés"
              ]
            ],
            "why": "Voseo presente rioplatense."
          },
          {
            "q": "Imperativo de venir con vos: ___ y mirá la etiqueta.",
            "answers": [
              [
                "vení"
              ]
            ],
            "why": "Acento final del imperativo voseante."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Tú tienes la maleta; ven y dime qué pasó.» Adapta al voseo rioplatense.",
            "model": "Vos tenés la maleta; vení y decime qué pasó.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Cuando volvió, el tren salió antes de su llegada.» Marca la anterioridad mediante pluscuamperfecto.",
            "model": "Cuando volvió, el tren ya había salido.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Vosotros podéis dejar vuestras maletas aquí.» Adapta al tratamiento plural con ustedes.",
            "model": "Ustedes pueden dejar sus maletas aquí.",
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
        "title": "Narrar con perspectiva y adaptarse a otras variedades",
        "items": [
          {
            "es": "guardar silencio",
            "note": "permanecer sin hablar"
          },
          {
            "es": "reconocer un gesto",
            "note": "identificar una señal corporal"
          },
          {
            "es": "evocar un recuerdo",
            "note": "traer una experiencia a la memoria"
          },
          {
            "es": "dar un giro",
            "note": "cambiar la dirección del relato"
          },
          {
            "es": "dejar entrever",
            "note": "sugerir sin declarar"
          },
          {
            "es": "quedarse inmóvil",
            "note": "no moverse tras una impresión"
          },
          {
            "es": "deshacer la maleta",
            "note": "sacar su contenido"
          },
          {
            "es": "pedir precisión",
            "note": "solicitar aclaración de una palabra"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para narrar con perspectiva y adaptarse a otras variedades con su significado.",
        "pairs": [
          {
            "left": "guardar silencio",
            "right": "permanecer sin hablar"
          },
          {
            "left": "reconocer un gesto",
            "right": "identificar una señal corporal"
          },
          {
            "left": "evocar un recuerdo",
            "right": "traer una experiencia a la memoria"
          },
          {
            "left": "dar un giro",
            "right": "cambiar la dirección del relato"
          },
          {
            "left": "dejar entrever",
            "right": "sugerir sin declarar"
          },
          {
            "left": "quedarse inmóvil",
            "right": "no moverse tras una impresión"
          },
          {
            "left": "deshacer la maleta",
            "right": "sacar su contenido"
          },
          {
            "left": "pedir precisión",
            "right": "solicitar aclaración de una palabra"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada.",
    "explanation": [
      "Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Cuando volvió a la estación, el tren ya había salido."
      },
      {
        "es": "Vos tenés la maleta junto a la puerta."
      },
      {
        "es": "Imperativo de venir con vos: vení y mirá la etiqueta."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de una maleta, varias formas de contarlo, ¿qué fragmento se oye?",
          "options": [
            "ha",
            "hubo",
            "había"
          ],
          "answer": 2,
          "why": "Anterioridad a otro pasado.",
          "audio": "Cuando volvió a la estación, el tren ya había salido.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de una maleta, varias formas de contarlo, ¿qué fragmento se oye?",
          "options": [
            "tengas",
            "tenés",
            "tienes"
          ],
          "answer": 1,
          "why": "Voseo presente rioplatense.",
          "audio": "Vos tenés la maleta junto a la puerta.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Cuando volvió a la estación, el tren ya había salido.",
        "tip": "Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada.",
        "voice": "es-ES-f"
      },
      {
        "text": "Vos tenés la maleta junto a la puerta.",
        "tip": "Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada.",
        "voice": "es-ES-f"
      },
      {
        "text": "Imperativo de venir con vos: vení y mirá la etiqueta.",
        "tip": "Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Una maleta, varias formas de contarlo",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Conductora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Elena",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Editor",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Elena, en tu relato pasas del pasado al presente cuando suena el teléfono. ¿Querías indicar que había cambiado el momento de la historia o acercar al lector a una escena especialmente importante para la protagonista y su relación con el hermano?"
      },
      {
        "speaker": "s2",
        "text": "Quería acercarlo. El viaje ya había ocurrido, pero al decir entonces suena el celular recupero la impresión de sorpresa. Después vuelvo al pasado. También mantuve vení y vos tenés porque forman parte de la voz del personaje, aunque yo use otras formas en la narración."
      },
      {
        "speaker": "s3",
        "text": "Me parece coherente. Solo pediría aclarar salida del costado para lectores que no conocen la estación. No hace falta sustituir todo el vocabulario regional. Podemos entender auto por contexto y explicar una referencia espacial sin borrar la manera de hablar del hermano."
      },
      {
        "speaker": "s1",
        "text": "Para quien escucha este ejercicio, recordamos que la reproducción es sintética y no acredita sheísmo ni una voz montevideana real. En clase pueden contrastar una muestra autorizada y fijarse en cómo suenan y y ll, además del acento de las formas voseantes."
      },
      {
        "speaker": "s2",
        "text": "También me preguntaron por qué escribí hoy llegué y no hoy he llegado en otro fragmento. Las dos formas pueden aparecer según la variedad y la perspectiva temporal. No quería que una elección se presentara como error solo porque no coincide con el uso de otro país."
      },
      {
        "speaker": "s3",
        "text": "Lo esencial es mantener la coherencia de la escena y permitir aclaraciones. El final no afirma que se reconciliaran por completo. La maleta les da una conversación posible. Si el lector entiende esa diferencia, puede apreciar el giro sin convertirlo en una moraleja que el relato no sostiene."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Montevideo?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Una maleta, varias formas de contarlo?",
              "options": [
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas.",
                "Explicar decisiones narrativas sin borrar la variación"
              ],
              "answer": 2,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Una maleta, varias formas de contarlo»?",
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
          "prompt": "Localiza una intervención concreta en «Una maleta, varias formas de contarlo».",
          "items": [
            {
              "q": "¿Para qué se utiliza el presente histórico?",
              "options": [
                "Para negar que el viaje hubiera ocurrido.",
                "Para acercar una escena sin cambiar la cronología.",
                "Para trasladar toda la acción al futuro."
              ],
              "answer": 1,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Una maleta, varias formas de contarlo»?",
              "options": [
                "Elena, en tu relato pasas del pasado al presente cuando suena el teléfono.",
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
              "prompt": "En «Una maleta, varias formas de contarlo», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Lo esencial es mantener la coherencia de la escena y permitir aclaraciones. El final no afirma que se reconciliaran por completo. La maleta les da una conversación posible. Si el lector entiende esa diferencia, puede apreciar el giro sin convertirlo en una moraleja que el relato no sostiene.",
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
    "title": "Una maleta, varias formas de contarlo: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Cuando volvió a la estación, Elena llevaba veinte años sin ver a su hermano. Había viajado toda la noche y esperaba reconocerlo por la forma de caminar, porque las fotografías recientes le resultaban extrañas. En el andén había un hombre con una maleta azul, pero no era él. Elena miró el reloj y recordó la última discusión, aquella en la que ambos habían prometido no volver a pedirse nada. Se habían escrito después, mensajes breves que evitaban cuidadosamente el motivo de la despedida.",
      "Entonces suena el celular. «¿Ya llegaste? Vení a la salida del costado; te estoy esperando en el auto». La voz no había cambiado tanto como ella temía. Elena se quedó inmóvil unos segundos antes de responder. En otra época habría corregido la expresión salida del costado, como si la manera de nombrar una puerta pudiera decir algo sobre la manera de vivir. Ahora preguntó simplemente a qué lado debía ir. El edificio había sido reformado y no quería convertir una duda práctica en otra pequeña batalla.",
      "Su hermano estaba junto a un coche viejo. «Vos tenés la misma maleta», dijo, y sonrió sin acercarse todavía. Elena iba a responder que no, que aquella la había comprado hacía poco, cuando vio una marca en el asa. La maleta no era suya. Durante el viaje había tomado otra idéntica y no lo había advertido hasta ese momento. Los dos se miraron y comenzaron a reír, primero con sorpresa y después con una facilidad que ninguno había previsto.",
      "Tuvieron que volver al mostrador, explicar el error y esperar noticias del equipaje correcto. No hablaron entonces de los años perdidos. Hablaron de etiquetas, teléfonos y horarios, y esa conversación ordinaria les permitió quedarse juntos sin exigir una reconciliación inmediata. Elena había imaginado un encuentro capaz de resolverlo todo. Al final, una maleta equivocada les ofreció algo más modesto: un asunto compartido del que sí sabían cómo empezar a hablar."
    ],
    "glossary": [
      {
        "es": "guardar silencio",
        "note": "permanecer sin hablar"
      },
      {
        "es": "reconocer un gesto",
        "note": "identificar una señal corporal"
      },
      {
        "es": "evocar un recuerdo",
        "note": "traer una experiencia a la memoria"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué permite el giro de la maleta?",
            "options": [
              "Confirmar una reconciliación completa.",
              "Demostrar que el hermano planeó el error.",
              "Iniciar una conversación compartida sin resolver todo el pasado."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué decisión defiende el editor sobre las variantes?",
            "options": [
              "Imponer un único pasado correcto para hoy.",
              "Conservarlas y aclarar referencias cuando sea necesario.",
              "Eliminar toda palabra regional."
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
            "prompt": "En «Una maleta, varias formas de contarlo», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro.",
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
          "quote": "Cuando volvió a la estación, Elena llevaba veinte años sin ver a su hermano.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Al final, una maleta equivocada les ofreció algo más modesto: un asunto compartido del que sí sabían cómo empezar a hablar.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Convierte el caso del invernadero en relato sin presentar conjeturas como hechos; adapta un diálogo a voseo y explica un marcador conversacional.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Montevideo y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Una maleta, varias formas de contarlo»,",
              "Cuando",
              "volvió",
              "a",
              "la",
              "estación,",
              "el",
              "tren",
              "ya",
              "había",
              "salido."
            ],
            "why": "Anterioridad a otro pasado."
          },
          {
            "words": [
              "En",
              "«Una maleta, varias formas de contarlo»,",
              "Imperativo",
              "de",
              "venir",
              "con",
              "vos:",
              "vení",
              "y",
              "mirá",
              "la",
              "etiqueta."
            ],
            "why": "Acento final del imperativo voseante."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de una maleta, varias formas de contarlo; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Vos tienes la misma maleta, dijo el personaje voseante.",
            "answers": [
              "Vos tenés la misma maleta, dijo el personaje voseante."
            ],
            "why": "En el voseo rioplatense trabajado aquí se usa tenés; otras regiones tienen paradigmas distintos."
          },
          {
            "sentence": "Ustedes podéis dejar la maleta aquí.",
            "answers": [
              "Ustedes pueden dejar la maleta aquí."
            ],
            "why": "Ustedes exige tercera persona plural."
          },
          {
            "sentence": "Cuando volvió, el tren ya había saliendo.",
            "answers": [
              "Cuando volvió, el tren ya había salido."
            ],
            "why": "Haber forma tiempos compuestos con participio."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre narrar con perspectiva y adaptarse a otras variedades con una postura y una razón; adapta el destinatario.",
            "model": "Antes de salir, había ensayado varias disculpas.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Una maleta, varias formas de contarlo» sin debilitarla, y responde con una condición verificable.",
            "model": "Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro.",
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
            "prompt": "Recupera la semana 16 sin abrir su explicación y aplica sus recursos a «Una maleta, varias formas de contarlo»: Colocaciones frecuentes; Formación de palabras; Nominalización; Acento en derivados; Reescribir con precisión; Definir y explicar conceptos. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo combinar palabras de forma natural: tomar una decisión, plantear un problema, sacar conclusiones. Puedo deducir y crear palabras con prefijos y sufijos frecuentes. Puedo transformar verbos en sustantivos para escribir con concisión. Puedo pronunciar carácter/caracteres, régimen/regímenes y adverbios en -mente con dos acentos. Puedo mejorar un texto sustituyendo verbos comodín y repeticiones. Puedo definir un concepto, dar un ejemplo y diferenciarlo de otro parecido.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 18 sin abrir su explicación y aplica sus recursos a «Una maleta, varias formas de contarlo»: Marcadores conversacionales; Reformuladores; Expresiones coloquiales frecuentes; Prosodia de los marcadores; Gestionar una conversación; Conversación espontánea. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar bueno, pues, vamos, a ver, la verdad es que y hombre/mujer según la intención. Puedo reformular con o sea, es decir, mejor dicho, en otras palabras y vamos. Puedo entender y usar expresiones frecuentes como dar igual, pasarse, quedar bien o mal. Puedo dar a bueno o pues valores distintos con la entonación. Puedo ganar tiempo, reformular, interrumpir con educación y retomar. Puedo mantener una conversación de tres minutos sin bloquearme.",
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
    "task": "Escribe un relato de reencuentro con fondo, antecedente y giro final. Mantén una variedad coherente en el diálogo e incorpora una aclaración natural de léxico; añade una nota que explique una decisión narrativa.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "El imperfecto construye fondo y hábitos; el indefinido hace avanzar hechos; el pluscuamperfecto sitúa antecedentes. El presente histórico acerca una escena pasada si el cambio es coherente. El perfecto y el indefinido varían por región y contexto: hoy he llegado y hoy llegué pueden ser opciones normales sin cambiar la cronología básica.",
      "El voseo rioplatense utiliza formas como vos tenés, vení y decime; ustedes y vosotros seleccionan conjugaciones distintas. Auto/coche/carro, departamento/piso y celular/móvil son variantes léxicas. La sílaba tónica del voseo puede practicarse con síntesis, pero el sheísmo requiere una muestra real verificada en clase: una etiqueta de voz no demuestra una variedad.",
      "Convierte el caso del invernadero en relato sin presentar conjeturas como hechos; adapta un diálogo a voseo y explica un marcador conversacional."
    ],
    "model": [
      "Antes de salir, Elena había ensayado varias disculpas. Llevaba veinte años sin ver a su hermano y temía que una frase equivocada devolviera la conversación a la discusión con la que se habían separado. Durante el viaje miraba fotografías recientes, pero seguía buscando en ellas el rostro que recordaba de otra época.",
      "En la estación sonó el celular. «Vení a la entrada del costado», dijo su hermano. Elena le pidió que precisara cuál: el edificio había cambiado y no reconocía las salidas. «La que da al estacionamiento; estoy junto al auto». Ella agradeció la explicación sin corregir ninguna palabra. Había pasado demasiado tiempo defendiendo maneras de decir cosas que ambos entendían.",
      "Su hermano esperaba junto a un coche viejo. Miró el equipaje y sonrió: «Vos tenés la misma maleta». Elena iba a explicarle que era nueva cuando ve la etiqueta. No reconoce el nombre. Durante el viaje había tomado otra maleta idéntica. Los dos se quedaron en silencio unos segundos y después comenzaron a reír con una facilidad inesperada.",
      "Volvieron al mostrador y explicaron el error. Mientras esperaban una respuesta, hablaron de horarios, teléfonos y etiquetas. No resolvieron veinte años de distancia; encontraron una primera conversación que podían sostener juntos. Las disculpas ensayadas quedaron para otro momento, sin desaparecer por ello.",
      "Nota de revisión: utilizo el imperfecto para el fondo y el pluscuamperfecto para los antecedentes. Reservo el presente histórico para descubrir la etiqueta. Mantengo el voseo del hermano y aclaro una referencia espacial mediante diálogo, sin sustituir su variedad por otra."
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
        "prompt": "Presenta el caso de «Una maleta, varias formas de contarlo» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de narrar con perspectiva y adaptarse a otras variedades. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Una maleta, varias formas de contarlo» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Montevideo; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre narrar con perspectiva y adaptarse a otras variedades; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Una maleta, varias formas de contarlo», ¿qué resume mejor el propósito?",
        "options": [
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas.",
          "Explicar decisiones narrativas sin borrar la variación"
        ],
        "answer": 2,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Quería acercarlo. El viaje ya había ocurrido, pero al decir entonces suena el celular recupero la impresión de sorpresa. Después vuelvo al pasado. También mantuve vení y vos tenés porque forman parte de la voz del personaje, aunque yo use otras formas en la narración.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Elena en «Una maleta, varias formas de contarlo», ¿qué intervención reconoces?",
        "options": [
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Quería acercarlo"
        ],
        "answer": 2,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Vos ___ venir mañana, según el voseo del diálogo.",
        "answers": [
          [
            "podés"
          ]
        ],
        "why": "Voseo rioplatense en presente."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Tú vienes con el móvil y me cuentas qué ocurrió.» Adapta al voseo rioplatense usando celular.",
        "model": "Vos venís con el celular y me contás qué ocurrió.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Vení y dígame qué pasó, le dijo a su hermano usando vos.",
        "answers": [
          "Vení y decime qué pasó, le dijo a su hermano usando vos."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Una maleta, varias formas de contarlo».",
        "model": "Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre narrar con perspectiva y adaptarse a otras variedades; concede una razón y conserva tu argumento.",
        "model": "Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 19 a un mensaje cercano y a un informe formal.",
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
      "Puedo narrar con perspectiva y adaptarse a otras variedades.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Convierte el caso del invernadero en relato sin presentar conjeturas como hechos; adapta un diálogo a voseo y explica un marcador conversacional.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
