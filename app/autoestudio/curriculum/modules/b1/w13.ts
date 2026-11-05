import type { Module } from "../../types";

/**
 * B1 · semana 13 · Autoestudio espejo de G111 (pronombres y doble mención temática),
 * G112 (relativos quien, el que, el cual) y G113 (lo que y lo de). Repaso autónomo con Rosa,
 * cocinera de una cevichería de Barranco que prepara su puesto para una feria gastronómica en Lima.
 */
export const b1w13: Module = {
  "id": "b1-13",
  "level": "b1",
  "week": 13,
  "kind": "core",
  "title": "Cocina abierta en Lima: el tema delante, quien, el que y lo de",
  "subtitle": "Repaso de cómo poner el tema delante y retomarlo con un pronombre, de los relativos quien, el que y el cual, y de «lo que», «lo de» y «lo + adjetivo» para hablar de ideas.",
  "stop": {
    "place": "Lima",
    "country": "Perú"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.g111",
    "b1.gram.g112",
    "b1.gram.g113",
    "b1.voc.w13-cocina-feria",
    "b1.pron.w13-comas-pausas",
    "b1.lis.w13-reunion-cocina",
    "b1.read.w13-cronica-feria",
    "b1.wri.w13-informe-equipo",
    "b1.spk.w13-poner-al-dia-oral",
    "b1.fun.w13-poner-al-dia",
    "b1.disc.w13-temas-ordenados"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Al final de esta semana puedes poner al día a un equipo: decir qué está hecho («Los pedidos los confirmé ayer»), quién se encarga («La que lleva las cuentas es Rosa») y qué te preocupa («Lo que me preocupa es lo del transporte»).",
    "steps": [
      "Repasa cómo poner delante el tema y retomarlo con lo, la, los, las, le o les.",
      "Repasa quien, el que, la que y el cual, y el papel de las comas en las relativas.",
      "Repasa «lo que», «lo de» y «lo + adjetivo» para hablar de ideas y temas.",
      "Escucha a una cocinera y a su ayudante, y lee una crónica sobre una feria gastronómica en Lima.",
      "Escribe un mensaje de puesta al día, revísalo y explica en voz alta cómo va un proyecto."
    ]
  },
  "theory": {
    "intro": "Esta semana repasas tres clases que te ayudan a organizar la información cuando hablas de muchas cosas a la vez: el tema delante con su pronombre, los relativos para identificar personas y cosas, y «lo» para hablar de ideas sin nombrarlas. Te acompaña Rosa, cocinera de una cevichería de Barranco que prepara su puesto para una gran feria gastronómica en Lima.",
    "parts": [
      {
        "heading": "El tema delante: «El pescado lo compré yo»",
        "body": [
          "En español puedes empezar la frase por aquello de lo que hablas, sobre todo cuando lo contrastas con otra cosa: «El pescado lo compré yo; los limones, Diego». Si el complemento directo va delante del verbo, hay que retomarlo con «lo, la, los, las». No es una repetición inútil: es obligatorio. Si va detrás, no se repite: «Compré el pescado».",
          "El pronombre concuerda con el tema: «La salsa la preparamos el viernes», «Los platos los lavó Ana», «Las mesas las trae el ayuntamiento». Detrás del tema puedes hacer una pausa breve al hablar; al escribir, a veces se marca con una coma."
        ],
        "table": {
          "caption": "Complemento directo detrás y delante",
          "head": [
            "Orden normal",
            "Tema delante",
            "Qué cambia"
          ],
          "rows": [
            [
              "Confirmé el pedido.",
              "El pedido lo confirmé yo.",
              "Se destaca de qué hablamos."
            ],
            [
              "Ya limpiamos la cocina.",
              "La cocina ya la limpiamos.",
              "«la» retoma «la cocina»."
            ],
            [
              "Diego trae los cuchillos.",
              "Los cuchillos los trae Diego.",
              "«los» retoma «los cuchillos»."
            ],
            [
              "Imprimí las cartas.",
              "Las cartas las imprimí anoche.",
              "«las» retoma «las cartas»."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Las entradas compré por internet.",
            "right": "Las entradas las compré por internet.",
            "why": "Si el complemento directo va delante, el pronombre es obligatorio."
          },
          {
            "wrong": "Lo confirmé el pedido ayer.",
            "right": "Confirmé el pedido ayer. / El pedido lo confirmé ayer.",
            "why": "Con el complemento detrás del verbo, no se duplica con «lo»."
          }
        ]
      },
      {
        "heading": "Le y les delante, «a mí me» y «lo es»",
        "body": [
          "Con el complemento indirecto pasa algo parecido. Delante del verbo necesita «le» o «les»: «A los proveedores les escribí ayer», «A Diego le encanta el ají». Detrás del verbo, la repetición es opcional pero muy frecuente: «Le di la receta a Rosa». Con los verbos como «gustar», el pronombre siempre aparece. Usa «les» cuando la persona es plural.",
          "Los pronombres tónicos (a mí, a ti, a ella…) siempre van acompañados del pronombre átono: «A mí me lo contó Diego», «La vi a ella en el mercado». Y para retomar un adjetivo o un nombre con «ser», «estar» o «parecer», usa «lo», que no cambia: «¿Es caro el puesto? — Sí, lo es», «Parece fácil, pero no lo es»."
        ],
        "examples": [
          {
            "es": "A la jefa de sala le mandé el menú esta mañana.",
            "note": "Indirecto delante: «le» obligatorio."
          },
          {
            "es": "A nosotros nos tocó el puesto del fondo.",
            "note": "Tónico + átono."
          },
          {
            "es": "Les pagué a los camareros el sábado.",
            "note": "Indirecto detrás: «les» opcional pero natural, en plural."
          },
          {
            "es": "¿Están listos los postres? — Sí, lo están.",
            "note": "«Lo» invariable retoma «listos»."
          }
        ],
        "mistakes": [
          {
            "wrong": "A los clientes le encantó el ceviche.",
            "right": "A los clientes les encantó el ceviche.",
            "why": "El pronombre concuerda en plural con «los clientes»."
          },
          {
            "wrong": "¿Es cocinera? — Sí, la es.",
            "right": "¿Es cocinera? — Sí, lo es.",
            "why": "Con «ser», «estar» y «parecer» se usa siempre «lo», invariable."
          }
        ],
        "tip": "Antes de escribir un tema delante, pregúntate: ¿es directo (lo, la, los, las) o indirecto (le, les)?"
      },
      {
        "heading": "Quien, el que y el cual",
        "body": [
          "«Quien» y «quienes» solo se refieren a personas. Los usas sin nombre delante («Quien prepara las salsas es Diego», «Busco a quien organizó el puesto»), después de una preposición («la proveedora con quien hablé») o entre comas («Rosa, quien abrió el local en 2015, …»). No se usan sin preposición para identificar: «el cocinero que vino», no «el cocinero quien vino».",
          "«El que, la que, los que, las que» sirven para personas y cosas, después de preposición («el mercado al que vamos», «la mesa en la que trabajo») y sin nombre delante («La que lleva las cuentas es Rosa»). «El cual, la cual» aparece sobre todo en textos formales («el local, en el cual se celebró la feria»): basta con reconocerlo."
        ],
        "table": {
          "caption": "Qué relativo elegir",
          "head": [
            "Situación",
            "Relativo",
            "Ejemplo"
          ],
          "rows": [
            [
              "Persona, sin nombre delante",
              "quien / el que, la que",
              "Quien llegue primero abre la cocina."
            ],
            [
              "Después de preposición",
              "con quien / con el que, con la que",
              "El chef con el que trabajé es de Arequipa."
            ],
            [
              "Cosa después de preposición",
              "el que, la que (el cual, formal)",
              "Este es el cuchillo con el que corto el pescado."
            ],
            [
              "Solo algunos (sin comas)",
              "que",
              "Los platos que salieron fríos volvieron a la cocina."
            ],
            [
              "Todos (con comas)",
              "que / quien",
              "Los platos, que salieron fríos, volvieron a la cocina."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "La proveedora quien nos vende el pescado es de Chorrillos.",
            "right": "La proveedora que nos vende el pescado es de Chorrillos.",
            "why": "Sin preposición y sin comas, para identificar se usa «que»."
          },
          {
            "wrong": "Es la sartén con que la que cocino.",
            "right": "Es la sartén con la que cocino.",
            "why": "Después de preposición, «el que / la que» concuerda con la cosa."
          }
        ]
      },
      {
        "heading": "Lo que, lo de y lo + adjetivo",
        "body": [
          "«Lo» sin nombre detrás habla de ideas o de temas, no de cosas concretas. «Lo que» significa «la cosa que»: «Lo que me preocupa es el transporte», «Haz todo lo que puedas». Con «lo que + verbo + es / son» destacas un elemento: «Lo que necesitamos son más manos».",
          "«Lo de» + nombre, infinitivo o adverbio resume un tema conocido por los dos: «lo del pedido», «lo de abrir los lunes», «lo de ayer». Y «lo + adjetivo» presenta un aspecto de la situación: «Lo bueno es que hay mucha gente; lo malo, que no tenemos sombra». No confundas «lo que» (una idea) con «el que / la que» (una persona o cosa concreta)."
        ],
        "examples": [
          {
            "es": "Lo que más me gustó fue el postre de lúcuma.",
            "note": "«Lo que» destaca un elemento."
          },
          {
            "es": "¿Sabes algo de lo del permiso municipal?",
            "note": "«Lo de» resume un tema conocido."
          },
          {
            "es": "Lo mejor de la feria es que todo es fresco.",
            "note": "«Lo + adjetivo» + «es que»."
          },
          {
            "es": "La que hizo el postre fue Lucía.",
            "note": "Una persona concreta: «la que»."
          }
        ],
        "mistakes": [
          {
            "wrong": "El que me preocupa es que no llegue el pescado.",
            "right": "Lo que me preocupa es que no llegue el pescado.",
            "why": "Se habla de una idea, no de una persona ni de una cosa concreta: «lo que»."
          }
        ],
        "tip": "Si puedes decir «la cosa que» o «el asunto de», usa «lo que» o «lo de»."
      }
    ]
  },
  "grammar": {
    "intro": "Practicas las tres clases por orden: el tema delante, los relativos y «lo».",
    "exercises": [
      {
        "id": "b1-13-gramatica-tema",
        "type": "gap",
        "title": "El tema delante",
        "prompt": "Completa con el pronombre que retoma el tema (lo, la, los, las, le, les).",
        "items": [
          {
            "q": "Los limones ___ compré esta mañana en el mercado de Surquillo.",
            "answers": [
              [
                "los"
              ]
            ],
            "why": "Directo masculino plural delante del verbo."
          },
          {
            "q": "A la nueva ayudante ___ expliqué cómo cortar el pescado.",
            "answers": [
              [
                "le"
              ]
            ],
            "why": "Indirecto singular delante: «le»."
          },
          {
            "q": "La carta de postres ___ diseñó una amiga de Rosa.",
            "answers": [
              [
                "la"
              ]
            ],
            "why": "Directo femenino singular."
          },
          {
            "q": "A los vecinos del puesto ___ prestamos dos sillas.",
            "answers": [
              [
                "les"
              ]
            ],
            "why": "Indirecto plural: «les»."
          },
          {
            "q": "¿Es difícil hacer un buen ceviche? — Parece fácil, pero no ___ es.",
            "answers": [
              [
                "lo"
              ]
            ],
            "why": "«Lo» invariable con «ser»."
          }
        ]
      },
      {
        "id": "b1-13-gramatica-relativos",
        "type": "choice",
        "title": "¿Quién o cuál?",
        "prompt": "Elige el relativo correcto.",
        "items": [
          {
            "q": "___ quiera probar el ají, que levante la mano.",
            "options": [
              "Quien",
              "Que",
              "El cual"
            ],
            "answer": 0,
            "why": "Persona sin nombre delante: «quien»."
          },
          {
            "q": "La cocinera con ___ aprendí a hacer causa vive en Trujillo.",
            "options": [
              "que",
              "quien",
              "cual"
            ],
            "answer": 1,
            "why": "Persona después de preposición: «con quien» (o «con la que»)."
          },
          {
            "q": "Este es el mercado ___ compramos el pescado cada día.",
            "options": [
              "que",
              "el que",
              "en el que"
            ],
            "answer": 2,
            "why": "«Comprar en un mercado»: la preposición va delante del relativo."
          },
          {
            "q": "De todos los camareros, ___ habla inglés es Javier.",
            "options": [
              "el cual",
              "el que",
              "quien que"
            ],
            "answer": 1,
            "why": "Sin nombre delante, identificando entre varios: «el que»."
          },
          {
            "q": "Los clientes ___ pidieron el menú del día esperaron poco.",
            "options": [
              "que",
              "quienes",
              "los cuales"
            ],
            "answer": 0,
            "why": "Solo algunos clientes, sin comas ni preposición: «que»."
          },
          {
            "q": "Se firmó un acuerdo, ___ entrará en vigor en enero.",
            "options": [
              "el que cual",
              "el cual",
              "lo cual que"
            ],
            "answer": 1,
            "why": "Texto formal, explicativa: «el cual»."
          }
        ]
      },
      {
        "id": "b1-13-gramatica-lo",
        "type": "gap",
        "title": "Lo que, lo de y lo + adjetivo",
        "prompt": "Completa con «lo que», «lo de», «lo del» o «lo» + adjetivo.",
        "items": [
          {
            "q": "___ más me preocupa es la lluvia del domingo.",
            "answers": [
              [
                "Lo que",
                "lo que"
              ]
            ],
            "why": "Una idea: «lo que»."
          },
          {
            "q": "¿Ya resolviste ___ permiso municipal?",
            "answers": [
              [
                "lo del"
              ]
            ],
            "why": "«Lo de» + el = «lo del»: un tema conocido."
          },
          {
            "q": "___ (bueno) es que el puesto está junto a la entrada.",
            "answers": [
              [
                "Lo bueno",
                "lo bueno"
              ]
            ],
            "why": "«Lo + adjetivo»: un aspecto positivo."
          },
          {
            "q": "No me gustó nada ___ cobrar por el agua.",
            "answers": [
              [
                "lo de"
              ]
            ],
            "why": "«Lo de» + infinitivo: el asunto de cobrar."
          },
          {
            "q": "Haz ___ puedas, no te preocupes por el resto.",
            "answers": [
              [
                "lo que"
              ]
            ],
            "why": "«Lo que» = la cosa que."
          }
        ]
      },
      {
        "id": "b1-13-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error de las tres clases. Escríbela bien.",
        "items": [
          {
            "sentence": "El postre preparó Lucía y las salsas, Diego.",
            "answers": [
              "El postre lo preparó Lucía y las salsas, Diego."
            ],
            "why": "Directo delante del verbo: hace falta «lo»."
          },
          {
            "sentence": "A mis padres le gustó mucho el restaurante.",
            "answers": [
              "A mis padres les gustó mucho el restaurante."
            ],
            "why": "Indirecto plural: «les»."
          },
          {
            "sentence": "El cocinero quien ganó el concurso es amigo mío.",
            "answers": [
              "El cocinero que ganó el concurso es amigo mío."
            ],
            "why": "Sin preposición ni comas se usa «que»."
          },
          {
            "sentence": "El que más me gusta de Lima es el clima de la mañana.",
            "answers": [
              "Lo que más me gusta de Lima es el clima de la mañana."
            ],
            "why": "Se habla de una idea: «lo que»."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de una cocina profesional y de una feria gastronómica. Algunas son muy de Perú: te lo indicamos.",
    "groups": [
      {
        "title": "En la cocina",
        "items": [
          {
            "es": "la brigada",
            "note": "El equipo de cocineros."
          },
          {
            "es": "el pedido"
          },
          {
            "es": "el proveedor, la proveedora"
          },
          {
            "es": "la mise en place",
            "note": "Tenerlo todo cortado y preparado antes del servicio."
          },
          {
            "es": "el emplatado"
          },
          {
            "es": "el servicio"
          }
        ]
      },
      {
        "title": "En la feria",
        "items": [
          {
            "es": "el puesto"
          },
          {
            "es": "la cola"
          },
          {
            "es": "agotar existencias"
          },
          {
            "es": "el permiso municipal"
          },
          {
            "es": "la degustación"
          }
        ]
      },
      {
        "title": "Comida y expresiones",
        "items": [
          {
            "es": "el ají",
            "note": "Chile o pimiento picante; muy usado en Perú."
          },
          {
            "es": "la leche de tigre",
            "note": "El jugo del ceviche."
          },
          {
            "es": "la chamba",
            "note": "En Perú, coloquial: el trabajo."
          },
          {
            "es": "estar a full",
            "note": "Coloquial: estar muy ocupado o muy lleno."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-13-vocabulario-definiciones",
        "type": "match",
        "title": "Cada palabra con su definición",
        "prompt": "Une cada palabra con su explicación.",
        "pairs": [
          {
            "left": "la brigada",
            "right": "el equipo de personas que cocinan juntas"
          },
          {
            "left": "el emplatado",
            "right": "la forma de presentar la comida en el plato"
          },
          {
            "left": "agotar existencias",
            "right": "vender todo lo que había"
          },
          {
            "left": "la degustación",
            "right": "una pequeña porción para probar"
          },
          {
            "left": "la mise en place",
            "right": "la preparación de ingredientes antes del servicio"
          }
        ],
        "why": "Fíjate en si la palabra nombra personas, una acción, una porción o un momento del trabajo."
      },
      {
        "id": "b1-13-vocabulario-huecos",
        "type": "gap",
        "title": "La pizarra de la cocina",
        "prompt": "Completa con una palabra del banco.",
        "bank": [
          "pedido",
          "cola",
          "puesto",
          "chamba",
          "servicio"
        ],
        "items": [
          {
            "q": "El ___ de pescado llega a las seis: alguien tiene que recibirlo.",
            "answers": [
              [
                "pedido"
              ]
            ],
            "why": "La mercancía que encargamos."
          },
          {
            "q": "Ayer había una ___ de cuarenta personas delante del puesto.",
            "answers": [
              [
                "cola"
              ]
            ],
            "why": "Personas esperando una detrás de otra."
          },
          {
            "q": "Nuestro ___ es el número 12, al lado de los dulces.",
            "answers": [
              [
                "puesto"
              ]
            ],
            "why": "El espacio de venta en la feria."
          },
          {
            "q": "Durante el ___ nadie usa el móvil en la cocina.",
            "answers": [
              [
                "servicio"
              ]
            ],
            "why": "Las horas en que se sirve a los clientes."
          },
          {
            "q": "Mucha ___ esta semana, pero vale la pena.",
            "answers": [
              [
                "chamba"
              ]
            ],
            "why": "En Perú, «trabajo», coloquial."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas que cambian el sentido: las comas de las relativas y el tema delante",
    "explanation": [
      "Una relativa entre comas (explicativa) se dice con una pausa antes y después, y con un tono un poco más bajo, como un comentario: «Los cocineros, que estaban cansados, se fueron a casa» (todos estaban cansados y todos se fueron). Sin pausas, la relativa elige solo a algunos: «Los cocineros que estaban cansados se fueron a casa» (los demás se quedaron).",
      "Cuando pones el tema delante, también es normal hacer una pausa breve y subir un poco el tono al final del tema: «El pescado… lo compré yo». Esa pausa avisa al oyente de que va a oír algo sobre ese tema."
    ],
    "examples": [
      {
        "es": "Los camareros, que hablan inglés, atienden a los turistas.",
        "note": "Con pausas: todos hablan inglés."
      },
      {
        "es": "Los camareros que hablan inglés atienden a los turistas.",
        "note": "Sin pausas: solo esos camareros."
      }
    ],
    "perceive": {
      "id": "b1-13-pronunciacion-pausas",
      "type": "listen",
      "title": "¿Algunos o todos?",
      "prompt": "Escucha cada frase y fíjate en las pausas.",
      "items": [
        {
          "q": "¿Cuántos postres se vendieron?",
          "options": [
            "Solo algunos, los de chocolate.",
            "Todos; además eran de chocolate."
          ],
          "answer": 1,
          "why": "Hay pausas alrededor de «que eran de chocolate»: es un comentario sobre todos.",
          "audio": "Los postres, que eran de chocolate, se vendieron en una hora.",
          "voice": "es-PE-f"
        },
        {
          "q": "¿Y aquí?",
          "options": [
            "Solo los que vinieron temprano.",
            "Todos los voluntarios."
          ],
          "answer": 0,
          "why": "Sin pausas: la relativa elige a algunos.",
          "audio": "Los voluntarios que vinieron temprano montaron las mesas.",
          "voice": "es-PE-m"
        },
        {
          "q": "¿Quién compró el pescado?",
          "options": [
            "Diego.",
            "La persona que habla."
          ],
          "answer": 1,
          "why": "Tema delante con pausa: «El pescado… lo compré yo».",
          "audio": "El pescado, lo compré yo; los limones, Diego.",
          "voice": "es-CO-f"
        },
        {
          "q": "¿Cuántas mesas estaban rotas?",
          "options": [
            "Todas.",
            "Solo algunas."
          ],
          "answer": 1,
          "why": "Sin pausas: solo las que estaban rotas volvieron al almacén.",
          "audio": "Las mesas que estaban rotas volvieron al almacén.",
          "voice": "es-MX-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Mi hermana, que vive en Cusco, viene a la feria.",
        "tip": "Pausa antes de «que» y después de «Cusco».",
        "voice": "es-PE-f"
      },
      {
        "text": "Los platos que salieron fríos volvieron a la cocina.",
        "tip": "Sin pausas: solo algunos platos.",
        "voice": "es-PE-m"
      },
      {
        "text": "Las cartas… las imprimimos anoche.",
        "tip": "Sube un poco el tono en «cartas» y haz una pausa breve.",
        "voice": "es-CO-f"
      }
    ],
    "spelling": "Al escribir, las pausas de la relativa explicativa se marcan con dos comas: una antes del relativo y otra al final. Si olvidas la segunda coma, la frase queda confusa."
  },
  "listening": {
    "title": "Dos días antes de la feria",
    "context": "Es jueves por la noche en la cevichería de Rosa, en Barranco. Rosa vuelve de un viaje de cuatro días a Piura y Diego, su ayudante, la pone al día sobre la preparación del puesto para la feria del fin de semana.",
    "speakers": [
      {
        "id": "ros",
        "name": "Rosa",
        "voice": "es-PE-f",
        "role": "cocinera y dueña de la cevichería"
      },
      {
        "id": "die",
        "name": "Diego",
        "voice": "es-PE-m",
        "role": "ayudante de cocina"
      }
    ],
    "script": [
      {
        "speaker": "ros",
        "text": "Diego, perdona que llegue tan tarde. A ver, cuéntame cómo va todo. ¿El permiso de la municipalidad?"
      },
      {
        "speaker": "die",
        "text": "El permiso lo recogí el martes, ya está pegado en la puerta. Y a los de la organización les mandé la lista de platos, como querías."
      },
      {
        "speaker": "ros",
        "text": "Perfecto. ¿Y los pedidos? Lo que más me preocupa es el pescado."
      },
      {
        "speaker": "die",
        "text": "Los pedidos los confirmé todos. El pescado lo trae el sábado a las cinco la señora Marta, la proveedora con la que trabajábamos antes. Lo bueno es que nos hace el mismo precio."
      },
      {
        "speaker": "ros",
        "text": "¿Marta? ¿La que tiene el puesto en el terminal de Chorrillos? Qué bien. ¿Y quién va a estar en la caja?"
      },
      {
        "speaker": "die",
        "text": "Quien se encarga de la caja es Lucía, la sobrina de don Pepe, que estudió administración. Ah, y lo de las sillas está resuelto: nos las presta el restaurante de al lado."
      },
      {
        "speaker": "ros",
        "text": "Genial. ¿Hay algo que no hayas podido hacer?"
      },
      {
        "speaker": "die",
        "text": "Sí, lo del cartel. La imprenta a la que fuimos el mes pasado cerró. Mañana busco otra. Ah, y a mí me tocó probar todas las salsas, así que hoy no ceno."
      },
      {
        "speaker": "ros",
        "text": "Ja, ja. Oye, Diego, ¿estás cansado? Pareces agotado."
      },
      {
        "speaker": "die",
        "text": "Lo estoy, no te voy a mentir. Pero lo importante es que el sábado estemos listos."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿De qué hablan?",
        "exercise": {
          "id": "b1-13-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Para qué hablan Rosa y Diego?",
              "options": [
                "Para despedir a un empleado.",
                "Para repasar las tareas antes de la feria.",
                "Para elegir el menú de la semana."
              ],
              "answer": 1,
              "why": "Diego pone al día a Rosa sobre permiso, pedidos, caja, sillas y cartel."
            },
            {
              "q": "¿Cómo va la preparación, en general?",
              "options": [
                "Casi todo está hecho; queda un problema.",
                "No han hecho nada.",
                "Todo está listo y sin problemas."
              ],
              "answer": 0,
              "why": "Solo falta resolver «lo del cartel»."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota los detalles.",
        "exercise": {
          "id": "b1-13-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la conversación.",
          "items": [
            {
              "q": "¿Quién trae el pescado?",
              "options": [
                "Lucía.",
                "Don Pepe.",
                "Marta, una proveedora conocida."
              ],
              "answer": 2,
              "why": "«El pescado lo trae el sábado… la señora Marta.»"
            },
            {
              "q": "¿Quién estará en la caja?",
              "options": [
                "La sobrina de don Pepe.",
                "Diego.",
                "Rosa."
              ],
              "answer": 0,
              "why": "«Quien se encarga de la caja es Lucía, la sobrina de don Pepe.»"
            },
            {
              "q": "¿Qué problema queda?",
              "options": [
                "Las sillas.",
                "El cartel, porque la imprenta cerró.",
                "El permiso."
              ],
              "answer": 1,
              "why": "«Lo del cartel. La imprenta a la que fuimos… cerró.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-13-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la palabra o las palabras que usan.",
          "items": [
            {
              "q": "El permiso ___ recogí el martes.",
              "answers": [
                [
                  "lo"
                ]
              ],
              "why": "Tema delante retomado con «lo»."
            },
            {
              "q": "___ más me preocupa es el pescado.",
              "answers": [
                [
                  "Lo que",
                  "lo que"
                ]
              ],
              "why": "«Lo que» presenta una idea."
            },
            {
              "q": "La proveedora con ___ trabajábamos antes.",
              "answers": [
                [
                  "la que"
                ]
              ],
              "why": "Preposición + «la que»."
            },
            {
              "q": "¿Estás cansado? — ___ estoy, no te voy a mentir.",
              "answers": [
                [
                  "Lo",
                  "lo"
                ]
              ],
              "why": "«Lo» retoma el adjetivo «cansado»."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Sabores del Pacífico: lo que dejó la feria",
    "genre": "Crónica en un diario",
    "frame": "Un diario de Lima publica el lunes una crónica sobre la feria gastronómica del fin de semana en el parque de la Exposición.",
    "text": [
      "Quien pasó el sábado por el parque de la Exposición ya sabe lo que es esperar cuarenta minutos por un ceviche. La feria Sabores del Pacífico, que reunió a sesenta puestos de todo el país, recibió a más de veinte mil visitantes. Lo bueno, según los organizadores, es que la mayoría de los cocineros eran pequeños negocios familiares; lo malo, que muchos agotaron existencias antes de las cuatro.",
      "El puesto que más colas tuvo fue el de una cevichería de Barranco, a la que llegaban clientes incluso desde Callao. Su dueña, Rosa Quispe, quien abrió el local hace diez años con un préstamo de su hermano, no esperaba tanto éxito. «Los pedidos los calculamos para mil platos y vendimos mil seiscientos», contaba el domingo. «A mi ayudante, Diego, le debo la mitad de esto».",
      "No todo fue perfecto. Lo del transporte fue un problema serio: los autobuses en los que llegaba el público iban llenos, y los vecinos se quejaron del ruido. A los organizadores les queda trabajo para la próxima edición, en la cual, prometen, habrá más sombra y más baños.",
      "Lo que nadie discute es el ambiente. Los visitantes con los que hablamos repetían lo mismo: comer bien y barato en Lima es posible. ¿Es esta la mejor feria del año? Muchos creen que lo es."
    ],
    "glossary": [
      {
        "es": "reunir"
      },
      {
        "es": "el préstamo"
      },
      {
        "es": "la edición"
      }
    ],
    "tasks": [
      {
        "id": "b1-13-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según la crónica.",
        "items": [
          {
            "q": "¿Qué fue lo malo de la feria, según los organizadores?",
            "options": [
              "Que muchos puestos se quedaron sin comida temprano.",
              "Que vinieron pocos visitantes.",
              "Que los precios eran altos."
            ],
            "answer": 0,
            "why": "«Lo malo, que muchos agotaron existencias antes de las cuatro.»"
          },
          {
            "q": "¿Quién ayudó a Rosa a abrir el local?",
            "options": [
              "Diego.",
              "Su hermano, con un préstamo.",
              "Los organizadores."
            ],
            "answer": 1,
            "why": "«Abrió el local hace diez años con un préstamo de su hermano.»"
          },
          {
            "q": "¿Qué mejoras prometen para la próxima edición?",
            "options": [
              "Más puestos y más música.",
              "Entradas más baratas.",
              "Más sombra y más baños."
            ],
            "answer": 2,
            "why": "«Habrá más sombra y más baños.»"
          }
        ]
      },
      {
        "id": "b1-13-lectura-quien-que",
        "type": "match",
        "title": "¿Quién o qué?",
        "prompt": "Une cada descripción con la persona o la cosa a la que se refiere en la crónica.",
        "pairs": [
          {
            "left": "la persona a la que Rosa le debe la mitad del éxito",
            "right": "Diego"
          },
          {
            "left": "el puesto que más colas tuvo",
            "right": "la cevichería de Barranco"
          },
          {
            "left": "quien abrió el local con un préstamo",
            "right": "Rosa Quispe"
          },
          {
            "left": "lo que fue un problema serio",
            "right": "el transporte"
          },
          {
            "left": "los que se quejaron del ruido",
            "right": "los vecinos"
          }
        ],
        "why": "Busca en el texto el relativo o el «lo» que introduce cada dato."
      }
    ],
    "noticing": {
      "prompt": "Fíjate en cómo la crónica identifica personas y presenta ideas.",
      "items": [
        {
          "quote": "Quien pasó el sábado por el parque de la Exposición",
          "note": "«Quien» sin nombre delante: cualquier persona que pasó."
        },
        {
          "quote": "Rosa Quispe, quien abrió el local hace diez años",
          "note": "Relativa explicativa entre comas con «quien»."
        },
        {
          "quote": "Los pedidos los calculamos para mil platos",
          "note": "Tema delante retomado con «los»."
        },
        {
          "quote": "la próxima edición, en la cual, prometen, habrá más sombra",
          "note": "«En la cual»: relativo formal típico de la prensa."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combinas las tres clases y recuperas lo de las semanas 11 y 12.",
    "exercises": [
      {
        "id": "b1-13-practica-orden",
        "type": "order",
        "title": "Frases de la cocina",
        "prompt": "Ordena las palabras para formar frases completas.",
        "items": [
          {
            "words": [
              "Las",
              "salsas",
              "las",
              "preparamos",
              "el",
              "viernes",
              "por",
              "la",
              "noche."
            ]
          },
          {
            "words": [
              "Lo",
              "que",
              "más",
              "vendimos",
              "fue",
              "el",
              "ceviche",
              "de",
              "corvina."
            ]
          },
          {
            "words": [
              "La",
              "chica",
              "con",
              "la",
              "que",
              "hablaste",
              "es",
              "la",
              "nueva",
              "cajera."
            ]
          },
          {
            "words": [
              "A",
              "los",
              "clientes",
              "del",
              "puesto",
              "les",
              "regalamos",
              "una",
              "bebida."
            ]
          }
        ]
      },
      {
        "id": "b1-13-practica-retrieval",
        "type": "context",
        "title": "Recuperación: semanas 11 y 12",
        "prompt": "Recuperación de semanas anteriores en el contexto de la feria. Elige la forma correcta.",
        "items": [
          {
            "context": "Semana 11, no volver a. Diego se cortó un dedo por usar un cuchillo sin afilar. Rosa le advierte.",
            "q": "¿Qué le dice?",
            "options": [
              "No dejas de usar ese cuchillo.",
              "No vuelvas a usar ese cuchillo sin afilarlo.",
              "No vuelves a usar ese cuchillo."
            ],
            "answer": 1,
            "why": "Advertencia: «no vuelvas a» + infinitivo."
          },
          {
            "context": "Semana 11, llegar a. La cola fue enorme el sábado.",
            "q": "«La cola ___ medir cien metros.»",
            "options": [
              "llegó a",
              "acabó de",
              "dejó de"
            ],
            "answer": 0,
            "why": "«Llegar a»: el punto máximo."
          },
          {
            "context": "Semana 12, preposición fija. Rosa habla de la ayuda de su equipo.",
            "q": "«Siempre puedo contar ___ Diego.»",
            "options": [
              "de",
              "en",
              "con"
            ],
            "answer": 2,
            "why": "«Contar con»."
          },
          {
            "context": "Semana 12, verbos de cambio. La cevichería empezó como un carrito en la calle.",
            "q": "¿Cómo lo cuentas?",
            "options": [
              "El carrito se volvió en un restaurante.",
              "El carrito se convirtió en un restaurante.",
              "El carrito se hizo restaurante famoso en."
            ],
            "answer": 1,
            "why": "Transformación: «convertirse en»."
          }
        ]
      },
      {
        "id": "b1-13-practica-transformar",
        "type": "transform",
        "title": "Pon el tema delante",
        "prompt": "Reescribe cada frase empezando por el elemento indicado y retómalo con un pronombre.",
        "items": [
          {
            "source": "Diego compró los limones.",
            "instruction": "Empieza por «Los limones…».",
            "answers": [
              "Los limones los compró Diego."
            ],
            "why": "Directo delante: «los»."
          },
          {
            "source": "Rosa le pagó a la proveedora el sábado.",
            "instruction": "Empieza por «A la proveedora…».",
            "answers": [
              "A la proveedora le pagó Rosa el sábado.",
              "A la proveedora Rosa le pagó el sábado."
            ],
            "why": "Indirecto delante: «le»."
          },
          {
            "source": "Lucía preparó la mesa de postres.",
            "instruction": "Empieza por «La mesa de postres…».",
            "answers": [
              "La mesa de postres la preparó Lucía."
            ],
            "why": "Directo femenino delante: «la»."
          }
        ]
      },
      {
        "id": "b1-13-practica-escritura-guiada",
        "type": "open",
        "title": "Mensajes del equipo",
        "prompt": "Escribe cada mensaje en dos o tres frases.",
        "items": [
          {
            "prompt": "Tu jefa vuelve de vacaciones. Escríbele qué tareas están hechas, con el tema delante.",
            "model": "Las facturas las pagué el lunes y a los clientes nuevos les mandé el presupuesto. El informe lo termino mañana.",
            "checklist": [
              "Pones al menos dos temas delante y los retomas con un pronombre.",
              "Usas «le» o «les» con un complemento indirecto."
            ]
          },
          {
            "prompt": "Explica a un compañero nuevo quién es quién en tu trabajo.",
            "model": "La que lleva las cuentas es Marta. El chico con el que comes hoy es Andrés, quien entró en marzo.",
            "checklist": [
              "Usas «el que» o «la que» sin nombre delante.",
              "Usas una preposición + relativo («con el que», «con quien»)."
            ]
          },
          {
            "prompt": "Escribe lo bueno y lo malo de tu semana y lo que te preocupa.",
            "model": "Lo bueno es que terminé el proyecto a tiempo; lo malo, que no dormí nada. Lo que me preocupa es lo del viaje del lunes.",
            "checklist": [
              "Usas «lo bueno» y «lo malo».",
              "Usas «lo que» y «lo de»."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Has estado unos días a cargo de un proyecto (una fiesta, un viaje en grupo, un evento del trabajo). Escribe un mensaje al equipo para ponerlo al día: qué está hecho, quién se encarga de qué, lo que preocupa y lo bueno de la situación.",
    "context": "El mensaje va al grupo del proyecto. Hay personas nuevas que no conocen a todo el equipo.",
    "steps": [
      "Haz una lista de temas: tareas hechas, personas responsables, un problema y una buena noticia.",
      "Primer párrafo: las tareas hechas, con el tema delante («Las invitaciones las mandé…», «A los proveedores les…»).",
      "Segundo párrafo: quién se encarga de qué (quien, el que, la que), lo que preocupa, lo de algún tema pendiente y lo bueno.",
      "Revisa cada tema que pusiste delante: ¿lleva su pronombre y concuerda? Corrige también «quien» sin preposición en una relativa especificativa."
    ],
    "useLanguage": [
      "el tema delante + lo, la, los, las",
      "a + persona + le, les",
      "quien, el que, la que",
      "con quien, con el que, en la que",
      "lo que, lo de",
      "lo bueno / lo malo / lo importante es que"
    ],
    "model": [
      "Hola a todos. Os pongo al día sobre la cena de fin de curso. El restaurante lo reservé el lunes para treinta personas, y a la dueña le mandé ayer la lista de alergias. Las invitaciones las enviamos Pablo y yo el martes; casi todos han contestado. La música la traerá el hermano de Clara, que tiene un equipo de sonido.",
      "Para los nuevos: quien se encarga del dinero es Marta, la profesora de francés, y la persona con la que tenéis que hablar si queréis llevar a alguien es Pablo. Lo que me preocupa es lo del transporte de vuelta, porque el último autobús sale a las once. Lo bueno es que el restaurante está cerca del centro, así que podemos compartir taxis. Lo importante ahora es que confirméis antes del viernes."
    ],
    "checklist": [
      "Pongo al menos tres temas delante y los retomo con el pronombre correcto.",
      "Identifico a las personas con quien, el que o la que, también después de preposición.",
      "Uso «lo que», «lo de» y «lo + adjetivo».",
      "El mensaje tiene dos párrafos: lo hecho y lo que queda."
    ],
    "words": [
      130,
      180
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas y escúchate: comprueba las pausas cuando pones un tema delante y en las relativas entre comas.",
    "tasks": [
      {
        "title": "Cómo va el proyecto",
        "prompt": "Habla durante dos minutos para poner al día a un compañero sobre un proyecto que conoces bien (un evento, una mudanza, un viaje): qué está hecho, quién se encarga de qué, lo que te preocupa y lo bueno.",
        "prep": [
          "Tres temas delante retomados con un pronombre.",
          "Dos personas identificadas con «el que», «la que» o «quien».",
          "Lo que te preocupa y lo bueno."
        ],
        "seconds": 120,
        "model": "Bueno, te cuento. Los billetes de tren los compré la semana pasada y el hotel lo reservó Laura. A los padres de los niños les mandamos un correo con todo el programa. Quien lleva el botiquín es Andrés, que es enfermero. Lo que me preocupa es lo del tiempo: dicen que va a llover. Lo bueno es que…",
        "selfCheck": [
          "¿He hablado al menos dos minutos?",
          "¿He retomado cada tema con su pronombre?",
          "¿He usado «lo que» y «lo de»?"
        ]
      },
      {
        "title": "Preguntas al volver",
        "prompt": "Un interlocutor vuelve después de unos días fuera y te pregunta por tareas concretas: ¿y lo del presupuesto?, ¿quién habló con el cliente?, ¿las facturas? Responde a cada pregunta con el tema delante y aclara lo que no entienda. Practica con alguien o graba las dos voces.",
        "prep": [
          "Responde con el tema delante: «El presupuesto lo…».",
          "Aclara quién es quién con «la que…» o «el que…»."
        ],
        "seconds": 90,
        "model": "¿Lo del presupuesto? Lo mandé ayer, no te preocupes. Al cliente lo llamó Sara, la que trabaja en ventas, no la de diseño. Y las facturas… las facturas todavía no las he pagado, lo hago mañana.",
        "selfCheck": [
          "¿He respondido a todas sus preguntas?",
          "¿He aclarado quién es quién?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu mensaje de puesta al día y estas tarjetas a la próxima clase con tu profesor.",
    "cards": [
      {
        "move": "Informa",
        "task": "Cuéntale a tu profesor qué deberes hiciste y cuáles no, poniendo cada tarea delante («Los ejercicios los hice el lunes…»).",
        "phrases": [
          "… los hice…",
          "… todavía no lo he…"
        ]
      },
      {
        "move": "Identifica",
        "task": "Describe a tres personas importantes de tu vida a tu profesor sin decir su nombre al principio («La que me enseñó a cocinar…») y que adivine quién es.",
        "phrases": [
          "La que…",
          "El que…",
          "Con quien…"
        ]
      },
      {
        "move": "Valora",
        "task": "Habla con tu profesor de lo bueno, lo malo y lo más difícil de aprender español.",
        "phrases": [
          "Lo bueno es que…",
          "Lo más difícil es…"
        ]
      },
      {
        "move": "Contrasta",
        "task": "Lee en voz alta a tu profesor dos frases que solo cambian por las comas y pídele que diga si se refieren a todos o solo a algunos.",
        "phrases": [
          "Los… que…",
          "Los…, que…,"
        ]
      }
    ],
    "bring": "Tu mensaje de puesta al día revisado y la grabación sobre tu proyecto."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "«Las facturas ___ pagué ayer por la tarde.»",
        "options": [
          "las",
          "les",
          "lo"
        ],
        "answer": 0,
        "why": "Directo femenino plural delante: «las»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase dice que TODOS los alumnos aprobaron?",
        "options": [
          "Los alumnos que estudiaron aprobaron.",
          "Los alumnos, que estudiaron, aprobaron.",
          "Los alumnos quienes estudiaron aprobaron."
        ],
        "answer": 1,
        "why": "Con comas, la relativa es explicativa: habla de todos."
      },
      {
        "type": "listen",
        "q": "Escucha. ¿Qué le preocupa a la persona?",
        "options": [
          "La lluvia.",
          "El precio del alquiler.",
          "El permiso del local."
        ],
        "answer": 2,
        "why": "«Lo que me preocupa es lo del permiso.»",
        "audio": "Lo de la lluvia no me preocupa; lo que me preocupa es lo del permiso del local.",
        "voice": "es-PE-f"
      },
      {
        "type": "gap",
        "q": "A mi abuela ___ regalamos un viaje a Cusco por su cumpleaños.",
        "answers": [
          [
            "le"
          ]
        ],
        "why": "Indirecto singular delante: «le»."
      },
      {
        "type": "gap",
        "q": "El amigo con ___ viajé a Bolivia ahora vive en Lima.",
        "answers": [
          [
            "quien",
            "el que"
          ]
        ],
        "why": "Persona después de preposición: «con quien» o «con el que»."
      },
      {
        "type": "gap",
        "q": "___ mejor del viaje fue la comida.",
        "answers": [
          [
            "Lo",
            "lo"
          ]
        ],
        "why": "«Lo + adjetivo»: un aspecto."
      },
      {
        "type": "order",
        "words": [
          "El",
          "pastel",
          "lo",
          "hizo",
          "mi",
          "tía",
          "para",
          "la",
          "fiesta."
        ],
        "why": "Tema delante retomado con «lo»."
      },
      {
        "type": "error",
        "sentence": "Los platos fríos devolvimos a la cocina.",
        "answers": [
          "Los platos fríos los devolvimos a la cocina."
        ],
        "why": "Directo delante: hace falta «los»."
      },
      {
        "type": "error",
        "sentence": "El que más me gustó del concierto fue el ambiente.",
        "answers": [
          "Lo que más me gustó del concierto fue el ambiente."
        ],
        "why": "Se habla de una idea: «lo que»."
      },
      {
        "type": "open",
        "prompt": "Reformulación: une estas notas en dos frases con el tema delante, un relativo y «lo de». «Pedido de pan: confirmado por mí. Persona responsable de la caja: Lucía (sobrina de Pepe). Problema pendiente: el cartel.»",
        "model": "El pedido de pan lo confirmé yo, y quien se encarga de la caja es Lucía, la sobrina de Pepe. Lo único pendiente es lo del cartel.",
        "checklist": [
          "Pones «el pedido» delante y lo retomas con «lo».",
          "Identificas a la responsable con «quien» o «la que».",
          "Presentas el problema con «lo de» o «lo del»."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Poner delante el tema y retomarlo con lo, la, los, las, le o les.",
      "Destacar con «a mí me», «a ella le» y responder «lo es» o «lo está».",
      "Identificar personas y cosas con quien, el que, la que, también después de preposición, y reconocer «el cual».",
      "Distinguir con comas «solo algunos» de «todos».",
      "Presentar ideas con «lo que», «lo de» y «lo + adjetivo»."
    ],
    "review": [
      "El orden de dos pronombres (se lo, me la) de A2.",
      "Las relativas con antecedente buscado (subjuntivo) de la semana 7.",
      "Los verbos con preposición de la semana 12, que también pasan delante del relativo («la persona con la que cuento»)."
    ]
  },
  "related": [
    {
      "path": "/gramatica/pronombres-personales-y-doble-mencion-tematica",
      "label": "Clase: Pronombres personales y doble mención temática"
    },
    {
      "path": "/gramatica/relativos-quien-el-que-el-cual",
      "label": "Clase: Relativos quien, el que, el cual introductorio"
    },
    {
      "path": "/gramatica/lo-que-y-lo-de-referencias",
      "label": "Clase: Lo que y lo de: referencias a ideas"
    }
  ]
};
