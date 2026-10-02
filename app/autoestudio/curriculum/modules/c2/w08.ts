import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w08: Module = {
  "id": "c2-08",
  "level": "c2",
  "week": 8,
  "kind": "core",
  "title": "La palabra que inclina la balanza",
  "subtitle": "Casi sinónimos, connotación y alusiones",
  "stop": {
    "place": "León",
    "country": "España"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.voc.casi-sinonimos",
    "c2.voc.refranes-intertextualidad",
    "c2.pron.matiz-lexico-voz",
    "c2.wri.precision-lexica",
    "c2.read.columna-literaria"
  ],
  "reviewObjectives": [
    "c2.disc.subtexto",
    "c2.voc.verbos-dicendi-matices",
    "c2.pron.intencion-pragmatica",
    "c2.read.relato-subtexto",
    "c2.wri.dialogo-subtexto",
    "c2.read.prosa-densa",
    "c2.gram.sintaxis-compleja",
    "c2.voc.conectores-cultos",
    "c2.pron.lectura-densa",
    "c2.wri.abstract"
  ],
  "prerequisites": [
    "c2-07"
  ],
  "goal": {
    "canDo": "Puedo elegir casi sinónimos y alusiones controlando connotación, fuente y alcance.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica casi sinónimos, connotación y alusiones a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Casi sinónimos, connotación y alusiones",
        "body": [
          "Afirmar, sostener, admitir y conceder no atribuyen la misma relación con una idea. Admitir suele presentar el contenido como reconocimiento; conceder puede limitarlo al argumento en curso. Obstinado y perseverante evalúan de modo distinto una persistencia similar. La prosodia semántica es una tendencia contextual, no una prohibición absoluta. Las alusiones y refranes pueden alterarse para cuestionar su moraleja; la interpretación debe explicitar qué expectativa se activa y qué se cambia.",
          "En este caso, La precisión consiste en controlar las inferencias de la elección léxica. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "La investigadora sostuvo que faltaban datos."
          },
          {
            "es": "La investigadora admitió que faltaban datos."
          },
          {
            "es": "No por mucho madrugar aparece antes una respuesta fiable."
          }
        ],
        "mistakes": [
          {
            "wrong": "El comunicado calificó el resultado como de concluyente.",
            "right": "El comunicado calificó el resultado de concluyente.",
            "why": "Calificar de admite ese complemento; no se acumulan como y de en esta construcción."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "El desenlace favorable puede sesgar retrospectivamente la valoración de la persistencia. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: Los restos originales se confirmaron solo en una franja de veinte centímetros. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La precisión consiste en controlar las inferencias de la elección léxica.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "Concluyente garantiza una restauración integral.",
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
        "id": "c2-08-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de La palabra que inclina la balanza.",
        "items": [
          {
            "q": "En el caso de La palabra que inclina la balanza, ¿qué formulación preserva el alcance?",
            "options": [
              "La investigadora admitió que faltaban datos.",
              "Admitir y sostener atribuyen siempre la misma actitud."
            ],
            "answer": 0,
            "why": "Afirmar, sostener, admitir y conceder no atribuyen la misma relación con una idea. Admitir suele presentar el contenido como reconocimiento; conceder puede limitarlo al argumento en curso. Obstinado y perseverante evalúan de modo distinto una persistencia similar. La prosodia semántica es una tendencia contextual, no una prohibición absoluta. Las alusiones y refranes pueden alterarse para cuestionar su moraleja; la interpretación debe explicitar qué expectativa se activa y qué se cambia."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar La palabra que inclina la balanza?",
            "options": [
              "El desenlace favorable puede sesgar retrospectivamente la valoración de la persistencia.",
              "Concluyente garantiza una restauración integral."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-08-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso La palabra que inclina la balanza.",
        "items": [
          {
            "q": "El hallazgo es concluyente ___ la presencia de esa franja.",
            "answers": [
              [
                "sobre",
                "respecto a",
                "en cuanto a"
              ]
            ],
            "why": "Afirmar, sostener, admitir y conceder no atribuyen la misma relación con una idea. Admitir suele presentar el contenido como reconocimiento; conceder puede limitarlo al argumento en curso. Obstinado y perseverante evalúan de modo distinto una persistencia similar. La prosodia semántica es una tendencia contextual, no una prohibición absoluta. Las alusiones y refranes pueden alterarse para cuestionar su moraleja; la interpretación debe explicitar qué expectativa se activa y qué se cambia."
          },
          {
            "q": "La dirección sostuvo ___ faltaba financiación.",
            "answers": [
              [
                "que"
              ]
            ],
            "why": "Afirmar, sostener, admitir y conceder no atribuyen la misma relación con una idea. Admitir suele presentar el contenido como reconocimiento; conceder puede limitarlo al argumento en curso. Obstinado y perseverante evalúan de modo distinto una persistencia similar. La prosodia semántica es una tendencia contextual, no una prohibición absoluta. Las alusiones y refranes pueden alterarse para cuestionar su moraleja; la interpretación debe explicitar qué expectativa se activa y qué se cambia."
          },
          {
            "q": "No por mucho madrugar se seca ___ el pigmento.",
            "answers": [
              [
                "antes"
              ]
            ],
            "why": "Afirmar, sostener, admitir y conceder no atribuyen la misma relación con una idea. Admitir suele presentar el contenido como reconocimiento; conceder puede limitarlo al argumento en curso. Obstinado y perseverante evalúan de modo distinto una persistencia similar. La prosodia semántica es una tendencia contextual, no una prohibición absoluta. Las alusiones y refranes pueden alterarse para cuestionar su moraleja; la interpretación debe explicitar qué expectativa se activa y qué se cambia."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para La palabra que inclina la balanza",
        "items": [
          {
            "es": "perseverante",
            "note": "persistente con valoración favorable"
          },
          {
            "es": "obstinado",
            "note": "persistente pese a razones para cambiar"
          },
          {
            "es": "austero",
            "note": "sobrio en recursos o adornos"
          },
          {
            "es": "precario",
            "note": "insuficiente o inestable"
          },
          {
            "es": "admitir",
            "note": "reconocer algo que puede resultar incómodo"
          },
          {
            "es": "sostener",
            "note": "defender una afirmación"
          },
          {
            "es": "conceder",
            "note": "aceptar una premisa de manera delimitada"
          },
          {
            "es": "cundir",
            "note": "extenderse o producir rendimiento según el contexto"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-08-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de La palabra que inclina la balanza.",
        "pairs": [
          {
            "left": "perseverante",
            "right": "persistente con valoración favorable"
          },
          {
            "left": "obstinado",
            "right": "persistente pese a razones para cambiar"
          },
          {
            "left": "austero",
            "right": "sobrio en recursos o adornos"
          },
          {
            "left": "precario",
            "right": "insuficiente o inestable"
          },
          {
            "left": "admitir",
            "right": "reconocer algo que puede resultar incómodo"
          },
          {
            "left": "sostener",
            "right": "defender una afirmación"
          },
          {
            "left": "conceder",
            "right": "aceptar una premisa de manera delimitada"
          },
          {
            "left": "cundir",
            "right": "extenderse o producir rendimiento según el contexto"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Foco sobre el alcance de un adjetivo",
    "explanation": [
      "Resalta sobre esa franja al decir concluyente. Contrasta el adjetivo aislado y el adjetivo delimitado; una voz enfática no vuelve más amplia la evidencia disponible.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "El resultado es concluyente sobre esa franja."
      },
      {
        "es": "El resultado parece prometedor para nuevas pruebas."
      }
    ],
    "perceive": {
      "id": "c2-08-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «La palabra que inclina la balanza».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre La palabra que inclina la balanza. ¿Qué contenido permite recuperar?",
          "options": [
            "El resultado parece prometedor para nuevas pruebas.",
            "El resultado es concluyente sobre esa franja."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "El resultado es concluyente sobre esa franja.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de La palabra que inclina la balanza. ¿Qué formulación aparece?",
          "options": [
            "El resultado parece prometedor para nuevas pruebas.",
            "El resultado es concluyente sobre esa franja."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "El resultado parece prometedor para nuevas pruebas.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "El resultado es concluyente sobre esa franja.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "El resultado parece prometedor para nuevas pruebas.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La precisión consiste en controlar las inferencias de la elección léxica.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: La palabra que inclina la balanza",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Lola",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Marcos",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Si llamo austero al taller, el lector imagina una sobriedad elegida. Si digo precario, entiende falta de medios. En realidad, algunas herramientas son antiguas porque funcionan bien y otras no se sustituyen porque no hay presupuesto. Necesito una descripción que no convierta toda carencia en virtud ni toda sencillez en abandono."
      },
      {
        "speaker": "b",
        "text": "Lo mismo ocurre con admitió. En tu perfil parece que la dirección cedió ante una verdad que llevaba años negando. Las actas muestran una discusión sobre financiación. Podrías escribir reconoció el valor del hallazgo, si eso dijo, pero no atribuir una resistencia anterior solo porque el relato necesita un antagonista. El conflicto real ya es interesante sin añadirle otro."
      },
      {
        "speaker": "a",
        "text": "También cambiaré concluyente. El hallazgo es concluyente respecto a la presencia de restos en esa franja, pero no respecto a la restauración completa. Quizá conserve la palabra si añado el complemento preciso. No quiero que revisar consista siempre en sustituir términos fuertes por términos vagos. A veces la mejor corrección consiste en decir exactamente sobre qué se sostiene la certeza."
      },
      {
        "speaker": "b",
        "text": "Y el refrán puede quedarse si introduces la objeción del lector. El tiempo de secado no explica los años sin financiación. Una coda podría distinguir la lentitud necesaria de la demora evitable. En la lectura oral, subraya esa oposición con dos grupos breves, sin teatralizarla demasiado. Así la voz ayuda a oír una distinción que el adjetivo por sí solo había borrado y el cierre deja de absolver todas las esperas. El lector puede aceptar una imagen y seguir pidiendo cuentas por sus límites."
      },
      {
        "speaker": "a",
        "text": "El restaurador me ha escrito que dos análisis negativos le hicieron cambiar de hipótesis. Voy a incluirlo porque evita que el desenlace convierta quince años de trabajo en una marcha inevitable hacia la verdad. Puedo conservar obstinación en su propia cita, pero necesito dejar claro que es una autovaloración y no una etiqueta indiscutible del narrador."
      },
      {
        "speaker": "b",
        "text": "Ese cambio afecta a la atribución, no solo al tono. También puedes usar concluyente y prometedor en el mismo párrafo si cada adjetivo tiene un objeto explícito. El resultado cierra una pregunta sobre la franja y abre otras sobre conservación. En la defensa oral, pediría a la columnista que señale dónde una valoración pasa de describir un dato a organizar toda una biografía. Para el cierre, conservaré esta distinción: La precisión consiste en controlar las inferencias de la elección léxica."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-08-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: La palabra que inclina la balanza",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de La palabra que inclina la balanza?",
              "options": [
                "Concluyente garantiza una restauración integral.",
                "La precisión consiste en controlar las inferencias de la elección léxica."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre La palabra que inclina la balanza?",
              "options": [
                "La precisión consiste en controlar las inferencias de la elección léxica.",
                "Admitir y sostener atribuyen siempre la misma actitud."
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
          "id": "c2-08-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: La palabra que inclina la balanza",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de La palabra que inclina la balanza?",
              "options": [
                "Los restos originales se confirmaron solo en una franja de veinte centímetros.",
                "Se hallaron restos en toda la superficie."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre La palabra que inclina la balanza?",
              "options": [
                "Los restos originales se confirmaron solo en una franja de veinte centímetros.",
                "Admitir y sostener atribuyen siempre la misma actitud."
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
          "id": "c2-08-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: La palabra que inclina la balanza",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de La palabra que inclina la balanza?",
              "options": [
                "El desenlace favorable puede sesgar retrospectivamente la valoración de la persistencia.",
                "Admitir y sostener atribuyen siempre la misma actitud."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre La palabra que inclina la balanza?",
              "options": [
                "El desenlace favorable puede sesgar retrospectivamente la valoración de la persistencia.",
                "Admitir y sostener atribuyen siempre la misma actitud."
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
    "title": "La palabra que inclina la balanza · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.",
      "La elección no era enteramente arbitraria. Persistir contra una evidencia sólida puede ser obstinación; mantener una hipótesis sometiéndola a nuevas pruebas puede ser perseverancia. Pero el texto no había explicado qué hacía el restaurador cuando aparecía un resultado contrario. Sin ese dato, los adjetivos distribuían simpatía según el desenlace. Una revisión más precisa sustituyó el primer juicio por una descripción: solicitó tres análisis, aceptó dos resultados negativos y limitó su hipótesis a un sector del mural.",
      "Otro párrafo decía que la dirección había admitido la necesidad de estudiar la obra. El verbo sugería una resistencia previa o el reconocimiento tardío de algo evidente. Las actas mostraban, sin embargo, que la dirección había propuesto el estudio años antes y discrepaba sobre su financiación. Cambiar admitió por sostuvo no borraba el conflicto; evitaba inventarle una historia. La precisión léxica no es una competición por encontrar la palabra más rara, sino una forma de responsabilizarse de la inferencia que se introduce.",
      "La columnista cerraba con una variación del refrán: no por mucho madrugar se seca antes el pigmento. La frase defendía el tiempo del oficio frente a la prisa administrativa. Un lector observó que la restauración había sufrido también periodos de abandono, no solo de prudencia. La alusión convertía todas las demoras en paciencia sabia. Una imagen puede iluminar un aspecto y proteger otro de la crítica; su elegancia no la exime de justificar esa selección.",
      "Nota del museo. El estudio confirmó restos originales en una franja de veinte centímetros, no en la totalidad del mural. La intervención futura dependerá del estado de conservación y de pruebas adicionales. El director calificó el resultado de prometedor; el comunicado inicial lo llamó concluyente. El comité pidió distinguir una evidencia que cierra una pregunta de otra que permite abrir una investigación más delimitada. La corrección del adjetivo cambiaba también el compromiso público: ya no se anunciaba una restauración integral como consecuencia inevitable del hallazgo. El comité no exigió retirar el entusiasmo del comunicado. Exigió que el entusiasmo no decidiera por adelantado una intervención cuya conveniencia técnica aún debía discutirse.",
      "Carta del restaurador. No me molesta que me llamen obstinado, escribió, si se explica cuándo insistí sin tener todavía una prueba suficiente. Me molesta que el hallazgo convierta todos mis intentos anteriores en aciertos. Dos análisis negativos me obligaron a cambiar de zona y uno de mis argumentos iniciales resultó equivocado. El testimonio complicaba la oposición entre héroe perseverante e institución resistente. También mostraba que una trayectoria puede contener persistencia valiosa y errores reales sin que un adjetivo único tenga que resolverla.",
      "La columnista decidió conservar la palabra obstinación en una cita atribuida al propio restaurador y retirarla de la voz narrativa. El cambio no declaraba falsa la valoración; cambiaba quién asumía su responsabilidad. Después revisó prometedor y concluyente en el cierre. La primera palabra proyectaba una posibilidad; la segunda cerraba una cuestión delimitada. Podían coexistir si se referían a objetos distintos: conclusión sobre la presencia de pigmento y promesa de nuevas preguntas de conservación. El ejercicio léxico culmina así en una decisión de arquitectura textual. No basta escoger la palabra exacta en una oración aislada; hay que mantener estable aquello sobre lo que se predica y evitar que el lector traslade una certeza local a una conclusión general."
    ],
    "tasks": [
      {
        "id": "c2-08-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en La palabra que inclina la balanza.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «La palabra que inclina la balanza»?",
            "options": [
              "La precisión consiste en controlar las inferencias de la elección léxica.",
              "Concluyente garantiza una restauración integral."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «La palabra que inclina la balanza»?",
            "options": [
              "Los restos originales se confirmaron solo en una franja de veinte centímetros.",
              "Se hallaron restos en toda la superficie."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-08-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de La palabra que inclina la balanza con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La precisión consiste en controlar las inferencias de la elección léxica.» con «Concluyente garantiza una restauración integral.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La precisión consiste en controlar las inferencias de la elección léxica. Los restos originales se confirmaron solo en una franja de veinte centímetros.",
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
          "quote": "El perfil del restaurador empezó con un adjetivo: obstinado.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Nota del museo.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-08-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso La palabra que inclina la balanza.",
        "items": [
          {
            "words": [
              "El",
              "adjetivo",
              "necesita",
              "un",
              "alcance",
              "explícito."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "La",
              "demora",
              "evitable",
              "no",
              "es",
              "paciencia",
              "técnica."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-08-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «La palabra que inclina la balanza».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La precisión consiste en controlar las inferencias de la elección léxica.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "Concluyente garantiza una restauración integral.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "Los restos originales se confirmaron solo en una franja de veinte centímetros.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "Se hallaron restos en toda la superficie.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-08-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de La palabra que inclina la balanza.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «La palabra que inclina la balanza». Conserva la tesis y una reserva.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «La palabra que inclina la balanza» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "Los restos originales se confirmaron solo en una franja de veinte centímetros. La precisión consiste en controlar las inferencias de la elección léxica.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-08-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.subtexto. Recupera la semana 4, «Una silla que nadie ocupa». Material de contraste: Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce. Formulación de trabajo: Clara zanjó que la silla sobraba.\n\nRecupera «Subtexto e inferencia» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.verbos-dicendi-matices. Recupera la semana 4, «Una silla que nadie ocupa». Unidades disponibles: espetar (decir con brusquedad); deslizar (introducir de manera indirecta); zanjar (dar por cerrado un asunto); eludir (evitar abordar algo); reticencia (reserva al decir o actuar); indicio (señal compatible con una hipótesis); atribuir (introducir una responsabilidad o intención); quedar en el aire (permanecer sin respuesta). Pasaje: Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce.\n\nRecupera «Verbos introductores con matiz»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. En este contraste, «espetar» nombra decir con brusquedad; «deslizar», introducir de manera indirecta. La elección debe conservar esa diferencia. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.intencion-pragmatica. Recupera la semana 4, «Una silla que nadie ocupa». Textos para ensayo oral: «Molesta un poco, pero puede quedarse.» / «Molesta un poco; prefiero que la muevas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Entonación e intención contextual» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya un poco como aceptación incómoda y como objeción suave. No asignes una emoción única a una pausa: compara qué lectura permite el conjunto de la escena. Un ensayo defendible conserva esta distinción del caso: El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.relato-subtexto. Recupera la semana 4, «Una silla que nadie ocupa». Pasajes que debes contrastar: Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce.\n\nLa autora descartó añadir una explicación al final, pero aceptó revisar un pronombre en el segundo párrafo. Algunos lectores atribuían la propuesta de venta a la vecina, que aún no había entrado. Esa confusión no contribuía al subtexto: impedía reconstruir quién estaba presente. La distinción entre ambigüedad deliberada y referencia defectuosa no puede decidirse solo por la intención del escritor. Debe examinarse qué trabajo interpretativo permite cada dificultad. La incertidumbre sobre el padre abre lecturas pertinentes; la incertidumbre accidental sobre quién habla puede cerrar la posibilidad de seguir el diálogo. El control estilístico consiste en conservar la primera y reparar la segunda, sin convertir el relato en una explicación de sí mismo.\n\nRelee estos pasajes y recupera «Leer un relato con subtexto». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.dialogo-subtexto. Recupera la semana 4, «Una silla que nadie ocupa». Modelo parcial que puedes transformar: La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo.\n\nRecupera «Escribir un diálogo con subtexto» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.prosa-densa. Recupera la semana 7, «Descomprimir una idea». Pasajes que debes contrastar: La evaluación de la ampliación de los horarios del archivo municipal concluye que aumentaron las consultas durante el primer semestre. La formulación parece transparente hasta que se pregunta qué se contó como consulta. El informe agrupa visitas presenciales, solicitudes de reproducción y accesos al catálogo digital. Que el total crezca no implica que cada modalidad lo haga, ni que el incremento pueda atribuirse a la ampliación horaria. La unidad de medida es parte del argumento, aunque figure en una nota metodológica.\n\nEsta reserva añadía complejidad al resumen, pero no obligaba a enumerar todos los problemas con idéntico peso. Para una decisión sobre horarios, la comparabilidad de visitas presenciales resultaba especialmente pertinente. Para una decisión sobre el catálogo, importaba distinguir consultas, descargas y personas usuarias sin identificarlas innecesariamente. El mismo informe podía sostener varias preguntas, siempre que no se supusiera que una cifra agregada respondía a todas. La bibliotecaria reformuló el cierre: disponemos de señales de mayor actividad y necesitamos medidas compatibles para valorar qué cambió. Esa frase conserva información positiva y una limitación metodológica sin convertir ninguna de las dos en el comentario secundario de la otra. La densidad no se resuelve eliminando relaciones, sino haciendo visibles las que organizan la interpretación.\n\nRelee estos pasajes y recupera «Prosa académica y ensayística densa». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.sintaxis-compleja. Recupera la semana 7, «Descomprimir una idea». Contrastes suministrados: La mejora observada no permite atribuir el cambio al programa. / Aunque la muestra sea pequeña, el contraste aporta información. / La evaluación de la aplicación exige identificar quién aplicó cada medida.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Sintaxis compleja». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados. Aplicación al caso: El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.conectores-cultos. Pasaje: «A la sazón no había catálogo. El archivo recibía consultas; empero, carecía de un registro comparable. Así las cosas, el equipo decidió separar modalidades. No en vano habían cambiado las unidades de medida».\n\nExplica la función temporal, adversativa, comentadora y justificativa de las expresiones destacadas por su posición. Reescribe para un boletín claro sin convertir a la sazón en causa ni empero en consecuencia. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "A la sazón equivale aquí a en aquel momento; empero introduce contraste; así las cosas permite avanzar una decisión a partir de la situación; no en vano aporta justificación. Versión clara: entonces no había catálogo. Se recibían consultas, pero no existía un registro comparable. Por ello se separaron modalidades, porque las unidades habían cambiado. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.lectura-densa. Recupera la semana 7, «Descomprimir una idea». Textos para ensayo oral: «Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto.» / «Aumentaron las consultas porque el horario lo explica todo.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Leer prosa densa en voz alta» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Localiza el verbo principal antes de leer. Reduce la velocidad en un inciso técnico y recupera después la curva principal; no acumules pausas que separen un nombre de su complemento. Un ensayo defendible conserva esta distinción del caso: El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.abstract. Recupera la semana 7, «Descomprimir una idea». Modelo parcial que puedes transformar: El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas.\n\nRecupera «Resumen académico» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «La palabra que inclina la balanza»: «La investigadora admitió que faltaban datos.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. En el nuevo contraste, «La investigadora admitió que faltaban datos.» debe interpretarse dentro de esta cuestión: Casi sinónimos, connotación y alusiones. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Reescribe el perfil en 450–550 palabras. Incluye seis decisiones léxicas justificadas en notas breves, delimita el alcance de concluyente y conserva una alusión que no excuse las demoras evitables.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "La investigadora sostuvo que faltaban datos.",
      "La investigadora admitió que faltaban datos.",
      "No por mucho madrugar aparece antes una respuesta fiable.",
      "perseverante",
      "obstinado",
      "austero"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener."
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
        "prompt": "Defiende tu edición ante una columnista que considera que has apagado su estilo. Distingue cambios necesarios por exactitud de preferencias estilísticas negociables.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «Concluyente garantiza una restauración integral.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de La palabra que inclina la balanza.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La precisión consiste en controlar las inferencias de la elección léxica. Los restos originales se confirmaron solo en una franja de veinte centímetros.",
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
        "task": "Presenta tu decisión más discutible sobre La palabra que inclina la balanza y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «Los restos originales se confirmaron solo en una franja de veinte centímetros.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «Admitir y sostener atribuyen siempre la misma actitud.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de La palabra que inclina la balanza: ¿qué conclusión conserva el alcance?",
        "options": [
          "Concluyente garantiza una restauración integral.",
          "La precisión consiste en controlar las inferencias de la elección léxica."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de La palabra que inclina la balanza, ¿qué afirmación debe rechazarse?",
        "options": [
          "Se hallaron restos en toda la superficie.",
          "Los restos originales se confirmaron solo en una franja de veinte centímetros."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de La palabra que inclina la balanza. ¿Qué interpretación mantiene?",
        "options": [
          "El desenlace favorable puede sesgar retrospectivamente la valoración de la persistencia.",
          "Admitir y sostener atribuyen siempre la misma actitud."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "El desenlace favorable puede sesgar retrospectivamente la valoración de la persistencia.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «La palabra que inclina la balanza», ¿qué unidad expresa «persistente con valoración favorable»? ___ .",
        "answers": [
          [
            "perseverante"
          ]
        ],
        "hint": "persistente con valoración favorable",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «persistente pese a razones para cambiar» en este expediente usamos ___ .",
        "answers": [
          [
            "obstinado"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "El comunicado calificó el resultado como de concluyente.",
        "answers": [
          "El comunicado calificó el resultado de concluyente."
        ],
        "why": "Calificar de admite ese complemento; no se acumulan como y de en esta construcción."
      },
      {
        "type": "transform",
        "source": "El hallazgo es concluyente. Solo se ha examinado la franja inferior.",
        "instruction": "Integra el alcance con «El hallazgo es concluyente respecto a…». Conserva «la franja inferior».",
        "answers": [
          "El hallazgo es concluyente respecto a la franja inferior."
        ],
        "why": "Delimitar la certeza: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «La palabra que inclina la balanza»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener.",
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
      "Interpreto casi sinónimos, connotación y alusiones en fuentes originales.",
      "Puedo explicar por qué «Concluyente garantiza una restauración integral.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: Los restos originales se confirmaron solo en una franja de veinte centímetros.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La precisión consiste en controlar las inferencias de la elección léxica.» y registra qué cambiarías."
    ]
  }
};
