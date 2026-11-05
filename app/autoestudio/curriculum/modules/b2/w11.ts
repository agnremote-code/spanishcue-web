import type { Module } from "../../types";

/**
 * B2 · semana 11 · Autoestudio espejo de G147 (cambio de deícticos: aquí/allí, hoy/ese día) y
 * G148 (pasiva perifrástica: ser + participio). Repaso autónomo con la reapertura ficticia de un
 * galpón ferroviario de Ingeniero White, en Bahía Blanca. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w11: Module = {
  "id": "b2-11",
  "level": "b2",
  "week": 11,
  "kind": "core",
  "title": "Dijo que allá, al día siguiente, el galpón sería reabierto",
  "subtitle": "Repaso de los deícticos al transmitir un mensaje y de la pasiva con «ser + participio»",
  "stop": {
    "place": "Bahía Blanca",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g147",
    "b2.gram.g148",
    "b2.voc.w11-patrimonio-ferroviario",
    "b2.pron.w11-terminaciones-participio",
    "b2.lis.w11-redaccion-reconstruye",
    "b2.read.w11-noticia-reapertura",
    "b2.wri.w11-nota-boletin",
    "b2.spk.w11-transmitir-mensaje",
    "b2.fun.w11-aclarar-referencias",
    "b2.disc.w11-situar-declaraciones"
  ],
  reviewObjectives: ["b2.gram.g145","b2.gram.g146","b2.voc.w10-playa-voluntariado","b2.pron.w10-voz-cita","b2.lis.w10-llamada-reunion","b2.read.w10-cronica-temporada","b2.wri.w10-acta-reunion","b2.spk.w10-transmitir-negociar","b2.fun.w10-transmitir-mensajes","b2.disc.w10-transmitir-con-precision","b2.rev.w10-integracion"],
  prerequisites: ["b2-10"],
  "goal": {
    "canDo": "Puedo transmitir lo que alguien dijo en otro día y en otro lugar recalculando hoy, aquí, este, venir y traer, y contar en un registro informativo qué fue hecho y por quién con la pasiva con «ser».",
    "steps": [
      "Repasa cómo cambian las palabras de tiempo, lugar, persona y movimiento según desde dónde y cuándo cuentas.",
      "Repasa la pasiva con «ser»: tiempos, concordancia del participio y agente con «por».",
      "Escucha a dos periodistas de Bahía Blanca y lee la noticia de la reapertura de un galpón ferroviario.",
      "Escribe una nota para un boletín, revísala y transmite oralmente un mensaje de otro día."
    ]
  },
  "theory": {
    "intro": "En clase viste con tu profesor cómo se trasladan las palabras de otra persona y cómo se construye la pasiva con «ser». Aquí lo repasas solo, con una redacción de Bahía Blanca que tiene que contar una reapertura días después y desde otro lugar.",
    "parts": [
      {
        "heading": "Recalcular el tiempo desde tu propio día",
        "body": [
          "Palabras como «hoy», «mañana», «ayer», «ahora» o «esta semana» no tienen un valor fijo: señalan un día a partir del momento en que alguien habla. Cuando cuentas lo que otra persona dijo, no las copies ni las cambies de forma mecánica. Pregúntate qué día concreto señalaban y cómo se llama ese día desde tu momento.",
          "Si cuentas el mensaje poco después, a veces la palabra sigue igual o cambia por otra cercana («mañana» puede volverse «hoy» o «ayer»). Si ha pasado mucho tiempo, usa expresiones que miran al día de entonces: «ese día», «al día siguiente», «el día anterior», «en ese momento». Y si hay riesgo de confusión, nombra el día: «el martes»."
        ],
        "table": {
          "caption": "Lucas, el lunes en el puerto: «Mañana abren el galpón». ¿Cómo lo cuentas?",
          "head": [
            "Cuándo lo cuentas",
            "Cómo queda",
            "Por qué"
          ],
          "rows": [
            [
              "el mismo lunes",
              "Dijo que mañana abren / abrían el galpón.",
              "El martes todavía es «mañana»."
            ],
            [
              "el martes",
              "Dijo que hoy abrían el galpón.",
              "El día anunciado es el tuyo."
            ],
            [
              "el jueves",
              "Dijo que el martes abrían el galpón.",
              "«Ayer» o «anteayer» confunden: nombra el día."
            ],
            [
              "un año después",
              "Dijo que al día siguiente abrían el galpón.",
              "La referencia mira al lunes de entonces."
            ]
          ]
        },
        "examples": [
          {
            "es": "La guía, en marzo: «Ahora no hay luz en el taller». → En agosto: La guía nos contó que en ese momento no había luz en el taller.",
            "note": "«Ahora» ya no es tu ahora: «en ese momento» o «entonces»."
          },
          {
            "es": "El fotógrafo, el viernes: «Esta semana no puedo». → El viernes siguiente: Dijo que esa semana no podía.",
            "note": "«Esta semana» pasa a «esa semana» cuando ya terminó."
          }
        ],
        "mistakes": [
          {
            "wrong": "El lunes Lucas dijo que mañana abrían el galpón (lo cuentas el jueves).",
            "right": "El lunes Lucas dijo que el martes abrían el galpón.",
            "why": "El jueves, «mañana» señala el viernes: nombra el día que él quería decir."
          },
          {
            "wrong": "Siempre que hay estilo indirecto, «hoy» se cambia por «aquel día».",
            "right": "Si lo cuentas el mismo día, «hoy» se queda como está.",
            "why": "No es una tabla de traducción: el cambio depende de cuándo cuentas."
          }
        ],
        "tip": "Antes de transmitir un mensaje, escribe en el margen dos fechas: el día en que se dijo y el día en que lo cuentas. Con esas dos fechas, cada «mañana» se resuelve solo."
      },
      {
        "heading": "Lugar, personas y movimiento: ¿dónde estás tú?",
        "body": [
          "«Aquí» y «acá» señalan el lugar de quien habla; «este» señala algo cercano a quien habla. Si tú cuentas desde otro sitio, ese lugar está lejos de ti: «allí» o «allá», «ese» o «aquel». «Aquel» suma distancia, en el espacio o en el tiempo, y por eso aparece mucho en los recuerdos. En el Río de la Plata y en gran parte de América se prefieren «acá» y «allá» en la conversación.",
          "Los pronombres y los posesivos se ajustan a la nueva conversación: el «mi» de otra persona es «su» para ti, y el «te» que te dijeron a ti pasa a «me». Con «venir/ir» y «traer/llevar» decide desde tu posición actual: si estás en el destino, «venir» y «traer»; si no estás, «ir» y «llevar». Y si el lugar y el día coinciden con los tuyos, no cambies nada."
        ],
        "examples": [
          {
            "es": "Lucas, en el puerto: «Vení acá y traé el grabador». → Tomás, en la redacción: Me pidió que fuera allá y que le llevara el grabador.",
            "note": "Tomás no está en el puerto: «ir» y «llevar». Lucas usa el voseo rioplatense; al transmitirlo, el verbo pasa a imperfecto de subjuntivo."
          },
          {
            "es": "La guía, en el galpón: «Esta fosa la cavó mi abuelo». → Tomás, en la redacción: Dijo que esa fosa la había cavado su abuelo.",
            "note": "«Esta» pasa a «esa» y «mi» a «su». Si «su» es ambiguo, aclara: «el abuelo de ella»."
          },
          {
            "es": "Carla, en la redacción, a Tomás que está en el puerto: «Tráeme las fotos acá». → Tomás, que vuelve a la redacción: Ya te las traigo.",
            "note": "Tomás va hacia donde está Carla, que es quien recibe: «traer» es natural porque la perspectiva es la del destino."
          }
        ],
        "mistakes": [
          {
            "wrong": "Desde Buenos Aires: La guía me dijo que viniera aquí el viernes (ella está en Bahía Blanca).",
            "right": "Desde Buenos Aires: La guía me dijo que fuera allá el viernes.",
            "why": "Tú no estás en Bahía Blanca: el destino es «allá» y el movimiento, «ir»."
          }
        ],
        "tip": "Haz la prueba del mapa: marca dónde estaba quien habló y dónde estás tú. Si los dos puntos coinciden, «aquí» y «venir» se quedan; si no, cambian."
      },
      {
        "heading": "Ser + participio: lo que recibe la acción va primero",
        "body": [
          "La pasiva con «ser» convierte en sujeto lo que recibe la acción. «La intendenta inauguró la muestra» pone en primer plano a la intendenta; «La muestra fue inaugurada por la intendenta» pone en primer plano la muestra. El verbo «ser» lleva el tiempo y concuerda en número; el participio concuerda en género y número con el sujeto.",
          "El agente aparece con «por» solo si aporta información. Si es evidente, desconocido o no interesa, se omite: «El techo fue reparado en 2022» basta. La pasiva admite todos los tiempos, y también la forma continua «está siendo + participio», útil para procesos que siguen abiertos."
        ],
        "table": {
          "caption": "La misma pasiva en distintos tiempos",
          "head": [
            "Tiempo de «ser»",
            "Ejemplo"
          ],
          "rows": [
            [
              "pretérito",
              "El galpón fue construido en 1907."
            ],
            [
              "pretérito perfecto",
              "Las vías han sido retiradas."
            ],
            [
              "pluscuamperfecto",
              "La grúa ya había sido vendida."
            ],
            [
              "futuro",
              "Los horarios serán anunciados a fin de mes."
            ],
            [
              "presente continuo",
              "La lista está siendo revisada por las familias."
            ],
            [
              "infinitivo",
              "Las fosas deben ser protegidas."
            ]
          ]
        },
        "examples": [
          {
            "es": "Los portones fueron desmontados por herreros del barrio.",
            "note": "Agente útil: dice quién hizo el trabajo."
          },
          {
            "es": "La muestra será inaugurada el martes.",
            "note": "Sin agente: lo importante es la fecha."
          }
        ],
        "mistakes": [
          {
            "wrong": "Las fosas fueron conservado por los vecinos.",
            "right": "Las fosas fueron conservadas por los vecinos.",
            "why": "El participio concuerda con «las fosas»: femenino plural."
          },
          {
            "wrong": "El galpón fue restaurado de los vecinos.",
            "right": "El galpón fue restaurado por los vecinos.",
            "why": "El agente de la pasiva se introduce con «por»."
          }
        ]
      },
      {
        "heading": "Cuándo conviene la pasiva y cuándo pesa",
        "body": [
          "La pasiva con «ser» es propia de la prensa, la historia, los informes y los documentos oficiales. En la conversación suena rígida: entre amigos se dice «abrieron el galpón» o «lo abrió la intendenta». Si el agente es importante y conocido, la activa suele ser más directa. La semana que viene comparas estas formas con la pasiva con «se».",
          "Recuerda también la diferencia con «estar + participio»: «ser» presenta la acción («La puerta fue pintada ayer»), y «estar» presenta el resultado que se ve ahora («La puerta está pintada»). Y no construyas pasivas con la persona que recibe algo: con «dar», «regalar» o «preguntar» la persona no puede ser sujeto de la pasiva."
        ],
        "examples": [
          {
            "es": "Noticia: El reloj de la estación fue reparado por un relojero jubilado.",
            "note": "Registro informativo: la pasiva encaja."
          },
          {
            "es": "Conversación: ¿Viste? Arreglaron el reloj de la estación.",
            "note": "Entre amigos: activa con sujeto general."
          },
          {
            "es": "El reloj ya está arreglado: da la hora exacta.",
            "note": "«Estar» describe el estado que resulta."
          }
        ],
        "mistakes": [
          {
            "wrong": "Los ferroviarios fueron dados una medalla.",
            "right": "Los ferroviarios recibieron una medalla. / A los ferroviarios les dieron una medalla.",
            "why": "Quien recibe algo con «dar» no puede ser sujeto de la pasiva en español."
          }
        ],
        "tip": "Pregúntate quién lee el texto. Si es un informe o una noticia, la pasiva da orden; si es un mensaje a un amigo, cámbiala por la activa."
      }
    ]
  },
  "grammar": {
    "intro": "Primero decide desde dónde y cuándo cuentas; después elige qué va en primer plano.",
    "exercises": [
      {
        "id": "b2-11-g-referencias",
        "type": "context",
        "prompt": "Lee quién habló, dónde y cuándo, y elige cómo lo cuenta la persona indicada.",
        "items": [
          {
            "context": "Miércoles, en el puerto, la guía a Lucas: «Mañana te espero acá con la lista». Lucas lo cuenta el jueves por la mañana, en la redacción.",
            "q": "¿Qué dice Lucas?",
            "options": [
              "Me dijo que mañana me esperaba acá con la lista.",
              "Me dijo que me esperaba allá hoy con la lista.",
              "Me dijo que me esperaba allá el día anterior con la lista."
            ],
            "answer": 1,
            "why": "El «mañana» del miércoles es el jueves, es decir, hoy; y Lucas ya no está en el puerto: «allá»."
          },
          {
            "context": "Hace diez años, en Bahía Blanca, tu abuela: «Este galpón lo levantaron ingleses». Hoy lo cuentas en Córdoba.",
            "q": "¿Qué versión respeta la distancia en el tiempo y en el espacio?",
            "options": [
              "Mi abuela decía que este galpón lo habían levantado ingleses.",
              "Mi abuela decía que aquel galpón lo habían levantado ingleses.",
              "Mi abuela decía que ese galpón lo levantarán ingleses."
            ],
            "answer": 1,
            "why": "«Aquel» marca lejanía en el espacio y en el recuerdo."
          },
          {
            "context": "Carla, en la redacción, llama a Tomás, que está en el puerto: «Tráeme las fotos antes de las seis». Tomás se lo cuenta a la guía, en el puerto.",
            "q": "¿Qué dice Tomás?",
            "options": [
              "Carla me pidió que le llevara las fotos antes de las seis.",
              "Carla me pidió que le trajera las fotos antes de las seis.",
              "Carla me pidió que me trajera las fotos antes de las seis."
            ],
            "answer": 0,
            "why": "Tomás no está en la redacción: el movimiento va hacia otro lugar, «llevar»."
          },
          {
            "context": "Hoy a las nueve, en la redacción, el jefe: «Hoy cerramos a las ocho». A las once, en la misma redacción, se lo cuentas a una compañera.",
            "q": "¿Qué haces con «hoy»?",
            "options": [
              "Lo cambio por «ese día».",
              "Lo cambio por «al día siguiente».",
              "Lo dejo igual: es el mismo día."
            ],
            "answer": 2,
            "why": "Mismo día y mismo lugar: no hay nada que recalcular."
          }
        ]
      },
      {
        "id": "b2-11-g-pasiva",
        "type": "gap",
        "prompt": "Completa con la pasiva con «ser» en el tiempo indicado. Haz concordar el participio.",
        "items": [
          {
            "q": "Las locomotoras ___ (vender, pretérito) como chatarra en 1993.",
            "answers": [
              [
                "fueron vendidas"
              ]
            ],
            "why": "Sujeto femenino plural: «fueron vendidas»."
          },
          {
            "q": "El nuevo horario ___ (publicar, futuro) en la web del centro.",
            "answers": [
              [
                "será publicado"
              ]
            ],
            "why": "Futuro de «ser» + participio masculino singular."
          },
          {
            "q": "Hasta ahora, la muestra ___ (visitar, pretérito perfecto) por dos mil personas.",
            "answers": [
              [
                "ha sido visitada"
              ]
            ],
            "why": "«Hasta ahora» pide el perfecto: «ha sido visitada»."
          },
          {
            "q": "Cuando llegamos, los planos originales ya ___ (encontrar, pluscuamperfecto) en un archivo de Rosario.",
            "answers": [
              [
                "habían sido encontrados"
              ]
            ],
            "why": "Acción anterior a otra pasada, sujeto masculino plural."
          },
          {
            "q": "En este momento, las fotos antiguas ___ (digitalizar, presente continuo) por un equipo de la universidad.",
            "answers": [
              [
                "están siendo digitalizadas"
              ]
            ],
            "why": "Proceso abierto: «están siendo» + participio femenino plural."
          },
          {
            "q": "Según el reglamento, los objetos de la vitrina no pueden ___ (tocar) por el público.",
            "answers": [
              [
                "ser tocados"
              ]
            ],
            "why": "Infinitivo pasivo después de «poder»: «ser tocados»."
          }
        ]
      },
      {
        "id": "b2-11-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: Lunes, en Ingeniero White, la guía a Lucas: «Mañana vengan acá temprano y traigan linternas, porque este galpón no tiene luz». Cuéntalo el viernes desde la redacción del centro.",
            "model": "El lunes la guía le pidió a Lucas que el martes fueran allá temprano y que llevaran linternas, porque ese galpón no tenía luz.",
            "checklist": [
              "Cambio «mañana» por el día concreto y «acá» por «allá».",
              "Uso «ir» y «llevar» porque no estoy en el galpón.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: Hace un año, la arquitecta, en la obra: «Ahora mi equipo está midiendo estas paredes». Cuéntalo hoy en una entrevista en otra ciudad.",
            "model": "La arquitecta contó que en aquel momento su equipo estaba midiendo aquellas paredes.",
            "checklist": [
              "Ajusto «ahora», «mi» y «estas» a mi momento y a mi lugar.",
              "Mantengo el sentido de acción en curso.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Una cooperativa de herreros restauró los portones en 2023». Escríbelo para la placa del edificio, con la pasiva con «ser» y el agente.",
            "model": "Estos portones fueron restaurados en 2023 por una cooperativa de herreros.",
            "checklist": [
              "Pongo «los portones» como sujeto y hago concordar el participio.",
              "Introduzco el agente con «por».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Van a anunciar los horarios de invierno a fin de mes; de momento, unos voluntarios revisan la lista de ferroviarios». Pásalo a un comunicado formal sin nombrar a quién anuncia.",
            "model": "Los horarios de invierno serán anunciados a fin de mes. Mientras tanto, la lista de ferroviarios está siendo revisada por un grupo de voluntarios.",
            "checklist": [
              "Uso el futuro pasivo sin agente para el anuncio.",
              "Uso «está siendo + participio» para el proceso abierto.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de un edificio que recupera su vida y de cómo lo cuenta la prensa. Apréndelas en bloque.",
    "groups": [
      {
        "title": "Recuperar un edificio",
        "items": [
          {
            "es": "poner en valor un edificio",
            "note": "recuperarlo y darle un uso que muestre su importancia"
          },
          {
            "es": "el galpón",
            "note": "en el Cono Sur, edificio amplio de techo alto para talleres o depósitos"
          },
          {
            "es": "estar a cargo de la obra",
            "note": "dirigir los trabajos de reforma"
          },
          {
            "es": "el patrimonio industrial",
            "note": "fábricas, talleres y máquinas con valor histórico"
          },
          {
            "es": "desmontar y volver a colocar",
            "note": "quitar una pieza, arreglarla y ponerla otra vez"
          }
        ]
      },
      {
        "title": "Contarlo en la prensa",
        "items": [
          {
            "es": "el acto de reapertura",
            "note": "la ceremonia con la que un lugar vuelve a abrir"
          },
          {
            "es": "citar textualmente",
            "note": "reproducir las palabras exactas, entre comillas"
          },
          {
            "es": "según fuentes de la obra",
            "note": "fórmula para atribuir una información"
          },
          {
            "es": "el comunicado de prensa",
            "note": "texto oficial que una institución envía a los medios"
          },
          {
            "es": "cerrar la nota",
            "note": "en la jerga periodística, terminarla para publicarla"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-11-v-relacion",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación de la redacción o de la obra en la que encaja.",
        "pairs": [
          {
            "left": "estar a cargo de la obra",
            "right": "Paula Rivas firma los planos y decide los materiales."
          },
          {
            "left": "citar textualmente",
            "right": "Carla pone entre comillas la frase exacta de la guía."
          },
          {
            "left": "el comunicado de prensa",
            "right": "El municipio envía a los diarios el anuncio de la inauguración."
          },
          {
            "left": "desmontar y volver a colocar",
            "right": "Los herreros quitan los portones, los limpian y los cuelgan otra vez."
          },
          {
            "left": "cerrar la nota",
            "right": "A las diez de la noche el texto tiene que estar listo para publicar."
          },
          {
            "left": "poner en valor un edificio",
            "right": "El viejo taller se convierte en un centro cultural que cuenta su historia."
          }
        ],
        "why": "Cada expresión corresponde a una acción concreta de la obra o de la redacción."
      }
    ]
  },
  "pronunciation": {
    "focus": "Oír el género y el número del participio y unir «ser» con el participio sin pausa.",
    "explanation": [
      "En la pasiva, la información clave está al final del participio: «restaurado», «restaurada», «restaurados», «restauradas». Si no pronuncias con claridad la vocal final y la «-s», tu oyente no sabe a qué se refiere el verbo. En la lectura de noticias la «-d-» de «-ado» se pronuncia suave pero se oye; en la conversación rápida de muchas zonas se debilita.",
      "Entre «fue», «ha sido» o «será» y un participio que empieza por vocal hay sinalefa: las dos vocales se unen en una sílaba, «fueinaugurada», «hasidoabierto». No hagas pausa en el medio. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "La muestra fue inaugurada el martes.",
        "note": "fue_i-nau-gu-RA-da: sinalefa y final en «-a»."
      },
      {
        "es": "Los portones fueron restaurados.",
        "note": "res-tau-RA-dos: la «-s» final marca el plural."
      },
      {
        "es": "El archivo ha sido abierto al público.",
        "note": "ha-si-do_a-BIER-to: sin pausa entre «sido» y «abierto»."
      }
    ],
    "perceive": {
      "id": "b2-11-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y elige la forma del participio que oyes. Fíjate en la vocal final y en la «-s».",
      "items": [
        {
          "q": "¿Qué forma oyes en la frase sobre la grúa?",
          "options": [
            "reparado",
            "reparada",
            "reparadas"
          ],
          "answer": 1,
          "audio": "La grúa del muelle fue reparada el año pasado.",
          "voice": "es-AR-f",
          "why": "«La grúa»: femenino singular."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre los vagones?",
          "options": [
            "pintado",
            "pintados",
            "pintadas"
          ],
          "answer": 1,
          "audio": "Los vagones serán pintados con los colores originales.",
          "voice": "es-AR-m",
          "why": "«Los vagones»: masculino plural."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre las fotos?",
          "options": [
            "donada",
            "donado",
            "donadas"
          ],
          "answer": 2,
          "audio": "Las fotos fueron donadas por la familia de un maquinista.",
          "voice": "es-AR-f",
          "why": "«Las fotos»: femenino plural, aunque la palabra termina en «-o»."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre el reloj?",
          "options": [
            "instalado",
            "instalada"
          ],
          "answer": 0,
          "audio": "El reloj ha sido instalado otra vez en la fachada.",
          "voice": "es-AR-m",
          "why": "«El reloj»: masculino singular."
        }
      ]
    },
    "produce": [
      {
        "text": "La muestra fue inaugurada por la intendenta.",
        "tip": "Une «fue» e «inaugurada» en un solo impulso.",
        "voice": "es-AR-f"
      },
      {
        "text": "Las fosas fueron conservadas por los vecinos.",
        "tip": "Marca bien la «-as» final de «conservadas».",
        "voice": "es-AR-m"
      },
      {
        "text": "Dijo que fuéramos allá al día siguiente.",
        "tip": "Fuerza en «fué» y en «llá»; «al día siguiente» va seguido, sin pausa.",
        "voice": "es-AR-f"
      },
      {
        "text": "El archivo ha sido abierto al público.",
        "tip": "Sinalefa entre «sido» y «abierto».",
        "voice": "es-AR-m"
      }
    ]
  },
  "listening": {
    "title": "Cerrar la nota sin el cronista",
    "context": "Es jueves en la redacción de un diario digital de Bahía Blanca. Lucas, el cronista, está enfermo, y Carla, la editora, y Tomás, el fotógrafo, tienen que terminar la nota sobre la reapertura de un galpón ferroviario en Ingeniero White, el barrio del puerto. Reconstruyen lo que Lucas dijo el lunes. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "ca",
        "name": "Carla",
        "voice": "es-AR-f",
        "role": "Editora del diario"
      },
      {
        "id": "to",
        "name": "Tomás",
        "voice": "es-AR-m",
        "role": "Fotógrafo, habló con Lucas el lunes"
      }
    ],
    "script": [
      {
        "speaker": "ca",
        "text": "Tomás, Lucas sigue con fiebre y la nota del galpón sale el sábado, así que la cerramos nosotros. El lunes él te llamó desde el puerto, ¿no? ¿Qué te dijo exactamente?"
      },
      {
        "speaker": "to",
        "text": "Me llamó desde White a eso de las once. Me dijo que en ese momento estaba dentro del galpón con la guía y que allí todavía olía a grasa de locomotora. Me pidió que fuera para allá al día siguiente con la cámara grande y que le llevara el grabador, porque se lo había olvidado acá."
      },
      {
        "speaker": "ca",
        "text": "O sea que fuiste el martes. ¿Y qué contó él del edificio?"
      },
      {
        "speaker": "to",
        "text": "Que el galpón fue construido en 1907 por una compañía británica y que fue cerrado a principios de los noventa. La guía le explicó que las vías del patio fueron levantadas antes de la privatización, pero que las fosas de reparación fueron conservadas por los propios vecinos, que las limpiaban cada primavera."
      },
      {
        "speaker": "ca",
        "text": "Eso es oro. ¿Y lo de la inauguración? En el comunicado dice «mañana», pero el comunicado es del lunes."
      },
      {
        "speaker": "to",
        "text": "Claro, cuidado con eso. Aquel «mañana» era el martes, o sea, anteayer. La muestra fue inaugurada el martes a la tarde por la intendenta; yo estaba ahí y saqué las fotos. Lo que todavía no fue decidido es el horario de invierno."
      },
      {
        "speaker": "ca",
        "text": "Perfecto. Entonces no escribimos «hoy se inaugura», escribimos «fue inaugurada el martes». ¿Algo más que haya dicho Lucas?"
      },
      {
        "speaker": "to",
        "text": "Sí. Dijo que la guía le había prometido una lista de los ferroviarios que trabajaron en aquel taller, y que le había pedido que volviera allá el viernes a buscarla."
      },
      {
        "speaker": "ca",
        "text": "El viernes es mañana. Si Lucas no puede, vas tú y la traes acá. Y la frase de la guía, cítala textual, entre comillas, con el día en que la dijo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿Qué tienen que hacer Carla y Tomás y por qué?",
        "exercise": {
          "id": "b2-11-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Cuál es la situación?",
              "options": [
                "Preparan juntos una visita guiada al puerto.",
                "Discuten si vale la pena publicar la nota.",
                "Terminan una nota sin el cronista y reconstruyen lo que él contó."
              ],
              "answer": 2,
              "why": "Lucas está enfermo y ellos cierran la nota con lo que él dijo el lunes."
            },
            {
              "q": "¿Qué problema detecta Carla en el comunicado?",
              "options": [
                "Que su «mañana» ya no sirve para la nota.",
                "Que el nombre de la intendenta está mal escrito.",
                "Que la inauguración fue suspendida."
              ],
              "answer": 0,
              "why": "El comunicado es del lunes; su «mañana» era el martes."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-11-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué le pidió Lucas a Tomás el lunes?",
              "options": [
                "Que fuera al puerto el martes y le llevara el grabador.",
                "Que le mandara las fotos de la inauguración.",
                "Que hablara con la intendenta."
              ],
              "answer": 0,
              "why": "«Me pidió que fuera para allá al día siguiente… y que le llevara el grabador»."
            },
            {
              "q": "¿Quiénes conservaron las fosas de reparación?",
              "options": [
                "La compañía británica.",
                "Los vecinos del barrio.",
                "El municipio."
              ],
              "answer": 1,
              "why": "«Fueron conservadas por los propios vecinos»."
            },
            {
              "q": "¿Qué tiene que hacer alguien el viernes?",
              "options": [
                "Publicar la nota.",
                "Fotografiar el horario de invierno.",
                "Ir a buscar la lista de ferroviarios."
              ],
              "answer": 2,
              "why": "La guía pidió que Lucas volviera el viernes a buscar la lista."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-11-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento según lo que muestra.",
          "categories": [
            "Referencia recalculada desde otro día o lugar",
            "Pasiva con «ser»"
          ],
          "items": [
            {
              "text": "me pidió que fuera para allá al día siguiente",
              "cat": 0,
              "why": "«Acá» del puerto pasa a «allá» y «mañana» a «al día siguiente»."
            },
            {
              "text": "el galpón fue construido en 1907",
              "cat": 1,
              "why": "«Ser» en pretérito + participio que concuerda con «el galpón»."
            },
            {
              "text": "Aquel «mañana» era el martes",
              "cat": 0,
              "why": "Tomás recalcula el día desde el jueves."
            },
            {
              "text": "las fosas de reparación fueron conservadas por los propios vecinos",
              "cat": 1,
              "why": "Pasiva con agente introducido por «por»."
            },
            {
              "text": "vas tú y la traes acá",
              "cat": 0,
              "why": "Carla está en la redacción, el destino: «traer» y «acá»."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El galpón de locomotoras de White vuelve a abrir sus portones",
    "genre": "Noticia de un diario digital regional",
    "frame": "Texto original de SpanishCue escrito como noticia del diario ficticio «La Ría Digital». El edificio y las personas son inventados.",
    "text": [
      "El galpón de locomotoras de Ingeniero White, construido en 1907 y cerrado durante casi treinta años, fue reabierto el martes como centro cultural. La muestra inaugural, dedicada a los ferroviarios del puerto, fue presentada por la intendenta ante unas cuatrocientas personas, muchas de ellas hijos y nietos de quienes trabajaron en aquel taller.",
      "La recuperación no fue rápida. El techo fue reparado en 2022 con fondos provinciales; los portones de hierro fueron desmontados, limpiados y vueltos a colocar por una cooperativa de herreros de la zona; y las fosas donde se revisaban las máquinas fueron cubiertas solo en parte, para que el público pudiera ver cómo eran. Según la arquitecta a cargo de la obra, Paula Rivas, cada decisión fue discutida con la asociación de vecinos, que durante años había cuidado el edificio por su cuenta.",
      "Durante el acto, Rivas recordó que la primera vez que entró al edificio, en 2019, allí no había luz ni agua y aquel techo dejaba pasar la lluvia. «Ese día pensé que no se podía salvar», admitió. Néstor Salas, uno de los herreros, contó que su padre había empezado a trabajar en ese mismo galpón a los quince años y que esa tarde, por primera vez, había sentido que la historia de su familia estaba en un museo y no en un cajón.",
      "La guía del centro, Mirta Ojeda, anunció el martes que al día siguiente comenzarían las visitas escolares y que la semana siguiente sería publicada en la web una lista con los nombres de los ferroviarios del taller. El listado todavía no fue publicado: según explicó ayer a este diario, está siendo revisado por las familias, que pidieron corregir algunos apellidos antes de que salga.",
      "Las visitas son gratuitas. Los horarios de invierno serán anunciados a fin de mes; hasta entonces, el centro abre de miércoles a domingo, de 14 a 19. Quien tenga fotos o documentos del taller puede llevarlos a la entrada: serán digitalizados y devueltos a sus dueños en el día. Según Ojeda, el objetivo es que la muestra no quede cerrada, sino que crezca cada mes con lo que traigan los vecinos, porque «este galpón fue levantado por ellos, y ellos tienen que seguir contándolo»."
    ],
    "glossary": [
      {
        "es": "la fosa",
        "note": "hueco en el suelo de un taller para trabajar debajo de un vehículo"
      },
      {
        "es": "la intendenta",
        "note": "en Argentina, la persona que gobierna un municipio"
      },
      {
        "es": "por su cuenta",
        "note": "sin ayuda de otros"
      }
    ],
    "tasks": [
      {
        "id": "b2-11-r-comprension",
        "type": "choice",
        "prompt": "Responde según la noticia.",
        "items": [
          {
            "q": "¿Quién volvió a colocar los portones?",
            "options": [
              "La intendenta.",
              "Una cooperativa de herreros de la zona.",
              "La asociación de vecinos."
            ],
            "answer": 1,
            "why": "«Fueron desmontados, limpiados y vueltos a colocar por una cooperativa de herreros»."
          },
          {
            "q": "¿Por qué las fosas no fueron cubiertas del todo?",
            "options": [
              "Para que el público viera cómo eran.",
              "Porque no había fondos suficientes.",
              "Porque los vecinos se opusieron."
            ],
            "answer": 0,
            "why": "«Para que el público pudiera ver cómo eran»."
          },
          {
            "q": "¿Qué pasó con la lista de ferroviarios?",
            "options": [
              "Fue publicada el miércoles.",
              "Fue perdida durante la obra.",
              "Todavía no fue publicada porque la revisan las familias."
            ],
            "answer": 2,
            "why": "«Todavía no fue publicado… está siendo revisado por las familias»."
          }
        ]
      },
      {
        "id": "b2-11-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "La noticia se publica el jueves. Explica en 60–80 palabras qué días concretos señalan «al día siguiente» y «la semana siguiente» del cuarto párrafo, y por qué el diario no escribe «mañana». Comenta también qué aporta el agente en una de las pasivas del segundo párrafo.",
            "model": "La guía habló el martes, así que «al día siguiente» es el miércoles y «la semana siguiente», la semana próxima a ese martes. El diario no usa «mañana» porque desde el jueves señalaría el viernes. En «fueron vueltos a colocar por una cooperativa de herreros», el agente importa: reconoce el trabajo de personas del barrio, y Néstor Salas, uno de ellos, aparece después en la noticia.",
            "checklist": [
              "Calculo los días desde el martes y desde el jueves.",
              "Explico por qué el agente aporta información.",
              "Cito una frase literal del texto."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la noticia separa los hechos de las declaraciones y sitúa cada una en su día.",
      "items": [
        {
          "quote": "los portones de hierro fueron desmontados, limpiados y vueltos a colocar por una cooperativa de herreros",
          "note": "Tres participios en serie comparten el mismo «fueron» y concuerdan con «los portones»."
        },
        {
          "quote": "allí no había luz ni agua y aquel techo dejaba pasar la lluvia",
          "note": "La arquitecta habla en el galpón, pero recuerda 2019: «aquel» marca distancia en el tiempo."
        },
        {
          "quote": "está siendo revisado por las familias",
          "note": "Pasiva continua: el proceso sigue abierto cuando se publica la noticia."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: recalcula las referencias y elige la pasiva cuando el texto lo pide.",
    "exercises": [
      {
        "id": "b2-11-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir las frases de la nota.",
        "items": [
          {
            "words": [
              "La",
              "guía",
              "nos",
              "pidió",
              "que",
              "lleváramos",
              "linternas",
              "al",
              "galpón."
            ],
            "why": "«Llevar»: quien cuenta no está en el galpón."
          },
          {
            "words": [
              "Las",
              "fotos",
              "antiguas",
              "serán",
              "devueltas",
              "a",
              "sus",
              "dueños",
              "en",
              "el",
              "día."
            ],
            "why": "Pasiva en futuro con participio femenino plural."
          },
          {
            "words": [
              "Dijo",
              "que",
              "aquella",
              "tarde",
              "había",
              "sido",
              "la",
              "más",
              "larga",
              "de",
              "su",
              "vida."
            ],
            "why": "«Esta tarde» pasa a «aquella tarde» en el recuerdo."
          }
        ]
      },
      {
        "id": "b2-11-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Las vías del patio fueron levantados en 1991.",
            "answers": [
              "Las vías del patio fueron levantadas en 1991."
            ],
            "why": "El participio concuerda con «las vías»: femenino plural."
          },
          {
            "sentence": "Hace dos años, en el puerto, me dijo que este galpón era de su abuelo.",
            "answers": [
              "Hace dos años, en el puerto, me dijo que ese galpón era de su abuelo.",
              "Hace dos años, en el puerto, me dijo que aquel galpón era de su abuelo."
            ],
            "why": "Lo cuentas lejos en el tiempo: «este» pasa a «ese» o «aquel»."
          },
          {
            "sentence": "El techo fue reparado de una empresa de Neuquén.",
            "answers": [
              "El techo fue reparado por una empresa de Neuquén."
            ],
            "why": "El agente de la pasiva va con «por»."
          },
          {
            "sentence": "Desde la redacción: Lucas me pidió que viniera al puerto y le trajera el grabador.",
            "answers": [
              "Desde la redacción: Lucas me pidió que fuera al puerto y le llevara el grabador."
            ],
            "why": "Quien cuenta está en la redacción, no en el puerto: «ir» y «llevar»."
          }
        ]
      },
      {
        "id": "b2-11-x-registro",
        "type": "classify",
        "prompt": "¿Dónde encaja mejor cada frase? Clasifícala según el texto en que la escribirías.",
        "categories": [
          "Noticia o informe",
          "Mensaje a un amigo"
        ],
        "items": [
          {
            "text": "El edificio fue declarado patrimonio municipal en 2015.",
            "cat": 0,
            "why": "Pasiva con «ser» y dato formal."
          },
          {
            "text": "¿Viste que al final abrieron el galpón?",
            "cat": 1,
            "why": "Activa con sujeto general, tono de conversación."
          },
          {
            "text": "Las obras fueron financiadas por el gobierno provincial.",
            "cat": 0,
            "why": "El agente aporta información: estilo de informe."
          },
          {
            "text": "Me encantó cómo dejaron los portones.",
            "cat": 1,
            "why": "Valoración personal con activa."
          },
          {
            "text": "La lista será publicada cuando las familias la aprueben.",
            "cat": 0,
            "why": "Anuncio formal en pasiva."
          }
        ]
      },
      {
        "id": "b2-11-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Alguien te dejó un mensaje la semana pasada desde otra ciudad con «mañana», «aquí» y «venir». Escribe el mensaje original y cómo lo cuentas hoy.",
            "model": "Mi hermana, el sábado pasado desde Mendoza: «Ven aquí mañana, que hacemos asado». Hoy lo cuento así: Mi hermana me pidió que fuera allá el domingo porque hacían asado.",
            "checklist": [
              "Cambio el día, el lugar y el verbo de movimiento.",
              "Paso la orden a imperfecto de subjuntivo."
            ]
          },
          {
            "prompt": "Describe en dos frases un edificio de tu ciudad con la pasiva con «ser»: cuándo fue construido y qué le pasó después.",
            "model": "El mercado central fue construido en 1928 por un arquitecto italiano. En 2010 fue restaurado y hoy alberga una feria de productores.",
            "checklist": [
              "Uso al menos dos pasivas con concordancia correcta.",
              "Incluyo el agente solo si aporta información."
            ]
          },
          {
            "prompt": "Escribe un aviso breve para la entrada de un centro cultural con un proceso todavía abierto («está siendo + participio») y un anuncio futuro.",
            "model": "La sala de fotografías está siendo reorganizada. Las nuevas vitrinas serán presentadas el sábado 14 a las 17.",
            "checklist": [
              "Uso «está siendo + participio» para el proceso.",
              "Uso el futuro pasivo para el anuncio."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe una nota informativa (220–300 palabras) para el boletín de tu barrio, de tu trabajo o de tu escuela sobre la inauguración o reapertura de un lugar. La publicas tres días después del acto y no la escribes en ese lugar. Cuenta qué fue hecho y por quién, y transmite lo que dijeron al menos dos personas, con las referencias de tiempo y lugar ajustadas.",
    "context": "El boletín lo leen vecinos que no fueron al acto. Necesitan datos claros (qué, cuándo, quién) y saber exactamente qué día y dónde pasará lo que se anunció. Puedes usar el galpón de White o un lugar real o inventado de tu ciudad.",
    "steps": [
      "Anota los hechos principales y decide en cuáles importa el agente.",
      "Anota dos declaraciones con su día y su lugar originales y recalcula cada «hoy», «mañana», «aquí» y «este».",
      "Escribe tres o cuatro párrafos: el hecho, la historia del lugar, las declaraciones y la información práctica.",
      "Revisa la concordancia de cada participio y corrige las referencias de tiempo que todavía miran al día del acto."
    ],
    "useLanguage": [
      "fue inaugurado / fueron restaurados por…",
      "ha sido / será / está siendo + participio",
      "dijo que ese día / al día siguiente…",
      "anunció que la semana siguiente…",
      "pidió que fuéramos allá / que lleváramos…",
      "aquel taller, ese mismo lugar"
    ],
    "model": [
      "El sábado 5 fue reabierta la biblioteca popular del barrio Villa Mitre, después de dos años de obras. El acto fue presentado por la directora, Silvia Ponce, y reunió a más de doscientas personas, entre ellas varios socios fundadores. La sala de lectura fue ampliada, las estanterías de madera fueron restauradas por estudiantes de una escuela técnica y el patio ha sido convertido en un espacio para talleres al aire libre.",
      "La biblioteca fue fundada en 1934 por un grupo de ferroviarios que querían que sus hijos tuvieran libros cerca de casa. Durante el acto, Ponce recordó que el día en que asumió la dirección allí llovía más adentro que afuera, y que aquel invierno los socios habían tapado el techo con lonas.",
      "También habló Ramiro Gómez, uno de los estudiantes. Contó que al principio no sabían cómo tratar una madera tan vieja y que su profesor les pidió que fueran a la biblioteca cada tarde a estudiarla antes de tocarla. Esa misma tarde, Ponce anunció que al día siguiente empezaría el préstamo de libros y que el lunes siguiente serían abiertas las inscripciones a los talleres.",
      "Por lo tanto, el préstamo ya funciona desde el domingo y las inscripciones abren este lunes 7. Los horarios de los talleres serán publicados en la cartelera de la entrada. Quienes tengan libros para donar pueden llevarlos de martes a sábado, de 15 a 19; serán revisados por los voluntarios antes de pasar a las estanterías."
    ],
    "checklist": [
      "Uso la pasiva con «ser» cuando el resultado importa más que quien actuó.",
      "Cada participio concuerda con su sujeto.",
      "Atribuyo cada declaración a su autor y la sitúo en su día.",
      "Recalculo «hoy», «mañana», «aquí», «este», «venir» y «traer» desde el día en que publico.",
      "La información práctica dice fechas concretas."
    ],
    "words": [
      220,
      300
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave y un pequeño mapa de días y lugares, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "El mensaje que me dejaron",
        "prompt": "Habla durante unos dos minutos de un mensaje importante que alguien te dio en otro lugar y en otro momento (un viaje, una mudanza, una despedida). Cuenta qué te dijo, qué te pidió y qué anunció, ajustando cada referencia a hoy y a donde estás ahora. Termina con lo que pasó después.",
        "prep": [
          "Escribe la fecha y el lugar del mensaje y los de hoy.",
          "Prepara tres frases originales con «hoy», «aquí» o «ven» y su versión transmitida."
        ],
        "seconds": 150,
        "model": "Hace tres años, en el aeropuerto de Ezeiza, mi abuelo me dijo que aquel día era el más triste de su vida, pero que estaba orgulloso. Me pidió que lo llamara al llegar y que le llevara una foto de la casa donde iba a vivir. También me anunció que el verano siguiente vendría a visitarme. Lo cumplió: vino en enero y se quedó un mes.",
        "selfCheck": [
          "Recalculo cada referencia de tiempo y de lugar.",
          "Uso «ir/venir» y «llevar/traer» desde donde estoy ahora.",
          "Distingo lo que me dijo, lo que me pidió y lo que anunció."
        ]
      },
      {
        "title": "¿Qué «mañana» era ese?",
        "prompt": "Tu interlocutor hace de periodista que va a publicar una noticia sobre un lugar que tú visitaste la semana pasada. Tú le transmites lo que te dijo allí la persona responsable. Él te pregunta qué día y qué lugar quería decir cada vez; tú aclaras, corriges y le das los hechos en pasiva para que pueda copiarlos en la nota.",
        "prep": [
          "Prepara tres declaraciones de la persona responsable con «hoy», «mañana» o «aquí».",
          "Prepara dos hechos en pasiva con «ser»: qué fue construido, restaurado o anunciado.",
          "Prepara fórmulas para aclarar: «Cuando dijo \"mañana\" se refería a…»."
        ],
        "seconds": 180,
        "selfCheck": [
          "Respondo a las preguntas de mi interlocutor y aclaro cada referencia.",
          "Separo las palabras de la otra persona de los hechos.",
          "Uso al menos dos pasivas con «ser» al dar los datos."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Transmite",
        "task": "Cuéntale a tu profesor un mensaje que recibiste hace tiempo en otro lugar y pídele que detecte si alguna referencia quedó sin recalcular.",
        "phrases": [
          "Aquel día me dijo que…",
          "Me pidió que fuera allá…"
        ]
      },
      {
        "move": "Pregúntale",
        "task": "Pregúntale por un edificio histórico de su ciudad: cuándo fue construido, por quién y qué le pasó después.",
        "phrases": [
          "¿Cuándo fue construido?",
          "¿Por quién fue restaurado?"
        ]
      },
      {
        "move": "Aclara",
        "task": "Lee una frase de tu nota con «al día siguiente» o «la semana siguiente» y pide a tu profesor que confirme que el día queda claro para el lector.",
        "phrases": [
          "¿Se entiende qué día es?",
          "¿Sería mejor nombrar el día?"
        ]
      }
    ],
    "bring": "Trae tu nota con las pasivas subrayadas y las referencias de tiempo y lugar marcadas en otro color."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "La estación de Bahía Blanca ___ (inaugurar, pretérito) en 1884.",
        "answers": [
          [
            "fue inaugurada"
          ]
        ],
        "why": "«La estación»: femenino singular."
      },
      {
        "type": "gap",
        "q": "Los resultados del concurso ___ (comunicar, futuro) por correo electrónico.",
        "answers": [
          [
            "serán comunicados"
          ]
        ],
        "why": "Futuro de «ser» en plural y participio masculino plural."
      },
      {
        "type": "gap",
        "q": "El lunes, en Neuquén, mi primo me dijo: «Ven mañana». Hoy es jueves y estoy en Bahía Blanca: Me pidió que ___ allá el martes.",
        "answers": [
          [
            "fuera",
            "fuese"
          ]
        ],
        "why": "No estoy en Neuquén: «venir» pasa a «ir»."
      },
      {
        "type": "choice",
        "q": "Hace un año, en su casa, Ana: «Esta casa la diseñó mi madre». ¿Cómo lo cuentas hoy en otra ciudad?",
        "options": [
          "Ana dijo que esta casa la había diseñado mi madre.",
          "Ana dijo que esa casa la diseñará su madre.",
          "Ana dijo que aquella casa la había diseñado su madre."
        ],
        "answer": 2,
        "why": "«Esta» pasa a «aquella» y «mi» a «su»."
      },
      {
        "type": "choice",
        "q": "¿En qué texto suena más natural «El puente fue reparado por el municipio»?",
        "options": [
          "En un informe sobre obras públicas.",
          "En un audio a tu mejor amiga.",
          "En una conversación en el colectivo."
        ],
        "answer": 0,
        "why": "La pasiva con «ser» es propia de textos informativos y formales."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿cuándo empiezan las visitas?",
        "audio": "La guía anunció el lunes que al día siguiente comenzarían las visitas para escuelas.",
        "voice": "es-AR-f",
        "options": [
          "El lunes.",
          "El martes.",
          "El domingo."
        ],
        "answer": 1,
        "why": "El día siguiente al lunes es el martes."
      },
      {
        "type": "error",
        "sentence": "Las paredes del taller fueron pintado por voluntarios.",
        "answers": [
          "Las paredes del taller fueron pintadas por voluntarios."
        ],
        "why": "El participio concuerda con «las paredes»."
      },
      {
        "type": "error",
        "sentence": "Hace cinco años mi jefe me dijo que hoy era mi último día.",
        "answers": [
          "Hace cinco años mi jefe me dijo que ese día era mi último día.",
          "Hace cinco años mi jefe me dijo que aquel día era mi último día."
        ],
        "why": "El «hoy» de hace cinco años ya no es el tuyo: «ese día» o «aquel día»."
      },
      {
        "type": "order",
        "words": [
          "El",
          "archivo",
          "está",
          "siendo",
          "ordenado",
          "por",
          "dos",
          "historiadoras."
        ],
        "why": "Pasiva continua con agente."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases: un hecho histórico de tu ciudad en pasiva con «ser» y algo que te dijo alguien allí hace tiempo, con las referencias ajustadas.",
        "model": "El teatro municipal fue inaugurado en 1913. Cuando lo visité de chica, la acomodadora me dijo que aquella noche cantaba una soprano famosa.",
        "checklist": [
          "La pasiva concuerda con su sujeto.",
          "Ajusto la referencia de tiempo al momento en que lo cuento."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo recalcular «hoy», «mañana», «ahora» y «esta semana» desde el día en que transmito un mensaje, y nombrar el día cuando hay riesgo de confusión.",
      "Puedo ajustar «aquí», «este», los posesivos y los verbos «venir/ir» y «traer/llevar» a mi lugar.",
      "Puedo usar la pasiva con «ser» en distintos tiempos, con concordancia y con agente cuando aporta información."
    ],
    "review": [
      "Mañana, toma un mensaje de voz que recibiste hace días y transmítelo por escrito con las referencias ajustadas.",
      "En tres días, lee una noticia y subraya cinco pasivas con «ser»; decide en cuáles el agente es necesario.",
      "Antes de la semana 12, reescribe dos frases de tu nota como si se las contaras a un amigo, sin pasiva."
    ]
  },
  "related": [
    {
      "path": "/gramatica/cambio-de-deicticos-aqui-alli-hoy",
      "label": "Clase: Cambio de deícticos: aquí/allí, hoy/ese día"
    },
    {
      "path": "/gramatica/pasiva-impersonal-informar",
      "label": "Clase: Pasiva perifrástica: ser + participio"
    }
  ]
};
