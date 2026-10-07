// Noche abierta · calle · escenas fuertes (caos-centro): robos, heridos, persecuciones y caos que la ciudad reparte por sus barrios.
//
// Seis escenas en las que cualquier cosa puede pasar en cualquier esquina:
// un choque con discusión y un desmayo en la avenida (centro), un robo en
// plena marcha y una vendedora que escapa de los inspectores (mercado), una
// discusión que se descontrola y alguien que cae al canal (costanera). Cada
// escena tiene su camino base y siete aperturas distintas según el objeto.
const CORAZON = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

const encounters = [
  // ───────────────────────────── ESCENA 1 · CENTRO ─────────────────────────────
  {
    id: "centro-choque",
    kind: "escena",
    district: "centro",
    title: "El choque de la avenida",
    verb: "INTERVENIR",
    goal: "Describir un accidente, pedir una ambulancia, calmar a dos personas enojadas y decidir a quién creer.",
    cast: [
      {
        id: "vanesa", name: "Vanesa", role: "Conductora del auto chocado",
        age: "adult", body: "f", build: "slim", height: 1.7,
        hair: "bob", hairColor: "#2a1a12", skin: "#e6c2a0",
        top: "blazer", topColor: "#3a3f5c", bottom: "pants", bottomColor: "#1f2230",
        extras: ["phone"], pose: "phone", props: ["car-keys"],
      },
      {
        id: "rolo", name: "Rolo", role: "Repartidor en bicicleta, herido",
        age: "young", body: "m", build: "athletic", height: 1.76,
        hair: "short", hairColor: "#111111", skin: "#b57d57",
        top: "jacket", topColor: "#e0531f", bottom: "jeans", bottomColor: "#2c3a55",
        extras: ["blood-head", "helmet"], pose: "injured", props: ["bike-broken"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "vanesa", mood: "angry",
        line: {
          A: "Un auto está contra la acera con el faro roto. Un chico sangra de la cabeza, sentado en el suelo. La conductora grita: «¡Salió de la nada! ¡No es mi culpa!»",
          B: "Un auto quedó atravesado contra la acera, con el faro roto y la puerta abierta. En el suelo, un repartidor sangra de la frente junto a su bicicleta doblada. La conductora grita: «¡Se me cruzó de la nada! ¡Yo tenía verde!»",
          C: "Un auto terminó contra la acera con el faro hecho pedazos; a dos metros, un repartidor sangra de la frente junto a lo que fue su bicicleta. La conductora, celular en mano, grita al aire: «¡Se me cruzó como un loco! ¡Que conste que yo tenía verde!»",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "¡Está sangrando! Llama a una ambulancia.", B: "Déjate de gritar: está sangrando. Llama a una ambulancia ahora mismo.", C: "Los colores del semáforo pueden esperar; la sangre no. Llama a una ambulancia ahora." },
            reply: { A: "Vanesa mira al chico. «Es un rasguño. Él está exagerando.» El chico dice: «No puedo ver bien.»", B: "Vanesa mira de reojo al repartidor. «Es un rasguño, está exagerando.» Él levanta la cabeza: «No veo bien… de verdad.»", C: "Vanesa apenas lo mira. «Es un rasguño, y él lo sabe.» El repartidor, con la mano llena de sangre, murmura: «Si esto es un rasguño, no quiero saber qué es una herida.»" },
            mood: "worried", next: "herido",
          },
          {
            id: "calma",
            say: { A: "Calma. Primero el herido. Después, la culpa.", B: "Tranquilos los dos. Primero miramos cómo está él y después hablamos de quién tuvo la culpa.", C: "Hagamos una tregua: primero atendemos al que sangra y luego repartimos culpas, que para eso siempre hay tiempo." },
            reply: { A: "Vanesa respira. «Está bien. ¿Cómo está?» El chico levanta la mano: «Mareado.»", B: "Vanesa baja un poco la voz. «Bueno… ¿cómo está?» El repartidor levanta una mano temblorosa: «Mareado, y la bici muerta.»", C: "Vanesa suelta el aire como quien acepta a regañadientes. «Está bien, ¿cómo está?» El repartidor levanta la mano: «Mareado, con la bici muerta y la cena de alguien en el suelo.»" },
            mood: "neutral", next: "herido",
          },
          {
            id: "culpa",
            say: { A: "Yo vi todo. Tú pasaste en rojo.", B: "Yo lo vi todo: tú pasaste en rojo y ni frenaste.", C: "Yo estaba justo ahí y lo vi: pasaste en rojo sin tocar el freno. No inventes semáforos." },
            reply: { A: "Vanesa se pone roja. «¿Tú qué sabes? ¡No te metas!»", B: "Vanesa se vuelve hacia ti, furiosa. «¿Y tú quién eres? ¿Su amigo? ¡No te metas en esto!»", C: "Vanesa gira hacia ti con una calma peligrosa. «¿Y tú quién eres, el perito de la noche? Aquí nadie te preguntó.»" },
            mood: "furious", next: "testigo",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tienes miedo. Lo entiendo. Vamos a ayudarlo juntos.", B: "Estás asustada, se nota. Nadie te va a atacar. Ayudémoslo juntos.", C: "Debajo de tanto grito hay miedo, y es normal. Respira: lo ayudamos entre los dos." },
            reply: { A: "Vanesa deja de gritar. Llora. «No lo vi. De verdad no lo vi.»", B: "Vanesa se queda sin voz y se le llenan los ojos de lágrimas. «No lo vi. Te juro que no lo vi.»", C: "A Vanesa se le quiebra la voz de golpe. «No lo vi», repite, como si decirlo tres veces lo arreglara." },
            mood: "love", next: "corazon-juntos",
          },
        },
      },
      herido: {
        who: "rolo", mood: "pain",
        line: {
          A: "Rolo se toca la cabeza. Tiene sangre en la mano. «Me duele mucho. La bici está rota. ¿Qué hago?»",
          B: "Rolo se mira la mano llena de sangre. «Me duele la cabeza y no siento bien la pierna. La bici está destrozada… ¿y ahora qué hago?»",
          C: "Rolo observa su mano ensangrentada con una curiosidad extraña. «La cabeza me late, la pierna no responde y la bici es chatarra. Dime tú qué se hace en estos casos.»",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "No te muevas. Llamo a una ambulancia.", B: "No te muevas. Yo llamo a una ambulancia y me quedo contigo.", C: "Quédate quieto, que una cabeza golpeada no negocia. Llamo a una ambulancia y no me muevo de aquí." },
            reply: { A: "Rolo cierra los ojos. «Gracias.» Vanesa también se sienta en la acera.", B: "Rolo cierra los ojos, agradecido. Vanesa, de repente callada, se sienta en el borde de la acera.", C: "Rolo cierra los ojos con un «gracias» apenas audible. Vanesa, sin nada que gritar, se deja caer en el borde de la acera." },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "datos",
            say: { A: "Dame la placa del auto. Yo te ayudo.", B: "Mira la placa del auto y anótala. Ella tiene que darte sus datos.", C: "Lo primero: la placa y el seguro de ella. Lo segundo: un médico. En ese orden no, pero las dos cosas." },
            reply: { A: "Rolo mira el auto. «Sí. La placa… la veo.» Vanesa grita: «¡Yo pago todo!»", B: "Rolo lee la placa en voz alta, despacio. Vanesa interrumpe: «¡No hace falta, yo pago todo, pero sin policía!»", C: "Rolo lee la placa en voz alta como quien dicta un testamento. Vanesa salta: «¡Yo pago todo! Pero sin policía, por favor.»" },
            mood: "neutral", end: "datos",
          },
          {
            id: "levantar",
            say: { A: "¿Puedes levantarte? Te ayudo.", B: "¿Crees que puedes levantarte? Apóyate en mí.", C: "Si puedes ponerte de pie, apóyate en mí; si no, no seas héroe." },
            reply: { A: "Rolo se levanta y se cae otra vez. Vanesa grita: «¡Lo está haciendo a propósito!»", B: "Rolo intenta ponerse de pie y vuelve a caer. Vanesa grita desde atrás: «¡Se tira a propósito, lo vi!»", C: "Rolo consigue medio metro de altura antes de volver al suelo. Vanesa, desde atrás: «¡Se tira! ¡Es un actor!»" },
            mood: "pain", next: "testigo",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tranquilo. No estás solo.", B: "Tranquilo, no estás solo. Nadie se va de aquí hasta que estés bien.", C: "No estás solo en esta acera. De aquí no se va nadie hasta que te vean los médicos." },
            reply: { A: "Rolo sonríe con dolor. «Gracias. Eres la primera persona que para.»", B: "Rolo sonríe a pesar del dolor. «Gracias. Pasaron diez autos y tú eres el único que paró.»", C: "Rolo sonríe entre muecas. «Pasaron diez autos y veinte celulares grabando. Tú eres el único que se agachó.»" },
            mood: "love", end: "ambulancia",
          },
        },
      },
      testigo: {
        who: "vanesa", mood: "furious",
        line: {
          A: "Vanesa se acerca mucho. «¿Testigo? ¡Tú no viste nada! ¡Vete!»",
          B: "Vanesa se te pone a diez centímetros de la cara. «¿Así que testigo? Tú no viste nada. Ocúpate de tu vida.»",
          C: "Vanesa invade tu espacio con el dedo en alto. «¿Testigo de qué? De nada. Cada uno a lo suyo, y lo tuyo no es esto.»",
        },
        options: [
          {
            id: "policia",
            say: { A: "Voy a llamar a la policía. Ellos deciden.", B: "Yo no decido nada. Llamo a la policía y que ellos decidan.", C: "No hace falta que me creas: llamo a la policía y que lo decida alguien con uniforme." },
            reply: { A: "Vanesa se queda pálida. «No, policía no… por favor.»", B: "Vanesa pierde el color de golpe. «No… policía no. Por favor. Tengo un problema con la licencia.»", C: "Vanesa se desinfla. «Policía no, por favor. Tengo un asunto pendiente con la licencia y esto me hunde.»" },
            mood: "scared", end: "policia",
          },
          {
            id: "mediar",
            say: { A: "No quiero problemas. Intercambien datos y listo.", B: "Nadie quiere problemas. Intercambien nombre, teléfono y seguro, y se acabó.", C: "Nadie aquí quiere una noche en la comisaría. Nombre, teléfono y seguro, y cada uno a su casa." },
            reply: { A: "Vanesa duda. Después saca un papel. «Está bien.» Rolo asiente.", B: "Vanesa duda un segundo largo y saca un papel del auto. «Está bien. Pero esto queda entre nosotros.»", C: "Vanesa calcula en silencio y, al fin, saca un papel del auto. «De acuerdo. Pero esto no sale de esta acera.»" },
            mood: "neutral", end: "datos",
          },
          {
            id: "insistir",
            say: { A: "Pasaste en rojo. Lo vi. No miento.", B: "Pasaste en rojo. Lo vi con mis propios ojos y lo voy a decir.", C: "Pasaste en rojo, lo vi, y lo repetiré delante de quien haga falta. Gritar no cambia el color del semáforo." },
            reply: { A: "Vanesa te empuja con las dos manos. Rolo grita: «¡Eh! ¡Déjalo!»", B: "Vanesa te empuja con las dos manos y tú das un paso atrás. Rolo grita desde el suelo: «¡Eh, eh! ¡A él no!»", C: "Vanesa te empuja con las dos manos, más sorprendida que tú. Rolo grita desde el suelo: «¡Con él no, que es el único que me ayuda!»" },
            mood: "furious", end: "empujon",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "No soy tu enemigo. Quiero ayudar a los dos.", B: "No soy tu enemigo, Vanesa. Quiero que los dos salgan bien de esto.", C: "No estoy en contra tuya. Quiero que esta noche termine con los dos enteros, nada más." },
            reply: { A: "Vanesa baja el dedo. «Perdón. Estoy muy nerviosa.»", B: "Vanesa baja el dedo y la voz. «Perdón. Estoy fuera de mí.»", C: "Vanesa baja el dedo como si pesara. «Perdón. No soy así. Hoy no soy yo.»" },
            mood: "love", next: "corazon-juntos",
          },
        },
      },

      // ── cuchillo: Rolo tiene la pierna atrapada en la correa de la bici; el cuchillo aparece y Vanesa grita.
      "cuchillo-inicio": {
        who: "vanesa", mood: "terror",
        line: {
          A: "Sacas el cuchillo para cortar la correa que atrapa la pierna de Rolo. Vanesa grita y retrocede: «¡Un cuchillo! ¿Estás loco? ¡Policía!»",
          B: "Sacas el cuchillo para cortar la correa de la bici que atrapa la pierna de Rolo. Vanesa retrocede hasta el auto: «¡Tiene un cuchillo! ¿Qué haces con eso? ¡Voy a llamar a la policía!»",
          C: "Sacas el cuchillo para liberar la pierna de Rolo de la correa de la bici. Vanesa retrocede hasta chocar con su propio auto: «¡Un cuchillo! ¿Estás loco? ¡Llamo a la policía ahora mismo!»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Es para cortar la correa. Su pierna está atrapada.", B: "Es para cortar la correa, nada más. Tiene la pierna atrapada y no puede moverse.", C: "Cálmate: es para cortar la correa que le atrapa la pierna. No pienso usarlo en nadie que no sea una bicicleta." },
            reply: { A: "Vanesa no se acerca. «¡Pues córtala rápido y guarda eso!» Rolo asiente: «Por favor.»", B: "Vanesa no se mueve del auto. «¡Pues córtala y guárdalo! ¡Ya!» Rolo, pálido, asiente: «Por favor, no siento la pierna.»", C: "Vanesa no suelta la manija del auto. «Pues corta y guarda eso, que no me fío.» Rolo asiente: «Por favor, hazlo, no siento la pierna.»" },
            mood: "scared", next: "cuchillo-corte",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Mira, ya está.", B: "Perdona, no pensé en cómo se veía. Lo guardo, ¿ves?", C: "Perdona, visto desde fuera entiendo el susto. Lo guardo y seguimos como personas." },
            reply: { A: "Vanesa respira. «Qué susto. Bueno… ¿cómo está él?»", B: "Vanesa respira hondo, todavía temblando. «Qué susto me diste. Bueno… ¿cómo está él?»", C: "Vanesa recupera algo de color. «Me quitaste diez años de vida. Bueno, ¿cómo está el chico?»" },
            mood: "worried", next: "herido",
          },
          {
            id: "amenazar",
            say: { A: "Cállate o te corto a ti también.", B: "Cállate de una vez o el siguiente corte es para ti.", C: "Sigue gritando y te voy a dar una razón de verdad para gritar." },
            reply: { A: "Vanesa corre a la esquina gritando. Rolo te mira: «¿Qué haces?»", B: "Vanesa sale corriendo hacia la esquina, gritando «¡Policía!». Rolo te mira con horror: «¿Qué haces, hombre?»", C: "Vanesa huye a la esquina gritando «¡Policía!» con una voz que llega hasta el río. Rolo te mira: «Acabas de convertirte en el malo de la noche.»" },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-corte": {
        who: "rolo", mood: "pain",
        line: {
          A: "Cortas la correa. Rolo saca la pierna y grita de dolor. Vanesa graba todo con el celular. «¡Lo tengo grabado! ¡Con el cuchillo!»",
          B: "Cortas la correa de un tajo y Rolo libera la pierna con un grito. Vanesa, desde el auto, te graba con el celular: «¡Lo tengo todo grabado! ¡Con el cuchillo en la mano!»",
          C: "Cortas la correa de un tajo; Rolo saca la pierna con un grito que asusta a las palomas. Vanesa, parapetada tras la puerta del auto, te graba: «¡Grabado! ¡Tú, el cuchillo y todo!»",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "Graba lo que quieras. Rolo, ¿puedes mover la pierna? Llamo a la ambulancia.", B: "Graba lo que quieras. Rolo, mueve los dedos del pie. Llamo a una ambulancia ya.", C: "Graba, que te va a salir un documental aburrido. Rolo, mueve los dedos del pie. Llamo a una ambulancia." },
            reply: { A: "Rolo mueve el pie. «Sí… duele, pero se mueve.» Vanesa baja el celular.", B: "Rolo mueve el pie y suspira. «Duele, pero se mueve.» Vanesa, sin saber qué hacer, baja el celular.", C: "Rolo mueve los dedos y suelta una risa de alivio. «Duele, pero obedece.» Vanesa baja el celular, un poco avergonzada." },
            mood: "worried", end: "cuchillo-libre",
          },
          {
            id: "video",
            say: { A: "Tu video muestra que yo lo ayudo. Y tu auto en la acera.", B: "Tu video va a mostrar a alguien ayudando a un herido, y tu auto subido a la acera. Sigue grabando.", C: "Ese video muestra a alguien liberando a un herido y a un auto con medio cuerpo en la acera. Sigue, que es evidencia a mi favor." },
            reply: { A: "Vanesa mira el auto, mira el video. Borra el video. «Está bien. Llamo a una ambulancia.»", B: "Vanesa mira el auto, mira la pantalla, y borra el video. «Está bien… Llamo yo a la ambulancia.»", C: "Vanesa mira su auto como si lo viera por primera vez y borra el video. «De acuerdo. Llamo yo a la ambulancia, y aquí nadie vio ningún cuchillo.»" },
            mood: "neutral", end: "cuchillo-pacto",
          },
          {
            id: "rolo",
            say: { A: "Rolo, guarda tú el cuchillo. Ella no me cree.", B: "Rolo, toma el cuchillo y guárdalo tú. Ella me cree capaz de cualquier cosa.", C: "Rolo, guárdalo tú, que a ti no te ve como un asesino. Esa batalla ya la tengo perdida." },
            reply: { A: "Rolo lo toma. Vanesa grita: «¡Ahora él también!» Sube al auto y se va.", B: "Rolo lo toma con cuidado. Vanesa grita: «¡Ahora son dos con cuchillo!», sube al auto y arranca con el faro roto.", C: "Rolo lo toma con cara de culpa. Vanesa grita «¡Ahora son dos!», se mete en el auto y huye con el faro roto rebotando en la acera." },
            mood: "scared", end: "cuchillo-huye",
          },
        ],
      },

      // ── pistola: Vanesa ve la pistola y levanta las manos; el accidente se vuelve una negociación.
      "pistola-inicio": {
        who: "vanesa", mood: "terror",
        line: {
          A: "Al agacharte junto a Rolo, se ve tu pistola. Vanesa levanta las manos. «No, por favor. Fue un accidente. No me hagas nada.»",
          B: "Al agacharte junto a Rolo, la pistola asoma de tu chaqueta. Vanesa levanta las manos muy despacio. «No, por favor… Fue un accidente. No me hagas nada.»",
          C: "Al agacharte junto a Rolo, la pistola queda a la vista. Vanesa levanta las manos como en una película. «No, por favor… Fue un accidente. Haz lo que quieras con el auto, pero conmigo no.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja las manos. No soy policía. Solo quiero ayudar.", B: "Baja las manos, por favor. No soy policía ni ladrón. Solo paré a ayudar.", C: "Baja las manos, que esto no es un asalto. Soy alguien que pasaba y paró, nada más." },
            reply: { A: "Vanesa baja las manos muy despacio. «Está bien. Te doy mis datos. Todos.»", B: "Vanesa baja las manos sin dejar de mirar la chaqueta. «Está bien. Te doy mis datos, el seguro, lo que quieras.»", C: "Vanesa baja las manos sin quitar los ojos de tu chaqueta. «Perfecto. Mis datos, el seguro, mi grupo sanguíneo. Lo que haga falta.»" },
            mood: "scared", next: "pistola-datos",
          },
          {
            id: "orden",
            say: { A: "Llama a una ambulancia. Ahora.", B: "Llama a una ambulancia. Ahora mismo, y sin discutir.", C: "Vas a llamar a una ambulancia ahora, y el semáforo lo discutimos otro día." },
            reply: { A: "Vanesa marca con las manos temblando. «Sí, sí. Ya llamo.»", B: "Vanesa marca el número con las manos temblando. «Sí, sí, ya llamo, no hace falta que…»", C: "Vanesa marca con los dedos temblando. «Ya llamo, ya llamo. No hace falta que me apuntes con la mirada.»" },
            mood: "scared", next: "pistola-orden",
          },
          {
            id: "vete",
            say: { A: "Vete. Ahora. Yo me quedo con él.", B: "Vete de aquí. Ahora. Yo me quedo con él.", C: "Lárgate ahora mismo. Del chico me ocupo yo." },
            reply: { A: "Vanesa corre al auto y se va. Rolo te mira: «¿Y la placa?»", B: "Vanesa corre al auto, arranca y desaparece. Rolo te mira desde el suelo: «¿Y la placa? ¿Quién me paga la bici?»", C: "Vanesa corre al auto y desaparece con el faro roto. Rolo te mira: «Acabas de espantar a la única persona que me podía pagar la bici.»" },
            mood: "furious", end: "pistola-huye",
          },
        ],
      },
      "pistola-datos": {
        who: "vanesa", mood: "scared",
        line: {
          A: "Vanesa escribe su nombre, su teléfono y el seguro. Le tiembla la mano. «¿Algo más? ¿Qué más quieres?»",
          B: "Vanesa escribe nombre, teléfono y seguro en un papel que no deja de temblar. «¿Algo más? Dime qué más quieres y te lo doy.»",
          C: "Vanesa anota nombre, teléfono y seguro con una letra que tiembla más que ella. «¿Algo más? Te doy lo que me pidas, pero deja de mirar la chaqueta.»",
        },
        options: [
          {
            id: "seguro",
            say: { A: "Nada más. Llama a tu seguro y a una ambulancia.", B: "Nada más. Ahora llama a tu seguro y a una ambulancia, en ese orden si quieres.", C: "Con eso basta. Ahora llama al seguro y a una ambulancia, y nadie tiene que acordarse de esta chaqueta." },
            reply: { A: "Vanesa llama. Rolo guarda el papel. «Gracias. Por el papel. Y por lo otro.»", B: "Vanesa llama a los dos números seguidos. Rolo guarda el papel: «Gracias. Por el papel. Y por… lo otro.»", C: "Vanesa hace las dos llamadas sin respirar. Rolo guarda el papel: «Gracias por el papel. De lo otro no quiero saber nada.»" },
            mood: "neutral", end: "pistola-seguro",
          },
          {
            id: "patrulla",
            say: { A: "Tranquila. Nadie te va a hacer daño.", B: "Tranquila, nadie te va a hacer daño. Solo quiero que él esté bien.", C: "Tranquila, que nadie te va a tocar un pelo. Lo único que me importa es que él salga de aquí entero." },
            reply: { A: "Un auto de policía frena detrás. Vanesa grita: «¡Tiene una pistola!»", B: "Una patrulla frena justo detrás del auto. Vanesa grita antes de pensar: «¡Él tiene una pistola!»", C: "Una patrulla frena detrás del auto con las luces encendidas. Vanesa, por puro reflejo, grita: «¡El de la chaqueta tiene una pistola!»" },
            mood: "terror", end: "pistola-policia",
          },
          {
            id: "bici",
            say: { A: "Y la bici. Pagas la bici nueva.", B: "Y la bici: le vas a pagar una bicicleta nueva.", C: "Y añade una línea: bicicleta nueva, del modelo que él elija." },
            reply: { A: "Vanesa escribe: «bici nueva». Rolo sonríe por primera vez.", B: "Vanesa escribe «bicicleta nueva» y firma debajo. Rolo sonríe por primera vez en la noche.", C: "Vanesa escribe «bicicleta nueva, modelo a elegir» y firma. Rolo sonríe por primera vez: «Con esto casi vale la pena el golpe.»" },
            mood: "smile", end: "pistola-seguro",
          },
        ],
      },
      "pistola-orden": {
        who: "rolo", mood: "worried",
        line: {
          A: "Vanesa habla con la ambulancia. Rolo te habla bajo: «Guarda eso. Con una pistola, la ambulancia no va a parar.»",
          B: "Mientras Vanesa habla con emergencias, Rolo te agarra la manga: «Guarda eso, por favor. Si ven una pistola, la ambulancia no para y la policía sí.»",
          C: "Mientras Vanesa da la dirección entre balbuceos, Rolo te tira de la manga: «Guarda eso. Una ambulancia no para donde hay un arma; una patrulla, en cambio, encantada.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tienes razón. La guardo. Perdón.", B: "Tienes razón. La guardo. Perdona el susto a los dos.", C: "Tienes razón, y me avergüenza que tenga que decírmelo un herido. La guardo." },
            reply: { A: "Vanesa cuelga. «Vienen en cinco minutos.» Se sienta junto a Rolo.", B: "Vanesa cuelga. «Cinco minutos.» Y, sin saber por qué, se sienta en la acera junto a Rolo.", C: "Vanesa cuelga: «Cinco minutos.» Luego, sin decidirlo del todo, se sienta en la acera al lado del chico que atropelló." },
            mood: "worried", end: "pistola-ambulancia",
          },
          {
            id: "no",
            say: { A: "No. Ella se queda si ve la pistola.", B: "No. Mientras vea la pistola, ella no se escapa.", C: "No. Esta pistola es lo único que la mantiene aquí y con el celular en la oreja." },
            reply: { A: "Vanesa cuelga y mira la calle. Llega una patrulla antes que la ambulancia.", B: "Vanesa cuelga y mira hacia la avenida. La primera luz que llega no es de ambulancia: es una patrulla.", C: "Vanesa cuelga y mira la avenida con esperanza. La primera sirena que llega no es la que querías." },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "rolo",
            say: { A: "Toma. Guárdala tú.", B: "Toma, guárdala tú. Así nadie se asusta.", C: "Toma, guárdatela tú un momento. Si la tiene el herido, nadie sospecha del herido." },
            reply: { A: "Rolo no la toca. «No. Guárdala tú y vete antes de que lleguen.»", B: "Rolo no la toca ni con la mirada. «Ni loco. Guárdala tú, y vete antes de que llegue alguien.»", C: "Rolo aparta las manos como si quemara. «Ni en broma. Guárdala y desaparece antes de que llegue la primera sirena.»" },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },

      // ── granada: alguien ve la granada y la avenida se vacía.
      "granada-inicio": {
        who: "vanesa", mood: "terror",
        line: {
          A: "Buscas el celular y sacas la granada por error. Vanesa grita: «¡Una granada! ¡Todos fuera!» La gente corre.",
          B: "Buscas el celular en la chaqueta y lo que sacas es la granada. Vanesa grita: «¡Una granada! ¡Corran!» Y en diez segundos la avenida se vacía.",
          C: "Buscas el celular y lo que sale de la chaqueta es la granada. Vanesa chilla «¡Una granada! ¡Evacúen!» y la avenida se vacía con una eficacia que ningún simulacro ha conseguido.",
        },
        options: [
          {
            id: "falsa",
            say: { A: "Calma. Es falsa. Mira: no tiene nada dentro.", B: "Tranquilos, es falsa. Mira: no tiene nada dentro, es de adorno.", C: "Calma, es de utilería. Mírala bien: no tiene más peligro que un pisapapeles." },
            reply: { A: "Rolo se ríe desde el suelo. «Me duele todo y me río.» Vanesa no se acerca.", B: "Rolo se ríe desde el suelo a pesar de la sangre. «Me duele todo y no puedo parar de reír.» Vanesa sigue a cinco metros.", C: "Rolo se ríe desde el suelo, con la frente sangrando. «Me duele hasta la risa, pero no puedo parar.» Vanesa no baja de los cinco metros." },
            mood: "laugh", next: "granada-broma",
          },
          {
            id: "amenaza",
            say: { A: "Sí, es de verdad. Llama a una ambulancia ya.", B: "Sí, es de verdad. Así que llama a una ambulancia ahora, y rápido.", C: "Es de verdad, y tengo muy poca paciencia. Ambulancia, ya." },
            reply: { A: "Vanesa marca llorando. «¡Ambulancia! ¡Y policía! ¡Hay una granada!»", B: "Vanesa marca entre lágrimas. «¡Ambulancia! ¡Y policía! ¡Un loco con una granada en la avenida!»", C: "Vanesa marca sin dejar de llorar. «¡Ambulancia y policía! ¡Hay un loco con una granada y un chico sangrando!»" },
            mood: "terror", next: "granada-amenaza",
          },
          {
            id: "soltar",
            say: { A: "¡Perdón! ¡No es mía!", B: "¡Perdón! ¡No sé de dónde salió! ¡No es mía!", C: "¡Perdón! ¡Esto no es mío! ¡Alguien me la puso en la chaqueta!" },
            reply: { A: "Sueltas la granada. Todos huyen, hasta Rolo con su pierna mala.", B: "La sueltas en la acera y todos huyen, incluso Rolo, que de repente camina perfectamente.", C: "La sueltas en la acera y todo el mundo huye, Rolo incluido, con una pierna milagrosamente curada." },
            mood: "terror", end: "granada-huye",
          },
        ],
      },
      "granada-broma": {
        who: "rolo", mood: "laugh",
        line: {
          A: "Rolo no puede parar de reír. «Ella pasa en rojo, me choca, ¡y la granada soy yo!» Vanesa, lejos, grita: «¡Ya llamé a la policía!»",
          B: "Rolo se ríe hasta que le duele. «Ella pasa en rojo, me revienta la bici, ¡y resulta que el peligro es tu granada!» Vanesa, desde lejos: «¡Ya llamé a la policía!»",
          C: "Rolo se ríe con la cabeza entre las manos. «Ella pasa en rojo, me destroza la bici, ¡y la amenaza pública es tu pisapapeles!» Vanesa, a prudente distancia: «¡Ya llamé a la policía!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Vanesa, ven. Es falsa, de verdad.", B: "La guardo, ¿ves? Vanesa, ven, que es falsa de verdad. Hablemos del choque.", C: "Guardada. Vanesa, vuelve: es falsa, y el único accidente real sigue siendo el tuyo." },
            reply: { A: "Vanesa se acerca despacio. «Bueno. Pero si explota, es tu culpa.»", B: "Vanesa vuelve paso a paso, como quien se acerca a un perro grande. «Bueno. Pero si explota, el seguro no lo cubre.»", C: "Vanesa vuelve con pasos de desconfianza. «Bueno. Pero que conste que si explota, no lo cubre mi seguro.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "helicoptero",
            say: { A: "¿Policía? ¿Por una granada falsa?", B: "¿Llamaste a la policía por una granada falsa? ¿En serio?", C: "¿Movilizaste a la policía por un pisapapeles? Qué noche va a tener la ciudad." },
            reply: { A: "Se oye un helicóptero. Rolo deja de reír. «No creo que vengan por la bici.»", B: "Un helicóptero aparece sobre la avenida. Rolo deja de reír de golpe: «No creo que ese venga por mi bici.»", C: "Un helicóptero cruza el cielo y se queda encima de la avenida. Rolo deja de reír: «Ese no viene a tomarte declaración por la bici.»" },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "ambulancia",
            say: { A: "Ríe menos. Sangras. Llamo a la ambulancia.", B: "Ríete menos, que sigues sangrando. Llamo a una ambulancia.", C: "Reserva la risa para cuando te cosan la frente. Llamo a una ambulancia." },
            reply: { A: "Rolo se toca la cabeza. «Ah, sí. Me olvidé.» Vanesa, desde lejos: «¡Yo pago la ambulancia!»", B: "Rolo se toca la frente. «Ah, cierto, la sangre. Se me había olvidado.» Vanesa, desde lejos: «¡La ambulancia la pago yo!»", C: "Rolo se toca la frente, sorprendido. «Ah, cierto, me olvidaba de la sangre.» Vanesa, desde la esquina: «¡La ambulancia corre por mi cuenta!»" },
            mood: "worried", end: "granada-risa",
          },
        ],
      },
      "granada-amenaza": {
        who: "vanesa", mood: "terror",
        line: {
          A: "Vanesa cuelga. «Ya vienen. Todos. Por favor, no la tires.» Rolo, en el suelo: «Amigo, esto ya no es por mí.»",
          B: "Vanesa cuelga y se queda de rodillas. «Ya vienen. Todos. Por favor, no la tires.» Rolo, desde el suelo: «Amigo, esto ya no tiene nada que ver conmigo.»",
          C: "Vanesa cuelga y se deja caer de rodillas. «Vienen todos. Te lo suplico, no la tires.» Rolo, desde el suelo: «Amigo, de un choque pasamos a una película, y yo era el protagonista.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Era una broma. La guardo. Perdón.", B: "Era una broma, muy mala. La guardo. Perdónenme los dos.", C: "Era una broma de pésimo gusto. La guardo y les pido perdón a los dos." },
            reply: { A: "Un helicóptero llega. Nadie cree que fue una broma.", B: "Llega un helicóptero y tres patrullas. Nadie acepta que fue una broma.", C: "Llega un helicóptero con reflector y tres patrullas. La palabra «broma» no convence a nadie." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "exigir",
            say: { A: "Dile que tú chocaste a un chico. Dilo.", B: "Ahora dile a la policía que tú chocaste a un chico en rojo. Dilo.", C: "Cuando lleguen, diles la verdad: pasaste en rojo y chocaste a un chico. Dilo tú, no yo." },
            reply: { A: "Vanesa llora. «Sí, sí, lo digo. Fue mi culpa.» Llega la policía.", B: "Vanesa llora. «Sí, sí, lo digo todo: fue mi culpa, pasé en rojo.» Y llega la policía.", C: "Vanesa llora. «Lo digo todo: pasé en rojo, fue mi culpa, lo que quieras.» La primera patrulla frena a tu lado." },
            mood: "scared", end: "granada-policia",
          },
          {
            id: "irse",
            say: { A: "Me voy. Cuida al chico.", B: "Me voy antes de que lleguen. Cuida al chico.", C: "Desaparezco antes de que llegue la caballería. Cuida al chico, que es lo único que importa." },
            reply: { A: "Te vas corriendo. Oyes sirenas. Rolo grita: «¡Gracias… creo!»", B: "Te alejas corriendo entre sirenas. A tu espalda, Rolo grita: «¡Gracias… creo!»", C: "Corres hacia el cine entre sirenas que llegan de todas partes. Rolo grita a tu espalda: «¡Gracias… supongo!»" },
            mood: "scared", end: "granada-huye",
          },
        ],
      },

      // ── gas: Vanesa se te viene encima y el gas la frena.
      "gas-inicio": {
        who: "vanesa", mood: "angry",
        line: {
          A: "Vanesa viene hacia ti gritando: «¡Tú eres su amigo!». Sacas el gas pimienta. Ella se para. «¿Me vas a rociar? ¿Qué eres?»",
          B: "Vanesa viene hacia ti con el dedo en alto: «¡Tú eres amigo de este!». Sacas el gas pimienta y ella frena en seco. «¿Me vas a rociar? ¿Quién te crees que eres?»",
          C: "Vanesa avanza hacia ti con el dedo por delante: «¡Tú estás con él!». Sacas el gas pimienta y ella clava los pies. «¿Me vas a rociar a mí? ¿Qué eres, seguridad privada?»",
        },
        options: [
          {
            id: "amenaza",
            say: { A: "Si no te calmas, sí.", B: "Si no te calmas, sí. Da un paso atrás.", C: "Si sigues avanzando, sí. Un paso atrás, y hablamos como adultos." },
            reply: { A: "Vanesa da un paso atrás. «Estoy calmada. ¿Ves? Calmada.»", B: "Vanesa da un paso atrás con las manos abiertas. «Estoy calmada. ¿Lo ves? Calmadísima.»", C: "Vanesa retrocede un paso con las palmas a la vista. «Mírame: calmada. Más calmada que nunca en mi vida.»" },
            mood: "scared", next: "gas-amenaza",
          },
          {
            id: "prevencion",
            say: { A: "Es por si acaso. Aquí nadie pelea. Mira al chico.", B: "Es solo por si acaso. Aquí nadie va a pelear. Mira cómo está el chico.", C: "Es pura prevención. Aquí no pelea nadie: hay un herido en el suelo y eso es lo único que importa." },
            reply: { A: "Vanesa mira a Rolo. Baja el dedo. «Bueno… ¿está bien?»", B: "Vanesa mira a Rolo por primera vez de verdad. Baja el dedo. «Bueno… ¿está muy mal?»", C: "Vanesa mira a Rolo y por fin lo ve. Baja el dedo despacio. «Bueno… ¿cómo está, en serio?»" },
            mood: "worried", next: "herido",
          },
          {
            id: "rociar",
            say: { A: "¡Te lo dije!", B: "¡Te avisé y no paraste!", C: "¡Te lo advertí, y no eres de las que escuchan!" },
            reply: { A: "Le rocías la cara. Vanesa cae de rodillas gritando. Rolo grita: «¡¿Qué hiciste?!»", B: "Le rocías la cara. Vanesa cae de rodillas, gritando y tosiendo. Rolo, desde el suelo: «¡¿Qué hiciste?! ¡Ahora somos dos heridos!»", C: "Le rocías la cara y Vanesa cae de rodillas entre toses y gritos. Rolo, desde el suelo: «¡Genial! ¡Ahora la ambulancia tiene dos pacientes!»" },
            mood: "furious", end: "gas-rociada",
          },
        ],
      },
      "gas-amenaza": {
        who: "rolo", mood: "worried",
        line: {
          A: "Rolo te mira desde el suelo. «Baja eso, por favor. Yo necesito que ella se quede y me dé sus datos, no que huya.»",
          B: "Rolo te hace un gesto desde el suelo. «Baja eso, por favor. Necesito que ella se quede y me dé sus datos, no que salga corriendo.»",
          C: "Rolo levanta una mano ensangrentada en son de paz. «Baja eso, por favor. Si ella huye, me quedo sin seguro, sin bici y con la frente abierta.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Está bien. Lo bajo. Vanesa, siéntate y escribe tus datos.", B: "Está bien, lo bajo. Vanesa, siéntate ahí y escribe tus datos para él.", C: "De acuerdo, lo guardo. Vanesa, siéntate en la acera y escribe tus datos; es lo único que te pido." },
            reply: { A: "Vanesa se sienta en la acera y escribe. «Nombre, teléfono, seguro. Listo.»", B: "Vanesa se sienta en el borde de la acera y escribe con letra nerviosa. «Nombre, teléfono, seguro. ¿Contento?»", C: "Vanesa se sienta en el borde de la acera y escribe. «Nombre, teléfono, seguro. ¿Ya puedo dejar de ser una criminal?»" },
            mood: "neutral", end: "gas-calma",
          },
          {
            id: "policia",
            say: { A: "Lo bajo cuando llegue la policía. Llámala tú.", B: "Lo bajo cuando llegue la policía. Llámala tú misma, que te creerán más.", C: "Lo guardo cuando haya un uniforme delante. Llámalos tú, que así la versión es tuya." },
            reply: { A: "Vanesa llama. «Hay un accidente… y alguien con gas pimienta.»", B: "Vanesa llama, sin quitarte la vista. «Hay un accidente… y una persona con gas pimienta que me amenaza.»", C: "Vanesa llama mirándote fijo. «Un accidente en la avenida… y alguien con gas pimienta que, según él, me protege.»" },
            mood: "worried", end: "gas-policia",
          },
          {
            id: "rociar",
            say: { A: "No. Ella no se calma. Mira.", B: "No. Esta no se calma ni con policía. Mira.", C: "No. Con esta no sirven las palabras, y lo acabo de comprobar." },
            reply: { A: "Rocías a Vanesa. Cae gritando. Rolo cierra los ojos: «Qué noche.»", B: "Rocías a Vanesa, que cae entre gritos. Rolo cierra los ojos: «Qué noche, por favor.»", C: "Rocías a Vanesa y cae gritando sobre la acera. Rolo cierra los ojos: «Una noche redonda: me chocan y encima pierdo al testigo.»" },
            mood: "furious", end: "gas-rociada",
          },
        ],
      },

      // ── lápiz: el testigo que anota todo.
      "lapiz-inicio": {
        who: "vanesa", mood: "worried",
        line: {
          A: "Sacas el lápiz y empiezas a anotar la placa. Vanesa deja de gritar. «¿Qué escribes? ¿Eres del seguro?»",
          B: "Sacas el lápiz y anotas la placa, la hora y el faro roto. Vanesa se calla de golpe. «¿Qué estás anotando? ¿Eres del seguro o qué?»",
          C: "Sacas el lápiz y anotas placa, hora y daños con calma de funcionario. Vanesa enmudece. «¿Qué escribes? ¿Eres del seguro, periodista, qué?»",
        },
        options: [
          {
            id: "acta",
            say: { A: "La placa, la hora, todo. Soy testigo.", B: "La placa, la hora, los daños, todo. Soy testigo y esto se escribe.", C: "Placa, hora, daños y declaraciones. Soy testigo, y los testigos que escriben valen el doble." },
            reply: { A: "Vanesa se pone nerviosa. «No hace falta escribir. Hablemos.»", B: "Vanesa se pone muy nerviosa. «No hace falta escribir nada. Hablemos como personas.»", C: "Vanesa se pone visiblemente nerviosa. «No hace falta escribir, ¿no? Esto se arregla hablando.»" },
            mood: "worried", next: "lapiz-acta",
          },
          {
            id: "croquis",
            say: { A: "Dibujo el accidente. El auto aquí, la bici aquí.", B: "Estoy dibujando el accidente: tu auto aquí, la bici aquí, el semáforo allá.", C: "Un croquis: tu auto aquí, la bici aquí, el semáforo justo ahí. Los dibujos no gritan, pero convencen." },
            reply: { A: "Rolo mira el dibujo. «¡Sí! Así fue. Ella venía de allá.»", B: "Rolo se inclina a mirar el dibujo. «¡Sí, exacto! Ella venía de allá, con el semáforo en rojo.»", C: "Rolo estira el cuello para ver el croquis. «Exacto, así fue. Ella venía de allá, y ese círculo rojo es el semáforo.»" },
            mood: "surprised", next: "lapiz-croquis",
          },
          {
            id: "prestar",
            say: { A: "Rolo, toma el lápiz. Escribe tu número para ella.", B: "Rolo, toma el lápiz y escribe tu número. Ella te va a llamar.", C: "Rolo, toma el lápiz y escribe tu número. Vanesa, tú vas a llamarlo mañana, ¿verdad?" },
            reply: { A: "Rolo escribe con la mano manchada de sangre. Vanesa guarda el papel. «Lo llamo mañana. Lo prometo.»", B: "Rolo escribe su número con la mano manchada de sangre. Vanesa guarda el papel: «Lo llamo mañana. Palabra.»", C: "Rolo escribe su número dejando una huella roja en el papel. Vanesa lo guarda: «Lo llamo mañana a primera hora. Palabra.»" },
            mood: "neutral", end: "lapiz-datos",
          },
        ],
      },
      "lapiz-acta": {
        who: "vanesa", mood: "worried",
        line: {
          A: "Vanesa lee lo que escribes. «Pon que él también tuvo culpa. Por favor.»",
          B: "Vanesa lee por encima de tu hombro. «Pon que él también tuvo parte de culpa. Por favor. Pon algo.»",
          C: "Vanesa lee por encima de tu hombro con cara de examen. «Pon que él también tuvo algo de culpa. Por favor, pon algo que me ayude.»",
        },
        options: [
          {
            id: "firma",
            say: { A: "Escribo la verdad. Firma aquí si estás de acuerdo.", B: "Escribo solo lo que vi. Si estás de acuerdo, firma aquí abajo.", C: "Escribo lo que vi, ni más ni menos. Si te parece justo, firma debajo." },
            reply: { A: "Vanesa lee despacio. Firma. «Está bien. Es justo.»", B: "Vanesa lee despacio, dos veces, y firma. «Está bien. Es justo. Perdón por gritar.»", C: "Vanesa lee dos veces, respira y firma. «Es justo. Y perdón por los gritos: no soy así.»" },
            mood: "smile", end: "lapiz-firma",
          },
          {
            id: "mentir",
            say: { A: "Está bien. Escribo que él iba rápido.", B: "Está bien, escribo que él iba demasiado rápido.", C: "De acuerdo, añado que él iba a toda velocidad, aunque los dos sabemos que no." },
            reply: { A: "Rolo te oye. «¿Qué? ¡Eso es mentira!» Te arranca el papel y lo rompe.", B: "Rolo te oye desde el suelo. «¿Qué? ¡Eso es mentira!» Te arranca el papel y lo rompe en pedazos.", C: "Rolo lo oye todo. «¿Rápido? ¡Es mentira!» Te arranca el papel y lo rompe con más fuerza de la que creías que le quedaba." },
            mood: "angry", end: "lapiz-rompe",
          },
          {
            id: "ambulancia",
            say: { A: "Primero escribo: «ambulancia». Llámala.", B: "Lo primero que escribo es «ambulancia». Llámala, y después seguimos.", C: "Lo primero del acta es «ambulancia». Llámala y después seguimos con los adjetivos." },
            reply: { A: "Vanesa llama. Rolo sonríe. «Un testigo con lápiz. Qué suerte.»", B: "Vanesa llama sin protestar. Rolo sonríe: «Un testigo con lápiz. Me tocó la lotería.»", C: "Vanesa llama sin rechistar. Rolo sonríe: «De todos los testigos posibles, me tocó el que toma apuntes.»" },
            mood: "smile", end: "lapiz-firma",
          },
        ],
      },
      "lapiz-croquis": {
        who: "vanesa", mood: "angry",
        line: {
          A: "Vanesa mira el dibujo. «¡Ese semáforo estaba en verde! Dibuja verde.»",
          B: "Vanesa mira el croquis y señala el círculo. «¡Ese semáforo estaba en verde! Píntalo de verde ahora mismo.»",
          C: "Vanesa estudia el croquis y clava el dedo en el círculo. «Ese semáforo estaba en verde. Corrige tu obra de arte.»",
        },
        options: [
          {
            id: "camara",
            say: { A: "Hay una cámara en la esquina. Ella dice la verdad.", B: "Hay una cámara en esa esquina. La cámara va a decir qué color era.", C: "Hay una cámara en la esquina del cine. El color lo decide ella, no mi lápiz." },
            reply: { A: "Vanesa mira la cámara. Se sienta en la acera. «Era rojo. Perdón.»", B: "Vanesa mira la cámara y se sienta en la acera, vencida. «Era rojo. Perdón. Era rojo.»", C: "Vanesa mira la cámara, luego el suelo, y se sienta. «Era rojo. Lo siento. Era rojo y lo sabía.»" },
            mood: "sad", end: "lapiz-verdad",
          },
          {
            id: "acuerdo",
            say: { A: "No importa el color. ¿Le pagas la bici y el médico?", B: "Olvidemos el color. ¿Le pagas la bici y el médico y aquí no pasó nada?", C: "Dejemos el color para los filósofos. ¿Le pagas bici y médico, y este dibujo se queda sin público?" },
            reply: { A: "Vanesa asiente rápido. «Sí. Todo. Dame el dibujo.»", B: "Vanesa asiente antes de que termines. «Sí, todo, lo que haga falta. Y dame ese dibujo.»", C: "Vanesa asiente con alivio. «Todo, lo que haga falta. Y el dibujo me lo quedo yo, de recuerdo.»" },
            mood: "smile", end: "lapiz-firma",
          },
          {
            id: "rojo",
            say: { A: "Dibujo lo que vi. Rojo.", B: "Dibujo lo que vi, y vi rojo.", C: "Dibujo lo que vi. Y lo que vi era tan rojo como tu cara ahora." },
            reply: { A: "Vanesa te quita el papel y lo rompe. «¡No hay dibujo!»", B: "Vanesa te arranca el papel y lo rompe en cuatro. «¡Sin dibujo no hay testigo!»", C: "Vanesa te arranca el croquis y lo hace pedazos. «Sin dibujo no hay testigo, y sin testigo no hay rojo.»" },
            mood: "furious", end: "lapiz-rompe",
          },
        ],
      },

      // ── libro: un libro como almohada, manual y escudo.
      "libro-inicio": {
        who: "vanesa", mood: "surprised",
        line: {
          A: "Sacas tu libro. Vanesa te mira. «¿Un libro? ¿Ahora le vas a leer un cuento?»",
          B: "Sacas el libro y te agachas junto a Rolo. Vanesa, desconcertada: «¿Un libro? ¿Le vas a leer un cuento mientras sangra?»",
          C: "Sacas el libro y te arrodillas junto a Rolo. Vanesa, con la ceja levantada: «¿Un libro? ¿Es tu manera de ayudar, con literatura?»",
        },
        options: [
          {
            id: "almohada",
            say: { A: "Es una almohada. Rolo, apoya la cabeza aquí.", B: "Sirve de almohada. Rolo, apoya la cabeza aquí, con cuidado.", C: "Hoy es una almohada. Rolo, apoya la cabeza aquí; nunca una novela tuvo un uso más noble." },
            reply: { A: "Rolo apoya la cabeza. «Gracias. Es mejor que la acera.» Vanesa se calla.", B: "Rolo apoya la cabeza en el libro y cierra los ojos. «Gracias. Es mejor que la acera.» Vanesa, por una vez, se calla.", C: "Rolo apoya la cabeza y cierra los ojos. «Mejor que la acera, y más culto.» Vanesa, por una vez, no tiene nada que decir." },
            mood: "smile", next: "libro-almohada",
          },
          {
            id: "numero",
            say: { A: "Aquí dice qué hacer en un accidente. Lee.", B: "En la última página dice qué hacer en un accidente. Léelo tú, en voz alta.", C: "La última página explica qué hacer en un accidente. Léela en voz alta, que te hace falta más que a mí." },
            reply: { A: "Vanesa lee: «Llamar a emergencias. No mover al herido.» Mira a Rolo.", B: "Vanesa lee, despacio: «Llamar a emergencias. No mover al herido. Mantener la calma.» Y mira a Rolo con otra cara.", C: "Vanesa lee como una alumna castigada: «Llamar a emergencias. No mover al herido. Mantener la calma.» Mira a Rolo y traga saliva." },
            mood: "worried", next: "libro-numero",
          },
          {
            id: "abanico",
            say: { A: "Es para darle aire. Está pálido.", B: "Es para abanicarlo. Está pálido y le falta aire.", C: "Es un abanico de emergencia: está pálido y necesita aire más que argumentos." },
            reply: { A: "Abanicas a Rolo con el libro. Vanesa se sienta a su lado. «Perdón, chico.»", B: "Abanicas a Rolo con el libro. Vanesa se sienta en la acera, a su lado. «Perdón, chico. De verdad.»", C: "Abanicas a Rolo con el libro, página a página. Vanesa se sienta junto a él en la acera. «Perdón, chico. Esto es culpa mía.»" },
            mood: "sad", end: "libro-sienta",
          },
        ],
      },
      "libro-almohada": {
        who: "rolo", mood: "pain",
        line: {
          A: "Rolo, con la cabeza en el libro: «¿De qué es el libro? Para pensar en otra cosa.» Vanesa: «Yo llamo a la ambulancia.»",
          B: "Rolo, con la cabeza sobre el libro: «¿De qué trata? Para pensar en algo que no sea mi frente.» Vanesa, en voz baja: «Yo llamo a la ambulancia.»",
          C: "Rolo, con la cabeza sobre tu novela: «¿De qué va? Necesito pensar en cualquier cosa menos en mi frente.» Vanesa, casi en susurro: «Yo llamo a la ambulancia.»",
        },
        options: [
          {
            id: "contar",
            say: { A: "Es de un hombre que busca a su hermano. Te lo cuento.", B: "Es de un hombre que cruza el país buscando a su hermano. Te lo cuento hasta que lleguen.", C: "Va de un hombre que cruza el país buscando a un hermano que no quiere ser encontrado. Te lo cuento hasta que oigamos la sirena." },
            reply: { A: "Rolo escucha con los ojos cerrados. Vanesa también. La ambulancia llega en el capítulo dos.", B: "Rolo escucha con los ojos cerrados; Vanesa también, sentada en la acera. La ambulancia llega en el capítulo dos.", C: "Rolo escucha con los ojos cerrados y Vanesa, sin querer, también. La ambulancia interrumpe el capítulo dos." },
            mood: "smile", end: "libro-ambulancia",
          },
          {
            id: "regalar",
            say: { A: "Te lo regalo. Para el hospital.", B: "Te lo regalo. En el hospital vas a tener tiempo de leer.", C: "Es tuyo. En la sala de espera del hospital lo vas a agradecer más que yo." },
            reply: { A: "Rolo sonríe. «Un choque, una bici rota y un libro. Buen negocio.» Vanesa llora.", B: "Rolo sonríe con sangre en los dientes. «Un choque, una bici rota y un libro gratis. No es tan mal negocio.» Vanesa, al lado, llora en silencio.", C: "Rolo sonríe con la boca manchada. «Un choque, una bici muerta y una novela. Hay noches peores.» Vanesa llora sin hacer ruido." },
            mood: "love", end: "libro-llora",
          },
          {
            id: "vanesa",
            say: { A: "Vanesa, ven. Siéntate. Él necesita calma, no gritos.", B: "Vanesa, ven y siéntate con nosotros. Él necesita calma, no gritos.", C: "Vanesa, ven y siéntate: lo que él necesita ahora es silencio y compañía, no una discusión." },
            reply: { A: "Vanesa se sienta en la acera. «Perdón, chico. Pago todo.»", B: "Vanesa se sienta en la acera, muy cerca de Rolo. «Perdón, chico. Pago todo, lo juro.»", C: "Vanesa se sienta en la acera, a un paso de Rolo. «Perdón, chico. Pago el médico, la bici, lo que haga falta.»" },
            mood: "sad", end: "libro-llora",
          },
        ],
      },
      "libro-numero": {
        who: "vanesa", mood: "worried",
        line: {
          A: "Vanesa cierra el libro. «No mover al herido… ¡Y yo quería levantarlo! ¿Qué número llamo?»",
          B: "Vanesa cierra el libro con cuidado. «No mover al herido… ¡Y yo quería ponerlo en el auto! ¿A qué número llamo?»",
          C: "Vanesa cierra el libro como si fuera frágil. «No mover al herido… y yo quería meterlo en el auto. ¿A qué número se llama, exactamente?»",
        },
        options: [
          {
            id: "llama",
            say: { A: "Al de emergencias. Di: accidente, un herido, la avenida.", B: "Al número de emergencias. Di: accidente de tránsito, un herido consciente, en la avenida.", C: "Al de emergencias. Y di esto, en orden: accidente de tránsito, un herido consciente, avenida, frente al cine." },
            reply: { A: "Vanesa llama y repite tus palabras. «Vienen. Gracias. Y gracias al libro.»", B: "Vanesa llama y repite tus palabras una por una. «Ya vienen. Gracias… a ti y a tu libro.»", C: "Vanesa llama y repite tu frase como un guion. «Vienen en cinco minutos. Gracias a ti y a ese libro.»" },
            mood: "neutral", end: "libro-llama",
          },
          {
            id: "risa",
            say: { A: "Está en la página uno. Lo lee cualquier niño.", B: "Está en la primera página del libro. Lo sabe cualquier niño.", C: "Viene en la primera página de ese libro. Un niño de ocho años lo sabe." },
            reply: { A: "Rolo se ríe desde el suelo. Vanesa también, con lágrimas. «Está bien, está bien. Llamo.»", B: "Rolo se ríe desde el suelo y Vanesa, entre lágrimas, también. «Está bien, me lo merezco. Ya llamo.»", C: "Rolo se ríe desde el suelo y a Vanesa se le escapa una risa con lágrimas. «Me lo merezco. Ya llamo, ya llamo.»" },
            mood: "laugh", end: "libro-llama",
          },
          {
            id: "dejar",
            say: { A: "Quédate con el libro. Llama tú. Yo me voy.", B: "Quédate con el libro y llama tú. Yo tengo que irme.", C: "Quédate el libro, llama tú y hazlo bien. Yo sigo mi camino." },
            reply: { A: "Vanesa abraza el libro. «Gracias.» Rolo, desde el suelo: «¿Y a mí quién me lee?»", B: "Vanesa abraza el libro contra el pecho. «Gracias.» Rolo, desde el suelo: «¿Y a mí quién me lee ahora?»", C: "Vanesa abraza el libro como un salvavidas. «Gracias.» Rolo, desde el suelo: «Perfecto, ella se queda la novela y yo la hemorragia.»" },
            mood: "neutral", end: "libro-sienta",
          },
        ],
      },

      // ── corazón: el corazón apaga los gritos y los dos ayudan.
      "corazon-inicio": {
        who: "vanesa", mood: "sad",
        line: {
          A: "Usas el corazón. Vanesa deja de gritar y llora. «No lo vi. Tengo una niña pequeña en casa. No lo vi.»",
          B: "Usas el corazón. Vanesa se queda sin gritos y rompe a llorar. «No lo vi. Tengo una niña pequeña en casa y estaba pensando en ella. No lo vi.»",
          C: "Usas el corazón. Los gritos de Vanesa se apagan y lo que queda es llanto. «No lo vi. Tengo una niña pequeña en casa, iba pensando en ella, y no lo vi.»",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Ven aquí. Ya está. Vamos a ayudarlo.", B: "Ven aquí. Ya pasó lo peor. Ahora lo ayudamos.", C: "Ven aquí. Lo peor ya pasó; lo que queda es ayudar, y eso sí sabes hacerlo." },
            reply: { A: "Vanesa te abraza y llora. Rolo, desde el suelo: «Yo también quiero un abrazo.»", B: "Vanesa te abraza y llora en tu hombro. Rolo, desde el suelo: «Oigan, el herido también quiere abrazo.»", C: "Vanesa se abraza a ti y llora sin vergüenza. Rolo, desde el suelo: «Cuando terminen, el de la sangre también acepta abrazos.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "primero",
            say: { A: "Primero él. Después tú. Vamos.", B: "Primero él, que sangra. Después hablamos de ti. Vamos.", C: "Primero el que sangra; después tu miedo, que también cuenta. Vamos." },
            reply: { A: "Vanesa se seca la cara y se agacha junto a Rolo. «Perdón. ¿Qué necesitas?»", B: "Vanesa se seca la cara con la manga y se arrodilla junto a Rolo. «Perdóname. Dime qué necesitas.»", C: "Vanesa se limpia la cara con la manga del blazer y se arrodilla junto a Rolo. «Perdóname. Dime qué necesitas y lo hago.»" },
            mood: "love", next: "corazon-juntos",
          },
          {
            id: "llamar",
            say: { A: "Llama a la ambulancia. Yo me quedo con él.", B: "Llama tú a la ambulancia. Yo me quedo con él hasta que lleguen.", C: "Llama tú a la ambulancia; yo me quedo con él. Repartir tareas calma más que cualquier consejo." },
            reply: { A: "Vanesa llama. Rolo te mira: «Esa mujer era otra persona hace un minuto.»", B: "Vanesa llama con la voz rota pero clara. Rolo te mira: «Hace un minuto esa mujer era otra persona.»", C: "Vanesa llama con la voz rota pero precisa. Rolo te mira: «Hace un minuto esa mujer quería matarme. ¿Qué le hiciste?»" },
            mood: "love", next: "corazon-juntos",
          },
        ],
      },
      "corazon-juntos": {
        who: "rolo", mood: "smile",
        line: {
          A: "Vanesa sostiene la cabeza de Rolo. Él sonríe. «Qué raro. Ella me chocó y ahora me cuida. ¿Y la bici?»",
          B: "Vanesa sostiene la cabeza de Rolo con las dos manos. Él sonríe, mareado. «Qué raro todo: me chocas y ahora me cuidas. ¿Y mi bici, qué?»",
          C: "Vanesa le sostiene la cabeza a Rolo con una delicadeza que nadie esperaba. Él sonríe: «Me atropellas y me cuidas. Solo falta que me pagues la bici.»",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "La bici después. Ahora, la ambulancia.", B: "La bici se arregla después. Ahora lo importante es la ambulancia.", C: "La bici tiene arreglo; la cabeza, no siempre. La ambulancia primero." },
            reply: { A: "Vanesa asiente. «La bici la pago yo. Y la ambulancia.» Rolo cierra los ojos, tranquilo.", B: "Vanesa asiente sin dudar. «La bici la pago yo. Y la ambulancia. Y lo que haga falta.» Rolo cierra los ojos, tranquilo.", C: "Vanesa asiente: «Bici, ambulancia y lo que venga. Lo pago yo.» Rolo cierra los ojos, por fin tranquilo." },
            mood: "love", end: "corazon-ambulancia",
          },
          {
            id: "amigos",
            say: { A: "Mírense. Hace un minuto querían pelear.", B: "Mírense los dos. Hace un minuto se querían matar y ahora parecen amigos.", C: "Mírense: hace un minuto eran enemigos y ahora parecen una pareja de voluntarios." },
            reply: { A: "Vanesa y Rolo se ríen. «Bueno, enemigos no. Vecinos», dice ella.", B: "Vanesa y Rolo se ríen. «Enemigos no… vecinos», dice ella. «Vivo a dos calles.»", C: "Los dos se ríen. «Enemigos no», dice Vanesa, «vecinos de dos calles. Mañana te llevo la bici al taller yo misma.»" },
            mood: "love", end: "corazon-vecinos",
          },
          {
            id: "irse",
            say: { A: "Ya están bien los dos. Me voy.", B: "Ya se cuidan solos. Yo sigo mi camino.", C: "Ya no me necesitan: se cuidan mejor de lo que yo podría. Sigo mi camino." },
            reply: { A: "Vanesa te sonríe. «Gracias. No sé qué hiciste, pero gracias.»", B: "Vanesa te sonríe con la cara mojada. «No sé qué hiciste, pero gracias.»", C: "Vanesa te sonríe con las mejillas todavía húmedas. «No sé qué hiciste, pero funcionó. Gracias.»" },
            mood: "love", end: "corazon-vecinos",
          },
        ],
      },
    },
    ends: {
      ambulancia: { text: { A: "La ambulancia llega. Rolo se va en camilla. Vanesa se queda sola junto a su auto roto.", B: "La ambulancia llega en seis minutos. Rolo se va en camilla, con el casco en el pecho. Vanesa se queda sola junto a su auto roto.", C: "La ambulancia llega en seis minutos y Rolo se va en camilla con el casco sobre el pecho. Vanesa se queda sola junto a su auto, sin nadie a quien gritar." }, change: "ambulancia", recap: "Llamaste a una ambulancia para el repartidor herido en la avenida." },
      datos: { text: { A: "Rolo guarda el papel con los datos. Vanesa se va despacio con el faro roto.", B: "Rolo guarda el papel con el nombre, el teléfono y el seguro de Vanesa. Ella se va despacio, con el faro roto colgando.", C: "Rolo guarda el papel con los datos de Vanesa como si fuera un cheque. Ella se aleja a paso de tortuga con el faro roto golpeando la carrocería." }, change: "llama", recap: "Conseguiste que la conductora le diera sus datos al herido." },
      policia: { text: { A: "Llega la policía. Vanesa llora. Rolo cuenta todo. Tú también.", B: "Llega una patrulla. Vanesa llora mientras un agente le pide la licencia. Rolo cuenta todo y tú confirmas cada palabra.", C: "Llega una patrulla y Vanesa llora mientras un agente le pide una licencia que, al parecer, no existe. Rolo cuenta todo y tú confirmas cada palabra." }, change: "policia", recap: "La policía se encargó del choque de la avenida." },
      empujon: { text: { A: "Vanesa te empuja otra vez. Un vecino la aparta. Rolo grita. La avenida es un caos.", B: "Vanesa te empuja de nuevo; un vecino del cine la aparta a la fuerza y Rolo grita desde el suelo. La avenida se convierte en un caos.", C: "Vanesa vuelve a empujarte; un vecino que salía del cine la aparta con más fuerza de la necesaria y Rolo grita desde el suelo. La avenida se vuelve un caos." }, change: "pelea", recap: "La discusión del choque terminó a empujones." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Vanesa cuenta su versión. Rolo intenta explicar que lo ayudaste.", B: "Llega la policía y lo primero que hacen es quitarte el cuchillo. Vanesa cuenta su versión a gritos; Rolo intenta explicar que tú solo querías ayudar.", C: "Llega la policía y te desarman antes de saludar. Vanesa da su versión a gritos; Rolo, desde el suelo, intenta explicar que el cuchillo era para la correa." }, change: "policia", recap: "Tu cuchillo convirtió el choque en un asunto policial." },
      "cuchillo-libre": { text: { A: "Rolo tiene la pierna libre. La ambulancia llega. Vanesa no vuelve a mencionar el cuchillo.", B: "Rolo tiene la pierna libre y la ambulancia llega enseguida. Vanesa no vuelve a mencionar el cuchillo, y tú tampoco.", C: "Rolo tiene la pierna libre y la ambulancia llega sin preguntas. El cuchillo no vuelve a mencionarse, por acuerdo tácito de los tres." }, change: "ambulancia", recap: "Cortaste la correa que atrapaba al herido y llegó la ambulancia." },
      "cuchillo-pacto": { text: { A: "Vanesa llama a la ambulancia. Nadie habla del cuchillo. Rolo te guiña un ojo.", B: "Vanesa llama a la ambulancia y a su seguro. Nadie menciona el cuchillo. Rolo te guiña un ojo desde el suelo.", C: "Vanesa llama a la ambulancia y al seguro, borrada ya la evidencia. Nadie menciona el cuchillo. Rolo te guiña un ojo desde el suelo." }, change: "llama", recap: "El video del cuchillo desapareció y la conductora llamó a la ambulancia." },
      "cuchillo-huye": { text: { A: "Vanesa huye en el auto roto. Rolo tiene tu cuchillo y una pierna libre. Nadie tiene la placa.", B: "Vanesa huye con el auto roto. Rolo se queda con tu cuchillo, la pierna libre y ninguna placa anotada.", C: "Vanesa huye con el auto roto y el faro arrastrando. Rolo se queda con tu cuchillo, la pierna libre y ni un número de placa." }, change: "huye", recap: "La conductora huyó al ver dos cuchillos en la acera." },
      "pistola-huye": { text: { A: "Vanesa se va a toda velocidad. Rolo se queda sin seguro. Tú guardas la pistola.", B: "Vanesa se va a toda velocidad por la avenida. Rolo se queda sin seguro, sin bici y con tu pistola como único recuerdo.", C: "Vanesa desaparece por la avenida a toda velocidad. Rolo se queda sin seguro ni bici, y con tu pistola como la peor idea de la noche." }, change: "huye", recap: "La pistola espantó a la conductora antes de dar sus datos." },
      "pistola-seguro": { text: { A: "Vanesa llama al seguro y a la ambulancia. Rolo guarda el papel. Tú guardas la pistola.", B: "Vanesa llama al seguro y a la ambulancia sin discutir. Rolo guarda el papel firmado y tú guardas la pistola, por fin.", C: "Vanesa hace las dos llamadas sin discutir y Rolo guarda el papel firmado. La pistola vuelve a la chaqueta, donde debió quedarse." }, change: "llama", recap: "Con la pistola a la vista, la conductora dio todos sus datos." },
      "pistola-policia": { text: { A: "La policía te apunta. Levantas las manos. Rolo grita: «¡Él me ayudó!» No sirve.", B: "La patrulla te apunta y tú levantas las manos. Rolo grita «¡Él me ayudó!», pero esta noche eso no sirve.", C: "Dos agentes te apuntan y levantas las manos. Rolo grita «¡Él me ayudó!», un detalle que a nadie le interesa ahora." }, change: "manos-arriba", recap: "La pistola convirtió el choque en tu detención." },
      "pistola-ambulancia": { text: { A: "Llega la ambulancia. Rolo se va en camilla. Vanesa te mira: «Nunca vi la pistola.»", B: "Llega la ambulancia y Rolo se va en camilla. Vanesa te mira desde la acera: «Yo nunca vi ninguna pistola.»", C: "Llega la ambulancia y Rolo se va en camilla. Vanesa, desde la acera, te dedica una frase: «Yo no vi ninguna pistola. Nunca.»" }, change: "ambulancia", recap: "Guardaste la pistola a tiempo y la ambulancia llegó." },
      "granada-huye": { text: { A: "Corres por la avenida. Atrás, sirenas. Rolo y Vanesa ya no están.", B: "Corres por la avenida vacía mientras las sirenas se acercan. Atrás, Rolo y Vanesa ya no están.", C: "Corres por una avenida desierta mientras las sirenas se multiplican. Atrás, ni Rolo ni Vanesa: la granada vació hasta el accidente." }, change: "huye", recap: "La granada vació la avenida y tuviste que huir." },
      "granada-risa": { text: { A: "La granada falsa vuelve a tu bolsillo. Llega la ambulancia. Vanesa paga, Rolo se ríe.", B: "La granada falsa vuelve a tu bolsillo. Llega la ambulancia, Vanesa promete pagar todo y Rolo se ríe hasta la camilla.", C: "La granada vuelve a tu bolsillo, la ambulancia llega y Vanesa promete pagar hasta la risa de Rolo, que no para." }, change: "ambulancia", recap: "Tu granada falsa terminó en risas y en una ambulancia." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la avenida. Policía por todas partes. Nadie cree que es falsa.", B: "Un helicóptero ilumina la avenida y la policía llega por todos lados. Nadie quiere oír que la granada es falsa.", C: "Un helicóptero clava su reflector en ti y la policía cierra la avenida. Que la granada sea falsa es, por ahora, un detalle sin importancia." }, change: "helicoptero", recap: "La granada trajo un helicóptero sobre el choque de la avenida." },
      "granada-policia": { text: { A: "La policía llega. Vanesa confiesa: pasó en rojo. A ti te llevan por la granada.", B: "Llega la policía. Vanesa confiesa entre lágrimas que pasó en rojo. A ti te llevan por la granada, falsa o no.", C: "Llega la policía y Vanesa confiesa entre lágrimas que pasó en rojo. A ti te llevan por la granada; que sea falsa lo discutirás mañana." }, change: "policia", recap: "La conductora confesó, pero la granada te llevó a la comisaría." },
      "gas-rociada": { text: { A: "Vanesa llora en el suelo. Rolo sangra. Llega la ambulancia para dos personas.", B: "Vanesa llora en el suelo con los ojos cerrados. Rolo sigue sangrando. La ambulancia llega para dos pacientes.", C: "Vanesa llora en el suelo sin poder abrir los ojos; Rolo sigue sangrando. La ambulancia llega y se encuentra con dos pacientes en vez de uno." }, change: "cae", recap: "Usaste el gas pimienta contra la conductora del choque." },
      "gas-calma": { text: { A: "Vanesa escribe sus datos sentada en la acera. Guardas el gas. Rolo respira.", B: "Vanesa escribe sus datos sentada en la acera, sin gritar. Guardas el gas pimienta y Rolo respira aliviado.", C: "Vanesa escribe sus datos en la acera, sin una queja. Guardas el gas y Rolo respira como si fuera la primera vez en la noche." }, change: "se-sienta", recap: "El gas pimienta calmó a la conductora sin usarlo." },
      "gas-policia": { text: { A: "Llega la policía. Ven el gas, ven la sangre. Tú explicas, ella explica, nadie se cree nada.", B: "Llega la policía y lo primero que ve es tu gas pimienta y la sangre de Rolo. Tú explicas, ella explica y nadie cree a nadie.", C: "Llega la policía y lo primero que registra es tu gas pimienta y la sangre de Rolo. Tú explicas, ella explica y nadie cree a nadie, salvo Rolo." }, change: "policia", recap: "El gas pimienta hizo que la policía dudara de todos." },
      "lapiz-datos": { text: { A: "Rolo y Vanesa tienen el número del otro. Tu lápiz tiene sangre. Todos se van.", B: "Rolo y Vanesa tienen el teléfono del otro, escrito con tu lápiz. Ella se va despacio; él espera un taxi.", C: "Rolo y Vanesa se llevan el teléfono del otro, escrito con tu lápiz y una huella roja. Ella se va despacio; él espera un taxi con la bici muerta al lado." }, change: "llama", recap: "Tu lápiz sirvió para que el herido y la conductora intercambiaran números." },
      "lapiz-firma": { text: { A: "Vanesa firma el papel. Llama a la ambulancia. Rolo guarda el acta con tu lápiz.", B: "Vanesa firma el papel y llama a la ambulancia. Rolo guarda el acta como un tesoro. Tú te quedas sin lápiz.", C: "Vanesa firma, llama a la ambulancia y hasta sonríe. Rolo guarda el acta como un tesoro y tú te quedas sin lápiz, pero con un testimonio." }, change: "sonrie", recap: "Escribiste un acta del choque y la conductora la firmó." },
      "lapiz-rompe": { text: { A: "El papel está roto en la acera. Nadie tiene nada. Tu lápiz tampoco sirvió.", B: "El papel queda en pedazos sobre la acera. Nadie tiene los datos de nadie y tu lápiz no sirvió de mucho.", C: "El papel queda hecho trizas en la acera. Nadie tiene los datos de nadie, y tu lápiz solo sirvió para alimentar una pelea." }, change: "enojado", recap: "El acta del choque terminó rota en la acera." },
      "lapiz-verdad": { text: { A: "Vanesa admite que pasó en rojo. Tu dibujo va con Rolo al hospital.", B: "Vanesa admite que pasó en rojo, sentada en la acera. Tu croquis viaja con Rolo en la ambulancia.", C: "Vanesa admite en la acera que pasó en rojo. Tu croquis viaja con Rolo en la ambulancia, como prueba y como recuerdo." }, change: "ambulancia", recap: "Tu croquis del choque hizo confesar a la conductora." },
      "libro-ambulancia": { text: { A: "La ambulancia llega. Rolo se lleva tu libro. Vanesa se queda en la acera, callada.", B: "La ambulancia llega en el capítulo dos. Rolo se lleva tu libro en la camilla. Vanesa se queda en la acera, callada.", C: "La ambulancia llega en el capítulo dos y Rolo se lleva tu libro en la camilla. Vanesa se queda en la acera, callada por primera vez en la noche." }, change: "ambulancia", recap: "Tu libro fue almohada y cuento hasta que llegó la ambulancia." },
      "libro-llora": { text: { A: "Vanesa llora junto a Rolo. Él sostiene tu libro. La ambulancia viene en camino.", B: "Vanesa llora sentada junto a Rolo, que abraza tu libro. La ambulancia ya viene en camino.", C: "Vanesa llora sentada junto a Rolo, que abraza tu libro como un premio. La ambulancia ya viene; el ruido de la avenida se ha vuelto respetuoso." }, change: "triste", recap: "Tu libro quedó con el herido y la conductora lloró a su lado." },
      "libro-llama": { text: { A: "Vanesa llama a emergencias con tu libro en la mano. Ya vienen. Rolo cierra los ojos.", B: "Vanesa llama a emergencias con tu libro en la otra mano. Ya vienen. Rolo cierra los ojos, tranquilo.", C: "Vanesa llama a emergencias con tu libro bajo el brazo. Ya vienen. Rolo cierra los ojos; la página uno funcionó." }, change: "llama", recap: "La página de emergencias de tu libro le dijo a la conductora qué hacer." },
      "libro-sienta": { text: { A: "Vanesa se sienta en la acera junto a Rolo con tu libro. Nadie grita.", B: "Vanesa se sienta en la acera junto a Rolo, con tu libro en las rodillas. Nadie grita; la avenida vuelve a su ruido normal.", C: "Vanesa se sienta en la acera junto a Rolo, con tu libro en las rodillas. Nadie grita, y la avenida recupera su ruido de siempre." }, change: "se-sienta", recap: "Tu libro bajó la tensión del choque de la avenida." },
      "corazon-abrazo": { text: { A: "Vanesa te abraza. Después abraza a Rolo. La ambulancia llega a una escena de paz.", B: "Vanesa te abraza y después abraza a Rolo, con cuidado. La ambulancia llega a una escena que parece de otra noche.", C: "Vanesa te abraza y luego abraza a Rolo con una delicadeza nueva. La ambulancia llega a una escena que parece robada de otra noche." }, change: "abraza", recap: "El corazón convirtió los gritos del choque en un abrazo." },
      "corazon-ambulancia": { text: { A: "Vanesa va con Rolo en la ambulancia. Dice que paga todo. Él sonríe.", B: "Vanesa sube con Rolo a la ambulancia y promete pagar la bici y el médico. Él sonríe desde la camilla.", C: "Vanesa sube a la ambulancia con Rolo y promete pagar bici, médico y lo que falte. Él sonríe desde la camilla como quien ganó algo." }, change: "ambulancia", recap: "La conductora acompañó al herido en la ambulancia." },
      "corazon-vecinos": { text: { A: "Vanesa y Rolo esperan juntos la ambulancia. Hablan como vecinos. Tú sigues tu camino.", B: "Vanesa y Rolo esperan la ambulancia sentados juntos, hablando como vecinos de toda la vida. Tú sigues tu camino.", C: "Vanesa y Rolo esperan la ambulancia sentados en la acera, hablando como vecinos de toda la vida. Tú sigues tu camino con una sonrisa inexplicable." }, change: "sonrie", recap: "El choque de la avenida terminó con dos vecinos hablando en la acera." },
    },
    speak: {
      A1: "¿Qué haces si ves un accidente en la calle?",
      A2: "¿Has visto alguna vez un choque entre un auto y una bicicleta?",
      B1: "¿Qué harías si fueras testigo de un accidente y los dos conductores gritaran?",
      B2: "¿Alguna vez has tenido que elegir entre decir la verdad y evitar un conflicto?",
      C1: "¿Qué peso tiene un testigo imparcial en una discusión donde cada parte grita su propia verdad?",
      C2: "¿Hasta qué punto nuestra versión de un accidente depende de nuestro miedo a las consecuencias?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si una persona tiene miedo de ti?", B: "¿Has asustado alguna vez a alguien sin querer, y cómo lo arreglaste?", C: "¿Cómo se explica una buena intención cuando lo que se ve en tu mano dice lo contrario?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando alguien te da una orden?", B: "¿Alguna vez conseguiste algo por miedo y no por razón?", C: "¿Qué vale una confesión obtenida bajo miedo, y qué dice de quien la exige?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces cuando todos corren?", B: "¿Cuál fue el pánico más absurdo que viste en tu ciudad?", C: "¿Por qué una amenaza improbable vacía una calle más rápido que un peligro real?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte?", B: "¿Cuándo es razonable defenderse de alguien que solo grita?", C: "¿Dónde termina la prevención y empieza la amenaza cuando te sientes atacado?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué anotas cuando pasa algo importante?", B: "¿Has sido testigo de algo y lo escribiste para no olvidarlo?", C: "¿Qué cambia en una discusión cuando alguien empieza a tomar notas?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Qué libro llevas en tu bolsa?", B: "¿Para qué cosas raras has usado un libro, además de leerlo?", C: "¿Qué objeto cotidiano te ha servido alguna vez para una emergencia?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Cómo calmas a una persona que llora?", B: "¿Cómo consuelas a alguien que acaba de cometer un error grave?", C: "¿Por qué la ternura desarma a veces más rápido que cualquier argumento?" } },
    },
  },

  // ───────────────────────────── ESCENA 2 · CENTRO ─────────────────────────────
  {
    id: "centro-desmayo",
    kind: "escena",
    district: "centro",
    title: "Se cayó en la avenida",
    verb: "SOCORRER",
    goal: "Pedir una ambulancia, describir síntomas, dar instrucciones claras y tranquilizar a una hija asustada.",
    cast: [
      {
        id: "ofelia", name: "Ofelia", role: "Hija del hombre que se desmayó",
        age: "adult", body: "f", build: "average", height: 1.63,
        hair: "long", hairColor: "#4a2a16", skin: "#d9a77c",
        top: "cardigan", topColor: "#7a3d5c", bottom: "skirt", bottomColor: "#2a2a30",
        extras: ["glasses"], pose: "crouch", props: ["purse"],
      },
      {
        id: "teodoro", name: "Don Teodoro", role: "Hombre mayor caído en la acera",
        age: "old", body: "m", build: "heavy", height: 1.7,
        hair: "bald", hairColor: "#cfc8bc", skin: "#e0b089",
        top: "shirt", topColor: "#dfe6ee", bottom: "pants", bottomColor: "#3a3630",
        extras: ["tie"], pose: "fallen", props: ["hat"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ofelia", mood: "terror",
        line: {
          A: "Un hombre mayor está en el suelo, boca abajo. Una mujer grita: «¡Papá! ¡Papá!» Te ve. «¡Ayuda! ¡Mi celular no tiene batería! ¡Llama a alguien!»",
          B: "Un hombre mayor está tirado boca abajo en la acera, con el sombrero a un metro. Una mujer de rodillas grita: «¡Papá, contesta!» Te ve y suplica: «¡Mi celular está muerto! ¡Llama a una ambulancia, por favor!»",
          C: "Un hombre mayor yace boca abajo en la acera, el sombrero a un metro, como si lo hubiera dejado caer a propósito. Una mujer de rodillas le grita «¡Papá!» y, al verte, suplica: «¡Mi celular no tiene batería! ¡Llama a alguien, lo que sea!»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Ya llamo. ¿Cómo se llama él? ¿Qué edad tiene?", B: "Ya estoy llamando. ¿Cómo se llama él y qué edad tiene? Me lo van a preguntar.", C: "Estoy marcando. Dime su nombre y su edad, que es lo primero que van a preguntar." },
            reply: { A: "«Teodoro. Setenta y dos. ¡Rápido, por favor!»", B: "«Teodoro, setenta y dos años. Tiene el corazón delicado. ¡Rápido, por favor!»", C: "«Teodoro, setenta y dos, corazón delicado y una terquedad de hierro. ¡Rápido, por favor!»" },
            mood: "worried", next: "espera",
          },
          {
            id: "que-paso",
            say: { A: "¿Qué pasó? ¿Se cayó o se desmayó?", B: "¿Qué pasó exactamente? ¿Tropezó o se desmayó de repente?", C: "Cuéntame qué pasó: ¿tropezó, se desmayó, dijo algo antes de caer?" },
            reply: { A: "«Caminaba y dijo: “me duele el pecho”. Y se cayó.»", B: "«Veníamos del cine. Dijo que le dolía el pecho, se puso blanco y se cayó sin decir nada más.»", C: "«Veníamos del cine, tan tranquilos. Dijo “me aprieta el pecho”, se puso blanco como el papel y se vino abajo.»" },
            mood: "worried", next: "sintomas",
          },
          {
            id: "respira",
            say: { A: "Primero: ¿respira? Déjame ver.", B: "Lo primero: ¿respira? Déjame verlo un momento.", C: "Antes de nada, veamos si respira. Apártate un segundo, por favor." },
            reply: { A: "Ofelia se aparta. Pones la mano en su espalda. Sube y baja. Respira.", B: "Ofelia se aparta temblando. Pones la mano en la espalda del hombre: sube y baja. Respira, aunque muy despacio.", C: "Ofelia se aparta con las manos en la boca. Apoyas la mano en la espalda del hombre: sube y baja. Respira, lento pero respira." },
            mood: "neutral", next: "respira",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Mírame. Respira. Tu papá no está solo.", B: "Mírame a mí. Respira hondo. Tu papá no está solo y tú tampoco.", C: "Mírame y respira conmigo. Tu papá no está solo, y tú tampoco lo estás." },
            reply: { A: "Ofelia respira. Deja de gritar. «Gracias. Ayúdame.»", B: "Ofelia respira hondo y, por primera vez, deja de gritar. «Gracias. Dime qué hago.»", C: "Ofelia respira a tu ritmo y el grito se le apaga en la garganta. «Gracias. Dime qué hago y lo hago.»" },
            mood: "love", next: "corazon-ofelia",
          },
        },
      },
      sintomas: {
        who: "ofelia", mood: "worried",
        line: {
          A: "Ofelia saca una caja de pastillas del bolso. «Toma esto para el corazón. ¿Se la doy?»",
          B: "Ofelia revuelve el bolso y saca una caja de pastillas. «Toma esto para el corazón, todos los días. ¿Se la doy ahora?»",
          C: "Ofelia vacía medio bolso en la acera hasta dar con una caja de pastillas. «Es para el corazón, la toma cada mañana. ¿Se la doy ahora o lo empeoro?»",
        },
        options: [
          {
            id: "no-dar",
            say: { A: "No. Está inconsciente. Puede ahogarse.", B: "No, no le des nada. Está inconsciente y se puede ahogar.", C: "No le des nada: inconsciente, cualquier pastilla puede irse por el camino equivocado." },
            reply: { A: "Ofelia guarda la caja. «Tienes razón. ¿Y qué hago?»", B: "Ofelia guarda la caja con las manos temblando. «Tienes razón, perdón. ¿Entonces qué hago?»", C: "Ofelia guarda la caja. «Tienes razón, no pienso. ¿Qué hago, entonces?»" },
            mood: "worried", next: "respira",
          },
          {
            id: "ambulancia",
            say: { A: "Guárdala para los médicos. Llamo a la ambulancia.", B: "Guárdala y enséñasela a los médicos. Yo llamo a la ambulancia ahora mismo.", C: "Guárdala para enseñársela a los paramédicos; les ahorra preguntas. Llamo a la ambulancia." },
            reply: { A: "Ofelia asiente. «Sí. Diles que es del corazón.»", B: "Ofelia asiente sin parar. «Sí, sí. Diles que es del corazón, que lo sepan antes de llegar.»", C: "Ofelia asiente con la caja apretada contra el pecho. «Diles que es del corazón; que vengan sabiendo.»" },
            mood: "worried", next: "espera",
          },
          {
            id: "lado",
            say: { A: "Ayúdame a ponerlo de lado. Con cuidado.", B: "Ayúdame a ponerlo de lado, despacio, para que respire mejor.", C: "Ayúdame a ponerlo de lado, con cuidado con la cabeza: así respira mejor y no se ahoga." },
            reply: { A: "Lo giran entre los dos. Don Teodoro tose. Abre los ojos. «¿Dónde… estoy?»", B: "Lo giran entre los dos, muy despacio. Don Teodoro tose, abre los ojos y murmura: «¿Dónde estoy? ¿Y mi sombrero?»", C: "Lo giran entre los dos como si fuera de cristal. Don Teodoro tose, abre un ojo y pregunta: «¿Dónde estoy, y por qué me falta el sombrero?»" },
            mood: "surprised", end: "despierta",
          },
        ],
      },
      respira: {
        who: "teodoro", mood: "pain",
        line: {
          A: "Don Teodoro abre los ojos muy despacio. «Me… duele el pecho. No me muevan.» Ofelia llora de alivio.",
          B: "Don Teodoro abre los ojos con esfuerzo. «Me duele el pecho… no me muevan, por favor.» Ofelia llora de alivio y de miedo a la vez.",
          C: "Don Teodoro entreabre los ojos. «El pecho… me aprieta. No me muevan.» Ofelia llora de alivio y de miedo, todo junto, sin saber cuál gana.",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "No se mueva. Ya viene la ambulancia. Hable conmigo.", B: "No se mueva, don Teodoro. La ambulancia ya viene. Hable conmigo mientras tanto.", C: "No se mueva, don Teodoro. La ambulancia está en camino; mientras llega, hable conmigo de lo que quiera." },
            reply: { A: "«¿De qué hablamos?», dice él. «Del cine. La película era mala.»", B: "«¿De qué hablamos?», pregunta él, con un hilo de voz. «De la película. Era malísima. Tiene gracia caerse por una película mala.»", C: "«¿De qué hablamos?», susurra. «De la película: malísima. Sería injusto morirse después de una película así.»" },
            mood: "smile", end: "ambulancia",
          },
          {
            id: "farmacia",
            say: { A: "Hay una farmacia cerca. Voy a buscar ayuda.", B: "Hay una farmacia a dos calles. Voy corriendo a buscar ayuda.", C: "A dos calles hay una farmacia abierta. Voy corriendo por ayuda; no tardo." },
            reply: { A: "Ofelia grita: «¡No me dejes sola!» Pero ya corres.", B: "Ofelia grita a tu espalda: «¡No me dejes sola con él!» Pero ya estás corriendo.", C: "Ofelia grita a tu espalda: «¡No me dejes sola!» Pero ya corres, con la avenida vacía por delante." },
            mood: "worried", end: "farmacia",
          },
          {
            id: "mano",
            say: { A: "Deme la mano. Ofelia, llama tú desde mi celular.", B: "Deme la mano, don Teodoro. Ofelia, llama tú desde mi celular, yo me quedo con él.", C: "Deme la mano, don Teodoro. Ofelia, toma mi celular y llama tú; yo no lo suelto." },
            reply: { A: "Don Teodoro aprieta tu mano. Ofelia llama. «Ya vienen.»", B: "Don Teodoro te aprieta la mano con una fuerza sorprendente. Ofelia llama con tu celular: «Ya vienen. Ocho minutos.»", C: "Don Teodoro te aprieta la mano con una fuerza que no esperabas. Ofelia llama desde tu celular: «Ocho minutos. Aguanta, papá.»" },
            mood: "worried", end: "ambulancia",
          },
        ],
      },
      espera: {
        who: "ofelia", mood: "worried",
        line: {
          A: "«Ocho minutos», dice la operadora. Ofelia mira la calle. «Ocho minutos es mucho. ¿Qué hacemos ahora?»",
          B: "«Ocho minutos», dice la operadora antes de colgar. Ofelia mira la avenida vacía. «Ocho minutos es una eternidad. ¿Qué hacemos mientras tanto?»",
          C: "«Ocho minutos», promete la operadora. Ofelia mira la avenida como si pudiera acortarla. «Ocho minutos es una eternidad. ¿Qué hacemos mientras tanto?»",
        },
        options: [
          {
            id: "lado",
            say: { A: "Lo ponemos de lado. Así respira mejor.", B: "Lo ponemos de lado, con cuidado. Así respira mejor y no se ahoga.", C: "Lo giramos de lado con cuidado: respira mejor y, si vomita, no se ahoga." },
            reply: { A: "Lo giran. Don Teodoro tose y abre los ojos. «¿Quién eres tú?»", B: "Lo giran despacio. Don Teodoro tose, abre los ojos y te mira: «¿Y tú quién eres?»", C: "Lo giran despacio y Don Teodoro tose, abre los ojos y te mira con desconfianza: «¿Y este señor quién es?»" },
            mood: "surprised", end: "despierta",
          },
          {
            id: "abrigo",
            say: { A: "Le pongo mi chaqueta. Hace frío.", B: "Le pongo mi chaqueta encima. Hace frío y está muy pálido.", C: "Le pongo mi chaqueta: hace frío, está pálido y el suelo le roba el calor." },
            reply: { A: "Ofelia le toma la mano. «Papá, aguanta.» Él mueve los dedos.", B: "Ofelia le toma la mano mientras tú lo tapas. «Papá, aguanta, ya vienen.» Él mueve los dedos.", C: "Ofelia le toma la mano mientras lo tapas. «Papá, aguanta.» Él responde moviendo apenas los dedos, como quien firma." },
            mood: "sad", end: "ambulancia",
          },
          {
            id: "hablar",
            say: { A: "Háblale. Dile que estás aquí.", B: "Háblale, aunque no responda. Dile que estás aquí.", C: "Háblale, aunque parezca que no te oye. Dile que estás aquí y no pares de decirlo." },
            reply: { A: "Ofelia le habla al oído. «Papá, soy yo.» Él abre los ojos. «Ya lo sé, hija.»", B: "Ofelia se inclina y le habla al oído: «Papá, soy yo, estoy aquí.» Él abre los ojos: «Ya lo sé, hija. Gritas mucho.»", C: "Ofelia le habla al oído: «Papá, estoy aquí.» Don Teodoro abre un ojo: «Ya lo sé, hija; te oye toda la avenida.»" },
            mood: "smile", end: "despierta",
          },
        ],
      },

      // ── cuchillo: cortas la corbata para que respire y Ofelia grita.
      "cuchillo-inicio": {
        who: "ofelia", mood: "terror",
        line: {
          A: "Sacas el cuchillo para cortar la corbata que le aprieta el cuello. Ofelia grita: «¡No lo toques! ¿Qué haces con un cuchillo? ¡Socorro!»",
          B: "Sacas el cuchillo para cortar la corbata que le aprieta el cuello. Ofelia se lanza sobre su padre gritando: «¡No lo toques! ¿Qué haces con un cuchillo? ¡Socorro!»",
          C: "Sacas el cuchillo para cortar la corbata que le estrangula el cuello. Ofelia se arroja sobre su padre como un escudo: «¡No lo toques! ¿Qué haces con un cuchillo? ¡Socorro!»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Es la corbata. Le aprieta. La corto y respira mejor.", B: "Es solo la corbata: le aprieta el cuello. La corto y va a respirar mejor.", C: "Es por la corbata: le está cerrando la garganta. Un corte y respira; no voy a tocarlo a él." },
            reply: { A: "Ofelia mira la corbata. «Ay… sí. Pero corta despacio. Por favor.»", B: "Ofelia mira la corbata apretada y entiende. «Ay, Dios… sí. Pero corta despacio, por favor, despacio.»", C: "Ofelia mira la corbata y lo entiende de golpe. «Sí, sí… Pero despacio, por favor, que es mi padre y no un paquete.»" },
            mood: "worried", next: "cuchillo-corbata",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Aflojo la corbata con las manos.", B: "Perdona, tienes razón. Lo guardo y le aflojo la corbata con las manos.", C: "Perdona, el cuchillo sobraba. Lo guardo y le aflojo la corbata con los dedos, como una persona normal." },
            reply: { A: "Ofelia respira. Aflojas el nudo. Don Teodoro tose.", B: "Ofelia respira de nuevo. Aflojas el nudo con los dedos y Don Teodoro tose, como si volviera de lejos.", C: "Ofelia suelta el aire. Aflojas el nudo con los dedos y Don Teodoro tose, de vuelta de donde estaba." },
            mood: "worried", next: "respira",
          },
          {
            id: "apartar",
            say: { A: "¡Apártate! ¡No hay tiempo!", B: "¡Apártate, que no hay tiempo para explicaciones!", C: "¡Apártate ahora mismo, que cada segundo cuenta y tú estorbas!" },
            reply: { A: "Ofelia grita más fuerte. Un vecino sale del cine y llama a la policía.", B: "Ofelia grita todavía más fuerte. Un vecino que salía del cine ve el cuchillo y llama a la policía.", C: "Ofelia grita con todo el cuerpo. Un vecino que salía del cine ve el cuchillo, la mujer y el viejo en el suelo, y llama a la policía." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-corbata": {
        who: "teodoro", mood: "terror",
        line: {
          A: "Cortas la corbata. Don Teodoro abre los ojos y ve el cuchillo en su cuello. «¡Un asalto! ¡Ofelia, entrégale el dinero!»",
          B: "Cortas la corbata de un tajo. Don Teodoro abre los ojos y lo primero que ve es tu cuchillo junto a su cuello. «¡Nos asaltan! ¡Ofelia, entrégale todo!»",
          C: "Cortas la corbata de un tajo y Don Teodoro abre los ojos justo a tiempo para ver tu cuchillo a un palmo de su garganta. «¡Un asalto! ¡Ofelia, entrégale la cartera y que no nos mate!»",
        },
        options: [
          {
            id: "calmar",
            say: { A: "No es un asalto. Usted se cayó. Yo lo ayudo. Respire.", B: "No es un asalto, don Teodoro. Se desmayó y le corté la corbata para que respire. Tranquilo.", C: "Nadie lo asalta, don Teodoro. Se desmayó en la acera y la corbata lo estaba ahogando. Respire, que para eso la corté." },
            reply: { A: "Don Teodoro respira hondo. «Ah… Era una corbata fea.» Ofelia se ríe llorando.", B: "Don Teodoro respira hondo por primera vez. «Ah… Bueno, era una corbata horrible.» Ofelia se ríe y llora al mismo tiempo.", C: "Don Teodoro respira hondo, dos veces, y evalúa el daño. «Era una corbata espantosa, regalo de mi yerno.» Ofelia se ríe con la cara mojada." },
            mood: "smile", end: "cuchillo-respira",
          },
          {
            id: "ofelia",
            say: { A: "Ofelia, corre a la farmacia. Yo me quedo con él.", B: "Ofelia, corre a la farmacia y pide ayuda. Yo me quedo con él y guardo el cuchillo.", C: "Ofelia, corre a la farmacia de la esquina y trae ayuda. Yo me quedo con tu padre, y el cuchillo ya está guardado." },
            reply: { A: "Ofelia corre. Don Teodoro te mira: «Si eres ladrón, eres muy raro.»", B: "Ofelia sale corriendo. Don Teodoro te mira de reojo: «Si eres un ladrón, eres el más raro que he visto.»", C: "Ofelia sale disparada. Don Teodoro te estudia: «Si esto es un asalto, es el más amable de mi vida.»" },
            mood: "worried", end: "cuchillo-corre",
          },
          {
            id: "broma",
            say: { A: "Sí, es un asalto. Deme el sombrero.", B: "Sí, es un asalto: deme el sombrero y nadie sale herido.", C: "Correcto, es un asalto: entrégueme el sombrero y la corbata ya no cuenta." },
            reply: { A: "Don Teodoro grita. Ofelia grita. Un policía que pasa se acerca corriendo.", B: "Don Teodoro grita «¡Policía!», Ofelia grita más fuerte, y un policía que pasaba se acerca corriendo con la mano en el cinturón.", C: "Don Teodoro grita «¡Policía!», Ofelia lo duplica, y un agente que pasaba por la avenida llega corriendo sin ganas de bromas." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },

      // ── pistola: Ofelia cree que es un asalto y entrega todo.
      "pistola-inicio": {
        who: "ofelia", mood: "terror",
        line: {
          A: "Te agachas y se ve tu pistola. Ofelia te tira el bolso. «¡Toma todo! ¡Pero llama a una ambulancia, por favor!»",
          B: "Te agachas junto a él y la pistola asoma de tu chaqueta. Ofelia te lanza el bolso a los pies. «¡Llévate todo, pero llama a una ambulancia, te lo suplico!»",
          C: "Al agacharte, la pistola queda a la vista. Ofelia te lanza el bolso sin pensarlo: «¡Llévate todo, el dinero, el celular muerto, pero llama a una ambulancia!»",
        },
        options: [
          {
            id: "devolver",
            say: { A: "No quiero tu bolso. Guarda eso. Ya llamo.", B: "No quiero tu bolso, guárdalo. Estoy llamando a la ambulancia ahora mismo.", C: "No vine por tu bolso, guárdalo. Estoy marcando a emergencias mientras hablamos." },
            reply: { A: "Ofelia no toma el bolso. «¿Entonces por qué llevas eso?»", B: "Ofelia no se atreve a recoger el bolso. «¿Entonces… por qué llevas eso encima?»", C: "Ofelia deja el bolso donde cayó. «Entonces explícame por qué llevas eso encima a estas horas.»" },
            mood: "scared", next: "pistola-abuelo",
          },
          {
            id: "orden",
            say: { A: "Cálmate. Siéntate. Háblale a tu papá.", B: "Cálmate y siéntate. Háblale a tu papá mientras llamo.", C: "Siéntate y cálmate: tu trabajo es hablarle a tu padre, el mío es llamar." },
            reply: { A: "Ofelia obedece en silencio. Mira la pistola. Don Teodoro abre los ojos.", B: "Ofelia obedece en silencio, sin apartar la vista de tu chaqueta. Don Teodoro abre los ojos justo en ese momento.", C: "Ofelia obedece como un soldado, con la mirada clavada en tu chaqueta. Don Teodoro elige ese instante para abrir los ojos." },
            mood: "scared", next: "pistola-abuelo",
          },
          {
            id: "irse",
            say: { A: "Perdón. Mejor me voy. Llama tú.", B: "Perdón, no quería asustarte. Mejor me voy y llamas tú.", C: "Perdona, está claro que mi presencia no ayuda. Me voy y llamas tú." },
            reply: { A: "Ofelia arrastra a su padre hacia el portal. «¡No te acerques!»", B: "Ofelia arrastra a su padre por los brazos hacia un portal, gritando «¡No te acerques!». Él gime.", C: "Ofelia arrastra a su padre por las axilas hacia el portal más cercano, gritando «¡No te acerques!». Don Teodoro gime en cada tirón." },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },
      "pistola-abuelo": {
        who: "teodoro", mood: "scared",
        line: {
          A: "Don Teodoro ve la pistola y levanta las manos desde el suelo. «No dispare. Soy viejo. Llévese a mi hija, es más joven.»",
          B: "Don Teodoro ve la pistola y, tirado como está, levanta las dos manos. «No dispare, joven. Soy viejo y no valgo nada. Llévese a mi hija, es más joven.» Ofelia: «¡Papá!»",
          C: "Don Teodoro distingue la pistola y, acostado en la acera, levanta las manos. «No dispare, joven: soy viejo y no valgo un disparo. Llévese a mi hija, que tiene más futuro.» Ofelia: «¡Papá!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baje las manos. Nadie dispara. Usted se desmayó.", B: "Baje las manos, don Teodoro. Nadie va a disparar. Usted se desmayó y yo paré a ayudar.", C: "Baje las manos, que aquí nadie dispara. Se desmayó en la avenida y yo paré a ayudar, con lo que llevaba encima." },
            reply: { A: "Don Teodoro baja las manos. «Ah. Entonces gracias. ¿Y mi sombrero?»", B: "Don Teodoro baja las manos despacio. «Ah. Entonces gracias, supongo. ¿Y mi sombrero?»", C: "Don Teodoro baja las manos con dignidad. «Entonces le agradezco. ¿Y mi sombrero? Prefiero morirme con sombrero.»" },
            mood: "smile", end: "pistola-ambulancia",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Mire: ya está. Ofelia, llama.", B: "La guardo, ¿ven? Ya está. Ofelia, llama a la ambulancia desde mi celular.", C: "Guardada. ¿Ven? Ya no existe. Ofelia, toma mi celular y llama, que yo lo tapo con la chaqueta." },
            reply: { A: "Ofelia llama. Una patrulla pasa despacio y frena al ver al hombre en el suelo.", B: "Ofelia llama con tu celular. Justo entonces una patrulla pasa despacio y frena al ver a un hombre en el suelo.", C: "Ofelia llama desde tu celular. Una patrulla pasa a paso de hombre, ve a un hombre en el suelo y frena en seco." },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "hija",
            say: { A: "Su hija no me interesa. Usted, sí. ¿Qué le duele?", B: "Su hija no me interesa, don Teodoro. Me interesa usted. ¿Qué le duele?", C: "Deje a su hija fuera de esto; el único que me importa es usted. ¿Qué le duele exactamente?" },
            reply: { A: "«El pecho. Y el orgullo.» Ofelia se ríe llorando.", B: "«El pecho», dice. «Y un poco el orgullo, por lo de las manos.» Ofelia se ríe entre lágrimas.", C: "«El pecho», admite. «Y el orgullo, por haber levantado las manos como en las películas.» Ofelia se ríe llorando." },
            mood: "smile", end: "pistola-ambulancia",
          },
        ],
      },

      // ── granada: los balcones de la avenida se llenan de gente.
      "granada-inicio": {
        who: "ofelia", mood: "terror",
        line: {
          A: "Buscas el celular y sacas la granada. Ofelia grita: «¡Una granada! ¡Vecinos, ayuda!» Se encienden luces en los balcones.",
          B: "Buscas el celular y lo que sale es la granada. Ofelia grita: «¡Una bomba! ¡Vecinos, ayuda!» En tres segundos se encienden todos los balcones de la avenida.",
          C: "Buscas el celular y la mano vuelve con la granada. Ofelia grita «¡Una bomba! ¡Vecinos!» y la avenida entera se asoma a los balcones como si fuera un desfile.",
        },
        options: [
          {
            id: "falsa",
            say: { A: "¡Es falsa! ¡Es un llavero! ¡Mira!", B: "¡Es falsa! ¡Es un llavero, nada más! ¡Mira, no pesa nada!", C: "¡Es falsa, es un llavero ridículo! ¡Mira, pesa menos que tu bolso!" },
            reply: { A: "Un vecino grita: «¡Ya llamé a la policía!» Ofelia: «¡Mi papá no respira bien!»", B: "Un vecino grita desde el balcón: «¡Ya llamé a la policía!» Ofelia, desesperada: «¡Mi papá no respira bien, llamen a una ambulancia, no a la policía!»", C: "Un vecino anuncia desde el balcón: «¡Ya avisé a la policía!» Ofelia, al borde: «¡Es mi padre el que no respira! ¡Ambulancia, no policía!»" },
            mood: "scared", next: "granada-vecinos",
          },
          {
            id: "usar",
            say: { A: "¡Vecinos! ¡Llamen a una ambulancia o tiro esto!", B: "¡Vecinos! ¡Llamen a una ambulancia ahora mismo o tiro esto!", C: "¡Vecinos! ¡O alguien llama a una ambulancia ya, o esto vuela por los aires!" },
            reply: { A: "Diez personas llaman a la vez. Ofelia te mira con horror y gratitud.", B: "Diez vecinos llaman a la vez desde diez balcones. Ofelia te mira con una mezcla de horror y gratitud.", C: "Diez balcones marcan a la vez. Ofelia te mira con horror, gratitud y una pregunta que no se atreve a hacer." },
            mood: "terror", next: "granada-vecinos",
          },
          {
            id: "huir",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, perdón! ¡Me voy ahora mismo!", C: "¡Perdón! ¡Olviden que me vieron! ¡Me voy!" },
            reply: { A: "Corres. Ofelia grita: «¡Y la ambulancia!» Los balcones te siguen con la mirada.", B: "Sales corriendo. Ofelia grita a tu espalda: «¡¿Y la ambulancia?!» Los balcones te siguen con la mirada hasta la esquina.", C: "Sales corriendo. Ofelia grita «¡¿Y la ambulancia?!» y los balcones te acompañan con la mirada hasta la esquina del cine." },
            mood: "terror", end: "granada-huye",
          },
        ],
      },
      "granada-vecinos": {
        who: "teodoro", mood: "surprised",
        line: {
          A: "Con tanto grito, Don Teodoro abre los ojos. Ve la granada. «¿Estoy muerto? ¿Es la guerra?» Ofelia: «¡Papá!»",
          B: "Con tanto grito, Don Teodoro abre los ojos, ve la granada y se incorpora un poco. «¿Me morí? ¿Es la guerra otra vez?» Ofelia lo abraza: «¡Papá, estás vivo!»",
          C: "Entre tanto grito, Don Teodoro abre los ojos, ve la granada en tu mano y se incorpora sobre un codo. «¿Me morí y esto es la guerra otra vez?» Ofelia lo abraza: «¡Papá, estás vivo!»",
        },
        options: [
          {
            id: "risa",
            say: { A: "No es la guerra. Es un llavero. Y usted está vivo.", B: "No es la guerra, don Teodoro. Es un llavero y usted está vivo, para disgusto de los balcones.", C: "No es la guerra, don Teodoro: es un llavero de mal gusto y usted está más vivo que los balcones." },
            reply: { A: "Don Teodoro se ríe. «Un llavero me despertó. Qué vergüenza.» Los vecinos aplauden.", B: "Don Teodoro se ríe con dolor. «Un llavero me resucitó. Qué vergüenza.» En los balcones alguien empieza a aplaudir.", C: "Don Teodoro ríe, con una mano en el pecho. «Me resucitó un llavero. No se lo cuenten a nadie.» Los balcones aplauden." },
            mood: "laugh", end: "granada-risa",
          },
          {
            id: "helicoptero",
            say: { A: "Tranquilo. Ya vienen todos. Mire el cielo.", B: "Tranquilo, don Teodoro. Ya vienen todos. Mire el cielo.", C: "Tranquilo, don Teodoro, viene la ciudad entera. Mire el cielo, que el espectáculo es suyo." },
            reply: { A: "Un helicóptero ilumina la avenida. Ofelia: «¡Por fin alguien viene!»", B: "Un helicóptero aparece sobre la avenida y los ilumina a los tres. Ofelia: «¡Por fin alguien viene por mi papá!»", C: "Un helicóptero clava el reflector sobre los tres. Ofelia, sin ironía: «¡Por fin viene alguien por mi padre!»" },
            mood: "surprised", end: "granada-helicoptero",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Ofelia, llama a la ambulancia. Yo hablo con los vecinos.", B: "La guardo ya. Ofelia, llama a la ambulancia; yo les explico a los vecinos.", C: "Guardada. Ofelia, llama a la ambulancia; de los balcones y sus teorías me ocupo yo." },
            reply: { A: "Ofelia llama. Los vecinos gritan: «¡La policía ya viene!» Don Teodoro: «Qué noche.»", B: "Ofelia llama. Desde los balcones gritan «¡La policía ya viene!» y Don Teodoro suspira: «Qué noche, por una película mala.»", C: "Ofelia llama. Los balcones anuncian «¡La policía ya viene!» y Don Teodoro suspira: «Qué noche, y todo por una película mala.»" },
            mood: "worried", end: "granada-policia",
          },
        ],
      },

      // ── gas: alguien quiere llevarse el bolso de Ofelia y el gas lo frena.
      "gas-inicio": {
        who: "ofelia", mood: "surprised",
        line: {
          A: "Mientras te agachas, un hombre toma el bolso de Ofelia del suelo. Sacas el gas pimienta. «¡Suéltalo!» El hombre lo suelta y corre. Ofelia: «¡Quería robarme!»",
          B: "Mientras miras a Don Teodoro, un hombre agarra el bolso de Ofelia del suelo. Sacas el gas pimienta y gritas «¡Suéltalo!». Lo suelta y huye. Ofelia, pálida: «¡Me quería robar mientras mi papá se muere!»",
          C: "Mientras atiendes a Don Teodoro, un tipo recoge el bolso de Ofelia con la naturalidad de un dueño. Sacas el gas pimienta: «¡Suéltalo!» Lo suelta y huye. Ofelia: «¡Robarme ahora, con mi padre en el suelo!»",
        },
        options: [
          {
            id: "rociar",
            say: { A: "¡Y no vuelvas!", B: "¡Y no vuelvas por aquí!", C: "¡Y que no te vea más por esta avenida!" },
            reply: { A: "Rocías el aire. La nube llega a Don Teodoro. Tose y abre los ojos. «¡¿Qué es esto?!»", B: "Rocías una nube hacia el ladrón que huye. El viento la trae de vuelta y Don Teodoro tose, abre los ojos y grita: «¡¿Qué es esto?! ¡Me pica todo!»", C: "Rocías una nube tras el ladrón; el viento la devuelve y Don Teodoro despierta tosiendo: «¡¿Qué demonios es esto?! ¡Me arde la cara!»" },
            mood: "surprised", next: "gas-despierta",
          },
          {
            id: "guardar",
            say: { A: "Ya se fue. Toma tu bolso. Llama desde mi celular.", B: "Ya se fue. Toma tu bolso y llama a la ambulancia desde mi celular.", C: "Ya se fue y no vuelve. Recoge tu bolso y llama a la ambulancia desde mi celular." },
            reply: { A: "Ofelia recoge el bolso. «Gracias. Qué bueno que llevas eso.»", B: "Ofelia recoge el bolso temblando. «Gracias. Qué suerte que llevas eso encima.»", C: "Ofelia recoge el bolso con manos temblorosas. «Gracias. Nunca pensé que diría esto, pero qué suerte que lo llevas.»" },
            mood: "worried", next: "espera",
          },
          {
            id: "perseguir",
            say: { A: "¡Lo sigo! ¡Quédate con tu papá!", B: "¡Voy tras él! ¡Quédate con tu papá!", C: "¡Voy tras ese tipo! ¡No te muevas de tu padre!" },
            reply: { A: "Corres con el gas en la mano. Ofelia grita: «¡No! ¡Quédate!» Ya es tarde.", B: "Corres tras él con el gas en la mano. Ofelia grita «¡No, quédate!», pero ya diste la vuelta a la esquina.", C: "Corres tras él con el gas en alto. Ofelia grita «¡No, quédate conmigo!», pero ya estás en la esquina del cine." },
            mood: "angry", end: "gas-corre",
          },
        ],
      },
      "gas-despierta": {
        who: "teodoro", mood: "angry",
        line: {
          A: "Don Teodoro tose con los ojos rojos. «¡Me desmayo y me rocían! ¡Qué ciudad!» Ofelia: «¡Papá, estás despierto!»",
          B: "Don Teodoro tose con los ojos rojos y llorosos. «¡Me desmayo y, en vez de agua, me dan gas pimienta! ¡Qué ciudad!» Ofelia ríe y llora: «¡Papá, estás despierto!»",
          C: "Don Teodoro tose con los ojos como tomates. «¡Me desmayo y la ciudad me recibe con gas pimienta! ¡Qué hospitalidad!» Ofelia ríe entre lágrimas: «¡Papá, volviste!»",
        },
        options: [
          {
            id: "agua",
            say: { A: "Perdón. Era para un ladrón. Ofelia, trae agua.", B: "Perdón, don Teodoro. Era para un ladrón, no para usted. Ofelia, trae agua para los ojos.", C: "Perdón, don Teodoro: el gas iba para un ladrón y el viento tuvo otra idea. Ofelia, agua para los ojos, rápido." },
            reply: { A: "Ofelia corre a la tienda. Don Teodoro: «¿Un ladrón? ¿Y mi sombrero?»", B: "Ofelia corre a la tienda por agua. Don Teodoro parpadea: «¿Un ladrón? Pues que se lleve la corbata. ¿Y mi sombrero?»", C: "Ofelia corre a la tienda. Don Teodoro parpadea con furia: «¿Un ladrón? Que se lleve la corbata. El sombrero, eso sí, es sagrado.»" },
            mood: "smile", end: "gas-despierto",
          },
          {
            id: "ambulancia",
            say: { A: "Está despierto. Igual llamo a la ambulancia.", B: "Está despierto, pero igual llamo a la ambulancia. El pecho no es broma.", C: "Despierto o no, llamo a la ambulancia: el pecho no se negocia, por muy enojado que esté." },
            reply: { A: "Don Teodoro protesta. Ofelia lo manda callar. La ambulancia viene.", B: "Don Teodoro protesta que está perfectamente. Ofelia lo manda callar con una mirada. La ambulancia viene.", C: "Don Teodoro protesta que nunca estuvo mejor. Ofelia lo silencia con una mirada heredada. La ambulancia viene." },
            mood: "worried", end: "gas-ambulancia",
          },
          {
            id: "policia",
            say: { A: "Y ahora llamo a la policía por el ladrón.", B: "Y ahora llamo a la policía para denunciar al ladrón.", C: "Y ahora, policía: ese ladrón no se lleva la noche de gratis." },
            reply: { A: "Llega una patrulla. Ven a un viejo con los ojos rojos y tu gas. Explicas mucho.", B: "Llega una patrulla. Ven a un hombre mayor con los ojos rojos, una hija llorando y tu gas en la mano. Tienes mucho que explicar.", C: "Llega una patrulla y encuentra a un hombre mayor con los ojos rojos, una hija llorando y tu gas en la mano. Vas a necesitar un buen relato." },
            mood: "worried", end: "gas-policia",
          },
        ],
      },

      // ── lápiz: anotas todo para los paramédicos.
      "lapiz-inicio": {
        who: "ofelia", mood: "worried",
        line: {
          A: "Sacas el lápiz y escribes en tu mano: la hora, «dolor de pecho». Ofelia: «¿Qué escribes? ¡Mi papá está en el suelo!»",
          B: "Sacas el lápiz y escribes en el dorso de la mano: la hora, «dolor de pecho», «se desmayó». Ofelia: «¿Qué escribes? ¡Mi papá está en el suelo y tú tomas notas!»",
          C: "Sacas el lápiz y anotas en el dorso de la mano: hora, «dolor de pecho», «pérdida de conciencia». Ofelia: «¿Tomas notas? ¡Mi padre está en el suelo, no en una conferencia!»",
        },
        options: [
          {
            id: "paramedicos",
            say: { A: "Es para los médicos. ¿Qué medicinas toma? Dímelas.", B: "Es para los paramédicos: la hora y los síntomas les ahorran minutos. ¿Qué medicinas toma?", C: "Es para los paramédicos: hora y síntomas les ahorran preguntas. Dime qué medicinas toma y lo anoto." },
            reply: { A: "Ofelia saca una caja. «Esta, para el corazón. Y una para la presión.»", B: "Ofelia saca una caja del bolso. «Esta, para el corazón. Y otra para la presión, pero no me acuerdo del nombre.»", C: "Ofelia rebusca en el bolso. «Esta, para el corazón; y otra para la presión cuyo nombre nunca recuerdo.»" },
            mood: "worried", next: "lapiz-medicinas",
          },
          {
            id: "llamar",
            say: { A: "Escribo y llamo. Las dos cosas. Tranquila.", B: "Escribo y llamo al mismo tiempo. Tranquila, que sé hacer dos cosas.", C: "Escribo con una mano y llamo con la otra. Tranquila, para esto sirven las dos manos." },
            reply: { A: "Marcas. Ofelia te mira la mano escrita. «Dolor de pecho… sí. Eso dijo.»", B: "Marcas emergencias. Ofelia lee lo que escribiste en tu mano. «Dolor de pecho… sí, eso dijo. Exactamente eso.»", C: "Marcas emergencias mientras Ofelia lee tu mano. «Dolor de pecho… sí, eso dijo, palabra por palabra.»" },
            mood: "worried", next: "lapiz-medicinas",
          },
          {
            id: "nota",
            say: { A: "Escribe tu número en mi mano. Voy a la farmacia por ayuda.", B: "Escribe tu número en mi mano. Voy a la farmacia a buscar ayuda y te llamo.", C: "Anota tu número en mi mano: corro a la farmacia por ayuda y te llamo desde allí." },
            reply: { A: "Ofelia escribe su número. Tú corres. Ella grita: «¡Rápido!»", B: "Ofelia escribe su número con el lápiz temblando. Sales corriendo y ella grita: «¡Rápido, por favor!»", C: "Ofelia garabatea su número en tu mano. Sales corriendo mientras grita «¡Rápido!» a toda la avenida." },
            mood: "worried", end: "lapiz-farmacia",
          },
        ],
      },
      "lapiz-medicinas": {
        who: "teodoro", mood: "sleepy",
        line: {
          A: "Don Teodoro abre los ojos. Ve tu mano llena de letras. «¿Ya hacen la lista de mis cosas? Todavía no me morí.»",
          B: "Don Teodoro abre los ojos y lo primero que ve es tu mano escrita. «¿Ya están haciendo la lista de mis cosas? Todavía no me he muerto, ¿eh?»",
          C: "Don Teodoro abre los ojos y lee tu mano llena de letras. «¿Ya reparten mis cosas? Avisen cuando me muera, que me gustaría estar.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Es su lista de medicinas. Para los médicos. ¿Falta algo?", B: "Es la lista de sus medicinas, don Teodoro, para los paramédicos. ¿Falta alguna?", C: "Es la lista de sus medicinas para los paramédicos, don Teodoro. Revísela: ¿falta alguna?" },
            reply: { A: "Don Teodoro lee. «Falta la del azúcar. Y el sombrero.» Ofelia se ríe.", B: "Don Teodoro lee con un ojo. «Falta la del azúcar. Y pon “sombrero”, que lo quiero de vuelta.» Ofelia se ríe por fin.", C: "Don Teodoro lee con un ojo entornado. «Falta la del azúcar. Y añade “sombrero”, que es parte del tratamiento.» Ofelia ríe." },
            mood: "smile", end: "lapiz-nota",
          },
          {
            id: "ambulancia",
            say: { A: "Está despierto. Bien. La ambulancia viene. No se mueva.", B: "Qué bien que está despierto. La ambulancia ya viene. No se mueva.", C: "Despierto y con humor: buena señal. La ambulancia ya viene, así que no se mueva." },
            reply: { A: "Don Teodoro cierra los ojos. «Está bien. Pero quiero mi sombrero.» Ofelia se lo pone en el pecho.", B: "Don Teodoro cierra los ojos, obediente. «Está bien. Pero el sombrero viene conmigo.» Ofelia se lo pone en el pecho.", C: "Don Teodoro cierra los ojos, resignado. «De acuerdo. Pero el sombrero viaja conmigo.» Ofelia se lo coloca sobre el pecho." },
            mood: "worried", end: "lapiz-paramedico",
          },
          {
            id: "firmar",
            say: { A: "Firme aquí si no quiere ambulancia. Es su decisión.", B: "Si no quiere ambulancia, firme aquí, en mi mano. Es su decisión.", C: "Si rechaza la ambulancia, fírmelo aquí, en mi mano. Es su decisión, y quiero que conste." },
            reply: { A: "Don Teodoro mira la mano. Mira a Ofelia. «No firmo nada. Llamen.»", B: "Don Teodoro mira tu mano, luego a Ofelia, que lo fulmina. «No firmo nada. Llamen a quien haya que llamar.»", C: "Don Teodoro mira tu mano, luego a Ofelia y su mirada de hierro. «No firmo nada. Llamen a quien haga falta.»" },
            mood: "neutral", end: "lapiz-paramedico",
          },
        ],
      },

      // ── libro: las piernas en alto sobre el libro.
      "libro-inicio": {
        who: "ofelia", mood: "surprised",
        line: {
          A: "Sacas tu libro y lo pones bajo los pies de Don Teodoro. Ofelia: «¿Un libro? ¿Es un chiste?»",
          B: "Sacas el libro y lo colocas bajo los pies de Don Teodoro, para levantarle las piernas. Ofelia: «¿Un libro? ¿Esto es un chiste?»",
          C: "Sacas el libro y lo encajas bajo los pies de Don Teodoro para elevarle las piernas. Ofelia: «¿Un libro? ¿En serio? ¿Es una broma?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Las piernas arriba. La sangre vuelve a la cabeza.", B: "Con las piernas en alto, la sangre vuelve a la cabeza. Es lo primero con un desmayo.", C: "Piernas en alto: la sangre vuelve a la cabeza. Es lo primero que se hace con un desmayo, y el libro era lo que tenía." },
            reply: { A: "Don Teodoro abre los ojos. «¿Qué libro es?» Ofelia llora de alivio.", B: "A los pocos segundos, Don Teodoro abre los ojos. «¿Qué libro es?», pregunta. Ofelia llora de alivio.", C: "A los pocos segundos Don Teodoro abre los ojos y pregunta, con voz de biblioteca: «¿Qué libro es?» Ofelia llora de alivio." },
            mood: "smile", next: "libro-despierta",
          },
          {
            id: "llamar",
            say: { A: "Sí, es raro. Pero funciona. Llama tú, yo lo sostengo.", B: "Sí, parece raro, pero funciona. Llama tú a la ambulancia y yo le sostengo las piernas.", C: "Raro, sí; inútil, no. Llama tú a la ambulancia mientras yo le mantengo las piernas arriba." },
            reply: { A: "Ofelia llama con tu celular. Don Teodoro mueve un pie. «¿Qué… es esto?»", B: "Ofelia llama desde tu celular. Don Teodoro mueve un pie sobre el libro. «¿Qué… es esto tan duro?»", C: "Ofelia llama desde tu celular. Don Teodoro mueve un pie sobre el libro y protesta: «¿Qué es esto tan duro?»" },
            mood: "worried", next: "libro-despierta",
          },
          {
            id: "abanico",
            say: { A: "Y también sirve de abanico. Mira.", B: "Y también sirve de abanico, mira: aire a la cara.", C: "Y es abanico, mira: aire fresco a la cara, que es lo que le falta." },
            reply: { A: "Lo abanicas. Don Teodoro abre los ojos. «Qué viento raro.» Ofelia se ríe.", B: "Lo abanicas con el libro. Don Teodoro abre los ojos: «Qué viento más raro, huele a papel.» Ofelia se ríe llorando.", C: "Lo abanicas con la novela. Don Teodoro abre los ojos: «Qué viento tan extraño, huele a papel viejo.» Ofelia se ríe entre lágrimas." },
            mood: "laugh", end: "libro-despierto",
          },
        ],
      },
      "libro-despierta": {
        who: "teodoro", mood: "smile",
        line: {
          A: "Don Teodoro mira el libro bajo sus pies. «Un libro bajo los pies. Mi maestra me mataría. ¿De qué es?»",
          B: "Don Teodoro levanta la cabeza para mirar el libro. «Un libro bajo los pies… Mi maestra me mataría. ¿De qué trata, al menos?»",
          C: "Don Teodoro estira el cuello para ver el libro. «Un libro bajo los pies. Mi maestra de primaria resucitaría para castigarme. ¿Al menos es bueno?»",
        },
        options: [
          {
            id: "contar",
            say: { A: "Es de un pueblo junto al mar. Se lo cuento mientras llega la ambulancia.", B: "Es de un pueblo junto al mar donde nunca pasa nada. Se lo cuento mientras llega la ambulancia.", C: "Va de un pueblo junto al mar donde nunca pasa nada, hasta que pasa. Se lo cuento mientras esperamos la ambulancia." },
            reply: { A: "Don Teodoro escucha. Ofelia también. Nadie grita. Llega la ambulancia.", B: "Don Teodoro escucha con los ojos cerrados; Ofelia, sentada en la acera, también. Nadie grita. La ambulancia llega sin prisa.", C: "Don Teodoro escucha con los ojos cerrados y Ofelia, sentada en la acera, también. Por primera vez nadie grita. La ambulancia llega sin prisa." },
            mood: "smile", end: "libro-ambulancia",
          },
          {
            id: "regalar",
            say: { A: "Se lo regalo. Para el hospital.", B: "Se lo regalo, don Teodoro. En el hospital va a tener tiempo.", C: "Es suyo, don Teodoro. En el hospital el tiempo sobra y los libros faltan." },
            reply: { A: "Don Teodoro sonríe. «Un libro y un desmayo. Buena noche.» Ofelia te abraza.", B: "Don Teodoro sonríe. «Un desmayo y un libro gratis. No ha sido tan mala noche.» Ofelia te abraza sin avisar.", C: "Don Teodoro sonríe. «Un desmayo y una novela de regalo: hay noches peores.» Ofelia te abraza sin avisar." },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "levantar",
            say: { A: "¿Se siente mejor? ¿Quiere sentarse?", B: "¿Se siente mejor? ¿Quiere que lo ayudemos a sentarse?", C: "¿Se siente mejor? Si quiere, lo ayudamos a sentarse, despacio." },
            reply: { A: "Lo sientan contra la pared. Él respira. «Mejor. Pero no me quiten el libro.»", B: "Lo sientan contra la pared, entre los dos. Él respira hondo: «Mejor. Pero el libro no me lo quiten.»", C: "Lo sientan contra la pared entre los dos. Respira hondo: «Mejor. Y el libro se queda, que ya lo pisé.»" },
            mood: "smile", end: "libro-despierto",
          },
        ],
      },

      // ── corazón: Ofelia se calma y te cuenta la verdad.
      "corazon-inicio": {
        who: "ofelia", mood: "sad",
        line: {
          A: "Usas el corazón. Ofelia deja de gritar. Te abraza y llora. «Está enfermo desde hace meses. No quiere ir al médico.»",
          B: "Usas el corazón. Ofelia deja de gritar de golpe, se levanta y te abraza llorando. «Está enfermo desde hace meses y no quiere ir al médico. Hoy lo saqué al cine para animarlo.»",
          C: "Usas el corazón. El grito de Ofelia se apaga; se levanta y te abraza como a alguien de siempre. «Lleva meses enfermo y se niega a ir al médico. Lo llevé al cine para animarlo, y mira.»",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "No es tu culpa. Lo cuidas bien. Ahora, la ambulancia.", B: "No es tu culpa, Ofelia. Lo cuidas muy bien. Ahora llamamos a la ambulancia y ya.", C: "Nada de esto es culpa tuya: lo cuidas mejor de lo que él se cuida. Ahora, la ambulancia." },
            reply: { A: "Ofelia asiente contra tu hombro. Don Teodoro, desde el suelo: «¿Quién es ese?»", B: "Ofelia asiente contra tu hombro. Desde el suelo, Don Teodoro abre un ojo: «¿Y ese quién es? ¿Tu novio?»", C: "Ofelia asiente contra tu hombro. Desde la acera, Don Teodoro abre un ojo: «¿Y ese señor quién es? ¿Un novio nuevo?»" },
            mood: "love", next: "corazon-ofelia",
          },
          {
            id: "medico",
            say: { A: "Hoy sí va al médico. Yo te ayudo.", B: "Hoy sí va al médico, quiera o no. Yo te ayudo a convencerlo.", C: "Hoy va al médico aunque no quiera. Te ayudo a convencerlo, y si hace falta lo convencemos entre los dos." },
            reply: { A: "Ofelia sonríe con la cara mojada. Don Teodoro protesta desde el suelo: «¡Oigo todo!»", B: "Ofelia sonríe con la cara mojada. Don Teodoro protesta desde la acera: «¡Los oigo, no estoy muerto!»", C: "Ofelia sonríe entre lágrimas. Don Teodoro protesta desde la acera: «¡Los oigo perfectamente, y no voy a ningún médico!»" },
            mood: "love", next: "corazon-ofelia",
          },
          {
            id: "beso",
            say: { A: "Él está despertando. Mira.", B: "Mira: tu papá está despertando. Ve con él.", C: "Mira a tu padre: está volviendo. Ve con él, que a mí ya me abrazaste bastante." },
            reply: { A: "Ofelia te da un beso en la mejilla y corre con su padre. «¡Papá!»", B: "Ofelia te da un beso rápido en la mejilla y se arrodilla junto a su padre. «¡Papá, estás aquí!»", C: "Ofelia te besa en la mejilla, rápido y sincero, y se arrodilla junto a su padre. «¡Papá, volviste!»" },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-ofelia": {
        who: "teodoro", mood: "smitten",
        line: {
          A: "Don Teodoro se sienta con ayuda. Te mira. «Mi hija te abraza. Eres bueno. ¿Tienes trabajo?» Ofelia: «¡Papá!»",
          B: "Don Teodoro se sienta con ayuda de los dos y te estudia. «Mi hija te abraza y yo despierto en la acera. Eres buena gente. ¿Tienes trabajo?» Ofelia: «¡Papá, por favor!»",
          C: "Don Teodoro se incorpora con ayuda de ambos y te examina como un sastre. «Mi hija te abraza y yo despierto en la acera: eres de fiar. ¿Tienes trabajo estable?» Ofelia: «¡Papá!»",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "Tengo trabajo. Y usted tiene una ambulancia en camino.", B: "Tengo trabajo, don Teodoro. Y usted tiene una ambulancia en camino, así que no se mueva.", C: "Trabajo tengo, don Teodoro; y usted tiene una ambulancia en camino, así que la entrevista sigue en el hospital." },
            reply: { A: "Don Teodoro asiente. «Bien. Ofelia, invítalo a cenar.» Ella se tapa la cara.", B: "Don Teodoro asiente, satisfecho. «Muy bien. Ofelia, invítalo a cenar el domingo.» Ella se tapa la cara con las manos.", C: "Don Teodoro asiente, satisfecho. «Aprobado. Ofelia, invítalo a cenar el domingo.» Ella se tapa la cara, roja hasta las orejas." },
            mood: "love", end: "corazon-ambulancia",
          },
          {
            id: "abrazo",
            say: { A: "Ahora abrace a su hija. Tuvo mucho miedo.", B: "Ahora abrace a su hija, don Teodoro. Se asustó mucho por usted.", C: "Ahora abrace a su hija, que ha pasado más miedo que usted. Las preguntas pueden esperar." },
            reply: { A: "Don Teodoro abraza a Ofelia. Los dos lloran. Tú sostienes el sombrero.", B: "Don Teodoro abraza a Ofelia en plena acera. Los dos lloran. Tú te quedas con el sombrero en la mano.", C: "Don Teodoro abraza a Ofelia en mitad de la acera y los dos lloran sin pudor. Tú sostienes el sombrero, que también parece conmovido." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "cena",
            say: { A: "Primero el médico. Después, la cena.", B: "Primero el médico, don Teodoro. La cena, después, si usted se porta bien.", C: "Primero el médico, don Teodoro; la cena, después, y solo si obedece a los paramédicos." },
            reply: { A: "Don Teodoro se ríe. «Trato hecho.» Ofelia te mira con otros ojos.", B: "Don Teodoro se ríe con la mano en el pecho. «Trato hecho.» Ofelia te mira con otros ojos.", C: "Don Teodoro se ríe, cuidando el pecho. «Trato hecho, negociador.» Ofelia te mira de una manera nueva." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {
      ambulancia: { text: { A: "La ambulancia llega. Suben a Don Teodoro. Ofelia va con él y te dice adiós con la mano.", B: "La ambulancia llega a los ocho minutos exactos. Suben a Don Teodoro con cuidado; Ofelia sube con él y te dice adiós desde la puerta.", C: "La ambulancia cumple sus ocho minutos. Suben a Don Teodoro con una delicadeza de museo; Ofelia sube con él y te despide desde la puerta con la mano." }, change: "ambulancia", recap: "Pediste una ambulancia para Don Teodoro, desmayado en la avenida." },
      despierta: { text: { A: "Don Teodoro está despierto y sentado. Ofelia lo abraza. La ambulancia llega igual.", B: "Don Teodoro está despierto, sentado contra la pared y preguntando por su sombrero. Ofelia lo abraza. La ambulancia llega igual, por si acaso.", C: "Don Teodoro está despierto, sentado contra la pared y reclamando su sombrero. Ofelia lo abraza sin soltarlo. La ambulancia llega igual, porque el pecho no perdona." }, change: "sonrie", recap: "Don Teodoro despertó en la acera antes de que llegara la ambulancia." },
      farmacia: { text: { A: "Vuelves de la farmacia con un farmacéutico. Don Teodoro ya está despierto. Ofelia te abraza.", B: "Vuelves corriendo con el farmacéutico de la esquina. Don Teodoro ya está despierto y Ofelia te abraza antes de que puedas explicar nada.", C: "Vuelves corriendo con el farmacéutico de la esquina. Don Teodoro ya está despierto y Ofelia te abraza antes de que el farmacéutico abra la boca." }, change: "corre", recap: "Corriste a la farmacia a buscar ayuda para Don Teodoro." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Don Teodoro despierta y pregunta qué pasa. Nadie sabe explicarlo.", B: "Llega la policía y te quita el cuchillo. Don Teodoro despierta en medio del lío y pregunta qué pasa. Nadie consigue explicarlo bien.", C: "Llega la policía y te desarma antes de preguntar. Don Teodoro despierta en mitad del lío y pregunta qué pasa; nadie logra explicarlo con claridad." }, change: "policia", recap: "Tu cuchillo convirtió el desmayo en un asunto policial." },
      "cuchillo-respira": { text: { A: "Don Teodoro respira sin corbata. La ambulancia llega. Él pide que le devuelvan los pedazos.", B: "Don Teodoro respira sin corbata y con color en la cara. Cuando llega la ambulancia, pide que le guarden los pedazos de recuerdo.", C: "Don Teodoro respira sin corbata y con color en la cara. Cuando llega la ambulancia, pide los pedazos de recuerdo, para enseñárselos al yerno." }, change: "ambulancia", recap: "Cortaste la corbata que ahogaba a Don Teodoro." },
      "cuchillo-corre": { text: { A: "Ofelia vuelve con un farmacéutico. Don Teodoro te llama «el ladrón amable». Guardas el cuchillo.", B: "Ofelia vuelve corriendo con el farmacéutico. Don Teodoro te presenta como «el ladrón amable» y tú guardas el cuchillo para siempre.", C: "Ofelia vuelve con el farmacéutico. Don Teodoro te presenta como «el ladrón más amable de la ciudad» y tú juras no sacar el cuchillo nunca más." }, change: "corre", recap: "Ofelia corrió a la farmacia mientras tú cuidabas a su padre." },
      "pistola-huye": { text: { A: "Ofelia arrastra a su padre al portal y cierra la puerta. Te quedas en la acera con la pistola. Nadie llamó.", B: "Ofelia arrastra a su padre hasta el portal y cierra la puerta con llave. Te quedas solo en la acera, con la pistola y sin ambulancia.", C: "Ofelia arrastra a su padre hasta el portal y cierra con dos vueltas. Te quedas en la acera con la pistola, el sombrero y ninguna ambulancia en camino." }, change: "huye", recap: "La pistola hizo huir a Ofelia con su padre a medio desmayar." },
      "pistola-ambulancia": { text: { A: "La ambulancia llega. Don Teodoro sube con su sombrero. Ofelia te susurra: «Guarda eso, por favor.»", B: "La ambulancia llega y Don Teodoro sube con el sombrero en el pecho. Ofelia te susurra al pasar: «Guarda eso, por favor, y gracias.»", C: "La ambulancia llega y Don Teodoro sube con el sombrero sobre el pecho. Ofelia te susurra al pasar: «Guarda eso, por favor. Y gracias, de verdad.»" }, change: "ambulancia", recap: "Pese a la pistola, Don Teodoro se fue en ambulancia con su sombrero." },
      "pistola-policia": { text: { A: "La patrulla ve la pistola. Te apuntan. Ofelia grita que la ayudaste. Levantas las manos.", B: "Los agentes ven la pistola antes que al herido. Te apuntan y levantas las manos. Ofelia grita que la ayudaste, pero esta noche eso no cuenta.", C: "Los agentes ven la pistola antes que al hombre en el suelo. Te apuntan y levantas las manos; Ofelia grita que la ayudaste, un detalle que de momento a nadie le importa." }, change: "manos-arriba", recap: "La patrulla vio tu pistola junto al hombre desmayado." },
      "granada-huye": { text: { A: "Corres por la avenida. Los balcones gritan. Ofelia se queda con su padre y sin ambulancia.", B: "Corres por la avenida mientras los balcones gritan tu descripción. Ofelia se queda con su padre y sin ambulancia.", C: "Corres por la avenida bajo una lluvia de gritos desde los balcones. Ofelia se queda con su padre en el suelo y sin nadie que llame." }, change: "huye", recap: "La granada te hizo huir y dejar a Ofelia sola." },
      "granada-risa": { text: { A: "Don Teodoro se ríe en la acera. Los balcones aplauden. La ambulancia llega entre risas.", B: "Don Teodoro se ríe en la acera, Ofelia también, y los balcones aplauden. La ambulancia llega a una fiesta inesperada.", C: "Don Teodoro se ríe en la acera, Ofelia lo acompaña y los balcones aplauden. La ambulancia llega a lo que parece una fiesta de barrio." }, change: "sonrie", recap: "Tu granada falsa despertó a Don Teodoro entre risas." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la avenida. La ambulancia llega detrás de tres patrullas. Don Teodoro saluda.", B: "El helicóptero ilumina la avenida y la ambulancia llega detrás de tres patrullas. Don Teodoro saluda desde la camilla como un presidente.", C: "El helicóptero baña la avenida de luz y la ambulancia llega escoltada por tres patrullas. Don Teodoro saluda desde la camilla como un jefe de Estado." }, change: "helicoptero", recap: "La granada trajo un helicóptero sobre Don Teodoro." },
      "granada-policia": { text: { A: "Llega la policía antes que la ambulancia. Te llevan. Ofelia grita: «¡Es un llavero!» Nadie escucha.", B: "La policía llega antes que la ambulancia y te lleva. Ofelia grita «¡Es un llavero!», pero nadie la escucha.", C: "La policía llega antes que la ambulancia y te lleva sin discutir. Ofelia grita «¡Es un llavero!» a una avenida que ya no escucha." }, change: "policia", recap: "La granada te llevó a la comisaría antes de que llegara la ambulancia." },
      "gas-corre": { text: { A: "Persigues al ladrón hasta la esquina. Se escapa. Vuelves. Don Teodoro está despierto y enojado.", B: "Persigues al ladrón hasta la esquina del cine y se te escapa. Cuando vuelves, Don Teodoro está despierto y muy enojado con todos.", C: "Persigues al ladrón hasta la esquina del cine y lo pierdes. Al volver, Don Teodoro está despierto, sentado y enojado con la humanidad entera." }, change: "corre", recap: "Perseguiste al ladrón del bolso y Don Teodoro despertó solo." },
      "gas-despierto": { text: { A: "Ofelia vuelve con agua. Don Teodoro se lava los ojos y pide su sombrero. La ambulancia viene.", B: "Ofelia vuelve con una botella de agua. Don Teodoro se lava los ojos, protesta y pide el sombrero. La ambulancia ya viene.", C: "Ofelia vuelve con agua. Don Teodoro se lava los ojos, maldice la ciudad y reclama el sombrero. La ambulancia ya viene." }, change: "sonrie", recap: "El gas pimienta ahuyentó a un ladrón y despertó a Don Teodoro." },
      "gas-ambulancia": { text: { A: "La ambulancia llega. Don Teodoro protesta pero sube. Ofelia guarda el bolso con las dos manos.", B: "La ambulancia llega. Don Teodoro protesta, pero sube. Ofelia abraza el bolso recuperado con las dos manos.", C: "La ambulancia llega y Don Teodoro sube protestando. Ofelia abraza el bolso recuperado como si fuera su padre." }, change: "ambulancia", recap: "Salvaste el bolso de Ofelia y la ambulancia llegó igual." },
      "gas-policia": { text: { A: "La policía escucha. Ofelia confirma lo del ladrón. Te dejan ir. Don Teodoro pide hielo.", B: "La policía escucha tu versión; Ofelia confirma lo del ladrón y te dejan ir. Don Teodoro, con los ojos rojos, pide hielo.", C: "La policía escucha, Ofelia confirma lo del ladrón y te dejan ir. Don Teodoro, con los ojos rojos, pide hielo y respeto." }, change: "policia", recap: "Denunciaste al ladrón del bolso con los ojos de Don Teodoro aún rojos." },
      "lapiz-farmacia": { text: { A: "Vuelves con ayuda de la farmacia. Llamas al número de tu mano. Ofelia responde: «Ya despertó».", B: "Vuelves con ayuda de la farmacia y llamas al número escrito en tu mano. Ofelia responde: «Ya despertó. Gracias.»", C: "Vuelves con ayuda de la farmacia y marcas el número escrito en tu mano. Ofelia responde: «Ya despertó, y pregunta por el sombrero.»" }, change: "llama", recap: "Tu lápiz guardó el número de Ofelia mientras corrías por ayuda." },
      "lapiz-nota": { text: { A: "Don Teodoro dicta su lista completa. Los paramédicos leen tu mano y sonríen.", B: "Don Teodoro dicta la lista completa de sus medicinas. Cuando llegan, los paramédicos leen tu mano y sonríen.", C: "Don Teodoro dicta su lista completa, sombrero incluido. Los paramédicos leen tu mano al llegar y sonríen: pocas veces les hacen el trabajo." }, change: "sonrie", recap: "Tu lápiz anotó las medicinas de Don Teodoro para los paramédicos." },
      "lapiz-paramedico": { text: { A: "La ambulancia llega. Les muestras tu mano escrita. «Gracias, esto ayuda.»", B: "La ambulancia llega y les muestras la mano escrita. «Gracias, esto nos ahorra minutos», dice una paramédica.", C: "La ambulancia llega y les muestras la mano escrita. «Esto nos ahorra cinco minutos», dice una paramédica, y los minutos cuentan." }, change: "ambulancia", recap: "Tus notas en la mano ayudaron a los paramédicos." },
      "libro-despierto": { text: { A: "Don Teodoro está sentado con tu libro. La ambulancia viene. Ofelia respira por fin.", B: "Don Teodoro está sentado contra la pared, con tu libro en las rodillas. La ambulancia viene y Ofelia respira por fin.", C: "Don Teodoro está sentado contra la pared, con tu libro en las rodillas y el sombrero puesto. La ambulancia viene y Ofelia respira por fin." }, change: "se-sienta", recap: "Un libro bajo los pies despertó a Don Teodoro." },
      "libro-ambulancia": { text: { A: "La ambulancia llega. Don Teodoro se lleva tu libro. «Quiero saber el final.»", B: "La ambulancia llega en mitad del cuento. Don Teodoro se lleva tu libro: «Quiero saber cómo termina.»", C: "La ambulancia interrumpe el cuento. Don Teodoro se lleva tu libro: «Quiero saber cómo acaba, y si el pueblo sobrevive.»" }, change: "ambulancia", recap: "Le contaste un libro a Don Teodoro hasta que llegó la ambulancia." },
      "libro-regalo": { text: { A: "Don Teodoro guarda tu libro bajo el brazo. Ofelia te abraza. La ambulancia espera.", B: "Don Teodoro se guarda tu libro bajo el brazo como un tesoro. Ofelia te abraza y la ambulancia espera a que terminen.", C: "Don Teodoro guarda tu libro bajo el brazo como un trofeo. Ofelia te abraza y la ambulancia, educada, espera." }, change: "abraza", recap: "Regalaste tu libro a Don Teodoro y Ofelia te abrazó." },
      "corazon-beso": { text: { A: "Ofelia te besa la mejilla. Don Teodoro sonríe desde el suelo. La ambulancia llega.", B: "Ofelia te besa en la mejilla y vuelve con su padre. Don Teodoro sonríe desde la acera. La ambulancia llega.", C: "Ofelia te besa en la mejilla y vuelve junto a su padre. Don Teodoro sonríe desde la acera como quien ya lo había planeado. La ambulancia llega." }, change: "beso", recap: "Ofelia te dio un beso cuando su padre despertó." },
      "corazon-ambulancia": { text: { A: "Don Teodoro sube a la ambulancia. «¡El domingo!», grita. Ofelia te sonríe.", B: "Don Teodoro sube a la ambulancia gritando «¡El domingo, a cenar!». Ofelia te sonríe, roja, desde la puerta.", C: "Don Teodoro sube a la ambulancia gritando «¡El domingo, a cenar!». Ofelia te sonríe desde la puerta, roja y sin ganas de desmentirlo." }, change: "ambulancia", recap: "Don Teodoro se fue en ambulancia invitándote a cenar el domingo." },
      "corazon-abrazo": { text: { A: "Padre e hija se abrazan en la acera. Tú sostienes el sombrero hasta que llega la ambulancia.", B: "Padre e hija se abrazan en la acera, llorando. Tú sostienes el sombrero hasta que llega la ambulancia.", C: "Padre e hija se abrazan en la acera, llorando sin pudor. Tú sostienes el sombrero hasta que llega la ambulancia." }, change: "abraza", recap: "El corazón terminó con padre e hija abrazados en la avenida." },
    },
    speak: {
      A1: "¿Qué haces si una persona se cae en la calle?",
      A2: "¿Sabes qué hacer cuando alguien se desmaya?",
      B1: "¿Quién de tu familia se niega a ir al médico, y cómo lo convences?",
      B2: "¿Has vivido una emergencia médica cerca de ti, y qué aprendiste?",
      C1: "¿Qué papel juega el pánico de los familiares en una emergencia médica?",
      C2: "¿Hasta qué punto cuidar a un padre mayor cambia la relación entre padres e hijos?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "grita", speak: { A: "¿Qué cosas das miedo sin querer?", B: "¿Alguna vez una buena acción tuya pareció una amenaza?", C: "¿Cómo se gana la confianza de alguien que ya decidió tenerte miedo?" } },
      pistola: { start: "pistola-inicio", fx: "huye", speak: { A: "¿Qué haces si alguien te da su bolso por miedo?", B: "¿Qué harías si alguien te entregara todo por creer que lo vas a robar?", C: "¿Qué se siente cuando los demás te ven como un peligro que no eres?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Tus vecinos miran desde el balcón?", B: "¿Qué hacen los vecinos de tu calle cuando hay un escándalo?", C: "¿Por qué el miedo colectivo se organiza más rápido que la ayuda colectiva?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Alguien te robó algo alguna vez?", B: "¿Qué harías si vieras a alguien robar a una persona distraída?", C: "¿Dónde está el límite entre defender a alguien y poner en peligro a los demás?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué medicinas conoces?", B: "¿Sabes qué medicinas toma la gente mayor de tu familia?", C: "¿Qué información sobre tu salud debería llevar siempre contigo, y por qué no la llevas?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Qué libro quieres regalar?", B: "¿Qué libro le regalarías a alguien que está en el hospital?", C: "¿Qué poder tiene una historia contada en voz alta en un momento de miedo?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Abrazas a tu familia?", B: "¿Cuándo fue la última vez que consolaste a alguien con un abrazo?", C: "¿Por qué a veces nos abrimos más con un desconocido que con nuestra propia familia?" } },
    },
  },

  // ───────────────────────────── ESCENA 3 · MERCADO ─────────────────────────────
  {
    id: "mercado-robo",
    kind: "escena",
    district: "mercado",
    title: "¡Ladrón! ¡Mi bolso!",
    verb: "DETENER",
    goal: "Reaccionar ante un robo, dar órdenes, describir a una persona, acusar o perdonar y decidir si llamas a la policía.",
    cast: [
      {
        id: "lorena", name: "Lorena", role: "Le acaban de robar el bolso",
        age: "adult", body: "f", build: "average", height: 1.65,
        hair: "curly", hairColor: "#1c140e", skin: "#a8704c",
        top: "blouse", topColor: "#c9a24a", bottom: "jeans", bottomColor: "#1f2a3a",
        extras: ["earrings"], pose: "scream", props: [],
      },
      {
        id: "jonas", name: "Jonás", role: "El ladrón, con el bolso en la mano",
        age: "young", body: "m", build: "slim", height: 1.74,
        hair: "short", hairColor: "#2a1a12", skin: "#c99064",
        top: "hoodie", topColor: "#3a3a3f", bottom: "pants", bottomColor: "#2c2c30",
        extras: ["cap"], pose: "bag-run", props: ["bag-stolen"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "lorena", mood: "terror",
        line: {
          A: "Una mujer grita entre los puestos: «¡Ladrón! ¡Mi bolso!» Un chico con capucha corre hacia ti con el bolso. Se para: tú le cierras el paso.",
          B: "Una mujer grita entre los puestos: «¡Ladrón! ¡Me robó el bolso!» Un chico con capucha corre hacia ti con el bolso bajo el brazo y frena en seco: tú estás en medio del pasillo.",
          C: "Entre los puestos, una mujer grita «¡Ladrón! ¡Mi bolso!» con una voz que apaga la música. Un chico con capucha corre hacia ti, bolso bajo el brazo, y frena: el pasillo termina en ti.",
        },
        options: [
          {
            id: "parar",
            say: { A: "¡Para! ¡Suelta el bolso!", B: "¡Quieto ahí! ¡Suelta ese bolso ahora mismo!", C: "¡Quieto! Suelta el bolso ahora, que de aquí no pasas." },
            reply: { A: "El chico mira a los lados. «¡Déjame pasar! ¡No es lo que parece!»", B: "El chico mira a los lados buscando salida. «¡Déjame pasar! ¡No es lo que parece, te lo juro!»", C: "El chico busca una salida con los ojos y no la encuentra. «¡Déjame pasar! No es lo que parece, aunque lo parezca mucho.»" },
            mood: "scared", next: "ladron",
          },
          {
            id: "gritar",
            say: { A: "¡Vecinos! ¡Ayuda! ¡Un ladrón!", B: "¡Oigan todos! ¡Ayuda, que es un ladrón!", C: "¡Mercado! ¡Que no se escape, que es un ladrón!" },
            reply: { A: "Dos vendedores salen de los puestos. El chico está rodeado.", B: "Dos vendedores salen de los puestos con los brazos abiertos. El chico queda rodeado entre empanadas y flores.", C: "Dos vendedores abandonan sus puestos y cierran el pasillo. El chico queda rodeado entre empanadas, flores y mucha gente enojada." },
            mood: "angry", next: "vecinos",
          },
          {
            id: "policia",
            say: { A: "Llamo a la policía. Quédate ahí.", B: "Estoy llamando a la policía. No te muevas de ahí.", C: "Ya estoy llamando a la policía. Si te mueves, la descripción se la doy con tu cara." },
            reply: { A: "El chico se pone pálido. «No, policía no. Por favor.» Lorena grita: «¡Sí, policía!»", B: "El chico se pone pálido. «No, policía no, por favor, tengo antecedentes.» Lorena, detrás: «¡Sí, policía, y ya!»", C: "El chico pierde el color. «Policía no, por favor, con mis antecedentes me hunden.» Lorena, a gritos: «¡Policía, y que se lo lleven!»" },
            mood: "scared", next: "ladron",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Mírame. No corras. Nadie te va a hacer daño.", B: "Mírame y no corras. Aquí nadie te va a hacer daño, te lo prometo.", C: "Mírame y deja de correr. Nadie va a hacerte daño; lo que pase ahora lo decides tú." },
            reply: { A: "El chico deja de temblar. Baja el bolso. «Tengo hambre. Solo eso.»", B: "El chico deja de temblar y baja el bolso hasta las rodillas. «Tengo hambre. Eso es todo. Hambre.»", C: "El chico deja de temblar y el bolso baja con él. «Tengo hambre. Suena ridículo, pero es la verdad entera.»" },
            mood: "love", next: "corazon-jonas",
          },
        },
      },
      ladron: {
        who: "jonas", mood: "scared",
        line: {
          A: "El chico respira rápido. «Me llamo Jonás. No soy ladrón. Hoy no tengo nada. Nada.» Lorena llega gritando: «¡Dame mi bolso!»",
          B: "El chico respira como si hubiera corrido diez calles. «Me llamo Jonás. No soy ladrón, es la primera vez. Hoy no tengo ni para comer.» Lorena llega corriendo: «¡Dame mi bolso!»",
          C: "El chico jadea con el bolso contra el pecho. «Me llamo Jonás. No soy ladrón; es la primera vez, y ya me arrepiento. Hoy no tengo ni para un pan.» Lorena llega: «¡Mi bolso!»",
        },
        options: [
          {
            id: "devolver",
            say: { A: "Devuélvelo. Ahora. Y después hablamos.", B: "Devuélveselo ahora mismo. Después hablamos de lo que te pasa.", C: "Devuélveselo ahora, sin discursos. Lo del hambre lo hablamos después, y lo hablamos en serio." },
            reply: { A: "Jonás le da el bolso a Lorena. Ella lo abraza. «Está todo. Gracias.»", B: "Jonás le entrega el bolso a Lorena con la cabeza baja. Ella lo abraza contra el pecho: «Está todo… Gracias.»", C: "Jonás le tiende el bolso a Lorena sin mirarla. Ella lo revisa y lo abraza: «Está todo. Gracias… a ti, no a él.»" },
            mood: "neutral", end: "devuelve",
          },
          {
            id: "porque",
            say: { A: "¿Por qué robas? ¿Qué te pasa?", B: "¿Por qué lo hiciste? ¿Qué te pasa de verdad?", C: "¿Por qué lo hiciste? Y no me digas «hambre» como si fuera una contraseña." },
            reply: { A: "Jonás mira el suelo. «Me echaron del trabajo. Tengo una hija.» Lorena se calla.", B: "Jonás mira el suelo. «Me echaron del trabajo hace un mes. Tengo una hija de tres años.» Lorena deja de gritar.", C: "Jonás mira el suelo. «Me echaron hace un mes y tengo una hija de tres años que no entiende de despidos.» Lorena se queda callada." },
            mood: "sad", next: "historia",
          },
          {
            id: "agarrar",
            say: { A: "¡No te muevas! ¡Te agarro!", B: "¡No te muevas, que te agarro!", C: "¡Ni un paso más, que te sujeto hasta que llegue alguien!" },
            reply: { A: "Jonás te empuja con el hombro y corre con el bolso. Lorena grita.", B: "Jonás te empuja con el hombro, se escapa por un hueco entre los puestos y corre con el bolso. Lorena grita.", C: "Jonás te golpea con el hombro, encuentra un hueco entre dos puestos y desaparece con el bolso. Lorena grita hasta quedarse sin voz." },
            mood: "angry", end: "escapa",
          },
        ],
      },
      vecinos: {
        who: "lorena", mood: "furious",
        line: {
          A: "Lorena le quita el bolso de las manos. «¡Mi dinero, mis llaves, todo!» Los vendedores agarran al chico. «¿Qué hacemos con él?»",
          B: "Lorena le arranca el bolso de las manos. «¡Mi dinero, mis llaves, la foto de mi madre!» Los vendedores sujetan al chico por los brazos: «¿Qué hacemos con este?»",
          C: "Lorena le arranca el bolso. «¡Mi dinero, mis llaves, la foto de mi madre!» Los vendedores sujetan al chico por los brazos y te miran: «¿Y con este qué hacemos?»",
        },
        options: [
          {
            id: "policia",
            say: { A: "Llamen a la policía. Nadie le pega.", B: "Llamen a la policía. Pero nadie le pega, ¿entendido?", C: "Llamen a la policía, y que nadie le ponga una mano encima: eso ya no es justicia." },
            reply: { A: "Un vendedor llama. Jonás llora. Lorena no lo mira.", B: "Un vendedor llama a la policía. Jonás llora en silencio. Lorena revisa el bolso y no lo mira.", C: "Un vendedor llama. Jonás llora sin ruido. Lorena cuenta su dinero y evita mirarlo." },
            mood: "worried", end: "policia",
          },
          {
            id: "soltar",
            say: { A: "Ya tiene el bolso. Suéltenlo.", B: "Ella ya tiene el bolso. Suéltenlo y que se vaya.", C: "Ella recuperó el bolso; lo demás no es asunto nuestro. Suéltenlo y que se vaya." },
            reply: { A: "Lorena grita: «¡¿Qué?! ¡Me robó!» Un vendedor le pega al chico.", B: "Lorena grita: «¡¿Soltarlo?! ¡Me robó delante de todos!» Un vendedor, sin esperar, le da un puñetazo al chico.", C: "Lorena grita «¡¿Soltarlo?!» y un vendedor decide por todos: un puñetazo y el chico cae entre los puestos." },
            mood: "angry", end: "pelea",
          },
          {
            id: "hablar",
            say: { A: "Esperen. Déjenlo hablar. ¿Por qué robas?", B: "Esperen un momento. Déjenlo hablar. ¿Por qué lo hiciste?", C: "Un momento, antes de decidir: que hable. ¿Por qué lo hiciste?" },
            reply: { A: "Jonás llora. «Tengo una hija. No tengo trabajo.» Los vendedores lo sueltan un poco.", B: "Jonás llora. «Tengo una hija y me quedé sin trabajo. No sabía qué hacer.» Los vendedores aflojan las manos.", C: "Jonás llora. «Tengo una hija y me quedé sin trabajo hace un mes. No supe qué más hacer.» Los vendedores aflojan, incómodos." },
            mood: "sad", next: "historia",
          },
        ],
      },
      historia: {
        who: "lorena", mood: "sad",
        line: {
          A: "Lorena abraza su bolso. Mira a Jonás. «Yo también tengo hijos. ¿Y por eso me robas?» Jonás no responde.",
          B: "Lorena aprieta el bolso contra el pecho y mira a Jonás largo rato. «Yo también tengo hijos. ¿Y por eso me robas a mí, que vengo cansada del trabajo?» Jonás no sabe qué decir.",
          C: "Lorena abraza el bolso y mira a Jonás con algo que no es solo rabia. «Yo también tengo hijos, y trabajo doce horas. ¿Y por eso me robas a mí?» Jonás calla.",
        },
        options: [
          {
            id: "perdonar",
            say: { A: "Lorena, tú decides. ¿Lo perdonas?", B: "Lorena, es tu bolso y tu decisión. ¿Lo perdonas o llamamos a la policía?", C: "Lorena, el bolso es tuyo y la decisión también: ¿lo perdonas o lo denunciamos?" },
            reply: { A: "Lorena saca un billete. «Toma. Compra comida. Y no vuelvas.» Jonás llora.", B: "Lorena saca un billete del bolso y se lo da. «Toma. Compra comida para tu hija. Y que no te vea más.» Jonás llora.", C: "Lorena saca un billete y se lo pone en la mano. «Compra comida para tu hija. Y que no te vuelva a ver.» Jonás llora como un niño." },
            mood: "sad", end: "perdon",
          },
          {
            id: "denunciar",
            say: { A: "Da igual la historia. Robar es robar. Policía.", B: "La historia es triste, pero robar es robar. Llamo a la policía.", C: "La historia conmueve, pero no cambia los hechos: le robaste. Llamo a la policía." },
            reply: { A: "Jonás baja la cabeza. Lorena asiente despacio. «Sí. Policía.»", B: "Jonás baja la cabeza sin discutir. Lorena asiente despacio: «Sí. Policía. Lo siento.»", C: "Jonás baja la cabeza, sin pelear. Lorena asiente despacio: «Sí, policía. Lo siento por tu hija, no por ti.»" },
            mood: "neutral", end: "policia",
          },
          {
            id: "trabajo",
            say: { A: "Don Aurelio necesita ayuda en su puesto. Pregunta mañana.", B: "El de las empanadas busca ayudante. Ven mañana y pregunta por Don Aurelio.", C: "Don Aurelio, el de las empanadas, necesita un ayudante. Ven mañana temprano y pregunta por él." },
            reply: { A: "Jonás levanta la cara. «¿De verdad?» Lorena: «Si trabajas, te perdono.»", B: "Jonás levanta la cara, incrédulo. «¿De verdad?» Lorena, seca: «Si trabajas, te perdono. Si no, te denuncio.»", C: "Jonás levanta la cara por primera vez. «¿En serio?» Lorena, cortante: «Si mañana trabajas, te perdono. Si no, te busco.»" },
            mood: "smile", end: "perdon",
          },
        ],
      },

      // ── cuchillo: Jonás también saca uno y el pasillo se vuelve un duelo.
      "cuchillo-inicio": {
        who: "jonas", mood: "furious",
        line: {
          A: "Sacas el cuchillo para asustarlo. Jonás saca otro. Los dos cuchillos brillan entre los puestos. Lorena grita: «¡No! ¡Se van a matar!»",
          B: "Sacas el cuchillo para que suelte el bolso. Jonás saca uno más grande. Los dos cuchillos brillan bajo las luces del mercado. Lorena grita: «¡No, se van a matar por un bolso!»",
          C: "Sacas el cuchillo para que suelte el bolso y Jonás responde con uno más grande. Dos cuchillos brillan bajo las luces del mercado. Lorena grita: «¡Se van a matar por un bolso de feria!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja eso. Yo bajo el mío. Nadie quiere sangre.", B: "Baja eso y yo bajo el mío. Nadie quiere sangre por un bolso.", C: "Bajemos los dos a la vez. Nadie aquí quiere sangrar por un bolso." },
            reply: { A: "Jonás duda. Baja el cuchillo un poco. «Tú primero.»", B: "Jonás duda, con el cuchillo temblando. «Tú primero. No confío en nadie.»", C: "Jonás duda; el cuchillo le tiembla en la mano. «Tú primero. Confiar no es lo mío.»" },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "lorena",
            say: { A: "Lorena, llama a la policía. Yo lo miro.", B: "Lorena, llama a la policía ahora. Yo no le quito los ojos de encima.", C: "Lorena, llama a la policía sin dejar de mirarnos. Yo no le quito los ojos de encima." },
            reply: { A: "Lorena llama. Jonás mira la salida. «No me van a agarrar.»", B: "Lorena marca con las manos temblando. Jonás mira hacia la salida: «A mí no me agarran.»", C: "Lorena marca sin dejar de mirar los cuchillos. Jonás calcula la salida: «A mí no me agarran, ni hoy ni nunca.»" },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "atacar",
            say: { A: "¡Suelta el bolso o te corto!", B: "¡Suelta el bolso o te corto la mano!", C: "¡Suelta el bolso o te llevas un recuerdo en la mano!" },
            reply: { A: "Jonás tira el bolso y corre. Te cortaste la mano con tu propio cuchillo.", B: "Jonás lanza el bolso al aire y corre entre los puestos. Tú, al moverte, te cortas la mano con tu propio cuchillo.", C: "Jonás lanza el bolso al aire y desaparece entre los puestos. Al moverte, te cortas la palma con tu propio cuchillo, lo que dice mucho." },
            mood: "furious", end: "cuchillo-huye",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "lorena", mood: "terror",
        line: {
          A: "Los dos cuchillos siguen en alto. Lorena se pone en medio. «¡Basta! Jonás, suelta el bolso. Tú, guarda eso. ¡Los dos!»",
          B: "Los dos cuchillos siguen en alto y nadie respira. Lorena se mete en medio, con los brazos abiertos. «¡Basta! Jonás, suelta el bolso. Tú, guarda eso. ¡Los dos, ahora!»",
          C: "Los cuchillos siguen en alto y el mercado contiene la respiración. Lorena se planta entre los dos. «¡Basta! Jonás, suelta el bolso; tú, guarda eso. ¡Los dos, ya!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Está bien. Lo guardo. Jonás, el bolso.", B: "Está bien, Lorena. Lo guardo. Jonás, el bolso al suelo.", C: "Tienes razón, Lorena. Lo guardo. Jonás, el bolso al suelo y nadie sale cortado." },
            reply: { A: "Jonás suelta el bolso y corre. Lorena lo recoge. «Qué locura.»", B: "Jonás suelta el bolso y sale corriendo con su cuchillo. Lorena lo recoge temblando: «Qué locura, por favor.»", C: "Jonás suelta el bolso y huye con su cuchillo entre los puestos. Lorena recoge el bolso: «Qué locura. Dos cuchillos por esto.»" },
            mood: "worried", end: "cuchillo-suelta",
          },
          {
            id: "policia",
            say: { A: "La policía ya viene. Jonás, decide.", B: "La policía ya viene, Jonás. Tienes diez segundos para decidir.", C: "La policía ya viene, Jonás. Tienes diez segundos para decidir qué versión quieres que cuenten." },
            reply: { A: "Jonás tira el cuchillo y el bolso. Llega la patrulla. Tú también tienes un cuchillo.", B: "Jonás tira el cuchillo y el bolso al suelo. Llega la patrulla y ve dos cuchillos: el suyo y el tuyo.", C: "Jonás suelta cuchillo y bolso. La patrulla llega y cuenta dos cuchillos en el suelo, y uno es tuyo." },
            mood: "scared", end: "cuchillo-policia",
          },
          {
            id: "lorena",
            say: { A: "Lorena, apártate. Esto es entre él y yo.", B: "Lorena, apártate. Esto es entre él y yo.", C: "Lorena, apártate, que esto ya es entre él y yo." },
            reply: { A: "Lorena no se mueve. «No. Es entre él y mi bolso.» Jonás se ríe y suelta el bolso.", B: "Lorena no se mueve ni un centímetro. «No. Es entre él y mi bolso.» Jonás, sorprendido, se ríe y suelta el bolso.", C: "Lorena no retrocede. «No: es entre él y mi bolso, y ustedes dos sobran.» Jonás suelta una risa nerviosa y el bolso." },
            mood: "surprised", end: "cuchillo-suelta",
          },
        ],
      },

      // ── pistola: todo el pasillo levanta las manos.
      "pistola-inicio": {
        who: "jonas", mood: "terror",
        line: {
          A: "Sacas la pistola. Jonás suelta el bolso y levanta las manos. Lorena también levanta las manos. «¡No dispares! ¡Yo soy la víctima!»",
          B: "Sacas la pistola y Jonás suelta el bolso y levanta las manos. Lorena, detrás, también las levanta: «¡No dispares! ¡Yo soy la víctima, la de la víctima!»",
          C: "Sacas la pistola y Jonás suelta el bolso y levanta las manos. Lorena, por reflejo, también: «¡No dispares! ¡Yo soy la víctima, la del bolso!»",
        },
        options: [
          {
            id: "bolso",
            say: { A: "Lorena, toma tu bolso. Jonás, no te muevas.", B: "Lorena, recoge tu bolso. Jonás, tú no te muevas.", C: "Lorena, recoge tu bolso con calma. Jonás, tú ni respires." },
            reply: { A: "Lorena recoge el bolso. Jonás tiembla. «Ya está. Ya lo tiene. ¿Me puedo ir?»", B: "Lorena recoge el bolso sin bajar la otra mano. Jonás tiembla: «Ya está, ya lo tiene. ¿Me puedo ir?»", C: "Lorena recoge el bolso con una mano todavía en alto. Jonás tiembla: «Ya lo tiene. ¿Puedo irme o esto sigue?»" },
            mood: "scared", next: "pistola-manos",
          },
          {
            id: "guardar",
            say: { A: "Bajen las manos. La guardo. Nadie dispara.", B: "Bajen las manos, los dos. La guardo. Aquí nadie dispara.", C: "Bajen las manos, por favor. La guardo; nadie va a disparar en un mercado." },
            reply: { A: "Jonás baja las manos y corre con el bolso. Lorena grita: «¡Se lo lleva!»", B: "Jonás baja las manos, recoge el bolso en el mismo movimiento y corre. Lorena grita: «¡Se lo lleva otra vez!»", C: "Jonás baja las manos y, en el mismo gesto, recoge el bolso y corre. Lorena grita: «¡Se lo lleva otra vez, qué desastre!»" },
            mood: "angry", end: "pistola-huye",
          },
          {
            id: "disparar",
            say: { A: "¡Al suelo! ¡Los dos!", B: "¡Al suelo, los dos, ahora!", C: "¡Al suelo los dos, y nadie se levanta hasta que yo lo diga!" },
            reply: { A: "Los dos se tiran al suelo. Un vendedor llama a la policía desde su puesto.", B: "Los dos se tiran al suelo entre las cajas. Un vendedor, escondido tras su puesto, llama a la policía en voz baja.", C: "Los dos se echan al suelo entre cajas de fruta. Un vendedor, agazapado tras su puesto, llama a la policía susurrando." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-manos": {
        who: "lorena", mood: "scared",
        line: {
          A: "Lorena tiene su bolso y las manos arriba. «Gracias… ¿Puedes guardar eso? Me da más miedo que él.»",
          B: "Lorena abraza su bolso con una mano y mantiene la otra en alto. «Gracias, de verdad… ¿Puedes guardar eso ya? Me da más miedo que él.»",
          C: "Lorena abraza el bolso con un brazo y mantiene el otro en alto, por si acaso. «Gracias… ¿Puedes guardar eso? Sinceramente, me asusta más que el ladrón.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Jonás, vete. Y no vuelvas.", B: "La guardo. Jonás, vete y no vuelvas por este mercado.", C: "La guardo. Jonás, desaparece y que este mercado no vuelva a verte." },
            reply: { A: "Jonás corre. Lorena baja las manos. «Qué noche.»", B: "Jonás sale corriendo sin mirar atrás. Lorena baja las manos: «Qué noche, por favor.»", C: "Jonás huye sin mirar atrás. Lorena baja las manos por fin: «Qué noche. Y todavía tengo que cocinar.»" },
            mood: "worried", end: "pistola-devuelve",
          },
          {
            id: "policia",
            say: { A: "Lo guardo cuando llegue la policía. Llámala.", B: "Lo guardo cuando llegue la policía. Llámala tú.", C: "Lo guardo cuando haya un uniforme delante. Llámalos tú." },
            reply: { A: "Lorena llama. Jonás llora. Llega la patrulla y te ve con la pistola.", B: "Lorena llama. Jonás llora con las manos en alto. La patrulla llega y lo primero que ve es tu pistola.", C: "Lorena llama; Jonás llora con los brazos arriba. La patrulla llega y, de todo el cuadro, lo primero que ve es tu pistola." },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "comida",
            say: { A: "Jonás, ¿por qué robas?", B: "Jonás, antes de irte: ¿por qué robas?", C: "Jonás, antes de que te vayas: ¿por qué robas, con esa cara de no servir para esto?" },
            reply: { A: "«Hambre. Tengo una hija.» Lorena baja las manos y saca un billete.", B: "«Hambre. Tengo una hija de tres años.» Lorena baja las manos despacio y saca un billete del bolso.", C: "«Hambre. Una hija de tres años.» Lorena baja las manos y, sin decir nada, saca un billete del bolso recuperado." },
            mood: "sad", end: "pistola-devuelve",
          },
        ],
      },

      // ── granada: el mercado entero huye y el bolso queda en el suelo.
      "granada-inicio": {
        who: "lorena", mood: "terror",
        line: {
          A: "Sacas la granada. Jonás grita «¡Una bomba!», suelta el bolso y corre. Todo el mercado corre. Lorena se queda sola, mirando su bolso en el suelo.",
          B: "Sacas la granada y Jonás grita «¡Una bomba!», suelta el bolso y huye. Todo el pasillo huye con él. Lorena se queda sola, mirándote a ti y al bolso en el suelo.",
          C: "Sacas la granada y Jonás grita «¡Una bomba!», suelta el bolso y huye. El pasillo entero lo imita en segundos. Lorena se queda sola, entre su bolso y tú, sin saber qué le asusta más.",
        },
        options: [
          {
            id: "bolso",
            say: { A: "Toma tu bolso. Es falsa. Calma.", B: "Recoge tu bolso. La granada es falsa, tranquila.", C: "Recoge tu bolso tranquila: la granada es de juguete, el robo era de verdad." },
            reply: { A: "Lorena recoge el bolso. «¿Falsa? ¡Mi corazón no!» Se ríe nerviosa.", B: "Lorena recoge el bolso temblando. «¿Falsa? ¡Mi corazón no es falso!» Y suelta una risa nerviosa.", C: "Lorena recoge el bolso. «¿Falsa? Pues mi infarto fue bastante real.» Y se ríe, nerviosa." },
            mood: "surprised", next: "granada-vacio",
          },
          {
            id: "gritar",
            say: { A: "¡Jonás! ¡Vuelve! ¡Es falsa!", B: "¡Jonás, vuelve, que es falsa!", C: "¡Jonás, vuelve, que es de juguete y todavía tenemos que hablar!" },
            reply: { A: "Jonás no vuelve. Lorena: «Mejor. Mi bolso está aquí.»", B: "Jonás no vuelve, claro. Lorena recoge el bolso: «Mejor así. Lo mío está aquí.»", C: "Jonás no vuelve, naturalmente. Lorena recoge su bolso: «Mejor. Lo que me importa está aquí, y él que corra.»" },
            mood: "neutral", next: "granada-vacio",
          },
          {
            id: "huir",
            say: { A: "¡Corre tú también!", B: "¡Corre tú también, no te quedes ahí!", C: "¡Corre tú también, que aquí ya no queda nadie sensato!" },
            reply: { A: "Lorena corre con el bolso. Tú te quedas solo con una granada falsa y un mercado vacío.", B: "Lorena recoge el bolso y corre. Te quedas solo con la granada en la mano y un mercado sin gente.", C: "Lorena agarra el bolso y corre. Te quedas solo, con la granada en la mano y un mercado vaciado por ti." },
            mood: "terror", end: "granada-huye",
          },
        ],
      },
      "granada-vacio": {
        who: "lorena", mood: "worried",
        line: {
          A: "El mercado está vacío. Lorena mira a su alrededor. «Los vendedores dejaron todo. Alguien va a llamar a la policía por tu granada.»",
          B: "El pasillo está vacío, con la comida en las parrillas y la música sonando para nadie. Lorena mira alrededor: «Dejaron todo abierto. Alguien ya habrá llamado a la policía por tu granada.»",
          C: "El mercado está desierto, con las parrillas humeando para nadie. Lorena mira alrededor: «Dejaron todo abierto. Seguro que alguien ya llamó a la policía por tu granada, y con razón.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Vamos a avisar que es falsa.", B: "La guardo. Vamos a decirles que es falsa antes de que llegue la policía.", C: "La guardo y vamos a explicar que es falsa antes de que esto se convierta en un operativo." },
            reply: { A: "Lorena asiente. «Yo lo explico. Tú no digas nada.» Un helicóptero suena a lo lejos.", B: "Lorena asiente. «Yo lo explico, que a mí me creen. Tú no digas nada.» A lo lejos suena un helicóptero.", C: "Lorena asiente. «Lo explico yo, que tengo cara de víctima. Tú no digas ni una palabra.» A lo lejos, un helicóptero." },
            mood: "worried", end: "granada-helicoptero",
          },
          {
            id: "comer",
            say: { A: "Mira, empanadas gratis. Nadie las cuida.", B: "Mira: empanadas calientes y nadie que las cuide.", C: "Mira el lado bueno: empanadas calientes y nadie que las cobre." },
            reply: { A: "Lorena se ríe. «Eres terrible.» Toma una empanada. «Pero tengo hambre.»", B: "Lorena se ríe sin querer. «Eres terrible.» Y toma una empanada. «Pero es verdad que tengo hambre.»", C: "Lorena se ríe a su pesar. «Eres terrible.» Toma una empanada: «Pero la noche me debe algo.»" },
            mood: "laugh", end: "granada-empanadas",
          },
          {
            id: "policia",
            say: { A: "Bien. Que vengan. Yo explico lo de Jonás.", B: "Mejor que vengan. Yo explico lo de Jonás y lo de la granada.", C: "Que vengan, mejor: explico lo de Jonás, lo de la granada y por qué el mercado está vacío." },
            reply: { A: "Llega la policía. No escuchan lo de Jonás. Solo ven la granada.", B: "Llega la policía con las luces encendidas. Lo de Jonás no les interesa: solo ven la granada.", C: "Llega la policía con las luces a tope. Lo de Jonás no les interesa en absoluto: la granada acapara la noche." },
            mood: "scared", end: "granada-policia",
          },
        ],
      },

      // ── gas: una nube y el ladrón cae.
      "gas-inicio": {
        who: "jonas", mood: "pain",
        line: {
          A: "Sacas el gas pimienta y le rocías la cara. Jonás grita, suelta el bolso y cae de rodillas. Lorena: «¡Eso! ¡Más!»",
          B: "Sacas el gas pimienta y le rocías la cara. Jonás grita, suelta el bolso y cae de rodillas entre las cajas. Lorena, desde atrás: «¡Eso! ¡Otra vez!»",
          C: "Sacas el gas pimienta y le rocías la cara sin avisar. Jonás grita, suelta el bolso y cae de rodillas entre cajas de fruta. Lorena: «¡Eso! ¡Otra, que lo merece!»",
        },
        options: [
          {
            id: "basta",
            say: { A: "No. Ya está. Lorena, tu bolso.", B: "No, ya es suficiente. Lorena, recoge tu bolso.", C: "Basta, ya está en el suelo. Lorena, recoge tu bolso; esto no es un espectáculo." },
            reply: { A: "Lorena recoge el bolso. Jonás llora en el suelo. «No veo… no veo nada.»", B: "Lorena recoge el bolso. Jonás llora en el suelo con las manos en la cara: «No veo nada… no veo nada.»", C: "Lorena recoge el bolso. Jonás, en el suelo, con las manos en los ojos: «No veo nada. ¿Esto se pasa?»" },
            mood: "worried", next: "gas-suelo",
          },
          {
            id: "agua",
            say: { A: "Jonás, agua. Lávate los ojos. Lorena, trae agua.", B: "Jonás, necesitas agua. Lorena, trae una botella de algún puesto.", C: "Jonás, agua, mucha agua en los ojos. Lorena, pide una botella en cualquier puesto." },
            reply: { A: "Lorena no se mueve. «¿Agua para el ladrón? ¿Estás loco?»", B: "Lorena no se mueve. «¿Agua para el ladrón? ¿Primero me roba y ahora lo cuido?»", C: "Lorena no se mueve ni un paso. «¿Agua para el que me robó? ¿En qué momento me volví enfermera?»" },
            mood: "angry", next: "gas-suelo",
          },
          {
            id: "mas",
            say: { A: "¡Para que aprendas!", B: "¡Para que aprendas a no robar!", C: "¡Para que aprendas que un bolso no vale esto!" },
            reply: { A: "Le rocías otra vez. Un vendedor te agarra el brazo. «¡Basta! ¡Lo vas a matar!»", B: "Le rocías una segunda vez. Un vendedor te agarra del brazo: «¡Basta! ¡Está en el suelo, lo vas a matar!»", C: "Rocías de nuevo. Un vendedor te sujeta el brazo: «¡Basta ya! ¡Está en el suelo, y a ti te está gustando!»" },
            mood: "furious", end: "gas-cae",
          },
        ],
      },
      "gas-suelo": {
        who: "lorena", mood: "worried",
        line: {
          A: "Jonás sigue en el suelo, tosiendo. Lorena tiene el bolso. «¿Y ahora? ¿Lo dejamos así? ¿Llamamos a alguien?»",
          B: "Jonás sigue en el suelo, tosiendo y con los ojos cerrados. Lorena abraza su bolso. «¿Y ahora qué? ¿Lo dejamos así en el suelo? ¿Llamamos a alguien?»",
          C: "Jonás sigue en el suelo, tosiendo con los ojos cerrados. Lorena abraza su bolso y te mira: «¿Y ahora? ¿Lo dejamos ahí tirado o llamamos a alguien?»",
        },
        options: [
          {
            id: "policia",
            say: { A: "Llamo a la policía. Y a una ambulancia.", B: "Llamo a la policía y también a una ambulancia, por los ojos.", C: "Llamo a la policía, y a una ambulancia también: los ojos no son broma." },
            reply: { A: "Lorena asiente. Jonás: «Policía no… ambulancia sí.»", B: "Lorena asiente. Jonás, desde el suelo: «Policía no, por favor… ambulancia, sí.»", C: "Lorena asiente. Jonás, con la cara roja: «Policía no, por favor… la ambulancia la acepto.»" },
            mood: "worried", end: "gas-policia",
          },
          {
            id: "dejar",
            say: { A: "Lo dejamos. Ya tiene su lección. Vamos.", B: "Lo dejamos aquí. Ya aprendió la lección. Vámonos.", C: "Lo dejamos: la lección ya la tiene en los ojos. Vámonos." },
            reply: { A: "Lorena mira a Jonás. «No. Yo traigo agua. Soy mejor que él.»", B: "Lorena mira a Jonás en el suelo y duda. «No… Yo traigo agua. No voy a ser como él.»", C: "Lorena mira a Jonás y niega con la cabeza. «No. Traigo agua. No pienso parecerme a él.»" },
            mood: "sad", end: "gas-agua",
          },
          {
            id: "hablar",
            say: { A: "Jonás, ¿por qué robas?", B: "Jonás, dime: ¿por qué robas?", C: "Jonás, ya que estás en el suelo: ¿por qué robas?" },
            reply: { A: "«Hambre. Tengo una hija.» Lorena suspira y va a buscar agua.", B: "«Hambre», tose. «Tengo una hija.» Lorena suspira y se va a buscar agua a un puesto.", C: "«Hambre», tose. «Tengo una hija de tres años.» Lorena suspira largo y va por agua." },
            mood: "sad", end: "gas-agua",
          },
        ],
      },

      // ── lápiz: el testigo que anota la cara del ladrón.
      "lapiz-inicio": {
        who: "jonas", mood: "surprised",
        line: {
          A: "Sacas el lápiz y empiezas a dibujar su cara. Jonás se para. «¿Me estás dibujando?» Lorena llega: «¡Mi bolso!»",
          B: "Sacas el lápiz y, sin moverte, empiezas a dibujar su cara en un papel. Jonás se queda parado: «¿Qué haces? ¿Me estás dibujando?» Lorena llega corriendo: «¡Mi bolso!»",
          C: "Sacas el lápiz y dibujas su cara en un papel con calma de retratista. Jonás frena, desconcertado: «¿Me estás dibujando ahora?» Lorena llega: «¡Mi bolso!»",
        },
        options: [
          {
            id: "retrato",
            say: { A: "Sí. Ojos, nariz, gorra. Para la policía.", B: "Sí: ojos, nariz, gorra, la cicatriz de la ceja. Para la policía.", C: "Sí: ojos, nariz, gorra y la cicatriz de la ceja. Un retrato para la policía, con dedicatoria." },
            reply: { A: "Jonás se toca la ceja. «¿Cicatriz? Qué buen ojo.» Baja el bolso.", B: "Jonás se toca la ceja, nervioso. «La cicatriz… qué buen ojo tienes.» Y baja el bolso sin darse cuenta.", C: "Jonás se toca la ceja sin querer. «La cicatriz… tienes buen ojo.» El bolso baja con su ánimo." },
            mood: "worried", next: "lapiz-retrato",
          },
          {
            id: "denuncia",
            say: { A: "Lorena, dicta: hora, lugar, qué había en el bolso.", B: "Lorena, dicta: hora, lugar y lo que había en el bolso. Escribo la denuncia.", C: "Lorena, dícteme: hora, lugar y contenido del bolso. La denuncia la escribo yo ahora mismo." },
            reply: { A: "Lorena dicta. «Llaves, dinero, foto de mi madre.» Jonás escucha y baja la cabeza.", B: "Lorena dicta sin respirar: «Llaves, dinero, la foto de mi madre.» Jonás escucha y baja la cabeza.", C: "Lorena dicta de corrido: «Llaves, dinero y la foto de mi madre.» Jonás escucha lo de la foto y baja la cabeza." },
            mood: "neutral", next: "lapiz-retrato",
          },
          {
            id: "tirar",
            say: { A: "Corre si quieres. Ya tengo tu cara.", B: "Corre si quieres: tu cara ya está en este papel.", C: "Corre si quieres; tu cara ya vive en este papel, y el papel no corre." },
            reply: { A: "Jonás corre con el bolso. Lorena: «¡¿Y eso qué sirve?!»", B: "Jonás corre con el bolso. Lorena, furiosa: «¡¿Y de qué me sirve un dibujo?!»", C: "Jonás huye con el bolso. Lorena, furiosa: «¡¿Y qué hago yo con un dibujo, enmarcarlo?!»" },
            mood: "angry", end: "lapiz-escapa",
          },
        ],
      },
      "lapiz-retrato": {
        who: "lorena", mood: "angry",
        line: {
          A: "Lorena mira el dibujo. «Es él. Igualito.» Jonás también mira. «Me hiciste feo.» Tiene el bolso en la mano todavía.",
          B: "Lorena mira el dibujo por encima de tu hombro. «Es él, igualito, hasta la gorra.» Jonás también mira: «Me hiciste más feo.» Pero sigue con el bolso en la mano.",
          C: "Lorena examina el dibujo. «Es él, clavado, hasta la gorra.» Jonás se asoma: «Me sacaste más feo de lo que soy.» Sigue con el bolso, eso sí.",
        },
        options: [
          {
            id: "cambio",
            say: { A: "Te doy el dibujo si devuelves el bolso.", B: "Te doy el dibujo y lo rompes, si devuelves el bolso ahora.", C: "Te regalo el retrato para que lo rompas, a cambio del bolso. Ahora." },
            reply: { A: "Jonás lo piensa. Devuelve el bolso. Rompe el dibujo. «Trato.»", B: "Jonás lo piensa dos segundos, devuelve el bolso y rompe el dibujo en mil pedazos. «Trato.»", C: "Jonás lo piensa, devuelve el bolso y hace confeti con el retrato. «Trato. Y la cicatriz no se nota tanto.»" },
            mood: "smile", end: "lapiz-trato",
          },
          {
            id: "policia",
            say: { A: "Lorena, lleva el dibujo a la policía. Jonás, ya está.", B: "Lorena, lleva este dibujo a la comisaría. Jonás, se acabó.", C: "Lorena, este retrato va a la comisaría. Jonás, de esta no te salvas con chistes." },
            reply: { A: "Jonás suelta el bolso y corre. Lorena guarda el dibujo. «Con esto lo encuentran.»", B: "Jonás suelta el bolso y sale corriendo. Lorena guarda el dibujo en el bolso: «Con esto lo encuentran seguro.»", C: "Jonás suelta el bolso y huye. Lorena guarda el retrato: «Con esto lo encuentran, y con la cicatriz, antes.»" },
            mood: "neutral", end: "lapiz-denuncia",
          },
          {
            id: "firmar",
            say: { A: "Jonás, firma el dibujo. Es tu confesión.", B: "Jonás, firma el dibujo. Es tu confesión y tu retrato.", C: "Jonás, firma el retrato: confesión y obra de arte en un solo papel." },
            reply: { A: "Jonás se ríe. Firma. Devuelve el bolso. «Eres raro.»", B: "Jonás se ríe sin querer, firma con el lápiz y devuelve el bolso. «Eres la persona más rara del mercado.»", C: "Jonás se ríe, firma con tu lápiz y devuelve el bolso. «Eres lo más raro que me ha pasado, y me han pasado cosas.»" },
            mood: "laugh", end: "lapiz-trato",
          },
        ],
      },

      // ── libro: el libro vuela y el ladrón cae.
      "libro-inicio": {
        who: "lorena", mood: "laugh",
        line: {
          A: "Lanzas tu libro a sus piernas. Jonás tropieza y cae con el bolso. Lorena se ríe. «¡Con un libro! ¡Lo tiraste con un libro!»",
          B: "Lanzas el libro a sus piernas. Jonás tropieza, cae de boca y el bolso vuela. Lorena, sin poder evitarlo, se ríe: «¡Con un libro! ¡Lo derribaste con un libro!»",
          C: "Lanzas el libro a sus piernas y Jonás tropieza, cae de bruces y el bolso sale volando. Lorena se ríe a carcajadas: «¡Con un libro! ¡Lo tumbaste con literatura!»",
        },
        options: [
          {
            id: "bolso",
            say: { A: "Lorena, el bolso. Jonás, quédate en el suelo.", B: "Lorena, recoge el bolso. Jonás, tú te quedas en el suelo.", C: "Lorena, el bolso es tuyo otra vez. Jonás, el suelo es tuyo un rato más." },
            reply: { A: "Lorena recoge el bolso y el libro. «¿De qué es? Quiero leerlo.»", B: "Lorena recoge el bolso y, de paso, el libro. «¿De qué trata? Después de esto, quiero leerlo.»", C: "Lorena recoge bolso y libro. «¿De qué va? Un libro que derriba ladrones merece una lectura.»" },
            mood: "smile", next: "libro-suelo",
          },
          {
            id: "jonas",
            say: { A: "Jonás, ¿estás bien? Fue un libro, no una piedra.", B: "Jonás, ¿estás bien? Era un libro, no una piedra.", C: "Jonás, ¿estás entero? Era un libro de bolsillo, no un diccionario." },
            reply: { A: "Jonás se toca la nariz. «Me rompiste la nariz con un libro. Qué vergüenza.»", B: "Jonás se toca la nariz, que sangra. «Me rompiste la nariz con un libro. Qué vergüenza, por favor.»", C: "Jonás se toca la nariz sangrante. «Una nariz rota por un libro. Nadie me va a creer.»" },
            mood: "pain", next: "libro-suelo",
          },
          {
            id: "huir",
            say: { A: "¡Corre, Jonás! ¡Antes de que lleguen los vendedores!", B: "¡Corre, Jonás, antes de que te agarren los vendedores!", C: "¡Corre, Jonás, que los vendedores vienen y no leen!" },
            reply: { A: "Jonás se levanta y corre sin el bolso. Lorena te mira. «¿Lo dejaste ir?»", B: "Jonás se levanta y huye sin el bolso. Lorena te mira, confundida: «¿Lo dejaste ir así?»", C: "Jonás se levanta y escapa sin el bolso. Lorena te mira: «¿Lo tumbas con un libro y luego lo dejas ir? Qué criterio.»" },
            mood: "neutral", end: "libro-huye",
          },
        ],
      },
      "libro-suelo": {
        who: "jonas", mood: "sad",
        line: {
          A: "Jonás, en el suelo, mira el libro. «Yo leía. Antes. Cuando tenía trabajo.» Lorena deja de reír.",
          B: "Jonás, todavía en el suelo, mira el libro de reojo. «Yo leía, antes. Cuando tenía trabajo y tiempo.» Lorena deja de reír de golpe.",
          C: "Jonás, aún en el suelo, mira el libro con algo parecido a la nostalgia. «Yo leía, antes. Cuando tenía trabajo y una mesa.» Lorena deja de reír.",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Toma el libro. Y devuelve el bolso. Trato.", B: "Toma el libro, es tuyo. Y devuelve el bolso. Trato hecho.", C: "Quédate el libro; a cambio, el bolso vuelve a su dueña. Trato." },
            reply: { A: "Jonás abraza el libro. Lorena tiene su bolso. «Qué raro todo», dice ella.", B: "Jonás abraza el libro como un premio. Lorena recupera su bolso. «Qué raro es todo esto», dice ella.", C: "Jonás abraza el libro como si le devolvieran algo. Lorena abraza su bolso. «Qué noche tan rara», dice." },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "policia",
            say: { A: "Lorena, llama a la policía. Él no se mueve.", B: "Lorena, llama a la policía. Él no se va a mover de ahí.", C: "Lorena, llama a la policía. Él no se mueve: el libro lo vigila." },
            reply: { A: "Lorena llama. Jonás no intenta escapar. Solo lee la primera página.", B: "Lorena llama. Jonás no intenta escapar: abre el libro y lee la primera página mientras espera.", C: "Lorena llama. Jonás no intenta huir; abre el libro y lee la primera página, como si tuviera tiempo." },
            mood: "neutral", end: "libro-policia",
          },
          {
            id: "trabajo",
            say: { A: "¿Qué trabajo tenías? Aquí buscan gente.", B: "¿Qué trabajo tenías? En el mercado siempre buscan gente.", C: "¿A qué te dedicabas? En el mercado siempre falta alguien que sepa leer un pedido." },
            reply: { A: "«Cocinero.» Lorena: «Don Aurelio busca cocinero. Mañana. Y devuélveme el bolso.»", B: "«Cocinero, cinco años.» Lorena, seca: «Don Aurelio busca cocinero. Mañana a las siete. Y el bolso, ahora.»", C: "«Cocinero, cinco años.» Lorena, cortante: «Don Aurelio necesita cocinero. Mañana a las siete. El bolso, ya.»" },
            mood: "smile", end: "libro-regalo",
          },
        ],
      },

      // ── corazón: el ladrón se derrumba.
      "corazon-inicio": {
        who: "jonas", mood: "sad",
        line: {
          A: "Usas el corazón. Jonás se para. Suelta el bolso. Llora. «Perdón. Perdón. No sé qué hago.» Lorena se queda sin palabras.",
          B: "Usas el corazón. Jonás frena en seco, suelta el bolso y se echa a llorar. «Perdón, perdón, no sé qué estoy haciendo.» Lorena, que venía gritando, se queda sin palabras.",
          C: "Usas el corazón. Jonás frena, suelta el bolso y se derrumba en llanto. «Perdón. No sé ni qué estoy haciendo.» Lorena, que llegaba a gritos, se queda muda.",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Ven. Respira. Dime qué te pasa.", B: "Ven aquí. Respira. Y cuéntame qué te pasa.", C: "Ven aquí y respira. Ahora cuéntame qué te pasa, de verdad." },
            reply: { A: "Jonás te abraza llorando. «Mi hija no come hace dos días.» Lorena se tapa la boca.", B: "Jonás se deja abrazar y llora en tu hombro. «Mi hija no come bien hace dos días.» Lorena se tapa la boca.", C: "Jonás se abraza a ti y llora sin freno. «Mi hija lleva dos días comiendo mal.» Lorena se tapa la boca con las dos manos." },
            mood: "love", next: "corazon-jonas",
          },
          {
            id: "lorena",
            say: { A: "Lorena, tu bolso. Y mira: él no es malo.", B: "Lorena, aquí está tu bolso. Y míralo: no es un criminal.", C: "Lorena, tu bolso está intacto. Y míralo bien: esto no es un criminal, es un naufragio." },
            reply: { A: "Lorena recoge el bolso. Mira a Jonás. «No… no parece.»", B: "Lorena recoge el bolso y mira a Jonás largo rato. «No… no lo parece. Pero me robó.»", C: "Lorena recoge el bolso y observa a Jonás. «No lo parece, no. Pero me robó, y eso también es verdad.»" },
            mood: "love", next: "corazon-jonas",
          },
          {
            id: "irse",
            say: { A: "Vete a casa. No lo hagas más.", B: "Vete a casa, Jonás. Y no lo vuelvas a hacer.", C: "Vete a casa, Jonás, y que esta sea la última vez que te vemos así." },
            reply: { A: "Jonás se va caminando despacio. Lorena recoge el bolso. «Gracias. Creo.»", B: "Jonás se va caminando despacio, sin correr. Lorena recoge el bolso: «Gracias… creo.»", C: "Jonás se aleja despacio, sin correr por primera vez. Lorena recoge el bolso: «Gracias, supongo.»" },
            mood: "love", end: "corazon-se-va",
          },
        ],
      },
      "corazon-jonas": {
        who: "lorena", mood: "love",
        line: {
          A: "Lorena se acerca a Jonás. «¿Tu hija tiene hambre?» Él asiente. Lorena abre el bolso. «Pues vamos a comprar comida. Ahora.»",
          B: "Lorena se acerca a Jonás despacio. «¿Tu hija tiene hambre?» Él asiente sin levantar la cara. Lorena abre su bolso: «Pues vamos a comprar comida. Ahora mismo, los tres.»",
          C: "Lorena se acerca a Jonás, bolso en mano. «¿Tu hija tiene hambre?» Él asiente sin mirarla. Lorena abre el bolso: «Entonces vamos a comprar comida ahora mismo, los tres.»",
        },
        options: [
          {
            id: "comida",
            say: { A: "Vamos al puesto de Don Aurelio. Yo invito.", B: "Vamos al puesto de Don Aurelio. Invito yo.", C: "Al puesto de Don Aurelio, los tres. Invito yo, y nadie discute." },
            reply: { A: "Los tres caminan juntos. Jonás no deja de llorar. Lorena le pone la mano en la espalda.", B: "Los tres caminan hacia el humo de la parrilla. Jonás no deja de llorar; Lorena le pone la mano en la espalda.", C: "Los tres caminan hacia el humo de las empanadas. Jonás sigue llorando y Lorena, sin pensarlo, le pone la mano en la espalda." },
            mood: "love", end: "corazon-comida",
          },
          {
            id: "abrazo",
            say: { A: "Lorena, eres muy buena. Abrázalo.", B: "Lorena, eres mejor persona que esta noche. Abrázalo.", C: "Lorena, eres mejor que esta noche entera. Abrázalo, que lo necesita más que el dinero." },
            reply: { A: "Lorena abraza a Jonás. Él llora más. Los vendedores miran sin entender.", B: "Lorena abraza a Jonás, que llora todavía más. Los vendedores miran la escena sin entender nada.", C: "Lorena abraza a Jonás y él se deshace. Los vendedores miran sin entender cómo un robo terminó así." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "trabajo",
            say: { A: "Y mañana, trabajo. Don Aurelio busca ayudante.", B: "Y mañana, a trabajar: Don Aurelio busca ayudante.", C: "Y mañana, trabajo: Don Aurelio busca ayudante, y tú ya sabes dónde está el puesto." },
            reply: { A: "Jonás asiente. Lorena: «Yo vengo a ver si viniste.» Jonás sonríe por fin.", B: "Jonás asiente con fuerza. Lorena: «Y yo paso mañana a ver si viniste.» Jonás sonríe por primera vez.", C: "Jonás asiente. Lorena: «Y yo paso mañana a comprobarlo.» Jonás sonríe por primera vez en la noche." },
            mood: "love", end: "corazon-comida",
          },
        ],
      },
    },
    ends: {
      devuelve: { text: { A: "Jonás devuelve el bolso y se va caminando. Lorena revisa todo. «Está completo.»", B: "Jonás devuelve el bolso y se aleja caminando, sin correr. Lorena revisa el contenido: «Está todo. Hasta la foto.»", C: "Jonás devuelve el bolso y se aleja sin correr, como quien ya no tiene prisa. Lorena lo revisa: «Está todo, hasta la foto de mi madre.»" }, change: "se-va", recap: "El ladrón del mercado devolvió el bolso sin pelear." },
      escapa: { text: { A: "Jonás desaparece entre los puestos con el bolso. Lorena llora. Tú llamas a la policía.", B: "Jonás desaparece entre los puestos con el bolso. Lorena llora en medio del pasillo y tú llamas a la policía con la descripción.", C: "Jonás se pierde entre los puestos con el bolso. Lorena llora en mitad del pasillo mientras tú das la descripción a la policía." }, change: "huye", recap: "El ladrón escapó con el bolso de Lorena." },
      policia: { text: { A: "Llega la patrulla. Se llevan a Jonás. Lorena tiene su bolso y no sonríe.", B: "Llega la patrulla y se lleva a Jonás esposado. Lorena tiene su bolso en las manos y no sonríe.", C: "Llega la patrulla y Jonás se va esposado. Lorena abraza su bolso y no sonríe: ganar así no le sabe a nada." }, change: "policia", recap: "La policía se llevó al ladrón del mercado." },
      pelea: { text: { A: "Los vendedores golpean a Jonás. Lorena grita que paren. Tú también. Nadie escucha.", B: "Los vendedores golpean a Jonás entre los puestos. Lorena grita que paren, tú también, y nadie escucha hasta que llega la policía.", C: "Los vendedores golpean a Jonás entre las cajas de fruta. Lorena grita que paren, tú también; nadie escucha hasta que llega la policía." }, change: "pelea", recap: "El robo del mercado terminó en una paliza entre los puestos." },
      perdon: { text: { A: "Jonás se va con el billete. Lorena abraza su bolso. «Ojalá venga mañana.»", B: "Jonás se va con el billete apretado en la mano. Lorena abraza su bolso: «Ojalá venga mañana. Ojalá.»", C: "Jonás se aleja con el billete en el puño. Lorena abraza su bolso: «Ojalá venga mañana. Si no, al menos su hija cena.»" }, change: "sonrie", recap: "Lorena perdonó al ladrón y le dio dinero para su hija." },
      "cuchillo-huye": { text: { A: "Jonás huye. Tu mano sangra. Lorena recoge el bolso y te mira con miedo.", B: "Jonás huye con su cuchillo. Tu mano sangra por el tuyo. Lorena recoge el bolso y te mira con tanto miedo como a él.", C: "Jonás huye con su cuchillo y tu mano sangra por el tuyo. Lorena recoge el bolso y te mira con el mismo miedo que a él." }, change: "huye", recap: "Dos cuchillos en el mercado: el ladrón huyó y tú te cortaste." },
      "cuchillo-suelta": { text: { A: "Jonás huye sin el bolso. Guardas el cuchillo. Lorena: «Nunca más vuelvo de noche.»", B: "Jonás huye sin el bolso. Guardas el cuchillo con la mano temblando. Lorena: «Nunca más vuelvo al mercado de noche.»", C: "Jonás huye sin el bolso y guardas el cuchillo con la mano temblando. Lorena: «Nunca más vuelvo de noche. Ni con escolta.»" }, change: "huye", recap: "El duelo de cuchillos terminó con el ladrón huyendo sin el bolso." },
      "cuchillo-policia": { text: { A: "La policía recoge dos cuchillos. Jonás y tú van a la comisaría. Lorena tiene su bolso.", B: "La policía recoge dos cuchillos del suelo. Jonás y tú terminan en la comisaría; Lorena, al menos, tiene su bolso.", C: "La policía recoge dos cuchillos y dos versiones. Jonás y tú terminan en la comisaría; Lorena se va con su bolso y sin ganas de testificar." }, change: "policia", recap: "Los dos cuchillos del mercado terminaron en la comisaría." },
      "pistola-huye": { text: { A: "Jonás escapa con el bolso. Lorena te grita: «¡Tenías una pistola y lo dejaste ir!»", B: "Jonás escapa con el bolso por segunda vez. Lorena te grita: «¡Tenías una pistola y lo dejaste ir! ¿Para qué la llevas?»", C: "Jonás escapa con el bolso por segunda vez. Lorena te grita: «¡Con una pistola en la mano y lo dejas ir! ¿De adorno la llevas?»" }, change: "huye", recap: "Guardaste la pistola y el ladrón volvió a escapar." },
      "pistola-policia": { text: { A: "La policía ve tu pistola. Te apuntan. Jonás y Lorena, en el suelo, gritan versiones distintas.", B: "La policía ve tu pistola antes que nada. Te apuntan y levantas las manos. Jonás y Lorena, desde el suelo, gritan dos versiones distintas.", C: "La policía ve tu pistola antes que cualquier otra cosa. Te apuntan, levantas las manos, y Jonás y Lorena gritan desde el suelo dos versiones incompatibles." }, change: "manos-arriba", recap: "Tu pistola en el mercado terminó con todos apuntados." },
      "pistola-devuelve": { text: { A: "Guardas la pistola. Lorena tiene su bolso. Jonás se fue con un billete y mucho miedo.", B: "Guardas la pistola. Lorena tiene su bolso y Jonás se fue con un billete en la mano y el miedo en el cuerpo.", C: "Guardas la pistola. Lorena recupera su bolso y Jonás se va con un billete y un miedo que le va a durar semanas." }, change: "sonrie", recap: "Con la pistola a la vista, el ladrón devolvió el bolso." },
      "granada-huye": { text: { A: "Estás solo en el mercado vacío con una granada falsa. Suenan sirenas.", B: "Te quedas solo en el mercado vacío, con la granada falsa en la mano y las sirenas acercándose.", C: "Te quedas solo en un mercado vacío, con una granada de juguete y un coro de sirenas que no sabe que es de juguete." }, change: "huye", recap: "La granada vació el mercado y te dejó solo." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el mercado vacío. Lorena explica. Nadie la escucha.", B: "Un helicóptero ilumina el mercado vacío. Lorena explica a gritos que es falsa. Nadie la escucha.", C: "Un helicóptero inunda de luz el mercado desierto. Lorena explica a gritos que es de juguete; nadie la escucha por encima de las aspas." }, change: "helicoptero", recap: "La granada falsa trajo un helicóptero al mercado." },
      "granada-empanadas": { text: { A: "Lorena y tú comen empanadas en el mercado vacío. Ella tiene su bolso. Nadie los molesta.", B: "Lorena y tú comen empanadas en un mercado vacío. Ella tiene su bolso y, por un rato, nadie los molesta.", C: "Lorena y tú cenan empanadas en un mercado desierto. Ella abraza su bolso; por un rato, la noche se porta bien." }, change: "sonrie", recap: "La granada vació el mercado y terminaron comiendo empanadas." },
      "granada-policia": { text: { A: "La policía te lleva por la granada. Lorena se queda con su bolso y sin ladrón.", B: "La policía te lleva por la granada falsa. Lorena se queda con su bolso recuperado y sin ningún ladrón que denunciar.", C: "La policía te lleva por la granada, falsa o no. Lorena se queda con su bolso y sin ladrón, lo que, bien mirado, no está mal." }, change: "policia", recap: "La granada te llevó a la comisaría y el ladrón quedó libre." },
      "gas-cae": { text: { A: "Jonás queda en el suelo. Un vendedor te quita el gas. Lorena llama a una ambulancia.", B: "Jonás queda en el suelo sin poder abrir los ojos. Un vendedor te arranca el gas de la mano y Lorena llama a una ambulancia.", C: "Jonás queda en el suelo, ciego por un rato. Un vendedor te quita el gas de la mano y Lorena, pálida, llama a una ambulancia." }, change: "cae", recap: "Rociaste al ladrón dos veces y terminó en el suelo." },
      "gas-policia": { text: { A: "Llegan la policía y la ambulancia. Jonás se va en las dos. Lorena guarda su bolso.", B: "Llegan la policía y la ambulancia casi a la vez. Jonás se va con las dos. Lorena guarda su bolso y no sabe qué sentir.", C: "Policía y ambulancia llegan casi juntas y Jonás se va repartido entre ambas. Lorena guarda su bolso sin saber qué sentir." }, change: "policia", recap: "El gas pimienta detuvo al ladrón hasta que llegó la policía." },
      "gas-agua": { text: { A: "Lorena le lava los ojos a Jonás con agua. Él llora. Ella también.", B: "Lorena le lava los ojos a Jonás con una botella de agua. Él llora por el gas y por lo otro. Ella también.", C: "Lorena le lava los ojos a Jonás con agua de un puesto. Él llora por el gas y por todo lo demás; ella también." }, change: "triste", recap: "Lorena ayudó al ladrón que tú habías rociado." },
      "lapiz-escapa": { text: { A: "Jonás escapa. Lorena se queda con tu dibujo. «Al menos sé su cara.»", B: "Jonás escapa con el bolso. Lorena se queda con tu dibujo: «Al menos sé qué cara tiene el que me robó.»", C: "Jonás escapa con el bolso. Lorena se queda con tu retrato: «Al menos conozco la cara del que me arruinó la noche.»" }, change: "huye", recap: "Dibujaste al ladrón, pero escapó con el bolso." },
      "lapiz-trato": { text: { A: "Lorena tiene su bolso. Jonás se va con el dibujo roto en el bolsillo. Tú guardas el lápiz.", B: "Lorena tiene su bolso. Jonás se va con los pedazos del dibujo en el bolsillo. Tú guardas el lápiz, satisfecho.", C: "Lorena tiene su bolso y Jonás se va con los restos del retrato en el bolsillo. Guardas el lápiz: hoy valió más que un arma." }, change: "sonrie", recap: "Un retrato a lápiz convenció al ladrón de devolver el bolso." },
      "lapiz-denuncia": { text: { A: "Lorena va a la comisaría con tu dibujo. Jonás huyó sin el bolso.", B: "Lorena se va a la comisaría con tu dibujo en el bolso. Jonás huyó, pero sin nada.", C: "Lorena se va a la comisaría con tu retrato en el bolso. Jonás huyó sin nada, salvo una cicatriz famosa." }, change: "llama", recap: "Tu retrato del ladrón fue a la comisaría." },
      "libro-huye": { text: { A: "Jonás huye sin el bolso. Lorena recoge tu libro. «Te lo devuelvo. Es un arma.»", B: "Jonás huye sin el bolso. Lorena recoge tu libro del suelo: «Toma. Es peligroso, este libro.»", C: "Jonás huye sin el bolso. Lorena recoge tu libro del suelo: «Toma. Cuidado con esto, que derriba gente.»" }, change: "huye", recap: "Derribaste al ladrón con un libro y luego lo dejaste ir." },
      "libro-regalo": { text: { A: "Jonás se va con tu libro. Lorena con su bolso. Mañana, dicen, trabajo.", B: "Jonás se va con tu libro bajo el brazo y Lorena con su bolso. Mañana a las siete, dicen, hay trabajo.", C: "Jonás se va con tu libro bajo el brazo; Lorena, con su bolso. Mañana a las siete hay trabajo, si la noche cumple." }, change: "sonrie", recap: "El ladrón se fue con tu libro y una oferta de trabajo." },
      "libro-policia": { text: { A: "La policía encuentra a Jonás leyendo tu libro en el suelo. Se lo llevan con el libro.", B: "La policía encuentra a Jonás sentado en el suelo, leyendo tu libro. Se lo llevan con el libro en la mano.", C: "La policía encuentra a Jonás leyendo tu libro en el suelo del mercado. Se lo llevan, y el libro va con él." }, change: "policia", recap: "El ladrón esperó a la policía leyendo tu libro." },
      "corazon-se-va": { text: { A: "Jonás se va caminando. Lorena tiene su bolso. Nadie llamó a nadie.", B: "Jonás se va caminando despacio y Lorena guarda su bolso. Nadie llamó a nadie, y está bien así.", C: "Jonás se aleja despacio y Lorena guarda su bolso. Nadie llamó a nadie, y por una vez eso parece lo correcto." }, change: "se-va", recap: "El corazón detuvo al ladrón sin policía ni golpes." },
      "corazon-comida": { text: { A: "Los tres comen empanadas. Jonás guarda dos para su hija. Lorena paga.", B: "Los tres comen empanadas en el puesto de Don Aurelio. Jonás guarda dos para su hija y Lorena paga sin que nadie se lo pida.", C: "Los tres cenan empanadas en el puesto de Don Aurelio. Jonás guarda dos para su hija y Lorena paga la cuenta de todos." }, change: "sonrie", recap: "El robo terminó con los tres cenando empanadas." },
      "corazon-abrazo": { text: { A: "Lorena abraza a Jonás en medio del mercado. Los vendedores aplauden sin entender.", B: "Lorena abraza a Jonás en medio del pasillo. Los vendedores aplauden sin entender muy bien qué pasó.", C: "Lorena abraza a Jonás en mitad del pasillo y los vendedores aplauden sin entender nada de lo que acaban de ver." }, change: "abraza", recap: "La víctima abrazó al ladrón en medio del mercado." },
    },
    speak: {
      A1: "¿Qué llevas en tu bolso o mochila?",
      A2: "¿Qué haces si ves un robo en la calle?",
      B1: "¿Alguna vez te han robado algo, y cómo reaccionaste?",
      B2: "¿Perdonarías a alguien que te roba por necesidad?",
      C1: "¿Qué distingue la justicia de la venganza cuando una multitud atrapa a un ladrón?",
      C2: "¿Hasta qué punto la necesidad justifica un delito, y quién tiene derecho a juzgarlo?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Tienes miedo de los cuchillos?", B: "¿Qué harías si alguien te amenazara con un cuchillo?", C: "¿Por qué una amenaza responde casi siempre con otra amenaza mayor?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si alguien levanta las manos?", B: "¿Crees que un arma protege más de lo que pone en peligro?", C: "¿Qué poder tiene quien sostiene un arma, y qué le cuesta ese poder?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué haces si todos corren en un mercado?", B: "¿Cuál es la broma más peligrosa que has visto?", C: "¿Qué revela de una ciudad la velocidad con que un pasillo lleno se vacía?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Usarías gas pimienta contra un ladrón?", B: "¿Hasta dónde te defenderías para recuperar algo tuyo?", C: "¿Cuándo la defensa propia deja de ser defensa y se convierte en castigo?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Sabes dibujar caras?", B: "¿Podrías describir la cara de alguien que viste una sola vez?", C: "¿Qué recuerda mejor tu memoria de un desconocido: lo que vio o lo que sintió?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lanzas cosas cuando tienes miedo?", B: "¿Qué objeto has usado alguna vez para algo que no era su función?", C: "¿Por qué la risa cambia tan rápido el sentido de una situación violenta?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Perdonas fácil?", B: "¿Has perdonado a alguien que te hizo daño, y qué cambió después?", C: "¿Qué hace falta para que una víctima vea a la persona detrás del delito?" } },
    },
  },

  // ───────────────────────────── ESCENA 4 · MERCADO ─────────────────────────────
  {
    id: "mercado-inspectores",
    kind: "escena",
    district: "mercado",
    title: "¡Que no se escape!",
    verb: "DECIDIR",
    goal: "Entender un conflicto a gritos, tomar partido o mediar, negociar con una autoridad y defender a alguien.",
    cast: [
      {
        id: "nilda", name: "Nilda", role: "Vendedora ambulante que huye con su carrito",
        age: "adult", body: "f", build: "heavy", height: 1.58,
        hair: "bun", hairColor: "#3a2416", skin: "#b57d57",
        top: "apron", topColor: "#b3502e", bottom: "skirt", bottomColor: "#2f3440",
        extras: ["headscarf"], pose: "run", props: ["cart"],
      },
      {
        id: "garay", name: "Inspector Garay", role: "Inspector municipal, con carpeta y chaleco",
        age: "adult", body: "m", build: "average", height: 1.78,
        hair: "short", hairColor: "#8a8a8a", skin: "#e0b089",
        top: "vest", topColor: "#2f6a5a", bottom: "pants", bottomColor: "#26303a",
        extras: ["badge"], pose: "arms", props: ["clipboard"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "garay", mood: "angry",
        line: {
          A: "Una señora corre hacia ti empujando un carrito de tamales. Detrás, un hombre con chaleco grita: «¡Deténgala! ¡Inspección municipal! ¡No tiene permiso!»",
          B: "Una señora corre hacia ti empujando un carrito de tamales que pierde vapor por todos lados. Detrás, un hombre con chaleco verde grita: «¡Deténgala! ¡Inspección municipal! ¡No tiene permiso!»",
          C: "Una señora corre hacia ti con un carrito de tamales que humea como una locomotora. Detrás, un hombre con chaleco verde y carpeta grita: «¡Deténgala! ¡Inspección municipal! ¡Esa mujer no tiene permiso!»",
        },
        options: [
          {
            id: "bloquear",
            say: { A: "Señora, pare. ¿Qué pasa?", B: "Señora, pare un momento. ¿Qué está pasando?", C: "Señora, frene un segundo. ¿Qué está pasando aquí, con calma?" },
            reply: { A: "La señora frena. «¡Tú también! ¡Tengo tres hijos! ¡Déjame pasar!»", B: "La señora frena el carrito contra tus piernas. «¡¿Tú también?! ¡Tengo tres hijos y esta es mi comida! ¡Déjame pasar!»", C: "La señora frena el carrito a un centímetro de ti. «¡¿Tú también?! Tengo tres hijos y este carrito es mi sueldo. ¡Déjame pasar!»" },
            mood: "furious", next: "nilda",
          },
          {
            id: "dejar",
            say: { A: "Pase, señora. Yo no vi nada.", B: "Pase, señora, pase. Yo no vi nada.", C: "Pase, señora, que yo esta noche no veo nada." },
            reply: { A: "La señora pasa. El inspector llega furioso. «¡Usted la ayudó! ¡Eso es un delito!»", B: "La señora pasa a toda velocidad. El inspector llega sin aire, furioso: «¡Usted la dejó pasar! ¡Eso es obstrucción!»", C: "La señora desaparece con su locomotora. El inspector llega sin aliento: «¡Usted la dejó pasar! ¡Obstrucción a la autoridad, y lo apunto!»" },
            mood: "furious", next: "garay",
          },
          {
            id: "preguntar",
            say: { A: "¿Por qué la persigue? ¿Qué hizo?", B: "¿Por qué la persigue así? ¿Qué hizo exactamente?", C: "¿Por qué la persigue como a una criminal? ¿Qué hizo, además de vender tamales?" },
            reply: { A: "El inspector respira fuerte. «Vende sin permiso. Y alguien se enfermó con su comida.»", B: "El inspector recupera el aliento. «Vende sin permiso sanitario. Y anoche dos personas se enfermaron con tamales del mercado.»", C: "El inspector se apoya en un puesto. «Vende sin permiso sanitario, y anoche dos personas acabaron en la clínica por unos tamales. Puede que no sean suyos. Puede.»" },
            mood: "worried", next: "garay",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Inspector, mírela. Es una madre, no una criminal.", B: "Inspector, mírela bien: es una madre con un carrito, no una criminal.", C: "Inspector, mírela: es una madre con un carrito de tamales, no el enemigo público de la noche." },
            reply: { A: "El inspector baja la carpeta. «Mi madre vendía tamales. Lo sé.»", B: "El inspector baja la carpeta despacio. «Mi madre vendía tamales en esta misma calle. Lo sé mejor que nadie.»", C: "El inspector baja la carpeta y la voz. «Mi madre vendía tamales en esta esquina. No hace falta que me lo expliquen.»" },
            mood: "love", next: "corazon-garay",
          },
        },
      },
      nilda: {
        who: "nilda", mood: "furious",
        line: {
          A: "Nilda agarra el carrito con las dos manos. «Me llamo Nilda. Veinte años aquí. Ese hombre me quiere quitar todo. ¿De qué lado estás?»",
          B: "Nilda agarra el carrito como si fuera un hijo más. «Me llamo Nilda y llevo veinte años en este mercado. Ese hombre quiere llevarse mi carrito. ¿De qué lado estás tú?»",
          C: "Nilda se aferra al carrito con las dos manos. «Me llamo Nilda, veinte años en este mercado, y ese hombre quiere llevarse mi carrito y mi vida. ¿De qué lado estás?»",
        },
        options: [
          {
            id: "suyo",
            say: { A: "Del suyo. Corra. Yo hablo con él.", B: "Del suyo, Nilda. Corra, que yo lo entretengo.", C: "Del suyo, Nilda. Corra, que al inspector lo entretengo yo con preguntas." },
            reply: { A: "Nilda corre con el carrito. El inspector llega y te mira. «Usted la dejó ir.»", B: "Nilda sale disparada con el carrito. El inspector llega y te mira con la carpeta en alto: «Usted la dejó ir. Lo anoto.»", C: "Nilda arranca con el carrito como un tren. El inspector llega y te apunta con la carpeta: «Usted la dejó ir, y eso también se anota.»" },
            mood: "angry", end: "escapa",
          },
          {
            id: "hablar",
            say: { A: "De ninguno. Hable con él. Yo me quedo.", B: "De ninguno. Hable con él y yo me quedo como testigo.", C: "De ninguno; soy testigo, no juez. Hable con él, y yo escucho." },
            reply: { A: "El inspector llega. «¡Permiso! ¡Ahora!» Nilda: «¡No tengo! ¡Cuesta mucho!»", B: "El inspector llega sin aire. «¡El permiso, ahora!» Nilda grita: «¡No tengo! ¡Cuesta más de lo que gano en un mes!»", C: "El inspector llega jadeando. «¡El permiso, ahora!» Nilda: «¡No tengo! ¡Cuesta más que todo lo que vendo en un mes!»" },
            mood: "worried", next: "garay",
          },
          {
            id: "enfermos",
            say: { A: "Dicen que alguien se enfermó con sus tamales.", B: "Dicen que dos personas se enfermaron con sus tamales anoche.", C: "El inspector dice que dos personas terminaron en la clínica por unos tamales. ¿Eran suyos?" },
            reply: { A: "Nilda se pone roja. «¡Mentira! Mis tamales son limpios. ¡Pruébalo!» Te da uno.", B: "Nilda se pone roja de rabia. «¡Mentira! Mis tamales son más limpios que su carpeta. ¡Pruébalo!» Y te pone uno en la mano.", C: "Nilda enrojece de furia. «¡Mentira! Mis tamales están más limpios que su oficina. ¡Pruébalo!» Y te planta uno caliente en la mano." },
            mood: "angry", next: "garay",
          },
        ],
      },
      garay: {
        who: "garay", mood: "angry",
        line: {
          A: "El inspector abre la carpeta. «Usted se mete en algo oficial. Dígame su nombre. ¿O prefiere que llame a la policía?»",
          B: "El inspector abre la carpeta y saca un bolígrafo. «Usted se está metiendo en un procedimiento oficial. Nombre, por favor. ¿O prefiere que llame a la policía?»",
          C: "El inspector abre la carpeta con solemnidad y destapa el bolígrafo. «Se está metiendo en un procedimiento oficial. Nombre, por favor. ¿O prefiere que lo resuelva la policía?»",
        },
        options: [
          {
            id: "acuerdo",
            say: { A: "Inspector, déjela trabajar esta noche. Mañana saca el permiso.", B: "Inspector, déjela terminar la noche. Mañana la acompaño a sacar el permiso.", C: "Inspector, déjela terminar la noche. Mañana la acompaño yo mismo a la oficina del permiso, y usted gana una vendedora legal." },
            reply: { A: "El inspector mira a Nilda. «Mañana a las ocho. Si no, multa doble.» Nilda asiente.", B: "El inspector mira a Nilda largo rato. «Mañana a las ocho en la oficina. Si no aparece, multa doble.» Nilda asiente sin respirar.", C: "El inspector mide a Nilda con la mirada. «Mañana a las ocho, en la oficina. Si no aparece, multa doble y me llevo el carrito.» Nilda asiente." },
            mood: "neutral", end: "acuerdo",
          },
          {
            id: "multa",
            say: { A: "Haga su trabajo. Yo no tengo nada que ver.", B: "Haga su trabajo, inspector. Yo no tengo nada que ver con esto.", C: "Haga su trabajo, inspector; yo solo pasaba, y pienso seguir pasando." },
            reply: { A: "El inspector escribe una multa. Nilda llora. «Tres meses de trabajo.»", B: "El inspector escribe la multa sin mirarla. Nilda llora sobre el carrito: «Tres meses de trabajo en un papel.»", C: "El inspector rellena la multa con letra de funcionario. Nilda llora sobre el carrito: «Tres meses de trabajo en un papelito.»" },
            mood: "sad", end: "multa",
          },
          {
            id: "vendedores",
            say: { A: "¡Vendedores! ¡Quieren multar a Nilda!", B: "¡Vendedores! ¡Le quieren quitar el carrito a Nilda!", C: "¡Vendedores! ¡El inspector se quiere llevar el carrito de Nilda!" },
            reply: { A: "Cinco vendedores rodean al inspector. Él retrocede. «¡Esto es intimidación!»", B: "Cinco vendedores salen de sus puestos y rodean al inspector. Él retrocede con la carpeta en alto: «¡Esto es intimidación!»", C: "Cinco vendedores abandonan sus puestos y cierran el círculo. El inspector retrocede con la carpeta como escudo: «¡Esto es intimidación y lo anoto!»" },
            mood: "furious", end: "pelea",
          },
        ],
      },

      // ── cuchillo: el inspector cree que eres el guardaespaldas de Nilda.
      "cuchillo-inicio": {
        who: "garay", mood: "terror",
        line: {
          A: "Sacas el cuchillo para cortar un tamal. El inspector lo ve y retrocede. «¡Un cuchillo! ¿Usted es su guardaespaldas? ¡No se acerque así!»",
          B: "Sacas el cuchillo para partir un tamal que Nilda te ofrece. El inspector lo ve y retrocede dos pasos. «¡Un cuchillo! ¿Usted trabaja para ella? ¡No se me acerque así!»",
          C: "Sacas el cuchillo para partir el tamal que Nilda te acaba de dar. El inspector lo ve y retrocede hasta un puesto. «¡Un cuchillo! ¿Es su guardaespaldas? ¡Ni un paso más!»",
        },
        options: [
          {
            id: "tamal",
            say: { A: "Es para el tamal. ¿Quiere la mitad?", B: "Es para partir el tamal, inspector. ¿Quiere la mitad?", C: "Es para el tamal, inspector, no para usted. ¿Le apetece la mitad?" },
            reply: { A: "El inspector no se mueve. Nilda se ríe. «Pruébelo, inspector. Con cuchillo y todo.»", B: "El inspector no se mueve ni un milímetro. Nilda se ríe: «Pruébelo, inspector, con cuchillo y todo. No muerde.»", C: "El inspector se queda clavado. Nilda ríe: «Pruébelo, inspector, que el cuchillo es para el tamal y el tamal es para usted.»" },
            mood: "scared", next: "cuchillo-tamal",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. No soy nadie de ella.", B: "Perdón, lo guardo ahora mismo. No trabajo para ella.", C: "Disculpe, lo guardo; no soy guardaespaldas de nadie, solo tenía hambre." },
            reply: { A: "El inspector respira. «Bueno. Entonces no se meta.» Nilda: «¡Cobarde!»", B: "El inspector respira hondo. «Bueno. Entonces apártese y no se meta.» Nilda, indignada: «¡Cobarde!»", C: "El inspector recupera el color. «Bien. Entonces apártese y deje trabajar a la autoridad.» Nilda: «¡Cobarde, el del tamal!»" },
            mood: "worried", next: "garay",
          },
          {
            id: "amenazar",
            say: { A: "Déjela en paz. ¿Entendido?", B: "Déjela en paz, inspector. ¿Me entiende?", C: "Déjela en paz, inspector, y los dos tenemos una noche tranquila." },
            reply: { A: "El inspector saca una radio. «¡Policía! ¡Un hombre armado en el mercado!»", B: "El inspector saca la radio sin quitarte la vista. «¡Policía! ¡Hombre armado en el pasillo del mercado!»", C: "El inspector saca la radio sin apartar los ojos del cuchillo. «¡Policía! ¡Un hombre con cuchillo en el mercado, amenazando a un funcionario!»" },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-tamal": {
        who: "nilda", mood: "laugh",
        line: {
          A: "Nilda se ríe tanto que llora. «¡El inspector tiene miedo de un tamal!» El inspector, rojo: «¡Tengo miedo del cuchillo, señora!»",
          B: "Nilda se ríe hasta las lágrimas. «¡Veinte años aquí y el inspector tiene miedo de un tamal!» El inspector, rojo de vergüenza: «¡Del cuchillo, señora, del cuchillo!»",
          C: "Nilda se ríe con todo el cuerpo. «¡Veinte años de tamales y el inspector les tiene miedo!» Él, rojo: «¡Al cuchillo, señora, al cuchillo!»",
        },
        options: [
          {
            id: "compartir",
            say: { A: "Guardo el cuchillo. Coman los dos. Es una tregua.", B: "Guardo el cuchillo. Coman los dos y firmen la tregua con tamal.", C: "Guardo el cuchillo: coman los dos, que una tregua con tamal dura más que una multa." },
            reply: { A: "El inspector prueba. «Está… muy bueno.» Nilda: «¡Veinte años!»", B: "El inspector prueba un trozo con desconfianza. «Está… muy bueno, la verdad.» Nilda: «¡Veinte años, inspector!»", C: "El inspector prueba con recelo y se rinde: «Está… francamente bueno.» Nilda: «¡Veinte años, inspector, veinte!»" },
            mood: "smile", end: "cuchillo-tregua",
          },
          {
            id: "permiso",
            say: { A: "Ahora que comió, ¿le da el permiso?", B: "Ahora que probó el tamal, ¿le ayuda con el permiso?", C: "Ahora que comió de su comida, ¿la ayuda con el permiso o la multa igual?" },
            reply: { A: "El inspector suspira. «Mañana a las ocho. Y sin cuchillo.»", B: "El inspector suspira con la boca llena. «Mañana a las ocho en la oficina. Y usted, sin cuchillo.»", C: "El inspector suspira, masticando. «Mañana a las ocho en la oficina. Y usted, sin el cuchillo, por favor.»" },
            mood: "neutral", end: "cuchillo-tregua",
          },
          {
            id: "cortar",
            say: { A: "Inspector, corte usted. Tome el cuchillo.", B: "Inspector, córtelo usted. Tome el cuchillo.", C: "Inspector, córtelo usted mismo. Tome el cuchillo, que es de confianza." },
            reply: { A: "El inspector grita y corre. Nilda: «¡Se fue! ¡Gracias!» Pero ya llamó a la policía.", B: "El inspector grita «¡No!» y sale corriendo del pasillo. Nilda: «¡Se fue! ¡Gracias!» Pero por el camino ya llamó a la policía.", C: "El inspector grita «¡No!» y huye del pasillo. Nilda celebra: «¡Se fue!» Pero huye con la radio en la mano." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },

      // ── pistola: la radio del inspector y una patrulla.
      "pistola-inicio": {
        who: "garay", mood: "terror",
        line: {
          A: "Te agachas para parar el carrito y se ve tu pistola. El inspector habla por radio: «¡Hombre armado en el mercado!» Nilda se esconde detrás del carrito.",
          B: "Te agachas para frenar el carrito y la pistola asoma de tu chaqueta. El inspector grita a su radio: «¡Hombre armado en el mercado, pasillo central!» Nilda se esconde detrás del carrito.",
          C: "Te agachas para frenar el carrito y la pistola queda a la vista. El inspector grita a la radio: «¡Hombre armado en el mercado, pasillo central, con una vendedora!» Nilda se agacha tras el carrito.",
        },
        options: [
          {
            id: "calma",
            say: { A: "No es para ustedes. Calma. Nadie dispara.", B: "No es para ustedes, inspector. Calma. Aquí nadie dispara.", C: "No es para nadie de aquí, inspector. Calma: en este pasillo no dispara nadie." },
            reply: { A: "El inspector no baja la radio. «Ya vienen. No se mueva.» Nilda: «¡Y mi carrito!»", B: "El inspector no suelta la radio. «Ya vienen. No se mueva de ahí.» Nilda, desde el carrito: «¡Y mi carrito qué!»", C: "El inspector mantiene la radio pegada a la boca. «Ya vienen. No se mueva.» Nilda, tras el carrito: «¡Y mi carrito qué, en todo esto!»" },
            mood: "scared", next: "pistola-patrulla",
          },
          {
            id: "nilda",
            say: { A: "Nilda, váyase. Ahora. Yo me quedo.", B: "Nilda, váyase ahora con el carrito. Yo me quedo con él.", C: "Nilda, váyase ahora mismo con el carrito; del inspector me ocupo yo." },
            reply: { A: "Nilda corre con el carrito. El inspector no la sigue. Te mira a ti.", B: "Nilda sale corriendo con el carrito y nadie la sigue. El inspector solo te mira a ti, con la radio en la mano.", C: "Nilda huye con el carrito y el inspector la deja ir sin pestañear: ahora su único asunto eres tú." },
            mood: "scared", next: "pistola-patrulla",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Mire. Ya está. Siga con lo suyo.", B: "La guardo, ¿ve? Ya está. Siga con su inspección.", C: "Guardada. ¿Ve? Como si no existiera. Siga con su inspección." },
            reply: { A: "El inspector no sigue. «Ya llamé. Esperamos.» Nilda se escapa en silencio.", B: "El inspector no sigue con nada. «Ya llamé a la policía. Esperamos.» Mientras tanto, Nilda se escapa en silencio.", C: "El inspector no sigue con nada. «Ya llamé. Ahora esperamos.» Nilda aprovecha y se escapa sin un ruido." },
            mood: "worried", end: "pistola-huye",
          },
        ],
      },
      "pistola-patrulla": {
        who: "garay", mood: "scared",
        line: {
          A: "Se oye una sirena. El inspector: «Ponga la pistola en el suelo. Por favor. Yo digo que fue un error.»",
          B: "Una sirena se acerca por la avenida. El inspector, más tranquilo: «Ponga la pistola en el suelo, por favor. Yo les digo que fue un malentendido.»",
          C: "La sirena ya está en la avenida. El inspector, algo más dueño de sí: «Deje la pistola en el suelo, por favor. Yo les explico que fue un malentendido.»",
        },
        options: [
          {
            id: "suelo",
            say: { A: "Está bien. La dejo en el suelo. Nilda, usted también calma.", B: "Está bien, la dejo en el suelo. Nilda, cálmese usted también.", C: "De acuerdo: al suelo. Nilda, usted también tranquila, que la patrulla no viene por los tamales." },
            reply: { A: "La patrulla llega. El inspector explica. Igual te esposan.", B: "La patrulla llega y el inspector explica que fue un malentendido. Igual te esposan, por si acaso.", C: "La patrulla llega y el inspector explica, con esmero, que fue un malentendido. Te esposan igual: el procedimiento no entiende de matices." },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "huir",
            say: { A: "No. Me voy. Nilda, suerte.", B: "No, mejor me voy. Nilda, suerte con el permiso.", C: "No, gracias; prefiero irme. Nilda, suerte con el permiso y con el inspector." },
            reply: { A: "Corres entre los puestos. La sirena se queda con el inspector.", B: "Corres entre los puestos hasta la calle. La sirena se queda con el inspector y su radio.", C: "Corres entre los puestos hasta la calle oeste. La sirena se queda con el inspector y su versión." },
            mood: "scared", end: "pistola-huye",
          },
          {
            id: "pacto",
            say: { A: "La guardo si deja a Nilda trabajar.", B: "La guardo si usted deja trabajar a Nilda esta noche.", C: "La guardo con una condición: Nilda termina su noche de trabajo en paz." },
            reply: { A: "El inspector asiente rápido. «Sí. Esta noche. Guárdela.» Nilda no lo cree.", B: "El inspector asiente antes de que termines. «Sí, sí, esta noche trabaja. Guárdela.» Nilda no se lo cree.", C: "El inspector asiente con una rapidez poco oficial. «Esta noche trabaja. Guárdela.» Nilda no sabe si reír o rezar." },
            mood: "scared", end: "pistola-pacto",
          },
        ],
      },

      // ── granada: los inspectores huyen y Nilda ríe.
      "granada-inicio": {
        who: "garay", mood: "terror",
        line: {
          A: "Sacas la granada para parar al inspector. Él grita: «¡Una granada!» y corre. Nilda se ríe: «¡Mejor que un permiso!»",
          B: "Sacas la granada y la levantas para que la vea el inspector. Él grita «¡Una granada!» y sale corriendo con la carpeta. Nilda se ríe: «¡Eso sí es mejor que un permiso!»",
          C: "Sacas la granada y se la muestras al inspector. Él grita «¡Una granada!» y huye con la carpeta por delante. Nilda se dobla de risa: «¡Mejor que cualquier permiso municipal!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Es falsa. Pero funcionó. Guárdela usted, Nilda.", B: "Es de juguete, pero funcionó. Guárdela usted en el carrito, Nilda.", C: "Es de juguete, y aun así funcionó. Guárdela en el carrito, Nilda, para la próxima inspección." },
            reply: { A: "Nilda la guarda entre los tamales. «La próxima vez, se la muestro yo.»", B: "Nilda la guarda entre los tamales. «La próxima vez se la muestro yo, con una sonrisa.»", C: "Nilda la esconde entre los tamales. «La próxima inspección la recibo yo, con esto y una sonrisa.»" },
            mood: "laugh", next: "granada-nilda",
          },
          {
            id: "seguir",
            say: { A: "¡Corra, inspector! ¡Y no vuelva!", B: "¡Corra, inspector, y no vuelva por este mercado!", C: "¡Corra, inspector, y que la granada le dure en la memoria!" },
            reply: { A: "El inspector grita desde lejos: «¡Policía! ¡Bomba en el mercado!» Nilda deja de reír.", B: "El inspector grita desde la esquina: «¡Policía! ¡Hay una bomba en el mercado!» Nilda deja de reír de golpe.", C: "El inspector grita desde la esquina a su radio: «¡Bomba en el mercado!» Nilda deja de reír en seco." },
            mood: "scared", next: "granada-nilda",
          },
          {
            id: "tirar",
            say: { A: "¡Y esto para el carrito de inspección!", B: "¡Y esto para la camioneta de inspección!", C: "¡Y esto, de regalo, para la camioneta de inspección!" },
            reply: { A: "Lanzas la granada falsa. Todos corren, Nilda también. El mercado queda vacío.", B: "Lanzas la granada falsa hacia la calle. Todo el mundo corre, Nilda también, con su carrito. El mercado queda vacío.", C: "Lanzas la granada falsa hacia la calle y el mercado entero huye, Nilda incluida, con su locomotora de tamales." },
            mood: "terror", end: "granada-huye",
          },
        ],
      },
      "granada-nilda": {
        who: "nilda", mood: "worried",
        line: {
          A: "Nilda mira hacia la avenida. «Va a venir la policía. Y un helicóptero. ¿Qué hacemos con tu juguete?»",
          B: "Nilda mira hacia la avenida con el carrito listo. «Va a venir la policía, y conociendo a este, un helicóptero. ¿Qué hacemos con tu juguete?»",
          C: "Nilda mira hacia la avenida, carrito en ristre. «Va a venir la policía y, conociéndolo, un helicóptero. ¿Qué hacemos con tu juguete?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Nos quedamos y explicamos. Es un juguete.", B: "Nos quedamos y explicamos que es un juguete. No huimos.", C: "Nos quedamos y lo explicamos: es un juguete, y huir lo convertiría en otra cosa." },
            reply: { A: "Un helicóptero llega. Nilda levanta la granada: «¡Es de juguete!» No se oye nada.", B: "Un helicóptero aparece sobre el mercado. Nilda levanta la granada y grita «¡Es de juguete!», pero nadie oye nada.", C: "Un helicóptero se planta sobre el mercado. Nilda levanta la granada y grita «¡De juguete!» contra un ruido que lo tapa todo." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "tamales",
            say: { A: "Vendemos tamales a la policía. Y les explicamos.", B: "Vendemos tamales a la policía cuando llegue y de paso les explicamos.", C: "Cuando llegue la policía, les vendemos tamales y entre bocado y bocado les explicamos." },
            reply: { A: "Llega la patrulla. Nilda ofrece tamales. Un agente come. Luego pide la granada.", B: "Llega la patrulla y Nilda ofrece tamales antes de que pregunten. Un agente come, otro pide la granada.", C: "Llega la patrulla y Nilda la recibe con tamales. Un agente come, el otro pide la granada con la boca llena." },
            mood: "neutral", end: "granada-policia",
          },
          {
            id: "huir",
            say: { A: "Corra, Nilda. Yo me quedo con el juguete.", B: "Corra, Nilda, con el carrito. Yo me quedo con el juguete.", C: "Corra usted con el carrito, Nilda; el juguete y sus consecuencias son míos." },
            reply: { A: "Nilda corre. Tú te quedas solo. Llegan tres patrullas.", B: "Nilda se va con el carrito a toda velocidad. Te quedas solo en el pasillo y llegan tres patrullas.", C: "Nilda desaparece con el carrito. Te quedas solo en el pasillo y llegan tres patrullas con muy poco humor." },
            mood: "scared", end: "granada-policia",
          },
        ],
      },

      // ── gas: Nilda se ríe del gas y el inspector lo encuentra razonable.
      "gas-inicio": {
        who: "nilda", mood: "laugh",
        line: {
          A: "Sacas el gas pimienta. Nilda se ríe: «¿Gas? Yo vendo chiles. Tengo más gas que tú.» El inspector: «Pues es razonable llevar eso.»",
          B: "Sacas el gas pimienta con el inspector encima. Nilda se ríe a carcajadas: «¿Gas pimienta? Yo vendo chiles, tengo más gas que tú en el carrito.» El inspector: «La verdad, es razonable llevarlo.»",
          C: "Sacas el gas pimienta cuando el inspector se acerca. Nilda se ríe: «¿Gas pimienta? Yo vendo chiles; mi carrito tiene más gas que tu bolsillo.» El inspector: «Es razonable llevarlo, con la noche que hay.»",
        },
        options: [
          {
            id: "inspector",
            say: { A: "Inspector, no se acerque a ella. Hable desde ahí.", B: "Inspector, no se acerque más a ella. Hable desde donde está.", C: "Inspector, quédese donde está. Hable desde ahí, que se le oye perfectamente." },
            reply: { A: "El inspector se queda. «Está bien. Señora, el permiso.» Nilda: «¡No tengo!»", B: "El inspector se queda a tres metros, con las manos a la vista. «Está bien. Señora, el permiso.» Nilda: «¡Que no tengo!»", C: "El inspector se queda a tres metros, con las manos abiertas. «De acuerdo. Señora, el permiso.» Nilda: «¡Que no tengo, hombre!»" },
            mood: "neutral", next: "gas-distancia",
          },
          {
            id: "guardar",
            say: { A: "Tiene razón. Lo guardo. Hablemos.", B: "Tiene razón, Nilda. Lo guardo. Hablemos los tres.", C: "Tiene razón, Nilda: sus chiles ganan. Lo guardo y hablamos los tres." },
            reply: { A: "Nilda te da un tamal. El inspector mira la carpeta. «Hablemos, entonces.»", B: "Nilda te da un tamal de premio. El inspector mira su carpeta y suspira: «Hablemos, entonces.»", C: "Nilda te premia con un tamal. El inspector consulta su carpeta y cede: «Hablemos, entonces.»" },
            mood: "smile", next: "garay",
          },
          {
            id: "rociar",
            say: { A: "¡Deje a Nilda en paz!", B: "¡Deje a Nilda en paz de una vez!", C: "¡Deje a Nilda en paz, que ya tuvo bastante!" },
            reply: { A: "Rocías al inspector. Cae tosiendo. Nilda: «¡Nooo! ¡Eso es un delito!»", B: "Rocías al inspector en la cara. Cae tosiendo entre los puestos. Nilda grita: «¡No! ¡Eso sí es un delito, y grande!»", C: "Rocías al inspector y cae tosiendo entre cajas de fruta. Nilda grita: «¡No! ¡Eso sí es un delito, y a mí me cierran el carrito!»" },
            mood: "furious", end: "gas-cae",
          },
        ],
      },
      "gas-distancia": {
        who: "garay", mood: "worried",
        line: {
          A: "El inspector habla desde lejos. «Señora, sin permiso no puede vender. Pero si usted lo pide mañana, hoy no la multo.»",
          B: "El inspector negocia a tres metros, mirando tu gas de reojo. «Señora, sin permiso no puede vender. Pero si lo solicita mañana, hoy no la multo.»",
          C: "El inspector negocia a distancia, sin perder de vista tu gas. «Señora, sin permiso no puede vender. Pero si lo solicita mañana, hoy me olvido de la multa.»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "Nilda, acepte. Es justo. Guardo el gas.", B: "Nilda, acepte, es justo. Y yo guardo el gas.", C: "Nilda, acepte, que es un trato justo. Y yo guardo el gas, que ya hizo su trabajo." },
            reply: { A: "Nilda acepta. El inspector escribe una cita. Todos respiran.", B: "Nilda acepta de mala gana. El inspector escribe una cita para mañana y todos respiran.", C: "Nilda acepta a regañadientes. El inspector anota una cita para mañana y el pasillo entero respira." },
            mood: "smile", end: "gas-trato",
          },
          {
            id: "tamal",
            say: { A: "Inspector, pruebe un tamal. Desde lejos.", B: "Inspector, pruebe un tamal. Se lo lanzo desde aquí.", C: "Inspector, pruebe un tamal; se lo lanzo, que la distancia la pone usted." },
            reply: { A: "Le lanzas un tamal. Lo atrapa. Lo prueba. «Está bueno.» Nilda llora.", B: "Le lanzas un tamal y lo atrapa con la carpeta. Lo prueba: «Está bueno, la verdad.» Nilda llora de orgullo.", C: "Le lanzas un tamal y lo atrapa con la carpeta. Lo prueba: «Está bueno, no lo voy a negar.» Nilda llora de orgullo." },
            mood: "smile", end: "gas-trato",
          },
          {
            id: "policia",
            say: { A: "No hay trato. Llame a la policía si quiere.", B: "No hay trato, inspector. Llame a la policía si quiere.", C: "No hay trato, inspector. Llame a la policía, si le parece que un carrito lo merece." },
            reply: { A: "El inspector llama. Llega la policía y ve tu gas. Nilda huye.", B: "El inspector llama a la policía. Cuando llega, lo primero que ven es tu gas. Nilda aprovecha y huye.", C: "El inspector llama y la policía llega en minutos; lo primero que ven es tu gas. Nilda aprovecha el lío y huye." },
            mood: "angry", end: "gas-policia",
          },
        ],
      },

      // ── lápiz: rellenas el permiso en la misma calle.
      "lapiz-inicio": {
        who: "garay", mood: "surprised",
        line: {
          A: "Sacas el lápiz y le pides al inspector su carpeta. «¿Qué hace?» «El formulario del permiso. Ahora. Aquí.» Nilda te mira sin entender.",
          B: "Sacas el lápiz y le tiendes la mano al inspector: «Deme el formulario del permiso. Lo rellenamos ahora, aquí.» Él: «¿Qué dice?» Nilda te mira como a un loco.",
          C: "Sacas el lápiz y extiendes la mano hacia el inspector: «El formulario del permiso. Lo rellenamos aquí y ahora.» Él parpadea: «¿Perdón?» Nilda te mira como a un lunático útil.",
        },
        options: [
          {
            id: "formulario",
            say: { A: "Nilda, su nombre, su dirección, qué vende. Dicte.", B: "Nilda, dícteme: nombre, dirección y qué vende. Yo escribo.", C: "Nilda, dícteme nombre, dirección y qué vende. Yo escribo, y el inspector firma." },
            reply: { A: "Nilda dicta. El inspector mira. «Esto no funciona así…» Pero no te detiene.", B: "Nilda dicta sin respirar. El inspector mira el papel: «Esto no funciona así…» Pero no te quita el lápiz.", C: "Nilda dicta de corrido. El inspector observa: «Esto no funciona así…», pero no te quita el lápiz ni la carpeta." },
            mood: "neutral", next: "lapiz-formulario",
          },
          {
            id: "queja",
            say: { A: "O escribo una queja: inspector persigue a una madre.", B: "O escribo una queja: inspector persigue a una madre por el mercado.", C: "O redacto una queja formal: inspector persigue a una madre con carrito por el mercado, de noche." },
            reply: { A: "El inspector se pone pálido. «No hace falta. Hablemos.»", B: "El inspector se pone pálido. «No hace falta ninguna queja. Hablemos.»", C: "El inspector pierde el color. «No hace falta una queja. Hablemos como personas razonables.»" },
            mood: "worried", next: "lapiz-formulario",
          },
          {
            id: "firma",
            say: { A: "Inspector, firme aquí: «Nilda puede vender hoy».", B: "Inspector, firme aquí: «Nilda puede vender esta noche».", C: "Inspector, firme aquí: «Nilda queda autorizada a vender esta noche». Un renglón." },
            reply: { A: "El inspector se ríe. «¿Con un lápiz? No vale.» Rompe el papel.", B: "El inspector se ríe. «¿Un permiso a lápiz? No vale nada.» Y rompe el papel en dos.", C: "El inspector se ríe. «¿Un permiso a lápiz, en una servilleta? No vale ni como servilleta.» Y lo rompe." },
            mood: "angry", end: "lapiz-rompe",
          },
        ],
      },
      "lapiz-formulario": {
        who: "nilda", mood: "worried",
        line: {
          A: "Nilda mira el papel. «Nunca lo llené. Me daba miedo la oficina.» El inspector: «Falta el sello. Mañana.»",
          B: "Nilda mira el formulario lleno. «Nunca lo llené porque la oficina me da miedo.» El inspector: «Falta el sello. Eso solo mañana, en la oficina.»",
          C: "Nilda contempla el formulario completo. «Nunca lo llené; la oficina me asusta más que la calle.» El inspector: «Falta el sello, y eso solo mañana en la oficina.»",
        },
        options: [
          {
            id: "manana",
            say: { A: "Mañana la acompaño. Inspector, ¿a qué hora?", B: "Mañana la acompaño yo. Inspector, ¿a qué hora abre?", C: "Mañana la acompaño yo mismo. Inspector, ¿a qué hora abre la oficina y a quién preguntamos?" },
            reply: { A: "«A las ocho. Pregunten por Garay.» Nilda sonríe por primera vez.", B: "«A las ocho. Pregunten por Garay, que soy yo.» Nilda sonríe por primera vez en la noche.", C: "«A las ocho; pregunten por Garay, que soy yo y los espero.» Nilda sonríe por primera vez." },
            mood: "smile", end: "lapiz-permiso",
          },
          {
            id: "copia",
            say: { A: "Nilda, guarde esta copia. Es su prueba.", B: "Nilda, guarde esta copia. Es su prueba de que lo intentó.", C: "Nilda, guarde esta copia: es la prueba de que esta noche usted hizo las cosas bien." },
            reply: { A: "Nilda guarda el papel en el delantal. El inspector: «Hoy no hay multa.»", B: "Nilda guarda el papel en el delantal como un tesoro. El inspector cierra la carpeta: «Hoy no hay multa.»", C: "Nilda guarda el papel en el delantal. El inspector cierra la carpeta: «Hoy no hay multa. Mañana, ya veremos.»" },
            mood: "smile", end: "lapiz-permiso",
          },
          {
            id: "multa",
            say: { A: "Pero hoy vende sin permiso. Haga su trabajo.", B: "Pero hoy sigue vendiendo sin permiso. Haga su trabajo, inspector.", C: "Pero esta noche vende sin permiso; haga su trabajo, inspector, que el formulario no lo cambia." },
            reply: { A: "El inspector escribe la multa. Nilda te mira: «¿Para esto el lápiz?»", B: "El inspector escribe la multa con tu lápiz. Nilda te mira con odio: «¿Para esto era el lápiz?»", C: "El inspector escribe la multa con tu propio lápiz. Nilda te fulmina: «¿Para esto me hiciste dictar?»" },
            mood: "sad", end: "lapiz-rompe",
          },
        ],
      },

      // ── libro: la ordenanza municipal, o eso dices.
      "libro-inicio": {
        who: "garay", mood: "surprised",
        line: {
          A: "Abres tu libro y lees en voz alta: «Artículo doce: los vendedores de noche no necesitan permiso». El inspector: «¿Qué libro es ese?»",
          B: "Abres tu libro por cualquier página y lees con voz seria: «Artículo doce: la venta nocturna de alimentos tradicionales no requiere permiso». El inspector frunce el ceño: «¿Qué libro es ese?»",
          C: "Abres el libro por una página al azar y lees con solemnidad: «Artículo doce: la venta nocturna de alimentos tradicionales queda exenta de permiso». El inspector entorna los ojos: «¿Y ese libro qué es?»",
        },
        options: [
          {
            id: "mantener",
            say: { A: "La ordenanza municipal. Nueva. ¿No la conoce?", B: "La ordenanza municipal, edición nueva. ¿No la conoce?", C: "La ordenanza municipal, última edición. Me sorprende que un inspector no la conozca." },
            reply: { A: "El inspector duda. «¿Nueva? No me llegó.» Nilda: «¡Artículo doce!»", B: "El inspector duda, inseguro. «¿Edición nueva? A mí no me llegó nada.» Nilda grita: «¡Artículo doce, inspector!»", C: "El inspector vacila. «¿Nueva edición? A la oficina no llegó nada.» Nilda, encantada: «¡Artículo doce, inspector, artículo doce!»" },
            mood: "worried", next: "libro-ordenanza",
          },
          {
            id: "mostrar",
            say: { A: "Mire usted mismo. Página cuarenta.", B: "Mírelo usted mismo, página cuarenta.", C: "Compruébelo usted mismo: página cuarenta, segundo párrafo." },
            reply: { A: "El inspector toma el libro. Lee. «Esto es una novela de amor.» Nilda se ríe.", B: "El inspector toma el libro y lee la página cuarenta. «Esto es una novela de amor. Y mala.» Nilda se ríe a carcajadas.", C: "El inspector toma el libro y lee. «Esto es una novela romántica, y de las malas.» Nilda estalla en risa." },
            mood: "laugh", next: "libro-ordenanza",
          },
          {
            id: "regalar",
            say: { A: "Se lo regalo. Léalo en casa. Y deje a Nilda.", B: "Se lo regalo, inspector. Léalo en casa y deje a Nilda en paz.", C: "Se lo regalo, inspector: léalo en casa con calma y deje a Nilda terminar su noche." },
            reply: { A: "El inspector toma el libro. «Lo leo. Pero ella mañana saca el permiso.»", B: "El inspector acepta el libro, desconfiado. «Lo leeré. Pero ella mañana saca el permiso, con o sin artículo doce.»", C: "El inspector acepta el libro con recelo. «Lo leeré. Pero mañana ella saca el permiso, diga lo que diga el artículo doce.»" },
            mood: "neutral", end: "libro-regalo",
          },
        ],
      },
      "libro-ordenanza": {
        who: "nilda", mood: "laugh",
        line: {
          A: "Nilda no para de reír. «¡Una novela de amor! ¡Y casi lo cree!» El inspector, serio: «Esto es burlarse de la autoridad.»",
          B: "Nilda no puede parar de reír. «¡Una novela de amor, y el inspector casi se la cree!» El inspector, muy serio: «Esto es burlarse de la autoridad, y se anota.»",
          C: "Nilda se ríe sin control. «¡Una novela rosa, y el inspector a punto de creérsela!» Él, muy digno: «Esto es burla a la autoridad, y queda anotado.»",
        },
        options: [
          {
            id: "perdon",
            say: { A: "Perdón, inspector. Era una broma. ¿Le damos una salida?", B: "Perdón, inspector, era una broma. ¿Buscamos una salida para Nilda?", C: "Perdón, inspector, fue una broma de mal gusto. ¿Buscamos una salida razonable para Nilda?" },
            reply: { A: "El inspector suspira. «Mañana a las ocho. Permiso. Y usted, menos novelas.»", B: "El inspector suspira largo. «Mañana a las ocho, a sacar el permiso. Y usted, menos novelas en la calle.»", C: "El inspector suspira. «Mañana a las ocho, el permiso de verdad. Y usted, menos literatura y más respeto.»" },
            mood: "neutral", end: "libro-salida",
          },
          {
            id: "seguir",
            say: { A: "Artículo trece: el inspector debe probar los tamales.", B: "Artículo trece: todo inspector debe probar los tamales antes de multar.", C: "Artículo trece: ningún inspector multa sin haber probado el producto. Nilda, un tamal para el señor." },
            reply: { A: "Nilda le da un tamal. El inspector lo come, serio. «Está bueno. Igual multa.»", B: "Nilda le planta un tamal en la mano. El inspector lo come con dignidad: «Está bueno. La multa sigue.»", C: "Nilda le entrega un tamal. El inspector lo come sin perder la compostura: «Está bueno. La multa sigue en pie.»" },
            mood: "smile", end: "libro-multa",
          },
          {
            id: "burla",
            say: { A: "¿Burla? Usted persigue a una señora con tamales.", B: "¿Burla? El que persigue a una señora con un carrito es usted.", C: "¿Burla, dice? El que corre detrás de una señora de sesenta años con un carrito es usted." },
            reply: { A: "El inspector cierra la carpeta. «Multa doble. Y buenas noches.» Nilda llora.", B: "El inspector cierra la carpeta de golpe. «Multa doble, por la burla. Buenas noches.» Nilda llora sobre los tamales.", C: "El inspector cierra la carpeta con un golpe seco. «Multa doble, por la burla. Buenas noches.» Nilda llora sobre el carrito." },
            mood: "furious", end: "libro-multa",
          },
        ],
      },

      // ── corazón: el inspector recuerda a su madre.
      "corazon-inicio": {
        who: "garay", mood: "sad",
        line: {
          A: "Usas el corazón. El inspector se para. Mira el carrito. «Mi madre vendía tamales. Aquí mismo. Yo empujaba el carrito.» Nilda deja de correr.",
          B: "Usas el corazón. El inspector se detiene y mira el carrito de Nilda con otros ojos. «Mi madre vendía tamales en esta esquina. Yo le empujaba el carrito.» Nilda frena, sorprendida.",
          C: "Usas el corazón. El inspector se queda quieto, con la vista en el carrito. «Mi madre vendía tamales en esta misma esquina. Yo empujaba el carrito después del colegio.» Nilda frena, sin palabras.",
        },
        options: [
          {
            id: "madre",
            say: { A: "¿Y qué pensaría su madre de esto?", B: "¿Y qué pensaría su madre si lo viera persiguiendo a Nilda?", C: "¿Y qué diría su madre si lo viera esta noche, corriendo detrás de un carrito como el suyo?" },
            reply: { A: "El inspector baja la cabeza. «Me daría una bofetada.» Nilda: «Dos.»", B: "El inspector baja la cabeza. «Me daría una bofetada. Y tendría razón.» Nilda: «Dos bofetadas.»", C: "El inspector baja la cabeza. «Me daría una bofetada, y con razón.» Nilda, desde el carrito: «Dos, inspector. Dos.»" },
            mood: "love", next: "corazon-garay",
          },
          {
            id: "nilda",
            say: { A: "Nilda, venga. El inspector tiene algo que decirle.", B: "Nilda, venga, no corra. El inspector tiene algo que decirle.", C: "Nilda, venga, que ya nadie la persigue. El inspector tiene algo que decirle." },
            reply: { A: "Nilda se acerca con el carrito. El inspector: «Perdón, señora. Perdón.»", B: "Nilda se acerca despacio con el carrito. El inspector, sin mirarla: «Perdón, señora. Perdón de verdad.»", C: "Nilda se acerca con el carrito, desconfiada. El inspector, mirando al suelo: «Perdón, señora. Perdón de verdad.»" },
            mood: "love", next: "corazon-garay",
          },
          {
            id: "tamal",
            say: { A: "Nilda, un tamal para el inspector. Como los de su madre.", B: "Nilda, un tamal para el inspector. A ver si son como los de su madre.", C: "Nilda, un tamal para el inspector, a ver si se parecen a los de su madre." },
            reply: { A: "El inspector prueba. Cierra los ojos. Llora. «Iguales. Son iguales.»", B: "El inspector prueba el tamal y cierra los ojos. Se le escapan dos lágrimas. «Iguales. Son iguales a los de ella.»", C: "El inspector prueba, cierra los ojos y llora sin ruido. «Iguales. Son exactamente iguales a los de ella.»" },
            mood: "love", end: "corazon-tamal",
          },
        ],
      },
      "corazon-garay": {
        who: "nilda", mood: "love",
        line: {
          A: "Nilda mira al inspector. Le da un tamal. «Coma. Y mañana me ayuda con el permiso. ¿Sí?» Él asiente con el tamal en la mano.",
          B: "Nilda mira al inspector largo rato y le pone un tamal en la mano. «Coma. Y mañana me ayuda usted con el permiso, ¿sí?» Él asiente, sin poder hablar.",
          C: "Nilda observa al inspector y, sin decir nada, le entrega un tamal. «Coma. Y mañana me ayuda usted con el permiso, ¿de acuerdo?» Él asiente, mudo.",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Inspector, abrácela. Es como su madre.", B: "Inspector, abrácela. Es la misma historia que la de su madre.", C: "Inspector, abrácela: es la misma historia que la de su madre, veinte años después." },
            reply: { A: "El inspector abraza a Nilda. Los vendedores aplauden. Alguien grita: «¡Tamales gratis!»", B: "El inspector abraza a Nilda en medio del pasillo. Los vendedores aplauden y alguien grita «¡Tamales gratis!».", C: "El inspector abraza a Nilda en mitad del pasillo. Los vendedores aplauden y alguien grita «¡Tamales gratis para la autoridad!»." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "permiso",
            say: { A: "Mañana a las ocho, los tres en la oficina.", B: "Mañana a las ocho, los tres en la oficina del permiso.", C: "Mañana a las ocho nos vemos los tres en la oficina, y de allí salimos con el permiso." },
            reply: { A: "El inspector asiente. «A las ocho. Yo mismo sello.» Nilda sonríe.", B: "El inspector asiente con la boca llena. «A las ocho. Lo sello yo mismo.» Nilda sonríe como no sonreía en años.", C: "El inspector asiente, masticando. «A las ocho. El sello lo pongo yo.» Nilda sonríe como no lo hacía en años." },
            mood: "love", end: "corazon-permiso",
          },
          {
            id: "cena",
            say: { A: "Siéntense los dos. Yo invito a tamales.", B: "Siéntense los dos aquí. Esta noche invito yo a tamales.", C: "Siéntense los dos en esa mesa; esta noche los tamales los pago yo." },
            reply: { A: "Los tres se sientan en una mesa del patio. El inspector cuenta historias de su madre.", B: "Los tres se sientan en una mesa del patio de comidas. El inspector cuenta historias de su madre y Nilda las completa.", C: "Los tres se sientan en una mesa del patio. El inspector cuenta historias de su madre y Nilda las corrige con cariño." },
            mood: "love", end: "corazon-cena",
          },
        ],
      },
    },
    ends: {
      escapa: { text: { A: "Nilda desaparece con el carrito. El inspector escribe tu descripción. «Mañana la encuentro.»", B: "Nilda desaparece con el carrito entre el humo. El inspector anota tu descripción en la carpeta: «Mañana la encuentro, y a usted también.»", C: "Nilda se esfuma con el carrito entre el humo de las parrillas. El inspector anota tu descripción: «Mañana la encuentro, y a usted lo recuerdo.»" }, change: "huye", recap: "Ayudaste a Nilda a escapar del inspector con su carrito." },
      multa: { text: { A: "Nilda guarda la multa en el delantal. Se va empujando el carrito, despacio.", B: "Nilda guarda la multa en el delantal y se va empujando el carrito, más despacio que nunca.", C: "Nilda dobla la multa, la guarda en el delantal y se aleja empujando el carrito como si pesara el doble." }, change: "triste", recap: "El inspector multó a Nilda y tú no te metiste." },
      acuerdo: { text: { A: "Nilda sigue vendiendo esta noche. Mañana a las ocho, el permiso. Te regala dos tamales.", B: "Nilda sigue vendiendo esta noche. Mañana a las ocho, el permiso. Te regala dos tamales envueltos en papel.", C: "Nilda sigue vendiendo esta noche; mañana a las ocho, el permiso. Te regala dos tamales envueltos como un premio." }, change: "sonrie", recap: "Negociaste con el inspector una noche de tregua para Nilda." },
      pelea: { text: { A: "Los vendedores empujan al inspector. Él llama a la policía. El mercado se vuelve un caos.", B: "Los vendedores empujan al inspector contra un puesto y él llama a la policía por radio. El mercado se vuelve un caos de cajas y gritos.", C: "Los vendedores acorralan al inspector contra un puesto; él pide refuerzos por radio y el mercado se convierte en un caos de cajas, gritos y tamales." }, change: "pelea", recap: "Llamaste a los vendedores y el mercado se enfrentó al inspector." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. El inspector cuenta que lo amenazaste. Nilda ya no está.", B: "Llega la policía y lo primero es tu cuchillo. El inspector cuenta que lo amenazaste; Nilda, inteligente, ya no está.", C: "Llega la policía y te desarma. El inspector relata la amenaza con lujo de detalles; Nilda, con buen criterio, ya no está." }, change: "policia", recap: "Tu cuchillo en el mercado terminó con la policía." },
      "cuchillo-tregua": { text: { A: "El inspector come un tamal. Nilda vende. Tu cuchillo queda guardado. Mañana, el permiso.", B: "El inspector termina su tamal apoyado en el carrito. Nilda sigue vendiendo. Tu cuchillo, guardado para siempre. Mañana, el permiso.", C: "El inspector termina el tamal apoyado en el carrito de Nilda. Ella sigue vendiendo; tu cuchillo no vuelve a salir. Mañana, el permiso." }, change: "sonrie", recap: "Un tamal partido con tu cuchillo hizo las paces con el inspector." },
      "pistola-huye": { text: { A: "Corres hasta la calle. Atrás, el inspector espera a la policía con su radio. Nilda desapareció.", B: "Corres hasta la calle oeste. Atrás, el inspector espera a la policía con la radio en la mano. Nilda desapareció con el carrito.", C: "Corres hasta la calle oeste. El inspector queda esperando a la policía con su radio; Nilda y su carrito ya son leyenda." }, change: "huye", recap: "La pistola hizo huir a Nilda y a ti del mercado." },
      "pistola-policia": { text: { A: "La policía te esposa. El inspector dice que fue un error. Nilda vende tamales a los agentes.", B: "La policía te esposa mientras el inspector repite que fue un malentendido. Nilda, mientras tanto, vende tamales a los agentes.", C: "Te esposan mientras el inspector insiste en que fue un malentendido. Nilda aprovecha y vende tamales a los agentes, sin permiso." }, change: "policia", recap: "La pistola te llevó a la comisaría y Nilda vendió tamales a la patrulla." },
      "pistola-pacto": { text: { A: "Guardas la pistola. El inspector se va rápido. Nilda vende toda la noche.", B: "Guardas la pistola y el inspector se va más rápido de lo que llegó. Nilda vende toda la noche sin que nadie la moleste.", C: "Guardas la pistola y el inspector desaparece a paso ligero. Nilda vende toda la noche, protegida por un pacto que nadie debería conocer." }, change: "se-va", recap: "La pistola compró una noche de paz para Nilda." },
      "granada-huye": { text: { A: "El mercado queda vacío. Tú y la granada falsa. Suenan sirenas.", B: "El mercado queda vacío con las parrillas encendidas. Tú, la granada falsa y las sirenas acercándose.", C: "El mercado queda desierto con las parrillas aún encendidas. Solo quedan tú, la granada de juguete y un coro de sirenas." }, change: "huye", recap: "Tu granada falsa vació el mercado entero." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina a Nilda con la granada en alto. La policía rodea el mercado.", B: "El helicóptero ilumina a Nilda con la granada en alto y la policía rodea el mercado. Nadie escucha «de juguete».", C: "El helicóptero clava la luz en Nilda, granada en alto, y la policía cierra el mercado. «De juguete» es una frase que nadie oye." }, change: "helicoptero", recap: "La granada de juguete trajo un helicóptero sobre el mercado." },
      "granada-policia": { text: { A: "La policía se lleva la granada y te lleva a ti. Nilda vende tamales a los agentes que quedan.", B: "La policía se lleva la granada y a ti. Nilda, práctica, vende tamales a los agentes que se quedan.", C: "La policía confisca la granada y te lleva. Nilda, siempre práctica, vende tamales a los agentes que quedan de guardia." }, change: "policia", recap: "La granada de juguete te llevó a la comisaría." },
      "gas-cae": { text: { A: "El inspector llora en el suelo. Nilda le lava los ojos con agua. Tú te vas corriendo.", B: "El inspector llora en el suelo y Nilda, resignada, le lava los ojos con agua de su carrito. Tú te vas corriendo.", C: "El inspector llora entre las cajas y Nilda le lava los ojos con agua del carrito. Tú corres: ya nadie te quiere en el mercado." }, change: "cae", recap: "Rociaste al inspector y Nilda tuvo que curarlo." },
      "gas-trato": { text: { A: "Guardas el gas. El inspector y Nilda tienen una cita mañana. Esta noche, tamales para todos.", B: "Guardas el gas. El inspector y Nilda quedan mañana en la oficina. Esta noche, tamales para todos, inspector incluido.", C: "Guardas el gas. Inspector y vendedora tienen cita mañana; esta noche, tamales para todos, inspector incluido." }, change: "sonrie", recap: "El gas pimienta a distancia negoció un trato justo." },
      "gas-policia": { text: { A: "La policía ve tu gas. Nilda huyó. El inspector explica. Tú, también.", B: "La policía ve tu gas antes que nada. Nilda huyó con el carrito. El inspector explica su versión y tú la tuya.", C: "La policía repara en tu gas antes que en nada. Nilda huyó con el carrito. El inspector da su versión y tú la tuya, sin público." }, change: "policia", recap: "El gas pimienta y la policía terminaron la noche de Nilda." },
      "lapiz-rompe": { text: { A: "El papel roto, la multa escrita. Nilda se va con el carrito. Tu lápiz no sirvió.", B: "El papel roto en el suelo y la multa escrita. Nilda se va empujando el carrito. Tu lápiz no sirvió de mucho.", C: "El papel hecho pedazos y la multa escrita con tu lápiz. Nilda se va con el carrito, y tu lápiz queda en la carpeta del inspector." }, change: "enojado", recap: "Tu formulario a lápiz terminó roto y con multa." },
      "lapiz-permiso": { text: { A: "Nilda guarda el formulario. Mañana a las ocho, con Garay. Hoy no hay multa.", B: "Nilda guarda el formulario en el delantal. Mañana a las ocho, con Garay. Hoy no hay multa, y hay tamales.", C: "Nilda guarda el formulario en el delantal como un salvoconducto. Mañana a las ocho, con Garay. Hoy, ni multa ni miedo." }, change: "sonrie", recap: "Rellenaste el permiso de Nilda con tu lápiz en plena calle." },
      "libro-regalo": { text: { A: "El inspector se va con tu novela. Nilda vende. Mañana, el permiso de verdad.", B: "El inspector se va con tu novela bajo el brazo. Nilda sigue vendiendo. Mañana, el permiso de verdad.", C: "El inspector se va con tu novela bajo el brazo, convencido a medias. Nilda sigue vendiendo; mañana, el permiso real." }, change: "se-va", recap: "El inspector se fue con tu libro y Nilda siguió vendiendo." },
      "libro-salida": { text: { A: "Nilda se ríe todavía. El inspector cita a las ocho. Tu novela vuelve al bolsillo.", B: "Nilda todavía se ríe del artículo doce. El inspector la cita a las ocho. Tu novela vuelve al bolsillo, famosa.", C: "Nilda sigue riéndose del artículo doce. El inspector la cita a las ocho y tu novela vuelve al bolsillo, convertida en leyenda." }, change: "sonrie", recap: "Tu falsa ordenanza hizo reír a Nilda y ceder al inspector." },
      "libro-multa": { text: { A: "El inspector escribe la multa. Nilda llora. Tu libro no sirvió.", B: "El inspector escribe la multa, doble. Nilda llora sobre el carrito. Tu libro no sirvió de nada.", C: "El inspector escribe la multa, doble, con letra firme. Nilda llora sobre el carrito; tu libro solo sirvió para empeorarlo." }, change: "triste", recap: "La broma del libro le costó a Nilda una multa doble." },
      "corazon-tamal": { text: { A: "El inspector llora con el tamal. Nilda le da otro. «Para su madre.»", B: "El inspector llora con el tamal en la mano. Nilda le da otro: «Este es para su madre.»", C: "El inspector llora con el tamal a medio comer. Nilda le da otro, envuelto: «Este, para su madre.»" }, change: "triste", recap: "Un tamal hizo llorar al inspector por su madre." },
      "corazon-abrazo": { text: { A: "Inspector y vendedora abrazados entre los puestos. Mañana, el permiso. Hoy, tamales.", B: "Inspector y vendedora abrazados entre los puestos, con los vendedores aplaudiendo. Mañana, el permiso. Hoy, tamales.", C: "Inspector y vendedora abrazados entre los puestos, bajo aplausos. Mañana, el permiso; hoy, tamales para todo el pasillo." }, change: "abraza", recap: "El inspector y Nilda terminaron abrazados en el mercado." },
      "corazon-permiso": { text: { A: "Mañana a las ocho, los tres en la oficina. Nilda vende toda la noche.", B: "Mañana a las ocho, los tres en la oficina del permiso. Nilda vende toda la noche con el inspector de cliente.", C: "Mañana a las ocho, los tres en la oficina. Nilda vende toda la noche, con el inspector como primer cliente." }, change: "sonrie", recap: "El inspector prometió sellar el permiso de Nilda." },
      "corazon-cena": { text: { A: "Los tres cenan tamales en el patio. El inspector habla de su madre. Nilda lo escucha.", B: "Los tres cenan tamales en el patio de comidas. El inspector habla de su madre y Nilda lo escucha como a un hijo.", C: "Los tres cenan tamales en el patio. El inspector habla de su madre; Nilda lo escucha como se escucha a un hijo que volvió." }, change: "se-sienta", recap: "El inspector y Nilda cenaron tamales contigo." },
    },
    speak: {
      A1: "¿Qué comida se vende en la calle en tu ciudad?",
      A2: "¿Compras comida en puestos de la calle?",
      B1: "¿Qué harías si vieras a un inspector persiguiendo a una vendedora?",
      B2: "¿Deberían los vendedores ambulantes necesitar un permiso, y por qué?",
      C1: "¿Qué pasa cuando una norma justa se aplica con injusticia?",
      C2: "¿Cómo se concilia el control sanitario con el derecho a ganarse la vida en la calle?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Comes con cuchillo en la calle?", B: "¿Alguna vez un gesto inocente tuyo asustó a alguien?", C: "¿Por qué el contexto convierte un cuchillo de cocina en una amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "policia", speak: { A: "¿Qué haces si oyes una sirena?", B: "¿Te ha salvado alguien de un problema con un trato rápido?", C: "¿Qué autoridad tiene un funcionario frente a alguien armado, y qué le queda?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Te ríes cuando alguien tiene miedo?", B: "¿Cuándo es cruel reírse del miedo de otra persona?", C: "¿Qué dice de nosotros que el miedo de una autoridad nos resulte gracioso?" } },
      gas: { start: "gas-inicio", fx: "risa", speak: { A: "¿Te gusta la comida picante?", B: "¿Qué es más útil en una discusión: una amenaza o un poco de distancia?", C: "¿Por qué negociar a distancia a veces funciona mejor que cara a cara?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Llenas formularios con lápiz o con computadora?", B: "¿Qué trámite te da más miedo, y por qué lo pospones?", C: "¿Por qué el papeleo asusta más a quien menos recursos tiene?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Conoces alguna ley de tu ciudad?", B: "¿Has mentido alguna vez con mucha seguridad para ayudar a alguien?", C: "¿Hasta dónde es aceptable engañar a una autoridad para proteger a una persona?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Qué cocina tu madre?", B: "¿Qué recuerdo de tu familia aparece con un olor o un sabor?", C: "¿Cómo cambia nuestra idea de la justicia cuando recordamos de dónde venimos?" } },
    },
  },

  // ───────────────────────────── ESCENA 5 · COSTA ─────────────────────────────
  {
    id: "costa-discusion",
    kind: "escena",
    district: "costa",
    title: "Junto al canal, a gritos",
    verb: "SEPARAR",
    goal: "Intervenir en una discusión que se descontrola, hablar con firmeza, calmar, preguntar cómo está alguien y decidir si llamas a la policía.",
    cast: [
      {
        id: "karina", name: "Karina", role: "Mujer a la que agarran del brazo",
        age: "adult", body: "f", build: "slim", height: 1.67,
        hair: "long", hairColor: "#1c140e", skin: "#c99064",
        top: "dress", topColor: "#a8442f", bottom: "skirt", bottomColor: "#a8442f",
        extras: ["phone"], pose: "scream", props: [],
      },
      {
        id: "mauro", name: "Mauro", role: "Su pareja, fuera de sí",
        age: "adult", body: "m", build: "athletic", height: 1.82,
        hair: "short", hairColor: "#2a1a12", skin: "#d9a77c",
        top: "jacket", topColor: "#26303a", bottom: "jeans", bottomColor: "#2c3a55",
        extras: [], pose: "fight", props: [],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "karina", mood: "terror",
        line: {
          A: "Junto al canal, un hombre agarra a una mujer del brazo. Ella grita: «¡Suéltame! ¡Me haces daño!» Él grita más fuerte. Te ven.",
          B: "Junto al canal, un hombre sujeta a una mujer del brazo mientras los dos se gritan. Ella forcejea: «¡Suéltame! ¡Me estás haciendo daño!» Los dos te ven.",
          C: "Junto al canal, un hombre aferra el brazo de una mujer y los gritos de ambos espantan hasta a las palomas. Ella tira: «¡Suéltame, me estás lastimando!» Los dos reparan en ti.",
        },
        options: [
          {
            id: "separar",
            say: { A: "¡Oye! ¡Suéltala ahora mismo!", B: "¡Eh, tú! ¡Suéltala ahora mismo!", C: "¡Suéltala! Ahora mismo, y sin discutir." },
            reply: { A: "Mauro la suelta, pero te mira con rabia. «¡Es mi novia! ¡No te metas!»", B: "Mauro la suelta de golpe y se vuelve hacia ti. «¡Es mi novia! ¡Esto no es asunto tuyo!»", C: "Mauro la suelta y gira hacia ti con los puños cerrados. «Es mi novia y esto es privado. Largo.»" },
            mood: "furious", next: "mauro",
          },
          {
            id: "ella",
            say: { A: "¿Estás bien? ¿Quieres que llame a la policía?", B: "¿Estás bien? ¿Quieres que llame a la policía?", C: "¿Estás bien? Dime si quieres que llame a la policía y lo hago ahora." },
            reply: { A: "Karina llora. «No sé… Me siguió. Me leyó el celular. Tengo miedo.»", B: "Karina se limpia la cara. «No sé… Me siguió hasta aquí y me quitó el celular. Tengo miedo.»", C: "Karina se limpia las lágrimas con el dorso de la mano. «No sé. Me siguió hasta aquí, me quitó el celular… Tengo miedo, la verdad.»" },
            mood: "scared", next: "karina",
          },
          {
            id: "calma",
            say: { A: "Tranquilo. Respira. Suéltala y hablamos.", B: "Tranquilo, respira hondo. Suéltala y hablamos los tres.", C: "Respira. Suéltala y hablamos como adultos; así no se arregla nada." },
            reply: { A: "Mauro duda. Suelta a Karina. «Ella empezó.»", B: "Mauro duda, aprieta la mandíbula y la suelta. «Ella empezó. Pregúntale a ella.»", C: "Mauro duda, resopla y la suelta. «Ella empezó todo, para que lo sepas.»" },
            mood: "angry", next: "mauro",
          },
        ],
      },
      mauro: {
        who: "mauro", mood: "furious",
        line: {
          A: "Mauro se acerca a ti. «Ella me mintió. Tiene otro. ¡Lo vi en el celular!» Karina: «¡Es mi hermano!»",
          B: "Mauro se te acerca con la cara roja. «Me mintió. Tiene a otro, lo vi en su celular.» Karina grita desde atrás: «¡Es mi hermano, imbécil!»",
          C: "Mauro avanza hacia ti con la vena del cuello hinchada. «Me mintió: tiene a otro, lo leí en su celular.» Karina, desde atrás: «¡Era mi hermano, imbécil!»",
        },
        options: [
          {
            id: "razonar",
            say: { A: "Aunque mintiera, no puedes agarrarla así.", B: "Aunque te hubiera mentido, no puedes agarrarla así. Nadie puede.", C: "Aunque tuvieras razón, que no la tienes, nadie agarra así a nadie. Se acabó." },
            reply: { A: "Mauro te empuja con las dos manos. «¡Tú qué sabes!»", B: "Mauro te empuja con las dos manos y retrocedes un paso. «¡Tú qué sabes de lo mío!»", C: "Mauro te empuja con las dos manos, más fuerte de lo que esperabas. «¡Tú qué vas a saber!»" },
            mood: "furious", end: "pelea",
          },
          {
            id: "escuchar",
            say: { A: "Karina, cuéntame tú. ¿Qué pasó?", B: "Karina, cuéntame tu versión. ¿Qué pasó de verdad?", C: "Karina, ahora tú: cuéntame qué pasó, sin gritos, y empezando por el principio." },
            reply: { A: "Karina respira. «Mi hermano me escribió. Él me quitó el celular.»", B: "Karina respira hondo. «Mi hermano me escribió para verme. Mauro me quitó el celular y me siguió hasta aquí.»", C: "Karina respira, temblando. «Mi hermano me escribió para verme esta noche. Mauro me arrancó el celular y me persiguió hasta el canal.»" },
            mood: "worried", next: "karina",
          },
          {
            id: "policia",
            say: { A: "Voy a llamar a la policía. Quédense ahí.", B: "Voy a llamar a la policía. Los dos se quedan ahí.", C: "Llamo a la policía. Que lo expliquen ellos, que para eso están." },
            reply: { A: "Mauro se pone pálido. «No hace falta.» Karina asiente: «Sí, llámala.»", B: "Mauro se pone pálido de golpe. «No, no hace falta.» Karina asiente: «Sí. Llámala.»", C: "Mauro cambia de color. «No hace falta nada de eso.» Karina, firme: «Hace falta, y mucha. Llámala.»" },
            mood: "scared", end: "policia",
          },
        ],
      },
      karina: {
        who: "karina", mood: "sad",
        line: {
          A: "Karina abraza su bolso. Mauro está a dos pasos, con los brazos cruzados. Ella te mira. «No sé qué hacer. Lo quiero. Pero hoy me asustó.»",
          B: "Karina abraza su bolso. Mauro, a dos pasos, respira por la nariz. Ella te mira: «No sé qué hacer. Lo quiero, pero hoy me dio miedo de verdad.»",
          C: "Karina aprieta el bolso contra el pecho. Mauro, a dos pasos, respira como un toro. Ella te mira: «No sé qué hacer. Lo quiero, y hoy me dio miedo; las dos cosas son ciertas.»",
        },
        options: [
          {
            id: "irse",
            say: { A: "Vete a casa de una amiga. Yo me quedo con él.", B: "Vete a casa de una amiga esta noche. Yo me quedo con él un rato.", C: "Vete esta noche a casa de alguien de confianza. Yo me quedo con él hasta que se le pase." },
            reply: { A: "Karina asiente y se va rápido. Mauro la mira alejarse. «Se acabó.»", B: "Karina asiente, recoge el celular que Mauro le devuelve y se va rápido. Él la mira alejarse: «Se acabó, ¿verdad?»", C: "Karina asiente, recupera su celular y se va sin mirar atrás. Mauro la sigue con los ojos: «Se acabó, ¿no?»" },
            mood: "sad", end: "ella-se-va",
          },
          {
            id: "denunciar",
            say: { A: "Si te agarró así, puedes denunciarlo. Te acompaño.", B: "Si te agarró así, puedes denunciarlo. Te acompaño a la comisaría.", C: "Lo que hizo tiene nombre y se puede denunciar. Si quieres, te acompaño a la comisaría ahora mismo." },
            reply: { A: "Karina mira a Mauro. Él baja la cabeza. «Perdón.» Ella: «Llama.»", B: "Karina mira a Mauro largo rato. Él baja la cabeza: «Perdón.» Ella, sin dudar: «Llama a la policía.»", C: "Karina mira a Mauro un buen rato. Él baja la cabeza: «Perdón.» Ella, con la voz firme: «Perdón no basta. Llama a la policía.»" },
            mood: "neutral", end: "policia",
          },
          {
            id: "hablar",
            say: { A: "Hablen cinco minutos. Yo me quedo aquí.", B: "Hablen cinco minutos, sin gritar. Yo me quedo aquí cerca.", C: "Cinco minutos de conversación, sin gritos y con testigo. Yo me quedo aquí cerca, sin escuchar." },
            reply: { A: "Hablan bajo. Karina llora. Mauro también. Se sientan en un banco.", B: "Hablan en voz baja junto al canal. Karina llora y Mauro también. Al final se sientan en un banco, separados por un metro.", C: "Hablan en voz baja junto al canal. Karina llora, Mauro también. Terminan sentados en un banco, separados por un metro de silencio." },
            mood: "sad", end: "separan",
          },
        ],
      },

      // ── cuchillo: Mauro saca una navaja.
      "cuchillo-inicio": {
        who: "mauro", mood: "furious",
        line: {
          A: "Sacas el cuchillo. Mauro suelta a Karina y saca una navaja. Los dos se miran con las armas en alto. Karina grita: «¡No! ¡Basta!»",
          B: "Sacas el cuchillo y Mauro suelta a Karina de golpe. Sin pensarlo, saca una navaja del bolsillo. Los dos se miran con las armas en alto. Karina grita: «¡No! ¡Basta ya!»",
          C: "Sacas el cuchillo y Mauro suelta a Karina; en un segundo tiene una navaja en la mano. Dos filos frente a frente, el canal detrás. Karina grita: «¡Basta! ¡Los dos!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja eso. Yo bajo el mío. Calma.", B: "Baja la navaja y yo bajo el cuchillo. Calma.", C: "Bajamos las armas a la vez. Tú primero o yo, me da igual, pero ya." },
            reply: { A: "Mauro duda. «Tú primero.» Karina se pone en medio.", B: "Mauro duda con la mandíbula tensa. «Tú primero.» Karina se mete en medio, con las manos abiertas.", C: "Mauro duda, tenso como una cuerda. «Tú primero.» Karina se interpone entre los dos con las manos abiertas." },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "karina",
            say: { A: "Karina, corre. Yo lo miro.", B: "Karina, vete corriendo. Yo no le quito los ojos de encima.", C: "Karina, vete ahora, corriendo. Yo me ocupo de que no te siga." },
            reply: { A: "Karina corre. Mauro grita: «¡Vuelve!» y avanza hacia ti.", B: "Karina sale corriendo por el paseo. Mauro grita «¡Vuelve!» y avanza hacia ti con la navaja.", C: "Karina huye por el paseo. Mauro grita «¡Vuelve!» y se lanza hacia ti con la navaja por delante." },
            mood: "furious", end: "cuchillo-policia",
          },
          {
            id: "amenazar",
            say: { A: "¡Suelta eso o te corto!", B: "¡Suelta eso o te hago un corte!", C: "¡Suelta esa navaja o hacemos esto por las malas!" },
            reply: { A: "Mauro ríe sin gracia. «Hazlo.» Karina grita. Se acerca gente.", B: "Mauro ríe sin gracia. «Hazlo, a ver.» Karina grita y varias personas del paseo se acercan corriendo.", C: "Mauro ríe sin gracia. «Hazlo, valiente.» Karina grita y un grupo del paseo corre hacia ustedes, con celulares en alto." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "karina", mood: "terror",
        line: {
          A: "Karina está entre los dos filos. «¡Si se hieren, me voy y no vuelvo!» Mauro baja un poco la navaja. Esperan tu movimiento.",
          B: "Karina, entre los dos filos, grita: «¡Si alguien se hiere, me voy para siempre!» Mauro baja un poco la navaja. Todos esperan tu movimiento.",
          C: "Karina, plantada entre los dos filos, amenaza: «¡Si alguien sangra, desaparezco para siempre!» Mauro baja la navaja unos centímetros. Todos esperan tu movimiento.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Está bien. Lo guardo. Mauro, tú también.", B: "Está bien, lo guardo. Mauro, haz lo mismo y hablamos.", C: "Lo guardo, Karina. Mauro, haz lo mismo y sigamos con palabras, que se nos dan mejor." },
            reply: { A: "Mauro cierra la navaja. Karina llora. Nadie dice nada.", B: "Mauro cierra la navaja con un clic y la guarda. Karina llora de alivio. Nadie dice nada durante un rato largo.", C: "Mauro cierra la navaja con un clic seco. Karina llora de alivio. El silencio dura más que la pelea entera." },
            mood: "worried", end: "cuchillo-calma",
          },
          {
            id: "policia",
            say: { A: "Ya llamé a la policía. Vienen.", B: "Ya he llamado a la policía. Llegan en dos minutos.", C: "Ya avisé a la policía; llegan en dos minutos. Decidan cómo quieren que los encuentren." },
            reply: { A: "Mauro tira la navaja al canal. Karina lo abraza. Tú guardas el cuchillo.", B: "Mauro tira la navaja al agua del canal. Karina corre y lo abraza llorando. Tú guardas el cuchillo, temblando.", C: "Mauro lanza la navaja al canal sin pensarlo. Karina se cuelga de su cuello llorando. Tú guardas el cuchillo, con las rodillas flojas." },
            mood: "scared", end: "cuchillo-calma",
          },
          {
            id: "provocar",
            say: { A: "Tú empezaste. Mereces un corte.", B: "Tú empezaste todo esto. Te mereces un corte.", C: "Tú empezaste, Mauro. Si alguien se merece un corte, ya sabes quién." },
            reply: { A: "Mauro se lanza. Karina grita. Alguien llama a la policía.", B: "Mauro se lanza contra ti. Karina grita. Alguien del paseo, a lo lejos, llama a la policía.", C: "Mauro se lanza contra ti y Karina grita. A lo lejos, alguien del paseo ya está llamando a la policía." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },

      // ── pistola: Mauro se arrodilla.
      "pistola-inicio": {
        who: "mauro", mood: "terror",
        line: {
          A: "Se ve tu pistola. Mauro suelta a Karina y levanta las manos. «No, por favor. Solo discutíamos.» Karina retrocede, con miedo de los dos.",
          B: "Tu pistola asoma de la chaqueta. Mauro suelta a Karina como si quemara y levanta las manos. «No, por favor, solo discutíamos.» Karina retrocede, con miedo de los dos.",
          C: "Tu pistola queda a la vista. Mauro suelta a Karina y alza las manos. «No hace falta nada de eso, solo discutíamos.» Karina retrocede un paso: ahora teme a los dos hombres.",
        },
        options: [
          {
            id: "suelo",
            say: { A: "De rodillas. Las manos en la cabeza.", B: "De rodillas, las manos en la cabeza. Ahora.", C: "De rodillas y las manos en la nuca. No te lo repito." },
            reply: { A: "Mauro se arrodilla. Llora. «Perdón, Karina. Perdón.» Ella no se acerca.", B: "Mauro se arrodilla en el suelo, llorando. «Perdón, Karina, perdón.» Ella no se acerca ni un paso.", C: "Mauro se arrodilla temblando y rompe a llorar. «Perdóname, Karina.» Ella no se mueve; mira tu chaqueta, no a él." },
            mood: "terror", next: "pistola-rodillas",
          },
          {
            id: "karina",
            say: { A: "Karina, no tengas miedo. Estás a salvo.", B: "Karina, no tengas miedo. Estás a salvo, aunque parezca raro.", C: "Karina, estás a salvo, aunque con esta pistola cueste creerlo. Respira." },
            reply: { A: "Karina te mira la chaqueta. «¿A salvo con una pistola?» Mauro no se mueve.", B: "Karina mira tu chaqueta y luego a ti. «¿A salvo, con eso? Perdona, no te creo.» Mauro sigue con las manos arriba.", C: "Karina mira la pistola y luego tus ojos. «¿A salvo, con eso en la mano? Perdona que no te crea.» Mauro, con las manos arriba, asiente a todo." },
            mood: "scared", next: "pistola-rodillas",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Mauro, vete y no vuelvas.", B: "La guardo. Mauro, vete de aquí y no vuelvas a acercarte a ella.", C: "Guardada. Mauro, desaparece y no vuelvas a acercarte a ella. Ni a llamarla." },
            reply: { A: "Mauro corre hacia el puente. Karina te mira con miedo. «Gracias… creo.»", B: "Mauro sale corriendo hacia el puente sin mirar atrás. Karina te mira con miedo: «Gracias… creo.»", C: "Mauro huye hacia el puente sin mirar atrás. Karina te observa con recelo: «Gracias. Creo que es lo que corresponde decir.»" },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },
      "pistola-rodillas": {
        who: "karina", mood: "scared",
        line: {
          A: "Mauro está de rodillas junto al canal. Karina murmura: «No quiero que lo maten. Solo quería que me soltara.»",
          B: "Mauro sigue de rodillas junto al canal, llorando. Karina murmura: «No quiero que le pase nada. Solo quería que me soltara.»",
          C: "Mauro sigue de rodillas junto al canal, deshecho. Karina murmura: «No quiero que le hagan daño. Solo quería que me soltara, nada más.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Está bien. La guardo. Mauro, levántate y vete.", B: "Está bien, la guardo. Mauro, levántate y vete a tu casa. Ahora.", C: "De acuerdo, la guardo. Mauro, levántate, vete a tu casa y piensa en lo que has hecho." },
            reply: { A: "Mauro se levanta y se va sin mirarla. Karina se sienta en un banco, temblando.", B: "Mauro se levanta y se va sin atreverse a mirarla. Karina se deja caer en un banco, temblando.", C: "Mauro se levanta como puede y se aleja sin mirarla. Karina se desploma en un banco, temblando de pies a cabeza." },
            mood: "worried", end: "pistola-calma",
          },
          {
            id: "policia",
            say: { A: "Llamo a la policía. Ellos deciden.", B: "Llamo a la policía. Que lo decidan ellos.", C: "Llamo a la policía; esto lo deciden ellos, no tú, no yo y menos esta pistola." },
            reply: { A: "Karina asiente. Llega una patrulla y ve la pistola. Te apuntan.", B: "Karina asiente. La patrulla llega rápido y lo primero que ve es la pistola. Te apuntan, y levantas las manos.", C: "Karina asiente en silencio. La patrulla llega y, de todo el cuadro, solo ve la pistola. Te apuntan y levantas las manos." },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "disparar",
            say: { A: "¡No te muevas! ¡O disparo!", B: "¡Ni un movimiento o disparo!", C: "¡Ni un solo movimiento, o esto se pone peor!" },
            reply: { A: "Karina grita. Alguien llama a la policía. Mauro llora más fuerte.", B: "Karina grita desesperada. Alguien del paseo llama a la policía. Mauro llora más fuerte todavía.", C: "Karina grita fuera de sí. Alguien del paseo, escondido tras un banco, llama a la policía. Mauro sigue llorando." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },

      // ── granada: los dos se unen contra ti.
      "granada-inicio": {
        who: "karina", mood: "terror",
        line: {
          A: "Sacas la granada. Mauro y Karina dejan de pelear al instante. Se abrazan. «¡Ni se te ocurra!», gritan los dos.",
          B: "Sacas la granada. Mauro y Karina dejan de pelear al instante, se abrazan y gritan a coro: «¡Ni se te ocurra!»",
          C: "Sacas la granada y la pelea se evapora: Mauro y Karina se abrazan como náufragos y gritan a coro: «¡Ni se te ocurra!»",
        },
        options: [
          {
            id: "falsa",
            say: { A: "Es falsa. Era para separarlos.", B: "Es falsa, tranquilos. Solo quería separarlos.", C: "Es de juguete. Quería separarlos y, miren, funcionó." },
            reply: { A: "Los dos se miran. Karina se ríe. Mauro también. «¡Estás loco!»", B: "Los dos se miran y, de pronto, Karina empieza a reírse. Mauro la sigue. «¡Estás loco, de verdad!»", C: "Los dos se miran, atónitos, y Karina estalla en risa. Mauro la acompaña. «¡Estás loco!», dicen a la vez." },
            mood: "laugh", next: "granada-juntos",
          },
          {
            id: "amenaza",
            say: { A: "Si pelean otra vez, la tiro al canal.", B: "Si vuelven a pelear, la tiro al canal. Y a ustedes detrás.", C: "Si vuelven a pelear, la tiro. Al canal, y ustedes pueden ir detrás si quieren." },
            reply: { A: "Gritan, corren, se separan. Alguien en el paseo llama a la policía.", B: "Los dos gritan, corren en direcciones opuestas y alguien del paseo llama a la policía en voz alta.", C: "Los dos huyen gritando, cada uno por su lado. En el paseo, alguien ya marca el número de la policía." },
            mood: "terror", end: "granada-huye",
          },
          {
            id: "huir",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, perdón! ¡Me voy!", C: "¡Perdón! ¡Me retiro con la granada y mi dignidad!" },
            reply: { A: "Corres. Atrás los dos gritan: «¡Un loco con una bomba!»", B: "Corres por el paseo. Detrás, los dos gritan: «¡Un loco con una bomba!»", C: "Corres por el paseo. Detrás, la pareja reconciliada grita a coro: «¡Un loco con una bomba!»" },
            mood: "terror", end: "granada-huye",
          },
        ],
      },
      "granada-juntos": {
        who: "mauro", mood: "laugh",
        line: {
          A: "Mauro y Karina siguen abrazados y riendo. «Tuvimos una pelea tonta», dice él. «Y un loco nos salvó.» Alguien grita: «¡Policía!»",
          B: "Mauro y Karina siguen abrazados, riendo con nervios. «Fue una pelea tonta», dice él. «Y un loco con una granada nos reconcilió.» Desde el paseo alguien grita: «¡Policía, rápido!»",
          C: "Mauro y Karina siguen abrazados, riendo. «Una pelea tonta», admite él, «y un lunático con una granada nos reconcilió.» Desde el paseo, alguien grita: «¡Llamen a la policía!»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Esperamos a la policía y explicamos todo.", B: "Esperamos a la policía y explicamos todo, los tres juntos.", C: "Esperamos a la policía y lo explicamos entre los tres; la verdad suena menos grave." },
            reply: { A: "Un helicóptero llega primero. Los tres levantan las manos.", B: "Un helicóptero llega primero y los ilumina. Los tres levantan las manos, sin saber muy bien por qué.", C: "Un helicóptero llega antes que nadie y los ilumina. Los tres levantan las manos, aunque nadie sepa de qué se les acusa." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "huir",
            say: { A: "Mejor nos vamos los tres. Rápido.", B: "Mejor nos vamos los tres antes de que lleguen. Rápido.", C: "Mejor desaparecemos los tres antes de que la historia se complique." },
            reply: { A: "Corren por el paseo, riendo. Atrás suenan sirenas.", B: "Corren por el paseo agarrados de la mano, riendo. Detrás suenan las sirenas.", C: "Corren por el paseo, riendo como adolescentes. Detrás, las sirenas dibujan el mapa de la noche." },
            mood: "laugh", end: "granada-risa",
          },
          {
            id: "beso",
            say: { A: "Y ahora bésense. Se lo ganaron.", B: "Y ahora bésense. Se lo han ganado después de este susto.", C: "Y ahora, un beso: se lo han ganado, y yo tengo que irme antes de que lleguen." },
            reply: { A: "Se besan. Tú te vas. Nadie te sigue.", B: "Se besan largo, mientras tú te alejas por el paseo. Nadie te sigue.", C: "Se besan como en una película y tú te esfumas entre la gente. Nadie te sigue; todos miran el beso." },
            mood: "love", end: "granada-risa",
          },
        ],
      },

      // ── gas: Karina te anima a rociarlo.
      "gas-inicio": {
        who: "karina", mood: "angry",
        line: {
          A: "Sacas el gas pimienta. Mauro suelta a Karina. Ella grita: «¡Rocíalo! ¡Se lo merece!» Él: «¡Estás loca!»",
          B: "Sacas el gas pimienta y Mauro suelta a Karina al instante. Ella grita: «¡Rocíalo, se lo merece!» Él: «¡Estás loca, Karina!»",
          C: "Sacas el gas pimienta. Mauro suelta a Karina de golpe; ella, con los ojos encendidos: «¡Rocíalo, se lo ha ganado!» Él: «¡Estás loca!»",
        },
        options: [
          {
            id: "distancia",
            say: { A: "Mauro, atrás. Dos pasos. Ahora.", B: "Mauro, da dos pasos atrás. Ahora mismo.", C: "Mauro, dos pasos atrás y las manos donde yo las vea." },
            reply: { A: "Mauro retrocede. «Ya, ya. No hace falta.» Karina te mira, aliviada.", B: "Mauro retrocede con las manos abiertas. «Ya, ya, tranquilo.» Karina te mira, aliviada y temblando.", C: "Mauro retrocede con las manos abiertas. «Tranquilo, ya está.» Karina respira por primera vez en un minuto." },
            mood: "scared", next: "gas-distancia",
          },
          {
            id: "rociar",
            say: { A: "¡Y no vuelvas a tocarla!", B: "¡Y no vuelvas a ponerle una mano encima!", C: "¡Y no vuelvas a ponerle una mano encima, nunca!" },
            reply: { A: "Rocías a Mauro. Cae al suelo gritando. Karina se asusta de ti.", B: "Rocías a Mauro en la cara. Cae de rodillas gritando. Karina da un paso atrás, asustada de ti también.", C: "Rocías a Mauro en la cara y cae de rodillas, aullando. Karina retrocede: ya no sabe de quién tiene más miedo." },
            mood: "furious", end: "gas-cae",
          },
          {
            id: "guardar",
            say: { A: "Karina, esto no es un juego. Lo guardo.", B: "Karina, esto no es un juego. Lo guardo y hablamos.", C: "Karina, esto no es un juego ni un castigo. Lo guardo y hablamos con calma." },
            reply: { A: "Karina asiente con rabia. «Tienes razón. Pero tengo miedo.»", B: "Karina asiente, con los ojos llenos de rabia. «Tienes razón, pero tengo mucho miedo.»", C: "Karina asiente con rabia contenida. «Tienes razón. Y aun así, tengo miedo, y eso no se me quita.»" },
            mood: "worried", next: "karina",
          },
        ],
      },
      "gas-distancia": {
        who: "mauro", mood: "worried",
        line: {
          A: "Mauro, a dos pasos, habla sin acercarse. «Estoy mal. Se me fue la cabeza. Me voy.» Karina: «¿Y mañana?»",
          B: "Mauro, a distancia, habla sin acercarse. «Estoy mal, se me fue la cabeza. Me voy.» Karina cruza los brazos: «¿Y mañana qué?»",
          C: "Mauro, a distancia prudente, habla sin acercarse. «Me pasé, se me fue la cabeza. Me voy.» Karina cruza los brazos: «¿Y mañana, Mauro? ¿Mañana qué?»",
        },
        options: [
          {
            id: "irse",
            say: { A: "Sí, vete. Karina, ¿quieres que te acompañe?", B: "Sí, vete a tu casa. Karina, ¿quieres que te acompañe?", C: "Sí, vete y respira. Karina, ¿quieres que te acompañe hasta tu casa?" },
            reply: { A: "Mauro se va. Karina acepta. Caminan juntos hacia el puente.", B: "Mauro se va sin mirar atrás. Karina acepta tu ayuda y caminan juntos hacia el puente.", C: "Mauro se aleja sin volver la cabeza. Karina acepta y caminan juntos hacia el puente, sin hablar." },
            mood: "worried", end: "gas-calma",
          },
          {
            id: "policia",
            say: { A: "Mejor llamo a la policía. Para estar seguros.", B: "Mejor llamo a la policía, para que quede constancia.", C: "Prefiero llamar a la policía, aunque solo sea para que quede constancia de esta noche." },
            reply: { A: "Mauro suspira. «Haz lo que quieras.» Karina asiente. La patrulla llega.", B: "Mauro suspira. «Haz lo que quieras.» Karina asiente despacio. La patrulla llega a los pocos minutos.", C: "Mauro suspira, resignado. «Haz lo que quieras.» Karina asiente. La patrulla llega y escucha tres versiones y un gas pimienta." },
            mood: "neutral", end: "gas-policia",
          },
          {
            id: "razonable",
            say: { A: "Llevar esto es razonable. Pero hoy no lo uso.", B: "Llevar esto es razonable en la calle, pero hoy no hizo falta.", C: "Llevar esto me parece razonable en una ciudad de noche; que hoy no haya hecho falta es un alivio." },
            reply: { A: "Mauro asiente. «Tienes razón.» Karina se ríe un poco. Se acercan al banco.", B: "Mauro asiente, vencido. «Tienes razón, la verdad.» Karina se ríe un poco y los dos se acercan al banco.", C: "Mauro asiente, vencido. «Razón no te falta.» Karina se ríe un poco y los tres se acercan al banco, a distancia prudente." },
            mood: "smile", end: "gas-calma",
          },
        ],
      },

      // ── lápiz: anotas, y le pasas a Karina un número.
      "lapiz-inicio": {
        who: "mauro", mood: "surprised",
        line: {
          A: "Sacas el lápiz y escribes algo rápido en un papel. Mauro suelta a Karina. «¿Qué escribes?» Karina te mira, desconcertada.",
          B: "Sacas el lápiz y empiezas a escribir en un papel, sin dejar de mirarlos. Mauro suelta a Karina, descolocado. «¿Qué escribes? ¿Qué es eso?» Karina te mira, desconcertada.",
          C: "Sacas el lápiz y empiezas a escribir con calma de notario. Mauro suelta a Karina, descolocado. «¿Qué escribes ahí?» Karina te mira sin entender nada.",
        },
        options: [
          {
            id: "testigo",
            say: { A: "La hora, el lugar, lo que vi. Soy testigo.", B: "La hora, el lugar y lo que acabo de ver. Soy testigo.", C: "Hora, lugar y hechos. Un testigo que escribe es un testigo difícil de callar." },
            reply: { A: "Mauro se pone nervioso. «Rompe eso.» Karina mira el papel.", B: "Mauro se pone nervioso. «Rompe eso ahora.» Karina, en cambio, mira el papel con atención.", C: "Mauro se pone visiblemente nervioso. «Rompe eso.» Karina, en cambio, se queda mirando el papel con interés." },
            mood: "worried", next: "lapiz-nota",
          },
          {
            id: "numero",
            say: { A: "Karina, escribo aquí un número de ayuda. Tómalo.", B: "Karina, te escribo un número de ayuda. Guárdalo, por si lo necesitas.", C: "Karina, te apunto un teléfono de ayuda. Guárdalo; no tienes que usarlo hoy, pero que lo tengas." },
            reply: { A: "Karina toma el papel. Mauro quiere quitárselo. Ella lo esconde.", B: "Karina toma el papel y lo esconde en el puño. Mauro intenta quitárselo; ella retrocede.", C: "Karina toma el papel y lo cierra en el puño. Mauro intenta arrebatárselo y ella se aparta, esta vez sin miedo." },
            mood: "worried", next: "lapiz-nota",
          },
          {
            id: "dibujar",
            say: { A: "Dibujo un corazón. Ustedes, calma.", B: "Estoy dibujando un corazón. Respiren los dos, por favor.", C: "Dibujo un corazón torcido, para bajar la tensión. Respiren, que el arte no muerde." },
            reply: { A: "Mauro mira el dibujo y se ríe sin querer. Karina, no. Sigue seria.", B: "Mauro mira el dibujo y se le escapa una risa corta. Karina no se ríe: sigue seria, mirándolo a él.", C: "Mauro mira el corazón torcido y se ríe a su pesar. Karina no: sigue seria, esperando lo que él diga." },
            mood: "neutral", end: "lapiz-rompe",
          },
        ],
      },
      "lapiz-nota": {
        who: "karina", mood: "worried",
        line: {
          A: "Karina guarda el papel en el bolso. «Gracias. Pero Mauro se enoja si me ve con eso.» Mauro, de lejos: «¿Qué te dio?»",
          B: "Karina guarda el papel en el bolso. «Gracias. Pero si Mauro lo ve, se enoja.» Él, a cinco pasos: «¿Qué te dio ese?»",
          C: "Karina esconde el papel en el bolso. «Gracias; pero si Mauro lo ve, se enciende.» Él, a cinco pasos: «¿Qué te ha dado ese tipo?»",
        },
        options: [
          {
            id: "decir",
            say: { A: "Dile la verdad. Es un teléfono de ayuda.", B: "Dile la verdad: es un teléfono de ayuda, no un secreto.", C: "Dile la verdad: es un teléfono de ayuda. Que sepa que existe y que lo conoces." },
            reply: { A: "Karina se lo dice. Mauro se calla. Se sienta en el suelo.", B: "Karina se lo dice mirándolo a los ojos. Mauro se calla de golpe y se sienta en el suelo, con las manos en la cabeza.", C: "Karina se lo dice sin apartar la mirada. Mauro se queda mudo y se deja caer en el suelo, con la cabeza entre las manos." },
            mood: "sad", end: "lapiz-ayuda",
          },
          {
            id: "irse",
            say: { A: "Vete ahora. Llama a ese número mañana.", B: "Vete ahora, y llama a ese número mañana por la mañana.", C: "Vete ahora y llama a ese número mañana a primera hora; no esperes a que pase otra noche así." },
            reply: { A: "Karina se va rápido. Mauro quiere seguirla. Te pones delante.", B: "Karina se va a paso rápido. Mauro quiere seguirla y te pones delante de él, sin tocarlo.", C: "Karina se aleja a paso rápido. Mauro intenta seguirla y te interpones, sin tocarlo, con el lápiz como única arma." },
            mood: "worried", end: "lapiz-ayuda",
          },
          {
            id: "firma",
            say: { A: "Mauro, firma aquí que no la vas a seguir.", B: "Mauro, firma aquí que no vas a seguirla esta noche.", C: "Mauro, firma aquí que esta noche no la sigues. Un papel firmado pesa más que una promesa." },
            reply: { A: "Mauro rompe el papel. «Yo no firmo nada.» Se va furioso.", B: "Mauro te arranca el papel y lo rompe en cuatro. «Yo no firmo nada.» Se va furioso por el paseo.", C: "Mauro te arranca el papel y lo hace trizas. «Yo no firmo nada.» Se aleja furioso, con la promesa hecha pedazos en el suelo." },
            mood: "furious", end: "lapiz-rompe",
          },
        ],
      },

      // ── libro: la excusa de la dirección.
      "libro-inicio": {
        who: "mauro", mood: "surprised",
        line: {
          A: "Te metes entre los dos con tu libro. «Perdón, ¿esta calle dónde queda?» Mauro y Karina se quedan quietos, con la boca abierta.",
          B: "Te metes entre los dos, abres el libro y finges buscar una dirección: «Perdón, ¿saben dónde queda esta calle?» Mauro y Karina se quedan quietos, con la boca abierta.",
          C: "Te metes entre los dos con el libro abierto y cara de turista perdido: «Perdón, ¿sabrían decirme dónde queda esta calle?» Mauro y Karina se quedan petrificados.",
        },
        options: [
          {
            id: "seguir",
            say: { A: "Es urgente. ¿Me ayudan? Aquí, en el mapa.", B: "Es urgente, de verdad. ¿Me ayudan a encontrarla en el mapa?", C: "Es muy urgente, ya me ven. ¿Pueden ayudarme con el mapa, los dos?" },
            reply: { A: "Karina mira el libro. «Eso no es un mapa. Es una novela.» Mauro se ríe.", B: "Karina mira el libro y levanta una ceja. «Eso no es un mapa, es una novela.» Mauro, sin querer, se ríe.", C: "Karina examina el libro. «Eso no es un mapa, es una novela rosa.» Mauro suelta una risa nerviosa a su pesar." },
            mood: "laugh", next: "libro-excusa",
          },
          {
            id: "verdad",
            say: { A: "No busco una calle. Quiero que dejen de gritar.", B: "En realidad no busco ninguna calle. Quiero que dejen de gritarse.", C: "Mentira: no busco ninguna calle. Quiero que dejen de gritarse y respiren." },
            reply: { A: "Karina baja la voz. «Gracias.» Mauro, rojo: «No te metas en esto.»", B: "Karina baja la voz y te sonríe sin ganas. «Gracias.» Mauro, rojo de vergüenza, gruñe: «No te metas.»", C: "Karina baja la voz: «Gracias por la excusa.» Mauro, rojo, gruñe: «Nadie te pidió que te metieras.»" },
            mood: "worried", next: "libro-excusa",
          },
          {
            id: "regalar",
            say: { A: "Tomen. Léanlo juntos. Es mi regalo.", B: "Tomen el libro. Léanlo juntos esta noche, es mi regalo.", C: "Quédense con el libro. Léanlo juntos esta noche; es mi regalo para este desastre." },
            reply: { A: "Karina toma el libro. Mauro no. Ella se va con el libro.", B: "Karina toma el libro, mira a Mauro y no dice nada. Él no lo toca. Ella se va con el libro bajo el brazo.", C: "Karina acepta el libro, mira a Mauro con pena y se marcha con él bajo el brazo. Mauro se queda mirando el canal." },
            mood: "sad", end: "libro-ella-se-va",
          },
        ],
      },
      "libro-excusa": {
        who: "karina", mood: "smile",
        line: {
          A: "Karina casi sonríe. «Qué raro eres. Mauro, mira: alguien se preocupa por nosotros.» Él evita mirarla.",
          B: "Karina casi sonríe por primera vez. «Qué raro eres. Mauro, mira: un desconocido se preocupa más por nosotros que tú.» Él evita su mirada.",
          C: "Karina casi sonríe. «Eres rarísimo. Mauro, un desconocido con una novela se preocupa más por nosotros que tú.» Él evita su mirada.",
        },
        options: [
          {
            id: "juntos",
            say: { A: "Siéntense en el banco. Los dos. Respiren.", B: "Siéntense en ese banco, los dos. Respiren y hablen más bajo.", C: "Siéntense en ese banco y hablen más bajo; las cosas dichas en voz baja pesan menos." },
            reply: { A: "Se sientan, sin tocarse. Mauro llora. Karina le pasa un pañuelo.", B: "Se sientan, separados por un metro. Mauro empieza a llorar y Karina, sin mirarlo, le pasa un pañuelo.", C: "Se sientan, con un metro de distancia. Mauro empieza a llorar y Karina, tras un largo silencio, le pasa un pañuelo." },
            mood: "sad", end: "libro-separa",
          },
          {
            id: "irse",
            say: { A: "Karina, vete a casa. Mauro, mañana hablan.", B: "Karina, vete a casa hoy. Mauro, mañana hablan con calma.", C: "Karina, esta noche a casa. Mauro, mañana, con la cabeza fría, hablan de todo." },
            reply: { A: "Karina asiente y se va. Mauro mira el canal y no la sigue.", B: "Karina asiente y se aleja. Mauro mira el canal un buen rato y no la sigue.", C: "Karina asiente y se va con paso firme. Mauro mira el agua oscura y, por una vez, no la sigue." },
            mood: "neutral", end: "libro-ella-se-va",
          },
          {
            id: "leer",
            say: { A: "Leo un párrafo para los dos. Escuchen.", B: "Les leo un párrafo y luego deciden. Escuchen.", C: "Les leo un párrafo; si después de eso siguen gritando, me retiro." },
            reply: { A: "Lees en voz alta. Los dos escuchan. Se ríen de la frase final.", B: "Lees en voz alta junto al canal. Los dos escuchan, serios al principio y riendo con la frase final.", C: "Lees en voz alta junto al agua. Escuchan en silencio y terminan riéndose de la frase final, incluso él." },
            mood: "laugh", end: "libro-separa",
          },
        ],
      },

      // ── corazón: Mauro rompe a llorar.
      "corazon-inicio": {
        who: "mauro", mood: "sad",
        line: {
          A: "Usas el corazón. Mauro suelta a Karina y se echa a llorar. «No sé qué me pasa. Tengo miedo de perderla.» Karina se queda quieta.",
          B: "Usas el corazón. Mauro suelta a Karina y se echa a llorar, tapándose la cara. «No sé qué me pasa. Tengo miedo de perderla.» Karina se queda inmóvil.",
          C: "Usas el corazón. Mauro suelta a Karina y se derrumba, con la cara entre las manos. «No sé qué me pasa; tengo tanto miedo de perderla que la ahogo.» Karina se queda inmóvil.",
        },
        options: [
          {
            id: "mauro",
            say: { A: "Mauro, respira. Esto no se arregla gritando.", B: "Mauro, respira. Gritando no vas a conseguir que se quede.", C: "Mauro, respira. Con gritos no se retiene a nadie; con gritos solo se la aleja." },
            reply: { A: "Mauro respira. «Perdón, Karina. Perdón.» Ella lo mira, con lágrimas.", B: "Mauro respira temblando. «Perdóname, Karina. Perdóname.» Ella lo mira con los ojos llenos de lágrimas.", C: "Mauro respira con esfuerzo. «Perdóname, Karina.» Ella lo mira con los ojos llenos de lágrimas y de dudas." },
            mood: "love", next: "corazon-pareja",
          },
          {
            id: "karina",
            say: { A: "Karina, ¿estás bien? Tú decides qué hacer.", B: "Karina, ¿estás bien? Tú decides qué quieres hacer ahora.", C: "Karina, ¿cómo estás? Lo que pase ahora lo decides tú, y nadie más." },
            reply: { A: "Karina se seca la cara. «Estoy bien. Mauro, ven.» Lo abraza.", B: "Karina se seca la cara. «Estoy bien. Mauro, ven aquí.» Y lo abraza, aunque le tiemblan los brazos.", C: "Karina se limpia la cara con la manga. «Estoy bien, gracias.» Mira a Mauro un instante y lo abraza, con los brazos aún temblando." },
            mood: "love", next: "corazon-pareja",
          },
          {
            id: "irse",
            say: { A: "Ya se hablan solos. Me voy.", B: "Ya pueden hablar solos. Yo me retiro.", C: "Ya pueden arreglárselas solos. Yo me retiro, que aquí sobro." },
            reply: { A: "Karina te sonríe. «Gracias.» Mauro sigue llorando, pero ya la abraza.", B: "Karina te sonríe con ojos húmedos. «Gracias.» Mauro sigue llorando, pero ya la abraza.", C: "Karina te sonríe, empapada en lágrimas. «Gracias por todo.» Mauro llora aún, pero ya la tiene entre los brazos." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-pareja": {
        who: "karina", mood: "smitten",
        line: {
          A: "Karina mira a Mauro. «Te quiero. Pero esto no vuelve a pasar. Si pasa, me voy.» Mauro asiente: «Lo prometo.»",
          B: "Karina mira a Mauro a los ojos. «Te quiero, pero esto no vuelve a pasar. Si pasa otra vez, me voy.» Mauro asiente: «Lo prometo, de verdad.»",
          C: "Karina mira a Mauro fijamente. «Te quiero, y precisamente por eso: esto no vuelve a pasar. Si pasa otra vez, me voy.» Mauro asiente: «Te lo prometo.»",
        },
        options: [
          {
            id: "beso",
            say: { A: "Bésense. Después hablan con calma.", B: "Bésense, si es lo que sienten. Después hablan con calma.", C: "Si el cariño es verdad, bésense; la conversación seria puede esperar a mañana." },
            reply: { A: "Se besan junto al canal. Tú te alejas despacio.", B: "Se besan junto al canal, con los ojos cerrados. Tú te alejas despacio, sin hacer ruido.", C: "Se besan junto al agua mientras tú te alejas de puntillas. La noche, por una vez, se porta bien." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "ayuda",
            say: { A: "Si necesitan ayuda, hay gente que ayuda. Hablen con alguien.", B: "Si necesitan ayuda, pidan: hay gente que ayuda a las parejas. No es una vergüenza.", C: "Pidan ayuda a un profesional: no es una vergüenza, es la forma más barata de no repetir esta noche." },
            reply: { A: "Los dos asienten. Karina te da las gracias. Mauro baja la cabeza.", B: "Los dos asienten. Karina te da las gracias con un apretón de manos. Mauro baja la cabeza, avergonzado.", C: "Los dos asienten en silencio. Karina te aprieta las manos y Mauro baja la cabeza, sin excusas." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "policia",
            say: { A: "Una promesa no basta. ¿Llamamos a alguien?", B: "Una promesa no siempre basta. ¿Quieres que llamemos a alguien de confianza?", C: "Las promesas no siempre bastan, Karina. ¿Hay alguien de confianza a quien podamos llamar ahora?" },
            reply: { A: "Karina llama a su hermano. Llega con una mirada seria. Mauro lo espera sin hablar.", B: "Karina llama a su hermano. Llega en diez minutos con cara seria. Mauro lo espera sin decir una palabra.", C: "Karina llama a su hermano y llega en diez minutos, serio. Mauro lo espera sin levantar la vista, sabiendo lo que le toca." },
            mood: "neutral", end: "separan",
          },
        ],
      },
    },
    ends: {
      separan: { text: { A: "Mauro y Karina se quedan en el banco. Hablan en voz baja. Tú te vas.", B: "Mauro y Karina se quedan en el banco, hablando en voz baja. Tú te vas con la sensación de que la noche pudo ser peor.", C: "Mauro y Karina se quedan en el banco, hablando por fin en voz baja. Te vas con la sensación incómoda de que la noche pudo ser mucho peor." }, change: "se-sienta", recap: "Separaste una discusión descontrolada junto al canal." },
      "ella-se-va": { text: { A: "Karina se va. Mauro se queda mirando el canal. No dice nada.", B: "Karina se va con el celular en la mano. Mauro se queda mirando el canal, sin decir nada, mucho rato.", C: "Karina se marcha con el celular recuperado. Mauro se queda mirando el canal, sin una palabra, hasta que el agua se lleva su enojo." }, change: "se-va", recap: "Ayudaste a Karina a irse y Mauro se quedó solo." },
      policia: { text: { A: "Llega la policía. Karina cuenta todo. Mauro se va con los agentes.", B: "Llega la policía. Karina cuenta todo con voz firme y Mauro se va con los agentes, cabizbajo.", C: "Llega la patrulla. Karina declara con voz firme y Mauro se va con los agentes, cabizbajo y sin una sola excusa." }, change: "policia", recap: "La policía se llevó a Mauro después de la discusión." },
      pelea: { text: { A: "Mauro te golpea. Rodáis por el suelo. Karina grita. Alguien llama a la policía.", B: "Mauro te golpea y ruedan por el suelo del paseo. Karina grita que paren. Alguien llama a la policía.", C: "Mauro te golpea y ruedan por el suelo junto al canal. Karina grita que paren y, a lo lejos, alguien marca el número de la policía." }, change: "pelea", recap: "La discusión terminó en una pelea junto al canal." },
      "cuchillo-calma": { text: { A: "Nadie sangra. Mauro guarda la navaja. Karina llora. Tú también.", B: "Nadie sangra. Mauro guarda la navaja y Karina llora contra su pecho. Tú guardas el cuchillo con la mano temblando.", C: "Nadie sangra, y es casi un milagro. Mauro guarda la navaja, Karina llora contra su pecho y tú guardas el cuchillo con la mano temblando." }, change: "abraza", recap: "Dos cuchillos en alto y nadie herido: Karina los detuvo." },
      "cuchillo-policia": { text: { A: "Llega la policía. Ven un cuchillo y una navaja. Todos terminan en la comisaría.", B: "Llega la policía y ve un cuchillo y una navaja. Todos terminan en la comisaría, cada uno con su versión.", C: "Llega la policía, cuenta un cuchillo y una navaja, y no distingue buenos de malos. Todos terminan en la comisaría, cada uno con su versión." }, change: "policia", recap: "Los dos cuchillos junto al canal terminaron con la policía." },
      "pistola-calma": { text: { A: "Mauro se va. Karina se queda, temblando. Tú guardas la pistola.", B: "Mauro se va con la cabeza baja. Karina se queda en el banco, temblando. Tú guardas la pistola con la mano fría.", C: "Mauro se va con la cabeza baja y Karina se queda temblando en el banco. Guardas la pistola, preguntándote qué has hecho." }, change: "se-va", recap: "La pistola paró la discusión, pero asustó a Karina también." },
      "pistola-huye": { text: { A: "Mauro huye por el puente. Karina te mira con miedo. «Gracias, pero guarda eso.»", B: "Mauro huye por el puente sin mirar atrás. Karina te mira con miedo: «Gracias, pero guarda eso, por favor.»", C: "Mauro huye por el puente sin mirar atrás. Karina te mira con más miedo que alivio: «Gracias. Y ahora, por favor, guarda eso.»" }, change: "huye", recap: "La pistola hizo huir a Mauro por el puente." },
      "pistola-policia": { text: { A: "La policía te apunta. Karina grita que la ayudaste. Levantas las manos.", B: "La policía te apunta y levantas las manos. Karina grita que la ayudaste, pero la pistola habla más fuerte.", C: "La policía te apunta y levantas las manos. Karina insiste en que la ayudaste, pero la pistola grita más que ella." }, change: "manos-arriba", recap: "La pistola junto al canal terminó con las manos arriba." },
      "granada-huye": { text: { A: "Todos corren. Tú también. Suenan sirenas y alguien grita: «¡Bomba!»", B: "Todos corren por el paseo, tú también. Suenan sirenas y alguien grita «¡Bomba!» desde el puente.", C: "El paseo entero corre, tú incluido. Suenan sirenas y alguien grita «¡Bomba!» desde el puente, con una dicción perfecta." }, change: "huye", recap: "La granada vació el paseo junto al canal." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el canal. Los tres levantan las manos. Karina ríe.", B: "Un helicóptero ilumina el canal y los tres levantan las manos. Karina, a pesar de todo, no puede dejar de reír.", C: "Un helicóptero ilumina el canal y los tres levantan las manos. Karina, absurdamente, no puede dejar de reír." }, change: "helicoptero", recap: "La granada trajo un helicóptero y una pareja reconciliada." },
      "granada-risa": { text: { A: "La pareja se va riendo. La granada falsa en tu bolsillo. Nadie sabe qué pasó.", B: "La pareja se aleja riendo, de la mano. La granada falsa vuelve a tu bolsillo y nadie sabe bien qué pasó.", C: "La pareja se aleja riendo, de la mano. La granada de juguete vuelve a tu bolsillo; la reconciliación ya forma parte de la leyenda del paseo." }, change: "sonrie", recap: "La granada falsa reconcilió a una pareja a punto de romperse." },
      "gas-cae": { text: { A: "Mauro grita en el suelo. Karina lo ayuda y te mira con odio. Llega la policía.", B: "Mauro grita en el suelo con los ojos cerrados. Karina corre a ayudarlo y te mira con odio. Llega la policía.", C: "Mauro aúlla en el suelo, ciego. Karina corre a socorrerlo y te mira con un odio nuevo. La policía llega a una escena que ya no tiene sentido." }, change: "cae", recap: "Rociaste a Mauro y Karina se puso de su lado." },
      "gas-calma": { text: { A: "Mauro se va. Tú acompañas a Karina hasta su casa. Guardas el gas.", B: "Mauro se va por el puente. Acompañas a Karina hasta la puerta de su casa. Guardas el gas pimienta.", C: "Mauro se pierde por el puente. Acompañas a Karina hasta su puerta, en silencio. Guardas el gas: hoy le bastó con asomar." }, change: "se-va", recap: "El gas pimienta sin usar bastó para detener la discusión." },
      "gas-policia": { text: { A: "La policía escucha tres versiones. Ven tu gas. Mauro se va con ellos.", B: "La policía escucha tres versiones y ve tu gas pimienta. Mauro se va con los agentes; Karina y tú, a declarar.", C: "La policía escucha tres versiones, repara en tu gas y decide. Mauro se va con los agentes; Karina y tú, a declarar a la comisaría." }, change: "policia", recap: "El gas pimienta y la policía cerraron la noche de Mauro." },
      "lapiz-ayuda": { text: { A: "Karina guarda el papel con el número de ayuda. Mañana llama. Tú sigues tu camino.", B: "Karina guarda el papel con el número de ayuda en el bolso. Mañana llama. Tú sigues tu camino, con el lápiz en el bolsillo.", C: "Karina guarda el papel con el número de ayuda en el bolso: mañana, a primera hora, llama. Sigues tu camino con el lápiz en el bolsillo." }, change: "luz", recap: "Tu lápiz dejó a Karina un número de ayuda para mañana." },
      "lapiz-rompe": { text: { A: "El papel roto en el suelo. Mauro se va. Karina se queda sin número. Tu lápiz no sirvió.", B: "El papel queda roto en el suelo. Mauro se va furioso y Karina se queda sin número y sin respuestas. Tu lápiz no sirvió de mucho.", C: "El papel queda hecho trizas en el suelo. Mauro se va furioso; Karina se queda sin número y sin respuestas. Tu lápiz hoy no alcanzó." }, change: "enojado", recap: "Mauro rompió el papel que escribiste." },
      "libro-ella-se-va": { text: { A: "Karina se va con tu libro. Mauro mira el canal. Nadie pelea más.", B: "Karina se va con tu libro bajo el brazo. Mauro se queda mirando el canal. Ya nadie pelea.", C: "Karina se va con tu libro bajo el brazo y Mauro se queda mirando el canal. Nadie pelea más: se acabó la función." }, change: "se-va", recap: "Tu libro sirvió de excusa para separar a la pareja." },
      "libro-separa": { text: { A: "Los dos se quedan en el banco. Se ríen un poco. Tu libro vuelve a tu bolso.", B: "Los dos se quedan en el banco, hablando bajo y riéndose de vez en cuando. Tu libro vuelve a tu bolso.", C: "Los dos se quedan en el banco, hablando bajo y riéndose a ratos. Tu libro vuelve al bolso, con un nuevo capítulo que nadie escribió." }, change: "sonrie", recap: "Tu libro paró una pelea con una pregunta sobre una calle." },
      "corazon-abrazo": { text: { A: "Karina y Mauro se abrazan. Tú te alejas. El canal brilla.", B: "Karina y Mauro se abrazan junto al canal. Tú te alejas y el agua brilla bajo las farolas.", C: "Karina y Mauro se abrazan junto al canal. Te alejas despacio, con el agua brillando bajo las farolas como si lo aprobara." }, change: "abraza", recap: "El corazón convirtió la pelea en un abrazo junto al canal." },
      "corazon-beso": { text: { A: "Karina y Mauro se besan. Un grupo del paseo aplaude. Tú sonríes y sigues.", B: "Karina y Mauro se besan junto al canal. Un grupo del paseo aplaude sin saber qué pasó. Tú sonríes y sigues tu camino.", C: "Karina y Mauro se besan junto al canal y un grupo del paseo aplaude sin conocer el primer acto. Sonríes y sigues tu camino." }, change: "beso", recap: "Después de la pelea, la pareja se reconcilió con un beso." },
    },
    speak: {
      A1: "¿Te gusta pasear junto a un canal o un río?",
      A2: "¿Qué haces cuando dos amigos se pelean?",
      B1: "¿Cómo reaccionas cuando alguien grita cerca de ti en la calle?",
      B2: "¿Cuándo crees que es correcto meterse en la discusión de otros?",
      C1: "¿Qué responsabilidad tiene un testigo ante la violencia entre dos personas que se quieren?",
      C2: "¿Por qué resulta tan difícil nombrar la violencia en las relaciones cuando hay cariño de por medio?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces si dos personas tienen cuchillos?", B: "¿Cuál es la peor forma de resolver una discusión, según tú?", C: "¿Por qué una escalada de violencia parece siempre más fácil que retroceder?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué sientes cuando alguien llora delante de ti?", B: "¿Has hecho llorar a alguien sin querer, y cómo lo arreglaste?", C: "¿Qué distingue la protección de la intimidación cuando el que protege va armado?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Haces reír a la gente cuando hay tensión?", B: "¿Qué broma salvó alguna vez una situación tensa para ti?", C: "¿Por qué un enemigo común reconcilia a veces mejor que cualquier argumento?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Te sientes seguro en tu barrio de noche?", B: "¿Qué harías si una amiga te dijera que tiene miedo de su pareja?", C: "¿Dónde pondrías el límite entre proteger a alguien y decidir por ella?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes tu agenda en papel?", B: "¿Conoces algún teléfono de ayuda en tu ciudad y sabrías dónde encontrarlo?", C: "¿Qué recursos debería conocer cualquier persona antes de necesitarlos?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Te pierdes en las calles de tu ciudad?", B: "¿Has usado alguna vez una excusa tonta para interrumpir algo incómodo?", C: "¿Por qué una pregunta absurda desarma a veces más que una orden seria?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Lloras delante de otras personas?", B: "¿Cuándo pediste perdón de verdad por última vez?", C: "¿Qué hace falta para que una disculpa sea más que una palabra?" } },
    },
  },

  // ───────────────────────────── ESCENA 6 · COSTA ─────────────────────────────
  {
    id: "costa-canal",
    kind: "escena",
    district: "costa",
    title: "Alguien cayó al canal",
    verb: "RESCATAR",
    goal: "Pedir ayuda con urgencia, dar instrucciones claras, llamar a emergencias con una dirección precisa y tranquilizar a alguien en peligro.",
    cast: [
      {
        id: "irene", name: "Irene", role: "Pide ayuda a gritos en la orilla",
        age: "adult", body: "f", build: "average", height: 1.64,
        hair: "ponytail", hairColor: "#3b2418", skin: "#e0b089",
        top: "hoodie", topColor: "#5b4a8a", bottom: "jeans", bottomColor: "#2c3a55",
        extras: [], pose: "scream", props: [],
      },
      {
        id: "tomas", name: "Tobías", role: "Cayó al canal y se agarra del borde",
        age: "adult", body: "m", build: "average", height: 1.75,
        hair: "short", hairColor: "#1c140e", skin: "#c99064",
        top: "shirt", topColor: "#6a7f8f", bottom: "pants", bottomColor: "#26303a",
        extras: ["blood-head"], pose: "ground", props: [],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "irene", mood: "terror",
        line: {
          A: "Una mujer grita junto al canal: «¡Se cayó! ¡Mi amigo se cayó al agua! ¡Ayuda!» Un hombre se agarra del borde con una mano. Sangra de la frente.",
          B: "Una mujer grita al borde del canal: «¡Se resbaló y se cayó al agua! ¡Ayuda, por favor!» Un hombre se agarra del borde con una mano; le sangra la frente y el agua está helada.",
          C: "Una mujer grita al borde del canal: «¡Se resbaló y cayó! ¡Alguien, por favor!» Un hombre cuelga del borde con una sola mano, la frente abierta y el agua negra tirando de él.",
        },
        options: [
          {
            id: "mano",
            say: { A: "¡Dame la mano! ¡Yo te saco!", B: "¡Dame la mano, yo te saco! ¡Aguanta!", C: "¡Dame la mano y no te sueltes! ¡Yo te saco, mírame!" },
            reply: { A: "Tobías intenta soltar el borde. Te mira con miedo. «Estoy muy cansado.»", B: "Tobías intenta alcanzar tu mano, pero resbala. «No puedo… estoy congelado, estoy muy cansado.»", C: "Tobías estira la mano libre y falla por poco. «No puedo, no siento los dedos, estoy muy cansado.»" },
            mood: "pain", next: "orilla",
          },
          {
            id: "llamar",
            say: { A: "Irene, ¿verdad? ¿Dónde estamos? Llamo a emergencias.", B: "Llamo a emergencias ahora. ¿Cómo se llama? ¿Y dónde exactamente estamos?", C: "Llamo a emergencias en este instante. Necesito su nombre y una referencia exacta del lugar." },
            reply: { A: "«Irene. Junto al canal, cerca del café. Tobías se llama.» Llora.", B: "«Me llamo Irene y él es Tobías. Estamos en el paseo del canal, cerca del café, al norte del puente.» Llora sin parar.", C: "«Irene; él es Tobías. Paseo del canal, a cien metros al norte del puente, junto al café.» Llora, pero la dirección sale perfecta." },
            mood: "worried", next: "irene",
          },
          {
            id: "cuerda",
            say: { A: "¿Hay una cuerda o un salvavidas? ¡Búscalo!", B: "¿Hay una cuerda, un salvavidas, algo? ¡Búscalo ya!", C: "¿Una cuerda, un salvavidas, un palo largo? ¡Lo que sea, rápido!" },
            reply: { A: "Irene corre al café. Vuelve con una cuerda gruesa. «¡Es lo que hay!»", B: "Irene corre al café y vuelve con una cuerda gruesa de amarre. «¡Esto es todo lo que había!»", C: "Irene sale disparada hacia el café y vuelve con una cuerda de amarre mojada. «¡Es todo lo que encontré!»" },
            mood: "worried", next: "orilla",
          },
        ],
      },
      orilla: {
        who: "tomas", mood: "pain",
        line: {
          A: "Tobías tiembla. «Me duele la cabeza. No siento las piernas. No puedo más.» Sus dedos resbalan.",
          B: "Tobías tiembla, con los labios morados. «Me duele la cabeza, no siento las piernas… no aguanto más.» Los dedos le resbalan del borde.",
          C: "Tobías tiembla, con los labios morados. «La cabeza me estalla y las piernas ya no son mías. No aguanto más.» Los dedos le resbalan, centímetro a centímetro.",
        },
        options: [
          {
            id: "tirar",
            say: { A: "Agárrate a la cuerda. En tres, yo tiro. Uno, dos, tres.", B: "Agárrate a la cuerda con las dos manos. En tres tiro: uno, dos, tres.", C: "Agárrate a la cuerda con las dos manos. A la una, a las dos y a las tres, yo tiro; tú solo no sueltes." },
            reply: { A: "Tiras con todas tus fuerzas. Tobías sube hasta el borde. Irene lo agarra del cinturón.", B: "Tiras con todas tus fuerzas y Tobías sube centímetro a centímetro. Irene lo agarra del cinturón y lo arrastra hasta el suelo.", C: "Tiras hasta que te arden las manos. Tobías sube, centímetro a centímetro, e Irene lo agarra del cinturón y lo arrastra sobre las piedras." },
            mood: "worried", end: "salvado",
          },
          {
            id: "hablar",
            say: { A: "No cierres los ojos. Háblame. ¿Cuántos años tienes?", B: "No cierres los ojos, Tobías. Háblame: ¿cuántos años tienes, qué cenaste?", C: "Mírame, Tobías, no cierres los ojos. Cuéntame cualquier cosa: tu edad, tu cena, tu peor jefe." },
            reply: { A: "«Treinta y dos… Pollo.» Se ríe un poco. Aguanta.", B: "«Treinta y dos… Pollo con arroz.» Se ríe un poco, tosiendo. Aguanta unos segundos más.", C: "«Treinta y dos… y mi jefe, Valdés, es lo peor.» Se ríe, tosiendo agua, y sus dedos vuelven a agarrar con fuerza." },
            mood: "pain", next: "irene",
          },
          {
            id: "esperar",
            say: { A: "Aguanta. Ya vienen. No te muevas.", B: "Aguanta un poco. La ambulancia ya viene. No te muevas.", C: "Aguanta, que ya vienen. Lo único que tienes que hacer es no soltarte." },
            reply: { A: "Tobías intenta aguantar. Pero resbala. Cae al agua con un golpe.", B: "Tobías intenta aguantar, pero el borde está mojado. Resbala y cae al agua de golpe, salpicando todo.", C: "Tobías hace lo posible, pero el borde es de piedra mojada. Resbala y se hunde con un golpe seco que te hiela." },
            mood: "terror", end: "resbala",
          },
        ],
      },
      irene: {
        who: "irene", mood: "terror",
        line: {
          A: "Irene llora y tiembla. «¡No sé nadar! ¡Se va a morir! ¿Qué hago?» Tobías sigue colgado.",
          B: "Irene llora y se aprieta las manos. «¡No sé nadar y se va a morir! ¿Qué hago? ¡Dime qué hago!» Tobías sigue colgado del borde.",
          C: "Irene se aprieta las manos, entre sollozos. «¡No sé nadar y se va a morir! ¡Dime qué hago, por favor!» Tobías sigue colgado, perdiendo fuerza.",
        },
        options: [
          {
            id: "ambulancia",
            say: { A: "Llama a la ambulancia. Dices: canal, cerca del café.", B: "Llama a una ambulancia ahora. Di: paseo del canal, junto al café, una persona en el agua.", C: "Llama a una ambulancia y repite esto: paseo del canal, junto al café, una persona en el agua, herida en la cabeza." },
            reply: { A: "Irene marca. «¡Ambulancia! ¡Canal! ¡Rápido!» Los vecinos se acercan.", B: "Irene marca con manos temblorosas. «¡Ambulancia, rápido, en el canal, junto al café!» Varios paseantes se acercan corriendo.", C: "Irene marca y repite tus frases como un papagayo asustado. «¡Paseo del canal, junto al café, herido en la cabeza!» Varios paseantes corren hacia ustedes." },
            mood: "worried", end: "llamada",
          },
          {
            id: "sujetar",
            say: { A: "Sujétame los pies. Yo me acerco más.", B: "Sujétame de los pies, Irene. Yo me acerco más al borde y lo agarro.", C: "Agárrame de los pies con las dos manos, Irene. Yo me asomo más y lo atrapo; no me sueltes pase lo que pase." },
            reply: { A: "Irene te agarra. Tú estiras el brazo. Tobías te toma la muñeca.", B: "Irene te sujeta los tobillos con todas sus fuerzas. Estiras el brazo hasta que Tobías te toma la muñeca.", C: "Irene te sujeta los tobillos como si fueran una cuerda. Estiras el brazo hasta lo imposible y Tobías te toma la muñeca con la mano libre." },
            mood: "worried", end: "salvado",
          },
          {
            id: "gritar",
            say: { A: "¡Ayuda! ¡Hay alguien en el agua! ¡Aquí!", B: "¡Ayuda! ¡Hay una persona en el agua! ¡Vengan todos!", C: "¡Ayuda! ¡Una persona en el agua! ¡Todos los que puedan, aquí, ahora!" },
            reply: { A: "Cuatro personas llegan corriendo. Entre todos tiran de Tobías.", B: "Cuatro personas llegan corriendo del paseo. Entre todos tiran de Tobías hasta sacarlo.", C: "Cuatro personas llegan corriendo del paseo y se forma una cadena humana. Entre todos sacan a Tobías del agua." },
            mood: "worried", end: "salvado",
          },
        ],
      },

      // ── cuchillo: la cuerda de amarre le atrapó la pierna.
      "cuchillo-inicio": {
        who: "irene", mood: "terror",
        line: {
          A: "Sacas el cuchillo porque la cuerda de un bote enreda la pierna de Tobías en el agua. Irene grita: «¡No lo toques! ¿Qué haces con eso?»",
          B: "Sacas el cuchillo porque una cuerda de amarre se ha enredado en la pierna de Tobías y lo arrastra hacia abajo. Irene grita: «¡No lo toques! ¿Qué haces con un cuchillo?»",
          C: "Sacas el cuchillo porque una cuerda de amarre le ha apresado la pierna a Tobías bajo el agua. Irene grita: «¡Aléjate! ¿Qué pretendes hacer con un cuchillo?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "La cuerda lo hunde. Debo cortarla. ¡Confía!", B: "La cuerda le atrapa la pierna y lo hunde. Tengo que cortarla. ¡Confía en mí!", C: "La cuerda le atrapa la pierna y lo hunde. O la corto o se ahoga. ¡Confía en mí, Irene!" },
            reply: { A: "Irene mira la cuerda. «¡Corta! ¡Corta rápido!» Tobías grita desde el agua.", B: "Irene mira la cuerda tensa y se tapa la boca. «¡Corta, corta, rápido!» Tobías grita desde el agua.", C: "Irene mira la cuerda y lo entiende de golpe. «¡Corta! ¡Corta ya!» Tobías aúlla desde el agua, hundido hasta el pecho." },
            mood: "terror", next: "cuchillo-cuerda",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Entonces, ayúdame a tirar.", B: "Perdona, tienes razón. Lo guardo. Ayúdame a tirar de él.", C: "Perdona, el cuchillo asusta. Lo guardo y tiramos juntos, aunque no sé si hay tiempo." },
            reply: { A: "Tiran juntos. La cuerda no cede. Tobías se hunde un poco más.", B: "Tiran juntos con todas sus fuerzas. La cuerda del bote no cede y Tobías se hunde otro poco.", C: "Tiran juntos hasta quedarse sin aliento. La cuerda no cede y Tobías se hunde un poco más; el tiempo corre en contra." },
            mood: "pain", next: "orilla",
          },
          {
            id: "apartar",
            say: { A: "¡Apártate! ¡No hay tiempo!", B: "¡Apártate, Irene! ¡No hay tiempo que perder!", C: "¡Apártate de mi camino! ¡Cada segundo es una persona menos!" },
            reply: { A: "Irene grita aún más fuerte. Un paseante ve el cuchillo y llama a la policía.", B: "Irene grita aún más fuerte. Un paseante ve el cuchillo y, sin entender nada, llama a la policía.", C: "Irene se pone a gritar «¡Socorro!». Un paseante ve el cuchillo, no ve la cuerda y llama a la policía." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-cuerda": {
        who: "tomas", mood: "terror",
        line: {
          A: "Tobías tira de la pierna. «¡No siento el pie! ¡Corta! ¡Pero no me cortes a mí!» Irene sujeta la cuerda con las dos manos.",
          B: "Tobías patalea, con la voz rota. «¡No siento el pie! ¡Corta la cuerda, pero no me cortes a mí!» Irene sujeta la cuerda con las dos manos.",
          C: "Tobías se agita en el agua. «¡Corta la cuerda, pero por favor, ni un milímetro de mi pierna!» Irene sostiene la cuerda tensa con las dos manos, blanca como el papel.",
        },
        options: [
          {
            id: "cortar",
            say: { A: "Quieto. Un corte. Irene, tira ahora.", B: "Quédate quieto. Un solo corte. Irene, tira cuando te diga.", C: "Quieto, Tobías. Un corte limpio y listo. Irene, tira cuando yo lo diga y no antes." },
            reply: { A: "Cortas. La cuerda salta. Tobías sube. Irene lo agarra. Todos caen al suelo.", B: "Cortas la cuerda de un tajo. Tobías sube de golpe e Irene lo agarra. Los tres caen al suelo del paseo, mojados y vivos.", C: "Cortas la cuerda de un tajo limpio. Tobías emerge como un corcho e Irene lo agarra; los tres caen sobre las piedras, mojados y vivos." },
            mood: "worried", end: "cuchillo-libre",
          },
          {
            id: "prisa",
            say: { A: "¡Rápido! ¡Corto!", B: "¡Corto ya! ¡No hay tiempo para más!", C: "¡Corto ahora mismo, aunque tiemble! ¡Se acabó el tiempo!" },
            reply: { A: "Cortas rápido. La mano resbala. Te cortas el brazo. Sangre en el borde.", B: "Cortas con prisa y la mano resbala sobre la piedra mojada. Te abres el antebrazo. La sangre gotea en el borde del canal.", C: "Cortas con prisa y la mano resbala. Te abres el antebrazo y la sangre mancha las piedras, pero la cuerda cede y Tobías sube." },
            mood: "pain", end: "cuchillo-herida",
          },
          {
            id: "irene",
            say: { A: "Irene, corta tú. Yo sujeto.", B: "Irene, corta tú la cuerda. Yo lo sujeto con las dos manos.", C: "Irene, el cuchillo es tuyo ahora. Corta tú; yo lo sujeto con todo el cuerpo." },
            reply: { A: "Irene corta. Gritando. Tobías sube. Los tres lloran en el suelo.", B: "Irene corta con los ojos cerrados, gritando. La cuerda cede, sacas a Tobías y los tres lloran en el suelo del paseo.", C: "Irene corta con los ojos cerrados, gritando como una guerrera. La cuerda cede, sacas a Tobías y los tres terminan llorando en el suelo." },
            mood: "worried", end: "cuchillo-libre",
          },
        ],
      },

      // ── pistola: Irene te obedece y sujeta a Tobías.
      "pistola-inicio": {
        who: "irene", mood: "terror",
        line: {
          A: "Te agachas y se ve tu pistola. Irene levanta las manos. «¡Por favor! ¡Sálvalo, haré lo que digas!» Tobías sigue colgado.",
          B: "Te agachas al borde y tu pistola asoma de la chaqueta. Irene levanta las manos, temblando. «¡Por favor, sálvalo! ¡Haré lo que digas, lo que quieras!» Tobías sigue colgado.",
          C: "Al agacharte, la pistola queda a la vista. Irene levanta las manos, entre el pánico y la súplica. «¡Sálvalo, por favor, y haré lo que digas!» Tobías cuelga del borde, sin aliento.",
        },
        options: [
          {
            id: "ordenar",
            say: { A: "Baja las manos. Agarra su otra mano. ¡Ahora!", B: "Baja las manos y agarra su otra mano. ¡No lo sueltes pase lo que pase!", C: "Baja las manos y agárralo con las dos. No lo sueltes pase lo que pase; es una orden." },
            reply: { A: "Irene obedece. Agarra la mano de Tobías. «¡Lo tengo! ¡Lo tengo!»", B: "Irene obedece al instante, se tira al suelo y agarra la mano de Tobías. «¡Lo tengo, lo tengo!»", C: "Irene obedece como un reloj, se arroja al suelo y agarra la mano de Tobías con las dos suyas. «¡Lo tengo, no lo suelto!»" },
            mood: "scared", next: "pistola-juntos",
          },
          {
            id: "guardar",
            say: { A: "No es para ustedes. La guardo. Ayuda.", B: "Esto no es para ustedes, la guardo. Ayúdame a sacarlo.", C: "Esto no tiene nada que ver con ustedes. La guardo y nos ponemos a sacarlo, ya." },
            reply: { A: "Irene respira. Tira con tu ayuda. Tobías empieza a subir.", B: "Irene respira aliviada y tira contigo. Tobías empieza a subir poco a poco, resoplando.", C: "Irene suelta el aire que no sabía que contenía y tira contigo. Tobías sube, poco a poco, con los dientes apretados." },
            mood: "worried", end: "pistola-salvado",
          },
          {
            id: "disparar",
            say: { A: "¡Ayuda! ¡Disparo al aire si hace falta!", B: "¡Ayuda! ¡Si nadie viene, disparo al aire!", C: "¡Alguien que venga! ¡Si nadie reacciona, disparo al aire para que se enteren!" },
            reply: { A: "Disparas al cielo. Todo el paseo grita. Llega una patrulla en segundos.", B: "Disparas al cielo. El paseo entero grita y corre. Una patrulla llega en segundos, con las luces encendidas.", C: "Disparas al cielo. El paseo se llena de gritos y una patrulla que pasaba por el puente da la vuelta con las luces a tope." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-juntos": {
        who: "tomas", mood: "scared",
        line: {
          A: "Tobías ve la pistola en tu cintura. «¿Eres policía? ¿O ladrón? ¡No me sueltes, por favor!» Irene llora y tira.",
          B: "Tobías ve la pistola en tu cintura y abre los ojos. «¿Eres policía o ladrón? ¡Da igual, no me sueltes!» Irene llora y tira con todas sus fuerzas.",
          C: "Tobías ve la pistola en tu cintura entre jadeos. «¿Policía o ladrón? ¡Me da lo mismo, pero no me sueltes!» Irene llora y tira con las dos manos.",
        },
        options: [
          {
            id: "tirar",
            say: { A: "Ni uno ni otro. Soy un testigo. Agárrate.", B: "Ni lo uno ni lo otro. Soy alguien que pasaba. Agárrate fuerte.", C: "Ni policía ni ladrón: alguien que pasaba. Agárrate fuerte, y las preguntas, después." },
            reply: { A: "Tiran los tres. Tobías sube. Cae sobre el paseo tosiendo agua.", B: "Tiran los tres a la vez. Tobías sube sobre el borde y cae al paseo tosiendo agua. Irene llora encima de él.", C: "Tiran los tres a la vez y Tobías emerge sobre el borde. Cae al paseo tosiendo agua mientras Irene llora y se ríe encima de él." },
            mood: "worried", end: "pistola-salvado",
          },
          {
            id: "policia",
            say: { A: "Llamo a la policía. Aguanten.", B: "Llamo a la policía y a la ambulancia. Aguanten.", C: "Llamo a la policía y a la ambulancia, en ese orden o en el contrario. Aguanten." },
            reply: { A: "Una patrulla llega pronto. Ven la pistola y gritan: «¡Quieto!»", B: "Una patrulla llega pronto. Los agentes ven la pistola antes que a Tobías y gritan: «¡Quieto! ¡Manos arriba!»", C: "La patrulla llega pronto. Los agentes ven la pistola antes que a las víctimas y gritan: «¡Quieto! ¡Manos donde las veamos!»" },
            mood: "terror", end: "pistola-policia",
          },
          {
            id: "dejar",
            say: { A: "La dejo aquí, en el suelo. Ya tiran ustedes.", B: "Dejo la pistola aquí, en el suelo, para tener las manos libres.", C: "Dejo la pistola en el suelo, lejos de todos, y uso las dos manos. Hoy hace más falta un brazo que un arma." },
            reply: { A: "Dejas la pistola. Tiran los tres. Tobías sale del agua.", B: "Dejas la pistola en el suelo y tiran los tres. Tobías sale del agua y se desploma sobre las piedras.", C: "Dejas la pistola a un lado y tiran los tres con las manos libres. Tobías sale del agua y se desploma sobre las piedras, vivo." },
            mood: "worried", end: "pistola-salvado",
          },
        ],
      },

      // ── granada: el paseo se vacía y los bomberos llegan.
      "granada-inicio": {
        who: "irene", mood: "terror",
        line: {
          A: "Buscas la cuerda y sacas la granada por error. Irene grita: «¡Una granada! ¡Todos fuera!» El paseo corre. Tobías grita: «¡No me dejen aquí!»",
          B: "Buscas una cuerda en la chaqueta y lo que sacas es la granada. Irene grita: «¡Una granada! ¡Todos fuera!» El paseo entero corre. Tobías, colgado, grita: «¡No me dejen aquí!»",
          C: "Buscas una cuerda en la chaqueta y sacas, por desgracia, la granada. Irene chilla «¡Granada! ¡Evacuen!» y el paseo se vacía en diez segundos. Tobías, colgado, aúlla: «¡Pero a mí no me dejen!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Es falsa. Irene, vuelve. ¡Ayuda!", B: "Es falsa, Irene. Vuelve, que lo necesitamos. ¡Ayuda!", C: "Es de juguete, Irene. Vuelve; con el susto, nadie se acordó de que hay un hombre colgando." },
            reply: { A: "Irene frena. Mira la granada. «¿Falsa?» Tobías: «¡Me da igual! ¡Tiren!»", B: "Irene frena a diez metros y mira la granada. «¿Falsa?» Tobías, desde el borde: «¡Me da igual, tiren de una vez!»", C: "Irene frena a diez metros y desconfía. «¿De juguete?» Tobías, desde el borde: «¡Me importa un pimiento, tiren!»" },
            mood: "surprised", next: "granada-tomas",
          },
          {
            id: "tirar",
            say: { A: "¡La tiro lejos! ¡Corran!", B: "¡La tiro al otro lado! ¡Corran todos!", C: "¡La lanzo al otro lado del canal! ¡Que corra quien quiera!" },
            reply: { A: "Lanzas la granada. Todos gritan. Alguien llama a la policía.", B: "Lanzas la granada falsa al otro lado del canal. Todos gritan y corren. Alguien llama a la policía a voces.", C: "Lanzas la granada de juguete al otro lado del canal. El paseo se convierte en estampida y alguien llama a la policía a voces." },
            mood: "terror", end: "granada-huye",
          },
          {
            id: "tomas",
            say: { A: "Tobías, aguanta. Ya vienen los bomberos.", B: "Tobías, aguanta, ya vienen los bomberos. Todo el paseo los llamó.", C: "Tobías, aguanta: gracias a mi granada, medio cuerpo de bomberos ya viene hacia aquí." },
            reply: { A: "Se oyen sirenas. Un helicóptero llega. Tobías mira al cielo, increíble.", B: "Se oyen sirenas por todas partes. Un helicóptero aparece sobre el canal. Tobías mira al cielo, incrédulo.", C: "Suenan sirenas desde todas partes y un helicóptero se planta sobre el canal. Tobías mira al cielo y suelta una carcajada de pura incredulidad." },
            mood: "surprised", end: "granada-helicoptero",
          },
        ],
      },
      "granada-tomas": {
        who: "tomas", mood: "furious",
        line: {
          A: "Tobías grita desde el borde. «¡Cuando salga, me explicas lo de la granada! ¡Pero tira de mí ahora!» Irene regresa despacio.",
          B: "Tobías grita desde el borde, furioso y azul de frío. «¡Cuando salga, me explicas lo de la granada! ¡Pero ahora tira de mí!» Irene regresa despacio.",
          C: "Tobías grita desde el borde, furioso y morado de frío. «¡Cuando salga, me explicas esa granada con todo detalle! ¡Pero ahora tira de mí!» Irene regresa, a pasos cortos.",
        },
        options: [
          {
            id: "tirar",
            say: { A: "Perdón. Tiramos los dos. A la una, a las dos, a las tres.", B: "Perdón por el susto. Tiramos los dos: a la una, a las dos, a las tres.", C: "Te debo una explicación y una disculpa. Ahora tiramos los dos: a la una, a las dos y a las tres." },
            reply: { A: "Tiran juntos. Tobías sale del agua. Se oyen sirenas y un helicóptero.", B: "Tiran juntos y Tobías sale del agua. Justo entonces se oyen sirenas y un helicóptero ilumina el canal.", C: "Tiran juntos y Tobías emerge del canal. En ese preciso instante suenan las sirenas y un helicóptero los baña de luz." },
            mood: "worried", end: "granada-rescate",
          },
          {
            id: "broma",
            say: { A: "Es un llavero. Qué susto, ¿no?", B: "Es solo un llavero, Tobías. ¿Qué susto, no?", C: "Es un llavero con ínfulas, Tobías. Si sales, te lo regalo de recuerdo." },
            reply: { A: "Tobías grita. Irene también. Casi lo sueltas. Alguien llama a la policía.", B: "Tobías grita y a Irene se le escapa un grito más. Casi lo sueltas. Alguien del paseo ya está llamando a la policía.", C: "Tobías aúlla con toda la rabia que le queda e Irene casi lo suelta. Alguien del paseo ya marca el número de la policía." },
            mood: "furious", end: "granada-helicoptero",
          },
          {
            id: "bomberos",
            say: { A: "Esperamos a los bomberos. Aguanta.", B: "Mejor esperamos a los bomberos, que traen equipo. Aguanta.", C: "Esperamos a los bomberos, que traen equipo de verdad. Aguanta un poco más, Tobías." },
            reply: { A: "Tobías se resbala. Cae al agua. Gritos. Los bomberos llegan justo.", B: "Tobías se resbala y cae al agua. Gritos. Los bomberos llegan justo a tiempo y lo sacan con un gancho.", C: "A Tobías se le escapan los dedos y cae al canal. Gritos de todo el paseo. Los bomberos llegan por los pelos y lo pescan con un gancho." },
            mood: "terror", end: "granada-rescate",
          },
        ],
      },

      // ── gas: Irene te acusa de haberlo empujado.
      "gas-inicio": {
        who: "irene", mood: "terror",
        line: {
          A: "Irene te señala. «¡Tú lo empujaste!» Sacas el gas pimienta por reflejo. Ella retrocede. «¡No me rocíes! ¡Fuiste tú!»",
          B: "Irene te señala con el dedo temblando. «¡Tú lo empujaste, lo vi!» Sacas el gas pimienta por reflejo y ella retrocede. «¡No me rocíes! ¡Fuiste tú!»",
          C: "Irene te señala, descompuesta. «¡Tú lo empujaste, te vi!» Sacas el gas pimienta por puro reflejo y ella retrocede, aterrada. «¡No me rocíes! ¡Fuiste tú, asesino!»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Yo no lo empujé. Acabo de llegar. ¡Ayúdame a sacarlo!", B: "Yo no lo empujé, acabo de llegar. ¡Ayúdame a sacarlo y después me acusas!", C: "No lo empujé: llegué hace treinta segundos. Ayúdame a sacarlo y después me acusas con todos los detalles." },
            reply: { A: "Irene duda. Mira a Tobías. Tobías grita: «¡No fue él! ¡Me resbalé!»", B: "Irene duda y mira a Tobías. Él, desde el borde, grita con la voz rota: «¡No fue él, me resbalé yo solo!»", C: "Irene duda un segundo. Tobías, desde el borde, lo resuelve con un hilo de voz: «No fue él, Irene… me resbalé yo solo, como un idiota.»" },
            mood: "worried", next: "gas-irene",
          },
          {
            id: "guardar",
            say: { A: "Está bien, lo guardo. Pero ayúdame ya.", B: "Está bien, lo guardo. Pero ayúdame ya, que se hunde.", C: "Lo guardo, ves. Pero discutimos después; ahora hay un hombre que se hunde." },
            reply: { A: "Irene asiente con las manos temblando. Ambos agarran a Tobías.", B: "Irene asiente con las manos temblando y los dos agarran a Tobías de la ropa. Empiezan a tirar.", C: "Irene asiente, sin dejar de temblar, y los dos agarran a Tobías de la camisa. Empiezan a tirar con todas sus fuerzas." },
            mood: "worried", end: "gas-salvado",
          },
          {
            id: "rociar",
            say: { A: "¡Cállate y atrás!", B: "¡Cállate y échate atrás, no tengo tiempo para esto!", C: "¡Cállate y atrás! ¡Tu teoría la escucho cuando él esté fuera!" },
            reply: { A: "Rocías a Irene. Cae al suelo tosiendo. Tobías grita solo.", B: "Rocías a Irene en la cara. Cae al suelo tosiendo, sin ver. Tobías, colgado, grita sin ayuda.", C: "Rocías a Irene sin pensarlo. Cae de rodillas tosiendo, ciega. Tobías, colgado del borde, se queda sin nadie." },
            mood: "furious", end: "gas-cae",
          },
        ],
      },
      "gas-irene": {
        who: "irene", mood: "worried",
        line: {
          A: "Irene se seca la cara. «Perdón. Pensé que… Estaba muy asustada.» Tobías: «¡Pueden pedir perdón después!»",
          B: "Irene se seca la cara con la manga. «Perdón, perdón. Estaba tan asustada que pensé cualquier cosa.» Tobías: «¡Perdónense después, por favor!»",
          C: "Irene se seca la cara. «Perdóname: el miedo me hizo ver culpables donde no había.» Tobías, desde el borde: «¡Los perdones, mejor después!»",
        },
        options: [
          {
            id: "salvar",
            say: { A: "Tranquila. Agárralo de un brazo. Yo del otro.", B: "Tranquila, no pasa nada. Agárralo de un brazo y yo del otro.", C: "Sin rencor, Irene. Agárralo de un brazo, yo del otro, y a la una, a las dos, a las tres." },
            reply: { A: "Tiran los dos. Tobías sale del agua. Los tres caen al suelo. Se ríen.", B: "Tiran los dos a la vez y Tobías sale del agua. Los tres caen sobre el paseo, empapados, y empiezan a reírse como locos.", C: "Tiran a la vez y Tobías emerge del agua. Los tres ruedan por el paseo, empapados, riendo con esa risa que viene después del miedo." },
            mood: "smile", end: "gas-salvado",
          },
          {
            id: "policia",
            say: { A: "Llama a la policía y a la ambulancia. Yo lo sujeto.", B: "Llama a la ambulancia y a la policía. Yo lo sujeto mientras tanto.", C: "Llama a la ambulancia y, ya que estás, a la policía: la versión completa conviene que conste. Yo lo sujeto." },
            reply: { A: "Irene llama. Llegan las dos. La policía ve tu gas. Pregunta mucho.", B: "Irene llama a las dos. Llegan a la vez; la policía ve tu gas pimienta y pregunta mucho antes de dejarte ir.", C: "Irene llama a las dos y ambas llegan a la vez. La policía repara en tu gas pimienta y hace una larga ronda de preguntas." },
            mood: "worried", end: "gas-policia",
          },
          {
            id: "gas",
            say: { A: "Tengo gas. Es normal llevarlo de noche.", B: "Llevo el gas porque es normal llevarlo de noche en esta ciudad.", C: "Llevo el gas porque, de noche, en esta ciudad, es sensato llevarlo. Hoy casi me delata." },
            reply: { A: "Tobías se ríe. «Hoy te salva.» Irene sonríe. Los dos tiran.", B: "Tobías se ríe a pesar de todo. «Hoy, si me sacas, te salva a ti.» Irene sonríe y los dos tiran de él.", C: "Tobías, entre dientes que castañetean, se ríe. «Hoy te ha delatado; mañana igual te salva.» Irene sonríe y los dos tiran de él." },
            mood: "laugh", end: "gas-salvado",
          },
        ],
      },

      // ── lápiz: escribes la dirección exacta.
      "lapiz-inicio": {
        who: "irene", mood: "terror",
        line: {
          A: "Sacas el lápiz y escribes en tu mano: «canal, café, norte, puente». Irene: «¿Qué haces? ¡Ayúdalo! ¡No sé la dirección exacta!»",
          B: "Sacas el lápiz y escribes en tu mano: «paseo del canal, café, 100 m norte del puente». Irene grita: «¿Qué haces? ¡Ayúdalo! ¡No sé la dirección exacta!»",
          C: "Sacas el lápiz y anotas en el dorso de la mano: «paseo del canal, café, cien metros al norte del puente». Irene chilla: «¿Escribes? ¡Ayúdalo, ni siquiera sé dónde estamos!»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Estoy escribiendo dónde estamos. Para la ambulancia.", B: "Estoy anotando dónde estamos exactamente, para decírselo a la ambulancia.", C: "Estoy fijando dónde estamos, con precisión, para que la ambulancia no dé vueltas. Ahora llamo." },
            reply: { A: "Llamas. Lees tu mano. «Ocho minutos.» Irene respira un poco.", B: "Llamas a emergencias y lees tu mano palabra por palabra. «Ocho minutos», dicen. Irene respira un poco.", C: "Llamas y lees tu mano como un parte de guerra. «Ocho minutos», responden. Irene respira por primera vez en un rato." },
            mood: "worried", next: "lapiz-espera",
          },
          {
            id: "mapa",
            say: { A: "Irene, dibuja cómo llegar. Para los bomberos.", B: "Irene, dibuja cómo llegar desde el puente. Para los bomberos, que no conocen el paseo.", C: "Irene, esboza el camino desde el puente hasta aquí; los bomberos llegarán antes con un buen croquis." },
            reply: { A: "Irene dibuja con manos temblando. «Aquí el café. Aquí el puente.» Tobías grita.", B: "Irene dibuja con manos temblorosas. «Aquí el puente, aquí el café, aquí estamos.» Tobías grita pidiendo que se apuren.", C: "Irene traza un mapa nervioso. «El puente, el café, el banco… y nosotros.» Tobías, colgado, grita que dibuje más rápido." },
            mood: "worried", next: "lapiz-espera",
          },
          {
            id: "nota",
            say: { A: "Tobías, aguanta. Escribo tu nombre en mi mano.", B: "Tobías, aguanta. Escribo tu nombre en mi mano y se lo digo a los médicos.", C: "Tobías, aguanta, que ya tengo tu nombre apuntado y los médicos sabrán a quién buscan." },
            reply: { A: "Tobías grita: «¡Deja de escribir! ¡Tira de mí!» Se suelta del borde.", B: "Tobías grita: «¡Deja de escribir y tira de mí!» Se le resbala el dedo y cae al agua.", C: "Tobías aúlla: «¡Menos notas y más manos!» Un dedo se le resbala y cae al agua con un chapoteo." },
            mood: "terror", end: "lapiz-resbala",
          },
        ],
      },
      "lapiz-espera": {
        who: "tomas", mood: "pain",
        line: {
          A: "Tobías aguanta con una mano. «Ocho minutos es mucho. Mis dedos no… no pueden más.»",
          B: "Tobías aguanta como puede con una mano. «Ocho minutos es una eternidad. Mis dedos ya no… no pueden más.»",
          C: "Tobías aguanta con una sola mano, azulado. «Ocho minutos es una eternidad para estos dedos. No pueden más.»",
        },
        options: [
          {
            id: "cuerda",
            say: { A: "Irene, trae la cuerda. Lo atamos a la baranda.", B: "Irene, trae la cuerda del café. Lo atamos a la baranda para que no caiga.", C: "Irene, la cuerda del café: lo atamos a la baranda del paseo y ganamos tiempo hasta que lleguen." },
            reply: { A: "Irene trae la cuerda. Atan a Tobías. Respira mejor. La ambulancia llega.", B: "Irene trae la cuerda del café. Atan a Tobías por debajo de los brazos a la baranda y respira por fin. La ambulancia llega.", C: "Irene trae la cuerda y entre los dos lo aseguran a la baranda. Tobías respira por fin con calma. La ambulancia llega puntual." },
            mood: "worried", end: "lapiz-llamada",
          },
          {
            id: "hablar",
            say: { A: "Cuéntame qué cenaste. Habla, Tobías.", B: "Cuéntame algo, Tobías: qué cenaste, de dónde eres. Habla.", C: "Habla, Tobías: lo que sea, tu mejor anécdota. La voz mantiene despierto al cuerpo." },
            reply: { A: "Tobías habla. Ocho minutos pasan. Llega la ambulancia.", B: "Tobías habla de su ciudad natal sin parar. Los ocho minutos pasan sin sentir y llega la ambulancia.", C: "Tobías cuenta una anécdota interminable sobre su jefe. Los ocho minutos pasan y llega la ambulancia con él todavía hablando." },
            mood: "smile", end: "lapiz-llamada",
          },
          {
            id: "sacar",
            say: { A: "No esperamos. Lo sacamos ahora, entre los dos.", B: "No podemos esperar más: lo sacamos ahora entre los dos.", C: "No esperamos: lo sacamos nosotros, ahora, con todo lo que tengamos." },
            reply: { A: "Tiran los dos. Tobías sale del agua. Llega la ambulancia.", B: "Tiran los dos y Tobías sale del agua, temblando. Un minuto después llega la ambulancia.", C: "Tiran los dos y Tobías emerge del canal. Un minuto después, la ambulancia frena junto al paseo." },
            mood: "worried", end: "lapiz-salvado",
          },
        ],
      },

      // ── libro: el libro como compresa y como distracción.
      "libro-inicio": {
        who: "irene", mood: "surprised",
        line: {
          A: "Tobías está en el suelo, ya fuera del agua, sangrando. Sacas tu libro y se lo pones en la frente. Irene: «¿Un libro? ¡Eso no sirve!»",
          B: "Tobías ya está fuera del agua, tumbado y sangrando de la frente. Sacas tu libro y se lo presionas contra la herida. Irene: «¿Un libro? ¡Eso no es una venda!»",
          C: "Tobías ya está fuera del agua, tumbado y sangrando de la frente. Sacas tu libro y se lo presionas contra la herida. Irene, desencajada: «¿Un libro? ¡Eso no es una gasa, es literatura!»",
        },
        options: [
          {
            id: "presionar",
            say: { A: "Presionar frena la sangre. Es lo único que tengo.", B: "Presionar frena la sangre, y es lo único que tengo a mano.", C: "Presionar frena la hemorragia, y la tapa dura es lo único limpio que llevo. Hoy la literatura sirve." },
            reply: { A: "Tobías gime. «Duele… pero para.» Irene mira el libro con respeto.", B: "Tobías gime. «Duele, pero la sangre para.» Irene mira el libro con un respeto que antes no tenía.", C: "Tobías gime, aliviado. «Duele, pero la sangre para.» Irene mira el libro con el respeto de un converso." },
            mood: "pain", next: "libro-herida",
          },
          {
            id: "ambulancia",
            say: { A: "Tú presiona. Yo llamo a la ambulancia.", B: "Irene, presiona tú con el libro. Yo llamo a la ambulancia.", C: "Irene, presiona tú con el libro y no lo muevas. Yo llamo a la ambulancia." },
            reply: { A: "Irene presiona con las dos manos. Tú llamas. «Cinco minutos.»", B: "Irene presiona con las dos manos, llorando. Llamas a emergencias: «Cinco minutos», dicen.", C: "Irene presiona con las dos manos, concentradísima. Llamas a emergencias: «Cinco minutos», responden, sin saber del libro." },
            mood: "worried", next: "libro-herida",
          },
          {
            id: "leer",
            say: { A: "Tobías, te leo un poco. Para que no te duermas.", B: "Tobías, te leo un párrafo. Hay que mantenerte despierto.", C: "Tobías, te leo un párrafo en voz alta; el truco es no dejar que cierres los ojos, y este libro es aburrido." },
            reply: { A: "Lees. Tobías sonríe. «Qué aburrido.» Irene se ríe llorando.", B: "Lees en voz alta. Tobías sonríe con los labios morados. «Qué aburrido…» Irene se ríe llorando.", C: "Lees un párrafo solemne. Tobías sonríe, tiritando. «Qué soporífero.» Irene se ríe y llora a la vez, sin saber cuál ganar." },
            mood: "laugh", end: "libro-regalo",
          },
        ],
      },
      "libro-herida": {
        who: "tomas", mood: "sleepy",
        line: {
          A: "Tobías tiene los ojos casi cerrados. «Tengo sueño… Solo un momento.» Irene: «¡No te duermas!»",
          B: "Tobías cierra los ojos poco a poco. «Tengo mucho sueño… solo un momento.» Irene lo sacude: «¡No te duermas, Tobías!»",
          C: "Tobías deja caer los párpados. «Tengo mucho sueño; solo un momento.» Irene lo sacude suavemente: «¡Ni se te ocurra dormirte!»",
        },
        options: [
          {
            id: "hablar",
            say: { A: "Tobías, ¿de qué es tu libro favorito? Cuéntame.", B: "Tobías, cuéntame cuál es tu libro favorito. Sin dormirte.", C: "Tobías, cuéntame tu libro favorito y por qué. Si te duermes en la mitad, lo repetimos." },
            reply: { A: "Tobías habla despacio. Despierto. Llega la ambulancia.", B: "Tobías habla despacio de una novela que se sabe de memoria. Despierto. Llega la ambulancia y se lo llevan hablando.", C: "Tobías narra una novela entera con voz débil, despierto de puro amor al argumento. La ambulancia llega y se lo llevan todavía contando." },
            mood: "smile", end: "libro-ambulancia",
          },
          {
            id: "regalar",
            say: { A: "El libro es tuyo. Léelo cuando salgas del hospital.", B: "El libro es tuyo. Léelo cuando salgas del hospital; tendrás tiempo.", C: "Quédate con el libro: cuando salgas del hospital tendrás tiempo, y te debo una página manchada de sangre." },
            reply: { A: "Tobías sonríe. Lo abraza. Llega la ambulancia.", B: "Tobías sonríe y abraza el libro contra el pecho. La ambulancia llega y se lo lleva con él.", C: "Tobías sonríe y abraza el libro con la mano libre. La ambulancia llega y se lo lleva con libro, sangre y sonrisa." },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "irene",
            say: { A: "Irene, háblale tú. Dile cosas buenas.", B: "Irene, háblale tú. Dile cosas buenas, lo que sea.", C: "Irene, háblale tú de lo que más quiera oír: que lo quieren, que lo esperan. Lo que sea, pero habla." },
            reply: { A: "Irene le habla al oído. Tobías sonríe. La ambulancia llega.", B: "Irene le habla al oído de su familia y de su perro. Tobías sonríe con los ojos cerrados. La ambulancia llega.", C: "Irene le susurra todo lo que lo esperan en casa. Tobías sonríe con los ojos cerrados, pero escucha. La ambulancia llega." },
            mood: "love", end: "libro-ambulancia",
          },
        ],
      },

      // ── corazón: Tobías deja de luchar y se calma.
      "corazon-inicio": {
        who: "irene", mood: "sad",
        line: {
          A: "Usas el corazón. Irene deja de gritar. Tobías deja de luchar contra el agua. Los dos te miran. «Tengo mucho miedo», dice él, bajito.",
          B: "Usas el corazón. Irene deja de gritar y Tobías deja de pelear con el agua. Los dos te miran en silencio. «Tengo mucho miedo», dice él, muy bajito.",
          C: "Usas el corazón. Irene deja de gritar; Tobías, de debatirse contra el agua. Los dos te miran y la noche se detiene un segundo. «Tengo muchísimo miedo», dice él, casi sin voz.",
        },
        options: [
          {
            id: "calmar",
            say: { A: "Lo sé. Yo estoy aquí. Respira conmigo.", B: "Lo sé, Tobías. Yo estoy aquí. Respira conmigo, despacio.", C: "Lo sé, y es normal. Yo estoy aquí y no me voy. Respira conmigo, despacio, como si no pasara nada." },
            reply: { A: "Tobías respira. Su mano deja de temblar. «Gracias.»", B: "Tobías respira contigo, una vez, dos veces. Su mano deja de temblar. «Gracias. Ya puedo.»", C: "Tobías respira contigo, una vez, dos veces, tres. Su mano deja de temblar sobre la piedra. «Gracias. Ahora sí puedo.»" },
            mood: "love", next: "corazon-tomas",
          },
          {
            id: "irene",
            say: { A: "Irene, tú también. Agárrame la mano.", B: "Irene, tú también respira. Agárrame de la mano y ayúdame.", C: "Irene, tú también: respira y agárrame de la mano. Entre los tres, esto sale." },
            reply: { A: "Irene te toma de la mano. Llora, pero está tranquila. «Dime qué hago.»", B: "Irene te toma de la mano y llora, pero ya sin pánico. «Dime qué hago y lo hago.»", C: "Irene te toma de la mano, con lágrimas y sin pánico. «Dime qué hago, y lo hago bien.»" },
            mood: "love", next: "corazon-tomas",
          },
          {
            id: "llamar",
            say: { A: "Voy a llamar a la ambulancia. Quédate con él.", B: "Voy a llamar a la ambulancia. Irene, quédate con él.", C: "Voy a llamar a la ambulancia. Irene, quédate con él y no le quites los ojos de encima." },
            reply: { A: "Irene se arrodilla junto al borde. Le habla bajito. Tobías sonríe.", B: "Irene se arrodilla junto al borde y le habla bajito, acariciándole la mano. Tobías sonríe, tranquilo.", C: "Irene se arrodilla junto al borde y le habla bajito, sin soltarle la mano. Tobías sonríe, más tranquilo de lo que nadie esperaba." },
            mood: "love", end: "corazon-ambulancia",
          },
        ],
      },
      "corazon-tomas": {
        who: "tomas", mood: "smitten",
        line: {
          A: "Tobías mira a Irene. «Si salgo de esta, te invito a cenar. En serio.» Irene se ríe llorando: «Primero sal.»",
          B: "Tobías mira a Irene con los ojos brillantes. «Si salgo de esta, te invito a cenar, en serio.» Irene se ríe entre lágrimas: «Primero sal, tonto.»",
          C: "Tobías mira a Irene con una ternura inesperada. «Si salgo de esta, te invito a cenar; llevo un año queriéndote decir esto.» Irene se ríe llorando: «Primero sal, tonto.»",
        },
        options: [
          {
            id: "tirar",
            say: { A: "Pues a salir. A la una, a las dos, a las tres.", B: "Pues a salir de ahí. A la una, a las dos, a las tres.", C: "Entonces hay que salir de ahí con urgencia romántica. A la una, a las dos y a las tres." },
            reply: { A: "Tiran los tres. Tobías sale. Irene lo abraza. Llora y ríe.", B: "Tiran los tres a la vez. Tobías sale del agua e Irene se lanza a abrazarlo, llorando y riendo.", C: "Tiran los tres a coro. Tobías emerge del canal e Irene se le cuelga del cuello, llorando y riendo a partes iguales." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "beso",
            say: { A: "Irene, un beso para que no suelte.", B: "Irene, un beso de ánimo para que no se suelte.", C: "Irene, un beso de motivación; en estas circunstancias, la ciencia lo recomienda." },
            reply: { A: "Irene lo besa en la frente. Tobías sonríe. Llegan los bomberos.", B: "Irene le da un beso en la frente, junto a la herida. Tobías sonríe. Llegan los bomberos y lo sacan sin esfuerzo.", C: "Irene le da un beso suave en la frente, junto a la herida. Tobías sonríe como un tonto. Llegan los bomberos y lo sacan en dos movimientos." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "ambulancia",
            say: { A: "Primero, la ambulancia. La cena, después.", B: "Primero la ambulancia, Tobías. La cena, después de que te cosan.", C: "Primero la ambulancia y luego los planes. La cena, cuando te hayan cosido la frente." },
            reply: { A: "Tobías se ríe. «Trato.» La ambulancia llega. Irene sube con él.", B: "Tobías se ríe entre dientes. «Trato hecho.» La ambulancia llega y Irene sube con él, sin soltarle la mano.", C: "Tobías se ríe, tiritando. «Trato hecho.» La ambulancia llega y Irene sube con él, sin soltarle la mano un solo segundo." },
            mood: "love", end: "corazon-ambulancia",
          },
        ],
      },
    },
    ends: {
      salvado: { text: { A: "Tobías está en el suelo, vivo. Irene lo abraza. Llega la ambulancia.", B: "Tobías yace en el paseo, tosiendo agua pero vivo. Irene lo abraza llorando. Llega la ambulancia con las luces encendidas.", C: "Tobías yace en el paseo, tosiendo agua del canal, pero vivo. Irene lo abraza sin soltarlo y llora. La ambulancia llega con las luces encendidas." }, change: "ambulancia", recap: "Sacaste a Tobías del canal y llegó la ambulancia." },
      resbala: { text: { A: "Tobías cae al agua. Un paseante salta y lo saca. Todos gritan.", B: "Tobías cae al agua. Un paseante valiente salta, lo agarra y lo trae hasta el borde entre gritos.", C: "Tobías se hunde. Un paseante salta de inmediato, lo agarra por la camisa y lo lleva hasta el borde entre gritos, mientras tú maldices el tiempo perdido." }, change: "cae", recap: "Tobías cayó al canal por aguantar poco y otro lo rescató." },
      llamada: { text: { A: "Los vecinos sacan a Tobías. La ambulancia llega rápido. Tú diste la dirección.", B: "Los paseantes sacan a Tobías entre todos. La ambulancia llega rápido: tú diste la dirección exacta.", C: "Los paseantes forman una cadena y sacan a Tobías. La ambulancia llega en tiempo récord: la dirección exacta fue tuya." }, change: "llama", recap: "Tu llamada con la dirección exacta salvó tiempo valioso." },
      "cuchillo-policia": { text: { A: "Llega la policía. Ven el cuchillo. Irene explica. Tobías ya se ahogó o no. Todo es caos.", B: "Llega la policía y lo primero que ve es el cuchillo. Mientras Irene explica a gritos, otros pescan a Tobías del agua.", C: "Llega la policía, repara en el cuchillo y apunta. Mientras Irene intenta explicar la cuerda, otros paseantes pescan a Tobías del agua." }, change: "policia", recap: "Tu cuchillo confundió a todos mientras Tobías seguía en el agua." },
      "cuchillo-libre": { text: { A: "Tobías sale del agua, libre. Irene te abraza. Llega la ambulancia. Guardas el cuchillo.", B: "Tobías sale del agua, libre de la cuerda. Irene te abraza llorando. Llega la ambulancia y guardas el cuchillo.", C: "Tobías sale del agua, libre de la cuerda y de la muerte. Irene te abraza sin entender cómo. Guardas el cuchillo mientras llega la ambulancia." }, change: "ambulancia", recap: "Cortaste la cuerda que ahogaba a Tobías." },
      "cuchillo-herida": { text: { A: "Tobías sale. Tú sangras del brazo. Llega la ambulancia para los dos.", B: "Tobías sale del canal. Tú sangras del brazo, con un corte feo. La ambulancia llega para los dos.", C: "Tobías sale del canal y tú te quedas sangrando del antebrazo. La ambulancia llega con dos pacientes y un solo cuchillo." }, change: "ambulancia", recap: "Cortaste la cuerda de Tobías con prisa y terminaste herido." },
      "pistola-salvado": { text: { A: "Tobías sale del agua. Irene te mira: «Guarda eso.» Llega la ambulancia.", B: "Tobías sale del agua, tosiendo. Irene te mira con ojos enormes: «Gracias, y guarda eso.» Llega la ambulancia.", C: "Tobías sale del agua, tosiendo. Irene te mira con lágrimas: «Gracias. Y, por favor, guarda eso.» Llega la ambulancia." }, change: "ambulancia", recap: "Con la pistola a un lado, sacaste a Tobías del canal." },
      "pistola-policia": { text: { A: "La policía te apunta. Irene grita que lo ayudaste. Tobías sale gracias a un paseante.", B: "La policía te apunta y levantas las manos. Irene grita que lo ayudaste. Entre tanto, otro paseante saca a Tobías.", C: "La policía te apunta y alzas las manos. Irene grita que lo ayudaste, pero nadie la oye. Entre tanto, un paseante saca a Tobías del agua." }, change: "manos-arriba", recap: "La pistola junto al canal trajo una patrulla y las manos arriba." },
      "granada-huye": { text: { A: "El paseo se vacía. Tobías sigue colgado. Alguien llama a los bomberos.", B: "El paseo se vacía entre gritos. Tobías sigue colgado del borde. Alguien, lejos, llama a los bomberos.", C: "El paseo se vacía en estampida. Tobías sigue colgado del borde; a lo lejos, un valiente llama a los bomberos." }, change: "huye", recap: "La granada vació el paseo y dejó a Tobías colgado." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el canal. Los bomberos sacan a Tobías. Nadie cree lo de la granada.", B: "Un helicóptero ilumina el canal. Los bomberos sacan a Tobías con un gancho. Nadie cree lo de la granada falsa.", C: "Un helicóptero inunda el canal de luz. Los bomberos sacan a Tobías con un gancho. Lo de la granada falsa es una frase que ya nadie escucha." }, change: "helicoptero", recap: "La granada trajo un helicóptero y bomberos al canal." },
      "granada-rescate": { text: { A: "Los bomberos sacan a Tobías. Irene y tú explican lo de la granada. Tobías ríe.", B: "Los bomberos sacan a Tobías del agua. Irene y tú explican lo de la granada falsa. Tobías, en la camilla, ríe.", C: "Los bomberos sacan a Tobías del agua. Irene y tú explican a los agentes lo de la granada de juguete; Tobías, en la camilla, ríe sin parar." }, change: "ambulancia", recap: "Tobías fue rescatado por los bomberos que llamó tu granada." },
      "gas-cae": { text: { A: "Irene llora en el suelo. Tobías grita solo. Un paseante lo saca. Todos te miran mal.", B: "Irene llora en el suelo, ciega. Tobías grita solo, hasta que un paseante lo saca. Todos te miran mal.", C: "Irene llora en el suelo, ciega y furiosa. Tobías grita solo hasta que un paseante lo rescata. Todos te miran con un juicio silencioso." }, change: "cae", recap: "Rociaste a Irene y Tobías tuvo que salvarse sin ti." },
      "gas-salvado": { text: { A: "Tobías sale. Los tres ríen en el suelo. Guardas el gas. Llega la ambulancia.", B: "Tobías sale del agua y los tres ríen en el suelo del paseo. Guardas el gas pimienta. Llega la ambulancia.", C: "Tobías sale del agua y los tres ríen en el suelo del paseo, empapados. Guardas el gas, hoy desmentido; la ambulancia llega a una escena feliz." }, change: "ambulancia", recap: "Aclaraste el malentendido y sacaste a Tobías con Irene." },
      "gas-policia": { text: { A: "Llega la ambulancia con la policía. Ven tu gas. Todos explican. Tobías sobrevive.", B: "Llega la ambulancia con la policía. Ven tu gas y preguntan. Todos explican, y Tobías sobrevive.", C: "Ambulancia y policía llegan a la vez. Reparan en tu gas y preguntan largo. Todos explican; lo importante es que Tobías sobrevive." }, change: "policia", recap: "La policía interrogó a todos mientras Tobías se recuperaba." },
      "lapiz-resbala": { text: { A: "Tobías cae al agua. Un paseante salta. Lo sacan. Tu nota no sirvió.", B: "Tobías cae al agua mientras escribes. Un paseante salta y lo saca. Tu nota no sirvió de nada.", C: "Tobías se hunde mientras apuntas su nombre. Un paseante salta y lo rescata. Tu nota solo sirvió para recordar que no era el momento." }, change: "cae", recap: "Escribiste mientras Tobías se soltaba del borde." },
      "lapiz-llamada": { text: { A: "Llega la ambulancia. Lees tu mano. Tobías se va hablando con los paramédicos.", B: "Llega la ambulancia puntual. Lees tu mano a los paramédicos y Tobías se va hablando con ellos.", C: "Llega la ambulancia puntual gracias a tu mano escrita. Los paramédicos se llevan a Tobías, que no deja de hablar de su jefe." }, change: "llama", recap: "La dirección escrita en tu mano guió a la ambulancia." },
      "lapiz-salvado": { text: { A: "Tobías sale del agua. Llega la ambulancia con la dirección de tu mano.", B: "Tobías sale del agua gracias a los dos. Llega la ambulancia con la dirección exacta de tu mano.", C: "Tobías sale del agua gracias a tu decisión. La ambulancia llega guiada por la dirección que escribiste en tu mano." }, change: "ambulancia", recap: "Escribiste la dirección y sacaste a Tobías entre los dos." },
      "libro-regalo": { text: { A: "Tobías se va con tu libro en el pecho. Irene sonríe. Te dice gracias.", B: "Tobías se va en la camilla con tu libro en el pecho. Irene sonríe y te da las gracias con la mano.", C: "Tobías se va en la camilla con tu libro apretado contra el pecho. Irene te sonríe desde la ambulancia y articula un «gracias» silencioso." }, change: "sonrie", recap: "Tobías se fue a urgencias con tu libro en el pecho." },
      "libro-ambulancia": { text: { A: "La ambulancia llega. Tobías habla con los médicos. Irene te abraza.", B: "La ambulancia llega mientras Tobías todavía habla. Los médicos lo cuidan e Irene te abraza fuerte.", C: "La ambulancia llega mientras Tobías aún cuenta su novela. Los médicos lo cuidan e Irene te abraza como a un viejo amigo." }, change: "ambulancia", recap: "Tu libro mantuvo despierto a Tobías hasta que llegó la ambulancia." },
      "corazon-abrazo": { text: { A: "Irene y Tobías se abrazan empapados. Tú sonríes. Llega la ambulancia.", B: "Irene y Tobías se abrazan empapados en el suelo. Tú sonríes. La ambulancia llega y los encuentra riendo.", C: "Irene y Tobías se abrazan empapados sobre las piedras. Sonríes. La ambulancia llega y los encuentra riendo y llorando a la vez." }, change: "abraza", recap: "El corazón salvó a Tobías y juntó a dos amigos en un abrazo." },
      "corazon-beso": { text: { A: "Irene besa a Tobías. Los bomberos lo sacan. Todo el paseo aplaude.", B: "Irene besa a Tobías en la frente. Los bomberos lo sacan en un minuto y todo el paseo aplaude.", C: "Irene besa a Tobías en la frente; los bomberos lo sacan en un abrir y cerrar de ojos y todo el paseo aplaude, sin saber de qué." }, change: "beso", recap: "Un beso en la frente cerró el rescate de Tobías." },
      "corazon-ambulancia": { text: { A: "La ambulancia llega. Irene sube con Tobías. Él sonríe. Tú te quedas.", B: "La ambulancia llega y Irene sube con Tobías, sin soltarle la mano. Él sonríe. Tú te quedas en el paseo.", C: "La ambulancia llega y Irene sube con Tobías, sin soltarle la mano. Él sonríe con los labios morados. Tú te quedas en el paseo, con las manos vacías y llenas." }, change: "ambulancia", recap: "Calmaste a Tobías hasta que llegó la ambulancia." },
    },
    speak: {
      A1: "¿Sabes nadar?",
      A2: "¿Qué número llamas en tu país si hay una emergencia?",
      B1: "¿Cómo ayudarías a alguien que cae al agua si no sabes nadar?",
      B2: "¿Qué información das primero cuando llamas a emergencias?",
      C1: "¿Cómo se mantiene la calma en una emergencia cuando todo depende de ti?",
      C2: "¿Qué distingue al héroe improvisado del imprudente cuando la vida de otro está en juego?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "grita", speak: { A: "¿Qué herramientas llevas en tu mochila?", B: "¿Alguna vez una herramienta tuya salvó una situación?", C: "¿Cómo se distingue un instrumento de un arma cuando solo hay segundos para decidir?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Obedeces rápido si alguien te da una orden?", B: "¿Hasta qué punto el miedo hace obedecer a la gente?", C: "¿Qué puede lograr la autoridad que da el miedo, y qué no podrá lograr jamás?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces si todos corren y tú no sabes por qué?", B: "¿Alguna vez saliste corriendo sin saber de qué huías?", C: "¿Qué dice de nosotros que ante el pánico olvidemos al que más ayuda necesita?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Culpas rápido a otros cuando tienes miedo?", B: "¿Acusaste alguna vez a alguien por miedo y te equivocaste?", C: "¿Cómo se frena la tendencia a buscar culpables cuando el miedo manda?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes tu dirección en tu agenda?", B: "¿Sabrías decirle a un operador de emergencias dónde estás ahora mismo?", C: "¿Qué datos sobre tu entorno deberías conocer de memoria por si ocurre algo?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Qué cosa de tu bolso sirve para ayudar?", B: "¿Qué objeto cotidiano te ha sacado de un apuro?", C: "¿Qué enseña una emergencia sobre el valor práctico de las cosas más inútiles?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Quién te calma cuando tienes miedo?", B: "¿Qué le dirías a un amigo para calmarlo en una emergencia?", C: "¿Por qué las confesiones más sinceras aparecen justo cuando creemos que no hay otra salida?" } },
    },
  },
];

// Dónde está cada escena: la persona de pie en (x, z) mirando a `face`, y el círculo del alumno delante.
export const PLACEMENTS = {
  "centro-choque": { x: 41.5, z: -6.4, face: -Math.PI / 2, circle: { x: 39.5, z: -6.4 } },
  "centro-desmayo": { x: 28, z: 6.4, face: -Math.PI / 2, circle: { x: 26, z: 6.4 } },
  "mercado-robo": { x: -110.5, z: -12.5, face: Math.PI / 2, circle: { x: -108.6, z: -12.5 } },
  "mercado-inspectores": { x: -68, z: 12, face: 0, circle: { x: -68, z: 13.8 } },
  "costa-discusion": { x: 90.2, z: -26, face: Math.PI / 2, circle: { x: 92.2, z: -26 } },
  "costa-canal": { x: 94.6, z: 34, face: -Math.PI / 2, circle: { x: 92.7, z: 34 } },
};

export default encounters;
