// Noche abierta · calle · Barrio Sur y Los Galpones: balcones con luz, vecinos en pijama y bajos que atraviesan las paredes de los galpones.
const encounters = [
  {
    id: "sur-balcon",
    kind: "escena",
    district: "sur",
    title: "Las llaves desde el balcón",
    verb: "AYUDAR",
    goal: "Pedir y dar instrucciones, coordinar una acción con alguien a distancia, proponer alternativas y disculparse por un susto.",
    cast: [
      {
        id: "manolo", name: "Don Manolo", role: "Vecino del primer piso",
        age: "old", body: "m", build: "heavy", height: 1.68,
        hair: "bald", hairColor: "#cfcac2", skin: "#e8c09a",
        top: "sweater", topColor: "#7a3b2e", bottom: "pants", bottomColor: "#3a3a3a",
        extras: ["glasses", "mustache"], pose: "balcony", props: ["keys-street", "plant-pot"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "manolo", mood: "worried",
        line: {
          A: "Un señor mayor te llama desde un balcón del primer piso. «¡Perdone! Se me cayeron las llaves. Están ahí, en la acera.»",
          B: "Desde un balcón del primer piso, un señor en suéter agita los brazos. «¡Joven! Se me cayeron las llaves a la calle y con esta rodilla no puedo bajar.»",
          C: "Un señor asoma medio cuerpo por un balcón del primer piso. «¡Disculpe! Acabo de tirar las llaves a la calle. No a propósito, aunque mi rodilla opina que fue un sabotaje.»",
        },
        options: [
          {
            id: "lanzar",
            say: { A: "¡Aquí están! ¿Se las tiro?", B: "¡Ya las tengo! ¿Quiere que se las tire? Prepárese para atraparlas.", C: "¡Encontradas! Le propongo un lanzamiento suave, si usted se siente con reflejos." },
            reply: { A: "Don Manolo extiende las manos. «Sí, pero despacio. No veo muy bien.»", B: "Don Manolo se ajusta las gafas. «Bueno, pero tíralas despacio, que mis reflejos ya no son lo que eran.»", C: "Don Manolo se ríe. «¿Reflejos? Los dejé en 1985. Pero adelante, me arriesgo.»" },
            mood: "smile", next: "lanzar",
          },
          {
            id: "codigo",
            say: { A: "¿Hay un código en la puerta? Puedo subir.", B: "Si me dice el código del portal, se las subo yo.", C: "Si me confía el código del portal, se las llevo en mano. Prometo no robarle el ascensor." },
            reply: { A: "Don Manolo duda. «Mmm… No te conozco. Pero bueno… Es 1-9-4-7.»", B: "Don Manolo lo piensa un momento. «No debería dárselo a un desconocido… Bueno, es 1947, el año en que nací.»", C: "Don Manolo entorna los ojos. «Mi hija me mataría. Es 1947. Si lo cuenta, digo que fue usted quien me lo sacó con engaños.»" },
            mood: "neutral", next: "portal",
          },
          {
            id: "vecina",
            say: { A: "¿Tiene un vecino que puede ayudar?", B: "¿No hay algún vecino que pueda bajar a buscarlas?", C: "¿Y no hay algún vecino de confianza al que podamos despertar sin causar un incidente diplomático?" },
            reply: { A: "Don Manolo señala el timbre. «Sí, Carmen, del bajo B. Toca su timbre.»", B: "«Carmen, la del bajo B, tiene una copia. Toca su timbre, pero con cariño, que madruga.»", C: "«Carmen, del bajo B. Tiene copia de mis llaves y muy mal despertar. Toque con delicadeza.»" },
            mood: "neutral", next: "portal",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y escribes algo en un papel.", C: "Sacas el lápiz y garabateas una nota con letra grande." },
            say: { A: "Le escribo el número de mi teléfono. Así me llama.", B: "Le dejo escrito mi número. Si pasa algo, me llama y vuelvo.", C: "Le apunto mi número, por si esta noche las llaves deciden escaparse otra vez." },
            reply: { A: "Don Manolo se ríe. «¿Y cómo me das el papel? ¡Estoy aquí arriba!»", B: "Don Manolo se ríe. «Muy amable, pero ¿cómo me subes el papel? Mismo problema que las llaves.»", C: "«Brillante», dice Don Manolo. «Ahora tenemos dos objetos en la calle en vez de uno.»" },
            mood: "smile", next: "lanzar",
          },
          libro: {
            act: { A: "Sacas tu libro.", B: "Sacas tu libro y pones las llaves entre las páginas.", C: "Metes las llaves dentro del libro, como un paquete improvisado." },
            say: { A: "Pongo las llaves en el libro. Así no se pierden.", B: "Si las meto en el libro, pesa más y es más fácil tirarlo.", C: "Con el libro hacemos un paquete aerodinámico. Bueno, más o menos aerodinámico." },
            reply: { A: "Don Manolo aplaude. «¡Buena idea! Y me gustan los libros.»", B: "Don Manolo aplaude. «¡Qué ingenioso! Y si es una novela, me la quedo un rato.»", C: "«Llaves con lectura incluida», dice Don Manolo. «Es el mejor servicio de entrega del barrio.»" },
            mood: "smile", next: "lanzar",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "No te fías y sacas el gas pimienta.", C: "Por instinto, sacas el gas pimienta antes de acercarte al portal." },
            say: { A: "¿Es una trampa? ¿Quién es usted?", B: "¿Esto no será una trampa? ¿Quién es usted?", C: "Perdone, pero esto tiene toda la pinta de una trampa. ¿Quién es usted, exactamente?" },
            reply: { A: "Don Manolo se asusta. «¡Soy Manolo! ¡Solo quiero mis llaves!»", B: "Don Manolo da un paso atrás. «¿Una trampa? ¡Tengo setenta y nueve años y una rodilla de cristal!»", C: "«¿Una trampa?», repite Don Manolo, ofendido. «Hijo, mi trampa más peligrosa es el crucigrama del domingo.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Al buscar las llaves, sacas la granada sin querer.", C: "Buscas las llaves y, en su lugar, levantas la granada a la luz de la farola." },
            say: { A: "¡Uy! Esto no son las llaves.", B: "¡Uy, perdón! Esto no son sus llaves.", C: "Ah, no, esto no abre puertas. Bueno, no de la manera correcta." },
            reply: { A: "Don Manolo grita. «¡Una granada! ¡Socorro!» Se encienden las luces del edificio.", B: "Don Manolo grita y se encienden tres ventanas. «¡Una granada en la calle! ¡Que alguien llame a la policía!»", C: "Don Manolo da un grito que despierta a medio edificio. En cada ventana aparece una cabeza en pijama." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al agacharte por las llaves, se ve tu pistola.", C: "Al agacharte, la pistola asoma por el bolsillo justo bajo la farola." },
            say: { A: "Aquí están sus llaves.", B: "Ya tengo sus llaves. ¿Se las tiro?", C: "Tengo sus llaves. ¿Prefiere lanzamiento o entrega a domicilio?" },
            reply: { A: "Don Manolo ve la pistola. «¡Ay! ¡Quédate las llaves! ¡No subas!»", B: "Don Manolo palidece. «Quédate con las llaves, pero no subas, ¿eh? ¡Carmen, llama a la policía!»", C: "«Entrega a domicilio, ni hablar», dice Don Manolo, pálido. Desde abajo se oye a alguien marcando un número." },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves que las llaves están atadas a una cuerda rota. Sacas el cuchillo.", C: "Las llaves llevan un cordón enredado en la reja. Sacas el cuchillo para cortarlo." },
            say: { A: "Las llaves están en la reja. Corto la cuerda.", B: "El cordón está enganchado en la reja. Lo corto y se las doy, ¿de acuerdo?", C: "Su llavero se ha enamorado de la reja. Corto el cordón y los separo con cuidado." },
            reply: { A: "Don Manolo se pone nervioso. «Bueno… pero con cuidado, ¿eh?»", B: "Don Manolo se tensa al ver el cuchillo. «Eh… bueno. Pero despacio, por favor.»", C: "Don Manolo traga saliva. «Corte usted, pero no me mire así con eso en la mano, que me pongo nervioso.»" },
            mood: "worried", next: "lanzar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No se preocupe, Don Manolo. Yo le ayudo.", B: "Tranquilo, que no se va a quedar fuera de casa esta noche. Yo le ayudo.", C: "Tranquilo, que entre los dos esto lo resolvemos antes de que se enfríe la cena." },
            reply: { A: "Don Manolo sonríe. «Gracias. Desde que murió mi mujer, nadie me ayuda.»", B: "A Don Manolo se le ablanda la cara. «Qué amable… Mi mujer siempre llevaba las llaves. Desde que no está, se me caen todas.»", C: "Don Manolo se apoya en la baranda. «Mi mujer era la de las llaves, ¿sabe? Cuarenta años sin perder ninguna. Yo voy fatal sin ella.»" },
            mood: "love", next: "portal",
          },
        },
      },
      calmar: {
        who: "manolo", mood: "scared",
        line: {
          A: "Don Manolo cierra la puerta del balcón. Solo mira por el cristal.",
          B: "Don Manolo se esconde detrás de la cortina. En el edificio se encienden varias luces.",
          C: "Don Manolo te observa desde detrás del visillo, como si fueras un documental de miedo. Medio edificio mira contigo.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "¡Perdón! Lo guardo. Solo quiero darle las llaves.", B: "¡Perdone, de verdad! Ya lo guardé. Solo quiero devolverle sus llaves.", C: "Lo siento muchísimo, ha sido torpe por mi parte. Ya está guardado. Solo vengo a devolver unas llaves." },
            reply: { A: "Don Manolo abre un poco. «Bueno… Tírame las llaves y vete.»", B: "Don Manolo entreabre la puerta. «Bueno… Tíralas, pero desde lejos.»", C: "Don Manolo asoma la nariz. «Bien. Lanzamiento desde la acera de enfrente, si no le importa.»" },
            mood: "worried", next: "lanzar",
          },
          {
            id: "explicar",
            say: { A: "No es de verdad. Es un juguete.", B: "No se asuste, no es lo que parece. Es para… un disfraz.", C: "Le aseguro que hay una explicación razonable. No se me ocurre ahora, pero existe." },
            reply: { A: "Don Manolo no te cree. Un vecino llama a la policía.", B: "«¿Un disfraz? ¿Un martes?», dice Don Manolo. Alguien en el tercero ya está hablando con la policía.", C: "«Avíseme cuando se le ocurra», dice Don Manolo. Desde el tercero, una vecina ya describe tu ropa por teléfono." },
            mood: "scared", end: "policia",
          },
          {
            id: "dejar",
            say: { A: "Dejo las llaves en el portal y me voy.", B: "Le dejo las llaves en el buzón del portal y me voy, ¿de acuerdo?", C: "Le dejo las llaves junto al portal y desaparezco. Usted haga como que esto fue un sueño." },
            reply: { A: "Don Manolo dice que sí con la cabeza.", B: "Don Manolo asiente desde la cortina. «Sí, sí. Gracias… creo.»", C: "«Un sueño rarísimo», murmura Don Manolo. «Pero gracias, supongo.»" },
            mood: "worried", end: "buzon",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón por el susto. Usted me recuerda a mi abuelo.", B: "Perdóneme el susto. Usted me recuerda a mi abuelo, de verdad.", C: "Perdone el numerito. Tiene la misma cara que pone mi abuelo cuando le cambio el canal." },
            reply: { A: "Don Manolo abre el balcón. «¿Tu abuelo? Bueno… te creo.»", B: "Don Manolo sale otra vez al balcón. «¿Tu abuelo? Pues seguro que es un hombre guapo.»", C: "Don Manolo se ríe a su pesar. «Si su abuelo es tan guapo como yo, le perdono todo.»" },
            mood: "love", next: "lanzar",
          },
        },
      },
      lanzar: {
        who: "manolo", mood: "neutral",
        line: {
          A: "Don Manolo espera con las manos abiertas. «Estoy listo. ¿Uno, dos, tres?»",
          B: "Don Manolo se inclina sobre la baranda, entre las macetas. «Venga, estoy listo. Pero apunta a las manos, no a los geranios.»",
          C: "Don Manolo adopta una postura de portero de fútbol jubilado. «Adelante. Pero cuidado con los geranios, que son lo único que crece en esta casa.»",
        },
        options: [
          {
            id: "tirar",
            say: { A: "¡Uno, dos y tres! ¡Ahí van!", B: "¡A la de tres! Una, dos y… ¡tres!", C: "Cuento hasta tres y lanzo. Si fallo, repetimos sin rencor." },
            reply: { A: "Las llaves suben… y Don Manolo las atrapa. «¡Sí! ¡Muy bien!»", B: "Las llaves vuelan y Don Manolo las atrapa contra el pecho. «¡Las tengo! ¡Qué equipo!»", C: "Las llaves rozan un geranio, pero Don Manolo las caza al vuelo. «¡Todavía tengo reflejos!»" },
            mood: "smile", end: "llaves",
          },
          {
            id: "cesta",
            say: { A: "¿Tiene una bolsa o una cesta con una cuerda?", B: "¿Y si baja una cesta con una cuerda? Es más seguro que tirarlas.", C: "Propongo un método más tradicional: ¿no tendrá una cesta y una cuerda, como en los pueblos?" },
            reply: { A: "Don Manolo sonríe. «¡Sí! La cesta del pan.» Baja una cesta con una cuerda.", B: "«¡Claro, la cesta del pan!», dice Don Manolo, y la baja con un cordón de cortina.", C: "«¡Como mi madre!», exclama Don Manolo, y baja la cesta del pan atada a un cinturón." },
            mood: "love", end: "cesta",
          },
          {
            id: "subir",
            say: { A: "Mejor no. Se las llevo arriba.", B: "Mejor no las tiro, que se pueden caer otra vez. ¿Se las subo?", C: "Pensándolo bien, mi puntería no merece su confianza. ¿Se las subo?" },
            reply: { A: "Don Manolo se ríe. «Bueno. El código es 1947.»", B: "«Mejor, sí», dice Don Manolo. «El código es 1947. Primer piso, puerta A.»", C: "«Sabia decisión», dice Don Manolo. «Código 1947, primer piso. Le espero con la puerta abierta… cuando tenga llaves.»" },
            mood: "smile", next: "portal",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted es muy simpático, Don Manolo.", B: "Me cae muy bien, Don Manolo. ¿Vive solo aquí?", C: "Con usted da gusto perder llaves. ¿Siempre tiene este humor a medianoche?" },
            reply: { A: "Don Manolo se ríe. «Gracias. Ven el domingo. Hago paella.»", B: "Don Manolo sonríe. «Solo, con mis geranios. Ven el domingo, que hago paella para seis y como uno.»", C: "«Solo a medianoche y con público», dice Don Manolo. «El domingo hago paella. Venga, que siempre me sobra.»" },
            mood: "love", end: "cesta",
          },
        },
      },
      portal: {
        who: "manolo", mood: "neutral",
        line: {
          A: "Estás en el portal. Don Manolo grita desde arriba. «¡Primer piso! ¡Puerta A!»",
          B: "Llegas al portal. Desde arriba, Don Manolo da instrucciones. «¡Primer piso, puerta A! ¡Y no despiertes a Carmen!»",
          C: "Ya estás en el portal oscuro. Desde el balcón, Don Manolo narra tus movimientos como un locutor deportivo.",
        },
        options: [
          {
            id: "entregar",
            say: { A: "Ya subo. ¡Tengo sus llaves!", B: "¡Subo enseguida! Abra la puerta, que ya llego.", C: "Misión casi cumplida. Subo y le hago la entrega oficial." },
            reply: { A: "Don Manolo abre la puerta. «¡Gracias! ¡Eres un ángel!»", B: "Don Manolo te espera en la puerta, en zapatillas. «¡Mil gracias! ¿Quieres un café?»", C: "Don Manolo te recibe en zapatillas y con una reverencia. «Le debo una. Y yo pago mis deudas en croquetas.»" },
            mood: "love", end: "llaves",
          },
          {
            id: "carmen",
            say: { A: "Toco el timbre de Carmen.", B: "Voy a tocar el timbre de Carmen, por si acaso tiene la copia.", C: "Toco a Carmen. Si me grita, le digo que vengo de su parte." },
            reply: { A: "Carmen abre en bata. «¿Otra vez, Manolo?» Pero sonríe.", B: "Carmen abre en bata, despeinada. «¿Otra vez las llaves, Manolo?» Suspira, pero sale a ayudar.", C: "Carmen abre con cara de domingo a las seis de la mañana. «Manolo, es la tercera vez este mes.»" },
            mood: "smile", end: "carmen",
          },
          {
            id: "buzon",
            say: { A: "Dejo las llaves en el buzón. Buenas noches.", B: "Mejor no subo, es tarde. Las dejo en su buzón, ¿de acuerdo?", C: "No quiero molestar a estas horas. Las dejo en su buzón y mañana usted las rescata." },
            reply: { A: "Don Manolo duda. «¿Y cómo bajo? Bueno… Gracias.»", B: "Don Manolo duda. «¿Y cómo bajo con esta rodilla? Bueno, gracias igual.»", C: "«El buzón está en la planta baja», dice Don Manolo, «y mi rodilla, en el primero. Pero gracias.»" },
            mood: "sad", end: "buzon",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Le subo las llaves. ¿Necesita algo más?", B: "Le subo las llaves. ¿Necesita algo más esta noche?", C: "Le subo las llaves. Y si necesita algo más, dígamelo, que hoy estoy de servicio." },
            reply: { A: "Don Manolo sonríe. «Solo un poco de compañía. ¿Un café?»", B: "Don Manolo se emociona. «Solo hablar un rato. Hace días que no hablo con nadie.»", C: "Don Manolo baja la voz. «Pues… un rato de charla. La tele no contesta, ¿sabe?»" },
            mood: "love", end: "llaves",
          },
        },
      },
    },
    ends: {
      llaves: { text: { A: "Don Manolo tiene sus llaves. Enciende la luz y te saluda desde el balcón.", B: "Don Manolo recupera sus llaves. Se enciende la luz del salón y te saluda desde el balcón.", C: "Don Manolo recupera sus llaves y enciende todas las luces de la casa, como si celebrara un gol." }, change: "luz", recap: "Devolviste las llaves a Don Manolo." },
      cesta: { text: { A: "La cesta sube con las llaves. Don Manolo se ríe y aplaude.", B: "La cesta sube despacio con las llaves. Don Manolo aplaude y te invita a su paella del domingo.", C: "La cesta asciende con solemnidad. Don Manolo la recibe como un trofeo y te invita a paella el domingo." }, change: "sonrie", recap: "Subiste las llaves de Don Manolo con una cesta." },
      carmen: { text: { A: "Carmen sube las llaves. Don Manolo y Carmen se ríen en el balcón.", B: "Carmen le sube las llaves. Al rato, los dos discuten y se ríen en el balcón.", C: "Carmen sube las llaves y se queda a regañar a Don Manolo. Por las risas, no parece la primera vez." }, change: "llama", recap: "Despertaste a Carmen para ayudar a Don Manolo." },
      buzon: { text: { A: "Dejas las llaves en el buzón. Don Manolo cierra el balcón.", B: "Dejas las llaves en el buzón. Don Manolo cierra el balcón, un poco triste.", C: "Dejas las llaves en el buzón. Don Manolo cierra el balcón despacio, con la noche todavía sin resolver." }, change: "triste", recap: "Dejaste las llaves de Don Manolo en el buzón." },
      policia: { text: { A: "Llega la policía. Explicas todo. Don Manolo recibe sus llaves.", B: "Llega la policía. Tardas un rato en explicar el malentendido, pero Don Manolo recibe sus llaves.", C: "Llega un coche patrulla. Tras una explicación larga y torpe, un agente le sube las llaves a Don Manolo." }, change: "policia", recap: "Un malentendido con Don Manolo terminó con la policía." },
    },
    speak: {
      A1: "¿Dónde pones tus llaves cuando llegas a casa?",
      A2: "¿Qué perdiste la última vez y cómo lo encontraste?",
      B1: "¿Qué haces cuando un vecino te pide ayuda?",
      B2: "¿Qué harías si te quedaras fuera de casa a medianoche?",
      C1: "¿Qué diferencia hay entre confiar en un vecino y depender de él?",
      C2: "¿Qué dice de una comunidad la manera en que cuida a sus mayores?",
    },
  },
  {
    id: "sur-vecino",
    kind: "escena",
    district: "sur",
    title: "Música muy fuerte",
    verb: "MEDIAR",
    goal: "Quejarse con educación, mediar entre dos personas, proponer un acuerdo, ceder y negociar condiciones.",
    cast: [
      {
        id: "elena", name: "Elena", role: "Vecina que madruga",
        age: "adult", body: "f", build: "slim", height: 1.64,
        hair: "ponytail", hairColor: "#5a3a22", skin: "#c99572",
        top: "coat", topColor: "#4b5d78", bottom: "pants", bottomColor: "#9db6d8",
        extras: ["scarf"], pose: "arms", props: ["door-open"],
      },
      {
        id: "gonzalo", name: "Gonzalo", role: "Anfitrión de la fiesta",
        age: "young", body: "m", build: "average", height: 1.8,
        hair: "curly", hairColor: "#2a1d14", skin: "#8c5a3c",
        top: "shirt", topColor: "#e3b23c", bottom: "jeans", bottomColor: "#26324a",
        extras: ["headphones"], pose: "lean", props: ["speaker", "party-lights"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "elena", mood: "angry",
        line: {
          A: "Una mujer en pijama y abrigo golpea una puerta. Hay música muy fuerte. «¡Son las doce! ¡Mañana trabajo a las seis!»",
          B: "Una mujer con abrigo encima del pijama golpea la puerta de una fiesta. Te ve y te habla. «¿Tú también vives aquí? Esto es imposible. Trabajo a las seis.»",
          C: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra con el bajo. Te mira, exasperada. «Dime que vienes a quejarte tú también, porque yo ya me quedé sin paciencia.»",
        },
        options: [
          {
            id: "apoyar",
            say: { A: "Tiene razón. Es muy tarde. Vamos a hablar con ellos.", B: "Te entiendo perfectamente. ¿Quieres que hablemos juntos con ellos?", C: "Cuenta conmigo. Dos quejas suenan más razonables que una vecina sola en pijama." },
            reply: { A: "Elena respira. «Gracias. Me llamo Elena.» La puerta se abre.", B: "«Gracias. Soy Elena.» En ese momento se abre la puerta y aparece un chico con camisa amarilla.", C: "Elena casi sonríe. «Elena. Y lo del pijama es estrategia: que vean el daño.» La puerta se abre." },
            mood: "neutral", next: "gonzalo",
          },
          {
            id: "calmar",
            say: { A: "Tranquila. ¿Ya habló con ellos?", B: "Tranquila. ¿Has intentado hablar con ellos antes de enfadarte?", C: "Entiendo el enfado, pero a lo mejor, si bajamos un tono, ellos también bajan el suyo." },
            reply: { A: "Elena suspira. «Dos veces. No me escuchan.» Se abre la puerta.", B: "«Dos veces», dice Elena. «La segunda me ofrecieron una bebida.» Se abre la puerta.", C: "«Ya bajé el tono dos veces», dice Elena. «La próxima vez bajo los fusibles.» Se abre la puerta." },
            mood: "worried", next: "gonzalo",
          },
          {
            id: "fiesta",
            say: { A: "Bueno, es viernes. Es normal tener fiestas.", B: "Bueno, es viernes… La gente joven tiene que divertirse un poco, ¿no?", C: "Hombre, es viernes. Prohibir las fiestas un viernes es casi un crimen cultural." },
            reply: { A: "Elena te mira muy seria. «¿Normal? ¡Yo trabajo en un hospital!»", B: "Elena te fulmina con la mirada. «Que se diviertan, pero yo entro al hospital a las seis.»", C: "«Crimen cultural es operar a alguien sin dormir», dice Elena. «Soy enfermera, por cierto.»" },
            mood: "angry", next: "gonzalo",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y propones escribir una nota.", C: "Sacas el lápiz: a veces una nota funciona mejor que un portazo." },
            say: { A: "¿Escribimos una nota para la puerta?", B: "¿Y si les escribimos una nota amable? A veces funciona mejor.", C: "Propongo diplomacia por escrito: una nota educada, con firma y hora de inicio del sueño." },
            reply: { A: "Elena escribe: «Por favor, bajen la música.» La puerta se abre.", B: "Elena escribe rápido y firma. Antes de pegarla, la puerta se abre.", C: "Elena escribe «Por piedad, enfermera madrugadora». Antes de pegarla, la puerta se abre." },
            mood: "neutral", next: "gonzalo",
          },
          libro: {
            act: { A: "Le das tu libro a Elena.", B: "Le ofreces tu libro a Elena.", C: "Le tiendes tu libro con gesto solidario." },
            say: { A: "Mientras espera, puede leer un poco.", B: "Por si la espera es larga. A lo mejor la ayuda a relajarse.", C: "Para la espera. No arregla el ruido, pero le da algo mejor en lo que pensar." },
            reply: { A: "Elena se ríe un poco. «¿Leer? ¿Con esta música?»", B: "Elena se ríe sin querer. «Con este bajo no leo ni la etiqueta del champú.»", C: "«Qué detalle», dice Elena. «Si me duermo leyendo con este ruido, te lo devuelvo firmado.»" },
            mood: "smile", next: "gonzalo",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Te pones nervioso y sacas el gas pimienta.", C: "La puerta se abre de golpe y, por reflejo, levantas el gas pimienta." },
            say: { A: "¡Alto! ¡No se acerque!", B: "¡Alto! ¡Quédate ahí!", C: "¡Quieto ahí! Perdón, ha sido instinto." },
            reply: { A: "El chico de la fiesta grita. «¡Eh! ¡Solo quiero hablar!»", B: "El chico de la fiesta levanta las manos. «¡Tranquilo! ¡Solo quería pedir perdón!»", C: "El chico levanta las manos. «¡Vengo a disculparme! ¿Así reciben las disculpas en este edificio?»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Para hacer una broma, sacas la granada.", C: "Muy mal momento para enseñar la granada, pero la enseñas." },
            say: { A: "¿Qué tal si bajamos la música?", B: "¿Y si bajamos la música antes de que esto explote? Es broma.", C: "Es broma, pero la fiesta podría terminar con un estallido… de sensatez." },
            reply: { A: "Elena grita. La música para. Todos miran.", B: "Elena da un grito. Dentro, la música se corta de golpe y todo el mundo mira hacia la puerta.", C: "Elena retrocede hasta la escalera. La música se apaga sola: veinte personas te miran desde el salón." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al cruzar los brazos, se ve tu pistola.", C: "Al abrir la chaqueta, la pistola queda a la vista de todo el rellano." },
            say: { A: "Hola. Hay un problema con la música.", B: "Hola. Creo que tenemos un problema con la música.", C: "Buenas noches. Venimos a hablar de la música con toda la calma del mundo." },
            reply: { A: "Elena ve la pistola. «¡Ay, no!» Saca el teléfono.", B: "Elena ve la pistola y saca el teléfono, temblando. «Yo… yo llamo a la policía.»", C: "«Con toda la calma del mundo», repite Elena, mirando la pistola. Ya está marcando." },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves un cable del altavoz en el rellano. Sacas el cuchillo.", C: "El cable del altavoz cruza el rellano. Sacas el cuchillo, con una idea poco diplomática." },
            say: { A: "¿Corto el cable de la música?", B: "Si corto este cable, se acaba el problema, ¿no?", C: "Solución técnica: corto el cable y se acaba el debate." },
            reply: { A: "Elena te para. «¡No! Mejor hablamos.» Se abre la puerta.", B: "Elena te sujeta el brazo. «No, no, mejor hablamos, que luego hay que pagar.» Se abre la puerta.", C: "«Tentador», admite Elena, «pero luego la mala soy yo.» En ese momento se abre la puerta." },
            mood: "worried", next: "gonzalo",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Pobre. Está muy cansada, ¿verdad?", B: "Se te ve agotada. ¿Ha sido un día muy largo?", C: "Tienes cara de haber trabajado por tres. ¿Quieres contármelo mientras esperamos?" },
            reply: { A: "Elena sonríe. «Sí. Trabajo en un hospital. Y hoy es mi cumpleaños.»", B: "Elena se relaja. «Doce horas en urgencias. Y hoy es mi cumpleaños, fíjate qué fiesta.»", C: "Elena suelta una risa cansada. «Doce horas de urgencias. Y hoy cumplo cuarenta y cinco. Mira mi fiesta.»" },
            mood: "love", next: "gonzalo",
          },
        },
      },
      gonzalo: {
        who: "gonzalo", mood: "neutral",
        line: {
          A: "Gonzalo, el chico de la fiesta, sale. «¿Qué pasa? Es mi cumpleaños. Solo una noche.»",
          B: "Gonzalo, el anfitrión, cruza los brazos en la puerta. «A ver, es mi cumpleaños. Una noche al año. No es para tanto.»",
          C: "Gonzalo, el anfitrión, se apoya en el marco con cara de defensa preparada. «Es mi cumpleaños. Una noche al año. Creo que el edificio sobrevive.»",
        },
        options: [
          {
            id: "acuerdo",
            say: { A: "Pueden seguir, pero con la música más baja.", B: "¿Y si siguen con la fiesta, pero con la música más baja y sin el bajo?", C: "Propongo un pacto: la fiesta sigue, pero el bajo se jubila a partir de ahora." },
            reply: { A: "Gonzalo piensa. «Bueno… ¿Hasta qué hora?»", B: "Gonzalo duda. «Bueno, podría ser… Pero ¿hasta qué hora?»", C: "Gonzalo se rasca la cabeza. «El bajo es el alma de la fiesta, pero… ¿y la hora?»" },
            mood: "neutral", next: "acuerdo",
          },
          {
            id: "invitar",
            say: { A: "¡Qué casualidad! Hoy es el cumpleaños de Elena también.", B: "¿Sabes que hoy también es el cumpleaños de Elena? Podrías invitarla.", C: "Curioso: hoy también cumple años Elena. A lo mejor el problema es que la fiesta no la incluye." },
            reply: { A: "Gonzalo abre los ojos. «¿En serio? ¡Feliz cumpleaños! Pasa, pasa.»", B: "Gonzalo se queda sorprendido. «¿De verdad? ¡Pues hay tarta para dos! ¿Quieres pasar?»", C: "Gonzalo se ilumina. «¿Mismo día? Eso es el destino. Pasa, que la tarta tiene velas de sobra.»" },
            mood: "surprised", next: "acuerdo",
          },
          {
            id: "duro",
            say: { A: "No. Tienes que parar la música ahora.", B: "Lo siento, pero tienes que apagar la música ya. Hay gente que trabaja.", C: "Mira, esto no se negocia: o apagas ahora, o la noche termina mucho peor para todos." },
            reply: { A: "Gonzalo se enfada. «¿Y tú quién eres? ¡No!»", B: "Gonzalo se pone a la defensiva. «¿Y tú quién eres para darme órdenes? No pienso apagar.»", C: "«¿Mucho peor?», repite Gonzalo, molesto. «¿Me estás amenazando en mi propio cumpleaños?»" },
            mood: "angry", next: "calmar",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Feliz cumpleaños, Gonzalo. ¿Cuántos años tienes?", B: "Feliz cumpleaños. Se nota que tienes buenos amigos ahí dentro.", C: "Feliz cumpleaños. Por el ruido, deduzco que te quiere mucha gente." },
            reply: { A: "Gonzalo sonríe. «Veinticinco. Es mi primera fiesta en este piso. Estoy nervioso.»", B: "Gonzalo baja la guardia. «Es mi primera fiesta aquí. Quería que todo saliera bien y mira…»", C: "Gonzalo se ríe, avergonzado. «Primera fiesta en mi primer piso. Quería impresionar y he impresionado a la vecina.»" },
            mood: "love", next: "acuerdo",
          },
        },
      },
      calmar: {
        who: "gonzalo", mood: "scared",
        line: {
          A: "Hay mucha tensión. Gonzalo y Elena te miran. Nadie habla.",
          B: "El rellano está en silencio. Gonzalo y Elena te miran sin saber qué hacer.",
          C: "El rellano se ha quedado en un silencio que ninguna queja había conseguido. Gonzalo y Elena te miran, inmóviles.",
        },
        options: [
          {
            id: "perdon",
            say: { A: "Perdón. Me equivoqué. Vamos a hablar tranquilos.", B: "Perdonen, me pasé. Empecemos de nuevo y hablemos con calma.", C: "Lo siento, ha sido una entrada desastrosa. Rebobinemos y hablemos como personas." },
            reply: { A: "Gonzalo respira. «Bueno… Está bien.»", B: "Gonzalo suelta el aire. «Bueno… Vale la pena intentarlo, supongo.»", C: "«Rebobinar me parece bien», dice Gonzalo, todavía tenso. Elena asiente." },
            mood: "worried", next: "acuerdo",
          },
          {
            id: "broma",
            say: { A: "¡Era una broma! ¿Feliz cumpleaños?", B: "¡Era una broma! Pésima, ya lo sé. ¿Feliz cumpleaños?", C: "Era humor. Malo, lo reconozco. ¿Me dejas compensarlo cantando el cumpleaños feliz?" },
            reply: { A: "Nadie se ríe. Elena llama a la policía.", B: "Nadie se ríe. Elena ya está hablando por teléfono con la policía.", C: "El silencio se vuelve más espeso. Elena, con el teléfono en la oreja, da la dirección." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy a casa.", B: "Perdonen todo esto. Mejor me voy.", C: "Creo que mi aportación a esta noche ya ha sido suficiente. Me retiro." },
            reply: { A: "Gonzalo cierra la puerta. La música sigue.", B: "Gonzalo cierra la puerta rápido. La música vuelve, igual de fuerte.", C: "Gonzalo cierra de un portazo. Al cabo de un segundo, el bajo vuelve a temblar." },
            mood: "angry", end: "nada",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Yo también quiero una buena fiesta y dormir bien.", B: "Perdonen. Solo quiero que Gonzalo tenga su fiesta y Elena pueda dormir.", C: "Perdón por el drama. Mi único plan era que todos ganaran algo esta noche." },
            reply: { A: "Gonzalo se ríe. «Bueno. Hablamos.»", B: "Gonzalo se ríe, nervioso. «Vaya forma de mediar. Pero bueno, hablemos.»", C: "«Mediador con métodos raros», dice Gonzalo, sonriendo al fin. «Pero vale la pena escucharte.»" },
            mood: "love", next: "acuerdo",
          },
        },
      },
      acuerdo: {
        who: "elena", mood: "neutral",
        line: {
          A: "Elena y Gonzalo te miran. «¿Y entonces? ¿Qué hacemos?»",
          B: "Elena y Gonzalo están más tranquilos. Los dos esperan tu propuesta. «A ver, ¿qué sugieres?»",
          C: "Elena y Gonzalo te miran como si fueras un juez de paz. «Tú dirás», dicen casi a la vez.",
        },
        options: [
          {
            id: "hora",
            say: { A: "Música baja ahora y fin a la una.", B: "Propongo que bajes la música ya y que termine a la una.", C: "Propuesta final: volumen de cena elegante desde ya, y a la una, silencio absoluto." },
            reply: { A: "Gonzalo y Elena dicen que sí. Gonzalo baja la música.", B: "Los dos se miran y aceptan. Gonzalo entra y baja la música.", C: "Tras un segundo de duda, los dos se dan la mano. Gonzalo baja el volumen." },
            mood: "smile", end: "baja",
          },
          {
            id: "pasar",
            say: { A: "Elena, ¿quiere pasar un rato a la fiesta?", B: "Elena, ¿y si entras un rato? Es tu cumpleaños también.", C: "Elena, si no puedes vencer a la fiesta, quizá te convenga unirte a ella diez minutos." },
            reply: { A: "Elena se ríe. «¿En pijama? Bueno… diez minutos.»", B: "Elena duda, mira su pijama y se ríe. «Diez minutos. Y luego, música baja.»", C: "Elena se quita el abrigo. «Diez minutos. Y como pongan reguetón, el que se va eres tú.»" },
            mood: "smile", end: "baila",
          },
          {
            id: "policia",
            say: { A: "No hay acuerdo. Mejor llamamos a la policía.", B: "Creo que es mejor que lo resuelva la policía.", C: "Visto lo visto, que decida alguien con uniforme." },
            reply: { A: "Gonzalo suspira. Elena llama.", B: "Gonzalo protesta, pero Elena ya está llamando.", C: "Gonzalo pone los ojos en blanco. Elena marca con una sonrisa de victoria." },
            mood: "angry", end: "policia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Ustedes dos cumplen años hoy. ¡Es bonito!", B: "Los dos cumplen años hoy. Me parece una señal, ¿no?", C: "Dos cumpleaños, una pared en común. Esto es el principio de una gran amistad vecinal." },
            reply: { A: "Elena y Gonzalo se ríen. Gonzalo trae tarta para ella.", B: "Elena y Gonzalo se ríen. Gonzalo trae un trozo de tarta y le pone una vela.", C: "Gonzalo trae tarta con una vela. Elena la sopla, y la música baja sin que nadie lo pida." },
            mood: "love", end: "baila",
          },
        },
      },
    },
    ends: {
      baja: { text: { A: "La música baja. Elena vuelve a casa y apaga la luz.", B: "La música baja. Elena vuelve a su piso y, por fin, se apaga su luz.", C: "La música baja a un volumen civilizado. Poco después, la ventana de Elena se apaga en paz." }, change: "luz", recap: "Conseguiste que Gonzalo bajara la música." },
      baila: { text: { A: "Elena entra a la fiesta y baila un poco. Todos cantan «Cumpleaños feliz».", B: "Elena entra a la fiesta en pijama y acaba bailando. Cantan el cumpleaños feliz dos veces.", C: "Elena entra en pijama y termina bailando en el centro del salón. Dos cumpleaños, una sola tarta." }, change: "baila", recap: "Elena terminó bailando en la fiesta de Gonzalo." },
      policia: { text: { A: "Llega la policía. La fiesta termina. Gonzalo está triste.", B: "Llega la policía. La fiesta termina antes de tiempo y nadie queda contento.", C: "Llega una patrulla. La fiesta se apaga y el rellano se llena de caras largas." }, change: "policia", recap: "La fiesta de Gonzalo terminó con la policía." },
      nada: { text: { A: "Te vas. La música sigue. Elena vuelve a casa enfadada.", B: "Te vas. La música sigue y Elena vuelve a su piso, furiosa.", C: "Te alejas. La música sigue y Elena sube a su piso pisando cada escalón con rabia." }, change: "enojado", recap: "Te fuiste sin resolver el problema de la música." },
    },
    speak: {
      A1: "¿Escuchas música fuerte en casa?",
      A2: "¿Cuándo fue tu última fiesta y qué hiciste?",
      B1: "¿Cómo reaccionas cuando un vecino hace mucho ruido?",
      B2: "¿Qué harías si un vecino se quejara de tu fiesta?",
      C1: "¿Cómo se puede pedir algo con firmeza sin parecer agresivo?",
      C2: "¿Qué revela un conflicto vecinal sobre nuestra idea del espacio compartido?",
    },
  },
  {
    id: "sur-estacionamiento",
    kind: "escena",
    district: "sur",
    title: "¿Dónde dejé el auto?",
    verb: "AYUDAR",
    goal: "Describir un objeto (color, tamaño, marca), hacer preguntas para recordar, dar indicaciones de lugar y tener paciencia con alguien confundido.",
    cast: [
      {
        id: "emilio", name: "Don Emilio", role: "Señor que busca su auto",
        age: "old", body: "m", build: "slim", height: 1.7,
        hair: "short", hairColor: "#ebe8e2", skin: "#c7a07a",
        top: "coat", topColor: "#6b5a3a", bottom: "pants", bottomColor: "#50473a",
        extras: ["hat", "glasses"], pose: "walk", props: ["car", "parking-ticket"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "emilio", mood: "worried",
        line: {
          A: "En el estacionamiento, un señor muy mayor camina entre los autos. «Perdone… No encuentro mi auto. Estaba aquí, creo.»",
          B: "En el estacionamiento, un señor con sombrero mira cada auto con atención. «Disculpe, joven. Mi auto estaba aquí mismo… o eso creía yo.»",
          C: "Un señor con sombrero recorre el estacionamiento como quien busca a un viejo amigo. «Perdone. Mi auto y yo hemos perdido el contacto. Y no es la primera vez.»",
        },
        options: [
          {
            id: "describir",
            say: { A: "Yo le ayudo. ¿Cómo es su auto?", B: "Le ayudo a buscarlo. ¿Me puede describir cómo es su auto?", C: "Le ayudo encantado. Descríbamelo como si fuera a pedir su mano: color, edad, carácter." },
            reply: { A: "Don Emilio sonríe. «Es azul. No, verde. Es pequeño.»", B: "Don Emilio piensa. «Es azul… o verde. Pequeño, con una abolladura que hizo mi nieto.»", C: "Don Emilio se ríe. «Carácter tranquilo, verde azulado, cuarenta años. Como yo, pero con menos achaques.»" },
            mood: "smile", next: "describir",
          },
          {
            id: "ticket",
            say: { A: "¿Tiene el ticket? Ahí dice el piso.", B: "¿Todavía tiene el ticket? A lo mejor dice en qué piso lo dejó.", C: "¿Conserva el ticket? A veces esos papelitos saben más que nosotros." },
            reply: { A: "Don Emilio busca en el abrigo. «¡Aquí está! Pero no veo bien.»", B: "Don Emilio rebusca en todos los bolsillos. «¡Aquí! Pero sin mis gafas de cerca no leo nada.»", C: "Tras revisar cinco bolsillos, Don Emilio saca el ticket. «Aquí está. Las gafas de leer, en cambio, están en el auto.»" },
            mood: "neutral", next: "piso",
          },
          {
            id: "familia",
            say: { A: "¿Quiere llamar a alguien de su familia?", B: "¿No prefiere llamar a alguien de su familia para que venga?", C: "¿Hay alguien a quien podamos llamar? No por nada, solo para tener refuerzos." },
            reply: { A: "Don Emilio niega. «No, no. Mi hija se preocupa mucho.»", B: "Don Emilio se pone serio. «No, si llamo a mi hija, me quita el auto. Lleva meses diciéndolo.»", C: "«Refuerzos, no», dice Don Emilio. «Mi hija lleva meses buscando una excusa para quitarme las llaves.»" },
            mood: "worried", next: "describir",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y le das un papel.", C: "Sacas el lápiz y le ofreces el reverso de un recibo." },
            say: { A: "¿Puede dibujar su auto?", B: "¿Y si dibuja su auto? A lo mejor así lo recuerda mejor.", C: "Hagamos un retrato robot del auto. Dibuje lo que recuerde." },
            reply: { A: "Don Emilio dibuja un auto pequeño con una flor. «Así es.»", B: "Don Emilio dibuja con cuidado. Le pone una flor en el techo. «Mi nieta le pegó una pegatina.»", C: "Don Emilio dibuja con pulso firme y añade una margarita en el techo. «La pegatina de mi nieta. Es su firma.»" },
            mood: "smile", next: "describir",
          },
          libro: {
            act: { A: "Le das tu libro.", B: "Le prestas tu libro como lupa improvisada… no funciona.", C: "Le ofreces tu libro, sin un plan muy claro." },
            say: { A: "Tome. Puede sentarse y descansar un poco.", B: "Siéntese un momento y descanse. Mientras, yo busco.", C: "Siéntese aquí con el libro. Yo hago de detective y usted de testigo." },
            reply: { A: "Don Emilio se sienta. «Gracias. Me duelen los pies.»", B: "Don Emilio se sienta en un bordillo. «Gracias. Llevo media hora dando vueltas.»", C: "«Testigo, me gusta», dice Don Emilio, sentándose. «Aunque no recuerdo qué vi.»" },
            mood: "smile", next: "describir",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Un señor sale de la sombra y, asustado, sacas el gas pimienta.", C: "Una figura surge entre dos columnas y tu mano encuentra el gas pimienta antes que tu cabeza." },
            say: { A: "¡No se acerque!", B: "¡Quieto! ¿Qué hace aquí a estas horas?", C: "¡Quieto ahí! Perdone, pero los estacionamientos de noche me ponen nervioso." },
            reply: { A: "Don Emilio levanta las manos. «¡Solo busco mi auto!»", B: "Don Emilio levanta las manos, temblando. «¡Solo busco mi auto, hijo! ¡Un auto verde!»", C: "Don Emilio levanta las manos despacio. «A mí también, hijo. Por eso busco el auto, para irme.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Para buscar las llaves del señor, vacías tus bolsillos… y sale la granada.", C: "Vacías tus bolsillos para ayudar a buscar y la granada rueda hasta los pies del señor." },
            say: { A: "¡Perdón! Esto no es nada.", B: "¡Perdón! No se preocupe, eso no es nada.", C: "Ignore eso, por favor. Es… un llavero muy aparatoso." },
            reply: { A: "Don Emilio la mira. «¿Es una pera?» No ve bien.", B: "Don Emilio se agacha y la mira de cerca. «¿Es un aguacate? No veo nada sin gafas.»", C: "Don Emilio la recoge con curiosidad. «¿Un aguacate? Está muy duro. Debería dejarlo madurar.»" },
            mood: "surprised", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al abrir la chaqueta, se ve tu pistola.", C: "La pistola asoma por tu chaqueta bajo los fluorescentes." },
            say: { A: "¿Puedo ayudarle?", B: "¿Necesita ayuda con algo?", C: "Buenas noches. ¿Busca algo?" },
            reply: { A: "Don Emilio ve la pistola. «¡Ay! No tengo dinero, hijo.»", B: "Don Emilio retrocede contra una columna. «No llevo dinero, hijo. Solo un ticket.»", C: "Don Emilio palidece y te ofrece el ticket. «Es todo lo que llevo. Cubre doce horas de estacionamiento.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves que Don Emilio no puede abrir un caramelo. Sacas el cuchillo.", C: "El señor pelea con el envoltorio de un caramelo. Sacas el cuchillo para ayudar." },
            say: { A: "¿Le abro el caramelo?", B: "¿Quiere que le abra eso? Así descansa un poco.", C: "Permítame. Esos envoltorios están diseñados por enemigos de la humanidad." },
            reply: { A: "Don Emilio se asusta un poco. «Eh… sí, gracias.»", B: "Don Emilio duda al ver el cuchillo, pero acepta. «Gracias. El azúcar me ayuda a pensar.»", C: "Don Emilio da un respingo, pero acaba sonriendo. «Gracias. Con azúcar me vuelve la memoria.»" },
            mood: "worried", next: "describir",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No se preocupe. Vamos a encontrarlo juntos.", B: "No se preocupe, que lo vamos a encontrar. Tenemos toda la noche.", C: "Tranquilo. Los autos no se van de paseo solos. Lo encontraremos." },
            reply: { A: "Don Emilio sonríe. «Gracias. El auto era de mi esposa. Es muy importante.»", B: "Don Emilio se emociona. «Gracias. Era el auto de mi Rosa. Por eso no quiero perderlo.»", C: "Don Emilio baja la mirada. «Era de mi Rosa. Cada vez que lo pierdo, siento que la pierdo un poco a ella.»" },
            mood: "love", next: "describir",
          },
        },
      },
      calmar: {
        who: "emilio", mood: "scared",
        line: {
          A: "Don Emilio está nervioso. Mira la salida.",
          B: "Don Emilio está muy nervioso. Mira hacia la salida y se aprieta el sombrero.",
          C: "Don Emilio calcula la distancia hasta la salida con la expresión de alguien que ya no corre desde 1980.",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Perdón. No pasa nada. Solo quiero ayudar.", B: "Perdone el susto. De verdad, solo quiero ayudarle a encontrar su auto.", C: "Perdone, ha sido una presentación desastrosa. Empecemos otra vez: solo quiero ayudarle." },
            reply: { A: "Don Emilio respira. «Bueno… Mi auto es verde.»", B: "Don Emilio se calma poco a poco. «Bueno… Es verde. O azul. Pequeño.»", C: "Don Emilio se arregla el sombrero. «De acuerdo. Empecemos otra vez. Mi auto es… verdoso.»" },
            mood: "worried", next: "describir",
          },
          {
            id: "guardia",
            say: { A: "Voy a buscar al guardia. Él le ayuda.", B: "Mejor voy a buscar al vigilante. Él conoce el estacionamiento.", C: "Creo que alguien con uniforme le va a inspirar más confianza que yo ahora mismo." },
            reply: { A: "Don Emilio asiente. El guardia llama a la policía.", B: "Don Emilio asiente. El vigilante te ve y, por si acaso, llama a la policía.", C: "Don Emilio asiente con alivio. El vigilante, al verte, prefiere llamar a la policía." },
            mood: "worried", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdóneme. Lo dejo tranquilo.", C: "Creo que lo mejor que puedo hacer por usted es desaparecer. Perdone." },
            reply: { A: "Don Emilio no dice nada.", B: "Don Emilio asiente, todavía nervioso.", C: "Don Emilio no contesta. Solo te ve marchar." },
            mood: "sad", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Usted parece muy buena persona.", B: "Perdóneme. Me recuerda a mi abuelo, que también pierde todo.", C: "Disculpe. Mi abuelo también busca su auto cada domingo. Y siempre está donde lo dejó." },
            reply: { A: "Don Emilio se ríe. «¿Tu abuelo también? Bueno. Vamos a buscar.»", B: "Don Emilio se ríe. «¡Somos un club! Bueno, vamos a buscarlo.»", C: "«Un club muy exclusivo», dice Don Emilio, ya sonriendo. «Venga, búsqueme ese auto.»" },
            mood: "love", next: "describir",
          },
        },
      },
      describir: {
        who: "emilio", mood: "neutral",
        line: {
          A: "Hay muchos autos. Don Emilio mira todos. «¿Este? No… ¿Ese?»",
          B: "Recorren una fila de autos. Don Emilio se para delante de cada uno. «Este no tiene flor… Ese es demasiado grande…»",
          C: "Recorren la fila con paciencia. Don Emilio saluda a cada auto como a un desconocido que le resulta familiar.",
        },
        options: [
          {
            id: "flor",
            say: { A: "¡Mire! Ese auto verde tiene una flor.", B: "¡Mire allí! Un auto verde pequeño con una flor en el techo.", C: "Don Emilio, creo que una margarita nos está saludando desde el fondo." },
            reply: { A: "Don Emilio grita. «¡Sí! ¡Es mi auto!»", B: "Don Emilio se lleva las manos a la cara. «¡Es él! ¡Mi pequeño!»", C: "Don Emilio camina hacia el auto con los brazos abiertos. «¡Ahí estabas, traidor!»" },
            mood: "love", end: "encontrado",
          },
          {
            id: "piso",
            say: { A: "Aquí no está. ¿Vamos a otro piso?", B: "Aquí no está. ¿No será que lo dejó en otro piso?", C: "Quizá el problema no es el auto, sino el piso. ¿Probamos un nivel más arriba?" },
            reply: { A: "Don Emilio piensa. «¿Otro piso? Puede ser.»", B: "Don Emilio se rasca la cabeza. «¿Otro piso? Puede ser, todos son iguales.»", C: "«Todos los pisos son idénticos», protesta Don Emilio. «Es un diseño para confundir a jubilados.»" },
            mood: "neutral", next: "piso",
          },
          {
            id: "taxi",
            say: { A: "Es tarde. ¿Por qué no toma un taxi?", B: "Ya es muy tarde. ¿Y si toma un taxi y mañana lo busca de día?", C: "Le propongo una retirada estratégica: taxi ahora y búsqueda con luz natural mañana." },
            reply: { A: "Don Emilio está triste. «Bueno… Mañana vuelvo.»", B: "Don Emilio suspira. «Tiene razón. Pero no le diga nada a mi hija.»", C: "«Retirada estratégica», repite Don Emilio. «Suena mejor que rendirse. Acepto.»" },
            mood: "sad", end: "taxi",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Cuénteme de su esposa. ¿Cómo era?", B: "Hábleme de Rosa. ¿Ella conducía este auto?", C: "Hábleme de ella mientras buscamos. ¿Cómo conducía Rosa?" },
            reply: { A: "Don Emilio sonríe. «Rosa cantaba en el auto. Siempre.» Y señala un auto verde. «¡Ahí!»", B: "«Cantaba boleros a todo volumen», dice Don Emilio. De pronto señala. «¡Ahí está! ¡La flor!»", C: "«Fatal, y cantando boleros», ríe Don Emilio. Y de repente se detiene. «Ahí. La margarita. Es él.»" },
            mood: "love", end: "encontrado",
          },
        },
      },
      piso: {
        who: "emilio", mood: "neutral",
        line: {
          A: "Miran el ticket. Dice: «Piso 3». Don Emilio se ríe. «¡Estamos en el piso 2!»",
          B: "En el ticket se lee: «Nivel 3, zona C». Don Emilio se ríe. «¡Y yo buscando en el 2 desde hace media hora!»",
          C: "El ticket es claro: nivel 3, zona C. Don Emilio contempla el número como quien descubre que llevaba las gafas puestas.",
        },
        options: [
          {
            id: "subir",
            say: { A: "Vamos al piso 3. Yo le acompaño.", B: "Subamos juntos al tercero. Despacio, que no hay prisa.", C: "Subamos al tercero. Con calma, que el auto, al parecer, sí sabe esperar." },
            reply: { A: "En el piso 3, ven el auto verde. «¡Ahí está!»", B: "En el tercer piso, el auto verde los espera. Don Emilio aplaude.", C: "En el tercer nivel, un auto verde con una margarita los espera con dignidad." },
            mood: "love", end: "encontrado",
          },
          {
            id: "nieto",
            say: { A: "¿Llamamos a su nieto? Él puede venir.", B: "¿Por qué no llamamos a su nieto? Así no conduce solo tan tarde.", C: "¿Y si llamamos a su nieto? Conducir a medianoche después de esta aventura no me parece buena idea." },
            reply: { A: "Don Emilio acepta. «Bueno. Mi nieto es simpático.»", B: "Don Emilio lo piensa y asiente. «Mi nieto sí. Él no se lo cuenta a mi hija.»", C: "«Mi nieto es discreto», dice Don Emilio. «Hay pactos que se saltan una generación.»" },
            mood: "smile", end: "nieto",
          },
          {
            id: "solo",
            say: { A: "Suba usted. Yo tengo que irme.", B: "Suba usted al tercero, que yo tengo que irme. ¿Puede solo?", C: "Le dejo en buenas manos: las suyas. Tercer piso, zona C. ¿Se las arregla?" },
            reply: { A: "Don Emilio dice que sí. «Gracias, hijo.»", B: "«Claro que puedo», dice Don Emilio, un poco ofendido. «Gracias igual.»", C: "«Me las arreglo desde antes de que usted naciera», dice Don Emilio, con una sonrisa digna." },
            mood: "neutral", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted es muy divertido, Don Emilio.", B: "Me encanta su sentido del humor, Don Emilio.", C: "Con usted, perderse en un estacionamiento es casi un plan." },
            reply: { A: "Don Emilio te abraza. «Ven conmigo. Te llevo a casa.»", B: "Don Emilio te da un abrazo. «Sube, que te llevo. Pero tú me dices dónde está la salida.»", C: "Don Emilio te abraza con fuerza. «Le llevo a casa. Usted navega, yo conduzco, y Rosa canta desde arriba.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
    },
    ends: {
      encontrado: { text: { A: "Don Emilio abre su auto. Te da un caramelo y se va despacio.", B: "Don Emilio abre su auto, te regala un caramelo de menta y sale despacio del estacionamiento.", C: "Don Emilio se despide con un caramelo de menta y sale a diez por hora, tocando la bocina dos veces." }, change: "sonrie", recap: "Encontraste el auto de Don Emilio." },
      taxi: { text: { A: "Llamas un taxi. Don Emilio sube y te dice adiós.", B: "Pides un taxi. Don Emilio sube y, desde la ventanilla, te dice adiós con el sombrero.", C: "Pides un taxi. Don Emilio sube con la dignidad de un general que se retira a tiempo." }, change: "se-va", recap: "Ayudaste a Don Emilio a volver a casa en taxi." },
      nieto: { text: { A: "Don Emilio llama a su nieto. Esperas con él. Su nieto llega pronto.", B: "Don Emilio llama a su nieto, que llega en veinte minutos. Mientras tanto, te cuenta de Rosa.", C: "Don Emilio llama a su nieto. La espera se llena de historias de Rosa y boleros desafinados." }, change: "llama", recap: "Esperaste con Don Emilio a que llegara su nieto." },
      abrazo: { text: { A: "Don Emilio te lleva en su auto. Escuchan boleros.", B: "Don Emilio te lleva en su auto verde. Ponen boleros y cantan los dos.", C: "Don Emilio te lleva en su auto verde, con boleros a todo volumen. Rosa estaría orgullosa." }, change: "abraza", recap: "Don Emilio te llevó en su auto con boleros." },
      policia: { text: { A: "Llega la policía. Explicas todo. Ellos encuentran el auto.", B: "Llega la policía. Tras explicar el malentendido, un agente encuentra el auto de Don Emilio.", C: "Llega una patrulla. Entre explicaciones, un agente encuentra el auto: tercer piso, zona C." }, change: "policia", recap: "Un malentendido con Don Emilio terminó con la policía." },
      solo: { text: { A: "Te vas. Don Emilio sigue buscando su auto.", B: "Te vas. Don Emilio sigue caminando entre los autos, despacio.", C: "Te alejas. Al fondo, Don Emilio sigue su búsqueda con paciencia infinita." }, change: "sigue", recap: "Dejaste a Don Emilio buscando su auto." },
    },
    speak: {
      A1: "¿De qué color es tu coche o el coche de tu familia?",
      A2: "¿Qué hiciste la última vez que te perdiste?",
      B1: "¿Cómo te orientas en un lugar que no conoces?",
      B2: "¿Cómo ayudarías a una persona mayor que está confundida?",
      C1: "¿Qué distingue la paciencia de la condescendencia cuando ayudas a alguien?",
      C2: "¿Qué papel juegan los objetos en nuestra manera de recordar a las personas?",
    },
  },
  {
    id: "galpones-fabrica",
    kind: "escena",
    district: "galpones",
    title: "En la puerta de La Fábrica",
    verb: "ENTRAR",
    requires: "fiesta-fabrica",
    goal: "Presentarse, explicar un malentendido, insistir con educación, negociar y convencer con encanto o con argumentos.",
    cast: [
      {
        id: "yolanda", name: "Yolanda", role: "Portera de La Fábrica",
        age: "adult", body: "f", build: "athletic", height: 1.78,
        hair: "braids", hairColor: "#0e0b0a", skin: "#4a2e22",
        top: "jacket", topColor: "#141414", bottom: "pants", bottomColor: "#1c1c1c",
        extras: ["earrings", "headphones"], pose: "arms", props: ["guest-list", "rope-barrier"],
      },
      {
        id: "leire", name: "Leire", role: "Amiga de la boda",
        age: "young", body: "f", build: "slim", height: 1.7,
        hair: "long", hairColor: "#1d1512", skin: "#f0cba8",
        top: "dress", topColor: "#b0243f", bottom: "skirt", bottomColor: "#b0243f",
        extras: ["earrings"], pose: "wave",
      },
      {
        id: "oscar", name: "Óscar", role: "Amigo de la boda",
        age: "young", body: "m", build: "athletic", height: 1.85,
        hair: "buzz", hairColor: "#141010", skin: "#6e4a33",
        top: "shirt", topColor: "#f2efe8", bottom: "pants", bottomColor: "#2a2d36",
        extras: [], pose: "dance",
      },
      {
        id: "mavi", name: "Mavi", role: "Amiga de la boda",
        age: "adult", body: "f", build: "heavy", height: 1.6,
        hair: "curly", hairColor: "#7a2f1d", skin: "#d8a57c",
        top: "dress", topColor: "#2f6a5a", bottom: "skirt", bottomColor: "#2f6a5a",
        extras: ["bag"], pose: "wave",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "yolanda", mood: "neutral",
        line: {
          A: "En la puerta de La Fábrica, una portera mira una lista. «¿Nombre?» Busca… «No estás en la lista.»",
          B: "La puerta de La Fábrica vibra con el bajo. La portera repasa la lista con el dedo. «Lo siento. Tu nombre no aparece.»",
          C: "El bajo de La Fábrica hace temblar la acera. La portera recorre la lista sin prisa y levanta la vista. «Pues no. No existes. Al menos, en este papel.»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Vengo con mis amigos de la boda. Están dentro.", B: "Mis amigos de la boda están dentro. Me dijeron que me apuntaron.", C: "Debe de haber un error. Unos amigos de la boda me juraron que estaba en la lista." },
            reply: { A: "Yolanda levanta una ceja. «Todos dicen eso.»", B: "Yolanda no se inmuta. «Eso me lo dicen veinte personas por noche.»", C: "«Me lo juran unos cuarenta por noche», dice Yolanda. «Y casi todos tienen amigos imaginarios.»" },
            mood: "neutral", next: "negociar",
          },
          {
            id: "gritar",
            say: { A: "¡Leire! ¡Óscar! ¡Mavi! ¡Estoy aquí!", B: "Espera, que los llamo. ¡Leire! ¡Óscar! ¡Mavi!", C: "Permíteme invocar a mis testigos. ¡Leire! ¡Óscar! ¡Mavi!" },
            reply: { A: "Desde dentro, alguien grita tu nombre. ¡Son tus amigos!", B: "Tres cabezas asoman por la puerta. «¡Es nuestro amigo! ¡Déjalo pasar!»", C: "Tres voces responden desde dentro, desafinadas y felices. Yolanda cierra los ojos un segundo." },
            mood: "surprised", next: "amigos",
          },
          {
            id: "aceptar",
            say: { A: "Bueno. ¿Puedo esperar aquí?", B: "Entiendo. ¿Puedo esperar aquí mientras les escribo?", C: "De acuerdo, no discuto con una lista. ¿Me dejas esperar aquí mientras lo resuelvo?" },
            reply: { A: "Yolanda sonríe un poco. «Sí. Gracias por no gritar.»", B: "Yolanda asiente, sorprendida. «Claro. Gracias por no montar un drama. Eres el primero hoy.»", C: "Yolanda casi sonríe. «Por fin alguien razonable. Espera, que eso aquí cotiza alto.»" },
            mood: "smile", next: "negociar",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y señalas la lista.", C: "Sacas el lápiz con aire de notario." },
            say: { A: "¿Escribo mi nombre en la lista?", B: "¿Y si escribo mi nombre al final? Nadie se va a dar cuenta.", C: "Propongo una pequeña corrección administrativa. Añado mi nombre y aquí no ha pasado nada." },
            reply: { A: "Yolanda se ríe. «No. Buen intento.»", B: "Yolanda tapa la lista con la mano. «Buen intento. Muy bueno, incluso. Pero no.»", C: "Yolanda se ríe de verdad. «Corrección administrativa. Me la apunto para usarla. Pero no.»" },
            mood: "smile", next: "negociar",
          },
          libro: {
            act: { A: "Le enseñas tu libro.", B: "Le enseñas tu libro, con tu nombre en la primera página.", C: "Abres el libro por la primera página, donde está tu nombre escrito a mano." },
            say: { A: "Mira. Este es mi nombre. Soy yo.", B: "Mira, aquí está mi nombre. Es por si buscas con otra ortografía.", C: "Prueba documental: mi nombre, con buena letra. A lo mejor en la lista está mal escrito." },
            reply: { A: "Yolanda mira la lista otra vez. «Mmm… Hay un nombre parecido.»", B: "Yolanda vuelve a la lista. «Hay uno parecido, mal escrito. Puede ser… o no.»", C: "Yolanda compara con calma. «Hay algo parecido, escrito por alguien muy feliz. Sigue sin convencerme.»" },
            mood: "neutral", next: "negociar",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Yolanda da un paso hacia ti y sacas el gas pimienta.", C: "Yolanda se acerca y, por reflejo, levantas el gas pimienta. Mala decisión." },
            say: { A: "¡No me toques!", B: "¡Eh, no te acerques tanto!", C: "Perdona, pero no me gusta que me invadan el espacio." },
            reply: { A: "Yolanda da un paso atrás. «¡Eh! ¡Tranquilo! Llamo a seguridad.»", B: "Yolanda se cubre la cara. «¿Gas? ¿En serio? Ahora sí que no entras.»", C: "«¿Mi espacio o el tuyo?», dice Yolanda, apartándose. Habla por la radio: «Necesito apoyo en la puerta.»" },
            mood: "angry", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Como broma, sacas la granada.", C: "Para romper el hielo, sacas la granada. El hielo no se rompe." },
            say: { A: "Es mi entrada. ¿Puedo pasar?", B: "¿Esto cuenta como entrada VIP?", C: "Traigo algo para animar la fiesta. Es broma, es broma." },
            reply: { A: "Yolanda grita. La gente de la cola corre.", B: "La cola entera se dispersa. Yolanda se pone delante de la puerta. «¡Atrás!»", C: "La cola se evapora en tres segundos. Yolanda, impasible, aprieta el botón de la radio." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "En el detector de la puerta, se ve tu pistola.", C: "El detector de la puerta pita. Yolanda mira tu cintura." },
            say: { A: "Perdón. ¿Puedo pasar?", B: "Perdona. ¿Puedo pasar igual?", C: "Bueno, eso tiene una explicación sencilla. Más o menos." },
            reply: { A: "Yolanda pone la mano en la puerta. «No. Imposible.»", B: "Yolanda cierra la cuerda. «Con eso no entras ni al baño. Y estoy llamando a la policía.»", C: "«Seguro que sí», dice Yolanda, ya con la radio en la boca. «Cuéntasela a la policía.»" },
            mood: "angry", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves que la pulsera de papel de Yolanda está enganchada. Sacas el cuchillo.", C: "La cinta de la barrera está enredada. Sacas el cuchillo, con intención de ayudar." },
            say: { A: "La cinta está mal. ¿La corto?", B: "La cinta de la barrera está enredada. ¿Quieres que la corte?", C: "Esa cinta te está saboteando el trabajo. ¿La libero?" },
            reply: { A: "Yolanda da un paso atrás. «¡Guarda eso!»", B: "Yolanda da un paso atrás. «Guarda eso ahora mismo. Despacio.»", C: "«Lo que vas a liberar es mi paciencia», dice Yolanda, muy seria. «Guárdalo.»" },
            mood: "angry", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tu trabajo es difícil, ¿verdad? Mucha gente, mucho ruido.", B: "Debe de ser agotador decir que no a tanta gente cada noche.", C: "Tiene que ser duro ser la mala de la película todas las noches." },
            reply: { A: "Yolanda sonríe. «Sí. Y nadie me da las gracias. Gracias a ti.»", B: "Yolanda baja la guardia. «Nadie me lo pregunta nunca. Por cierto, hay una puerta trasera…»", C: "Yolanda se ríe. «La mala, sí. Aunque a veces la mala sabe que hay una puerta trasera.»" },
            mood: "love", next: "negociar",
          },
        },
      },
      negociar: {
        who: "yolanda", mood: "neutral",
        line: {
          A: "Yolanda cruza los brazos. «Si quieres entrar, necesito una razón.»",
          B: "Yolanda te mira de arriba abajo. «A ver. Convénceme. Tienes un minuto.»",
          C: "Yolanda consulta el reloj con gesto teatral. «Tienes sesenta segundos. Sorpréndeme.»",
        },
        options: [
          {
            id: "boda",
            say: { A: "Fui a la boda de mis amigos. Esta es la fiesta después.", B: "Vengo de una boda. Mis amigos están dentro y me esperan para bailar.", C: "Vengo de una boda en la que lloré tres veces. Me merezco bailar, ¿no te parece?" },
            reply: { A: "Yolanda se ríe. «Una boda. Bueno. ¿Cómo se llama la novia?»", B: "Yolanda sonríe a medias. «Una boda. Bien. Dime el nombre de la novia.»", C: "«Tres veces», repite Yolanda. «Conmovedor. ¿Y la novia se llamaba…?»" },
            mood: "smile", next: "amigos",
          },
          {
            id: "pagar",
            say: { A: "¿Puedo pagar la entrada?", B: "¿Y si pago la entrada normal? No hace falta lista.", C: "Estoy dispuesto a pasar de invitado a cliente. ¿Cuánto cuesta la dignidad?" },
            reply: { A: "Yolanda niega. «Hoy no. Es una fiesta privada.»", B: "«Hoy es privada», dice Yolanda. «Ni pagando. Pero si alguien de dentro responde por ti…»", C: "«Hoy la dignidad no se vende», dice Yolanda. «Pero alguien de dentro podría avalarte.»" },
            mood: "neutral", next: "amigos",
          },
          {
            id: "rendirse",
            say: { A: "Está bien. Me quedo fuera.", B: "Bueno, no pasa nada. Me quedo fuera y escucho la música desde aquí.", C: "Me rindo con elegancia. Desde aquí el bajo también se siente, aunque sea en los pies." },
            reply: { A: "Yolanda asiente. «Lo siento. Buenas noches.»", B: "Yolanda asiente. «Lo siento de verdad. Quizá otra noche.»", C: "Yolanda te mira con respeto. «Rendirse con elegancia también es un arte.»" },
            mood: "sad", end: "fuera",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Me gustan tus trenzas. ¿Tú también bailas?", B: "Seguro que bailas mejor que todos los de dentro.", C: "Algo me dice que, cuando nadie mira, tú eres la reina de la pista." },
            reply: { A: "Yolanda se ríe. «Antes bailaba mucho. Bueno, pasa. Rápido.»", B: "Yolanda se ríe. «Antes bailaba salsa en competiciones. Anda, pasa, antes de que me arrepienta.»", C: "Yolanda suelta una carcajada. «Campeona regional de salsa, 2015. Pasa, anda. Y no se lo cuentes a nadie.»" },
            mood: "love", end: "dentro",
          },
        },
      },
      amigos: {
        who: "leire", mood: "smile",
        line: {
          A: "Leire, Óscar y Mavi salen a la puerta. «¡Es nuestro amigo! ¡Déjalo pasar, por favor!»",
          B: "Leire, Óscar y Mavi aparecen en la puerta, sudando de bailar. «¡Yolanda, es de los nuestros! ¡Estaba en la boda!»",
          C: "Leire, Óscar y Mavi se asoman a la puerta como un coro griego con purpurina. «¡Viene con nosotros! ¡Responde por sí mismo!»",
        },
        options: [
          {
            id: "cancion",
            say: { A: "¿Cómo se llama la novia? ¡Es Lucía!", B: "La novia se llama Lucía y bailó la canción de su abuela. ¿Suficiente?", C: "La novia es Lucía, el novio lloró en el brindis y Mavi cantó sin que nadie se lo pidiera." },
            reply: { A: "Mavi grita. «¡Sí! ¡Es verdad!» Yolanda se ríe y abre la cuerda.", B: "Mavi aplaude. «¡Es verdad, canté!» Yolanda se ríe y abre la cuerda.", C: "Mavi se lleva la mano al pecho, ofendida y feliz. Yolanda abre la cuerda sin decir nada." },
            mood: "love", end: "dentro",
          },
          {
            id: "salir",
            say: { A: "¿Por qué no salen ustedes? Bailamos aquí.", B: "¿Y si salen ustedes? Podemos bailar aquí fuera, en la acera.", C: "Propuesta alternativa: la fiesta sale a la acera y Yolanda no tiene que romper ninguna regla." },
            reply: { A: "Óscar se ríe. «¡Buena idea!» Todos salen a bailar fuera.", B: "Óscar se ríe y sale a la acera. «¡Música, maestro!» Leire y Mavi lo siguen.", C: "Óscar ya está bailando en la acera antes de que termines la frase. Yolanda menea la cabeza." },
            mood: "smile", end: "acera",
          },
          {
            id: "irse",
            say: { A: "Gracias, pero estoy cansado. Me voy a casa.", B: "Gracias, de verdad, pero creo que me voy a casa. Estoy agotado.", C: "Los quiero, pero mis pies presentaron su dimisión hace una hora. Me voy a casa." },
            reply: { A: "Leire te abraza. «¡Escríbenos!»", B: "Leire te da un abrazo. «Escríbenos cuando llegues, ¿eh?»", C: "Leire te abraza con fuerza. «Dimisión aceptada. Escribe al llegar.»" },
            mood: "sad", end: "fuera",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Leire, Óscar, Mavi: ¡los quiero mucho!", B: "Chicos, ustedes son lo mejor de esta noche, en serio.", C: "Que conste que la boda sin ustedes habría sido un trámite." },
            reply: { A: "Leire llora un poco. «¡Ay, y nosotros a ti!» Yolanda abre la cuerda.", B: "Leire se emociona y Mavi te pellizca la mejilla. Hasta Yolanda sonríe y abre la cuerda.", C: "Leire se emociona, Óscar finge que no, Mavi te besa la frente. Yolanda abre la cuerda, conmovida." },
            mood: "love", end: "dentro",
          },
        },
      },
      calmar: {
        who: "yolanda", mood: "angry",
        line: {
          A: "Yolanda habla por la radio. La cola está muy callada.",
          B: "Yolanda habla por la radio sin quitarte los ojos de encima. La cola entera está en silencio.",
          C: "Yolanda murmura algo por la radio. La cola, que hace un minuto cantaba, ahora estudia el suelo.",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Lo siento mucho. Fue un error. Lo guardo.", B: "Lo siento muchísimo. Ha sido una estupidez. Ya lo guardé.", C: "Te pido disculpas. Ha sido una idiotez de proporciones épicas. Está guardado." },
            reply: { A: "Yolanda respira. «Bueno. Pero tú no entras.»", B: "Yolanda respira hondo. «Bien. Pero esta noche no entras. Lo entiendes, ¿no?»", C: "«Disculpa aceptada», dice Yolanda, «entrada denegada. Las dos cosas son compatibles.»" },
            mood: "neutral", end: "fuera",
          },
          {
            id: "amigos",
            say: { A: "¡Leire! ¡Óscar! ¡Ayuda, por favor!", B: "¡Leire! ¡Óscar! ¡Mavi! ¡Salgan, por favor, explíquenle quién soy!", C: "Solicito testigos de carácter. ¡Leire! ¡Óscar! ¡Mavi!" },
            reply: { A: "Tus amigos salen. Hablan mucho con Yolanda.", B: "Tus amigos salen corriendo y hablan todos a la vez con Yolanda.", C: "Tus amigos salen en tromba y defienden tu honor con más entusiasmo que argumentos." },
            mood: "neutral", next: "amigos",
          },
          {
            id: "insistir",
            say: { A: "Pero yo quiero entrar. Es mi fiesta también.", B: "Pero yo tengo derecho a entrar. Mis amigos están dentro.", C: "Con todo respeto, sigo considerando que tengo derecho a entrar." },
            reply: { A: "Yolanda no contesta. Llega la policía.", B: "Yolanda no contesta. Una patrulla se detiene en la esquina.", C: "«Considéralo con ellos», dice Yolanda, señalando la patrulla que acaba de llegar." },
            mood: "angry", end: "policia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, Yolanda. Hoy estoy nervioso. Fue un día muy largo.", B: "Perdóname, Yolanda. Llevo todo el día nervioso por la boda y me he pasado.", C: "Perdóname. Entre la boda y las emociones, hoy no soy mi mejor versión." },
            reply: { A: "Yolanda sonríe. «Bueno. Todos tenemos días malos. Espera aquí.»", B: "Yolanda suaviza la cara. «Todos tenemos noches así. Espera, que llamo a tus amigos.»", C: "«Ni yo soy la mía a estas horas», dice Yolanda, sonriendo. «Espera, que llamo a tus testigos.»" },
            mood: "love", next: "amigos",
          },
        },
      },
    },
    ends: {
      dentro: { text: { A: "Entras a La Fábrica. Tus amigos te abrazan y bailan contigo.", B: "Entras en La Fábrica. Leire, Óscar y Mavi te arrastran a la pista y bailan contigo hasta tarde.", C: "Cruzas la puerta de La Fábrica y la música te engulle. Tus amigos te reciben como a un héroe de guerra." }, change: "baila", recap: "Entraste en La Fábrica y bailaste con tus amigos." },
      acera: { text: { A: "Todos bailan en la acera. Yolanda también mueve un poco los pies.", B: "La fiesta sale a la acera. Al final, hasta Yolanda mueve los pies al ritmo del bajo.", C: "La acera se convierte en pista. Yolanda finge vigilar, pero sus pies la delatan." }, change: "baila", recap: "Bailaste con tus amigos en la acera de La Fábrica." },
      fuera: { text: { A: "Te quedas fuera. La música sigue dentro.", B: "Te quedas fuera. A través de la pared, el bajo sigue sonando.", C: "Te quedas fuera, con el bajo latiendo a través de los ladrillos como un corazón ajeno." }, change: "sigue", recap: "Te quedaste fuera de La Fábrica." },
      policia: { text: { A: "Llega la policía. Explicas todo. Esta noche no bailas.", B: "Llega la policía. Pasas un buen rato explicando el malentendido. Adiós a la fiesta.", C: "Una patrulla se detiene en la puerta. Tu noche de baile se convierte en una larga conversación." }, change: "policia", recap: "Tu noche en La Fábrica terminó con la policía." },
    },
    speak: {
      A1: "¿Qué te gusta hacer en una fiesta?",
      A2: "¿Adónde fuiste la última vez que saliste a bailar?",
      B1: "¿Cómo convences a alguien cuando te dice que no?",
      B2: "¿Qué harías si no te dejaran entrar a un lugar con tus amigos?",
      C1: "¿Dónde está el límite entre insistir con encanto y presionar a alguien?",
      C2: "¿Por qué nos importa tanto estar dentro de los lugares de los que otros quedan fuera?",
    },
  },
  {
    id: "galpones-secreto",
    kind: "escena",
    district: "galpones",
    title: "Una conversación que no deberías oír",
    verb: "ESCUCHAR",
    goal: "Interpretar lo que se oye, hacer hipótesis, preguntar con tacto, aclarar un malentendido y ofrecer ayuda.",
    cast: [
      {
        id: "ximena", name: "Ximena", role: "Amiga con un plan secreto",
        age: "young", body: "f", build: "average", height: 1.58,
        hair: "bob", hairColor: "#3b1f2b", skin: "#b98a6a",
        top: "hoodie", topColor: "#6c3fa0", bottom: "jeans", bottomColor: "#3c4a66",
        extras: ["phone"], pose: "crouch", props: ["food-truck", "box"],
      },
      {
        id: "tadeo", name: "Tadeo", role: "Cómplice del plan",
        age: "adult", body: "m", build: "slim", height: 1.88,
        hair: "cap", hairColor: "#222222", skin: "#f1d1b5",
        top: "jacket", topColor: "#2e5e3a", bottom: "pants", bottomColor: "#b39b72",
        extras: ["beard", "backpack"], pose: "lean", props: ["van"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ximena", mood: "worried",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. «Lo hacemos a medianoche. Nadie puede saberlo. Lo llevamos todo en la camioneta.»",
          B: "Detrás del food truck, una chica y un chico alto susurran sin verte. «Lo hacemos a medianoche. Nadie puede saberlo. Lo llevamos todo en la camioneta.»",
          C: "Detrás del food truck, dos sombras cuchichean como en una película mala de atracos. «Lo hacemos a medianoche. Nadie puede saberlo. Lo llevamos todo en la camioneta.»",
        },
        options: [
          {
            id: "preguntar",
            act: { A: "Te acercas.", B: "Sales de la sombra con calma.", C: "Carraspeas para anunciar tu presencia." },
            say: { A: "Perdón. Oí algo. ¿Qué van a hacer a medianoche?", B: "Perdonen, no quería escuchar, pero… ¿qué es eso que nadie puede saber?", C: "Disculpen la indiscreción, pero esa frase, fuera de contexto, suena fatal." },
            reply: { A: "La chica salta. «¡Ay! ¿Nos oíste? Me llamo Ximena. No es nada malo.»", B: "La chica se lleva la mano al pecho. «¡Qué susto! Soy Ximena. Te juro que no es lo que parece.»", C: "La chica se pone roja. «Soy Ximena. Y sí, fuera de contexto suena a delito. Dentro, también un poco.»" },
            mood: "surprised", next: "verdad",
          },
          {
            id: "contar",
            say: { A: "Voy a decirle al cocinero del food truck.", B: "Creo que tengo que avisar a alguien. Esto suena a robo.", C: "Esto merece una segunda opinión. Voy a consultarlo con el cocinero del food truck." },
            reply: { A: "Te oyen. El chico alto dice: «¡Espera! ¡No es un robo!»", B: "Te han oído. El chico alto corre hacia ti. «¡Espera, espera! ¡No es lo que piensas!»", C: "El chico alto aparece de un salto. «¡Por favor, no! Si se lo cuentas a Wen, lo sabe todo el barrio.»" },
            mood: "scared", next: "verdad",
          },
          {
            id: "ignorar",
            say: { A: "No es mi problema. Me voy.", B: "Mejor no me meto. No es asunto mío.", C: "Hay conversaciones que es mejor no haber oído. Esta, por ejemplo." },
            reply: { A: "Te vas. Detrás, alguien dice: «¿Y los globos?»", B: "Te alejas. A tu espalda oyes: «¿Y los globos? ¿Los inflamos aquí?»", C: "Te alejas con dignidad. A tu espalda, alguien pregunta muy serio por los globos." },
            mood: "neutral", end: "nada",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y apuntas algo.", B: "Sacas el lápiz y apuntas la matrícula de la camioneta.", C: "Sacas el lápiz y, como un detective, apuntas la matrícula de la camioneta." },
            say: { A: "Apunto el número de la camioneta. Por si acaso.", B: "Por si acaso, apunto la matrícula. Uno nunca sabe.", C: "Matrícula anotada. Si mañana sale en las noticias, yo lo sabía." },
            reply: { A: "El chico te ve. «¡Eh! ¿Qué escribes? ¡Somos buena gente!»", B: "El chico alto te ve. «¡Oye! ¿Nos estás investigando? ¡Que es para una boda!»", C: "El chico alto se acerca, ofendido. «¿Detective? Lo único que vamos a robar es un sí.»" },
            mood: "surprised", next: "verdad",
          },
          libro: {
            act: { A: "Abres tu libro y escuchas.", B: "Abres tu libro y finges leer mientras escuchas.", C: "Te escondes tras el libro como en una novela de espías." },
            say: { A: "(En voz baja) ¿Qué es eso de medianoche?", B: "Perdonen… ¿qué pasa a medianoche? Es que el libro se puso aburrido.", C: "No es que espíe, es que su conversación tiene más suspenso que mi novela." },
            reply: { A: "Ximena se ríe. «¡Nos escuchaste! Bueno… Es una sorpresa.»", B: "Ximena se ríe, nerviosa. «Bueno, mejor que nuestra conversación no sea aburrida… Es una sorpresa.»", C: "Ximena suelta una carcajada. «¿Más suspenso? Espera a oír el final. Es una sorpresa.»" },
            mood: "smile", next: "verdad",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Te pones tenso y sacas el gas pimienta.", C: "Con el corazón a mil, sacas el gas pimienta y doblas la esquina." },
            say: { A: "¡Quietos! ¡Los escuché!", B: "¡Quietos! Lo escuché todo.", C: "¡Quietos! Su plan acaba de fracasar." },
            reply: { A: "Ximena grita. Tadeo levanta las manos. «¡No, no! ¡Es una sorpresa!»", B: "Ximena se tapa la cara. El chico, Tadeo, levanta las manos. «¡Es una sorpresa! ¡Una pedida de mano!»", C: "Tadeo, el chico alto, levanta las manos. «¡Por favor! ¡Si fracasa, mi amigo se queda sin boda!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Sin pensar, sacas la granada.", C: "Por algún motivo, decides que la granada aporta algo a la conversación." },
            say: { A: "¡No se muevan! ¿Qué van a hacer?", B: "¡Nadie se mueve! ¿Qué van a hacer a medianoche?", C: "Les propongo un trato: me cuentan el plan y yo me guardo esto." },
            reply: { A: "Los dos gritan. Tadeo se cae sobre unas cajas de globos.", B: "Ximena y Tadeo gritan a la vez. Tadeo cae sobre una caja y salen globos por todas partes.", C: "Ximena se queda blanca. Tadeo tropieza con una caja y la noche se llena de globos con forma de corazón." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al salir de la sombra, se ve tu pistola.", C: "Sales de la sombra y la luz del food truck ilumina tu pistola." },
            say: { A: "Hola. ¿Qué pasa aquí?", B: "Hola. ¿Me pueden explicar qué pasa aquí?", C: "Buenas noches. Creo que me deben una explicación." },
            reply: { A: "Ximena llora de miedo. «¡No hacemos nada malo!»", B: "Ximena se echa a temblar. «¡No hacemos nada malo! ¡Es para una boda!»", C: "Ximena retrocede contra la camioneta. «¡Te la damos! ¡La explicación y lo que quieras!»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves una caja cerrada con cinta. Sacas el cuchillo.", C: "Hay una caja sellada con cinta. Sacas el cuchillo, movido por la curiosidad." },
            say: { A: "¿Qué hay en esta caja?", B: "A ver qué hay en esta caja tan misteriosa.", C: "Las cajas misteriosas no me dejan dormir. ¿Puedo?" },
            reply: { A: "Ximena grita. «¡No! ¡Es una sorpresa!»", B: "Ximena se tira encima de la caja. «¡No! ¡Ahí está el anillo!»", C: "Ximena abraza la caja como a un recién nacido. «¡Ni se te ocurra! ¡Dentro hay un anillo y tres meses de planes!»" },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola. Parecen nerviosos. ¿Puedo ayudar?", B: "Hola. Se les ve nerviosos. ¿Necesitan una mano?", C: "Perdonen la intromisión, pero tienen cara de necesitar un cómplice." },
            reply: { A: "Ximena sonríe. «¡Sí! Mi amigo va a pedir matrimonio. Es una sorpresa.»", B: "Ximena se ilumina. «¡Sí! Nuestro amigo Iván le va a pedir matrimonio a su novio. Y no sabemos inflar globos.»", C: "Ximena te agarra del brazo. «¡Un cómplice! Iván va a pedirle matrimonio a Dani y somos un desastre.»" },
            mood: "love", next: "ayudar",
          },
        },
      },
      calmar: {
        who: "tadeo", mood: "scared",
        line: {
          A: "Tadeo y Ximena tienen mucho miedo. «Por favor… es una fiesta. Solo una fiesta.»",
          B: "Tadeo protege a Ximena con el brazo. «Por favor, escúchame. Es una pedida de mano. Nada más.»",
          C: "Tadeo habla muy despacio, como si desactivara algo. «Escucha. Hay un anillo, unos globos y un amigo enamorado. Ese es todo el crimen.»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "¡Perdón! Lo guardo. Pensé que era un robo.", B: "¡Perdonen! Ya lo guardo. Escuché «nadie puede saberlo» y pensé lo peor.", C: "Perdón. Su frase, mi imaginación y la noche formaron una combinación terrible." },
            reply: { A: "Tadeo respira. «Bueno… Entiendo. La frase suena mal.»", B: "Tadeo suelta una risa nerviosa. «Visto así… Sí, sonaba fatal.»", C: "Tadeo se ríe, todavía pálido. «Bueno, reconozco que el guion era de película policial.»" },
            mood: "worried", next: "verdad",
          },
          {
            id: "dudar",
            say: { A: "No les creo. ¿Dónde está el anillo?", B: "¿Una pedida de mano? Demuéstramelo. ¿Dónde está el anillo?", C: "Muy bonito. Ahora la prueba: enséñenme ese famoso anillo." },
            reply: { A: "Ximena abre la caja. Hay un anillo y globos.", B: "Ximena abre la caja con manos temblorosas: un anillo, globos y un cartel que dice «¿Te casas conmigo?».", C: "Ximena abre la caja: un anillo, globos y un cartel con faltas de ortografía. «¿Satisfecho?»" },
            mood: "sad", next: "verdad",
          },
          {
            id: "huir",
            say: { A: "Perdón. Me voy.", B: "Perdón por todo. Me voy ya.", C: "Creo que lo mejor que puedo aportar ahora es mi ausencia." },
            reply: { A: "Ximena llama a alguien por teléfono.", B: "Ximena, todavía temblando, llama a la policía.", C: "Ximena, con la voz rota, ya está describiéndote por teléfono." },
            mood: "scared", end: "policia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Me encantan las bodas. ¿Puedo ayudar?", B: "Perdónenme, me asusté. ¿Me dejan compensarlo ayudando?", C: "Perdón por el susto. Si me aceptan, soy muy bueno inflando globos y pidiendo perdón." },
            reply: { A: "Ximena se ríe. «¡Sí! Necesitamos ayuda con los globos.»", B: "Ximena se ríe, aliviada. «¡Claro! Necesitamos a alguien con pulmones.»", C: "Tadeo se ríe por fin. «Las dos cosas nos hacen falta. Toma, empieza por el globo rojo.»" },
            mood: "love", next: "ayudar",
          },
        },
      },
      verdad: {
        who: "ximena", mood: "smile",
        line: {
          A: "Ximena explica. «Nuestro amigo Iván va a pedir matrimonio a medianoche. Es una sorpresa.»",
          B: "Ximena se ríe de los nervios. «Nuestro amigo Iván va a pedirle matrimonio a su novio a medianoche. Llevamos todo en la camioneta: globos, luces, un violinista…»",
          C: "Ximena baja la voz, divertida. «Iván, nuestro amigo, pide matrimonio a medianoche. En la camioneta hay globos, luces y un violinista que cobra por minuto.»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "¡Qué bonito! ¿Puedo ayudar?", B: "¡Qué romántico! ¿Necesitan ayuda con algo?", C: "Retiro todas mis sospechas. ¿Puedo sumarme al operativo?" },
            reply: { A: "Tadeo sonríe. «¡Sí! Faltan muchos globos.»", B: "Tadeo te da una bolsa de globos. «Si inflas veinte, te ganas un trozo de pastel.»", C: "«El operativo te necesita», dice Tadeo, y te pasa una bolsa de globos. «Prioridad: los rojos.»" },
            mood: "love", next: "ayudar",
          },
          {
            id: "secreto",
            say: { A: "No digo nada. ¡Suerte!", B: "Tranquilos, no le cuento nada a nadie. ¡Mucha suerte!", C: "Mis labios están sellados. Que conste que nunca he sido tan feliz de equivocarme." },
            reply: { A: "Ximena te abraza. «¡Gracias!»", B: "Ximena te da un abrazo rápido. «¡Gracias! Si sale bien, te invitamos a la boda.»", C: "Ximena se ríe. «Equivocarse así es un lujo. Si dice que sí, te debemos un brindis.»" },
            mood: "love", end: "secreto",
          },
          {
            id: "chiste",
            say: { A: "La próxima vez, hablen más bajo.", B: "Un consejo: la próxima vez, no digan «nadie puede saberlo» en voz alta.", C: "Un consejo de amigo: para la próxima, elijan un vocabulario menos criminal." },
            reply: { A: "Tadeo se ríe. «Sí, es verdad. Gracias.»", B: "Tadeo se ríe. «Tienes razón. Desde ahora, decimos “plan globo”.»", C: "«Vocabulario menos criminal», repite Tadeo, apuntándolo en el celular. «Anotado.»" },
            mood: "smile", end: "secreto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Ustedes son muy buenos amigos.", B: "Iván tiene mucha suerte de tener amigos como ustedes.", C: "Qué envidia. Ojalá yo tuviera unos amigos capaces de montar algo así por mí." },
            reply: { A: "Ximena sonríe. «Gracias. Y Tadeo… también me gusta a mí. Es un secreto.»", B: "Ximena se sonroja y te susurra: «Gracias. Otro secreto: me gusta Tadeo. No le digas nada.»", C: "Ximena baja la voz. «Ya que estamos con secretos: el que me gusta es Tadeo. Esa sorpresa la preparo otro día.»" },
            mood: "love", next: "ayudar",
          },
        },
      },
      ayudar: {
        who: "tadeo", mood: "smile",
        line: {
          A: "Faltan diez minutos. Tadeo tiene muchos globos. «¿Qué hacemos ahora?»",
          B: "Faltan diez minutos para la medianoche. Tadeo tiene globos, luces y cero organización. «¿Qué hacemos primero?»",
          C: "Faltan diez minutos. Tadeo sostiene cuarenta globos y una mirada de pánico. «Necesitamos un plan. Uno de verdad.»",
        },
        options: [
          {
            id: "globos",
            say: { A: "Yo inflo los globos. Tú pones las luces.", B: "Yo inflo los globos y tú cuelgas las luces. Ximena vigila la puerta.", C: "Repartamos tareas: yo globos, tú luces y Ximena distrae al novio." },
            reply: { A: "Todos trabajan rápido. A las doce, todo está listo.", B: "Trabajan como un equipo. A las doce menos un minuto, todo brilla.", C: "Funciona. A las doce en punto, el callejón parece un escenario de cine." },
            mood: "love", end: "sorpresa",
          },
          {
            id: "violin",
            say: { A: "¿Y el violinista? ¿Dónde está?", B: "Oye, ¿y el violinista? No lo veo por aquí.", C: "Pregunta incómoda: ¿alguien ha visto al violinista que cobra por minuto?" },
            reply: { A: "Tadeo se pone pálido. «¡Ay, no! ¡Lo voy a llamar!»", B: "Tadeo se pone blanco. «¡El violinista! Se me olvidó darle la dirección.» Llama corriendo.", C: "Tadeo se queda helado. «Está en la otra Fábrica. La de muebles.» Llama, desesperado." },
            mood: "worried", end: "violin",
          },
          {
            id: "irse",
            say: { A: "Tengo que irme. ¡Suerte!", B: "Lo siento, me tengo que ir. ¡Mucha suerte con todo!", C: "Les dejo con su misión. Ya me contarán si hubo final feliz." },
            reply: { A: "Tadeo dice adiós. «¡Gracias!»", B: "Tadeo te dice adiós con un globo. «¡Gracias por todo!»", C: "Tadeo te despide con un globo en cada mano. «¡Final feliz garantizado!»" },
            mood: "smile", end: "secreto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tranquilo, Tadeo. Va a salir muy bien.", B: "Respira, Tadeo. Va a salir genial, ya lo verás.", C: "Tadeo, respira. Lo importante no son los globos, es que están aquí por él." },
            reply: { A: "Tadeo respira. «Gracias. ¿Te quedas a verlo?»", B: "Tadeo se calma. «Gracias. Oye, quédate a verlo. Necesitamos testigos.»", C: "Tadeo sonríe. «Tienes razón. Quédate, por favor. Un desconocido aplaudiendo le da prestigio.»" },
            mood: "love", end: "sorpresa",
          },
        },
      },
    },
    ends: {
      sorpresa: { text: { A: "A las doce, Iván pide matrimonio. ¡Dice que sí! Todos aplauden.", B: "A medianoche, Iván se arrodilla entre los globos. Su novio dice que sí y todos aplauden, tú también.", C: "A medianoche, Iván se arrodilla entre globos y luces. El sí llega antes de terminar la pregunta." }, change: "abraza", recap: "Ayudaste a preparar una pedida de mano sorpresa." },
      secreto: { text: { A: "Te vas. Guardas el secreto. A las doce oyes aplausos.", B: "Te alejas guardando el secreto. A las doce, oyes aplausos detrás del food truck.", C: "Te alejas con el secreto a salvo. A medianoche, una ovación sale del callejón." }, change: "sonrie", recap: "Guardaste el secreto de Ximena y Tadeo." },
      violin: { text: { A: "Tadeo llama al violinista. Llega a las doce y cinco. ¡Pero llega!", B: "Tadeo llama al violinista, que llega corriendo a las doce y cinco. Aun así, es perfecto.", C: "El violinista llega sin aliento a las doce y cinco. Nadie lo nota: todos están llorando." }, change: "llama", recap: "Salvaste la música de una pedida de mano." },
      policia: { text: { A: "Llega la policía. Explicas todo. Los policías se ríen de los globos.", B: "Llega la policía. Explicas el malentendido entre globos con forma de corazón.", C: "Llega una patrulla. Explicar el malentendido rodeado de globos de corazón es humillante." }, change: "policia", recap: "Un malentendido detrás del food truck terminó con la policía." },
      nada: { text: { A: "Te vas. No sabes qué pasa a medianoche.", B: "Te alejas sin saber qué pasa a medianoche. A lo mejor nunca lo sabrás.", C: "Te alejas. El misterio de la medianoche se queda contigo, sin resolver." }, change: "sigue", recap: "Ignoraste una conversación misteriosa." },
    },
    speak: {
      A1: "¿Qué sorpresa te gusta recibir?",
      A2: "¿Qué sorpresa preparaste para alguien?",
      B1: "¿Qué haces cuando escuchas algo que no debías escuchar?",
      B2: "¿Cómo reaccionarías si descubrieras un secreto de un amigo?",
      C1: "¿Cuándo está justificado contar algo que oíste por casualidad?",
      C2: "¿Qué nos lleva a pensar lo peor de los demás antes de conocer el contexto?",
    },
  },
  {
    id: "galpones-obra",
    kind: "escena",
    district: "galpones",
    title: "Ruidos en la obra",
    verb: "ACOMPAÑAR",
    goal: "Aceptar o rechazar una petición, describir sonidos, hacer hipótesis, animar a alguien con miedo y proponer soluciones.",
    cast: [
      {
        id: "benigno", name: "Benigno", role: "Vigilante nocturno de la obra",
        age: "old", body: "m", build: "heavy", height: 1.66,
        hair: "short", hairColor: "#8e8a84", skin: "#a8754f",
        top: "uniform", topColor: "#3f5a7a", bottom: "pants", bottomColor: "#2b3646",
        extras: ["helmet", "mustache"], pose: "stand", props: ["flashlight", "fence", "crane"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "benigno", mood: "scared",
        line: {
          A: "En la puerta de una obra, un vigilante con linterna te llama. «Oye, por favor. Hay ruidos raros dentro. ¿Vienes conmigo?»",
          B: "Junto a la valla de una obra, un vigilante mayor te hace señas con la linterna. «Perdona… ¿Me acompañas a mirar? Llevo una hora oyendo ruidos raros.»",
          C: "Un vigilante con casco te detiene junto a la valla de la obra. «Disculpa. No es que tenga miedo, eh. Es que dos opiniones valen más que una. Hay ruidos ahí dentro.»",
        },
        options: [
          {
            id: "acompanar",
            say: { A: "Sí, claro. Vamos juntos. ¿Qué tipo de ruido es?", B: "Claro, te acompaño. ¿Qué tipo de ruido has oído?", C: "Cuenta conmigo. Pero antes descríbeme el ruido, para saber a qué me enfrento." },
            reply: { A: "Benigno sonríe. «Gracias. Son pasos… y algo que come.»", B: "«Gracias, de verdad», dice Benigno. «Son pasos pequeños. Y algo que mastica. Mucho.»", C: "Benigno lo piensa. «Pasitos. Y un masticar constante, como de alguien que no ha cenado.»" },
            mood: "worried", next: "obra",
          },
          {
            id: "policia",
            say: { A: "Es mejor llamar a la policía, ¿no?", B: "¿No sería mejor llamar a la policía? Es su trabajo.", C: "Con todo respeto, esto suena a un trabajo para profesionales. ¿Llamamos a la policía?" },
            reply: { A: "Benigno se pone rojo. «No… La última vez fue un gato. Se rieron de mí.»", B: "Benigno se avergüenza. «La última vez los llamé por un gato. Todavía se ríen de mí en la comisaría.»", C: "«Ya los llamé una vez», confiesa Benigno. «Era un gato. Desde entonces me llaman el Cazagatos.»" },
            mood: "sad", next: "obra",
          },
          {
            id: "rechazar",
            say: { A: "Lo siento. Tengo miedo también. No voy.", B: "Lo siento, pero a mí también me da miedo. Prefiero no entrar.", C: "Te seré sincero: mi valentía tiene horario de oficina, y ya cerró." },
            reply: { A: "Benigno suspira. «Bueno. Voy solo.»", B: "Benigno suspira. «Lo entiendo. Bueno, entraré solo… despacito.»", C: "Benigno se ríe a su pesar. «La mía también, pero a mí me pagan las horas extra.»" },
            mood: "sad", end: "solo",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y le pides un plano de la obra.", C: "Sacas el lápiz y propones un enfoque táctico." },
            say: { A: "¿Dónde está el ruido? Dibuja un mapa.", B: "Dibújame dónde suenan los ruidos. Así entramos con un plan.", C: "Antes de entrar, un croquis. Marca de dónde vienen los ruidos." },
            reply: { A: "Benigno dibuja. Pone una X. «Aquí. Al lado del cemento.»", B: "Benigno dibuja la obra y marca una X. «Aquí, junto a los sacos. Y aquí… desapareció mi sándwich.»", C: "Benigno dibuja con detalle y marca una X. «Zona de sacos. Además, me han robado el sándwich. Esto es personal.»" },
            mood: "neutral", next: "obra",
          },
          libro: {
            act: { A: "Le enseñas tu libro.", B: "Le enseñas tu libro, una novela de misterio.", C: "Levantas tu libro con autoridad, como si fuera un manual." },
            say: { A: "Mira, es un libro de misterio. ¡Soy un experto!", B: "Tranquilo, he leído muchas novelas de misterio. Siempre es el mayordomo.", C: "Tengo formación literaria en misterios. Estadísticamente, el culpable es el mayordomo." },
            reply: { A: "Benigno se ríe. «Aquí no hay mayordomo. ¡Vamos!»", B: "Benigno se ríe. «Aquí no hay mayordomo, solo yo y una hormigonera. Vamos.»", C: "«No tenemos mayordomo», dice Benigno, «pero la hormigonera tiene cara de sospechosa.»" },
            mood: "smile", next: "obra",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Sacas el gas pimienta, por si acaso.", C: "Sacas el gas pimienta, listo para lo que haya dentro." },
            say: { A: "Tengo esto. Vamos.", B: "Si hay alguien dentro, tengo esto. Vamos.", C: "Llevo un argumento de peso, por si el ruido no atiende a razones." },
            reply: { A: "Benigno se pone nervioso. «Eh… bueno. Pero no lo uses sin mirar.»", B: "Benigno lo mira, inquieto. «Bueno… pero no lo uses hasta que veamos qué es, ¿eh?»", C: "«Úsalo con criterio», dice Benigno. «La última vez que alguien entró nervioso, rompió una ventana. Fui yo.»" },
            mood: "worried", next: "obra",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Le enseñas la granada para darle confianza.", C: "Le enseñas la granada, convencido de que eso tranquiliza a cualquiera." },
            say: { A: "No te preocupes. Tengo esto.", B: "Tranquilo, con esto no nos va a pasar nada.", C: "Relájate. Vengo preparado para cualquier escenario." },
            reply: { A: "Benigno grita. «¡No! ¡Aquí hay gasolina!»", B: "Benigno se aparta de un salto. «¿Estás loco? ¡Aquí hay bidones de gasolina!»", C: "Benigno retrocede hasta la valla. «¿Cualquier escenario? ¡En este escenario hay gasolina!»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Sacas la pistola.", B: "Sacas la pistola, como en las películas.", C: "Sacas la pistola con aire de protagonista de serie policial." },
            say: { A: "Vamos. Yo voy primero.", B: "Déjame ir primero. Yo me encargo.", C: "Tú cúbreme con la linterna. Yo me ocupo del resto." },
            reply: { A: "Benigno tiene miedo de ti. «¿Quién eres tú?»", B: "Benigno da un paso atrás. «Oye, oye… ¿Tú quién eres? ¿Eres policía?»", C: "Benigno te apunta con la linterna a la cara. «Ahora el ruido que me preocupa eres tú.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "La puerta de la valla tiene una cuerda enredada. Sacas el cuchillo.", C: "La puerta de la valla está atada con una cuerda imposible. Sacas el cuchillo." },
            say: { A: "La cuerda está mal. La corto y entramos.", B: "Esta cuerda no se desata. ¿La corto y entramos?", C: "Esta cuerda la ató alguien con mucho rencor. ¿Me permites?" },
            reply: { A: "Benigno dice que sí. «Bueno. Con cuidado.»", B: "Benigno duda, pero asiente. «Bueno, córtala. Yo la até. Soy malo con los nudos.»", C: "«La até yo», admite Benigno. «Los nudos no son lo mío. Adelante, pero apunta hacia abajo.»" },
            mood: "neutral", next: "obra",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tranquilo. Eres muy valiente. Vamos juntos.", B: "Pedir ayuda también es de valientes. Vamos juntos.", C: "Para mí, el que admite que tiene miedo es el más valiente de la noche." },
            reply: { A: "Benigno sonríe. «Gracias. Mi compañero Wilson está de vacaciones. Solo no me gusta.»", B: "Benigno se emociona. «Gracias. Normalmente estoy con Wilson, pero está de vacaciones. Solo me cuesta.»", C: "Benigno se ríe, emocionado. «Wilson, mi compañero, dice que soy un miedoso. Wilson está en la playa, claro.»" },
            mood: "love", next: "obra",
          },
        },
      },
      calmar: {
        who: "benigno", mood: "scared",
        line: {
          A: "Benigno tiene la radio en la mano. «¿Llamo a la policía?»",
          B: "Benigno sostiene la radio con la mano temblando. «Explícame qué haces con eso o llamo a la policía.»",
          C: "Benigno tiene el dedo sobre la radio. «Tienes diez segundos para convencerme de que no eres el ruido.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo quiero ayudar.", B: "Perdona. Lo guardo ya. Me puse nervioso, solo quería ayudar.", C: "Perdón, ha sido una pésima idea. Lo guardo y volvemos al plan original: tú, yo y la linterna." },
            reply: { A: "Benigno respira. «Bueno. Vamos. Pero tú detrás.»", B: "Benigno baja la radio. «Bueno. Pero tú vas detrás de mí.»", C: "«Tú, yo, la linterna y nada más», dice Benigno, más tranquilo. «Así me gusta.»" },
            mood: "worried", next: "obra",
          },
          {
            id: "mentir",
            say: { A: "Soy policía. Es normal.", B: "Tranquilo, soy policía de paisano.", C: "Puedes estar tranquilo: digamos que soy de las fuerzas del orden. Más o menos." },
            reply: { A: "Benigno no te cree. Llama por la radio.", B: "«¿De paisano? Pues ahora vienen los de uniforme», dice Benigno, y habla por la radio.", C: "«Más o menos», repite Benigno. «Ahora vienen los que lo son del todo.» Y aprieta el botón." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy.", C: "Creo que te ayudo más si me voy. Perdona." },
            reply: { A: "Benigno se queda solo. Mira la obra.", B: "Benigno se queda solo frente a la valla, con la linterna temblando.", C: "Benigno te ve marchar. Luego mira la obra oscura y suspira." },
            mood: "sad", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, Benigno. Yo también tengo miedo.", B: "Perdóname. La verdad es que yo también tengo miedo y por eso hice una tontería.", C: "Perdona. El miedo me vuelve idiota. Ya ves que no eres el único asustado." },
            reply: { A: "Benigno se ríe. «¡Dos miedosos! Bueno, vamos.»", B: "Benigno se ríe. «Dos miedosos juntos hacen un valiente. Vamos.»", C: "Benigno se ríe a carcajadas. «¡Club de miedosos! Venga, que entre los dos sumamos uno valiente.»" },
            mood: "love", next: "obra",
          },
        },
      },
      obra: {
        who: "benigno", mood: "worried",
        line: {
          A: "Dentro de la obra está muy oscuro. Algo se mueve detrás de unos sacos. Se oye: «Meeeee».",
          B: "Entran en la obra. La linterna ilumina unos sacos de cemento. Algo se mueve detrás y suena un «meeeee» muy largo.",
          C: "La linterna barre la obra en silencio. Detrás de los sacos, algo mastica sin remordimientos. Luego, un «meeeee» rompe el misterio.",
        },
        options: [
          {
            id: "mirar",
            say: { A: "¡Es una cabra! ¡Mira!", B: "¡No me lo puedo creer! ¡Es una cabra comiéndose tu sándwich!", C: "Benigno, te presento a tu fantasma: una cabra con un sándwich de jamón." },
            reply: { A: "Benigno se ríe mucho. «¡Una cabra! ¡En la ciudad!»", B: "Benigno se ríe tanto que se le cae el casco. «¡Una cabra! ¡Y con mi cena!»", C: "Benigno se dobla de risa. «¡Mi sándwich! Wilson no me lo va a creer nunca.»" },
            mood: "smile", next: "cabra",
          },
          {
            id: "fantasma",
            say: { A: "¿Es un fantasma? ¡Vámonos!", B: "¿Y si es un fantasma? ¡Yo no me quedo a averiguarlo!", C: "Propongo una retirada inmediata y no preguntar más." },
            reply: { A: "Benigno corre contigo. Detrás, la cabra los sigue.", B: "Benigno sale corriendo contigo. Detrás de ustedes, algo trota alegremente.", C: "Salen corriendo los dos. A su espalda, el fantasma trota con entusiasmo y una barbita blanca." },
            mood: "scared", next: "cabra",
          },
          {
            id: "hablar",
            say: { A: "¡Hola! ¿Quién está ahí?", B: "¡Hola! Sal, por favor. No te vamos a hacer nada.", C: "Sea quien sea, salga despacio. Venimos en son de paz y sin sándwichs." },
            reply: { A: "Sale una cabra blanca. «¡Meeee!» Benigno no puede creerlo.", B: "Sale una cabra blanca con un cartel al cuello: «Me llamo Perla. Granja urbana».", C: "Sale una cabra blanca, digna, con un collar que dice «Perla, Granja Urbana del Sur». Benigno se queda mudo." },
            mood: "surprised", next: "cabra",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Benigno, estoy contigo. No pasa nada.", B: "Benigno, estoy aquí contigo. Sea lo que sea, lo resolvemos.", C: "Benigno, pase lo que pase, esta noche ya tienes una historia para Wilson." },
            reply: { A: "Benigno se ríe. «Gracias.» Ilumina los sacos: ¡es una cabra!", B: "Benigno sonríe y apunta la linterna con decisión. Es una cabra blanca. «¡Perla! ¡Es de la granja de la esquina!»", C: "Envalentonado, Benigno ilumina los sacos: una cabra blanca. «¡Perla! La conozco. Me roba el pan desde agosto.»" },
            mood: "love", next: "cabra",
          },
        },
      },
      cabra: {
        who: "benigno", mood: "smile",
        line: {
          A: "La cabra se llama Perla. Es de una granja cerca. Benigno pregunta: «¿Qué hacemos con ella?»",
          B: "La cabra, Perla, es de la granja urbana de la esquina. Benigno la mira, divertido. «¿Y ahora qué hacemos con esta ladrona?»",
          C: "Perla, la cabra fugada de la granja urbana, mastica lo que queda del sándwich con total impunidad. «¿Y ahora qué?», pregunta Benigno.",
        },
        options: [
          {
            id: "granja",
            say: { A: "Vamos a llamar a la granja.", B: "Lo mejor es llamar a la granja para que vengan a buscarla.", C: "Propongo llamar a la granja. Que se encarguen ellos de su delincuente." },
            reply: { A: "Benigno llama. «¡Vienen en cinco minutos!»", B: "Benigno llama por teléfono. «Dicen que vienen ya. Y que Perla se escapa cada semana.»", C: "Benigno cuelga, riéndose. «Dicen que Perla es reincidente. Vienen a buscarla.»" },
            mood: "smile", end: "granja",
          },
          {
            id: "llevar",
            say: { A: "La llevamos nosotros. Es cerca.", B: "¿Y si la llevamos nosotros? La granja está a dos calles.", C: "Hagamos el paseo de la vergüenza: la devolvemos nosotros mismos." },
            reply: { A: "Benigno se ríe. «¡Sí! Vamos, Perla.»", B: "Benigno le pone su cinturón como correa. «¡Vamos, Perla! Paseo nocturno.»", C: "Benigno improvisa una correa con su cinturón. «Paseo de la vergüenza. Para ella, no para mí.»" },
            mood: "love", end: "paseo",
          },
          {
            id: "quedarse",
            say: { A: "Puede quedarse un poco. Es simpática.", B: "Déjala un rato. Te hace compañía hasta que vuelva Wilson.", C: "Se me ocurre que tienes una nueva compañera de turno. Más simpática que Wilson, seguro." },
            reply: { A: "Benigno se ríe y le da un poco de pan.", B: "Benigno se ríe y le da un trozo de pan. «Compañera nueva. Y no se queja del turno.»", C: "Benigno le acaricia la cabeza. «Mejor que Wilson. No ronca y no me pide el último café.»" },
            mood: "love", end: "compania",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Benigno, eres un buen vigilante. ¡Encontraste el misterio!", B: "Benigno, resolviste el misterio. Eres el mejor vigilante del barrio.", C: "Benigno, has resuelto el caso del sándwich. A partir de hoy eres leyenda." },
            reply: { A: "Benigno se ríe. «¡Gracias! Te invito a un café. Y Perla viene.»", B: "Benigno se emociona. «¡Gracias! Te invito a un café del termo. Perla también quiere.»", C: "Benigno saca un termo. «Una leyenda invita. Café para dos y pan para la cómplice.»" },
            mood: "love", end: "compania",
          },
        },
      },
    },
    ends: {
      granja: { text: { A: "Una chica de la granja llega y se lleva a Perla. Benigno se ríe.", B: "Llega una chica de la granja urbana y se lleva a Perla, que protesta con un «meeee» largo.", C: "Llega la cuidadora de la granja, con cara de no ser la primera vez. Perla se va protestando." }, change: "llama", recap: "Encontraste una cabra perdida en la obra con Benigno." },
      paseo: { text: { A: "Llevan a Perla a la granja. Benigno camina contento.", B: "Pasean a Perla hasta la granja. Benigno camina orgulloso, como un pastor de ciudad.", C: "Devuelven a Perla a la granja. Benigno camina con la dignidad de un pastor urbano." }, change: "se-va", recap: "Devolviste una cabra a la granja urbana con Benigno." },
      compania: { text: { A: "Benigno, Perla y tú toman un café. Bueno, Perla come pan.", B: "Benigno saca el termo. Tomas un café con él mientras Perla mordisquea un trozo de pan.", C: "Compartes café con Benigno bajo la grúa, mientras Perla vigila la obra mejor que nadie." }, change: "se-sienta", recap: "Tomaste un café con Benigno y una cabra." },
      solo: { text: { A: "Te vas. Benigno entra solo en la obra con su linterna.", B: "Te alejas. Benigno entra solo en la obra. De lejos, oyes un grito… y luego risas.", C: "Te alejas. Desde la esquina oyes un grito, un «meeee» y la carcajada de Benigno." }, change: "sigue", recap: "No acompañaste a Benigno a la obra." },
      policia: { text: { A: "Llega la policía. Explicas todo. Después, encuentran una cabra.", B: "Llega la policía. Mientras explicas el malentendido, un agente encuentra una cabra en la obra.", C: "Llega una patrulla. Entre explicaciones, un agente sale de la obra con una cabra. Nadie entiende nada." }, change: "policia", recap: "Una noche en la obra terminó con la policía." },
    },
    speak: {
      A1: "¿Qué animales hay en tu ciudad?",
      A2: "¿Qué ruido raro oíste alguna vez de noche?",
      B1: "¿Qué te da miedo de noche y por qué?",
      B2: "¿Cómo reaccionarías si un desconocido te pidiera acompañarlo a un lugar oscuro?",
      C1: "¿Qué distingue la prudencia de la cobardía en situaciones así?",
      C2: "¿Qué papel tiene la imaginación en lo que sentimos cuando estamos solos de noche?",
    },
  },
  {
    id: "sur-hamacas",
    kind: "rincon",
    district: "sur",
    title: "Dos en los columpios",
    verb: "ACERCARME",
    goal: "Hablar de planes y del futuro, dar consejos y opinar con tacto.",
    cast: [
      {
        id: "aitana", name: "Aitana", role: "Chica en el columpio",
        age: "young", body: "f", build: "slim", height: 1.62,
        hair: "long", hairColor: "#8a5a2b", skin: "#f3d6bf",
        top: "sweater", topColor: "#d9a441", bottom: "skirt", bottomColor: "#3d2b4f",
        extras: ["scarf"], pose: "swing", props: ["swings"],
      },
      {
        id: "joel", name: "Joel", role: "Chico en el columpio",
        age: "young", body: "m", build: "athletic", height: 1.76,
        hair: "afro", hairColor: "#1a1311", skin: "#5b3a28",
        top: "hoodie", topColor: "#b33a3a", bottom: "jeans", bottomColor: "#4a5a6a",
        extras: ["backpack"], pose: "swing",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "aitana", mood: "worried",
        line: {
          A: "En el parque, una pareja joven está en los columpios. Te ven. «Oye, una pregunta. ¿Tú vives aquí o en otra ciudad?»",
          B: "Una pareja se balancea despacio en los columpios del parque. La chica te llama. «Perdona, ¿podemos hacerte una pregunta rara? Necesitamos una opinión de fuera.»",
          C: "En los columpios, una pareja discute en voz baja, sin dejar de balancearse. La chica te para. «Perdona. ¿Te importa ser jurado popular un minuto?»",
        },
        options: [
          {
            id: "escuchar",
            say: { A: "Claro. ¿Qué pasa?", B: "Claro, díganme. ¿Qué pasa?", C: "Acepto el cargo. Expongan el caso." },
            reply: { A: "Aitana explica. «Me ofrecen un trabajo en otro país. Joel no sabe si venir.»", B: "Aitana suspira. «Me ofrecen un trabajo en Lisboa. Joel no sabe si dejar todo y venir conmigo.»", C: "Aitana resume: «Trabajo en Lisboa para mí. Dilema existencial para él.» Joel levanta la mano: «Protesto.»" },
            mood: "neutral", next: "futuro",
          },
          {
            id: "broma",
            say: { A: "¿Una pregunta? Yo solo sé de columpios.", B: "Si es sobre columpios, soy experto. Si es sobre amor, no tanto.", C: "Advierto que mi experiencia en columpios supera ampliamente a la de relaciones." },
            reply: { A: "Joel se ríe. «Es sobre el futuro. Aitana se va a Lisboa.»", B: "Joel se ríe. «Es sobre las dos cosas. Aitana tiene trabajo en Lisboa y yo… no sé.»", C: "Joel se ríe. «Perfecto, porque esto va de las dos cosas. Ella se va a Lisboa y yo me columpio.»" },
            mood: "smile", next: "futuro",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Ustedes hacen una pareja muy bonita.", B: "Se nota que se quieren mucho, ¿eh?", C: "Hay parejas que se nota que se eligen cada día. Ustedes tienen esa pinta." },
            reply: { A: "Aitana sonríe. «Gracias. Aquí nos conocimos, en estos columpios.»", B: "Aitana se ríe. «Nos conocimos aquí, hace seis años. Él se cayó del columpio.»", C: "Joel se tapa la cara. «Nos conocimos aquí. Me caí del columpio intentando impresionarla.» «Y funcionó», dice Aitana." },
            mood: "love", next: "futuro",
          },
          libro: {
            act: { A: "Les enseñas tu libro.", B: "Les enseñas tu libro y lo abres al azar.", C: "Abres tu libro al azar, como un oráculo de bolsillo." },
            say: { A: "Mi libro va a decidir. Página al azar.", B: "Dejemos que decida el libro. Leo una frase al azar.", C: "Consultemos al oráculo. Primera frase que salga, sentencia firme." },
            reply: { A: "Lees: «El tren sale a las ocho.» Aitana se ríe. «¡Es una señal!»", B: "Lees: «El tren salía a las ocho y ella ya estaba dentro.» Joel se queda blanco.", C: "Lees: «Ella subió al tren sin mirar atrás.» Joel protesta: «Ese oráculo está comprado.»" },
            mood: "surprised", next: "futuro",
          },
        },
      },
      futuro: {
        who: "joel", mood: "worried",
        line: {
          A: "Joel te mira. «Yo tengo mi trabajo aquí. Mi familia. ¿Qué hago?»",
          B: "Joel deja de columpiarse. «Aquí tengo a mi familia y mi trabajo. Pero sin ella… ¿Tú qué harías?»",
          C: "Joel clava los pies en la arena. «Aquí tengo raíces. Allí tendría a Aitana. ¿Tú qué harías, si fueras tan indeciso como yo?»",
        },
        options: [
          {
            id: "ir",
            say: { A: "Yo voy con ella. Es una aventura.", B: "Yo iría. Si sale mal, siempre puedes volver.", C: "Yo iría. Lo peor que puede pasar es que vuelvas con una buena historia y otro idioma." },
            reply: { A: "Joel sonríe. «Una aventura… Sí. Me gusta.»", B: "Joel lo piensa y sonríe. «Siempre puedo volver. Es verdad.»", C: "Joel se ríe. «Y aprendo portugués. Mi abuela siempre quiso que aprendiera algo útil.»" },
            mood: "smile", end: "lisboa",
          },
          {
            id: "hablar",
            say: { A: "Tienen que hablar mucho. Juntos.", B: "Creo que es mejor que lo decidan juntos, con calma.", C: "No me corresponde a mí. Pero creo que esta conversación merece más que un columpio." },
            reply: { A: "Aitana toma la mano de Joel. «Sí. Vamos a hablar.»", B: "Aitana toma la mano de Joel. «Tiene razón. Vamos a casa y lo hablamos.»", C: "Aitana le da la mano a Joel. «Sabio jurado. Vamos a casa y lo hablamos sin columpiarnos.»" },
            mood: "smile", end: "hablar",
          },
          {
            id: "quedarse",
            say: { A: "Pueden visitarse. Lisboa está cerca.", B: "¿Y si prueban un año a distancia? Hay vuelos baratos.", C: "La distancia no siempre separa. A veces solo obliga a organizarse mejor." },
            reply: { A: "Joel asiente. «Sí… Puedo ir cada mes.»", B: "Joel asiente despacio. «Un año. Puede funcionar.» Aitana no parece tan convencida.", C: "«Organizarse mejor», repite Joel. Aitana sonríe, pero mira hacia otro lado." },
            mood: "neutral", end: "hablar",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Joel, ¿qué quieres tú de verdad?", B: "Joel, olvida lo que piensan los demás. ¿Qué quieres tú?", C: "Joel, quítale el miedo a la pregunta. ¿Qué quieres tú, de verdad?" },
            reply: { A: "Joel mira a Aitana. «Quiero estar con ella. En Lisboa o en la luna.»", B: "Joel mira a Aitana un largo rato. «Quiero estar con ella. Ya está. Ya lo dije.»", C: "Joel se ríe, nervioso. «Quiero estar con ella. Lo demás eran excusas con buena ortografía.»" },
            mood: "love", end: "lisboa",
          },
        },
      },
    },
    ends: {
      lisboa: { text: { A: "Aitana abraza a Joel. Los dos se ríen en los columpios.", B: "Aitana abraza a Joel. Se columpian juntos, haciendo planes para Lisboa.", C: "Aitana se lanza a abrazar a Joel y casi se caen los dos. Lisboa acaba de ganar dos vecinos." }, change: "abraza", recap: "Ayudaste a Aitana y Joel a decidir su futuro." },
      hablar: { text: { A: "Aitana y Joel se van a casa a hablar. Te dicen adiós.", B: "Aitana y Joel se van de la mano. Tienen mucho de qué hablar.", C: "Aitana y Joel se alejan de la mano, con una conversación larga por delante." }, change: "se-va", recap: "Diste un consejo a una pareja en los columpios." },
    },
    speak: {
      A1: "¿Dónde quieres vivir en el futuro?",
      A2: "¿Qué vas a hacer el año que viene?",
      B1: "¿Qué cambio importante hiciste en tu vida y por qué?",
      B2: "¿Qué te haría mudarte a otro país: el amor o el trabajo?",
      C1: "¿Cómo se equilibran los sueños propios con los de la pareja?",
      C2: "¿Qué parte de nuestras decisiones importantes se basa en el miedo a perder algo?",
    },
  },
  {
    id: "sur-ventana",
    kind: "rincon",
    district: "sur",
    title: "Una ventana con luz",
    verb: "MIRAR",
    goal: "Describir una escena familiar, saludar y aceptar una invitación con cortesía.",
    cast: [
      {
        id: "nieves", name: "Abuela Nieves", role: "Abuela en la ventana",
        age: "old", body: "f", build: "heavy", height: 1.55,
        hair: "bun", hairColor: "#f0eee9", skin: "#d9b08c",
        top: "apron", topColor: "#c94f4f", bottom: "skirt", bottomColor: "#3a2f2a",
        extras: ["earrings"], pose: "window", props: ["family-table"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "nieves", mood: "smile",
        line: {
          A: "Una ventana tiene mucha luz. Dentro, una familia cena. Una abuela te ve y dice: «¡Hola! ¿Tienes hambre? ¡Pasa un momento!»",
          B: "Por una ventana iluminada ves una mesa llena de gente, platos y risas. Una abuela con delantal te descubre. «¡Tú, el de la calle! ¿Has cenado? Sube un momento.»",
          C: "Tras una ventana iluminada, una familia entera habla a la vez sobre una mesa a rebosar. La abuela te sorprende mirando. «¡No mires desde fuera, que da pena! Sube.»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "¡Gracias! Solo un momento.", B: "¡Qué amable! Subo un momento, pero no quiero molestar.", C: "Me encantaría. Prometo comportarme como un sobrino ejemplar." },
            reply: { A: "Subes. Hay sopa, pan y muchos niños. La abuela Nieves te da un plato.", B: "Subes. La abuela Nieves te sienta entre dos nietos y te sirve sopa sin preguntar.", C: "La abuela Nieves te sienta a la mesa antes de que termines la frase. «Aquí nadie es ejemplar. Come.»" },
            mood: "love", end: "cena",
          },
          {
            id: "describir",
            say: { A: "¡Qué bonito! Hay mucha comida. ¿Es una fiesta?", B: "¡Qué ambiente! ¿Celebran algo especial?", C: "Desde aquí parece una película. ¿Qué celebran con tanto entusiasmo?" },
            reply: { A: "Nieves se ríe. «No. Es martes. ¡Aquí siempre es así!»", B: "La abuela Nieves se ríe. «¿Especial? Es martes. Aquí cenamos así todos los días.»", C: "«¿Celebrar?», ríe la abuela Nieves. «Es martes. En esta casa el ruido viene incluido.»" },
            mood: "smile", end: "saludo",
          },
          {
            id: "rechazar",
            say: { A: "Gracias, pero tengo que irme. ¡Buen provecho!", B: "Muchas gracias, pero tengo prisa. ¡Que aproveche!", C: "Le agradezco muchísimo, pero hoy tengo la noche ocupada. ¡Que aproveche!" },
            reply: { A: "Nieves te da una mandarina por la ventana. «Para el camino.»", B: "La abuela Nieves te lanza una mandarina. «Para el camino. ¡Y abrígate!»", C: "La abuela Nieves te tira una mandarina con puntería de lanzadora. «Sin cenar no te vas.»" },
            mood: "smile", end: "saludo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted es como mi abuela. La extraño mucho.", B: "Me recuerda a mi abuela. Hace mucho que no la veo.", C: "Hace años que no me ofrecen sopa así. Me ha recordado a mi abuela." },
            reply: { A: "Nieves sonríe. «Ven. Aquí tienes una abuela esta noche.»", B: "A la abuela Nieves se le humedecen los ojos. «Pues esta noche tienes una aquí. Sube.»", C: "La abuela Nieves te mira con ternura. «Las abuelas somos intercambiables, hijo. Sube, que te adopto.»" },
            mood: "love", end: "cena",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas la ventana.", B: "Sacas el lápiz y dibujas la escena en un papel.", C: "Sacas el lápiz y dibujas la ventana, la mesa, el caos." },
            say: { A: "Es para usted. Un dibujo de su familia.", B: "Tome, un recuerdo. Su familia vista desde la calle.", C: "Un retrato de su familia desde fuera. Para que vea lo bonitos que se ven." },
            reply: { A: "Nieves está muy contenta. «¡Qué bonito! Lo pongo en la nevera.»", B: "La abuela Nieves mira el dibujo, emocionada. «Va directo a la nevera, al lado de los nietos.»", C: "«Directo a la nevera», dice la abuela Nieves. «Ahí solo cuelgan obras maestras y facturas.»" },
            mood: "love", end: "saludo",
          },
        },
      },
    },
    ends: {
      cena: { text: { A: "Cenas con la familia de Nieves. Hablan mucho y se ríen.", B: "Cenas sopa con la familia de la abuela Nieves. Todos te preguntan cosas a la vez.", C: "Cenas en una casa ajena que, por diez minutos, parece tuya. Nadie pregunta quién eres." }, change: "luz", recap: "Cenaste con la familia de la abuela Nieves." },
      saludo: { text: { A: "Nieves te dice adiós con la mano. La ventana sigue con luz.", B: "La abuela Nieves te dice adiós desde la ventana y vuelve a la mesa.", C: "La abuela Nieves te despide y vuelve a su ruido feliz. La ventana sigue encendida." }, change: "sonrie", recap: "Saludaste a la abuela Nieves en su ventana." },
    },
    speak: {
      A1: "¿Con quién cenas normalmente?",
      A2: "¿Qué comiste en la última cena familiar?",
      B1: "¿Cómo son las cenas en tu familia?",
      B2: "¿Qué diferencias hay entre una cena familiar de antes y una de ahora?",
      C1: "¿Qué hace que un lugar ajeno se sienta como tu casa?",
      C2: "¿Qué rituales cotidianos crees que sostienen a una familia?",
    },
  },
  {
    id: "galpones-foodtruck",
    kind: "rincon",
    district: "galpones",
    title: "El plato inventado",
    verb: "COMPRAR",
    goal: "Pedir comida, describir sabores y texturas, dar una opinión sincera o amable.",
    cast: [
      {
        id: "wen", name: "Chef Wen", role: "Cocinero del food truck",
        age: "adult", body: "m", build: "average", height: 1.73,
        hair: "short", hairColor: "#0f0f12", skin: "#e6c3a0",
        top: "apron", topColor: "#f4f4f0", bottom: "pants", bottomColor: "#222222",
        extras: ["hat"], pose: "cook", props: ["food-truck", "grill"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "wen", mood: "smile",
        line: {
          A: "En el food truck, un cocinero te saluda. «¡Hola! No hay menú. Yo invento un plato para ti. ¿Dulce o salado?»",
          B: "El cocinero del food truck se asoma entre el humo. «Aquí no hay menú: te miro y te invento un plato. ¿Dulce, salado o picante?»",
          C: "Entre el vapor del food truck asoma un cocinero con gorro. «Menú no tengo. Tengo intuición. Dime tres cosas que te gusten y te cocino un retrato.»",
        },
        options: [
          {
            id: "picante",
            say: { A: "Salado y un poco picante, por favor.", B: "Algo salado, con un toque picante. Pero no demasiado, ¿eh?", C: "Sorpréndeme, pero con piedad: picante sí, incendio no." },
            reply: { A: "Wen cocina rápido. «Toma: tacos de pollo con mango y chile.»", B: "Chef Wen cocina en un minuto. «Bollo al vapor con pollo, mango y un chile muy educado.»", C: "Chef Wen sirve algo humeante. «Bollo al vapor con pollo, mango y un chile que pide permiso antes de entrar.»" },
            mood: "smile", next: "probar",
          },
          {
            id: "dulce",
            say: { A: "Algo dulce. ¡Me encanta el chocolate!", B: "Algo dulce, por favor. Si lleva chocolate, mejor.", C: "Dulce, y si es posible, con chocolate. Hoy necesito consuelo." },
            reply: { A: "Wen sonríe. «Toma: crepe de chocolate con plátano y sal.»", B: "«Crepe de chocolate, plátano frito y una pizca de sal», dice Chef Wen. «Confía.»", C: "«Consuelo con chocolate y sal», dice Chef Wen. «La sal es para que no te pongas demasiado sentimental.»" },
            mood: "smile", next: "probar",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tu comida huele muy bien. ¿Dónde aprendiste a cocinar?", B: "Huele increíble. ¿Quién te enseñó a cocinar así?", C: "Este olor tiene historia. ¿De quién lo aprendiste?" },
            reply: { A: "Wen sonríe. «Mi abuela. Tenía un restaurante pequeño. Este plato es suyo.»", B: "Chef Wen se emociona. «Mi abuela, en su restaurante de cuatro mesas. Toma, su receta secreta.»", C: "Chef Wen baja la voz. «Mi abuela. Cuatro mesas y cola hasta la esquina. Esta receta no la vendo; la regalo.»" },
            mood: "love", next: "probar",
          },
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y le dibujas algo.", C: "Sacas el lápiz y le dibujas tu plato ideal." },
            say: { A: "Mira. Este es mi plato favorito.", B: "Te dibujo mi plato favorito. ¿Puedes hacer algo así?", C: "Mi plato soñado, en versión boceto. ¿Te atreves?" },
            reply: { A: "Wen mira el dibujo. «¿Pizza con helado? ¡Bueno, lo intento!»", B: "Chef Wen estudia el dibujo. «¿Pizza con helado? Es un crimen… Me encanta. Lo hago.»", C: "Chef Wen gira el papel. «Esto es un crimen culinario. Precisamente por eso, acepto.»" },
            mood: "surprised", next: "probar",
          },
          cuchillo: {
            act: { A: "Sacas tu cuchillo.", B: "Sacas tu cuchillo y le ofreces ayuda.", C: "Sacas tu cuchillo y te ofreces como ayudante de cocina." },
            say: { A: "¿Te ayudo a cortar algo?", B: "¿Quieres que te ayude a cortar la cebolla?", C: "Tengo cuchillo y paciencia. ¿Necesitas un ayudante para las cebollas?" },
            reply: { A: "Wen se ríe. «¡Sí! Corta la cebolla. Pequeña, por favor.»", B: "Chef Wen te pasa una cebolla. «Muy fina, por favor. Y si lloras, no es mi culpa.»", C: "Chef Wen te pasa una cebolla con solemnidad. «Bienvenido a la cocina. Aquí se llora en silencio.»" },
            mood: "smile", next: "probar",
          },
        },
      },
      probar: {
        who: "wen", mood: "worried",
        line: {
          A: "Pruebas el plato. Wen te mira, nervioso. «¿Y? ¿Te gusta?»",
          B: "Das el primer bocado. Chef Wen se apoya en el mostrador, nervioso. «Dime la verdad. ¿Cómo está?»",
          C: "Das el primer bocado bajo la mirada intensa de Chef Wen. «Sin piedad. Quiero tu crítica completa.»",
        },
        options: [
          {
            id: "encanta",
            say: { A: "¡Está riquísimo! Es dulce y un poco salado.", B: "¡Está buenísimo! Es crujiente por fuera y suave por dentro.", C: "Es un escándalo. Empieza tímido y termina dándote un abrazo." },
            reply: { A: "Wen grita de alegría. «¡Lo pongo en el menú!»", B: "Chef Wen levanta los brazos. «¡Por fin alguien lo entiende! Mañana va al menú.»", C: "«¿Un abrazo?», dice Chef Wen. «Así se va a llamar: El Abrazo. Mañana lo vendo.»" },
            mood: "love", end: "receta",
          },
          {
            id: "sincero",
            say: { A: "Está bien, pero tiene mucha sal.", B: "Está rico, pero creo que le sobra un poco de sal.", C: "Tiene una idea brillante, aunque la sal se ha venido un poco arriba." },
            reply: { A: "Wen lo prueba. «¡Es verdad! Gracias. Lo cambio.»", B: "Chef Wen prueba y asiente. «Tienes razón. Gracias por ser honesto. Aquí tienes otro.»", C: "Chef Wen prueba, frunce el ceño y asiente. «Crítica aceptada. La sal y yo tendremos una conversación.»" },
            mood: "smile", end: "receta",
          },
          {
            id: "raro",
            say: { A: "Es… muy raro. Pero me gusta.", B: "Es lo más raro que he probado nunca. Y no sé si me gusta.", C: "Mi lengua no sabe si darte las gracias o pedir explicaciones." },
            reply: { A: "Wen se ríe. «¡Raro es bueno!»", B: "Chef Wen se ríe a carcajadas. «Raro es mi especialidad. Vuelve mañana y lo decides.»", C: "Chef Wen se ríe. «Esa es la reacción perfecta. Lo normal no se recuerda.»" },
            mood: "smile", end: "raro",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tu abuela está orgullosa de ti, seguro.", B: "Seguro que tu abuela estaría muy orgullosa de este plato.", C: "Sabe a algo que se cocina pensando en alguien. Tu abuela estaría orgullosa." },
            reply: { A: "Wen sonríe. «Gracias. Hoy es su cumpleaños. Te invito.»", B: "Chef Wen se queda callado y sonríe. «Hoy sería su cumpleaños. Esta cena corre por mi cuenta.»", C: "Chef Wen se quita el gorro un segundo. «Hoy cumpliría noventa. Invita ella, entonces.»" },
            mood: "love", end: "receta",
          },
        },
      },
    },
    ends: {
      receta: { text: { A: "Wen te da otro plato gratis. Comes contento en la acera.", B: "Chef Wen te regala otra ración. Comes en la acera mientras el bajo de La Fábrica marca el ritmo.", C: "Chef Wen te regala otra ración y la promesa de bautizar un plato en tu honor." }, change: "sonrie", recap: "Probaste un plato inventado por Chef Wen." },
      raro: { text: { A: "Comes el plato raro. Wen se ríe y cocina para otro cliente.", B: "Terminas el plato raro y Chef Wen ya inventa otro para el siguiente cliente.", C: "Terminas el plato, todavía sin veredicto. Chef Wen ya experimenta con el siguiente cliente." }, change: "sigue", recap: "Comiste el plato más raro de Los Galpones." },
    },
    speak: {
      A1: "¿Qué comida te gusta más?",
      A2: "¿Qué comiste ayer por la noche?",
      B1: "¿Qué plato de tu familia te trae buenos recuerdos y por qué?",
      B2: "¿Qué prefieres cuando cocinas para alguien: una opinión sincera o una amable?",
      C1: "¿Cómo se critica el trabajo de alguien sin herirlo?",
      C2: "¿En qué sentido la cocina puede ser una forma de memoria?",
    },
  },
  {
    id: "sur-perro",
    kind: "rincon",
    district: "sur",
    title: "Un perro en el balcón",
    verb: "HABLAR",
    goal: "Hablar de mascotas y de convivencia vecinal, aceptar una disculpa y quitar importancia.",
    cast: [
      {
        id: "iker", name: "Iker", role: "Dueño del perro",
        age: "adult", body: "m", build: "average", height: 1.83,
        hair: "short", hairColor: "#b07a3a", skin: "#f5dcc8",
        top: "tshirt", topColor: "#2f7f8f", bottom: "shorts", bottomColor: "#5a5a5a",
        extras: ["beard"], pose: "balcony",
      },
      {
        id: "canelo", name: "Canelo", role: "Perro del balcón", kind: "animal", species: "dog", color: "#9a6b3a", size: "small",
        age: "young", body: "m", build: "slim", height: 0.4,
        hair: "short", hairColor: "#9a6b3a", skin: "#9a6b3a",
        top: "tshirt", topColor: "#9a6b3a", bottom: "pants", bottomColor: "#9a6b3a", pose: "stand",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "iker", mood: "worried",
        line: {
          A: "Un perro pequeño ladra mucho en un balcón. Sale un hombre en camiseta. «¡Perdón! ¡Canelo, calla! Lo siento, siempre ladra.»",
          B: "Un perro marrón te ladra como si fueras un ladrón. Un hombre sale corriendo al balcón. «¡Perdona! Canelo, ¡basta! No sé qué le pasa esta noche.»",
          C: "Un perro diminuto te ladra con la convicción de un león. Su dueño sale al balcón, avergonzado. «Perdona. Canelo se cree el guardián del barrio. Nadie le ha dicho que mide treinta centímetros.»",
        },
        options: [
          {
            id: "tranquilo",
            say: { A: "No pasa nada. ¡Es muy bonito!", B: "Tranquilo, no pasa nada. ¡Qué perro tan simpático!", C: "No te preocupes. Es pequeño, pero tiene la autoestima por las nubes." },
            reply: { A: "Iker sonríe. «Gracias. Tiene dos años. Es muy nervioso.»", B: "Iker se ríe. «Simpático con los de casa. Con los de fuera, ya ves. Tiene dos años.»", C: "Iker se ríe. «Autoestima le sobra. Lo que le falta es saber distinguir a un vecino de un ladrón.»" },
            mood: "smile", next: "vecinos",
          },
          {
            id: "quejarse",
            say: { A: "Ladra mucho. Los vecinos duermen.", B: "Bueno, ladra bastante. ¿Los vecinos no se quejan?", C: "Sin ánimo de ofender, ese perro tiene más volumen que la fiesta del tercero." },
            reply: { A: "Iker se pone triste. «Sí… Ya tengo dos notas en la puerta.»", B: "Iker suspira. «Ya me han dejado dos notas en el ascensor. Estoy desesperado.»", C: "«Lo sé», dice Iker, desanimado. «Tengo una colección de notas anónimas. Algunas muy creativas.»" },
            mood: "sad", next: "vecinos",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola, Canelo. ¡Eres un perro muy bueno!", B: "Hola, Canelo. Tú solo estás cuidando tu casa, ¿verdad?", C: "Canelo, entiendo tu trabajo. Pero yo vengo en son de paz." },
            reply: { A: "Canelo para de ladrar y mueve la cola. Iker no lo puede creer. «¡Nunca hace eso!»", B: "Canelo se calla de golpe y mueve la cola. Iker se queda de piedra. «¿Cómo lo hiciste? ¡Solo me hace caso a mí!»", C: "Canelo se calla y se tumba panza arriba. Iker te mira, impresionado. «¿Me das clases? Llevo dos años intentándolo.»" },
            mood: "love", end: "amigos",
          },
          libro: {
            act: { A: "Le enseñas tu libro a Iker.", B: "Le muestras tu libro a Iker.", C: "Levantas tu libro hacia el balcón." },
            say: { A: "Lee algo en voz alta. A veces los perros se calman.", B: "Dicen que leerles en voz baja calma a los perros. ¿Probamos?", C: "Un método experimental: lectura en voz alta. Si funciona con los niños, ¿por qué no con Canelo?" },
            reply: { A: "Lees un poco. Canelo escucha… y se duerme.", B: "Lees un párrafo en voz baja. Canelo inclina la cabeza, bosteza y se tumba.", C: "Lees un párrafo con voz de documental. Canelo bosteza, ofendido, y se duerme. Iker aplaude en silencio." },
            mood: "smile", end: "dormido",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Asustado por los ladridos, sacas el gas pimienta.", C: "Por reflejo, sacas el gas pimienta ante un perro de treinta centímetros." },
            say: { A: "¡Ese perro me da miedo!", B: "Perdona, pero ese perro me da miedo.", C: "Lo siento, no me fío de nada que ladre así." },
            reply: { A: "Iker abraza a Canelo. «¡No, por favor! ¡Es pequeño!»", B: "Iker toma a Canelo en brazos. «¡No, por favor! Está en un balcón, ¡no puede bajar!»", C: "Iker protege a Canelo con los brazos. «¡Es un primer piso! ¡No puede ni saltar el sofá!»" },
            mood: "scared", next: "vecinos",
          },
        },
      },
      vecinos: {
        who: "iker", mood: "neutral",
        line: {
          A: "Iker tiene a Canelo en brazos. «Vivo solo. Canelo es mi familia. ¿Tú tienes perro?»",
          B: "Iker acaricia a Canelo. «Desde que vivo solo, este es mi compañero. ¿Tú tienes mascota?»",
          C: "Iker sostiene a Canelo como a un niño gruñón. «Me mudé solo y él es mi compañero de piso. ¿Tú tienes animales, o eres más de silencio?»",
        },
        options: [
          {
            id: "mascota",
            say: { A: "Sí, tengo un gato. Es muy tranquilo.", B: "Tengo un gato. Es todo lo contrario: no hace ningún ruido.", C: "Tengo un gato. Su forma de protestar es mucho más silenciosa: tira cosas de la mesa." },
            reply: { A: "Iker se ríe. «¡Un gato! Canelo odia los gatos.»", B: "Iker se ríe. «Un gato. Si Canelo te huele, se vuelve loco.»", C: "«Un saboteador silencioso», dice Iker. «Canelo y tu gato serían un dúo terrible.»" },
            mood: "smile", end: "amigos",
          },
          {
            id: "consejo",
            say: { A: "¿Por qué no pasea más? Así está más tranquilo.", B: "A lo mejor necesita pasear más. Un perro cansado ladra menos.", C: "Un perro cansado es un perro silencioso. ¿Y si lo sacas a correr más tarde?" },
            reply: { A: "Iker asiente. «Sí. Mañana voy al parque.»", B: "Iker asiente. «Tienes razón. Mañana lo llevo al parque de los columpios.»", C: "«Buena idea», dice Iker. «El problema es que el que se cansa primero soy yo.»" },
            mood: "smile", end: "dormido",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Canelo te quiere mucho. Se nota.", B: "Se nota que Canelo te quiere mucho. Por eso te protege.", C: "Canelo no ladra por molestar. Ladra porque eres su persona favorita." },
            reply: { A: "Iker sonríe. «Gracias. Canelo me ayudó mucho este año. Fue un año difícil.»", B: "Iker se emociona. «Gracias. Este año fue duro. Me separé, y él no me dejó solo ni un día.»", C: "Iker se queda callado y abraza a Canelo. «Este año fue difícil. Él fue lo único que no se fue.»" },
            mood: "love", end: "amigos",
          },
        },
      },
    },
    ends: {
      amigos: { text: { A: "Iker y Canelo te dicen adiós desde el balcón. Canelo ya no ladra.", B: "Iker te saluda desde el balcón y Canelo, por fin tranquilo, mueve la cola.", C: "Iker te despide desde el balcón. Canelo, en silencio, te concede el título de vecino honorario." }, change: "sonrie", recap: "Te hiciste amigo de Iker y su perro Canelo." },
      dormido: { text: { A: "Canelo se duerme. Iker entra en casa y apaga la luz.", B: "Canelo se queda dormido. Iker te da las gracias en voz baja y apaga la luz.", C: "Canelo ronca. Iker apaga la luz con cuidado, como quien desactiva una alarma." }, change: "duerme", recap: "Ayudaste a calmar al perro de Iker." },
    },
    speak: {
      A1: "¿Qué mascota tienes o quieres tener?",
      A2: "¿Qué animal tuviste de pequeño?",
      B1: "¿Cómo son los vecinos de tu edificio o de tu calle?",
      B2: "¿Qué normas crees que deberían tener los dueños de perros en la ciudad?",
      C1: "¿Qué nos aportan los animales que no siempre nos dan las personas?",
      C2: "¿Qué dice de nuestra época que tanta gente busque compañía en una mascota?",
    },
  },
];
export default encounters;
