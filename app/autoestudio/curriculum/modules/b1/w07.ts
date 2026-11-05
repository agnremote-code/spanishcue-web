import type { Module } from "../../types";

/**
 * B1 · semana 7 · Autoestudio espejo de G099 (finales: para que, a fin de que) y
 * G100 (relativas: que y quien; antecedente conocido o buscado). Repaso autónomo
 * con una familia que busca casa y escuela al mudarse a Montevideo.
 */
export const b1w07: Module = {
  "id": "b1-07",
  "level": "b1",
  "week": 7,
  "kind": "core",
  "title": "Casa nueva en Montevideo: lo que busco y para qué",
  "subtitle": "Repaso de «para» y «para que» para expresar finalidad, y de las relativas con «que» y «quien», con indicativo o subjuntivo según conozcas o busques lo que describes.",
  "stop": {
    "place": "Montevideo",
    "country": "Uruguay"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.g099",
    "b1.gram.g100",
    "b1.voc.w07-vivienda-alquiler",
    "b1.pron.w07-pausa-relativa",
    "b1.lis.w07-llamada-inmobiliaria",
    "b1.read.w07-foro-recien-llegados",
    "b1.wri.w07-anuncio-busqueda",
    "b1.spk.w07-describir-busqueda",
    "b1.fun.w07-pedir-requisitos",
    "b1.disc.w07-requisito-finalidad"
  ],
  reviewObjectives: ["b1.gram.g097","b1.gram.g098","b1.voc.w06-teatro-estreno","b1.pron.w06-h-muda-enlace","b1.lis.w06-ensayo-general","b1.read.w06-bitacora-compania","b1.wri.w06-mensaje-elenco","b1.spk.w06-arenga-preguntas","b1.fun.w06-valorar-coordinar","b1.disc.w06-secuencia-pasos"],
  prerequisites: ["b1-06"],
  "goal": {
    "canDo": "Al final de esta semana puedes describir la casa, la persona o el servicio que buscas («busco un apartamento que tenga…») y explicar para qué lo necesitas («para que los chicos puedan…»).",
    "steps": [
      "Repasa cuándo usas «para» + infinitivo y cuándo «para que» + subjuntivo.",
      "Repasa las relativas: «que» para identificar, «quien» entre comas para añadir un dato, y el modo según el antecedente.",
      "Escucha la llamada de Valeria a una inmobiliaria de Montevideo.",
      "Lee su consulta en un foro de recién llegados y las respuestas que recibe.",
      "Escribe un anuncio para buscar a alguien, revísalo y graba cómo describes lo que buscas."
    ]
  },
  "theory": {
    "intro": "Esta semana repasas dos clases que se usan juntas cada vez que pides algo: describes lo que buscas con una relativa y explicas para qué lo quieres. Las vemos con una familia mexicana que acaba de mudarse a Montevideo y busca apartamento, escuela y una persona que cuide a los niños.",
    "parts": [
      {
        "heading": "«Para» + infinitivo o «para que» + subjuntivo",
        "body": [
          "La finalidad responde a la pregunta «¿para qué?». Si la persona que hace la acción principal es la misma que la que consigue el objetivo, usas «para» + infinitivo: «Ahorramos para comprar muebles» (nosotros ahorramos, nosotros compramos).",
          "Si el objetivo lo realiza otra persona, necesitas «para que» + subjuntivo: «Ahorramos para que nuestros hijos tengan un cuarto cada uno». Con el verbo principal en presente, futuro o imperativo, el subjuntivo va en presente. La negación va delante del verbo: «para no perder», «para que no se pierdan»."
        ],
        "table": {
          "caption": "¿Uno o dos sujetos?",
          "head": [
            "Sujetos",
            "Estructura",
            "Ejemplo"
          ],
          "rows": [
            [
              "El mismo",
              "para + infinitivo",
              "Llamo a la inmobiliaria para pedir una visita."
            ],
            [
              "Distintos",
              "para que + subjuntivo",
              "Llamo a la inmobiliaria para que me enseñen el piso."
            ],
            [
              "El mismo, negado",
              "para no + infinitivo",
              "Salimos temprano para no perder el ómnibus."
            ],
            [
              "Distintos, negado",
              "para que no + subjuntivo",
              "Cierra la ventana para que no entre el viento."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Busco trabajo para que yo pueda pagar el alquiler.",
            "right": "Busco trabajo para poder pagar el alquiler.",
            "why": "El sujeto es el mismo («yo» busco, «yo» pago): infinitivo."
          },
          {
            "wrong": "Te dejo la llave para que entras cuando quieras.",
            "right": "Te dejo la llave para que entres cuando quieras.",
            "why": "Detrás de «para que» va siempre subjuntivo."
          }
        ],
        "tip": "Haz la prueba: ¿quién hace la segunda acción? Si es la misma persona, borra «que» y pon el infinitivo."
      },
      {
        "heading": "Preguntar «¿para qué?», moverse «a» y hablar en registro formal",
        "body": [
          "La pregunta «¿para qué…?» lleva indicativo, también en preguntas indirectas: «¿Para qué necesitan la garantía?», «No entiendo para qué sirve este papel». La respuesta sí puede llevar «para que» + subjuntivo.",
          "Con verbos de movimiento (ir, venir, salir, bajar, subir, entrar), la finalidad suele ir con «a» + infinitivo: «Vengo a firmar el contrato», «Bajo a abrir la puerta». En cartas, avisos y documentos oficiales aparecen «a fin de (que)», «con el fin de (que)» y «con el objetivo de», con las mismas reglas que «para (que)»."
        ],
        "examples": [
          {
            "es": "¿Para qué quieren ver el apartamento otra vez?",
            "note": "Pregunta: indicativo."
          },
          {
            "es": "Mañana vamos a ver dos casas en el barrio Cordón.",
            "note": "Movimiento + «a» + infinitivo."
          },
          {
            "es": "Le enviamos el contrato a fin de que lo revise con calma.",
            "note": "Registro formal, otro sujeto: subjuntivo."
          },
          {
            "es": "Con el fin de evitar retrasos, la mudanza empezará a las ocho.",
            "note": "Registro formal, mismo sujeto: infinitivo."
          }
        ],
        "mistakes": [
          {
            "wrong": "¿Para qué sirva este formulario?",
            "right": "¿Para qué sirve este formulario?",
            "why": "En la pregunta con «para qué» se usa indicativo."
          }
        ]
      },
      {
        "heading": "«Que» identifica; «, quien…,» añade un dato",
        "body": [
          "«Que» une un nombre (el antecedente) con la información que lo identifica: «la vecina que tiene perro», «el barrio que nos gustó», «la escuela que está junto al parque». Sin esa información, no sabríamos de cuál hablas, y no se ponen comas.",
          "Si la persona ya está identificada, por ejemplo por su nombre, el dato solo se añade, como un paréntesis, entre comas. Ahí puedes usar «que» o «quien» (más formal): «Gonzalo, quien trabaja en la inmobiliaria, nos ayudó mucho». «Quien» nunca va sin comas detrás de un nombre de persona: no se dice «la señora quien vive arriba»."
        ],
        "examples": [
          {
            "es": "La inmobiliaria que nos recomendaste cierra los sábados.",
            "note": "Identifica cuál de todas."
          },
          {
            "es": "Mi cuñada, quien vive en Pocitos, nos prestó un colchón.",
            "note": "Solo tengo una cuñada: el dato se añade."
          },
          {
            "es": "El apartamento que vimos ayer no tiene ascensor.",
            "note": "«Que» es el objeto de «vimos»: no añadas «lo»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Busco a la señora quien alquila la casa.",
            "right": "Busco a la señora que alquila la casa.",
            "why": "Sin comas, para identificar, se usa «que»."
          },
          {
            "wrong": "El sofá que lo compramos es enorme.",
            "right": "El sofá que compramos es enorme.",
            "why": "«Que» ya representa al sofá; no repitas el pronombre."
          }
        ]
      },
      {
        "heading": "Antecedente conocido o buscado: indicativo o subjuntivo",
        "body": [
          "Cuando hablas de algo que existe y conoces, la relativa va en indicativo: «Conozco una escuela que tiene comedor». Cuando describes algo que buscas, necesitas o pides y todavía no sabes si existe o cuál es, la relativa va en subjuntivo: «Buscamos una escuela que tenga comedor».",
          "Lo mismo pasa con la negación y las preguntas: «No hay ningún apartamento que acepte mascotas», «¿Conoces a alguien que arregle persianas?». Fíjate en el artículo: «el / la» suele señalar algo conocido; «un / una / alguien» suele acompañar lo que se busca."
        ],
        "table": {
          "caption": "El mismo dato, dos actitudes",
          "head": [
            "Antecedente",
            "Modo",
            "Ejemplo"
          ],
          "rows": [
            [
              "Conocido, existe",
              "indicativo",
              "Tenemos una niñera que habla inglés."
            ],
            [
              "Buscado, no sé cuál",
              "subjuntivo",
              "Necesitamos una niñera que hable inglés."
            ],
            [
              "Negado, no existe",
              "subjuntivo",
              "No encontramos ninguna niñera que hable inglés."
            ],
            [
              "Pregunta abierta",
              "subjuntivo",
              "¿Hay alguien aquí que hable inglés?"
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Buscamos un piso que tiene balcón, pero no encontramos ninguno.",
            "right": "Buscamos un piso que tenga balcón, pero no encontramos ninguno.",
            "why": "El piso no es conocido: lo están buscando. Subjuntivo."
          }
        ],
        "tip": "Pregúntate: ¿puedo señalarlo con el dedo? Si puedes, indicativo; si todavía lo estás buscando, subjuntivo."
      }
    ]
  },
  "grammar": {
    "intro": "Primero decides entre «para» y «para que»; después, entre «que» y «quien», y entre indicativo y subjuntivo en la relativa.",
    "exercises": [
      {
        "id": "b1-07-gramatica-para-para-que",
        "type": "gap",
        "title": "¿Uno o dos sujetos?",
        "prompt": "Completa con «para» + infinitivo o «para que» + subjuntivo del verbo entre paréntesis.",
        "items": [
          {
            "q": "Pintamos el cuarto de azul ___ los niños ___ más tranquilos. (dormir)",
            "answers": [
              [
                "para que"
              ],
              [
                "duerman"
              ]
            ],
            "why": "Nosotros pintamos; los niños duermen: dos sujetos."
          },
          {
            "q": "Valeria guardó todos los recibos ___ ___ la fianza. (recuperar)",
            "answers": [
              [
                "para"
              ],
              [
                "recuperar"
              ]
            ],
            "why": "Valeria guarda y Valeria recupera: mismo sujeto."
          },
          {
            "q": "Te mando la dirección ___ no te ___ . (perder)",
            "answers": [
              [
                "para que"
              ],
              [
                "pierdas"
              ]
            ],
            "why": "Yo mando, tú no te pierdes: «para que no te pierdas»."
          },
          {
            "q": "Salimos media hora antes ___ no ___ el ómnibus. (perder)",
            "answers": [
              [
                "para"
              ],
              [
                "perder"
              ]
            ],
            "why": "Mismo sujeto: «para no perder»."
          },
          {
            "q": "El dueño dejó el gas abierto ___ los inquilinos ___ cocinar el primer día. (poder)",
            "answers": [
              [
                "para que",
                "a fin de que"
              ],
              [
                "puedan"
              ]
            ],
            "why": "El dueño deja; los inquilinos pueden: dos sujetos."
          }
        ]
      },
      {
        "id": "b1-07-gramatica-que-quien",
        "type": "choice",
        "title": "¿Que o quien?",
        "prompt": "Elige el relativo correcto.",
        "items": [
          {
            "q": "El vecino ___ toca el piano practica todas las noches.",
            "options": [
              "quien",
              "que"
            ],
            "answer": 1,
            "why": "Identifica al vecino, sin comas: «que»."
          },
          {
            "q": "Nuestra casera, ___ es muy amable, nos regaló una planta.",
            "options": [
              "cual",
              "quien",
              "quién"
            ],
            "answer": 1,
            "why": "Dato añadido entre comas sobre una persona: «quien» (o «que»)."
          },
          {
            "q": "La plaza ___ está frente a la escuela tiene juegos para niños.",
            "options": [
              "quien",
              "que"
            ],
            "answer": 1,
            "why": "«Quien» solo se refiere a personas."
          },
          {
            "q": "¿Sabes ___ va a traer el camión de la mudanza?",
            "options": [
              "que",
              "quién"
            ],
            "answer": 1,
            "why": "Pregunta indirecta sobre una persona: «quién», con tilde."
          }
        ]
      },
      {
        "id": "b1-07-gramatica-conocido-buscado",
        "type": "classify",
        "title": "¿Lo conoce o lo busca?",
        "prompt": "Clasifica cada frase según el modo de la relativa.",
        "categories": [
          "Antecedente conocido: indicativo",
          "Antecedente buscado o negado: subjuntivo"
        ],
        "items": [
          {
            "text": "Conozco a un electricista que trabaja los domingos.",
            "cat": 0
          },
          {
            "text": "¿Hay alguna farmacia que abra de noche por aquí?",
            "cat": 1
          },
          {
            "text": "Vivimos en una calle que da a la rambla.",
            "cat": 0
          },
          {
            "text": "Queremos una casa que no esté lejos del trabajo.",
            "cat": 1
          },
          {
            "text": "No hay nadie en la familia que sepa arreglar la caldera.",
            "cat": 1
          },
          {
            "text": "La escuela que elegimos tiene un patio enorme.",
            "cat": 0
          }
        ]
      },
      {
        "id": "b1-07-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error de finalidad o de relativo. Escríbela bien.",
        "items": [
          {
            "sentence": "Necesitamos un garaje que es grande para dos coches.",
            "answers": [
              "Necesitamos un garaje que sea grande para dos coches."
            ],
            "why": "Es algo que buscan, no uno concreto que conocen: subjuntivo."
          },
          {
            "sentence": "Vine a Montevideo para que yo estudie arquitectura.",
            "answers": [
              "Vine a Montevideo para estudiar arquitectura.",
              "Vine a Montevideo a estudiar arquitectura."
            ],
            "why": "Mismo sujeto: «para» + infinitivo."
          },
          {
            "sentence": "La profesora quien da clases a mi hijo es chilena.",
            "answers": [
              "La profesora que da clases a mi hijo es chilena."
            ],
            "why": "Sin comas, el relativo que identifica es «que»."
          },
          {
            "sentence": "Le escribo con el fin de que me envíe usted el contrato, que lo firmé ayer.",
            "answers": [
              "Le escribo con el fin de que me envíe usted el contrato, que firmé ayer."
            ],
            "why": "«Que» ya es el objeto de «firmé»: sobra «lo»."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para buscar casa en Uruguay. Algunas cambian en otros países: te lo indicamos.",
    "groups": [
      {
        "title": "La vivienda",
        "items": [
          {
            "es": "el apartamento",
            "note": "En España, «el piso»; en otros países, «el departamento»."
          },
          {
            "es": "el monoambiente"
          },
          {
            "es": "el dormitorio"
          },
          {
            "es": "luminoso"
          },
          {
            "es": "amueblado"
          },
          {
            "es": "con vista al mar"
          },
          {
            "es": "el ascensor"
          }
        ]
      },
      {
        "title": "El alquiler",
        "items": [
          {
            "es": "la inmobiliaria"
          },
          {
            "es": "el dueño, la dueña"
          },
          {
            "es": "la garantía de alquiler",
            "note": "Documento o seguro que respalda al inquilino."
          },
          {
            "es": "el depósito"
          },
          {
            "es": "los gastos comunes",
            "note": "En Uruguay, lo que se paga por los servicios del edificio. En España, «los gastos de comunidad»."
          },
          {
            "es": "firmar el contrato"
          }
        ]
      },
      {
        "title": "El barrio",
        "items": [
          {
            "es": "la rambla"
          },
          {
            "es": "la parada del ómnibus",
            "note": "En otros países, «la parada del autobús» o «del camión»."
          },
          {
            "es": "la feria vecinal"
          },
          {
            "es": "quedar cerca de"
          },
          {
            "es": "estar bien conectado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-07-vocabulario-definiciones",
        "type": "match",
        "title": "Cada palabra con su definición",
        "prompt": "Une cada palabra con su explicación.",
        "pairs": [
          {
            "left": "el monoambiente",
            "right": "una vivienda de una sola habitación más el baño"
          },
          {
            "left": "la inmobiliaria",
            "right": "la empresa que alquila y vende viviendas"
          },
          {
            "left": "los gastos comunes",
            "right": "lo que pagan los vecinos por el ascensor, la limpieza y la portería"
          },
          {
            "left": "el depósito",
            "right": "el dinero que se devuelve al final si todo está bien"
          },
          {
            "left": "la rambla",
            "right": "el paseo largo junto al mar o al río"
          }
        ],
        "why": "Fíjate en quién paga, quién cobra y dónde está cada cosa."
      },
      {
        "id": "b1-07-vocabulario-anuncio",
        "type": "gap",
        "title": "Un anuncio de alquiler",
        "prompt": "Completa el anuncio con una palabra del banco.",
        "bank": [
          "luminoso",
          "amueblado",
          "ascensor",
          "garantía",
          "dormitorios"
        ],
        "items": [
          {
            "q": "Alquilo apartamento de dos ___ en el barrio Cordón.",
            "answers": [
              [
                "dormitorios"
              ]
            ],
            "why": "Dos habitaciones para dormir."
          },
          {
            "q": "Es muy ___: tiene ventanas grandes que dan al este.",
            "answers": [
              [
                "luminoso"
              ]
            ],
            "why": "Mucha luz natural."
          },
          {
            "q": "Se entrega ___, con camas, mesa y sofá.",
            "answers": [
              [
                "amueblado"
              ]
            ],
            "why": "Con muebles."
          },
          {
            "q": "Está en un cuarto piso, pero el edificio tiene ___.",
            "answers": [
              [
                "ascensor"
              ]
            ],
            "why": "No hace falta subir por la escalera."
          },
          {
            "q": "Se pide ___ de alquiler o seguro equivalente.",
            "answers": [
              [
                "garantía"
              ]
            ],
            "why": "Respaldo que pide el dueño."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas que cambian el sentido: «mi vecina que vive arriba» y «mi vecina, que vive arriba,»",
    "explanation": [
      "Las comas de una relativa que añade un dato se oyen: antes de «que» o «quien» hay una pausa breve, la voz baja un poco durante el dato y vuelve a subir al final, como en un paréntesis. La relativa que identifica va pegada al nombre, sin pausa, en un solo grupo de entonación.",
      "La diferencia importa: «Mis hermanos que viven en Salto vendrán» habla solo de algunos hermanos; «Mis hermanos, que viven en Salto, vendrán» dice que todos viven allí. Al hablar, haz la pausa solo cuando el dato sea un añadido."
    ],
    "examples": [
      {
        "es": "Los inquilinos que tienen perro pagan más.",
        "note": "Sin pausa: solo algunos inquilinos."
      },
      {
        "es": "Los inquilinos, que tienen perro, pagan más.",
        "note": "Con pausas: todos tienen perro."
      }
    ],
    "perceive": {
      "id": "b1-07-pronunciacion-pausas",
      "type": "classify",
      "title": "¿Identifica o añade?",
      "prompt": "Escucha cada frase. ¿Oyes pausas alrededor de la relativa?",
      "categories": [
        "Sin pausas: identifica",
        "Con pausas: añade un dato"
      ],
      "items": [
        {
          "text": "La vecina que vive arriba tiene un gato.",
          "cat": 0,
          "audio": "La vecina que vive arriba tiene un gato.",
          "voice": "es-UY-f"
        },
        {
          "text": "Mi abuela, que vive en Colonia, viene el domingo.",
          "cat": 1,
          "audio": "Mi abuela, que vive en Colonia, viene el domingo.",
          "voice": "es-UY-m"
        },
        {
          "text": "El apartamento que vimos ayer es caro.",
          "cat": 0,
          "audio": "El apartamento que vimos ayer es caro.",
          "voice": "es-MX-f"
        },
        {
          "text": "Gonzalo, quien nos enseñó la casa, es muy simpático.",
          "cat": 1,
          "audio": "Gonzalo, quien nos enseñó la casa, es muy simpático.",
          "voice": "es-AR-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Mi hermano, que vive en Punta del Este, nos presta su coche.",
        "tip": "Pausa breve antes de «que» y después de «Este».",
        "voice": "es-UY-m"
      },
      {
        "text": "El hermano que vive en Punta del Este nos presta su coche.",
        "tip": "Todo seguido: «el hermano que vive en Punta del Este» es un solo bloque.",
        "voice": "es-UY-m"
      },
      {
        "text": "Buscamos una casa que tenga patio, para que los perros puedan correr.",
        "tip": "Sin pausa en la relativa; pausa breve antes de «para que».",
        "voice": "es-MX-f"
      }
    ],
    "spelling": "La pausa se escribe con comas: si dices el dato como un paréntesis, pon una coma antes y otra después."
  },
  "listening": {
    "title": "Una llamada a la inmobiliaria",
    "context": "Valeria, mexicana, acaba de llegar a Montevideo con su pareja y sus dos hijos. Llama a una inmobiliaria del barrio Cordón y habla con Gonzalo, un agente. Se tratan de usted.",
    "speakers": [
      {
        "id": "gon",
        "name": "Gonzalo",
        "voice": "es-UY-m",
        "role": "agente inmobiliario"
      },
      {
        "id": "val",
        "name": "Valeria",
        "voice": "es-MX-f",
        "role": "clienta"
      }
    ],
    "script": [
      {
        "speaker": "gon",
        "text": "Inmobiliaria del Sur, buenas tardes, habla Gonzalo."
      },
      {
        "speaker": "val",
        "text": "Buenas tardes. Lo llamo para preguntar por apartamentos en alquiler. Somos cuatro y buscamos uno que tenga tres dormitorios y que esté cerca de una escuela pública."
      },
      {
        "speaker": "gon",
        "text": "Perfecto. ¿Y para qué necesitan el tercer dormitorio? Se lo pregunto porque con tres el precio sube bastante."
      },
      {
        "speaker": "val",
        "text": "Es para que mi madre pueda quedarse con nosotros cuando venga de México. Pasa tres meses al año aquí."
      },
      {
        "speaker": "gon",
        "text": "Entiendo. Tengo uno que le puede interesar: está en la calle Gaboto, a dos cuadras de una escuela, y tiene un patio pequeño. El problema es que no tiene ascensor."
      },
      {
        "speaker": "val",
        "text": "¿En qué piso está? Mi madre camina bien, pero no queremos nada que esté más arriba de un segundo piso."
      },
      {
        "speaker": "gon",
        "text": "Es planta baja, justamente. Ahora, el dueño, quien vive en el mismo edificio, pide garantía de alquiler. ¿Ustedes ya tienen alguna?"
      },
      {
        "speaker": "val",
        "text": "Todavía no. ¿Hay algún seguro que acepte a extranjeros sin un sueldo uruguayo?"
      },
      {
        "speaker": "gon",
        "text": "Sí, hay una aseguradora que trabaja con nosotros y acepta contratos del exterior. Le mando la información por correo a fin de que la revise con su pareja, y si les interesa, vienen a ver el apartamento el jueves."
      },
      {
        "speaker": "val",
        "text": "Muy bien. Le dejo mi correo para que me escriba hoy mismo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿De qué trata la llamada?",
        "exercise": {
          "id": "b1-07-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Qué quiere Valeria?",
              "options": [
                "Vender su apartamento en México.",
                "Alquilar un apartamento para su familia.",
                "Trabajar en la inmobiliaria."
              ],
              "answer": 1,
              "why": "Pregunta por apartamentos en alquiler para cuatro personas."
            },
            {
              "q": "¿Cómo termina la llamada?",
              "options": [
                "Gonzalo le enviará información y quizá visiten el piso el jueves.",
                "Valeria firma el contrato por teléfono.",
                "Gonzalo dice que no tiene nada para ella."
              ],
              "answer": 0,
              "why": "Él manda la información y propone una visita el jueves."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota los detalles.",
        "exercise": {
          "id": "b1-07-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la llamada.",
          "items": [
            {
              "q": "¿Para qué quieren el tercer dormitorio?",
              "options": [
                "Para trabajar desde casa.",
                "Para alquilarlo a un estudiante.",
                "Para que la madre de Valeria se quede con ellos."
              ],
              "answer": 2,
              "why": "«Es para que mi madre pueda quedarse con nosotros.»"
            },
            {
              "q": "¿Qué inconveniente tiene el apartamento de la calle Gaboto?",
              "options": [
                "No tiene ascensor, aunque está en planta baja.",
                "Está lejos de la escuela.",
                "No tiene patio."
              ],
              "answer": 0,
              "why": "No tiene ascensor, pero al ser planta baja no es un problema."
            },
            {
              "q": "¿Quién es la persona que vive en el mismo edificio?",
              "options": [
                "Gonzalo.",
                "El dueño del apartamento.",
                "La madre de Valeria."
              ],
              "answer": 1,
              "why": "«El dueño, quien vive en el mismo edificio, pide garantía.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-07-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la forma que usan.",
          "items": [
            {
              "q": "Buscamos uno que ___ tres dormitorios.",
              "answers": [
                [
                  "tenga"
                ]
              ],
              "why": "Antecedente buscado: subjuntivo."
            },
            {
              "q": "Es para que mi madre ___ quedarse con nosotros.",
              "answers": [
                [
                  "pueda"
                ]
              ],
              "why": "Otro sujeto: «para que» + subjuntivo."
            },
            {
              "q": "Hay una aseguradora que ___ con nosotros.",
              "answers": [
                [
                  "trabaja"
                ]
              ],
              "why": "Antecedente conocido: indicativo."
            },
            {
              "q": "Le mando la información a fin de que la ___ con su pareja.",
              "answers": [
                [
                  "revise"
                ]
              ],
              "why": "Registro formal, otro sujeto: subjuntivo."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Recién llegados a Montevideo: ¿alguien conoce…?",
    "genre": "Consulta y respuestas en un foro",
    "frame": "Valeria publica una consulta en un foro de extranjeros que viven en Uruguay. Debajo aparecen dos respuestas.",
    "text": [
      "Consulta de Valeria: Hola a todos. Llegamos hace dos semanas desde Guadalajara y seguimos en un hotel. Buscamos un apartamento que tenga tres dormitorios, que no sea muy caro y que quede cerca de una escuela, para que los chicos puedan ir caminando. También necesitamos una persona que cuide a los niños dos tardes por semana, porque mi pareja y yo trabajamos hasta las siete. ¿Alguien conoce a una niñera de confianza que hable un poco de inglés? Nuestro hijo menor todavía mezcla los dos idiomas.",
      "Respuesta de Marta: ¡Bienvenidos! Yo vivo en Parque Rodó, un barrio que está al lado de la rambla y tiene varias escuelas públicas. Les recomiendo la inmobiliaria de la calle Jackson, que es pequeña pero seria. Con el fin de que no pierdan tiempo, pidan siempre fotos del baño y de la cocina antes de ir a una visita.",
      "Respuesta de Andrés: Conozco a una chica que cuida a mis sobrinos desde hace dos años. Se llama Lucía, estudia magisterio y habla inglés bastante bien. Les paso su número por mensaje privado para que la llamen. Y un consejo: no firmen nada hasta que alguien de confianza lea el contrato; hay cláusulas sobre los gastos comunes que confunden a cualquiera."
    ],
    "glossary": [
      {
        "es": "de confianza"
      },
      {
        "es": "magisterio"
      },
      {
        "es": "la cláusula"
      }
    ],
    "tasks": [
      {
        "id": "b1-07-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según el foro.",
        "items": [
          {
            "q": "¿Por qué Valeria quiere vivir cerca de una escuela?",
            "options": [
              "Porque trabaja en una escuela.",
              "Para que sus hijos puedan ir caminando.",
              "Porque el hotel está al lado de una escuela."
            ],
            "answer": 1,
            "why": "«Para que los chicos puedan ir caminando.»"
          },
          {
            "q": "¿Qué recomienda Marta antes de ir a una visita?",
            "options": [
              "Pedir fotos del baño y de la cocina.",
              "Llevar a los niños.",
              "Pagar el depósito."
            ],
            "answer": 0,
            "why": "«Pidan siempre fotos del baño y de la cocina.»"
          },
          {
            "q": "¿Qué advierte Andrés?",
            "options": [
              "Que las niñeras cobran mucho.",
              "Que Parque Rodó es caro.",
              "Que no firmen el contrato sin que lo lea alguien de confianza."
            ],
            "answer": 2,
            "why": "«No firmen nada hasta que alguien de confianza lea el contrato.»"
          }
        ]
      },
      {
        "id": "b1-07-lectura-busca-conoce",
        "type": "classify",
        "title": "¿Lo buscan o lo conocen?",
        "prompt": "Clasifica cada elemento según el foro.",
        "categories": [
          "Valeria lo busca",
          "Alguien ya lo conoce"
        ],
        "items": [
          {
            "text": "un apartamento de tres dormitorios",
            "cat": 0
          },
          {
            "text": "una inmobiliaria pequeña pero seria",
            "cat": 1
          },
          {
            "text": "una niñera que hable inglés",
            "cat": 0
          },
          {
            "text": "una chica que estudia magisterio",
            "cat": 1
          },
          {
            "text": "un barrio junto a la rambla con escuelas públicas",
            "cat": 1
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Compara cómo habla quien busca y quien conoce.",
      "items": [
        {
          "quote": "Buscamos un apartamento que tenga tres dormitorios",
          "note": "Valeria todavía no lo ha encontrado: relativa en subjuntivo."
        },
        {
          "quote": "Conozco a una chica que cuida a mis sobrinos",
          "note": "Andrés habla de una persona real que conoce: indicativo."
        },
        {
          "quote": "para que los chicos puedan ir caminando",
          "note": "Ella busca; los chicos caminan: dos sujetos, «para que» + subjuntivo."
        },
        {
          "quote": "Con el fin de que no pierdan tiempo",
          "note": "Conector de finalidad algo más formal, con las mismas reglas que «para que»."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combinas las dos clases y recuperas lo de las semanas 5 y 6.",
    "exercises": [
      {
        "id": "b1-07-practica-orden",
        "type": "order",
        "title": "Peticiones completas",
        "prompt": "Ordena las palabras para formar peticiones.",
        "items": [
          {
            "words": [
              "Buscamos",
              "a",
              "alguien",
              "que",
              "pueda",
              "ayudarnos",
              "con",
              "la",
              "mudanza."
            ]
          },
          {
            "words": [
              "Les",
              "dejo",
              "la",
              "llave",
              "para",
              "que",
              "rieguen",
              "las",
              "plantas."
            ]
          },
          {
            "words": [
              "¿Conoces",
              "algún",
              "restaurante",
              "que",
              "abra",
              "los",
              "lunes?"
            ]
          },
          {
            "words": [
              "Vengo",
              "a",
              "recoger",
              "las",
              "llaves",
              "del",
              "apartamento."
            ]
          }
        ]
      },
      {
        "id": "b1-07-practica-retrieval",
        "type": "choice",
        "title": "Recuperación: semanas 5 y 6",
        "prompt": "Recuperación de semanas anteriores en el contexto de la mudanza. Elige la forma correcta.",
        "items": [
          {
            "q": "Semana 5 (infinitivo o «que»): «Quiero ___ el contrato antes del viernes.»",
            "options": [
              "que firme",
              "firmar",
              "que firmo"
            ],
            "answer": 1,
            "why": "Mismo sujeto: «quiero firmar»."
          },
          {
            "q": "Semana 5 (infinitivo o «que»): «El dueño quiere que nosotros ___ el depósito ya.»",
            "options": [
              "paguemos",
              "pagar",
              "pagamos"
            ],
            "answer": 0,
            "why": "Dos sujetos: «quiere que paguemos»."
          },
          {
            "q": "Semana 6 (temporales): «En cuanto ___ las llaves, te mando una foto.»",
            "options": [
              "tendré",
              "tengo",
              "tenga"
            ],
            "answer": 2,
            "why": "Acción futura después de «en cuanto»: subjuntivo."
          },
          {
            "q": "Semana 6 (perfecto de subjuntivo): «Qué bien que ya ___ un apartamento.»",
            "options": [
              "hayan encontrado",
              "han encontrado",
              "encuentren"
            ],
            "answer": 0,
            "why": "Reacción a algo ya ocurrido: «hayan encontrado»."
          }
        ]
      },
      {
        "id": "b1-07-practica-transformar",
        "type": "transform",
        "title": "Del conocido al buscado",
        "prompt": "Cambia la frase según la instrucción. Atención al modo de la relativa.",
        "items": [
          {
            "source": "Tengo un vecino que habla portugués.",
            "instruction": "Empieza con «Necesito un vecino…».",
            "answers": [
              "Necesito un vecino que hable portugués."
            ],
            "why": "Ya no es un vecino conocido: subjuntivo."
          },
          {
            "source": "Hay una tienda que vende muebles usados.",
            "instruction": "Empieza con «No hay ninguna tienda…».",
            "answers": [
              "No hay ninguna tienda que venda muebles usados."
            ],
            "why": "Antecedente negado: subjuntivo."
          },
          {
            "source": "Conocemos una escuela que tiene clases de música.",
            "instruction": "Empieza con «Buscamos una escuela…».",
            "answers": [
              "Buscamos una escuela que tenga clases de música."
            ],
            "why": "Antecedente buscado: subjuntivo."
          }
        ]
      },
      {
        "id": "b1-07-practica-escritura-guiada",
        "type": "open",
        "title": "Mensajes con requisito y finalidad",
        "prompt": "Escribe cada mensaje en dos o tres frases.",
        "items": [
          {
            "prompt": "Escribe en el grupo de vecinos: buscas a alguien que te preste una escalera y explica para qué la necesitas.",
            "model": "Hola, vecinos. ¿Hay alguien que tenga una escalera alta y me la pueda prestar el sábado? La necesito para colgar las cortinas del salón. Se la devuelvo el mismo día.",
            "checklist": [
              "La relativa sobre lo que buscas va en subjuntivo.",
              "Explicas la finalidad con «para» + infinitivo."
            ]
          },
          {
            "prompt": "Recomiéndale a un amigo recién llegado a tu ciudad un lugar que tú conoces y dile para qué le va a servir.",
            "model": "Hay un mercado que abre todos los domingos junto al puerto. Ve temprano para que te toque la mejor fruta, y pregunta por Rosa, quien vende los mejores quesos.",
            "checklist": [
              "La relativa sobre el lugar conocido va en indicativo.",
              "Hay una finalidad con «para que» o un dato añadido con «quien» entre comas."
            ]
          },
          {
            "prompt": "Escribe un aviso formal para la puerta del edificio: piden que nadie deje bicicletas en la entrada y explica el motivo.",
            "model": "Se ruega no dejar bicicletas en la entrada a fin de que los vecinos con carritos o sillas de ruedas puedan pasar sin problemas. Hay un espacio que está libre en el sótano.",
            "checklist": [
              "Usa «a fin de que» o «con el fin de que» + subjuntivo.",
              "El tono es formal e impersonal."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un anuncio para el tablón de tu barrio o un grupo en línea: buscas a una persona (para cuidar niños, dar clases, pasear un perro o compartir piso). Describe cómo tiene que ser, explica para qué la necesitas y menciona algo que ya tienes o conoces.",
    "context": "Acabas de mudarte a un barrio nuevo y todavía no conoces a nadie. Tu anuncio tiene que ser claro para que te contesten las personas adecuadas.",
    "steps": [
      "Decide a quién buscas y anota tres requisitos imprescindibles.",
      "Primer párrafo: preséntate y describe a la persona con relativas en subjuntivo («busco a alguien que…»).",
      "Segundo párrafo: explica para qué la necesitas con «para», «para que» y «a fin de que», y añade un dato sobre lo que ya tienes con una relativa en indicativo.",
      "Revisa el anuncio: comprueba el modo de cada relativa y que no uses «para que» con el mismo sujeto."
    ],
    "useLanguage": [
      "busco / necesito a alguien que + subjuntivo",
      "tengo / conozco… que + indicativo",
      "para + infinitivo",
      "para que / a fin de que + subjuntivo",
      ", quien…,"
    ],
    "model": [
      "Hola a todos. Soy Valeria y acabo de mudarme a Parque Rodó con mi familia. Buscamos a una persona que pueda cuidar a nuestros dos hijos los martes y los jueves, de tres a siete. Necesitamos a alguien que tenga experiencia con niños pequeños, que sea paciente y que hable un poco de inglés, porque el menor todavía mezcla los idiomas.",
      "La persona tendría que recogerlos en la escuela, que está a dos cuadras de casa, y acompañarlos a la plaza para que jueguen un rato antes de hacer los deberes. Pagamos por hora y, a fin de que todo quede claro, firmaremos un acuerdo sencillo. Mi pareja, quien trabaja desde casa los viernes, puede hacer una entrevista ese día. Si conoces a alguien que encaje, escríbenos por mensaje privado y cuéntanos un poco sobre esa persona. ¡Gracias!"
    ],
    "checklist": [
      "Las relativas sobre lo que busco van en subjuntivo; las de lo que conozco, en indicativo.",
      "Uso «para» + infinitivo con el mismo sujeto y «para que» + subjuntivo con otro.",
      "Si uso «quien», va entre comas.",
      "El anuncio tiene dos párrafos y termina con una forma de contacto."
    ],
    "words": [
      130,
      180
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas y escúchate. Comprueba el modo de las relativas y marca con una pausa los datos añadidos.",
    "tasks": [
      {
        "title": "Mi casa ideal en una ciudad nueva",
        "prompt": "Imagina que te mudas a otra ciudad. Habla durante dos minutos: describe la casa y el barrio que buscas, explica para qué necesitas cada cosa y compáralo con un lugar que ya conoces.",
        "prep": [
          "Cuatro requisitos con «busco un… que…» o «quiero un barrio donde…».",
          "Tres finalidades con «para» y «para que».",
          "Un lugar real que conoces, con una relativa en indicativo."
        ],
        "seconds": 120,
        "model": "Me voy a mudar a Montevideo y busco un apartamento que tenga balcón y que quede cerca de la rambla, para salir a correr por las mañanas. Necesito un dormitorio extra para que mis amigos puedan visitarme. Ahora vivo en un piso que es muy oscuro, así que quiero uno que sea luminoso…",
        "selfCheck": [
          "¿He hablado al menos dos minutos?",
          "¿He usado subjuntivo para lo que busco e indicativo para lo que conozco?",
          "¿He explicado al menos tres finalidades?"
        ]
      },
      {
        "title": "Negocia con la inmobiliaria",
        "prompt": "Un agente te ofrece un apartamento que no tiene todo lo que pides. Negocia: responde a sus preguntas sobre lo que buscas, aclara qué es imprescindible y qué no, y pregunta si hay otro que cumpla tus requisitos. Practica con un compañero que haga de interlocutor o graba las dos voces.",
        "prep": [
          "Prepara una pregunta con «¿Tiene alguno que…?».",
          "Usa «lo necesito para…» y «es para que…»."
        ],
        "seconds": 90,
        "model": "El balcón no es imprescindible, pero el ascensor sí, porque es para que mi padre pueda subir. ¿Tiene alguno que esté en planta baja o en un edificio con ascensor? Y otra pregunta: ¿para qué piden dos meses de depósito?",
        "selfCheck": [
          "¿He respondido a las preguntas del agente y aclarado lo imprescindible?",
          "¿He usado «¿para qué…?» con indicativo?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu anuncio y estas tarjetas a la próxima clase con tu profesor.",
    "cards": [
      {
        "move": "Pide",
        "task": "Pídele a tu profesor una recomendación con requisitos: un libro, una serie o un lugar que cumpla tres condiciones.",
        "phrases": [
          "Busco una serie que…",
          "¿Conoces algún sitio que…?"
        ]
      },
      {
        "move": "Explica",
        "task": "Explica para qué estudias español con al menos dos «para» y dos «para que».",
        "phrases": [
          "Estudio español para…",
          "También para que mis hijos…"
        ]
      },
      {
        "move": "Describe",
        "task": "Describe a tres personas importantes de tu vida añadiendo un dato entre comas con «quien» o «que».",
        "phrases": [
          "Mi tía, quien vive en…, …"
        ]
      },
      {
        "move": "Compara",
        "task": "Compara cómo se dice «apartamento», «piso» y «departamento» en distintos países y pregunta cuál usa tu profesor.",
        "phrases": [
          "En Uruguay dicen…, pero en España…"
        ]
      }
    ],
    "bring": "Tu anuncio revisado y la grabación de tu casa ideal."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "«Llamo al fontanero ___ arregle la ducha.»",
        "options": [
          "para",
          "para que",
          "a"
        ],
        "answer": 1,
        "why": "Yo llamo; el fontanero arregla: dos sujetos."
      },
      {
        "type": "choice",
        "q": "¿Qué frase habla de algo que la persona busca?",
        "options": [
          "Tengo una bici que es muy rápida.",
          "Vivo en un barrio que tiene mucho verde.",
          "Quiero una bici que sea ligera."
        ],
        "answer": 2,
        "why": "«Quiero una bici que sea…»: antecedente buscado, subjuntivo."
      },
      {
        "type": "listen",
        "q": "Escucha. ¿Qué entiendes?",
        "options": [
          "Tiene una sola profesora y añade que es de Salto.",
          "Tiene varias profesoras y habla de la que es de Salto.",
          "Busca una profesora de Salto."
        ],
        "answer": 0,
        "why": "Pausas y «quien»: el dato se añade sobre una persona ya identificada.",
        "audio": "Mi profesora, quien es de Salto, nos invitó a su casa.",
        "voice": "es-UY-f"
      },
      {
        "type": "gap",
        "q": "Busco un compañero de piso que no ___ . (fumar)",
        "answers": [
          [
            "fume"
          ]
        ],
        "why": "Antecedente buscado: subjuntivo."
      },
      {
        "type": "gap",
        "q": "Hablo despacio para que todos me ___ . (entender)",
        "answers": [
          [
            "entiendan"
          ]
        ],
        "why": "Dos sujetos: «para que» + subjuntivo."
      },
      {
        "type": "gap",
        "q": "Fui a la biblioteca ___ ___ un libro sobre Uruguay. (buscar)",
        "answers": [
          [
            "a",
            "para"
          ],
          [
            "buscar"
          ]
        ],
        "why": "Verbo de movimiento + «a» (o «para») + infinitivo."
      },
      {
        "type": "order",
        "words": [
          "No",
          "hay",
          "nadie",
          "que",
          "conozca",
          "este",
          "barrio",
          "mejor."
        ],
        "why": "Antecedente negado («nadie»): subjuntivo."
      },
      {
        "type": "error",
        "sentence": "Ahorro dinero para que pueda viajar en verano.",
        "answers": [
          "Ahorro dinero para poder viajar en verano."
        ],
        "why": "Mismo sujeto: «para» + infinitivo."
      },
      {
        "type": "error",
        "sentence": "El hombre quien vende fruta en la esquina es mi tío.",
        "answers": [
          "El hombre que vende fruta en la esquina es mi tío."
        ],
        "why": "Relativa que identifica, sin comas: «que»."
      },
      {
        "type": "open",
        "prompt": "Reformulación: une las dos frases en una sola con una relativa y una finalidad. «Necesito un abogado. El abogado tiene que hablar inglés. Mis padres van a entender el contrato.»",
        "model": "Necesito un abogado que hable inglés para que mis padres entiendan el contrato.",
        "checklist": [
          "La relativa va en subjuntivo porque el abogado es buscado.",
          "La finalidad usa «para que» porque cambia el sujeto.",
          "No repites «el abogado»."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Explicar para qué haces algo con «para» + infinitivo o «para que» + subjuntivo según los sujetos.",
      "Preguntar «¿para qué…?» con indicativo y usar «a fin de que» en textos formales.",
      "Identificar con «que» y añadir un dato entre comas con «quien».",
      "Describir lo que buscas con subjuntivo y lo que conoces con indicativo."
    ],
    "review": [
      "La regla del mismo sujeto de la semana 5: también vale para «para» y «para que».",
      "El presente de subjuntivo irregular: tenga, pueda, sepa, sea, haya.",
      "Las comas de las relativas que añaden un dato."
    ]
  },
  "related": [
    {
      "path": "/gramatica/finales-para-que-a-fin-de",
      "label": "Clase: Finales: para que, a fin de que"
    },
    {
      "path": "/la-persona-que-tengo-en-mente",
      "label": "Clase: Relativas con antecedente conocido o buscado"
    }
  ]
};
