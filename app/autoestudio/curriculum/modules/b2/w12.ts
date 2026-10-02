import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w12: Module = {
  "id": "b2-12",
  "level": "b2",
  "week": 12,
  "kind": "core",
  "title": "Lo que permiten concluir los indicios",
  "subtitle": "Formular y descartar hipótesis sobre el pasado.",
  "stop": {
    "place": "Neuquén",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.probabilidad-pasado",
    "b2.voc.investigacion",
    "b2.pron.conjetura",
    "b2.fun.especular-pasado",
    "b2.read.caso"
  ],
  "reviewObjectives": [
    "b2.gram.pasiva-impersonalidad",
    "b2.voc.prensa",
    "b2.pron.lectura-noticias",
    "b2.fun.informar-objetivamente",
    "b2.read.noticia",
    "b2.disc.argumentacion",
    "b2.disc.posicionamiento",
    "b2.voc.ciudad-sostenible",
    "b2.pron.exposicion-oral",
    "b2.wri.ensayo-argumentativo",
    "b2.spk.exposicion"
  ],
  "prerequisites": [
    "b2-11"
  ],
  "goal": {
    "canDo": "Puedo formular y descartar hipótesis sobre el pasado con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: rectificar una acusación y mantener hipótesis abiertas.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: formular y descartar hipótesis sobre el pasado. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Formular y descartar hipótesis sobre el pasado",
        "body": [
          "El futuro compuesto puede expresar conjetura sobre un hecho anterior al presente: habrá salido. El condicional compuesto puede conjeturar desde un momento pasado: habría salido antes de nuestra llegada. Debió de salir presenta una inferencia pasada. El contexto distingue estas lecturas de un futuro terminado o una consecuencia condicional."
        ],
        "examples": [
          {
            "es": "La puerta está cerrada; el encargado habrá salido.",
            "note": "Conjetura sobre un hecho reciente."
          },
          {
            "es": "Cuando llegamos ya no había nadie; habrían terminado antes.",
            "note": "Conjetura desde un punto pasado; ellos."
          },
          {
            "es": "Puede que la alarma se haya activado por el viento.",
            "note": "Posibilidad sobre un hecho anterior."
          }
        ],
        "mistakes": [
          {
            "wrong": "Puede que alguien ha movido las bandejas.",
            "right": "Puede que alguien haya movido las bandejas.",
            "why": "Puede que selecciona subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Un indicio hace compatible una explicación, pero no la demuestra por sí solo. Debe de sugiere probabilidad; puede que más subjuntivo abre una posibilidad. Para descartar una hipótesis, indica qué dato contradice su condición necesaria; la ausencia de una prueba no demuestra automáticamente la hipótesis opuesta."
        ],
        "examples": [
          {
            "es": "La puerta está cerrada; el encargado habrá salido.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Puede que la alarma se haya activado por el viento.",
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
        "prompt": "Completa estas decisiones lingüísticas de lo que permiten concluir los indicios; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "La puerta está cerrada; el encargado ___ salido.",
            "answers": [
              [
                "habrá"
              ]
            ],
            "why": "Conjetura sobre un hecho reciente."
          },
          {
            "q": "Cuando llegamos ya no había nadie; ___ terminado antes.",
            "answers": [
              [
                "habrían"
              ]
            ],
            "why": "Conjetura desde un punto pasado; ellos."
          },
          {
            "q": "Puede que la alarma se ___ activado por el viento.",
            "answers": [
              [
                "haya"
              ]
            ],
            "why": "Posibilidad sobre un hecho anterior."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Probablemente alguien ha movido las bandejas.» Expresa conjetura con futuro compuesto.",
            "model": "Alguien habrá movido las bandejas.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Era posible que el cierre hubiera fallado antes.» Formula la hipótesis desde ahora con puede que.",
            "model": "Puede que el cierre haya fallado antes.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Quizá habían terminado cuando llegamos.» Usa condicional compuesto de conjetura.",
            "model": "Habrían terminado cuando llegamos.",
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
        "title": "Formular y descartar hipótesis sobre el pasado",
        "items": [
          {
            "es": "reunir indicios",
            "note": "recoger señales relevantes"
          },
          {
            "es": "contrastar versiones",
            "note": "comparar explicaciones"
          },
          {
            "es": "descartar una hipótesis",
            "note": "rechazar una explicación incompatible"
          },
          {
            "es": "establecer una secuencia",
            "note": "ordenar acontecimientos"
          },
          {
            "es": "comprobar un registro",
            "note": "examinar datos guardados"
          },
          {
            "es": "extraer una conclusión",
            "note": "deducir un resultado"
          },
          {
            "es": "dejar margen",
            "note": "admitir incertidumbre"
          },
          {
            "es": "corroborar un dato",
            "note": "confirmarlo con otra fuente"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para formular y descartar hipótesis sobre el pasado con su significado.",
        "pairs": [
          {
            "left": "reunir indicios",
            "right": "recoger señales relevantes"
          },
          {
            "left": "contrastar versiones",
            "right": "comparar explicaciones"
          },
          {
            "left": "descartar una hipótesis",
            "right": "rechazar una explicación incompatible"
          },
          {
            "left": "establecer una secuencia",
            "right": "ordenar acontecimientos"
          },
          {
            "left": "comprobar un registro",
            "right": "examinar datos guardados"
          },
          {
            "left": "extraer una conclusión",
            "right": "deducir un resultado"
          },
          {
            "left": "dejar margen",
            "right": "admitir incertidumbre"
          },
          {
            "left": "corroborar un dato",
            "right": "confirmarlo con otra fuente"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pronuncia conjeturas con una conclusión no tajante; compara habrá salido con ha salido y explica qué aporta el tiempo verbal además de la voz.",
    "explanation": [
      "Pronuncia conjeturas con una conclusión no tajante; compara habrá salido con ha salido y explica qué aporta el tiempo verbal además de la voz.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "La puerta está cerrada; el encargado habrá salido."
      },
      {
        "es": "Cuando llegamos ya no había nadie; habrían terminado antes."
      },
      {
        "es": "Puede que la alarma se haya activado por el viento."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de lo que permiten concluir los indicios, ¿qué fragmento se oye?",
          "options": [
            "habrá",
            "había",
            "haya"
          ],
          "answer": 0,
          "why": "Conjetura sobre un hecho reciente.",
          "audio": "La puerta está cerrada; el encargado habrá salido.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de lo que permiten concluir los indicios, ¿qué fragmento se oye?",
          "options": [
            "habían",
            "hubieron",
            "habrían"
          ],
          "answer": 2,
          "why": "Conjetura desde un punto pasado; ellos.",
          "audio": "Cuando llegamos ya no había nadie; habrían terminado antes.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "La puerta está cerrada; el encargado habrá salido.",
        "tip": "Pronuncia conjeturas con una conclusión no tajante; compara habrá salido con ha salido y explica qué aporta el tiempo verbal además de la voz.",
        "voice": "es-ES-f"
      },
      {
        "text": "Cuando llegamos ya no había nadie; habrían terminado antes.",
        "tip": "Pronuncia conjeturas con una conclusión no tajante; compara habrá salido con ha salido y explica qué aporta el tiempo verbal además de la voz.",
        "voice": "es-ES-f"
      },
      {
        "text": "Puede que la alarma se haya activado por el viento.",
        "tip": "Pronuncia conjeturas con una conclusión no tajante; compara habrá salido con ha salido y explica qué aporta el tiempo verbal además de la voz.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Lo que permiten concluir los indicios",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Coordinadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Voluntario",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Técnica",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Antes de escribir otro mensaje, repasemos lo comprobado. La tarjeta de mantenimiento abrió la puerta a las nueve. Las bandejas cambiaron de sitio y las etiquetas aparecieron debajo de una caja. No faltan herramientas. ¿Qué hipótesis siguen siendo compatibles con esos datos?"
      },
      {
        "speaker": "s2",
        "text": "Yo pensé que alguien habría entrado a llevarse material. Ahora parece menos probable. Puede que la persona de mantenimiento haya movido las bandejas y olvidado cerrar bien. El golpe que oyó la vecina podría haber sido la puerta, aunque no sabemos de dónde vino."
      },
      {
        "speaker": "s3",
        "text": "Ayer probé el mecanismo y no se cerró a la primera. Habrá fallado otras veces, pero eso tampoco puedo afirmarlo sin revisar. Cuando llegó mantenimiento, el cierre ya habría estado desajustado. Esa es una posibilidad que conviene comprobar antes de hablar de negligencia."
      },
      {
        "speaker": "s1",
        "text": "¿Qué dato nos ayudaría a distinguir un olvido de una avería? No podemos reconstruir cada segundo de la noche, pero sí podemos comprobar si el mecanismo funciona correctamente con viento y si el problema se repite después del ajuste."
      },
      {
        "speaker": "s2",
        "text": "Retiraré del grupo mi afirmación de que hubo un robo. No basta con añadir quizá al final, porque ya lo presenté como un hecho. Explicaré que faltaban datos y que el inventario no confirma ninguna pérdida. También pediré que no se compartan nombres."
      },
      {
        "speaker": "s3",
        "text": "Me parece bien. Dejemos la conclusión abierta sobre el origen exacto y tomemos una medida útil en ambos casos: revisar el cierre y registrar los traslados. Una solución preventiva no necesita fingir que conocemos con certeza todo lo ocurrido."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Neuquén?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Lo que permiten concluir los indicios?",
              "options": [
                "Rectificar una acusación y mantener hipótesis abiertas",
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas."
              ],
              "answer": 0,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Lo que permiten concluir los indicios»?",
              "options": [
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites."
              ],
              "answer": 2,
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
          "prompt": "Localiza una intervención concreta en «Lo que permiten concluir los indicios».",
          "items": [
            {
              "q": "¿Qué rectificará el voluntario?",
              "options": [
                "El horario de apertura de la tarjeta.",
                "La existencia de un cierre defectuoso comprobado históricamente.",
                "Su afirmación de que hubo un robo."
              ],
              "answer": 2,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Lo que permiten concluir los indicios»?",
              "options": [
                "No hay información que podamos discutir en esta reunión.",
                "Antes de escribir otro mensaje, repasemos lo comprobado.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte."
              ],
              "answer": 1,
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
              "prompt": "En «Lo que permiten concluir los indicios», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Me parece bien. Dejemos la conclusión abierta sobre el origen exacto y tomemos una medida útil en ambos casos: revisar el cierre y registrar los traslados. Una solución preventiva no necesita fingir que conocemos con certeza todo lo ocurrido.",
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
    "title": "Lo que permiten concluir los indicios: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "El invernadero comunitario amaneció con varias bandejas de plantas fuera de su lugar. La primera explicación circuló en el grupo de mensajes antes de que llegara la coordinadora: alguien habría entrado durante la noche y se habría llevado parte de los materiales. La puerta lateral estaba entreabierta y faltaban dos etiquetas. Esos datos hacían posible la hipótesis de una entrada no autorizada, pero todavía no permitían distinguirla de un traslado realizado por una persona del equipo.",
      "El registro de acceso mostraba una apertura a las nueve de la noche con la tarjeta de mantenimiento. Su titular explicó que había ido a cerrar una ventana porque se anunciaba viento. Una fotografía enviada a las ocho y media mostraba las bandejas junto a esa misma ventana. A las nueve y diez, una vecina oyó un golpe. Nadie sabía si provenía del invernadero o de un contenedor cercano. Incorporar ese sonido a la historia como prueba de un robo habría requerido más información de la que realmente existía.",
      "La revisión de inventario reveló que no faltaban herramientas. Las plantas estaban en otra mesa y las etiquetas aparecieron debajo de una caja. La persona de mantenimiento recordó entonces que había movido algunas bandejas para alcanzar el cierre, aunque no pudo asegurar que hubiera recolocado todas. La puerta habrá quedado mal cerrada, sugirió la coordinadora. Era una explicación plausible, no una certeza: el mecanismo también podía haberse abierto por una avería. Decidieron comprobarlo antes de atribuir el problema a un descuido individual.",
      "El caso terminó sin una conclusión espectacular. Se ajustó el cierre y se creó un registro sencillo para anotar movimientos de material. Algunas personas consideraron que se había perdido tiempo investigando un incidente menor. Otras señalaron que la investigación había evitado una acusación injustificada. A veces la utilidad de reunir pruebas consiste precisamente en renunciar a una historia atractiva y sustituirla por una explicación más limitada, cuya incertidumbre se reconoce en lugar de disimularse."
    ],
    "glossary": [
      {
        "es": "reunir indicios",
        "note": "recoger señales relevantes"
      },
      {
        "es": "contrastar versiones",
        "note": "comparar explicaciones"
      },
      {
        "es": "descartar una hipótesis",
        "note": "rechazar una explicación incompatible"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué permite concluir el inventario?",
            "options": [
              "No confirma la pérdida inicialmente supuesta.",
              "Identifica sin duda a una persona culpable.",
              "Demuestra que nunca entró nadie."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué valor tiene habrá fallado en boca de la técnica?",
            "options": [
              "Promesa de reparación futura.",
              "Consecuencia de una condición explícita.",
              "Conjetura sobre posibles fallos anteriores."
            ],
            "answer": 2,
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
            "prompt": "En «Lo que permiten concluir los indicios», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "El registro confirma una entrada a las nueve, pero no una sustracción. Las bandejas habrán sido trasladadas para alcanzar la ventana, según la explicación de mantenimiento. También es posible que el cierre hubiera fallado antes de esa visita. La aparición de las etiquetas y el inventario debilitan la hipótesis del robo. Recomiendo comprobar el mecanismo y registrar futuros movimientos. Hasta entonces, conviene mantener abierta la causa exacta de la puerta entreabierta y rectificar cualquier acusación presentada como certeza.",
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
          "quote": "El invernadero comunitario amaneció con varias bandejas de plantas fuera de su lugar.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "A veces la utilidad de reunir pruebas consiste precisamente en renunciar a una historia atractiva y sustituirla por una explicación más limitada, cuya incertidumbre se reconoce en lugar de disimularse.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Revisa las hipótesis del almacén de la semana 4 y el titular de la 9: separa alternativa contrafactual, conjetura y hecho confirmado.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Neuquén y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Lo que permiten concluir los indicios»,",
              "La",
              "puerta",
              "está",
              "cerrada;",
              "el",
              "encargado",
              "habrá",
              "salido."
            ],
            "why": "Conjetura sobre un hecho reciente."
          },
          {
            "words": [
              "En",
              "«Lo que permiten concluir los indicios»,",
              "Puede",
              "que",
              "la",
              "alarma",
              "se",
              "haya",
              "activado",
              "por",
              "el",
              "viento."
            ],
            "why": "Posibilidad sobre un hecho anterior."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de lo que permiten concluir los indicios; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Puede que alguien ha movido las bandejas.",
            "answers": [
              "Puede que alguien haya movido las bandejas."
            ],
            "why": "Puede que selecciona subjuntivo."
          },
          {
            "sentence": "Probablemente habrá abrido la ventana.",
            "answers": [
              "Probablemente habrá abierto la ventana."
            ],
            "why": "Abrir tiene participio irregular."
          },
          {
            "sentence": "Puede de que el cierre haya fallado.",
            "answers": [
              "Puede que el cierre haya fallado."
            ],
            "why": "La construcción puede que no lleva de."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre formular y descartar hipótesis sobre el pasado con una postura y una razón; adapta el destinatario.",
            "model": "El registro confirma una entrada a las nueve, pero no una sustracción.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Lo que permiten concluir los indicios» sin debilitarla, y responde con una condición verificable.",
            "model": "El registro confirma una entrada a las nueve, pero no una sustracción. Las bandejas habrán sido trasladadas para alcanzar la ventana, según la explicación de mantenimiento. También es posible que el cierre hubiera fallado antes de esa visita. La aparición de las etiquetas y el inventario debilitan la hipótesis del robo. Recomiendo comprobar el mecanismo y registrar futuros movimientos. Hasta entonces, conviene mantener abierta la causa exacta de la puerta entreabierta y rectificar cualquier acusación presentada como certeza.",
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
            "prompt": "Recupera la semana 9 sin abrir su explicación y aplica sus recursos a «Lo que permiten concluir los indicios»: Pasiva e impersonalidad; Prensa y actualidad; Leer noticias en voz alta; Informar con distancia; Leer una noticia completa. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar ser + participio, se pasiva, tercera plural impersonal y uno/una. Puedo entender titulares, secciones y vocabulario periodístico. Puedo leer una noticia con el ritmo y las pausas de un presentador. Puedo presentar hechos sin implicarme y atribuir información a fuentes. Puedo distinguir titular, entradilla, hechos, fuentes y contexto.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 11 sin abrir su explicación y aplica sus recursos a «Lo que permiten concluir los indicios»: Estructura argumentativa; Marcar la postura; Urbanismo y movilidad; Ritmo de una exposición oral; Ensayo argumentativo; Exposición de dos minutos. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo organizar tesis, argumentos, contraargumentos y conclusión con conectores variados. Puedo marcar mi postura y el grado de certeza: es indudable que, cabe pensar que, no está tan claro que. Puedo debatir sobre transporte, vivienda, gentrificación y espacio público. Puedo usar pausas estratégicas y énfasis para hacer clara una exposición. Puedo escribir un ensayo de 220 palabras con contraargumento. Puedo defender una propuesta en dos minutos con estructura clara.",
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
    "task": "Redacta una reconstrucción del incidente con una cronología, dos hipótesis, una explicación descartada y una conclusión proporcional a la evidencia. Propón una comprobación adicional.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "El futuro compuesto puede expresar conjetura sobre un hecho anterior al presente: habrá salido. El condicional compuesto puede conjeturar desde un momento pasado: habría salido antes de nuestra llegada. Debió de salir presenta una inferencia pasada. El contexto distingue estas lecturas de un futuro terminado o una consecuencia condicional.",
      "Un indicio hace compatible una explicación, pero no la demuestra por sí solo. Debe de sugiere probabilidad; puede que más subjuntivo abre una posibilidad. Para descartar una hipótesis, indica qué dato contradice su condición necesaria; la ausencia de una prueba no demuestra automáticamente la hipótesis opuesta.",
      "Revisa las hipótesis del almacén de la semana 4 y el titular de la 9: separa alternativa contrafactual, conjetura y hecho confirmado."
    ],
    "model": [
      "El registro del invernadero confirma una entrada con la tarjeta de mantenimiento a las nueve de la noche. Antes de esa hora, una fotografía mostraba las bandejas junto a la ventana. Por la mañana estaban en otra mesa, la puerta lateral permanecía entreabierta y faltaban dos etiquetas. Estos hechos originaron la hipótesis de un robo, pero todavía no la demostraban.",
      "La revisión posterior debilita esa explicación. No faltaban herramientas y las etiquetas aparecieron debajo de una caja. La persona de mantenimiento explicó que había movido algunas bandejas para alcanzar el cierre de la ventana. Habrá quedado alguna fuera de su lugar, aunque no puede reconstruir todos los movimientos. Su versión es compatible con el inventario, sin que eso permita confirmar cada detalle de la noche.",
      "Existen al menos dos hipótesis para la puerta: pudo quedar mal cerrada por un descuido o abrirse debido a un fallo del mecanismo. La técnica observó que no cerraba a la primera, por lo que quizá ya hubiera estado desajustado antes de la visita. El golpe que oyó una vecina no permite elegir entre ambas explicaciones, porque no se identificó su procedencia.",
      "Recomiendo retirar la afirmación pública de que hubo un robo y explicar qué información la contradice. También conviene comprobar el cierre con viento, ajustarlo y registrar futuros traslados de material. Estas medidas serán útiles cualquiera que sea el origen exacto del incidente. La conclusión más prudente reconoce una incertidumbre concreta; no necesita completar los huecos con una historia que resulte convincente solo porque parece posible."
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
        "prompt": "Presenta el caso de «Lo que permiten concluir los indicios» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "El registro confirma una entrada a las nueve, pero no una sustracción. Las bandejas habrán sido trasladadas para alcanzar la ventana, según la explicación de mantenimiento. También es posible que el cierre hubiera fallado antes de esa visita. La aparición de las etiquetas y el inventario debilitan la hipótesis del robo. Recomiendo comprobar el mecanismo y registrar futuros movimientos. Hasta entonces, conviene mantener abierta la causa exacta de la puerta entreabierta y rectificar cualquier acusación presentada como certeza.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de formular y descartar hipótesis sobre el pasado. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Lo que permiten concluir los indicios» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Neuquén; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre formular y descartar hipótesis sobre el pasado; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Lo que permiten concluir los indicios», ¿qué resume mejor el propósito?",
        "options": [
          "Rectificar una acusación y mantener hipótesis abiertas",
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas."
        ],
        "answer": 0,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Yo pensé que alguien habría entrado a llevarse material. Ahora parece menos probable. Puede que la persona de mantenimiento haya movido las bandejas y olvidado cerrar bien. El golpe que oyó la vecina podría haber sido la puerta, aunque no sabemos de dónde vino.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Voluntario en «Lo que permiten concluir los indicios», ¿qué intervención reconoces?",
        "options": [
          "Yo pensé que alguien habría entrado a llevarse material",
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto."
        ],
        "answer": 0,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Los papeles no están; alguien los ___ guardado en otro cajón.",
        "answers": [
          [
            "habrá"
          ]
        ],
        "why": "Conjetura sobre un hecho anterior."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Probablemente ya habían cerrado cuando llegó la vecina.» Usa condicional compuesto de conjetura.",
        "model": "Ya habrían cerrado cuando llegó la vecina.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Puede que las etiquetas habían caído detrás de la caja.",
        "answers": [
          "Puede que las etiquetas hayan caído detrás de la caja."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Lo que permiten concluir los indicios».",
        "model": "El registro confirma una entrada a las nueve, pero no una sustracción. Las bandejas habrán sido trasladadas para alcanzar la ventana, según la explicación de mantenimiento. También es posible que el cierre hubiera fallado antes de esa visita. La aparición de las etiquetas y el inventario debilitan la hipótesis del robo. Recomiendo comprobar el mecanismo y registrar futuros movimientos. Hasta entonces, conviene mantener abierta la causa exacta de la puerta entreabierta y rectificar cualquier acusación presentada como certeza.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre formular y descartar hipótesis sobre el pasado; concede una razón y conserva tu argumento.",
        "model": "El registro confirma una entrada a las nueve, pero no una sustracción. Las bandejas habrán sido trasladadas para alcanzar la ventana, según la explicación de mantenimiento. También es posible que el cierre hubiera fallado antes de esa visita. La aparición de las etiquetas y el inventario debilitan la hipótesis del robo. Recomiendo comprobar el mecanismo y registrar futuros movimientos. Hasta entonces, conviene mantener abierta la causa exacta de la puerta entreabierta y rectificar cualquier acusación presentada como certeza.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 12 a un mensaje cercano y a un informe formal.",
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
      "Puedo formular y descartar hipótesis sobre el pasado.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Revisa las hipótesis del almacén de la semana 4 y el titular de la 9: separa alternativa contrafactual, conjetura y hecho confirmado.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
