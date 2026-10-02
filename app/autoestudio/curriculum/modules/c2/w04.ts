import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w04: Module = {
  "id": "c2-04",
  "level": "c2",
  "week": 4,
  "kind": "core",
  "title": "Una silla que nadie ocupa",
  "subtitle": "Subtexto, verbos de habla y límites de la inferencia",
  "stop": {
    "place": "Rosario",
    "country": "Argentina"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.disc.subtexto",
    "c2.voc.verbos-dicendi-matices",
    "c2.pron.intencion-pragmatica",
    "c2.read.relato-subtexto",
    "c2.wri.dialogo-subtexto"
  ],
  "reviewObjectives": [
    "c2.disc.cambio-registro",
    "c2.voc.lenguaje-juridico",
    "c2.gram.futuro-subjuntivo-juridico",
    "c2.pron.registro-voz",
    "c2.wri.traduccion-registro"
  ],
  "prerequisites": [
    "c2-03"
  ],
  "goal": {
    "canDo": "Puedo defender dos lecturas de un subtexto y controlar las inferencias de los verbos de habla.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica subtexto, verbos de habla y límites de la inferencia a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Subtexto, verbos de habla y límites de la inferencia",
        "body": [
          "El subtexto surge de la relación entre palabras, acciones y omisiones. Un silencio no tiene un significado universal. Elegir espetó en vez de dijo atribuye brusquedad; deslizó sugiere introducir algo indirectamente; zanjó presenta el cierre como efectivo. En el estilo indirecto, habría puede marcar conjetura o posterioridad respecto a un pasado: el contexto debe permitir distinguirlas. Una lectura sólida formula hipótesis rivales antes de atribuir motivos.",
          "En este caso, El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado.",
          "Murmurar destaca un volumen bajo; rezongar añade descontento; deslizar sugiere introducir algo indirectamente; espetar marca brusquedad; zanjar representa un intento de cierre. Al resumir, un verbo interpretativo necesita apoyo textual. Compara «murmuró que se quedaba» con «rezongó que se quedaba»: el volumen y la actitud no son la misma información."
        ],
        "examples": [
          {
            "es": "Clara dijo que la silla sobraba."
          },
          {
            "es": "Clara zanjó que la silla sobraba."
          },
          {
            "es": "La silla habría pertenecido al padre, según una nota sin firma."
          }
        ],
        "mistakes": [
          {
            "wrong": "El narrador sugiere de que hay una tensión.",
            "right": "El narrador sugiere que hay una tensión.",
            "why": "Sugerir introduce complemento directo sin de: sugiere que."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "Los verbos de habla pueden introducir una interpretación que el original deja abierta. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: El texto no confirma qué ha ocurrido con el padre. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "La muerte del padre queda confirmada expresamente.",
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
        "id": "c2-04-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Una silla que nadie ocupa.",
        "items": [
          {
            "q": "En el caso de Una silla que nadie ocupa, ¿qué formulación preserva el alcance?",
            "options": [
              "Clara zanjó que la silla sobraba.",
              "Sustituir dijo por espetó mantiene exactamente el mismo punto de vista."
            ],
            "answer": 0,
            "why": "El subtexto surge de la relación entre palabras, acciones y omisiones. Un silencio no tiene un significado universal. Elegir espetó en vez de dijo atribuye brusquedad; deslizó sugiere introducir algo indirectamente; zanjó presenta el cierre como efectivo. En el estilo indirecto, habría puede marcar conjetura o posterioridad respecto a un pasado: el contexto debe permitir distinguirlas. Una lectura sólida formula hipótesis rivales antes de atribuir motivos."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Una silla que nadie ocupa?",
            "options": [
              "Los verbos de habla pueden introducir una interpretación que el original deja abierta.",
              "La muerte del padre queda confirmada expresamente."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-04-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Una silla que nadie ocupa.",
        "items": [
          {
            "q": "Clara preguntó ___ ya había comprador.",
            "answers": [
              [
                "si"
              ]
            ],
            "why": "El subtexto surge de la relación entre palabras, acciones y omisiones. Un silencio no tiene un significado universal. Elegir espetó en vez de dijo atribuye brusquedad; deslizó sugiere introducir algo indirectamente; zanjó presenta el cierre como efectivo. En el estilo indirecto, habría puede marcar conjetura o posterioridad respecto a un pasado: el contexto debe permitir distinguirlas. Una lectura sólida formula hipótesis rivales antes de atribuir motivos."
          },
          {
            "q": "La silla volvió ___ la ventana.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "El subtexto surge de la relación entre palabras, acciones y omisiones. Un silencio no tiene un significado universal. Elegir espetó en vez de dijo atribuye brusquedad; deslizó sugiere introducir algo indirectamente; zanjó presenta el cierre como efectivo. En el estilo indirecto, habría puede marcar conjetura o posterioridad respecto a un pasado: el contexto debe permitir distinguirlas. Una lectura sólida formula hipótesis rivales antes de atribuir motivos."
          },
          {
            "q": "El gesto es compatible ___ una retirada incómoda.",
            "answers": [
              [
                "con"
              ]
            ],
            "why": "El subtexto surge de la relación entre palabras, acciones y omisiones. Un silencio no tiene un significado universal. Elegir espetó en vez de dijo atribuye brusquedad; deslizó sugiere introducir algo indirectamente; zanjó presenta el cierre como efectivo. En el estilo indirecto, habría puede marcar conjetura o posterioridad respecto a un pasado: el contexto debe permitir distinguirlas. Una lectura sólida formula hipótesis rivales antes de atribuir motivos."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Una silla que nadie ocupa",
        "items": [
          {
            "es": "espetar",
            "note": "decir con brusquedad"
          },
          {
            "es": "deslizar",
            "note": "introducir de manera indirecta"
          },
          {
            "es": "zanjar",
            "note": "dar por cerrado un asunto"
          },
          {
            "es": "eludir",
            "note": "evitar abordar algo"
          },
          {
            "es": "reticencia",
            "note": "reserva al decir o actuar"
          },
          {
            "es": "indicio",
            "note": "señal compatible con una hipótesis"
          },
          {
            "es": "atribuir",
            "note": "introducir una responsabilidad o intención"
          },
          {
            "es": "quedar en el aire",
            "note": "permanecer sin respuesta"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-04-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Una silla que nadie ocupa.",
        "pairs": [
          {
            "left": "espetar",
            "right": "decir con brusquedad"
          },
          {
            "left": "deslizar",
            "right": "introducir de manera indirecta"
          },
          {
            "left": "zanjar",
            "right": "dar por cerrado un asunto"
          },
          {
            "left": "eludir",
            "right": "evitar abordar algo"
          },
          {
            "left": "reticencia",
            "right": "reserva al decir o actuar"
          },
          {
            "left": "indicio",
            "right": "señal compatible con una hipótesis"
          },
          {
            "left": "atribuir",
            "right": "introducir una responsabilidad o intención"
          },
          {
            "left": "quedar en el aire",
            "right": "permanecer sin respuesta"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Silencio y lectura abierta",
    "explanation": [
      "Ensaya un poco como aceptación incómoda y como objeción suave. No asignes una emoción única a una pausa: compara qué lectura permite el conjunto de la escena.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Molesta un poco, pero puede quedarse."
      },
      {
        "es": "Molesta un poco; prefiero que la muevas."
      }
    ],
    "perceive": {
      "id": "c2-04-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Una silla que nadie ocupa».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Una silla que nadie ocupa. ¿Qué contenido permite recuperar?",
          "options": [
            "Molesta un poco; prefiero que la muevas.",
            "Molesta un poco, pero puede quedarse."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Molesta un poco, pero puede quedarse.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Una silla que nadie ocupa. ¿Qué formulación aparece?",
          "options": [
            "Molesta un poco; prefiero que la muevas.",
            "Molesta un poco, pero puede quedarse."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Molesta un poco; prefiero que la muevas.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Molesta un poco, pero puede quedarse.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Molesta un poco; prefiero que la muevas.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Una silla que nadie ocupa",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Lucía",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Tomás",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "En mi lectura, la silla representa al padre y el hermano quiere quitarla para no hablar de él. Lo digo con bastante seguridad porque vuelve a colocarla al final. Pero reconozco que he añadido una muerte que el texto nunca afirma. Puede haber otras ausencias y no todas convierten la venta del taller en una traición."
      },
      {
        "speaker": "b",
        "text": "A mí me interesa el un poco de Clara. Si fuera una reconciliación completa, esperaría una aceptación menos incómoda; aunque esa expectativa también procede de mis hábitos como lector. La frase permite aceptar la silla sin renunciar a la queja. No resolver el conflicto puede ser una manera de conservar la relación, al menos durante ese día."
      },
      {
        "speaker": "a",
        "text": "Cambié dijo por espetó al resumir la escena y ahora veo que intensifiqué la agresividad. No es un detalle inocente. En una reseña puedo defender que la respuesta suena brusca, siempre que lo justifique; en una sinopsis no debería introducir esa lectura como si estuviera escrita. También retiraría huyó: el movimiento hacia los vasos admite la evasión, pero no la demuestra."
      },
      {
        "speaker": "b",
        "text": "Y cuidado con llamar neutral a la versión sin esos verbos. El narrador se detiene en las manchas de las patas y deja fuera años de historia. Esa elección nos enseña dónde mirar. Para la discusión de mañana llevaría dos hipótesis sobre la última escena, una prueba a favor de cada una y un detalle que las incomode. No buscamos acertar una intención secreta de la autora; buscamos mostrar qué nos autoriza a leer y qué estamos poniendo de nuestra parte."
      },
      {
        "speaker": "a",
        "text": "La lectora editorial distingue una sugerencia intensa de una certeza, y eso me ayuda. Yo puedo decir que el relato me hizo pensar en un duelo sin afirmar que lo representa explícitamente. También puedo reconocer que el café desvía una pregunta y ofrece cuidado a la vez. Las funciones de un gesto no tienen por qué excluirse, aunque conviene mostrar qué detalle sostiene cada una."
      },
      {
        "speaker": "b",
        "text": "Además, no toda oscuridad merece defenderse como subtexto. Si un pronombre hace que atribuyamos una intervención a alguien que aún no ha entrado, quizá hay un problema de referencia. En clase compararía esas dos incertidumbres: la que permite interpretar y la que impide seguir la escena. Esa comparación nos obliga a justificar por qué conservamos una ambigüedad en vez de celebrarla automáticamente."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-04-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Una silla que nadie ocupa",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Una silla que nadie ocupa?",
              "options": [
                "La muerte del padre queda confirmada expresamente.",
                "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Una silla que nadie ocupa?",
              "options": [
                "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.",
                "Sustituir dijo por espetó mantiene exactamente el mismo punto de vista."
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
          "id": "c2-04-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Una silla que nadie ocupa",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Una silla que nadie ocupa?",
              "options": [
                "El texto no confirma qué ha ocurrido con el padre.",
                "La venta del taller ya se canceló al final."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Una silla que nadie ocupa?",
              "options": [
                "El texto no confirma qué ha ocurrido con el padre.",
                "Sustituir dijo por espetó mantiene exactamente el mismo punto de vista."
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
          "id": "c2-04-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Una silla que nadie ocupa",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Una silla que nadie ocupa?",
              "options": [
                "Los verbos de habla pueden introducir una interpretación que el original deja abierta.",
                "Sustituir dijo por espetó mantiene exactamente el mismo punto de vista."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Una silla que nadie ocupa?",
              "options": [
                "Los verbos de habla pueden introducir una interpretación que el original deja abierta.",
                "Sustituir dijo por espetó mantiene exactamente el mismo punto de vista."
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
    "title": "Una silla que nadie ocupa · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce.",
      "La conversación parecía tratar sobre el inventario. Faltaban dos herramientas, sobraban varias cajas y había que decidir qué conservar. Sin embargo, cada propuesta práctica encontraba una objeción que no se correspondía del todo con su contenido. Cuando el hermano sugirió vender la mesa, Clara preguntó si ya tenía comprador. Él respondió que solo lo había dicho. La pregunta podía expresar una sospecha de acuerdo previo, pero también la necesidad de saber si la venta era una posibilidad real. Convertirla inmediatamente en una acusación cerraría una ambigüedad que el relato mantiene.",
      "Al mediodía llegó una vecina con las llaves que había guardado durante el cierre. Preguntó dónde se sentaría ahora el padre. Clara le ofreció café; el hermano fue a buscar vasos, aunque había dos sobre la mesa. El gesto puede leerse como una retirada, no como prueba de una emoción determinada. La ausencia del padre se vuelve visible porque nadie corrige el tiempo verbal de la vecina. Aun así, no sabemos si ha muerto, se ha mudado o ha dejado de trabajar allí. El relato distribuye certezas e incertidumbres con cuidado.",
      "En la última escena, el hermano devuelve la silla a la ventana y pregunta si molesta. Clara responde «un poco», pero no la mueve. Una lectura sentimental convertiría ese gesto en reconciliación. Otra, menos tranquilizadora, vería una tregua que permite aplazar el conflicto sobre la venta. Ambas necesitan explicar la respuesta mínima de Clara y el hecho de que la mesa siga marcada con una etiqueta de precio. La voz narrativa no invita a adivinar un secreto único: invita a sostener varias hipótesis sin fingir que todas tienen el mismo apoyo.",
      "Nota de edición. En una primera versión, la autora había escrito «Clara espetó que antes no estorbaba» y «él huyó a buscar vasos». Después sustituyó esos verbos por formas menos interpretativas. No eliminó la tensión: trasladó parte de su construcción al lector. El cambio tampoco convierte la narración en una cámara neutral. Elegir qué gesto se cuenta, cuánto tarda en contarse y qué dato se omite sigue orientando la interpretación. La aparente austeridad puede ser una forma muy precisa de intervención.",
      "Informe de una lectora editorial. El relato me hizo imaginar un duelo, pero esa imagen apareció antes de que yo pudiera apoyarla en un dato inequívoco. La lectora no proponía eliminar la sugerencia; proponía distinguir su intensidad de su certeza. Señaló que la pregunta de la vecina estaba formulada en futuro y que nadie respondía directamente. Después comparó esa escena con el gesto de ofrecer café. La hospitalidad podía funcionar como cuidado, como desvío o como ambas cosas. Una interpretación rica no necesita que cada acción tenga una única función.",
      "La autora descartó añadir una explicación al final, pero aceptó revisar un pronombre en el segundo párrafo. Algunos lectores atribuían la propuesta de venta a la vecina, que aún no había entrado. Esa confusión no contribuía al subtexto: impedía reconstruir quién estaba presente. La distinción entre ambigüedad deliberada y referencia defectuosa no puede decidirse solo por la intención del escritor. Debe examinarse qué trabajo interpretativo permite cada dificultad. La incertidumbre sobre el padre abre lecturas pertinentes; la incertidumbre accidental sobre quién habla puede cerrar la posibilidad de seguir el diálogo. El control estilístico consiste en conservar la primera y reparar la segunda, sin convertir el relato en una explicación de sí mismo."
    ],
    "tasks": [
      {
        "id": "c2-04-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Una silla que nadie ocupa.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Una silla que nadie ocupa»?",
            "options": [
              "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.",
              "La muerte del padre queda confirmada expresamente."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Una silla que nadie ocupa»?",
            "options": [
              "El texto no confirma qué ha ocurrido con el padre.",
              "La venta del taller ya se canceló al final."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-04-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Una silla que nadie ocupa con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.» con «La muerte del padre queda confirmada expresamente.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. El texto no confirma qué ha ocurrido con el padre.",
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
          "quote": "Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Nota de edición.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-04-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Una silla que nadie ocupa.",
        "items": [
          {
            "words": [
              "La",
              "etiqueta",
              "de",
              "precio",
              "mantiene",
              "abierto",
              "el",
              "conflicto."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "El",
              "narrador",
              "evita",
              "nombrar",
              "la",
              "ausencia."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-04-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Una silla que nadie ocupa».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "La muerte del padre queda confirmada expresamente.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "El texto no confirma qué ha ocurrido con el padre.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "La venta del taller ya se canceló al final.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-04-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Una silla que nadie ocupa.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Una silla que nadie ocupa». Conserva la tesis y una reserva.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Una silla que nadie ocupa» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "El texto no confirma qué ha ocurrido con el padre. El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-04-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.cambio-registro. Recupera la semana 3, «Lo que la cláusula permite». Material de contraste: El reglamento de la residencia artística ocupaba nueve páginas. La mayoría de las personas admitidas había leído sobre todo una frase: «La estancia podrá prorrogarse hasta treinta días, siempre que exista disponibilidad, sin perjuicio de la revisión de las condiciones económicas». En el grupo de participantes, la frase se convirtió en «tenemos un mes más por el mismo precio». Nadie había mentido de manera deliberada. Al circular, la posibilidad pasó a ser certeza y la reserva económica desapareció por parecer un detalle secundario. Formulación de trabajo: Si alguien incumple el plazo, deberá justificar el retraso.\n\nRecupera «Alternancia de registros» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Una silla que nadie ocupa»: «Clara zanjó que la silla sobraba.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En el nuevo contraste, «Clara zanjó que la silla sobraba.» debe interpretarse dentro de esta cuestión: Subtexto, verbos de habla y límites de la inferencia. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.lenguaje-juridico. Recupera la semana 3, «Lo que la cláusula permite». Unidades disponibles: sin perjuicio de (sin eliminar otra facultad); a tenor de (según el contenido de una disposición); subsanar (corregir un defecto documental); de pleno derecho (por efecto directo de la norma invocada); incumpliere (incumple, en una condición de estilo jurídico); prórroga (ampliación de un plazo); fehaciente (que permite acreditar un hecho); facultad (posibilidad de actuación reconocida). Pasaje: El reglamento de la residencia artística ocupaba nueve páginas. La mayoría de las personas admitidas había leído sobre todo una frase: «La estancia podrá prorrogarse hasta treinta días, siempre que exista disponibilidad, sin perjuicio de la revisión de las condiciones económicas». En el grupo de participantes, la frase se convirtió en «tenemos un mes más por el mismo precio». Nadie había mentido de manera deliberada. Al circular, la posibilidad pasó a ser certeza y la reserva económica desapareció por parecer un detalle secundario.\n\nRecupera «Lenguaje jurídico-administrativo»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Una silla que nadie ocupa»: «Clara zanjó que la silla sobraba.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En este contraste, «sin perjuicio de» nombra sin eliminar otra facultad; «a tenor de», según el contenido de una disposición. La elección debe conservar esa diferencia. En el nuevo contraste, «Clara zanjó que la silla sobraba.» debe interpretarse dentro de esta cuestión: Subtexto, verbos de habla y límites de la inferencia. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.futuro-subjuntivo-juridico. Recupera la semana 3, «Lo que la cláusula permite». Contrastes suministrados: Quien incumpliere el plazo deberá justificar la demora. / Si alguien incumple el plazo, deberá justificar el retraso. / La revisión se efectuará sin perjuicio del derecho a reclamar.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Futuro de subjuntivo y fórmulas arcaizantes». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Una silla que nadie ocupa»: «Clara zanjó que la silla sobraba.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "En las cláusulas, sin perjuicio de preserva otra facultad; no significa a pesar de que todo quede anulado. Siempre que introduce condición y salvo que una excepción. El futuro de subjuntivo sobreviva en fórmulas como quien incumpliere no obliga a reproducirlo al explicar: si alguien incumple conserva la condición. Una versión clara debe mantener sujeto obligado, acción, plazo, excepción y consecuencia; simplificar no permite ampliar derechos. Aplicación al caso: La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En el nuevo contraste, «Clara zanjó que la silla sobraba.» debe interpretarse dentro de esta cuestión: Subtexto, verbos de habla y límites de la inferencia. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.registro-voz. Recupera la semana 3, «Lo que la cláusula permite». Textos para ensayo oral: «La estancia puede ampliarse, siempre que haya plazas.» / «La estancia se amplía; hay plazas confirmadas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Registro y voz» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Una silla que nadie ocupa»: «Clara zanjó que la silla sobraba.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Separa facultad, condición y reserva con pausas breves. No relegues sin perjuicio de al final con menor volumen si esa reserva cambia la decisión del oyente. Un ensayo defendible conserva esta distinción del caso: Una mediación clara conserva condiciones y señala los vacíos sin inventar garantías. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Clara zanjó que la silla sobraba.» debe interpretarse dentro de esta cuestión: Subtexto, verbos de habla y límites de la inferencia. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.traduccion-registro. Recupera la semana 3, «Lo que la cláusula permite». Modelo parcial que puedes transformar: La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene.\n\nRecupera «Traducción intralingüística» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Una silla que nadie ocupa»: «Clara zanjó que la silla sobraba.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: Una mediación clara conserva condiciones y señala los vacíos sin inventar garantías. En el nuevo contraste, «Clara zanjó que la silla sobraba.» debe interpretarse dentro de esta cuestión: Subtexto, verbos de habla y límites de la inferencia. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Escribe un comentario de 450–550 palabras que contraste dos lecturas del final. Incluye un diálogo alternativo de 120 palabras donde el desacuerdo sobre la venta se infiera sin nombrarlo; explica una elección de verbo de habla.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "Clara dijo que la silla sobraba.",
      "Clara zanjó que la silla sobraba.",
      "La silla habría pertenecido al padre, según una nota sin firma.",
      "espetar",
      "deslizar",
      "zanjar"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo."
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
        "prompt": "Conduce una conversación literaria: presenta dos hipótesis, pide una prueba a quien discrepe y reformula tu interpretación cuando aparezca la etiqueta de precio como contraejemplo.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «La muerte del padre queda confirmada expresamente.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Una silla que nadie ocupa.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. El texto no confirma qué ha ocurrido con el padre.",
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
        "task": "Presenta tu decisión más discutible sobre Una silla que nadie ocupa y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «El texto no confirma qué ha ocurrido con el padre.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «Sustituir dijo por espetó mantiene exactamente el mismo punto de vista.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Una silla que nadie ocupa: ¿qué conclusión conserva el alcance?",
        "options": [
          "La muerte del padre queda confirmada expresamente.",
          "El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Una silla que nadie ocupa, ¿qué afirmación debe rechazarse?",
        "options": [
          "La venta del taller ya se canceló al final.",
          "El texto no confirma qué ha ocurrido con el padre."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Una silla que nadie ocupa. ¿Qué interpretación mantiene?",
        "options": [
          "Los verbos de habla pueden introducir una interpretación que el original deja abierta.",
          "Sustituir dijo por espetó mantiene exactamente el mismo punto de vista."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "Los verbos de habla pueden introducir una interpretación que el original deja abierta.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Una silla que nadie ocupa», ¿qué unidad expresa «decir con brusquedad»? ___ .",
        "answers": [
          [
            "espetar"
          ]
        ],
        "hint": "decir con brusquedad",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «introducir de manera indirecta» en este expediente usamos ___ .",
        "answers": [
          [
            "deslizar"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "El narrador sugiere de que hay una tensión.",
        "answers": [
          "El narrador sugiere que hay una tensión."
        ],
        "why": "Sugerir introduce complemento directo sin de: sugiere que."
      },
      {
        "type": "transform",
        "source": "Clara espetó que la mesa seguía en venta.",
        "instruction": "Elimina la atribución de brusquedad sustituyendo únicamente el verbo introductorio por «dijo».",
        "answers": [
          "Clara dijo que la mesa seguía en venta."
        ],
        "why": "Retirar una atribución de tono: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Una silla que nadie ocupa»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo.",
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
      "Interpreto subtexto, verbos de habla y límites de la inferencia en fuentes originales.",
      "Puedo explicar por qué «La muerte del padre queda confirmada expresamente.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: El texto no confirma qué ha ocurrido con el padre.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo.» y registra qué cambiarías."
    ]
  }
};
