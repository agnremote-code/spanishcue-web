import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w02: Module = {
  "id": "c2-02",
  "level": "c2",
  "week": 2,
  "kind": "core",
  "title": "La cortesía de decir lo contrario",
  "subtitle": "Ironía, litote y evaluación implícita",
  "stop": {
    "place": "Montevideo",
    "country": "Uruguay"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.disc.ironia-productiva",
    "c2.voc.evaluacion-implicita",
    "c2.pron.ironia-variedades",
    "c2.lis.humor-ironico",
    "c2.spk.comentario-ironico"
  ],
  "reviewObjectives": [
    "c2.gram.ambiguedad-sintactica",
    "c2.disc.desambiguar",
    "c2.voc.polisemia-avanzada",
    "c2.pron.prosodia-desambiguadora",
    "c2.read.textos-ambiguos"
  ],
  "prerequisites": [
    "c2-01"
  ],
  "goal": {
    "canDo": "Puedo interpretar y producir ironía cuyo blanco, límite y demanda literal sean identificables.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica ironía, litote y evaluación implícita a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Ironía, litote y evaluación implícita",
        "body": [
          "La ironía exige una distancia entre la valoración literal y una situación reconocible; no basta una entonación llamativa. La litote niega el extremo opuesto y deja graduar el juicio: no fue una solución impecable. La hipérbole exagera de forma recuperable. En un escrito institucional, el lector puede no compartir las claves irónicas: cambiar a una crítica literal es una elección de responsabilidad, no una pérdida de competencia.",
          "En este caso, La columna gana precisión al convertir la ironía en demandas verificables. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "Una puntualidad admirable: el informe llegó después de la votación."
          },
          {
            "es": "La explicación no fue precisamente exhaustiva."
          },
          {
            "es": "La explicación omitió los criterios de selección."
          }
        ],
        "mistakes": [
          {
            "wrong": "No es que la broma es cruel, sino que omite el coste.",
            "right": "No es que la broma sea cruel, sino que omite el coste.",
            "why": "No es que rechaza una explicación y selecciona subjuntivo: sea."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "La crítica puede reducir el daño ajeno si convierte a los afectados en decorado. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: La tallerista pide que se mencione el coste de los locales alternativos. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La columna gana precisión al convertir la ironía en demandas verificables.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "El humor elimina la necesidad de formular una demanda.",
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
        "id": "c2-02-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de La cortesía de decir lo contrario.",
        "items": [
          {
            "q": "En el caso de La cortesía de decir lo contrario, ¿qué formulación preserva el alcance?",
            "options": [
              "La explicación no fue precisamente exhaustiva.",
              "No ofrecer cifras convierte la columna en neutral."
            ],
            "answer": 0,
            "why": "La ironía exige una distancia entre la valoración literal y una situación reconocible; no basta una entonación llamativa. La litote niega el extremo opuesto y deja graduar el juicio: no fue una solución impecable. La hipérbole exagera de forma recuperable. En un escrito institucional, el lector puede no compartir las claves irónicas: cambiar a una crítica literal es una elección de responsabilidad, no una pérdida de competencia."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar La cortesía de decir lo contrario?",
            "options": [
              "La crítica puede reducir el daño ajeno si convierte a los afectados en decorado.",
              "El humor elimina la necesidad de formular una demanda."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-02-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso La cortesía de decir lo contrario.",
        "items": [
          {
            "q": "La obra no fue ___ barata.",
            "answers": [
              [
                "precisamente"
              ]
            ],
            "why": "La ironía exige una distancia entre la valoración literal y una situación reconocible; no basta una entonación llamativa. La litote niega el extremo opuesto y deja graduar el juicio: no fue una solución impecable. La hipérbole exagera de forma recuperable. En un escrito institucional, el lector puede no compartir las claves irónicas: cambiar a una crítica literal es una elección de responsabilidad, no una pérdida de competencia."
          },
          {
            "q": "La ironía depende ___ un contraste recuperable.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "La ironía exige una distancia entre la valoración literal y una situación reconocible; no basta una entonación llamativa. La litote niega el extremo opuesto y deja graduar el juicio: no fue una solución impecable. La hipérbole exagera de forma recuperable. En un escrito institucional, el lector puede no compartir las claves irónicas: cambiar a una crítica literal es una elección de responsabilidad, no una pérdida de competencia."
          },
          {
            "q": "No es que falten bromas, ___ que falta respuesta.",
            "answers": [
              [
                "sino"
              ]
            ],
            "why": "La ironía exige una distancia entre la valoración literal y una situación reconocible; no basta una entonación llamativa. La litote niega el extremo opuesto y deja graduar el juicio: no fue una solución impecable. La hipérbole exagera de forma recuperable. En un escrito institucional, el lector puede no compartir las claves irónicas: cambiar a una crítica literal es una elección de responsabilidad, no una pérdida de competencia."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para La cortesía de decir lo contrario",
        "items": [
          {
            "es": "elogio envenenado",
            "note": "aprobación aparente que descalifica"
          },
          {
            "es": "litote",
            "note": "atenuación mediante negación del contrario"
          },
          {
            "es": "hipérbole",
            "note": "exageración reconocible"
          },
          {
            "es": "sobrentendido",
            "note": "contenido inferido y no formulado"
          },
          {
            "es": "condescendencia",
            "note": "superioridad disfrazada de amabilidad"
          },
          {
            "es": "a todas luces",
            "note": "de manera evidente para quien habla"
          },
          {
            "es": "tener su mérito",
            "note": "reconocer un valor, a veces irónicamente"
          },
          {
            "es": "quedarse corto",
            "note": "no alcanzar la intensidad necesaria"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-02-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de La cortesía de decir lo contrario.",
        "pairs": [
          {
            "left": "elogio envenenado",
            "right": "aprobación aparente que descalifica"
          },
          {
            "left": "litote",
            "right": "atenuación mediante negación del contrario"
          },
          {
            "left": "hipérbole",
            "right": "exageración reconocible"
          },
          {
            "left": "sobrentendido",
            "right": "contenido inferido y no formulado"
          },
          {
            "left": "condescendencia",
            "right": "superioridad disfrazada de amabilidad"
          },
          {
            "left": "a todas luces",
            "right": "de manera evidente para quien habla"
          },
          {
            "left": "tener su mérito",
            "right": "reconocer un valor, a veces irónicamente"
          },
          {
            "left": "quedarse corto",
            "right": "no alcanzar la intensidad necesaria"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Contraste entre elogio literal e ironía",
    "explanation": [
      "Ensaya primero una valoración literal y después una irónica; observa duración, foco y descenso final. El contexto sostiene la inferencia: la síntesis no garantiza interpretar la ironía por la voz.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Una puntualidad admirable: llegaron antes de abrir."
      },
      {
        "es": "Una puntualidad admirable: llegaron después de cerrar."
      }
    ],
    "perceive": {
      "id": "c2-02-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «La cortesía de decir lo contrario».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre La cortesía de decir lo contrario. ¿Qué contenido permite recuperar?",
          "options": [
            "Una puntualidad admirable: llegaron después de cerrar.",
            "Una puntualidad admirable: llegaron antes de abrir."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Una puntualidad admirable: llegaron antes de abrir.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de La cortesía de decir lo contrario. ¿Qué formulación aparece?",
          "options": [
            "Una puntualidad admirable: llegaron después de cerrar.",
            "Una puntualidad admirable: llegaron antes de abrir."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Una puntualidad admirable: llegaron después de cerrar.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Una puntualidad admirable: llegaron antes de abrir.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Una puntualidad admirable: llegaron después de cerrar.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La columna gana precisión al convertir la ironía en demandas verificables.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: La cortesía de decir lo contrario",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Inés",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Raúl",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Me han dicho que mi columna fue demasiado amable. Tiene gracia: el municipio la considera una agresión y algunos talleristas creen que me quedé corta. Yo usé la imagen de la sala abierta al cielo porque resumía el absurdo. Ahora bien, comprendo que no resume el dinero que cada grupo ha tenido que poner para alquilar otro espacio."
      },
      {
        "speaker": "b",
        "text": "El problema de nunca llegamos tarde a lo importante es quién decide qué cuenta como importante. Si la frase se oye en la ceremonia, parece una promesa. Repetida después de catorce meses de retraso, parece una burla. No hace falta atribuir mala fe a la directora para reconocer ese efecto. La intención declarada de una persona no agota lo que sus palabras hacen."
      },
      {
        "speaker": "a",
        "text": "También me preocupa que la alternativa sea escribir siempre como un acta. Puedo criticar con humor y asumir la demanda literal. Diría: admirable capacidad de inaugurar lo que aún no se puede usar; y después exigiría fechas, presupuesto y un local. Retiraría, en cambio, el diminutivo retrasito: podría parecer que ridiculizo la queja de quienes esperan."
      },
      {
        "speaker": "b",
        "text": "Esa diferencia importa. La ironía dirigida a una autoridad y la ironía que convierte a los afectados en decorado no tienen el mismo coste. Te propongo mantener el contraste y citar a Elena sin presentarla como incapaz de entender una broma. Si luego la nota se adapta para un comunicado, eliminaría el elogio aparente y escribiría directamente que la apertura anunciada no garantiza todavía el uso de las instalaciones. Cambiar de registro también puede ser una forma de reparar."
      },
      {
        "speaker": "a",
        "text": "Una lectora me preguntó si no precisamente barato insinuaba una irregularidad. Yo quería evaluar prioridades, pero entiendo la lectura. Añadiré el coste anunciado y diré que no tengo una auditoría. No voy a usar la palabra humor como una exención de responsabilidad. La ironía puede sostener una crítica exacta, aunque nos obligue a renunciar a una frase que sonaba muy bien."
      },
      {
        "speaker": "b",
        "text": "Y esa renuncia puede explicarse sin pedir perdón por escribir con estilo. La pregunta es qué compromiso crea cada expresión. Si el lector puede inferir un fraude que no has documentado, necesitas otro encuadre. En la conversación con los talleristas, yo distinguiría también entre reírse de una promesa institucional y usar su perjuicio como escenario para una ocurrencia. No son efectos intercambiables. Para el cierre, conservaré esta distinción: La columna gana precisión al convertir la ironía en demandas verificables."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-02-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: La cortesía de decir lo contrario",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de La cortesía de decir lo contrario?",
              "options": [
                "El humor elimina la necesidad de formular una demanda.",
                "La columna gana precisión al convertir la ironía en demandas verificables."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre La cortesía de decir lo contrario?",
              "options": [
                "La columna gana precisión al convertir la ironía en demandas verificables.",
                "No ofrecer cifras convierte la columna en neutral."
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
          "id": "c2-02-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: La cortesía de decir lo contrario",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de La cortesía de decir lo contrario?",
              "options": [
                "La tallerista pide que se mencione el coste de los locales alternativos.",
                "La tallerista exige prohibir toda ironía."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre La cortesía de decir lo contrario?",
              "options": [
                "La tallerista pide que se mencione el coste de los locales alternativos.",
                "No ofrecer cifras convierte la columna en neutral."
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
          "id": "c2-02-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: La cortesía de decir lo contrario",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de La cortesía de decir lo contrario?",
              "options": [
                "La crítica puede reducir el daño ajeno si convierte a los afectados en decorado.",
                "No ofrecer cifras convierte la columna en neutral."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre La cortesía de decir lo contrario?",
              "options": [
                "La crítica puede reducir el daño ajeno si convierte a los afectados en decorado.",
                "No ofrecer cifras convierte la columna en neutral."
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
    "title": "La cortesía de decir lo contrario · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "La inauguración del centro cultural empezó con una disculpa por el retraso y continuó con una celebración de la puntualidad institucional. «Nunca llegamos tarde a lo importante», afirmó la directora, mientras un técnico intentaba abrir la puerta todavía sin terminar. La frase provocó risas. No era necesariamente una burla cruel: algunas personas parecían agradecer que el discurso oficial hubiera ofrecido, por accidente, una descripción suficientemente exacta de la tarde. Otras no rieron; llevaban meses sin un lugar donde ensayar.",
      "La columna publicada al día siguiente felicitaba al municipio por haber inventado una sala tan inclusiva que incluía la intemperie. El chiste condensaba una crítica: el edificio se había presentado como terminado cuando faltaban instalaciones básicas. Su eficacia dependía de un conocimiento compartido. Leído fuera de la ciudad, el elogio podía parecer una ocurrencia sobre arquitectura; leído por quienes habían perdido actividades, podía parecer una forma elegante de rebajar un perjuicio concreto a material humorístico.",
      "La autora afirmaba que la obra «no había salido precisamente barata». La negación evitaba una acusación explícita de despilfarro, pero invitaba al lector a construirla. Un concejal respondió que no se había indicado ninguna cifra falsa. Tenía razón en un sentido estrecho: el texto no ofrecía cifras. Eso no lo volvía neutral. La evaluación se alojaba en el contraste, en el diminutivo «retrasito» aplicado a catorce meses y en el elogio de una transparencia que dejaba ver el cielo por donde debía estar el techo.",
      "El mejor párrafo de la columna llegaba cuando abandonaba la ironía. Pedía un calendario verificable, un lugar provisional para los talleres y la publicación de las modificaciones presupuestarias. La transición no debilitaba los chistes anteriores: les daba un objeto y un límite. La ironía puede abrir una conversación, pero también permitir que todos disfruten de la superioridad de haber entendido sin que nadie tenga que formular una demanda. La precisión comienza donde el guiño deja de bastar.",
      "Respuesta de una tallerista. No me ofendió el humor, escribió Elena, sino que el artículo no mencionara los alquileres que estamos pagando entre nosotros. Tampoco quiero una crónica solemne de nuestra desgracia: queremos trabajar. Cuando el concejal llamó pequeña incomodidad a la suspensión de tres ciclos, la atenuación dejó de ser cortesía y se convirtió en una reducción de nuestra experiencia. Podría haber dicho que la solución provisional era insuficiente, aunque evitaba cancelar dos actividades. Habría sido menos brillante y más útil. La disputa no enfrenta a gente con humor y gente sin humor; enfrenta maneras de distribuir la atención.",
      "Comentario de una lectora. La autora me pide que distinga intención y efecto, escribió una suscriptora, pero ¿no debería distinguir también crítica e insinuación? Decir que la obra no salió precisamente barata permite sugerir un gasto injustificado sin comprometerse con esa acusación. La columnista respondió que la litote evaluaba la relación entre coste y resultado, no afirmaba una irregularidad contable. La réplica era plausible, aunque necesitaba un dato de referencia: caro con respecto a qué, para quién y a cambio de qué servicio. La ambigüedad retórica puede ser productiva; no por ello queda exenta de rendir cuentas.",
      "En la edición siguiente se añadió el presupuesto anunciado y se aclaró que la columna no disponía de una auditoría. Esa incorporación no convirtió el artículo en informe financiero. Delimitó la crítica para que el lector no confundiera una evaluación de prioridades con una denuncia de fraude. La autora mantuvo la ironía de la sala abierta al cielo y retiró una frase sobre bolsillos bien techados, cuya insinuación resultaba más grave que la evidencia disponible. Saber renunciar a un hallazgo verbal puede ser una forma de dominio expresivo: el efecto más brillante no siempre es el más defendible en la situación concreta."
    ],
    "tasks": [
      {
        "id": "c2-02-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en La cortesía de decir lo contrario.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «La cortesía de decir lo contrario»?",
            "options": [
              "La columna gana precisión al convertir la ironía en demandas verificables.",
              "El humor elimina la necesidad de formular una demanda."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «La cortesía de decir lo contrario»?",
            "options": [
              "La tallerista pide que se mencione el coste de los locales alternativos.",
              "La tallerista exige prohibir toda ironía."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-02-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de La cortesía de decir lo contrario con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La columna gana precisión al convertir la ironía en demandas verificables.» con «El humor elimina la necesidad de formular una demanda.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La columna gana precisión al convertir la ironía en demandas verificables. La tallerista pide que se mencione el coste de los locales alternativos.",
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
          "quote": "La inauguración del centro cultural empezó con una disculpa por el retraso y continuó con una celebración de la puntualidad institucional.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Respuesta de una tallerista.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-02-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso La cortesía de decir lo contrario.",
        "items": [
          {
            "words": [
              "El",
              "elogio",
              "aparente",
              "contiene",
              "una",
              "crítica",
              "concreta."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "La",
              "tallerista",
              "reclama",
              "un",
              "calendario",
              "verificable."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-02-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «La cortesía de decir lo contrario».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La columna gana precisión al convertir la ironía en demandas verificables.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "El humor elimina la necesidad de formular una demanda.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "La tallerista pide que se mencione el coste de los locales alternativos.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "La tallerista exige prohibir toda ironía.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-02-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de La cortesía de decir lo contrario.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «La cortesía de decir lo contrario». Conserva la tesis y una reserva.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «La cortesía de decir lo contrario» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "La tallerista pide que se mencione el coste de los locales alternativos. La columna gana precisión al convertir la ironía en demandas verificables.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-02-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.gram.ambiguedad-sintactica. Recupera la semana 1, «Dos lecturas, una responsabilidad». Contrastes suministrados: La comisión entrevistó a la asesora de la asociación que denunció el cierre. / La asociación denunció el cierre; la comisión entrevistó a su asesora. / Solo se revisarán los informes incompletos.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Ambigüedad sintáctica». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «La cortesía de decir lo contrario»: «La explicación no fue precisamente exhaustiva.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema. Aplicación al caso: La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso. En el nuevo contraste, «La explicación no fue precisamente exhaustiva.» debe interpretarse dentro de esta cuestión: Ironía, litote y evaluación implícita. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.desambiguar. Recupera la semana 1, «Dos lecturas, una responsabilidad». Material de contraste: El aviso cabía en una pantalla: «La comisión revisará los permisos de las asociaciones que presentaron alegaciones fuera de plazo». A primera vista, el ayuntamiento había anunciado una decisión, acaso discutible, pero comprensible. Bastaron dos llamadas para comprobar que no todos habían leído la misma decisión. Una asociación entendió que solo se revisarían los permisos correspondientes a las entidades cuyas alegaciones llegaron tarde. Otra sostuvo que todas las asociaciones habían alegado tarde y que, por tanto, la revisión sería general. La ausencia de una coma parecía distribuir derechos. Formulación de trabajo: La asociación denunció el cierre; la comisión entrevistó a su asesora.\n\nRecupera «Desambiguar en la escritura» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «La cortesía de decir lo contrario»: «La explicación no fue precisamente exhaustiva.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso. En el nuevo contraste, «La explicación no fue precisamente exhaustiva.» debe interpretarse dentro de esta cuestión: Ironía, litote y evaluación implícita. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.polisemia-avanzada. Pares originales: «Se admitió la queja a trámite» / «Se admitió que la queja era fundada»; «La revisión examina el texto» / «La revisión modifica el texto».\n\nDistingue los sentidos de admitir y revisión en estos pares. Redacta un aviso donde se admita un trámite sin afirmar que se ha dado la razón a quien reclama. Después produce una frase donde revisión signifique modificación efectiva. Contraste nuevo suministrado de «La cortesía de decir lo contrario»: «La explicación no fue precisamente exhaustiva.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Admitir a trámite significa aceptar examinar; admitir que la queja es fundada reconoce su contenido. Revisión puede ser examen o modificación. Aviso: la queja se admite a trámite y su fundamento será evaluado. Modificación: la revisión sustituyó la cláusula ambigua por dos condiciones explícitas. En el nuevo contraste, «La explicación no fue precisamente exhaustiva.» debe interpretarse dentro de esta cuestión: Ironía, litote y evaluación implícita. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.prosodia-desambiguadora. Recupera la semana 1, «Dos lecturas, una responsabilidad». Textos para ensayo oral: «Las asociaciones que alegaron tarde tendrán una revisión.» / «Todas las asociaciones alegaron tarde y tendrán una revisión.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Prosodia que desambigua» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «La cortesía de decir lo contrario»: «La explicación no fue precisamente exhaustiva.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Agrupa la relativa con su antecedente y evita una pausa que la convierta en comentario explicativo. Contrasta después una lectura restrictiva con una explicación separada. Un ensayo defendible conserva esta distinción del caso: La claridad del aviso no sustituye la justificación del criterio municipal. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «La explicación no fue precisamente exhaustiva.» debe interpretarse dentro de esta cuestión: Ironía, litote y evaluación implícita. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.textos-ambiguos. Recupera la semana 1, «Dos lecturas, una responsabilidad». Pasajes que debes contrastar: El aviso cabía en una pantalla: «La comisión revisará los permisos de las asociaciones que presentaron alegaciones fuera de plazo». A primera vista, el ayuntamiento había anunciado una decisión, acaso discutible, pero comprensible. Bastaron dos llamadas para comprobar que no todos habían leído la misma decisión. Una asociación entendió que solo se revisarían los permisos correspondientes a las entidades cuyas alegaciones llegaron tarde. Otra sostuvo que todas las asociaciones habían alegado tarde y que, por tanto, la revisión sería general. La ausencia de una coma parecía distribuir derechos.\n\nEl intercambio muestra que desambiguar no consiste en perseguir una frase capaz de sobrevivir sin contexto alguno. Consiste en proporcionar el contexto necesario para la decisión prevista y hacer visibles sus límites. Incluso la versión corregida podría quedar anticuada al día siguiente si llegara nueva documentación. Por eso el aviso debía distinguir una descripción fechada de una regla permanente. Una palabra como actualmente no sustituye una fecha cuando el texto circula durante meses; una fecha, a su vez, no explica qué hecho desencadena una revisión. La precisión se distribuye entre la oración, el documento y el procedimiento mediante el cual se mantiene vigente.\n\nRelee estos pasajes y recupera «Leer titulares y cláusulas ambiguas». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «La cortesía de decir lo contrario»: «La explicación no fue precisamente exhaustiva.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso. En el nuevo contraste, «La explicación no fue precisamente exhaustiva.» debe interpretarse dentro de esta cuestión: Ironía, litote y evaluación implícita. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Escribe una columna de 450–550 palabras sobre la inauguración y cierra con demandas verificables. Incluye una litote y una ironía cuyo blanco sea inequívoco; añade dentro del límite una versión literal de tu cierre para el boletín municipal.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "Una puntualidad admirable: el informe llegó después de la votación.",
      "La explicación no fue precisamente exhaustiva.",
      "La explicación omitió los criterios de selección.",
      "elogio envenenado",
      "litote",
      "hipérbole"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro."
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
      550
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Presenta la columna ante una tallerista y después ante una responsable municipal. Conserva la crítica, modifica el humor y explica qué inferencia no quieres provocar.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «El humor elimina la necesidad de formular una demanda.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de La cortesía de decir lo contrario.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La columna gana precisión al convertir la ironía en demandas verificables. La tallerista pide que se mencione el coste de los locales alternativos.",
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
        "task": "Presenta tu decisión más discutible sobre La cortesía de decir lo contrario y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «La tallerista pide que se mencione el coste de los locales alternativos.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «No ofrecer cifras convierte la columna en neutral.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de La cortesía de decir lo contrario: ¿qué conclusión conserva el alcance?",
        "options": [
          "El humor elimina la necesidad de formular una demanda.",
          "La columna gana precisión al convertir la ironía en demandas verificables."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de La cortesía de decir lo contrario, ¿qué afirmación debe rechazarse?",
        "options": [
          "La tallerista exige prohibir toda ironía.",
          "La tallerista pide que se mencione el coste de los locales alternativos."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de La cortesía de decir lo contrario. ¿Qué interpretación mantiene?",
        "options": [
          "La crítica puede reducir el daño ajeno si convierte a los afectados en decorado.",
          "No ofrecer cifras convierte la columna en neutral."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "La crítica puede reducir el daño ajeno si convierte a los afectados en decorado.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «La cortesía de decir lo contrario», ¿qué unidad expresa «aprobación aparente que descalifica»? ___ .",
        "answers": [
          [
            "elogio envenenado"
          ]
        ],
        "hint": "aprobación aparente que descalifica",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «atenuación mediante negación del contrario» en este expediente usamos ___ .",
        "answers": [
          [
            "litote"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "No es que la broma es cruel, sino que omite el coste.",
        "answers": [
          "No es que la broma sea cruel, sino que omite el coste."
        ],
        "why": "No es que rechaza una explicación y selecciona subjuntivo: sea."
      },
      {
        "type": "transform",
        "source": "La inauguración no fue precisamente puntual.",
        "instruction": "Sustituye la litote por una afirmación literal con «se retrasó», sin añadir un motivo.",
        "answers": [
          "La inauguración se retrasó."
        ],
        "why": "De la litote a la crítica literal: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «La cortesía de decir lo contrario»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro.",
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
      "Interpreto ironía, litote y evaluación implícita en fuentes originales.",
      "Puedo explicar por qué «El humor elimina la necesidad de formular una demanda.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: La tallerista pide que se mencione el coste de los locales alternativos.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La columna gana precisión al convertir la ironía en demandas verificables.» y registra qué cambiarías."
    ]
  }
};
