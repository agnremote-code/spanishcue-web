import type { Module } from "../../types";

/**
 * B2 · semana 13 · Autoestudio espejo de G151 (verbos que rigen preposición: confiar en, depender de)
 * y G152 (oraciones sustantivas complejas: el hecho de que). Repaso autónomo con una empresa ficticia
 * de Santiago que anuncia la vuelta a la oficina. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w13: Module = {
  "id": "b2-13",
  "level": "b2",
  "week": 13,
  "kind": "core",
  "title": "El hecho de que vuelvan a la oficina depende de muchas cosas",
  "subtitle": "Repaso de los verbos con preposición fija y de «el hecho de que», «la noticia de que» y otras oraciones con «que»",
  "stop": {
    "place": "Santiago",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g151",
    "b2.gram.g152",
    "b2.voc.w13-trabajo-hibrido",
    "b2.pron.w13-de-que-atono",
    "b2.lis.w13-anuncio-oficina",
    "b2.read.w13-columna-presencialidad",
    "b2.wri.w13-correo-postura",
    "b2.spk.w13-negociar-condiciones",
    "b2.fun.w13-plantear-inquietudes",
    "b2.disc.w13-comentar-hechos"
  ],
  reviewObjectives: ["b2.gram.g149","b2.gram.g150","b2.voc.w12-excursion-yacimiento","b2.pron.w12-clitico-agrupado","b2.lis.w12-informe-excursion","b2.read.w12-diario-campana","b2.wri.w12-correo-disculpa","b2.spk.w12-explicar-percances","b2.fun.w12-disculparse-matizando","b2.disc.w12-informar-y-asumir"],
  prerequisites: ["b2-12"],
  "goal": {
    "canDo": "Puedo usar verbos con preposición sin perderla delante de «que», comentar un hecho con «el hecho de que» y elegir el modo después de sustantivos como «la posibilidad de que» o «la noticia de que».",
    "steps": [
      "Repasa qué verbos llevan preposición fija y cómo se mantiene con un nombre, un infinitivo o una oración.",
      "Repasa cómo poner un hecho al principio con «el hecho de que» y qué modo pide cada sustantivo + «de que».",
      "Escucha a dos compañeros de trabajo de Santiago y lee una columna sobre la vuelta a la oficina.",
      "Escribe un correo con tu postura, revísalo y negocia oralmente unas condiciones."
    ]
  },
  "theory": {
    "intro": "En clase trabajaste con tu profesor los verbos que llevan una preposición fija y las oraciones que empiezan por un hecho. Aquí lo repasas con una oficina de Santiago donde acaban de anunciar que todos vuelven a trabajar en persona tres días por semana.",
    "parts": [
      {
        "heading": "La preposición viaja con el verbo",
        "body": [
          "Muchos verbos llevan una preposición que no se elige: viene con ellos. «Depender de», «darse cuenta de», «acordarse de», «quejarse de», «arrepentirse de», «confiar en», «insistir en», «pensar en», «contar con», «soñar con». Esa preposición se mantiene sea cual sea el complemento: un nombre, un pronombre, un infinitivo o una oración con «que».",
          "En las preguntas, la preposición va delante de la palabra interrogativa: «¿De qué depende?», «¿Con quién cuentas?», «¿En qué piensas?». Y con pronombres, se usa la forma tónica: «confío en ella», «cuento contigo», «depende de ti»."
        ],
        "table": {
          "caption": "Un verbo, tres complementos",
          "head": [
            "Verbo",
            "+ nombre",
            "+ infinitivo",
            "+ que"
          ],
          "rows": [
            [
              "depender de",
              "depende del metro",
              "depende de salir temprano",
              "depende de que haya metro"
            ],
            [
              "contar con",
              "cuento con tu ayuda",
              "cuento con terminar el viernes",
              "cuento con que me ayudes"
            ],
            [
              "confiar en",
              "confío en el equipo",
              "confío en llegar a tiempo",
              "confío en que lleguen a tiempo"
            ],
            [
              "darse cuenta de",
              "me di cuenta del error",
              "me di cuenta de haberlo olvidado",
              "me di cuenta de que faltaba un dato"
            ]
          ]
        },
        "examples": [
          {
            "es": "¿Con quién cuentas para la mudanza de escritorio?",
            "note": "La preposición va delante de «quién»."
          },
          {
            "es": "Tu traslado depende de ti, no de mí.",
            "note": "Pronombres tónicos detrás de la preposición: «ti», «mí»."
          }
        ],
        "mistakes": [
          {
            "wrong": "¿Qué depende tu decisión?",
            "right": "¿De qué depende tu decisión?",
            "why": "La preposición no desaparece en la pregunta: va delante de «qué»."
          }
        ],
        "tip": "Aprende estos verbos siempre con su preposición, como una sola pieza: «contar con», nunca «contar» solo."
      },
      {
        "heading": "Delante de «que», la preposición sigue ahí",
        "body": [
          "Si el sujeto es el mismo, lo normal es el infinitivo: «Insisto en ir el lunes» (yo insisto, yo voy). Si cambia, aparece «que»: «Insisto en que vayas el lunes». En los dos casos la preposición se mantiene. Quitarla delante de «que» («me di cuenta que») se llama queísmo y se evita en la lengua cuidada. El error contrario, añadir «de» donde no va («pienso de que»), es el dequeísmo.",
          "La prueba más útil es cambiar la oración por «eso»: «me di cuenta de eso» → «me di cuenta de que»; «creo eso» → «creo que». Ojo también con los verbos que cambian de sentido según la preposición: «pensar en» (tener en la mente) y «pensar de» (opinar, en preguntas); «quedar en» (acordar) y «quedar con» (citarse); «acabar de» (hace poco) y «acabar con» (terminar algo, eliminarlo)."
        ],
        "examples": [
          {
            "es": "Me acordé de que el jueves no hay estacionamiento.",
            "note": "Prueba: «me acordé de eso»."
          },
          {
            "es": "Quedamos en que cada equipo elige sus días presenciales.",
            "note": "«Quedar en» = acordar."
          },
          {
            "es": "Quedé con Diego a las nueve en la cafetería del edificio.",
            "note": "«Quedar con» = citarse con alguien."
          }
        ],
        "mistakes": [
          {
            "wrong": "Nos dimos cuenta que el correo era de la gerencia.",
            "right": "Nos dimos cuenta de que el correo era de la gerencia.",
            "why": "«Darse cuenta de eso»: la preposición se mantiene delante de «que»."
          },
          {
            "wrong": "Pienso de que tres días son demasiados.",
            "right": "Pienso que tres días son demasiados.",
            "why": "«Pienso eso», no «pienso de eso»: aquí sobra el «de»."
          }
        ]
      },
      {
        "heading": "Primero el hecho, después el comentario",
        "body": [
          "Ya sabes decir «me molesta que lo anunciaran por correo». Si quieres que el hecho sea el tema de tu frase, puedes ponerlo al principio: «Que lo anunciaran por correo me molesta» o, más formal y más claro, «El hecho de que lo anunciaran por correo me molesta». El hecho funciona como sujeto, así que el verbo principal va en singular, aunque dentro haya plurales.",
          "Lo normal en esta posición es el subjuntivo, incluso cuando el hecho es real y conocido, porque lo que importa es el comentario: «El hecho de que la sede esté lejos explica muchas quejas». Con verbos como «demostrar», «significar» o «explicar» también es lo habitual. En textos que afirman el hecho como información nueva puede aparecer el indicativo, pero para tu propia escritura el subjuntivo es la opción segura."
        ],
        "examples": [
          {
            "es": "El hecho de que nadie nos preguntara antes demuestra poca confianza.",
            "note": "Hecho real, pero comentado: subjuntivo."
          },
          {
            "es": "Que tengas que cruzar toda la ciudad es un problema serio.",
            "note": "«Que» solo, al principio, más frecuente en la conversación."
          },
          {
            "es": "Que la oficina abre a las ocho, lo sabe todo el mundo.",
            "note": "Si el hecho se presenta como sabido y se retoma con «lo», puede ir en indicativo."
          }
        ],
        "mistakes": [
          {
            "wrong": "El hecho de que los jefes no vengan nunca molestan a todos.",
            "right": "El hecho de que los jefes no vengan nunca molesta a todos.",
            "why": "El sujeto es «el hecho»: el verbo principal va en singular."
          }
        ],
        "tip": "Si tu frase empieza con «el hecho de que», busca enseguida el verbo del comentario y comprueba que esté en singular."
      },
      {
        "heading": "Sustantivo + de que: ¿dato o posibilidad?",
        "body": [
          "Muchos sustantivos llevan «de que» + una oración que explica su contenido. El modo depende del sustantivo. Los que presentan algo posible, temido, deseado o necesario piden subjuntivo: «la posibilidad de que», «el riesgo de que», «el miedo de que», «la esperanza de que», «la necesidad de que». Los que presentan información o certeza piden indicativo: «la noticia de que», «el rumor de que», «la certeza de que», «la impresión de que».",
          "No confundas el contenido con una relativa: en «la noticia que leí», «que» es relativo (leí la noticia) y no lleva «de»; en «la noticia de que cierran la sede», la oración dice qué dice la noticia. En la conversación, «lo de que» retoma algo que se dijo: «Lo de que nos cambian de piso, ¿es seguro?»."
        ],
        "table": {
          "caption": "El sustantivo decide el modo",
          "head": [
            "Sustantivo",
            "Modo",
            "Ejemplo"
          ],
          "rows": [
            [
              "la posibilidad de que",
              "subjuntivo",
              "Existe la posibilidad de que trasladen la sede a Providencia."
            ],
            [
              "el riesgo de que",
              "subjuntivo",
              "Hay riesgo de que se vaya gente con experiencia."
            ],
            [
              "la noticia de que",
              "indicativo",
              "Nos llegó la noticia de que la sede se traslada."
            ],
            [
              "el rumor de que",
              "indicativo",
              "Corre el rumor de que habrá bonos de transporte."
            ],
            [
              "la idea de que",
              "los dos",
              "Me gusta la idea de que elijamos los días. / Defiende la idea de que la oficina une al equipo."
            ]
          ]
        },
        "examples": [
          {
            "es": "Tengo la impresión de que nadie leyó la encuesta.",
            "note": "Información que el hablante cree: indicativo."
          },
          {
            "es": "El informe que mandaron ayer no menciona el transporte.",
            "note": "Relativa: «mandaron el informe». Sin «de»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Existe la posibilidad que cambien el horario.",
            "right": "Existe la posibilidad de que cambien el horario.",
            "why": "«La posibilidad de eso»: el sustantivo pide «de» delante de «que»."
          },
          {
            "wrong": "Nos llegó la noticia de que la sede se traslade.",
            "right": "Nos llegó la noticia de que la sede se traslada.",
            "why": "«Noticia» presenta información: indicativo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero recupera la preposición de cada verbo; después decide qué modo pide cada hecho o cada sustantivo.",
    "exercises": [
      {
        "id": "b2-13-g-preposicion",
        "type": "gap",
        "prompt": "Completa con la preposición que exige el verbo (con artículo contracto si hace falta). Si no hace falta ninguna, escribe «x».",
        "items": [
          {
            "q": "Al final todo depende ___ que el metro funcione bien.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "«Depender de»: se mantiene delante de «que»."
          },
          {
            "q": "No me acordé ___ traer el carné para entrar al edificio.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "«Acordarse de» + infinitivo."
          },
          {
            "q": "La gerente insiste ___ que todos estemos el martes.",
            "answers": [
              [
                "en"
              ]
            ],
            "why": "«Insistir en que» + subjuntivo cuando pide algo."
          },
          {
            "q": "Creo ___ que la medida se puede negociar.",
            "answers": [
              [
                "x"
              ]
            ],
            "why": "«Creo eso»: no lleva preposición."
          },
          {
            "q": "Podemos contar ___ Diego para preparar la encuesta.",
            "answers": [
              [
                "con"
              ]
            ],
            "why": "«Contar con» alguien."
          },
          {
            "q": "Se quejaron ___ ruido del nuevo espacio abierto.",
            "answers": [
              [
                "del"
              ]
            ],
            "why": "«Quejarse de» + «el ruido» = «del ruido»."
          }
        ]
      },
      {
        "id": "b2-13-g-modo",
        "type": "choice",
        "prompt": "Elige la forma correcta según el sustantivo o la posición del hecho.",
        "items": [
          {
            "q": "«Corre el rumor de que la empresa ___ la sede de Ñuñoa».",
            "options": [
              "cierre",
              "cierra",
              "cerrara"
            ],
            "answer": 1,
            "why": "«Rumor» presenta información: indicativo."
          },
          {
            "q": "«Me preocupa el riesgo de que ___ los mejores programadores».",
            "options": [
              "se van",
              "se fueron",
              "se vayan"
            ],
            "answer": 2,
            "why": "«Riesgo» presenta algo posible y temido: subjuntivo."
          },
          {
            "q": "«El hecho de que nos ___ la decisión por correo no ayudó».",
            "options": [
              "comunicaran",
              "comunicaron",
              "comunicarán"
            ],
            "answer": 0,
            "why": "Hecho al principio y comentado: subjuntivo."
          },
          {
            "q": "«Que los jefes también vengan tres días ___ justo».",
            "options": [
              "me parecen",
              "me parece",
              "me parecieron"
            ],
            "answer": 1,
            "why": "El sujeto es toda la oración con «que»: singular."
          }
        ]
      },
      {
        "id": "b2-13-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Me molesta mucho que no nos hayan consultado». Empieza la frase con «El hecho de que…».",
            "model": "El hecho de que no nos hayan consultado me molesta mucho.",
            "checklist": [
              "Pongo el hecho al principio y mantengo el subjuntivo.",
              "El verbo principal concuerda en singular.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Yo voy a pedir el traslado. Tú también lo pides, ¿verdad? Insisto». Une las ideas en una frase con «insistir en», primero con el mismo sujeto y después con otro.",
            "model": "Insisto en pedir el traslado, e insisto en que tú también lo pidas.",
            "checklist": [
              "Uso infinitivo con el mismo sujeto y «que» + subjuntivo con otro.",
              "Mantengo «en» en los dos casos.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Dicen que van a dar un bono de transporte. Puede ser que lo den solo a quien viva lejos». Reescríbelo con «el rumor de que» y «la posibilidad de que».",
            "model": "Circula el rumor de que van a dar un bono de transporte, y existe la posibilidad de que solo lo reciba quien viva lejos.",
            "checklist": [
              "Uso indicativo después de «rumor» y subjuntivo después de «posibilidad».",
              "No olvido el «de» delante de «que».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Ayer vi un problema: en la sala nueva no hay enchufes suficientes». Cuéntalo con «darse cuenta de» y sin perder la preposición.",
            "model": "Ayer me di cuenta de que en la sala nueva no hay enchufes suficientes.",
            "checklist": [
              "Mantengo «de que» y el indicativo para un hecho que descubrí.",
              "Conservo el sentido del texto de partida.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de cambios en la organización del trabajo. Apréndelas con sus verbos y preposiciones.",
    "groups": [
      {
        "title": "Cómo y dónde se trabaja",
        "items": [
          {
            "es": "la jornada presencial",
            "note": "día en que se trabaja en la oficina"
          },
          {
            "es": "trabajar en remoto",
            "note": "trabajar desde casa o desde otro lugar"
          },
          {
            "es": "el traslado",
            "note": "cambio de sede o de puesto"
          },
          {
            "es": "el trayecto",
            "note": "el recorrido entre casa y trabajo"
          },
          {
            "es": "el puesto rotativo",
            "note": "escritorio sin dueño fijo"
          }
        ]
      },
      {
        "title": "Hablar de un cambio con la empresa",
        "items": [
          {
            "es": "plantear una inquietud",
            "note": "decir con respeto algo que preocupa"
          },
          {
            "es": "entrar en vigor",
            "note": "empezar a aplicarse una norma"
          },
          {
            "es": "estar dispuesto a",
            "note": "aceptar hacer algo"
          },
          {
            "es": "llegar a un acuerdo",
            "note": "resolver una diferencia hablando"
          },
          {
            "es": "la medida",
            "note": "decisión que se toma para resolver algo"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-13-v-relacion",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación de la oficina en la que encaja.",
        "pairs": [
          {
            "left": "la jornada presencial",
            "right": "Los martes, miércoles y jueves todo el equipo va a la sede."
          },
          {
            "left": "el trayecto",
            "right": "Diego tarda una hora y diez desde Puente Alto."
          },
          {
            "left": "plantear una inquietud",
            "right": "Camila le escribe a la gerente para explicar qué le preocupa."
          },
          {
            "left": "entrar en vigor",
            "right": "La nueva norma se aplica desde el primer lunes de marzo."
          },
          {
            "left": "el puesto rotativo",
            "right": "Cada mañana reservas un escritorio libre en una aplicación."
          },
          {
            "left": "llegar a un acuerdo",
            "right": "Después de dos reuniones, aceptan dos días fijos y uno flexible."
          }
        ],
        "why": "Cada expresión corresponde a una situación concreta del caso."
      }
    ]
  },
  "pronunciation": {
    "focus": "«De que» sin fuerza frente a «¿de qué?» con fuerza.",
    "explanation": [
      "En «depende de que haya metro», las palabras «de» y «que» son átonas: no llevan fuerza y se unen a lo que sigue, «dequeaya». En cambio, en la pregunta «¿De qué depende?», «qué» es tónico: lleva tilde, fuerza y un tono que sube o cae con claridad. Si das fuerza al «que» átono, tu frase suena a pregunta.",
      "Lo mismo pasa con «en que» y «¿en qué?», «con que» y «¿con qué?». Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "¿De qué depende el traslado?",
        "note": "de-QUÉ: fuerza en «qué»."
      },
      {
        "es": "Depende de que firmen el contrato.",
        "note": "de-pen-de-de-que-FIR-men: fuerza en el verbo, no en «que»."
      },
      {
        "es": "¿En qué insiste la gerente?",
        "note": "en-QUÉ in-SIS-te: dos fuerzas claras."
      }
    ],
    "perceive": {
      "id": "b2-13-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y decide si es una pregunta con «qué» tónico o una afirmación con «que» átono.",
      "items": [
        {
          "q": "¿Qué oyes en la frase sobre el horario?",
          "options": [
            "pregunta con «¿de qué?»",
            "afirmación con «de que»"
          ],
          "answer": 1,
          "audio": "Depende de que aprueben el horario nuevo.",
          "voice": "es-CL-f",
          "why": "«De que» sin fuerza: afirmación."
        },
        {
          "q": "¿Qué oyes en la frase sobre la reunión?",
          "options": [
            "pregunta con «¿de qué?»",
            "afirmación con «de que»"
          ],
          "answer": 0,
          "audio": "¿De qué se quejaron en la reunión?",
          "voice": "es-CL-m",
          "why": "«Qué» tónico y entonación de pregunta."
        },
        {
          "q": "¿Qué oyes en la frase sobre el equipo?",
          "options": [
            "afirmación con «en que»",
            "pregunta con «¿en qué?»"
          ],
          "answer": 0,
          "audio": "Confío en que el equipo lo entienda.",
          "voice": "es-CL-f",
          "why": "«En que» átono, unido al verbo siguiente."
        },
        {
          "q": "¿Qué oyes en la frase sobre el proyecto?",
          "options": [
            "afirmación con «con que»",
            "pregunta con «¿con qué?»"
          ],
          "answer": 1,
          "audio": "¿Con qué contamos para el proyecto nuevo?",
          "voice": "es-CL-m",
          "why": "«Qué» con fuerza: pregunta."
        }
      ]
    },
    "produce": [
      {
        "text": "Me di cuenta de que faltaba un dato.",
        "tip": "«de que» sin fuerza; la fuerza va en «fal».",
        "voice": "es-CL-f"
      },
      {
        "text": "¿De qué depende tu respuesta?",
        "tip": "Destaca «qué» y deja caer la voz al final.",
        "voice": "es-CL-m"
      },
      {
        "text": "El hecho de que vengan los jefes ayuda.",
        "tip": "Pausa breve después de «jefes», antes del comentario.",
        "voice": "es-CL-f"
      },
      {
        "text": "Corre el rumor de que cambian la sede.",
        "tip": "«de que» unido a «cambian».",
        "voice": "es-CL-m"
      }
    ]
  },
  "listening": {
    "title": "Viernes, después del correo",
    "context": "Es viernes por la tarde en una empresa de software de Santiago. Al mediodía, la gerencia anunció por correo que desde marzo todos trabajarán en la oficina tres días por semana. Camila, jefa de un equipo, y Diego, programador, lo comentan en la cafetería del edificio. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "ca",
        "name": "Camila",
        "voice": "es-CL-f",
        "role": "Jefa del equipo de diseño"
      },
      {
        "id": "di",
        "name": "Diego",
        "voice": "es-CL-m",
        "role": "Programador que vive lejos de la oficina"
      }
    ],
    "script": [
      {
        "speaker": "di",
        "text": "¿Leíste el correo? Yo me di cuenta de que era en serio cuando vi que lo firmaba la gerente general. Tres días a la semana desde marzo."
      },
      {
        "speaker": "ca",
        "text": "Lo leí dos veces. Mira, a mí la medida no me parece tan grave. Lo que me molesta es el hecho de que nos lo comunicaran así, un viernes al mediodía, sin preguntarle nada a nadie."
      },
      {
        "speaker": "di",
        "text": "Para ti es fácil, vives a quince minutos. Yo vengo desde Puente Alto: son más de dos horas entre ida y vuelta. Que me pidan tres días significa perder seis horas a la semana en el metro."
      },
      {
        "speaker": "ca",
        "text": "Lo sé, y eso hay que plantearlo. ¿Y lo de que van a dar un bono de transporte? ¿Es cierto o es otro rumor del pasillo?"
      },
      {
        "speaker": "di",
        "text": "Por ahora es un rumor. Tengo la impresión de que lo inventó alguien para calmar los ánimos. Lo que sí está en el correo es la posibilidad de que cada equipo elija sus días."
      },
      {
        "speaker": "ca",
        "text": "Eso es importante. Entonces todo depende de que nos pongamos de acuerdo dentro del equipo. Si elegimos martes, miércoles y jueves, tú evitas los lunes, que son los peores para el metro."
      },
      {
        "speaker": "di",
        "text": "Puede ser. Pero insisto en que alguien hable con la gerencia sobre los horarios. Si pudiera entrar a las diez, el trayecto se haría mucho más corto."
      },
      {
        "speaker": "ca",
        "text": "Cuenta conmigo. El lunes le escribo a la gerente. Y no te preocupes: no pienso en esto como una pelea, sino como una negociación. Confío en que sean razonables."
      },
      {
        "speaker": "di",
        "text": "Gracias. Y acuérdate de mencionar lo de los escritorios: el hecho de que haya solo cuarenta para sesenta personas va a ser un problema el primer martes."
      },
      {
        "speaker": "ca",
        "text": "Tienes razón, no había pensado en eso. Lo pongo en el correo con los números, para que no parezca una queja sin datos."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿De qué hablan y qué deciden hacer?",
        "exercise": {
          "id": "b2-13-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Qué comentan Camila y Diego?",
              "options": [
                "Un anuncio sobre la vuelta a la oficina tres días por semana.",
                "El despido de varios compañeros.",
                "Un cambio en los sueldos del equipo."
              ],
              "answer": 0,
              "why": "Hablan del correo de la gerencia sobre los tres días presenciales."
            },
            {
              "q": "¿Qué decide hacer Camila?",
              "options": [
                "Pedir el traslado a otra sede.",
                "Ignorar el correo hasta marzo.",
                "Escribir a la gerente para negociar los horarios."
              ],
              "answer": 2,
              "why": "«El lunes le escribo a la gerente»."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-13-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué le molesta a Camila?",
              "options": [
                "Tener que ir tres días.",
                "La forma en que comunicaron la decisión.",
                "Que Diego viva lejos."
              ],
              "answer": 1,
              "why": "«Lo que me molesta es el hecho de que nos lo comunicaran así»."
            },
            {
              "q": "¿Qué es solo un rumor?",
              "options": [
                "El bono de transporte.",
                "Los tres días presenciales.",
                "Que cada equipo elija sus días."
              ],
              "answer": 0,
              "why": "Diego: «Por ahora es un rumor»."
            },
            {
              "q": "¿Qué cambio ayudaría más a Diego?",
              "options": [
                "Trabajar los lunes.",
                "Recibir un escritorio fijo.",
                "Poder entrar a las diez."
              ],
              "answer": 2,
              "why": "«Si pudiera entrar a las diez, el trayecto se haría mucho más corto»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-13-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento según la estructura que muestra.",
          "categories": [
            "Verbo con preposición fija",
            "Hecho o sustantivo + que"
          ],
          "items": [
            {
              "text": "me di cuenta de que era en serio",
              "cat": 0,
              "why": "«Darse cuenta de» mantiene «de» delante de «que»."
            },
            {
              "text": "el hecho de que nos lo comunicaran así",
              "cat": 1,
              "why": "Hecho comentado, en subjuntivo."
            },
            {
              "text": "Tengo la impresión de que lo inventó alguien",
              "cat": 1,
              "why": "«Impresión» + indicativo."
            },
            {
              "text": "todo depende de que nos pongamos de acuerdo",
              "cat": 0,
              "why": "«Depender de que» + subjuntivo."
            },
            {
              "text": "la posibilidad de que cada equipo elija sus días",
              "cat": 1,
              "why": "«Posibilidad» + subjuntivo."
            },
            {
              "text": "Cuenta conmigo",
              "cat": 0,
              "why": "«Contar con» + pronombre: «conmigo»."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Tres días en la oficina: lo que no dice el correo",
    "genre": "Columna de opinión en un diario",
    "frame": "Texto original de SpanishCue escrito como columna del diario ficticio «La Hora de Santiago». La autora y las empresas citadas son inventadas.",
    "text": [
      "En las últimas semanas, varias empresas de Santiago han enviado el mismo correo con distintas firmas: desde marzo, tres días presenciales. La noticia de que la oficina vuelve a ser obligatoria ha llenado los grupos de mensajes, y no siempre de quejas. Muchos trabajadores jóvenes confiesan que echaban de menos aprender mirando a sus compañeros, algo que una pantalla no consigue del todo.",
      "El problema no es la medida, sino cómo se toma. El hecho de que la mayoría de estas decisiones se comunique sin una sola consulta previa dice mucho de cómo se entiende la confianza en algunas empresas. Durante tres años, los equipos demostraron que podían cumplir sus plazos desde la casa; que ahora no se les pregunte ni siquiera qué días prefieren resulta, como mínimo, poco elegante.",
      "Además, el éxito de la vuelta depende de factores que no aparecen en los correos. Depende del transporte: en una ciudad donde miles de personas pasan más de dos horas diarias en el metro o en la micro, no da lo mismo entrar a las ocho que a las diez. Depende de los espacios: hay oficinas que se achicaron durante la pandemia y donde ahora no hay escritorios para todos. Y depende, sobre todo, de que los jefes también vayan; nadie cree en una norma que solo cumplen los demás.",
      "Existe además el riesgo de que las empresas pierdan a sus mejores profesionales, que hoy pueden trabajar en remoto para firmas de cualquier país. No es una amenaza vacía: en las encuestas del sector aparece una y otra vez la idea de que la flexibilidad vale tanto como un aumento de sueldo. Quien no se dé cuenta de eso a tiempo puede arrepentirse de haber ganado una discusión y perdido un equipo.",
      "No defiendo que todo vuelva a ser remoto. Defiendo algo más modesto: que se hable antes de decidir. Las empresas que han consultado a sus equipos cuentan hoy con acuerdos que se cumplen sin vigilancia. Las que no lo han hecho se quejan de que nadie respeta los días presenciales. Quizá la diferencia no esté en el número de días, sino en la conversación que hubo antes."
    ],
    "glossary": [
      {
        "es": "la micro",
        "note": "en Chile, autobús urbano"
      },
      {
        "es": "achicarse",
        "note": "hacerse más pequeño"
      },
      {
        "es": "echar de menos",
        "note": "sentir la falta de algo o de alguien"
      }
    ],
    "tasks": [
      {
        "id": "b2-13-r-comprension",
        "type": "choice",
        "prompt": "Responde según la columna.",
        "items": [
          {
            "q": "Según la autora, ¿cuál es el verdadero problema?",
            "options": [
              "Que se vuelva a la oficina.",
              "Que la decisión se tome sin consultar.",
              "Que los jóvenes prefieran la oficina."
            ],
            "answer": 1,
            "why": "«El problema no es la medida, sino cómo se toma»."
          },
          {
            "q": "¿Qué factor menciona como decisivo «sobre todo»?",
            "options": [
              "Que los jefes también vayan a la oficina.",
              "El precio del metro.",
              "El tamaño de las pantallas."
            ],
            "answer": 0,
            "why": "«Y depende, sobre todo, de que los jefes también vayan»."
          },
          {
            "q": "¿Qué defiende la autora al final?",
            "options": [
              "Que todo el trabajo sea remoto.",
              "Que se reduzca el número de días.",
              "Que se hable con los equipos antes de decidir."
            ],
            "answer": 2,
            "why": "«Defiendo algo más modesto: que se hable antes de decidir»."
          }
        ]
      },
      {
        "id": "b2-13-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "En 60–80 palabras, explica qué presenta la autora como dato y qué como riesgo o posibilidad. Cita una frase con «el hecho de que» y otra con «el riesgo de que» y comenta el modo de cada una.",
            "model": "Como dato, la autora presenta que las decisiones se comunican sin consultar: «El hecho de que la mayoría de estas decisiones se comunique sin una sola consulta previa dice mucho». Aunque es real, va en subjuntivo porque lo comenta. Como posibilidad presenta la fuga de talento: «existe el riesgo de que las empresas pierdan a sus mejores profesionales»; «riesgo» pide subjuntivo porque todavía no ha pasado.",
            "checklist": [
              "Distingo hechos de posibilidades.",
              "Cito dos frases literales.",
              "Explico el modo de cada cita."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la columna organiza sus argumentos alrededor de verbos y sustantivos con «de».",
      "items": [
        {
          "quote": "Depende del transporte",
          "note": "La autora repite «depende de» tres veces para ordenar los factores: un recurso de estilo."
        },
        {
          "quote": "la idea de que la flexibilidad vale tanto como un aumento de sueldo",
          "note": "«La idea de que» con indicativo: la idea se presenta como algo que se afirma en las encuestas."
        },
        {
          "quote": "puede arrepentirse de haber ganado una discusión",
          "note": "«Arrepentirse de» + infinitivo compuesto: la acción es anterior al arrepentimiento."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: recupera cada preposición y decide el modo de cada oración con «que».",
    "exercises": [
      {
        "id": "b2-13-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir frases de la oficina.",
        "items": [
          {
            "words": [
              "El",
              "hecho",
              "de",
              "que",
              "nadie",
              "nos",
              "avisara",
              "me",
              "sorprendió."
            ],
            "why": "Hecho al principio, subjuntivo y verbo principal en singular."
          },
          {
            "words": [
              "¿De",
              "quién",
              "depende",
              "la",
              "decisión",
              "final",
              "sobre",
              "los",
              "horarios?"
            ],
            "why": "La preposición va delante de «quién»."
          },
          {
            "words": [
              "Quedamos",
              "en",
              "que",
              "cada",
              "uno",
              "reserva",
              "su",
              "escritorio",
              "el",
              "lunes."
            ],
            "why": "«Quedar en que» = acordar."
          }
        ]
      },
      {
        "id": "b2-13-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Me acuerdo que el primer día no había sillas para todos.",
            "answers": [
              "Me acuerdo de que el primer día no había sillas para todos."
            ],
            "why": "«Acordarse de eso»: hace falta «de que»."
          },
          {
            "sentence": "Opino de que la medida es razonable.",
            "answers": [
              "Opino que la medida es razonable."
            ],
            "why": "«Opino eso»: aquí sobra «de»."
          },
          {
            "sentence": "Hay el riesgo de que los clientes no entienden el cambio.",
            "answers": [
              "Hay el riesgo de que los clientes no entiendan el cambio.",
              "Existe el riesgo de que los clientes no entiendan el cambio."
            ],
            "why": "«Riesgo» pide subjuntivo."
          },
          {
            "sentence": "Que no haya estacionamiento para todos nos complican la vida.",
            "answers": [
              "Que no haya estacionamiento para todos nos complica la vida."
            ],
            "why": "El sujeto es la oración con «que»: singular."
          }
        ]
      },
      {
        "id": "b2-13-x-sustantivo",
        "type": "classify",
        "prompt": "¿Qué modo pide cada sustantivo en estas frases? Clasifícalas.",
        "categories": [
          "Indicativo: información o certeza",
          "Subjuntivo: posibilidad, temor o necesidad"
        ],
        "items": [
          {
            "text": "la certeza de que el proyecto sigue adelante",
            "cat": 0,
            "why": "«Certeza»: información segura."
          },
          {
            "text": "la necesidad de que alguien coordine los turnos",
            "cat": 1,
            "why": "«Necesidad»: algo que todavía hay que lograr."
          },
          {
            "text": "el miedo de que cierren la sede",
            "cat": 1,
            "why": "«Miedo»: algo temido."
          },
          {
            "text": "la noticia de que contratan a diez personas",
            "cat": 0,
            "why": "«Noticia»: información."
          },
          {
            "text": "la esperanza de que nos den más flexibilidad",
            "cat": 1,
            "why": "«Esperanza»: deseo."
          },
          {
            "text": "la sospecha de que el correo lo escribió otra persona",
            "cat": 0,
            "why": "«Sospecha» presenta lo que el hablante cree: indicativo."
          }
        ]
      },
      {
        "id": "b2-13-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Escribe tres frases verdaderas: algo de lo que te diste cuenta este año, algo de lo que depende una decisión tuya y alguien con quien cuentas.",
            "model": "Este año me di cuenta de que necesito más tiempo libre. Mudarme depende de que encuentre un departamento más barato. Para todo cuento con mi hermana.",
            "checklist": [
              "Mantengo la preposición de cada verbo.",
              "Uso subjuntivo después de «depende de que» con algo no realizado."
            ]
          },
          {
            "prompt": "Comenta un cambio reciente en tu trabajo o en tus estudios con «el hecho de que…» y con «que…» al principio.",
            "model": "El hecho de que las clases empiecen a las ocho me obliga a madrugar. Que el profesor grabe las clases, en cambio, me ayuda mucho.",
            "checklist": [
              "Uso subjuntivo en el hecho comentado.",
              "El verbo principal va en singular."
            ]
          },
          {
            "prompt": "Retoma un rumor que circula en tu entorno con «lo de que» y di si tienes la impresión de que es cierto.",
            "model": "Lo de que van a cerrar la biblioteca los domingos lo he oído tres veces. Tengo la impresión de que es cierto, porque ya no hay personal suficiente.",
            "checklist": [
              "Uso «lo de que» para retomar lo que se dijo.",
              "Uso indicativo después de «la impresión de que»."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Tu empresa, tu escuela o tu asociación anunció un cambio que te afecta (horarios, días presenciales, una mudanza de sede). Escribe un correo formal (220–300 palabras) a la persona responsable: comenta el hecho, explica de qué depende que el cambio funcione, plantea tus inquietudes y propón un acuerdo concreto.",
    "context": "La persona que lee el correo tomó la decisión y tiene poco tiempo. Tu objetivo no es quejarte, sino que te escuche y acepte hablar de condiciones. Puedes usar la oficina de Camila y Diego o una situación real.",
    "steps": [
      "Anota el cambio, dos factores de los que depende su éxito y dos inquietudes concretas.",
      "Organiza el correo: el hecho y tu valoración general, los factores, las inquietudes y la propuesta.",
      "Escribe usando «el hecho de que», al menos tres verbos con preposición y dos sustantivos + «de que» con modos distintos.",
      "Revisa cada «que»: comprueba con «eso» si falta o sobra una preposición, y corrige el modo después de cada sustantivo."
    ],
    "useLanguage": [
      "el hecho de que + subjuntivo",
      "depende de que / confío en que…",
      "me he dado cuenta de que…",
      "existe el riesgo / la posibilidad de que…",
      "tengo la impresión de que…",
      "estoy dispuesta a… siempre que…"
    ],
    "model": [
      "Estimada señora Pizarro: le escribo en nombre del equipo de diseño a propósito del correo del viernes sobre los tres días presenciales. Quiero decirle, en primer lugar, que entendemos la medida y que estamos dispuestos a cumplirla. El hecho de que volvamos a trabajar juntos puede ayudar mucho a los compañeros que entraron durante el último año.",
      "Sin embargo, nos hemos dado cuenta de que el éxito del cambio depende de algunos detalles que el correo no menciona. Tres personas del equipo viven a más de una hora de la oficina, y existe el riesgo de que el trayecto les quite tiempo de trabajo y de descanso. Además, tenemos la impresión de que en el piso actual no hay escritorios suficientes para todos los equipos los mismos días.",
      "Por eso, le propongo dos cosas: que cada equipo elija sus días presenciales y que quienes viven lejos puedan entrar a las diez. Confío en que podamos hablarlo en una reunión breve antes de que la norma entre en vigor; si le parece bien, cuente conmigo para organizarla.",
      "Sabemos que la decisión no depende solo de usted y que hay otros equipos con necesidades distintas. Aun así, creo que una conversación a tiempo puede evitar que el cambio se viva como una imposición. Le agradezco de antemano su atención y quedo a la espera de su respuesta. Un saludo cordial, Camila Rojas."
    ],
    "checklist": [
      "Mantengo la preposición de cada verbo también delante de «que».",
      "Uso subjuntivo después de «el hecho de que» y de los sustantivos de posibilidad o temor.",
      "Uso indicativo después de «noticia», «impresión» o «certeza».",
      "Separo el hecho, las inquietudes y la propuesta en párrafos distintos.",
      "El tono es formal, respetuoso y orientado a un acuerdo."
    ],
    "words": [
      220,
      300
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "Una decisión que depende de muchas cosas",
        "prompt": "Habla durante unos dos minutos y medio de una decisión importante que tienes pendiente (un cambio de trabajo, una mudanza, unos estudios). Explica de qué depende, con quién cuentas, de qué te has dado cuenta últimamente y qué riesgos o posibilidades ves.",
        "prep": [
          "Escribe cinco verbos con su preposición: depender de, contar con, darse cuenta de, confiar en, pensar en.",
          "Prepara una frase con «el riesgo de que» y otra con «la posibilidad de que»."
        ],
        "seconds": 150,
        "model": "Estoy pensando en volver a estudiar. La decisión depende sobre todo de que pueda reducir mi jornada, porque el máster es por la tarde. Cuento con el apoyo de mi pareja, que insiste en que lo haga. Hace poco me di cuenta de que llevo cinco años haciendo lo mismo. Hay riesgo de que gane menos durante un tiempo, pero también existe la posibilidad de que consiga un puesto mejor.",
        "selfCheck": [
          "Uso al menos cuatro verbos con su preposición.",
          "No pierdo la preposición delante de «que».",
          "Pronuncio «de que» sin fuerza."
        ]
      },
      {
        "title": "Hablar con la gerente",
        "prompt": "Tu interlocutor hace de gerente que anunció tres días presenciales. Tú representas a tu equipo. Plantea tus inquietudes, retoma un rumor para que lo confirme o lo desmienta, responde a sus argumentos y negocia al menos una condición concreta.",
        "prep": [
          "Prepara una frase con «me preocupa el hecho de que…».",
          "Prepara una pregunta con «lo de que…, ¿es cierto?».",
          "Prepara una propuesta y una concesión."
        ],
        "seconds": 180,
        "selfCheck": [
          "Hago preguntas reales y respondo a lo que dice mi interlocutor.",
          "Distingo lo que sé de lo que es un rumor.",
          "Cerramos con un acuerdo o con un siguiente paso claro."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Cuéntale",
        "task": "Cuéntale a tu profesor de qué depende una decisión que tienes pendiente y con quién cuentas.",
        "phrases": [
          "Depende de que…",
          "Cuento con…"
        ]
      },
      {
        "move": "Pregúntale",
        "task": "Pregúntale qué piensa del trabajo híbrido y de qué se ha dado cuenta en los últimos años.",
        "phrases": [
          "¿Qué piensas de…?",
          "¿De qué te has dado cuenta…?"
        ]
      },
      {
        "move": "Comprueba",
        "task": "Lee tres frases de tu correo con «que» y pídele que confirme si falta o sobra un «de».",
        "phrases": [
          "¿Aquí va «de que»?",
          "¿Con «eso» funciona?"
        ]
      }
    ],
    "bring": "Trae tu correo con los verbos con preposición subrayados y los sustantivos + «de que» marcados según su modo."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "No me había dado cuenta ___ que era festivo.",
        "answers": [
          [
            "de"
          ]
        ],
        "why": "«Darse cuenta de que»."
      },
      {
        "type": "gap",
        "q": "El hecho de que el jefe ___ (llegar) siempre tarde da mal ejemplo.",
        "answers": [
          [
            "llegue"
          ]
        ],
        "why": "Hecho comentado al principio: subjuntivo."
      },
      {
        "type": "gap",
        "q": "Corre el rumor de que la empresa ___ (abrir) una sede en Valparaíso.",
        "answers": [
          [
            "abre",
            "abrirá",
            "va a abrir"
          ]
        ],
        "why": "«Rumor» presenta información: indicativo."
      },
      {
        "type": "choice",
        "q": "¿Qué frase sobre una llamada pendiente es correcta?",
        "options": [
          "Confío que me llamen pronto.",
          "Confío de que me llamen pronto.",
          "Confío en que me llamen pronto."
        ],
        "answer": 2,
        "why": "«Confiar en» mantiene «en» delante de «que»."
      },
      {
        "type": "choice",
        "q": "¿En qué frase «que» es un relativo y no lleva «de»?",
        "options": [
          "La noticia que publicaron ayer era falsa.",
          "Nos dieron la noticia de que cerraban.",
          "Tengo la esperanza de que mejore."
        ],
        "answer": 0,
        "why": "«Publicaron la noticia»: relativa, sin «de»."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿de qué depende el viaje?",
        "audio": "El viaje a Concepción depende de que nos aprueben el presupuesto esta semana.",
        "voice": "es-CL-m",
        "options": [
          "De que aprueben el presupuesto.",
          "Del tiempo en Concepción.",
          "De que haya pasajes baratos."
        ],
        "answer": 0,
        "why": "«Depende de que nos aprueben el presupuesto»."
      },
      {
        "type": "error",
        "sentence": "Me arrepiento no haber aceptado la oferta.",
        "answers": [
          "Me arrepiento de no haber aceptado la oferta."
        ],
        "why": "«Arrepentirse de» + infinitivo."
      },
      {
        "type": "error",
        "sentence": "El hecho de que suban los precios preocupan a los vecinos.",
        "answers": [
          "El hecho de que suban los precios preocupa a los vecinos."
        ],
        "why": "El sujeto es «el hecho»: singular."
      },
      {
        "type": "order",
        "words": [
          "Existe",
          "la",
          "posibilidad",
          "de",
          "que",
          "cambien",
          "la",
          "fecha."
        ],
        "why": "«Posibilidad de que» + subjuntivo."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases sobre un cambio en tu ciudad: una con «el hecho de que» y otra con un verbo con preposición + «que».",
        "model": "El hecho de que hayan cerrado el puente obliga a dar una vuelta enorme. Los vecinos insisten en que lo reabran antes del invierno.",
        "checklist": [
          "Uso subjuntivo después de «el hecho de que».",
          "Mantengo la preposición del verbo delante de «que»."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo usar verbos con preposición fija con un nombre, un infinitivo o «que», también en preguntas, sin queísmo ni dequeísmo.",
      "Puedo comentar un hecho poniéndolo al principio con «el hecho de que» o «que» + subjuntivo.",
      "Puedo elegir el modo después de sustantivos + «de que» y distinguir esa construcción de una relativa."
    ],
    "review": [
      "Mañana, escribe diez verbos con su preposición en tarjetas y repásalos con un ejemplo cada uno.",
      "En tres días, busca en una noticia dos sustantivos + «de que» y explica su modo.",
      "Antes de la semana 14, transforma tres frases de tu correo para que empiecen por «el hecho de que»."
    ]
  },
  "related": [
    {
      "path": "/verbos-que-piden-una-estructura",
      "label": "Clase: Verbos que rigen preposición: confiar en, depender de"
    },
    {
      "path": "/gramatica/oraciones-sustantivas-complejas-el-hecho-de",
      "label": "Clase: Oraciones sustantivas complejas: el hecho de que"
    }
  ]
};
