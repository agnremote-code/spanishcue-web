import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w10: Module = {
  "id": "c2-10",
  "level": "c2",
  "week": 10,
  "kind": "checkpoint",
  "title": "Checkpoint: qué demuestra un éxito",
  "subtitle": "Integrar retórica, densidad, matiz y variación",
  "stop": {
    "place": "Lima",
    "country": "Perú"
  },
  "minutes": 150,
  "newObjectives": [
    "c2.rev.checkpoint-2",
    "c2.lis.mesa-redonda"
  ],
  "reviewObjectives": [
    "c2.disc.recursos-retoricos",
    "c2.voc.lexico-persuasivo",
    "c2.pron.oratoria",
    "c2.lis.discurso-politico",
    "c2.spk.discurso-breve",
    "c2.read.prosa-densa",
    "c2.gram.sintaxis-compleja",
    "c2.voc.conectores-cultos",
    "c2.pron.lectura-densa",
    "c2.wri.abstract",
    "c2.voc.casi-sinonimos",
    "c2.voc.refranes-intertextualidad",
    "c2.pron.matiz-lexico-voz",
    "c2.wri.precision-lexica",
    "c2.read.columna-literaria",
    "c2.pron.variacion-avanzada",
    "c2.voc.variacion-lexica-pragmatica",
    "c2.gram.variacion-gramatical",
    "c2.lis.voces-mundo",
    "c2.fun.mediacion-variedades"
  ],
  "prerequisites": [
    "c2-09"
  ],
  "goal": {
    "canDo": "Puedo contrastar indicadores y discursos públicos para redactar un balance preciso del acceso.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica integrar retórica, densidad, matiz y variación a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Integrar retórica, densidad, matiz y variación",
        "body": [
          "Una conclusión puede ser verdadera con un alcance reducido y engañosa al ampliarlo. La rectificación antes bien invierte la orientación; con todo preserva la primera proposición y le añade un límite. En la síntesis, los verbos de atribución y los complementos de alcance permiten comparar fuentes sin fundirlas. Recupera la concesión táctica, la distinción causal, los casi sinónimos y la aclaración intercultural de plazos.",
          "En este caso, El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "El programa amplió el acceso; con todo, no llegó a todos los barrios."
          },
          {
            "es": "El dato no cierra la discusión; antes bien, obliga a precisar la muestra."
          },
          {
            "es": "La coordinadora calificó de prometedor el resultado entre quienes respondieron."
          }
        ],
        "mistakes": [
          {
            "wrong": "La asociación pidió de que se midieran los abandonos.",
            "right": "La asociación pidió que se midieran los abandonos.",
            "why": "Pedir introduce complemento directo sin de."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "Corregir el encuadre de una fuente no obliga a descartar todas sus observaciones. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: La asistencia presencial era una recomendación sin presupuesto aprobado. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "La satisfacción prueba accesibilidad universal.",
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
        "id": "c2-10-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Checkpoint: qué demuestra un éxito.",
        "items": [
          {
            "q": "En el caso de Checkpoint: qué demuestra un éxito, ¿qué formulación preserva el alcance?",
            "options": [
              "El dato no cierra la discusión; antes bien, obliga a precisar la muestra.",
              "Un error de encuadre invalida cualquier observación de la fuente."
            ],
            "answer": 0,
            "why": "Una conclusión puede ser verdadera con un alcance reducido y engañosa al ampliarlo. La rectificación antes bien invierte la orientación; con todo preserva la primera proposición y le añade un límite. En la síntesis, los verbos de atribución y los complementos de alcance permiten comparar fuentes sin fundirlas. Recupera la concesión táctica, la distinción causal, los casi sinónimos y la aclaración intercultural de plazos."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Checkpoint: qué demuestra un éxito?",
            "options": [
              "Corregir el encuadre de una fuente no obliga a descartar todas sus observaciones.",
              "La satisfacción prueba accesibilidad universal."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-10-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Checkpoint: qué demuestra un éxito.",
        "items": [
          {
            "q": "El dato no cierra el debate; antes ___, lo precisa.",
            "answers": [
              [
                "bien"
              ]
            ],
            "why": "Una conclusión puede ser verdadera con un alcance reducido y engañosa al ampliarlo. La rectificación antes bien invierte la orientación; con todo preserva la primera proposición y le añade un límite. En la síntesis, los verbos de atribución y los complementos de alcance permiten comparar fuentes sin fundirlas. Recupera la concesión táctica, la distinción causal, los casi sinónimos y la aclaración intercultural de plazos."
          },
          {
            "q": "El cuestionario se dirigió ___ quienes completaron el trámite.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "Una conclusión puede ser verdadera con un alcance reducido y engañosa al ampliarlo. La rectificación antes bien invierte la orientación; con todo preserva la primera proposición y le añade un límite. En la síntesis, los verbos de atribución y los complementos de alcance permiten comparar fuentes sin fundirlas. Recupera la concesión táctica, la distinción causal, los casi sinónimos y la aclaración intercultural de plazos."
          },
          {
            "q": "La reforma era una recomendación, no una decisión ya ___.",
            "answers": [
              [
                "aprobada"
              ]
            ],
            "why": "Una conclusión puede ser verdadera con un alcance reducido y engañosa al ampliarlo. La rectificación antes bien invierte la orientación; con todo preserva la primera proposición y le añade un límite. En la síntesis, los verbos de atribución y los complementos de alcance permiten comparar fuentes sin fundirlas. Recupera la concesión táctica, la distinción causal, los casi sinónimos y la aclaración intercultural de plazos."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Checkpoint: qué demuestra un éxito",
        "items": [
          {
            "es": "balance provisional",
            "note": "evaluación sujeta a nuevos datos"
          },
          {
            "es": "denominador",
            "note": "total respecto al que se calcula una proporción"
          },
          {
            "es": "extrapolar",
            "note": "extender una conclusión fuera de la base observada"
          },
          {
            "es": "triangulación",
            "note": "contraste entre fuentes diferentes"
          },
          {
            "es": "cobertura",
            "note": "alcance efectivo de una intervención"
          },
          {
            "es": "disenso razonado",
            "note": "desacuerdo apoyado en argumentos"
          },
          {
            "es": "cifra agregada",
            "note": "dato que reúne categorías distintas"
          },
          {
            "es": "cautela",
            "note": "limitación explícita de una afirmación"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-10-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Checkpoint: qué demuestra un éxito.",
        "pairs": [
          {
            "left": "balance provisional",
            "right": "evaluación sujeta a nuevos datos"
          },
          {
            "left": "denominador",
            "right": "total respecto al que se calcula una proporción"
          },
          {
            "left": "extrapolar",
            "right": "extender una conclusión fuera de la base observada"
          },
          {
            "left": "triangulación",
            "right": "contraste entre fuentes diferentes"
          },
          {
            "left": "cobertura",
            "right": "alcance efectivo de una intervención"
          },
          {
            "left": "disenso razonado",
            "right": "desacuerdo apoyado en argumentos"
          },
          {
            "left": "cifra agregada",
            "right": "dato que reúne categorías distintas"
          },
          {
            "left": "cautela",
            "right": "limitación explícita de una afirmación"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Cifras, contraste y reserva",
    "explanation": [
      "Mantén un grupo claro para el porcentaje y otro para su población de referencia. El límite de la muestra merece igual audibilidad que la cifra; no lo conviertas en un añadido apresurado.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "El ochenta por ciento de quienes respondieron está satisfecho."
      },
      {
        "es": "El ochenta por ciento de toda la ciudad está satisfecho."
      }
    ],
    "perceive": {
      "id": "c2-10-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Checkpoint: qué demuestra un éxito».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Checkpoint: qué demuestra un éxito. ¿Qué contenido permite recuperar?",
          "options": [
            "El ochenta por ciento de toda la ciudad está satisfecho.",
            "El ochenta por ciento de quienes respondieron está satisfecho."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "El ochenta por ciento de quienes respondieron está satisfecho.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Checkpoint: qué demuestra un éxito. ¿Qué formulación aparece?",
          "options": [
            "El ochenta por ciento de toda la ciudad está satisfecho.",
            "El ochenta por ciento de quienes respondieron está satisfecho."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "El ochenta por ciento de toda la ciudad está satisfecho.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "El ochenta por ciento de quienes respondieron está satisfecho.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "El ochenta por ciento de toda la ciudad está satisfecho.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Checkpoint: qué demuestra un éxito",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Teresa",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Gabriel",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Si abrimos la mesa diciendo que el ochenta por ciento es falso, perderemos precisión. Es una cifra del cuestionario, pero responde a una población limitada. Yo diría que no permite afirmar que el sistema sea accesible para toda la ciudad. El problema es el salto entre el dato y el lema, no necesariamente el cálculo."
      },
      {
        "speaker": "b",
        "text": "También debemos distinguir la reforma recomendada de la aprobada. El comunicado prometió asistencia presencial y las bibliotecarias recibieron preguntas que no podían contestar. Llamarlas obstinadas agrava el problema porque desplaza la responsabilidad hacia quienes atienden. Podemos criticar una respuesta poco clara sin suponer que expresa una voluntad de bloquear el acceso."
      },
      {
        "speaker": "a",
        "text": "Para la audiencia propondría una tabla con tres verbos: consultar, solicitar y recibir. Así se entiende por qué aumentó una cifra y bajó otra. Después preguntaría qué necesita una persona que no sabe el nombre de la serie documental. No hace falta empezar con todos los términos técnicos, pero sí conservar la diferencia que esos términos describen."
      },
      {
        "speaker": "b",
        "text": "Y cerremos con un compromiso realista: publicar el diseño de la prueba de simplificación y la fecha de decisión presupuestaria. No prometamos que la prueba resolverá todos los abandonos. Si alguien pregunta si la memoria ya es de todos, responderé que hay un avance importante y una desigualdad pendiente. Puedo reconocer el valor de un lema sin repetirlo como diagnóstico. La pausa entre ambas ideas debe permitir oír el límite, no presentarlo como una disculpa por haber apoyado el programa. La claridad del cierre depende de que ninguna de esas dos ideas desaparezca."
      },
      {
        "speaker": "a",
        "text": "La próxima encuesta podría mostrar menos satisfacción si incluye por primera vez a personas que encontraron barreras. No sería automáticamente una prueba de empeoramiento. Debemos explicar que cambia la población escuchada. Tampoco usaremos esa reserva para desestimar cualquier descenso: habrá que mirar los obstáculos concretos y qué respuesta recibieron antes de interpretar la cifra."
      },
      {
        "speaker": "b",
        "text": "Esa es una buena pregunta para la mesa: qué indicador aceptaríamos publicar aunque no favoreciera el relato institucional. Si solo medimos lo que puede subir, la evaluación se convierte en promoción. En la síntesis final conservaré el avance digital, la limitación del cuestionario y la nueva prueba con usuarios diversos. La coherencia no exige que todos los datos apunten hacia una celebración o hacia una denuncia. Para el cierre, conservaré esta distinción: El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-10-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint: qué demuestra un éxito",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Checkpoint: qué demuestra un éxito?",
              "options": [
                "La satisfacción prueba accesibilidad universal.",
                "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint: qué demuestra un éxito?",
              "options": [
                "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.",
                "Un error de encuadre invalida cualquier observación de la fuente."
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
          "id": "c2-10-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint: qué demuestra un éxito",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Checkpoint: qué demuestra un éxito?",
              "options": [
                "La asistencia presencial era una recomendación sin presupuesto aprobado.",
                "La asistencia presencial ya tiene presupuesto y fecha."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint: qué demuestra un éxito?",
              "options": [
                "La asistencia presencial era una recomendación sin presupuesto aprobado.",
                "Un error de encuadre invalida cualquier observación de la fuente."
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
          "id": "c2-10-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint: qué demuestra un éxito",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Checkpoint: qué demuestra un éxito?",
              "options": [
                "Corregir el encuadre de una fuente no obliga a descartar todas sus observaciones.",
                "Un error de encuadre invalida cualquier observación de la fuente."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint: qué demuestra un éxito?",
              "options": [
                "Corregir el encuadre de una fuente no obliga a descartar todas sus observaciones.",
                "Un error de encuadre invalida cualquier observación de la fuente."
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
    "title": "Checkpoint: qué demuestra un éxito · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "El programa de archivos abiertos celebró su primer año con una cifra: un ochenta por ciento de satisfacción. El cartel añadía «La memoria ya es de todos». El lema presentaba el acceso como una conquista cumplida; la cifra parecía certificarla. Sin embargo, el cuestionario se había enviado únicamente a quienes completaron una solicitud digital. No incluía a quienes abandonaron el formulario, no tenían conexión o acudieron a una oficina sin poder terminar el trámite. La satisfacción de los usuarios atendidos y la accesibilidad del sistema eran preguntas relacionadas, pero diferentes.",
      "La crónica de una periodista describía a las bibliotecarias como obstinadas defensoras del procedimiento. Una entrevista posterior mostraba que habían pedido simplificarlo meses antes. La palabra atribuía resistencia al cambio a quienes quizá estaban sosteniendo un servicio con herramientas insuficientes. La periodista aceptó revisar el adjetivo, aunque defendió su descripción de las colas. No todo error de encuadre invalida todas las observaciones de una fuente; tampoco la exactitud de una observación rescata el resto de sus inferencias.",
      "El informe técnico registraba más consultas y menos solicitudes completas. Una digitalización masiva había atraído visitas al catálogo, mientras que el nuevo formulario exigía identificar una serie documental que muchas personas desconocían. La aparente contradicción desaparecía al separar consulta y solicitud. El informe recomendaba una prueba con lenguaje claro y asistencia presencial. El comunicado convirtió esa recomendación en un anuncio de reforma aprobada, pese a que no existía todavía presupuesto ni fecha.",
      "Durante la presentación pública, una usuaria preguntó cuándo podría pedir ayuda. La respuesta «ya la estamos acompañando» pretendía transmitir disponibilidad, pero ella entendió que alguien había empezado a revisar su caso. Nadie lo había hecho. La mediadora pidió acordar una acción concreta, un responsable y un momento de contacto. Atribuir el malentendido a la variedad lingüística de la usuaria habría añadido una explicación cómoda y no demostrada a un fallo de coordinación bastante visible.",
      "Documento de la asociación. El colectivo reconoce el valor de la digitalización, pero solicita tres indicadores separados: personas que encuentran información, personas que completan una solicitud y personas que reciben una respuesta utilizable. Propone registrar abandonos sin recoger identidades innecesarias. También pide que la próxima encuesta incluya un canal presencial. No exige suspender el programa; exige que su éxito no se defina de una manera que haga desaparecer a quienes todavía no consiguen usarlo. El reto del balance es conservar el avance y la exclusión en la misma descripción, sin que uno sirva para negar la otra. La comisión decidió conservar las series anteriores para poder comparar los cambios. Modificar un indicador sin explicar la ruptura habría creado una mejora aparente adicional.",
      "Análisis de una evaluadora externa. El nuevo formulario se había probado con personas habituadas al archivo, que resolvieron sin dificultad el campo serie documental. El equipo interpretó el resultado como validación general. La evaluadora no rechazó la prueba: explicó que servía para un perfil de uso y dejaba otro sin observar. Propuso incluir a personas con distintos grados de familiaridad y registrar dónde pedían ayuda. La tarea no era demostrar que un grupo tenía menor capacidad, sino descubrir qué conocimiento estaba dando por supuesto la interfaz.",
      "El informe final incorporó una reserva sobre la comparación futura. Si se ampliaban los canales de respuesta, la siguiente encuesta podría mostrar una satisfacción menor aunque el servicio atendiera mejor a públicos antes excluidos. Celebrar únicamente la subida del porcentaje crearía un incentivo para no escuchar nuevas quejas. La comisión decidió valorar también la diversidad de situaciones representadas y la resolución de obstáculos detectados. Esta decisión cambia el significado del éxito: un indicador incómodo puede acompañar una mejora real de acceso. La síntesis avanzada debe poder explicar esa aparente paradoja sin refugiarse en una fórmula abstracta. Necesita mostrar qué cambió en la población observada y por qué una comparación numérica directa podría inducir una lectura injustificada del programa."
    ],
    "tasks": [
      {
        "id": "c2-10-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Checkpoint: qué demuestra un éxito.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Checkpoint: qué demuestra un éxito»?",
            "options": [
              "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.",
              "La satisfacción prueba accesibilidad universal."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Checkpoint: qué demuestra un éxito»?",
            "options": [
              "La asistencia presencial era una recomendación sin presupuesto aprobado.",
              "La asistencia presencial ya tiene presupuesto y fecha."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-10-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Checkpoint: qué demuestra un éxito con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.» con «La satisfacción prueba accesibilidad universal.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera. La asistencia presencial era una recomendación sin presupuesto aprobado.",
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
          "quote": "El programa de archivos abiertos celebró su primer año con una cifra: un ochenta por ciento de satisfacción.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Documento de la asociación.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-10-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Checkpoint: qué demuestra un éxito.",
        "items": [
          {
            "words": [
              "El",
              "indicador",
              "excluye",
              "a",
              "quienes",
              "abandonaron."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "La",
              "asistencia",
              "presencial",
              "requiere",
              "un",
              "presupuesto."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-10-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Checkpoint: qué demuestra un éxito».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "La satisfacción prueba accesibilidad universal.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "La asistencia presencial era una recomendación sin presupuesto aprobado.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "La asistencia presencial ya tiene presupuesto y fecha.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-10-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Checkpoint: qué demuestra un éxito.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Checkpoint: qué demuestra un éxito». Conserva la tesis y una reserva.",
            "model": "El programa ha ampliado las consultas, pero el indicador de satisfacción solo describe a quienes completaron el trámite y respondieron. No permite evaluar a quienes abandonaron o quedaron fuera. Proponemos separar encontrar información, completar una solicitud y recibir una respuesta utilizable. La reforma de asistencia presencial sigue siendo una recomendación sin financiación aprobada. El comunicado debe corregir esa diferencia y evitar trasladar a las bibliotecarias la responsabilidad de una promesa institucional. Reconocer el avance no exige declarar universal el acceso; medir la exclusión no exige negar que la digitalización haya producido beneficios.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Checkpoint: qué demuestra un éxito» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "La asistencia presencial era una recomendación sin presupuesto aprobado. El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-10-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.recursos-retoricos. Recupera la semana 6, «Convencer sin esconder el coste». Material de contraste: La propuesta de renovar la biblioteca se presentó bajo un lema difícil de rechazar: «Abrir puertas». Quienes preguntaron por el presupuesto quedaron, durante unos minutos, en el papel incómodo de quienes preferían cerrarlas. El discurso no había refutado sus objeciones; había elegido una imagen en la que resultaba ingrato formularlas. Esa eficacia explica tanto el valor de la retórica como la necesidad de examinarla. Ninguna decisión pública cabe entera en la oposición entre apertura y cierre. Formulación de trabajo: Es una inversión costosa; de ahí no se sigue que sea prescindible.\n\nRecupera «Recursos retóricos» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.lexico-persuasivo. Recupera la semana 6, «Convencer sin esconder el coste». Unidades disponibles: concesión táctica (reconocimiento limitado de una objeción); encuadre (perspectiva que organiza un problema); carga valorativa (evaluación asociada a una expresión); contrapartida (coste o compromiso a cambio de otro); eufemismo (expresión que suaviza un contenido); disfemismo (expresión que lo presenta de forma peyorativa); gradación (orden de intensidad creciente); apelación (llamada a una creencia o valor compartido). Pasaje: La propuesta de renovar la biblioteca se presentó bajo un lema difícil de rechazar: «Abrir puertas». Quienes preguntaron por el presupuesto quedaron, durante unos minutos, en el papel incómodo de quienes preferían cerrarlas. El discurso no había refutado sus objeciones; había elegido una imagen en la que resultaba ingrato formularlas. Esa eficacia explica tanto el valor de la retórica como la necesidad de examinarla. Ninguna decisión pública cabe entera en la oposición entre apertura y cierre.\n\nRecupera «Léxico persuasivo»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. En este contraste, «concesión táctica» nombra reconocimiento limitado de una objeción; «encuadre», perspectiva que organiza un problema. La elección debe conservar esa diferencia. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.oratoria. Recupera la semana 6, «Convencer sin esconder el coste». Textos para ensayo oral: «Queremos estudiar, encontrarnos y abrir oportunidades.» / «Queremos renovar; durante las obras faltarán puestos.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Oratoria» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Distribuye tres grupos paralelos con un foco distinto en cada uno. La concesión posterior necesita espacio propio: bajar demasiado el volumen podría ocultar el coste reconocido. Un ensayo defendible conserva esta distinción del caso: La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.lis.discurso-politico. Recupera la semana 6, «Convencer sin esconder el coste». Recuperación del contenido escuchado: vuelve al audio de esa semana sin abrir su transcripción. Como pista de contraste, conserva estas dos posiciones: La retórica resulta más responsable cuando explicita costes y admite respuestas no previstas. / Los horarios ampliados ya están financiados.\n\nToma notas de quién sostiene cada posición y de una reserva expresada. Después contrasta tus notas con la transcripción. No deduzcas rasgos regionales ni solapamientos que el audio sintético no acredita. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. La primera posición sintetiza el límite defendido; la segunda es la conclusión excesiva que el diálogo obliga a rechazar. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.discurso-breve. Recupera la semana 6, «Convencer sin esconder el coste». Situación para retomar: Pronuncia el discurso ante usuarios y personal. Recibe una objeción sobre los horarios, responde sin falso dilema y reformula el cierre como pregunta deliberativa. Objeción suministrada: Los horarios ampliados ya están financiados.\n\nRecupera «Discurso persuasivo». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Queremos una biblioteca para estudiar, para encontrarnos y para quienes no disponen de otro lugar. Ese propósito no elimina el coste de cerrar ocho meses. La alternativa provisional ofrece menos puestos y sus horarios ampliados todavía necesitan financiación. Por eso defendemos la renovación junto con un convenio de espacios, una medición pública de la demanda y una decisión presupuestaria explícita. Reconocer esas condiciones no equivale a renunciar al proyecto. Permite que quienes discrepan del calendario participen sin ser presentados como enemigos del acceso. La pregunta final debe abrir opciones reales, no repartir certificados de compromiso cultural. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.prosa-densa. Recupera la semana 7, «Descomprimir una idea». Pasajes que debes contrastar: La evaluación de la ampliación de los horarios del archivo municipal concluye que aumentaron las consultas durante el primer semestre. La formulación parece transparente hasta que se pregunta qué se contó como consulta. El informe agrupa visitas presenciales, solicitudes de reproducción y accesos al catálogo digital. Que el total crezca no implica que cada modalidad lo haga, ni que el incremento pueda atribuirse a la ampliación horaria. La unidad de medida es parte del argumento, aunque figure en una nota metodológica.\n\nEsta reserva añadía complejidad al resumen, pero no obligaba a enumerar todos los problemas con idéntico peso. Para una decisión sobre horarios, la comparabilidad de visitas presenciales resultaba especialmente pertinente. Para una decisión sobre el catálogo, importaba distinguir consultas, descargas y personas usuarias sin identificarlas innecesariamente. El mismo informe podía sostener varias preguntas, siempre que no se supusiera que una cifra agregada respondía a todas. La bibliotecaria reformuló el cierre: disponemos de señales de mayor actividad y necesitamos medidas compatibles para valorar qué cambió. Esa frase conserva información positiva y una limitación metodológica sin convertir ninguna de las dos en el comentario secundario de la otra. La densidad no se resuelve eliminando relaciones, sino haciendo visibles las que organizan la interpretación.\n\nRelee estos pasajes y recupera «Prosa académica y ensayística densa». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.sintaxis-compleja. Recupera la semana 7, «Descomprimir una idea». Contrastes suministrados: La mejora observada no permite atribuir el cambio al programa. / Aunque la muestra sea pequeña, el contraste aporta información. / La evaluación de la aplicación exige identificar quién aplicó cada medida.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Sintaxis compleja». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Una nominalización condensa un proceso, pero puede ocultar agente, tiempo o modalidad. La evaluación de la aplicación del programa exige reconstruir quién evalúa qué y con qué criterio. Las subordinadas encajadas necesitan referentes estables; al reformular, no conviertas una condición metodológica en conclusión. Con todo marca un límite argumentativo; no en vano aporta una justificación que el hablante considera pertinente. Un resumen académico conserva alcance y reservas, no solo resultados. Aplicación al caso: El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.conectores-cultos. Pasaje: «A la sazón no había catálogo. El archivo recibía consultas; empero, carecía de un registro comparable. Así las cosas, el equipo decidió separar modalidades. No en vano habían cambiado las unidades de medida».\n\nExplica la función temporal, adversativa, comentadora y justificativa de las expresiones destacadas por su posición. Reescribe para un boletín claro sin convertir a la sazón en causa ni empero en consecuencia. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "A la sazón equivale aquí a en aquel momento; empero introduce contraste; así las cosas permite avanzar una decisión a partir de la situación; no en vano aporta justificación. Versión clara: entonces no había catálogo. Se recibían consultas, pero no existía un registro comparable. Por ello se separaron modalidades, porque las unidades habían cambiado. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.lectura-densa. Recupera la semana 7, «Descomprimir una idea». Textos para ensayo oral: «Aumentaron las consultas, aunque no sabemos qué cambio explica cuánto.» / «Aumentaron las consultas porque el horario lo explica todo.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Leer prosa densa en voz alta» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Localiza el verbo principal antes de leer. Reduce la velocidad en un inciso técnico y recupera después la curva principal; no acumules pausas que separen un nombre de su complemento. Un ensayo defendible conserva esta distinción del caso: El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.abstract. Recupera la semana 7, «Descomprimir una idea». Modelo parcial que puedes transformar: El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas.\n\nRecupera «Resumen académico» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El uso registrado del archivo aumentó después de la ampliación horaria, la digitalización y una exposición vinculada al catálogo. El diseño no permite aislar el efecto de cada intervención. Además, el indicador agrega modalidades distintas y la encuesta recoge sesenta respuestas de doscientas invitaciones. Estos límites no vuelven inútil el estudio: orientan una evaluación posterior más precisa. Para el público general, conviene explicar que abrir una puerta y hacer visible una colección al mismo tiempo dificulta atribuir el cambio a una sola causa. La analogía aclara el problema, pero no sustituye la definición de las medidas. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: El informe describe un aumento sin demostrar que el horario sea su causa exclusiva. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.casi-sinonimos. Recupera la semana 8, «La palabra que inclina la balanza». Unidades disponibles: perseverante (persistente con valoración favorable); obstinado (persistente pese a razones para cambiar); austero (sobrio en recursos o adornos); precario (insuficiente o inestable); admitir (reconocer algo que puede resultar incómodo); sostener (defender una afirmación); conceder (aceptar una premisa de manera delimitada); cundir (extenderse o producir rendimiento según el contexto). Pasaje: El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.\n\nRecupera «Casi sinónimos y connotación»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. En este contraste, «perseverante» nombra persistente con valoración favorable; «obstinado», persistente pese a razones para cambiar. La elección debe conservar esa diferencia. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.refranes-intertextualidad. Recupera la semana 8, «La palabra que inclina la balanza». Unidades disponibles: perseverante (persistente con valoración favorable); obstinado (persistente pese a razones para cambiar); austero (sobrio en recursos o adornos); precario (insuficiente o inestable); admitir (reconocer algo que puede resultar incómodo); sostener (defender una afirmación); conceder (aceptar una premisa de manera delimitada); cundir (extenderse o producir rendimiento según el contexto). Pasaje: El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.\n\nRecupera «Refranes, citas e intertextualidad»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. En este contraste, «perseverante» nombra persistente con valoración favorable; «obstinado», persistente pese a razones para cambiar. La elección debe conservar esa diferencia. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.matiz-lexico-voz. Recupera la semana 8, «La palabra que inclina la balanza». Textos para ensayo oral: «El resultado es concluyente sobre esa franja.» / «El resultado parece prometedor para nuevas pruebas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Matiz léxico y voz» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Resalta sobre esa franja al decir concluyente. Contrasta el adjetivo aislado y el adjetivo delimitado; una voz enfática no vuelve más amplia la evidencia disponible. Un ensayo defendible conserva esta distinción del caso: La precisión consiste en controlar las inferencias de la elección léxica. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.precision-lexica. Recupera la semana 8, «La palabra que inclina la balanza». Modelo parcial que puedes transformar: El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener.\n\nRecupera «Precisión léxica» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: La precisión consiste en controlar las inferencias de la elección léxica. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.columna-literaria. Recupera la semana 8, «La palabra que inclina la balanza». Pasajes que debes contrastar: El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.\n\nLa columnista decidió conservar la palabra obstinación en una cita atribuida al propio restaurador y retirarla de la voz narrativa. El cambio no declaraba falsa la valoración; cambiaba quién asumía su responsabilidad. Después revisó prometedor y concluyente en el cierre. La primera palabra proyectaba una posibilidad; la segunda cerraba una cuestión delimitada. Podían coexistir si se referían a objetos distintos: conclusión sobre la presencia de pigmento y promesa de nuevas preguntas de conservación. El ejercicio léxico culmina así en una decisión de arquitectura textual. No basta escoger la palabra exacta en una oración aislada; hay que mantener estable aquello sobre lo que se predica y evitar que el lector traslade una certeza local a una conclusión general.\n\nRelee estos pasajes y recupera «Leer una columna literaria». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.variacion-avanzada. Notación esquemática para análisis, no grabación: /s/ en final de sílaba → [h] (aspiración) o ausencia de realización (elisión); una rótica → [l] (lateralización); una rótica con fricción sibilante (asibilación). Estas etiquetas describen fenómenos, no países completos.\n\nExplica qué cambia en cada esquema y por qué leerlo no demuestra reconocerlo de oído. Selecciona con tu docente una muestra real autorizada, identifica el segmento y compara al menos dos escuchas. Si no hay muestra, registra la tarea perceptiva como pendiente y completa solo el análisis conceptual y el plan de contraste. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La aspiración conserva una realización audible [h], mientras que la elisión omite la consonante en ese contexto. La lateralización cambia una rótica por una lateral; la asibilación añade fricción sibilante. Ningún esquema permite atribuir origen ni competencia al hablante. La notación permite explicar el fenómeno; para acreditar percepción hacen falta segmentos de audio reales y verificables. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.variacion-lexica-pragmatica. Intercambio escrito: agente A, «Ya lo revisamos: terminamos esta mañana»; agente B, «Ya lo revisamos: lo haremos antes de las cuatro». Tratamientos disponibles: «Vos podés avisarme» / «Usted me avisa cuando tenga la copia».\n\nExplica las dos lecturas temporales con una paráfrasis inequívoca. Propón un tratamiento coherente con una relación concreta sin declarar uno universalmente más cortés. Formula una pregunta que compruebe la interpretación y evita generalizar a una región a partir de este intercambio. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "A informa de una tarea terminada; B anuncia una tarea próxima. Para un compromiso operativo, B puede decir lo revisaremos antes de las cuatro. La elección entre vos y usted depende de relación y uso; ninguna forma garantiza por sí sola cercanía o distancia. Una comprobación útil sería: ¿queda entonces pendiente la revisión hasta esta tarde? En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.variacion-gramatical. Contrastes escritos suministrados: «Vos tenés la copia» / «Tú tienes la copia»; «A Juan lo vi ayer» / «A Juan le vi ayer»; «Me di cuenta de que faltaba una página» / «Me di cuenta que faltaba una página»; «Hoy he enviado el escrito» / «Hoy envié el escrito».\n\nIdentifica voseo, tuteo, leísmo de persona masculino singular y omisión de la preposición exigida por darse cuenta de. Explica por qué los dos tiempos del último par pueden responder a usos distintos y por qué no basta una frase para asignar un país al hablante. Edita el ejemplo de darse cuenta para una nota formal. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Vos tenés presenta voseo y tú tienes, tuteo. Le vi con Juan ilustra leísmo de persona masculino singular admitido en determinados usos; no autoriza cualquier sustitución de lo por le. En la nota formal se escribe me di cuenta de que. He enviado y envié pueden organizar de modo distinto la relación con hoy según el uso y el contexto; ninguna forma aislada determina una procedencia. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.lis.voces-mundo. Recupera la semana 9, «Entender sin uniformar». Recuperación del contenido escuchado: vuelve al audio de esa semana sin abrir su transcripción. Como pista de contraste, conserva estas dos posiciones: La comunicación compartida requiere precisión contextual y respeto por la variación. / La síntesis reproduce de forma verificada seis variedades.\n\nToma notas de quién sostiene cada posición y de una reserva expresada. Después contrasta tus notas con la transcripción. No deduzcas rasgos regionales ni solapamientos que el audio sintético no acredita. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El manual compartido debe asegurar compromisos comprensibles sin imponer una voz supuestamente neutra. Mantendremos tratamientos coherentes con la relación y explicitaremos fechas cuando una expresión temporal pueda orientar expectativas distintas. Ante un malentendido, pediremos una paráfrasis y confirmaremos la acción acordada. No atribuiremos un uso a una región a partir de un solo intercambio. Para trabajar percepción fonética, seleccionaremos muestras reales autorizadas y verificables; las voces sintéticas disponibles sirven para seguir el contenido, pero no certifican variedad regional. La diversidad deja de parecer un problema cuando distinguimos identidad lingüística e información operativa. La primera posición sintetiza el límite defendido; la segunda es la conclusión excesiva que el diálogo obliga a rechazar. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.fun.mediacion-variedades. Intercambio escrito: agente A, «Ya lo revisamos: terminamos esta mañana»; agente B, «Ya lo revisamos: lo haremos antes de las cuatro». Tratamientos disponibles: «Vos podés avisarme» / «Usted me avisa cuando tenga la copia».\n\nExplica las dos lecturas temporales con una paráfrasis inequívoca. Propón un tratamiento coherente con una relación concreta sin declarar uno universalmente más cortés. Formula una pregunta que compruebe la interpretación y evita generalizar a una región a partir de este intercambio. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "A informa de una tarea terminada; B anuncia una tarea próxima. Para un compromiso operativo, B puede decir lo revisaremos antes de las cuatro. La elección entre vos y usted depende de relación y uso; ninguna forma garantiza por sí sola cercanía o distancia. Una comprobación útil sería: ¿queda entonces pendiente la revisión hasta esta tarde? En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Produce un balance de 550–700 palabras para una comisión ciudadana. Integra los tres indicadores, corrige el alcance de la cifra y propone un anuncio público que distinga logros, límites y decisiones pendientes.",
    "context": "Modelo completo de una respuesta posible. Contrasta su organización y sus reservas; tu entrega debe desarrollar una voz propia, no reproducirlo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "El programa amplió el acceso; con todo, no llegó a todos los barrios.",
      "El dato no cierra la discusión; antes bien, obliga a precisar la muestra.",
      "La coordinadora calificó de prometedor el resultado entre quienes respondieron.",
      "balance provisional",
      "denominador",
      "extrapolar"
    ],
    "model": [
      "Balance del programa de archivos abiertos",
      "El programa ha ampliado la posibilidad de consultar materiales digitalizados, pero la documentación disponible no permite equiparar ese avance con un acceso universal. La cifra de satisfacción procede de quienes completaron una solicitud y respondieron al cuestionario. Por tanto, informa sobre una experiencia delimitada y deja fuera otras: abandonar un formulario, no disponer de conexión o no conseguir terminar un trámite presencial. La corrección principal del balance consiste en distinguir satisfacción entre personas atendidas y accesibilidad del sistema.",
      "La aparente contradicción entre más consultas y menos solicitudes completas se aclara al separar actividades. Visitar un catálogo no implica identificar la serie documental exigida por el formulario. La digitalización puede atraer más búsquedas y, al mismo tiempo, el procedimiento puede impedir que algunas lleguen a convertirse en solicitudes. Ninguna cifra debe utilizarse para borrar la otra. El informe técnico recomienda lenguaje claro y asistencia presencial; el comunicado, sin embargo, presentó esa recomendación como una reforma ya aprobada. Es necesario corregir la diferencia porque todavía no hay presupuesto ni fecha confirmados.",
      "La crónica aporta observaciones sobre las colas, pero su adjetivo obstinadas atribuye a las bibliotecarias una resistencia que las entrevistas no respaldan. Ellas habían solicitado simplificaciones. Retirar esa valoración no obliga a negar las esperas descritas. Conviene evaluar cada afirmación según su base, evitando tanto la aceptación completa de una fuente como su descalificación total por un error de encuadre. Esta lectura permite localizar responsabilidades sin convertir al personal de atención en explicación automática de un problema de diseño.",
      "Proponemos tres indicadores separados: encontrar información, completar una solicitud y recibir una respuesta utilizable. Deben definirse de manera estable y documentar cualquier cambio de medición. También conviene observar dónde se solicita ayuda y dónde se abandona, sin recoger identidades innecesarias. La prueba del formulario debe incorporar personas con distintos grados de familiaridad. Que los usuarios habituales comprendan serie documental demuestra algo sobre ese perfil; no demuestra que la exigencia sea transparente para cualquier visitante.",
      "La siguiente encuesta puede registrar menos satisfacción si permite responder a personas antes excluidas. Ese resultado no sería por sí solo una prueba de deterioro. Tampoco debe utilizarse la ampliación de la muestra para desestimar cualquier crítica nueva. Habrá que examinar obstáculos, respuestas y poblaciones comparadas. Un indicador incómodo puede acompañar una mejora de la escucha institucional; interpretar esa situación requiere explicar qué cambió y no limitarse a celebrar porcentajes ascendentes.",
      "En cuanto a la comunicación, la expresión ya la estamos acompañando no debe sustituir una acción identificable. Si una solicitud aún no se ha revisado, corresponde decirlo y precisar quién contactará, cuándo y para qué. Atribuir el malentendido a una variedad lingüística de la usuaria añadiría una generalización no demostrada a un fallo operativo. La reparación útil consiste en confirmar el siguiente paso.",
      "Anuncio público propuesto: el archivo ha ampliado sus materiales digitales y revisará las barreras del procedimiento de solicitud. Publicará el diseño de una prueba con perfiles diversos y la fecha de decisión sobre asistencia presencial. Esta asistencia todavía no está aprobada. Los resultados distinguirán consultas, solicitudes y respuestas útiles. El objetivo es conservar los avances y hacer visibles las dificultades que las cifras actuales no muestran. La institución deberá publicar también resultados que cuestionen su relato de éxito, porque una evaluación sirve para revisar decisiones y no únicamente para respaldar las ya tomadas."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      550,
      700
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Modera una mesa de evaluación: explica la aparente contradicción estadística, responde a una defensa retórica del programa y acuerda tres indicadores con responsabilidades claras.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "El programa ha ampliado las consultas, pero el indicador de satisfacción solo describe a quienes completaron el trámite y respondieron. No permite evaluar a quienes abandonaron o quedaron fuera. Proponemos separar encontrar información, completar una solicitud y recibir una respuesta utilizable. La reforma de asistencia presencial sigue siendo una recomendación sin financiación aprobada. El comunicado debe corregir esa diferencia y evitar trasladar a las bibliotecarias la responsabilidad de una promesa institucional. Reconocer el avance no exige declarar universal el acceso; medir la exclusión no exige negar que la digitalización haya producido beneficios.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «La satisfacción prueba accesibilidad universal.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Checkpoint: qué demuestra un éxito.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera. La asistencia presencial era una recomendación sin presupuesto aprobado.",
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
        "task": "Presenta tu decisión más discutible sobre Checkpoint: qué demuestra un éxito y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «La asistencia presencial era una recomendación sin presupuesto aprobado.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «Un error de encuadre invalida cualquier observación de la fuente.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Checkpoint: qué demuestra un éxito: ¿qué conclusión conserva el alcance?",
        "options": [
          "La satisfacción prueba accesibilidad universal.",
          "El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Checkpoint: qué demuestra un éxito, ¿qué afirmación debe rechazarse?",
        "options": [
          "La asistencia presencial ya tiene presupuesto y fecha.",
          "La asistencia presencial era una recomendación sin presupuesto aprobado."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Checkpoint: qué demuestra un éxito. ¿Qué interpretación mantiene?",
        "options": [
          "Corregir el encuadre de una fuente no obliga a descartar todas sus observaciones.",
          "Un error de encuadre invalida cualquier observación de la fuente."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "Corregir el encuadre de una fuente no obliga a descartar todas sus observaciones.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Checkpoint: qué demuestra un éxito», ¿qué unidad expresa «evaluación sujeta a nuevos datos»? ___ .",
        "answers": [
          [
            "balance provisional"
          ]
        ],
        "hint": "evaluación sujeta a nuevos datos",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «total respecto al que se calcula una proporción» en este expediente usamos ___ .",
        "answers": [
          [
            "denominador"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "La asociación pidió de que se midieran los abandonos.",
        "answers": [
          "La asociación pidió que se midieran los abandonos."
        ],
        "why": "Pedir introduce complemento directo sin de."
      },
      {
        "type": "transform",
        "source": "El ochenta por ciento está satisfecho. Solo se encuestó a quienes completaron el trámite.",
        "instruction": "Delimita el porcentaje con «de quienes completaron el trámite».",
        "answers": [
          "El ochenta por ciento de quienes completaron el trámite está satisfecho."
        ],
        "why": "Nombrar la población: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Checkpoint: qué demuestra un éxito»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "El programa ha ampliado las consultas, pero el indicador de satisfacción solo describe a quienes completaron el trámite y respondieron. No permite evaluar a quienes abandonaron o quedaron fuera. Proponemos separar encontrar información, completar una solicitud y recibir una respuesta utilizable. La reforma de asistencia presencial sigue siendo una recomendación sin financiación aprobada. El comunicado debe corregir esa diferencia y evitar trasladar a las bibliotecarias la responsabilidad de una promesa institucional. Reconocer el avance no exige declarar universal el acceso; medir la exclusión no exige negar que la digitalización haya producido beneficios.",
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
      "Interpreto integrar retórica, densidad, matiz y variación en fuentes originales.",
      "Puedo explicar por qué «La satisfacción prueba accesibilidad universal.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: La asistencia presencial era una recomendación sin presupuesto aprobado.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «El balance debe separar satisfacción de usuarios atendidos y acceso de quienes quedan fuera.» y registra qué cambiarías."
    ]
  }
};
