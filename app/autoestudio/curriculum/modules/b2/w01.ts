import type { Module } from "../../types";

/**
 * B2 · semana 1 · Autoestudio espejo de G128 (imperfecto de subjuntivo: formas -ra y -se) y
 * G129 (subjuntivo tras verbos de influencia en pasado). Repaso autónomo con la reapertura
 * ficticia de un café familiar de San Telmo. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w01: Module = {
  "id": "b2-01",
  "level": "b2",
  "week": 1,
  "kind": "core",
  "title": "Lo que la abuela quería que conserváramos",
  "subtitle": "Repaso del imperfecto de subjuntivo (-ra y -se) y de las peticiones y deseos contados en pasado",
  "stop": {
    "place": "Buenos Aires",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g128",
    "b2.gram.g129",
    "b2.voc.w01-negocio-familiar",
    "b2.pron.w01-acento-ra",
    "b2.lis.w01-reunion-familiar",
    "b2.read.w01-cronica-reapertura",
    "b2.wri.w01-correo-decisiones",
    "b2.spk.w01-relatar-encargos",
    "b2.fun.w01-transmitir-peticiones",
    "b2.disc.w01-relato-encargos"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Puedo formar el imperfecto de subjuntivo y contar con él lo que otras personas pidieron, quisieron o lamentaron, aclarando si el encargo ya se cumplió.",
    "steps": [
      "Repasa cómo se forma el imperfecto de subjuntivo desde el pretérito y practica las formas irregulares.",
      "Cuenta en pasado peticiones, deseos y emociones ajenas y decide cuándo basta un infinitivo.",
      "Escucha a dos hermanos y lee una crónica sobre la reapertura de un café de San Telmo.",
      "Escribe un correo con los encargos de una reunión familiar, revísalo y defiéndelo oralmente."
    ]
  },
  "theory": {
    "intro": "En clase trabajaste estas formas con tu profesor. Aquí las repasas de otra manera: con la historia de un café de barrio que una familia reabre, tablas para consultar y los errores que más se repiten cuando alguien cuenta en pasado lo que otra persona quería.",
    "parts": [
      {
        "heading": "Una forma que nace del pretérito",
        "body": [
          "Para formar el imperfecto de subjuntivo no necesitas memorizar una lista nueva: parte de la tercera persona plural del pretérito indefinido, quita «-ron» y añade las terminaciones. Si el pretérito es irregular, la irregularidad pasa entera a la nueva forma: tuvieron → tuviera, pidieron → pidiera, durmieron → durmiera, leyeron → leyera.",
          "Existen dos juegos de terminaciones, en -ra y en -se, y significan lo mismo. La forma en -ra es la más frecuente en la conversación de toda América y de España; la forma en -se aparece sobre todo en la escritura y en el habla cuidada. La persona «nosotros» lleva siempre tilde, porque la palabra pasa a ser esdrújula."
        ],
        "table": {
          "caption": "Imperfecto de subjuntivo de «conservar» y de «tener» (pretérito: conservaron, tuvieron)",
          "head": [
            "Persona",
            "conservar (-ra)",
            "conservar (-se)",
            "tener (-ra)"
          ],
          "rows": [
            [
              "yo",
              "conservara",
              "conservase",
              "tuviera"
            ],
            [
              "tú",
              "conservaras",
              "conservases",
              "tuvieras"
            ],
            [
              "él / ella / usted",
              "conservara",
              "conservase",
              "tuviera"
            ],
            [
              "nosotros / nosotras",
              "conserváramos",
              "conservásemos",
              "tuviéramos"
            ],
            [
              "vosotros / vosotras",
              "conservarais",
              "conservaseis",
              "tuvierais"
            ],
            [
              "ellos / ellas / ustedes",
              "conservaran",
              "conservasen",
              "tuvieran"
            ]
          ]
        },
        "examples": [
          {
            "es": "Hicieron → hiciera: «Mi tío esperaba que hiciera las medialunas como antes».",
            "note": "La raíz irregular «hic-» viene del pretérito."
          },
          {
            "es": "Fueron → fuera: sirve para «ser» y para «ir», y el contexto decide.",
            "note": "«Quería que fuera puntual» (ser) / «Quería que fuera al banco» (ir)."
          },
          {
            "es": "Dijeron → dijera, trajeron → trajera: sin «i» después de la «j».",
            "note": "No existe «dijiera»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Nos pidió que no tenieran miedo de cambiar la carta.",
            "right": "Nos pidió que no tuvieran miedo de cambiar la carta.",
            "why": "La raíz sale del pretérito («tuvieron»), no del infinitivo «tener»."
          },
          {
            "wrong": "Quería que nosotros conservaramos las mesas.",
            "right": "Quería que nosotros conserváramos las mesas.",
            "why": "La forma de «nosotros» es esdrújula y lleva tilde."
          }
        ],
        "tip": "Si dudas con un verbo, di primero «ellos» en pretérito en voz alta. Si esa forma te sale bien, el imperfecto de subjuntivo también."
      },
      {
        "heading": "Usos sin «si»: deseos difíciles y cortesía",
        "body": [
          "Antes de contar peticiones ajenas, conviene recordar dos usos breves. Con «ojalá», el imperfecto de subjuntivo presenta un deseo que el hablante ve difícil o imposible en el presente: «ojalá abriera» suena más lejano que «ojalá abra». Y «quisiera» es una forma de cortesía muy frecuente en tiendas, oficinas y correos: suaviza una petición sin cambiar su contenido.",
          "Aunque se llame «imperfecto», en estos usos la forma no habla del pasado: habla de ahora o de después, vistos desde la distancia o desde la cortesía."
        ],
        "examples": [
          {
            "es": "Ojalá el café tenga lugar para todos el sábado.",
            "note": "Deseo posible: presente de subjuntivo."
          },
          {
            "es": "Ojalá la abuela pudiera ver el salón lleno otra vez.",
            "note": "Deseo que el hablante sabe imposible: imperfecto de subjuntivo."
          },
          {
            "es": "Quisiera reservar la mesa del fondo para doce personas.",
            "note": "Cortesía: más suave que «quiero»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Ojalá la abuela podría ver el salón lleno.",
            "right": "Ojalá la abuela pudiera ver el salón lleno.",
            "why": "Detrás de «ojalá» no va el condicional."
          }
        ]
      },
      {
        "heading": "Contar en pasado lo que alguien pidió, quiso o sintió",
        "body": [
          "Ya sabes que los verbos de influencia (pedir, aconsejar, exigir), de deseo (querer, esperar, preferir) y de emoción (alegrar, molestar, preocupar) llevan subjuntivo cuando la otra acción tiene otro sujeto. Lo nuevo es el tiempo: si ese verbo principal está en pretérito, imperfecto o pluscuamperfecto, el verbo que depende de él pasa al imperfecto de subjuntivo.",
          "Si el sujeto es el mismo, no hay «que»: se usa el infinitivo. «Delia quería abrir temprano» (ella quería y ella abría); «Delia quería que abriéramos temprano» (ella quería, nosotros abríamos)."
        ],
        "table": {
          "caption": "Tres familias de verbos con el principal en pasado",
          "head": [
            "Familia",
            "Verbo principal",
            "Ejemplo"
          ],
          "rows": [
            [
              "Influencia",
              "pidió, aconsejó, exigió, recomendaba",
              "La abuela nos pidió que no cambiáramos el nombre."
            ],
            [
              "Deseo",
              "quería, esperaba, prefería",
              "Esperaba que los mozos siguieran llevando chaleco."
            ],
            [
              "Emoción",
              "le alegró, le molestó, le preocupaba",
              "Le molestaba que pusieran la música tan fuerte."
            ],
            [
              "Finalidad",
              "para que, sin que",
              "Dejó las recetas escritas para que nadie las olvidara."
            ]
          ]
        },
        "examples": [
          {
            "es": "Mi hermana prefería quedarse en la cocina.",
            "note": "Mismo sujeto: infinitivo."
          },
          {
            "es": "Mi hermana prefería que yo atendiera las mesas.",
            "note": "Otro sujeto: «que» + imperfecto de subjuntivo."
          }
        ],
        "mistakes": [
          {
            "wrong": "La abuela nos pidió que no cambiemos el nombre del café en 1998.",
            "right": "La abuela nos pidió que no cambiáramos el nombre del café en 1998.",
            "why": "La petición y su contenido quedaron en el pasado: imperfecto de subjuntivo."
          },
          {
            "wrong": "Joaquín quería que él abriera el local solo.",
            "right": "Joaquín quería abrir el local solo.",
            "why": "Si quien quiere y quien abre son la misma persona, va el infinitivo."
          }
        ]
      },
      {
        "heading": "Dejar, hacer, prohibir; «decir» con dos valores; encargos pendientes",
        "body": [
          "Con «dejar», «hacer», «prohibir» y «permitir» hay dos construcciones correctas: con pronombre e infinitivo («no nos dejaba tocar el piano») o con «que» y subjuntivo («no dejaba que tocáramos el piano»). La primera es más frecuente en la conversación.",
          "«Decir», «insistir en» y «escribir» informan o piden. Si informan, llevan indicativo: «insistió en que el piso era de pinotea». Si piden, subjuntivo: «insistió en que lo encerásemos cada mes». Y si alguien pidió algo en el pasado pero el encargo sigue pendiente hoy, también es posible el presente de subjuntivo: «me pidió que la llame el jueves» (el jueves todavía no llegó)."
        ],
        "examples": [
          {
            "es": "Nos escribió que el horno estaba roto.",
            "note": "Informa: indicativo."
          },
          {
            "es": "Nos escribió que llamáramos al técnico.",
            "note": "Pide: subjuntivo."
          },
          {
            "es": "Ramón me pidió ayer que le mande las fotos esta noche.",
            "note": "El encargo sigue pendiente: presente de subjuntivo posible."
          }
        ],
        "mistakes": [
          {
            "wrong": "Insistió en que el piso fuera de pinotea, y lo comprobamos: lo era.",
            "right": "Insistió en que el piso era de pinotea, y lo comprobamos: lo era.",
            "why": "Aquí «insistir» informa sobre un hecho: indicativo."
          }
        ],
        "tip": "Pregúntate: ¿la persona daba un dato o quería que alguien hiciera algo? La respuesta elige el modo."
      }
    ]
  },
  "grammar": {
    "intro": "Primero las formas, después el contexto: decide quién quiere, quién actúa y cuándo.",
    "exercises": [
      {
        "id": "b2-01-g-formas",
        "type": "gap",
        "prompt": "Escribe el imperfecto de subjuntivo en -ra del verbo entre paréntesis. Piensa primero en «ellos» del pretérito.",
        "items": [
          {
            "q": "El encargado quería que los mozos ___ (servir) el cortado en vaso de vidrio.",
            "answers": [
              [
                "sirvieran"
              ]
            ],
            "why": "sirvieron → sirvieran: la «i» del pretérito se mantiene."
          },
          {
            "q": "Nos pidió que ___ (traer) las sillas viejas del depósito.",
            "answers": [
              [
                "trajéramos"
              ]
            ],
            "why": "trajeron → trajéramos, con tilde en «nosotros»."
          },
          {
            "q": "Le preocupaba que la clientela no ___ (saber) que habíamos reabierto.",
            "answers": [
              [
                "supiera"
              ]
            ],
            "why": "supieron → supiera."
          },
          {
            "q": "Esperaban que el pianista ___ (poder) venir los viernes.",
            "answers": [
              [
                "pudiera"
              ]
            ],
            "why": "pudieron → pudiera."
          },
          {
            "q": "Mi madre prefería que ustedes ___ (dormir) en la casa de arriba.",
            "answers": [
              [
                "durmieran"
              ]
            ],
            "why": "durmieron → durmieran: el cambio o → u viene del pretérito."
          },
          {
            "q": "Era necesario que alguien ___ (leer) el contrato con calma.",
            "answers": [
              [
                "leyera"
              ]
            ],
            "why": "leyeron → leyera: la «y» se conserva."
          }
        ]
      },
      {
        "id": "b2-01-g-contexto",
        "type": "context",
        "prompt": "Lee la situación y elige la frase que la cuenta bien.",
        "items": [
          {
            "context": "En 2015, Delia, la dueña, les dijo a sus nietos: «Abran a las siete, como siempre».",
            "q": "¿Cómo se cuenta hoy?",
            "options": [
              "Delia les dijo que abrían a las siete.",
              "Delia les dijo que abrieran a las siete.",
              "Delia les dijo que abrirían a las siete."
            ],
            "answer": 1,
            "why": "Es una petición en el pasado: «decir que» + imperfecto de subjuntivo."
          },
          {
            "context": "Joaquín recuerda: de chico, él deseaba aprender a hacer café de filtro.",
            "q": "¿Qué frase es correcta?",
            "options": [
              "Joaquín quería que aprendiera a hacer café de filtro.",
              "Joaquín quería que él aprendía a hacer café de filtro.",
              "Joaquín quería aprender a hacer café de filtro."
            ],
            "answer": 2,
            "why": "Mismo sujeto: infinitivo, sin «que»."
          },
          {
            "context": "El lunes, Ramón le pidió a Martina las fotos de la reforma. Hoy es martes y todavía no se las mandó.",
            "q": "¿Qué opción es posible porque el encargo sigue pendiente?",
            "options": [
              "Ramón me pidió que le mande las fotos.",
              "Ramón me pidió que le mandaba las fotos.",
              "Ramón me pidió que le mandaría las fotos."
            ],
            "answer": 0,
            "why": "Con un encargo todavía vigente, el presente de subjuntivo es posible; el imperfecto («mandara») también lo sería."
          },
          {
            "context": "La vecina contó que el edificio tenía cien años, y era verdad.",
            "q": "¿Qué versión respeta que es una información?",
            "options": [
              "Insistió en que el edificio tuviera cien años.",
              "Insistió en que el edificio tenía cien años.",
              "Insistió en tener el edificio cien años."
            ],
            "answer": 1,
            "why": "Informa sobre un hecho: indicativo."
          }
        ]
      },
      {
        "id": "b2-01-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida en estilo indirecto, en pasado. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: Delia, en 2010, a sus hijos: «No vendan el piano aunque nadie lo toque». Empieza con «Delia les pidió…».",
            "model": "Delia les pidió a sus hijos que no vendieran el piano aunque nadie lo tocara.",
            "checklist": [
              "Conservo quién pide, quién hace la acción y cuándo ocurre.",
              "Uso imperfecto de subjuntivo en los dos verbos que dependen de la petición.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: Ramón, el mozo más antiguo, el año pasado: «Me alegra mucho que ustedes sigan con el café». Empieza con «A Ramón le alegró…».",
            "model": "A Ramón le alegró mucho que siguiéramos con el café.",
            "checklist": [
              "Conservo quién pide, quién hace la acción y cuándo ocurre.",
              "Cambio «ustedes» por «nosotros» porque ahora lo cuento yo.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: La inspectora, en marzo: «Tienen que instalar una salida de emergencia antes de abrir». Usa «exigir» o «pedir».",
            "model": "En marzo la inspectora nos exigió que instaláramos una salida de emergencia antes de abrir.",
            "checklist": [
              "Conservo quién pide, quién hace la acción y cuándo ocurre.",
              "Transformo la obligación en un verbo de influencia + que + subjuntivo.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: Martina, hace un mes: «Quiero ocuparme yo de la contabilidad». Cuéntalo y decide si hace falta «que».",
            "model": "Hace un mes Martina dijo que quería ocuparse ella de la contabilidad.",
            "checklist": [
              "Mantengo el infinitivo porque quien quiere y quien se ocupa son la misma persona.",
              "Ajusto el pronombre: «ocuparme» pasa a «ocuparse».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de un negocio que pasa de una generación a otra. Fíjate en las combinaciones: se aprenden mejor en bloque.",
    "groups": [
      {
        "title": "Heredar y reformar un local",
        "items": [
          {
            "es": "hacerse cargo del local",
            "note": "asumir la responsabilidad del negocio"
          },
          {
            "es": "conservar el mobiliario original",
            "note": "no cambiar mesas, sillas ni barra"
          },
          {
            "es": "reformar sin perder la esencia",
            "note": "cambiar lo necesario y mantener el carácter"
          },
          {
            "es": "la clientela de toda la vida",
            "note": "las personas que vienen desde hace años"
          },
          {
            "es": "el mozo",
            "note": "en Argentina y Uruguay, camarero de bar o restaurante"
          }
        ]
      },
      {
        "title": "Decidir en familia",
        "items": [
          {
            "es": "dar el visto bueno",
            "note": "aprobar una decisión"
          },
          {
            "es": "dejar algo por escrito",
            "note": "registrar un deseo o un acuerdo"
          },
          {
            "es": "cumplir un encargo",
            "note": "hacer lo que otra persona pidió"
          },
          {
            "es": "ponerse de acuerdo",
            "note": "llegar a una decisión común"
          },
          {
            "es": "tener la última palabra",
            "note": "decidir cuando hay desacuerdo"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-01-v-relacion",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación del café en la que encaja mejor.",
        "pairs": [
          {
            "left": "hacerse cargo del local",
            "right": "Martina firma el alquiler y organiza los turnos."
          },
          {
            "left": "conservar el mobiliario original",
            "right": "Las mesas de mármol de 1952 siguen en el salón."
          },
          {
            "left": "dar el visto bueno",
            "right": "La familia aprueba el nuevo menú del mediodía."
          },
          {
            "left": "cumplir un encargo",
            "right": "Joaquín encera el piso como pedía la abuela."
          },
          {
            "left": "tener la última palabra",
            "right": "Si los hermanos no coinciden, decide la madre."
          },
          {
            "left": "la clientela de toda la vida",
            "right": "Los jubilados que juegan al ajedrez desde 1980."
          }
        ],
        "why": "Cada expresión describe una acción o un grupo concreto del caso."
      }
    ]
  },
  "pronunciation": {
    "focus": "Imperfecto de subjuntivo y futuro: «conservara» no suena como «conservará».",
    "explanation": [
      "En las formas en -ra, la sílaba fuerte es la que va antes de «-ra»: con-ser-VA-ra, tu-VIE-ra. En el futuro, la fuerza cae al final: con-ser-va-RÁ. Si cambias el acento, cambias el tiempo y el sentido de la frase.",
      "En «nosotros» la fuerza se queda en la misma sílaba y por eso la palabra se vuelve esdrújula: con-ser-VÁ-ra-mos, tu-VIÉ-ra-mos. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "Quería que Martina conservara la barra.",
        "note": "con-ser-VA-ra: imperfecto de subjuntivo."
      },
      {
        "es": "Martina conservará la barra.",
        "note": "con-ser-va-RÁ: futuro."
      },
      {
        "es": "Nos pidió que tuviéramos paciencia.",
        "note": "tu-VIÉ-ra-mos: esdrújula."
      }
    ],
    "perceive": {
      "id": "b2-01-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y elige la forma que oyes. Concéntrate en dónde cae la fuerza.",
      "items": [
        {
          "q": "¿Qué forma oyes en la frase sobre el horno?",
          "options": [
            "arreglará",
            "arreglara"
          ],
          "answer": 1,
          "audio": "Ella esperaba que el técnico arreglara el horno antes del sábado.",
          "voice": "es-AR-f",
          "why": "Fuerza en «gla»: imperfecto de subjuntivo tras «esperaba que»."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre el cartel?",
          "options": [
            "pintará",
            "pintara"
          ],
          "answer": 0,
          "audio": "Mañana Joaquín pintará el cartel de la entrada.",
          "voice": "es-AR-m",
          "why": "Fuerza al final: futuro, con «mañana»."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre las recetas?",
          "options": [
            "copiará",
            "copiara",
            "copiáramos"
          ],
          "answer": 2,
          "audio": "La abuela quería que copiáramos las recetas a mano.",
          "voice": "es-AR-f",
          "why": "Forma de «nosotros», esdrújula: co-PIÁ-ra-mos."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre la vidriera?",
          "options": [
            "limpiara",
            "limpiará"
          ],
          "answer": 1,
          "audio": "El encargado limpiará la vidriera antes de abrir.",
          "voice": "es-AR-m",
          "why": "Fuerza al final: futuro."
        }
      ]
    },
    "produce": [
      {
        "text": "Nos pidió que conserváramos el nombre del café.",
        "tip": "Marca la fuerza en «vá» y no la pierdas al final de la frase.",
        "voice": "es-AR-f"
      },
      {
        "text": "Quería que los mozos siguieran llevando chaleco.",
        "tip": "si-GUIE-ran: la fuerza va antes de «-ran».",
        "voice": "es-AR-m"
      },
      {
        "text": "Ojalá la abuela pudiera ver el salón lleno.",
        "tip": "Une «ojalá la» sin pausa y destaca «pu-DIE-ra».",
        "voice": "es-AR-f"
      },
      {
        "text": "Quisiera reservar la mesa del fondo, por favor.",
        "tip": "Tono amable: la voz baja suavemente al final.",
        "voice": "es-AR-m"
      }
    ]
  },
  "listening": {
    "title": "La sobremesa de los hermanos Ferraro",
    "context": "Martina y Joaquín Ferraro van a reabrir el café de su abuela Delia en San Telmo. Después de cenar repasan qué les pidió ella y qué falta hacer. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "ma",
        "name": "Martina",
        "voice": "es-AR-f",
        "role": "Se hace cargo de la gestión del café"
      },
      {
        "id": "jo",
        "name": "Joaquín",
        "voice": "es-AR-m",
        "role": "Se ocupa de la cocina y de la reforma"
      }
    ],
    "script": [
      {
        "speaker": "ma",
        "text": "Bueno, hagamos la lista antes de que se nos olvide algo. La abuela nos pidió tres cosas concretas: que no cambiáramos el nombre, que conserváramos las mesas de mármol y que siguiéramos abriendo a las siete, aunque a esa hora vengan cuatro personas."
      },
      {
        "speaker": "jo",
        "text": "Lo del nombre y las mesas ya está. Lo de las siete me cuesta más. Ella quería que el café fuera el primer lugar iluminado de la cuadra, eso lo entiendo, pero también me dijo que no me matara trabajando. Las dos cosas a la vez no son fáciles."
      },
      {
        "speaker": "ma",
        "text": "Por eso propongo turnos. Además, recuerda lo que le molestaba: que la gente esperara de pie. Le daba mucha vergüenza que alguien se fuera sin sentarse. Si contratamos a una persona más para la mañana, cumplimos las dos cosas."
      },
      {
        "speaker": "jo",
        "text": "Está bien. Otra cosa: Ramón me pidió el lunes que le mande el menú nuevo antes del viernes, porque quiere opinar. Todavía no se lo mandé. Y me insistió en que el piano estaba afinado, que lo había revisado él mismo."
      },
      {
        "speaker": "ma",
        "text": "¿Afinado? La abuela no dejaba que nadie lo tocara sin permiso, y ahora resulta que Ramón lo revisa solo. En fin. Ojalá ella pudiera ver cómo quedó el salón. Le gustaría ver que la lámpara es la misma de su época."
      },
      {
        "speaker": "jo",
        "text": "Seguro. Mándale tú el menú a Ramón esta noche, que a ti te escucha más. Y pídele que nos diga lo que piensa sin vueltas: la abuela siempre quería que las cosas se hablaran de frente."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿De qué hablan y con qué intención?",
        "exercise": {
          "id": "b2-01-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Qué hacen Martina y Joaquín?",
              "options": [
                "Discuten si deben vender el café de la abuela.",
                "Revisan los encargos de su abuela y organizan lo pendiente.",
                "Preparan un discurso para la reapertura."
              ],
              "answer": 1,
              "why": "Hacen una lista de lo que ella pidió y deciden cómo cumplirlo."
            },
            {
              "q": "¿Cuál es el principal problema práctico?",
              "options": [
                "Abrir a las siete sin agotar a Joaquín.",
                "Encontrar mesas de mármol iguales.",
                "Cambiar el nombre del café."
              ],
              "answer": 0,
              "why": "Joaquín dice que abrir temprano y no matarse trabajando no es fácil a la vez."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-01-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué le daba vergüenza a la abuela?",
              "options": [
                "Que el piano estuviera desafinado.",
                "Que los mozos llevaran chaleco.",
                "Que un cliente se fuera sin sentarse."
              ],
              "answer": 2,
              "why": "Martina recuerda que le molestaba que la gente esperara de pie."
            },
            {
              "q": "¿Qué encargo de Ramón sigue pendiente?",
              "options": [
                "Enviarle el menú nuevo antes del viernes.",
                "Afinar el piano.",
                "Contratar a otra persona."
              ],
              "answer": 0,
              "why": "Joaquín dice que todavía no se lo mandó; por eso usa «que le mande»."
            },
            {
              "q": "¿Qué solución propone Martina para abrir temprano?",
              "options": [
                "Abrir a las nueve.",
                "Organizar turnos y contratar a alguien para la mañana.",
                "Pedir ayuda a Ramón."
              ],
              "answer": 1,
              "why": "Propone turnos y una persona más por la mañana."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-01-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento del diálogo según lo que hace el verbo «que…».",
          "categories": [
            "Petición o deseo ya situado en el pasado",
            "Encargo todavía pendiente",
            "Información, no petición"
          ],
          "items": [
            {
              "text": "nos pidió que no cambiáramos el nombre",
              "cat": 0,
              "why": "Petición de la abuela, ya cumplida: imperfecto."
            },
            {
              "text": "me pidió el lunes que le mande el menú",
              "cat": 1,
              "why": "El viernes todavía no llegó: presente de subjuntivo."
            },
            {
              "text": "me insistió en que el piano estaba afinado",
              "cat": 2,
              "why": "Ramón da un dato: indicativo."
            },
            {
              "text": "le molestaba que la gente esperara de pie",
              "cat": 0,
              "why": "Emoción en pasado: imperfecto de subjuntivo."
            },
            {
              "text": "no dejaba que nadie lo tocara",
              "cat": 0,
              "why": "«Dejar que» + imperfecto de subjuntivo."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El Café Delia vuelve a encender las luces",
    "genre": "Crónica de una revista de barrio",
    "frame": "Texto original de SpanishCue escrito como crónica de la revista ficticia «Vecinos de San Telmo». Las personas y el café son inventados.",
    "text": [
      "Durante sesenta años, la esquina de Defensa y Carlos Calvo tuvo un horario fijo: a las siete en punto, Delia Ferraro levantaba la persiana y encendía las lámparas del Café Delia. Cuando cerró, hace dos años, muchos pensamos que la esquina se convertiría en otra tienda de recuerdos. Nos equivocamos. El sábado, sus nietos Martina y Joaquín reabrieron el local, y lo hicieron con una lista de encargos que la propia Delia les dejó por escrito.",
      "La lista no era larga, pero sí precisa. Delia pidió que no cambiaran el nombre, que conservaran las mesas de mármol y que los mozos siguieran llamando a los clientes por su nombre. También quería que la carta tuviera siempre un plato barato, «para que nadie se quedara afuera por no tener plata». Martina cuenta que al principio esa condición le pareció imposible con los precios actuales: «Le dije a mi hermano que necesitábamos ganar dinero, y él me recordó que la abuela nunca había querido hacerse rica con el café».",
      "No todo fue obediencia. Joaquín reconoce que discutieron mucho por la música. A Delia le molestaba que los bares pusieran canciones a todo volumen, y prohibía que alguien tocara el piano sin su permiso. Los hermanos decidieron que el piano se tocaría solo los viernes, con un pianista invitado, y que el resto de la semana el ruido sería el de siempre: tazas, diarios y conversaciones. «No sé si ella estaría de acuerdo con todo», admite Joaquín, «pero creo que le alegraría que la gente volviera a quedarse horas».",
      "Desde esta revista nos permitimos una opinión. Una lista de encargos puede convertirse en una jaula si se lee al pie de la letra, y el Café Delia lo ha evitado. Los nietos no copiaron a su abuela: le preguntaron, a través de sus papeles, qué quería que sobreviviera. Ojalá más negocios del barrio tuvieran esa suerte, o esa paciencia. Por ahora, la persiana vuelve a subir a las siete."
    ],
    "glossary": [
      {
        "es": "la persiana",
        "note": "cierre metálico de un local"
      },
      {
        "es": "la plata",
        "note": "en el Río de la Plata y otras zonas, «dinero» en registro coloquial"
      },
      {
        "es": "al pie de la letra",
        "note": "de manera literal, sin interpretar"
      }
    ],
    "tasks": [
      {
        "id": "b2-01-r-comprension",
        "type": "choice",
        "prompt": "Responde según la crónica.",
        "items": [
          {
            "q": "¿Por qué quería Delia un plato barato en la carta?",
            "options": [
              "Para atraer turistas.",
              "Para que nadie quedara excluido por falta de dinero.",
              "Para competir con el bar de enfrente."
            ],
            "answer": 1,
            "why": "La cita dice «para que nadie se quedara afuera por no tener plata»."
          },
          {
            "q": "¿Qué decisión tomaron los hermanos sobre el piano?",
            "options": [
              "Venderlo para pagar la reforma.",
              "Prohibir que nadie lo tocara.",
              "Que se toque solo los viernes con un pianista invitado."
            ],
            "answer": 2,
            "why": "El tercer párrafo lo explica."
          },
          {
            "q": "¿Qué opina la revista?",
            "options": [
              "Que los nietos interpretaron los encargos sin convertirlos en una jaula.",
              "Que los nietos traicionaron a su abuela.",
              "Que los encargos de Delia eran imposibles de cumplir."
            ],
            "answer": 0,
            "why": "El último párrafo valora que no leyeran la lista al pie de la letra."
          }
        ]
      },
      {
        "id": "b2-01-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "Explica en 60–80 palabras qué encargo de Delia cumplieron los nietos al pie de la letra y cuál adaptaron. Usa al menos dos verbos en imperfecto de subjuntivo y cita una frase del texto.",
            "model": "Delia pidió que no cambiaran el nombre y que conservaran las mesas de mármol, y los nietos lo cumplieron exactamente. En cambio, adaptaron lo del piano: ella prohibía que alguien lo tocara sin permiso, y ellos decidieron que sonara los viernes con un invitado. Joaquín lo reconoce: «No sé si ella estaría de acuerdo con todo». Me parece una adaptación respetuosa, porque mantiene su deseo de que el café fuera tranquilo.",
            "checklist": [
              "Distingo un encargo cumplido y uno adaptado.",
              "Cito una frase literal del texto.",
              "Separo lo que dice el texto de mi valoración."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la crónica atribuye cada deseo a su autor.",
      "items": [
        {
          "quote": "Delia pidió que no cambiaran el nombre, que conservaran las mesas de mármol",
          "note": "Un solo «pidió» introduce varias peticiones; cada una repite «que» + imperfecto de subjuntivo."
        },
        {
          "quote": "él me recordó que la abuela nunca había querido hacerse rica",
          "note": "«Recordar» informa aquí sobre un hecho: indicativo. Compáralo con «me recordó que la llamara»."
        },
        {
          "quote": "Ojalá más negocios del barrio tuvieran esa suerte",
          "note": "Deseo que la autora ve difícil: imperfecto de subjuntivo con valor de presente."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: forma bien el verbo y decide si la frase cuenta un dato, una petición o un deseo.",
    "exercises": [
      {
        "id": "b2-01-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir lo que contó Martina.",
        "items": [
          {
            "words": [
              "La",
              "abuela",
              "no",
              "dejaba",
              "que",
              "usáramos",
              "la",
              "cafetera",
              "nueva."
            ],
            "why": "«Dejar que» + imperfecto de subjuntivo."
          },
          {
            "words": [
              "Nos",
              "hizo",
              "prometer",
              "que",
              "abriríamos",
              "el",
              "café",
              "en",
              "invierno."
            ],
            "why": "«Hacer» + infinitivo, sin «que» detrás de «hizo»."
          },
          {
            "words": [
              "Le",
              "sorprendió",
              "que",
              "vinieran",
              "tantos",
              "vecinos",
              "a",
              "la",
              "reapertura."
            ],
            "why": "Emoción en pasado + imperfecto de subjuntivo."
          }
        ]
      },
      {
        "id": "b2-01-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Mi tía nos aconsejó que pidiéramos un préstamo y que lo devolvamos en dos años.",
            "answers": [
              "Mi tía nos aconsejó que pidiéramos un préstamo y que lo devolviéramos en dos años."
            ],
            "why": "Los dos verbos dependen de «aconsejó»: los dos en imperfecto."
          },
          {
            "sentence": "El arquitecto quería que dijiéramos qué paredes podía tirar.",
            "answers": [
              "El arquitecto quería que dijéramos qué paredes podía tirar."
            ],
            "why": "dijeron → dijéramos, sin «i»."
          },
          {
            "sentence": "A la abuela le gustaba que los clientes se quedarían a charlar.",
            "answers": [
              "A la abuela le gustaba que los clientes se quedaran a charlar.",
              "A la abuela le gustaba que los clientes se quedasen a charlar."
            ],
            "why": "Después de un verbo de emoción no va el condicional."
          },
          {
            "sentence": "Ojalá tendríamos más espacio para la cocina.",
            "answers": [
              "Ojalá tuviéramos más espacio para la cocina.",
              "Ojalá tuviésemos más espacio para la cocina."
            ],
            "why": "«Ojalá» + imperfecto de subjuntivo para un deseo difícil."
          }
        ]
      },
      {
        "id": "b2-01-x-modo",
        "type": "classify",
        "prompt": "¿Informa o pide? Clasifica cada frase con «decir», «escribir» o «insistir».",
        "categories": [
          "Informa: indicativo",
          "Pide: subjuntivo"
        ],
        "items": [
          {
            "text": "Ramón dijo que el pianista llegaba a las nueve.",
            "cat": 0,
            "why": "Da un horario."
          },
          {
            "text": "Ramón dijo que el pianista llegara a las nueve.",
            "cat": 1,
            "why": "Da una instrucción."
          },
          {
            "text": "La vecina escribió que el ruido la despertaba.",
            "cat": 0,
            "why": "Describe un hecho."
          },
          {
            "text": "La vecina escribió que bajáramos el volumen.",
            "cat": 1,
            "why": "Pide una acción."
          },
          {
            "text": "Martina insistió en que contratáramos a alguien.",
            "cat": 1,
            "why": "Insiste para que se haga algo."
          },
          {
            "text": "Joaquín insistió en que ya había pagado la luz.",
            "cat": 0,
            "why": "Afirma un dato."
          }
        ]
      },
      {
        "id": "b2-01-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Cuenta en dos frases tres cosas que una persona mayor de tu familia quería que tú hicieras cuando eras chico o chica.",
            "model": "Mi abuelo quería que aprendiera a nadar y que leyera el diario todos los días. Además, le preocupaba que pasara demasiado tiempo solo.",
            "checklist": [
              "Uso al menos dos verbos distintos en imperfecto de subjuntivo.",
              "Incluyo un verbo de emoción."
            ]
          },
          {
            "prompt": "Cuenta un encargo que alguien te hizo la semana pasada y que todavía no cumpliste. Explica por qué usas presente o imperfecto.",
            "model": "Mi jefa me pidió el jueves que le envíe el informe antes del lunes. Uso el presente porque el lunes todavía no llegó; «que le enviara» también sería correcto.",
            "checklist": [
              "Sitúo la petición en el pasado.",
              "Justifico el tiempo según si el encargo sigue pendiente."
            ]
          },
          {
            "prompt": "Escribe un deseo difícil con «ojalá» y una petición cortés con «quisiera» relacionados con un lugar que te importa.",
            "model": "Ojalá la librería de mi calle no tuviera que cerrar en enero. Quisiera hablar con el dueño para ofrecerle ayuda con las redes.",
            "checklist": [
              "Uso «ojalá» + imperfecto de subjuntivo.",
              "Uso «quisiera» como fórmula de cortesía."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Tu prima vive en Madrid y no pudo venir a la reunión en la que tu familia decidió reabrir el café de la abuela. Escríbele un correo (200–260 palabras): cuéntale qué había pedido la abuela, qué quería cada persona en la reunión, qué se decidió y qué encargo queda pendiente para ella.",
    "context": "El correo es familiar pero claro: tu prima tiene que poder opinar con la información que le das. Puedes usar los datos del café Delia o inventar tu propio negocio familiar.",
    "steps": [
      "Anota tres encargos de la abuela y dos deseos de personas de la reunión, con quién pidió qué.",
      "Ordena el correo: saludo y motivo, lo que pidió la abuela, la reunión, el encargo para tu prima y despedida.",
      "Escribe usando «pidió que», «quería que», «le molestaba que», «para que» y al menos un infinitivo con el mismo sujeto.",
      "Revisa cada imperfecto de subjuntivo (raíz del pretérito, tilde en «nosotros») y corrige los verbos que informan y no piden."
    ],
    "useLanguage": [
      "nos pidió que + imperfecto de subjuntivo",
      "quería / esperaba / prefería que…",
      "le molestaba / le alegró que…",
      "para que + imperfecto de subjuntivo",
      "no nos dejaba + infinitivo / no dejaba que…",
      "me pidió que te pregunte… (encargo pendiente)"
    ],
    "model": [
      "Querida Sofía: te escribo para contarte cómo fue la reunión del domingo, porque sé que querías estar y no pudiste. Al final decidimos reabrir el café, pero antes leímos la carta que la abuela dejó en el cajón de la caja. Nos pidió tres cosas: que no cambiáramos el nombre, que conserváramos las mesas de mármol y que siempre hubiera en la carta un plato barato para que nadie se quedara sin comer.",
      "La reunión no fue fácil. Mamá quería vender el local y quedarse tranquila; le preocupaba que Joaquín y yo trabajáramos demasiado. Joaquín, en cambio, quería encargarse de la cocina y esperaba que yo llevara las cuentas. Tío Raúl insistió en que el alquiler era muy alto, y tenía razón, así que le pedimos que hablara con el dueño del edificio antes de firmar nada.",
      "Al final llegamos a un acuerdo: abriremos en marzo, con horario reducido el primer mes. Ahora viene tu parte: Joaquín me pidió que te pregunte si puedes diseñar el cartel nuevo, porque nadie dibuja como tú. Le gustaría que mantuvieras la letra antigua de la abuela y que me mandaras un boceto antes de fin de mes, para que lo veamos todos juntos.",
      "Contéstame cuando puedas y dime qué te parece todo. Ojalá pudieras venir para la inauguración. Un abrazo grande, Martina."
    ],
    "checklist": [
      "Atribuyo cada petición y cada deseo a la persona correcta.",
      "Uso imperfecto de subjuntivo cuando el verbo principal está en pasado y el sujeto cambia.",
      "Uso indicativo cuando alguien informa de un dato.",
      "Explico con claridad qué encargo queda pendiente.",
      "El registro es cercano pero ordenado, con párrafos claros."
    ],
    "words": [
      200,
      260
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "Lo que esperaban de mí",
        "prompt": "Habla durante unos dos minutos de una persona que influyó en ti (familiar, docente, entrenador). Cuenta qué te pedía, qué quería que hicieras, qué le molestaba o le alegraba y si cumpliste o no sus deseos.",
        "prep": [
          "Escribe cuatro verbos en imperfecto de subjuntivo que vas a usar.",
          "Prepara un ejemplo con el mismo sujeto (infinitivo)."
        ],
        "seconds": 150,
        "model": "Mi profesora de piano, Elena, era muy exigente. Quería que practicara una hora cada día y no dejaba que tocara canciones de moda en clase. Le molestaba mucho que llegara tarde. Al principio yo solo quería terminar rápido, pero con los años entendí por qué nos pedía que escucháramos antes de tocar. Hoy le agradezco que fuera tan paciente.",
        "selfCheck": [
          "Uso al menos cuatro formas distintas del imperfecto de subjuntivo.",
          "Pronuncio la forma de «nosotros» con acento esdrújulo.",
          "Termino con una valoración personal."
        ]
      },
      {
        "title": "¿Qué quería realmente la abuela?",
        "prompt": "Tu docente es un primo que quiere vender el piano del café. Tú le recuerdas lo que pidió la abuela. Escucha su argumento, hazle al menos dos preguntas, aclara qué dijo ella exactamente y negocia una solución.",
        "prep": [
          "Prepara dos encargos de la abuela en imperfecto de subjuntivo.",
          "Prepara una frase para conceder: «Entiendo que quieras…, pero ella nos pidió que…».",
          "Piensa en una propuesta intermedia."
        ],
        "seconds": 180,
        "selfCheck": [
          "Hago preguntas reales y respondo a lo que dice mi interlocutor.",
          "Distingo lo que la abuela pidió de lo que yo interpreto.",
          "Propongo una solución concreta."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Cuéntale",
        "task": "Cuéntale a tu profesor tres cosas que alguien esperaba de ti cuando empezaste un trabajo o un curso.",
        "phrases": [
          "Me pidió que…",
          "Esperaba que…",
          "Le molestaba que…"
        ]
      },
      {
        "move": "Pregúntale",
        "task": "Pregúntale qué le pedían sus profesores cuando era estudiante y qué no le dejaban hacer.",
        "phrases": [
          "¿Qué te pedían que…?",
          "¿Te dejaban…?"
        ]
      },
      {
        "move": "Aclara",
        "task": "Lee una frase con «dijo que» o «insistió en que» y pide a tu profesor que confirme si informa o pide.",
        "phrases": [
          "¿Aquí es un dato o una petición?",
          "Entonces, ¿iría en subjuntivo?"
        ]
      }
    ],
    "bring": "Trae tu correo para la prima con los imperfectos de subjuntivo subrayados y una duda sobre un verbo irregular."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Mis padres querían que yo ___ (estudiar) Derecho, pero elegí Cocina.",
        "answers": [
          [
            "estudiara",
            "estudiase"
          ]
        ],
        "why": "Verbo de deseo en pasado y otro sujeto."
      },
      {
        "type": "gap",
        "q": "La directora nos prohibió que ___ (poner) carteles en la fachada.",
        "answers": [
          [
            "pusiéramos",
            "pusiésemos"
          ]
        ],
        "why": "pusieron → pusiéramos, con tilde."
      },
      {
        "type": "gap",
        "q": "Les explicó todo despacio para que lo ___ (entender) bien.",
        "answers": [
          [
            "entendieran",
            "entendiesen"
          ]
        ],
        "why": "«Para que» con acción principal pasada."
      },
      {
        "type": "choice",
        "q": "¿Qué forma es correcta? «El dueño quería ___ el local antes de diciembre».",
        "options": [
          "que vendiera",
          "vender",
          "que venda"
        ],
        "answer": 1,
        "why": "El dueño quiere y el dueño vende: infinitivo."
      },
      {
        "type": "choice",
        "q": "«Nos dijo que el café cerraba los lunes.» ¿Qué hace «dijo» aquí?",
        "options": [
          "Da una orden.",
          "Expresa un deseo difícil.",
          "Informa de un dato."
        ],
        "answer": 2,
        "why": "Indicativo: es una información."
      },
      {
        "type": "listen",
        "q": "¿Qué pidió la abuela, según el audio?",
        "audio": "La abuela le pidió a Joaquín que nunca sirviera el café recalentado.",
        "voice": "es-AR-f",
        "options": [
          "Que no sirviera café recalentado.",
          "Que sirviera el café más caliente.",
          "Que dejara de servir café."
        ],
        "answer": 0,
        "why": "«Que nunca sirviera el café recalentado»."
      },
      {
        "type": "error",
        "sentence": "Le pedí al electricista que venga ayer a las ocho.",
        "answers": [
          "Le pedí al electricista que viniera ayer a las ocho.",
          "Le pedí al electricista que viniese ayer a las ocho."
        ],
        "why": "«Ayer» cierra el encargo en el pasado: imperfecto de subjuntivo."
      },
      {
        "type": "error",
        "sentence": "Nos sorprendió que el banco nos daba el préstamo tan rápido.",
        "answers": [
          "Nos sorprendió que el banco nos diera el préstamo tan rápido.",
          "Nos sorprendió que el banco nos diese el préstamo tan rápido."
        ],
        "why": "Verbo de emoción + que + subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "Esperaba",
          "que",
          "sus",
          "nietos",
          "mantuvieran",
          "viva",
          "la",
          "tradición."
        ],
        "why": "mantuvieron → mantuvieran."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases sobre un lugar de tu barrio que cerró: qué querían los vecinos que pasara y un deseo difícil con «ojalá».",
        "model": "Los vecinos querían que el cine se convirtiera en un centro cultural. Ojalá alguien lo comprara y lo abriera otra vez.",
        "checklist": [
          "Uso «querían que» + imperfecto de subjuntivo.",
          "Uso «ojalá» + imperfecto de subjuntivo."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo formar el imperfecto de subjuntivo en -ra y en -se desde el pretérito, también con verbos irregulares.",
      "Puedo contar lo que alguien pidió, quiso o sintió en el pasado y usar el infinitivo cuando el sujeto es el mismo.",
      "Puedo distinguir si «decir» o «insistir» informan o piden, y aclarar si un encargo sigue pendiente."
    ],
    "review": [
      "Mañana, sin mirar la tabla, conjuga «decir», «poder» y «dormir» en imperfecto de subjuntivo para todas las personas.",
      "En tres días, cuenta en voz alta cinco cosas que te pidieron esta semana; marca cuáles siguen pendientes.",
      "Antes de la semana 2, relee tu correo y cambia dos verbos al presente para ver cómo cambia el marco temporal."
    ]
  },
  "related": [
    {
      "path": "/sistema-verbal/preterito-imperfecto-subjuntivo",
      "label": "Clase: Imperfecto de subjuntivo: formas -ra y -se"
    },
    {
      "path": "/gramatica/subjuntivo-tras-verbos-de-influencia-en",
      "label": "Clase: Subjuntivo tras verbos de influencia en pasado"
    }
  ]
};
