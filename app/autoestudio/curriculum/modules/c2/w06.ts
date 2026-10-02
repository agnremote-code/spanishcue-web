import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w06: Module = {
  "id": "c2-06",
  "level": "c2",
  "week": 6,
  "kind": "core",
  "title": "Convencer sin esconder el coste",
  "subtitle": "Anáfora, concesión táctica y encuadre",
  "stop": {
    "place": "Bogotá",
    "country": "Colombia"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.disc.recursos-retoricos",
    "c2.voc.lexico-persuasivo",
    "c2.pron.oratoria",
    "c2.lis.discurso-politico",
    "c2.spk.discurso-breve"
  ],
  "reviewObjectives": [
    "c2.disc.ironia-productiva",
    "c2.voc.evaluacion-implicita",
    "c2.pron.ironia-variedades",
    "c2.lis.humor-ironico",
    "c2.spk.comentario-ironico",
    "c2.rev.checkpoint-1",
    "c2.read.contrato-cronica"
  ],
  "prerequisites": [
    "c2-05"
  ],
  "goal": {
    "canDo": "Puedo persuadir mediante recursos retóricos que hagan visibles costes, condiciones y alternativas.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica anáfora, concesión táctica y encuadre a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Anáfora, concesión táctica y encuadre",
        "body": [
          "Una concesión eficaz reconoce una objeción real antes de limitar su alcance. No es equivalente conceder que algo cuesta y conceder que es inviable. La anáfora repite el comienzo para organizar la atención; la gradación aumenta la intensidad; la pregunta retórica orienta una respuesta sin solicitarla. Antes bien corrige una orientación previa y no funciona como simple sinónimo de además. Comprueba qué razonamiento queda si suprimes los recursos retóricos.",
          "En este caso, La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado.",
          "Una misma suspensión puede presentarse como pausa técnica o como parálisis: el primer encuadre atenúa y el segundo intensifica. Ninguno aporta por sí solo una medida de duración. La gradación «un puesto, una sala, una red de espacios» organiza amplitud creciente; la antítesis «renovar el edificio sin interrumpir el acceso» exhibe una tensión que luego debe resolverse con medidas."
        ],
        "examples": [
          {
            "es": "No pedimos una promesa, pedimos un calendario."
          },
          {
            "es": "Es una inversión costosa; de ahí no se sigue que sea prescindible."
          },
          {
            "es": "El mantenimiento no frena el proyecto; antes bien, lo hace sostenible."
          }
        ],
        "mistakes": [
          {
            "wrong": "La directora pidió que se financian los horarios.",
            "right": "La directora pidió que se financiaran los horarios.",
            "why": "La petición referida desde el pasado selecciona aquí imperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "El lema de apertura puede deslegitimar objeciones presupuestarias sin refutarlas. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: Los horarios ampliados carecen todavía de financiación confirmada. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "Toda objeción al presupuesto rechaza el acceso cultural.",
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
        "id": "c2-06-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Convencer sin esconder el coste.",
        "items": [
          {
            "q": "En el caso de Convencer sin esconder el coste, ¿qué formulación preserva el alcance?",
            "options": [
              "Es una inversión costosa; de ahí no se sigue que sea prescindible.",
              "Un término técnico carece siempre de carga valorativa."
            ],
            "answer": 0,
            "why": "Una concesión eficaz reconoce una objeción real antes de limitar su alcance. No es equivalente conceder que algo cuesta y conceder que es inviable. La anáfora repite el comienzo para organizar la atención; la gradación aumenta la intensidad; la pregunta retórica orienta una respuesta sin solicitarla. Antes bien corrige una orientación previa y no funciona como simple sinónimo de además. Comprueba qué razonamiento queda si suprimes los recursos retóricos."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Convencer sin esconder el coste?",
            "options": [
              "El lema de apertura puede deslegitimar objeciones presupuestarias sin refutarlas.",
              "Toda objeción al presupuesto rechaza el acceso cultural."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-06-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Convencer sin esconder el coste.",
        "items": [
          {
            "q": "El mantenimiento no frena el proyecto; antes ___, lo sostiene.",
            "answers": [
              [
                "bien"
              ]
            ],
            "why": "Una concesión eficaz reconoce una objeción real antes de limitar su alcance. No es equivalente conceder que algo cuesta y conceder que es inviable. La anáfora repite el comienzo para organizar la atención; la gradación aumenta la intensidad; la pregunta retórica orienta una respuesta sin solicitarla. Antes bien corrige una orientación previa y no funciona como simple sinónimo de además. Comprueba qué razonamiento queda si suprimes los recursos retóricos."
          },
          {
            "q": "La concesión no equivale ___ una renuncia.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "Una concesión eficaz reconoce una objeción real antes de limitar su alcance. No es equivalente conceder que algo cuesta y conceder que es inviable. La anáfora repite el comienzo para organizar la atención; la gradación aumenta la intensidad; la pregunta retórica orienta una respuesta sin solicitarla. Antes bien corrige una orientación previa y no funciona como simple sinónimo de además. Comprueba qué razonamiento queda si suprimes los recursos retóricos."
          },
          {
            "q": "Se solicita financiación para que se ___ los horarios.",
            "answers": [
              [
                "amplíen"
              ]
            ],
            "why": "Una concesión eficaz reconoce una objeción real antes de limitar su alcance. No es equivalente conceder que algo cuesta y conceder que es inviable. La anáfora repite el comienzo para organizar la atención; la gradación aumenta la intensidad; la pregunta retórica orienta una respuesta sin solicitarla. Antes bien corrige una orientación previa y no funciona como simple sinónimo de además. Comprueba qué razonamiento queda si suprimes los recursos retóricos."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Convencer sin esconder el coste",
        "items": [
          {
            "es": "concesión táctica",
            "note": "reconocimiento limitado de una objeción"
          },
          {
            "es": "encuadre",
            "note": "perspectiva que organiza un problema"
          },
          {
            "es": "carga valorativa",
            "note": "evaluación asociada a una expresión"
          },
          {
            "es": "contrapartida",
            "note": "coste o compromiso a cambio de otro"
          },
          {
            "es": "eufemismo",
            "note": "expresión que suaviza un contenido"
          },
          {
            "es": "disfemismo",
            "note": "expresión que lo presenta de forma peyorativa"
          },
          {
            "es": "gradación",
            "note": "orden de intensidad creciente"
          },
          {
            "es": "apelación",
            "note": "llamada a una creencia o valor compartido"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-06-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Convencer sin esconder el coste.",
        "pairs": [
          {
            "left": "concesión táctica",
            "right": "reconocimiento limitado de una objeción"
          },
          {
            "left": "encuadre",
            "right": "perspectiva que organiza un problema"
          },
          {
            "left": "carga valorativa",
            "right": "evaluación asociada a una expresión"
          },
          {
            "left": "contrapartida",
            "right": "coste o compromiso a cambio de otro"
          },
          {
            "left": "eufemismo",
            "right": "expresión que suaviza un contenido"
          },
          {
            "left": "disfemismo",
            "right": "expresión que lo presenta de forma peyorativa"
          },
          {
            "left": "gradación",
            "right": "orden de intensidad creciente"
          },
          {
            "left": "apelación",
            "right": "llamada a una creencia o valor compartido"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Anáfora y clímax sin gritar",
    "explanation": [
      "Distribuye tres grupos paralelos con un foco distinto en cada uno. La concesión posterior necesita espacio propio: bajar demasiado el volumen podría ocultar el coste reconocido.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Queremos estudiar, encontrarnos y abrir oportunidades."
      },
      {
        "es": "Queremos renovar; durante las obras faltarán puestos."
      }
    ],
    "perceive": {
      "id": "c2-06-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Convencer sin esconder el coste».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Convencer sin esconder el coste. ¿Qué contenido permite recuperar?",
          "options": [
            "Queremos renovar; durante las obras faltarán puestos.",
            "Queremos estudiar, encontrarnos y abrir oportunidades."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Queremos estudiar, encontrarnos y abrir oportunidades.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Convencer sin esconder el coste. ¿Qué formulación aparece?",
          "options": [
            "Queremos renovar; durante las obras faltarán puestos.",
            "Queremos estudiar, encontrarnos y abrir oportunidades."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Queremos renovar; durante las obras faltarán puestos.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Queremos estudiar, encontrarnos y abrir oportunidades.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Queremos renovar; durante las obras faltarán puestos.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Convencer sin esconder el coste",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Patricia",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Sergio",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Mi discurso empieza con abrir puertas, y no pienso renunciar a esa imagen. Pero acepto que convierte cualquier objeción presupuestaria en una sospecha moral. Voy a introducir antes una concesión: podemos compartir el fin y discrepar sobre el calendario. Así no obligo a la representante del personal a demostrar que también quiere una biblioteca mejor."
      },
      {
        "speaker": "b",
        "text": "Mantener la imagen me parece bien si después dices qué puerta estará cerrada durante ocho meses. Pausa técnica no explica el coste para quien estudia allí cada tarde. Y los horarios ampliados todavía no tienen financiación. Si los anuncias como compromiso firme, la belleza del cierre del discurso nos dejará un problema práctico al día siguiente."
      },
      {
        "speaker": "a",
        "text": "Puedo distinguir compromiso y propuesta: nos comprometemos a publicar la demanda semanal; solicitamos recursos para ampliar horarios. La diferencia verbal importa. Tampoco diré que las obras son gratuitas porque ya están presupuestadas. Que no haya un pago directo de los usuarios no elimina el coste público ni el tiempo que tendrán que dedicar a desplazarse."
      },
      {
        "speaker": "b",
        "text": "Entonces la pregunta final no debería ser quién quiere quedarse atrás. Eso fabrica dos bandos que no existen. Pregunta qué combinación de continuidad y rapidez estamos dispuestos a sostener. Tendrás una intervención menos redonda, quizá, pero dejarás espacio a respuestas que no controlas. Esa es una diferencia entre movilizar a una audiencia para aplaudir y convocarla a decidir. Podemos ensayar el cierre con una pausa antes de la pregunta y sin elevar la voz para convertirla en una consigna. No es un detalle menor: la audiencia debe poder disentir sin quedar moralmente descalificada."
      },
      {
        "speaker": "a",
        "text": "El personal ha señalado un coste que mi intervención omitía: abrir más horas puede desplazar tareas de catalogación y visitas escolares. Decir que aprovechamos recursos no responde a esa objeción. Voy a nombrar el intercambio y a pedir que el plan de continuidad se apruebe antes de fijar las obras. Si el plan no alcanza, el calendario deberá revisarse."
      },
      {
        "speaker": "b",
        "text": "Eso convierte la concesión en una condición operativa. La audiencia podrá comprobar si tu discurso admite consecuencias o si solo reconoce objeciones para seguir igual. Puedes conservar la anáfora, pero cada queremos necesita después un quién, un cómo y un criterio de revisión. El cierre ganará fuerza si muestra qué estás dispuesta a cambiar cuando los recursos no permitan cumplir la promesa."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-06-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Convencer sin esconder el coste",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Convencer sin esconder el coste?",
              "options": [
                "Toda objeción al presupuesto rechaza el acceso cultural.",
                "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Convencer sin esconder el coste?",
              "options": [
                "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.",
                "Un término técnico carece siempre de carga valorativa."
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
          "id": "c2-06-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Convencer sin esconder el coste",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Convencer sin esconder el coste?",
              "options": [
                "Los horarios ampliados carecen todavía de financiación confirmada.",
                "Los horarios ampliados ya están financiados."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Convencer sin esconder el coste?",
              "options": [
                "Los horarios ampliados carecen todavía de financiación confirmada.",
                "Un término técnico carece siempre de carga valorativa."
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
          "id": "c2-06-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Convencer sin esconder el coste",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Convencer sin esconder el coste?",
              "options": [
                "El lema de apertura puede deslegitimar objeciones presupuestarias sin refutarlas.",
                "Un término técnico carece siempre de carga valorativa."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Convencer sin esconder el coste?",
              "options": [
                "El lema de apertura puede deslegitimar objeciones presupuestarias sin refutarlas.",
                "Un término técnico carece siempre de carga valorativa."
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
    "title": "Convencer sin esconder el coste · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "La propuesta de renovar la biblioteca se presentó bajo un lema difícil de rechazar: «Abrir puertas». Quienes preguntaron por el presupuesto quedaron, durante unos minutos, en el papel incómodo de quienes preferían cerrarlas. El discurso no había refutado sus objeciones; había elegido una imagen en la que resultaba ingrato formularlas. Esa eficacia explica tanto el valor de la retórica como la necesidad de examinarla. Ninguna decisión pública cabe entera en la oposición entre apertura y cierre.",
      "La directora articuló su intervención mediante una anáfora: «Queremos un lugar para estudiar, queremos un lugar para encontrarnos, queremos un lugar para quienes no tienen otro lugar». La serie ampliaba progresivamente el destinatario y convertía el edificio en una respuesta social. Después reconoció que las obras interrumpirían el servicio. La concesión fue precisa hasta que llamó pausa técnica a los ocho meses de cierre. La expresión no era falsa, pero reducía a un procedimiento lo que para ciertos usuarios suponía perder calefacción, conexión y acompañamiento.",
      "Una representante del personal respondió con una retórica menos visible: habló de optimizar recursos y racionalizar horarios. Sus términos parecían técnicos, aunque también seleccionaban una perspectiva. Optimizar exige decir según qué criterio; racionalizar puede significar ampliar un servicio o recortarlo. La neutralidad no se obtiene cambiando metáforas por nominalizaciones. Se obtiene, en parte, explicitando los criterios y permitiendo que otras personas discutan su pertinencia.",
      "El momento decisivo llegó cuando una estudiante preguntó dónde estudiarían durante las obras. La directora abandonó el lema y reconoció que el plan provisional solo cubría la mitad de los puestos. Ese dato no refutaba la renovación, pero impedía presentarla como una ganancia sin transición ni pérdidas. Una nueva versión del discurso mantuvo la anáfora y añadió tres compromisos: convenio con dos centros cercanos, horarios ampliados y revisión mensual de la demanda. La persuasión ganaba credibilidad al hacerse vulnerable a una comprobación.",
      "Informe de contraste. El presupuesto de renovación reservaba una partida para equipamiento y otra para mantenimiento durante dos años. No había financiación confirmada para los horarios ampliados del servicio provisional. La asociación estudiantil apoyaba las obras si se garantizaba primero una alternativa; una agrupación de usuarios mayores prefería escalonarlas, aunque duraran más. Ambas defendían el acceso, pero daban distinto peso a la duración y a la continuidad. Presentarlas como favorables y contrarias al progreso borraría justamente el conflicto que el discurso debía ayudar a deliberar. El personal pidió además que la revisión mensual se publicara aunque sus resultados contradijeran el discurso inaugural. Sin esa condición, la comprobación podía convertirse en otro recurso promocional.",
      "Respuesta del personal de atención. La anáfora de la directora nos incluye como destinatarios del proyecto, pero no como quienes tendrán que sostener el servicio provisional. El documento de turnos reveló que ampliar horarios sin contratar suponía desplazar horas de otras tareas. El coste no desaparecía por no figurar como gasto nuevo: se trasladaba a la catalogación, a las actividades escolares o a la carga del equipo. La retórica de aprovechar recursos necesitaba, por tanto, nombrar qué usos se abandonaban al priorizar otros.",
      "La directora incorporó esa observación mediante una concesión más exigente. Reconoció que el convenio de espacios no equivalía a disponer del personal necesario para abrirlos. La frase hacía menos triunfal la intervención, pero mejoraba su estructura argumentativa: permitía localizar una condición cuyo incumplimiento obligaría a modificar el calendario. Una promesa que no establece qué ocurrirá si falla su presupuesto puede funcionar como deseo enfático. Un compromiso responsable necesita un criterio de revisión. El discurso terminó proponiendo que la comisión aprobara primero un plan de continuidad y después fijara el inicio de las obras. La secuencia cambiaba: no se trataba de encontrar palabras más amables para el mismo anuncio, sino de dejar que una objeción bien formulada modificara la decisión defendida."
    ],
    "tasks": [
      {
        "id": "c2-06-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Convencer sin esconder el coste.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Convencer sin esconder el coste»?",
            "options": [
              "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.",
              "Toda objeción al presupuesto rechaza el acceso cultural."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Convencer sin esconder el coste»?",
            "options": [
              "Los horarios ampliados carecen todavía de financiación confirmada.",
              "Los horarios ampliados ya están financiados."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-06-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Convencer sin esconder el coste con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.» con «Toda objeción al presupuesto rechaza el acceso cultural.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. Los horarios ampliados carecen todavía de financiación confirmada.",
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
          "quote": "La propuesta de renovar la biblioteca se presentó bajo un lema difícil de rechazar: «Abrir puertas».",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Informe de contraste.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-06-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Convencer sin esconder el coste.",
        "items": [
          {
            "words": [
              "La",
              "pregunta",
              "final",
              "deja",
              "espacio",
              "para",
              "disentir."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "El",
              "discurso",
              "reconoce",
              "un",
              "coste",
              "de",
              "transición."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-06-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Convencer sin esconder el coste».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "Toda objeción al presupuesto rechaza el acceso cultural.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "Los horarios ampliados carecen todavía de financiación confirmada.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "Los horarios ampliados ya están financiados.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-06-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Convencer sin esconder el coste.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Convencer sin esconder el coste». Conserva la tesis y una reserva.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Convencer sin esconder el coste» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "Los horarios ampliados carecen todavía de financiación confirmada. La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-06-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.ironia-productiva. Recupera la semana 2, «La cortesía de decir lo contrario». Material de contraste: La inauguración del centro cultural empezó con una disculpa por el retraso y continuó con una celebración de la puntualidad institucional. «Nunca llegamos tarde a lo importante», afirmó la directora, mientras un técnico intentaba abrir la puerta todavía sin terminar. La frase provocó risas. No era necesariamente una burla cruel: algunas personas parecían agradecer que el discurso oficial hubiera ofrecido, por accidente, una descripción suficientemente exacta de la tarde. Otras no rieron; llevaban meses sin un lugar donde ensayar. Formulación de trabajo: La explicación no fue precisamente exhaustiva.\n\nRecupera «Ironía, litote e hipérbole» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.evaluacion-implicita. Recupera la semana 2, «La cortesía de decir lo contrario». Unidades disponibles: elogio envenenado (aprobación aparente que descalifica); litote (atenuación mediante negación del contrario); hipérbole (exageración reconocible); sobrentendido (contenido inferido y no formulado); condescendencia (superioridad disfrazada de amabilidad); a todas luces (de manera evidente para quien habla); tener su mérito (reconocer un valor, a veces irónicamente); quedarse corto (no alcanzar la intensidad necesaria). Pasaje: La inauguración del centro cultural empezó con una disculpa por el retraso y continuó con una celebración de la puntualidad institucional. «Nunca llegamos tarde a lo importante», afirmó la directora, mientras un técnico intentaba abrir la puerta todavía sin terminar. La frase provocó risas. No era necesariamente una burla cruel: algunas personas parecían agradecer que el discurso oficial hubiera ofrecido, por accidente, una descripción suficientemente exacta de la tarde. Otras no rieron; llevaban meses sin un lugar donde ensayar.\n\nRecupera «Léxico evaluativo implícito»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. En este contraste, «elogio envenenado» nombra aprobación aparente que descalifica; «litote», atenuación mediante negación del contrario. La elección debe conservar esa diferencia. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.ironia-variedades. Recupera la semana 2, «La cortesía de decir lo contrario». Textos para ensayo oral: «Una puntualidad admirable: llegaron antes de abrir.» / «Una puntualidad admirable: llegaron después de cerrar.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Prosodia e ironía contextual» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya primero una valoración literal y después una irónica; observa duración, foco y descenso final. El contexto sostiene la inferencia: la síntesis no garantiza interpretar la ironía por la voz. Un ensayo defendible conserva esta distinción del caso: La columna gana precisión al convertir la ironía en demandas verificables. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.lis.humor-ironico. Recupera la semana 2, «La cortesía de decir lo contrario». Recuperación del contenido escuchado: vuelve al audio de esa semana sin abrir su transcripción. Como pista de contraste, conserva estas dos posiciones: La columna gana precisión al convertir la ironía en demandas verificables. / La tallerista exige prohibir toda ironía.\n\nToma notas de quién sostiene cada posición y de una reserva expresada. Después contrasta tus notas con la transcripción. No deduzcas rasgos regionales ni solapamientos que el audio sintético no acredita. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. La primera posición sintetiza el límite defendido; la segunda es la conclusión excesiva que el diálogo obliga a rechazar. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.comentario-ironico. Recupera la semana 2, «La cortesía de decir lo contrario». Situación para retomar: Presenta la columna ante una tallerista y después ante una responsable municipal. Conserva la crítica, modifica el humor y explica qué inferencia no quieres provocar. Objeción suministrada: La tallerista exige prohibir toda ironía.\n\nRecupera «Comentario con ironía controlada». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.rev.checkpoint-1. Recupera la semana 5, «Checkpoint: una plaza, tres versiones». Material de contraste: El acta del consejo de barrio anunciaba que «se mantendrán las terrazas de los locales que permitan el paso accesible». La asociación de comerciantes leyó una condición que podía cumplir reorganizando las mesas. La asociación vecinal entendió que se retirarían las terrazas de todos los locales que hoy obstaculizaban el paso, sin posibilidad de adaptación. La diferencia no se resolvía mirando una fotografía: afectaba al momento en que debía comprobarse la condición y al procedimiento para subsanar un incumplimiento. Formulación de trabajo: Aunque sea útil limitar el tráfico, falta explicar el reparto.\n\nRecupera «Checkpoint 1: alcance, ironía, registro y subtexto» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Existe acuerdo sobre mantener un paso accesible, pero no sobre su aplicación ni sobre los horarios de carga. La crónica interpreta el silencio comercial como entusiasmo; el acta no permite esa atribución. El plano requiere todavía una comprobación de acceso de emergencias y no constituye una solución aprobada. Proponemos publicar el criterio de adaptación, el responsable de comprobarlo y un mecanismo de respuesta a las observaciones. La consulta ganará credibilidad si explica cómo puede modificar la propuesta. La ironía sobre una plaza donde caben todos expresa una crítica pertinente, pero no sustituye la discusión de una distribución concreta. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.contrato-cronica. Recupera la semana 5, «Checkpoint: una plaza, tres versiones». Pasajes que debes contrastar: El acta del consejo de barrio anunciaba que «se mantendrán las terrazas de los locales que permitan el paso accesible». La asociación de comerciantes leyó una condición que podía cumplir reorganizando las mesas. La asociación vecinal entendió que se retirarían las terrazas de todos los locales que hoy obstaculizaban el paso, sin posibilidad de adaptación. La diferencia no se resolvía mirando una fotografía: afectaba al momento en que debía comprobarse la condición y al procedimiento para subsanar un incumplimiento.\n\nLa mediadora incorporó esta objeción al informe sin convertirla en una solución técnica. No podía certificar anchuras ni maniobras; podía explicar qué información debía producir el equipo competente y cómo afectaría a la decisión. También corrigió el título provisional, La plaza alcanza un acuerdo, por uno que identificaba el alcance real: Acuerdo sobre accesibilidad y consulta sobre distribución. El cambio renunciaba a una noticia más redonda, pero impedía que la presentación del proceso redujera el espacio para discrepar. La integración final exige aquí una doble fidelidad: a lo que las fuentes permiten afirmar y a lo que las personas todavía tienen derecho a discutir sin aparecer como incumplidoras de un consenso que no existe.\n\nRelee estos pasajes y recupera «Leer textos de registros opuestos». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Convencer sin esconder el coste»: «Es una inversión costosa; de ahí no se sigue que sea prescindible.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Existe acuerdo sobre mantener un paso accesible, pero no sobre su aplicación ni sobre los horarios de carga. La crónica interpreta el silencio comercial como entusiasmo; el acta no permite esa atribución. El plano requiere todavía una comprobación de acceso de emergencias y no constituye una solución aprobada. Proponemos publicar el criterio de adaptación, el responsable de comprobarlo y un mecanismo de respuesta a las observaciones. La consulta ganará credibilidad si explica cómo puede modificar la propuesta. La ironía sobre una plaza donde caben todos expresa una crítica pertinente, pero no sustituye la discusión de una distribución concreta. En el nuevo contraste, «Es una inversión costosa; de ahí no se sigue que sea prescindible.» debe interpretarse dentro de esta cuestión: Anáfora, concesión táctica y encuadre. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Escribe un discurso de 450–550 palabras que defienda la renovación y reconozca dos costes. Añade una nota de 60 palabras dentro del límite donde expliques una anáfora y una concesión; distingue compromisos de solicitudes.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "No pedimos una promesa, pedimos un calendario.",
      "Es una inversión costosa; de ahí no se sigue que sea prescindible.",
      "El mantenimiento no frena el proyecto; antes bien, lo hace sostenible.",
      "concesión táctica",
      "encuadre",
      "carga valorativa"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural."
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
        "prompt": "Pronuncia el discurso ante usuarios y personal. Recibe una objeción sobre los horarios, responde sin falso dilema y reformula el cierre como pregunta deliberativa.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «Toda objeción al presupuesto rechaza el acceso cultural.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Convencer sin esconder el coste.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. Los horarios ampliados carecen todavía de financiación confirmada.",
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
        "task": "Presenta tu decisión más discutible sobre Convencer sin esconder el coste y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «Los horarios ampliados carecen todavía de financiación confirmada.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «Un término técnico carece siempre de carga valorativa.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Convencer sin esconder el coste: ¿qué conclusión conserva el alcance?",
        "options": [
          "Toda objeción al presupuesto rechaza el acceso cultural.",
          "La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Convencer sin esconder el coste, ¿qué afirmación debe rechazarse?",
        "options": [
          "Los horarios ampliados ya están financiados.",
          "Los horarios ampliados carecen todavía de financiación confirmada."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Convencer sin esconder el coste. ¿Qué interpretación mantiene?",
        "options": [
          "El lema de apertura puede deslegitimar objeciones presupuestarias sin refutarlas.",
          "Un término técnico carece siempre de carga valorativa."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "El lema de apertura puede deslegitimar objeciones presupuestarias sin refutarlas.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Convencer sin esconder el coste», ¿qué unidad expresa «reconocimiento limitado de una objeción»? ___ .",
        "answers": [
          [
            "concesión táctica"
          ]
        ],
        "hint": "reconocimiento limitado de una objeción",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «perspectiva que organiza un problema» en este expediente usamos ___ .",
        "answers": [
          [
            "encuadre"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "La directora pidió que se financian los horarios.",
        "answers": [
          "La directora pidió que se financiaran los horarios."
        ],
        "why": "La petición referida desde el pasado selecciona aquí imperfecto de subjuntivo."
      },
      {
        "type": "transform",
        "source": "La reforma cuesta mucho. Eso no demuestra que sea prescindible.",
        "instruction": "Une mediante «Aunque» y conserva el coste como dato asumido en indicativo.",
        "answers": [
          "Aunque la reforma cuesta mucho, eso no demuestra que sea prescindible."
        ],
        "why": "Concesión y límite: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Convencer sin esconder el coste»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural.",
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
      "Interpreto anáfora, concesión táctica y encuadre en fuentes originales.",
      "Puedo explicar por qué «Toda objeción al presupuesto rechaza el acceso cultural.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: Los horarios ampliados carecen todavía de financiación confirmada.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas.» y registra qué cambiarías."
    ]
  }
};
