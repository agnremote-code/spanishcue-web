// El Gran Meridiano · C2 · Voz negra literaria: ironía, dobles sentidos, refranes, cambios de registro y si + pluscuamperfecto
const scenes = {
  portero: {
    title: "Una cara que vuelve",
    line: "La puerta giratoria te escupe al mármol con el calor del Strip todavía pegado al vestido. Rocco, treinta años de botones dorados, se queda a medio saludo. «Perdone que la mire así, señorita. Es que hay caras que uno no olvida, aunque se lo hayan pedido de rodillas. Usted tiene los ojos de Ernesto Duarte».",
    options: [
      { say: "Me lo dicen a menudo, aunque nunca con tanto miedo en la voz.", reply: "Rocco suelta una risa corta, de las que se usan para tapar algo. «Miedo no, señorita. Respeto. En esta casa son primos hermanos»." },
      { say: "Soy su hija. Y vengo a cobrar algo que alguien dejó a deber.", reply: "Rocco se ajusta la gorra como quien se ajusta una coartada. «Las deudas de esta casa, señorita, se pagan arriba. Y no siempre en efectivo»." },
      { say: "Si hubiera sabido que me esperaban, me habría puesto algo menos llamativo.", reply: "Rocco te repasa de los zapatos al escote con la discreción de un profesional. «Mentira. Se habría puesto exactamente esto. Su padre también sabía entrar»." }
    ],
    line2: "Abres el bolso y le enseñas la ficha dorada: «Piso 3 · Medianoche». Rocco palidece como un naipe recién barajado. «Guárdela. Aquí las paredes no oyen, pero los espejos sí que miran».",
    options2: [
      { say: "¿Quién me la mandó, Rocco? Usted sabe más de lo que cuenta.", reply: "«En treinta años he aprendido que el que sabe más vive menos», murmura. «Pregunte en recepción. A mí déjeme seguir abriendo puertas»." },
      { say: "Tranquilo. Sé guardar secretos mejor que un cura con resaca.", reply: "Rocco sonríe por primera vez de verdad. «Eso lo dijo su padre una vez, en este mismo escalón. Y mire cómo acabó»." },
      { say: "Si le asusta tanto una ficha, no quiero imaginar lo que le asusta la verdad.", reply: "«La verdad, señorita, es como el whisky de este casino: cara, añeja y siempre servida demasiado tarde»." }
    ],
    end: "Rocco empuja la puerta con una reverencia que parece una despedida. Detrás de ti, las fuentes del Strip aplauden sin saber por qué. La recepción brilla al fondo como un altar.",
    talk: [
      "¿Por qué crees que Rocco palidece al ver la ficha y qué sabrá en realidad?",
      "Si hubieras sido Valentina, ¿habrías dicho desde el principio quién eras o habrías jugado al despiste?",
      "¿Qué opinas del refrán «el que sabe más vive menos»? ¿Lo has visto cumplirse alguna vez?",
      "¿Alguna vez alguien te ha reconocido por tu parecido con un familiar? ¿Cómo te sentó?",
      "¿Qué lugar de tu vida tiene, como este casino, paredes que no oyen pero espejos que miran?"
    ],
    words: ["dejar a deber", "a medio saludo", "primos hermanos", "palidecer"]
  },
  recepcion: {
    title: "La suite que nadie pidió",
    line: "Bajo una lámpara de cristal que podría pagar la hipoteca de un barrio entero, Marisol teclea con uñas de cirujana. «Señorita Duarte. Qué curioso. Tiene usted la suite Montalbán reservada desde hace un mes. Pagada. Con champán incluido. ¿Celebramos algo?»",
    options: [
      { say: "Celebramos que alguien me conoce mejor que yo. Eso siempre da escalofríos.", reply: "Marisol alza una ceja perfectamente cobrada. «En Las Vegas, los escalofríos se curan con el aire acondicionado y una segunda copa»." },
      { say: "Yo no he reservado nada. Quiero saber quién pagó, y lo quiero ya.", reply: "Marisol baja la voz hasta convertirla en un secreto de confesionario. «Ya y aquí no suelen ir juntos, señorita. Pero haré una excepción»." },
      { say: "Si me hubieran avisado, habría traído un pijama a la altura de la suite.", reply: "«Con el debido respeto», sonríe Marisol, «en esa suite nadie ha dormido con pijama desde que Sinatra era joven»." }
    ],
    line2: "Marisol gira la pantalla apenas un palmo. En el campo del pagador solo pone: «Cargo interno · Piso 3». «No figura nombre. Y cuando no figura nombre, es que el nombre lo es todo».",
    options2: [
      { say: "¿Y usted nunca ha tenido la tentación de subir a averiguarlo?", reply: "«Una vez», dice ella sin dejar de sonreír. «Me ascendieron a la mañana siguiente. El mensaje quedó claro»." },
      { say: "Deme la llave. A caballo regalado no se le mira el diente.", reply: "Marisol desliza la tarjeta dorada sobre el mármol. «Bien dicho. Aunque aquí, a veces, el caballo viene con jinete»." },
      { say: "Qué elegancia: comprarme una suite en lugar de mandarme una carta.", reply: "«En esta casa las cartas se reparten, señorita, no se escriben», contesta Marisol, y por un segundo parece que lo dice con pena." }
    ],
    end: "La tarjeta de la suite pesa más de lo que debería. Desde el pasillo de las tragamonedas te llega el tintineo de mil promesas pequeñas.",
    talk: [
      "¿Qué te parece más inquietante: que te paguen una suite o no saber quién lo ha hecho?",
      "Si hubieras recibido un regalo así, ¿lo habrías aceptado o habrías dado media vuelta?",
      "¿Estás de acuerdo con que «a caballo regalado no se le mira el diente»? ¿Tiene excepciones?",
      "¿Te has alojado alguna vez en un hotel muy por encima de tus costumbres? ¿Qué recuerdas?",
      "¿Qué detalle de Marisol te hace pensar que sabe más de lo que dice?"
    ],
    words: ["a la altura de", "cargo interno", "a caballo regalado no se le mira el diente", "por un segundo"]
  },
  tragamonedas: {
    title: "La reina de las máquinas",
    line: "Entre luces que parpadean como pulsos enfermos, Doña Pilar fuma con la paciencia de una esfinge y un vaso de fichas en el regazo. «Tú eres la niña de Ernesto. Tu padre nunca perdía, criatura. Ni a las cartas ni en la vida. Bueno, en la vida perdió una vez, pero a lo grande».",
    options: [
      { say: "Cuénteme esa vez. Las derrotas grandes son las únicas que valen la pena.", reply: "Pilar expulsa el humo despacio, como quien suelta un recuerdo. «Ganó demasiado, hija. Y en esta casa, ganar demasiado es la peor manera de perder»." },
      { say: "Usted lleva aquí décadas. ¿Qué vio aquella noche?", reply: "«Vi a un hombre feliz subir en el ascensor», dice Pilar, «y a nadie bajarlo. Saca tus propias conclusiones, que yo ya estoy mayor para sacarlas»." },
      { say: "¿Y usted, Doña Pilar? ¿También gana siempre o solo lo parece?", reply: "Pilar se ríe con una tos de terciopelo. «Yo pierdo todas las noches, mi amor. Pero con un estilo que ya quisieran los que ganan»." }
    ],
    line2: "Pilar golpea con el anillo la máquina número 17. «Este era su número. Decía que el 17 tiene cara de desgracia y alma de milagro. Si quieres saber de él, empieza por ahí».",
    options2: [
      { say: "Entonces apuesto al 17. De perdidos, al río.", reply: "Pilar te pone una ficha en la palma y te cierra los dedos encima. «Al río no, criatura. A la ruleta. El río ya se llevó a bastantes»." },
      { say: "Si mi padre hubiera confiado menos en los números, quizá seguiría aquí.", reply: "«O quizá estaría muerto de aburrimiento en una oficina», replica Pilar. «Hay hombres que solo saben vivir con el corazón en la mesa»." },
      { say: "¿No le da miedo que esta máquina se canse algún día de usted?", reply: "«Hija, a mi edad el miedo es un lujo», dice, y tira de la palanca. La máquina suelta un suspiro de campanas y nada más." }
    ],
    end: "Doña Pilar vuelve a su ritual como quien vuelve a misa. Al fondo, el giro de la ruleta suena como un rumor que te llama por tu nombre.",
    talk: [
      "¿Qué crees que quiere decir Pilar con «ganar demasiado es la peor manera de perder»?",
      "Si hubieras conocido a Ernesto Duarte, ¿qué le habrías preguntado sobre aquella noche?",
      "¿Tienes algún número, objeto o ritual de la suerte? ¿Crees en ellos o solo te hacen compañía?",
      "¿Qué opinas de las personas que repiten la misma costumbre durante décadas, como Pilar?",
      "¿Qué expresión usarías en tu idioma para decir «de perdidos, al río»?"
    ],
    words: ["de perdidos, al río", "a lo grande", "sacar conclusiones", "con el corazón en la mesa"]
  },
  ruleta: {
    title: "Diecisiete, negro, impar",
    line: "Nico, el crupier, tiene manos de pianista y mirada de notario. A su lado, un hombre de lino blanco te observa a través del humo de su puro como quien tasa una joya. «Hagan juego, señores», canta Nico. «Y señoras que parecen saber lo que hacen».",
    options: [
      { say: "Todo al 17. Las medias tintas, para los cobardes.", reply: "El hombre del puro deja escapar un silbido. «Diecisiete», repite Nico, y por primera vez la mano de pianista tiembla un poco." },
      { say: "Una ficha al 17, por respeto. El resto lo guardo, por prudencia.", reply: "«Prudente y sentimental», comenta el del puro. «Una combinación peligrosa. Su padre tenía la misma»." },
      { say: "¿Usted qué me aconseja, caballero? Parece que conoce bien este juego.", reply: "El hombre sonríe con dientes de marfil caro. «Le aconsejo que no me pida consejo. Pero si insiste, el 17 me ha costado una fortuna»." }
    ],
    line2: "La bola gira, duda, se burla de todos y cae. Diecisiete, negro, impar. El hombre del puro aplaude despacio. «Si yo hubiera tenido su suerte hace veinticinco años, hoy sería el dueño de este lugar. Claro que el último que la tuvo… se esfumó».",
    options2: [
      { say: "¿Me está amenazando o solo le gusta el suspense?", reply: "«En Las Vegas, querida, son la misma cosa con distinto traje», dice, y apaga el puro en tu triunfo." },
      { say: "Mi padre no se esfumó. Lo hicieron desaparecer, que no es lo mismo.", reply: "El hombre te mira por fin sin humo de por medio. «Veo que ya ha hecho los deberes. Tenga cuidado: aquí corregimos con tinta roja»." },
      { say: "Invíteme a una copa y le cuento mi secreto. O mejor, usted me cuenta el suyo.", reply: "«Trato hecho», responde. «Aunque le advierto que mis secretos salen más caros que su pleno»." }
    ],
    end: "Nico empuja hacia ti una torre de fichas que huele a problemas. El del puro desaparece entre la gente antes de que puedas preguntarle el nombre.",
    talk: [
      "¿Crees que el hombre del puro es un amigo, un enemigo o algo intermedio? ¿Por qué?",
      "Si hubieras ganado ese pleno al 17, ¿te habrías retirado o habrías seguido jugando?",
      "¿Qué piensas de la frase «las medias tintas, para los cobardes»? ¿Te identificas con ella?",
      "¿Cuál es el mayor riesgo que has asumido en tu vida? ¿Volverías a hacerlo?",
      "¿Qué diferencia de matiz ves entre «esfumarse» y «hacer desaparecer» a alguien?"
    ],
    words: ["medias tintas", "pleno", "esfumarse", "hacer los deberes"]
  },
  blackjack: {
    title: "El hombre que cuenta",
    line: "Sam Ortega juega con la cara aburrida de un contable y la memoria de un elefante rencoroso. Sin mirarte, susurra entre dos cartas: «No te gires. Hay un tipo de traje gris que te sigue desde la ruleta. Y a mí me sigue media seguridad del casino. Hoy estamos los dos de moda».",
    options: [
      { say: "Qué pena. Pensé que era mi vestido el que llamaba la atención.", reply: "Sam pide carta con un golpe de nudillos. «El vestido llama la atención. El apellido Duarte llama a seguridad»." },
      { say: "¿Para quién trabaja el del traje gris? Necesito saberlo.", reply: "«Para alguien que no baja nunca a la planta», dice Sam. «Los que no bajan son los que mandan»." },
      { say: "¿Y cómo sabe usted quién soy? ¿También me ha contado a mí?", reply: "Sam sonríe sin despegar los ojos del mazo. «Cuento todo, preciosa. Las cartas, las cámaras y las mujeres que entran preguntando por muertos»." }
    ],
    line2: "«Te propongo un trato», murmura Sam. «Tú distraes al de seguridad dos minutos y yo te cuento lo que vi en este casino hace veinticinco años. Si no me hubieran echado aquella noche, lo habría visto todo».",
    options2: [
      { say: "Hecho. Nunca he tenido problemas para entretener a un hombre aburrido.", reply: "Sam asiente, satisfecho. «Eso es lo que me temía y lo que esperaba. Ve. El calvo de la corbata azul»." },
      { say: "Primero cuéntame algo. No compro gato por liebre.", reply: "«Tu padre perdió una mano a propósito antes de la gran partida», susurra Sam. «Para que el viejo se confiara. ¿Te vale como adelanto?»" },
      { say: "Si me pillan, diré que fue idea tuya. Lo sabes, ¿no?", reply: "«Lo contrario me habría decepcionado», ríe Sam. «En esta mesa nadie es inocente, solo están peor o mejor informados»." }
    ],
    end: "Te alejas de la mesa con el pulso de quien acaba de firmar un contrato sin leerlo. De la mesa de dados llega un griterío de despedida de soltero.",
    talk: [
      "¿Te parece ético el trato que propone Sam? ¿Lo habrías aceptado?",
      "¿Qué significa para ti «no comprar gato por liebre»? Pon un ejemplo de tu vida.",
      "Si Ernesto perdió una mano a propósito, ¿qué nos dice eso de su carácter?",
      "¿Alguna vez has tenido la sensación de que alguien te seguía o te vigilaba? ¿Qué hiciste?",
      "¿Crees que contar cartas es hacer trampa o simplemente ser más listo que la banca?"
    ],
    words: ["dar gato por liebre", "estar de moda", "a propósito", "confiarse"]
  },
  dados: {
    title: "Despedida con suerte ajena",
    line: "La mesa de dados ruge como un estadio. Kike, el novio, lleva una corona de plástico, la camisa abierta y la dignidad en paradero desconocido. «¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
    options: [
      { say: "Si tiro yo, la mitad de lo que ganes es mío. Con o sin boda.", reply: "Kike se lleva la mano al corazón. «¡Cásate conmigo en vez de con Vanesa!», grita, y sus amigos aúllan como lobos con descuento." },
      { say: "Venga, pero si salen siete, me debes una copa y una explicación.", reply: "«¡Una explicación de qué!», se ríe Kike. «¡Si yo no entiendo ni por qué me caso!»" },
      { say: "¿Seguro? Mi suerte es de familia, y en mi familia la suerte sale cara.", reply: "Kike duda un segundo, luego se encoge de hombros. «Mejor cara que ninguna. ¡Tira, que la novia no nos ve!»" }
    ],
    line2: "Tiras. Siete. La mesa explota, alguien te abraza, otro llora. En el caos, un invitado de mirada sobria te mete en la mano una caja de cerillas: «Salón Esmeralda». «Para cuando quiera hablar de su padre», dice, y se pierde entre la gente.",
    options2: [
      { say: "¡Espera! ¿Quién eres? ¡No me dejes con la intriga!", reply: "Kike te agarra del brazo, eufórico. «¡Déjalo, es el primo raro de la novia! ¡O eso creo! ¡Nadie lo conoce!»" },
      { say: "Kike, ese hombre no es de tu despedida, ¿verdad?", reply: "Kike entorna los ojos con dificultad. «Ahora que lo dices… venía con nosotros desde el aeropuerto. Pensé que era el del seguro de viaje»." },
      { say: "Cerillas en un casino donde se fuma a mares. Qué detalle tan poco inocente.", reply: "El novio se pone serio un instante, que en su estado es una hazaña. «Aquí nada es inocente, rubia. Ni siquiera yo, y mira que lo intento»." }
    ],
    end: "Los gritos de la despedida te persiguen hasta la caja. Guardas las cerillas junto a la ficha: el bolso empieza a parecer un archivo policial.",
    talk: [
      "¿Por qué crees que el invitado misterioso eligió una despedida de soltero para acercarse a Valentina?",
      "¿Qué te parecen las despedidas de soltero en Las Vegas? ¿Es un cliché o una tradición necesaria?",
      "Si te hubieran pedido tirar los dados por otra persona, ¿te habría dado vértigo la responsabilidad?",
      "¿Has vivido alguna fiesta en la que pasara algo raro que nadie más notó?",
      "¿Qué tono usarías para describir a Kike: tierno, ridículo o las dos cosas?"
    ],
    words: ["en paradero desconocido", "dejar con la intriga", "a mares", "encogerse de hombros"]
  },
  caja: {
    title: "Detrás de los barrotes",
    line: "Detrás del cristal blindado, Dolores cuenta billetes con la expresión de quien ha visto demasiadas lágrimas convertidas en efectivo. Pones la ficha dorada en la bandeja. Ella no la toca. «Esta ficha no se cambia aquí. Solo arriba».",
    options: [
      { say: "Qué lástima. Con lo bien que me habría venido para pagar mis vicios.", reply: "Dolores no sonríe, pero algo se le afloja en la comisura. «Sus vicios, señorita, le van a costar bastante más que una ficha»." },
      { say: "¿Arriba dónde? Aquí todo el mundo habla en clave.", reply: "«Arriba es arriba», dice Dolores. «Y la clave, como su nombre indica, no se da en ventanilla»." },
      { say: "¿La ha visto antes, verdad? Se le nota en las manos.", reply: "Dolores esconde las manos bajo el mostrador. «Hace veinticinco años vi una igual. La trajo un hombre que se parecía mucho a usted»." }
    ],
    line2: "Dolores empuja la ficha de vuelta con un bolígrafo, como si quemara. «Le diré una cosa, porque me cae bien, y eso no me pasa desde mil novecientos noventa y tantos: esa ficha no es dinero. Es una invitación. O una factura».",
    options2: [
      { say: "¿Y cómo sé cuál de las dos es?", reply: "«Por quién le abra la puerta», contesta. «Si es un camarero, es invitación. Si es un hombre de gris, es factura»." },
      { say: "Si mi padre hubiera escuchado a alguien como usted, ¿seguiría aquí?", reply: "Dolores tarda en responder. «Tu padre me escuchó. Por eso se fue. Los que no escuchan se quedan… debajo del desierto»." },
      { say: "Usted debería escribir novelas negras, Dolores. Tiene el tono perfecto.", reply: "«Las escribo», dice, impasible. «Pero nadie las publica. Dicen que son demasiado realistas»." }
    ],
    end: "Te guardas la ficha con más cuidado que antes. El piano del bar central suena como una invitación más amable que la del piso 3.",
    talk: [
      "¿Qué quiere decir Dolores con «esa ficha no es dinero; es una invitación o una factura»?",
      "Si hubieras trabajado veinticinco años en esa caja, ¿qué secretos crees que guardarías?",
      "¿Te gustan las personas serias que de repente sueltan una ironía? ¿Conoces a alguien así?",
      "¿Qué trabajo te parece más duro emocionalmente: cajera de casino, camarero o crupier?",
      "¿Alguna vez un objeto pequeño te ha parecido una amenaza o una promesa?"
    ],
    words: ["hablar en clave", "venir bien", "como su nombre indica", "caer bien"]
  },
  bar: {
    title: "La última mano",
    line: "En la barra central, Leo agita una coctelera como si estuviera rompiendo un corazón. Al piano, Chet acaricia las teclas con un cigarrillo apagado entre los labios. «¿Qué le sirvo a la dama?», pregunta Leo. «Tengo un cóctel para cada pecado».",
    options: [
      { say: "Sorpréndeme. Algo que sepa a secreto y no deje resaca.", reply: "Leo sonríe y echa mezcal, granada y un humo de romero. «No existe el secreto sin resaca, cariño. Pero este, al menos, lo disimula»." },
      { say: "Lo que tomaba Ernesto Duarte. Seguro que lo recuerdas.", reply: "Leo deja de agitar un segundo. «Whisky solo, sin hielo, y una cereza que nunca se comía. Decía que era para la suerte»." },
      { say: "Elige tú el pecado. Yo ya he cometido los míos esta noche.", reply: "«Entonces, la absolución», dice Leo, y te sirve un vermut con una piel de naranja retorcida como una confesión." }
    ],
    line2: "Chet, sin pedir permiso, empieza una balada antigua. Leo palidece. «Esa canción la tocaba siempre para tu padre», dice Chet sin dejar de tocar. «La última vez fue antes de la última mano. Él me dijo: si no vuelvo, tócala para quien venga a buscarme».",
    options2: [
      { say: "Entonces sabía que no iba a volver. Y aun así subió.", reply: "Chet asiente con los ojos cerrados. «Hay hombres que suben sabiendo que no bajarán. Llámalo valor, llámalo vanidad. Para mí, es lo mismo»." },
      { say: "¿Qué fue exactamente esa última mano, Chet?", reply: "«Pregúntale al Holandés, en el Salón Esmeralda», responde. «Él estaba sentado a la mesa. Yo solo ponía la banda sonora»." },
      { say: "Tócala otra vez. Esta noche la necesito más que el cóctel.", reply: "Chet sonríe y vuelve al principio. «Su padre decía lo mismo. Al final, todos los Duarte piden bis»." }
    ],
    end: "Te terminas la copa despacio, como se termina una carta de despedida. En el segundo piso, las pantallas de las apuestas deportivas gritan resultados.",
    talk: [
      "¿Qué cóctel le habrías pedido tú a Leo y por qué?",
      "¿Crees que Ernesto subió aquella noche por valor o por vanidad? ¿Dónde está la frontera?",
      "¿Hay alguna canción que te recuerde a una persona que ya no está? ¿Qué sientes al oírla?",
      "Si hubieras dejado un mensaje para quien viniera a buscarte, ¿cuál habría sido?",
      "¿Qué opinas de los camareros que lo saben todo? ¿Son confesores modernos?"
    ],
    words: ["pedir bis", "banda sonora", "y aun así", "saber a"]
  },
  apuestas: {
    title: "Todos apuestan algo",
    line: "Bajo un muro de pantallas gigantes donde corren caballos y ruedan balones, Ramiro se muerde las uñas con método. «Lo he puesto todo al Tijuana, señorita. Todo. El coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
    options: [
      { say: "Me encanta un hombre que no conoce la palabra prudencia.", reply: "Ramiro se sonroja hasta las orejas. «La conozco, señorita. Es que no nos llevamos bien desde el colegio»." },
      { say: "¿Todo? Ramiro, eso no es apostar, es suicidarse con estilo.", reply: "«Con estilo, por lo menos», contesta, y se ríe con una risa que suena a sirena de ambulancia." },
      { say: "Si pierde, ¿quién se queda con el reloj de su abuelo?", reply: "Ramiro traga saliva. «Un señor del piso 3. Aquí todo acaba en el piso 3, como el agua acaba en el desagüe»." }
    ],
    line2: "En la pantalla, el Tijuana falla un penalti. Ramiro gime y luego, extrañamente sereno, te mira. «¿Sabe lo mejor? En este casino todo el mundo apuesta algo. Hasta el dueño. Dicen que una vez se apostó el casino entero. Y que no le gustó perder».",
    options2: [
      { say: "Nadie apuesta lo que no está dispuesto a perder. Salvo los que no piensan pagar.", reply: "Ramiro te señala con el dedo. «Ha dado en el clavo. El viejo Montalbán firma muy bien… y paga muy mal»." },
      { say: "¿Y quién le ganó? Dígamelo antes de que llegue el segundo tiempo.", reply: "«Un crupier con más agallas que sentido común», susurra. «Se le parecía bastante, ahora que la miro»." },
      { say: "Ramiro, deje el reloj y venga conmigo a por una copa. Hoy ya ha perdido bastante.", reply: "Ramiro duda, mira la pantalla y niega con la cabeza. «Gracias, de verdad. Pero si me hubiera ido en el primer tiempo, no sabría qué hacer con mi vida»." }
    ],
    end: "Dejas a Ramiro rezándole a un balón. Al fondo del Bulevar, una puerta verde anuncia en letras discretas: «Salón Esmeralda».",
    talk: [
      "¿Qué opinas de la frase «nadie apuesta lo que no está dispuesto a perder»?",
      "Si fueras amiga o amigo de Ramiro, ¿qué le habrías dicho antes de que apostara todo?",
      "¿Crees que las apuestas deportivas son un entretenimiento inofensivo o un problema social?",
      "¿Qué has «apostado» tú en la vida: un trabajo, una mudanza, una relación?",
      "¿Qué te sugiere que incluso el dueño apostara el casino entero?"
    ],
    words: ["quedarse en la calle", "llevarse bien", "dar en el clavo", "tener agallas"]
  },
  poker: {
    title: "Escalera real",
    line: "El Salón Esmeralda huele a fieltro, a colonia vieja y a derrotas educadas. El Holandés, con gafas oscuras aunque sea de noche y bajo techo, baraja sin mirar. «Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
    options: [
      { say: "Las mujeres que merecen la pena siempre llegan tarde. Es parte del encanto.", reply: "El Holandés sonríe apenas. «Su padre decía lo mismo de las cartas buenas. Y casi siempre tenía razón»." },
      { say: "No he venido a jugar. He venido a que me cuente lo que vio.", reply: "«Aquí no se cuenta nada sin una mano sobre la mesa», dice él, y te reparte dos cartas boca abajo. «Mírelas. Es por cortesía»." },
      { say: "¿Por qué lleva gafas oscuras? ¿Tiene algo que esconder o algo que no quiere ver?", reply: "El Holandés se las baja un milímetro. Un ojo azul, otro blanco como la leche. «Las dos cosas, señorita. Como todo el mundo aquí»." }
    ],
    line2: "«Aquella noche yo estaba en esta silla», dice despacio. «Don Aurelio apostó el casino, convencido de que su full era invencible. Tu padre enseñó una escalera real de corazones. Ganó el Gran Meridiano en una sola mano. Al día siguiente, ya no estaba».",
    options2: [
      { say: "Si Aurelio hubiera pagado, mi padre habría sido el dueño. ¿Me equivoco?", reply: "«No se equivoca», dice. «Pero la historia no la escriben los que ganan las manos, sino los que guardan los papeles»." },
      { say: "Una escalera real… ¿no le pareció demasiado perfecta?", reply: "El Holandés ríe sin ruido. «A todos nos lo pareció. Pero yo repartí, señorita. Y yo no hago trampas. Su padre tampoco las necesitaba»." },
      { say: "¿Y usted por qué no dijo nada en veinticinco años?", reply: "«Porque me gusta respirar», responde con calma. «Y porque alguien tenía que esperar a que llegara usted»." }
    ],
    end: "El Holandés recoge las cartas sin enseñarte las tuyas. «Guarde eso que lleva en el bolso», te dice. «Las escaleras reales abren muchas puertas». Del bufé llega un olor a mariscos y a chismes.",
    talk: [
      "¿Crees que la escalera real de Ernesto fue suerte, talento o algo más turbio?",
      "¿Estás de acuerdo con que «la historia la escriben los que guardan los papeles»?",
      "Si hubieras sido testigo de aquella mano, ¿habrías hablado o habrías callado como el Holandés?",
      "¿Juegas o has jugado alguna vez al póker? ¿Qué te parece mejor: tener buenas cartas o saber farolear?",
      "¿Alguna vez has esperado mucho tiempo a decir algo importante? ¿Por qué esperaste?"
    ],
    words: ["merecer la pena", "boca abajo", "farolear", "escalera real"]
  },
  bufe: {
    title: "Mariscos y chismes",
    line: "Torres de langostas, una fuente de chocolate que parece un volcán con modales y, en medio, Tere, la chef, con el cuchillo en una mano y la lengua más afilada que el cuchillo. «Mi niña, tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón».",
    options: [
      { say: "Vengo por el chocolate, Tere. Lo demás son excusas.", reply: "Tere suelta una carcajada. «¡Esa es mi chica! Toma, moja una fresa. Y luego me preguntas lo que de verdad quieres»." },
      { say: "Me han dicho que usted se entera de todo antes que el dueño.", reply: "«Antes que el dueño, antes que el cura y antes que la policía», dice Tere, orgullosa. «La cocina es el confesionario de este casino»." },
      { say: "¿Qué se cuece en esta casa, Tere? Y no hablo de mariscos.", reply: "Tere baja la voz y el cuchillo a la vez. «Se cuece algo gordo, mi amor. Una herencia, un testamento y un hijo con muy mal genio»." }
    ],
    line2: "«Don Aurelio está viejo y enfermo», cuchichea. «Dice que quiere arreglar cuentas antes de irse al otro barrio. Y su hijo, Marco, está que trina. Dicen que cuando lo oyó rompió una botella de coñac de las de diez mil dólares».",
    options2: [
      { say: "Arreglar cuentas con quién, Tere. Usted lo sabe.", reply: "Tere te mira de arriba abajo. «Con alguien que lleva tu apellido, cariño. Y no lo digo yo, lo dice el pastel que me encargaron con tu nombre»." },
      { say: "Pobre coñac. Siempre pagan los inocentes.", reply: "Tere se ríe tanto que tiene que apoyarse en la langosta. «Ay, me encantas. Pero ojo: Marco tampoco es inocente, aunque tenga cara de anuncio»." },
      { say: "Si yo hubiera nacido hija de un hombre así, también estaría que trino.", reply: "«Ahí está el detalle», dice Tere, señalándote con el cucharón. «Que a lo mejor la heredera no es la que todo el mundo cree»." }
    ],
    end: "Tere te despide con un beso de harina en la mejilla. Desde el teatro llega una ovación y un olor a pólvora de mentira.",
    talk: [
      "¿Te fías de los chismes de Tere? ¿Qué parte crees que es verdad y qué parte exageración?",
      "¿Qué significa «estar que trina»? ¿Qué situación te pone a ti así?",
      "¿Por qué crees que alguien quiere «arreglar cuentas» justo antes de morir?",
      "¿Hay en tu trabajo o en tu familia alguien que, como Tere, se entera de todo?",
      "Si hubieras sido Marco, ¿cómo habrías reaccionado al saber los planes de tu padre?"
    ],
    words: ["qué se cuece", "irse al otro barrio", "estar que trina", "arreglar cuentas"]
  },
  teatro: {
    title: "El truco de Faustino",
    line: "En el camerino, entre plumas y espejos rodeados de bombillas, El Gran Faustino se quita la capa con la gravedad de un obispo. Estrella, la bailarina, se ajusta una media sin ninguna gravedad. «¡Una espectadora entre bastidores!», declama Faustino. «Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
    options: [
      { say: "Lo que escondo no se muestra en el primer encuentro, maestro.", reply: "Estrella silba. «Ay, Faustino, esta te gana en escena»." },
      { say: "Le enseño una ficha si me promete decirme qué tiene de especial.", reply: "Faustino junta las manos. «Un mago nunca promete, señorita. Pero a veces cumple»." },
      { say: "¿Y si le muestro algo y desaparece, como hizo mi padre?", reply: "Faustino se pone serio un instante. «Las desapariciones de verdad, señorita, no tienen aplauso. Solo silencio»." }
    ],
    line2: "Le das la ficha. Faustino la hace bailar entre los dedos, la acerca a una bombilla y, con un chasquido, la parte en dos como una nuez. Dentro, grabadas en letra diminuta, dos palabras: «Escalera real». «¡Y he aquí la contraseña!», anuncia, encantado de sí mismo.",
    options2: [
      { say: "Es usted un genio o un cómplice. No sé cuál de las dos me inquieta más.", reply: "Faustino se inclina con una reverencia. «Las dos cosas, señorita. Lo que no sabía era que aún funcionaba el mecanismo. Lo fabriqué yo, hace veinticinco años»." },
      { say: "Si me lo hubiera dicho antes, me habría ahorrado media noche de preguntas.", reply: "«Y se habría perdido el espectáculo», dice Faustino. «El misterio sin teatro es solo papeleo»." },
      { say: "Estrella, ¿tú sabías algo de esto?", reply: "Estrella se encoge de hombros con un brillo de lentejuelas. «Yo solo sé que en el piso 3 piden contraseña. Y que quien la dice bien, no baja igual»." }
    ],
    end: "Faustino vuelve a cerrar la ficha con un clic y te la devuelve con un guiño. Estrella te susurra: «La capilla está al lado. Hoy hay una boda de esas de tres horas».",
    talk: [
      "¿Por qué crees que Ernesto escondió una contraseña dentro de una ficha?",
      "¿Qué te parece más atractivo en un espectáculo: el truco o el misterio que lo rodea?",
      "Si hubieras descubierto algo así, ¿se lo habrías contado a alguien o lo habrías guardado para ti?",
      "¿Has ido alguna vez a un espectáculo de magia? ¿Intentaste descubrir el truco?",
      "¿Qué quiere decir Faustino con «el misterio sin teatro es solo papeleo»?"
    ],
    words: ["entre bastidores", "he aquí", "cómplice", "ponerse serio"]
  },
  capilla: {
    title: "Amor exprés",
    line: "En la capilla «Amor Exprés», un Elvis de patillas imposibles sostiene una Biblia y un micrófono. Ante él, una pareja que se conoció hace tres horas se mira como si se conociera de otra vida. «¡Nena!», te dice Elvis, «nos falta testigo. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
    options: [
      { say: "Encantada. Nunca he visto un amor más rápido que una mano de bacará.", reply: "Elvis mueve la cadera con solemnidad. «El amor, nena, es la única apuesta que se paga con la misma moneda»." },
      { say: "¿Tres horas? Yo he tardado más en elegir este vestido.", reply: "La novia ríe, nerviosa. «Y te quedó perfecto. A nosotros también nos quedó perfecto, aunque mañana nos arrepintamos»." },
      { say: "Solo si me prometen que, pase lo que pase, no se arrepienten.", reply: "El novio mira a la novia. «Prometido. Si nos arrepentimos, lo haremos juntos, que también es una forma de amor»." }
    ],
    line2: "Elvis carraspea con voz de terciopelo. «Antes del sí, una pregunta a la testigo, que la tradición manda: ¿usted cree en el amor a primera vista, o hay que mirar dos veces?»",
    options2: [
      { say: "Yo creo en el amor a primera vista y en el divorcio a segunda.", reply: "Elvis suelta una carcajada que hace temblar las flores de plástico. «¡Gracias, muchas gracias! Esta frase me la quedo para el show»." },
      { say: "Creo que hay que mirar dos veces. La primera vez solo ves lo que deseas.", reply: "La novia te coge la mano, emocionada. «Pues yo lo he mirado tres veces y me sigue gustando»." },
      { say: "Si mi padre hubiera creído en el amor rápido, quizá yo no existiría. Así que sí, creo.", reply: "Elvis se quita las gafas, conmovido. «Nena, esa es la mejor respuesta que he oído en esta capilla. Y he oído muchas a deshoras»." }
    ],
    end: "Los novios se besan bajo una lluvia de confeti. Firmas como testigo con el pulso firme. Abajo, el bajo de la discoteca hace vibrar el suelo como un corazón con prisa.",
    talk: [
      "¿Qué opinas de las bodas exprés de Las Vegas: romanticismo puro o locura con buena música?",
      "¿Crees en el amor a primera vista o hay que «mirar dos veces»?",
      "Si te hubieran pedido ser testigo de una boda así, ¿habrías aceptado?",
      "¿Cuál es la decisión más impulsiva que has tomado? ¿Te arrepientes o la repetirías?",
      "¿Qué quiere decir Elvis con «el amor es la única apuesta que se paga con la misma moneda»?"
    ],
    words: ["a primera vista", "a deshoras", "pase lo que pase", "pagar con la misma moneda"]
  },
  discoteca: {
    title: "El hombre de gris",
    line: "Luces que cortan el aire como navajas, un DJ que parece rezar y una mesa VIP llena de botellas con bengalas. Bailas. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro. Es el hombre del traje gris. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
    options: [
      { say: "Bruno, llevas toda la noche detrás de mí. Al menos invítame a algo.", reply: "Bruno sonríe sin mover el resto de la cara. «Lo tengo apuntado. Pero hoy no invito yo; invitan arriba»." },
      { say: "Habla claro. ¿Para quién trabajas?", reply: "«Para Don Aurelio Montalbán», responde, sin pestañear. «Desde hace dieciocho años. Y nunca me ha pedido que baile con nadie»." },
      { say: "¿Sabes bailar o solo sabes seguir a la gente?", reply: "Bruno te da una vuelta perfecta, sorprendentemente ligera. «Las dos cosas, señorita. Lo segundo me paga el alquiler»." }
    ],
    line2: "Bruno se inclina para que lo oigas por encima de la música. «Te esperan arriba. Don Aurelio. No es una amenaza, aunque entiendo que lo parezca. Si hubiera querido hacerle daño, ya lo habría hecho en el aparcamiento».",
    options2: [
      { say: "Qué romántico. Pocas veces me han dicho algo tan tierno.", reply: "Bruno, por primera vez, se ríe de verdad. «Es lo más tierno que sé decir. No me pida más»." },
      { say: "Subiré cuando yo quiera, no cuando me lo ordenen.", reply: "«Por eso me cae bien», dice Bruno. «Pero no tarde. El viejo no tiene tanto tiempo como usted»." },
      { say: "¿Y si no subo? ¿Qué pasa con los que dicen que no?", reply: "Bruno se encoge de hombros. «No lo sé. Nunca nadie le ha dicho que no a Don Aurelio. Sería interesante verlo»." }
    ],
    end: "Bruno se aleja entre el humo de colores sin darse la vuelta. El ascensor dorado al piso VIP brilla al fondo, como una boca que espera.",
    talk: [
      "¿Te parece Bruno un hombre peligroso o un profesional con buenos modales?",
      "¿Qué habrías hecho tú: subir enseguida o hacer esperar a Don Aurelio?",
      "¿Qué opinas de la frase «no es una amenaza, aunque entiendo que lo parezca»?",
      "¿Te gusta salir a bailar? ¿Qué tipo de música te hace olvidarte de todo?",
      "¿Alguna vez alguien te ha transmitido un mensaje importante en un lugar ruidoso?"
    ],
    words: ["sin pestañear", "pagar el alquiler", "por encima de", "hacer esperar"]
  },
  vip: {
    title: "La contraseña",
    line: "El ascensor se abre en un pasillo de terciopelo granate. Dos armarios con traje, Bruno y Tano, guardan una puerta negra. Tano, con un palillo entre los dientes, no se molesta en mirarte a los ojos. «Salón privado. Contraseña, o media vuelta, princesa».",
    options: [
      { say: "La contraseña la tengo en la punta de la lengua. ¿Quieres comprobarlo de cerca?", reply: "Tano se atraganta con el palillo. Bruno mira al techo. «No le hagas caso, Tano. Es de las que muerden»." },
      { say: "Escalera real.", reply: "Tano deja de masticar. Se miran. «Hace veinticinco años que nadie dice esas palabras en este pasillo», murmura Bruno." },
      { say: "Princesa, no. Dime Valentina, o mejor, señorita Duarte.", reply: "Tano sonríe, por fin, de medio lado. «Señorita Duarte. Con ese apellido, aquí arriba se abren puertas… o se cierran para siempre»." }
    ],
    line2: "Tano se cruza de brazos. «Una cosa más. Arriba no se entra con prisas ni con preguntas. ¿Viene a jugar, a cobrar o a llorar?»",
    options2: [
      { say: "A las tres cosas, y en ese orden, si no les importa.", reply: "Bruno abre la puerta con una sonrisa casi paternal. «Adelante. Nunca nadie ha contestado tan bien»." },
      { say: "Vengo a saber la verdad. Lo demás, ya veremos.", reply: "Tano asiente despacio. «La verdad está al fondo, a la izquierda. Pero el camino pasa por la mesa de la Condesa»." },
      { say: "Si hubiera venido a llorar, no me habría puesto rímel.", reply: "Tano suelta una carcajada que resuena en el terciopelo. «Esta me gusta, Bruno. Esta va a durar»." }
    ],
    end: "La puerta negra se abre sin ruido. Dentro huele a dinero viejo, a perfume caro y a decisiones irreversibles. El salón de bacará te espera.",
    talk: [
      "¿Qué te parece la manera en que Valentina maneja a los guardaespaldas?",
      "Si te hubieran preguntado «¿vienes a jugar, a cobrar o a llorar?», ¿qué habrías contestado?",
      "¿Qué efecto tiene la frase «se abren puertas… o se cierran para siempre»?",
      "¿Has estado alguna vez en un lugar exclusivo donde te sentías fuera de lugar? Cuéntalo.",
      "¿Crees que el humor es una buena arma en situaciones de tensión? ¿Por qué?"
    ],
    words: ["en la punta de la lengua", "de medio lado", "dar media vuelta", "fuera de lugar"]
  },
  bacara: {
    title: "La Condesa juega fuerte",
    line: "En el salón de bacará, bajo un candelabro que ha visto quebrar a príncipes, La Condesa juega sola contra la banca. Perlas, guantes negros, una boquilla de marfil. Te ve entrar y sonríe sin enseñar los dientes. «La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
    options: [
      { say: "Tengo sus ojos, sus nervios y, me temo, su mala costumbre de ganar.", reply: "La Condesa ríe con una risa de copa de cristal. «Entonces no le dejaré la banca. Por si acaso»." },
      { say: "No vengo a lucirme. Vengo a escuchar lo que usted sepa.", reply: "«Qué aburrido», suspira la Condesa. «Pero qué honesto. Su padre tampoco se lucía; simplemente ganaba»." },
      { say: "¿Y usted, Condesa, tiene nervios o solo perlas?", reply: "La Condesa toca su collar sin dejar de mirarte. «Las perlas son mis nervios, querida. Por eso nunca se rompen»." }
    ],
    line2: "Empuja una pila de fichas al centro. «Una sola mano. Si gana, le cuento cómo conocí a su padre. Si pierde, me deja la ficha dorada. ¿Apuesta, o prefiere ser prudente, como la gente que vive mucho y no recuerda nada?»",
    options2: [
      { say: "Apuesto. Quien no arriesga no gana, y yo he venido a ganar.", reply: "Las cartas se giran: nueve contra siete. Ganas. La Condesa aplaude con los guantes. «Ernesto era un hombre que sabía irse a tiempo. Usted, me temo, sabe quedarse»." },
      { say: "No apuesto la ficha. No es mía para perderla.", reply: "La Condesa te mira con una mezcla de respeto y fastidio. «Eso mismo me dijo él. Era un hombre que sabía irse a tiempo. Y que sabía lo que no le pertenecía»." },
      { say: "Si yo hubiera querido vivir mucho, me habría quedado en casa. Reparta.", reply: "La Condesa reparte y pierde con elegancia. «Hacía años que no perdía con gusto. Su padre era un hombre que sabía irse a tiempo, querida. Aprenda de él»." }
    ],
    end: "La Condesa vuelve a su boquilla como quien vuelve a un viejo amor. A través de una cortina de humo llegan voces graves y el olor de los puros.",
    talk: [
      "¿Qué crees que quiere decir La Condesa con «un hombre que sabía irse a tiempo»? ¿Es un elogio?",
      "Si hubieras estado en el lugar de Valentina, ¿habrías apostado la ficha?",
      "¿Estás de acuerdo con el refrán «quien no arriesga no gana»? ¿Tiene límites?",
      "¿Conoces a alguien que sepa irse a tiempo de una fiesta, un trabajo o una relación?",
      "¿Qué personaje de esta historia te parece más elegante y por qué?"
    ],
    words: ["irse a tiempo", "quien no arriesga no gana", "por si acaso", "lucirse"]
  },
  puros: {
    title: "La Familia",
    line: "La sala de puros es un banco de niebla con sillones de cuero. Hombres de la Familia juegan a cartas sin hablar; el whisky habla por ellos. Don Carmine, con anillo de sello y voz de grava, te señala una silla vacía. «Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
    options: [
      { say: "Callar a tiempo es mi especialidad. Hablar a tiempo, también.", reply: "Don Carmine sonríe. «Una mujer que sabe distinguir los dos tiempos. Eso es más raro que una escalera real»." },
      { say: "No he venido a callar, Don Carmine. He venido a preguntar.", reply: "Los otros hombres dejan de jugar. Don Carmine levanta una mano para calmar la sala. «Pregunta, entonces. Pero recuerda que aquí cada pregunta cuesta»." },
      { say: "¿Me ofrece un puro o solo la amenaza de siempre?", reply: "Don Carmine ríe con una carcajada que suena a motor viejo. «Las dos cosas. Pero el puro es cubano y la amenaza, de la casa»." }
    ],
    line2: "Don Carmine expulsa una nube espesa. «Tu padre era un buen hombre, pero se llevó algo que no era suyo. Eso dicen. Y en la Familia, lo que se dice, se cree… hasta que alguien demuestra lo contrario».",
    options2: [
      { say: "¿Y si lo que se llevó era suyo, y quien no pagó fue otro?", reply: "Don Carmine se queda inmóvil. «Entonces habría que revisar muchas cosas. Y a mí no me gusta revisar, me gusta cobrar»." },
      { say: "Demuéstrelo usted. O retire lo dicho, que no es lo mismo.", reply: "Un murmullo recorre la mesa. Don Carmine asiente con una lentitud peligrosa. «Tienes la lengua de tu padre. Él tampoco retiraba nada»." },
      { say: "Si mi padre hubiera robado algo, yo no estaría aquí tan tranquila.", reply: "«Tan tranquila no estás», observa Don Carmine. «Te tiembla la ceniza. Pero lo disimulas como una profesional»." }
    ],
    end: "Don Carmine te despide con un gesto, como quien deja abierta una puerta y una deuda. En el pasillo, Ignacio, el anfitrión, te espera con una carpeta bajo el brazo.",
    talk: [
      "¿Qué piensas de la idea de que «lo que se dice, se cree hasta que alguien demuestra lo contrario»?",
      "¿Crees que Ernesto se llevó algo que no era suyo? ¿Qué pistas tienes hasta ahora?",
      "Si hubieras estado en esa sala, ¿habrías provocado a Don Carmine o habrías ido con pies de plomo?",
      "¿En tu vida, has tenido que defender la reputación de alguien de tu familia?",
      "¿Por qué crees que el cine adora los personajes mafiosos como Don Carmine?"
    ],
    words: ["no tocar un pelo", "ir con pies de plomo", "retirar lo dicho", "callar a tiempo"]
  },
  anfitrion: {
    title: "La fotografía",
    line: "La mesa del anfitrión es una isla de caoba bajo una pared de fotografías antiguas: estrellas de cine, boxeadores, presidentes con copas en la mano. Ignacio, el anfitrión, impecable como un mayordomo de novela, te sirve un café sin preguntar. «Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
    options: [
      { say: "Me gustan los hombres que saben esperar. Enséñemela.", reply: "Ignacio inclina la cabeza con una elegancia antigua. «La paciencia es la única virtud que este casino no ha logrado comprar»." },
      { say: "Ignacio, ¿cuánto sabe usted y cuánto le han pagado por callar?", reply: "«Sé lo justo», responde, imperturbable. «Y nadie me ha pagado por callar. Me han pagado por recordar, que es mucho más caro»." },
      { say: "¿Siempre tan dramático o solo con las hijas de los desaparecidos?", reply: "Ignacio sonríe por primera vez. «Solo con las que tienen sentido del humor. Su padre lo tenía. Incluso al final»." }
    ],
    line2: "Descuelga la foto. Dos jóvenes abrazados, en esmoquin, delante de esta misma mesa: Ernesto y Aurelio. Detrás del marco, un papel doblado: el acuerdo de la apuesta, firmado por los dos. «Eran amigos. Como hermanos. Hasta que la escalera real los convirtió en otra cosa».",
    options2: [
      { say: "Si nunca hubieran jugado esa mano, ¿seguirían siendo amigos?", reply: "Ignacio mira la foto largo rato. «Quizá. Pero los hombres como ellos no saben dejar una partida sin terminar. Ni una amistad sin ponerla a prueba»." },
      { say: "Esto es una prueba. Con este papel, el casino podría ser de mi padre.", reply: "«Podría», dice Ignacio. «Por eso lo he guardado yo y no un abogado. Los abogados se compran; los mayordomos solo se cansan»." },
      { say: "Qué guapo era mi padre. Nadie me había enseñado una foto suya tan feliz.", reply: "Ignacio baja la voz. «Esa noche fue el hombre más feliz de Las Vegas. Durante una hora. Luego subió al despacho»." }
    ],
    end: "Ignacio te entrega la foto y el papel envueltos en un pañuelo de seda. «La terraza», susurra. «El joven Marco la espera allí. No le dé la espalda».",
    talk: [
      "¿Qué te parece más valioso: la foto o el papel firmado? ¿Por qué?",
      "¿Crees que el dinero o el poder siempre terminan con las amistades? Da ejemplos.",
      "Si hubieras sido Ignacio, ¿le habrías entregado la prueba a Valentina o se la habrías dado a un abogado?",
      "¿Tienes alguna foto antigua de tu familia que te emocione especialmente? Descríbela.",
      "¿Qué quiere decir Ignacio con «me han pagado por recordar»?"
    ],
    words: ["descolgar", "poner a prueba", "lo justo", "dar la espalda"]
  },
  terraza: {
    title: "Una oferta con vistas",
    line: "La terraza flota sobre el Strip: fuentes que bailan, neones que mienten y un helicóptero que corta la noche como un bisturí. Marco Montalbán, traje negro, sonrisa de anuncio y ojos de animal acorralado, te ofrece una copa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
    options: [
      { say: "Brindo. Aunque a mí, de herencia, solo me dejaron preguntas.", reply: "Marco choca su copa con la tuya, demasiado fuerte. «Las preguntas son caras en esta ciudad. Yo, en cambio, ofrezco respuestas al contado»." },
      { say: "No bebo con quien me quiere fuera de la ciudad. Al grano, Marco.", reply: "Marco deja la copa en la barandilla. «Al grano, entonces. Me gusta la gente práctica. Se negocia mejor»." },
      { say: "¿Siempre seduces así, con vistas y amenazas? Muy de película.", reply: "Marco se ríe, pero no le sale del todo. «Esto no es una amenaza. Es una cortesía. Las amenazas las hago sin vistas»." }
    ],
    line2: "Saca un sobre grueso del bolsillo. «Un millón. En efectivo. Un helicóptero te lleva al aeropuerto esta noche. Olvidas la ficha, el papel y a mi padre. Si hubieras llegado un año más tarde, no habría nada que olvidar».",
    options2: [
      { say: "Un millón es poco por un casino entero, ¿no crees?", reply: "Marco aprieta la mandíbula. «Veo que sabes sumar. Entonces también sabrás que los muertos no cobran»." },
      { say: "Guárdate el sobre. Mi padre ya rechazó algo así una vez.", reply: "Marco palidece bajo el bronceado. «Y mira cómo acabó», susurra. Luego, más bajo: «Yo no soy mi padre. No sé si eso es bueno o peor»." },
      { say: "Si tanto miedo tienes a la verdad, es que la verdad te pertenece poco.", reply: "Marco te mira como si le hubieras quitado la máscara. «Lo que me da miedo no es la verdad. Es que mi padre te quiera más a ti que a mí»." }
    ],
    end: "El helicóptero se aleja sin ti. Marco se queda solo, con el sobre en la mano, como un niño con un regalo que nadie quiere. Al fondo del pasillo, la puerta de madera del despacho del dueño está entreabierta.",
    talk: [
      "¿Qué opinas de Marco: villano, víctima o las dos cosas?",
      "Si te hubieran ofrecido un millón por irte esa noche, ¿lo habrías aceptado? Sé sincero o sincera.",
      "¿Qué te parece la frase «las amenazas las hago sin vistas»? ¿Qué ironía hay en ella?",
      "¿Alguna vez has tenido que elegir entre dinero y principios? ¿Qué elegiste?",
      "¿Por qué crees que Marco tiene celos de Valentina?"
    ],
    words: ["al contado", "ir al grano", "acorralado", "quitar la máscara"]
  },
  oficina: {
    title: "La confesión",
    line: "El despacho huele a madera vieja, a whisky de veinte años y a medicina. Don Aurelio Montalbán, en una silla de ruedas frente a una caja fuerte antigua, te mira como quien ve volver a un fantasma querido. «Tienes sus ojos, ya me lo habían dicho. Y su manera de entrar sin llamar. Siéntate, Valentina. Ya es medianoche».",
    options: [
      { say: "He esperado veinticinco años para esta conversación. Puedo esperar a que sirva el whisky.", reply: "Don Aurelio sirve dos vasos con mano temblorosa. «Tu padre tampoco tenía prisa en las cosas importantes. Solo en las partidas»." },
      { say: "Sin rodeos, Don Aurelio. ¿Qué le hizo a mi padre?", reply: "El viejo cierra los ojos. «Lo peor que se le puede hacer a un amigo: no pagarle. Y luego dejar que el mundo pensara que el ladrón era él»." },
      { say: "Bonito despacho para alguien que ganó tanto perdiendo.", reply: "Don Aurelio sonríe con amargura. «Qué cruel eres. Y qué razón tienes. Ese es el único casino que nunca supe dirigir: mi conciencia»." }
    ],
    line2: "Abre la caja fuerte. Dentro, un contrato y una dirección escrita a mano. «Ernesto ganó este casino. Yo no pagué. Él se fue para proteger a tu madre y a ti. La ficha era suya; te la mandé yo. Te ofrezco elegir: la mitad del Gran Meridiano… o la verdad entera sobre dónde está tu padre».",
    options2: [
      { say: "Quiero la verdad. El dinero ya ha arruinado bastantes familias esta noche.", reply: "Don Aurelio asiente con los ojos húmedos. «Sabía que dirías eso. Es lo que él habría dicho. Con esta dirección quiero saldar mi deuda»." },
      { say: "Quiero la mitad del casino. La verdad, la buscaré yo sola.", reply: "El viejo ríe, tosiendo. «Eres más Montalbán de lo que crees y más Duarte de lo que temo. Bienvenida a la casa, socia»." },
      { say: "¿Y si no elijo? Si me hubiera querido dar las dos cosas, no me haría escoger.", reply: "Don Aurelio te mira largo rato, en silencio. «Tienes razón. Te hago elegir porque es lo único que aún puedo controlar. Y porque tu padre también tuvo que elegir»." }
    ],
    end: "Don Aurelio empuja el contrato y la dirección hacia ti y deja la decisión sobre la mesa, como una última carta boca abajo. Afuera, el Strip sigue brillando, indiferente, como si nada hubiera pasado.",
    talk: [
      "¿Qué elegirías tú: la mitad del casino o la verdad sobre Ernesto? ¿Por qué?",
      "¿Te parece que Don Aurelio merece el perdón? ¿Por qué sí o por qué no?",
      "Si Aurelio hubiera pagado aquella noche, ¿cómo habría sido la vida de Valentina?",
      "¿Alguna vez has tenido que elegir entre algo material y algo emocional? ¿Qué pesó más?",
      "¿Cómo imaginas el final de esta historia? Inventa la última escena con tus propias palabras."
    ],
    words: ["sin rodeos", "entrar sin llamar", "saldar una deuda", "carta boca abajo"]
  }
};
export default scenes;
