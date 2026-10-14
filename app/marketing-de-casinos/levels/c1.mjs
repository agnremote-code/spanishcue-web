// El Gran Meridiano · C1 · La ficha dorada: concesivas, subjuntivo en todos los tiempos, condicionales del pasado y registro coloquial rico
const scenes = {
  portero: {
    "title": "El portero que no olvida",
    "line": "Las fuentes del Strip todavía rugen a tu espalda cuando cruzas la puerta giratoria. Rocco, el portero de uniforme burdeos y botones dorados, lleva treinta años aquí, y la sonrisa se le borra de golpe al verte. «Por muchos años que hayan pasado, esa mirada la reconocería en cualquier parte. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
    "money": {
      "100": "Llegas en el autobús turístico con cien dólares y la idea de estirarlos hasta el amanecer. Rocco, por pura rutina, te indica dónde están las tragamonedas de un centavo, aunque a mitad de frase se le traba la lengua. «Las baratas, al fondo a la derecha… Perdone que me quede mirando. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
      "500": "Bajas de un taxi con quinientos dólares y muchas ganas de que la noche dé de sí. Rocco te dedica la sonrisa profesional que reserva a los turistas con un fin de semana por delante, pero se le borra antes de terminar el saludo. «Bienvenida al Gran Meridiano, señorita… Vaya. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
      "1000": "Con mil dólares en el bolso caminas como si la noche te debiera algo, y Rocco, que lleva treinta años leyendo carteras por la forma de andar, ya te ha calado. Se lleva la mano a la gorra, pero el gesto se le congela al verte la cara. «Disculpe, es que me ha recordado a alguien. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
      "10000": "Diez mil dólares en efectivo y un chófer que no ha parado de llamarte «señora». Rocco ya está avisando por radio al jefe de sala de que entra una jugadora seria, aunque corta la comunicación en cuanto te tiene delante. «Perdone, señorita, aquí hay caras que pesan más que el dinero. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
      "100000": "Llegas en una limusina que te ha mandado un anfitrión del casino, porque con cien mil dólares no se entra en Las Vegas: se desembarca. Dos botones se pelean por tu maleta y Rocco los aparta para abrirte él mismo, aunque al verte de cerca se queda clavado en el sitio. «Bienvenida… Dios mío. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
      "1000000": "Ya se ha corrido la voz: una mujer de rojo con un millón de dólares. En la entrada te esperan dos gerentes con flores, un fotógrafo y un par de tipos trajeados que fingen fumar sin prisa. Rocco se abre paso entre todos, te besa la mano y tarda en soltarla. «Con millón o sin él, la habría reconocido igual. Usted es la hija de Ernesto Duarte, ¿a que sí?»",
      "nada": "Te cuelas detrás de una pareja de recién casados, sin un peso en el bolso y con los tacones destrozados de tanto andar por el Strip. Rocco ya iba a pararte —a las que llegan así las detecta a un kilómetro— cuando te mira bien y se queda mudo. «Iba a decirle que aquí no se entra a mendigar, pero… Usted es la hija de Ernesto Duarte, ¿a que sí?»"
    },
    "options": [
      {
        "say": "Depende de quién lo pregunte y de cuánto esté dispuesto a contarme a cambio.",
        "reply": "Rocco se ríe por lo bajo, aunque la risa no le llega a los ojos. «Igualita que él: no regala nada, ni siquiera un sí»."
      },
      {
        "say": "Lo soy. Y si me ha reconocido tan rápido, supongo que se imagina a qué he venido.",
        "reply": "«Me lo temía desde que la vi bajar del taxi», murmura, mirando de reojo hacia las cámaras. «Aquí nadie viene por casualidad, y mucho menos un Duarte»."
      },
      {
        "say": "Pues sí, aunque confiaba en que el vestido rojo despistara un poco.",
        "reply": "«Ni con peluca y bigote, señorita», dice Rocco. «Su padre tampoco pasaba desapercibido, por mucho que se empeñara»."
      }
    ],
    "line2": "Sacas del bolso la ficha dorada con el grabado «Piso 3 · Medianoche». A Rocco se le va el color de la cara como si hubiera visto un fantasma. «Guárdela ahora mismo. Ojalá no me la hubiera enseñado aquí, delante de todo el mundo».",
    "options2": [
      {
        "say": "¿Quién quiere que yo esté aquí esta noche? No me diga que no lo sabe.",
        "reply": "«Lo que yo sepa o deje de saber me lo llevaré a la tumba», contesta. «Pregunte en recepción: allí todo se apunta, aunque no siempre con nombre»."
      },
      {
        "say": "Tranquilo, Rocco. No pienso meterlo en ningún lío.",
        "reply": "«Eso mismo me prometió su padre hace veinticinco años», suspira. «Y mírenos: él desaparecido y yo sin pegar ojo desde entonces»."
      },
      {
        "say": "Para ser una simple ficha, le ha cambiado la cara bastante, ¿no cree?",
        "reply": "«Simple, dice», resopla Rocco. «Con fichas como esa se han comprado silencios, señorita, y se han pagado entierros»."
      }
    ],
    "end": "Rocco te abre la puerta interior con una inclinación demasiado solemne, casi de despedida. Dentro, la recepción de mármol reluce bajo una lámpara de cristal enorme.",
    "talk": [
      "¿Por qué crees que a Rocco le cambia la cara al ver la ficha: miedo, culpa o algo que no se atreve a contar?",
      "¿Alguna vez alguien te ha reconocido por tu parecido con tus padres? ¿Te gustó o te incomodó?",
      "¿Qué rasgo de tu familia preferirías no haber heredado, por mucho que intentes disimularlo?",
      "Si te hubieras quedado treinta años en el mismo trabajo, ¿en qué persona crees que te habrías convertido?",
      "¿Hasta qué punto juzgamos a la gente por su aspecto nada más verla? ¿Te ha pasado a ti en ambos sentidos?"
    ],
    "words": [
      "¿a que sí?",
      "pasar desapercibido",
      "llevarse algo a la tumba",
      "no pegar ojo"
    ]
  },
  recepcion: {
    "title": "Una suite sin remitente",
    "line": "En la recepción todo es mármol, flores frescas y una lámpara de cristal que debe de pesar como un coche. Marisol teclea tu nombre, frunce el ceño y vuelve a teclearlo, por si acaso. «Qué raro. Usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
    "money": {
      "100": "Con cien dólares en el bolso preguntas por la habitación más barata, la de la torre vieja junto a la máquina de hielo. Marisol empieza a recitar las tarifas económicas, pero al buscar tu apellido se queda a media frase. «Olvídese de la torre vieja. Usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
      "500": "Traes quinientos dólares y una reserva barata que hiciste por internet a última hora. Marisol te pide el pasaporte, comprueba la reserva y arruga la frente como si el ordenador le estuviera gastando una broma. «Su habitación doble ha desaparecido del sistema. En su lugar, usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
      "1000": "Con mil dólares encima, lo primero que te ofrecen es la tarjeta del club de jugadores, porque aquí te registran antes de alojarte. Marisol empieza a rellenar el formulario y se para en seco. «Pues mire, ni siquiera le hace falta. Usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
      "10000": "El jefe de sala ya ha avisado de que llega una jugadora con diez mil dólares, y en Las Vegas eso se traduce en una mejora de habitación sin pedirla. Marisol te recibe con una sonrisa de manual y una sorpresa que no viene en ningún manual. «Iba a ofrecerle una habitación con vistas, pero alguien se me ha adelantado. Usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
      "100000": "Con cien mil dólares no haces cola: un anfitrión te lleva del brazo hasta un mostrador privado con champán y bombones. Marisol, sin embargo, parece desconcertada al mirar la pantalla. «Lo normal sería que la invitara la casa, pero esta vez no ha sido la casa. Usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
      "1000000": "Toda la recepción se pone firme cuando entras: la noticia del millón ha corrido más deprisa que tú. Un casino rival ya te ha mandado un ramo de rosas y el gerente suda como si le fuera la vida en ello. Marisol aparta las rosas con un gesto seco. «No se moleste en mirar ofertas. Usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»",
      "nada": "Te acercas al mostrador sin un dólar y con la esperanza de que, al menos, te dejen usar el baño. Marisol te mira con esa educación helada que se reserva a quien no va a gastar nada, pero teclea tu nombre por cumplir y se le cae el bolígrafo. «Vaya… usted tiene una suite reservada a su nombre desde hace semanas, y ya está pagada. ¿No sabía nada?»"
    },
    "options": [
      {
        "say": "Ni idea, aunque no seré yo quien se queje de que me mimen.",
        "reply": "Marisol sonríe a medias. «Haría bien en quejarse un poco, señorita. En esta casa, quien mima suele pasar la factura después»."
      },
      {
        "say": "No he reservado nada. Necesito saber quién la ha pagado, y cuanto antes.",
        "reply": "Marisol mira a ambos lados antes de contestar. «Tranquila, que no muerdo. Pero baje la voz: aquí hasta las flores tienen orejas»."
      },
      {
        "say": "¿Una suite? Con tal de que tenga jacuzzi y buenas vistas, no hago preguntas.",
        "reply": "«Jacuzzi, vistas a las fuentes y un mayordomo que tampoco las hace», recita Marisol. «Lo único que no tiene es remitente»."
      }
    ],
    "line2": "Marisol gira un poco la pantalla para que la veas. En la casilla del pagador solo aparece: «Cargo interno · Piso 3». «Por mucho que busque, no va a encontrar un nombre. Cuando arriba no quieren que se sepa quién paga, sencillamente no se sabe».",
    "options2": [
      {
        "say": "¿Y a usted nunca le ha picado la curiosidad de averiguarlo?",
        "reply": "«Una vez hice una pregunta de más», dice Marisol, bajando la vista. «Me pasaron al turno de noche durante dos años. Desde entonces, curiosidad, la justa»."
      },
      {
        "say": "Deme la llave. Ya me enteraré yo de quién me invita.",
        "reply": "Marisol te tiende una tarjeta dorada. «Me parece bien. Eso sí, si alguien llama a su puerta de madrugada, no abra sin preguntar antes»."
      },
      {
        "say": "Qué detalle tan siniestro. Me habría bastado con una nota.",
        "reply": "«Las notas se le pueden enseñar a la policía, señorita», susurra Marisol. «Una suite pagada, en cambio, solo se puede disfrutar»."
      }
    ],
    "end": "Te guardas la tarjeta de la suite como si quemara. Desde el pasillo de las tragamonedas llega un tintineo incesante de monedas y luces.",
    "talk": [
      "¿Por qué crees que quien ha pagado la suite no quiere dar la cara?",
      "¿Qué sientes cuando alguien te hace un regalo caro sin motivo aparente: ilusión o desconfianza?",
      "¿Has aceptado alguna vez un favor que luego te salió caro? ¿Qué aprendiste de aquello?",
      "¿Te inquietaría que alguien supiera muchas cosas de ti sin que tú supieras nada de esa persona? ¿Por qué?",
      "Si pudieras darte un capricho de lujo una sola noche, sin que nadie se enterara, ¿en qué te lo gastarías?"
    ],
    "words": [
      "dar la cara",
      "pasar la factura",
      "picarle a uno la curiosidad",
      "con tal de que"
    ]
  },
  tragamonedas: {
    "title": "El número de la suerte",
    "line": "En el pasillo de las tragamonedas, las luces parpadean y las máquinas cantan sin descanso. Doña Pilar, setenta años, un cigarrillo en los labios y un vaso de fichas en el regazo, te mira por encima de las gafas. «Ven aquí, guapa, que te vea bien. Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
    "money": {
      "100": "Cien dólares en las máquinas de un centavo dan para una hora de lucecitas y un par de cervezas aguadas. Doña Pilar ve cómo dudas ante los botones y menea la cabeza. «Ese no, que se come el dinero como un perro hambriento. Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
      "500": "Metes un billete de cien en la máquina y te prometes que los otros cuatro van a durar toda la noche. Doña Pilar se ríe por lo bajo, como quien ha oído esa promesa mil veces. «Eso decimos todas, guapa. Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
      "1000": "Te sientas en las máquinas de cinco dólares por tirada y enseguida aparece una camarera con tu segunda copa gratis. Doña Pilar te mira el bolso con ojo experto. «Mil dólares aquí no duran ni lo que un beso en un portal. Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
      "10000": "En la zona de alto límite, donde cada tirada cuesta cien dólares, un encargado te ha guardado sitio y te ha traído un cenicero de cristal. Doña Pilar, fiel a su pasillo de siempre, ni se inmuta cuando pasas. «Con diez mil te hacen la pelota hasta que se te acaban, hija. Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
      "100000": "El casino te ha preparado una sala privada de máquinas con camarero propio, pero tú prefieres el pasillo ruidoso de siempre. Doña Pilar te ve llegar escoltada y no se impresiona lo más mínimo. «Por mucho dinero que traigas, la máquina no sabe quién eres. Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
      "1000000": "Desde que se ha sabido lo del millón, te sigue medio pasillo: jubiladas que quieren que les toques la máquina, un vidente de la suerte y un tipo que jura ser tu primo. Doña Pilar los espanta con el bastón y te hace sitio a su lado. «¡Largo de aquí, buitres! Tú eres la hija de Ernesto, ¿no? Tu padre no perdía nunca. ¿Has venido a probar suerte tú también?»",
      "nada": "Te sientas en un taburete sin una sola ficha, y una camarera pasa de largo porque aquí las copas gratis son solo para quien juega. Doña Pilar te observa entre el humo y se le escapa una sonrisa. «Sin un peso y con esa cara… Tú eres la hija de Ernesto. Él también llegó sin nada, y aun así no perdía nunca. ¿Has venido a probar suerte tú también?»"
    },
    "options": [
      {
        "say": "A probar suerte y a que usted me cuente todo lo que sepa de él.",
        "reply": "Pilar suelta el humo despacio. «Todo, todo, no te lo cuento ni aunque me lo pidas de rodillas. Pero algo, quizá sí, si me haces compañía un rato»."
      },
      {
        "say": "No vengo a jugar. ¿Qué pasó la noche en que desapareció?",
        "reply": "«Pasó que ganó más de lo que el dueño estaba dispuesto a perder», dice Pilar sin apartar la vista de la pantalla. «Lo demás son cuentos de borrachos»."
      },
      {
        "say": "¿Que no perdía nunca? Entonces está claro que no he salido a él.",
        "reply": "Pilar se ríe con una tos ronca. «Eso dicen todos hasta que les toca. Y a los Duarte, tarde o temprano, siempre les toca»."
      }
    ],
    "line2": "Pilar da unos golpecitos con la uña en una máquina con el número 17 pintado en dorado. «Este era su número. Decía que, aunque a todo el mundo le pareciera un número cualquiera, a él le traía suerte. Si te soy sincera, nunca he llegado a entender por qué».",
    "options2": [
      {
        "say": "Pues hoy apuesto al 17. Si me sale mal, por lo menos sabré a quién echarle la culpa.",
        "reply": "«Así me gusta, con dos narices», dice Pilar, y te pone una ficha en la mano. «Pero no aquí. Ese número se juega en la ruleta»."
      },
      {
        "say": "Quizá mi padre se fiaba demasiado de los números y demasiado poco de la gente.",
        "reply": "Pilar se queda pensativa. «O al revés, cariño. Se fiaba de una sola persona, y esa persona no se merecía tanta confianza»."
      },
      {
        "say": "¿Y usted, Pilar? ¿Nunca le han entrado ganas de dejarlo?",
        "reply": "«Cada noche», contesta tirando de la palanca. «Y cada noche vuelvo. Será que aquí, por lo menos, las máquinas no me mienten a la cara»."
      }
    ],
    "end": "Doña Pilar vuelve a sus máquinas como quien reza un rosario. A lo lejos, la bola de la ruleta repiquetea y parece pronunciar tu nombre.",
    "talk": [
      "¿Qué crees que sabe Pilar de aquella noche que no se atreve a decir en voz alta?",
      "¿Tienes algún número, objeto o ritual de la suerte? ¿Te lo tomas en serio o medio en broma?",
      "¿Qué costumbre tuya sabes que no te conviene y, aun así, no consigues dejar?",
      "¿Crees que la suerte se hereda, se busca o simplemente aparece cuando le da la gana? ¿Por qué?",
      "¿Qué te parece más triste: alguien que juega sola cada noche o alguien que nunca se arriesga a nada?"
    ],
    "words": [
      "con dos narices",
      "salir a alguien",
      "tarde o temprano",
      "probar suerte"
    ]
  },
  ruleta: {
    "title": "Todo al diecisiete",
    "line": "Nico, el crupier, reparte las fichas con una elegancia casi aburrida. A su lado, un hombre de traje claro con un puro entre los dedos no te quita los ojos de encima. «Hagan sus apuestas», anuncia Nico, y luego se dirige a ti con media sonrisa: «¿Dónde quiere jugar la señorita?»",
    "money": {
      "100": "En la mesa de mínimo bajo no cabe un alfiler: turistas con gorra, parejas de luna de miel y tus cien dólares convertidos en un puñado de fichas. El hombre del traje claro, tan fuera de lugar como un esmoquin en la playa, te observa entre el humo de su puro. «Hagan sus apuestas», canta Nico. «¿Dónde quiere jugar la señorita?»",
      "500": "Cambias quinientos dólares por una torre de fichas rojas, suficiente para sentirte jugadora sin jugarte el alquiler. Nico te hace un hueco junto a un hombre de traje claro que fuma un puro y no te quita los ojos de encima. «Hagan sus apuestas», anuncia el crupier. «¿Dónde quiere jugar la señorita?»",
      "1000": "Pones mil dólares en la mesa y, como por arte de magia, el jefe de mesa aparece a tu lado ofreciéndote una tarjeta de jugadora y una copa. El hombre del traje claro suelta el humo con cierto desdén: «Mil. Qué entrañable». Nico ni pestañea. «Hagan sus apuestas. ¿Dónde quiere jugar la señorita?»",
      "10000": "Diez mil dólares en fichas y la mesa cambia de ambiente: suben el mínimo, desaparecen los curiosos y llega un champán que nadie ha pedido. El hombre del traje claro deja el puro en el cenicero, de pronto muy interesado. «Ahora sí que empezamos a entendernos», murmura. Nico extiende la mano sobre el tapete. «Hagan sus apuestas. ¿Dónde quiere jugar la señorita?»",
      "100000": "Con cien mil dólares te han reservado la mesa entera tras un cordón de terciopelo. El jefe de sala en persona te aparta la silla, y el único al que no han echado es el hombre del traje claro, que te ofrece fuego con un mechero de oro. Nico hace girar la rueda. «Hagan sus apuestas. ¿Dónde quiere jugar la señorita?»",
      "1000000": "Un millón en placas doradas sobre el tapete y medio casino se ha parado a mirar: camareras, guardias, incluso dos señores de la Familia que fingen no conocerse. El hombre del traje claro es el único que parece tranquilo, como si llevara años esperándote. Nico, pálido, traga saliva. «Hagan sus apuestas. ¿Dónde quiere jugar la señorita?»",
      "nada": "No te queda ni una ficha, pero te quedas mirando la ruleta como quien mira a un antiguo amante. Nico está a punto de pedirte que dejes sitio a los que juegan cuando el hombre del traje claro, puro en mano, te lanza una ficha por encima del tapete. «Esta corre de mi cuenta». Nico se encoge de hombros. «Hagan sus apuestas. ¿Dónde quiere jugar la señorita?»"
    },
    "options": [
      {
        "say": "Todo al 17. Si he de perder, que sea a lo grande.",
        "reply": "El hombre del puro arquea una ceja. «Valiente», murmura. Nico coloca la torre de fichas sobre el número sin decir nada, aunque le tiembla un poco la mano."
      },
      {
        "say": "Solo una ficha al 17. El resto me lo guardo, por si las moscas.",
        "reply": "«Sensata», comenta el del puro, soltando el humo. «Aunque me da que, en el fondo, se muere de ganas de jugárselo todo»."
      },
      {
        "say": "¿Usted qué haría en mi lugar, caballero? Tiene pinta de entender de esto.",
        "reply": "El hombre sonríe con unos dientes demasiado blancos. «Yo, en su lugar, no le pediría consejo a un desconocido. Pero, ya que se empeña, el 17 nunca me ha traído nada bueno»."
      }
    ],
    "line2": "La bola da vueltas, rebota, parece decidirse y cae en el 17 negro. La mesa estalla. El hombre del puro aplaude despacio. «Si yo hubiera tenido esa suerte hace veinticinco años, otro gallo me habría cantado. Aunque, claro, el último que ganó así en esta casa acabó esfumándose».",
    "options2": [
      {
        "say": "¿Eso ha sido una advertencia o es que le gusta asustar a las desconocidas?",
        "reply": "«Las dos cosas, querida», responde, y apaga el puro con calma. «En Las Vegas, asustar a tiempo es una forma de cortesía»."
      },
      {
        "say": "Mi padre no se esfumó por voluntad propia. Alguien lo empujó, y usted lo sabe.",
        "reply": "El hombre deja de sonreír por un segundo. «Cuidado con lo que afirma en voz alta. En esta casa, hasta las paredes cobran comisión»."
      },
      {
        "say": "Ya que he ganado, invito yo. Así me cuenta su versión con calma.",
        "reply": "«Acepto la copa», dice, poniéndose en pie, «pero mi versión no se vende tan barata. Quizá otra noche, si para entonces sigue usted entera»."
      }
    ],
    "end": "Nico empuja hacia ti una montaña de fichas que de repente te parece demasiado pesada. Cuando levantas la vista, el hombre del puro ya se ha perdido entre la gente.",
    "talk": [
      "¿Quién crees que es el hombre del puro y qué relación pudo tener con el padre de Valentina?",
      "¿Cuál es la decisión más arriesgada que has tomado? Si hubieras sabido cómo iba a acabar, ¿la habrías tomado igual?",
      "¿Eres de las personas que van a por todas o de las que siempre se guardan algo? ¿De dónde crees que te viene?",
      "¿Crees que ganar mucho dinero de golpe cambia a la gente o solo saca a la luz lo que ya llevaba dentro?",
      "¿Qué sientes cuando alguien te mira demasiado en público: halago, incomodidad o curiosidad?"
    ],
    "words": [
      "otro gallo me habría cantado",
      "por si las moscas",
      "no quitarle los ojos de encima a alguien",
      "esfumarse"
    ]
  },
  blackjack: {
    "title": "El contador de cartas",
    "line": "En la mesa de blackjack, Sam Ortega juega con cara de no haber roto un plato en su vida, aunque lleva la cuenta de cada carta que sale. Cuando te sientas a su lado, habla sin mover los labios. «No te des la vuelta. Un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
    "money": {
      "100": "Te sientas en la mesa de diez dólares con tus cien, lo justo para diez manos si la suerte no te da la espalda. Sam Ortega, con cara de contable aburrido, juega a tu lado y apenas te mira. «Pide carta, no te plantes con doce. Y no te des la vuelta: un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
      "500": "Con quinientos dólares te permites la mesa de veinticinco, donde los jugadores ya no se ríen tanto. Sam Ortega, que lleva la cuenta de cada carta con cara de despistado, te susurra sin girar la cabeza. «Buena entrada. Ahora escucha: un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
      "1000": "Mil dólares en la mesa de cincuenta y el jefe de mesa ya ha apuntado tu nombre en su libreta. Sam Ortega, sentado a tu izquierda, no levanta la vista del mazo. «Te han fichado, igual que a mí. Pero no son los únicos: un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
      "10000": "Con diez mil dólares te ofrecen una mesa privada, pero tú eliges sentarte junto al hombre al que media seguridad no deja de mirar. Sam Ortega pide carta y habla bajo, casi sin aire. «Mala elección de vecino, guapa. Y te diré otra cosa: un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
      "100000": "Te han cerrado una mesa de alto límite solo para ti, con crupier y camarera propios, y aun así haces que dejen sentarse a Sam Ortega. Él lo agradece con un gesto mínimo y vigila de reojo los espejos del techo. «Con cien mil, todo el mundo te mira. Pero uno te mira demasiado: un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
      "1000000": "Con un millón en juego, el casino ha puesto a tres guardias detrás de tu silla y un gerente que te pregunta cada dos minutos si estás cómoda. Sam Ortega, que se ha colado en la mesa con todo el descaro del mundo, te habla sin mover los labios. «Tienes más escolta que un presidente, y ninguno se ha dado cuenta: un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»",
      "nada": "Te sientas a mirar la partida sin un dólar, y el crupier ya te lanza esa mirada que reserva a los mirones. Sam Ortega, el contador de cartas, te deja una ficha al lado como si fuera una propina y te habla sin mover los labios. «Haz como que juegas. Un tipo de traje gris te viene siguiendo desde la ruleta. ¿Tienes idea de por qué?»"
    },
    "options": [
      {
        "say": "Será que el rojo me sienta de maravilla. ¿Tú también te has fijado?",
        "reply": "Sam pide carta con un toque de nudillos. «Me fijo en todo, guapa. Y te aseguro que ese no te mira el vestido; te mira el bolso»."
      },
      {
        "say": "Ni idea. ¿Sabes para quién trabaja?",
        "reply": "«Para alguien que nunca pisa la planta», responde Sam. «Y en este casino, quien no baja es quien manda»."
      },
      {
        "say": "¿Y a ti quién te vigila? Porque media seguridad no te quita ojo.",
        "reply": "Sam esboza una sonrisa torcida. «A mí me tienen fichado desde hace años. Que me vigilen ya es casi un cumplido»."
      }
    ],
    "line2": "Sam se inclina un poco hacia ti. «Hagamos un trato. Tú entretienes dos minutos al calvo de seguridad y yo te cuento lo que vi aquí hace veinticinco años. Si aquella noche no me hubieran echado del casino, sabría mucho más, pero algo sé».",
    "options2": [
      {
        "say": "Trato hecho. Entretener a un hombre aburrido se me da de maravilla.",
        "reply": "«No lo dudo», ríe Sam. «Es el de la corbata azul. Y, por lo que más quieras, no le hables de cartas»."
      },
      {
        "say": "Primero un adelanto. No me fío de nadie que se gane la vida contando.",
        "reply": "Sam suspira. «Está bien. Aquella noche, antes de la partida grande, tu padre se dejó ganar adrede un par de veces. Quería que el dueño se creyera invencible. ¿Te vale?»"
      },
      {
        "say": "Si me pillan, diré que me obligaste tú, que conste.",
        "reply": "«Me parece justo», dice Sam, «aunque nadie se lo va a creer: tienes cara de llevar la voz cantante hasta cuando duermes»."
      }
    ],
    "end": "Te levantas de la mesa con la sensación de haber firmado algo sin leer la letra pequeña. Desde la mesa de dados llegan los gritos de una despedida de soltero.",
    "talk": [
      "¿Por qué crees que Sam quiere ayudar a Valentina: por simpatía, por interés o por venganza?",
      "¿Contar cartas te parece hacer trampa o simplemente ser más listo que el casino? ¿Dónde pones tú el límite?",
      "¿Alguna vez has cerrado un trato del que te arrepentiste nada más aceptarlo? ¿Qué pasó?",
      "¿Cómo reaccionas cuando sientes que alguien te controla, ya sea en el trabajo o en una relación?",
      "¿En quién confías más: en quien reconoce sus trampas o en quien parece no tener ninguna?"
    ],
    "words": [
      "no haber roto un plato",
      "tener fichado a alguien",
      "adrede",
      "llevar la voz cantante"
    ]
  },
  dados: {
    "title": "Un siete para el novio",
    "line": "La mesa de dados es un manicomio: gritos, chupitos y una despedida de soltero que perdió la vergüenza hace horas. Kike, el novio, con una corona de cartón y la camisa empapada, te pone los dados en la mano. «¡Rubia, tú tienes pinta de traer suerte! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»",
    "money": {
      "100": "Te unes a la mesa de dados con cien dólares y la intención de apostar de cinco en cinco, como una señora prudente. Kike, el novio, con su corona de cartón, te descubre y te arrastra hasta el centro. «¡Nada de cinco en cinco! ¡Hoy se apuesta como si no hubiera un mañana! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»",
      "500": "Llegas con quinientos dólares justo cuando la despedida de soltero está perdiendo hasta la camisa. Kike, el novio, ve las fichas en tu mano y se le ilumina la cara. «¡Por fin alguien con dinero de verdad! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»",
      "1000": "Pones mil dólares en la línea de pase y, de pronto, todos los amigos del novio quieren ser tus amigos. Kike, con la corona torcida y los ojos brillantes, te ofrece su vaso, aunque no sabes muy bien qué lleva. «¡Tú vas en serio, rubia! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»",
      "10000": "Cuando ven tus diez mil dólares en fichas, el crupier sube el mínimo y la despedida de soltero se queda muda medio segundo. Luego Kike, el novio, se arrodilla delante de ti como si fueras una aparición. «¡Tú eres la señal que estaba esperando! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»",
      "100000": "Con cien mil dólares, el jefe de sala te ha ofrecido una mesa de dados privada, pero a ti te apetece el jaleo. La despedida te recibe como a una estrella de rock, y Kike, el novio, te besa la mano con un respeto muy borracho. «¡Cásate conmigo en lugar de con Vanesa! Y si no, por lo menos, ¿me tiras los dados, que mañana me caso y necesito un milagro?»",
      "1000000": "La noticia del millón ha llegado hasta la mesa de dados, y la despedida de soltero ha decidido que eres su diosa. Te reciben con una ola, el padrino llora y alguien propone hacerte un altar con vasos de plástico. Kike, el novio, te pone los dados en la mano con veneración. «¡Con un millón no hace falta suerte, pero a mí sí! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»",
      "nada": "Te acercas a la mesa de dados sin un dólar, solo porque el jaleo se oye desde la otra punta del casino. Kike, el novio, te ve con las manos vacías y te pone en ellas los dados y un chupito. «¡Tú no tienes ni para una ficha, pero tienes cara de suerte, rubia! ¿Me tiras los dados, que mañana me caso y necesito un milagro?»"
    },
    "options": [
      {
        "say": "Te los tiro, pero si ganas, la mitad es para mí. En esta vida nada sale gratis.",
        "reply": "Kike se lleva las manos a la cabeza. «¡Qué morro! ¡Ni mi futura suegra negocia así! Venga, vale, trato hecho»."
      },
      {
        "say": "¿Un milagro para ganar o para no casarte? Aclárate, hombre.",
        "reply": "Sus amigos se parten de risa. Kike se queda serio un segundo. «Para las dos cosas, si puede ser. Pero empieza por los dados»."
      },
      {
        "say": "Vale, pero luego no me eches la culpa si sale mal.",
        "reply": "«¡Si sale mal, la culpa es del padrino, que eligió la mesa!», grita Kike, y el padrino levanta el vaso como quien acepta su destino."
      }
    ],
    "line2": "Soplas los dados, los lanzas y sale un siete. La mesa revienta en aplausos, alguien te levanta en brazos y otro llora de alegría. En medio del jaleo, un invitado muy sobrio te mete en la mano una caja de cerillas: «Salón Esmeralda». «Por si le interesa saber algo más de su padre», te dice al oído antes de desaparecer.",
    "options2": [
      {
        "say": "¡Oye, espera! ¿Quién eres tú?",
        "reply": "Kike te abraza sin dejarte avanzar. «¡Déjalo, que ese no es de los nuestros! Bueno, creo. Iba con nosotros desde el aeropuerto y nadie sabe cómo se llama»."
      },
      {
        "say": "Kike, ¿ese hombre venía con ustedes o se ha colado?",
        "reply": "Kike entorna los ojos, haciendo un esfuerzo enorme. «Ahora que lo preguntas… pensaba que era el primo de alguien. O el conductor de la limusina. Ni idea»."
      },
      {
        "say": "Unas cerillas con un nombre. Esto huele más a cita que a regalo.",
        "reply": "Kike te guiña un ojo, tambaleándose. «En Las Vegas todo huele a cita, rubia. Hasta las cerillas»."
      }
    ],
    "end": "Te escabulles entre abrazos y chupitos con las cerillas apretadas en el puño. Al fondo, tras unos barrotes dorados, la caja del casino espera en silencio.",
    "talk": [
      "¿Qué crees que buscaba el invitado misterioso al darle las cerillas a Valentina?",
      "¿Para qué sirven, en tu opinión, las despedidas de soltero: para despedirse de algo o para liarla una última vez?",
      "¿Cuál ha sido la noche más loca de tu vida? ¿Qué parte contarías y qué parte preferirías que nadie supiera?",
      "¿Dejarías que un desconocido decidiera algo importante por ti, aunque solo fuera tirar unos dados? ¿Por qué?",
      "¿Te casarías, o te habrías casado, sin estar del todo seguro? ¿Qué crees que pesa más: el miedo o la ilusión?"
    ],
    "words": [
      "¡qué morro!",
      "partirse de risa",
      "tener pinta de",
      "aclararse"
    ]
  },
  caja: {
    "title": "La ficha que no se cambia",
    "line": "Tras un cristal blindado y unos barrotes dorados, Dolores cuenta billetes sin levantar la cabeza, como si el dinero la aburriera. Deslizas la ficha dorada por la bandeja. Ella la mira, pero no la toca. «Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
    "money": {
      "100": "Vienes a cambiar tus últimas fichas de cinco dólares, que apenas suman cien, y aprovechas para dejar también la ficha dorada en la bandeja. Dolores cuenta las pequeñas con desgana y aparta la dorada como si fuera una moneda falsa. «Las de cinco, sí. Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
      "500": "Dejas en la bandeja una torre de fichas rojas por valor de quinientos dólares y, encima de todo, la ficha dorada. Dolores se pone las gafas, separa la dorada con la punta del bolígrafo y te devuelve el resto en billetes nuevos. «Lo suyo está aquí. Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
      "1000": "Con mil dólares que cambiar, Dolores te pide la tarjeta de jugadora antes de abrir el cajón, porque aquí hasta el último billete deja rastro. Cuando ve la ficha dorada mezclada con las demás, se le endurece la cara. «Las demás, sin problema. Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
      "10000": "Diez mil dólares en efectivo exigen papeles: Dolores te pide el pasaporte y te recuerda, con voz de funeral, que a partir de cierta cantidad hay que informar al fisco. Luego ve la ficha dorada y se olvida de los papeles. «Lo del fisco puede esperar. Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
      "100000": "Con cien mil dólares te han abierto una ventanilla privada, y un gerente te ofrece una línea de crédito con una sonrisa de vendedor de coches usados. Dolores, en cambio, sigue igual de seria cuando ve aparecer la ficha dorada. «Su crédito se lo arregla el gerente. Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
      "1000000": "Para cambiar un millón de dólares han cerrado la caja al público y han traído a dos guardias armados. Dolores cuenta los fajos sin inmutarse, hasta que entre ellos aparece la ficha dorada y, por primera vez en toda la noche, le tiembla el pulso. «Un millón lo cambio con los ojos cerrados. Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»",
      "nada": "Te acercas a la caja sin nada que cambiar, solo con la ficha dorada, y Dolores ni siquiera levanta la vista de sus billetes. Cuando la deslizas por la bandeja, se le escapa un suspiro. «Ni un dólar en el bolso y viene con esto… Esta ficha no se cambia aquí. Solo arriba. ¿Desea cambiar alguna otra cosa?»"
    },
    "options": [
      {
        "say": "¿Y no podría hacer una excepción conmigo? Le prometo portarme bien.",
        "reply": "Dolores levanta por fin la vista. «Señorita, aquí las excepciones se pagan caras, y portarse bien no ha salvado nunca a nadie»."
      },
      {
        "say": "Nada más, gracias. Pero ¿qué quiere decir exactamente «arriba»?",
        "reply": "«Arriba es arriba», contesta Dolores, impasible. «Y quien tenga que explicárselo no trabaja en una ventanilla»."
      },
      {
        "say": "No, nada más. Pero usted ya había visto esta ficha antes, ¿verdad?",
        "reply": "Dolores esconde las manos bajo el mostrador. «Una vez, cuando yo era joven y todavía me temblaban las manos», admite. «Y la traía alguien con su misma manera de sonreír»."
      }
    ],
    "line2": "Dolores te devuelve la ficha empujándola con un bolígrafo, como si le diera asco o miedo. «Se lo digo porque me cae bien, y eso no me pasa a menudo: esa ficha no vale dinero. Puede que sea una invitación… o puede que sea una factura».",
    "options2": [
      {
        "say": "¿Y cómo voy a saber cuál de las dos es?",
        "reply": "«Fíjese en cómo la reciban allí arriba», dice Dolores. «Si le ofrecen una copa, es invitación. Si le ofrecen una silla y cierran la puerta, es factura»."
      },
      {
        "say": "¿Usted cree que mi padre debería haberse ido antes?",
        "reply": "Dolores tarda en contestar. «Su padre se fue justo a tiempo, señorita. Otros que se quedaron no han vuelto a ver la luz del día»."
      },
      {
        "say": "Con esa voz, Dolores, debería leer las noticias en la radio.",
        "reply": "«Lo intenté», responde sin sonreír. «Me dijeron que daba demasiado miedo, incluso leyendo el parte del tiempo»."
      }
    ],
    "end": "Guardas la ficha en el fondo del bolso, que ahora parece pesar el doble. A unos pasos, el piano del bar central suena como una invitación mucho más amable.",
    "talk": [
      "¿Qué secretos crees que ha visto pasar Dolores por esa ventanilla en tantos años?",
      "¿Has visto alguna vez a alguien perder algo que no podía permitirse perder? ¿Cómo te sentiste?",
      "¿Por qué crees que hablar de dinero con la familia o con la pareja resulta tan incómodo?",
      "¿Qué piensas de la gente que nunca sonríe en el trabajo: es profesionalidad o se está protegiendo?",
      "Si tuvieras que empeñar algo para salir de un apuro, ¿qué venderías primero y qué no venderías jamás?"
    ],
    "words": [
      "portarse bien",
      "caer bien",
      "salir de un apuro",
      "empeñar"
    ]
  },
  bar: {
    "title": "El bolero de Ernesto",
    "line": "En el bar central, Leo agita la coctelera con un ritmo que parece de tango, mientras Chet, al piano, toca algo suave con un cigarrillo apagado en la boca. Leo te pone una servilleta delante. «Buenas noches, preciosa. Aquí cada cóctel cuenta una historia. ¿Qué te apetece tomar?»",
    "money": {
      "100": "Con cien dólares sabes que cada cóctel de veinte es un lujo, así que miras la carta como quien mira el menú de un restaurante carísimo. Leo, sin dejar de agitar la coctelera, te lee el pensamiento. «Tranquila, que si juegas en la máquina de la barra, la copa te sale gratis. ¿Qué te apetece tomar?»",
      "500": "Llegas a la barra con quinientos dólares y ganas de una copa que esté a la altura de la noche. Leo te pone una servilleta delante con una floritura y Chet, al piano, te dedica dos notas de bienvenida. «Una dama con pinta de celebrar algo. ¿Qué te apetece tomar?»",
      "1000": "Con mil dólares en fichas a la vista, la camarera ya te ha preguntado dos veces si necesitas algo y el pianista ha empezado a mirarte. Leo aparta a un cliente pesado para atenderte primero. «Las que juegan fuerte no hacen cola en mi barra. ¿Qué te apetece tomar?»",
      "10000": "Un anfitrión del casino te acompaña hasta la barra y le dice a Leo que todo lo tuyo va a cuenta de la casa: con diez mil dólares en juego, hasta el whisky más caro sale gratis. Leo baja de la estantería alta una botella que no enseña a cualquiera. «Para ti, lo bueno. ¿Qué te apetece tomar?»",
      "100000": "Con cien mil dólares, el casino ha reservado la esquina del bar solo para ti, y Chet ha recibido una propina generosa para tocar lo que pidas. Leo te sirve agua con gas en una copa de cristal tallado, por si acaso. «Aquí todo es gratis para ti, incluso mis consejos. ¿Qué te apetece tomar?»",
      "1000000": "Desde que se sabe lo del millón, el bar entero está pendiente de ti: un jeque te ha mandado champán, una estrella de la tele quiere fotos y el gerente vigila que nadie te moleste. Leo aparta las botellas regaladas y te mira con calma. «Tienes medio bar a tus pies, pero la copa la eliges tú. ¿Qué te apetece tomar?»",
      "nada": "Te sientas en la barra sin un dólar, esperando que alguien te invite o, al menos, que nadie te eche. Leo te pone delante un vaso de agua con hielo y limón, como hace con los que están sin blanca, y luego te sonríe de verdad. «La primera corre de mi cuenta, por esa cara de pena. ¿Qué te apetece tomar?»"
    },
    "options": [
      {
        "say": "Algo fuerte que me haga olvidar, aunque sea solo un rato.",
        "reply": "Leo mezcla tequila, café y un toque de canela. «Olvidar no te lo garantizo, cariño. Pero con esto, por lo menos, dejarás de pensar tan alto»."
      },
      {
        "say": "Lo mismo que tomaba Ernesto Duarte, si es que te acuerdas.",
        "reply": "Leo se queda quieto con la coctelera en el aire. «Ron añejo con hielo y una piel de limón que mordía al final», dice por fin. «Llevaba veinticinco años sin prepararlo»."
      },
      {
        "say": "Prepárame lo que quieras. Esta noche me dejo llevar.",
        "reply": "«Frase peligrosa en Las Vegas», sonríe Leo, y te sirve algo rosa con champán. «Se llama La Segunda Oportunidad. Pocos la piden; casi nadie se la merece»."
      }
    ],
    "line2": "Sin que nadie se lo pida, Chet cambia de canción y empieza un bolero antiguo. Leo deja de agitar. «Esa era la canción de tu padre», dice Chet sin dejar de tocar. «La tocaba siempre antes de la última mano. Me pidió que, si algún día no volvía, se la tocara a quien viniera preguntando por él».",
    "options2": [
      {
        "say": "O sea, que sabía que a lo mejor no volvía… y aun así subió.",
        "reply": "Chet asiente despacio. «Por muy listo que fuera, tu padre era incapaz de dejar una partida a medias. Unos lo llaman valor; yo lo llamo terquedad»."
      },
      {
        "say": "¿Qué pasó exactamente en esa última mano, Chet?",
        "reply": "«Eso pregúntaselo al Holandés, en el Salón Esmeralda», contesta Chet. «Él estaba en la mesa. Yo solo ponía la música»."
      },
      {
        "say": "Tócala otra vez, por favor. Me hace más falta que la copa.",
        "reply": "Chet vuelve al principio con una sonrisa triste. «Tu padre decía exactamente lo mismo. Parece que en tu familia las canciones se heredan»."
      }
    ],
    "end": "Terminas la copa a sorbos lentos, con la melodía todavía en la piel. Desde el segundo piso llega el rugido de las pantallas de las apuestas deportivas.",
    "talk": [
      "¿Por qué crees que Ernesto quería que esa canción sonara para quien viniera a buscarlo?",
      "¿Hay alguna canción que te traiga un recuerdo tan fuerte que prefieras no escucharla? ¿Qué historia hay detrás?",
      "¿Por qué crees que a veces nos sinceramos más con un camarero o un desconocido que con nuestra propia familia?",
      "¿Cómo te cambia el alcohol en las noches importantes: te da valor, te hace hablar de más o te pone melancólico?",
      "Si supieras que mañana vas a desaparecer, ¿a quién le dejarías una canción y por qué esa?"
    ],
    "words": [
      "dejarse llevar",
      "dejar a medias",
      "a sorbos",
      "sincerarse"
    ]
  },
  apuestas: {
    "title": "Ramiro lo apuesta todo",
    "line": "En la sala de apuestas deportivas, las pantallas gigantes muestran carreras de caballos, partidos de fútbol y caras desencajadas. Ramiro, con la corbata deshecha, se come las uñas delante del partido del Tijuana. «Lo he apostado todo, señorita: el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
    "money": {
      "100": "Apuestas veinte dólares a un caballo con nombre bonito y guardas el resto de tus cien para la cena. Ramiro, a tu lado, mira tu boleto con ternura y el suyo con pánico. «Veinte dólares… qué envidia de prudencia. Yo lo he apostado todo: el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
      "500": "Con quinientos dólares te animas a apostar al fútbol y te sientas junto a Ramiro, que suda frente al partido del Tijuana. Él ve tu boleto y suelta una risa nerviosa. «Usted juega para divertirse. Yo no: lo he apostado todo, el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
      "1000": "Mil dólares a un partido y el encargado de la sala ya te ofrece un sillón de cuero y un perrito caliente gratis. Ramiro, desde el sillón de al lado, te mira como a una compañera de sufrimiento. «Mil, ¿eh? Pues yo lo he apostado todo: el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
      "10000": "Diez mil dólares a un solo resultado y el jefe de la sala te pone una pantalla privada con el partido que elijas. Ramiro, que lo ve todo desde su silla de plástico, se acerca a ti como a una señal del cielo. «Usted puede permitirse perder. Yo no: lo he apostado todo, el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
      "100000": "Con cien mil dólares, la sala de apuestas te reserva un palco con camarero, y los corredores te llaman por tu nombre. Ramiro se cuela en el palco con la excusa de pedirte fuego. «Perdone, es que necesito hablar con alguien antes de que me dé algo. Lo he apostado todo: el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
      "1000000": "Se ha corrido la voz de que la mujer del millón está en la sala, y los apostadores te siguen como si supieras los resultados de antemano. Ramiro se arrodilla delante de ti, medio en broma y medio en serio. «Dígame a quién le apuesta usted y la sigo. Yo ya lo he apostado todo: el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»",
      "nada": "Te sientas en la sala de apuestas solo para ver los partidos, porque no tienes ni para un boleto. Ramiro, al verte sin dinero, te ofrece la mitad de su bocadillo como quien comparte una trinchera. «Al menos usted no tiene nada que perder. Yo lo he apostado todo: el coche, los ahorros y el reloj de mi abuelo. ¿Usted cree que estoy loco?»"
    },
    "options": [
      {
        "say": "Un poco, pero me encantan los hombres que se la juegan.",
        "reply": "Ramiro se pone colorado hasta las orejas. «Pues si gana el Tijuana, la invito a cenar. Y si pierde… me invita usted a mí, por caridad»."
      },
      {
        "say": "Loco no, Ramiro: se ha pasado de la raya. Eso ya no es apostar.",
        "reply": "«Lo sé», suspira, «pero cuando uno empieza a perder, parar se vuelve imposible. Es como querer frenar cuesta abajo y sin frenos»."
      },
      {
        "say": "Depende. ¿Quién se queda con el reloj si pierde?",
        "reply": "Ramiro traga saliva. «Un señor del piso 3. En este casino, todo lo que se pierde acaba allí arriba, tarde o temprano»."
      }
    ],
    "line2": "En la pantalla, el Tijuana falla un penalti en el último minuto. Ramiro se tapa la cara, pero al rato te mira con una calma extraña. «¿Sabe qué? Aquí todo el mundo apuesta algo. Incluso el dueño. Dicen que hace años se jugó el casino entero… y que no supo perder».",
    "options2": [
      {
        "say": "Quien apuesta lo que no quiere perder suele acabar haciendo trampas.",
        "reply": "Ramiro te señala con el dedo. «¡Ahí le ha dado! El viejo Montalbán firma lo que haga falta… pero pagar ya es otra historia»."
      },
      {
        "say": "¿Y quién le ganó al dueño? Cuéntemelo antes de que empiece otro partido.",
        "reply": "«Un crupier con más valor que cabeza», susurra Ramiro. «Y ahora que la miro bien, tenía sus mismos ojos»."
      },
      {
        "say": "Venga, Ramiro, déjelo por hoy y lo invito a una copa.",
        "reply": "Ramiro duda y vuelve a mirar la pantalla. «Se lo agradezco de corazón. Pero ahora empieza uno de la liga japonesa, y esta vez lo tengo clarísimo»."
      }
    ],
    "end": "Dejas a Ramiro rezándole a la pantalla. Al fondo del pasillo, una puerta verde con letras discretas anuncia: «Salón Esmeralda».",
    "talk": [
      "¿Qué te parece que el propio dueño del casino se jugara una vez todo lo que tenía?",
      "¿Conoces a alguien enganchado al juego, al trabajo o a una relación? ¿Cuándo te diste cuenta de que ya no era normal?",
      "¿Qué has arriesgado tú en la vida que no fuera dinero: una relación, un trabajo, tu orgullo?",
      "¿Por qué crees que hay personas que solo se sienten vivas cuando están a punto de perderlo todo?",
      "¿Qué te cuesta más: decirle a un amigo que tiene un problema o reconocer que el problema lo tienes tú?"
    ],
    "words": [
      "jugársela",
      "pasarse de la raya",
      "ponerse colorado",
      "tenerlo clarísimo"
    ]
  },
  poker: {
    "title": "La mano que lo cambió todo",
    "line": "El Salón Esmeralda huele a tapete verde, a whisky caro y a derrotas que nadie confiesa. El Holandés, con gafas oscuras aunque esté bajo techo y sea de noche, baraja sin mirar las cartas. «Señorita Duarte. Llevo años esperando que alguien de su familia se sentara en esa silla. ¿Va a jugar o solo ha venido a hacer preguntas?»",
    "money": {
      "100": "Con cien dólares no llegas ni a la mitad de la inscripción del torneo, así que te quedas mirando desde la barandilla. El Holandés levanta la cabeza, como si te hubiera olido, y señala la silla vacía a su lado. «Para usted no hay inscripción, señorita Duarte. ¿Va a jugar o solo ha venido a hacer preguntas?»",
      "500": "Pagas quinientos dólares de inscripción y te sientas en la mesa del torneo con una pila de fichas modesta y el corazón a mil. El Holandés, frente a ti, baraja tras unas gafas oscuras que no dejan adivinar nada. «Buena entrada, señorita Duarte. ¿Va a jugar o solo ha venido a hacer preguntas?»",
      "1000": "Mil dólares te dan una buena silla en la mesa de efectivo, entre un dentista de Texas y un chico con capucha que no abre la boca. El Holandés, en la cabecera, deja de barajar en cuanto oye tu apellido. «Duarte. Hacía tiempo que nadie se sentaba aquí con ese nombre. ¿Va a jugar o solo ha venido a hacer preguntas?»",
      "10000": "Con diez mil dólares te invitan a la mesa de alto límite, donde las fichas son negras y nadie sonríe. El Holandés te observa en silencio mientras el resto de jugadores empieza a ponerse nervioso. «Ya no se juega a lo pequeño, ¿eh, señorita Duarte? ¿Va a jugar o solo ha venido a hacer preguntas?»",
      "100000": "Con cien mil dólares han vaciado la mesa principal para ti, y dos jugadores profesionales esperan, educadísimos, a que te sientes. El Holandés es el único que no se ha puesto de pie. «A su padre también le hacían reverencias, y no le sirvieron de nada. ¿Va a jugar o solo ha venido a hacer preguntas?»",
      "1000000": "Un millón de dólares sobre el tapete verde y el Salón Esmeralda se llena de curiosos, de gerentes y de un par de hombres de la Familia que no se pierden detalle. El Holandés aparta las fichas de un empujón, como si le estorbaran. «Con eso se compra media sala, señorita Duarte, pero no lo que yo sé. ¿Va a jugar o solo ha venido a hacer preguntas?»",
      "nada": "Entras en el Salón Esmeralda sin una ficha y el encargado ya se acerca para acompañarte a la salida. El Holandés lo detiene con un dedo, sin dejar de barajar. «Déjela. Esa silla la pagó su padre hace mucho tiempo. Siéntese, señorita Duarte. ¿Va a jugar o solo ha venido a hacer preguntas?»"
    },
    "options": [
      {
        "say": "Las dos cosas. Una no está reñida con la otra.",
        "reply": "El Holandés sonríe sin enseñar los dientes. «Su padre pensaba igual. Por eso ganaba: hablaba mientras los demás solo miraban sus cartas»."
      },
      {
        "say": "Solo a hacer preguntas. Quiero saber qué vio aquella noche.",
        "reply": "«Aquí nadie habla sin una mano delante», dice él, y te reparte dos cartas boca abajo. «No hace falta que las mire. Es pura educación»."
      },
      {
        "say": "Antes dígame por qué lleva gafas de sol en un sitio donde no entra el sol.",
        "reply": "El Holandés se las baja un poco: tiene un ojo azul y el otro casi blanco. «Porque hay cosas que prefiero no ver, señorita. Y otras que prefiero que nadie vea»."
      }
    ],
    "line2": "El Holandés deja el mazo sobre la mesa. «Aquella noche yo estaba sentado aquí mismo. Don Aurelio se jugó el casino convencido de que su full era imbatible. Su padre enseñó una escalera real de corazones y se quedó con el Gran Meridiano en una sola mano. Al día siguiente, nadie volvió a verlo».",
    "options2": [
      {
        "say": "Entonces, si Aurelio hubiera cumplido su palabra, este casino sería de mi padre.",
        "reply": "«Lo sería, sí», asiente él. «Pero en este mundo no manda quien gana la partida, sino quien guarda los papeles en la caja fuerte»."
      },
      {
        "say": "¿Una escalera real justo esa noche? Suena demasiado bonito para ser verdad.",
        "reply": "«Eso pensamos todos», reconoce el Holandés. «Pero las cartas las repartí yo, y le juro que estaban limpias. Su padre no necesitaba hacer trampas»."
      },
      {
        "say": "¿Y por qué se ha callado usted durante tanto tiempo?",
        "reply": "«Porque quería seguir respirando», contesta sin dramatismo. «Y porque alguien tenía que estar aquí cuando usted llegara»."
      }
    ],
    "end": "El Holandés recoge las cartas sin dejarte ver las tuyas. «Esa escalera real abre más puertas de las que se imagina», te dice. Desde el bufé llega un olor a marisco y a cotilleo.",
    "talk": [
      "¿Por qué crees que el Holandés ha estado esperando a la hija de Ernesto durante tanto tiempo?",
      "¿Se te da bien disimular lo que sientes? ¿En qué situaciones de tu vida has tenido que ir de farol?",
      "¿Has guardado alguna vez un secreto durante años por miedo? ¿Qué habría pasado si lo hubieras contado antes?",
      "¿Qué vale más en la vida: tener buenas cartas o tener sangre fría? ¿Qué te ha tocado a ti?",
      "¿Crees que quien gana demasiado provoca más envidia que admiración? ¿Por qué?"
    ],
    "words": [
      "ir de farol",
      "no estar reñido con",
      "escalera real",
      "sangre fría"
    ]
  },
  bufe: {
    "title": "Gambas, tartas y rumores",
    "line": "El bufé es un festival de excesos: torres de marisco, montañas de pasteles y una fuente de chocolate que no para de correr. Tere, la chef, se limpia las manos en el delantal y te guiña un ojo. «Tú no has venido por las gambas, cariño, se te nota en la cara. ¿Qué quieres saber?»",
    "money": {
      "100": "Pagas la entrada del bufé con parte de tus cien dólares, decidida a comer como si no hubiera un mañana para amortizarla. Tere se ríe al verte con tres platos a la vez. «¡Así se hace, que aquí cobramos caro! Pero tú no has venido solo por las gambas. ¿Qué quieres saber?»",
      "500": "Con quinientos dólares en el bolso te permites el bufé con champán, el que tiene ostras y un camarero que te rellena la copa. Tere, que lo ve todo desde la cocina, sale a saludarte con el cuchillo en la mano. «Tú no has venido por las ostras, cariño, se te nota en la cara. ¿Qué quieres saber?»",
      "1000": "Con mil dólares de juego, el bufé te sale gratis gracias a tu tarjeta de jugadora, y la camarera te sienta en la mejor mesa. Tere sale de la cocina limpiándose las manos en el delantal. «Gratis, ¿eh? Aquí nada es gratis, mi vida: lo pagas con lo que pierdes en las mesas. ¿Qué quieres saber?»",
      "10000": "Con diez mil dólares en juego, el gerente del bufé te ha preparado una mesa aparte con mantel de lino y una langosta que no está en la carta. Tere te la sirve en persona, encantada de tener público. «A las jugadoras como tú las cuido yo, que luego se enteran de cosas. ¿Qué quieres saber?»",
      "100000": "Con cien mil dólares, el casino te ofrece una cena privada con chef, pero tú prefieres el barullo del bufé. Tere se planta delante de ti con los brazos en jarras. «Mira que eres rara: con todo ese dinero y vienes a comer con el populacho. Me caes bien. ¿Qué quieres saber?»",
      "1000000": "Medio bufé deja de comer cuando entras: la mujer del millón, en persona, entre las gambas y la fuente de chocolate. Tere aparta a dos gerentes a codazos y te lleva a la cocina, donde no llegan las miradas. «Aquí dentro no se cobra por mirar, pero sí por escuchar. ¿Qué quieres saber?»",
      "nada": "Te cuelas en el bufé sin pagar la entrada y te sirves un plato pequeño, por si alguien te pide el tique. Tere, la chef, te pilla con una gamba en la mano y, en vez de echarte, te llena el plato hasta arriba. «Come, que se te ve sin un peso y con hambre de algo más que comida. ¿Qué quieres saber?»"
    },
    "options": [
      {
        "say": "Primero, el chocolate. Las preguntas, para el postre.",
        "reply": "Tere se ríe a carcajadas y te pasa un pincho de fresas. «¡Así me gusta! Moja sin miedo, que lo que se come aquí no engorda; lo que engorda es lo que se oye»."
      },
      {
        "say": "Dicen que usted se entera de todo antes que nadie.",
        "reply": "«Antes que el dueño, antes que el cura y antes que la policía», presume Tere. «En una cocina se cuentan más secretos que en un confesionario»."
      },
      {
        "say": "¿Qué rumores corren por aquí sobre el piso 3?",
        "reply": "Tere baja la voz y deja el cuchillo. «Corren muchos, mi vida, pero uno pesa más que todos: hay un testamento a medio escribir y un hijo con muy mal genio»."
      }
    ],
    "line2": "Tere se acerca tanto que hueles la vainilla de su delantal. «Don Aurelio está viejo y muy enfermo», susurra. «Quiere arreglar cuentas antes de morirse. Y su hijo, Marco, está que echa chispas. Dicen que rompió un cuadro carísimo nada más enterarse».",
    "options2": [
      {
        "say": "¿Arreglar cuentas con quién, Tere? No me deje a medias.",
        "reply": "Tere te mira de arriba abajo. «Con alguien que se apellida como tú, preciosa. Y no lo digo por decir: me han encargado una tarta con tu nombre para esta noche»."
      },
      {
        "say": "Pobre cuadro. Siempre pagan los platos rotos los que no tienen la culpa.",
        "reply": "Tere suelta una carcajada que hace temblar las gelatinas. «¡Qué arte tienes! Pero ojo con Marco: tiene cara de príncipe y genio de perro rabioso»."
      },
      {
        "say": "Si yo fuera Marco, quizá también estaría furiosa.",
        "reply": "«Ahí está la cosa», dice Tere, señalándote con un cucharón. «Que a lo mejor la herencia no va a parar a quien todos creen»."
      }
    ],
    "end": "Tere te despide con un beso que te deja harina en la mejilla. Desde el teatro llegan aplausos, música de fanfarria y un olor a humo de escenario.",
    "talk": [
      "¿Qué parte de lo que cuenta Tere te parece cierta y qué parte puro cotilleo?",
      "¿Por qué crees que nos encantan los chismes aunque digamos que no nos interesan?",
      "¿Alguna vez te ha hecho daño un rumor? ¿Cómo reaccionaste entonces y cómo reaccionarías ahora?",
      "¿Hay alguna cuenta pendiente en tu vida que te gustaría arreglar antes de que sea tarde? ¿Qué te lo impide?",
      "¿Por qué crees que las herencias destrozan tantas familias: por el dinero o por lo que el dinero representa?"
    ],
    "words": [
      "estar que echa chispas",
      "pagar los platos rotos",
      "arreglar cuentas",
      "ir a parar"
    ]
  },
  teatro: {
    "title": "La contraseña escondida",
    "line": "En el camerino del teatro hay plumas por todas partes, espejos con bombillas y olor a laca. El Gran Faustino, todavía con la capa puesta, hace una reverencia exagerada, mientras Estrella, la bailarina, se retoca las pestañas sin prestarte atención. «¡Una visita entre bastidores! Déjeme adivinar: trae algo que quiere que examine, ¿verdad?»",
    "money": {
      "100": "Has gastado parte de tus cien dólares en una entrada de la última fila, y aun así has conseguido colarte en el camerino al final del show. El Gran Faustino, sudando bajo la capa, te recibe como a una admiradora entregada. «¡Desde la última fila se ve el truco mejor que desde la primera! Déjeme adivinar: trae algo que quiere que examine, ¿verdad?»",
      "500": "Con quinientos dólares te has permitido una butaca en la tercera fila, y Faustino te ha sacado al escenario para serrarte por la mitad. Ahora, en el camerino, te recibe con la capa todavía puesta. «¡Mi ayudante favorita de la noche! Déjeme adivinar: trae algo que quiere que examine, ¿verdad?»",
      "1000": "Con mil dólares has conseguido un pase al camerino con copa de champán incluida, de esos que venden a los fans más entregados. Faustino te besa la mano con una reverencia exagerada y Estrella pone los ojos en blanco. «¡Una mecenas del arte! Déjeme adivinar: trae algo que quiere que examine, ¿verdad?»",
      "10000": "Con diez mil dólares, el casino te ha invitado al palco del teatro y luego te ha acompañado al camerino como a una autoridad. Faustino se peina deprisa delante del espejo antes de recibirte. «¡Qué honor! Normalmente me visitan los acreedores, no las jugadoras. Déjeme adivinar: trae algo que quiere que examine, ¿verdad?»",
      "100000": "Con cien mil dólares, la dirección le ha ordenado a Faustino que te haga un número privado en el camerino, con Estrella bailando solo para ti. Él se quita el sombrero de copa y te mira con astucia. «Podría sacar palomas de su bolso, señorita, pero me da que ahí dentro hay algo más interesante. Trae algo que quiere que examine, ¿verdad?»",
      "1000000": "Con un millón de dólares, el director del teatro te ha ofrecido incluso tu propio espectáculo, y Faustino teme que lo sustituyas por un número de magia con billetes. Te recibe con una mezcla de envidia y admiración. «Usted hace desaparecer más dinero que yo palomas. Pero déjeme adivinar: trae algo que quiere que examine, ¿verdad?»",
      "nada": "Te cuelas entre bastidores por la puerta de servicio, sin entrada ni un dólar para pagarla. Un tramoyista está a punto de echarte cuando El Gran Faustino lo detiene con un gesto teatral. «¡Quieto! Quien entra sin pagar es porque trae algo mejor que dinero. Déjeme adivinar: trae algo que quiere que examine, ¿verdad?»"
    },
    "options": [
      {
        "say": "Puede ser. Pero las mujeres como yo no enseñamos nada a la primera.",
        "reply": "Estrella suelta una carcajada sin dejar de pintarse. «Ay, Faustino, esta te ha robado la función»."
      },
      {
        "say": "Sí. Le enseño una ficha si me dice qué tiene de especial.",
        "reply": "Faustino junta las yemas de los dedos. «Un mago nunca promete nada, señorita. Pero, ya que insiste, lo intentaré»."
      },
      {
        "say": "Antes de enseñársela, prométame que no la va a hacer desaparecer.",
        "reply": "Faustino se pone serio de golpe. «No se preocupe. Las desapariciones de verdad no las hago yo, señorita. Esas se hacen arriba»."
      }
    ],
    "line2": "Le das la ficha. Faustino la hace girar entre los dedos, la acerca a una bombilla y, con un chasquido, la abre en dos como si fuera una almeja. Dentro, en letras diminutas, se lee: «Escalera real». «¡Tachán!», exclama, orgulloso. «Una contraseña. Y yo que creía que nadie se acordaba ya de este mecanismo».",
    "options2": [
      {
        "say": "¿Cómo sabía usted que se abría? Me da que es usted cómplice.",
        "reply": "Faustino se lleva la mano al pecho. «Cómplice y autor, señorita. Ese mecanismo lo fabriqué yo, por encargo de su padre, hace veinticinco años»."
      },
      {
        "say": "Ojalá me lo hubiera dicho alguien antes. Me habría ahorrado media noche.",
        "reply": "«Pero se habría perdido el espectáculo», protesta Faustino. «Un secreto sin un poco de teatro no tiene ninguna gracia»."
      },
      {
        "say": "Estrella, ¿tú sabías que esto estaba aquí?",
        "reply": "Estrella se encoge de hombros y las lentejuelas brillan. «Yo solo sé que arriba, en el piso VIP, no te dejan pasar sin contraseña», dice. «Y que los que suben con ella vuelven con otra cara»."
      }
    ],
    "end": "Faustino cierra la ficha con un clic y te la devuelve con un guiño. Estrella te susurra al oído: «Justo al lado está la capilla. Esta noche se casa una pareja que se conoció en la cena».",
    "talk": [
      "¿Por qué crees que Ernesto escondió la contraseña dentro de una ficha en lugar de contársela a alguien?",
      "¿Qué cara tuya enseñas en público que no se parece a la que tienes en casa? ¿Quién conoce las dos?",
      "¿Prefieres una mentira bonita o una verdad sin gracia? ¿Cambia tu respuesta cuando se trata del amor?",
      "¿Qué te parece la gente que necesita aplausos todo el rato? ¿Conoces a alguien así o te ves un poco reflejado?",
      "¿Has descubierto alguna vez que alguien a quien admirabas no era lo que parecía? ¿Cómo te sentó?"
    ],
    "words": [
      "entre bastidores",
      "ponerse serio",
      "me da que",
      "no tener ninguna gracia"
    ]
  },
  capilla: {
    "title": "Boda en tres horas",
    "line": "En la capilla «Amor Exprés» todo es rosa: las flores de plástico, la alfombra y hasta el traje del Elvis que oficia las bodas. Delante del altar, una pareja que se conoció hace tres horas se mira como si llevara media vida junta. «¡Nena!», te llama Elvis con voz grave. «Nos falta un testigo. ¿Te animas a firmar?»",
    "money": {
      "100": "Con cien dólares te alcanzaría para casarte tú misma en el paquete más barato de la capilla, con Elvis incluido y fotos aparte. Elvis te ve curioseando el folleto de precios y se le ilumina la cara. «¡Nena, ahórrate la boda y hazte testigo, que sale gratis! Nos falta un testigo. ¿Te animas a firmar?»",
      "500": "Entras en la capilla con quinientos dólares, dispuesta a comprar un recuerdo absurdo, y te encuentras una boda a punto de empezar. Elvis, con el tupé impecable, se acerca contoneándose. «¡Nena, llegas justo a tiempo! El recuerdo te lo regalo yo: nos falta un testigo. ¿Te animas a firmar?»",
      "1000": "Con mil dólares podrías pagarle a la pareja el paquete de luna de miel en limusina, y la novia lo sabe, porque no le quita ojo a tu bolso. Elvis interrumpe la escena con un golpe de cadera. «¡Primero los papeles, luego los regalos! Nos falta un testigo. ¿Te animas a firmar?»",
      "10000": "Con diez mil dólares, el casino te ha mandado una botella de champán a la capilla para que brindes con los novios, que no se lo pueden creer. Elvis descorcha la botella con un gesto de rey y te hace una reverencia. «¡Nena, ya tenemos champán, pero nos falta lo más importante! Nos falta un testigo. ¿Te animas a firmar?»",
      "100000": "Con cien mil dólares, la capilla entera se ha rendido a tus pies: el fotógrafo te enfoca a ti y no a la novia, y el organista toca lo que tú le pidas. Elvis te recibe con los brazos abiertos. «¡Nena, eres la invitada de honor de una boda a la que nadie te ha invitado! Nos falta un testigo. ¿Te animas a firmar?»",
      "1000000": "La noticia del millón ha llegado hasta la capilla y los novios ya te ven como su hada madrina. La novia te pide que pagues la boda, el novio que le prestes para el anillo y Elvis los manda callar a los dos. «¡Un poco de dignidad, que esto es un sacramento! Nena, nos falta un testigo. ¿Te animas a firmar?»",
      "nada": "Entras en la capilla «Amor Exprés» solo para descansar los pies en un banco, porque fuera no tienes ni para un café. Elvis, con su traje de lentejuelas, te ve sentada y te señala como si fueras un milagro. «¡Nena, el cielo te manda! A los testigos no les cobramos; al contrario, los invitamos a la tarta. Nos falta un testigo. ¿Te animas a firmar?»"
    },
    "options": [
      {
        "say": "Me encanta. Una boda improvisada es justo lo que le faltaba a mi noche.",
        "reply": "Elvis se ajusta las gafas doradas. «Eso decimos todos, nena, hasta que nos toca ser los novios»."
      },
      {
        "say": "¿Tres horas? Hay gente que tarda más en elegir un sofá.",
        "reply": "La novia suelta una risita nerviosa. «¡Por eso mismo! Si llegamos a pensarlo mucho, a lo mejor nos echábamos atrás»."
      },
      {
        "say": "Firmo, pero si dentro de un mes se divorcian, no quiero que me echen la culpa.",
        "reply": "El novio levanta la mano como en un juicio. «Lo juramos. Si esto sale mal, la culpa será del tequila, no de la testigo»."
      }
    ],
    "line2": "Elvis carraspea y se pone solemne. «Antes del sí, quiero, la testigo tiene que contestar una pregunta, que así lo manda la tradición de esta capilla: ¿crees en el amor a primera vista?»",
    "options2": [
      {
        "say": "Creo en el amor a primera vista y en el arrepentimiento al día siguiente.",
        "reply": "Elvis se ríe tan fuerte que se le mueve el tupé. «¡Gracias, muchas gracias! Esa frase te la robo para el próximo show»."
      },
      {
        "say": "Creo que hace falta una segunda mirada. La primera solo ve lo que quiere ver.",
        "reply": "La novia te coge las manos, emocionada. «Pues yo ya le he echado tres miradas y cada vez me gusta más»."
      },
      {
        "say": "Si mis padres no hubieran creído en él, yo no estaría aquí. Así que sí.",
        "reply": "Elvis se quita las gafas, conmovido. «Nena, eso es lo más bonito que he oído en esta capilla, y aquí se oye de todo»."
      }
    ],
    "end": "Los novios se besan bajo una lluvia de confeti y tú firmas como testigo sin que te tiemble el pulso. Desde abajo, el bajo de la discoteca hace vibrar el suelo.",
    "talk": [
      "Si estuvieras en el lugar de Valentina, ¿firmarías como testigo o intentarías convencerlos de que esperaran?",
      "¿Qué es lo más impulsivo que has hecho por amor? Visto con perspectiva, ¿te arrepientes o lo repetirías?",
      "¿Cuánto tiempo crees que hace falta para conocer de verdad a alguien? ¿Basta con una vida entera?",
      "¿Qué dice de una persona que se enamora muy rápido: que es valiente, ingenua o que tiene miedo a estar sola?",
      "¿Te ha tocado callarte ante una pareja de amigos que, en tu opinión, era un error? ¿Crees que hiciste bien?"
    ],
    "words": [
      "a primera vista",
      "echarse atrás",
      "echar la culpa",
      "sin que tiemble el pulso"
    ]
  },
  discoteca: {
    "title": "El hombre del traje gris",
    "line": "En la discoteca, las luces cortan la oscuridad y el bajo retumba en el pecho. Bailas un buen rato sin pensar en nada, hasta que notas una mano enorme y educada en el hombro: es el hombre del traje gris. «Perdone que la interrumpa, señorita. Me llamo Bruno. ¿Me concede un minuto?»",
    "money": {
      "100": "Con cien dólares pagaste la entrada y te queda justo para una copa aguada, que haces durar como si fuera oro. Bailas en un rincón de la pista cuando una mano grande y educada se te posa en el hombro. «Perdone que le estropee la canción, señorita. Me llamo Bruno. ¿Me concede un minuto?»",
      "500": "Con quinientos dólares te has permitido una entrada con barra libre durante dos horas, y piensas exprimirla. En plena canción, el hombre del traje gris aparece a tu lado, tan fuera de lugar en la pista como un armario en la playa. «Perdone la interrupción, señorita. Me llamo Bruno. ¿Me concede un minuto?»",
      "1000": "Con mil dólares has conseguido una mesa pequeña cerca de la pista, con una botella y unas bengalas que te ha traído una camarera con mucho ritmo. Cuando vuelves de bailar, el hombre del traje gris está sentado en tu mesa, muy tieso. «Le he guardado el sitio. Me llamo Bruno. ¿Me concede un minuto?»",
      "10000": "Con diez mil dólares te han dado una de las mesas VIP junto al DJ, con champán y un camarero que no se separa de ti. Al volver de la pista, encuentras al camarero muy nervioso y al hombre del traje gris ocupando su lugar. «Le he dado la noche libre. Me llamo Bruno. ¿Me concede un minuto?»",
      "100000": "Con cien mil dólares, la discoteca te ha cedido la mesa principal, y el DJ ya ha dicho tu nombre dos veces por el micrófono. Media pista intenta acercarse, pero se lo impide un muro gris: el hombre del traje gris, que aparta a todos con una sola mano. «Perdone, no me presenté antes. Me llamo Bruno. ¿Me concede un minuto?»",
      "1000000": "Con un millón de dólares, la discoteca ha parado la música para recibirte y ha llenado la pista de confeti dorado. Entre la multitud que te rodea, una figura enorme se abre paso con calma: el hombre del traje gris, el único que no te pide nada. «Usted tiene medio club a sus pies, pero yo solo necesito una cosa. Me llamo Bruno. ¿Me concede un minuto?»",
      "nada": "Te has colado en la discoteca detrás de un grupo de modelos, sin entrada y sin un dólar para la primera copa. Bailas como si el local fuera tuyo, hasta que una mano enorme se apoya en tu hombro: el hombre del traje gris. «Tranquila, no soy de seguridad, aunque lo parezca. Me llamo Bruno. ¿Me concede un minuto?»"
    },
    "options": [
      {
        "say": "¿Me has seguido toda la noche solo para presentarte? Qué poco romántico.",
        "reply": "Bruno ni se inmuta. «Lo romántico no entra en mi contrato, señorita. Lo de seguirla, sí»."
      },
      {
        "say": "Un minuto, ni uno más. ¿Para quién trabajas?",
        "reply": "«Para Don Aurelio Montalbán», contesta sin rodeos. «Desde que yo tenía pelo. Y nunca me había mandado detrás de una mujer»."
      },
      {
        "say": "Te concedo el minuto si me demuestras que sabes bailar.",
        "reply": "Bruno te da una vuelta sorprendentemente ágil para alguien de su tamaño. «Mi madre me obligó a dar clases de salsa. Nunca pensé que me servirían para trabajar»."
      }
    ],
    "line2": "Bruno se acerca para que lo oigas por encima de la música. «La esperan arriba. Don Aurelio quiere verla. No se lo tome como una amenaza, aunque entiendo que lo parezca. Si alguien hubiera querido hacerle daño, ya habría tenido mil ocasiones».",
    "options2": [
      {
        "say": "Qué dulce. Es lo más tierno que me han dicho en toda la noche.",
        "reply": "Bruno se ríe por primera vez, una risa grave y corta. «No se acostumbre. Es lo más tierno que sé decir»."
      },
      {
        "say": "Dile a tu jefe que las damas nos hacemos esperar.",
        "reply": "«Se lo diré», asiente Bruno, «aunque le advierto que, a su edad, cada minuto de espera es un minuto que se le escapa»."
      },
      {
        "say": "¿Y si no subo? ¿Qué les pasa a los que dicen que no?",
        "reply": "«Pues que se pierden el mejor whisky del edificio», responde Bruno. «Y que Don Aurelio acaba bajando a buscarlos. Créame, no le gusta nada usar el ascensor»."
      }
    ],
    "end": "Bruno desaparece entre el humo de colores sin mirar atrás. Al fondo, las puertas doradas del ascensor al piso VIP brillan como una promesa peligrosa.",
    "talk": [
      "¿Te parece Bruno alguien de quien fiarse o un peligro con buenos modales?",
      "¿Cómo eres cuando bailas: te sueltas, te da corte o te conviertes en otra persona?",
      "¿Cuál es la fiesta que peor ha terminado en tu vida? ¿Aprendiste algo o la repetirías tal cual?",
      "¿Por qué crees que a algunas personas les atraen precisamente quienes dan un poco de miedo?",
      "Si un desconocido te dijera en una fiesta que alguien importante quiere verte, ¿irías? ¿Qué tendría que pasar para que dijeras que sí?"
    ],
    "words": [
      "sin rodeos",
      "hacerse esperar",
      "darle corte a alguien",
      "no inmutarse"
    ]
  },
  vip: {
    "title": "La puerta negra",
    "line": "Las puertas del ascensor se abren a un pasillo enmoquetado en rojo oscuro que huele a colonia cara y a tabaco rubio. Al fondo, una puerta negra sin pomo y dos moles trajeadas: Bruno, al que ya conoces, y Tano, que mastica chicle como si le debiera dinero. Tano te corta el paso con una mano del tamaño de una bandeja. «Por aquí no se pasa porque sí, guapa. ¿Me dices la contraseña o te das la vuelta?»",
    "money": {
      "100": "Con cien dólares en el bolso, el piso VIP te parece un decorado de cine que no te corresponde. Tano lo nota enseguida: te hace abrir el bolso, cuenta los billetes con la mirada y suelta un silbido burlón. «Con esto, aquí dentro te alcanza para un cubito de hielo, y sin whisky. Pero yo no cobro entrada, guapa. ¿Me dices la contraseña o te das la vuelta?»",
      "500": "Llevas quinientos dólares, que abajo eran una buena noche y aquí arriba no dan ni para la propina del ascensorista. Bruno te saluda con un gesto casi amable; Tano, en cambio, mastica chicle con cara de aburrimiento infinito. «Quinientos, ¿eh? Por lo menos no vienes a pedir, que ya es algo. ¿Me dices la contraseña o te das la vuelta?»",
      "1000": "Has jugado mil dólares en la planta baja y te sientes con derecho a todo, pero Tano opina distinto. Te mira de arriba abajo, sin prisa, como quien tasa un coche de segunda mano. «Mil dólares los pierde aquí un cliente mientras se ata los zapatos, guapa. No me impresionas, aunque reconozco que tienes estilo. ¿Me dices la contraseña o te das la vuelta?»",
      "10000": "Tu tarjeta de jugadora de nivel platino te ha subido hasta aquí con un anfitrión pegado a los talones, convencido de que diez mil dólares abren cualquier puerta. Tano ni la mira. «Platino, oro, diamante… a mí me da igual el color del plástico. Esta puerta tiene sus propias reglas, por mucho que le pese al señor». El anfitrión enmudece. «¿Me dices la contraseña o te das la vuelta?»",
      "100000": "Cien mil dólares de crédito y el casino entero te trata como a una reina, salvo Tano. Tu anfitrión le susurra algo al oído y le desliza un sobre en el bolsillo; Tano se lo devuelve sin abrirlo, con una sonrisa de hielo. «Ni aunque me ofreciera el doble, jefe. Con la señora hablo yo». Se vuelve hacia ti. «¿Me dices la contraseña o te das la vuelta?»",
      "1000000": "Un millón de dólares sube contigo en el ascensor, y con él dos gerentes nerviosos, un abogado de la casa y un rumor que ya ha recorrido el piso entero. Tano no se aparta ni un centímetro. «Señores, por mí como si traen el Banco Central. Si no hay contraseña, no hay puerta, que para eso me pagan». Te clava los ojos. «¿Me dices la contraseña o te das la vuelta?»",
      "nada": "Subes al tercer piso sin un dólar, colada en el ascensor detrás de un camarero con una bandeja de ostras. Tano te calcula el saldo de un vistazo y deja de masticar el chicle. «A ver si lo adivino: ni ficha, ni tarjeta, ni reserva. Aquí arriba, quien no tiene dinero tiene que tener otra cosa, guapa. ¿Me dices la contraseña o te das la vuelta?»"
    },
    "options": [
      {
        "say": "Te la digo, pero acércate, que es un secreto y no quiero que lo oiga todo el pasillo.",
        "reply": "Tano se inclina sin pensarlo y Bruno le da un codazo en las costillas. «¿No ves que te está toreando, hombre?» Tano se endereza, colorado hasta las orejas."
      },
      {
        "say": "Escalera real.",
        "reply": "El chicle se le queda a Tano a medio masticar. Bruno y él cruzan una mirada larga. «Hacía media vida que no oía esas dos palabras», murmura Bruno, y se le quiebra la voz."
      },
      {
        "say": "¿Y si te digo que soy Valentina Duarte? ¿Eso no cuenta como contraseña?",
        "reply": "Tano deja de masticar. «Duarte», repite, como quien prueba un vino peligroso. «Ese apellido, aquí arriba, vale más que una contraseña… o cuesta la vida, según a quién se lo digas»."
      }
    ],
    "line2": "Aun así, Tano no se aparta del todo. «Una última pregunta, que se la hago a todo el que entra. Ahí dentro no se perdona a los que dudan. ¿Vienes a ganar, a cobrar una deuda o a que te consuelen?»",
    "options2": [
      {
        "say": "Ojalá fueran excluyentes. Vengo a las tres cosas, aunque no necesariamente en ese orden.",
        "reply": "Bruno suelta una carcajada y empuja la puerta. «Pase, señorita. Me habría decepcionado cualquier otra respuesta»."
      },
      {
        "say": "A cobrar. Lo que se le debía a mi padre, con los intereses de veinticinco años.",
        "reply": "Tano se aparta muy despacio. «Pues cobre con cuidado. Aquí las deudas viejas tienen dientes, y algunas todavía muerden»."
      },
      {
        "say": "¿Consolarme? Si hubiera venido a llorar, me habría quedado en el bufé con una tarta entera.",
        "reply": "Tano se ríe por primera vez, una risa ronca, casi tierna. «Esta tiene carácter, Bruno. Con un poco de suerte, sale de aquí con vida y todo»."
      }
    ],
    "end": "La puerta negra se abre sin un chirrido. Al otro lado, el aire es más denso, las alfombras más blandas y las sonrisas más caras. Al fondo, bajo una lámpara de cristal, alguien baraja cartas de bacará.",
    "talk": [
      "¿Qué te ha parecido la táctica de Valentina con Tano, y cuál habrías usado tú en su lugar?",
      "¿Recuerdas algún sitio en el que te hicieran sentir que no pintabas nada? ¿Cómo reaccionaste?",
      "¿Por qué crees que lo exclusivo nos atrae tanto, aunque sepamos que muchas veces es puro decorado?",
      "¿Te has hecho pasar alguna vez por quien no eras para conseguir algo? ¿Te salió bien la jugada?",
      "Si te ofrecieran entrar en un club al que solo pertenece el uno por ciento, ¿aceptarías sin hacer preguntas?"
    ],
    "words": [
      "no pintar nada",
      "por mucho que le pese",
      "pegado a los talones",
      "salirle bien la jugada"
    ]
  },
  bacara: {
    "title": "La prueba de la Condesa",
    "line": "El salón de bacará es una caja de terciopelo verde donde el silencio cuesta más que el champán. La Condesa, sola ante la banca, con un collar de esmeraldas y una boquilla larguísima, mueve fichas como quien reparte limosnas. Al verte, levanta una ceja dibujada con precisión de cirujana. «Vaya, vaya. La hija de Ernesto Duarte, en carne y hueso. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
    "money": {
      "100": "Aquí la apuesta mínima es de mil dólares, así que tus cien no llegan ni a la décima parte de una mano. Lo sabes tú, lo saben los crupieres y, sobre todo, lo sabe la Condesa, que sonríe detrás de su boquilla entre la lástima y la diversión. «Por algo se empieza, querida. Yo llegué aquí con un vestido prestado y una mentira bien contada. La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
      "500": "Quinientos dólares en un salón donde se apuesta con fichas que parecen joyas: te sientes como quien entra en una joyería a preguntar la hora. La Condesa, sola contra la banca, ni siquiera disimula que te estaba esperando. «No se agobie por el dinero, querida; aquí lo que se juega de verdad es otra cosa. La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
      "1000": "Mil dólares: exactamente una mano en esta mesa, y ni una más. Los crupieres ya han decidido que eres una suicida encantadora. La Condesa, en cambio, te observa con el interés de una coleccionista ante una pieza rara. «Una sola bala en el revólver. Así jugaba él, ¿sabe? La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
      "10000": "Con diez mil dólares puedes aguantar unas cuantas manos sin que nadie te mire con pena, aunque para la Condesa sigan siendo migajas: ella acaba de jugarse esa cantidad en lo que tarda en dar una calada. «Diez mil. Lo justo para divertirse sin hacerse daño. Qué prudente». Te señala la silla de enfrente. «La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
      "100000": "Cien mil dólares de crédito y, por fin, una silla en la mesa de la Condesa como una igual. A ella le divierte: te hace servir un champán que cuesta lo que un coche y ordena que te repartan con una baraja nueva. «Bienvenida al club de los que pueden permitirse perder con elegancia. La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
      "1000000": "Un millón de dólares en placas doradas y el salón entero contiene la respiración: hasta el jefe de sala se ha ajustado la corbata. La Condesa, que llevaba veinte años siendo la reina indiscutible de este terciopelo, deja la boquilla y te aplaude despacio, sin ironía. «Me ha destronado sin abrir la boca. Eso no lo había conseguido nadie desde su padre. La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»",
      "nada": "Entras en el salón de bacará con los bolsillos vacíos y la barbilla bien alta, que es lo único que no se puede embargar. Un crupier ya hace ademán de acompañarte a la salida, pero la Condesa lo detiene con un leve movimiento de la boquilla. «Déjela, Anselmo. He visto a gente sin un centavo jugar mejor que muchos marqueses». Te mira. «La hija de Ernesto. Siéntese y demuéstreme que no ha heredado solo la cara. ¿O prefiere mirar desde la puerta, como las turistas?»"
    },
    "options": [
      {
        "say": "Me siento, pero le aviso: de mi padre heredé la cara, el pulso y una manía muy fea de no perder.",
        "reply": "La Condesa suelta una risa de cristal fino. «Entonces repartiré yo, por si acaso. A las manías ajenas les tengo mucho respeto»."
      },
      {
        "say": "No he venido a lucirme, Condesa. He venido a escuchar lo que usted sepa de él.",
        "reply": "«Qué decepción tan honrada», suspira ella. «Su padre tampoco presumía nunca. Se limitaba a ganar, que es una forma de presumir mucho más elegante»."
      },
      {
        "say": "Desde la puerta se ve mejor la jugada. Pero, ya que insiste, ¿qué nos apostamos?",
        "reply": "La Condesa entorna los ojos, encantada. «Una mujer que negocia antes de sentarse. Ernesto habría estado orgulloso… y un poco asustado»."
      }
    ],
    "line2": "La Condesa empuja una torre de fichas al centro con un solo dedo enguantado. «Una mano. Si gana usted, le cuento cómo conocí a Ernesto y por qué se fue. Si gano yo, me quedo la ficha dorada que lleva en el bolso. ¿Acepta, o prefiere vivir muchos años sin saber nada?»",
    "options2": [
      {
        "say": "Acepto. Aunque perdiera, al menos sabría que no me quedé con las ganas.",
        "reply": "Las cartas se giran: ocho contra seis. Ganas tú. La Condesa aplaude con los guantes puestos. «Su padre era de los que sabían retirarse a tiempo. Usted, me temo, es de las que se quedan hasta el final»."
      },
      {
        "say": "No. Esa ficha no es mía para jugármela, por mucho que me tiente.",
        "reply": "La Condesa te observa largo rato, con un respeto que no esperaba sentir. «Lo mismo me dijo él la última noche. Sabía retirarse a tiempo, y sabía qué cosas no le pertenecían»."
      },
      {
        "say": "Si me importara vivir muchos años, no habría subido al tercer piso. Reparta.",
        "reply": "La Condesa reparte y pierde por un punto, con una sonrisa casi agradecida. «Hacía siglos que no perdía a gusto. Ernesto sabía retirarse a tiempo, querida. Ojalá usted aprenda de él antes de que sea tarde»."
      }
    ],
    "end": "La Condesa recoge sus fichas sin mirarlas, como quien recoge las migas de un mantel. Detrás de una cortina de terciopelo se oyen voces graves, el tintineo de los vasos de whisky y una tos de fumador empedernido.",
    "talk": [
      "¿Te parece un elogio o una crítica que digan de alguien que «sabía retirarse a tiempo»?",
      "¿Hay algo de lo que te alegras de haberte retirado a tiempo, y algo de lo que no supiste salir?",
      "¿Qué crees que has heredado de verdad de tu familia, más allá del físico?",
      "Cuando alguien te pone a prueba delante de otros, ¿sacas lo mejor de ti o te bloqueas?",
      "¿Arriesgarías algo con valor sentimental a cambio de una información que deseas muchísimo?"
    ],
    "words": [
      "en carne y hueso",
      "quedarse con las ganas",
      "retirarse a tiempo",
      "por mucho que me tiente"
    ]
  },
  puros: {
    "title": "Humo y silencio",
    "line": "La sala de puros es una cueva de cuero y humo azul donde el aire se podría cortar con un cuchillo de mantequilla. Cinco hombres de la Familia juegan a las cartas sin decir palabra; las botellas de whisky hablan por ellos. Don Carmine, gemelos de oro y voz de grava, aparta una silla con el pie. «Siéntate, niña. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
    "money": {
      "100": "Con cien dólares no te alcanza ni para la punta de uno de estos habanos, y los hombres de la Familia lo saben: uno se ríe por lo bajo, otro te ofrece su encendedor con aire de caridad. Don Carmine los manda callar con una sola mirada. «El que no tiene nada tampoco tiene nada que esconder. Esa es la gente que más me interesa». Te señala la silla. «Siéntate, niña. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
      "500": "Quinientos dólares en el bolso y la sensación de haber entrado por error en el rodaje de una película de gánsteres. Nadie te mira, aunque todos te han visto. Don Carmine, sin dejar de barajar, aparta una silla con el pie. «Tranquila, aquí el dinero de los demás no nos interesa. El nuestro, muchísimo». Se ríe con voz de grava. «Siéntate, niña. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
      "1000": "Mil dólares te dan para un habano decente y un whisky que no raspa, y los pides con un aplomo que sorprende a la mesa. Don Carmine te ve encender el puro con torpeza de principiante y se le escapa una sonrisa. «No lo chupes como un caramelo, niña. A un buen puro se le trata como a un enemigo: con paciencia». Te señala la silla. «Siéntate. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
      "10000": "Con diez mil dólares, un empleado te abre el humidor de la casa como si fuera la cámara acorazada de un banco, y la partida privada acepta tus fichas sin pestañear. Los hombres de la Familia hacen cuentas mentalmente sin levantar la vista de las cartas. Don Carmine te aparta una silla con el pie. «El dinero siempre es bienvenido. Las preguntas, menos. Siéntate, niña. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
      "100000": "Cien mil dólares y los hombres de la Familia se ponen de pie al verte entrar, una cortesía que en esta sala equivale a desenfundar. Uno te ofrece un habano de veinte años; otro, un préstamo «entre amigos»; un tercero, su número de teléfono. Don Carmine los manda sentarse con un chasquido de dedos. «Cuando llega una ballena, niña, salen los tiburones. Siéntate a mi lado. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
      "1000000": "La noticia del millón ha llegado a la sala de puros antes que tú: las cartas se quedan quietas, alguien hace una llamada en voz baja y otro se desabrocha la chaqueta sin motivo aparente. Don Carmine se levanta, con una lentitud que da miedo, y te aparta él mismo la silla. «Con tanto dinero encima, o tienes muy buenos amigos o muy malos enemigos. Siéntate, niña. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»",
      "nada": "Llegas a la sala de puros sin un dólar, con el vestido arrugado de toda una noche, y un hombre de la Familia te pide hielo creyendo que eres camarera. Don Carmine le da un manotazo en la nuca que se oye en toda la sala. «Es la hija de Ernesto Duarte, animal. Pídele perdón». Luego te aparta una silla con el pie. «Siéntate, niña. Aquí se juega, se bebe y, sobre todo, se calla. ¿Sabes tú guardar un secreto?»"
    },
    "options": [
      {
        "say": "Los guardo tan bien que a veces ni yo misma me acuerdo de dónde los he puesto.",
        "reply": "Don Carmine se ríe con una carcajada que parece un motor viejo arrancando. «Esa es la mejor caja fuerte que existe: la memoria selectiva»."
      },
      {
        "say": "Depende del secreto, Don Carmine. Y de quién salga perjudicado si me lo callo.",
        "reply": "Los hombres dejan las cartas sobre la mesa. Don Carmine se acaricia el bigote. «Una mujer con condiciones. Tu padre también las ponía, y ya ves dónde acabó… o dónde no acabó»."
      },
      {
        "say": "Sé guardar secretos y también sé venderlos caros. ¿Le interesa alguno?",
        "reply": "Don Carmine levanta una ceja, entre ofendido y admirado. «Cuidado, niña. En esta sala, quien vende secretos suele acabar en el desierto. Pero me gusta tu descaro»."
      }
    ],
    "line2": "Don Carmine echa una bocanada de humo hacia el techo. «Dicen que tu padre se largó con algo que no le pertenecía. Yo no lo afirmo, ¿eh? Pero en la Familia, lo que se repite mil veces acaba siendo verdad, a no ser que alguien demuestre lo contrario».",
    "options2": [
      {
        "say": "¿Y si fue al revés? ¿Y si quien se quedó con lo ajeno fue otro, y mi padre solo pagó el pato?",
        "reply": "Don Carmine se queda inmóvil, con el puro a medio camino. «Si eso fuera así, habría que echar cuentas de nuevo. Y a mí echar cuentas viejas me da una pereza horrible»."
      },
      {
        "say": "Pues demuéstrelo usted o deje de repetirlo. Que yo sepa, quien acusa es quien tiene que probar.",
        "reply": "Se hace un silencio de iglesia. Don Carmine asiente muy despacio. «Hablas como un abogado y miras como tu padre. Mala combinación para quien te lleve la contraria»."
      },
      {
        "say": "Por mucho que lo repitan, si mi padre hubiera robado algo, yo no estaría aquí tan tranquila.",
        "reply": "«Tan tranquila no estás», dice Don Carmine con suavidad. «Se te está cayendo la ceniza en el vestido. Pero disimulas de maravilla, eso te lo reconozco»."
      }
    ],
    "end": "Don Carmine te despide con un gesto lento del anillo, como quien deja una puerta entornada y una cuenta pendiente. En el pasillo, Ignacio, el anfitrión, te espera con las manos cruzadas a la espalda.",
    "talk": [
      "¿Crees que Ernesto se llevó algo que no era suyo, o es solo un rumor que le conviene a alguien?",
      "¿Te ha pasado que un rumor sobre ti o sobre alguien cercano se convirtiera en «verdad» a fuerza de repetirse?",
      "¿Qué secreto ajeno te ha costado más guardar? ¿Has acabado contándolo?",
      "¿Dónde termina la lealtad a la familia y dónde empieza la complicidad con algo que está mal?",
      "¿Por qué crees que el cine ha convertido a los mafiosos en personajes tan atractivos?"
    ],
    "words": [
      "pagar el pato",
      "a fuerza de",
      "llevar la contraria",
      "echar cuentas"
    ]
  },
  anfitrion: {
    "title": "La foto del revés",
    "line": "La mesa del anfitrión es un escritorio de caoba bajo un muro de fotografías en blanco y negro: cantantes de otra época, boxeadores con la nariz rota, un par de presidentes con la copa en alto. Ignacio, el anfitrión, canoso e impecable, te sirve un café sin que se lo pidas. «Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. Creo que ese alguien es usted. ¿Me permite que se la enseñe?»",
    "money": {
      "100": "Te acercas a la mesa del anfitrión para preguntar, con cierto apuro, si con cien dólares te puede conseguir algún descuento en el bufé. Ignacio te escucha con una seriedad de notario, te entrega dos vales de cortesía sin pestañear y te sirve un café. «Eso, en realidad, era lo de menos». Baja la voz. «Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»",
      "500": "Quinientos dólares y ninguna intención de convertirte en clienta habitual: se lo dices a Ignacio antes de que abra la boca. Él sonríe, cierra la carpeta de ofertas y te sirve un café de todos modos. «No le voy a vender nada, se lo prometo. Hoy no trabajo para la casa». Señala la pared de fotos. «Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»",
      "1000": "En la pantalla de Ignacio ya aparece tu historial de la noche: mil dólares jugados, apuesta media, tiempo en cada mesa. Por pura costumbre te ofrece una cena de cortesía y una habitación mejor para la próxima visita, como haría con cualquiera. Luego apaga el monitor, como quien se quita el uniforme. «Olvidemos el protocolo. Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»",
      "10000": "Con diez mil dólares jugados, a Ignacio le tocaría venderte el paquete completo: vuelo pagado, suite con piscina, cena con el chef y un fin de semana en Macao. Abre la carpeta, la mira un segundo y la cierra con un suspiro. «Si su padre me viera ofreciéndole un descuento, se reiría de mí hasta mañana». Te sirve un café. «Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»",
      "100000": "Cien mil dólares te convierten en la prioridad absoluta de Ignacio: tiene órdenes de concederte cualquier capricho, desde un avión privado hasta una botella de un vino del siglo pasado. Te sirve un café, te escucha con paciencia y, por primera vez en cuarenta años de oficio, decide desobedecer. «Hay cosas que la casa no puede regalar, porque no son suyas. Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»",
      "1000000": "Desde que se corrió la voz del millón, el teléfono de Ignacio no ha dejado de sonar: el director, dos casinos rivales, un señor de la Familia que pregunta, medio en broma, cuánto vale usted. Ignacio desenchufa el aparato con una calma de monje y te sirve un café. «Esta noche no estoy para nadie más. Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»",
      "nada": "La mesa del anfitrión está reservada para quienes se dejan fortunas, y tú llegas sin un dólar, con los zapatos en la mano. Un ayudante joven se interpone con una sonrisa congelada, pero Ignacio lo aparta con suavidad y te sirve un café en la mejor taza. «Aquí se atiende a las personas por su apellido, no por su saldo, Germán. Apréndetelo». Te mira. «Señorita Duarte, llevo un cuarto de siglo con una foto colgada del revés, esperando a que alguien viniera a buscarla. ¿Me permite que se la enseñe?»"
    },
    "options": [
      {
        "say": "Me encantan los hombres que saben esperar. Adelante, Ignacio, que yo también llevo años esperando.",
        "reply": "Ignacio inclina la cabeza con una elegancia de otra época. «La paciencia es lo único que este casino no ha conseguido comprarme, señorita. Y mire que lo ha intentado»."
      },
      {
        "say": "Antes dígame una cosa: ¿cuánto le han pagado durante todos estos años para que no hablara?",
        "reply": "«Ni un centavo», responde, sin alterarse. «Me pagaban por recordar los gustos de los clientes. Lo demás lo he recordado gratis, que es mucho más peligroso»."
      },
      {
        "say": "¿Es siempre así de teatral, o solo con las hijas de los que desaparecieron?",
        "reply": "Ignacio sonríe de verdad, quizá por primera vez en años. «Solo con las que tienen sentido del humor. Su padre lo tenía, incluso cuando las cosas se pusieron feas de verdad»."
      }
    ],
    "line2": "Da la vuelta a la foto. Dos jóvenes en esmoquin, abrazados y riendo delante de esta misma mesa: Ernesto y Aurelio. Del marco cae un papel amarillento, doblado en cuatro: el compromiso de la apuesta, con las dos firmas. «Eran uña y carne. Hasta que una escalera real los convirtió en algo que todavía no sé nombrar».",
    "options2": [
      {
        "say": "Si aquella mano no se hubiera jugado nunca, ¿cree que habrían seguido siendo amigos?",
        "reply": "Ignacio contempla la foto largo rato. «Quizá. Aunque los hombres como ellos nunca dejan una partida a medias. Ni una amistad sin ponerla a prueba hasta romperla»."
      },
      {
        "say": "Este papel lo cambia todo. Si es auténtico, el casino tendría que haber sido de mi padre.",
        "reply": "«Tendría», asiente Ignacio. «Por eso lo he guardado yo, y no un abogado. A los abogados se les compra; a los viejos anfitriones, como mucho, se les cansa»."
      },
      {
        "say": "Qué guapo estaba. Nunca había visto a mi padre tan feliz en una foto.",
        "reply": "Ignacio baja la voz hasta convertirla en un susurro. «Esa noche fue el hombre más feliz de Las Vegas. Durante una hora, más o menos. Luego subió al despacho»."
      }
    ],
    "end": "Ignacio envuelve la foto y el papel en un pañuelo de seda y te los entrega como quien pasa un testigo. «La terraza», murmura. «El joven Marco la está esperando. Hágame un favor: no le dé nunca la espalda».",
    "talk": [
      "¿Por qué crees que Ignacio prefirió guardar la foto y el papel tantos años en lugar de entregárselos a alguien?",
      "¿Has perdido alguna amistad por dinero, por orgullo o por una rivalidad que se fue de las manos?",
      "¿Hay alguna foto antigua tuya que te cueste mirar? ¿Qué le dirías a la persona que aparece en ella?",
      "¿Crees que una amistad de verdad sobrevive a la competencia, o tarde o temprano uno de los dos sale perdiendo?",
      "¿Qué guardas desde hace años —cartas, mensajes, objetos— aunque sepas que te haría bien deshacerte de ello?"
    ],
    "words": [
      "ser uña y carne",
      "pasar el testigo",
      "dejar a medias",
      "irse de las manos"
    ]
  },
  terraza: {
    "title": "Champán y helicóptero",
    "line": "La terraza cuelga sobre el Strip como un palco de ópera: abajo, las fuentes bailan una canción antigua y los neones prometen cosas que nunca cumplen. Un helicóptero espera en su plataforma con las hélices quietas. Marco Montalbán, traje blanco, bronceado de yate y ojeras mal disimuladas, te tiende una copa de champán. «Valentina, por fin. Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
    "money": {
      "100": "Marco ha hecho que alguien investigue tu cuenta corriente y te lo suelta con una sonrisa: cien dólares, un alquiler atrasado y una tarjeta de crédito al límite. «No te lo tomes a mal; en esta familia lo averiguamos todo antes de negociar». Detrás de él, las fuentes del Strip se encienden a la vez. Te tiende una copa. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
      "500": "Llegas a la terraza con quinientos dólares, una ficha que pesa como una losa y muy pocas ganas de celebrar nada. Marco Montalbán te espera apoyado en la barandilla, con dos copas en la mano y la corbata deshecha. «Pareces agotada. Normal: esta ciudad te exprime si no has nacido en ella». Te tiende una copa. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
      "1000": "Marco te recibe con un dato, como quien enseña una carta: has jugado mil dólares esta noche y has salido ganando. «Mi padre jugaba así de joven: poco, pero con hambre de lobo». Detrás de él, el piloto del helicóptero mira el reloj por tercera vez. Te tiende una copa de champán. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
      "10000": "Con diez mil dólares jugados ya formas parte de las hojas de cálculo de Marco: sabe lo que apuestas de media, qué bebes y cuánto aguantas en cada mesa. Te lo enumera con orgullo de contable mientras las fuentes saltan a su espalda. «Información, Valentina: la única moneda que nunca se devalúa». Te tiende una copa. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
      "100000": "Para recibir a una ballena de cien mil, Marco ha tirado la casa por la ventana: caviar sobre hielo, un cuarteto de cuerda tocando a Sinatra y tus iniciales bordadas en las servilletas. Sabe de sobra que no te vas a dejar deslumbrar, pero no conoce otra forma de hablar con la gente. Te tiende una copa y se le nota el pulso inquieto. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
      "1000000": "Tu millón contra el casino de su padre: Marco te observa como un jugador de ajedrez que acaba de perder la reina. Ha despejado la terraza; solo quedan dos guardaespaldas haciéndose los distraídos y un helicóptero con el motor en marcha, por si hay que salir corriendo. Levanta su copa antes que tú, con una cortesía que suena a amenaza. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»",
      "nada": "Llegas a la terraza sin un dólar, con la ficha dorada como único patrimonio y los pies destrozados. Marco Montalbán, traje blanco y bronceado de yate, te mira de arriba abajo con desdén de niño bien. «Así que esta es la heredera que tiene a mi padre sin dormir. No tienes ni para un taxi, ¿verdad?». Aun así, te tiende una copa de champán. «Tú y yo somos hijos de hombres que se jugaron lo que no tenían. ¿Brindas conmigo, aunque sea por educación?»"
    },
    "options": [
      {
        "say": "Brindo, aunque de mi padre solo heredé preguntas y una ficha que nadie quiere cambiarme.",
        "reply": "Marco choca su copa con la tuya, con demasiada fuerza. «Las preguntas salen carísimas en esta ciudad. Yo, en cambio, vendo respuestas al contado y sin letra pequeña»."
      },
      {
        "say": "Yo no brindo con quien quiere echarme de la ciudad. Ve al grano, Marco, que se me hace tarde.",
        "reply": "Marco deja la copa en la barandilla, casi aliviado. «Al grano, entonces. Prefiero a la gente práctica: con ella se negocia sin tanto teatro»."
      },
      {
        "say": "¿Siempre ligas así, con helicóptero y amenazas veladas? Te ha quedado un poco de telenovela.",
        "reply": "Marco se ríe, pero la risa le sale torcida. «No es una amenaza, es una invitación. Cuando amenazo, créeme, no pongo champán»."
      }
    ],
    "line2": "Saca del bolsillo interior un sobre abultado. «Un millón de dólares, en efectivo. El helicóptero te deja en el aeropuerto en veinte minutos. A cambio, te olvidas de la ficha, del papel y de mi padre. Si hubieras tardado un año más en venir, ya no quedaría nada que reclamar».",
    "options2": [
      {
        "say": "¿Un millón por un casino entero? O me tomas por tonta o estás desesperado.",
        "reply": "A Marco se le tensa la mandíbula. «Las dos cosas pueden ser verdad a la vez. Pero no olvides que en el desierto nadie cobra cheques»."
      },
      {
        "say": "Guárdatelo. Si mi padre rechazó algo parecido, no voy a ser yo quien lo acepte.",
        "reply": "Marco palidece bajo el bronceado. «Y ya ves cómo acabó él», susurra. Luego, casi para sí: «Yo no soy mi padre. Aún no sé si eso es una suerte o una desgracia»."
      },
      {
        "say": "Por mucho dinero que me ofrezcas, se nota que lo que te asusta no es perder el casino.",
        "reply": "Marco te mira como si le hubieras arrancado la careta. «No», admite. «Lo que me asusta es que mi padre te quiera más a ti, que acabas de llegar, que a mí, que llevo treinta años aquí»."
      }
    ],
    "end": "El helicóptero despega sin ti y se pierde entre los neones. Marco se queda solo junto a la barandilla, con el sobre en la mano, como un niño al que nadie quiere aceptarle el regalo. Al final del pasillo, la puerta de madera del despacho del dueño está entreabierta.",
    "talk": [
      "¿Qué ves en Marco: un villano, un hijo herido o un poco de cada cosa?",
      "¿Existe una cifra por la que renunciarías a conocer una verdad importante sobre tu familia?",
      "¿Has sentido alguna vez celos de un hermano, un primo o un compañero porque parecía el favorito?",
      "¿Qué pesa más en una herencia: el dinero, las deudas o las expectativas de los demás?",
      "¿Por qué crees que algunas personas intentan comprar justo aquello que más miedo les da?"
    ],
    "words": [
      "tirar la casa por la ventana",
      "ir al grano",
      "al contado",
      "arrancar la careta"
    ]
  },
  oficina: {
    "title": "La cuenta pendiente",
    "line": "El despacho del dueño huele a madera encerada, a whisky viejo y a jarabe para la tos. Don Aurelio Montalbán, consumido dentro de un traje que le queda grande, espera en su silla de ruedas junto a una caja fuerte de hierro forjado. Al verte, se le humedecen los ojos. «Entras sin llamar, igual que él. Y miras como él, como si todo fuera negociable. Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
    "money": {
      "100": "A Don Aurelio le hace gracia que traigas cien dólares y no lo disimula. «El día que empecé aquí llevaba treinta y una corbata que me habían prestado», recuerda desde su silla de ruedas, entre toses. «Tu padre llevaba todavía menos, y aun así se comió la ciudad». Señala la silla frente a él. «Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
      "500": "Traes quinientos dólares, la ficha dorada y un cansancio que no es solo de esta noche, sino de veinticinco años de preguntas. Don Aurelio, hundido en su silla de ruedas, te observa en silencio un buen rato, como si necesitara comprobar que eres real. «Tienes sus mismas manos», dice al fin. «Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
      "1000": "Sobre la mesa de Don Aurelio está tu historial de la noche: mil dólares jugados, un pleno al diecisiete y ni una copa de más. «Mis empleados me lo cuentan todo; a mi edad, es el único entretenimiento que me queda», bromea, aunque la tos le corta la risa. Luego aparta los papeles con el dorso de la mano. «Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
      "10000": "Diez mil dólares jugados esta noche y Don Aurelio conoce cada uno de ellos. «Arriesgas como él, aguantas como él y te levantas de la mesa como él: sin dar explicaciones a nadie», dice mientras se sirve un dedo de whisky con mano temblorosa. Detrás de él, la caja fuerte espera con la puerta cerrada. «Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
      "100000": "Don Aurelio ha dado orden de que te traten como a una reina: suite, chófer, crédito ilimitado. Ahora te mira desde su silla de ruedas con una mezcla incómoda de orgullo y de culpa. «Cien mil dólares. Hace veinticinco años, eso era lo que tu padre dejaba de propina en una buena noche. Luego llegó la noche mala… para mí. Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
      "1000000": "Un millón de dólares y medio Las Vegas pisándote los talones: la Familia, los casinos rivales, los periodistas. Don Aurelio se ríe hasta que la tos lo obliga a parar. «Ni tu padre, en sus mejores tiempos, consiguió poner tan nerviosa a esta ciudad. O estás muy segura de ti o estás muy loca». Sobre la mesa, una botella de whisky de treinta años espera intacta. «Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»",
      "nada": "Entras en el despacho sin un dólar, con los zapatos en la mano y la ficha dorada apretada en el puño, como si fuera lo único que te queda. Don Aurelio, en su silla de ruedas junto a la caja fuerte, sonríe con una ternura que no esperabas. «Él también llegó así a esta ciudad: sin nada en los bolsillos y con todo en la mirada. Siéntate, Valentina: ya es medianoche y tenemos una cuenta pendiente. ¿Por dónde quieres que empiece?»"
    },
    "options": [
      {
        "say": "Llevo veinticinco años esperando esta conversación, así que empiece por servirme ese whisky.",
        "reply": "Don Aurelio llena dos vasos con un pulso que tiembla más que su voz. «Tu padre tampoco tenía prisa con lo importante. Solo con las cartas»."
      },
      {
        "say": "Por el final, Don Aurelio. ¿Qué le hizo usted a mi padre?",
        "reply": "El viejo cierra los ojos un largo instante. «Lo peor que se le puede hacer a un amigo: no pagarle lo que era suyo. Y después dejar que todo el mundo creyera que el ladrón había sido él»."
      },
      {
        "say": "Empiece por explicarme cómo se tiene un despacho tan bonito después de haber perdido tanto.",
        "reply": "Don Aurelio sonríe con amargura. «Qué cruel eres, y qué razón tienes. Conservé este despacho a costa de perder lo único que no se recupera: un amigo y la conciencia tranquila»."
      }
    ],
    "line2": "Gira la rueda de la caja fuerte. Dentro hay un contrato amarillento y una dirección escrita a mano. «Ernesto ganó este casino aquella noche. Yo no le pagué. Él se marchó para que ni a tu madre ni a ti les pasara nada. La ficha era suya; te la envié yo. Ahora te toca elegir: la mitad del Gran Meridiano o la verdad completa sobre dónde está tu padre».",
    "options2": [
      {
        "say": "Quiero la verdad. Por muy tentadora que sea la otra mitad, el dinero ya ha roto demasiadas cosas esta noche.",
        "reply": "Don Aurelio asiente, con los ojos brillantes. «Sabía que dirías eso. Es lo que habría dicho él. Con esta dirección empiezo a saldar lo que le debo»."
      },
      {
        "say": "Me quedo con la mitad del casino. La verdad, si existe, ya la encontraré por mi cuenta.",
        "reply": "El viejo se ríe y la risa termina en un ataque de tos. «Eres más Montalbán de lo que crees y más Duarte de lo que me temía. Bienvenida a la casa, socia»."
      },
      {
        "say": "¿Y si me niego a elegir? Si de verdad quisiera reparar el daño, me daría las dos cosas.",
        "reply": "Don Aurelio te sostiene la mirada un largo rato. «Tienes razón. Te obligo a elegir porque es lo único que todavía puedo controlar. Y porque a tu padre también lo obligaron»."
      }
    ],
    "end": "Don Aurelio empuja el contrato y la dirección hacia ti y deja la decisión sobre la mesa, como quien abandona su última carta sin mirarla. Por la ventana, el Strip sigue parpadeando, ajeno a todo, como si esta noche no hubiera cambiado nada.",
    "talk": [
      "¿Qué habrías elegido tú: la mitad del casino o la verdad sobre Ernesto? ¿Por qué?",
      "¿Crees que se puede perdonar a alguien que te destrozó la vida, aunque te lo pida en el último momento?",
      "¿Hay alguna verdad familiar que preferirías no haber descubierto nunca?",
      "Si esta fuera tu última noche, ¿de qué te arrepentirías? ¿Qué te impide arreglarlo mañana?",
      "¿Qué dice de una persona que tarde veinticinco años en reconocer un error?"
    ],
    "words": [
      "cuenta pendiente",
      "a costa de",
      "saldar una deuda",
      "por mi cuenta"
    ]
  },
  borracho: {
    "title": "Marido por cinco minutos",
    "line": "A dos pasos de la mesa de dados, dos guardias de seguridad remolcan hacia la salida a Billy, un tejano de bigote rubio, sombrero de vaquero y botas de avestruz, que va borracho como una cuba y canta a pleno pulmón. Al pasar junto a ti, se suelta de un tirón y se te cuelga del brazo como un koala de un eucalipto. «¡Mi vida, por fin! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
    "money": {
      "100": "Acabas de dejarte veinte de tus cien dólares en los dados cuando dos guardias pasan remolcando a Billy, un tejano con sombrero de vaquero que apesta a whisky barato. Billy se suelta un brazo, te mete en el bolso un billete arrugado de cinco y te guiña un ojo. «¡Para que me salgas barata, cariño! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
      "500": "Con tus quinientos dólares casi enteros, observas la mesa de dados cuando pasan dos guardias llevando a rastras a Billy, un tejano de bigote rubio que canta una canción country sin acertar ni una nota. Al verte, se suelta de un tirón y se te cuelga del brazo. «¡Mi vida, por fin te encuentro! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
      "1000": "Acabas de ganar mil dólares en los dados y la mesa entera te vitorea cuando dos guardias pasan arrastrando a Billy, que ha intentado subirse al tapete para bailar con las botas puestas. Billy ve tu montón de fichas, se le ilumina la cara y se te agarra del brazo. «¡Esa es mi mujer, la que trae la suerte! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
      "10000": "El jefe de sala te escolta en persona hacia la mesa de alto límite, con diez mil dólares en fichas, cuando dos guardias se cruzan en su camino arrastrando a Billy, un tejano con la camisa empapada de cerveza. El jefe de sala se pone blanco: Billy se ha soltado y se te ha pegado al brazo como una garrapata. «¡Cariño, diles quién soy yo! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
      "100000": "Vas con tu anfitrión camino de los dados, con cien mil dólares de crédito y un camarero detrás cargando tu copa, cuando aparece Billy, arrastrado por dos guardias, gritando que tiene tres ranchos y doce pozos de petróleo. Los guardias dudan: si de verdad es tu marido, el borracho pasa a ser cliente preferente. Billy lo intuye y se te pega como una lapa. «¡Mi reina! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
      "1000000": "Con el rumor del millón, a tu alrededor se han juntado curiosos, dos guardias de escolta y un fotógrafo de una revista local. Entonces irrumpe Billy, arrastrado por otros dos guardias, berreando que él también es millonario y que lo discriminan por tejano. Se suelta, cae de rodillas delante de ti y te besa los zapatos. «¡Amor mío, sálvame! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»",
      "nada": "Estás junto a los dados sin un dólar, viendo cómo otros se juegan la hipoteca, cuando dos guardias pasan remolcando a Billy, un tejano con sombrero de vaquero y una borrachera épica. Billy te echa un vistazo, deduce que estás tan pelada como él y le brillan los ojos. «¡Los pobres tenemos que ayudarnos entre nosotros, preciosa! ¡Diles a estos señores que soy tu marido, por lo que más quieras!»"
    },
    "options": [
      {
        "say": "Sí, es mi marido, por desgracia. Ni se imaginan la paciencia que hay que tenerle.",
        "reply": "Los guardias se miran, desconcertados, y aflojan las manos. Billy se recoloca el sombrero con dignidad de sheriff. «¿Lo ven? Ella sí me entiende. Es la única mujer en el mundo que me entiende»."
      },
      {
        "say": "No lo había visto en mi vida, y si de mí dependiera, no lo volvería a ver.",
        "reply": "Billy se lleva la mano al pecho como si le hubieran disparado. «¡Traidora! ¡En mi pueblo te habrían colgado por menos!», brama, mientras los guardias lo arrastran otro metro."
      },
      {
        "say": "Depende. ¿Cuánto pagas por una esposa de alquiler durante cinco minutos?",
        "reply": "Billy se ríe tanto que se le cae el sombrero. «¡Esta sí sabe hacer negocios! ¡Cincuenta dólares y mis botas! No, las botas no, que son de avestruz auténtico»."
      }
    ],
    "line2": "Uno de los guardias, un gigante con ojeras de no haber dormido desde el año pasado, se cruza de brazos. «Señorita, este caballero ha vomitado en la mesa de dados, ha llamado ladrón al crupier y le ha pedido matrimonio a una tragamonedas. ¿Seguro que quiere responsabilizarse de él?»",
    "options2": [
      {
        "say": "Qué remedio. Lo prometí ante el altar: en la salud y en la borrachera.",
        "reply": "El guardia resopla y suelta a Billy. «Usted sabrá. Pero como vuelva a acercarse a una mesa, se van los dos a la calle». Billy intenta guiñarte un ojo y se le cierran los dos."
      },
      {
        "say": "Llévenselo, pero con delicadeza, que mañana va a tener una resaca de época.",
        "reply": "El guardia casi sonríe. «Con delicadeza, señorita. Lo meteremos en un taxi con el sombrero puesto». Mientras se lo llevan, Billy te lanza un beso torpe: «¡Te espero en Texas, mi vida!»"
      },
      {
        "say": "¿A una tragamonedas? Hombre, por lo menos tiene ambición.",
        "reply": "El gigante se ríe a su pesar. «La máquina lo rechazó, señorita. Por eso se puso a vomitar». Billy asiente, ofendidísimo: «Fue muy cruel conmigo, muy cruel»."
      }
    ],
    "end": "Billy se pierde entre uniformes y humo, cantando una ranchera desafinada. A ti te queda olor a whisky en la manga y la sospecha de que, en esta ciudad, los matrimonios más largos duran lo que dura una canción.",
    "talk": [
      "¿Te ha tocado alguna vez cuidar de alguien borracho en una noche que prometía ser divertida? ¿Cómo acabó?",
      "¿Mentirías por un desconocido para sacarlo de un apuro? ¿Dónde pondrías el límite?",
      "¿Por qué crees que el alcohol vuelve a unas personas agresivas y a otras, cariñosísimas?",
      "¿Qué es lo más vergonzoso que has hecho, o has visto hacer, con unas copas de más?",
      "¿No te parece contradictorio que la sociedad se burle de los borrachos y a la vez celebre tanto la bebida?"
    ],
    "words": [
      "borracho como una cuba",
      "pegarse como una lapa",
      "qué remedio",
      "resaca de época"
    ]
  },
  jackpot: {
    "title": "Novecientos mil y un chándal",
    "line": "De pronto, el pasillo de las tragamonedas se vuelve loco: sirenas, luces giratorias, una música de feria a todo volumen. La máquina de al lado acaba de soltar el jackpot. Yolanda, una abuela de Ohio en chándal rosa chicle, salta, chilla y menea las caderas como si tuviera veinte años. Te agarra por los hombros y te planta dos besos sonoros. «¡Novecientos mil dólares, cielo! ¡Ven aquí, abrázame y dime que no estoy soñando!»",
    "money": {
      "100": "Llevas una hora viendo cómo tus cien dólares desaparecen de veinticinco en veinticinco centavos cuando, a tu lado, estalla la fiesta: Yolanda, abuela de Ohio en chándal rosa, ha ganado el jackpot apostando dos dólares. Te sujeta la cara con las dos manos. «¡Dos dólares, cielo, dos! ¡Novecientos mil! ¡Ven aquí, abrázame y dime que no estoy soñando!»",
      "500": "A mitad de tu noche de quinientos dólares, sin ganar ni perder demasiado, la máquina de al lado se pone a aullar: luces, sirenas, una lluvia de confeti en la pantalla. Yolanda, una abuela de Ohio en chándal rosa chicle, baila como si estuviera en la boda de su nieta. «¡Novecientos mil dólares, hija mía! ¡Ven aquí, abrázame y dime que no estoy soñando!»",
      "1000": "Acabas de dejarte mil dólares en la ruleta y vagas entre las tragamonedas con cara de funeral cuando el jackpot estalla a tu lado. Yolanda, una abuela de Ohio en chándal rosa, ve tu expresión y se parte de risa. «¡Quita esa cara de entierro, que la suerte se contagia! ¡Novecientos mil! ¡Ven aquí, abrázame y dime que no estoy soñando!»",
      "10000": "Un encargado te acompaña a las máquinas de alto límite con tus diez mil dólares cuando todo el pasillo se ilumina: Yolanda, abuela de Ohio en chándal rosa, ha ganado el jackpot en una máquina de un dólar. El encargado te deja plantada para correr hacia ella con los formularios de impuestos. Yolanda lo esquiva con un quiebro de futbolista y viene directa a ti. «¡Novecientos mil! ¡Ven aquí, abrázame y dime que no estoy soñando!»",
      "100000": "Tu anfitrión te está explicando las ventajas de tu nuevo nivel en el programa de fidelización cuando las sirenas lo dejan con la palabra en la boca: Yolanda, una abuela de Ohio en chándal rosa, ha ganado el jackpot. Ve tus joyas, tu séquito y tu cara de aburrimiento. «¡Tú, la de las joyas! ¿Sabes lo que es ganar algo de verdad? ¡Novecientos mil! ¡Ven aquí, abrázame y dime que no estoy soñando!»",
      "1000000": "Todo el casino hablaba de tu millón hasta que la máquina de al lado te roba el protagonismo: sirenas, luces, campanas. Yolanda, una abuela de Ohio en chándal rosa, acaba de llevarse el jackpot y, de repente, la reina de la noche es ella. Te ve y suelta una carcajada. «¡Ya somos dos millonarias, cielo! Bueno, casi. ¡Ven aquí, abrázame y dime que no estoy soñando!»",
      "nada": "Te has sentado ante una tragamonedas sin dinero, solo para que descansen los pies, cuando la máquina de al lado revienta en sirenas y luces. Yolanda, una abuela de Ohio en chándal rosa chicle, acaba de llevarse el jackpot y te mira como si fueras una aparición. «¡Tú no tienes ni para un café, se te nota a la legua! ¡Pues esta noche pago yo! ¡Ven aquí, abrázame y dime que no estoy soñando!»"
    },
    "options": [
      {
        "say": "¡No está soñando, campeona! Esto hay que celebrarlo a lo grande, y hasta que amanezca.",
        "reply": "Yolanda te abraza tan fuerte que te cruje la espalda. «¡Champán para todo el pasillo!», le grita a una camarera. «¡Invita la abuela!»"
      },
      {
        "say": "¡Qué pasada! Pero, antes de celebrarlo, guarde bien el comprobante, que aquí hay mucho listo.",
        "reply": "Yolanda se mete el papel en el sujetador con una agilidad sorprendente. «Ahí no ha metido nadie la mano desde que enviudé, cielo. Está más seguro que en un banco suizo»."
      },
      {
        "say": "¿Y en qué se lo va a gastar? Dígame que en algo muy loco, por favor.",
        "reply": "Yolanda se pone seria un instante. «En un crucero por el Caribe con un bailarín cubano. O en unos dientes nuevos. Aún no lo tengo claro»."
      }
    ],
    "line2": "De repente, Yolanda deja de bailar y se le empañan las gafas. «Tengo tres hijos. No me llaman ni por mi cumpleaños. Si se enteran de esto, van a venir corriendo con sus deudas, sus parejas y sus besos de pega. ¿Se lo cuento, cielo? ¿Tú qué harías en mi lugar?»",
    "options2": [
      {
        "say": "Yo no les diría ni una palabra. Que la visiten por usted, no por el jackpot.",
        "reply": "Yolanda asiente despacio. «Tienes razón. Si vienen sin saberlo, sabré quién me quiere. Y si no viene ninguno, me lo gasto todo en el crucero y en el cubano»."
      },
      {
        "say": "Cuénteselo, pero que se lo ganen: una visita, una comida, una disculpa sincera.",
        "reply": "Yolanda se ríe con picardía. «¡Una disculpa por cada cien mil! Me encanta. El mayor me debe por lo menos tres»."
      },
      {
        "say": "Cuénteselo todo. Puede que el dinero no compre cariño, pero quizá les refresque la memoria.",
        "reply": "Yolanda suelta una carcajada amarga. «Qué mala eres, y qué razón tienes. Bueno, los llamo. Pero el cubano me lo quedo de todas formas»."
      }
    ],
    "end": "Yolanda se aleja entre empleados con formularios y curiosos con el móvil en alto, bailando con su chándal rosa. Te deja una marca de pintalabios en la mejilla y la impresión de haber visto algo rarísimo en Las Vegas: alguien que le gana a la casa y no piensa devolvérselo.",
    "talk": [
      "Si mañana ganaras una fortuna, ¿a quién se lo contarías primero y a quién no se lo dirías jamás?",
      "¿Crees que el dinero cambia a las personas o simplemente saca a la luz lo que ya eran?",
      "¿Has tenido la sensación de que alguien te quería por interés? ¿Cómo te diste cuenta?",
      "Si te tocara una fortuna, ¿cumplirías un sueño disparatado, ayudarías a tu familia o desaparecerías del mapa?",
      "¿Qué dice de una familia que solo se reúna cuando hay herencias o entierros de por medio?"
    ],
    "words": [
      "¡qué pasada!",
      "a la legua",
      "dejar con la palabra en la boca",
      "por interés"
    ]
  },
  tramposo: {
    "title": "La cisterna del último cubículo",
    "line": "Detrás de las mesas de blackjack, dos guardias acaban de ponerle las esposas a Gus, un contador de cartas con una peluca pelirroja que se le ha resbalado hasta la oreja. Mientras lo empujan hacia la puerta de seguridad, se las arregla para rozarte el hombro y hablarte sin mover los labios, como un ventrílocuo. «Rubia, no me mires y escucha. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
    "money": {
      "100": "Acabas de perder la mitad de tus cien dólares en una mesa de mínimo bajo cuando seguridad esposa a Gus, el de la peluca pelirroja, que jugaba a tu lado. Mientras se lo llevan, te susurra: «Nunca pidas carta con doce si el crupier enseña un seis, rubia; ese consejo te lo regalo. Y ahora, lo importante. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
      "500": "Llevas quinientos dólares y una racha más que decente en el blackjack, en parte gracias a los consejos que te soltaba en voz baja Gus, el de la peluca pelirroja. Ahora dos guardias lo esposan delante de ti. Al pasar, te habla sin mover los labios. «Bien jugado, rubia, pero ahora viene lo difícil. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
      "1000": "Has ganado mil dólares siguiendo las señas discretas de Gus, el de la peluca pelirroja, y ahora dos guardias lo esposan delante de ti. El jefe de mesa te mira de reojo: ¿cómplice o simplemente afortunada? Gus te dedica una sonrisa de una desfachatez admirable. «Tú no sabes nada de nada, ¿verdad, rubia? Mejor. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
      "10000": "Diez mil dólares en la mesa de alto límite y, a tu lado, Gus, el de la peluca pelirroja, contando cartas con la precisión de un reloj atómico. Hasta que dos guardias lo esposan sin miramientos. El jefe de sala se deshace en disculpas contigo mientras Gus, al pasar, te susurra: «Ni me mires, que te graban. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
      "100000": "Gus, el de la peluca pelirroja, se había pasado toda la noche en tu mesa privada de cien mil, contando cartas a la sombra de una ballena. Ahora dos guardias lo esposan y tu anfitrión jura por su madre que no volverá a pasar. Gus finge un tropiezo para acercarse a tu oído. «A una ballena nadie la registra, rubia. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
      "1000000": "Con tu millón sobre la mesa, la seguridad del casino está tan paranoica que esposa a cualquiera que respire raro, y le toca a Gus, el de la peluca pelirroja, que, para ser justos, sí contaba cartas. Mientras lo sacan entre flashes y curiosos, te guiña un ojo. «Con todo el mundo pendiente de ti, nadie se fija en mí. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»",
      "nada": "Estás junto al blackjack sin un dólar, mirando cómo juegan los demás, cuando dos guardias esposan a Gus, el de la peluca pelirroja ladeada. Al pasar, te calibra de un vistazo y sonríe. «Tú estás más tiesa que yo, rubia. Perfecto: tú necesitas dinero y yo necesito unas manos limpias. He escondido una cosa en el baño de señoras, en la cisterna del último cubículo. ¿Me harías un favor?»"
    },
    "options": [
      {
        "say": "Depende del favor y de lo que me toque a mí, guapo. Yo no trabajo gratis.",
        "reply": "Gus sonríe a pesar de las esposas. «Un veinticinco por ciento y mi gratitud eterna, que no vale mucho pero no caduca»."
      },
      {
        "say": "Ni loca. Yo no me meto en los líos de un hombre con peluca.",
        "reply": "«Ya estás metida, rubia», susurra Gus. «Las cámaras te han visto hablar conmigo. Así que, o me ayudas a mí, o te ayudas a ti misma»."
      },
      {
        "say": "¿Qué hay en esa cisterna? ¿Dinero, fichas o algo que me va a quitar el sueño?",
        "reply": "Gus se ríe por la nariz. «Un cuaderno con los números de teléfono y las deudas de media planta VIP. Si cae en malas manos, rueda más de una cabeza»."
      }
    ],
    "line2": "Los guardias se detienen un momento ante la puerta de seguridad para pasar la tarjeta. Gus aprovecha para soltarlo todo de golpe: «Escucha: lo sacas de ahí y se lo das a mi hermana, la que sirve copas en el bar central. Ella sabrá qué hacer. Ojalá no tuviera que pedírselo a una desconocida, pero no me queda nadie más. ¿Me lo prometes o me dejas tirado como todos?»",
    "options2": [
      {
        "say": "Te lo prometo. Pero si me pillan, diré que la idea fue tuya y que me amenazaste con la peluca.",
        "reply": "Gus suelta una carcajada mientras lo empujan. «¡Hecho! Y quédatela si quieres, rubia; a ti te sentará mejor que a mí»."
      },
      {
        "say": "No te lo prometo. Le diré a tu hermana dónde está, y que decida ella si se la juega.",
        "reply": "Gus hace una mueca, pero asiente. «Me parece justo. Ella siempre decía que yo acabaría así. Dile que tenía razón; le va a hacer una ilusión tremenda»."
      },
      {
        "say": "Primero dime una cosa: ¿en ese cuaderno aparece el apellido Duarte?",
        "reply": "Gus se pone serio de golpe. «Aparece, sí. Subrayado dos veces. Pero esa información te la cobro aparte, rubia». La puerta de seguridad se cierra tras él antes de que puedas preguntar nada más."
      }
    ],
    "end": "La puerta de seguridad se cierra con un golpe metálico. En la moqueta queda un mechón de peluca pelirroja, como un animalillo atropellado. El baño de señoras está a veinte pasos, y la decisión es solo tuya.",
    "talk": [
      "¿Harías un favor arriesgado a un desconocido? ¿Qué tendría que pasar para que dijeras que sí?",
      "¿Hay alguna trampa que te parezca aceptable, en el juego, en los impuestos o en el amor?",
      "¿Te han pillado alguna vez haciendo algo que no debías? ¿Qué sentiste: vergüenza, rabia o alivio?",
      "¿Por qué crees que en el cine los tramposos simpáticos nos caen mejor que los honrados aburridos?",
      "¿Recuerdas alguna ocasión en la que miraste hacia otro lado cuando alguien necesitaba ayuda? ¿Cómo lo ves hoy?"
    ],
    "words": [
      "dejar tirado a alguien",
      "estar tieso",
      "sin miramientos",
      "ni loca"
    ]
  },
  perdedor: {
    "title": "Un reloj por doscientos",
    "line": "Junto a la ruleta, sentado en la moqueta con un traje italiano arrugado y la corbata colgando como una bandera rendida, Andrés llora sin el menor pudor. Esta noche lo ha perdido todo, incluido el dinero de la boda de su hija. Se desabrocha un reloj de oro y te lo ofrece con dedos temblorosos. «Es suizo, señorita, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
    "money": {
      "100": "Con tus cien dólares acabas de ganar lo justo para sentirte afortunada cuando descubres a Andrés sentado en la moqueta junto a la ruleta: traje caro, ojos hinchados, la ruina escrita en la cara. Ha perdido hasta el dinero de la boda de su hija. Te tiende un reloj de oro. «La he visto ganar; usted trae suerte. Es suizo, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
      "500": "Junto a la ruleta, con tus quinientos dólares en el bolso, casi tropiezas con Andrés: traje italiano, sentado en la moqueta, llorando sin disimulo. Lo ha perdido todo, incluido el dinero de la boda de su hija. Una camarera pasa a su lado sin mirarlo, como quien esquiva un charco. Él se desabrocha un reloj de oro. «Es suizo, señorita, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
      "1000": "Los empleados ya te llaman por tu nombre por los mil dólares que has movido esta noche, y Andrés lo ha oído desde la moqueta, junto a la ruleta, donde llora con su traje de diseño hecho un acordeón. Ha perdido hasta el dinero de la boda de su hija. Se acerca a ti a gatas, con un reloj de oro en la mano. «Usted es de las que ganan. Es suizo, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
      "10000": "Con diez mil dólares en fichas, todo el mundo te sonríe; Andrés, sentado en la moqueta junto a la ruleta, está en el lado oscuro de la misma noche. Lo ha perdido todo, hasta el dinero de la boda de su hija, y ya nadie le ofrece ni un vaso de agua. Te tiende un reloj de oro. «Hace tres horas yo era como usted. Es suizo, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
      "100000": "Andrés, sentado en la moqueta junto a la ruleta, guarda en el bolsillo la misma tarjeta negra de cliente que tú, solo que la suya ya no sirve para nada: esta noche ha perdido su línea de crédito, su dignidad y el dinero de la boda de su hija. Al ver tu séquito, suelta una risa amarga y te tiende un reloj de oro. «Así empecé yo, rodeado de gente muy amable. Es suizo, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
      "1000000": "El casino entero aplaude tu millón y, en medio del alboroto, Andrés sigue sentado en la moqueta junto a la ruleta, con la corbata colgando y los ojos rojos. Lo ha perdido todo, incluido el dinero de la boda de su hija, y tu suerte le duele como una bofetada. Aun así, se arrastra hasta ti con un reloj de oro. «Usted no lo necesita, ya lo sé, pero yo sí. Es suizo, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»",
      "nada": "Te sientas en la moqueta junto a la ruleta, sin un dólar, porque los tacones te están matando. A tu lado, un hombre con traje italiano llora como un crío: Andrés, que lo ha perdido todo, hasta el dinero de la boda de su hija. No se da cuenta de que estás tan arruinada como él; solo ve un vestido rojo y una última esperanza. Se desabrocha un reloj de oro. «Es suizo, vale una fortuna. Se lo vendo por doscientos dólares. ¿Lo quiere?»"
    },
    "options": [
      {
        "say": "Quédese el reloj y levántese del suelo. Lo que necesita ahora es un taxi, no doscientos dólares.",
        "reply": "Andrés parpadea, desconcertado. «Es lo primero sensato que oigo desde que llegué. Los demás solo me ofrecían otra ronda gratis y otro crédito»."
      },
      {
        "say": "Un reloj suizo por doscientos dólares es demasiado bonito para ser verdad. ¿Dónde está la trampa?",
        "reply": "Andrés se ríe entre lágrimas. «La trampa soy yo, señorita. Me lo regaló mi hija cuando llegué a los cincuenta, y aquí estoy, malvendiéndolo»."
      },
      {
        "say": "¿Y qué haría con los doscientos? Sea sincero: volver a la ruleta, ¿a que sí?",
        "reply": "Andrés baja la mirada, pillado. «Al diecisiete. Una última vez. Si sale, recupero la boda; si no… total, ya estoy en el suelo»."
      }
    ],
    "line2": "Andrés se seca la cara con la manga de seda. «La boda es dentro de tres semanas. Mi hija no sabe nada; mi mujer cree que estoy en un congreso en Denver. Si me hubiera levantado de la mesa a medianoche, aún me quedaría algo. ¿Se lo confieso todo o me invento una historia que me dé tiempo?»",
    "options2": [
      {
        "say": "Contarlo todo, y cuanto antes. Las mentiras, igual que las deudas, engordan con el tiempo.",
        "reply": "Andrés asiente, derrotado. «Mi mujer me va a matar». Luego, casi sonriendo: «Pero al menos me matará por lo que hice, y no por lo que escondí»."
      },
      {
        "say": "Inventarse algo, no. Pero tampoco hace falta soltarlo todo de golpe en el desayuno.",
        "reply": "Andrés te mira con un brillo de esperanza. «Poco a poco, ¿no? Primero la boda, después lo demás». Se pone de pie por primera vez en una hora."
      },
      {
        "say": "Yo empezaría por su hija. Es a quien más le afecta, y quien merece saberlo primero.",
        "reply": "Andrés se echa a llorar otra vez, pero de otra manera. «Ella me va a perdonar enseguida. Y eso es justo lo que más vergüenza me da»."
      }
    ],
    "end": "Andrés se levanta, se ajusta la corbata y se guarda el reloj en el bolsillo. Mientras se aleja hacia la salida, la bola sigue saltando en la ruleta a su espalda, como si aquello nunca hubiera ido con él.",
    "talk": [
      "¿Has visto a alguien perderlo todo, por el juego, por el alcohol o por amor? ¿Qué sentiste al verlo?",
      "¿Qué te resulta más difícil: confesar algo grave o cargar con una mentira durante mucho tiempo?",
      "¿Comprarías algo valioso aprovechando la desesperación de otra persona? ¿Dónde está la línea entre negocio y abuso?",
      "¿A quién te daría más vergüenza decepcionar: a tus padres, a tus hijos o a tu pareja?",
      "¿Por qué crees que a algunas personas les cuesta tanto levantarse de la mesa cuando van perdiendo?"
    ],
    "words": [
      "demasiado bonito para ser verdad",
      "malvender",
      "de golpe",
      "sin el menor pudor"
    ]
  },
  despedida: {
    "title": "La novia que duda",
    "line": "A la entrada del club, una despedida de soltera ha invadido la acera: velos de tul, bandas rosas con purpurina, globos con formas que harían santiguarse a una monja. La novia, Cinthia, en equilibrio precario sobre unos tacones de vértigo, te agarra de las dos manos mientras sus amigas bailan reguetón sin enterarse de nada. «Tú tienes pinta de saber cosas de la vida. Me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
    "money": {
      "100": "Te has quedado en la puerta del club haciendo cálculos: ¿te alcanzan tus cien dólares para la entrada y una copa, o solo para la entrada? Una despedida de soltera te rodea entre chillidos y alguien te pone una diadema con lucecitas. La novia, Cinthia, te mira fijamente y se echa a llorar sin previo aviso. «Me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
      "500": "Con quinientos dólares y la noche por delante, te cruzas frente al club con una despedida de soltera en pleno apogeo: velos, purpurina y una amiga subida a una papelera cantando a gritos. La novia, Cinthia, se tambalea hacia ti sobre unos tacones de vértigo y te agarra de las manos. «Tienes cara de saber cosas. Me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
      "1000": "Con tus mil dólares has conseguido una mesa en el club, y una despedida de soltera la ha ocupado entera mientras ibas al baño, convencidas de que la habían pagado ellas. La novia, Cinthia, con el velo torcido, te ofrece tu propio champán con una sonrisa radiante. «¡Brinda con nosotras, guapa, que invita la casa! Oye, entre tú y yo: me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
      "10000": "Diez mil dólares te han conseguido el mejor reservado del club, y desde allí arriba ves a una despedida de soltera suplicándole al portero que la deje entrar. Con un gesto, les abres la puerta y entran en tromba. La novia, Cinthia, sube a tu reservado, te da un abrazo de oso y, de pronto, se pone muy seria. «Me has salvado la noche, así que ahora te toca salvarme la vida. Me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
      "100000": "Con cien mil dólares, el club te ha regalado una botella de champán de dos metros, y una despedida de soltera se ha pegado a ti como un enjambre. Las amigas se hacen fotos con la botella; la novia, Cinthia, se queda a tu lado, de repente sobria. «Con tanto dinero, seguro que tú sí sabes lo que quieres. Yo me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
      "1000000": "Con un millón de dólares, media ciudad ya conoce tu cara, y la despedida de soltera de Cinthia te recibe en la puerta del club como a una estrella de cine, con gritos y flashes. Una amiga te pide un autógrafo en el brazo; otra, el teléfono de tu asesor financiero. La novia las manda callar y te habla al oído, con aliento de tequila. «Tú tienes la suerte de cara esta noche: préstame un poco. Me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»",
      "nada": "Estás frente al club sin un dólar, sin pulsera de acceso y sin plan, cuando una despedida de soltera te engulle en su remolino de tul, purpurina y globos indecentes. La novia, Cinthia, borracha como una cuba, te agarra de las manos. «¿No llevas dinero? ¡Mejor! Quien no tiene nada no tiene por qué mentir. Me caso el sábado y no sé si quiero. ¡Dame una señal, la que sea, porque yo ya no sé qué hacer!»"
    },
    "options": [
      {
        "say": "Te doy una pista gratis: cuando una está segura, no va por ahí pidiendo señales a desconocidas.",
        "reply": "Cinthia se queda con la boca abierta. Luego le entra hipo. «Eso es profundísimo… o yo estoy muy borracha. Probablemente las dos cosas»."
      },
      {
        "say": "Vamos a dejarlo en manos del destino: si el próximo que sale del club lleva corbata, te casas.",
        "reply": "Las amigas se giran a la vez hacia la puerta. Sale un hombre sin camisa, con una corbata atada en la frente. Cinthia se lleva las manos a la cabeza. «¿Y eso qué es, un sí o un no?»"
      },
      {
        "say": "Antes de buscar señales, cuéntame qué te pasa. No me vas a volver a ver, así que puedes ser sincera.",
        "reply": "Cinthia se sienta en el bordillo y suelta un suspiro que huele a tequila y a verdad. «Es que es buenísimo. Demasiado. Y a mí los buenos me aburren, ¿me entiendes?»"
      }
    ],
    "line2": "Una amiga le pone un chupito en la mano y Cinthia se lo bebe de un trago. Luego se pone todo lo seria que puede ponerse alguien con un velo torcido. «Hay otro. Mi ex. Está aquí, en Las Vegas, esta misma noche, y me acaba de escribir. Si voy a verlo, la lío. Si no voy, me lo voy a preguntar el resto de mi vida. ¿Qué hago?»",
    "options2": [
      {
        "say": "No vayas. Una duda de una noche no merece una vida entera de remordimientos.",
        "reply": "Cinthia asiente con el rímel corrido. «Vale. Vale. Pero le contesto con un mensaje bien seco, para que sufra un poquito»."
      },
      {
        "say": "Ve, míralo a la cara y vuelve antes de que salga el sol. Si vuelves, te casarás sin dudas.",
        "reply": "Cinthia te da un beso en la frente. «O eres muy sabia o estás muy loca. Vente conmigo, por si me paso de la raya»."
      },
      {
        "say": "Llama a tu novio y cuéntaselo ahora mismo. Si aguanta esa llamada, aguanta lo que sea.",
        "reply": "Cinthia palidece y sus amigas dejan de bailar en seco. «¿Ahora? ¿Así?». Saca el móvil, lo mira un buen rato y, contra todo pronóstico, marca."
      }
    ],
    "end": "Las amigas se llevan a Cinthia hacia la pista entre gritos y confeti. Al cruzar la puerta, se gira una última vez y te levanta el pulgar, o quizá te pide auxilio: con tantas luces, no lo distingues bien.",
    "talk": [
      "¿Has dudado alguna vez antes de una decisión enorme? ¿Hiciste caso a esas dudas o las callaste?",
      "¿Crees que se puede tener una cuenta pendiente con un ex durante años? ¿Es buena idea volver a verlo?",
      "¿Qué es más peligroso en una pareja: el aburrimiento o una pasión sin control?",
      "¿Por qué a veces es más fácil abrirse con un desconocido que con alguien cercano?",
      "¿Te has pasado de la raya alguna vez en una fiesta y has tenido que dar explicaciones al día siguiente?"
    ],
    "words": [
      "liarla",
      "pasarse de la raya",
      "sin previo aviso",
      "en pleno apogeo"
    ]
  },
  pelea: {
    "title": "El penalti de la discordia",
    "line": "En la sala de apuestas deportivas, bajo una pantalla gigante que repite a cámara lenta una jugada polémica, Toño, con la camiseta roja de su equipo, y un aficionado rival con bigote de morsa se dan empujones y se dedican insultos que no se oyen ni en un estadio. Toño te ve, te coge del codo y te coloca entre los dos como si fueras el árbitro. «¡Señora, usted lo ha visto! ¡Eso era penalti como una casa! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
    "money": {
      "100": "Has apostado veinte dólares al empate, por pura prudencia, cuando a tu lado estalla la pelea: Toño, con su camiseta roja, y un aficionado rival con bigote de morsa se gritan por un penalti que la pantalla repite sin compasión. Un guardia se acerca, sin ninguna prisa. Toño te pone delante como un escudo humano. «¡Usted lo ha visto, señora! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
      "500": "Bajo un muro de pantallas, Toño y un aficionado rival pasan de los gritos a los empujones; vuela una cerveza y alguien aplaude como si formara parte del espectáculo. Tú, con quinientos dólares y cero interés en el fútbol, intentas escabullirte por un lado. Toño te corta el paso. «¡Usted, que tiene cara de lista! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
      "1000": "Acabas de apostar mil dólares a ese mismo partido y Toño lo ha visto, así que para él ya eres una experta en fútbol. Cuando el rival del bigote de morsa le da un empujón, Toño te señala delante de toda la sala. «¡Ella entiende de esto, que se ha jugado mil! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
      "10000": "Ves el partido desde el palco privado, con diez mil dólares jugados y una tabla de quesos que nadie ha tocado, cuando abajo se arma la gorda. Un guardia sube a avisarte de que «hay un pequeño incidente», y detrás de él aparece Toño, sudando, con la camiseta medio arrancada. «¡Desde aquí arriba se ve todo mejor que en el videoarbitraje! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
      "100000": "Con cien mil dólares en apuestas, tienes un mayordomo que te trae las estadísticas del partido en bandeja de plata. Te las está leyendo cuando la pelea de Toño y el aficionado rival rueda literalmente hasta tus pies, entre patatas fritas y vasos de plástico. El mayordomo carraspea, horrorizado. Toño se pone de pie, se arregla el pelo y te hace una reverencia. «¡Usted parece una mujer justa! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
      "1000000": "Tienes un millón apostado en el partido, y la sala entera te mira cada vez que pasa algo en el campo. Cuando pitan un penalti dudoso, Toño y el aficionado rival dejan de pelearse entre ellos y vienen hacia ti, convencidos de que tu palabra vale más que la del árbitro. «¡Con lo que usted se ha jugado, sabrá de fútbol más que nadie! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»",
      "nada": "Estás en la sala de apuestas sin un dólar, aprovechando que ver el partido es gratis, cuando estalla la bronca: Toño y un aficionado rival se empujan por una jugada polémica. Toño te agarra del codo. «¡Usted no se ha jugado nada, así que es neutral! ¡La jueza perfecta! ¡Diga usted quién tiene razón, que este sinvergüenza me debe doscientos dólares!»"
    },
    "options": [
      {
        "say": "Era penalti, sin duda. Y usted, el del bigote, pague lo que debe y no sea tan tacaño.",
        "reply": "El aficionado rival te fulmina con la mirada y saca un billete arrugado. «Pago, pero que quede claro: el árbitro está comprado, y usted también»."
      },
      {
        "say": "No era penalti, Toño. Se tiró como un actor de cine mudo, y tú lo sabes.",
        "reply": "Toño se tapa la cara con la camiseta. «¡Lo sabía! ¡Usted es de los suyos! ¡Esto es una conspiración internacional!»"
      },
      {
        "say": "Yo no he visto nada. Pero si siguen así, quien va a pitar el final es el de seguridad.",
        "reply": "Los dos se callan de golpe al ver acercarse a dos guardias del tamaño de un armario ropero. Toño carraspea: «Bueno, a lo mejor era medio penalti. Un cuarto, como mucho»."
      }
    ],
    "line2": "El partido se reanuda, pero ya nadie mira la pantalla. Toño se deja caer en la silla de al lado, sudando y con la camiseta rota. «Mi mujer dice que el fútbol me va a matar. Que le dedico más tiempo al equipo que a ella y a los niños. ¿Usted cree que uno puede querer más a un equipo que a su propia familia?»",
    "options2": [
      {
        "say": "Claro que sí. El equipo nunca le pide que saque la basura.",
        "reply": "Toño se ríe, pero la risa se le apaga enseguida. «Ni me pregunta qué tal el día. A lo mejor es eso lo que me gusta: que no me pide nada»."
      },
      {
        "say": "No lo creo. Pero si su mujer lo dice, quizá debería preocuparle más ella que el marcador.",
        "reply": "Toño se queda callado un buen rato, mirando la pantalla sin verla. «Eso me ha dolido más que el penalti», murmura. «Esta noche la llamo. Bueno, en el descanso»."
      },
      {
        "say": "Depende. ¿Cuántos títulos le ha dado su mujer esta temporada?",
        "reply": "Toño suelta una carcajada que se oye en toda la sala. «¡Ninguno! Pero tampoco me ha hecho llorar en una final, que ya es más de lo que puedo decir del equipo»."
      }
    ],
    "end": "Toño vuelve a su sitio con la camiseta rota y el orgullo vendado. Diez minutos después, su equipo encaja un gol en el último suspiro y el aficionado rival, sin decir nada, lo invita a una cerveza. Cosas del fútbol.",
    "talk": [
      "¿Qué es lo que te hace perder los nervios hasta el punto de gritarle a un desconocido?",
      "¿Crees que las pasiones como el fútbol unen a la gente o sacan lo peor de ella?",
      "¿Te han puesto alguna vez de árbitro entre dos amigos o dos familiares? ¿Cómo saliste del apuro?",
      "¿Qué pasión tuya le parece exagerada a tu pareja o a tu familia? ¿Tienen razón?",
      "¿Has estado alguna vez a punto de llegar a las manos con alguien? ¿Qué te frenó?"
    ],
    "words": [
      "penalti como una casa",
      "armarse la gorda",
      "perder los nervios",
      "llegar a las manos"
    ]
  },
  gritona: {
    "title": "Veinte minutos casada",
    "line": "En la puerta de la capilla «Amor Exprés», Marta, con un vestido blanco alquilado y un ramo de rosas convertido en escoba de tanto sacudirlo, le grita como una posesa a su marido, que duerme la mona en un banco, con la pajarita de lado y una botella vacía entre los brazos. Se casaron hace veinte minutos. Al verte, Marta se lanza hacia ti como un torpedo. «¡Tú, la del vestido rojo, tienes cara de ser la única persona sensata de Las Vegas! ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
    "money": {
      "100": "Estás leyendo el cartel de precios de la capilla —boda básica, boda con Elvis, boda con Elvis y paloma— para reírte un rato con tus cien dólares, cuando sale Marta chillando: vestido alquilado, ramo hecho trizas y un marido de veinte minutos roncando en un banco. «¡Yo había pedido la de la paloma y la paloma se escapó! ¡Era una señal!», grita. Te ve. «¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
      "500": "Tú solo querías hacerte una foto graciosa con el Elvis de la entrada, con tus quinientos dólares todavía en el bolso, y has acabado en primera fila del drama: Marta, con vestido blanco de alquiler, le grita como una posesa a su marido de hace veinte minutos, que duerme la mona en un banco. Marta se lanza hacia ti. «¡Tú tienes cara de persona sensata! ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
      "1000": "Llevas mil dólares en fichas y una copa de cava de cortesía cuando Marta sale de la capilla dando zancadas, con el velo arrancado y el ramo convertido en un arma. Detrás de ella, su marido de veinte minutos ronca en un banco con la boca abierta. Marta te quita la copa, se la bebe de un trago y te la devuelve vacía. «Perdona, era una emergencia. ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
      "10000": "Con diez mil dólares, tu anfitrión te ha conseguido un pase a la recepción VIP de la capilla, con tarta de seis pisos incluida. Pero en la puerta te intercepta Marta, recién casada y fuera de sí, mientras su marido duerme la mona en un banco, abrazado al cojín de los anillos. «Tú tienes pinta de conocer abogados caros. ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
      "100000": "Con cien mil dólares en juego, el casino te ha mandado una limusina hasta la capilla para que asistas a una boda de famosos, pero la única famosa de esta noche es Marta, que grita tan fuerte que la gente la graba con el móvil. Su marido de veinte minutos ronca en un banco con la pajarita en la frente. Marta te ve bajar de la limusina y se te echa encima. «¡Tú seguro que tienes un abogado en marcación rápida! ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
      "1000000": "La noticia del millón ha llegado hasta la capilla, donde el Elvis de guardia ya te ofrece una boda de oro macizo con descuento. Marta lo aparta de un empujón, con el vestido de alquiler y el rímel hasta la barbilla, mientras su marido de hace veinte minutos ronca en un banco como una moto vieja. «Olvídate de bodas, que yo tengo una de segunda mano y te la regalo. Y ahora, dime. ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»",
      "nada": "Estás sentada en la escalera de la capilla, sin un dólar, dándoles un respiro a tus pies, cuando sale Marta echando chispas: vestido de alquiler, ramo destrozado y un marido de veinte minutos durmiendo la mona en un banco. Te ve tan pelada como ella y se sienta a tu lado. «Me he gastado mis últimos dólares en esta boda, y mira el premio que me ha tocado. ¿Cómo se deshace una boda en esta ciudad? ¡Ayúdame, por favor!»"
    },
    "options": [
      {
        "say": "Tranquila. En esta ciudad hay más abogados de divorcio exprés que capillas. Mañana a primera hora lo arreglamos.",
        "reply": "Marta se agarra a tu brazo como a un salvavidas. «¿De verdad? ¿Y se puede hacer sin que se despierte? Porque, si se despierta, me convence otra vez»."
      },
      {
        "say": "¿Seguro que quieres deshacerla? Míralo: dormido parece hasta buena persona.",
        "reply": "Marta lo observa con los brazos en jarras. Él suelta un ronquido y se rasca la barriga. «Buena persona sí es. El problema es que también es idiota, y eso no se arregla durmiendo»."
      },
      {
        "say": "¿Qué ha podido pasar en veinte minutos para que estés así?",
        "reply": "Marta agita el ramo destrozado como prueba del delito. «¡Cuando Elvis preguntó si alguien se oponía, él levantó la mano! ¡Él, el novio! Y ahora dice que era una broma»."
      }
    ],
    "line2": "El marido abre un ojo, te ve, sonríe como un niño pequeño y vuelve a roncar. Marta se deja caer a tu lado en el escalón. «Lo peor es que estoy loca por él, ¿sabes? Desde hace exactamente cuatro horas, pero loca perdida. ¿Tú crees que se puede adorar a alguien y querer estrangularlo al mismo tiempo?»",
    "options2": [
      {
        "say": "Claro. Es lo que me pasa a mí con los zapatos de tacón: los adoro y me están matando.",
        "reply": "Marta suelta una carcajada tan fuerte que el marido se da la vuelta en el banco. «¡Exacto! Él es mis tacones: precioso, carísimo e imposible de aguantar más de dos horas»."
      },
      {
        "say": "Se puede, pero no decidas nada esta noche. Mañana, con la cabeza fría y sin alcohol, lo verás más claro.",
        "reply": "Marta suspira. «Con la cabeza fría. Eso me decía mi madre, y mírame: casada con un desconocido en una capilla con luces de neón. Pero vale, mañana»."
      },
      {
        "say": "¿Adorarlo? Si apenas lo conoces. Lo que adoras es la idea de haber hecho una locura.",
        "reply": "Marta se queda callada, con el ramo a medio levantar. «Uf. Eso ha sido peor que una bofetada», murmura. «Y lo peor es que me suena a verdad»."
      }
    ],
    "end": "Cuando te alejas, Marta le ha quitado la botella al marido y le ha echado su chaqueta por encima para que no pase frío. Sigue insultándolo, eso sí, pero ahora en voz baja y casi con cariño.",
    "talk": [
      "¿Se puede querer y odiar a la vez a la misma persona? ¿Te ha pasado alguna vez?",
      "¿Cuál es la decisión más impulsiva que has tomado? ¿La desharías si pudieras?",
      "¿Qué cosa imperdonable podría hacer alguien en la primera cita o el primer día de una relación?",
      "¿Crees que las bodas se celebran más para los novios o para impresionar a los demás?",
      "¿Te has enamorado alguna vez más de una idea que de la persona real? ¿Cómo te diste cuenta?"
    ],
    "words": [
      "dormir la mona",
      "echar chispas",
      "con la cabeza fría",
      "estar loca perdida"
    ]
  },
  habano: {
    "title": "Cara o cruz con un millonario",
    "line": "En el reservado más ostentoso del piso VIP, entre sofás de piel blanca y una lámpara que parece una lluvia de diamantes, Sergio Valdés, multimillonario de sonrisa blanqueada y reloj del tamaño de un plato, prende un habano con un billete de cien dólares. A su alrededor, cuatro modelos bostezan con el móvil en la mano y tres guardaespaldas vigilan hasta a las moscas. Te ve pasar y sopla la llama del billete. «Tú, la de rojo, ven. Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
    "money": {
      "100": "Has subido al piso VIP con tus cien dólares solo a fisgar, como quien se asoma al escaparate de una joyería sin intención de entrar. Sergio Valdés, multimillonario con un reloj del tamaño de un plato, prende un habano con un billete de cien —exactamente lo que llevas tú— y disfruta viendo tu cara. «Tu noche entera, convertida en humo. Qué poético, ¿no? Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
      "500": "En el reservado más ostentoso del piso VIP, Sergio Valdés prende un habano con un billete de cien dólares mientras las modelos que lo rodean ni siquiera levantan la vista. Tú, con quinientos dólares en el bolso, te sientes como una figurante que se ha equivocado de rodaje. Sergio te hace una seña con el habano. «Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
      "1000": "Mil dólares en el bolso y Sergio Valdés quemando uno de cien como si fuera un pañuelo de papel. Ves cómo se consume y se te encoge el estómago; él lo nota y le encanta. «Para mí es una cerilla cara; para ti, un fin de semana. Ahí está la gracia. Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
      "10000": "Con diez mil dólares, el piso VIP te recibe con respeto, aunque Sergio Valdés te hace saber enseguida que en su reservado eso es calderilla: hace un rato ha apostado esa cifra a que una de sus modelos no aguantaba diez minutos sin mirar el móvil, y ha ganado. Prende otro habano con otro billete. «Las apuestas pequeñas me aburren, preciosa. Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
      "100000": "Cien mil dólares en tu cuenta y Sergio Valdés ya ha mandado a uno de sus guardaespaldas a averiguar de dónde salen. Mientras tanto, te invita a sentarte en el sofá blanco, te ofrece un habano encendido con un billete de cien y lanza una moneda de oro al aire, una y otra vez, sin dejar de mirarte. «Una mujer con dinero propio. Qué rareza. Te propongo un juego: si sale cara, cien mil dólares más para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
      "1000000": "La noticia de tu millón le ha amargado la noche a Sergio Valdés: por primera vez en años, en este piso hay alguien que da más que hablar que él. Para dejar las cosas claras, prende el habano con un antiguo billete de mil dólares, de los que ya no se fabrican, y despide a sus modelos con un gesto. «Ya que somos dos, juguemos como iguales. Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»",
      "nada": "Te has colado en el piso VIP sin un dólar, detrás de un carrito de champán. Sergio Valdés, multimillonario de sonrisa blanqueada, prende un habano con un billete de cien dólares entre modelos y guardaespaldas, y te pilla mirando las cenizas del billete como quien mira un plato de comida. Se le escapa una risa. «Por fin alguien que sabe lo que vale esto. Te propongo un juego: lanzo esta moneda. Si sale cara, cien mil dólares para ti; si sale cruz, te quedas conmigo hasta el amanecer. ¿Hay trato?»"
    },
    "options": [
      {
        "say": "Hay trato, pero con una condición: la moneda la elijo yo, de mi propio bolso.",
        "reply": "Sergio arquea las cejas, divertido. «Desconfiada. Me gusta». Sacas una moneda de veinticinco centavos y él la mira como si fuera una reliquia. «Hacía veinte años que no tocaba algo tan barato»."
      },
      {
        "say": "No, gracias. Mi compañía no se gana en una apuesta; se gana con modales.",
        "reply": "Una de las modelos se ríe por lo bajo y otra, por primera vez en toda la noche, deja el móvil sobre la mesa. Sergio se queda con el habano a medio camino de la boca. «¿Modales? Eso no lo vendían en la tienda donde compré todo lo demás»."
      },
      {
        "say": "Doble o nada: si sale cruz, el que se queda conmigo hasta el amanecer es usted, y me lleva a desayunar churros.",
        "reply": "Sergio se echa a reír de verdad, sin poses. «¿Churros? ¿Yo? Hace treinta años que no desayuno nada que no lleve caviar». Se queda pensativo. «Acepto. Necesito saber a qué saben»."
      }
    ],
    "line2": "Sergio da una calada larga y deja que el humo le esconda la cara. Por un instante parece menos rico y más solo. «¿Quieres saber lo peor de tenerlo todo? Que todo el mundo me da la razón. Ya no sé si soy gracioso o si me ríen los chistes porque pago yo. Dime algo sincero sobre mí, aunque escueza. ¿Te atreves?»",
    "options2": [
      {
        "say": "Me atrevo: tus chistes no tienen ninguna gracia. Te lo digo gratis, que eso no lo puedes comprar.",
        "reply": "Las modelos contienen la respiración. Sergio se queda serio… y luego se ríe a carcajadas, como un niño. «¡Lo sabía! ¡Veinte años contando el mismo chiste del loro y nadie me había avisado!»"
      },
      {
        "say": "Que alguien que necesita público para encender un puro no está tan contento como aparenta.",
        "reply": "Sergio apaga el habano despacio, aplastándolo hasta que no queda ni una chispa. «Mi psicólogo cobra quinientos dólares la hora y nunca se ha atrevido a decirme eso», murmura. «Debería contratarte a ti»."
      },
      {
        "say": "Que todo esto parece una fiesta, pero tus guardaespaldas son los únicos que no se aburren.",
        "reply": "Sergio mira a su alrededor como si viera el reservado por primera vez: modelos medio dormidas, champán sin tocar, música que nadie escucha. «Tienes razón», dice. «Muchachos, ¿alguien conoce un sitio donde pongan churros a estas horas?»"
      }
    ],
    "end": "Sergio deja la moneda sobre la mesa, sin lanzarla, y se queda mirándola un buen rato. Sus guardaespaldas se relajan por primera vez en toda la noche. Por un momento, el hombre más rico del piso parece solo un cliente más esperando a que alguien le diga que ya puede irse a casa.",
    "talk": [
      "¿Qué crees que busca alguien que quema dinero delante de los demás: poder, atención o llenar un vacío?",
      "¿Aceptarías una apuesta absurda si el premio fuera enorme? ¿Qué cosas no te jugarías nunca?",
      "¿Piensas que la gente muy rica acaba más sola que los demás? ¿Por qué?",
      "¿Prefieres que te digan una verdad que duele o una mentira que te halaga? ¿Y en el trabajo?",
      "Si hubieras nacido con una fortuna enorme, ¿en qué tipo de persona crees que te habrías convertido?"
    ],
    "words": [
      "ser calderilla",
      "dar la razón",
      "escocer",
      "doble o nada"
    ]
  },
  yate: {
    "title": "El barco y la baraja",
    "line": "En una mesa privada del piso VIP, Julián, un heredero de treinta años con la camisa desabrochada y ojeras de tres noches sin dormir, ha dejado sobre el tapete las llaves de un yate de cuarenta metros. Una sola mano contra la banca: carta más alta gana. Los crupieres sudan; el jefe de sala reza en silencio. Julián te ve y te acerca la baraja, extendida en abanico. «Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
    "money": {
      "100": "Con tus cien dólares has subido a curiosear y te encuentras a Julián, heredero de treinta años, con las llaves de un yate de cuarenta metros sobre la mesa. Te pregunta cuánto llevas encima y, al oírlo, aplaude encantado. «¡Cien! Lo mismo que vale mi opinión en las reuniones de la empresa familiar. Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
      "500": "Tú, con tus quinientos dólares, y Julián, con un yate: así de desigual es la mesa privada donde te ha invitado a sentarte. El heredero, camisa desabrochada y mirada vidriosa, ha puesto las llaves sobre el tapete y espera una sola carta. Te acerca la baraja en abanico. «Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
      "1000": "Llevas mil dólares jugados y una racha que ya comentan los crupieres; Julián, heredero de treinta años, lo ha oído y te manda llamar con un camarero. Sobre el tapete, las llaves de su yate esperan una sola carta. «Dicen que esta noche tienes una suerte que da miedo. Préstamela un minuto. Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
      "10000": "Con diez mil dólares jugados, un camarero te trae, de parte de Julián, una copa y una nota: «¿Me ayudas a perder un barco?». En la mesa privada, el heredero de treinta años ha dejado las llaves de su yate sobre el tapete y espera una sola carta, con la camisa desabrochada y las manos inquietas. «Gracias por venir. Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
      "100000": "Julián te ha visto llegar con tu séquito de ballena de cien mil y ha decidido que eres la única persona del piso que no le va a pedir nada. Te sienta a su lado, aparta a su asesor financiero, que intenta detenerlo con el móvil en la mano, y empuja hacia el centro las llaves de un yate de cuarenta metros. «Tú sabes lo que es que te traten bien por dinero. Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
      "1000000": "Tu millón ha hecho que Julián se sienta, por primera vez en su vida, el segundo hombre más rico de la sala, y no lo lleva bien. Para recuperar el protagonismo, ha puesto sobre el tapete las llaves de su yate y la escritura de una casa en Malibú, delante de medio piso VIP. «Esta noche, o soy una leyenda o soy un chiste. Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»",
      "nada": "Te has colado en el piso VIP sin un dólar y lo primero que ves es una locura: Julián, un heredero de treinta años, ha dejado las llaves de su yate sobre el tapete. Una sola mano, carta más alta gana. Te ve descalza, con los zapatos en la mano, y se ríe sin alegría. «Tú no tienes nada que perder y yo tengo demasiado; hacemos buena pareja. Según mi padre, no he acertado una decisión en mi vida. Que esta la tome otra persona. ¿Te atreves a elegir la carta?»"
    },
    "options": [
      {
        "say": "Me atrevo. La del medio: ni la primera, que es de cobardes, ni la última, que es de desesperados.",
        "reply": "Julián se queda mirando la carta con los ojos muy abiertos. «Nadie me había explicado nunca una decisión», susurra. «Mi padre solo me dice cuáles están mal». El crupier la separa del mazo sin darle la vuelta."
      },
      {
        "say": "No pienso elegir. Si lo pierdes, quiero que sea por culpa tuya, no mía.",
        "reply": "Julián encaja el golpe en silencio. «Es lo más justo que me han dicho en años», murmura. Retira la mano de la baraja, pero deja las llaves donde estaban."
      },
      {
        "say": "Antes dime una cosa: ¿te gusta navegar, o el yate es solo otro regalo que nunca pediste?",
        "reply": "Julián suelta una risa rota. «Me mareo en el mar. Mi padre me lo regaló para que sus socios me vieran con algo grande. Nunca he salido del puerto»."
      }
    ],
    "line2": "Julián se sirve otro whisky que no llega a beberse. «¿Sabes qué es lo peor de ser hijo de alguien importante? Que, si sale bien, es mérito suyo, y si sale mal, es culpa tuya. Si pierdo el yate, al menos será algo mío de verdad, aunque sea un desastre. ¿Lo entiendes, o te parece un capricho de niño mimado?»",
    "options2": [
      {
        "say": "Lo entiendo. Aunque perder a lo grande para llamar su atención sigue siendo pedirle permiso, solo que más caro.",
        "reply": "Julián se queda inmóvil un buen rato. Luego recoge las llaves del tapete y se las guarda en el bolsillo. «Me has desmontado en una frase», dice. «Por hoy, el barco se queda en el puerto. Como siempre»."
      },
      {
        "say": "Me parece un capricho de niño mimado, sí. Pero eso no quita que te duela de verdad.",
        "reply": "Julián sonríe por primera vez en toda la noche. «Gracias. Eres la primera persona que me trata como a un adulto y como a un niño a la vez. Y las dos tienen razón»."
      },
      {
        "say": "Lo entiendo tan bien que, si tuviera un yate y un padre como el tuyo, ya lo habría apostado dos veces.",
        "reply": "Julián te mira con complicidad, de igual a igual. «Lo sabía. A ti también te pesa un padre, ¿verdad? Se te nota en cómo miras las cartas»."
      }
    ],
    "end": "Al final, nadie gira la carta. El crupier la devuelve al mazo con un suspiro de alivio y el jefe de sala se santigua discretamente. Julián se levanta, te besa la mano con una cortesía antigua y se aparta para llamar a alguien; por cómo le tiembla la voz, sospechas que es su madre.",
    "talk": [
      "¿Has hecho alguna vez algo arriesgado solo para que tu familia o tu jefe te tomaran en serio?",
      "¿Qué hace más daño: un padre que exige demasiado o uno que no espera nada de ti?",
      "¿Crees que los hijos de familias ricas lo tienen más fácil o simplemente distinto?",
      "¿Por qué hay personas que necesitan público para hacer sus mayores locuras?",
      "Si pudieras decirle una sola frase a tu padre o a tu madre sin miedo a su reacción, ¿cuál sería?"
    ],
    "words": [
      "en abanico",
      "encajar el golpe",
      "de igual a igual",
      "llamar la atención"
    ]
  },
  senador: {
    "title": "Política exterior",
    "line": "Un flash estalla en el rincón de la terraza: un fotógrafo acaba de pillar al senador Robles saliendo de un cenador con una pelirroja que, desde luego, no es su esposa. Dos guardaespaldas se abalanzan sobre el fotógrafo y le arrancan la cámara. El senador, con la camisa mal abrochada y una marca de carmín junto a la oreja, se planta delante de ti con su mejor sonrisa de cartel electoral. «Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
    "money": {
      "100": "Has salido a la terraza a contar tus cien dólares lejos de la tentación cuando un flash revienta en el rincón: el senador Robles, pillado con una mujer que no es su esposa. Mientras sus guardaespaldas forcejean con el fotógrafo, el senador te mete un billete doblado en el bolsillo del vestido sin preguntar. «Una pequeña contribución a su causa, querida. Ahora escúcheme: usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
      "500": "Con tus quinientos dólares, has salido a la terraza a ver las fuentes del Strip cuando un flash revienta a tu derecha. Un fotógrafo ha pillado al senador Robles con una pelirroja que no es su esposa; dos guardaespaldas le arrancan la cámara y lo aplastan contra la barandilla. El senador, con la corbata en la mano, viene directo hacia ti. «Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
      "1000": "Has ganado mil dólares y has salido a la terraza a celebrarlo con una copa, y la noche te regala un escándalo: un fotógrafo acaba de pillar al senador Robles con una mujer que no es su esposa. Mientras sus guardaespaldas le quitan la cámara, el senador te repasa de arriba abajo, calculando si das el tipo de coartada. «Elegante, discreta, con cara de leer la prensa. Perfecta. Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
      "10000": "Tu anfitrión te estaba proponiendo un fin de semana de golf cuando el flash revienta en el rincón de la terraza: el senador Robles, pillado con una pelirroja que no es su esposa. El anfitrión mira el reloj, recuerda una «reunión urgente» y desaparece. Los guardaespaldas acorralan al fotógrafo. El senador te tiende una tarjeta de visita con su escudo dorado. «Estas tarjetas abren muchas puertas en Washington, y le puedo dar una a cambio de un pequeño favor. Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
      "100000": "Con cien mil dólares en juego, la dirección te ha reservado la mejor mesa de la terraza, y el senador Robles lo sabe, porque su asesora se lo ha chivado hace una hora. Cuando el flash lo pilla con una pelirroja que no es su esposa, no corre hacia el ascensor: corre hacia ti, mientras sus guardaespaldas pisotean la cámara. «Su palabra vale aquí más que la de diez fotógrafos, y usted lo sabe. Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
      "1000000": "Con un millón de dólares, eres la noticia de la noche, y en la terraza hay más periodistas buscándote a ti que a nadie. Por eso el senador Robles, recién pillado con una pelirroja que no es su esposa, ve en ti la salvación perfecta: si los titulares hablan de la millonaria misteriosa, nadie hablará de él. Te ofrece el brazo, como en un baile de gala. «Dos titulares se tapan mejor que uno. Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»",
      "nada": "Has subido a la terraza sin un dólar, solo a tomar el aire, cuando un flash estalla en el rincón: el senador Robles, pillado con una pelirroja que no es su esposa. Sus guardaespaldas le arrancan la cámara al fotógrafo. El senador te ve con los zapatos en la mano, saca la cartera y empieza a contar billetes. «Usted necesita dinero y yo una testigo; así funciona el mercado. Señorita, usted y yo llevamos toda la noche aquí, hablando de política exterior. ¿Me echa una mano?»"
    },
    "options": [
      {
        "say": "Claro que sí. Y de paso me explica su programa fiscal, que me interesa mucho saber quién va a pagar esto.",
        "reply": "El senador suelta una risa nerviosa y se abrocha mal otro botón. «Entendido, entendido. Ya hablaremos de impuestos… y de su generosa aportación a mi tranquilidad»."
      },
      {
        "say": "No pienso mentir por un hombre que lleva el pintalabios de otra en la oreja.",
        "reply": "El senador se frota la oreja con el pañuelo y solo consigue extender la mancha. «Es una alergia», balbucea. «Al marisco». Uno de sus guardaespaldas tose para no reírse."
      },
      {
        "say": "¿Política exterior? Si yo fuera la pelirroja, me ofendería que me llamara así.",
        "reply": "El senador se pone colorado hasta el cuello. Desde las sombras, la pelirroja suelta una carcajada. «Me ha llamado cosas peores, cariño. Pero esa es nueva»."
      }
    ],
    "line2": "El fotógrafo, sangrando por la nariz, grita desde el suelo que tiene otra tarjeta de memoria escondida en el calcetín. El senador se pasa la mano por el pelo engominado y baja la voz. «Escúcheme bien. Las elecciones son dentro de dos semanas. Si esto sale en la prensa, se acabó mi carrera, mi matrimonio y mi casa en la playa. Póngale precio. ¿Cuánto cuesta que usted no haya visto nada?»",
    "options2": [
      {
        "say": "Nada. Prefiero que me deba un favor. Los favores de un senador valen más que su dinero.",
        "reply": "El senador traga saliva y te entrega su tarjeta personal, con el número privado escrito a mano. «Es lo más inteligente y lo más aterrador que me han dicho en toda la campaña»."
      },
      {
        "say": "Lo que cueste curarle la nariz al fotógrafo, multiplicado por diez. Y le pide perdón delante de mí.",
        "reply": "El senador mira al fotógrafo ensangrentado y, por primera vez, parece avergonzado de verdad. «Muchachos, que lo atiendan, que le pongan hielo y una copa», ordena. Luego, entre dientes: «Perdón, caballero»."
      },
      {
        "say": "No tiene precio. Yo no compro ni vendo silencios: si me preguntan, diré lo que he visto.",
        "reply": "El senador palidece y retrocede un paso. «Entonces es usted más peligrosa que el fotógrafo», murmura. Sus guardaespaldas te miran por primera vez con algo parecido al respeto."
      }
    ],
    "end": "El senador desaparece en el ascensor, rodeado de sus guardaespaldas y frotándose la oreja con el pañuelo. La pelirroja enciende un cigarrillo, te ofrece otro y te dice, como si nada: «Mañana él saldrá en todos los periódicos. Yo, como siempre, seré “una acompañante sin identificar”».",
    "talk": [
      "¿Mentirías para proteger a alguien que ha sido infiel? ¿Y si fuera tu mejor amigo o un familiar?",
      "¿Por qué crees que tantas personas poderosas arriesgan su carrera por una aventura?",
      "¿Debería importarnos la vida privada de un político a la hora de votar? ¿Hasta qué punto?",
      "¿Te has enterado alguna vez de una infidelidad ajena? ¿Lo contaste o preferiste callar?",
      "¿Hay algún secreto que guardarías aunque te pareciera injusto? ¿Por qué?"
    ],
    "words": [
      "echar una mano",
      "dar el tipo",
      "coartada",
      "ponerse colorado"
    ]
  },
};

export default scenes;
