// El Gran Meridiano · C2 · Voz negra literaria: ironía, dobles sentidos, refranes, cambios de registro y si + pluscuamperfecto
const scenes = {
  portero: {
    title: "Una cara que vuelve",
    line: "La puerta giratoria te escupe al mármol con el calor del Strip todavía pegado al vestido. Rocco, treinta años de botones dorados, se queda a medio saludo. «Perdone que la mire así, señorita. Es que hay caras que uno no olvida, aunque se lo hayan pedido de rodillas. Usted tiene los ojos de Ernesto Duarte».",
    money: {
      nada: "Entras detrás de un grupo de jubilados, sin un dólar en el bolso, solo con la ficha dorada y un pintalabios. Rocco ya ha levantado la mano para cortarte el paso —a las que llegan a pie y sin un peso las huele a una manzana— y se queda helado. «Perdone, señorita, iba a decirle que aquí no se pide limosna ni fuego. Pero es que usted tiene los ojos de Ernesto Duarte».",
      "100": "Te bajas del autobús que viene de la calle Fremont con cien dólares doblados en el sujetador, como manda la tradición de las abuelas prudentes. Rocco, treinta años de botones dorados, te señala por costumbre las mesas de cinco dólares… y se queda a medio gesto. «Las de mínimo bajo, a la izquierda, señorita. Y perdone que la mire así. Es que usted tiene los ojos de Ernesto Duarte».",
      "500": "Bajas de un taxi con quinientos dólares, ganas de liarla con moderación y el calor del Strip pegado al vestido. Rocco te abre la puerta con la sonrisa de serie que reserva a los turistas de una noche… y la sonrisa se le congela a medio camino. «Bienvenida, señorita. Que tenga suerte, que la va a necesitar. Perdone que la mire así. Es que usted tiene los ojos de Ernesto Duarte».",
      "1000": "Mil dólares en el bolso no te hacen rica, pero te dan ese andar de quien viene a por todas. Rocco lo nota —treinta años calibrando carteras por el paso— y se quita la gorra antes de tiempo. Luego te mira la cara y se le olvida la reverencia. «Perdone, señorita. Hay caras que uno no olvida aunque se lo pidan de rodillas. Usted tiene los ojos de Ernesto Duarte».",
      "10000": "Diez mil dólares en efectivo y un chófer que te ha llamado «señora» todo el trayecto. Rocco ya ha avisado por radio al jefe de sala —«jugadora entrando, bolso con peso»— cuando te ve de cerca y apaga la radio sin terminar la frase. «Perdone que la mire así, señorita. Es que hay caras que vuelven cuando nadie las llama. Usted tiene los ojos de Ernesto Duarte».",
      "100000": "Una limusina blanca, cortesía de un anfitrión que te ha escrito tres veces antes de aterrizar: con cien mil dólares, una no llega a un casino, encalla en él como una ballena de oro. Rocco aparta a dos botones a codazos para abrirte él mismo. Y entonces se queda blanco como el mármol. «Bienvenida a su casa, señorita… Perdone. Es que usted tiene los ojos de Ernesto Duarte».",
      "1000000": "La voz corre antes que tú: una mujer de rojo con un millón de dólares. En la entrada hay fotógrafos, dos gerentes peinados a toda prisa y un par de hombres de la Familia fingiendo leer el periódico. Rocco se abre paso entre todos, te coge la mano para besarla… y no la suelta. «Perdóneme, señorita. Medio Las Vegas va a querer conocerla. Pero usted tiene los ojos de Ernesto Duarte»."
    },
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
      "¿Qué crees que siente Rocco al ver la cara de Ernesto en otra persona: nostalgia, culpa o simple miedo?",
      "¿En qué te pareces a tu padre o a tu madre que te haya costado aceptar? ¿Lo llevas con orgullo o con resignación?",
      "Si hubieras sabido de niño lo que sabes hoy de tus padres, ¿los habrías querido de otra manera?",
      "¿Qué dice de una persona pasar treinta años en el mismo sitio: lealtad, miedo al cambio o pura comodidad?",
      "¿Has notado alguna vez que te trataban distinto por el dinero que aparentabas? ¿Cómo te sentiste?"
    ],
    words: ["dejar a deber", "a medio saludo", "primos hermanos", "palidecer"]
  },
  recepcion: {
    title: "La suite que nadie pidió",
    line: "Bajo una lámpara de cristal que podría pagar la hipoteca de un barrio entero, Marisol teclea con uñas de cirujana. «Señorita Duarte. Qué curioso. Tiene usted la suite Montalbán reservada desde hace un mes. Pagada. Con champán incluido. ¿Celebramos algo?»",
    money: {
      nada: "Llegas al mostrador con los tacones en la mano y la dignidad bastante entera para alguien sin un peso. Marisol te mira de arriba abajo, uñas de cirujana suspendidas en el aire, lista para indicarte el albergue más cercano. Teclea por compasión y se le descuelga la mandíbula. «Señorita Duarte… tiene usted la suite Montalbán reservada y pagada. Con champán. Y yo que pensaba que venía a pedir un vaso de agua. ¿Celebramos algo?»",
      "100": "«Las habitaciones económicas están en la torre vieja, junto a la máquina de hielo», recita Marisol al ver tus cien dólares y tu maleta de ruedas cojas. Luego teclea tu nombre y se le escapa un «anda». «Olvide la torre vieja. Tiene usted la suite Montalbán reservada desde hace un mes. Pagada. Con champán incluido. Alguien la quiere a usted mucho, o le debe mucho más. ¿Celebramos algo?»",
      "500": "Marisol te atiende con la amabilidad estándar que merecen quinientos dólares y ganas de pasarlo bien: tarifa de fin de semana, desayuno aparte, la contraseña de internet en un papelito. Pero al buscar tu reserva frunce el ceño. «Usted pidió una doble estándar, ¿verdad? Pues el sistema dice otra cosa. Suite Montalbán, pagada hace un mes por otra persona. Champán incluido. ¿Celebramos algo?»",
      "1000": "Con mil dólares en el bolso ya te ofrecen la tarjeta del club de jugadores antes que la llave: aquí primero te fichan y luego te alojan. Marisol te toma los datos con uñas de cirujana y se detiene en seco. «Señorita Duarte, la tarjeta no le hace ninguna falta. Tiene la suite Montalbán reservada y pagada desde hace un mes. Con champán. ¿Celebramos algo?»",
      "10000": "Marisol ya sabe quién eres antes de que abras la boca: el jefe de sala ha avisado de que sube una jugadora con diez mil dólares, y en Las Vegas eso vale una mejora de habitación gratis. «Pensaba ofrecerle una junior con vistas», dice, «pero alguien se me ha adelantado. Suite Montalbán. Pagada desde hace un mes. Champán incluido. ¿Celebramos algo?»",
      "100000": "Ni siquiera haces cola: un anfitrión con auricular te lleva a un mostrador privado donde Marisol te espera con una copa servida. Con cien mil dólares en juego, aquí todo es cortesía: la cena, el masaje, el chófer. «Lo curioso», susurra Marisol, «es que la suite no la paga la casa. Suite Montalbán, reservada hace un mes por otra persona. Champán incluido. ¿Celebramos algo?»",
      "1000000": "La recepción enmudece cuando entras: medio personal sabe ya lo del millón y la otra mitad lo intuye por el sudor del gerente. Marisol, con las uñas de cirujana temblándole un poco, devuelve con un gesto el ramo que te manda un casino rival. «Llegan tarde, señorita. Tiene usted la suite Montalbán reservada desde hace un mes. Pagada. Con champán. ¿Celebramos algo?»"
    },
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
      "¿Por qué crees que quien pagó la suite prefiere quedarse en la sombra?",
      "¿Te cuesta aceptar regalos caros? ¿Qué crees que esperan a cambio quienes los hacen?",
      "¿Alguna vez te has sentido en deuda con alguien por un favor que no habías pedido? ¿Cómo lo resolviste?",
      "¿Qué te inquieta más: que alguien sepa demasiado de ti o no saber nada de quien te observa?",
      "¿Te has permitido alguna vez un lujo muy por encima de tus posibilidades? ¿Mereció la pena o te dejó resaca moral?"
    ],
    words: ["a la altura de", "cargo interno", "a caballo regalado no se le mira el diente", "por un segundo"]
  },
  tragamonedas: {
    title: "La reina de las máquinas",
    line: "Entre luces que parpadean como pulsos enfermos, Doña Pilar fuma con la paciencia de una esfinge y un vaso de fichas en el regazo. «Tú eres la niña de Ernesto. Tu padre nunca perdía, criatura. Ni a las cartas ni en la vida. Bueno, en la vida perdió una vez, pero a lo grande».",
    money: {
      nada: "Te sientas en el taburete de al lado sin una ficha que echar, y un vigilante ya te mira como a quien solo viene por las bebidas gratis, que aquí se sirven únicamente si juegas. Doña Pilar lo espanta con un gesto, te pone tres fichas en la palma y entorna los ojos tras el humo. «Tú eres la niña de Ernesto. Tu padre tampoco tenía un peso cuando llegó, y nunca perdía. Bueno, en la vida perdió una vez. Pero a lo grande».",
      "100": "Te sientas ante una tragamonedas de un centavo con tus cien dólares, que aquí dan para una hora de lucecitas y una cerveza aguada. Doña Pilar, que fuma con paciencia de esfinge, te ve dudar sobre el botón. «Así no, criatura, que se te va el sueldo en suspiros. Tú eres la niña de Ernesto. Tu padre nunca perdía, ni a las cartas ni en la vida. Bueno, en la vida perdió una vez. Pero a lo grande».",
      "500": "Metes un billete de cien en la máquina y quedan cuatro más esperando turno en el bolso: una noche de diversión sensata, te has prometido. Doña Pilar se ríe con su tos de terciopelo. «Sensata, dice. De aquí no sale nadie sensato, mi amor. Siéntate. Tú eres la niña de Ernesto. Tu padre nunca perdía, ni a las cartas ni en la vida. Bueno, en la vida perdió una vez. Pero a lo grande».",
      "1000": "Te has sentado en las máquinas de cinco dólares por tirada, las que miran por encima del hombro a las de un centavo, y una camarera ya te trae la segunda copa gratis. Doña Pilar te observa como quien tasa una joya ajena. «Mil dólares aquí duran lo que un suspiro de novio. Tú eres la niña de Ernesto. Tu padre nunca perdía. Bueno, en la vida perdió una vez. Pero a lo grande».",
      "10000": "En la zona de alto límite, donde una tirada cuesta cien dólares y las máquinas brillan con discreción de joyería, un encargado te ha reservado taburete y cenicero. Doña Pilar, reina del pasillo, ni se inmuta. «Con diez mil, hija, aquí te tratan como a una marquesa hasta que se acaban. Tú eres la niña de Ernesto. Tu padre nunca perdía. Bueno, en la vida perdió una vez. Pero a lo grande».",
      "100000": "Te han abierto una sala privada de máquinas, con cortina de terciopelo y camarero propio: con cien mil dólares, el casino te pone hasta la máquina a la temperatura que pidas. Pero tú prefieres el pasillo de siempre, donde Doña Pilar te mira sin impresionarse lo más mínimo. «Las ballenas también se ahogan, criatura. Tú eres la niña de Ernesto. Tu padre nunca perdía. Bueno, en la vida perdió una vez. Pero a lo grande».",
      "1000000": "Ha corrido la voz del millón y medio pasillo te sigue: un predicador de la suerte, dos jubiladas que quieren que les toques la máquina, un tipo que jura conocerte del colegio. Doña Pilar los dispersa a golpe de bastón y te sienta a su lado. «¡Fuera, buitres! Tú eres la niña de Ernesto. Tu padre nunca perdía, ni con un millón en la mesa. Bueno, en la vida perdió una vez. Pero a lo grande»."
    },
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
      "¿Qué crees que quiere decir Pilar con que Ernesto «perdió una vez, pero a lo grande»?",
      "¿Qué hábito repites desde hace años sabiendo que no te conviene? ¿Por qué cuesta tanto soltarlo?",
      "¿Dónde está, para ti, la frontera entre una costumbre inofensiva y una adicción?",
      "¿Crees más en la suerte o en el esfuerzo? ¿Hubo algún momento de tu vida que te hiciera cambiar de opinión?",
      "¿Qué dice de una persona preferir perder con estilo a ganar sin gracia?"
    ],
    words: ["de perdidos, al río", "a lo grande", "sacar conclusiones", "con el corazón en la mesa"]
  },
  ruleta: {
    title: "Diecisiete, negro, impar",
    line: "Nico, el crupier, tiene manos de pianista y mirada de notario. A su lado, un hombre de lino blanco te observa a través del humo de su puro como quien tasa una joya. «Hagan juego, señores», canta Nico. «Y señoras que parecen saber lo que hacen».",
    money: {
      nada: "No tienes ni una ficha, pero te acercas a la ruleta como quien vuelve a un viejo amor. Nico, manos de pianista, ya iba a pedirte que dejaras sitio a los que juegan cuando el hombre de lino blanco, puro en mano, te lanza una ficha sobre el tapete. «Para la señorita, que tiene cara de no tener ni para el taxi». Nico sonríe apenas. «Hagan juego, señores. Y señoras que parecen saber lo que hacen».",
      "100": "La mesa de mínimo bajo está a reventar de turistas con camisetas de recuerdo; tus cien dólares se convierten en diez fichas que caben en un puño. El hombre de lino blanco, tan fuera de lugar entre tanta camiseta como un violín en una verbena, te observa a través del humo de su puro. Nico canta: «Hagan juego, señores. Y señoras que parecen saber lo que hacen».",
      "500": "Cambias quinientos dólares por una torre de fichas rojas, lo justo para sentirte jugadora sin jugarte el alquiler. Nico, el crupier, mirada de notario, te hace sitio entre una pareja de recién casados y el hombre de lino blanco, que fuma un puro y te tasa como a una joya. «Hagan juego, señores», canta Nico. «Y señoras que parecen saber lo que hacen».",
      "1000": "Mil dólares sobre el tapete y de repente el jefe de mesa aparece a tu espalda con cara de amigo de toda la vida, ofreciéndote una cuenta de jugadora. El hombre de lino blanco suelta el humo del puro con desdén: «Mil. Qué tierno». Nico, impasible, desliza tus fichas hacia el centro. «Hagan juego, señores. Y señoras que parecen saber lo que hacen».",
      "10000": "Diez mil dólares en placas de colores y la mesa se transforma: suben el mínimo, retiran a los mirones, aparece una camarera con champán que nadie ha pedido. El hombre de lino blanco deja el puro en el cenicero, por fin interesado. «Esto ya es otra conversación», murmura. Nico abre sus manos de pianista. «Hagan juego, señores. Y señoras que parecen saber lo que hacen».",
      "100000": "Te han cerrado la mesa con un cordón de terciopelo: cien mil dólares no juegan con turistas. El jefe de sala en persona te sostiene la copa, un fotógrafo de la casa espera permiso y el hombre de lino blanco, el único al que no han echado, te ofrece fuego para un cigarrillo que no fumas. Nico sonríe apenas. «Hagan juego, señores. Y señoras que parecen saber lo que hacen».",
      "1000000": "Un millón en placas doradas sobre el tapete y el casino entero contiene la respiración: hay gente subida a las sillas, un gerente rezando en voz baja y dos hombres de la Familia que no te quitan ojo. El hombre de lino blanco se ríe con dientes de marfil: «Hace veinticinco años que no veía algo así». Nico traga saliva. «Hagan juego, señores. Y señoras que parecen saber lo que hacen»."
    },
    options: [
      { say: "Todo al 17, a lo loco. Las medias tintas, para los cobardes.", reply: "El hombre del puro deja escapar un silbido. «Diecisiete», repite Nico, y por primera vez la mano de pianista tiembla un poco." },
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
      "¿Por qué crees que el hombre del puro observa a Valentina con tanto interés?",
      "¿Cuál es el mayor riesgo que has asumido en tu vida? Si hubieras sabido cómo iba a salir, ¿te habrías lanzado igual?",
      "¿Eres de ir a por todas o de guardarte siempre algo por si acaso? ¿De dónde crees que te viene?",
      "¿Qué cambia en una persona que de repente gana mucho dinero: se revela o se transforma?",
      "¿Has sentido alguna vez la euforia peligrosa de estar en racha? ¿Cómo terminó?"
    ],
    words: ["medias tintas", "pleno", "esfumarse", "hacer los deberes"]
  },
  blackjack: {
    title: "El hombre que cuenta",
    line: "Sam Ortega juega con la cara aburrida de un contable y la memoria de un elefante rencoroso. Sin mirarte, susurra entre dos cartas: «No te gires. Hay un tipo de traje gris que te sigue desde la ruleta. Y a mí me sigue media seguridad del casino. Hoy estamos los dos de moda».",
    money: {
      nada: "Te quedas de pie detrás de la mesa, mirando sin jugar, porque el mínimo es de veinticinco y tú no tienes ni para el agua. Sam Ortega, cara de contable aburrido, te habla sin girarse mientras pide carta. «Los mirones sin fichas duran poco aquí, guapa: el de seguridad ya te ha echado el ojo. Pero lo grave es otra cosa. No te gires: un tipo de traje gris te sigue desde la ruleta. Y a mí me sigue media seguridad. Hoy estamos los dos de moda».",
      "100": "Te sientas en el blackjack de mínimo bajo, donde se paga seis a cinco y los turistas ni se enteran del atraco. Sam Ortega, que juega allí por discreción, te habla entre dos cartas. «Con cien dólares en esta mesa te van a desplumar con mucha educación. Pero no te gires: hay un tipo de traje gris que te sigue desde la ruleta. Y a mí me sigue media seguridad del casino. Hoy estamos los dos de moda».",
      "500": "Quinientos dólares en fichas verdes y una regla de oro: plantarse en diecisiete. Sam Ortega, memoria de elefante rencoroso, cuenta en silencio a tu lado y te corrige sin mirarte. «Con un dieciséis contra un diez se pide carta, no se reza. Y no te gires: hay un tipo de traje gris que te sigue desde la ruleta. A mí me sigue media seguridad del casino. Hoy estamos los dos de moda».",
      "1000": "Con mil dólares sobre la mesa, el crupier te sonríe más y el jefe de mesa apunta tu apuesta media en su libreta: aquí todo se mide para regalarte luego una cena de cortesía. Sam Ortega se ríe por la nariz. «Ya te tienen fichada, preciosa. Pero eso es lo de menos. No te gires: un tipo de traje gris te sigue desde la ruleta. Y a mí me sigue media seguridad. Hoy estamos los dos de moda».",
      "10000": "Diez mil dólares y te sientas en la mesa de alto límite, donde se paga tres a dos como Dios manda y el jefe de sala te ofrece un whisky llamándote por tu nombre. Sam Ortega apuesta poco y cuenta mucho. «Qué ironía: a ti te vigilan para mimarte y a mí para echarme. Y no te gires: un tipo de traje gris te sigue desde la ruleta. Hoy estamos los dos de moda».",
      "100000": "Te han preparado una mesa privada con tu nombre en una tarjeta y una crupier que te llama «señora Duarte» con voz de azafata. Sam Ortega se ha colado como único acompañante, apostando el mínimo y contando el mazo como un relojero. «Las ballenas atraen tiburones, querida. No te gires: hay un tipo de traje gris que te sigue desde la ruleta. Y a mí me sigue media seguridad. Hoy estamos los dos de moda».",
      "1000000": "Con un millón, el blackjack se convierte en circo: cámaras extra apuntando a tu mesa, un gerente sudando la gota gorda, dos tipos de la Familia apostando a tu lado solo para olerte. Sam Ortega, más aburrido que nunca para pasar desapercibido, susurra entre dos cartas. «Esto ya no es un casino, es un safari, y tú eres la leona. No te gires: un tipo de traje gris te sigue desde la ruleta. Hoy estamos los dos de moda»."
    },
    options: [
      { say: "Qué pena. Pensé que era mi vestido el que llamaba la atención.", reply: "Sam pide carta con un golpe de nudillos. «El vestido llama la atención. El apellido Duarte llama a seguridad»." },
      { say: "¿Para quién trabaja el del traje gris? Necesito saberlo.", reply: "«Para alguien que no baja nunca a la planta», dice Sam. «Los que no bajan son los que mandan»." },
      { say: "¿Y cómo sabe usted quién soy? ¿También me ha contado a mí?", reply: "Sam sonríe sin despegar los ojos del mazo. «Cuento todo, preciosa. Las cartas, las cámaras y las mujeres que entran preguntando por muertos»." }
    ],
    line2: "«Te propongo un trato», murmura Sam. «Tú distraes al de seguridad dos minutos y yo te cuento lo que vi en este casino hace veinticinco años. Si no me hubieran echado aquella noche, lo habría visto todo».",
    options2: [
      { say: "Hecho. Entretener a un hombre aburrido está chupado; lo difícil es aguantarlo.", reply: "Sam asiente, satisfecho. «Eso es lo que me temía y lo que esperaba. Ve. El calvo de la corbata azul»." },
      { say: "Primero cuéntame algo. No compro gato por liebre.", reply: "«Tu padre perdió una mano a propósito antes de la gran partida», susurra Sam. «Para que el viejo se confiara. ¿Te vale como adelanto?»" },
      { say: "Si me pillan, diré que fue idea tuya. Lo sabes, ¿no?", reply: "«Lo contrario me habría decepcionado», ríe Sam. «En esta mesa nadie es inocente, solo están peor o mejor informados»." }
    ],
    end: "Te alejas de la mesa con el pulso de quien acaba de firmar un contrato sin leerlo. De la mesa de dados llega un griterío de despedida de soltero.",
    talk: [
      "¿Por qué crees que Sam ayuda a Valentina: generosidad, interés o pura venganza?",
      "¿Es trampa ser más listo que el sistema, o el sistema se lo tiene merecido? ¿Dónde pones tú el límite?",
      "¿Has cerrado alguna vez un trato del que te arrepentiste en cuanto diste la mano? ¿Qué te llevó a aceptarlo?",
      "¿Qué sientes cuando te vigilan: miedo, rabia o cierta vanidad? ¿Te ha pasado en el trabajo o en una relación?",
      "¿De quién te fías más: de alguien que reconoce sus trampas o de alguien que parece no tener ninguna?"
    ],
    words: ["dar gato por liebre", "estar de moda", "a propósito", "confiarse"]
  },
  dados: {
    title: "Despedida con suerte ajena",
    line: "La mesa de dados ruge como un estadio. Kike, el novio, lleva una corona de plástico, la camisa abierta y la dignidad en paradero desconocido. «¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
    money: {
      nada: "Te acercas a la mesa de dados atraída por los gritos, sin un peso, solo para mirar. Kike, el novio, corona de plástico y camisa abierta, te ve cara de no tener ni para un refresco y le da un ataque de generosidad etílica. «¡Invita el novio! ¡En mi última noche de libertad aquí no se queda nadie sin jugar! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
      "100": "Mesa de dados de mínimo de cinco dólares, de esas donde se juntan las despedidas, los jubilados y los que se juegan el dinero del autobús. Kike, el novio, con corona de plástico y la dignidad en paradero desconocido, ve tus cuatro fichas y se escandaliza. «¡Cuatro fichitas! ¡Qué rata! ¡Con eso no se celebra ni un bautizo! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
      "500": "La mesa de dados ruge como un estadio y tú llegas con quinientos dólares y ganas de gritar con desconocidos. Kike, el novio, lleva una corona de plástico, una botella en cada mano y once amigos borrachos como una cuba. Te ve llegar y se sube a la silla. «¡Silencio, que llega la suerte! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
      "1000": "Pones mil dólares en la línea de pase y la despedida entera enmudece: ninguno ha apostado más de veinte en toda la noche. Kike, el novio, te mira como a una aparición, con la corona torcida y la camisa abierta. «¡Muchachos, esta mujer va en serio! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
      "10000": "Diez mil dólares en fichas y el jefe de mesa sube el mínimo para quitarse de encima a la despedida de soltero. Kike, el novio, se niega en redondo: se agarra al borde de la mesa como un náufrago con corona de plástico. «¡De aquí no me mueve nadie, que mañana me casan! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
      "100000": "Con cien mil dólares en juego, el casino quería cerrarte la mesa, pero tú has pedido que se quede la despedida de soltero, por el ambiente. Kike, el novio, te besa la mano como si fueras la Virgen de Las Vegas, y sus amigos ya te llaman «la madrina». «¡Esta mujer es una diosa! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»",
      "1000000": "Un millón sobre el tapete verde y la mesa de dados parece la final de un mundial: gente subida a las máquinas, móviles grabando, un guardia apartando curiosos a empujones. Kike, el novio, que ha perdido la corona y casi los pantalones, se arrodilla ante ti. «¡Si ganas, te invito a la boda! ¡Tú, la del rojo! ¡Tira tú los dados, que tienes cara de suerte y yo de casarme mañana!»"
    },
    options: [
      { say: "Si tiro yo, la mitad de lo que ganes es mío, con o sin boda. Que de tonta no tengo un pelo.", reply: "Kike se lleva la mano al corazón. «¡Cásate conmigo en vez de con Vanesa!», grita, y sus amigos aúllan como lobos con descuento." },
      { say: "Venga, pero si salen siete, me debes una copa y una explicación.", reply: "«¡Una explicación de qué!», se ríe Kike. «¡Si yo no tengo ni idea de por qué me caso! ¡Me da igual, tira!»" },
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
      "¿Qué crees que quería de verdad el invitado misterioso que le dio las cerillas a Valentina?",
      "¿Las despedidas de soltero sirven para despedirse de algo o para demostrar que no se ha perdido nada?",
      "¿Cuál ha sido la noche en que más la liaste? ¿Qué parte contarías en una cena familiar y qué parte te llevarías a la tumba?",
      "¿Dejarías que otra persona tomara por ti una decisión importante, aunque solo fuera tirar unos dados? ¿Por qué?",
      "¿Qué dice de alguien casarse sin estar seguro: valentía, cobardía o simple inercia?"
    ],
    words: ["en paradero desconocido", "dejar con la intriga", "a mares", "encogerse de hombros"]
  },
  caja: {
    title: "Detrás de los barrotes",
    line: "Detrás del cristal blindado, Dolores cuenta billetes con la expresión de quien ha visto demasiadas lágrimas convertidas en efectivo. Pones la ficha dorada en la bandeja. Ella no la toca. «Esta ficha no se cambia aquí. Solo arriba».",
    money: {
      nada: "Vas a la caja sin un dólar, como quien va a empeñar el último anillo. Dolores, detrás del cristal blindado, ha visto a gente intentar cambiar botones, fichas de otros casinos y hasta dientes de oro. Pones la ficha dorada en la bandeja con la esperanza de una cena caliente. Ella no la toca. «Lo siento, guapa. Esta ficha no se cambia aquí. Solo arriba».",
      "100": "Haces cola detrás de un hombre que cambia fichas de un dólar con cara de haber perdido el alquiler. Llegas con tus últimos cien y, por si suena la flauta, con la ficha dorada. Dolores, que cuenta billetes con expresión de funeral, la mira y no la toca. «Los cien se los cambio. Eso, no. Esta ficha no se cambia aquí. Solo arriba».",
      "500": "Quieres cobrar unas fichas ganadas de rebote y, ya puestos, preguntar por la ficha dorada. Dolores cuenta tus billetes dos veces, por costumbre y por desconfianza, y te los desliza bajo el cristal. Luego mira la ficha en la bandeja como quien mira una serpiente dormida. «Lo suyo, aquí lo tiene. Pero esta ficha no se cambia aquí. Solo arriba».",
      "1000": "Para cobrar más de mil, aquí te piden identificación y te toman los datos: la casa quiere saber quién gana para invitarlo a volver… y a perder. Dolores rellena el formulario con letra de notaria y entonces ve la ficha dorada junto a tu pasaporte. Aparta el bolígrafo como si quemara. «Su dinero, sí. Pero esta ficha no se cambia aquí. Solo arriba».",
      "10000": "Te han hecho pasar a la ventanilla de los jugadores importantes, la que tiene sillón y no cola. Diez mil dólares en efectivo son también diez mil razones para rellenar papeles de Hacienda. Dolores los cuenta sin pestañear… hasta que pones la ficha dorada en la bandeja. No la toca. «Lo demás se lo arreglo yo. Esta ficha no se cambia aquí. Solo arriba».",
      "100000": "Con cien mil dólares, una no va a la caja: la caja viene a ella, con guardia armado y línea de crédito en papel de lujo. Aun así, bajas a ver a Dolores en persona. Ella te mira por encima de las gafas, como si las ballenas también fueran sospechosas, y no toca la ficha que dejas en la bandeja. «Ni con cien mil, señorita. Esta ficha no se cambia aquí. Solo arriba».",
      "1000000": "Cuando una mujer quiere cobrar un millón, hasta el director financiero baja a la caja con la corbata torcida. Hay dos guardias, un abogado y un señor de la Familia que dice estar «de paso». Dolores los ignora a todos y mira solo la ficha dorada que has dejado sobre los fajos. No la toca. «El millón se lo cuento yo. Pero esta ficha no se cambia aquí. Solo arriba»."
    },
    options: [
      { say: "Vaya faena. Con lo bien que me habría venido para pagar mis vicios.", reply: "Dolores no sonríe, pero algo se le afloja en la comisura. «Sus vicios, señorita, le van a costar bastante más que una ficha»." },
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
      "¿Qué secretos crees que guarda Dolores después de veinticinco años detrás de ese cristal?",
      "¿Has visto a alguien perder algo que no podía permitirse perder? ¿Qué sentiste: compasión, rabia o miedo?",
      "¿Por qué crees que nos cuesta tanto hablar de dinero con la familia o con la pareja?",
      "¿Qué dice de una persona que nunca sonríe en el trabajo? ¿Es profesionalidad o una coraza?",
      "Si hubieras tenido que empeñar algo muy valioso para salir de un apuro, ¿qué habrías sacrificado primero y qué nunca?"
    ],
    words: ["hablar en clave", "venir bien", "como su nombre indica", "caer bien"]
  },
  bar: {
    title: "La última mano",
    line: "En la barra central, Leo agita una coctelera como si estuviera rompiendo un corazón. Al piano, Chet acaricia las teclas con un cigarrillo apagado entre los labios. «¿Qué le sirvo a la dama?», pregunta Leo. «Tengo un cóctel para cada pecado».",
    money: {
      nada: "Te sientas en la barra sin un dólar, fiándote de la vieja leyenda de que en Las Vegas las copas son gratis. Leo, el camarero, te desmiente con una sonrisa: «Gratis solo si juegas, cariño, y tú no tienes ni para la propina». Chet, al piano, se ríe por lo bajo. Pero Leo ya está sacando la coctelera. «Invita la casa. O invito yo, que es peor. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado».",
      "100": "Pides la carta y casi te atragantas: un cóctel cuesta lo mismo que media hora en la ruleta de mínimo bajo. Leo, que agita la coctelera como si rompiera un corazón, ve tu cara de cálculo mental. Chet, al piano, toca algo triste a propósito. «Tranquila, que aquí nadie paga por sufrir. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado, y alguno hasta barato».",
      "500": "Te acomodas en la barra central con quinientos dólares, lo justo para una noche de copas y ruleta sin hacer tonterías. Leo agita la coctelera como si estuviera rompiendo un corazón; al piano, Chet acaricia las teclas con un cigarrillo apagado entre los labios. «Una noche normal, ¿eh? Esas son las que peor acaban. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado».",
      "1000": "Llegas a la barra con mil dólares jugados y un vale de cortesía para la primera ronda, porque aquí nada es gratis pero todo lo parece. Leo mira el vale, lo rompe y lo tira por encima del hombro. «Eso es para el cóctel de la casa, que sabe a jarabe. Usted merece algo con nombre propio. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado».",
      "10000": "Diez mil dólares en el bolso y el casino ya te ha mandado un anfitrión para preguntarte qué bebes. Lo despachas con una sonrisa y te sientas en la barra, donde Leo agita la coctelera con un desprecio olímpico por los anfitriones. Chet, al piano, cambia de tono al verte. «Las jugadoras de verdad beben en la barra, no en los reservados. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado».",
      "100000": "Con cien mil dólares en juego, la casa te ha abierto una botella de coñac de las que no se venden y te ha asignado tres camareros. Los dejas plantados y te sientas en la barra de siempre. Leo sonríe, cómplice, y aparta el coñac de lujo como si fuera agua de florero. «Usted sabe dónde se bebe bien. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado».",
      "1000000": "El millón ha corrido de boca en boca más rápido que el whisky, y la barra se llena de pretendientes, vendedores de humo y un cura de dudosa ordenación que quiere bendecir tus fichas. Leo los ahuyenta con la coctelera como quien espanta moscas. Chet toca más fuerte para tapar el murmullo. «Fuera, que la señora tiene sed. ¿Qué le sirvo a la dama? Tengo un cóctel para cada pecado»."
    },
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
      "¿Por qué crees que Ernesto le pidió a Chet que tocara esa canción para quien viniera a buscarlo?",
      "¿Hay alguna canción que no puedas escuchar sin que te duela algo? ¿Qué historia guarda?",
      "¿Por qué crees que la gente le cuenta a un camarero lo que no le cuenta a su familia?",
      "¿Qué te hace el alcohol en las noches importantes: te suelta, te protege o te traiciona?",
      "Si hubieras sabido que una conversación iba a ser la última con alguien, ¿qué le habrías dicho?"
    ],
    words: ["pedir bis", "banda sonora", "y aun así", "saber a"]
  },
  apuestas: {
    title: "Todos apuestan algo",
    line: "Bajo un muro de pantallas gigantes donde corren caballos y ruedan balones, Ramiro se muerde las uñas con método. «Lo he puesto todo al Tijuana, señorita. Todo. El coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
    money: {
      nada: "Te sientas bajo el muro de pantallas, sin un peso, solo porque los sillones son gratis y el aire acondicionado también. Ramiro, a tu lado, se muerde las uñas con método y te ofrece palomitas por solidaridad. «Usted tampoco tiene un centavo, ¿verdad? Se nota. Yo no lo tendré dentro de diez minutos. Lo he puesto todo al Tijuana: el coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
      "100": "Apuestas veinte dólares a un caballo con nombre de telenovela y te sientas bajo las pantallas a esperar. Ramiro, a tu lado, mira tu boleto con ternura de veterano. «Veinte dólares… qué bonito. Así empecé yo. Ahora mire: lo he puesto todo al Tijuana. El coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
      "500": "Has puesto cien dólares a un partido por pura diversión y otros cien al empate por si acaso, como manda la prudencia del aficionado. Ramiro, con las uñas destrozadas, se ríe de tu estrategia. «Usted apuesta como mi suegra. Yo no. Lo he puesto todo al Tijuana: el coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
      "1000": "Una apuesta de mil dólares al partido estrella y un empleado ya te ofrece abrir cuenta en la aplicación del casino, con bono de bienvenida y letra pequeña. Ramiro, que lleva tres bonos de esos en el cuerpo, te mira con lástima. «No firme nada, que así empecé yo. Ahora lo he puesto todo al Tijuana: el coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
      "10000": "Apuestas diez mil al Tijuana y el encargado de la sala te ofrece un palco privado con pantalla propia y cerveza helada. Ramiro, que va con el mismo equipo, te mira como a una hermana de sangre. «¡Usted también! ¡Lo sabía! Pero yo voy más lejos: lo he puesto todo al Tijuana. El coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
      "100000": "Cien mil dólares a un solo partido y el casino reacciona como ante un huracán: llaman al jefe de riesgos, retocan las cuotas, te ofrecen cenar con un exfutbolista. Ramiro, a tu lado, ni se entera. «Usted tiene dinero; yo no. Por eso lo mío tiene más mérito: lo he puesto todo al Tijuana. El coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina».",
      "1000000": "Un millón a un partido del Tijuana y la sala se vuelve loca: que si el resultado está amañado, que si eres de la mafia, que si hasta el portero lo sabe. Dos tipos de la Familia te vigilan desde la barra. Ramiro, pálido, te agarra del brazo. «Si usted pierde, me hunde a mí también. Lo he puesto todo al Tijuana: el coche, el sueldo, el reloj de mi abuelo. Si pierdo, me quedo en la calle; si gano, también, pero en limusina»."
    },
    options: [
      { say: "Me encanta un hombre que no conoce la palabra prudencia.", reply: "Ramiro se sonroja hasta las orejas. «La conozco, señorita. Es que no nos llevamos bien desde el colegio»." },
      { say: "¿Todo? Ramiro, se ha pasado usted de la raya: eso no es apostar, es suicidarse con estilo.", reply: "«Con estilo, por lo menos», contesta, y se ríe con una risa que suena a sirena de ambulancia." },
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
      "¿Qué te sugiere que incluso el dueño se jugara una vez el casino entero?",
      "¿Conoces a alguien que se haya enganchado al juego, al trabajo o a una persona? ¿Cuándo te diste cuenta de que ya no era una afición?",
      "¿Qué has apostado tú en la vida que no fuera dinero: una relación, una mudanza, tu orgullo?",
      "¿Por qué crees que algunas personas solo se sienten vivas cuando están a punto de perderlo todo?",
      "¿Qué es más difícil: decirle a un amigo que tiene un problema o aceptar que el problema lo tienes tú?"
    ],
    words: ["quedarse en la calle", "llevarse bien", "dar en el clavo", "tener agallas"]
  },
  poker: {
    title: "Escalera real",
    line: "El Salón Esmeralda huele a fieltro, a colonia vieja y a derrotas educadas. El Holandés, con gafas oscuras aunque sea de noche y bajo techo, baraja sin mirar. «Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
    money: {
      nada: "Te cuelas en el Salón Esmeralda sin pagar la inscripción del torneo, que cuesta más de lo que tienes en el mundo. Un empleado ya viene a echarte cuando El Holandés, gafas oscuras bajo techo, levanta un dedo y el empleado se esfuma. «La entrada de esta mesa no se paga con dinero. Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
      "100": "Con tus cien dólares no llegas ni a la inscripción del torneo pequeño, así que miras desde el cordón como quien mira un escaparate de joyas. El Holandés, que baraja sin mirar, te hace un gesto para que pases. «El dinero, aquí, es lo de menos. Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
      "500": "Pagas quinientos dólares por el torneo de la noche y te sientan en la mesa siete, entre un dentista de Arizona y un estudiante con gorra. Pero un empleado te recoloca, sin explicaciones, en la mesa del fondo. Allí, El Holandés, con sus gafas oscuras, baraja sin mirar. «Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
      "1000": "Mil dólares en la mesa sin límite, la de los profesionales que te huelen el miedo antes de la primera mano. Los demás se miran al verte llegar: carne fresca. El Holandés los hace callar con un golpe de nudillos en el fieltro. «Ella no es carne fresca, caballeros. Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
      "10000": "Diez mil dólares te abren la partida privada del Salón Esmeralda, donde el humo es más denso y las sonrisas más finas. Un camarero te aparta la silla antes de que la pidas. El Holandés, gafas oscuras, baraja sin mirar y aparta sus fichas para hacerte sitio. «Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
      "100000": "La casa te ha montado una partida de apuestas altas con tres jugadores famosos y una línea de crédito sin preguntas; ellos ya se frotan las manos pensando en tus cien mil. Pero El Holandés, en la cabecera, los despide uno a uno con un gesto, como quien vacía una sala para hablar a solas. «Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde».",
      "1000000": "El rumor de tu millón ha llegado al Salón Esmeralda y los profesionales afilan los cuchillos: alguien ha llamado a un campeón del mundo, otro reza, un tercero intenta venderte un sistema infalible. El Holandés golpea la mesa con el bastón y la sala entera enmudece. «Fuera todos. Esta mano es nuestra. Siéntese, señorita Duarte. La estaba esperando desde hace veinticinco años. Llega usted un poco tarde»."
    },
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
      "¿Por qué crees que el Holandés guardó silencio durante veinticinco años?",
      "¿Se te da bien mentir con la cara? ¿En qué situaciones de la vida real te ha tocado farolear?",
      "¿Qué secreto has guardado durante años por miedo a las consecuencias? Si hubieras hablado antes, ¿qué habría cambiado?",
      "¿Qué prefieres: buenas cartas y nervios flojos, o malas cartas y sangre fría? ¿Qué te tocó a ti en la vida?",
      "¿Crees que quien gana demasiado despierta más envidia que admiración? ¿Por qué?"
    ],
    words: ["merecer la pena", "boca abajo", "farolear", "escalera real"]
  },
  bufe: {
    title: "Mariscos y chismes",
    line: "Torres de langostas, una fuente de chocolate que parece un volcán con modales y, en medio, Tere, la chef, con el cuchillo en una mano y la lengua más afilada que el cuchillo. «Mi niña, tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón».",
    money: {
      nada: "Te cuelas en el bufé detrás de una excursión de jubilados, sin pagar, y te sirves un plato tan modesto que da pena. Tere, la chef, cuchillo en mano y lengua más afilada que el cuchillo, te pilla al vuelo. Pero en vez de echarte, te llena el plato de langostinos. «Aquí sin pagar solo comen los gatos y las chicas con cara de problema. Tú vienes a preguntar, mi niña, se te nota. Aquí nadie viene por el salmón».",
      "100": "Has pagado el bufé de veinticinco dólares, que en Las Vegas es lo más parecido a una inversión segura: comes hasta reventar y no pierdes nada. Tere, la chef, te ve calcular cuántas gambas caben en un bolso. «Eso es, mi niña, aprovecha, que la ruleta no da de cenar. Pero tú no vienes por la comida. Tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón».",
      "500": "Torres de langostas, una fuente de chocolate que parece un volcán con modales y tú, con quinientos dólares en el bolso y hambre de noche larga. Tere, la chef, con el cuchillo en una mano y un chisme en la punta de la lengua, se acerca a tu mesa sin que la llames. «Mi niña, tú no tienes cara de hambre. Tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón».",
      "1000": "Te han regalado el bufé por haber jugado mil dólares en la ruleta: la casa invita a cenar para que vuelvas a la mesa con la barriga llena y la cartera vacía. Tere lo sabe y lo dice en voz alta. «Te dan langosta para que pierdas con alegría, cariño. Pero tú no vienes a eso. Tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón».",
      "10000": "El anfitrión te ha reservado mesa en la zona privada del bufé, con camarero y un caviar que no sale en la carta. Tere, la chef, se planta delante con el delantal manchado de chocolate. «Las de diez mil cenan arriba, en el restaurante con estrellas. Si bajas aquí, es por algo. Tú vienes a preguntar, mi niña, se te nota. Aquí nadie viene por el salmón».",
      "100000": "Con cien mil dólares en juego, la casa ha cerrado el bufé media hora solo para ti: cocineros en fila, champán y un violinista que no sabe adónde mirar. Tere se ríe de tanto teatro y te mete en la boca una fresa bañada en chocolate. «Los ricos siempre tienen hambre de lo mismo, mi niña: de información. Tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón».",
      "1000000": "Ha corrido la voz del millón y en el bufé te miran más que a la fuente de chocolate: un camarero tropieza, una señora te pide una foto, dos tipos de la Familia se sirven gambas sin quitarte ojo. Tere los espanta con el cucharón. «¡A comer a otra parte, buitres! Mi niña, con un millón tú no vienes a cenar. Tú vienes a preguntar, se te nota. Aquí nadie viene por el salmón»."
    },
    options: [
      { say: "Vengo por el chocolate, Tere. Lo demás son excusas.", reply: "Tere suelta una carcajada. «¡Esa es mi chica! Toma, moja una fresa. Y luego me preguntas lo que de verdad quieres»." },
      { say: "Me han dicho que usted se entera de todo antes que el dueño.", reply: "«Antes que el dueño, antes que el cura y antes que la policía», dice Tere, orgullosa. «La cocina es el confesionario de este casino, y yo, la que reparte las penitencias»." },
      { say: "¿Qué se cuece en esta casa, Tere? Y no hablo de mariscos.", reply: "Tere baja la voz y el cuchillo a la vez. «Se cuece algo gordo, mi amor. Una herencia, un testamento y un hijo con muy mal genio»." }
    ],
    line2: "«Don Aurelio está viejo y enfermo», cuchichea. «Dice que quiere arreglar cuentas antes de irse al otro barrio. Y su hijo, Marco, está que trina. Dicen que cuando lo oyó rompió una botella de coñac de las de diez mil dólares».",
    options2: [
      { say: "Arreglar cuentas con quién, Tere. Usted lo sabe.", reply: "Tere te mira de arriba abajo. «Con alguien que lleva tu apellido, cariño. Y no lo digo yo, lo dice el pastel que me encargaron con tu nombre»." },
      { say: "Pobre coñac. Siempre pagan el pato los inocentes.", reply: "Tere se ríe tanto que tiene que apoyarse en la langosta. «Ay, me encantas. Pero ojo: Marco tampoco es inocente, aunque tenga cara de anuncio»." },
      { say: "Si yo hubiera nacido hija de un hombre así, también estaría que trino.", reply: "«Ahí está el detalle», dice Tere, señalándote con el cucharón. «Que a lo mejor la heredera no es la que todo el mundo cree»." }
    ],
    end: "Tere te despide con un beso de harina en la mejilla. Desde el teatro llega una ovación y un olor a pólvora de mentira.",
    talk: [
      "¿Qué parte de los chismes de Tere te parece verdad y qué parte puro adorno?",
      "¿Por qué disfrutamos tanto con los chismes, aunque digamos que los odiamos?",
      "¿Alguna vez un rumor sobre ti te hizo daño? ¿Cómo reaccionaste y cómo reaccionarías hoy?",
      "¿Qué cuentas pendientes te gustaría arreglar antes de que sea tarde? ¿Qué te frena?",
      "¿Por qué crees que las herencias rompen tantas familias? ¿Es el dinero o lo que el dinero simboliza?"
    ],
    words: ["qué se cuece", "irse al otro barrio", "estar que trina", "arreglar cuentas"]
  },
  teatro: {
    title: "El truco de Faustino",
    line: "En el camerino, entre plumas y espejos rodeados de bombillas, El Gran Faustino se quita la capa con la gravedad de un obispo. Estrella, la bailarina, se ajusta una media sin ninguna gravedad. «¡Una espectadora entre bastidores!», declama Faustino. «Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
    money: {
      nada: "Te cuelas en el camerino por la puerta de servicio, porque una entrada para el show cuesta más que todo lo que tienes. Estrella, la bailarina, te ve y, en lugar de llamar a seguridad, te tira una boa de plumas. El Gran Faustino se quita la capa con gravedad de obispo. «¡Una polizona entre bastidores! Me encanta. Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
      "100": "Has gastado tus cien dólares en una entrada de última fila, con columna delante incluida, y al acabar el show te equivocas de puerta —o no— y apareces en el camerino. Faustino se quita la capa con gravedad de obispo. «¡La señora de la última fila! La vi aplaudir más que nadie. Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
      "500": "Has visto el show desde una buena butaca y has aplaudido como quien se toma la noche en serio. Ahora, gracias a un acomodador sobornado con veinte dólares, estás en el camerino, entre plumas y espejos rodeados de bombillas. Faustino se quita la capa, encantado con la visita. «¡Una espectadora entre bastidores! Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
      "1000": "Mil dólares te han conseguido mesa en primera fila, una botella de cava y un pase para conocer al mago, cortesía del anfitrión. Estrella, la bailarina, se ajusta una media sin ninguna gravedad mientras Faustino te dedica una reverencia exagerada. «¡Una espectadora de primera fila entre bastidores! Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
      "10000": "Con diez mil dólares jugados, el casino te ha regalado el palco y una visita privada al camerino, como se hace con los clientes a los que hay que mimar. Faustino, que suele odiar las visitas, se pone sus mejores anillos al saber cuánto has jugado. «¡Una mecenas entre bastidores! Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
      "100000": "Para una ballena de cien mil, Faustino monta una función privada en su camerino: palomas, champán y Estrella bailando solo para ti. Sabe perfectamente que, si sales contenta, la casa le sube el sueldo. Se quita la capa con gravedad de obispo y mirada de vendedor. «¡Mi público más valioso entre bastidores! Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos».",
      "1000000": "El rumor del millón ha llegado al camerino antes que tú: Faustino ha preparado una paloma con tu nombre, Estrella se ha cambiado tres veces de plumas y un productor de cine espera en el pasillo para venderte un espectáculo. Faustino lo hace desaparecer tras una nube de humo. «¡La reina de Las Vegas entre bastidores! Muéstreme lo que esconde, señorita. Lo adivino todo, salvo los impuestos»."
    },
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
      "¿Por qué crees que Ernesto escondió una contraseña dentro de una ficha en lugar de confiársela a alguien?",
      "¿Qué parte de tu personalidad es un número de escena para los demás? ¿Quién conoce a la persona que hay detrás del telón?",
      "¿Te gusta que te engañen bien, como en un buen truco, o prefieres la verdad aunque sea sosa? ¿Y en el amor?",
      "¿Qué dice de una persona necesitar aplausos constantemente? ¿Conoces a alguien así o te reconoces un poco?",
      "¿Alguna vez descubriste el truco de alguien a quien admirabas? ¿Te decepcionó o te gustó todavía más?"
    ],
    words: ["entre bastidores", "he aquí", "cómplice", "ponerse serio"]
  },
  capilla: {
    title: "Amor exprés",
    line: "En la capilla «Amor Exprés», un Elvis de patillas imposibles sostiene una Biblia y un micrófono. Ante él, una pareja que se conoció hace tres horas se mira como si se conociera de otra vida. «¡Nena!», te dice Elvis, «nos falta testigo. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
    money: {
      nada: "Te refugias en la capilla «Amor Exprés» porque es el único sitio del Strip donde no te cobran por sentarte. Un Elvis de patillas imposibles te mira de arriba abajo: tacones en la mano, sin un peso, ojos de no haber cenado. Ante él, una pareja que se conoció hace tres horas. «¡Nena! El testigo se lleva veinte dólares y una copa gratis. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
      "100": "Te asomas a la capilla «Amor Exprés» porque la boda más barata cuesta noventa y nueve dólares y te pica saber qué se compra con eso. Elvis, patillas imposibles, Biblia en una mano y micrófono en la otra, te ve en la puerta. Ante él, una pareja que se conoció hace tres horas. «¡Nena, nos falta testigo! ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
      "500": "Con quinientos dólares en el bolso y una noche que aún no ha decidido qué quiere ser, entras en la capilla «Amor Exprés» atraída por la música. Elvis sostiene una Biblia y un micrófono. Ante él, una pareja que se conoció hace tres horas se mira como si se conociera de otra vida. «¡Nena!», te dice Elvis, «nos falta testigo. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
      "1000": "La pareja de la capilla te ha visto ganar mil dólares en la ruleta y te ha seguido hasta aquí, convencida de que traes suerte a los matrimonios. Elvis, con patillas imposibles, mira tu bolso con el interés de un pastor que piensa en el cepillo. «¡Nena, la suerte en persona! Nos falta testigo. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
      "10000": "Con diez mil dólares, la capilla te ofrece regalarles a los novios el paquete «Rey de Corazones»: limusina rosa, flores, vídeo y un Elvis que canta tres canciones en vez de una. La pareja, que se conoció hace tres horas, te mira como a un hada madrina con tarjeta de crédito. Elvis te guiña un ojo. «¡Nena! Nos falta testigo… y madrina. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
      "100000": "Una ballena de cien mil en la capilla y el negocio se pone en pie: el encargado te ofrece la sala dorada, palomas blancas y un helicóptero para la luna de miel. Los novios, que se conocieron hace tres horas, no saben si darte las gracias o pedirte un préstamo. Elvis se atusa las patillas. «¡Nena! Nos falta testigo de categoría. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»",
      "1000000": "Ha corrido la voz del millón y en la puerta de la capilla hay cola de hombres dispuestos a casarse contigo ahí mismo, incluido un jubilado con anillo de plástico. Elvis los aparta con el micrófono. Ante él, la pareja que se conoció hace tres horas sigue a lo suyo, feliz como dos tontos. «¡Nena! Hoy se casan ellos, no tú. Nos falta testigo. ¿Quieres ser parte de la historia, aunque dure menos que un disco?»"
    },
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
      "¿Qué futuro les ves a los novios de la capilla: divorcio exprés o bodas de oro?",
      "¿Cuál es la decisión más impulsiva que has tomado por amor? Si lo hubieras pensado dos veces, ¿la habrías tomado igual?",
      "¿Crees que conocer mucho a alguien antes de comprometerte garantiza algo, o es una ilusión de control?",
      "¿Qué te parece más romántico: una locura de una noche o la paciencia de muchos años? ¿Por qué?",
      "¿Has sido testigo de una relación que todos sabían que no iba a funcionar? ¿Dijiste algo o te callaste?"
    ],
    words: ["a primera vista", "a deshoras", "pase lo que pase", "pagar con la misma moneda"]
  },
  discoteca: {
    title: "El hombre de gris",
    line: "Luces que cortan el aire como navajas, un DJ que parece rezar y una mesa VIP llena de botellas con bengalas. Bailas. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro. Es el hombre del traje gris. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
    money: {
      nada: "En la cola del club, el portero te echa con un dedo: sin pulsera, sin mesa y sin un peso, aquí no entra ni la Virgen. Te cuelas por la cocina y bailas al fondo, junto a los baños. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro: el hombre del traje gris. «Me llamo Bruno. Tranquila, no soy de la puerta. Perdone la interrupción. Bonito ritmo».",
      "100": "La entrada al club cuesta cincuenta y la copa más barata, treinta: con tus cien dólares, la cuenta sale a una noche de agua con hielo. Bailas igual, que bailar es gratis. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro: el hombre del traje gris. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
      "500": "Luces que cortan el aire como navajas, un DJ que parece rezar y tú, con quinientos dólares y ganas de liarla, en mitad de la pista. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro. Es el hombre del traje gris. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
      "1000": "Con mil dólares te han dado una mesa pequeña al borde de la pista y una botella con bengala que llega entre gritos de camareros, como si hubieras descubierto América. Te da vergüenza y bailas para disimular. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
      "10000": "Diez mil dólares te consiguen la mesa VIP junto al DJ, un camarero solo para ti y tres desconocidos que de repente son tus mejores amigos. Los dejas con la botella y bajas a la pista. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro: el hombre del traje gris. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
      "100000": "Con cien mil dólares, el club te ha cedido la mejor mesa, veinte botellas de champán y un séquito de modelos que nadie ha invitado. Te escapas de todos y bajas a la pista. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro: el hombre del traje gris. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo».",
      "1000000": "El DJ ha parado la música para anunciar tu llegada —«¡la mujer del millón!»— y la pista entera se ha girado: envidia, deseo y algún cálculo frío desde la barra. Bailas para que dejen de mirarte, y te miran más. Durante tres canciones eres solo una mujer que baila. En la cuarta, una mano grande y educada se apoya en tu hombro. «Me llamo Bruno. Perdone la interrupción. Bonito ritmo»."
    },
    options: [
      { say: "Bruno, llevas toda la noche detrás de mí como un pesado. Al menos invítame a algo.", reply: "Bruno sonríe sin mover el resto de la cara. «Lo tengo apuntado. Pero hoy no invito yo; invitan arriba»." },
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
      "¿Qué te pasa cuando bailas: te sueltas, te da vergüenza o te conviertes en otra persona?",
      "¿Cuál es la noche de fiesta que peor terminó en tu vida? ¿Sacaste alguna lección o ninguna?",
      "¿Te atraen las personas que dan un poco de miedo? ¿Qué crees que dice eso de ti?",
      "¿Qué haces cuando alguien en una fiesta se pasa de la raya contigo o con un amigo?"
    ],
    words: ["sin pestañear", "pagar el alquiler", "por encima de", "hacer esperar"]
  },
  vip: {
    title: "La contraseña",
    line: "El ascensor se abre en un pasillo de terciopelo granate. Dos armarios con traje, Bruno y Tano, guardan una puerta negra. Tano, con un palillo entre los dientes, no se molesta en mirarte a los ojos. «Salón privado. Contraseña, o media vuelta, princesa».",
    money: {
      nada: "El ascensor se abre en un pasillo de terciopelo granate. Llegas sin un peso, con los tacones en la mano y el rímel algo corrido, y Tano, el guardaespaldas, se ríe con el palillo entre los dientes. «Aquí arriba los pobres solo suben a limpiar, princesa». Bruno no dice nada. Tano se cruza de brazos. «Salón privado. Contraseña, o media vuelta, princesa».",
      "100": "Pasillo de terciopelo granate, dos armarios con traje y una puerta negra. Tano ve tus cien dólares asomando del bolso y suelta una carcajada que huele a palillo mordido. «Con eso aquí arriba no pagas ni el hielo del whisky, guapa». Bruno le da un codazo. Tano suspira. «Salón privado. Contraseña, o media vuelta, princesa».",
      "500": "El ascensor se abre en un pasillo de terciopelo granate. Dos armarios con traje, Bruno y Tano, guardan una puerta negra. Tú llevas quinientos dólares y la sensación de haberte equivocado de planta. Tano, con un palillo entre los dientes, no se molesta en mirarte a los ojos. «Salón privado. Contraseña, o media vuelta, princesa».",
      "1000": "Mil dólares no impresionan a nadie en el piso VIP, y Tano te lo hace saber con un bostezo de cocodrilo. «Esta mañana subió un dentista con mil, princesa. Bajó en calzoncillos». Bruno mira al techo. Tano se saca el palillo de la boca y te apunta con él. «Salón privado. Contraseña, o media vuelta, princesa».",
      "10000": "Diez mil dólares y una tarjeta de jugadora de nivel oro te traen hasta aquí, pero no más allá: Tano y Bruno custodian la puerta negra como si dentro estuviera el Papa. Tano mira tu tarjeta con desdén. «Oro. Qué mono. Aquí dentro se juega con platino». Se cruza de brazos. «Salón privado. Contraseña, o media vuelta, princesa».",
      "100000": "Una ballena de cien mil debería entrar sin preguntas, y el anfitrión que te acompaña lo intenta: tarjeta negra, sonrisa, un billete deslizado en el bolsillo de Tano. Tano devuelve el billete sin mirarlo. «Aquí el dinero abre muchas puertas, jefe. Esta no». Te mira por fin. «Salón privado. Contraseña, o media vuelta, princesa».",
      "1000000": "Te han subido en el ascensor privado con un millón en placas doradas, dos gerentes y un abogado de la casa. Todos esperan que la puerta negra se abra sola. No se abre. Tano, palillo entre los dientes, ni se inmuta: ha visto pasar reyes, presidentes y gánsteres más ricos que tú. «Me importa un pepino el millón. Aquí hay reglas. Salón privado. Contraseña, o media vuelta, princesa»."
    },
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
      "¿Te has sentido alguna vez fuera de lugar en un sitio exclusivo? ¿Te hiciste pequeño o pequeña, o te creciste?",
      "¿Qué dice de nosotros que deseemos tanto entrar justo donde no nos dejan?",
      "¿Usas el humor o la seducción como arma cuando estás nervioso o nerviosa? ¿Te ha salido caro alguna vez?",
      "Si pudieras colarte en un solo lugar prohibido del mundo, ¿cuál elegirías y qué esperarías encontrar?"
    ],
    words: ["en la punta de la lengua", "de medio lado", "dar media vuelta", "fuera de lugar"]
  },
  bacara: {
    title: "La Condesa juega fuerte",
    line: "En el salón de bacará, bajo un candelabro que ha visto quebrar a príncipes, La Condesa juega sola contra la banca. Perlas, guantes negros, una boquilla de marfil. Te ve entrar y sonríe sin enseñar los dientes. «La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
    money: {
      nada: "Entras en el salón de bacará sin una ficha, como quien entra en una catedral sin limosna. Los crupieres se miran; uno ya llama a seguridad con los ojos. La Condesa, perlas, guantes negros y boquilla de marfil, detiene la escena con un dedo. «Déjenla. La pobreza le sienta mejor que a muchos la fortuna. La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
      "100": "En este salón el mínimo es de mil dólares por mano, y tú llevas cien, que es como presentarse en la ópera en chanclas. Un crupier te lo explica con una cortesía helada. La Condesa, bajo el candelabro, se ríe sin enseñar los dientes y le manda callar. «Yo empecé con menos, muchacho. La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
      "500": "Quinientos dólares no pagan ni media mano en este salón, pero la curiosidad te ha traído bajo el candelabro que ha visto quebrar a príncipes. La Condesa juega sola contra la banca, con perlas y guantes negros, y te ve entrar como quien ve llegar un postre inesperado. «Qué atrevimiento tan delicioso. La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
      "1000": "Mil dólares te dan para una sola mano en el salón de bacará, y los crupieres ya ensayan la cara de pésame. La Condesa, que juega sola contra la banca con perlas y boquilla de marfil, te observa con un interés casi maternal. «Una mano y fuera: así juegan los valientes o los inconscientes. La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
      "10000": "Diez mil dólares te permiten sentarte un rato en el salón de bacará sin que nadie te mire raro, aunque aquí eso es calderilla. La Condesa apuesta en una mano lo que tú traes para toda la noche, sin pestañear. Te mira por fin. «Calderilla, querida, pero bien llevada. La hija de Ernesto. Siéntese. Quiero ver si tiene sus nervios o solo sus ojos».",
      "100000": "Cien mil dólares y por fin juegas en la misma liga que la Condesa: línea de crédito, crupier propio y una cortesía tras otra. Ella, con perlas, guantes negros y boquilla de marfil, te observa como una leona mira a otra que pisa su territorio. «Bienvenida a la mesa de los que pueden perder. La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos».",
      "1000000": "Un millón sobre la mesa de bacará y hasta la Condesa deja la boquilla en el cenicero. Los crupieres sudan, el director observa desde detrás de un espejo y dos hombres de la Familia cierran la puerta por dentro. Ella sonríe, por una vez, enseñando los dientes. «Hacía años que nadie me hacía sentir pobre. La hija de Ernesto. Siéntese, querida. Quiero ver si tiene sus nervios o solo sus ojos»."
    },
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
      "¿Es un elogio o un reproche decir de alguien que «sabía irse a tiempo»?",
      "¿De qué te has ido a tiempo en tu vida, y de qué te arrepientes de no haberte ido antes?",
      "¿Qué se hereda de verdad de los padres: los ojos, los nervios o los miedos?",
      "Cuando alguien te pone a prueba, ¿te creces o te bloqueas? ¿Recuerdas la última vez?",
      "¿Crees que el dinero da elegancia o solo la hace más visible cuando ya existía?"
    ],
    words: ["irse a tiempo", "quien no arriesga no gana", "por si acaso", "lucirse"]
  },
  puros: {
    title: "La Familia",
    line: "La sala de puros es un banco de niebla con sillones de cuero. Hombres de la Familia juegan a cartas sin hablar; el whisky habla por ellos. Don Carmine, con anillo de sello y voz de grava, te señala una silla vacía. «Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
    money: {
      nada: "La sala de puros es un banco de niebla. Entras sin un peso, con el vestido arrugado de toda la noche, y los hombres de la Familia te miran como a una camarera perdida. Uno te pide hielo. Don Carmine, anillo de sello y voz de grava, le suelta una colleja que suena como un disparo. «A la hija de Ernesto no se le pide hielo, animal». Te señala una silla. «Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
      "100": "Te cuelas en la sala de puros con cien dólares y la esperanza de que nadie te los pida. Un hombre de la Familia se ríe: aquí un solo habano cuesta más que todo lo que llevas. Don Carmine, anillo de sello y voz de grava, lo hace callar con una mirada. «Las que no tienen nada son las que menos pierden, Paolo. Siéntate, niña. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
      "500": "La sala de puros es un banco de niebla con sillones de cuero. Tú, con quinientos dólares y la sensación de estar en una película que no has elegido, avanzas entre hombres de la Familia que juegan a cartas sin hablar. Don Carmine, con anillo de sello y voz de grava, te señala una silla vacía. «Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
      "1000": "Mil dólares no compran el respeto de la Familia, pero sí un habano decente y un whisky que no sabe a gasolina. Don Carmine te ve encenderlo con la torpeza de las primerizas y se ríe con voz de grava. «Despacio, niña. Un buen puro se fuma como se cuenta la verdad: a caladas cortas». Te señala la silla vacía. «Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
      "10000": "Con diez mil dólares, la sala de puros te abre su humidor: habanos de colección, un experto en whisky y una partida privada que acepta tus fichas sin rechistar. Los hombres de la Familia calculan tu dinero sin mirarte. Don Carmine, anillo de sello y voz de grava, te señala una silla. «El dinero se sienta donde quiere. Tú, aquí. Nadie te va a tocar un pelo… si sabes callar a tiempo».",
      "100000": "Cien mil dólares y la Familia se pone de pie al verte entrar, que es la forma más elegante de vigilar a alguien. Te ofrecen un habano de veinte años, un préstamo «entre amigos» y un socio para la noche. Don Carmine los despacha a todos con un gesto del anillo. «Las ballenas atraen pescadores, niña. Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo».",
      "1000000": "Un millón de dólares entra en la sala de puros y los hombres de la Familia sueltan las cartas: uno hace una llamada en voz baja, otro se lleva la mano a la chaqueta sin sacar nada. El aire se corta con navaja. Don Carmine se levanta despacio y te aparta él mismo la silla. «Con tanto dinero, niña, o se tienen amigos o se tienen problemas. Siéntate. Aquí nadie te va a tocar un pelo… si sabes callar a tiempo»."
    },
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
      "¿Crees que Ernesto se llevó algo que no era suyo, o es una mentira cómoda para la Familia?",
      "¿Hasta dónde llegarías para defender la reputación de alguien de tu familia, aunque tuvieras dudas?",
      "¿Qué es para ti la lealtad: callar por alguien o decirle la verdad a la cara?",
      "¿Por qué crees que nos fascinan los mafiosos en el cine si en la vida real nos darían pánico?",
      "¿Alguna vez has callado a tiempo y te has librado de algo, o has hablado de más y lo has pagado caro?"
    ],
    words: ["no tocar un pelo", "ir con pies de plomo", "retirar lo dicho", "callar a tiempo"]
  },
  anfitrion: {
    title: "La fotografía",
    line: "La mesa del anfitrión es una isla de caoba bajo una pared de fotografías antiguas: estrellas de cine, boxeadores, presidentes con copas en la mano. Ignacio, el anfitrión, impecable como un mayordomo de novela, te sirve un café sin preguntar. «Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
    money: {
      nada: "La mesa del anfitrión es una isla de caoba reservada a quienes gastan fortunas, y tú llegas sin un peso, con los tacones en la mano. Un ayudante intenta interceptarte con una sonrisa helada. Ignacio, impecable como un mayordomo de novela, lo aparta y te sirve un café como a una reina. «Aquí se atiende por apellido, no por cartera. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
      "100": "Te acercas a la mesa del anfitrión para preguntar si con cien dólares se consigue algún descuento en el bufé. Ignacio, impecable como un mayordomo de novela, te escucha con gravedad, te regala dos vales sin pestañear y te sirve un café. Después baja la voz. «Eso era lo de menos. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
      "500": "La mesa del anfitrión es una isla de caoba bajo una pared de fotografías antiguas. Llevas quinientos dólares y ninguna intención de convertirte en clienta de la casa, pero Ignacio te invita a sentarte igual y te sirve un café sin preguntar. «No pienso venderle nada, se lo prometo. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
      "1000": "Ignacio ya tiene tu historial en la pantalla: mil dólares en la ruleta, apuesta media, minutos en la mesa. Por oficio te ofrece una cena de cortesía y una habitación más grande para la próxima visita, como a todos. Luego apaga la pantalla con un gesto cansado. «Olvide el protocolo. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
      "10000": "Con diez mil dólares jugados, Ignacio debería venderte el paquete completo: vuelos pagados, suite, cena con el chef y un viaje a Macao para jugadoras de tu categoría. Abre la carpeta, la mira y la cierra sin usarla. Te sirve un café sin preguntar. «Esta noche no le hablaré de cortesías. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
      "100000": "Cien mil dólares convierten a una mujer en la prioridad absoluta del anfitrión: Ignacio tiene órdenes de concederte cualquier capricho, desde un avión privado hasta un perfume hecho a medida. Te sirve un café, te escucha con paciencia y, por primera vez en su carrera, desobedece. «Hay cosas que no se regalan. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba».",
      "1000000": "El millón ha puesto patas arriba el piso VIP: el teléfono de Ignacio no para —el director, los rivales, un tipo de la Familia que pregunta, en broma o no, cuánto vale usted—. Ignacio lo desconecta con una calma de iglesia y te sirve un café. «Hoy no atiendo a nadie más. Señorita Duarte, hay una foto que llevo veinticinco años sin descolgar. Hoy por fin sé para quién la guardaba»."
    },
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
      "¿Por qué crees que Ignacio guardó la foto y el papel durante tantos años?",
      "¿Has perdido alguna amistad por dinero, por orgullo o por una competición absurda?",
      "¿Qué foto de tu pasado te cuesta mirar? ¿Qué te dice la persona que eras entonces?",
      "¿Pueden dos amigos competir de verdad sin destrozarse? ¿Te ha pasado?",
      "¿Qué guardas —objetos, cartas, mensajes— que te convendría tirar pero no eres capaz?"
    ],
    words: ["descolgar", "poner a prueba", "lo justo", "dar la espalda"]
  },
  terraza: {
    title: "Una oferta con vistas",
    line: "La terraza flota sobre el Strip: fuentes que bailan, neones que mienten y un helicóptero que corta la noche como un bisturí. Marco Montalbán, traje negro, sonrisa de anuncio y ojos de animal acorralado, te ofrece una copa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
    money: {
      nada: "La terraza flota sobre el Strip y tú llegas sin un peso, con los tacones en la mano y la ficha dorada como único capital. Marco Montalbán, traje negro y sonrisa de anuncio, te mira de arriba abajo con desprecio de niño rico. «Así que esta es la famosa heredera. Ni para un taxi». Aun así, te ofrece una copa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
      "100": "Fuentes que bailan, neones que mienten y Marco Montalbán, que ha hecho investigar tu cuenta corriente: cien dólares y un alquiler pendiente. Te lo dice sonriendo, como quien enseña un as. «Con eso no pagas ni el hielo de esta terraza, querida». Aun así, te tiende una copa de champán. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
      "500": "La terraza flota sobre el Strip: fuentes que bailan, neones que mienten y un helicóptero que corta la noche como un bisturí. Llevas quinientos dólares, una ficha que pesa como un ancla y ninguna gana de brindar. Marco Montalbán, traje negro y ojos de animal acorralado, te ofrece una copa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
      "1000": "Marco te recibe en la terraza con una copa y un dato: esta noche has jugado mil dólares y has ganado algo. «Mi padre jugaba así de joven: poco, pero con hambre». Detrás de él, un helicóptero espera con las hélices quietas, como un perro bien educado. Te tiende la copa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
      "10000": "Diez mil dólares jugados y Marco Montalbán ya conoce tu apuesta media, tu cóctel favorito y la mesa en la que se te escaparon dos lágrimas. Te espera en la terraza con champán y sonrisa de anuncio. «Mi gente lo apunta todo, no te ofendas: es el negocio familiar». Te tiende una copa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
      "100000": "Marco ha preparado la terraza para una ballena de cien mil: caviar, violines, un helicóptero con tus iniciales en la puerta. Sabe que el dinero no te impresiona, pero lo intenta igual, como quien prueba todas las llaves de un llavero. Te ofrece una copa con la mano algo temblorosa. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas».",
      "1000000": "Un millón de dólares tuyos frente a un casino entero de su padre: Marco te mira como un príncipe mira a una pretendiente al trono. En la terraza no hay nadie más, salvo dos guardaespaldas que fingen admirar las fuentes y un helicóptero con el motor encendido. Te ofrece una copa con una sonrisa que no le llega a los ojos. «Brindemos, Valentina. Por los padres que nos dejan herencias complicadas»."
    },
    options: [
      { say: "Brindo. Aunque a mí, de herencia, solo me dejaron preguntas.", reply: "Marco choca su copa con la tuya, demasiado fuerte. «Las preguntas son caras en esta ciudad. Yo, en cambio, ofrezco respuestas al contado»." },
      { say: "No bebo con quien me quiere fuera de la ciudad. Al grano, Marco, que no tengo toda la noche.", reply: "Marco deja la copa en la barandilla. «Al grano, entonces. Me gusta la gente práctica. Se negocia mejor»." },
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
      "¿Qué ves en Marco: un villano, un hijo herido o las dos cosas a la vez?",
      "¿Por cuánto dinero renunciarías a conocer una verdad importante sobre tu familia? ¿Existe esa cifra?",
      "¿Has sentido celos de alguien a quien tus padres parecían querer más? ¿Cómo lo viviste?",
      "¿Qué pesa más al heredar: el dinero, las deudas o las expectativas?",
      "¿Qué dice de una persona intentar comprar todo aquello que le da miedo?"
    ],
    words: ["al contado", "ir al grano", "acorralado", "quitar la máscara"]
  },
  oficina: {
    title: "La confesión",
    line: "El despacho huele a madera vieja, a whisky de veinte años y a medicina. Don Aurelio Montalbán, en una silla de ruedas frente a una caja fuerte antigua, te mira como quien ve volver a un fantasma querido. «Tienes sus ojos, ya me lo habían dicho. Y su manera de entrar sin llamar. Siéntate, Valentina. Ya es medianoche».",
    money: {
      nada: "El despacho huele a madera vieja, a whisky de veinte años y a medicina. Entras sin un peso, con los tacones en la mano y la ficha dorada como única tarjeta de visita. Don Aurelio, en silla de ruedas frente a la caja fuerte, sonríe. «Igual que él: llegó a esta ciudad con los bolsillos vacíos y salió dueño de todo… por una noche. Tienes sus ojos. Siéntate, Valentina. Ya es medianoche».",
      "100": "Don Aurelio Montalbán sabe que traes cien dólares y le hace gracia. «Mi primer día aquí llevaba cuarenta y una corbata prestada», dice desde su silla de ruedas, frente a una caja fuerte antigua. «Tu padre, menos aún. Los que llegan con poco son los únicos que saben lo que vale una noche». Señala la silla. «Tienes sus ojos. Siéntate, Valentina. Ya es medianoche».",
      "500": "El despacho huele a madera vieja, a whisky de veinte años y a medicina. Tú traes quinientos dólares, la ficha dorada y un cansancio que no es solo de esta noche. Don Aurelio Montalbán, en una silla de ruedas, te mira como quien ve volver a un fantasma querido. «Tienes sus ojos, ya me lo habían dicho. Y su manera de entrar sin llamar. Siéntate, Valentina. Ya es medianoche».",
      "1000": "Don Aurelio te recibe con tu historial de jugadora sobre la mesa: mil dólares jugados, un pleno al diecisiete, ni una copa de más. «Mis empleados me lo cuentan todo», dice desde su silla de ruedas. «Es lo único que aún me divierte». Luego aparta los papeles con desprecio. «Tienes sus ojos. Y su manera de entrar sin llamar. Siéntate, Valentina. Ya es medianoche».",
      "10000": "Diez mil dólares jugados esta noche y Don Aurelio lo sabe al centavo. «Ganas como él, pierdes como él y apuestas como él: sin mirar a nadie», dice desde su silla de ruedas, frente a la caja fuerte antigua. El despacho huele a whisky y a medicina. «Tienes sus ojos. Y su manera de entrar sin llamar. Siéntate, Valentina. Ya es medianoche».",
      "100000": "Don Aurelio ha ordenado que te traten como a una reina: suite, coche, crédito sin límite. Ahora te mira desde su silla de ruedas con una mezcla de orgullo y culpa. «Cien mil dólares. Tu padre me hizo perder eso en un parpadeo, antes de ganarme todo lo demás». Señala la silla frente a la caja fuerte. «Tienes sus ojos. Siéntate, Valentina. Ya es medianoche».",
      "1000000": "Un millón de dólares y medio Las Vegas detrás de ti: la Familia, los rivales, la prensa. Don Aurelio, en su silla de ruedas, se ríe hasta toser. «Has armado más escándalo que tu padre, y mira que él dejó el listón alto». A su lado, una botella de whisky de veinte años espera sin abrir. «Tienes sus ojos. Y su manera de entrar sin llamar. Siéntate, Valentina. Ya es medianoche»."
    },
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
      "¿Se puede perdonar a quien te arruinó la vida si lo pide antes de morir? ¿Perdonar es por el otro o por uno mismo?",
      "¿Hay alguna verdad familiar que preferirías no conocer, o crees que siempre es mejor saber?",
      "¿De qué te arrepentirías si hoy fuera tu última noche? ¿Qué te impide arreglarlo mañana?",
      "Si hubieras estado en el lugar de Ernesto, ¿te habrías ido para proteger a tu familia o te habrías quedado a luchar por lo tuyo?"
    ],
    words: ["sin rodeos", "entrar sin llamar", "saldar una deuda", "carta boca abajo"]
  },
  borracho: {
    title: "El vaquero a la deriva",
    line: "Junto a la mesa de dados, dos guardias de seguridad arrastran hacia la salida a Billy, un tejano con sombrero de vaquero, botas de piel de serpiente y una borrachera de las que hacen historia. Al pasar a tu lado, se agarra a tu brazo como a la última tabla del naufragio. «¡Cariño! ¡Díselo tú! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
    money: {
      nada: "Estás junto a la mesa de dados, sin un peso, mirando cómo otros se juegan el alquiler, cuando dos guardias pasan arrastrando a Billy, un tejano con sombrero de vaquero y una borrachera monumental. Te ve, ve tu cara de no tener dónde caerte muerta y se le ilumina la mirada. «¡Somos tal para cual, preciosa! ¡Yo tampoco tengo nada! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
      "100": "Acabas de perder veinte de tus cien dólares en los dados cuando dos guardias pasan arrastrando a Billy, un tejano con sombrero de vaquero, borracho como una cuba. Billy se suelta un brazo, te agarra del tuyo y te mete en el bolso un billete arrugado de diez dólares. «¡Para el taxi, mi amor! ¡Díselo tú! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
      "500": "Junto a la mesa de dados, con tus quinientos dólares todavía casi intactos, ves pasar a dos guardias que arrastran hacia la salida a Billy, un tejano con sombrero de vaquero y aliento de destilería. Al pasar a tu lado, se agarra a tu brazo como a la última tabla del naufragio. «¡Cariño! ¡Díselo tú! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
      "1000": "Acabas de ganar mil dólares en los dados y la mesa te aplaude cuando dos guardias pasan arrastrando a Billy, un tejano con sombrero de vaquero que ha intentado subirse a la mesa a bailar. Billy ve tus fichas, se le encienden los ojos y se agarra a tu brazo. «¡Esa es mi mujer, la de la suerte! ¡Díselo tú! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
      "10000": "El jefe de sala te acompaña en persona a la mesa de alto límite, con diez mil dólares en fichas, cuando dos guardias pasan arrastrando a Billy, un tejano con sombrero de vaquero y la camisa empapada de whisky. El jefe de sala se pone pálido: Billy se ha agarrado a tu brazo. «¡Cariño, diles quién soy! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
      "100000": "Vas escoltada por tu anfitrión hacia los dados, cien mil dólares de crédito y un camarero detrás con tu copa, cuando dos guardias pasan arrastrando a Billy, un tejano con sombrero de vaquero que grita que tiene pozos de petróleo. Los guardias dudan: si eres su esposa, el borracho es un cliente de oro. Billy lo huele y se agarra a ti. «¡Mi reina! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»",
      "1000000": "Ha corrido la voz del millón y a tu alrededor hay curiosos, dos guardias de escolta y un fotógrafo. Entonces aparece Billy, un tejano con sombrero de vaquero, arrastrado por otros dos guardias, borracho como una cuba y gritando que él también es millonario. Se suelta, cae de rodillas ante ti y te besa la mano. «¡Mi amor, por fin te encuentro! ¡Diles a estos señores que eres mi esposa y que me estabas esperando!»"
    },
    options: [
      { say: "Sí, es mi marido. Y no se imaginan la paciencia que hay que tener con él.", reply: "Los guardias se miran, dudan y lo sueltan. Billy se coloca el sombrero con dignidad de alguacil. «¿Lo ven? Ella me entiende. Nadie en el mundo me entiende, pero ella sí»." },
      { say: "Lo siento, guapo. No te he visto en mi vida, y ya me arrepiento de haberte visto ahora.", reply: "Billy se lleva la mano al corazón como si le hubieras disparado. «¡Traición! ¡En Texas te colgaban por menos!», grita, mientras los guardias lo arrastran otro medio metro." },
      { say: "Depende. ¿Cuánto me pagas por ser tu esposa durante cinco minutos?", reply: "Billy se ríe tanto que casi pierde el sombrero. «¡Esta mujer sabe negociar! ¡Cien dólares y mi sombrero! ¡No, el sombrero no, que era de mi padre!»" }
    ],
    line2: "Uno de los guardias, un gigante con cara de no haber dormido en tres años, se cruza de brazos. «Señorita, este caballero ha vomitado en una mesa de dados, ha llamado tramposo al crupier y le ha pedido matrimonio a una tragamonedas. ¿De verdad quiere hacerse cargo de él?»",
    options2: [
      { say: "Por desgracia, sí. En la salud y en la borrachera.", reply: "El guardia suspira y le suelta el brazo a Billy. «Pues que le aproveche. Pero si vuelve a tocar una mesa, se van los dos a la calle». Billy intenta guiñarte un ojo y le salen los dos." },
      { say: "No. Llévenselo, pero con cariño, que mañana va a tener una resaca de campeonato.", reply: "El guardia casi sonríe. «Con cariño, señorita. Lo meteremos en un taxi con el sombrero bien puesto». Mientras se lo llevan, Billy te lanza un beso torpe: «¡Te espero en Texas!»" },
      { say: "¿A una tragamonedas? Bueno, por lo menos el hombre tiene ambición.", reply: "El gigante se ríe a pesar suyo. «La máquina le dijo que no, señorita. Por eso empezó a vomitar». Billy asiente, ofendido: «Fue muy cruel conmigo»." }
    ],
    end: "Billy se pierde entre el humo y los uniformes, cantando una ranchera con la voz rota. Te queda olor a whisky en la manga y una certeza: en Las Vegas, cualquiera puede ser tu marido durante cinco minutos.",
    talk: [
      "¿Has tenido que cuidar de alguien borracho en una noche que iba a ser divertida? ¿Qué aprendiste de esa persona… y de ti?",
      "¿Mentirías por un desconocido para sacarlo de un apuro? ¿Dónde está tu límite?",
      "¿Por qué crees que el alcohol saca en unas personas lo peor y en otras lo más tierno?",
      "¿Qué es lo más ridículo que has hecho con unas copas de más? ¿Todavía te lo recuerdan?",
      "¿Qué dice de una sociedad que se ría de los borrachos y al mismo tiempo celebre tanto la bebida?"
    ],
    words: ["borracho como una cuba", "la última tabla del naufragio", "hacerse cargo de", "resaca de campeonato"]
  },
  jackpot: {
    title: "La abuela del jackpot",
    line: "Sirenas, luces que giran, campanas que no paran: la máquina de al lado acaba de soltar el jackpot. Yolanda, una abuela de Ohio en chándal morado, salta, grita y baila como si tuviera veinte años y dos copas. Te abraza sin pedir permiso y te llena la cara de pintalabios. «¡Ochocientos cincuenta mil dólares, cariño! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
    money: {
      nada: "Estás sentada ante una tragamonedas sin dinero, solo por descansar los pies, cuando la máquina de al lado estalla: sirenas, luces, campanas. Yolanda, una abuela de Ohio en chándal morado, acaba de ganar el jackpot y te mira como si fueras un ángel caído. «¡Tú no tienes ni para el café, se te ve en la cara! ¡Hoy invito yo a todo! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
      "100": "Llevas una hora perdiendo tus cien dólares centavo a centavo cuando la máquina de al lado estalla en sirenas y luces. Yolanda, una abuela de Ohio en chándal morado, ha ganado el jackpot con una apuesta de tres dólares. Te agarra la cara con las dos manos. «¡Tres dólares, cariño, tres! ¡Ochocientos cincuenta mil! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
      "500": "Vas por la mitad de tu noche de quinientos dólares, sin ganar ni perder gran cosa, cuando la máquina de al lado se vuelve loca: sirenas, luces, campanas. Yolanda, una abuela de Ohio en chándal morado, salta y baila como si tuviera veinte años y dos copas. «¡Ochocientos cincuenta mil dólares, hija! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
      "1000": "Acabas de perder mil dólares en la ruleta y paseas entre las tragamonedas lamiéndote las heridas cuando, a tu lado, estalla el jackpot. Yolanda, una abuela de Ohio en chándal morado, ve tu cara de entierro y se parte de risa. «¡Quita esa cara, que la suerte se pega! ¡Ochocientos cincuenta mil! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
      "10000": "Un encargado te acompaña a las máquinas de alto límite con tus diez mil dólares cuando el pasillo entero se ilumina: Yolanda, una abuela de Ohio en chándal morado, ha ganado el jackpot en una máquina de un dólar. El encargado te abandona para correr hacia ella con un formulario de Hacienda. Yolanda lo esquiva y viene directa a ti. «¡Ochocientos cincuenta mil! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
      "100000": "Tu anfitrión te está explicando las ventajas de tu nuevo nivel de clienta cuando las sirenas lo interrumpen: Yolanda, una abuela de Ohio en chándal morado, ha ganado el jackpot. Ve tus joyas, tu séquito y tu cara de aburrimiento. «¡Tú, la rica! ¿Sabes lo que es ganar algo de verdad? ¡Ochocientos cincuenta mil! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»",
      "1000000": "Todo el casino te mira por lo del millón, hasta que la máquina de al lado te roba el protagonismo: sirenas, luces, campanas. Yolanda, una abuela de Ohio en chándal morado, ha ganado el jackpot y ahora la reina de la noche es ella. Te ve y se ríe a carcajadas. «¡Ahora somos dos millonarias, cariño! ¡Abrázame, celebra conmigo, que yo sola no me lo creo!»"
    },
    options: [
      { say: "¡Ven aquí, campeona! Esto hay que celebrarlo a lo grande y hasta que salga el sol.", reply: "Yolanda te abraza tan fuerte que te cruje la espalda. «¡Champán para todo el pasillo!», le grita a una camarera. «¡Que paga la abuela!»" },
      { say: "¡Qué pasada! Enhorabuena… pero guarde bien el comprobante antes de que alguien le eche el ojo.", reply: "Yolanda se mete el papel en el sujetador con una agilidad sorprendente. «Ahí no ha entrado nadie desde que se murió mi Harold, cariño. Está más seguro que en un banco»." },
      { say: "¿Y qué va a hacer con tanto dinero? Dígame que algo muy loco.", reply: "Yolanda se pone seria un segundo. «Un crucero con un novio de treinta años, cariño. O arreglarme los dientes. Todavía no lo he decidido»." }
    ],
    line2: "De repente, Yolanda deja de bailar y se le humedecen los ojos. «Tengo tres hijos. No me llaman desde Navidad. Si se enteran de esto, vendrán todos corriendo con sus mujeres, sus deudas y sus abrazos de mentira. ¿Se lo cuento, cariño? ¿Tú qué harías?»",
    options2: [
      { say: "Yo no les diría nada. Que vengan a verla por usted, no por el jackpot.", reply: "Yolanda asiente despacio. «Tienes razón. Si vienen sin saberlo, sabré quién me quiere. Y si no viene ninguno, me lo fundo todo en el crucero»." },
      { say: "Cuénteselo, pero que se lo ganen: una visita, una cena, un perdón.", reply: "Yolanda se ríe con picardía. «Un perdón por cada cien mil. ¡Me encanta! Mi hijo mayor me debe por lo menos tres»." },
      { say: "Cuénteselo todo. El dinero no compra amor, pero a lo mejor les refresca su número de teléfono.", reply: "Yolanda suelta una carcajada amarga. «Qué cruel eres. Y qué razón tienes. Bueno, los llamo. Pero el novio de treinta años me lo quedo igual»." }
    ],
    end: "Yolanda se aleja entre guardias y empleados con formularios, bailando con su chándal morado. Te deja un beso de pintalabios en la mejilla y la rara sensación de que, por una vez, la casa ha perdido.",
    talk: [
      "Si mañana te tocara muchísimo dinero, ¿a quién se lo contarías primero y a quién no se lo contarías nunca?",
      "¿Crees que el dinero cambia a las personas o solo desenmascara lo que ya eran?",
      "¿Has sentido alguna vez que alguien te quería por interés? ¿Cómo lo descubriste?",
      "¿Qué harías con una fortuna inesperada: cumplir un sueño loco, ayudar a tu familia o desaparecer?",
      "¿Qué dice de una familia que solo se reúna cuando hay dinero o entierros de por medio?"
    ],
    words: ["¡qué pasada!", "echar el ojo", "por interés", "lamerse las heridas"]
  },
  tramposo: {
    title: "Peluca y esposas",
    line: "Junto al blackjack, dos guardias acaban de esposar a Gus, un contador de cartas con una peluca rubia que se le ha quedado torcida como un gato dormido. Mientras se lo llevan, pasa a tu lado y te susurra sin mover los labios: «Rubia, escúchame bien, que no tengo tiempo. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
    money: {
      nada: "Estás junto al blackjack sin un peso, mirando jugar a otros, cuando dos guardias esposan a Gus, un contador de cartas con peluca rubia torcida. Al pasar, te mira de arriba abajo y adivina tu situación. «Tú estás más pelada que yo, rubia. Perfecto: tú necesitas dinero y yo, una cómplice. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
      "100": "Acabas de perder la mitad de tus cien dólares en el blackjack de mínimo bajo cuando dos guardias esposan a Gus, el de la peluca rubia torcida, que jugaba a tu lado. Mientras se lo llevan, te susurra: «Plántate en diecisiete, cariño, y no pidas con trece contra un seis. Y otra cosa: he escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
      "500": "Llevas quinientos dólares y una racha decente en el blackjack cuando seguridad esposa a Gus, el hombre de la peluca rubia que te aconsejaba en voz baja. Mientras lo arrastran, te susurra sin mover los labios: «Lo has hecho bien, rubia, pero ahora te toca algo más difícil. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
      "1000": "Has ganado mil dólares siguiendo los gestos discretos de Gus, el de la peluca rubia, y ahora dos guardias lo esposan delante de ti. El jefe de mesa te mira de reojo: ¿cómplice o suertuda? Gus, al pasar, te sonríe con todo el descaro del mundo. «Tú no sabes nada, ¿verdad, rubia? Perfecto. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
      "10000": "Diez mil dólares en la mesa de alto límite y Gus, el de la peluca rubia, sentado a tu lado, contando cartas como un reloj suizo. Hasta que dos guardias lo esposan sin contemplaciones. El jefe de sala te pide disculpas por la molestia mientras Gus te susurra al pasar: «No me mires, que te ven. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
      "100000": "Gus, el de la peluca rubia, llevaba toda la noche en tu mesa privada de cien mil, contando cartas a la sombra de una ballena. Ahora dos guardias lo esposan y tu anfitrión jura que no volverá a pasar. Gus finge tropezar para acercarse a tu oído. «Nadie registra a una ballena, rubia. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»",
      "1000000": "Con tu millón sobre la mesa, la seguridad del casino está tan nerviosa que esposa a todo el que respira raro, y le toca a Gus, el de la peluca rubia, que sí contaba cartas. Mientras lo arrastran entre fotógrafos y curiosos, te guiña un ojo. «Con todo el mundo mirándote a ti, nadie me mira a mí. He escondido algo en el baño de señoras, detrás del tercer espejo. ¿Me haces un favor?»"
    },
    options: [
      { say: "Depende del favor y de lo que yo saque de él, guapo.", reply: "Gus sonríe pese a las esposas. «Un veinte por ciento. Y mi eterna gratitud, que vale menos pero dura más»." },
      { say: "Ni de broma. Yo no me meto en líos de pelucas.", reply: "«Pues ya estás metida, rubia», susurra Gus. «Te han visto hablar conmigo. Así que, o me ayudas, o te ayudas tú»." },
      { say: "¿Qué hay detrás del espejo? ¿Dinero, fichas o un cadáver?", reply: "Gus se ríe por la nariz. «Algo peor: mi libreta. Veinte años de cuentas de este casino. Ahí sale gente que no te imaginas»." }
    ],
    line2: "Los guardias se detienen un segundo en la puerta de seguridad. Gus aprovecha para soltarlo todo: «El favor es este: lo sacas de ahí y se lo llevas a mi hermana, la camarera del bar central. Si me hubieran pillado mañana, lo habría hecho yo. ¿Lo harás, o vas a hacer como todos y mirar para otro lado?»",
    options2: [
      { say: "Lo haré. Pero si me pillan, la peluca la llevaré yo y la culpa, tú.", reply: "Gus se ríe a carcajadas mientras lo empujan. «¡Trato hecho! Te quedará mejor que a mí, rubia. Todo te queda mejor que a mí»." },
      { say: "No. Pero le diré a tu hermana dónde está. Que se la juegue ella.", reply: "Gus hace una mueca. «Bueno… es justo. Ella siempre dijo que yo acabaría así. Dile que tenía razón; le va a encantar»." },
      { say: "Antes dime una cosa: ¿sale mi apellido en esa libreta?", reply: "Gus se pone serio de golpe. «Duarte, ¿no? Página diecisiete. Pero eso, rubia, vale bastante más que un favor». Y la puerta se cierra detrás de él." }
    ],
    end: "La puerta de seguridad se cierra con un golpe metálico. En el suelo queda un mechón de peluca rubia, como la piel de un animal raro. El baño de señoras está a veinte pasos. Tú decides.",
    talk: [
      "¿Ayudarías a un desconocido que te pide un favor arriesgado? ¿Qué tendría que pasar para que dijeras que sí?",
      "¿Hay trampas que te parecen aceptables, en el juego, en los impuestos o en el amor?",
      "¿Alguna vez te han pillado haciendo algo que no debías? ¿Qué sentiste: vergüenza, rabia o alivio?",
      "¿Por qué crees que en las películas nos caen tan bien algunos tramposos?",
      "¿Has mirado alguna vez para otro lado cuando alguien necesitaba ayuda? ¿Cómo lo recuerdas hoy?"
    ],
    words: ["ni de broma", "pillar a alguien", "mirar para otro lado", "sin contemplaciones"]
  },
  perdedor: {
    title: "El reloj de la ruina",
    line: "Al lado de la ruleta, sentado en la moqueta con un traje de tres mil dólares y la corbata como una soga floja, Andrés llora sin ninguna vergüenza. Lo ha perdido todo esta noche, incluido el dinero de la boda de su hija. Se quita un reloj de oro y te lo tiende con manos temblorosas. «Es suizo, señorita. Vale diez veces más. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
    money: {
      nada: "Te sientas en la moqueta junto a la ruleta, sin un peso, porque te matan los pies. A tu lado, un hombre de traje caro llora como un niño: Andrés, que lo ha perdido todo, hasta el dinero de la boda de su hija. No ve que tú estás igual de pelada; solo ve un vestido rojo y una última esperanza. Se quita un reloj de oro. «Es suizo. Vale diez veces más. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
      "100": "Acabas de ganar con tus cien dólares lo justo para sentirte afortunada cuando ves a Andrés sentado en la moqueta junto a la ruleta: traje de tres mil dólares, ojos rojos, la ruina escrita en la frente. Ha perdido hasta el dinero de la boda de su hija. Te tiende un reloj de oro. «Usted ha ganado, la he visto. Es suizo, vale diez veces más. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
      "500": "Junto a la ruleta, con tus quinientos dólares en el bolso, tropiezas con Andrés: traje carísimo, sentado en la moqueta, llorando sin vergüenza. Lo ha perdido todo, incluido el dinero de la boda de su hija. Una camarera pasa de largo, acostumbrada. Él se quita un reloj de oro y te lo tiende. «Es suizo, señorita. Vale diez veces más. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
      "1000": "Los empleados ya te llaman por tu nombre por los mil dólares que has movido esta noche, y Andrés lo ha oído. Está sentado en la moqueta junto a la ruleta, traje de tres mil dólares, llorando: ha perdido hasta el dinero de la boda de su hija. Se arrastra hasta ti con un reloj de oro en la mano. «Es suizo. Vale diez veces más. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
      "10000": "Con diez mil dólares en fichas, una camina por el casino rodeada de favores; Andrés, sentado en la moqueta junto a la ruleta, está en la otra orilla de la noche. Lo ha perdido todo, hasta el dinero de la boda de su hija, y ya nadie le ofrece ni un vaso de agua. Te tiende un reloj de oro. «Es suizo, vale diez veces más. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
      "100000": "Andrés, sentado en la moqueta junto a la ruleta, era hace un año un cliente como tú: ballena, suite, anfitrión pegado a la espalda. Esta noche lo ha perdido todo, hasta el dinero de la boda de su hija, y el anfitrión ya no le coge el teléfono. Te reconoce el brillo de clienta mimada y te tiende un reloj de oro. «Disfrútelo mientras dure. Es suizo. Se lo dejo en doscientos dólares. ¿Me lo compra?»",
      "1000000": "Todo el casino aplaude tu millón y, en medio del ruido, Andrés sigue sentado en la moqueta junto a la ruleta, traje caro, corbata floja, llorando. Lo ha perdido todo, incluido el dinero de la boda de su hija, y tu suerte le parece casi un insulto. Aun así, se arrastra hasta ti con un reloj de oro. «Usted no lo necesita, ya lo sé. Es suizo. Se lo dejo en doscientos dólares. ¿Me lo compra?»"
    },
    options: [
      { say: "Guárdese el reloj. Lo que usted necesita no es dinero, es que alguien lo saque de aquí.", reply: "Andrés te mira como si le hablaras en otro idioma. «Nadie me ha dicho eso en toda la noche. Aquí solo me ofrecían otra copa y otra línea de crédito»." },
      { say: "Doscientos por un reloj suizo es una ganga… y una ganga así siempre esconde algo.", reply: "Andrés se ríe entre lágrimas. «Esconde a un imbécil, señorita. Me lo regaló mi hija el día que llegué a los cincuenta»." },
      { say: "¿Y qué piensa hacer con doscientos dólares? ¿Volver a la ruleta?", reply: "Andrés baja la mirada, pillado. «Al diecisiete. Una última vez. Si gano, recupero la boda. Y si pierdo… ya estoy en el suelo, ¿no?»" }
    ],
    line2: "Andrés se seca la cara con la manga de seda. «La boda es dentro de tres semanas. Mi hija no sabe nada. Mi mujer cree que estoy en un congreso. Si hubiera parado a medianoche, todavía me quedaría algo. ¿Usted qué haría en mi lugar: confesar o inventarse algo?»",
    options2: [
      { say: "Confesar. Mañana mismo. Las mentiras, como las deudas, crecen con intereses.", reply: "Andrés asiente, derrotado. «Mi mujer me va a matar». Luego, casi sonriendo: «Pero por lo menos me matará con la verdad por delante»." },
      { say: "Inventarse algo, no. Pero tampoco hace falta soltarlo todo en el desayuno.", reply: "Andrés te mira con un rayo de esperanza. «Poco a poco, ¿no? Primero la boda, luego lo demás». Se levanta del suelo por primera vez en una hora." },
      { say: "Yo llamaría primero a su hija. Es la única que merece saberlo antes que nadie.", reply: "Andrés rompe a llorar otra vez, pero de otra manera. «Ella me va a perdonar. Por eso me da tanta vergüenza»." }
    ],
    end: "Andrés se pone de pie, se arregla la corbata y se guarda el reloj en el bolsillo. Mientras se aleja hacia la salida, la ruleta sigue girando a su espalda, indiferente, como si nunca hubiera sido su enemiga.",
    talk: [
      "¿Has visto a alguien perderlo todo, por el juego, por el alcohol o por amor? ¿Qué sentiste al verlo?",
      "¿Qué es peor para ti: confesar algo terrible o vivir con la mentira? ¿Por qué?",
      "¿Comprarías algo valioso aprovechando la desesperación de otra persona? ¿Es negocio o abuso?",
      "¿Qué te daría más vergüenza: decepcionar a tus padres o a tus hijos, o a quien más quieres?",
      "Si hubieras perdido algo que no era tuyo, ¿a quién se lo habrías contado primero?"
    ],
    words: ["estar pelado", "una ganga", "crecer con intereses", "pasar de largo"]
  },
  despedida: {
    title: "Una señal para Cinthia",
    line: "Frente a la puerta del club, una despedida de soltera ha tomado la acera: velos, bandas rosas, globos con formas que harían sonrojarse a un cura. La novia, Cinthia, tambaleándose sobre unos tacones imposibles, te agarra de las dos manos. Sus amigas bailan sin enterarse de nada. «Tú tienes cara de saber cosas. No sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
    money: {
      nada: "Estás frente al club sin un peso, sin pulsera y sin plan, cuando una despedida de soltera te arrastra en su remolino de velos, bandas rosas y globos indecentes. La novia, Cinthia, borracha como una cuba, te agarra de las manos. «¿No tienes dinero? ¡Mejor! Los pobres dicen la verdad. Yo no sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
      "100": "Te has quedado en la puerta del club calculando si tus cien dólares dan para la entrada y una copa. Una despedida de soltera te rodea entre chillidos: velos, bandas rosas, globos con formas atrevidas. La novia, Cinthia, te pone una corona de plástico y se echa a llorar sin avisar. «No sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
      "500": "Frente al club, con quinientos dólares y la noche por delante, te cruzas con una despedida de soltera en pleno apogeo: velos, bandas rosas, una amiga subida a un banco. La novia, Cinthia, se tambalea hacia ti sobre unos tacones imposibles y te agarra de las manos. «Tú tienes cara de saber cosas. No sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
      "1000": "Con tus mil dólares has pagado una mesa en el club y una despedida de soltera se te ha colado en ella, convencida de que eres la organizadora. La novia, Cinthia, con el velo torcido y la banda rosa, se te sienta en las rodillas sin pedir permiso. «¡Gracias por la botella, desconocida! Oye… no sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
      "10000": "Diez mil dólares te han dado la mejor mesa del club, y desde arriba ves a una despedida de soltera suplicando en la puerta. Le haces un gesto al portero y entran todas en estampida. La novia, Cinthia, sube a tu mesa, te abraza y se pone seria de golpe. «Eres mi hada madrina. Pues escucha: no sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
      "100000": "Con cien mil dólares, el club te ha dado un reservado con piscina, y alguien ha dejado entrar a una despedida de soltera para animarlo. La novia, Cinthia, se ha caído vestida al agua, velo incluido, y sale chorreando y muerta de risa. Luego te mira y se le borra la sonrisa. «Tú lo tienes todo, ¿no? Pues yo no sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»",
      "1000000": "La mujer del millón y la despedida más ruidosa de Las Vegas coinciden en la puerta del club: las amigas de Cinthia te piden fotos, una te pide dinero para el divorcio «por si acaso». La novia, con velo y banda rosa, las aparta, te coge la cara y te habla muy cerca. «Si alguien sabe de suerte, eres tú. No sé si quiero casarme. ¡Dame una señal, por favor, la que sea!»"
    },
    options: [
      { say: "Ahí va tu señal: si necesitas una señal, ya tienes la respuesta.", reply: "Cinthia se queda helada, con la boca abierta. Luego le da hipo. «Eso es muy profundo… o yo estoy muy borracha. Seguramente las dos cosas»." },
      { say: "Tira esta moneda: cara, te casas; cruz, nos vamos a bailar y que le den a todo.", reply: "Cinthia lanza la moneda, que rueda hasta una alcantarilla y desaparece. Se queda mirándola un buen rato. «¿Y eso qué significa?», susurra. Sus amigas gritan a coro: «¡Que bailes!»" },
      { say: "¿Por qué no estás segura? Cuéntamelo, que mañana no me vas a volver a ver.", reply: "Cinthia se sienta en el bordillo y suelta un suspiro de alcohol y sinceridad. «Porque es bueno. Demasiado bueno. Y yo me aburro con los buenos, ¿entiendes?»" }
    ],
    line2: "Una amiga le trae un chupito y Cinthia se lo bebe de un trago. Luego se pone muy seria, todo lo seria que permite un velo torcido. «Hay otro. Un ex. Está aquí, en Las Vegas, esta noche. Me ha escrito. Si voy, la lío. Si no voy, me lo pregunto toda la vida. ¿Qué hago?»",
    options2: [
      { say: "No vayas. Las dudas de una noche no valen una vida entera de culpa.", reply: "Cinthia asiente con lágrimas de rímel. «Vale. Vale. Pero le contesto con un mensaje muy seco, para que sufra un poquito»." },
      { say: "Ve, míralo a los ojos y vuelve. Si vuelves, te casas convencida.", reply: "Cinthia te da un beso en la frente. «Eres una sabia o una loca. Ven conmigo, por si acaso me paso de la raya»." },
      { say: "Llama a tu novio y cuéntaselo. Si aguanta esa llamada, aguanta un matrimonio.", reply: "Cinthia palidece y sus amigas dejan de bailar. «¿Llamarlo? ¿Ahora?». Saca el móvil, lo mira y, contra todo pronóstico, marca." }
    ],
    end: "La despedida se aleja hacia el club cantando desafinada, con la novia en medio, dudando a pleno pulmón. Nunca sabrás cómo termina, y quizá esa sea la gracia de Las Vegas.",
    talk: [
      "¿Has tenido dudas alguna vez antes de una decisión enorme? ¿Las escuchaste o las acallaste?",
      "¿Pueden quedar cuentas pendientes con un ex para siempre? ¿Es sano volver a verlo?",
      "¿Qué es más peligroso en una pareja: el aburrimiento o la pasión desordenada?",
      "¿Le has contado alguna vez tu vida a un desconocido en una sola noche? ¿Por qué es más fácil?",
      "Si hubieras estado en el lugar de Cinthia, ¿qué señal habrías necesitado para estar segura?"
    ],
    words: ["liarla", "pasarse de la raya", "de un trago", "contra todo pronóstico"]
  },
  pelea: {
    title: "Penalti y empujones",
    line: "En la sala de apuestas deportivas, bajo una pantalla que repite cien veces el mismo penalti, Toño y un aficionado barrigón con la camiseta del equipo rival se empujan, se gritan y se escupen insultos de estadio. Toño te agarra del brazo y te planta entre los dos. «¡Usted lo ha visto! ¡Era penalti clarísimo! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
    money: {
      nada: "Estás en la sala de apuestas deportivas, sin un peso, solo para ver el partido gratis, cuando estalla la bronca: Toño y un aficionado rival se empujan por un penalti. Toño te agarra del brazo. «¡Usted no ha apostado nada, así que es imparcial! ¡Perfecta! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
      "100": "Has apostado veinte dólares al empate, por prudencia, cuando a tu lado estalla la pelea: Toño y un aficionado barrigón con la camiseta rival se gritan por un penalti que la pantalla repite sin piedad. Un guardia se acerca sin prisa. Toño te pone delante como un escudo. «¡Usted lo ha visto, señora! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
      "500": "Bajo un muro de pantallas que repite el mismo penalti una y otra vez, Toño y un aficionado rival pasan de los gritos a los empujones; vuela una cerveza, alguien aplaude. Tú, con quinientos dólares y ningún interés en el fútbol, intentas pasar de largo. Toño te agarra del brazo. «¡Usted, que tiene cara de lista! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
      "1000": "Acabas de apostar mil dólares a ese mismo partido y Toño lo ha visto: para él, eso te convierte en experta. Cuando el aficionado rival le da un empujón por un penalti dudoso, Toño te señala delante de toda la sala. «¡Ella sabe de esto, que ha puesto mil! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
      "10000": "Estás en el palco privado de la sala de apuestas, con diez mil dólares jugados y un camarero solo para ti, cuando abajo estalla la pelea. Toño sube las escaleras de dos en dos, perseguido por el aficionado rival y un guardia sin aliento, y se esconde detrás de tu sillón. «¡Usted desde aquí lo ha visto todo! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
      "100000": "Con cien mil dólares apostados, el casino te ha dado una pantalla gigante solo para ti, y Toño y el aficionado rival se han colado para ver la repetición del penalti a lo grande. Discuten, se empujan, vuelcan un cubo de hielo. Tu anfitrión intenta echarlos. Toño se arrodilla. «¡Señora, aquí la autoridad es usted! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»",
      "1000000": "Tienes un millón apostado y media sala cree que has comprado el partido. Cuando pitan el penalti, el aficionado rival te acusa a gritos y Toño, que no te conoce de nada, sale a defenderte a puñetazo limpio. Ahora los dos jadean, con la camisa rota, delante de ti. «¡Le he defendido el honor, señora! ¡Diga usted quién tiene razón y que este idiota me pague lo que me debe!»"
    },
    options: [
      { say: "Era penalti. Y usted, el de la camiseta, páguele y no sea tan rata.", reply: "El aficionado rival te fulmina con la mirada y saca un billete arrugado. «Pago, pero que conste que la árbitra está comprada»." },
      { say: "No era penalti. Lo siento, Toño: se tiró al suelo como un actor de telenovela.", reply: "Toño se lleva las manos a la cabeza como si le hubieras roto el corazón. «¡Traición! ¡Hasta las guapas se venden!»" },
      { say: "Yo no he visto nada. Y como sigan así, los dos van a acabar en la calle.", reply: "Los dos se callan de golpe, porque detrás de ti han aparecido dos guardias del tamaño de un frigorífico. Toño murmura: «Bueno, a lo mejor era medio penalti»." }
    ],
    line2: "El partido se reanuda, pero ya nadie mira la pantalla. Toño se sienta a tu lado, sudando, con la camisa rota. «Mi mujer dice que el fútbol me va a matar. Que quiero más al equipo que a ella. ¿Usted cree que uno puede querer más a un equipo que a su familia?»",
    options2: [
      { say: "Claro que sí. Por eso hay tantas familias que parecen equipos de segunda.", reply: "Toño se ríe con amargura. «La mía está en zona de descenso, señora. Y el entrenador soy yo»." },
      { say: "No. Lo que pasa es que el equipo nunca le pide explicaciones.", reply: "Toño se queda callado un buen rato. «Caramba. Eso me lo voy a tatuar», dice. «O se lo voy a decir a mi mujer, que me saldrá más caro»." },
      { say: "Depende. ¿Cuántos goles le ha dado su mujer esta temporada?", reply: "Toño suelta una carcajada que se oye en toda la sala. «¡Ninguno! ¡Pero tampoco me ha pitado nunca un penalti injusto!»" }
    ],
    end: "Toño vuelve al partido con la camisa rota y la dignidad remendada. Los guardias se quedan cerca, por si acaso. En la pantalla alguien marca un gol, y media sala se abraza con desconocidos.",
    talk: [
      "¿Qué te hace perder los papeles hasta el punto de gritarle a un desconocido? ¿Te arrepientes después?",
      "¿Crees que pasiones como el fútbol unen a la gente o sacan lo peor de ella?",
      "¿Te han puesto alguna vez de árbitro entre dos amigos o dos familiares? ¿Cómo saliste del lío?",
      "¿Es posible querer más a una afición que a una persona? ¿Qué dice eso de nosotros?",
      "¿Has llegado alguna vez a las manos con alguien, o has estado a punto? ¿Qué lo provocó?"
    ],
    words: ["ser un rata", "llegar a las manos", "perder los papeles", "de dos en dos"]
  },
  gritona: {
    title: "Recién casada, recién arrepentida",
    line: "En la puerta de la capilla «Amor Exprés», Marta, con vestido blanco de alquiler y el ramo destrozado de tanto golpear, le grita como una loca a su marido, que ronca borracho en un banco con la pajarita de lado. Se casaron hace veinte minutos. Te ve y se lanza hacia ti. «¡Tú! ¡Tú pareces una mujer con cabeza! ¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
    money: {
      nada: "Estás sentada en la escalera de la capilla, sin un peso, descansando los pies, cuando sale Marta hecha una furia: vestido blanco de alquiler, ramo destrozado y un marido de veinte minutos roncando en un banco. Te ve tan tiesa como ella y se sienta a tu lado. «Me he gastado mis últimos cien dólares en esta boda, y mira lo que me ha tocado. ¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
      "100": "Acabas de leer en la puerta de la capilla que la boda más barata cuesta noventa y nueve dólares, casi lo que llevas, cuando sale Marta gritando como una loca: vestido de alquiler, ramo destrozado y su marido de hace veinte minutos roncando borracho en un banco. «¡Noventa y nueve dólares tirados a la basura!», chilla. Te ve. «¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
      "500": "En la puerta de la capilla «Amor Exprés», Marta, con vestido blanco de alquiler, le grita como una loca a su marido, que ronca borracho en un banco. Se casaron hace veinte minutos. Tú pasabas por ahí con quinientos dólares y ganas de una noche tranquila; mala suerte. Marta se lanza hacia ti. «¡Tú pareces una mujer con cabeza! ¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
      "1000": "Marta te vio ganar mil dólares en la ruleta hace una hora y ahora te encuentra en la puerta de la capilla, donde le grita a su marido de veinte minutos, que ronca borracho en un banco con la pajarita de lado. «¡Tú tienes suerte y yo tengo esto!», chilla, señalándolo. «¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
      "10000": "Tu anfitrión te está enseñando la capilla como si fuera un museo cuando sale Marta gritando: vestido de alquiler, ramo destrozado y un marido de hace veinte minutos roncando borracho en un banco. El anfitrión intenta llevarte a otra parte, pero Marta ya te ha agarrado del vestido. «¡Usted tiene pinta de tener abogados! ¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
      "100000": "Con cien mil dólares en juego, el casino te ha regalado un paseo en limusina hasta la capilla, y justo al bajar, Marta te corta el paso, vestido de alquiler y rímel hasta la barbilla. Su marido de hace veinte minutos ronca en un banco abrazado a una botella. «¡Una rica! ¡Gracias a Dios! Los ricos se divorcian todos los días. ¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»",
      "1000000": "La noticia del millón ha llegado hasta la capilla, y Marta, casada hace veinte minutos con un hombre que ahora ronca borracho en un banco, ve en ti la salvación. Se arrodilla con su vestido de alquiler sobre la alfombra roja. «¡Le cambio el marido por un consejo! ¡Está casi nuevo! ¿Cómo se anula una boda en esta ciudad de locos? ¡Ayúdame!»"
    },
    options: [
      { say: "Primero, respira. Luego, un abogado. Y entre medias, una copa bien cargada.", reply: "Marta respira hondo una vez, dos veces, y a la tercera rompe a llorar. «La copa primero», solloza. «El abogado puede esperar; mi hígado, no»." },
      { say: "¿Seguro que quieres anularla? A lo mejor dormido es su mejor versión.", reply: "Marta mira al marido roncando y, a su pesar, se le escapa una risa. «Dormido no habla de su madre, eso es verdad»." },
      { say: "¿Qué ha pasado en veinte minutos para que lo odies tanto?", reply: "Marta levanta el ramo destrozado como prueba del delito. «Me llamó por el nombre de su ex en los votos. Delante de Elvis. ¡Delante de Elvis!»" }
    ],
    line2: "El marido se despierta a medias, te ve, sonríe como un niño de pecho y vuelve a dormirse. Marta se deja caer a tu lado en la escalera. «Lo peor es que lo quiero, ¿sabes? Desde hace tres horas, pero lo quiero. ¿Tú crees que se puede querer a alguien y odiarlo a la vez?»",
    options2: [
      { say: "Se puede. De hecho, eso es lo que algunos llaman matrimonio.", reply: "Marta suelta una carcajada que despierta al marido otra vez. «Entonces ya llevo veinte minutos de matrimonio de verdad. Qué rápido va todo aquí»." },
      { say: "Claro. Pero esta noche no decidas nada: mañana, sin alcohol, lo verás más claro.", reply: "Marta asiente con lágrimas en la sonrisa. «Mañana, sin alcohol. Vale. Aunque no sé si sobria me habría casado con él»." },
      { say: "Lo que no se puede es querer a alguien que ronca así. Eso ya es sobrehumano.", reply: "Marta mira al marido, que justo suelta un ronquido de motosierra. «Tienes toda la razón. Mañana anulo. O le compro tapones. Ya veremos»." }
    ],
    end: "Dejas a Marta sentada junto a su marido dormido, con la cabeza apoyada en su hombro, entre furiosa y tierna. Elvis sale a fumar, los mira y canta algo en voz baja. Las Vegas tiene estas cosas.",
    talk: [
      "¿Se puede querer y odiar a alguien al mismo tiempo? ¿Te ha pasado?",
      "¿Cuál es la decisión más precipitada que has tomado en tu vida? ¿La anularías si pudieras?",
      "¿Qué cosa imperdonable puede hacer alguien el primer día de una relación?",
      "¿Crees que las bodas son más para los novios o para los demás? ¿Por qué?",
      "Si hubieras estado en el lugar de Marta, ¿habrías anulado la boda o le habrías dado otra oportunidad?"
    ],
    words: ["hecha una furia", "a su pesar", "tener cabeza", "estar tieso"]
  },
  habano: {
    title: "El habano de cien dólares",
    line: "En el reservado más caro del piso VIP, Sergio Valdés, multimillonario de dientes perfectos, enciende un habano con un billete de cien dólares mientras cuatro modelos aburridas miran el móvil y tres guardaespaldas miran a todo el mundo. Te ve pasar y apaga el billete en la copa de alguien. «Tú, la de rojo. Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
    money: {
      nada: "Te has colado en el piso VIP sin un peso, detrás de un camarero. Sergio Valdés, multimillonario de dientes perfectos, enciende un habano con un billete de cien dólares rodeado de modelos y guardaespaldas, y te pilla mirando la ceniza del billete con hambre. Se ríe. «Tú eres la única aquí que sabe lo que vale esto. Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
      "100": "Con tus cien dólares has subido al piso VIP solo a mirar, como quien visita un zoo de ricos. Sergio Valdés, multimillonario de dientes perfectos, enciende un habano con un billete de cien —justo lo que llevas tú— y sonríe al verte la cara. «Eso es lo que vale tu noche, ¿verdad? Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
      "500": "En el reservado más caro del piso VIP, Sergio Valdés enciende un habano con un billete de cien dólares mientras las modelos que lo rodean ni pestañean. Tú, con quinientos dólares en el bolso, te sientes como una turista en el palacio de un emperador chiflado. Sergio te ve y aparta a un guardaespaldas. «Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
      "1000": "Mil dólares en el bolso y Sergio Valdés, multimillonario de dientes perfectos, quema uno de cien para encender un habano como si fuera papel de periódico. Te ve torcer el gesto y se divierte. «Te duele, ¿eh? Eso es lo bonito de no ser rica: todo duele más. Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
      "10000": "Con diez mil dólares, el piso VIP te recibe con educación, pero Sergio Valdés, que enciende un habano con un billete de cien, te mira como a una aprendiz. «Diez mil es lo que yo dejo de propina en una mala noche, preciosa». Sus modelos se ríen sin ganas. «Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
      "100000": "Con cien mil dólares, Sergio Valdés por fin te considera de su especie: te ofrece un habano encendido con un billete de cien y te hace sitio entre sus modelos y sus guardaespaldas. «Por fin alguien que no me mira con hambre. Qué aburrido». Lanza una moneda al aire y la atrapa. «Te propongo una apuesta: si sale cara, te doy cien mil dólares más. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»",
      "1000000": "Tu millón ha llegado al piso VIP antes que tú y Sergio Valdés no lo soporta: por primera vez en años, alguien le roba el protagonismo. Enciende un habano con tres billetes de cien a la vez, para dejar claro quién manda, y echa a sus modelos con un gesto. «Las dos personas más ricas de la sala. Interesante. Te propongo una apuesta: lanzo una moneda; si sale cara, te doy cien mil dólares. Si sale cruz, me haces compañía toda la noche. ¿Aceptas?»"
    },
    options: [
      { say: "Acepto, pero la moneda la lanzo yo. No me fío de los hombres que queman dinero.", reply: "Sergio se ríe con todos sus dientes caros. «Ni yo tampoco. Toma», dice, y te lanza una moneda de oro. Sus guardaespaldas dan un paso atrás, por instinto." },
      { say: "No, gracias. Mi compañía no se apuesta: se merece.", reply: "El reservado se queda en silencio. Una de las modelos levanta por fin la vista del móvil y te sonríe con admiración. Sergio parpadea, desconcertado. «Nadie me había dicho que no en… nunca»." },
      { say: "¿Y si la moneda cae de canto? Eso no lo ha pensado, ¿verdad?", reply: "Sergio se queda pensativo, intrigado de verdad. «Si cae de canto», dice al fin, «me caso contigo. No ha pasado nunca, así que no te hagas ilusiones»." }
    ],
    line2: "Sergio da una calada lenta y deja que el humo le tape la cara. Por un segundo parece menos rico y más solo. «¿Sabes lo peor de tenerlo todo? Que ya nadie me dice la verdad. Todos me ríen las gracias. Dime una cosa sincera sobre mí, aunque duela. ¿Te atreves?»",
    options2: [
      { say: "Quemas billetes porque no sabes qué hacer con el silencio.", reply: "Sergio apaga el habano despacio. «Eso ha dolido», murmura. «Te pagaría por repetirlo, pero entonces ya no sería verdad»." },
      { say: "Que tus modelos se aburren más que tú, y eso ya es decir.", reply: "Las modelos se ríen de verdad por primera vez. Sergio también, aunque le cuesta. «Golpe bajo», admite, «pero merecido»." },
      { say: "Que no necesitas una apuesta para que alguien se siente contigo. Basta con pedirlo bien.", reply: "Sergio te mira largo rato. «Por favor», dice al fin, como quien prueba una palabra extranjera. «¿Te sientas conmigo un rato?»" }
    ],
    end: "Sergio tira lo que queda del habano en una copa de champán de mil dólares, que sisea como una serpiente. Sus guardaespaldas se relajan. Por un instante, el hombre más rico de la sala parece solo un niño aburrido con demasiados juguetes.",
    talk: [
      "¿Qué dice de una persona quemar dinero delante de los demás: poder, vacío o provocación?",
      "¿Aceptarías una apuesta absurda si el premio fuera enorme? ¿Qué no apostarías nunca?",
      "¿Crees que los muy ricos viven más solos que los demás? ¿Por qué?",
      "¿Prefieres una verdad que duele o una mentira que te halaga? ¿Y en pareja?",
      "Si hubieras nacido multimillonaria o multimillonario, ¿en qué clase de persona crees que te habrías convertido?"
    ],
    words: ["reír las gracias", "golpe bajo", "de canto", "torcer el gesto"]
  },
  yate: {
    title: "Un yate en una carta",
    line: "En una mesa privada del piso VIP, Julián, heredero de treinta años, camisa abierta y ojeras de tres noches, ha puesto sobre el tapete las llaves de un yate de cuarenta metros. Una sola mano contra la banca: carta alta gana. Los crupieres sudan. Julián te ve y te tiende la baraja boca abajo. «Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
    money: {
      nada: "Te has colado en el piso VIP sin un peso, y la primera mesa que ves es una locura: Julián, heredero de treinta años, ha puesto las llaves de su yate sobre el tapete. Una sola mano, carta alta gana. Te ve con los tacones en la mano y se ríe con amargura. «Tú no tienes nada que perder y yo tengo demasiado. Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
      "100": "Con tus cien dólares has subido al piso VIP a curiosear y te encuentras a Julián, heredero de treinta años, con las llaves de un yate de cuarenta metros sobre la mesa. Una sola mano contra la banca. Te pregunta cuánto llevas y, al oírlo, aplaude. «¡Cien dólares! Eso vale mi opinión para mi padre. Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
      "500": "En una mesa privada del piso VIP, tú con tus quinientos dólares y Julián con un yate: el heredero ha puesto las llaves sobre el tapete y espera una sola carta. Tiene treinta años, la camisa abierta y la mirada de quien lleva tres noches sin dormir. Te tiende la baraja. «Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
      "1000": "Has jugado mil dólares en el piso VIP y Julián, heredero de treinta años, te ha visto ganar dos manos seguidas. Ahora ha puesto las llaves de su yate sobre el tapete para una sola mano, carta alta gana, y te quiere de amuleto. «Tú tienes la racha y yo el barco. Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
      "10000": "Con diez mil dólares jugados, el jefe de sala te ha invitado a presenciar la partida más absurda de la noche: Julián, heredero de treinta años, se juega su yate a una sola carta. Julián te ve y despide al jefe de sala con un gesto de niño mimado. «Por fin alguien que no trabaja para mi padre. Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
      "100000": "Julián, heredero de treinta años, te conoce de oídas: la ballena de cien mil que ha subido esta noche. Por eso te ha mandado llamar a su mesa, donde las llaves de un yate de cuarenta metros esperan sobre el tapete una sola carta. «Entre ricos nos entendemos», dice, con ojeras de tres noches. «Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»",
      "1000000": "El rumor del millón ha llegado a Julián, heredero de treinta años, y le ha picado el orgullo: si tú arriesgas un millón, él arriesga un yate. Ha puesto las llaves sobre el tapete, delante de medio piso VIP y de un fotógrafo que trabaja para su padre. «Que se entere el viejo. Mi padre dice que no sé elegir nada. Elige tú la carta. ¿Te atreves?»"
    },
    options: [
      { say: "Me atrevo. La de arriba: lo importante nunca se esconde en el fondo.", reply: "Julián te mira con una mezcla de miedo y admiración. «Nadie elige la de arriba», susurra. «Por eso me gusta». El crupier sostiene la carta sin darle la vuelta todavía." },
      { say: "No. Si quieres demostrarle algo a tu padre, no lo hagas con mis manos.", reply: "Julián se queda helado, como si le hubieras dado una bofetada con guante. «Eso mismo diría mi madre», murmura. Retira la mano de la baraja, pero no las llaves." },
      { say: "¿Y si ganas, qué? ¿Tu padre te va a querer más con dos yates?", reply: "Julián suelta una risa rota. «No. Pero a lo mejor me mira cuando le hablo. Con uno no lo consigo»." }
    ],
    line2: "Julián se sirve otro whisky que no se termina. «¿Sabes cuál es el problema de ser hijo de alguien importante? Que todo lo bueno que haces es gracias a él y todo lo malo es culpa tuya. Si pierdo el yate, por lo menos será culpa mía de verdad. ¿Lo entiendes o te parece una tontería de niño rico?»",
    options2: [
      { say: "Lo entiendo. Pero perder a lo grande para que te miren es otra forma de seguir pidiéndole permiso.", reply: "Julián se queda callado mucho rato. Luego empuja las llaves hacia el crupier… y las recupera. «Ahí me has pillado», dice. «Por hoy, me quedo con el barco»." },
      { say: "Me parece una tontería de niño rico. Pero las tonterías también duelen.", reply: "Julián se ríe por primera vez de verdad. «Gracias por la honestidad. Eres la primera persona en tres años que no me dice lo que quiero oír»." },
      { say: "Lo entiendo tan bien que, si yo tuviera un yate, ya me lo habría jugado.", reply: "Julián te mira con complicidad, de igual a igual. «Lo sabía. Tú también tienes un padre que pesa, ¿verdad?»" }
    ],
    end: "La carta se queda boca abajo sobre el tapete, sin girar, como una pregunta que nadie se atreve a contestar. Julián se guarda las llaves en el bolsillo y pide, por primera vez esta noche, un vaso de agua.",
    talk: [
      "¿Has hecho alguna vez algo arriesgado solo para que tu padre, tu madre o tu jefe te tomaran en serio?",
      "¿Qué pesa más: un padre que exige demasiado o uno que no espera nada de ti?",
      "¿Crees que los hijos de los ricos lo tienen más fácil o solo diferente? ¿Envidias a alguno?",
      "¿Qué dice de una persona necesitar público para sus locuras?",
      "Si a los veinte años hubieras podido decirle una sola frase a tu padre o a tu madre, ¿cuál habría sido?"
    ],
    words: ["de oídas", "picar el orgullo", "decir lo que alguien quiere oír", "boca abajo"]
  },
  senador: {
    title: "La coartada del senador",
    line: "Un flash revienta en el pasillo del piso VIP: un fotógrafo acaba de pillar al senador Robles saliendo de una suite con una mujer que no es su esposa. Dos guardaespaldas le arrancan la cámara al fotógrafo y lo empujan contra la pared. El senador, corbata en la mano y carmín en el cuello, viene hacia ti con su sonrisa de campaña. «Señorita, usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
    money: {
      nada: "Te has colado en el piso VIP sin un peso cuando un flash revienta en el pasillo: un fotógrafo ha pillado al senador Robles saliendo de una suite con una mujer que no es su esposa. Sus guardaespaldas le arrancan la cámara. El senador te ve y saca la cartera. «Usted necesita dinero y yo una testigo: somos tal para cual. Usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
      "100": "Vuelves del bufé con tus cien dólares intactos cuando un flash revienta en el pasillo del piso VIP: el senador Robles, pillado saliendo de una suite con una mujer que no es su esposa. Sus guardaespaldas le quitan la cámara al fotógrafo a empujones. El senador, con carmín en el cuello, te pone un billete de quinientos en la mano. «Para sus gastos, querida. Usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
      "500": "Un flash revienta en el pasillo del piso VIP justo cuando sales del ascensor con tus quinientos dólares. Un fotógrafo ha pillado al senador Robles con una mujer que no es su esposa; dos guardaespaldas le arrancan la cámara y lo aplastan contra la pared. El senador, corbata en la mano, viene hacia ti con su sonrisa de campaña. «Señorita, usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
      "1000": "Con mil dólares has subido al piso VIP a probar suerte, y la suerte te pone delante un escándalo: un fotógrafo acaba de pillar al senador Robles con una mujer que no es su esposa. Los guardaespaldas le quitan la cámara a golpes. El senador te mira de arriba abajo, calculando tu precio. «Una mujer elegante es la mejor coartada. Usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
      "10000": "El anfitrión te acompañaba a tu mesa con tus diez mil dólares cuando un flash revienta en el pasillo: el senador Robles, pillado con una mujer que no es su esposa. El anfitrión desaparece como por arte de magia; los guardaespaldas le quitan la cámara al fotógrafo. El senador se planta delante de ti. «Usted es clienta de la casa: aquí todos nos ayudamos. Usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
      "100000": "El senador Robles sabe quién eres: una ballena de cien mil, de las que el casino protege como a una princesa. Por eso, cuando un fotógrafo lo pilla saliendo de una suite con una mujer que no es su esposa, viene directo hacia ti mientras sus guardaespaldas destrozan la cámara. «Nadie se atreve a contradecir a una clienta como usted. Usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»",
      "1000000": "Esta noche todo el mundo quiere una foto con la mujer del millón, y el senador Robles más que nadie, porque un fotógrafo acaba de pillarlo saliendo de una suite con una mujer que no es su esposa. Mientras sus guardaespaldas le quitan la cámara, el senador te rodea los hombros con el brazo. «Mañana sale usted en todos los periódicos, querida. Mejor conmigo. Usted y yo estábamos juntos hablando de política toda la noche. ¿Verdad que sí?»"
    },
    options: [
      { say: "Claro que sí, senador. De política… y de lo caras que salen las coartadas.", reply: "El senador se ríe, nervioso, y se abrocha la camisa. «Entendido. Ya hablaremos de presupuestos más tarde»." },
      { say: "No. Yo no miento por un hombre que lleva el carmín de otra en el cuello.", reply: "El senador se lleva la mano al cuello, pillado por segunda vez. «Esto es… salsa de langosta», murmura. Ni sus guardaespaldas se lo creen." },
      { say: "¿Y su esposa? ¿Ella también cree que usted habla de política toda la noche?", reply: "El senador deja de sonreír. «Mi esposa cree en muchas cosas, señorita. En mí, ya no. Por eso necesito que me crean los demás»." }
    ],
    line2: "La mujer de la suite pasa por detrás abrochándose un abrigo y te guiña un ojo con descaro. El fotógrafo, sangrando por la nariz, grita que tiene otra tarjeta de memoria. El senador baja la voz. «Escúcheme: dentro de dos semanas hay elecciones. Si esto sale, lo pierdo todo. ¿Cuánto vale su silencio?»",
    options2: [
      { say: "Mi silencio no se vende. Se presta. Y algún día se lo voy a cobrar.", reply: "El senador traga saliva y te da su tarjeta personal. «Me parece justo. Y aterrador», dice. «Llámeme cuando quiera cobrar»." },
      { say: "Más de lo que usted gana en toda la legislatura, senador.", reply: "El senador se ríe sin ganas. «Entonces no lo puedo pagar con mi sueldo. Tendré que pagarlo con el de los contribuyentes, como siempre»." },
      { say: "Mi silencio, nada. El del fotógrafo, todo. Pague a él, no a mí.", reply: "El senador mira al fotógrafo ensangrentado y, por primera vez, parece avergonzarse. «Tiene razón», suspira. «Muchachos, que le curen la nariz y le pongan una copa»." }
    ],
    end: "El senador desaparece en el ascensor con la sonrisa de campaña recompuesta. El fotógrafo, en el suelo, te enseña la segunda tarjeta de memoria y se ríe con la boca llena de sangre. En Las Vegas, los secretos tienen tarifa.",
    talk: [
      "¿Mentirías para proteger a alguien que ha sido infiel? ¿Y si fuera tu mejor amigo o tu hermano?",
      "¿Por qué crees que tantas personas con poder se juegan la carrera por una aventura?",
      "¿Debería importarles a los votantes la vida privada de un político? ¿Hasta dónde?",
      "¿Te has enterado alguna vez de una infidelidad ajena? ¿Lo contaste o te lo callaste?",
      "¿Qué precio tiene tu silencio? ¿Hay algo por lo que callarías aunque te pareciera injusto?"
    ],
    words: ["pillar con las manos en la masa", "sonrisa de campaña", "coartada", "por arte de magia"]
  }
};
export default scenes;
