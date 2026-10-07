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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo de la gente con cuchillos?", B: "¿Cómo reaccionas cuando alguien te asusta sin querer?", C: "¿Qué te hace desconfiar de un desconocido antes de que diga una palabra?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando tienes mucho miedo?", B: "¿Alguna vez obedeciste a alguien solo por miedo?", C: "¿Hasta dónde llega la obediencia cuando hay un arma de por medio?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Hay alarma de incendio en tu edificio?", B: "¿Qué fue lo más absurdo que pasó en tu edificio o en tu calle?", C: "¿Por qué el pánico colectivo se contagia tan rápido entre vecinos?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu barrio es seguro de noche?", B: "¿Qué haces para sentirte seguro cuando caminas de noche?", C: "¿Dónde está la frontera entre la prudencia y la paranoia en una ciudad?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes notas para tus vecinos?", B: "¿Cuándo fue la última vez que dejaste una nota escrita a alguien?", C: "¿Qué comunica una nota a mano que no comunica un mensaje de celular?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees antes de dormir?", B: "¿Qué libro le regalarías a una persona mayor que vive sola?", C: "¿Qué libro cambiaría la noche de alguien que no puede dormir?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Quién te ayuda cuando estás solo?", B: "¿Cómo consuelas a alguien que ha perdido a una persona querida?", C: "¿Qué gesto pequeño te ha conmovido más de un desconocido?" } },
    },
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
      "cuchillo-inicio": {
        who: "manolo", mood: "scared",
        line: {
          A: "Un señor mayor te llama desde un balcón. «¡Mis llaves! Están en la acera…» Ve tu cuchillo y retrocede. «¡Eh! ¿Qué haces con ese cuchillo?»",
          B: "Desde un balcón del primer piso, un señor señala sus llaves en la acera. Entonces ve el cuchillo en tu mano y retrocede hasta la puerta. «¿Qué haces con ese cuchillo? ¡No te acerques así!»",
          C: "Un señor en suéter te señala unas llaves en la acera y, a media frase, descubre el cuchillo en tu mano. Retrocede un paso. «¿Estás loco? Baja eso. Si quieres las llaves, quédatelas, pero baja eso.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Es para cortar cosas.", B: "Perdone, ya lo guardo. Lo uso para cortar, nada más.", C: "Perdone el susto. Lo guardo ahora mismo; es una herramienta, no una amenaza." },
            reply: { A: "Don Manolo respira. «Bueno… Guárdalo bien. Y las llaves, despacio.»", B: "Don Manolo suelta el aire. «Bien guardado, ¿eh? Y ahora las llaves, muy despacio.»", C: "Don Manolo exhala. «Guardado y olvidado. Ahora, las llaves, con la calma de un funcionario.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "cortar",
            say: { A: "La cuerda de las llaves está en la reja. La corto.", B: "Las llaves están enganchadas en la reja. Solo voy a cortar el cordón.", C: "Su llavero quedó enredado en la reja; el cuchillo es solo para liberar el cordón." },
            reply: { A: "Don Manolo grita. «¡No! ¡Déjalas! ¡Voy a llamar a la policía!»", B: "Don Manolo grita hacia la calle. «¡Deja las llaves! ¡Carmen, llama a la policía!»", C: "Don Manolo levanta la voz para que lo oiga el barrio. «¡Ni corte ni toque nada! ¡Carmen, la policía!»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "broma",
            say: { A: "¿Miedo de un cuchillo? Es pequeño.", B: "¿En serio le da miedo? Si es un cuchillo pequeñito.", C: "¿Tanto miedo por esto? Con este cuchillo no cortaría ni una manzana." },
            reply: { A: "Don Manolo cierra el balcón. Un vecino llama a la policía.", B: "Don Manolo cierra el balcón de golpe. En el tercero, alguien ya marca el número de la policía.", C: "Don Manolo cierra el balcón sin contestar. Arriba, una vecina describe tu cuchillo por teléfono." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "manolo", mood: "worried",
        line: {
          A: "Don Manolo mira el cuchillo guardado y mira las llaves. «Bueno. ¿Y ahora qué?»",
          B: "Don Manolo sigue pegado a la puerta del balcón. «Bueno, el cuchillo ya no está. Pero ahora no sé si quiero que subas.»",
          C: "Don Manolo observa tu bolsillo como si el cuchillo pudiera volver a salir solo. «Guardado, sí. Pero entenderás que la confianza no se guarda tan rápido.»",
        },
        options: [
          {
            id: "tirar",
            say: { A: "Se las tiro desde aquí. No subo.", B: "Se las tiro desde aquí, sin acercarme. Así no tiene que abrirme.", C: "Se las lanzo desde la acera y no me acerco al portal. Nadie tiene que fiarse de nadie." },
            reply: { A: "Don Manolo extiende las manos. «Sí. Desde ahí. Despacio.»", B: "Don Manolo abre las manos. «Desde ahí, sí. Y sin el cuchillo, por favor.»", C: "Don Manolo extiende los brazos con cautela. «Desde ahí. Y que lo que suba sean solo las llaves.»" },
            mood: "worried", end: "cuchillo-tirar",
          },
          {
            id: "explicar",
            say: { A: "Soy cocinero. Vengo del trabajo.", B: "Soy cocinero, salgo del trabajo. Por eso llevo el cuchillo.", C: "Trabajo en una cocina y acabo de salir; el cuchillo viene conmigo cada noche, por desgracia." },
            reply: { A: "Don Manolo se ríe un poco. «¿Cocinero? Bueno… Tírame las llaves y mañana me haces una tortilla.»", B: "Don Manolo se relaja un poco. «¿Cocinero? Haberlo dicho antes. Tírame las llaves y te perdono.»", C: "Don Manolo sonríe por fin. «Cocinero. Eso lo explica y casi lo disculpa. Tírame las llaves.»" },
            mood: "smile", end: "cuchillo-tirar",
          },
          {
            id: "subir",
            say: { A: "Le subo las llaves. Abra la puerta.", B: "Mejor se las subo. Ábrame el portal.", C: "Se las subo en mano, si me abre el portal." },
            reply: { A: "Don Manolo niega. «No, no. Con un cuchillo no subes.» Llega una patrulla.", B: "Don Manolo niega con la cabeza. «Con cuchillo nadie sube a mi casa.» En la esquina frena una patrulla.", C: "Don Manolo sacude la cabeza. «Con cuchillo, ni mi hijo.» Una patrulla dobla la esquina: alguien ya llamó." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "manolo", mood: "terror",
        line: {
          A: "Un señor mayor te mira desde un balcón. Ve tu pistola y levanta las manos. «¡No, por favor! ¡Quédate las llaves! ¡No dispares!»",
          B: "Un señor en suéter se asoma al balcón y ve la pistola en tu cintura. Levanta las manos despacio. «No, por favor. Las llaves son tuyas. No quiero problemas.»",
          C: "Un señor en suéter se asoma a decir algo sobre unas llaves y ve la pistola. Levanta las manos con la lentitud de sus rodillas. «No dispares. Las llaves, el auto, lo que sea. Yo no he visto nada.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquilo. La guardo. No pasa nada.", B: "Tranquilo, la guardo ahora mismo. No le voy a hacer nada.", C: "Baje las manos, por favor. La guardo. Nadie va a salir herido esta noche." },
            reply: { A: "Don Manolo baja las manos un poco. «¿Por qué llevas eso?»", B: "Don Manolo baja las manos a medias. «¿Por qué llevas un arma por mi calle?»", C: "Don Manolo baja las manos sin dejar de mirar tu cintura. «¿Y por qué pasea un arma por mi acera a estas horas?»" },
            mood: "scared", next: "pistola-patrulla",
          },
          {
            id: "llaves",
            say: { A: "Sus llaves. Aquí están. ¿Se las tiro?", B: "Solo quiero devolverle sus llaves. ¿Se las tiro?", C: "Vengo a devolverle las llaves, nada más. ¿Se las lanzo?" },
            reply: { A: "Don Manolo tiembla. «Sí… sí. Tíralas. Y vete.»", B: "Don Manolo tiembla. «Tíralas y vete, por favor. No voy a decir nada.»", C: "Don Manolo asiente, temblando. «Tíralas, vete, y los dos olvidamos esta conversación.»" },
            mood: "scared", end: "pistola-huida",
          },
          {
            id: "mandar",
            say: { A: "Baje las manos. Abra la puerta.", B: "Baje las manos y abra el portal, por favor.", C: "Baje las manos y ábrame el portal, que subo yo." },
            reply: { A: "Don Manolo obedece, pero se oye una sirena.", B: "Don Manolo obedece con las manos temblando. En la calle suena una sirena.", C: "Don Manolo obedece, pálido. Al fondo, una sirena crece: Carmen ya ha llamado." },
            mood: "terror", next: "pistola-patrulla",
          },
        ],
      },
      "pistola-patrulla": {
        who: "manolo", mood: "scared",
        line: {
          A: "Una patrulla para en la esquina. Don Manolo grita: «¡Aquí! ¡Tiene una pistola!»",
          B: "Una patrulla frena en la esquina con las luces encendidas. Don Manolo señala desde el balcón: «¡Ahí! ¡El de la pistola!»",
          C: "Una patrulla se detiene en la esquina con las luces girando. Don Manolo te señala desde el balcón como un testigo estrella: «¡Ese, agente! ¡El de la pistola!»",
        },
        options: [
          {
            id: "manos",
            say: { A: "Levanto las manos. No tengo nada.", B: "Levanto las manos. Agente, está guardada, no hice nada.", C: "Levanto las manos y hablo claro: está guardada y no he amenazado a nadie." },
            reply: { A: "Los policías te revisan. Don Manolo mira desde arriba.", B: "Los agentes te registran contra la pared. Don Manolo mira desde arriba, muy serio.", C: "Los agentes te registran bajo la farola mientras Don Manolo, desde arriba, narra el momento a las vecinas." },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "correr",
            say: { A: "Corro. Las llaves se quedan en la acera.", B: "Salgo corriendo y dejo las llaves en la acera.", C: "Salgo corriendo; las llaves se quedan brillando en la acera." },
            reply: { A: "Los policías corren detrás. Don Manolo grita: «¡Mis llaves!»", B: "Los agentes salen detrás de ti. Don Manolo grita: «¡Las llaves! ¡Que alguien me suba las llaves!»", C: "Los agentes corren tras de ti. Don Manolo, fiel a sus prioridades, grita: «¡Las llaves, por favor, las llaves!»" },
            mood: "terror", end: "pistola-huida",
          },
          {
            id: "explicar",
            say: { A: "Agente, el señor perdió sus llaves. Yo solo ayudo.", B: "Agente, el señor dejó caer sus llaves y yo quería devolvérselas. Nada más.", C: "Agente, el señor perdió las llaves y yo intentaba devolvérselas. El arma es otro tema, y lo asumo." },
            reply: { A: "Don Manolo dice: «Es verdad. Pero la pistola…» La policía te lleva.", B: "Don Manolo confirma desde arriba: «Es verdad, las llaves sí. Pero lo de la pistola…» Te llevan a la comisaría.", C: "Don Manolo lo confirma: «Las llaves, cierto. La pistola, también.» Y la segunda parte pesa más que la primera." },
            mood: "worried", end: "pistola-policia",
          },
        ],
      },
      "granada-inicio": {
        who: "manolo", mood: "terror",
        line: {
          A: "Un señor mayor grita desde un balcón: «¡Mis llaves!» Entonces ve la granada en tu mano. «¡Una granada! ¡Todos fuera! ¡Fuera del edificio!»",
          B: "Un señor en suéter señala sus llaves en la acera. Al ver la granada en tu mano, grita a todo el edificio: «¡Una granada! ¡Salgan todos! ¡Carmen, los niños!»",
          C: "Un señor en suéter empieza a hablarte de unas llaves y ve la granada. Su grito despierta a la manzana entera: «¡Una granada! ¡Evacuen! ¡Carmen, saca a los niños!» Se encienden todas las luces.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es un juguete! ¡No pasa nada!", B: "¡Es de juguete! Tranquilos, no pasa nada.", C: "¡Es una réplica! Una imitación, nadie corre peligro." },
            reply: { A: "Nadie te escucha. Los vecinos bajan en pijama.", B: "Nadie te cree. Los vecinos bajan las escaleras en pijama y con mascotas.", C: "Nadie te escucha. Los vecinos bajan en pijama, con gatos, bebés y un canario." },
            mood: "scared", next: "granada-vecinos",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. Tome sus llaves.", B: "La guardo ya. Perdón. Tome, sus llaves.", C: "La guardo, pido perdón y le devuelvo sus llaves, en ese orden." },
            reply: { A: "Don Manolo no mira las llaves. Mira el cielo. «¿Oyes eso?»", B: "Don Manolo ni mira las llaves. Mira el cielo. «¿Oyes eso? ¿Es un helicóptero?»", C: "Don Manolo ignora las llaves y levanta la vista. «¿Oyes eso? Dime que no es un helicóptero.»" },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "tirar",
            say: { A: "¡Se la tiro con las llaves!", B: "¡Se la tiro con las llaves, así no la tengo yo!", C: "¡Se la lanzo junto con las llaves y se acabó el problema!" },
            reply: { A: "Don Manolo cierra el balcón. La calle se llena de vecinos.", B: "Don Manolo cierra el balcón de un golpe. Abajo, la calle se llena de vecinos en pijama.", C: "Don Manolo cierra el balcón como una trinchera. Abajo, el vecindario se reúne en pijama." },
            mood: "terror", next: "granada-vecinos",
          },
        ],
      },
      "granada-vecinos": {
        who: "manolo", mood: "scared",
        line: {
          A: "Todos los vecinos están en la calle. Don Manolo grita desde arriba: «¡Yo no puedo bajar! ¡Mi rodilla!»",
          B: "La calle está llena de vecinos en pijama. Don Manolo grita desde el balcón: «¡Yo no puedo bajar con esta rodilla! ¡Y sin llaves no puedo ni cerrar!»",
          C: "Medio barrio está en la acera, en pijama, con los ojos puestos en ti. Don Manolo, el único que no ha evacuado, grita: «¡Yo no bajo! ¡La rodilla! ¡Y no tengo llaves para cerrar!»",
        },
        options: [
          {
            id: "calmar",
            say: { A: "¡Escuchen! Es de juguete. Miren.", B: "¡Escuchen todos! Es de juguete. Miren, la abro.", C: "¡Atención, vecinos! Es una réplica. Miren: la abro y no pasa nada." },
            reply: { A: "La abres. Está vacía. Los vecinos se ríen. Don Manolo también.", B: "La abres: está vacía. Un silencio… y luego todo el edificio se ríe, Don Manolo incluido.", C: "La abres: hueca. Un segundo de silencio y la manzana entera se ríe, Don Manolo el primero." },
            mood: "surprised", end: "granada-broma",
          },
          {
            id: "llaves",
            say: { A: "Don Manolo, le subo las llaves con Carmen.", B: "Don Manolo, Carmen y yo le subimos las llaves.", C: "Don Manolo, Carmen y yo le subimos las llaves mientras esto se calma." },
            reply: { A: "Carmen te mira la mano. «¿Con eso? Ni hablar.» Suena un helicóptero.", B: "Carmen mira la granada. «¿Contigo y con eso? Ni hablar.» Un helicóptero cruza el cielo.", C: "Carmen mira tu mano. «¿Contigo y con esa cosa? Jamás.» Un helicóptero empieza a rondar la calle." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón a todos.", B: "Mejor me voy. Perdón a todos por el susto.", C: "Creo que mi presencia ya no ayuda. Perdón a todos." },
            reply: { A: "Los vecinos te dejan pasar. Arriba suena un helicóptero.", B: "Los vecinos abren un pasillo. Sobre la calle ya suena un helicóptero.", C: "Los vecinos abren un pasillo en silencio. Arriba, un helicóptero decide quedarse." },
            mood: "worried", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "manolo", mood: "worried",
        line: {
          A: "Un señor mayor te llama desde un balcón. «Mis llaves están en la acera.» Ve el gas pimienta en tu mano. «¿Gas? Bien hecho. Este barrio de noche no es seguro.»",
          B: "Un señor en suéter te señala sus llaves en la acera. Ve el gas pimienta. «¿Gas pimienta? Haces bien. En esta calle, de noche, pasa de todo. Pero no me apuntes a mí, ¿eh?»",
          C: "Un señor en suéter te señala unas llaves y repara en el gas pimienta de tu mano. «Gas pimienta. Prudente. Esta calle de noche es un documental. Solo te pido que apuntes hacia otro lado.»",
        },
        options: [
          {
            id: "sombra",
            say: { A: "Hay alguien detrás de los autos. ¡Viene hacia las llaves!", B: "Hay alguien escondido detrás de los autos. ¡Va hacia las llaves!", C: "Hay una sombra entre los autos y se mueve hacia sus llaves." },
            reply: { A: "Don Manolo grita: «¡Eh! ¡Esas llaves son mías!»", B: "Don Manolo grita desde el balcón: «¡Eh, tú! ¡Esas llaves son mías!»", C: "Don Manolo grita con voz de alcalde: «¡Esas llaves tienen dueño y está mirando!»" },
            mood: "scared", next: "gas-sombra",
          },
          {
            id: "guardar",
            say: { A: "Lo guardo. Usted no es peligroso.", B: "Lo guardo. Usted no parece peligroso.", C: "Lo guardo; usted, desde ahí arriba, no parece una amenaza." },
            reply: { A: "Don Manolo se ríe. «Peligroso, no. Pesado, sí.» Alguien se mueve detrás de los autos.", B: "Don Manolo se ríe. «Peligroso, no. Pesado, bastante.» Algo se mueve detrás de los autos.", C: "Don Manolo se ríe. «Peligroso, no. Insistente, mucho.» Detrás de los autos, algo se mueve." },
            mood: "smile", next: "gas-sombra",
          },
          {
            id: "desconfiar",
            say: { A: "¿Y usted? ¿Es su casa de verdad?", B: "¿Y cómo sé que esa es su casa de verdad?", C: "¿Y cómo sé que esa casa es suya y no está buscando que alguien le abra?" },
            reply: { A: "Don Manolo se ofende. «¡Cuarenta años aquí!» Una sombra se acerca a las llaves.", B: "Don Manolo se ofende. «¡Cuarenta años en este balcón!» Entre los autos, una sombra se acerca a las llaves.", C: "Don Manolo se indigna. «¡Cuarenta años regando estos geranios!» Entre los autos, alguien se agacha hacia las llaves." },
            mood: "angry", next: "gas-sombra",
          },
        ],
      },
      "gas-sombra": {
        who: "manolo", mood: "scared",
        line: {
          A: "Una persona con capucha toma las llaves. Don Manolo grita: «¡Ladrón! ¡Mis llaves!»",
          B: "Una figura con capucha recoge las llaves de la acera. Don Manolo grita: «¡Ladrón! ¡Esas son mis llaves!»",
          C: "Una figura con capucha se agacha y recoge las llaves. Don Manolo grita como si le robaran la casa entera: «¡Ladrón! ¡Mis llaves!»",
        },
        options: [
          {
            id: "gas",
            say: { A: "¡Suelta las llaves!", B: "¡Suelta las llaves ahora mismo!", C: "¡Suelta esas llaves o uso esto!" },
            reply: { A: "Usas el gas. El ladrón tose y suelta las llaves. Corre.", B: "Aprietas el gas. El ladrón tose, suelta las llaves y sale corriendo.", C: "Rocías el gas. El ladrón tose, suelta las llaves y huye calle abajo maldiciendo." },
            mood: "angry", end: "gas-ladron",
          },
          {
            id: "hablar",
            say: { A: "¡Eh! ¿Quién eres?", B: "¡Eh! ¿Quién eres y qué haces con esas llaves?", C: "¡Eh, un momento! ¿Quién eres y por qué recoges llaves ajenas?" },
            reply: { A: "La capucha se quita. Es Carmen. «¡Soy la vecina! ¡Vengo a ayudar!»", B: "La figura se quita la capucha: es Carmen, en bata. «¡Soy la vecina del bajo! ¡Vengo a ayudar, no a robar!»", C: "La capucha cae: es Carmen, en bata y zapatillas. «¡Soy la vecina del bajo! ¿Me ibas a rociar por ayudar?»" },
            mood: "surprised", end: "gas-carmen",
          },
          {
            id: "gritar",
            say: { A: "¡Policía! ¡Ladrón!", B: "¡Policía! ¡Un ladrón!", C: "¡Policía! ¡Están robando!" },
            reply: { A: "La capucha se quita. Es Carmen, enfadada. «¡Soy la vecina!»", B: "La figura se quita la capucha: es Carmen, furiosa. «¡Soy la vecina! ¡Deja de gritar!»", C: "La capucha cae y aparece Carmen, furiosa. «¡Soy la vecina! ¡Y ahora todo el barrio piensa que soy ladrona!»" },
            mood: "angry", end: "gas-carmen",
          },
        ],
      },
      "lapiz-inicio": {
        who: "manolo", mood: "worried",
        line: {
          A: "Un señor mayor te llama desde un balcón. «Se me cayeron las llaves.» Ve tu lápiz. «¿Un lápiz? Espera, apunta el código: 1-9-4-7. Yo siempre lo olvido.»",
          B: "Un señor en suéter te señala sus llaves en la acera. Ve tu lápiz y se ilumina. «¿Llevas lápiz? Apunta el código del portal: 1947. Yo lo olvido cada dos por tres.»",
          C: "Un señor en suéter te señala unas llaves y ve el lápiz en tu mano. «¿Un lápiz? Por fin alguien preparado. Apunta: 1947, el código del portal. Lo olvido más que mi propio cumpleaños.»",
        },
        options: [
          {
            id: "apuntar",
            say: { A: "Apunto: 1947. ¿Y su puerta?", B: "Apuntado: 1947. ¿Y cuál es su puerta?", C: "Anotado: 1947. ¿Puerta y piso, para completar la ficha?" },
            reply: { A: "Don Manolo sonríe. «Primero A. Escríbelo también.»", B: "Don Manolo sonríe. «Primero A. Apúntalo también, que lo vas a necesitar.»", C: "Don Manolo sonríe. «Primero A. Anótalo, que con esta rodilla no bajo a corregirte.»" },
            mood: "smile", next: "lapiz-nota",
          },
          {
            id: "nota",
            say: { A: "Le escribo una nota con el código. Para la nevera.", B: "Le escribo una nota con el código para que la pegue en la nevera.", C: "Le escribo el código en una nota, para la nevera, y así deja de olvidarlo." },
            reply: { A: "Don Manolo se ríe. «¡Buena idea! Pero súbela con las llaves.»", B: "Don Manolo se ríe. «Eso es tener cabeza. Súbemela con las llaves.»", C: "Don Manolo se ríe. «Una nota en la nevera. Eso sí es tecnología. Súbemela con las llaves.»" },
            mood: "smile", next: "lapiz-nota",
          },
          {
            id: "dibujar",
            say: { A: "Mejor dibujo un mapa: la acera, las llaves, su balcón.", B: "Mejor le dibujo un mapa: la acera, las llaves y su balcón.", C: "Antes de nada, un croquis: acera, llaves, balcón. Para que conste dónde cayeron." },
            reply: { A: "Don Manolo se ríe. «¿Un mapa? ¡Si las veo desde aquí! Anda, toca el timbre de Carmen.»", B: "Don Manolo se ríe. «¿Un mapa? Si las estoy viendo. Mejor déjale una nota a Carmen, que tiene copia.»", C: "Don Manolo se ríe. «¿Un mapa? Las tengo a la vista. Mejor escríbele una nota a Carmen, que tiene copia y mal despertar.»" },
            mood: "smile", next: "lapiz-nota",
          },
        ],
      },
      "lapiz-nota": {
        who: "manolo", mood: "neutral",
        line: {
          A: "Tienes el código escrito en la mano. Don Manolo dice: «Carmen, del bajo B, tiene otra copia. Pero duerme.»",
          B: "El código está apuntado. Don Manolo añade: «Carmen, la del bajo B, tiene una copia de mis llaves. Pero a esta hora duerme como una piedra.»",
          C: "Con el código anotado, Don Manolo completa la información: «Carmen, bajo B, tiene copia. Pero despertarla a esta hora es una decisión seria.»",
        },
        options: [
          {
            id: "carmen",
            say: { A: "Escribo una nota para Carmen y la paso bajo su puerta.", B: "Le escribo una nota a Carmen y la paso por debajo de su puerta.", C: "Le dejo a Carmen una nota bajo la puerta: así decide ella cuándo despertarse." },
            reply: { A: "Carmen abre en bata. «¿Una nota? Hacía años.» Sube las llaves.", B: "Carmen abre en bata, con la nota en la mano. «Una nota escrita a mano. Hacía años.» Sube las llaves sin quejarse.", C: "Carmen abre en bata, conmovida por la nota. «Nadie me escribe a mano desde 1998.» Sube las llaves de buen humor." },
            mood: "smile", end: "lapiz-carmen",
          },
          {
            id: "numero",
            say: { A: "Le dejo mi número en el buzón. Si pierde las llaves, me llama.", B: "Le dejo mi número en el buzón. Si vuelve a perder las llaves, me llama.", C: "Le dejo mi número en el buzón, por si las llaves vuelven a escaparse otra noche." },
            reply: { A: "Don Manolo asiente. «Lo voy a llamar. Y no por las llaves.»", B: "Don Manolo sonríe. «Te voy a llamar. Y no será por las llaves.»", C: "Don Manolo sonríe desde arriba. «Te llamaré. Y las llaves serán la excusa.»" },
            mood: "love", end: "lapiz-numero",
          },
          {
            id: "subir",
            say: { A: "Entro con el código y le subo las llaves.", B: "Entro con el código y se las subo yo mismo.", C: "Uso el código, subo y le entrego las llaves en mano." },
            reply: { A: "Don Manolo te espera en la puerta. «¡Gracias! Y guarda ese lápiz, que vale oro.»", B: "Don Manolo te recibe en zapatillas. «¡Mil gracias! Ese lápiz vale más que mis llaves.»", C: "Don Manolo te recibe en zapatillas. «Gracias. Ese lápiz ha hecho más por mí que la mitad de mis vecinos.»" },
            mood: "smile", end: "lapiz-numero",
          },
        ],
      },
      "libro-inicio": {
        who: "manolo", mood: "smile",
        line: {
          A: "Un señor mayor te llama desde un balcón. «Mis llaves están en la acera.» Ve tu libro y se ríe. «¿Un libro a estas horas? ¿Vienes de la biblioteca?»",
          B: "Un señor en suéter te señala sus llaves en la acera. Ve tu libro y se ríe. «¿Un libro a medianoche? ¿Qué haces con un libro en la calle a estas horas?»",
          C: "Un señor en suéter te señala unas llaves y, al ver tu libro, suelta una risa. «¿Un libro a medianoche? Pensé que la gente de tu edad solo paseaba el celular.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Es muy bueno. ¿Quiere que le lea algo mientras busco?", B: "Es buenísimo. ¿Le leo un trozo mientras recojo sus llaves?", C: "Es excelente. ¿Le leo un fragmento mientras rescato sus llaves?" },
            reply: { A: "Don Manolo se sienta en el balcón. «Sí. Hace años que nadie me lee.»", B: "Don Manolo acerca una silla al balcón. «Lee, lee. Hace años que nadie me lee nada.»", C: "Don Manolo acerca una silla con solemnidad. «Adelante. La última persona que me leyó fue mi mujer.»" },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "paquete",
            say: { A: "Pongo las llaves en el libro y se lo tiro todo.", B: "Meto las llaves en el libro y se lo tiro todo junto.", C: "Guardo las llaves entre las páginas y le lanzo el paquete completo." },
            reply: { A: "Don Manolo atrapa el libro. «¡Las llaves y una novela! ¡Qué noche!»", B: "Don Manolo atrapa el libro contra el pecho. «¡Llaves y lectura! ¡Esto sí es servicio!»", C: "Don Manolo caza el libro al vuelo. «Llaves con novela incluida. Hoy el barrio funciona.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "excusa",
            say: { A: "Es para no hablar con nadie en el autobús.", B: "Lo llevo para que nadie me hable en el autobús.", C: "Es mi escudo: con un libro abierto, nadie te habla en el autobús." },
            reply: { A: "Don Manolo se ríe. «Pues conmigo no funciona. ¿Qué lees?»", B: "Don Manolo se ríe. «Pues conmigo ha fallado. ¿Qué es? ¿Novela?»", C: "Don Manolo se ríe. «Conmigo el escudo no funciona. ¿Qué lees? Y no me digas que es de autoayuda.»" },
            mood: "smile", next: "libro-lectura",
          },
        ],
      },
      "libro-lectura": {
        who: "manolo", mood: "smile",
        line: {
          A: "Lees en voz alta desde la acera. Don Manolo escucha con los ojos cerrados. «Sigue, sigue.»",
          B: "Lees un párrafo en voz alta bajo la farola. Don Manolo escucha con los ojos cerrados. «No pares. Esto es mejor que la tele.»",
          C: "Lees bajo la farola. Don Manolo escucha con los ojos cerrados, como en misa. «No pares. Hacía años que la calle no sonaba así.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Se lo regalo. Se lo tiro con las llaves.", B: "Se lo regalo. Se lo tiro junto con las llaves.", C: "Es suyo. Se lo lanzo con las llaves y termina usted la historia." },
            reply: { A: "Don Manolo lo atrapa. «¡Gracias! Mañana lo termino.»", B: "Don Manolo lo atrapa con las dos manos. «Mañana lo termino. Y te cuento el final.»", C: "Don Manolo lo atrapa y lo abraza. «Mañana lo termino. Y si el final es malo, te lo devuelvo.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "domingo",
            say: { A: "Vengo el domingo y leemos más.", B: "¿Y si vengo el domingo y seguimos leyendo?", C: "Propongo continuar el domingo: capítulo dos, con café." },
            reply: { A: "Don Manolo aplaude. «¡El domingo! Hago paella y tú lees.»", B: "Don Manolo aplaude. «El domingo hago paella. Tú traes el libro y yo el arroz.»", C: "Don Manolo aplaude. «Domingo, paella y capítulo dos. Es la mejor cita que tengo este año.»" },
            mood: "love", end: "libro-club",
          },
          {
            id: "llaves",
            say: { A: "Bueno, sus llaves. Se las tiro.", B: "Bueno, basta de leer. Le tiro las llaves.", C: "Fin del capítulo. Ahora, sus llaves." },
            reply: { A: "Don Manolo atrapa las llaves. «Gracias. ¿Y el final del libro?»", B: "Don Manolo atrapa las llaves. «Gracias. Pero ahora me quedo sin saber el final.»", C: "Don Manolo atrapa las llaves. «Gracias. Y ahora, ¿cómo duermo sin saber el final?»" },
            mood: "smile", end: "libro-club",
          },
        ],
      },
      "corazon-inicio": {
        who: "manolo", mood: "love",
        line: {
          A: "Un señor mayor te llama desde un balcón. «Mis llaves…» Ve tu corazón y sonríe. «Ay, qué bonito. Mi mujer tenía esa misma sonrisa.»",
          B: "Un señor en suéter te señala sus llaves en la acera. Ve tu corazón y se le ablanda la cara. «Vaya… Hacía mucho que nadie me miraba así. Mi mujer, quizá.»",
          C: "Un señor en suéter te señala unas llaves y, al ver tu corazón, se queda callado un segundo. «Perdona. Es que hacía años que nadie me miraba con esa cara. Desde mi mujer.»",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "¿Cómo se llamaba su mujer?", B: "¿Cómo se llamaba su mujer, Don Manolo?", C: "Cuénteme de ella. ¿Cómo se llamaba?" },
            reply: { A: "«Rosario. Cuarenta años. Ella llevaba las llaves.»", B: "Don Manolo se apoya en la baranda. «Rosario. Cuarenta años juntos. Ella llevaba las llaves y yo las flores.»", C: "Don Manolo se apoya en la baranda. «Rosario. Cuarenta años. Ella las llaves, yo los geranios. Un buen reparto.»" },
            mood: "love", next: "corazon-rosario",
          },
          {
            id: "llaves",
            say: { A: "Primero sus llaves. Luego hablamos.", B: "Primero recuperamos sus llaves. Luego, si quiere, hablamos.", C: "Primero las llaves, que es lo urgente. Después, si le apetece, charlamos." },
            reply: { A: "Don Manolo sonríe. «Sube. El código es 1947. Hay café.»", B: "Don Manolo sonríe. «Sube, el código es 1947. Y hay café, si te quedas un rato.»", C: "Don Manolo sonríe. «Sube: 1947. Y si te quedas, hay café y una historia larga.»" },
            mood: "love", next: "corazon-rosario",
          },
          {
            id: "beso",
            say: { A: "Le mando un beso desde aquí.", B: "Le mando un beso desde la acera.", C: "Le lanzo un beso desde la acera, con las llaves." },
            reply: { A: "Don Manolo se ríe y lo atrapa. «¡Y las llaves también!»", B: "Don Manolo lo atrapa en el aire, riéndose. «¡Y ahora las llaves, que las atrapo igual!»", C: "Don Manolo lo atrapa con las dos manos. «Este no lo pierdo. Las llaves, ya veremos.»" },
            mood: "love", end: "corazon-ventana",
          },
        ],
      },
      "corazon-rosario": {
        who: "manolo", mood: "love",
        line: {
          A: "Don Manolo mira la calle. «Rosario murió hace dos años. Desde entonces, pierdo todo.»",
          B: "Don Manolo mira la calle vacía. «Rosario se fue hace dos años. Desde entonces se me cae todo: las llaves, los días…»",
          C: "Don Manolo mira la calle como si esperara a alguien. «Rosario murió hace dos años. Desde entonces se me caen las llaves, las fechas y, a veces, las ganas.»",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Bajo las llaves y le doy un abrazo.", B: "Le subo las llaves y, si me deja, un abrazo.", C: "Le subo las llaves y, con su permiso, un abrazo." },
            reply: { A: "Don Manolo baja despacio a abrir. Te abraza en la puerta.", B: "Don Manolo baja despacio, escalón a escalón, y te abraza en el portal.", C: "Don Manolo baja despacio, rodilla y todo, y te abraza en el portal sin decir nada." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "charla",
            say: { A: "Me quedo un rato. Hábleme de ella.", B: "Me quedo un rato aquí abajo. Hábleme de ella.", C: "Me quedo un rato bajo el balcón. Cuénteme cómo era." },
            reply: { A: "Don Manolo habla de Rosario hasta muy tarde.", B: "Don Manolo habla de Rosario hasta que la luz de Carmen se apaga.", C: "Don Manolo habla de Rosario hasta que la calle se queda vacía y las farolas parpadean." },
            mood: "love", end: "corazon-ventana",
          },
          {
            id: "paella",
            say: { A: "¿El domingo hace paella? Yo vengo.", B: "¿Es verdad que hace paella los domingos? Yo me apunto.", C: "Me han dicho que hace paella los domingos. Me invito." },
            reply: { A: "Don Manolo se ríe. «¡Paella para dos! Hacía tiempo.»", B: "Don Manolo se ríe. «¡Paella para dos! Hacía mucho que no cocinaba para alguien.»", C: "Don Manolo se ríe. «Paella para dos. Rosario estaría encantada de verme cocinar otra vez.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      llaves: { text: { A: "Don Manolo tiene sus llaves. Enciende la luz y te saluda desde el balcón.", B: "Don Manolo recupera sus llaves. Se enciende la luz del salón y te saluda desde el balcón.", C: "Don Manolo recupera sus llaves y enciende todas las luces de la casa, como si celebrara un gol." }, change: "luz", recap: "Devolviste las llaves a Don Manolo." },
      cesta: { text: { A: "La cesta sube con las llaves. Don Manolo se ríe y aplaude.", B: "La cesta sube despacio con las llaves. Don Manolo aplaude y te invita a su paella del domingo.", C: "La cesta asciende con solemnidad. Don Manolo la recibe como un trofeo y te invita a paella el domingo." }, change: "sonrie", recap: "Subiste las llaves de Don Manolo con una cesta." },
      carmen: { text: { A: "Carmen sube las llaves. Don Manolo y Carmen se ríen en el balcón.", B: "Carmen le sube las llaves. Al rato, los dos discuten y se ríen en el balcón.", C: "Carmen sube las llaves y se queda a regañar a Don Manolo. Por las risas, no parece la primera vez." }, change: "llama", recap: "Despertaste a Carmen para ayudar a Don Manolo." },
      buzon: { text: { A: "Dejas las llaves en el buzón. Don Manolo cierra el balcón.", B: "Dejas las llaves en el buzón. Don Manolo cierra el balcón, un poco triste.", C: "Dejas las llaves en el buzón. Don Manolo cierra el balcón despacio, con la noche todavía sin resolver." }, change: "triste", recap: "Dejaste las llaves de Don Manolo en el buzón." },
      policia: { text: { A: "Llega la policía. Explicas todo. Don Manolo recibe sus llaves.", B: "Llega la policía. Tardas un rato en explicar el malentendido, pero Don Manolo recibe sus llaves.", C: "Llega un coche patrulla. Tras una explicación larga y torpe, un agente le sube las llaves a Don Manolo." }, change: "policia", recap: "Un malentendido con Don Manolo terminó con la policía." },
      "cuchillo-tirar": { text: { A: "Tiras las llaves desde lejos. Don Manolo las atrapa. «Gracias. Y guarda ese cuchillo.»", B: "Lanzas las llaves desde la acera de enfrente. Don Manolo las atrapa. «Gracias. Y el cuchillo, en casa, por favor.»", C: "Lanzas las llaves desde la acera opuesta. Don Manolo las atrapa y se despide: «Gracias. Y la próxima vez, el cuchillo se queda en la cocina.»" }, change: "luz", recap: "Devolviste las llaves a Don Manolo después del susto del cuchillo." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Don Manolo recibe sus llaves.", B: "Llega la policía, te quita el cuchillo y hace preguntas. Un agente le sube las llaves a Don Manolo.", C: "Llega una patrulla. Te requisan el cuchillo y te hacen un interrogatorio largo. Un agente sube las llaves a Don Manolo." }, change: "policia", recap: "El cuchillo acabó con la policía bajo el balcón de Don Manolo." },
      "pistola-policia": { text: { A: "La policía te lleva. Don Manolo recibe sus llaves de un agente.", B: "La policía te lleva a la comisaría. Un agente le sube las llaves a Don Manolo, que sigue temblando.", C: "Te llevan a la comisaría. Un agente sube las llaves a Don Manolo, que tarda media hora en soltar la baranda." }, change: "policia", recap: "La pistola acabó con la policía bajo el balcón de Don Manolo." },
      "pistola-huida": { text: { A: "Corres por la calle. Don Manolo se queda sin llaves y con miedo.", B: "Huyes calle abajo. Don Manolo se queda en el balcón, sin llaves y con el susto en el cuerpo.", C: "Desapareces por la calle. Don Manolo se queda en el balcón, sin llaves, con las manos todavía medio levantadas." }, change: "huye", recap: "Huiste de la calle de Don Manolo con la pistola." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la calle. Todos los vecinos están fuera. Don Manolo, en el balcón, grita: «¡Mis llaves!»", B: "Un helicóptero ilumina la calle con un foco. Los vecinos esperan en pijama. Don Manolo, desde el balcón, sigue gritando por sus llaves.", C: "Un helicóptero clava su foco sobre la calle. Los vecinos esperan en pijama y Don Manolo, único en su balcón, sigue reclamando sus llaves." }, change: "helicoptero", recap: "La granada evacuó el edificio de Don Manolo y trajo un helicóptero." },
      "granada-broma": { text: { A: "Todos se ríen. Carmen sube las llaves. Don Manolo dice: «¡Qué noche!»", B: "Los vecinos vuelven a casa riéndose. Carmen sube las llaves. Don Manolo enciende la luz: «¡Qué noche!»", C: "Los vecinos vuelven a casa comentando la broma. Carmen sube las llaves y Don Manolo enciende todas las luces: «¡Qué noche, Rosario, qué noche!»" }, change: "luz", recap: "La granada vació el edificio de Don Manolo, pero todo acabó en risas." },
      "gas-ladron": { text: { A: "El ladrón huye. Recoges las llaves. Don Manolo aplaude.", B: "El ladrón huye tosiendo. Recoges las llaves y Don Manolo aplaude desde el balcón.", C: "El ladrón se pierde calle abajo, tosiendo. Recoges las llaves y Don Manolo aplaude como en el teatro." }, change: "corre", recap: "Defendiste las llaves de Don Manolo con el gas pimienta." },
      "gas-carmen": { text: { A: "Carmen sube las llaves, enfadada. Don Manolo se ríe.", B: "Carmen sube las llaves, todavía enfadada. Don Manolo se ríe desde el balcón.", C: "Carmen sube las llaves, indignada. Don Manolo se ríe tanto que casi tira un geranio." }, change: "llama", recap: "Casi rocías a Carmen, la vecina de Don Manolo, con el gas." },
      "lapiz-carmen": { text: { A: "Carmen sube las llaves con tu nota. Don Manolo enciende la luz.", B: "Carmen sube las llaves con tu nota en la mano. Don Manolo enciende la luz del salón.", C: "Carmen sube las llaves con tu nota doblada en el bolsillo. Don Manolo enciende la luz del salón." }, change: "llama", recap: "Una nota escrita a mano despertó a Carmen y salvó las llaves de Don Manolo." },
      "lapiz-numero": { text: { A: "Don Manolo tiene las llaves y tu número. Te saluda desde el balcón.", B: "Don Manolo tiene las llaves y tu número apuntado. Te saluda desde el balcón.", C: "Don Manolo tiene las llaves y, en la nevera, tu número con letra grande. Te saluda desde el balcón." }, change: "sonrie", recap: "Dejaste tu número escrito a Don Manolo junto con sus llaves." },
      "libro-regalo": { text: { A: "Don Manolo tiene las llaves y el libro. Enciende la luz y lee.", B: "Don Manolo tiene las llaves y tu libro. Enciende la luz del salón y se pone a leer.", C: "Don Manolo tiene las llaves y tu libro. La luz del salón se enciende y se queda encendida hasta tarde." }, change: "luz", recap: "Regalaste tu libro a Don Manolo con sus llaves." },
      "libro-club": { text: { A: "Don Manolo tiene sus llaves. El domingo hay paella y libro.", B: "Don Manolo recupera sus llaves. El domingo hay paella, café y capítulo dos.", C: "Don Manolo recupera sus llaves. El domingo hay paella y continúa la lectura: el club más pequeño del barrio." }, change: "sonrie", recap: "Fundaste un club de lectura de dos con Don Manolo." },
      "corazon-abrazo": { text: { A: "Don Manolo te abraza en el portal. Tiene sus llaves.", B: "Don Manolo te abraza en el portal, con las llaves en la mano.", C: "Don Manolo te abraza en el portal, con las llaves apretadas en la mano y los ojos húmedos." }, change: "abraza", recap: "Don Manolo te abrazó al recibir sus llaves." },
      "corazon-ventana": { text: { A: "Hablas con Don Manolo hasta tarde. La luz de su casa sigue encendida.", B: "Hablas con Don Manolo hasta muy tarde. Su luz se queda encendida, pero esta noche no es por tristeza.", C: "Hablas con Don Manolo hasta que la calle se vacía. Su luz sigue encendida, y por una vez no es insomnio." }, change: "luz", recap: "Hablaste de Rosario con Don Manolo bajo el balcón." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces si ves una pelea en tu calle?", B: "¿Alguna vez viste una pelea de verdad y cómo reaccionaste?", C: "¿Qué convierte una discusión de vecinos en una amenaza real?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si alguien tiene un arma en tu edificio?", B: "¿Cómo reaccionarías si un vecino llevara un arma a una fiesta?", C: "¿Qué pierde una comunidad cuando el miedo entra por la escalera?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué llevas si tienes que salir de casa corriendo?", B: "¿Qué fue lo más caótico que pasó en una fiesta a la que fuiste?", C: "¿Por qué el caos y la risa suelen aparecer juntos cuando hay pánico?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Confías en tus vecinos?", B: "¿Qué haces para sentirte seguro en tu propio edificio?", C: "¿Cuándo la desconfianza hacia los vecinos deja de ser prudencia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes acuerdos en papel?", B: "¿Firmarías un acuerdo escrito con un vecino ruidoso?", C: "¿Por qué un papel firmado cambia la forma en que cumplimos una promesa?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees en voz alta a alguien?", B: "¿Qué libro leerías en voz alta para calmar una fiesta?", C: "¿Qué poder tiene una lectura en voz alta sobre un grupo de gente?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Cómo celebras tu cumpleaños?", B: "¿Cómo consuelas a alguien que tiene un cumpleaños triste?", C: "¿Qué nos reconcilia con un vecino que nos ha molestado?" } },
    },
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
      "cuchillo-inicio": {
        who: "elena", mood: "scared",
        line: {
          A: "Una mujer en pijama golpea una puerta con música muy fuerte. Te ve, ve tu cuchillo y retrocede. «¿Qué haces con ese cuchillo? ¡Estás loco!»",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra con el bajo. Se gira, ve tu cuchillo y retrocede hasta la escalera. «¿Qué haces con eso? ¿Estás loco? ¡No te acerques así!»",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Al girarse ve tu cuchillo y retrocede hasta la escalera. «¿Un cuchillo? ¿Estás loco? Yo vengo a quejarme, no a un asalto.»",
        },
        options: [
          {
            id: "calmar",
            say: { A: "Tranquila. Es para la fiesta. Para cortar la tarta.", B: "Tranquila, es para la fiesta. Alguien tiene que cortar la tarta.", C: "Calma. Es para la fiesta: alguien tiene que cortar la tarta y no será con una cuchara." },
            reply: { A: "Elena no te cree. La puerta se abre y sale Gonzalo… con un cuchillo de cocina.", B: "Elena no se lo cree. En ese momento la puerta se abre y aparece Gonzalo con un cuchillo de cocina en la mano.", C: "Elena no te cree ni una palabra. La puerta se abre y aparece Gonzalo, con un cuchillo de cocina y restos de tarta." },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Vengo a quejarme también.", B: "Perdón, ya lo guardo. Yo también vengo a quejarme de la música.", C: "Perdón, lo guardo. También vengo por la música, no por otra cosa." },
            reply: { A: "Elena respira. Se abre la puerta y sale Gonzalo con un cuchillo. «¿Quién grita?»", B: "Elena suelta el aire. Entonces se abre la puerta y Gonzalo asoma con un cuchillo de cocina. «¿Quién está gritando?»", C: "Elena respira por fin. La puerta se abre y Gonzalo sale con un cuchillo de cocina. «¿Quién grita aquí fuera?»" },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "amenazar",
            say: { A: "Si no bajan la música, corto el cable.", B: "O bajan la música o corto el cable del altavoz.", C: "O la música baja o el cable del altavoz conoce mi cuchillo." },
            reply: { A: "Elena saca el teléfono. «Voy a llamar a la policía. Ahora.»", B: "Elena saca el teléfono sin dejar de mirar tu cuchillo. «Voy a llamar a la policía, y no es una amenaza.»", C: "Elena marca sin quitar la vista del cuchillo. «Voy a llamar a la policía. Y tú eres el motivo, no la música.»" },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "gonzalo", mood: "angry",
        line: {
          A: "Gonzalo ve tu cuchillo y levanta el suyo. «¡Eh! ¿Qué pasa aquí?» Los dos cuchillos brillan. Elena grita.",
          B: "Gonzalo ve tu cuchillo y levanta el suyo, todavía con crema de la tarta. «¿Qué es esto? ¿Vienes a mi cumpleaños con un cuchillo?» Los dos se miran fijamente. Elena grita.",
          C: "Gonzalo ve tu cuchillo y alza el suyo por instinto, con crema de la tarta en la hoja. «¿Vienes armado a mi cumpleaños?» Durante un segundo, dos cuchillos brillan en el rellano. Elena grita.",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Bajo el mío. Baja el tuyo. Nadie quiere esto.", B: "Yo bajo el mío si tú bajas el tuyo. Nadie quiere pelear.", C: "Bajo el mío, tú bajas el tuyo, y volvemos a hablar como vecinos." },
            reply: { A: "Gonzalo baja el cuchillo despacio. «Bueno… Era para la tarta.»", B: "Gonzalo baja el cuchillo despacio. «Bueno. El mío era para la tarta, ¿eh?»", C: "Gonzalo baja el cuchillo muy despacio. «El mío era para la tarta. Que conste en acta.»" },
            mood: "worried", next: "cuchillo-tregua",
          },
          {
            id: "quieto",
            say: { A: "¡Quieto! No te acerques.", B: "¡Quieto ahí! No te acerques con eso.", C: "¡Quieto! Ni un paso más con eso en la mano." },
            reply: { A: "Gonzalo da un paso. Elena se mete en medio. «¡Basta los dos!»", B: "Gonzalo da un paso adelante y Elena se mete en medio. «¡Basta! ¡Los dos! ¡Bajen eso!»", C: "Gonzalo avanza un paso y Elena se planta en medio, en pijama. «¡Basta ya! ¡Los dos! ¡Abajo esos cuchillos!»" },
            mood: "scared", next: "cuchillo-tregua",
          },
          {
            id: "huir",
            say: { A: "Me voy. Esto es una locura.", B: "Yo me voy. Esto es una locura total.", C: "Me retiro. Esto se ha vuelto una locura." },
            reply: { A: "Bajas corriendo. Arriba, Elena llama a la policía.", B: "Bajas las escaleras corriendo. Arriba, Elena ya está hablando con la policía.", C: "Bajas las escaleras a saltos. Arriba, Elena describe los dos cuchillos a la policía." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "elena", mood: "worried",
        line: {
          A: "Los dos cuchillos están en el suelo. Elena respira. «Bueno. Ahora hablamos de la música. Sin cuchillos.»",
          B: "Los dos cuchillos están en el suelo del rellano. Elena respira hondo. «Bien. Ahora, la música. Y nadie toca un cuchillo.»",
          C: "Los dos cuchillos descansan en el suelo del rellano. Elena recupera el aliento. «Perfecto. Ahora hablamos de la música, y el que toque un cuchillo se queda sin tarta.»",
        },
        options: [
          {
            id: "tarta",
            say: { A: "Gonzalo, corta la tarta. Elena, un trozo. Y la música baja.", B: "Gonzalo, corta la tarta para Elena. Y la música, baja. ¿Trato?", C: "Gonzalo, una porción de tarta para Elena y la música a volumen de cena. ¿Trato?" },
            reply: { A: "Gonzalo se ríe, nervioso. «Trato.» Corta la tarta con su cuchillo.", B: "Gonzalo suelta una risa nerviosa. «Trato.» Recoge su cuchillo y corta un trozo enorme para Elena.", C: "Gonzalo se ríe, todavía pálido. «Trato.» Recoge su cuchillo, esta vez solo para la tarta." },
            mood: "smile", end: "cuchillo-tarta",
          },
          {
            id: "disculpa",
            say: { A: "Perdón a los dos. Fue una tontería.", B: "Perdónenme los dos. Lo del cuchillo fue una tontería.", C: "Les pido perdón a los dos. Lo del cuchillo fue una idiotez de principio a fin." },
            reply: { A: "Elena asiente. «Una tontería grande. Pero bueno. Gonzalo, baja la música.»", B: "Elena asiente. «Grande, sí. Pero bueno. Gonzalo, baja la música y cerramos el tema.»", C: "Elena asiente. «Enorme. Pero cerrado. Gonzalo, baja la música y aquí no ha pasado nada.»" },
            mood: "neutral", end: "cuchillo-tarta",
          },
          {
            id: "culpar",
            say: { A: "Él sacó el cuchillo primero.", B: "Él también sacó un cuchillo. No fui solo yo.", C: "Que conste que él también sacó un cuchillo. No fui el único." },
            reply: { A: "Gonzalo se enfada otra vez. Elena llama a la policía.", B: "Gonzalo se enfada de nuevo. Elena, harta, llama a la policía.", C: "Gonzalo vuelve a tensarse. Elena, agotada, marca el número de la policía." },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "elena", mood: "terror",
        line: {
          A: "Una mujer en pijama golpea una puerta con música muy fuerte. Te ve, ve tu pistola y levanta las manos. «No, por favor. No quiero problemas.»",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra. Se gira, ve la pistola en tu cintura y levanta las manos despacio. «No, por favor. Yo solo quería dormir. No quiero problemas.»",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Al girarse ve tu pistola y levanta las manos sin pensarlo. «No, por favor. Yo solo quería silencio. No necesitaba esto.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquila. La guardo. Vengo por la música.", B: "Tranquila, la guardo. Yo también vengo por la música.", C: "Baje las manos. La guardo; vengo por la música, como usted." },
            reply: { A: "Elena baja las manos. La puerta se abre y Gonzalo ve la pistola. La música para.", B: "Elena baja las manos sin confiar del todo. La puerta se abre y Gonzalo ve la pistola. Dentro, la música se corta.", C: "Elena baja las manos, lentamente. La puerta se abre, Gonzalo ve la pistola y la música se apaga como si alguien hubiera cortado la luz." },
            mood: "scared", next: "pistola-silencio",
          },
          {
            id: "golpear",
            say: { A: "Yo golpeo la puerta. Van a abrir.", B: "Déjeme a mí. Van a abrir ahora mismo.", C: "Déjeme a mí la puerta. Van a abrir, se lo garantizo." },
            reply: { A: "Golpeas. Gonzalo abre, ve la pistola y levanta las manos. La música para.", B: "Golpeas con fuerza. Gonzalo abre, ve la pistola y levanta las manos. Alguien apaga la música.", C: "Golpeas la puerta. Gonzalo abre, ve la pistola y levanta las manos. Alguien apaga la música de golpe." },
            mood: "scared", next: "pistola-silencio",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me equivoqué de piso.", B: "Perdone. Me equivoqué de piso.", C: "Perdone. Me he equivocado de piso, y de noche." },
            reply: { A: "Bajas. Elena, temblando, llama a la policía.", B: "Bajas las escaleras. Elena, temblando, llama a la policía.", C: "Bajas las escaleras. Elena, con las manos aún temblando, llama a la policía." },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "pistola-silencio": {
        who: "gonzalo", mood: "terror",
        line: {
          A: "Gonzalo tiene las manos arriba. La fiesta está en silencio. Veinte personas te miran desde el salón. «Por favor… ¿qué quieres?»",
          B: "Gonzalo sigue con las manos arriba. En el salón, veinte personas en silencio total. «Por favor… Dime qué quieres. Apago la música, lo que sea.»",
          C: "Gonzalo mantiene las manos arriba. Detrás, veinte invitados en un silencio absoluto. «Dime qué quieres. ¿La música? Ya está apagada. ¿Qué más?»",
        },
        options: [
          {
            id: "musica",
            say: { A: "Solo quiero silencio. Fin de la fiesta.", B: "Solo quiero silencio. La fiesta termina ahora.", C: "Solo pido silencio. La fiesta acaba aquí." },
            reply: { A: "Gonzalo asiente. Los invitados salen en silencio. Elena no se mueve.", B: "Gonzalo asiente. Los invitados salen en fila, en silencio. Elena no se mueve de la escalera.", C: "Gonzalo asiente. Los invitados desfilan en silencio hacia la escalera. Elena no se mueve, pálida." },
            mood: "scared", end: "pistola-apagada",
          },
          {
            id: "perdon",
            say: { A: "Perdón. Bajen las manos. No quiero hacer daño.", B: "Perdonen. Bajen las manos. No quiero hacerle daño a nadie.", C: "Perdonen todos. Bajen las manos; no he venido a hacer daño a nadie." },
            reply: { A: "Nadie baja las manos. Se oye una sirena.", B: "Nadie baja las manos. Desde la calle sube el sonido de una sirena.", C: "Nadie baja las manos. Abajo, una sirena se acerca: alguien de la fiesta ya llamó." },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "cumple",
            say: { A: "¿Es tu cumpleaños? Felicidades. Me voy.", B: "¿Es tu cumpleaños? Pues felicidades. Me voy.", C: "¿Tu cumpleaños? Felicidades, entonces. Me retiro." },
            reply: { A: "Gonzalo no contesta. La fiesta termina. Elena sube a su casa.", B: "Gonzalo no contesta. Los invitados se van. Elena sube a su piso sin decir nada.", C: "Gonzalo no contesta. La fiesta se disuelve y Elena sube a su piso sin una palabra." },
            mood: "sad", end: "pistola-apagada",
          },
        ],
      },
      "granada-inicio": {
        who: "elena", mood: "terror",
        line: {
          A: "Una mujer en pijama golpea una puerta con música fuerte. Te ve, ve la granada y grita: «¡Una granada! ¡Todos fuera!» La puerta se abre.",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra. Se gira, ve la granada en tu mano y grita a todo el edificio: «¡Una granada! ¡Fuera todos!» La puerta se abre de golpe.",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Al girarse ve la granada y lanza un grito que apaga la música: «¡Una granada! ¡Evacuen!» La puerta se abre de golpe.",
        },
        options: [
          {
            id: "broma",
            say: { A: "¡Es una broma! ¡Es para la fiesta!", B: "¡Es de broma! ¡Es una decoración para la fiesta!", C: "¡Es una broma! Una decoración de la fiesta, no una amenaza." },
            reply: { A: "Nadie te escucha. Veinte invitados bajan la escalera corriendo.", B: "Nadie te escucha. Veinte invitados bajan la escalera en avalancha.", C: "Nadie te escucha. Veinte invitados bajan la escalera como un río con zapatos de fiesta." },
            mood: "scared", next: "granada-escalera",
          },
          {
            id: "guardar",
            say: { A: "¡La guardo! ¡Tranquilos!", B: "¡Ya la guardo! ¡Tranquilos todos!", C: "¡Guardada! ¡Tranquilos, no pasa nada!" },
            reply: { A: "Demasiado tarde. Gonzalo grita: «¡Salgan todos!»", B: "Demasiado tarde. Gonzalo grita desde la puerta: «¡Salgan todos! ¡Por la escalera!»", C: "Demasiado tarde. Gonzalo, blanco como la tarta, grita: «¡Todos fuera! ¡Por la escalera!»" },
            mood: "scared", next: "granada-escalera",
          },
          {
            id: "musica",
            say: { A: "¡Bajen la música o…!", B: "¡Bajen la música ahora o esto termina mal!", C: "¡Bajen la música ahora mismo, o esto acaba con estruendo!" },
            reply: { A: "Elena llama a la policía mientras corre. Se oye un helicóptero.", B: "Elena llama a la policía mientras baja corriendo. Sobre el edificio ya suena un helicóptero.", C: "Elena llama a la policía mientras huye escaleras abajo. Sobre el tejado, un helicóptero empieza a rondar." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-escalera": {
        who: "gonzalo", mood: "scared",
        line: {
          A: "Todos están en la calle. Gonzalo tiene la tarta en las manos. «¿Es de verdad? Es mi cumpleaños…»",
          B: "Toda la fiesta está en la calle, en silencio. Gonzalo sostiene la tarta con las velas apagadas. «¿Es de verdad? Porque es mi cumpleaños y esto es muy injusto.»",
          C: "La fiesta entera está en la acera. Gonzalo sostiene la tarta como un náufrago. «¿Es de verdad? Porque es mi cumpleaños y esto no estaba en el plan.»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Miren. La abro. Está vacía.", B: "Miren todos: la abro. Está vacía.", C: "Miren: la abro delante de todos. Hueca." },
            reply: { A: "Silencio. Luego todos se ríen. Gonzalo enciende las velas en la calle.", B: "Un segundo de silencio y luego la calle entera se ríe. Gonzalo enciende las velas en la acera.", C: "Silencio, y después una carcajada colectiva. Gonzalo enciende las velas de la tarta en plena acera." },
            mood: "surprised", end: "granada-calle",
          },
          {
            id: "velas",
            say: { A: "Enciende las velas. La fiesta sigue aquí.", B: "Enciende las velas. La fiesta sigue en la calle.", C: "Enciende las velas: la fiesta continúa aquí, al aire libre." },
            reply: { A: "Gonzalo duda. Elena dice: «Si cantan bajito, bueno.» Todos cantan.", B: "Gonzalo duda. Elena, en pijama, suspira: «Si cantan bajito, me da igual.» Todos cantan.", C: "Gonzalo duda. Elena, en pijama, cede: «Canten bajito y no digo nada.» La calle canta." },
            mood: "smile", end: "granada-calle",
          },
          {
            id: "correr",
            say: { A: "Me voy. Perdón.", B: "Me voy. Perdón por todo.", C: "Me retiro. Perdón por el caos." },
            reply: { A: "Corres. Un helicóptero ilumina la calle.", B: "Corres calle abajo. Un helicóptero ilumina a la fiesta entera.", C: "Corres calle abajo. Un helicóptero clava su foco en veinte invitados y una tarta." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "elena", mood: "surprised",
        line: {
          A: "Una mujer en pijama golpea una puerta con música fuerte. Te ve con el gas pimienta y saca el suyo. «¿Tú también? Es que aquí no se puede vivir.»",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra. Ve tu gas pimienta y saca el suyo del bolsillo. «¿Tú también llevas? Es que en este edificio ya no me fío de nadie.»",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Ve tu gas pimienta y saca el suyo. «¿Tú también? Bienvenido al club. En este edificio hasta el ascensor es sospechoso.»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "Vamos juntos. Si abren mal, usamos esto.", B: "Entramos juntos. Si abren de mala manera, tenemos esto.", C: "Vamos juntos. Si abren con malas intenciones, estamos preparados." },
            reply: { A: "Elena asiente. La puerta se abre y los dos levantan el gas. Gonzalo grita.", B: "Elena asiente. La puerta se abre, los dos levantan el gas y Gonzalo grita.", C: "Elena asiente. La puerta se abre y dos botes de gas apuntan a Gonzalo, que grita." },
            mood: "scared", next: "gas-puerta",
          },
          {
            id: "guardar",
            say: { A: "No, no. Lo guardo. Son vecinos.", B: "No, no. Lo guardo. Son solo vecinos.", C: "No, no. Lo guardo; son vecinos, no un atraco." },
            reply: { A: "Elena guarda el suyo. La puerta se abre. Gonzalo ve los dos botes. «¿Qué es esto?»", B: "Elena guarda el suyo a medias. La puerta se abre y Gonzalo ve los dos botes. «¿Esto es un comité de vecinos o una emboscada?»", C: "Elena guarda el suyo sin convicción. La puerta se abre y Gonzalo ve los dos botes. «¿Reunión de vecinos o emboscada?»" },
            mood: "worried", next: "gas-puerta",
          },
          {
            id: "paranoia",
            say: { A: "¿Y usted por qué lleva gas? ¿Es peligrosa?", B: "¿Y por qué lleva usted gas? ¿Debo preocuparme?", C: "¿Y usted por qué lleva gas? ¿De quién se protege exactamente?" },
            reply: { A: "Elena se ofende. «¡Trabajo de noche!» La puerta se abre.", B: "Elena se ofende. «¡Vuelvo a casa a las dos de la mañana!» La puerta se abre.", C: "Elena se indigna. «¡Salgo de urgencias a las dos de la mañana!» La puerta se abre." },
            mood: "angry", next: "gas-puerta",
          },
        ],
      },
      "gas-puerta": {
        who: "gonzalo", mood: "scared",
        line: {
          A: "Gonzalo ve los dos botes de gas. «¡Eh, eh! ¡Solo es una fiesta! ¡No me rocíen!»",
          B: "Gonzalo mira los dos botes de gas con los ojos muy abiertos. «¡Eh, eh! ¡Es una fiesta de cumpleaños! ¡No me rocíen, por favor!»",
          C: "Gonzalo contempla los dos botes de gas con pánico. «¡Es un cumpleaños, no un asalto! ¡Bajen eso, que tengo lentillas!»",
        },
        options: [
          {
            id: "trato",
            say: { A: "Baja la música y guardamos el gas.", B: "Baja la música y los dos guardamos el gas. Trato.", C: "Baja la música y el gas desaparece. Un trato razonable." },
            reply: { A: "Gonzalo corre a bajar la música. Elena guarda el gas. «Funciona.»", B: "Gonzalo corre a bajar la música. Elena guarda el gas, satisfecha. «Esto sí funciona.»", C: "Gonzalo baja la música a la carrera. Elena guarda el gas. «Más eficaz que dos notas en el ascensor.»" },
            mood: "smile", end: "gas-acuerdo",
          },
          {
            id: "accidente",
            say: { A: "¡Ay! Se me escapó.", B: "¡Ay! Se me ha escapado un poco.", C: "¡Ay! Se me escapó un chorro, perdón." },
            reply: { A: "Gonzalo tose y llora. La fiesta tose. Elena te mira: «¡Pero bueno!»", B: "Gonzalo tose con los ojos rojos. Media fiesta tose. Elena te mira: «¡Pero bueno! ¡Que era para los ladrones!»", C: "Gonzalo tose, los ojos como tomates. Media fiesta tose con él. Elena te fulmina: «¡Era para los ladrones, no para el cumpleañero!»" },
            mood: "pain", end: "gas-lagrimas",
          },
          {
            id: "dormir",
            say: { A: "Gonzalo, Elena trabaja a las seis. Baja la música.", B: "Gonzalo, Elena entra a trabajar a las seis. Baja la música, por favor.", C: "Gonzalo, Elena entra a urgencias a las seis. Baja la música y todos dormimos." },
            reply: { A: "Gonzalo asiente rápido. «Ya, ya. Perdón.» Baja la música.", B: "Gonzalo asiente a toda velocidad. «Ya está, ya está. Perdón.» La música baja.", C: "Gonzalo asiente sin parar. «Hecho, hecho. Perdón.» La música baja al instante." },
            mood: "worried", end: "gas-acuerdo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "elena", mood: "angry",
        line: {
          A: "Una mujer en pijama golpea una puerta con música fuerte. Ve tu lápiz. «¿Un lápiz? Perfecto. Escribe: “Son las doce. Trabajo a las seis.” Y en grande.»",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra. Ve tu lápiz y te lo señala. «¿Llevas lápiz? Perfecto. Escribe una nota: “Son las doce y trabajo a las seis.” Y con letra grande.»",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Ve tu lápiz y lo señala como una prueba. «¿Un lápiz? Dame. Escribe: “Son las doce, trabajo a las seis, y no es broma.” Con mayúsculas.»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "Escribo la nota. ¿La pego en la puerta?", B: "Escribo la nota. ¿La pegamos en la puerta?", C: "Escribo la nota tal cual. ¿La pegamos en la puerta o la pasamos por debajo?" },
            reply: { A: "Antes de pegarla, la puerta se abre. Gonzalo lee la nota. «¿Trabaja a las seis?»", B: "Antes de pegarla, la puerta se abre. Gonzalo lee la nota. «¿A las seis? Uf. No sabía.»", C: "Antes de pegarla, la puerta se abre. Gonzalo lee la nota en voz alta. «¿A las seis? Eso no lo sabía.»" },
            mood: "neutral", next: "lapiz-contrato",
          },
          {
            id: "contrato",
            say: { A: "Mejor escribimos un acuerdo. Música baja hasta la una.", B: "Mejor escribimos un acuerdo: música baja y fin a la una.", C: "Mejor redactamos un acuerdo: volumen bajo y fin a la una. Con firmas." },
            reply: { A: "Elena sonríe. «Un contrato. Me gusta.» La puerta se abre.", B: "Elena sonríe por primera vez. «Un contrato de vecinos. Me gusta.» La puerta se abre.", C: "Elena sonríe a su pesar. «Un contrato vecinal. Con firmas. Me gusta.» La puerta se abre." },
            mood: "smile", next: "lapiz-contrato",
          },
          {
            id: "dibujar",
            say: { A: "Dibujo una cama y una cara dormida.", B: "Dibujo una cama con una cara dormida. Es más claro que una frase.", C: "Dibujo una cama y una cara feliz dormida: la nota más clara del edificio." },
            reply: { A: "Elena se ríe. «¡Y un reloj con las seis!» La puerta se abre.", B: "Elena se ríe. «¡Añade un reloj con las seis!» La puerta se abre.", C: "Elena se ríe por fin. «Y un reloj marcando las seis, para los lentos.» La puerta se abre." },
            mood: "smile", next: "lapiz-contrato",
          },
        ],
      },
      "lapiz-contrato": {
        who: "gonzalo", mood: "neutral",
        line: {
          A: "Gonzalo mira el papel. «¿Un acuerdo? Bueno… ¿Qué dice?»",
          B: "Gonzalo mira el papel con desconfianza. «¿Un acuerdo escrito? ¿Qué dice exactamente?»",
          C: "Gonzalo examina el papel como si fuera una multa. «¿Un contrato? A ver, léeme la letra pequeña.»",
        },
        options: [
          {
            id: "firmar",
            say: { A: "Música baja, fin a la una. Firma aquí.", B: "Música baja y fin a la una. Firma aquí, por favor.", C: "Volumen bajo y fin a la una. Firma aquí, junto a Elena." },
            reply: { A: "Gonzalo firma. Elena firma. Gonzalo baja la música.", B: "Gonzalo firma. Elena firma debajo. Gonzalo entra y baja la música.", C: "Gonzalo firma, Elena firma debajo, y la música baja antes de que se seque la tinta." },
            mood: "smile", end: "lapiz-firma",
          },
          {
            id: "cartel",
            say: { A: "Escribo un cartel: “Fiesta hasta la una”. Para la puerta.", B: "Escribo un cartel para la puerta: “Fiesta hasta la una. Vecinos avisados.”", C: "Escribo un cartel para la puerta: “Fiesta hasta la una. Vecinos informados y firmantes.”" },
            reply: { A: "Gonzalo se ríe y lo pega. «Así nadie se queja.»", B: "Gonzalo se ríe y lo pega en la puerta. «Así nadie más viene a quejarse.»", C: "Gonzalo se ríe y lo pega en la puerta. «Burocracia festiva. Me encanta.»" },
            mood: "smile", end: "lapiz-cartel",
          },
          {
            id: "elena",
            say: { A: "Y Elena firma como testigo.", B: "Y Elena firma como testigo del acuerdo.", C: "Y Elena firma como testigo, con hora y fecha." },
            reply: { A: "Elena firma. «Testigo y enfermera. Si no cumple, lo sé.»", B: "Elena firma con ganas. «Testigo y enfermera de urgencias. Si no cumple, me entero.»", C: "Elena firma con floritura. «Testigo, enfermera y vecina. Si incumple, tengo pruebas.»" },
            mood: "smile", end: "lapiz-firma",
          },
        ],
      },
      "libro-inicio": {
        who: "elena", mood: "surprised",
        line: {
          A: "Una mujer en pijama golpea una puerta con música fuerte. Ve tu libro y se ríe. «¿Un libro? ¿Vas a leerles un cuento para dormir?»",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra. Ve tu libro y suelta una risa cansada. «¿Un libro? ¿Qué vas a hacer, leerles un cuento hasta que se duerman?»",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Ve tu libro y se ríe sin ganas. «¿Un libro a estas horas? ¿Les vas a leer un cuento para dormir? Porque yo lo intento todo.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Sí. Cuando abran, leo en voz alta.", B: "Pues sí. Cuando abran, empiezo a leer en voz alta.", C: "Exacto. En cuanto abran, lectura en voz alta hasta que bajen la música." },
            reply: { A: "La puerta se abre. Empiezas a leer. Gonzalo se queda mudo.", B: "La puerta se abre y empiezas a leer con voz grave. Gonzalo se queda con la boca abierta.", C: "La puerta se abre y arrancas a leer con voz de locutor. Gonzalo se queda petrificado en el marco." },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "prestar",
            say: { A: "Se lo presto. Si lee, no pone música.", B: "Se lo presto al de la fiesta. Si lee, no pone música.", C: "Se lo presto al anfitrión: nadie pone música mientras lee." },
            reply: { A: "Elena se ríe. «Buen plan.» La puerta se abre.", B: "Elena se ríe de verdad. «Es el plan más raro que he oído. Me gusta.» La puerta se abre.", C: "Elena se ríe. «Es un plan absurdo y por eso puede funcionar.» La puerta se abre." },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "excusa",
            say: { A: "Es mi excusa. Con un libro, parezco tranquilo.", B: "Es mi excusa. Con un libro en la mano, nadie piensa que vengo a pelear.", C: "Es mi coartada: con un libro en la mano, nadie me toma por un vecino furioso." },
            reply: { A: "Elena se ríe. «Pues yo con pijama tampoco parezco peligrosa.» La puerta se abre.", B: "Elena se ríe. «Y yo en pijama tampoco impongo mucho.» La puerta se abre.", C: "Elena se ríe. «Y yo en pijama no intimido a nadie. Vamos bien.» La puerta se abre." },
            mood: "smile", next: "libro-lectura",
          },
        ],
      },
      "libro-lectura": {
        who: "gonzalo", mood: "surprised",
        line: {
          A: "Lees en voz alta. Gonzalo escucha. Dentro, alguien baja la música para oír. «¿Qué libro es?»",
          B: "Lees en voz alta en el rellano. Gonzalo escucha sin moverse. Dentro, alguien baja la música para enterarse. «Oye… ¿qué libro es ese?»",
          C: "Lees en voz alta en el rellano. Gonzalo escucha, hipnotizado. Dentro, alguien baja la música para no perderse nada. «Espera, ¿qué libro es?»",
        },
        options: [
          {
            id: "seguir",
            say: { A: "Sigo leyendo. Todos escuchan.", B: "Sigo leyendo. La fiesta entera escucha.", C: "Sigo leyendo. La fiesta entera se queda escuchando desde el salón." },
            reply: { A: "La música se apaga sola. Veinte personas escuchan el cuento.", B: "La música se apaga sola. Veinte personas se sientan en el suelo a escuchar.", C: "La música se apaga sin que nadie la toque. Veinte invitados se sientan en el suelo, como en la escuela." },
            mood: "love", end: "libro-cuento",
          },
          {
            id: "regalar",
            say: { A: "Te lo regalo. Pero baja la música.", B: "Te lo regalo. A cambio, baja la música.", C: "Te lo regalo, a cambio de la música a volumen de biblioteca." },
            reply: { A: "Gonzalo toma el libro. «Trato.» Baja la música.", B: "Gonzalo toma el libro con las dos manos. «Trato hecho.» Baja la música.", C: "Gonzalo acepta el libro como un regalo de cumpleaños. «Trato.» La música baja." },
            mood: "smile", end: "libro-prestado",
          },
          {
            id: "elena",
            say: { A: "Elena, ¿lo lee usted? Tiene buena voz.", B: "Elena, ¿sigue usted? Tiene mejor voz que yo.", C: "Elena, ¿continúa usted? Tiene una voz que impone silencio." },
            reply: { A: "Elena lee. La fiesta escucha. Gonzalo apaga la música.", B: "Elena lee en pijama, con voz de hospital. La fiesta escucha y Gonzalo apaga la música.", C: "Elena lee en pijama con voz de enfermera que no admite réplica. Gonzalo apaga la música." },
            mood: "love", end: "libro-cuento",
          },
        ],
      },
      "corazon-inicio": {
        who: "elena", mood: "love",
        line: {
          A: "Una mujer en pijama golpea una puerta con música fuerte. Ve tu corazón y se calma. Sonríe, cansada. «Perdona. Hoy es mi cumpleaños y trabajo a las seis.»",
          B: "Una mujer con abrigo sobre el pijama aporrea una puerta que vibra. Ve tu corazón y deja caer los hombros. «Perdona, no eres tú. Es que hoy es mi cumpleaños y entro a trabajar a las seis.»",
          C: "Una mujer con abrigo sobre el pijama aporrea la puerta de una fiesta. Ve tu corazón y toda su rabia se le cae al suelo. «Perdona. No es contigo. Hoy cumplo cuarenta y cinco y mi fiesta es esto.»",
        },
        options: [
          {
            id: "felicitar",
            say: { A: "¡Feliz cumpleaños, Elena! ¿Cuántos?", B: "¡Feliz cumpleaños! Nadie debería pasar su cumpleaños así.", C: "Feliz cumpleaños. Nadie merece celebrarlo golpeando una puerta ajena." },
            reply: { A: "Elena sonríe. «Cuarenta y cinco. Gracias.» La puerta se abre y sale Gonzalo.", B: "Elena sonríe. «Gracias. Eres la primera persona que me lo dice hoy.» La puerta se abre y aparece Gonzalo.", C: "Elena sonríe de verdad. «Gracias. Eres el primero que me felicita hoy.» La puerta se abre y aparece Gonzalo." },
            mood: "love", next: "corazon-gonzalo",
          },
          {
            id: "abrazo",
            say: { A: "Ven. Un abrazo de cumpleaños.", B: "Ven aquí. Un abrazo de cumpleaños, aunque sea en el rellano.", C: "Ven, un abrazo de cumpleaños. El rellano también vale para celebrar." },
            reply: { A: "Elena te abraza. «Gracias. Lo necesitaba.» La puerta se abre.", B: "Elena te abraza con fuerza. «Gracias. No sabes cuánto lo necesitaba.» La puerta se abre.", C: "Elena te abraza como si llevara todo el día esperándolo. «Gracias. Lo necesitaba.» La puerta se abre." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "escuchar",
            say: { A: "Cuéntame. ¿Cómo fue tu día?", B: "Cuéntame. ¿Cómo fue tu día de cumpleaños?", C: "Cuéntamelo. ¿Cómo ha sido tu día, antes de esta puerta?" },
            reply: { A: "Elena suspira. «Doce horas en urgencias. Nadie me felicitó.» Se abre la puerta.", B: "Elena suspira. «Doce horas en urgencias y ni una felicitación.» En ese momento se abre la puerta.", C: "Elena suspira. «Doce horas en urgencias, cero felicitaciones y una tarta imaginaria.» La puerta se abre." },
            mood: "sad", next: "corazon-gonzalo",
          },
        ],
      },
      "corazon-gonzalo": {
        who: "gonzalo", mood: "neutral",
        line: {
          A: "Gonzalo sale. «¿Qué pasa? Es mi cumpleaños.» Tú dices: «Y el de Elena.» Gonzalo abre los ojos.",
          B: "Gonzalo asoma con cara de defensa. «¿Qué pasa? Es mi cumpleaños.» Le dices que también es el de Elena. Se queda de piedra.",
          C: "Gonzalo asoma con el discurso preparado. «Es mi cumpleaños, una noche al año…» Le cuentas que también es el de Elena. El discurso se le cae.",
        },
        options: [
          {
            id: "tarta",
            say: { A: "Gonzalo, trae tarta para Elena.", B: "Gonzalo, ¿y si traes un trozo de tarta para Elena?", C: "Gonzalo, un trozo de tarta para Elena sería un buen comienzo." },
            reply: { A: "Gonzalo corre dentro. Vuelve con tarta y una vela. Elena llora un poco.", B: "Gonzalo desaparece y vuelve con un trozo de tarta y una vela encendida. Elena se emociona.", C: "Gonzalo vuelve con tarta, una vela y veinte invitados cantando. Elena se emociona en pijama." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "baja",
            say: { A: "Y baja la música. Los dos cumplen años.", B: "Y baja la música, que los dos cumplen años hoy.", C: "Y baja la música: hoy cumplen años los dos y uno de ellos madruga." },
            reply: { A: "Gonzalo baja la música y abraza a Elena. «Perdón, vecina.»", B: "Gonzalo baja la música y abraza a Elena. «Perdón, vecina. Feliz cumpleaños.»", C: "Gonzalo baja la música y abraza a Elena. «Perdón, vecina. No sabía que compartíamos fecha.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "cantar",
            say: { A: "Cantamos “Cumpleaños feliz” para Elena.", B: "Cantemos el cumpleaños feliz para Elena. Todos.", C: "Propongo un cumpleaños feliz para Elena, con toda la fiesta." },
            reply: { A: "Veinte personas cantan en el rellano. Elena se tapa la cara, feliz.", B: "Veinte invitados salen a cantar al rellano. Elena se tapa la cara, feliz y en pijama.", C: "Veinte invitados cantan en el rellano. Elena se tapa la cara, roja y feliz." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {
      baja: { text: { A: "La música baja. Elena vuelve a casa y apaga la luz.", B: "La música baja. Elena vuelve a su piso y, por fin, se apaga su luz.", C: "La música baja a un volumen civilizado. Poco después, la ventana de Elena se apaga en paz." }, change: "luz", recap: "Conseguiste que Gonzalo bajara la música." },
      baila: { text: { A: "Elena entra a la fiesta y baila un poco. Todos cantan «Cumpleaños feliz».", B: "Elena entra a la fiesta en pijama y acaba bailando. Cantan el cumpleaños feliz dos veces.", C: "Elena entra en pijama y termina bailando en el centro del salón. Dos cumpleaños, una sola tarta." }, change: "baila", recap: "Elena terminó bailando en la fiesta de Gonzalo." },
      policia: { text: { A: "Llega la policía. La fiesta termina. Gonzalo está triste.", B: "Llega la policía. La fiesta termina antes de tiempo y nadie queda contento.", C: "Llega una patrulla. La fiesta se apaga y el rellano se llena de caras largas." }, change: "policia", recap: "La fiesta de Gonzalo terminó con la policía." },
      nada: { text: { A: "Te vas. La música sigue. Elena vuelve a casa enfadada.", B: "Te vas. La música sigue y Elena vuelve a su piso, furiosa.", C: "Te alejas. La música sigue y Elena sube a su piso pisando cada escalón con rabia." }, change: "enojado", recap: "Te fuiste sin resolver el problema de la música." },
      "cuchillo-tarta": { text: { A: "Comen tarta en el rellano. Los cuchillos solo cortan tarta. La música baja.", B: "Comen tarta en el rellano, los dos cuchillos ya solo para la tarta. La música baja y Elena se va a dormir.", C: "Comen tarta en el rellano. Los dos cuchillos terminan la noche cortando bizcocho. La música baja y Elena se va a dormir." }, change: "baila", recap: "Dos cuchillos terminaron cortando tarta en el rellano de Gonzalo." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. La fiesta termina.", B: "Llega la policía y te quita el cuchillo. La fiesta termina y nadie prueba la tarta.", C: "Llega una patrulla y se lleva tu cuchillo, el de Gonzalo y la tarta, por si acaso. La fiesta termina." }, change: "policia", recap: "El cuchillo acabó con la policía en la fiesta de Gonzalo." },
      "pistola-policia": { text: { A: "La policía sube. Te llevan. Elena y Gonzalo no se miran.", B: "La policía sube por la escalera y te lleva. Elena y Gonzalo se quedan en el rellano, sin mirarse.", C: "La policía sube y te lleva. Elena y Gonzalo se quedan en el rellano, incapaces de mirarse." }, change: "policia", recap: "La pistola acabó con la policía en el rellano de Elena y Gonzalo." },
      "pistola-apagada": { text: { A: "La fiesta termina en silencio. Gonzalo cierra la puerta. Nadie celebra.", B: "La fiesta termina en silencio. Gonzalo cierra la puerta despacio. Nadie celebra nada.", C: "La fiesta se disuelve en silencio. Gonzalo cierra la puerta sin ruido. Dos cumpleaños, cero celebraciones." }, change: "huye", recap: "La pistola apagó la fiesta de Gonzalo." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la calle. La fiesta está en la acera. Gonzalo tiene la tarta.", B: "Un helicóptero ilumina la calle. La fiesta entera espera en la acera y Gonzalo sostiene la tarta.", C: "Un helicóptero clava su foco en la calle. La fiesta entera espera en la acera y Gonzalo sostiene la tarta como un trofeo triste." }, change: "helicoptero", recap: "La granada sacó la fiesta de Gonzalo a la calle y trajo un helicóptero." },
      "granada-calle": { text: { A: "La fiesta sigue en la calle. Elena canta bajito. Gonzalo sopla las velas.", B: "La fiesta sigue en la acera, en voz baja. Elena canta en pijama y Gonzalo sopla las velas.", C: "La fiesta continúa en la acera, en susurros. Elena canta en pijama y Gonzalo sopla las velas bajo la farola." }, change: "baila", recap: "La granada sacó la fiesta de Gonzalo a la calle, y allí siguió." },
      "gas-acuerdo": { text: { A: "La música baja. Elena guarda el gas y se va a dormir.", B: "La música baja. Elena guarda el gas, satisfecha, y por fin se va a dormir.", C: "La música baja a volumen de cena. Elena guarda el gas y su luz se apaga al fin." }, change: "luz", recap: "Dos botes de gas pimienta convencieron a Gonzalo de bajar la música." },
      "gas-lagrimas": { text: { A: "Gonzalo llora por el gas. La fiesta termina. Elena está enfadada.", B: "Gonzalo llora por el gas y la fiesta termina tosiendo. Elena sube a su casa, enfadada.", C: "Gonzalo llora por el gas, la fiesta termina entre toses y Elena sube a su casa enfadada contigo." }, change: "enojado", recap: "Un chorro de gas pimienta terminó con la fiesta de Gonzalo." },
      "lapiz-firma": { text: { A: "Hay un acuerdo firmado. La música baja. Elena duerme.", B: "Hay un acuerdo firmado en la puerta. La música baja y Elena, por fin, duerme.", C: "Hay un acuerdo firmado en la puerta y la música baja. Elena duerme con la firma de Gonzalo en la mesilla." }, change: "luz", recap: "Escribiste un acuerdo entre Elena y Gonzalo y los dos lo firmaron." },
      "lapiz-cartel": { text: { A: "El cartel está en la puerta. La música baja. Nadie más se queja.", B: "El cartel cuelga en la puerta: fiesta hasta la una. La música baja y nadie más se queja.", C: "El cartel cuelga en la puerta de Gonzalo. La música baja y el edificio entero lo lee desde el ascensor." }, change: "sonrie", recap: "Escribiste el cartel que puso hora a la fiesta de Gonzalo." },
      "libro-cuento": { text: { A: "La fiesta escucha el cuento. La música está apagada. Elena sonríe.", B: "La fiesta entera escucha el cuento con la música apagada. Elena sonríe desde la escalera.", C: "La fiesta entera escucha el cuento en silencio. Elena sonríe desde la escalera, en pijama, como una bibliotecaria victoriosa." }, change: "luz", recap: "Un libro leído en voz alta apagó la música de Gonzalo." },
      "libro-prestado": { text: { A: "Gonzalo tiene tu libro. La música baja. Elena vuelve a casa.", B: "Gonzalo se queda con tu libro y baja la música. Elena vuelve a casa con una sonrisa.", C: "Gonzalo se queda con tu libro y baja la música. Elena sube a casa sonriendo por primera vez en la noche." }, change: "sonrie", recap: "Cambiaste tu libro por silencio en la fiesta de Gonzalo." },
      "corazon-beso": { text: { A: "Elena sopla la vela. Gonzalo le da un beso en la mejilla. Todos aplauden.", B: "Elena sopla la vela y Gonzalo le da un beso en la mejilla. La fiesta entera aplaude.", C: "Elena sopla la vela y Gonzalo le planta un beso en la mejilla. La fiesta aplaude en el rellano." }, change: "beso", recap: "Elena recibió un beso de cumpleaños de Gonzalo." },
      "corazon-abrazo": { text: { A: "Elena y Gonzalo se abrazan. La música baja. Dos cumpleaños, una paz.", B: "Elena y Gonzalo se abrazan en el rellano. La música baja. Dos cumpleaños y una paz vecinal.", C: "Elena y Gonzalo se abrazan en el rellano. La música baja. Dos cumpleaños, una pared en común y una paz firmada sin papel." }, change: "abraza", recap: "Elena y Gonzalo terminaron abrazados en el rellano." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo en los estacionamientos de noche?", B: "¿Qué harías si alguien te asustara en un estacionamiento vacío?", C: "¿Qué hace que un lugar vacío de noche nos parezca una amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si alguien quiere robar tu auto?", B: "¿Entregarías tus llaves si alguien te amenazara con un arma?", C: "¿Qué revela sobre una persona lo que entrega primero cuando tiene miedo?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué alarma suena en tu barrio de noche?", B: "¿Qué fue lo más ruidoso y absurdo que viviste en un estacionamiento?", C: "¿Por qué una situación de pánico puede volverse cómica al contarla?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte?", B: "¿Qué le darías a una persona mayor para que se sienta segura de noche?", C: "¿Hasta qué punto los objetos de defensa nos tranquilizan o nos inquietan?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Apuntas dónde dejas el auto?", B: "¿Qué sistema usas para no olvidar dónde estacionaste?", C: "¿Qué dice de nosotros la cantidad de cosas que apuntamos para no olvidarlas?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Lees en el auto o en el autobús?", B: "¿Qué libro le leerías a alguien que está perdido y cansado?", C: "¿Qué libro te acompañó en un momento de pérdida?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Qué canción te gusta cantar en el auto?", B: "¿Qué canción te recuerda a una persona querida?", C: "¿Qué canción te devuelve a alguien que ya no está?" } },
    },
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
      "cuchillo-inicio": {
        who: "emilio", mood: "scared",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve tu cuchillo y retrocede contra una columna. «¡No! No llevo dinero, hijo. ¡No te acerques así!»",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve tu cuchillo y retrocede contra una columna. «¿Qué haces con ese cuchillo? No llevo dinero, hijo. Solo busco mi auto.»",
          C: "En el estacionamiento, un señor con sombrero recorre las filas de autos. Ve tu cuchillo y retrocede hasta una columna. «¿Estás loco? Baja eso. No llevo nada, salvo un ticket y una memoria que falla.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. ¿Busca su auto?", B: "Perdone, ya lo guardo. ¿Está buscando su auto?", C: "Perdone, lo guardo ahora mismo. ¿Busca su auto?" },
            reply: { A: "Don Emilio respira. «Sí… Verde. Pequeño. Y guarda eso bien.»", B: "Don Emilio respira hondo. «Sí. Verde, pequeño. Y ese cuchillo, bien guardado.»", C: "Don Emilio exhala. «Verde, pequeño, cuarenta años. Y ese cuchillo, lejos de mi vista.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "ayudar",
            say: { A: "Es para abrir cosas. Yo le ayudo a buscar.", B: "Es para abrir cajas, nada más. Le ayudo a buscar el auto.", C: "Es una herramienta de trabajo, nada más. Le ayudo a encontrar el auto." },
            reply: { A: "Don Emilio no se mueve. «Con el cuchillo en la mano, no. Guárdalo primero.»", B: "Don Emilio no se mueve de la columna. «Con eso en la mano, no. Primero lo guardas.»", C: "Don Emilio sigue pegado a la columna. «Con eso en la mano no me ayudas: me asustas. Guárdalo primero.»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "broma",
            say: { A: "Tranquilo, no corto a nadie. Hoy no.", B: "Tranquilo, hoy no corto a nadie. Es broma.", C: "Tranquilo, hoy no corto a nadie. Es broma, aunque mala." },
            reply: { A: "Don Emilio grita: «¡Vigilante!» Un guardia llama a la policía.", B: "Don Emilio grita hacia la caseta: «¡Vigilante!» El guardia te ve y llama a la policía.", C: "Don Emilio grita a la caseta: «¡Vigilante!» El guardia ve el cuchillo y marca el número de la policía sin dudar." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "emilio", mood: "worried",
        line: {
          A: "El cuchillo está guardado. Don Emilio mira tu bolsillo. «Bueno. Mi auto es verde… o azul. ¿Me ayudas?»",
          B: "El cuchillo ya no se ve. Don Emilio mira tu bolsillo de reojo. «Bueno. Mi auto es verde, o azul, con una flor en el techo. ¿Me ayudas o me vas a asustar otra vez?»",
          C: "El cuchillo está guardado y Don Emilio vigila tu bolsillo como un halcón. «Verde o azul, pequeño, con una margarita en el techo. Puedes ayudarme, pero sin sacar nada más.»",
        },
        options: [
          {
            id: "buscar",
            say: { A: "Vamos. Yo miro a la derecha, usted a la izquierda.", B: "Vamos. Yo reviso la fila de la derecha y usted la de la izquierda.", C: "Vamos. Yo me encargo de la fila derecha; usted, de la izquierda." },
            reply: { A: "Encuentran el auto verde con la flor. Don Emilio sonríe. «Y el cuchillo, en casa.»", B: "Encuentran el auto verde con la margarita. Don Emilio sonríe. «Gracias. Y el cuchillo, la próxima vez, en casa.»", C: "Encuentran el auto verde con la margarita. Don Emilio sonríe. «Gracias, hijo. Y el cuchillo, la próxima vez, en el cajón de la cocina.»" },
            mood: "smile", end: "cuchillo-encontrado",
          },
          {
            id: "ticket",
            say: { A: "¿Tiene el ticket? Dice el piso.", B: "¿Tiene el ticket? Ahí dice en qué piso está.", C: "¿Conserva el ticket? Ahí figura el nivel." },
            reply: { A: "Don Emilio lo saca. «Piso 3. Y estamos en el 2.» Se ríe, aliviado.", B: "Don Emilio lo saca del abrigo. «Nivel 3. Y estamos en el 2.» Se ríe, más tranquilo.", C: "Don Emilio lo rescata del abrigo. «Nivel 3. Llevo media hora en el 2.» Se ríe, ya sin miedo." },
            mood: "smile", end: "cuchillo-encontrado",
          },
          {
            id: "guardia",
            say: { A: "Mejor llamo al vigilante. Él le ayuda.", B: "Mejor aviso al vigilante para que le ayude.", C: "Mejor aviso al vigilante; él conoce cada rincón." },
            reply: { A: "El vigilante llega, ve tu bolsillo y llama a la policía.", B: "El vigilante llega, ve el mango del cuchillo en tu bolsillo y llama a la policía.", C: "El vigilante llega, repara en el mango que asoma de tu bolsillo y llama a la policía sin preguntar." },
            mood: "worried", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "emilio", mood: "terror",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve tu pistola y levanta las manos. «No, por favor. Toma las llaves. Toma el auto. Pero no me hagas nada.»",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve tu pistola y levanta las manos despacio. «No, por favor. Toma las llaves, llévate el auto. Yo no he visto nada.»",
          C: "En el estacionamiento, un señor con sombrero recorre las filas de autos. Ve tu pistola y levanta las manos con la dignidad de quien ya no corre. «Las llaves son tuyas. El auto también. Solo te pido que no me hagas nada.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Baje las manos. La guardo. No quiero su auto.", B: "Baje las manos, por favor. La guardo. No quiero su auto.", C: "Baje las manos. La guardo; no quiero su auto ni sus llaves." },
            reply: { A: "Don Emilio baja las manos. «¿Entonces qué quieres?»", B: "Don Emilio baja las manos, temblando. «¿Entonces qué quieres, hijo?»", C: "Don Emilio baja las manos sin perder de vista tu cintura. «¿Entonces qué quieres de un viejo con un ticket?»" },
            mood: "scared", next: "pistola-llaves",
          },
          {
            id: "llaves",
            say: { A: "Deme las llaves. Un momento.", B: "Deme las llaves un momento, por favor.", C: "Deme las llaves un segundo; confíe en mí." },
            reply: { A: "Don Emilio te da las llaves con la mano temblando. «Es verde. Cuídalo.»", B: "Don Emilio te entrega las llaves con la mano temblando. «Es verde. Era de mi mujer. Cuídalo.»", C: "Don Emilio te entrega las llaves con dedos temblorosos. «Es verde. Era de mi Rosa. Cuídalo, por favor.»" },
            mood: "scared", next: "pistola-llaves",
          },
          {
            id: "gritar",
            say: { A: "¡Nadie se mueve!", B: "¡Que nadie se mueva!", C: "¡Nadie se mueve en este estacionamiento!" },
            reply: { A: "Don Emilio cierra los ojos. El vigilante llama a la policía.", B: "Don Emilio cierra los ojos. Desde la caseta, el vigilante llama a la policía.", C: "Don Emilio cierra los ojos y reza en voz baja. En la caseta, el vigilante marca el número de la policía." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-llaves": {
        who: "emilio", mood: "scared",
        line: {
          A: "Tienes las llaves de Don Emilio. Él tiene las manos medio arriba. «¿Y ahora qué?»",
          B: "Tienes las llaves del auto de Don Emilio. Él mantiene las manos a media altura, por si acaso. «¿Y ahora qué, hijo?»",
          C: "Tienes las llaves de Don Emilio en la mano. Él mantiene las manos a media altura, sin decidirse a bajarlas. «¿Y ahora qué hacemos?»",
        },
        options: [
          {
            id: "boton",
            say: { A: "Aprieto el botón. El auto suena.", B: "Aprieto el botón de la llave. Así el auto suena.", C: "Aprieto el botón de la llave: el auto se delata solo." },
            reply: { A: "Un auto verde pita al fondo. Don Emilio baja las manos. «¡Es él!»", B: "Al fondo, un auto verde pita dos veces y enciende las luces. Don Emilio baja las manos. «¡Es él! ¡Mi auto!»", C: "Al fondo, un auto verde pita y parpadea. Don Emilio baja las manos por fin. «¡Es él! ¡Ahí estaba, el traidor!»" },
            mood: "surprised", end: "pistola-pitido",
          },
          {
            id: "devolver",
            say: { A: "Tome sus llaves. Perdón por el susto.", B: "Tome sus llaves. Perdone el susto.", C: "Tome sus llaves. Y perdone el susto; no era mi intención." },
            reply: { A: "Don Emilio toma las llaves. No baja las manos del todo. Se oye una sirena.", B: "Don Emilio recoge las llaves sin bajar del todo las manos. En la rampa suena una sirena.", C: "Don Emilio recoge las llaves con las manos aún medio alzadas. Por la rampa baja una sirena." },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "irse",
            say: { A: "Me voy. Las dejo aquí.", B: "Me voy. Le dejo las llaves aquí, en el suelo.", C: "Me voy. Las llaves se quedan aquí, en el suelo." },
            reply: { A: "Corres hacia la rampa. Don Emilio recoge las llaves y aprieta el botón. Su auto pita.", B: "Corres hacia la rampa. Don Emilio recoge las llaves, aprieta el botón y, al fondo, su auto pita.", C: "Corres hacia la rampa. Don Emilio recoge las llaves, aprieta el botón y su auto le contesta desde el fondo." },
            mood: "scared", end: "pistola-pitido",
          },
        ],
      },
      "granada-inicio": {
        who: "emilio", mood: "terror",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve la granada y grita. Se apoya en un auto y suena la alarma. Luego otra. Y otra.",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve la granada y grita tan fuerte que se apoya en un auto: salta la alarma. Luego otra. Y otra más.",
          C: "En el estacionamiento, un señor con sombrero recorre las filas. Ve la granada, grita, se apoya en un auto y dispara una alarma. En segundos, todo el nivel aúlla.",
        },
        options: [
          {
            id: "calmar",
            say: { A: "¡Tranquilo! ¡Es de juguete!", B: "¡Tranquilo, Don Emilio! ¡Es de juguete!", C: "¡Calma! ¡Es una réplica, no explota!" },
            reply: { A: "Don Emilio no te oye. Las alarmas suenan por todo el piso.", B: "Don Emilio no te oye: el piso entero suena. Se tapa los oídos con el sombrero.", C: "Don Emilio no te oye entre veinte alarmas. Se tapa los oídos con el sombrero, como un escudo." },
            mood: "scared", next: "granada-alarmas",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. ¿Está bien?", B: "La guardo ya. Perdón. ¿Está usted bien?", C: "La guardo. Perdone. ¿Se encuentra bien?" },
            reply: { A: "Don Emilio señala las alarmas. «¡Mira lo que hiciste!»", B: "Don Emilio señala las alarmas con el bastón imaginario de la indignación. «¡Mira lo que has provocado!»", C: "Don Emilio señala el caos sonoro. «¿Bien? ¡Mira lo que has provocado! ¡Esto es un concierto!»" },
            mood: "angry", next: "granada-alarmas",
          },
          {
            id: "correr",
            say: { A: "¡Vamos a la salida!", B: "¡Vamos a la salida, rápido!", C: "¡A la salida, ya!" },
            reply: { A: "Corren. Arriba, en la calle, suena un helicóptero.", B: "Corren hacia la rampa. Arriba, en la calle, ya suena un helicóptero.", C: "Corren hacia la rampa. Al salir a la calle, un helicóptero ya ronda sobre el estacionamiento." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "granada-alarmas": {
        who: "emilio", mood: "surprised",
        line: {
          A: "Veinte alarmas suenan. De pronto, Don Emilio señala un auto verde con luces. «¡Es mi auto! ¡Lo reconozco por la alarma!»",
          B: "Veinte alarmas aúllan a la vez. De pronto, Don Emilio señala un auto verde que parpadea. «¡Ese! ¡Es mi auto! ¡Reconozco su alarma, suena como un pato!»",
          C: "Veinte alarmas compiten. De pronto, Don Emilio señala un auto verde que parpadea al fondo. «¡Ese es el mío! Lo reconozco: su alarma suena como un pato resfriado.»",
        },
        options: [
          {
            id: "ir",
            say: { A: "¡Vamos! Yo apago la granada.", B: "¡Vamos! Yo guardo la granada y usted apaga la alarma.", C: "¡Vamos! Yo guardo la granada y usted calla a su pato." },
            reply: { A: "Don Emilio apaga su alarma. Las otras siguen. «¡Encontrado! ¡Gracias al susto!»", B: "Don Emilio apaga su alarma con la llave. Las demás siguen. «¡Encontrado! ¡Gracias a tu granada!»", C: "Don Emilio silencia su alarma. Las demás siguen cantando. «¡Encontrado! Tu granada tiene más memoria que yo.»" },
            mood: "smile", end: "granada-auto",
          },
          {
            id: "vigilante",
            say: { A: "Viene el vigilante. Explico todo.", B: "Viene el vigilante. Le explico todo.", C: "Llega el vigilante. Se lo explico todo." },
            reply: { A: "El vigilante ve la granada y corre. Llama a la policía desde la calle. Suena un helicóptero.", B: "El vigilante ve la granada, da media vuelta y llama a la policía desde la calle. Un helicóptero se acerca.", C: "El vigilante ve la granada, retrocede y llama a la policía desde la acera. Un helicóptero empieza a sobrevolar." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "reir",
            say: { A: "¡Qué locura! ¡Parece una fiesta!", B: "¡Qué locura! ¡Parece una discoteca!", C: "¡Qué locura! ¡Esto parece una discoteca para autos!" },
            reply: { A: "Don Emilio se ríe. «¡Una fiesta de autos!» Va hacia el suyo.", B: "Don Emilio se ríe a carcajadas. «¡Una discoteca de autos!» Camina hacia el suyo.", C: "Don Emilio se ríe hasta toser. «¡Discoteca para jubilados!» Camina hacia su auto, bailando un poco." },
            mood: "laugh", end: "granada-auto",
          },
        ],
      },
      "gas-inicio": {
        who: "emilio", mood: "surprised",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve tu gas pimienta y saca el suyo. «¡Yo también tengo! Me lo dio mi hija. ¿Es bueno?»",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve tu gas pimienta y saca uno igual del abrigo. «¡Anda! Yo también llevo. Me lo regaló mi hija. ¿Funciona el tuyo?»",
          C: "En el estacionamiento, un señor con sombrero recorre las filas. Ve tu gas pimienta y saca uno idéntico del abrigo. «Mira qué coincidencia. Me lo regaló mi hija, por si me asaltan. ¿El tuyo funciona o es decorativo?»",
        },
        options: [
          {
            id: "club",
            say: { A: "Somos un club. ¿Busca su auto?", B: "Somos del mismo club. ¿Está buscando su auto?", C: "Somos del mismo club de prevenidos. ¿Busca su auto?" },
            reply: { A: "Don Emilio se ríe. «Sí. Verde, pequeño. Vamos juntos, armados.»", B: "Don Emilio se ríe. «Sí, verde y pequeño. Vamos juntos, los dos armados.»", C: "Don Emilio se ríe. «Verde, pequeño, cuarenta años. Vamos juntos: dos prevenidos valen por un vigilante.»" },
            mood: "smile", next: "gas-club",
          },
          {
            id: "probar",
            say: { A: "No sé si funciona. ¿Lo probamos?", B: "No sé si funciona. ¿Y si lo probamos?", C: "Nunca lo he probado. ¿Lo comprobamos aquí?" },
            reply: { A: "Don Emilio apunta al aire. «Despacio…» Sale un chorro. Los dos tosen.", B: "Don Emilio apunta al aire. «Despacito…» Sale un chorro y los dos empiezan a toser.", C: "Don Emilio apunta al techo. «Con cuidado…» Sale un chorro y los dos terminan tosiendo bajo las luces." },
            mood: "pain", end: "gas-nube",
          },
          {
            id: "desconfiar",
            say: { A: "¿Y por qué me lo enseña? No se acerque.", B: "¿Y por qué me lo enseña? No se acerque, por favor.", C: "¿Y por qué me lo enseña? Mantenga la distancia, por favor." },
            reply: { A: "Don Emilio se ofende. «¡Solo quiero compararlos!» Lo guarda.", B: "Don Emilio se ofende. «¡Solo quería compararlos, hombre!» Lo guarda, molesto.", C: "Don Emilio se ofende. «¡Solo quería comparar modelos!» Lo guarda con gesto digno." },
            mood: "angry", next: "gas-club",
          },
        ],
      },
      "gas-club": {
        who: "emilio", mood: "neutral",
        line: {
          A: "Caminan juntos entre los autos, con el gas en la mano. Don Emilio mira cada sombra. «Este barrio de noche…»",
          B: "Recorren las filas de autos con el gas listo. Don Emilio mira cada sombra con desconfianza. «Este estacionamiento de noche da miedo, ¿eh?»",
          C: "Recorren las filas de autos con el gas en alto, como dos patrulleros amateurs. Don Emilio estudia cada sombra. «Este sitio, de noche, es una película.»",
        },
        options: [
          {
            id: "auto",
            say: { A: "¡Mire! Un auto verde con una flor.", B: "¡Mire allí! Un auto verde con una flor en el techo.", C: "¡Mire al fondo! Un auto verde con una margarita en el techo." },
            reply: { A: "Don Emilio guarda el gas. «¡Es él! Gracias, compañero.»", B: "Don Emilio guarda el gas, aliviado. «¡Es él! Gracias, compañero de armas.»", C: "Don Emilio guarda el gas con solemnidad. «Es él. Gracias, compañero de patrulla.»" },
            mood: "smile", end: "gas-escolta",
          },
          {
            id: "sombra",
            say: { A: "¡Algo se mueve! ¡Cuidado!", B: "¡Algo se mueve detrás de ese auto! ¡Cuidado!", C: "¡Algo se mueve tras esa columna! ¡Atento!" },
            reply: { A: "Los dos aprietan el gas. Es un gato. La nube los alcanza. Tosen.", B: "Los dos disparan el gas a la vez. Era un gato. La nube vuelve hacia ustedes y tosen sin parar.", C: "Los dos rocían a la vez. Era un gato, que huye indignado. La nube regresa y los deja tosiendo como fumadores." },
            mood: "pain", end: "gas-nube",
          },
          {
            id: "guardar",
            say: { A: "Guardemos el gas. Aquí no hay nadie.", B: "Guardemos el gas. Aquí no hay nadie más que nosotros.", C: "Guardemos el gas. Aquí no hay más peligro que nuestra imaginación." },
            reply: { A: "Don Emilio asiente. «Tienes razón.» Y al fondo ve su auto.", B: "Don Emilio asiente. «Tienes razón, hijo.» Y, al guardarlo, ve su auto al fondo.", C: "Don Emilio asiente. «Razón no te falta.» Y justo al guardarlo, descubre su auto al fondo." },
            mood: "smile", end: "gas-escolta",
          },
        ],
      },
      "lapiz-inicio": {
        who: "emilio", mood: "worried",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve tu lápiz. «¿Un lápiz? Apunta, por favor: ya miré la fila A y la B. No lo encuentro.»",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve tu lápiz y se anima. «¿Llevas lápiz? Apunta, por favor: ya revisé la fila A y la B. Se me olvida y vuelvo a empezar.»",
          C: "En el estacionamiento, un señor con sombrero recorre las filas. Ve tu lápiz y se le ilumina la cara. «¿Un lápiz? Apunta, te lo ruego: filas A y B, revisadas. Sin apuntar, vuelvo a empezar cada diez minutos.»",
        },
        options: [
          {
            id: "apuntar",
            say: { A: "Apunto: A y B, no. ¿Cómo es el auto?", B: "Apuntado: A y B, revisadas. ¿Cómo es el auto?", C: "Anotado: A y B, descartadas. Descríbame el auto." },
            reply: { A: "«Verde, pequeño, con una flor en el techo.» Lo apuntas.", B: "«Verde, pequeño, con una flor en el techo.» Lo anotas debajo.", C: "«Verde, pequeño, con una margarita en el techo.» Lo anotas con letra clara." },
            mood: "neutral", next: "lapiz-columnas",
          },
          {
            id: "marcar",
            say: { A: "Marco las columnas con el lápiz. Así no repetimos.", B: "Marco cada columna revisada con el lápiz. Así no repetimos fila.", C: "Marco cada columna revisada con una cruz. Sin repeticiones." },
            reply: { A: "Don Emilio aplaude. «¡Como en el bosque! ¡Migas de pan!»", B: "Don Emilio aplaude. «¡Como Pulgarcito! Migas de lápiz.»", C: "Don Emilio aplaude. «¡Como Pulgarcito, pero con lápiz! Mi nieta estaría orgullosa.»" },
            mood: "smile", next: "lapiz-columnas",
          },
          {
            id: "nota",
            say: { A: "Le escribo una nota: “Piso 2, fila C”. Para su bolsillo.", B: "Le escribo una nota con el piso y la fila. Para el bolsillo del abrigo.", C: "Le escribo una nota con piso y fila, para el bolsillo del abrigo, por si volvemos a empezar." },
            reply: { A: "Don Emilio la guarda. «Mejor que mi memoria.»", B: "Don Emilio la guarda junto al ticket. «Esto es mejor que mi memoria.»", C: "Don Emilio la guarda con el ticket. «Más fiable que mi cabeza.»" },
            mood: "smile", next: "lapiz-columnas",
          },
        ],
      },
      "lapiz-columnas": {
        who: "emilio", mood: "neutral",
        line: {
          A: "Las columnas tienen marcas de lápiz. Don Emilio mira el papel. «Fila C… no. Fila D… ¡Espera!»",
          B: "Varias columnas llevan ya una cruz de lápiz. Don Emilio sigue la lista con el dedo. «Fila C, no. Fila D… Espera, espera.»",
          C: "Las columnas llevan cruces de lápiz como un mapa del tesoro. Don Emilio recorre la lista con el dedo. «C, descartada. D… Un momento.»",
        },
        options: [
          {
            id: "flor",
            say: { A: "¡La flor! ¡Ahí, en la fila D!", B: "¡Mire, la flor! ¡Ahí, en la fila D!", C: "¡La margarita! Fila D, al fondo." },
            reply: { A: "Don Emilio se quita el sombrero. «¡Mi auto! Gracias a tu lápiz.»", B: "Don Emilio se quita el sombrero. «¡Mi auto! Y todo gracias a un lápiz.»", C: "Don Emilio se descubre con reverencia. «Mi auto. Rescatado por un lápiz y un sistema.»" },
            mood: "love", end: "lapiz-mapa",
          },
          {
            id: "ticket",
            say: { A: "¿Y el ticket? Lo apunto también.", B: "¿Y qué dice el ticket? Lo apunto también.", C: "¿Y el ticket? Lo añado a la lista." },
            reply: { A: "«Piso 3.» Don Emilio se ríe. «¡Y nosotros en el 2!» Suben y lo encuentran.", B: "«Nivel 3.» Don Emilio se ríe. «¡Y nosotros marcando columnas del 2!» Suben y lo encuentran.", C: "«Nivel 3.» Don Emilio se ríe. «¡Media hora marcando columnas del nivel equivocado!» Suben y ahí está." },
            mood: "smile", end: "lapiz-mapa",
          },
          {
            id: "manana",
            say: { A: "Es tarde. Le dejo una nota en el parabrisas mañana.", B: "Es tarde. Mañana vuelvo y le dejo una nota en el parabrisas.", C: "Es tarde. Mañana paso, lo encuentro y le dejo una nota en el parabrisas." },
            reply: { A: "Don Emilio acepta. «Taxi hoy, nota mañana.» Guarda el papel.", B: "Don Emilio acepta. «Taxi hoy, nota mañana.» Dobla el papel con cuidado.", C: "Don Emilio acepta. «Taxi hoy, nota mañana. Un plan con lápiz es un plan serio.» Guarda el papel." },
            mood: "neutral", end: "lapiz-nota",
          },
        ],
      },
      "libro-inicio": {
        who: "emilio", mood: "surprised",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve tu libro. «¿Un libro? Mi Rosa leía en el auto. Siempre. ¿Qué lees?»",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve tu libro y se detiene. «¿Un libro? Mi Rosa siempre leía en el auto mientras yo conducía. ¿Qué es?»",
          C: "En el estacionamiento, un señor con sombrero recorre las filas. Ve tu libro y se para en seco. «¿Un libro? Mi Rosa leía en el auto, con los pies en el salpicadero. ¿Qué lees tú?»",
        },
        options: [
          {
            id: "mostrar",
            say: { A: "Es una novela. Mire. ¿Le gusta?", B: "Es una novela. Mire la portada. ¿Le gusta?", C: "Una novela. Mire la portada; ¿le dice algo?" },
            reply: { A: "Don Emilio la mira. «Rosa tenía este libro. En el auto.»", B: "Don Emilio la mira de cerca. «Rosa tenía este mismo libro. En la guantera.»", C: "Don Emilio la observa un rato largo. «Rosa tenía este libro. Vive todavía en la guantera.»" },
            mood: "sad", next: "libro-rosa",
          },
          {
            id: "ayudar",
            say: { A: "Le ayudo a buscar. ¿Cómo es el auto?", B: "Le ayudo a buscar su auto. ¿Cómo es?", C: "Le ayudo a encontrar el auto. Descríbamelo." },
            reply: { A: "«Verde, pequeño. Con un libro en la guantera.» Sonríe triste.", B: "«Verde, pequeño. Con un libro de Rosa en la guantera.» Sonríe con tristeza.", C: "«Verde, pequeño, con un libro de Rosa en la guantera.» Sonríe, pero le tiembla la voz." },
            mood: "sad", next: "libro-rosa",
          },
          {
            id: "leer",
            say: { A: "¿Le leo un poco mientras buscamos?", B: "¿Quiere que le lea un poco mientras buscamos?", C: "¿Le leo un fragmento mientras recorremos las filas?" },
            reply: { A: "Don Emilio asiente. «Como Rosa. Lee, hijo.»", B: "Don Emilio asiente despacio. «Como hacía Rosa. Lee, hijo.»", C: "Don Emilio asiente. «Como Rosa en los viajes largos. Lee, hijo, que yo busco.»" },
            mood: "love", next: "libro-rosa",
          },
        ],
      },
      "libro-rosa": {
        who: "emilio", mood: "sad",
        line: {
          A: "Don Emilio camina despacio. «Rosa murió hace tres años. El auto era suyo. Por eso lo busco siempre.»",
          B: "Don Emilio camina despacio entre los autos. «Rosa murió hace tres años. El auto era suyo. Por eso no quiero perderlo nunca.»",
          C: "Don Emilio avanza despacio, con la mirada en los autos. «Rosa murió hace tres años. El auto era suyo. Perderlo sería perderla otra vez.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Tome mi libro. Para la guantera.", B: "Quédese con mi libro. Para la guantera, junto al de Rosa.", C: "Quédese con mi libro. Para la guantera, al lado del de Rosa." },
            reply: { A: "Don Emilio lo abraza. Y ve su auto verde. «Ahí está. Gracias.»", B: "Don Emilio abraza el libro contra el pecho. Al levantar la vista, ve su auto verde. «Ahí está. Gracias, hijo.»", C: "Don Emilio abraza el libro. Al alzar la vista, descubre su auto verde al fondo. «Ahí está. Gracias, hijo.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "leer",
            say: { A: "Le leo mientras caminamos.", B: "Le leo en voz alta mientras caminamos.", C: "Le leo en voz alta mientras recorremos la fila." },
            reply: { A: "Lees. Don Emilio escucha. De pronto señala. «¡Mi auto! La flor.»", B: "Lees en voz alta. Don Emilio escucha con los ojos húmedos y, de pronto, señala. «¡Mi auto! La flor del techo.»", C: "Lees bajo los fluorescentes. Don Emilio escucha, emocionado, y de pronto señala. «¡Mi auto! La margarita.»" },
            mood: "love", end: "libro-lectura",
          },
          {
            id: "taxi",
            say: { A: "Es tarde. ¿Un taxi? Mañana busca el auto.", B: "Es tarde. ¿Y si toma un taxi y mañana busca el auto?", C: "Es tarde. ¿Un taxi hoy y la búsqueda mañana, con luz?" },
            reply: { A: "Don Emilio niega. «No. El auto de Rosa no se queda solo.» Sigue buscando. Y lo encuentra.", B: "Don Emilio niega con la cabeza. «No. El auto de Rosa no pasa la noche solo.» Sigue buscando. Y lo encuentra.", C: "Don Emilio se niega. «El auto de Rosa no duerme solo.» Sigue buscando, y al final lo encuentra." },
            mood: "sad", end: "libro-lectura",
          },
        ],
      },
      "corazon-inicio": {
        who: "emilio", mood: "love",
        line: {
          A: "En el estacionamiento, un señor mayor busca su auto. Ve tu corazón y sonríe. Te abraza sin conocerte. «Perdona. Hoy es el aniversario de mi boda.»",
          B: "En el estacionamiento, un señor con sombrero camina entre los autos. Ve tu corazón, sonríe y te abraza sin más. «Perdona, hijo. Hoy habría sido mi aniversario de boda. Cincuenta años.»",
          C: "En el estacionamiento, un señor con sombrero recorre las filas. Ve tu corazón y, sin aviso, te abraza. «Perdona, hijo. Hoy habría sido mi aniversario. Cincuenta años con Rosa.»",
        },
        options: [
          {
            id: "rosa",
            say: { A: "Cuénteme de Rosa.", B: "Cuénteme de Rosa, Don Emilio.", C: "Hábleme de Rosa. Tenemos tiempo." },
            reply: { A: "«Cantaba boleros en el auto. Fatal. Y yo conducía feliz.»", B: "«Cantaba boleros en el auto, desafinando. Y yo conducía como el hombre más feliz del mundo.»", C: "«Cantaba boleros en el auto, siempre desafinada. Yo conducía y era el hombre más afortunado del país.»" },
            mood: "love", next: "corazon-radio",
          },
          {
            id: "auto",
            say: { A: "Vamos a buscar el auto de Rosa.", B: "Vamos a buscar el auto de Rosa juntos.", C: "Busquemos el auto de Rosa. Juntos." },
            reply: { A: "Don Emilio asiente. «Verde. Con una flor de mi nieta.»", B: "Don Emilio asiente. «Verde, con una flor que le pegó mi nieta.»", C: "Don Emilio asiente. «Verde, con una margarita que le pegó mi nieta.»" },
            mood: "love", next: "corazon-radio",
          },
          {
            id: "abrazo",
            say: { A: "Abrazo a Don Emilio otra vez.", B: "Abrazo a Don Emilio otra vez, más fuerte.", C: "Le devuelvo el abrazo, más largo esta vez." },
            reply: { A: "Don Emilio llora un poco. «Gracias. Hoy lo necesitaba.» Y ve su auto detrás de ti.", B: "Don Emilio llora un poco contra tu hombro. «Gracias. Hoy lo necesitaba.» Y entonces ve su auto detrás de ti.", C: "Don Emilio llora contra tu hombro. «Gracias. Hoy hacía falta.» Y por encima de tu hombro, descubre su auto." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-radio": {
        who: "emilio", mood: "love",
        line: {
          A: "Encuentran el auto verde. Don Emilio enciende la radio. Suena un bolero. «Era nuestra canción.»",
          B: "Encuentran el auto verde con la flor. Don Emilio abre la puerta y enciende la radio. Suena un bolero. «Nuestra canción. No puede ser.»",
          C: "Encuentran el auto verde con la margarita. Don Emilio enciende la radio y suena un bolero. Se queda inmóvil. «Nuestra canción. Esta noche no es casualidad.»",
        },
        options: [
          {
            id: "bailar",
            say: { A: "¿Bailamos? Por Rosa.", B: "¿Bailamos un poco? Por Rosa.", C: "¿Me concede este baile? Por Rosa." },
            reply: { A: "Don Emilio se ríe y baila contigo entre los autos.", B: "Don Emilio se ríe, se quita el sombrero y baila contigo entre los autos.", C: "Don Emilio se ríe, deja el sombrero en el techo del auto y baila contigo entre las columnas." },
            mood: "love", end: "corazon-boleros",
          },
          {
            id: "cantar",
            say: { A: "Cante usted. Yo escucho.", B: "Cante usted, Don Emilio. Yo escucho.", C: "Cántela usted. Yo me quedo a escuchar." },
            reply: { A: "Don Emilio canta, fatal, con los ojos cerrados. Te abraza al final.", B: "Don Emilio canta desafinando, con los ojos cerrados. Al terminar, te abraza.", C: "Don Emilio canta, desafinado y feliz, con los ojos cerrados. Al final te abraza sin palabras." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "llevar",
            say: { A: "¿Me lleva a casa? Con boleros.", B: "¿Me lleva a casa? Con boleros, claro.", C: "¿Me lleva a casa? Con boleros de fondo, por supuesto." },
            reply: { A: "Don Emilio sonríe. «Sube. Rosa canta desde arriba.»", B: "Don Emilio sonríe. «Sube. Tú navegas, yo conduzco y Rosa canta desde arriba.»", C: "Don Emilio sonríe. «Sube. Tú indicas, yo conduzco y Rosa hace los coros desde arriba.»" },
            mood: "love", end: "corazon-boleros",
          },
        ],
      },
    },
    ends: {
      encontrado: { text: { A: "Don Emilio abre su auto. Te da un caramelo y se va despacio.", B: "Don Emilio abre su auto, te regala un caramelo de menta y sale despacio del estacionamiento.", C: "Don Emilio se despide con un caramelo de menta y sale a diez por hora, tocando la bocina dos veces." }, change: "sonrie", recap: "Encontraste el auto de Don Emilio." },
      taxi: { text: { A: "Llamas un taxi. Don Emilio sube y te dice adiós.", B: "Pides un taxi. Don Emilio sube y, desde la ventanilla, te dice adiós con el sombrero.", C: "Pides un taxi. Don Emilio sube con la dignidad de un general que se retira a tiempo." }, change: "se-va", recap: "Ayudaste a Don Emilio a volver a casa en taxi." },
      nieto: { text: { A: "Don Emilio llama a su nieto. Esperas con él. Su nieto llega pronto.", B: "Don Emilio llama a su nieto, que llega en veinte minutos. Mientras tanto, te cuenta de Rosa.", C: "Don Emilio llama a su nieto. La espera se llena de historias de Rosa y boleros desafinados." }, change: "llama", recap: "Esperaste con Don Emilio a que llegara su nieto." },
      abrazo: { text: { A: "Don Emilio te lleva en su auto. Escuchan boleros.", B: "Don Emilio te lleva en su auto verde. Ponen boleros y cantan los dos.", C: "Don Emilio te lleva en su auto verde, con boleros a todo volumen. Rosa estaría orgullosa." }, change: "abraza", recap: "Don Emilio te llevó en su auto con boleros." },
      policia: { text: { A: "Llega la policía. Explicas todo. Ellos encuentran el auto.", B: "Llega la policía. Tras explicar el malentendido, un agente encuentra el auto de Don Emilio.", C: "Llega una patrulla. Entre explicaciones, un agente encuentra el auto: tercer piso, zona C." }, change: "policia", recap: "Un malentendido con Don Emilio terminó con la policía." },
      solo: { text: { A: "Te vas. Don Emilio sigue buscando su auto.", B: "Te vas. Don Emilio sigue caminando entre los autos, despacio.", C: "Te alejas. Al fondo, Don Emilio sigue su búsqueda con paciencia infinita." }, change: "sigue", recap: "Dejaste a Don Emilio buscando su auto." },
      "cuchillo-encontrado": { text: { A: "Don Emilio abre su auto. «Gracias. Y el cuchillo, en casa.» Se va despacio.", B: "Don Emilio abre su auto y se despide: «Gracias, hijo. Y el cuchillo, en casa.» Sale despacio del estacionamiento.", C: "Don Emilio abre su auto y se despide con el sombrero: «Gracias. Y el cuchillo, en la cocina, donde vive.» Sale a diez por hora." }, change: "sonrie", recap: "Encontraste el auto de Don Emilio después del susto del cuchillo." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Un agente ayuda a Don Emilio.", B: "Llega la policía y te quita el cuchillo. Un agente acompaña a Don Emilio hasta su auto.", C: "Llega una patrulla. Te requisan el cuchillo y un agente acompaña a Don Emilio hasta su auto verde." }, change: "policia", recap: "El cuchillo acabó con la policía en el estacionamiento de Don Emilio." },
      "pistola-pitido": { text: { A: "El auto verde pita. Don Emilio corre hacia él y se encierra dentro. Arranca rápido.", B: "El auto verde pita al fondo. Don Emilio corre hacia él, se encierra y arranca a toda prisa.", C: "El auto verde pita al fondo. Don Emilio corre como no corría desde 1980, se encierra y arranca sin mirar atrás." }, change: "corre", recap: "La pistola hizo que Don Emilio encontrara su auto y huyera." },
      "pistola-policia": { text: { A: "La policía te lleva. Don Emilio explica con las manos todavía arriba.", B: "La policía te lleva. Don Emilio explica todo con las manos todavía medio arriba.", C: "La policía te lleva. Don Emilio declara con las manos aún a media altura, por costumbre." }, change: "policia", recap: "La pistola acabó con la policía en el estacionamiento de Don Emilio." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el estacionamiento. Las alarmas siguen. Don Emilio sigue sin auto.", B: "Un helicóptero ilumina la salida del estacionamiento. Las alarmas siguen sonando y Don Emilio sigue sin auto.", C: "Un helicóptero ilumina la rampa del estacionamiento. Veinte alarmas siguen cantando y Don Emilio sigue sin auto." }, change: "helicoptero", recap: "La granada disparó todas las alarmas del estacionamiento y trajo un helicóptero." },
      "granada-auto": { text: { A: "Don Emilio apaga su alarma y sube al auto. Las otras siguen sonando.", B: "Don Emilio apaga su alarma, sube al auto y sale entre veinte alarmas que siguen sonando.", C: "Don Emilio apaga su alarma y sale del estacionamiento entre un coro de alarmas ajenas, saludando con el sombrero." }, change: "luz", recap: "La granada hizo sonar todas las alarmas y así Don Emilio encontró su auto." },
      "gas-nube": { text: { A: "Los dos tosen. Un vigilante llama a una ambulancia. Don Emilio se ríe entre toses.", B: "Los dos tosen sin parar. El vigilante llama a una ambulancia. Don Emilio se ríe entre lágrimas de gas.", C: "Los dos tosen bajo los fluorescentes. El vigilante llama a una ambulancia y Don Emilio se ríe entre toses: «¡Funciona!»" }, change: "ambulancia", recap: "Probaste el gas pimienta con Don Emilio y terminaron tosiendo." },
      "gas-escolta": { text: { A: "Don Emilio sube a su auto. «Gracias, compañero.» Guarda el gas.", B: "Don Emilio sube a su auto y guarda el gas en la guantera. «Gracias, compañero.»", C: "Don Emilio sube a su auto, guarda el gas en la guantera y se despide: «Gracias, compañero de patrulla.»" }, change: "sonrie", recap: "Patrullaste el estacionamiento con Don Emilio y su gas pimienta." },
      "lapiz-mapa": { text: { A: "Don Emilio tiene su auto y tu papel. «Lo guardo para la próxima.»", B: "Don Emilio tiene su auto y guarda tu papel con las filas marcadas. «Para la próxima vez.»", C: "Don Emilio tiene su auto y guarda tu lista de filas como un mapa del tesoro. «Para la próxima, que la habrá.»" }, change: "sonrie", recap: "Un lápiz y un sistema encontraron el auto de Don Emilio." },
      "lapiz-nota": { text: { A: "Don Emilio se va en taxi con tu nota. Mañana vuelve.", B: "Don Emilio se va en taxi con tu nota en el bolsillo. Mañana vuelve a buscar el auto.", C: "Don Emilio se va en taxi con tu nota en el bolsillo. Mañana, con luz y con lápiz, vuelve a por el auto." }, change: "se-va", recap: "Dejaste a Don Emilio una nota para buscar el auto mañana." },
      "libro-regalo": { text: { A: "Don Emilio abre el auto. Pone tu libro en la guantera, junto al de Rosa.", B: "Don Emilio abre el auto y pone tu libro en la guantera, junto al de Rosa.", C: "Don Emilio abre el auto y guarda tu libro en la guantera, al lado del de Rosa. Dos libros, una guantera." }, change: "sonrie", recap: "Regalaste tu libro a Don Emilio para la guantera de Rosa." },
      "libro-lectura": { text: { A: "Don Emilio sube al auto. «Sigue leyendo. Te llevo a casa.»", B: "Don Emilio sube al auto. «Sigue leyendo, que te llevo a casa.» Y lees hasta tu puerta.", C: "Don Emilio arranca. «Sigue leyendo, que te llevo.» Lees hasta tu puerta, como Rosa en los viajes largos." }, change: "luz", recap: "Leíste en voz alta a Don Emilio en el auto de Rosa." },
      "corazon-abrazo": { text: { A: "Don Emilio te abraza junto a su auto. «Gracias, hijo.»", B: "Don Emilio te abraza junto a su auto verde. «Gracias, hijo. Hoy no fue un día triste.»", C: "Don Emilio te abraza junto a su auto verde. «Gracias, hijo. Hoy el aniversario no dolió.»" }, change: "abraza", recap: "Don Emilio te abrazó en el aniversario de su boda." },
      "corazon-boleros": { text: { A: "Bailan un bolero entre los autos. Don Emilio canta fatal. Es perfecto.", B: "Bailan un bolero entre los autos. Don Emilio canta desafinando y es perfecto.", C: "Bailan un bolero entre las columnas. Don Emilio canta desafinando y la noche es perfecta." }, change: "baila", recap: "Bailaste un bolero con Don Emilio en el estacionamiento." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Hay seguridad en las fiestas de tu ciudad?", B: "¿Qué harías si alguien sacara un cuchillo en la puerta de una fiesta?", C: "¿Qué distingue el respeto ganado por miedo del respeto ganado por calma?" } },
      pistola: { start: "pistola-inicio", fx: "policia", speak: { A: "¿Qué haces si ves a la policía en una fiesta?", B: "¿Alguna vez te revisaron en la entrada de un lugar y cómo te sentiste?", C: "¿Qué consecuencias merece llevar un arma a un lugar lleno de gente?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces si hay una alarma en una fiesta?", B: "¿Qué fue lo más caótico que viviste en una discoteca o un concierto?", C: "¿Por qué una multitud en pánico se comporta como un solo animal?" } },
      gas: { start: "gas-inicio", fx: "risa", speak: { A: "¿Llevas algo para protegerte cuando sales?", B: "¿Qué precauciones tomas cuando sales de fiesta de noche?", C: "¿Cuándo la prudencia nocturna se convierte en paranoia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Dibujas a tus amigos?", B: "¿Alguna vez un dibujo o una nota te abrió una puerta?", C: "¿Qué puede conseguir un retrato que no consigue un argumento?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Llevas un libro cuando sales de noche?", B: "¿Qué libro llevarías a una fiesta y por qué?", C: "¿Qué dice de alguien que lleve un libro a una fiesta?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Bailas salsa?", B: "¿Cuándo fue la última vez que alguien te sorprendió con un beso o un abrazo?", C: "¿Qué hace que una persona con un papel duro muestre de pronto su lado tierno?" } },
    },
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
      "cuchillo-inicio": {
        who: "yolanda", mood: "angry",
        line: {
          A: "En la puerta de La Fábrica, la portera ve tu cuchillo. Saca uno de su bota. «¿Qué haces con eso? Yo también tengo. Baja el tuyo.»",
          B: "En la puerta de La Fábrica, la portera baja la lista al ver tu cuchillo. Sin prisa, saca el suyo de la bota. «¿Qué haces con ese cuchillo en mi puerta? Yo también tengo uno. Baja el tuyo.»",
          C: "En la puerta de La Fábrica, la portera ve tu cuchillo y suelta la lista. Con calma profesional saca una navaja de la bota. «¿Vienes con cuchillo a mi puerta? Yo tengo el mío desde hace diez años. Baja el tuyo primero.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Lo bajo. Perdón. Es para la boda. Para la tarta.", B: "Lo bajo. Perdona. Es de la boda, para cortar la tarta.", C: "Lo bajo. Perdona; viene de la boda, de cortar la tarta." },
            reply: { A: "Yolanda no baja el suyo. «¿Una tarta? Cuéntame más. Despacio.»", B: "Yolanda no baja el suyo todavía. «¿Una tarta? Cuéntamelo despacio y sin mover las manos.»", C: "Yolanda mantiene el suyo en alto. «¿Una tarta? Cuéntame esa historia, despacio y con las manos quietas.»" },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "retar",
            say: { A: "Tú primero. No te conozco.", B: "Baja el tuyo primero. No te conozco.", C: "Primero el tuyo. No sé quién eres." },
            reply: { A: "Yolanda sonríe sin alegría. «Mala respuesta.» La cola retrocede.", B: "Yolanda sonríe sin un gramo de alegría. «Respuesta equivocada.» La cola entera da un paso atrás.", C: "Yolanda sonríe como una puerta que se cierra. «Mala respuesta.» La cola se aleja en silencio." },
            mood: "angry", next: "cuchillo-duelo",
          },
          {
            id: "tirar",
            say: { A: "Lo tiro al suelo. ¿Ves? Nada.", B: "Lo tiro al suelo. ¿Lo ves? No pasa nada.", C: "Lo suelto en el suelo. ¿Ves? Sin trucos." },
            reply: { A: "Yolanda lo aparta con el pie. «Bien. Ahora, la policía decide.»", B: "Yolanda aparta el cuchillo con el pie. «Bien hecho. Ahora, que decida la policía.»", C: "Yolanda aleja el cuchillo con la bota. «Bien. El resto lo decide la policía, que ya viene.»" },
            mood: "worried", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "yolanda", mood: "angry",
        line: {
          A: "Yolanda y tú tienen un cuchillo cada uno. Nadie se mueve. Leire, Óscar y Mavi salen a la puerta. «¡Yolanda! ¡Es nuestro amigo!»",
          B: "Dos cuchillos, un metro de distancia, cero movimiento. De pronto, Leire, Óscar y Mavi aparecen en la puerta. «¡Yolanda, es nuestro amigo! ¡Y tú, guarda eso!»",
          C: "Dos cuchillos frente a frente y el bajo de fondo como banda sonora. En ese instante, Leire, Óscar y Mavi se asoman a la puerta. «¡Yolanda, es de los nuestros! ¡Y tú, por favor, guarda eso!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Lo guardo. Yolanda, perdón.", B: "Lo guardo ahora mismo. Yolanda, perdóname.", C: "Guardado. Yolanda, te pido disculpas." },
            reply: { A: "Yolanda guarda el suyo despacio. «Tus amigos te salvan. Hoy.»", B: "Yolanda guarda el suyo sin prisa. «Tus amigos te han salvado. Hoy.»", C: "Yolanda devuelve el suyo a la bota con parsimonia. «Tus amigos te salvan. Hoy. Mañana, no sé.»" },
            mood: "worried", next: "cuchillo-respeto",
          },
          {
            id: "amigos",
            say: { A: "¡Chicos! ¡Díganle que soy de la boda!", B: "¡Chicos, explíquenle que vengo de la boda!", C: "¡Chicos, cuéntenle que vengo de la boda!" },
            reply: { A: "Mavi grita: «¡Cortó la tarta de Lucía!» Yolanda levanta una ceja.", B: "Mavi grita: «¡Fue quien cortó la tarta de Lucía!» Yolanda levanta una ceja y baja el cuchillo un centímetro.", C: "Mavi grita: «¡Cortó la tarta de Lucía con ese mismo cuchillo!» Yolanda arquea una ceja y baja el suyo un centímetro." },
            mood: "surprised", next: "cuchillo-respeto",
          },
          {
            id: "pelea",
            say: { A: "Un paso adelante.", B: "Doy un paso adelante.", C: "Avanzo un paso." },
            reply: { A: "Yolanda te derriba en un segundo. Nadie sale herido. Llega la policía.", B: "Yolanda te tumba en el suelo en un segundo, sin un rasguño. La patrulla ya está en la esquina.", C: "Yolanda te inmoviliza en el suelo en un parpadeo, sin un rasguño para nadie. La patrulla aparece en la esquina." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-respeto": {
        who: "yolanda", mood: "neutral",
        line: {
          A: "Los cuchillos están guardados. Yolanda te mira. «Nadie me había aguantado la mirada con un cuchillo. ¿Qué quieres?»",
          B: "Los dos cuchillos están guardados. Yolanda te estudia. «Nadie me aguanta la mirada con un cuchillo delante. Tienes valor o eres tonto. ¿Qué quieres?»",
          C: "Los dos cuchillos descansan en sus sitios. Yolanda te mide con la mirada. «Hace años que nadie me sostiene la mirada con una navaja delante. Valor o estupidez. ¿Qué quieres?»",
        },
        options: [
          {
            id: "entrar",
            say: { A: "Entrar con mis amigos. Sin cuchillo.", B: "Entrar con mis amigos. Sin cuchillo, claro.", C: "Entrar con mis amigos. Sin cuchillo, obviamente." },
            reply: { A: "Yolanda señala la calle. «Por la puerta trasera. Y el cuchillo se queda conmigo.»", B: "Yolanda señala el callejón. «Puerta trasera. Y el cuchillo se queda aquí, conmigo.»", C: "Yolanda señala el callejón con la barbilla. «Puerta trasera. El cuchillo se queda en mi custodia hasta que salgas.»" },
            mood: "neutral", end: "cuchillo-trasera",
          },
          {
            id: "respeto",
            say: { A: "Respeto. Tú ganas. Me quedo fuera.", B: "Te respeto. Ganaste. Me quedo fuera.", C: "Respeto. Has ganado. Me quedo fuera, sin rencor." },
            reply: { A: "Yolanda asiente. «Respeto. Toma, mi número. Otra noche, sin cuchillos.»", B: "Yolanda asiente, seria. «Respeto. Toma mi número. Otra noche, sin cuchillos, te dejo pasar.»", C: "Yolanda asiente con algo parecido a aprecio. «Respeto. Mi número. Otra noche, sin cuchillos, entras el primero.»" },
            mood: "smile", end: "cuchillo-numero",
          },
          {
            id: "broma",
            say: { A: "¿Y si repetimos? Ha sido divertido.", B: "¿Y si repetimos? Ha sido emocionante.", C: "¿Repetimos? Ha sido lo más emocionante de la noche." },
            reply: { A: "Yolanda no se ríe. Habla por la radio. Llega una patrulla.", B: "Yolanda no mueve un músculo. Habla por la radio y una patrulla asoma en la esquina.", C: "Yolanda no se inmuta. Murmura algo por la radio y una patrulla dobla la esquina." },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "yolanda", mood: "angry",
        line: {
          A: "En la puerta de La Fábrica, el detector pita. La portera ve tu pistola y habla por la radio. «Arma en la puerta.» Una patrulla para en la esquina.",
          B: "En la puerta de La Fábrica, el detector pita. La portera ve tu pistola y no se mueve: habla por la radio. «Arma en la puerta. Ya.» En la esquina, una patrulla frena con las luces encendidas.",
          C: "En la puerta de La Fábrica, el detector pita y la portera ve tu pistola. Sin perder la calma, habla por la radio: «Arma en la puerta principal.» Una patrulla aparece en la esquina como si la hubiera invocado.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. No quiero problemas.", B: "La guardo. No quiero problemas, de verdad.", C: "La guardo. No he venido a buscar problemas." },
            reply: { A: "Yolanda levanta la mano. «No la guardes. No te muevas. Déjala en el suelo.»", B: "Yolanda levanta la mano. «No. No la guardes. No te muevas. Despacio, al suelo.»", C: "Yolanda alza una mano. «No la guardes. No te muevas. Al suelo, despacio, y no mires a la cola.»" },
            mood: "scared", next: "pistola-cerco",
          },
          {
            id: "explicar",
            say: { A: "Es de la boda. Un regalo raro.", B: "Es de la boda. Un regalo muy raro, lo sé.", C: "Viene de la boda. Un regalo de pésimo gusto, lo admito." },
            reply: { A: "Yolanda no sonríe. Dos guardias se acercan por los lados.", B: "Yolanda no sonríe. Dos guardias de seguridad se acercan por los lados, sin prisa.", C: "Yolanda no sonríe. Dos guardias cierran el cerco por los flancos, con la calma de quien lo hace a menudo." },
            mood: "scared", next: "pistola-cerco",
          },
          {
            id: "correr",
            say: { A: "Me voy. Ahora.", B: "Me voy ahora mismo.", C: "Me largo. Ahora." },
            reply: { A: "Corres por el callejón. La patrulla te sigue con las luces.", B: "Corres por el callejón. La patrulla te sigue con las luces y la sirena.", C: "Corres por el callejón. La patrulla te persigue con luces, sirena y poca paciencia." },
            mood: "terror", end: "pistola-huida",
          },
        ],
      },
      "pistola-cerco": {
        who: "yolanda", mood: "neutral",
        line: {
          A: "Dos guardias, la patrulla y Yolanda te rodean. La cola mira. Tus amigos salen a la puerta. «¿Qué pasa?»",
          B: "Dos guardias, los agentes de la patrulla y Yolanda forman un círculo a tu alrededor. La cola mira en silencio. Leire, Óscar y Mavi salen a la puerta. «¿Qué está pasando?»",
          C: "Dos guardias, dos agentes y Yolanda te rodean con la precisión de un ensayo. La cola mira sin respirar. Leire, Óscar y Mavi aparecen en la puerta. «¿Qué está pasando aquí?»",
        },
        options: [
          {
            id: "suelo",
            say: { A: "La dejo en el suelo. Manos arriba.", B: "La dejo en el suelo y levanto las manos.", C: "La deposito en el suelo y levanto las manos. Sin resistencia." },
            reply: { A: "Los agentes la recogen. Yolanda suspira. «Bien hecho. Lo único bien hecho.»", B: "Los agentes recogen el arma. Yolanda suspira. «Bien hecho. Lo único que has hecho bien esta noche.»", C: "Los agentes recogen el arma. Yolanda exhala. «Bien hecho. Es lo único sensato que has hecho en toda la noche.»" },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "amigos",
            say: { A: "¡Chicos! Expliquen que vengo de la boda.", B: "¡Chicos, expliquen que vengo de la boda, por favor!", C: "¡Chicos, díganles que vengo de la boda!" },
            reply: { A: "Leire grita: «¡Es de la boda!» El agente responde: «La boda no explica el arma.»", B: "Leire grita: «¡Viene de la boda de Lucía!» El agente contesta: «La boda no explica el arma, señorita.»", C: "Leire grita: «¡Viene de la boda de Lucía!» El agente responde, impasible: «La boda explica el traje, no el arma.»" },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "huir",
            say: { A: "Empujo al guardia y corro.", B: "Empujo a un guardia y salgo corriendo.", C: "Empujo a un guardia y echo a correr." },
            reply: { A: "Corres entre los contenedores. Nadie te alcanza. Esta noche no bailas.", B: "Corres entre los contenedores del callejón. Nadie te alcanza, pero esta noche no bailas.", C: "Te pierdes entre los contenedores del callejón. Nadie te alcanza. La fiesta queda a tu espalda, para siempre." },
            mood: "terror", end: "pistola-huida",
          },
        ],
      },
      "granada-inicio": {
        who: "yolanda", mood: "scared",
        line: {
          A: "En la puerta de La Fábrica, la portera ve tu granada. Grita por la radio: «¡Evacuación! ¡Todos fuera!» La cola corre. Las puertas se abren y sale la gente.",
          B: "En la puerta de La Fábrica, la portera ve la granada en tu mano y grita por la radio: «¡Evacuación! ¡Todo el mundo fuera!» La cola se dispersa y las puertas vomitan a trescientas personas.",
          C: "En la puerta de La Fábrica, la portera ve tu granada y, por primera vez, pierde la calma: «¡Evacuación! ¡Todos fuera, ya!» La cola se evapora y por las puertas salen trescientas personas con purpurina.",
        },
        options: [
          {
            id: "broma",
            say: { A: "¡Es de broma! ¡Es de mentira!", B: "¡Es una broma! ¡Es falsa!", C: "¡Es una broma! ¡Es una réplica!" },
            reply: { A: "Nadie te oye. Trescientas personas llenan la calle. Yolanda cierra las puertas.", B: "Nadie te oye entre los gritos. Trescientas personas llenan la calle y Yolanda cierra las puertas detrás de ellas.", C: "Nadie te escucha. Trescientas personas inundan la calle y Yolanda cierra las puertas a su espalda, como un capitán." },
            mood: "scared", next: "granada-calle",
          },
          {
            id: "guardar",
            say: { A: "¡La guardo! ¡Miren, la guardo!", B: "¡La guardo! ¡Miren, ya está guardada!", C: "¡Guardada! ¡Miren, ya no está a la vista!" },
            reply: { A: "Demasiado tarde. La Fábrica se vacía. Óscar sale bailando sin saber nada.", B: "Demasiado tarde. La Fábrica se vacía entera. Óscar sale bailando, sin enterarse de nada.", C: "Demasiado tarde. La Fábrica se vacía por completo. Óscar sale bailando, ajeno al apocalipsis." },
            mood: "scared", next: "granada-calle",
          },
          {
            id: "tirar",
            say: { A: "¡La tiro lejos!", B: "¡La tiro lejos de la gente!", C: "¡La lanzo lejos de la gente!" },
            reply: { A: "La granada cae en un contenedor. Nada explota. Pero ya suena un helicóptero.", B: "La granada cae dentro de un contenedor. No explota. Pero sobre el callejón ya suena un helicóptero.", C: "La granada aterriza en un contenedor. No pasa nada. Pero sobre Los Galpones ya ronda un helicóptero." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-calle": {
        who: "leire", mood: "surprised",
        line: {
          A: "Trescientas personas en la calle. Leire, Óscar y Mavi te encuentran. «¿Fuiste tú? ¡Estás loco!»",
          B: "Trescientas personas en la calle, en silencio. Leire, Óscar y Mavi te encuentran entre la multitud. «¿Has sido tú? ¡Estás completamente loco!»",
          C: "Trescientas personas en la acera, mudas. Leire, Óscar y Mavi te localizan entre la multitud. «¿Has sido tú? ¿Con una granada? ¡Estás como una cabra!»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Miren. La abro. Está vacía.", B: "Miren, la abro. Está vacía.", C: "Miren: la abro. Hueca por dentro." },
            reply: { A: "Óscar se ríe. «¡Entonces la fiesta sigue aquí!» Alguien saca un altavoz.", B: "Óscar se ríe a carcajadas. «¡Pues la fiesta sigue en la calle!» Alguien saca un altavoz portátil.", C: "Óscar estalla en carcajadas. «¡Pues la fiesta sigue aquí fuera!» Alguien enciende un altavoz portátil." },
            mood: "laugh", end: "granada-fiesta",
          },
          {
            id: "perdon",
            say: { A: "Perdón. Fue una broma horrible.", B: "Perdón. Ha sido una broma horrible.", C: "Perdón. Ha sido una broma de pésimo gusto." },
            reply: { A: "Mavi te abraza. «Horrible. Pero estamos todos fuera y hay música.» Suena un altavoz.", B: "Mavi te abraza. «Horrible, sí. Pero mira: todos fuera y hay música.» Alguien pone un altavoz.", C: "Mavi te abraza. «Pésimo gusto, sí. Pero estamos todos fuera, vivos y con música.» Suena un altavoz." },
            mood: "love", end: "granada-fiesta",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy antes de la policía.", B: "Mejor me voy antes de que llegue la policía.", C: "Mejor me esfumo antes de que llegue la policía." },
            reply: { A: "Demasiado tarde. Un helicóptero ilumina la calle.", B: "Demasiado tarde: un helicóptero ilumina la calle entera.", C: "Demasiado tarde: un helicóptero clava su foco sobre trescientas personas y tú." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "yolanda", mood: "laugh",
        line: {
          A: "En la puerta de La Fábrica, la portera ve tu gas pimienta y se ríe. «¿Gas? Yo tengo dos. Y un perro en casa. ¿Nombre?»",
          B: "En la puerta de La Fábrica, la portera ve tu gas pimienta y suelta una carcajada. «¿Gas pimienta? Yo llevo dos y un perro en casa. Relájate. ¿Nombre?»",
          C: "En la puerta de La Fábrica, la portera ve tu gas pimienta y se ríe de verdad. «¿Gas pimienta? Yo llevo dos, un silbato y un perro con mal carácter. Relájate. ¿Nombre?»",
        },
        options: [
          {
            id: "prudente",
            say: { A: "Es por seguridad. La noche es peligrosa.", B: "Es por precaución. La noche puede ser peligrosa.", C: "Es simple precaución. La noche no siempre es amable." },
            reply: { A: "Yolanda asiente. «Prudente. Me gusta. No estás en la lista, pero…»", B: "Yolanda asiente. «Prudente. Eso me gusta. No estás en la lista, pero sigue hablando.»", C: "Yolanda asiente con aprobación. «Prudente. Me cae bien la gente prudente. No estás en la lista, pero continúa.»" },
            mood: "smile", next: "gas-consejo",
          },
          {
            id: "paranoia",
            say: { A: "¿Y tú? ¿Por qué dos?", B: "¿Y tú por qué llevas dos?", C: "¿Y por qué llevas dos? ¿Tan mal está la zona?" },
            reply: { A: "Yolanda se ríe. «Uno para la calle y otro para la cola. ¿Nombre?»", B: "Yolanda se ríe. «Uno para la calle y otro para la cola de los viernes. ¿Nombre?»", C: "Yolanda se ríe. «Uno para la calle y otro para los viernes. Los viernes son peores. ¿Nombre?»" },
            mood: "smile", next: "gas-consejo",
          },
          {
            id: "apuntar",
            say: { A: "No te acerques. Lo uso.", B: "No te acerques más o lo uso.", C: "No te acerques o lo uso, aviso." },
            reply: { A: "Yolanda deja de reír. «Error.» Te quita el gas en un segundo.", B: "Yolanda deja de reír. «Error.» Te quita el gas de la mano en un segundo.", C: "Yolanda deja de reír. «Error de principiante.» Te desarma en un segundo, sin esfuerzo." },
            mood: "angry", end: "gas-fuera",
          },
        ],
      },
      "gas-consejo": {
        who: "yolanda", mood: "smile",
        line: {
          A: "Yolanda guarda la lista. «Un consejo: el gas en la cola de fuera se ve mal. ¿Qué haces aquí?»",
          B: "Yolanda guarda la lista bajo el brazo. «Un consejo gratis: el gas en la mano, en una cola, da mala imagen. ¿A qué has venido?»",
          C: "Yolanda se guarda la lista. «Consejo de profesional: el gas en la mano, en una cola, asusta más de lo que protege. ¿A qué has venido exactamente?»",
        },
        options: [
          {
            id: "amigos",
            say: { A: "Mis amigos de la boda están dentro.", B: "Mis amigos de la boda están dentro, me esperan.", C: "Mis amigos de la boda están dentro y me esperan." },
            reply: { A: "Yolanda grita hacia dentro: «¡Leire! ¡Óscar! ¡Mavi!» Salen tres cabezas. Abre la cuerda.", B: "Yolanda grita hacia la pista: «¡Leire, Óscar, Mavi!» Aparecen tres cabezas. Abre la cuerda. «Prudente y con avales. Pasa.»", C: "Yolanda grita hacia la pista: «¡Leire, Óscar, Mavi!» Tres cabezas asoman. Abre la cuerda. «Prudente y con testigos. Pasa.»" },
            mood: "smile", end: "gas-dentro",
          },
          {
            id: "guardar",
            say: { A: "Lo guardo. Gracias.", B: "Lo guardo. Gracias por el consejo.", C: "Guardado. Agradezco el consejo." },
            reply: { A: "Yolanda asiente. «Mejor. Pasa, pero el gas se queda en el bolsillo.»", B: "Yolanda asiente. «Mucho mejor. Pasa, pero el gas no sale del bolsillo.»", C: "Yolanda asiente. «Así sí. Pasa, con el gas bien guardado toda la noche.»" },
            mood: "smile", end: "gas-dentro",
          },
          {
            id: "irse",
            say: { A: "Bueno. Me quedo fuera. Con mi gas.", B: "Bueno, me quedo fuera. Con mi gas, por si acaso.", C: "Está bien. Me quedo fuera. Con mi gas, por si acaso." },
            reply: { A: "Yolanda se ríe. «Tú y tu gas. Buenas noches.»", B: "Yolanda se ríe. «Tú y tu gas, contra la noche. Suerte.»", C: "Yolanda se ríe. «Tú y tu gas contra el mundo. Buenas noches.»" },
            mood: "smile", end: "gas-fuera",
          },
        ],
      },
      "lapiz-inicio": {
        who: "yolanda", mood: "neutral",
        line: {
          A: "En la puerta de La Fábrica, la portera ve tu lápiz. «No estás en la lista. ¿Y ese lápiz? ¿Vas a dibujarme?»",
          B: "En la puerta de La Fábrica, la portera repasa la lista y ve tu lápiz. «No apareces. ¿Y ese lápiz? ¿Vas a dibujarme o a falsificar mi lista?»",
          C: "En la puerta de La Fábrica, la portera no encuentra tu nombre y repara en tu lápiz. «No existes en este papel. ¿Y ese lápiz? ¿Me vas a retratar o a corregir la lista?»",
        },
        options: [
          {
            id: "retrato",
            say: { A: "Te dibujo. Dos minutos.", B: "Te dibujo. Dame dos minutos.", C: "Te hago un retrato. Dos minutos, no más." },
            reply: { A: "Yolanda cruza los brazos. «Dos minutos. Y que salga guapa.»", B: "Yolanda cruza los brazos. «Dos minutos. Y si no salgo guapa, no entras.»", C: "Yolanda cruza los brazos y posa sin querer. «Dos minutos. Y si me sacas fea, te quedas fuera.»" },
            mood: "smile", next: "lapiz-retrato",
          },
          {
            id: "nota",
            say: { A: "Escribo una nota para mis amigos. ¿Se la das?", B: "Escribo una nota para mis amigos de dentro. ¿Se la haces llegar?", C: "Escribo una nota para mis amigos. ¿Puedes hacérsela llegar?" },
            reply: { A: "Yolanda lee la nota. «“Estoy fuera, socorro”. Bueno. Se la doy.»", B: "Yolanda lee la nota en voz alta: «“Estoy fuera. Socorro.” Qué drama. Se la doy.»", C: "Yolanda lee la nota: «“Estoy fuera, rescátenme.” Muy teatral. Se la haré llegar.»" },
            mood: "smile", next: "lapiz-retrato",
          },
          {
            id: "lista",
            say: { A: "Escribo mi nombre en la lista.", B: "Escribo mi nombre al final de la lista.", C: "Añado mi nombre al final de la lista." },
            reply: { A: "Yolanda te quita el lápiz. «No. Pero tienes buena letra.»", B: "Yolanda te quita el lápiz. «Ni hablar. Aunque tienes buena letra.»", C: "Yolanda te confisca el lápiz. «Ni lo sueñes. Buena caligrafía, eso sí.»" },
            mood: "neutral", next: "lapiz-retrato",
          },
        ],
      },
      "lapiz-retrato": {
        who: "yolanda", mood: "smile",
        line: {
          A: "Yolanda mira el papel. Es ella, con trenzas y cara seria. «Vaya… Salgo bien.»",
          B: "Yolanda mira el papel: es ella, con sus trenzas y su cara de portera. «Vaya. Salgo mejor que en la foto del carnet.»",
          C: "Yolanda estudia el papel: ella, trenzas, cara de piedra, un punto de ternura. «Vaya. Salgo mejor que en cualquier foto que tengo.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Es tuyo. Un regalo.", B: "Es tuyo. Te lo regalo.", C: "Es tuyo. Un regalo, sin condiciones." },
            reply: { A: "Yolanda lo guarda en la chaqueta. Abre la cuerda. «Pasa. Rápido.»", B: "Yolanda lo guarda en la chaqueta con cuidado y abre la cuerda. «Pasa. Rápido, antes de que lo piense.»", C: "Yolanda lo guarda en el bolsillo interior y abre la cuerda. «Pasa. Antes de que recupere el juicio.»" },
            mood: "love", end: "lapiz-dentro",
          },
          {
            id: "firmar",
            say: { A: "Lo firmo. Y tú firmas la lista con mi nombre.", B: "Lo firmo, y tú firmas mi nombre en la lista.", C: "Lo firmo, y a cambio tú apuntas mi nombre en la lista." },
            reply: { A: "Yolanda se ríe. «Trato.» Escribe tu nombre y te deja pasar.", B: "Yolanda se ríe. «Trato hecho.» Escribe tu nombre con tu lápiz y abre la cuerda.", C: "Yolanda se ríe. «Trato.» Apunta tu nombre con tu propio lápiz y levanta la cuerda." },
            mood: "smile", end: "lapiz-dentro",
          },
          {
            id: "amigos",
            say: { A: "Ahora dibujo a mis amigos. Si salen, ellos lo ven.", B: "Ahora dibujo a mis amigos. Si los llamas, lo ven.", C: "Ahora retrato a mis amigos. Si los llamas, lo juzgan ellos." },
            reply: { A: "Yolanda llama a tus amigos. Salen, ven los dibujos y se ríen. Bailan en la acera contigo.", B: "Yolanda los llama. Leire, Óscar y Mavi salen, ven los dibujos y se mueren de risa. Se quedan a bailar en la acera contigo.", C: "Yolanda los llama. Leire, Óscar y Mavi salen, ven las caricaturas y lloran de risa. La fiesta se queda en la acera contigo." },
            mood: "laugh", end: "lapiz-acera",
          },
        ],
      },
      "libro-inicio": {
        who: "yolanda", mood: "laugh",
        line: {
          A: "En la puerta de La Fábrica, la portera ve tu libro y se ríe. «¿Un libro? ¿A una fiesta? ¿Qué haces con un libro aquí?»",
          B: "En la puerta de La Fábrica, la portera ve tu libro y se ríe de verdad. «¿Un libro? ¿En la cola de una fiesta? ¿Qué haces con un libro aquí, de noche?»",
          C: "En la puerta de La Fábrica, la portera ve tu libro y suelta la primera carcajada de su turno. «¿Un libro? ¿En mi cola? Es lo más raro que he visto esta semana, y eso que es viernes.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Es para la cola. Es larga.", B: "Es para la cola. Siempre es larga.", C: "Es para la cola. Siempre es eterna." },
            reply: { A: "Yolanda se ríe. «La cola es larga porque yo soy lenta. ¿Qué lees?»", B: "Yolanda se ríe. «Es larga porque yo soy lenta a propósito. ¿Qué lees?»", C: "Yolanda se ríe. «Larga porque yo la hago larga. ¿Y qué lees, si puede saberse?»" },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "entrada",
            say: { A: "Es mi entrada. Mira: mi nombre, página uno.", B: "Es mi entrada. Mira, aquí está mi nombre, en la primera página.", C: "Es mi entrada: mi nombre, en la primera página, con buena letra." },
            reply: { A: "Yolanda lo abre. «Qué nombre tan raro. Pero no está en la lista.»", B: "Yolanda lo abre. «Qué nombre más raro. Y no está en la lista. ¿De qué va el libro?»", C: "Yolanda lo hojea. «Nombre curioso. No está en la lista. ¿De qué va el libro, al menos?»" },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "regalo",
            say: { A: "Es un regalo. Para ti. Por tu trabajo.", B: "Es un regalo. Para ti, por aguantar esta cola cada noche.", C: "Es un regalo para ti, por sobrevivir a esta cola cada noche." },
            reply: { A: "Yolanda lo mira. «¿Un soborno literario? Nadie me había sobornado así.»", B: "Yolanda lo mira con sospecha. «¿Un soborno literario? Es el primero que recibo.»", C: "Yolanda lo examina. «¿Soborno literario? Original. No garantiza nada, pero original.»" },
            mood: "surprised", next: "libro-lectura",
          },
        ],
      },
      "libro-lectura": {
        who: "yolanda", mood: "smile",
        line: {
          A: "Yolanda abre el libro y lee una línea en voz alta. La cola escucha. «Oye… no está mal.»",
          B: "Yolanda abre el libro al azar y lee una línea en voz alta. La cola entera escucha. «Oye… esto no está nada mal.»",
          C: "Yolanda abre el libro al azar y lee un párrafo en voz alta. La cola, hipnotizada, escucha. «Oye… esto está muy bien. Demasiado bien para un viernes.»",
        },
        options: [
          {
            id: "prestar",
            say: { A: "Te lo presto. Me lo das otra noche.", B: "Te lo presto. Me lo devuelves otra noche.", C: "Te lo presto; me lo devuelves otra noche, sin prisa." },
            reply: { A: "Yolanda lo guarda. «Otra noche, entonces. Hoy, pasa.» Abre la cuerda.", B: "Yolanda lo guarda en la chaqueta. «Otra noche, entonces. Hoy pasas.» Abre la cuerda.", C: "Yolanda lo guarda bajo la lista. «Otra noche me lo cobras. Hoy pasas.» Levanta la cuerda." },
            mood: "love", end: "libro-dentro",
          },
          {
            id: "club",
            say: { A: "Lee tú. Yo espero fuera.", B: "Sigue leyendo. Yo espero aquí fuera, escuchando.", C: "Sigue leyendo. Yo me quedo aquí fuera, de público." },
            reply: { A: "Yolanda lee a la cola. Tus amigos salen a escuchar. Nadie entra, nadie se queja.", B: "Yolanda lee a la cola entera. Tus amigos salen a escuchar. Nadie entra y nadie protesta.", C: "Yolanda lee a la cola como una maestra. Tus amigos salen a escuchar. Nadie entra y, por una vez, nadie se queja." },
            mood: "smile", end: "libro-club",
          },
          {
            id: "final",
            say: { A: "Si me dejas pasar, te digo el final.", B: "Te cuento el final si me dejas pasar.", C: "Te revelo el final a cambio de la entrada." },
            reply: { A: "Yolanda cierra el libro. «No me lo cuentes. Pasa, pero calla.»", B: "Yolanda cierra el libro de golpe. «Ni se te ocurra. Pasa, pero cállate.»", C: "Yolanda cierra el libro con violencia. «Ni una palabra del final. Pasa, y en silencio.»" },
            mood: "surprised", end: "libro-dentro",
          },
        ],
      },
      "corazon-inicio": {
        who: "yolanda", mood: "smitten",
        line: {
          A: "En la puerta de La Fábrica, la portera ve tu corazón y se queda quieta. Sonríe. Te da un beso en la mejilla. «No sé por qué hice eso. ¿Nombre?»",
          B: "En la puerta de La Fábrica, la portera levanta la vista de la lista, ve tu corazón y se queda inmóvil. Sonríe, se inclina y te da un beso en la mejilla. «No sé por qué acabo de hacer eso. ¿Nombre?»",
          C: "En la puerta de La Fábrica, la portera ve tu corazón y la lista se le olvida. Sonríe como no sonríe en el trabajo, se inclina y te da un beso en la mejilla. «No tengo ni idea de por qué he hecho eso. ¿Nombre?»",
        },
        options: [
          {
            id: "nombre",
            say: { A: "Me llamo… ¿Y tú?", B: "Yo me llamo… ¿Y tú cómo te llamas?", C: "Mi nombre no importa. ¿El tuyo?" },
            reply: { A: "«Yolanda. Y no estás en la lista. Pero da igual.»", B: "«Yolanda. No estás en la lista. Y hoy, sinceramente, me da igual.»", C: "«Yolanda. No estás en la lista. Y esta noche la lista me importa muy poco.»" },
            mood: "love", next: "corazon-salsa",
          },
          {
            id: "beso",
            say: { A: "Otro beso, por favor.", B: "¿Me das otro beso?", C: "¿Repetimos ese beso?" },
            reply: { A: "Yolanda se ríe y te da otro. La cola aplaude.", B: "Yolanda se ríe y te da otro beso. La cola entera aplaude.", C: "Yolanda se ríe y repite el beso. La cola aplaude como en una boda." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "bailar",
            say: { A: "¿Bailas conmigo aquí?", B: "¿Bailas conmigo, aquí mismo?", C: "¿Me concedes un baile, aquí, en la puerta?" },
            reply: { A: "Yolanda mira la cola. «Hace años que no bailo…»", B: "Yolanda mira la cola, luego a ti. «Hace años que no bailo en horario de trabajo…»", C: "Yolanda mira la cola, la lista y después a ti. «Hace años que no bailo en mi turno…»" },
            mood: "love", next: "corazon-salsa",
          },
        ],
      },
      "corazon-salsa": {
        who: "yolanda", mood: "love",
        line: {
          A: "Yolanda deja la lista. Dentro suena salsa. «Antes bailaba en competiciones. ¿Sabes bailar?»",
          B: "Yolanda deja la lista sobre la cuerda. Dentro empieza una salsa. «Fui campeona de salsa, hace tiempo. ¿Tú sabes bailar?»",
          C: "Yolanda abandona la lista sobre la cuerda. Dentro arranca una salsa. «Campeona regional, 2015. ¿Sabes bailar o solo sabes mirar?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Un poco. Enséñame.", B: "Un poco. Pero enséñame tú.", C: "Lo justo. Enséñame el resto." },
            reply: { A: "Yolanda te toma la mano. Bailan en la puerta. La cola aplaude.", B: "Yolanda te toma de la mano y bailan en la puerta. La cola aplaude cada giro.", C: "Yolanda te toma de la mano y bailan en la puerta. La cola aplaude cada giro como un jurado." },
            mood: "love", end: "corazon-baile",
          },
          {
            id: "no",
            say: { A: "No sé bailar. Pero tú sí.", B: "No sé bailar. Pero me encanta verte.", C: "No sé bailar. Pero verte bailar ya vale la noche." },
            reply: { A: "Yolanda baila sola un momento. Luego te besa. «Pasa. Aprende dentro.»", B: "Yolanda baila sola unos segundos, radiante. Luego te besa. «Pasa. Dentro se aprende.»", C: "Yolanda baila sola unos pasos, feliz. Luego te besa. «Pasa. La pista enseña mejor que yo.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "amigos",
            say: { A: "Mis amigos bailan mejor. ¿Los llamo?", B: "Mis amigos bailan mejor que yo. ¿Los llamo?", C: "Mis amigos bailan mejor que yo. ¿Los invoco?" },
            reply: { A: "Leire, Óscar y Mavi salen. Bailan todos con Yolanda en la puerta.", B: "Leire, Óscar y Mavi salen a la puerta. Bailan todos con Yolanda, en plena acera.", C: "Leire, Óscar y Mavi salen y la puerta se convierte en pista. Yolanda baila con todos." },
            mood: "love", end: "corazon-baile",
          },
        ],
      },
    },
    ends: {
      dentro: { text: { A: "Entras a La Fábrica. Tus amigos te abrazan y bailan contigo.", B: "Entras en La Fábrica. Leire, Óscar y Mavi te arrastran a la pista y bailan contigo hasta tarde.", C: "Cruzas la puerta de La Fábrica y la música te engulle. Tus amigos te reciben como a un héroe de guerra." }, change: "baila", recap: "Entraste en La Fábrica y bailaste con tus amigos." },
      acera: { text: { A: "Todos bailan en la acera. Yolanda también mueve un poco los pies.", B: "La fiesta sale a la acera. Al final, hasta Yolanda mueve los pies al ritmo del bajo.", C: "La acera se convierte en pista. Yolanda finge vigilar, pero sus pies la delatan." }, change: "baila", recap: "Bailaste con tus amigos en la acera de La Fábrica." },
      fuera: { text: { A: "Te quedas fuera. La música sigue dentro.", B: "Te quedas fuera. A través de la pared, el bajo sigue sonando.", C: "Te quedas fuera, con el bajo latiendo a través de los ladrillos como un corazón ajeno." }, change: "sigue", recap: "Te quedaste fuera de La Fábrica." },
      policia: { text: { A: "Llega la policía. Explicas todo. Esta noche no bailas.", B: "Llega la policía. Pasas un buen rato explicando el malentendido. Adiós a la fiesta.", C: "Una patrulla se detiene en la puerta. Tu noche de baile se convierte en una larga conversación." }, change: "policia", recap: "Tu noche en La Fábrica terminó con la policía." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Yolanda guarda el suyo. Esta noche no bailas.", B: "Llega la policía y te quita el cuchillo. Yolanda guarda el suyo en la bota y vuelve a la lista. Adiós a la fiesta.", C: "Llega una patrulla y se lleva tu cuchillo. Yolanda devuelve el suyo a la bota y retoma la lista como si nada. Tu noche termina ahí." }, change: "policia", recap: "Un duelo de cuchillos en la puerta de La Fábrica terminó con la policía." },
      "cuchillo-trasera": { text: { A: "Entras por la puerta trasera. Tus amigos te abrazan. Yolanda tiene tu cuchillo.", B: "Entras por la puerta trasera y tus amigos te abrazan en la pista. Tu cuchillo pasa la noche con Yolanda.", C: "Entras por la puerta trasera y tus amigos te reciben en la pista. Tu cuchillo pasa la noche en custodia de Yolanda." }, change: "baila", recap: "Yolanda te dejó entrar por la puerta trasera después del duelo de cuchillos." },
      "cuchillo-numero": { text: { A: "Te quedas fuera con el número de Yolanda. Otra noche, sin cuchillos.", B: "Te quedas fuera, pero con el número de Yolanda. Otra noche, sin cuchillos, entras.", C: "Te quedas fuera, con el número de Yolanda en el bolsillo y una promesa: otra noche, sin cuchillos." }, change: "sigue", recap: "Te ganaste el respeto de Yolanda, pero no la entrada." },
      "pistola-policia": { text: { A: "La policía te lleva. Tus amigos miran desde la puerta. Yolanda vuelve a la lista.", B: "La policía te lleva. Leire, Óscar y Mavi miran desde la puerta, mudos. Yolanda vuelve a su lista.", C: "La policía te lleva. Tus amigos observan desde la puerta sin saber qué decir. Yolanda retoma la lista, como cada viernes." }, change: "policia", recap: "La pistola en la puerta de La Fábrica terminó con la policía." },
      "pistola-huida": { text: { A: "Huyes por el callejón. La fiesta sigue sin ti. Tus amigos no lo entienden.", B: "Huyes por el callejón de los contenedores. La fiesta sigue sin ti y tus amigos no entienden nada.", C: "Huyes entre los contenedores. La fiesta sigue sin ti y tus amigos se quedan con una pregunta que nadie responderá." }, change: "huye", recap: "Huiste de La Fábrica con la pistola y sin tus amigos." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina a trescientas personas en la calle. La Fábrica está vacía.", B: "Un helicóptero ilumina a trescientas personas en la calle. La Fábrica, vacía, sigue sonando sola.", C: "Un helicóptero barre con su foco a trescientas personas en la calle. Dentro, La Fábrica vacía sigue tocando para nadie." }, change: "helicoptero", recap: "La granada vació La Fábrica y trajo un helicóptero." },
      "granada-fiesta": { text: { A: "La fiesta sigue en la calle. Trescientas personas bailan. Yolanda también.", B: "La fiesta sigue en la calle con un altavoz. Trescientas personas bailan, y Yolanda, al final, también.", C: "La fiesta continúa en la calle con un altavoz portátil. Trescientas personas bailan y Yolanda, sin lista, se une." }, change: "baila", recap: "La granada sacó La Fábrica entera a la calle, y la fiesta siguió." },
      "gas-fuera": { text: { A: "Te quedas fuera. Yolanda tiene tu gas. La música sigue dentro.", B: "Te quedas fuera, sin gas y sin fiesta. Yolanda lo guarda en una caja con otros diez.", C: "Te quedas fuera, sin gas y sin fiesta. Yolanda lo guarda en una caja llena de botes confiscados." }, change: "sigue", recap: "Yolanda te quitó el gas en la puerta de La Fábrica." },
      "gas-dentro": { text: { A: "Entras en La Fábrica con el gas en el bolsillo. Tus amigos bailan contigo.", B: "Entras en La Fábrica con el gas bien guardado. Leire, Óscar y Mavi te arrastran a la pista.", C: "Entras en La Fábrica con el gas en el bolsillo y la lección aprendida. Tus amigos te arrastran a la pista." }, change: "baila", recap: "Tu prudencia convenció a Yolanda y entraste en La Fábrica." },
      "lapiz-dentro": { text: { A: "Entras en La Fábrica. Yolanda guarda tu dibujo.", B: "Entras en La Fábrica. Yolanda guarda tu retrato en la chaqueta y, cuando nadie mira, lo vuelve a mirar.", C: "Entras en La Fábrica. Yolanda guarda tu retrato y, cada vez que la cola se calma, lo mira otra vez." }, change: "baila", recap: "Un retrato a lápiz te abrió la puerta de La Fábrica." },
      "lapiz-acera": { text: { A: "Bailan en la acera con los dibujos en la mano. Yolanda sonríe.", B: "Bailan en la acera con las caricaturas en la mano. Yolanda sonríe desde la puerta.", C: "Bailan en la acera, cada uno con su caricatura. Yolanda sonríe desde la puerta, con la suya bien guardada." }, change: "sonrie", recap: "Dibujaste a tus amigos y bailaron en la acera de La Fábrica." },
      "libro-dentro": { text: { A: "Entras en La Fábrica. Yolanda lee tu libro en la puerta.", B: "Entras en La Fábrica. Yolanda se queda leyendo tu libro entre cliente y cliente.", C: "Entras en La Fábrica. Yolanda se queda leyendo tu libro en la puerta, y la cola avanza más lenta que nunca." }, change: "baila", recap: "Un libro te abrió la puerta de La Fábrica." },
      "libro-club": { text: { A: "Yolanda lee a la cola. Tus amigos escuchan. Nadie baila, pero nadie se va.", B: "Yolanda lee a la cola entera. Tus amigos escuchan desde la puerta. Nadie baila, pero nadie se va.", C: "Yolanda lee a la cola como una maestra de noche. Tus amigos escuchan desde la puerta. Nadie baila, pero nadie se mueve." }, change: "se-sienta", recap: "Convertiste la cola de La Fábrica en un club de lectura." },
      "corazon-beso": { text: { A: "Yolanda te besa otra vez. Entras en La Fábrica con los ojos brillando.", B: "Yolanda te besa una vez más y abre la cuerda. Entras en La Fábrica flotando.", C: "Yolanda te besa de nuevo y levanta la cuerda. Entras en La Fábrica sin tocar el suelo." }, change: "beso", recap: "Yolanda te besó en la puerta de La Fábrica." },
      "corazon-baile": { text: { A: "Bailan salsa en la puerta. Yolanda se ríe. Entran todos juntos.", B: "Bailan salsa en la puerta hasta que termina la canción. Yolanda se ríe y entran todos juntos.", C: "Bailan salsa en la puerta hasta el último compás. Yolanda, riendo, abandona su puesto y entra con todos." }, change: "baila", recap: "Bailaste salsa con Yolanda en la puerta de La Fábrica." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Te asustas fácil de noche?", B: "¿Alguna vez un malentendido te hizo sacar lo peor de ti?", C: "¿Qué distingue defenderse de atacar cuando el miedo manda?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si alguien tiene miedo de ti?", B: "¿Cómo reaccionarías si alguien te ofreciera todo lo que tiene por miedo?", C: "¿Qué se rompe en una persona cuando le apuntan con un arma, aunque nadie dispare?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Te gustan los globos en las fiestas?", B: "¿Qué fue lo más absurdo que arruinó una sorpresa que preparaste?", C: "¿Por qué una celebración y una catástrofe a veces se parecen tanto desde fuera?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Desconfías de la gente que habla en voz baja?", B: "¿Cuándo fue la última vez que desconfiaste de alguien sin razón?", C: "¿Qué le hace la desconfianza a una amistad que apenas empieza?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes bien sin faltas?", B: "¿Alguna vez ayudaste a alguien a escribir algo importante?", C: "¿Qué importancia tiene la ortografía en una declaración de amor?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Tienes un poema favorito?", B: "¿Qué poema o canción leerías en una pedida de mano?", C: "¿Qué libro regalarías a una pareja que empieza?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Ayudas a tus amigos con sus sorpresas?", B: "¿Cuándo fuiste cómplice de una sorpresa para alguien?", C: "¿Qué revela una pedida de mano sobre los amigos que la preparan?" } },
    },
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
      "cuchillo-inicio": {
        who: "ximena", mood: "scared",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con el cuchillo. La chica grita. El chico saca un cúter. «¡Atrás! ¿Qué haces con ese cuchillo?»",
          B: "Detrás del food truck, una chica y un chico alto susurran. Te ven aparecer con el cuchillo. Ella grita y él saca un cúter de la caja. «¡Atrás! ¿Qué haces con ese cuchillo? ¡No te acerques así!»",
          C: "Detrás del food truck, dos sombras cuchichean. Te ven surgir con el cuchillo en la mano. Ella grita y él saca un cúter de una caja. «¡Atrás! ¿Estás loco? ¿Qué haces con eso? ¡Ni un paso más!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilos. Lo bajo. Oí su plan.", B: "Tranquilos, lo bajo. Es que oí su plan y me asusté.", C: "Calma, lo bajo. Oí su plan de medianoche y me puse en lo peor." },
            reply: { A: "Tadeo no baja el cúter. «¿Qué plan? ¿Qué oíste?»", B: "Tadeo no baja el cúter. «¿Qué plan? ¿Qué es lo que has oído exactamente?»", C: "Tadeo mantiene el cúter en alto. «¿Qué plan? ¿Qué has oído, palabra por palabra?»" },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "amenazar",
            say: { A: "¡Quietos! Sé lo que van a hacer a medianoche.", B: "¡Quietos los dos! Sé lo que van a hacer a medianoche.", C: "¡Quietos! Sé perfectamente qué planean para medianoche." },
            reply: { A: "Tadeo da un paso con el cúter. Ximena grita: «¡Tadeo, no!»", B: "Tadeo avanza un paso con el cúter. Ximena grita: «¡Tadeo, no! ¡Es un malentendido!»", C: "Tadeo avanza con el cúter por delante. Ximena grita: «¡Tadeo, no! ¡Esto es un malentendido gigante!»" },
            mood: "angry", next: "cuchillo-duelo",
          },
          {
            id: "huir",
            say: { A: "Me voy. Perdón.", B: "Me voy, perdón.", C: "Me retiro. Perdón." },
            reply: { A: "Corres. Detrás, Ximena llama a la policía.", B: "Sales corriendo. A tu espalda, Ximena, temblando, llama a la policía.", C: "Sales corriendo. A tu espalda, Ximena marca el número de la policía con manos temblorosas." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "tadeo", mood: "angry",
        line: {
          A: "Tu cuchillo y el cúter de Tadeo, a un metro. Nadie respira. Ximena, en medio: «¡Es una pedida de mano! ¡El cúter es para las cintas!»",
          B: "Tu cuchillo y el cúter de Tadeo se miran a un metro. Nadie respira. Ximena se pone en medio: «¡Es una pedida de mano! ¡El cúter es para cortar las cintas de los globos!»",
          C: "Tu cuchillo y el cúter de Tadeo, frente a frente, a un metro. Nadie respira. Ximena se interpone: «¡Es una pedida de mano! ¡El cúter es para las cintas de los globos, por favor!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "¿Una pedida? Guardo el cuchillo. Perdón.", B: "¿Una pedida de mano? Guardo el cuchillo. Perdón.", C: "¿Una pedida de mano? Guardo el cuchillo ahora mismo. Perdón." },
            reply: { A: "Tadeo baja el cúter despacio. «Perdón tú, perdón yo. Qué susto.»", B: "Tadeo baja el cúter poco a poco. «Perdón tú, perdón yo. Casi me muero.»", C: "Tadeo baja el cúter milímetro a milímetro. «Perdón tú, perdón yo. He envejecido diez años.»" },
            mood: "worried", next: "cuchillo-cintas",
          },
          {
            id: "probar",
            say: { A: "Prueben eso. ¿Dónde está el anillo?", B: "Demuéstrenlo. ¿Dónde está el anillo?", C: "Pruébenlo. ¿Dónde está ese anillo?" },
            reply: { A: "Ximena abre la caja: anillo, globos, un cartel. Tadeo baja el cúter.", B: "Ximena abre la caja con manos temblorosas: un anillo, globos y un cartel. Tadeo baja el cúter.", C: "Ximena abre la caja: anillo, globos y un cartel con faltas. Tadeo baja el cúter, agotado." },
            mood: "surprised", next: "cuchillo-cintas",
          },
          {
            id: "pelea",
            say: { A: "Un paso adelante.", B: "Doy un paso hacia Tadeo.", C: "Avanzo hacia Tadeo." },
            reply: { A: "Tadeo tropieza con una caja. Salen globos. Ximena ya llama a la policía.", B: "Tadeo tropieza con una caja y la noche se llena de globos. Ximena ya está llamando a la policía.", C: "Tadeo tropieza con una caja y los globos con forma de corazón flotan entre los dos. Ximena ya llama a la policía." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-cintas": {
        who: "tadeo", mood: "smile",
        line: {
          A: "Tadeo se ríe, nervioso. «Bueno. Tenemos dos cuchillos y cien cintas que cortar. ¿Ayudas?»",
          B: "Tadeo se ríe, todavía pálido. «Bueno. Ahora tenemos dos cuchillos y cien cintas por cortar. ¿Nos ayudas o nos asustas otra vez?»",
          C: "Tadeo suelta una risa de puro alivio. «Visto así, tenemos dos cuchillos y cien cintas que cortar. ¿Te apuntas o prefieres volver a aterrorizarnos?»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Ayudo. Yo corto, tú atas.", B: "Ayudo. Yo corto las cintas y tú atas los globos.", C: "Me apunto. Yo corto cintas y tú atas globos." },
            reply: { A: "Cortan cintas juntos. A las doce, todo está listo. Ximena te abraza.", B: "Cortan cintas a toda velocidad. A las doce en punto, todo está listo. Ximena te abraza.", C: "Cortan cintas a dos cuchillos. A las doce, el callejón brilla. Ximena te abraza, agradecida." },
            mood: "love", end: "cuchillo-ayuda",
          },
          {
            id: "disculpa",
            say: { A: "Perdón por el susto. Me voy. ¡Suerte!", B: "Perdón por el susto. Los dejo tranquilos. ¡Suerte!", C: "Perdón por el susto. Los dejo en paz. ¡Mucha suerte!" },
            reply: { A: "Tadeo te da la mano. «Suerte tú. Y guarda eso.»", B: "Tadeo te estrecha la mano. «Suerte a ti. Y ese cuchillo, guardado.»", C: "Tadeo te estrecha la mano. «Suerte a ti. Y el cuchillo, en el bolsillo, por favor.»" },
            mood: "smile", end: "cuchillo-ayuda",
          },
          {
            id: "broma",
            say: { A: "¿Repetimos el duelo? Para la foto.", B: "¿Repetimos el duelo para la foto?", C: "¿Recreamos el duelo para la foto del álbum?" },
            reply: { A: "Ximena no se ríe. «Ni en broma.» Un policía pasa y ve los cuchillos.", B: "Ximena no se ríe. «Ni en broma.» Justo entonces pasa un policía y ve los dos cuchillos.", C: "Ximena no sonríe. «Ni en broma.» Justo entonces un policía dobla la esquina y ve los dos cuchillos." },
            mood: "worried", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "ximena", mood: "terror",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con la pistola. Los dos levantan las manos. «¡No! ¡Por favor! ¡Toma lo que quieras!»",
          B: "Detrás del food truck, una chica y un chico alto susurran. Ven tu pistola y levantan las manos a la vez. «¡No, por favor! ¡Toma lo que quieras! ¡No queremos problemas!»",
          C: "Detrás del food truck, dos sombras cuchichean. Ven tu pistola y levantan las manos como un solo cuerpo. «¡No, por favor! ¡Llévate lo que quieras, pero no nos hagas nada!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquilos. La guardo. ¿Qué hacen aquí?", B: "Tranquilos, la guardo. ¿Qué hacen aquí a estas horas?", C: "Calma, la guardo. ¿Qué hacen aquí, escondidos?" },
            reply: { A: "Ximena no baja las manos. «Una… una pedida de mano. Para un amigo.»", B: "Ximena no baja las manos. «Una pedida de mano. Para un amigo. Hay un anillo en la caja.»", C: "Ximena mantiene las manos arriba. «Una pedida de mano. Para un amigo. En la caja hay un anillo, no dinero.»" },
            mood: "scared", next: "pistola-anillo",
          },
          {
            id: "exigir",
            say: { A: "¿Qué hay en la camioneta?", B: "¿Qué llevan en la camioneta?", C: "¿Qué esconden en la camioneta?" },
            reply: { A: "Tadeo tiembla. «Globos. Luces. Un anillo. ¡Te lo damos todo!»", B: "Tadeo tiembla. «Globos, luces y un anillo. ¡Te damos el anillo, pero no nos hagas nada!»", C: "Tadeo tiembla. «Globos, luces y un anillo. ¡Llévate el anillo si quieres, pero deja a Ximena!»" },
            mood: "scared", next: "pistola-anillo",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me equivoqué. Me voy.", B: "Perdón, me equivoqué de sitio. Me voy.", C: "Perdón, me he equivocado. Me voy." },
            reply: { A: "Te alejas. Detrás, Ximena llora y llama a la policía.", B: "Te alejas. A tu espalda, Ximena llora y llama a la policía.", C: "Te alejas. A tu espalda, Ximena, llorando, describe tu chaqueta a la policía." },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "pistola-anillo": {
        who: "tadeo", mood: "scared",
        line: {
          A: "Tadeo te da la caja con las manos temblando. «El anillo. Tómalo. Pero no le hagas nada a Ximena.»",
          B: "Tadeo te tiende la caja con las manos temblando. «Ahí está el anillo. Tómalo. Pero a Ximena no la toques.»",
          C: "Tadeo te entrega la caja con manos que no obedecen. «El anillo está dentro. Llévatelo. Pero a Ximena ni la mires.»",
        },
        options: [
          {
            id: "devolver",
            say: { A: "No quiero el anillo. Perdón. Me voy.", B: "No quiero el anillo. Perdónenme. Me voy.", C: "No quiero el anillo. Les pido perdón. Me voy." },
            reply: { A: "Dejas la caja. Corres. Ximena y Tadeo se abrazan, temblando.", B: "Dejas la caja en el suelo y te vas corriendo. Ximena y Tadeo se abrazan, temblando, entre los globos.", C: "Dejas la caja y huyes. Ximena y Tadeo se abrazan entre los globos, incapaces de hablar." },
            mood: "sad", end: "pistola-huida",
          },
          {
            id: "suelo",
            say: { A: "Dejo la pistola en el suelo. Perdón.", B: "Dejo la pistola en el suelo. Perdónenme.", C: "Pongo la pistola en el suelo. Perdónenme, por favor." },
            reply: { A: "Tadeo la aparta con el pie. Ximena ya llamó. Se oye una sirena.", B: "Tadeo la aleja con el pie. Ximena ya ha llamado: suena una sirena.", C: "Tadeo la aparta con el pie. Ximena ya había llamado: una sirena se acerca por el callejón." },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "suerte",
            say: { A: "Suerte con la pedida. Nunca estuve aquí.", B: "Suerte con la pedida. Yo nunca estuve aquí.", C: "Suerte con la pedida. Yo jamás estuve aquí." },
            reply: { A: "Tadeo asiente. Ximena no deja de llorar. Te vas.", B: "Tadeo asiente sin palabras. Ximena no deja de llorar. Desapareces.", C: "Tadeo asiente, mudo. Ximena sigue llorando. Te esfumas por el callejón." },
            mood: "sad", end: "pistola-huida",
          },
        ],
      },
      "granada-inicio": {
        who: "ximena", mood: "terror",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con la granada. Gritan y corren. Chocan con las cajas. Salen cien globos de corazón.",
          B: "Detrás del food truck, una chica y un chico alto susurran. Ven tu granada, gritan y salen corriendo. Chocan con las cajas y cien globos con forma de corazón llenan el callejón.",
          C: "Detrás del food truck, dos sombras cuchichean. Ven la granada, gritan a dúo y huyen. En la carrera chocan con las cajas y el callejón se llena de cien globos con forma de corazón.",
        },
        options: [
          {
            id: "gritar",
            say: { A: "¡Es de juguete! ¡Vuelvan!", B: "¡Es de juguete! ¡Vuelvan, por favor!", C: "¡Es una réplica! ¡Vuelvan!" },
            reply: { A: "Ximena se asoma detrás de la camioneta. «¿De juguete? ¿Seguro?»", B: "Ximena asoma la cabeza detrás de la camioneta. «¿De juguete? ¿Seguro? ¿Segurísimo?»", C: "Ximena asoma medio cuerpo detrás de la camioneta. «¿Una réplica? ¿Lo juras por el anillo?»" },
            mood: "scared", next: "granada-globos",
          },
          {
            id: "globos",
            say: { A: "Recojo los globos. Perdón.", B: "Recojo los globos mientras vuelven. Perdón.", C: "Recojo los globos, como disculpa." },
            reply: { A: "Tadeo vuelve despacio. «¿Qué… qué haces con una granada aquí?»", B: "Tadeo vuelve con pasos cortos. «¿Qué haces con una granada detrás de un food truck?»", C: "Tadeo regresa con cautela. «¿Qué hace alguien con una granada detrás de un food truck a medianoche?»" },
            mood: "worried", next: "granada-globos",
          },
          {
            id: "correr",
            say: { A: "¡Corro también!", B: "¡Yo también corro!", C: "¡Corro con ellos!" },
            reply: { A: "Corren los tres sin saber por qué. Un helicóptero ilumina los globos.", B: "Corren los tres sin saber de qué. Sobre el callejón, un helicóptero ilumina cien globos.", C: "Corren los tres sin motivo. Arriba, un helicóptero clava su foco sobre cien globos de corazón." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "granada-globos": {
        who: "tadeo", mood: "worried",
        line: {
          A: "Faltan cinco minutos para medianoche. Hay globos por todo el callejón. Tadeo mira el reloj. «¡Iván viene! ¿Qué hacemos?»",
          B: "Faltan cinco minutos para la medianoche. Los globos flotan por todo el callejón. Tadeo mira el reloj con pánico. «¡Iván está a punto de llegar! ¿Qué hacemos ahora?»",
          C: "Cinco minutos para medianoche y cien globos sueltos por el callejón. Tadeo mira el reloj como si lo odiara. «¡Iván llega ya! ¿Qué hacemos con este desastre?»",
        },
        options: [
          {
            id: "recoger",
            say: { A: "Yo recojo. Tú enciende las luces.", B: "Yo recojo los globos. Tú enciende las luces.", C: "Yo atrapo globos; tú enciende las luces." },
            reply: { A: "Recogen globos a toda prisa. Llega Iván. Se arrodilla entre los globos. Dicen que sí.", B: "Recogen globos a toda velocidad. Llega Iván, se arrodilla entre los que quedan y su novio dice que sí.", C: "Recogen globos a la carrera. Iván llega, se arrodilla entre los supervivientes y la respuesta es sí." },
            mood: "love", end: "granada-sorpresa",
          },
          {
            id: "dejar",
            say: { A: "Déjenlos. Así es más bonito.", B: "Déjenlos sueltos. Así queda más bonito.", C: "Déjenlos volar. Así queda más bonito." },
            reply: { A: "Iván llega y ve el callejón lleno de globos. Llora antes de preguntar.", B: "Iván llega y encuentra el callejón lleno de globos flotando. Llora antes de hacer la pregunta.", C: "Iván llega y el callejón entero flota en globos. Llora antes de abrir la boca." },
            mood: "love", end: "granada-sorpresa",
          },
          {
            id: "policia",
            say: { A: "Viene la policía. Alguien llamó.", B: "Viene la policía. Alguien llamó por la granada.", C: "Llega la policía. Alguien avisó por la granada." },
            reply: { A: "Una patrulla entra en el callejón. Y un helicóptero. Iván llega en ese momento.", B: "Una patrulla entra en el callejón, seguida por el ruido de un helicóptero. Iván llega justo entonces.", C: "Una patrulla entra en el callejón y un helicóptero ilumina los globos. Iván llega en ese preciso instante." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "ximena", mood: "scared",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con el gas pimienta. La chica saca el suyo. «¡No te acerques! ¡Yo también tengo!»",
          B: "Detrás del food truck, una chica y un chico alto susurran. Ven tu gas pimienta y ella saca el suyo del bolsillo. «¡Ni un paso más! ¡Yo también tengo! ¿Quién eres?»",
          C: "Detrás del food truck, dos sombras cuchichean. Ven tu gas pimienta y ella responde con el suyo. «¡Ni un paso! ¡Yo también llevo! ¿Quién eres y por qué nos espías?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Los oí. «Nadie puede saberlo.» ¿Qué es?", B: "Los oí decir «nadie puede saberlo». ¿Qué es eso?", C: "Los oí: «nadie puede saberlo». ¿Qué es lo que nadie puede saber?" },
            reply: { A: "Ximena baja el gas un poco. «Una sorpresa. ¿Y tú por qué llevas gas?»", B: "Ximena baja el gas un centímetro. «Es una sorpresa. ¿Y tú por qué llevas gas?»", C: "Ximena baja el gas apenas. «Una sorpresa. ¿Y tú? ¿Por qué llevas gas a una conversación ajena?»" },
            mood: "worried", next: "gas-paranoia",
          },
          {
            id: "guardar",
            say: { A: "Lo guardo. Tú también. Hablamos.", B: "Lo guardo. Guarda el tuyo y hablamos.", C: "Lo guardo. Guarda el tuyo y conversamos." },
            reply: { A: "Ximena no lo guarda. Tadeo se ríe. «Tiene miedo de todo. Yo soy Tadeo.»", B: "Ximena no lo guarda. Tadeo se ríe, nervioso. «Desconfía hasta del cartero. Soy Tadeo.»", C: "Ximena no lo guarda. Tadeo suelta una risa. «Desconfía hasta de los globos. Soy Tadeo.»" },
            mood: "neutral", next: "gas-paranoia",
          },
          {
            id: "rociar",
            say: { A: "¡Suelta eso!", B: "¡Suelta eso ahora!", C: "¡Suelta eso ya!" },
            reply: { A: "Los dos aprietan a la vez. Una nube de gas. Todos tosen. Tadeo cae sobre los globos.", B: "Los dos disparan a la vez. Una nube de gas llena el callejón. Todos tosen y Tadeo cae sobre las cajas de globos.", C: "Los dos rocían a la vez. El callejón se llena de gas. Todos tosen y Tadeo se desploma sobre los globos." },
            mood: "pain", end: "gas-nube",
          },
        ],
      },
      "gas-paranoia": {
        who: "ximena", mood: "worried",
        line: {
          A: "Ximena sigue con el gas en la mano. «Es una pedida de mano. Nuestro amigo Iván. ¿Y tú de verdad no eres nadie peligroso?»",
          B: "Ximena mantiene el gas listo. «Es una pedida de mano. Nuestro amigo Iván, a medianoche. ¿Y tú? ¿De verdad no eres nadie peligroso?»",
          C: "Ximena no suelta el gas. «Es una pedida de mano, la de nuestro amigo Iván. ¿Y tú? ¿Seguro que no eres nadie de quien deba preocuparme?»",
        },
        options: [
          {
            id: "vigilar",
            say: { A: "No. Pero puedo vigilar. Con el gas.", B: "No. Pero puedo vigilar la entrada. Con el gas.", C: "No. Pero puedo hacer de vigilante, con el gas, mientras preparan todo." },
            reply: { A: "Tadeo aplaude. «¡Seguridad privada! Ximena, guarda eso.» Ella lo guarda, por fin.", B: "Tadeo aplaude. «¡Tenemos seguridad privada! Ximena, guarda eso de una vez.» Ella lo guarda, por fin.", C: "Tadeo aplaude. «¡Seguridad privada gratis! Ximena, guarda eso de una vez.» Ella obedece, al fin." },
            mood: "smile", end: "gas-vigilancia",
          },
          {
            id: "probar",
            say: { A: "¿Tu gas funciona? El mío no sé.", B: "¿El tuyo funciona? El mío nunca lo probé.", C: "¿El tuyo funciona? El mío es un misterio." },
            reply: { A: "Ximena lo prueba al aire. Mala idea. Todos tosen. Tadeo cae sobre los globos.", B: "Ximena lo prueba contra el aire. Pésima idea: todos tosen y Tadeo cae sobre las cajas de globos.", C: "Ximena lo prueba al aire. Error: el callejón se llena de gas, todos tosen y Tadeo aterriza sobre los globos." },
            mood: "pain", end: "gas-nube",
          },
          {
            id: "irse",
            say: { A: "Bueno. Los dejo. Suerte.", B: "Bueno, los dejo tranquilos. Suerte.", C: "Bien, los dejo en paz. Suerte." },
            reply: { A: "Ximena baja el gas. «Gracias. Y perdón por la desconfianza.» Tadeo te da un globo.", B: "Ximena baja el gas por fin. «Gracias. Y perdón por desconfiar.» Tadeo te regala un globo.", C: "Ximena baja el gas. «Gracias. Perdona la desconfianza, es la hora.» Tadeo te regala un globo de corazón." },
            mood: "smile", end: "gas-vigilancia",
          },
        ],
      },
      "lapiz-inicio": {
        who: "ximena", mood: "surprised",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con el lápiz. «¿Un lápiz? ¡Espera! ¿Sabes escribir bien? Necesitamos ayuda con un cartel.»",
          B: "Detrás del food truck, una chica y un chico alto susurran. Ven tu lápiz y la chica se ilumina. «¿Llevas lápiz? ¡Espera! ¿Escribes sin faltas? Necesitamos ayuda con un cartel urgente.»",
          C: "Detrás del food truck, dos sombras cuchichean. Ven tu lápiz y la chica te agarra del brazo. «¿Un lápiz? ¡Por fin! ¿Tienes buena ortografía? Hay un cartel que es una emergencia.»",
        },
        options: [
          {
            id: "cartel",
            say: { A: "A ver el cartel. ¿Qué dice?", B: "A ver ese cartel. ¿Qué dice?", C: "Veamos ese cartel. ¿Qué pone?" },
            reply: { A: "Ximena lo muestra: «¿Te casas conmijo?». Tadeo se tapa la cara.", B: "Ximena lo despliega: «¿Te casas conmijo?» Tadeo se tapa la cara con las manos.", C: "Ximena lo despliega: «¿Te casas conmijo?» Tadeo se tapa la cara, culpable." },
            mood: "laugh", next: "lapiz-cartel",
          },
          {
            id: "espiar",
            say: { A: "Primero: ¿qué pasa a medianoche?", B: "Antes de nada: ¿qué pasa a medianoche?", C: "Primero díganme: ¿qué ocurre a medianoche?" },
            reply: { A: "Tadeo suspira. «Una pedida de mano. Y un cartel con faltas. Ayuda.»", B: "Tadeo suspira. «Una pedida de mano. Con un cartel lleno de faltas. Ayúdanos.»", C: "Tadeo suspira. «Una pedida de mano. Y un cartel con más faltas que letras. Socorro.»" },
            mood: "smile", next: "lapiz-cartel",
          },
          {
            id: "matricula",
            say: { A: "Apunto la matrícula. Por si acaso.", B: "Apunto la matrícula de la camioneta. Por si acaso.", C: "Anoto la matrícula de la camioneta, por si acaso." },
            reply: { A: "Ximena se ríe. «Apunta también “¿Te casas conmigo?”. Lo necesitamos.»", B: "Ximena se ríe. «Apunta también “¿Te casas conmigo?”, bien escrito. Lo necesitamos.»", C: "Ximena se ríe. «Y ya que apuntas, apunta “¿Te casas conmigo?” sin faltas. Es urgente.»" },
            mood: "smile", next: "lapiz-cartel",
          },
        ],
      },
      "lapiz-cartel": {
        who: "tadeo", mood: "worried",
        line: {
          A: "Tadeo te da el cartel. «Faltan diez minutos. Arréglalo. Y el violinista no sabe dónde estamos.»",
          B: "Tadeo te pasa el cartel y un rotulador seco. «Diez minutos. Arréglalo, por favor. Y el violinista no encuentra el callejón.»",
          C: "Tadeo te entrega el cartel como un paciente grave. «Diez minutos. Sálvalo. Y, por cierto, el violinista está perdido por Los Galpones.»",
        },
        options: [
          {
            id: "corregir",
            say: { A: "Corrijo el cartel. “Conmigo”, con g.", B: "Corrijo el cartel: “conmigo”, con g. Y la letra más grande.", C: "Corrijo el cartel: “conmigo”, con g, y letra grande para que se lea desde la camioneta." },
            reply: { A: "Ximena llora de alivio. Llega Iván. Lee el cartel. Dice que sí.", B: "Ximena llora de alivio. Llega Iván, lee el cartel sin faltas y su novio dice que sí.", C: "Ximena llora de alivio. Iván llega, lee el cartel impecable y la respuesta es sí." },
            mood: "love", end: "lapiz-ortografia",
          },
          {
            id: "mapa",
            say: { A: "Dibujo un mapa para el violinista. Tadeo, mándale la foto.", B: "Dibujo un mapa para el violinista. Tadeo, mándaselo por celular.", C: "Dibujo un mapa del callejón para el violinista. Tadeo, envíale la foto." },
            reply: { A: "Tadeo manda la foto. El violinista llega a las doce y dos. Y el cartel, bueno, se entiende.", B: "Tadeo envía la foto. El violinista llega a las doce y dos minutos. El cartel, con faltas, se entiende igual.", C: "Tadeo envía la foto. El violinista aparece a las doce y dos. El cartel, faltas incluidas, cumple su misión." },
            mood: "smile", end: "lapiz-mapa",
          },
          {
            id: "nuevo",
            say: { A: "Escribo un cartel nuevo. Más bonito.", B: "Escribo un cartel nuevo, más bonito.", C: "Redacto un cartel nuevo, con más estilo." },
            reply: { A: "Escribes: «¿Te casas conmigo? Firmado: Iván y sus amigos desastrosos.» Ximena te abraza.", B: "Escribes: «¿Te casas conmigo? Firmado: Iván y sus amigos desastrosos.» Ximena te abraza, feliz.", C: "Escribes: «¿Te casas conmigo? Firmado: Iván y su comité de desastres.» Ximena te abraza entre risas." },
            mood: "love", end: "lapiz-ortografia",
          },
        ],
      },
      "libro-inicio": {
        who: "ximena", mood: "surprised",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con el libro. «¿Un libro? ¿Tiene poemas? Necesitamos un poema para medianoche.»",
          B: "Detrás del food truck, una chica y un chico alto susurran. Ven tu libro y la chica se acerca. «¿Un libro? ¿Tiene poemas? Nuestro amigo necesita un poema para medianoche y no tenemos ninguno.»",
          C: "Detrás del food truck, dos sombras cuchichean. Ven tu libro y la chica se abalanza. «¿Un libro? ¿Hay poemas dentro? Necesitamos uno para medianoche y solo tenemos globos.»",
        },
        options: [
          {
            id: "buscar",
            say: { A: "A ver… Sí, hay un poema de amor. ¿Para qué?", B: "Déjame ver… Sí, hay un poema de amor. ¿Para qué lo quieren?", C: "Veamos… Sí, hay un poema de amor. ¿Para qué lo necesitan?" },
            reply: { A: "Ximena susurra: «Una pedida de mano. Iván no sabe qué decir.»", B: "Ximena baja la voz: «Una pedida de mano. Iván se queda sin palabras cuando está nervioso.»", C: "Ximena susurra: «Una pedida de mano. Iván, con los nervios, pierde el idioma.»" },
            mood: "smile", next: "libro-poema",
          },
          {
            id: "espiar",
            say: { A: "¿Qué pasa a medianoche? Lo oí todo.", B: "¿Qué pasa a medianoche? Lo escuché todo.", C: "¿Qué ocurre a medianoche? Lo he oído todo." },
            reply: { A: "Tadeo se ríe. «Una pedida de mano. Y nos falta un poema. ¿Nos prestas el libro?»", B: "Tadeo se ríe. «Una pedida de mano. Nos falta el poema. ¿Nos prestas el libro?»", C: "Tadeo se ríe. «Una pedida de mano sin poema. ¿Nos prestas el libro y nos salvas?»" },
            mood: "smile", next: "libro-poema",
          },
          {
            id: "excusa",
            say: { A: "Solo leía aquí. Hay luz.", B: "Solo leía aquí, que hay luz.", C: "Solo leía aquí, bajo la luz del food truck." },
            reply: { A: "Ximena se ríe. «¿Detrás de un food truck? Bueno. ¿Tiene poemas?»", B: "Ximena se ríe. «¿Detrás de un food truck, a medianoche? Bueno. ¿Tiene poemas?»", C: "Ximena se ríe. «¿Lectura nocturna detrás de un food truck? Bueno. ¿Hay poemas?»" },
            mood: "smile", next: "libro-poema",
          },
        ],
      },
      "libro-poema": {
        who: "tadeo", mood: "smile",
        line: {
          A: "Tadeo lee el poema en voz baja. «Es perfecto. ¿Nos lo prestas? Iván llega en cinco minutos.»",
          B: "Tadeo lee el poema en voz baja, moviendo los labios. «Es perfecto. ¿Nos lo prestas? Iván llega en cinco minutos.»",
          C: "Tadeo lee el poema en voz baja y se le humedecen los ojos. «Es perfecto. ¿Nos lo prestas? Iván llega en cinco minutos.»",
        },
        options: [
          {
            id: "prestar",
            say: { A: "Tomen. Que lo lea Iván.", B: "Tomen el libro. Que lo lea Iván.", C: "Tomen el libro. Que Iván lo lea." },
            reply: { A: "Iván llega, lee el poema temblando. Su novio dice que sí antes del final.", B: "Iván llega, lee el poema con voz temblorosa y su novio dice que sí antes de la última línea.", C: "Iván llega, lee el poema temblando y recibe el sí antes del último verso." },
            mood: "love", end: "libro-poema-fin",
          },
          {
            id: "regalar",
            say: { A: "Se lo regalo. Es para la boda.", B: "Se lo regalo. Para la boda.", C: "Es un regalo. Para la boda." },
            reply: { A: "Ximena te abraza. «¡El primer regalo de boda!» Tadeo escribe una dedicatoria.", B: "Ximena te abraza. «¡El primer regalo de boda!» Tadeo escribe una dedicatoria en la primera página.", C: "Ximena te abraza. «¡Primer regalo de boda!» Tadeo escribe una dedicatoria torcida en la primera página." },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "leer",
            say: { A: "Lo leo yo. Desde la sombra.", B: "Lo leo yo, desde la sombra, mientras Iván se arrodilla.", C: "Lo leo yo, escondido, mientras Iván se arrodilla." },
            reply: { A: "Lees desde la sombra. Iván se arrodilla. Todos lloran, tú también.", B: "Lees desde la oscuridad con voz de locutor. Iván se arrodilla. Lloran todos, tú incluido.", C: "Lees desde la sombra, como una voz en off. Iván se arrodilla. Llora todo el mundo, tú el primero." },
            mood: "love", end: "libro-poema-fin",
          },
        ],
      },
      "corazon-inicio": {
        who: "ximena", mood: "love",
        line: {
          A: "Detrás del food truck, dos personas hablan en voz baja. Te ven con el corazón. La chica sonríe y te abraza. «¡Un cómplice! ¡Justo lo que necesitamos!»",
          B: "Detrás del food truck, una chica y un chico alto susurran. Ven tu corazón y la chica te abraza sin presentarse. «¡Un cómplice! ¡Es justo lo que necesitábamos! Soy Ximena.»",
          C: "Detrás del food truck, dos sombras cuchichean. Ven tu corazón y la chica te abraza como a un viejo amigo. «¡Un cómplice! ¡El universo nos escucha! Soy Ximena.»",
        },
        options: [
          {
            id: "que",
            say: { A: "¿Cómplice de qué?", B: "¿Cómplice de qué, exactamente?", C: "¿Cómplice de qué, si puede saberse?" },
            reply: { A: "«Una pedida de mano. Iván, nuestro amigo. A medianoche. Y somos un desastre.»", B: "«De una pedida de mano. Nuestro amigo Iván, a medianoche. Y nosotros somos un desastre con globos.»", C: "«De una pedida de mano. Iván, a medianoche. Y nosotros, un desastre organizado con globos.»" },
            mood: "love", next: "corazon-tadeo",
          },
          {
            id: "ayudo",
            say: { A: "Cuenten conmigo. ¿Qué hago?", B: "Cuenten conmigo. ¿Qué necesitan?", C: "Cuenten conmigo. ¿Por dónde empiezo?" },
            reply: { A: "Tadeo te pasa una bolsa de globos. «Infla. Los rojos primero.»", B: "Tadeo te pasa una bolsa de globos. «Infla. Los rojos primero, los corazones después.»", C: "Tadeo te entrega una bolsa de globos. «Infla. Rojos primero, corazones después, pulmones aparte.»" },
            mood: "love", next: "corazon-tadeo",
          },
          {
            id: "abrazo",
            say: { A: "Otro abrazo. Ustedes son muy buenos amigos.", B: "Otro abrazo. Se nota que son muy buenos amigos.", C: "Otro abrazo. Se nota que son amigos de los buenos." },
            reply: { A: "Ximena te abraza otra vez. Tadeo se suma. Tres personas abrazadas detrás de un food truck.", B: "Ximena te abraza de nuevo y Tadeo se suma. Tres desconocidos abrazados detrás de un food truck.", C: "Ximena repite el abrazo y Tadeo se une. Tres personas abrazadas detrás de un food truck, a medianoche." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-tadeo": {
        who: "tadeo", mood: "smile",
        line: {
          A: "Tadeo infla globos. Ximena lo mira mucho. Te dice al oído: «Me gusta Tadeo. Es un secreto.»",
          B: "Tadeo infla globos con la cara roja. Ximena lo mira más de lo necesario. Te susurra: «Me gusta Tadeo. Secreto absoluto.»",
          C: "Tadeo infla globos, colorado. Ximena no le quita los ojos de encima y te confiesa en voz baja: «Me gusta Tadeo. Nadie lo sabe. Ni él.»",
        },
        options: [
          {
            id: "decirle",
            say: { A: "Tadeo, Ximena quiere decirte algo.", B: "Tadeo, creo que Ximena quiere decirte algo.", C: "Tadeo, Ximena tiene algo que decirte." },
            reply: { A: "Ximena se pone roja. Tadeo suelta el globo. Se besan entre los globos.", B: "Ximena se pone roja como los globos. Tadeo suelta el que inflaba. Se besan entre corazones de helio.", C: "Ximena enrojece. Tadeo suelta el globo, que sale volando. Se besan entre corazones flotantes." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "callar",
            say: { A: "Tranquila. Hoy es la noche de Iván. Mañana, la tuya.", B: "Tranquila. Hoy es la noche de Iván. Mañana puede ser la tuya.", C: "Tranquila. Hoy le toca a Iván. Mañana puede tocarte a ti." },
            reply: { A: "Ximena sonríe. Llega Iván. Todos se abrazan cuando dicen que sí.", B: "Ximena sonríe, agradecida. Llega Iván y, cuando su novio dice que sí, todos se abrazan.", C: "Ximena sonríe. Llega Iván, suena el sí y el callejón entero se abraza." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "globo",
            say: { A: "Le doy un globo de corazón a Tadeo. De parte de Ximena.", B: "Le doy un globo de corazón a Tadeo, de parte de Ximena.", C: "Le entrego un globo de corazón a Tadeo, de parte de Ximena." },
            reply: { A: "Tadeo mira a Ximena. Ella no huye. Él le da un beso.", B: "Tadeo mira a Ximena, que esta vez no aparta la vista. Él se acerca y la besa.", C: "Tadeo mira a Ximena, que por una vez no esquiva la mirada. Él la besa, sin más." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {
      sorpresa: { text: { A: "A las doce, Iván pide matrimonio. ¡Dice que sí! Todos aplauden.", B: "A medianoche, Iván se arrodilla entre los globos. Su novio dice que sí y todos aplauden, tú también.", C: "A medianoche, Iván se arrodilla entre globos y luces. El sí llega antes de terminar la pregunta." }, change: "abraza", recap: "Ayudaste a preparar una pedida de mano sorpresa." },
      secreto: { text: { A: "Te vas. Guardas el secreto. A las doce oyes aplausos.", B: "Te alejas guardando el secreto. A las doce, oyes aplausos detrás del food truck.", C: "Te alejas con el secreto a salvo. A medianoche, una ovación sale del callejón." }, change: "sonrie", recap: "Guardaste el secreto de Ximena y Tadeo." },
      violin: { text: { A: "Tadeo llama al violinista. Llega a las doce y cinco. ¡Pero llega!", B: "Tadeo llama al violinista, que llega corriendo a las doce y cinco. Aun así, es perfecto.", C: "El violinista llega sin aliento a las doce y cinco. Nadie lo nota: todos están llorando." }, change: "llama", recap: "Salvaste la música de una pedida de mano." },
      policia: { text: { A: "Llega la policía. Explicas todo. Los policías se ríen de los globos.", B: "Llega la policía. Explicas el malentendido entre globos con forma de corazón.", C: "Llega una patrulla. Explicar el malentendido rodeado de globos de corazón es humillante." }, change: "policia", recap: "Un malentendido detrás del food truck terminó con la policía." },
      nada: { text: { A: "Te vas. No sabes qué pasa a medianoche.", B: "Te alejas sin saber qué pasa a medianoche. A lo mejor nunca lo sabrás.", C: "Te alejas. El misterio de la medianoche se queda contigo, sin resolver." }, change: "sigue", recap: "Ignoraste una conversación misteriosa." },
      "cuchillo-policia": { text: { A: "Llega la policía. Dos cuchillos y cien globos. Nadie entiende nada.", B: "Llega la policía y encuentra dos cuchillos y cien globos de corazón. Nadie entiende nada.", C: "Llega una patrulla y encuentra dos cuchillos, cien globos de corazón y tres explicaciones distintas." }, change: "policia", recap: "Un duelo de cuchillos detrás del food truck terminó con la policía." },
      "cuchillo-ayuda": { text: { A: "A medianoche, Iván pide matrimonio. Dicen que sí. Tadeo guarda el cúter.", B: "A medianoche, Iván se arrodilla entre cintas bien cortadas. Su novio dice que sí. Tadeo guarda el cúter.", C: "A medianoche, Iván se arrodilla entre cintas perfectamente cortadas. El sí llega enseguida y Tadeo guarda el cúter." }, change: "abraza", recap: "Dos cuchillos terminaron cortando cintas para una pedida de mano." },
      "pistola-policia": { text: { A: "Llega la policía. Te llevan. Ximena y Tadeo tiemblan entre los globos.", B: "Llega la policía y te lleva. Ximena y Tadeo se quedan temblando entre los globos.", C: "Llega una patrulla y te lleva. Ximena y Tadeo se quedan entre los globos, temblando, sin pedida de mano." }, change: "policia", recap: "La pistola detrás del food truck terminó con la policía." },
      "pistola-huida": { text: { A: "Huyes. Ximena y Tadeo se abrazan. A las doce, la pedida sale mal.", B: "Huyes por el callejón. Ximena y Tadeo se abrazan. A las doce, la pedida de mano sale torcida.", C: "Huyes por el callejón. Ximena y Tadeo se abrazan, rotos. A las doce, la pedida de mano no es como la soñaron." }, change: "huye", recap: "Huiste del food truck con la pistola y dejaste una pedida de mano rota." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina cien globos. Iván se arrodilla igual. Dicen que sí.", B: "Un helicóptero ilumina cien globos de corazón. Iván se arrodilla bajo el foco y su novio dice que sí.", C: "Un helicóptero clava su foco sobre cien globos de corazón. Iván se arrodilla bajo la luz y el sí se oye hasta en la Fábrica." }, change: "helicoptero", recap: "La granada trajo un helicóptero a una pedida de mano." },
      "granada-sorpresa": { text: { A: "A medianoche, Iván pide matrimonio entre globos. Dicen que sí. Nadie habla de la granada.", B: "A medianoche, Iván se arrodilla entre globos. Su novio dice que sí y nadie menciona la granada.", C: "A medianoche, Iván se arrodilla entre globos. El sí llega al instante y la granada queda fuera del relato oficial." }, change: "abraza", recap: "La granada casi arruinó una pedida de mano, pero salió bien." },
      "gas-nube": { text: { A: "Todos tosen. Llega una ambulancia. Iván llega también y no entiende nada.", B: "Todos tosen entre globos. Llega una ambulancia. Iván aparece y no entiende nada.", C: "Todos tosen entre globos de corazón. Llega una ambulancia. Iván aparece justo entonces y no entiende absolutamente nada." }, change: "ambulancia", recap: "Dos gases pimienta llenaron de humo una pedida de mano." },
      "gas-vigilancia": { text: { A: "Vigilas la entrada del callejón. A las doce, Iván pide matrimonio. Dicen que sí.", B: "Vigilas la entrada del callejón con el gas en el bolsillo. A las doce, Iván se arrodilla y su novio dice que sí.", C: "Montas guardia en la entrada del callejón. A las doce, Iván se arrodilla y el sí llega sin incidentes." }, change: "sonrie", recap: "Fuiste el vigilante de una pedida de mano." },
      "lapiz-ortografia": { text: { A: "Iván lee el cartel sin faltas. Dicen que sí. Ximena te abraza.", B: "Iván lee el cartel sin faltas y recibe un sí. Ximena te abraza entre globos.", C: "Iván lee el cartel impecable y recibe un sí. Ximena te abraza como a un corrector de estilo heroico." }, change: "abraza", recap: "Corregiste el cartel de una pedida de mano con tu lápiz." },
      "lapiz-mapa": { text: { A: "El violinista llega con tu mapa. A las doce y dos, Iván pide matrimonio. Dicen que sí.", B: "El violinista llega siguiendo tu mapa. A las doce y dos, Iván se arrodilla y su novio dice que sí.", C: "El violinista llega con tu mapa en la mano. A las doce y dos, Iván se arrodilla y el sí llega con violín." }, change: "llama", recap: "Tu mapa a lápiz guió al violinista de una pedida de mano." },
      "libro-poema-fin": { text: { A: "A medianoche, Iván lee el poema de tu libro. Dicen que sí. Todos lloran.", B: "A medianoche, Iván lee el poema de tu libro y su novio dice que sí. Lloran todos.", C: "A medianoche, Iván lee el poema de tu libro y recibe el sí. El callejón entero llora." }, change: "sonrie", recap: "Tu libro puso el poema de una pedida de mano." },
      "libro-regalo": { text: { A: "Tu libro es el primer regalo de boda. Ximena te abraza.", B: "Tu libro, con dedicatoria, es el primer regalo de boda. Ximena te abraza.", C: "Tu libro, con una dedicatoria torcida, es el primer regalo de boda. Ximena te abraza entre globos." }, change: "abraza", recap: "Regalaste tu libro como primer regalo de boda." },
      "corazon-abrazo": { text: { A: "A medianoche, Iván pide matrimonio. Dicen que sí. Te abrazan como a un amigo.", B: "A medianoche, Iván se arrodilla y su novio dice que sí. Ximena y Tadeo te abrazan como a un amigo de siempre.", C: "A medianoche, Iván se arrodilla y recibe el sí. Ximena y Tadeo te abrazan como si llevaran años conociéndote." }, change: "abraza", recap: "Fuiste cómplice de una pedida de mano y terminaste abrazado." },
      "corazon-beso": { text: { A: "Ximena y Tadeo se besan. Luego Iván pide matrimonio. Dos amores en una noche.", B: "Ximena y Tadeo se besan entre globos. Luego Iván se arrodilla. Dos amores en una sola noche.", C: "Ximena y Tadeo se besan entre globos y, minutos después, Iván se arrodilla. Dos historias de amor en un callejón." }, change: "beso", recap: "Ximena y Tadeo se besaron gracias a ti." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo de los lugares oscuros?", B: "¿Qué harías si alguien con un cuchillo te pidiera ayuda de noche?", C: "¿Cómo se gana la confianza de alguien que acaba de asustarse de ti?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Te gustan las películas de policías?", B: "¿Alguna vez alguien te confundió con otra persona y qué pasó?", C: "¿Qué diferencia hay entre proteger a alguien y asustarlo con la excusa de protegerlo?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué cosas son peligrosas en una obra?", B: "¿Cuál fue la situación más absurda y peligrosa que viviste?", C: "¿Por qué nos reímos después de un peligro que acaba de pasar?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué haces cuando oyes un ruido raro de noche?", B: "¿Alguna vez te defendiste de algo que no era una amenaza?", C: "¿Qué nos enseña el miedo cuando resulta no tener motivo?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes informes en tu trabajo?", B: "¿Alguna vez ayudaste a alguien a escribir algo que no sabía escribir?", C: "¿Qué dice un informe oficial sobre lo que de verdad pasó?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees libros de misterio?", B: "¿Qué libro leerías en un turno de noche?", C: "¿Qué tienen en común el miedo de una novela y el miedo real?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Tienes miedo de estar solo de noche?", B: "¿Cómo animas a un amigo que tiene miedo?", C: "¿Qué valor tiene admitir el miedo delante de un desconocido?" } },
    },
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
      "cuchillo-inicio": {
        who: "benigno", mood: "scared",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas con la linterna. Ve tu cuchillo y retrocede. «¡Eh! ¿Qué haces con ese cuchillo? ¿Eres tú el ruido?»",
          B: "Junto a la valla de una obra, un vigilante mayor te hace señas con la linterna. Ve tu cuchillo y retrocede hasta la valla. «¡Eh, eh! ¿Qué haces con ese cuchillo? ¿Eres tú el que hace ruidos ahí dentro?»",
          C: "Un vigilante con casco te llama con la linterna junto a la valla de la obra. Ve el cuchillo y retrocede dos pasos. «¿Qué haces con eso? Llevo una hora oyendo ruidos y ahora resulta que el ruido tiene cuchillo.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. ¿Qué ruidos?", B: "Perdone, ya lo guardo. ¿Qué ruidos ha oído?", C: "Perdone, lo guardo. ¿Qué clase de ruidos oye?" },
            reply: { A: "Benigno respira. «Pasos. Y algo que come. ¿Me acompañas? Sin cuchillo.»", B: "Benigno respira hondo. «Pasos pequeños y algo que mastica. ¿Me acompañas a mirar? Sin cuchillo, eh.»", C: "Benigno exhala. «Pasitos y un masticar constante. ¿Me acompañas a mirar? Con el cuchillo guardado, por favor.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "ayudar",
            say: { A: "Es para defenderme. ¿Entramos juntos?", B: "Es para defenderme. ¿Entramos juntos a ver?", C: "Es para defenderme. ¿Entramos juntos a investigar?" },
            reply: { A: "Benigno niega. «Con eso en la mano, no entras. Guárdalo primero.»", B: "Benigno niega con la linterna. «Con eso en la mano no entras en mi obra. Guárdalo primero.»", C: "Benigno mueve la linterna de un lado a otro. «Con eso en la mano no cruzas mi valla. Primero lo guardas.»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "broma",
            say: { A: "¿Miedo? Soy el ruido. Es broma.", B: "¿Tiene miedo? Soy yo el ruido. Es broma.", C: "¿Asustado? El ruido soy yo. Es broma." },
            reply: { A: "Benigno no se ríe. Habla por la radio. «Persona con cuchillo en la obra.»", B: "Benigno no se ríe. Aprieta la radio. «Persona con cuchillo en la puerta de la obra.»", C: "Benigno no sonríe. Habla por la radio sin quitarte los ojos. «Individuo con cuchillo en la obra. Envíen a alguien.»" },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "benigno", mood: "worried",
        line: {
          A: "El cuchillo está guardado. Benigno te mira el bolsillo. «Bueno. Vamos. Tú primero, con la linterna.»",
          B: "El cuchillo ya no se ve. Benigno vigila tu bolsillo. «Bueno. Entramos. Tú primero y con la linterna, que así te veo las manos.»",
          C: "El cuchillo está guardado y Benigno no deja de mirar tu bolsillo. «De acuerdo. Entramos. Tú delante, con la linterna, que así te veo las manos.»",
        },
        options: [
          {
            id: "entrar",
            say: { A: "Entro primero. Hay algo detrás de los sacos.", B: "Entro primero. Algo se mueve detrás de los sacos.", C: "Voy delante. Algo se mueve tras los sacos de cemento." },
            reply: { A: "Una cabra sale de los sacos. Benigno se ríe. «¡Perla! Guarda el cuchillo, que la asustas.»", B: "Una cabra blanca sale de entre los sacos. Benigno se ríe a carcajadas. «¡Perla! Y tú con el cuchillo, pobre animal.»", C: "Una cabra blanca emerge de los sacos. Benigno se dobla de risa. «¡Perla! Y tú con el cuchillo, como si fuera un lobo.»" },
            mood: "laugh", end: "cuchillo-cabra",
          },
          {
            id: "cortar",
            say: { A: "La valla tiene una cuerda. La corto con el cuchillo.", B: "La valla está atada con una cuerda. La corto con el cuchillo.", C: "La valla está atada con un nudo imposible. Lo corto con el cuchillo." },
            reply: { A: "Benigno se tensa, pero asiente. Cortas. Entran. Una cabra come un sándwich.", B: "Benigno se tensa, pero asiente. Cortas la cuerda y entran. Detrás de los sacos, una cabra come un sándwich.", C: "Benigno se pone rígido, pero asiente. Cortas la cuerda y entran. Tras los sacos, una cabra devora un sándwich." },
            mood: "surprised", end: "cuchillo-cabra",
          },
          {
            id: "sacar",
            say: { A: "Saco el cuchillo otra vez. Por si acaso.", B: "Saco el cuchillo otra vez, por si acaso.", C: "Vuelvo a sacar el cuchillo, por precaución." },
            reply: { A: "Benigno retrocede y aprieta la radio. «Ya vienen.»", B: "Benigno retrocede hasta la valla y aprieta la radio. «Ya vienen. Lo siento.»", C: "Benigno retrocede y aprieta el botón de la radio. «Ya vienen. No me dejas otra.»" },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "benigno", mood: "terror",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas con la linterna. Ve tu pistola y levanta las manos. Se le cae la linterna. «¡No! ¡Yo solo vigilo! ¡No hay nada que robar!»",
          B: "Junto a la valla de una obra, un vigilante mayor te llama con la linterna. Ve tu pistola y levanta las manos; la linterna cae al suelo. «¡No dispares! ¡Solo soy el vigilante! ¡Aquí solo hay cemento!»",
          C: "Un vigilante con casco te hace señas junto a la valla de la obra. Ve tu pistola y alza las manos tan rápido que la linterna cae y se apaga. «¡No dispares! ¡Soy el vigilante! ¡Aquí no hay nada, solo sacos y una hormigonera!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquilo. La guardo. ¿Qué pasa aquí?", B: "Tranquilo, la guardo. ¿Qué pasa aquí?", C: "Tranquilo, la guardo. ¿Qué ocurre aquí?" },
            reply: { A: "Benigno baja las manos. La linterna está rota. «Hay ruidos dentro. Y ahora no veo nada.»", B: "Benigno baja las manos, temblando. La linterna está rota. «Hay ruidos dentro. Y ahora, sin luz, no veo nada.»", C: "Benigno baja las manos despacio. La linterna no se enciende. «Hay ruidos dentro. Y ahora, además, estamos a oscuras.»" },
            mood: "scared", next: "pistola-oscuro",
          },
          {
            id: "policia",
            say: { A: "¿Eres policía? Yo también. Vamos.", B: "¿Eres policía? Yo también. Entramos.", C: "¿Policía? Yo también. Entremos." },
            reply: { A: "Benigno no te cree. «¿Policía? ¿Sin uniforme?» No baja las manos.", B: "Benigno no te cree. «¿Policía? ¿Con esa chaqueta?» Mantiene las manos arriba.", C: "Benigno no se lo traga. «¿Policía? ¿Vestido así?» Mantiene las manos en alto, por si acaso." },
            mood: "scared", next: "pistola-oscuro",
          },
          {
            id: "mandar",
            say: { A: "Baja las manos. Abre la valla.", B: "Baja las manos y abre la valla.", C: "Baja las manos y ábreme la valla." },
            reply: { A: "Benigno obedece. Abre. Y aprieta la radio sin que lo veas.", B: "Benigno obedece y abre la valla. Con la otra mano, aprieta la radio sin que lo veas.", C: "Benigno obedece y abre la valla. Con la mano libre, aprieta el botón de la radio a tu espalda." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-oscuro": {
        who: "benigno", mood: "scared",
        line: {
          A: "Está muy oscuro. Benigno susurra: «Los ruidos vienen de ahí. ¿Vas a usar eso?»",
          B: "La obra está completamente a oscuras. Benigno susurra: «Los ruidos vienen de los sacos. Dime que no vas a usar eso.»",
          C: "La obra es un pozo negro. Benigno susurra: «Los ruidos vienen de los sacos. Por favor, dime que no vas a usar eso.»",
        },
        options: [
          {
            id: "no",
            say: { A: "No. Está guardada. Vamos despacio.", B: "No. Está guardada. Vamos despacio y sin ruido.", C: "No. Está guardada. Avancemos despacio." },
            reply: { A: "Algo sale de los sacos. «¡Meeee!» Benigno se ríe de puro alivio.", B: "Algo sale de entre los sacos: «¡Meeee!» Benigno se ríe de puro alivio.", C: "Algo surge de los sacos con un «¡Meeee!» larguísimo. Benigno se ríe, aliviado hasta las lágrimas." },
            mood: "laugh", end: "pistola-cabra",
          },
          {
            id: "apuntar",
            say: { A: "Apunto a los sacos. ¡Sal de ahí!", B: "Apunto hacia los sacos. ¡Sal de ahí!", C: "Apunto a los sacos. ¡Sal ahora mismo!" },
            reply: { A: "Benigno te agarra el brazo. «¡No! ¡Es Perla!» Una cabra sale. Llega la policía.", B: "Benigno te sujeta el brazo. «¡No! ¡Es Perla, la cabra!» Sale una cabra blanca. En la calle frena una patrulla.", C: "Benigno te agarra el brazo. «¡No, que es Perla!» Sale una cabra blanca y, en la calle, frena una patrulla." },
            mood: "terror", end: "pistola-policia",
          },
          {
            id: "luz",
            say: { A: "Enciendo la luz del celular.", B: "Enciendo la linterna del celular.", C: "Uso la linterna del celular." },
            reply: { A: "La luz ilumina una cabra blanca con un sándwich. Benigno se sienta en el suelo, riendo.", B: "La luz del celular ilumina una cabra blanca con un sándwich en la boca. Benigno se sienta en el suelo, muerto de risa.", C: "El celular ilumina una cabra blanca con medio sándwich. Benigno se deja caer al suelo, riendo sin control." },
            mood: "laugh", end: "pistola-cabra",
          },
        ],
      },
      "granada-inicio": {
        who: "benigno", mood: "terror",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas. Ve tu granada y grita: «¡Una granada! ¡Aquí hay gasolina!» Corre lejos de la valla.",
          B: "Junto a la valla de una obra, un vigilante mayor te llama con la linterna. Ve la granada y grita con toda su voz: «¡Una granada! ¡Hay bidones de gasolina ahí dentro!» Corre lejos de la valla.",
          C: "Un vigilante con casco te hace señas junto a la obra. Ve la granada y suelta un grito que resuena en los galpones: «¡Una granada! ¡Hay gasolina a tres metros!» Corre como no corría desde su boda.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Vuelva!", B: "¡Es de juguete! ¡Vuelva, por favor!", C: "¡Es una réplica! ¡Vuelva!" },
            reply: { A: "Benigno grita desde lejos: «¡Aléjate de la gasolina! ¡Juguete o no!»", B: "Benigno grita desde la esquina: «¡Aléjate de la gasolina! ¡Juguete o no, aléjate!»", C: "Benigno grita desde la esquina: «¡Lejos de la gasolina! ¡Me da igual si es de juguete!»" },
            mood: "scared", next: "granada-gasolina",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. ¿Dónde está la gasolina?", B: "La guardo. Perdone. ¿Dónde está la gasolina?", C: "La guardo. Perdone. ¿Dónde están esos bidones?" },
            reply: { A: "Benigno señala la obra. «Ahí. Y hay ruidos. Y ahora tú con eso.»", B: "Benigno señala el interior de la obra. «Ahí, junto a los sacos. Y hay ruidos. Y ahora tú con eso.»", C: "Benigno señala el fondo de la obra. «Junto a los sacos. Donde están los ruidos. Y ahora tú, con eso.»" },
            mood: "scared", next: "granada-gasolina",
          },
          {
            id: "tirar",
            say: { A: "¡La tiro lejos!", B: "¡La tiro lejos de la obra!", C: "¡La lanzo lejos de la obra!" },
            reply: { A: "Cae en un contenedor. No explota. Pero Benigno ya llamó. Suena un helicóptero.", B: "Cae dentro de un contenedor. No explota. Pero Benigno ya ha avisado y un helicóptero se acerca.", C: "Aterriza en un contenedor sin explotar. Benigno ya ha dado la alarma: un helicóptero ronda los galpones." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-gasolina": {
        who: "benigno", mood: "scared",
        line: {
          A: "Benigno vuelve despacio. «Los bidones están junto a los sacos. Y el ruido también. ¿Qué hacemos?»",
          B: "Benigno vuelve paso a paso. «Los bidones están al lado de los sacos. Y el ruido también. Dime qué hacemos, pero sin sacar eso.»",
          C: "Benigno regresa con cautela. «Los bidones, junto a los sacos. El ruido, también. ¿Qué propones, aparte de no sacar eso nunca más?»",
        },
        options: [
          {
            id: "mirar",
            say: { A: "Entro sin la granada. Miro qué es.", B: "Entro sin la granada y miro qué hace el ruido.", C: "Entro sin la granada y averiguo qué es el ruido." },
            reply: { A: "Entras. Una cabra come un sándwich junto a la gasolina. Benigno se ríe.", B: "Entras con la linterna. Una cabra come un sándwich entre los bidones. Benigno se ríe desde la valla.", C: "Entras con la linterna. Entre los bidones, una cabra mastica un sándwich con calma. Benigno se ríe desde la valla." },
            mood: "laugh", end: "granada-cabra",
          },
          {
            id: "evacuar",
            say: { A: "Hay que avisar a los vecinos. Por la gasolina.", B: "Hay que avisar a los vecinos, por la gasolina.", C: "Hay que alertar a los vecinos, por los bidones." },
            reply: { A: "Benigno llama. Llega la policía, los bomberos y un helicóptero. Y una cabra.", B: "Benigno llama. Llegan la policía, los bomberos y un helicóptero. Y, de los sacos, una cabra.", C: "Benigno da la alarma. Llegan policía, bomberos y un helicóptero. De los sacos sale una cabra, muy digna." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "abrir",
            say: { A: "Mire. La abro. Está vacía.", B: "Mire, la abro. Está vacía.", C: "Mire: la abro. Hueca." },
            reply: { A: "Benigno respira. «Vacía. Qué noche.» Y de los sacos sale una cabra.", B: "Benigno respira por primera vez en un minuto. «Vacía. Qué noche.» Y entonces una cabra sale de los sacos.", C: "Benigno respira al fin. «Vacía. Qué noche, Wilson, qué noche.» Y de los sacos aparece una cabra." },
            mood: "surprised", end: "granada-cabra",
          },
        ],
      },
      "gas-inicio": {
        who: "benigno", mood: "worried",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas. Ve tu gas pimienta. «¿Gas? Bien. Hay ruidos dentro. Tú con el gas, yo con la linterna.»",
          B: "Junto a la valla de una obra, un vigilante mayor te llama con la linterna. Ve tu gas pimienta y asiente. «¿Llevas gas? Perfecto. Hay ruidos ahí dentro. Tú con el gas, yo con la linterna. Equipo.»",
          C: "Un vigilante con casco te hace señas junto a la valla de la obra. Ve tu gas pimienta y se anima. «¿Gas pimienta? Justo lo que necesito. Hay ruidos dentro. Tú armas, yo iluminación. Somos un equipo.»",
        },
        options: [
          {
            id: "equipo",
            say: { A: "Equipo. Vamos. ¿Qué ruido es?", B: "Equipo. Vamos. ¿Qué tipo de ruido es?", C: "Equipo, entonces. Vamos. ¿Cómo es el ruido?" },
            reply: { A: "Benigno sonríe. «Pasos y algo que come. Tú primero, con el gas.»", B: "Benigno sonríe. «Pasos pequeños y algo que mastica. Tú primero, con el gas en alto.»", C: "Benigno sonríe. «Pasitos y masticar. Tú delante, con el gas en alto, como en las películas.»" },
            mood: "worried", next: "gas-dentro",
          },
          {
            id: "desconfiar",
            say: { A: "¿Y usted quién es? ¿Por qué me necesita?", B: "¿Y usted quién es? ¿Por qué necesita a un desconocido?", C: "¿Y usted quién es? ¿Por qué recluta a un desconocido?" },
            reply: { A: "Benigno enseña la placa. «Benigno. Vigilante. Y tengo miedo, ¿contento?»", B: "Benigno enseña su placa de vigilante. «Benigno. Treinta años aquí. Y tengo miedo, ¿contento?»", C: "Benigno muestra la placa. «Benigno, vigilante nocturno. Y sí, tengo miedo. ¿Satisfecho?»" },
            mood: "sad", next: "gas-dentro",
          },
          {
            id: "apuntar",
            say: { A: "No se acerque. ¿Es usted el ruido?", B: "¡No se acerque! ¿Es usted el que hace el ruido?", C: "Quieto. ¿El ruido es usted?" },
            reply: { A: "Benigno levanta las manos. «¡Soy el vigilante! ¡El ruido está dentro!»", B: "Benigno levanta las manos con la linterna. «¡Soy el vigilante! ¡El ruido está dentro, no aquí!»", C: "Benigno alza las manos, linterna incluida. «¡Soy el vigilante! ¡El ruido está dentro, yo solo soy el miedo!»" },
            mood: "scared", next: "gas-dentro",
          },
        ],
      },
      "gas-dentro": {
        who: "benigno", mood: "scared",
        line: {
          A: "Dentro de la obra, algo se mueve detrás de los sacos. Benigno susurra: «¡Ahí! ¡Usa el gas!»",
          B: "Dentro de la obra, algo se mueve detrás de los sacos de cemento. Benigno susurra, pegado a tu espalda: «¡Ahí! ¡Ahora! ¡Usa el gas!»",
          C: "Dentro de la obra, algo se agita tras los sacos. Benigno, pegado a tu espalda, susurra: «¡Ahí! ¡Ahora o nunca! ¡El gas!»",
        },
        options: [
          {
            id: "esperar",
            say: { A: "Espere. Primero miro.", B: "Espere. Primero miro qué es.", C: "Espere. Primero identifico el objetivo." },
            reply: { A: "La linterna ilumina una cabra con un sándwich. Benigno suelta el aire. «¡Perla!»", B: "La linterna ilumina una cabra blanca con un sándwich en la boca. Benigno suelta todo el aire. «¡Perla! ¡Otra vez!»", C: "La linterna descubre una cabra blanca con medio sándwich. Benigno se desinfla. «¡Perla! ¡Reincidente!»" },
            mood: "laugh", end: "gas-cabra",
          },
          {
            id: "rociar",
            say: { A: "¡Toma!", B: "¡Toma esto!", C: "¡Ahí va!" },
            reply: { A: "Rocías los sacos. Sale una cabra tosiendo. Y ustedes también. Todos corren fuera.", B: "Rocías los sacos. Sale una cabra tosiendo, y la nube los alcanza a los dos. Salen corriendo los tres.", C: "Rocías los sacos. Una cabra sale tosiendo y la nube regresa hacia ustedes. Los tres salen corriendo de la obra." },
            mood: "pain", end: "gas-nube",
          },
          {
            id: "hablar",
            say: { A: "¡Hola! ¿Quién está ahí? Tengo gas.", B: "¡Hola! ¿Quién anda ahí? Aviso: tengo gas.", C: "¡Hola! ¿Quién anda ahí? Aviso: voy armado con gas." },
            reply: { A: "«¡Meeee!» Sale una cabra. Benigno se ríe. «Perla no entiende de avisos.»", B: "«¡Meeee!» Una cabra blanca sale de los sacos. Benigno se ríe. «Perla no entiende las amenazas.»", C: "«¡Meeee!» Una cabra blanca aparece entre los sacos. Benigno se ríe. «Perla no lee advertencias.»" },
            mood: "laugh", end: "gas-cabra",
          },
        ],
      },
      "lapiz-inicio": {
        who: "benigno", mood: "worried",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas. Ve tu lápiz. «¿Un lápiz? Necesito escribir un parte. Hay ruidos. Y yo escribo muy mal.»",
          B: "Junto a la valla de una obra, un vigilante mayor te llama con la linterna. Ve tu lápiz y se anima. «¿Llevas lápiz? Tengo que escribir un parte sobre unos ruidos y, sinceramente, escribo fatal.»",
          C: "Un vigilante con casco te hace señas junto a la valla de la obra. Ve tu lápiz y se le ilumina la cara. «¿Un lápiz? Necesito redactar un parte de incidencias por unos ruidos, y mi letra parece otro ruido.»",
        },
        options: [
          {
            id: "parte",
            say: { A: "Yo escribo. Dígame qué pasó.", B: "Yo lo escribo. Cuénteme qué pasó.", C: "Yo redacto. Cuénteme los hechos." },
            reply: { A: "Benigno dicta: «Ruidos. Pasos. Algo come. Desapareció mi sándwich.»", B: "Benigno dicta: «Ruidos desde las once. Pasos pequeños. Algo mastica. Mi sándwich, desaparecido.»", C: "Benigno dicta: «Ruidos desde las once. Pasos cortos. Masticación constante. Sándwich de jamón, desaparecido.»" },
            mood: "neutral", next: "lapiz-parte",
          },
          {
            id: "mapa",
            say: { A: "Mejor dibujamos un mapa. ¿Dónde suena?", B: "Mejor dibujamos un mapa de la obra. ¿Dónde suena?", C: "Mejor empezamos por un croquis. ¿De dónde viene el ruido?" },
            reply: { A: "Benigno marca una X junto a los sacos. «Aquí. Y aquí estaba mi sándwich.»", B: "Benigno marca una X junto a los sacos. «Aquí suena. Y aquí, hasta hace una hora, estaba mi sándwich.»", C: "Benigno marca una X junto a los sacos. «Zona de ruidos. Y escena del crimen de mi sándwich.»" },
            mood: "neutral", next: "lapiz-parte",
          },
          {
            id: "firmar",
            say: { A: "¿Firmo yo como testigo?", B: "¿Quiere que firme como testigo?", C: "¿Me necesita como testigo firmante?" },
            reply: { A: "Benigno asiente. «Testigo civil. La empresa me cree más.»", B: "Benigno asiente con entusiasmo. «Testigo civil. Así la empresa no dice que lo invento.»", C: "Benigno asiente, agradecido. «Testigo civil. Así en la empresa dejan de llamarme Cazagatos.»" },
            mood: "smile", next: "lapiz-parte",
          },
        ],
      },
      "lapiz-parte": {
        who: "benigno", mood: "neutral",
        line: {
          A: "El parte está casi listo. Falta la causa del ruido. Benigno dice: «Hay que entrar a ver. Con el lápiz listo.»",
          B: "El parte está casi completo. Falta el apartado «causa del ruido». Benigno suspira. «Hay que entrar a comprobarlo. Tú apuntas, yo ilumino.»",
          C: "El parte está casi terminado; solo falta la causa. Benigno suspira. «Toca entrar a verificar. Tú anotas, yo ilumino, y los dos rezamos.»",
        },
        options: [
          {
            id: "entrar",
            say: { A: "Entramos. Yo apunto todo.", B: "Entramos. Yo apunto todo lo que veamos.", C: "Entramos. Yo registro cada detalle." },
            reply: { A: "Detrás de los sacos, una cabra come un sándwich. Escribes: «Causa: cabra».", B: "Detrás de los sacos, una cabra blanca termina un sándwich. Escribes: «Causa del ruido: cabra, nombre Perla».", C: "Tras los sacos, una cabra blanca remata un sándwich. Escribes: «Causa: cabra. Nombre: Perla. Actitud: impune»." },
            mood: "laugh", end: "lapiz-informe",
          },
          {
            id: "cartel",
            say: { A: "Escribo un cartel: “Se busca ladrón de sándwich”.", B: "Escribo un cartel: “Se busca ladrón de sándwich. Recompensa: café”.", C: "Redacto un cartel: “Se busca ladrón de sándwich. Recompensa: café del termo”." },
            reply: { A: "Benigno se ríe. Lo pega en la valla. De los sacos sale una cabra.", B: "Benigno se ríe y lo pega en la valla. Justo entonces, de los sacos sale una cabra.", C: "Benigno se ríe y lo cuelga en la valla. En ese instante, una cabra sale de los sacos, como si se diera por aludida." },
            mood: "laugh", end: "lapiz-cartel",
          },
          {
            id: "inventar",
            say: { A: "Escribo: “Causa: gato”. Y nos vamos.", B: "Escribo: “Causa: gato”, y nos vamos.", C: "Anoto: “Causa: gato”, y damos el caso por cerrado." },
            reply: { A: "Benigno niega. «Otra vez el gato, no. Entramos.» Y encuentran una cabra.", B: "Benigno niega. «Otro parte con gato, no. Entramos.» Y detrás de los sacos encuentran una cabra.", C: "Benigno se niega. «Otro gato en el parte y me despiden. Entramos.» Y tras los sacos hay una cabra." },
            mood: "neutral", end: "lapiz-informe",
          },
        ],
      },
      "libro-inicio": {
        who: "benigno", mood: "smile",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas. Ve tu libro y se ríe. «¿Un libro a estas horas? Hay ruidos dentro. ¿Es de miedo?»",
          B: "Junto a la valla de una obra, un vigilante mayor te llama con la linterna. Ve tu libro y se ríe, nervioso. «¿Un libro a medianoche? ¿Es de miedo? Porque yo ya tengo bastante con los ruidos de ahí dentro.»",
          C: "Un vigilante con casco te hace señas junto a la valla de la obra. Ve tu libro y suelta una risa inquieta. «¿Un libro a estas horas? No será de terror, porque los ruidos de ahí dentro ya me ponen la banda sonora.»",
        },
        options: [
          {
            id: "misterio",
            say: { A: "Es de misterio. Yo entiendo de ruidos.", B: "Es de misterio. Soy experto en ruidos raros.", C: "Es de misterio. Los ruidos raros son mi especialidad." },
            reply: { A: "Benigno se ríe. «Pues ven. Tú lees las pistas, yo ilumino.»", B: "Benigno se ríe. «Entonces ven. Tú interpretas las pistas y yo pongo la luz.»", C: "Benigno se ríe. «Perfecto. Tú interpretas las pistas, yo aporto la linterna.»" },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "leer",
            say: { A: "¿Le leo un poco? Así no tiene miedo.", B: "¿Le leo un poco? A lo mejor se le pasa el miedo.", C: "¿Le leo un fragmento? Dicen que calma los nervios." },
            reply: { A: "Benigno se sienta en un bloque. «Lee. Hace años que nadie me lee.»", B: "Benigno se sienta en un bloque de cemento. «Lee, lee. Hace años que nadie me lee nada.»", C: "Benigno se acomoda en un bloque de cemento. «Adelante. Hace años que nadie me lee, y la radio no cuenta.»" },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "excusa",
            say: { A: "Es para el autobús. Me hace compañía.", B: "Es para el autobús. Me hace compañía de noche.", C: "Es para el autobús. De noche, un libro es buena compañía." },
            reply: { A: "Benigno suspira. «Compañía. Yo tengo una hormigonera. Pasa, anda.»", B: "Benigno suspira. «Compañía. La mía es una hormigonera y unos ruidos. Pasa, anda.»", C: "Benigno suspira. «Compañía. Yo tengo una hormigonera y un misterio. Pasa, anda.»" },
            mood: "sad", next: "libro-lectura",
          },
        ],
      },
      "libro-lectura": {
        who: "benigno", mood: "worried",
        line: {
          A: "Lees en voz alta en la obra oscura. Algo se mueve detrás de los sacos al ritmo de tu voz. Benigno susurra: «No pares.»",
          B: "Lees en voz alta en la obra a oscuras. Detrás de los sacos, algo se mueve al ritmo de tu voz. Benigno susurra: «No pares, que se acerca.»",
          C: "Lees en voz alta en la obra en penumbra. Tras los sacos, algo se mueve siguiendo tu voz. Benigno susurra: «No pares. Lo estás atrayendo.»",
        },
        options: [
          {
            id: "seguir",
            say: { A: "Sigo leyendo. Sale una cabra.", B: "Sigo leyendo y, de los sacos, sale una cabra.", C: "Continúo leyendo y de los sacos emerge una cabra." },
            reply: { A: "La cabra se sienta a escuchar. Benigno se ríe. «¡Perla! ¡Le gustan los libros!»", B: "La cabra se tumba a escuchar. Benigno se ríe. «¡Perla! ¡A la cabra le gustan los libros!»", C: "La cabra se tumba a tus pies a escuchar. Benigno se ríe. «¡Perla! ¡Tengo una cabra lectora!»" },
            mood: "laugh", end: "libro-cabra",
          },
          {
            id: "prestar",
            say: { A: "Le dejo el libro. Para el turno.", B: "Le dejo el libro para el resto del turno.", C: "Le presto el libro para lo que queda de turno." },
            reply: { A: "Benigno lo acepta. «Gracias. Y Perla, que sale ahora, lo escuchará también.» Sale una cabra.", B: "Benigno lo acepta, emocionado. «Gracias. Perla y yo lo leeremos juntos.» De los sacos sale una cabra.", C: "Benigno lo acepta con las dos manos. «Gracias. Perla y yo tenemos lectura.» Una cabra sale de los sacos." },
            mood: "love", end: "libro-prestado",
          },
          {
            id: "final",
            say: { A: "El final: es el mayordomo.", B: "Le cuento el final: siempre es el mayordomo.", C: "Le revelo el final: el mayordomo, como siempre." },
            reply: { A: "Benigno se ríe. «Aquí el mayordomo es una cabra.» Y sale Perla.", B: "Benigno se ríe. «Aquí el mayordomo tiene cuernos.» Y de los sacos sale Perla.", C: "Benigno se ríe. «En esta obra el mayordomo tiene barba y cuernos.» Y Perla asoma entre los sacos." },
            mood: "laugh", end: "libro-cabra",
          },
        ],
      },
      "corazon-inicio": {
        who: "benigno", mood: "love",
        line: {
          A: "En la puerta de una obra, un vigilante te hace señas. Ve tu corazón y se emociona. Te abraza. «Perdona. Tengo miedo. Hay ruidos y estoy solo.»",
          B: "Junto a la valla de una obra, un vigilante mayor te llama con la linterna. Ve tu corazón y, sin pensarlo, te abraza. «Perdona. Llevo una hora con miedo. Hay ruidos y Wilson está de vacaciones.»",
          C: "Un vigilante con casco te hace señas junto a la obra. Ve tu corazón y, antes de decir nada, te abraza. «Perdona. Llevo una hora muerto de miedo. Hay ruidos y mi compañero está en la playa.»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "No está solo. Entramos juntos.", B: "Ya no está solo. Entramos juntos.", C: "Ya no está solo. Entramos juntos y lo resolvemos." },
            reply: { A: "Benigno se seca los ojos. «Gracias. Wilson diría que soy un miedoso.»", B: "Benigno se seca los ojos con la manga. «Gracias. Wilson diría que soy un miedoso. Y tendría razón.»", C: "Benigno se seca los ojos con el uniforme. «Gracias. Wilson me llamaría miedoso. Y no se equivocaría.»" },
            mood: "love", next: "corazon-wilson",
          },
          {
            id: "miedo",
            say: { A: "Yo también tengo miedo. No pasa nada.", B: "Yo también tengo miedo. Es normal.", C: "Yo también tengo miedo. Es lo más normal del mundo." },
            reply: { A: "Benigno se ríe entre lágrimas. «Dos miedosos. Ya somos un equipo.»", B: "Benigno se ríe entre lágrimas. «Dos miedosos. Entre los dos sumamos un valiente.»", C: "Benigno se ríe con los ojos húmedos. «Dos miedosos. Juntos hacemos medio valiente, al menos.»" },
            mood: "love", next: "corazon-wilson",
          },
          {
            id: "cafe",
            say: { A: "¿Tiene café? Primero un café.", B: "¿Tiene café? Primero un café y luego el ruido.", C: "¿Tiene café? Primero café; el ruido puede esperar." },
            reply: { A: "Benigno saca un termo. Toman café. El ruido espera. Sale una cabra a pedir pan.", B: "Benigno saca un termo del bolsillo. Toman café bajo la grúa. El ruido, mientras tanto, sale: una cabra que pide pan.", C: "Benigno saca un termo. Toman café bajo la grúa y el ruido, aburrido de esperar, aparece: una cabra que quiere pan." },
            mood: "love", end: "corazon-cafe",
          },
        ],
      },
      "corazon-wilson": {
        who: "benigno", mood: "smile",
        line: {
          A: "Entran juntos. Detrás de los sacos hay una cabra con un sándwich. Benigno se ríe. «¡Perla! Wilson no me lo va a creer.»",
          B: "Entran juntos, hombro con hombro. Detrás de los sacos, una cabra blanca come un sándwich. Benigno se ríe. «¡Perla! Wilson no se lo va a creer.»",
          C: "Entran juntos, codo con codo. Tras los sacos, una cabra blanca mastica un sándwich con total impunidad. Benigno se ríe. «¡Perla! Wilson jamás me creerá.»",
        },
        options: [
          {
            id: "foto",
            say: { A: "Hago una foto para Wilson.", B: "Le hago una foto para Wilson.", C: "Le saco una foto, como prueba para Wilson." },
            reply: { A: "Benigno posa con Perla. Luego te abraza. «Gracias por entrar conmigo.»", B: "Benigno posa con Perla y el casco torcido. Luego te abraza. «Gracias por entrar conmigo.»", C: "Benigno posa con Perla, orgulloso. Después te abraza. «Gracias por cruzar la valla conmigo.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "cafe",
            say: { A: "¿Ahora sí un café? Con Perla.", B: "¿Ahora sí tomamos un café? Con Perla.", C: "¿Ahora sí nos tomamos un café? Perla invitada." },
            reply: { A: "Benigno saca el termo. Café para dos, pan para Perla.", B: "Benigno saca el termo. Café para dos y pan para Perla, bajo la grúa.", C: "Benigno saca el termo. Café para dos y pan para Perla, bajo la grúa y sin miedo." },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "valiente",
            say: { A: "Benigno, usted es muy valiente.", B: "Benigno, usted es más valiente de lo que cree.", C: "Benigno, es usted más valiente de lo que piensa." },
            reply: { A: "Benigno te abraza con fuerza. «Nadie me lo había dicho.»", B: "Benigno te abraza con fuerza. «Nadie me lo había dicho nunca. Ni Wilson.»", C: "Benigno te abraza como a un hijo. «Nadie me lo había dicho en treinta años. Ni Wilson.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      granja: { text: { A: "Una chica de la granja llega y se lleva a Perla. Benigno se ríe.", B: "Llega una chica de la granja urbana y se lleva a Perla, que protesta con un «meeee» largo.", C: "Llega la cuidadora de la granja, con cara de no ser la primera vez. Perla se va protestando." }, change: "llama", recap: "Encontraste una cabra perdida en la obra con Benigno." },
      paseo: { text: { A: "Llevan a Perla a la granja. Benigno camina contento.", B: "Pasean a Perla hasta la granja. Benigno camina orgulloso, como un pastor de ciudad.", C: "Devuelven a Perla a la granja. Benigno camina con la dignidad de un pastor urbano." }, change: "se-va", recap: "Devolviste una cabra a la granja urbana con Benigno." },
      compania: { text: { A: "Benigno, Perla y tú toman un café. Bueno, Perla come pan.", B: "Benigno saca el termo. Tomas un café con él mientras Perla mordisquea un trozo de pan.", C: "Compartes café con Benigno bajo la grúa, mientras Perla vigila la obra mejor que nadie." }, change: "se-sienta", recap: "Tomaste un café con Benigno y una cabra." },
      solo: { text: { A: "Te vas. Benigno entra solo en la obra con su linterna.", B: "Te alejas. Benigno entra solo en la obra. De lejos, oyes un grito… y luego risas.", C: "Te alejas. Desde la esquina oyes un grito, un «meeee» y la carcajada de Benigno." }, change: "sigue", recap: "No acompañaste a Benigno a la obra." },
      policia: { text: { A: "Llega la policía. Explicas todo. Después, encuentran una cabra.", B: "Llega la policía. Mientras explicas el malentendido, un agente encuentra una cabra en la obra.", C: "Llega una patrulla. Entre explicaciones, un agente sale de la obra con una cabra. Nadie entiende nada." }, change: "policia", recap: "Una noche en la obra terminó con la policía." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Un agente encuentra una cabra en la obra.", B: "Llega la policía y te quita el cuchillo. Mientras explicas, un agente encuentra una cabra en la obra.", C: "Llega una patrulla y te requisa el cuchillo. Mientras te interrogan, un agente sale de la obra con una cabra." }, change: "policia", recap: "El cuchillo en la obra de Benigno terminó con la policía." },
      "cuchillo-cabra": { text: { A: "Benigno llama a la granja. Perla se va. «Y tú, el cuchillo en casa.»", B: "Benigno llama a la granja y Perla se va protestando. «Y tú, la próxima vez, el cuchillo en casa.»", C: "Benigno llama a la granja y Perla se va entre protestas. «Y tú, el cuchillo en la cocina, que Perla no muerde.»" }, change: "llama", recap: "Encontraste a Perla en la obra, con un cuchillo que sobraba." },
      "pistola-policia": { text: { A: "La policía te lleva. Benigno explica con Perla al lado.", B: "La policía te lleva. Benigno lo explica todo con Perla a su lado, comiendo pan.", C: "La policía te lleva. Benigno declara con Perla al lado, que mastica pan como testigo imparcial." }, change: "policia", recap: "La pistola en la obra de Benigno terminó con la policía." },
      "pistola-cabra": { text: { A: "Perla come pan. Benigno se ríe. «Guarda eso para siempre.»", B: "Perla come pan de la mano de Benigno, que se ríe. «Y eso, guardado para siempre.»", C: "Perla come pan de la mano de Benigno, que no deja de reír. «Y eso, guardado hasta el fin de los tiempos.»" }, change: "sonrie", recap: "Una cabra desarmó el miedo en la obra de Benigno." },
      "granada-helicoptero": { text: { A: "Bomberos, policía y un helicóptero rodean la obra. Perla come un sándwich.", B: "Bomberos, policía y un helicóptero rodean la obra. En medio, Perla termina su sándwich.", C: "Bomberos, policía y un helicóptero rodean la obra. En el centro, Perla termina su sándwich sin inmutarse." }, change: "helicoptero", recap: "La granada junto a la gasolina trajo bomberos y un helicóptero a la obra." },
      "granada-cabra": { text: { A: "Benigno se sienta, agotado. Perla come pan. «Qué noche.»", B: "Benigno se sienta en un bloque, agotado. Perla come pan de su mano. «Qué noche, qué noche.»", C: "Benigno se desploma sobre un bloque. Perla come pan de su mano. «Qué noche. Wilson no me creerá ni la mitad.»" }, change: "sonrie", recap: "La granada asustó a Benigno, pero el ruido era Perla." },
      "gas-nube": { text: { A: "Los tres tosen fuera de la obra. Benigno llama a una ambulancia. Perla estornuda.", B: "Los tres tosen en la acera. Benigno llama a una ambulancia entre lágrimas de gas. Perla estornuda.", C: "Los tres tosen en la acera. Benigno pide una ambulancia con la voz rota y Perla estornuda, indignada." }, change: "ambulancia", recap: "El gas pimienta en la obra terminó con todos tosiendo, Perla incluida." },
      "gas-cabra": { text: { A: "Benigno guarda la radio. Perla come pan. «Buen equipo. Sin usar el gas.»", B: "Benigno guarda la radio y le da pan a Perla. «Buen equipo. Y sin gastar el gas.»", C: "Benigno guarda la radio y alimenta a Perla. «Buen equipo. Y el gas, intacto, como debe ser.»" }, change: "sonrie", recap: "Entraste en la obra con gas pimienta y encontraste a Perla." },
      "lapiz-informe": { text: { A: "El parte dice: «Causa: cabra». Benigno lo firma. Perla también, con la pata.", B: "El parte queda firmado: «Causa: cabra, nombre Perla». Benigno lo manda a la empresa, orgulloso.", C: "El parte, firmado por Benigno y un testigo civil, atribuye el ruido a una cabra llamada Perla. La empresa tendrá que creerlo." }, change: "llama", recap: "Redactaste el parte de la cabra para Benigno." },
      "lapiz-cartel": { text: { A: "El cartel está en la valla. Perla come pan. Benigno se ríe.", B: "El cartel cuelga en la valla: «Se busca ladrón de sándwich». Perla come pan debajo, sin pudor.", C: "El cartel cuelga en la valla y Perla come pan justo debajo, como si posara. Benigno se ríe." }, change: "sonrie", recap: "Escribiste el cartel del ladrón de sándwich, que resultó ser Perla." },
      "libro-cabra": { text: { A: "Perla escucha el libro. Benigno también. Nadie tiene miedo.", B: "Perla escucha el libro tumbada. Benigno también. En la obra ya no hay miedo.", C: "Perla escucha el libro tumbada a tus pies. Benigno, a su lado. En la obra, por primera vez, nadie tiene miedo." }, change: "sonrie", recap: "Leíste en voz alta en la obra y Perla se quedó a escuchar." },
      "libro-prestado": { text: { A: "Benigno se sienta con tu libro y Perla. El turno pasa rápido.", B: "Benigno se sienta en un bloque con tu libro y Perla al lado. El turno pasa volando.", C: "Benigno se instala en un bloque con tu libro y Perla a los pies. El turno, por una vez, pasa rápido." }, change: "se-sienta", recap: "Dejaste tu libro a Benigno para el turno de noche." },
      "corazon-abrazo": { text: { A: "Benigno te abraza bajo la grúa. Perla come pan.", B: "Benigno te abraza bajo la grúa mientras Perla come pan.", C: "Benigno te abraza bajo la grúa, con Perla comiendo pan a los pies de los dos." }, change: "abraza", recap: "Benigno te abrazó en la obra, con Perla de testigo." },
      "corazon-cafe": { text: { A: "Café del termo bajo la grúa. Benigno, Perla y tú. Sin miedo.", B: "Café del termo bajo la grúa, con Benigno y Perla. El miedo se quedó fuera.", C: "Café del termo bajo la grúa, con Benigno y Perla. El miedo se quedó al otro lado de la valla." }, change: "se-sienta", recap: "Tomaste café con Benigno y Perla en la obra." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando una pareja discute delante de ti?", B: "¿Cómo reaccionarías si alguien sacara un cuchillo en un parque tranquilo?", C: "¿Qué nos asusta más: el arma o la persona que la sostiene?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si ves un arma en un parque?", B: "¿Cómo te gustaría que reaccionara la gente si te vieran con un arma por error?", C: "¿Qué consecuencias merece un susto así en un lugar de juego?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué haces cuando algo te da mucho miedo?", B: "¿Cuál es la broma más pesada que te hicieron?", C: "¿Por qué reímos de lo que nos ha dado pánico, cuando ya pasó?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Qué es lo más bonito que alguien hizo por ti?", B: "¿Cómo sabes que alguien te quiere de verdad?", C: "¿Qué se arriesga cuando se elige quedarse junto a alguien?" } },
    },
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
      "cuchillo-inicio": {
        who: "aitana", mood: "scared",
        line: {
          A: "En el parque, una pareja se balancea en los columpios. Ven tu cuchillo y se paran. «¡Eh! ¿Qué haces con eso? ¡Guarda eso!»",
          B: "Dos personas se columpian despacio. Ven el cuchillo en tu mano y Joel se levanta de golpe. «¿Qué haces con ese cuchillo en un parque? ¡Guárdalo!»",
          C: "Una pareja se mece en los columpios hasta que ven tu cuchillo. Joel se pone delante de Aitana. «¿Estás loco? Baja eso, que aquí solo discutimos con palabras.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Es para cortar fruta.", B: "Perdón, lo guardo. Es para pelar fruta, de verdad.", C: "Perdón, lo guardo. Es para la fruta; la ironía no era intencionada." },
            reply: { A: "Joel respira. Aitana dice: «Bueno… ¿Tienes una opinión?»", B: "Joel respira. Aitana, aún tensa, pregunta: «Bueno… ¿y ya que estás, una opinión?»", C: "Joel respira. Aitana, todavía pálida, dice: «Pues ya que has venido con tanto filo, danos una opinión.»" },
            mood: "worried", next: "cuchillo-despues",
          },
          {
            id: "huir",
            say: { A: "Me voy. Perdón.", B: "Me voy, perdón por el susto.", C: "Me retiro; el susto ha sido mutuo." },
            reply: { A: "Aitana llama a la policía. Joel mira cómo te vas.", B: "Aitana llama a la policía mientras Joel te vigila hasta que desapareces.", C: "Aitana marca la policía y Joel te sigue con la mirada hasta que te pierdes." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-despues": {
        who: "aitana", mood: "worried",
        line: {
          A: "El cuchillo está guardado. Joel dice: «Aitana se va a Lisboa. Yo no sé si ir. ¿Tú qué harías?»",
          B: "Con el cuchillo ya guardado, Joel suspira: «Aitana tiene trabajo en Lisboa y yo no sé si seguirla. ¿Tú qué harías?»",
          C: "Con el cuchillo fuera de la escena, Joel confiesa: «Aitana se va a Lisboa y yo me columpio. Dime algo sensato, ya que has traído tanto filo.»",
        },
        options: [
          {
            id: "ir",
            say: { A: "Yo voy con ella. Es una aventura.", B: "Yo iría. Lo peor es que vuelvas.", C: "Yo iría. Lo peor que puede pasar es volver con otro idioma." },
            reply: { A: "Joel sonríe. Aitana lo abraza.", B: "Joel sonríe y Aitana lo abraza en el columpio.", C: "Joel sonríe y Aitana se lanza a abrazarlo, columpio incluido." },
            mood: "smile", end: "lisboa",
          },
          {
            id: "hablar",
            say: { A: "Hablen en casa, con calma.", B: "Hablen en casa, con calma y sin cuchillos.", C: "Hablen en casa, con calma, y dejen los cuchillos para la cocina." },
            reply: { A: "Aitana toma la mano de Joel. Se van.", B: "Aitana toma la mano de Joel y se van a casa a hablar.", C: "Aitana toma la mano de Joel y se alejan por el parque, con tema para rato." },
            mood: "smile", end: "hablar",
          },
        ],
      },
      "pistola-inicio": {
        who: "joel", mood: "terror",
        line: {
          A: "En el parque, una pareja se columpia. Ven tu pistola. Joel levanta las manos. «¡No, por favor! No tenemos nada.»",
          B: "Dos personas se balancean en los columpios. Ven la pistola en tu cintura y Joel levanta las manos. «¡No, por favor! No llevamos nada, solo somos dos enamorados.»",
          C: "Una pareja se mece hasta que ven tu pistola. Joel alza las manos, Aitana se queda helada en el columpio. «No queremos problemas. Esto es un parque, no una película.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquilos. La guardo. Solo pregunto algo.", B: "Tranquilos, la guardo. Solo quiero preguntarles algo.", C: "Calma, la guardo. Solo vengo a preguntarles algo." },
            reply: { A: "Joel baja las manos despacio. «¿Qué… quieres saber?»", B: "Joel baja las manos poco a poco. «¿Qué quieres preguntar, exactamente?»", C: "Joel baja las manos con cautela. «Si es una pregunta, que sea corta y sin movimientos bruscos.»" },
            mood: "scared", next: "pistola-despues",
          },
          {
            id: "mandar",
            say: { A: "Quietos. Ustedes, escuchen.", B: "Quietos los dos. Escuchen con atención.", C: "Quietos. Y escuchen bien lo que voy a decir." },
            reply: { A: "Aitana grita. Joel no se mueve. Se oye una sirena.", B: "Aitana grita. Joel no se mueve. A lo lejos suena una sirena de policía.", C: "Aitana grita; Joel, rígido, no se mueve. Una sirena crece detrás de los árboles." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-despues": {
        who: "joel", mood: "scared",
        line: {
          A: "Joel tiene las manos medio arriba. «Aitana tiene un trabajo en Lisboa. No sé si ir. ¿Eso querías oír?»",
          B: "Joel mantiene las manos a media altura. «Aitana tiene trabajo en Lisboa y no sé si ir. ¿Es eso lo que querías saber?»",
          C: "Joel mantiene las manos a medio levantar. «Aitana tiene trabajo en Lisboa y yo dudo. ¿Era esto lo que querías, o hay segunda pregunta?»",
        },
        options: [
          {
            id: "aconsejar",
            say: { A: "Vayan juntos. Es mejor.", B: "Vayan juntos. Lisboa es bonita, y mejor si estás con ella.", C: "Vayan juntos; una ciudad nueva se soporta mejor acompañado." },
            reply: { A: "Aitana llora de alivio. Joel dice que sí.", B: "Aitana llora de alivio y Joel, por fin, asiente. «Vamos juntos.»", C: "Aitana llora de alivio y Joel asiente. «Vamos juntos. Pero tú, sin pistola.»" },
            mood: "smile", end: "lisboa",
          },
          {
            id: "irse",
            say: { A: "Hablen ustedes. Yo me voy.", B: "Hablen ustedes dos. Yo me voy ya.", C: "Hablen ustedes dos; yo me retiro." },
            reply: { A: "Se van. Aitana toma la mano de Joel. Tienen mucho de qué hablar.", B: "Te vas. Aitana toma la mano de Joel; hoy tienen más de qué hablar que nunca.", C: "Te alejas. Aitana toma la mano de Joel y, por fin, empiezan a hablar de verdad." },
            mood: "worried", end: "hablar",
          },
        ],
      },
      "granada-inicio": {
        who: "aitana", mood: "terror",
        line: {
          A: "En el parque, una pareja se columpia. Ven tu granada. Aitana grita. Los dos saltan del columpio y corren.",
          B: "Dos personas se columpian despacio. Ven tu granada, Aitana grita y los dos saltan de los columpios y salen corriendo hacia la salida.",
          C: "Una pareja se mece hasta que ven tu granada. Aitana lanza un grito que despierta a las palomas y los dos huyen por el parque, descalzos.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Vuelvan!", B: "¡Es de juguete! ¡Vuelvan, por favor!", C: "¡Es una réplica! ¡Vuelvan, no pasa nada!" },
            reply: { A: "Joel se detiene. «¿De juguete? ¿Seguro?» Aitana vuelve despacio.", B: "Joel se detiene a diez metros. «¿De juguete? ¿Seguro?» Aitana vuelve, despacio y sin soltarlo.", C: "Joel se detiene a diez metros. «¿Una réplica? ¿Lo juras?» Aitana regresa agarrada a su brazo." },
            mood: "scared", next: "granada-despues",
          },
          {
            id: "correr",
            say: { A: "¡Corro también!", B: "¡Yo también corro!", C: "¡Corro con ustedes!" },
            reply: { A: "Corren los tres. Arriba suena un helicóptero.", B: "Corren los tres sin saber por qué. Sobre el parque ya suena un helicóptero.", C: "Corren los tres sin rumbo. Sobre los árboles, un helicóptero empieza a rondar." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-despues": {
        who: "aitana", mood: "worried",
        line: {
          A: "Aitana y Joel, sin aliento, te miran. «Es nuestra peor noche… o la mejor. Aitana se va a Lisboa.»",
          B: "Aitana y Joel, sin aliento, te miran. Joel dice: «Qué susto. Hoy íbamos a decidir lo de Lisboa. Y mira cómo acaba.»",
          C: "Aitana y Joel, sin aliento, te miran. Joel confiesa: «Hoy decidíamos lo de Lisboa. Después de esto, cualquier decisión parece fácil.»",
        },
        options: [
          {
            id: "ir",
            say: { A: "Después de esto, Lisboa es fácil. Vayan.", B: "Después de esto, Lisboa es fácil. Vayan juntos.", C: "Tras esto, Lisboa es un paseo. Vayan juntos." },
            reply: { A: "Aitana se ríe. Joel dice que sí. Se abrazan.", B: "Aitana se ríe a carcajadas y Joel dice que sí. Se abrazan en el suelo del parque.", C: "Aitana se ríe hasta llorar y Joel dice que sí. Se abrazan sobre la arena." },
            mood: "smile", end: "lisboa",
          },
          {
            id: "calma",
            say: { A: "Respiren. Hablen en casa.", B: "Respiren hondo. Hablen en casa, con calma.", C: "Respiren. Háblenlo en casa, que la arena no es lugar de decisiones." },
            reply: { A: "Se van de la mano. Aitana mira atrás y se ríe.", B: "Se van de la mano. Aitana mira atrás una vez y se ríe sin poder evitarlo.", C: "Se van de la mano. Aitana mira atrás una vez y se ríe, ya sin miedo." },
            mood: "smile", end: "hablar",
          },
        ],
      },
      "corazon-inicio": {
        who: "aitana", mood: "love",
        line: {
          A: "En el parque, una pareja se columpia. Ven tu corazón y sonríen. Aitana dice: «Qué bonito. Nos conocimos aquí.»",
          B: "Una pareja se mece en los columpios. Ven tu corazón y sonríen sin saber por qué. Aitana dice: «Qué detalle. Nos conocimos justo aquí.»",
          C: "Una pareja se columpia hasta que ven tu corazón. Aitana se ablanda: «Nos conocimos en estos columpios. Él se cayó al intentar impresionarme.»",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "¿Y ahora qué pasa con ustedes?", B: "¿Y ahora qué pasa con ustedes dos?", C: "¿Y ahora? ¿Qué le espera a esta historia?" },
            reply: { A: "Joel mira a Aitana. «Lisboa. Ella se va. Yo no sé.»", B: "Joel mira a Aitana con ternura. «Lisboa. Ella tiene trabajo allí y yo no sé si seguirla.»", C: "Joel mira a Aitana como si la viera por primera vez. «Lisboa. Ella se va, y yo me quedo sin saber cómo decirle que la sigo.»" },
            mood: "love", next: "corazon-despues",
          },
          {
            id: "abrazo",
            say: { A: "Un abrazo para los dos.", B: "Les doy un abrazo a los dos.", C: "Me permito un abrazo para los dos." },
            reply: { A: "Aitana y Joel te abrazan. Se les caen unas lágrimas.", B: "Aitana y Joel te abrazan a la vez. A los tres se les escapan unas lágrimas.", C: "Aitana y Joel te abrazan a la vez. Hay lágrimas, risas y un columpio que se balancea solo." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-despues": {
        who: "aitana", mood: "love",
        line: {
          A: "Joel mira a Aitana. «Quiero ir contigo. Lo demás eran excusas.» Aitana se tapa la boca.",
          B: "Joel mira a Aitana un largo rato. «Quiero ir contigo. Lo demás eran excusas con buena ortografía.» Aitana se tapa la boca.",
          C: "Joel mira a Aitana sin pestañear. «Quiero ir contigo. Lo demás eran excusas de las que hay que desconfiar.» Aitana se tapa la boca, emocionada.",
        },
        options: [
          {
            id: "beso",
            say: { A: "Entonces bésala.", B: "Entonces, ¿a qué esperas? Bésala.", C: "Entonces solo falta un detalle: besarla." },
            reply: { A: "Joel la besa en el columpio. Aitana dice que sí a Lisboa.", B: "Joel la besa en pleno columpio. Aitana dice que sí a Lisboa, y a todo lo demás.", C: "Joel la besa, columpio incluido. Aitana dice que sí a Lisboa y a lo que venga." },
            mood: "love", end: "lisboa",
          },
          {
            id: "hablar",
            say: { A: "Háblenlo con calma. Se quieren.", B: "Háblenlo con calma. Se nota que se quieren.", C: "Háblenlo con calma; lo más difícil ya lo han dicho." },
            reply: { A: "Se van de la mano, sonriendo. Te dicen adiós.", B: "Se van de la mano, sonriendo. Aitana te manda un beso desde la esquina.", C: "Se van de la mano, sonriendo. Aitana te manda un beso desde la esquina y Joel, un pulgar en alto." },
            mood: "love", end: "hablar",
          },
        ],
      },
    },
    ends: {
      lisboa: { text: { A: "Aitana abraza a Joel. Los dos se ríen en los columpios.", B: "Aitana abraza a Joel. Se columpian juntos, haciendo planes para Lisboa.", C: "Aitana se lanza a abrazar a Joel y casi se caen los dos. Lisboa acaba de ganar dos vecinos." }, change: "abraza", recap: "Ayudaste a Aitana y Joel a decidir su futuro." },
      hablar: { text: { A: "Aitana y Joel se van a casa a hablar. Te dicen adiós.", B: "Aitana y Joel se van de la mano. Tienen mucho de qué hablar.", C: "Aitana y Joel se alejan de la mano, con una conversación larga por delante." }, change: "se-va", recap: "Diste un consejo a una pareja en los columpios." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Los columpios se quedan vacíos.", B: "Llega la policía y te quita el cuchillo. Aitana y Joel se van sin hablar de Lisboa.", C: "Llega una patrulla y se lleva tu cuchillo. Los columpios se quedan balanceándose solos y Lisboa, sin discutir." }, change: "policia", recap: "Un cuchillo en el parque acabó con la policía." },
      "pistola-policia": { text: { A: "La policía llega al parque. Te llevan. Aitana y Joel siguen temblando.", B: "La policía llega al parque y te lleva. Aitana y Joel se quedan en los columpios, temblando.", C: "Una patrulla entra en el parque y te lleva. Aitana y Joel se quedan en los columpios, sin saber si reír o llorar." }, change: "policia", recap: "Una pistola en el parque acabó con la policía." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el parque vacío. Aitana y Joel se esconden tras un árbol.", B: "Un helicóptero ilumina el parque vacío. Aitana y Joel miran desde detrás de un árbol, abrazados.", C: "Un helicóptero barre el parque vacío con su foco. Aitana y Joel miran desde detrás de un árbol, abrazados y sin habla." }, change: "helicoptero", recap: "Una granada en el parque trajo un helicóptero." },
      "corazon-abrazo": { text: { A: "Aitana y Joel te abrazan. Los tres se ríen en los columpios.", B: "Aitana y Joel te abrazan. Los tres acaban riendo y llorando en los columpios, a la vez.", C: "Aitana y Joel te abrazan y los tres acaban riendo y llorando a partes iguales, sentados en los columpios." }, change: "abraza", recap: "Te abrazaron Aitana y Joel en los columpios." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Con quién cenas cuando estás nervioso?", B: "¿Cómo reaccionas cuando alguien te sorprende con algo peligroso?", C: "¿Qué hace que un gesto amable se convierta en amenaza por un solo objeto?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué harías si un desconocido con un arma llamara a tu puerta?", B: "¿Cómo te comportas cuando tienes miedo pero tienes que parecer tranquilo?", C: "¿Qué valor tiene la hospitalidad ante alguien armado?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué cuatro cosas salvarías si tuvieras que salir corriendo de tu casa?", B: "¿Qué harías si en una cena familiar alguien gritara «¡granada!»?", C: "¿Por qué un susto compartido une más a una familia que una cena tranquila?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Cuál es el plato de tu abuela que más recuerdas?", B: "¿Quién te hace sentir en casa sin conocerte?", C: "¿Qué rituales de mesa te recuerdan a quien ya no está?" } },
    },
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
      "cuchillo-inicio": {
        who: "nieves", mood: "scared",
        line: {
          A: "Una ventana con luz. Una abuela te ve con un cuchillo y grita. «¡Ay, Dios! ¡Un cuchillo! ¡Llamen a la policía!»",
          B: "Por una ventana iluminada, la abuela Nieves te descubre con el cuchillo en la mano. Grita y la familia entera se asoma. «¿Qué haces con ese cuchillo? ¡Que alguien llame a la policía!»",
          C: "Tras la ventana iluminada, la abuela Nieves ve el cuchillo, suelta el cucharón y grita para que lo oiga el barrio. «¡Un cuchillo en la calle! ¡Que alguien llame a la policía, o a mi hijo, que es peor!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo miraba.", B: "Perdón, ya lo guardo. Solo estaba mirando la cena.", C: "Perdón, lo guardo. Solo contemplaba su cena, con un accesorio infeliz." },
            reply: { A: "La abuela baja la voz. «Bueno… A ver. ¿Tienes hambre?»", B: "La abuela baja la voz y se seca las manos en el delantal. «Bueno. Guárdalo bien. ¿Tienes hambre, hijo?»", C: "La abuela baja la voz y recupera el cucharón. «Guardado, pues. Y ahora dime: ¿tienes hambre o solo malas ideas?»" },
            mood: "worried", next: "cuchillo-despues",
          },
          {
            id: "huir",
            say: { A: "Me voy. Perdón.", B: "Me voy, perdone el susto.", C: "Me retiro; perdone el espectáculo." },
            reply: { A: "Un nieto sale al balcón y llama a la policía. Te vas rápido.", B: "Un nieto sale al balcón y llama a la policía mientras te alejas deprisa.", C: "Un nieto sale al balcón con el teléfono en la oreja y relata tu huida a la policía." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-despues": {
        who: "nieves", mood: "worried",
        line: {
          A: "La abuela Nieves te mira por la ventana. «Con ese cuchillo podrías cortar el pan. Sube. Pero sin él.»",
          B: "La abuela Nieves te estudia desde la ventana. «Ese cuchillo podría servir para cortar el pan. Sube, pero lo dejas en la calle.»",
          C: "La abuela Nieves te evalúa desde la ventana. «Ese cuchillo tendría mejor oficio cortando pan. Sube, pero el cuchillo se queda fuera.»",
        },
        options: [
          {
            id: "subir",
            say: { A: "Gracias. Subo sin él.", B: "Gracias. Subo, y el cuchillo se queda aquí.", C: "Gracias. Subo, y dejo el cuchillo bien lejos." },
            reply: { A: "Subes. Hay sopa y mucho pan. Nadie nombra el cuchillo.", B: "Subes. Te sientan entre dos nietos y te sirven sopa. Nadie vuelve a nombrar el cuchillo.", C: "Subes. Te sientan a la mesa y la sopa llega sin comentarios. El cuchillo no vuelve a nombrarse." },
            mood: "love", end: "cena",
          },
          {
            id: "saludo",
            say: { A: "Gracias, pero me voy. Buenas noches.", B: "Gracias, pero mejor me voy. Buenas noches.", C: "Se lo agradezco, pero mejor me retiro. Buenas noches." },
            reply: { A: "La abuela te lanza una mandarina. «Y no más cuchillos.»", B: "La abuela te lanza una mandarina. «Para el camino. Y no más cuchillos, ¿eh?»", C: "La abuela te lanza una mandarina con puntería. «Para el camino. Y la próxima vez, sin cuchillos.»" },
            mood: "smile", end: "saludo",
          },
        ],
      },
      "pistola-inicio": {
        who: "nieves", mood: "terror",
        line: {
          A: "Una ventana con luz. La abuela te ve con la pistola. Levanta las manos con el cucharón. «No dispares, hijo. Hay niños.»",
          B: "Por la ventana iluminada, la abuela Nieves ve la pistola en tu cintura. Levanta las manos con el cucharón. «No dispares, hijo. Aquí solo hay sopa y niños.»",
          C: "Tras la ventana, la abuela Nieves ve la pistola y alza las manos, cucharón incluido. «No dispares, hijo. Aquí hay sopa, niños y un abuelo sordo que no se entera de nada.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquila. La guardo. No hago nada.", B: "Tranquila, la guardo. No le voy a hacer nada.", C: "Calma, abuela, la guardo. Nadie va a salir herido." },
            reply: { A: "La abuela baja una mano. «¿Qué quieres, hijo? ¿Comida?»", B: "La abuela baja una mano y no la otra. «¿Qué quieres, hijo? ¿Comida? ¿Dinero? Pide, pero sin eso.»", C: "La abuela baja una mano, y la otra se queda en alto por si acaso. «¿Qué quieres? ¿Comida, dinero, consuelo? Pide, pero sin eso.»" },
            mood: "scared", next: "pistola-despues",
          },
          {
            id: "policia",
            say: { A: "Llame a la policía. Yo espero.", B: "Llamen a la policía. Yo espero aquí.", C: "Llamen a la policía; esperaré aquí, sin moverme." },
            reply: { A: "La abuela duda. Un nieto ya llamó. Suena una sirena.", B: "La abuela duda, pero un nieto ya había llamado. A lo lejos suena una sirena.", C: "La abuela duda, pero un nieto se les adelantó. Una sirena se acerca por la avenida." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-despues": {
        who: "nieves", mood: "scared",
        line: {
          A: "La abuela te mira por la ventana. «Con esa pistola nadie come en paz. Sube sin ella o vete.»",
          B: "La abuela te mira desde la ventana, con la familia agolpada detrás. «Con esa pistola nadie come en paz. Sube sin ella o vete.»",
          C: "La abuela te mide desde la ventana. «Con esa pistola, la sopa se enfría y mi corazón también. Sube sin ella o vete.»",
        },
        options: [
          {
            id: "subir",
            say: { A: "La dejo aquí. Subo.", B: "La dejo en el suelo. Subo.", C: "La dejo en el suelo, lejos. Subo." },
            reply: { A: "Subes. La abuela te sirve sopa con mano temblorosa. Nadie habla de la pistola.", B: "Subes. La abuela te sirve sopa con la mano todavía temblando. Nadie menciona la pistola.", C: "Subes. La abuela te sirve sopa con pulso inseguro. La pistola, abajo, es el elefante de la mesa." },
            mood: "worried", end: "cena",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón.", B: "Mejor me voy. Perdone el susto.", C: "Mejor me voy; perdone el susto." },
            reply: { A: "La abuela te lanza una mandarina, aún temblando. «Vete con Dios.»", B: "La abuela te lanza una mandarina, aún temblando. «Vete con Dios, hijo.»", C: "La abuela te lanza una mandarina, todavía temblando. «Que Dios te acompañe, y a mí me quite el susto.»" },
            mood: "worried", end: "saludo",
          },
        ],
      },
      "granada-inicio": {
        who: "nieves", mood: "terror",
        line: {
          A: "Una ventana con luz. La abuela ve tu granada y grita. «¡Una granada! ¡Todos fuera!» La familia sale corriendo con platos y niños.",
          B: "Por la ventana iluminada, la abuela Nieves ve la granada y grita: «¡Una granada! ¡Todos a la calle!» La familia entera baja las escaleras con platos, niños y el abuelo en silla.",
          C: "Tras la ventana, la abuela Nieves ve la granada y declara la evacuación con voz de capitana. «¡Todos a la calle! ¡Los niños, el abuelo, y el pan!» La cena entera sale en procesión.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Perdón!", B: "¡Es de juguete! ¡Perdonen, no hay peligro!", C: "¡Es una réplica! ¡Perdonen, no hay peligro alguno!" },
            reply: { A: "Nadie te cree. La familia se agrupa en la acera, con el pan.", B: "Nadie te cree. La familia se agrupa en la acera, abrazando el pan y a los niños.", C: "Nadie te cree. La familia se agrupa en la acera, con el pan como único bien salvado." },
            mood: "scared", next: "granada-despues",
          },
          {
            id: "correr",
            say: { A: "¡Corro lejos de ustedes!", B: "¡Corro lejos, para que no pase nada!", C: "¡Me alejo corriendo, que no sea por mi culpa!" },
            reply: { A: "Corres. Arriba suena un helicóptero.", B: "Corres calle abajo. Sobre las casas ya suena un helicóptero.", C: "Corres calle abajo. Sobre los tejados, un helicóptero empieza a rondar." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-despues": {
        who: "nieves", mood: "worried",
        line: {
          A: "La familia está en la acera. La abuela Nieves te mira. «¿De verdad es de juguete? Demuéstralo.»",
          B: "La familia espera en la acera en pijama y con la cena en las manos. La abuela Nieves te mira. «¿De juguete? Demuéstralo, hijo.»",
          C: "La familia espera en la acera, platos en mano. La abuela Nieves te escruta. «¿Réplica? Pues demuéstralo, que mi sopa se enfría.»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Miren. La abro. Está vacía.", B: "Miren, la abro delante de todos. Está vacía.", C: "Miren: la abro ante todos. Hueca." },
            reply: { A: "Todos se ríen. La abuela dice: «Entonces, a cenar.» Suben otra vez.", B: "Todos se ríen, aliviados. La abuela dice: «Pues a cenar, que se enfría.» Suben todos, contigo.", C: "Estalla una risa colectiva. La abuela dicta sentencia: «A cenar todos, tú incluido, que esto merece sopa.» Suben en procesión." },
            mood: "laugh", end: "cena",
          },
          {
            id: "saludo",
            say: { A: "Perdón por todo. Buenas noches.", B: "Perdón por el susto. Me voy.", C: "Disculpen el caos. Me retiro." },
            reply: { A: "La abuela te lanza una mandarina. «Lo del susto se queda en la calle.»", B: "La abuela te lanza una mandarina. «El susto se queda en la calle. Vete en paz.»", C: "La abuela te lanza una mandarina. «El susto, a la calle. Tú, a casa. Y que no se repita.»" },
            mood: "smile", end: "saludo",
          },
        ],
      },
      "corazon-inicio": {
        who: "nieves", mood: "love",
        line: {
          A: "Una ventana con luz. La abuela te ve con el corazón y baja corriendo. Te abraza en la puerta. «¡Ay, hijo! Pasa, pasa.»",
          B: "Por la ventana iluminada, la abuela Nieves ve tu corazón, baja las escaleras y te abraza en el portal. «¡Ay, hijo! Pasa, que hay sopa para todos.»",
          C: "La abuela Nieves ve tu corazón desde la ventana, baja las escaleras en zapatillas y te abraza en el portal. «¡Hijo mío! Pasa, que una abuela tiene que saber a quién alimenta.»",
        },
        options: [
          {
            id: "subir",
            say: { A: "Gracias, abuela. Subo.", B: "Gracias, abuela. Subo con usted.", C: "Gracias, abuela. Subo con usted, sin hacerme de rogar." },
            reply: { A: "Te sientan entre dos nietos. Todos preguntan: «¿Cómo te llamas?»", B: "Te sientan entre dos nietos que preguntan a coro: «¿Cómo te llamas? ¿Eres famoso?»", C: "Te sientan entre dos nietos que te interrogan a coro: «¿Cómo te llamas? ¿Tienes novia? ¿Sabes jugar a las cartas?»" },
            mood: "love", next: "corazon-despues",
          },
          {
            id: "beso",
            say: { A: "Le doy un beso en la mejilla.", B: "Le doy un beso a la abuela en la mejilla.", C: "Le planto un beso en la mejilla, con gratitud." },
            reply: { A: "La abuela se ríe y te da otro beso. La familia aplaude.", B: "La abuela se ríe y te devuelve el beso. Toda la familia aplaude desde el balcón.", C: "La abuela se ríe, se sonroja y te devuelve el beso. La familia entera aplaude desde el balcón." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-despues": {
        who: "nieves", mood: "love",
        line: {
          A: "En la mesa, la abuela cuenta su historia. «Mi marido y yo nos conocimos en un tranvía.» Te sirve más sopa.",
          B: "En la mesa, la abuela Nieves cuenta su vida. «Conocí a mi marido en un tranvía, él me pisó un pie y me pidió perdón con un tulipán.» Te sirve más sopa.",
          C: "En la mesa, la abuela Nieves cuenta su vida. «Conocí a mi marido en un tranvía: me pisó un pie y me pidió perdón con un tulipán robado.» Te rellena el plato sin preguntar.",
        },
        options: [
          {
            id: "cena",
            say: { A: "Qué historia tan bonita. Gracias por la cena.", B: "Qué historia tan bonita. Gracias por la cena, abuela.", C: "Qué historia tan hermosa. Gracias por esta cena." },
            reply: { A: "La abuela te acaricia la mejilla. «Vuelve el martes.»", B: "La abuela te acaricia la mejilla. «Vuelve el martes, que aquí siempre hay un plato para ti.»", C: "La abuela te acaricia la mejilla. «Vuelve el martes. En esta casa siempre sobra un plato, y casi siempre un nieto.»" },
            mood: "love", end: "cena",
          },
          {
            id: "saludo",
            say: { A: "Debo irme. Gracias por todo.", B: "Debo irme ya. Gracias por todo, abuela.", C: "Debo irme. Gracias por todo, de corazón." },
            reply: { A: "La abuela te da una mandarina. «Para el camino. Y vuelve.»", B: "La abuela te da una mandarina. «Para el camino. Y vuelve pronto.»", C: "La abuela te pone una mandarina en la mano. «Para el camino. Y vuelve, que ya eres de la familia.»" },
            mood: "love", end: "saludo",
          },
        ],
      },
    },
    ends: {
      cena: { text: { A: "Cenas con la familia de Nieves. Hablan mucho y se ríen.", B: "Cenas sopa con la familia de la abuela Nieves. Todos te preguntan cosas a la vez.", C: "Cenas en una casa ajena que, por diez minutos, parece tuya. Nadie pregunta quién eres." }, change: "luz", recap: "Cenaste con la familia de la abuela Nieves." },
      saludo: { text: { A: "Nieves te dice adiós con la mano. La ventana sigue con luz.", B: "La abuela Nieves te dice adiós desde la ventana y vuelve a la mesa.", C: "La abuela Nieves te despide y vuelve a su ruido feliz. La ventana sigue encendida." }, change: "sonrie", recap: "Saludaste a la abuela Nieves en su ventana." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. La familia vuelve a cenar.", B: "Llega la policía y te quita el cuchillo. La familia vuelve a su sopa, comentando el susto.", C: "Llega una patrulla y se lleva tu cuchillo. La familia vuelve a la sopa, y la abuela narra el drama con todo detalle." }, change: "policia", recap: "Un cuchillo bajo la ventana de la abuela Nieves acabó con la policía." },
      "pistola-policia": { text: { A: "La policía te lleva. La abuela Nieves mira desde la ventana, con el cucharón en alto.", B: "La policía te lleva. La abuela Nieves mira desde la ventana, con el cucharón aún en alto.", C: "La policía te lleva. La abuela Nieves mira desde la ventana con el cucharón en alto, como una bandera de rendición." }, change: "policia", recap: "Una pistola bajo la ventana de la abuela Nieves acabó con la policía." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la calle. La familia espera en la acera con la cena fría.", B: "Un helicóptero ilumina la calle. La familia espera en la acera, con la cena fría y el pan salvado.", C: "Un helicóptero barre la calle con su foco. La familia espera en la acera con la cena fría, el pan salvado y una anécdota para toda la vida." }, change: "helicoptero", recap: "Una granada bajo la ventana de la abuela Nieves trajo un helicóptero." },
      "corazon-beso": { text: { A: "La abuela Nieves te besa en la mejilla. Te vas con una sonrisa y una mandarina.", B: "La abuela Nieves te besa en la mejilla. Te vas con una sonrisa y una mandarina en el bolsillo.", C: "La abuela Nieves te besa en la mejilla y te despide desde la ventana. Te vas con una mandarina y la sensación de tener otra familia." }, change: "beso", recap: "La abuela Nieves te dio un beso desde la ventana." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Quién cocina en tu casa?", B: "¿Cómo reaccionas ante alguien que maneja un cuchillo con mucha seguridad?", C: "¿Cuándo un cuchillo es una herramienta y cuándo es un mensaje?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando tienes hambre y algo te asusta?", B: "¿Cómo reaccionarías si alguien armado te pidiera comida?", C: "¿Qué se negocia mejor con el estómago vacío o con miedo?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué plato te da más miedo probar?", B: "¿Cuál fue la comida más extrema que probaste?", C: "¿Por qué huimos de lo que no entendemos y luego lo contamos como anécdota?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Quién cocina con cariño para ti?", B: "¿Qué plato te hace pensar en alguien especial?", C: "¿Qué se pone en la comida cuando se cocina pensando en alguien?" } },
    },
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
      "cuchillo-inicio": {
        who: "wen", mood: "surprised",
        line: {
          A: "En el food truck, Chef Wen te ve con el cuchillo. Sonríe y saca su cuchillo enorme. «¿Un duelo? Yo corto más rápido.»",
          B: "En el food truck, Chef Wen ve tu cuchillo, sonríe sin inmutarse y saca el suyo, enorme. «¿Duelo de cocineros? Aviso: yo corto una cebolla en dos segundos.»",
          C: "En el food truck, Chef Wen ve tu cuchillo y desenvaina el suyo, ancho como un machete de sushi. «¿Reto? Aviso: yo trincho una cebolla antes de que parpadees.»",
        },
        options: [
          {
            id: "duelo",
            say: { A: "Acepto. Una cebolla. Tres, dos, uno.", B: "Acepto. Una cebolla cada uno. A la de tres.", C: "Acepto. Una cebolla cada uno; el que llore primero pierde." },
            reply: { A: "Los dos cortan. Wen gana por poco. Ambos lloran. La gente aplaude.", B: "Los dos cortan a toda velocidad. Wen gana por poco y los dos lloran por la cebolla. La cola aplaude.", C: "Los dos cortan a velocidad de espectáculo. Wen gana por un pelo y ambos lloran. La cola aplaude como en un circo." },
            mood: "laugh", next: "cuchillo-despues",
          },
          {
            id: "guardar",
            say: { A: "No, gracias. Lo guardo. Perdón.", B: "No, gracias. Lo guardo. Perdona el malentendido.", C: "Paso, gracias. Lo guardo, con mis disculpas." },
            reply: { A: "Wen guarda el suyo despacio. «Pues ya no hay duelo. Y tampoco plato.»", B: "Wen guarda el suyo despacio. «Sin duelo no hay espectáculo. Y sin espectáculo, no hay plato.»", C: "Wen guarda el suyo con lentitud teatral. «Sin duelo no hay espectáculo, y sin espectáculo no te invento plato.»" },
            mood: "angry", end: "cuchillo-vacio",
          },
        ],
      },
      "cuchillo-despues": {
        who: "wen", mood: "smile",
        line: {
          A: "Wen limpia el cuchillo. «Te invento un plato por ganar casi. ¿Dulce o salado?»",
          B: "Wen limpia el cuchillo. «Por perder con honor, te invento un plato. ¿Dulce, salado o picante?»",
          C: "Wen limpia el cuchillo con respeto. «Por perder con honor, te debo un plato. ¿Dulce, salado, o ambas cosas con un poco de dolor?»",
        },
        options: [
          {
            id: "picante",
            say: { A: "Salado y picante, por favor.", B: "Algo salado y picante, que me ha dado sed el duelo.", C: "Salado y picante; el duelo me ha dejado con ganas de fuego." },
            reply: { A: "Wen cocina rápido. «Toma: bollo con pollo y chile.» Está buenísimo.", B: "Wen cocina en un minuto. «Bollo al vapor con pollo, mango y chile.» Está buenísimo.", C: "Wen cocina en un minuto. «Bollo al vapor con pollo, mango y un chile con mala leche.» Está soberbio." },
            mood: "love", end: "receta",
          },
          {
            id: "raro",
            say: { A: "Sorpréndeme. Algo raro.", B: "Sorpréndeme. Algo muy raro.", C: "Sorpréndeme: lo más extravagante que tengas." },
            reply: { A: "Wen sonríe. Te sirve un plato misterioso. Sabe raro y bien.", B: "Wen sonríe y te sirve un plato que nadie sabe nombrar. Raro, pero extrañamente bueno.", C: "Wen sonríe y te sirve algo sin nombre ni precedentes. Raro, desconcertante y, a su manera, delicioso." },
            mood: "surprised", end: "raro",
          },
        ],
      },
      "pistola-inicio": {
        who: "wen", mood: "terror",
        line: {
          A: "En el food truck, Chef Wen ve tu pistola y levanta las manos. «¡No, por favor! La caja está abierta. Toma lo que quieras.»",
          B: "En el food truck, Chef Wen ve la pistola y levanta las manos con la espátula todavía en una. «¡Calma! La caja está abierta. Llévate lo que quieras, pero no me hagas nada.»",
          C: "En el food truck, Chef Wen ve la pistola y alza las manos, espátula incluida. «Tranquilo. La caja está abierta, el chile también. Llévate lo que quieras, pero respeta mi cocina.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Solo quiero comer. La guardo.", B: "Solo quiero un plato. La guardo ahora mismo.", C: "Solo vengo por un plato. La guardo, perdona." },
            reply: { A: "Wen baja las manos. «¿Solo comer? Vale. Siéntate, que cocino.»", B: "Wen baja las manos, aún tenso. «¿Solo un plato? Siéntate, que te invento algo. Sin esa cosa a la vista.»", C: "Wen baja las manos, todavía pálido. «¿Solo un plato? Entonces siéntate, que cocino. Y esa cosa, bien lejos de mi grill.»" },
            mood: "scared", next: "pistola-despues",
          },
          {
            id: "dinero",
            say: { A: "Dame el dinero. Rápido.", B: "Dame el dinero de la caja. Rápido.", C: "La caja. Ahora. Sin hacerme repetirlo." },
            reply: { A: "Wen te da el dinero, temblando. Se oye una sirena.", B: "Wen te da el dinero con la mano temblando. A lo lejos suena una sirena.", C: "Wen vacía la caja con dedos temblorosos. Una sirena atraviesa los galpones." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-despues": {
        who: "wen", mood: "scared",
        line: {
          A: "Wen te sirve un plato con cuidado. «Toma. Gratis. Pero pórtate bien, ¿eh?»",
          B: "Wen te sirve un plato con mucho cuidado. «Invita la casa. Pero pórtate bien, ¿vale? Mi mamá me enseñó a no discutir con hambrientos armados.»",
          C: "Wen te sirve un plato en silencio absoluto. «Invita la casa. Pero come tranquilo y sin gestos raros; mi madre me enseñó a no discutir con hambrientos armados.»",
        },
        options: [
          {
            id: "probar",
            say: { A: "Gracias. Está rico. Perdón por el susto.", B: "Gracias, está muy rico. Perdona el susto.", C: "Gracias; está excelente. Y perdona el susto." },
            reply: { A: "Wen sonríe sin mucha fe. «Gracias. Vuelve… sin eso.»", B: "Wen sonríe sin mucha fe. «Gracias. Vuelve, pero sin eso.»", C: "Wen sonríe con cautela. «Gracias. Vuelve cuando quieras, pero sin tu compañera de cinturón.»" },
            mood: "worried", end: "receta",
          },
          {
            id: "raro",
            say: { A: "Es muy raro. Pero lo como.", B: "Es raro, pero lo como todo.", C: "Raro, sí. Pero me lo acabo." },
            reply: { A: "Wen suspira. «Lo raro es bueno. Lo de la pistola, no.»", B: "Wen suspira aliviado. «Lo raro es mi especialidad. Lo de la pistola, no.»", C: "Wen suspira. «Lo raro, perfecto. Lo de la pistola, ni de broma.»" },
            mood: "worried", end: "raro",
          },
        ],
      },
      "granada-inicio": {
        who: "wen", mood: "terror",
        line: {
          A: "En el food truck, Chef Wen ve tu granada. Grita y salta por la ventanilla. La cola huye. «¡Una granada! ¡Corran!»",
          B: "En el food truck, Chef Wen ve la granada, grita y salta por la ventanilla. La cola entera sale corriendo entre los galpones. «¡Una granada! ¡Todo el mundo fuera!»",
          C: "En el food truck, Chef Wen ve la granada, lanza un alarido y salta por la ventanilla con el delantal puesto. La cola se disuelve. «¡Una granada! ¡Corran, que dejé el gas encendido!»",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Vuelva!", B: "¡Es de juguete! ¡Vuelva, Chef, por favor!", C: "¡Es una réplica! ¡Vuelva, Chef!" },
            reply: { A: "Wen asoma la cabeza desde un contenedor. «¿De juguete? Prueba a abrirla.»", B: "Wen asoma la cabeza desde detrás de un contenedor. «¿De juguete? Pues demuéstralo abriéndola.»", C: "Wen asoma la cabeza tras un contenedor. «¿Una réplica? Pues ábrela, y que lo vea la cola.»" },
            mood: "scared", next: "granada-despues",
          },
          {
            id: "correr",
            say: { A: "¡Corro también!", B: "¡Yo también corro!", C: "¡Corro con todos!" },
            reply: { A: "Corres. Arriba suena un helicóptero sobre Los Galpones.", B: "Corres entre los galpones. Arriba suena un helicóptero.", C: "Corres entre los galpones. Sobre los techos, un helicóptero empieza a rondar." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-despues": {
        who: "wen", mood: "surprised",
        line: {
          A: "Abres la granada. Dentro hay caramelos. Wen se acerca despacio. «¿Caramelos? ¿Para mí?»",
          B: "Abres la granada: dentro hay caramelos de menta. Wen se acerca despacio, con la espátula en alto. «¿Caramelos? ¿De postre?»",
          C: "Abres la granada y salen caramelos de menta por todas partes. Wen se acerca con la espátula como escudo. «¿Caramelos? Este es el atentado más dulce de mi carrera.»",
        },
        options: [
          {
            id: "receta",
            say: { A: "Es para el postre. ¡Cocina algo!", B: "Es para el postre. ¡Invéntate algo con ellos!", C: "Son para el postre; improvisa un plato con ellos." },
            reply: { A: "Wen se ríe y cocina un postre de menta. La cola vuelve y aplaude.", B: "Wen se ríe y cocina un postre de menta con caramelos. La cola regresa, aplaude y hace pedidos.", C: "Wen se ríe, inventa un postre de menta explosiva y la cola regresa, aplaude y pide repetición." },
            mood: "laugh", end: "receta",
          },
          {
            id: "raro",
            say: { A: "Es broma. Perdón.", B: "Es una broma. Perdón por el susto.", C: "Una broma de dudoso gusto. Perdón por el susto." },
            reply: { A: "Wen come un caramelo. «Raro. Pero me gusta.» La cola vuelve.", B: "Wen se mete un caramelo en la boca. «Raro. Pero me gusta.» La cola vuelve, poco a poco.", C: "Wen se mete un caramelo en la boca. «Raro, desconcertante y de menta. Perdonado.» La cola regresa con cautela." },
            mood: "smile", end: "raro",
          },
        ],
      },
      "corazon-inicio": {
        who: "wen", mood: "love",
        line: {
          A: "En el food truck, Chef Wen ve tu corazón y se sonroja. Se quita el gorro y te besa la mano. «Hoy invito yo.»",
          B: "En el food truck, Chef Wen ve tu corazón, se sonroja y se quita el gorro. Te besa la mano. «Hoy no pagas. Hoy cocino con el corazón.»",
          C: "En el food truck, Chef Wen ve tu corazón y la espátula se le cae. Se quita el gorro y te besa la mano con una reverencia. «Hoy no hay menú ni cuenta. Hoy cocino a tu salud.»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "Gracias, Chef. Sorpréndeme.", B: "Gracias, Chef. Sorpréndeme con lo que quieras.", C: "Gracias, Chef. Sorpréndeme: me pongo en tus manos." },
            reply: { A: "Wen cocina con una sonrisa. «Plato nuevo: “Para ti”.» Huele a vainilla.", B: "Wen cocina con una sonrisa enorme. «Plato nuevo, bautizado hoy: “Para ti”.» Huele a vainilla y chocolate.", C: "Wen cocina como en trance. «Plato nuevo: “Para ti”, con vainilla, sal y cero prudencia.» Huele a promesa." },
            mood: "love", next: "corazon-despues",
          },
          {
            id: "beso",
            say: { A: "Te doy un beso en la mejilla.", B: "Te doy un beso en la mejilla, Chef.", C: "Me permito un beso en la mejilla, Chef." },
            reply: { A: "Wen se pone rojo. Se ríe. «Esto sube el precio… de nada.» Te regala un postre.", B: "Wen se pone rojo como el chile. «Esto sube el precio… de nada. Invita la casa.» Te regala un postre.", C: "Wen enrojece hasta las cejas. «Esto sube mi cotización. Invita la casa.» Te regala un postre y no deja de sonreír." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-despues": {
        who: "wen", mood: "love",
        line: {
          A: "Pruebas el plato. Wen te mira. «¿Te gusta?» Tú dices que sí. Él suspira, feliz.",
          B: "Pruebas el plato bajo la mirada tierna de Wen. «¿Te gusta?» Tú asientes y él suspira, feliz y aliviado.",
          C: "Pruebas el plato mientras Wen te observa con la ansiedad de un enamorado. «¿Te gusta?» Asientes y él se deja caer sobre el mostrador, vencido.",
        },
        options: [
          {
            id: "encanta",
            say: { A: "Me encanta. Y tú también me caes bien.", B: "Me encanta el plato. Y tú me caes todavía mejor.", C: "El plato es una declaración. Y tú, una compañía excelente." },
            reply: { A: "Wen se ríe. «Mañana pongo tu nombre al menú.»", B: "Wen se ríe, colorado. «Mañana tu nombre estará en el menú.»", C: "Wen se ríe, colorado hasta el gorro. «Mañana tu nombre figura en el menú, entre el cerdo y el mango.»" },
            mood: "love", end: "receta",
          },
          {
            id: "raro",
            say: { A: "Es raro. Pero es muy bonito.", B: "Es raro, pero es precioso.", C: "Es raro, pero tiene su belleza." },
            reply: { A: "Wen sonríe. «Lo raro y lo bonito se parecen.» Te regala otro.", B: "Wen sonríe. «Lo raro y lo bonito se parecen mucho.» Te regala otro plato.", C: "Wen sonríe. «Lo raro y lo bello son primos hermanos.» Te regala otro plato por la observación." },
            mood: "love", end: "raro",
          },
        ],
      },
    },
    ends: {
      receta: { text: { A: "Wen te da otro plato gratis. Comes contento en la acera.", B: "Chef Wen te regala otra ración. Comes en la acera mientras el bajo de La Fábrica marca el ritmo.", C: "Chef Wen te regala otra ración y la promesa de bautizar un plato en tu honor." }, change: "sonrie", recap: "Probaste un plato inventado por Chef Wen." },
      raro: { text: { A: "Comes el plato raro. Wen se ríe y cocina para otro cliente.", B: "Terminas el plato raro y Chef Wen ya inventa otro para el siguiente cliente.", C: "Terminas el plato, todavía sin veredicto. Chef Wen ya experimenta con el siguiente cliente." }, change: "sigue", recap: "Comiste el plato más raro de Los Galpones." },
      "cuchillo-vacio": { text: { A: "Te quedas sin plato. Wen vuelve a cortar cebollas. La cola te mira.", B: "Te quedas sin plato. Wen vuelve a sus cebollas y la cola te mira con reproche.", C: "Te quedas sin plato. Wen retoma sus cebollas con solemnidad y la cola te juzga en silencio." }, change: "sigue", recap: "Rechazaste el duelo de cebollas con Chef Wen." },
      "pistola-policia": { text: { A: "Llega la policía. Te quitan la pistola. Wen sirve un café a los agentes.", B: "Llega la policía y te quita la pistola. Wen, ya más tranquilo, les sirve un café a los agentes.", C: "Llega una patrulla y te quita la pistola. Wen, repuesto, les sirve un café a los agentes y les cuenta el plato que no cocinó." }, change: "policia", recap: "Una pistola en el food truck acabó con la policía." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina Los Galpones. Wen sale de su escondite con la espátula. «¿Qué es esto?»", B: "Un helicóptero ilumina Los Galpones. Wen sale de su escondite con la espátula en alto. «¿Y esto qué es?»", C: "Un helicóptero barre Los Galpones con su foco. Wen sale de su escondite, espátula en alto, hecho un dios de la cocina ofendido." }, change: "helicoptero", recap: "Una granada en el food truck trajo un helicóptero." },
      "corazon-beso": { text: { A: "Wen te sirve el postre y un beso en la mejilla. El bajo de La Fábrica marca el ritmo.", B: "Wen te sirve el postre y te da un beso en la mejilla. El bajo de La Fábrica marca el ritmo del momento.", C: "Wen te sirve el postre, te da un beso en la mejilla y el bajo de La Fábrica pone banda sonora al momento." }, change: "beso", recap: "Chef Wen te dio un beso y un postre." },
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
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tus vecinos se quejan de ruido?", B: "¿Cómo reaccionas cuando un perro ladra mucho a un desconocido?", C: "¿Qué le pasa a un animal protector cuando ve un objeto amenazante?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué harías para proteger a tu mascota?", B: "¿Cómo te comportas cuando alguien tiene miedo de ti?", C: "¿Qué se pierde en la convivencia cuando la desconfianza se instala?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué ruido te despierta de noche?", B: "¿Qué fue lo más ruidoso que pasó en tu calle?", C: "¿Por qué un susto colectivo despierta a todo un edificio, pero no a todos de la misma manera?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Quién te recibe con alegría cuando llegas a casa?", B: "¿Cómo trata un animal a quien le cae bien?", C: "¿Qué dice de una persona que un perro se le tumbe encima en cuanto la conoce?" } },
    },
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
      "cuchillo-inicio": {
        who: "iker", mood: "scared",
        line: {
          A: "Un perro ladra desde un balcón. Su dueño ve tu cuchillo y grita. «¡Oye! ¿Qué haces con eso? ¡Canelo, atrás!»",
          B: "Un perro marrón ladra desde el balcón. Su dueño ve el cuchillo en tu mano y grita. «¿Qué haces con ese cuchillo? ¡Canelo, atrás! ¡Guarda eso!»",
          C: "Un perro diminuto ladra con furia desde el balcón. Su dueño ve el cuchillo y agarra al perro. «¿Para qué es eso? Canelo se ha vuelto loco, y con motivo. ¡Guárdalo!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Es para cortar pan.", B: "Perdón, lo guardo. Es para cortar pan.", C: "Perdón, lo guardo. Iba a cortar pan y escogí mal el momento." },
            reply: { A: "Iker respira. Canelo deja de ladrar. «Bueno. Entiendo.»", B: "Iker respira. Canelo deja de ladrar poco a poco. «Bueno. Mejor así. No me gustan los cuchillos.»", C: "Iker respira. Canelo baja el volumen, aún receloso. «Mejor. Canelo y yo tenemos poca paciencia con los cuchillos.»" },
            mood: "worried", next: "cuchillo-despues",
          },
          {
            id: "huir",
            say: { A: "Me voy. Perdón.", B: "Me voy, perdón por el susto.", C: "Me voy; perdone la alarma." },
            reply: { A: "Iker llama a la policía. Canelo ladra hasta que te vas.", B: "Iker llama a la policía mientras Canelo ladra hasta que desapareces de la calle.", C: "Iker llama a la policía y Canelo ladra tu huida como un comentarista deportivo." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-despues": {
        who: "iker", mood: "worried",
        line: {
          A: "Iker abraza a Canelo. «Mi perro es mi familia. Con cuchillos no.» Canelo gruñe bajito.",
          B: "Iker abraza a Canelo, que gruñe bajito. «Vivo solo. Este perro es mi familia. No me gustan los cuchillos cerca.»",
          C: "Iker abraza a Canelo, que gruñe en voz baja. «Vivo solo. El perro es mi familia entera. Y la familia no se acerca con cuchillos.»",
        },
        options: [
          {
            id: "amigos",
            say: { A: "Entiendo. Canelo es bueno. Perdón.", B: "Entiendo. Canelo es un buen guardián. Perdón.", C: "Lo entiendo. Canelo es un guardián ejemplar. Perdón." },
            reply: { A: "Canelo mueve la cola. Iker sonríe. «Ya puedes irte tranquilo.»", B: "Canelo mueve la cola un poquito. Iker sonríe. «Ya puedes irte tranquilo. Y gracias por guardarlo.»", C: "Canelo agita la cola un milímetro. Iker sonríe. «Ya puedes irte en paz. Y gracias por tu rectificación.»" },
            mood: "smile", end: "amigos",
          },
          {
            id: "dormido",
            say: { A: "Lo siento. Que descansen.", B: "Lo siento. Que descansen los dos.", C: "Lo siento. Que descansen los dos, tras este susto." },
            reply: { A: "Iker acaricia a Canelo hasta que se duerme.", B: "Iker acaricia a Canelo hasta que se duerme en sus brazos.", C: "Iker acaricia a Canelo con paciencia hasta que el perro se duerme, agotado por el heroísmo." },
            mood: "sleepy", end: "dormido",
          },
        ],
      },
      "pistola-inicio": {
        who: "iker", mood: "terror",
        line: {
          A: "Un perro ladra desde un balcón. Su dueño ve tu pistola y levanta las manos. «¡No! ¡Canelo, calla! ¡No dispares!»",
          B: "Un perro marrón ladra en el balcón. Su dueño ve la pistola y levanta las manos. «¡No dispares! ¡Canelo, calla! ¡Es solo un perro!»",
          C: "Un perro diminuto ladra en el balcón. Su dueño ve la pistola, alza las manos y se coloca delante de Canelo. «¡No dispares! Es un perro de treinta centímetros, no una amenaza.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquilo. La guardo. No dispararé.", B: "Tranquilo, la guardo. Nadie va a disparar.", C: "Calma, la guardo. No hay nada que temer." },
            reply: { A: "Iker baja las manos. Canelo sigue ladrando. «Por favor, vete.»", B: "Iker baja las manos. Canelo ladra sin parar. «Por favor, vete. No quiero problemas.»", C: "Iker baja las manos. Canelo ladra a pleno pulmón. «Por favor, vete. Esta noche solo quería dormir.»" },
            mood: "scared", next: "pistola-despues",
          },
          {
            id: "callar",
            say: { A: "Calla al perro. Ya.", B: "Calla al perro o disparo.", C: "O callas a ese perro, o la noche acaba mal." },
            reply: { A: "Iker tapa el hocico a Canelo. Se oye una sirena.", B: "Iker le tapa el hocico a Canelo, temblando. A lo lejos suena una sirena.", C: "Iker sujeta el hocico de Canelo con manos temblorosas. Una sirena rompe la calle." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-despues": {
        who: "iker", mood: "scared",
        line: {
          A: "Iker abraza a Canelo, que ya no ladra. «Es mi único compañero. Por favor, no le hagas nada.»",
          B: "Iker abraza a Canelo, que por fin ha dejado de ladrar. «Es mi único compañero desde que vivo solo. Por favor, no le hagas nada.»",
          C: "Iker abraza a Canelo, que por primera vez guarda silencio. «Es mi única compañía desde la separación. Por favor, a él no.»",
        },
        options: [
          {
            id: "amigos",
            say: { A: "No le haré nada. Lo siento.", B: "No le haré nada. Lo siento mucho.", C: "No le tocaré un pelo. Lo siento muchísimo." },
            reply: { A: "Canelo lame la mano de Iker. Iker te mira. «Gracias.»", B: "Canelo lame la mano de Iker. Iker te mira, todavía tenso. «Gracias por entenderlo.»", C: "Canelo lame la mano de Iker, que te mira con una mezcla de miedo y gratitud. «Gracias. Es todo lo que tengo.»" },
            mood: "worried", end: "amigos",
          },
          {
            id: "dormido",
            say: { A: "Que descansen. Me voy.", B: "Que descansen los dos. Me voy.", C: "Que descansen. Yo me retiro." },
            reply: { A: "Te vas. Canelo se duerme en brazos de Iker.", B: "Te vas. Canelo se duerme en brazos de Iker, que no suelta la mirada de la calle.", C: "Te alejas. Canelo se duerme en brazos de Iker, que vigila la calle hasta que doblas la esquina." },
            mood: "worried", end: "dormido",
          },
        ],
      },
      "granada-inicio": {
        who: "iker", mood: "terror",
        line: {
          A: "Un perro ladra desde un balcón. Su dueño ve tu granada y grita. Canelo ladra más fuerte. Se encienden las luces de todo el edificio.",
          B: "Un perro marrón ladra desde el balcón. Su dueño ve la granada y grita. Canelo ladra más fuerte y se encienden las luces de todo el edificio.",
          C: "Un perro diminuto ladra desde el balcón. Su dueño ve la granada y lanza un grito que se oye en tres calles. Canelo duplica el volumen y el edificio entero enciende sus luces.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Calma!", B: "¡Es de juguete! ¡Calma, por favor!", C: "¡Es una réplica! ¡Calma, calma!" },
            reply: { A: "Iker no te oye. Los vecinos asoman. Alguien grita: «¡Policía!»", B: "Iker no te oye entre los ladridos. Los vecinos asoman a las ventanas. Alguien grita: «¡Llamen a la policía!»", C: "Iker no te oye entre los ladridos. Los vecinos se asoman como en un teatro. Alguien grita: «¡Policía, ya!»" },
            mood: "scared", next: "granada-despues",
          },
          {
            id: "correr",
            say: { A: "¡Corro lejos!", B: "¡Corro lejos de aquí!", C: "¡Me alejo corriendo!" },
            reply: { A: "Corres. Arriba suena un helicóptero. Canelo ladra al cielo.", B: "Corres calle abajo. Sobre el edificio suena un helicóptero y Canelo le ladra al cielo.", C: "Corres calle abajo. Un helicóptero ronda el edificio y Canelo le ladra al cielo como a un enemigo personal." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-despues": {
        who: "iker", mood: "surprised",
        line: {
          A: "Iker, rodeado de vecinos, baja a la calle con Canelo. «¿Qué es eso? ¿Es de verdad?»",
          B: "Iker baja a la calle con Canelo en brazos, rodeado de vecinos en pijama. «¿Qué es eso? ¿Es de verdad? ¡Dímelo ya!»",
          C: "Iker baja a la calle con Canelo en brazos y media comunidad detrás. «¿Qué es esa cosa? ¿Es auténtica? ¡Respóndeme antes de que Canelo me muerda a mí!»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Mira. La abro. Está vacía.", B: "Mira, la abro. Está vacía.", C: "Mira: la abro delante de todos. Hueca." },
            reply: { A: "Todos se ríen. Canelo la huele y se calla. Iker sonríe por fin.", B: "Todos se ríen, aliviados. Canelo la huele y se calla. Iker sonríe por fin.", C: "Estalla una carcajada colectiva. Canelo la olfatea con desdén y se calla. Iker sonríe por fin." },
            mood: "laugh", end: "amigos",
          },
          {
            id: "dormir",
            say: { A: "Perdón por todo. Que todos duerman.", B: "Perdón a todos. Que descansen.", C: "Perdón a todos. Que descansen, que la noche ha sido larga." },
            reply: { A: "Los vecinos vuelven a dormir. Canelo duerme en brazos de Iker.", B: "Los vecinos vuelven a sus camas. Canelo se duerme en brazos de Iker, agotado.", C: "Los vecinos regresan a sus camas, comentando el susto. Canelo se duerme en los brazos de Iker, exhausto de tanto ladrar." },
            mood: "sleepy", end: "dormido",
          },
        ],
      },
      "corazon-inicio": {
        who: "iker", mood: "love",
        line: {
          A: "Un perro ladra desde un balcón. Ve tu corazón y se calla de golpe. Salta del balcón a tus brazos y te lame la cara. Iker no lo puede creer.",
          B: "Un perro marrón ladra desde un balcón. Ve tu corazón, se calla de golpe y baja corriendo la escalera hasta tus brazos. Te lame la cara. Iker no da crédito.",
          C: "Un perro diminuto ladra desde el balcón hasta que ve tu corazón. Se calla en seco, baja la escalera como un cohete y te lame la cara. Iker, desde arriba, se frota los ojos.",
        },
        options: [
          {
            id: "acariciar",
            say: { A: "¡Qué bonito eres, Canelo!", B: "¡Qué bonito eres, Canelo! Eres un amor.", C: "¡Qué elegante eres, Canelo! Un caballero." },
            reply: { A: "Iker baja corriendo. «¡Nunca hace eso!» Canelo no se despega de ti.", B: "Iker baja corriendo. «¡Nunca hace eso con nadie!» Canelo no se despega de tus brazos.", C: "Iker baja corriendo. «¡Jamás hace esto con extraños!» Canelo se acurruca contra tu pecho, sin intención de soltarte." },
            mood: "love", next: "corazon-despues",
          },
          {
            id: "beso",
            say: { A: "Le doy un beso a Canelo.", B: "Le doy un beso en la cabeza a Canelo.", C: "Le planto un beso en la cabeza a Canelo." },
            reply: { A: "Canelo se emociona. Iker se ríe. «Yo también quiero uno.»", B: "Canelo mueve la cola sin parar. Iker se ríe. «Yo también quiero uno, pero el mío es de pago.»", C: "Canelo agita la cola como un helicóptero. Iker se ríe. «Yo también quiero uno, aunque conmigo hay que negociar.»" },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-despues": {
        who: "iker", mood: "love",
        line: {
          A: "Iker te mira. «Este año fue difícil. Canelo me salvó. Parece que tú también tienes algo.»",
          B: "Iker te mira con ternura. «Este año fue muy duro para mí. Canelo me salvó. Y tú tienes algo parecido: calma.»",
          C: "Iker te mira con los ojos húmedos. «Este año me rompió por dentro y Canelo me recompuso. Tú tienes un don parecido, ¿lo sabías?»",
        },
        options: [
          {
            id: "amigos",
            say: { A: "Gracias, Iker. Podemos pasear con Canelo.", B: "Gracias, Iker. Podemos pasear con Canelo algún día.", C: "Gracias, Iker. Podemos sacar a Canelo juntos algún día." },
            reply: { A: "Iker sonríe. «Mañana en el parque.» Canelo ladra feliz.", B: "Iker sonríe. «Mañana en el parque de los columpios.» Canelo ladra, feliz.", C: "Iker sonríe. «Mañana, parque de los columpios, a las ocho.» Canelo ladra su aprobación." },
            mood: "love", end: "amigos",
          },
          {
            id: "dormido",
            say: { A: "Descansa, Canelo. Es tarde.", B: "Descansa, Canelo. Ha sido una noche larga.", C: "Descansa, Canelo. Ha sido una noche larguísima." },
            reply: { A: "Canelo se duerme en tus brazos. Iker lo mira, emocionado.", B: "Canelo se duerme en tus brazos. Iker os mira a los dos, emocionado.", C: "Canelo se duerme sobre tu pecho. Iker os contempla a los dos, sin atreverse a respirar." },
            mood: "love", end: "dormido",
          },
        ],
      },
    },
    ends: {
      amigos: { text: { A: "Iker y Canelo te dicen adiós desde el balcón. Canelo ya no ladra.", B: "Iker te saluda desde el balcón y Canelo, por fin tranquilo, mueve la cola.", C: "Iker te despide desde el balcón. Canelo, en silencio, te concede el título de vecino honorario." }, change: "sonrie", recap: "Te hiciste amigo de Iker y su perro Canelo." },
      dormido: { text: { A: "Canelo se duerme. Iker entra en casa y apaga la luz.", B: "Canelo se queda dormido. Iker te da las gracias en voz baja y apaga la luz.", C: "Canelo ronca. Iker apaga la luz con cuidado, como quien desactiva una alarma." }, change: "duerme", recap: "Ayudaste a calmar al perro de Iker." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Canelo mira desde el balcón.", B: "Llega la policía y te quita el cuchillo. Canelo vigila desde el balcón, con aire de triunfo.", C: "Llega una patrulla y se lleva tu cuchillo. Canelo contempla la escena desde el balcón, satisfecho de su gestión." }, change: "policia", recap: "Un cuchillo bajo el balcón de Canelo acabó con la policía." },
      "pistola-policia": { text: { A: "La policía llega. Te llevan. Iker abraza a Canelo en el balcón.", B: "La policía llega y te lleva. Iker abraza a Canelo en el balcón, con las manos todavía temblando.", C: "La policía llega y te lleva. Iker abraza a Canelo en el balcón, temblando los dos, uno de miedo y el otro de indignación." }, change: "policia", recap: "Una pistola bajo el balcón de Canelo acabó con la policía." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la calle. Canelo ladra al cielo. Iker lo abraza.", B: "Un helicóptero ilumina la calle. Canelo le ladra al cielo y Iker lo abraza, resignado.", C: "Un helicóptero barre la calle con su foco. Canelo le ladra, valiente, y Iker lo abraza con la resignación de un vecino nocturno." }, change: "helicoptero", recap: "Una granada bajo el balcón de Canelo trajo un helicóptero." },
      "corazon-beso": { text: { A: "Canelo te lame la cara. Iker te da las gracias. Hay besos para todos.", B: "Canelo te lame la cara y Iker te da las gracias entre risas. Hay besos para todos.", C: "Canelo te cubre la cara de lametones y Iker, entre risas, te da las gracias. Aquella noche hubo besos para todo el mundo." }, change: "beso", recap: "Canelo te besó y Iker te dio las gracias." },
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
